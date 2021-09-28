(function() {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 574:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./styles/Navbar.module.css
var Navbar_module = __webpack_require__(8200);
var Navbar_module_default = /*#__PURE__*/__webpack_require__.n(Navbar_module);
;// CONCATENATED MODULE: ./utils/fullNavigation.js
const navigationLinks = [{
  id: 1,
  name: 'Attraction Guides',
  categories: [{
    id: 1,
    name: 'Europe',
    pages: [{
      id: 1,
      name: 'Austria',
      url: '/destinations/austria-attractions-guides'
    }, {
      id: 2,
      name: 'Belgium',
      url: '/destinations/belgium-attractions-guides'
    }, {
      id: 3,
      name: 'Czech Republic',
      url: '/destinations/czech-republic-attractions-guides'
    }, {
      id: 4,
      name: 'Denmark',
      url: '/destinations/europe/denmark-copenhagen-attractions-guide'
    }, {
      id: 5,
      name: 'England',
      url: '/destinations/england-attractions-guides'
    }, {
      id: 6,
      name: 'France',
      url: '/destinations/france-attractions-guides'
    }, {
      id: 7,
      name: 'Germany',
      url: '/destinations/germany-attractions-guides'
    }, {
      id: 8,
      name: 'Greece',
      url: '/destinations/greece-attractions-guides'
    }, {
      id: 9,
      name: 'Hungary',
      url: '/destinations/europe/hungary-budapest-attractions-guide'
    }, {
      id: 10,
      name: 'Italy',
      url: '/destinations/italy-attractions-guides'
    }, {
      id: 11,
      name: 'Ireland',
      url: '/destinations/ireland-attractions-guides'
    }]
  }, {
    id: 2,
    name: 'More Europe',
    pages: [{
      id: 12,
      name: 'Luxembourg',
      url: '/destinations/europe/luxembourg-city-attractions-guide'
    }, {
      id: 13,
      name: 'Monaco',
      url: '/destinations/europe/monaco-attractions-guide'
    }, {
      id: 14,
      name: 'Netherlands',
      url: '/destinations/netherlands-attractions-guides'
    }, {
      id: 15,
      name: 'Norway',
      url: '/destinations/europe/norway-oslo-attractions-guide'
    }, {
      id: 16,
      name: 'Portugal',
      url: '/destinations/portugal-attractions-guides'
    }, {
      id: 17,
      name: 'Scotland',
      url: '/destinations/scotland-attractions-guides'
    }, {
      id: 18,
      name: 'Slovakia',
      url: '/destinations/europe/slovakia-bratislava-attractions-guide'
    }, {
      id: 19,
      name: 'Slovenia',
      url: '/destinations/slovenia-attractions-guides'
    }, {
      id: 20,
      name: 'Spain',
      url: '/destinations/spain-attractions-guides'
    }, {
      id: 21,
      name: 'Sweden',
      url: '/destinations/europe/sweden-stockholm-attractions-guide'
    }, {
      id: 22,
      name: 'Switzerland',
      url: '/destinations/switzerland-attractions-guides'
    }]
  }, {
    id: 3,
    name: 'USA & Canada',
    pages: [{
      id: 1,
      name: 'Arizona',
      url: '/destinations/arizona-attractions-guides'
    }, {
      id: 2,
      name: 'British Columbia',
      url: '/destinations/british-columbia-attractions-guides'
    }, {
      id: 3,
      name: 'California',
      url: '/destinations/california-attractions-guides'
    }, {
      id: 4,
      name: 'Colorado',
      url: '/destinations/colorado-attractions-guides'
    }, {
      id: 5,
      name: 'Montana',
      url: '/destinations/usa/montana-glacier-national-park-attractions-guide'
    }, {
      id: 6,
      name: 'Nevada',
      url: '/destinations/nevada-attractions-guides'
    }, {
      id: 7,
      name: 'New Mexico',
      url: '/destinations/new-mexico-attractions-guides'
    }, {
      id: 8,
      name: 'Oregon',
      url: '/destinations/oregon-attractions-guides'
    }, {
      id: 9,
      name: 'Utah',
      url: '/destinations/utah-attractions-guides'
    }, {
      id: 10,
      name: 'Washington',
      url: '/destinations/washington-attractions-guides'
    }, {
      id: 11,
      name: 'Wyoming',
      url: '/destinations/wyoming-attractions-guides'
    }]
  }]
}, {
  id: 2,
  name: 'Europe Itineraries',
  categories: [{
    id: 1,
    name: 'By Country',
    pages: [{
      id: 1,
      name: 'Southern England',
      url: '/itineraries/southern-england-travel-itinerary-and-top-attractions'
    }, {
      id: 2,
      name: 'France',
      url: '/itineraries/france-travel-itinerary-and-top-attractions-by-train'
    }, {
      id: 3,
      name: 'Italy',
      url: '/itineraries/italy-travel-itinerary-and-top-attractions-by-train'
    }, {
      id: 4,
      name: 'Portugal',
      url: '/itineraries/portugal-travel-itinerary-and-top-attractions'
    }, {
      id: 5,
      name: 'Spain',
      url: '/itineraries/spain-travel-itinerary-and-top-attractions-by-train'
    }]
  }, {
    id: 2,
    name: 'Regions',
    pages: [{
      id: 1,
      name: 'Western Europe',
      url: '/itineraries/western-europe-travel-itinerary-and-top-attractions-by-train'
    }, {
      id: 2,
      name: 'Central Europe',
      url: '/itineraries/central-europe-travel-itinerary-and-top-attractions-by-train'
    }, {
      id: 3,
      name: '1 Month in Europe',
      url: '/itineraries/1-month-in-europe-travel-itinerary-and-top-attractions-by-train'
    }, {
      id: 4,
      name: '6 Weeks in Europe',
      url: '/itineraries/6-weeks-in-europe-travel-itinerary-and-top-attractions-by-train'
    }, {
      id: 5,
      name: '2+ Months in Europe',
      url: '/itineraries/2-months-in-europe-travel-itinerary-and-top-attractions-by-train'
    }]
  }, {
    id: 3,
    name: 'Combinations',
    pages: [{
      id: 1,
      name: 'France & Spain',
      url: '/itineraries/france-and-spain-travel-itinerary-and-top-attractions-by-train'
    }, {
      id: 2,
      name: 'Spain & Portugal',
      url: '/itineraries/spain-and-portugal-travel-itinerary-and-top-attractions-by-train'
    }, {
      id: 3,
      name: 'U.K. & Ireland',
      url: '/itineraries/uk-and-ireland-travel-itinerary-and-top-attractions'
    }]
  }]
}, {
  id: 3,
  name: 'US Road Trips',
  categories: [{
    id: 1,
    name: 'US States',
    pages: [{
      id: 1,
      name: 'Arizona',
      url: '/itineraries/arizona-road-trip-itinerary-and-top-attractions'
    }, {
      id: 2,
      name: 'California',
      url: '/itineraries/california-road-trip-itinerary-and-top-attractions'
    }, {
      id: 3,
      name: 'Highlights of California',
      url: '/itineraries/highlights-of-california-road-trip-itinerary-and-top-attractions'
    }, {
      id: 4,
      name: 'Northern California',
      url: '/itineraries/northern-california-road-trip-itinerary-and-top-attractions'
    }, {
      id: 5,
      name: 'Southern California',
      url: '/itineraries/southern-california-road-trip-itinerary-and-top-attractions'
    }, {
      id: 6,
      name: 'Colorado',
      url: '/itineraries/colorado-road-trip-itinerary-and-top-attractions'
    }, {
      id: 7,
      name: 'Oregon',
      url: '/itineraries/oregon-road-trip-itinerary-and-top-attractions'
    }, {
      id: 8,
      name: 'Utah',
      url: '/itineraries/utah-road-trip-itinerary-and-top-attractions'
    }, {
      id: 9,
      name: 'Washington',
      url: '/itineraries/washington-road-trip-itinerary-and-top-attractions'
    }]
  }, {
    id: 2,
    name: 'Regions & Canada',
    pages: [{
      id: 1,
      name: 'British Columbia',
      url: '/itineraries/british-columbia-road-trip-itinerary-and-top-attractions'
    }, {
      id: 2,
      name: 'Pacific Coast US',
      url: '/itineraries/pacific-coast-road-trip-itinerary-and-top-attractions'
    }, {
      id: 3,
      name: 'Pacific Northwest',
      url: '/itineraries/pacific-northwest-road-trip-itinerary-and-top-attractions'
    }, {
      id: 4,
      name: 'Southwest US',
      url: '/itineraries/southwest-us-road-trip-itinerary-and-top-attractions'
    }]
  }, {
    id: 3,
    name: 'Combinations',
    pages: [{
      id: 1,
      name: 'California + Arizona + Utah',
      url: '/itineraries/california-arizona-and-utah-road-trip-itinerary-and-top-attractions'
    }, {
      id: 2,
      name: 'Northern California + Oregon',
      url: '/itineraries/northern-california-and-oregon-road-trip-itinerary-and-top-attractions'
    }, {
      id: 3,
      name: 'Southern California + Arizona',
      url: '/itineraries/southern-california-and-arizona-road-trip-itinerary-and-top-attractions'
    }, {
      id: 4,
      name: 'Utah + Arizona',
      url: '/itineraries/utah-and-arizona-road-trip-itinerary-and-top-attractions'
    }, {
      id: 5,
      name: 'Utah + Colorado',
      url: '/itineraries/utah-and-colorado-road-trip-itinerary-and-top-attractions'
    }, {
      id: 6,
      name: 'Washington + Oregon',
      url: '/itineraries/washington-and-oregon-road-trip-itinerary-and-top-attractions'
    }, {
      id: 7,
      name: 'Wyoming + Montana',
      url: '/itineraries/wyoming-and-montana-road-trip-itinerary-and-top-attractions'
    }, {
      id: 8,
      name: 'Wyoming + Utah',
      url: '/itineraries/wyoming-and-utah-road-trip-itinerary-and-top-attractions'
    }]
  }]
}];
;// CONCATENATED MODULE: ./components/layout/Navbar.js







const MobileLogo = '/assets/Travonga-Travel-Itineraries-Logo-Nav-Header-Inverted-768x227.png';
const HeaderLogo = '/assets/Travonga-Travel-Itineraries-Logo-Nav-Header-768x227.png';

const Navbar = () => {
  const {
    0: menuToggled,
    1: setMenuToggled
  } = (0,external_react_.useState)(false);
  const {
    0: submenuIndex,
    1: setSubmenuIndex
  } = (0,external_react_.useState)(null);
  const {
    0: submenuShow,
    1: setSubmenuShow
  } = (0,external_react_.useState)(true);

  const toggleSubmenu = index => {
    if (menuToggled) {
      if (submenuIndex === index) {
        setSubmenuIndex(null);
        return;
      }

      setSubmenuIndex(index);
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx("nav", {
    className: (Navbar_module_default()).site_nav_container,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Navbar_module_default()).mega_site_nav,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Navbar_module_default()).site_logo_mobile,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          passHref: true,
          className: (Navbar_module_default()).header_image_wrapper_mobile,
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            className: (Navbar_module_default()).header_image,
            src: MobileLogo,
            alt: "Travonga.com Travel Itineraries and Attraction Guides - Logo and Site Banner Inverted for Mobile",
            width: "202.98",
            height: "60"
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: menuToggled ? (Navbar_module_default()).site_nav + ' ' + (Navbar_module_default()).mobile_nav_open : (Navbar_module_default()).site_nav,
        id: (Navbar_module_default()).megaNavMenu,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Navbar_module_default()).site_logo,
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/",
            passHref: true,
            className: (Navbar_module_default()).header_image_wrapper,
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              className: (Navbar_module_default()).header_image,
              src: HeaderLogo,
              alt: "Travonga.com Travel Itineraries and Attraction Guides - Logo and Site Banner for Desktop and Tablet",
              width: "202.98",
              height: "60"
            })
          })
        }), navigationLinks.map((link, index) => {
          const {
            id,
            name,
            categories
          } = link;
          return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (Navbar_module_default()).menu_item,
            onClick: () => toggleSubmenu(index),
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              id: menuToggled ? (Navbar_module_default()).menuBackdrop : (Navbar_module_default()).backdrop,
              onClick: () => {
                setMenuToggled(!menuToggled);
                setSubmenuIndex(null);
              }
            }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
              className: submenuIndex === index ? (Navbar_module_default()).menu_item_title + ' ' + (Navbar_module_default()).menu_item_title_active : (Navbar_module_default()).menu_item_title,
              children: name
            }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
              className: submenuIndex === index && submenuShow ? (Navbar_module_default()).mobile_menu_open + ' ' + (Navbar_module_default()).submenu : submenuShow ? (Navbar_module_default()).submenu : (Navbar_module_default()).submenuHide,
              children: categories.map(category => {
                const {
                  id,
                  name,
                  pages
                } = category;
                return /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                  className: (Navbar_module_default()).submenu_column,
                  children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                    className: (Navbar_module_default()).submenu_column_heading,
                    children: name
                  }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
                    className: (Navbar_module_default()).submenu_column_list,
                    children: pages.map(page => {
                      const {
                        id,
                        name,
                        url
                      } = page;
                      return /*#__PURE__*/jsx_runtime_.jsx("li", {
                        onClick: () => {
                          setSubmenuShow(false);
                          setMenuToggled(false);
                          setSubmenuIndex(null);
                          setTimeout(() => {
                            setSubmenuShow(true);
                          }, 100);
                        },
                        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                          href: url,
                          children: name
                        })
                      }, id);
                    })
                  })]
                }, id);
              })
            })]
          }, id);
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        type: "button",
        className: (Navbar_module_default()).nav_menu_mobile_icon,
        onClick: () => {
          setMenuToggled(!menuToggled);
          setSubmenuIndex(null);
        },
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "\u2630"
        })
      })]
    })
  });
};

