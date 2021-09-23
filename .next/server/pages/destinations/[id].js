(function() {
var exports = {};
exports.id = 8037;
exports.ids = [8037];
exports.modules = {

/***/ 7037:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _id_; },
  "getStaticPaths": function() { return /* binding */ getStaticPaths; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__(1130);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/layout/Meta.js
var Meta = __webpack_require__(1313);
// EXTERNAL MODULE: ./components/destinations/DestinationCard.js + 1 modules
var DestinationCard = __webpack_require__(5912);
// EXTERNAL MODULE: ./styles/Destinations.module.css
var Destinations_module = __webpack_require__(7724);
var Destinations_module_default = /*#__PURE__*/__webpack_require__.n(Destinations_module);
;// CONCATENATED MODULE: ./components/destinations/DestinationsPage.js




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function DestinationsPage({
  destinations,
  placeName,
  meta
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "/favicon.ico"
      }), /*#__PURE__*/jsx_runtime_.jsx(Meta/* default */.Z, {
        meta: meta
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
        className: (Destinations_module_default()).destination_placeName,
        children: [placeName, " Attraction\xA0Guides"]
      }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: "destinations-list-heading",
        children: "Destinations A\xA0\u2011\xA0Z"
      }), /*#__PURE__*/jsx_runtime_.jsx("section", {
        className: (Destinations_module_default()).destination_list,
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Destinations_module_default()).destinations_container,
          children: destinations.map(place => {
            const {
              id
            } = place;
            return /*#__PURE__*/jsx_runtime_.jsx(DestinationCard/* default */.Z, _objectSpread(_objectSpread({}, place), {}, {
              pageType: "destinationsPage"
            }), id);
          })
        })
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./pages/destinations/[id]/index.js




const destination = ({
  data
}) => {
  const {
    stateName,
    destinations,
    meta
  } = data;
  return /*#__PURE__*/jsx_runtime_.jsx(DestinationsPage, {
    destinations: destinations,
    placeName: stateName,
    meta: meta
  });
};

const getStaticProps = async context => {
  const response = await fetch(`${config/* server */.f}/api/destinations/${context.params.id}`);
  const data = await response.json();
  return {
    props: {
      data
    }
  };
};
const getStaticPaths = async () => {
  const response = await fetch(`${config/* server */.f}/api/destinations`);
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
/* harmony default export */ var _id_ = (destination);

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [2821,5675,1664,1677,9415], function() { return __webpack_exec__(7037); });
module.exports = __webpack_exports__;

})();