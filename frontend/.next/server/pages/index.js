"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\n// function HomePage() {\nfunction Blog({ posts  }) {\n    console.log(posts);\n    // 記事のレンダー\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            children: posts.title\n        }, void 0, false, {\n            fileName: \"/usr/src/app/frontend/pages/index.tsx\",\n            lineNumber: 13,\n            columnNumber: 11\n        }, this)\n    }, void 0, false, {\n        fileName: \"/usr/src/app/frontend/pages/index.tsx\",\n        lineNumber: 12,\n        columnNumber: 7\n    }, this));\n}\n// この関数はビルド時に呼ばれる\nasync function getStaticProps() {\n    // 投稿記事を取得する外部APIエンドポイントをコール\n    const res = await fetch('http://app:5000/app/hello');\n    const posts = await res.json();\n    console.log(posts);\n    // { props: posts }を返すことで、ビルド時にBlogコンポーネントが\n    // `posts`をpropとして受け取れる\n    return {\n        props: {\n            posts\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blog);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFNQSxFQUF3QjtTQUNiQSxJQUFJLENBQUMsQ0FBQyxDQUFDQyxLQUFLLEVBQUMsQ0FBQyxFQUFFLENBQUM7SUFDeEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLO0lBQ2pCLEVBQVU7SUFDSSxNQUFSLDZFQUNIRyxDQUFFOzhGQUNFQyxDQUFFO3NCQUFFSixLQUFLLENBQUNLLEtBQUs7Ozs7Ozs7Ozs7O0FBR3hCLENBQUM7QUFFRCxFQUFpQjtBQUNWLGVBQWVDLGNBQWMsR0FBRyxDQUFDO0lBQ3RDLEVBQTRCO0lBQ2dCLEtBQXZDLENBQUNDLEdBQUcsR0FBRyxLQUFLLENBQUNDLEtBQUssQ0FBQyxDQUEyQjtJQUNuRCxLQUFLLENBQUNSLEtBQUssR0FBRyxLQUFLLENBQUNPLEdBQUcsQ0FBQ0UsSUFBSTtJQUM1QlIsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUs7SUFFakIsRUFBMkM7SUFDSCxFQUFqQjtJQUN2QixNQUFNLENBQUMsQ0FBQztRQUNOVSxLQUFLLEVBQUUsQ0FBQztZQUNOVixLQUFLO1FBQ1AsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDO0FBRUQsaUVBQWVELElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcblxuXG4vLyBmdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgZnVuY3Rpb24gQmxvZyh7IHBvc3RzIH0pIHtcbiAgICBjb25zb2xlLmxvZyhwb3N0cyk7XG4gICAgLy8g6KiY5LqL44Gu44Os44Oz44OA44O8XG4gICAgcmV0dXJuIChcbiAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+e3Bvc3RzLnRpdGxlfTwvbGk+XG4gICAgICA8L3VsPlxuICAgICk7XG4gIH1cbiAgXG4gIC8vIOOBk+OBrumWouaVsOOBr+ODk+ODq+ODieaZguOBq+WRvOOBsOOCjOOCi1xuICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gICAgLy8g5oqV56i/6KiY5LqL44KS5Y+W5b6X44GZ44KL5aSW6YOoQVBJ44Ko44Oz44OJ44Od44Kk44Oz44OI44KS44Kz44O844OrXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9hcHA6NTAwMC9hcHAvaGVsbG8nKTtcbiAgICBjb25zdCBwb3N0cyA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgY29uc29sZS5sb2cocG9zdHMpXG4gIFxuICAgIC8vIHsgcHJvcHM6IHBvc3RzIH3jgpLov5TjgZnjgZPjgajjgafjgIHjg5Pjg6vjg4nmmYLjgatCbG9n44Kz44Oz44Od44O844ON44Oz44OI44GMXG4gICAgLy8gYHBvc3RzYOOCknByb3DjgajjgZfjgablj5fjgZHlj5bjgozjgotcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgcG9zdHNcbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIFxuICBleHBvcnQgZGVmYXVsdCBCbG9nO1xuICAiXSwibmFtZXMiOlsiQmxvZyIsInBvc3RzIiwiY29uc29sZSIsImxvZyIsInVsIiwibGkiLCJ0aXRsZSIsImdldFN0YXRpY1Byb3BzIiwicmVzIiwiZmV0Y2giLCJqc29uIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();