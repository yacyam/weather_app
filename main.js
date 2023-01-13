/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/ken-cheung-KonWFWUaAuk-unsplash.jpg */ \"./src/assets/images/ken-cheung-KonWFWUaAuk-unsplash.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n.foo{\\n    background-size: cover;\\n    \\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\\nbody{\\n    display: grid;\\n    grid-template-columns: 3fr 2fr;\\n    grid-template-rows: 6fr 2fr;\\n    padding:10px;\\n    color: rgb(251, 251, 251);\\n}\\nlabel{\\n    margin-left:15px;\\n}\\n#nameCity{\\n    font-size:50px;\\n}\\ninput{\\n    border:0;\\n    text-align: center;\\n    border-bottom:2px solid white;\\n    background: transparent;\\n    color:white;\\n}\\ninput:focus{\\n    outline: none;\\n    color:white;\\n}\\ninput::placeholder{\\n    color:white;\\n}\\n#top{\\n    display: flex;\\n    /*border: 1px solid black;*/\\n}\\n#top-left{\\n    display: flex;\\n    flex-direction: column;\\n    margin-left:25px;\\n    margin-right:5px;\\n    padding:25px;\\n}\\n#top-right{\\n    width:10rem;\\n    padding:10px;\\n    font-weight:bold;\\n}\\n#info{\\n    display: flex;\\n    flex-direction: column;\\n}\\n#top-right{\\n    margin-top:50px;\\n}\\n#weekly{\\n    /*border: 1px solid black;*/\\n    display: flex;\\n    justify-content: space-evenly;\\n    align-items: center;\\n\\n}\\n\\n#weekly{\\n    /*border:1px solid black;*/\\n    grid-column: 1/-1;\\n}\\n#hourly{\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    text-align: center;\\n}\\n#hourly h2{\\n    margin-bottom:40px;\\n}\\n#hrTemps{\\n    visibility: hidden;\\n}\\n\\n.active{\\n    background-color: rgb(122, 78, 233);\\n}\\n\\n#top-buttons{\\n    visibility: hidden;\\n    display: flex;\\n    justify-content: center;\\n    margin-bottom: 50px;\\n}\\n\\nbutton{\\n    width:2rem;\\n    font-size: 20px;\\n    margin:5px;\\n    border: 0.5px solid black;\\n    color: white;\\n    background-color: rgb(165, 137, 237);\\n}\\nbutton:hover{\\n    background-color: rgb(122, 78, 233);\\n}\\nbutton:active{\\n    background-color: rgb(90, 30, 242);\\n}\\n\\n#form{\\n    visibility: hidden;\\n}\\n\\n#hours{\\n    /*border:1px solid black;*/\\n    display: grid;\\n    min-width:20rem;\\n    grid-template-columns: repeat(2, minmax(100px, 1fr));\\n}\\n#hours div{\\n    /*border:1px solid black;*/\\n}\\n#weekly img{\\n    max-width:80px;\\n    max-height:80px;\\n}\\n\\n@media only screen and (max-width: 850px) {\\n    body{\\n        display: flex;\\n        flex-direction: column;\\n        justify-content: space-between;\\n        \\n    }\\n    #weekly{\\n        display: flex;\\n        flex-direction: column;\\n    }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather_app/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather_app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://weather_app/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather_app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather_app/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather_app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather_app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather_app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather_app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather_app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather_app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/apiGather.js":
/*!**************************!*\
  !*** ./src/apiGather.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gatherAll\": () => (/* binding */ gatherAll),\n/* harmony export */   \"hourlyData\": () => (/* binding */ hourlyData)\n/* harmony export */ });\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ \"./src/display.js\");\n\nlet dataObj = { err: false };\nlet maxWeekData = {};\nlet minWeekData = {};\nlet hourlyData = {};\n\n/**\n * Effect: Fetches data from today's forecast and passes it in\n * as data inside of dataObj. If city isn't recognized, err\n * key in dataObj is made to be true and error is logged.\n */\nasync function fetchData(city){\n    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=cc08e61c3eaa3f813da239cf0ddbb6eb`)\n    .then((data) => {\n        return data.json()\n    })\n    .then((data) => {\n        if(data.cod === '404'){\n            throw new Error();\n        }\n        dataObj = data;\n        //console.log(dataObj)\n    })\n    .catch((err) => {\n        console.log('Failed to fetch from API')\n        dataObj.err = true;\n    })\n}\n\n/**\n * Effect: Gathers the weekly data (max and min) and hourly data\n * and places each form of data into a specific object that\n * correlates to the data it holds.\n */\nasync function specificGather(){\n    await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${dataObj.coord.lat}&longitude=${dataObj.coord.lon}&daily=temperature_2m_max&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto`)\n    .then((data) => {\n        return data.json()\n    })\n    .then((data) => {\n        if(data.cod === '404'){\n            throw new Error(\"Failed to fetch from API\");\n        }\n        maxWeekData = data;\n        //console.log(maxWeekData)\n    })\n    .catch((err) => {\n        console.log(err)\n    })\n\n    await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${dataObj.coord.lat}&longitude=${dataObj.coord.lon}&daily=temperature_2m_min&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto`)\n    .then((data) => {\n        return data.json()\n    })\n    .then((data) => {\n        if(data.cod === '404'){\n            throw new Error(\"Failed to fetch from API\");\n        }\n        minWeekData = data;\n        //console.log(minWeekData)\n    })\n    .catch((err) => {\n        console.log(err)\n    })\n\n    await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${dataObj.coord.lat}&longitude=${dataObj.coord.lon}&hourly=temperature_2m&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto`)\n    .then((data) => {\n        return data.json()\n    })\n    .then((data) => {\n        if(data.cod === '404'){\n            throw new Error(\"Failed to fetch from API\");\n        }\n        hourlyData = data;\n        //console.log(hourlyData)\n    })\n    .catch((err) => {\n        console.log(err)\n    })\n}\n\n\n/**\n * Effect: Gathers all data from city passed in as argument and\n * displays all of it on screen. If city isn't recognized by\n * API, then error will be displayed. Default display will\n * be Ithaca.\n */\nasync function gatherAll(city='Ithaca'){\n    let text = document.getElementById('errText')\n    text.innerHTML = ``;\n    await fetchData(city);\n    if(!dataObj.err){\n        await specificGather();\n        (0,_display__WEBPACK_IMPORTED_MODULE_0__.displayAll)(dataObj, maxWeekData, minWeekData, hourlyData);\n        document.getElementById('form').style.visibility = 'visible';\n        document.getElementById('top-buttons').style.visibility = 'visible';\n        document.getElementById('hrTemps').style.visibility = 'visible';\n\n        document.getElementById('button-hr1').classList = 'active'\n        document.getElementById('button-hr2').classList = ''\n        document.getElementById('button-hr3').classList = ''\n    }\n    else{\n        text.innerHTML = `Incorrect Format. Please Input Correct City, State, or Country.`\n    }\n}\n\n\n\n//# sourceURL=webpack://weather_app/./src/apiGather.js?");

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeSide\": () => (/* binding */ changeSide),\n/* harmony export */   \"displayAll\": () => (/* binding */ displayAll)\n/* harmony export */ });\n/* harmony import */ var _assets_images_hot_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/hot.png */ \"./src/assets/images/hot.png\");\n/* harmony import */ var _assets_images_104203196_simple_icon_liquid_thermometer_cold_at_transparent_effect_background_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/104203196-simple-icon-liquid-thermometer-cold-at-transparent-effect-background.png */ \"./src/assets/images/104203196-simple-icon-liquid-thermometer-cold-at-transparent-effect-background.png\");\n/* harmony import */ var _apiGather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apiGather */ \"./src/apiGather.js\");\n\n\n\n\nlet hrs = {hr1: false, hr2: false, hr3: false};\n/**\n * Effect: Displays today's main weather forecast\n * as a general forecast on the left side of the\n * screen.\n */\nfunction displayMain(todayWeather){\n    let name = document.getElementById('nameCity');\n    let temp = document.getElementById('tempCity');\n    let feel = document.getElementById('feelCity');\n    let chance = document.getElementById('rainCity');\n    let wind = document.getElementById('windCity');\n    name.innerHTML = `${todayWeather.name}`\n    \n    temp.innerHTML = `Temperature: ${Math.round((todayWeather.main.temp - 273.15) * (9/5) + 32)}° F`\n    feel.innerHTML = `Feels Like: ${Math.round((todayWeather.main.feels_like - 273.15) * (9/5) + 32)}° F`\n    wind.innerHTML = `Wind Speeds: ${Math.round(todayWeather.wind.speed)} MPH`\n    chance.innerHTML = `Current Weather: ${todayWeather.weather[0].main}`\n}\n/**\n * Effect: Displays maximum and minimum temperatures\n * for the entire week on the footer of the screen\n */\nfunction displayFooter(maxTemps, minTemps){\n    //Create all base elements for footer\n    let max = document.createElement('h3');\n    let min = document.createElement('h3');\n    let image1 = document.createElement('img');\n    let image2 = document.createElement('img');\n    let todayDate = document.createElement('h4');\n    image1.src = _assets_images_hot_png__WEBPACK_IMPORTED_MODULE_0__;\n    image2.src = _assets_images_104203196_simple_icon_liquid_thermometer_cold_at_transparent_effect_background_png__WEBPACK_IMPORTED_MODULE_1__;\n\n    let today = new Date();\n    let dd = String(today.getDate()).padStart(2, '0');\n    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!\n    let yyyy = today.getFullYear();\n\n    let date1 = parseInt(dd);\n    let date2 = parseInt(dd) + 1;\n    let date3 = parseInt(dd) + 2;\n    let date4 = parseInt(dd) + 3;\n    let date5 = parseInt(dd) + 4;\n    let date6 = parseInt(dd) + 5;\n    let date7 = parseInt(dd) + 6;\n\n    today = mm + '/' + date1.toString() + '/' + yyyy;\n    todayDate.innerText = today;\n\n    //Get all divs to place info into\n    let day1 = document.getElementById('day-1');\n    let day2 = document.getElementById('day-2');\n    let day3 = document.getElementById('day-3');\n    let day4 = document.getElementById('day-4');\n    let day5 = document.getElementById('day-5');\n    let day6 = document.getElementById('day-6');\n    let day7 = document.getElementById('day-7');\n\n    max.innerHTML = `High: ${Math.round(maxTemps.daily.temperature_2m_max[0])}° F`\n    min.innerHTML = `Low: ${Math.round(minTemps.daily.temperature_2m_min[0])}° F`\n    day1.innerHTML = ``\n    if(Math.round(maxTemps.daily.temperature_2m_max[0]) > 40){\n        day1.appendChild(image1);\n        day1.appendChild(max);\n        day1.appendChild(min);\n    }\n    else{\n        day1.appendChild(image2);\n        day1.appendChild(max);\n        day1.appendChild(min);\n    }\n    day1.appendChild(todayDate);\n\n\n    image1 = document.createElement('img');\n    image2 = document.createElement('img');\n    image1.src = _assets_images_hot_png__WEBPACK_IMPORTED_MODULE_0__;\n    image2.src = _assets_images_104203196_simple_icon_liquid_thermometer_cold_at_transparent_effect_background_png__WEBPACK_IMPORTED_MODULE_1__;\n    max = document.createElement('h3');\n    min = document.createElement('h3');\n    //Creates today's date\n    todayDate = document.createElement('h4');\n    today = mm + '/' + date2.toString() + '/' + yyyy;\n    todayDate.innerText = today;\n\n    max.innerHTML = `High: ${Math.round(maxTemps.daily.temperature_2m_max[1])}° F`\n    min.innerHTML = `Low: ${Math.round(minTemps.daily.temperature_2m_min[1])}° F`\n    day2.innerHTML = ``\n    if(Math.round(maxTemps.daily.temperature_2m_max[1]) > 40){\n        day2.appendChild(image1);\n        day2.appendChild(max);\n        day2.appendChild(min);\n    }\n    else{\n        day2.appendChild(image2);\n        day2.appendChild(max);\n        day2.appendChild(min);\n    }\n    day2.appendChild(todayDate);\n\n    image1 = document.createElement('img');\n    image2 = document.createElement('img');\n    image1.src = _assets_images_hot_png__WEBPACK_IMPORTED_MODULE_0__;\n    image2.src = _assets_images_104203196_simple_icon_liquid_thermometer_cold_at_transparent_effect_background_png__WEBPACK_IMPORTED_MODULE_1__;\n    //Creates today's date\n    todayDate = document.createElement('h4');\n    today = mm + '/' + date3.toString() + '/' + yyyy;\n    todayDate.innerText = today;\n\n    max = document.createElement('h3');\n    min = document.createElement('h3');\n    max.innerHTML = `High: ${Math.round(maxTemps.daily.temperature_2m_max[2])}° F`\n    min.innerHTML = `Low: ${Math.round(minTemps.daily.temperature_2m_min[2])}° F`\n    day3.innerHTML = ``\n    if(Math.round(maxTemps.daily.temperature_2m_max[2]) > 40){\n        day3.appendChild(image1);\n        day3.appendChild(max);\n        day3.appendChild(min);\n    }\n    else{\n        day3.appendChild(image2);\n        day3.appendChild(max);\n        day3.appendChild(min);\n    }\n    day3.appendChild(todayDate);\n\n    image1 = document.createElement('img');\n    image2 = document.createElement('img');\n    image1.src = _assets_images_hot_png__WEBPACK_IMPORTED_MODULE_0__;\n    image2.src = _assets_images_104203196_simple_icon_liquid_thermometer_cold_at_transparent_effect_background_png__WEBPACK_IMPORTED_MODULE_1__;\n    //Creates today's date\n    todayDate = document.createElement('h4');\n    today = mm + '/' + date4.toString() + '/' + yyyy;\n    todayDate.innerText = today;\n\n    max = document.createElement('h3');\n    min = document.createElement('h3');\n    max.innerHTML = `High: ${Math.round(maxTemps.daily.temperature_2m_max[3])}° F`\n    min.innerHTML = `Low: ${Math.round(minTemps.daily.temperature_2m_min[3])}° F`\n    day4.innerHTML = ``\n    if(Math.round(maxTemps.daily.temperature_2m_max[3]) > 40){\n        day4.appendChild(image1);\n        day4.appendChild(max);\n        day4.appendChild(min);\n    }\n    else{\n        day4.appendChild(image2);\n        day4.appendChild(max);\n        day4.appendChild(min);\n    }\n    day4.appendChild(todayDate);\n\n    image1 = document.createElement('img');\n    image2 = document.createElement('img');\n    image1.src = _assets_images_hot_png__WEBPACK_IMPORTED_MODULE_0__;\n    image2.src = _assets_images_104203196_simple_icon_liquid_thermometer_cold_at_transparent_effect_background_png__WEBPACK_IMPORTED_MODULE_1__;\n    max = document.createElement('h3');\n    min = document.createElement('h3');\n    //Creates today's date\n    todayDate = document.createElement('h4');\n    today = mm + '/' + date5.toString() + '/' + yyyy;\n    todayDate.innerText = today;\n\n    max.innerHTML = `High: ${Math.round(maxTemps.daily.temperature_2m_max[4])}° F`\n    min.innerHTML = `Low: ${Math.round(minTemps.daily.temperature_2m_min[4])}° F`\n    day5.innerHTML = ``\n    if(Math.round(maxTemps.daily.temperature_2m_max[4]) > 40){\n        day5.appendChild(image1);\n        day5.appendChild(max);\n        day5.appendChild(min);\n    }\n    else{\n        day5.appendChild(image2);\n        day5.appendChild(max);\n        day5.appendChild(min);\n    }\n    day5.appendChild(todayDate);\n\n    image1 = document.createElement('img');\n    image2 = document.createElement('img');\n    image1.src = _assets_images_hot_png__WEBPACK_IMPORTED_MODULE_0__;\n    image2.src = _assets_images_104203196_simple_icon_liquid_thermometer_cold_at_transparent_effect_background_png__WEBPACK_IMPORTED_MODULE_1__;\n    max = document.createElement('h3');\n    min = document.createElement('h3');\n    //Creates today's date\n    todayDate = document.createElement('h4');\n    today = mm + '/' + date6.toString() + '/' + yyyy;\n    todayDate.innerText = today;\n\n    max.innerHTML = `High: ${Math.round(maxTemps.daily.temperature_2m_max[5])}° F`\n    min.innerHTML = `Low: ${Math.round(minTemps.daily.temperature_2m_min[5])}° F`\n    day6.innerHTML = ``\n    if(Math.round(maxTemps.daily.temperature_2m_max[5]) > 40){\n        day6.appendChild(image1);\n        day6.appendChild(max);\n        day6.appendChild(min);\n    }\n    else{\n        day6.appendChild(image2);\n        day6.appendChild(max);\n        day6.appendChild(min);\n    }\n    day6.appendChild(todayDate);\n\n    image1 = document.createElement('img');\n    image2 = document.createElement('img');\n    image1.src = _assets_images_hot_png__WEBPACK_IMPORTED_MODULE_0__;\n    image2.src = _assets_images_104203196_simple_icon_liquid_thermometer_cold_at_transparent_effect_background_png__WEBPACK_IMPORTED_MODULE_1__;\n    max = document.createElement('h3');\n    min = document.createElement('h3');\n    //Creates today's date\n    todayDate = document.createElement('h4');\n    today = mm + '/' + date7.toString() + '/' + yyyy;\n    todayDate.innerText = today;\n\n    max.innerHTML = `High: ${Math.round(maxTemps.daily.temperature_2m_max[6])}° F`\n    min.innerHTML = `Low: ${Math.round(minTemps.daily.temperature_2m_min[6])}° F`\n    day7.innerHTML = ``\n    if(Math.round(maxTemps.daily.temperature_2m_max[6]) > 40){\n        day7.appendChild(image1);\n        day7.appendChild(max);\n        day7.appendChild(min);\n    }\n    else{\n        day7.appendChild(image2);\n        day7.appendChild(max);\n        day7.appendChild(min);\n    }\n    day7.appendChild(todayDate);\n}\n\n/**\n * Effect: Displays hourly temperatures for today\n * on the screen through hourlyTemps object data\n */\nfunction displaySide(hourlyTemps, hourType=8){\n    let hr1 = hourlyTemps.hourly.time[hourType];\n    let cutHR1 = hr1.slice(hr1.indexOf('T') + 1);\n    let actualHR1 = parseInt(cutHR1.slice(0, cutHR1.indexOf(':')));\n\n    let hr2 = hourlyTemps.hourly.time[hourType + 1];\n    let cutHR2 = hr2.slice(hr1.indexOf('T') + 1);\n    let actualHR2 = parseInt(cutHR2.slice(0, cutHR1.indexOf(':')));\n\n    let hr3 = hourlyTemps.hourly.time[hourType + 2];\n    let cutHR3 = hr3.slice(hr1.indexOf('T') + 1);\n    let actualHR3 = parseInt(cutHR3.slice(0, cutHR1.indexOf(':')));\n\n    let hr4 = hourlyTemps.hourly.time[hourType + 3];\n    let cutHR4 = hr4.slice(hr1.indexOf('T') + 1);\n    let actualHR4 = parseInt(cutHR4.slice(0, cutHR1.indexOf(':')));\n\n    let hr5 = hourlyTemps.hourly.time[hourType + 4];\n    let cutHR5 = hr5.slice(hr1.indexOf('T') + 1);\n    let actualHR5 = parseInt(cutHR5.slice(0, cutHR1.indexOf(':')));\n\n    let hr6 = hourlyTemps.hourly.time[hourType + 5];\n    let cutHR6 = hr6.slice(hr1.indexOf('T') + 1);\n    let actualHR6 = parseInt(cutHR6.slice(0, cutHR1.indexOf(':')));\n\n    let hr7 = hourlyTemps.hourly.time[hourType + 6];\n    let cutHR7 = hr7.slice(hr1.indexOf('T') + 1);\n    let actualHR7 = parseInt(cutHR7.slice(0, cutHR1.indexOf(':')));\n\n    let hr8 = hourlyTemps.hourly.time[hourType + 7];\n    let cutHR8 = hr8.slice(hr1.indexOf('T') + 1);\n    let actualHR8 = parseInt(cutHR8.slice(0, cutHR1.indexOf(':')));\n\n    let temp = document.createElement('h2');\n    let hour = document.createElement('h3');\n\n    let hour1 = document.getElementById('hour-1');\n    let hour2 = document.getElementById('hour-2');\n    let hour3 = document.getElementById('hour-3');\n    let hour4 = document.getElementById('hour-4');\n    let hour5 = document.getElementById('hour-5');\n    let hour6 = document.getElementById('hour-6');\n    let hour7 = document.getElementById('hour-7');\n    let hour8 = document.getElementById('hour-8');\n\n    if(actualHR1 === 0){\n        hour.innerHTML = `12:00 AM`;\n    }\n    else if(actualHR1 < 12){\n        hour.innerHTML = `${actualHR1}:00 AM`;\n    }\n    else if(actualHR1 === 12){\n        hour.innerHTML = `${actualHR1}:00 PM`;\n    }\n    else{\n        hour.innerHTML = `${actualHR1 - 12}:00 PM`;\n    }\n    temp.innerHTML = `${Math.round(hourlyTemps.hourly.temperature_2m[hourType])}° F`\n    hour1.innerHTML = ``;\n    hour1.appendChild(temp);\n    hour1.appendChild(hour);\n\n    hour = document.createElement('h3');\n    if(actualHR2 === 0){\n        hour.innerHTML = `12:00 AM`;\n    }\n    else if(actualHR2 < 12){\n        hour.innerHTML = `${actualHR2}:00 AM`;\n    }\n    else if(actualHR2 === 12){\n        hour.innerHTML = `${actualHR2}:00 PM`;\n    }\n    else{\n        hour.innerHTML = `${actualHR2 - 12}:00 PM`;\n    }\n    temp = document.createElement('h2');\n    temp.innerHTML = `${Math.round(hourlyTemps.hourly.temperature_2m[hourType+1])}° F`\n    hour2.innerHTML = ``;\n    hour2.appendChild(temp);\n    hour2.appendChild(hour);\n\n    hour = document.createElement('h3');\n    if(actualHR3 === 0){\n        hour.innerHTML = `12:00 AM`;\n    }\n    else if(actualHR3 < 12){\n        hour.innerHTML = `${actualHR3}:00 AM`;\n    }\n    else if(actualHR3 === 12){\n        hour.innerHTML = `${actualHR3}:00 PM`;\n    }\n    else{\n        hour.innerHTML = `${actualHR3 - 12}:00 PM`;\n    }\n    temp = document.createElement('h2');\n    temp.innerHTML = `${Math.round(hourlyTemps.hourly.temperature_2m[hourType+2])}° F`\n    hour3.innerHTML = ``\n    hour3.appendChild(temp);\n    hour3.appendChild(hour);\n\n    hour = document.createElement('h3');\n    if(actualHR4 === 0){\n        hour.innerHTML = `12:00 AM`;\n    }\n    else if(actualHR4 < 12){\n        hour.innerHTML = `${actualHR4}:00 AM`;\n    }\n    else if(actualHR4 === 12){\n        hour.innerHTML = `${actualHR4}:00 PM`;\n    }\n    else{\n        hour.innerHTML = `${actualHR4 - 12}:00 PM`;\n    }\n    temp = document.createElement('h2');\n    temp.innerHTML = `${Math.round(hourlyTemps.hourly.temperature_2m[hourType+3])}° F`\n    hour4.innerHTML = ``\n    hour4.appendChild(temp);\n    hour4.appendChild(hour);\n\n    hour = document.createElement('h3');\n    if(actualHR5 === 0){\n        hour.innerHTML = `12:00 AM`;\n    }\n    else if(actualHR5 < 12){\n        hour.innerHTML = `${actualHR5}:00 AM`;\n    }\n    else if(actualHR5 === 12){\n        hour.innerHTML = `${actualHR5}:00 PM`;\n    }\n    else{\n        hour.innerHTML = `${actualHR5 - 12}:00 PM`;\n    }\n    temp = document.createElement('h2');\n    temp.innerHTML = `${Math.round(hourlyTemps.hourly.temperature_2m[hourType+4])}° F`\n    hour5.innerHTML = ``\n    hour5.appendChild(temp);\n    hour5.appendChild(hour);\n\n    hour = document.createElement('h3');\n    if(actualHR6 === 0){\n        hour.innerHTML = `12:00 AM`;\n    }\n    else if(actualHR6 < 12){\n        hour.innerHTML = `${actualHR6}:00 AM`;\n    }\n    else if(actualHR6 === 12){\n        hour.innerHTML = `${actualHR6}:00 PM`;\n    }\n    else{\n        hour.innerHTML = `${actualHR6 - 12}:00 PM`;\n    }\n    temp = document.createElement('h2');\n    temp.innerHTML = `${Math.round(hourlyTemps.hourly.temperature_2m[hourType+5])}° F`\n    hour6.innerHTML = ``\n    hour6.appendChild(temp);\n    hour6.appendChild(hour);\n\n    hour = document.createElement('h3');\n    if(actualHR7 === 0){\n        hour.innerHTML = `12:00 AM`;\n    }\n    else if(actualHR7 < 12){\n        hour.innerHTML = `${actualHR7}:00 AM`;\n    }\n    else if(actualHR7 === 12){\n        hour.innerHTML = `${actualHR7}:00 PM`;\n    }\n    else{\n        hour.innerHTML = `${actualHR7 - 12}:00 PM`;\n    }\n    temp = document.createElement('h2');\n    temp.innerHTML = `${Math.round(hourlyTemps.hourly.temperature_2m[hourType+6])}° F`\n    hour7.innerHTML = ``\n    hour7.appendChild(temp);\n    hour7.appendChild(hour);\n\n    hour = document.createElement('h3');\n    if(actualHR8 === 0){\n        hour.innerHTML = `12:00 AM`;\n    }\n    else if(actualHR8 < 12){\n        hour.innerHTML = `${actualHR8}:00 AM`;\n    }\n    else if(actualHR8 === 12){\n        hour.innerHTML = `${actualHR8}:00 PM`;\n    }\n    else{\n        hour.innerHTML = `${actualHR8 - 12}:00 PM`;\n    }\n    temp = document.createElement('h2');\n    temp.innerHTML = `${Math.round(hourlyTemps.hourly.temperature_2m[hourType+7])}° F`\n    hour8.innerHTML = ``\n    hour8.appendChild(temp);\n    hour8.appendChild(hour);\n}\n\nfunction changeSide(num){\n    if(num === 1){\n        if(!hrs.hr1){\n            hrs.hr1 = true;\n            hrs.hr2 = false;\n            hrs.hr3 = false;\n            displaySide(_apiGather__WEBPACK_IMPORTED_MODULE_2__.hourlyData, 8);\n            document.getElementById('button-hr1').classList = 'active'\n            document.getElementById('button-hr2').classList = ''\n            document.getElementById('button-hr3').classList = ''\n        }\n    }\n    else if(num === 2){\n        if(!hrs.hr2){\n            hrs.hr2 = true;\n            hrs.hr1 = false;\n            hrs.hr3 = false;\n            displaySide(_apiGather__WEBPACK_IMPORTED_MODULE_2__.hourlyData, 16);\n            document.getElementById('button-hr1').classList = ''\n            document.getElementById('button-hr2').classList = 'active'\n            document.getElementById('button-hr3').classList = ''\n        }\n    }\n    else{\n        if(!hrs.hr3){\n            hrs.hr3 = true;\n            hrs.hr1 = false;\n            hrs.hr2 = false;\n            displaySide(_apiGather__WEBPACK_IMPORTED_MODULE_2__.hourlyData, 24);\n            document.getElementById('button-hr1').classList = ''\n            document.getElementById('button-hr2').classList = ''\n            document.getElementById('button-hr3').classList = 'active'\n        }\n    }\n}\n/**\n * Effect: Takes in today's weather, maximum and minimum\n * temperatures for 7 days, and hourly temperatures, and\n * displays each of them in their respective area on screen\n */\nfunction displayAll(today, max, min, hour){\n    displayMain(today)\n    displayFooter(max, min)\n    displaySide(hour)\n}\n\n\n\n//# sourceURL=webpack://weather_app/./src/display.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _apiGather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiGather */ \"./src/apiGather.js\");\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display */ \"./src/display.js\");\n\n\n\n\n\n\n(0,_apiGather__WEBPACK_IMPORTED_MODULE_1__.gatherAll)();\nconst elem = document.documentElement;\nif (elem.requestFullscreen) {elem.requestFullscreen()}\n\ndocument.getElementById('form').addEventListener('submit', (val) => {\n    val.preventDefault();\n    let cityName = document.getElementById('locSub').value\n    console.log(cityName);\n\n    (0,_apiGather__WEBPACK_IMPORTED_MODULE_1__.gatherAll)(cityName);\n})\n\ndocument.getElementById('button-hr1').addEventListener('click', () => {\n    ;(0,_display__WEBPACK_IMPORTED_MODULE_2__.changeSide)(1);\n})\n\ndocument.getElementById('button-hr2').addEventListener('click', () => {\n    ;(0,_display__WEBPACK_IMPORTED_MODULE_2__.changeSide)(2);\n})\n\ndocument.getElementById('button-hr3').addEventListener('click', () => {\n    ;(0,_display__WEBPACK_IMPORTED_MODULE_2__.changeSide)(3);\n})\n\n//# sourceURL=webpack://weather_app/./src/index.js?");