/* harmony default export */ var layout_Navbar = (Navbar);
// EXTERNAL MODULE: ./styles/Footer.module.css
var Footer_module = __webpack_require__(647);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./components/layout/Footer.js





const Footer = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("footer", {
    className: (Footer_module_default()).footer,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Footer_module_default()).footer_flexbox,
      children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
        className: (Footer_module_default()).site_identity,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          children: "TRAVONGA.COM"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        className: (Footer_module_default()).site_identity_copyright,
        children: ["Copyright \xA9 2017\u20112021 by Travonga.com", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "Travonga Travel Itineraries & Attractions\xA0Guides"]
      })]
    })
  });
};

/* harmony default export */ var layout_Footer = (Footer);
;// CONCATENATED MODULE: ./components/layout/Layout.js






const Layout = ({
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(layout_Navbar, {}), children, /*#__PURE__*/jsx_runtime_.jsx(layout_Footer, {})]
  });
};

/* harmony default export */ var layout_Layout = (Layout);
;// CONCATENATED MODULE: ./pages/_app.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function Travonga({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(layout_Layout, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
  });
}

/* harmony default export */ var _app = (Travonga);

/***/ }),

/***/ 647:
/***/ (function(module) {

// Exports
module.exports = {
	"footer": "Footer_footer__317iK",
	"footer_flexbox": "Footer_footer_flexbox__3YGBo",
	"site_identity": "Footer_site_identity__gHnxS",
	"site_identity_copyright": "Footer_site_identity_copyright__34sVr"
};


/***/ }),

