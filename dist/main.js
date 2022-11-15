/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/FredokaOne-Regular.ttf */ "./src/fonts/FredokaOne-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Roboto-Regular.ttf */ "./src/fonts/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/joshua-kantarges-wO4CyWnIzz4-unsplash.jpg */ "./src/img/joshua-kantarges-wO4CyWnIzz4-unsplash.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/alexander-startsev-ndNw_6QGR_c-unsplash.jpg */ "./src/img/alexander-startsev-ndNw_6QGR_c-unsplash.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'Monda';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n    font-family: 'Roboto';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n*, *::before, *::after{\n    box-sizing: border-box;\n}\n\nhtml, \nbody,\n#content{\n    height: 100%;\n    margin: 0;\n}\n\n:root{\n    --card-color:rgb(22, 21, 21, 0.9);\n    --top-height: 190px;\n    --card-radius: 5px;\n}\n\n\n.top-wrap{\n    position: sticky;\n    top: 0;\n    z-index: 1;\n    height: var(--top-height);\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-size: cover;\n    background-position: center;\n}\n\n.bg-image{\n    position: fixed;\n    left: 0;\n    right: 0;\n    min-height: 100%;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    background-size: cover;\n    background-position: center;\n    filter: blur(3px);\n    /**Get rid of border from blur**/\n    transform: scale(1.03);\n}\n\n.header,\n.tabs{\n    background-color: rgb(22, 21, 21, 0.7);\n}\n\n.header{\n    padding: 10px 0;\n    color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n    height: 150px;\n}\n\n.header > img{\n    height: 50px;\n    margin-left: 10px;\n}\n\n.h-title{\n    font-family: 'Monda', sans-serif;\n    font-size: 3rem;\n    margin: 0 60px 0 0 ;\n}\n\n.tabs{\n    display: flex;\n    justify-content: center;\n    padding-bottom: 10px;\n}\n\n.tabs div{\n    font-size: 1.2rem;\n    color: white;\n    display: flex;\n    align-items: center;\n    margin: 0 40px;\n    height: 30px;\n    transition-duration: .2s;\n}\n\n.tabs div:hover{\n    cursor: pointer;\n    padding-bottom: 7px;\n    text-decoration: underline;    \n    transition-duration: .2s;\n}\n\n.active-tab{\n    text-decoration: underline;\n    padding-bottom: 7px;\n}\n\n.tabs, \n.info{\n    font-family: 'Roboto', sans-serif;\n}\n\n.info{\n    font-size: 1.2rem;\n    position: absolute;\n    left: 0;\n    right: 0;\n    display: flex;\n    gap: 10px;\n    flex-direction: column;\n    align-items: center;\n    color: white;\n}   \n\n.testimonial,\n.hours, \n.location{\n    background-color: var(--card-color);\n    border-radius: var(--card-radius);\n    width: 500px;\n}\n\n.testimonial{ \n    padding: 20px;\n    margin-top: 20px;\n}\n\n.testimonial p:first-child{\n    font-style: italic;\n}\n\n.testimonial p:last-child{\n    font-weight: bold;\n}\n\n.hours{\n    display: flex;\n    flex-direction: column;\n}\n\n.hours p,\n.location > p:first-child{\n    padding: 10px 0;\n    margin: 0;\n    text-align: center;\n    font-weight: bold;\n    border: none;\n    border-bottom: 1px solid rgb(230, 230, 230, 0.4);\n}\n\nul{\n    list-style: none;\n    padding: 0 40px;\n    align-self: center;\n}\n\nli{\n    margin: 10px 0;\n}\n\n.location{\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 20px;\n    padding-bottom: 15px;\n}\n\n.location > p:nth-child(2),\n.location img{\n    align-self: center;\n}\n\n.location img{\n    width: 250px;\n}\n\n.menu{\n   display: flex;\n   flex-direction: column;\n   justify-content: space-around;\n   margin: 20px 0px;\n   gap: 40px;\n}\n \n.menu-item{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    min-height: 150px;\n    border-radius: var(--card-radius);\n    background-color: var(--card-color);\n    padding: 10px;\n    gap: 10px;\n}\n\n.item-info > p:first-child{\n    font-weight: bold;\n}\n\n.item-info > p:nth-child(3){\n    width: 250px; \n}\n\n/**So images can appear to have a gradient border**/\n.menu-img-wrap{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 1px;\n    background: linear-gradient(to right, yellow, red);\n}\n\n.menu-item img{\n    height: 150px;\n}\n\n.contact{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: calc(100vh - var(--top-height));\n}\n\n.contact-info{\n    background-color: var(--card-color);\n    border-radius: var(--card-radius);\n    font-size: 1.6rem;\n    padding: 20px;\n}\n\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,4CAA0C;AAC9C;;AAEA;IACI,qBAAqB;IACrB,4CAAsC;AAC1C;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;;;IAGI,YAAY;IACZ,SAAS;AACb;;AAEA;IACI,iCAAiC;IACjC,mBAAmB;IACnB,kBAAkB;AACtB;;;AAGA;IACI,gBAAgB;IAChB,MAAM;IACN,UAAU;IACV,yBAAyB;IACzB,yDAAwE;IACxE,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA;IACI,eAAe;IACf,OAAO;IACP,QAAQ;IACR,gBAAgB;IAChB,yDAA0E;IAC1E,sBAAsB;IACtB,2BAA2B;IAC3B,iBAAiB;IACjB,gCAAgC;IAChC,sBAAsB;AAC1B;;AAEA;;IAEI,sCAAsC;AAC1C;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,gCAAgC;IAChC,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,oBAAoB;AACxB;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,cAAc;IACd,YAAY;IACZ,wBAAwB;AAC5B;;AAEA;IACI,eAAe;IACf,mBAAmB;IACnB,0BAA0B;IAC1B,wBAAwB;AAC5B;;AAEA;IACI,0BAA0B;IAC1B,mBAAmB;AACvB;;AAEA;;IAEI,iCAAiC;AACrC;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,OAAO;IACP,QAAQ;IACR,aAAa;IACb,SAAS;IACT,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;;;IAGI,mCAAmC;IACnC,iCAAiC;IACjC,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;;IAEI,eAAe;IACf,SAAS;IACT,kBAAkB;IAClB,iBAAiB;IACjB,YAAY;IACZ,gDAAgD;AACpD;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,oBAAoB;AACxB;;AAEA;;IAEI,kBAAkB;AACtB;;AAEA;IACI,YAAY;AAChB;;AAEA;GACG,aAAa;GACb,sBAAsB;GACtB,6BAA6B;GAC7B,gBAAgB;GAChB,SAAS;AACZ;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,iBAAiB;IACjB,iCAAiC;IACjC,mCAAmC;IACnC,aAAa;IACb,SAAS;AACb;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,YAAY;AAChB;;AAEA,mDAAmD;AACnD;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,kDAAkD;AACtD;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,uCAAuC;AAC3C;;AAEA;IACI,mCAAmC;IACnC,iCAAiC;IACjC,iBAAiB;IACjB,aAAa;AACjB","sourcesContent":["@font-face {\n    font-family: 'Monda';\n    src: url('./fonts/FredokaOne-Regular.ttf');\n}\n\n@font-face {\n    font-family: 'Roboto';\n    src: url('./fonts/Roboto-Regular.ttf');\n}\n\n*, *::before, *::after{\n    box-sizing: border-box;\n}\n\nhtml, \nbody,\n#content{\n    height: 100%;\n    margin: 0;\n}\n\n:root{\n    --card-color:rgb(22, 21, 21, 0.9);\n    --top-height: 190px;\n    --card-radius: 5px;\n}\n\n\n.top-wrap{\n    position: sticky;\n    top: 0;\n    z-index: 1;\n    height: var(--top-height);\n    background-image: url('./img/joshua-kantarges-wO4CyWnIzz4-unsplash.jpg');\n    background-size: cover;\n    background-position: center;\n}\n\n.bg-image{\n    position: fixed;\n    left: 0;\n    right: 0;\n    min-height: 100%;\n    background-image: url('./img/alexander-startsev-ndNw_6QGR_c-unsplash.jpg');\n    background-size: cover;\n    background-position: center;\n    filter: blur(3px);\n    /**Get rid of border from blur**/\n    transform: scale(1.03);\n}\n\n.header,\n.tabs{\n    background-color: rgb(22, 21, 21, 0.7);\n}\n\n.header{\n    padding: 10px 0;\n    color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n    height: 150px;\n}\n\n.header > img{\n    height: 50px;\n    margin-left: 10px;\n}\n\n.h-title{\n    font-family: 'Monda', sans-serif;\n    font-size: 3rem;\n    margin: 0 60px 0 0 ;\n}\n\n.tabs{\n    display: flex;\n    justify-content: center;\n    padding-bottom: 10px;\n}\n\n.tabs div{\n    font-size: 1.2rem;\n    color: white;\n    display: flex;\n    align-items: center;\n    margin: 0 40px;\n    height: 30px;\n    transition-duration: .2s;\n}\n\n.tabs div:hover{\n    cursor: pointer;\n    padding-bottom: 7px;\n    text-decoration: underline;    \n    transition-duration: .2s;\n}\n\n.active-tab{\n    text-decoration: underline;\n    padding-bottom: 7px;\n}\n\n.tabs, \n.info{\n    font-family: 'Roboto', sans-serif;\n}\n\n.info{\n    font-size: 1.2rem;\n    position: absolute;\n    left: 0;\n    right: 0;\n    display: flex;\n    gap: 10px;\n    flex-direction: column;\n    align-items: center;\n    color: white;\n}   \n\n.testimonial,\n.hours, \n.location{\n    background-color: var(--card-color);\n    border-radius: var(--card-radius);\n    width: 500px;\n}\n\n.testimonial{ \n    padding: 20px;\n    margin-top: 20px;\n}\n\n.testimonial p:first-child{\n    font-style: italic;\n}\n\n.testimonial p:last-child{\n    font-weight: bold;\n}\n\n.hours{\n    display: flex;\n    flex-direction: column;\n}\n\n.hours p,\n.location > p:first-child{\n    padding: 10px 0;\n    margin: 0;\n    text-align: center;\n    font-weight: bold;\n    border: none;\n    border-bottom: 1px solid rgb(230, 230, 230, 0.4);\n}\n\nul{\n    list-style: none;\n    padding: 0 40px;\n    align-self: center;\n}\n\nli{\n    margin: 10px 0;\n}\n\n.location{\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 20px;\n    padding-bottom: 15px;\n}\n\n.location > p:nth-child(2),\n.location img{\n    align-self: center;\n}\n\n.location img{\n    width: 250px;\n}\n\n.menu{\n   display: flex;\n   flex-direction: column;\n   justify-content: space-around;\n   margin: 20px 0px;\n   gap: 40px;\n}\n \n.menu-item{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    min-height: 150px;\n    border-radius: var(--card-radius);\n    background-color: var(--card-color);\n    padding: 10px;\n    gap: 10px;\n}\n\n.item-info > p:first-child{\n    font-weight: bold;\n}\n\n.item-info > p:nth-child(3){\n    width: 250px; \n}\n\n/**So images can appear to have a gradient border**/\n.menu-img-wrap{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 1px;\n    background: linear-gradient(to right, yellow, red);\n}\n\n.menu-item img{\n    height: 150px;\n}\n\n.contact{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: calc(100vh - var(--top-height));\n}\n\n.contact-info{\n    background-color: var(--card-color);\n    border-radius: var(--card-radius);\n    font-size: 1.6rem;\n    padding: 20px;\n}\n\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/contact.js":
/*!***************************!*\
  !*** ./src/js/contact.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);

function loadPage(){
    const info = document.querySelector('.info');
    info.appendChild(loadContacts());
}

/**
 * Add contact info header, add image more styling
 * 
 */
