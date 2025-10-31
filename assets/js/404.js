/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./_scripts/404.ts":
/*!*************************!*\
  !*** ./_scripts/404.ts ***!
  \*************************/
/***/ (() => {

eval("{document.addEventListener(\"DOMContentLoaded\", function () {\n    // El archivo 404.html hace que el link de navbar se active\n    // esto quita el link de cualquiera de ellas\n    var paths = [\"/\", \"/series\", \"/projects\", \"/categories\"];\n    if (paths.indexOf(window.location.pathname) >= 0) {\n        document.querySelector(\"#message\").innerHTML = 'ESTÁ EN CONSTRUCCIÓN';\n    }\n});\n\n\n//# sourceURL=webpack://blog/./_scripts/404.ts?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./_scripts/404.ts"]();
/******/ 	
/******/ })()
;