/***/ 8200:
/***/ (function(module) {

// Exports
module.exports = {
	"site_nav_container": "Navbar_site_nav_container__27BWR",
	"site_nav": "Navbar_site_nav__2tqEC",
	"sitenav": "Navbar_sitenav__4QzU3",
	"menu_item": "Navbar_menu_item__3ArvD",
	"menu_item_title": "Navbar_menu_item_title__3ph4P",
	"submenu": "Navbar_submenu__CPQrh",
	"submenu_column": "Navbar_submenu_column__3l2gQ",
	"submenu_column_heading": "Navbar_submenu_column_heading__18qrI",
	"submenu_column_list": "Navbar_submenu_column_list__1CtG7",
	"mega_site_nav": "Navbar_mega_site_nav__3Yxz6",
	"mobile_nav_open": "Navbar_mobile_nav_open__1fO2V",
	"site_logo": "Navbar_site_logo__3Ytdj",
	"header_image_wrapper": "Navbar_header_image_wrapper__1ywfX",
	"site_logo_mobile": "Navbar_site_logo_mobile__1SU_j",
	"header_image_wrapper_mobile": "Navbar_header_image_wrapper_mobile__1jkgG",
	"header_image": "Navbar_header_image__2qqAF",
	"nav_menu_mobile_icon": "Navbar_nav_menu_mobile_icon__ahlKc",
	"menu_item_title_active": "Navbar_menu_item_title_active__38I3X",
	"submenuHide": "Navbar_submenuHide__2Iulg",
	"mobile_menu_open": "Navbar_mobile_menu_open__2WMJ8",
	"menuBackdrop": "Navbar_menuBackdrop__1AFb5",
	"backdrop": "Navbar_backdrop__2hRps"
};


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

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [2821,5675,1664], function() { return __webpack_exec__(574); });
module.exports = __webpack_exports__;

})();