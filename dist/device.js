!function(n){function e(l){if(t[l])return t[l].exports;var d=t[l]={i:l,l:!1,exports:{}};return n[l].call(d.exports,d,d.exports,e),d.l=!0,d.exports}var t={};e.m=n,e.c=t,e.d=function(n,t,l){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:l})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="",e(e.s=50)}({50:function(module,exports){eval('let deltaY;\nlet startX;\nlet startY;\nlet x;\nlet y;\nlet deltaX;\nlet startTime;\nlet endTime;\nlet deltaTime;\nlet speed;\nlet angle;\n\nlet data = {};\n\n//On appel chaque évènement liés au touché de l\'écran\nwindow.addEventListener("touchstart", handleStart, false);\nwindow.addEventListener("touchend", handleEnd, false);\nwindow.addEventListener("touchmove", handleMove, false);\n\nwindow.addEventListener("devicemotion", motion, false);\nwindow.addEventListener("deviceorientation", orientation, false);\n\n//Fonction appelé lors du touché de l\'écran\nfunction handleStart(event) {\n    startY = event.touches[0].pageY;\n    startX = event.touches[0].pageX;\n    startTime = new Date().getTime();\n}\n\n//Fonction appelé lors de la fin du touché de l\'écran\nfunction handleEnd(event) {\n    endTime = new Date().getTime();\n    deltaTime = endTime - startTime;\n    speed = deltaY / deltaTime;\n    speed = Math.floor(speed * 10);\n    data.touchSpeed = speed;\n    document.getElementById("touchSpeed").innerHTML = "Speed : " + data.touchSpeed;\n}\n\n//Fonction appelé lors d\'un mouvement sur l\'écran\nfunction handleMove(event) {\n    x = event.touches[0].pageX;\n    y = event.touches[0].pageY;\n    deltaX = startX - x;\n    deltaY = startY - y;\n    if(deltaY < 0) { deltaY = -deltaY; }\n    angle = Math.sin(deltaX / deltaY) * 180 / Math.PI;\n    angle = angle.toFixed(2);\n    data.touchAngle = angle;\n    document.getElementById("touchAngle").innerHTML = "Angle : " + data.touchAngle;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvZGV2aWNlLmpzP2U0ODciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjUwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGRlbHRhWTtcbmxldCBzdGFydFg7XG5sZXQgc3RhcnRZO1xubGV0IHg7XG5sZXQgeTtcbmxldCBkZWx0YVg7XG5sZXQgc3RhcnRUaW1lO1xubGV0IGVuZFRpbWU7XG5sZXQgZGVsdGFUaW1lO1xubGV0IHNwZWVkO1xubGV0IGFuZ2xlO1xuXG5sZXQgZGF0YSA9IHt9O1xuXG4vL09uIGFwcGVsIGNoYXF1ZSDDqXbDqG5lbWVudCBsacOpcyBhdSB0b3VjaMOpIGRlIGwnw6ljcmFuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgaGFuZGxlU3RhcnQsIGZhbHNlKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgaGFuZGxlRW5kLCBmYWxzZSk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBoYW5kbGVNb3ZlLCBmYWxzZSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiZGV2aWNlbW90aW9uXCIsIG1vdGlvbiwgZmFsc2UpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJkZXZpY2VvcmllbnRhdGlvblwiLCBvcmllbnRhdGlvbiwgZmFsc2UpO1xuXG4vL0ZvbmN0aW9uIGFwcGVsw6kgbG9ycyBkdSB0b3VjaMOpIGRlIGwnw6ljcmFuXG5mdW5jdGlvbiBoYW5kbGVTdGFydChldmVudCkge1xuICAgIHN0YXJ0WSA9IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVk7XG4gICAgc3RhcnRYID0gZXZlbnQudG91Y2hlc1swXS5wYWdlWDtcbiAgICBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbn1cblxuLy9Gb25jdGlvbiBhcHBlbMOpIGxvcnMgZGUgbGEgZmluIGR1IHRvdWNow6kgZGUgbCfDqWNyYW5cbmZ1bmN0aW9uIGhhbmRsZUVuZChldmVudCkge1xuICAgIGVuZFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICBkZWx0YVRpbWUgPSBlbmRUaW1lIC0gc3RhcnRUaW1lO1xuICAgIHNwZWVkID0gZGVsdGFZIC8gZGVsdGFUaW1lO1xuICAgIHNwZWVkID0gTWF0aC5mbG9vcihzcGVlZCAqIDEwKTtcbiAgICBkYXRhLnRvdWNoU3BlZWQgPSBzcGVlZDtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvdWNoU3BlZWRcIikuaW5uZXJIVE1MID0gXCJTcGVlZCA6IFwiICsgZGF0YS50b3VjaFNwZWVkO1xufVxuXG4vL0ZvbmN0aW9uIGFwcGVsw6kgbG9ycyBkJ3VuIG1vdXZlbWVudCBzdXIgbCfDqWNyYW5cbmZ1bmN0aW9uIGhhbmRsZU1vdmUoZXZlbnQpIHtcbiAgICB4ID0gZXZlbnQudG91Y2hlc1swXS5wYWdlWDtcbiAgICB5ID0gZXZlbnQudG91Y2hlc1swXS5wYWdlWTtcbiAgICBkZWx0YVggPSBzdGFydFggLSB4O1xuICAgIGRlbHRhWSA9IHN0YXJ0WSAtIHk7XG4gICAgaWYoZGVsdGFZIDwgMCkgeyBkZWx0YVkgPSAtZGVsdGFZOyB9XG4gICAgYW5nbGUgPSBNYXRoLnNpbihkZWx0YVggLyBkZWx0YVkpICogMTgwIC8gTWF0aC5QSTtcbiAgICBhbmdsZSA9IGFuZ2xlLnRvRml4ZWQoMik7XG4gICAgZGF0YS50b3VjaEFuZ2xlID0gYW5nbGU7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3VjaEFuZ2xlXCIpLmlubmVySFRNTCA9IFwiQW5nbGUgOiBcIiArIGRhdGEudG91Y2hBbmdsZTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9mcm9udC9kZXZpY2UuanNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///50\n')}});