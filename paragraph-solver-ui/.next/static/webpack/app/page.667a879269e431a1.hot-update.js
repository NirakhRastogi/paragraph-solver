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

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _questions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./questions */ \"(app-pages-browser)/./app/questions.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [paragraph, setParagraph] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const [isParagraphProcessed, setParagraphProcessed] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);\n    const postParagraph = async ()=>{\n        setParagraphProcessed(1);\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://127.0.0.1:5000/paragraph\", {\n                data: paragraph\n            }, {\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            setParagraphProcessed(2);\n        } catch (err) {\n            setParagraphProcessed(0);\n        }\n    };\n    const updateParagraph = (e)=>{\n        setParagraph(e.target.value);\n        setParagraphProcessed(0);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"bg-gray-800\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex h-16 items-center justify-between\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-row\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                        xmlns: \"http://www.w3.org/2000/svg\",\n                                        height: \"2em\",\n                                        viewBox: \"0 0 512 512\",\n                                        className: \"fill-white\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            d: \"M184 0c30.9 0 56 25.1 56 56V456c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56V56c0-30.9 25.1-56 56-56z\"\n                                        }, void 0, false, {\n                                            fileName: \"H:\\\\paragraph-solver\\\\paragraph-solver-ui\\\\app\\\\page.tsx\",\n                                            lineNumber: 50,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"H:\\\\paragraph-solver\\\\paragraph-solver-ui\\\\app\\\\page.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"text-white text-center text-3xl font-bold ml-2\",\n                                        children: \"Para AI\"\n                                    }, void 0, false, {\n                                        fileName: \"H:\\\\paragraph-solver\\\\paragraph-solver-ui\\\\app\\\\page.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"H:\\\\paragraph-solver\\\\paragraph-solver-ui\\\\app\\\\page.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"H:\\\\paragraph-solver\\\\paragraph-solver-ui\\\\app\\\\page.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"H:\\\\paragraph-solver\\\\paragraph-solver-ui\\\\app\\\\page.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"H:\\\\paragraph-solver\\\\paragraph-solver-ui\\\\app\\\\page.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"H:\\\\paragraph-solver\\\\paragraph-solver-ui\\\\app\\\\page.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex flex-row min-h-screen justify-between pl-10 pr-10 pt-10 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"z-10 max-w-10xl w-full items-center justify-between font-mono text-sm lg:flex-row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"block mb-2 text-sm font-medium text-gray-900 dark:text-white\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-4xl font-bold text-gray-600\",\n                                children: \"Enter Your Paragraph Here..\"\n                            }, void 0, false, {\n                                fileName: \"H:\\\\paragraph-solver\\\\paragraph-solver-ui\\\\app\\\\page.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"H:\\\\paragraph-solver\\\\paragraph-solver-ui\\\\app\\\\page.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            id: \"message\",\n                            rows: 8,\n                            onChange: (e)=>updateParagraph(e),\n                            className: \"block p-2.5 w-full text-sm bottom-l-8  text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500\",\n                            placeholder: \"Paste the paragraph here...\"\n                        }, void 0, false, {\n                            fileName: \"H:\\\\paragraph-solver\\\\paragraph-solver-ui\\\\app\\\\page.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            onClick: postParagraph,\n                            disabled: isParagraphProcessed == 1 || isParagraphProcessed == 2,\n                            className: \"text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-2 disabled:opacity-25\",\n                            children: [\n                                isParagraphProcessed == 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    \"aria-hidden\": \"true\",\n                                    role: \"status\",\n                                    className: \"inline w-4 h-4 mr-3 text-white animate-spin\",\n                                    viewBox: \"0 0 100 101\",\n                                    fill: \"none\",\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            d: \"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z\",\n                                            fill: \"#E5E7EB\"\n                                        }, void 0, false, {\n                                            fileName: \"H:\\\\paragraph-solver\\\\paragraph-solver-ui\\\\app\\\\page.tsx\",\n                                            lineNumber: 89,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            d: \"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z\",\n                                            fill: \"currentColor\"\n                                        }, void 0, false, {\n                                            fileName: \"H:\\\\paragraph-solver\\\\paragraph-solver-ui\\\\app\\\\page.tsx\",\n                                            lineNumber: 93,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"H:\\\\paragraph-solver\\\\paragraph-solver-ui\\\\app\\\\page.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 15\n                                }, this),\n                                isParagraphProcessed == 1 ? \"Loading...\" : \"Click to Analyse Paragraph\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"H:\\\\paragraph-solver\\\\paragraph-solver-ui\\\\app\\\\page.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this),\n                        isParagraphProcessed == 2 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_questions__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"H:\\\\paragraph-solver\\\\paragraph-solver-ui\\\\app\\\\page.tsx\",\n                            lineNumber: 103,\n                            columnNumber: 41\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"H:\\\\paragraph-solver\\\\paragraph-solver-ui\\\\app\\\\page.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"H:\\\\paragraph-solver\\\\paragraph-solver-ui\\\\app\\\\page.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"H:\\\\paragraph-solver\\\\paragraph-solver-ui\\\\app\\\\page.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"mfKdLP64k5JFbXn4tNMGLAX8lF0=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUUwQjtBQUNhO0FBQ2I7QUFHWCxTQUFTRzs7SUFDdEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdMLHFEQUFjLENBQUM7SUFDakQsTUFBTSxDQUFDTyxzQkFBc0JDLHNCQUFzQixHQUFHUixxREFBYyxDQUFDO0lBRXJFLE1BQU1TLGdCQUFnQjtRQUNwQkQsc0JBQXNCO1FBQ3RCLElBQUk7WUFDRixNQUFNTiw2Q0FBS0EsQ0FBQ1EsSUFBSSxDQUNkLG1DQUNBO2dCQUNFQyxNQUFNUDtZQUNSLEdBQ0E7Z0JBQ0VRLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtZQUNGO1lBRUZKLHNCQUFzQjtRQUN4QixFQUFFLE9BQU9LLEtBQUs7WUFDWkwsc0JBQXNCO1FBQ3hCO0lBQ0Y7SUFFQSxNQUFNTSxrQkFBa0IsQ0FBQ0M7UUFDdkJWLGFBQWFVLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztRQUMzQlQsc0JBQXNCO0lBQ3hCO0lBRUEscUJBQ0UsOERBQUNSLHVEQUFjOzswQkFDYiw4REFBQ21CO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDQztvQkFBSUQsV0FBVTs4QkFDYiw0RUFBQ0M7d0JBQUlELFdBQVU7a0NBQ2IsNEVBQUNDOzRCQUFJRCxXQUFVO3NDQUNiLDRFQUFDQztnQ0FBSUQsV0FBVTs7a0RBQ2IsOERBQUNFO3dDQUNDQyxPQUFNO3dDQUNOQyxRQUFPO3dDQUNQQyxTQUFRO3dDQUNSTCxXQUFVO2tEQUVWLDRFQUFDTTs0Q0FBS0MsR0FBRTs7Ozs7Ozs7Ozs7a0RBRVYsOERBQUNDO3dDQUFHUixXQUFVO2tEQUFpRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBUXpFLDhEQUFDUztnQkFBS1QsV0FBVTswQkFDZCw0RUFBQ0M7b0JBQUlELFdBQVU7O3NDQUNiLDhEQUFDVTs0QkFBTVYsV0FBVTtzQ0FDZiw0RUFBQ1c7Z0NBQUdYLFdBQVU7MENBQW1DOzs7Ozs7Ozs7OztzQ0FJbkQsOERBQUNZOzRCQUNDQyxJQUFHOzRCQUNIQyxNQUFNOzRCQUNOQyxVQUFVLENBQUNwQixJQUFNRCxnQkFBZ0JDOzRCQUNqQ0ssV0FBVTs0QkFDVmdCLGFBQVk7Ozs7OztzQ0FFZCw4REFBQ0M7NEJBQ0NDLE1BQUs7NEJBQ0xDLFNBQVM5Qjs0QkFDVCtCLFVBQVVqQyx3QkFBd0IsS0FBS0Esd0JBQXdCOzRCQUMvRGEsV0FBVTs7Z0NBRVRiLHdCQUF3QixtQkFDdkIsOERBQUNlO29DQUNDbUIsZUFBWTtvQ0FDWkMsTUFBSztvQ0FDTHRCLFdBQVU7b0NBQ1ZLLFNBQVE7b0NBQ1JrQixNQUFLO29DQUNMcEIsT0FBTTs7c0RBRU4sOERBQUNHOzRDQUNDQyxHQUFFOzRDQUNGZ0IsTUFBSzs7Ozs7O3NEQUVQLDhEQUFDakI7NENBQ0NDLEdBQUU7NENBQ0ZnQixNQUFLOzs7Ozs7Ozs7Ozs7Z0NBSVZwQyx3QkFBd0IsSUFDckIsZUFDQTs7Ozs7Ozt3QkFFTEEsd0JBQXdCLG1CQUFLLDhEQUFDTixrREFBWUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLckQ7R0FwR3dCRTtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFza1F1ZXN0aW9ucyBmcm9tIFwiLi9xdWVzdGlvbnNcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbcGFyYWdyYXBoLCBzZXRQYXJhZ3JhcGhdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtpc1BhcmFncmFwaFByb2Nlc3NlZCwgc2V0UGFyYWdyYXBoUHJvY2Vzc2VkXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IHBvc3RQYXJhZ3JhcGggPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0UGFyYWdyYXBoUHJvY2Vzc2VkKDEpO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBheGlvcy5wb3N0KFxuICAgICAgICBcImh0dHA6Ly8xMjcuMC4wLjE6NTAwMC9wYXJhZ3JhcGhcIixcbiAgICAgICAge1xuICAgICAgICAgIGRhdGE6IHBhcmFncmFwaCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICBzZXRQYXJhZ3JhcGhQcm9jZXNzZWQoMik7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzZXRQYXJhZ3JhcGhQcm9jZXNzZWQoMCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVBhcmFncmFwaCA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PikgPT4ge1xuICAgIHNldFBhcmFncmFwaChlLnRhcmdldC52YWx1ZSk7XG4gICAgc2V0UGFyYWdyYXBoUHJvY2Vzc2VkKDApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJiZy1ncmF5LTgwMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctN3hsIHB4LTQgc206cHgtNiBsZzpweC04XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGgtMTYgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cbiAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjJlbVwiXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsbC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xODQgMGMzMC45IDAgNTYgMjUuMSA1NiA1NlY0NTZjMCAzMC45LTI1LjEgNTYtNTYgNTZjLTI4LjkgMC01Mi43LTIxLjktNTUuNy01MC4xYy01LjIgMS40LTEwLjcgMi4xLTE2LjMgMi4xYy0zNS4zIDAtNjQtMjguNy02NC02NGMwLTcuNCAxLjMtMTQuNiAzLjYtMjEuMkMyMS40IDM2Ny40IDAgMzM4LjIgMCAzMDRjMC0zMS45IDE4LjctNTkuNSA0NS44LTcyLjNDMzcuMSAyMjAuOCAzMiAyMDcgMzIgMTkyYzAtMzAuNyAyMS42LTU2LjMgNTAuNC02Mi42QzgwLjggMTIzLjkgODAgMTE4IDgwIDExMmMwLTI5LjkgMjAuNi01NS4xIDQ4LjMtNjIuMUMxMzEuMyAyMS45IDE1NS4xIDAgMTg0IDB6TTMyOCAwYzI4LjkgMCA1Mi42IDIxLjkgNTUuNyA0OS45YzI3LjggNyA0OC4zIDMyLjEgNDguMyA2Mi4xYzAgNi0uOCAxMS45LTIuNCAxNy40YzI4LjggNi4yIDUwLjQgMzEuOSA1MC40IDYyLjZjMCAxNS01LjEgMjguOC0xMy44IDM5LjdDNDkzLjMgMjQ0LjUgNTEyIDI3Mi4xIDUxMiAzMDRjMCAzNC4yLTIxLjQgNjMuNC01MS42IDc0LjhjMi4zIDYuNiAzLjYgMTMuOCAzLjYgMjEuMmMwIDM1LjMtMjguNyA2NC02NCA2NGMtNS42IDAtMTEuMS0uNy0xNi4zLTIuMWMtMyAyOC4yLTI2LjggNTAuMS01NS43IDUwLjFjLTMwLjkgMC01Ni0yNS4xLTU2LTU2VjU2YzAtMzAuOSAyNS4xLTU2IDU2LTU2elwiIC8+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC1jZW50ZXIgdGV4dC0zeGwgZm9udC1ib2xkIG1sLTJcIj5cbiAgICAgICAgICAgICAgICAgIFBhcmEgQUlcbiAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBtaW4taC1zY3JlZW4ganVzdGlmeS1iZXR3ZWVuIHBsLTEwIHByLTEwIHB0LTEwIFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInotMTAgbWF4LXctMTB4bCB3LWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBmb250LW1vbm8gdGV4dC1zbSBsZzpmbGV4LXJvd1wiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayBtYi0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgICBFbnRlciBZb3VyIFBhcmFncmFwaCBIZXJlLi5cbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgIGlkPVwibWVzc2FnZVwiXG4gICAgICAgICAgICByb3dzPXs4fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVQYXJhZ3JhcGgoZSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBwLTIuNSB3LWZ1bGwgdGV4dC1zbSBib3R0b20tbC04ICB0ZXh0LWdyYXktOTAwIGJnLWdyYXktNTAgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGRhcms6YmctZ3JheS03MDAgZGFyazpib3JkZXItZ3JheS02MDAgZGFyazpwbGFjZWhvbGRlci1ncmF5LTQwMCBkYXJrOnRleHQtd2hpdGUgZGFyazpmb2N1czpyaW5nLWJsdWUtNTAwIGRhcms6Zm9jdXM6Ym9yZGVyLWJsdWUtNTAwXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzdGUgdGhlIHBhcmFncmFwaCBoZXJlLi4uXCJcbiAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3Bvc3RQYXJhZ3JhcGh9XG4gICAgICAgICAgICBkaXNhYmxlZD17aXNQYXJhZ3JhcGhQcm9jZXNzZWQgPT0gMSB8fCBpc1BhcmFncmFwaFByb2Nlc3NlZCA9PSAyfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBiZy1ncmFkaWVudC10by1iciBmcm9tLXBpbmstNTAwIHRvLW9yYW5nZS00MDAgaG92ZXI6YmctZ3JhZGllbnQtdG8tYmwgZm9jdXM6cmluZy00IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLXBpbmstMjAwIGRhcms6Zm9jdXM6cmluZy1waW5rLTgwMCBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtc20gcHgtNSBweS0yLjUgdGV4dC1jZW50ZXIgbXItMiBtYi0yIG10LTIgZGlzYWJsZWQ6b3BhY2l0eS0yNVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2lzUGFyYWdyYXBoUHJvY2Vzc2VkID09IDEgJiYgKFxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICByb2xlPVwic3RhdHVzXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUgdy00IGgtNCBtci0zIHRleHQtd2hpdGUgYW5pbWF0ZS1zcGluXCJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEwMCAxMDFcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBkPVwiTTEwMCA1MC41OTA4QzEwMCA3OC4yMDUxIDc3LjYxNDIgMTAwLjU5MSA1MCAxMDAuNTkxQzIyLjM4NTggMTAwLjU5MSAwIDc4LjIwNTEgMCA1MC41OTA4QzAgMjIuOTc2NiAyMi4zODU4IDAuNTkwODIgNTAgMC41OTA4MkM3Ny42MTQyIDAuNTkwODIgMTAwIDIyLjk3NjYgMTAwIDUwLjU5MDhaTTkuMDgxNDQgNTAuNTkwOEM5LjA4MTQ0IDczLjE4OTUgMjcuNDAxMyA5MS41MDk0IDUwIDkxLjUwOTRDNzIuNTk4NyA5MS41MDk0IDkwLjkxODYgNzMuMTg5NSA5MC45MTg2IDUwLjU5MDhDOTAuOTE4NiAyNy45OTIxIDcyLjU5ODcgOS42NzIyNiA1MCA5LjY3MjI2QzI3LjQwMTMgOS42NzIyNiA5LjA4MTQ0IDI3Ljk5MjEgOS4wODE0NCA1MC41OTA4WlwiXG4gICAgICAgICAgICAgICAgICBmaWxsPVwiI0U1RTdFQlwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgZD1cIk05My45Njc2IDM5LjA0MDlDOTYuMzkzIDM4LjQwMzggOTcuODYyNCAzNS45MTE2IDk3LjAwNzkgMzMuNTUzOUM5NS4yOTMyIDI4LjgyMjcgOTIuODcxIDI0LjM2OTIgODkuODE2NyAyMC4zNDhDODUuODQ1MiAxNS4xMTkyIDgwLjg4MjYgMTAuNzIzOCA3NS4yMTI0IDcuNDEyODlDNjkuNTQyMiA0LjEwMTk0IDYzLjI3NTQgMS45NDAyNSA1Ni43Njk4IDEuMDUxMjRDNTEuNzY2NiAwLjM2NzU0MSA0Ni42OTc2IDAuNDQ2ODQzIDQxLjczNDUgMS4yNzg3M0MzOS4yNjEzIDEuNjkzMjggMzcuODEzIDQuMTk3NzggMzguNDUwMSA2LjYyMzI2QzM5LjA4NzMgOS4wNDg3NCA0MS41Njk0IDEwLjQ3MTcgNDQuMDUwNSAxMC4xMDcxQzQ3Ljg1MTEgOS41NDg1NSA1MS43MTkxIDkuNTI2ODkgNTUuNTQwMiAxMC4wNDkxQzYwLjg2NDIgMTAuNzc2NiA2NS45OTI4IDEyLjU0NTcgNzAuNjMzMSAxNS4yNTUyQzc1LjI3MzUgMTcuOTY0OCA3OS4zMzQ3IDIxLjU2MTkgODIuNTg0OSAyNS44NDFDODQuOTE3NSAyOC45MTIxIDg2Ljc5OTcgMzIuMjkxMyA4OC4xODExIDM1Ljg3NThDODkuMDgzIDM4LjIxNTggOTEuNTQyMSAzOS42NzgxIDkzLjk2NzYgMzkuMDQwOVpcIlxuICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge2lzUGFyYWdyYXBoUHJvY2Vzc2VkID09IDFcbiAgICAgICAgICAgICAgPyBcIkxvYWRpbmcuLi5cIlxuICAgICAgICAgICAgICA6IFwiQ2xpY2sgdG8gQW5hbHlzZSBQYXJhZ3JhcGhcIn1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICB7aXNQYXJhZ3JhcGhQcm9jZXNzZWQgPT0gMiAmJiA8QXNrUXVlc3Rpb25zIC8+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQXNrUXVlc3Rpb25zIiwiYXhpb3MiLCJIb21lIiwicGFyYWdyYXBoIiwic2V0UGFyYWdyYXBoIiwidXNlU3RhdGUiLCJpc1BhcmFncmFwaFByb2Nlc3NlZCIsInNldFBhcmFncmFwaFByb2Nlc3NlZCIsInBvc3RQYXJhZ3JhcGgiLCJwb3N0IiwiZGF0YSIsImhlYWRlcnMiLCJlcnIiLCJ1cGRhdGVQYXJhZ3JhcGgiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJGcmFnbWVudCIsIm5hdiIsImNsYXNzTmFtZSIsImRpdiIsInN2ZyIsInhtbG5zIiwiaGVpZ2h0Iiwidmlld0JveCIsInBhdGgiLCJkIiwiaDMiLCJtYWluIiwibGFiZWwiLCJoMSIsInRleHRhcmVhIiwiaWQiLCJyb3dzIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJhcmlhLWhpZGRlbiIsInJvbGUiLCJmaWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});