function loadContacts(){
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');

    const contactHeader = document.createElement('p');
    contactHeader.innerText = "Contact Us!"
    contactInfo.appendChild(contactHeader);

    const phoneNumber = document.createElement('p');
    phoneNumber.innerText = "\uD83D\uDCDE 444-332-3345";
    contactInfo.appendChild(phoneNumber);

    const email = document.createElement('p');
    email.innerText = "\u2709\uFE0F mcdonaldswannabe@outlook.mail";
    contactInfo.appendChild(email);

    contact.appendChild(contactInfo); 

    return contact;
}

/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_deluxe_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/deluxe.jpg */ "./src/img/deluxe.jpg");
/* harmony import */ var _img_kids_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/kids.jpg */ "./src/img/kids.jpg");
/* harmony import */ var _img_family_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/family.jpg */ "./src/img/family.jpg");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadInfo);




function loadInfo(){
   const info = document.querySelector('.info');
   info.appendChild(loadItems());
}

/**
 * Add pictures to each menu item, add styling
 * 
 */
function loadItems(){
    let entrees = [{
                 name: 'Cheeseburger Deluxe Supreme Meal',
                 price: '$6.99',
                 description: 'One of the best meal deals we have to offer, served with fries and a drink of choice',
                 picture: _img_deluxe_jpg__WEBPACK_IMPORTED_MODULE_0__
                 }, 
                {
                 name: "Deluxe Kid's Meal",
                 price: '$4.99',
                 description: 'Our kids meal comes with our patented miniature burger small fries, drink, and a toy.',
                 picture: _img_kids_jpg__WEBPACK_IMPORTED_MODULE_1__
                },
                {
                 name: "Family Pack",
                 price: '$99.99',
                 description: 'Enough food to feed the whole family and then some. Comes with 12 of our signature burger with toppings of choice, 12 side of your choice and 12 of our world famous milkshakes.',
                picture: _img_family_jpg__WEBPACK_IMPORTED_MODULE_2__
                   },]
    
    const menu = document.createElement('div');
    menu.classList.add('menu');
    
    entrees.forEach((entree) => {
        let container = document.createElement('div');
        container.classList.add('menu-item');

        const itemInfo = document.createElement('div');
        itemInfo.classList.add('item-info');
        
        for (let field in entree){
            let itemField = document.createElement('p');

            if(field !== 'name' && field !== 'picture'){
                itemField.innerText = `${field.charAt(0).toUpperCase() + field.slice(1)}: ` + entree[field]; 
            } else if (field === 'name'){
                itemField.innerText = entree[field];
            } 
           
            itemInfo.appendChild(itemField);
        }

        container.appendChild(itemInfo);

        const itemImage = new Image();
        itemImage.src = entree.picture;

        const imgWrap = document.createElement('div');
        imgWrap.classList.add('menu-img-wrap')
        imgWrap.appendChild(itemImage);

        container.appendChild(imgWrap);

        menu.appendChild(container);
    });

    return menu;
}

