"use strict";
(self["webpackChunkmydemo"] = self["webpackChunkmydemo"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print */ "./src/print.js");
// import _ from 'lodash';


// function component() {
//   const element = document.createElement('div');
//   const btn = document.createElement('button');

//   element.innerHTML = _.join(['sandra', 'webpack_demo'], ' ');
 
//   btn.innerHTML = 'Click me and check console';
//   btn.onclick  = printMe;

//   element.appendChild(btn);

//   return element;
// }

// document.body.appendChild(component());


function getComponent() {
  return __webpack_require__.e(/*! import() */ "vendors").then(__webpack_require__.t.bind(__webpack_require__, /*! lodash */ "./node_modules/lodash/lodash.js", 23)).then(({ default: _ }) => {
     const element = document.createElement('div');
    const btn = document.createElement('button');


    element.innerHTML = _.join(['sandra', 'webpack_demo'], ' ');
    btn.innerHTML = 'Click me';
    btn.onclick  = _print__WEBPACK_IMPORTED_MODULE_0__["default"];
    element.onclick = _print__WEBPACK_IMPORTED_MODULE_0__["default"].bind(null, 'sandra webpack')
  
    return element;
  }).catch((err) => console.log(err))
}

getComponent().then((component) => document.body.appendChild(component))

/***/ }),

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ printMe)
/* harmony export */ });
function printMe() {
  console.log('I get called from print.js!-----');
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYmNlMDhmOTM5Mzg2OTU0ODg4MGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUM0Qjs7QUFFNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0EsU0FBUywySkFBZ0IsU0FBUyxZQUFZO0FBQzlDO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxtQkFBbUIsOENBQUs7QUFDeEIsc0JBQXNCLDhDQUFLO0FBQzNCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDbkNlO0FBQ2Y7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL215ZGVtby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9teWRlbW8vLi9zcmMvcHJpbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBwcmludCBmcm9tICcuL3ByaW50JztcblxuLy8gZnVuY3Rpb24gY29tcG9uZW50KCkge1xuLy8gICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4vLyAgIGVsZW1lbnQuaW5uZXJIVE1MID0gXy5qb2luKFsnc2FuZHJhJywgJ3dlYnBhY2tfZGVtbyddLCAnICcpO1xuIFxuLy8gICBidG4uaW5uZXJIVE1MID0gJ0NsaWNrIG1lIGFuZCBjaGVjayBjb25zb2xlJztcbi8vICAgYnRuLm9uY2xpY2sgID0gcHJpbnRNZTtcblxuLy8gICBlbGVtZW50LmFwcGVuZENoaWxkKGJ0bik7XG5cbi8vICAgcmV0dXJuIGVsZW1lbnQ7XG4vLyB9XG5cbi8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpO1xuXG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudCgpIHtcbiAgcmV0dXJuIGltcG9ydCgnbG9kYXNoJykudGhlbigoeyBkZWZhdWx0OiBfIH0pID0+IHtcbiAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG5cbiAgICBlbGVtZW50LmlubmVySFRNTCA9IF8uam9pbihbJ3NhbmRyYScsICd3ZWJwYWNrX2RlbW8nXSwgJyAnKTtcbiAgICBidG4uaW5uZXJIVE1MID0gJ0NsaWNrIG1lJztcbiAgICBidG4ub25jbGljayAgPSBwcmludDtcbiAgICBlbGVtZW50Lm9uY2xpY2sgPSBwcmludC5iaW5kKG51bGwsICdzYW5kcmEgd2VicGFjaycpXG4gIFxuICAgIHJldHVybiBlbGVtZW50O1xuICB9KS5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKVxufVxuXG5nZXRDb21wb25lbnQoKS50aGVuKChjb21wb25lbnQpID0+IGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KSkiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmludE1lKCkge1xuICBjb25zb2xlLmxvZygnSSBnZXQgY2FsbGVkIGZyb20gcHJpbnQuanMhLS0tLS0nKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=