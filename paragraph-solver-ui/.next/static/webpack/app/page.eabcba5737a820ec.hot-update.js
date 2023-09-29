"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/questions.tsx":
/*!***************************!*\
  !*** ./app/questions.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AskQuestions; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./history */ \"(app-pages-browser)/./app/history.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction AskQuestions() {\n    _s();\n    const [history, setHistory] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    const [question, setQuesion] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const [isQuestionSubmitted, setQuesionSubmitted] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const appendHistory = (q, a)=>{\n        setHistory([\n            {\n                a: a,\n                q: q\n            },\n            ...history\n        ]);\n    };\n    const submitQuestion = async ()=>{\n        setQuesionSubmitted(true);\n        appendHistory(question, \"Searching...\");\n        try {\n            let res = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://127.0.0.1:5000/question\", {\n                question: question\n            }, {\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            appendHistory(question, res.data[\"answer\"]);\n            setQuesionSubmitted(false);\n        } catch (err) {\n            appendHistory(question, \"Error received... Try again please...\");\n            setQuesionSubmitted(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        id: \"chat\",\n                        rows: 1,\n                        onChange: (e)=>setQuesion(e.target.value),\n                        className: \"block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500\",\n                        placeholder: \"Your message...\"\n                    }, void 0, false, {\n                        fileName: \"H:\\\\paragraph-solver\\\\paragraph-solver-ui\\\\app\\\\questions.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        onClick: submitQuestion,\n                        disabled: isQuestionSubmitted,\n                        className: \"inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600\",\n                        children: [\n                            isQuestionSubmitted ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                \"aria-hidden\": \"true\",\n                                role: \"status\",\n                                className: \"inline w-4 h-4 mr-3 text-white animate-spin\",\n                                viewBox: \"0 0 100 101\",\n                                fill: \"none\",\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        d: \"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z\",\n                                        fill: \"#E5E7EB\"\n                                    }, void 0, false, {\n                                        fileName: \"H:\\\\paragraph-solver\\\\paragraph-solver-ui\\\\app\\\\questions.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        d: \"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z\",\n                                        fill: \"currentColor\"\n                                    }, void 0, false, {\n                                        fileName: \"H:\\\\paragraph-solver\\\\paragraph-solver-ui\\\\app\\\\questions.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"H:\\\\paragraph-solver\\\\paragraph-solver-ui\\\\app\\\\questions.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                className: \"w-5 h-5 rotate-90\",\n                                \"aria-hidden\": \"true\",\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                fill: \"currentColor\",\n                                viewBox: \"0 0 18 20\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    d: \"m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z\"\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\paragraph-solver\\\\paragraph-solver-ui\\\\app\\\\questions.tsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"H:\\\\paragraph-solver\\\\paragraph-solver-ui\\\\app\\\\questions.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"sr-only\",\n                                children: \"Ask question\"\n                            }, void 0, false, {\n                                fileName: \"H:\\\\paragraph-solver\\\\paragraph-solver-ui\\\\app\\\\questions.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"H:\\\\paragraph-solver\\\\paragraph-solver-ui\\\\app\\\\questions.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"H:\\\\paragraph-solver\\\\paragraph-solver-ui\\\\app\\\\questions.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-row items-center px-3 py-2 bg-gray-50 mt-2 border-l-8 border-gray-300\",\n                children: history.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_history__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    history: history\n                }, void 0, false, {\n                    fileName: \"H:\\\\paragraph-solver\\\\paragraph-solver-ui\\\\app\\\\questions.tsx\",\n                    lineNumber: 94,\n                    columnNumber: 32\n                }, this)\n            }, void 0, false, {\n                fileName: \"H:\\\\paragraph-solver\\\\paragraph-solver-ui\\\\app\\\\questions.tsx\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"H:\\\\paragraph-solver\\\\paragraph-solver-ui\\\\app\\\\questions.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(AskQuestions, \"MsHEWGxtQdS+VGBhoCPFEzyIkEs=\");\n_c = AskQuestions;\nvar _c;\n$RefreshReg$(_c, \"AskQuestions\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9xdWVzdGlvbnMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRTBCO0FBQ0E7QUFDZTtBQVExQixTQUFTRzs7SUFDdEIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdKLHFEQUFjLENBQVksRUFBRTtJQUMxRCxNQUFNLENBQUNNLFVBQVVDLFdBQVcsR0FBR1AscURBQWMsQ0FBQztJQUM5QyxNQUFNLENBQUNRLHFCQUFxQkMsb0JBQW9CLEdBQUdULHFEQUFjLENBQUM7SUFFbEUsTUFBTVUsZ0JBQWdCLENBQUNDLEdBQVdDO1FBQ2hDUixXQUFXO1lBQUM7Z0JBQUVRLEdBQUdBO2dCQUFHRCxHQUFHQTtZQUFFO2VBQU1SO1NBQVE7SUFDekM7SUFFQSxNQUFNVSxpQkFBaUI7UUFDckJKLG9CQUFvQjtRQUNwQkMsY0FBY0osVUFBVTtRQUN4QixJQUFJO1lBQ0YsSUFBSVEsTUFBTSxNQUFNZiw2Q0FBS0EsQ0FBQ2dCLElBQUksQ0FDeEIsa0NBQ0E7Z0JBQ0VULFVBQVVBO1lBQ1osR0FDQTtnQkFDRVUsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO1lBQ0Y7WUFFRk4sY0FBY0osVUFBVVEsSUFBSUcsSUFBSSxDQUFDLFNBQVM7WUFDMUNSLG9CQUFvQjtRQUN0QixFQUFFLE9BQU9TLEtBQUs7WUFDWlIsY0FBY0osVUFBVTtZQUN4Qkcsb0JBQW9CO1FBQ3RCO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ1U7OzBCQUNDLDhEQUFDQTtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUNDQyxJQUFHO3dCQUNIQyxNQUFNO3dCQUNOQyxVQUFVLENBQUNDLElBQU1sQixXQUFXa0IsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO3dCQUMxQ1AsV0FBVTt3QkFDVlEsYUFBWTs7Ozs7O2tDQUVkLDhEQUFDQzt3QkFDQ0MsTUFBSzt3QkFDTEMsU0FBU2xCO3dCQUNUbUIsVUFBVXhCO3dCQUNWWSxXQUFVOzs0QkFFVFosb0NBQ0MsOERBQUN5QjtnQ0FDQ0MsZUFBWTtnQ0FDWkMsTUFBSztnQ0FDTGYsV0FBVTtnQ0FDVmdCLFNBQVE7Z0NBQ1JDLE1BQUs7Z0NBQ0xDLE9BQU07O2tEQUVOLDhEQUFDQzt3Q0FDQ0MsR0FBRTt3Q0FDRkgsTUFBSzs7Ozs7O2tEQUVQLDhEQUFDRTt3Q0FDQ0MsR0FBRTt3Q0FDRkgsTUFBSzs7Ozs7Ozs7Ozs7cURBSVQsOERBQUNKO2dDQUNDYixXQUFVO2dDQUNWYyxlQUFZO2dDQUNaSSxPQUFNO2dDQUNORCxNQUFLO2dDQUNMRCxTQUFROzBDQUVSLDRFQUFDRztvQ0FBS0MsR0FBRTs7Ozs7Ozs7Ozs7MENBR1osOERBQUNDO2dDQUFLckIsV0FBVTswQ0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUc5Qiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1pqQixRQUFRdUMsTUFBTSxHQUFHLG1CQUFLLDhEQUFDekMsZ0RBQWdCQTtvQkFBQ0UsU0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTFEO0dBckZ3QkQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3F1ZXN0aW9ucy50c3g/ZWIyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGlzdG9yeUNvbXBvbmVudCBmcm9tIFwiLi9oaXN0b3J5XCI7XHJcbmltcG9ydCBmcm9tIGZyb20gXCIuLy4uLy5uZXh0L3NlcnZlci9hcHAvbm90LWZvdW5kXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEhpc3Rvcnkge1xyXG4gIHE6IFN0cmluZztcclxuICBhOiBTdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFza1F1ZXN0aW9ucygpIHtcclxuICBjb25zdCBbaGlzdG9yeSwgc2V0SGlzdG9yeV0gPSBSZWFjdC51c2VTdGF0ZTxIaXN0b3J5W10+KFtdKTtcclxuICBjb25zdCBbcXVlc3Rpb24sIHNldFF1ZXNpb25dID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2lzUXVlc3Rpb25TdWJtaXR0ZWQsIHNldFF1ZXNpb25TdWJtaXR0ZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBhcHBlbmRIaXN0b3J5ID0gKHE6IFN0cmluZywgYTogU3RyaW5nKSA9PiB7XHJcbiAgICBzZXRIaXN0b3J5KFt7IGE6IGEsIHE6IHEgfSwgLi4uaGlzdG9yeV0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN1Ym1pdFF1ZXN0aW9uID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0UXVlc2lvblN1Ym1pdHRlZCh0cnVlKTtcclxuICAgIGFwcGVuZEhpc3RvcnkocXVlc3Rpb24sIFwiU2VhcmNoaW5nLi4uXCIpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgXCJodHRwOi8vMTI3LjAuMC4xOjUwMDAvcXVlc3Rpb25cIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICBxdWVzdGlvbjogcXVlc3Rpb24sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICAgIGFwcGVuZEhpc3RvcnkocXVlc3Rpb24sIHJlcy5kYXRhW1wiYW5zd2VyXCJdKTtcclxuICAgICAgc2V0UXVlc2lvblN1Ym1pdHRlZChmYWxzZSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgYXBwZW5kSGlzdG9yeShxdWVzdGlvbiwgXCJFcnJvciByZWNlaXZlZC4uLiBUcnkgYWdhaW4gcGxlYXNlLi4uXCIpO1xyXG4gICAgICBzZXRRdWVzaW9uU3VibWl0dGVkKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBweC0zIHB5LTIgcm91bmRlZC1sZyBiZy1ncmF5LTUwIGRhcms6YmctZ3JheS03MDBcIj5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIGlkPVwiY2hhdFwiXHJcbiAgICAgICAgICByb3dzPXsxfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRRdWVzaW9uKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIG14LTQgcC0yLjUgdy1mdWxsIHRleHQtc20gdGV4dC1ncmF5LTkwMCBiZy13aGl0ZSByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItZ3JheS0zMDAgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgZGFyazpiZy1ncmF5LTgwMCBkYXJrOmJvcmRlci1ncmF5LTYwMCBkYXJrOnBsYWNlaG9sZGVyLWdyYXktNDAwIGRhcms6dGV4dC13aGl0ZSBkYXJrOmZvY3VzOnJpbmctYmx1ZS01MDAgZGFyazpmb2N1czpib3JkZXItYmx1ZS01MDBcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIG1lc3NhZ2UuLi5cIlxyXG4gICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgb25DbGljaz17c3VibWl0UXVlc3Rpb259XHJcbiAgICAgICAgICBkaXNhYmxlZD17aXNRdWVzdGlvblN1Ym1pdHRlZH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGp1c3RpZnktY2VudGVyIHAtMiB0ZXh0LWJsdWUtNjAwIHJvdW5kZWQtZnVsbCBjdXJzb3ItcG9pbnRlciBob3ZlcjpiZy1ibHVlLTEwMCBkYXJrOnRleHQtYmx1ZS01MDAgZGFyazpob3ZlcjpiZy1ncmF5LTYwMFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2lzUXVlc3Rpb25TdWJtaXR0ZWQgPyAoXHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgIHJvbGU9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZSB3LTQgaC00IG1yLTMgdGV4dC13aGl0ZSBhbmltYXRlLXNwaW5cIlxyXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTAwIDEwMVwiXHJcbiAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNMTAwIDUwLjU5MDhDMTAwIDc4LjIwNTEgNzcuNjE0MiAxMDAuNTkxIDUwIDEwMC41OTFDMjIuMzg1OCAxMDAuNTkxIDAgNzguMjA1MSAwIDUwLjU5MDhDMCAyMi45NzY2IDIyLjM4NTggMC41OTA4MiA1MCAwLjU5MDgyQzc3LjYxNDIgMC41OTA4MiAxMDAgMjIuOTc2NiAxMDAgNTAuNTkwOFpNOS4wODE0NCA1MC41OTA4QzkuMDgxNDQgNzMuMTg5NSAyNy40MDEzIDkxLjUwOTQgNTAgOTEuNTA5NEM3Mi41OTg3IDkxLjUwOTQgOTAuOTE4NiA3My4xODk1IDkwLjkxODYgNTAuNTkwOEM5MC45MTg2IDI3Ljk5MjEgNzIuNTk4NyA5LjY3MjI2IDUwIDkuNjcyMjZDMjcuNDAxMyA5LjY3MjI2IDkuMDgxNDQgMjcuOTkyMSA5LjA4MTQ0IDUwLjU5MDhaXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjRTVFN0VCXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTkzLjk2NzYgMzkuMDQwOUM5Ni4zOTMgMzguNDAzOCA5Ny44NjI0IDM1LjkxMTYgOTcuMDA3OSAzMy41NTM5Qzk1LjI5MzIgMjguODIyNyA5Mi44NzEgMjQuMzY5MiA4OS44MTY3IDIwLjM0OEM4NS44NDUyIDE1LjExOTIgODAuODgyNiAxMC43MjM4IDc1LjIxMjQgNy40MTI4OUM2OS41NDIyIDQuMTAxOTQgNjMuMjc1NCAxLjk0MDI1IDU2Ljc2OTggMS4wNTEyNEM1MS43NjY2IDAuMzY3NTQxIDQ2LjY5NzYgMC40NDY4NDMgNDEuNzM0NSAxLjI3ODczQzM5LjI2MTMgMS42OTMyOCAzNy44MTMgNC4xOTc3OCAzOC40NTAxIDYuNjIzMjZDMzkuMDg3MyA5LjA0ODc0IDQxLjU2OTQgMTAuNDcxNyA0NC4wNTA1IDEwLjEwNzFDNDcuODUxMSA5LjU0ODU1IDUxLjcxOTEgOS41MjY4OSA1NS41NDAyIDEwLjA0OTFDNjAuODY0MiAxMC43NzY2IDY1Ljk5MjggMTIuNTQ1NyA3MC42MzMxIDE1LjI1NTJDNzUuMjczNSAxNy45NjQ4IDc5LjMzNDcgMjEuNTYxOSA4Mi41ODQ5IDI1Ljg0MUM4NC45MTc1IDI4LjkxMjEgODYuNzk5NyAzMi4yOTEzIDg4LjE4MTEgMzUuODc1OEM4OS4wODMgMzguMjE1OCA5MS41NDIxIDM5LjY3ODEgOTMuOTY3NiAzOS4wNDA5WlwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTUgaC01IHJvdGF0ZS05MFwiXHJcbiAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE4IDIwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJtMTcuOTE0IDE4LjU5NC04LTE4YTEgMSAwIDAgMC0xLjgyOCAwbC04IDE4YTEgMSAwIDAgMCAxLjE1NyAxLjM3Nkw4IDE4LjI4MVY5YTEgMSAwIDAgMSAyIDB2OS4yODFsNi43NTggMS42ODlhMSAxIDAgMCAwIDEuMTU2LTEuMzc2WlwiIC8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Bc2sgcXVlc3Rpb248L3NwYW4+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtcm93IGl0ZW1zLWNlbnRlciBweC0zIHB5LTIgYmctZ3JheS01MCBtdC0yIGJvcmRlci1sLTggYm9yZGVyLWdyYXktMzAwXCI+XHJcbiAgICAgICAge2hpc3RvcnkubGVuZ3RoID4gMCAmJiA8SGlzdG9yeUNvbXBvbmVudCBoaXN0b3J5PXtoaXN0b3J5fSAvPn1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsIlJlYWN0IiwiSGlzdG9yeUNvbXBvbmVudCIsIkFza1F1ZXN0aW9ucyIsImhpc3RvcnkiLCJzZXRIaXN0b3J5IiwidXNlU3RhdGUiLCJxdWVzdGlvbiIsInNldFF1ZXNpb24iLCJpc1F1ZXN0aW9uU3VibWl0dGVkIiwic2V0UXVlc2lvblN1Ym1pdHRlZCIsImFwcGVuZEhpc3RvcnkiLCJxIiwiYSIsInN1Ym1pdFF1ZXN0aW9uIiwicmVzIiwicG9zdCIsImhlYWRlcnMiLCJkYXRhIiwiZXJyIiwiZGl2IiwiY2xhc3NOYW1lIiwidGV4dGFyZWEiLCJpZCIsInJvd3MiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsInN2ZyIsImFyaWEtaGlkZGVuIiwicm9sZSIsInZpZXdCb3giLCJmaWxsIiwieG1sbnMiLCJwYXRoIiwiZCIsInNwYW4iLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/questions.tsx\n"));

/***/ })

});