/***/ }),

/***/ "./src/js/pageLoad.js":
/*!****************************!*\
  !*** ./src/js/pageLoad.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "reloadPage": () => (/* binding */ reloadPage)
/* harmony export */ });
/* harmony import */ var _img_burger_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/burger.png */ "./src/img/burger.png");
/* harmony import */ var _img_gobler_s_knobb_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/gobler-s-knobb.jpg */ "./src/img/gobler-s-knobb.jpg");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);


function loadPage(){
    const body = document.querySelector('body');
    
    const content = document.querySelector('#content');

    loadTabIcon();
    content.appendChild(loadTopWrap());
    content.appendChild(loadBackground());
    content.appendChild(loadInfo());


    body.appendChild(content);
}

function loadTabIcon(){
    const link = document.createElement('link');
    const head = document.querySelector('head');

    link.rel = 'icon';
    link.href = _img_burger_png__WEBPACK_IMPORTED_MODULE_0__;

    head.appendChild(link);
}

function reloadPage(){
    const info = document.querySelector('.info');
    
    info.replaceChildren();

    info.appendChild(loadTestimonial());
    info.appendChild(loadSchedule());
    info.appendChild(loadLocation());
}

function loadBackground(){
    const background = document.createElement('div');   
    background.classList.add('bg-image');

    return background;
}

function loadHeader(){
    const header = document.createElement('div');
    header.classList.add("header");
    
    const burgerIcon = new Image();
    burgerIcon.src = _img_burger_png__WEBPACK_IMPORTED_MODULE_0__;
    burgerIcon.alt = "burger-icon";
    header.appendChild(burgerIcon);

    const headerTitle = document.createElement('p');
    headerTitle.classList.add("h-title");
    headerTitle.innerText = "Burger Shop";
    header.appendChild(headerTitle);

    return header;
}

function loadTabs(){
    const tabs = document.createElement('div');
    tabs.classList.add("tabs");

    const homeTab = document.createElement('div');
    homeTab.appendChild(document.createElement('p')).innerText = "Home";
    homeTab.classList.add("home-tab");
    homeTab.classList.add("active-tab");
    tabs.appendChild(homeTab);
    
    const menuTab = document.createElement('div');
    menuTab.innerText = "Menu";
    menuTab.classList.add("menu-tab");
    tabs.appendChild(menuTab);
    
    const infoTab = document.createElement('div');
    infoTab.innerText = "Contact";
    infoTab.classList.add("info-tab");
    tabs.appendChild(infoTab);

    return tabs;
}

function loadTopWrap(){
    const topWrap = document.createElement('div');
    topWrap.classList.add('top-wrap');

    topWrap.appendChild(loadHeader());
    topWrap.appendChild(loadTabs());

    return topWrap;
}

function loadInfo(){
    const info = document.createElement('div');
    info.classList.add("info");

    info.appendChild(loadTestimonial());
    info.appendChild(loadSchedule());
    info.appendChild(loadLocation());
    
    return info;
}

function loadTestimonial(){
    const testimonial = document.createElement('div');
    const text = document.createElement('p');
    const quotee = document.createElement('p');

    testimonial.classList.add("testimonial");

    text.innerText = '"I can\'t believe burgers like this exits OMG! From the tender beef, fresh toppings and the world famous milkshakes. McDonald\'s just can\'t compete..."';
    quotee.innerText =  '- Ronald McDonald \uD83E\uDD21';

    testimonial.appendChild(text);
    testimonial.appendChild(quotee);

    return testimonial;
    
}

function loadSchedule(){
    const hours = document.createElement('div');
    hours.classList.add("hours");

    const hoursTitle = document.createElement('p');
    hoursTitle.innerText = "\uD83D\uDD52 Hours";
    hours.appendChild(hoursTitle);
    
    const hourList = document.createElement('ul');
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    for(let i = 0; i < 7; i++){
        hourList.appendChild(document.createElement('li')).innerText = `${days[i]}: 8AM - ${8-i}PM`
    };
    hours.appendChild(hourList);

    return hours;
}

function loadLocation(){
    const location = document.createElement('div');
    location.classList.add("location");

    location.appendChild(document.createElement('p'))
                        .innerText = "\uD83C\uDFE0 Location";

    
    location.appendChild(document.createElement('p'))
                        .innerText = "1234 Gobbler's Knob, Pennsylvania";

    const locationPhoto = new Image();
    locationPhoto.src = _img_gobler_s_knobb_jpg__WEBPACK_IMPORTED_MODULE_1__;
    locationPhoto.alt = "Picture of Gobblers' Knob"
    location.appendChild(locationPhoto);

    return location;
}

