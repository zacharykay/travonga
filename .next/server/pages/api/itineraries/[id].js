(function() {
var exports = {};
exports.id = 5264;
exports.ids = [5264];
exports.modules = {

/***/ 4468:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ handler; }
/* harmony export */ });
/* harmony import */ var _data_itineraries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7161);

function handler({
  query: {
    id
  }
}, res) {
  const filtered = _data_itineraries__WEBPACK_IMPORTED_MODULE_0__/* .itineraries.filter */ .o.filter(itinerary => itinerary.id === id);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({
      message: `destination with id of {id} was not found`
    });
  }
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [7161], function() { return __webpack_exec__(4468); });
module.exports = __webpack_exports__;

})();