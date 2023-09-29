"use client";

import React from "react";
import AskQuestions from "./questions";
import axios from "axios";
import Image from "next/image";

export default function Home() {
  const [paragraph, setParagraph] = React.useState("");
  const [isParagraphProcessed, setParagraphProcessed] = React.useState(0);

  const postParagraph = async () => {
    setParagraphProcessed(1);
    try {
      await axios.post(
        "http://127.0.0.1:5000/paragraph",
        {
          data: paragraph,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setParagraphProcessed(2);
    } catch (err) {
      setParagraphProcessed(0);
    }
  };

  const updateParagraph = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setParagraph(e.target.value);
    setParagraphProcessed(0);
  };

  return (
    <React.Fragment>
      <nav className="bg-gray-800">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="2em"
                  viewBox="0 0 512 512"
                  className="fill-white"
                >
                  <path d="M184 0c30.9 0 56 25.1 56 56V456c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56V56c0-30.9 25.1-56 56-56z" />
                </svg>
                <h3 className="text-white text-center text-3xl font-bold ml-2">
                  Para AI
                </h3>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main className="flex flex-row min-h-screen justify-between pl-10 pr-10 pt-10 ">
        <div className="z-10 max-w-10xl w-full items-center justify-between font-mono text-sm lg:flex-row">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            <h1 className="text-4xl font-bold text-gray-600">
              Enter Your Paragraph Here!
            </h1>
          </label>
          <textarea
            id="message"
            rows={8}
            onChange={(e) => updateParagraph(e)}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-l-8 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Paste the paragraph here..."
          ></textarea>
          <button
            type="button"
            onClick={postParagraph}
            disabled={isParagraphProcessed == 1 || isParagraphProcessed == 2}
            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-2 disabled:opacity-25"
          >
            {isParagraphProcessed == 1 && (
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-4 h-4 mr-3 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
            )}
            {isParagraphProcessed == 1
              ? "Analysing..."
              : isParagraphProcessed == 2
              ? "Analysis Completed..."
              : "Click to Analyse Paragraph"}
          </button>
          {isParagraphProcessed == 2 && <AskQuestions />}
        </div>
      </main>
    </React.Fragment>
  );
}
