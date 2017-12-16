/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 50);
/******/ })
/************************************************************************/
/******/ ({

/***/ 50:
/***/ (function(module, exports) {

eval("let deltaY;\nlet startX;\nlet startY;\nlet x;\nlet y;\nlet deltaX;\nlet startTime;\nlet endTime;\nlet deltaTime;\nlet speed;\nlet angle;\n\nlet data = {};\n\n// import io from 'socket.io-client';\n\n// const socket = io('http://172.16.61.66:1337/');\n// socket.on('connect', (client) => {\n\n//On appel chaque évènement liés au touché de l'écran\n    window.addEventListener(\"touchstart\", handleStart, false);\n    window.addEventListener(\"touchend\", handleEnd, false);\n    window.addEventListener(\"touchmove\", handleMove, false);\n\n//Fonction appelée lors du touché de l'écran\n    function handleStart(event) {\n        startTime = new Date().getTime();\n        startY = event.touches[0].pageY;\n        startX = event.touches[0].pageX;\n    }\n\n//Fonction appelée lors de la fin du touché de l'écran\n    function handleEnd(event) {\n        endTime = new Date().getTime();\n        deltaTime = endTime - startTime;\n        speed = deltaY / deltaTime;\n        speed = Math.floor(speed * 10);\n        data.touchSpeed = speed;\n\n        /*\n        * Emit ici le data\n        * */\n        socket.emit('clientEmitData', data);\n        console.log(data);\n\n        document.getElementById(\"touchSpeed\").innerHTML = \"Speed : \" + data.touchSpeed;\n    }\n\n//Fonction appelé lors d'un mouvement sur l'écran\n    function handleMove(event) {\n        x = event.touches[0].pageX;\n        y = event.touches[0].pageY;\n        deltaX = startX - x;\n        deltaY = startY - y;\n        if (deltaY < 0) {\n            deltaY = -deltaY;\n        }\n        angle = Math.sin(deltaX / deltaY) * 180 / Math.PI;\n        angle = angle.toFixed(2);\n        data.touchAngle = angle;\n        document.getElementById(\"touchAngle\").innerHTML = \"Angle : \" + data.touchAngle;\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvZGV2aWNlLmpzP2U0ODciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiI1MC5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBkZWx0YVk7XG5sZXQgc3RhcnRYO1xubGV0IHN0YXJ0WTtcbmxldCB4O1xubGV0IHk7XG5sZXQgZGVsdGFYO1xubGV0IHN0YXJ0VGltZTtcbmxldCBlbmRUaW1lO1xubGV0IGRlbHRhVGltZTtcbmxldCBzcGVlZDtcbmxldCBhbmdsZTtcblxubGV0IGRhdGEgPSB7fTtcblxuLy8gaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xuXG4vLyBjb25zdCBzb2NrZXQgPSBpbygnaHR0cDovLzE3Mi4xNi42MS42NjoxMzM3LycpO1xuLy8gc29ja2V0Lm9uKCdjb25uZWN0JywgKGNsaWVudCkgPT4ge1xuXG4vL09uIGFwcGVsIGNoYXF1ZSDDqXbDqG5lbWVudCBsacOpcyBhdSB0b3VjaMOpIGRlIGwnw6ljcmFuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGhhbmRsZVN0YXJ0LCBmYWxzZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBoYW5kbGVFbmQsIGZhbHNlKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBoYW5kbGVNb3ZlLCBmYWxzZSk7XG5cbi8vRm9uY3Rpb24gYXBwZWzDqWUgbG9ycyBkdSB0b3VjaMOpIGRlIGwnw6ljcmFuXG4gICAgZnVuY3Rpb24gaGFuZGxlU3RhcnQoZXZlbnQpIHtcbiAgICAgICAgc3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHN0YXJ0WSA9IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVk7XG4gICAgICAgIHN0YXJ0WCA9IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVg7XG4gICAgfVxuXG4vL0ZvbmN0aW9uIGFwcGVsw6llIGxvcnMgZGUgbGEgZmluIGR1IHRvdWNow6kgZGUgbCfDqWNyYW5cbiAgICBmdW5jdGlvbiBoYW5kbGVFbmQoZXZlbnQpIHtcbiAgICAgICAgZW5kVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBkZWx0YVRpbWUgPSBlbmRUaW1lIC0gc3RhcnRUaW1lO1xuICAgICAgICBzcGVlZCA9IGRlbHRhWSAvIGRlbHRhVGltZTtcbiAgICAgICAgc3BlZWQgPSBNYXRoLmZsb29yKHNwZWVkICogMTApO1xuICAgICAgICBkYXRhLnRvdWNoU3BlZWQgPSBzcGVlZDtcblxuICAgICAgICAvKlxuICAgICAgICAqIEVtaXQgaWNpIGxlIGRhdGFcbiAgICAgICAgKiAqL1xuICAgICAgICBzb2NrZXQuZW1pdCgnY2xpZW50RW1pdERhdGEnLCBkYXRhKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3VjaFNwZWVkXCIpLmlubmVySFRNTCA9IFwiU3BlZWQgOiBcIiArIGRhdGEudG91Y2hTcGVlZDtcbiAgICB9XG5cbi8vRm9uY3Rpb24gYXBwZWzDqSBsb3JzIGQndW4gbW91dmVtZW50IHN1ciBsJ8OpY3JhblxuICAgIGZ1bmN0aW9uIGhhbmRsZU1vdmUoZXZlbnQpIHtcbiAgICAgICAgeCA9IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICAgIHkgPSBldmVudC50b3VjaGVzWzBdLnBhZ2VZO1xuICAgICAgICBkZWx0YVggPSBzdGFydFggLSB4O1xuICAgICAgICBkZWx0YVkgPSBzdGFydFkgLSB5O1xuICAgICAgICBpZiAoZGVsdGFZIDwgMCkge1xuICAgICAgICAgICAgZGVsdGFZID0gLWRlbHRhWTtcbiAgICAgICAgfVxuICAgICAgICBhbmdsZSA9IE1hdGguc2luKGRlbHRhWCAvIGRlbHRhWSkgKiAxODAgLyBNYXRoLlBJO1xuICAgICAgICBhbmdsZSA9IGFuZ2xlLnRvRml4ZWQoMik7XG4gICAgICAgIGRhdGEudG91Y2hBbmdsZSA9IGFuZ2xlO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvdWNoQW5nbGVcIikuaW5uZXJIVE1MID0gXCJBbmdsZSA6IFwiICsgZGF0YS50b3VjaEFuZ2xlO1xuICAgIH1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Zyb250L2RldmljZS5qc1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///50\n");

/***/ })

/******/ });