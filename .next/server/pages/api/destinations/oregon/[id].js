(function() {
var exports = {};
exports.id = 6582;
exports.ids = [6582];
exports.modules = {

/***/ 2366:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ handler; }
/* harmony export */ });
/* harmony import */ var _data_attractions_oregon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5993);

function handler({
  query: {
    id
  }
}, res) {
  const filtered = _data_attractions_oregon__WEBPACK_IMPORTED_MODULE_0__/* .attractionGuides.filter */ .T.filter(guide => guide.id === id);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({
      message: `Attraction guide with id of ${id} was not found`
    });
  }
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [5993], function() { return __webpack_exec__(2366); });
module.exports = __webpack_exports__;

})();