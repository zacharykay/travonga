exports.id = 1677;
exports.ids = [1677];
exports.modules = {

/***/ 1313:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);




const Meta = ({
  meta
}) => {
  const {
    page_title,
    thumbnail,
    meta_description,
    meta_keywords,
    social_media_title,
    social_media_thumbnail
  } = meta;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      name: "keywords",
      content: meta_keywords
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      name: "description",
      content: meta_description
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      name: "thumbnail",
      content: thumbnail
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      property: "og:title",
      content: social_media_title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      name: "twitter:title",
      content: social_media_title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      property: "og:image",
      content: social_media_thumbnail
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      name: "twitter:image",
      content: social_media_thumbnail
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      charSet: "utf-8"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
      children: page_title
    })]
  });
};

Meta.defaultProps = {
  page_title: 'Travonga Travel Itineraries & Destination Guides',
  thumbnail: 'https://www.travelimager.com/images/utah/Utah-Moab-Arches-National-Park-Delicate-Arch-Golden-Hour-Travonga-Homepage-Thumbnail-150x150.jpg',
  meta_description: `Plan the perfect trip with Travonga's travel itineraries, discover and save top attractions lists to your phone`,
  meta_keywords: 'travel destinations, attractions guide, travel itineraries, trip itinerary',
  social_media_title: 'Travonga Travel Itineraries',
  social_media_thumbnail: 'https://www.travelimager.com/images/utah/Utah-Moab-Arches-National-Park-Delicate-Arch-Golden-Hour-Travonga-Homepage-Thumbnail-150x150.jpg'
};
/* harmony default export */ __webpack_exports__["Z"] = (Meta);

/***/ }),

/***/ 1130:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": function() { return /* binding */ server; }
/* harmony export */ });
const dev = false; // export const server = dev ? 'http://localhost:3000' : 'https://travonga.com';

const server = dev ? 'http://localhost:3000' : 'https://travonga.netlify.app';

/***/ })

};
;