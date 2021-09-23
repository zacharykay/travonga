exports.id = 7061;
exports.ids = [7061];
exports.modules = {

/***/ 49:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6893);
/* harmony import */ var _styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2405);
/* harmony import */ var _styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_3__);







function Carousel({
  attractions,
  carousel_id,
  itineraryCarousel,
  size
}) {
  const carouselItems = itineraryCarousel ? attractions : attractions[carousel_id].map(carousel => carousel);
  const {
    0: index,
    1: setIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    0: prevBtnTimeout,
    1: setPrevBtnTimeout
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: nextBtnTimeout,
    1: setNextBtnTimeout
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const nextSlide = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    setIndex(oldIndex => {
      let index = oldIndex + 1;

      if (index > cloned.length - 1) {
        index = 0;
      }

      return index;
    });
  }, //eslint-disable-next-line
  [setIndex]);

  const prevBtn = () => {
    setPrevBtnTimeout(true);
    setTimeout(() => {
      setIndex(oldIndex => {
        let index = oldIndex - 1;

        if (index < 0) {
          index = cloned.length - 1;
        }

        return index;
      });
      setPrevBtnTimeout(false);
    }, 200);
  };

  const nextBtn = () => {
    setNextBtnTimeout(true);
    setTimeout(() => {
      nextSlide();
      setNextBtnTimeout(false);
    }, 200);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    let slider = setInterval(nextSlide, 3000);
    return () => clearInterval(slider);
  }, [index, nextSlide]);
  const cloned = carouselItems.slice();

  if (carouselItems.length === 4) {
    const firstClone = carouselItems[0];
    const secondClone = carouselItems[1];
    const secondToLastClone = carouselItems[carouselItems.length - 2];
    const lastClone = carouselItems[carouselItems.length - 1];
    cloned.unshift(lastClone);
    cloned.unshift(secondToLastClone);
    cloned.unshift(secondClone);
    cloned.unshift(firstClone);
    cloned.push(firstClone);
    cloned.push(secondClone);
    cloned.push(secondToLastClone);
    cloned.push(lastClone);
  }

  if (carouselItems.length === 3) {
    const firstClone = carouselItems[0];
    const secondClone = carouselItems[1];
    const lastClone = carouselItems[carouselItems.length - 1];
    cloned.unshift(lastClone);
    cloned.unshift(secondClone);
    cloned.unshift(firstClone);
    cloned.push(firstClone);
    cloned.push(secondClone);
    cloned.push(lastClone);
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
    className: (_styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_3___default().carouselWrapper),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: (_styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_3___default()["carousel-standard"]),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_3___default().carouselItems),
        children: cloned.map((carouselItem, carouselIndex) => {
          const {
            attraction,
            image_url,
            image_alt,
            cc_image_url,
            cc_author_url,
            cc_author,
            cc_license,
            cc_license_url
          } = carouselItem;
          let position = 'nextSlide';

          if (carouselIndex === index) {
            position = 'activeSlide';
          }

          if (size >= 501 && (carouselIndex === index + 1 || carouselIndex === 0 && index === cloned.length - 1)) {
            position = 'activeSlide2';
          }

          if (size >= 800 && (carouselIndex === index + 2 || carouselIndex === 0 && index === cloned.length - 2 || carouselIndex === 1 && index === cloned.length - 1)) {
            position = 'activeSlide3';
          }

          if (carouselIndex === index - 1 || index === 0 && carouselIndex === cloned.length - 1) {
            position = 'lastSlide';
          }

          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_3___default())[position] + ' ' + (_styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_3___default().carouselItem),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__.default, {
              alt: image_alt,
              src: image_url,
              width: 640,
              height: 480
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
              className: (_styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_3___default()["carousel-item-text"]),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                className: (_styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_3___default()["carousel-item-title"]),
                children: attraction
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: (_styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_3___default()["carousel-item-credits"]),
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                  href: cc_image_url,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "Photo"
                }), ' ', "by", ' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                  href: cc_author_url,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: cc_author
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), cc_license === null ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                  children: "Edited"
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    href: cc_license_url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: cc_license
                  }), ' | ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    children: "Edited"
                  })]
                })]
              })]
            })]
          }, `carousel-${carouselIndex + 1}`);
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: (_styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_3___default().dotsContainer),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: (_styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_3___default().prev),
        onClick: prevBtnTimeout ? null : prevBtn,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__/* .FiArrowLeftCircle */ .aiR, {
          className: (_styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_3___default().icon)
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: (_styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_3___default().next),
        onClick: nextBtnTimeout ? null : nextBtn,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__/* .FiArrowRightCircle */ .O3L, {
          className: (_styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_3___default().icon)
        })
      })]
    })]
  });
}

