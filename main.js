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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'Monda';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n    font-family: 'Roboto';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n*, *::before, *::after{\n    box-sizing: border-box;\n}\n\nhtml, \nbody,\n#content{\n    height: 100%;\n    margin: 0;\n}\n\n#content{\n    position: relative;\n}\n\n.top-wrap{\n    position: sticky;\n    top: 0;\n    z-index: 1;\n    height: 190px;\n    width: 100%;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-size: cover;\n    background-position: center;\n}\n\n.bg-image{\n    position: fixed;\n    left: 0;\n    right: 0;\n    min-height: 100%;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    background-size: cover;\n    background-position: center;\n    filter: blur(3px);\n    /**Get rid of border from blur**/\n    transform: scale(1.03);\n}\n\n.header,\n.tabs{\n    background-color: rgb(22, 21, 21, 0.7);\n}\n\n.header{\n    padding: 10px 0;\n    color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n    height: 150px;\n}\n\n.header > img{\n    height: 50px;\n    margin-left: 10px;\n}\n\n.h-title{\n    font-family: 'Monda', sans-serif;\n    font-size: 3rem;\n    margin: 0 60px 0 0 ;\n}\n\n.tabs{\n    display: flex;\n    justify-content: center;\n    padding-bottom: 10px;\n}\n\n.tabs div{\n    font-size: 1.2rem;\n    color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 0 40px;\n    height: 30px;\n    width: fit-content;\n    border-bottom: none;\n    border-radius: 3px;\n    transition-duration: .2s;\n}\n\n.tabs div:hover{\n    cursor: pointer;\n    padding-bottom: 7px;\n    text-decoration: underline;    \n    transition-duration: .2s;\n}\n\n.active-tab{\n    text-decoration: underline;\n    padding-bottom: 7px;\n}\n\n.tabs, \n.info{\n    font-family: 'Roboto', sans-serif;\n}\n\n.info{\n    position: absolute;\n    left: 0;\n    right: 0;\n    display: flex;\n    gap: 10px;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    color: white;\n}   \n\n.testimonial,\n.hours, \n.location{\n    font-size: 1.2rem;\n    background-color: rgb(22, 21, 21, 0.9);\n    border-radius: 5px;\n    width: 500px;\n}\n\n.testimonial{ \n    padding: 20px;\n    margin-top: 20px;\n}\n\n.testimonial p:first-child{\n    font-style: italic;\n}\n\n.testimonial p:last-child{\n    font-weight: bold;\n}\n\n.hours{\n    display: flex;\n    flex-direction: column;\n}\n\n.hours p,\n.location > p:first-child{\n    padding: 10px 0;\n    margin: 0;\n    text-align: center;\n    font-weight: bold;\n    width: fit;\n    border: none;\n    border-bottom: 1px solid rgb(230, 230, 230, 0.4);\n}\n\nul{\n    list-style: none;\n    padding: 0 40px;\n    align-self: center;\n}\n\nli{\n    margin: 10px 0;\n}\n\n.location{\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 20px;\n    padding-bottom: 15px;\n}\n\n.location > p:nth-child(2),\n.location img{\n    align-self: center;\n}\n\n.location img{\n    width: 200px;\n}\n\n.menu{\n   display: flex;\n   flex-direction: column;\n   justify-content: space-around;\n   margin: 20px 0px;\n   gap: 40px;\n}\n \n.menu-item{\n    font-size: 1.2rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    min-height: 150px;\n    border-radius: 5px;\n    background-color: rgb(22, 21, 21, 0.9);\n    border-radius: 5px;\n    padding: 10px;\n    gap: 10px;\n}\n\n.item-info > p:first-child{\n    font-weight: bold;\n}\n\n.item-info > p:nth-child(3){\n    width: 250px; \n}\n\n.menu-img-wrap{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 1px;\n    background: linear-gradient(to right, yellow, red);\n}\n\n.menu-item img{\n    height: 150px;\n}\n\n.contact{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: calc(100vh - 190px);\n}\n\n.contact-info{\n    background-color: rgb(22, 21, 21, 0.9);\n    border-radius: 5px;\n    font-size: 1.6rem;\n    padding: 20px;\n}\n\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,4CAA0C;AAC9C;;AAEA;IACI,qBAAqB;IACrB,4CAAsC;AAC1C;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;;;IAGI,YAAY;IACZ,SAAS;AACb;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,MAAM;IACN,UAAU;IACV,aAAa;IACb,WAAW;IACX,yDAAwE;IACxE,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA;IACI,eAAe;IACf,OAAO;IACP,QAAQ;IACR,gBAAgB;IAChB,yDAA0E;IAC1E,sBAAsB;IACtB,2BAA2B;IAC3B,iBAAiB;IACjB,gCAAgC;IAChC,sBAAsB;AAC1B;;AAEA;;IAEI,sCAAsC;AAC1C;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,gCAAgC;IAChC,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,oBAAoB;AACxB;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,cAAc;IACd,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;IAClB,wBAAwB;AAC5B;;AAEA;IACI,eAAe;IACf,mBAAmB;IACnB,0BAA0B;IAC1B,wBAAwB;AAC5B;;AAEA;IACI,0BAA0B;IAC1B,mBAAmB;AACvB;;AAEA;;IAEI,iCAAiC;AACrC;;AAEA;IACI,kBAAkB;IAClB,OAAO;IACP,QAAQ;IACR,aAAa;IACb,SAAS;IACT,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;IACnB,YAAY;AAChB;;AAEA;;;IAGI,iBAAiB;IACjB,sCAAsC;IACtC,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;;IAEI,eAAe;IACf,SAAS;IACT,kBAAkB;IAClB,iBAAiB;IACjB,UAAU;IACV,YAAY;IACZ,gDAAgD;AACpD;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,oBAAoB;AACxB;;AAEA;;IAEI,kBAAkB;AACtB;;AAEA;IACI,YAAY;AAChB;;AAEA;GACG,aAAa;GACb,sBAAsB;GACtB,6BAA6B;GAC7B,gBAAgB;GAChB,SAAS;AACZ;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;IAClB,sCAAsC;IACtC,kBAAkB;IAClB,aAAa;IACb,SAAS;AACb;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,kDAAkD;AACtD;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,2BAA2B;AAC/B;;AAEA;IACI,sCAAsC;IACtC,kBAAkB;IAClB,iBAAiB;IACjB,aAAa;AACjB","sourcesContent":["@font-face {\n    font-family: 'Monda';\n    src: url('./fonts/FredokaOne-Regular.ttf');\n}\n\n@font-face {\n    font-family: 'Roboto';\n    src: url('./fonts/Roboto-Regular.ttf');\n}\n\n*, *::before, *::after{\n    box-sizing: border-box;\n}\n\nhtml, \nbody,\n#content{\n    height: 100%;\n    margin: 0;\n}\n\n#content{\n    position: relative;\n}\n\n.top-wrap{\n    position: sticky;\n    top: 0;\n    z-index: 1;\n    height: 190px;\n    width: 100%;\n    background-image: url('./img/joshua-kantarges-wO4CyWnIzz4-unsplash.jpg');\n    background-size: cover;\n    background-position: center;\n}\n\n.bg-image{\n    position: fixed;\n    left: 0;\n    right: 0;\n    min-height: 100%;\n    background-image: url('./img/alexander-startsev-ndNw_6QGR_c-unsplash.jpg');\n    background-size: cover;\n    background-position: center;\n    filter: blur(3px);\n    /**Get rid of border from blur**/\n    transform: scale(1.03);\n}\n\n.header,\n.tabs{\n    background-color: rgb(22, 21, 21, 0.7);\n}\n\n.header{\n    padding: 10px 0;\n    color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n    height: 150px;\n}\n\n.header > img{\n    height: 50px;\n    margin-left: 10px;\n}\n\n.h-title{\n    font-family: 'Monda', sans-serif;\n    font-size: 3rem;\n    margin: 0 60px 0 0 ;\n}\n\n.tabs{\n    display: flex;\n    justify-content: center;\n    padding-bottom: 10px;\n}\n\n.tabs div{\n    font-size: 1.2rem;\n    color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 0 40px;\n    height: 30px;\n    width: fit-content;\n    border-bottom: none;\n    border-radius: 3px;\n    transition-duration: .2s;\n}\n\n.tabs div:hover{\n    cursor: pointer;\n    padding-bottom: 7px;\n    text-decoration: underline;    \n    transition-duration: .2s;\n}\n\n.active-tab{\n    text-decoration: underline;\n    padding-bottom: 7px;\n}\n\n.tabs, \n.info{\n    font-family: 'Roboto', sans-serif;\n}\n\n.info{\n    position: absolute;\n    left: 0;\n    right: 0;\n    display: flex;\n    gap: 10px;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    color: white;\n}   \n\n.testimonial,\n.hours, \n.location{\n    font-size: 1.2rem;\n    background-color: rgb(22, 21, 21, 0.9);\n    border-radius: 5px;\n    width: 500px;\n}\n\n.testimonial{ \n    padding: 20px;\n    margin-top: 20px;\n}\n\n.testimonial p:first-child{\n    font-style: italic;\n}\n\n.testimonial p:last-child{\n    font-weight: bold;\n}\n\n.hours{\n    display: flex;\n    flex-direction: column;\n}\n\n.hours p,\n.location > p:first-child{\n    padding: 10px 0;\n    margin: 0;\n    text-align: center;\n    font-weight: bold;\n    width: fit;\n    border: none;\n    border-bottom: 1px solid rgb(230, 230, 230, 0.4);\n}\n\nul{\n    list-style: none;\n    padding: 0 40px;\n    align-self: center;\n}\n\nli{\n    margin: 10px 0;\n}\n\n.location{\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 20px;\n    padding-bottom: 15px;\n}\n\n.location > p:nth-child(2),\n.location img{\n    align-self: center;\n}\n\n.location img{\n    width: 200px;\n}\n\n.menu{\n   display: flex;\n   flex-direction: column;\n   justify-content: space-around;\n   margin: 20px 0px;\n   gap: 40px;\n}\n \n.menu-item{\n    font-size: 1.2rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    min-height: 150px;\n    border-radius: 5px;\n    background-color: rgb(22, 21, 21, 0.9);\n    border-radius: 5px;\n    padding: 10px;\n    gap: 10px;\n}\n\n.item-info > p:first-child{\n    font-weight: bold;\n}\n\n.item-info > p:nth-child(3){\n    width: 250px; \n}\n\n.menu-img-wrap{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 1px;\n    background: linear-gradient(to right, yellow, red);\n}\n\n.menu-item img{\n    height: 150px;\n}\n\n.contact{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: calc(100vh - 190px);\n}\n\n.contact-info{\n    background-color: rgb(22, 21, 21, 0.9);\n    border-radius: 5px;\n    font-size: 1.6rem;\n    padding: 20px;\n}\n\n\n\n"],"sourceRoot":""}]);
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

    text.innerText = 'I can believe burgers like this exits OMG! From the tender beef, fresh toppings and the world famous milkshakes. McDonalds just cannot compete...';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUN1QztBQUNoQjtBQUNNOztBQUVuRCx3REFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLHdEQUFVO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsb0RBQVE7QUFDaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSx1REFBVztBQUNuQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTCIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9qcy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9qcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9qcy9wYWdlTG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9GcmVkb2thT25lLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Sb2JvdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltZy9qb3NodWEta2FudGFyZ2VzLXdPNEN5V25Jeno0LXVuc3BsYXNoLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vaW1nL2FsZXhhbmRlci1zdGFydHNldi1uZE53XzZRR1JfYy11bnNwbGFzaC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNb25kYSc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVye1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLCBcXG5ib2R5LFxcbiNjb250ZW50e1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuI2NvbnRlbnR7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRvcC13cmFwe1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDA7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGhlaWdodDogMTkwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcblxcbi5iZy1pbWFnZXtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBmaWx0ZXI6IGJsdXIoM3B4KTtcXG4gICAgLyoqR2V0IHJpZCBvZiBib3JkZXIgZnJvbSBibHVyKiovXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxufVxcblxcbi5oZWFkZXIsXFxuLnRhYnN7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMiwgMjEsIDIxLCAwLjcpO1xcbn1cXG5cXG4uaGVhZGVye1xcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG59XFxuXFxuLmhlYWRlciA+IGltZ3tcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLmgtdGl0bGV7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9uZGEnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIG1hcmdpbjogMCA2MHB4IDAgMCA7XFxufVxcblxcbi50YWJze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbi50YWJzIGRpdntcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMCA0MHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMnM7XFxufVxcblxcbi50YWJzIGRpdjpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgICAgXFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4ycztcXG59XFxuXFxuLmFjdGl2ZS10YWJ7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xcbn1cXG5cXG4udGFicywgXFxuLmluZm97XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmluZm97XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59ICAgXFxuXFxuLnRlc3RpbW9uaWFsLFxcbi5ob3VycywgXFxuLmxvY2F0aW9ue1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyLCAyMSwgMjEsIDAuOSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbn1cXG5cXG4udGVzdGltb25pYWx7IFxcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4udGVzdGltb25pYWwgcDpmaXJzdC1jaGlsZHtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4udGVzdGltb25pYWwgcDpsYXN0LWNoaWxke1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmhvdXJze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uaG91cnMgcCxcXG4ubG9jYXRpb24gPiBwOmZpcnN0LWNoaWxke1xcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgd2lkdGg6IGZpdDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIzMCwgMjMwLCAyMzAsIDAuNCk7XFxufVxcblxcbnVse1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwIDQwcHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxubGl7XFxuICAgIG1hcmdpbjogMTBweCAwO1xcbn1cXG5cXG4ubG9jYXRpb257XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbn1cXG5cXG4ubG9jYXRpb24gPiBwOm50aC1jaGlsZCgyKSxcXG4ubG9jYXRpb24gaW1ne1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5sb2NhdGlvbiBpbWd7XFxuICAgIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLm1lbnV7XFxuICAgZGlzcGxheTogZmxleDtcXG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgIG1hcmdpbjogMjBweCAwcHg7XFxuICAgZ2FwOiA0MHB4O1xcbn1cXG4gXFxuLm1lbnUtaXRlbXtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWluLWhlaWdodDogMTUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyLCAyMSwgMjEsIDAuOSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uaXRlbS1pbmZvID4gcDpmaXJzdC1jaGlsZHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5pdGVtLWluZm8gPiBwOm50aC1jaGlsZCgzKXtcXG4gICAgd2lkdGg6IDI1MHB4OyBcXG59XFxuXFxuLm1lbnUtaW1nLXdyYXB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcHg7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgeWVsbG93LCByZWQpO1xcbn1cXG5cXG4ubWVudS1pdGVtIGltZ3tcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG59XFxuXFxuLmNvbnRhY3R7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxOTBweCk7XFxufVxcblxcbi5jb250YWN0LWluZm97XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMiwgMjEsIDIxLCAwLjkpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLDRDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiw0Q0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxzQkFBc0I7QUFD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QWlCO0lBQ2pCLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9uZGEnO1xcbiAgICBzcmM6IHVybCgnLi9mb250cy9GcmVkb2thT25lLVJlZ3VsYXIudHRmJyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0ZicpO1xcbn1cXG5cXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVye1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLCBcXG5ib2R5LFxcbiNjb250ZW50e1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuI2NvbnRlbnR7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRvcC13cmFwe1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDA7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGhlaWdodDogMTkwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1nL2pvc2h1YS1rYW50YXJnZXMtd080Q3lXbkl6ejQtdW5zcGxhc2guanBnJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuXFxuLmJnLWltYWdle1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1nL2FsZXhhbmRlci1zdGFydHNldi1uZE53XzZRR1JfYy11bnNwbGFzaC5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBmaWx0ZXI6IGJsdXIoM3B4KTtcXG4gICAgLyoqR2V0IHJpZCBvZiBib3JkZXIgZnJvbSBibHVyKiovXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxufVxcblxcbi5oZWFkZXIsXFxuLnRhYnN7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMiwgMjEsIDIxLCAwLjcpO1xcbn1cXG5cXG4uaGVhZGVye1xcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG59XFxuXFxuLmhlYWRlciA+IGltZ3tcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLmgtdGl0bGV7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9uZGEnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIG1hcmdpbjogMCA2MHB4IDAgMCA7XFxufVxcblxcbi50YWJze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbi50YWJzIGRpdntcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMCA0MHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMnM7XFxufVxcblxcbi50YWJzIGRpdjpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgICAgXFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4ycztcXG59XFxuXFxuLmFjdGl2ZS10YWJ7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xcbn1cXG5cXG4udGFicywgXFxuLmluZm97XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmluZm97XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59ICAgXFxuXFxuLnRlc3RpbW9uaWFsLFxcbi5ob3VycywgXFxuLmxvY2F0aW9ue1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyLCAyMSwgMjEsIDAuOSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbn1cXG5cXG4udGVzdGltb25pYWx7IFxcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4udGVzdGltb25pYWwgcDpmaXJzdC1jaGlsZHtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4udGVzdGltb25pYWwgcDpsYXN0LWNoaWxke1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmhvdXJze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uaG91cnMgcCxcXG4ubG9jYXRpb24gPiBwOmZpcnN0LWNoaWxke1xcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgd2lkdGg6IGZpdDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIzMCwgMjMwLCAyMzAsIDAuNCk7XFxufVxcblxcbnVse1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwIDQwcHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxubGl7XFxuICAgIG1hcmdpbjogMTBweCAwO1xcbn1cXG5cXG4ubG9jYXRpb257XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbn1cXG5cXG4ubG9jYXRpb24gPiBwOm50aC1jaGlsZCgyKSxcXG4ubG9jYXRpb24gaW1ne1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5sb2NhdGlvbiBpbWd7XFxuICAgIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLm1lbnV7XFxuICAgZGlzcGxheTogZmxleDtcXG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgIG1hcmdpbjogMjBweCAwcHg7XFxuICAgZ2FwOiA0MHB4O1xcbn1cXG4gXFxuLm1lbnUtaXRlbXtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWluLWhlaWdodDogMTUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyLCAyMSwgMjEsIDAuOSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uaXRlbS1pbmZvID4gcDpmaXJzdC1jaGlsZHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5pdGVtLWluZm8gPiBwOm50aC1jaGlsZCgzKXtcXG4gICAgd2lkdGg6IDI1MHB4OyBcXG59XFxuXFxuLm1lbnUtaW1nLXdyYXB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcHg7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgeWVsbG93LCByZWQpO1xcbn1cXG5cXG4ubWVudS1pdGVtIGltZ3tcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG59XFxuXFxuLmNvbnRhY3R7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxOTBweCk7XFxufVxcblxcbi5jb250YWN0LWluZm97XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMiwgMjEsIDIxLCAwLjkpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgbG9hZFBhZ2U7XG5cbmZ1bmN0aW9uIGxvYWRQYWdlKCl7XG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvJyk7XG4gICAgaW5mby5hcHBlbmRDaGlsZChsb2FkQ29udGFjdHMoKSk7XG59XG5cbi8qKlxuICogQWRkIGNvbnRhY3QgaW5mbyBoZWFkZXIsIGFkZCBpbWFnZSBtb3JlIHN0eWxpbmdcbiAqIFxuICovXG5mdW5jdGlvbiBsb2FkQ29udGFjdHMoKXtcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XG5cbiAgICBjb25zdCBjb250YWN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RJbmZvLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtaW5mbycpO1xuXG4gICAgY29uc3QgY29udGFjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb250YWN0SGVhZGVyLmlubmVyVGV4dCA9IFwiQ29udGFjdCBVcyFcIlxuICAgIGNvbnRhY3RJbmZvLmFwcGVuZENoaWxkKGNvbnRhY3RIZWFkZXIpO1xuXG4gICAgY29uc3QgcGhvbmVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGhvbmVOdW1iZXIuaW5uZXJUZXh0ID0gXCJcXHVEODNEXFx1RENERSA0NDQtMzMyLTMzNDVcIjtcbiAgICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChwaG9uZU51bWJlcik7XG5cbiAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBlbWFpbC5pbm5lclRleHQgPSBcIlxcdTI3MDlcXHVGRTBGIG1jZG9uYWxkc3dhbm5hYmVAb3V0bG9vay5tYWlsXCI7XG4gICAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQoZW1haWwpO1xuXG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0SW5mbyk7IFxuXG4gICAgcmV0dXJuIGNvbnRhY3Q7XG59IiwiZXhwb3J0IGRlZmF1bHQgbG9hZEluZm87XG5pbXBvcnQgRGVsdXhlTWVhbCBmcm9tICcuLi9pbWcvZGVsdXhlLmpwZydcbmltcG9ydCBLaWRzTWVhbCBmcm9tICcuLi9pbWcva2lkcy5qcGcnXG5pbXBvcnQgRmFtaWx5TWVhbCBmcm9tICcuLi9pbWcvZmFtaWx5LmpwZydcblxuZnVuY3Rpb24gbG9hZEluZm8oKXtcbiAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mbycpO1xuICAgaW5mby5hcHBlbmRDaGlsZChsb2FkSXRlbXMoKSk7XG59XG5cbi8qKlxuICogQWRkIHBpY3R1cmVzIHRvIGVhY2ggbWVudSBpdGVtLCBhZGQgc3R5bGluZ1xuICogXG4gKi9cbmZ1bmN0aW9uIGxvYWRJdGVtcygpe1xuICAgIGxldCBlbnRyZWVzID0gW3tcbiAgICAgICAgICAgICAgICAgbmFtZTogJ0NoZWVzZWJ1cmdlciBEZWx1eGUgU3VwcmVtZSBNZWFsJyxcbiAgICAgICAgICAgICAgICAgcHJpY2U6ICckNi45OScsXG4gICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnT25lIG9mIHRoZSBiZXN0IG1lYWwgZGVhbHMgd2UgaGF2ZSB0byBvZmZlciwgc2VydmVkIHdpdGggZnJpZXMgYW5kIGEgZHJpbmsgb2YgY2hvaWNlJyxcbiAgICAgICAgICAgICAgICAgcGljdHVyZTogRGVsdXhlTWVhbFxuICAgICAgICAgICAgICAgICB9LCBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgIG5hbWU6IFwiRGVsdXhlIEtpZCdzIE1lYWxcIixcbiAgICAgICAgICAgICAgICAgcHJpY2U6ICckNC45OScsXG4gICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnT3VyIGtpZHMgbWVhbCBjb21lcyB3aXRoIG91ciBwYXRlbnRlZCBtaW5pYXR1cmUgYnVyZ2VyIHNtYWxsIGZyaWVzLCBkcmluaywgYW5kIGEgdG95LicsXG4gICAgICAgICAgICAgICAgIHBpY3R1cmU6IEtpZHNNZWFsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgIG5hbWU6IFwiRmFtaWx5IFBhY2tcIixcbiAgICAgICAgICAgICAgICAgcHJpY2U6ICckOTkuOTknLFxuICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0Vub3VnaCBmb29kIHRvIGZlZWQgdGhlIHdob2xlIGZhbWlseSBhbmQgdGhlbiBzb21lLiBDb21lcyB3aXRoIDEyIG9mIG91ciBzaWduYXR1cmUgYnVyZ2VyIHdpdGggdG9wcGluZ3Mgb2YgY2hvaWNlLCAxMiBzaWRlIG9mIHlvdXIgY2hvaWNlIGFuZCAxMiBvZiBvdXIgd29ybGQgZmFtb3VzIG1pbGtzaGFrZXMuJyxcbiAgICAgICAgICAgICAgICBwaWN0dXJlOiBGYW1pbHlNZWFsXG4gICAgICAgICAgICAgICAgICAgfSxdXG4gICAgXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuICAgIFxuICAgIGVudHJlZXMuZm9yRWFjaCgoZW50cmVlKSA9PiB7XG4gICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1JbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW1JbmZvLmNsYXNzTGlzdC5hZGQoJ2l0ZW0taW5mbycpO1xuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgZmllbGQgaW4gZW50cmVlKXtcbiAgICAgICAgICAgIGxldCBpdGVtRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICAgICAgICAgIGlmKGZpZWxkICE9PSAnbmFtZScgJiYgZmllbGQgIT09ICdwaWN0dXJlJyl7XG4gICAgICAgICAgICAgICAgaXRlbUZpZWxkLmlubmVyVGV4dCA9IGAke2ZpZWxkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgZmllbGQuc2xpY2UoMSl9OiBgICsgZW50cmVlW2ZpZWxkXTsgXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZpZWxkID09PSAnbmFtZScpe1xuICAgICAgICAgICAgICAgIGl0ZW1GaWVsZC5pbm5lclRleHQgPSBlbnRyZWVbZmllbGRdO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgXG4gICAgICAgICAgICBpdGVtSW5mby5hcHBlbmRDaGlsZChpdGVtRmllbGQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1JbmZvKTtcblxuICAgICAgICBjb25zdCBpdGVtSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaXRlbUltYWdlLnNyYyA9IGVudHJlZS5waWN0dXJlO1xuXG4gICAgICAgIGNvbnN0IGltZ1dyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaW1nV3JhcC5jbGFzc0xpc3QuYWRkKCdtZW51LWltZy13cmFwJylcbiAgICAgICAgaW1nV3JhcC5hcHBlbmRDaGlsZChpdGVtSW1hZ2UpO1xuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWdXcmFwKTtcblxuICAgICAgICBtZW51LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWVudTtcbn0iLCJpbXBvcnQgSWNvbiBmcm9tIFwiLi4vaW1nL2J1cmdlci5wbmdcIlxuaW1wb3J0IFBob3RvIGZyb20gXCIuLi9pbWcvZ29ibGVyLXMta25vYmIuanBnXCJcbmV4cG9ydCBkZWZhdWx0IGxvYWRQYWdlO1xuZXhwb3J0IHtyZWxvYWRQYWdlfTtcblxuZnVuY3Rpb24gbG9hZFBhZ2UoKXtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIFxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4gICAgbG9hZFRhYkljb24oKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGxvYWRUb3BXcmFwKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobG9hZEJhY2tncm91bmQoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChsb2FkSW5mbygpKTtcblxuXG4gICAgYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcbn1cblxuZnVuY3Rpb24gbG9hZFRhYkljb24oKXtcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJyk7XG5cbiAgICBsaW5rLnJlbCA9ICdpY29uJztcbiAgICBsaW5rLmhyZWYgPSBJY29uO1xuXG4gICAgaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbn1cblxuZnVuY3Rpb24gcmVsb2FkUGFnZSgpe1xuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mbycpO1xuICAgIFxuICAgIGluZm8ucmVwbGFjZUNoaWxkcmVuKCk7XG5cbiAgICBpbmZvLmFwcGVuZENoaWxkKGxvYWRUZXN0aW1vbmlhbCgpKTtcbiAgICBpbmZvLmFwcGVuZENoaWxkKGxvYWRTY2hlZHVsZSgpKTtcbiAgICBpbmZvLmFwcGVuZENoaWxkKGxvYWRMb2NhdGlvbigpKTtcbn1cblxuZnVuY3Rpb24gbG9hZEJhY2tncm91bmQoKXtcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7ICAgXG4gICAgYmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKCdiZy1pbWFnZScpO1xuXG4gICAgcmV0dXJuIGJhY2tncm91bmQ7XG59XG5cbmZ1bmN0aW9uIGxvYWRIZWFkZXIoKXtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcbiAgICBcbiAgICBjb25zdCBidXJnZXJJY29uID0gbmV3IEltYWdlKCk7XG4gICAgYnVyZ2VySWNvbi5zcmMgPSBJY29uO1xuICAgIGJ1cmdlckljb24uYWx0ID0gXCJidXJnZXItaWNvblwiO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChidXJnZXJJY29uKTtcblxuICAgIGNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGhlYWRlclRpdGxlLmNsYXNzTGlzdC5hZGQoXCJoLXRpdGxlXCIpO1xuICAgIGhlYWRlclRpdGxlLmlubmVyVGV4dCA9IFwiQnVyZ2VyIFNob3BcIjtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGUpO1xuXG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gbG9hZFRhYnMoKXtcbiAgICBjb25zdCB0YWJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFicy5jbGFzc0xpc3QuYWRkKFwidGFic1wiKTtcblxuICAgIGNvbnN0IGhvbWVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob21lVGFiLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSkuaW5uZXJUZXh0ID0gXCJIb21lXCI7XG4gICAgaG9tZVRhYi5jbGFzc0xpc3QuYWRkKFwiaG9tZS10YWJcIik7XG4gICAgaG9tZVRhYi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXRhYlwiKTtcbiAgICB0YWJzLmFwcGVuZENoaWxkKGhvbWVUYWIpO1xuICAgIFxuICAgIGNvbnN0IG1lbnVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51VGFiLmlubmVyVGV4dCA9IFwiTWVudVwiO1xuICAgIG1lbnVUYWIuY2xhc3NMaXN0LmFkZChcIm1lbnUtdGFiXCIpO1xuICAgIHRhYnMuYXBwZW5kQ2hpbGQobWVudVRhYik7XG4gICAgXG4gICAgY29uc3QgaW5mb1RhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluZm9UYWIuaW5uZXJUZXh0ID0gXCJDb250YWN0XCI7XG4gICAgaW5mb1RhYi5jbGFzc0xpc3QuYWRkKFwiaW5mby10YWJcIik7XG4gICAgdGFicy5hcHBlbmRDaGlsZChpbmZvVGFiKTtcblxuICAgIHJldHVybiB0YWJzO1xufVxuXG5mdW5jdGlvbiBsb2FkVG9wV3JhcCgpe1xuICAgIGNvbnN0IHRvcFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b3BXcmFwLmNsYXNzTGlzdC5hZGQoJ3RvcC13cmFwJyk7XG5cbiAgICB0b3BXcmFwLmFwcGVuZENoaWxkKGxvYWRIZWFkZXIoKSk7XG4gICAgdG9wV3JhcC5hcHBlbmRDaGlsZChsb2FkVGFicygpKTtcblxuICAgIHJldHVybiB0b3BXcmFwO1xufVxuXG5mdW5jdGlvbiBsb2FkSW5mbygpe1xuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuXG4gICAgaW5mby5hcHBlbmRDaGlsZChsb2FkVGVzdGltb25pYWwoKSk7XG4gICAgaW5mby5hcHBlbmRDaGlsZChsb2FkU2NoZWR1bGUoKSk7XG4gICAgaW5mby5hcHBlbmRDaGlsZChsb2FkTG9jYXRpb24oKSk7XG4gICAgXG4gICAgcmV0dXJuIGluZm87XG59XG5cbmZ1bmN0aW9uIGxvYWRUZXN0aW1vbmlhbCgpe1xuICAgIGNvbnN0IHRlc3RpbW9uaWFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBxdW90ZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICB0ZXN0aW1vbmlhbC5jbGFzc0xpc3QuYWRkKFwidGVzdGltb25pYWxcIik7XG5cbiAgICB0ZXh0LmlubmVyVGV4dCA9ICdJIGNhbiBiZWxpZXZlIGJ1cmdlcnMgbGlrZSB0aGlzIGV4aXRzIE9NRyEgRnJvbSB0aGUgdGVuZGVyIGJlZWYsIGZyZXNoIHRvcHBpbmdzIGFuZCB0aGUgd29ybGQgZmFtb3VzIG1pbGtzaGFrZXMuIE1jRG9uYWxkcyBqdXN0IGNhbm5vdCBjb21wZXRlLi4uJztcbiAgICBxdW90ZWUuaW5uZXJUZXh0ID0gICctIFJvbmFsZCBNY0RvbmFsZCBcXHVEODNFXFx1REQyMSc7XG5cbiAgICB0ZXN0aW1vbmlhbC5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICB0ZXN0aW1vbmlhbC5hcHBlbmRDaGlsZChxdW90ZWUpO1xuXG4gICAgcmV0dXJuIHRlc3RpbW9uaWFsO1xuICAgIFxufVxuXG5mdW5jdGlvbiBsb2FkU2NoZWR1bGUoKXtcbiAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvdXJzLmNsYXNzTGlzdC5hZGQoXCJob3Vyc1wiKTtcblxuICAgIGNvbnN0IGhvdXJzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaG91cnNUaXRsZS5pbm5lclRleHQgPSBcIlxcdUQ4M0RcXHVERDUyIEhvdXJzXCI7XG4gICAgaG91cnMuYXBwZW5kQ2hpbGQoaG91cnNUaXRsZSk7XG4gICAgXG4gICAgY29uc3QgaG91ckxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGxldCBkYXlzID0gWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCA3OyBpKyspe1xuICAgICAgICBob3VyTGlzdC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpKS5pbm5lclRleHQgPSBgJHtkYXlzW2ldfTogOEFNIC0gJHs4LWl9UE1gXG4gICAgfTtcbiAgICBob3Vycy5hcHBlbmRDaGlsZChob3VyTGlzdCk7XG5cbiAgICByZXR1cm4gaG91cnM7XG59XG5cbmZ1bmN0aW9uIGxvYWRMb2NhdGlvbigpe1xuICAgIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbG9jYXRpb24uY2xhc3NMaXN0LmFkZChcImxvY2F0aW9uXCIpO1xuXG4gICAgbG9jYXRpb24uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmlubmVyVGV4dCA9IFwiXFx1RDgzQ1xcdURGRTAgTG9jYXRpb25cIjtcblxuICAgIFxuICAgIGxvY2F0aW9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pbm5lclRleHQgPSBcIjEyMzQgR29iYmxlcidzIEtub2IsIFBlbm5zeWx2YW5pYVwiO1xuXG4gICAgY29uc3QgbG9jYXRpb25QaG90byA9IG5ldyBJbWFnZSgpO1xuICAgIGxvY2F0aW9uUGhvdG8uc3JjID0gUGhvdG87XG4gICAgbG9jYXRpb25QaG90by5hbHQgPSBcIlBpY3R1cmUgb2YgR29iYmxlcnMnIEtub2JcIlxuICAgIGxvY2F0aW9uLmFwcGVuZENoaWxkKGxvY2F0aW9uUGhvdG8pO1xuXG4gICAgcmV0dXJuIGxvY2F0aW9uO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHtkZWZhdWx0IGFzIGhvbWVQYWdlLCByZWxvYWRQYWdlfSBmcm9tICcuL3BhZ2VMb2FkLmpzJ1xuaW1wb3J0IHtkZWZhdWx0IGFzIG1lbnVQYWdlfSBmcm9tICcuL21lbnUuanMnXG5pbXBvcnQge2RlZmF1bHQgYXMgY29udGFjdFBhZ2V9IGZyb20gJy4vY29udGFjdC5qcydcblxuaG9tZVBhZ2UoKTtcbmFkZFRhYkxpc3RlbmVycygpO1xuXG4vKipcbiAqIENvbW1pdCBhbG9uZyB0aGUgd2F5XG4gKiBJbmNsdWRlIHBob3RvIGNyZWRpdCBpbiBmb290ZXJcbiAqL1xuXG5mdW5jdGlvbiBhZGRUYWJMaXN0ZW5lcnMoKXtcbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZvXCIpO1xuICAgIGNvbnN0IGhvbWVUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWUtdGFiXCIpO1xuICAgIGNvbnN0IG1lbnVUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtdGFiXCIpO1xuICAgIGNvbnN0IGluZm9UYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZm8tdGFiXCIpO1xuXG4gICAgaG9tZVRhYi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICByZWxvYWRQYWdlKCk7XG4gICAgICAgIGFjdGl2ZVRhYihob21lVGFiKTtcbiAgICB9O1xuXG4gICAgbWVudVRhYi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBpbmZvLnJlcGxhY2VDaGlsZHJlbigpO1xuICAgICAgICBtZW51UGFnZSgpO1xuICAgICAgICBhY3RpdmVUYWIobWVudVRhYik7XG4gICAgfVxuXG4gICAgaW5mb1RhYi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBpbmZvLnJlcGxhY2VDaGlsZHJlbigpO1xuICAgICAgICBjb250YWN0UGFnZSgpO1xuICAgICAgICBhY3RpdmVUYWIoaW5mb1RhYik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBhY3RpdmVUYWIoY3VyclRhYil7XG4gICAgY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbY2xhc3MkPS10YWJdXCIpO1xuXG4gICAgdGFicy5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICAgICAgaWYodGFiICE9IGN1cnJUYWIpe1xuICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtdGFiXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtdGFiXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIiNjb250ZW50XCJcbiAgICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==