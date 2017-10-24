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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ 9:
/***/ (function(module, exports) {

eval("let deltaY;\nlet startX;\nlet startY;\nlet x;\nlet y;\nlet deltaX;\nlet startTime;\nlet endTime;\nlet deltaTime;\nlet speed;\nlet angle;\n\nlet data = {};\n\n//On appel chaque évènement liés au touché de l'écran\nwindow.addEventListener(\"touchstart\", handleStart, false);\nwindow.addEventListener(\"touchend\", handleEnd, false);\nwindow.addEventListener(\"touchmove\", handleMove, false);\n\n//Fonction appelée lors du touché de l'écran\nfunction handleStart(event) {\n    startY = event.touches[0].pageY;\n    startX = event.touches[0].pageX;\n    startTime = new Date().getTime();\n}\n\n//Fonction appelée lors de la fin du touché de l'écran\nfunction handleEnd(event) {\n    endTime = new Date().getTime();\n    deltaTime = endTime - startTime;\n    speed = deltaY / deltaTime;\n    speed = Math.floor(speed * 10);\n    data.touchSpeed = speed;\n    document.getElementById(\"touchSpeed\").innerHTML = \"Speed : \" + data.touchSpeed;\n}\n\n//Fonction appelé lors d'un mouvement sur l'écran\nfunction handleMove(event) {\n    x = event.touches[0].pageX;\n    y = event.touches[0].pageY;\n    deltaX = startX - x;\n    deltaY = startY - y;\n    if (deltaY < 0) {\n        deltaY = -deltaY;\n    }\n    angle = Math.sin(deltaX / deltaY) * 180 / Math.PI;\n    angle = angle.toFixed(2);\n    data.touchAngle = angle;\n    document.getElementById(\"touchAngle\").innerHTML = \"Angle : \" + data.touchAngle;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvZGV2aWNlLmpzP2U0ODciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBkZWx0YVk7XG5sZXQgc3RhcnRYO1xubGV0IHN0YXJ0WTtcbmxldCB4O1xubGV0IHk7XG5sZXQgZGVsdGFYO1xubGV0IHN0YXJ0VGltZTtcbmxldCBlbmRUaW1lO1xubGV0IGRlbHRhVGltZTtcbmxldCBzcGVlZDtcbmxldCBhbmdsZTtcblxubGV0IGRhdGEgPSB7fTtcblxuLy9PbiBhcHBlbCBjaGFxdWUgw6l2w6huZW1lbnQgbGnDqXMgYXUgdG91Y2jDqSBkZSBsJ8OpY3Jhblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGhhbmRsZVN0YXJ0LCBmYWxzZSk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIGhhbmRsZUVuZCwgZmFsc2UpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgaGFuZGxlTW92ZSwgZmFsc2UpO1xuXG4vL0ZvbmN0aW9uIGFwcGVsw6llIGxvcnMgZHUgdG91Y2jDqSBkZSBsJ8OpY3JhblxuZnVuY3Rpb24gaGFuZGxlU3RhcnQoZXZlbnQpIHtcbiAgICBzdGFydFkgPSBldmVudC50b3VjaGVzWzBdLnBhZ2VZO1xuICAgIHN0YXJ0WCA9IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVg7XG4gICAgc3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG59XG5cbi8vRm9uY3Rpb24gYXBwZWzDqWUgbG9ycyBkZSBsYSBmaW4gZHUgdG91Y2jDqSBkZSBsJ8OpY3JhblxuZnVuY3Rpb24gaGFuZGxlRW5kKGV2ZW50KSB7XG4gICAgZW5kVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIGRlbHRhVGltZSA9IGVuZFRpbWUgLSBzdGFydFRpbWU7XG4gICAgc3BlZWQgPSBkZWx0YVkgLyBkZWx0YVRpbWU7XG4gICAgc3BlZWQgPSBNYXRoLmZsb29yKHNwZWVkICogMTApO1xuICAgIGRhdGEudG91Y2hTcGVlZCA9IHNwZWVkO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG91Y2hTcGVlZFwiKS5pbm5lckhUTUwgPSBcIlNwZWVkIDogXCIgKyBkYXRhLnRvdWNoU3BlZWQ7XG59XG5cbi8vRm9uY3Rpb24gYXBwZWzDqSBsb3JzIGQndW4gbW91dmVtZW50IHN1ciBsJ8OpY3JhblxuZnVuY3Rpb24gaGFuZGxlTW92ZShldmVudCkge1xuICAgIHggPSBldmVudC50b3VjaGVzWzBdLnBhZ2VYO1xuICAgIHkgPSBldmVudC50b3VjaGVzWzBdLnBhZ2VZO1xuICAgIGRlbHRhWCA9IHN0YXJ0WCAtIHg7XG4gICAgZGVsdGFZID0gc3RhcnRZIC0geTtcbiAgICBpZiAoZGVsdGFZIDwgMCkge1xuICAgICAgICBkZWx0YVkgPSAtZGVsdGFZO1xuICAgIH1cbiAgICBhbmdsZSA9IE1hdGguc2luKGRlbHRhWCAvIGRlbHRhWSkgKiAxODAgLyBNYXRoLlBJO1xuICAgIGFuZ2xlID0gYW5nbGUudG9GaXhlZCgyKTtcbiAgICBkYXRhLnRvdWNoQW5nbGUgPSBhbmdsZTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvdWNoQW5nbGVcIikuaW5uZXJIVE1MID0gXCJBbmdsZSA6IFwiICsgZGF0YS50b3VjaEFuZ2xlO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Zyb250L2RldmljZS5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///9\n");

/***/ })

/******/ });