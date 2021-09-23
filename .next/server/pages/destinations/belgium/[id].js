(function() {
var exports = {};
exports.id = 7534;
exports.ids = [7534];
exports.modules = {

/***/ 6632:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; },
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1130);
/* harmony import */ var _components_attraction_guides_AttractionsGuide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6520);





const Attraction = ({
  data
}) => {
  const {
    0: size,
    1: setSize
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    checkSize();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    window.addEventListener('resize', checkSize);
    return () => {
      window.removeEventListener('resize', checkSize);
    };
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_attraction_guides_AttractionsGuide__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    data: data,
    size: size
  });
};

const getStaticProps = async context => {
  const response = await fetch(`${_config__WEBPACK_IMPORTED_MODULE_3__/* .server */ .f}/api/destinations/belgium/${context.params.id}`);
  const data = await response.json();
  return {
    props: {
      data
    }
  };
};
const getStaticPaths = async () => {
  const response = await fetch(`${_config__WEBPACK_IMPORTED_MODULE_3__/* .server */ .f}/api/destinations/belgium`);
  const data = await response.json();
  const ids = data.map(place => place.id);
  const paths = ids.map(id => {
    return {
      params: {
        id: id.toString()
      }
    };
  });
  return {
    paths,
    fallback: false
  };
};
/* harmony default export */ __webpack_exports__["default"] = (Attraction);

/***/ }),

/***/ 5273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 5519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [2821,5675,1664,6893,1677,7061,9415,6520], function() { return __webpack_exec__(6632); });
module.exports = __webpack_exports__;

})();