/***/ }),

/***/ "./src/fonts/FredokaOne-Regular.ttf":
/*!******************************************!*\
  !*** ./src/fonts/FredokaOne-Regular.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4aea26dd6637dfac0fac.ttf";

/***/ }),

/***/ "./src/fonts/Roboto-Regular.ttf":
/*!**************************************!*\
  !*** ./src/fonts/Roboto-Regular.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc2b5060f7accec5cf74.ttf";

/***/ }),

/***/ "./src/img/alexander-startsev-ndNw_6QGR_c-unsplash.jpg":
/*!*************************************************************!*\
  !*** ./src/img/alexander-startsev-ndNw_6QGR_c-unsplash.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5dbb1a1b357ce62d8927.jpg";

/***/ }),

/***/ "./src/img/burger.png":
/*!****************************!*\
  !*** ./src/img/burger.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f83971a0c4cdee7ebb4a.png";

/***/ }),

/***/ "./src/img/deluxe.jpg":
/*!****************************!*\
  !*** ./src/img/deluxe.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1ec4c5afdd79dd3cd635.jpg";

/***/ }),

/***/ "./src/img/family.jpg":
/*!****************************!*\
  !*** ./src/img/family.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "98c7abfa3210df153de5.jpg";

/***/ }),

/***/ "./src/img/gobler-s-knobb.jpg":
/*!************************************!*\
  !*** ./src/img/gobler-s-knobb.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9626d65d78cc493cc274.jpg";

/***/ }),

/***/ "./src/img/joshua-kantarges-wO4CyWnIzz4-unsplash.jpg":
/*!***********************************************************!*\
  !*** ./src/img/joshua-kantarges-wO4CyWnIzz4-unsplash.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0d8af8fc11ac21ec6475.jpg";

/***/ }),

/***/ "./src/img/kids.jpg":
/*!**************************!*\
  !*** ./src/img/kids.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9db4ecc6d155d7ba2e51.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");
/* harmony import */ var _pageLoad_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageLoad.js */ "./src/js/pageLoad.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/js/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/js/contact.js");