/* harmony default export */ __webpack_exports__["Z"] = (Carousel);

/***/ }),

/***/ 6524:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_MapsAttractionLists_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5139);
/* harmony import */ var _styles_MapsAttractionLists_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_MapsAttractionLists_module_css__WEBPACK_IMPORTED_MODULE_1__);




const MapsAttractionLists = ({
  destinationName,
  stateName,
  destination_link,
  attractionMapLinks
}) => {
  const {
    top_attractions,
    all_attractions,
    main_attractions,
    short_attractions,
    custom_attractions_1,
    custom_attractions_1_text,
    custom_attractions_2,
    custom_attractions_2_text,
    custom_attractions_3,
    custom_attractions_3_text,
    custom_attractions_4,
    custom_attractions_4_text
  } = attractionMapLinks;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
    className: destination_link ? (_styles_MapsAttractionLists_module_css__WEBPACK_IMPORTED_MODULE_1___default().attraction_lists) + ' ' + (_styles_MapsAttractionLists_module_css__WEBPACK_IMPORTED_MODULE_1___default().tab_align) : (_styles_MapsAttractionLists_module_css__WEBPACK_IMPORTED_MODULE_1___default().attraction_lists),
    children: [!destination_link && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
      className: "anchor",
      id: "attractions-maps"
    }), destination_link && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
      className: "destination_guide_links",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
        className: "destination_guide_link",
        href: destination_link,
        children: ["Attractions Guide for ", destinationName, ",\xA0", stateName]
      })
    }), !destination_link && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
      className: "section_heading left_heading",
      children: "Google Maps Attraction\xA0Lists"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
      className: (_styles_MapsAttractionLists_module_css__WEBPACK_IMPORTED_MODULE_1___default().destinations_save_attractions_header),
      children: ["Save ", destinationName, " Attraction Lists to\xA0your Google\xA0Maps\xA0Account:"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: (_styles_MapsAttractionLists_module_css__WEBPACK_IMPORTED_MODULE_1___default().attraction_links_container),
      children: [top_attractions && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: (_styles_MapsAttractionLists_module_css__WEBPACK_IMPORTED_MODULE_1___default().attractions_link),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
          href: top_attractions,
          target: "_blank",
          rel: "noreferrer",
          children: "\u21D2 Top Attractions"
        })
      }), main_attractions && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: (_styles_MapsAttractionLists_module_css__WEBPACK_IMPORTED_MODULE_1___default().attractions_link),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
          href: main_attractions,
          target: "_blank",
          rel: "noreferrer",
          children: "\u21D2 Main Attractions"
        })
      }), all_attractions && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: (_styles_MapsAttractionLists_module_css__WEBPACK_IMPORTED_MODULE_1___default().attractions_link),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
          href: all_attractions,
          target: "_blank",
          rel: "noreferrer",
          children: "\u21D2 All Attractions"
        })
      }), short_attractions && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: (_styles_MapsAttractionLists_module_css__WEBPACK_IMPORTED_MODULE_1___default().attractions_link),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
          href: short_attractions,
          target: "_blank",
          rel: "noreferrer",
          children: "\u21D2 Short Visit"
        })
      }), custom_attractions_1 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: (_styles_MapsAttractionLists_module_css__WEBPACK_IMPORTED_MODULE_1___default().attractions_link),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
          href: custom_attractions_1,
          target: "_blank",
          rel: "noreferrer",
          children: ["\u21D2 ", custom_attractions_1_text]
        })
      }), custom_attractions_2 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: (_styles_MapsAttractionLists_module_css__WEBPACK_IMPORTED_MODULE_1___default().attractions_link),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
          href: custom_attractions_2,
          target: "_blank",
          rel: "noreferrer",
          children: ["\u21D2 ", custom_attractions_2_text]
        })
      }), custom_attractions_3 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: (_styles_MapsAttractionLists_module_css__WEBPACK_IMPORTED_MODULE_1___default().attractions_link),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
          href: custom_attractions_3,
          target: "_blank",
          rel: "noreferrer",
          children: ["\u21D2 ", custom_attractions_3_text]
        })
      }), custom_attractions_4 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: (_styles_MapsAttractionLists_module_css__WEBPACK_IMPORTED_MODULE_1___default().attractions_link),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
          href: custom_attractions_4,
          target: "_blank",
          rel: "noreferrer",
          children: ["\u21D2 ", custom_attractions_4_text]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
      className: (_styles_MapsAttractionLists_module_css__WEBPACK_IMPORTED_MODULE_1___default().save_attractions_instructions),
      children: ["1. Click Link above while logged into Google account on your device.", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), ' ', "2. Click ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
        children: "Follow"
      }), ", and the attraction pins will be saved in your Google Maps."]
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (MapsAttractionLists);

