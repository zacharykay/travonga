exports.id = 9415;
exports.ids = [9415];
exports.modules = {

/***/ 5912:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ destinations_DestinationCard; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./styles/Destinations.module.css
var Destinations_module = __webpack_require__(7724);
var Destinations_module_default = /*#__PURE__*/__webpack_require__.n(Destinations_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./components/destinations/DestinationCardCredits.js



function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const DestinationCardCredits = (_ref) => {
  let {
    cardType
  } = _ref,
      place = _objectWithoutProperties(_ref, ["cardType"]);

  const {
    cc_image_url,
    cc_author_url,
    cc_author,
    cc_license,
    cc_license_url
  } = place;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
    className: cardType === 'carousel' ? 'owl-item-credits' : (Destinations_module_default()).destination_credits,
    children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: cc_image_url,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        children: "Photo"
      })
    }), ' ', "by", ' ', /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: cc_author_url,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        children: cc_author
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), !cc_license ? /*#__PURE__*/jsx_runtime_.jsx("i", {
      children: "Edited"
    }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: cc_license_url,
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          target: "_blank",
          rel: "noopener noreferrer",
          children: cc_license
        })
      }), ' | ', /*#__PURE__*/jsx_runtime_.jsx("i", {
        children: "Edited"
      })]
    })]
  });
};

/* harmony default export */ var destinations_DestinationCardCredits = (DestinationCardCredits);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/destinations/DestinationCard.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function DestinationCard_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = DestinationCard_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function DestinationCard_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const DestinationCard = (_ref) => {
  let {
    pageType
  } = _ref,
      place = DestinationCard_objectWithoutProperties(_ref, ["pageType"]);

  const {
    destinationName,
    page_url,
    image_url,
    image_alt
  } = place;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Destinations_module_default()).destination_container,
    children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: page_url,
      passHref: true,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "image_wrapper",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          className: (Destinations_module_default()).destination_image,
          alt: image_alt,
          src: image_url,
          width: 640,
          height: 480,
          title: `${destinationName} Attractions Guide`
        })
      })
    }), pageType === 'destinationsPage' && /*#__PURE__*/jsx_runtime_.jsx("h3", {
      className: (Destinations_module_default()).destination_title,
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: page_url,
        children: destinationName
      })
    }), pageType === 'attractionsPage' && /*#__PURE__*/jsx_runtime_.jsx("h4", {
      className: (Destinations_module_default()).destination_title,
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: page_url,
        children: destinationName
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(destinations_DestinationCardCredits, _objectSpread({
      cardType: "static"
    }, place))]
  });
};

/* harmony default export */ var destinations_DestinationCard = (DestinationCard);

/***/ }),

/***/ 7724:
/***/ (function(module) {

// Exports
module.exports = {
	"destination_placeName": "Destinations_destination_placeName__3L0uG",
	"destination_list": "Destinations_destination_list__2wKFT",
	"destinations_container": "Destinations_destinations_container__3Zyzl",
	"destination_container": "Destinations_destination_container__3bC7Y",
	"destination_title": "Destinations_destination_title__37rme",
	"destination_image": "Destinations_destination_image__Jn44s",
	"destination_credits": "Destinations_destination_credits__1iz8y"
};


/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;