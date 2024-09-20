/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/renderer.ts":
/*!*************************!*\
  !*** ./src/renderer.ts ***!
  \*************************/
/***/ (() => {

eval("\nconst input = document.getElementById(\"input\");\nconst sendButton = document.getElementById(\"sendButton\");\n// 버튼을 클릭했을 때 ping 이벤트 보내기\nsendButton.addEventListener(\"click\", () => {\n    const message = input.value; // input 창의 값을 가져옴\n    if (message) {\n        window.electronAPI.sendPing(message); // 메인 프로세스에 메시지 보냄\n    }\n});\n// 메인 프로세스에서 pong 이벤트 응답 받기\nwindow.electronAPI.onPong((message) => {\n    console.log(\"Received from main process:\", message); // 메인 프로세스에서 받은 메시지를 출력\n});\n\n\n//# sourceURL=webpack://electron-forge-practice/./src/renderer.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/renderer.ts"]();
/******/ 	
/******/ })()
;