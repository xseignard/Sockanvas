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

eval("let deltaY;\nlet startX;\nlet startY;\nlet x;\nlet y;\nlet deltaX;\nlet startTime;\nlet endTime;\nlet deltaTime;\nlet speed;\nlet angle;\n\nlet data = {};\n\n//On appel chaque évènement liés au touché de l'écran\nwindow.addEventListener(\"touchstart\", handleStart, false);\nwindow.addEventListener(\"touchend\", handleEnd, false);\nwindow.addEventListener(\"touchmove\", handleMove, false);\n\n//Fonction appelée lors du touché de l'écran\nfunction handleStart(event) {\n    startY = event.touches[0].pageY;\n    startX = event.touches[0].pageX;\n    startTime = new Date().getTime();\n}\n\n//Fonction appelée lors de la fin du touché de l'écran\nfunction handleEnd(event) {\n    endTime = new Date().getTime();\n    deltaTime = endTime - startTime;\n    speed = deltaY / deltaTime;\n    speed = Math.floor(speed * 10);\n    data.touchSpeed = speed;\n    document.getElementById(\"touchSpeed\").innerHTML = \"Speed : \" + data.touchSpeed;\n}\n\n//Fonction appelé lors d'un mouvement sur l'écran\nfunction handleMove(event) {\n    x = event.touches[0].pageX;\n    y = event.touches[0].pageY;\n    deltaX = startX - x;\n    deltaY = startY - y;\n    if (deltaY < 0) {\n        deltaY = -deltaY;\n    }\n    angle = Math.sin(deltaX / deltaY) * 180 / Math.PI;\n    angle = angle.toFixed(2);\n    data.touchAngle = angle;\n    document.getElementById(\"touchAngle\").innerHTML = \"Angle : \" + data.touchAngle;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvZGV2aWNlLmpzP2U0ODciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiNTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgZGVsdGFZO1xubGV0IHN0YXJ0WDtcbmxldCBzdGFydFk7XG5sZXQgeDtcbmxldCB5O1xubGV0IGRlbHRhWDtcbmxldCBzdGFydFRpbWU7XG5sZXQgZW5kVGltZTtcbmxldCBkZWx0YVRpbWU7XG5sZXQgc3BlZWQ7XG5sZXQgYW5nbGU7XG5cbmxldCBkYXRhID0ge307XG5cbi8vT24gYXBwZWwgY2hhcXVlIMOpdsOobmVtZW50IGxpw6lzIGF1IHRvdWNow6kgZGUgbCfDqWNyYW5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBoYW5kbGVTdGFydCwgZmFsc2UpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBoYW5kbGVFbmQsIGZhbHNlKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIGhhbmRsZU1vdmUsIGZhbHNlKTtcblxuLy9Gb25jdGlvbiBhcHBlbMOpZSBsb3JzIGR1IHRvdWNow6kgZGUgbCfDqWNyYW5cbmZ1bmN0aW9uIGhhbmRsZVN0YXJ0KGV2ZW50KSB7XG4gICAgc3RhcnRZID0gZXZlbnQudG91Y2hlc1swXS5wYWdlWTtcbiAgICBzdGFydFggPSBldmVudC50b3VjaGVzWzBdLnBhZ2VYO1xuICAgIHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xufVxuXG4vL0ZvbmN0aW9uIGFwcGVsw6llIGxvcnMgZGUgbGEgZmluIGR1IHRvdWNow6kgZGUgbCfDqWNyYW5cbmZ1bmN0aW9uIGhhbmRsZUVuZChldmVudCkge1xuICAgIGVuZFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICBkZWx0YVRpbWUgPSBlbmRUaW1lIC0gc3RhcnRUaW1lO1xuICAgIHNwZWVkID0gZGVsdGFZIC8gZGVsdGFUaW1lO1xuICAgIHNwZWVkID0gTWF0aC5mbG9vcihzcGVlZCAqIDEwKTtcbiAgICBkYXRhLnRvdWNoU3BlZWQgPSBzcGVlZDtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvdWNoU3BlZWRcIikuaW5uZXJIVE1MID0gXCJTcGVlZCA6IFwiICsgZGF0YS50b3VjaFNwZWVkO1xufVxuXG4vL0ZvbmN0aW9uIGFwcGVsw6kgbG9ycyBkJ3VuIG1vdXZlbWVudCBzdXIgbCfDqWNyYW5cbmZ1bmN0aW9uIGhhbmRsZU1vdmUoZXZlbnQpIHtcbiAgICB4ID0gZXZlbnQudG91Y2hlc1swXS5wYWdlWDtcbiAgICB5ID0gZXZlbnQudG91Y2hlc1swXS5wYWdlWTtcbiAgICBkZWx0YVggPSBzdGFydFggLSB4O1xuICAgIGRlbHRhWSA9IHN0YXJ0WSAtIHk7XG4gICAgaWYgKGRlbHRhWSA8IDApIHtcbiAgICAgICAgZGVsdGFZID0gLWRlbHRhWTtcbiAgICB9XG4gICAgYW5nbGUgPSBNYXRoLnNpbihkZWx0YVggLyBkZWx0YVkpICogMTgwIC8gTWF0aC5QSTtcbiAgICBhbmdsZSA9IGFuZ2xlLnRvRml4ZWQoMik7XG4gICAgZGF0YS50b3VjaEFuZ2xlID0gYW5nbGU7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3VjaEFuZ2xlXCIpLmlubmVySFRNTCA9IFwiQW5nbGUgOiBcIiArIGRhdGEudG91Y2hBbmdsZTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9mcm9udC9kZXZpY2UuanNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///50\n");

/***/ })

/******/ });