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
exports.id = "pages/note";
exports.ids = ["pages/note"];
exports.modules = {

/***/ "./pages/note/index.tsx":
/*!******************************!*\
  !*** ./pages/note/index.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/usr/src/app/frontend/pages/note/index.tsx\";\n\n\n// function HomePage() {\nfunction Note({\n  posts\n}) {\n  console.log(posts); // 受け取るjsonの構造\n  // タイトル\n  // 日付\n  // 担当者\n  // ノートのファイル\n  // 結果のファイル\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: \"hello world\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 8\n  }, this);\n} // この関数はビルド時に呼ばれる\n\n\nasync function getStaticProps() {\n  // 投稿記事を取得する外部APIエンドポイントをコール\n  const res = await fetch('http://app:5000/note/');\n  const posts = await res.json();\n  console.log(posts); // { props: posts }を返すことで、ビルド時にBlogコンポーネントが\n  // `posts`をpropとして受け取れる\n\n  return {\n    props: {\n      posts\n    }\n  };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Note);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ub3RlL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBUUE7QUFDQSxTQUFTQSxJQUFULENBQWM7QUFBRUMsRUFBQUE7QUFBRixDQUFkLEVBQXlCO0FBQ3JCQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWixFQURxQixDQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQ0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESDtBQUdILEVBRUQ7OztBQUNPLGVBQWVHLGNBQWYsR0FBZ0M7QUFDbkM7QUFDQSxRQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDLHVCQUFELENBQXZCO0FBQ0EsUUFBTUwsS0FBSyxHQUFHLE1BQU1JLEdBQUcsQ0FBQ0UsSUFBSixFQUFwQjtBQUNBTCxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWixFQUptQyxDQU1uQztBQUNBOztBQUNBLFNBQU87QUFDSE8sSUFBQUEsS0FBSyxFQUFFO0FBQ0hQLE1BQUFBO0FBREc7QUFESixHQUFQO0FBS0g7QUFFRCxpRUFBZUQsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vcGFnZXMvbm90ZS9pbmRleC50c3g/MTBjMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5cblxuXG4vLyBmdW5jdGlvbiBIb21lUGFnZSgpIHtcbmZ1bmN0aW9uIE5vdGUoeyBwb3N0cyB9KSB7XG4gICAgY29uc29sZS5sb2cocG9zdHMpO1xuICAgIC8vIOWPl+OBkeWPluOCi2pzb27jga7mp4vpgKBcbiAgICAvLyDjgr/jgqTjg4jjg6tcbiAgICAvLyDml6Xku5hcbiAgICAvLyDmi4XlvZPogIVcbiAgICAvLyDjg47jg7zjg4jjga7jg5XjgqHjgqTjg6tcbiAgICAvLyDntZDmnpzjga7jg5XjgqHjgqTjg6tcblxuICAgIHJldHVybiAoXG4gICAgICAgPGRpdj5oZWxsbyB3b3JsZDwvZGl2PlxuICAgICk7XG59XG5cbi8vIOOBk+OBrumWouaVsOOBr+ODk+ODq+ODieaZguOBq+WRvOOBsOOCjOOCi1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICAgIC8vIOaKleeov+iomOS6i+OCkuWPluW+l+OBmeOCi+WklumDqEFQSeOCqOODs+ODieODneOCpOODs+ODiOOCkuOCs+ODvOODq1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vYXBwOjUwMDAvbm90ZS8nKTtcbiAgICBjb25zdCBwb3N0cyA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgY29uc29sZS5sb2cocG9zdHMpO1xuXG4gICAgLy8geyBwcm9wczogcG9zdHMgfeOCkui/lOOBmeOBk+OBqOOBp+OAgeODk+ODq+ODieaZguOBq0Jsb2fjgrPjg7Pjg53jg7zjg43jg7Pjg4jjgYxcbiAgICAvLyBgcG9zdHNg44KScHJvcOOBqOOBl+OBpuWPl+OBkeWPluOCjOOCi1xuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBwb3N0c1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOb3RlOyJdLCJuYW1lcyI6WyJOb3RlIiwicG9zdHMiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3RhdGljUHJvcHMiLCJyZXMiLCJmZXRjaCIsImpzb24iLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/note/index.tsx\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/note/index.tsx"));
module.exports = __webpack_exports__;

})();