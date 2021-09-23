(function() {
var exports = {};
exports.id = 328;
exports.ids = [328];
exports.modules = {

/***/ 176:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ handler; }
/* harmony export */ });
/* harmony import */ var _data_attractions_italy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9992);

function handler(req, res) {
  res.status(200).json(_data_attractions_italy__WEBPACK_IMPORTED_MODULE_0__/* .attractionGuides */ .T);
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [9992], function() { return __webpack_exec__(176); });
module.exports = __webpack_exports__;

})();