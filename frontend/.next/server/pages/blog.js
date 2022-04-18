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
exports.id = "pages/blog";
exports.ids = ["pages/blog"];
exports.modules = {

/***/ "./content sync recursive \\.md$":
/*!*****************************!*\
  !*** ./content/ sync \.md$ ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./first.md": "./content/first.md"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./content sync recursive \\.md$";

/***/ }),

/***/ "./pages/blog.tsx":
/*!************************!*\
  !*** ./pages/blog.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/usr/src/app/frontend/pages/blog.tsx\";\n// blog.js\n\n\n\nconst Blog = () => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n    children: \"\\u30D6\\u30ED\\u30B0\\u4E00\\u89A7\\u30DA\\u30FC\\u30B8\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blog);\nasync function getStaticProps() {\n  const blogs = (context => {\n    const keys = context.keys();\n    const values = keys.map(context);\n    const data = keys.map((key, index) => {\n      let slug = key.replace(/^.*[\\\\\\/]/, '').slice(0, -3);\n      const value = values[index];\n      const document = gray_matter__WEBPACK_IMPORTED_MODULE_0___default()(value.default);\n      return {\n        frontmatter: document.data,\n        slug: slug\n      };\n    });\n    return data;\n  })(__webpack_require__(\"./content sync recursive \\\\.md$\"));\n\n  return {\n    props: {\n      blogs: JSON.parse(JSON.stringify(blogs))\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBRUEsTUFBTUMsSUFBSSxHQUFHLE1BQU07QUFDZixzQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBR0gsQ0FKRDs7QUFNQSxpRUFBZUEsSUFBZjtBQUVPLGVBQWVDLGNBQWYsR0FBZ0M7QUFDbkMsUUFBTUMsS0FBSyxHQUFHLENBQUVDLE9BQUQsSUFBYTtBQUN4QixVQUFNQyxJQUFJLEdBQUdELE9BQU8sQ0FBQ0MsSUFBUixFQUFiO0FBQ0EsVUFBTUMsTUFBTSxHQUFHRCxJQUFJLENBQUNFLEdBQUwsQ0FBU0gsT0FBVCxDQUFmO0FBQ0EsVUFBTUksSUFBSSxHQUFHSCxJQUFJLENBQUNFLEdBQUwsQ0FBUyxDQUFDRSxHQUFELEVBQU1DLEtBQU4sS0FBZ0I7QUFDbEMsVUFBSUMsSUFBSSxHQUFHRixHQUFHLENBQUNHLE9BQUosQ0FBWSxXQUFaLEVBQXlCLEVBQXpCLEVBQTZCQyxLQUE3QixDQUFtQyxDQUFuQyxFQUFzQyxDQUFDLENBQXZDLENBQVg7QUFDQSxZQUFNQyxLQUFLLEdBQUdSLE1BQU0sQ0FBQ0ksS0FBRCxDQUFwQjtBQUNBLFlBQU1LLFFBQVEsR0FBR2Ysa0RBQU0sQ0FBQ2MsS0FBSyxDQUFDRSxPQUFQLENBQXZCO0FBQ0EsYUFBTztBQUNIQyxRQUFBQSxXQUFXLEVBQUVGLFFBQVEsQ0FBQ1AsSUFEbkI7QUFFSEcsUUFBQUEsSUFBSSxFQUFFQTtBQUZILE9BQVA7QUFJSCxLQVJZLENBQWI7QUFTQSxXQUFPSCxJQUFQO0FBQ0gsR0FiYSxFQWFYVSxzREFiVyxDQUFkOztBQWVBLFNBQU87QUFDSEMsSUFBQUEsS0FBSyxFQUFFO0FBQ0hoQixNQUFBQSxLQUFLLEVBQUVpQixJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxTQUFMLENBQWVuQixLQUFmLENBQVg7QUFESjtBQURKLEdBQVA7QUFLSCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vcGFnZXMvYmxvZy50c3g/M2VlOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBibG9nLmpzXG5pbXBvcnQgbWF0dGVyIGZyb20gXCJncmF5LW1hdHRlclwiXG5cbmNvbnN0IEJsb2cgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHA+44OW44Ot44Kw5LiA6Kan44Oa44O844K4PC9wPiAgXG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9nXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHsgXG4gICAgY29uc3QgYmxvZ3MgPSAoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3Qga2V5cyA9IGNvbnRleHQua2V5cygpICBcbiAgICAgICAgY29uc3QgdmFsdWVzID0ga2V5cy5tYXAoY29udGV4dCkgXG4gICAgICAgIGNvbnN0IGRhdGEgPSBrZXlzLm1hcCgoa2V5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgbGV0IHNsdWcgPSBrZXkucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpLnNsaWNlKDAsIC0zKVxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB2YWx1ZXNbaW5kZXhdXG4gICAgICAgICAgICBjb25zdCBkb2N1bWVudCA9IG1hdHRlcih2YWx1ZS5kZWZhdWx0KVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBmcm9udG1hdHRlcjogZG9jdW1lbnQuZGF0YSxcbiAgICAgICAgICAgICAgICBzbHVnOiBzbHVnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgfSkocmVxdWlyZS5jb250ZXh0KCcuLi9jb250ZW50JywgdHJ1ZSwgL1xcLm1kJC8pKVxuXG4gICAgcmV0dXJuIHsgICAgICAgICAgICBcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGJsb2dzOiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGJsb2dzKSlcbiAgICAgICAgfSwgICAgICBcbiAgICB9ICAgICAgICAgICAgICAgICAgIFxufSAiXSwibmFtZXMiOlsibWF0dGVyIiwiQmxvZyIsImdldFN0YXRpY1Byb3BzIiwiYmxvZ3MiLCJjb250ZXh0Iiwia2V5cyIsInZhbHVlcyIsIm1hcCIsImRhdGEiLCJrZXkiLCJpbmRleCIsInNsdWciLCJyZXBsYWNlIiwic2xpY2UiLCJ2YWx1ZSIsImRvY3VtZW50IiwiZGVmYXVsdCIsImZyb250bWF0dGVyIiwicmVxdWlyZSIsInByb3BzIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blog.tsx\n");

/***/ }),

/***/ "./content/first.md":
/*!**************************!*\
  !*** ./content/first.md ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"// first.md\\n\\n\\n1つ目の記事。\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZW50L2ZpcnN0Lm1kLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxpRUFBZSwwQkFBMEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2NvbnRlbnQvZmlyc3QubWQ/MzAxMiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIi8vIGZpcnN0Lm1kXFxuXFxuXFxuMeOBpOebruOBruiomOS6i+OAglwiOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./content/first.md\n");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("gray-matter");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/blog.tsx"));
module.exports = __webpack_exports__;

})();