/***/ }),

/***/ 2043:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const StickyPageNav = ({
  children
}) => {
  const {
    0: stickyOffset,
    1: setStickyOffset
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    0: isSticky,
    1: setIsSticky
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (window.scrollY > 0) {
      setStickyOffset(window.scrollY + ref.current.getBoundingClientRect().top);
    } else {
      setStickyOffset(ref.current.getBoundingClientRect().top);
    }
  }, [stickyOffset]); //eslint-disable-next-line

  const stickyPageNav = () => {
    let windowOffset = window.scrollY;

    if (ref.current) {
      if (windowOffset >= stickyOffset) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }
  };

  const stickyEffect = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    stickyPageNav();
  }, [stickyPageNav]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (false) {}

    return () => window.removeEventListener('scroll', stickyPageNav);
  }, //eslint-disable-next-line
  [stickyEffect]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
    className: isSticky ? 'sticky' : '',
    ref: ref,
    children: children
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (StickyPageNav);

/***/ }),

/***/ 2405:
/***/ (function(module) {

// Exports
module.exports = {
	"icon": "Carousel_icon__11QQ3",
	"dotsContainer": "Carousel_dotsContainer__1EgEg",
	"prev": "Carousel_prev__3TEwT",
	"next": "Carousel_next__DCjIA",
	"carouselWrapper": "Carousel_carouselWrapper__12uXx",
	"carousel-standard": "Carousel_carousel-standard__2w1h9",
	"carouselItems": "Carousel_carouselItems__3wXF_",
	"carouselItem": "Carousel_carouselItem__KK5G-",
	"activeSlide": "Carousel_activeSlide__1BFm1",
	"activeSlide2": "Carousel_activeSlide2__3xNcL",
	"activeSlide3": "Carousel_activeSlide3__1COJG",
	"lastSlide": "Carousel_lastSlide__mykiv",
	"nextSlide": "Carousel_nextSlide__2gqVu",
	"carousel-item-text": "Carousel_carousel-item-text__1nGE4",
	"carousel-item-title": "Carousel_carousel-item-title__11H5k",
	"carousel-item-credits": "Carousel_carousel-item-credits__3qmmA"
};


/***/ }),

/***/ 5139:
/***/ (function(module) {

// Exports
module.exports = {
	"attraction_lists": "MapsAttractionLists_attraction_lists__1mNIK",
	"destinations_save_attractions_header": "MapsAttractionLists_destinations_save_attractions_header__3ueFU",
	"save_attractions_header": "MapsAttractionLists_save_attractions_header__4SkCp",
	"attraction_links_container": "MapsAttractionLists_attraction_links_container__3j4yu",
	"block": "MapsAttractionLists_block__2A9Yn",
	"attractions_link": "MapsAttractionLists_attractions_link__1kdMF",
	"save_attractions_instructions": "MapsAttractionLists_save_attractions_instructions__-yb_-",
	"tab_align": "MapsAttractionLists_tab_align__1Q3Vb"
};


/***/ })

};
;