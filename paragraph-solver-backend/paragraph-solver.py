from langchain.text_splitter import CharacterTextSplitter
from langchain.embeddings import HuggingFaceEmbeddings
from langchain.chains.question_answering import load_qa_chain
from langchain.vectorstores import FAISS
from langchain import HuggingFaceHub
from flask import Flask, json, request
from flask_cors import CORS

api = Flask(__name__)
CORS(api)

vector_store = None
qa_chain = None


@api.route("/paragraph", methods=["POST"])
def processParagraph():
    global vector_store
    global qa_chain
    para: str = request.get_json()["data"]
    text_splitter = CharacterTextSplitter(chunk_size=100, chunk_overlap=0)
    document_chunks = text_splitter.create_documents([para])
    embeddings = HuggingFaceEmbeddings()
    vector_store = FAISS.from_documents(document_chunks, embeddings)
    qa_model = HuggingFaceHub(
        repo_id="google/flan-t5-xxl",
        model_kwargs={"temperature": 0.1, "max_length": 1024},
    )
    qa_chain = load_qa_chain(qa_model, chain_type="stuff")
    return json.dumps({"Prcessing": "Completed"}), 200


@api.route("/question", methods=["POST"])
def answerQuestion():
    global vector_store
    global qa_chain
    if vector_store is None or qa_chain is None:
        return (
            json.dumps(
                {
                    "error": "No paragraph is supplied. Please supply the paragraph first."
                }
            ),
            400,
        )
    else:
        question: str = request.get_json()["question"]
        search_results = vector_store.similarity_search(question)
        answers = qa_chain.run(input_documents=search_results, question=question)
        return json.dumps({"question": question, "answer": answers}), 200


if __name__ == "__main__":
    api.run(debug=True)