/***/ }),

/***/ "./src/assets/images/104203196-simple-icon-liquid-thermometer-cold-at-transparent-effect-background.png":
/*!**************************************************************************************************************!*\
  !*** ./src/assets/images/104203196-simple-icon-liquid-thermometer-cold-at-transparent-effect-background.png ***!
  \**************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"104203196-simple-icon-liquid-thermometer-cold-at-transparent-effect-background.png\";\n\n//# sourceURL=webpack://weather_app/./src/assets/images/104203196-simple-icon-liquid-thermometer-cold-at-transparent-effect-background.png?");

/***/ }),

/***/ "./src/assets/images/hot.png":
/*!***********************************!*\
  !*** ./src/assets/images/hot.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"hot.png\";\n\n//# sourceURL=webpack://weather_app/./src/assets/images/hot.png?");

/***/ }),

/***/ "./src/assets/images/ken-cheung-KonWFWUaAuk-unsplash.jpg":
/*!***************************************************************!*\
  !*** ./src/assets/images/ken-cheung-KonWFWUaAuk-unsplash.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ken-cheung-KonWFWUaAuk-unsplash.jpg\";\n\n//# sourceURL=webpack://weather_app/./src/assets/images/ken-cheung-KonWFWUaAuk-unsplash.jpg?");

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
/******/ 			"main": 0
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;