(0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
addTabListeners();

/**
 * Commit along the way
 * Include photo credit in footer
 */

function addTabListeners(){
    const info = document.querySelector(".info");
    const homeTab = document.querySelector(".home-tab");
    const menuTab = document.querySelector(".menu-tab");
    const infoTab = document.querySelector(".info-tab");

    homeTab.onclick = () => {
        (0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_1__.reloadPage)();
        activeTab(homeTab);
    };

    menuTab.onclick = () => {
        info.replaceChildren();
        (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
        activeTab(menuTab);
    }

    infoTab.onclick = () => {
        info.replaceChildren();
        (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
        activeTab(infoTab);
    }
}

function activeTab(currTab){
    const tabs = document.querySelectorAll("[class$=-tab]");

    tabs.forEach((tab) => {
        if(tab != currTab){
            tab.classList.remove("active-tab");
        } else {
            tab.classList.add("active-tab");
        }

        window.location.href = "#content"
    });
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ3VDO0FBQ2hCO0FBQ007O0FBRW5ELHdEQUFRO0FBQ1I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsd0RBQVU7QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSxvREFBUTtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLHVEQUFXO0FBQ25CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2pzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2pzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2pzL3BhZ2VMb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0ZyZWRva2FPbmUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vaW1nL2pvc2h1YS1rYW50YXJnZXMtd080Q3lXbkl6ejQtdW5zcGxhc2guanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9pbWcvYWxleGFuZGVyLXN0YXJ0c2V2LW5kTndfNlFHUl9jLXVuc3BsYXNoLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ01vbmRhJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcblxcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXJ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwsIFxcbmJvZHksXFxuI2NvbnRlbnR7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG46cm9vdHtcXG4gICAgLS1jYXJkLWNvbG9yOnJnYigyMiwgMjEsIDIxLCAwLjkpO1xcbiAgICAtLXRvcC1oZWlnaHQ6IDE5MHB4O1xcbiAgICAtLWNhcmQtcmFkaXVzOiA1cHg7XFxufVxcblxcblxcbi50b3Atd3JhcHtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBoZWlnaHQ6IHZhcigtLXRvcC1oZWlnaHQpO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcblxcbi5iZy1pbWFnZXtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBmaWx0ZXI6IGJsdXIoM3B4KTtcXG4gICAgLyoqR2V0IHJpZCBvZiBib3JkZXIgZnJvbSBibHVyKiovXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxufVxcblxcbi5oZWFkZXIsXFxuLnRhYnN7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMiwgMjEsIDIxLCAwLjcpO1xcbn1cXG5cXG4uaGVhZGVye1xcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG59XFxuXFxuLmhlYWRlciA+IGltZ3tcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLmgtdGl0bGV7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9uZGEnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIG1hcmdpbjogMCA2MHB4IDAgMCA7XFxufVxcblxcbi50YWJze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbi50YWJzIGRpdntcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwIDQwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjJzO1xcbn1cXG5cXG4udGFicyBkaXY6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZy1ib3R0b206IDdweDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7ICAgIFxcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMnM7XFxufVxcblxcbi5hY3RpdmUtdGFie1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgcGFkZGluZy1ib3R0b206IDdweDtcXG59XFxuXFxuLnRhYnMsIFxcbi5pbmZve1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5pbmZve1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufSAgIFxcblxcbi50ZXN0aW1vbmlhbCxcXG4uaG91cnMsIFxcbi5sb2NhdGlvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWNhcmQtcmFkaXVzKTtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbn1cXG5cXG4udGVzdGltb25pYWx7IFxcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4udGVzdGltb25pYWwgcDpmaXJzdC1jaGlsZHtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4udGVzdGltb25pYWwgcDpsYXN0LWNoaWxke1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmhvdXJze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uaG91cnMgcCxcXG4ubG9jYXRpb24gPiBwOmZpcnN0LWNoaWxke1xcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIzMCwgMjMwLCAyMzAsIDAuNCk7XFxufVxcblxcbnVse1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwIDQwcHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxubGl7XFxuICAgIG1hcmdpbjogMTBweCAwO1xcbn1cXG5cXG4ubG9jYXRpb257XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbn1cXG5cXG4ubG9jYXRpb24gPiBwOm50aC1jaGlsZCgyKSxcXG4ubG9jYXRpb24gaW1ne1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5sb2NhdGlvbiBpbWd7XFxuICAgIHdpZHRoOiAyNTBweDtcXG59XFxuXFxuLm1lbnV7XFxuICAgZGlzcGxheTogZmxleDtcXG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgIG1hcmdpbjogMjBweCAwcHg7XFxuICAgZ2FwOiA0MHB4O1xcbn1cXG4gXFxuLm1lbnUtaXRlbXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtaW4taGVpZ2h0OiAxNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tY2FyZC1yYWRpdXMpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWNvbG9yKTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uaXRlbS1pbmZvID4gcDpmaXJzdC1jaGlsZHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5pdGVtLWluZm8gPiBwOm50aC1jaGlsZCgzKXtcXG4gICAgd2lkdGg6IDI1MHB4OyBcXG59XFxuXFxuLyoqU28gaW1hZ2VzIGNhbiBhcHBlYXIgdG8gaGF2ZSBhIGdyYWRpZW50IGJvcmRlcioqL1xcbi5tZW51LWltZy13cmFwe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMXB4O1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHllbGxvdywgcmVkKTtcXG59XFxuXFxuLm1lbnUtaXRlbSBpbWd7XFxuICAgIGhlaWdodDogMTUwcHg7XFxufVxcblxcbi5jb250YWN0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0tdG9wLWhlaWdodCkpO1xcbn1cXG5cXG4uY29udGFjdC1pbmZve1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tY2FyZC1yYWRpdXMpO1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQiw0Q0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsNENBQXNDO0FBQzFDOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBOzs7SUFHSSxZQUFZO0lBQ1osU0FBUztBQUNiOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7OztBQUdBO0lBQ0ksZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLHlEQUF3RTtJQUN4RSxzQkFBc0I7SUFDdEIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksZUFBZTtJQUNmLE9BQU87SUFDUCxRQUFRO0lBQ1IsZ0JBQWdCO0lBQ2hCLHlEQUEwRTtJQUMxRSxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQixnQ0FBZ0M7SUFDaEMsc0JBQXNCO0FBQzFCOztBQUVBOztJQUVJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsWUFBWTtJQUNaLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsUUFBUTtJQUNSLGFBQWE7SUFDYixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBOzs7SUFHSSxtQ0FBbUM7SUFDbkMsaUNBQWlDO0lBQ2pDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsU0FBUztJQUNULGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGdEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0dBQ0csYUFBYTtHQUNiLHNCQUFzQjtHQUN0Qiw2QkFBNkI7R0FDN0IsZ0JBQWdCO0dBQ2hCLFNBQVM7QUFDWjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixpQ0FBaUM7SUFDakMsbUNBQW1DO0lBQ25DLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBLG1EQUFtRDtBQUNuRDtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixrREFBa0Q7QUFDdEQ7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLGlDQUFpQztJQUNqQyxpQkFBaUI7SUFDakIsYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNb25kYSc7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL0ZyZWRva2FPbmUtUmVndWxhci50dGYnKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvUm9ib3RvLVJlZ3VsYXIudHRmJyk7XFxufVxcblxcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXJ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwsIFxcbmJvZHksXFxuI2NvbnRlbnR7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG46cm9vdHtcXG4gICAgLS1jYXJkLWNvbG9yOnJnYigyMiwgMjEsIDIxLCAwLjkpO1xcbiAgICAtLXRvcC1oZWlnaHQ6IDE5MHB4O1xcbiAgICAtLWNhcmQtcmFkaXVzOiA1cHg7XFxufVxcblxcblxcbi50b3Atd3JhcHtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBoZWlnaHQ6IHZhcigtLXRvcC1oZWlnaHQpO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1nL2pvc2h1YS1rYW50YXJnZXMtd080Q3lXbkl6ejQtdW5zcGxhc2guanBnJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuXFxuLmJnLWltYWdle1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1nL2FsZXhhbmRlci1zdGFydHNldi1uZE53XzZRR1JfYy11bnNwbGFzaC5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBmaWx0ZXI6IGJsdXIoM3B4KTtcXG4gICAgLyoqR2V0IHJpZCBvZiBib3JkZXIgZnJvbSBibHVyKiovXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxufVxcblxcbi5oZWFkZXIsXFxuLnRhYnN7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMiwgMjEsIDIxLCAwLjcpO1xcbn1cXG5cXG4uaGVhZGVye1xcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG59XFxuXFxuLmhlYWRlciA+IGltZ3tcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLmgtdGl0bGV7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9uZGEnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIG1hcmdpbjogMCA2MHB4IDAgMCA7XFxufVxcblxcbi50YWJze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbi50YWJzIGRpdntcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwIDQwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjJzO1xcbn1cXG5cXG4udGFicyBkaXY6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZy1ib3R0b206IDdweDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7ICAgIFxcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMnM7XFxufVxcblxcbi5hY3RpdmUtdGFie1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgcGFkZGluZy1ib3R0b206IDdweDtcXG59XFxuXFxuLnRhYnMsIFxcbi5pbmZve1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5pbmZve1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufSAgIFxcblxcbi50ZXN0aW1vbmlhbCxcXG4uaG91cnMsIFxcbi5sb2NhdGlvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWNhcmQtcmFkaXVzKTtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbn1cXG5cXG4udGVzdGltb25pYWx7IFxcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4udGVzdGltb25pYWwgcDpmaXJzdC1jaGlsZHtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4udGVzdGltb25pYWwgcDpsYXN0LWNoaWxke1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmhvdXJze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uaG91cnMgcCxcXG4ubG9jYXRpb24gPiBwOmZpcnN0LWNoaWxke1xcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIzMCwgMjMwLCAyMzAsIDAuNCk7XFxufVxcblxcbnVse1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwIDQwcHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxubGl7XFxuICAgIG1hcmdpbjogMTBweCAwO1xcbn1cXG5cXG4ubG9jYXRpb257XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbn1cXG5cXG4ubG9jYXRpb24gPiBwOm50aC1jaGlsZCgyKSxcXG4ubG9jYXRpb24gaW1ne1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5sb2NhdGlvbiBpbWd7XFxuICAgIHdpZHRoOiAyNTBweDtcXG59XFxuXFxuLm1lbnV7XFxuICAgZGlzcGxheTogZmxleDtcXG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgIG1hcmdpbjogMjBweCAwcHg7XFxuICAgZ2FwOiA0MHB4O1xcbn1cXG4gXFxuLm1lbnUtaXRlbXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtaW4taGVpZ2h0OiAxNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tY2FyZC1yYWRpdXMpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWNvbG9yKTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uaXRlbS1pbmZvID4gcDpmaXJzdC1jaGlsZHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5pdGVtLWluZm8gPiBwOm50aC1jaGlsZCgzKXtcXG4gICAgd2lkdGg6IDI1MHB4OyBcXG59XFxuXFxuLyoqU28gaW1hZ2VzIGNhbiBhcHBlYXIgdG8gaGF2ZSBhIGdyYWRpZW50IGJvcmRlcioqL1xcbi5tZW51LWltZy13cmFwe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMXB4O1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHllbGxvdywgcmVkKTtcXG59XFxuXFxuLm1lbnUtaXRlbSBpbWd7XFxuICAgIGhlaWdodDogMTUwcHg7XFxufVxcblxcbi5jb250YWN0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0tdG9wLWhlaWdodCkpO1xcbn1cXG5cXG4uY29udGFjdC1pbmZve1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tY2FyZC1yYWRpdXMpO1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGxvYWRQYWdlO1xuXG5mdW5jdGlvbiBsb2FkUGFnZSgpe1xuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mbycpO1xuICAgIGluZm8uYXBwZW5kQ2hpbGQobG9hZENvbnRhY3RzKCkpO1xufVxuXG4vKipcbiAqIEFkZCBjb250YWN0IGluZm8gaGVhZGVyLCBhZGQgaW1hZ2UgbW9yZSBzdHlsaW5nXG4gKiBcbiAqL1xuZnVuY3Rpb24gbG9hZENvbnRhY3RzKCl7XG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xuXG4gICAgY29uc3QgY29udGFjdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0SW5mby5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWluZm8nKTtcblxuICAgIGNvbnN0IGNvbnRhY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29udGFjdEhlYWRlci5pbm5lclRleHQgPSBcIkNvbnRhY3QgVXMhXCJcbiAgICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChjb250YWN0SGVhZGVyKTtcblxuICAgIGNvbnN0IHBob25lTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBob25lTnVtYmVyLmlubmVyVGV4dCA9IFwiXFx1RDgzRFxcdURDREUgNDQ0LTMzMi0zMzQ1XCI7XG4gICAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQocGhvbmVOdW1iZXIpO1xuXG4gICAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZW1haWwuaW5uZXJUZXh0ID0gXCJcXHUyNzA5XFx1RkUwRiBtY2RvbmFsZHN3YW5uYWJlQG91dGxvb2subWFpbFwiO1xuICAgIGNvbnRhY3RJbmZvLmFwcGVuZENoaWxkKGVtYWlsKTtcblxuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdEluZm8pOyBcblxuICAgIHJldHVybiBjb250YWN0O1xufSIsImV4cG9ydCBkZWZhdWx0IGxvYWRJbmZvO1xuaW1wb3J0IERlbHV4ZU1lYWwgZnJvbSAnLi4vaW1nL2RlbHV4ZS5qcGcnXG5pbXBvcnQgS2lkc01lYWwgZnJvbSAnLi4vaW1nL2tpZHMuanBnJ1xuaW1wb3J0IEZhbWlseU1lYWwgZnJvbSAnLi4vaW1nL2ZhbWlseS5qcGcnXG5cbmZ1bmN0aW9uIGxvYWRJbmZvKCl7XG4gICBjb25zdCBpbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8nKTtcbiAgIGluZm8uYXBwZW5kQ2hpbGQobG9hZEl0ZW1zKCkpO1xufVxuXG4vKipcbiAqIEFkZCBwaWN0dXJlcyB0byBlYWNoIG1lbnUgaXRlbSwgYWRkIHN0eWxpbmdcbiAqIFxuICovXG5mdW5jdGlvbiBsb2FkSXRlbXMoKXtcbiAgICBsZXQgZW50cmVlcyA9IFt7XG4gICAgICAgICAgICAgICAgIG5hbWU6ICdDaGVlc2VidXJnZXIgRGVsdXhlIFN1cHJlbWUgTWVhbCcsXG4gICAgICAgICAgICAgICAgIHByaWNlOiAnJDYuOTknLFxuICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ09uZSBvZiB0aGUgYmVzdCBtZWFsIGRlYWxzIHdlIGhhdmUgdG8gb2ZmZXIsIHNlcnZlZCB3aXRoIGZyaWVzIGFuZCBhIGRyaW5rIG9mIGNob2ljZScsXG4gICAgICAgICAgICAgICAgIHBpY3R1cmU6IERlbHV4ZU1lYWxcbiAgICAgICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICBuYW1lOiBcIkRlbHV4ZSBLaWQncyBNZWFsXCIsXG4gICAgICAgICAgICAgICAgIHByaWNlOiAnJDQuOTknLFxuICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ091ciBraWRzIG1lYWwgY29tZXMgd2l0aCBvdXIgcGF0ZW50ZWQgbWluaWF0dXJlIGJ1cmdlciBzbWFsbCBmcmllcywgZHJpbmssIGFuZCBhIHRveS4nLFxuICAgICAgICAgICAgICAgICBwaWN0dXJlOiBLaWRzTWVhbFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICBuYW1lOiBcIkZhbWlseSBQYWNrXCIsXG4gICAgICAgICAgICAgICAgIHByaWNlOiAnJDk5Ljk5JyxcbiAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdFbm91Z2ggZm9vZCB0byBmZWVkIHRoZSB3aG9sZSBmYW1pbHkgYW5kIHRoZW4gc29tZS4gQ29tZXMgd2l0aCAxMiBvZiBvdXIgc2lnbmF0dXJlIGJ1cmdlciB3aXRoIHRvcHBpbmdzIG9mIGNob2ljZSwgMTIgc2lkZSBvZiB5b3VyIGNob2ljZSBhbmQgMTIgb2Ygb3VyIHdvcmxkIGZhbW91cyBtaWxrc2hha2VzLicsXG4gICAgICAgICAgICAgICAgcGljdHVyZTogRmFtaWx5TWVhbFxuICAgICAgICAgICAgICAgICAgIH0sXVxuICAgIFxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcbiAgICBcbiAgICBlbnRyZWVzLmZvckVhY2goKGVudHJlZSkgPT4ge1xuICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcblxuICAgICAgICBjb25zdCBpdGVtSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtSW5mby5jbGFzc0xpc3QuYWRkKCdpdGVtLWluZm8nKTtcbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGZpZWxkIGluIGVudHJlZSl7XG4gICAgICAgICAgICBsZXQgaXRlbUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgICAgICAgICBpZihmaWVsZCAhPT0gJ25hbWUnICYmIGZpZWxkICE9PSAncGljdHVyZScpe1xuICAgICAgICAgICAgICAgIGl0ZW1GaWVsZC5pbm5lclRleHQgPSBgJHtmaWVsZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGZpZWxkLnNsaWNlKDEpfTogYCArIGVudHJlZVtmaWVsZF07IFxuICAgICAgICAgICAgfSBlbHNlIGlmIChmaWVsZCA9PT0gJ25hbWUnKXtcbiAgICAgICAgICAgICAgICBpdGVtRmllbGQuaW5uZXJUZXh0ID0gZW50cmVlW2ZpZWxkXTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgIFxuICAgICAgICAgICAgaXRlbUluZm8uYXBwZW5kQ2hpbGQoaXRlbUZpZWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtSW5mbyk7XG5cbiAgICAgICAgY29uc3QgaXRlbUltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGl0ZW1JbWFnZS5zcmMgPSBlbnRyZWUucGljdHVyZTtcblxuICAgICAgICBjb25zdCBpbWdXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGltZ1dyYXAuY2xhc3NMaXN0LmFkZCgnbWVudS1pbWctd3JhcCcpXG4gICAgICAgIGltZ1dyYXAuYXBwZW5kQ2hpbGQoaXRlbUltYWdlKTtcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nV3JhcCk7XG5cbiAgICAgICAgbWVudS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1lbnU7XG59IiwiaW1wb3J0IEljb24gZnJvbSBcIi4uL2ltZy9idXJnZXIucG5nXCJcbmltcG9ydCBQaG90byBmcm9tIFwiLi4vaW1nL2dvYmxlci1zLWtub2JiLmpwZ1wiXG5leHBvcnQgZGVmYXVsdCBsb2FkUGFnZTtcbmV4cG9ydCB7cmVsb2FkUGFnZX07XG5cbmZ1bmN0aW9uIGxvYWRQYWdlKCl7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICAgIGxvYWRUYWJJY29uKCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChsb2FkVG9wV3JhcCgpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGxvYWRCYWNrZ3JvdW5kKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobG9hZEluZm8oKSk7XG5cblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG59XG5cbmZ1bmN0aW9uIGxvYWRUYWJJY29uKCl7XG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZCcpO1xuXG4gICAgbGluay5yZWwgPSAnaWNvbic7XG4gICAgbGluay5ocmVmID0gSWNvbjtcblxuICAgIGhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG59XG5cbmZ1bmN0aW9uIHJlbG9hZFBhZ2UoKXtcbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8nKTtcbiAgICBcbiAgICBpbmZvLnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gICAgaW5mby5hcHBlbmRDaGlsZChsb2FkVGVzdGltb25pYWwoKSk7XG4gICAgaW5mby5hcHBlbmRDaGlsZChsb2FkU2NoZWR1bGUoKSk7XG4gICAgaW5mby5hcHBlbmRDaGlsZChsb2FkTG9jYXRpb24oKSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRCYWNrZ3JvdW5kKCl7XG4gICAgY29uc3QgYmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAgIFxuICAgIGJhY2tncm91bmQuY2xhc3NMaXN0LmFkZCgnYmctaW1hZ2UnKTtcblxuICAgIHJldHVybiBiYWNrZ3JvdW5kO1xufVxuXG5mdW5jdGlvbiBsb2FkSGVhZGVyKCl7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG4gICAgXG4gICAgY29uc3QgYnVyZ2VySWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGJ1cmdlckljb24uc3JjID0gSWNvbjtcbiAgICBidXJnZXJJY29uLmFsdCA9IFwiYnVyZ2VyLWljb25cIjtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoYnVyZ2VySWNvbik7XG5cbiAgICBjb25zdCBoZWFkZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBoZWFkZXJUaXRsZS5jbGFzc0xpc3QuYWRkKFwiaC10aXRsZVwiKTtcbiAgICBoZWFkZXJUaXRsZS5pbm5lclRleHQgPSBcIkJ1cmdlciBTaG9wXCI7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRpdGxlKTtcblxuICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGxvYWRUYWJzKCl7XG4gICAgY29uc3QgdGFicyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhYnMuY2xhc3NMaXN0LmFkZChcInRhYnNcIik7XG5cbiAgICBjb25zdCBob21lVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZVRhYi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykpLmlubmVyVGV4dCA9IFwiSG9tZVwiO1xuICAgIGhvbWVUYWIuY2xhc3NMaXN0LmFkZChcImhvbWUtdGFiXCIpO1xuICAgIGhvbWVUYWIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS10YWJcIik7XG4gICAgdGFicy5hcHBlbmRDaGlsZChob21lVGFiKTtcbiAgICBcbiAgICBjb25zdCBtZW51VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudVRhYi5pbm5lclRleHQgPSBcIk1lbnVcIjtcbiAgICBtZW51VGFiLmNsYXNzTGlzdC5hZGQoXCJtZW51LXRhYlwiKTtcbiAgICB0YWJzLmFwcGVuZENoaWxkKG1lbnVUYWIpO1xuICAgIFxuICAgIGNvbnN0IGluZm9UYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvVGFiLmlubmVyVGV4dCA9IFwiQ29udGFjdFwiO1xuICAgIGluZm9UYWIuY2xhc3NMaXN0LmFkZChcImluZm8tdGFiXCIpO1xuICAgIHRhYnMuYXBwZW5kQ2hpbGQoaW5mb1RhYik7XG5cbiAgICByZXR1cm4gdGFicztcbn1cblxuZnVuY3Rpb24gbG9hZFRvcFdyYXAoKXtcbiAgICBjb25zdCB0b3BXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9wV3JhcC5jbGFzc0xpc3QuYWRkKCd0b3Atd3JhcCcpO1xuXG4gICAgdG9wV3JhcC5hcHBlbmRDaGlsZChsb2FkSGVhZGVyKCkpO1xuICAgIHRvcFdyYXAuYXBwZW5kQ2hpbGQobG9hZFRhYnMoKSk7XG5cbiAgICByZXR1cm4gdG9wV3JhcDtcbn1cblxuZnVuY3Rpb24gbG9hZEluZm8oKXtcbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5mby5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcblxuICAgIGluZm8uYXBwZW5kQ2hpbGQobG9hZFRlc3RpbW9uaWFsKCkpO1xuICAgIGluZm8uYXBwZW5kQ2hpbGQobG9hZFNjaGVkdWxlKCkpO1xuICAgIGluZm8uYXBwZW5kQ2hpbGQobG9hZExvY2F0aW9uKCkpO1xuICAgIFxuICAgIHJldHVybiBpbmZvO1xufVxuXG5mdW5jdGlvbiBsb2FkVGVzdGltb25pYWwoKXtcbiAgICBjb25zdCB0ZXN0aW1vbmlhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcXVvdGVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgdGVzdGltb25pYWwuY2xhc3NMaXN0LmFkZChcInRlc3RpbW9uaWFsXCIpO1xuXG4gICAgdGV4dC5pbm5lclRleHQgPSAnXCJJIGNhblxcJ3QgYmVsaWV2ZSBidXJnZXJzIGxpa2UgdGhpcyBleGl0cyBPTUchIEZyb20gdGhlIHRlbmRlciBiZWVmLCBmcmVzaCB0b3BwaW5ncyBhbmQgdGhlIHdvcmxkIGZhbW91cyBtaWxrc2hha2VzLiBNY0RvbmFsZFxcJ3MganVzdCBjYW5cXCd0IGNvbXBldGUuLi5cIic7XG4gICAgcXVvdGVlLmlubmVyVGV4dCA9ICAnLSBSb25hbGQgTWNEb25hbGQgXFx1RDgzRVxcdUREMjEnO1xuXG4gICAgdGVzdGltb25pYWwuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgdGVzdGltb25pYWwuYXBwZW5kQ2hpbGQocXVvdGVlKTtcblxuICAgIHJldHVybiB0ZXN0aW1vbmlhbDtcbiAgICBcbn1cblxuZnVuY3Rpb24gbG9hZFNjaGVkdWxlKCl7XG4gICAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob3Vycy5jbGFzc0xpc3QuYWRkKFwiaG91cnNcIik7XG5cbiAgICBjb25zdCBob3Vyc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGhvdXJzVGl0bGUuaW5uZXJUZXh0ID0gXCJcXHVEODNEXFx1REQ1MiBIb3Vyc1wiO1xuICAgIGhvdXJzLmFwcGVuZENoaWxkKGhvdXJzVGl0bGUpO1xuICAgIFxuICAgIGNvbnN0IGhvdXJMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBsZXQgZGF5cyA9IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgNzsgaSsrKXtcbiAgICAgICAgaG91ckxpc3QuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKSkuaW5uZXJUZXh0ID0gYCR7ZGF5c1tpXX06IDhBTSAtICR7OC1pfVBNYFxuICAgIH07XG4gICAgaG91cnMuYXBwZW5kQ2hpbGQoaG91ckxpc3QpO1xuXG4gICAgcmV0dXJuIGhvdXJzO1xufVxuXG5mdW5jdGlvbiBsb2FkTG9jYXRpb24oKXtcbiAgICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvY2F0aW9uLmNsYXNzTGlzdC5hZGQoXCJsb2NhdGlvblwiKTtcblxuICAgIGxvY2F0aW9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pbm5lclRleHQgPSBcIlxcdUQ4M0NcXHVERkUwIExvY2F0aW9uXCI7XG5cbiAgICBcbiAgICBsb2NhdGlvbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykpXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5uZXJUZXh0ID0gXCIxMjM0IEdvYmJsZXIncyBLbm9iLCBQZW5uc3lsdmFuaWFcIjtcblxuICAgIGNvbnN0IGxvY2F0aW9uUGhvdG8gPSBuZXcgSW1hZ2UoKTtcbiAgICBsb2NhdGlvblBob3RvLnNyYyA9IFBob3RvO1xuICAgIGxvY2F0aW9uUGhvdG8uYWx0ID0gXCJQaWN0dXJlIG9mIEdvYmJsZXJzJyBLbm9iXCJcbiAgICBsb2NhdGlvbi5hcHBlbmRDaGlsZChsb2NhdGlvblBob3RvKTtcblxuICAgIHJldHVybiBsb2NhdGlvbjtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi4vc3R5bGUuY3NzJztcbmltcG9ydCB7ZGVmYXVsdCBhcyBob21lUGFnZSwgcmVsb2FkUGFnZX0gZnJvbSAnLi9wYWdlTG9hZC5qcydcbmltcG9ydCB7ZGVmYXVsdCBhcyBtZW51UGFnZX0gZnJvbSAnLi9tZW51LmpzJ1xuaW1wb3J0IHtkZWZhdWx0IGFzIGNvbnRhY3RQYWdlfSBmcm9tICcuL2NvbnRhY3QuanMnXG5cbmhvbWVQYWdlKCk7XG5hZGRUYWJMaXN0ZW5lcnMoKTtcblxuLyoqXG4gKiBDb21taXQgYWxvbmcgdGhlIHdheVxuICogSW5jbHVkZSBwaG90byBjcmVkaXQgaW4gZm9vdGVyXG4gKi9cblxuZnVuY3Rpb24gYWRkVGFiTGlzdGVuZXJzKCl7XG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5mb1wiKTtcbiAgICBjb25zdCBob21lVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lLXRhYlwiKTtcbiAgICBjb25zdCBtZW51VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LXRhYlwiKTtcbiAgICBjb25zdCBpbmZvVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZvLXRhYlwiKTtcblxuICAgIGhvbWVUYWIub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgcmVsb2FkUGFnZSgpO1xuICAgICAgICBhY3RpdmVUYWIoaG9tZVRhYik7XG4gICAgfTtcblxuICAgIG1lbnVUYWIub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgaW5mby5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICAgICAgbWVudVBhZ2UoKTtcbiAgICAgICAgYWN0aXZlVGFiKG1lbnVUYWIpO1xuICAgIH1cblxuICAgIGluZm9UYWIub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgaW5mby5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICAgICAgY29udGFjdFBhZ2UoKTtcbiAgICAgICAgYWN0aXZlVGFiKGluZm9UYWIpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gYWN0aXZlVGFiKGN1cnJUYWIpe1xuICAgIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2NsYXNzJD0tdGFiXVwiKTtcblxuICAgIHRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgICAgIGlmKHRhYiAhPSBjdXJyVGFiKXtcbiAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLXRhYlwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXRhYlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIjY29udGVudFwiXG4gICAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=