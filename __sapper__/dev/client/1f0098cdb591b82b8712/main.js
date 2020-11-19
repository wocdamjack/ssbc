/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + "1f0098cdb591b82b8712" + "/" + ({"about":"about","home":"home","index":"index","vendors~categories~providers":"vendors~categories~providers","categories":"categories","vendors~providers":"vendors~providers","providers":"providers"}[chunkId]||chunkId) + "." + chunkId + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "client/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/bulma/css/bulma.min.css":
/*!**********************************************!*\
  !*** ./node_modules/bulma/css/bulma.min.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js!./bulma.min.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/bulma/css/bulma.min.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/bulma/css/bulma.min.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/bulma/css/bulma.min.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*! bulma.io v0.7.4 | MIT License | github.com/jgthms/bulma */@-webkit-keyframes spinAround{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes spinAround{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.breadcrumb,.button,.delete,.file,.is-unselectable,.modal-close,.pagination-ellipsis,.pagination-link,.pagination-next,.pagination-previous,.tabs{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.navbar-link:not(.is-arrowless)::after,.select:not(.is-multiple):not(.is-loading)::after{border:3px solid transparent;border-radius:2px;border-right:0;border-top:0;content:\" \";display:block;height:.625em;margin-top:-.4375em;pointer-events:none;position:absolute;top:50%;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:center;transform-origin:center;width:.625em}.block:not(:last-child),.box:not(:last-child),.breadcrumb:not(:last-child),.content:not(:last-child),.highlight:not(:last-child),.level:not(:last-child),.list:not(:last-child),.message:not(:last-child),.notification:not(:last-child),.progress:not(:last-child),.subtitle:not(:last-child),.table-container:not(:last-child),.table:not(:last-child),.tabs:not(:last-child),.title:not(:last-child){margin-bottom:1.5rem}.delete,.modal-close{-moz-appearance:none;-webkit-appearance:none;background-color:rgba(10,10,10,.2);border:none;border-radius:290486px;cursor:pointer;pointer-events:auto;display:inline-block;flex-grow:0;flex-shrink:0;font-size:0;height:20px;max-height:20px;max-width:20px;min-height:20px;min-width:20px;outline:0;position:relative;vertical-align:top;width:20px}.delete::after,.delete::before,.modal-close::after,.modal-close::before{background-color:#fff;content:\"\";display:block;left:50%;position:absolute;top:50%;-webkit-transform:translateX(-50%) translateY(-50%) rotate(45deg);transform:translateX(-50%) translateY(-50%) rotate(45deg);-webkit-transform-origin:center center;transform-origin:center center}.delete::before,.modal-close::before{height:2px;width:50%}.delete::after,.modal-close::after{height:50%;width:2px}.delete:focus,.delete:hover,.modal-close:focus,.modal-close:hover{background-color:rgba(10,10,10,.3)}.delete:active,.modal-close:active{background-color:rgba(10,10,10,.4)}.is-small.delete,.is-small.modal-close{height:16px;max-height:16px;max-width:16px;min-height:16px;min-width:16px;width:16px}.is-medium.delete,.is-medium.modal-close{height:24px;max-height:24px;max-width:24px;min-height:24px;min-width:24px;width:24px}.is-large.delete,.is-large.modal-close{height:32px;max-height:32px;max-width:32px;min-height:32px;min-width:32px;width:32px}.button.is-loading::after,.control.is-loading::after,.loader,.select.is-loading::after{-webkit-animation:spinAround .5s infinite linear;animation:spinAround .5s infinite linear;border:2px solid #dbdbdb;border-radius:290486px;border-right-color:transparent;border-top-color:transparent;content:\"\";display:block;height:1em;position:relative;width:1em}.hero-video,.image.is-16by9 .has-ratio,.image.is-16by9 img,.image.is-1by1 .has-ratio,.image.is-1by1 img,.image.is-1by2 .has-ratio,.image.is-1by2 img,.image.is-1by3 .has-ratio,.image.is-1by3 img,.image.is-2by1 .has-ratio,.image.is-2by1 img,.image.is-2by3 .has-ratio,.image.is-2by3 img,.image.is-3by1 .has-ratio,.image.is-3by1 img,.image.is-3by2 .has-ratio,.image.is-3by2 img,.image.is-3by4 .has-ratio,.image.is-3by4 img,.image.is-3by5 .has-ratio,.image.is-3by5 img,.image.is-4by3 .has-ratio,.image.is-4by3 img,.image.is-4by5 .has-ratio,.image.is-4by5 img,.image.is-5by3 .has-ratio,.image.is-5by3 img,.image.is-5by4 .has-ratio,.image.is-5by4 img,.image.is-9by16 .has-ratio,.image.is-9by16 img,.image.is-square .has-ratio,.image.is-square img,.is-overlay,.modal,.modal-background{bottom:0;left:0;position:absolute;right:0;top:0}.button,.file-cta,.file-name,.input,.pagination-ellipsis,.pagination-link,.pagination-next,.pagination-previous,.select select,.textarea{-moz-appearance:none;-webkit-appearance:none;align-items:center;border:1px solid transparent;border-radius:4px;box-shadow:none;display:inline-flex;font-size:1rem;height:2.25em;justify-content:flex-start;line-height:1.5;padding-bottom:calc(.375em - 1px);padding-left:calc(.625em - 1px);padding-right:calc(.625em - 1px);padding-top:calc(.375em - 1px);position:relative;vertical-align:top}.button:active,.button:focus,.file-cta:active,.file-cta:focus,.file-name:active,.file-name:focus,.input:active,.input:focus,.is-active.button,.is-active.file-cta,.is-active.file-name,.is-active.input,.is-active.pagination-ellipsis,.is-active.pagination-link,.is-active.pagination-next,.is-active.pagination-previous,.is-active.textarea,.is-focused.button,.is-focused.file-cta,.is-focused.file-name,.is-focused.input,.is-focused.pagination-ellipsis,.is-focused.pagination-link,.is-focused.pagination-next,.is-focused.pagination-previous,.is-focused.textarea,.pagination-ellipsis:active,.pagination-ellipsis:focus,.pagination-link:active,.pagination-link:focus,.pagination-next:active,.pagination-next:focus,.pagination-previous:active,.pagination-previous:focus,.select select.is-active,.select select.is-focused,.select select:active,.select select:focus,.textarea:active,.textarea:focus{outline:0}.button[disabled],.file-cta[disabled],.file-name[disabled],.input[disabled],.pagination-ellipsis[disabled],.pagination-link[disabled],.pagination-next[disabled],.pagination-previous[disabled],.select fieldset[disabled] select,.select select[disabled],.textarea[disabled],fieldset[disabled] .button,fieldset[disabled] .file-cta,fieldset[disabled] .file-name,fieldset[disabled] .input,fieldset[disabled] .pagination-ellipsis,fieldset[disabled] .pagination-link,fieldset[disabled] .pagination-next,fieldset[disabled] .pagination-previous,fieldset[disabled] .select select,fieldset[disabled] .textarea{cursor:not-allowed}/*! minireset.css v0.0.4 | MIT License | github.com/jgthms/minireset.css */blockquote,body,dd,dl,dt,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,html,iframe,legend,li,ol,p,pre,textarea,ul{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:400}ul{list-style:none}button,input,select,textarea{margin:0}html{box-sizing:border-box}*,::after,::before{box-sizing:inherit}embed,iframe,img,object,video{height:auto;max-width:100%}audio{max-width:100%}iframe{border:0}table{border-collapse:collapse;border-spacing:0}td,th{padding:0;text-align:left}html{background-color:#fff;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;min-width:300px;overflow-x:hidden;overflow-y:scroll;text-rendering:optimizeLegibility;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%}article,aside,figure,footer,header,hgroup,section{display:block}body,button,input,select,textarea{font-family:BlinkMacSystemFont,-apple-system,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Fira Sans\",\"Droid Sans\",\"Helvetica Neue\",Helvetica,Arial,sans-serif}code,pre{-moz-osx-font-smoothing:auto;-webkit-font-smoothing:auto;font-family:monospace}body{color:#4a4a4a;font-size:1rem;font-weight:400;line-height:1.5}a{color:#3273dc;cursor:pointer;text-decoration:none}a strong{color:currentColor}a:hover{color:#363636}code{background-color:#f5f5f5;color:#ff3860;font-size:.875em;font-weight:400;padding:.25em .5em .25em}hr{background-color:#f5f5f5;border:none;display:block;height:2px;margin:1.5rem 0}img{height:auto;max-width:100%}input[type=checkbox],input[type=radio]{vertical-align:baseline}small{font-size:.875em}span{font-style:inherit;font-weight:inherit}strong{color:#363636;font-weight:700}fieldset{border:none}pre{-webkit-overflow-scrolling:touch;background-color:#f5f5f5;color:#4a4a4a;font-size:.875em;overflow-x:auto;padding:1.25rem 1.5rem;white-space:pre;word-wrap:normal}pre code{background-color:transparent;color:currentColor;font-size:1em;padding:0}table td,table th{text-align:left;vertical-align:top}table th{color:#363636}.is-clearfix::after{clear:both;content:\" \";display:table}.is-pulled-left{float:left!important}.is-pulled-right{float:right!important}.is-clipped{overflow:hidden!important}.is-size-1{font-size:3rem!important}.is-size-2{font-size:2.5rem!important}.is-size-3{font-size:2rem!important}.is-size-4{font-size:1.5rem!important}.is-size-5{font-size:1.25rem!important}.is-size-6{font-size:1rem!important}.is-size-7{font-size:.75rem!important}@media screen and (max-width:768px){.is-size-1-mobile{font-size:3rem!important}.is-size-2-mobile{font-size:2.5rem!important}.is-size-3-mobile{font-size:2rem!important}.is-size-4-mobile{font-size:1.5rem!important}.is-size-5-mobile{font-size:1.25rem!important}.is-size-6-mobile{font-size:1rem!important}.is-size-7-mobile{font-size:.75rem!important}}@media screen and (min-width:769px),print{.is-size-1-tablet{font-size:3rem!important}.is-size-2-tablet{font-size:2.5rem!important}.is-size-3-tablet{font-size:2rem!important}.is-size-4-tablet{font-size:1.5rem!important}.is-size-5-tablet{font-size:1.25rem!important}.is-size-6-tablet{font-size:1rem!important}.is-size-7-tablet{font-size:.75rem!important}}@media screen and (max-width:1087px){.is-size-1-touch{font-size:3rem!important}.is-size-2-touch{font-size:2.5rem!important}.is-size-3-touch{font-size:2rem!important}.is-size-4-touch{font-size:1.5rem!important}.is-size-5-touch{font-size:1.25rem!important}.is-size-6-touch{font-size:1rem!important}.is-size-7-touch{font-size:.75rem!important}}@media screen and (min-width:1088px){.is-size-1-desktop{font-size:3rem!important}.is-size-2-desktop{font-size:2.5rem!important}.is-size-3-desktop{font-size:2rem!important}.is-size-4-desktop{font-size:1.5rem!important}.is-size-5-desktop{font-size:1.25rem!important}.is-size-6-desktop{font-size:1rem!important}.is-size-7-desktop{font-size:.75rem!important}}@media screen and (min-width:1280px){.is-size-1-widescreen{font-size:3rem!important}.is-size-2-widescreen{font-size:2.5rem!important}.is-size-3-widescreen{font-size:2rem!important}.is-size-4-widescreen{font-size:1.5rem!important}.is-size-5-widescreen{font-size:1.25rem!important}.is-size-6-widescreen{font-size:1rem!important}.is-size-7-widescreen{font-size:.75rem!important}}@media screen and (min-width:1472px){.is-size-1-fullhd{font-size:3rem!important}.is-size-2-fullhd{font-size:2.5rem!important}.is-size-3-fullhd{font-size:2rem!important}.is-size-4-fullhd{font-size:1.5rem!important}.is-size-5-fullhd{font-size:1.25rem!important}.is-size-6-fullhd{font-size:1rem!important}.is-size-7-fullhd{font-size:.75rem!important}}.has-text-centered{text-align:center!important}.has-text-justified{text-align:justify!important}.has-text-left{text-align:left!important}.has-text-right{text-align:right!important}@media screen and (max-width:768px){.has-text-centered-mobile{text-align:center!important}}@media screen and (min-width:769px),print{.has-text-centered-tablet{text-align:center!important}}@media screen and (min-width:769px) and (max-width:1087px){.has-text-centered-tablet-only{text-align:center!important}}@media screen and (max-width:1087px){.has-text-centered-touch{text-align:center!important}}@media screen and (min-width:1088px){.has-text-centered-desktop{text-align:center!important}}@media screen and (min-width:1088px) and (max-width:1279px){.has-text-centered-desktop-only{text-align:center!important}}@media screen and (min-width:1280px){.has-text-centered-widescreen{text-align:center!important}}@media screen and (min-width:1280px) and (max-width:1471px){.has-text-centered-widescreen-only{text-align:center!important}}@media screen and (min-width:1472px){.has-text-centered-fullhd{text-align:center!important}}@media screen and (max-width:768px){.has-text-justified-mobile{text-align:justify!important}}@media screen and (min-width:769px),print{.has-text-justified-tablet{text-align:justify!important}}@media screen and (min-width:769px) and (max-width:1087px){.has-text-justified-tablet-only{text-align:justify!important}}@media screen and (max-width:1087px){.has-text-justified-touch{text-align:justify!important}}@media screen and (min-width:1088px){.has-text-justified-desktop{text-align:justify!important}}@media screen and (min-width:1088px) and (max-width:1279px){.has-text-justified-desktop-only{text-align:justify!important}}@media screen and (min-width:1280px){.has-text-justified-widescreen{text-align:justify!important}}@media screen and (min-width:1280px) and (max-width:1471px){.has-text-justified-widescreen-only{text-align:justify!important}}@media screen and (min-width:1472px){.has-text-justified-fullhd{text-align:justify!important}}@media screen and (max-width:768px){.has-text-left-mobile{text-align:left!important}}@media screen and (min-width:769px),print{.has-text-left-tablet{text-align:left!important}}@media screen and (min-width:769px) and (max-width:1087px){.has-text-left-tablet-only{text-align:left!important}}@media screen and (max-width:1087px){.has-text-left-touch{text-align:left!important}}@media screen and (min-width:1088px){.has-text-left-desktop{text-align:left!important}}@media screen and (min-width:1088px) and (max-width:1279px){.has-text-left-desktop-only{text-align:left!important}}@media screen and (min-width:1280px){.has-text-left-widescreen{text-align:left!important}}@media screen and (min-width:1280px) and (max-width:1471px){.has-text-left-widescreen-only{text-align:left!important}}@media screen and (min-width:1472px){.has-text-left-fullhd{text-align:left!important}}@media screen and (max-width:768px){.has-text-right-mobile{text-align:right!important}}@media screen and (min-width:769px),print{.has-text-right-tablet{text-align:right!important}}@media screen and (min-width:769px) and (max-width:1087px){.has-text-right-tablet-only{text-align:right!important}}@media screen and (max-width:1087px){.has-text-right-touch{text-align:right!important}}@media screen and (min-width:1088px){.has-text-right-desktop{text-align:right!important}}@media screen and (min-width:1088px) and (max-width:1279px){.has-text-right-desktop-only{text-align:right!important}}@media screen and (min-width:1280px){.has-text-right-widescreen{text-align:right!important}}@media screen and (min-width:1280px) and (max-width:1471px){.has-text-right-widescreen-only{text-align:right!important}}@media screen and (min-width:1472px){.has-text-right-fullhd{text-align:right!important}}.is-capitalized{text-transform:capitalize!important}.is-lowercase{text-transform:lowercase!important}.is-uppercase{text-transform:uppercase!important}.is-italic{font-style:italic!important}.has-text-white{color:#fff!important}a.has-text-white:focus,a.has-text-white:hover{color:#e6e6e6!important}.has-background-white{background-color:#fff!important}.has-text-black{color:#0a0a0a!important}a.has-text-black:focus,a.has-text-black:hover{color:#000!important}.has-background-black{background-color:#0a0a0a!important}.has-text-light{color:#f5f5f5!important}a.has-text-light:focus,a.has-text-light:hover{color:#dbdbdb!important}.has-background-light{background-color:#f5f5f5!important}.has-text-dark{color:#363636!important}a.has-text-dark:focus,a.has-text-dark:hover{color:#1c1c1c!important}.has-background-dark{background-color:#363636!important}.has-text-primary{color:#00d1b2!important}a.has-text-primary:focus,a.has-text-primary:hover{color:#009e86!important}.has-background-primary{background-color:#00d1b2!important}.has-text-link{color:#3273dc!important}a.has-text-link:focus,a.has-text-link:hover{color:#205bbc!important}.has-background-link{background-color:#3273dc!important}.has-text-info{color:#209cee!important}a.has-text-info:focus,a.has-text-info:hover{color:#0f81cc!important}.has-background-info{background-color:#209cee!important}.has-text-success{color:#23d160!important}a.has-text-success:focus,a.has-text-success:hover{color:#1ca64c!important}.has-background-success{background-color:#23d160!important}.has-text-warning{color:#ffdd57!important}a.has-text-warning:focus,a.has-text-warning:hover{color:#ffd324!important}.has-background-warning{background-color:#ffdd57!important}.has-text-danger{color:#ff3860!important}a.has-text-danger:focus,a.has-text-danger:hover{color:#ff0537!important}.has-background-danger{background-color:#ff3860!important}.has-text-black-bis{color:#121212!important}.has-background-black-bis{background-color:#121212!important}.has-text-black-ter{color:#242424!important}.has-background-black-ter{background-color:#242424!important}.has-text-grey-darker{color:#363636!important}.has-background-grey-darker{background-color:#363636!important}.has-text-grey-dark{color:#4a4a4a!important}.has-background-grey-dark{background-color:#4a4a4a!important}.has-text-grey{color:#7a7a7a!important}.has-background-grey{background-color:#7a7a7a!important}.has-text-grey-light{color:#b5b5b5!important}.has-background-grey-light{background-color:#b5b5b5!important}.has-text-grey-lighter{color:#dbdbdb!important}.has-background-grey-lighter{background-color:#dbdbdb!important}.has-text-white-ter{color:#f5f5f5!important}.has-background-white-ter{background-color:#f5f5f5!important}.has-text-white-bis{color:#fafafa!important}.has-background-white-bis{background-color:#fafafa!important}.has-text-weight-light{font-weight:300!important}.has-text-weight-normal{font-weight:400!important}.has-text-weight-semibold{font-weight:600!important}.has-text-weight-bold{font-weight:700!important}.is-family-primary{font-family:BlinkMacSystemFont,-apple-system,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Fira Sans\",\"Droid Sans\",\"Helvetica Neue\",Helvetica,Arial,sans-serif!important}.is-family-secondary{font-family:BlinkMacSystemFont,-apple-system,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Fira Sans\",\"Droid Sans\",\"Helvetica Neue\",Helvetica,Arial,sans-serif!important}.is-family-sans-serif{font-family:BlinkMacSystemFont,-apple-system,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Fira Sans\",\"Droid Sans\",\"Helvetica Neue\",Helvetica,Arial,sans-serif!important}.is-family-monospace{font-family:monospace!important}.is-family-code{font-family:monospace!important}.is-block{display:block!important}@media screen and (max-width:768px){.is-block-mobile{display:block!important}}@media screen and (min-width:769px),print{.is-block-tablet{display:block!important}}@media screen and (min-width:769px) and (max-width:1087px){.is-block-tablet-only{display:block!important}}@media screen and (max-width:1087px){.is-block-touch{display:block!important}}@media screen and (min-width:1088px){.is-block-desktop{display:block!important}}@media screen and (min-width:1088px) and (max-width:1279px){.is-block-desktop-only{display:block!important}}@media screen and (min-width:1280px){.is-block-widescreen{display:block!important}}@media screen and (min-width:1280px) and (max-width:1471px){.is-block-widescreen-only{display:block!important}}@media screen and (min-width:1472px){.is-block-fullhd{display:block!important}}.is-flex{display:flex!important}@media screen and (max-width:768px){.is-flex-mobile{display:flex!important}}@media screen and (min-width:769px),print{.is-flex-tablet{display:flex!important}}@media screen and (min-width:769px) and (max-width:1087px){.is-flex-tablet-only{display:flex!important}}@media screen and (max-width:1087px){.is-flex-touch{display:flex!important}}@media screen and (min-width:1088px){.is-flex-desktop{display:flex!important}}@media screen and (min-width:1088px) and (max-width:1279px){.is-flex-desktop-only{display:flex!important}}@media screen and (min-width:1280px){.is-flex-widescreen{display:flex!important}}@media screen and (min-width:1280px) and (max-width:1471px){.is-flex-widescreen-only{display:flex!important}}@media screen and (min-width:1472px){.is-flex-fullhd{display:flex!important}}.is-inline{display:inline!important}@media screen and (max-width:768px){.is-inline-mobile{display:inline!important}}@media screen and (min-width:769px),print{.is-inline-tablet{display:inline!important}}@media screen and (min-width:769px) and (max-width:1087px){.is-inline-tablet-only{display:inline!important}}@media screen and (max-width:1087px){.is-inline-touch{display:inline!important}}@media screen and (min-width:1088px){.is-inline-desktop{display:inline!important}}@media screen and (min-width:1088px) and (max-width:1279px){.is-inline-desktop-only{display:inline!important}}@media screen and (min-width:1280px){.is-inline-widescreen{display:inline!important}}@media screen and (min-width:1280px) and (max-width:1471px){.is-inline-widescreen-only{display:inline!important}}@media screen and (min-width:1472px){.is-inline-fullhd{display:inline!important}}.is-inline-block{display:inline-block!important}@media screen and (max-width:768px){.is-inline-block-mobile{display:inline-block!important}}@media screen and (min-width:769px),print{.is-inline-block-tablet{display:inline-block!important}}@media screen and (min-width:769px) and (max-width:1087px){.is-inline-block-tablet-only{display:inline-block!important}}@media screen and (max-width:1087px){.is-inline-block-touch{display:inline-block!important}}@media screen and (min-width:1088px){.is-inline-block-desktop{display:inline-block!important}}@media screen and (min-width:1088px) and (max-width:1279px){.is-inline-block-desktop-only{display:inline-block!important}}@media screen and (min-width:1280px){.is-inline-block-widescreen{display:inline-block!important}}@media screen and (min-width:1280px) and (max-width:1471px){.is-inline-block-widescreen-only{display:inline-block!important}}@media screen and (min-width:1472px){.is-inline-block-fullhd{display:inline-block!important}}.is-inline-flex{display:inline-flex!important}@media screen and (max-width:768px){.is-inline-flex-mobile{display:inline-flex!important}}@media screen and (min-width:769px),print{.is-inline-flex-tablet{display:inline-flex!important}}@media screen and (min-width:769px) and (max-width:1087px){.is-inline-flex-tablet-only{display:inline-flex!important}}@media screen and (max-width:1087px){.is-inline-flex-touch{display:inline-flex!important}}@media screen and (min-width:1088px){.is-inline-flex-desktop{display:inline-flex!important}}@media screen and (min-width:1088px) and (max-width:1279px){.is-inline-flex-desktop-only{display:inline-flex!important}}@media screen and (min-width:1280px){.is-inline-flex-widescreen{display:inline-flex!important}}@media screen and (min-width:1280px) and (max-width:1471px){.is-inline-flex-widescreen-only{display:inline-flex!important}}@media screen and (min-width:1472px){.is-inline-flex-fullhd{display:inline-flex!important}}.is-hidden{display:none!important}.is-sr-only{border:none!important;clip:rect(0,0,0,0)!important;height:.01em!important;overflow:hidden!important;padding:0!important;position:absolute!important;white-space:nowrap!important;width:.01em!important}@media screen and (max-width:768px){.is-hidden-mobile{display:none!important}}@media screen and (min-width:769px),print{.is-hidden-tablet{display:none!important}}@media screen and (min-width:769px) and (max-width:1087px){.is-hidden-tablet-only{display:none!important}}@media screen and (max-width:1087px){.is-hidden-touch{display:none!important}}@media screen and (min-width:1088px){.is-hidden-desktop{display:none!important}}@media screen and (min-width:1088px) and (max-width:1279px){.is-hidden-desktop-only{display:none!important}}@media screen and (min-width:1280px){.is-hidden-widescreen{display:none!important}}@media screen and (min-width:1280px) and (max-width:1471px){.is-hidden-widescreen-only{display:none!important}}@media screen and (min-width:1472px){.is-hidden-fullhd{display:none!important}}.is-invisible{visibility:hidden!important}@media screen and (max-width:768px){.is-invisible-mobile{visibility:hidden!important}}@media screen and (min-width:769px),print{.is-invisible-tablet{visibility:hidden!important}}@media screen and (min-width:769px) and (max-width:1087px){.is-invisible-tablet-only{visibility:hidden!important}}@media screen and (max-width:1087px){.is-invisible-touch{visibility:hidden!important}}@media screen and (min-width:1088px){.is-invisible-desktop{visibility:hidden!important}}@media screen and (min-width:1088px) and (max-width:1279px){.is-invisible-desktop-only{visibility:hidden!important}}@media screen and (min-width:1280px){.is-invisible-widescreen{visibility:hidden!important}}@media screen and (min-width:1280px) and (max-width:1471px){.is-invisible-widescreen-only{visibility:hidden!important}}@media screen and (min-width:1472px){.is-invisible-fullhd{visibility:hidden!important}}.is-marginless{margin:0!important}.is-paddingless{padding:0!important}.is-radiusless{border-radius:0!important}.is-shadowless{box-shadow:none!important}.box{background-color:#fff;border-radius:6px;box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);color:#4a4a4a;display:block;padding:1.25rem}a.box:focus,a.box:hover{box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px #3273dc}a.box:active{box-shadow:inset 0 1px 2px rgba(10,10,10,.2),0 0 0 1px #3273dc}.button{background-color:#fff;border-color:#dbdbdb;border-width:1px;color:#363636;cursor:pointer;justify-content:center;padding-bottom:calc(.375em - 1px);padding-left:.75em;padding-right:.75em;padding-top:calc(.375em - 1px);text-align:center;white-space:nowrap}.button strong{color:inherit}.button .icon,.button .icon.is-large,.button .icon.is-medium,.button .icon.is-small{height:1.5em;width:1.5em}.button .icon:first-child:not(:last-child){margin-left:calc(-.375em - 1px);margin-right:.1875em}.button .icon:last-child:not(:first-child){margin-left:.1875em;margin-right:calc(-.375em - 1px)}.button .icon:first-child:last-child{margin-left:calc(-.375em - 1px);margin-right:calc(-.375em - 1px)}.button.is-hovered,.button:hover{border-color:#b5b5b5;color:#363636}.button.is-focused,.button:focus{border-color:#3273dc;color:#363636}.button.is-focused:not(:active),.button:focus:not(:active){box-shadow:0 0 0 .125em rgba(50,115,220,.25)}.button.is-active,.button:active{border-color:#4a4a4a;color:#363636}.button.is-text{background-color:transparent;border-color:transparent;color:#4a4a4a;text-decoration:underline}.button.is-text.is-focused,.button.is-text.is-hovered,.button.is-text:focus,.button.is-text:hover{background-color:#f5f5f5;color:#363636}.button.is-text.is-active,.button.is-text:active{background-color:#e8e8e8;color:#363636}.button.is-text[disabled],fieldset[disabled] .button.is-text{background-color:transparent;border-color:transparent;box-shadow:none}.button.is-white{background-color:#fff;border-color:transparent;color:#0a0a0a}.button.is-white.is-hovered,.button.is-white:hover{background-color:#f9f9f9;border-color:transparent;color:#0a0a0a}.button.is-white.is-focused,.button.is-white:focus{border-color:transparent;color:#0a0a0a}.button.is-white.is-focused:not(:active),.button.is-white:focus:not(:active){box-shadow:0 0 0 .125em rgba(255,255,255,.25)}.button.is-white.is-active,.button.is-white:active{background-color:#f2f2f2;border-color:transparent;color:#0a0a0a}.button.is-white[disabled],fieldset[disabled] .button.is-white{background-color:#fff;border-color:transparent;box-shadow:none}.button.is-white.is-inverted{background-color:#0a0a0a;color:#fff}.button.is-white.is-inverted:hover{background-color:#000}.button.is-white.is-inverted[disabled],fieldset[disabled] .button.is-white.is-inverted{background-color:#0a0a0a;border-color:transparent;box-shadow:none;color:#fff}.button.is-white.is-loading::after{border-color:transparent transparent #0a0a0a #0a0a0a!important}.button.is-white.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-white.is-outlined:focus,.button.is-white.is-outlined:hover{background-color:#fff;border-color:#fff;color:#0a0a0a}.button.is-white.is-outlined.is-loading::after{border-color:transparent transparent #fff #fff!important}.button.is-white.is-outlined[disabled],fieldset[disabled] .button.is-white.is-outlined{background-color:transparent;border-color:#fff;box-shadow:none;color:#fff}.button.is-white.is-inverted.is-outlined{background-color:transparent;border-color:#0a0a0a;color:#0a0a0a}.button.is-white.is-inverted.is-outlined:focus,.button.is-white.is-inverted.is-outlined:hover{background-color:#0a0a0a;color:#fff}.button.is-white.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-white.is-inverted.is-outlined{background-color:transparent;border-color:#0a0a0a;box-shadow:none;color:#0a0a0a}.button.is-black{background-color:#0a0a0a;border-color:transparent;color:#fff}.button.is-black.is-hovered,.button.is-black:hover{background-color:#040404;border-color:transparent;color:#fff}.button.is-black.is-focused,.button.is-black:focus{border-color:transparent;color:#fff}.button.is-black.is-focused:not(:active),.button.is-black:focus:not(:active){box-shadow:0 0 0 .125em rgba(10,10,10,.25)}.button.is-black.is-active,.button.is-black:active{background-color:#000;border-color:transparent;color:#fff}.button.is-black[disabled],fieldset[disabled] .button.is-black{background-color:#0a0a0a;border-color:transparent;box-shadow:none}.button.is-black.is-inverted{background-color:#fff;color:#0a0a0a}.button.is-black.is-inverted:hover{background-color:#f2f2f2}.button.is-black.is-inverted[disabled],fieldset[disabled] .button.is-black.is-inverted{background-color:#fff;border-color:transparent;box-shadow:none;color:#0a0a0a}.button.is-black.is-loading::after{border-color:transparent transparent #fff #fff!important}.button.is-black.is-outlined{background-color:transparent;border-color:#0a0a0a;color:#0a0a0a}.button.is-black.is-outlined:focus,.button.is-black.is-outlined:hover{background-color:#0a0a0a;border-color:#0a0a0a;color:#fff}.button.is-black.is-outlined.is-loading::after{border-color:transparent transparent #0a0a0a #0a0a0a!important}.button.is-black.is-outlined[disabled],fieldset[disabled] .button.is-black.is-outlined{background-color:transparent;border-color:#0a0a0a;box-shadow:none;color:#0a0a0a}.button.is-black.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-black.is-inverted.is-outlined:focus,.button.is-black.is-inverted.is-outlined:hover{background-color:#fff;color:#0a0a0a}.button.is-black.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-black.is-inverted.is-outlined{background-color:transparent;border-color:#fff;box-shadow:none;color:#fff}.button.is-light{background-color:#f5f5f5;border-color:transparent;color:#363636}.button.is-light.is-hovered,.button.is-light:hover{background-color:#eee;border-color:transparent;color:#363636}.button.is-light.is-focused,.button.is-light:focus{border-color:transparent;color:#363636}.button.is-light.is-focused:not(:active),.button.is-light:focus:not(:active){box-shadow:0 0 0 .125em rgba(245,245,245,.25)}.button.is-light.is-active,.button.is-light:active{background-color:#e8e8e8;border-color:transparent;color:#363636}.button.is-light[disabled],fieldset[disabled] .button.is-light{background-color:#f5f5f5;border-color:transparent;box-shadow:none}.button.is-light.is-inverted{background-color:#363636;color:#f5f5f5}.button.is-light.is-inverted:hover{background-color:#292929}.button.is-light.is-inverted[disabled],fieldset[disabled] .button.is-light.is-inverted{background-color:#363636;border-color:transparent;box-shadow:none;color:#f5f5f5}.button.is-light.is-loading::after{border-color:transparent transparent #363636 #363636!important}.button.is-light.is-outlined{background-color:transparent;border-color:#f5f5f5;color:#f5f5f5}.button.is-light.is-outlined:focus,.button.is-light.is-outlined:hover{background-color:#f5f5f5;border-color:#f5f5f5;color:#363636}.button.is-light.is-outlined.is-loading::after{border-color:transparent transparent #f5f5f5 #f5f5f5!important}.button.is-light.is-outlined[disabled],fieldset[disabled] .button.is-light.is-outlined{background-color:transparent;border-color:#f5f5f5;box-shadow:none;color:#f5f5f5}.button.is-light.is-inverted.is-outlined{background-color:transparent;border-color:#363636;color:#363636}.button.is-light.is-inverted.is-outlined:focus,.button.is-light.is-inverted.is-outlined:hover{background-color:#363636;color:#f5f5f5}.button.is-light.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-light.is-inverted.is-outlined{background-color:transparent;border-color:#363636;box-shadow:none;color:#363636}.button.is-dark{background-color:#363636;border-color:transparent;color:#f5f5f5}.button.is-dark.is-hovered,.button.is-dark:hover{background-color:#2f2f2f;border-color:transparent;color:#f5f5f5}.button.is-dark.is-focused,.button.is-dark:focus{border-color:transparent;color:#f5f5f5}.button.is-dark.is-focused:not(:active),.button.is-dark:focus:not(:active){box-shadow:0 0 0 .125em rgba(54,54,54,.25)}.button.is-dark.is-active,.button.is-dark:active{background-color:#292929;border-color:transparent;color:#f5f5f5}.button.is-dark[disabled],fieldset[disabled] .button.is-dark{background-color:#363636;border-color:transparent;box-shadow:none}.button.is-dark.is-inverted{background-color:#f5f5f5;color:#363636}.button.is-dark.is-inverted:hover{background-color:#e8e8e8}.button.is-dark.is-inverted[disabled],fieldset[disabled] .button.is-dark.is-inverted{background-color:#f5f5f5;border-color:transparent;box-shadow:none;color:#363636}.button.is-dark.is-loading::after{border-color:transparent transparent #f5f5f5 #f5f5f5!important}.button.is-dark.is-outlined{background-color:transparent;border-color:#363636;color:#363636}.button.is-dark.is-outlined:focus,.button.is-dark.is-outlined:hover{background-color:#363636;border-color:#363636;color:#f5f5f5}.button.is-dark.is-outlined.is-loading::after{border-color:transparent transparent #363636 #363636!important}.button.is-dark.is-outlined[disabled],fieldset[disabled] .button.is-dark.is-outlined{background-color:transparent;border-color:#363636;box-shadow:none;color:#363636}.button.is-dark.is-inverted.is-outlined{background-color:transparent;border-color:#f5f5f5;color:#f5f5f5}.button.is-dark.is-inverted.is-outlined:focus,.button.is-dark.is-inverted.is-outlined:hover{background-color:#f5f5f5;color:#363636}.button.is-dark.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-dark.is-inverted.is-outlined{background-color:transparent;border-color:#f5f5f5;box-shadow:none;color:#f5f5f5}.button.is-primary{background-color:#00d1b2;border-color:transparent;color:#fff}.button.is-primary.is-hovered,.button.is-primary:hover{background-color:#00c4a7;border-color:transparent;color:#fff}.button.is-primary.is-focused,.button.is-primary:focus{border-color:transparent;color:#fff}.button.is-primary.is-focused:not(:active),.button.is-primary:focus:not(:active){box-shadow:0 0 0 .125em rgba(0,209,178,.25)}.button.is-primary.is-active,.button.is-primary:active{background-color:#00b89c;border-color:transparent;color:#fff}.button.is-primary[disabled],fieldset[disabled] .button.is-primary{background-color:#00d1b2;border-color:transparent;box-shadow:none}.button.is-primary.is-inverted{background-color:#fff;color:#00d1b2}.button.is-primary.is-inverted:hover{background-color:#f2f2f2}.button.is-primary.is-inverted[disabled],fieldset[disabled] .button.is-primary.is-inverted{background-color:#fff;border-color:transparent;box-shadow:none;color:#00d1b2}.button.is-primary.is-loading::after{border-color:transparent transparent #fff #fff!important}.button.is-primary.is-outlined{background-color:transparent;border-color:#00d1b2;color:#00d1b2}.button.is-primary.is-outlined:focus,.button.is-primary.is-outlined:hover{background-color:#00d1b2;border-color:#00d1b2;color:#fff}.button.is-primary.is-outlined.is-loading::after{border-color:transparent transparent #00d1b2 #00d1b2!important}.button.is-primary.is-outlined[disabled],fieldset[disabled] .button.is-primary.is-outlined{background-color:transparent;border-color:#00d1b2;box-shadow:none;color:#00d1b2}.button.is-primary.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-primary.is-inverted.is-outlined:focus,.button.is-primary.is-inverted.is-outlined:hover{background-color:#fff;color:#00d1b2}.button.is-primary.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-primary.is-inverted.is-outlined{background-color:transparent;border-color:#fff;box-shadow:none;color:#fff}.button.is-link{background-color:#3273dc;border-color:transparent;color:#fff}.button.is-link.is-hovered,.button.is-link:hover{background-color:#276cda;border-color:transparent;color:#fff}.button.is-link.is-focused,.button.is-link:focus{border-color:transparent;color:#fff}.button.is-link.is-focused:not(:active),.button.is-link:focus:not(:active){box-shadow:0 0 0 .125em rgba(50,115,220,.25)}.button.is-link.is-active,.button.is-link:active{background-color:#2366d1;border-color:transparent;color:#fff}.button.is-link[disabled],fieldset[disabled] .button.is-link{background-color:#3273dc;border-color:transparent;box-shadow:none}.button.is-link.is-inverted{background-color:#fff;color:#3273dc}.button.is-link.is-inverted:hover{background-color:#f2f2f2}.button.is-link.is-inverted[disabled],fieldset[disabled] .button.is-link.is-inverted{background-color:#fff;border-color:transparent;box-shadow:none;color:#3273dc}.button.is-link.is-loading::after{border-color:transparent transparent #fff #fff!important}.button.is-link.is-outlined{background-color:transparent;border-color:#3273dc;color:#3273dc}.button.is-link.is-outlined:focus,.button.is-link.is-outlined:hover{background-color:#3273dc;border-color:#3273dc;color:#fff}.button.is-link.is-outlined.is-loading::after{border-color:transparent transparent #3273dc #3273dc!important}.button.is-link.is-outlined[disabled],fieldset[disabled] .button.is-link.is-outlined{background-color:transparent;border-color:#3273dc;box-shadow:none;color:#3273dc}.button.is-link.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-link.is-inverted.is-outlined:focus,.button.is-link.is-inverted.is-outlined:hover{background-color:#fff;color:#3273dc}.button.is-link.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-link.is-inverted.is-outlined{background-color:transparent;border-color:#fff;box-shadow:none;color:#fff}.button.is-info{background-color:#209cee;border-color:transparent;color:#fff}.button.is-info.is-hovered,.button.is-info:hover{background-color:#1496ed;border-color:transparent;color:#fff}.button.is-info.is-focused,.button.is-info:focus{border-color:transparent;color:#fff}.button.is-info.is-focused:not(:active),.button.is-info:focus:not(:active){box-shadow:0 0 0 .125em rgba(32,156,238,.25)}.button.is-info.is-active,.button.is-info:active{background-color:#118fe4;border-color:transparent;color:#fff}.button.is-info[disabled],fieldset[disabled] .button.is-info{background-color:#209cee;border-color:transparent;box-shadow:none}.button.is-info.is-inverted{background-color:#fff;color:#209cee}.button.is-info.is-inverted:hover{background-color:#f2f2f2}.button.is-info.is-inverted[disabled],fieldset[disabled] .button.is-info.is-inverted{background-color:#fff;border-color:transparent;box-shadow:none;color:#209cee}.button.is-info.is-loading::after{border-color:transparent transparent #fff #fff!important}.button.is-info.is-outlined{background-color:transparent;border-color:#209cee;color:#209cee}.button.is-info.is-outlined:focus,.button.is-info.is-outlined:hover{background-color:#209cee;border-color:#209cee;color:#fff}.button.is-info.is-outlined.is-loading::after{border-color:transparent transparent #209cee #209cee!important}.button.is-info.is-outlined[disabled],fieldset[disabled] .button.is-info.is-outlined{background-color:transparent;border-color:#209cee;box-shadow:none;color:#209cee}.button.is-info.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-info.is-inverted.is-outlined:focus,.button.is-info.is-inverted.is-outlined:hover{background-color:#fff;color:#209cee}.button.is-info.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-info.is-inverted.is-outlined{background-color:transparent;border-color:#fff;box-shadow:none;color:#fff}.button.is-success{background-color:#23d160;border-color:transparent;color:#fff}.button.is-success.is-hovered,.button.is-success:hover{background-color:#22c65b;border-color:transparent;color:#fff}.button.is-success.is-focused,.button.is-success:focus{border-color:transparent;color:#fff}.button.is-success.is-focused:not(:active),.button.is-success:focus:not(:active){box-shadow:0 0 0 .125em rgba(35,209,96,.25)}.button.is-success.is-active,.button.is-success:active{background-color:#20bc56;border-color:transparent;color:#fff}.button.is-success[disabled],fieldset[disabled] .button.is-success{background-color:#23d160;border-color:transparent;box-shadow:none}.button.is-success.is-inverted{background-color:#fff;color:#23d160}.button.is-success.is-inverted:hover{background-color:#f2f2f2}.button.is-success.is-inverted[disabled],fieldset[disabled] .button.is-success.is-inverted{background-color:#fff;border-color:transparent;box-shadow:none;color:#23d160}.button.is-success.is-loading::after{border-color:transparent transparent #fff #fff!important}.button.is-success.is-outlined{background-color:transparent;border-color:#23d160;color:#23d160}.button.is-success.is-outlined:focus,.button.is-success.is-outlined:hover{background-color:#23d160;border-color:#23d160;color:#fff}.button.is-success.is-outlined.is-loading::after{border-color:transparent transparent #23d160 #23d160!important}.button.is-success.is-outlined[disabled],fieldset[disabled] .button.is-success.is-outlined{background-color:transparent;border-color:#23d160;box-shadow:none;color:#23d160}.button.is-success.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-success.is-inverted.is-outlined:focus,.button.is-success.is-inverted.is-outlined:hover{background-color:#fff;color:#23d160}.button.is-success.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-success.is-inverted.is-outlined{background-color:transparent;border-color:#fff;box-shadow:none;color:#fff}.button.is-warning{background-color:#ffdd57;border-color:transparent;color:rgba(0,0,0,.7)}.button.is-warning.is-hovered,.button.is-warning:hover{background-color:#ffdb4a;border-color:transparent;color:rgba(0,0,0,.7)}.button.is-warning.is-focused,.button.is-warning:focus{border-color:transparent;color:rgba(0,0,0,.7)}.button.is-warning.is-focused:not(:active),.button.is-warning:focus:not(:active){box-shadow:0 0 0 .125em rgba(255,221,87,.25)}.button.is-warning.is-active,.button.is-warning:active{background-color:#ffd83d;border-color:transparent;color:rgba(0,0,0,.7)}.button.is-warning[disabled],fieldset[disabled] .button.is-warning{background-color:#ffdd57;border-color:transparent;box-shadow:none}.button.is-warning.is-inverted{background-color:rgba(0,0,0,.7);color:#ffdd57}.button.is-warning.is-inverted:hover{background-color:rgba(0,0,0,.7)}.button.is-warning.is-inverted[disabled],fieldset[disabled] .button.is-warning.is-inverted{background-color:rgba(0,0,0,.7);border-color:transparent;box-shadow:none;color:#ffdd57}.button.is-warning.is-loading::after{border-color:transparent transparent rgba(0,0,0,.7) rgba(0,0,0,.7)!important}.button.is-warning.is-outlined{background-color:transparent;border-color:#ffdd57;color:#ffdd57}.button.is-warning.is-outlined:focus,.button.is-warning.is-outlined:hover{background-color:#ffdd57;border-color:#ffdd57;color:rgba(0,0,0,.7)}.button.is-warning.is-outlined.is-loading::after{border-color:transparent transparent #ffdd57 #ffdd57!important}.button.is-warning.is-outlined[disabled],fieldset[disabled] .button.is-warning.is-outlined{background-color:transparent;border-color:#ffdd57;box-shadow:none;color:#ffdd57}.button.is-warning.is-inverted.is-outlined{background-color:transparent;border-color:rgba(0,0,0,.7);color:rgba(0,0,0,.7)}.button.is-warning.is-inverted.is-outlined:focus,.button.is-warning.is-inverted.is-outlined:hover{background-color:rgba(0,0,0,.7);color:#ffdd57}.button.is-warning.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-warning.is-inverted.is-outlined{background-color:transparent;border-color:rgba(0,0,0,.7);box-shadow:none;color:rgba(0,0,0,.7)}.button.is-danger{background-color:#ff3860;border-color:transparent;color:#fff}.button.is-danger.is-hovered,.button.is-danger:hover{background-color:#ff2b56;border-color:transparent;color:#fff}.button.is-danger.is-focused,.button.is-danger:focus{border-color:transparent;color:#fff}.button.is-danger.is-focused:not(:active),.button.is-danger:focus:not(:active){box-shadow:0 0 0 .125em rgba(255,56,96,.25)}.button.is-danger.is-active,.button.is-danger:active{background-color:#ff1f4b;border-color:transparent;color:#fff}.button.is-danger[disabled],fieldset[disabled] .button.is-danger{background-color:#ff3860;border-color:transparent;box-shadow:none}.button.is-danger.is-inverted{background-color:#fff;color:#ff3860}.button.is-danger.is-inverted:hover{background-color:#f2f2f2}.button.is-danger.is-inverted[disabled],fieldset[disabled] .button.is-danger.is-inverted{background-color:#fff;border-color:transparent;box-shadow:none;color:#ff3860}.button.is-danger.is-loading::after{border-color:transparent transparent #fff #fff!important}.button.is-danger.is-outlined{background-color:transparent;border-color:#ff3860;color:#ff3860}.button.is-danger.is-outlined:focus,.button.is-danger.is-outlined:hover{background-color:#ff3860;border-color:#ff3860;color:#fff}.button.is-danger.is-outlined.is-loading::after{border-color:transparent transparent #ff3860 #ff3860!important}.button.is-danger.is-outlined[disabled],fieldset[disabled] .button.is-danger.is-outlined{background-color:transparent;border-color:#ff3860;box-shadow:none;color:#ff3860}.button.is-danger.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-danger.is-inverted.is-outlined:focus,.button.is-danger.is-inverted.is-outlined:hover{background-color:#fff;color:#ff3860}.button.is-danger.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-danger.is-inverted.is-outlined{background-color:transparent;border-color:#fff;box-shadow:none;color:#fff}.button.is-small{border-radius:2px;font-size:.75rem}.button.is-normal{font-size:1rem}.button.is-medium{font-size:1.25rem}.button.is-large{font-size:1.5rem}.button[disabled],fieldset[disabled] .button{background-color:#fff;border-color:#dbdbdb;box-shadow:none;opacity:.5}.button.is-fullwidth{display:flex;width:100%}.button.is-loading{color:transparent!important;pointer-events:none}.button.is-loading::after{position:absolute;left:calc(50% - (1em / 2));top:calc(50% - (1em / 2));position:absolute!important}.button.is-static{background-color:#f5f5f5;border-color:#dbdbdb;color:#7a7a7a;box-shadow:none;pointer-events:none}.button.is-rounded{border-radius:290486px;padding-left:1em;padding-right:1em}.buttons{align-items:center;display:flex;flex-wrap:wrap;justify-content:flex-start}.buttons .button{margin-bottom:.5rem}.buttons .button:not(:last-child):not(.is-fullwidth){margin-right:.5rem}.buttons:last-child{margin-bottom:-.5rem}.buttons:not(:last-child){margin-bottom:1rem}.buttons.are-small .button:not(.is-normal):not(.is-medium):not(.is-large){border-radius:2px;font-size:.75rem}.buttons.are-medium .button:not(.is-small):not(.is-normal):not(.is-large){font-size:1.25rem}.buttons.are-large .button:not(.is-small):not(.is-normal):not(.is-medium){font-size:1.5rem}.buttons.has-addons .button:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0}.buttons.has-addons .button:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0;margin-right:-1px}.buttons.has-addons .button:last-child{margin-right:0}.buttons.has-addons .button.is-hovered,.buttons.has-addons .button:hover{z-index:2}.buttons.has-addons .button.is-active,.buttons.has-addons .button.is-focused,.buttons.has-addons .button.is-selected,.buttons.has-addons .button:active,.buttons.has-addons .button:focus{z-index:3}.buttons.has-addons .button.is-active:hover,.buttons.has-addons .button.is-focused:hover,.buttons.has-addons .button.is-selected:hover,.buttons.has-addons .button:active:hover,.buttons.has-addons .button:focus:hover{z-index:4}.buttons.has-addons .button.is-expanded{flex-grow:1}.buttons.is-centered{justify-content:center}.buttons.is-right{justify-content:flex-end}.container{margin:0 auto;position:relative}@media screen and (min-width:1088px){.container{max-width:960px;width:960px}.container.is-fluid{margin-left:64px;margin-right:64px;max-width:none;width:auto}}@media screen and (max-width:1279px){.container.is-widescreen{max-width:1152px;width:auto}}@media screen and (max-width:1471px){.container.is-fullhd{max-width:1344px;width:auto}}@media screen and (min-width:1280px){.container{max-width:1152px;width:1152px}}@media screen and (min-width:1472px){.container{max-width:1344px;width:1344px}}.content li+li{margin-top:.25em}.content blockquote:not(:last-child),.content dl:not(:last-child),.content ol:not(:last-child),.content p:not(:last-child),.content pre:not(:last-child),.content table:not(:last-child),.content ul:not(:last-child){margin-bottom:1em}.content h1,.content h2,.content h3,.content h4,.content h5,.content h6{color:#363636;font-weight:600;line-height:1.125}.content h1{font-size:2em;margin-bottom:.5em}.content h1:not(:first-child){margin-top:1em}.content h2{font-size:1.75em;margin-bottom:.5714em}.content h2:not(:first-child){margin-top:1.1428em}.content h3{font-size:1.5em;margin-bottom:.6666em}.content h3:not(:first-child){margin-top:1.3333em}.content h4{font-size:1.25em;margin-bottom:.8em}.content h5{font-size:1.125em;margin-bottom:.8888em}.content h6{font-size:1em;margin-bottom:1em}.content blockquote{background-color:#f5f5f5;border-left:5px solid #dbdbdb;padding:1.25em 1.5em}.content ol{list-style-position:outside;margin-left:2em;margin-top:1em}.content ol:not([type]){list-style-type:decimal}.content ol:not([type]).is-lower-alpha{list-style-type:lower-alpha}.content ol:not([type]).is-lower-roman{list-style-type:lower-roman}.content ol:not([type]).is-upper-alpha{list-style-type:upper-alpha}.content ol:not([type]).is-upper-roman{list-style-type:upper-roman}.content ul{list-style:disc outside;margin-left:2em;margin-top:1em}.content ul ul{list-style-type:circle;margin-top:.5em}.content ul ul ul{list-style-type:square}.content dd{margin-left:2em}.content figure{margin-left:2em;margin-right:2em;text-align:center}.content figure:not(:first-child){margin-top:2em}.content figure:not(:last-child){margin-bottom:2em}.content figure img{display:inline-block}.content figure figcaption{font-style:italic}.content pre{-webkit-overflow-scrolling:touch;overflow-x:auto;padding:1.25em 1.5em;white-space:pre;word-wrap:normal}.content sub,.content sup{font-size:75%}.content table{width:100%}.content table td,.content table th{border:1px solid #dbdbdb;border-width:0 0 1px;padding:.5em .75em;vertical-align:top}.content table th{color:#363636;text-align:left}.content table thead td,.content table thead th{border-width:0 0 2px;color:#363636}.content table tfoot td,.content table tfoot th{border-width:2px 0 0;color:#363636}.content table tbody tr:last-child td,.content table tbody tr:last-child th{border-bottom-width:0}.content.is-small{font-size:.75rem}.content.is-medium{font-size:1.25rem}.content.is-large{font-size:1.5rem}.input,.textarea{background-color:#fff;border-color:#dbdbdb;color:#363636;box-shadow:inset 0 1px 2px rgba(10,10,10,.1);max-width:100%;width:100%}.input::-moz-placeholder,.textarea::-moz-placeholder{color:rgba(54,54,54,.3)}.input::-webkit-input-placeholder,.textarea::-webkit-input-placeholder{color:rgba(54,54,54,.3)}.input:-moz-placeholder,.textarea:-moz-placeholder{color:rgba(54,54,54,.3)}.input:-ms-input-placeholder,.textarea:-ms-input-placeholder{color:rgba(54,54,54,.3)}.input.is-hovered,.input:hover,.textarea.is-hovered,.textarea:hover{border-color:#b5b5b5}.input.is-active,.input.is-focused,.input:active,.input:focus,.textarea.is-active,.textarea.is-focused,.textarea:active,.textarea:focus{border-color:#3273dc;box-shadow:0 0 0 .125em rgba(50,115,220,.25)}.input[disabled],.textarea[disabled],fieldset[disabled] .input,fieldset[disabled] .textarea{background-color:#f5f5f5;border-color:#f5f5f5;box-shadow:none;color:#7a7a7a}.input[disabled]::-moz-placeholder,.textarea[disabled]::-moz-placeholder,fieldset[disabled] .input::-moz-placeholder,fieldset[disabled] .textarea::-moz-placeholder{color:rgba(122,122,122,.3)}.input[disabled]::-webkit-input-placeholder,.textarea[disabled]::-webkit-input-placeholder,fieldset[disabled] .input::-webkit-input-placeholder,fieldset[disabled] .textarea::-webkit-input-placeholder{color:rgba(122,122,122,.3)}.input[disabled]:-moz-placeholder,.textarea[disabled]:-moz-placeholder,fieldset[disabled] .input:-moz-placeholder,fieldset[disabled] .textarea:-moz-placeholder{color:rgba(122,122,122,.3)}.input[disabled]:-ms-input-placeholder,.textarea[disabled]:-ms-input-placeholder,fieldset[disabled] .input:-ms-input-placeholder,fieldset[disabled] .textarea:-ms-input-placeholder{color:rgba(122,122,122,.3)}.input[readonly],.textarea[readonly]{box-shadow:none}.input.is-white,.textarea.is-white{border-color:#fff}.input.is-white.is-active,.input.is-white.is-focused,.input.is-white:active,.input.is-white:focus,.textarea.is-white.is-active,.textarea.is-white.is-focused,.textarea.is-white:active,.textarea.is-white:focus{box-shadow:0 0 0 .125em rgba(255,255,255,.25)}.input.is-black,.textarea.is-black{border-color:#0a0a0a}.input.is-black.is-active,.input.is-black.is-focused,.input.is-black:active,.input.is-black:focus,.textarea.is-black.is-active,.textarea.is-black.is-focused,.textarea.is-black:active,.textarea.is-black:focus{box-shadow:0 0 0 .125em rgba(10,10,10,.25)}.input.is-light,.textarea.is-light{border-color:#f5f5f5}.input.is-light.is-active,.input.is-light.is-focused,.input.is-light:active,.input.is-light:focus,.textarea.is-light.is-active,.textarea.is-light.is-focused,.textarea.is-light:active,.textarea.is-light:focus{box-shadow:0 0 0 .125em rgba(245,245,245,.25)}.input.is-dark,.textarea.is-dark{border-color:#363636}.input.is-dark.is-active,.input.is-dark.is-focused,.input.is-dark:active,.input.is-dark:focus,.textarea.is-dark.is-active,.textarea.is-dark.is-focused,.textarea.is-dark:active,.textarea.is-dark:focus{box-shadow:0 0 0 .125em rgba(54,54,54,.25)}.input.is-primary,.textarea.is-primary{border-color:#00d1b2}.input.is-primary.is-active,.input.is-primary.is-focused,.input.is-primary:active,.input.is-primary:focus,.textarea.is-primary.is-active,.textarea.is-primary.is-focused,.textarea.is-primary:active,.textarea.is-primary:focus{box-shadow:0 0 0 .125em rgba(0,209,178,.25)}.input.is-link,.textarea.is-link{border-color:#3273dc}.input.is-link.is-active,.input.is-link.is-focused,.input.is-link:active,.input.is-link:focus,.textarea.is-link.is-active,.textarea.is-link.is-focused,.textarea.is-link:active,.textarea.is-link:focus{box-shadow:0 0 0 .125em rgba(50,115,220,.25)}.input.is-info,.textarea.is-info{border-color:#209cee}.input.is-info.is-active,.input.is-info.is-focused,.input.is-info:active,.input.is-info:focus,.textarea.is-info.is-active,.textarea.is-info.is-focused,.textarea.is-info:active,.textarea.is-info:focus{box-shadow:0 0 0 .125em rgba(32,156,238,.25)}.input.is-success,.textarea.is-success{border-color:#23d160}.input.is-success.is-active,.input.is-success.is-focused,.input.is-success:active,.input.is-success:focus,.textarea.is-success.is-active,.textarea.is-success.is-focused,.textarea.is-success:active,.textarea.is-success:focus{box-shadow:0 0 0 .125em rgba(35,209,96,.25)}.input.is-warning,.textarea.is-warning{border-color:#ffdd57}.input.is-warning.is-active,.input.is-warning.is-focused,.input.is-warning:active,.input.is-warning:focus,.textarea.is-warning.is-active,.textarea.is-warning.is-focused,.textarea.is-warning:active,.textarea.is-warning:focus{box-shadow:0 0 0 .125em rgba(255,221,87,.25)}.input.is-danger,.textarea.is-danger{border-color:#ff3860}.input.is-danger.is-active,.input.is-danger.is-focused,.input.is-danger:active,.input.is-danger:focus,.textarea.is-danger.is-active,.textarea.is-danger.is-focused,.textarea.is-danger:active,.textarea.is-danger:focus{box-shadow:0 0 0 .125em rgba(255,56,96,.25)}.input.is-small,.textarea.is-small{border-radius:2px;font-size:.75rem}.input.is-medium,.textarea.is-medium{font-size:1.25rem}.input.is-large,.textarea.is-large{font-size:1.5rem}.input.is-fullwidth,.textarea.is-fullwidth{display:block;width:100%}.input.is-inline,.textarea.is-inline{display:inline;width:auto}.input.is-rounded{border-radius:290486px;padding-left:1em;padding-right:1em}.input.is-static{background-color:transparent;border-color:transparent;box-shadow:none;padding-left:0;padding-right:0}.textarea{display:block;max-width:100%;min-width:100%;padding:.625em;resize:vertical}.textarea:not([rows]){max-height:600px;min-height:120px}.textarea[rows]{height:initial}.textarea.has-fixed-size{resize:none}.checkbox,.radio{cursor:pointer;display:inline-block;line-height:1.25;position:relative}.checkbox input,.radio input{cursor:pointer}.checkbox:hover,.radio:hover{color:#363636}.checkbox[disabled],.radio[disabled],fieldset[disabled] .checkbox,fieldset[disabled] .radio{color:#7a7a7a;cursor:not-allowed}.radio+.radio{margin-left:.5em}.select{display:inline-block;max-width:100%;position:relative;vertical-align:top}.select:not(.is-multiple){height:2.25em}.select:not(.is-multiple):not(.is-loading)::after{border-color:#3273dc;right:1.125em;z-index:4}.select.is-rounded select{border-radius:290486px;padding-left:1em}.select select{background-color:#fff;border-color:#dbdbdb;color:#363636;cursor:pointer;display:block;font-size:1em;max-width:100%;outline:0}.select select::-moz-placeholder{color:rgba(54,54,54,.3)}.select select::-webkit-input-placeholder{color:rgba(54,54,54,.3)}.select select:-moz-placeholder{color:rgba(54,54,54,.3)}.select select:-ms-input-placeholder{color:rgba(54,54,54,.3)}.select select.is-hovered,.select select:hover{border-color:#b5b5b5}.select select.is-active,.select select.is-focused,.select select:active,.select select:focus{border-color:#3273dc;box-shadow:0 0 0 .125em rgba(50,115,220,.25)}.select select[disabled],fieldset[disabled] .select select{background-color:#f5f5f5;border-color:#f5f5f5;box-shadow:none;color:#7a7a7a}.select select[disabled]::-moz-placeholder,fieldset[disabled] .select select::-moz-placeholder{color:rgba(122,122,122,.3)}.select select[disabled]::-webkit-input-placeholder,fieldset[disabled] .select select::-webkit-input-placeholder{color:rgba(122,122,122,.3)}.select select[disabled]:-moz-placeholder,fieldset[disabled] .select select:-moz-placeholder{color:rgba(122,122,122,.3)}.select select[disabled]:-ms-input-placeholder,fieldset[disabled] .select select:-ms-input-placeholder{color:rgba(122,122,122,.3)}.select select::-ms-expand{display:none}.select select[disabled]:hover,fieldset[disabled] .select select:hover{border-color:#f5f5f5}.select select:not([multiple]){padding-right:2.5em}.select select[multiple]{height:auto;padding:0}.select select[multiple] option{padding:.5em 1em}.select:not(.is-multiple):not(.is-loading):hover::after{border-color:#363636}.select.is-white:not(:hover)::after{border-color:#fff}.select.is-white select{border-color:#fff}.select.is-white select.is-hovered,.select.is-white select:hover{border-color:#f2f2f2}.select.is-white select.is-active,.select.is-white select.is-focused,.select.is-white select:active,.select.is-white select:focus{box-shadow:0 0 0 .125em rgba(255,255,255,.25)}.select.is-black:not(:hover)::after{border-color:#0a0a0a}.select.is-black select{border-color:#0a0a0a}.select.is-black select.is-hovered,.select.is-black select:hover{border-color:#000}.select.is-black select.is-active,.select.is-black select.is-focused,.select.is-black select:active,.select.is-black select:focus{box-shadow:0 0 0 .125em rgba(10,10,10,.25)}.select.is-light:not(:hover)::after{border-color:#f5f5f5}.select.is-light select{border-color:#f5f5f5}.select.is-light select.is-hovered,.select.is-light select:hover{border-color:#e8e8e8}.select.is-light select.is-active,.select.is-light select.is-focused,.select.is-light select:active,.select.is-light select:focus{box-shadow:0 0 0 .125em rgba(245,245,245,.25)}.select.is-dark:not(:hover)::after{border-color:#363636}.select.is-dark select{border-color:#363636}.select.is-dark select.is-hovered,.select.is-dark select:hover{border-color:#292929}.select.is-dark select.is-active,.select.is-dark select.is-focused,.select.is-dark select:active,.select.is-dark select:focus{box-shadow:0 0 0 .125em rgba(54,54,54,.25)}.select.is-primary:not(:hover)::after{border-color:#00d1b2}.select.is-primary select{border-color:#00d1b2}.select.is-primary select.is-hovered,.select.is-primary select:hover{border-color:#00b89c}.select.is-primary select.is-active,.select.is-primary select.is-focused,.select.is-primary select:active,.select.is-primary select:focus{box-shadow:0 0 0 .125em rgba(0,209,178,.25)}.select.is-link:not(:hover)::after{border-color:#3273dc}.select.is-link select{border-color:#3273dc}.select.is-link select.is-hovered,.select.is-link select:hover{border-color:#2366d1}.select.is-link select.is-active,.select.is-link select.is-focused,.select.is-link select:active,.select.is-link select:focus{box-shadow:0 0 0 .125em rgba(50,115,220,.25)}.select.is-info:not(:hover)::after{border-color:#209cee}.select.is-info select{border-color:#209cee}.select.is-info select.is-hovered,.select.is-info select:hover{border-color:#118fe4}.select.is-info select.is-active,.select.is-info select.is-focused,.select.is-info select:active,.select.is-info select:focus{box-shadow:0 0 0 .125em rgba(32,156,238,.25)}.select.is-success:not(:hover)::after{border-color:#23d160}.select.is-success select{border-color:#23d160}.select.is-success select.is-hovered,.select.is-success select:hover{border-color:#20bc56}.select.is-success select.is-active,.select.is-success select.is-focused,.select.is-success select:active,.select.is-success select:focus{box-shadow:0 0 0 .125em rgba(35,209,96,.25)}.select.is-warning:not(:hover)::after{border-color:#ffdd57}.select.is-warning select{border-color:#ffdd57}.select.is-warning select.is-hovered,.select.is-warning select:hover{border-color:#ffd83d}.select.is-warning select.is-active,.select.is-warning select.is-focused,.select.is-warning select:active,.select.is-warning select:focus{box-shadow:0 0 0 .125em rgba(255,221,87,.25)}.select.is-danger:not(:hover)::after{border-color:#ff3860}.select.is-danger select{border-color:#ff3860}.select.is-danger select.is-hovered,.select.is-danger select:hover{border-color:#ff1f4b}.select.is-danger select.is-active,.select.is-danger select.is-focused,.select.is-danger select:active,.select.is-danger select:focus{box-shadow:0 0 0 .125em rgba(255,56,96,.25)}.select.is-small{border-radius:2px;font-size:.75rem}.select.is-medium{font-size:1.25rem}.select.is-large{font-size:1.5rem}.select.is-disabled::after{border-color:#7a7a7a}.select.is-fullwidth{width:100%}.select.is-fullwidth select{width:100%}.select.is-loading::after{margin-top:0;position:absolute;right:.625em;top:.625em;-webkit-transform:none;transform:none}.select.is-loading.is-small:after{font-size:.75rem}.select.is-loading.is-medium:after{font-size:1.25rem}.select.is-loading.is-large:after{font-size:1.5rem}.file{align-items:stretch;display:flex;justify-content:flex-start;position:relative}.file.is-white .file-cta{background-color:#fff;border-color:transparent;color:#0a0a0a}.file.is-white.is-hovered .file-cta,.file.is-white:hover .file-cta{background-color:#f9f9f9;border-color:transparent;color:#0a0a0a}.file.is-white.is-focused .file-cta,.file.is-white:focus .file-cta{border-color:transparent;box-shadow:0 0 .5em rgba(255,255,255,.25);color:#0a0a0a}.file.is-white.is-active .file-cta,.file.is-white:active .file-cta{background-color:#f2f2f2;border-color:transparent;color:#0a0a0a}.file.is-black .file-cta{background-color:#0a0a0a;border-color:transparent;color:#fff}.file.is-black.is-hovered .file-cta,.file.is-black:hover .file-cta{background-color:#040404;border-color:transparent;color:#fff}.file.is-black.is-focused .file-cta,.file.is-black:focus .file-cta{border-color:transparent;box-shadow:0 0 .5em rgba(10,10,10,.25);color:#fff}.file.is-black.is-active .file-cta,.file.is-black:active .file-cta{background-color:#000;border-color:transparent;color:#fff}.file.is-light .file-cta{background-color:#f5f5f5;border-color:transparent;color:#363636}.file.is-light.is-hovered .file-cta,.file.is-light:hover .file-cta{background-color:#eee;border-color:transparent;color:#363636}.file.is-light.is-focused .file-cta,.file.is-light:focus .file-cta{border-color:transparent;box-shadow:0 0 .5em rgba(245,245,245,.25);color:#363636}.file.is-light.is-active .file-cta,.file.is-light:active .file-cta{background-color:#e8e8e8;border-color:transparent;color:#363636}.file.is-dark .file-cta{background-color:#363636;border-color:transparent;color:#f5f5f5}.file.is-dark.is-hovered .file-cta,.file.is-dark:hover .file-cta{background-color:#2f2f2f;border-color:transparent;color:#f5f5f5}.file.is-dark.is-focused .file-cta,.file.is-dark:focus .file-cta{border-color:transparent;box-shadow:0 0 .5em rgba(54,54,54,.25);color:#f5f5f5}.file.is-dark.is-active .file-cta,.file.is-dark:active .file-cta{background-color:#292929;border-color:transparent;color:#f5f5f5}.file.is-primary .file-cta{background-color:#00d1b2;border-color:transparent;color:#fff}.file.is-primary.is-hovered .file-cta,.file.is-primary:hover .file-cta{background-color:#00c4a7;border-color:transparent;color:#fff}.file.is-primary.is-focused .file-cta,.file.is-primary:focus .file-cta{border-color:transparent;box-shadow:0 0 .5em rgba(0,209,178,.25);color:#fff}.file.is-primary.is-active .file-cta,.file.is-primary:active .file-cta{background-color:#00b89c;border-color:transparent;color:#fff}.file.is-link .file-cta{background-color:#3273dc;border-color:transparent;color:#fff}.file.is-link.is-hovered .file-cta,.file.is-link:hover .file-cta{background-color:#276cda;border-color:transparent;color:#fff}.file.is-link.is-focused .file-cta,.file.is-link:focus .file-cta{border-color:transparent;box-shadow:0 0 .5em rgba(50,115,220,.25);color:#fff}.file.is-link.is-active .file-cta,.file.is-link:active .file-cta{background-color:#2366d1;border-color:transparent;color:#fff}.file.is-info .file-cta{background-color:#209cee;border-color:transparent;color:#fff}.file.is-info.is-hovered .file-cta,.file.is-info:hover .file-cta{background-color:#1496ed;border-color:transparent;color:#fff}.file.is-info.is-focused .file-cta,.file.is-info:focus .file-cta{border-color:transparent;box-shadow:0 0 .5em rgba(32,156,238,.25);color:#fff}.file.is-info.is-active .file-cta,.file.is-info:active .file-cta{background-color:#118fe4;border-color:transparent;color:#fff}.file.is-success .file-cta{background-color:#23d160;border-color:transparent;color:#fff}.file.is-success.is-hovered .file-cta,.file.is-success:hover .file-cta{background-color:#22c65b;border-color:transparent;color:#fff}.file.is-success.is-focused .file-cta,.file.is-success:focus .file-cta{border-color:transparent;box-shadow:0 0 .5em rgba(35,209,96,.25);color:#fff}.file.is-success.is-active .file-cta,.file.is-success:active .file-cta{background-color:#20bc56;border-color:transparent;color:#fff}.file.is-warning .file-cta{background-color:#ffdd57;border-color:transparent;color:rgba(0,0,0,.7)}.file.is-warning.is-hovered .file-cta,.file.is-warning:hover .file-cta{background-color:#ffdb4a;border-color:transparent;color:rgba(0,0,0,.7)}.file.is-warning.is-focused .file-cta,.file.is-warning:focus .file-cta{border-color:transparent;box-shadow:0 0 .5em rgba(255,221,87,.25);color:rgba(0,0,0,.7)}.file.is-warning.is-active .file-cta,.file.is-warning:active .file-cta{background-color:#ffd83d;border-color:transparent;color:rgba(0,0,0,.7)}.file.is-danger .file-cta{background-color:#ff3860;border-color:transparent;color:#fff}.file.is-danger.is-hovered .file-cta,.file.is-danger:hover .file-cta{background-color:#ff2b56;border-color:transparent;color:#fff}.file.is-danger.is-focused .file-cta,.file.is-danger:focus .file-cta{border-color:transparent;box-shadow:0 0 .5em rgba(255,56,96,.25);color:#fff}.file.is-danger.is-active .file-cta,.file.is-danger:active .file-cta{background-color:#ff1f4b;border-color:transparent;color:#fff}.file.is-small{font-size:.75rem}.file.is-medium{font-size:1.25rem}.file.is-medium .file-icon .fa{font-size:21px}.file.is-large{font-size:1.5rem}.file.is-large .file-icon .fa{font-size:28px}.file.has-name .file-cta{border-bottom-right-radius:0;border-top-right-radius:0}.file.has-name .file-name{border-bottom-left-radius:0;border-top-left-radius:0}.file.has-name.is-empty .file-cta{border-radius:4px}.file.has-name.is-empty .file-name{display:none}.file.is-boxed .file-label{flex-direction:column}.file.is-boxed .file-cta{flex-direction:column;height:auto;padding:1em 3em}.file.is-boxed .file-name{border-width:0 1px 1px}.file.is-boxed .file-icon{height:1.5em;width:1.5em}.file.is-boxed .file-icon .fa{font-size:21px}.file.is-boxed.is-small .file-icon .fa{font-size:14px}.file.is-boxed.is-medium .file-icon .fa{font-size:28px}.file.is-boxed.is-large .file-icon .fa{font-size:35px}.file.is-boxed.has-name .file-cta{border-radius:4px 4px 0 0}.file.is-boxed.has-name .file-name{border-radius:0 0 4px 4px;border-width:0 1px 1px}.file.is-centered{justify-content:center}.file.is-fullwidth .file-label{width:100%}.file.is-fullwidth .file-name{flex-grow:1;max-width:none}.file.is-right{justify-content:flex-end}.file.is-right .file-cta{border-radius:0 4px 4px 0}.file.is-right .file-name{border-radius:4px 0 0 4px;border-width:1px 0 1px 1px;order:-1}.file-label{align-items:stretch;display:flex;cursor:pointer;justify-content:flex-start;overflow:hidden;position:relative}.file-label:hover .file-cta{background-color:#eee;color:#363636}.file-label:hover .file-name{border-color:#d5d5d5}.file-label:active .file-cta{background-color:#e8e8e8;color:#363636}.file-label:active .file-name{border-color:#cfcfcf}.file-input{height:100%;left:0;opacity:0;outline:0;position:absolute;top:0;width:100%}.file-cta,.file-name{border-color:#dbdbdb;border-radius:4px;font-size:1em;padding-left:1em;padding-right:1em;white-space:nowrap}.file-cta{background-color:#f5f5f5;color:#4a4a4a}.file-name{border-color:#dbdbdb;border-style:solid;border-width:1px 1px 1px 0;display:block;max-width:16em;overflow:hidden;text-align:left;text-overflow:ellipsis}.file-icon{align-items:center;display:flex;height:1em;justify-content:center;margin-right:.5em;width:1em}.file-icon .fa{font-size:14px}.label{color:#363636;display:block;font-size:1rem;font-weight:700}.label:not(:last-child){margin-bottom:.5em}.label.is-small{font-size:.75rem}.label.is-medium{font-size:1.25rem}.label.is-large{font-size:1.5rem}.help{display:block;font-size:.75rem;margin-top:.25rem}.help.is-white{color:#fff}.help.is-black{color:#0a0a0a}.help.is-light{color:#f5f5f5}.help.is-dark{color:#363636}.help.is-primary{color:#00d1b2}.help.is-link{color:#3273dc}.help.is-info{color:#209cee}.help.is-success{color:#23d160}.help.is-warning{color:#ffdd57}.help.is-danger{color:#ff3860}.field:not(:last-child){margin-bottom:.75rem}.field.has-addons{display:flex;justify-content:flex-start}.field.has-addons .control:not(:last-child){margin-right:-1px}.field.has-addons .control:not(:first-child):not(:last-child) .button,.field.has-addons .control:not(:first-child):not(:last-child) .input,.field.has-addons .control:not(:first-child):not(:last-child) .select select{border-radius:0}.field.has-addons .control:first-child:not(:only-child) .button,.field.has-addons .control:first-child:not(:only-child) .input,.field.has-addons .control:first-child:not(:only-child) .select select{border-bottom-right-radius:0;border-top-right-radius:0}.field.has-addons .control:last-child:not(:only-child) .button,.field.has-addons .control:last-child:not(:only-child) .input,.field.has-addons .control:last-child:not(:only-child) .select select{border-bottom-left-radius:0;border-top-left-radius:0}.field.has-addons .control .button:not([disabled]).is-hovered,.field.has-addons .control .button:not([disabled]):hover,.field.has-addons .control .input:not([disabled]).is-hovered,.field.has-addons .control .input:not([disabled]):hover,.field.has-addons .control .select select:not([disabled]).is-hovered,.field.has-addons .control .select select:not([disabled]):hover{z-index:2}.field.has-addons .control .button:not([disabled]).is-active,.field.has-addons .control .button:not([disabled]).is-focused,.field.has-addons .control .button:not([disabled]):active,.field.has-addons .control .button:not([disabled]):focus,.field.has-addons .control .input:not([disabled]).is-active,.field.has-addons .control .input:not([disabled]).is-focused,.field.has-addons .control .input:not([disabled]):active,.field.has-addons .control .input:not([disabled]):focus,.field.has-addons .control .select select:not([disabled]).is-active,.field.has-addons .control .select select:not([disabled]).is-focused,.field.has-addons .control .select select:not([disabled]):active,.field.has-addons .control .select select:not([disabled]):focus{z-index:3}.field.has-addons .control .button:not([disabled]).is-active:hover,.field.has-addons .control .button:not([disabled]).is-focused:hover,.field.has-addons .control .button:not([disabled]):active:hover,.field.has-addons .control .button:not([disabled]):focus:hover,.field.has-addons .control .input:not([disabled]).is-active:hover,.field.has-addons .control .input:not([disabled]).is-focused:hover,.field.has-addons .control .input:not([disabled]):active:hover,.field.has-addons .control .input:not([disabled]):focus:hover,.field.has-addons .control .select select:not([disabled]).is-active:hover,.field.has-addons .control .select select:not([disabled]).is-focused:hover,.field.has-addons .control .select select:not([disabled]):active:hover,.field.has-addons .control .select select:not([disabled]):focus:hover{z-index:4}.field.has-addons .control.is-expanded{flex-grow:1}.field.has-addons.has-addons-centered{justify-content:center}.field.has-addons.has-addons-right{justify-content:flex-end}.field.has-addons.has-addons-fullwidth .control{flex-grow:1;flex-shrink:0}.field.is-grouped{display:flex;justify-content:flex-start}.field.is-grouped>.control{flex-shrink:0}.field.is-grouped>.control:not(:last-child){margin-bottom:0;margin-right:.75rem}.field.is-grouped>.control.is-expanded{flex-grow:1;flex-shrink:1}.field.is-grouped.is-grouped-centered{justify-content:center}.field.is-grouped.is-grouped-right{justify-content:flex-end}.field.is-grouped.is-grouped-multiline{flex-wrap:wrap}.field.is-grouped.is-grouped-multiline>.control:last-child,.field.is-grouped.is-grouped-multiline>.control:not(:last-child){margin-bottom:.75rem}.field.is-grouped.is-grouped-multiline:last-child{margin-bottom:-.75rem}.field.is-grouped.is-grouped-multiline:not(:last-child){margin-bottom:0}@media screen and (min-width:769px),print{.field.is-horizontal{display:flex}}.field-label .label{font-size:inherit}@media screen and (max-width:768px){.field-label{margin-bottom:.5rem}}@media screen and (min-width:769px),print{.field-label{flex-basis:0;flex-grow:1;flex-shrink:0;margin-right:1.5rem;text-align:right}.field-label.is-small{font-size:.75rem;padding-top:.375em}.field-label.is-normal{padding-top:.375em}.field-label.is-medium{font-size:1.25rem;padding-top:.375em}.field-label.is-large{font-size:1.5rem;padding-top:.375em}}.field-body .field .field{margin-bottom:0}@media screen and (min-width:769px),print{.field-body{display:flex;flex-basis:0;flex-grow:5;flex-shrink:1}.field-body .field{margin-bottom:0}.field-body>.field{flex-shrink:1}.field-body>.field:not(.is-narrow){flex-grow:1}.field-body>.field:not(:last-child){margin-right:.75rem}}.control{box-sizing:border-box;clear:both;font-size:1rem;position:relative;text-align:left}.control.has-icons-left .input:focus~.icon,.control.has-icons-left .select:focus~.icon,.control.has-icons-right .input:focus~.icon,.control.has-icons-right .select:focus~.icon{color:#7a7a7a}.control.has-icons-left .input.is-small~.icon,.control.has-icons-left .select.is-small~.icon,.control.has-icons-right .input.is-small~.icon,.control.has-icons-right .select.is-small~.icon{font-size:.75rem}.control.has-icons-left .input.is-medium~.icon,.control.has-icons-left .select.is-medium~.icon,.control.has-icons-right .input.is-medium~.icon,.control.has-icons-right .select.is-medium~.icon{font-size:1.25rem}.control.has-icons-left .input.is-large~.icon,.control.has-icons-left .select.is-large~.icon,.control.has-icons-right .input.is-large~.icon,.control.has-icons-right .select.is-large~.icon{font-size:1.5rem}.control.has-icons-left .icon,.control.has-icons-right .icon{color:#dbdbdb;height:2.25em;pointer-events:none;position:absolute;top:0;width:2.25em;z-index:4}.control.has-icons-left .input,.control.has-icons-left .select select{padding-left:2.25em}.control.has-icons-left .icon.is-left{left:0}.control.has-icons-right .input,.control.has-icons-right .select select{padding-right:2.25em}.control.has-icons-right .icon.is-right{right:0}.control.is-loading::after{position:absolute!important;right:.625em;top:.625em;z-index:4}.control.is-loading.is-small:after{font-size:.75rem}.control.is-loading.is-medium:after{font-size:1.25rem}.control.is-loading.is-large:after{font-size:1.5rem}.icon{align-items:center;display:inline-flex;justify-content:center;height:1.5rem;width:1.5rem}.icon.is-small{height:1rem;width:1rem}.icon.is-medium{height:2rem;width:2rem}.icon.is-large{height:3rem;width:3rem}.image{display:block;position:relative}.image img{display:block;height:auto;width:100%}.image img.is-rounded{border-radius:290486px}.image.is-16by9 .has-ratio,.image.is-16by9 img,.image.is-1by1 .has-ratio,.image.is-1by1 img,.image.is-1by2 .has-ratio,.image.is-1by2 img,.image.is-1by3 .has-ratio,.image.is-1by3 img,.image.is-2by1 .has-ratio,.image.is-2by1 img,.image.is-2by3 .has-ratio,.image.is-2by3 img,.image.is-3by1 .has-ratio,.image.is-3by1 img,.image.is-3by2 .has-ratio,.image.is-3by2 img,.image.is-3by4 .has-ratio,.image.is-3by4 img,.image.is-3by5 .has-ratio,.image.is-3by5 img,.image.is-4by3 .has-ratio,.image.is-4by3 img,.image.is-4by5 .has-ratio,.image.is-4by5 img,.image.is-5by3 .has-ratio,.image.is-5by3 img,.image.is-5by4 .has-ratio,.image.is-5by4 img,.image.is-9by16 .has-ratio,.image.is-9by16 img,.image.is-square .has-ratio,.image.is-square img{height:100%;width:100%}.image.is-1by1,.image.is-square{padding-top:100%}.image.is-5by4{padding-top:80%}.image.is-4by3{padding-top:75%}.image.is-3by2{padding-top:66.6666%}.image.is-5by3{padding-top:60%}.image.is-16by9{padding-top:56.25%}.image.is-2by1{padding-top:50%}.image.is-3by1{padding-top:33.3333%}.image.is-4by5{padding-top:125%}.image.is-3by4{padding-top:133.3333%}.image.is-2by3{padding-top:150%}.image.is-3by5{padding-top:166.6666%}.image.is-9by16{padding-top:177.7777%}.image.is-1by2{padding-top:200%}.image.is-1by3{padding-top:300%}.image.is-16x16{height:16px;width:16px}.image.is-24x24{height:24px;width:24px}.image.is-32x32{height:32px;width:32px}.image.is-48x48{height:48px;width:48px}.image.is-64x64{height:64px;width:64px}.image.is-96x96{height:96px;width:96px}.image.is-128x128{height:128px;width:128px}.notification{background-color:#f5f5f5;border-radius:4px;padding:1.25rem 2.5rem 1.25rem 1.5rem;position:relative}.notification a:not(.button):not(.dropdown-item){color:currentColor;text-decoration:underline}.notification strong{color:currentColor}.notification code,.notification pre{background:#fff}.notification pre code{background:0 0}.notification>.delete{position:absolute;right:.5rem;top:.5rem}.notification .content,.notification .subtitle,.notification .title{color:currentColor}.notification.is-white{background-color:#fff;color:#0a0a0a}.notification.is-black{background-color:#0a0a0a;color:#fff}.notification.is-light{background-color:#f5f5f5;color:#363636}.notification.is-dark{background-color:#363636;color:#f5f5f5}.notification.is-primary{background-color:#00d1b2;color:#fff}.notification.is-link{background-color:#3273dc;color:#fff}.notification.is-info{background-color:#209cee;color:#fff}.notification.is-success{background-color:#23d160;color:#fff}.notification.is-warning{background-color:#ffdd57;color:rgba(0,0,0,.7)}.notification.is-danger{background-color:#ff3860;color:#fff}.progress{-moz-appearance:none;-webkit-appearance:none;border:none;border-radius:290486px;display:block;height:1rem;overflow:hidden;padding:0;width:100%}.progress::-webkit-progress-bar{background-color:#dbdbdb}.progress::-webkit-progress-value{background-color:#4a4a4a}.progress::-moz-progress-bar{background-color:#4a4a4a}.progress::-ms-fill{background-color:#4a4a4a;border:none}.progress:indeterminate{-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:moveIndeterminate;animation-name:moveIndeterminate;-webkit-animation-timing-function:linear;animation-timing-function:linear;background-color:#dbdbdb;background-image:linear-gradient(to right,#4a4a4a 30%,#dbdbdb 30%);background-position:top left;background-repeat:no-repeat;background-size:150% 150%}.progress:indeterminate::-webkit-progress-bar{background-color:transparent}.progress:indeterminate::-moz-progress-bar{background-color:transparent}.progress.is-white::-webkit-progress-value{background-color:#fff}.progress.is-white::-moz-progress-bar{background-color:#fff}.progress.is-white::-ms-fill{background-color:#fff}.progress.is-white:indeterminate{background-image:linear-gradient(to right,#fff 30%,#dbdbdb 30%)}.progress.is-black::-webkit-progress-value{background-color:#0a0a0a}.progress.is-black::-moz-progress-bar{background-color:#0a0a0a}.progress.is-black::-ms-fill{background-color:#0a0a0a}.progress.is-black:indeterminate{background-image:linear-gradient(to right,#0a0a0a 30%,#dbdbdb 30%)}.progress.is-light::-webkit-progress-value{background-color:#f5f5f5}.progress.is-light::-moz-progress-bar{background-color:#f5f5f5}.progress.is-light::-ms-fill{background-color:#f5f5f5}.progress.is-light:indeterminate{background-image:linear-gradient(to right,#f5f5f5 30%,#dbdbdb 30%)}.progress.is-dark::-webkit-progress-value{background-color:#363636}.progress.is-dark::-moz-progress-bar{background-color:#363636}.progress.is-dark::-ms-fill{background-color:#363636}.progress.is-dark:indeterminate{background-image:linear-gradient(to right,#363636 30%,#dbdbdb 30%)}.progress.is-primary::-webkit-progress-value{background-color:#00d1b2}.progress.is-primary::-moz-progress-bar{background-color:#00d1b2}.progress.is-primary::-ms-fill{background-color:#00d1b2}.progress.is-primary:indeterminate{background-image:linear-gradient(to right,#00d1b2 30%,#dbdbdb 30%)}.progress.is-link::-webkit-progress-value{background-color:#3273dc}.progress.is-link::-moz-progress-bar{background-color:#3273dc}.progress.is-link::-ms-fill{background-color:#3273dc}.progress.is-link:indeterminate{background-image:linear-gradient(to right,#3273dc 30%,#dbdbdb 30%)}.progress.is-info::-webkit-progress-value{background-color:#209cee}.progress.is-info::-moz-progress-bar{background-color:#209cee}.progress.is-info::-ms-fill{background-color:#209cee}.progress.is-info:indeterminate{background-image:linear-gradient(to right,#209cee 30%,#dbdbdb 30%)}.progress.is-success::-webkit-progress-value{background-color:#23d160}.progress.is-success::-moz-progress-bar{background-color:#23d160}.progress.is-success::-ms-fill{background-color:#23d160}.progress.is-success:indeterminate{background-image:linear-gradient(to right,#23d160 30%,#dbdbdb 30%)}.progress.is-warning::-webkit-progress-value{background-color:#ffdd57}.progress.is-warning::-moz-progress-bar{background-color:#ffdd57}.progress.is-warning::-ms-fill{background-color:#ffdd57}.progress.is-warning:indeterminate{background-image:linear-gradient(to right,#ffdd57 30%,#dbdbdb 30%)}.progress.is-danger::-webkit-progress-value{background-color:#ff3860}.progress.is-danger::-moz-progress-bar{background-color:#ff3860}.progress.is-danger::-ms-fill{background-color:#ff3860}.progress.is-danger:indeterminate{background-image:linear-gradient(to right,#ff3860 30%,#dbdbdb 30%)}.progress.is-small{height:.75rem}.progress.is-medium{height:1.25rem}.progress.is-large{height:1.5rem}@-webkit-keyframes moveIndeterminate{from{background-position:200% 0}to{background-position:-200% 0}}@keyframes moveIndeterminate{from{background-position:200% 0}to{background-position:-200% 0}}.table{background-color:#fff;color:#363636}.table td,.table th{border:1px solid #dbdbdb;border-width:0 0 1px;padding:.5em .75em;vertical-align:top}.table td.is-white,.table th.is-white{background-color:#fff;border-color:#fff;color:#0a0a0a}.table td.is-black,.table th.is-black{background-color:#0a0a0a;border-color:#0a0a0a;color:#fff}.table td.is-light,.table th.is-light{background-color:#f5f5f5;border-color:#f5f5f5;color:#363636}.table td.is-dark,.table th.is-dark{background-color:#363636;border-color:#363636;color:#f5f5f5}.table td.is-primary,.table th.is-primary{background-color:#00d1b2;border-color:#00d1b2;color:#fff}.table td.is-link,.table th.is-link{background-color:#3273dc;border-color:#3273dc;color:#fff}.table td.is-info,.table th.is-info{background-color:#209cee;border-color:#209cee;color:#fff}.table td.is-success,.table th.is-success{background-color:#23d160;border-color:#23d160;color:#fff}.table td.is-warning,.table th.is-warning{background-color:#ffdd57;border-color:#ffdd57;color:rgba(0,0,0,.7)}.table td.is-danger,.table th.is-danger{background-color:#ff3860;border-color:#ff3860;color:#fff}.table td.is-narrow,.table th.is-narrow{white-space:nowrap;width:1%}.table td.is-selected,.table th.is-selected{background-color:#00d1b2;color:#fff}.table td.is-selected a,.table td.is-selected strong,.table th.is-selected a,.table th.is-selected strong{color:currentColor}.table th{color:#363636;text-align:left}.table tr.is-selected{background-color:#00d1b2;color:#fff}.table tr.is-selected a,.table tr.is-selected strong{color:currentColor}.table tr.is-selected td,.table tr.is-selected th{border-color:#fff;color:currentColor}.table thead{background-color:transparent}.table thead td,.table thead th{border-width:0 0 2px;color:#363636}.table tfoot{background-color:transparent}.table tfoot td,.table tfoot th{border-width:2px 0 0;color:#363636}.table tbody{background-color:transparent}.table tbody tr:last-child td,.table tbody tr:last-child th{border-bottom-width:0}.table.is-bordered td,.table.is-bordered th{border-width:1px}.table.is-bordered tr:last-child td,.table.is-bordered tr:last-child th{border-bottom-width:1px}.table.is-fullwidth{width:100%}.table.is-hoverable tbody tr:not(.is-selected):hover{background-color:#fafafa}.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover{background-color:#fafafa}.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover:nth-child(even){background-color:#f5f5f5}.table.is-narrow td,.table.is-narrow th{padding:.25em .5em}.table.is-striped tbody tr:not(.is-selected):nth-child(even){background-color:#fafafa}.table-container{-webkit-overflow-scrolling:touch;overflow:auto;overflow-y:hidden;max-width:100%}.tags{align-items:center;display:flex;flex-wrap:wrap;justify-content:flex-start}.tags .tag{margin-bottom:.5rem}.tags .tag:not(:last-child){margin-right:.5rem}.tags:last-child{margin-bottom:-.5rem}.tags:not(:last-child){margin-bottom:1rem}.tags.are-medium .tag:not(.is-normal):not(.is-large){font-size:1rem}.tags.are-large .tag:not(.is-normal):not(.is-medium){font-size:1.25rem}.tags.has-addons .tag{margin-right:0}.tags.has-addons .tag:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0}.tags.has-addons .tag:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0}.tags.is-centered{justify-content:center}.tags.is-centered .tag{margin-right:.25rem;margin-left:.25rem}.tags.is-right{justify-content:flex-end}.tags.is-right .tag:not(:first-child){margin-left:.5rem}.tags.is-right .tag:not(:last-child){margin-right:0}.tags.has-addons .tag{margin-right:0}.tags.has-addons .tag:not(:first-child){margin-left:0;border-bottom-left-radius:0;border-top-left-radius:0}.tags.has-addons .tag:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0}.tag:not(body){align-items:center;background-color:#f5f5f5;border-radius:4px;color:#4a4a4a;display:inline-flex;font-size:.75rem;height:2em;justify-content:center;line-height:1.5;padding-left:.75em;padding-right:.75em;white-space:nowrap}.tag:not(body) .delete{margin-left:.25rem;margin-right:-.375rem}.tag:not(body).is-white{background-color:#fff;color:#0a0a0a}.tag:not(body).is-black{background-color:#0a0a0a;color:#fff}.tag:not(body).is-light{background-color:#f5f5f5;color:#363636}.tag:not(body).is-dark{background-color:#363636;color:#f5f5f5}.tag:not(body).is-primary{background-color:#00d1b2;color:#fff}.tag:not(body).is-link{background-color:#3273dc;color:#fff}.tag:not(body).is-info{background-color:#209cee;color:#fff}.tag:not(body).is-success{background-color:#23d160;color:#fff}.tag:not(body).is-warning{background-color:#ffdd57;color:rgba(0,0,0,.7)}.tag:not(body).is-danger{background-color:#ff3860;color:#fff}.tag:not(body).is-normal{font-size:.75rem}.tag:not(body).is-medium{font-size:1rem}.tag:not(body).is-large{font-size:1.25rem}.tag:not(body) .icon:first-child:not(:last-child){margin-left:-.375em;margin-right:.1875em}.tag:not(body) .icon:last-child:not(:first-child){margin-left:.1875em;margin-right:-.375em}.tag:not(body) .icon:first-child:last-child{margin-left:-.375em;margin-right:-.375em}.tag:not(body).is-delete{margin-left:1px;padding:0;position:relative;width:2em}.tag:not(body).is-delete::after,.tag:not(body).is-delete::before{background-color:currentColor;content:\"\";display:block;left:50%;position:absolute;top:50%;-webkit-transform:translateX(-50%) translateY(-50%) rotate(45deg);transform:translateX(-50%) translateY(-50%) rotate(45deg);-webkit-transform-origin:center center;transform-origin:center center}.tag:not(body).is-delete::before{height:1px;width:50%}.tag:not(body).is-delete::after{height:50%;width:1px}.tag:not(body).is-delete:focus,.tag:not(body).is-delete:hover{background-color:#e8e8e8}.tag:not(body).is-delete:active{background-color:#dbdbdb}.tag:not(body).is-rounded{border-radius:290486px}a.tag:hover{text-decoration:underline}.subtitle,.title{word-break:break-word}.subtitle em,.subtitle span,.title em,.title span{font-weight:inherit}.subtitle sub,.title sub{font-size:.75em}.subtitle sup,.title sup{font-size:.75em}.subtitle .tag,.title .tag{vertical-align:middle}.title{color:#363636;font-size:2rem;font-weight:600;line-height:1.125}.title strong{color:inherit;font-weight:inherit}.title+.highlight{margin-top:-.75rem}.title:not(.is-spaced)+.subtitle{margin-top:-1.25rem}.title.is-1{font-size:3rem}.title.is-2{font-size:2.5rem}.title.is-3{font-size:2rem}.title.is-4{font-size:1.5rem}.title.is-5{font-size:1.25rem}.title.is-6{font-size:1rem}.title.is-7{font-size:.75rem}.subtitle{color:#4a4a4a;font-size:1.25rem;font-weight:400;line-height:1.25}.subtitle strong{color:#363636;font-weight:600}.subtitle:not(.is-spaced)+.title{margin-top:-1.25rem}.subtitle.is-1{font-size:3rem}.subtitle.is-2{font-size:2.5rem}.subtitle.is-3{font-size:2rem}.subtitle.is-4{font-size:1.5rem}.subtitle.is-5{font-size:1.25rem}.subtitle.is-6{font-size:1rem}.subtitle.is-7{font-size:.75rem}.heading{display:block;font-size:11px;letter-spacing:1px;margin-bottom:5px;text-transform:uppercase}.highlight{font-weight:400;max-width:100%;overflow:hidden;padding:0}.highlight pre{overflow:auto;max-width:100%}.number{align-items:center;background-color:#f5f5f5;border-radius:290486px;display:inline-flex;font-size:1.25rem;height:2em;justify-content:center;margin-right:1.5rem;min-width:2.5em;padding:.25rem .5rem;text-align:center;vertical-align:top}.breadcrumb{font-size:1rem;white-space:nowrap}.breadcrumb a{align-items:center;color:#3273dc;display:flex;justify-content:center;padding:0 .75em}.breadcrumb a:hover{color:#363636}.breadcrumb li{align-items:center;display:flex}.breadcrumb li:first-child a{padding-left:0}.breadcrumb li.is-active a{color:#363636;cursor:default;pointer-events:none}.breadcrumb li+li::before{color:#b5b5b5;content:\"\\0002f\"}.breadcrumb ol,.breadcrumb ul{align-items:flex-start;display:flex;flex-wrap:wrap;justify-content:flex-start}.breadcrumb .icon:first-child{margin-right:.5em}.breadcrumb .icon:last-child{margin-left:.5em}.breadcrumb.is-centered ol,.breadcrumb.is-centered ul{justify-content:center}.breadcrumb.is-right ol,.breadcrumb.is-right ul{justify-content:flex-end}.breadcrumb.is-small{font-size:.75rem}.breadcrumb.is-medium{font-size:1.25rem}.breadcrumb.is-large{font-size:1.5rem}.breadcrumb.has-arrow-separator li+li::before{content:\"\\02192\"}.breadcrumb.has-bullet-separator li+li::before{content:\"\\02022\"}.breadcrumb.has-dot-separator li+li::before{content:\"\\000b7\"}.breadcrumb.has-succeeds-separator li+li::before{content:\"\\0227B\"}.card{background-color:#fff;box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);color:#4a4a4a;max-width:100%;position:relative}.card-header{background-color:transparent;align-items:stretch;box-shadow:0 1px 2px rgba(10,10,10,.1);display:flex}.card-header-title{align-items:center;color:#363636;display:flex;flex-grow:1;font-weight:700;padding:.75rem}.card-header-title.is-centered{justify-content:center}.card-header-icon{align-items:center;cursor:pointer;display:flex;justify-content:center;padding:.75rem}.card-image{display:block;position:relative}.card-content{background-color:transparent;padding:1.5rem}.card-footer{background-color:transparent;border-top:1px solid #dbdbdb;align-items:stretch;display:flex}.card-footer-item{align-items:center;display:flex;flex-basis:0;flex-grow:1;flex-shrink:0;justify-content:center;padding:.75rem}.card-footer-item:not(:last-child){border-right:1px solid #dbdbdb}.card .media:not(:last-child){margin-bottom:.75rem}.dropdown{display:inline-flex;position:relative;vertical-align:top}.dropdown.is-active .dropdown-menu,.dropdown.is-hoverable:hover .dropdown-menu{display:block}.dropdown.is-right .dropdown-menu{left:auto;right:0}.dropdown.is-up .dropdown-menu{bottom:100%;padding-bottom:4px;padding-top:initial;top:auto}.dropdown-menu{display:none;left:0;min-width:12rem;padding-top:4px;position:absolute;top:100%;z-index:20}.dropdown-content{background-color:#fff;border-radius:4px;box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);padding-bottom:.5rem;padding-top:.5rem}.dropdown-item{color:#4a4a4a;display:block;font-size:.875rem;line-height:1.5;padding:.375rem 1rem;position:relative}a.dropdown-item,button.dropdown-item{padding-right:3rem;text-align:left;white-space:nowrap;width:100%}a.dropdown-item:hover,button.dropdown-item:hover{background-color:#f5f5f5;color:#0a0a0a}a.dropdown-item.is-active,button.dropdown-item.is-active{background-color:#3273dc;color:#fff}.dropdown-divider{background-color:#dbdbdb;border:none;display:block;height:1px;margin:.5rem 0}.level{align-items:center;justify-content:space-between}.level code{border-radius:4px}.level img{display:inline-block;vertical-align:top}.level.is-mobile{display:flex}.level.is-mobile .level-left,.level.is-mobile .level-right{display:flex}.level.is-mobile .level-left+.level-right{margin-top:0}.level.is-mobile .level-item:not(:last-child){margin-bottom:0;margin-right:.75rem}.level.is-mobile .level-item:not(.is-narrow){flex-grow:1}@media screen and (min-width:769px),print{.level{display:flex}.level>.level-item:not(.is-narrow){flex-grow:1}}.level-item{align-items:center;display:flex;flex-basis:auto;flex-grow:0;flex-shrink:0;justify-content:center}.level-item .subtitle,.level-item .title{margin-bottom:0}@media screen and (max-width:768px){.level-item:not(:last-child){margin-bottom:.75rem}}.level-left,.level-right{flex-basis:auto;flex-grow:0;flex-shrink:0}.level-left .level-item.is-flexible,.level-right .level-item.is-flexible{flex-grow:1}@media screen and (min-width:769px),print{.level-left .level-item:not(:last-child),.level-right .level-item:not(:last-child){margin-right:.75rem}}.level-left{align-items:center;justify-content:flex-start}@media screen and (max-width:768px){.level-left+.level-right{margin-top:1.5rem}}@media screen and (min-width:769px),print{.level-left{display:flex}}.level-right{align-items:center;justify-content:flex-end}@media screen and (min-width:769px),print{.level-right{display:flex}}.list{background-color:#fff;border-radius:4px;box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1)}.list-item{display:block;padding:.5em 1em}.list-item:not(a){color:#4a4a4a}.list-item:first-child{border-top-left-radius:4px;border-top-right-radius:4px}.list-item:last-child{border-top-left-radius:4px;border-top-right-radius:4px}.list-item:not(:last-child){border-bottom:1px solid #dbdbdb}.list-item.is-active{background-color:#3273dc;color:#fff}a.list-item{background-color:#f5f5f5;cursor:pointer}.media{align-items:flex-start;display:flex;text-align:left}.media .content:not(:last-child){margin-bottom:.75rem}.media .media{border-top:1px solid rgba(219,219,219,.5);display:flex;padding-top:.75rem}.media .media .content:not(:last-child),.media .media .control:not(:last-child){margin-bottom:.5rem}.media .media .media{padding-top:.5rem}.media .media .media+.media{margin-top:.5rem}.media+.media{border-top:1px solid rgba(219,219,219,.5);margin-top:1rem;padding-top:1rem}.media.is-large+.media{margin-top:1.5rem;padding-top:1.5rem}.media-left,.media-right{flex-basis:auto;flex-grow:0;flex-shrink:0}.media-left{margin-right:1rem}.media-right{margin-left:1rem}.media-content{flex-basis:auto;flex-grow:1;flex-shrink:1;text-align:left}@media screen and (max-width:768px){.media-content{overflow-x:auto}}.menu{font-size:1rem}.menu.is-small{font-size:.75rem}.menu.is-medium{font-size:1.25rem}.menu.is-large{font-size:1.5rem}.menu-list{line-height:1.25}.menu-list a{border-radius:2px;color:#4a4a4a;display:block;padding:.5em .75em}.menu-list a:hover{background-color:#f5f5f5;color:#363636}.menu-list a.is-active{background-color:#3273dc;color:#fff}.menu-list li ul{border-left:1px solid #dbdbdb;margin:.75em;padding-left:.75em}.menu-label{color:#7a7a7a;font-size:.75em;letter-spacing:.1em;text-transform:uppercase}.menu-label:not(:first-child){margin-top:1em}.menu-label:not(:last-child){margin-bottom:1em}.message{background-color:#f5f5f5;border-radius:4px;font-size:1rem}.message strong{color:currentColor}.message a:not(.button):not(.tag):not(.dropdown-item){color:currentColor;text-decoration:underline}.message.is-small{font-size:.75rem}.message.is-medium{font-size:1.25rem}.message.is-large{font-size:1.5rem}.message.is-white{background-color:#fff}.message.is-white .message-header{background-color:#fff;color:#0a0a0a}.message.is-white .message-body{border-color:#fff;color:#4d4d4d}.message.is-black{background-color:#fafafa}.message.is-black .message-header{background-color:#0a0a0a;color:#fff}.message.is-black .message-body{border-color:#0a0a0a;color:#090909}.message.is-light{background-color:#fafafa}.message.is-light .message-header{background-color:#f5f5f5;color:#363636}.message.is-light .message-body{border-color:#f5f5f5;color:#505050}.message.is-dark{background-color:#fafafa}.message.is-dark .message-header{background-color:#363636;color:#f5f5f5}.message.is-dark .message-body{border-color:#363636;color:#2a2a2a}.message.is-primary{background-color:#f5fffd}.message.is-primary .message-header{background-color:#00d1b2;color:#fff}.message.is-primary .message-body{border-color:#00d1b2;color:#021310}.message.is-link{background-color:#f6f9fe}.message.is-link .message-header{background-color:#3273dc;color:#fff}.message.is-link .message-body{border-color:#3273dc;color:#22509a}.message.is-info{background-color:#f6fbfe}.message.is-info .message-header{background-color:#209cee;color:#fff}.message.is-info .message-body{border-color:#209cee;color:#12537e}.message.is-success{background-color:#f6fef9}.message.is-success .message-header{background-color:#23d160;color:#fff}.message.is-success .message-body{border-color:#23d160;color:#0e301a}.message.is-warning{background-color:#fffdf5}.message.is-warning .message-header{background-color:#ffdd57;color:rgba(0,0,0,.7)}.message.is-warning .message-body{border-color:#ffdd57;color:#3b3108}.message.is-danger{background-color:#fff5f7}.message.is-danger .message-header{background-color:#ff3860;color:#fff}.message.is-danger .message-body{border-color:#ff3860;color:#cd0930}.message-header{align-items:center;background-color:#4a4a4a;border-radius:4px 4px 0 0;color:#fff;display:flex;font-weight:700;justify-content:space-between;line-height:1.25;padding:.75em 1em;position:relative}.message-header .delete{flex-grow:0;flex-shrink:0;margin-left:.75em}.message-header+.message-body{border-width:0;border-top-left-radius:0;border-top-right-radius:0}.message-body{border-color:#dbdbdb;border-radius:4px;border-style:solid;border-width:0 0 0 4px;color:#4a4a4a;padding:1.25em 1.5em}.message-body code,.message-body pre{background-color:#fff}.message-body pre code{background-color:transparent}.modal{align-items:center;display:none;flex-direction:column;justify-content:center;overflow:hidden;position:fixed;z-index:40}.modal.is-active{display:flex}.modal-background{background-color:rgba(10,10,10,.86)}.modal-card,.modal-content{margin:0 20px;max-height:calc(100vh - 160px);overflow:auto;position:relative;width:100%}@media screen and (min-width:769px),print{.modal-card,.modal-content{margin:0 auto;max-height:calc(100vh - 40px);width:640px}}.modal-close{background:0 0;height:40px;position:fixed;right:20px;top:20px;width:40px}.modal-card{display:flex;flex-direction:column;max-height:calc(100vh - 40px);overflow:hidden;-ms-overflow-y:visible}.modal-card-foot,.modal-card-head{align-items:center;background-color:#f5f5f5;display:flex;flex-shrink:0;justify-content:flex-start;padding:20px;position:relative}.modal-card-head{border-bottom:1px solid #dbdbdb;border-top-left-radius:6px;border-top-right-radius:6px}.modal-card-title{color:#363636;flex-grow:1;flex-shrink:0;font-size:1.5rem;line-height:1}.modal-card-foot{border-bottom-left-radius:6px;border-bottom-right-radius:6px;border-top:1px solid #dbdbdb}.modal-card-foot .button:not(:last-child){margin-right:10px}.modal-card-body{-webkit-overflow-scrolling:touch;background-color:#fff;flex-grow:1;flex-shrink:1;overflow:auto;padding:20px}.navbar{background-color:#fff;min-height:3.25rem;position:relative;z-index:30}.navbar.is-white{background-color:#fff;color:#0a0a0a}.navbar.is-white .navbar-brand .navbar-link,.navbar.is-white .navbar-brand>.navbar-item{color:#0a0a0a}.navbar.is-white .navbar-brand .navbar-link.is-active,.navbar.is-white .navbar-brand .navbar-link:hover,.navbar.is-white .navbar-brand>a.navbar-item.is-active,.navbar.is-white .navbar-brand>a.navbar-item:hover{background-color:#f2f2f2;color:#0a0a0a}.navbar.is-white .navbar-brand .navbar-link::after{border-color:#0a0a0a}.navbar.is-white .navbar-burger{color:#0a0a0a}@media screen and (min-width:1088px){.navbar.is-white .navbar-end .navbar-link,.navbar.is-white .navbar-end>.navbar-item,.navbar.is-white .navbar-start .navbar-link,.navbar.is-white .navbar-start>.navbar-item{color:#0a0a0a}.navbar.is-white .navbar-end .navbar-link.is-active,.navbar.is-white .navbar-end .navbar-link:hover,.navbar.is-white .navbar-end>a.navbar-item.is-active,.navbar.is-white .navbar-end>a.navbar-item:hover,.navbar.is-white .navbar-start .navbar-link.is-active,.navbar.is-white .navbar-start .navbar-link:hover,.navbar.is-white .navbar-start>a.navbar-item.is-active,.navbar.is-white .navbar-start>a.navbar-item:hover{background-color:#f2f2f2;color:#0a0a0a}.navbar.is-white .navbar-end .navbar-link::after,.navbar.is-white .navbar-start .navbar-link::after{border-color:#0a0a0a}.navbar.is-white .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-white .navbar-item.has-dropdown:hover .navbar-link{background-color:#f2f2f2;color:#0a0a0a}.navbar.is-white .navbar-dropdown a.navbar-item.is-active{background-color:#fff;color:#0a0a0a}}.navbar.is-black{background-color:#0a0a0a;color:#fff}.navbar.is-black .navbar-brand .navbar-link,.navbar.is-black .navbar-brand>.navbar-item{color:#fff}.navbar.is-black .navbar-brand .navbar-link.is-active,.navbar.is-black .navbar-brand .navbar-link:hover,.navbar.is-black .navbar-brand>a.navbar-item.is-active,.navbar.is-black .navbar-brand>a.navbar-item:hover{background-color:#000;color:#fff}.navbar.is-black .navbar-brand .navbar-link::after{border-color:#fff}.navbar.is-black .navbar-burger{color:#fff}@media screen and (min-width:1088px){.navbar.is-black .navbar-end .navbar-link,.navbar.is-black .navbar-end>.navbar-item,.navbar.is-black .navbar-start .navbar-link,.navbar.is-black .navbar-start>.navbar-item{color:#fff}.navbar.is-black .navbar-end .navbar-link.is-active,.navbar.is-black .navbar-end .navbar-link:hover,.navbar.is-black .navbar-end>a.navbar-item.is-active,.navbar.is-black .navbar-end>a.navbar-item:hover,.navbar.is-black .navbar-start .navbar-link.is-active,.navbar.is-black .navbar-start .navbar-link:hover,.navbar.is-black .navbar-start>a.navbar-item.is-active,.navbar.is-black .navbar-start>a.navbar-item:hover{background-color:#000;color:#fff}.navbar.is-black .navbar-end .navbar-link::after,.navbar.is-black .navbar-start .navbar-link::after{border-color:#fff}.navbar.is-black .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-black .navbar-item.has-dropdown:hover .navbar-link{background-color:#000;color:#fff}.navbar.is-black .navbar-dropdown a.navbar-item.is-active{background-color:#0a0a0a;color:#fff}}.navbar.is-light{background-color:#f5f5f5;color:#363636}.navbar.is-light .navbar-brand .navbar-link,.navbar.is-light .navbar-brand>.navbar-item{color:#363636}.navbar.is-light .navbar-brand .navbar-link.is-active,.navbar.is-light .navbar-brand .navbar-link:hover,.navbar.is-light .navbar-brand>a.navbar-item.is-active,.navbar.is-light .navbar-brand>a.navbar-item:hover{background-color:#e8e8e8;color:#363636}.navbar.is-light .navbar-brand .navbar-link::after{border-color:#363636}.navbar.is-light .navbar-burger{color:#363636}@media screen and (min-width:1088px){.navbar.is-light .navbar-end .navbar-link,.navbar.is-light .navbar-end>.navbar-item,.navbar.is-light .navbar-start .navbar-link,.navbar.is-light .navbar-start>.navbar-item{color:#363636}.navbar.is-light .navbar-end .navbar-link.is-active,.navbar.is-light .navbar-end .navbar-link:hover,.navbar.is-light .navbar-end>a.navbar-item.is-active,.navbar.is-light .navbar-end>a.navbar-item:hover,.navbar.is-light .navbar-start .navbar-link.is-active,.navbar.is-light .navbar-start .navbar-link:hover,.navbar.is-light .navbar-start>a.navbar-item.is-active,.navbar.is-light .navbar-start>a.navbar-item:hover{background-color:#e8e8e8;color:#363636}.navbar.is-light .navbar-end .navbar-link::after,.navbar.is-light .navbar-start .navbar-link::after{border-color:#363636}.navbar.is-light .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-light .navbar-item.has-dropdown:hover .navbar-link{background-color:#e8e8e8;color:#363636}.navbar.is-light .navbar-dropdown a.navbar-item.is-active{background-color:#f5f5f5;color:#363636}}.navbar.is-dark{background-color:#363636;color:#f5f5f5}.navbar.is-dark .navbar-brand .navbar-link,.navbar.is-dark .navbar-brand>.navbar-item{color:#f5f5f5}.navbar.is-dark .navbar-brand .navbar-link.is-active,.navbar.is-dark .navbar-brand .navbar-link:hover,.navbar.is-dark .navbar-brand>a.navbar-item.is-active,.navbar.is-dark .navbar-brand>a.navbar-item:hover{background-color:#292929;color:#f5f5f5}.navbar.is-dark .navbar-brand .navbar-link::after{border-color:#f5f5f5}.navbar.is-dark .navbar-burger{color:#f5f5f5}@media screen and (min-width:1088px){.navbar.is-dark .navbar-end .navbar-link,.navbar.is-dark .navbar-end>.navbar-item,.navbar.is-dark .navbar-start .navbar-link,.navbar.is-dark .navbar-start>.navbar-item{color:#f5f5f5}.navbar.is-dark .navbar-end .navbar-link.is-active,.navbar.is-dark .navbar-end .navbar-link:hover,.navbar.is-dark .navbar-end>a.navbar-item.is-active,.navbar.is-dark .navbar-end>a.navbar-item:hover,.navbar.is-dark .navbar-start .navbar-link.is-active,.navbar.is-dark .navbar-start .navbar-link:hover,.navbar.is-dark .navbar-start>a.navbar-item.is-active,.navbar.is-dark .navbar-start>a.navbar-item:hover{background-color:#292929;color:#f5f5f5}.navbar.is-dark .navbar-end .navbar-link::after,.navbar.is-dark .navbar-start .navbar-link::after{border-color:#f5f5f5}.navbar.is-dark .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-dark .navbar-item.has-dropdown:hover .navbar-link{background-color:#292929;color:#f5f5f5}.navbar.is-dark .navbar-dropdown a.navbar-item.is-active{background-color:#363636;color:#f5f5f5}}.navbar.is-primary{background-color:#00d1b2;color:#fff}.navbar.is-primary .navbar-brand .navbar-link,.navbar.is-primary .navbar-brand>.navbar-item{color:#fff}.navbar.is-primary .navbar-brand .navbar-link.is-active,.navbar.is-primary .navbar-brand .navbar-link:hover,.navbar.is-primary .navbar-brand>a.navbar-item.is-active,.navbar.is-primary .navbar-brand>a.navbar-item:hover{background-color:#00b89c;color:#fff}.navbar.is-primary .navbar-brand .navbar-link::after{border-color:#fff}.navbar.is-primary .navbar-burger{color:#fff}@media screen and (min-width:1088px){.navbar.is-primary .navbar-end .navbar-link,.navbar.is-primary .navbar-end>.navbar-item,.navbar.is-primary .navbar-start .navbar-link,.navbar.is-primary .navbar-start>.navbar-item{color:#fff}.navbar.is-primary .navbar-end .navbar-link.is-active,.navbar.is-primary .navbar-end .navbar-link:hover,.navbar.is-primary .navbar-end>a.navbar-item.is-active,.navbar.is-primary .navbar-end>a.navbar-item:hover,.navbar.is-primary .navbar-start .navbar-link.is-active,.navbar.is-primary .navbar-start .navbar-link:hover,.navbar.is-primary .navbar-start>a.navbar-item.is-active,.navbar.is-primary .navbar-start>a.navbar-item:hover{background-color:#00b89c;color:#fff}.navbar.is-primary .navbar-end .navbar-link::after,.navbar.is-primary .navbar-start .navbar-link::after{border-color:#fff}.navbar.is-primary .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-primary .navbar-item.has-dropdown:hover .navbar-link{background-color:#00b89c;color:#fff}.navbar.is-primary .navbar-dropdown a.navbar-item.is-active{background-color:#00d1b2;color:#fff}}.navbar.is-link{background-color:#3273dc;color:#fff}.navbar.is-link .navbar-brand .navbar-link,.navbar.is-link .navbar-brand>.navbar-item{color:#fff}.navbar.is-link .navbar-brand .navbar-link.is-active,.navbar.is-link .navbar-brand .navbar-link:hover,.navbar.is-link .navbar-brand>a.navbar-item.is-active,.navbar.is-link .navbar-brand>a.navbar-item:hover{background-color:#2366d1;color:#fff}.navbar.is-link .navbar-brand .navbar-link::after{border-color:#fff}.navbar.is-link .navbar-burger{color:#fff}@media screen and (min-width:1088px){.navbar.is-link .navbar-end .navbar-link,.navbar.is-link .navbar-end>.navbar-item,.navbar.is-link .navbar-start .navbar-link,.navbar.is-link .navbar-start>.navbar-item{color:#fff}.navbar.is-link .navbar-end .navbar-link.is-active,.navbar.is-link .navbar-end .navbar-link:hover,.navbar.is-link .navbar-end>a.navbar-item.is-active,.navbar.is-link .navbar-end>a.navbar-item:hover,.navbar.is-link .navbar-start .navbar-link.is-active,.navbar.is-link .navbar-start .navbar-link:hover,.navbar.is-link .navbar-start>a.navbar-item.is-active,.navbar.is-link .navbar-start>a.navbar-item:hover{background-color:#2366d1;color:#fff}.navbar.is-link .navbar-end .navbar-link::after,.navbar.is-link .navbar-start .navbar-link::after{border-color:#fff}.navbar.is-link .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-link .navbar-item.has-dropdown:hover .navbar-link{background-color:#2366d1;color:#fff}.navbar.is-link .navbar-dropdown a.navbar-item.is-active{background-color:#3273dc;color:#fff}}.navbar.is-info{background-color:#209cee;color:#fff}.navbar.is-info .navbar-brand .navbar-link,.navbar.is-info .navbar-brand>.navbar-item{color:#fff}.navbar.is-info .navbar-brand .navbar-link.is-active,.navbar.is-info .navbar-brand .navbar-link:hover,.navbar.is-info .navbar-brand>a.navbar-item.is-active,.navbar.is-info .navbar-brand>a.navbar-item:hover{background-color:#118fe4;color:#fff}.navbar.is-info .navbar-brand .navbar-link::after{border-color:#fff}.navbar.is-info .navbar-burger{color:#fff}@media screen and (min-width:1088px){.navbar.is-info .navbar-end .navbar-link,.navbar.is-info .navbar-end>.navbar-item,.navbar.is-info .navbar-start .navbar-link,.navbar.is-info .navbar-start>.navbar-item{color:#fff}.navbar.is-info .navbar-end .navbar-link.is-active,.navbar.is-info .navbar-end .navbar-link:hover,.navbar.is-info .navbar-end>a.navbar-item.is-active,.navbar.is-info .navbar-end>a.navbar-item:hover,.navbar.is-info .navbar-start .navbar-link.is-active,.navbar.is-info .navbar-start .navbar-link:hover,.navbar.is-info .navbar-start>a.navbar-item.is-active,.navbar.is-info .navbar-start>a.navbar-item:hover{background-color:#118fe4;color:#fff}.navbar.is-info .navbar-end .navbar-link::after,.navbar.is-info .navbar-start .navbar-link::after{border-color:#fff}.navbar.is-info .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-info .navbar-item.has-dropdown:hover .navbar-link{background-color:#118fe4;color:#fff}.navbar.is-info .navbar-dropdown a.navbar-item.is-active{background-color:#209cee;color:#fff}}.navbar.is-success{background-color:#23d160;color:#fff}.navbar.is-success .navbar-brand .navbar-link,.navbar.is-success .navbar-brand>.navbar-item{color:#fff}.navbar.is-success .navbar-brand .navbar-link.is-active,.navbar.is-success .navbar-brand .navbar-link:hover,.navbar.is-success .navbar-brand>a.navbar-item.is-active,.navbar.is-success .navbar-brand>a.navbar-item:hover{background-color:#20bc56;color:#fff}.navbar.is-success .navbar-brand .navbar-link::after{border-color:#fff}.navbar.is-success .navbar-burger{color:#fff}@media screen and (min-width:1088px){.navbar.is-success .navbar-end .navbar-link,.navbar.is-success .navbar-end>.navbar-item,.navbar.is-success .navbar-start .navbar-link,.navbar.is-success .navbar-start>.navbar-item{color:#fff}.navbar.is-success .navbar-end .navbar-link.is-active,.navbar.is-success .navbar-end .navbar-link:hover,.navbar.is-success .navbar-end>a.navbar-item.is-active,.navbar.is-success .navbar-end>a.navbar-item:hover,.navbar.is-success .navbar-start .navbar-link.is-active,.navbar.is-success .navbar-start .navbar-link:hover,.navbar.is-success .navbar-start>a.navbar-item.is-active,.navbar.is-success .navbar-start>a.navbar-item:hover{background-color:#20bc56;color:#fff}.navbar.is-success .navbar-end .navbar-link::after,.navbar.is-success .navbar-start .navbar-link::after{border-color:#fff}.navbar.is-success .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-success .navbar-item.has-dropdown:hover .navbar-link{background-color:#20bc56;color:#fff}.navbar.is-success .navbar-dropdown a.navbar-item.is-active{background-color:#23d160;color:#fff}}.navbar.is-warning{background-color:#ffdd57;color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-brand .navbar-link,.navbar.is-warning .navbar-brand>.navbar-item{color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-brand .navbar-link.is-active,.navbar.is-warning .navbar-brand .navbar-link:hover,.navbar.is-warning .navbar-brand>a.navbar-item.is-active,.navbar.is-warning .navbar-brand>a.navbar-item:hover{background-color:#ffd83d;color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-brand .navbar-link::after{border-color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-burger{color:rgba(0,0,0,.7)}@media screen and (min-width:1088px){.navbar.is-warning .navbar-end .navbar-link,.navbar.is-warning .navbar-end>.navbar-item,.navbar.is-warning .navbar-start .navbar-link,.navbar.is-warning .navbar-start>.navbar-item{color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-end .navbar-link.is-active,.navbar.is-warning .navbar-end .navbar-link:hover,.navbar.is-warning .navbar-end>a.navbar-item.is-active,.navbar.is-warning .navbar-end>a.navbar-item:hover,.navbar.is-warning .navbar-start .navbar-link.is-active,.navbar.is-warning .navbar-start .navbar-link:hover,.navbar.is-warning .navbar-start>a.navbar-item.is-active,.navbar.is-warning .navbar-start>a.navbar-item:hover{background-color:#ffd83d;color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-end .navbar-link::after,.navbar.is-warning .navbar-start .navbar-link::after{border-color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-warning .navbar-item.has-dropdown:hover .navbar-link{background-color:#ffd83d;color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-dropdown a.navbar-item.is-active{background-color:#ffdd57;color:rgba(0,0,0,.7)}}.navbar.is-danger{background-color:#ff3860;color:#fff}.navbar.is-danger .navbar-brand .navbar-link,.navbar.is-danger .navbar-brand>.navbar-item{color:#fff}.navbar.is-danger .navbar-brand .navbar-link.is-active,.navbar.is-danger .navbar-brand .navbar-link:hover,.navbar.is-danger .navbar-brand>a.navbar-item.is-active,.navbar.is-danger .navbar-brand>a.navbar-item:hover{background-color:#ff1f4b;color:#fff}.navbar.is-danger .navbar-brand .navbar-link::after{border-color:#fff}.navbar.is-danger .navbar-burger{color:#fff}@media screen and (min-width:1088px){.navbar.is-danger .navbar-end .navbar-link,.navbar.is-danger .navbar-end>.navbar-item,.navbar.is-danger .navbar-start .navbar-link,.navbar.is-danger .navbar-start>.navbar-item{color:#fff}.navbar.is-danger .navbar-end .navbar-link.is-active,.navbar.is-danger .navbar-end .navbar-link:hover,.navbar.is-danger .navbar-end>a.navbar-item.is-active,.navbar.is-danger .navbar-end>a.navbar-item:hover,.navbar.is-danger .navbar-start .navbar-link.is-active,.navbar.is-danger .navbar-start .navbar-link:hover,.navbar.is-danger .navbar-start>a.navbar-item.is-active,.navbar.is-danger .navbar-start>a.navbar-item:hover{background-color:#ff1f4b;color:#fff}.navbar.is-danger .navbar-end .navbar-link::after,.navbar.is-danger .navbar-start .navbar-link::after{border-color:#fff}.navbar.is-danger .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-danger .navbar-item.has-dropdown:hover .navbar-link{background-color:#ff1f4b;color:#fff}.navbar.is-danger .navbar-dropdown a.navbar-item.is-active{background-color:#ff3860;color:#fff}}.navbar>.container{align-items:stretch;display:flex;min-height:3.25rem;width:100%}.navbar.has-shadow{box-shadow:0 2px 0 0 #f5f5f5}.navbar.is-fixed-bottom,.navbar.is-fixed-top{left:0;position:fixed;right:0;z-index:30}.navbar.is-fixed-bottom{bottom:0}.navbar.is-fixed-bottom.has-shadow{box-shadow:0 -2px 0 0 #f5f5f5}.navbar.is-fixed-top{top:0}body.has-navbar-fixed-top,html.has-navbar-fixed-top{padding-top:3.25rem}body.has-navbar-fixed-bottom,html.has-navbar-fixed-bottom{padding-bottom:3.25rem}.navbar-brand,.navbar-tabs{align-items:stretch;display:flex;flex-shrink:0;min-height:3.25rem}.navbar-brand a.navbar-item:hover{background-color:transparent}.navbar-tabs{-webkit-overflow-scrolling:touch;max-width:100vw;overflow-x:auto;overflow-y:hidden}.navbar-burger{color:#4a4a4a;cursor:pointer;display:block;height:3.25rem;position:relative;width:3.25rem;margin-left:auto}.navbar-burger span{background-color:currentColor;display:block;height:1px;left:calc(50% - 8px);position:absolute;-webkit-transform-origin:center;transform-origin:center;transition-duration:86ms;transition-property:background-color,opacity,-webkit-transform;transition-property:background-color,opacity,transform;transition-property:background-color,opacity,transform,-webkit-transform;transition-timing-function:ease-out;width:16px}.navbar-burger span:nth-child(1){top:calc(50% - 6px)}.navbar-burger span:nth-child(2){top:calc(50% - 1px)}.navbar-burger span:nth-child(3){top:calc(50% + 4px)}.navbar-burger:hover{background-color:rgba(0,0,0,.05)}.navbar-burger.is-active span:nth-child(1){-webkit-transform:translateY(5px) rotate(45deg);transform:translateY(5px) rotate(45deg)}.navbar-burger.is-active span:nth-child(2){opacity:0}.navbar-burger.is-active span:nth-child(3){-webkit-transform:translateY(-5px) rotate(-45deg);transform:translateY(-5px) rotate(-45deg)}.navbar-menu{display:none}.navbar-item,.navbar-link{color:#4a4a4a;display:block;line-height:1.5;padding:.5rem .75rem;position:relative}.navbar-item .icon:only-child,.navbar-link .icon:only-child{margin-left:-.25rem;margin-right:-.25rem}.navbar-link,a.navbar-item{cursor:pointer}.navbar-link.is-active,.navbar-link:hover,a.navbar-item.is-active,a.navbar-item:hover{background-color:#fafafa;color:#3273dc}.navbar-item{display:block;flex-grow:0;flex-shrink:0}.navbar-item img{max-height:1.75rem}.navbar-item.has-dropdown{padding:0}.navbar-item.is-expanded{flex-grow:1;flex-shrink:1}.navbar-item.is-tab{border-bottom:1px solid transparent;min-height:3.25rem;padding-bottom:calc(.5rem - 1px)}.navbar-item.is-tab:hover{background-color:transparent;border-bottom-color:#3273dc}.navbar-item.is-tab.is-active{background-color:transparent;border-bottom-color:#3273dc;border-bottom-style:solid;border-bottom-width:3px;color:#3273dc;padding-bottom:calc(.5rem - 3px)}.navbar-content{flex-grow:1;flex-shrink:1}.navbar-link:not(.is-arrowless){padding-right:2.5em}.navbar-link:not(.is-arrowless)::after{border-color:#3273dc;margin-top:-.375em;right:1.125em}.navbar-dropdown{font-size:.875rem;padding-bottom:.5rem;padding-top:.5rem}.navbar-dropdown .navbar-item{padding-left:1.5rem;padding-right:1.5rem}.navbar-divider{background-color:#f5f5f5;border:none;display:none;height:2px;margin:.5rem 0}@media screen and (max-width:1087px){.navbar>.container{display:block}.navbar-brand .navbar-item,.navbar-tabs .navbar-item{align-items:center;display:flex}.navbar-link::after{display:none}.navbar-menu{background-color:#fff;box-shadow:0 8px 16px rgba(10,10,10,.1);padding:.5rem 0}.navbar-menu.is-active{display:block}.navbar.is-fixed-bottom-touch,.navbar.is-fixed-top-touch{left:0;position:fixed;right:0;z-index:30}.navbar.is-fixed-bottom-touch{bottom:0}.navbar.is-fixed-bottom-touch.has-shadow{box-shadow:0 -2px 3px rgba(10,10,10,.1)}.navbar.is-fixed-top-touch{top:0}.navbar.is-fixed-top .navbar-menu,.navbar.is-fixed-top-touch .navbar-menu{-webkit-overflow-scrolling:touch;max-height:calc(100vh - 3.25rem);overflow:auto}body.has-navbar-fixed-top-touch,html.has-navbar-fixed-top-touch{padding-top:3.25rem}body.has-navbar-fixed-bottom-touch,html.has-navbar-fixed-bottom-touch{padding-bottom:3.25rem}}@media screen and (min-width:1088px){.navbar,.navbar-end,.navbar-menu,.navbar-start{align-items:stretch;display:flex}.navbar{min-height:3.25rem}.navbar.is-spaced{padding:1rem 2rem}.navbar.is-spaced .navbar-end,.navbar.is-spaced .navbar-start{align-items:center}.navbar.is-spaced .navbar-link,.navbar.is-spaced a.navbar-item{border-radius:4px}.navbar.is-transparent .navbar-link.is-active,.navbar.is-transparent .navbar-link:hover,.navbar.is-transparent a.navbar-item.is-active,.navbar.is-transparent a.navbar-item:hover{background-color:transparent!important}.navbar.is-transparent .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:hover .navbar-link{background-color:transparent!important}.navbar.is-transparent .navbar-dropdown a.navbar-item:hover{background-color:#f5f5f5;color:#0a0a0a}.navbar.is-transparent .navbar-dropdown a.navbar-item.is-active{background-color:#f5f5f5;color:#3273dc}.navbar-burger{display:none}.navbar-item,.navbar-link{align-items:center;display:flex}.navbar-item{display:flex}.navbar-item.has-dropdown{align-items:stretch}.navbar-item.has-dropdown-up .navbar-link::after{-webkit-transform:rotate(135deg) translate(.25em,-.25em);transform:rotate(135deg) translate(.25em,-.25em)}.navbar-item.has-dropdown-up .navbar-dropdown{border-bottom:2px solid #dbdbdb;border-radius:6px 6px 0 0;border-top:none;bottom:100%;box-shadow:0 -8px 8px rgba(10,10,10,.1);top:auto}.navbar-item.is-active .navbar-dropdown,.navbar-item.is-hoverable:hover .navbar-dropdown{display:block}.navbar-item.is-active .navbar-dropdown.is-boxed,.navbar-item.is-hoverable:hover .navbar-dropdown.is-boxed,.navbar.is-spaced .navbar-item.is-active .navbar-dropdown,.navbar.is-spaced .navbar-item.is-hoverable:hover .navbar-dropdown{opacity:1;pointer-events:auto;-webkit-transform:translateY(0);transform:translateY(0)}.navbar-menu{flex-grow:1;flex-shrink:0}.navbar-start{justify-content:flex-start;margin-right:auto}.navbar-end{justify-content:flex-end;margin-left:auto}.navbar-dropdown{background-color:#fff;border-bottom-left-radius:6px;border-bottom-right-radius:6px;border-top:2px solid #dbdbdb;box-shadow:0 8px 8px rgba(10,10,10,.1);display:none;font-size:.875rem;left:0;min-width:100%;position:absolute;top:100%;z-index:20}.navbar-dropdown .navbar-item{padding:.375rem 1rem;white-space:nowrap}.navbar-dropdown a.navbar-item{padding-right:3rem}.navbar-dropdown a.navbar-item:hover{background-color:#f5f5f5;color:#0a0a0a}.navbar-dropdown a.navbar-item.is-active{background-color:#f5f5f5;color:#3273dc}.navbar-dropdown.is-boxed,.navbar.is-spaced .navbar-dropdown{border-radius:6px;border-top:none;box-shadow:0 8px 8px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);display:block;opacity:0;pointer-events:none;top:calc(100% + (-4px));-webkit-transform:translateY(-5px);transform:translateY(-5px);transition-duration:86ms;transition-property:opacity,-webkit-transform;transition-property:opacity,transform;transition-property:opacity,transform,-webkit-transform}.navbar-dropdown.is-right{left:auto;right:0}.navbar-divider{display:block}.container>.navbar .navbar-brand,.navbar>.container .navbar-brand{margin-left:-.75rem}.container>.navbar .navbar-menu,.navbar>.container .navbar-menu{margin-right:-.75rem}.navbar.is-fixed-bottom-desktop,.navbar.is-fixed-top-desktop{left:0;position:fixed;right:0;z-index:30}.navbar.is-fixed-bottom-desktop{bottom:0}.navbar.is-fixed-bottom-desktop.has-shadow{box-shadow:0 -2px 3px rgba(10,10,10,.1)}.navbar.is-fixed-top-desktop{top:0}body.has-navbar-fixed-top-desktop,html.has-navbar-fixed-top-desktop{padding-top:3.25rem}body.has-navbar-fixed-bottom-desktop,html.has-navbar-fixed-bottom-desktop{padding-bottom:3.25rem}body.has-spaced-navbar-fixed-top,html.has-spaced-navbar-fixed-top{padding-top:5.25rem}body.has-spaced-navbar-fixed-bottom,html.has-spaced-navbar-fixed-bottom{padding-bottom:5.25rem}.navbar-link.is-active,a.navbar-item.is-active{color:#0a0a0a}.navbar-link.is-active:not(:hover),a.navbar-item.is-active:not(:hover){background-color:transparent}.navbar-item.has-dropdown.is-active .navbar-link,.navbar-item.has-dropdown:hover .navbar-link{background-color:#fafafa}}.hero.is-fullheight-with-navbar{min-height:calc(100vh - 3.25rem)}.pagination{font-size:1rem;margin:-.25rem}.pagination.is-small{font-size:.75rem}.pagination.is-medium{font-size:1.25rem}.pagination.is-large{font-size:1.5rem}.pagination.is-rounded .pagination-next,.pagination.is-rounded .pagination-previous{padding-left:1em;padding-right:1em;border-radius:290486px}.pagination.is-rounded .pagination-link{border-radius:290486px}.pagination,.pagination-list{align-items:center;display:flex;justify-content:center;text-align:center}.pagination-ellipsis,.pagination-link,.pagination-next,.pagination-previous{font-size:1em;padding-left:.5em;padding-right:.5em;justify-content:center;margin:.25rem;text-align:center}.pagination-link,.pagination-next,.pagination-previous{border-color:#dbdbdb;color:#363636;min-width:2.25em}.pagination-link:hover,.pagination-next:hover,.pagination-previous:hover{border-color:#b5b5b5;color:#363636}.pagination-link:focus,.pagination-next:focus,.pagination-previous:focus{border-color:#3273dc}.pagination-link:active,.pagination-next:active,.pagination-previous:active{box-shadow:inset 0 1px 2px rgba(10,10,10,.2)}.pagination-link[disabled],.pagination-next[disabled],.pagination-previous[disabled]{background-color:#dbdbdb;border-color:#dbdbdb;box-shadow:none;color:#7a7a7a;opacity:.5}.pagination-next,.pagination-previous{padding-left:.75em;padding-right:.75em;white-space:nowrap}.pagination-link.is-current{background-color:#3273dc;border-color:#3273dc;color:#fff}.pagination-ellipsis{color:#b5b5b5;pointer-events:none}.pagination-list{flex-wrap:wrap}@media screen and (max-width:768px){.pagination{flex-wrap:wrap}.pagination-next,.pagination-previous{flex-grow:1;flex-shrink:1}.pagination-list li{flex-grow:1;flex-shrink:1}}@media screen and (min-width:769px),print{.pagination-list{flex-grow:1;flex-shrink:1;justify-content:flex-start;order:1}.pagination-previous{order:2}.pagination-next{order:3}.pagination{justify-content:space-between}.pagination.is-centered .pagination-previous{order:1}.pagination.is-centered .pagination-list{justify-content:center;order:2}.pagination.is-centered .pagination-next{order:3}.pagination.is-right .pagination-previous{order:1}.pagination.is-right .pagination-next{order:2}.pagination.is-right .pagination-list{justify-content:flex-end;order:3}}.panel{font-size:1rem}.panel:not(:last-child){margin-bottom:1.5rem}.panel-block,.panel-heading,.panel-tabs{border-bottom:1px solid #dbdbdb;border-left:1px solid #dbdbdb;border-right:1px solid #dbdbdb}.panel-block:first-child,.panel-heading:first-child,.panel-tabs:first-child{border-top:1px solid #dbdbdb}.panel-heading{background-color:#f5f5f5;border-radius:4px 4px 0 0;color:#363636;font-size:1.25em;font-weight:300;line-height:1.25;padding:.5em .75em}.panel-tabs{align-items:flex-end;display:flex;font-size:.875em;justify-content:center}.panel-tabs a{border-bottom:1px solid #dbdbdb;margin-bottom:-1px;padding:.5em}.panel-tabs a.is-active{border-bottom-color:#4a4a4a;color:#363636}.panel-list a{color:#4a4a4a}.panel-list a:hover{color:#3273dc}.panel-block{align-items:center;color:#363636;display:flex;justify-content:flex-start;padding:.5em .75em}.panel-block input[type=checkbox]{margin-right:.75em}.panel-block>.control{flex-grow:1;flex-shrink:1;width:100%}.panel-block.is-wrapped{flex-wrap:wrap}.panel-block.is-active{border-left-color:#3273dc;color:#363636}.panel-block.is-active .panel-icon{color:#3273dc}a.panel-block,label.panel-block{cursor:pointer}a.panel-block:hover,label.panel-block:hover{background-color:#f5f5f5}.panel-icon{display:inline-block;font-size:14px;height:1em;line-height:1em;text-align:center;vertical-align:top;width:1em;color:#7a7a7a;margin-right:.75em}.panel-icon .fa{font-size:inherit;line-height:inherit}.tabs{-webkit-overflow-scrolling:touch;align-items:stretch;display:flex;font-size:1rem;justify-content:space-between;overflow:hidden;overflow-x:auto;white-space:nowrap}.tabs a{align-items:center;border-bottom-color:#dbdbdb;border-bottom-style:solid;border-bottom-width:1px;color:#4a4a4a;display:flex;justify-content:center;margin-bottom:-1px;padding:.5em 1em;vertical-align:top}.tabs a:hover{border-bottom-color:#363636;color:#363636}.tabs li{display:block}.tabs li.is-active a{border-bottom-color:#3273dc;color:#3273dc}.tabs ul{align-items:center;border-bottom-color:#dbdbdb;border-bottom-style:solid;border-bottom-width:1px;display:flex;flex-grow:1;flex-shrink:0;justify-content:flex-start}.tabs ul.is-left{padding-right:.75em}.tabs ul.is-center{flex:none;justify-content:center;padding-left:.75em;padding-right:.75em}.tabs ul.is-right{justify-content:flex-end;padding-left:.75em}.tabs .icon:first-child{margin-right:.5em}.tabs .icon:last-child{margin-left:.5em}.tabs.is-centered ul{justify-content:center}.tabs.is-right ul{justify-content:flex-end}.tabs.is-boxed a{border:1px solid transparent;border-radius:4px 4px 0 0}.tabs.is-boxed a:hover{background-color:#f5f5f5;border-bottom-color:#dbdbdb}.tabs.is-boxed li.is-active a{background-color:#fff;border-color:#dbdbdb;border-bottom-color:transparent!important}.tabs.is-fullwidth li{flex-grow:1;flex-shrink:0}.tabs.is-toggle a{border-color:#dbdbdb;border-style:solid;border-width:1px;margin-bottom:0;position:relative}.tabs.is-toggle a:hover{background-color:#f5f5f5;border-color:#b5b5b5;z-index:2}.tabs.is-toggle li+li{margin-left:-1px}.tabs.is-toggle li:first-child a{border-radius:4px 0 0 4px}.tabs.is-toggle li:last-child a{border-radius:0 4px 4px 0}.tabs.is-toggle li.is-active a{background-color:#3273dc;border-color:#3273dc;color:#fff;z-index:1}.tabs.is-toggle ul{border-bottom:none}.tabs.is-toggle.is-toggle-rounded li:first-child a{border-bottom-left-radius:290486px;border-top-left-radius:290486px;padding-left:1.25em}.tabs.is-toggle.is-toggle-rounded li:last-child a{border-bottom-right-radius:290486px;border-top-right-radius:290486px;padding-right:1.25em}.tabs.is-small{font-size:.75rem}.tabs.is-medium{font-size:1.25rem}.tabs.is-large{font-size:1.5rem}.column{display:block;flex-basis:0;flex-grow:1;flex-shrink:1;padding:.75rem}.columns.is-mobile>.column.is-narrow{flex:none}.columns.is-mobile>.column.is-full{flex:none;width:100%}.columns.is-mobile>.column.is-three-quarters{flex:none;width:75%}.columns.is-mobile>.column.is-two-thirds{flex:none;width:66.6666%}.columns.is-mobile>.column.is-half{flex:none;width:50%}.columns.is-mobile>.column.is-one-third{flex:none;width:33.3333%}.columns.is-mobile>.column.is-one-quarter{flex:none;width:25%}.columns.is-mobile>.column.is-one-fifth{flex:none;width:20%}.columns.is-mobile>.column.is-two-fifths{flex:none;width:40%}.columns.is-mobile>.column.is-three-fifths{flex:none;width:60%}.columns.is-mobile>.column.is-four-fifths{flex:none;width:80%}.columns.is-mobile>.column.is-offset-three-quarters{margin-left:75%}.columns.is-mobile>.column.is-offset-two-thirds{margin-left:66.6666%}.columns.is-mobile>.column.is-offset-half{margin-left:50%}.columns.is-mobile>.column.is-offset-one-third{margin-left:33.3333%}.columns.is-mobile>.column.is-offset-one-quarter{margin-left:25%}.columns.is-mobile>.column.is-offset-one-fifth{margin-left:20%}.columns.is-mobile>.column.is-offset-two-fifths{margin-left:40%}.columns.is-mobile>.column.is-offset-three-fifths{margin-left:60%}.columns.is-mobile>.column.is-offset-four-fifths{margin-left:80%}.columns.is-mobile>.column.is-1{flex:none;width:8.33333%}.columns.is-mobile>.column.is-offset-1{margin-left:8.33333%}.columns.is-mobile>.column.is-2{flex:none;width:16.66667%}.columns.is-mobile>.column.is-offset-2{margin-left:16.66667%}.columns.is-mobile>.column.is-3{flex:none;width:25%}.columns.is-mobile>.column.is-offset-3{margin-left:25%}.columns.is-mobile>.column.is-4{flex:none;width:33.33333%}.columns.is-mobile>.column.is-offset-4{margin-left:33.33333%}.columns.is-mobile>.column.is-5{flex:none;width:41.66667%}.columns.is-mobile>.column.is-offset-5{margin-left:41.66667%}.columns.is-mobile>.column.is-6{flex:none;width:50%}.columns.is-mobile>.column.is-offset-6{margin-left:50%}.columns.is-mobile>.column.is-7{flex:none;width:58.33333%}.columns.is-mobile>.column.is-offset-7{margin-left:58.33333%}.columns.is-mobile>.column.is-8{flex:none;width:66.66667%}.columns.is-mobile>.column.is-offset-8{margin-left:66.66667%}.columns.is-mobile>.column.is-9{flex:none;width:75%}.columns.is-mobile>.column.is-offset-9{margin-left:75%}.columns.is-mobile>.column.is-10{flex:none;width:83.33333%}.columns.is-mobile>.column.is-offset-10{margin-left:83.33333%}.columns.is-mobile>.column.is-11{flex:none;width:91.66667%}.columns.is-mobile>.column.is-offset-11{margin-left:91.66667%}.columns.is-mobile>.column.is-12{flex:none;width:100%}.columns.is-mobile>.column.is-offset-12{margin-left:100%}@media screen and (max-width:768px){.column.is-narrow-mobile{flex:none}.column.is-full-mobile{flex:none;width:100%}.column.is-three-quarters-mobile{flex:none;width:75%}.column.is-two-thirds-mobile{flex:none;width:66.6666%}.column.is-half-mobile{flex:none;width:50%}.column.is-one-third-mobile{flex:none;width:33.3333%}.column.is-one-quarter-mobile{flex:none;width:25%}.column.is-one-fifth-mobile{flex:none;width:20%}.column.is-two-fifths-mobile{flex:none;width:40%}.column.is-three-fifths-mobile{flex:none;width:60%}.column.is-four-fifths-mobile{flex:none;width:80%}.column.is-offset-three-quarters-mobile{margin-left:75%}.column.is-offset-two-thirds-mobile{margin-left:66.6666%}.column.is-offset-half-mobile{margin-left:50%}.column.is-offset-one-third-mobile{margin-left:33.3333%}.column.is-offset-one-quarter-mobile{margin-left:25%}.column.is-offset-one-fifth-mobile{margin-left:20%}.column.is-offset-two-fifths-mobile{margin-left:40%}.column.is-offset-three-fifths-mobile{margin-left:60%}.column.is-offset-four-fifths-mobile{margin-left:80%}.column.is-1-mobile{flex:none;width:8.33333%}.column.is-offset-1-mobile{margin-left:8.33333%}.column.is-2-mobile{flex:none;width:16.66667%}.column.is-offset-2-mobile{margin-left:16.66667%}.column.is-3-mobile{flex:none;width:25%}.column.is-offset-3-mobile{margin-left:25%}.column.is-4-mobile{flex:none;width:33.33333%}.column.is-offset-4-mobile{margin-left:33.33333%}.column.is-5-mobile{flex:none;width:41.66667%}.column.is-offset-5-mobile{margin-left:41.66667%}.column.is-6-mobile{flex:none;width:50%}.column.is-offset-6-mobile{margin-left:50%}.column.is-7-mobile{flex:none;width:58.33333%}.column.is-offset-7-mobile{margin-left:58.33333%}.column.is-8-mobile{flex:none;width:66.66667%}.column.is-offset-8-mobile{margin-left:66.66667%}.column.is-9-mobile{flex:none;width:75%}.column.is-offset-9-mobile{margin-left:75%}.column.is-10-mobile{flex:none;width:83.33333%}.column.is-offset-10-mobile{margin-left:83.33333%}.column.is-11-mobile{flex:none;width:91.66667%}.column.is-offset-11-mobile{margin-left:91.66667%}.column.is-12-mobile{flex:none;width:100%}.column.is-offset-12-mobile{margin-left:100%}}@media screen and (min-width:769px),print{.column.is-narrow,.column.is-narrow-tablet{flex:none}.column.is-full,.column.is-full-tablet{flex:none;width:100%}.column.is-three-quarters,.column.is-three-quarters-tablet{flex:none;width:75%}.column.is-two-thirds,.column.is-two-thirds-tablet{flex:none;width:66.6666%}.column.is-half,.column.is-half-tablet{flex:none;width:50%}.column.is-one-third,.column.is-one-third-tablet{flex:none;width:33.3333%}.column.is-one-quarter,.column.is-one-quarter-tablet{flex:none;width:25%}.column.is-one-fifth,.column.is-one-fifth-tablet{flex:none;width:20%}.column.is-two-fifths,.column.is-two-fifths-tablet{flex:none;width:40%}.column.is-three-fifths,.column.is-three-fifths-tablet{flex:none;width:60%}.column.is-four-fifths,.column.is-four-fifths-tablet{flex:none;width:80%}.column.is-offset-three-quarters,.column.is-offset-three-quarters-tablet{margin-left:75%}.column.is-offset-two-thirds,.column.is-offset-two-thirds-tablet{margin-left:66.6666%}.column.is-offset-half,.column.is-offset-half-tablet{margin-left:50%}.column.is-offset-one-third,.column.is-offset-one-third-tablet{margin-left:33.3333%}.column.is-offset-one-quarter,.column.is-offset-one-quarter-tablet{margin-left:25%}.column.is-offset-one-fifth,.column.is-offset-one-fifth-tablet{margin-left:20%}.column.is-offset-two-fifths,.column.is-offset-two-fifths-tablet{margin-left:40%}.column.is-offset-three-fifths,.column.is-offset-three-fifths-tablet{margin-left:60%}.column.is-offset-four-fifths,.column.is-offset-four-fifths-tablet{margin-left:80%}.column.is-1,.column.is-1-tablet{flex:none;width:8.33333%}.column.is-offset-1,.column.is-offset-1-tablet{margin-left:8.33333%}.column.is-2,.column.is-2-tablet{flex:none;width:16.66667%}.column.is-offset-2,.column.is-offset-2-tablet{margin-left:16.66667%}.column.is-3,.column.is-3-tablet{flex:none;width:25%}.column.is-offset-3,.column.is-offset-3-tablet{margin-left:25%}.column.is-4,.column.is-4-tablet{flex:none;width:33.33333%}.column.is-offset-4,.column.is-offset-4-tablet{margin-left:33.33333%}.column.is-5,.column.is-5-tablet{flex:none;width:41.66667%}.column.is-offset-5,.column.is-offset-5-tablet{margin-left:41.66667%}.column.is-6,.column.is-6-tablet{flex:none;width:50%}.column.is-offset-6,.column.is-offset-6-tablet{margin-left:50%}.column.is-7,.column.is-7-tablet{flex:none;width:58.33333%}.column.is-offset-7,.column.is-offset-7-tablet{margin-left:58.33333%}.column.is-8,.column.is-8-tablet{flex:none;width:66.66667%}.column.is-offset-8,.column.is-offset-8-tablet{margin-left:66.66667%}.column.is-9,.column.is-9-tablet{flex:none;width:75%}.column.is-offset-9,.column.is-offset-9-tablet{margin-left:75%}.column.is-10,.column.is-10-tablet{flex:none;width:83.33333%}.column.is-offset-10,.column.is-offset-10-tablet{margin-left:83.33333%}.column.is-11,.column.is-11-tablet{flex:none;width:91.66667%}.column.is-offset-11,.column.is-offset-11-tablet{margin-left:91.66667%}.column.is-12,.column.is-12-tablet{flex:none;width:100%}.column.is-offset-12,.column.is-offset-12-tablet{margin-left:100%}}@media screen and (max-width:1087px){.column.is-narrow-touch{flex:none}.column.is-full-touch{flex:none;width:100%}.column.is-three-quarters-touch{flex:none;width:75%}.column.is-two-thirds-touch{flex:none;width:66.6666%}.column.is-half-touch{flex:none;width:50%}.column.is-one-third-touch{flex:none;width:33.3333%}.column.is-one-quarter-touch{flex:none;width:25%}.column.is-one-fifth-touch{flex:none;width:20%}.column.is-two-fifths-touch{flex:none;width:40%}.column.is-three-fifths-touch{flex:none;width:60%}.column.is-four-fifths-touch{flex:none;width:80%}.column.is-offset-three-quarters-touch{margin-left:75%}.column.is-offset-two-thirds-touch{margin-left:66.6666%}.column.is-offset-half-touch{margin-left:50%}.column.is-offset-one-third-touch{margin-left:33.3333%}.column.is-offset-one-quarter-touch{margin-left:25%}.column.is-offset-one-fifth-touch{margin-left:20%}.column.is-offset-two-fifths-touch{margin-left:40%}.column.is-offset-three-fifths-touch{margin-left:60%}.column.is-offset-four-fifths-touch{margin-left:80%}.column.is-1-touch{flex:none;width:8.33333%}.column.is-offset-1-touch{margin-left:8.33333%}.column.is-2-touch{flex:none;width:16.66667%}.column.is-offset-2-touch{margin-left:16.66667%}.column.is-3-touch{flex:none;width:25%}.column.is-offset-3-touch{margin-left:25%}.column.is-4-touch{flex:none;width:33.33333%}.column.is-offset-4-touch{margin-left:33.33333%}.column.is-5-touch{flex:none;width:41.66667%}.column.is-offset-5-touch{margin-left:41.66667%}.column.is-6-touch{flex:none;width:50%}.column.is-offset-6-touch{margin-left:50%}.column.is-7-touch{flex:none;width:58.33333%}.column.is-offset-7-touch{margin-left:58.33333%}.column.is-8-touch{flex:none;width:66.66667%}.column.is-offset-8-touch{margin-left:66.66667%}.column.is-9-touch{flex:none;width:75%}.column.is-offset-9-touch{margin-left:75%}.column.is-10-touch{flex:none;width:83.33333%}.column.is-offset-10-touch{margin-left:83.33333%}.column.is-11-touch{flex:none;width:91.66667%}.column.is-offset-11-touch{margin-left:91.66667%}.column.is-12-touch{flex:none;width:100%}.column.is-offset-12-touch{margin-left:100%}}@media screen and (min-width:1088px){.column.is-narrow-desktop{flex:none}.column.is-full-desktop{flex:none;width:100%}.column.is-three-quarters-desktop{flex:none;width:75%}.column.is-two-thirds-desktop{flex:none;width:66.6666%}.column.is-half-desktop{flex:none;width:50%}.column.is-one-third-desktop{flex:none;width:33.3333%}.column.is-one-quarter-desktop{flex:none;width:25%}.column.is-one-fifth-desktop{flex:none;width:20%}.column.is-two-fifths-desktop{flex:none;width:40%}.column.is-three-fifths-desktop{flex:none;width:60%}.column.is-four-fifths-desktop{flex:none;width:80%}.column.is-offset-three-quarters-desktop{margin-left:75%}.column.is-offset-two-thirds-desktop{margin-left:66.6666%}.column.is-offset-half-desktop{margin-left:50%}.column.is-offset-one-third-desktop{margin-left:33.3333%}.column.is-offset-one-quarter-desktop{margin-left:25%}.column.is-offset-one-fifth-desktop{margin-left:20%}.column.is-offset-two-fifths-desktop{margin-left:40%}.column.is-offset-three-fifths-desktop{margin-left:60%}.column.is-offset-four-fifths-desktop{margin-left:80%}.column.is-1-desktop{flex:none;width:8.33333%}.column.is-offset-1-desktop{margin-left:8.33333%}.column.is-2-desktop{flex:none;width:16.66667%}.column.is-offset-2-desktop{margin-left:16.66667%}.column.is-3-desktop{flex:none;width:25%}.column.is-offset-3-desktop{margin-left:25%}.column.is-4-desktop{flex:none;width:33.33333%}.column.is-offset-4-desktop{margin-left:33.33333%}.column.is-5-desktop{flex:none;width:41.66667%}.column.is-offset-5-desktop{margin-left:41.66667%}.column.is-6-desktop{flex:none;width:50%}.column.is-offset-6-desktop{margin-left:50%}.column.is-7-desktop{flex:none;width:58.33333%}.column.is-offset-7-desktop{margin-left:58.33333%}.column.is-8-desktop{flex:none;width:66.66667%}.column.is-offset-8-desktop{margin-left:66.66667%}.column.is-9-desktop{flex:none;width:75%}.column.is-offset-9-desktop{margin-left:75%}.column.is-10-desktop{flex:none;width:83.33333%}.column.is-offset-10-desktop{margin-left:83.33333%}.column.is-11-desktop{flex:none;width:91.66667%}.column.is-offset-11-desktop{margin-left:91.66667%}.column.is-12-desktop{flex:none;width:100%}.column.is-offset-12-desktop{margin-left:100%}}@media screen and (min-width:1280px){.column.is-narrow-widescreen{flex:none}.column.is-full-widescreen{flex:none;width:100%}.column.is-three-quarters-widescreen{flex:none;width:75%}.column.is-two-thirds-widescreen{flex:none;width:66.6666%}.column.is-half-widescreen{flex:none;width:50%}.column.is-one-third-widescreen{flex:none;width:33.3333%}.column.is-one-quarter-widescreen{flex:none;width:25%}.column.is-one-fifth-widescreen{flex:none;width:20%}.column.is-two-fifths-widescreen{flex:none;width:40%}.column.is-three-fifths-widescreen{flex:none;width:60%}.column.is-four-fifths-widescreen{flex:none;width:80%}.column.is-offset-three-quarters-widescreen{margin-left:75%}.column.is-offset-two-thirds-widescreen{margin-left:66.6666%}.column.is-offset-half-widescreen{margin-left:50%}.column.is-offset-one-third-widescreen{margin-left:33.3333%}.column.is-offset-one-quarter-widescreen{margin-left:25%}.column.is-offset-one-fifth-widescreen{margin-left:20%}.column.is-offset-two-fifths-widescreen{margin-left:40%}.column.is-offset-three-fifths-widescreen{margin-left:60%}.column.is-offset-four-fifths-widescreen{margin-left:80%}.column.is-1-widescreen{flex:none;width:8.33333%}.column.is-offset-1-widescreen{margin-left:8.33333%}.column.is-2-widescreen{flex:none;width:16.66667%}.column.is-offset-2-widescreen{margin-left:16.66667%}.column.is-3-widescreen{flex:none;width:25%}.column.is-offset-3-widescreen{margin-left:25%}.column.is-4-widescreen{flex:none;width:33.33333%}.column.is-offset-4-widescreen{margin-left:33.33333%}.column.is-5-widescreen{flex:none;width:41.66667%}.column.is-offset-5-widescreen{margin-left:41.66667%}.column.is-6-widescreen{flex:none;width:50%}.column.is-offset-6-widescreen{margin-left:50%}.column.is-7-widescreen{flex:none;width:58.33333%}.column.is-offset-7-widescreen{margin-left:58.33333%}.column.is-8-widescreen{flex:none;width:66.66667%}.column.is-offset-8-widescreen{margin-left:66.66667%}.column.is-9-widescreen{flex:none;width:75%}.column.is-offset-9-widescreen{margin-left:75%}.column.is-10-widescreen{flex:none;width:83.33333%}.column.is-offset-10-widescreen{margin-left:83.33333%}.column.is-11-widescreen{flex:none;width:91.66667%}.column.is-offset-11-widescreen{margin-left:91.66667%}.column.is-12-widescreen{flex:none;width:100%}.column.is-offset-12-widescreen{margin-left:100%}}@media screen and (min-width:1472px){.column.is-narrow-fullhd{flex:none}.column.is-full-fullhd{flex:none;width:100%}.column.is-three-quarters-fullhd{flex:none;width:75%}.column.is-two-thirds-fullhd{flex:none;width:66.6666%}.column.is-half-fullhd{flex:none;width:50%}.column.is-one-third-fullhd{flex:none;width:33.3333%}.column.is-one-quarter-fullhd{flex:none;width:25%}.column.is-one-fifth-fullhd{flex:none;width:20%}.column.is-two-fifths-fullhd{flex:none;width:40%}.column.is-three-fifths-fullhd{flex:none;width:60%}.column.is-four-fifths-fullhd{flex:none;width:80%}.column.is-offset-three-quarters-fullhd{margin-left:75%}.column.is-offset-two-thirds-fullhd{margin-left:66.6666%}.column.is-offset-half-fullhd{margin-left:50%}.column.is-offset-one-third-fullhd{margin-left:33.3333%}.column.is-offset-one-quarter-fullhd{margin-left:25%}.column.is-offset-one-fifth-fullhd{margin-left:20%}.column.is-offset-two-fifths-fullhd{margin-left:40%}.column.is-offset-three-fifths-fullhd{margin-left:60%}.column.is-offset-four-fifths-fullhd{margin-left:80%}.column.is-1-fullhd{flex:none;width:8.33333%}.column.is-offset-1-fullhd{margin-left:8.33333%}.column.is-2-fullhd{flex:none;width:16.66667%}.column.is-offset-2-fullhd{margin-left:16.66667%}.column.is-3-fullhd{flex:none;width:25%}.column.is-offset-3-fullhd{margin-left:25%}.column.is-4-fullhd{flex:none;width:33.33333%}.column.is-offset-4-fullhd{margin-left:33.33333%}.column.is-5-fullhd{flex:none;width:41.66667%}.column.is-offset-5-fullhd{margin-left:41.66667%}.column.is-6-fullhd{flex:none;width:50%}.column.is-offset-6-fullhd{margin-left:50%}.column.is-7-fullhd{flex:none;width:58.33333%}.column.is-offset-7-fullhd{margin-left:58.33333%}.column.is-8-fullhd{flex:none;width:66.66667%}.column.is-offset-8-fullhd{margin-left:66.66667%}.column.is-9-fullhd{flex:none;width:75%}.column.is-offset-9-fullhd{margin-left:75%}.column.is-10-fullhd{flex:none;width:83.33333%}.column.is-offset-10-fullhd{margin-left:83.33333%}.column.is-11-fullhd{flex:none;width:91.66667%}.column.is-offset-11-fullhd{margin-left:91.66667%}.column.is-12-fullhd{flex:none;width:100%}.column.is-offset-12-fullhd{margin-left:100%}}.columns{margin-left:-.75rem;margin-right:-.75rem;margin-top:-.75rem}.columns:last-child{margin-bottom:-.75rem}.columns:not(:last-child){margin-bottom:calc(1.5rem - .75rem)}.columns.is-centered{justify-content:center}.columns.is-gapless{margin-left:0;margin-right:0;margin-top:0}.columns.is-gapless>.column{margin:0;padding:0!important}.columns.is-gapless:not(:last-child){margin-bottom:1.5rem}.columns.is-gapless:last-child{margin-bottom:0}.columns.is-mobile{display:flex}.columns.is-multiline{flex-wrap:wrap}.columns.is-vcentered{align-items:center}@media screen and (min-width:769px),print{.columns:not(.is-desktop){display:flex}}@media screen and (min-width:1088px){.columns.is-desktop{display:flex}}.columns.is-variable{--columnGap:0.75rem;margin-left:calc(-1 * var(--columnGap));margin-right:calc(-1 * var(--columnGap))}.columns.is-variable .column{padding-left:var(--columnGap);padding-right:var(--columnGap)}.columns.is-variable.is-0{--columnGap:0rem}@media screen and (max-width:768px){.columns.is-variable.is-0-mobile{--columnGap:0rem}}@media screen and (min-width:769px),print{.columns.is-variable.is-0-tablet{--columnGap:0rem}}@media screen and (min-width:769px) and (max-width:1087px){.columns.is-variable.is-0-tablet-only{--columnGap:0rem}}@media screen and (max-width:1087px){.columns.is-variable.is-0-touch{--columnGap:0rem}}@media screen and (min-width:1088px){.columns.is-variable.is-0-desktop{--columnGap:0rem}}@media screen and (min-width:1088px) and (max-width:1279px){.columns.is-variable.is-0-desktop-only{--columnGap:0rem}}@media screen and (min-width:1280px){.columns.is-variable.is-0-widescreen{--columnGap:0rem}}@media screen and (min-width:1280px) and (max-width:1471px){.columns.is-variable.is-0-widescreen-only{--columnGap:0rem}}@media screen and (min-width:1472px){.columns.is-variable.is-0-fullhd{--columnGap:0rem}}.columns.is-variable.is-1{--columnGap:0.25rem}@media screen and (max-width:768px){.columns.is-variable.is-1-mobile{--columnGap:0.25rem}}@media screen and (min-width:769px),print{.columns.is-variable.is-1-tablet{--columnGap:0.25rem}}@media screen and (min-width:769px) and (max-width:1087px){.columns.is-variable.is-1-tablet-only{--columnGap:0.25rem}}@media screen and (max-width:1087px){.columns.is-variable.is-1-touch{--columnGap:0.25rem}}@media screen and (min-width:1088px){.columns.is-variable.is-1-desktop{--columnGap:0.25rem}}@media screen and (min-width:1088px) and (max-width:1279px){.columns.is-variable.is-1-desktop-only{--columnGap:0.25rem}}@media screen and (min-width:1280px){.columns.is-variable.is-1-widescreen{--columnGap:0.25rem}}@media screen and (min-width:1280px) and (max-width:1471px){.columns.is-variable.is-1-widescreen-only{--columnGap:0.25rem}}@media screen and (min-width:1472px){.columns.is-variable.is-1-fullhd{--columnGap:0.25rem}}.columns.is-variable.is-2{--columnGap:0.5rem}@media screen and (max-width:768px){.columns.is-variable.is-2-mobile{--columnGap:0.5rem}}@media screen and (min-width:769px),print{.columns.is-variable.is-2-tablet{--columnGap:0.5rem}}@media screen and (min-width:769px) and (max-width:1087px){.columns.is-variable.is-2-tablet-only{--columnGap:0.5rem}}@media screen and (max-width:1087px){.columns.is-variable.is-2-touch{--columnGap:0.5rem}}@media screen and (min-width:1088px){.columns.is-variable.is-2-desktop{--columnGap:0.5rem}}@media screen and (min-width:1088px) and (max-width:1279px){.columns.is-variable.is-2-desktop-only{--columnGap:0.5rem}}@media screen and (min-width:1280px){.columns.is-variable.is-2-widescreen{--columnGap:0.5rem}}@media screen and (min-width:1280px) and (max-width:1471px){.columns.is-variable.is-2-widescreen-only{--columnGap:0.5rem}}@media screen and (min-width:1472px){.columns.is-variable.is-2-fullhd{--columnGap:0.5rem}}.columns.is-variable.is-3{--columnGap:0.75rem}@media screen and (max-width:768px){.columns.is-variable.is-3-mobile{--columnGap:0.75rem}}@media screen and (min-width:769px),print{.columns.is-variable.is-3-tablet{--columnGap:0.75rem}}@media screen and (min-width:769px) and (max-width:1087px){.columns.is-variable.is-3-tablet-only{--columnGap:0.75rem}}@media screen and (max-width:1087px){.columns.is-variable.is-3-touch{--columnGap:0.75rem}}@media screen and (min-width:1088px){.columns.is-variable.is-3-desktop{--columnGap:0.75rem}}@media screen and (min-width:1088px) and (max-width:1279px){.columns.is-variable.is-3-desktop-only{--columnGap:0.75rem}}@media screen and (min-width:1280px){.columns.is-variable.is-3-widescreen{--columnGap:0.75rem}}@media screen and (min-width:1280px) and (max-width:1471px){.columns.is-variable.is-3-widescreen-only{--columnGap:0.75rem}}@media screen and (min-width:1472px){.columns.is-variable.is-3-fullhd{--columnGap:0.75rem}}.columns.is-variable.is-4{--columnGap:1rem}@media screen and (max-width:768px){.columns.is-variable.is-4-mobile{--columnGap:1rem}}@media screen and (min-width:769px),print{.columns.is-variable.is-4-tablet{--columnGap:1rem}}@media screen and (min-width:769px) and (max-width:1087px){.columns.is-variable.is-4-tablet-only{--columnGap:1rem}}@media screen and (max-width:1087px){.columns.is-variable.is-4-touch{--columnGap:1rem}}@media screen and (min-width:1088px){.columns.is-variable.is-4-desktop{--columnGap:1rem}}@media screen and (min-width:1088px) and (max-width:1279px){.columns.is-variable.is-4-desktop-only{--columnGap:1rem}}@media screen and (min-width:1280px){.columns.is-variable.is-4-widescreen{--columnGap:1rem}}@media screen and (min-width:1280px) and (max-width:1471px){.columns.is-variable.is-4-widescreen-only{--columnGap:1rem}}@media screen and (min-width:1472px){.columns.is-variable.is-4-fullhd{--columnGap:1rem}}.columns.is-variable.is-5{--columnGap:1.25rem}@media screen and (max-width:768px){.columns.is-variable.is-5-mobile{--columnGap:1.25rem}}@media screen and (min-width:769px),print{.columns.is-variable.is-5-tablet{--columnGap:1.25rem}}@media screen and (min-width:769px) and (max-width:1087px){.columns.is-variable.is-5-tablet-only{--columnGap:1.25rem}}@media screen and (max-width:1087px){.columns.is-variable.is-5-touch{--columnGap:1.25rem}}@media screen and (min-width:1088px){.columns.is-variable.is-5-desktop{--columnGap:1.25rem}}@media screen and (min-width:1088px) and (max-width:1279px){.columns.is-variable.is-5-desktop-only{--columnGap:1.25rem}}@media screen and (min-width:1280px){.columns.is-variable.is-5-widescreen{--columnGap:1.25rem}}@media screen and (min-width:1280px) and (max-width:1471px){.columns.is-variable.is-5-widescreen-only{--columnGap:1.25rem}}@media screen and (min-width:1472px){.columns.is-variable.is-5-fullhd{--columnGap:1.25rem}}.columns.is-variable.is-6{--columnGap:1.5rem}@media screen and (max-width:768px){.columns.is-variable.is-6-mobile{--columnGap:1.5rem}}@media screen and (min-width:769px),print{.columns.is-variable.is-6-tablet{--columnGap:1.5rem}}@media screen and (min-width:769px) and (max-width:1087px){.columns.is-variable.is-6-tablet-only{--columnGap:1.5rem}}@media screen and (max-width:1087px){.columns.is-variable.is-6-touch{--columnGap:1.5rem}}@media screen and (min-width:1088px){.columns.is-variable.is-6-desktop{--columnGap:1.5rem}}@media screen and (min-width:1088px) and (max-width:1279px){.columns.is-variable.is-6-desktop-only{--columnGap:1.5rem}}@media screen and (min-width:1280px){.columns.is-variable.is-6-widescreen{--columnGap:1.5rem}}@media screen and (min-width:1280px) and (max-width:1471px){.columns.is-variable.is-6-widescreen-only{--columnGap:1.5rem}}@media screen and (min-width:1472px){.columns.is-variable.is-6-fullhd{--columnGap:1.5rem}}.columns.is-variable.is-7{--columnGap:1.75rem}@media screen and (max-width:768px){.columns.is-variable.is-7-mobile{--columnGap:1.75rem}}@media screen and (min-width:769px),print{.columns.is-variable.is-7-tablet{--columnGap:1.75rem}}@media screen and (min-width:769px) and (max-width:1087px){.columns.is-variable.is-7-tablet-only{--columnGap:1.75rem}}@media screen and (max-width:1087px){.columns.is-variable.is-7-touch{--columnGap:1.75rem}}@media screen and (min-width:1088px){.columns.is-variable.is-7-desktop{--columnGap:1.75rem}}@media screen and (min-width:1088px) and (max-width:1279px){.columns.is-variable.is-7-desktop-only{--columnGap:1.75rem}}@media screen and (min-width:1280px){.columns.is-variable.is-7-widescreen{--columnGap:1.75rem}}@media screen and (min-width:1280px) and (max-width:1471px){.columns.is-variable.is-7-widescreen-only{--columnGap:1.75rem}}@media screen and (min-width:1472px){.columns.is-variable.is-7-fullhd{--columnGap:1.75rem}}.columns.is-variable.is-8{--columnGap:2rem}@media screen and (max-width:768px){.columns.is-variable.is-8-mobile{--columnGap:2rem}}@media screen and (min-width:769px),print{.columns.is-variable.is-8-tablet{--columnGap:2rem}}@media screen and (min-width:769px) and (max-width:1087px){.columns.is-variable.is-8-tablet-only{--columnGap:2rem}}@media screen and (max-width:1087px){.columns.is-variable.is-8-touch{--columnGap:2rem}}@media screen and (min-width:1088px){.columns.is-variable.is-8-desktop{--columnGap:2rem}}@media screen and (min-width:1088px) and (max-width:1279px){.columns.is-variable.is-8-desktop-only{--columnGap:2rem}}@media screen and (min-width:1280px){.columns.is-variable.is-8-widescreen{--columnGap:2rem}}@media screen and (min-width:1280px) and (max-width:1471px){.columns.is-variable.is-8-widescreen-only{--columnGap:2rem}}@media screen and (min-width:1472px){.columns.is-variable.is-8-fullhd{--columnGap:2rem}}.tile{align-items:stretch;display:block;flex-basis:0;flex-grow:1;flex-shrink:1;min-height:-webkit-min-content;min-height:-moz-min-content;min-height:min-content}.tile.is-ancestor{margin-left:-.75rem;margin-right:-.75rem;margin-top:-.75rem}.tile.is-ancestor:last-child{margin-bottom:-.75rem}.tile.is-ancestor:not(:last-child){margin-bottom:.75rem}.tile.is-child{margin:0!important}.tile.is-parent{padding:.75rem}.tile.is-vertical{flex-direction:column}.tile.is-vertical>.tile.is-child:not(:last-child){margin-bottom:1.5rem!important}@media screen and (min-width:769px),print{.tile:not(.is-child){display:flex}.tile.is-1{flex:none;width:8.33333%}.tile.is-2{flex:none;width:16.66667%}.tile.is-3{flex:none;width:25%}.tile.is-4{flex:none;width:33.33333%}.tile.is-5{flex:none;width:41.66667%}.tile.is-6{flex:none;width:50%}.tile.is-7{flex:none;width:58.33333%}.tile.is-8{flex:none;width:66.66667%}.tile.is-9{flex:none;width:75%}.tile.is-10{flex:none;width:83.33333%}.tile.is-11{flex:none;width:91.66667%}.tile.is-12{flex:none;width:100%}}.hero{align-items:stretch;display:flex;flex-direction:column;justify-content:space-between}.hero .navbar{background:0 0}.hero .tabs ul{border-bottom:none}.hero.is-white{background-color:#fff;color:#0a0a0a}.hero.is-white a:not(.button):not(.dropdown-item):not(.tag),.hero.is-white strong{color:inherit}.hero.is-white .title{color:#0a0a0a}.hero.is-white .subtitle{color:rgba(10,10,10,.9)}.hero.is-white .subtitle a:not(.button),.hero.is-white .subtitle strong{color:#0a0a0a}@media screen and (max-width:1087px){.hero.is-white .navbar-menu{background-color:#fff}}.hero.is-white .navbar-item,.hero.is-white .navbar-link{color:rgba(10,10,10,.7)}.hero.is-white .navbar-link.is-active,.hero.is-white .navbar-link:hover,.hero.is-white a.navbar-item.is-active,.hero.is-white a.navbar-item:hover{background-color:#f2f2f2;color:#0a0a0a}.hero.is-white .tabs a{color:#0a0a0a;opacity:.9}.hero.is-white .tabs a:hover{opacity:1}.hero.is-white .tabs li.is-active a{opacity:1}.hero.is-white .tabs.is-boxed a,.hero.is-white .tabs.is-toggle a{color:#0a0a0a}.hero.is-white .tabs.is-boxed a:hover,.hero.is-white .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-white .tabs.is-boxed li.is-active a,.hero.is-white .tabs.is-boxed li.is-active a:hover,.hero.is-white .tabs.is-toggle li.is-active a,.hero.is-white .tabs.is-toggle li.is-active a:hover{background-color:#0a0a0a;border-color:#0a0a0a;color:#fff}.hero.is-white.is-bold{background-image:linear-gradient(141deg,#e6e6e6 0,#fff 71%,#fff 100%)}@media screen and (max-width:768px){.hero.is-white.is-bold .navbar-menu{background-image:linear-gradient(141deg,#e6e6e6 0,#fff 71%,#fff 100%)}}.hero.is-black{background-color:#0a0a0a;color:#fff}.hero.is-black a:not(.button):not(.dropdown-item):not(.tag),.hero.is-black strong{color:inherit}.hero.is-black .title{color:#fff}.hero.is-black .subtitle{color:rgba(255,255,255,.9)}.hero.is-black .subtitle a:not(.button),.hero.is-black .subtitle strong{color:#fff}@media screen and (max-width:1087px){.hero.is-black .navbar-menu{background-color:#0a0a0a}}.hero.is-black .navbar-item,.hero.is-black .navbar-link{color:rgba(255,255,255,.7)}.hero.is-black .navbar-link.is-active,.hero.is-black .navbar-link:hover,.hero.is-black a.navbar-item.is-active,.hero.is-black a.navbar-item:hover{background-color:#000;color:#fff}.hero.is-black .tabs a{color:#fff;opacity:.9}.hero.is-black .tabs a:hover{opacity:1}.hero.is-black .tabs li.is-active a{opacity:1}.hero.is-black .tabs.is-boxed a,.hero.is-black .tabs.is-toggle a{color:#fff}.hero.is-black .tabs.is-boxed a:hover,.hero.is-black .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-black .tabs.is-boxed li.is-active a,.hero.is-black .tabs.is-boxed li.is-active a:hover,.hero.is-black .tabs.is-toggle li.is-active a,.hero.is-black .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#0a0a0a}.hero.is-black.is-bold{background-image:linear-gradient(141deg,#000 0,#0a0a0a 71%,#181616 100%)}@media screen and (max-width:768px){.hero.is-black.is-bold .navbar-menu{background-image:linear-gradient(141deg,#000 0,#0a0a0a 71%,#181616 100%)}}.hero.is-light{background-color:#f5f5f5;color:#363636}.hero.is-light a:not(.button):not(.dropdown-item):not(.tag),.hero.is-light strong{color:inherit}.hero.is-light .title{color:#363636}.hero.is-light .subtitle{color:rgba(54,54,54,.9)}.hero.is-light .subtitle a:not(.button),.hero.is-light .subtitle strong{color:#363636}@media screen and (max-width:1087px){.hero.is-light .navbar-menu{background-color:#f5f5f5}}.hero.is-light .navbar-item,.hero.is-light .navbar-link{color:rgba(54,54,54,.7)}.hero.is-light .navbar-link.is-active,.hero.is-light .navbar-link:hover,.hero.is-light a.navbar-item.is-active,.hero.is-light a.navbar-item:hover{background-color:#e8e8e8;color:#363636}.hero.is-light .tabs a{color:#363636;opacity:.9}.hero.is-light .tabs a:hover{opacity:1}.hero.is-light .tabs li.is-active a{opacity:1}.hero.is-light .tabs.is-boxed a,.hero.is-light .tabs.is-toggle a{color:#363636}.hero.is-light .tabs.is-boxed a:hover,.hero.is-light .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-light .tabs.is-boxed li.is-active a,.hero.is-light .tabs.is-boxed li.is-active a:hover,.hero.is-light .tabs.is-toggle li.is-active a,.hero.is-light .tabs.is-toggle li.is-active a:hover{background-color:#363636;border-color:#363636;color:#f5f5f5}.hero.is-light.is-bold{background-image:linear-gradient(141deg,#dfd8d9 0,#f5f5f5 71%,#fff 100%)}@media screen and (max-width:768px){.hero.is-light.is-bold .navbar-menu{background-image:linear-gradient(141deg,#dfd8d9 0,#f5f5f5 71%,#fff 100%)}}.hero.is-dark{background-color:#363636;color:#f5f5f5}.hero.is-dark a:not(.button):not(.dropdown-item):not(.tag),.hero.is-dark strong{color:inherit}.hero.is-dark .title{color:#f5f5f5}.hero.is-dark .subtitle{color:rgba(245,245,245,.9)}.hero.is-dark .subtitle a:not(.button),.hero.is-dark .subtitle strong{color:#f5f5f5}@media screen and (max-width:1087px){.hero.is-dark .navbar-menu{background-color:#363636}}.hero.is-dark .navbar-item,.hero.is-dark .navbar-link{color:rgba(245,245,245,.7)}.hero.is-dark .navbar-link.is-active,.hero.is-dark .navbar-link:hover,.hero.is-dark a.navbar-item.is-active,.hero.is-dark a.navbar-item:hover{background-color:#292929;color:#f5f5f5}.hero.is-dark .tabs a{color:#f5f5f5;opacity:.9}.hero.is-dark .tabs a:hover{opacity:1}.hero.is-dark .tabs li.is-active a{opacity:1}.hero.is-dark .tabs.is-boxed a,.hero.is-dark .tabs.is-toggle a{color:#f5f5f5}.hero.is-dark .tabs.is-boxed a:hover,.hero.is-dark .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-dark .tabs.is-boxed li.is-active a,.hero.is-dark .tabs.is-boxed li.is-active a:hover,.hero.is-dark .tabs.is-toggle li.is-active a,.hero.is-dark .tabs.is-toggle li.is-active a:hover{background-color:#f5f5f5;border-color:#f5f5f5;color:#363636}.hero.is-dark.is-bold{background-image:linear-gradient(141deg,#1f191a 0,#363636 71%,#46403f 100%)}@media screen and (max-width:768px){.hero.is-dark.is-bold .navbar-menu{background-image:linear-gradient(141deg,#1f191a 0,#363636 71%,#46403f 100%)}}.hero.is-primary{background-color:#00d1b2;color:#fff}.hero.is-primary a:not(.button):not(.dropdown-item):not(.tag),.hero.is-primary strong{color:inherit}.hero.is-primary .title{color:#fff}.hero.is-primary .subtitle{color:rgba(255,255,255,.9)}.hero.is-primary .subtitle a:not(.button),.hero.is-primary .subtitle strong{color:#fff}@media screen and (max-width:1087px){.hero.is-primary .navbar-menu{background-color:#00d1b2}}.hero.is-primary .navbar-item,.hero.is-primary .navbar-link{color:rgba(255,255,255,.7)}.hero.is-primary .navbar-link.is-active,.hero.is-primary .navbar-link:hover,.hero.is-primary a.navbar-item.is-active,.hero.is-primary a.navbar-item:hover{background-color:#00b89c;color:#fff}.hero.is-primary .tabs a{color:#fff;opacity:.9}.hero.is-primary .tabs a:hover{opacity:1}.hero.is-primary .tabs li.is-active a{opacity:1}.hero.is-primary .tabs.is-boxed a,.hero.is-primary .tabs.is-toggle a{color:#fff}.hero.is-primary .tabs.is-boxed a:hover,.hero.is-primary .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-primary .tabs.is-boxed li.is-active a,.hero.is-primary .tabs.is-boxed li.is-active a:hover,.hero.is-primary .tabs.is-toggle li.is-active a,.hero.is-primary .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#00d1b2}.hero.is-primary.is-bold{background-image:linear-gradient(141deg,#009e6c 0,#00d1b2 71%,#00e7eb 100%)}@media screen and (max-width:768px){.hero.is-primary.is-bold .navbar-menu{background-image:linear-gradient(141deg,#009e6c 0,#00d1b2 71%,#00e7eb 100%)}}.hero.is-link{background-color:#3273dc;color:#fff}.hero.is-link a:not(.button):not(.dropdown-item):not(.tag),.hero.is-link strong{color:inherit}.hero.is-link .title{color:#fff}.hero.is-link .subtitle{color:rgba(255,255,255,.9)}.hero.is-link .subtitle a:not(.button),.hero.is-link .subtitle strong{color:#fff}@media screen and (max-width:1087px){.hero.is-link .navbar-menu{background-color:#3273dc}}.hero.is-link .navbar-item,.hero.is-link .navbar-link{color:rgba(255,255,255,.7)}.hero.is-link .navbar-link.is-active,.hero.is-link .navbar-link:hover,.hero.is-link a.navbar-item.is-active,.hero.is-link a.navbar-item:hover{background-color:#2366d1;color:#fff}.hero.is-link .tabs a{color:#fff;opacity:.9}.hero.is-link .tabs a:hover{opacity:1}.hero.is-link .tabs li.is-active a{opacity:1}.hero.is-link .tabs.is-boxed a,.hero.is-link .tabs.is-toggle a{color:#fff}.hero.is-link .tabs.is-boxed a:hover,.hero.is-link .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-link .tabs.is-boxed li.is-active a,.hero.is-link .tabs.is-boxed li.is-active a:hover,.hero.is-link .tabs.is-toggle li.is-active a,.hero.is-link .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#3273dc}.hero.is-link.is-bold{background-image:linear-gradient(141deg,#1577c6 0,#3273dc 71%,#4366e5 100%)}@media screen and (max-width:768px){.hero.is-link.is-bold .navbar-menu{background-image:linear-gradient(141deg,#1577c6 0,#3273dc 71%,#4366e5 100%)}}.hero.is-info{background-color:#209cee;color:#fff}.hero.is-info a:not(.button):not(.dropdown-item):not(.tag),.hero.is-info strong{color:inherit}.hero.is-info .title{color:#fff}.hero.is-info .subtitle{color:rgba(255,255,255,.9)}.hero.is-info .subtitle a:not(.button),.hero.is-info .subtitle strong{color:#fff}@media screen and (max-width:1087px){.hero.is-info .navbar-menu{background-color:#209cee}}.hero.is-info .navbar-item,.hero.is-info .navbar-link{color:rgba(255,255,255,.7)}.hero.is-info .navbar-link.is-active,.hero.is-info .navbar-link:hover,.hero.is-info a.navbar-item.is-active,.hero.is-info a.navbar-item:hover{background-color:#118fe4;color:#fff}.hero.is-info .tabs a{color:#fff;opacity:.9}.hero.is-info .tabs a:hover{opacity:1}.hero.is-info .tabs li.is-active a{opacity:1}.hero.is-info .tabs.is-boxed a,.hero.is-info .tabs.is-toggle a{color:#fff}.hero.is-info .tabs.is-boxed a:hover,.hero.is-info .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-info .tabs.is-boxed li.is-active a,.hero.is-info .tabs.is-boxed li.is-active a:hover,.hero.is-info .tabs.is-toggle li.is-active a,.hero.is-info .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#209cee}.hero.is-info.is-bold{background-image:linear-gradient(141deg,#04a6d7 0,#209cee 71%,#3287f5 100%)}@media screen and (max-width:768px){.hero.is-info.is-bold .navbar-menu{background-image:linear-gradient(141deg,#04a6d7 0,#209cee 71%,#3287f5 100%)}}.hero.is-success{background-color:#23d160;color:#fff}.hero.is-success a:not(.button):not(.dropdown-item):not(.tag),.hero.is-success strong{color:inherit}.hero.is-success .title{color:#fff}.hero.is-success .subtitle{color:rgba(255,255,255,.9)}.hero.is-success .subtitle a:not(.button),.hero.is-success .subtitle strong{color:#fff}@media screen and (max-width:1087px){.hero.is-success .navbar-menu{background-color:#23d160}}.hero.is-success .navbar-item,.hero.is-success .navbar-link{color:rgba(255,255,255,.7)}.hero.is-success .navbar-link.is-active,.hero.is-success .navbar-link:hover,.hero.is-success a.navbar-item.is-active,.hero.is-success a.navbar-item:hover{background-color:#20bc56;color:#fff}.hero.is-success .tabs a{color:#fff;opacity:.9}.hero.is-success .tabs a:hover{opacity:1}.hero.is-success .tabs li.is-active a{opacity:1}.hero.is-success .tabs.is-boxed a,.hero.is-success .tabs.is-toggle a{color:#fff}.hero.is-success .tabs.is-boxed a:hover,.hero.is-success .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-success .tabs.is-boxed li.is-active a,.hero.is-success .tabs.is-boxed li.is-active a:hover,.hero.is-success .tabs.is-toggle li.is-active a,.hero.is-success .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#23d160}.hero.is-success.is-bold{background-image:linear-gradient(141deg,#12af2f 0,#23d160 71%,#2ce28a 100%)}@media screen and (max-width:768px){.hero.is-success.is-bold .navbar-menu{background-image:linear-gradient(141deg,#12af2f 0,#23d160 71%,#2ce28a 100%)}}.hero.is-warning{background-color:#ffdd57;color:rgba(0,0,0,.7)}.hero.is-warning a:not(.button):not(.dropdown-item):not(.tag),.hero.is-warning strong{color:inherit}.hero.is-warning .title{color:rgba(0,0,0,.7)}.hero.is-warning .subtitle{color:rgba(0,0,0,.9)}.hero.is-warning .subtitle a:not(.button),.hero.is-warning .subtitle strong{color:rgba(0,0,0,.7)}@media screen and (max-width:1087px){.hero.is-warning .navbar-menu{background-color:#ffdd57}}.hero.is-warning .navbar-item,.hero.is-warning .navbar-link{color:rgba(0,0,0,.7)}.hero.is-warning .navbar-link.is-active,.hero.is-warning .navbar-link:hover,.hero.is-warning a.navbar-item.is-active,.hero.is-warning a.navbar-item:hover{background-color:#ffd83d;color:rgba(0,0,0,.7)}.hero.is-warning .tabs a{color:rgba(0,0,0,.7);opacity:.9}.hero.is-warning .tabs a:hover{opacity:1}.hero.is-warning .tabs li.is-active a{opacity:1}.hero.is-warning .tabs.is-boxed a,.hero.is-warning .tabs.is-toggle a{color:rgba(0,0,0,.7)}.hero.is-warning .tabs.is-boxed a:hover,.hero.is-warning .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-warning .tabs.is-boxed li.is-active a,.hero.is-warning .tabs.is-boxed li.is-active a:hover,.hero.is-warning .tabs.is-toggle li.is-active a,.hero.is-warning .tabs.is-toggle li.is-active a:hover{background-color:rgba(0,0,0,.7);border-color:rgba(0,0,0,.7);color:#ffdd57}.hero.is-warning.is-bold{background-image:linear-gradient(141deg,#ffaf24 0,#ffdd57 71%,#fffa70 100%)}@media screen and (max-width:768px){.hero.is-warning.is-bold .navbar-menu{background-image:linear-gradient(141deg,#ffaf24 0,#ffdd57 71%,#fffa70 100%)}}.hero.is-danger{background-color:#ff3860;color:#fff}.hero.is-danger a:not(.button):not(.dropdown-item):not(.tag),.hero.is-danger strong{color:inherit}.hero.is-danger .title{color:#fff}.hero.is-danger .subtitle{color:rgba(255,255,255,.9)}.hero.is-danger .subtitle a:not(.button),.hero.is-danger .subtitle strong{color:#fff}@media screen and (max-width:1087px){.hero.is-danger .navbar-menu{background-color:#ff3860}}.hero.is-danger .navbar-item,.hero.is-danger .navbar-link{color:rgba(255,255,255,.7)}.hero.is-danger .navbar-link.is-active,.hero.is-danger .navbar-link:hover,.hero.is-danger a.navbar-item.is-active,.hero.is-danger a.navbar-item:hover{background-color:#ff1f4b;color:#fff}.hero.is-danger .tabs a{color:#fff;opacity:.9}.hero.is-danger .tabs a:hover{opacity:1}.hero.is-danger .tabs li.is-active a{opacity:1}.hero.is-danger .tabs.is-boxed a,.hero.is-danger .tabs.is-toggle a{color:#fff}.hero.is-danger .tabs.is-boxed a:hover,.hero.is-danger .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-danger .tabs.is-boxed li.is-active a,.hero.is-danger .tabs.is-boxed li.is-active a:hover,.hero.is-danger .tabs.is-toggle li.is-active a,.hero.is-danger .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#ff3860}.hero.is-danger.is-bold{background-image:linear-gradient(141deg,#ff0561 0,#ff3860 71%,#ff5257 100%)}@media screen and (max-width:768px){.hero.is-danger.is-bold .navbar-menu{background-image:linear-gradient(141deg,#ff0561 0,#ff3860 71%,#ff5257 100%)}}.hero.is-small .hero-body{padding-bottom:1.5rem;padding-top:1.5rem}@media screen and (min-width:769px),print{.hero.is-medium .hero-body{padding-bottom:9rem;padding-top:9rem}}@media screen and (min-width:769px),print{.hero.is-large .hero-body{padding-bottom:18rem;padding-top:18rem}}.hero.is-fullheight .hero-body,.hero.is-fullheight-with-navbar .hero-body,.hero.is-halfheight .hero-body{align-items:center;display:flex}.hero.is-fullheight .hero-body>.container,.hero.is-fullheight-with-navbar .hero-body>.container,.hero.is-halfheight .hero-body>.container{flex-grow:1;flex-shrink:1}.hero.is-halfheight{min-height:50vh}.hero.is-fullheight{min-height:100vh}.hero-video{overflow:hidden}.hero-video video{left:50%;min-height:100%;min-width:100%;position:absolute;top:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)}.hero-video.is-transparent{opacity:.3}@media screen and (max-width:768px){.hero-video{display:none}}.hero-buttons{margin-top:1.5rem}@media screen and (max-width:768px){.hero-buttons .button{display:flex}.hero-buttons .button:not(:last-child){margin-bottom:.75rem}}@media screen and (min-width:769px),print{.hero-buttons{display:flex;justify-content:center}.hero-buttons .button:not(:last-child){margin-right:1.5rem}}.hero-foot,.hero-head{flex-grow:0;flex-shrink:0}.hero-body{flex-grow:1;flex-shrink:0;padding:3rem 1.5rem}.section{padding:3rem 1.5rem}@media screen and (min-width:1088px){.section.is-medium{padding:9rem 1.5rem}.section.is-large{padding:18rem 1.5rem}}.footer{background-color:#fafafa;padding:3rem 1.5rem 6rem}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/svelte/index.mjs":
/*!***************************************!*\
  !*** ./node_modules/svelte/index.mjs ***!
  \***************************************/
/*! exports provided: onMount, onDestroy, beforeUpdate, afterUpdate, setContext, getContext, tick, createEventDispatcher */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal */ "./node_modules/svelte/internal.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onMount", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["onMount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onDestroy", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["onDestroy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "beforeUpdate", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["beforeUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "afterUpdate", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["afterUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["setContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getContext", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["getContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tick", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["tick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createEventDispatcher", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["createEventDispatcher"]; });




/***/ }),

/***/ "./node_modules/svelte/internal.mjs":
/*!******************************************!*\
  !*** ./node_modules/svelte/internal.mjs ***!
  \******************************************/
/*! exports provided: create_animation, fix_position, handle_promise, append, insert, detach, detach_between, detach_before, detach_after, destroy_each, element, object_without_properties, svg_element, text, space, empty, listen, prevent_default, stop_propagation, attr, set_attributes, set_custom_element_data, xlink_attr, get_binding_group_value, to_number, time_ranges_to_array, children, claim_element, claim_text, set_data, set_input_type, set_style, select_option, select_options, select_value, select_multiple_value, add_resize_listener, toggle_class, custom_event, destroy_block, outro_and_destroy_block, fix_and_outro_and_destroy_block, update_keyed_each, measure, current_component, set_current_component, beforeUpdate, onMount, afterUpdate, onDestroy, createEventDispatcher, setContext, getContext, bubble, clear_loops, loop, dirty_components, intros, schedule_update, tick, add_binding_callback, add_render_callback, add_flush_callback, flush, get_spread_update, invalid_attribute_name_character, spread, escaped, escape, each, missing_component, validate_component, debug, create_ssr_component, get_store_value, group_outros, check_outros, on_outro, create_in_transition, create_out_transition, create_bidirectional_transition, noop, identity, assign, is_promise, add_location, run, blank_object, run_all, is_function, safe_not_equal, not_equal, validate_store, subscribe, create_slot, get_slot_context, get_slot_changes, exclude_internal_props, now, set_now, bind, mount_component, init, SvelteElement, SvelteComponent, SvelteComponentDev */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_animation", function() { return create_animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fix_position", function() { return fix_position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handle_promise", function() { return handle_promise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append", function() { return append; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insert", function() { return insert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach", function() { return detach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach_between", function() { return detach_between; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach_before", function() { return detach_before; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach_after", function() { return detach_after; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy_each", function() { return destroy_each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "element", function() { return element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "object_without_properties", function() { return object_without_properties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svg_element", function() { return svg_element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "space", function() { return space; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listen", function() { return listen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prevent_default", function() { return prevent_default; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stop_propagation", function() { return stop_propagation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attr", function() { return attr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_attributes", function() { return set_attributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_custom_element_data", function() { return set_custom_element_data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xlink_attr", function() { return xlink_attr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_binding_group_value", function() { return get_binding_group_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "to_number", function() { return to_number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "time_ranges_to_array", function() { return time_ranges_to_array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "children", function() { return children; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "claim_element", function() { return claim_element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "claim_text", function() { return claim_text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_data", function() { return set_data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_input_type", function() { return set_input_type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_style", function() { return set_style; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select_option", function() { return select_option; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select_options", function() { return select_options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select_value", function() { return select_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select_multiple_value", function() { return select_multiple_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_resize_listener", function() { return add_resize_listener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggle_class", function() { return toggle_class; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "custom_event", function() { return custom_event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy_block", function() { return destroy_block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outro_and_destroy_block", function() { return outro_and_destroy_block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fix_and_outro_and_destroy_block", function() { return fix_and_outro_and_destroy_block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update_keyed_each", function() { return update_keyed_each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "measure", function() { return measure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "current_component", function() { return current_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_current_component", function() { return set_current_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beforeUpdate", function() { return beforeUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onMount", function() { return onMount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterUpdate", function() { return afterUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onDestroy", function() { return onDestroy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEventDispatcher", function() { return createEventDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return setContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContext", function() { return getContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bubble", function() { return bubble; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clear_loops", function() { return clear_loops; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loop", function() { return loop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dirty_components", function() { return dirty_components; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intros", function() { return intros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "schedule_update", function() { return schedule_update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tick", function() { return tick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_binding_callback", function() { return add_binding_callback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_render_callback", function() { return add_render_callback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_flush_callback", function() { return add_flush_callback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return flush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_spread_update", function() { return get_spread_update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invalid_attribute_name_character", function() { return invalid_attribute_name_character; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spread", function() { return spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escaped", function() { return escaped; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escape", function() { return escape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "each", function() { return each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "missing_component", function() { return missing_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate_component", function() { return validate_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debug", function() { return debug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_ssr_component", function() { return create_ssr_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_store_value", function() { return get_store_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "group_outros", function() { return group_outros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "check_outros", function() { return check_outros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on_outro", function() { return on_outro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_in_transition", function() { return create_in_transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_out_transition", function() { return create_out_transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_bidirectional_transition", function() { return create_bidirectional_transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_promise", function() { return is_promise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_location", function() { return add_location; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "run", function() { return run; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blank_object", function() { return blank_object; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "run_all", function() { return run_all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_function", function() { return is_function; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safe_not_equal", function() { return safe_not_equal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "not_equal", function() { return not_equal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate_store", function() { return validate_store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribe", function() { return subscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_slot", function() { return create_slot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_slot_context", function() { return get_slot_context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_slot_changes", function() { return get_slot_changes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exclude_internal_props", function() { return exclude_internal_props; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_now", function() { return set_now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mount_component", function() { return mount_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvelteElement", function() { return SvelteElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvelteComponent", function() { return SvelteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvelteComponentDev", function() { return SvelteComponentDev; });
function noop() {}

const identity = x => x;

function assign(tar, src) {
	for (const k in src) tar[k] = src[k];
	return tar;
}

function is_promise(value) {
	return value && typeof value.then === 'function';
}

function add_location(element, file, line, column, char) {
	element.__svelte_meta = {
		loc: { file, line, column, char }
	};
}

function run(fn) {
	return fn();
}

function blank_object() {
	return Object.create(null);
}

function run_all(fns) {
	fns.forEach(run);
}

function is_function(thing) {
	return typeof thing === 'function';
}

function safe_not_equal(a, b) {
	return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}

function not_equal(a, b) {
	return a != a ? b == b : a !== b;
}

function validate_store(store, name) {
	if (!store || typeof store.subscribe !== 'function') {
		throw new Error(`'${name}' is not a store with a 'subscribe' method`);
	}
}

function subscribe(component, store, callback) {
	const unsub = store.subscribe(callback);

	component.$$.on_destroy.push(unsub.unsubscribe
		? () => unsub.unsubscribe()
		: unsub);
}

function create_slot(definition, ctx, fn) {
	if (definition) {
		const slot_ctx = get_slot_context(definition, ctx, fn);
		return definition[0](slot_ctx);
	}
}

function get_slot_context(definition, ctx, fn) {
	return definition[1]
		? assign({}, assign(ctx.$$scope.ctx, definition[1](fn ? fn(ctx) : {})))
		: ctx.$$scope.ctx;
}

function get_slot_changes(definition, ctx, changed, fn) {
	return definition[1]
		? assign({}, assign(ctx.$$scope.changed || {}, definition[1](fn ? fn(changed) : {})))
		: ctx.$$scope.changed || {};
}

function exclude_internal_props(props) {
	const result = {};
	for (const k in props) if (k[0] !== '$') result[k] = props[k];
	return result;
}

let now = typeof window !== 'undefined'
	? () => window.performance.now()
	: () => Date.now();

// used internally for testing
function set_now(fn) {
	now = fn;
}

const tasks = new Set();
let running = false;

function run_tasks() {
	tasks.forEach(task => {
		if (!task[0](now())) {
			tasks.delete(task);
			task[1]();
		}
	});

	running = tasks.size > 0;
	if (running) requestAnimationFrame(run_tasks);
}

function clear_loops() {
	// for testing...
	tasks.forEach(task => tasks.delete(task));
	running = false;
}

function loop(fn) {
	let task;

	if (!running) {
		running = true;
		requestAnimationFrame(run_tasks);
	}

	return {
		promise: new Promise(fulfil => {
			tasks.add(task = [fn, fulfil]);
		}),
		abort() {
			tasks.delete(task);
		}
	};
}

function append(target, node) {
	target.appendChild(node);
}

function insert(target, node, anchor) {
	target.insertBefore(node, anchor || null);
}

function detach(node) {
	node.parentNode.removeChild(node);
}

function detach_between(before, after) {
	while (before.nextSibling && before.nextSibling !== after) {
		before.parentNode.removeChild(before.nextSibling);
	}
}

function detach_before(after) {
	while (after.previousSibling) {
		after.parentNode.removeChild(after.previousSibling);
	}
}

function detach_after(before) {
	while (before.nextSibling) {
		before.parentNode.removeChild(before.nextSibling);
	}
}

function destroy_each(iterations, detaching) {
	for (let i = 0; i < iterations.length; i += 1) {
		if (iterations[i]) iterations[i].d(detaching);
	}
}

function element(name) {
	return document.createElement(name);
}

function object_without_properties(obj, exclude) {
	const target = {};
	for (const k in obj) {
		if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) {
			target[k] = obj[k];
		}
	}
	return target;
}

function svg_element(name) {
	return document.createElementNS('http://www.w3.org/2000/svg', name);
}

function text(data) {
	return document.createTextNode(data);
}

function space() {
	return text(' ');
}

function empty() {
	return text('');
}

function listen(node, event, handler, options) {
	node.addEventListener(event, handler, options);
	return () => node.removeEventListener(event, handler, options);
}

function prevent_default(fn) {
	return function(event) {
		event.preventDefault();
		return fn.call(this, event);
	};
}

function stop_propagation(fn) {
	return function(event) {
		event.stopPropagation();
		return fn.call(this, event);
	};
}

function attr(node, attribute, value) {
	if (value == null) node.removeAttribute(attribute);
	else node.setAttribute(attribute, value);
}

function set_attributes(node, attributes) {
	for (const key in attributes) {
		if (key === 'style') {
			node.style.cssText = attributes[key];
		} else if (key in node) {
			node[key] = attributes[key];
		} else {
			attr(node, key, attributes[key]);
		}
	}
}

function set_custom_element_data(node, prop, value) {
	if (prop in node) {
		node[prop] = value;
	} else {
		attr(node, prop, value);
	}
}

function xlink_attr(node, attribute, value) {
	node.setAttributeNS('http://www.w3.org/1999/xlink', attribute, value);
}

function get_binding_group_value(group) {
	const value = [];
	for (let i = 0; i < group.length; i += 1) {
		if (group[i].checked) value.push(group[i].__value);
	}
	return value;
}

function to_number(value) {
	return value === '' ? undefined : +value;
}

function time_ranges_to_array(ranges) {
	const array = [];
	for (let i = 0; i < ranges.length; i += 1) {
		array.push({ start: ranges.start(i), end: ranges.end(i) });
	}
	return array;
}

function children(element) {
	return Array.from(element.childNodes);
}

function claim_element(nodes, name, attributes, svg) {
	for (let i = 0; i < nodes.length; i += 1) {
		const node = nodes[i];
		if (node.nodeName === name) {
			for (let j = 0; j < node.attributes.length; j += 1) {
				const attribute = node.attributes[j];
				if (!attributes[attribute.name]) node.removeAttribute(attribute.name);
			}
			return nodes.splice(i, 1)[0]; // TODO strip unwanted attributes
		}
	}

	return svg ? svg_element(name) : element(name);
}

function claim_text(nodes, data) {
	for (let i = 0; i < nodes.length; i += 1) {
		const node = nodes[i];
		if (node.nodeType === 3) {
			node.data = data;
			return nodes.splice(i, 1)[0];
		}
	}

	return text(data);
}

function set_data(text, data) {
	data = '' + data;
	if (text.data !== data) text.data = data;
}

function set_input_type(input, type) {
	try {
		input.type = type;
	} catch (e) {
		// do nothing
	}
}

function set_style(node, key, value) {
	node.style.setProperty(key, value);
}

function select_option(select, value) {
	for (let i = 0; i < select.options.length; i += 1) {
		const option = select.options[i];

		if (option.__value === value) {
			option.selected = true;
			return;
		}
	}
}

function select_options(select, value) {
	for (let i = 0; i < select.options.length; i += 1) {
		const option = select.options[i];
		option.selected = ~value.indexOf(option.__value);
	}
}

function select_value(select) {
	const selected_option = select.querySelector(':checked') || select.options[0];
	return selected_option && selected_option.__value;
}

function select_multiple_value(select) {
	return [].map.call(select.querySelectorAll(':checked'), option => option.__value);
}

function add_resize_listener(element, fn) {
	if (getComputedStyle(element).position === 'static') {
		element.style.position = 'relative';
	}

	const object = document.createElement('object');
	object.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;');
	object.type = 'text/html';

	let win;

	object.onload = () => {
		win = object.contentDocument.defaultView;
		win.addEventListener('resize', fn);
	};

	if (/Trident/.test(navigator.userAgent)) {
		element.appendChild(object);
		object.data = 'about:blank';
	} else {
		object.data = 'about:blank';
		element.appendChild(object);
	}

	return {
		cancel: () => {
			win && win.removeEventListener && win.removeEventListener('resize', fn);
			element.removeChild(object);
		}
	};
}

function toggle_class(element, name, toggle) {
	element.classList[toggle ? 'add' : 'remove'](name);
}

function custom_event(type, detail) {
	const e = document.createEvent('CustomEvent');
	e.initCustomEvent(type, false, false, detail);
	return e;
}

let stylesheet;
let active = 0;
let current_rules = {};

// https://github.com/darkskyapp/string-hash/blob/master/index.js
function hash(str) {
	let hash = 5381;
	let i = str.length;

	while (i--) hash = ((hash << 5) - hash) ^ str.charCodeAt(i);
	return hash >>> 0;
}

function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
	const step = 16.666 / duration;
	let keyframes = '{\n';

	for (let p = 0; p <= 1; p += step) {
		const t = a + (b - a) * ease(p);
		keyframes += p * 100 + `%{${fn(t, 1 - t)}}\n`;
	}

	const rule = keyframes + `100% {${fn(b, 1 - b)}}\n}`;
	const name = `__svelte_${hash(rule)}_${uid}`;

	if (!current_rules[name]) {
		if (!stylesheet) {
			const style = element('style');
			document.head.appendChild(style);
			stylesheet = style.sheet;
		}

		current_rules[name] = true;
		stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
	}

	const animation = node.style.animation || '';
	node.style.animation = `${animation ? `${animation}, ` : ``}${name} ${duration}ms linear ${delay}ms 1 both`;

	active += 1;
	return name;
}

function delete_rule(node, name) {
	node.style.animation = (node.style.animation || '')
		.split(', ')
		.filter(name
			? anim => anim.indexOf(name) < 0 // remove specific animation
			: anim => anim.indexOf('__svelte') === -1 // remove all Svelte animations
		)
		.join(', ');

	if (name && !--active) clear_rules();
}

function clear_rules() {
	requestAnimationFrame(() => {
		if (active) return;
		let i = stylesheet.cssRules.length;
		while (i--) stylesheet.deleteRule(i);
		current_rules = {};
	});
}

function create_animation(node, from, fn, params) {
	if (!from) return noop;

	const to = node.getBoundingClientRect();
	if (from.left === to.left && from.right === to.right && from.top === to.top && from.bottom === to.bottom) return noop;

	const {
		delay = 0,
		duration = 300,
		easing = identity,
		start: start_time = now() + delay,
		end = start_time + duration,
		tick = noop,
		css
	} = fn(node, { from, to }, params);

	let running = true;
	let started = false;
	let name;

	const css_text = node.style.cssText;

	function start() {
		if (css) {
			if (delay) node.style.cssText = css_text; // TODO create delayed animation instead?
			name = create_rule(node, 0, 1, duration, 0, easing, css);
		}

		started = true;
	}

	function stop() {
		if (css) delete_rule(node, name);
		running = false;
	}

	loop(now$$1 => {
		if (!started && now$$1 >= start_time) {
			start();
		}

		if (started && now$$1 >= end) {
			tick(1, 0);
			stop();
		}

		if (!running) {
			return false;
		}

		if (started) {
			const p = now$$1 - start_time;
			const t = 0 + 1 * easing(p / duration);
			tick(t, 1 - t);
		}

		return true;
	});

	if (delay) {
		if (css) node.style.cssText += css(0, 1);
	} else {
		start();
	}

	tick(0, 1);

	return stop;
}

function fix_position(node) {
	const style = getComputedStyle(node);

	if (style.position !== 'absolute' && style.position !== 'fixed') {
		const { width, height } = style;
		const a = node.getBoundingClientRect();
		node.style.position = 'absolute';
		node.style.width = width;
		node.style.height = height;
		const b = node.getBoundingClientRect();

		if (a.left !== b.left || a.top !== b.top) {
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;

			node.style.transform = `${transform} translate(${a.left - b.left}px, ${a.top - b.top}px)`;
		}
	}
}

let current_component;

function set_current_component(component) {
	current_component = component;
}

function get_current_component() {
	if (!current_component) throw new Error(`Function called outside component initialization`);
	return current_component;
}

function beforeUpdate(fn) {
	get_current_component().$$.before_render.push(fn);
}

function onMount(fn) {
	get_current_component().$$.on_mount.push(fn);
}

function afterUpdate(fn) {
	get_current_component().$$.after_render.push(fn);
}

function onDestroy(fn) {
	get_current_component().$$.on_destroy.push(fn);
}

function createEventDispatcher() {
	const component = current_component;

	return (type, detail) => {
		const callbacks = component.$$.callbacks[type];

		if (callbacks) {
			// TODO are there situations where events could be dispatched
			// in a server (non-DOM) environment?
			const event = custom_event(type, detail);
			callbacks.slice().forEach(fn => {
				fn.call(component, event);
			});
		}
	};
}

function setContext(key, context) {
	get_current_component().$$.context.set(key, context);
}

function getContext(key) {
	return get_current_component().$$.context.get(key);
}

// TODO figure out if we still want to support
// shorthand events, or if we want to implement
// a real bubbling mechanism
function bubble(component, event) {
	const callbacks = component.$$.callbacks[event.type];

	if (callbacks) {
		callbacks.slice().forEach(fn => fn(event));
	}
}

const dirty_components = [];
const intros = { enabled: false };

const resolved_promise = Promise.resolve();
let update_scheduled = false;
const binding_callbacks = [];
const render_callbacks = [];
const flush_callbacks = [];

function schedule_update() {
	if (!update_scheduled) {
		update_scheduled = true;
		resolved_promise.then(flush);
	}
}

function tick() {
	schedule_update();
	return resolved_promise;
}

function add_binding_callback(fn) {
	binding_callbacks.push(fn);
}

function add_render_callback(fn) {
	render_callbacks.push(fn);
}

function add_flush_callback(fn) {
	flush_callbacks.push(fn);
}

function flush() {
	const seen_callbacks = new Set();

	do {
		// first, call beforeUpdate functions
		// and update components
		while (dirty_components.length) {
			const component = dirty_components.shift();
			set_current_component(component);
			update(component.$$);
		}

		while (binding_callbacks.length) binding_callbacks.shift()();

		// then, once components are updated, call
		// afterUpdate functions. This may cause
		// subsequent updates...
		while (render_callbacks.length) {
			const callback = render_callbacks.pop();
			if (!seen_callbacks.has(callback)) {
				callback();

				// ...so guard against infinite loops
				seen_callbacks.add(callback);
			}
		}
	} while (dirty_components.length);

	while (flush_callbacks.length) {
		flush_callbacks.pop()();
	}

	update_scheduled = false;
}

function update($$) {
	if ($$.fragment) {
		$$.update($$.dirty);
		run_all($$.before_render);
		$$.fragment.p($$.dirty, $$.ctx);
		$$.dirty = null;

		$$.after_render.forEach(add_render_callback);
	}
}

let promise;

function wait() {
	if (!promise) {
		promise = Promise.resolve();
		promise.then(() => {
			promise = null;
		});
	}

	return promise;
}

function dispatch(node, direction, kind) {
	node.dispatchEvent(custom_event(`${direction ? 'intro' : 'outro'}${kind}`));
}

let outros;

function group_outros() {
	outros = {
		remaining: 0,
		callbacks: []
	};
}

function check_outros() {
	if (!outros.remaining) {
		run_all(outros.callbacks);
	}
}

function on_outro(callback) {
	outros.callbacks.push(callback);
}

function create_in_transition(node, fn, params) {
	let config = fn(node, params);
	let running = false;
	let animation_name;
	let task;
	let uid = 0;

	function cleanup() {
		if (animation_name) delete_rule(node, animation_name);
	}

	function go() {
		const {
			delay = 0,
			duration = 300,
			easing = identity,
			tick: tick$$1 = noop,
			css
		} = config;

		if (css) animation_name = create_rule(node, 0, 1, duration, delay, easing, css, uid++);
		tick$$1(0, 1);

		const start_time = now() + delay;
		const end_time = start_time + duration;

		if (task) task.abort();
		running = true;

		task = loop(now$$1 => {
			if (running) {
				if (now$$1 >= end_time) {
					tick$$1(1, 0);
					cleanup();
					return running = false;
				}

				if (now$$1 >= start_time) {
					const t = easing((now$$1 - start_time) / duration);
					tick$$1(t, 1 - t);
				}
			}

			return running;
		});
	}

	let started = false;

	return {
		start() {
			if (started) return;

			delete_rule(node);

			if (typeof config === 'function') {
				config = config();
				wait().then(go);
			} else {
				go();
			}
		},

		invalidate() {
			started = false;
		},

		end() {
			if (running) {
				cleanup();
				running = false;
			}
		}
	};
}

function create_out_transition(node, fn, params) {
	let config = fn(node, params);
	let running = true;
	let animation_name;

	const group = outros;

	group.remaining += 1;

	function go() {
		const {
			delay = 0,
			duration = 300,
			easing = identity,
			tick: tick$$1 = noop,
			css
		} = config;

		if (css) animation_name = create_rule(node, 1, 0, duration, delay, easing, css);

		const start_time = now() + delay;
		const end_time = start_time + duration;

		loop(now$$1 => {
			if (running) {
				if (now$$1 >= end_time) {
					tick$$1(0, 1);

					if (!--group.remaining) {
						// this will result in `end()` being called,
						// so we don't need to clean up here
						run_all(group.callbacks);
					}

					return false;
				}

				if (now$$1 >= start_time) {
					const t = easing((now$$1 - start_time) / duration);
					tick$$1(1 - t, t);
				}
			}

			return running;
		});
	}

	if (typeof config === 'function') {
		wait().then(() => {
			config = config();
			go();
		});
	} else {
		go();
	}

	return {
		end(reset) {
			if (reset && config.tick) {
				config.tick(1, 0);
			}

			if (running) {
				if (animation_name) delete_rule(node, animation_name);
				running = false;
			}
		}
	};
}

function create_bidirectional_transition(node, fn, params, intro) {
	let config = fn(node, params);

	let t = intro ? 0 : 1;

	let running_program = null;
	let pending_program = null;
	let animation_name = null;

	function clear_animation() {
		if (animation_name) delete_rule(node, animation_name);
	}

	function init(program, duration) {
		const d = program.b - t;
		duration *= Math.abs(d);

		return {
			a: t,
			b: program.b,
			d,
			duration,
			start: program.start,
			end: program.start + duration,
			group: program.group
		};
	}

	function go(b) {
		const {
			delay = 0,
			duration = 300,
			easing = identity,
			tick: tick$$1 = noop,
			css
		} = config;

		const program = {
			start: now() + delay,
			b
		};

		if (!b) {
			program.group = outros;
			outros.remaining += 1;
		}

		if (running_program) {
			pending_program = program;
		} else {
			// if this is an intro, and there's a delay, we need to do
			// an initial tick and/or apply CSS animation immediately
			if (css) {
				clear_animation();
				animation_name = create_rule(node, t, b, duration, delay, easing, css);
			}

			if (b) tick$$1(0, 1);

			running_program = init(program, duration);
			add_render_callback(() => dispatch(node, b, 'start'));

			loop(now$$1 => {
				if (pending_program && now$$1 > pending_program.start) {
					running_program = init(pending_program, duration);
					pending_program = null;

					dispatch(node, running_program.b, 'start');

					if (css) {
						clear_animation();
						animation_name = create_rule(node, t, running_program.b, running_program.duration, 0, easing, config.css);
					}
				}

				if (running_program) {
					if (now$$1 >= running_program.end) {
						tick$$1(t = running_program.b, 1 - t);
						dispatch(node, running_program.b, 'end');

						if (!pending_program) {
							// we're done
							if (running_program.b) {
								// intro — we can tidy up immediately
								clear_animation();
							} else {
								// outro — needs to be coordinated
								if (!--running_program.group.remaining) run_all(running_program.group.callbacks);
							}
						}

						running_program = null;
					}

					else if (now$$1 >= running_program.start) {
						const p = now$$1 - running_program.start;
						t = running_program.a + running_program.d * easing(p / running_program.duration);
						tick$$1(t, 1 - t);
					}
				}

				return !!(running_program || pending_program);
			});
		}
	}

	return {
		run(b) {
			if (typeof config === 'function') {
				wait().then(() => {
					config = config();
					go(b);
				});
			} else {
				go(b);
			}
		},

		end() {
			clear_animation();
			running_program = pending_program = null;
		}
	};
}

function handle_promise(promise, info) {
	const token = info.token = {};

	function update(type, index, key, value) {
		if (info.token !== token) return;

		info.resolved = key && { [key]: value };

		const child_ctx = assign(assign({}, info.ctx), info.resolved);
		const block = type && (info.current = type)(child_ctx);

		if (info.block) {
			if (info.blocks) {
				info.blocks.forEach((block, i) => {
					if (i !== index && block) {
						group_outros();
						on_outro(() => {
							block.d(1);
							info.blocks[i] = null;
						});
						block.o(1);
						check_outros();
					}
				});
			} else {
				info.block.d(1);
			}

			block.c();
			if (block.i) block.i(1);
			block.m(info.mount(), info.anchor);

			flush();
		}

		info.block = block;
		if (info.blocks) info.blocks[index] = block;
	}

	if (is_promise(promise)) {
		promise.then(value => {
			update(info.then, 1, info.value, value);
		}, error => {
			update(info.catch, 2, info.error, error);
		});

		// if we previously had a then/catch block, destroy it
		if (info.current !== info.pending) {
			update(info.pending, 0);
			return true;
		}
	} else {
		if (info.current !== info.then) {
			update(info.then, 1, info.value, promise);
			return true;
		}

		info.resolved = { [info.value]: promise };
	}
}

function destroy_block(block, lookup) {
	block.d(1);
	lookup.delete(block.key);
}

function outro_and_destroy_block(block, lookup) {
	on_outro(() => {
		destroy_block(block, lookup);
	});

	block.o(1);
}

function fix_and_outro_and_destroy_block(block, lookup) {
	block.f();
	outro_and_destroy_block(block, lookup);
}

function update_keyed_each(old_blocks, changed, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, next, get_context) {
	let o = old_blocks.length;
	let n = list.length;

	let i = o;
	const old_indexes = {};
	while (i--) old_indexes[old_blocks[i].key] = i;

	const new_blocks = [];
	const new_lookup = new Map();
	const deltas = new Map();

	i = n;
	while (i--) {
		const child_ctx = get_context(ctx, list, i);
		const key = get_key(child_ctx);
		let block = lookup.get(key);

		if (!block) {
			block = create_each_block(key, child_ctx);
			block.c();
		} else if (dynamic) {
			block.p(changed, child_ctx);
		}

		new_lookup.set(key, new_blocks[i] = block);

		if (key in old_indexes) deltas.set(key, Math.abs(i - old_indexes[key]));
	}

	const will_move = new Set();
	const did_move = new Set();

	function insert(block) {
		if (block.i) block.i(1);
		block.m(node, next);
		lookup.set(block.key, block);
		next = block.first;
		n--;
	}

	while (o && n) {
		const new_block = new_blocks[n - 1];
		const old_block = old_blocks[o - 1];
		const new_key = new_block.key;
		const old_key = old_block.key;

		if (new_block === old_block) {
			// do nothing
			next = new_block.first;
			o--;
			n--;
		}

		else if (!new_lookup.has(old_key)) {
			// remove old block
			destroy(old_block, lookup);
			o--;
		}

		else if (!lookup.has(new_key) || will_move.has(new_key)) {
			insert(new_block);
		}

		else if (did_move.has(old_key)) {
			o--;

		} else if (deltas.get(new_key) > deltas.get(old_key)) {
			did_move.add(new_key);
			insert(new_block);

		} else {
			will_move.add(old_key);
			o--;
		}
	}

	while (o--) {
		const old_block = old_blocks[o];
		if (!new_lookup.has(old_block.key)) destroy(old_block, lookup);
	}

	while (n) insert(new_blocks[n - 1]);

	return new_blocks;
}

function measure(blocks) {
	const rects = {};
	let i = blocks.length;
	while (i--) rects[blocks[i].key] = blocks[i].node.getBoundingClientRect();
	return rects;
}

function get_spread_update(levels, updates) {
	const update = {};

	const to_null_out = {};
	const accounted_for = { $$scope: 1 };

	let i = levels.length;
	while (i--) {
		const o = levels[i];
		const n = updates[i];

		if (n) {
			for (const key in o) {
				if (!(key in n)) to_null_out[key] = 1;
			}

			for (const key in n) {
				if (!accounted_for[key]) {
					update[key] = n[key];
					accounted_for[key] = 1;
				}
			}

			levels[i] = n;
		} else {
			for (const key in o) {
				accounted_for[key] = 1;
			}
		}
	}

	for (const key in to_null_out) {
		if (!(key in update)) update[key] = undefined;
	}

	return update;
}

const invalid_attribute_name_character = /[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;
// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
// https://infra.spec.whatwg.org/#noncharacter

function spread(args) {
	const attributes = Object.assign({}, ...args);
	let str = '';

	Object.keys(attributes).forEach(name => {
		if (invalid_attribute_name_character.test(name)) return;

		const value = attributes[name];
		if (value === undefined) return;
		if (value === true) str += " " + name;

		const escaped = String(value)
			.replace(/"/g, '&#34;')
			.replace(/'/g, '&#39;');

		str += " " + name + "=" + JSON.stringify(escaped);
	});

	return str;
}

const escaped = {
	'"': '&quot;',
	"'": '&#39;',
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;'
};

function escape(html) {
	return String(html).replace(/["'&<>]/g, match => escaped[match]);
}

function each(items, fn) {
	let str = '';
	for (let i = 0; i < items.length; i += 1) {
		str += fn(items[i], i);
	}
	return str;
}

const missing_component = {
	$$render: () => ''
};

function validate_component(component, name) {
	if (!component || !component.$$render) {
		if (name === 'svelte:component') name += ' this={...}';
		throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
	}

	return component;
}

function debug(file, line, column, values) {
	console.log(`{@debug} ${file ? file + ' ' : ''}(${line}:${column})`); // eslint-disable-line no-console
	console.log(values); // eslint-disable-line no-console
	return '';
}

let on_destroy;

function create_ssr_component(fn) {
	function $$render(result, props, bindings, slots) {
		const parent_component = current_component;

		const $$ = {
			on_destroy,
			context: new Map(parent_component ? parent_component.$$.context : []),

			// these will be immediately discarded
			on_mount: [],
			before_render: [],
			after_render: [],
			callbacks: blank_object()
		};

		set_current_component({ $$ });

		const html = fn(result, props, bindings, slots);

		set_current_component(parent_component);
		return html;
	}

	return {
		render: (props = {}, options = {}) => {
			on_destroy = [];

			const result = { head: '', css: new Set() };
			const html = $$render(result, props, {}, options);

			run_all(on_destroy);

			return {
				html,
				css: {
					code: Array.from(result.css).map(css => css.code).join('\n'),
					map: null // TODO
				},
				head: result.head
			};
		},

		$$render
	};
}

function get_store_value(store) {
	let value;
	store.subscribe(_ => value = _)();
	return value;
}

function bind(component, name, callback) {
	if (component.$$.props.indexOf(name) === -1) return;
	component.$$.bound[name] = callback;
	callback(component.$$.ctx[name]);
}

function mount_component(component, target, anchor) {
	const { fragment, on_mount, on_destroy, after_render } = component.$$;

	fragment.m(target, anchor);

	// onMount happens after the initial afterUpdate. Because
	// afterUpdate callbacks happen in reverse order (inner first)
	// we schedule onMount callbacks before afterUpdate callbacks
	add_render_callback(() => {
		const new_on_destroy = on_mount.map(run).filter(is_function);
		if (on_destroy) {
			on_destroy.push(...new_on_destroy);
		} else {
			// Edge case - component was destroyed immediately,
			// most likely as a result of a binding initialising
			run_all(new_on_destroy);
		}
		component.$$.on_mount = [];
	});

	after_render.forEach(add_render_callback);
}

function destroy(component, detaching) {
	if (component.$$) {
		run_all(component.$$.on_destroy);
		component.$$.fragment.d(detaching);

		// TODO null out other refs, including component.$$ (but need to
		// preserve final state?)
		component.$$.on_destroy = component.$$.fragment = null;
		component.$$.ctx = {};
	}
}

function make_dirty(component, key) {
	if (!component.$$.dirty) {
		dirty_components.push(component);
		schedule_update();
		component.$$.dirty = blank_object();
	}
	component.$$.dirty[key] = true;
}

function init(component, options, instance, create_fragment, not_equal$$1, prop_names) {
	const parent_component = current_component;
	set_current_component(component);

	const props = options.props || {};

	const $$ = component.$$ = {
		fragment: null,
		ctx: null,

		// state
		props: prop_names,
		update: noop,
		not_equal: not_equal$$1,
		bound: blank_object(),

		// lifecycle
		on_mount: [],
		on_destroy: [],
		before_render: [],
		after_render: [],
		context: new Map(parent_component ? parent_component.$$.context : []),

		// everything else
		callbacks: blank_object(),
		dirty: null
	};

	let ready = false;

	$$.ctx = instance
		? instance(component, props, (key, value) => {
			if ($$.ctx && not_equal$$1($$.ctx[key], $$.ctx[key] = value)) {
				if ($$.bound[key]) $$.bound[key](value);
				if (ready) make_dirty(component, key);
			}
		})
		: props;

	$$.update();
	ready = true;
	run_all($$.before_render);
	$$.fragment = create_fragment($$.ctx);

	if (options.target) {
		if (options.hydrate) {
			$$.fragment.l(children(options.target));
		} else {
			$$.fragment.c();
		}

		if (options.intro && component.$$.fragment.i) component.$$.fragment.i();
		mount_component(component, options.target, options.anchor);
		flush();
	}

	set_current_component(parent_component);
}

let SvelteElement;
if (typeof HTMLElement !== 'undefined') {
	SvelteElement = class extends HTMLElement {
		constructor() {
			super();
			this.attachShadow({ mode: 'open' });
		}

		connectedCallback() {
			for (const key in this.$$.slotted) {
				this.appendChild(this.$$.slotted[key]);
			}
		}

		attributeChangedCallback(attr$$1, oldValue, newValue) {
			this[attr$$1] = newValue;
		}

		$destroy() {
			destroy(this, true);
			this.$destroy = noop;
		}

		$on(type, callback) {
			// TODO should this delegate to addEventListener?
			const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
			callbacks.push(callback);

			return () => {
				const index = callbacks.indexOf(callback);
				if (index !== -1) callbacks.splice(index, 1);
			};
		}

		$set() {
			// overridden by instance, if it has props
		}
	};
}

class SvelteComponent {
	$destroy() {
		destroy(this, true);
		this.$destroy = noop;
	}

	$on(type, callback) {
		const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
		callbacks.push(callback);

		return () => {
			const index = callbacks.indexOf(callback);
			if (index !== -1) callbacks.splice(index, 1);
		};
	}

	$set() {
		// overridden by instance, if it has props
	}
}

class SvelteComponentDev extends SvelteComponent {
	constructor(options) {
		if (!options || (!options.target && !options.$$inline)) {
			throw new Error(`'target' is a required option`);
		}

		super();
	}

	$destroy() {
		super.$destroy();
		this.$destroy = () => {
			console.warn(`Component was already destroyed`); // eslint-disable-line no-console
		};
	}
}




/***/ }),

/***/ "./node_modules/svelte/store.mjs":
/*!***************************************!*\
  !*** ./node_modules/svelte/store.mjs ***!
  \***************************************/
/*! exports provided: readable, writable, derived, get */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readable", function() { return readable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writable", function() { return writable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "derived", function() { return derived; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
function noop() {}

function run(fn) {
	return fn();
}

function run_all(fns) {
	fns.forEach(run);
}

function is_function(thing) {
	return typeof thing === 'function';
}

function safe_not_equal(a, b) {
	return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}

function readable(value, start) {
    return {
        subscribe: writable(value, start).subscribe,
    };
}
function writable(value, start = noop) {
    let stop;
    const subscribers = [];
    function set(new_value) {
        if (safe_not_equal(value, new_value)) {
            value = new_value;
            if (!stop) {
                return; // not ready
            }
            subscribers.forEach((s) => s[1]());
            subscribers.forEach((s) => s[0](value));
        }
    }
    function update(fn) {
        set(fn(value));
    }
    function subscribe$$1(run$$1, invalidate = noop) {
        const subscriber = [run$$1, invalidate];
        subscribers.push(subscriber);
        if (subscribers.length === 1) {
            stop = start(set) || noop;
        }
        run$$1(value);
        return () => {
            const index = subscribers.indexOf(subscriber);
            if (index !== -1) {
                subscribers.splice(index, 1);
            }
            if (subscribers.length === 0) {
                stop();
            }
        };
    }
    return { set, update, subscribe: subscribe$$1 };
}
function derived(stores, fn, initial_value) {
    const single = !Array.isArray(stores);
    const stores_array = single
        ? [stores]
        : stores;
    const auto = fn.length < 2;
    return readable(initial_value, (set) => {
        let inited = false;
        const values = [];
        let pending = 0;
        let cleanup = noop;
        const sync = () => {
            if (pending) {
                return;
            }
            cleanup();
            const result = fn(single ? values[0] : values, set);
            if (auto) {
                set(result);
            }
            else {
                cleanup = is_function(result) ? result : noop;
            }
        };
        const unsubscribers = stores_array.map((store, i) => store.subscribe((value) => {
            values[i] = value;
            pending &= ~(1 << i);
            if (inited) {
                sync();
            }
        }, () => {
            pending |= (1 << i);
        }));
        inited = true;
        sync();
        return function stop() {
            run_all(unsubscribers);
            cleanup();
        };
    });
}
function get(store) {
    let value;
    store.subscribe((_) => value = _)();
    return value;
}




/***/ }),

/***/ "./src/client.js":
/*!***********************!*\
  !*** ./src/client.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sapper_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sapper/app */ "./src/node_modules/@sapper/app.mjs");
/* harmony import */ var _node_modules_bulma_css_bulma_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/bulma/css/bulma.min.css */ "./node_modules/bulma/css/bulma.min.css");
/* harmony import */ var _node_modules_bulma_css_bulma_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_bulma_css_bulma_min_css__WEBPACK_IMPORTED_MODULE_1__);




_sapper_app__WEBPACK_IMPORTED_MODULE_0__["start"]({
	target: document.querySelector('#sapper')
});

/***/ }),

/***/ "./src/components/Nav.svelte":
/*!***********************************!*\
  !*** ./src/components/Nav.svelte ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu */ "./src/menu.js");
/* src\components\Nav.svelte generated by Svelte v3.4.1 */




const file = "src\\components\\Nav.svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = 'svelte-1l1opgu-style';
	style.textContent = ".navbar.svelte-1l1opgu{background-color:#eeeeee}.selected.svelte-1l1opgu{background-color:white}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmF2LnN2ZWx0ZSIsInNvdXJjZXMiOlsiTmF2LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxyXG4gIGltcG9ydCB7IG9uTW91bnQgfSBmcm9tIFwic3ZlbHRlXCI7XHJcbiAgaW1wb3J0IG1lbnUgZnJvbSBcIi4uL21lbnVcIjtcclxuXHJcbiAgZXhwb3J0IGxldCBzZWdtZW50O1xyXG5cclxuICBvbk1vdW50KGFzeW5jICgpID0+IHtcclxuICAgIGVuYWJsZVJlc3BvbnNpYmxlTWVudSgpO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBlbmFibGVSZXNwb25zaWJsZU1lbnUoKSB7XHJcbiAgICAvLyBHZXQgYWxsIFwibmF2YmFyLWJ1cmdlclwiIGVsZW1lbnRzXHJcbiAgICBjb25zdCAkbmF2YmFyQnVyZ2VycyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKFxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdmJhci1idXJnZXJcIiksXHJcbiAgICAgIDBcclxuICAgICk7XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgdGhlcmUgYXJlIGFueSBuYXZiYXIgYnVyZ2Vyc1xyXG4gICAgaWYgKCRuYXZiYXJCdXJnZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgLy8gQWRkIGEgY2xpY2sgZXZlbnQgb24gZWFjaCBvZiB0aGVtXHJcbiAgICAgICRuYXZiYXJCdXJnZXJzLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAvLyBHZXQgdGhlIHRhcmdldCBmcm9tIHRoZSBcImRhdGEtdGFyZ2V0XCIgYXR0cmlidXRlXHJcbiAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlbC5kYXRhc2V0LnRhcmdldDtcclxuICAgICAgICAgIGNvbnN0ICR0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXQpO1xyXG5cclxuICAgICAgICAgIC8vIFRvZ2dsZSB0aGUgXCJpcy1hY3RpdmVcIiBjbGFzcyBvbiBib3RoIHRoZSBcIm5hdmJhci1idXJnZXJcIiBhbmQgdGhlIFwibmF2YmFyLW1lbnVcIlxyXG4gICAgICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZShcImlzLWFjdGl2ZVwiKTtcclxuICAgICAgICAgICR0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZShcImlzLWFjdGl2ZVwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuICAubmF2YmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XHJcbiAgfVxyXG5cclxuICAuc2VsZWN0ZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG48L3N0eWxlPlxyXG5cclxuPG5hdiBjbGFzcz1cIm5hdmJhclwiIHJvbGU9XCJuYXZpZ2F0aW9uXCIgYXJpYS1sYWJlbD1cIm1haW4gbmF2aWdhdGlvblwiPlxyXG4gIDxkaXYgY2xhc3M9XCJuYXZiYXItYnJhbmRcIj5cclxuICAgIDxhIGNsYXNzPVwibmF2YmFyLWl0ZW1cIiBocmVmPVwiaG9tZVwiPlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgc3JjPVwiaHR0cHM6Ly9idWxtYS5pby9pbWFnZXMvYnVsbWEtbG9nby5wbmdcIlxyXG4gICAgICAgIHdpZHRoPVwiMTEyXCJcclxuICAgICAgICBhbHQ9XCJCdWxtYVwiXHJcbiAgICAgICAgaGVpZ2h0PVwiMjhcIiAvPlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgc3JjPVwiaHR0cHM6Ly9zdmVsdGUuZGV2L3N2ZWx0ZS1sb2dvLWhvcml6b250YWwuc3ZnXCJcclxuICAgICAgICB3aWR0aD1cIjExMlwiXHJcbiAgICAgICAgYWx0PVwiU3ZlbHRlXCJcclxuICAgICAgICBoZWlnaHQ9XCIyOFwiIC8+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBzcmM9XCJodHRwczovL3NhcHBlci5zdmVsdGUuZGV2L3NhcHBlci1sb2dvLWhvcml6b250YWwuc3ZnXCJcclxuICAgICAgICB3aWR0aD1cIjExMlwiXHJcbiAgICAgICAgYWx0PVwiU2FwcGVyXCJcclxuICAgICAgICBoZWlnaHQ9XCIyOFwiIC8+XHJcbiAgICA8L2E+XHJcblxyXG5cclxuICBcclxuXHJcbiAgICA8YVxyXG4gICAgICBocmVmPVwiamF2YXNjcmlwdDo7XCJcclxuICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgIGNsYXNzPVwibmF2YmFyLWJ1cmdlciBidXJnZXJcIlxyXG4gICAgICBhcmlhLWxhYmVsPVwibWVudVwiXHJcbiAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgIGRhdGEtdGFyZ2V0PVwibmF2YmFyQmFzaWNFeGFtcGxlXCI+XHJcbiAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XHJcbiAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XHJcbiAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XHJcbiAgICA8L2E+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxkaXYgaWQ9XCJuYXZiYXJCYXNpY0V4YW1wbGVcIiBjbGFzcz1cIm5hdmJhci1tZW51XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLXN0YXJ0XCI+XHJcblxyXG4gICAgICB7I2VhY2ggbWVudSBhcyBpdGVtfVxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBjbGFzcz17c2VnbWVudCA9PT0gaXRlbVswXSA/ICduYXZiYXItaXRlbSBzZWxlY3RlZCcgOiAnbmF2YmFyLWl0ZW0nfVxyXG4gICAgICAgICAgaHJlZj17aXRlbVswXX0+XHJcbiAgICAgICAgICAge2l0ZW1bMV19XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICB7L2VhY2h9XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cIm5hdmJhci1lbmRcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm5hdmJhci1pdGVtXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZGFuaWVsc2NobWl0ei9zdmVsdGUtc2FwcGVyLWJ1bG1hLWNydWRcIlxyXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImJ1dHRvbiBpcy1saWdodFwiPlxyXG4gICAgICAgICAgICBHaXRIdWJcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9uYXY+XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ0UsT0FBTyxlQUFDLENBQUMsQUFDUCxnQkFBZ0IsQ0FBRSxPQUFPLEFBQzNCLENBQUMsQUFFRCxTQUFTLGVBQUMsQ0FBQyxBQUNULGdCQUFnQixDQUFFLEtBQUssQUFDekIsQ0FBQyJ9 */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(document.head, style);
}

function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.item = list[i];
	return child_ctx;
}

// (85:6) {#each menu as item}
function create_each_block(ctx) {
	var a, t_value = ctx.item[1], t, a_class_value, a_href_value;

	return {
		c: function create() {
			a = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t_value);
			this.h()
		},

		l: function claim(nodes) {
			a = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "A", { class: true, href: true }, false);
			var a_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(a);

			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(a_nodes, t_value);
			a_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			this.h();
		},

		h: function hydrate() {
			a.className = a_class_value = "" + (ctx.segment === ctx.item[0] ? 'navbar-item selected' : 'navbar-item') + " svelte-1l1opgu";
			a.href = a_href_value = ctx.item[0];
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(a, file, 85, 8, 2132);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, a, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(a, t);
		},

		p: function update(changed, ctx) {
			if ((changed.segment) && a_class_value !== (a_class_value = "" + (ctx.segment === ctx.item[0] ? 'navbar-item selected' : 'navbar-item') + " svelte-1l1opgu")) {
				a.className = a_class_value;
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(a);
			}
		}
	};
}

function create_fragment(ctx) {
	var nav, div0, a0, img0, t0, img1, t1, img2, t2, a1, span0, t3, span1, t4, span2, t5, div5, div1, t6, div4, div3, div2, a2, t7;

	var each_value = _menu__WEBPACK_IMPORTED_MODULE_2__["default"];

	var each_blocks = [];

	for (var i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	return {
		c: function create() {
			nav = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("nav");
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			a0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			img0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("img");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			img1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("img");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			img2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("img");
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			a1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			span0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			span1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			span2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			a2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			t7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("GitHub");
			this.h()
		},

		l: function claim(nodes) {
			nav = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "NAV", { class: true, role: true, "aria-label": true }, false);
			var nav_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(nav);

			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nav_nodes, "DIV", { class: true }, false);
			var div0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div0);

			a0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div0_nodes, "A", { class: true, href: true }, false);
			var a0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(a0);

			img0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(a0_nodes, "IMG", { src: true, width: true, alt: true, height: true }, false);
			var img0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(img0);

			img0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(a0_nodes, "\r\n      ");

			img1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(a0_nodes, "IMG", { src: true, width: true, alt: true, height: true }, false);
			var img1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(img1);

			img1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(a0_nodes, "\r\n      ");

			img2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(a0_nodes, "IMG", { src: true, width: true, alt: true, height: true }, false);
			var img2_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(img2);

			img2_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			a0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div0_nodes, "\r\n\r\n\r\n  \r\n\r\n    ");

			a1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div0_nodes, "A", { href: true, role: true, class: true, "aria-label": true, "aria-expanded": true, "data-target": true }, false);
			var a1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(a1);

			span0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(a1_nodes, "SPAN", { "aria-hidden": true }, false);
			var span0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(span0);

			span0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(a1_nodes, "\r\n      ");

			span1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(a1_nodes, "SPAN", { "aria-hidden": true }, false);
			var span1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(span1);

			span1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(a1_nodes, "\r\n      ");

			span2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(a1_nodes, "SPAN", { "aria-hidden": true }, false);
			var span2_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(span2);

			span2_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			a1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			div0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(nav_nodes, "\r\n\r\n  ");

			div5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nav_nodes, "DIV", { id: true, class: true }, false);
			var div5_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div5);

			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div5_nodes, "DIV", { class: true }, false);
			var div1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div1);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div1_nodes);
			}

			div1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div5_nodes, "\r\n\r\n    ");

			div4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div5_nodes, "DIV", { class: true }, false);
			var div4_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div4);

			div3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div4_nodes, "DIV", { class: true }, false);
			var div3_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div3);

			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div3_nodes, "DIV", { class: true }, false);
			var div2_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div2);

			a2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div2_nodes, "A", { href: true, target: true, class: true }, false);
			var a2_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(a2);

			t7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(a2_nodes, "GitHub");
			a2_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			div2_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			div3_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			div4_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			div5_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			nav_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			this.h();
		},

		h: function hydrate() {
			img0.src = "https://bulma.io/images/bulma-logo.png";
			img0.width = "112";
			img0.alt = "Bulma";
			img0.height = "28";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(img0, file, 48, 6, 1262);
			img1.src = "https://svelte.dev/svelte-logo-horizontal.svg";
			img1.width = "112";
			img1.alt = "Svelte";
			img1.height = "28";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(img1, file, 53, 6, 1394);
			img2.src = "https://sapper.svelte.dev/sapper-logo-horizontal.svg";
			img2.width = "112";
			img2.alt = "Sapper";
			img2.height = "28";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(img2, file, 58, 6, 1534);
			a0.className = "navbar-item svelte-1l1opgu";
			a0.href = "home";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(a0, file, 47, 4, 1219);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(span0, "aria-hidden", "true");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(span0, file, 75, 6, 1888);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(span1, "aria-hidden", "true");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(span1, file, 76, 6, 1923);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(span2, "aria-hidden", "true");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(span2, file, 77, 6, 1958);
			a1.href = "javascript:;";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a1, "role", "button");
			a1.className = "navbar-burger burger svelte-1l1opgu";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a1, "aria-label", "menu");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a1, "aria-expanded", "false");
			a1.dataset.target = "navbarBasicExample";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(a1, file, 68, 4, 1699);
			div0.className = "navbar-brand svelte-1l1opgu";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div0, file, 46, 2, 1187);
			div1.className = "navbar-start svelte-1l1opgu";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div1, file, 82, 4, 2066);
			a2.href = "https://github.com/danielschmitz/svelte-sapper-bulma-crud";
			a2.target = "_blank";
			a2.className = "button is-light";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(a2, file, 97, 10, 2414);
			div2.className = "buttons";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div2, file, 96, 8, 2381);
			div3.className = "navbar-item svelte-1l1opgu";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div3, file, 95, 6, 2346);
			div4.className = "navbar-end svelte-1l1opgu";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div4, file, 94, 4, 2314);
			div5.id = "navbarBasicExample";
			div5.className = "navbar-menu svelte-1l1opgu";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div5, file, 81, 2, 2011);
			nav.className = "navbar svelte-1l1opgu";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(nav, "role", "navigation");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(nav, "aria-label", "main navigation");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(nav, file, 45, 0, 1116);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, nav, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(nav, div0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, a0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(a0, img0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(a0, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(a0, img1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(a0, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(a0, img2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, a1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(a1, span0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(a1, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(a1, span1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(a1, t4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(a1, span2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(nav, t5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(nav, div5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div5, div1);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div1, null);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div5, t6);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div5, div4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div4, div3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div3, div2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div2, a2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(a2, t7);
		},

		p: function update(changed, ctx) {
			if (changed.segment || changed.menu) {
				each_value = _menu__WEBPACK_IMPORTED_MODULE_2__["default"];

				for (var i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(changed, child_ctx);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div1, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}
				each_blocks.length = each_value.length;
			}
		},

		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(nav);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_each"])(each_blocks, detaching);
		}
	};
}

function enableResponsibleMenu() {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
}

function instance($$self, $$props, $$invalidate) {
	

  let { segment } = $$props;

  Object(svelte__WEBPACK_IMPORTED_MODULE_1__["onMount"])(async () => {
    enableResponsibleMenu();
  });

	$$self.$set = $$props => {
		if ('segment' in $$props) $$invalidate('segment', segment = $$props.segment);
	};

	return { segment };
}

class Nav extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-1l1opgu-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], ["segment"]);

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.segment === undefined && !('segment' in props)) {
			console.warn("<Nav> was created without expected prop 'segment'");
		}
	}

	get segment() {
		throw new Error("<Nav>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set segment(value) {
		throw new Error("<Nav>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const menu = [
    ["home","Home"],
    ["providers","Providers"],
    ["categories","Categories"],
    ["about","About"]
]
/* harmony default export */ __webpack_exports__["default"] = (menu);

/***/ }),

/***/ "./src/node_modules/@sapper/app.mjs":
/*!******************************************!*\
  !*** ./src/node_modules/@sapper/app.mjs ***!
  \******************************************/
/*! exports provided: goto, prefetch, prefetchRoutes, start, stores */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "goto", function() { return goto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefetch", function() { return prefetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefetchRoutes", function() { return prefetchRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stores", function() { return stores$1; });
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var _internal_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/shared */ "./src/node_modules/@sapper/internal/shared.mjs");
/* harmony import */ var svelte_store_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svelte/store.mjs */ "./node_modules/svelte/store.mjs");
/* harmony import */ var _internal_App_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal/App.svelte */ "./src/node_modules/@sapper/internal/App.svelte");
/* harmony import */ var _internal_manifest_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./internal/manifest-client */ "./src/node_modules/@sapper/internal/manifest-client.mjs");






function goto(href, opts = { replaceState: false }) {
	const target = select_target(new URL(href, document.baseURI));

	if (target) {
		_history[opts.replaceState ? 'replaceState' : 'pushState']({ id: cid }, '', href);
		return navigate(target, null).then(() => {});
	}

	location.href = href;
	return new Promise(f => {}); // never resolves
}

const initial_data = typeof __SAPPER__ !== 'undefined' && __SAPPER__;

let ready = false;
let root_component;
let current_token;
let root_preloaded;
let current_branch = [];

const stores = {
	page: Object(svelte_store_mjs__WEBPACK_IMPORTED_MODULE_2__["writable"])({}),
	preloading: Object(svelte_store_mjs__WEBPACK_IMPORTED_MODULE_2__["writable"])(null),
	session: Object(svelte_store_mjs__WEBPACK_IMPORTED_MODULE_2__["writable"])(initial_data && initial_data.session)
};

let $session;
let session_dirty;

stores.session.subscribe(async value => {
	$session = value;

	if (!ready) return;
	session_dirty = true;

	const target = select_target(new URL(location.href));

	const token = current_token = {};
	const { redirect, props, branch } = await hydrate_target(target);
	if (token !== current_token) return; // a secondary navigation happened while we were loading

	await render(redirect, branch, props, target.page);
});

let prefetching


 = null;
function set_prefetching(href, promise) {
	prefetching = { href, promise };
}

let target;
function set_target(element) {
	target = element;
}

let uid = 1;
function set_uid(n) {
	uid = n;
}

let cid;
function set_cid(n) {
	cid = n;
}

const _history = typeof history !== 'undefined' ? history : {
	pushState: (state, title, href) => {},
	replaceState: (state, title, href) => {},
	scrollRestoration: ''
};

const scroll_history = {};

function extract_query(search) {
	const query = Object.create(null);
	if (search.length > 0) {
		search.slice(1).split('&').forEach(searchParam => {
			let [, key, value = ''] = /([^=]*)(?:=(.*))?/.exec(decodeURIComponent(searchParam.replace(/\+/g, ' ')));
			if (typeof query[key] === 'string') query[key] = [query[key]];
			if (typeof query[key] === 'object') (query[key] ).push(value);
			else query[key] = value;
		});
	}
	return query;
}

function select_target(url) {
	if (url.origin !== location.origin) return null;
	if (!url.pathname.startsWith(initial_data.baseUrl)) return null;

	let path = url.pathname.slice(initial_data.baseUrl.length);

	if (path === '') {
		path = '/';
	}

	// avoid accidental clashes between server routes and page routes
	if (_internal_manifest_client__WEBPACK_IMPORTED_MODULE_4__["ignore"].some(pattern => pattern.test(path))) return;

	for (let i = 0; i < _internal_manifest_client__WEBPACK_IMPORTED_MODULE_4__["routes"].length; i += 1) {
		const route = _internal_manifest_client__WEBPACK_IMPORTED_MODULE_4__["routes"][i];

		const match = route.pattern.exec(path);

		if (match) {
			const query = extract_query(url.search);
			const part = route.parts[route.parts.length - 1];
			const params = part.params ? part.params(match) : {};

			const page = { path, query, params };

			return { href: url.href, route, match, page };
		}
	}
}

function handle_error(url) {
	const { pathname, search } = location;
	const { session, preloaded, status, error } = initial_data;

	if (!root_preloaded) {
		root_preloaded = preloaded && preloaded[0];
	}

	const props = {
		error,
		status,
		session,
		level0: {
			props: root_preloaded
		},
		level1: {
			props: {
				status,
				error
			},
			component: _internal_manifest_client__WEBPACK_IMPORTED_MODULE_4__["ErrorComponent"]
		},
		segments: preloaded

	};
	const query = extract_query(search);
	render(null, [], props, { path: pathname, query, params: {} });
}

function scroll_state() {
	return {
		x: pageXOffset,
		y: pageYOffset
	};
}

async function navigate(target, id, noscroll, hash) {
	if (id) {
		// popstate or initial navigation
		cid = id;
	} else {
		const current_scroll = scroll_state();

		// clicked on a link. preserve scroll state
		scroll_history[cid] = current_scroll;

		id = cid = ++uid;
		scroll_history[cid] = noscroll ? current_scroll : { x: 0, y: 0 };
	}

	cid = id;

	if (root_component) stores.preloading.set(true);

	const loaded = prefetching && prefetching.href === target.href ?
		prefetching.promise :
		hydrate_target(target);

	prefetching = null;

	const token = current_token = {};
	const { redirect, props, branch } = await loaded;
	if (token !== current_token) return; // a secondary navigation happened while we were loading

	await render(redirect, branch, props, target.page);
	if (document.activeElement) document.activeElement.blur();

	if (!noscroll) {
		let scroll = scroll_history[id];

		if (hash) {
			// scroll is an element id (from a hash), we need to compute y.
			const deep_linked = document.getElementById(hash.slice(1));

			if (deep_linked) {
				scroll = {
					x: 0,
					y: deep_linked.getBoundingClientRect().top
				};
			}
		}

		scroll_history[cid] = scroll;
		if (scroll) scrollTo(scroll.x, scroll.y);
	}
}

async function render(redirect, branch, props, page) {
	if (redirect) return goto(redirect.location, { replaceState: true });

	stores.page.set(page);
	stores.preloading.set(false);

	if (root_component) {
		root_component.$set(props);
	} else {
		props.stores = {
			page: { subscribe: stores.page.subscribe },
			preloading: { subscribe: stores.preloading.subscribe },
			session: stores.session
		};
		props.level0 = {
			props: await root_preloaded
		};

		// first load — remove SSR'd <head> contents
		const start = document.querySelector('#sapper-head-start');
		const end = document.querySelector('#sapper-head-end');

		if (start && end) {
			while (start.nextSibling !== end) detach(start.nextSibling);
			detach(start);
			detach(end);
		}

		root_component = new _internal_App_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({
			target,
			props,
			hydrate: true
		});
	}

	current_branch = branch;
	ready = true;
	session_dirty = false;
}

async function hydrate_target(target)



 {
	const { route, page } = target;
	const segments = page.path.split('/').filter(Boolean);

	let redirect = null;

	const props = { error: null, status: 200, segments: [segments[0]] };

	const preload_context = {
		fetch: (url, opts) => fetch(url, opts),
		redirect: (statusCode, location) => {
			if (redirect && (redirect.statusCode !== statusCode || redirect.location !== location)) {
				throw new Error(`Conflicting redirects`);
			}
			redirect = { statusCode, location };
		},
		error: (status, error) => {
			props.error = typeof error === 'string' ? new Error(error) : error;
			props.status = status;
		}
	};

	if (!root_preloaded) {
		root_preloaded = initial_data.preloaded[0] || _internal_manifest_client__WEBPACK_IMPORTED_MODULE_4__["root_preload"].call(preload_context, {
			path: page.path,
			query: page.query,
			params: {}
		}, $session);
	}

	let branch;
	let l = 1;

	try {
		let segment_dirty = false;
		branch = await Promise.all(route.parts.map(async (part, i) => {
			const segment = segments[i];

			if (current_branch[i] && current_branch[i].segment !== segment) segment_dirty = true;

			props.segments[l] = segments[i + 1]; // TODO make this less confusing
			if (!part) return { segment };

			const j = l++;

			if (!session_dirty && !segment_dirty && current_branch[i] && current_branch[i].part === part.i) {
				return current_branch[i];
			}

			segment_dirty = false;

			const { default: component, preload } = await load_component(_internal_manifest_client__WEBPACK_IMPORTED_MODULE_4__["components"][part.i]);

			let preloaded;
			if (ready || !initial_data.preloaded[i + 1]) {
				preloaded = preload
					? await preload.call(preload_context, {
						path: page.path,
						query: page.query,
						params: part.params ? part.params(target.match) : {}
					}, $session)
					: {};
			} else {
				preloaded = initial_data.preloaded[i + 1];
			}

			return (props[`level${j}`] = { component, props: preloaded, segment, part: part.i });
		}));
	} catch (error) {
		props.error = error;
		props.status = 500;
		branch = [];
	}

	return { redirect, props, branch };
}

function load_css(chunk) {
	const href = `client/${chunk}`;
	if (document.querySelector(`link[href="${href}"]`)) return;

	return new Promise((fulfil, reject) => {
		const link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = href;

		link.onload = () => fulfil();
		link.onerror = reject;

		document.head.appendChild(link);
	});
}

function load_component(component)


 {
	// TODO this is temporary — once placeholders are
	// always rewritten, scratch the ternary
	const promises = (typeof component.css === 'string' ? [] : component.css.map(load_css));
	promises.unshift(component.js());
	return Promise.all(promises).then(values => values[0]);
}

function detach(node) {
	node.parentNode.removeChild(node);
}

function prefetch(href) {
	const target = select_target(new URL(href, document.baseURI));

	if (target) {
		if (!prefetching || href !== prefetching.href) {
			set_prefetching(href, hydrate_target(target));
		}

		return prefetching.promise;
	}
}

function start(opts

) {
	if ('scrollRestoration' in _history) {
		_history.scrollRestoration = 'manual';
	}

	set_target(opts.target);

	addEventListener('click', handle_click);
	addEventListener('popstate', handle_popstate);

	// prefetch
	addEventListener('touchstart', trigger_prefetch);
	addEventListener('mousemove', handle_mousemove);

	return Promise.resolve().then(() => {
		const { hash, href } = location;

		_history.replaceState({ id: uid }, '', href);

		const url = new URL(location.href);

		if (initial_data.error) return handle_error(url);

		const target = select_target(url);
		if (target) return navigate(target, uid, false, hash);
	});
}

let mousemove_timeout;

function handle_mousemove(event) {
	clearTimeout(mousemove_timeout);
	mousemove_timeout = setTimeout(() => {
		trigger_prefetch(event);
	}, 20);
}

function trigger_prefetch(event) {
	const a = find_anchor(event.target);
	if (!a || a.rel !== 'prefetch') return;

	prefetch(a.href);
}

function handle_click(event) {
	// Adapted from https://github.com/visionmedia/page.js
	// MIT license https://github.com/visionmedia/page.js#license
	if (which(event) !== 1) return;
	if (event.metaKey || event.ctrlKey || event.shiftKey) return;
	if (event.defaultPrevented) return;

	const a = find_anchor(event.target);
	if (!a) return;

	if (!a.href) return;

	// check if link is inside an svg
	// in this case, both href and target are always inside an object
	const svg = typeof a.href === 'object' && a.href.constructor.name === 'SVGAnimatedString';
	const href = String(svg ? (a).href.baseVal : a.href);

	if (href === location.href) {
		if (!location.hash) event.preventDefault();
		return;
	}

	// Ignore if tag has
	// 1. 'download' attribute
	// 2. rel='external' attribute
	if (a.hasAttribute('download') || a.getAttribute('rel') === 'external') return;

	// Ignore if <a> has a target
	if (svg ? (a).target.baseVal : a.target) return;

	const url = new URL(href);

	// Don't handle hash changes
	if (url.pathname === location.pathname && url.search === location.search) return;

	const target = select_target(url);
	if (target) {
		const noscroll = a.hasAttribute('sapper-noscroll');
		navigate(target, null, noscroll, url.hash);
		event.preventDefault();
		_history.pushState({ id: cid }, '', url.href);
	}
}

function which(event) {
	return event.which === null ? event.button : event.which;
}

function find_anchor(node) {
	while (node && node.nodeName.toUpperCase() !== 'A') node = node.parentNode; // SVG <a> elements have a lowercase name
	return node;
}

function handle_popstate(event) {
	scroll_history[cid] = scroll_state();

	if (event.state) {
		const url = new URL(location.href);
		const target = select_target(url);
		if (target) {
			navigate(target, event.state.id);
		} else {
			location.href = location.href;
		}
	} else {
		// hashchange
		set_uid(uid + 1);
		set_cid(uid);
		_history.replaceState({ id: cid }, '', location.href);
	}
}

function prefetchRoutes(pathnames) {
	return _internal_manifest_client__WEBPACK_IMPORTED_MODULE_4__["routes"]
		.filter(pathnames
			? route => pathnames.some(pathname => route.pattern.test(pathname))
			: () => true
		)
		.reduce((promise, route) => promise.then(() => {
			return Promise.all(route.parts.map(part => part && load_component(_internal_manifest_client__WEBPACK_IMPORTED_MODULE_4__["components"][part.i])));
		}), Promise.resolve());
}

const stores$1 = () => Object(svelte__WEBPACK_IMPORTED_MODULE_0__["getContext"])(_internal_shared__WEBPACK_IMPORTED_MODULE_1__["CONTEXT_KEY"]);




/***/ }),

/***/ "./src/node_modules/@sapper/internal/App.svelte":
/*!******************************************************!*\
  !*** ./src/node_modules/@sapper/internal/App.svelte ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared */ "./src/node_modules/@sapper/internal/shared.mjs");
/* harmony import */ var _routes_layout_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../routes/_layout.svelte */ "./src/routes/_layout.svelte");
/* harmony import */ var _routes_error_svelte__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../routes/_error.svelte */ "./src/routes/_error.svelte");
/* src\node_modules\@sapper\internal\App.svelte generated by Svelte v3.4.1 */






const file = "src\\node_modules\\sapper\\internal\\App.svelte";

// (21:1) {:else}
function create_else_block(ctx) {
	var switch_instance_anchor, current;

	var switch_instance_spread_levels = [
		ctx.level1.props
	];

	var switch_value = ctx.level1.component;

	function switch_props(ctx) {
		let switch_instance_props = {};
		for (var i = 0; i < switch_instance_spread_levels.length; i += 1) {
			switch_instance_props = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["assign"])(switch_instance_props, switch_instance_spread_levels[i]);
		}
		return {
			props: switch_instance_props,
			$$inline: true
		};
	}

	if (switch_value) {
		var switch_instance = new switch_value(switch_props(ctx));
	}

	return {
		c: function create() {
			if (switch_instance) switch_instance.$$.fragment.c();
			switch_instance_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
		},

		l: function claim(nodes) {
			if (switch_instance) switch_instance.$$.fragment.l(nodes);
			switch_instance_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
		},

		m: function mount(target, anchor) {
			if (switch_instance) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(switch_instance, target, anchor);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, switch_instance_anchor, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var switch_instance_changes = changed.level1 ? Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["get_spread_update"])(switch_instance_spread_levels, [
				ctx.level1.props
			]) : {};

			if (switch_value !== (switch_value = ctx.level1.component)) {
				if (switch_instance) {
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();
					const old_component = switch_instance;
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["on_outro"])(() => {
						old_component.$destroy();
					});
					old_component.$$.fragment.o(1);
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();
				}

				if (switch_value) {
					switch_instance = new switch_value(switch_props(ctx));

					switch_instance.$$.fragment.c();
					switch_instance.$$.fragment.i(1);
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
				} else {
					switch_instance = null;
				}
			}

			else if (switch_value) {
				switch_instance.$set(switch_instance_changes);
			}
		},

		i: function intro(local) {
			if (current) return;
			if (switch_instance) switch_instance.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			if (switch_instance) switch_instance.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(switch_instance_anchor);
			}

			if (switch_instance) switch_instance.$destroy(detaching);
		}
	};
}

// (19:1) {#if error}
function create_if_block(ctx) {
	var current;

	var error_1 = new _routes_error_svelte__WEBPACK_IMPORTED_MODULE_4__["default"]({
		props: { error: ctx.error, status: ctx.status },
		$$inline: true
	});

	return {
		c: function create() {
			error_1.$$.fragment.c();
		},

		l: function claim(nodes) {
			error_1.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(error_1, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var error_1_changes = {};
			if (changed.error) error_1_changes.error = ctx.error;
			if (changed.status) error_1_changes.status = ctx.status;
			error_1.$set(error_1_changes);
		},

		i: function intro(local) {
			if (current) return;
			error_1.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			error_1.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			error_1.$destroy(detaching);
		}
	};
}

// (18:0) <Layout segment="{segments[0]}" {...level0.props}>
function create_default_slot(ctx) {
	var current_block_type_index, if_block, if_block_anchor, current;

	var if_block_creators = [
		create_if_block,
		create_else_block
	];

	var if_blocks = [];

	function select_block_type(ctx) {
		if (ctx.error) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	return {
		c: function create() {
			if_block.c();
			if_block_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
		},

		l: function claim(nodes) {
			if_block.l(nodes);
			if_block_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
		},

		m: function mount(target, anchor) {
			if_blocks[current_block_type_index].m(target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, if_block_anchor, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);
			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(changed, ctx);
			} else {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["on_outro"])(() => {
					if_blocks[previous_block_index].d(1);
					if_blocks[previous_block_index] = null;
				});
				if_block.o(1);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();

				if_block = if_blocks[current_block_type_index];
				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				}
				if_block.i(1);
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},

		i: function intro(local) {
			if (current) return;
			if (if_block) if_block.i();
			current = true;
		},

		o: function outro(local) {
			if (if_block) if_block.o();
			current = false;
		},

		d: function destroy(detaching) {
			if_blocks[current_block_type_index].d(detaching);

			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(if_block_anchor);
			}
		}
	};
}

function create_fragment(ctx) {
	var current;

	var layout_spread_levels = [
		{ segment: ctx.segments[0] },
		ctx.level0.props
	];

	let layout_props = {
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	};
	for (var i = 0; i < layout_spread_levels.length; i += 1) {
		layout_props = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["assign"])(layout_props, layout_spread_levels[i]);
	}
	var layout = new _routes_layout_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({ props: layout_props, $$inline: true });

	return {
		c: function create() {
			layout.$$.fragment.c();
		},

		l: function claim(nodes) {
			layout.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(layout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var layout_changes = (changed.segments || changed.level0) ? Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["get_spread_update"])(layout_spread_levels, [
				(changed.segments) && { segment: ctx.segments[0] },
				(changed.level0) && ctx.level0.props
			]) : {};
			if (changed.$$scope || changed.error || changed.status || changed.level1) layout_changes.$$scope = { changed, ctx };
			layout.$set(layout_changes);
		},

		i: function intro(local) {
			if (current) return;
			layout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			layout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			layout.$destroy(detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	

	let { stores, error, status, segments, level0, level1 = null } = $$props;

	Object(svelte__WEBPACK_IMPORTED_MODULE_1__["setContext"])(_shared__WEBPACK_IMPORTED_MODULE_2__["CONTEXT_KEY"], stores);

	$$self.$set = $$props => {
		if ('stores' in $$props) $$invalidate('stores', stores = $$props.stores);
		if ('error' in $$props) $$invalidate('error', error = $$props.error);
		if ('status' in $$props) $$invalidate('status', status = $$props.status);
		if ('segments' in $$props) $$invalidate('segments', segments = $$props.segments);
		if ('level0' in $$props) $$invalidate('level0', level0 = $$props.level0);
		if ('level1' in $$props) $$invalidate('level1', level1 = $$props.level1);
	};

	return {
		stores,
		error,
		status,
		segments,
		level0,
		level1
	};
}

class App extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], ["stores", "error", "status", "segments", "level0", "level1"]);

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.stores === undefined && !('stores' in props)) {
			console.warn("<App> was created without expected prop 'stores'");
		}
		if (ctx.error === undefined && !('error' in props)) {
			console.warn("<App> was created without expected prop 'error'");
		}
		if (ctx.status === undefined && !('status' in props)) {
			console.warn("<App> was created without expected prop 'status'");
		}
		if (ctx.segments === undefined && !('segments' in props)) {
			console.warn("<App> was created without expected prop 'segments'");
		}
		if (ctx.level0 === undefined && !('level0' in props)) {
			console.warn("<App> was created without expected prop 'level0'");
		}
	}

	get stores() {
		throw new _routes_error_svelte__WEBPACK_IMPORTED_MODULE_4__["default"]("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set stores(value) {
		throw new _routes_error_svelte__WEBPACK_IMPORTED_MODULE_4__["default"]("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get error() {
		throw new _routes_error_svelte__WEBPACK_IMPORTED_MODULE_4__["default"]("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set error(value) {
		throw new _routes_error_svelte__WEBPACK_IMPORTED_MODULE_4__["default"]("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get status() {
		throw new _routes_error_svelte__WEBPACK_IMPORTED_MODULE_4__["default"]("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set status(value) {
		throw new _routes_error_svelte__WEBPACK_IMPORTED_MODULE_4__["default"]("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get segments() {
		throw new _routes_error_svelte__WEBPACK_IMPORTED_MODULE_4__["default"]("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set segments(value) {
		throw new _routes_error_svelte__WEBPACK_IMPORTED_MODULE_4__["default"]("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get level0() {
		throw new _routes_error_svelte__WEBPACK_IMPORTED_MODULE_4__["default"]("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set level0(value) {
		throw new _routes_error_svelte__WEBPACK_IMPORTED_MODULE_4__["default"]("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get level1() {
		throw new _routes_error_svelte__WEBPACK_IMPORTED_MODULE_4__["default"]("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set level1(value) {
		throw new _routes_error_svelte__WEBPACK_IMPORTED_MODULE_4__["default"]("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/node_modules/@sapper/internal/manifest-client.mjs":
/*!***************************************************************!*\
  !*** ./src/node_modules/@sapper/internal/manifest-client.mjs ***!
  \***************************************************************/
/*! exports provided: Root, root_preload, ErrorComponent, ignore, components, routes */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ignore", function() { return ignore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _routes_layout_svelte__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../routes/_layout.svelte */ "./src/routes/_layout.svelte");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Root", function() { return _routes_layout_svelte__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared */ "./src/node_modules/@sapper/internal/shared.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "root_preload", function() { return _shared__WEBPACK_IMPORTED_MODULE_1__["preload"]; });

/* harmony import */ var _routes_error_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../routes/_error.svelte */ "./src/routes/_error.svelte");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return _routes_error_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]; });

// This file is generated by Sapper — do not edit it!




const ignore = [];

const components = [
	{
		js: () => __webpack_require__.e(/*! import() | index */ "index").then(__webpack_require__.bind(null, /*! ../../../routes/index.svelte */ "./src/routes/index.svelte")),
		css: "__SAPPER_CSS_PLACEHOLDER:index.svelte__"
	},
	{
		js: () => Promise.all(/*! import() | categories */[__webpack_require__.e("vendors~categories~providers"), __webpack_require__.e("categories")]).then(__webpack_require__.bind(null, /*! ../../../routes/categories.svelte */ "./src/routes/categories.svelte")),
		css: "__SAPPER_CSS_PLACEHOLDER:categories.svelte__"
	},
	{
		js: () => Promise.all(/*! import() | providers */[__webpack_require__.e("vendors~categories~providers"), __webpack_require__.e("vendors~providers"), __webpack_require__.e("providers")]).then(__webpack_require__.bind(null, /*! ../../../routes/providers.svelte */ "./src/routes/providers.svelte")),
		css: "__SAPPER_CSS_PLACEHOLDER:providers.svelte__"
	},
	{
		js: () => __webpack_require__.e(/*! import() | about */ "about").then(__webpack_require__.bind(null, /*! ../../../routes/about.svelte */ "./src/routes/about.svelte")),
		css: "__SAPPER_CSS_PLACEHOLDER:about.svelte__"
	},
	{
		js: () => __webpack_require__.e(/*! import() | home */ "home").then(__webpack_require__.bind(null, /*! ../../../routes/home.svelte */ "./src/routes/home.svelte")),
		css: "__SAPPER_CSS_PLACEHOLDER:home.svelte__"
	}
];

const routes = [
	{
		// index.svelte
		pattern: /^\/$/,
		parts: [
			{ i: 0 }
		]
	},

	{
		// categories.svelte
		pattern: /^\/categories\/?$/,
		parts: [
			{ i: 1 }
		]
	},

	{
		// providers.svelte
		pattern: /^\/providers\/?$/,
		parts: [
			{ i: 2 }
		]
	},

	{
		// about.svelte
		pattern: /^\/about\/?$/,
		parts: [
			{ i: 3 }
		]
	},

	{
		// home.svelte
		pattern: /^\/home\/?$/,
		parts: [
			{ i: 4 }
		]
	}
];

if (typeof window !== 'undefined') {
	__webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./node_modules/sapper/sapper-dev-client.js */ "./node_modules/sapper/sapper-dev-client.js")).then(client => {
		client.connect(10000);
	});
}

/***/ }),

/***/ "./src/node_modules/@sapper/internal/shared.mjs":
/*!******************************************************!*\
  !*** ./src/node_modules/@sapper/internal/shared.mjs ***!
  \******************************************************/
/*! exports provided: CONTEXT_KEY, preload */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTEXT_KEY", function() { return CONTEXT_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preload", function() { return preload; });
/* harmony import */ var svelte_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/store */ "./node_modules/svelte/store.mjs");


const CONTEXT_KEY = {};

const preload = () => ({});

/***/ }),

/***/ "./src/routes/_error.svelte":
/*!**********************************!*\
  !*** ./src/routes/_error.svelte ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal.mjs");
/* src\routes\_error.svelte generated by Svelte v3.4.1 */


const file = "src\\routes\\_error.svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = 'svelte-13vgy2g-style';
	style.textContent = "h1.svelte-13vgy2g,p.svelte-13vgy2g{margin:0 auto}h1.svelte-13vgy2g{font-size:2.8em;font-weight:700;margin:0 0 0.5em 0}p.svelte-13vgy2g{margin:1em auto}@media(min-width: 480px){h1.svelte-13vgy2g{font-size:4em}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2Vycm9yLnN2ZWx0ZSIsInNvdXJjZXMiOlsiX2Vycm9yLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxyXG5cdGV4cG9ydCBsZXQgc3RhdHVzO1xyXG5cdGV4cG9ydCBsZXQgZXJyb3I7XHJcblxyXG5cdGNvbnN0IGRldiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnO1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuXHRoMSwgcCB7XHJcblx0XHRtYXJnaW46IDAgYXV0bztcclxuXHR9XHJcblxyXG5cdGgxIHtcclxuXHRcdGZvbnQtc2l6ZTogMi44ZW07XHJcblx0XHRmb250LXdlaWdodDogNzAwO1xyXG5cdFx0bWFyZ2luOiAwIDAgMC41ZW0gMDtcclxuXHR9XHJcblxyXG5cdHAge1xyXG5cdFx0bWFyZ2luOiAxZW0gYXV0bztcclxuXHR9XHJcblxyXG5cdEBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xyXG5cdFx0aDEge1xyXG5cdFx0XHRmb250LXNpemU6IDRlbTtcclxuXHRcdH1cclxuXHR9XHJcbjwvc3R5bGU+XHJcblxyXG48c3ZlbHRlOmhlYWQ+XHJcblx0PHRpdGxlPntzdGF0dXN9PC90aXRsZT5cclxuPC9zdmVsdGU6aGVhZD5cclxuXHJcbjxoMT57c3RhdHVzfTwvaDE+XHJcblxyXG48cD57ZXJyb3IubWVzc2FnZX08L3A+XHJcblxyXG57I2lmIGRldiAmJiBlcnJvci5zdGFja31cclxuXHQ8cHJlPntlcnJvci5zdGFja308L3ByZT5cclxuey9pZn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFDLGlCQUFFLENBQUUsQ0FBQyxlQUFDLENBQUMsQUFDTixNQUFNLENBQUUsQ0FBQyxDQUFDLElBQUksQUFDZixDQUFDLEFBRUQsRUFBRSxlQUFDLENBQUMsQUFDSCxTQUFTLENBQUUsS0FBSyxDQUNoQixXQUFXLENBQUUsR0FBRyxDQUNoQixNQUFNLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxBQUNwQixDQUFDLEFBRUQsQ0FBQyxlQUFDLENBQUMsQUFDRixNQUFNLENBQUUsR0FBRyxDQUFDLElBQUksQUFDakIsQ0FBQyxBQUVELE1BQU0sQUFBQyxZQUFZLEtBQUssQ0FBQyxBQUFDLENBQUMsQUFDMUIsRUFBRSxlQUFDLENBQUMsQUFDSCxTQUFTLENBQUUsR0FBRyxBQUNmLENBQUMsQUFDRixDQUFDIn0= */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(document.head, style);
}

// (38:0) {#if dev && error.stack}
function create_if_block(ctx) {
	var pre, t_value = ctx.error.stack, t;

	return {
		c: function create() {
			pre = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("pre");
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t_value);
			this.h()
		},

		l: function claim(nodes) {
			pre = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "PRE", {}, false);
			var pre_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(pre);

			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(pre_nodes, t_value);
			pre_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			this.h();
		},

		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(pre, file, 38, 1, 488);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, pre, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(pre, t);
		},

		p: function update(changed, ctx) {
			if ((changed.error) && t_value !== (t_value = ctx.error.stack)) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t, t_value);
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(pre);
			}
		}
	};
}

function create_fragment(ctx) {
	var title_value, t0, h1, t1, t2, p, t3_value = ctx.error.message, t3, t4, if_block_anchor;

	document.title = title_value = ctx.status;

	var if_block = (ctx.dev && ctx.error.stack) && create_if_block(ctx);

	return {
		c: function create() {
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h1");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(ctx.status);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t3_value);
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			if (if_block) if_block.c();
			if_block_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
			this.h()
		},

		l: function claim(nodes) {
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(nodes, "\r\n\r\n");

			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "H1", { class: true }, false);
			var h1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h1);

			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h1_nodes, ctx.status);
			h1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(nodes, "\r\n\r\n");

			p = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "P", { class: true }, false);
			var p_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p);

			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p_nodes, t3_value);
			p_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(nodes, "\r\n\r\n");
			if (if_block) if_block.l(nodes);
			if_block_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
			this.h();
		},

		h: function hydrate() {
			h1.className = "svelte-13vgy2g";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h1, file, 33, 0, 414);
			p.className = "svelte-13vgy2g";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p, file, 35, 0, 435);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, h1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(h1, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t2, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, p, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(p, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t4, anchor);
			if (if_block) if_block.m(target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, if_block_anchor, anchor);
		},

		p: function update(changed, ctx) {
			if ((changed.status) && title_value !== (title_value = ctx.status)) {
				document.title = title_value;
			}

			if (changed.status) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t1, ctx.status);
			}

			if ((changed.error) && t3_value !== (t3_value = ctx.error.message)) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t3, t3_value);
			}

			if (ctx.dev && ctx.error.stack) {
				if (if_block) {
					if_block.p(changed, ctx);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},

		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t0);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(h1);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t2);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(p);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t4);
			}

			if (if_block) if_block.d(detaching);

			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(if_block_anchor);
			}
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { status, error } = $$props;

	const dev = "development" === 'development';

	$$self.$set = $$props => {
		if ('status' in $$props) $$invalidate('status', status = $$props.status);
		if ('error' in $$props) $$invalidate('error', error = $$props.error);
	};

	return { status, error, dev };
}

class Error extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-13vgy2g-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], ["status", "error"]);

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.status === undefined && !('status' in props)) {
			console.warn("<Error> was created without expected prop 'status'");
		}
		if (ctx.error === undefined && !('error' in props)) {
			console.warn("<Error> was created without expected prop 'error'");
		}
	}

	get status() {
		throw new Error("<Error>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set status(value) {
		throw new Error("<Error>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get error() {
		throw new Error("<Error>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set error(value) {
		throw new Error("<Error>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Error);

/***/ }),

/***/ "./src/routes/_layout.svelte":
/*!***********************************!*\
  !*** ./src/routes/_layout.svelte ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal.mjs");
/* harmony import */ var _components_Nav_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Nav.svelte */ "./src/components/Nav.svelte");
/* src\routes\_layout.svelte generated by Svelte v3.4.1 */



const file = "src\\routes\\_layout.svelte";

function create_fragment(ctx) {
	var t, main, current;

	var nav = new _components_Nav_svelte__WEBPACK_IMPORTED_MODULE_1__["default"]({
		props: { segment: ctx.segment },
		$$inline: true
	});

	const default_slot_1 = ctx.$$slots.default;
	const default_slot = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_slot"])(default_slot_1, ctx, null);

	return {
		c: function create() {
			nav.$$.fragment.c();
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			main = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("main");

			if (default_slot) default_slot.c();
			this.h()
		},

		l: function claim(nodes) {
			nav.$$.fragment.l(nodes);
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(nodes, "\r\n\r\n");

			main = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "MAIN", {}, false);
			var main_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(main);

			if (default_slot) default_slot.l(main_nodes);
			main_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			this.h();
		},

		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(main, file, 8, 0, 113);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(nav, target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, main, anchor);

			if (default_slot) {
				default_slot.m(main, null);
			}

			current = true;
		},

		p: function update(changed, ctx) {
			var nav_changes = {};
			if (changed.segment) nav_changes.segment = ctx.segment;
			nav.$set(nav_changes);

			if (default_slot && default_slot.p && changed.$$scope) {
				default_slot.p(Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["get_slot_changes"])(default_slot_1, ctx, changed, null), Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["get_slot_context"])(default_slot_1, ctx, null));
			}
		},

		i: function intro(local) {
			if (current) return;
			nav.$$.fragment.i(local);

			if (default_slot && default_slot.i) default_slot.i(local);
			current = true;
		},

		o: function outro(local) {
			nav.$$.fragment.o(local);
			if (default_slot && default_slot.o) default_slot.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			nav.$destroy(detaching);

			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(main);
			}

			if (default_slot) default_slot.d(detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { segment } = $$props;

	let { $$slots = {}, $$scope } = $$props;

	$$self.$set = $$props => {
		if ('segment' in $$props) $$invalidate('segment', segment = $$props.segment);
		if ('$$scope' in $$props) $$invalidate('$$scope', $$scope = $$props.$$scope);
	};

	return { segment, $$slots, $$scope };
}

class Layout extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], ["segment"]);

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.segment === undefined && !('segment' in props)) {
			console.warn("<Layout> was created without expected prop 'segment'");
		}
	}

	get segment() {
		throw new Error("<Layout>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set segment(value) {
		throw new Error("<Layout>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2J1bG1hL2Nzcy9idWxtYS5taW4uY3NzPzVlNGIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2J1bG1hL2Nzcy9idWxtYS5taW4uY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS9pbnRlcm5hbC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zdG9yZS5tanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXYuc3ZlbHRlIiwid2VicGFjazovLy8uL3NyYy9tZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9ub2RlX21vZHVsZXMvQHNhcHBlci9hcHAubWpzIiwid2VicGFjazovLy8uL3NyYy9ub2RlX21vZHVsZXMvQHNhcHBlci9pbnRlcm5hbC9BcHAuc3ZlbHRlIiwid2VicGFjazovLy8uL3NyYy9ub2RlX21vZHVsZXMvQHNhcHBlci9pbnRlcm5hbC9tYW5pZmVzdC1jbGllbnQubWpzIiwid2VicGFjazovLy8uL3NyYy9ub2RlX21vZHVsZXMvQHNhcHBlci9pbnRlcm5hbC9zaGFyZWQubWpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvX2Vycm9yLnN2ZWx0ZSIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL19sYXlvdXQuc3ZlbHRlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBLGdGQUF3RSxzTUFBc007QUFDOVE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBLHlDQUFpQzs7QUFFakM7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGNBQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUF3QixrQ0FBa0M7QUFDMUQsY0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBLGtEQUEwQyxvQkFBb0IsV0FBVzs7QUFFekU7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBZ0IsdUJBQXVCO0FBQ3ZDOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDak1BLGNBQWMsbUJBQU8sQ0FBQyxtSUFBZ0Q7O0FBRXRFLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyx5RkFBc0M7O0FBRTNEOztBQUVBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7O0FDbkJmLDJCQUEyQixtQkFBTyxDQUFDLDJGQUFzQztBQUN6RTtBQUNBLGNBQWMsUUFBUywrRkFBK0YsS0FBSyw0QkFBNEIsb0JBQW9CLEdBQUcsaUNBQWlDLDBCQUEwQixzQkFBc0IsS0FBSyw0QkFBNEIsb0JBQW9CLEdBQUcsaUNBQWlDLDBCQUEwQixrSkFBa0osMkJBQTJCLHlCQUF5QixzQkFBc0IscUJBQXFCLGlCQUFpQix5RkFBeUYsNkJBQTZCLGtCQUFrQixlQUFlLGFBQWEsY0FBYyxjQUFjLGNBQWMsb0JBQW9CLG9CQUFvQixrQkFBa0IsUUFBUSxpQ0FBaUMseUJBQXlCLGdDQUFnQyx3QkFBd0IsYUFBYSx3WUFBd1kscUJBQXFCLHFCQUFxQixxQkFBcUIsd0JBQXdCLG1DQUFtQyxZQUFZLHVCQUF1QixlQUFlLG9CQUFvQixxQkFBcUIsWUFBWSxjQUFjLFlBQVksWUFBWSxnQkFBZ0IsZUFBZSxnQkFBZ0IsZUFBZSxVQUFVLGtCQUFrQixtQkFBbUIsV0FBVyx3RUFBd0Usc0JBQXNCLGFBQWEsY0FBYyxTQUFTLGtCQUFrQixRQUFRLGtFQUFrRSwwREFBMEQsdUNBQXVDLCtCQUErQixxQ0FBcUMsV0FBVyxVQUFVLG1DQUFtQyxXQUFXLFVBQVUsa0VBQWtFLG1DQUFtQyxtQ0FBbUMsbUNBQW1DLHVDQUF1QyxZQUFZLGdCQUFnQixlQUFlLGdCQUFnQixlQUFlLFdBQVcseUNBQXlDLFlBQVksZ0JBQWdCLGVBQWUsZ0JBQWdCLGVBQWUsV0FBVyx1Q0FBdUMsWUFBWSxnQkFBZ0IsZUFBZSxnQkFBZ0IsZUFBZSxXQUFXLHVGQUF1RixpREFBaUQseUNBQXlDLHlCQUF5Qix1QkFBdUIsK0JBQStCLDZCQUE2QixhQUFhLGNBQWMsV0FBVyxrQkFBa0IsVUFBVSx5d0JBQXl3QixTQUFTLE9BQU8sa0JBQWtCLFFBQVEsTUFBTSx5SUFBeUkscUJBQXFCLHdCQUF3QixtQkFBbUIsNkJBQTZCLGtCQUFrQixnQkFBZ0Isb0JBQW9CLGVBQWUsY0FBYywyQkFBMkIsZ0JBQWdCLGtDQUFrQyxnQ0FBZ0MsaUNBQWlDLCtCQUErQixrQkFBa0IsbUJBQW1CLHczQkFBdzNCLFVBQVUsc2xCQUFzbEIsbUJBQW1CLG9MQUFvTCxTQUFTLFVBQVUsa0JBQWtCLGVBQWUsZ0JBQWdCLEdBQUcsZ0JBQWdCLDZCQUE2QixTQUFTLEtBQUssc0JBQXNCLG1CQUFtQixtQkFBbUIsOEJBQThCLFlBQVksZUFBZSxNQUFNLGVBQWUsT0FBTyxTQUFTLE1BQU0seUJBQXlCLGlCQUFpQixNQUFNLFVBQVUsZ0JBQWdCLEtBQUssc0JBQXNCLGVBQWUsa0NBQWtDLG1DQUFtQyxnQkFBZ0Isa0JBQWtCLGtCQUFrQixrQ0FBa0MsOEJBQThCLDJCQUEyQiwwQkFBMEIsc0JBQXNCLGtEQUFrRCxjQUFjLGtDQUFrQyxvS0FBb0ssU0FBUyw2QkFBNkIsNEJBQTRCLHNCQUFzQixLQUFLLGNBQWMsZUFBZSxnQkFBZ0IsZ0JBQWdCLEVBQUUsY0FBYyxlQUFlLHFCQUFxQixTQUFTLG1CQUFtQixRQUFRLGNBQWMsS0FBSyx5QkFBeUIsY0FBYyxpQkFBaUIsZ0JBQWdCLHlCQUF5QixHQUFHLHlCQUF5QixZQUFZLGNBQWMsV0FBVyxnQkFBZ0IsSUFBSSxZQUFZLGVBQWUsdUNBQXVDLHdCQUF3QixNQUFNLGlCQUFpQixLQUFLLG1CQUFtQixvQkFBb0IsT0FBTyxjQUFjLGdCQUFnQixTQUFTLFlBQVksSUFBSSxpQ0FBaUMseUJBQXlCLGNBQWMsaUJBQWlCLGdCQUFnQix1QkFBdUIsZ0JBQWdCLGlCQUFpQixTQUFTLDZCQUE2QixtQkFBbUIsY0FBYyxVQUFVLGtCQUFrQixnQkFBZ0IsbUJBQW1CLFNBQVMsY0FBYyxvQkFBb0IsV0FBVyxjQUFjLGNBQWMsZ0JBQWdCLHFCQUFxQixpQkFBaUIsc0JBQXNCLFlBQVksMEJBQTBCLFdBQVcseUJBQXlCLFdBQVcsMkJBQTJCLFdBQVcseUJBQXlCLFdBQVcsMkJBQTJCLFdBQVcsNEJBQTRCLFdBQVcseUJBQXlCLFdBQVcsMkJBQTJCLG9DQUFvQyxrQkFBa0IseUJBQXlCLGtCQUFrQiwyQkFBMkIsa0JBQWtCLHlCQUF5QixrQkFBa0IsMkJBQTJCLGtCQUFrQiw0QkFBNEIsa0JBQWtCLHlCQUF5QixrQkFBa0IsNEJBQTRCLDBDQUEwQyxrQkFBa0IseUJBQXlCLGtCQUFrQiwyQkFBMkIsa0JBQWtCLHlCQUF5QixrQkFBa0IsMkJBQTJCLGtCQUFrQiw0QkFBNEIsa0JBQWtCLHlCQUF5QixrQkFBa0IsNEJBQTRCLHFDQUFxQyxpQkFBaUIseUJBQXlCLGlCQUFpQiwyQkFBMkIsaUJBQWlCLHlCQUF5QixpQkFBaUIsMkJBQTJCLGlCQUFpQiw0QkFBNEIsaUJBQWlCLHlCQUF5QixpQkFBaUIsNEJBQTRCLHFDQUFxQyxtQkFBbUIseUJBQXlCLG1CQUFtQiwyQkFBMkIsbUJBQW1CLHlCQUF5QixtQkFBbUIsMkJBQTJCLG1CQUFtQiw0QkFBNEIsbUJBQW1CLHlCQUF5QixtQkFBbUIsNEJBQTRCLHFDQUFxQyxzQkFBc0IseUJBQXlCLHNCQUFzQiwyQkFBMkIsc0JBQXNCLHlCQUF5QixzQkFBc0IsMkJBQTJCLHNCQUFzQiw0QkFBNEIsc0JBQXNCLHlCQUF5QixzQkFBc0IsNEJBQTRCLHFDQUFxQyxrQkFBa0IseUJBQXlCLGtCQUFrQiwyQkFBMkIsa0JBQWtCLHlCQUF5QixrQkFBa0IsMkJBQTJCLGtCQUFrQiw0QkFBNEIsa0JBQWtCLHlCQUF5QixrQkFBa0IsNEJBQTRCLG1CQUFtQiw0QkFBNEIsb0JBQW9CLDZCQUE2QixlQUFlLDBCQUEwQixnQkFBZ0IsMkJBQTJCLG9DQUFvQywwQkFBMEIsNkJBQTZCLDBDQUEwQywwQkFBMEIsNkJBQTZCLDJEQUEyRCwrQkFBK0IsNkJBQTZCLHFDQUFxQyx5QkFBeUIsNkJBQTZCLHFDQUFxQywyQkFBMkIsNkJBQTZCLDREQUE0RCxnQ0FBZ0MsNkJBQTZCLHFDQUFxQyw4QkFBOEIsNkJBQTZCLDREQUE0RCxtQ0FBbUMsNkJBQTZCLHFDQUFxQywwQkFBMEIsNkJBQTZCLG9DQUFvQywyQkFBMkIsOEJBQThCLDBDQUEwQywyQkFBMkIsOEJBQThCLDJEQUEyRCxnQ0FBZ0MsOEJBQThCLHFDQUFxQywwQkFBMEIsOEJBQThCLHFDQUFxQyw0QkFBNEIsOEJBQThCLDREQUE0RCxpQ0FBaUMsOEJBQThCLHFDQUFxQywrQkFBK0IsOEJBQThCLDREQUE0RCxvQ0FBb0MsOEJBQThCLHFDQUFxQywyQkFBMkIsOEJBQThCLG9DQUFvQyxzQkFBc0IsMkJBQTJCLDBDQUEwQyxzQkFBc0IsMkJBQTJCLDJEQUEyRCwyQkFBMkIsMkJBQTJCLHFDQUFxQyxxQkFBcUIsMkJBQTJCLHFDQUFxQyx1QkFBdUIsMkJBQTJCLDREQUE0RCw0QkFBNEIsMkJBQTJCLHFDQUFxQywwQkFBMEIsMkJBQTJCLDREQUE0RCwrQkFBK0IsMkJBQTJCLHFDQUFxQyxzQkFBc0IsMkJBQTJCLG9DQUFvQyx1QkFBdUIsNEJBQTRCLDBDQUEwQyx1QkFBdUIsNEJBQTRCLDJEQUEyRCw0QkFBNEIsNEJBQTRCLHFDQUFxQyxzQkFBc0IsNEJBQTRCLHFDQUFxQyx3QkFBd0IsNEJBQTRCLDREQUE0RCw2QkFBNkIsNEJBQTRCLHFDQUFxQywyQkFBMkIsNEJBQTRCLDREQUE0RCxnQ0FBZ0MsNEJBQTRCLHFDQUFxQyx1QkFBdUIsNEJBQTRCLGdCQUFnQixvQ0FBb0MsY0FBYyxtQ0FBbUMsY0FBYyxtQ0FBbUMsV0FBVyw0QkFBNEIsZ0JBQWdCLHFCQUFxQiw4Q0FBOEMsd0JBQXdCLHNCQUFzQixnQ0FBZ0MsZ0JBQWdCLHdCQUF3Qiw4Q0FBOEMscUJBQXFCLHNCQUFzQixtQ0FBbUMsZ0JBQWdCLHdCQUF3Qiw4Q0FBOEMsd0JBQXdCLHNCQUFzQixtQ0FBbUMsZUFBZSx3QkFBd0IsNENBQTRDLHdCQUF3QixxQkFBcUIsbUNBQW1DLGtCQUFrQix3QkFBd0Isa0RBQWtELHdCQUF3Qix3QkFBd0IsbUNBQW1DLGVBQWUsd0JBQXdCLDRDQUE0Qyx3QkFBd0IscUJBQXFCLG1DQUFtQyxlQUFlLHdCQUF3Qiw0Q0FBNEMsd0JBQXdCLHFCQUFxQixtQ0FBbUMsa0JBQWtCLHdCQUF3QixrREFBa0Qsd0JBQXdCLHdCQUF3QixtQ0FBbUMsa0JBQWtCLHdCQUF3QixrREFBa0Qsd0JBQXdCLHdCQUF3QixtQ0FBbUMsaUJBQWlCLHdCQUF3QixnREFBZ0Qsd0JBQXdCLHVCQUF1QixtQ0FBbUMsb0JBQW9CLHdCQUF3QiwwQkFBMEIsbUNBQW1DLG9CQUFvQix3QkFBd0IsMEJBQTBCLG1DQUFtQyxzQkFBc0Isd0JBQXdCLDRCQUE0QixtQ0FBbUMsb0JBQW9CLHdCQUF3QiwwQkFBMEIsbUNBQW1DLGVBQWUsd0JBQXdCLHFCQUFxQixtQ0FBbUMscUJBQXFCLHdCQUF3QiwyQkFBMkIsbUNBQW1DLHVCQUF1Qix3QkFBd0IsNkJBQTZCLG1DQUFtQyxvQkFBb0Isd0JBQXdCLDBCQUEwQixtQ0FBbUMsb0JBQW9CLHdCQUF3QiwwQkFBMEIsbUNBQW1DLHVCQUF1QiwwQkFBMEIsd0JBQXdCLDBCQUEwQiwwQkFBMEIsMEJBQTBCLHNCQUFzQiwwQkFBMEIsbUJBQW1CLDhLQUE4SyxxQkFBcUIsOEtBQThLLHNCQUFzQiw4S0FBOEsscUJBQXFCLGdDQUFnQyxnQkFBZ0IsZ0NBQWdDLFVBQVUsd0JBQXdCLG9DQUFvQyxpQkFBaUIseUJBQXlCLDBDQUEwQyxpQkFBaUIseUJBQXlCLDJEQUEyRCxzQkFBc0IseUJBQXlCLHFDQUFxQyxnQkFBZ0IseUJBQXlCLHFDQUFxQyxrQkFBa0IseUJBQXlCLDREQUE0RCx1QkFBdUIseUJBQXlCLHFDQUFxQyxxQkFBcUIseUJBQXlCLDREQUE0RCwwQkFBMEIseUJBQXlCLHFDQUFxQyxpQkFBaUIseUJBQXlCLFNBQVMsdUJBQXVCLG9DQUFvQyxnQkFBZ0Isd0JBQXdCLDBDQUEwQyxnQkFBZ0Isd0JBQXdCLDJEQUEyRCxxQkFBcUIsd0JBQXdCLHFDQUFxQyxlQUFlLHdCQUF3QixxQ0FBcUMsaUJBQWlCLHdCQUF3Qiw0REFBNEQsc0JBQXNCLHdCQUF3QixxQ0FBcUMsb0JBQW9CLHdCQUF3Qiw0REFBNEQseUJBQXlCLHdCQUF3QixxQ0FBcUMsZ0JBQWdCLHdCQUF3QixXQUFXLHlCQUF5QixvQ0FBb0Msa0JBQWtCLDBCQUEwQiwwQ0FBMEMsa0JBQWtCLDBCQUEwQiwyREFBMkQsdUJBQXVCLDBCQUEwQixxQ0FBcUMsaUJBQWlCLDBCQUEwQixxQ0FBcUMsbUJBQW1CLDBCQUEwQiw0REFBNEQsd0JBQXdCLDBCQUEwQixxQ0FBcUMsc0JBQXNCLDBCQUEwQiw0REFBNEQsMkJBQTJCLDBCQUEwQixxQ0FBcUMsa0JBQWtCLDBCQUEwQixpQkFBaUIsK0JBQStCLG9DQUFvQyx3QkFBd0IsZ0NBQWdDLDBDQUEwQyx3QkFBd0IsZ0NBQWdDLDJEQUEyRCw2QkFBNkIsZ0NBQWdDLHFDQUFxQyx1QkFBdUIsZ0NBQWdDLHFDQUFxQyx5QkFBeUIsZ0NBQWdDLDREQUE0RCw4QkFBOEIsZ0NBQWdDLHFDQUFxQyw0QkFBNEIsZ0NBQWdDLDREQUE0RCxpQ0FBaUMsZ0NBQWdDLHFDQUFxQyx3QkFBd0IsZ0NBQWdDLGdCQUFnQiw4QkFBOEIsb0NBQW9DLHVCQUF1QiwrQkFBK0IsMENBQTBDLHVCQUF1QiwrQkFBK0IsMkRBQTJELDRCQUE0QiwrQkFBK0IscUNBQXFDLHNCQUFzQiwrQkFBK0IscUNBQXFDLHdCQUF3QiwrQkFBK0IsNERBQTRELDZCQUE2QiwrQkFBK0IscUNBQXFDLDJCQUEyQiwrQkFBK0IsNERBQTRELGdDQUFnQywrQkFBK0IscUNBQXFDLHVCQUF1QiwrQkFBK0IsV0FBVyx1QkFBdUIsWUFBWSxzQkFBc0IsNkJBQTZCLHVCQUF1QiwwQkFBMEIsb0JBQW9CLDRCQUE0Qiw2QkFBNkIsc0JBQXNCLG9DQUFvQyxrQkFBa0Isd0JBQXdCLDBDQUEwQyxrQkFBa0Isd0JBQXdCLDJEQUEyRCx1QkFBdUIsd0JBQXdCLHFDQUFxQyxpQkFBaUIsd0JBQXdCLHFDQUFxQyxtQkFBbUIsd0JBQXdCLDREQUE0RCx3QkFBd0Isd0JBQXdCLHFDQUFxQyxzQkFBc0Isd0JBQXdCLDREQUE0RCwyQkFBMkIsd0JBQXdCLHFDQUFxQyxrQkFBa0Isd0JBQXdCLGNBQWMsNEJBQTRCLG9DQUFvQyxxQkFBcUIsNkJBQTZCLDBDQUEwQyxxQkFBcUIsNkJBQTZCLDJEQUEyRCwwQkFBMEIsNkJBQTZCLHFDQUFxQyxvQkFBb0IsNkJBQTZCLHFDQUFxQyxzQkFBc0IsNkJBQTZCLDREQUE0RCwyQkFBMkIsNkJBQTZCLHFDQUFxQyx5QkFBeUIsNkJBQTZCLDREQUE0RCw4QkFBOEIsNkJBQTZCLHFDQUFxQyxxQkFBcUIsNkJBQTZCLGVBQWUsbUJBQW1CLGdCQUFnQixvQkFBb0IsZUFBZSwwQkFBMEIsZUFBZSwwQkFBMEIsS0FBSyxzQkFBc0Isa0JBQWtCLG1FQUFtRSxjQUFjLGNBQWMsZ0JBQWdCLHdCQUF3Qix5REFBeUQsYUFBYSwrREFBK0QsUUFBUSxzQkFBc0IscUJBQXFCLGlCQUFpQixjQUFjLGVBQWUsdUJBQXVCLGtDQUFrQyxtQkFBbUIsb0JBQW9CLCtCQUErQixrQkFBa0IsbUJBQW1CLGVBQWUsY0FBYyxvRkFBb0YsYUFBYSxZQUFZLDJDQUEyQyxnQ0FBZ0MscUJBQXFCLDJDQUEyQyxvQkFBb0IsaUNBQWlDLHFDQUFxQyxnQ0FBZ0MsaUNBQWlDLGlDQUFpQyxxQkFBcUIsY0FBYyxpQ0FBaUMscUJBQXFCLGNBQWMsMkRBQTJELDZDQUE2QyxpQ0FBaUMscUJBQXFCLGNBQWMsZ0JBQWdCLDZCQUE2Qix5QkFBeUIsY0FBYywwQkFBMEIsa0dBQWtHLHlCQUF5QixjQUFjLGlEQUFpRCx5QkFBeUIsY0FBYyw2REFBNkQsNkJBQTZCLHlCQUF5QixnQkFBZ0IsaUJBQWlCLHNCQUFzQix5QkFBeUIsY0FBYyxtREFBbUQseUJBQXlCLHlCQUF5QixjQUFjLG1EQUFtRCx5QkFBeUIsY0FBYyw2RUFBNkUsOENBQThDLG1EQUFtRCx5QkFBeUIseUJBQXlCLGNBQWMsK0RBQStELHNCQUFzQix5QkFBeUIsZ0JBQWdCLDZCQUE2Qix5QkFBeUIsV0FBVyxtQ0FBbUMsc0JBQXNCLHVGQUF1Rix5QkFBeUIseUJBQXlCLGdCQUFnQixXQUFXLG1DQUFtQywrREFBK0QsNkJBQTZCLDZCQUE2QixrQkFBa0IsV0FBVyxzRUFBc0Usc0JBQXNCLGtCQUFrQixjQUFjLCtDQUErQyx5REFBeUQsdUZBQXVGLDZCQUE2QixrQkFBa0IsZ0JBQWdCLFdBQVcseUNBQXlDLDZCQUE2QixxQkFBcUIsY0FBYyw4RkFBOEYseUJBQXlCLFdBQVcsK0dBQStHLDZCQUE2QixxQkFBcUIsZ0JBQWdCLGNBQWMsaUJBQWlCLHlCQUF5Qix5QkFBeUIsV0FBVyxtREFBbUQseUJBQXlCLHlCQUF5QixXQUFXLG1EQUFtRCx5QkFBeUIsV0FBVyw2RUFBNkUsMkNBQTJDLG1EQUFtRCxzQkFBc0IseUJBQXlCLFdBQVcsK0RBQStELHlCQUF5Qix5QkFBeUIsZ0JBQWdCLDZCQUE2QixzQkFBc0IsY0FBYyxtQ0FBbUMseUJBQXlCLHVGQUF1RixzQkFBc0IseUJBQXlCLGdCQUFnQixjQUFjLG1DQUFtQyx5REFBeUQsNkJBQTZCLDZCQUE2QixxQkFBcUIsY0FBYyxzRUFBc0UseUJBQXlCLHFCQUFxQixXQUFXLCtDQUErQywrREFBK0QsdUZBQXVGLDZCQUE2QixxQkFBcUIsZ0JBQWdCLGNBQWMseUNBQXlDLDZCQUE2QixrQkFBa0IsV0FBVyw4RkFBOEYsc0JBQXNCLGNBQWMsK0dBQStHLDZCQUE2QixrQkFBa0IsZ0JBQWdCLFdBQVcsaUJBQWlCLHlCQUF5Qix5QkFBeUIsY0FBYyxtREFBbUQsc0JBQXNCLHlCQUF5QixjQUFjLG1EQUFtRCx5QkFBeUIsY0FBYyw2RUFBNkUsOENBQThDLG1EQUFtRCx5QkFBeUIseUJBQXlCLGNBQWMsK0RBQStELHlCQUF5Qix5QkFBeUIsZ0JBQWdCLDZCQUE2Qix5QkFBeUIsY0FBYyxtQ0FBbUMseUJBQXlCLHVGQUF1Rix5QkFBeUIseUJBQXlCLGdCQUFnQixjQUFjLG1DQUFtQywrREFBK0QsNkJBQTZCLDZCQUE2QixxQkFBcUIsY0FBYyxzRUFBc0UseUJBQXlCLHFCQUFxQixjQUFjLCtDQUErQywrREFBK0QsdUZBQXVGLDZCQUE2QixxQkFBcUIsZ0JBQWdCLGNBQWMseUNBQXlDLDZCQUE2QixxQkFBcUIsY0FBYyw4RkFBOEYseUJBQXlCLGNBQWMsK0dBQStHLDZCQUE2QixxQkFBcUIsZ0JBQWdCLGNBQWMsZ0JBQWdCLHlCQUF5Qix5QkFBeUIsY0FBYyxpREFBaUQseUJBQXlCLHlCQUF5QixjQUFjLGlEQUFpRCx5QkFBeUIsY0FBYywyRUFBMkUsMkNBQTJDLGlEQUFpRCx5QkFBeUIseUJBQXlCLGNBQWMsNkRBQTZELHlCQUF5Qix5QkFBeUIsZ0JBQWdCLDRCQUE0Qix5QkFBeUIsY0FBYyxrQ0FBa0MseUJBQXlCLHFGQUFxRix5QkFBeUIseUJBQXlCLGdCQUFnQixjQUFjLGtDQUFrQywrREFBK0QsNEJBQTRCLDZCQUE2QixxQkFBcUIsY0FBYyxvRUFBb0UseUJBQXlCLHFCQUFxQixjQUFjLDhDQUE4QywrREFBK0QscUZBQXFGLDZCQUE2QixxQkFBcUIsZ0JBQWdCLGNBQWMsd0NBQXdDLDZCQUE2QixxQkFBcUIsY0FBYyw0RkFBNEYseUJBQXlCLGNBQWMsNkdBQTZHLDZCQUE2QixxQkFBcUIsZ0JBQWdCLGNBQWMsbUJBQW1CLHlCQUF5Qix5QkFBeUIsV0FBVyx1REFBdUQseUJBQXlCLHlCQUF5QixXQUFXLHVEQUF1RCx5QkFBeUIsV0FBVyxpRkFBaUYsNENBQTRDLHVEQUF1RCx5QkFBeUIseUJBQXlCLFdBQVcsbUVBQW1FLHlCQUF5Qix5QkFBeUIsZ0JBQWdCLCtCQUErQixzQkFBc0IsY0FBYyxxQ0FBcUMseUJBQXlCLDJGQUEyRixzQkFBc0IseUJBQXlCLGdCQUFnQixjQUFjLHFDQUFxQyx5REFBeUQsK0JBQStCLDZCQUE2QixxQkFBcUIsY0FBYywwRUFBMEUseUJBQXlCLHFCQUFxQixXQUFXLGlEQUFpRCwrREFBK0QsMkZBQTJGLDZCQUE2QixxQkFBcUIsZ0JBQWdCLGNBQWMsMkNBQTJDLDZCQUE2QixrQkFBa0IsV0FBVyxrR0FBa0csc0JBQXNCLGNBQWMsbUhBQW1ILDZCQUE2QixrQkFBa0IsZ0JBQWdCLFdBQVcsZ0JBQWdCLHlCQUF5Qix5QkFBeUIsV0FBVyxpREFBaUQseUJBQXlCLHlCQUF5QixXQUFXLGlEQUFpRCx5QkFBeUIsV0FBVywyRUFBMkUsNkNBQTZDLGlEQUFpRCx5QkFBeUIseUJBQXlCLFdBQVcsNkRBQTZELHlCQUF5Qix5QkFBeUIsZ0JBQWdCLDRCQUE0QixzQkFBc0IsY0FBYyxrQ0FBa0MseUJBQXlCLHFGQUFxRixzQkFBc0IseUJBQXlCLGdCQUFnQixjQUFjLGtDQUFrQyx5REFBeUQsNEJBQTRCLDZCQUE2QixxQkFBcUIsY0FBYyxvRUFBb0UseUJBQXlCLHFCQUFxQixXQUFXLDhDQUE4QywrREFBK0QscUZBQXFGLDZCQUE2QixxQkFBcUIsZ0JBQWdCLGNBQWMsd0NBQXdDLDZCQUE2QixrQkFBa0IsV0FBVyw0RkFBNEYsc0JBQXNCLGNBQWMsNkdBQTZHLDZCQUE2QixrQkFBa0IsZ0JBQWdCLFdBQVcsZ0JBQWdCLHlCQUF5Qix5QkFBeUIsV0FBVyxpREFBaUQseUJBQXlCLHlCQUF5QixXQUFXLGlEQUFpRCx5QkFBeUIsV0FBVywyRUFBMkUsNkNBQTZDLGlEQUFpRCx5QkFBeUIseUJBQXlCLFdBQVcsNkRBQTZELHlCQUF5Qix5QkFBeUIsZ0JBQWdCLDRCQUE0QixzQkFBc0IsY0FBYyxrQ0FBa0MseUJBQXlCLHFGQUFxRixzQkFBc0IseUJBQXlCLGdCQUFnQixjQUFjLGtDQUFrQyx5REFBeUQsNEJBQTRCLDZCQUE2QixxQkFBcUIsY0FBYyxvRUFBb0UseUJBQXlCLHFCQUFxQixXQUFXLDhDQUE4QywrREFBK0QscUZBQXFGLDZCQUE2QixxQkFBcUIsZ0JBQWdCLGNBQWMsd0NBQXdDLDZCQUE2QixrQkFBa0IsV0FBVyw0RkFBNEYsc0JBQXNCLGNBQWMsNkdBQTZHLDZCQUE2QixrQkFBa0IsZ0JBQWdCLFdBQVcsbUJBQW1CLHlCQUF5Qix5QkFBeUIsV0FBVyx1REFBdUQseUJBQXlCLHlCQUF5QixXQUFXLHVEQUF1RCx5QkFBeUIsV0FBVyxpRkFBaUYsNENBQTRDLHVEQUF1RCx5QkFBeUIseUJBQXlCLFdBQVcsbUVBQW1FLHlCQUF5Qix5QkFBeUIsZ0JBQWdCLCtCQUErQixzQkFBc0IsY0FBYyxxQ0FBcUMseUJBQXlCLDJGQUEyRixzQkFBc0IseUJBQXlCLGdCQUFnQixjQUFjLHFDQUFxQyx5REFBeUQsK0JBQStCLDZCQUE2QixxQkFBcUIsY0FBYywwRUFBMEUseUJBQXlCLHFCQUFxQixXQUFXLGlEQUFpRCwrREFBK0QsMkZBQTJGLDZCQUE2QixxQkFBcUIsZ0JBQWdCLGNBQWMsMkNBQTJDLDZCQUE2QixrQkFBa0IsV0FBVyxrR0FBa0csc0JBQXNCLGNBQWMsbUhBQW1ILDZCQUE2QixrQkFBa0IsZ0JBQWdCLFdBQVcsbUJBQW1CLHlCQUF5Qix5QkFBeUIscUJBQXFCLHVEQUF1RCx5QkFBeUIseUJBQXlCLHFCQUFxQix1REFBdUQseUJBQXlCLHFCQUFxQixpRkFBaUYsNkNBQTZDLHVEQUF1RCx5QkFBeUIseUJBQXlCLHFCQUFxQixtRUFBbUUseUJBQXlCLHlCQUF5QixnQkFBZ0IsK0JBQStCLGdDQUFnQyxjQUFjLHFDQUFxQyxnQ0FBZ0MsMkZBQTJGLGdDQUFnQyx5QkFBeUIsZ0JBQWdCLGNBQWMscUNBQXFDLDZFQUE2RSwrQkFBK0IsNkJBQTZCLHFCQUFxQixjQUFjLDBFQUEwRSx5QkFBeUIscUJBQXFCLHFCQUFxQixpREFBaUQsK0RBQStELDJGQUEyRiw2QkFBNkIscUJBQXFCLGdCQUFnQixjQUFjLDJDQUEyQyw2QkFBNkIsNEJBQTRCLHFCQUFxQixrR0FBa0csZ0NBQWdDLGNBQWMsbUhBQW1ILDZCQUE2Qiw0QkFBNEIsZ0JBQWdCLHFCQUFxQixrQkFBa0IseUJBQXlCLHlCQUF5QixXQUFXLHFEQUFxRCx5QkFBeUIseUJBQXlCLFdBQVcscURBQXFELHlCQUF5QixXQUFXLCtFQUErRSw0Q0FBNEMscURBQXFELHlCQUF5Qix5QkFBeUIsV0FBVyxpRUFBaUUseUJBQXlCLHlCQUF5QixnQkFBZ0IsOEJBQThCLHNCQUFzQixjQUFjLG9DQUFvQyx5QkFBeUIseUZBQXlGLHNCQUFzQix5QkFBeUIsZ0JBQWdCLGNBQWMsb0NBQW9DLHlEQUF5RCw4QkFBOEIsNkJBQTZCLHFCQUFxQixjQUFjLHdFQUF3RSx5QkFBeUIscUJBQXFCLFdBQVcsZ0RBQWdELCtEQUErRCx5RkFBeUYsNkJBQTZCLHFCQUFxQixnQkFBZ0IsY0FBYywwQ0FBMEMsNkJBQTZCLGtCQUFrQixXQUFXLGdHQUFnRyxzQkFBc0IsY0FBYyxpSEFBaUgsNkJBQTZCLGtCQUFrQixnQkFBZ0IsV0FBVyxpQkFBaUIsa0JBQWtCLGlCQUFpQixrQkFBa0IsZUFBZSxrQkFBa0Isa0JBQWtCLGlCQUFpQixpQkFBaUIsNkNBQTZDLHNCQUFzQixxQkFBcUIsZ0JBQWdCLFdBQVcscUJBQXFCLGFBQWEsV0FBVyxtQkFBbUIsNEJBQTRCLG9CQUFvQiwwQkFBMEIsa0JBQWtCLDJCQUEyQiwwQkFBMEIsNEJBQTRCLGtCQUFrQix5QkFBeUIscUJBQXFCLGNBQWMsZ0JBQWdCLG9CQUFvQixtQkFBbUIsdUJBQXVCLGlCQUFpQixrQkFBa0IsU0FBUyxtQkFBbUIsYUFBYSxlQUFlLDJCQUEyQixpQkFBaUIsb0JBQW9CLHFEQUFxRCxtQkFBbUIsb0JBQW9CLHFCQUFxQiwwQkFBMEIsbUJBQW1CLDBFQUEwRSxrQkFBa0IsaUJBQWlCLDBFQUEwRSxrQkFBa0IsMEVBQTBFLGlCQUFpQiw4Q0FBOEMsNEJBQTRCLHlCQUF5Qiw2Q0FBNkMsNkJBQTZCLDBCQUEwQixrQkFBa0IsdUNBQXVDLGVBQWUseUVBQXlFLFVBQVUsMExBQTBMLFVBQVUsd05BQXdOLFVBQVUsd0NBQXdDLFlBQVkscUJBQXFCLHVCQUF1QixrQkFBa0IseUJBQXlCLFdBQVcsY0FBYyxrQkFBa0IscUNBQXFDLFdBQVcsZ0JBQWdCLFlBQVksb0JBQW9CLGlCQUFpQixrQkFBa0IsZUFBZSxZQUFZLHFDQUFxQyx5QkFBeUIsaUJBQWlCLFlBQVkscUNBQXFDLHFCQUFxQixpQkFBaUIsWUFBWSxxQ0FBcUMsV0FBVyxpQkFBaUIsY0FBYyxxQ0FBcUMsV0FBVyxpQkFBaUIsY0FBYyxlQUFlLGlCQUFpQixzTkFBc04sa0JBQWtCLHdFQUF3RSxjQUFjLGdCQUFnQixrQkFBa0IsWUFBWSxjQUFjLG1CQUFtQiw4QkFBOEIsZUFBZSxZQUFZLGlCQUFpQixzQkFBc0IsOEJBQThCLG9CQUFvQixZQUFZLGdCQUFnQixzQkFBc0IsOEJBQThCLG9CQUFvQixZQUFZLGlCQUFpQixtQkFBbUIsWUFBWSxrQkFBa0Isc0JBQXNCLFlBQVksY0FBYyxrQkFBa0Isb0JBQW9CLHlCQUF5Qiw4QkFBOEIscUJBQXFCLFlBQVksNEJBQTRCLGdCQUFnQixlQUFlLHdCQUF3Qix3QkFBd0IsdUNBQXVDLDRCQUE0Qix1Q0FBdUMsNEJBQTRCLHVDQUF1Qyw0QkFBNEIsdUNBQXVDLDRCQUE0QixZQUFZLHdCQUF3QixnQkFBZ0IsZUFBZSxlQUFlLHVCQUF1QixnQkFBZ0Isa0JBQWtCLHVCQUF1QixZQUFZLGdCQUFnQixnQkFBZ0IsZ0JBQWdCLGlCQUFpQixrQkFBa0Isa0NBQWtDLGVBQWUsaUNBQWlDLGtCQUFrQixvQkFBb0IscUJBQXFCLDJCQUEyQixrQkFBa0IsYUFBYSxpQ0FBaUMsZ0JBQWdCLHFCQUFxQixnQkFBZ0IsaUJBQWlCLDBCQUEwQixjQUFjLGVBQWUsV0FBVyxvQ0FBb0MseUJBQXlCLHFCQUFxQixtQkFBbUIsbUJBQW1CLGtCQUFrQixjQUFjLGdCQUFnQixnREFBZ0QscUJBQXFCLGNBQWMsZ0RBQWdELHFCQUFxQixjQUFjLDRFQUE0RSxzQkFBc0Isa0JBQWtCLGlCQUFpQixtQkFBbUIsa0JBQWtCLGtCQUFrQixpQkFBaUIsaUJBQWlCLHNCQUFzQixxQkFBcUIsY0FBYyw2Q0FBNkMsZUFBZSxXQUFXLHFEQUFxRCx3QkFBd0IsdUVBQXVFLHdCQUF3QixtREFBbUQsd0JBQXdCLDZEQUE2RCx3QkFBd0Isb0VBQW9FLHFCQUFxQix3SUFBd0kscUJBQXFCLDZDQUE2Qyw0RkFBNEYseUJBQXlCLHFCQUFxQixnQkFBZ0IsY0FBYyxvS0FBb0ssMkJBQTJCLHdNQUF3TSwyQkFBMkIsZ0tBQWdLLDJCQUEyQixvTEFBb0wsMkJBQTJCLHFDQUFxQyxnQkFBZ0IsbUNBQW1DLGtCQUFrQixnTkFBZ04sOENBQThDLG1DQUFtQyxxQkFBcUIsZ05BQWdOLDJDQUEyQyxtQ0FBbUMscUJBQXFCLGdOQUFnTiw4Q0FBOEMsaUNBQWlDLHFCQUFxQix3TUFBd00sMkNBQTJDLHVDQUF1QyxxQkFBcUIsZ09BQWdPLDRDQUE0QyxpQ0FBaUMscUJBQXFCLHdNQUF3TSw2Q0FBNkMsaUNBQWlDLHFCQUFxQix3TUFBd00sNkNBQTZDLHVDQUF1QyxxQkFBcUIsZ09BQWdPLDRDQUE0Qyx1Q0FBdUMscUJBQXFCLGdPQUFnTyw2Q0FBNkMscUNBQXFDLHFCQUFxQix3TkFBd04sNENBQTRDLG1DQUFtQyxrQkFBa0IsaUJBQWlCLHFDQUFxQyxrQkFBa0IsbUNBQW1DLGlCQUFpQiwyQ0FBMkMsY0FBYyxXQUFXLHFDQUFxQyxlQUFlLFdBQVcsa0JBQWtCLHVCQUF1QixpQkFBaUIsa0JBQWtCLGlCQUFpQiw2QkFBNkIseUJBQXlCLGdCQUFnQixlQUFlLGdCQUFnQixVQUFVLGNBQWMsZUFBZSxlQUFlLGVBQWUsZ0JBQWdCLHNCQUFzQixpQkFBaUIsaUJBQWlCLGdCQUFnQixlQUFlLHlCQUF5QixZQUFZLGlCQUFpQixlQUFlLHFCQUFxQixpQkFBaUIsa0JBQWtCLDZCQUE2QixlQUFlLDZCQUE2QixjQUFjLDRGQUE0RixjQUFjLG1CQUFtQixjQUFjLGlCQUFpQixRQUFRLHFCQUFxQixlQUFlLGtCQUFrQixtQkFBbUIsMEJBQTBCLGNBQWMsa0RBQWtELHFCQUFxQixjQUFjLFVBQVUsMEJBQTBCLHVCQUF1QixpQkFBaUIsZUFBZSxzQkFBc0IscUJBQXFCLGNBQWMsZUFBZSxjQUFjLGNBQWMsZUFBZSxVQUFVLGlDQUFpQyx3QkFBd0IsMENBQTBDLHdCQUF3QixnQ0FBZ0Msd0JBQXdCLHFDQUFxQyx3QkFBd0IsK0NBQStDLHFCQUFxQiw4RkFBOEYscUJBQXFCLDZDQUE2QywyREFBMkQseUJBQXlCLHFCQUFxQixnQkFBZ0IsY0FBYywrRkFBK0YsMkJBQTJCLGlIQUFpSCwyQkFBMkIsNkZBQTZGLDJCQUEyQix1R0FBdUcsMkJBQTJCLDJCQUEyQixhQUFhLHVFQUF1RSxxQkFBcUIsK0JBQStCLG9CQUFvQix5QkFBeUIsWUFBWSxVQUFVLGdDQUFnQyxpQkFBaUIsd0RBQXdELHFCQUFxQixvQ0FBb0Msa0JBQWtCLHdCQUF3QixrQkFBa0IsaUVBQWlFLHFCQUFxQixrSUFBa0ksOENBQThDLG9DQUFvQyxxQkFBcUIsd0JBQXdCLHFCQUFxQixpRUFBaUUsa0JBQWtCLGtJQUFrSSwyQ0FBMkMsb0NBQW9DLHFCQUFxQix3QkFBd0IscUJBQXFCLGlFQUFpRSxxQkFBcUIsa0lBQWtJLDhDQUE4QyxtQ0FBbUMscUJBQXFCLHVCQUF1QixxQkFBcUIsK0RBQStELHFCQUFxQiw4SEFBOEgsMkNBQTJDLHNDQUFzQyxxQkFBcUIsMEJBQTBCLHFCQUFxQixxRUFBcUUscUJBQXFCLDBJQUEwSSw0Q0FBNEMsbUNBQW1DLHFCQUFxQix1QkFBdUIscUJBQXFCLCtEQUErRCxxQkFBcUIsOEhBQThILDZDQUE2QyxtQ0FBbUMscUJBQXFCLHVCQUF1QixxQkFBcUIsK0RBQStELHFCQUFxQiw4SEFBOEgsNkNBQTZDLHNDQUFzQyxxQkFBcUIsMEJBQTBCLHFCQUFxQixxRUFBcUUscUJBQXFCLDBJQUEwSSw0Q0FBNEMsc0NBQXNDLHFCQUFxQiwwQkFBMEIscUJBQXFCLHFFQUFxRSxxQkFBcUIsMElBQTBJLDZDQUE2QyxxQ0FBcUMscUJBQXFCLHlCQUF5QixxQkFBcUIsbUVBQW1FLHFCQUFxQixzSUFBc0ksNENBQTRDLGlCQUFpQixrQkFBa0IsaUJBQWlCLGtCQUFrQixrQkFBa0IsaUJBQWlCLGlCQUFpQiwyQkFBMkIscUJBQXFCLHFCQUFxQixXQUFXLDRCQUE0QixXQUFXLDBCQUEwQixhQUFhLGtCQUFrQixhQUFhLFdBQVcsdUJBQXVCLGVBQWUsa0NBQWtDLGlCQUFpQixtQ0FBbUMsa0JBQWtCLGtDQUFrQyxpQkFBaUIsTUFBTSxvQkFBb0IsYUFBYSwyQkFBMkIsa0JBQWtCLHlCQUF5QixzQkFBc0IseUJBQXlCLGNBQWMsbUVBQW1FLHlCQUF5Qix5QkFBeUIsY0FBYyxtRUFBbUUseUJBQXlCLDBDQUEwQyxjQUFjLG1FQUFtRSx5QkFBeUIseUJBQXlCLGNBQWMseUJBQXlCLHlCQUF5Qix5QkFBeUIsV0FBVyxtRUFBbUUseUJBQXlCLHlCQUF5QixXQUFXLG1FQUFtRSx5QkFBeUIsdUNBQXVDLFdBQVcsbUVBQW1FLHNCQUFzQix5QkFBeUIsV0FBVyx5QkFBeUIseUJBQXlCLHlCQUF5QixjQUFjLG1FQUFtRSxzQkFBc0IseUJBQXlCLGNBQWMsbUVBQW1FLHlCQUF5QiwwQ0FBMEMsY0FBYyxtRUFBbUUseUJBQXlCLHlCQUF5QixjQUFjLHdCQUF3Qix5QkFBeUIseUJBQXlCLGNBQWMsaUVBQWlFLHlCQUF5Qix5QkFBeUIsY0FBYyxpRUFBaUUseUJBQXlCLHVDQUF1QyxjQUFjLGlFQUFpRSx5QkFBeUIseUJBQXlCLGNBQWMsMkJBQTJCLHlCQUF5Qix5QkFBeUIsV0FBVyx1RUFBdUUseUJBQXlCLHlCQUF5QixXQUFXLHVFQUF1RSx5QkFBeUIsd0NBQXdDLFdBQVcsdUVBQXVFLHlCQUF5Qix5QkFBeUIsV0FBVyx3QkFBd0IseUJBQXlCLHlCQUF5QixXQUFXLGlFQUFpRSx5QkFBeUIseUJBQXlCLFdBQVcsaUVBQWlFLHlCQUF5Qix5Q0FBeUMsV0FBVyxpRUFBaUUseUJBQXlCLHlCQUF5QixXQUFXLHdCQUF3Qix5QkFBeUIseUJBQXlCLFdBQVcsaUVBQWlFLHlCQUF5Qix5QkFBeUIsV0FBVyxpRUFBaUUseUJBQXlCLHlDQUF5QyxXQUFXLGlFQUFpRSx5QkFBeUIseUJBQXlCLFdBQVcsMkJBQTJCLHlCQUF5Qix5QkFBeUIsV0FBVyx1RUFBdUUseUJBQXlCLHlCQUF5QixXQUFXLHVFQUF1RSx5QkFBeUIsd0NBQXdDLFdBQVcsdUVBQXVFLHlCQUF5Qix5QkFBeUIsV0FBVywyQkFBMkIseUJBQXlCLHlCQUF5QixxQkFBcUIsdUVBQXVFLHlCQUF5Qix5QkFBeUIscUJBQXFCLHVFQUF1RSx5QkFBeUIseUNBQXlDLHFCQUFxQix1RUFBdUUseUJBQXlCLHlCQUF5QixxQkFBcUIsMEJBQTBCLHlCQUF5Qix5QkFBeUIsV0FBVyxxRUFBcUUseUJBQXlCLHlCQUF5QixXQUFXLHFFQUFxRSx5QkFBeUIsd0NBQXdDLFdBQVcscUVBQXFFLHlCQUF5Qix5QkFBeUIsV0FBVyxlQUFlLGlCQUFpQixnQkFBZ0Isa0JBQWtCLCtCQUErQixlQUFlLGVBQWUsaUJBQWlCLDhCQUE4QixlQUFlLHlCQUF5Qiw2QkFBNkIsMEJBQTBCLDBCQUEwQiw0QkFBNEIseUJBQXlCLGtDQUFrQyxrQkFBa0IsbUNBQW1DLGFBQWEsMkJBQTJCLHNCQUFzQix5QkFBeUIsc0JBQXNCLFlBQVksZ0JBQWdCLDBCQUEwQix1QkFBdUIsMEJBQTBCLGFBQWEsWUFBWSw4QkFBOEIsZUFBZSx1Q0FBdUMsZUFBZSx3Q0FBd0MsZUFBZSx1Q0FBdUMsZUFBZSxrQ0FBa0MsMEJBQTBCLG1DQUFtQywwQkFBMEIsdUJBQXVCLGtCQUFrQix1QkFBdUIsK0JBQStCLFdBQVcsOEJBQThCLFlBQVksZUFBZSxlQUFlLHlCQUF5Qix5QkFBeUIsMEJBQTBCLDBCQUEwQiwwQkFBMEIsMkJBQTJCLFNBQVMsWUFBWSxvQkFBb0IsYUFBYSxlQUFlLDJCQUEyQixnQkFBZ0Isa0JBQWtCLDRCQUE0QixzQkFBc0IsY0FBYyw2QkFBNkIscUJBQXFCLDZCQUE2Qix5QkFBeUIsY0FBYyw4QkFBOEIscUJBQXFCLFlBQVksWUFBWSxPQUFPLFVBQVUsVUFBVSxrQkFBa0IsTUFBTSxXQUFXLHFCQUFxQixxQkFBcUIsa0JBQWtCLGNBQWMsaUJBQWlCLGtCQUFrQixtQkFBbUIsVUFBVSx5QkFBeUIsY0FBYyxXQUFXLHFCQUFxQixtQkFBbUIsMkJBQTJCLGNBQWMsZUFBZSxnQkFBZ0IsZ0JBQWdCLHVCQUF1QixXQUFXLG1CQUFtQixhQUFhLFdBQVcsdUJBQXVCLGtCQUFrQixVQUFVLGVBQWUsZUFBZSxPQUFPLGNBQWMsY0FBYyxlQUFlLGdCQUFnQix3QkFBd0IsbUJBQW1CLGdCQUFnQixpQkFBaUIsaUJBQWlCLGtCQUFrQixnQkFBZ0IsaUJBQWlCLE1BQU0sY0FBYyxpQkFBaUIsa0JBQWtCLGVBQWUsV0FBVyxlQUFlLGNBQWMsZUFBZSxjQUFjLGNBQWMsY0FBYyxpQkFBaUIsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGlCQUFpQixjQUFjLGlCQUFpQixjQUFjLGdCQUFnQixjQUFjLHdCQUF3QixxQkFBcUIsa0JBQWtCLGFBQWEsMkJBQTJCLDRDQUE0QyxrQkFBa0Isd05BQXdOLGdCQUFnQixzTUFBc00sNkJBQTZCLDBCQUEwQixtTUFBbU0sNEJBQTRCLHlCQUF5QixpWEFBaVgsVUFBVSxrdUJBQWt1QixVQUFVLDB5QkFBMHlCLFVBQVUsdUNBQXVDLFlBQVksc0NBQXNDLHVCQUF1QixtQ0FBbUMseUJBQXlCLGdEQUFnRCxZQUFZLGNBQWMsa0JBQWtCLGFBQWEsMkJBQTJCLDJCQUEyQixjQUFjLDRDQUE0QyxnQkFBZ0Isb0JBQW9CLHVDQUF1QyxZQUFZLGNBQWMsc0NBQXNDLHVCQUF1QixtQ0FBbUMseUJBQXlCLHVDQUF1QyxlQUFlLDRIQUE0SCxxQkFBcUIsa0RBQWtELHNCQUFzQix3REFBd0QsZ0JBQWdCLDBDQUEwQyxxQkFBcUIsY0FBYyxvQkFBb0Isa0JBQWtCLG9DQUFvQyxhQUFhLHFCQUFxQiwwQ0FBMEMsYUFBYSxhQUFhLFlBQVksY0FBYyxvQkFBb0IsaUJBQWlCLHNCQUFzQixpQkFBaUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLGtCQUFrQixtQkFBbUIsc0JBQXNCLGlCQUFpQixvQkFBb0IsMEJBQTBCLGdCQUFnQiwwQ0FBMEMsWUFBWSxhQUFhLGFBQWEsWUFBWSxjQUFjLG1CQUFtQixnQkFBZ0IsbUJBQW1CLGNBQWMsbUNBQW1DLFlBQVksb0NBQW9DLHFCQUFxQixTQUFTLHNCQUFzQixXQUFXLGVBQWUsa0JBQWtCLGdCQUFnQixnTEFBZ0wsY0FBYyw0TEFBNEwsaUJBQWlCLGdNQUFnTSxrQkFBa0IsNExBQTRMLGlCQUFpQiw2REFBNkQsY0FBYyxjQUFjLG9CQUFvQixrQkFBa0IsTUFBTSxhQUFhLFVBQVUsc0VBQXNFLG9CQUFvQixzQ0FBc0MsT0FBTyx3RUFBd0UscUJBQXFCLHdDQUF3QyxRQUFRLDJCQUEyQiw0QkFBNEIsYUFBYSxXQUFXLFVBQVUsbUNBQW1DLGlCQUFpQixvQ0FBb0Msa0JBQWtCLG1DQUFtQyxpQkFBaUIsTUFBTSxtQkFBbUIsb0JBQW9CLHVCQUF1QixjQUFjLGFBQWEsZUFBZSxZQUFZLFdBQVcsZ0JBQWdCLFlBQVksV0FBVyxlQUFlLFlBQVksV0FBVyxPQUFPLGNBQWMsa0JBQWtCLFdBQVcsY0FBYyxZQUFZLFdBQVcsc0JBQXNCLHVCQUF1Qix3dEJBQXd0QixZQUFZLFdBQVcsZ0NBQWdDLGlCQUFpQixlQUFlLGdCQUFnQixlQUFlLGdCQUFnQixlQUFlLHFCQUFxQixlQUFlLGdCQUFnQixnQkFBZ0IsbUJBQW1CLGVBQWUsZ0JBQWdCLGVBQWUscUJBQXFCLGVBQWUsaUJBQWlCLGVBQWUsc0JBQXNCLGVBQWUsaUJBQWlCLGVBQWUsc0JBQXNCLGdCQUFnQixzQkFBc0IsZUFBZSxpQkFBaUIsZUFBZSxpQkFBaUIsZ0JBQWdCLFlBQVksV0FBVyxnQkFBZ0IsWUFBWSxXQUFXLGdCQUFnQixZQUFZLFdBQVcsZ0JBQWdCLFlBQVksV0FBVyxnQkFBZ0IsWUFBWSxXQUFXLGdCQUFnQixZQUFZLFdBQVcsa0JBQWtCLGFBQWEsWUFBWSxjQUFjLHlCQUF5QixrQkFBa0Isc0NBQXNDLGtCQUFrQixpREFBaUQsbUJBQW1CLDBCQUEwQixxQkFBcUIsbUJBQW1CLHFDQUFxQyxnQkFBZ0IsdUJBQXVCLGVBQWUsc0JBQXNCLGtCQUFrQixZQUFZLFVBQVUsb0VBQW9FLG1CQUFtQix1QkFBdUIsc0JBQXNCLGNBQWMsdUJBQXVCLHlCQUF5QixXQUFXLHVCQUF1Qix5QkFBeUIsY0FBYyxzQkFBc0IseUJBQXlCLGNBQWMseUJBQXlCLHlCQUF5QixXQUFXLHNCQUFzQix5QkFBeUIsV0FBVyxzQkFBc0IseUJBQXlCLFdBQVcseUJBQXlCLHlCQUF5QixXQUFXLHlCQUF5Qix5QkFBeUIscUJBQXFCLHdCQUF3Qix5QkFBeUIsV0FBVyxVQUFVLHFCQUFxQix3QkFBd0IsWUFBWSx1QkFBdUIsY0FBYyxZQUFZLGdCQUFnQixVQUFVLFdBQVcsZ0NBQWdDLHlCQUF5QixrQ0FBa0MseUJBQXlCLDZCQUE2Qix5QkFBeUIsb0JBQW9CLHlCQUF5QixZQUFZLHdCQUF3QixnQ0FBZ0Msd0JBQXdCLDJDQUEyQyxtQ0FBbUMseUNBQXlDLGlDQUFpQyx5Q0FBeUMsaUNBQWlDLHlCQUF5QixtRUFBbUUsNkJBQTZCLDRCQUE0QiwwQkFBMEIsOENBQThDLDZCQUE2QiwyQ0FBMkMsNkJBQTZCLDJDQUEyQyxzQkFBc0Isc0NBQXNDLHNCQUFzQiw2QkFBNkIsc0JBQXNCLGlDQUFpQyxnRUFBZ0UsMkNBQTJDLHlCQUF5QixzQ0FBc0MseUJBQXlCLDZCQUE2Qix5QkFBeUIsaUNBQWlDLG1FQUFtRSwyQ0FBMkMseUJBQXlCLHNDQUFzQyx5QkFBeUIsNkJBQTZCLHlCQUF5QixpQ0FBaUMsbUVBQW1FLDBDQUEwQyx5QkFBeUIscUNBQXFDLHlCQUF5Qiw0QkFBNEIseUJBQXlCLGdDQUFnQyxtRUFBbUUsNkNBQTZDLHlCQUF5Qix3Q0FBd0MseUJBQXlCLCtCQUErQix5QkFBeUIsbUNBQW1DLG1FQUFtRSwwQ0FBMEMseUJBQXlCLHFDQUFxQyx5QkFBeUIsNEJBQTRCLHlCQUF5QixnQ0FBZ0MsbUVBQW1FLDBDQUEwQyx5QkFBeUIscUNBQXFDLHlCQUF5Qiw0QkFBNEIseUJBQXlCLGdDQUFnQyxtRUFBbUUsNkNBQTZDLHlCQUF5Qix3Q0FBd0MseUJBQXlCLCtCQUErQix5QkFBeUIsbUNBQW1DLG1FQUFtRSw2Q0FBNkMseUJBQXlCLHdDQUF3Qyx5QkFBeUIsK0JBQStCLHlCQUF5QixtQ0FBbUMsbUVBQW1FLDRDQUE0Qyx5QkFBeUIsdUNBQXVDLHlCQUF5Qiw4QkFBOEIseUJBQXlCLGtDQUFrQyxtRUFBbUUsbUJBQW1CLGNBQWMsb0JBQW9CLGVBQWUsbUJBQW1CLGNBQWMscUNBQXFDLEtBQUssMkJBQTJCLEdBQUcsNkJBQTZCLDZCQUE2QixLQUFLLDJCQUEyQixHQUFHLDZCQUE2QixPQUFPLHNCQUFzQixjQUFjLG9CQUFvQix5QkFBeUIscUJBQXFCLG1CQUFtQixtQkFBbUIsc0NBQXNDLHNCQUFzQixrQkFBa0IsY0FBYyxzQ0FBc0MseUJBQXlCLHFCQUFxQixXQUFXLHNDQUFzQyx5QkFBeUIscUJBQXFCLGNBQWMsb0NBQW9DLHlCQUF5QixxQkFBcUIsY0FBYywwQ0FBMEMseUJBQXlCLHFCQUFxQixXQUFXLG9DQUFvQyx5QkFBeUIscUJBQXFCLFdBQVcsb0NBQW9DLHlCQUF5QixxQkFBcUIsV0FBVywwQ0FBMEMseUJBQXlCLHFCQUFxQixXQUFXLDBDQUEwQyx5QkFBeUIscUJBQXFCLHFCQUFxQix3Q0FBd0MseUJBQXlCLHFCQUFxQixXQUFXLHdDQUF3QyxtQkFBbUIsU0FBUyw0Q0FBNEMseUJBQXlCLFdBQVcsMEdBQTBHLG1CQUFtQixVQUFVLGNBQWMsZ0JBQWdCLHNCQUFzQix5QkFBeUIsV0FBVyxxREFBcUQsbUJBQW1CLGtEQUFrRCxrQkFBa0IsbUJBQW1CLGFBQWEsNkJBQTZCLGdDQUFnQyxxQkFBcUIsY0FBYyxhQUFhLDZCQUE2QixnQ0FBZ0MscUJBQXFCLGNBQWMsYUFBYSw2QkFBNkIsNERBQTRELHNCQUFzQiw0Q0FBNEMsaUJBQWlCLHdFQUF3RSx3QkFBd0Isb0JBQW9CLFdBQVcscURBQXFELHlCQUF5QixnRUFBZ0UseUJBQXlCLGdGQUFnRix5QkFBeUIsd0NBQXdDLG1CQUFtQiw2REFBNkQseUJBQXlCLGlCQUFpQixpQ0FBaUMsY0FBYyxrQkFBa0IsZUFBZSxNQUFNLG1CQUFtQixhQUFhLGVBQWUsMkJBQTJCLFdBQVcsb0JBQW9CLDRCQUE0QixtQkFBbUIsaUJBQWlCLHFCQUFxQix1QkFBdUIsbUJBQW1CLHFEQUFxRCxlQUFlLHFEQUFxRCxrQkFBa0Isc0JBQXNCLGVBQWUsd0NBQXdDLDRCQUE0Qix5QkFBeUIsdUNBQXVDLDZCQUE2QiwwQkFBMEIsa0JBQWtCLHVCQUF1Qix1QkFBdUIsb0JBQW9CLG1CQUFtQixlQUFlLHlCQUF5QixzQ0FBc0Msa0JBQWtCLHFDQUFxQyxlQUFlLHNCQUFzQixlQUFlLHdDQUF3QyxjQUFjLDRCQUE0Qix5QkFBeUIsdUNBQXVDLDZCQUE2QiwwQkFBMEIsZUFBZSxtQkFBbUIseUJBQXlCLGtCQUFrQixjQUFjLG9CQUFvQixpQkFBaUIsV0FBVyx1QkFBdUIsZ0JBQWdCLG1CQUFtQixvQkFBb0IsbUJBQW1CLHVCQUF1QixtQkFBbUIsc0JBQXNCLHdCQUF3QixzQkFBc0IsY0FBYyx3QkFBd0IseUJBQXlCLFdBQVcsd0JBQXdCLHlCQUF5QixjQUFjLHVCQUF1Qix5QkFBeUIsY0FBYywwQkFBMEIseUJBQXlCLFdBQVcsdUJBQXVCLHlCQUF5QixXQUFXLHVCQUF1Qix5QkFBeUIsV0FBVywwQkFBMEIseUJBQXlCLFdBQVcsMEJBQTBCLHlCQUF5QixxQkFBcUIseUJBQXlCLHlCQUF5QixXQUFXLHlCQUF5QixpQkFBaUIseUJBQXlCLGVBQWUsd0JBQXdCLGtCQUFrQixrREFBa0Qsb0JBQW9CLHFCQUFxQixrREFBa0Qsb0JBQW9CLHFCQUFxQiw0Q0FBNEMsb0JBQW9CLHFCQUFxQix5QkFBeUIsZ0JBQWdCLFVBQVUsa0JBQWtCLFVBQVUsaUVBQWlFLDhCQUE4QixhQUFhLGNBQWMsU0FBUyxrQkFBa0IsUUFBUSxrRUFBa0UsMERBQTBELHVDQUF1QywrQkFBK0IsaUNBQWlDLFdBQVcsVUFBVSxnQ0FBZ0MsV0FBVyxVQUFVLDhEQUE4RCx5QkFBeUIsZ0NBQWdDLHlCQUF5QiwwQkFBMEIsdUJBQXVCLFlBQVksMEJBQTBCLGlCQUFpQixzQkFBc0Isa0RBQWtELG9CQUFvQix5QkFBeUIsZ0JBQWdCLHlCQUF5QixnQkFBZ0IsMkJBQTJCLHNCQUFzQixPQUFPLGNBQWMsZUFBZSxnQkFBZ0Isa0JBQWtCLGNBQWMsY0FBYyxvQkFBb0Isa0JBQWtCLG1CQUFtQixpQ0FBaUMsb0JBQW9CLFlBQVksZUFBZSxZQUFZLGlCQUFpQixZQUFZLGVBQWUsWUFBWSxpQkFBaUIsWUFBWSxrQkFBa0IsWUFBWSxlQUFlLFlBQVksaUJBQWlCLFVBQVUsY0FBYyxrQkFBa0IsZ0JBQWdCLGlCQUFpQixpQkFBaUIsY0FBYyxnQkFBZ0IsaUNBQWlDLG9CQUFvQixlQUFlLGVBQWUsZUFBZSxpQkFBaUIsZUFBZSxlQUFlLGVBQWUsaUJBQWlCLGVBQWUsa0JBQWtCLGVBQWUsZUFBZSxlQUFlLGlCQUFpQixTQUFTLGNBQWMsZUFBZSxtQkFBbUIsa0JBQWtCLHlCQUF5QixXQUFXLGdCQUFnQixlQUFlLGdCQUFnQixVQUFVLGVBQWUsY0FBYyxlQUFlLFFBQVEsbUJBQW1CLHlCQUF5Qix1QkFBdUIsb0JBQW9CLGtCQUFrQixXQUFXLHVCQUF1QixvQkFBb0IsZ0JBQWdCLHFCQUFxQixrQkFBa0IsbUJBQW1CLFlBQVksZUFBZSxtQkFBbUIsY0FBYyxtQkFBbUIsY0FBYyxhQUFhLHVCQUF1QixnQkFBZ0Isb0JBQW9CLGNBQWMsZUFBZSxtQkFBbUIsYUFBYSw2QkFBNkIsZUFBZSwyQkFBMkIsY0FBYyxlQUFlLG9CQUFvQiwwQkFBMEIsY0FBYyxvQkFBb0IsOEJBQThCLHVCQUF1QixhQUFhLGVBQWUsMkJBQTJCLDhCQUE4QixrQkFBa0IsNkJBQTZCLGlCQUFpQixzREFBc0QsdUJBQXVCLGdEQUFnRCx5QkFBeUIscUJBQXFCLGlCQUFpQixzQkFBc0Isa0JBQWtCLHFCQUFxQixpQkFBaUIsOENBQThDLG9CQUFvQiwrQ0FBK0Msb0JBQW9CLDRDQUE0QyxvQkFBb0IsaURBQWlELG9CQUFvQixNQUFNLHNCQUFzQixtRUFBbUUsY0FBYyxlQUFlLGtCQUFrQixhQUFhLDZCQUE2QixvQkFBb0IsdUNBQXVDLGFBQWEsbUJBQW1CLG1CQUFtQixjQUFjLGFBQWEsWUFBWSxnQkFBZ0IsZUFBZSwrQkFBK0IsdUJBQXVCLGtCQUFrQixtQkFBbUIsZUFBZSxhQUFhLHVCQUF1QixlQUFlLFlBQVksY0FBYyxrQkFBa0IsY0FBYyw2QkFBNkIsZUFBZSxhQUFhLDZCQUE2Qiw2QkFBNkIsb0JBQW9CLGFBQWEsa0JBQWtCLG1CQUFtQixhQUFhLGFBQWEsWUFBWSxjQUFjLHVCQUF1QixlQUFlLG1DQUFtQywrQkFBK0IsOEJBQThCLHFCQUFxQixVQUFVLG9CQUFvQixrQkFBa0IsbUJBQW1CLCtFQUErRSxjQUFjLGtDQUFrQyxVQUFVLFFBQVEsK0JBQStCLFlBQVksbUJBQW1CLG9CQUFvQixTQUFTLGVBQWUsYUFBYSxPQUFPLGdCQUFnQixnQkFBZ0Isa0JBQWtCLFNBQVMsV0FBVyxrQkFBa0Isc0JBQXNCLGtCQUFrQixtRUFBbUUscUJBQXFCLGtCQUFrQixlQUFlLGNBQWMsY0FBYyxrQkFBa0IsZ0JBQWdCLHFCQUFxQixrQkFBa0IscUNBQXFDLG1CQUFtQixnQkFBZ0IsbUJBQW1CLFdBQVcsaURBQWlELHlCQUF5QixjQUFjLHlEQUF5RCx5QkFBeUIsV0FBVyxrQkFBa0IseUJBQXlCLFlBQVksY0FBYyxXQUFXLGVBQWUsT0FBTyxtQkFBbUIsOEJBQThCLFlBQVksa0JBQWtCLFdBQVcscUJBQXFCLG1CQUFtQixpQkFBaUIsYUFBYSwyREFBMkQsYUFBYSwwQ0FBMEMsYUFBYSw4Q0FBOEMsZ0JBQWdCLG9CQUFvQiw2Q0FBNkMsWUFBWSwwQ0FBMEMsT0FBTyxhQUFhLG1DQUFtQyxhQUFhLFlBQVksbUJBQW1CLGFBQWEsZ0JBQWdCLFlBQVksY0FBYyx1QkFBdUIseUNBQXlDLGdCQUFnQixvQ0FBb0MsNkJBQTZCLHNCQUFzQix5QkFBeUIsZ0JBQWdCLFlBQVksY0FBYyx5RUFBeUUsWUFBWSwwQ0FBMEMsbUZBQW1GLHFCQUFxQixZQUFZLG1CQUFtQiwyQkFBMkIsb0NBQW9DLHlCQUF5QixtQkFBbUIsMENBQTBDLFlBQVksY0FBYyxhQUFhLG1CQUFtQix5QkFBeUIsMENBQTBDLGFBQWEsY0FBYyxNQUFNLHNCQUFzQixrQkFBa0IsbUVBQW1FLFdBQVcsY0FBYyxpQkFBaUIsa0JBQWtCLGNBQWMsdUJBQXVCLDJCQUEyQiw0QkFBNEIsc0JBQXNCLDJCQUEyQiw0QkFBNEIsNEJBQTRCLGdDQUFnQyxxQkFBcUIseUJBQXlCLFdBQVcsWUFBWSx5QkFBeUIsZUFBZSxPQUFPLHVCQUF1QixhQUFhLGdCQUFnQixpQ0FBaUMscUJBQXFCLGNBQWMsMENBQTBDLGFBQWEsbUJBQW1CLGdGQUFnRixvQkFBb0IscUJBQXFCLGtCQUFrQiw0QkFBNEIsaUJBQWlCLGNBQWMsMENBQTBDLGdCQUFnQixpQkFBaUIsdUJBQXVCLGtCQUFrQixtQkFBbUIseUJBQXlCLGdCQUFnQixZQUFZLGNBQWMsWUFBWSxrQkFBa0IsYUFBYSxpQkFBaUIsZUFBZSxnQkFBZ0IsWUFBWSxjQUFjLGdCQUFnQixvQ0FBb0MsZUFBZSxpQkFBaUIsTUFBTSxlQUFlLGVBQWUsaUJBQWlCLGdCQUFnQixrQkFBa0IsZUFBZSxpQkFBaUIsV0FBVyxpQkFBaUIsYUFBYSxrQkFBa0IsY0FBYyxjQUFjLG1CQUFtQixtQkFBbUIseUJBQXlCLGNBQWMsdUJBQXVCLHlCQUF5QixXQUFXLGlCQUFpQiw4QkFBOEIsYUFBYSxtQkFBbUIsWUFBWSxjQUFjLGdCQUFnQixvQkFBb0IseUJBQXlCLDhCQUE4QixlQUFlLDZCQUE2QixrQkFBa0IsU0FBUyx5QkFBeUIsa0JBQWtCLGVBQWUsZ0JBQWdCLG1CQUFtQixzREFBc0QsbUJBQW1CLDBCQUEwQixrQkFBa0IsaUJBQWlCLG1CQUFtQixrQkFBa0Isa0JBQWtCLGlCQUFpQixrQkFBa0Isc0JBQXNCLGtDQUFrQyxzQkFBc0IsY0FBYyxnQ0FBZ0Msa0JBQWtCLGNBQWMsa0JBQWtCLHlCQUF5QixrQ0FBa0MseUJBQXlCLFdBQVcsZ0NBQWdDLHFCQUFxQixjQUFjLGtCQUFrQix5QkFBeUIsa0NBQWtDLHlCQUF5QixjQUFjLGdDQUFnQyxxQkFBcUIsY0FBYyxpQkFBaUIseUJBQXlCLGlDQUFpQyx5QkFBeUIsY0FBYywrQkFBK0IscUJBQXFCLGNBQWMsb0JBQW9CLHlCQUF5QixvQ0FBb0MseUJBQXlCLFdBQVcsa0NBQWtDLHFCQUFxQixjQUFjLGlCQUFpQix5QkFBeUIsaUNBQWlDLHlCQUF5QixXQUFXLCtCQUErQixxQkFBcUIsY0FBYyxpQkFBaUIseUJBQXlCLGlDQUFpQyx5QkFBeUIsV0FBVywrQkFBK0IscUJBQXFCLGNBQWMsb0JBQW9CLHlCQUF5QixvQ0FBb0MseUJBQXlCLFdBQVcsa0NBQWtDLHFCQUFxQixjQUFjLG9CQUFvQix5QkFBeUIsb0NBQW9DLHlCQUF5QixxQkFBcUIsa0NBQWtDLHFCQUFxQixjQUFjLG1CQUFtQix5QkFBeUIsbUNBQW1DLHlCQUF5QixXQUFXLGlDQUFpQyxxQkFBcUIsY0FBYyxnQkFBZ0IsbUJBQW1CLHlCQUF5QiwwQkFBMEIsV0FBVyxhQUFhLGdCQUFnQiw4QkFBOEIsaUJBQWlCLGtCQUFrQixrQkFBa0Isd0JBQXdCLFlBQVksY0FBYyxrQkFBa0IsOEJBQThCLGVBQWUseUJBQXlCLDBCQUEwQixjQUFjLHFCQUFxQixrQkFBa0IsbUJBQW1CLHVCQUF1QixjQUFjLHFCQUFxQixxQ0FBcUMsc0JBQXNCLHVCQUF1Qiw2QkFBNkIsT0FBTyxtQkFBbUIsYUFBYSxzQkFBc0IsdUJBQXVCLGdCQUFnQixlQUFlLFdBQVcsaUJBQWlCLGFBQWEsa0JBQWtCLG9DQUFvQywyQkFBMkIsY0FBYywrQkFBK0IsY0FBYyxrQkFBa0IsV0FBVywwQ0FBMEMsMkJBQTJCLGNBQWMsOEJBQThCLGFBQWEsYUFBYSxlQUFlLFlBQVksZUFBZSxXQUFXLFNBQVMsV0FBVyxZQUFZLGFBQWEsc0JBQXNCLDhCQUE4QixnQkFBZ0IsdUJBQXVCLGtDQUFrQyxtQkFBbUIseUJBQXlCLGFBQWEsY0FBYywyQkFBMkIsYUFBYSxrQkFBa0IsaUJBQWlCLGdDQUFnQywyQkFBMkIsNEJBQTRCLGtCQUFrQixjQUFjLFlBQVksY0FBYyxpQkFBaUIsY0FBYyxpQkFBaUIsOEJBQThCLCtCQUErQiw2QkFBNkIsMENBQTBDLGtCQUFrQixpQkFBaUIsaUNBQWlDLHNCQUFzQixZQUFZLGNBQWMsY0FBYyxhQUFhLFFBQVEsc0JBQXNCLG1CQUFtQixrQkFBa0IsV0FBVyxpQkFBaUIsc0JBQXNCLGNBQWMsd0ZBQXdGLGNBQWMsa05BQWtOLHlCQUF5QixjQUFjLG1EQUFtRCxxQkFBcUIsZ0NBQWdDLGNBQWMscUNBQXFDLDRLQUE0SyxjQUFjLDRaQUE0Wix5QkFBeUIsY0FBYyxvR0FBb0cscUJBQXFCLGdJQUFnSSx5QkFBeUIsY0FBYywwREFBMEQsc0JBQXNCLGVBQWUsaUJBQWlCLHlCQUF5QixXQUFXLHdGQUF3RixXQUFXLGtOQUFrTixzQkFBc0IsV0FBVyxtREFBbUQsa0JBQWtCLGdDQUFnQyxXQUFXLHFDQUFxQyw0S0FBNEssV0FBVyw0WkFBNFosc0JBQXNCLFdBQVcsb0dBQW9HLGtCQUFrQixnSUFBZ0ksc0JBQXNCLFdBQVcsMERBQTBELHlCQUF5QixZQUFZLGlCQUFpQix5QkFBeUIsY0FBYyx3RkFBd0YsY0FBYyxrTkFBa04seUJBQXlCLGNBQWMsbURBQW1ELHFCQUFxQixnQ0FBZ0MsY0FBYyxxQ0FBcUMsNEtBQTRLLGNBQWMsNFpBQTRaLHlCQUF5QixjQUFjLG9HQUFvRyxxQkFBcUIsZ0lBQWdJLHlCQUF5QixjQUFjLDBEQUEwRCx5QkFBeUIsZUFBZSxnQkFBZ0IseUJBQXlCLGNBQWMsc0ZBQXNGLGNBQWMsOE1BQThNLHlCQUF5QixjQUFjLGtEQUFrRCxxQkFBcUIsK0JBQStCLGNBQWMscUNBQXFDLHdLQUF3SyxjQUFjLG9aQUFvWix5QkFBeUIsY0FBYyxrR0FBa0cscUJBQXFCLDhIQUE4SCx5QkFBeUIsY0FBYyx5REFBeUQseUJBQXlCLGVBQWUsbUJBQW1CLHlCQUF5QixXQUFXLDRGQUE0RixXQUFXLDBOQUEwTix5QkFBeUIsV0FBVyxxREFBcUQsa0JBQWtCLGtDQUFrQyxXQUFXLHFDQUFxQyxvTEFBb0wsV0FBVyw0YUFBNGEseUJBQXlCLFdBQVcsd0dBQXdHLGtCQUFrQixvSUFBb0kseUJBQXlCLFdBQVcsNERBQTRELHlCQUF5QixZQUFZLGdCQUFnQix5QkFBeUIsV0FBVyxzRkFBc0YsV0FBVyw4TUFBOE0seUJBQXlCLFdBQVcsa0RBQWtELGtCQUFrQiwrQkFBK0IsV0FBVyxxQ0FBcUMsd0tBQXdLLFdBQVcsb1pBQW9aLHlCQUF5QixXQUFXLGtHQUFrRyxrQkFBa0IsOEhBQThILHlCQUF5QixXQUFXLHlEQUF5RCx5QkFBeUIsWUFBWSxnQkFBZ0IseUJBQXlCLFdBQVcsc0ZBQXNGLFdBQVcsOE1BQThNLHlCQUF5QixXQUFXLGtEQUFrRCxrQkFBa0IsK0JBQStCLFdBQVcscUNBQXFDLHdLQUF3SyxXQUFXLG9aQUFvWix5QkFBeUIsV0FBVyxrR0FBa0csa0JBQWtCLDhIQUE4SCx5QkFBeUIsV0FBVyx5REFBeUQseUJBQXlCLFlBQVksbUJBQW1CLHlCQUF5QixXQUFXLDRGQUE0RixXQUFXLDBOQUEwTix5QkFBeUIsV0FBVyxxREFBcUQsa0JBQWtCLGtDQUFrQyxXQUFXLHFDQUFxQyxvTEFBb0wsV0FBVyw0YUFBNGEseUJBQXlCLFdBQVcsd0dBQXdHLGtCQUFrQixvSUFBb0kseUJBQXlCLFdBQVcsNERBQTRELHlCQUF5QixZQUFZLG1CQUFtQix5QkFBeUIscUJBQXFCLDRGQUE0RixxQkFBcUIsME5BQTBOLHlCQUF5QixxQkFBcUIscURBQXFELDRCQUE0QixrQ0FBa0MscUJBQXFCLHFDQUFxQyxvTEFBb0wscUJBQXFCLDRhQUE0YSx5QkFBeUIscUJBQXFCLHdHQUF3Ryw0QkFBNEIsb0lBQW9JLHlCQUF5QixxQkFBcUIsNERBQTRELHlCQUF5QixzQkFBc0Isa0JBQWtCLHlCQUF5QixXQUFXLDBGQUEwRixXQUFXLHNOQUFzTix5QkFBeUIsV0FBVyxvREFBb0Qsa0JBQWtCLGlDQUFpQyxXQUFXLHFDQUFxQyxnTEFBZ0wsV0FBVyxvYUFBb2EseUJBQXlCLFdBQVcsc0dBQXNHLGtCQUFrQixrSUFBa0kseUJBQXlCLFdBQVcsMkRBQTJELHlCQUF5QixZQUFZLG1CQUFtQixvQkFBb0IsYUFBYSxtQkFBbUIsV0FBVyxtQkFBbUIsNkJBQTZCLDZDQUE2QyxPQUFPLGVBQWUsUUFBUSxXQUFXLHdCQUF3QixTQUFTLG1DQUFtQyw4QkFBOEIscUJBQXFCLE1BQU0sb0RBQW9ELG9CQUFvQiwwREFBMEQsdUJBQXVCLDJCQUEyQixvQkFBb0IsYUFBYSxjQUFjLG1CQUFtQixrQ0FBa0MsNkJBQTZCLGFBQWEsaUNBQWlDLGdCQUFnQixnQkFBZ0Isa0JBQWtCLGVBQWUsY0FBYyxlQUFlLGNBQWMsZUFBZSxrQkFBa0IsY0FBYyxpQkFBaUIsb0JBQW9CLDhCQUE4QixjQUFjLFdBQVcscUJBQXFCLGtCQUFrQixnQ0FBZ0Msd0JBQXdCLHlCQUF5QiwrREFBK0QsdURBQXVELHlFQUF5RSxvQ0FBb0MsV0FBVyxpQ0FBaUMsb0JBQW9CLGlDQUFpQyxvQkFBb0IsaUNBQWlDLG9CQUFvQixxQkFBcUIsaUNBQWlDLDJDQUEyQyxnREFBZ0Qsd0NBQXdDLDJDQUEyQyxVQUFVLDJDQUEyQyxrREFBa0QsMENBQTBDLGFBQWEsYUFBYSwwQkFBMEIsY0FBYyxjQUFjLGdCQUFnQixxQkFBcUIsa0JBQWtCLDREQUE0RCxvQkFBb0IscUJBQXFCLDJCQUEyQixlQUFlLHNGQUFzRix5QkFBeUIsY0FBYyxhQUFhLGNBQWMsWUFBWSxjQUFjLGlCQUFpQixtQkFBbUIsMEJBQTBCLFVBQVUseUJBQXlCLFlBQVksY0FBYyxvQkFBb0Isb0NBQW9DLG1CQUFtQixpQ0FBaUMsMEJBQTBCLDZCQUE2Qiw0QkFBNEIsOEJBQThCLDZCQUE2Qiw0QkFBNEIsMEJBQTBCLHdCQUF3QixjQUFjLGlDQUFpQyxnQkFBZ0IsWUFBWSxjQUFjLGdDQUFnQyxvQkFBb0IsdUNBQXVDLHFCQUFxQixtQkFBbUIsY0FBYyxpQkFBaUIsa0JBQWtCLHFCQUFxQixrQkFBa0IsOEJBQThCLG9CQUFvQixxQkFBcUIsZ0JBQWdCLHlCQUF5QixZQUFZLGFBQWEsV0FBVyxlQUFlLHFDQUFxQyxtQkFBbUIsY0FBYyxxREFBcUQsbUJBQW1CLGFBQWEsb0JBQW9CLGFBQWEsYUFBYSxzQkFBc0Isd0NBQXdDLGdCQUFnQix1QkFBdUIsY0FBYyx5REFBeUQsT0FBTyxlQUFlLFFBQVEsV0FBVyw4QkFBOEIsU0FBUyx5Q0FBeUMsd0NBQXdDLDJCQUEyQixNQUFNLDBFQUEwRSxpQ0FBaUMsaUNBQWlDLGNBQWMsZ0VBQWdFLG9CQUFvQixzRUFBc0Usd0JBQXdCLHFDQUFxQywrQ0FBK0Msb0JBQW9CLGFBQWEsUUFBUSxtQkFBbUIsa0JBQWtCLGtCQUFrQiw4REFBOEQsbUJBQW1CLCtEQUErRCxrQkFBa0Isa0xBQWtMLHVDQUF1Qyx5SkFBeUosdUNBQXVDLDREQUE0RCx5QkFBeUIsY0FBYyxnRUFBZ0UseUJBQXlCLGNBQWMsZUFBZSxhQUFhLDBCQUEwQixtQkFBbUIsYUFBYSxhQUFhLGFBQWEsMEJBQTBCLG9CQUFvQixpREFBaUQseURBQXlELGlEQUFpRCw4Q0FBOEMsZ0NBQWdDLDBCQUEwQixnQkFBZ0IsWUFBWSx3Q0FBd0MsU0FBUyx5RkFBeUYsY0FBYyx3T0FBd08sVUFBVSxvQkFBb0IsZ0NBQWdDLHdCQUF3QixhQUFhLFlBQVksY0FBYyxjQUFjLDJCQUEyQixrQkFBa0IsWUFBWSx5QkFBeUIsaUJBQWlCLGlCQUFpQixzQkFBc0IsOEJBQThCLCtCQUErQiw2QkFBNkIsdUNBQXVDLGFBQWEsa0JBQWtCLE9BQU8sZUFBZSxrQkFBa0IsU0FBUyxXQUFXLDhCQUE4QixxQkFBcUIsbUJBQW1CLCtCQUErQixtQkFBbUIscUNBQXFDLHlCQUF5QixjQUFjLHlDQUF5Qyx5QkFBeUIsY0FBYyw2REFBNkQsa0JBQWtCLGdCQUFnQixtRUFBbUUsY0FBYyxVQUFVLG9CQUFvQix3QkFBd0IsbUNBQW1DLDJCQUEyQix5QkFBeUIsOENBQThDLHNDQUFzQyx3REFBd0QsMEJBQTBCLFVBQVUsUUFBUSxnQkFBZ0IsY0FBYyxrRUFBa0Usb0JBQW9CLGdFQUFnRSxxQkFBcUIsNkRBQTZELE9BQU8sZUFBZSxRQUFRLFdBQVcsZ0NBQWdDLFNBQVMsMkNBQTJDLHdDQUF3Qyw2QkFBNkIsTUFBTSxvRUFBb0Usb0JBQW9CLDBFQUEwRSx1QkFBdUIsa0VBQWtFLG9CQUFvQix3RUFBd0UsdUJBQXVCLCtDQUErQyxjQUFjLHVFQUF1RSw2QkFBNkIsOEZBQThGLDBCQUEwQixnQ0FBZ0MsaUNBQWlDLFlBQVksZUFBZSxlQUFlLHFCQUFxQixpQkFBaUIsc0JBQXNCLGtCQUFrQixxQkFBcUIsaUJBQWlCLG9GQUFvRixpQkFBaUIsa0JBQWtCLHVCQUF1Qix3Q0FBd0MsdUJBQXVCLDZCQUE2QixtQkFBbUIsYUFBYSx1QkFBdUIsa0JBQWtCLDRFQUE0RSxjQUFjLGtCQUFrQixtQkFBbUIsdUJBQXVCLGNBQWMsa0JBQWtCLHVEQUF1RCxxQkFBcUIsY0FBYyxpQkFBaUIseUVBQXlFLHFCQUFxQixjQUFjLHlFQUF5RSxxQkFBcUIsNEVBQTRFLDZDQUE2QyxxRkFBcUYseUJBQXlCLHFCQUFxQixnQkFBZ0IsY0FBYyxXQUFXLHNDQUFzQyxtQkFBbUIsb0JBQW9CLG1CQUFtQiw0QkFBNEIseUJBQXlCLHFCQUFxQixXQUFXLHFCQUFxQixjQUFjLG9CQUFvQixpQkFBaUIsZUFBZSxvQ0FBb0MsWUFBWSxlQUFlLHNDQUFzQyxZQUFZLGNBQWMsb0JBQW9CLFlBQVksZUFBZSwwQ0FBMEMsaUJBQWlCLFlBQVksY0FBYywyQkFBMkIsUUFBUSxxQkFBcUIsUUFBUSxpQkFBaUIsUUFBUSxZQUFZLDhCQUE4Qiw2Q0FBNkMsUUFBUSx5Q0FBeUMsdUJBQXVCLFFBQVEseUNBQXlDLFFBQVEsMENBQTBDLFFBQVEsc0NBQXNDLFFBQVEsc0NBQXNDLHlCQUF5QixTQUFTLE9BQU8sZUFBZSx3QkFBd0IscUJBQXFCLHdDQUF3QyxnQ0FBZ0MsOEJBQThCLCtCQUErQiw0RUFBNEUsNkJBQTZCLGVBQWUseUJBQXlCLDBCQUEwQixjQUFjLGlCQUFpQixnQkFBZ0IsaUJBQWlCLG1CQUFtQixZQUFZLHFCQUFxQixhQUFhLGlCQUFpQix1QkFBdUIsY0FBYyxnQ0FBZ0MsbUJBQW1CLGFBQWEsd0JBQXdCLDRCQUE0QixjQUFjLGNBQWMsY0FBYyxvQkFBb0IsY0FBYyxhQUFhLG1CQUFtQixjQUFjLGFBQWEsMkJBQTJCLG1CQUFtQixrQ0FBa0MsbUJBQW1CLHNCQUFzQixZQUFZLGNBQWMsV0FBVyx3QkFBd0IsZUFBZSx1QkFBdUIsMEJBQTBCLGNBQWMsbUNBQW1DLGNBQWMsZ0NBQWdDLGVBQWUsNENBQTRDLHlCQUF5QixZQUFZLHFCQUFxQixlQUFlLFdBQVcsZ0JBQWdCLGtCQUFrQixtQkFBbUIsVUFBVSxjQUFjLG1CQUFtQixnQkFBZ0Isa0JBQWtCLG9CQUFvQixNQUFNLGlDQUFpQyxvQkFBb0IsYUFBYSxlQUFlLDhCQUE4QixnQkFBZ0IsZ0JBQWdCLG1CQUFtQixRQUFRLG1CQUFtQiw0QkFBNEIsMEJBQTBCLHdCQUF3QixjQUFjLGFBQWEsdUJBQXVCLG1CQUFtQixpQkFBaUIsbUJBQW1CLGNBQWMsNEJBQTRCLGNBQWMsU0FBUyxjQUFjLHFCQUFxQiw0QkFBNEIsY0FBYyxTQUFTLG1CQUFtQiw0QkFBNEIsMEJBQTBCLHdCQUF3QixhQUFhLFlBQVksY0FBYywyQkFBMkIsaUJBQWlCLG9CQUFvQixtQkFBbUIsVUFBVSx1QkFBdUIsbUJBQW1CLG9CQUFvQixrQkFBa0IseUJBQXlCLG1CQUFtQix3QkFBd0Isa0JBQWtCLHVCQUF1QixpQkFBaUIscUJBQXFCLHVCQUF1QixrQkFBa0IseUJBQXlCLGlCQUFpQiw2QkFBNkIsMEJBQTBCLHVCQUF1Qix5QkFBeUIsNEJBQTRCLDhCQUE4QixzQkFBc0IscUJBQXFCLDBDQUEwQyxzQkFBc0IsWUFBWSxjQUFjLGtCQUFrQixxQkFBcUIsbUJBQW1CLGlCQUFpQixnQkFBZ0Isa0JBQWtCLHdCQUF3Qix5QkFBeUIscUJBQXFCLFVBQVUsc0JBQXNCLGlCQUFpQixpQ0FBaUMsMEJBQTBCLGdDQUFnQywwQkFBMEIsK0JBQStCLHlCQUF5QixxQkFBcUIsV0FBVyxVQUFVLG1CQUFtQixtQkFBbUIsbURBQW1ELG1DQUFtQyxnQ0FBZ0Msb0JBQW9CLGtEQUFrRCxvQ0FBb0MsaUNBQWlDLHFCQUFxQixlQUFlLGlCQUFpQixnQkFBZ0Isa0JBQWtCLGVBQWUsaUJBQWlCLFFBQVEsY0FBYyxhQUFhLFlBQVksY0FBYyxlQUFlLHFDQUFxQyxVQUFVLG1DQUFtQyxVQUFVLFdBQVcsNkNBQTZDLFVBQVUsVUFBVSx5Q0FBeUMsVUFBVSxlQUFlLG1DQUFtQyxVQUFVLFVBQVUsd0NBQXdDLFVBQVUsZUFBZSwwQ0FBMEMsVUFBVSxVQUFVLHdDQUF3QyxVQUFVLFVBQVUseUNBQXlDLFVBQVUsVUFBVSwyQ0FBMkMsVUFBVSxVQUFVLDBDQUEwQyxVQUFVLFVBQVUsb0RBQW9ELGdCQUFnQixnREFBZ0QscUJBQXFCLDBDQUEwQyxnQkFBZ0IsK0NBQStDLHFCQUFxQixpREFBaUQsZ0JBQWdCLCtDQUErQyxnQkFBZ0IsZ0RBQWdELGdCQUFnQixrREFBa0QsZ0JBQWdCLGlEQUFpRCxnQkFBZ0IsZ0NBQWdDLFVBQVUsZUFBZSx1Q0FBdUMscUJBQXFCLGdDQUFnQyxVQUFVLGdCQUFnQix1Q0FBdUMsc0JBQXNCLGdDQUFnQyxVQUFVLFVBQVUsdUNBQXVDLGdCQUFnQixnQ0FBZ0MsVUFBVSxnQkFBZ0IsdUNBQXVDLHNCQUFzQixnQ0FBZ0MsVUFBVSxnQkFBZ0IsdUNBQXVDLHNCQUFzQixnQ0FBZ0MsVUFBVSxVQUFVLHVDQUF1QyxnQkFBZ0IsZ0NBQWdDLFVBQVUsZ0JBQWdCLHVDQUF1QyxzQkFBc0IsZ0NBQWdDLFVBQVUsZ0JBQWdCLHVDQUF1QyxzQkFBc0IsZ0NBQWdDLFVBQVUsVUFBVSx1Q0FBdUMsZ0JBQWdCLGlDQUFpQyxVQUFVLGdCQUFnQix3Q0FBd0Msc0JBQXNCLGlDQUFpQyxVQUFVLGdCQUFnQix3Q0FBd0Msc0JBQXNCLGlDQUFpQyxVQUFVLFdBQVcsd0NBQXdDLGlCQUFpQixvQ0FBb0MseUJBQXlCLFVBQVUsdUJBQXVCLFVBQVUsV0FBVyxpQ0FBaUMsVUFBVSxVQUFVLDZCQUE2QixVQUFVLGVBQWUsdUJBQXVCLFVBQVUsVUFBVSw0QkFBNEIsVUFBVSxlQUFlLDhCQUE4QixVQUFVLFVBQVUsNEJBQTRCLFVBQVUsVUFBVSw2QkFBNkIsVUFBVSxVQUFVLCtCQUErQixVQUFVLFVBQVUsOEJBQThCLFVBQVUsVUFBVSx3Q0FBd0MsZ0JBQWdCLG9DQUFvQyxxQkFBcUIsOEJBQThCLGdCQUFnQixtQ0FBbUMscUJBQXFCLHFDQUFxQyxnQkFBZ0IsbUNBQW1DLGdCQUFnQixvQ0FBb0MsZ0JBQWdCLHNDQUFzQyxnQkFBZ0IscUNBQXFDLGdCQUFnQixvQkFBb0IsVUFBVSxlQUFlLDJCQUEyQixxQkFBcUIsb0JBQW9CLFVBQVUsZ0JBQWdCLDJCQUEyQixzQkFBc0Isb0JBQW9CLFVBQVUsVUFBVSwyQkFBMkIsZ0JBQWdCLG9CQUFvQixVQUFVLGdCQUFnQiwyQkFBMkIsc0JBQXNCLG9CQUFvQixVQUFVLGdCQUFnQiwyQkFBMkIsc0JBQXNCLG9CQUFvQixVQUFVLFVBQVUsMkJBQTJCLGdCQUFnQixvQkFBb0IsVUFBVSxnQkFBZ0IsMkJBQTJCLHNCQUFzQixvQkFBb0IsVUFBVSxnQkFBZ0IsMkJBQTJCLHNCQUFzQixvQkFBb0IsVUFBVSxVQUFVLDJCQUEyQixnQkFBZ0IscUJBQXFCLFVBQVUsZ0JBQWdCLDRCQUE0QixzQkFBc0IscUJBQXFCLFVBQVUsZ0JBQWdCLDRCQUE0QixzQkFBc0IscUJBQXFCLFVBQVUsV0FBVyw0QkFBNEIsa0JBQWtCLDBDQUEwQywyQ0FBMkMsVUFBVSx1Q0FBdUMsVUFBVSxXQUFXLDJEQUEyRCxVQUFVLFVBQVUsbURBQW1ELFVBQVUsZUFBZSx1Q0FBdUMsVUFBVSxVQUFVLGlEQUFpRCxVQUFVLGVBQWUscURBQXFELFVBQVUsVUFBVSxpREFBaUQsVUFBVSxVQUFVLG1EQUFtRCxVQUFVLFVBQVUsdURBQXVELFVBQVUsVUFBVSxxREFBcUQsVUFBVSxVQUFVLHlFQUF5RSxnQkFBZ0IsaUVBQWlFLHFCQUFxQixxREFBcUQsZ0JBQWdCLCtEQUErRCxxQkFBcUIsbUVBQW1FLGdCQUFnQiwrREFBK0QsZ0JBQWdCLGlFQUFpRSxnQkFBZ0IscUVBQXFFLGdCQUFnQixtRUFBbUUsZ0JBQWdCLGlDQUFpQyxVQUFVLGVBQWUsK0NBQStDLHFCQUFxQixpQ0FBaUMsVUFBVSxnQkFBZ0IsK0NBQStDLHNCQUFzQixpQ0FBaUMsVUFBVSxVQUFVLCtDQUErQyxnQkFBZ0IsaUNBQWlDLFVBQVUsZ0JBQWdCLCtDQUErQyxzQkFBc0IsaUNBQWlDLFVBQVUsZ0JBQWdCLCtDQUErQyxzQkFBc0IsaUNBQWlDLFVBQVUsVUFBVSwrQ0FBK0MsZ0JBQWdCLGlDQUFpQyxVQUFVLGdCQUFnQiwrQ0FBK0Msc0JBQXNCLGlDQUFpQyxVQUFVLGdCQUFnQiwrQ0FBK0Msc0JBQXNCLGlDQUFpQyxVQUFVLFVBQVUsK0NBQStDLGdCQUFnQixtQ0FBbUMsVUFBVSxnQkFBZ0IsaURBQWlELHNCQUFzQixtQ0FBbUMsVUFBVSxnQkFBZ0IsaURBQWlELHNCQUFzQixtQ0FBbUMsVUFBVSxXQUFXLGlEQUFpRCxrQkFBa0IscUNBQXFDLHdCQUF3QixVQUFVLHNCQUFzQixVQUFVLFdBQVcsZ0NBQWdDLFVBQVUsVUFBVSw0QkFBNEIsVUFBVSxlQUFlLHNCQUFzQixVQUFVLFVBQVUsMkJBQTJCLFVBQVUsZUFBZSw2QkFBNkIsVUFBVSxVQUFVLDJCQUEyQixVQUFVLFVBQVUsNEJBQTRCLFVBQVUsVUFBVSw4QkFBOEIsVUFBVSxVQUFVLDZCQUE2QixVQUFVLFVBQVUsdUNBQXVDLGdCQUFnQixtQ0FBbUMscUJBQXFCLDZCQUE2QixnQkFBZ0Isa0NBQWtDLHFCQUFxQixvQ0FBb0MsZ0JBQWdCLGtDQUFrQyxnQkFBZ0IsbUNBQW1DLGdCQUFnQixxQ0FBcUMsZ0JBQWdCLG9DQUFvQyxnQkFBZ0IsbUJBQW1CLFVBQVUsZUFBZSwwQkFBMEIscUJBQXFCLG1CQUFtQixVQUFVLGdCQUFnQiwwQkFBMEIsc0JBQXNCLG1CQUFtQixVQUFVLFVBQVUsMEJBQTBCLGdCQUFnQixtQkFBbUIsVUFBVSxnQkFBZ0IsMEJBQTBCLHNCQUFzQixtQkFBbUIsVUFBVSxnQkFBZ0IsMEJBQTBCLHNCQUFzQixtQkFBbUIsVUFBVSxVQUFVLDBCQUEwQixnQkFBZ0IsbUJBQW1CLFVBQVUsZ0JBQWdCLDBCQUEwQixzQkFBc0IsbUJBQW1CLFVBQVUsZ0JBQWdCLDBCQUEwQixzQkFBc0IsbUJBQW1CLFVBQVUsVUFBVSwwQkFBMEIsZ0JBQWdCLG9CQUFvQixVQUFVLGdCQUFnQiwyQkFBMkIsc0JBQXNCLG9CQUFvQixVQUFVLGdCQUFnQiwyQkFBMkIsc0JBQXNCLG9CQUFvQixVQUFVLFdBQVcsMkJBQTJCLGtCQUFrQixxQ0FBcUMsMEJBQTBCLFVBQVUsd0JBQXdCLFVBQVUsV0FBVyxrQ0FBa0MsVUFBVSxVQUFVLDhCQUE4QixVQUFVLGVBQWUsd0JBQXdCLFVBQVUsVUFBVSw2QkFBNkIsVUFBVSxlQUFlLCtCQUErQixVQUFVLFVBQVUsNkJBQTZCLFVBQVUsVUFBVSw4QkFBOEIsVUFBVSxVQUFVLGdDQUFnQyxVQUFVLFVBQVUsK0JBQStCLFVBQVUsVUFBVSx5Q0FBeUMsZ0JBQWdCLHFDQUFxQyxxQkFBcUIsK0JBQStCLGdCQUFnQixvQ0FBb0MscUJBQXFCLHNDQUFzQyxnQkFBZ0Isb0NBQW9DLGdCQUFnQixxQ0FBcUMsZ0JBQWdCLHVDQUF1QyxnQkFBZ0Isc0NBQXNDLGdCQUFnQixxQkFBcUIsVUFBVSxlQUFlLDRCQUE0QixxQkFBcUIscUJBQXFCLFVBQVUsZ0JBQWdCLDRCQUE0QixzQkFBc0IscUJBQXFCLFVBQVUsVUFBVSw0QkFBNEIsZ0JBQWdCLHFCQUFxQixVQUFVLGdCQUFnQiw0QkFBNEIsc0JBQXNCLHFCQUFxQixVQUFVLGdCQUFnQiw0QkFBNEIsc0JBQXNCLHFCQUFxQixVQUFVLFVBQVUsNEJBQTRCLGdCQUFnQixxQkFBcUIsVUFBVSxnQkFBZ0IsNEJBQTRCLHNCQUFzQixxQkFBcUIsVUFBVSxnQkFBZ0IsNEJBQTRCLHNCQUFzQixxQkFBcUIsVUFBVSxVQUFVLDRCQUE0QixnQkFBZ0Isc0JBQXNCLFVBQVUsZ0JBQWdCLDZCQUE2QixzQkFBc0Isc0JBQXNCLFVBQVUsZ0JBQWdCLDZCQUE2QixzQkFBc0Isc0JBQXNCLFVBQVUsV0FBVyw2QkFBNkIsa0JBQWtCLHFDQUFxQyw2QkFBNkIsVUFBVSwyQkFBMkIsVUFBVSxXQUFXLHFDQUFxQyxVQUFVLFVBQVUsaUNBQWlDLFVBQVUsZUFBZSwyQkFBMkIsVUFBVSxVQUFVLGdDQUFnQyxVQUFVLGVBQWUsa0NBQWtDLFVBQVUsVUFBVSxnQ0FBZ0MsVUFBVSxVQUFVLGlDQUFpQyxVQUFVLFVBQVUsbUNBQW1DLFVBQVUsVUFBVSxrQ0FBa0MsVUFBVSxVQUFVLDRDQUE0QyxnQkFBZ0Isd0NBQXdDLHFCQUFxQixrQ0FBa0MsZ0JBQWdCLHVDQUF1QyxxQkFBcUIseUNBQXlDLGdCQUFnQix1Q0FBdUMsZ0JBQWdCLHdDQUF3QyxnQkFBZ0IsMENBQTBDLGdCQUFnQix5Q0FBeUMsZ0JBQWdCLHdCQUF3QixVQUFVLGVBQWUsK0JBQStCLHFCQUFxQix3QkFBd0IsVUFBVSxnQkFBZ0IsK0JBQStCLHNCQUFzQix3QkFBd0IsVUFBVSxVQUFVLCtCQUErQixnQkFBZ0Isd0JBQXdCLFVBQVUsZ0JBQWdCLCtCQUErQixzQkFBc0Isd0JBQXdCLFVBQVUsZ0JBQWdCLCtCQUErQixzQkFBc0Isd0JBQXdCLFVBQVUsVUFBVSwrQkFBK0IsZ0JBQWdCLHdCQUF3QixVQUFVLGdCQUFnQiwrQkFBK0Isc0JBQXNCLHdCQUF3QixVQUFVLGdCQUFnQiwrQkFBK0Isc0JBQXNCLHdCQUF3QixVQUFVLFVBQVUsK0JBQStCLGdCQUFnQix5QkFBeUIsVUFBVSxnQkFBZ0IsZ0NBQWdDLHNCQUFzQix5QkFBeUIsVUFBVSxnQkFBZ0IsZ0NBQWdDLHNCQUFzQix5QkFBeUIsVUFBVSxXQUFXLGdDQUFnQyxrQkFBa0IscUNBQXFDLHlCQUF5QixVQUFVLHVCQUF1QixVQUFVLFdBQVcsaUNBQWlDLFVBQVUsVUFBVSw2QkFBNkIsVUFBVSxlQUFlLHVCQUF1QixVQUFVLFVBQVUsNEJBQTRCLFVBQVUsZUFBZSw4QkFBOEIsVUFBVSxVQUFVLDRCQUE0QixVQUFVLFVBQVUsNkJBQTZCLFVBQVUsVUFBVSwrQkFBK0IsVUFBVSxVQUFVLDhCQUE4QixVQUFVLFVBQVUsd0NBQXdDLGdCQUFnQixvQ0FBb0MscUJBQXFCLDhCQUE4QixnQkFBZ0IsbUNBQW1DLHFCQUFxQixxQ0FBcUMsZ0JBQWdCLG1DQUFtQyxnQkFBZ0Isb0NBQW9DLGdCQUFnQixzQ0FBc0MsZ0JBQWdCLHFDQUFxQyxnQkFBZ0Isb0JBQW9CLFVBQVUsZUFBZSwyQkFBMkIscUJBQXFCLG9CQUFvQixVQUFVLGdCQUFnQiwyQkFBMkIsc0JBQXNCLG9CQUFvQixVQUFVLFVBQVUsMkJBQTJCLGdCQUFnQixvQkFBb0IsVUFBVSxnQkFBZ0IsMkJBQTJCLHNCQUFzQixvQkFBb0IsVUFBVSxnQkFBZ0IsMkJBQTJCLHNCQUFzQixvQkFBb0IsVUFBVSxVQUFVLDJCQUEyQixnQkFBZ0Isb0JBQW9CLFVBQVUsZ0JBQWdCLDJCQUEyQixzQkFBc0Isb0JBQW9CLFVBQVUsZ0JBQWdCLDJCQUEyQixzQkFBc0Isb0JBQW9CLFVBQVUsVUFBVSwyQkFBMkIsZ0JBQWdCLHFCQUFxQixVQUFVLGdCQUFnQiw0QkFBNEIsc0JBQXNCLHFCQUFxQixVQUFVLGdCQUFnQiw0QkFBNEIsc0JBQXNCLHFCQUFxQixVQUFVLFdBQVcsNEJBQTRCLGtCQUFrQixTQUFTLG9CQUFvQixxQkFBcUIsbUJBQW1CLG9CQUFvQixzQkFBc0IsMEJBQTBCLG9DQUFvQyxxQkFBcUIsdUJBQXVCLG9CQUFvQixjQUFjLGVBQWUsYUFBYSw0QkFBNEIsU0FBUyxvQkFBb0IscUNBQXFDLHFCQUFxQiwrQkFBK0IsZ0JBQWdCLG1CQUFtQixhQUFhLHNCQUFzQixlQUFlLHNCQUFzQixtQkFBbUIsMENBQTBDLDBCQUEwQixjQUFjLHFDQUFxQyxvQkFBb0IsY0FBYyxxQkFBcUIsb0JBQW9CLHdDQUF3Qyx5Q0FBeUMsNkJBQTZCLDhCQUE4QiwrQkFBK0IsMEJBQTBCLGlCQUFpQixvQ0FBb0MsaUNBQWlDLGtCQUFrQiwwQ0FBMEMsaUNBQWlDLGtCQUFrQiwyREFBMkQsc0NBQXNDLGtCQUFrQixxQ0FBcUMsZ0NBQWdDLGtCQUFrQixxQ0FBcUMsa0NBQWtDLGtCQUFrQiw0REFBNEQsdUNBQXVDLGtCQUFrQixxQ0FBcUMscUNBQXFDLGtCQUFrQiw0REFBNEQsMENBQTBDLGtCQUFrQixxQ0FBcUMsaUNBQWlDLGtCQUFrQiwwQkFBMEIsb0JBQW9CLG9DQUFvQyxpQ0FBaUMscUJBQXFCLDBDQUEwQyxpQ0FBaUMscUJBQXFCLDJEQUEyRCxzQ0FBc0MscUJBQXFCLHFDQUFxQyxnQ0FBZ0MscUJBQXFCLHFDQUFxQyxrQ0FBa0MscUJBQXFCLDREQUE0RCx1Q0FBdUMscUJBQXFCLHFDQUFxQyxxQ0FBcUMscUJBQXFCLDREQUE0RCwwQ0FBMEMscUJBQXFCLHFDQUFxQyxpQ0FBaUMscUJBQXFCLDBCQUEwQixtQkFBbUIsb0NBQW9DLGlDQUFpQyxvQkFBb0IsMENBQTBDLGlDQUFpQyxvQkFBb0IsMkRBQTJELHNDQUFzQyxvQkFBb0IscUNBQXFDLGdDQUFnQyxvQkFBb0IscUNBQXFDLGtDQUFrQyxvQkFBb0IsNERBQTRELHVDQUF1QyxvQkFBb0IscUNBQXFDLHFDQUFxQyxvQkFBb0IsNERBQTRELDBDQUEwQyxvQkFBb0IscUNBQXFDLGlDQUFpQyxvQkFBb0IsMEJBQTBCLG9CQUFvQixvQ0FBb0MsaUNBQWlDLHFCQUFxQiwwQ0FBMEMsaUNBQWlDLHFCQUFxQiwyREFBMkQsc0NBQXNDLHFCQUFxQixxQ0FBcUMsZ0NBQWdDLHFCQUFxQixxQ0FBcUMsa0NBQWtDLHFCQUFxQiw0REFBNEQsdUNBQXVDLHFCQUFxQixxQ0FBcUMscUNBQXFDLHFCQUFxQiw0REFBNEQsMENBQTBDLHFCQUFxQixxQ0FBcUMsaUNBQWlDLHFCQUFxQiwwQkFBMEIsaUJBQWlCLG9DQUFvQyxpQ0FBaUMsa0JBQWtCLDBDQUEwQyxpQ0FBaUMsa0JBQWtCLDJEQUEyRCxzQ0FBc0Msa0JBQWtCLHFDQUFxQyxnQ0FBZ0Msa0JBQWtCLHFDQUFxQyxrQ0FBa0Msa0JBQWtCLDREQUE0RCx1Q0FBdUMsa0JBQWtCLHFDQUFxQyxxQ0FBcUMsa0JBQWtCLDREQUE0RCwwQ0FBMEMsa0JBQWtCLHFDQUFxQyxpQ0FBaUMsa0JBQWtCLDBCQUEwQixvQkFBb0Isb0NBQW9DLGlDQUFpQyxxQkFBcUIsMENBQTBDLGlDQUFpQyxxQkFBcUIsMkRBQTJELHNDQUFzQyxxQkFBcUIscUNBQXFDLGdDQUFnQyxxQkFBcUIscUNBQXFDLGtDQUFrQyxxQkFBcUIsNERBQTRELHVDQUF1QyxxQkFBcUIscUNBQXFDLHFDQUFxQyxxQkFBcUIsNERBQTRELDBDQUEwQyxxQkFBcUIscUNBQXFDLGlDQUFpQyxxQkFBcUIsMEJBQTBCLG1CQUFtQixvQ0FBb0MsaUNBQWlDLG9CQUFvQiwwQ0FBMEMsaUNBQWlDLG9CQUFvQiwyREFBMkQsc0NBQXNDLG9CQUFvQixxQ0FBcUMsZ0NBQWdDLG9CQUFvQixxQ0FBcUMsa0NBQWtDLG9CQUFvQiw0REFBNEQsdUNBQXVDLG9CQUFvQixxQ0FBcUMscUNBQXFDLG9CQUFvQiw0REFBNEQsMENBQTBDLG9CQUFvQixxQ0FBcUMsaUNBQWlDLG9CQUFvQiwwQkFBMEIsb0JBQW9CLG9DQUFvQyxpQ0FBaUMscUJBQXFCLDBDQUEwQyxpQ0FBaUMscUJBQXFCLDJEQUEyRCxzQ0FBc0MscUJBQXFCLHFDQUFxQyxnQ0FBZ0MscUJBQXFCLHFDQUFxQyxrQ0FBa0MscUJBQXFCLDREQUE0RCx1Q0FBdUMscUJBQXFCLHFDQUFxQyxxQ0FBcUMscUJBQXFCLDREQUE0RCwwQ0FBMEMscUJBQXFCLHFDQUFxQyxpQ0FBaUMscUJBQXFCLDBCQUEwQixpQkFBaUIsb0NBQW9DLGlDQUFpQyxrQkFBa0IsMENBQTBDLGlDQUFpQyxrQkFBa0IsMkRBQTJELHNDQUFzQyxrQkFBa0IscUNBQXFDLGdDQUFnQyxrQkFBa0IscUNBQXFDLGtDQUFrQyxrQkFBa0IsNERBQTRELHVDQUF1QyxrQkFBa0IscUNBQXFDLHFDQUFxQyxrQkFBa0IsNERBQTRELDBDQUEwQyxrQkFBa0IscUNBQXFDLGlDQUFpQyxrQkFBa0IsTUFBTSxvQkFBb0IsY0FBYyxhQUFhLFlBQVksY0FBYywrQkFBK0IsNEJBQTRCLHVCQUF1QixrQkFBa0Isb0JBQW9CLHFCQUFxQixtQkFBbUIsNkJBQTZCLHNCQUFzQixtQ0FBbUMscUJBQXFCLGVBQWUsbUJBQW1CLGdCQUFnQixlQUFlLGtCQUFrQixzQkFBc0Isa0RBQWtELCtCQUErQiwwQ0FBMEMscUJBQXFCLGFBQWEsV0FBVyxVQUFVLGVBQWUsV0FBVyxVQUFVLGdCQUFnQixXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsZ0JBQWdCLFdBQVcsVUFBVSxnQkFBZ0IsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLGdCQUFnQixXQUFXLFVBQVUsZ0JBQWdCLFdBQVcsVUFBVSxVQUFVLFlBQVksVUFBVSxnQkFBZ0IsWUFBWSxVQUFVLGdCQUFnQixZQUFZLFVBQVUsWUFBWSxNQUFNLG9CQUFvQixhQUFhLHNCQUFzQiw4QkFBOEIsY0FBYyxlQUFlLGVBQWUsbUJBQW1CLGVBQWUsc0JBQXNCLGNBQWMsa0ZBQWtGLGNBQWMsc0JBQXNCLGNBQWMseUJBQXlCLHdCQUF3Qix3RUFBd0UsY0FBYyxxQ0FBcUMsNEJBQTRCLHVCQUF1Qix3REFBd0Qsd0JBQXdCLGtKQUFrSix5QkFBeUIsY0FBYyx1QkFBdUIsY0FBYyxXQUFXLDZCQUE2QixVQUFVLG9DQUFvQyxVQUFVLGlFQUFpRSxjQUFjLDZFQUE2RSxtQ0FBbUMsa01BQWtNLHlCQUF5QixxQkFBcUIsV0FBVyx1QkFBdUIsc0VBQXNFLG9DQUFvQyxvQ0FBb0MsdUVBQXVFLGVBQWUseUJBQXlCLFdBQVcsa0ZBQWtGLGNBQWMsc0JBQXNCLFdBQVcseUJBQXlCLDJCQUEyQix3RUFBd0UsV0FBVyxxQ0FBcUMsNEJBQTRCLDBCQUEwQix3REFBd0QsMkJBQTJCLGtKQUFrSixzQkFBc0IsV0FBVyx1QkFBdUIsV0FBVyxXQUFXLDZCQUE2QixVQUFVLG9DQUFvQyxVQUFVLGlFQUFpRSxXQUFXLDZFQUE2RSxtQ0FBbUMsa01BQWtNLHNCQUFzQixrQkFBa0IsY0FBYyx1QkFBdUIseUVBQXlFLG9DQUFvQyxvQ0FBb0MsMEVBQTBFLGVBQWUseUJBQXlCLGNBQWMsa0ZBQWtGLGNBQWMsc0JBQXNCLGNBQWMseUJBQXlCLHdCQUF3Qix3RUFBd0UsY0FBYyxxQ0FBcUMsNEJBQTRCLDBCQUEwQix3REFBd0Qsd0JBQXdCLGtKQUFrSix5QkFBeUIsY0FBYyx1QkFBdUIsY0FBYyxXQUFXLDZCQUE2QixVQUFVLG9DQUFvQyxVQUFVLGlFQUFpRSxjQUFjLDZFQUE2RSxtQ0FBbUMsa01BQWtNLHlCQUF5QixxQkFBcUIsY0FBYyx1QkFBdUIseUVBQXlFLG9DQUFvQyxvQ0FBb0MsMEVBQTBFLGNBQWMseUJBQXlCLGNBQWMsZ0ZBQWdGLGNBQWMscUJBQXFCLGNBQWMsd0JBQXdCLDJCQUEyQixzRUFBc0UsY0FBYyxxQ0FBcUMsMkJBQTJCLDBCQUEwQixzREFBc0QsMkJBQTJCLDhJQUE4SSx5QkFBeUIsY0FBYyxzQkFBc0IsY0FBYyxXQUFXLDRCQUE0QixVQUFVLG1DQUFtQyxVQUFVLCtEQUErRCxjQUFjLDJFQUEyRSxtQ0FBbUMsOExBQThMLHlCQUF5QixxQkFBcUIsY0FBYyxzQkFBc0IsNEVBQTRFLG9DQUFvQyxtQ0FBbUMsNkVBQTZFLGlCQUFpQix5QkFBeUIsV0FBVyxzRkFBc0YsY0FBYyx3QkFBd0IsV0FBVywyQkFBMkIsMkJBQTJCLDRFQUE0RSxXQUFXLHFDQUFxQyw4QkFBOEIsMEJBQTBCLDREQUE0RCwyQkFBMkIsMEpBQTBKLHlCQUF5QixXQUFXLHlCQUF5QixXQUFXLFdBQVcsK0JBQStCLFVBQVUsc0NBQXNDLFVBQVUscUVBQXFFLFdBQVcsaUZBQWlGLG1DQUFtQywwTUFBME0sc0JBQXNCLGtCQUFrQixjQUFjLHlCQUF5Qiw0RUFBNEUsb0NBQW9DLHNDQUFzQyw2RUFBNkUsY0FBYyx5QkFBeUIsV0FBVyxnRkFBZ0YsY0FBYyxxQkFBcUIsV0FBVyx3QkFBd0IsMkJBQTJCLHNFQUFzRSxXQUFXLHFDQUFxQywyQkFBMkIsMEJBQTBCLHNEQUFzRCwyQkFBMkIsOElBQThJLHlCQUF5QixXQUFXLHNCQUFzQixXQUFXLFdBQVcsNEJBQTRCLFVBQVUsbUNBQW1DLFVBQVUsK0RBQStELFdBQVcsMkVBQTJFLG1DQUFtQyw4TEFBOEwsc0JBQXNCLGtCQUFrQixjQUFjLHNCQUFzQiw0RUFBNEUsb0NBQW9DLG1DQUFtQyw2RUFBNkUsY0FBYyx5QkFBeUIsV0FBVyxnRkFBZ0YsY0FBYyxxQkFBcUIsV0FBVyx3QkFBd0IsMkJBQTJCLHNFQUFzRSxXQUFXLHFDQUFxQywyQkFBMkIsMEJBQTBCLHNEQUFzRCwyQkFBMkIsOElBQThJLHlCQUF5QixXQUFXLHNCQUFzQixXQUFXLFdBQVcsNEJBQTRCLFVBQVUsbUNBQW1DLFVBQVUsK0RBQStELFdBQVcsMkVBQTJFLG1DQUFtQyw4TEFBOEwsc0JBQXNCLGtCQUFrQixjQUFjLHNCQUFzQiw0RUFBNEUsb0NBQW9DLG1DQUFtQyw2RUFBNkUsaUJBQWlCLHlCQUF5QixXQUFXLHNGQUFzRixjQUFjLHdCQUF3QixXQUFXLDJCQUEyQiwyQkFBMkIsNEVBQTRFLFdBQVcscUNBQXFDLDhCQUE4QiwwQkFBMEIsNERBQTRELDJCQUEyQiwwSkFBMEoseUJBQXlCLFdBQVcseUJBQXlCLFdBQVcsV0FBVywrQkFBK0IsVUFBVSxzQ0FBc0MsVUFBVSxxRUFBcUUsV0FBVyxpRkFBaUYsbUNBQW1DLDBNQUEwTSxzQkFBc0Isa0JBQWtCLGNBQWMseUJBQXlCLDRFQUE0RSxvQ0FBb0Msc0NBQXNDLDZFQUE2RSxpQkFBaUIseUJBQXlCLHFCQUFxQixzRkFBc0YsY0FBYyx3QkFBd0IscUJBQXFCLDJCQUEyQixxQkFBcUIsNEVBQTRFLHFCQUFxQixxQ0FBcUMsOEJBQThCLDBCQUEwQiw0REFBNEQscUJBQXFCLDBKQUEwSix5QkFBeUIscUJBQXFCLHlCQUF5QixxQkFBcUIsV0FBVywrQkFBK0IsVUFBVSxzQ0FBc0MsVUFBVSxxRUFBcUUscUJBQXFCLGlGQUFpRixtQ0FBbUMsME1BQTBNLGdDQUFnQyw0QkFBNEIsY0FBYyx5QkFBeUIsNEVBQTRFLG9DQUFvQyxzQ0FBc0MsNkVBQTZFLGdCQUFnQix5QkFBeUIsV0FBVyxvRkFBb0YsY0FBYyx1QkFBdUIsV0FBVywwQkFBMEIsMkJBQTJCLDBFQUEwRSxXQUFXLHFDQUFxQyw2QkFBNkIsMEJBQTBCLDBEQUEwRCwyQkFBMkIsc0pBQXNKLHlCQUF5QixXQUFXLHdCQUF3QixXQUFXLFdBQVcsOEJBQThCLFVBQVUscUNBQXFDLFVBQVUsbUVBQW1FLFdBQVcsK0VBQStFLG1DQUFtQyxzTUFBc00sc0JBQXNCLGtCQUFrQixjQUFjLHdCQUF3Qiw0RUFBNEUsb0NBQW9DLHFDQUFxQyw2RUFBNkUsMEJBQTBCLHNCQUFzQixtQkFBbUIsMENBQTBDLDJCQUEyQixvQkFBb0Isa0JBQWtCLDBDQUEwQywwQkFBMEIscUJBQXFCLG1CQUFtQix5R0FBeUcsbUJBQW1CLGFBQWEsMElBQTBJLFlBQVksY0FBYyxvQkFBb0IsZ0JBQWdCLG9CQUFvQixpQkFBaUIsWUFBWSxnQkFBZ0Isa0JBQWtCLFNBQVMsZ0JBQWdCLGVBQWUsa0JBQWtCLFFBQVEsMkNBQTJDLG1DQUFtQywyQkFBMkIsV0FBVyxvQ0FBb0MsWUFBWSxjQUFjLGNBQWMsa0JBQWtCLG9DQUFvQyxzQkFBc0IsYUFBYSx1Q0FBdUMsc0JBQXNCLDBDQUEwQyxjQUFjLGFBQWEsdUJBQXVCLHVDQUF1QyxxQkFBcUIsc0JBQXNCLFlBQVksY0FBYyxXQUFXLFlBQVksY0FBYyxvQkFBb0IsU0FBUyxvQkFBb0IscUNBQXFDLG1CQUFtQixvQkFBb0Isa0JBQWtCLHNCQUFzQixRQUFRLHlCQUF5Qix5QkFBeUI7Ozs7Ozs7Ozs7Ozs7O0FDRng4NEs7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1Q0FBdUMsZ0JBQWdCO0FBQ3ZELE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1CQUFtQixpQkFBaUI7QUFDcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZSxvQkFBb0I7QUFDbkMsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxjQUFjO0FBQ25FO0FBQ0EsQzs7Ozs7Ozs7Ozs7QUNwRkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLG1CQUFPLENBQUMsdURBQVE7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsbUJBQW1CO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQSxtQkFBbUIsMkJBQTJCOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLG1CQUFtQjtBQUNuQztBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLDJCQUEyQjtBQUM1QztBQUNBOztBQUVBLFFBQVEsdUJBQXVCO0FBQy9CO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7O0FBRWQsa0RBQWtELHNCQUFzQjtBQUN4RTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBLEtBQUssS0FBd0MsRUFBRSxFQUU3Qzs7QUFFRixRQUFRLHNCQUFpQjtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVyxFQUFFO0FBQ3JELHdDQUF3QyxXQUFXLEVBQUU7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esc0NBQXNDO0FBQ3RDLEdBQUc7QUFDSDtBQUNBLDhEQUE4RDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU29COzs7Ozs7Ozs7Ozs7O0FDVHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsS0FBSztBQUMzQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLHlEQUF5RDtBQUN0RTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLGtDQUFrQyxxQ0FBcUM7QUFDcEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsOEJBQThCLEVBQUUsS0FBSztBQUN6RTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwwQkFBMEI7O0FBRTFCLG9DQUFvQztBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQjtBQUNuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxxREFBcUQsS0FBSyxJQUFJLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSyxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLE9BQU8sR0FBRyxPQUFPO0FBQ3JYO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0M7QUFDcEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0I7QUFDeEIsd0JBQXdCOztBQUV4QjtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYixZQUFZO0FBQ1osWUFBWTtBQUNaLFdBQVc7QUFDWCxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0Isa0JBQWtCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbURBQW1ELElBQUk7QUFDdkQsc0JBQXNCLEtBQUs7QUFDM0I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGVBQWUsT0FBTyxHQUFHLHVCQUF1QixHQUFHLEtBQUssR0FBRyxPQUFPLElBQUk7QUFDdEUscUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCLEtBQUs7O0FBRTlCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixjQUFjO0FBQ25DOztBQUVBLG1CQUFtQjtBQUNuQiwwQ0FBMEM7O0FBRTFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsK0NBQStDOztBQUV2RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixlQUFlO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBOztBQUVzZ0Q7Ozs7Ozs7Ozs7Ozs7QUM1OUN0Z0Q7QUFBQTtBQUFB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Ozs7Ozs7Ozs7Ozs7O29EQUhkLEtBQUssQ0FBQyxPQUFPOztvQ0FMUixNQUFNOztxQkFPVixHQUFHLFFBQUksS0FBSyxDQUFDLEtBQUs7Ozs7Ozt5RUFKbEIsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozt5RkFBTixNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4REFIRixNQUFNOzs7Ozs2RUFHVixNQUFNOzs7dURBRVAsS0FBSyxDQUFDLE9BQU87Ozs7V0FFWixHQUFHLFFBQUksS0FBSyxDQUFDLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQXBDZixNQUFJLE1BQU0sRUFDTixpQkFBSyxDQUFDOztDQUVqQixNQUFNLEdBQUcsR0FBRyxhQUFvQixLQUFLLGFBQWEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JDRTlDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQUFQLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUhMLE1BQUksbUJBQU8sQ0FBQyIsImZpbGUiOiIxZjAwOThjZGI1OTFiODJiODcxMi9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0fTtcblxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cblxuXG4gXHQvLyBzY3JpcHQgcGF0aCBmdW5jdGlvblxuIFx0ZnVuY3Rpb24ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCkge1xuIFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIFwiMWYwMDk4Y2RiNTkxYjgyYjg3MTJcIiArIFwiL1wiICsgKHtcImFib3V0XCI6XCJhYm91dFwiLFwiaG9tZVwiOlwiaG9tZVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJ2ZW5kb3JzfmNhdGVnb3JpZXN+cHJvdmlkZXJzXCI6XCJ2ZW5kb3JzfmNhdGVnb3JpZXN+cHJvdmlkZXJzXCIsXCJjYXRlZ29yaWVzXCI6XCJjYXRlZ29yaWVzXCIsXCJ2ZW5kb3JzfnByb3ZpZGVyc1wiOlwidmVuZG9yc35wcm92aWRlcnNcIixcInByb3ZpZGVyc1wiOlwicHJvdmlkZXJzXCJ9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLlwiICsgY2h1bmtJZCArIFwiLmpzXCJcbiBcdH1cblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cbiBcdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG4gXHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XTtcbiBcdFx0XHRcdH0pO1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuIFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHRcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRcdFx0dmFyIG9uU2NyaXB0Q29tcGxldGU7XG5cbiBcdFx0XHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04JztcbiBcdFx0XHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuIFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcbiBcdFx0XHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c2NyaXB0LnNyYyA9IGpzb25wU2NyaXB0U3JjKGNodW5rSWQpO1xuXG4gXHRcdFx0XHRvblNjcmlwdENvbXBsZXRlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gXHRcdFx0XHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cbiBcdFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcbiBcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuIFx0XHRcdFx0XHR2YXIgY2h1bmsgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdFx0XHRcdGlmKGNodW5rICE9PSAwKSB7XG4gXHRcdFx0XHRcdFx0aWYoY2h1bmspIHtcbiBcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG4gXHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuIFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJyk7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG4gXHRcdFx0XHRcdFx0XHRjaHVua1sxXShlcnJvcik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fTtcbiBcdFx0XHRcdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuIFx0XHRcdFx0XHRvblNjcmlwdENvbXBsZXRlKHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KTtcbiBcdFx0XHRcdH0sIDEyMDAwMCk7XG4gXHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlO1xuIFx0XHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcImNsaWVudC9cIjtcblxuIFx0Ly8gb24gZXJyb3IgZnVuY3Rpb24gZm9yIGFzeW5jIGxvYWRpbmdcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyB0aHJvdyBlcnI7IH07XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY2xpZW50LmpzXCIpO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9idWxtYS5taW4uY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9idWxtYS5taW4uY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2J1bG1hLm1pbi5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyohIGJ1bG1hLmlvIHYwLjcuNCB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9qZ3RobXMvYnVsbWEgKi9ALXdlYmtpdC1rZXlmcmFtZXMgc3BpbkFyb3VuZHtmcm9tey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2Zvcm06cm90YXRlKDApfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNTlkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzU5ZGVnKX19QGtleWZyYW1lcyBzcGluQXJvdW5ke2Zyb217LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM1OWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNTlkZWcpfX0uYnJlYWRjcnVtYiwuYnV0dG9uLC5kZWxldGUsLmZpbGUsLmlzLXVuc2VsZWN0YWJsZSwubW9kYWwtY2xvc2UsLnBhZ2luYXRpb24tZWxsaXBzaXMsLnBhZ2luYXRpb24tbGluaywucGFnaW5hdGlvbi1uZXh0LC5wYWdpbmF0aW9uLXByZXZpb3VzLC50YWJzey13ZWJraXQtdG91Y2gtY2FsbG91dDpub25lOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX0ubmF2YmFyLWxpbms6bm90KC5pcy1hcnJvd2xlc3MpOjphZnRlciwuc2VsZWN0Om5vdCguaXMtbXVsdGlwbGUpOm5vdCguaXMtbG9hZGluZyk6OmFmdGVye2JvcmRlcjozcHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLXJhZGl1czoycHg7Ym9yZGVyLXJpZ2h0OjA7Ym9yZGVyLXRvcDowO2NvbnRlbnQ6XFxcIiBcXFwiO2Rpc3BsYXk6YmxvY2s7aGVpZ2h0Oi42MjVlbTttYXJnaW4tdG9wOi0uNDM3NWVtO3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjt3aWR0aDouNjI1ZW19LmJsb2NrOm5vdCg6bGFzdC1jaGlsZCksLmJveDpub3QoOmxhc3QtY2hpbGQpLC5icmVhZGNydW1iOm5vdCg6bGFzdC1jaGlsZCksLmNvbnRlbnQ6bm90KDpsYXN0LWNoaWxkKSwuaGlnaGxpZ2h0Om5vdCg6bGFzdC1jaGlsZCksLmxldmVsOm5vdCg6bGFzdC1jaGlsZCksLmxpc3Q6bm90KDpsYXN0LWNoaWxkKSwubWVzc2FnZTpub3QoOmxhc3QtY2hpbGQpLC5ub3RpZmljYXRpb246bm90KDpsYXN0LWNoaWxkKSwucHJvZ3Jlc3M6bm90KDpsYXN0LWNoaWxkKSwuc3VidGl0bGU6bm90KDpsYXN0LWNoaWxkKSwudGFibGUtY29udGFpbmVyOm5vdCg6bGFzdC1jaGlsZCksLnRhYmxlOm5vdCg6bGFzdC1jaGlsZCksLnRhYnM6bm90KDpsYXN0LWNoaWxkKSwudGl0bGU6bm90KDpsYXN0LWNoaWxkKXttYXJnaW4tYm90dG9tOjEuNXJlbX0uZGVsZXRlLC5tb2RhbC1jbG9zZXstbW96LWFwcGVhcmFuY2U6bm9uZTstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTAsMTAsMTAsLjIpO2JvcmRlcjpub25lO2JvcmRlci1yYWRpdXM6MjkwNDg2cHg7Y3Vyc29yOnBvaW50ZXI7cG9pbnRlci1ldmVudHM6YXV0bztkaXNwbGF5OmlubGluZS1ibG9jaztmbGV4LWdyb3c6MDtmbGV4LXNocmluazowO2ZvbnQtc2l6ZTowO2hlaWdodDoyMHB4O21heC1oZWlnaHQ6MjBweDttYXgtd2lkdGg6MjBweDttaW4taGVpZ2h0OjIwcHg7bWluLXdpZHRoOjIwcHg7b3V0bGluZTowO3Bvc2l0aW9uOnJlbGF0aXZlO3ZlcnRpY2FsLWFsaWduOnRvcDt3aWR0aDoyMHB4fS5kZWxldGU6OmFmdGVyLC5kZWxldGU6OmJlZm9yZSwubW9kYWwtY2xvc2U6OmFmdGVyLC5tb2RhbC1jbG9zZTo6YmVmb3Jle2JhY2tncm91bmQtY29sb3I6I2ZmZjtjb250ZW50OlxcXCJcXFwiO2Rpc3BsYXk6YmxvY2s7bGVmdDo1MCU7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSg0NWRlZyk7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciBjZW50ZXI7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgY2VudGVyfS5kZWxldGU6OmJlZm9yZSwubW9kYWwtY2xvc2U6OmJlZm9yZXtoZWlnaHQ6MnB4O3dpZHRoOjUwJX0uZGVsZXRlOjphZnRlciwubW9kYWwtY2xvc2U6OmFmdGVye2hlaWdodDo1MCU7d2lkdGg6MnB4fS5kZWxldGU6Zm9jdXMsLmRlbGV0ZTpob3ZlciwubW9kYWwtY2xvc2U6Zm9jdXMsLm1vZGFsLWNsb3NlOmhvdmVye2JhY2tncm91bmQtY29sb3I6cmdiYSgxMCwxMCwxMCwuMyl9LmRlbGV0ZTphY3RpdmUsLm1vZGFsLWNsb3NlOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTAsMTAsMTAsLjQpfS5pcy1zbWFsbC5kZWxldGUsLmlzLXNtYWxsLm1vZGFsLWNsb3Nle2hlaWdodDoxNnB4O21heC1oZWlnaHQ6MTZweDttYXgtd2lkdGg6MTZweDttaW4taGVpZ2h0OjE2cHg7bWluLXdpZHRoOjE2cHg7d2lkdGg6MTZweH0uaXMtbWVkaXVtLmRlbGV0ZSwuaXMtbWVkaXVtLm1vZGFsLWNsb3Nle2hlaWdodDoyNHB4O21heC1oZWlnaHQ6MjRweDttYXgtd2lkdGg6MjRweDttaW4taGVpZ2h0OjI0cHg7bWluLXdpZHRoOjI0cHg7d2lkdGg6MjRweH0uaXMtbGFyZ2UuZGVsZXRlLC5pcy1sYXJnZS5tb2RhbC1jbG9zZXtoZWlnaHQ6MzJweDttYXgtaGVpZ2h0OjMycHg7bWF4LXdpZHRoOjMycHg7bWluLWhlaWdodDozMnB4O21pbi13aWR0aDozMnB4O3dpZHRoOjMycHh9LmJ1dHRvbi5pcy1sb2FkaW5nOjphZnRlciwuY29udHJvbC5pcy1sb2FkaW5nOjphZnRlciwubG9hZGVyLC5zZWxlY3QuaXMtbG9hZGluZzo6YWZ0ZXJ7LXdlYmtpdC1hbmltYXRpb246c3BpbkFyb3VuZCAuNXMgaW5maW5pdGUgbGluZWFyO2FuaW1hdGlvbjpzcGluQXJvdW5kIC41cyBpbmZpbml0ZSBsaW5lYXI7Ym9yZGVyOjJweCBzb2xpZCAjZGJkYmRiO2JvcmRlci1yYWRpdXM6MjkwNDg2cHg7Ym9yZGVyLXJpZ2h0LWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci10b3AtY29sb3I6dHJhbnNwYXJlbnQ7Y29udGVudDpcXFwiXFxcIjtkaXNwbGF5OmJsb2NrO2hlaWdodDoxZW07cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MWVtfS5oZXJvLXZpZGVvLC5pbWFnZS5pcy0xNmJ5OSAuaGFzLXJhdGlvLC5pbWFnZS5pcy0xNmJ5OSBpbWcsLmltYWdlLmlzLTFieTEgLmhhcy1yYXRpbywuaW1hZ2UuaXMtMWJ5MSBpbWcsLmltYWdlLmlzLTFieTIgLmhhcy1yYXRpbywuaW1hZ2UuaXMtMWJ5MiBpbWcsLmltYWdlLmlzLTFieTMgLmhhcy1yYXRpbywuaW1hZ2UuaXMtMWJ5MyBpbWcsLmltYWdlLmlzLTJieTEgLmhhcy1yYXRpbywuaW1hZ2UuaXMtMmJ5MSBpbWcsLmltYWdlLmlzLTJieTMgLmhhcy1yYXRpbywuaW1hZ2UuaXMtMmJ5MyBpbWcsLmltYWdlLmlzLTNieTEgLmhhcy1yYXRpbywuaW1hZ2UuaXMtM2J5MSBpbWcsLmltYWdlLmlzLTNieTIgLmhhcy1yYXRpbywuaW1hZ2UuaXMtM2J5MiBpbWcsLmltYWdlLmlzLTNieTQgLmhhcy1yYXRpbywuaW1hZ2UuaXMtM2J5NCBpbWcsLmltYWdlLmlzLTNieTUgLmhhcy1yYXRpbywuaW1hZ2UuaXMtM2J5NSBpbWcsLmltYWdlLmlzLTRieTMgLmhhcy1yYXRpbywuaW1hZ2UuaXMtNGJ5MyBpbWcsLmltYWdlLmlzLTRieTUgLmhhcy1yYXRpbywuaW1hZ2UuaXMtNGJ5NSBpbWcsLmltYWdlLmlzLTVieTMgLmhhcy1yYXRpbywuaW1hZ2UuaXMtNWJ5MyBpbWcsLmltYWdlLmlzLTVieTQgLmhhcy1yYXRpbywuaW1hZ2UuaXMtNWJ5NCBpbWcsLmltYWdlLmlzLTlieTE2IC5oYXMtcmF0aW8sLmltYWdlLmlzLTlieTE2IGltZywuaW1hZ2UuaXMtc3F1YXJlIC5oYXMtcmF0aW8sLmltYWdlLmlzLXNxdWFyZSBpbWcsLmlzLW92ZXJsYXksLm1vZGFsLC5tb2RhbC1iYWNrZ3JvdW5ke2JvdHRvbTowO2xlZnQ6MDtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDowO3RvcDowfS5idXR0b24sLmZpbGUtY3RhLC5maWxlLW5hbWUsLmlucHV0LC5wYWdpbmF0aW9uLWVsbGlwc2lzLC5wYWdpbmF0aW9uLWxpbmssLnBhZ2luYXRpb24tbmV4dCwucGFnaW5hdGlvbi1wcmV2aW91cywuc2VsZWN0IHNlbGVjdCwudGV4dGFyZWF7LW1vei1hcHBlYXJhbmNlOm5vbmU7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7YWxpZ24taXRlbXM6Y2VudGVyO2JvcmRlcjoxcHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLXJhZGl1czo0cHg7Ym94LXNoYWRvdzpub25lO2Rpc3BsYXk6aW5saW5lLWZsZXg7Zm9udC1zaXplOjFyZW07aGVpZ2h0OjIuMjVlbTtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtsaW5lLWhlaWdodDoxLjU7cGFkZGluZy1ib3R0b206Y2FsYyguMzc1ZW0gLSAxcHgpO3BhZGRpbmctbGVmdDpjYWxjKC42MjVlbSAtIDFweCk7cGFkZGluZy1yaWdodDpjYWxjKC42MjVlbSAtIDFweCk7cGFkZGluZy10b3A6Y2FsYyguMzc1ZW0gLSAxcHgpO3Bvc2l0aW9uOnJlbGF0aXZlO3ZlcnRpY2FsLWFsaWduOnRvcH0uYnV0dG9uOmFjdGl2ZSwuYnV0dG9uOmZvY3VzLC5maWxlLWN0YTphY3RpdmUsLmZpbGUtY3RhOmZvY3VzLC5maWxlLW5hbWU6YWN0aXZlLC5maWxlLW5hbWU6Zm9jdXMsLmlucHV0OmFjdGl2ZSwuaW5wdXQ6Zm9jdXMsLmlzLWFjdGl2ZS5idXR0b24sLmlzLWFjdGl2ZS5maWxlLWN0YSwuaXMtYWN0aXZlLmZpbGUtbmFtZSwuaXMtYWN0aXZlLmlucHV0LC5pcy1hY3RpdmUucGFnaW5hdGlvbi1lbGxpcHNpcywuaXMtYWN0aXZlLnBhZ2luYXRpb24tbGluaywuaXMtYWN0aXZlLnBhZ2luYXRpb24tbmV4dCwuaXMtYWN0aXZlLnBhZ2luYXRpb24tcHJldmlvdXMsLmlzLWFjdGl2ZS50ZXh0YXJlYSwuaXMtZm9jdXNlZC5idXR0b24sLmlzLWZvY3VzZWQuZmlsZS1jdGEsLmlzLWZvY3VzZWQuZmlsZS1uYW1lLC5pcy1mb2N1c2VkLmlucHV0LC5pcy1mb2N1c2VkLnBhZ2luYXRpb24tZWxsaXBzaXMsLmlzLWZvY3VzZWQucGFnaW5hdGlvbi1saW5rLC5pcy1mb2N1c2VkLnBhZ2luYXRpb24tbmV4dCwuaXMtZm9jdXNlZC5wYWdpbmF0aW9uLXByZXZpb3VzLC5pcy1mb2N1c2VkLnRleHRhcmVhLC5wYWdpbmF0aW9uLWVsbGlwc2lzOmFjdGl2ZSwucGFnaW5hdGlvbi1lbGxpcHNpczpmb2N1cywucGFnaW5hdGlvbi1saW5rOmFjdGl2ZSwucGFnaW5hdGlvbi1saW5rOmZvY3VzLC5wYWdpbmF0aW9uLW5leHQ6YWN0aXZlLC5wYWdpbmF0aW9uLW5leHQ6Zm9jdXMsLnBhZ2luYXRpb24tcHJldmlvdXM6YWN0aXZlLC5wYWdpbmF0aW9uLXByZXZpb3VzOmZvY3VzLC5zZWxlY3Qgc2VsZWN0LmlzLWFjdGl2ZSwuc2VsZWN0IHNlbGVjdC5pcy1mb2N1c2VkLC5zZWxlY3Qgc2VsZWN0OmFjdGl2ZSwuc2VsZWN0IHNlbGVjdDpmb2N1cywudGV4dGFyZWE6YWN0aXZlLC50ZXh0YXJlYTpmb2N1c3tvdXRsaW5lOjB9LmJ1dHRvbltkaXNhYmxlZF0sLmZpbGUtY3RhW2Rpc2FibGVkXSwuZmlsZS1uYW1lW2Rpc2FibGVkXSwuaW5wdXRbZGlzYWJsZWRdLC5wYWdpbmF0aW9uLWVsbGlwc2lzW2Rpc2FibGVkXSwucGFnaW5hdGlvbi1saW5rW2Rpc2FibGVkXSwucGFnaW5hdGlvbi1uZXh0W2Rpc2FibGVkXSwucGFnaW5hdGlvbi1wcmV2aW91c1tkaXNhYmxlZF0sLnNlbGVjdCBmaWVsZHNldFtkaXNhYmxlZF0gc2VsZWN0LC5zZWxlY3Qgc2VsZWN0W2Rpc2FibGVkXSwudGV4dGFyZWFbZGlzYWJsZWRdLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnV0dG9uLGZpZWxkc2V0W2Rpc2FibGVkXSAuZmlsZS1jdGEsZmllbGRzZXRbZGlzYWJsZWRdIC5maWxlLW5hbWUsZmllbGRzZXRbZGlzYWJsZWRdIC5pbnB1dCxmaWVsZHNldFtkaXNhYmxlZF0gLnBhZ2luYXRpb24tZWxsaXBzaXMsZmllbGRzZXRbZGlzYWJsZWRdIC5wYWdpbmF0aW9uLWxpbmssZmllbGRzZXRbZGlzYWJsZWRdIC5wYWdpbmF0aW9uLW5leHQsZmllbGRzZXRbZGlzYWJsZWRdIC5wYWdpbmF0aW9uLXByZXZpb3VzLGZpZWxkc2V0W2Rpc2FibGVkXSAuc2VsZWN0IHNlbGVjdCxmaWVsZHNldFtkaXNhYmxlZF0gLnRleHRhcmVhe2N1cnNvcjpub3QtYWxsb3dlZH0vKiEgbWluaXJlc2V0LmNzcyB2MC4wLjQgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vamd0aG1zL21pbmlyZXNldC5jc3MgKi9ibG9ja3F1b3RlLGJvZHksZGQsZGwsZHQsZmllbGRzZXQsZmlndXJlLGgxLGgyLGgzLGg0LGg1LGg2LGhyLGh0bWwsaWZyYW1lLGxlZ2VuZCxsaSxvbCxwLHByZSx0ZXh0YXJlYSx1bHttYXJnaW46MDtwYWRkaW5nOjB9aDEsaDIsaDMsaDQsaDUsaDZ7Zm9udC1zaXplOjEwMCU7Zm9udC13ZWlnaHQ6NDAwfXVse2xpc3Qtc3R5bGU6bm9uZX1idXR0b24saW5wdXQsc2VsZWN0LHRleHRhcmVhe21hcmdpbjowfWh0bWx7Ym94LXNpemluZzpib3JkZXItYm94fSosOjphZnRlciw6OmJlZm9yZXtib3gtc2l6aW5nOmluaGVyaXR9ZW1iZWQsaWZyYW1lLGltZyxvYmplY3QsdmlkZW97aGVpZ2h0OmF1dG87bWF4LXdpZHRoOjEwMCV9YXVkaW97bWF4LXdpZHRoOjEwMCV9aWZyYW1le2JvcmRlcjowfXRhYmxle2JvcmRlci1jb2xsYXBzZTpjb2xsYXBzZTtib3JkZXItc3BhY2luZzowfXRkLHRoe3BhZGRpbmc6MDt0ZXh0LWFsaWduOmxlZnR9aHRtbHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Zm9udC1zaXplOjE2cHg7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7bWluLXdpZHRoOjMwMHB4O292ZXJmbG93LXg6aGlkZGVuO292ZXJmbG93LXk6c2Nyb2xsO3RleHQtcmVuZGVyaW5nOm9wdGltaXplTGVnaWJpbGl0eTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6MTAwJTstbW96LXRleHQtc2l6ZS1hZGp1c3Q6MTAwJTstbXMtdGV4dC1zaXplLWFkanVzdDoxMDAlO3RleHQtc2l6ZS1hZGp1c3Q6MTAwJX1hcnRpY2xlLGFzaWRlLGZpZ3VyZSxmb290ZXIsaGVhZGVyLGhncm91cCxzZWN0aW9ue2Rpc3BsYXk6YmxvY2t9Ym9keSxidXR0b24saW5wdXQsc2VsZWN0LHRleHRhcmVhe2ZvbnQtZmFtaWx5OkJsaW5rTWFjU3lzdGVtRm9udCwtYXBwbGUtc3lzdGVtLFxcXCJTZWdvZSBVSVxcXCIsUm9ib3RvLE94eWdlbixVYnVudHUsQ2FudGFyZWxsLFxcXCJGaXJhIFNhbnNcXFwiLFxcXCJEcm9pZCBTYW5zXFxcIixcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmfWNvZGUscHJley1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmF1dG87LXdlYmtpdC1mb250LXNtb290aGluZzphdXRvO2ZvbnQtZmFtaWx5Om1vbm9zcGFjZX1ib2R5e2NvbG9yOiM0YTRhNGE7Zm9udC1zaXplOjFyZW07Zm9udC13ZWlnaHQ6NDAwO2xpbmUtaGVpZ2h0OjEuNX1he2NvbG9yOiMzMjczZGM7Y3Vyc29yOnBvaW50ZXI7dGV4dC1kZWNvcmF0aW9uOm5vbmV9YSBzdHJvbmd7Y29sb3I6Y3VycmVudENvbG9yfWE6aG92ZXJ7Y29sb3I6IzM2MzYzNn1jb2Rle2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTtjb2xvcjojZmYzODYwO2ZvbnQtc2l6ZTouODc1ZW07Zm9udC13ZWlnaHQ6NDAwO3BhZGRpbmc6LjI1ZW0gLjVlbSAuMjVlbX1ocntiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7Ym9yZGVyOm5vbmU7ZGlzcGxheTpibG9jaztoZWlnaHQ6MnB4O21hcmdpbjoxLjVyZW0gMH1pbWd7aGVpZ2h0OmF1dG87bWF4LXdpZHRoOjEwMCV9aW5wdXRbdHlwZT1jaGVja2JveF0saW5wdXRbdHlwZT1yYWRpb117dmVydGljYWwtYWxpZ246YmFzZWxpbmV9c21hbGx7Zm9udC1zaXplOi44NzVlbX1zcGFue2ZvbnQtc3R5bGU6aW5oZXJpdDtmb250LXdlaWdodDppbmhlcml0fXN0cm9uZ3tjb2xvcjojMzYzNjM2O2ZvbnQtd2VpZ2h0OjcwMH1maWVsZHNldHtib3JkZXI6bm9uZX1wcmV7LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2g7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O2NvbG9yOiM0YTRhNGE7Zm9udC1zaXplOi44NzVlbTtvdmVyZmxvdy14OmF1dG87cGFkZGluZzoxLjI1cmVtIDEuNXJlbTt3aGl0ZS1zcGFjZTpwcmU7d29yZC13cmFwOm5vcm1hbH1wcmUgY29kZXtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOmN1cnJlbnRDb2xvcjtmb250LXNpemU6MWVtO3BhZGRpbmc6MH10YWJsZSB0ZCx0YWJsZSB0aHt0ZXh0LWFsaWduOmxlZnQ7dmVydGljYWwtYWxpZ246dG9wfXRhYmxlIHRoe2NvbG9yOiMzNjM2MzZ9LmlzLWNsZWFyZml4OjphZnRlcntjbGVhcjpib3RoO2NvbnRlbnQ6XFxcIiBcXFwiO2Rpc3BsYXk6dGFibGV9LmlzLXB1bGxlZC1sZWZ0e2Zsb2F0OmxlZnQhaW1wb3J0YW50fS5pcy1wdWxsZWQtcmlnaHR7ZmxvYXQ6cmlnaHQhaW1wb3J0YW50fS5pcy1jbGlwcGVke292ZXJmbG93OmhpZGRlbiFpbXBvcnRhbnR9LmlzLXNpemUtMXtmb250LXNpemU6M3JlbSFpbXBvcnRhbnR9LmlzLXNpemUtMntmb250LXNpemU6Mi41cmVtIWltcG9ydGFudH0uaXMtc2l6ZS0ze2ZvbnQtc2l6ZToycmVtIWltcG9ydGFudH0uaXMtc2l6ZS00e2ZvbnQtc2l6ZToxLjVyZW0haW1wb3J0YW50fS5pcy1zaXplLTV7Zm9udC1zaXplOjEuMjVyZW0haW1wb3J0YW50fS5pcy1zaXplLTZ7Zm9udC1zaXplOjFyZW0haW1wb3J0YW50fS5pcy1zaXplLTd7Zm9udC1zaXplOi43NXJlbSFpbXBvcnRhbnR9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCl7LmlzLXNpemUtMS1tb2JpbGV7Zm9udC1zaXplOjNyZW0haW1wb3J0YW50fS5pcy1zaXplLTItbW9iaWxle2ZvbnQtc2l6ZToyLjVyZW0haW1wb3J0YW50fS5pcy1zaXplLTMtbW9iaWxle2ZvbnQtc2l6ZToycmVtIWltcG9ydGFudH0uaXMtc2l6ZS00LW1vYmlsZXtmb250LXNpemU6MS41cmVtIWltcG9ydGFudH0uaXMtc2l6ZS01LW1vYmlsZXtmb250LXNpemU6MS4yNXJlbSFpbXBvcnRhbnR9LmlzLXNpemUtNi1tb2JpbGV7Zm9udC1zaXplOjFyZW0haW1wb3J0YW50fS5pcy1zaXplLTctbW9iaWxle2ZvbnQtc2l6ZTouNzVyZW0haW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OXB4KSxwcmludHsuaXMtc2l6ZS0xLXRhYmxldHtmb250LXNpemU6M3JlbSFpbXBvcnRhbnR9LmlzLXNpemUtMi10YWJsZXR7Zm9udC1zaXplOjIuNXJlbSFpbXBvcnRhbnR9LmlzLXNpemUtMy10YWJsZXR7Zm9udC1zaXplOjJyZW0haW1wb3J0YW50fS5pcy1zaXplLTQtdGFibGV0e2ZvbnQtc2l6ZToxLjVyZW0haW1wb3J0YW50fS5pcy1zaXplLTUtdGFibGV0e2ZvbnQtc2l6ZToxLjI1cmVtIWltcG9ydGFudH0uaXMtc2l6ZS02LXRhYmxldHtmb250LXNpemU6MXJlbSFpbXBvcnRhbnR9LmlzLXNpemUtNy10YWJsZXR7Zm9udC1zaXplOi43NXJlbSFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTA4N3B4KXsuaXMtc2l6ZS0xLXRvdWNoe2ZvbnQtc2l6ZTozcmVtIWltcG9ydGFudH0uaXMtc2l6ZS0yLXRvdWNoe2ZvbnQtc2l6ZToyLjVyZW0haW1wb3J0YW50fS5pcy1zaXplLTMtdG91Y2h7Zm9udC1zaXplOjJyZW0haW1wb3J0YW50fS5pcy1zaXplLTQtdG91Y2h7Zm9udC1zaXplOjEuNXJlbSFpbXBvcnRhbnR9LmlzLXNpemUtNS10b3VjaHtmb250LXNpemU6MS4yNXJlbSFpbXBvcnRhbnR9LmlzLXNpemUtNi10b3VjaHtmb250LXNpemU6MXJlbSFpbXBvcnRhbnR9LmlzLXNpemUtNy10b3VjaHtmb250LXNpemU6Ljc1cmVtIWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDg4cHgpey5pcy1zaXplLTEtZGVza3RvcHtmb250LXNpemU6M3JlbSFpbXBvcnRhbnR9LmlzLXNpemUtMi1kZXNrdG9we2ZvbnQtc2l6ZToyLjVyZW0haW1wb3J0YW50fS5pcy1zaXplLTMtZGVza3RvcHtmb250LXNpemU6MnJlbSFpbXBvcnRhbnR9LmlzLXNpemUtNC1kZXNrdG9we2ZvbnQtc2l6ZToxLjVyZW0haW1wb3J0YW50fS5pcy1zaXplLTUtZGVza3RvcHtmb250LXNpemU6MS4yNXJlbSFpbXBvcnRhbnR9LmlzLXNpemUtNi1kZXNrdG9we2ZvbnQtc2l6ZToxcmVtIWltcG9ydGFudH0uaXMtc2l6ZS03LWRlc2t0b3B7Zm9udC1zaXplOi43NXJlbSFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTI4MHB4KXsuaXMtc2l6ZS0xLXdpZGVzY3JlZW57Zm9udC1zaXplOjNyZW0haW1wb3J0YW50fS5pcy1zaXplLTItd2lkZXNjcmVlbntmb250LXNpemU6Mi41cmVtIWltcG9ydGFudH0uaXMtc2l6ZS0zLXdpZGVzY3JlZW57Zm9udC1zaXplOjJyZW0haW1wb3J0YW50fS5pcy1zaXplLTQtd2lkZXNjcmVlbntmb250LXNpemU6MS41cmVtIWltcG9ydGFudH0uaXMtc2l6ZS01LXdpZGVzY3JlZW57Zm9udC1zaXplOjEuMjVyZW0haW1wb3J0YW50fS5pcy1zaXplLTYtd2lkZXNjcmVlbntmb250LXNpemU6MXJlbSFpbXBvcnRhbnR9LmlzLXNpemUtNy13aWRlc2NyZWVue2ZvbnQtc2l6ZTouNzVyZW0haW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjE0NzJweCl7LmlzLXNpemUtMS1mdWxsaGR7Zm9udC1zaXplOjNyZW0haW1wb3J0YW50fS5pcy1zaXplLTItZnVsbGhke2ZvbnQtc2l6ZToyLjVyZW0haW1wb3J0YW50fS5pcy1zaXplLTMtZnVsbGhke2ZvbnQtc2l6ZToycmVtIWltcG9ydGFudH0uaXMtc2l6ZS00LWZ1bGxoZHtmb250LXNpemU6MS41cmVtIWltcG9ydGFudH0uaXMtc2l6ZS01LWZ1bGxoZHtmb250LXNpemU6MS4yNXJlbSFpbXBvcnRhbnR9LmlzLXNpemUtNi1mdWxsaGR7Zm9udC1zaXplOjFyZW0haW1wb3J0YW50fS5pcy1zaXplLTctZnVsbGhke2ZvbnQtc2l6ZTouNzVyZW0haW1wb3J0YW50fX0uaGFzLXRleHQtY2VudGVyZWR7dGV4dC1hbGlnbjpjZW50ZXIhaW1wb3J0YW50fS5oYXMtdGV4dC1qdXN0aWZpZWR7dGV4dC1hbGlnbjpqdXN0aWZ5IWltcG9ydGFudH0uaGFzLXRleHQtbGVmdHt0ZXh0LWFsaWduOmxlZnQhaW1wb3J0YW50fS5oYXMtdGV4dC1yaWdodHt0ZXh0LWFsaWduOnJpZ2h0IWltcG9ydGFudH1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXsuaGFzLXRleHQtY2VudGVyZWQtbW9iaWxle3RleHQtYWxpZ246Y2VudGVyIWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjlweCkscHJpbnR7Lmhhcy10ZXh0LWNlbnRlcmVkLXRhYmxldHt0ZXh0LWFsaWduOmNlbnRlciFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY5cHgpIGFuZCAobWF4LXdpZHRoOjEwODdweCl7Lmhhcy10ZXh0LWNlbnRlcmVkLXRhYmxldC1vbmx5e3RleHQtYWxpZ246Y2VudGVyIWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDg3cHgpey5oYXMtdGV4dC1jZW50ZXJlZC10b3VjaHt0ZXh0LWFsaWduOmNlbnRlciFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTA4OHB4KXsuaGFzLXRleHQtY2VudGVyZWQtZGVza3RvcHt0ZXh0LWFsaWduOmNlbnRlciFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTA4OHB4KSBhbmQgKG1heC13aWR0aDoxMjc5cHgpey5oYXMtdGV4dC1jZW50ZXJlZC1kZXNrdG9wLW9ubHl7dGV4dC1hbGlnbjpjZW50ZXIhaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEyODBweCl7Lmhhcy10ZXh0LWNlbnRlcmVkLXdpZGVzY3JlZW57dGV4dC1hbGlnbjpjZW50ZXIhaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEyODBweCkgYW5kIChtYXgtd2lkdGg6MTQ3MXB4KXsuaGFzLXRleHQtY2VudGVyZWQtd2lkZXNjcmVlbi1vbmx5e3RleHQtYWxpZ246Y2VudGVyIWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxNDcycHgpey5oYXMtdGV4dC1jZW50ZXJlZC1mdWxsaGR7dGV4dC1hbGlnbjpjZW50ZXIhaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXsuaGFzLXRleHQtanVzdGlmaWVkLW1vYmlsZXt0ZXh0LWFsaWduOmp1c3RpZnkhaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OXB4KSxwcmludHsuaGFzLXRleHQtanVzdGlmaWVkLXRhYmxldHt0ZXh0LWFsaWduOmp1c3RpZnkhaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OXB4KSBhbmQgKG1heC13aWR0aDoxMDg3cHgpey5oYXMtdGV4dC1qdXN0aWZpZWQtdGFibGV0LW9ubHl7dGV4dC1hbGlnbjpqdXN0aWZ5IWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDg3cHgpey5oYXMtdGV4dC1qdXN0aWZpZWQtdG91Y2h7dGV4dC1hbGlnbjpqdXN0aWZ5IWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDg4cHgpey5oYXMtdGV4dC1qdXN0aWZpZWQtZGVza3RvcHt0ZXh0LWFsaWduOmp1c3RpZnkhaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwODhweCkgYW5kIChtYXgtd2lkdGg6MTI3OXB4KXsuaGFzLXRleHQtanVzdGlmaWVkLWRlc2t0b3Atb25seXt0ZXh0LWFsaWduOmp1c3RpZnkhaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEyODBweCl7Lmhhcy10ZXh0LWp1c3RpZmllZC13aWRlc2NyZWVue3RleHQtYWxpZ246anVzdGlmeSFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTI4MHB4KSBhbmQgKG1heC13aWR0aDoxNDcxcHgpey5oYXMtdGV4dC1qdXN0aWZpZWQtd2lkZXNjcmVlbi1vbmx5e3RleHQtYWxpZ246anVzdGlmeSFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTQ3MnB4KXsuaGFzLXRleHQtanVzdGlmaWVkLWZ1bGxoZHt0ZXh0LWFsaWduOmp1c3RpZnkhaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXsuaGFzLXRleHQtbGVmdC1tb2JpbGV7dGV4dC1hbGlnbjpsZWZ0IWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjlweCkscHJpbnR7Lmhhcy10ZXh0LWxlZnQtdGFibGV0e3RleHQtYWxpZ246bGVmdCFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY5cHgpIGFuZCAobWF4LXdpZHRoOjEwODdweCl7Lmhhcy10ZXh0LWxlZnQtdGFibGV0LW9ubHl7dGV4dC1hbGlnbjpsZWZ0IWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDg3cHgpey5oYXMtdGV4dC1sZWZ0LXRvdWNoe3RleHQtYWxpZ246bGVmdCFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTA4OHB4KXsuaGFzLXRleHQtbGVmdC1kZXNrdG9we3RleHQtYWxpZ246bGVmdCFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTA4OHB4KSBhbmQgKG1heC13aWR0aDoxMjc5cHgpey5oYXMtdGV4dC1sZWZ0LWRlc2t0b3Atb25seXt0ZXh0LWFsaWduOmxlZnQhaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEyODBweCl7Lmhhcy10ZXh0LWxlZnQtd2lkZXNjcmVlbnt0ZXh0LWFsaWduOmxlZnQhaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEyODBweCkgYW5kIChtYXgtd2lkdGg6MTQ3MXB4KXsuaGFzLXRleHQtbGVmdC13aWRlc2NyZWVuLW9ubHl7dGV4dC1hbGlnbjpsZWZ0IWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxNDcycHgpey5oYXMtdGV4dC1sZWZ0LWZ1bGxoZHt0ZXh0LWFsaWduOmxlZnQhaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXsuaGFzLXRleHQtcmlnaHQtbW9iaWxle3RleHQtYWxpZ246cmlnaHQhaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OXB4KSxwcmludHsuaGFzLXRleHQtcmlnaHQtdGFibGV0e3RleHQtYWxpZ246cmlnaHQhaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OXB4KSBhbmQgKG1heC13aWR0aDoxMDg3cHgpey5oYXMtdGV4dC1yaWdodC10YWJsZXQtb25seXt0ZXh0LWFsaWduOnJpZ2h0IWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDg3cHgpey5oYXMtdGV4dC1yaWdodC10b3VjaHt0ZXh0LWFsaWduOnJpZ2h0IWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDg4cHgpey5oYXMtdGV4dC1yaWdodC1kZXNrdG9we3RleHQtYWxpZ246cmlnaHQhaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwODhweCkgYW5kIChtYXgtd2lkdGg6MTI3OXB4KXsuaGFzLXRleHQtcmlnaHQtZGVza3RvcC1vbmx5e3RleHQtYWxpZ246cmlnaHQhaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEyODBweCl7Lmhhcy10ZXh0LXJpZ2h0LXdpZGVzY3JlZW57dGV4dC1hbGlnbjpyaWdodCFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTI4MHB4KSBhbmQgKG1heC13aWR0aDoxNDcxcHgpey5oYXMtdGV4dC1yaWdodC13aWRlc2NyZWVuLW9ubHl7dGV4dC1hbGlnbjpyaWdodCFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTQ3MnB4KXsuaGFzLXRleHQtcmlnaHQtZnVsbGhke3RleHQtYWxpZ246cmlnaHQhaW1wb3J0YW50fX0uaXMtY2FwaXRhbGl6ZWR7dGV4dC10cmFuc2Zvcm06Y2FwaXRhbGl6ZSFpbXBvcnRhbnR9LmlzLWxvd2VyY2FzZXt0ZXh0LXRyYW5zZm9ybTpsb3dlcmNhc2UhaW1wb3J0YW50fS5pcy11cHBlcmNhc2V7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlIWltcG9ydGFudH0uaXMtaXRhbGlje2ZvbnQtc3R5bGU6aXRhbGljIWltcG9ydGFudH0uaGFzLXRleHQtd2hpdGV7Y29sb3I6I2ZmZiFpbXBvcnRhbnR9YS5oYXMtdGV4dC13aGl0ZTpmb2N1cyxhLmhhcy10ZXh0LXdoaXRlOmhvdmVye2NvbG9yOiNlNmU2ZTYhaW1wb3J0YW50fS5oYXMtYmFja2dyb3VuZC13aGl0ZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmYhaW1wb3J0YW50fS5oYXMtdGV4dC1ibGFja3tjb2xvcjojMGEwYTBhIWltcG9ydGFudH1hLmhhcy10ZXh0LWJsYWNrOmZvY3VzLGEuaGFzLXRleHQtYmxhY2s6aG92ZXJ7Y29sb3I6IzAwMCFpbXBvcnRhbnR9Lmhhcy1iYWNrZ3JvdW5kLWJsYWNre2JhY2tncm91bmQtY29sb3I6IzBhMGEwYSFpbXBvcnRhbnR9Lmhhcy10ZXh0LWxpZ2h0e2NvbG9yOiNmNWY1ZjUhaW1wb3J0YW50fWEuaGFzLXRleHQtbGlnaHQ6Zm9jdXMsYS5oYXMtdGV4dC1saWdodDpob3Zlcntjb2xvcjojZGJkYmRiIWltcG9ydGFudH0uaGFzLWJhY2tncm91bmQtbGlnaHR7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1IWltcG9ydGFudH0uaGFzLXRleHQtZGFya3tjb2xvcjojMzYzNjM2IWltcG9ydGFudH1hLmhhcy10ZXh0LWRhcms6Zm9jdXMsYS5oYXMtdGV4dC1kYXJrOmhvdmVye2NvbG9yOiMxYzFjMWMhaW1wb3J0YW50fS5oYXMtYmFja2dyb3VuZC1kYXJre2JhY2tncm91bmQtY29sb3I6IzM2MzYzNiFpbXBvcnRhbnR9Lmhhcy10ZXh0LXByaW1hcnl7Y29sb3I6IzAwZDFiMiFpbXBvcnRhbnR9YS5oYXMtdGV4dC1wcmltYXJ5OmZvY3VzLGEuaGFzLXRleHQtcHJpbWFyeTpob3Zlcntjb2xvcjojMDA5ZTg2IWltcG9ydGFudH0uaGFzLWJhY2tncm91bmQtcHJpbWFyeXtiYWNrZ3JvdW5kLWNvbG9yOiMwMGQxYjIhaW1wb3J0YW50fS5oYXMtdGV4dC1saW5re2NvbG9yOiMzMjczZGMhaW1wb3J0YW50fWEuaGFzLXRleHQtbGluazpmb2N1cyxhLmhhcy10ZXh0LWxpbms6aG92ZXJ7Y29sb3I6IzIwNWJiYyFpbXBvcnRhbnR9Lmhhcy1iYWNrZ3JvdW5kLWxpbmt7YmFja2dyb3VuZC1jb2xvcjojMzI3M2RjIWltcG9ydGFudH0uaGFzLXRleHQtaW5mb3tjb2xvcjojMjA5Y2VlIWltcG9ydGFudH1hLmhhcy10ZXh0LWluZm86Zm9jdXMsYS5oYXMtdGV4dC1pbmZvOmhvdmVye2NvbG9yOiMwZjgxY2MhaW1wb3J0YW50fS5oYXMtYmFja2dyb3VuZC1pbmZve2JhY2tncm91bmQtY29sb3I6IzIwOWNlZSFpbXBvcnRhbnR9Lmhhcy10ZXh0LXN1Y2Nlc3N7Y29sb3I6IzIzZDE2MCFpbXBvcnRhbnR9YS5oYXMtdGV4dC1zdWNjZXNzOmZvY3VzLGEuaGFzLXRleHQtc3VjY2Vzczpob3Zlcntjb2xvcjojMWNhNjRjIWltcG9ydGFudH0uaGFzLWJhY2tncm91bmQtc3VjY2Vzc3tiYWNrZ3JvdW5kLWNvbG9yOiMyM2QxNjAhaW1wb3J0YW50fS5oYXMtdGV4dC13YXJuaW5ne2NvbG9yOiNmZmRkNTchaW1wb3J0YW50fWEuaGFzLXRleHQtd2FybmluZzpmb2N1cyxhLmhhcy10ZXh0LXdhcm5pbmc6aG92ZXJ7Y29sb3I6I2ZmZDMyNCFpbXBvcnRhbnR9Lmhhcy1iYWNrZ3JvdW5kLXdhcm5pbmd7YmFja2dyb3VuZC1jb2xvcjojZmZkZDU3IWltcG9ydGFudH0uaGFzLXRleHQtZGFuZ2Vye2NvbG9yOiNmZjM4NjAhaW1wb3J0YW50fWEuaGFzLXRleHQtZGFuZ2VyOmZvY3VzLGEuaGFzLXRleHQtZGFuZ2VyOmhvdmVye2NvbG9yOiNmZjA1MzchaW1wb3J0YW50fS5oYXMtYmFja2dyb3VuZC1kYW5nZXJ7YmFja2dyb3VuZC1jb2xvcjojZmYzODYwIWltcG9ydGFudH0uaGFzLXRleHQtYmxhY2stYmlze2NvbG9yOiMxMjEyMTIhaW1wb3J0YW50fS5oYXMtYmFja2dyb3VuZC1ibGFjay1iaXN7YmFja2dyb3VuZC1jb2xvcjojMTIxMjEyIWltcG9ydGFudH0uaGFzLXRleHQtYmxhY2stdGVye2NvbG9yOiMyNDI0MjQhaW1wb3J0YW50fS5oYXMtYmFja2dyb3VuZC1ibGFjay10ZXJ7YmFja2dyb3VuZC1jb2xvcjojMjQyNDI0IWltcG9ydGFudH0uaGFzLXRleHQtZ3JleS1kYXJrZXJ7Y29sb3I6IzM2MzYzNiFpbXBvcnRhbnR9Lmhhcy1iYWNrZ3JvdW5kLWdyZXktZGFya2Vye2JhY2tncm91bmQtY29sb3I6IzM2MzYzNiFpbXBvcnRhbnR9Lmhhcy10ZXh0LWdyZXktZGFya3tjb2xvcjojNGE0YTRhIWltcG9ydGFudH0uaGFzLWJhY2tncm91bmQtZ3JleS1kYXJre2JhY2tncm91bmQtY29sb3I6IzRhNGE0YSFpbXBvcnRhbnR9Lmhhcy10ZXh0LWdyZXl7Y29sb3I6IzdhN2E3YSFpbXBvcnRhbnR9Lmhhcy1iYWNrZ3JvdW5kLWdyZXl7YmFja2dyb3VuZC1jb2xvcjojN2E3YTdhIWltcG9ydGFudH0uaGFzLXRleHQtZ3JleS1saWdodHtjb2xvcjojYjViNWI1IWltcG9ydGFudH0uaGFzLWJhY2tncm91bmQtZ3JleS1saWdodHtiYWNrZ3JvdW5kLWNvbG9yOiNiNWI1YjUhaW1wb3J0YW50fS5oYXMtdGV4dC1ncmV5LWxpZ2h0ZXJ7Y29sb3I6I2RiZGJkYiFpbXBvcnRhbnR9Lmhhcy1iYWNrZ3JvdW5kLWdyZXktbGlnaHRlcntiYWNrZ3JvdW5kLWNvbG9yOiNkYmRiZGIhaW1wb3J0YW50fS5oYXMtdGV4dC13aGl0ZS10ZXJ7Y29sb3I6I2Y1ZjVmNSFpbXBvcnRhbnR9Lmhhcy1iYWNrZ3JvdW5kLXdoaXRlLXRlcntiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjUhaW1wb3J0YW50fS5oYXMtdGV4dC13aGl0ZS1iaXN7Y29sb3I6I2ZhZmFmYSFpbXBvcnRhbnR9Lmhhcy1iYWNrZ3JvdW5kLXdoaXRlLWJpc3tiYWNrZ3JvdW5kLWNvbG9yOiNmYWZhZmEhaW1wb3J0YW50fS5oYXMtdGV4dC13ZWlnaHQtbGlnaHR7Zm9udC13ZWlnaHQ6MzAwIWltcG9ydGFudH0uaGFzLXRleHQtd2VpZ2h0LW5vcm1hbHtmb250LXdlaWdodDo0MDAhaW1wb3J0YW50fS5oYXMtdGV4dC13ZWlnaHQtc2VtaWJvbGR7Zm9udC13ZWlnaHQ6NjAwIWltcG9ydGFudH0uaGFzLXRleHQtd2VpZ2h0LWJvbGR7Zm9udC13ZWlnaHQ6NzAwIWltcG9ydGFudH0uaXMtZmFtaWx5LXByaW1hcnl7Zm9udC1mYW1pbHk6QmxpbmtNYWNTeXN0ZW1Gb250LC1hcHBsZS1zeXN0ZW0sXFxcIlNlZ29lIFVJXFxcIixSb2JvdG8sT3h5Z2VuLFVidW50dSxDYW50YXJlbGwsXFxcIkZpcmEgU2Fuc1xcXCIsXFxcIkRyb2lkIFNhbnNcXFwiLFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWYhaW1wb3J0YW50fS5pcy1mYW1pbHktc2Vjb25kYXJ5e2ZvbnQtZmFtaWx5OkJsaW5rTWFjU3lzdGVtRm9udCwtYXBwbGUtc3lzdGVtLFxcXCJTZWdvZSBVSVxcXCIsUm9ib3RvLE94eWdlbixVYnVudHUsQ2FudGFyZWxsLFxcXCJGaXJhIFNhbnNcXFwiLFxcXCJEcm9pZCBTYW5zXFxcIixcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmIWltcG9ydGFudH0uaXMtZmFtaWx5LXNhbnMtc2VyaWZ7Zm9udC1mYW1pbHk6QmxpbmtNYWNTeXN0ZW1Gb250LC1hcHBsZS1zeXN0ZW0sXFxcIlNlZ29lIFVJXFxcIixSb2JvdG8sT3h5Z2VuLFVidW50dSxDYW50YXJlbGwsXFxcIkZpcmEgU2Fuc1xcXCIsXFxcIkRyb2lkIFNhbnNcXFwiLFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWYhaW1wb3J0YW50fS5pcy1mYW1pbHktbW9ub3NwYWNle2ZvbnQtZmFtaWx5Om1vbm9zcGFjZSFpbXBvcnRhbnR9LmlzLWZhbWlseS1jb2Rle2ZvbnQtZmFtaWx5Om1vbm9zcGFjZSFpbXBvcnRhbnR9LmlzLWJsb2Nre2Rpc3BsYXk6YmxvY2shaW1wb3J0YW50fUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpey5pcy1ibG9jay1tb2JpbGV7ZGlzcGxheTpibG9jayFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY5cHgpLHByaW50ey5pcy1ibG9jay10YWJsZXR7ZGlzcGxheTpibG9jayFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY5cHgpIGFuZCAobWF4LXdpZHRoOjEwODdweCl7LmlzLWJsb2NrLXRhYmxldC1vbmx5e2Rpc3BsYXk6YmxvY2shaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEwODdweCl7LmlzLWJsb2NrLXRvdWNoe2Rpc3BsYXk6YmxvY2shaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwODhweCl7LmlzLWJsb2NrLWRlc2t0b3B7ZGlzcGxheTpibG9jayFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTA4OHB4KSBhbmQgKG1heC13aWR0aDoxMjc5cHgpey5pcy1ibG9jay1kZXNrdG9wLW9ubHl7ZGlzcGxheTpibG9jayFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTI4MHB4KXsuaXMtYmxvY2std2lkZXNjcmVlbntkaXNwbGF5OmJsb2NrIWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMjgwcHgpIGFuZCAobWF4LXdpZHRoOjE0NzFweCl7LmlzLWJsb2NrLXdpZGVzY3JlZW4tb25seXtkaXNwbGF5OmJsb2NrIWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxNDcycHgpey5pcy1ibG9jay1mdWxsaGR7ZGlzcGxheTpibG9jayFpbXBvcnRhbnR9fS5pcy1mbGV4e2Rpc3BsYXk6ZmxleCFpbXBvcnRhbnR9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCl7LmlzLWZsZXgtbW9iaWxle2Rpc3BsYXk6ZmxleCFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY5cHgpLHByaW50ey5pcy1mbGV4LXRhYmxldHtkaXNwbGF5OmZsZXghaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OXB4KSBhbmQgKG1heC13aWR0aDoxMDg3cHgpey5pcy1mbGV4LXRhYmxldC1vbmx5e2Rpc3BsYXk6ZmxleCFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTA4N3B4KXsuaXMtZmxleC10b3VjaHtkaXNwbGF5OmZsZXghaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwODhweCl7LmlzLWZsZXgtZGVza3RvcHtkaXNwbGF5OmZsZXghaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwODhweCkgYW5kIChtYXgtd2lkdGg6MTI3OXB4KXsuaXMtZmxleC1kZXNrdG9wLW9ubHl7ZGlzcGxheTpmbGV4IWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMjgwcHgpey5pcy1mbGV4LXdpZGVzY3JlZW57ZGlzcGxheTpmbGV4IWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMjgwcHgpIGFuZCAobWF4LXdpZHRoOjE0NzFweCl7LmlzLWZsZXgtd2lkZXNjcmVlbi1vbmx5e2Rpc3BsYXk6ZmxleCFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTQ3MnB4KXsuaXMtZmxleC1mdWxsaGR7ZGlzcGxheTpmbGV4IWltcG9ydGFudH19LmlzLWlubGluZXtkaXNwbGF5OmlubGluZSFpbXBvcnRhbnR9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCl7LmlzLWlubGluZS1tb2JpbGV7ZGlzcGxheTppbmxpbmUhaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OXB4KSxwcmludHsuaXMtaW5saW5lLXRhYmxldHtkaXNwbGF5OmlubGluZSFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY5cHgpIGFuZCAobWF4LXdpZHRoOjEwODdweCl7LmlzLWlubGluZS10YWJsZXQtb25seXtkaXNwbGF5OmlubGluZSFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTA4N3B4KXsuaXMtaW5saW5lLXRvdWNoe2Rpc3BsYXk6aW5saW5lIWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDg4cHgpey5pcy1pbmxpbmUtZGVza3RvcHtkaXNwbGF5OmlubGluZSFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTA4OHB4KSBhbmQgKG1heC13aWR0aDoxMjc5cHgpey5pcy1pbmxpbmUtZGVza3RvcC1vbmx5e2Rpc3BsYXk6aW5saW5lIWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMjgwcHgpey5pcy1pbmxpbmUtd2lkZXNjcmVlbntkaXNwbGF5OmlubGluZSFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTI4MHB4KSBhbmQgKG1heC13aWR0aDoxNDcxcHgpey5pcy1pbmxpbmUtd2lkZXNjcmVlbi1vbmx5e2Rpc3BsYXk6aW5saW5lIWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxNDcycHgpey5pcy1pbmxpbmUtZnVsbGhke2Rpc3BsYXk6aW5saW5lIWltcG9ydGFudH19LmlzLWlubGluZS1ibG9ja3tkaXNwbGF5OmlubGluZS1ibG9jayFpbXBvcnRhbnR9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCl7LmlzLWlubGluZS1ibG9jay1tb2JpbGV7ZGlzcGxheTppbmxpbmUtYmxvY2shaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OXB4KSxwcmludHsuaXMtaW5saW5lLWJsb2NrLXRhYmxldHtkaXNwbGF5OmlubGluZS1ibG9jayFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY5cHgpIGFuZCAobWF4LXdpZHRoOjEwODdweCl7LmlzLWlubGluZS1ibG9jay10YWJsZXQtb25seXtkaXNwbGF5OmlubGluZS1ibG9jayFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTA4N3B4KXsuaXMtaW5saW5lLWJsb2NrLXRvdWNoe2Rpc3BsYXk6aW5saW5lLWJsb2NrIWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDg4cHgpey5pcy1pbmxpbmUtYmxvY2stZGVza3RvcHtkaXNwbGF5OmlubGluZS1ibG9jayFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTA4OHB4KSBhbmQgKG1heC13aWR0aDoxMjc5cHgpey5pcy1pbmxpbmUtYmxvY2stZGVza3RvcC1vbmx5e2Rpc3BsYXk6aW5saW5lLWJsb2NrIWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMjgwcHgpey5pcy1pbmxpbmUtYmxvY2std2lkZXNjcmVlbntkaXNwbGF5OmlubGluZS1ibG9jayFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTI4MHB4KSBhbmQgKG1heC13aWR0aDoxNDcxcHgpey5pcy1pbmxpbmUtYmxvY2std2lkZXNjcmVlbi1vbmx5e2Rpc3BsYXk6aW5saW5lLWJsb2NrIWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxNDcycHgpey5pcy1pbmxpbmUtYmxvY2stZnVsbGhke2Rpc3BsYXk6aW5saW5lLWJsb2NrIWltcG9ydGFudH19LmlzLWlubGluZS1mbGV4e2Rpc3BsYXk6aW5saW5lLWZsZXghaW1wb3J0YW50fUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpey5pcy1pbmxpbmUtZmxleC1tb2JpbGV7ZGlzcGxheTppbmxpbmUtZmxleCFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY5cHgpLHByaW50ey5pcy1pbmxpbmUtZmxleC10YWJsZXR7ZGlzcGxheTppbmxpbmUtZmxleCFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY5cHgpIGFuZCAobWF4LXdpZHRoOjEwODdweCl7LmlzLWlubGluZS1mbGV4LXRhYmxldC1vbmx5e2Rpc3BsYXk6aW5saW5lLWZsZXghaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEwODdweCl7LmlzLWlubGluZS1mbGV4LXRvdWNoe2Rpc3BsYXk6aW5saW5lLWZsZXghaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwODhweCl7LmlzLWlubGluZS1mbGV4LWRlc2t0b3B7ZGlzcGxheTppbmxpbmUtZmxleCFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTA4OHB4KSBhbmQgKG1heC13aWR0aDoxMjc5cHgpey5pcy1pbmxpbmUtZmxleC1kZXNrdG9wLW9ubHl7ZGlzcGxheTppbmxpbmUtZmxleCFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTI4MHB4KXsuaXMtaW5saW5lLWZsZXgtd2lkZXNjcmVlbntkaXNwbGF5OmlubGluZS1mbGV4IWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMjgwcHgpIGFuZCAobWF4LXdpZHRoOjE0NzFweCl7LmlzLWlubGluZS1mbGV4LXdpZGVzY3JlZW4tb25seXtkaXNwbGF5OmlubGluZS1mbGV4IWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxNDcycHgpey5pcy1pbmxpbmUtZmxleC1mdWxsaGR7ZGlzcGxheTppbmxpbmUtZmxleCFpbXBvcnRhbnR9fS5pcy1oaWRkZW57ZGlzcGxheTpub25lIWltcG9ydGFudH0uaXMtc3Itb25seXtib3JkZXI6bm9uZSFpbXBvcnRhbnQ7Y2xpcDpyZWN0KDAsMCwwLDApIWltcG9ydGFudDtoZWlnaHQ6LjAxZW0haW1wb3J0YW50O292ZXJmbG93OmhpZGRlbiFpbXBvcnRhbnQ7cGFkZGluZzowIWltcG9ydGFudDtwb3NpdGlvbjphYnNvbHV0ZSFpbXBvcnRhbnQ7d2hpdGUtc3BhY2U6bm93cmFwIWltcG9ydGFudDt3aWR0aDouMDFlbSFpbXBvcnRhbnR9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCl7LmlzLWhpZGRlbi1tb2JpbGV7ZGlzcGxheTpub25lIWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjlweCkscHJpbnR7LmlzLWhpZGRlbi10YWJsZXR7ZGlzcGxheTpub25lIWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjlweCkgYW5kIChtYXgtd2lkdGg6MTA4N3B4KXsuaXMtaGlkZGVuLXRhYmxldC1vbmx5e2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTA4N3B4KXsuaXMtaGlkZGVuLXRvdWNoe2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTA4OHB4KXsuaXMtaGlkZGVuLWRlc2t0b3B7ZGlzcGxheTpub25lIWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDg4cHgpIGFuZCAobWF4LXdpZHRoOjEyNzlweCl7LmlzLWhpZGRlbi1kZXNrdG9wLW9ubHl7ZGlzcGxheTpub25lIWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMjgwcHgpey5pcy1oaWRkZW4td2lkZXNjcmVlbntkaXNwbGF5Om5vbmUhaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEyODBweCkgYW5kIChtYXgtd2lkdGg6MTQ3MXB4KXsuaXMtaGlkZGVuLXdpZGVzY3JlZW4tb25seXtkaXNwbGF5Om5vbmUhaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjE0NzJweCl7LmlzLWhpZGRlbi1mdWxsaGR7ZGlzcGxheTpub25lIWltcG9ydGFudH19LmlzLWludmlzaWJsZXt2aXNpYmlsaXR5OmhpZGRlbiFpbXBvcnRhbnR9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCl7LmlzLWludmlzaWJsZS1tb2JpbGV7dmlzaWJpbGl0eTpoaWRkZW4haW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OXB4KSxwcmludHsuaXMtaW52aXNpYmxlLXRhYmxldHt2aXNpYmlsaXR5OmhpZGRlbiFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY5cHgpIGFuZCAobWF4LXdpZHRoOjEwODdweCl7LmlzLWludmlzaWJsZS10YWJsZXQtb25seXt2aXNpYmlsaXR5OmhpZGRlbiFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTA4N3B4KXsuaXMtaW52aXNpYmxlLXRvdWNoe3Zpc2liaWxpdHk6aGlkZGVuIWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDg4cHgpey5pcy1pbnZpc2libGUtZGVza3RvcHt2aXNpYmlsaXR5OmhpZGRlbiFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTA4OHB4KSBhbmQgKG1heC13aWR0aDoxMjc5cHgpey5pcy1pbnZpc2libGUtZGVza3RvcC1vbmx5e3Zpc2liaWxpdHk6aGlkZGVuIWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMjgwcHgpey5pcy1pbnZpc2libGUtd2lkZXNjcmVlbnt2aXNpYmlsaXR5OmhpZGRlbiFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTI4MHB4KSBhbmQgKG1heC13aWR0aDoxNDcxcHgpey5pcy1pbnZpc2libGUtd2lkZXNjcmVlbi1vbmx5e3Zpc2liaWxpdHk6aGlkZGVuIWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxNDcycHgpey5pcy1pbnZpc2libGUtZnVsbGhke3Zpc2liaWxpdHk6aGlkZGVuIWltcG9ydGFudH19LmlzLW1hcmdpbmxlc3N7bWFyZ2luOjAhaW1wb3J0YW50fS5pcy1wYWRkaW5nbGVzc3twYWRkaW5nOjAhaW1wb3J0YW50fS5pcy1yYWRpdXNsZXNze2JvcmRlci1yYWRpdXM6MCFpbXBvcnRhbnR9LmlzLXNoYWRvd2xlc3N7Ym94LXNoYWRvdzpub25lIWltcG9ydGFudH0uYm94e2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItcmFkaXVzOjZweDtib3gtc2hhZG93OjAgMnB4IDNweCByZ2JhKDEwLDEwLDEwLC4xKSwwIDAgMCAxcHggcmdiYSgxMCwxMCwxMCwuMSk7Y29sb3I6IzRhNGE0YTtkaXNwbGF5OmJsb2NrO3BhZGRpbmc6MS4yNXJlbX1hLmJveDpmb2N1cyxhLmJveDpob3Zlcntib3gtc2hhZG93OjAgMnB4IDNweCByZ2JhKDEwLDEwLDEwLC4xKSwwIDAgMCAxcHggIzMyNzNkY31hLmJveDphY3RpdmV7Ym94LXNoYWRvdzppbnNldCAwIDFweCAycHggcmdiYSgxMCwxMCwxMCwuMiksMCAwIDAgMXB4ICMzMjczZGN9LmJ1dHRvbntiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyLWNvbG9yOiNkYmRiZGI7Ym9yZGVyLXdpZHRoOjFweDtjb2xvcjojMzYzNjM2O2N1cnNvcjpwb2ludGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7cGFkZGluZy1ib3R0b206Y2FsYyguMzc1ZW0gLSAxcHgpO3BhZGRpbmctbGVmdDouNzVlbTtwYWRkaW5nLXJpZ2h0Oi43NWVtO3BhZGRpbmctdG9wOmNhbGMoLjM3NWVtIC0gMXB4KTt0ZXh0LWFsaWduOmNlbnRlcjt3aGl0ZS1zcGFjZTpub3dyYXB9LmJ1dHRvbiBzdHJvbmd7Y29sb3I6aW5oZXJpdH0uYnV0dG9uIC5pY29uLC5idXR0b24gLmljb24uaXMtbGFyZ2UsLmJ1dHRvbiAuaWNvbi5pcy1tZWRpdW0sLmJ1dHRvbiAuaWNvbi5pcy1zbWFsbHtoZWlnaHQ6MS41ZW07d2lkdGg6MS41ZW19LmJ1dHRvbiAuaWNvbjpmaXJzdC1jaGlsZDpub3QoOmxhc3QtY2hpbGQpe21hcmdpbi1sZWZ0OmNhbGMoLS4zNzVlbSAtIDFweCk7bWFyZ2luLXJpZ2h0Oi4xODc1ZW19LmJ1dHRvbiAuaWNvbjpsYXN0LWNoaWxkOm5vdCg6Zmlyc3QtY2hpbGQpe21hcmdpbi1sZWZ0Oi4xODc1ZW07bWFyZ2luLXJpZ2h0OmNhbGMoLS4zNzVlbSAtIDFweCl9LmJ1dHRvbiAuaWNvbjpmaXJzdC1jaGlsZDpsYXN0LWNoaWxke21hcmdpbi1sZWZ0OmNhbGMoLS4zNzVlbSAtIDFweCk7bWFyZ2luLXJpZ2h0OmNhbGMoLS4zNzVlbSAtIDFweCl9LmJ1dHRvbi5pcy1ob3ZlcmVkLC5idXR0b246aG92ZXJ7Ym9yZGVyLWNvbG9yOiNiNWI1YjU7Y29sb3I6IzM2MzYzNn0uYnV0dG9uLmlzLWZvY3VzZWQsLmJ1dHRvbjpmb2N1c3tib3JkZXItY29sb3I6IzMyNzNkYztjb2xvcjojMzYzNjM2fS5idXR0b24uaXMtZm9jdXNlZDpub3QoOmFjdGl2ZSksLmJ1dHRvbjpmb2N1czpub3QoOmFjdGl2ZSl7Ym94LXNoYWRvdzowIDAgMCAuMTI1ZW0gcmdiYSg1MCwxMTUsMjIwLC4yNSl9LmJ1dHRvbi5pcy1hY3RpdmUsLmJ1dHRvbjphY3RpdmV7Ym9yZGVyLWNvbG9yOiM0YTRhNGE7Y29sb3I6IzM2MzYzNn0uYnV0dG9uLmlzLXRleHR7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6IzRhNGE0YTt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lfS5idXR0b24uaXMtdGV4dC5pcy1mb2N1c2VkLC5idXR0b24uaXMtdGV4dC5pcy1ob3ZlcmVkLC5idXR0b24uaXMtdGV4dDpmb2N1cywuYnV0dG9uLmlzLXRleHQ6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O2NvbG9yOiMzNjM2MzZ9LmJ1dHRvbi5pcy10ZXh0LmlzLWFjdGl2ZSwuYnV0dG9uLmlzLXRleHQ6YWN0aXZle2JhY2tncm91bmQtY29sb3I6I2U4ZThlODtjb2xvcjojMzYzNjM2fS5idXR0b24uaXMtdGV4dFtkaXNhYmxlZF0sZmllbGRzZXRbZGlzYWJsZWRdIC5idXR0b24uaXMtdGV4dHtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtib3gtc2hhZG93Om5vbmV9LmJ1dHRvbi5pcy13aGl0ZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiMwYTBhMGF9LmJ1dHRvbi5pcy13aGl0ZS5pcy1ob3ZlcmVkLC5idXR0b24uaXMtd2hpdGU6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZjlmOWY5O2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojMGEwYTBhfS5idXR0b24uaXMtd2hpdGUuaXMtZm9jdXNlZCwuYnV0dG9uLmlzLXdoaXRlOmZvY3Vze2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojMGEwYTBhfS5idXR0b24uaXMtd2hpdGUuaXMtZm9jdXNlZDpub3QoOmFjdGl2ZSksLmJ1dHRvbi5pcy13aGl0ZTpmb2N1czpub3QoOmFjdGl2ZSl7Ym94LXNoYWRvdzowIDAgMCAuMTI1ZW0gcmdiYSgyNTUsMjU1LDI1NSwuMjUpfS5idXR0b24uaXMtd2hpdGUuaXMtYWN0aXZlLC5idXR0b24uaXMtd2hpdGU6YWN0aXZle2JhY2tncm91bmQtY29sb3I6I2YyZjJmMjtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6IzBhMGEwYX0uYnV0dG9uLmlzLXdoaXRlW2Rpc2FibGVkXSxmaWVsZHNldFtkaXNhYmxlZF0gLmJ1dHRvbi5pcy13aGl0ZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2JveC1zaGFkb3c6bm9uZX0uYnV0dG9uLmlzLXdoaXRlLmlzLWludmVydGVke2JhY2tncm91bmQtY29sb3I6IzBhMGEwYTtjb2xvcjojZmZmfS5idXR0b24uaXMtd2hpdGUuaXMtaW52ZXJ0ZWQ6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMDAwfS5idXR0b24uaXMtd2hpdGUuaXMtaW52ZXJ0ZWRbZGlzYWJsZWRdLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnV0dG9uLmlzLXdoaXRlLmlzLWludmVydGVke2JhY2tncm91bmQtY29sb3I6IzBhMGEwYTtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Ym94LXNoYWRvdzpub25lO2NvbG9yOiNmZmZ9LmJ1dHRvbi5pcy13aGl0ZS5pcy1sb2FkaW5nOjphZnRlcntib3JkZXItY29sb3I6dHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzBhMGEwYSAjMGEwYTBhIWltcG9ydGFudH0uYnV0dG9uLmlzLXdoaXRlLmlzLW91dGxpbmVke2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWNvbG9yOiNmZmY7Y29sb3I6I2ZmZn0uYnV0dG9uLmlzLXdoaXRlLmlzLW91dGxpbmVkOmZvY3VzLC5idXR0b24uaXMtd2hpdGUuaXMtb3V0bGluZWQ6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlci1jb2xvcjojZmZmO2NvbG9yOiMwYTBhMGF9LmJ1dHRvbi5pcy13aGl0ZS5pcy1vdXRsaW5lZC5pcy1sb2FkaW5nOjphZnRlcntib3JkZXItY29sb3I6dHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2ZmZiAjZmZmIWltcG9ydGFudH0uYnV0dG9uLmlzLXdoaXRlLmlzLW91dGxpbmVkW2Rpc2FibGVkXSxmaWVsZHNldFtkaXNhYmxlZF0gLmJ1dHRvbi5pcy13aGl0ZS5pcy1vdXRsaW5lZHtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1jb2xvcjojZmZmO2JveC1zaGFkb3c6bm9uZTtjb2xvcjojZmZmfS5idXR0b24uaXMtd2hpdGUuaXMtaW52ZXJ0ZWQuaXMtb3V0bGluZWR7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItY29sb3I6IzBhMGEwYTtjb2xvcjojMGEwYTBhfS5idXR0b24uaXMtd2hpdGUuaXMtaW52ZXJ0ZWQuaXMtb3V0bGluZWQ6Zm9jdXMsLmJ1dHRvbi5pcy13aGl0ZS5pcy1pbnZlcnRlZC5pcy1vdXRsaW5lZDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiMwYTBhMGE7Y29sb3I6I2ZmZn0uYnV0dG9uLmlzLXdoaXRlLmlzLWludmVydGVkLmlzLW91dGxpbmVkW2Rpc2FibGVkXSxmaWVsZHNldFtkaXNhYmxlZF0gLmJ1dHRvbi5pcy13aGl0ZS5pcy1pbnZlcnRlZC5pcy1vdXRsaW5lZHtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1jb2xvcjojMGEwYTBhO2JveC1zaGFkb3c6bm9uZTtjb2xvcjojMGEwYTBhfS5idXR0b24uaXMtYmxhY2t7YmFja2dyb3VuZC1jb2xvcjojMGEwYTBhO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZmZmfS5idXR0b24uaXMtYmxhY2suaXMtaG92ZXJlZCwuYnV0dG9uLmlzLWJsYWNrOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzA0MDQwNDtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6I2ZmZn0uYnV0dG9uLmlzLWJsYWNrLmlzLWZvY3VzZWQsLmJ1dHRvbi5pcy1ibGFjazpmb2N1c3tib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6I2ZmZn0uYnV0dG9uLmlzLWJsYWNrLmlzLWZvY3VzZWQ6bm90KDphY3RpdmUpLC5idXR0b24uaXMtYmxhY2s6Zm9jdXM6bm90KDphY3RpdmUpe2JveC1zaGFkb3c6MCAwIDAgLjEyNWVtIHJnYmEoMTAsMTAsMTAsLjI1KX0uYnV0dG9uLmlzLWJsYWNrLmlzLWFjdGl2ZSwuYnV0dG9uLmlzLWJsYWNrOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiNmZmZ9LmJ1dHRvbi5pcy1ibGFja1tkaXNhYmxlZF0sZmllbGRzZXRbZGlzYWJsZWRdIC5idXR0b24uaXMtYmxhY2t7YmFja2dyb3VuZC1jb2xvcjojMGEwYTBhO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtib3gtc2hhZG93Om5vbmV9LmJ1dHRvbi5pcy1ibGFjay5pcy1pbnZlcnRlZHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6IzBhMGEwYX0uYnV0dG9uLmlzLWJsYWNrLmlzLWludmVydGVkOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2YyZjJmMn0uYnV0dG9uLmlzLWJsYWNrLmlzLWludmVydGVkW2Rpc2FibGVkXSxmaWVsZHNldFtkaXNhYmxlZF0gLmJ1dHRvbi5pcy1ibGFjay5pcy1pbnZlcnRlZHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2JveC1zaGFkb3c6bm9uZTtjb2xvcjojMGEwYTBhfS5idXR0b24uaXMtYmxhY2suaXMtbG9hZGluZzo6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNmZmYgI2ZmZiFpbXBvcnRhbnR9LmJ1dHRvbi5pcy1ibGFjay5pcy1vdXRsaW5lZHtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1jb2xvcjojMGEwYTBhO2NvbG9yOiMwYTBhMGF9LmJ1dHRvbi5pcy1ibGFjay5pcy1vdXRsaW5lZDpmb2N1cywuYnV0dG9uLmlzLWJsYWNrLmlzLW91dGxpbmVkOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzBhMGEwYTtib3JkZXItY29sb3I6IzBhMGEwYTtjb2xvcjojZmZmfS5idXR0b24uaXMtYmxhY2suaXMtb3V0bGluZWQuaXMtbG9hZGluZzo6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICMwYTBhMGEgIzBhMGEwYSFpbXBvcnRhbnR9LmJ1dHRvbi5pcy1ibGFjay5pcy1vdXRsaW5lZFtkaXNhYmxlZF0sZmllbGRzZXRbZGlzYWJsZWRdIC5idXR0b24uaXMtYmxhY2suaXMtb3V0bGluZWR7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItY29sb3I6IzBhMGEwYTtib3gtc2hhZG93Om5vbmU7Y29sb3I6IzBhMGEwYX0uYnV0dG9uLmlzLWJsYWNrLmlzLWludmVydGVkLmlzLW91dGxpbmVke2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWNvbG9yOiNmZmY7Y29sb3I6I2ZmZn0uYnV0dG9uLmlzLWJsYWNrLmlzLWludmVydGVkLmlzLW91dGxpbmVkOmZvY3VzLC5idXR0b24uaXMtYmxhY2suaXMtaW52ZXJ0ZWQuaXMtb3V0bGluZWQ6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbG9yOiMwYTBhMGF9LmJ1dHRvbi5pcy1ibGFjay5pcy1pbnZlcnRlZC5pcy1vdXRsaW5lZFtkaXNhYmxlZF0sZmllbGRzZXRbZGlzYWJsZWRdIC5idXR0b24uaXMtYmxhY2suaXMtaW52ZXJ0ZWQuaXMtb3V0bGluZWR7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItY29sb3I6I2ZmZjtib3gtc2hhZG93Om5vbmU7Y29sb3I6I2ZmZn0uYnV0dG9uLmlzLWxpZ2h0e2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6IzM2MzYzNn0uYnV0dG9uLmlzLWxpZ2h0LmlzLWhvdmVyZWQsLmJ1dHRvbi5pcy1saWdodDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNlZWU7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiMzNjM2MzZ9LmJ1dHRvbi5pcy1saWdodC5pcy1mb2N1c2VkLC5idXR0b24uaXMtbGlnaHQ6Zm9jdXN7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiMzNjM2MzZ9LmJ1dHRvbi5pcy1saWdodC5pcy1mb2N1c2VkOm5vdCg6YWN0aXZlKSwuYnV0dG9uLmlzLWxpZ2h0OmZvY3VzOm5vdCg6YWN0aXZlKXtib3gtc2hhZG93OjAgMCAwIC4xMjVlbSByZ2JhKDI0NSwyNDUsMjQ1LC4yNSl9LmJ1dHRvbi5pcy1saWdodC5pcy1hY3RpdmUsLmJ1dHRvbi5pcy1saWdodDphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojZThlOGU4O2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojMzYzNjM2fS5idXR0b24uaXMtbGlnaHRbZGlzYWJsZWRdLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnV0dG9uLmlzLWxpZ2h0e2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Ym94LXNoYWRvdzpub25lfS5idXR0b24uaXMtbGlnaHQuaXMtaW52ZXJ0ZWR7YmFja2dyb3VuZC1jb2xvcjojMzYzNjM2O2NvbG9yOiNmNWY1ZjV9LmJ1dHRvbi5pcy1saWdodC5pcy1pbnZlcnRlZDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiMyOTI5Mjl9LmJ1dHRvbi5pcy1saWdodC5pcy1pbnZlcnRlZFtkaXNhYmxlZF0sZmllbGRzZXRbZGlzYWJsZWRdIC5idXR0b24uaXMtbGlnaHQuaXMtaW52ZXJ0ZWR7YmFja2dyb3VuZC1jb2xvcjojMzYzNjM2O2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtib3gtc2hhZG93Om5vbmU7Y29sb3I6I2Y1ZjVmNX0uYnV0dG9uLmlzLWxpZ2h0LmlzLWxvYWRpbmc6OmFmdGVye2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjMzYzNjM2ICMzNjM2MzYhaW1wb3J0YW50fS5idXR0b24uaXMtbGlnaHQuaXMtb3V0bGluZWR7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItY29sb3I6I2Y1ZjVmNTtjb2xvcjojZjVmNWY1fS5idXR0b24uaXMtbGlnaHQuaXMtb3V0bGluZWQ6Zm9jdXMsLmJ1dHRvbi5pcy1saWdodC5pcy1vdXRsaW5lZDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7Ym9yZGVyLWNvbG9yOiNmNWY1ZjU7Y29sb3I6IzM2MzYzNn0uYnV0dG9uLmlzLWxpZ2h0LmlzLW91dGxpbmVkLmlzLWxvYWRpbmc6OmFmdGVye2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZjVmNWY1ICNmNWY1ZjUhaW1wb3J0YW50fS5idXR0b24uaXMtbGlnaHQuaXMtb3V0bGluZWRbZGlzYWJsZWRdLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnV0dG9uLmlzLWxpZ2h0LmlzLW91dGxpbmVke2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWNvbG9yOiNmNWY1ZjU7Ym94LXNoYWRvdzpub25lO2NvbG9yOiNmNWY1ZjV9LmJ1dHRvbi5pcy1saWdodC5pcy1pbnZlcnRlZC5pcy1vdXRsaW5lZHtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1jb2xvcjojMzYzNjM2O2NvbG9yOiMzNjM2MzZ9LmJ1dHRvbi5pcy1saWdodC5pcy1pbnZlcnRlZC5pcy1vdXRsaW5lZDpmb2N1cywuYnV0dG9uLmlzLWxpZ2h0LmlzLWludmVydGVkLmlzLW91dGxpbmVkOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzM2MzYzNjtjb2xvcjojZjVmNWY1fS5idXR0b24uaXMtbGlnaHQuaXMtaW52ZXJ0ZWQuaXMtb3V0bGluZWRbZGlzYWJsZWRdLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnV0dG9uLmlzLWxpZ2h0LmlzLWludmVydGVkLmlzLW91dGxpbmVke2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWNvbG9yOiMzNjM2MzY7Ym94LXNoYWRvdzpub25lO2NvbG9yOiMzNjM2MzZ9LmJ1dHRvbi5pcy1kYXJre2JhY2tncm91bmQtY29sb3I6IzM2MzYzNjtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6I2Y1ZjVmNX0uYnV0dG9uLmlzLWRhcmsuaXMtaG92ZXJlZCwuYnV0dG9uLmlzLWRhcms6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMmYyZjJmO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZjVmNWY1fS5idXR0b24uaXMtZGFyay5pcy1mb2N1c2VkLC5idXR0b24uaXMtZGFyazpmb2N1c3tib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6I2Y1ZjVmNX0uYnV0dG9uLmlzLWRhcmsuaXMtZm9jdXNlZDpub3QoOmFjdGl2ZSksLmJ1dHRvbi5pcy1kYXJrOmZvY3VzOm5vdCg6YWN0aXZlKXtib3gtc2hhZG93OjAgMCAwIC4xMjVlbSByZ2JhKDU0LDU0LDU0LC4yNSl9LmJ1dHRvbi5pcy1kYXJrLmlzLWFjdGl2ZSwuYnV0dG9uLmlzLWRhcms6YWN0aXZle2JhY2tncm91bmQtY29sb3I6IzI5MjkyOTtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6I2Y1ZjVmNX0uYnV0dG9uLmlzLWRhcmtbZGlzYWJsZWRdLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnV0dG9uLmlzLWRhcmt7YmFja2dyb3VuZC1jb2xvcjojMzYzNjM2O2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtib3gtc2hhZG93Om5vbmV9LmJ1dHRvbi5pcy1kYXJrLmlzLWludmVydGVke2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTtjb2xvcjojMzYzNjM2fS5idXR0b24uaXMtZGFyay5pcy1pbnZlcnRlZDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNlOGU4ZTh9LmJ1dHRvbi5pcy1kYXJrLmlzLWludmVydGVkW2Rpc2FibGVkXSxmaWVsZHNldFtkaXNhYmxlZF0gLmJ1dHRvbi5pcy1kYXJrLmlzLWludmVydGVke2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Ym94LXNoYWRvdzpub25lO2NvbG9yOiMzNjM2MzZ9LmJ1dHRvbi5pcy1kYXJrLmlzLWxvYWRpbmc6OmFmdGVye2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZjVmNWY1ICNmNWY1ZjUhaW1wb3J0YW50fS5idXR0b24uaXMtZGFyay5pcy1vdXRsaW5lZHtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1jb2xvcjojMzYzNjM2O2NvbG9yOiMzNjM2MzZ9LmJ1dHRvbi5pcy1kYXJrLmlzLW91dGxpbmVkOmZvY3VzLC5idXR0b24uaXMtZGFyay5pcy1vdXRsaW5lZDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiMzNjM2MzY7Ym9yZGVyLWNvbG9yOiMzNjM2MzY7Y29sb3I6I2Y1ZjVmNX0uYnV0dG9uLmlzLWRhcmsuaXMtb3V0bGluZWQuaXMtbG9hZGluZzo6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICMzNjM2MzYgIzM2MzYzNiFpbXBvcnRhbnR9LmJ1dHRvbi5pcy1kYXJrLmlzLW91dGxpbmVkW2Rpc2FibGVkXSxmaWVsZHNldFtkaXNhYmxlZF0gLmJ1dHRvbi5pcy1kYXJrLmlzLW91dGxpbmVke2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWNvbG9yOiMzNjM2MzY7Ym94LXNoYWRvdzpub25lO2NvbG9yOiMzNjM2MzZ9LmJ1dHRvbi5pcy1kYXJrLmlzLWludmVydGVkLmlzLW91dGxpbmVke2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWNvbG9yOiNmNWY1ZjU7Y29sb3I6I2Y1ZjVmNX0uYnV0dG9uLmlzLWRhcmsuaXMtaW52ZXJ0ZWQuaXMtb3V0bGluZWQ6Zm9jdXMsLmJ1dHRvbi5pcy1kYXJrLmlzLWludmVydGVkLmlzLW91dGxpbmVkOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTtjb2xvcjojMzYzNjM2fS5idXR0b24uaXMtZGFyay5pcy1pbnZlcnRlZC5pcy1vdXRsaW5lZFtkaXNhYmxlZF0sZmllbGRzZXRbZGlzYWJsZWRdIC5idXR0b24uaXMtZGFyay5pcy1pbnZlcnRlZC5pcy1vdXRsaW5lZHtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1jb2xvcjojZjVmNWY1O2JveC1zaGFkb3c6bm9uZTtjb2xvcjojZjVmNWY1fS5idXR0b24uaXMtcHJpbWFyeXtiYWNrZ3JvdW5kLWNvbG9yOiMwMGQxYjI7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiNmZmZ9LmJ1dHRvbi5pcy1wcmltYXJ5LmlzLWhvdmVyZWQsLmJ1dHRvbi5pcy1wcmltYXJ5OmhvdmVye2JhY2tncm91bmQtY29sb3I6IzAwYzRhNztib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6I2ZmZn0uYnV0dG9uLmlzLXByaW1hcnkuaXMtZm9jdXNlZCwuYnV0dG9uLmlzLXByaW1hcnk6Zm9jdXN7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiNmZmZ9LmJ1dHRvbi5pcy1wcmltYXJ5LmlzLWZvY3VzZWQ6bm90KDphY3RpdmUpLC5idXR0b24uaXMtcHJpbWFyeTpmb2N1czpub3QoOmFjdGl2ZSl7Ym94LXNoYWRvdzowIDAgMCAuMTI1ZW0gcmdiYSgwLDIwOSwxNzgsLjI1KX0uYnV0dG9uLmlzLXByaW1hcnkuaXMtYWN0aXZlLC5idXR0b24uaXMtcHJpbWFyeTphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojMDBiODljO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZmZmfS5idXR0b24uaXMtcHJpbWFyeVtkaXNhYmxlZF0sZmllbGRzZXRbZGlzYWJsZWRdIC5idXR0b24uaXMtcHJpbWFyeXtiYWNrZ3JvdW5kLWNvbG9yOiMwMGQxYjI7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2JveC1zaGFkb3c6bm9uZX0uYnV0dG9uLmlzLXByaW1hcnkuaXMtaW52ZXJ0ZWR7YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbG9yOiMwMGQxYjJ9LmJ1dHRvbi5pcy1wcmltYXJ5LmlzLWludmVydGVkOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2YyZjJmMn0uYnV0dG9uLmlzLXByaW1hcnkuaXMtaW52ZXJ0ZWRbZGlzYWJsZWRdLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnV0dG9uLmlzLXByaW1hcnkuaXMtaW52ZXJ0ZWR7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtib3gtc2hhZG93Om5vbmU7Y29sb3I6IzAwZDFiMn0uYnV0dG9uLmlzLXByaW1hcnkuaXMtbG9hZGluZzo6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNmZmYgI2ZmZiFpbXBvcnRhbnR9LmJ1dHRvbi5pcy1wcmltYXJ5LmlzLW91dGxpbmVke2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWNvbG9yOiMwMGQxYjI7Y29sb3I6IzAwZDFiMn0uYnV0dG9uLmlzLXByaW1hcnkuaXMtb3V0bGluZWQ6Zm9jdXMsLmJ1dHRvbi5pcy1wcmltYXJ5LmlzLW91dGxpbmVkOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzAwZDFiMjtib3JkZXItY29sb3I6IzAwZDFiMjtjb2xvcjojZmZmfS5idXR0b24uaXMtcHJpbWFyeS5pcy1vdXRsaW5lZC5pcy1sb2FkaW5nOjphZnRlcntib3JkZXItY29sb3I6dHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzAwZDFiMiAjMDBkMWIyIWltcG9ydGFudH0uYnV0dG9uLmlzLXByaW1hcnkuaXMtb3V0bGluZWRbZGlzYWJsZWRdLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnV0dG9uLmlzLXByaW1hcnkuaXMtb3V0bGluZWR7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItY29sb3I6IzAwZDFiMjtib3gtc2hhZG93Om5vbmU7Y29sb3I6IzAwZDFiMn0uYnV0dG9uLmlzLXByaW1hcnkuaXMtaW52ZXJ0ZWQuaXMtb3V0bGluZWR7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItY29sb3I6I2ZmZjtjb2xvcjojZmZmfS5idXR0b24uaXMtcHJpbWFyeS5pcy1pbnZlcnRlZC5pcy1vdXRsaW5lZDpmb2N1cywuYnV0dG9uLmlzLXByaW1hcnkuaXMtaW52ZXJ0ZWQuaXMtb3V0bGluZWQ6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbG9yOiMwMGQxYjJ9LmJ1dHRvbi5pcy1wcmltYXJ5LmlzLWludmVydGVkLmlzLW91dGxpbmVkW2Rpc2FibGVkXSxmaWVsZHNldFtkaXNhYmxlZF0gLmJ1dHRvbi5pcy1wcmltYXJ5LmlzLWludmVydGVkLmlzLW91dGxpbmVke2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWNvbG9yOiNmZmY7Ym94LXNoYWRvdzpub25lO2NvbG9yOiNmZmZ9LmJ1dHRvbi5pcy1saW5re2JhY2tncm91bmQtY29sb3I6IzMyNzNkYztib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6I2ZmZn0uYnV0dG9uLmlzLWxpbmsuaXMtaG92ZXJlZCwuYnV0dG9uLmlzLWxpbms6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMjc2Y2RhO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZmZmfS5idXR0b24uaXMtbGluay5pcy1mb2N1c2VkLC5idXR0b24uaXMtbGluazpmb2N1c3tib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6I2ZmZn0uYnV0dG9uLmlzLWxpbmsuaXMtZm9jdXNlZDpub3QoOmFjdGl2ZSksLmJ1dHRvbi5pcy1saW5rOmZvY3VzOm5vdCg6YWN0aXZlKXtib3gtc2hhZG93OjAgMCAwIC4xMjVlbSByZ2JhKDUwLDExNSwyMjAsLjI1KX0uYnV0dG9uLmlzLWxpbmsuaXMtYWN0aXZlLC5idXR0b24uaXMtbGluazphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojMjM2NmQxO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZmZmfS5idXR0b24uaXMtbGlua1tkaXNhYmxlZF0sZmllbGRzZXRbZGlzYWJsZWRdIC5idXR0b24uaXMtbGlua3tiYWNrZ3JvdW5kLWNvbG9yOiMzMjczZGM7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2JveC1zaGFkb3c6bm9uZX0uYnV0dG9uLmlzLWxpbmsuaXMtaW52ZXJ0ZWR7YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbG9yOiMzMjczZGN9LmJ1dHRvbi5pcy1saW5rLmlzLWludmVydGVkOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2YyZjJmMn0uYnV0dG9uLmlzLWxpbmsuaXMtaW52ZXJ0ZWRbZGlzYWJsZWRdLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnV0dG9uLmlzLWxpbmsuaXMtaW52ZXJ0ZWR7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtib3gtc2hhZG93Om5vbmU7Y29sb3I6IzMyNzNkY30uYnV0dG9uLmlzLWxpbmsuaXMtbG9hZGluZzo6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNmZmYgI2ZmZiFpbXBvcnRhbnR9LmJ1dHRvbi5pcy1saW5rLmlzLW91dGxpbmVke2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWNvbG9yOiMzMjczZGM7Y29sb3I6IzMyNzNkY30uYnV0dG9uLmlzLWxpbmsuaXMtb3V0bGluZWQ6Zm9jdXMsLmJ1dHRvbi5pcy1saW5rLmlzLW91dGxpbmVkOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzMyNzNkYztib3JkZXItY29sb3I6IzMyNzNkYztjb2xvcjojZmZmfS5idXR0b24uaXMtbGluay5pcy1vdXRsaW5lZC5pcy1sb2FkaW5nOjphZnRlcntib3JkZXItY29sb3I6dHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzMyNzNkYyAjMzI3M2RjIWltcG9ydGFudH0uYnV0dG9uLmlzLWxpbmsuaXMtb3V0bGluZWRbZGlzYWJsZWRdLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnV0dG9uLmlzLWxpbmsuaXMtb3V0bGluZWR7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItY29sb3I6IzMyNzNkYztib3gtc2hhZG93Om5vbmU7Y29sb3I6IzMyNzNkY30uYnV0dG9uLmlzLWxpbmsuaXMtaW52ZXJ0ZWQuaXMtb3V0bGluZWR7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItY29sb3I6I2ZmZjtjb2xvcjojZmZmfS5idXR0b24uaXMtbGluay5pcy1pbnZlcnRlZC5pcy1vdXRsaW5lZDpmb2N1cywuYnV0dG9uLmlzLWxpbmsuaXMtaW52ZXJ0ZWQuaXMtb3V0bGluZWQ6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbG9yOiMzMjczZGN9LmJ1dHRvbi5pcy1saW5rLmlzLWludmVydGVkLmlzLW91dGxpbmVkW2Rpc2FibGVkXSxmaWVsZHNldFtkaXNhYmxlZF0gLmJ1dHRvbi5pcy1saW5rLmlzLWludmVydGVkLmlzLW91dGxpbmVke2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWNvbG9yOiNmZmY7Ym94LXNoYWRvdzpub25lO2NvbG9yOiNmZmZ9LmJ1dHRvbi5pcy1pbmZve2JhY2tncm91bmQtY29sb3I6IzIwOWNlZTtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6I2ZmZn0uYnV0dG9uLmlzLWluZm8uaXMtaG92ZXJlZCwuYnV0dG9uLmlzLWluZm86aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMTQ5NmVkO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZmZmfS5idXR0b24uaXMtaW5mby5pcy1mb2N1c2VkLC5idXR0b24uaXMtaW5mbzpmb2N1c3tib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6I2ZmZn0uYnV0dG9uLmlzLWluZm8uaXMtZm9jdXNlZDpub3QoOmFjdGl2ZSksLmJ1dHRvbi5pcy1pbmZvOmZvY3VzOm5vdCg6YWN0aXZlKXtib3gtc2hhZG93OjAgMCAwIC4xMjVlbSByZ2JhKDMyLDE1NiwyMzgsLjI1KX0uYnV0dG9uLmlzLWluZm8uaXMtYWN0aXZlLC5idXR0b24uaXMtaW5mbzphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojMTE4ZmU0O2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZmZmfS5idXR0b24uaXMtaW5mb1tkaXNhYmxlZF0sZmllbGRzZXRbZGlzYWJsZWRdIC5idXR0b24uaXMtaW5mb3tiYWNrZ3JvdW5kLWNvbG9yOiMyMDljZWU7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2JveC1zaGFkb3c6bm9uZX0uYnV0dG9uLmlzLWluZm8uaXMtaW52ZXJ0ZWR7YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbG9yOiMyMDljZWV9LmJ1dHRvbi5pcy1pbmZvLmlzLWludmVydGVkOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2YyZjJmMn0uYnV0dG9uLmlzLWluZm8uaXMtaW52ZXJ0ZWRbZGlzYWJsZWRdLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnV0dG9uLmlzLWluZm8uaXMtaW52ZXJ0ZWR7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtib3gtc2hhZG93Om5vbmU7Y29sb3I6IzIwOWNlZX0uYnV0dG9uLmlzLWluZm8uaXMtbG9hZGluZzo6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNmZmYgI2ZmZiFpbXBvcnRhbnR9LmJ1dHRvbi5pcy1pbmZvLmlzLW91dGxpbmVke2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWNvbG9yOiMyMDljZWU7Y29sb3I6IzIwOWNlZX0uYnV0dG9uLmlzLWluZm8uaXMtb3V0bGluZWQ6Zm9jdXMsLmJ1dHRvbi5pcy1pbmZvLmlzLW91dGxpbmVkOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzIwOWNlZTtib3JkZXItY29sb3I6IzIwOWNlZTtjb2xvcjojZmZmfS5idXR0b24uaXMtaW5mby5pcy1vdXRsaW5lZC5pcy1sb2FkaW5nOjphZnRlcntib3JkZXItY29sb3I6dHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzIwOWNlZSAjMjA5Y2VlIWltcG9ydGFudH0uYnV0dG9uLmlzLWluZm8uaXMtb3V0bGluZWRbZGlzYWJsZWRdLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnV0dG9uLmlzLWluZm8uaXMtb3V0bGluZWR7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItY29sb3I6IzIwOWNlZTtib3gtc2hhZG93Om5vbmU7Y29sb3I6IzIwOWNlZX0uYnV0dG9uLmlzLWluZm8uaXMtaW52ZXJ0ZWQuaXMtb3V0bGluZWR7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItY29sb3I6I2ZmZjtjb2xvcjojZmZmfS5idXR0b24uaXMtaW5mby5pcy1pbnZlcnRlZC5pcy1vdXRsaW5lZDpmb2N1cywuYnV0dG9uLmlzLWluZm8uaXMtaW52ZXJ0ZWQuaXMtb3V0bGluZWQ6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbG9yOiMyMDljZWV9LmJ1dHRvbi5pcy1pbmZvLmlzLWludmVydGVkLmlzLW91dGxpbmVkW2Rpc2FibGVkXSxmaWVsZHNldFtkaXNhYmxlZF0gLmJ1dHRvbi5pcy1pbmZvLmlzLWludmVydGVkLmlzLW91dGxpbmVke2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWNvbG9yOiNmZmY7Ym94LXNoYWRvdzpub25lO2NvbG9yOiNmZmZ9LmJ1dHRvbi5pcy1zdWNjZXNze2JhY2tncm91bmQtY29sb3I6IzIzZDE2MDtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6I2ZmZn0uYnV0dG9uLmlzLXN1Y2Nlc3MuaXMtaG92ZXJlZCwuYnV0dG9uLmlzLXN1Y2Nlc3M6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMjJjNjViO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZmZmfS5idXR0b24uaXMtc3VjY2Vzcy5pcy1mb2N1c2VkLC5idXR0b24uaXMtc3VjY2Vzczpmb2N1c3tib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6I2ZmZn0uYnV0dG9uLmlzLXN1Y2Nlc3MuaXMtZm9jdXNlZDpub3QoOmFjdGl2ZSksLmJ1dHRvbi5pcy1zdWNjZXNzOmZvY3VzOm5vdCg6YWN0aXZlKXtib3gtc2hhZG93OjAgMCAwIC4xMjVlbSByZ2JhKDM1LDIwOSw5NiwuMjUpfS5idXR0b24uaXMtc3VjY2Vzcy5pcy1hY3RpdmUsLmJ1dHRvbi5pcy1zdWNjZXNzOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiMyMGJjNTY7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiNmZmZ9LmJ1dHRvbi5pcy1zdWNjZXNzW2Rpc2FibGVkXSxmaWVsZHNldFtkaXNhYmxlZF0gLmJ1dHRvbi5pcy1zdWNjZXNze2JhY2tncm91bmQtY29sb3I6IzIzZDE2MDtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Ym94LXNoYWRvdzpub25lfS5idXR0b24uaXMtc3VjY2Vzcy5pcy1pbnZlcnRlZHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6IzIzZDE2MH0uYnV0dG9uLmlzLXN1Y2Nlc3MuaXMtaW52ZXJ0ZWQ6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZjJmMmYyfS5idXR0b24uaXMtc3VjY2Vzcy5pcy1pbnZlcnRlZFtkaXNhYmxlZF0sZmllbGRzZXRbZGlzYWJsZWRdIC5idXR0b24uaXMtc3VjY2Vzcy5pcy1pbnZlcnRlZHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2JveC1zaGFkb3c6bm9uZTtjb2xvcjojMjNkMTYwfS5idXR0b24uaXMtc3VjY2Vzcy5pcy1sb2FkaW5nOjphZnRlcntib3JkZXItY29sb3I6dHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2ZmZiAjZmZmIWltcG9ydGFudH0uYnV0dG9uLmlzLXN1Y2Nlc3MuaXMtb3V0bGluZWR7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItY29sb3I6IzIzZDE2MDtjb2xvcjojMjNkMTYwfS5idXR0b24uaXMtc3VjY2Vzcy5pcy1vdXRsaW5lZDpmb2N1cywuYnV0dG9uLmlzLXN1Y2Nlc3MuaXMtb3V0bGluZWQ6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMjNkMTYwO2JvcmRlci1jb2xvcjojMjNkMTYwO2NvbG9yOiNmZmZ9LmJ1dHRvbi5pcy1zdWNjZXNzLmlzLW91dGxpbmVkLmlzLWxvYWRpbmc6OmFmdGVye2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjMjNkMTYwICMyM2QxNjAhaW1wb3J0YW50fS5idXR0b24uaXMtc3VjY2Vzcy5pcy1vdXRsaW5lZFtkaXNhYmxlZF0sZmllbGRzZXRbZGlzYWJsZWRdIC5idXR0b24uaXMtc3VjY2Vzcy5pcy1vdXRsaW5lZHtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1jb2xvcjojMjNkMTYwO2JveC1zaGFkb3c6bm9uZTtjb2xvcjojMjNkMTYwfS5idXR0b24uaXMtc3VjY2Vzcy5pcy1pbnZlcnRlZC5pcy1vdXRsaW5lZHtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1jb2xvcjojZmZmO2NvbG9yOiNmZmZ9LmJ1dHRvbi5pcy1zdWNjZXNzLmlzLWludmVydGVkLmlzLW91dGxpbmVkOmZvY3VzLC5idXR0b24uaXMtc3VjY2Vzcy5pcy1pbnZlcnRlZC5pcy1vdXRsaW5lZDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6IzIzZDE2MH0uYnV0dG9uLmlzLXN1Y2Nlc3MuaXMtaW52ZXJ0ZWQuaXMtb3V0bGluZWRbZGlzYWJsZWRdLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnV0dG9uLmlzLXN1Y2Nlc3MuaXMtaW52ZXJ0ZWQuaXMtb3V0bGluZWR7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItY29sb3I6I2ZmZjtib3gtc2hhZG93Om5vbmU7Y29sb3I6I2ZmZn0uYnV0dG9uLmlzLXdhcm5pbmd7YmFja2dyb3VuZC1jb2xvcjojZmZkZDU3O2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjpyZ2JhKDAsMCwwLC43KX0uYnV0dG9uLmlzLXdhcm5pbmcuaXMtaG92ZXJlZCwuYnV0dG9uLmlzLXdhcm5pbmc6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZmZkYjRhO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjpyZ2JhKDAsMCwwLC43KX0uYnV0dG9uLmlzLXdhcm5pbmcuaXMtZm9jdXNlZCwuYnV0dG9uLmlzLXdhcm5pbmc6Zm9jdXN7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOnJnYmEoMCwwLDAsLjcpfS5idXR0b24uaXMtd2FybmluZy5pcy1mb2N1c2VkOm5vdCg6YWN0aXZlKSwuYnV0dG9uLmlzLXdhcm5pbmc6Zm9jdXM6bm90KDphY3RpdmUpe2JveC1zaGFkb3c6MCAwIDAgLjEyNWVtIHJnYmEoMjU1LDIyMSw4NywuMjUpfS5idXR0b24uaXMtd2FybmluZy5pcy1hY3RpdmUsLmJ1dHRvbi5pcy13YXJuaW5nOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmQ4M2Q7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOnJnYmEoMCwwLDAsLjcpfS5idXR0b24uaXMtd2FybmluZ1tkaXNhYmxlZF0sZmllbGRzZXRbZGlzYWJsZWRdIC5idXR0b24uaXMtd2FybmluZ3tiYWNrZ3JvdW5kLWNvbG9yOiNmZmRkNTc7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2JveC1zaGFkb3c6bm9uZX0uYnV0dG9uLmlzLXdhcm5pbmcuaXMtaW52ZXJ0ZWR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC43KTtjb2xvcjojZmZkZDU3fS5idXR0b24uaXMtd2FybmluZy5pcy1pbnZlcnRlZDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjcpfS5idXR0b24uaXMtd2FybmluZy5pcy1pbnZlcnRlZFtkaXNhYmxlZF0sZmllbGRzZXRbZGlzYWJsZWRdIC5idXR0b24uaXMtd2FybmluZy5pcy1pbnZlcnRlZHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjcpO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtib3gtc2hhZG93Om5vbmU7Y29sb3I6I2ZmZGQ1N30uYnV0dG9uLmlzLXdhcm5pbmcuaXMtbG9hZGluZzo6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHJnYmEoMCwwLDAsLjcpIHJnYmEoMCwwLDAsLjcpIWltcG9ydGFudH0uYnV0dG9uLmlzLXdhcm5pbmcuaXMtb3V0bGluZWR7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItY29sb3I6I2ZmZGQ1Nztjb2xvcjojZmZkZDU3fS5idXR0b24uaXMtd2FybmluZy5pcy1vdXRsaW5lZDpmb2N1cywuYnV0dG9uLmlzLXdhcm5pbmcuaXMtb3V0bGluZWQ6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZmZkZDU3O2JvcmRlci1jb2xvcjojZmZkZDU3O2NvbG9yOnJnYmEoMCwwLDAsLjcpfS5idXR0b24uaXMtd2FybmluZy5pcy1vdXRsaW5lZC5pcy1sb2FkaW5nOjphZnRlcntib3JkZXItY29sb3I6dHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2ZmZGQ1NyAjZmZkZDU3IWltcG9ydGFudH0uYnV0dG9uLmlzLXdhcm5pbmcuaXMtb3V0bGluZWRbZGlzYWJsZWRdLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnV0dG9uLmlzLXdhcm5pbmcuaXMtb3V0bGluZWR7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItY29sb3I6I2ZmZGQ1Nztib3gtc2hhZG93Om5vbmU7Y29sb3I6I2ZmZGQ1N30uYnV0dG9uLmlzLXdhcm5pbmcuaXMtaW52ZXJ0ZWQuaXMtb3V0bGluZWR7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuNyk7Y29sb3I6cmdiYSgwLDAsMCwuNyl9LmJ1dHRvbi5pcy13YXJuaW5nLmlzLWludmVydGVkLmlzLW91dGxpbmVkOmZvY3VzLC5idXR0b24uaXMtd2FybmluZy5pcy1pbnZlcnRlZC5pcy1vdXRsaW5lZDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjcpO2NvbG9yOiNmZmRkNTd9LmJ1dHRvbi5pcy13YXJuaW5nLmlzLWludmVydGVkLmlzLW91dGxpbmVkW2Rpc2FibGVkXSxmaWVsZHNldFtkaXNhYmxlZF0gLmJ1dHRvbi5pcy13YXJuaW5nLmlzLWludmVydGVkLmlzLW91dGxpbmVke2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjcpO2JveC1zaGFkb3c6bm9uZTtjb2xvcjpyZ2JhKDAsMCwwLC43KX0uYnV0dG9uLmlzLWRhbmdlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZjM4NjA7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiNmZmZ9LmJ1dHRvbi5pcy1kYW5nZXIuaXMtaG92ZXJlZCwuYnV0dG9uLmlzLWRhbmdlcjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZjJiNTY7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiNmZmZ9LmJ1dHRvbi5pcy1kYW5nZXIuaXMtZm9jdXNlZCwuYnV0dG9uLmlzLWRhbmdlcjpmb2N1c3tib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6I2ZmZn0uYnV0dG9uLmlzLWRhbmdlci5pcy1mb2N1c2VkOm5vdCg6YWN0aXZlKSwuYnV0dG9uLmlzLWRhbmdlcjpmb2N1czpub3QoOmFjdGl2ZSl7Ym94LXNoYWRvdzowIDAgMCAuMTI1ZW0gcmdiYSgyNTUsNTYsOTYsLjI1KX0uYnV0dG9uLmlzLWRhbmdlci5pcy1hY3RpdmUsLmJ1dHRvbi5pcy1kYW5nZXI6YWN0aXZle2JhY2tncm91bmQtY29sb3I6I2ZmMWY0Yjtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6I2ZmZn0uYnV0dG9uLmlzLWRhbmdlcltkaXNhYmxlZF0sZmllbGRzZXRbZGlzYWJsZWRdIC5idXR0b24uaXMtZGFuZ2Vye2JhY2tncm91bmQtY29sb3I6I2ZmMzg2MDtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Ym94LXNoYWRvdzpub25lfS5idXR0b24uaXMtZGFuZ2VyLmlzLWludmVydGVke2JhY2tncm91bmQtY29sb3I6I2ZmZjtjb2xvcjojZmYzODYwfS5idXR0b24uaXMtZGFuZ2VyLmlzLWludmVydGVkOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2YyZjJmMn0uYnV0dG9uLmlzLWRhbmdlci5pcy1pbnZlcnRlZFtkaXNhYmxlZF0sZmllbGRzZXRbZGlzYWJsZWRdIC5idXR0b24uaXMtZGFuZ2VyLmlzLWludmVydGVke2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Ym94LXNoYWRvdzpub25lO2NvbG9yOiNmZjM4NjB9LmJ1dHRvbi5pcy1kYW5nZXIuaXMtbG9hZGluZzo6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNmZmYgI2ZmZiFpbXBvcnRhbnR9LmJ1dHRvbi5pcy1kYW5nZXIuaXMtb3V0bGluZWR7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItY29sb3I6I2ZmMzg2MDtjb2xvcjojZmYzODYwfS5idXR0b24uaXMtZGFuZ2VyLmlzLW91dGxpbmVkOmZvY3VzLC5idXR0b24uaXMtZGFuZ2VyLmlzLW91dGxpbmVkOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2ZmMzg2MDtib3JkZXItY29sb3I6I2ZmMzg2MDtjb2xvcjojZmZmfS5idXR0b24uaXMtZGFuZ2VyLmlzLW91dGxpbmVkLmlzLWxvYWRpbmc6OmFmdGVye2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZmYzODYwICNmZjM4NjAhaW1wb3J0YW50fS5idXR0b24uaXMtZGFuZ2VyLmlzLW91dGxpbmVkW2Rpc2FibGVkXSxmaWVsZHNldFtkaXNhYmxlZF0gLmJ1dHRvbi5pcy1kYW5nZXIuaXMtb3V0bGluZWR7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItY29sb3I6I2ZmMzg2MDtib3gtc2hhZG93Om5vbmU7Y29sb3I6I2ZmMzg2MH0uYnV0dG9uLmlzLWRhbmdlci5pcy1pbnZlcnRlZC5pcy1vdXRsaW5lZHtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1jb2xvcjojZmZmO2NvbG9yOiNmZmZ9LmJ1dHRvbi5pcy1kYW5nZXIuaXMtaW52ZXJ0ZWQuaXMtb3V0bGluZWQ6Zm9jdXMsLmJ1dHRvbi5pcy1kYW5nZXIuaXMtaW52ZXJ0ZWQuaXMtb3V0bGluZWQ6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbG9yOiNmZjM4NjB9LmJ1dHRvbi5pcy1kYW5nZXIuaXMtaW52ZXJ0ZWQuaXMtb3V0bGluZWRbZGlzYWJsZWRdLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnV0dG9uLmlzLWRhbmdlci5pcy1pbnZlcnRlZC5pcy1vdXRsaW5lZHtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1jb2xvcjojZmZmO2JveC1zaGFkb3c6bm9uZTtjb2xvcjojZmZmfS5idXR0b24uaXMtc21hbGx7Ym9yZGVyLXJhZGl1czoycHg7Zm9udC1zaXplOi43NXJlbX0uYnV0dG9uLmlzLW5vcm1hbHtmb250LXNpemU6MXJlbX0uYnV0dG9uLmlzLW1lZGl1bXtmb250LXNpemU6MS4yNXJlbX0uYnV0dG9uLmlzLWxhcmdle2ZvbnQtc2l6ZToxLjVyZW19LmJ1dHRvbltkaXNhYmxlZF0sZmllbGRzZXRbZGlzYWJsZWRdIC5idXR0b257YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlci1jb2xvcjojZGJkYmRiO2JveC1zaGFkb3c6bm9uZTtvcGFjaXR5Oi41fS5idXR0b24uaXMtZnVsbHdpZHRoe2Rpc3BsYXk6ZmxleDt3aWR0aDoxMDAlfS5idXR0b24uaXMtbG9hZGluZ3tjb2xvcjp0cmFuc3BhcmVudCFpbXBvcnRhbnQ7cG9pbnRlci1ldmVudHM6bm9uZX0uYnV0dG9uLmlzLWxvYWRpbmc6OmFmdGVye3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6Y2FsYyg1MCUgLSAoMWVtIC8gMikpO3RvcDpjYWxjKDUwJSAtICgxZW0gLyAyKSk7cG9zaXRpb246YWJzb2x1dGUhaW1wb3J0YW50fS5idXR0b24uaXMtc3RhdGlje2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTtib3JkZXItY29sb3I6I2RiZGJkYjtjb2xvcjojN2E3YTdhO2JveC1zaGFkb3c6bm9uZTtwb2ludGVyLWV2ZW50czpub25lfS5idXR0b24uaXMtcm91bmRlZHtib3JkZXItcmFkaXVzOjI5MDQ4NnB4O3BhZGRpbmctbGVmdDoxZW07cGFkZGluZy1yaWdodDoxZW19LmJ1dHRvbnN7YWxpZ24taXRlbXM6Y2VudGVyO2Rpc3BsYXk6ZmxleDtmbGV4LXdyYXA6d3JhcDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydH0uYnV0dG9ucyAuYnV0dG9ue21hcmdpbi1ib3R0b206LjVyZW19LmJ1dHRvbnMgLmJ1dHRvbjpub3QoOmxhc3QtY2hpbGQpOm5vdCguaXMtZnVsbHdpZHRoKXttYXJnaW4tcmlnaHQ6LjVyZW19LmJ1dHRvbnM6bGFzdC1jaGlsZHttYXJnaW4tYm90dG9tOi0uNXJlbX0uYnV0dG9uczpub3QoOmxhc3QtY2hpbGQpe21hcmdpbi1ib3R0b206MXJlbX0uYnV0dG9ucy5hcmUtc21hbGwgLmJ1dHRvbjpub3QoLmlzLW5vcm1hbCk6bm90KC5pcy1tZWRpdW0pOm5vdCguaXMtbGFyZ2Upe2JvcmRlci1yYWRpdXM6MnB4O2ZvbnQtc2l6ZTouNzVyZW19LmJ1dHRvbnMuYXJlLW1lZGl1bSAuYnV0dG9uOm5vdCguaXMtc21hbGwpOm5vdCguaXMtbm9ybWFsKTpub3QoLmlzLWxhcmdlKXtmb250LXNpemU6MS4yNXJlbX0uYnV0dG9ucy5hcmUtbGFyZ2UgLmJ1dHRvbjpub3QoLmlzLXNtYWxsKTpub3QoLmlzLW5vcm1hbCk6bm90KC5pcy1tZWRpdW0pe2ZvbnQtc2l6ZToxLjVyZW19LmJ1dHRvbnMuaGFzLWFkZG9ucyAuYnV0dG9uOm5vdCg6Zmlyc3QtY2hpbGQpe2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MDtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjB9LmJ1dHRvbnMuaGFzLWFkZG9ucyAuYnV0dG9uOm5vdCg6bGFzdC1jaGlsZCl7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MDtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czowO21hcmdpbi1yaWdodDotMXB4fS5idXR0b25zLmhhcy1hZGRvbnMgLmJ1dHRvbjpsYXN0LWNoaWxke21hcmdpbi1yaWdodDowfS5idXR0b25zLmhhcy1hZGRvbnMgLmJ1dHRvbi5pcy1ob3ZlcmVkLC5idXR0b25zLmhhcy1hZGRvbnMgLmJ1dHRvbjpob3Zlcnt6LWluZGV4OjJ9LmJ1dHRvbnMuaGFzLWFkZG9ucyAuYnV0dG9uLmlzLWFjdGl2ZSwuYnV0dG9ucy5oYXMtYWRkb25zIC5idXR0b24uaXMtZm9jdXNlZCwuYnV0dG9ucy5oYXMtYWRkb25zIC5idXR0b24uaXMtc2VsZWN0ZWQsLmJ1dHRvbnMuaGFzLWFkZG9ucyAuYnV0dG9uOmFjdGl2ZSwuYnV0dG9ucy5oYXMtYWRkb25zIC5idXR0b246Zm9jdXN7ei1pbmRleDozfS5idXR0b25zLmhhcy1hZGRvbnMgLmJ1dHRvbi5pcy1hY3RpdmU6aG92ZXIsLmJ1dHRvbnMuaGFzLWFkZG9ucyAuYnV0dG9uLmlzLWZvY3VzZWQ6aG92ZXIsLmJ1dHRvbnMuaGFzLWFkZG9ucyAuYnV0dG9uLmlzLXNlbGVjdGVkOmhvdmVyLC5idXR0b25zLmhhcy1hZGRvbnMgLmJ1dHRvbjphY3RpdmU6aG92ZXIsLmJ1dHRvbnMuaGFzLWFkZG9ucyAuYnV0dG9uOmZvY3VzOmhvdmVye3otaW5kZXg6NH0uYnV0dG9ucy5oYXMtYWRkb25zIC5idXR0b24uaXMtZXhwYW5kZWR7ZmxleC1ncm93OjF9LmJ1dHRvbnMuaXMtY2VudGVyZWR7anVzdGlmeS1jb250ZW50OmNlbnRlcn0uYnV0dG9ucy5pcy1yaWdodHtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9LmNvbnRhaW5lcnttYXJnaW46MCBhdXRvO3Bvc2l0aW9uOnJlbGF0aXZlfUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTA4OHB4KXsuY29udGFpbmVye21heC13aWR0aDo5NjBweDt3aWR0aDo5NjBweH0uY29udGFpbmVyLmlzLWZsdWlke21hcmdpbi1sZWZ0OjY0cHg7bWFyZ2luLXJpZ2h0OjY0cHg7bWF4LXdpZHRoOm5vbmU7d2lkdGg6YXV0b319QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjc5cHgpey5jb250YWluZXIuaXMtd2lkZXNjcmVlbnttYXgtd2lkdGg6MTE1MnB4O3dpZHRoOmF1dG99fUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTQ3MXB4KXsuY29udGFpbmVyLmlzLWZ1bGxoZHttYXgtd2lkdGg6MTM0NHB4O3dpZHRoOmF1dG99fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTI4MHB4KXsuY29udGFpbmVye21heC13aWR0aDoxMTUycHg7d2lkdGg6MTE1MnB4fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjE0NzJweCl7LmNvbnRhaW5lcnttYXgtd2lkdGg6MTM0NHB4O3dpZHRoOjEzNDRweH19LmNvbnRlbnQgbGkrbGl7bWFyZ2luLXRvcDouMjVlbX0uY29udGVudCBibG9ja3F1b3RlOm5vdCg6bGFzdC1jaGlsZCksLmNvbnRlbnQgZGw6bm90KDpsYXN0LWNoaWxkKSwuY29udGVudCBvbDpub3QoOmxhc3QtY2hpbGQpLC5jb250ZW50IHA6bm90KDpsYXN0LWNoaWxkKSwuY29udGVudCBwcmU6bm90KDpsYXN0LWNoaWxkKSwuY29udGVudCB0YWJsZTpub3QoOmxhc3QtY2hpbGQpLC5jb250ZW50IHVsOm5vdCg6bGFzdC1jaGlsZCl7bWFyZ2luLWJvdHRvbToxZW19LmNvbnRlbnQgaDEsLmNvbnRlbnQgaDIsLmNvbnRlbnQgaDMsLmNvbnRlbnQgaDQsLmNvbnRlbnQgaDUsLmNvbnRlbnQgaDZ7Y29sb3I6IzM2MzYzNjtmb250LXdlaWdodDo2MDA7bGluZS1oZWlnaHQ6MS4xMjV9LmNvbnRlbnQgaDF7Zm9udC1zaXplOjJlbTttYXJnaW4tYm90dG9tOi41ZW19LmNvbnRlbnQgaDE6bm90KDpmaXJzdC1jaGlsZCl7bWFyZ2luLXRvcDoxZW19LmNvbnRlbnQgaDJ7Zm9udC1zaXplOjEuNzVlbTttYXJnaW4tYm90dG9tOi41NzE0ZW19LmNvbnRlbnQgaDI6bm90KDpmaXJzdC1jaGlsZCl7bWFyZ2luLXRvcDoxLjE0MjhlbX0uY29udGVudCBoM3tmb250LXNpemU6MS41ZW07bWFyZ2luLWJvdHRvbTouNjY2NmVtfS5jb250ZW50IGgzOm5vdCg6Zmlyc3QtY2hpbGQpe21hcmdpbi10b3A6MS4zMzMzZW19LmNvbnRlbnQgaDR7Zm9udC1zaXplOjEuMjVlbTttYXJnaW4tYm90dG9tOi44ZW19LmNvbnRlbnQgaDV7Zm9udC1zaXplOjEuMTI1ZW07bWFyZ2luLWJvdHRvbTouODg4OGVtfS5jb250ZW50IGg2e2ZvbnQtc2l6ZToxZW07bWFyZ2luLWJvdHRvbToxZW19LmNvbnRlbnQgYmxvY2txdW90ZXtiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7Ym9yZGVyLWxlZnQ6NXB4IHNvbGlkICNkYmRiZGI7cGFkZGluZzoxLjI1ZW0gMS41ZW19LmNvbnRlbnQgb2x7bGlzdC1zdHlsZS1wb3NpdGlvbjpvdXRzaWRlO21hcmdpbi1sZWZ0OjJlbTttYXJnaW4tdG9wOjFlbX0uY29udGVudCBvbDpub3QoW3R5cGVdKXtsaXN0LXN0eWxlLXR5cGU6ZGVjaW1hbH0uY29udGVudCBvbDpub3QoW3R5cGVdKS5pcy1sb3dlci1hbHBoYXtsaXN0LXN0eWxlLXR5cGU6bG93ZXItYWxwaGF9LmNvbnRlbnQgb2w6bm90KFt0eXBlXSkuaXMtbG93ZXItcm9tYW57bGlzdC1zdHlsZS10eXBlOmxvd2VyLXJvbWFufS5jb250ZW50IG9sOm5vdChbdHlwZV0pLmlzLXVwcGVyLWFscGhhe2xpc3Qtc3R5bGUtdHlwZTp1cHBlci1hbHBoYX0uY29udGVudCBvbDpub3QoW3R5cGVdKS5pcy11cHBlci1yb21hbntsaXN0LXN0eWxlLXR5cGU6dXBwZXItcm9tYW59LmNvbnRlbnQgdWx7bGlzdC1zdHlsZTpkaXNjIG91dHNpZGU7bWFyZ2luLWxlZnQ6MmVtO21hcmdpbi10b3A6MWVtfS5jb250ZW50IHVsIHVse2xpc3Qtc3R5bGUtdHlwZTpjaXJjbGU7bWFyZ2luLXRvcDouNWVtfS5jb250ZW50IHVsIHVsIHVse2xpc3Qtc3R5bGUtdHlwZTpzcXVhcmV9LmNvbnRlbnQgZGR7bWFyZ2luLWxlZnQ6MmVtfS5jb250ZW50IGZpZ3VyZXttYXJnaW4tbGVmdDoyZW07bWFyZ2luLXJpZ2h0OjJlbTt0ZXh0LWFsaWduOmNlbnRlcn0uY29udGVudCBmaWd1cmU6bm90KDpmaXJzdC1jaGlsZCl7bWFyZ2luLXRvcDoyZW19LmNvbnRlbnQgZmlndXJlOm5vdCg6bGFzdC1jaGlsZCl7bWFyZ2luLWJvdHRvbToyZW19LmNvbnRlbnQgZmlndXJlIGltZ3tkaXNwbGF5OmlubGluZS1ibG9ja30uY29udGVudCBmaWd1cmUgZmlnY2FwdGlvbntmb250LXN0eWxlOml0YWxpY30uY29udGVudCBwcmV7LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2g7b3ZlcmZsb3cteDphdXRvO3BhZGRpbmc6MS4yNWVtIDEuNWVtO3doaXRlLXNwYWNlOnByZTt3b3JkLXdyYXA6bm9ybWFsfS5jb250ZW50IHN1YiwuY29udGVudCBzdXB7Zm9udC1zaXplOjc1JX0uY29udGVudCB0YWJsZXt3aWR0aDoxMDAlfS5jb250ZW50IHRhYmxlIHRkLC5jb250ZW50IHRhYmxlIHRoe2JvcmRlcjoxcHggc29saWQgI2RiZGJkYjtib3JkZXItd2lkdGg6MCAwIDFweDtwYWRkaW5nOi41ZW0gLjc1ZW07dmVydGljYWwtYWxpZ246dG9wfS5jb250ZW50IHRhYmxlIHRoe2NvbG9yOiMzNjM2MzY7dGV4dC1hbGlnbjpsZWZ0fS5jb250ZW50IHRhYmxlIHRoZWFkIHRkLC5jb250ZW50IHRhYmxlIHRoZWFkIHRoe2JvcmRlci13aWR0aDowIDAgMnB4O2NvbG9yOiMzNjM2MzZ9LmNvbnRlbnQgdGFibGUgdGZvb3QgdGQsLmNvbnRlbnQgdGFibGUgdGZvb3QgdGh7Ym9yZGVyLXdpZHRoOjJweCAwIDA7Y29sb3I6IzM2MzYzNn0uY29udGVudCB0YWJsZSB0Ym9keSB0cjpsYXN0LWNoaWxkIHRkLC5jb250ZW50IHRhYmxlIHRib2R5IHRyOmxhc3QtY2hpbGQgdGh7Ym9yZGVyLWJvdHRvbS13aWR0aDowfS5jb250ZW50LmlzLXNtYWxse2ZvbnQtc2l6ZTouNzVyZW19LmNvbnRlbnQuaXMtbWVkaXVte2ZvbnQtc2l6ZToxLjI1cmVtfS5jb250ZW50LmlzLWxhcmdle2ZvbnQtc2l6ZToxLjVyZW19LmlucHV0LC50ZXh0YXJlYXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyLWNvbG9yOiNkYmRiZGI7Y29sb3I6IzM2MzYzNjtib3gtc2hhZG93Omluc2V0IDAgMXB4IDJweCByZ2JhKDEwLDEwLDEwLC4xKTttYXgtd2lkdGg6MTAwJTt3aWR0aDoxMDAlfS5pbnB1dDo6LW1vei1wbGFjZWhvbGRlciwudGV4dGFyZWE6Oi1tb3otcGxhY2Vob2xkZXJ7Y29sb3I6cmdiYSg1NCw1NCw1NCwuMyl9LmlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyLC50ZXh0YXJlYTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjpyZ2JhKDU0LDU0LDU0LC4zKX0uaW5wdXQ6LW1vei1wbGFjZWhvbGRlciwudGV4dGFyZWE6LW1vei1wbGFjZWhvbGRlcntjb2xvcjpyZ2JhKDU0LDU0LDU0LC4zKX0uaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyLC50ZXh0YXJlYTotbXMtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6cmdiYSg1NCw1NCw1NCwuMyl9LmlucHV0LmlzLWhvdmVyZWQsLmlucHV0OmhvdmVyLC50ZXh0YXJlYS5pcy1ob3ZlcmVkLC50ZXh0YXJlYTpob3Zlcntib3JkZXItY29sb3I6I2I1YjViNX0uaW5wdXQuaXMtYWN0aXZlLC5pbnB1dC5pcy1mb2N1c2VkLC5pbnB1dDphY3RpdmUsLmlucHV0OmZvY3VzLC50ZXh0YXJlYS5pcy1hY3RpdmUsLnRleHRhcmVhLmlzLWZvY3VzZWQsLnRleHRhcmVhOmFjdGl2ZSwudGV4dGFyZWE6Zm9jdXN7Ym9yZGVyLWNvbG9yOiMzMjczZGM7Ym94LXNoYWRvdzowIDAgMCAuMTI1ZW0gcmdiYSg1MCwxMTUsMjIwLC4yNSl9LmlucHV0W2Rpc2FibGVkXSwudGV4dGFyZWFbZGlzYWJsZWRdLGZpZWxkc2V0W2Rpc2FibGVkXSAuaW5wdXQsZmllbGRzZXRbZGlzYWJsZWRdIC50ZXh0YXJlYXtiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7Ym9yZGVyLWNvbG9yOiNmNWY1ZjU7Ym94LXNoYWRvdzpub25lO2NvbG9yOiM3YTdhN2F9LmlucHV0W2Rpc2FibGVkXTo6LW1vei1wbGFjZWhvbGRlciwudGV4dGFyZWFbZGlzYWJsZWRdOjotbW96LXBsYWNlaG9sZGVyLGZpZWxkc2V0W2Rpc2FibGVkXSAuaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIsZmllbGRzZXRbZGlzYWJsZWRdIC50ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlcntjb2xvcjpyZ2JhKDEyMiwxMjIsMTIyLC4zKX0uaW5wdXRbZGlzYWJsZWRdOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyLC50ZXh0YXJlYVtkaXNhYmxlZF06Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsZmllbGRzZXRbZGlzYWJsZWRdIC5pbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcixmaWVsZHNldFtkaXNhYmxlZF0gLnRleHRhcmVhOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOnJnYmEoMTIyLDEyMiwxMjIsLjMpfS5pbnB1dFtkaXNhYmxlZF06LW1vei1wbGFjZWhvbGRlciwudGV4dGFyZWFbZGlzYWJsZWRdOi1tb3otcGxhY2Vob2xkZXIsZmllbGRzZXRbZGlzYWJsZWRdIC5pbnB1dDotbW96LXBsYWNlaG9sZGVyLGZpZWxkc2V0W2Rpc2FibGVkXSAudGV4dGFyZWE6LW1vei1wbGFjZWhvbGRlcntjb2xvcjpyZ2JhKDEyMiwxMjIsMTIyLC4zKX0uaW5wdXRbZGlzYWJsZWRdOi1tcy1pbnB1dC1wbGFjZWhvbGRlciwudGV4dGFyZWFbZGlzYWJsZWRdOi1tcy1pbnB1dC1wbGFjZWhvbGRlcixmaWVsZHNldFtkaXNhYmxlZF0gLmlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcixmaWVsZHNldFtkaXNhYmxlZF0gLnRleHRhcmVhOi1tcy1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjpyZ2JhKDEyMiwxMjIsMTIyLC4zKX0uaW5wdXRbcmVhZG9ubHldLC50ZXh0YXJlYVtyZWFkb25seV17Ym94LXNoYWRvdzpub25lfS5pbnB1dC5pcy13aGl0ZSwudGV4dGFyZWEuaXMtd2hpdGV7Ym9yZGVyLWNvbG9yOiNmZmZ9LmlucHV0LmlzLXdoaXRlLmlzLWFjdGl2ZSwuaW5wdXQuaXMtd2hpdGUuaXMtZm9jdXNlZCwuaW5wdXQuaXMtd2hpdGU6YWN0aXZlLC5pbnB1dC5pcy13aGl0ZTpmb2N1cywudGV4dGFyZWEuaXMtd2hpdGUuaXMtYWN0aXZlLC50ZXh0YXJlYS5pcy13aGl0ZS5pcy1mb2N1c2VkLC50ZXh0YXJlYS5pcy13aGl0ZTphY3RpdmUsLnRleHRhcmVhLmlzLXdoaXRlOmZvY3Vze2JveC1zaGFkb3c6MCAwIDAgLjEyNWVtIHJnYmEoMjU1LDI1NSwyNTUsLjI1KX0uaW5wdXQuaXMtYmxhY2ssLnRleHRhcmVhLmlzLWJsYWNre2JvcmRlci1jb2xvcjojMGEwYTBhfS5pbnB1dC5pcy1ibGFjay5pcy1hY3RpdmUsLmlucHV0LmlzLWJsYWNrLmlzLWZvY3VzZWQsLmlucHV0LmlzLWJsYWNrOmFjdGl2ZSwuaW5wdXQuaXMtYmxhY2s6Zm9jdXMsLnRleHRhcmVhLmlzLWJsYWNrLmlzLWFjdGl2ZSwudGV4dGFyZWEuaXMtYmxhY2suaXMtZm9jdXNlZCwudGV4dGFyZWEuaXMtYmxhY2s6YWN0aXZlLC50ZXh0YXJlYS5pcy1ibGFjazpmb2N1c3tib3gtc2hhZG93OjAgMCAwIC4xMjVlbSByZ2JhKDEwLDEwLDEwLC4yNSl9LmlucHV0LmlzLWxpZ2h0LC50ZXh0YXJlYS5pcy1saWdodHtib3JkZXItY29sb3I6I2Y1ZjVmNX0uaW5wdXQuaXMtbGlnaHQuaXMtYWN0aXZlLC5pbnB1dC5pcy1saWdodC5pcy1mb2N1c2VkLC5pbnB1dC5pcy1saWdodDphY3RpdmUsLmlucHV0LmlzLWxpZ2h0OmZvY3VzLC50ZXh0YXJlYS5pcy1saWdodC5pcy1hY3RpdmUsLnRleHRhcmVhLmlzLWxpZ2h0LmlzLWZvY3VzZWQsLnRleHRhcmVhLmlzLWxpZ2h0OmFjdGl2ZSwudGV4dGFyZWEuaXMtbGlnaHQ6Zm9jdXN7Ym94LXNoYWRvdzowIDAgMCAuMTI1ZW0gcmdiYSgyNDUsMjQ1LDI0NSwuMjUpfS5pbnB1dC5pcy1kYXJrLC50ZXh0YXJlYS5pcy1kYXJre2JvcmRlci1jb2xvcjojMzYzNjM2fS5pbnB1dC5pcy1kYXJrLmlzLWFjdGl2ZSwuaW5wdXQuaXMtZGFyay5pcy1mb2N1c2VkLC5pbnB1dC5pcy1kYXJrOmFjdGl2ZSwuaW5wdXQuaXMtZGFyazpmb2N1cywudGV4dGFyZWEuaXMtZGFyay5pcy1hY3RpdmUsLnRleHRhcmVhLmlzLWRhcmsuaXMtZm9jdXNlZCwudGV4dGFyZWEuaXMtZGFyazphY3RpdmUsLnRleHRhcmVhLmlzLWRhcms6Zm9jdXN7Ym94LXNoYWRvdzowIDAgMCAuMTI1ZW0gcmdiYSg1NCw1NCw1NCwuMjUpfS5pbnB1dC5pcy1wcmltYXJ5LC50ZXh0YXJlYS5pcy1wcmltYXJ5e2JvcmRlci1jb2xvcjojMDBkMWIyfS5pbnB1dC5pcy1wcmltYXJ5LmlzLWFjdGl2ZSwuaW5wdXQuaXMtcHJpbWFyeS5pcy1mb2N1c2VkLC5pbnB1dC5pcy1wcmltYXJ5OmFjdGl2ZSwuaW5wdXQuaXMtcHJpbWFyeTpmb2N1cywudGV4dGFyZWEuaXMtcHJpbWFyeS5pcy1hY3RpdmUsLnRleHRhcmVhLmlzLXByaW1hcnkuaXMtZm9jdXNlZCwudGV4dGFyZWEuaXMtcHJpbWFyeTphY3RpdmUsLnRleHRhcmVhLmlzLXByaW1hcnk6Zm9jdXN7Ym94LXNoYWRvdzowIDAgMCAuMTI1ZW0gcmdiYSgwLDIwOSwxNzgsLjI1KX0uaW5wdXQuaXMtbGluaywudGV4dGFyZWEuaXMtbGlua3tib3JkZXItY29sb3I6IzMyNzNkY30uaW5wdXQuaXMtbGluay5pcy1hY3RpdmUsLmlucHV0LmlzLWxpbmsuaXMtZm9jdXNlZCwuaW5wdXQuaXMtbGluazphY3RpdmUsLmlucHV0LmlzLWxpbms6Zm9jdXMsLnRleHRhcmVhLmlzLWxpbmsuaXMtYWN0aXZlLC50ZXh0YXJlYS5pcy1saW5rLmlzLWZvY3VzZWQsLnRleHRhcmVhLmlzLWxpbms6YWN0aXZlLC50ZXh0YXJlYS5pcy1saW5rOmZvY3Vze2JveC1zaGFkb3c6MCAwIDAgLjEyNWVtIHJnYmEoNTAsMTE1LDIyMCwuMjUpfS5pbnB1dC5pcy1pbmZvLC50ZXh0YXJlYS5pcy1pbmZve2JvcmRlci1jb2xvcjojMjA5Y2VlfS5pbnB1dC5pcy1pbmZvLmlzLWFjdGl2ZSwuaW5wdXQuaXMtaW5mby5pcy1mb2N1c2VkLC5pbnB1dC5pcy1pbmZvOmFjdGl2ZSwuaW5wdXQuaXMtaW5mbzpmb2N1cywudGV4dGFyZWEuaXMtaW5mby5pcy1hY3RpdmUsLnRleHRhcmVhLmlzLWluZm8uaXMtZm9jdXNlZCwudGV4dGFyZWEuaXMtaW5mbzphY3RpdmUsLnRleHRhcmVhLmlzLWluZm86Zm9jdXN7Ym94LXNoYWRvdzowIDAgMCAuMTI1ZW0gcmdiYSgzMiwxNTYsMjM4LC4yNSl9LmlucHV0LmlzLXN1Y2Nlc3MsLnRleHRhcmVhLmlzLXN1Y2Nlc3N7Ym9yZGVyLWNvbG9yOiMyM2QxNjB9LmlucHV0LmlzLXN1Y2Nlc3MuaXMtYWN0aXZlLC5pbnB1dC5pcy1zdWNjZXNzLmlzLWZvY3VzZWQsLmlucHV0LmlzLXN1Y2Nlc3M6YWN0aXZlLC5pbnB1dC5pcy1zdWNjZXNzOmZvY3VzLC50ZXh0YXJlYS5pcy1zdWNjZXNzLmlzLWFjdGl2ZSwudGV4dGFyZWEuaXMtc3VjY2Vzcy5pcy1mb2N1c2VkLC50ZXh0YXJlYS5pcy1zdWNjZXNzOmFjdGl2ZSwudGV4dGFyZWEuaXMtc3VjY2Vzczpmb2N1c3tib3gtc2hhZG93OjAgMCAwIC4xMjVlbSByZ2JhKDM1LDIwOSw5NiwuMjUpfS5pbnB1dC5pcy13YXJuaW5nLC50ZXh0YXJlYS5pcy13YXJuaW5ne2JvcmRlci1jb2xvcjojZmZkZDU3fS5pbnB1dC5pcy13YXJuaW5nLmlzLWFjdGl2ZSwuaW5wdXQuaXMtd2FybmluZy5pcy1mb2N1c2VkLC5pbnB1dC5pcy13YXJuaW5nOmFjdGl2ZSwuaW5wdXQuaXMtd2FybmluZzpmb2N1cywudGV4dGFyZWEuaXMtd2FybmluZy5pcy1hY3RpdmUsLnRleHRhcmVhLmlzLXdhcm5pbmcuaXMtZm9jdXNlZCwudGV4dGFyZWEuaXMtd2FybmluZzphY3RpdmUsLnRleHRhcmVhLmlzLXdhcm5pbmc6Zm9jdXN7Ym94LXNoYWRvdzowIDAgMCAuMTI1ZW0gcmdiYSgyNTUsMjIxLDg3LC4yNSl9LmlucHV0LmlzLWRhbmdlciwudGV4dGFyZWEuaXMtZGFuZ2Vye2JvcmRlci1jb2xvcjojZmYzODYwfS5pbnB1dC5pcy1kYW5nZXIuaXMtYWN0aXZlLC5pbnB1dC5pcy1kYW5nZXIuaXMtZm9jdXNlZCwuaW5wdXQuaXMtZGFuZ2VyOmFjdGl2ZSwuaW5wdXQuaXMtZGFuZ2VyOmZvY3VzLC50ZXh0YXJlYS5pcy1kYW5nZXIuaXMtYWN0aXZlLC50ZXh0YXJlYS5pcy1kYW5nZXIuaXMtZm9jdXNlZCwudGV4dGFyZWEuaXMtZGFuZ2VyOmFjdGl2ZSwudGV4dGFyZWEuaXMtZGFuZ2VyOmZvY3Vze2JveC1zaGFkb3c6MCAwIDAgLjEyNWVtIHJnYmEoMjU1LDU2LDk2LC4yNSl9LmlucHV0LmlzLXNtYWxsLC50ZXh0YXJlYS5pcy1zbWFsbHtib3JkZXItcmFkaXVzOjJweDtmb250LXNpemU6Ljc1cmVtfS5pbnB1dC5pcy1tZWRpdW0sLnRleHRhcmVhLmlzLW1lZGl1bXtmb250LXNpemU6MS4yNXJlbX0uaW5wdXQuaXMtbGFyZ2UsLnRleHRhcmVhLmlzLWxhcmdle2ZvbnQtc2l6ZToxLjVyZW19LmlucHV0LmlzLWZ1bGx3aWR0aCwudGV4dGFyZWEuaXMtZnVsbHdpZHRoe2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJX0uaW5wdXQuaXMtaW5saW5lLC50ZXh0YXJlYS5pcy1pbmxpbmV7ZGlzcGxheTppbmxpbmU7d2lkdGg6YXV0b30uaW5wdXQuaXMtcm91bmRlZHtib3JkZXItcmFkaXVzOjI5MDQ4NnB4O3BhZGRpbmctbGVmdDoxZW07cGFkZGluZy1yaWdodDoxZW19LmlucHV0LmlzLXN0YXRpY3tiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtib3gtc2hhZG93Om5vbmU7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowfS50ZXh0YXJlYXtkaXNwbGF5OmJsb2NrO21heC13aWR0aDoxMDAlO21pbi13aWR0aDoxMDAlO3BhZGRpbmc6LjYyNWVtO3Jlc2l6ZTp2ZXJ0aWNhbH0udGV4dGFyZWE6bm90KFtyb3dzXSl7bWF4LWhlaWdodDo2MDBweDttaW4taGVpZ2h0OjEyMHB4fS50ZXh0YXJlYVtyb3dzXXtoZWlnaHQ6aW5pdGlhbH0udGV4dGFyZWEuaGFzLWZpeGVkLXNpemV7cmVzaXplOm5vbmV9LmNoZWNrYm94LC5yYWRpb3tjdXJzb3I6cG9pbnRlcjtkaXNwbGF5OmlubGluZS1ibG9jaztsaW5lLWhlaWdodDoxLjI1O3Bvc2l0aW9uOnJlbGF0aXZlfS5jaGVja2JveCBpbnB1dCwucmFkaW8gaW5wdXR7Y3Vyc29yOnBvaW50ZXJ9LmNoZWNrYm94OmhvdmVyLC5yYWRpbzpob3Zlcntjb2xvcjojMzYzNjM2fS5jaGVja2JveFtkaXNhYmxlZF0sLnJhZGlvW2Rpc2FibGVkXSxmaWVsZHNldFtkaXNhYmxlZF0gLmNoZWNrYm94LGZpZWxkc2V0W2Rpc2FibGVkXSAucmFkaW97Y29sb3I6IzdhN2E3YTtjdXJzb3I6bm90LWFsbG93ZWR9LnJhZGlvKy5yYWRpb3ttYXJnaW4tbGVmdDouNWVtfS5zZWxlY3R7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWF4LXdpZHRoOjEwMCU7cG9zaXRpb246cmVsYXRpdmU7dmVydGljYWwtYWxpZ246dG9wfS5zZWxlY3Q6bm90KC5pcy1tdWx0aXBsZSl7aGVpZ2h0OjIuMjVlbX0uc2VsZWN0Om5vdCguaXMtbXVsdGlwbGUpOm5vdCguaXMtbG9hZGluZyk6OmFmdGVye2JvcmRlci1jb2xvcjojMzI3M2RjO3JpZ2h0OjEuMTI1ZW07ei1pbmRleDo0fS5zZWxlY3QuaXMtcm91bmRlZCBzZWxlY3R7Ym9yZGVyLXJhZGl1czoyOTA0ODZweDtwYWRkaW5nLWxlZnQ6MWVtfS5zZWxlY3Qgc2VsZWN0e2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItY29sb3I6I2RiZGJkYjtjb2xvcjojMzYzNjM2O2N1cnNvcjpwb2ludGVyO2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjFlbTttYXgtd2lkdGg6MTAwJTtvdXRsaW5lOjB9LnNlbGVjdCBzZWxlY3Q6Oi1tb3otcGxhY2Vob2xkZXJ7Y29sb3I6cmdiYSg1NCw1NCw1NCwuMyl9LnNlbGVjdCBzZWxlY3Q6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6cmdiYSg1NCw1NCw1NCwuMyl9LnNlbGVjdCBzZWxlY3Q6LW1vei1wbGFjZWhvbGRlcntjb2xvcjpyZ2JhKDU0LDU0LDU0LC4zKX0uc2VsZWN0IHNlbGVjdDotbXMtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6cmdiYSg1NCw1NCw1NCwuMyl9LnNlbGVjdCBzZWxlY3QuaXMtaG92ZXJlZCwuc2VsZWN0IHNlbGVjdDpob3Zlcntib3JkZXItY29sb3I6I2I1YjViNX0uc2VsZWN0IHNlbGVjdC5pcy1hY3RpdmUsLnNlbGVjdCBzZWxlY3QuaXMtZm9jdXNlZCwuc2VsZWN0IHNlbGVjdDphY3RpdmUsLnNlbGVjdCBzZWxlY3Q6Zm9jdXN7Ym9yZGVyLWNvbG9yOiMzMjczZGM7Ym94LXNoYWRvdzowIDAgMCAuMTI1ZW0gcmdiYSg1MCwxMTUsMjIwLC4yNSl9LnNlbGVjdCBzZWxlY3RbZGlzYWJsZWRdLGZpZWxkc2V0W2Rpc2FibGVkXSAuc2VsZWN0IHNlbGVjdHtiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7Ym9yZGVyLWNvbG9yOiNmNWY1ZjU7Ym94LXNoYWRvdzpub25lO2NvbG9yOiM3YTdhN2F9LnNlbGVjdCBzZWxlY3RbZGlzYWJsZWRdOjotbW96LXBsYWNlaG9sZGVyLGZpZWxkc2V0W2Rpc2FibGVkXSAuc2VsZWN0IHNlbGVjdDo6LW1vei1wbGFjZWhvbGRlcntjb2xvcjpyZ2JhKDEyMiwxMjIsMTIyLC4zKX0uc2VsZWN0IHNlbGVjdFtkaXNhYmxlZF06Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsZmllbGRzZXRbZGlzYWJsZWRdIC5zZWxlY3Qgc2VsZWN0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOnJnYmEoMTIyLDEyMiwxMjIsLjMpfS5zZWxlY3Qgc2VsZWN0W2Rpc2FibGVkXTotbW96LXBsYWNlaG9sZGVyLGZpZWxkc2V0W2Rpc2FibGVkXSAuc2VsZWN0IHNlbGVjdDotbW96LXBsYWNlaG9sZGVye2NvbG9yOnJnYmEoMTIyLDEyMiwxMjIsLjMpfS5zZWxlY3Qgc2VsZWN0W2Rpc2FibGVkXTotbXMtaW5wdXQtcGxhY2Vob2xkZXIsZmllbGRzZXRbZGlzYWJsZWRdIC5zZWxlY3Qgc2VsZWN0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjpyZ2JhKDEyMiwxMjIsMTIyLC4zKX0uc2VsZWN0IHNlbGVjdDo6LW1zLWV4cGFuZHtkaXNwbGF5Om5vbmV9LnNlbGVjdCBzZWxlY3RbZGlzYWJsZWRdOmhvdmVyLGZpZWxkc2V0W2Rpc2FibGVkXSAuc2VsZWN0IHNlbGVjdDpob3Zlcntib3JkZXItY29sb3I6I2Y1ZjVmNX0uc2VsZWN0IHNlbGVjdDpub3QoW211bHRpcGxlXSl7cGFkZGluZy1yaWdodDoyLjVlbX0uc2VsZWN0IHNlbGVjdFttdWx0aXBsZV17aGVpZ2h0OmF1dG87cGFkZGluZzowfS5zZWxlY3Qgc2VsZWN0W211bHRpcGxlXSBvcHRpb257cGFkZGluZzouNWVtIDFlbX0uc2VsZWN0Om5vdCguaXMtbXVsdGlwbGUpOm5vdCguaXMtbG9hZGluZyk6aG92ZXI6OmFmdGVye2JvcmRlci1jb2xvcjojMzYzNjM2fS5zZWxlY3QuaXMtd2hpdGU6bm90KDpob3Zlcik6OmFmdGVye2JvcmRlci1jb2xvcjojZmZmfS5zZWxlY3QuaXMtd2hpdGUgc2VsZWN0e2JvcmRlci1jb2xvcjojZmZmfS5zZWxlY3QuaXMtd2hpdGUgc2VsZWN0LmlzLWhvdmVyZWQsLnNlbGVjdC5pcy13aGl0ZSBzZWxlY3Q6aG92ZXJ7Ym9yZGVyLWNvbG9yOiNmMmYyZjJ9LnNlbGVjdC5pcy13aGl0ZSBzZWxlY3QuaXMtYWN0aXZlLC5zZWxlY3QuaXMtd2hpdGUgc2VsZWN0LmlzLWZvY3VzZWQsLnNlbGVjdC5pcy13aGl0ZSBzZWxlY3Q6YWN0aXZlLC5zZWxlY3QuaXMtd2hpdGUgc2VsZWN0OmZvY3Vze2JveC1zaGFkb3c6MCAwIDAgLjEyNWVtIHJnYmEoMjU1LDI1NSwyNTUsLjI1KX0uc2VsZWN0LmlzLWJsYWNrOm5vdCg6aG92ZXIpOjphZnRlcntib3JkZXItY29sb3I6IzBhMGEwYX0uc2VsZWN0LmlzLWJsYWNrIHNlbGVjdHtib3JkZXItY29sb3I6IzBhMGEwYX0uc2VsZWN0LmlzLWJsYWNrIHNlbGVjdC5pcy1ob3ZlcmVkLC5zZWxlY3QuaXMtYmxhY2sgc2VsZWN0OmhvdmVye2JvcmRlci1jb2xvcjojMDAwfS5zZWxlY3QuaXMtYmxhY2sgc2VsZWN0LmlzLWFjdGl2ZSwuc2VsZWN0LmlzLWJsYWNrIHNlbGVjdC5pcy1mb2N1c2VkLC5zZWxlY3QuaXMtYmxhY2sgc2VsZWN0OmFjdGl2ZSwuc2VsZWN0LmlzLWJsYWNrIHNlbGVjdDpmb2N1c3tib3gtc2hhZG93OjAgMCAwIC4xMjVlbSByZ2JhKDEwLDEwLDEwLC4yNSl9LnNlbGVjdC5pcy1saWdodDpub3QoOmhvdmVyKTo6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOiNmNWY1ZjV9LnNlbGVjdC5pcy1saWdodCBzZWxlY3R7Ym9yZGVyLWNvbG9yOiNmNWY1ZjV9LnNlbGVjdC5pcy1saWdodCBzZWxlY3QuaXMtaG92ZXJlZCwuc2VsZWN0LmlzLWxpZ2h0IHNlbGVjdDpob3Zlcntib3JkZXItY29sb3I6I2U4ZThlOH0uc2VsZWN0LmlzLWxpZ2h0IHNlbGVjdC5pcy1hY3RpdmUsLnNlbGVjdC5pcy1saWdodCBzZWxlY3QuaXMtZm9jdXNlZCwuc2VsZWN0LmlzLWxpZ2h0IHNlbGVjdDphY3RpdmUsLnNlbGVjdC5pcy1saWdodCBzZWxlY3Q6Zm9jdXN7Ym94LXNoYWRvdzowIDAgMCAuMTI1ZW0gcmdiYSgyNDUsMjQ1LDI0NSwuMjUpfS5zZWxlY3QuaXMtZGFyazpub3QoOmhvdmVyKTo6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOiMzNjM2MzZ9LnNlbGVjdC5pcy1kYXJrIHNlbGVjdHtib3JkZXItY29sb3I6IzM2MzYzNn0uc2VsZWN0LmlzLWRhcmsgc2VsZWN0LmlzLWhvdmVyZWQsLnNlbGVjdC5pcy1kYXJrIHNlbGVjdDpob3Zlcntib3JkZXItY29sb3I6IzI5MjkyOX0uc2VsZWN0LmlzLWRhcmsgc2VsZWN0LmlzLWFjdGl2ZSwuc2VsZWN0LmlzLWRhcmsgc2VsZWN0LmlzLWZvY3VzZWQsLnNlbGVjdC5pcy1kYXJrIHNlbGVjdDphY3RpdmUsLnNlbGVjdC5pcy1kYXJrIHNlbGVjdDpmb2N1c3tib3gtc2hhZG93OjAgMCAwIC4xMjVlbSByZ2JhKDU0LDU0LDU0LC4yNSl9LnNlbGVjdC5pcy1wcmltYXJ5Om5vdCg6aG92ZXIpOjphZnRlcntib3JkZXItY29sb3I6IzAwZDFiMn0uc2VsZWN0LmlzLXByaW1hcnkgc2VsZWN0e2JvcmRlci1jb2xvcjojMDBkMWIyfS5zZWxlY3QuaXMtcHJpbWFyeSBzZWxlY3QuaXMtaG92ZXJlZCwuc2VsZWN0LmlzLXByaW1hcnkgc2VsZWN0OmhvdmVye2JvcmRlci1jb2xvcjojMDBiODljfS5zZWxlY3QuaXMtcHJpbWFyeSBzZWxlY3QuaXMtYWN0aXZlLC5zZWxlY3QuaXMtcHJpbWFyeSBzZWxlY3QuaXMtZm9jdXNlZCwuc2VsZWN0LmlzLXByaW1hcnkgc2VsZWN0OmFjdGl2ZSwuc2VsZWN0LmlzLXByaW1hcnkgc2VsZWN0OmZvY3Vze2JveC1zaGFkb3c6MCAwIDAgLjEyNWVtIHJnYmEoMCwyMDksMTc4LC4yNSl9LnNlbGVjdC5pcy1saW5rOm5vdCg6aG92ZXIpOjphZnRlcntib3JkZXItY29sb3I6IzMyNzNkY30uc2VsZWN0LmlzLWxpbmsgc2VsZWN0e2JvcmRlci1jb2xvcjojMzI3M2RjfS5zZWxlY3QuaXMtbGluayBzZWxlY3QuaXMtaG92ZXJlZCwuc2VsZWN0LmlzLWxpbmsgc2VsZWN0OmhvdmVye2JvcmRlci1jb2xvcjojMjM2NmQxfS5zZWxlY3QuaXMtbGluayBzZWxlY3QuaXMtYWN0aXZlLC5zZWxlY3QuaXMtbGluayBzZWxlY3QuaXMtZm9jdXNlZCwuc2VsZWN0LmlzLWxpbmsgc2VsZWN0OmFjdGl2ZSwuc2VsZWN0LmlzLWxpbmsgc2VsZWN0OmZvY3Vze2JveC1zaGFkb3c6MCAwIDAgLjEyNWVtIHJnYmEoNTAsMTE1LDIyMCwuMjUpfS5zZWxlY3QuaXMtaW5mbzpub3QoOmhvdmVyKTo6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOiMyMDljZWV9LnNlbGVjdC5pcy1pbmZvIHNlbGVjdHtib3JkZXItY29sb3I6IzIwOWNlZX0uc2VsZWN0LmlzLWluZm8gc2VsZWN0LmlzLWhvdmVyZWQsLnNlbGVjdC5pcy1pbmZvIHNlbGVjdDpob3Zlcntib3JkZXItY29sb3I6IzExOGZlNH0uc2VsZWN0LmlzLWluZm8gc2VsZWN0LmlzLWFjdGl2ZSwuc2VsZWN0LmlzLWluZm8gc2VsZWN0LmlzLWZvY3VzZWQsLnNlbGVjdC5pcy1pbmZvIHNlbGVjdDphY3RpdmUsLnNlbGVjdC5pcy1pbmZvIHNlbGVjdDpmb2N1c3tib3gtc2hhZG93OjAgMCAwIC4xMjVlbSByZ2JhKDMyLDE1NiwyMzgsLjI1KX0uc2VsZWN0LmlzLXN1Y2Nlc3M6bm90KDpob3Zlcik6OmFmdGVye2JvcmRlci1jb2xvcjojMjNkMTYwfS5zZWxlY3QuaXMtc3VjY2VzcyBzZWxlY3R7Ym9yZGVyLWNvbG9yOiMyM2QxNjB9LnNlbGVjdC5pcy1zdWNjZXNzIHNlbGVjdC5pcy1ob3ZlcmVkLC5zZWxlY3QuaXMtc3VjY2VzcyBzZWxlY3Q6aG92ZXJ7Ym9yZGVyLWNvbG9yOiMyMGJjNTZ9LnNlbGVjdC5pcy1zdWNjZXNzIHNlbGVjdC5pcy1hY3RpdmUsLnNlbGVjdC5pcy1zdWNjZXNzIHNlbGVjdC5pcy1mb2N1c2VkLC5zZWxlY3QuaXMtc3VjY2VzcyBzZWxlY3Q6YWN0aXZlLC5zZWxlY3QuaXMtc3VjY2VzcyBzZWxlY3Q6Zm9jdXN7Ym94LXNoYWRvdzowIDAgMCAuMTI1ZW0gcmdiYSgzNSwyMDksOTYsLjI1KX0uc2VsZWN0LmlzLXdhcm5pbmc6bm90KDpob3Zlcik6OmFmdGVye2JvcmRlci1jb2xvcjojZmZkZDU3fS5zZWxlY3QuaXMtd2FybmluZyBzZWxlY3R7Ym9yZGVyLWNvbG9yOiNmZmRkNTd9LnNlbGVjdC5pcy13YXJuaW5nIHNlbGVjdC5pcy1ob3ZlcmVkLC5zZWxlY3QuaXMtd2FybmluZyBzZWxlY3Q6aG92ZXJ7Ym9yZGVyLWNvbG9yOiNmZmQ4M2R9LnNlbGVjdC5pcy13YXJuaW5nIHNlbGVjdC5pcy1hY3RpdmUsLnNlbGVjdC5pcy13YXJuaW5nIHNlbGVjdC5pcy1mb2N1c2VkLC5zZWxlY3QuaXMtd2FybmluZyBzZWxlY3Q6YWN0aXZlLC5zZWxlY3QuaXMtd2FybmluZyBzZWxlY3Q6Zm9jdXN7Ym94LXNoYWRvdzowIDAgMCAuMTI1ZW0gcmdiYSgyNTUsMjIxLDg3LC4yNSl9LnNlbGVjdC5pcy1kYW5nZXI6bm90KDpob3Zlcik6OmFmdGVye2JvcmRlci1jb2xvcjojZmYzODYwfS5zZWxlY3QuaXMtZGFuZ2VyIHNlbGVjdHtib3JkZXItY29sb3I6I2ZmMzg2MH0uc2VsZWN0LmlzLWRhbmdlciBzZWxlY3QuaXMtaG92ZXJlZCwuc2VsZWN0LmlzLWRhbmdlciBzZWxlY3Q6aG92ZXJ7Ym9yZGVyLWNvbG9yOiNmZjFmNGJ9LnNlbGVjdC5pcy1kYW5nZXIgc2VsZWN0LmlzLWFjdGl2ZSwuc2VsZWN0LmlzLWRhbmdlciBzZWxlY3QuaXMtZm9jdXNlZCwuc2VsZWN0LmlzLWRhbmdlciBzZWxlY3Q6YWN0aXZlLC5zZWxlY3QuaXMtZGFuZ2VyIHNlbGVjdDpmb2N1c3tib3gtc2hhZG93OjAgMCAwIC4xMjVlbSByZ2JhKDI1NSw1Niw5NiwuMjUpfS5zZWxlY3QuaXMtc21hbGx7Ym9yZGVyLXJhZGl1czoycHg7Zm9udC1zaXplOi43NXJlbX0uc2VsZWN0LmlzLW1lZGl1bXtmb250LXNpemU6MS4yNXJlbX0uc2VsZWN0LmlzLWxhcmdle2ZvbnQtc2l6ZToxLjVyZW19LnNlbGVjdC5pcy1kaXNhYmxlZDo6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOiM3YTdhN2F9LnNlbGVjdC5pcy1mdWxsd2lkdGh7d2lkdGg6MTAwJX0uc2VsZWN0LmlzLWZ1bGx3aWR0aCBzZWxlY3R7d2lkdGg6MTAwJX0uc2VsZWN0LmlzLWxvYWRpbmc6OmFmdGVye21hcmdpbi10b3A6MDtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDouNjI1ZW07dG9wOi42MjVlbTstd2Via2l0LXRyYW5zZm9ybTpub25lO3RyYW5zZm9ybTpub25lfS5zZWxlY3QuaXMtbG9hZGluZy5pcy1zbWFsbDphZnRlcntmb250LXNpemU6Ljc1cmVtfS5zZWxlY3QuaXMtbG9hZGluZy5pcy1tZWRpdW06YWZ0ZXJ7Zm9udC1zaXplOjEuMjVyZW19LnNlbGVjdC5pcy1sb2FkaW5nLmlzLWxhcmdlOmFmdGVye2ZvbnQtc2l6ZToxLjVyZW19LmZpbGV7YWxpZ24taXRlbXM6c3RyZXRjaDtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7cG9zaXRpb246cmVsYXRpdmV9LmZpbGUuaXMtd2hpdGUgLmZpbGUtY3Rhe2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6IzBhMGEwYX0uZmlsZS5pcy13aGl0ZS5pcy1ob3ZlcmVkIC5maWxlLWN0YSwuZmlsZS5pcy13aGl0ZTpob3ZlciAuZmlsZS1jdGF7YmFja2dyb3VuZC1jb2xvcjojZjlmOWY5O2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojMGEwYTBhfS5maWxlLmlzLXdoaXRlLmlzLWZvY3VzZWQgLmZpbGUtY3RhLC5maWxlLmlzLXdoaXRlOmZvY3VzIC5maWxlLWN0YXtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Ym94LXNoYWRvdzowIDAgLjVlbSByZ2JhKDI1NSwyNTUsMjU1LC4yNSk7Y29sb3I6IzBhMGEwYX0uZmlsZS5pcy13aGl0ZS5pcy1hY3RpdmUgLmZpbGUtY3RhLC5maWxlLmlzLXdoaXRlOmFjdGl2ZSAuZmlsZS1jdGF7YmFja2dyb3VuZC1jb2xvcjojZjJmMmYyO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojMGEwYTBhfS5maWxlLmlzLWJsYWNrIC5maWxlLWN0YXtiYWNrZ3JvdW5kLWNvbG9yOiMwYTBhMGE7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiNmZmZ9LmZpbGUuaXMtYmxhY2suaXMtaG92ZXJlZCAuZmlsZS1jdGEsLmZpbGUuaXMtYmxhY2s6aG92ZXIgLmZpbGUtY3Rhe2JhY2tncm91bmQtY29sb3I6IzA0MDQwNDtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6I2ZmZn0uZmlsZS5pcy1ibGFjay5pcy1mb2N1c2VkIC5maWxlLWN0YSwuZmlsZS5pcy1ibGFjazpmb2N1cyAuZmlsZS1jdGF7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2JveC1zaGFkb3c6MCAwIC41ZW0gcmdiYSgxMCwxMCwxMCwuMjUpO2NvbG9yOiNmZmZ9LmZpbGUuaXMtYmxhY2suaXMtYWN0aXZlIC5maWxlLWN0YSwuZmlsZS5pcy1ibGFjazphY3RpdmUgLmZpbGUtY3Rhe2JhY2tncm91bmQtY29sb3I6IzAwMDtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6I2ZmZn0uZmlsZS5pcy1saWdodCAuZmlsZS1jdGF7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojMzYzNjM2fS5maWxlLmlzLWxpZ2h0LmlzLWhvdmVyZWQgLmZpbGUtY3RhLC5maWxlLmlzLWxpZ2h0OmhvdmVyIC5maWxlLWN0YXtiYWNrZ3JvdW5kLWNvbG9yOiNlZWU7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiMzNjM2MzZ9LmZpbGUuaXMtbGlnaHQuaXMtZm9jdXNlZCAuZmlsZS1jdGEsLmZpbGUuaXMtbGlnaHQ6Zm9jdXMgLmZpbGUtY3Rhe2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtib3gtc2hhZG93OjAgMCAuNWVtIHJnYmEoMjQ1LDI0NSwyNDUsLjI1KTtjb2xvcjojMzYzNjM2fS5maWxlLmlzLWxpZ2h0LmlzLWFjdGl2ZSAuZmlsZS1jdGEsLmZpbGUuaXMtbGlnaHQ6YWN0aXZlIC5maWxlLWN0YXtiYWNrZ3JvdW5kLWNvbG9yOiNlOGU4ZTg7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiMzNjM2MzZ9LmZpbGUuaXMtZGFyayAuZmlsZS1jdGF7YmFja2dyb3VuZC1jb2xvcjojMzYzNjM2O2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZjVmNWY1fS5maWxlLmlzLWRhcmsuaXMtaG92ZXJlZCAuZmlsZS1jdGEsLmZpbGUuaXMtZGFyazpob3ZlciAuZmlsZS1jdGF7YmFja2dyb3VuZC1jb2xvcjojMmYyZjJmO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZjVmNWY1fS5maWxlLmlzLWRhcmsuaXMtZm9jdXNlZCAuZmlsZS1jdGEsLmZpbGUuaXMtZGFyazpmb2N1cyAuZmlsZS1jdGF7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2JveC1zaGFkb3c6MCAwIC41ZW0gcmdiYSg1NCw1NCw1NCwuMjUpO2NvbG9yOiNmNWY1ZjV9LmZpbGUuaXMtZGFyay5pcy1hY3RpdmUgLmZpbGUtY3RhLC5maWxlLmlzLWRhcms6YWN0aXZlIC5maWxlLWN0YXtiYWNrZ3JvdW5kLWNvbG9yOiMyOTI5Mjk7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiNmNWY1ZjV9LmZpbGUuaXMtcHJpbWFyeSAuZmlsZS1jdGF7YmFja2dyb3VuZC1jb2xvcjojMDBkMWIyO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZmZmfS5maWxlLmlzLXByaW1hcnkuaXMtaG92ZXJlZCAuZmlsZS1jdGEsLmZpbGUuaXMtcHJpbWFyeTpob3ZlciAuZmlsZS1jdGF7YmFja2dyb3VuZC1jb2xvcjojMDBjNGE3O2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZmZmfS5maWxlLmlzLXByaW1hcnkuaXMtZm9jdXNlZCAuZmlsZS1jdGEsLmZpbGUuaXMtcHJpbWFyeTpmb2N1cyAuZmlsZS1jdGF7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2JveC1zaGFkb3c6MCAwIC41ZW0gcmdiYSgwLDIwOSwxNzgsLjI1KTtjb2xvcjojZmZmfS5maWxlLmlzLXByaW1hcnkuaXMtYWN0aXZlIC5maWxlLWN0YSwuZmlsZS5pcy1wcmltYXJ5OmFjdGl2ZSAuZmlsZS1jdGF7YmFja2dyb3VuZC1jb2xvcjojMDBiODljO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZmZmfS5maWxlLmlzLWxpbmsgLmZpbGUtY3Rhe2JhY2tncm91bmQtY29sb3I6IzMyNzNkYztib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6I2ZmZn0uZmlsZS5pcy1saW5rLmlzLWhvdmVyZWQgLmZpbGUtY3RhLC5maWxlLmlzLWxpbms6aG92ZXIgLmZpbGUtY3Rhe2JhY2tncm91bmQtY29sb3I6IzI3NmNkYTtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6I2ZmZn0uZmlsZS5pcy1saW5rLmlzLWZvY3VzZWQgLmZpbGUtY3RhLC5maWxlLmlzLWxpbms6Zm9jdXMgLmZpbGUtY3Rhe2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtib3gtc2hhZG93OjAgMCAuNWVtIHJnYmEoNTAsMTE1LDIyMCwuMjUpO2NvbG9yOiNmZmZ9LmZpbGUuaXMtbGluay5pcy1hY3RpdmUgLmZpbGUtY3RhLC5maWxlLmlzLWxpbms6YWN0aXZlIC5maWxlLWN0YXtiYWNrZ3JvdW5kLWNvbG9yOiMyMzY2ZDE7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiNmZmZ9LmZpbGUuaXMtaW5mbyAuZmlsZS1jdGF7YmFja2dyb3VuZC1jb2xvcjojMjA5Y2VlO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZmZmfS5maWxlLmlzLWluZm8uaXMtaG92ZXJlZCAuZmlsZS1jdGEsLmZpbGUuaXMtaW5mbzpob3ZlciAuZmlsZS1jdGF7YmFja2dyb3VuZC1jb2xvcjojMTQ5NmVkO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZmZmfS5maWxlLmlzLWluZm8uaXMtZm9jdXNlZCAuZmlsZS1jdGEsLmZpbGUuaXMtaW5mbzpmb2N1cyAuZmlsZS1jdGF7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2JveC1zaGFkb3c6MCAwIC41ZW0gcmdiYSgzMiwxNTYsMjM4LC4yNSk7Y29sb3I6I2ZmZn0uZmlsZS5pcy1pbmZvLmlzLWFjdGl2ZSAuZmlsZS1jdGEsLmZpbGUuaXMtaW5mbzphY3RpdmUgLmZpbGUtY3Rhe2JhY2tncm91bmQtY29sb3I6IzExOGZlNDtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6I2ZmZn0uZmlsZS5pcy1zdWNjZXNzIC5maWxlLWN0YXtiYWNrZ3JvdW5kLWNvbG9yOiMyM2QxNjA7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiNmZmZ9LmZpbGUuaXMtc3VjY2Vzcy5pcy1ob3ZlcmVkIC5maWxlLWN0YSwuZmlsZS5pcy1zdWNjZXNzOmhvdmVyIC5maWxlLWN0YXtiYWNrZ3JvdW5kLWNvbG9yOiMyMmM2NWI7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiNmZmZ9LmZpbGUuaXMtc3VjY2Vzcy5pcy1mb2N1c2VkIC5maWxlLWN0YSwuZmlsZS5pcy1zdWNjZXNzOmZvY3VzIC5maWxlLWN0YXtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Ym94LXNoYWRvdzowIDAgLjVlbSByZ2JhKDM1LDIwOSw5NiwuMjUpO2NvbG9yOiNmZmZ9LmZpbGUuaXMtc3VjY2Vzcy5pcy1hY3RpdmUgLmZpbGUtY3RhLC5maWxlLmlzLXN1Y2Nlc3M6YWN0aXZlIC5maWxlLWN0YXtiYWNrZ3JvdW5kLWNvbG9yOiMyMGJjNTY7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiNmZmZ9LmZpbGUuaXMtd2FybmluZyAuZmlsZS1jdGF7YmFja2dyb3VuZC1jb2xvcjojZmZkZDU3O2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjpyZ2JhKDAsMCwwLC43KX0uZmlsZS5pcy13YXJuaW5nLmlzLWhvdmVyZWQgLmZpbGUtY3RhLC5maWxlLmlzLXdhcm5pbmc6aG92ZXIgLmZpbGUtY3Rhe2JhY2tncm91bmQtY29sb3I6I2ZmZGI0YTtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6cmdiYSgwLDAsMCwuNyl9LmZpbGUuaXMtd2FybmluZy5pcy1mb2N1c2VkIC5maWxlLWN0YSwuZmlsZS5pcy13YXJuaW5nOmZvY3VzIC5maWxlLWN0YXtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Ym94LXNoYWRvdzowIDAgLjVlbSByZ2JhKDI1NSwyMjEsODcsLjI1KTtjb2xvcjpyZ2JhKDAsMCwwLC43KX0uZmlsZS5pcy13YXJuaW5nLmlzLWFjdGl2ZSAuZmlsZS1jdGEsLmZpbGUuaXMtd2FybmluZzphY3RpdmUgLmZpbGUtY3Rhe2JhY2tncm91bmQtY29sb3I6I2ZmZDgzZDtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6cmdiYSgwLDAsMCwuNyl9LmZpbGUuaXMtZGFuZ2VyIC5maWxlLWN0YXtiYWNrZ3JvdW5kLWNvbG9yOiNmZjM4NjA7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiNmZmZ9LmZpbGUuaXMtZGFuZ2VyLmlzLWhvdmVyZWQgLmZpbGUtY3RhLC5maWxlLmlzLWRhbmdlcjpob3ZlciAuZmlsZS1jdGF7YmFja2dyb3VuZC1jb2xvcjojZmYyYjU2O2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZmZmfS5maWxlLmlzLWRhbmdlci5pcy1mb2N1c2VkIC5maWxlLWN0YSwuZmlsZS5pcy1kYW5nZXI6Zm9jdXMgLmZpbGUtY3Rhe2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtib3gtc2hhZG93OjAgMCAuNWVtIHJnYmEoMjU1LDU2LDk2LC4yNSk7Y29sb3I6I2ZmZn0uZmlsZS5pcy1kYW5nZXIuaXMtYWN0aXZlIC5maWxlLWN0YSwuZmlsZS5pcy1kYW5nZXI6YWN0aXZlIC5maWxlLWN0YXtiYWNrZ3JvdW5kLWNvbG9yOiNmZjFmNGI7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiNmZmZ9LmZpbGUuaXMtc21hbGx7Zm9udC1zaXplOi43NXJlbX0uZmlsZS5pcy1tZWRpdW17Zm9udC1zaXplOjEuMjVyZW19LmZpbGUuaXMtbWVkaXVtIC5maWxlLWljb24gLmZhe2ZvbnQtc2l6ZToyMXB4fS5maWxlLmlzLWxhcmdle2ZvbnQtc2l6ZToxLjVyZW19LmZpbGUuaXMtbGFyZ2UgLmZpbGUtaWNvbiAuZmF7Zm9udC1zaXplOjI4cHh9LmZpbGUuaGFzLW5hbWUgLmZpbGUtY3Rhe2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjA7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MH0uZmlsZS5oYXMtbmFtZSAuZmlsZS1uYW1le2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MDtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjB9LmZpbGUuaGFzLW5hbWUuaXMtZW1wdHkgLmZpbGUtY3Rhe2JvcmRlci1yYWRpdXM6NHB4fS5maWxlLmhhcy1uYW1lLmlzLWVtcHR5IC5maWxlLW5hbWV7ZGlzcGxheTpub25lfS5maWxlLmlzLWJveGVkIC5maWxlLWxhYmVse2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn0uZmlsZS5pcy1ib3hlZCAuZmlsZS1jdGF7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2hlaWdodDphdXRvO3BhZGRpbmc6MWVtIDNlbX0uZmlsZS5pcy1ib3hlZCAuZmlsZS1uYW1le2JvcmRlci13aWR0aDowIDFweCAxcHh9LmZpbGUuaXMtYm94ZWQgLmZpbGUtaWNvbntoZWlnaHQ6MS41ZW07d2lkdGg6MS41ZW19LmZpbGUuaXMtYm94ZWQgLmZpbGUtaWNvbiAuZmF7Zm9udC1zaXplOjIxcHh9LmZpbGUuaXMtYm94ZWQuaXMtc21hbGwgLmZpbGUtaWNvbiAuZmF7Zm9udC1zaXplOjE0cHh9LmZpbGUuaXMtYm94ZWQuaXMtbWVkaXVtIC5maWxlLWljb24gLmZhe2ZvbnQtc2l6ZToyOHB4fS5maWxlLmlzLWJveGVkLmlzLWxhcmdlIC5maWxlLWljb24gLmZhe2ZvbnQtc2l6ZTozNXB4fS5maWxlLmlzLWJveGVkLmhhcy1uYW1lIC5maWxlLWN0YXtib3JkZXItcmFkaXVzOjRweCA0cHggMCAwfS5maWxlLmlzLWJveGVkLmhhcy1uYW1lIC5maWxlLW5hbWV7Ym9yZGVyLXJhZGl1czowIDAgNHB4IDRweDtib3JkZXItd2lkdGg6MCAxcHggMXB4fS5maWxlLmlzLWNlbnRlcmVke2p1c3RpZnktY29udGVudDpjZW50ZXJ9LmZpbGUuaXMtZnVsbHdpZHRoIC5maWxlLWxhYmVse3dpZHRoOjEwMCV9LmZpbGUuaXMtZnVsbHdpZHRoIC5maWxlLW5hbWV7ZmxleC1ncm93OjE7bWF4LXdpZHRoOm5vbmV9LmZpbGUuaXMtcmlnaHR7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfS5maWxlLmlzLXJpZ2h0IC5maWxlLWN0YXtib3JkZXItcmFkaXVzOjAgNHB4IDRweCAwfS5maWxlLmlzLXJpZ2h0IC5maWxlLW5hbWV7Ym9yZGVyLXJhZGl1czo0cHggMCAwIDRweDtib3JkZXItd2lkdGg6MXB4IDAgMXB4IDFweDtvcmRlcjotMX0uZmlsZS1sYWJlbHthbGlnbi1pdGVtczpzdHJldGNoO2Rpc3BsYXk6ZmxleDtjdXJzb3I6cG9pbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtvdmVyZmxvdzpoaWRkZW47cG9zaXRpb246cmVsYXRpdmV9LmZpbGUtbGFiZWw6aG92ZXIgLmZpbGUtY3Rhe2JhY2tncm91bmQtY29sb3I6I2VlZTtjb2xvcjojMzYzNjM2fS5maWxlLWxhYmVsOmhvdmVyIC5maWxlLW5hbWV7Ym9yZGVyLWNvbG9yOiNkNWQ1ZDV9LmZpbGUtbGFiZWw6YWN0aXZlIC5maWxlLWN0YXtiYWNrZ3JvdW5kLWNvbG9yOiNlOGU4ZTg7Y29sb3I6IzM2MzYzNn0uZmlsZS1sYWJlbDphY3RpdmUgLmZpbGUtbmFtZXtib3JkZXItY29sb3I6I2NmY2ZjZn0uZmlsZS1pbnB1dHtoZWlnaHQ6MTAwJTtsZWZ0OjA7b3BhY2l0eTowO291dGxpbmU6MDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDt3aWR0aDoxMDAlfS5maWxlLWN0YSwuZmlsZS1uYW1le2JvcmRlci1jb2xvcjojZGJkYmRiO2JvcmRlci1yYWRpdXM6NHB4O2ZvbnQtc2l6ZToxZW07cGFkZGluZy1sZWZ0OjFlbTtwYWRkaW5nLXJpZ2h0OjFlbTt3aGl0ZS1zcGFjZTpub3dyYXB9LmZpbGUtY3Rhe2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTtjb2xvcjojNGE0YTRhfS5maWxlLW5hbWV7Ym9yZGVyLWNvbG9yOiNkYmRiZGI7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci13aWR0aDoxcHggMXB4IDFweCAwO2Rpc3BsYXk6YmxvY2s7bWF4LXdpZHRoOjE2ZW07b3ZlcmZsb3c6aGlkZGVuO3RleHQtYWxpZ246bGVmdDt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzfS5maWxlLWljb257YWxpZ24taXRlbXM6Y2VudGVyO2Rpc3BsYXk6ZmxleDtoZWlnaHQ6MWVtO2p1c3RpZnktY29udGVudDpjZW50ZXI7bWFyZ2luLXJpZ2h0Oi41ZW07d2lkdGg6MWVtfS5maWxlLWljb24gLmZhe2ZvbnQtc2l6ZToxNHB4fS5sYWJlbHtjb2xvcjojMzYzNjM2O2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjFyZW07Zm9udC13ZWlnaHQ6NzAwfS5sYWJlbDpub3QoOmxhc3QtY2hpbGQpe21hcmdpbi1ib3R0b206LjVlbX0ubGFiZWwuaXMtc21hbGx7Zm9udC1zaXplOi43NXJlbX0ubGFiZWwuaXMtbWVkaXVte2ZvbnQtc2l6ZToxLjI1cmVtfS5sYWJlbC5pcy1sYXJnZXtmb250LXNpemU6MS41cmVtfS5oZWxwe2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOi43NXJlbTttYXJnaW4tdG9wOi4yNXJlbX0uaGVscC5pcy13aGl0ZXtjb2xvcjojZmZmfS5oZWxwLmlzLWJsYWNre2NvbG9yOiMwYTBhMGF9LmhlbHAuaXMtbGlnaHR7Y29sb3I6I2Y1ZjVmNX0uaGVscC5pcy1kYXJre2NvbG9yOiMzNjM2MzZ9LmhlbHAuaXMtcHJpbWFyeXtjb2xvcjojMDBkMWIyfS5oZWxwLmlzLWxpbmt7Y29sb3I6IzMyNzNkY30uaGVscC5pcy1pbmZve2NvbG9yOiMyMDljZWV9LmhlbHAuaXMtc3VjY2Vzc3tjb2xvcjojMjNkMTYwfS5oZWxwLmlzLXdhcm5pbmd7Y29sb3I6I2ZmZGQ1N30uaGVscC5pcy1kYW5nZXJ7Y29sb3I6I2ZmMzg2MH0uZmllbGQ6bm90KDpsYXN0LWNoaWxkKXttYXJnaW4tYm90dG9tOi43NXJlbX0uZmllbGQuaGFzLWFkZG9uc3tkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9LmZpZWxkLmhhcy1hZGRvbnMgLmNvbnRyb2w6bm90KDpsYXN0LWNoaWxkKXttYXJnaW4tcmlnaHQ6LTFweH0uZmllbGQuaGFzLWFkZG9ucyAuY29udHJvbDpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpIC5idXR0b24sLmZpZWxkLmhhcy1hZGRvbnMgLmNvbnRyb2w6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSAuaW5wdXQsLmZpZWxkLmhhcy1hZGRvbnMgLmNvbnRyb2w6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSAuc2VsZWN0IHNlbGVjdHtib3JkZXItcmFkaXVzOjB9LmZpZWxkLmhhcy1hZGRvbnMgLmNvbnRyb2w6Zmlyc3QtY2hpbGQ6bm90KDpvbmx5LWNoaWxkKSAuYnV0dG9uLC5maWVsZC5oYXMtYWRkb25zIC5jb250cm9sOmZpcnN0LWNoaWxkOm5vdCg6b25seS1jaGlsZCkgLmlucHV0LC5maWVsZC5oYXMtYWRkb25zIC5jb250cm9sOmZpcnN0LWNoaWxkOm5vdCg6b25seS1jaGlsZCkgLnNlbGVjdCBzZWxlY3R7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MDtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czowfS5maWVsZC5oYXMtYWRkb25zIC5jb250cm9sOmxhc3QtY2hpbGQ6bm90KDpvbmx5LWNoaWxkKSAuYnV0dG9uLC5maWVsZC5oYXMtYWRkb25zIC5jb250cm9sOmxhc3QtY2hpbGQ6bm90KDpvbmx5LWNoaWxkKSAuaW5wdXQsLmZpZWxkLmhhcy1hZGRvbnMgLmNvbnRyb2w6bGFzdC1jaGlsZDpub3QoOm9ubHktY2hpbGQpIC5zZWxlY3Qgc2VsZWN0e2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MDtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjB9LmZpZWxkLmhhcy1hZGRvbnMgLmNvbnRyb2wgLmJ1dHRvbjpub3QoW2Rpc2FibGVkXSkuaXMtaG92ZXJlZCwuZmllbGQuaGFzLWFkZG9ucyAuY29udHJvbCAuYnV0dG9uOm5vdChbZGlzYWJsZWRdKTpob3ZlciwuZmllbGQuaGFzLWFkZG9ucyAuY29udHJvbCAuaW5wdXQ6bm90KFtkaXNhYmxlZF0pLmlzLWhvdmVyZWQsLmZpZWxkLmhhcy1hZGRvbnMgLmNvbnRyb2wgLmlucHV0Om5vdChbZGlzYWJsZWRdKTpob3ZlciwuZmllbGQuaGFzLWFkZG9ucyAuY29udHJvbCAuc2VsZWN0IHNlbGVjdDpub3QoW2Rpc2FibGVkXSkuaXMtaG92ZXJlZCwuZmllbGQuaGFzLWFkZG9ucyAuY29udHJvbCAuc2VsZWN0IHNlbGVjdDpub3QoW2Rpc2FibGVkXSk6aG92ZXJ7ei1pbmRleDoyfS5maWVsZC5oYXMtYWRkb25zIC5jb250cm9sIC5idXR0b246bm90KFtkaXNhYmxlZF0pLmlzLWFjdGl2ZSwuZmllbGQuaGFzLWFkZG9ucyAuY29udHJvbCAuYnV0dG9uOm5vdChbZGlzYWJsZWRdKS5pcy1mb2N1c2VkLC5maWVsZC5oYXMtYWRkb25zIC5jb250cm9sIC5idXR0b246bm90KFtkaXNhYmxlZF0pOmFjdGl2ZSwuZmllbGQuaGFzLWFkZG9ucyAuY29udHJvbCAuYnV0dG9uOm5vdChbZGlzYWJsZWRdKTpmb2N1cywuZmllbGQuaGFzLWFkZG9ucyAuY29udHJvbCAuaW5wdXQ6bm90KFtkaXNhYmxlZF0pLmlzLWFjdGl2ZSwuZmllbGQuaGFzLWFkZG9ucyAuY29udHJvbCAuaW5wdXQ6bm90KFtkaXNhYmxlZF0pLmlzLWZvY3VzZWQsLmZpZWxkLmhhcy1hZGRvbnMgLmNvbnRyb2wgLmlucHV0Om5vdChbZGlzYWJsZWRdKTphY3RpdmUsLmZpZWxkLmhhcy1hZGRvbnMgLmNvbnRyb2wgLmlucHV0Om5vdChbZGlzYWJsZWRdKTpmb2N1cywuZmllbGQuaGFzLWFkZG9ucyAuY29udHJvbCAuc2VsZWN0IHNlbGVjdDpub3QoW2Rpc2FibGVkXSkuaXMtYWN0aXZlLC5maWVsZC5oYXMtYWRkb25zIC5jb250cm9sIC5zZWxlY3Qgc2VsZWN0Om5vdChbZGlzYWJsZWRdKS5pcy1mb2N1c2VkLC5maWVsZC5oYXMtYWRkb25zIC5jb250cm9sIC5zZWxlY3Qgc2VsZWN0Om5vdChbZGlzYWJsZWRdKTphY3RpdmUsLmZpZWxkLmhhcy1hZGRvbnMgLmNvbnRyb2wgLnNlbGVjdCBzZWxlY3Q6bm90KFtkaXNhYmxlZF0pOmZvY3Vze3otaW5kZXg6M30uZmllbGQuaGFzLWFkZG9ucyAuY29udHJvbCAuYnV0dG9uOm5vdChbZGlzYWJsZWRdKS5pcy1hY3RpdmU6aG92ZXIsLmZpZWxkLmhhcy1hZGRvbnMgLmNvbnRyb2wgLmJ1dHRvbjpub3QoW2Rpc2FibGVkXSkuaXMtZm9jdXNlZDpob3ZlciwuZmllbGQuaGFzLWFkZG9ucyAuY29udHJvbCAuYnV0dG9uOm5vdChbZGlzYWJsZWRdKTphY3RpdmU6aG92ZXIsLmZpZWxkLmhhcy1hZGRvbnMgLmNvbnRyb2wgLmJ1dHRvbjpub3QoW2Rpc2FibGVkXSk6Zm9jdXM6aG92ZXIsLmZpZWxkLmhhcy1hZGRvbnMgLmNvbnRyb2wgLmlucHV0Om5vdChbZGlzYWJsZWRdKS5pcy1hY3RpdmU6aG92ZXIsLmZpZWxkLmhhcy1hZGRvbnMgLmNvbnRyb2wgLmlucHV0Om5vdChbZGlzYWJsZWRdKS5pcy1mb2N1c2VkOmhvdmVyLC5maWVsZC5oYXMtYWRkb25zIC5jb250cm9sIC5pbnB1dDpub3QoW2Rpc2FibGVkXSk6YWN0aXZlOmhvdmVyLC5maWVsZC5oYXMtYWRkb25zIC5jb250cm9sIC5pbnB1dDpub3QoW2Rpc2FibGVkXSk6Zm9jdXM6aG92ZXIsLmZpZWxkLmhhcy1hZGRvbnMgLmNvbnRyb2wgLnNlbGVjdCBzZWxlY3Q6bm90KFtkaXNhYmxlZF0pLmlzLWFjdGl2ZTpob3ZlciwuZmllbGQuaGFzLWFkZG9ucyAuY29udHJvbCAuc2VsZWN0IHNlbGVjdDpub3QoW2Rpc2FibGVkXSkuaXMtZm9jdXNlZDpob3ZlciwuZmllbGQuaGFzLWFkZG9ucyAuY29udHJvbCAuc2VsZWN0IHNlbGVjdDpub3QoW2Rpc2FibGVkXSk6YWN0aXZlOmhvdmVyLC5maWVsZC5oYXMtYWRkb25zIC5jb250cm9sIC5zZWxlY3Qgc2VsZWN0Om5vdChbZGlzYWJsZWRdKTpmb2N1czpob3Zlcnt6LWluZGV4OjR9LmZpZWxkLmhhcy1hZGRvbnMgLmNvbnRyb2wuaXMtZXhwYW5kZWR7ZmxleC1ncm93OjF9LmZpZWxkLmhhcy1hZGRvbnMuaGFzLWFkZG9ucy1jZW50ZXJlZHtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5maWVsZC5oYXMtYWRkb25zLmhhcy1hZGRvbnMtcmlnaHR7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfS5maWVsZC5oYXMtYWRkb25zLmhhcy1hZGRvbnMtZnVsbHdpZHRoIC5jb250cm9se2ZsZXgtZ3JvdzoxO2ZsZXgtc2hyaW5rOjB9LmZpZWxkLmlzLWdyb3VwZWR7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fS5maWVsZC5pcy1ncm91cGVkPi5jb250cm9se2ZsZXgtc2hyaW5rOjB9LmZpZWxkLmlzLWdyb3VwZWQ+LmNvbnRyb2w6bm90KDpsYXN0LWNoaWxkKXttYXJnaW4tYm90dG9tOjA7bWFyZ2luLXJpZ2h0Oi43NXJlbX0uZmllbGQuaXMtZ3JvdXBlZD4uY29udHJvbC5pcy1leHBhbmRlZHtmbGV4LWdyb3c6MTtmbGV4LXNocmluazoxfS5maWVsZC5pcy1ncm91cGVkLmlzLWdyb3VwZWQtY2VudGVyZWR7anVzdGlmeS1jb250ZW50OmNlbnRlcn0uZmllbGQuaXMtZ3JvdXBlZC5pcy1ncm91cGVkLXJpZ2h0e2p1c3RpZnktY29udGVudDpmbGV4LWVuZH0uZmllbGQuaXMtZ3JvdXBlZC5pcy1ncm91cGVkLW11bHRpbGluZXtmbGV4LXdyYXA6d3JhcH0uZmllbGQuaXMtZ3JvdXBlZC5pcy1ncm91cGVkLW11bHRpbGluZT4uY29udHJvbDpsYXN0LWNoaWxkLC5maWVsZC5pcy1ncm91cGVkLmlzLWdyb3VwZWQtbXVsdGlsaW5lPi5jb250cm9sOm5vdCg6bGFzdC1jaGlsZCl7bWFyZ2luLWJvdHRvbTouNzVyZW19LmZpZWxkLmlzLWdyb3VwZWQuaXMtZ3JvdXBlZC1tdWx0aWxpbmU6bGFzdC1jaGlsZHttYXJnaW4tYm90dG9tOi0uNzVyZW19LmZpZWxkLmlzLWdyb3VwZWQuaXMtZ3JvdXBlZC1tdWx0aWxpbmU6bm90KDpsYXN0LWNoaWxkKXttYXJnaW4tYm90dG9tOjB9QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjlweCkscHJpbnR7LmZpZWxkLmlzLWhvcml6b250YWx7ZGlzcGxheTpmbGV4fX0uZmllbGQtbGFiZWwgLmxhYmVse2ZvbnQtc2l6ZTppbmhlcml0fUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpey5maWVsZC1sYWJlbHttYXJnaW4tYm90dG9tOi41cmVtfX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OXB4KSxwcmludHsuZmllbGQtbGFiZWx7ZmxleC1iYXNpczowO2ZsZXgtZ3JvdzoxO2ZsZXgtc2hyaW5rOjA7bWFyZ2luLXJpZ2h0OjEuNXJlbTt0ZXh0LWFsaWduOnJpZ2h0fS5maWVsZC1sYWJlbC5pcy1zbWFsbHtmb250LXNpemU6Ljc1cmVtO3BhZGRpbmctdG9wOi4zNzVlbX0uZmllbGQtbGFiZWwuaXMtbm9ybWFse3BhZGRpbmctdG9wOi4zNzVlbX0uZmllbGQtbGFiZWwuaXMtbWVkaXVte2ZvbnQtc2l6ZToxLjI1cmVtO3BhZGRpbmctdG9wOi4zNzVlbX0uZmllbGQtbGFiZWwuaXMtbGFyZ2V7Zm9udC1zaXplOjEuNXJlbTtwYWRkaW5nLXRvcDouMzc1ZW19fS5maWVsZC1ib2R5IC5maWVsZCAuZmllbGR7bWFyZ2luLWJvdHRvbTowfUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY5cHgpLHByaW50ey5maWVsZC1ib2R5e2Rpc3BsYXk6ZmxleDtmbGV4LWJhc2lzOjA7ZmxleC1ncm93OjU7ZmxleC1zaHJpbms6MX0uZmllbGQtYm9keSAuZmllbGR7bWFyZ2luLWJvdHRvbTowfS5maWVsZC1ib2R5Pi5maWVsZHtmbGV4LXNocmluazoxfS5maWVsZC1ib2R5Pi5maWVsZDpub3QoLmlzLW5hcnJvdyl7ZmxleC1ncm93OjF9LmZpZWxkLWJvZHk+LmZpZWxkOm5vdCg6bGFzdC1jaGlsZCl7bWFyZ2luLXJpZ2h0Oi43NXJlbX19LmNvbnRyb2x7Ym94LXNpemluZzpib3JkZXItYm94O2NsZWFyOmJvdGg7Zm9udC1zaXplOjFyZW07cG9zaXRpb246cmVsYXRpdmU7dGV4dC1hbGlnbjpsZWZ0fS5jb250cm9sLmhhcy1pY29ucy1sZWZ0IC5pbnB1dDpmb2N1c34uaWNvbiwuY29udHJvbC5oYXMtaWNvbnMtbGVmdCAuc2VsZWN0OmZvY3Vzfi5pY29uLC5jb250cm9sLmhhcy1pY29ucy1yaWdodCAuaW5wdXQ6Zm9jdXN+Lmljb24sLmNvbnRyb2wuaGFzLWljb25zLXJpZ2h0IC5zZWxlY3Q6Zm9jdXN+Lmljb257Y29sb3I6IzdhN2E3YX0uY29udHJvbC5oYXMtaWNvbnMtbGVmdCAuaW5wdXQuaXMtc21hbGx+Lmljb24sLmNvbnRyb2wuaGFzLWljb25zLWxlZnQgLnNlbGVjdC5pcy1zbWFsbH4uaWNvbiwuY29udHJvbC5oYXMtaWNvbnMtcmlnaHQgLmlucHV0LmlzLXNtYWxsfi5pY29uLC5jb250cm9sLmhhcy1pY29ucy1yaWdodCAuc2VsZWN0LmlzLXNtYWxsfi5pY29ue2ZvbnQtc2l6ZTouNzVyZW19LmNvbnRyb2wuaGFzLWljb25zLWxlZnQgLmlucHV0LmlzLW1lZGl1bX4uaWNvbiwuY29udHJvbC5oYXMtaWNvbnMtbGVmdCAuc2VsZWN0LmlzLW1lZGl1bX4uaWNvbiwuY29udHJvbC5oYXMtaWNvbnMtcmlnaHQgLmlucHV0LmlzLW1lZGl1bX4uaWNvbiwuY29udHJvbC5oYXMtaWNvbnMtcmlnaHQgLnNlbGVjdC5pcy1tZWRpdW1+Lmljb257Zm9udC1zaXplOjEuMjVyZW19LmNvbnRyb2wuaGFzLWljb25zLWxlZnQgLmlucHV0LmlzLWxhcmdlfi5pY29uLC5jb250cm9sLmhhcy1pY29ucy1sZWZ0IC5zZWxlY3QuaXMtbGFyZ2V+Lmljb24sLmNvbnRyb2wuaGFzLWljb25zLXJpZ2h0IC5pbnB1dC5pcy1sYXJnZX4uaWNvbiwuY29udHJvbC5oYXMtaWNvbnMtcmlnaHQgLnNlbGVjdC5pcy1sYXJnZX4uaWNvbntmb250LXNpemU6MS41cmVtfS5jb250cm9sLmhhcy1pY29ucy1sZWZ0IC5pY29uLC5jb250cm9sLmhhcy1pY29ucy1yaWdodCAuaWNvbntjb2xvcjojZGJkYmRiO2hlaWdodDoyLjI1ZW07cG9pbnRlci1ldmVudHM6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDt3aWR0aDoyLjI1ZW07ei1pbmRleDo0fS5jb250cm9sLmhhcy1pY29ucy1sZWZ0IC5pbnB1dCwuY29udHJvbC5oYXMtaWNvbnMtbGVmdCAuc2VsZWN0IHNlbGVjdHtwYWRkaW5nLWxlZnQ6Mi4yNWVtfS5jb250cm9sLmhhcy1pY29ucy1sZWZ0IC5pY29uLmlzLWxlZnR7bGVmdDowfS5jb250cm9sLmhhcy1pY29ucy1yaWdodCAuaW5wdXQsLmNvbnRyb2wuaGFzLWljb25zLXJpZ2h0IC5zZWxlY3Qgc2VsZWN0e3BhZGRpbmctcmlnaHQ6Mi4yNWVtfS5jb250cm9sLmhhcy1pY29ucy1yaWdodCAuaWNvbi5pcy1yaWdodHtyaWdodDowfS5jb250cm9sLmlzLWxvYWRpbmc6OmFmdGVye3Bvc2l0aW9uOmFic29sdXRlIWltcG9ydGFudDtyaWdodDouNjI1ZW07dG9wOi42MjVlbTt6LWluZGV4OjR9LmNvbnRyb2wuaXMtbG9hZGluZy5pcy1zbWFsbDphZnRlcntmb250LXNpemU6Ljc1cmVtfS5jb250cm9sLmlzLWxvYWRpbmcuaXMtbWVkaXVtOmFmdGVye2ZvbnQtc2l6ZToxLjI1cmVtfS5jb250cm9sLmlzLWxvYWRpbmcuaXMtbGFyZ2U6YWZ0ZXJ7Zm9udC1zaXplOjEuNXJlbX0uaWNvbnthbGlnbi1pdGVtczpjZW50ZXI7ZGlzcGxheTppbmxpbmUtZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2hlaWdodDoxLjVyZW07d2lkdGg6MS41cmVtfS5pY29uLmlzLXNtYWxse2hlaWdodDoxcmVtO3dpZHRoOjFyZW19Lmljb24uaXMtbWVkaXVte2hlaWdodDoycmVtO3dpZHRoOjJyZW19Lmljb24uaXMtbGFyZ2V7aGVpZ2h0OjNyZW07d2lkdGg6M3JlbX0uaW1hZ2V7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZX0uaW1hZ2UgaW1ne2Rpc3BsYXk6YmxvY2s7aGVpZ2h0OmF1dG87d2lkdGg6MTAwJX0uaW1hZ2UgaW1nLmlzLXJvdW5kZWR7Ym9yZGVyLXJhZGl1czoyOTA0ODZweH0uaW1hZ2UuaXMtMTZieTkgLmhhcy1yYXRpbywuaW1hZ2UuaXMtMTZieTkgaW1nLC5pbWFnZS5pcy0xYnkxIC5oYXMtcmF0aW8sLmltYWdlLmlzLTFieTEgaW1nLC5pbWFnZS5pcy0xYnkyIC5oYXMtcmF0aW8sLmltYWdlLmlzLTFieTIgaW1nLC5pbWFnZS5pcy0xYnkzIC5oYXMtcmF0aW8sLmltYWdlLmlzLTFieTMgaW1nLC5pbWFnZS5pcy0yYnkxIC5oYXMtcmF0aW8sLmltYWdlLmlzLTJieTEgaW1nLC5pbWFnZS5pcy0yYnkzIC5oYXMtcmF0aW8sLmltYWdlLmlzLTJieTMgaW1nLC5pbWFnZS5pcy0zYnkxIC5oYXMtcmF0aW8sLmltYWdlLmlzLTNieTEgaW1nLC5pbWFnZS5pcy0zYnkyIC5oYXMtcmF0aW8sLmltYWdlLmlzLTNieTIgaW1nLC5pbWFnZS5pcy0zYnk0IC5oYXMtcmF0aW8sLmltYWdlLmlzLTNieTQgaW1nLC5pbWFnZS5pcy0zYnk1IC5oYXMtcmF0aW8sLmltYWdlLmlzLTNieTUgaW1nLC5pbWFnZS5pcy00YnkzIC5oYXMtcmF0aW8sLmltYWdlLmlzLTRieTMgaW1nLC5pbWFnZS5pcy00Ynk1IC5oYXMtcmF0aW8sLmltYWdlLmlzLTRieTUgaW1nLC5pbWFnZS5pcy01YnkzIC5oYXMtcmF0aW8sLmltYWdlLmlzLTVieTMgaW1nLC5pbWFnZS5pcy01Ynk0IC5oYXMtcmF0aW8sLmltYWdlLmlzLTVieTQgaW1nLC5pbWFnZS5pcy05YnkxNiAuaGFzLXJhdGlvLC5pbWFnZS5pcy05YnkxNiBpbWcsLmltYWdlLmlzLXNxdWFyZSAuaGFzLXJhdGlvLC5pbWFnZS5pcy1zcXVhcmUgaW1ne2hlaWdodDoxMDAlO3dpZHRoOjEwMCV9LmltYWdlLmlzLTFieTEsLmltYWdlLmlzLXNxdWFyZXtwYWRkaW5nLXRvcDoxMDAlfS5pbWFnZS5pcy01Ynk0e3BhZGRpbmctdG9wOjgwJX0uaW1hZ2UuaXMtNGJ5M3twYWRkaW5nLXRvcDo3NSV9LmltYWdlLmlzLTNieTJ7cGFkZGluZy10b3A6NjYuNjY2NiV9LmltYWdlLmlzLTVieTN7cGFkZGluZy10b3A6NjAlfS5pbWFnZS5pcy0xNmJ5OXtwYWRkaW5nLXRvcDo1Ni4yNSV9LmltYWdlLmlzLTJieTF7cGFkZGluZy10b3A6NTAlfS5pbWFnZS5pcy0zYnkxe3BhZGRpbmctdG9wOjMzLjMzMzMlfS5pbWFnZS5pcy00Ynk1e3BhZGRpbmctdG9wOjEyNSV9LmltYWdlLmlzLTNieTR7cGFkZGluZy10b3A6MTMzLjMzMzMlfS5pbWFnZS5pcy0yYnkze3BhZGRpbmctdG9wOjE1MCV9LmltYWdlLmlzLTNieTV7cGFkZGluZy10b3A6MTY2LjY2NjYlfS5pbWFnZS5pcy05YnkxNntwYWRkaW5nLXRvcDoxNzcuNzc3NyV9LmltYWdlLmlzLTFieTJ7cGFkZGluZy10b3A6MjAwJX0uaW1hZ2UuaXMtMWJ5M3twYWRkaW5nLXRvcDozMDAlfS5pbWFnZS5pcy0xNngxNntoZWlnaHQ6MTZweDt3aWR0aDoxNnB4fS5pbWFnZS5pcy0yNHgyNHtoZWlnaHQ6MjRweDt3aWR0aDoyNHB4fS5pbWFnZS5pcy0zMngzMntoZWlnaHQ6MzJweDt3aWR0aDozMnB4fS5pbWFnZS5pcy00OHg0OHtoZWlnaHQ6NDhweDt3aWR0aDo0OHB4fS5pbWFnZS5pcy02NHg2NHtoZWlnaHQ6NjRweDt3aWR0aDo2NHB4fS5pbWFnZS5pcy05Nng5NntoZWlnaHQ6OTZweDt3aWR0aDo5NnB4fS5pbWFnZS5pcy0xMjh4MTI4e2hlaWdodDoxMjhweDt3aWR0aDoxMjhweH0ubm90aWZpY2F0aW9ue2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTtib3JkZXItcmFkaXVzOjRweDtwYWRkaW5nOjEuMjVyZW0gMi41cmVtIDEuMjVyZW0gMS41cmVtO3Bvc2l0aW9uOnJlbGF0aXZlfS5ub3RpZmljYXRpb24gYTpub3QoLmJ1dHRvbik6bm90KC5kcm9wZG93bi1pdGVtKXtjb2xvcjpjdXJyZW50Q29sb3I7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZX0ubm90aWZpY2F0aW9uIHN0cm9uZ3tjb2xvcjpjdXJyZW50Q29sb3J9Lm5vdGlmaWNhdGlvbiBjb2RlLC5ub3RpZmljYXRpb24gcHJle2JhY2tncm91bmQ6I2ZmZn0ubm90aWZpY2F0aW9uIHByZSBjb2Rle2JhY2tncm91bmQ6MCAwfS5ub3RpZmljYXRpb24+LmRlbGV0ZXtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDouNXJlbTt0b3A6LjVyZW19Lm5vdGlmaWNhdGlvbiAuY29udGVudCwubm90aWZpY2F0aW9uIC5zdWJ0aXRsZSwubm90aWZpY2F0aW9uIC50aXRsZXtjb2xvcjpjdXJyZW50Q29sb3J9Lm5vdGlmaWNhdGlvbi5pcy13aGl0ZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6IzBhMGEwYX0ubm90aWZpY2F0aW9uLmlzLWJsYWNre2JhY2tncm91bmQtY29sb3I6IzBhMGEwYTtjb2xvcjojZmZmfS5ub3RpZmljYXRpb24uaXMtbGlnaHR7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O2NvbG9yOiMzNjM2MzZ9Lm5vdGlmaWNhdGlvbi5pcy1kYXJre2JhY2tncm91bmQtY29sb3I6IzM2MzYzNjtjb2xvcjojZjVmNWY1fS5ub3RpZmljYXRpb24uaXMtcHJpbWFyeXtiYWNrZ3JvdW5kLWNvbG9yOiMwMGQxYjI7Y29sb3I6I2ZmZn0ubm90aWZpY2F0aW9uLmlzLWxpbmt7YmFja2dyb3VuZC1jb2xvcjojMzI3M2RjO2NvbG9yOiNmZmZ9Lm5vdGlmaWNhdGlvbi5pcy1pbmZve2JhY2tncm91bmQtY29sb3I6IzIwOWNlZTtjb2xvcjojZmZmfS5ub3RpZmljYXRpb24uaXMtc3VjY2Vzc3tiYWNrZ3JvdW5kLWNvbG9yOiMyM2QxNjA7Y29sb3I6I2ZmZn0ubm90aWZpY2F0aW9uLmlzLXdhcm5pbmd7YmFja2dyb3VuZC1jb2xvcjojZmZkZDU3O2NvbG9yOnJnYmEoMCwwLDAsLjcpfS5ub3RpZmljYXRpb24uaXMtZGFuZ2Vye2JhY2tncm91bmQtY29sb3I6I2ZmMzg2MDtjb2xvcjojZmZmfS5wcm9ncmVzc3stbW96LWFwcGVhcmFuY2U6bm9uZTstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTtib3JkZXI6bm9uZTtib3JkZXItcmFkaXVzOjI5MDQ4NnB4O2Rpc3BsYXk6YmxvY2s7aGVpZ2h0OjFyZW07b3ZlcmZsb3c6aGlkZGVuO3BhZGRpbmc6MDt3aWR0aDoxMDAlfS5wcm9ncmVzczo6LXdlYmtpdC1wcm9ncmVzcy1iYXJ7YmFja2dyb3VuZC1jb2xvcjojZGJkYmRifS5wcm9ncmVzczo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZXtiYWNrZ3JvdW5kLWNvbG9yOiM0YTRhNGF9LnByb2dyZXNzOjotbW96LXByb2dyZXNzLWJhcntiYWNrZ3JvdW5kLWNvbG9yOiM0YTRhNGF9LnByb2dyZXNzOjotbXMtZmlsbHtiYWNrZ3JvdW5kLWNvbG9yOiM0YTRhNGE7Ym9yZGVyOm5vbmV9LnByb2dyZXNzOmluZGV0ZXJtaW5hdGV7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246MS41czthbmltYXRpb24tZHVyYXRpb246MS41czstd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZTstd2Via2l0LWFuaW1hdGlvbi1uYW1lOm1vdmVJbmRldGVybWluYXRlO2FuaW1hdGlvbi1uYW1lOm1vdmVJbmRldGVybWluYXRlOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXI7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXI7YmFja2dyb3VuZC1jb2xvcjojZGJkYmRiO2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCM0YTRhNGEgMzAlLCNkYmRiZGIgMzAlKTtiYWNrZ3JvdW5kLXBvc2l0aW9uOnRvcCBsZWZ0O2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtiYWNrZ3JvdW5kLXNpemU6MTUwJSAxNTAlfS5wcm9ncmVzczppbmRldGVybWluYXRlOjotd2Via2l0LXByb2dyZXNzLWJhcntiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS5wcm9ncmVzczppbmRldGVybWluYXRlOjotbW96LXByb2dyZXNzLWJhcntiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS5wcm9ncmVzcy5pcy13aGl0ZTo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9LnByb2dyZXNzLmlzLXdoaXRlOjotbW96LXByb2dyZXNzLWJhcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9LnByb2dyZXNzLmlzLXdoaXRlOjotbXMtZmlsbHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9LnByb2dyZXNzLmlzLXdoaXRlOmluZGV0ZXJtaW5hdGV7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsI2ZmZiAzMCUsI2RiZGJkYiAzMCUpfS5wcm9ncmVzcy5pcy1ibGFjazo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZXtiYWNrZ3JvdW5kLWNvbG9yOiMwYTBhMGF9LnByb2dyZXNzLmlzLWJsYWNrOjotbW96LXByb2dyZXNzLWJhcntiYWNrZ3JvdW5kLWNvbG9yOiMwYTBhMGF9LnByb2dyZXNzLmlzLWJsYWNrOjotbXMtZmlsbHtiYWNrZ3JvdW5kLWNvbG9yOiMwYTBhMGF9LnByb2dyZXNzLmlzLWJsYWNrOmluZGV0ZXJtaW5hdGV7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIzBhMGEwYSAzMCUsI2RiZGJkYiAzMCUpfS5wcm9ncmVzcy5pcy1saWdodDo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZXtiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjV9LnByb2dyZXNzLmlzLWxpZ2h0OjotbW96LXByb2dyZXNzLWJhcntiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjV9LnByb2dyZXNzLmlzLWxpZ2h0OjotbXMtZmlsbHtiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjV9LnByb2dyZXNzLmlzLWxpZ2h0OmluZGV0ZXJtaW5hdGV7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsI2Y1ZjVmNSAzMCUsI2RiZGJkYiAzMCUpfS5wcm9ncmVzcy5pcy1kYXJrOjotd2Via2l0LXByb2dyZXNzLXZhbHVle2JhY2tncm91bmQtY29sb3I6IzM2MzYzNn0ucHJvZ3Jlc3MuaXMtZGFyazo6LW1vei1wcm9ncmVzcy1iYXJ7YmFja2dyb3VuZC1jb2xvcjojMzYzNjM2fS5wcm9ncmVzcy5pcy1kYXJrOjotbXMtZmlsbHtiYWNrZ3JvdW5kLWNvbG9yOiMzNjM2MzZ9LnByb2dyZXNzLmlzLWRhcms6aW5kZXRlcm1pbmF0ZXtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byByaWdodCwjMzYzNjM2IDMwJSwjZGJkYmRiIDMwJSl9LnByb2dyZXNzLmlzLXByaW1hcnk6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWV7YmFja2dyb3VuZC1jb2xvcjojMDBkMWIyfS5wcm9ncmVzcy5pcy1wcmltYXJ5OjotbW96LXByb2dyZXNzLWJhcntiYWNrZ3JvdW5kLWNvbG9yOiMwMGQxYjJ9LnByb2dyZXNzLmlzLXByaW1hcnk6Oi1tcy1maWxse2JhY2tncm91bmQtY29sb3I6IzAwZDFiMn0ucHJvZ3Jlc3MuaXMtcHJpbWFyeTppbmRldGVybWluYXRle2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCMwMGQxYjIgMzAlLCNkYmRiZGIgMzAlKX0ucHJvZ3Jlc3MuaXMtbGluazo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZXtiYWNrZ3JvdW5kLWNvbG9yOiMzMjczZGN9LnByb2dyZXNzLmlzLWxpbms6Oi1tb3otcHJvZ3Jlc3MtYmFye2JhY2tncm91bmQtY29sb3I6IzMyNzNkY30ucHJvZ3Jlc3MuaXMtbGluazo6LW1zLWZpbGx7YmFja2dyb3VuZC1jb2xvcjojMzI3M2RjfS5wcm9ncmVzcy5pcy1saW5rOmluZGV0ZXJtaW5hdGV7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIzMyNzNkYyAzMCUsI2RiZGJkYiAzMCUpfS5wcm9ncmVzcy5pcy1pbmZvOjotd2Via2l0LXByb2dyZXNzLXZhbHVle2JhY2tncm91bmQtY29sb3I6IzIwOWNlZX0ucHJvZ3Jlc3MuaXMtaW5mbzo6LW1vei1wcm9ncmVzcy1iYXJ7YmFja2dyb3VuZC1jb2xvcjojMjA5Y2VlfS5wcm9ncmVzcy5pcy1pbmZvOjotbXMtZmlsbHtiYWNrZ3JvdW5kLWNvbG9yOiMyMDljZWV9LnByb2dyZXNzLmlzLWluZm86aW5kZXRlcm1pbmF0ZXtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byByaWdodCwjMjA5Y2VlIDMwJSwjZGJkYmRiIDMwJSl9LnByb2dyZXNzLmlzLXN1Y2Nlc3M6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWV7YmFja2dyb3VuZC1jb2xvcjojMjNkMTYwfS5wcm9ncmVzcy5pcy1zdWNjZXNzOjotbW96LXByb2dyZXNzLWJhcntiYWNrZ3JvdW5kLWNvbG9yOiMyM2QxNjB9LnByb2dyZXNzLmlzLXN1Y2Nlc3M6Oi1tcy1maWxse2JhY2tncm91bmQtY29sb3I6IzIzZDE2MH0ucHJvZ3Jlc3MuaXMtc3VjY2VzczppbmRldGVybWluYXRle2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCMyM2QxNjAgMzAlLCNkYmRiZGIgMzAlKX0ucHJvZ3Jlc3MuaXMtd2FybmluZzo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmRkNTd9LnByb2dyZXNzLmlzLXdhcm5pbmc6Oi1tb3otcHJvZ3Jlc3MtYmFye2JhY2tncm91bmQtY29sb3I6I2ZmZGQ1N30ucHJvZ3Jlc3MuaXMtd2FybmluZzo6LW1zLWZpbGx7YmFja2dyb3VuZC1jb2xvcjojZmZkZDU3fS5wcm9ncmVzcy5pcy13YXJuaW5nOmluZGV0ZXJtaW5hdGV7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsI2ZmZGQ1NyAzMCUsI2RiZGJkYiAzMCUpfS5wcm9ncmVzcy5pcy1kYW5nZXI6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWV7YmFja2dyb3VuZC1jb2xvcjojZmYzODYwfS5wcm9ncmVzcy5pcy1kYW5nZXI6Oi1tb3otcHJvZ3Jlc3MtYmFye2JhY2tncm91bmQtY29sb3I6I2ZmMzg2MH0ucHJvZ3Jlc3MuaXMtZGFuZ2VyOjotbXMtZmlsbHtiYWNrZ3JvdW5kLWNvbG9yOiNmZjM4NjB9LnByb2dyZXNzLmlzLWRhbmdlcjppbmRldGVybWluYXRle2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCNmZjM4NjAgMzAlLCNkYmRiZGIgMzAlKX0ucHJvZ3Jlc3MuaXMtc21hbGx7aGVpZ2h0Oi43NXJlbX0ucHJvZ3Jlc3MuaXMtbWVkaXVte2hlaWdodDoxLjI1cmVtfS5wcm9ncmVzcy5pcy1sYXJnZXtoZWlnaHQ6MS41cmVtfUAtd2Via2l0LWtleWZyYW1lcyBtb3ZlSW5kZXRlcm1pbmF0ZXtmcm9te2JhY2tncm91bmQtcG9zaXRpb246MjAwJSAwfXRve2JhY2tncm91bmQtcG9zaXRpb246LTIwMCUgMH19QGtleWZyYW1lcyBtb3ZlSW5kZXRlcm1pbmF0ZXtmcm9te2JhY2tncm91bmQtcG9zaXRpb246MjAwJSAwfXRve2JhY2tncm91bmQtcG9zaXRpb246LTIwMCUgMH19LnRhYmxle2JhY2tncm91bmQtY29sb3I6I2ZmZjtjb2xvcjojMzYzNjM2fS50YWJsZSB0ZCwudGFibGUgdGh7Ym9yZGVyOjFweCBzb2xpZCAjZGJkYmRiO2JvcmRlci13aWR0aDowIDAgMXB4O3BhZGRpbmc6LjVlbSAuNzVlbTt2ZXJ0aWNhbC1hbGlnbjp0b3B9LnRhYmxlIHRkLmlzLXdoaXRlLC50YWJsZSB0aC5pcy13aGl0ZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyLWNvbG9yOiNmZmY7Y29sb3I6IzBhMGEwYX0udGFibGUgdGQuaXMtYmxhY2ssLnRhYmxlIHRoLmlzLWJsYWNre2JhY2tncm91bmQtY29sb3I6IzBhMGEwYTtib3JkZXItY29sb3I6IzBhMGEwYTtjb2xvcjojZmZmfS50YWJsZSB0ZC5pcy1saWdodCwudGFibGUgdGguaXMtbGlnaHR7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O2JvcmRlci1jb2xvcjojZjVmNWY1O2NvbG9yOiMzNjM2MzZ9LnRhYmxlIHRkLmlzLWRhcmssLnRhYmxlIHRoLmlzLWRhcmt7YmFja2dyb3VuZC1jb2xvcjojMzYzNjM2O2JvcmRlci1jb2xvcjojMzYzNjM2O2NvbG9yOiNmNWY1ZjV9LnRhYmxlIHRkLmlzLXByaW1hcnksLnRhYmxlIHRoLmlzLXByaW1hcnl7YmFja2dyb3VuZC1jb2xvcjojMDBkMWIyO2JvcmRlci1jb2xvcjojMDBkMWIyO2NvbG9yOiNmZmZ9LnRhYmxlIHRkLmlzLWxpbmssLnRhYmxlIHRoLmlzLWxpbmt7YmFja2dyb3VuZC1jb2xvcjojMzI3M2RjO2JvcmRlci1jb2xvcjojMzI3M2RjO2NvbG9yOiNmZmZ9LnRhYmxlIHRkLmlzLWluZm8sLnRhYmxlIHRoLmlzLWluZm97YmFja2dyb3VuZC1jb2xvcjojMjA5Y2VlO2JvcmRlci1jb2xvcjojMjA5Y2VlO2NvbG9yOiNmZmZ9LnRhYmxlIHRkLmlzLXN1Y2Nlc3MsLnRhYmxlIHRoLmlzLXN1Y2Nlc3N7YmFja2dyb3VuZC1jb2xvcjojMjNkMTYwO2JvcmRlci1jb2xvcjojMjNkMTYwO2NvbG9yOiNmZmZ9LnRhYmxlIHRkLmlzLXdhcm5pbmcsLnRhYmxlIHRoLmlzLXdhcm5pbmd7YmFja2dyb3VuZC1jb2xvcjojZmZkZDU3O2JvcmRlci1jb2xvcjojZmZkZDU3O2NvbG9yOnJnYmEoMCwwLDAsLjcpfS50YWJsZSB0ZC5pcy1kYW5nZXIsLnRhYmxlIHRoLmlzLWRhbmdlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZjM4NjA7Ym9yZGVyLWNvbG9yOiNmZjM4NjA7Y29sb3I6I2ZmZn0udGFibGUgdGQuaXMtbmFycm93LC50YWJsZSB0aC5pcy1uYXJyb3d7d2hpdGUtc3BhY2U6bm93cmFwO3dpZHRoOjElfS50YWJsZSB0ZC5pcy1zZWxlY3RlZCwudGFibGUgdGguaXMtc2VsZWN0ZWR7YmFja2dyb3VuZC1jb2xvcjojMDBkMWIyO2NvbG9yOiNmZmZ9LnRhYmxlIHRkLmlzLXNlbGVjdGVkIGEsLnRhYmxlIHRkLmlzLXNlbGVjdGVkIHN0cm9uZywudGFibGUgdGguaXMtc2VsZWN0ZWQgYSwudGFibGUgdGguaXMtc2VsZWN0ZWQgc3Ryb25ne2NvbG9yOmN1cnJlbnRDb2xvcn0udGFibGUgdGh7Y29sb3I6IzM2MzYzNjt0ZXh0LWFsaWduOmxlZnR9LnRhYmxlIHRyLmlzLXNlbGVjdGVke2JhY2tncm91bmQtY29sb3I6IzAwZDFiMjtjb2xvcjojZmZmfS50YWJsZSB0ci5pcy1zZWxlY3RlZCBhLC50YWJsZSB0ci5pcy1zZWxlY3RlZCBzdHJvbmd7Y29sb3I6Y3VycmVudENvbG9yfS50YWJsZSB0ci5pcy1zZWxlY3RlZCB0ZCwudGFibGUgdHIuaXMtc2VsZWN0ZWQgdGh7Ym9yZGVyLWNvbG9yOiNmZmY7Y29sb3I6Y3VycmVudENvbG9yfS50YWJsZSB0aGVhZHtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS50YWJsZSB0aGVhZCB0ZCwudGFibGUgdGhlYWQgdGh7Ym9yZGVyLXdpZHRoOjAgMCAycHg7Y29sb3I6IzM2MzYzNn0udGFibGUgdGZvb3R7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH0udGFibGUgdGZvb3QgdGQsLnRhYmxlIHRmb290IHRoe2JvcmRlci13aWR0aDoycHggMCAwO2NvbG9yOiMzNjM2MzZ9LnRhYmxlIHRib2R5e2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9LnRhYmxlIHRib2R5IHRyOmxhc3QtY2hpbGQgdGQsLnRhYmxlIHRib2R5IHRyOmxhc3QtY2hpbGQgdGh7Ym9yZGVyLWJvdHRvbS13aWR0aDowfS50YWJsZS5pcy1ib3JkZXJlZCB0ZCwudGFibGUuaXMtYm9yZGVyZWQgdGh7Ym9yZGVyLXdpZHRoOjFweH0udGFibGUuaXMtYm9yZGVyZWQgdHI6bGFzdC1jaGlsZCB0ZCwudGFibGUuaXMtYm9yZGVyZWQgdHI6bGFzdC1jaGlsZCB0aHtib3JkZXItYm90dG9tLXdpZHRoOjFweH0udGFibGUuaXMtZnVsbHdpZHRoe3dpZHRoOjEwMCV9LnRhYmxlLmlzLWhvdmVyYWJsZSB0Ym9keSB0cjpub3QoLmlzLXNlbGVjdGVkKTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmYWZhZmF9LnRhYmxlLmlzLWhvdmVyYWJsZS5pcy1zdHJpcGVkIHRib2R5IHRyOm5vdCguaXMtc2VsZWN0ZWQpOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2ZhZmFmYX0udGFibGUuaXMtaG92ZXJhYmxlLmlzLXN0cmlwZWQgdGJvZHkgdHI6bm90KC5pcy1zZWxlY3RlZCk6aG92ZXI6bnRoLWNoaWxkKGV2ZW4pe2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNX0udGFibGUuaXMtbmFycm93IHRkLC50YWJsZS5pcy1uYXJyb3cgdGh7cGFkZGluZzouMjVlbSAuNWVtfS50YWJsZS5pcy1zdHJpcGVkIHRib2R5IHRyOm5vdCguaXMtc2VsZWN0ZWQpOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiNmYWZhZmF9LnRhYmxlLWNvbnRhaW5lcnstd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzp0b3VjaDtvdmVyZmxvdzphdXRvO292ZXJmbG93LXk6aGlkZGVuO21heC13aWR0aDoxMDAlfS50YWdze2FsaWduLWl0ZW1zOmNlbnRlcjtkaXNwbGF5OmZsZXg7ZmxleC13cmFwOndyYXA7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9LnRhZ3MgLnRhZ3ttYXJnaW4tYm90dG9tOi41cmVtfS50YWdzIC50YWc6bm90KDpsYXN0LWNoaWxkKXttYXJnaW4tcmlnaHQ6LjVyZW19LnRhZ3M6bGFzdC1jaGlsZHttYXJnaW4tYm90dG9tOi0uNXJlbX0udGFnczpub3QoOmxhc3QtY2hpbGQpe21hcmdpbi1ib3R0b206MXJlbX0udGFncy5hcmUtbWVkaXVtIC50YWc6bm90KC5pcy1ub3JtYWwpOm5vdCguaXMtbGFyZ2Upe2ZvbnQtc2l6ZToxcmVtfS50YWdzLmFyZS1sYXJnZSAudGFnOm5vdCguaXMtbm9ybWFsKTpub3QoLmlzLW1lZGl1bSl7Zm9udC1zaXplOjEuMjVyZW19LnRhZ3MuaGFzLWFkZG9ucyAudGFne21hcmdpbi1yaWdodDowfS50YWdzLmhhcy1hZGRvbnMgLnRhZzpub3QoOmZpcnN0LWNoaWxkKXtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjA7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czowfS50YWdzLmhhcy1hZGRvbnMgLnRhZzpub3QoOmxhc3QtY2hpbGQpe2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjA7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MH0udGFncy5pcy1jZW50ZXJlZHtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS50YWdzLmlzLWNlbnRlcmVkIC50YWd7bWFyZ2luLXJpZ2h0Oi4yNXJlbTttYXJnaW4tbGVmdDouMjVyZW19LnRhZ3MuaXMtcmlnaHR7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfS50YWdzLmlzLXJpZ2h0IC50YWc6bm90KDpmaXJzdC1jaGlsZCl7bWFyZ2luLWxlZnQ6LjVyZW19LnRhZ3MuaXMtcmlnaHQgLnRhZzpub3QoOmxhc3QtY2hpbGQpe21hcmdpbi1yaWdodDowfS50YWdzLmhhcy1hZGRvbnMgLnRhZ3ttYXJnaW4tcmlnaHQ6MH0udGFncy5oYXMtYWRkb25zIC50YWc6bm90KDpmaXJzdC1jaGlsZCl7bWFyZ2luLWxlZnQ6MDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjA7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czowfS50YWdzLmhhcy1hZGRvbnMgLnRhZzpub3QoOmxhc3QtY2hpbGQpe2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjA7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MH0udGFnOm5vdChib2R5KXthbGlnbi1pdGVtczpjZW50ZXI7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O2JvcmRlci1yYWRpdXM6NHB4O2NvbG9yOiM0YTRhNGE7ZGlzcGxheTppbmxpbmUtZmxleDtmb250LXNpemU6Ljc1cmVtO2hlaWdodDoyZW07anVzdGlmeS1jb250ZW50OmNlbnRlcjtsaW5lLWhlaWdodDoxLjU7cGFkZGluZy1sZWZ0Oi43NWVtO3BhZGRpbmctcmlnaHQ6Ljc1ZW07d2hpdGUtc3BhY2U6bm93cmFwfS50YWc6bm90KGJvZHkpIC5kZWxldGV7bWFyZ2luLWxlZnQ6LjI1cmVtO21hcmdpbi1yaWdodDotLjM3NXJlbX0udGFnOm5vdChib2R5KS5pcy13aGl0ZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6IzBhMGEwYX0udGFnOm5vdChib2R5KS5pcy1ibGFja3tiYWNrZ3JvdW5kLWNvbG9yOiMwYTBhMGE7Y29sb3I6I2ZmZn0udGFnOm5vdChib2R5KS5pcy1saWdodHtiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7Y29sb3I6IzM2MzYzNn0udGFnOm5vdChib2R5KS5pcy1kYXJre2JhY2tncm91bmQtY29sb3I6IzM2MzYzNjtjb2xvcjojZjVmNWY1fS50YWc6bm90KGJvZHkpLmlzLXByaW1hcnl7YmFja2dyb3VuZC1jb2xvcjojMDBkMWIyO2NvbG9yOiNmZmZ9LnRhZzpub3QoYm9keSkuaXMtbGlua3tiYWNrZ3JvdW5kLWNvbG9yOiMzMjczZGM7Y29sb3I6I2ZmZn0udGFnOm5vdChib2R5KS5pcy1pbmZve2JhY2tncm91bmQtY29sb3I6IzIwOWNlZTtjb2xvcjojZmZmfS50YWc6bm90KGJvZHkpLmlzLXN1Y2Nlc3N7YmFja2dyb3VuZC1jb2xvcjojMjNkMTYwO2NvbG9yOiNmZmZ9LnRhZzpub3QoYm9keSkuaXMtd2FybmluZ3tiYWNrZ3JvdW5kLWNvbG9yOiNmZmRkNTc7Y29sb3I6cmdiYSgwLDAsMCwuNyl9LnRhZzpub3QoYm9keSkuaXMtZGFuZ2Vye2JhY2tncm91bmQtY29sb3I6I2ZmMzg2MDtjb2xvcjojZmZmfS50YWc6bm90KGJvZHkpLmlzLW5vcm1hbHtmb250LXNpemU6Ljc1cmVtfS50YWc6bm90KGJvZHkpLmlzLW1lZGl1bXtmb250LXNpemU6MXJlbX0udGFnOm5vdChib2R5KS5pcy1sYXJnZXtmb250LXNpemU6MS4yNXJlbX0udGFnOm5vdChib2R5KSAuaWNvbjpmaXJzdC1jaGlsZDpub3QoOmxhc3QtY2hpbGQpe21hcmdpbi1sZWZ0Oi0uMzc1ZW07bWFyZ2luLXJpZ2h0Oi4xODc1ZW19LnRhZzpub3QoYm9keSkgLmljb246bGFzdC1jaGlsZDpub3QoOmZpcnN0LWNoaWxkKXttYXJnaW4tbGVmdDouMTg3NWVtO21hcmdpbi1yaWdodDotLjM3NWVtfS50YWc6bm90KGJvZHkpIC5pY29uOmZpcnN0LWNoaWxkOmxhc3QtY2hpbGR7bWFyZ2luLWxlZnQ6LS4zNzVlbTttYXJnaW4tcmlnaHQ6LS4zNzVlbX0udGFnOm5vdChib2R5KS5pcy1kZWxldGV7bWFyZ2luLWxlZnQ6MXB4O3BhZGRpbmc6MDtwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoyZW19LnRhZzpub3QoYm9keSkuaXMtZGVsZXRlOjphZnRlciwudGFnOm5vdChib2R5KS5pcy1kZWxldGU6OmJlZm9yZXtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcjtjb250ZW50OlxcXCJcXFwiO2Rpc3BsYXk6YmxvY2s7bGVmdDo1MCU7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSg0NWRlZyk7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciBjZW50ZXI7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgY2VudGVyfS50YWc6bm90KGJvZHkpLmlzLWRlbGV0ZTo6YmVmb3Jle2hlaWdodDoxcHg7d2lkdGg6NTAlfS50YWc6bm90KGJvZHkpLmlzLWRlbGV0ZTo6YWZ0ZXJ7aGVpZ2h0OjUwJTt3aWR0aDoxcHh9LnRhZzpub3QoYm9keSkuaXMtZGVsZXRlOmZvY3VzLC50YWc6bm90KGJvZHkpLmlzLWRlbGV0ZTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNlOGU4ZTh9LnRhZzpub3QoYm9keSkuaXMtZGVsZXRlOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiNkYmRiZGJ9LnRhZzpub3QoYm9keSkuaXMtcm91bmRlZHtib3JkZXItcmFkaXVzOjI5MDQ4NnB4fWEudGFnOmhvdmVye3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmV9LnN1YnRpdGxlLC50aXRsZXt3b3JkLWJyZWFrOmJyZWFrLXdvcmR9LnN1YnRpdGxlIGVtLC5zdWJ0aXRsZSBzcGFuLC50aXRsZSBlbSwudGl0bGUgc3Bhbntmb250LXdlaWdodDppbmhlcml0fS5zdWJ0aXRsZSBzdWIsLnRpdGxlIHN1Yntmb250LXNpemU6Ljc1ZW19LnN1YnRpdGxlIHN1cCwudGl0bGUgc3Vwe2ZvbnQtc2l6ZTouNzVlbX0uc3VidGl0bGUgLnRhZywudGl0bGUgLnRhZ3t2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9LnRpdGxle2NvbG9yOiMzNjM2MzY7Zm9udC1zaXplOjJyZW07Zm9udC13ZWlnaHQ6NjAwO2xpbmUtaGVpZ2h0OjEuMTI1fS50aXRsZSBzdHJvbmd7Y29sb3I6aW5oZXJpdDtmb250LXdlaWdodDppbmhlcml0fS50aXRsZSsuaGlnaGxpZ2h0e21hcmdpbi10b3A6LS43NXJlbX0udGl0bGU6bm90KC5pcy1zcGFjZWQpKy5zdWJ0aXRsZXttYXJnaW4tdG9wOi0xLjI1cmVtfS50aXRsZS5pcy0xe2ZvbnQtc2l6ZTozcmVtfS50aXRsZS5pcy0ye2ZvbnQtc2l6ZToyLjVyZW19LnRpdGxlLmlzLTN7Zm9udC1zaXplOjJyZW19LnRpdGxlLmlzLTR7Zm9udC1zaXplOjEuNXJlbX0udGl0bGUuaXMtNXtmb250LXNpemU6MS4yNXJlbX0udGl0bGUuaXMtNntmb250LXNpemU6MXJlbX0udGl0bGUuaXMtN3tmb250LXNpemU6Ljc1cmVtfS5zdWJ0aXRsZXtjb2xvcjojNGE0YTRhO2ZvbnQtc2l6ZToxLjI1cmVtO2ZvbnQtd2VpZ2h0OjQwMDtsaW5lLWhlaWdodDoxLjI1fS5zdWJ0aXRsZSBzdHJvbmd7Y29sb3I6IzM2MzYzNjtmb250LXdlaWdodDo2MDB9LnN1YnRpdGxlOm5vdCguaXMtc3BhY2VkKSsudGl0bGV7bWFyZ2luLXRvcDotMS4yNXJlbX0uc3VidGl0bGUuaXMtMXtmb250LXNpemU6M3JlbX0uc3VidGl0bGUuaXMtMntmb250LXNpemU6Mi41cmVtfS5zdWJ0aXRsZS5pcy0ze2ZvbnQtc2l6ZToycmVtfS5zdWJ0aXRsZS5pcy00e2ZvbnQtc2l6ZToxLjVyZW19LnN1YnRpdGxlLmlzLTV7Zm9udC1zaXplOjEuMjVyZW19LnN1YnRpdGxlLmlzLTZ7Zm9udC1zaXplOjFyZW19LnN1YnRpdGxlLmlzLTd7Zm9udC1zaXplOi43NXJlbX0uaGVhZGluZ3tkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZToxMXB4O2xldHRlci1zcGFjaW5nOjFweDttYXJnaW4tYm90dG9tOjVweDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2V9LmhpZ2hsaWdodHtmb250LXdlaWdodDo0MDA7bWF4LXdpZHRoOjEwMCU7b3ZlcmZsb3c6aGlkZGVuO3BhZGRpbmc6MH0uaGlnaGxpZ2h0IHByZXtvdmVyZmxvdzphdXRvO21heC13aWR0aDoxMDAlfS5udW1iZXJ7YWxpZ24taXRlbXM6Y2VudGVyO2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTtib3JkZXItcmFkaXVzOjI5MDQ4NnB4O2Rpc3BsYXk6aW5saW5lLWZsZXg7Zm9udC1zaXplOjEuMjVyZW07aGVpZ2h0OjJlbTtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO21hcmdpbi1yaWdodDoxLjVyZW07bWluLXdpZHRoOjIuNWVtO3BhZGRpbmc6LjI1cmVtIC41cmVtO3RleHQtYWxpZ246Y2VudGVyO3ZlcnRpY2FsLWFsaWduOnRvcH0uYnJlYWRjcnVtYntmb250LXNpemU6MXJlbTt3aGl0ZS1zcGFjZTpub3dyYXB9LmJyZWFkY3J1bWIgYXthbGlnbi1pdGVtczpjZW50ZXI7Y29sb3I6IzMyNzNkYztkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjtwYWRkaW5nOjAgLjc1ZW19LmJyZWFkY3J1bWIgYTpob3Zlcntjb2xvcjojMzYzNjM2fS5icmVhZGNydW1iIGxpe2FsaWduLWl0ZW1zOmNlbnRlcjtkaXNwbGF5OmZsZXh9LmJyZWFkY3J1bWIgbGk6Zmlyc3QtY2hpbGQgYXtwYWRkaW5nLWxlZnQ6MH0uYnJlYWRjcnVtYiBsaS5pcy1hY3RpdmUgYXtjb2xvcjojMzYzNjM2O2N1cnNvcjpkZWZhdWx0O3BvaW50ZXItZXZlbnRzOm5vbmV9LmJyZWFkY3J1bWIgbGkrbGk6OmJlZm9yZXtjb2xvcjojYjViNWI1O2NvbnRlbnQ6XFxcIlxcXFwwMDAyZlxcXCJ9LmJyZWFkY3J1bWIgb2wsLmJyZWFkY3J1bWIgdWx7YWxpZ24taXRlbXM6ZmxleC1zdGFydDtkaXNwbGF5OmZsZXg7ZmxleC13cmFwOndyYXA7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9LmJyZWFkY3J1bWIgLmljb246Zmlyc3QtY2hpbGR7bWFyZ2luLXJpZ2h0Oi41ZW19LmJyZWFkY3J1bWIgLmljb246bGFzdC1jaGlsZHttYXJnaW4tbGVmdDouNWVtfS5icmVhZGNydW1iLmlzLWNlbnRlcmVkIG9sLC5icmVhZGNydW1iLmlzLWNlbnRlcmVkIHVse2p1c3RpZnktY29udGVudDpjZW50ZXJ9LmJyZWFkY3J1bWIuaXMtcmlnaHQgb2wsLmJyZWFkY3J1bWIuaXMtcmlnaHQgdWx7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfS5icmVhZGNydW1iLmlzLXNtYWxse2ZvbnQtc2l6ZTouNzVyZW19LmJyZWFkY3J1bWIuaXMtbWVkaXVte2ZvbnQtc2l6ZToxLjI1cmVtfS5icmVhZGNydW1iLmlzLWxhcmdle2ZvbnQtc2l6ZToxLjVyZW19LmJyZWFkY3J1bWIuaGFzLWFycm93LXNlcGFyYXRvciBsaStsaTo6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFwwMjE5MlxcXCJ9LmJyZWFkY3J1bWIuaGFzLWJ1bGxldC1zZXBhcmF0b3IgbGkrbGk6OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcMDIwMjJcXFwifS5icmVhZGNydW1iLmhhcy1kb3Qtc2VwYXJhdG9yIGxpK2xpOjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXDAwMGI3XFxcIn0uYnJlYWRjcnVtYi5oYXMtc3VjY2VlZHMtc2VwYXJhdG9yIGxpK2xpOjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXDAyMjdCXFxcIn0uY2FyZHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym94LXNoYWRvdzowIDJweCAzcHggcmdiYSgxMCwxMCwxMCwuMSksMCAwIDAgMXB4IHJnYmEoMTAsMTAsMTAsLjEpO2NvbG9yOiM0YTRhNGE7bWF4LXdpZHRoOjEwMCU7cG9zaXRpb246cmVsYXRpdmV9LmNhcmQtaGVhZGVye2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7YWxpZ24taXRlbXM6c3RyZXRjaDtib3gtc2hhZG93OjAgMXB4IDJweCByZ2JhKDEwLDEwLDEwLC4xKTtkaXNwbGF5OmZsZXh9LmNhcmQtaGVhZGVyLXRpdGxle2FsaWduLWl0ZW1zOmNlbnRlcjtjb2xvcjojMzYzNjM2O2Rpc3BsYXk6ZmxleDtmbGV4LWdyb3c6MTtmb250LXdlaWdodDo3MDA7cGFkZGluZzouNzVyZW19LmNhcmQtaGVhZGVyLXRpdGxlLmlzLWNlbnRlcmVke2p1c3RpZnktY29udGVudDpjZW50ZXJ9LmNhcmQtaGVhZGVyLWljb257YWxpZ24taXRlbXM6Y2VudGVyO2N1cnNvcjpwb2ludGVyO2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3BhZGRpbmc6Ljc1cmVtfS5jYXJkLWltYWdle2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmV9LmNhcmQtY29udGVudHtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O3BhZGRpbmc6MS41cmVtfS5jYXJkLWZvb3RlcntiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci10b3A6MXB4IHNvbGlkICNkYmRiZGI7YWxpZ24taXRlbXM6c3RyZXRjaDtkaXNwbGF5OmZsZXh9LmNhcmQtZm9vdGVyLWl0ZW17YWxpZ24taXRlbXM6Y2VudGVyO2Rpc3BsYXk6ZmxleDtmbGV4LWJhc2lzOjA7ZmxleC1ncm93OjE7ZmxleC1zaHJpbms6MDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3BhZGRpbmc6Ljc1cmVtfS5jYXJkLWZvb3Rlci1pdGVtOm5vdCg6bGFzdC1jaGlsZCl7Ym9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjZGJkYmRifS5jYXJkIC5tZWRpYTpub3QoOmxhc3QtY2hpbGQpe21hcmdpbi1ib3R0b206Ljc1cmVtfS5kcm9wZG93bntkaXNwbGF5OmlubGluZS1mbGV4O3Bvc2l0aW9uOnJlbGF0aXZlO3ZlcnRpY2FsLWFsaWduOnRvcH0uZHJvcGRvd24uaXMtYWN0aXZlIC5kcm9wZG93bi1tZW51LC5kcm9wZG93bi5pcy1ob3ZlcmFibGU6aG92ZXIgLmRyb3Bkb3duLW1lbnV7ZGlzcGxheTpibG9ja30uZHJvcGRvd24uaXMtcmlnaHQgLmRyb3Bkb3duLW1lbnV7bGVmdDphdXRvO3JpZ2h0OjB9LmRyb3Bkb3duLmlzLXVwIC5kcm9wZG93bi1tZW51e2JvdHRvbToxMDAlO3BhZGRpbmctYm90dG9tOjRweDtwYWRkaW5nLXRvcDppbml0aWFsO3RvcDphdXRvfS5kcm9wZG93bi1tZW51e2Rpc3BsYXk6bm9uZTtsZWZ0OjA7bWluLXdpZHRoOjEycmVtO3BhZGRpbmctdG9wOjRweDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MTAwJTt6LWluZGV4OjIwfS5kcm9wZG93bi1jb250ZW50e2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItcmFkaXVzOjRweDtib3gtc2hhZG93OjAgMnB4IDNweCByZ2JhKDEwLDEwLDEwLC4xKSwwIDAgMCAxcHggcmdiYSgxMCwxMCwxMCwuMSk7cGFkZGluZy1ib3R0b206LjVyZW07cGFkZGluZy10b3A6LjVyZW19LmRyb3Bkb3duLWl0ZW17Y29sb3I6IzRhNGE0YTtkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTouODc1cmVtO2xpbmUtaGVpZ2h0OjEuNTtwYWRkaW5nOi4zNzVyZW0gMXJlbTtwb3NpdGlvbjpyZWxhdGl2ZX1hLmRyb3Bkb3duLWl0ZW0sYnV0dG9uLmRyb3Bkb3duLWl0ZW17cGFkZGluZy1yaWdodDozcmVtO3RleHQtYWxpZ246bGVmdDt3aGl0ZS1zcGFjZTpub3dyYXA7d2lkdGg6MTAwJX1hLmRyb3Bkb3duLWl0ZW06aG92ZXIsYnV0dG9uLmRyb3Bkb3duLWl0ZW06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O2NvbG9yOiMwYTBhMGF9YS5kcm9wZG93bi1pdGVtLmlzLWFjdGl2ZSxidXR0b24uZHJvcGRvd24taXRlbS5pcy1hY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojMzI3M2RjO2NvbG9yOiNmZmZ9LmRyb3Bkb3duLWRpdmlkZXJ7YmFja2dyb3VuZC1jb2xvcjojZGJkYmRiO2JvcmRlcjpub25lO2Rpc3BsYXk6YmxvY2s7aGVpZ2h0OjFweDttYXJnaW46LjVyZW0gMH0ubGV2ZWx7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufS5sZXZlbCBjb2Rle2JvcmRlci1yYWRpdXM6NHB4fS5sZXZlbCBpbWd7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246dG9wfS5sZXZlbC5pcy1tb2JpbGV7ZGlzcGxheTpmbGV4fS5sZXZlbC5pcy1tb2JpbGUgLmxldmVsLWxlZnQsLmxldmVsLmlzLW1vYmlsZSAubGV2ZWwtcmlnaHR7ZGlzcGxheTpmbGV4fS5sZXZlbC5pcy1tb2JpbGUgLmxldmVsLWxlZnQrLmxldmVsLXJpZ2h0e21hcmdpbi10b3A6MH0ubGV2ZWwuaXMtbW9iaWxlIC5sZXZlbC1pdGVtOm5vdCg6bGFzdC1jaGlsZCl7bWFyZ2luLWJvdHRvbTowO21hcmdpbi1yaWdodDouNzVyZW19LmxldmVsLmlzLW1vYmlsZSAubGV2ZWwtaXRlbTpub3QoLmlzLW5hcnJvdyl7ZmxleC1ncm93OjF9QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjlweCkscHJpbnR7LmxldmVse2Rpc3BsYXk6ZmxleH0ubGV2ZWw+LmxldmVsLWl0ZW06bm90KC5pcy1uYXJyb3cpe2ZsZXgtZ3JvdzoxfX0ubGV2ZWwtaXRlbXthbGlnbi1pdGVtczpjZW50ZXI7ZGlzcGxheTpmbGV4O2ZsZXgtYmFzaXM6YXV0bztmbGV4LWdyb3c6MDtmbGV4LXNocmluazowO2p1c3RpZnktY29udGVudDpjZW50ZXJ9LmxldmVsLWl0ZW0gLnN1YnRpdGxlLC5sZXZlbC1pdGVtIC50aXRsZXttYXJnaW4tYm90dG9tOjB9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCl7LmxldmVsLWl0ZW06bm90KDpsYXN0LWNoaWxkKXttYXJnaW4tYm90dG9tOi43NXJlbX19LmxldmVsLWxlZnQsLmxldmVsLXJpZ2h0e2ZsZXgtYmFzaXM6YXV0bztmbGV4LWdyb3c6MDtmbGV4LXNocmluazowfS5sZXZlbC1sZWZ0IC5sZXZlbC1pdGVtLmlzLWZsZXhpYmxlLC5sZXZlbC1yaWdodCAubGV2ZWwtaXRlbS5pcy1mbGV4aWJsZXtmbGV4LWdyb3c6MX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OXB4KSxwcmludHsubGV2ZWwtbGVmdCAubGV2ZWwtaXRlbTpub3QoOmxhc3QtY2hpbGQpLC5sZXZlbC1yaWdodCAubGV2ZWwtaXRlbTpub3QoOmxhc3QtY2hpbGQpe21hcmdpbi1yaWdodDouNzVyZW19fS5sZXZlbC1sZWZ0e2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydH1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXsubGV2ZWwtbGVmdCsubGV2ZWwtcmlnaHR7bWFyZ2luLXRvcDoxLjVyZW19fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY5cHgpLHByaW50ey5sZXZlbC1sZWZ0e2Rpc3BsYXk6ZmxleH19LmxldmVsLXJpZ2h0e2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjlweCkscHJpbnR7LmxldmVsLXJpZ2h0e2Rpc3BsYXk6ZmxleH19Lmxpc3R7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlci1yYWRpdXM6NHB4O2JveC1zaGFkb3c6MCAycHggM3B4IHJnYmEoMTAsMTAsMTAsLjEpLDAgMCAwIDFweCByZ2JhKDEwLDEwLDEwLC4xKX0ubGlzdC1pdGVte2Rpc3BsYXk6YmxvY2s7cGFkZGluZzouNWVtIDFlbX0ubGlzdC1pdGVtOm5vdChhKXtjb2xvcjojNGE0YTRhfS5saXN0LWl0ZW06Zmlyc3QtY2hpbGR7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czo0cHg7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6NHB4fS5saXN0LWl0ZW06bGFzdC1jaGlsZHtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjRweDtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czo0cHh9Lmxpc3QtaXRlbTpub3QoOmxhc3QtY2hpbGQpe2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNkYmRiZGJ9Lmxpc3QtaXRlbS5pcy1hY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojMzI3M2RjO2NvbG9yOiNmZmZ9YS5saXN0LWl0ZW17YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O2N1cnNvcjpwb2ludGVyfS5tZWRpYXthbGlnbi1pdGVtczpmbGV4LXN0YXJ0O2Rpc3BsYXk6ZmxleDt0ZXh0LWFsaWduOmxlZnR9Lm1lZGlhIC5jb250ZW50Om5vdCg6bGFzdC1jaGlsZCl7bWFyZ2luLWJvdHRvbTouNzVyZW19Lm1lZGlhIC5tZWRpYXtib3JkZXItdG9wOjFweCBzb2xpZCByZ2JhKDIxOSwyMTksMjE5LC41KTtkaXNwbGF5OmZsZXg7cGFkZGluZy10b3A6Ljc1cmVtfS5tZWRpYSAubWVkaWEgLmNvbnRlbnQ6bm90KDpsYXN0LWNoaWxkKSwubWVkaWEgLm1lZGlhIC5jb250cm9sOm5vdCg6bGFzdC1jaGlsZCl7bWFyZ2luLWJvdHRvbTouNXJlbX0ubWVkaWEgLm1lZGlhIC5tZWRpYXtwYWRkaW5nLXRvcDouNXJlbX0ubWVkaWEgLm1lZGlhIC5tZWRpYSsubWVkaWF7bWFyZ2luLXRvcDouNXJlbX0ubWVkaWErLm1lZGlhe2JvcmRlci10b3A6MXB4IHNvbGlkIHJnYmEoMjE5LDIxOSwyMTksLjUpO21hcmdpbi10b3A6MXJlbTtwYWRkaW5nLXRvcDoxcmVtfS5tZWRpYS5pcy1sYXJnZSsubWVkaWF7bWFyZ2luLXRvcDoxLjVyZW07cGFkZGluZy10b3A6MS41cmVtfS5tZWRpYS1sZWZ0LC5tZWRpYS1yaWdodHtmbGV4LWJhc2lzOmF1dG87ZmxleC1ncm93OjA7ZmxleC1zaHJpbms6MH0ubWVkaWEtbGVmdHttYXJnaW4tcmlnaHQ6MXJlbX0ubWVkaWEtcmlnaHR7bWFyZ2luLWxlZnQ6MXJlbX0ubWVkaWEtY29udGVudHtmbGV4LWJhc2lzOmF1dG87ZmxleC1ncm93OjE7ZmxleC1zaHJpbms6MTt0ZXh0LWFsaWduOmxlZnR9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCl7Lm1lZGlhLWNvbnRlbnR7b3ZlcmZsb3cteDphdXRvfX0ubWVudXtmb250LXNpemU6MXJlbX0ubWVudS5pcy1zbWFsbHtmb250LXNpemU6Ljc1cmVtfS5tZW51LmlzLW1lZGl1bXtmb250LXNpemU6MS4yNXJlbX0ubWVudS5pcy1sYXJnZXtmb250LXNpemU6MS41cmVtfS5tZW51LWxpc3R7bGluZS1oZWlnaHQ6MS4yNX0ubWVudS1saXN0IGF7Ym9yZGVyLXJhZGl1czoycHg7Y29sb3I6IzRhNGE0YTtkaXNwbGF5OmJsb2NrO3BhZGRpbmc6LjVlbSAuNzVlbX0ubWVudS1saXN0IGE6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O2NvbG9yOiMzNjM2MzZ9Lm1lbnUtbGlzdCBhLmlzLWFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiMzMjczZGM7Y29sb3I6I2ZmZn0ubWVudS1saXN0IGxpIHVse2JvcmRlci1sZWZ0OjFweCBzb2xpZCAjZGJkYmRiO21hcmdpbjouNzVlbTtwYWRkaW5nLWxlZnQ6Ljc1ZW19Lm1lbnUtbGFiZWx7Y29sb3I6IzdhN2E3YTtmb250LXNpemU6Ljc1ZW07bGV0dGVyLXNwYWNpbmc6LjFlbTt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2V9Lm1lbnUtbGFiZWw6bm90KDpmaXJzdC1jaGlsZCl7bWFyZ2luLXRvcDoxZW19Lm1lbnUtbGFiZWw6bm90KDpsYXN0LWNoaWxkKXttYXJnaW4tYm90dG9tOjFlbX0ubWVzc2FnZXtiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7Ym9yZGVyLXJhZGl1czo0cHg7Zm9udC1zaXplOjFyZW19Lm1lc3NhZ2Ugc3Ryb25ne2NvbG9yOmN1cnJlbnRDb2xvcn0ubWVzc2FnZSBhOm5vdCguYnV0dG9uKTpub3QoLnRhZyk6bm90KC5kcm9wZG93bi1pdGVtKXtjb2xvcjpjdXJyZW50Q29sb3I7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZX0ubWVzc2FnZS5pcy1zbWFsbHtmb250LXNpemU6Ljc1cmVtfS5tZXNzYWdlLmlzLW1lZGl1bXtmb250LXNpemU6MS4yNXJlbX0ubWVzc2FnZS5pcy1sYXJnZXtmb250LXNpemU6MS41cmVtfS5tZXNzYWdlLmlzLXdoaXRle2JhY2tncm91bmQtY29sb3I6I2ZmZn0ubWVzc2FnZS5pcy13aGl0ZSAubWVzc2FnZS1oZWFkZXJ7YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbG9yOiMwYTBhMGF9Lm1lc3NhZ2UuaXMtd2hpdGUgLm1lc3NhZ2UtYm9keXtib3JkZXItY29sb3I6I2ZmZjtjb2xvcjojNGQ0ZDRkfS5tZXNzYWdlLmlzLWJsYWNre2JhY2tncm91bmQtY29sb3I6I2ZhZmFmYX0ubWVzc2FnZS5pcy1ibGFjayAubWVzc2FnZS1oZWFkZXJ7YmFja2dyb3VuZC1jb2xvcjojMGEwYTBhO2NvbG9yOiNmZmZ9Lm1lc3NhZ2UuaXMtYmxhY2sgLm1lc3NhZ2UtYm9keXtib3JkZXItY29sb3I6IzBhMGEwYTtjb2xvcjojMDkwOTA5fS5tZXNzYWdlLmlzLWxpZ2h0e2JhY2tncm91bmQtY29sb3I6I2ZhZmFmYX0ubWVzc2FnZS5pcy1saWdodCAubWVzc2FnZS1oZWFkZXJ7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O2NvbG9yOiMzNjM2MzZ9Lm1lc3NhZ2UuaXMtbGlnaHQgLm1lc3NhZ2UtYm9keXtib3JkZXItY29sb3I6I2Y1ZjVmNTtjb2xvcjojNTA1MDUwfS5tZXNzYWdlLmlzLWRhcmt7YmFja2dyb3VuZC1jb2xvcjojZmFmYWZhfS5tZXNzYWdlLmlzLWRhcmsgLm1lc3NhZ2UtaGVhZGVye2JhY2tncm91bmQtY29sb3I6IzM2MzYzNjtjb2xvcjojZjVmNWY1fS5tZXNzYWdlLmlzLWRhcmsgLm1lc3NhZ2UtYm9keXtib3JkZXItY29sb3I6IzM2MzYzNjtjb2xvcjojMmEyYTJhfS5tZXNzYWdlLmlzLXByaW1hcnl7YmFja2dyb3VuZC1jb2xvcjojZjVmZmZkfS5tZXNzYWdlLmlzLXByaW1hcnkgLm1lc3NhZ2UtaGVhZGVye2JhY2tncm91bmQtY29sb3I6IzAwZDFiMjtjb2xvcjojZmZmfS5tZXNzYWdlLmlzLXByaW1hcnkgLm1lc3NhZ2UtYm9keXtib3JkZXItY29sb3I6IzAwZDFiMjtjb2xvcjojMDIxMzEwfS5tZXNzYWdlLmlzLWxpbmt7YmFja2dyb3VuZC1jb2xvcjojZjZmOWZlfS5tZXNzYWdlLmlzLWxpbmsgLm1lc3NhZ2UtaGVhZGVye2JhY2tncm91bmQtY29sb3I6IzMyNzNkYztjb2xvcjojZmZmfS5tZXNzYWdlLmlzLWxpbmsgLm1lc3NhZ2UtYm9keXtib3JkZXItY29sb3I6IzMyNzNkYztjb2xvcjojMjI1MDlhfS5tZXNzYWdlLmlzLWluZm97YmFja2dyb3VuZC1jb2xvcjojZjZmYmZlfS5tZXNzYWdlLmlzLWluZm8gLm1lc3NhZ2UtaGVhZGVye2JhY2tncm91bmQtY29sb3I6IzIwOWNlZTtjb2xvcjojZmZmfS5tZXNzYWdlLmlzLWluZm8gLm1lc3NhZ2UtYm9keXtib3JkZXItY29sb3I6IzIwOWNlZTtjb2xvcjojMTI1MzdlfS5tZXNzYWdlLmlzLXN1Y2Nlc3N7YmFja2dyb3VuZC1jb2xvcjojZjZmZWY5fS5tZXNzYWdlLmlzLXN1Y2Nlc3MgLm1lc3NhZ2UtaGVhZGVye2JhY2tncm91bmQtY29sb3I6IzIzZDE2MDtjb2xvcjojZmZmfS5tZXNzYWdlLmlzLXN1Y2Nlc3MgLm1lc3NhZ2UtYm9keXtib3JkZXItY29sb3I6IzIzZDE2MDtjb2xvcjojMGUzMDFhfS5tZXNzYWdlLmlzLXdhcm5pbmd7YmFja2dyb3VuZC1jb2xvcjojZmZmZGY1fS5tZXNzYWdlLmlzLXdhcm5pbmcgLm1lc3NhZ2UtaGVhZGVye2JhY2tncm91bmQtY29sb3I6I2ZmZGQ1Nztjb2xvcjpyZ2JhKDAsMCwwLC43KX0ubWVzc2FnZS5pcy13YXJuaW5nIC5tZXNzYWdlLWJvZHl7Ym9yZGVyLWNvbG9yOiNmZmRkNTc7Y29sb3I6IzNiMzEwOH0ubWVzc2FnZS5pcy1kYW5nZXJ7YmFja2dyb3VuZC1jb2xvcjojZmZmNWY3fS5tZXNzYWdlLmlzLWRhbmdlciAubWVzc2FnZS1oZWFkZXJ7YmFja2dyb3VuZC1jb2xvcjojZmYzODYwO2NvbG9yOiNmZmZ9Lm1lc3NhZ2UuaXMtZGFuZ2VyIC5tZXNzYWdlLWJvZHl7Ym9yZGVyLWNvbG9yOiNmZjM4NjA7Y29sb3I6I2NkMDkzMH0ubWVzc2FnZS1oZWFkZXJ7YWxpZ24taXRlbXM6Y2VudGVyO2JhY2tncm91bmQtY29sb3I6IzRhNGE0YTtib3JkZXItcmFkaXVzOjRweCA0cHggMCAwO2NvbG9yOiNmZmY7ZGlzcGxheTpmbGV4O2ZvbnQtd2VpZ2h0OjcwMDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtsaW5lLWhlaWdodDoxLjI1O3BhZGRpbmc6Ljc1ZW0gMWVtO3Bvc2l0aW9uOnJlbGF0aXZlfS5tZXNzYWdlLWhlYWRlciAuZGVsZXRle2ZsZXgtZ3JvdzowO2ZsZXgtc2hyaW5rOjA7bWFyZ2luLWxlZnQ6Ljc1ZW19Lm1lc3NhZ2UtaGVhZGVyKy5tZXNzYWdlLWJvZHl7Ym9yZGVyLXdpZHRoOjA7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czowO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjB9Lm1lc3NhZ2UtYm9keXtib3JkZXItY29sb3I6I2RiZGJkYjtib3JkZXItcmFkaXVzOjRweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLXdpZHRoOjAgMCAwIDRweDtjb2xvcjojNGE0YTRhO3BhZGRpbmc6MS4yNWVtIDEuNWVtfS5tZXNzYWdlLWJvZHkgY29kZSwubWVzc2FnZS1ib2R5IHByZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9Lm1lc3NhZ2UtYm9keSBwcmUgY29kZXtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS5tb2RhbHthbGlnbi1pdGVtczpjZW50ZXI7ZGlzcGxheTpub25lO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO292ZXJmbG93OmhpZGRlbjtwb3NpdGlvbjpmaXhlZDt6LWluZGV4OjQwfS5tb2RhbC5pcy1hY3RpdmV7ZGlzcGxheTpmbGV4fS5tb2RhbC1iYWNrZ3JvdW5ke2JhY2tncm91bmQtY29sb3I6cmdiYSgxMCwxMCwxMCwuODYpfS5tb2RhbC1jYXJkLC5tb2RhbC1jb250ZW50e21hcmdpbjowIDIwcHg7bWF4LWhlaWdodDpjYWxjKDEwMHZoIC0gMTYwcHgpO292ZXJmbG93OmF1dG87cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OXB4KSxwcmludHsubW9kYWwtY2FyZCwubW9kYWwtY29udGVudHttYXJnaW46MCBhdXRvO21heC1oZWlnaHQ6Y2FsYygxMDB2aCAtIDQwcHgpO3dpZHRoOjY0MHB4fX0ubW9kYWwtY2xvc2V7YmFja2dyb3VuZDowIDA7aGVpZ2h0OjQwcHg7cG9zaXRpb246Zml4ZWQ7cmlnaHQ6MjBweDt0b3A6MjBweDt3aWR0aDo0MHB4fS5tb2RhbC1jYXJke2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47bWF4LWhlaWdodDpjYWxjKDEwMHZoIC0gNDBweCk7b3ZlcmZsb3c6aGlkZGVuOy1tcy1vdmVyZmxvdy15OnZpc2libGV9Lm1vZGFsLWNhcmQtZm9vdCwubW9kYWwtY2FyZC1oZWFke2FsaWduLWl0ZW1zOmNlbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7ZGlzcGxheTpmbGV4O2ZsZXgtc2hyaW5rOjA7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7cGFkZGluZzoyMHB4O3Bvc2l0aW9uOnJlbGF0aXZlfS5tb2RhbC1jYXJkLWhlYWR7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2RiZGJkYjtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjZweDtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czo2cHh9Lm1vZGFsLWNhcmQtdGl0bGV7Y29sb3I6IzM2MzYzNjtmbGV4LWdyb3c6MTtmbGV4LXNocmluazowO2ZvbnQtc2l6ZToxLjVyZW07bGluZS1oZWlnaHQ6MX0ubW9kYWwtY2FyZC1mb290e2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6NnB4O2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjZweDtib3JkZXItdG9wOjFweCBzb2xpZCAjZGJkYmRifS5tb2RhbC1jYXJkLWZvb3QgLmJ1dHRvbjpub3QoOmxhc3QtY2hpbGQpe21hcmdpbi1yaWdodDoxMHB4fS5tb2RhbC1jYXJkLWJvZHl7LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2g7YmFja2dyb3VuZC1jb2xvcjojZmZmO2ZsZXgtZ3JvdzoxO2ZsZXgtc2hyaW5rOjE7b3ZlcmZsb3c6YXV0bztwYWRkaW5nOjIwcHh9Lm5hdmJhcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7bWluLWhlaWdodDozLjI1cmVtO3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6MzB9Lm5hdmJhci5pcy13aGl0ZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6IzBhMGEwYX0ubmF2YmFyLmlzLXdoaXRlIC5uYXZiYXItYnJhbmQgLm5hdmJhci1saW5rLC5uYXZiYXIuaXMtd2hpdGUgLm5hdmJhci1icmFuZD4ubmF2YmFyLWl0ZW17Y29sb3I6IzBhMGEwYX0ubmF2YmFyLmlzLXdoaXRlIC5uYXZiYXItYnJhbmQgLm5hdmJhci1saW5rLmlzLWFjdGl2ZSwubmF2YmFyLmlzLXdoaXRlIC5uYXZiYXItYnJhbmQgLm5hdmJhci1saW5rOmhvdmVyLC5uYXZiYXIuaXMtd2hpdGUgLm5hdmJhci1icmFuZD5hLm5hdmJhci1pdGVtLmlzLWFjdGl2ZSwubmF2YmFyLmlzLXdoaXRlIC5uYXZiYXItYnJhbmQ+YS5uYXZiYXItaXRlbTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmMmYyZjI7Y29sb3I6IzBhMGEwYX0ubmF2YmFyLmlzLXdoaXRlIC5uYXZiYXItYnJhbmQgLm5hdmJhci1saW5rOjphZnRlcntib3JkZXItY29sb3I6IzBhMGEwYX0ubmF2YmFyLmlzLXdoaXRlIC5uYXZiYXItYnVyZ2Vye2NvbG9yOiMwYTBhMGF9QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDg4cHgpey5uYXZiYXIuaXMtd2hpdGUgLm5hdmJhci1lbmQgLm5hdmJhci1saW5rLC5uYXZiYXIuaXMtd2hpdGUgLm5hdmJhci1lbmQ+Lm5hdmJhci1pdGVtLC5uYXZiYXIuaXMtd2hpdGUgLm5hdmJhci1zdGFydCAubmF2YmFyLWxpbmssLm5hdmJhci5pcy13aGl0ZSAubmF2YmFyLXN0YXJ0Pi5uYXZiYXItaXRlbXtjb2xvcjojMGEwYTBhfS5uYXZiYXIuaXMtd2hpdGUgLm5hdmJhci1lbmQgLm5hdmJhci1saW5rLmlzLWFjdGl2ZSwubmF2YmFyLmlzLXdoaXRlIC5uYXZiYXItZW5kIC5uYXZiYXItbGluazpob3ZlciwubmF2YmFyLmlzLXdoaXRlIC5uYXZiYXItZW5kPmEubmF2YmFyLWl0ZW0uaXMtYWN0aXZlLC5uYXZiYXIuaXMtd2hpdGUgLm5hdmJhci1lbmQ+YS5uYXZiYXItaXRlbTpob3ZlciwubmF2YmFyLmlzLXdoaXRlIC5uYXZiYXItc3RhcnQgLm5hdmJhci1saW5rLmlzLWFjdGl2ZSwubmF2YmFyLmlzLXdoaXRlIC5uYXZiYXItc3RhcnQgLm5hdmJhci1saW5rOmhvdmVyLC5uYXZiYXIuaXMtd2hpdGUgLm5hdmJhci1zdGFydD5hLm5hdmJhci1pdGVtLmlzLWFjdGl2ZSwubmF2YmFyLmlzLXdoaXRlIC5uYXZiYXItc3RhcnQ+YS5uYXZiYXItaXRlbTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmMmYyZjI7Y29sb3I6IzBhMGEwYX0ubmF2YmFyLmlzLXdoaXRlIC5uYXZiYXItZW5kIC5uYXZiYXItbGluazo6YWZ0ZXIsLm5hdmJhci5pcy13aGl0ZSAubmF2YmFyLXN0YXJ0IC5uYXZiYXItbGluazo6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOiMwYTBhMGF9Lm5hdmJhci5pcy13aGl0ZSAubmF2YmFyLWl0ZW0uaGFzLWRyb3Bkb3duLmlzLWFjdGl2ZSAubmF2YmFyLWxpbmssLm5hdmJhci5pcy13aGl0ZSAubmF2YmFyLWl0ZW0uaGFzLWRyb3Bkb3duOmhvdmVyIC5uYXZiYXItbGlua3tiYWNrZ3JvdW5kLWNvbG9yOiNmMmYyZjI7Y29sb3I6IzBhMGEwYX0ubmF2YmFyLmlzLXdoaXRlIC5uYXZiYXItZHJvcGRvd24gYS5uYXZiYXItaXRlbS5pcy1hY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbG9yOiMwYTBhMGF9fS5uYXZiYXIuaXMtYmxhY2t7YmFja2dyb3VuZC1jb2xvcjojMGEwYTBhO2NvbG9yOiNmZmZ9Lm5hdmJhci5pcy1ibGFjayAubmF2YmFyLWJyYW5kIC5uYXZiYXItbGluaywubmF2YmFyLmlzLWJsYWNrIC5uYXZiYXItYnJhbmQ+Lm5hdmJhci1pdGVte2NvbG9yOiNmZmZ9Lm5hdmJhci5pcy1ibGFjayAubmF2YmFyLWJyYW5kIC5uYXZiYXItbGluay5pcy1hY3RpdmUsLm5hdmJhci5pcy1ibGFjayAubmF2YmFyLWJyYW5kIC5uYXZiYXItbGluazpob3ZlciwubmF2YmFyLmlzLWJsYWNrIC5uYXZiYXItYnJhbmQ+YS5uYXZiYXItaXRlbS5pcy1hY3RpdmUsLm5hdmJhci5pcy1ibGFjayAubmF2YmFyLWJyYW5kPmEubmF2YmFyLWl0ZW06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMDAwO2NvbG9yOiNmZmZ9Lm5hdmJhci5pcy1ibGFjayAubmF2YmFyLWJyYW5kIC5uYXZiYXItbGluazo6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOiNmZmZ9Lm5hdmJhci5pcy1ibGFjayAubmF2YmFyLWJ1cmdlcntjb2xvcjojZmZmfUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTA4OHB4KXsubmF2YmFyLmlzLWJsYWNrIC5uYXZiYXItZW5kIC5uYXZiYXItbGluaywubmF2YmFyLmlzLWJsYWNrIC5uYXZiYXItZW5kPi5uYXZiYXItaXRlbSwubmF2YmFyLmlzLWJsYWNrIC5uYXZiYXItc3RhcnQgLm5hdmJhci1saW5rLC5uYXZiYXIuaXMtYmxhY2sgLm5hdmJhci1zdGFydD4ubmF2YmFyLWl0ZW17Y29sb3I6I2ZmZn0ubmF2YmFyLmlzLWJsYWNrIC5uYXZiYXItZW5kIC5uYXZiYXItbGluay5pcy1hY3RpdmUsLm5hdmJhci5pcy1ibGFjayAubmF2YmFyLWVuZCAubmF2YmFyLWxpbms6aG92ZXIsLm5hdmJhci5pcy1ibGFjayAubmF2YmFyLWVuZD5hLm5hdmJhci1pdGVtLmlzLWFjdGl2ZSwubmF2YmFyLmlzLWJsYWNrIC5uYXZiYXItZW5kPmEubmF2YmFyLWl0ZW06aG92ZXIsLm5hdmJhci5pcy1ibGFjayAubmF2YmFyLXN0YXJ0IC5uYXZiYXItbGluay5pcy1hY3RpdmUsLm5hdmJhci5pcy1ibGFjayAubmF2YmFyLXN0YXJ0IC5uYXZiYXItbGluazpob3ZlciwubmF2YmFyLmlzLWJsYWNrIC5uYXZiYXItc3RhcnQ+YS5uYXZiYXItaXRlbS5pcy1hY3RpdmUsLm5hdmJhci5pcy1ibGFjayAubmF2YmFyLXN0YXJ0PmEubmF2YmFyLWl0ZW06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMDAwO2NvbG9yOiNmZmZ9Lm5hdmJhci5pcy1ibGFjayAubmF2YmFyLWVuZCAubmF2YmFyLWxpbms6OmFmdGVyLC5uYXZiYXIuaXMtYmxhY2sgLm5hdmJhci1zdGFydCAubmF2YmFyLWxpbms6OmFmdGVye2JvcmRlci1jb2xvcjojZmZmfS5uYXZiYXIuaXMtYmxhY2sgLm5hdmJhci1pdGVtLmhhcy1kcm9wZG93bi5pcy1hY3RpdmUgLm5hdmJhci1saW5rLC5uYXZiYXIuaXMtYmxhY2sgLm5hdmJhci1pdGVtLmhhcy1kcm9wZG93bjpob3ZlciAubmF2YmFyLWxpbmt7YmFja2dyb3VuZC1jb2xvcjojMDAwO2NvbG9yOiNmZmZ9Lm5hdmJhci5pcy1ibGFjayAubmF2YmFyLWRyb3Bkb3duIGEubmF2YmFyLWl0ZW0uaXMtYWN0aXZle2JhY2tncm91bmQtY29sb3I6IzBhMGEwYTtjb2xvcjojZmZmfX0ubmF2YmFyLmlzLWxpZ2h0e2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTtjb2xvcjojMzYzNjM2fS5uYXZiYXIuaXMtbGlnaHQgLm5hdmJhci1icmFuZCAubmF2YmFyLWxpbmssLm5hdmJhci5pcy1saWdodCAubmF2YmFyLWJyYW5kPi5uYXZiYXItaXRlbXtjb2xvcjojMzYzNjM2fS5uYXZiYXIuaXMtbGlnaHQgLm5hdmJhci1icmFuZCAubmF2YmFyLWxpbmsuaXMtYWN0aXZlLC5uYXZiYXIuaXMtbGlnaHQgLm5hdmJhci1icmFuZCAubmF2YmFyLWxpbms6aG92ZXIsLm5hdmJhci5pcy1saWdodCAubmF2YmFyLWJyYW5kPmEubmF2YmFyLWl0ZW0uaXMtYWN0aXZlLC5uYXZiYXIuaXMtbGlnaHQgLm5hdmJhci1icmFuZD5hLm5hdmJhci1pdGVtOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2U4ZThlODtjb2xvcjojMzYzNjM2fS5uYXZiYXIuaXMtbGlnaHQgLm5hdmJhci1icmFuZCAubmF2YmFyLWxpbms6OmFmdGVye2JvcmRlci1jb2xvcjojMzYzNjM2fS5uYXZiYXIuaXMtbGlnaHQgLm5hdmJhci1idXJnZXJ7Y29sb3I6IzM2MzYzNn1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwODhweCl7Lm5hdmJhci5pcy1saWdodCAubmF2YmFyLWVuZCAubmF2YmFyLWxpbmssLm5hdmJhci5pcy1saWdodCAubmF2YmFyLWVuZD4ubmF2YmFyLWl0ZW0sLm5hdmJhci5pcy1saWdodCAubmF2YmFyLXN0YXJ0IC5uYXZiYXItbGluaywubmF2YmFyLmlzLWxpZ2h0IC5uYXZiYXItc3RhcnQ+Lm5hdmJhci1pdGVte2NvbG9yOiMzNjM2MzZ9Lm5hdmJhci5pcy1saWdodCAubmF2YmFyLWVuZCAubmF2YmFyLWxpbmsuaXMtYWN0aXZlLC5uYXZiYXIuaXMtbGlnaHQgLm5hdmJhci1lbmQgLm5hdmJhci1saW5rOmhvdmVyLC5uYXZiYXIuaXMtbGlnaHQgLm5hdmJhci1lbmQ+YS5uYXZiYXItaXRlbS5pcy1hY3RpdmUsLm5hdmJhci5pcy1saWdodCAubmF2YmFyLWVuZD5hLm5hdmJhci1pdGVtOmhvdmVyLC5uYXZiYXIuaXMtbGlnaHQgLm5hdmJhci1zdGFydCAubmF2YmFyLWxpbmsuaXMtYWN0aXZlLC5uYXZiYXIuaXMtbGlnaHQgLm5hdmJhci1zdGFydCAubmF2YmFyLWxpbms6aG92ZXIsLm5hdmJhci5pcy1saWdodCAubmF2YmFyLXN0YXJ0PmEubmF2YmFyLWl0ZW0uaXMtYWN0aXZlLC5uYXZiYXIuaXMtbGlnaHQgLm5hdmJhci1zdGFydD5hLm5hdmJhci1pdGVtOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2U4ZThlODtjb2xvcjojMzYzNjM2fS5uYXZiYXIuaXMtbGlnaHQgLm5hdmJhci1lbmQgLm5hdmJhci1saW5rOjphZnRlciwubmF2YmFyLmlzLWxpZ2h0IC5uYXZiYXItc3RhcnQgLm5hdmJhci1saW5rOjphZnRlcntib3JkZXItY29sb3I6IzM2MzYzNn0ubmF2YmFyLmlzLWxpZ2h0IC5uYXZiYXItaXRlbS5oYXMtZHJvcGRvd24uaXMtYWN0aXZlIC5uYXZiYXItbGluaywubmF2YmFyLmlzLWxpZ2h0IC5uYXZiYXItaXRlbS5oYXMtZHJvcGRvd246aG92ZXIgLm5hdmJhci1saW5re2JhY2tncm91bmQtY29sb3I6I2U4ZThlODtjb2xvcjojMzYzNjM2fS5uYXZiYXIuaXMtbGlnaHQgLm5hdmJhci1kcm9wZG93biBhLm5hdmJhci1pdGVtLmlzLWFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7Y29sb3I6IzM2MzYzNn19Lm5hdmJhci5pcy1kYXJre2JhY2tncm91bmQtY29sb3I6IzM2MzYzNjtjb2xvcjojZjVmNWY1fS5uYXZiYXIuaXMtZGFyayAubmF2YmFyLWJyYW5kIC5uYXZiYXItbGluaywubmF2YmFyLmlzLWRhcmsgLm5hdmJhci1icmFuZD4ubmF2YmFyLWl0ZW17Y29sb3I6I2Y1ZjVmNX0ubmF2YmFyLmlzLWRhcmsgLm5hdmJhci1icmFuZCAubmF2YmFyLWxpbmsuaXMtYWN0aXZlLC5uYXZiYXIuaXMtZGFyayAubmF2YmFyLWJyYW5kIC5uYXZiYXItbGluazpob3ZlciwubmF2YmFyLmlzLWRhcmsgLm5hdmJhci1icmFuZD5hLm5hdmJhci1pdGVtLmlzLWFjdGl2ZSwubmF2YmFyLmlzLWRhcmsgLm5hdmJhci1icmFuZD5hLm5hdmJhci1pdGVtOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzI5MjkyOTtjb2xvcjojZjVmNWY1fS5uYXZiYXIuaXMtZGFyayAubmF2YmFyLWJyYW5kIC5uYXZiYXItbGluazo6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOiNmNWY1ZjV9Lm5hdmJhci5pcy1kYXJrIC5uYXZiYXItYnVyZ2Vye2NvbG9yOiNmNWY1ZjV9QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDg4cHgpey5uYXZiYXIuaXMtZGFyayAubmF2YmFyLWVuZCAubmF2YmFyLWxpbmssLm5hdmJhci5pcy1kYXJrIC5uYXZiYXItZW5kPi5uYXZiYXItaXRlbSwubmF2YmFyLmlzLWRhcmsgLm5hdmJhci1zdGFydCAubmF2YmFyLWxpbmssLm5hdmJhci5pcy1kYXJrIC5uYXZiYXItc3RhcnQ+Lm5hdmJhci1pdGVte2NvbG9yOiNmNWY1ZjV9Lm5hdmJhci5pcy1kYXJrIC5uYXZiYXItZW5kIC5uYXZiYXItbGluay5pcy1hY3RpdmUsLm5hdmJhci5pcy1kYXJrIC5uYXZiYXItZW5kIC5uYXZiYXItbGluazpob3ZlciwubmF2YmFyLmlzLWRhcmsgLm5hdmJhci1lbmQ+YS5uYXZiYXItaXRlbS5pcy1hY3RpdmUsLm5hdmJhci5pcy1kYXJrIC5uYXZiYXItZW5kPmEubmF2YmFyLWl0ZW06aG92ZXIsLm5hdmJhci5pcy1kYXJrIC5uYXZiYXItc3RhcnQgLm5hdmJhci1saW5rLmlzLWFjdGl2ZSwubmF2YmFyLmlzLWRhcmsgLm5hdmJhci1zdGFydCAubmF2YmFyLWxpbms6aG92ZXIsLm5hdmJhci5pcy1kYXJrIC5uYXZiYXItc3RhcnQ+YS5uYXZiYXItaXRlbS5pcy1hY3RpdmUsLm5hdmJhci5pcy1kYXJrIC5uYXZiYXItc3RhcnQ+YS5uYXZiYXItaXRlbTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiMyOTI5Mjk7Y29sb3I6I2Y1ZjVmNX0ubmF2YmFyLmlzLWRhcmsgLm5hdmJhci1lbmQgLm5hdmJhci1saW5rOjphZnRlciwubmF2YmFyLmlzLWRhcmsgLm5hdmJhci1zdGFydCAubmF2YmFyLWxpbms6OmFmdGVye2JvcmRlci1jb2xvcjojZjVmNWY1fS5uYXZiYXIuaXMtZGFyayAubmF2YmFyLWl0ZW0uaGFzLWRyb3Bkb3duLmlzLWFjdGl2ZSAubmF2YmFyLWxpbmssLm5hdmJhci5pcy1kYXJrIC5uYXZiYXItaXRlbS5oYXMtZHJvcGRvd246aG92ZXIgLm5hdmJhci1saW5re2JhY2tncm91bmQtY29sb3I6IzI5MjkyOTtjb2xvcjojZjVmNWY1fS5uYXZiYXIuaXMtZGFyayAubmF2YmFyLWRyb3Bkb3duIGEubmF2YmFyLWl0ZW0uaXMtYWN0aXZle2JhY2tncm91bmQtY29sb3I6IzM2MzYzNjtjb2xvcjojZjVmNWY1fX0ubmF2YmFyLmlzLXByaW1hcnl7YmFja2dyb3VuZC1jb2xvcjojMDBkMWIyO2NvbG9yOiNmZmZ9Lm5hdmJhci5pcy1wcmltYXJ5IC5uYXZiYXItYnJhbmQgLm5hdmJhci1saW5rLC5uYXZiYXIuaXMtcHJpbWFyeSAubmF2YmFyLWJyYW5kPi5uYXZiYXItaXRlbXtjb2xvcjojZmZmfS5uYXZiYXIuaXMtcHJpbWFyeSAubmF2YmFyLWJyYW5kIC5uYXZiYXItbGluay5pcy1hY3RpdmUsLm5hdmJhci5pcy1wcmltYXJ5IC5uYXZiYXItYnJhbmQgLm5hdmJhci1saW5rOmhvdmVyLC5uYXZiYXIuaXMtcHJpbWFyeSAubmF2YmFyLWJyYW5kPmEubmF2YmFyLWl0ZW0uaXMtYWN0aXZlLC5uYXZiYXIuaXMtcHJpbWFyeSAubmF2YmFyLWJyYW5kPmEubmF2YmFyLWl0ZW06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMDBiODljO2NvbG9yOiNmZmZ9Lm5hdmJhci5pcy1wcmltYXJ5IC5uYXZiYXItYnJhbmQgLm5hdmJhci1saW5rOjphZnRlcntib3JkZXItY29sb3I6I2ZmZn0ubmF2YmFyLmlzLXByaW1hcnkgLm5hdmJhci1idXJnZXJ7Y29sb3I6I2ZmZn1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwODhweCl7Lm5hdmJhci5pcy1wcmltYXJ5IC5uYXZiYXItZW5kIC5uYXZiYXItbGluaywubmF2YmFyLmlzLXByaW1hcnkgLm5hdmJhci1lbmQ+Lm5hdmJhci1pdGVtLC5uYXZiYXIuaXMtcHJpbWFyeSAubmF2YmFyLXN0YXJ0IC5uYXZiYXItbGluaywubmF2YmFyLmlzLXByaW1hcnkgLm5hdmJhci1zdGFydD4ubmF2YmFyLWl0ZW17Y29sb3I6I2ZmZn0ubmF2YmFyLmlzLXByaW1hcnkgLm5hdmJhci1lbmQgLm5hdmJhci1saW5rLmlzLWFjdGl2ZSwubmF2YmFyLmlzLXByaW1hcnkgLm5hdmJhci1lbmQgLm5hdmJhci1saW5rOmhvdmVyLC5uYXZiYXIuaXMtcHJpbWFyeSAubmF2YmFyLWVuZD5hLm5hdmJhci1pdGVtLmlzLWFjdGl2ZSwubmF2YmFyLmlzLXByaW1hcnkgLm5hdmJhci1lbmQ+YS5uYXZiYXItaXRlbTpob3ZlciwubmF2YmFyLmlzLXByaW1hcnkgLm5hdmJhci1zdGFydCAubmF2YmFyLWxpbmsuaXMtYWN0aXZlLC5uYXZiYXIuaXMtcHJpbWFyeSAubmF2YmFyLXN0YXJ0IC5uYXZiYXItbGluazpob3ZlciwubmF2YmFyLmlzLXByaW1hcnkgLm5hdmJhci1zdGFydD5hLm5hdmJhci1pdGVtLmlzLWFjdGl2ZSwubmF2YmFyLmlzLXByaW1hcnkgLm5hdmJhci1zdGFydD5hLm5hdmJhci1pdGVtOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzAwYjg5Yztjb2xvcjojZmZmfS5uYXZiYXIuaXMtcHJpbWFyeSAubmF2YmFyLWVuZCAubmF2YmFyLWxpbms6OmFmdGVyLC5uYXZiYXIuaXMtcHJpbWFyeSAubmF2YmFyLXN0YXJ0IC5uYXZiYXItbGluazo6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOiNmZmZ9Lm5hdmJhci5pcy1wcmltYXJ5IC5uYXZiYXItaXRlbS5oYXMtZHJvcGRvd24uaXMtYWN0aXZlIC5uYXZiYXItbGluaywubmF2YmFyLmlzLXByaW1hcnkgLm5hdmJhci1pdGVtLmhhcy1kcm9wZG93bjpob3ZlciAubmF2YmFyLWxpbmt7YmFja2dyb3VuZC1jb2xvcjojMDBiODljO2NvbG9yOiNmZmZ9Lm5hdmJhci5pcy1wcmltYXJ5IC5uYXZiYXItZHJvcGRvd24gYS5uYXZiYXItaXRlbS5pcy1hY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojMDBkMWIyO2NvbG9yOiNmZmZ9fS5uYXZiYXIuaXMtbGlua3tiYWNrZ3JvdW5kLWNvbG9yOiMzMjczZGM7Y29sb3I6I2ZmZn0ubmF2YmFyLmlzLWxpbmsgLm5hdmJhci1icmFuZCAubmF2YmFyLWxpbmssLm5hdmJhci5pcy1saW5rIC5uYXZiYXItYnJhbmQ+Lm5hdmJhci1pdGVte2NvbG9yOiNmZmZ9Lm5hdmJhci5pcy1saW5rIC5uYXZiYXItYnJhbmQgLm5hdmJhci1saW5rLmlzLWFjdGl2ZSwubmF2YmFyLmlzLWxpbmsgLm5hdmJhci1icmFuZCAubmF2YmFyLWxpbms6aG92ZXIsLm5hdmJhci5pcy1saW5rIC5uYXZiYXItYnJhbmQ+YS5uYXZiYXItaXRlbS5pcy1hY3RpdmUsLm5hdmJhci5pcy1saW5rIC5uYXZiYXItYnJhbmQ+YS5uYXZiYXItaXRlbTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiMyMzY2ZDE7Y29sb3I6I2ZmZn0ubmF2YmFyLmlzLWxpbmsgLm5hdmJhci1icmFuZCAubmF2YmFyLWxpbms6OmFmdGVye2JvcmRlci1jb2xvcjojZmZmfS5uYXZiYXIuaXMtbGluayAubmF2YmFyLWJ1cmdlcntjb2xvcjojZmZmfUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTA4OHB4KXsubmF2YmFyLmlzLWxpbmsgLm5hdmJhci1lbmQgLm5hdmJhci1saW5rLC5uYXZiYXIuaXMtbGluayAubmF2YmFyLWVuZD4ubmF2YmFyLWl0ZW0sLm5hdmJhci5pcy1saW5rIC5uYXZiYXItc3RhcnQgLm5hdmJhci1saW5rLC5uYXZiYXIuaXMtbGluayAubmF2YmFyLXN0YXJ0Pi5uYXZiYXItaXRlbXtjb2xvcjojZmZmfS5uYXZiYXIuaXMtbGluayAubmF2YmFyLWVuZCAubmF2YmFyLWxpbmsuaXMtYWN0aXZlLC5uYXZiYXIuaXMtbGluayAubmF2YmFyLWVuZCAubmF2YmFyLWxpbms6aG92ZXIsLm5hdmJhci5pcy1saW5rIC5uYXZiYXItZW5kPmEubmF2YmFyLWl0ZW0uaXMtYWN0aXZlLC5uYXZiYXIuaXMtbGluayAubmF2YmFyLWVuZD5hLm5hdmJhci1pdGVtOmhvdmVyLC5uYXZiYXIuaXMtbGluayAubmF2YmFyLXN0YXJ0IC5uYXZiYXItbGluay5pcy1hY3RpdmUsLm5hdmJhci5pcy1saW5rIC5uYXZiYXItc3RhcnQgLm5hdmJhci1saW5rOmhvdmVyLC5uYXZiYXIuaXMtbGluayAubmF2YmFyLXN0YXJ0PmEubmF2YmFyLWl0ZW0uaXMtYWN0aXZlLC5uYXZiYXIuaXMtbGluayAubmF2YmFyLXN0YXJ0PmEubmF2YmFyLWl0ZW06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMjM2NmQxO2NvbG9yOiNmZmZ9Lm5hdmJhci5pcy1saW5rIC5uYXZiYXItZW5kIC5uYXZiYXItbGluazo6YWZ0ZXIsLm5hdmJhci5pcy1saW5rIC5uYXZiYXItc3RhcnQgLm5hdmJhci1saW5rOjphZnRlcntib3JkZXItY29sb3I6I2ZmZn0ubmF2YmFyLmlzLWxpbmsgLm5hdmJhci1pdGVtLmhhcy1kcm9wZG93bi5pcy1hY3RpdmUgLm5hdmJhci1saW5rLC5uYXZiYXIuaXMtbGluayAubmF2YmFyLWl0ZW0uaGFzLWRyb3Bkb3duOmhvdmVyIC5uYXZiYXItbGlua3tiYWNrZ3JvdW5kLWNvbG9yOiMyMzY2ZDE7Y29sb3I6I2ZmZn0ubmF2YmFyLmlzLWxpbmsgLm5hdmJhci1kcm9wZG93biBhLm5hdmJhci1pdGVtLmlzLWFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiMzMjczZGM7Y29sb3I6I2ZmZn19Lm5hdmJhci5pcy1pbmZve2JhY2tncm91bmQtY29sb3I6IzIwOWNlZTtjb2xvcjojZmZmfS5uYXZiYXIuaXMtaW5mbyAubmF2YmFyLWJyYW5kIC5uYXZiYXItbGluaywubmF2YmFyLmlzLWluZm8gLm5hdmJhci1icmFuZD4ubmF2YmFyLWl0ZW17Y29sb3I6I2ZmZn0ubmF2YmFyLmlzLWluZm8gLm5hdmJhci1icmFuZCAubmF2YmFyLWxpbmsuaXMtYWN0aXZlLC5uYXZiYXIuaXMtaW5mbyAubmF2YmFyLWJyYW5kIC5uYXZiYXItbGluazpob3ZlciwubmF2YmFyLmlzLWluZm8gLm5hdmJhci1icmFuZD5hLm5hdmJhci1pdGVtLmlzLWFjdGl2ZSwubmF2YmFyLmlzLWluZm8gLm5hdmJhci1icmFuZD5hLm5hdmJhci1pdGVtOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzExOGZlNDtjb2xvcjojZmZmfS5uYXZiYXIuaXMtaW5mbyAubmF2YmFyLWJyYW5kIC5uYXZiYXItbGluazo6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOiNmZmZ9Lm5hdmJhci5pcy1pbmZvIC5uYXZiYXItYnVyZ2Vye2NvbG9yOiNmZmZ9QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDg4cHgpey5uYXZiYXIuaXMtaW5mbyAubmF2YmFyLWVuZCAubmF2YmFyLWxpbmssLm5hdmJhci5pcy1pbmZvIC5uYXZiYXItZW5kPi5uYXZiYXItaXRlbSwubmF2YmFyLmlzLWluZm8gLm5hdmJhci1zdGFydCAubmF2YmFyLWxpbmssLm5hdmJhci5pcy1pbmZvIC5uYXZiYXItc3RhcnQ+Lm5hdmJhci1pdGVte2NvbG9yOiNmZmZ9Lm5hdmJhci5pcy1pbmZvIC5uYXZiYXItZW5kIC5uYXZiYXItbGluay5pcy1hY3RpdmUsLm5hdmJhci5pcy1pbmZvIC5uYXZiYXItZW5kIC5uYXZiYXItbGluazpob3ZlciwubmF2YmFyLmlzLWluZm8gLm5hdmJhci1lbmQ+YS5uYXZiYXItaXRlbS5pcy1hY3RpdmUsLm5hdmJhci5pcy1pbmZvIC5uYXZiYXItZW5kPmEubmF2YmFyLWl0ZW06aG92ZXIsLm5hdmJhci5pcy1pbmZvIC5uYXZiYXItc3RhcnQgLm5hdmJhci1saW5rLmlzLWFjdGl2ZSwubmF2YmFyLmlzLWluZm8gLm5hdmJhci1zdGFydCAubmF2YmFyLWxpbms6aG92ZXIsLm5hdmJhci5pcy1pbmZvIC5uYXZiYXItc3RhcnQ+YS5uYXZiYXItaXRlbS5pcy1hY3RpdmUsLm5hdmJhci5pcy1pbmZvIC5uYXZiYXItc3RhcnQ+YS5uYXZiYXItaXRlbTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiMxMThmZTQ7Y29sb3I6I2ZmZn0ubmF2YmFyLmlzLWluZm8gLm5hdmJhci1lbmQgLm5hdmJhci1saW5rOjphZnRlciwubmF2YmFyLmlzLWluZm8gLm5hdmJhci1zdGFydCAubmF2YmFyLWxpbms6OmFmdGVye2JvcmRlci1jb2xvcjojZmZmfS5uYXZiYXIuaXMtaW5mbyAubmF2YmFyLWl0ZW0uaGFzLWRyb3Bkb3duLmlzLWFjdGl2ZSAubmF2YmFyLWxpbmssLm5hdmJhci5pcy1pbmZvIC5uYXZiYXItaXRlbS5oYXMtZHJvcGRvd246aG92ZXIgLm5hdmJhci1saW5re2JhY2tncm91bmQtY29sb3I6IzExOGZlNDtjb2xvcjojZmZmfS5uYXZiYXIuaXMtaW5mbyAubmF2YmFyLWRyb3Bkb3duIGEubmF2YmFyLWl0ZW0uaXMtYWN0aXZle2JhY2tncm91bmQtY29sb3I6IzIwOWNlZTtjb2xvcjojZmZmfX0ubmF2YmFyLmlzLXN1Y2Nlc3N7YmFja2dyb3VuZC1jb2xvcjojMjNkMTYwO2NvbG9yOiNmZmZ9Lm5hdmJhci5pcy1zdWNjZXNzIC5uYXZiYXItYnJhbmQgLm5hdmJhci1saW5rLC5uYXZiYXIuaXMtc3VjY2VzcyAubmF2YmFyLWJyYW5kPi5uYXZiYXItaXRlbXtjb2xvcjojZmZmfS5uYXZiYXIuaXMtc3VjY2VzcyAubmF2YmFyLWJyYW5kIC5uYXZiYXItbGluay5pcy1hY3RpdmUsLm5hdmJhci5pcy1zdWNjZXNzIC5uYXZiYXItYnJhbmQgLm5hdmJhci1saW5rOmhvdmVyLC5uYXZiYXIuaXMtc3VjY2VzcyAubmF2YmFyLWJyYW5kPmEubmF2YmFyLWl0ZW0uaXMtYWN0aXZlLC5uYXZiYXIuaXMtc3VjY2VzcyAubmF2YmFyLWJyYW5kPmEubmF2YmFyLWl0ZW06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMjBiYzU2O2NvbG9yOiNmZmZ9Lm5hdmJhci5pcy1zdWNjZXNzIC5uYXZiYXItYnJhbmQgLm5hdmJhci1saW5rOjphZnRlcntib3JkZXItY29sb3I6I2ZmZn0ubmF2YmFyLmlzLXN1Y2Nlc3MgLm5hdmJhci1idXJnZXJ7Y29sb3I6I2ZmZn1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwODhweCl7Lm5hdmJhci5pcy1zdWNjZXNzIC5uYXZiYXItZW5kIC5uYXZiYXItbGluaywubmF2YmFyLmlzLXN1Y2Nlc3MgLm5hdmJhci1lbmQ+Lm5hdmJhci1pdGVtLC5uYXZiYXIuaXMtc3VjY2VzcyAubmF2YmFyLXN0YXJ0IC5uYXZiYXItbGluaywubmF2YmFyLmlzLXN1Y2Nlc3MgLm5hdmJhci1zdGFydD4ubmF2YmFyLWl0ZW17Y29sb3I6I2ZmZn0ubmF2YmFyLmlzLXN1Y2Nlc3MgLm5hdmJhci1lbmQgLm5hdmJhci1saW5rLmlzLWFjdGl2ZSwubmF2YmFyLmlzLXN1Y2Nlc3MgLm5hdmJhci1lbmQgLm5hdmJhci1saW5rOmhvdmVyLC5uYXZiYXIuaXMtc3VjY2VzcyAubmF2YmFyLWVuZD5hLm5hdmJhci1pdGVtLmlzLWFjdGl2ZSwubmF2YmFyLmlzLXN1Y2Nlc3MgLm5hdmJhci1lbmQ+YS5uYXZiYXItaXRlbTpob3ZlciwubmF2YmFyLmlzLXN1Y2Nlc3MgLm5hdmJhci1zdGFydCAubmF2YmFyLWxpbmsuaXMtYWN0aXZlLC5uYXZiYXIuaXMtc3VjY2VzcyAubmF2YmFyLXN0YXJ0IC5uYXZiYXItbGluazpob3ZlciwubmF2YmFyLmlzLXN1Y2Nlc3MgLm5hdmJhci1zdGFydD5hLm5hdmJhci1pdGVtLmlzLWFjdGl2ZSwubmF2YmFyLmlzLXN1Y2Nlc3MgLm5hdmJhci1zdGFydD5hLm5hdmJhci1pdGVtOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzIwYmM1Njtjb2xvcjojZmZmfS5uYXZiYXIuaXMtc3VjY2VzcyAubmF2YmFyLWVuZCAubmF2YmFyLWxpbms6OmFmdGVyLC5uYXZiYXIuaXMtc3VjY2VzcyAubmF2YmFyLXN0YXJ0IC5uYXZiYXItbGluazo6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOiNmZmZ9Lm5hdmJhci5pcy1zdWNjZXNzIC5uYXZiYXItaXRlbS5oYXMtZHJvcGRvd24uaXMtYWN0aXZlIC5uYXZiYXItbGluaywubmF2YmFyLmlzLXN1Y2Nlc3MgLm5hdmJhci1pdGVtLmhhcy1kcm9wZG93bjpob3ZlciAubmF2YmFyLWxpbmt7YmFja2dyb3VuZC1jb2xvcjojMjBiYzU2O2NvbG9yOiNmZmZ9Lm5hdmJhci5pcy1zdWNjZXNzIC5uYXZiYXItZHJvcGRvd24gYS5uYXZiYXItaXRlbS5pcy1hY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojMjNkMTYwO2NvbG9yOiNmZmZ9fS5uYXZiYXIuaXMtd2FybmluZ3tiYWNrZ3JvdW5kLWNvbG9yOiNmZmRkNTc7Y29sb3I6cmdiYSgwLDAsMCwuNyl9Lm5hdmJhci5pcy13YXJuaW5nIC5uYXZiYXItYnJhbmQgLm5hdmJhci1saW5rLC5uYXZiYXIuaXMtd2FybmluZyAubmF2YmFyLWJyYW5kPi5uYXZiYXItaXRlbXtjb2xvcjpyZ2JhKDAsMCwwLC43KX0ubmF2YmFyLmlzLXdhcm5pbmcgLm5hdmJhci1icmFuZCAubmF2YmFyLWxpbmsuaXMtYWN0aXZlLC5uYXZiYXIuaXMtd2FybmluZyAubmF2YmFyLWJyYW5kIC5uYXZiYXItbGluazpob3ZlciwubmF2YmFyLmlzLXdhcm5pbmcgLm5hdmJhci1icmFuZD5hLm5hdmJhci1pdGVtLmlzLWFjdGl2ZSwubmF2YmFyLmlzLXdhcm5pbmcgLm5hdmJhci1icmFuZD5hLm5hdmJhci1pdGVtOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2ZmZDgzZDtjb2xvcjpyZ2JhKDAsMCwwLC43KX0ubmF2YmFyLmlzLXdhcm5pbmcgLm5hdmJhci1icmFuZCAubmF2YmFyLWxpbms6OmFmdGVye2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC43KX0ubmF2YmFyLmlzLXdhcm5pbmcgLm5hdmJhci1idXJnZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNyl9QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDg4cHgpey5uYXZiYXIuaXMtd2FybmluZyAubmF2YmFyLWVuZCAubmF2YmFyLWxpbmssLm5hdmJhci5pcy13YXJuaW5nIC5uYXZiYXItZW5kPi5uYXZiYXItaXRlbSwubmF2YmFyLmlzLXdhcm5pbmcgLm5hdmJhci1zdGFydCAubmF2YmFyLWxpbmssLm5hdmJhci5pcy13YXJuaW5nIC5uYXZiYXItc3RhcnQ+Lm5hdmJhci1pdGVte2NvbG9yOnJnYmEoMCwwLDAsLjcpfS5uYXZiYXIuaXMtd2FybmluZyAubmF2YmFyLWVuZCAubmF2YmFyLWxpbmsuaXMtYWN0aXZlLC5uYXZiYXIuaXMtd2FybmluZyAubmF2YmFyLWVuZCAubmF2YmFyLWxpbms6aG92ZXIsLm5hdmJhci5pcy13YXJuaW5nIC5uYXZiYXItZW5kPmEubmF2YmFyLWl0ZW0uaXMtYWN0aXZlLC5uYXZiYXIuaXMtd2FybmluZyAubmF2YmFyLWVuZD5hLm5hdmJhci1pdGVtOmhvdmVyLC5uYXZiYXIuaXMtd2FybmluZyAubmF2YmFyLXN0YXJ0IC5uYXZiYXItbGluay5pcy1hY3RpdmUsLm5hdmJhci5pcy13YXJuaW5nIC5uYXZiYXItc3RhcnQgLm5hdmJhci1saW5rOmhvdmVyLC5uYXZiYXIuaXMtd2FybmluZyAubmF2YmFyLXN0YXJ0PmEubmF2YmFyLWl0ZW0uaXMtYWN0aXZlLC5uYXZiYXIuaXMtd2FybmluZyAubmF2YmFyLXN0YXJ0PmEubmF2YmFyLWl0ZW06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZmZkODNkO2NvbG9yOnJnYmEoMCwwLDAsLjcpfS5uYXZiYXIuaXMtd2FybmluZyAubmF2YmFyLWVuZCAubmF2YmFyLWxpbms6OmFmdGVyLC5uYXZiYXIuaXMtd2FybmluZyAubmF2YmFyLXN0YXJ0IC5uYXZiYXItbGluazo6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjcpfS5uYXZiYXIuaXMtd2FybmluZyAubmF2YmFyLWl0ZW0uaGFzLWRyb3Bkb3duLmlzLWFjdGl2ZSAubmF2YmFyLWxpbmssLm5hdmJhci5pcy13YXJuaW5nIC5uYXZiYXItaXRlbS5oYXMtZHJvcGRvd246aG92ZXIgLm5hdmJhci1saW5re2JhY2tncm91bmQtY29sb3I6I2ZmZDgzZDtjb2xvcjpyZ2JhKDAsMCwwLC43KX0ubmF2YmFyLmlzLXdhcm5pbmcgLm5hdmJhci1kcm9wZG93biBhLm5hdmJhci1pdGVtLmlzLWFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmRkNTc7Y29sb3I6cmdiYSgwLDAsMCwuNyl9fS5uYXZiYXIuaXMtZGFuZ2Vye2JhY2tncm91bmQtY29sb3I6I2ZmMzg2MDtjb2xvcjojZmZmfS5uYXZiYXIuaXMtZGFuZ2VyIC5uYXZiYXItYnJhbmQgLm5hdmJhci1saW5rLC5uYXZiYXIuaXMtZGFuZ2VyIC5uYXZiYXItYnJhbmQ+Lm5hdmJhci1pdGVte2NvbG9yOiNmZmZ9Lm5hdmJhci5pcy1kYW5nZXIgLm5hdmJhci1icmFuZCAubmF2YmFyLWxpbmsuaXMtYWN0aXZlLC5uYXZiYXIuaXMtZGFuZ2VyIC5uYXZiYXItYnJhbmQgLm5hdmJhci1saW5rOmhvdmVyLC5uYXZiYXIuaXMtZGFuZ2VyIC5uYXZiYXItYnJhbmQ+YS5uYXZiYXItaXRlbS5pcy1hY3RpdmUsLm5hdmJhci5pcy1kYW5nZXIgLm5hdmJhci1icmFuZD5hLm5hdmJhci1pdGVtOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2ZmMWY0Yjtjb2xvcjojZmZmfS5uYXZiYXIuaXMtZGFuZ2VyIC5uYXZiYXItYnJhbmQgLm5hdmJhci1saW5rOjphZnRlcntib3JkZXItY29sb3I6I2ZmZn0ubmF2YmFyLmlzLWRhbmdlciAubmF2YmFyLWJ1cmdlcntjb2xvcjojZmZmfUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTA4OHB4KXsubmF2YmFyLmlzLWRhbmdlciAubmF2YmFyLWVuZCAubmF2YmFyLWxpbmssLm5hdmJhci5pcy1kYW5nZXIgLm5hdmJhci1lbmQ+Lm5hdmJhci1pdGVtLC5uYXZiYXIuaXMtZGFuZ2VyIC5uYXZiYXItc3RhcnQgLm5hdmJhci1saW5rLC5uYXZiYXIuaXMtZGFuZ2VyIC5uYXZiYXItc3RhcnQ+Lm5hdmJhci1pdGVte2NvbG9yOiNmZmZ9Lm5hdmJhci5pcy1kYW5nZXIgLm5hdmJhci1lbmQgLm5hdmJhci1saW5rLmlzLWFjdGl2ZSwubmF2YmFyLmlzLWRhbmdlciAubmF2YmFyLWVuZCAubmF2YmFyLWxpbms6aG92ZXIsLm5hdmJhci5pcy1kYW5nZXIgLm5hdmJhci1lbmQ+YS5uYXZiYXItaXRlbS5pcy1hY3RpdmUsLm5hdmJhci5pcy1kYW5nZXIgLm5hdmJhci1lbmQ+YS5uYXZiYXItaXRlbTpob3ZlciwubmF2YmFyLmlzLWRhbmdlciAubmF2YmFyLXN0YXJ0IC5uYXZiYXItbGluay5pcy1hY3RpdmUsLm5hdmJhci5pcy1kYW5nZXIgLm5hdmJhci1zdGFydCAubmF2YmFyLWxpbms6aG92ZXIsLm5hdmJhci5pcy1kYW5nZXIgLm5hdmJhci1zdGFydD5hLm5hdmJhci1pdGVtLmlzLWFjdGl2ZSwubmF2YmFyLmlzLWRhbmdlciAubmF2YmFyLXN0YXJ0PmEubmF2YmFyLWl0ZW06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZmYxZjRiO2NvbG9yOiNmZmZ9Lm5hdmJhci5pcy1kYW5nZXIgLm5hdmJhci1lbmQgLm5hdmJhci1saW5rOjphZnRlciwubmF2YmFyLmlzLWRhbmdlciAubmF2YmFyLXN0YXJ0IC5uYXZiYXItbGluazo6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOiNmZmZ9Lm5hdmJhci5pcy1kYW5nZXIgLm5hdmJhci1pdGVtLmhhcy1kcm9wZG93bi5pcy1hY3RpdmUgLm5hdmJhci1saW5rLC5uYXZiYXIuaXMtZGFuZ2VyIC5uYXZiYXItaXRlbS5oYXMtZHJvcGRvd246aG92ZXIgLm5hdmJhci1saW5re2JhY2tncm91bmQtY29sb3I6I2ZmMWY0Yjtjb2xvcjojZmZmfS5uYXZiYXIuaXMtZGFuZ2VyIC5uYXZiYXItZHJvcGRvd24gYS5uYXZiYXItaXRlbS5pcy1hY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojZmYzODYwO2NvbG9yOiNmZmZ9fS5uYXZiYXI+LmNvbnRhaW5lcnthbGlnbi1pdGVtczpzdHJldGNoO2Rpc3BsYXk6ZmxleDttaW4taGVpZ2h0OjMuMjVyZW07d2lkdGg6MTAwJX0ubmF2YmFyLmhhcy1zaGFkb3d7Ym94LXNoYWRvdzowIDJweCAwIDAgI2Y1ZjVmNX0ubmF2YmFyLmlzLWZpeGVkLWJvdHRvbSwubmF2YmFyLmlzLWZpeGVkLXRvcHtsZWZ0OjA7cG9zaXRpb246Zml4ZWQ7cmlnaHQ6MDt6LWluZGV4OjMwfS5uYXZiYXIuaXMtZml4ZWQtYm90dG9te2JvdHRvbTowfS5uYXZiYXIuaXMtZml4ZWQtYm90dG9tLmhhcy1zaGFkb3d7Ym94LXNoYWRvdzowIC0ycHggMCAwICNmNWY1ZjV9Lm5hdmJhci5pcy1maXhlZC10b3B7dG9wOjB9Ym9keS5oYXMtbmF2YmFyLWZpeGVkLXRvcCxodG1sLmhhcy1uYXZiYXItZml4ZWQtdG9we3BhZGRpbmctdG9wOjMuMjVyZW19Ym9keS5oYXMtbmF2YmFyLWZpeGVkLWJvdHRvbSxodG1sLmhhcy1uYXZiYXItZml4ZWQtYm90dG9te3BhZGRpbmctYm90dG9tOjMuMjVyZW19Lm5hdmJhci1icmFuZCwubmF2YmFyLXRhYnN7YWxpZ24taXRlbXM6c3RyZXRjaDtkaXNwbGF5OmZsZXg7ZmxleC1zaHJpbms6MDttaW4taGVpZ2h0OjMuMjVyZW19Lm5hdmJhci1icmFuZCBhLm5hdmJhci1pdGVtOmhvdmVye2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9Lm5hdmJhci10YWJzey13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOnRvdWNoO21heC13aWR0aDoxMDB2dztvdmVyZmxvdy14OmF1dG87b3ZlcmZsb3cteTpoaWRkZW59Lm5hdmJhci1idXJnZXJ7Y29sb3I6IzRhNGE0YTtjdXJzb3I6cG9pbnRlcjtkaXNwbGF5OmJsb2NrO2hlaWdodDozLjI1cmVtO3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjMuMjVyZW07bWFyZ2luLWxlZnQ6YXV0b30ubmF2YmFyLWJ1cmdlciBzcGFue2JhY2tncm91bmQtY29sb3I6Y3VycmVudENvbG9yO2Rpc3BsYXk6YmxvY2s7aGVpZ2h0OjFweDtsZWZ0OmNhbGMoNTAlIC0gOHB4KTtwb3NpdGlvbjphYnNvbHV0ZTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46Y2VudGVyO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyO3RyYW5zaXRpb24tZHVyYXRpb246ODZtczt0cmFuc2l0aW9uLXByb3BlcnR5OmJhY2tncm91bmQtY29sb3Isb3BhY2l0eSwtd2Via2l0LXRyYW5zZm9ybTt0cmFuc2l0aW9uLXByb3BlcnR5OmJhY2tncm91bmQtY29sb3Isb3BhY2l0eSx0cmFuc2Zvcm07dHJhbnNpdGlvbi1wcm9wZXJ0eTpiYWNrZ3JvdW5kLWNvbG9yLG9wYWNpdHksdHJhbnNmb3JtLC13ZWJraXQtdHJhbnNmb3JtO3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0O3dpZHRoOjE2cHh9Lm5hdmJhci1idXJnZXIgc3BhbjpudGgtY2hpbGQoMSl7dG9wOmNhbGMoNTAlIC0gNnB4KX0ubmF2YmFyLWJ1cmdlciBzcGFuOm50aC1jaGlsZCgyKXt0b3A6Y2FsYyg1MCUgLSAxcHgpfS5uYXZiYXItYnVyZ2VyIHNwYW46bnRoLWNoaWxkKDMpe3RvcDpjYWxjKDUwJSArIDRweCl9Lm5hdmJhci1idXJnZXI6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4wNSl9Lm5hdmJhci1idXJnZXIuaXMtYWN0aXZlIHNwYW46bnRoLWNoaWxkKDEpey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoNXB4KSByb3RhdGUoNDVkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDVweCkgcm90YXRlKDQ1ZGVnKX0ubmF2YmFyLWJ1cmdlci5pcy1hY3RpdmUgc3BhbjpudGgtY2hpbGQoMil7b3BhY2l0eTowfS5uYXZiYXItYnVyZ2VyLmlzLWFjdGl2ZSBzcGFuOm50aC1jaGlsZCgzKXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC01cHgpIHJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01cHgpIHJvdGF0ZSgtNDVkZWcpfS5uYXZiYXItbWVudXtkaXNwbGF5Om5vbmV9Lm5hdmJhci1pdGVtLC5uYXZiYXItbGlua3tjb2xvcjojNGE0YTRhO2Rpc3BsYXk6YmxvY2s7bGluZS1oZWlnaHQ6MS41O3BhZGRpbmc6LjVyZW0gLjc1cmVtO3Bvc2l0aW9uOnJlbGF0aXZlfS5uYXZiYXItaXRlbSAuaWNvbjpvbmx5LWNoaWxkLC5uYXZiYXItbGluayAuaWNvbjpvbmx5LWNoaWxke21hcmdpbi1sZWZ0Oi0uMjVyZW07bWFyZ2luLXJpZ2h0Oi0uMjVyZW19Lm5hdmJhci1saW5rLGEubmF2YmFyLWl0ZW17Y3Vyc29yOnBvaW50ZXJ9Lm5hdmJhci1saW5rLmlzLWFjdGl2ZSwubmF2YmFyLWxpbms6aG92ZXIsYS5uYXZiYXItaXRlbS5pcy1hY3RpdmUsYS5uYXZiYXItaXRlbTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmYWZhZmE7Y29sb3I6IzMyNzNkY30ubmF2YmFyLWl0ZW17ZGlzcGxheTpibG9jaztmbGV4LWdyb3c6MDtmbGV4LXNocmluazowfS5uYXZiYXItaXRlbSBpbWd7bWF4LWhlaWdodDoxLjc1cmVtfS5uYXZiYXItaXRlbS5oYXMtZHJvcGRvd257cGFkZGluZzowfS5uYXZiYXItaXRlbS5pcy1leHBhbmRlZHtmbGV4LWdyb3c6MTtmbGV4LXNocmluazoxfS5uYXZiYXItaXRlbS5pcy10YWJ7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgdHJhbnNwYXJlbnQ7bWluLWhlaWdodDozLjI1cmVtO3BhZGRpbmctYm90dG9tOmNhbGMoLjVyZW0gLSAxcHgpfS5uYXZiYXItaXRlbS5pcy10YWI6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItYm90dG9tLWNvbG9yOiMzMjczZGN9Lm5hdmJhci1pdGVtLmlzLXRhYi5pcy1hY3RpdmV7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItYm90dG9tLWNvbG9yOiMzMjczZGM7Ym9yZGVyLWJvdHRvbS1zdHlsZTpzb2xpZDtib3JkZXItYm90dG9tLXdpZHRoOjNweDtjb2xvcjojMzI3M2RjO3BhZGRpbmctYm90dG9tOmNhbGMoLjVyZW0gLSAzcHgpfS5uYXZiYXItY29udGVudHtmbGV4LWdyb3c6MTtmbGV4LXNocmluazoxfS5uYXZiYXItbGluazpub3QoLmlzLWFycm93bGVzcyl7cGFkZGluZy1yaWdodDoyLjVlbX0ubmF2YmFyLWxpbms6bm90KC5pcy1hcnJvd2xlc3MpOjphZnRlcntib3JkZXItY29sb3I6IzMyNzNkYzttYXJnaW4tdG9wOi0uMzc1ZW07cmlnaHQ6MS4xMjVlbX0ubmF2YmFyLWRyb3Bkb3due2ZvbnQtc2l6ZTouODc1cmVtO3BhZGRpbmctYm90dG9tOi41cmVtO3BhZGRpbmctdG9wOi41cmVtfS5uYXZiYXItZHJvcGRvd24gLm5hdmJhci1pdGVte3BhZGRpbmctbGVmdDoxLjVyZW07cGFkZGluZy1yaWdodDoxLjVyZW19Lm5hdmJhci1kaXZpZGVye2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTtib3JkZXI6bm9uZTtkaXNwbGF5Om5vbmU7aGVpZ2h0OjJweDttYXJnaW46LjVyZW0gMH1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEwODdweCl7Lm5hdmJhcj4uY29udGFpbmVye2Rpc3BsYXk6YmxvY2t9Lm5hdmJhci1icmFuZCAubmF2YmFyLWl0ZW0sLm5hdmJhci10YWJzIC5uYXZiYXItaXRlbXthbGlnbi1pdGVtczpjZW50ZXI7ZGlzcGxheTpmbGV4fS5uYXZiYXItbGluazo6YWZ0ZXJ7ZGlzcGxheTpub25lfS5uYXZiYXItbWVudXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym94LXNoYWRvdzowIDhweCAxNnB4IHJnYmEoMTAsMTAsMTAsLjEpO3BhZGRpbmc6LjVyZW0gMH0ubmF2YmFyLW1lbnUuaXMtYWN0aXZle2Rpc3BsYXk6YmxvY2t9Lm5hdmJhci5pcy1maXhlZC1ib3R0b20tdG91Y2gsLm5hdmJhci5pcy1maXhlZC10b3AtdG91Y2h7bGVmdDowO3Bvc2l0aW9uOmZpeGVkO3JpZ2h0OjA7ei1pbmRleDozMH0ubmF2YmFyLmlzLWZpeGVkLWJvdHRvbS10b3VjaHtib3R0b206MH0ubmF2YmFyLmlzLWZpeGVkLWJvdHRvbS10b3VjaC5oYXMtc2hhZG93e2JveC1zaGFkb3c6MCAtMnB4IDNweCByZ2JhKDEwLDEwLDEwLC4xKX0ubmF2YmFyLmlzLWZpeGVkLXRvcC10b3VjaHt0b3A6MH0ubmF2YmFyLmlzLWZpeGVkLXRvcCAubmF2YmFyLW1lbnUsLm5hdmJhci5pcy1maXhlZC10b3AtdG91Y2ggLm5hdmJhci1tZW51ey13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOnRvdWNoO21heC1oZWlnaHQ6Y2FsYygxMDB2aCAtIDMuMjVyZW0pO292ZXJmbG93OmF1dG99Ym9keS5oYXMtbmF2YmFyLWZpeGVkLXRvcC10b3VjaCxodG1sLmhhcy1uYXZiYXItZml4ZWQtdG9wLXRvdWNoe3BhZGRpbmctdG9wOjMuMjVyZW19Ym9keS5oYXMtbmF2YmFyLWZpeGVkLWJvdHRvbS10b3VjaCxodG1sLmhhcy1uYXZiYXItZml4ZWQtYm90dG9tLXRvdWNoe3BhZGRpbmctYm90dG9tOjMuMjVyZW19fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTA4OHB4KXsubmF2YmFyLC5uYXZiYXItZW5kLC5uYXZiYXItbWVudSwubmF2YmFyLXN0YXJ0e2FsaWduLWl0ZW1zOnN0cmV0Y2g7ZGlzcGxheTpmbGV4fS5uYXZiYXJ7bWluLWhlaWdodDozLjI1cmVtfS5uYXZiYXIuaXMtc3BhY2Vke3BhZGRpbmc6MXJlbSAycmVtfS5uYXZiYXIuaXMtc3BhY2VkIC5uYXZiYXItZW5kLC5uYXZiYXIuaXMtc3BhY2VkIC5uYXZiYXItc3RhcnR7YWxpZ24taXRlbXM6Y2VudGVyfS5uYXZiYXIuaXMtc3BhY2VkIC5uYXZiYXItbGluaywubmF2YmFyLmlzLXNwYWNlZCBhLm5hdmJhci1pdGVte2JvcmRlci1yYWRpdXM6NHB4fS5uYXZiYXIuaXMtdHJhbnNwYXJlbnQgLm5hdmJhci1saW5rLmlzLWFjdGl2ZSwubmF2YmFyLmlzLXRyYW5zcGFyZW50IC5uYXZiYXItbGluazpob3ZlciwubmF2YmFyLmlzLXRyYW5zcGFyZW50IGEubmF2YmFyLWl0ZW0uaXMtYWN0aXZlLC5uYXZiYXIuaXMtdHJhbnNwYXJlbnQgYS5uYXZiYXItaXRlbTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50IWltcG9ydGFudH0ubmF2YmFyLmlzLXRyYW5zcGFyZW50IC5uYXZiYXItaXRlbS5oYXMtZHJvcGRvd24uaXMtYWN0aXZlIC5uYXZiYXItbGluaywubmF2YmFyLmlzLXRyYW5zcGFyZW50IC5uYXZiYXItaXRlbS5oYXMtZHJvcGRvd24uaXMtaG92ZXJhYmxlOmhvdmVyIC5uYXZiYXItbGlua3tiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50IWltcG9ydGFudH0ubmF2YmFyLmlzLXRyYW5zcGFyZW50IC5uYXZiYXItZHJvcGRvd24gYS5uYXZiYXItaXRlbTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7Y29sb3I6IzBhMGEwYX0ubmF2YmFyLmlzLXRyYW5zcGFyZW50IC5uYXZiYXItZHJvcGRvd24gYS5uYXZiYXItaXRlbS5pcy1hY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O2NvbG9yOiMzMjczZGN9Lm5hdmJhci1idXJnZXJ7ZGlzcGxheTpub25lfS5uYXZiYXItaXRlbSwubmF2YmFyLWxpbmt7YWxpZ24taXRlbXM6Y2VudGVyO2Rpc3BsYXk6ZmxleH0ubmF2YmFyLWl0ZW17ZGlzcGxheTpmbGV4fS5uYXZiYXItaXRlbS5oYXMtZHJvcGRvd257YWxpZ24taXRlbXM6c3RyZXRjaH0ubmF2YmFyLWl0ZW0uaGFzLWRyb3Bkb3duLXVwIC5uYXZiYXItbGluazo6YWZ0ZXJ7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEzNWRlZykgdHJhbnNsYXRlKC4yNWVtLC0uMjVlbSk7dHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpIHRyYW5zbGF0ZSguMjVlbSwtLjI1ZW0pfS5uYXZiYXItaXRlbS5oYXMtZHJvcGRvd24tdXAgLm5hdmJhci1kcm9wZG93bntib3JkZXItYm90dG9tOjJweCBzb2xpZCAjZGJkYmRiO2JvcmRlci1yYWRpdXM6NnB4IDZweCAwIDA7Ym9yZGVyLXRvcDpub25lO2JvdHRvbToxMDAlO2JveC1zaGFkb3c6MCAtOHB4IDhweCByZ2JhKDEwLDEwLDEwLC4xKTt0b3A6YXV0b30ubmF2YmFyLWl0ZW0uaXMtYWN0aXZlIC5uYXZiYXItZHJvcGRvd24sLm5hdmJhci1pdGVtLmlzLWhvdmVyYWJsZTpob3ZlciAubmF2YmFyLWRyb3Bkb3due2Rpc3BsYXk6YmxvY2t9Lm5hdmJhci1pdGVtLmlzLWFjdGl2ZSAubmF2YmFyLWRyb3Bkb3duLmlzLWJveGVkLC5uYXZiYXItaXRlbS5pcy1ob3ZlcmFibGU6aG92ZXIgLm5hdmJhci1kcm9wZG93bi5pcy1ib3hlZCwubmF2YmFyLmlzLXNwYWNlZCAubmF2YmFyLWl0ZW0uaXMtYWN0aXZlIC5uYXZiYXItZHJvcGRvd24sLm5hdmJhci5pcy1zcGFjZWQgLm5hdmJhci1pdGVtLmlzLWhvdmVyYWJsZTpob3ZlciAubmF2YmFyLWRyb3Bkb3due29wYWNpdHk6MTtwb2ludGVyLWV2ZW50czphdXRvOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCl9Lm5hdmJhci1tZW51e2ZsZXgtZ3JvdzoxO2ZsZXgtc2hyaW5rOjB9Lm5hdmJhci1zdGFydHtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDttYXJnaW4tcmlnaHQ6YXV0b30ubmF2YmFyLWVuZHtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7bWFyZ2luLWxlZnQ6YXV0b30ubmF2YmFyLWRyb3Bkb3due2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjZweDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo2cHg7Ym9yZGVyLXRvcDoycHggc29saWQgI2RiZGJkYjtib3gtc2hhZG93OjAgOHB4IDhweCByZ2JhKDEwLDEwLDEwLC4xKTtkaXNwbGF5Om5vbmU7Zm9udC1zaXplOi44NzVyZW07bGVmdDowO21pbi13aWR0aDoxMDAlO3Bvc2l0aW9uOmFic29sdXRlO3RvcDoxMDAlO3otaW5kZXg6MjB9Lm5hdmJhci1kcm9wZG93biAubmF2YmFyLWl0ZW17cGFkZGluZzouMzc1cmVtIDFyZW07d2hpdGUtc3BhY2U6bm93cmFwfS5uYXZiYXItZHJvcGRvd24gYS5uYXZiYXItaXRlbXtwYWRkaW5nLXJpZ2h0OjNyZW19Lm5hdmJhci1kcm9wZG93biBhLm5hdmJhci1pdGVtOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTtjb2xvcjojMGEwYTBhfS5uYXZiYXItZHJvcGRvd24gYS5uYXZiYXItaXRlbS5pcy1hY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O2NvbG9yOiMzMjczZGN9Lm5hdmJhci1kcm9wZG93bi5pcy1ib3hlZCwubmF2YmFyLmlzLXNwYWNlZCAubmF2YmFyLWRyb3Bkb3due2JvcmRlci1yYWRpdXM6NnB4O2JvcmRlci10b3A6bm9uZTtib3gtc2hhZG93OjAgOHB4IDhweCByZ2JhKDEwLDEwLDEwLC4xKSwwIDAgMCAxcHggcmdiYSgxMCwxMCwxMCwuMSk7ZGlzcGxheTpibG9jaztvcGFjaXR5OjA7cG9pbnRlci1ldmVudHM6bm9uZTt0b3A6Y2FsYygxMDAlICsgKC00cHgpKTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC01cHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01cHgpO3RyYW5zaXRpb24tZHVyYXRpb246ODZtczt0cmFuc2l0aW9uLXByb3BlcnR5Om9wYWNpdHksLXdlYmtpdC10cmFuc2Zvcm07dHJhbnNpdGlvbi1wcm9wZXJ0eTpvcGFjaXR5LHRyYW5zZm9ybTt0cmFuc2l0aW9uLXByb3BlcnR5Om9wYWNpdHksdHJhbnNmb3JtLC13ZWJraXQtdHJhbnNmb3JtfS5uYXZiYXItZHJvcGRvd24uaXMtcmlnaHR7bGVmdDphdXRvO3JpZ2h0OjB9Lm5hdmJhci1kaXZpZGVye2Rpc3BsYXk6YmxvY2t9LmNvbnRhaW5lcj4ubmF2YmFyIC5uYXZiYXItYnJhbmQsLm5hdmJhcj4uY29udGFpbmVyIC5uYXZiYXItYnJhbmR7bWFyZ2luLWxlZnQ6LS43NXJlbX0uY29udGFpbmVyPi5uYXZiYXIgLm5hdmJhci1tZW51LC5uYXZiYXI+LmNvbnRhaW5lciAubmF2YmFyLW1lbnV7bWFyZ2luLXJpZ2h0Oi0uNzVyZW19Lm5hdmJhci5pcy1maXhlZC1ib3R0b20tZGVza3RvcCwubmF2YmFyLmlzLWZpeGVkLXRvcC1kZXNrdG9we2xlZnQ6MDtwb3NpdGlvbjpmaXhlZDtyaWdodDowO3otaW5kZXg6MzB9Lm5hdmJhci5pcy1maXhlZC1ib3R0b20tZGVza3RvcHtib3R0b206MH0ubmF2YmFyLmlzLWZpeGVkLWJvdHRvbS1kZXNrdG9wLmhhcy1zaGFkb3d7Ym94LXNoYWRvdzowIC0ycHggM3B4IHJnYmEoMTAsMTAsMTAsLjEpfS5uYXZiYXIuaXMtZml4ZWQtdG9wLWRlc2t0b3B7dG9wOjB9Ym9keS5oYXMtbmF2YmFyLWZpeGVkLXRvcC1kZXNrdG9wLGh0bWwuaGFzLW5hdmJhci1maXhlZC10b3AtZGVza3RvcHtwYWRkaW5nLXRvcDozLjI1cmVtfWJvZHkuaGFzLW5hdmJhci1maXhlZC1ib3R0b20tZGVza3RvcCxodG1sLmhhcy1uYXZiYXItZml4ZWQtYm90dG9tLWRlc2t0b3B7cGFkZGluZy1ib3R0b206My4yNXJlbX1ib2R5Lmhhcy1zcGFjZWQtbmF2YmFyLWZpeGVkLXRvcCxodG1sLmhhcy1zcGFjZWQtbmF2YmFyLWZpeGVkLXRvcHtwYWRkaW5nLXRvcDo1LjI1cmVtfWJvZHkuaGFzLXNwYWNlZC1uYXZiYXItZml4ZWQtYm90dG9tLGh0bWwuaGFzLXNwYWNlZC1uYXZiYXItZml4ZWQtYm90dG9te3BhZGRpbmctYm90dG9tOjUuMjVyZW19Lm5hdmJhci1saW5rLmlzLWFjdGl2ZSxhLm5hdmJhci1pdGVtLmlzLWFjdGl2ZXtjb2xvcjojMGEwYTBhfS5uYXZiYXItbGluay5pcy1hY3RpdmU6bm90KDpob3ZlciksYS5uYXZiYXItaXRlbS5pcy1hY3RpdmU6bm90KDpob3Zlcil7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH0ubmF2YmFyLWl0ZW0uaGFzLWRyb3Bkb3duLmlzLWFjdGl2ZSAubmF2YmFyLWxpbmssLm5hdmJhci1pdGVtLmhhcy1kcm9wZG93bjpob3ZlciAubmF2YmFyLWxpbmt7YmFja2dyb3VuZC1jb2xvcjojZmFmYWZhfX0uaGVyby5pcy1mdWxsaGVpZ2h0LXdpdGgtbmF2YmFye21pbi1oZWlnaHQ6Y2FsYygxMDB2aCAtIDMuMjVyZW0pfS5wYWdpbmF0aW9ue2ZvbnQtc2l6ZToxcmVtO21hcmdpbjotLjI1cmVtfS5wYWdpbmF0aW9uLmlzLXNtYWxse2ZvbnQtc2l6ZTouNzVyZW19LnBhZ2luYXRpb24uaXMtbWVkaXVte2ZvbnQtc2l6ZToxLjI1cmVtfS5wYWdpbmF0aW9uLmlzLWxhcmdle2ZvbnQtc2l6ZToxLjVyZW19LnBhZ2luYXRpb24uaXMtcm91bmRlZCAucGFnaW5hdGlvbi1uZXh0LC5wYWdpbmF0aW9uLmlzLXJvdW5kZWQgLnBhZ2luYXRpb24tcHJldmlvdXN7cGFkZGluZy1sZWZ0OjFlbTtwYWRkaW5nLXJpZ2h0OjFlbTtib3JkZXItcmFkaXVzOjI5MDQ4NnB4fS5wYWdpbmF0aW9uLmlzLXJvdW5kZWQgLnBhZ2luYXRpb24tbGlua3tib3JkZXItcmFkaXVzOjI5MDQ4NnB4fS5wYWdpbmF0aW9uLC5wYWdpbmF0aW9uLWxpc3R7YWxpZ24taXRlbXM6Y2VudGVyO2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3RleHQtYWxpZ246Y2VudGVyfS5wYWdpbmF0aW9uLWVsbGlwc2lzLC5wYWdpbmF0aW9uLWxpbmssLnBhZ2luYXRpb24tbmV4dCwucGFnaW5hdGlvbi1wcmV2aW91c3tmb250LXNpemU6MWVtO3BhZGRpbmctbGVmdDouNWVtO3BhZGRpbmctcmlnaHQ6LjVlbTtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO21hcmdpbjouMjVyZW07dGV4dC1hbGlnbjpjZW50ZXJ9LnBhZ2luYXRpb24tbGluaywucGFnaW5hdGlvbi1uZXh0LC5wYWdpbmF0aW9uLXByZXZpb3Vze2JvcmRlci1jb2xvcjojZGJkYmRiO2NvbG9yOiMzNjM2MzY7bWluLXdpZHRoOjIuMjVlbX0ucGFnaW5hdGlvbi1saW5rOmhvdmVyLC5wYWdpbmF0aW9uLW5leHQ6aG92ZXIsLnBhZ2luYXRpb24tcHJldmlvdXM6aG92ZXJ7Ym9yZGVyLWNvbG9yOiNiNWI1YjU7Y29sb3I6IzM2MzYzNn0ucGFnaW5hdGlvbi1saW5rOmZvY3VzLC5wYWdpbmF0aW9uLW5leHQ6Zm9jdXMsLnBhZ2luYXRpb24tcHJldmlvdXM6Zm9jdXN7Ym9yZGVyLWNvbG9yOiMzMjczZGN9LnBhZ2luYXRpb24tbGluazphY3RpdmUsLnBhZ2luYXRpb24tbmV4dDphY3RpdmUsLnBhZ2luYXRpb24tcHJldmlvdXM6YWN0aXZle2JveC1zaGFkb3c6aW5zZXQgMCAxcHggMnB4IHJnYmEoMTAsMTAsMTAsLjIpfS5wYWdpbmF0aW9uLWxpbmtbZGlzYWJsZWRdLC5wYWdpbmF0aW9uLW5leHRbZGlzYWJsZWRdLC5wYWdpbmF0aW9uLXByZXZpb3VzW2Rpc2FibGVkXXtiYWNrZ3JvdW5kLWNvbG9yOiNkYmRiZGI7Ym9yZGVyLWNvbG9yOiNkYmRiZGI7Ym94LXNoYWRvdzpub25lO2NvbG9yOiM3YTdhN2E7b3BhY2l0eTouNX0ucGFnaW5hdGlvbi1uZXh0LC5wYWdpbmF0aW9uLXByZXZpb3Vze3BhZGRpbmctbGVmdDouNzVlbTtwYWRkaW5nLXJpZ2h0Oi43NWVtO3doaXRlLXNwYWNlOm5vd3JhcH0ucGFnaW5hdGlvbi1saW5rLmlzLWN1cnJlbnR7YmFja2dyb3VuZC1jb2xvcjojMzI3M2RjO2JvcmRlci1jb2xvcjojMzI3M2RjO2NvbG9yOiNmZmZ9LnBhZ2luYXRpb24tZWxsaXBzaXN7Y29sb3I6I2I1YjViNTtwb2ludGVyLWV2ZW50czpub25lfS5wYWdpbmF0aW9uLWxpc3R7ZmxleC13cmFwOndyYXB9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCl7LnBhZ2luYXRpb257ZmxleC13cmFwOndyYXB9LnBhZ2luYXRpb24tbmV4dCwucGFnaW5hdGlvbi1wcmV2aW91c3tmbGV4LWdyb3c6MTtmbGV4LXNocmluazoxfS5wYWdpbmF0aW9uLWxpc3QgbGl7ZmxleC1ncm93OjE7ZmxleC1zaHJpbms6MX19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjlweCkscHJpbnR7LnBhZ2luYXRpb24tbGlzdHtmbGV4LWdyb3c6MTtmbGV4LXNocmluazoxO2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O29yZGVyOjF9LnBhZ2luYXRpb24tcHJldmlvdXN7b3JkZXI6Mn0ucGFnaW5hdGlvbi1uZXh0e29yZGVyOjN9LnBhZ2luYXRpb257anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59LnBhZ2luYXRpb24uaXMtY2VudGVyZWQgLnBhZ2luYXRpb24tcHJldmlvdXN7b3JkZXI6MX0ucGFnaW5hdGlvbi5pcy1jZW50ZXJlZCAucGFnaW5hdGlvbi1saXN0e2p1c3RpZnktY29udGVudDpjZW50ZXI7b3JkZXI6Mn0ucGFnaW5hdGlvbi5pcy1jZW50ZXJlZCAucGFnaW5hdGlvbi1uZXh0e29yZGVyOjN9LnBhZ2luYXRpb24uaXMtcmlnaHQgLnBhZ2luYXRpb24tcHJldmlvdXN7b3JkZXI6MX0ucGFnaW5hdGlvbi5pcy1yaWdodCAucGFnaW5hdGlvbi1uZXh0e29yZGVyOjJ9LnBhZ2luYXRpb24uaXMtcmlnaHQgLnBhZ2luYXRpb24tbGlzdHtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7b3JkZXI6M319LnBhbmVse2ZvbnQtc2l6ZToxcmVtfS5wYW5lbDpub3QoOmxhc3QtY2hpbGQpe21hcmdpbi1ib3R0b206MS41cmVtfS5wYW5lbC1ibG9jaywucGFuZWwtaGVhZGluZywucGFuZWwtdGFic3tib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZGJkYmRiO2JvcmRlci1sZWZ0OjFweCBzb2xpZCAjZGJkYmRiO2JvcmRlci1yaWdodDoxcHggc29saWQgI2RiZGJkYn0ucGFuZWwtYmxvY2s6Zmlyc3QtY2hpbGQsLnBhbmVsLWhlYWRpbmc6Zmlyc3QtY2hpbGQsLnBhbmVsLXRhYnM6Zmlyc3QtY2hpbGR7Ym9yZGVyLXRvcDoxcHggc29saWQgI2RiZGJkYn0ucGFuZWwtaGVhZGluZ3tiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7Ym9yZGVyLXJhZGl1czo0cHggNHB4IDAgMDtjb2xvcjojMzYzNjM2O2ZvbnQtc2l6ZToxLjI1ZW07Zm9udC13ZWlnaHQ6MzAwO2xpbmUtaGVpZ2h0OjEuMjU7cGFkZGluZzouNWVtIC43NWVtfS5wYW5lbC10YWJze2FsaWduLWl0ZW1zOmZsZXgtZW5kO2Rpc3BsYXk6ZmxleDtmb250LXNpemU6Ljg3NWVtO2p1c3RpZnktY29udGVudDpjZW50ZXJ9LnBhbmVsLXRhYnMgYXtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZGJkYmRiO21hcmdpbi1ib3R0b206LTFweDtwYWRkaW5nOi41ZW19LnBhbmVsLXRhYnMgYS5pcy1hY3RpdmV7Ym9yZGVyLWJvdHRvbS1jb2xvcjojNGE0YTRhO2NvbG9yOiMzNjM2MzZ9LnBhbmVsLWxpc3QgYXtjb2xvcjojNGE0YTRhfS5wYW5lbC1saXN0IGE6aG92ZXJ7Y29sb3I6IzMyNzNkY30ucGFuZWwtYmxvY2t7YWxpZ24taXRlbXM6Y2VudGVyO2NvbG9yOiMzNjM2MzY7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O3BhZGRpbmc6LjVlbSAuNzVlbX0ucGFuZWwtYmxvY2sgaW5wdXRbdHlwZT1jaGVja2JveF17bWFyZ2luLXJpZ2h0Oi43NWVtfS5wYW5lbC1ibG9jaz4uY29udHJvbHtmbGV4LWdyb3c6MTtmbGV4LXNocmluazoxO3dpZHRoOjEwMCV9LnBhbmVsLWJsb2NrLmlzLXdyYXBwZWR7ZmxleC13cmFwOndyYXB9LnBhbmVsLWJsb2NrLmlzLWFjdGl2ZXtib3JkZXItbGVmdC1jb2xvcjojMzI3M2RjO2NvbG9yOiMzNjM2MzZ9LnBhbmVsLWJsb2NrLmlzLWFjdGl2ZSAucGFuZWwtaWNvbntjb2xvcjojMzI3M2RjfWEucGFuZWwtYmxvY2ssbGFiZWwucGFuZWwtYmxvY2t7Y3Vyc29yOnBvaW50ZXJ9YS5wYW5lbC1ibG9jazpob3ZlcixsYWJlbC5wYW5lbC1ibG9jazpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjV9LnBhbmVsLWljb257ZGlzcGxheTppbmxpbmUtYmxvY2s7Zm9udC1zaXplOjE0cHg7aGVpZ2h0OjFlbTtsaW5lLWhlaWdodDoxZW07dGV4dC1hbGlnbjpjZW50ZXI7dmVydGljYWwtYWxpZ246dG9wO3dpZHRoOjFlbTtjb2xvcjojN2E3YTdhO21hcmdpbi1yaWdodDouNzVlbX0ucGFuZWwtaWNvbiAuZmF7Zm9udC1zaXplOmluaGVyaXQ7bGluZS1oZWlnaHQ6aW5oZXJpdH0udGFic3std2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzp0b3VjaDthbGlnbi1pdGVtczpzdHJldGNoO2Rpc3BsYXk6ZmxleDtmb250LXNpemU6MXJlbTtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtvdmVyZmxvdzpoaWRkZW47b3ZlcmZsb3cteDphdXRvO3doaXRlLXNwYWNlOm5vd3JhcH0udGFicyBhe2FsaWduLWl0ZW1zOmNlbnRlcjtib3JkZXItYm90dG9tLWNvbG9yOiNkYmRiZGI7Ym9yZGVyLWJvdHRvbS1zdHlsZTpzb2xpZDtib3JkZXItYm90dG9tLXdpZHRoOjFweDtjb2xvcjojNGE0YTRhO2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO21hcmdpbi1ib3R0b206LTFweDtwYWRkaW5nOi41ZW0gMWVtO3ZlcnRpY2FsLWFsaWduOnRvcH0udGFicyBhOmhvdmVye2JvcmRlci1ib3R0b20tY29sb3I6IzM2MzYzNjtjb2xvcjojMzYzNjM2fS50YWJzIGxpe2Rpc3BsYXk6YmxvY2t9LnRhYnMgbGkuaXMtYWN0aXZlIGF7Ym9yZGVyLWJvdHRvbS1jb2xvcjojMzI3M2RjO2NvbG9yOiMzMjczZGN9LnRhYnMgdWx7YWxpZ24taXRlbXM6Y2VudGVyO2JvcmRlci1ib3R0b20tY29sb3I6I2RiZGJkYjtib3JkZXItYm90dG9tLXN0eWxlOnNvbGlkO2JvcmRlci1ib3R0b20td2lkdGg6MXB4O2Rpc3BsYXk6ZmxleDtmbGV4LWdyb3c6MTtmbGV4LXNocmluazowO2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fS50YWJzIHVsLmlzLWxlZnR7cGFkZGluZy1yaWdodDouNzVlbX0udGFicyB1bC5pcy1jZW50ZXJ7ZmxleDpub25lO2p1c3RpZnktY29udGVudDpjZW50ZXI7cGFkZGluZy1sZWZ0Oi43NWVtO3BhZGRpbmctcmlnaHQ6Ljc1ZW19LnRhYnMgdWwuaXMtcmlnaHR7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kO3BhZGRpbmctbGVmdDouNzVlbX0udGFicyAuaWNvbjpmaXJzdC1jaGlsZHttYXJnaW4tcmlnaHQ6LjVlbX0udGFicyAuaWNvbjpsYXN0LWNoaWxke21hcmdpbi1sZWZ0Oi41ZW19LnRhYnMuaXMtY2VudGVyZWQgdWx7anVzdGlmeS1jb250ZW50OmNlbnRlcn0udGFicy5pcy1yaWdodCB1bHtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9LnRhYnMuaXMtYm94ZWQgYXtib3JkZXI6MXB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1yYWRpdXM6NHB4IDRweCAwIDB9LnRhYnMuaXMtYm94ZWQgYTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7Ym9yZGVyLWJvdHRvbS1jb2xvcjojZGJkYmRifS50YWJzLmlzLWJveGVkIGxpLmlzLWFjdGl2ZSBhe2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItY29sb3I6I2RiZGJkYjtib3JkZXItYm90dG9tLWNvbG9yOnRyYW5zcGFyZW50IWltcG9ydGFudH0udGFicy5pcy1mdWxsd2lkdGggbGl7ZmxleC1ncm93OjE7ZmxleC1zaHJpbms6MH0udGFicy5pcy10b2dnbGUgYXtib3JkZXItY29sb3I6I2RiZGJkYjtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLXdpZHRoOjFweDttYXJnaW4tYm90dG9tOjA7cG9zaXRpb246cmVsYXRpdmV9LnRhYnMuaXMtdG9nZ2xlIGE6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O2JvcmRlci1jb2xvcjojYjViNWI1O3otaW5kZXg6Mn0udGFicy5pcy10b2dnbGUgbGkrbGl7bWFyZ2luLWxlZnQ6LTFweH0udGFicy5pcy10b2dnbGUgbGk6Zmlyc3QtY2hpbGQgYXtib3JkZXItcmFkaXVzOjRweCAwIDAgNHB4fS50YWJzLmlzLXRvZ2dsZSBsaTpsYXN0LWNoaWxkIGF7Ym9yZGVyLXJhZGl1czowIDRweCA0cHggMH0udGFicy5pcy10b2dnbGUgbGkuaXMtYWN0aXZlIGF7YmFja2dyb3VuZC1jb2xvcjojMzI3M2RjO2JvcmRlci1jb2xvcjojMzI3M2RjO2NvbG9yOiNmZmY7ei1pbmRleDoxfS50YWJzLmlzLXRvZ2dsZSB1bHtib3JkZXItYm90dG9tOm5vbmV9LnRhYnMuaXMtdG9nZ2xlLmlzLXRvZ2dsZS1yb3VuZGVkIGxpOmZpcnN0LWNoaWxkIGF7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czoyOTA0ODZweDtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjI5MDQ4NnB4O3BhZGRpbmctbGVmdDoxLjI1ZW19LnRhYnMuaXMtdG9nZ2xlLmlzLXRvZ2dsZS1yb3VuZGVkIGxpOmxhc3QtY2hpbGQgYXtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czoyOTA0ODZweDtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czoyOTA0ODZweDtwYWRkaW5nLXJpZ2h0OjEuMjVlbX0udGFicy5pcy1zbWFsbHtmb250LXNpemU6Ljc1cmVtfS50YWJzLmlzLW1lZGl1bXtmb250LXNpemU6MS4yNXJlbX0udGFicy5pcy1sYXJnZXtmb250LXNpemU6MS41cmVtfS5jb2x1bW57ZGlzcGxheTpibG9jaztmbGV4LWJhc2lzOjA7ZmxleC1ncm93OjE7ZmxleC1zaHJpbms6MTtwYWRkaW5nOi43NXJlbX0uY29sdW1ucy5pcy1tb2JpbGU+LmNvbHVtbi5pcy1uYXJyb3d7ZmxleDpub25lfS5jb2x1bW5zLmlzLW1vYmlsZT4uY29sdW1uLmlzLWZ1bGx7ZmxleDpub25lO3dpZHRoOjEwMCV9LmNvbHVtbnMuaXMtbW9iaWxlPi5jb2x1bW4uaXMtdGhyZWUtcXVhcnRlcnN7ZmxleDpub25lO3dpZHRoOjc1JX0uY29sdW1ucy5pcy1tb2JpbGU+LmNvbHVtbi5pcy10d28tdGhpcmRze2ZsZXg6bm9uZTt3aWR0aDo2Ni42NjY2JX0uY29sdW1ucy5pcy1tb2JpbGU+LmNvbHVtbi5pcy1oYWxme2ZsZXg6bm9uZTt3aWR0aDo1MCV9LmNvbHVtbnMuaXMtbW9iaWxlPi5jb2x1bW4uaXMtb25lLXRoaXJke2ZsZXg6bm9uZTt3aWR0aDozMy4zMzMzJX0uY29sdW1ucy5pcy1tb2JpbGU+LmNvbHVtbi5pcy1vbmUtcXVhcnRlcntmbGV4Om5vbmU7d2lkdGg6MjUlfS5jb2x1bW5zLmlzLW1vYmlsZT4uY29sdW1uLmlzLW9uZS1maWZ0aHtmbGV4Om5vbmU7d2lkdGg6MjAlfS5jb2x1bW5zLmlzLW1vYmlsZT4uY29sdW1uLmlzLXR3by1maWZ0aHN7ZmxleDpub25lO3dpZHRoOjQwJX0uY29sdW1ucy5pcy1tb2JpbGU+LmNvbHVtbi5pcy10aHJlZS1maWZ0aHN7ZmxleDpub25lO3dpZHRoOjYwJX0uY29sdW1ucy5pcy1tb2JpbGU+LmNvbHVtbi5pcy1mb3VyLWZpZnRoc3tmbGV4Om5vbmU7d2lkdGg6ODAlfS5jb2x1bW5zLmlzLW1vYmlsZT4uY29sdW1uLmlzLW9mZnNldC10aHJlZS1xdWFydGVyc3ttYXJnaW4tbGVmdDo3NSV9LmNvbHVtbnMuaXMtbW9iaWxlPi5jb2x1bW4uaXMtb2Zmc2V0LXR3by10aGlyZHN7bWFyZ2luLWxlZnQ6NjYuNjY2NiV9LmNvbHVtbnMuaXMtbW9iaWxlPi5jb2x1bW4uaXMtb2Zmc2V0LWhhbGZ7bWFyZ2luLWxlZnQ6NTAlfS5jb2x1bW5zLmlzLW1vYmlsZT4uY29sdW1uLmlzLW9mZnNldC1vbmUtdGhpcmR7bWFyZ2luLWxlZnQ6MzMuMzMzMyV9LmNvbHVtbnMuaXMtbW9iaWxlPi5jb2x1bW4uaXMtb2Zmc2V0LW9uZS1xdWFydGVye21hcmdpbi1sZWZ0OjI1JX0uY29sdW1ucy5pcy1tb2JpbGU+LmNvbHVtbi5pcy1vZmZzZXQtb25lLWZpZnRoe21hcmdpbi1sZWZ0OjIwJX0uY29sdW1ucy5pcy1tb2JpbGU+LmNvbHVtbi5pcy1vZmZzZXQtdHdvLWZpZnRoc3ttYXJnaW4tbGVmdDo0MCV9LmNvbHVtbnMuaXMtbW9iaWxlPi5jb2x1bW4uaXMtb2Zmc2V0LXRocmVlLWZpZnRoc3ttYXJnaW4tbGVmdDo2MCV9LmNvbHVtbnMuaXMtbW9iaWxlPi5jb2x1bW4uaXMtb2Zmc2V0LWZvdXItZmlmdGhze21hcmdpbi1sZWZ0OjgwJX0uY29sdW1ucy5pcy1tb2JpbGU+LmNvbHVtbi5pcy0xe2ZsZXg6bm9uZTt3aWR0aDo4LjMzMzMzJX0uY29sdW1ucy5pcy1tb2JpbGU+LmNvbHVtbi5pcy1vZmZzZXQtMXttYXJnaW4tbGVmdDo4LjMzMzMzJX0uY29sdW1ucy5pcy1tb2JpbGU+LmNvbHVtbi5pcy0ye2ZsZXg6bm9uZTt3aWR0aDoxNi42NjY2NyV9LmNvbHVtbnMuaXMtbW9iaWxlPi5jb2x1bW4uaXMtb2Zmc2V0LTJ7bWFyZ2luLWxlZnQ6MTYuNjY2NjclfS5jb2x1bW5zLmlzLW1vYmlsZT4uY29sdW1uLmlzLTN7ZmxleDpub25lO3dpZHRoOjI1JX0uY29sdW1ucy5pcy1tb2JpbGU+LmNvbHVtbi5pcy1vZmZzZXQtM3ttYXJnaW4tbGVmdDoyNSV9LmNvbHVtbnMuaXMtbW9iaWxlPi5jb2x1bW4uaXMtNHtmbGV4Om5vbmU7d2lkdGg6MzMuMzMzMzMlfS5jb2x1bW5zLmlzLW1vYmlsZT4uY29sdW1uLmlzLW9mZnNldC00e21hcmdpbi1sZWZ0OjMzLjMzMzMzJX0uY29sdW1ucy5pcy1tb2JpbGU+LmNvbHVtbi5pcy01e2ZsZXg6bm9uZTt3aWR0aDo0MS42NjY2NyV9LmNvbHVtbnMuaXMtbW9iaWxlPi5jb2x1bW4uaXMtb2Zmc2V0LTV7bWFyZ2luLWxlZnQ6NDEuNjY2NjclfS5jb2x1bW5zLmlzLW1vYmlsZT4uY29sdW1uLmlzLTZ7ZmxleDpub25lO3dpZHRoOjUwJX0uY29sdW1ucy5pcy1tb2JpbGU+LmNvbHVtbi5pcy1vZmZzZXQtNnttYXJnaW4tbGVmdDo1MCV9LmNvbHVtbnMuaXMtbW9iaWxlPi5jb2x1bW4uaXMtN3tmbGV4Om5vbmU7d2lkdGg6NTguMzMzMzMlfS5jb2x1bW5zLmlzLW1vYmlsZT4uY29sdW1uLmlzLW9mZnNldC03e21hcmdpbi1sZWZ0OjU4LjMzMzMzJX0uY29sdW1ucy5pcy1tb2JpbGU+LmNvbHVtbi5pcy04e2ZsZXg6bm9uZTt3aWR0aDo2Ni42NjY2NyV9LmNvbHVtbnMuaXMtbW9iaWxlPi5jb2x1bW4uaXMtb2Zmc2V0LTh7bWFyZ2luLWxlZnQ6NjYuNjY2NjclfS5jb2x1bW5zLmlzLW1vYmlsZT4uY29sdW1uLmlzLTl7ZmxleDpub25lO3dpZHRoOjc1JX0uY29sdW1ucy5pcy1tb2JpbGU+LmNvbHVtbi5pcy1vZmZzZXQtOXttYXJnaW4tbGVmdDo3NSV9LmNvbHVtbnMuaXMtbW9iaWxlPi5jb2x1bW4uaXMtMTB7ZmxleDpub25lO3dpZHRoOjgzLjMzMzMzJX0uY29sdW1ucy5pcy1tb2JpbGU+LmNvbHVtbi5pcy1vZmZzZXQtMTB7bWFyZ2luLWxlZnQ6ODMuMzMzMzMlfS5jb2x1bW5zLmlzLW1vYmlsZT4uY29sdW1uLmlzLTExe2ZsZXg6bm9uZTt3aWR0aDo5MS42NjY2NyV9LmNvbHVtbnMuaXMtbW9iaWxlPi5jb2x1bW4uaXMtb2Zmc2V0LTExe21hcmdpbi1sZWZ0OjkxLjY2NjY3JX0uY29sdW1ucy5pcy1tb2JpbGU+LmNvbHVtbi5pcy0xMntmbGV4Om5vbmU7d2lkdGg6MTAwJX0uY29sdW1ucy5pcy1tb2JpbGU+LmNvbHVtbi5pcy1vZmZzZXQtMTJ7bWFyZ2luLWxlZnQ6MTAwJX1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXsuY29sdW1uLmlzLW5hcnJvdy1tb2JpbGV7ZmxleDpub25lfS5jb2x1bW4uaXMtZnVsbC1tb2JpbGV7ZmxleDpub25lO3dpZHRoOjEwMCV9LmNvbHVtbi5pcy10aHJlZS1xdWFydGVycy1tb2JpbGV7ZmxleDpub25lO3dpZHRoOjc1JX0uY29sdW1uLmlzLXR3by10aGlyZHMtbW9iaWxle2ZsZXg6bm9uZTt3aWR0aDo2Ni42NjY2JX0uY29sdW1uLmlzLWhhbGYtbW9iaWxle2ZsZXg6bm9uZTt3aWR0aDo1MCV9LmNvbHVtbi5pcy1vbmUtdGhpcmQtbW9iaWxle2ZsZXg6bm9uZTt3aWR0aDozMy4zMzMzJX0uY29sdW1uLmlzLW9uZS1xdWFydGVyLW1vYmlsZXtmbGV4Om5vbmU7d2lkdGg6MjUlfS5jb2x1bW4uaXMtb25lLWZpZnRoLW1vYmlsZXtmbGV4Om5vbmU7d2lkdGg6MjAlfS5jb2x1bW4uaXMtdHdvLWZpZnRocy1tb2JpbGV7ZmxleDpub25lO3dpZHRoOjQwJX0uY29sdW1uLmlzLXRocmVlLWZpZnRocy1tb2JpbGV7ZmxleDpub25lO3dpZHRoOjYwJX0uY29sdW1uLmlzLWZvdXItZmlmdGhzLW1vYmlsZXtmbGV4Om5vbmU7d2lkdGg6ODAlfS5jb2x1bW4uaXMtb2Zmc2V0LXRocmVlLXF1YXJ0ZXJzLW1vYmlsZXttYXJnaW4tbGVmdDo3NSV9LmNvbHVtbi5pcy1vZmZzZXQtdHdvLXRoaXJkcy1tb2JpbGV7bWFyZ2luLWxlZnQ6NjYuNjY2NiV9LmNvbHVtbi5pcy1vZmZzZXQtaGFsZi1tb2JpbGV7bWFyZ2luLWxlZnQ6NTAlfS5jb2x1bW4uaXMtb2Zmc2V0LW9uZS10aGlyZC1tb2JpbGV7bWFyZ2luLWxlZnQ6MzMuMzMzMyV9LmNvbHVtbi5pcy1vZmZzZXQtb25lLXF1YXJ0ZXItbW9iaWxle21hcmdpbi1sZWZ0OjI1JX0uY29sdW1uLmlzLW9mZnNldC1vbmUtZmlmdGgtbW9iaWxle21hcmdpbi1sZWZ0OjIwJX0uY29sdW1uLmlzLW9mZnNldC10d28tZmlmdGhzLW1vYmlsZXttYXJnaW4tbGVmdDo0MCV9LmNvbHVtbi5pcy1vZmZzZXQtdGhyZWUtZmlmdGhzLW1vYmlsZXttYXJnaW4tbGVmdDo2MCV9LmNvbHVtbi5pcy1vZmZzZXQtZm91ci1maWZ0aHMtbW9iaWxle21hcmdpbi1sZWZ0OjgwJX0uY29sdW1uLmlzLTEtbW9iaWxle2ZsZXg6bm9uZTt3aWR0aDo4LjMzMzMzJX0uY29sdW1uLmlzLW9mZnNldC0xLW1vYmlsZXttYXJnaW4tbGVmdDo4LjMzMzMzJX0uY29sdW1uLmlzLTItbW9iaWxle2ZsZXg6bm9uZTt3aWR0aDoxNi42NjY2NyV9LmNvbHVtbi5pcy1vZmZzZXQtMi1tb2JpbGV7bWFyZ2luLWxlZnQ6MTYuNjY2NjclfS5jb2x1bW4uaXMtMy1tb2JpbGV7ZmxleDpub25lO3dpZHRoOjI1JX0uY29sdW1uLmlzLW9mZnNldC0zLW1vYmlsZXttYXJnaW4tbGVmdDoyNSV9LmNvbHVtbi5pcy00LW1vYmlsZXtmbGV4Om5vbmU7d2lkdGg6MzMuMzMzMzMlfS5jb2x1bW4uaXMtb2Zmc2V0LTQtbW9iaWxle21hcmdpbi1sZWZ0OjMzLjMzMzMzJX0uY29sdW1uLmlzLTUtbW9iaWxle2ZsZXg6bm9uZTt3aWR0aDo0MS42NjY2NyV9LmNvbHVtbi5pcy1vZmZzZXQtNS1tb2JpbGV7bWFyZ2luLWxlZnQ6NDEuNjY2NjclfS5jb2x1bW4uaXMtNi1tb2JpbGV7ZmxleDpub25lO3dpZHRoOjUwJX0uY29sdW1uLmlzLW9mZnNldC02LW1vYmlsZXttYXJnaW4tbGVmdDo1MCV9LmNvbHVtbi5pcy03LW1vYmlsZXtmbGV4Om5vbmU7d2lkdGg6NTguMzMzMzMlfS5jb2x1bW4uaXMtb2Zmc2V0LTctbW9iaWxle21hcmdpbi1sZWZ0OjU4LjMzMzMzJX0uY29sdW1uLmlzLTgtbW9iaWxle2ZsZXg6bm9uZTt3aWR0aDo2Ni42NjY2NyV9LmNvbHVtbi5pcy1vZmZzZXQtOC1tb2JpbGV7bWFyZ2luLWxlZnQ6NjYuNjY2NjclfS5jb2x1bW4uaXMtOS1tb2JpbGV7ZmxleDpub25lO3dpZHRoOjc1JX0uY29sdW1uLmlzLW9mZnNldC05LW1vYmlsZXttYXJnaW4tbGVmdDo3NSV9LmNvbHVtbi5pcy0xMC1tb2JpbGV7ZmxleDpub25lO3dpZHRoOjgzLjMzMzMzJX0uY29sdW1uLmlzLW9mZnNldC0xMC1tb2JpbGV7bWFyZ2luLWxlZnQ6ODMuMzMzMzMlfS5jb2x1bW4uaXMtMTEtbW9iaWxle2ZsZXg6bm9uZTt3aWR0aDo5MS42NjY2NyV9LmNvbHVtbi5pcy1vZmZzZXQtMTEtbW9iaWxle21hcmdpbi1sZWZ0OjkxLjY2NjY3JX0uY29sdW1uLmlzLTEyLW1vYmlsZXtmbGV4Om5vbmU7d2lkdGg6MTAwJX0uY29sdW1uLmlzLW9mZnNldC0xMi1tb2JpbGV7bWFyZ2luLWxlZnQ6MTAwJX19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjlweCkscHJpbnR7LmNvbHVtbi5pcy1uYXJyb3csLmNvbHVtbi5pcy1uYXJyb3ctdGFibGV0e2ZsZXg6bm9uZX0uY29sdW1uLmlzLWZ1bGwsLmNvbHVtbi5pcy1mdWxsLXRhYmxldHtmbGV4Om5vbmU7d2lkdGg6MTAwJX0uY29sdW1uLmlzLXRocmVlLXF1YXJ0ZXJzLC5jb2x1bW4uaXMtdGhyZWUtcXVhcnRlcnMtdGFibGV0e2ZsZXg6bm9uZTt3aWR0aDo3NSV9LmNvbHVtbi5pcy10d28tdGhpcmRzLC5jb2x1bW4uaXMtdHdvLXRoaXJkcy10YWJsZXR7ZmxleDpub25lO3dpZHRoOjY2LjY2NjYlfS5jb2x1bW4uaXMtaGFsZiwuY29sdW1uLmlzLWhhbGYtdGFibGV0e2ZsZXg6bm9uZTt3aWR0aDo1MCV9LmNvbHVtbi5pcy1vbmUtdGhpcmQsLmNvbHVtbi5pcy1vbmUtdGhpcmQtdGFibGV0e2ZsZXg6bm9uZTt3aWR0aDozMy4zMzMzJX0uY29sdW1uLmlzLW9uZS1xdWFydGVyLC5jb2x1bW4uaXMtb25lLXF1YXJ0ZXItdGFibGV0e2ZsZXg6bm9uZTt3aWR0aDoyNSV9LmNvbHVtbi5pcy1vbmUtZmlmdGgsLmNvbHVtbi5pcy1vbmUtZmlmdGgtdGFibGV0e2ZsZXg6bm9uZTt3aWR0aDoyMCV9LmNvbHVtbi5pcy10d28tZmlmdGhzLC5jb2x1bW4uaXMtdHdvLWZpZnRocy10YWJsZXR7ZmxleDpub25lO3dpZHRoOjQwJX0uY29sdW1uLmlzLXRocmVlLWZpZnRocywuY29sdW1uLmlzLXRocmVlLWZpZnRocy10YWJsZXR7ZmxleDpub25lO3dpZHRoOjYwJX0uY29sdW1uLmlzLWZvdXItZmlmdGhzLC5jb2x1bW4uaXMtZm91ci1maWZ0aHMtdGFibGV0e2ZsZXg6bm9uZTt3aWR0aDo4MCV9LmNvbHVtbi5pcy1vZmZzZXQtdGhyZWUtcXVhcnRlcnMsLmNvbHVtbi5pcy1vZmZzZXQtdGhyZWUtcXVhcnRlcnMtdGFibGV0e21hcmdpbi1sZWZ0Ojc1JX0uY29sdW1uLmlzLW9mZnNldC10d28tdGhpcmRzLC5jb2x1bW4uaXMtb2Zmc2V0LXR3by10aGlyZHMtdGFibGV0e21hcmdpbi1sZWZ0OjY2LjY2NjYlfS5jb2x1bW4uaXMtb2Zmc2V0LWhhbGYsLmNvbHVtbi5pcy1vZmZzZXQtaGFsZi10YWJsZXR7bWFyZ2luLWxlZnQ6NTAlfS5jb2x1bW4uaXMtb2Zmc2V0LW9uZS10aGlyZCwuY29sdW1uLmlzLW9mZnNldC1vbmUtdGhpcmQtdGFibGV0e21hcmdpbi1sZWZ0OjMzLjMzMzMlfS5jb2x1bW4uaXMtb2Zmc2V0LW9uZS1xdWFydGVyLC5jb2x1bW4uaXMtb2Zmc2V0LW9uZS1xdWFydGVyLXRhYmxldHttYXJnaW4tbGVmdDoyNSV9LmNvbHVtbi5pcy1vZmZzZXQtb25lLWZpZnRoLC5jb2x1bW4uaXMtb2Zmc2V0LW9uZS1maWZ0aC10YWJsZXR7bWFyZ2luLWxlZnQ6MjAlfS5jb2x1bW4uaXMtb2Zmc2V0LXR3by1maWZ0aHMsLmNvbHVtbi5pcy1vZmZzZXQtdHdvLWZpZnRocy10YWJsZXR7bWFyZ2luLWxlZnQ6NDAlfS5jb2x1bW4uaXMtb2Zmc2V0LXRocmVlLWZpZnRocywuY29sdW1uLmlzLW9mZnNldC10aHJlZS1maWZ0aHMtdGFibGV0e21hcmdpbi1sZWZ0OjYwJX0uY29sdW1uLmlzLW9mZnNldC1mb3VyLWZpZnRocywuY29sdW1uLmlzLW9mZnNldC1mb3VyLWZpZnRocy10YWJsZXR7bWFyZ2luLWxlZnQ6ODAlfS5jb2x1bW4uaXMtMSwuY29sdW1uLmlzLTEtdGFibGV0e2ZsZXg6bm9uZTt3aWR0aDo4LjMzMzMzJX0uY29sdW1uLmlzLW9mZnNldC0xLC5jb2x1bW4uaXMtb2Zmc2V0LTEtdGFibGV0e21hcmdpbi1sZWZ0OjguMzMzMzMlfS5jb2x1bW4uaXMtMiwuY29sdW1uLmlzLTItdGFibGV0e2ZsZXg6bm9uZTt3aWR0aDoxNi42NjY2NyV9LmNvbHVtbi5pcy1vZmZzZXQtMiwuY29sdW1uLmlzLW9mZnNldC0yLXRhYmxldHttYXJnaW4tbGVmdDoxNi42NjY2NyV9LmNvbHVtbi5pcy0zLC5jb2x1bW4uaXMtMy10YWJsZXR7ZmxleDpub25lO3dpZHRoOjI1JX0uY29sdW1uLmlzLW9mZnNldC0zLC5jb2x1bW4uaXMtb2Zmc2V0LTMtdGFibGV0e21hcmdpbi1sZWZ0OjI1JX0uY29sdW1uLmlzLTQsLmNvbHVtbi5pcy00LXRhYmxldHtmbGV4Om5vbmU7d2lkdGg6MzMuMzMzMzMlfS5jb2x1bW4uaXMtb2Zmc2V0LTQsLmNvbHVtbi5pcy1vZmZzZXQtNC10YWJsZXR7bWFyZ2luLWxlZnQ6MzMuMzMzMzMlfS5jb2x1bW4uaXMtNSwuY29sdW1uLmlzLTUtdGFibGV0e2ZsZXg6bm9uZTt3aWR0aDo0MS42NjY2NyV9LmNvbHVtbi5pcy1vZmZzZXQtNSwuY29sdW1uLmlzLW9mZnNldC01LXRhYmxldHttYXJnaW4tbGVmdDo0MS42NjY2NyV9LmNvbHVtbi5pcy02LC5jb2x1bW4uaXMtNi10YWJsZXR7ZmxleDpub25lO3dpZHRoOjUwJX0uY29sdW1uLmlzLW9mZnNldC02LC5jb2x1bW4uaXMtb2Zmc2V0LTYtdGFibGV0e21hcmdpbi1sZWZ0OjUwJX0uY29sdW1uLmlzLTcsLmNvbHVtbi5pcy03LXRhYmxldHtmbGV4Om5vbmU7d2lkdGg6NTguMzMzMzMlfS5jb2x1bW4uaXMtb2Zmc2V0LTcsLmNvbHVtbi5pcy1vZmZzZXQtNy10YWJsZXR7bWFyZ2luLWxlZnQ6NTguMzMzMzMlfS5jb2x1bW4uaXMtOCwuY29sdW1uLmlzLTgtdGFibGV0e2ZsZXg6bm9uZTt3aWR0aDo2Ni42NjY2NyV9LmNvbHVtbi5pcy1vZmZzZXQtOCwuY29sdW1uLmlzLW9mZnNldC04LXRhYmxldHttYXJnaW4tbGVmdDo2Ni42NjY2NyV9LmNvbHVtbi5pcy05LC5jb2x1bW4uaXMtOS10YWJsZXR7ZmxleDpub25lO3dpZHRoOjc1JX0uY29sdW1uLmlzLW9mZnNldC05LC5jb2x1bW4uaXMtb2Zmc2V0LTktdGFibGV0e21hcmdpbi1sZWZ0Ojc1JX0uY29sdW1uLmlzLTEwLC5jb2x1bW4uaXMtMTAtdGFibGV0e2ZsZXg6bm9uZTt3aWR0aDo4My4zMzMzMyV9LmNvbHVtbi5pcy1vZmZzZXQtMTAsLmNvbHVtbi5pcy1vZmZzZXQtMTAtdGFibGV0e21hcmdpbi1sZWZ0OjgzLjMzMzMzJX0uY29sdW1uLmlzLTExLC5jb2x1bW4uaXMtMTEtdGFibGV0e2ZsZXg6bm9uZTt3aWR0aDo5MS42NjY2NyV9LmNvbHVtbi5pcy1vZmZzZXQtMTEsLmNvbHVtbi5pcy1vZmZzZXQtMTEtdGFibGV0e21hcmdpbi1sZWZ0OjkxLjY2NjY3JX0uY29sdW1uLmlzLTEyLC5jb2x1bW4uaXMtMTItdGFibGV0e2ZsZXg6bm9uZTt3aWR0aDoxMDAlfS5jb2x1bW4uaXMtb2Zmc2V0LTEyLC5jb2x1bW4uaXMtb2Zmc2V0LTEyLXRhYmxldHttYXJnaW4tbGVmdDoxMDAlfX1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEwODdweCl7LmNvbHVtbi5pcy1uYXJyb3ctdG91Y2h7ZmxleDpub25lfS5jb2x1bW4uaXMtZnVsbC10b3VjaHtmbGV4Om5vbmU7d2lkdGg6MTAwJX0uY29sdW1uLmlzLXRocmVlLXF1YXJ0ZXJzLXRvdWNoe2ZsZXg6bm9uZTt3aWR0aDo3NSV9LmNvbHVtbi5pcy10d28tdGhpcmRzLXRvdWNoe2ZsZXg6bm9uZTt3aWR0aDo2Ni42NjY2JX0uY29sdW1uLmlzLWhhbGYtdG91Y2h7ZmxleDpub25lO3dpZHRoOjUwJX0uY29sdW1uLmlzLW9uZS10aGlyZC10b3VjaHtmbGV4Om5vbmU7d2lkdGg6MzMuMzMzMyV9LmNvbHVtbi5pcy1vbmUtcXVhcnRlci10b3VjaHtmbGV4Om5vbmU7d2lkdGg6MjUlfS5jb2x1bW4uaXMtb25lLWZpZnRoLXRvdWNoe2ZsZXg6bm9uZTt3aWR0aDoyMCV9LmNvbHVtbi5pcy10d28tZmlmdGhzLXRvdWNoe2ZsZXg6bm9uZTt3aWR0aDo0MCV9LmNvbHVtbi5pcy10aHJlZS1maWZ0aHMtdG91Y2h7ZmxleDpub25lO3dpZHRoOjYwJX0uY29sdW1uLmlzLWZvdXItZmlmdGhzLXRvdWNoe2ZsZXg6bm9uZTt3aWR0aDo4MCV9LmNvbHVtbi5pcy1vZmZzZXQtdGhyZWUtcXVhcnRlcnMtdG91Y2h7bWFyZ2luLWxlZnQ6NzUlfS5jb2x1bW4uaXMtb2Zmc2V0LXR3by10aGlyZHMtdG91Y2h7bWFyZ2luLWxlZnQ6NjYuNjY2NiV9LmNvbHVtbi5pcy1vZmZzZXQtaGFsZi10b3VjaHttYXJnaW4tbGVmdDo1MCV9LmNvbHVtbi5pcy1vZmZzZXQtb25lLXRoaXJkLXRvdWNoe21hcmdpbi1sZWZ0OjMzLjMzMzMlfS5jb2x1bW4uaXMtb2Zmc2V0LW9uZS1xdWFydGVyLXRvdWNoe21hcmdpbi1sZWZ0OjI1JX0uY29sdW1uLmlzLW9mZnNldC1vbmUtZmlmdGgtdG91Y2h7bWFyZ2luLWxlZnQ6MjAlfS5jb2x1bW4uaXMtb2Zmc2V0LXR3by1maWZ0aHMtdG91Y2h7bWFyZ2luLWxlZnQ6NDAlfS5jb2x1bW4uaXMtb2Zmc2V0LXRocmVlLWZpZnRocy10b3VjaHttYXJnaW4tbGVmdDo2MCV9LmNvbHVtbi5pcy1vZmZzZXQtZm91ci1maWZ0aHMtdG91Y2h7bWFyZ2luLWxlZnQ6ODAlfS5jb2x1bW4uaXMtMS10b3VjaHtmbGV4Om5vbmU7d2lkdGg6OC4zMzMzMyV9LmNvbHVtbi5pcy1vZmZzZXQtMS10b3VjaHttYXJnaW4tbGVmdDo4LjMzMzMzJX0uY29sdW1uLmlzLTItdG91Y2h7ZmxleDpub25lO3dpZHRoOjE2LjY2NjY3JX0uY29sdW1uLmlzLW9mZnNldC0yLXRvdWNoe21hcmdpbi1sZWZ0OjE2LjY2NjY3JX0uY29sdW1uLmlzLTMtdG91Y2h7ZmxleDpub25lO3dpZHRoOjI1JX0uY29sdW1uLmlzLW9mZnNldC0zLXRvdWNoe21hcmdpbi1sZWZ0OjI1JX0uY29sdW1uLmlzLTQtdG91Y2h7ZmxleDpub25lO3dpZHRoOjMzLjMzMzMzJX0uY29sdW1uLmlzLW9mZnNldC00LXRvdWNoe21hcmdpbi1sZWZ0OjMzLjMzMzMzJX0uY29sdW1uLmlzLTUtdG91Y2h7ZmxleDpub25lO3dpZHRoOjQxLjY2NjY3JX0uY29sdW1uLmlzLW9mZnNldC01LXRvdWNoe21hcmdpbi1sZWZ0OjQxLjY2NjY3JX0uY29sdW1uLmlzLTYtdG91Y2h7ZmxleDpub25lO3dpZHRoOjUwJX0uY29sdW1uLmlzLW9mZnNldC02LXRvdWNoe21hcmdpbi1sZWZ0OjUwJX0uY29sdW1uLmlzLTctdG91Y2h7ZmxleDpub25lO3dpZHRoOjU4LjMzMzMzJX0uY29sdW1uLmlzLW9mZnNldC03LXRvdWNoe21hcmdpbi1sZWZ0OjU4LjMzMzMzJX0uY29sdW1uLmlzLTgtdG91Y2h7ZmxleDpub25lO3dpZHRoOjY2LjY2NjY3JX0uY29sdW1uLmlzLW9mZnNldC04LXRvdWNoe21hcmdpbi1sZWZ0OjY2LjY2NjY3JX0uY29sdW1uLmlzLTktdG91Y2h7ZmxleDpub25lO3dpZHRoOjc1JX0uY29sdW1uLmlzLW9mZnNldC05LXRvdWNoe21hcmdpbi1sZWZ0Ojc1JX0uY29sdW1uLmlzLTEwLXRvdWNoe2ZsZXg6bm9uZTt3aWR0aDo4My4zMzMzMyV9LmNvbHVtbi5pcy1vZmZzZXQtMTAtdG91Y2h7bWFyZ2luLWxlZnQ6ODMuMzMzMzMlfS5jb2x1bW4uaXMtMTEtdG91Y2h7ZmxleDpub25lO3dpZHRoOjkxLjY2NjY3JX0uY29sdW1uLmlzLW9mZnNldC0xMS10b3VjaHttYXJnaW4tbGVmdDo5MS42NjY2NyV9LmNvbHVtbi5pcy0xMi10b3VjaHtmbGV4Om5vbmU7d2lkdGg6MTAwJX0uY29sdW1uLmlzLW9mZnNldC0xMi10b3VjaHttYXJnaW4tbGVmdDoxMDAlfX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwODhweCl7LmNvbHVtbi5pcy1uYXJyb3ctZGVza3RvcHtmbGV4Om5vbmV9LmNvbHVtbi5pcy1mdWxsLWRlc2t0b3B7ZmxleDpub25lO3dpZHRoOjEwMCV9LmNvbHVtbi5pcy10aHJlZS1xdWFydGVycy1kZXNrdG9we2ZsZXg6bm9uZTt3aWR0aDo3NSV9LmNvbHVtbi5pcy10d28tdGhpcmRzLWRlc2t0b3B7ZmxleDpub25lO3dpZHRoOjY2LjY2NjYlfS5jb2x1bW4uaXMtaGFsZi1kZXNrdG9we2ZsZXg6bm9uZTt3aWR0aDo1MCV9LmNvbHVtbi5pcy1vbmUtdGhpcmQtZGVza3RvcHtmbGV4Om5vbmU7d2lkdGg6MzMuMzMzMyV9LmNvbHVtbi5pcy1vbmUtcXVhcnRlci1kZXNrdG9we2ZsZXg6bm9uZTt3aWR0aDoyNSV9LmNvbHVtbi5pcy1vbmUtZmlmdGgtZGVza3RvcHtmbGV4Om5vbmU7d2lkdGg6MjAlfS5jb2x1bW4uaXMtdHdvLWZpZnRocy1kZXNrdG9we2ZsZXg6bm9uZTt3aWR0aDo0MCV9LmNvbHVtbi5pcy10aHJlZS1maWZ0aHMtZGVza3RvcHtmbGV4Om5vbmU7d2lkdGg6NjAlfS5jb2x1bW4uaXMtZm91ci1maWZ0aHMtZGVza3RvcHtmbGV4Om5vbmU7d2lkdGg6ODAlfS5jb2x1bW4uaXMtb2Zmc2V0LXRocmVlLXF1YXJ0ZXJzLWRlc2t0b3B7bWFyZ2luLWxlZnQ6NzUlfS5jb2x1bW4uaXMtb2Zmc2V0LXR3by10aGlyZHMtZGVza3RvcHttYXJnaW4tbGVmdDo2Ni42NjY2JX0uY29sdW1uLmlzLW9mZnNldC1oYWxmLWRlc2t0b3B7bWFyZ2luLWxlZnQ6NTAlfS5jb2x1bW4uaXMtb2Zmc2V0LW9uZS10aGlyZC1kZXNrdG9we21hcmdpbi1sZWZ0OjMzLjMzMzMlfS5jb2x1bW4uaXMtb2Zmc2V0LW9uZS1xdWFydGVyLWRlc2t0b3B7bWFyZ2luLWxlZnQ6MjUlfS5jb2x1bW4uaXMtb2Zmc2V0LW9uZS1maWZ0aC1kZXNrdG9we21hcmdpbi1sZWZ0OjIwJX0uY29sdW1uLmlzLW9mZnNldC10d28tZmlmdGhzLWRlc2t0b3B7bWFyZ2luLWxlZnQ6NDAlfS5jb2x1bW4uaXMtb2Zmc2V0LXRocmVlLWZpZnRocy1kZXNrdG9we21hcmdpbi1sZWZ0OjYwJX0uY29sdW1uLmlzLW9mZnNldC1mb3VyLWZpZnRocy1kZXNrdG9we21hcmdpbi1sZWZ0OjgwJX0uY29sdW1uLmlzLTEtZGVza3RvcHtmbGV4Om5vbmU7d2lkdGg6OC4zMzMzMyV9LmNvbHVtbi5pcy1vZmZzZXQtMS1kZXNrdG9we21hcmdpbi1sZWZ0OjguMzMzMzMlfS5jb2x1bW4uaXMtMi1kZXNrdG9we2ZsZXg6bm9uZTt3aWR0aDoxNi42NjY2NyV9LmNvbHVtbi5pcy1vZmZzZXQtMi1kZXNrdG9we21hcmdpbi1sZWZ0OjE2LjY2NjY3JX0uY29sdW1uLmlzLTMtZGVza3RvcHtmbGV4Om5vbmU7d2lkdGg6MjUlfS5jb2x1bW4uaXMtb2Zmc2V0LTMtZGVza3RvcHttYXJnaW4tbGVmdDoyNSV9LmNvbHVtbi5pcy00LWRlc2t0b3B7ZmxleDpub25lO3dpZHRoOjMzLjMzMzMzJX0uY29sdW1uLmlzLW9mZnNldC00LWRlc2t0b3B7bWFyZ2luLWxlZnQ6MzMuMzMzMzMlfS5jb2x1bW4uaXMtNS1kZXNrdG9we2ZsZXg6bm9uZTt3aWR0aDo0MS42NjY2NyV9LmNvbHVtbi5pcy1vZmZzZXQtNS1kZXNrdG9we21hcmdpbi1sZWZ0OjQxLjY2NjY3JX0uY29sdW1uLmlzLTYtZGVza3RvcHtmbGV4Om5vbmU7d2lkdGg6NTAlfS5jb2x1bW4uaXMtb2Zmc2V0LTYtZGVza3RvcHttYXJnaW4tbGVmdDo1MCV9LmNvbHVtbi5pcy03LWRlc2t0b3B7ZmxleDpub25lO3dpZHRoOjU4LjMzMzMzJX0uY29sdW1uLmlzLW9mZnNldC03LWRlc2t0b3B7bWFyZ2luLWxlZnQ6NTguMzMzMzMlfS5jb2x1bW4uaXMtOC1kZXNrdG9we2ZsZXg6bm9uZTt3aWR0aDo2Ni42NjY2NyV9LmNvbHVtbi5pcy1vZmZzZXQtOC1kZXNrdG9we21hcmdpbi1sZWZ0OjY2LjY2NjY3JX0uY29sdW1uLmlzLTktZGVza3RvcHtmbGV4Om5vbmU7d2lkdGg6NzUlfS5jb2x1bW4uaXMtb2Zmc2V0LTktZGVza3RvcHttYXJnaW4tbGVmdDo3NSV9LmNvbHVtbi5pcy0xMC1kZXNrdG9we2ZsZXg6bm9uZTt3aWR0aDo4My4zMzMzMyV9LmNvbHVtbi5pcy1vZmZzZXQtMTAtZGVza3RvcHttYXJnaW4tbGVmdDo4My4zMzMzMyV9LmNvbHVtbi5pcy0xMS1kZXNrdG9we2ZsZXg6bm9uZTt3aWR0aDo5MS42NjY2NyV9LmNvbHVtbi5pcy1vZmZzZXQtMTEtZGVza3RvcHttYXJnaW4tbGVmdDo5MS42NjY2NyV9LmNvbHVtbi5pcy0xMi1kZXNrdG9we2ZsZXg6bm9uZTt3aWR0aDoxMDAlfS5jb2x1bW4uaXMtb2Zmc2V0LTEyLWRlc2t0b3B7bWFyZ2luLWxlZnQ6MTAwJX19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMjgwcHgpey5jb2x1bW4uaXMtbmFycm93LXdpZGVzY3JlZW57ZmxleDpub25lfS5jb2x1bW4uaXMtZnVsbC13aWRlc2NyZWVue2ZsZXg6bm9uZTt3aWR0aDoxMDAlfS5jb2x1bW4uaXMtdGhyZWUtcXVhcnRlcnMtd2lkZXNjcmVlbntmbGV4Om5vbmU7d2lkdGg6NzUlfS5jb2x1bW4uaXMtdHdvLXRoaXJkcy13aWRlc2NyZWVue2ZsZXg6bm9uZTt3aWR0aDo2Ni42NjY2JX0uY29sdW1uLmlzLWhhbGYtd2lkZXNjcmVlbntmbGV4Om5vbmU7d2lkdGg6NTAlfS5jb2x1bW4uaXMtb25lLXRoaXJkLXdpZGVzY3JlZW57ZmxleDpub25lO3dpZHRoOjMzLjMzMzMlfS5jb2x1bW4uaXMtb25lLXF1YXJ0ZXItd2lkZXNjcmVlbntmbGV4Om5vbmU7d2lkdGg6MjUlfS5jb2x1bW4uaXMtb25lLWZpZnRoLXdpZGVzY3JlZW57ZmxleDpub25lO3dpZHRoOjIwJX0uY29sdW1uLmlzLXR3by1maWZ0aHMtd2lkZXNjcmVlbntmbGV4Om5vbmU7d2lkdGg6NDAlfS5jb2x1bW4uaXMtdGhyZWUtZmlmdGhzLXdpZGVzY3JlZW57ZmxleDpub25lO3dpZHRoOjYwJX0uY29sdW1uLmlzLWZvdXItZmlmdGhzLXdpZGVzY3JlZW57ZmxleDpub25lO3dpZHRoOjgwJX0uY29sdW1uLmlzLW9mZnNldC10aHJlZS1xdWFydGVycy13aWRlc2NyZWVue21hcmdpbi1sZWZ0Ojc1JX0uY29sdW1uLmlzLW9mZnNldC10d28tdGhpcmRzLXdpZGVzY3JlZW57bWFyZ2luLWxlZnQ6NjYuNjY2NiV9LmNvbHVtbi5pcy1vZmZzZXQtaGFsZi13aWRlc2NyZWVue21hcmdpbi1sZWZ0OjUwJX0uY29sdW1uLmlzLW9mZnNldC1vbmUtdGhpcmQtd2lkZXNjcmVlbnttYXJnaW4tbGVmdDozMy4zMzMzJX0uY29sdW1uLmlzLW9mZnNldC1vbmUtcXVhcnRlci13aWRlc2NyZWVue21hcmdpbi1sZWZ0OjI1JX0uY29sdW1uLmlzLW9mZnNldC1vbmUtZmlmdGgtd2lkZXNjcmVlbnttYXJnaW4tbGVmdDoyMCV9LmNvbHVtbi5pcy1vZmZzZXQtdHdvLWZpZnRocy13aWRlc2NyZWVue21hcmdpbi1sZWZ0OjQwJX0uY29sdW1uLmlzLW9mZnNldC10aHJlZS1maWZ0aHMtd2lkZXNjcmVlbnttYXJnaW4tbGVmdDo2MCV9LmNvbHVtbi5pcy1vZmZzZXQtZm91ci1maWZ0aHMtd2lkZXNjcmVlbnttYXJnaW4tbGVmdDo4MCV9LmNvbHVtbi5pcy0xLXdpZGVzY3JlZW57ZmxleDpub25lO3dpZHRoOjguMzMzMzMlfS5jb2x1bW4uaXMtb2Zmc2V0LTEtd2lkZXNjcmVlbnttYXJnaW4tbGVmdDo4LjMzMzMzJX0uY29sdW1uLmlzLTItd2lkZXNjcmVlbntmbGV4Om5vbmU7d2lkdGg6MTYuNjY2NjclfS5jb2x1bW4uaXMtb2Zmc2V0LTItd2lkZXNjcmVlbnttYXJnaW4tbGVmdDoxNi42NjY2NyV9LmNvbHVtbi5pcy0zLXdpZGVzY3JlZW57ZmxleDpub25lO3dpZHRoOjI1JX0uY29sdW1uLmlzLW9mZnNldC0zLXdpZGVzY3JlZW57bWFyZ2luLWxlZnQ6MjUlfS5jb2x1bW4uaXMtNC13aWRlc2NyZWVue2ZsZXg6bm9uZTt3aWR0aDozMy4zMzMzMyV9LmNvbHVtbi5pcy1vZmZzZXQtNC13aWRlc2NyZWVue21hcmdpbi1sZWZ0OjMzLjMzMzMzJX0uY29sdW1uLmlzLTUtd2lkZXNjcmVlbntmbGV4Om5vbmU7d2lkdGg6NDEuNjY2NjclfS5jb2x1bW4uaXMtb2Zmc2V0LTUtd2lkZXNjcmVlbnttYXJnaW4tbGVmdDo0MS42NjY2NyV9LmNvbHVtbi5pcy02LXdpZGVzY3JlZW57ZmxleDpub25lO3dpZHRoOjUwJX0uY29sdW1uLmlzLW9mZnNldC02LXdpZGVzY3JlZW57bWFyZ2luLWxlZnQ6NTAlfS5jb2x1bW4uaXMtNy13aWRlc2NyZWVue2ZsZXg6bm9uZTt3aWR0aDo1OC4zMzMzMyV9LmNvbHVtbi5pcy1vZmZzZXQtNy13aWRlc2NyZWVue21hcmdpbi1sZWZ0OjU4LjMzMzMzJX0uY29sdW1uLmlzLTgtd2lkZXNjcmVlbntmbGV4Om5vbmU7d2lkdGg6NjYuNjY2NjclfS5jb2x1bW4uaXMtb2Zmc2V0LTgtd2lkZXNjcmVlbnttYXJnaW4tbGVmdDo2Ni42NjY2NyV9LmNvbHVtbi5pcy05LXdpZGVzY3JlZW57ZmxleDpub25lO3dpZHRoOjc1JX0uY29sdW1uLmlzLW9mZnNldC05LXdpZGVzY3JlZW57bWFyZ2luLWxlZnQ6NzUlfS5jb2x1bW4uaXMtMTAtd2lkZXNjcmVlbntmbGV4Om5vbmU7d2lkdGg6ODMuMzMzMzMlfS5jb2x1bW4uaXMtb2Zmc2V0LTEwLXdpZGVzY3JlZW57bWFyZ2luLWxlZnQ6ODMuMzMzMzMlfS5jb2x1bW4uaXMtMTEtd2lkZXNjcmVlbntmbGV4Om5vbmU7d2lkdGg6OTEuNjY2NjclfS5jb2x1bW4uaXMtb2Zmc2V0LTExLXdpZGVzY3JlZW57bWFyZ2luLWxlZnQ6OTEuNjY2NjclfS5jb2x1bW4uaXMtMTItd2lkZXNjcmVlbntmbGV4Om5vbmU7d2lkdGg6MTAwJX0uY29sdW1uLmlzLW9mZnNldC0xMi13aWRlc2NyZWVue21hcmdpbi1sZWZ0OjEwMCV9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTQ3MnB4KXsuY29sdW1uLmlzLW5hcnJvdy1mdWxsaGR7ZmxleDpub25lfS5jb2x1bW4uaXMtZnVsbC1mdWxsaGR7ZmxleDpub25lO3dpZHRoOjEwMCV9LmNvbHVtbi5pcy10aHJlZS1xdWFydGVycy1mdWxsaGR7ZmxleDpub25lO3dpZHRoOjc1JX0uY29sdW1uLmlzLXR3by10aGlyZHMtZnVsbGhke2ZsZXg6bm9uZTt3aWR0aDo2Ni42NjY2JX0uY29sdW1uLmlzLWhhbGYtZnVsbGhke2ZsZXg6bm9uZTt3aWR0aDo1MCV9LmNvbHVtbi5pcy1vbmUtdGhpcmQtZnVsbGhke2ZsZXg6bm9uZTt3aWR0aDozMy4zMzMzJX0uY29sdW1uLmlzLW9uZS1xdWFydGVyLWZ1bGxoZHtmbGV4Om5vbmU7d2lkdGg6MjUlfS5jb2x1bW4uaXMtb25lLWZpZnRoLWZ1bGxoZHtmbGV4Om5vbmU7d2lkdGg6MjAlfS5jb2x1bW4uaXMtdHdvLWZpZnRocy1mdWxsaGR7ZmxleDpub25lO3dpZHRoOjQwJX0uY29sdW1uLmlzLXRocmVlLWZpZnRocy1mdWxsaGR7ZmxleDpub25lO3dpZHRoOjYwJX0uY29sdW1uLmlzLWZvdXItZmlmdGhzLWZ1bGxoZHtmbGV4Om5vbmU7d2lkdGg6ODAlfS5jb2x1bW4uaXMtb2Zmc2V0LXRocmVlLXF1YXJ0ZXJzLWZ1bGxoZHttYXJnaW4tbGVmdDo3NSV9LmNvbHVtbi5pcy1vZmZzZXQtdHdvLXRoaXJkcy1mdWxsaGR7bWFyZ2luLWxlZnQ6NjYuNjY2NiV9LmNvbHVtbi5pcy1vZmZzZXQtaGFsZi1mdWxsaGR7bWFyZ2luLWxlZnQ6NTAlfS5jb2x1bW4uaXMtb2Zmc2V0LW9uZS10aGlyZC1mdWxsaGR7bWFyZ2luLWxlZnQ6MzMuMzMzMyV9LmNvbHVtbi5pcy1vZmZzZXQtb25lLXF1YXJ0ZXItZnVsbGhke21hcmdpbi1sZWZ0OjI1JX0uY29sdW1uLmlzLW9mZnNldC1vbmUtZmlmdGgtZnVsbGhke21hcmdpbi1sZWZ0OjIwJX0uY29sdW1uLmlzLW9mZnNldC10d28tZmlmdGhzLWZ1bGxoZHttYXJnaW4tbGVmdDo0MCV9LmNvbHVtbi5pcy1vZmZzZXQtdGhyZWUtZmlmdGhzLWZ1bGxoZHttYXJnaW4tbGVmdDo2MCV9LmNvbHVtbi5pcy1vZmZzZXQtZm91ci1maWZ0aHMtZnVsbGhke21hcmdpbi1sZWZ0OjgwJX0uY29sdW1uLmlzLTEtZnVsbGhke2ZsZXg6bm9uZTt3aWR0aDo4LjMzMzMzJX0uY29sdW1uLmlzLW9mZnNldC0xLWZ1bGxoZHttYXJnaW4tbGVmdDo4LjMzMzMzJX0uY29sdW1uLmlzLTItZnVsbGhke2ZsZXg6bm9uZTt3aWR0aDoxNi42NjY2NyV9LmNvbHVtbi5pcy1vZmZzZXQtMi1mdWxsaGR7bWFyZ2luLWxlZnQ6MTYuNjY2NjclfS5jb2x1bW4uaXMtMy1mdWxsaGR7ZmxleDpub25lO3dpZHRoOjI1JX0uY29sdW1uLmlzLW9mZnNldC0zLWZ1bGxoZHttYXJnaW4tbGVmdDoyNSV9LmNvbHVtbi5pcy00LWZ1bGxoZHtmbGV4Om5vbmU7d2lkdGg6MzMuMzMzMzMlfS5jb2x1bW4uaXMtb2Zmc2V0LTQtZnVsbGhke21hcmdpbi1sZWZ0OjMzLjMzMzMzJX0uY29sdW1uLmlzLTUtZnVsbGhke2ZsZXg6bm9uZTt3aWR0aDo0MS42NjY2NyV9LmNvbHVtbi5pcy1vZmZzZXQtNS1mdWxsaGR7bWFyZ2luLWxlZnQ6NDEuNjY2NjclfS5jb2x1bW4uaXMtNi1mdWxsaGR7ZmxleDpub25lO3dpZHRoOjUwJX0uY29sdW1uLmlzLW9mZnNldC02LWZ1bGxoZHttYXJnaW4tbGVmdDo1MCV9LmNvbHVtbi5pcy03LWZ1bGxoZHtmbGV4Om5vbmU7d2lkdGg6NTguMzMzMzMlfS5jb2x1bW4uaXMtb2Zmc2V0LTctZnVsbGhke21hcmdpbi1sZWZ0OjU4LjMzMzMzJX0uY29sdW1uLmlzLTgtZnVsbGhke2ZsZXg6bm9uZTt3aWR0aDo2Ni42NjY2NyV9LmNvbHVtbi5pcy1vZmZzZXQtOC1mdWxsaGR7bWFyZ2luLWxlZnQ6NjYuNjY2NjclfS5jb2x1bW4uaXMtOS1mdWxsaGR7ZmxleDpub25lO3dpZHRoOjc1JX0uY29sdW1uLmlzLW9mZnNldC05LWZ1bGxoZHttYXJnaW4tbGVmdDo3NSV9LmNvbHVtbi5pcy0xMC1mdWxsaGR7ZmxleDpub25lO3dpZHRoOjgzLjMzMzMzJX0uY29sdW1uLmlzLW9mZnNldC0xMC1mdWxsaGR7bWFyZ2luLWxlZnQ6ODMuMzMzMzMlfS5jb2x1bW4uaXMtMTEtZnVsbGhke2ZsZXg6bm9uZTt3aWR0aDo5MS42NjY2NyV9LmNvbHVtbi5pcy1vZmZzZXQtMTEtZnVsbGhke21hcmdpbi1sZWZ0OjkxLjY2NjY3JX0uY29sdW1uLmlzLTEyLWZ1bGxoZHtmbGV4Om5vbmU7d2lkdGg6MTAwJX0uY29sdW1uLmlzLW9mZnNldC0xMi1mdWxsaGR7bWFyZ2luLWxlZnQ6MTAwJX19LmNvbHVtbnN7bWFyZ2luLWxlZnQ6LS43NXJlbTttYXJnaW4tcmlnaHQ6LS43NXJlbTttYXJnaW4tdG9wOi0uNzVyZW19LmNvbHVtbnM6bGFzdC1jaGlsZHttYXJnaW4tYm90dG9tOi0uNzVyZW19LmNvbHVtbnM6bm90KDpsYXN0LWNoaWxkKXttYXJnaW4tYm90dG9tOmNhbGMoMS41cmVtIC0gLjc1cmVtKX0uY29sdW1ucy5pcy1jZW50ZXJlZHtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5jb2x1bW5zLmlzLWdhcGxlc3N7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjB9LmNvbHVtbnMuaXMtZ2FwbGVzcz4uY29sdW1ue21hcmdpbjowO3BhZGRpbmc6MCFpbXBvcnRhbnR9LmNvbHVtbnMuaXMtZ2FwbGVzczpub3QoOmxhc3QtY2hpbGQpe21hcmdpbi1ib3R0b206MS41cmVtfS5jb2x1bW5zLmlzLWdhcGxlc3M6bGFzdC1jaGlsZHttYXJnaW4tYm90dG9tOjB9LmNvbHVtbnMuaXMtbW9iaWxle2Rpc3BsYXk6ZmxleH0uY29sdW1ucy5pcy1tdWx0aWxpbmV7ZmxleC13cmFwOndyYXB9LmNvbHVtbnMuaXMtdmNlbnRlcmVke2FsaWduLWl0ZW1zOmNlbnRlcn1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OXB4KSxwcmludHsuY29sdW1uczpub3QoLmlzLWRlc2t0b3Ape2Rpc3BsYXk6ZmxleH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDg4cHgpey5jb2x1bW5zLmlzLWRlc2t0b3B7ZGlzcGxheTpmbGV4fX0uY29sdW1ucy5pcy12YXJpYWJsZXstLWNvbHVtbkdhcDowLjc1cmVtO21hcmdpbi1sZWZ0OmNhbGMoLTEgKiB2YXIoLS1jb2x1bW5HYXApKTttYXJnaW4tcmlnaHQ6Y2FsYygtMSAqIHZhcigtLWNvbHVtbkdhcCkpfS5jb2x1bW5zLmlzLXZhcmlhYmxlIC5jb2x1bW57cGFkZGluZy1sZWZ0OnZhcigtLWNvbHVtbkdhcCk7cGFkZGluZy1yaWdodDp2YXIoLS1jb2x1bW5HYXApfS5jb2x1bW5zLmlzLXZhcmlhYmxlLmlzLTB7LS1jb2x1bW5HYXA6MHJlbX1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXsuY29sdW1ucy5pcy12YXJpYWJsZS5pcy0wLW1vYmlsZXstLWNvbHVtbkdhcDowcmVtfX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OXB4KSxwcmludHsuY29sdW1ucy5pcy12YXJpYWJsZS5pcy0wLXRhYmxldHstLWNvbHVtbkdhcDowcmVtfX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OXB4KSBhbmQgKG1heC13aWR0aDoxMDg3cHgpey5jb2x1bW5zLmlzLXZhcmlhYmxlLmlzLTAtdGFibGV0LW9ubHl7LS1jb2x1bW5HYXA6MHJlbX19QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDg3cHgpey5jb2x1bW5zLmlzLXZhcmlhYmxlLmlzLTAtdG91Y2h7LS1jb2x1bW5HYXA6MHJlbX19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDg4cHgpey5jb2x1bW5zLmlzLXZhcmlhYmxlLmlzLTAtZGVza3RvcHstLWNvbHVtbkdhcDowcmVtfX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwODhweCkgYW5kIChtYXgtd2lkdGg6MTI3OXB4KXsuY29sdW1ucy5pcy12YXJpYWJsZS5pcy0wLWRlc2t0b3Atb25seXstLWNvbHVtbkdhcDowcmVtfX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEyODBweCl7LmNvbHVtbnMuaXMtdmFyaWFibGUuaXMtMC13aWRlc2NyZWVuey0tY29sdW1uR2FwOjByZW19fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTI4MHB4KSBhbmQgKG1heC13aWR0aDoxNDcxcHgpey5jb2x1bW5zLmlzLXZhcmlhYmxlLmlzLTAtd2lkZXNjcmVlbi1vbmx5ey0tY29sdW1uR2FwOjByZW19fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTQ3MnB4KXsuY29sdW1ucy5pcy12YXJpYWJsZS5pcy0wLWZ1bGxoZHstLWNvbHVtbkdhcDowcmVtfX0uY29sdW1ucy5pcy12YXJpYWJsZS5pcy0xey0tY29sdW1uR2FwOjAuMjVyZW19QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCl7LmNvbHVtbnMuaXMtdmFyaWFibGUuaXMtMS1tb2JpbGV7LS1jb2x1bW5HYXA6MC4yNXJlbX19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjlweCkscHJpbnR7LmNvbHVtbnMuaXMtdmFyaWFibGUuaXMtMS10YWJsZXR7LS1jb2x1bW5HYXA6MC4yNXJlbX19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjlweCkgYW5kIChtYXgtd2lkdGg6MTA4N3B4KXsuY29sdW1ucy5pcy12YXJpYWJsZS5pcy0xLXRhYmxldC1vbmx5ey0tY29sdW1uR2FwOjAuMjVyZW19fUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTA4N3B4KXsuY29sdW1ucy5pcy12YXJpYWJsZS5pcy0xLXRvdWNoey0tY29sdW1uR2FwOjAuMjVyZW19fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTA4OHB4KXsuY29sdW1ucy5pcy12YXJpYWJsZS5pcy0xLWRlc2t0b3B7LS1jb2x1bW5HYXA6MC4yNXJlbX19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDg4cHgpIGFuZCAobWF4LXdpZHRoOjEyNzlweCl7LmNvbHVtbnMuaXMtdmFyaWFibGUuaXMtMS1kZXNrdG9wLW9ubHl7LS1jb2x1bW5HYXA6MC4yNXJlbX19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMjgwcHgpey5jb2x1bW5zLmlzLXZhcmlhYmxlLmlzLTEtd2lkZXNjcmVlbnstLWNvbHVtbkdhcDowLjI1cmVtfX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEyODBweCkgYW5kIChtYXgtd2lkdGg6MTQ3MXB4KXsuY29sdW1ucy5pcy12YXJpYWJsZS5pcy0xLXdpZGVzY3JlZW4tb25seXstLWNvbHVtbkdhcDowLjI1cmVtfX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjE0NzJweCl7LmNvbHVtbnMuaXMtdmFyaWFibGUuaXMtMS1mdWxsaGR7LS1jb2x1bW5HYXA6MC4yNXJlbX19LmNvbHVtbnMuaXMtdmFyaWFibGUuaXMtMnstLWNvbHVtbkdhcDowLjVyZW19QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCl7LmNvbHVtbnMuaXMtdmFyaWFibGUuaXMtMi1tb2JpbGV7LS1jb2x1bW5HYXA6MC41cmVtfX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OXB4KSxwcmludHsuY29sdW1ucy5pcy12YXJpYWJsZS5pcy0yLXRhYmxldHstLWNvbHVtbkdhcDowLjVyZW19fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY5cHgpIGFuZCAobWF4LXdpZHRoOjEwODdweCl7LmNvbHVtbnMuaXMtdmFyaWFibGUuaXMtMi10YWJsZXQtb25seXstLWNvbHVtbkdhcDowLjVyZW19fUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTA4N3B4KXsuY29sdW1ucy5pcy12YXJpYWJsZS5pcy0yLXRvdWNoey0tY29sdW1uR2FwOjAuNXJlbX19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDg4cHgpey5jb2x1bW5zLmlzLXZhcmlhYmxlLmlzLTItZGVza3RvcHstLWNvbHVtbkdhcDowLjVyZW19fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTA4OHB4KSBhbmQgKG1heC13aWR0aDoxMjc5cHgpey5jb2x1bW5zLmlzLXZhcmlhYmxlLmlzLTItZGVza3RvcC1vbmx5ey0tY29sdW1uR2FwOjAuNXJlbX19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMjgwcHgpey5jb2x1bW5zLmlzLXZhcmlhYmxlLmlzLTItd2lkZXNjcmVlbnstLWNvbHVtbkdhcDowLjVyZW19fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTI4MHB4KSBhbmQgKG1heC13aWR0aDoxNDcxcHgpey5jb2x1bW5zLmlzLXZhcmlhYmxlLmlzLTItd2lkZXNjcmVlbi1vbmx5ey0tY29sdW1uR2FwOjAuNXJlbX19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxNDcycHgpey5jb2x1bW5zLmlzLXZhcmlhYmxlLmlzLTItZnVsbGhkey0tY29sdW1uR2FwOjAuNXJlbX19LmNvbHVtbnMuaXMtdmFyaWFibGUuaXMtM3stLWNvbHVtbkdhcDowLjc1cmVtfUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpey5jb2x1bW5zLmlzLXZhcmlhYmxlLmlzLTMtbW9iaWxley0tY29sdW1uR2FwOjAuNzVyZW19fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY5cHgpLHByaW50ey5jb2x1bW5zLmlzLXZhcmlhYmxlLmlzLTMtdGFibGV0ey0tY29sdW1uR2FwOjAuNzVyZW19fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY5cHgpIGFuZCAobWF4LXdpZHRoOjEwODdweCl7LmNvbHVtbnMuaXMtdmFyaWFibGUuaXMtMy10YWJsZXQtb25seXstLWNvbHVtbkdhcDowLjc1cmVtfX1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEwODdweCl7LmNvbHVtbnMuaXMtdmFyaWFibGUuaXMtMy10b3VjaHstLWNvbHVtbkdhcDowLjc1cmVtfX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwODhweCl7LmNvbHVtbnMuaXMtdmFyaWFibGUuaXMtMy1kZXNrdG9wey0tY29sdW1uR2FwOjAuNzVyZW19fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTA4OHB4KSBhbmQgKG1heC13aWR0aDoxMjc5cHgpey5jb2x1bW5zLmlzLXZhcmlhYmxlLmlzLTMtZGVza3RvcC1vbmx5ey0tY29sdW1uR2FwOjAuNzVyZW19fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTI4MHB4KXsuY29sdW1ucy5pcy12YXJpYWJsZS5pcy0zLXdpZGVzY3JlZW57LS1jb2x1bW5HYXA6MC43NXJlbX19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMjgwcHgpIGFuZCAobWF4LXdpZHRoOjE0NzFweCl7LmNvbHVtbnMuaXMtdmFyaWFibGUuaXMtMy13aWRlc2NyZWVuLW9ubHl7LS1jb2x1bW5HYXA6MC43NXJlbX19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxNDcycHgpey5jb2x1bW5zLmlzLXZhcmlhYmxlLmlzLTMtZnVsbGhkey0tY29sdW1uR2FwOjAuNzVyZW19fS5jb2x1bW5zLmlzLXZhcmlhYmxlLmlzLTR7LS1jb2x1bW5HYXA6MXJlbX1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXsuY29sdW1ucy5pcy12YXJpYWJsZS5pcy00LW1vYmlsZXstLWNvbHVtbkdhcDoxcmVtfX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OXB4KSxwcmludHsuY29sdW1ucy5pcy12YXJpYWJsZS5pcy00LXRhYmxldHstLWNvbHVtbkdhcDoxcmVtfX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OXB4KSBhbmQgKG1heC13aWR0aDoxMDg3cHgpey5jb2x1bW5zLmlzLXZhcmlhYmxlLmlzLTQtdGFibGV0LW9ubHl7LS1jb2x1bW5HYXA6MXJlbX19QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDg3cHgpey5jb2x1bW5zLmlzLXZhcmlhYmxlLmlzLTQtdG91Y2h7LS1jb2x1bW5HYXA6MXJlbX19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDg4cHgpey5jb2x1bW5zLmlzLXZhcmlhYmxlLmlzLTQtZGVza3RvcHstLWNvbHVtbkdhcDoxcmVtfX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwODhweCkgYW5kIChtYXgtd2lkdGg6MTI3OXB4KXsuY29sdW1ucy5pcy12YXJpYWJsZS5pcy00LWRlc2t0b3Atb25seXstLWNvbHVtbkdhcDoxcmVtfX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEyODBweCl7LmNvbHVtbnMuaXMtdmFyaWFibGUuaXMtNC13aWRlc2NyZWVuey0tY29sdW1uR2FwOjFyZW19fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTI4MHB4KSBhbmQgKG1heC13aWR0aDoxNDcxcHgpey5jb2x1bW5zLmlzLXZhcmlhYmxlLmlzLTQtd2lkZXNjcmVlbi1vbmx5ey0tY29sdW1uR2FwOjFyZW19fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTQ3MnB4KXsuY29sdW1ucy5pcy12YXJpYWJsZS5pcy00LWZ1bGxoZHstLWNvbHVtbkdhcDoxcmVtfX0uY29sdW1ucy5pcy12YXJpYWJsZS5pcy01ey0tY29sdW1uR2FwOjEuMjVyZW19QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCl7LmNvbHVtbnMuaXMtdmFyaWFibGUuaXMtNS1tb2JpbGV7LS1jb2x1bW5HYXA6MS4yNXJlbX19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjlweCkscHJpbnR7LmNvbHVtbnMuaXMtdmFyaWFibGUuaXMtNS10YWJsZXR7LS1jb2x1bW5HYXA6MS4yNXJlbX19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjlweCkgYW5kIChtYXgtd2lkdGg6MTA4N3B4KXsuY29sdW1ucy5pcy12YXJpYWJsZS5pcy01LXRhYmxldC1vbmx5ey0tY29sdW1uR2FwOjEuMjVyZW19fUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTA4N3B4KXsuY29sdW1ucy5pcy12YXJpYWJsZS5pcy01LXRvdWNoey0tY29sdW1uR2FwOjEuMjVyZW19fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTA4OHB4KXsuY29sdW1ucy5pcy12YXJpYWJsZS5pcy01LWRlc2t0b3B7LS1jb2x1bW5HYXA6MS4yNXJlbX19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDg4cHgpIGFuZCAobWF4LXdpZHRoOjEyNzlweCl7LmNvbHVtbnMuaXMtdmFyaWFibGUuaXMtNS1kZXNrdG9wLW9ubHl7LS1jb2x1bW5HYXA6MS4yNXJlbX19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMjgwcHgpey5jb2x1bW5zLmlzLXZhcmlhYmxlLmlzLTUtd2lkZXNjcmVlbnstLWNvbHVtbkdhcDoxLjI1cmVtfX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEyODBweCkgYW5kIChtYXgtd2lkdGg6MTQ3MXB4KXsuY29sdW1ucy5pcy12YXJpYWJsZS5pcy01LXdpZGVzY3JlZW4tb25seXstLWNvbHVtbkdhcDoxLjI1cmVtfX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjE0NzJweCl7LmNvbHVtbnMuaXMtdmFyaWFibGUuaXMtNS1mdWxsaGR7LS1jb2x1bW5HYXA6MS4yNXJlbX19LmNvbHVtbnMuaXMtdmFyaWFibGUuaXMtNnstLWNvbHVtbkdhcDoxLjVyZW19QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCl7LmNvbHVtbnMuaXMtdmFyaWFibGUuaXMtNi1tb2JpbGV7LS1jb2x1bW5HYXA6MS41cmVtfX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OXB4KSxwcmludHsuY29sdW1ucy5pcy12YXJpYWJsZS5pcy02LXRhYmxldHstLWNvbHVtbkdhcDoxLjVyZW19fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY5cHgpIGFuZCAobWF4LXdpZHRoOjEwODdweCl7LmNvbHVtbnMuaXMtdmFyaWFibGUuaXMtNi10YWJsZXQtb25seXstLWNvbHVtbkdhcDoxLjVyZW19fUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTA4N3B4KXsuY29sdW1ucy5pcy12YXJpYWJsZS5pcy02LXRvdWNoey0tY29sdW1uR2FwOjEuNXJlbX19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDg4cHgpey5jb2x1bW5zLmlzLXZhcmlhYmxlLmlzLTYtZGVza3RvcHstLWNvbHVtbkdhcDoxLjVyZW19fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTA4OHB4KSBhbmQgKG1heC13aWR0aDoxMjc5cHgpey5jb2x1bW5zLmlzLXZhcmlhYmxlLmlzLTYtZGVza3RvcC1vbmx5ey0tY29sdW1uR2FwOjEuNXJlbX19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMjgwcHgpey5jb2x1bW5zLmlzLXZhcmlhYmxlLmlzLTYtd2lkZXNjcmVlbnstLWNvbHVtbkdhcDoxLjVyZW19fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTI4MHB4KSBhbmQgKG1heC13aWR0aDoxNDcxcHgpey5jb2x1bW5zLmlzLXZhcmlhYmxlLmlzLTYtd2lkZXNjcmVlbi1vbmx5ey0tY29sdW1uR2FwOjEuNXJlbX19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxNDcycHgpey5jb2x1bW5zLmlzLXZhcmlhYmxlLmlzLTYtZnVsbGhkey0tY29sdW1uR2FwOjEuNXJlbX19LmNvbHVtbnMuaXMtdmFyaWFibGUuaXMtN3stLWNvbHVtbkdhcDoxLjc1cmVtfUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpey5jb2x1bW5zLmlzLXZhcmlhYmxlLmlzLTctbW9iaWxley0tY29sdW1uR2FwOjEuNzVyZW19fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY5cHgpLHByaW50ey5jb2x1bW5zLmlzLXZhcmlhYmxlLmlzLTctdGFibGV0ey0tY29sdW1uR2FwOjEuNzVyZW19fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY5cHgpIGFuZCAobWF4LXdpZHRoOjEwODdweCl7LmNvbHVtbnMuaXMtdmFyaWFibGUuaXMtNy10YWJsZXQtb25seXstLWNvbHVtbkdhcDoxLjc1cmVtfX1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEwODdweCl7LmNvbHVtbnMuaXMtdmFyaWFibGUuaXMtNy10b3VjaHstLWNvbHVtbkdhcDoxLjc1cmVtfX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwODhweCl7LmNvbHVtbnMuaXMtdmFyaWFibGUuaXMtNy1kZXNrdG9wey0tY29sdW1uR2FwOjEuNzVyZW19fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTA4OHB4KSBhbmQgKG1heC13aWR0aDoxMjc5cHgpey5jb2x1bW5zLmlzLXZhcmlhYmxlLmlzLTctZGVza3RvcC1vbmx5ey0tY29sdW1uR2FwOjEuNzVyZW19fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTI4MHB4KXsuY29sdW1ucy5pcy12YXJpYWJsZS5pcy03LXdpZGVzY3JlZW57LS1jb2x1bW5HYXA6MS43NXJlbX19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMjgwcHgpIGFuZCAobWF4LXdpZHRoOjE0NzFweCl7LmNvbHVtbnMuaXMtdmFyaWFibGUuaXMtNy13aWRlc2NyZWVuLW9ubHl7LS1jb2x1bW5HYXA6MS43NXJlbX19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxNDcycHgpey5jb2x1bW5zLmlzLXZhcmlhYmxlLmlzLTctZnVsbGhkey0tY29sdW1uR2FwOjEuNzVyZW19fS5jb2x1bW5zLmlzLXZhcmlhYmxlLmlzLTh7LS1jb2x1bW5HYXA6MnJlbX1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXsuY29sdW1ucy5pcy12YXJpYWJsZS5pcy04LW1vYmlsZXstLWNvbHVtbkdhcDoycmVtfX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OXB4KSxwcmludHsuY29sdW1ucy5pcy12YXJpYWJsZS5pcy04LXRhYmxldHstLWNvbHVtbkdhcDoycmVtfX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OXB4KSBhbmQgKG1heC13aWR0aDoxMDg3cHgpey5jb2x1bW5zLmlzLXZhcmlhYmxlLmlzLTgtdGFibGV0LW9ubHl7LS1jb2x1bW5HYXA6MnJlbX19QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDg3cHgpey5jb2x1bW5zLmlzLXZhcmlhYmxlLmlzLTgtdG91Y2h7LS1jb2x1bW5HYXA6MnJlbX19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDg4cHgpey5jb2x1bW5zLmlzLXZhcmlhYmxlLmlzLTgtZGVza3RvcHstLWNvbHVtbkdhcDoycmVtfX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwODhweCkgYW5kIChtYXgtd2lkdGg6MTI3OXB4KXsuY29sdW1ucy5pcy12YXJpYWJsZS5pcy04LWRlc2t0b3Atb25seXstLWNvbHVtbkdhcDoycmVtfX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEyODBweCl7LmNvbHVtbnMuaXMtdmFyaWFibGUuaXMtOC13aWRlc2NyZWVuey0tY29sdW1uR2FwOjJyZW19fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTI4MHB4KSBhbmQgKG1heC13aWR0aDoxNDcxcHgpey5jb2x1bW5zLmlzLXZhcmlhYmxlLmlzLTgtd2lkZXNjcmVlbi1vbmx5ey0tY29sdW1uR2FwOjJyZW19fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTQ3MnB4KXsuY29sdW1ucy5pcy12YXJpYWJsZS5pcy04LWZ1bGxoZHstLWNvbHVtbkdhcDoycmVtfX0udGlsZXthbGlnbi1pdGVtczpzdHJldGNoO2Rpc3BsYXk6YmxvY2s7ZmxleC1iYXNpczowO2ZsZXgtZ3JvdzoxO2ZsZXgtc2hyaW5rOjE7bWluLWhlaWdodDotd2Via2l0LW1pbi1jb250ZW50O21pbi1oZWlnaHQ6LW1vei1taW4tY29udGVudDttaW4taGVpZ2h0Om1pbi1jb250ZW50fS50aWxlLmlzLWFuY2VzdG9ye21hcmdpbi1sZWZ0Oi0uNzVyZW07bWFyZ2luLXJpZ2h0Oi0uNzVyZW07bWFyZ2luLXRvcDotLjc1cmVtfS50aWxlLmlzLWFuY2VzdG9yOmxhc3QtY2hpbGR7bWFyZ2luLWJvdHRvbTotLjc1cmVtfS50aWxlLmlzLWFuY2VzdG9yOm5vdCg6bGFzdC1jaGlsZCl7bWFyZ2luLWJvdHRvbTouNzVyZW19LnRpbGUuaXMtY2hpbGR7bWFyZ2luOjAhaW1wb3J0YW50fS50aWxlLmlzLXBhcmVudHtwYWRkaW5nOi43NXJlbX0udGlsZS5pcy12ZXJ0aWNhbHtmbGV4LWRpcmVjdGlvbjpjb2x1bW59LnRpbGUuaXMtdmVydGljYWw+LnRpbGUuaXMtY2hpbGQ6bm90KDpsYXN0LWNoaWxkKXttYXJnaW4tYm90dG9tOjEuNXJlbSFpbXBvcnRhbnR9QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjlweCkscHJpbnR7LnRpbGU6bm90KC5pcy1jaGlsZCl7ZGlzcGxheTpmbGV4fS50aWxlLmlzLTF7ZmxleDpub25lO3dpZHRoOjguMzMzMzMlfS50aWxlLmlzLTJ7ZmxleDpub25lO3dpZHRoOjE2LjY2NjY3JX0udGlsZS5pcy0ze2ZsZXg6bm9uZTt3aWR0aDoyNSV9LnRpbGUuaXMtNHtmbGV4Om5vbmU7d2lkdGg6MzMuMzMzMzMlfS50aWxlLmlzLTV7ZmxleDpub25lO3dpZHRoOjQxLjY2NjY3JX0udGlsZS5pcy02e2ZsZXg6bm9uZTt3aWR0aDo1MCV9LnRpbGUuaXMtN3tmbGV4Om5vbmU7d2lkdGg6NTguMzMzMzMlfS50aWxlLmlzLTh7ZmxleDpub25lO3dpZHRoOjY2LjY2NjY3JX0udGlsZS5pcy05e2ZsZXg6bm9uZTt3aWR0aDo3NSV9LnRpbGUuaXMtMTB7ZmxleDpub25lO3dpZHRoOjgzLjMzMzMzJX0udGlsZS5pcy0xMXtmbGV4Om5vbmU7d2lkdGg6OTEuNjY2NjclfS50aWxlLmlzLTEye2ZsZXg6bm9uZTt3aWR0aDoxMDAlfX0uaGVyb3thbGlnbi1pdGVtczpzdHJldGNoO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59Lmhlcm8gLm5hdmJhcntiYWNrZ3JvdW5kOjAgMH0uaGVybyAudGFicyB1bHtib3JkZXItYm90dG9tOm5vbmV9Lmhlcm8uaXMtd2hpdGV7YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbG9yOiMwYTBhMGF9Lmhlcm8uaXMtd2hpdGUgYTpub3QoLmJ1dHRvbik6bm90KC5kcm9wZG93bi1pdGVtKTpub3QoLnRhZyksLmhlcm8uaXMtd2hpdGUgc3Ryb25ne2NvbG9yOmluaGVyaXR9Lmhlcm8uaXMtd2hpdGUgLnRpdGxle2NvbG9yOiMwYTBhMGF9Lmhlcm8uaXMtd2hpdGUgLnN1YnRpdGxle2NvbG9yOnJnYmEoMTAsMTAsMTAsLjkpfS5oZXJvLmlzLXdoaXRlIC5zdWJ0aXRsZSBhOm5vdCguYnV0dG9uKSwuaGVyby5pcy13aGl0ZSAuc3VidGl0bGUgc3Ryb25ne2NvbG9yOiMwYTBhMGF9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDg3cHgpey5oZXJvLmlzLXdoaXRlIC5uYXZiYXItbWVudXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9fS5oZXJvLmlzLXdoaXRlIC5uYXZiYXItaXRlbSwuaGVyby5pcy13aGl0ZSAubmF2YmFyLWxpbmt7Y29sb3I6cmdiYSgxMCwxMCwxMCwuNyl9Lmhlcm8uaXMtd2hpdGUgLm5hdmJhci1saW5rLmlzLWFjdGl2ZSwuaGVyby5pcy13aGl0ZSAubmF2YmFyLWxpbms6aG92ZXIsLmhlcm8uaXMtd2hpdGUgYS5uYXZiYXItaXRlbS5pcy1hY3RpdmUsLmhlcm8uaXMtd2hpdGUgYS5uYXZiYXItaXRlbTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmMmYyZjI7Y29sb3I6IzBhMGEwYX0uaGVyby5pcy13aGl0ZSAudGFicyBhe2NvbG9yOiMwYTBhMGE7b3BhY2l0eTouOX0uaGVyby5pcy13aGl0ZSAudGFicyBhOmhvdmVye29wYWNpdHk6MX0uaGVyby5pcy13aGl0ZSAudGFicyBsaS5pcy1hY3RpdmUgYXtvcGFjaXR5OjF9Lmhlcm8uaXMtd2hpdGUgLnRhYnMuaXMtYm94ZWQgYSwuaGVyby5pcy13aGl0ZSAudGFicy5pcy10b2dnbGUgYXtjb2xvcjojMGEwYTBhfS5oZXJvLmlzLXdoaXRlIC50YWJzLmlzLWJveGVkIGE6aG92ZXIsLmhlcm8uaXMtd2hpdGUgLnRhYnMuaXMtdG9nZ2xlIGE6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDEwLDEwLDEwLC4xKX0uaGVyby5pcy13aGl0ZSAudGFicy5pcy1ib3hlZCBsaS5pcy1hY3RpdmUgYSwuaGVyby5pcy13aGl0ZSAudGFicy5pcy1ib3hlZCBsaS5pcy1hY3RpdmUgYTpob3ZlciwuaGVyby5pcy13aGl0ZSAudGFicy5pcy10b2dnbGUgbGkuaXMtYWN0aXZlIGEsLmhlcm8uaXMtd2hpdGUgLnRhYnMuaXMtdG9nZ2xlIGxpLmlzLWFjdGl2ZSBhOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzBhMGEwYTtib3JkZXItY29sb3I6IzBhMGEwYTtjb2xvcjojZmZmfS5oZXJvLmlzLXdoaXRlLmlzLWJvbGR7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQoMTQxZGVnLCNlNmU2ZTYgMCwjZmZmIDcxJSwjZmZmIDEwMCUpfUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpey5oZXJvLmlzLXdoaXRlLmlzLWJvbGQgLm5hdmJhci1tZW51e2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDE0MWRlZywjZTZlNmU2IDAsI2ZmZiA3MSUsI2ZmZiAxMDAlKX19Lmhlcm8uaXMtYmxhY2t7YmFja2dyb3VuZC1jb2xvcjojMGEwYTBhO2NvbG9yOiNmZmZ9Lmhlcm8uaXMtYmxhY2sgYTpub3QoLmJ1dHRvbik6bm90KC5kcm9wZG93bi1pdGVtKTpub3QoLnRhZyksLmhlcm8uaXMtYmxhY2sgc3Ryb25ne2NvbG9yOmluaGVyaXR9Lmhlcm8uaXMtYmxhY2sgLnRpdGxle2NvbG9yOiNmZmZ9Lmhlcm8uaXMtYmxhY2sgLnN1YnRpdGxle2NvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjkpfS5oZXJvLmlzLWJsYWNrIC5zdWJ0aXRsZSBhOm5vdCguYnV0dG9uKSwuaGVyby5pcy1ibGFjayAuc3VidGl0bGUgc3Ryb25ne2NvbG9yOiNmZmZ9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDg3cHgpey5oZXJvLmlzLWJsYWNrIC5uYXZiYXItbWVudXtiYWNrZ3JvdW5kLWNvbG9yOiMwYTBhMGF9fS5oZXJvLmlzLWJsYWNrIC5uYXZiYXItaXRlbSwuaGVyby5pcy1ibGFjayAubmF2YmFyLWxpbmt7Y29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNyl9Lmhlcm8uaXMtYmxhY2sgLm5hdmJhci1saW5rLmlzLWFjdGl2ZSwuaGVyby5pcy1ibGFjayAubmF2YmFyLWxpbms6aG92ZXIsLmhlcm8uaXMtYmxhY2sgYS5uYXZiYXItaXRlbS5pcy1hY3RpdmUsLmhlcm8uaXMtYmxhY2sgYS5uYXZiYXItaXRlbTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7Y29sb3I6I2ZmZn0uaGVyby5pcy1ibGFjayAudGFicyBhe2NvbG9yOiNmZmY7b3BhY2l0eTouOX0uaGVyby5pcy1ibGFjayAudGFicyBhOmhvdmVye29wYWNpdHk6MX0uaGVyby5pcy1ibGFjayAudGFicyBsaS5pcy1hY3RpdmUgYXtvcGFjaXR5OjF9Lmhlcm8uaXMtYmxhY2sgLnRhYnMuaXMtYm94ZWQgYSwuaGVyby5pcy1ibGFjayAudGFicy5pcy10b2dnbGUgYXtjb2xvcjojZmZmfS5oZXJvLmlzLWJsYWNrIC50YWJzLmlzLWJveGVkIGE6aG92ZXIsLmhlcm8uaXMtYmxhY2sgLnRhYnMuaXMtdG9nZ2xlIGE6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDEwLDEwLDEwLC4xKX0uaGVyby5pcy1ibGFjayAudGFicy5pcy1ib3hlZCBsaS5pcy1hY3RpdmUgYSwuaGVyby5pcy1ibGFjayAudGFicy5pcy1ib3hlZCBsaS5pcy1hY3RpdmUgYTpob3ZlciwuaGVyby5pcy1ibGFjayAudGFicy5pcy10b2dnbGUgbGkuaXMtYWN0aXZlIGEsLmhlcm8uaXMtYmxhY2sgLnRhYnMuaXMtdG9nZ2xlIGxpLmlzLWFjdGl2ZSBhOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItY29sb3I6I2ZmZjtjb2xvcjojMGEwYTBhfS5oZXJvLmlzLWJsYWNrLmlzLWJvbGR7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQoMTQxZGVnLCMwMDAgMCwjMGEwYTBhIDcxJSwjMTgxNjE2IDEwMCUpfUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpey5oZXJvLmlzLWJsYWNrLmlzLWJvbGQgLm5hdmJhci1tZW51e2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDE0MWRlZywjMDAwIDAsIzBhMGEwYSA3MSUsIzE4MTYxNiAxMDAlKX19Lmhlcm8uaXMtbGlnaHR7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O2NvbG9yOiMzNjM2MzZ9Lmhlcm8uaXMtbGlnaHQgYTpub3QoLmJ1dHRvbik6bm90KC5kcm9wZG93bi1pdGVtKTpub3QoLnRhZyksLmhlcm8uaXMtbGlnaHQgc3Ryb25ne2NvbG9yOmluaGVyaXR9Lmhlcm8uaXMtbGlnaHQgLnRpdGxle2NvbG9yOiMzNjM2MzZ9Lmhlcm8uaXMtbGlnaHQgLnN1YnRpdGxle2NvbG9yOnJnYmEoNTQsNTQsNTQsLjkpfS5oZXJvLmlzLWxpZ2h0IC5zdWJ0aXRsZSBhOm5vdCguYnV0dG9uKSwuaGVyby5pcy1saWdodCAuc3VidGl0bGUgc3Ryb25ne2NvbG9yOiMzNjM2MzZ9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDg3cHgpey5oZXJvLmlzLWxpZ2h0IC5uYXZiYXItbWVudXtiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjV9fS5oZXJvLmlzLWxpZ2h0IC5uYXZiYXItaXRlbSwuaGVyby5pcy1saWdodCAubmF2YmFyLWxpbmt7Y29sb3I6cmdiYSg1NCw1NCw1NCwuNyl9Lmhlcm8uaXMtbGlnaHQgLm5hdmJhci1saW5rLmlzLWFjdGl2ZSwuaGVyby5pcy1saWdodCAubmF2YmFyLWxpbms6aG92ZXIsLmhlcm8uaXMtbGlnaHQgYS5uYXZiYXItaXRlbS5pcy1hY3RpdmUsLmhlcm8uaXMtbGlnaHQgYS5uYXZiYXItaXRlbTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNlOGU4ZTg7Y29sb3I6IzM2MzYzNn0uaGVyby5pcy1saWdodCAudGFicyBhe2NvbG9yOiMzNjM2MzY7b3BhY2l0eTouOX0uaGVyby5pcy1saWdodCAudGFicyBhOmhvdmVye29wYWNpdHk6MX0uaGVyby5pcy1saWdodCAudGFicyBsaS5pcy1hY3RpdmUgYXtvcGFjaXR5OjF9Lmhlcm8uaXMtbGlnaHQgLnRhYnMuaXMtYm94ZWQgYSwuaGVyby5pcy1saWdodCAudGFicy5pcy10b2dnbGUgYXtjb2xvcjojMzYzNjM2fS5oZXJvLmlzLWxpZ2h0IC50YWJzLmlzLWJveGVkIGE6aG92ZXIsLmhlcm8uaXMtbGlnaHQgLnRhYnMuaXMtdG9nZ2xlIGE6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDEwLDEwLDEwLC4xKX0uaGVyby5pcy1saWdodCAudGFicy5pcy1ib3hlZCBsaS5pcy1hY3RpdmUgYSwuaGVyby5pcy1saWdodCAudGFicy5pcy1ib3hlZCBsaS5pcy1hY3RpdmUgYTpob3ZlciwuaGVyby5pcy1saWdodCAudGFicy5pcy10b2dnbGUgbGkuaXMtYWN0aXZlIGEsLmhlcm8uaXMtbGlnaHQgLnRhYnMuaXMtdG9nZ2xlIGxpLmlzLWFjdGl2ZSBhOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzM2MzYzNjtib3JkZXItY29sb3I6IzM2MzYzNjtjb2xvcjojZjVmNWY1fS5oZXJvLmlzLWxpZ2h0LmlzLWJvbGR7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQoMTQxZGVnLCNkZmQ4ZDkgMCwjZjVmNWY1IDcxJSwjZmZmIDEwMCUpfUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpey5oZXJvLmlzLWxpZ2h0LmlzLWJvbGQgLm5hdmJhci1tZW51e2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDE0MWRlZywjZGZkOGQ5IDAsI2Y1ZjVmNSA3MSUsI2ZmZiAxMDAlKX19Lmhlcm8uaXMtZGFya3tiYWNrZ3JvdW5kLWNvbG9yOiMzNjM2MzY7Y29sb3I6I2Y1ZjVmNX0uaGVyby5pcy1kYXJrIGE6bm90KC5idXR0b24pOm5vdCguZHJvcGRvd24taXRlbSk6bm90KC50YWcpLC5oZXJvLmlzLWRhcmsgc3Ryb25ne2NvbG9yOmluaGVyaXR9Lmhlcm8uaXMtZGFyayAudGl0bGV7Y29sb3I6I2Y1ZjVmNX0uaGVyby5pcy1kYXJrIC5zdWJ0aXRsZXtjb2xvcjpyZ2JhKDI0NSwyNDUsMjQ1LC45KX0uaGVyby5pcy1kYXJrIC5zdWJ0aXRsZSBhOm5vdCguYnV0dG9uKSwuaGVyby5pcy1kYXJrIC5zdWJ0aXRsZSBzdHJvbmd7Y29sb3I6I2Y1ZjVmNX1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEwODdweCl7Lmhlcm8uaXMtZGFyayAubmF2YmFyLW1lbnV7YmFja2dyb3VuZC1jb2xvcjojMzYzNjM2fX0uaGVyby5pcy1kYXJrIC5uYXZiYXItaXRlbSwuaGVyby5pcy1kYXJrIC5uYXZiYXItbGlua3tjb2xvcjpyZ2JhKDI0NSwyNDUsMjQ1LC43KX0uaGVyby5pcy1kYXJrIC5uYXZiYXItbGluay5pcy1hY3RpdmUsLmhlcm8uaXMtZGFyayAubmF2YmFyLWxpbms6aG92ZXIsLmhlcm8uaXMtZGFyayBhLm5hdmJhci1pdGVtLmlzLWFjdGl2ZSwuaGVyby5pcy1kYXJrIGEubmF2YmFyLWl0ZW06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMjkyOTI5O2NvbG9yOiNmNWY1ZjV9Lmhlcm8uaXMtZGFyayAudGFicyBhe2NvbG9yOiNmNWY1ZjU7b3BhY2l0eTouOX0uaGVyby5pcy1kYXJrIC50YWJzIGE6aG92ZXJ7b3BhY2l0eToxfS5oZXJvLmlzLWRhcmsgLnRhYnMgbGkuaXMtYWN0aXZlIGF7b3BhY2l0eToxfS5oZXJvLmlzLWRhcmsgLnRhYnMuaXMtYm94ZWQgYSwuaGVyby5pcy1kYXJrIC50YWJzLmlzLXRvZ2dsZSBhe2NvbG9yOiNmNWY1ZjV9Lmhlcm8uaXMtZGFyayAudGFicy5pcy1ib3hlZCBhOmhvdmVyLC5oZXJvLmlzLWRhcmsgLnRhYnMuaXMtdG9nZ2xlIGE6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDEwLDEwLDEwLC4xKX0uaGVyby5pcy1kYXJrIC50YWJzLmlzLWJveGVkIGxpLmlzLWFjdGl2ZSBhLC5oZXJvLmlzLWRhcmsgLnRhYnMuaXMtYm94ZWQgbGkuaXMtYWN0aXZlIGE6aG92ZXIsLmhlcm8uaXMtZGFyayAudGFicy5pcy10b2dnbGUgbGkuaXMtYWN0aXZlIGEsLmhlcm8uaXMtZGFyayAudGFicy5pcy10b2dnbGUgbGkuaXMtYWN0aXZlIGE6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O2JvcmRlci1jb2xvcjojZjVmNWY1O2NvbG9yOiMzNjM2MzZ9Lmhlcm8uaXMtZGFyay5pcy1ib2xke2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDE0MWRlZywjMWYxOTFhIDAsIzM2MzYzNiA3MSUsIzQ2NDAzZiAxMDAlKX1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXsuaGVyby5pcy1kYXJrLmlzLWJvbGQgLm5hdmJhci1tZW51e2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDE0MWRlZywjMWYxOTFhIDAsIzM2MzYzNiA3MSUsIzQ2NDAzZiAxMDAlKX19Lmhlcm8uaXMtcHJpbWFyeXtiYWNrZ3JvdW5kLWNvbG9yOiMwMGQxYjI7Y29sb3I6I2ZmZn0uaGVyby5pcy1wcmltYXJ5IGE6bm90KC5idXR0b24pOm5vdCguZHJvcGRvd24taXRlbSk6bm90KC50YWcpLC5oZXJvLmlzLXByaW1hcnkgc3Ryb25ne2NvbG9yOmluaGVyaXR9Lmhlcm8uaXMtcHJpbWFyeSAudGl0bGV7Y29sb3I6I2ZmZn0uaGVyby5pcy1wcmltYXJ5IC5zdWJ0aXRsZXtjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC45KX0uaGVyby5pcy1wcmltYXJ5IC5zdWJ0aXRsZSBhOm5vdCguYnV0dG9uKSwuaGVyby5pcy1wcmltYXJ5IC5zdWJ0aXRsZSBzdHJvbmd7Y29sb3I6I2ZmZn1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEwODdweCl7Lmhlcm8uaXMtcHJpbWFyeSAubmF2YmFyLW1lbnV7YmFja2dyb3VuZC1jb2xvcjojMDBkMWIyfX0uaGVyby5pcy1wcmltYXJ5IC5uYXZiYXItaXRlbSwuaGVyby5pcy1wcmltYXJ5IC5uYXZiYXItbGlua3tjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC43KX0uaGVyby5pcy1wcmltYXJ5IC5uYXZiYXItbGluay5pcy1hY3RpdmUsLmhlcm8uaXMtcHJpbWFyeSAubmF2YmFyLWxpbms6aG92ZXIsLmhlcm8uaXMtcHJpbWFyeSBhLm5hdmJhci1pdGVtLmlzLWFjdGl2ZSwuaGVyby5pcy1wcmltYXJ5IGEubmF2YmFyLWl0ZW06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMDBiODljO2NvbG9yOiNmZmZ9Lmhlcm8uaXMtcHJpbWFyeSAudGFicyBhe2NvbG9yOiNmZmY7b3BhY2l0eTouOX0uaGVyby5pcy1wcmltYXJ5IC50YWJzIGE6aG92ZXJ7b3BhY2l0eToxfS5oZXJvLmlzLXByaW1hcnkgLnRhYnMgbGkuaXMtYWN0aXZlIGF7b3BhY2l0eToxfS5oZXJvLmlzLXByaW1hcnkgLnRhYnMuaXMtYm94ZWQgYSwuaGVyby5pcy1wcmltYXJ5IC50YWJzLmlzLXRvZ2dsZSBhe2NvbG9yOiNmZmZ9Lmhlcm8uaXMtcHJpbWFyeSAudGFicy5pcy1ib3hlZCBhOmhvdmVyLC5oZXJvLmlzLXByaW1hcnkgLnRhYnMuaXMtdG9nZ2xlIGE6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDEwLDEwLDEwLC4xKX0uaGVyby5pcy1wcmltYXJ5IC50YWJzLmlzLWJveGVkIGxpLmlzLWFjdGl2ZSBhLC5oZXJvLmlzLXByaW1hcnkgLnRhYnMuaXMtYm94ZWQgbGkuaXMtYWN0aXZlIGE6aG92ZXIsLmhlcm8uaXMtcHJpbWFyeSAudGFicy5pcy10b2dnbGUgbGkuaXMtYWN0aXZlIGEsLmhlcm8uaXMtcHJpbWFyeSAudGFicy5pcy10b2dnbGUgbGkuaXMtYWN0aXZlIGE6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlci1jb2xvcjojZmZmO2NvbG9yOiMwMGQxYjJ9Lmhlcm8uaXMtcHJpbWFyeS5pcy1ib2xke2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDE0MWRlZywjMDA5ZTZjIDAsIzAwZDFiMiA3MSUsIzAwZTdlYiAxMDAlKX1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXsuaGVyby5pcy1wcmltYXJ5LmlzLWJvbGQgLm5hdmJhci1tZW51e2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDE0MWRlZywjMDA5ZTZjIDAsIzAwZDFiMiA3MSUsIzAwZTdlYiAxMDAlKX19Lmhlcm8uaXMtbGlua3tiYWNrZ3JvdW5kLWNvbG9yOiMzMjczZGM7Y29sb3I6I2ZmZn0uaGVyby5pcy1saW5rIGE6bm90KC5idXR0b24pOm5vdCguZHJvcGRvd24taXRlbSk6bm90KC50YWcpLC5oZXJvLmlzLWxpbmsgc3Ryb25ne2NvbG9yOmluaGVyaXR9Lmhlcm8uaXMtbGluayAudGl0bGV7Y29sb3I6I2ZmZn0uaGVyby5pcy1saW5rIC5zdWJ0aXRsZXtjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC45KX0uaGVyby5pcy1saW5rIC5zdWJ0aXRsZSBhOm5vdCguYnV0dG9uKSwuaGVyby5pcy1saW5rIC5zdWJ0aXRsZSBzdHJvbmd7Y29sb3I6I2ZmZn1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEwODdweCl7Lmhlcm8uaXMtbGluayAubmF2YmFyLW1lbnV7YmFja2dyb3VuZC1jb2xvcjojMzI3M2RjfX0uaGVyby5pcy1saW5rIC5uYXZiYXItaXRlbSwuaGVyby5pcy1saW5rIC5uYXZiYXItbGlua3tjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC43KX0uaGVyby5pcy1saW5rIC5uYXZiYXItbGluay5pcy1hY3RpdmUsLmhlcm8uaXMtbGluayAubmF2YmFyLWxpbms6aG92ZXIsLmhlcm8uaXMtbGluayBhLm5hdmJhci1pdGVtLmlzLWFjdGl2ZSwuaGVyby5pcy1saW5rIGEubmF2YmFyLWl0ZW06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMjM2NmQxO2NvbG9yOiNmZmZ9Lmhlcm8uaXMtbGluayAudGFicyBhe2NvbG9yOiNmZmY7b3BhY2l0eTouOX0uaGVyby5pcy1saW5rIC50YWJzIGE6aG92ZXJ7b3BhY2l0eToxfS5oZXJvLmlzLWxpbmsgLnRhYnMgbGkuaXMtYWN0aXZlIGF7b3BhY2l0eToxfS5oZXJvLmlzLWxpbmsgLnRhYnMuaXMtYm94ZWQgYSwuaGVyby5pcy1saW5rIC50YWJzLmlzLXRvZ2dsZSBhe2NvbG9yOiNmZmZ9Lmhlcm8uaXMtbGluayAudGFicy5pcy1ib3hlZCBhOmhvdmVyLC5oZXJvLmlzLWxpbmsgLnRhYnMuaXMtdG9nZ2xlIGE6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDEwLDEwLDEwLC4xKX0uaGVyby5pcy1saW5rIC50YWJzLmlzLWJveGVkIGxpLmlzLWFjdGl2ZSBhLC5oZXJvLmlzLWxpbmsgLnRhYnMuaXMtYm94ZWQgbGkuaXMtYWN0aXZlIGE6aG92ZXIsLmhlcm8uaXMtbGluayAudGFicy5pcy10b2dnbGUgbGkuaXMtYWN0aXZlIGEsLmhlcm8uaXMtbGluayAudGFicy5pcy10b2dnbGUgbGkuaXMtYWN0aXZlIGE6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlci1jb2xvcjojZmZmO2NvbG9yOiMzMjczZGN9Lmhlcm8uaXMtbGluay5pcy1ib2xke2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDE0MWRlZywjMTU3N2M2IDAsIzMyNzNkYyA3MSUsIzQzNjZlNSAxMDAlKX1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXsuaGVyby5pcy1saW5rLmlzLWJvbGQgLm5hdmJhci1tZW51e2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDE0MWRlZywjMTU3N2M2IDAsIzMyNzNkYyA3MSUsIzQzNjZlNSAxMDAlKX19Lmhlcm8uaXMtaW5mb3tiYWNrZ3JvdW5kLWNvbG9yOiMyMDljZWU7Y29sb3I6I2ZmZn0uaGVyby5pcy1pbmZvIGE6bm90KC5idXR0b24pOm5vdCguZHJvcGRvd24taXRlbSk6bm90KC50YWcpLC5oZXJvLmlzLWluZm8gc3Ryb25ne2NvbG9yOmluaGVyaXR9Lmhlcm8uaXMtaW5mbyAudGl0bGV7Y29sb3I6I2ZmZn0uaGVyby5pcy1pbmZvIC5zdWJ0aXRsZXtjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC45KX0uaGVyby5pcy1pbmZvIC5zdWJ0aXRsZSBhOm5vdCguYnV0dG9uKSwuaGVyby5pcy1pbmZvIC5zdWJ0aXRsZSBzdHJvbmd7Y29sb3I6I2ZmZn1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEwODdweCl7Lmhlcm8uaXMtaW5mbyAubmF2YmFyLW1lbnV7YmFja2dyb3VuZC1jb2xvcjojMjA5Y2VlfX0uaGVyby5pcy1pbmZvIC5uYXZiYXItaXRlbSwuaGVyby5pcy1pbmZvIC5uYXZiYXItbGlua3tjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC43KX0uaGVyby5pcy1pbmZvIC5uYXZiYXItbGluay5pcy1hY3RpdmUsLmhlcm8uaXMtaW5mbyAubmF2YmFyLWxpbms6aG92ZXIsLmhlcm8uaXMtaW5mbyBhLm5hdmJhci1pdGVtLmlzLWFjdGl2ZSwuaGVyby5pcy1pbmZvIGEubmF2YmFyLWl0ZW06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMTE4ZmU0O2NvbG9yOiNmZmZ9Lmhlcm8uaXMtaW5mbyAudGFicyBhe2NvbG9yOiNmZmY7b3BhY2l0eTouOX0uaGVyby5pcy1pbmZvIC50YWJzIGE6aG92ZXJ7b3BhY2l0eToxfS5oZXJvLmlzLWluZm8gLnRhYnMgbGkuaXMtYWN0aXZlIGF7b3BhY2l0eToxfS5oZXJvLmlzLWluZm8gLnRhYnMuaXMtYm94ZWQgYSwuaGVyby5pcy1pbmZvIC50YWJzLmlzLXRvZ2dsZSBhe2NvbG9yOiNmZmZ9Lmhlcm8uaXMtaW5mbyAudGFicy5pcy1ib3hlZCBhOmhvdmVyLC5oZXJvLmlzLWluZm8gLnRhYnMuaXMtdG9nZ2xlIGE6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDEwLDEwLDEwLC4xKX0uaGVyby5pcy1pbmZvIC50YWJzLmlzLWJveGVkIGxpLmlzLWFjdGl2ZSBhLC5oZXJvLmlzLWluZm8gLnRhYnMuaXMtYm94ZWQgbGkuaXMtYWN0aXZlIGE6aG92ZXIsLmhlcm8uaXMtaW5mbyAudGFicy5pcy10b2dnbGUgbGkuaXMtYWN0aXZlIGEsLmhlcm8uaXMtaW5mbyAudGFicy5pcy10b2dnbGUgbGkuaXMtYWN0aXZlIGE6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlci1jb2xvcjojZmZmO2NvbG9yOiMyMDljZWV9Lmhlcm8uaXMtaW5mby5pcy1ib2xke2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDE0MWRlZywjMDRhNmQ3IDAsIzIwOWNlZSA3MSUsIzMyODdmNSAxMDAlKX1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXsuaGVyby5pcy1pbmZvLmlzLWJvbGQgLm5hdmJhci1tZW51e2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDE0MWRlZywjMDRhNmQ3IDAsIzIwOWNlZSA3MSUsIzMyODdmNSAxMDAlKX19Lmhlcm8uaXMtc3VjY2Vzc3tiYWNrZ3JvdW5kLWNvbG9yOiMyM2QxNjA7Y29sb3I6I2ZmZn0uaGVyby5pcy1zdWNjZXNzIGE6bm90KC5idXR0b24pOm5vdCguZHJvcGRvd24taXRlbSk6bm90KC50YWcpLC5oZXJvLmlzLXN1Y2Nlc3Mgc3Ryb25ne2NvbG9yOmluaGVyaXR9Lmhlcm8uaXMtc3VjY2VzcyAudGl0bGV7Y29sb3I6I2ZmZn0uaGVyby5pcy1zdWNjZXNzIC5zdWJ0aXRsZXtjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC45KX0uaGVyby5pcy1zdWNjZXNzIC5zdWJ0aXRsZSBhOm5vdCguYnV0dG9uKSwuaGVyby5pcy1zdWNjZXNzIC5zdWJ0aXRsZSBzdHJvbmd7Y29sb3I6I2ZmZn1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEwODdweCl7Lmhlcm8uaXMtc3VjY2VzcyAubmF2YmFyLW1lbnV7YmFja2dyb3VuZC1jb2xvcjojMjNkMTYwfX0uaGVyby5pcy1zdWNjZXNzIC5uYXZiYXItaXRlbSwuaGVyby5pcy1zdWNjZXNzIC5uYXZiYXItbGlua3tjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC43KX0uaGVyby5pcy1zdWNjZXNzIC5uYXZiYXItbGluay5pcy1hY3RpdmUsLmhlcm8uaXMtc3VjY2VzcyAubmF2YmFyLWxpbms6aG92ZXIsLmhlcm8uaXMtc3VjY2VzcyBhLm5hdmJhci1pdGVtLmlzLWFjdGl2ZSwuaGVyby5pcy1zdWNjZXNzIGEubmF2YmFyLWl0ZW06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMjBiYzU2O2NvbG9yOiNmZmZ9Lmhlcm8uaXMtc3VjY2VzcyAudGFicyBhe2NvbG9yOiNmZmY7b3BhY2l0eTouOX0uaGVyby5pcy1zdWNjZXNzIC50YWJzIGE6aG92ZXJ7b3BhY2l0eToxfS5oZXJvLmlzLXN1Y2Nlc3MgLnRhYnMgbGkuaXMtYWN0aXZlIGF7b3BhY2l0eToxfS5oZXJvLmlzLXN1Y2Nlc3MgLnRhYnMuaXMtYm94ZWQgYSwuaGVyby5pcy1zdWNjZXNzIC50YWJzLmlzLXRvZ2dsZSBhe2NvbG9yOiNmZmZ9Lmhlcm8uaXMtc3VjY2VzcyAudGFicy5pcy1ib3hlZCBhOmhvdmVyLC5oZXJvLmlzLXN1Y2Nlc3MgLnRhYnMuaXMtdG9nZ2xlIGE6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDEwLDEwLDEwLC4xKX0uaGVyby5pcy1zdWNjZXNzIC50YWJzLmlzLWJveGVkIGxpLmlzLWFjdGl2ZSBhLC5oZXJvLmlzLXN1Y2Nlc3MgLnRhYnMuaXMtYm94ZWQgbGkuaXMtYWN0aXZlIGE6aG92ZXIsLmhlcm8uaXMtc3VjY2VzcyAudGFicy5pcy10b2dnbGUgbGkuaXMtYWN0aXZlIGEsLmhlcm8uaXMtc3VjY2VzcyAudGFicy5pcy10b2dnbGUgbGkuaXMtYWN0aXZlIGE6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlci1jb2xvcjojZmZmO2NvbG9yOiMyM2QxNjB9Lmhlcm8uaXMtc3VjY2Vzcy5pcy1ib2xke2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDE0MWRlZywjMTJhZjJmIDAsIzIzZDE2MCA3MSUsIzJjZTI4YSAxMDAlKX1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXsuaGVyby5pcy1zdWNjZXNzLmlzLWJvbGQgLm5hdmJhci1tZW51e2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDE0MWRlZywjMTJhZjJmIDAsIzIzZDE2MCA3MSUsIzJjZTI4YSAxMDAlKX19Lmhlcm8uaXMtd2FybmluZ3tiYWNrZ3JvdW5kLWNvbG9yOiNmZmRkNTc7Y29sb3I6cmdiYSgwLDAsMCwuNyl9Lmhlcm8uaXMtd2FybmluZyBhOm5vdCguYnV0dG9uKTpub3QoLmRyb3Bkb3duLWl0ZW0pOm5vdCgudGFnKSwuaGVyby5pcy13YXJuaW5nIHN0cm9uZ3tjb2xvcjppbmhlcml0fS5oZXJvLmlzLXdhcm5pbmcgLnRpdGxle2NvbG9yOnJnYmEoMCwwLDAsLjcpfS5oZXJvLmlzLXdhcm5pbmcgLnN1YnRpdGxle2NvbG9yOnJnYmEoMCwwLDAsLjkpfS5oZXJvLmlzLXdhcm5pbmcgLnN1YnRpdGxlIGE6bm90KC5idXR0b24pLC5oZXJvLmlzLXdhcm5pbmcgLnN1YnRpdGxlIHN0cm9uZ3tjb2xvcjpyZ2JhKDAsMCwwLC43KX1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEwODdweCl7Lmhlcm8uaXMtd2FybmluZyAubmF2YmFyLW1lbnV7YmFja2dyb3VuZC1jb2xvcjojZmZkZDU3fX0uaGVyby5pcy13YXJuaW5nIC5uYXZiYXItaXRlbSwuaGVyby5pcy13YXJuaW5nIC5uYXZiYXItbGlua3tjb2xvcjpyZ2JhKDAsMCwwLC43KX0uaGVyby5pcy13YXJuaW5nIC5uYXZiYXItbGluay5pcy1hY3RpdmUsLmhlcm8uaXMtd2FybmluZyAubmF2YmFyLWxpbms6aG92ZXIsLmhlcm8uaXMtd2FybmluZyBhLm5hdmJhci1pdGVtLmlzLWFjdGl2ZSwuaGVyby5pcy13YXJuaW5nIGEubmF2YmFyLWl0ZW06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZmZkODNkO2NvbG9yOnJnYmEoMCwwLDAsLjcpfS5oZXJvLmlzLXdhcm5pbmcgLnRhYnMgYXtjb2xvcjpyZ2JhKDAsMCwwLC43KTtvcGFjaXR5Oi45fS5oZXJvLmlzLXdhcm5pbmcgLnRhYnMgYTpob3ZlcntvcGFjaXR5OjF9Lmhlcm8uaXMtd2FybmluZyAudGFicyBsaS5pcy1hY3RpdmUgYXtvcGFjaXR5OjF9Lmhlcm8uaXMtd2FybmluZyAudGFicy5pcy1ib3hlZCBhLC5oZXJvLmlzLXdhcm5pbmcgLnRhYnMuaXMtdG9nZ2xlIGF7Y29sb3I6cmdiYSgwLDAsMCwuNyl9Lmhlcm8uaXMtd2FybmluZyAudGFicy5pcy1ib3hlZCBhOmhvdmVyLC5oZXJvLmlzLXdhcm5pbmcgLnRhYnMuaXMtdG9nZ2xlIGE6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDEwLDEwLDEwLC4xKX0uaGVyby5pcy13YXJuaW5nIC50YWJzLmlzLWJveGVkIGxpLmlzLWFjdGl2ZSBhLC5oZXJvLmlzLXdhcm5pbmcgLnRhYnMuaXMtYm94ZWQgbGkuaXMtYWN0aXZlIGE6aG92ZXIsLmhlcm8uaXMtd2FybmluZyAudGFicy5pcy10b2dnbGUgbGkuaXMtYWN0aXZlIGEsLmhlcm8uaXMtd2FybmluZyAudGFicy5pcy10b2dnbGUgbGkuaXMtYWN0aXZlIGE6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC43KTtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuNyk7Y29sb3I6I2ZmZGQ1N30uaGVyby5pcy13YXJuaW5nLmlzLWJvbGR7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQoMTQxZGVnLCNmZmFmMjQgMCwjZmZkZDU3IDcxJSwjZmZmYTcwIDEwMCUpfUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpey5oZXJvLmlzLXdhcm5pbmcuaXMtYm9sZCAubmF2YmFyLW1lbnV7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQoMTQxZGVnLCNmZmFmMjQgMCwjZmZkZDU3IDcxJSwjZmZmYTcwIDEwMCUpfX0uaGVyby5pcy1kYW5nZXJ7YmFja2dyb3VuZC1jb2xvcjojZmYzODYwO2NvbG9yOiNmZmZ9Lmhlcm8uaXMtZGFuZ2VyIGE6bm90KC5idXR0b24pOm5vdCguZHJvcGRvd24taXRlbSk6bm90KC50YWcpLC5oZXJvLmlzLWRhbmdlciBzdHJvbmd7Y29sb3I6aW5oZXJpdH0uaGVyby5pcy1kYW5nZXIgLnRpdGxle2NvbG9yOiNmZmZ9Lmhlcm8uaXMtZGFuZ2VyIC5zdWJ0aXRsZXtjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC45KX0uaGVyby5pcy1kYW5nZXIgLnN1YnRpdGxlIGE6bm90KC5idXR0b24pLC5oZXJvLmlzLWRhbmdlciAuc3VidGl0bGUgc3Ryb25ne2NvbG9yOiNmZmZ9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDg3cHgpey5oZXJvLmlzLWRhbmdlciAubmF2YmFyLW1lbnV7YmFja2dyb3VuZC1jb2xvcjojZmYzODYwfX0uaGVyby5pcy1kYW5nZXIgLm5hdmJhci1pdGVtLC5oZXJvLmlzLWRhbmdlciAubmF2YmFyLWxpbmt7Y29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNyl9Lmhlcm8uaXMtZGFuZ2VyIC5uYXZiYXItbGluay5pcy1hY3RpdmUsLmhlcm8uaXMtZGFuZ2VyIC5uYXZiYXItbGluazpob3ZlciwuaGVyby5pcy1kYW5nZXIgYS5uYXZiYXItaXRlbS5pcy1hY3RpdmUsLmhlcm8uaXMtZGFuZ2VyIGEubmF2YmFyLWl0ZW06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZmYxZjRiO2NvbG9yOiNmZmZ9Lmhlcm8uaXMtZGFuZ2VyIC50YWJzIGF7Y29sb3I6I2ZmZjtvcGFjaXR5Oi45fS5oZXJvLmlzLWRhbmdlciAudGFicyBhOmhvdmVye29wYWNpdHk6MX0uaGVyby5pcy1kYW5nZXIgLnRhYnMgbGkuaXMtYWN0aXZlIGF7b3BhY2l0eToxfS5oZXJvLmlzLWRhbmdlciAudGFicy5pcy1ib3hlZCBhLC5oZXJvLmlzLWRhbmdlciAudGFicy5pcy10b2dnbGUgYXtjb2xvcjojZmZmfS5oZXJvLmlzLWRhbmdlciAudGFicy5pcy1ib3hlZCBhOmhvdmVyLC5oZXJvLmlzLWRhbmdlciAudGFicy5pcy10b2dnbGUgYTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTAsMTAsMTAsLjEpfS5oZXJvLmlzLWRhbmdlciAudGFicy5pcy1ib3hlZCBsaS5pcy1hY3RpdmUgYSwuaGVyby5pcy1kYW5nZXIgLnRhYnMuaXMtYm94ZWQgbGkuaXMtYWN0aXZlIGE6aG92ZXIsLmhlcm8uaXMtZGFuZ2VyIC50YWJzLmlzLXRvZ2dsZSBsaS5pcy1hY3RpdmUgYSwuaGVyby5pcy1kYW5nZXIgLnRhYnMuaXMtdG9nZ2xlIGxpLmlzLWFjdGl2ZSBhOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItY29sb3I6I2ZmZjtjb2xvcjojZmYzODYwfS5oZXJvLmlzLWRhbmdlci5pcy1ib2xke2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDE0MWRlZywjZmYwNTYxIDAsI2ZmMzg2MCA3MSUsI2ZmNTI1NyAxMDAlKX1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXsuaGVyby5pcy1kYW5nZXIuaXMtYm9sZCAubmF2YmFyLW1lbnV7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQoMTQxZGVnLCNmZjA1NjEgMCwjZmYzODYwIDcxJSwjZmY1MjU3IDEwMCUpfX0uaGVyby5pcy1zbWFsbCAuaGVyby1ib2R5e3BhZGRpbmctYm90dG9tOjEuNXJlbTtwYWRkaW5nLXRvcDoxLjVyZW19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjlweCkscHJpbnR7Lmhlcm8uaXMtbWVkaXVtIC5oZXJvLWJvZHl7cGFkZGluZy1ib3R0b206OXJlbTtwYWRkaW5nLXRvcDo5cmVtfX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OXB4KSxwcmludHsuaGVyby5pcy1sYXJnZSAuaGVyby1ib2R5e3BhZGRpbmctYm90dG9tOjE4cmVtO3BhZGRpbmctdG9wOjE4cmVtfX0uaGVyby5pcy1mdWxsaGVpZ2h0IC5oZXJvLWJvZHksLmhlcm8uaXMtZnVsbGhlaWdodC13aXRoLW5hdmJhciAuaGVyby1ib2R5LC5oZXJvLmlzLWhhbGZoZWlnaHQgLmhlcm8tYm9keXthbGlnbi1pdGVtczpjZW50ZXI7ZGlzcGxheTpmbGV4fS5oZXJvLmlzLWZ1bGxoZWlnaHQgLmhlcm8tYm9keT4uY29udGFpbmVyLC5oZXJvLmlzLWZ1bGxoZWlnaHQtd2l0aC1uYXZiYXIgLmhlcm8tYm9keT4uY29udGFpbmVyLC5oZXJvLmlzLWhhbGZoZWlnaHQgLmhlcm8tYm9keT4uY29udGFpbmVye2ZsZXgtZ3JvdzoxO2ZsZXgtc2hyaW5rOjF9Lmhlcm8uaXMtaGFsZmhlaWdodHttaW4taGVpZ2h0OjUwdmh9Lmhlcm8uaXMtZnVsbGhlaWdodHttaW4taGVpZ2h0OjEwMHZofS5oZXJvLXZpZGVve292ZXJmbG93OmhpZGRlbn0uaGVyby12aWRlbyB2aWRlb3tsZWZ0OjUwJTttaW4taGVpZ2h0OjEwMCU7bWluLXdpZHRoOjEwMCU7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtNTAlLC01MCUsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC01MCUsLTUwJSwwKX0uaGVyby12aWRlby5pcy10cmFuc3BhcmVudHtvcGFjaXR5Oi4zfUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpey5oZXJvLXZpZGVve2Rpc3BsYXk6bm9uZX19Lmhlcm8tYnV0dG9uc3ttYXJnaW4tdG9wOjEuNXJlbX1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXsuaGVyby1idXR0b25zIC5idXR0b257ZGlzcGxheTpmbGV4fS5oZXJvLWJ1dHRvbnMgLmJ1dHRvbjpub3QoOmxhc3QtY2hpbGQpe21hcmdpbi1ib3R0b206Ljc1cmVtfX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OXB4KSxwcmludHsuaGVyby1idXR0b25ze2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5oZXJvLWJ1dHRvbnMgLmJ1dHRvbjpub3QoOmxhc3QtY2hpbGQpe21hcmdpbi1yaWdodDoxLjVyZW19fS5oZXJvLWZvb3QsLmhlcm8taGVhZHtmbGV4LWdyb3c6MDtmbGV4LXNocmluazowfS5oZXJvLWJvZHl7ZmxleC1ncm93OjE7ZmxleC1zaHJpbms6MDtwYWRkaW5nOjNyZW0gMS41cmVtfS5zZWN0aW9ue3BhZGRpbmc6M3JlbSAxLjVyZW19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDg4cHgpey5zZWN0aW9uLmlzLW1lZGl1bXtwYWRkaW5nOjlyZW0gMS41cmVtfS5zZWN0aW9uLmlzLWxhcmdle3BhZGRpbmc6MThyZW0gMS41cmVtfX0uZm9vdGVye2JhY2tncm91bmQtY29sb3I6I2ZhZmFmYTtwYWRkaW5nOjNyZW0gMS41cmVtIDZyZW19XCIsIFwiXCJdKTtcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuICdAbWVkaWEgJyArIGl0ZW1bMl0gKyAneycgKyBjb250ZW50ICsgJ30nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9ICcoJyArIGl0ZW1bMl0gKyAnKSBhbmQgKCcgKyBtZWRpYVF1ZXJ5ICsgJyknO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuICByZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufSIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsImV4cG9ydCB7XG5cdG9uTW91bnQsXG5cdG9uRGVzdHJveSxcblx0YmVmb3JlVXBkYXRlLFxuXHRhZnRlclVwZGF0ZSxcblx0c2V0Q29udGV4dCxcblx0Z2V0Q29udGV4dCxcblx0dGljayxcblx0Y3JlYXRlRXZlbnREaXNwYXRjaGVyXG59IGZyb20gJy4vaW50ZXJuYWwnO1xuIiwiZnVuY3Rpb24gbm9vcCgpIHt9XG5cbmNvbnN0IGlkZW50aXR5ID0geCA9PiB4O1xuXG5mdW5jdGlvbiBhc3NpZ24odGFyLCBzcmMpIHtcblx0Zm9yIChjb25zdCBrIGluIHNyYykgdGFyW2tdID0gc3JjW2tdO1xuXHRyZXR1cm4gdGFyO1xufVxuXG5mdW5jdGlvbiBpc19wcm9taXNlKHZhbHVlKSB7XG5cdHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gYWRkX2xvY2F0aW9uKGVsZW1lbnQsIGZpbGUsIGxpbmUsIGNvbHVtbiwgY2hhcikge1xuXHRlbGVtZW50Ll9fc3ZlbHRlX21ldGEgPSB7XG5cdFx0bG9jOiB7IGZpbGUsIGxpbmUsIGNvbHVtbiwgY2hhciB9XG5cdH07XG59XG5cbmZ1bmN0aW9uIHJ1bihmbikge1xuXHRyZXR1cm4gZm4oKTtcbn1cblxuZnVuY3Rpb24gYmxhbmtfb2JqZWN0KCkge1xuXHRyZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsKTtcbn1cblxuZnVuY3Rpb24gcnVuX2FsbChmbnMpIHtcblx0Zm5zLmZvckVhY2gocnVuKTtcbn1cblxuZnVuY3Rpb24gaXNfZnVuY3Rpb24odGhpbmcpIHtcblx0cmV0dXJuIHR5cGVvZiB0aGluZyA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gc2FmZV9ub3RfZXF1YWwoYSwgYikge1xuXHRyZXR1cm4gYSAhPSBhID8gYiA9PSBiIDogYSAhPT0gYiB8fCAoKGEgJiYgdHlwZW9mIGEgPT09ICdvYmplY3QnKSB8fCB0eXBlb2YgYSA9PT0gJ2Z1bmN0aW9uJyk7XG59XG5cbmZ1bmN0aW9uIG5vdF9lcXVhbChhLCBiKSB7XG5cdHJldHVybiBhICE9IGEgPyBiID09IGIgOiBhICE9PSBiO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZV9zdG9yZShzdG9yZSwgbmFtZSkge1xuXHRpZiAoIXN0b3JlIHx8IHR5cGVvZiBzdG9yZS5zdWJzY3JpYmUgIT09ICdmdW5jdGlvbicpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYCcke25hbWV9JyBpcyBub3QgYSBzdG9yZSB3aXRoIGEgJ3N1YnNjcmliZScgbWV0aG9kYCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gc3Vic2NyaWJlKGNvbXBvbmVudCwgc3RvcmUsIGNhbGxiYWNrKSB7XG5cdGNvbnN0IHVuc3ViID0gc3RvcmUuc3Vic2NyaWJlKGNhbGxiYWNrKTtcblxuXHRjb21wb25lbnQuJCQub25fZGVzdHJveS5wdXNoKHVuc3ViLnVuc3Vic2NyaWJlXG5cdFx0PyAoKSA9PiB1bnN1Yi51bnN1YnNjcmliZSgpXG5cdFx0OiB1bnN1Yik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZV9zbG90KGRlZmluaXRpb24sIGN0eCwgZm4pIHtcblx0aWYgKGRlZmluaXRpb24pIHtcblx0XHRjb25zdCBzbG90X2N0eCA9IGdldF9zbG90X2NvbnRleHQoZGVmaW5pdGlvbiwgY3R4LCBmbik7XG5cdFx0cmV0dXJuIGRlZmluaXRpb25bMF0oc2xvdF9jdHgpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGdldF9zbG90X2NvbnRleHQoZGVmaW5pdGlvbiwgY3R4LCBmbikge1xuXHRyZXR1cm4gZGVmaW5pdGlvblsxXVxuXHRcdD8gYXNzaWduKHt9LCBhc3NpZ24oY3R4LiQkc2NvcGUuY3R4LCBkZWZpbml0aW9uWzFdKGZuID8gZm4oY3R4KSA6IHt9KSkpXG5cdFx0OiBjdHguJCRzY29wZS5jdHg7XG59XG5cbmZ1bmN0aW9uIGdldF9zbG90X2NoYW5nZXMoZGVmaW5pdGlvbiwgY3R4LCBjaGFuZ2VkLCBmbikge1xuXHRyZXR1cm4gZGVmaW5pdGlvblsxXVxuXHRcdD8gYXNzaWduKHt9LCBhc3NpZ24oY3R4LiQkc2NvcGUuY2hhbmdlZCB8fCB7fSwgZGVmaW5pdGlvblsxXShmbiA/IGZuKGNoYW5nZWQpIDoge30pKSlcblx0XHQ6IGN0eC4kJHNjb3BlLmNoYW5nZWQgfHwge307XG59XG5cbmZ1bmN0aW9uIGV4Y2x1ZGVfaW50ZXJuYWxfcHJvcHMocHJvcHMpIHtcblx0Y29uc3QgcmVzdWx0ID0ge307XG5cdGZvciAoY29uc3QgayBpbiBwcm9wcykgaWYgKGtbMF0gIT09ICckJykgcmVzdWx0W2tdID0gcHJvcHNba107XG5cdHJldHVybiByZXN1bHQ7XG59XG5cbmxldCBub3cgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuXHQ/ICgpID0+IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKVxuXHQ6ICgpID0+IERhdGUubm93KCk7XG5cbi8vIHVzZWQgaW50ZXJuYWxseSBmb3IgdGVzdGluZ1xuZnVuY3Rpb24gc2V0X25vdyhmbikge1xuXHRub3cgPSBmbjtcbn1cblxuY29uc3QgdGFza3MgPSBuZXcgU2V0KCk7XG5sZXQgcnVubmluZyA9IGZhbHNlO1xuXG5mdW5jdGlvbiBydW5fdGFza3MoKSB7XG5cdHRhc2tzLmZvckVhY2godGFzayA9PiB7XG5cdFx0aWYgKCF0YXNrWzBdKG5vdygpKSkge1xuXHRcdFx0dGFza3MuZGVsZXRlKHRhc2spO1xuXHRcdFx0dGFza1sxXSgpO1xuXHRcdH1cblx0fSk7XG5cblx0cnVubmluZyA9IHRhc2tzLnNpemUgPiAwO1xuXHRpZiAocnVubmluZykgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJ1bl90YXNrcyk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyX2xvb3BzKCkge1xuXHQvLyBmb3IgdGVzdGluZy4uLlxuXHR0YXNrcy5mb3JFYWNoKHRhc2sgPT4gdGFza3MuZGVsZXRlKHRhc2spKTtcblx0cnVubmluZyA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBsb29wKGZuKSB7XG5cdGxldCB0YXNrO1xuXG5cdGlmICghcnVubmluZykge1xuXHRcdHJ1bm5pbmcgPSB0cnVlO1xuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZShydW5fdGFza3MpO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRwcm9taXNlOiBuZXcgUHJvbWlzZShmdWxmaWwgPT4ge1xuXHRcdFx0dGFza3MuYWRkKHRhc2sgPSBbZm4sIGZ1bGZpbF0pO1xuXHRcdH0pLFxuXHRcdGFib3J0KCkge1xuXHRcdFx0dGFza3MuZGVsZXRlKHRhc2spO1xuXHRcdH1cblx0fTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kKHRhcmdldCwgbm9kZSkge1xuXHR0YXJnZXQuYXBwZW5kQ2hpbGQobm9kZSk7XG59XG5cbmZ1bmN0aW9uIGluc2VydCh0YXJnZXQsIG5vZGUsIGFuY2hvcikge1xuXHR0YXJnZXQuaW5zZXJ0QmVmb3JlKG5vZGUsIGFuY2hvciB8fCBudWxsKTtcbn1cblxuZnVuY3Rpb24gZGV0YWNoKG5vZGUpIHtcblx0bm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xufVxuXG5mdW5jdGlvbiBkZXRhY2hfYmV0d2VlbihiZWZvcmUsIGFmdGVyKSB7XG5cdHdoaWxlIChiZWZvcmUubmV4dFNpYmxpbmcgJiYgYmVmb3JlLm5leHRTaWJsaW5nICE9PSBhZnRlcikge1xuXHRcdGJlZm9yZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGJlZm9yZS5uZXh0U2libGluZyk7XG5cdH1cbn1cblxuZnVuY3Rpb24gZGV0YWNoX2JlZm9yZShhZnRlcikge1xuXHR3aGlsZSAoYWZ0ZXIucHJldmlvdXNTaWJsaW5nKSB7XG5cdFx0YWZ0ZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChhZnRlci5wcmV2aW91c1NpYmxpbmcpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGRldGFjaF9hZnRlcihiZWZvcmUpIHtcblx0d2hpbGUgKGJlZm9yZS5uZXh0U2libGluZykge1xuXHRcdGJlZm9yZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGJlZm9yZS5uZXh0U2libGluZyk7XG5cdH1cbn1cblxuZnVuY3Rpb24gZGVzdHJveV9lYWNoKGl0ZXJhdGlvbnMsIGRldGFjaGluZykge1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGl0ZXJhdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRpZiAoaXRlcmF0aW9uc1tpXSkgaXRlcmF0aW9uc1tpXS5kKGRldGFjaGluZyk7XG5cdH1cbn1cblxuZnVuY3Rpb24gZWxlbWVudChuYW1lKSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUpO1xufVxuXG5mdW5jdGlvbiBvYmplY3Rfd2l0aG91dF9wcm9wZXJ0aWVzKG9iaiwgZXhjbHVkZSkge1xuXHRjb25zdCB0YXJnZXQgPSB7fTtcblx0Zm9yIChjb25zdCBrIGluIG9iaikge1xuXHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrKSAmJiBleGNsdWRlLmluZGV4T2YoaykgPT09IC0xKSB7XG5cdFx0XHR0YXJnZXRba10gPSBvYmpba107XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIHN2Z19lbGVtZW50KG5hbWUpIHtcblx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCBuYW1lKTtcbn1cblxuZnVuY3Rpb24gdGV4dChkYXRhKSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkYXRhKTtcbn1cblxuZnVuY3Rpb24gc3BhY2UoKSB7XG5cdHJldHVybiB0ZXh0KCcgJyk7XG59XG5cbmZ1bmN0aW9uIGVtcHR5KCkge1xuXHRyZXR1cm4gdGV4dCgnJyk7XG59XG5cbmZ1bmN0aW9uIGxpc3Rlbihub2RlLCBldmVudCwgaGFuZGxlciwgb3B0aW9ucykge1xuXHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xuXHRyZXR1cm4gKCkgPT4gbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcHJldmVudF9kZWZhdWx0KGZuKSB7XG5cdHJldHVybiBmdW5jdGlvbihldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0cmV0dXJuIGZuLmNhbGwodGhpcywgZXZlbnQpO1xuXHR9O1xufVxuXG5mdW5jdGlvbiBzdG9wX3Byb3BhZ2F0aW9uKGZuKSB7XG5cdHJldHVybiBmdW5jdGlvbihldmVudCkge1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdHJldHVybiBmbi5jYWxsKHRoaXMsIGV2ZW50KTtcblx0fTtcbn1cblxuZnVuY3Rpb24gYXR0cihub2RlLCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG5cdGlmICh2YWx1ZSA9PSBudWxsKSBub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuXHRlbHNlIG5vZGUuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiBzZXRfYXR0cmlidXRlcyhub2RlLCBhdHRyaWJ1dGVzKSB7XG5cdGZvciAoY29uc3Qga2V5IGluIGF0dHJpYnV0ZXMpIHtcblx0XHRpZiAoa2V5ID09PSAnc3R5bGUnKSB7XG5cdFx0XHRub2RlLnN0eWxlLmNzc1RleHQgPSBhdHRyaWJ1dGVzW2tleV07XG5cdFx0fSBlbHNlIGlmIChrZXkgaW4gbm9kZSkge1xuXHRcdFx0bm9kZVtrZXldID0gYXR0cmlidXRlc1trZXldO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRhdHRyKG5vZGUsIGtleSwgYXR0cmlidXRlc1trZXldKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gc2V0X2N1c3RvbV9lbGVtZW50X2RhdGEobm9kZSwgcHJvcCwgdmFsdWUpIHtcblx0aWYgKHByb3AgaW4gbm9kZSkge1xuXHRcdG5vZGVbcHJvcF0gPSB2YWx1ZTtcblx0fSBlbHNlIHtcblx0XHRhdHRyKG5vZGUsIHByb3AsIHZhbHVlKTtcblx0fVxufVxuXG5mdW5jdGlvbiB4bGlua19hdHRyKG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcblx0bm9kZS5zZXRBdHRyaWJ1dGVOUygnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycsIGF0dHJpYnV0ZSwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiBnZXRfYmluZGluZ19ncm91cF92YWx1ZShncm91cCkge1xuXHRjb25zdCB2YWx1ZSA9IFtdO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGdyb3VwLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0aWYgKGdyb3VwW2ldLmNoZWNrZWQpIHZhbHVlLnB1c2goZ3JvdXBbaV0uX192YWx1ZSk7XG5cdH1cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiB0b19udW1iZXIodmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlID09PSAnJyA/IHVuZGVmaW5lZCA6ICt2YWx1ZTtcbn1cblxuZnVuY3Rpb24gdGltZV9yYW5nZXNfdG9fYXJyYXkocmFuZ2VzKSB7XG5cdGNvbnN0IGFycmF5ID0gW107XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcmFuZ2VzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0YXJyYXkucHVzaCh7IHN0YXJ0OiByYW5nZXMuc3RhcnQoaSksIGVuZDogcmFuZ2VzLmVuZChpKSB9KTtcblx0fVxuXHRyZXR1cm4gYXJyYXk7XG59XG5cbmZ1bmN0aW9uIGNoaWxkcmVuKGVsZW1lbnQpIHtcblx0cmV0dXJuIEFycmF5LmZyb20oZWxlbWVudC5jaGlsZE5vZGVzKTtcbn1cblxuZnVuY3Rpb24gY2xhaW1fZWxlbWVudChub2RlcywgbmFtZSwgYXR0cmlidXRlcywgc3ZnKSB7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRjb25zdCBub2RlID0gbm9kZXNbaV07XG5cdFx0aWYgKG5vZGUubm9kZU5hbWUgPT09IG5hbWUpIHtcblx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgbm9kZS5hdHRyaWJ1dGVzLmxlbmd0aDsgaiArPSAxKSB7XG5cdFx0XHRcdGNvbnN0IGF0dHJpYnV0ZSA9IG5vZGUuYXR0cmlidXRlc1tqXTtcblx0XHRcdFx0aWYgKCFhdHRyaWJ1dGVzW2F0dHJpYnV0ZS5uYW1lXSkgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlLm5hbWUpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG5vZGVzLnNwbGljZShpLCAxKVswXTsgLy8gVE9ETyBzdHJpcCB1bndhbnRlZCBhdHRyaWJ1dGVzXG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHN2ZyA/IHN2Z19lbGVtZW50KG5hbWUpIDogZWxlbWVudChuYW1lKTtcbn1cblxuZnVuY3Rpb24gY2xhaW1fdGV4dChub2RlcywgZGF0YSkge1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0Y29uc3Qgbm9kZSA9IG5vZGVzW2ldO1xuXHRcdGlmIChub2RlLm5vZGVUeXBlID09PSAzKSB7XG5cdFx0XHRub2RlLmRhdGEgPSBkYXRhO1xuXHRcdFx0cmV0dXJuIG5vZGVzLnNwbGljZShpLCAxKVswXTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdGV4dChkYXRhKTtcbn1cblxuZnVuY3Rpb24gc2V0X2RhdGEodGV4dCwgZGF0YSkge1xuXHRkYXRhID0gJycgKyBkYXRhO1xuXHRpZiAodGV4dC5kYXRhICE9PSBkYXRhKSB0ZXh0LmRhdGEgPSBkYXRhO1xufVxuXG5mdW5jdGlvbiBzZXRfaW5wdXRfdHlwZShpbnB1dCwgdHlwZSkge1xuXHR0cnkge1xuXHRcdGlucHV0LnR5cGUgPSB0eXBlO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0Ly8gZG8gbm90aGluZ1xuXHR9XG59XG5cbmZ1bmN0aW9uIHNldF9zdHlsZShub2RlLCBrZXksIHZhbHVlKSB7XG5cdG5vZGUuc3R5bGUuc2V0UHJvcGVydHkoa2V5LCB2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdF9vcHRpb24oc2VsZWN0LCB2YWx1ZSkge1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdC5vcHRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0Y29uc3Qgb3B0aW9uID0gc2VsZWN0Lm9wdGlvbnNbaV07XG5cblx0XHRpZiAob3B0aW9uLl9fdmFsdWUgPT09IHZhbHVlKSB7XG5cdFx0XHRvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBzZWxlY3Rfb3B0aW9ucyhzZWxlY3QsIHZhbHVlKSB7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0Lm9wdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRjb25zdCBvcHRpb24gPSBzZWxlY3Qub3B0aW9uc1tpXTtcblx0XHRvcHRpb24uc2VsZWN0ZWQgPSB+dmFsdWUuaW5kZXhPZihvcHRpb24uX192YWx1ZSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gc2VsZWN0X3ZhbHVlKHNlbGVjdCkge1xuXHRjb25zdCBzZWxlY3RlZF9vcHRpb24gPSBzZWxlY3QucXVlcnlTZWxlY3RvcignOmNoZWNrZWQnKSB8fCBzZWxlY3Qub3B0aW9uc1swXTtcblx0cmV0dXJuIHNlbGVjdGVkX29wdGlvbiAmJiBzZWxlY3RlZF9vcHRpb24uX192YWx1ZTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0X211bHRpcGxlX3ZhbHVlKHNlbGVjdCkge1xuXHRyZXR1cm4gW10ubWFwLmNhbGwoc2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoJzpjaGVja2VkJyksIG9wdGlvbiA9PiBvcHRpb24uX192YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIGFkZF9yZXNpemVfbGlzdGVuZXIoZWxlbWVudCwgZm4pIHtcblx0aWYgKGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG5cdFx0ZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG5cdH1cblxuXHRjb25zdCBvYmplY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvYmplY3QnKTtcblx0b2JqZWN0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogYmxvY2s7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyBsZWZ0OiAwOyBoZWlnaHQ6IDEwMCU7IHdpZHRoOiAxMDAlOyBvdmVyZmxvdzogaGlkZGVuOyBwb2ludGVyLWV2ZW50czogbm9uZTsgei1pbmRleDogLTE7Jyk7XG5cdG9iamVjdC50eXBlID0gJ3RleHQvaHRtbCc7XG5cblx0bGV0IHdpbjtcblxuXHRvYmplY3Qub25sb2FkID0gKCkgPT4ge1xuXHRcdHdpbiA9IG9iamVjdC5jb250ZW50RG9jdW1lbnQuZGVmYXVsdFZpZXc7XG5cdFx0d2luLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZuKTtcblx0fTtcblxuXHRpZiAoL1RyaWRlbnQvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcblx0XHRlbGVtZW50LmFwcGVuZENoaWxkKG9iamVjdCk7XG5cdFx0b2JqZWN0LmRhdGEgPSAnYWJvdXQ6YmxhbmsnO1xuXHR9IGVsc2Uge1xuXHRcdG9iamVjdC5kYXRhID0gJ2Fib3V0OmJsYW5rJztcblx0XHRlbGVtZW50LmFwcGVuZENoaWxkKG9iamVjdCk7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGNhbmNlbDogKCkgPT4ge1xuXHRcdFx0d2luICYmIHdpbi5yZW1vdmVFdmVudExpc3RlbmVyICYmIHdpbi5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmbik7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUNoaWxkKG9iamVjdCk7XG5cdFx0fVxuXHR9O1xufVxuXG5mdW5jdGlvbiB0b2dnbGVfY2xhc3MoZWxlbWVudCwgbmFtZSwgdG9nZ2xlKSB7XG5cdGVsZW1lbnQuY2xhc3NMaXN0W3RvZ2dsZSA/ICdhZGQnIDogJ3JlbW92ZSddKG5hbWUpO1xufVxuXG5mdW5jdGlvbiBjdXN0b21fZXZlbnQodHlwZSwgZGV0YWlsKSB7XG5cdGNvbnN0IGUgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcblx0ZS5pbml0Q3VzdG9tRXZlbnQodHlwZSwgZmFsc2UsIGZhbHNlLCBkZXRhaWwpO1xuXHRyZXR1cm4gZTtcbn1cblxubGV0IHN0eWxlc2hlZXQ7XG5sZXQgYWN0aXZlID0gMDtcbmxldCBjdXJyZW50X3J1bGVzID0ge307XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9kYXJrc2t5YXBwL3N0cmluZy1oYXNoL2Jsb2IvbWFzdGVyL2luZGV4LmpzXG5mdW5jdGlvbiBoYXNoKHN0cikge1xuXHRsZXQgaGFzaCA9IDUzODE7XG5cdGxldCBpID0gc3RyLmxlbmd0aDtcblxuXHR3aGlsZSAoaS0tKSBoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgXiBzdHIuY2hhckNvZGVBdChpKTtcblx0cmV0dXJuIGhhc2ggPj4+IDA7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZV9ydWxlKG5vZGUsIGEsIGIsIGR1cmF0aW9uLCBkZWxheSwgZWFzZSwgZm4sIHVpZCA9IDApIHtcblx0Y29uc3Qgc3RlcCA9IDE2LjY2NiAvIGR1cmF0aW9uO1xuXHRsZXQga2V5ZnJhbWVzID0gJ3tcXG4nO1xuXG5cdGZvciAobGV0IHAgPSAwOyBwIDw9IDE7IHAgKz0gc3RlcCkge1xuXHRcdGNvbnN0IHQgPSBhICsgKGIgLSBhKSAqIGVhc2UocCk7XG5cdFx0a2V5ZnJhbWVzICs9IHAgKiAxMDAgKyBgJXske2ZuKHQsIDEgLSB0KX19XFxuYDtcblx0fVxuXG5cdGNvbnN0IHJ1bGUgPSBrZXlmcmFtZXMgKyBgMTAwJSB7JHtmbihiLCAxIC0gYil9fVxcbn1gO1xuXHRjb25zdCBuYW1lID0gYF9fc3ZlbHRlXyR7aGFzaChydWxlKX1fJHt1aWR9YDtcblxuXHRpZiAoIWN1cnJlbnRfcnVsZXNbbmFtZV0pIHtcblx0XHRpZiAoIXN0eWxlc2hlZXQpIHtcblx0XHRcdGNvbnN0IHN0eWxlID0gZWxlbWVudCgnc3R5bGUnKTtcblx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdFx0c3R5bGVzaGVldCA9IHN0eWxlLnNoZWV0O1xuXHRcdH1cblxuXHRcdGN1cnJlbnRfcnVsZXNbbmFtZV0gPSB0cnVlO1xuXHRcdHN0eWxlc2hlZXQuaW5zZXJ0UnVsZShgQGtleWZyYW1lcyAke25hbWV9ICR7cnVsZX1gLCBzdHlsZXNoZWV0LmNzc1J1bGVzLmxlbmd0aCk7XG5cdH1cblxuXHRjb25zdCBhbmltYXRpb24gPSBub2RlLnN0eWxlLmFuaW1hdGlvbiB8fCAnJztcblx0bm9kZS5zdHlsZS5hbmltYXRpb24gPSBgJHthbmltYXRpb24gPyBgJHthbmltYXRpb259LCBgIDogYGB9JHtuYW1lfSAke2R1cmF0aW9ufW1zIGxpbmVhciAke2RlbGF5fW1zIDEgYm90aGA7XG5cblx0YWN0aXZlICs9IDE7XG5cdHJldHVybiBuYW1lO1xufVxuXG5mdW5jdGlvbiBkZWxldGVfcnVsZShub2RlLCBuYW1lKSB7XG5cdG5vZGUuc3R5bGUuYW5pbWF0aW9uID0gKG5vZGUuc3R5bGUuYW5pbWF0aW9uIHx8ICcnKVxuXHRcdC5zcGxpdCgnLCAnKVxuXHRcdC5maWx0ZXIobmFtZVxuXHRcdFx0PyBhbmltID0+IGFuaW0uaW5kZXhPZihuYW1lKSA8IDAgLy8gcmVtb3ZlIHNwZWNpZmljIGFuaW1hdGlvblxuXHRcdFx0OiBhbmltID0+IGFuaW0uaW5kZXhPZignX19zdmVsdGUnKSA9PT0gLTEgLy8gcmVtb3ZlIGFsbCBTdmVsdGUgYW5pbWF0aW9uc1xuXHRcdClcblx0XHQuam9pbignLCAnKTtcblxuXHRpZiAobmFtZSAmJiAhLS1hY3RpdmUpIGNsZWFyX3J1bGVzKCk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyX3J1bGVzKCkge1xuXHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuXHRcdGlmIChhY3RpdmUpIHJldHVybjtcblx0XHRsZXQgaSA9IHN0eWxlc2hlZXQuY3NzUnVsZXMubGVuZ3RoO1xuXHRcdHdoaWxlIChpLS0pIHN0eWxlc2hlZXQuZGVsZXRlUnVsZShpKTtcblx0XHRjdXJyZW50X3J1bGVzID0ge307XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVfYW5pbWF0aW9uKG5vZGUsIGZyb20sIGZuLCBwYXJhbXMpIHtcblx0aWYgKCFmcm9tKSByZXR1cm4gbm9vcDtcblxuXHRjb25zdCB0byA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdGlmIChmcm9tLmxlZnQgPT09IHRvLmxlZnQgJiYgZnJvbS5yaWdodCA9PT0gdG8ucmlnaHQgJiYgZnJvbS50b3AgPT09IHRvLnRvcCAmJiBmcm9tLmJvdHRvbSA9PT0gdG8uYm90dG9tKSByZXR1cm4gbm9vcDtcblxuXHRjb25zdCB7XG5cdFx0ZGVsYXkgPSAwLFxuXHRcdGR1cmF0aW9uID0gMzAwLFxuXHRcdGVhc2luZyA9IGlkZW50aXR5LFxuXHRcdHN0YXJ0OiBzdGFydF90aW1lID0gbm93KCkgKyBkZWxheSxcblx0XHRlbmQgPSBzdGFydF90aW1lICsgZHVyYXRpb24sXG5cdFx0dGljayA9IG5vb3AsXG5cdFx0Y3NzXG5cdH0gPSBmbihub2RlLCB7IGZyb20sIHRvIH0sIHBhcmFtcyk7XG5cblx0bGV0IHJ1bm5pbmcgPSB0cnVlO1xuXHRsZXQgc3RhcnRlZCA9IGZhbHNlO1xuXHRsZXQgbmFtZTtcblxuXHRjb25zdCBjc3NfdGV4dCA9IG5vZGUuc3R5bGUuY3NzVGV4dDtcblxuXHRmdW5jdGlvbiBzdGFydCgpIHtcblx0XHRpZiAoY3NzKSB7XG5cdFx0XHRpZiAoZGVsYXkpIG5vZGUuc3R5bGUuY3NzVGV4dCA9IGNzc190ZXh0OyAvLyBUT0RPIGNyZWF0ZSBkZWxheWVkIGFuaW1hdGlvbiBpbnN0ZWFkP1xuXHRcdFx0bmFtZSA9IGNyZWF0ZV9ydWxlKG5vZGUsIDAsIDEsIGR1cmF0aW9uLCAwLCBlYXNpbmcsIGNzcyk7XG5cdFx0fVxuXG5cdFx0c3RhcnRlZCA9IHRydWU7XG5cdH1cblxuXHRmdW5jdGlvbiBzdG9wKCkge1xuXHRcdGlmIChjc3MpIGRlbGV0ZV9ydWxlKG5vZGUsIG5hbWUpO1xuXHRcdHJ1bm5pbmcgPSBmYWxzZTtcblx0fVxuXG5cdGxvb3Aobm93JCQxID0+IHtcblx0XHRpZiAoIXN0YXJ0ZWQgJiYgbm93JCQxID49IHN0YXJ0X3RpbWUpIHtcblx0XHRcdHN0YXJ0KCk7XG5cdFx0fVxuXG5cdFx0aWYgKHN0YXJ0ZWQgJiYgbm93JCQxID49IGVuZCkge1xuXHRcdFx0dGljaygxLCAwKTtcblx0XHRcdHN0b3AoKTtcblx0XHR9XG5cblx0XHRpZiAoIXJ1bm5pbmcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAoc3RhcnRlZCkge1xuXHRcdFx0Y29uc3QgcCA9IG5vdyQkMSAtIHN0YXJ0X3RpbWU7XG5cdFx0XHRjb25zdCB0ID0gMCArIDEgKiBlYXNpbmcocCAvIGR1cmF0aW9uKTtcblx0XHRcdHRpY2sodCwgMSAtIHQpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9KTtcblxuXHRpZiAoZGVsYXkpIHtcblx0XHRpZiAoY3NzKSBub2RlLnN0eWxlLmNzc1RleHQgKz0gY3NzKDAsIDEpO1xuXHR9IGVsc2Uge1xuXHRcdHN0YXJ0KCk7XG5cdH1cblxuXHR0aWNrKDAsIDEpO1xuXG5cdHJldHVybiBzdG9wO1xufVxuXG5mdW5jdGlvbiBmaXhfcG9zaXRpb24obm9kZSkge1xuXHRjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XG5cblx0aWYgKHN0eWxlLnBvc2l0aW9uICE9PSAnYWJzb2x1dGUnICYmIHN0eWxlLnBvc2l0aW9uICE9PSAnZml4ZWQnKSB7XG5cdFx0Y29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBzdHlsZTtcblx0XHRjb25zdCBhID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRub2RlLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcblx0XHRub2RlLnN0eWxlLndpZHRoID0gd2lkdGg7XG5cdFx0bm9kZS5zdHlsZS5oZWlnaHQgPSBoZWlnaHQ7XG5cdFx0Y29uc3QgYiA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cblx0XHRpZiAoYS5sZWZ0ICE9PSBiLmxlZnQgfHwgYS50b3AgIT09IGIudG9wKSB7XG5cdFx0XHRjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XG5cdFx0XHRjb25zdCB0cmFuc2Zvcm0gPSBzdHlsZS50cmFuc2Zvcm0gPT09ICdub25lJyA/ICcnIDogc3R5bGUudHJhbnNmb3JtO1xuXG5cdFx0XHRub2RlLnN0eWxlLnRyYW5zZm9ybSA9IGAke3RyYW5zZm9ybX0gdHJhbnNsYXRlKCR7YS5sZWZ0IC0gYi5sZWZ0fXB4LCAke2EudG9wIC0gYi50b3B9cHgpYDtcblx0XHR9XG5cdH1cbn1cblxubGV0IGN1cnJlbnRfY29tcG9uZW50O1xuXG5mdW5jdGlvbiBzZXRfY3VycmVudF9jb21wb25lbnQoY29tcG9uZW50KSB7XG5cdGN1cnJlbnRfY29tcG9uZW50ID0gY29tcG9uZW50O1xufVxuXG5mdW5jdGlvbiBnZXRfY3VycmVudF9jb21wb25lbnQoKSB7XG5cdGlmICghY3VycmVudF9jb21wb25lbnQpIHRocm93IG5ldyBFcnJvcihgRnVuY3Rpb24gY2FsbGVkIG91dHNpZGUgY29tcG9uZW50IGluaXRpYWxpemF0aW9uYCk7XG5cdHJldHVybiBjdXJyZW50X2NvbXBvbmVudDtcbn1cblxuZnVuY3Rpb24gYmVmb3JlVXBkYXRlKGZuKSB7XG5cdGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmJlZm9yZV9yZW5kZXIucHVzaChmbik7XG59XG5cbmZ1bmN0aW9uIG9uTW91bnQoZm4pIHtcblx0Z2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQub25fbW91bnQucHVzaChmbik7XG59XG5cbmZ1bmN0aW9uIGFmdGVyVXBkYXRlKGZuKSB7XG5cdGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmFmdGVyX3JlbmRlci5wdXNoKGZuKTtcbn1cblxuZnVuY3Rpb24gb25EZXN0cm95KGZuKSB7XG5cdGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLm9uX2Rlc3Ryb3kucHVzaChmbik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpIHtcblx0Y29uc3QgY29tcG9uZW50ID0gY3VycmVudF9jb21wb25lbnQ7XG5cblx0cmV0dXJuICh0eXBlLCBkZXRhaWwpID0+IHtcblx0XHRjb25zdCBjYWxsYmFja3MgPSBjb21wb25lbnQuJCQuY2FsbGJhY2tzW3R5cGVdO1xuXG5cdFx0aWYgKGNhbGxiYWNrcykge1xuXHRcdFx0Ly8gVE9ETyBhcmUgdGhlcmUgc2l0dWF0aW9ucyB3aGVyZSBldmVudHMgY291bGQgYmUgZGlzcGF0Y2hlZFxuXHRcdFx0Ly8gaW4gYSBzZXJ2ZXIgKG5vbi1ET00pIGVudmlyb25tZW50P1xuXHRcdFx0Y29uc3QgZXZlbnQgPSBjdXN0b21fZXZlbnQodHlwZSwgZGV0YWlsKTtcblx0XHRcdGNhbGxiYWNrcy5zbGljZSgpLmZvckVhY2goZm4gPT4ge1xuXHRcdFx0XHRmbi5jYWxsKGNvbXBvbmVudCwgZXZlbnQpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xufVxuXG5mdW5jdGlvbiBzZXRDb250ZXh0KGtleSwgY29udGV4dCkge1xuXHRnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5jb250ZXh0LnNldChrZXksIGNvbnRleHQpO1xufVxuXG5mdW5jdGlvbiBnZXRDb250ZXh0KGtleSkge1xuXHRyZXR1cm4gZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQuY29udGV4dC5nZXQoa2V5KTtcbn1cblxuLy8gVE9ETyBmaWd1cmUgb3V0IGlmIHdlIHN0aWxsIHdhbnQgdG8gc3VwcG9ydFxuLy8gc2hvcnRoYW5kIGV2ZW50cywgb3IgaWYgd2Ugd2FudCB0byBpbXBsZW1lbnRcbi8vIGEgcmVhbCBidWJibGluZyBtZWNoYW5pc21cbmZ1bmN0aW9uIGJ1YmJsZShjb21wb25lbnQsIGV2ZW50KSB7XG5cdGNvbnN0IGNhbGxiYWNrcyA9IGNvbXBvbmVudC4kJC5jYWxsYmFja3NbZXZlbnQudHlwZV07XG5cblx0aWYgKGNhbGxiYWNrcykge1xuXHRcdGNhbGxiYWNrcy5zbGljZSgpLmZvckVhY2goZm4gPT4gZm4oZXZlbnQpKTtcblx0fVxufVxuXG5jb25zdCBkaXJ0eV9jb21wb25lbnRzID0gW107XG5jb25zdCBpbnRyb3MgPSB7IGVuYWJsZWQ6IGZhbHNlIH07XG5cbmNvbnN0IHJlc29sdmVkX3Byb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbmxldCB1cGRhdGVfc2NoZWR1bGVkID0gZmFsc2U7XG5jb25zdCBiaW5kaW5nX2NhbGxiYWNrcyA9IFtdO1xuY29uc3QgcmVuZGVyX2NhbGxiYWNrcyA9IFtdO1xuY29uc3QgZmx1c2hfY2FsbGJhY2tzID0gW107XG5cbmZ1bmN0aW9uIHNjaGVkdWxlX3VwZGF0ZSgpIHtcblx0aWYgKCF1cGRhdGVfc2NoZWR1bGVkKSB7XG5cdFx0dXBkYXRlX3NjaGVkdWxlZCA9IHRydWU7XG5cdFx0cmVzb2x2ZWRfcHJvbWlzZS50aGVuKGZsdXNoKTtcblx0fVxufVxuXG5mdW5jdGlvbiB0aWNrKCkge1xuXHRzY2hlZHVsZV91cGRhdGUoKTtcblx0cmV0dXJuIHJlc29sdmVkX3Byb21pc2U7XG59XG5cbmZ1bmN0aW9uIGFkZF9iaW5kaW5nX2NhbGxiYWNrKGZuKSB7XG5cdGJpbmRpbmdfY2FsbGJhY2tzLnB1c2goZm4pO1xufVxuXG5mdW5jdGlvbiBhZGRfcmVuZGVyX2NhbGxiYWNrKGZuKSB7XG5cdHJlbmRlcl9jYWxsYmFja3MucHVzaChmbik7XG59XG5cbmZ1bmN0aW9uIGFkZF9mbHVzaF9jYWxsYmFjayhmbikge1xuXHRmbHVzaF9jYWxsYmFja3MucHVzaChmbik7XG59XG5cbmZ1bmN0aW9uIGZsdXNoKCkge1xuXHRjb25zdCBzZWVuX2NhbGxiYWNrcyA9IG5ldyBTZXQoKTtcblxuXHRkbyB7XG5cdFx0Ly8gZmlyc3QsIGNhbGwgYmVmb3JlVXBkYXRlIGZ1bmN0aW9uc1xuXHRcdC8vIGFuZCB1cGRhdGUgY29tcG9uZW50c1xuXHRcdHdoaWxlIChkaXJ0eV9jb21wb25lbnRzLmxlbmd0aCkge1xuXHRcdFx0Y29uc3QgY29tcG9uZW50ID0gZGlydHlfY29tcG9uZW50cy5zaGlmdCgpO1xuXHRcdFx0c2V0X2N1cnJlbnRfY29tcG9uZW50KGNvbXBvbmVudCk7XG5cdFx0XHR1cGRhdGUoY29tcG9uZW50LiQkKTtcblx0XHR9XG5cblx0XHR3aGlsZSAoYmluZGluZ19jYWxsYmFja3MubGVuZ3RoKSBiaW5kaW5nX2NhbGxiYWNrcy5zaGlmdCgpKCk7XG5cblx0XHQvLyB0aGVuLCBvbmNlIGNvbXBvbmVudHMgYXJlIHVwZGF0ZWQsIGNhbGxcblx0XHQvLyBhZnRlclVwZGF0ZSBmdW5jdGlvbnMuIFRoaXMgbWF5IGNhdXNlXG5cdFx0Ly8gc3Vic2VxdWVudCB1cGRhdGVzLi4uXG5cdFx0d2hpbGUgKHJlbmRlcl9jYWxsYmFja3MubGVuZ3RoKSB7XG5cdFx0XHRjb25zdCBjYWxsYmFjayA9IHJlbmRlcl9jYWxsYmFja3MucG9wKCk7XG5cdFx0XHRpZiAoIXNlZW5fY2FsbGJhY2tzLmhhcyhjYWxsYmFjaykpIHtcblx0XHRcdFx0Y2FsbGJhY2soKTtcblxuXHRcdFx0XHQvLyAuLi5zbyBndWFyZCBhZ2FpbnN0IGluZmluaXRlIGxvb3BzXG5cdFx0XHRcdHNlZW5fY2FsbGJhY2tzLmFkZChjYWxsYmFjayk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9IHdoaWxlIChkaXJ0eV9jb21wb25lbnRzLmxlbmd0aCk7XG5cblx0d2hpbGUgKGZsdXNoX2NhbGxiYWNrcy5sZW5ndGgpIHtcblx0XHRmbHVzaF9jYWxsYmFja3MucG9wKCkoKTtcblx0fVxuXG5cdHVwZGF0ZV9zY2hlZHVsZWQgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlKCQkKSB7XG5cdGlmICgkJC5mcmFnbWVudCkge1xuXHRcdCQkLnVwZGF0ZSgkJC5kaXJ0eSk7XG5cdFx0cnVuX2FsbCgkJC5iZWZvcmVfcmVuZGVyKTtcblx0XHQkJC5mcmFnbWVudC5wKCQkLmRpcnR5LCAkJC5jdHgpO1xuXHRcdCQkLmRpcnR5ID0gbnVsbDtcblxuXHRcdCQkLmFmdGVyX3JlbmRlci5mb3JFYWNoKGFkZF9yZW5kZXJfY2FsbGJhY2spO1xuXHR9XG59XG5cbmxldCBwcm9taXNlO1xuXG5mdW5jdGlvbiB3YWl0KCkge1xuXHRpZiAoIXByb21pc2UpIHtcblx0XHRwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG5cdFx0cHJvbWlzZS50aGVuKCgpID0+IHtcblx0XHRcdHByb21pc2UgPSBudWxsO1xuXHRcdH0pO1xuXHR9XG5cblx0cmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIGRpc3BhdGNoKG5vZGUsIGRpcmVjdGlvbiwga2luZCkge1xuXHRub2RlLmRpc3BhdGNoRXZlbnQoY3VzdG9tX2V2ZW50KGAke2RpcmVjdGlvbiA/ICdpbnRybycgOiAnb3V0cm8nfSR7a2luZH1gKSk7XG59XG5cbmxldCBvdXRyb3M7XG5cbmZ1bmN0aW9uIGdyb3VwX291dHJvcygpIHtcblx0b3V0cm9zID0ge1xuXHRcdHJlbWFpbmluZzogMCxcblx0XHRjYWxsYmFja3M6IFtdXG5cdH07XG59XG5cbmZ1bmN0aW9uIGNoZWNrX291dHJvcygpIHtcblx0aWYgKCFvdXRyb3MucmVtYWluaW5nKSB7XG5cdFx0cnVuX2FsbChvdXRyb3MuY2FsbGJhY2tzKTtcblx0fVxufVxuXG5mdW5jdGlvbiBvbl9vdXRybyhjYWxsYmFjaykge1xuXHRvdXRyb3MuY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVfaW5fdHJhbnNpdGlvbihub2RlLCBmbiwgcGFyYW1zKSB7XG5cdGxldCBjb25maWcgPSBmbihub2RlLCBwYXJhbXMpO1xuXHRsZXQgcnVubmluZyA9IGZhbHNlO1xuXHRsZXQgYW5pbWF0aW9uX25hbWU7XG5cdGxldCB0YXNrO1xuXHRsZXQgdWlkID0gMDtcblxuXHRmdW5jdGlvbiBjbGVhbnVwKCkge1xuXHRcdGlmIChhbmltYXRpb25fbmFtZSkgZGVsZXRlX3J1bGUobm9kZSwgYW5pbWF0aW9uX25hbWUpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ28oKSB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0ZGVsYXkgPSAwLFxuXHRcdFx0ZHVyYXRpb24gPSAzMDAsXG5cdFx0XHRlYXNpbmcgPSBpZGVudGl0eSxcblx0XHRcdHRpY2s6IHRpY2skJDEgPSBub29wLFxuXHRcdFx0Y3NzXG5cdFx0fSA9IGNvbmZpZztcblxuXHRcdGlmIChjc3MpIGFuaW1hdGlvbl9uYW1lID0gY3JlYXRlX3J1bGUobm9kZSwgMCwgMSwgZHVyYXRpb24sIGRlbGF5LCBlYXNpbmcsIGNzcywgdWlkKyspO1xuXHRcdHRpY2skJDEoMCwgMSk7XG5cblx0XHRjb25zdCBzdGFydF90aW1lID0gbm93KCkgKyBkZWxheTtcblx0XHRjb25zdCBlbmRfdGltZSA9IHN0YXJ0X3RpbWUgKyBkdXJhdGlvbjtcblxuXHRcdGlmICh0YXNrKSB0YXNrLmFib3J0KCk7XG5cdFx0cnVubmluZyA9IHRydWU7XG5cblx0XHR0YXNrID0gbG9vcChub3ckJDEgPT4ge1xuXHRcdFx0aWYgKHJ1bm5pbmcpIHtcblx0XHRcdFx0aWYgKG5vdyQkMSA+PSBlbmRfdGltZSkge1xuXHRcdFx0XHRcdHRpY2skJDEoMSwgMCk7XG5cdFx0XHRcdFx0Y2xlYW51cCgpO1xuXHRcdFx0XHRcdHJldHVybiBydW5uaW5nID0gZmFsc2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAobm93JCQxID49IHN0YXJ0X3RpbWUpIHtcblx0XHRcdFx0XHRjb25zdCB0ID0gZWFzaW5nKChub3ckJDEgLSBzdGFydF90aW1lKSAvIGR1cmF0aW9uKTtcblx0XHRcdFx0XHR0aWNrJCQxKHQsIDEgLSB0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gcnVubmluZztcblx0XHR9KTtcblx0fVxuXG5cdGxldCBzdGFydGVkID0gZmFsc2U7XG5cblx0cmV0dXJuIHtcblx0XHRzdGFydCgpIHtcblx0XHRcdGlmIChzdGFydGVkKSByZXR1cm47XG5cblx0XHRcdGRlbGV0ZV9ydWxlKG5vZGUpO1xuXG5cdFx0XHRpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRjb25maWcgPSBjb25maWcoKTtcblx0XHRcdFx0d2FpdCgpLnRoZW4oZ28pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Z28oKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0aW52YWxpZGF0ZSgpIHtcblx0XHRcdHN0YXJ0ZWQgPSBmYWxzZTtcblx0XHR9LFxuXG5cdFx0ZW5kKCkge1xuXHRcdFx0aWYgKHJ1bm5pbmcpIHtcblx0XHRcdFx0Y2xlYW51cCgpO1xuXHRcdFx0XHRydW5uaW5nID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVfb3V0X3RyYW5zaXRpb24obm9kZSwgZm4sIHBhcmFtcykge1xuXHRsZXQgY29uZmlnID0gZm4obm9kZSwgcGFyYW1zKTtcblx0bGV0IHJ1bm5pbmcgPSB0cnVlO1xuXHRsZXQgYW5pbWF0aW9uX25hbWU7XG5cblx0Y29uc3QgZ3JvdXAgPSBvdXRyb3M7XG5cblx0Z3JvdXAucmVtYWluaW5nICs9IDE7XG5cblx0ZnVuY3Rpb24gZ28oKSB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0ZGVsYXkgPSAwLFxuXHRcdFx0ZHVyYXRpb24gPSAzMDAsXG5cdFx0XHRlYXNpbmcgPSBpZGVudGl0eSxcblx0XHRcdHRpY2s6IHRpY2skJDEgPSBub29wLFxuXHRcdFx0Y3NzXG5cdFx0fSA9IGNvbmZpZztcblxuXHRcdGlmIChjc3MpIGFuaW1hdGlvbl9uYW1lID0gY3JlYXRlX3J1bGUobm9kZSwgMSwgMCwgZHVyYXRpb24sIGRlbGF5LCBlYXNpbmcsIGNzcyk7XG5cblx0XHRjb25zdCBzdGFydF90aW1lID0gbm93KCkgKyBkZWxheTtcblx0XHRjb25zdCBlbmRfdGltZSA9IHN0YXJ0X3RpbWUgKyBkdXJhdGlvbjtcblxuXHRcdGxvb3Aobm93JCQxID0+IHtcblx0XHRcdGlmIChydW5uaW5nKSB7XG5cdFx0XHRcdGlmIChub3ckJDEgPj0gZW5kX3RpbWUpIHtcblx0XHRcdFx0XHR0aWNrJCQxKDAsIDEpO1xuXG5cdFx0XHRcdFx0aWYgKCEtLWdyb3VwLnJlbWFpbmluZykge1xuXHRcdFx0XHRcdFx0Ly8gdGhpcyB3aWxsIHJlc3VsdCBpbiBgZW5kKClgIGJlaW5nIGNhbGxlZCxcblx0XHRcdFx0XHRcdC8vIHNvIHdlIGRvbid0IG5lZWQgdG8gY2xlYW4gdXAgaGVyZVxuXHRcdFx0XHRcdFx0cnVuX2FsbChncm91cC5jYWxsYmFja3MpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChub3ckJDEgPj0gc3RhcnRfdGltZSkge1xuXHRcdFx0XHRcdGNvbnN0IHQgPSBlYXNpbmcoKG5vdyQkMSAtIHN0YXJ0X3RpbWUpIC8gZHVyYXRpb24pO1xuXHRcdFx0XHRcdHRpY2skJDEoMSAtIHQsIHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBydW5uaW5nO1xuXHRcdH0pO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBjb25maWcgPT09ICdmdW5jdGlvbicpIHtcblx0XHR3YWl0KCkudGhlbigoKSA9PiB7XG5cdFx0XHRjb25maWcgPSBjb25maWcoKTtcblx0XHRcdGdvKCk7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0Z28oKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0ZW5kKHJlc2V0KSB7XG5cdFx0XHRpZiAocmVzZXQgJiYgY29uZmlnLnRpY2spIHtcblx0XHRcdFx0Y29uZmlnLnRpY2soMSwgMCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChydW5uaW5nKSB7XG5cdFx0XHRcdGlmIChhbmltYXRpb25fbmFtZSkgZGVsZXRlX3J1bGUobm9kZSwgYW5pbWF0aW9uX25hbWUpO1xuXHRcdFx0XHRydW5uaW5nID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVfYmlkaXJlY3Rpb25hbF90cmFuc2l0aW9uKG5vZGUsIGZuLCBwYXJhbXMsIGludHJvKSB7XG5cdGxldCBjb25maWcgPSBmbihub2RlLCBwYXJhbXMpO1xuXG5cdGxldCB0ID0gaW50cm8gPyAwIDogMTtcblxuXHRsZXQgcnVubmluZ19wcm9ncmFtID0gbnVsbDtcblx0bGV0IHBlbmRpbmdfcHJvZ3JhbSA9IG51bGw7XG5cdGxldCBhbmltYXRpb25fbmFtZSA9IG51bGw7XG5cblx0ZnVuY3Rpb24gY2xlYXJfYW5pbWF0aW9uKCkge1xuXHRcdGlmIChhbmltYXRpb25fbmFtZSkgZGVsZXRlX3J1bGUobm9kZSwgYW5pbWF0aW9uX25hbWUpO1xuXHR9XG5cblx0ZnVuY3Rpb24gaW5pdChwcm9ncmFtLCBkdXJhdGlvbikge1xuXHRcdGNvbnN0IGQgPSBwcm9ncmFtLmIgLSB0O1xuXHRcdGR1cmF0aW9uICo9IE1hdGguYWJzKGQpO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGE6IHQsXG5cdFx0XHRiOiBwcm9ncmFtLmIsXG5cdFx0XHRkLFxuXHRcdFx0ZHVyYXRpb24sXG5cdFx0XHRzdGFydDogcHJvZ3JhbS5zdGFydCxcblx0XHRcdGVuZDogcHJvZ3JhbS5zdGFydCArIGR1cmF0aW9uLFxuXHRcdFx0Z3JvdXA6IHByb2dyYW0uZ3JvdXBcblx0XHR9O1xuXHR9XG5cblx0ZnVuY3Rpb24gZ28oYikge1xuXHRcdGNvbnN0IHtcblx0XHRcdGRlbGF5ID0gMCxcblx0XHRcdGR1cmF0aW9uID0gMzAwLFxuXHRcdFx0ZWFzaW5nID0gaWRlbnRpdHksXG5cdFx0XHR0aWNrOiB0aWNrJCQxID0gbm9vcCxcblx0XHRcdGNzc1xuXHRcdH0gPSBjb25maWc7XG5cblx0XHRjb25zdCBwcm9ncmFtID0ge1xuXHRcdFx0c3RhcnQ6IG5vdygpICsgZGVsYXksXG5cdFx0XHRiXG5cdFx0fTtcblxuXHRcdGlmICghYikge1xuXHRcdFx0cHJvZ3JhbS5ncm91cCA9IG91dHJvcztcblx0XHRcdG91dHJvcy5yZW1haW5pbmcgKz0gMTtcblx0XHR9XG5cblx0XHRpZiAocnVubmluZ19wcm9ncmFtKSB7XG5cdFx0XHRwZW5kaW5nX3Byb2dyYW0gPSBwcm9ncmFtO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBpZiB0aGlzIGlzIGFuIGludHJvLCBhbmQgdGhlcmUncyBhIGRlbGF5LCB3ZSBuZWVkIHRvIGRvXG5cdFx0XHQvLyBhbiBpbml0aWFsIHRpY2sgYW5kL29yIGFwcGx5IENTUyBhbmltYXRpb24gaW1tZWRpYXRlbHlcblx0XHRcdGlmIChjc3MpIHtcblx0XHRcdFx0Y2xlYXJfYW5pbWF0aW9uKCk7XG5cdFx0XHRcdGFuaW1hdGlvbl9uYW1lID0gY3JlYXRlX3J1bGUobm9kZSwgdCwgYiwgZHVyYXRpb24sIGRlbGF5LCBlYXNpbmcsIGNzcyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChiKSB0aWNrJCQxKDAsIDEpO1xuXG5cdFx0XHRydW5uaW5nX3Byb2dyYW0gPSBpbml0KHByb2dyYW0sIGR1cmF0aW9uKTtcblx0XHRcdGFkZF9yZW5kZXJfY2FsbGJhY2soKCkgPT4gZGlzcGF0Y2gobm9kZSwgYiwgJ3N0YXJ0JykpO1xuXG5cdFx0XHRsb29wKG5vdyQkMSA9PiB7XG5cdFx0XHRcdGlmIChwZW5kaW5nX3Byb2dyYW0gJiYgbm93JCQxID4gcGVuZGluZ19wcm9ncmFtLnN0YXJ0KSB7XG5cdFx0XHRcdFx0cnVubmluZ19wcm9ncmFtID0gaW5pdChwZW5kaW5nX3Byb2dyYW0sIGR1cmF0aW9uKTtcblx0XHRcdFx0XHRwZW5kaW5nX3Byb2dyYW0gPSBudWxsO1xuXG5cdFx0XHRcdFx0ZGlzcGF0Y2gobm9kZSwgcnVubmluZ19wcm9ncmFtLmIsICdzdGFydCcpO1xuXG5cdFx0XHRcdFx0aWYgKGNzcykge1xuXHRcdFx0XHRcdFx0Y2xlYXJfYW5pbWF0aW9uKCk7XG5cdFx0XHRcdFx0XHRhbmltYXRpb25fbmFtZSA9IGNyZWF0ZV9ydWxlKG5vZGUsIHQsIHJ1bm5pbmdfcHJvZ3JhbS5iLCBydW5uaW5nX3Byb2dyYW0uZHVyYXRpb24sIDAsIGVhc2luZywgY29uZmlnLmNzcyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHJ1bm5pbmdfcHJvZ3JhbSkge1xuXHRcdFx0XHRcdGlmIChub3ckJDEgPj0gcnVubmluZ19wcm9ncmFtLmVuZCkge1xuXHRcdFx0XHRcdFx0dGljayQkMSh0ID0gcnVubmluZ19wcm9ncmFtLmIsIDEgLSB0KTtcblx0XHRcdFx0XHRcdGRpc3BhdGNoKG5vZGUsIHJ1bm5pbmdfcHJvZ3JhbS5iLCAnZW5kJyk7XG5cblx0XHRcdFx0XHRcdGlmICghcGVuZGluZ19wcm9ncmFtKSB7XG5cdFx0XHRcdFx0XHRcdC8vIHdlJ3JlIGRvbmVcblx0XHRcdFx0XHRcdFx0aWYgKHJ1bm5pbmdfcHJvZ3JhbS5iKSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gaW50cm8g4oCUIHdlIGNhbiB0aWR5IHVwIGltbWVkaWF0ZWx5XG5cdFx0XHRcdFx0XHRcdFx0Y2xlYXJfYW5pbWF0aW9uKCk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gb3V0cm8g4oCUIG5lZWRzIHRvIGJlIGNvb3JkaW5hdGVkXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCEtLXJ1bm5pbmdfcHJvZ3JhbS5ncm91cC5yZW1haW5pbmcpIHJ1bl9hbGwocnVubmluZ19wcm9ncmFtLmdyb3VwLmNhbGxiYWNrcyk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0cnVubmluZ19wcm9ncmFtID0gbnVsbDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRlbHNlIGlmIChub3ckJDEgPj0gcnVubmluZ19wcm9ncmFtLnN0YXJ0KSB7XG5cdFx0XHRcdFx0XHRjb25zdCBwID0gbm93JCQxIC0gcnVubmluZ19wcm9ncmFtLnN0YXJ0O1xuXHRcdFx0XHRcdFx0dCA9IHJ1bm5pbmdfcHJvZ3JhbS5hICsgcnVubmluZ19wcm9ncmFtLmQgKiBlYXNpbmcocCAvIHJ1bm5pbmdfcHJvZ3JhbS5kdXJhdGlvbik7XG5cdFx0XHRcdFx0XHR0aWNrJCQxKHQsIDEgLSB0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gISEocnVubmluZ19wcm9ncmFtIHx8IHBlbmRpbmdfcHJvZ3JhbSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdHJ1bihiKSB7XG5cdFx0XHRpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHR3YWl0KCkudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0Y29uZmlnID0gY29uZmlnKCk7XG5cdFx0XHRcdFx0Z28oYik7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Z28oYik7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdGVuZCgpIHtcblx0XHRcdGNsZWFyX2FuaW1hdGlvbigpO1xuXHRcdFx0cnVubmluZ19wcm9ncmFtID0gcGVuZGluZ19wcm9ncmFtID0gbnVsbDtcblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIGhhbmRsZV9wcm9taXNlKHByb21pc2UsIGluZm8pIHtcblx0Y29uc3QgdG9rZW4gPSBpbmZvLnRva2VuID0ge307XG5cblx0ZnVuY3Rpb24gdXBkYXRlKHR5cGUsIGluZGV4LCBrZXksIHZhbHVlKSB7XG5cdFx0aWYgKGluZm8udG9rZW4gIT09IHRva2VuKSByZXR1cm47XG5cblx0XHRpbmZvLnJlc29sdmVkID0ga2V5ICYmIHsgW2tleV06IHZhbHVlIH07XG5cblx0XHRjb25zdCBjaGlsZF9jdHggPSBhc3NpZ24oYXNzaWduKHt9LCBpbmZvLmN0eCksIGluZm8ucmVzb2x2ZWQpO1xuXHRcdGNvbnN0IGJsb2NrID0gdHlwZSAmJiAoaW5mby5jdXJyZW50ID0gdHlwZSkoY2hpbGRfY3R4KTtcblxuXHRcdGlmIChpbmZvLmJsb2NrKSB7XG5cdFx0XHRpZiAoaW5mby5ibG9ja3MpIHtcblx0XHRcdFx0aW5mby5ibG9ja3MuZm9yRWFjaCgoYmxvY2ssIGkpID0+IHtcblx0XHRcdFx0XHRpZiAoaSAhPT0gaW5kZXggJiYgYmxvY2spIHtcblx0XHRcdFx0XHRcdGdyb3VwX291dHJvcygpO1xuXHRcdFx0XHRcdFx0b25fb3V0cm8oKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRibG9jay5kKDEpO1xuXHRcdFx0XHRcdFx0XHRpbmZvLmJsb2Nrc1tpXSA9IG51bGw7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdGJsb2NrLm8oMSk7XG5cdFx0XHRcdFx0XHRjaGVja19vdXRyb3MoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aW5mby5ibG9jay5kKDEpO1xuXHRcdFx0fVxuXG5cdFx0XHRibG9jay5jKCk7XG5cdFx0XHRpZiAoYmxvY2suaSkgYmxvY2suaSgxKTtcblx0XHRcdGJsb2NrLm0oaW5mby5tb3VudCgpLCBpbmZvLmFuY2hvcik7XG5cblx0XHRcdGZsdXNoKCk7XG5cdFx0fVxuXG5cdFx0aW5mby5ibG9jayA9IGJsb2NrO1xuXHRcdGlmIChpbmZvLmJsb2NrcykgaW5mby5ibG9ja3NbaW5kZXhdID0gYmxvY2s7XG5cdH1cblxuXHRpZiAoaXNfcHJvbWlzZShwcm9taXNlKSkge1xuXHRcdHByb21pc2UudGhlbih2YWx1ZSA9PiB7XG5cdFx0XHR1cGRhdGUoaW5mby50aGVuLCAxLCBpbmZvLnZhbHVlLCB2YWx1ZSk7XG5cdFx0fSwgZXJyb3IgPT4ge1xuXHRcdFx0dXBkYXRlKGluZm8uY2F0Y2gsIDIsIGluZm8uZXJyb3IsIGVycm9yKTtcblx0XHR9KTtcblxuXHRcdC8vIGlmIHdlIHByZXZpb3VzbHkgaGFkIGEgdGhlbi9jYXRjaCBibG9jaywgZGVzdHJveSBpdFxuXHRcdGlmIChpbmZvLmN1cnJlbnQgIT09IGluZm8ucGVuZGluZykge1xuXHRcdFx0dXBkYXRlKGluZm8ucGVuZGluZywgMCk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0aWYgKGluZm8uY3VycmVudCAhPT0gaW5mby50aGVuKSB7XG5cdFx0XHR1cGRhdGUoaW5mby50aGVuLCAxLCBpbmZvLnZhbHVlLCBwcm9taXNlKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGluZm8ucmVzb2x2ZWQgPSB7IFtpbmZvLnZhbHVlXTogcHJvbWlzZSB9O1xuXHR9XG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCkge1xuXHRibG9jay5kKDEpO1xuXHRsb29rdXAuZGVsZXRlKGJsb2NrLmtleSk7XG59XG5cbmZ1bmN0aW9uIG91dHJvX2FuZF9kZXN0cm95X2Jsb2NrKGJsb2NrLCBsb29rdXApIHtcblx0b25fb3V0cm8oKCkgPT4ge1xuXHRcdGRlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCk7XG5cdH0pO1xuXG5cdGJsb2NrLm8oMSk7XG59XG5cbmZ1bmN0aW9uIGZpeF9hbmRfb3V0cm9fYW5kX2Rlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCkge1xuXHRibG9jay5mKCk7XG5cdG91dHJvX2FuZF9kZXN0cm95X2Jsb2NrKGJsb2NrLCBsb29rdXApO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVfa2V5ZWRfZWFjaChvbGRfYmxvY2tzLCBjaGFuZ2VkLCBnZXRfa2V5LCBkeW5hbWljLCBjdHgsIGxpc3QsIGxvb2t1cCwgbm9kZSwgZGVzdHJveSwgY3JlYXRlX2VhY2hfYmxvY2ssIG5leHQsIGdldF9jb250ZXh0KSB7XG5cdGxldCBvID0gb2xkX2Jsb2Nrcy5sZW5ndGg7XG5cdGxldCBuID0gbGlzdC5sZW5ndGg7XG5cblx0bGV0IGkgPSBvO1xuXHRjb25zdCBvbGRfaW5kZXhlcyA9IHt9O1xuXHR3aGlsZSAoaS0tKSBvbGRfaW5kZXhlc1tvbGRfYmxvY2tzW2ldLmtleV0gPSBpO1xuXG5cdGNvbnN0IG5ld19ibG9ja3MgPSBbXTtcblx0Y29uc3QgbmV3X2xvb2t1cCA9IG5ldyBNYXAoKTtcblx0Y29uc3QgZGVsdGFzID0gbmV3IE1hcCgpO1xuXG5cdGkgPSBuO1xuXHR3aGlsZSAoaS0tKSB7XG5cdFx0Y29uc3QgY2hpbGRfY3R4ID0gZ2V0X2NvbnRleHQoY3R4LCBsaXN0LCBpKTtcblx0XHRjb25zdCBrZXkgPSBnZXRfa2V5KGNoaWxkX2N0eCk7XG5cdFx0bGV0IGJsb2NrID0gbG9va3VwLmdldChrZXkpO1xuXG5cdFx0aWYgKCFibG9jaykge1xuXHRcdFx0YmxvY2sgPSBjcmVhdGVfZWFjaF9ibG9jayhrZXksIGNoaWxkX2N0eCk7XG5cdFx0XHRibG9jay5jKCk7XG5cdFx0fSBlbHNlIGlmIChkeW5hbWljKSB7XG5cdFx0XHRibG9jay5wKGNoYW5nZWQsIGNoaWxkX2N0eCk7XG5cdFx0fVxuXG5cdFx0bmV3X2xvb2t1cC5zZXQoa2V5LCBuZXdfYmxvY2tzW2ldID0gYmxvY2spO1xuXG5cdFx0aWYgKGtleSBpbiBvbGRfaW5kZXhlcykgZGVsdGFzLnNldChrZXksIE1hdGguYWJzKGkgLSBvbGRfaW5kZXhlc1trZXldKSk7XG5cdH1cblxuXHRjb25zdCB3aWxsX21vdmUgPSBuZXcgU2V0KCk7XG5cdGNvbnN0IGRpZF9tb3ZlID0gbmV3IFNldCgpO1xuXG5cdGZ1bmN0aW9uIGluc2VydChibG9jaykge1xuXHRcdGlmIChibG9jay5pKSBibG9jay5pKDEpO1xuXHRcdGJsb2NrLm0obm9kZSwgbmV4dCk7XG5cdFx0bG9va3VwLnNldChibG9jay5rZXksIGJsb2NrKTtcblx0XHRuZXh0ID0gYmxvY2suZmlyc3Q7XG5cdFx0bi0tO1xuXHR9XG5cblx0d2hpbGUgKG8gJiYgbikge1xuXHRcdGNvbnN0IG5ld19ibG9jayA9IG5ld19ibG9ja3NbbiAtIDFdO1xuXHRcdGNvbnN0IG9sZF9ibG9jayA9IG9sZF9ibG9ja3NbbyAtIDFdO1xuXHRcdGNvbnN0IG5ld19rZXkgPSBuZXdfYmxvY2sua2V5O1xuXHRcdGNvbnN0IG9sZF9rZXkgPSBvbGRfYmxvY2sua2V5O1xuXG5cdFx0aWYgKG5ld19ibG9jayA9PT0gb2xkX2Jsb2NrKSB7XG5cdFx0XHQvLyBkbyBub3RoaW5nXG5cdFx0XHRuZXh0ID0gbmV3X2Jsb2NrLmZpcnN0O1xuXHRcdFx0by0tO1xuXHRcdFx0bi0tO1xuXHRcdH1cblxuXHRcdGVsc2UgaWYgKCFuZXdfbG9va3VwLmhhcyhvbGRfa2V5KSkge1xuXHRcdFx0Ly8gcmVtb3ZlIG9sZCBibG9ja1xuXHRcdFx0ZGVzdHJveShvbGRfYmxvY2ssIGxvb2t1cCk7XG5cdFx0XHRvLS07XG5cdFx0fVxuXG5cdFx0ZWxzZSBpZiAoIWxvb2t1cC5oYXMobmV3X2tleSkgfHwgd2lsbF9tb3ZlLmhhcyhuZXdfa2V5KSkge1xuXHRcdFx0aW5zZXJ0KG5ld19ibG9jayk7XG5cdFx0fVxuXG5cdFx0ZWxzZSBpZiAoZGlkX21vdmUuaGFzKG9sZF9rZXkpKSB7XG5cdFx0XHRvLS07XG5cblx0XHR9IGVsc2UgaWYgKGRlbHRhcy5nZXQobmV3X2tleSkgPiBkZWx0YXMuZ2V0KG9sZF9rZXkpKSB7XG5cdFx0XHRkaWRfbW92ZS5hZGQobmV3X2tleSk7XG5cdFx0XHRpbnNlcnQobmV3X2Jsb2NrKTtcblxuXHRcdH0gZWxzZSB7XG5cdFx0XHR3aWxsX21vdmUuYWRkKG9sZF9rZXkpO1xuXHRcdFx0by0tO1xuXHRcdH1cblx0fVxuXG5cdHdoaWxlIChvLS0pIHtcblx0XHRjb25zdCBvbGRfYmxvY2sgPSBvbGRfYmxvY2tzW29dO1xuXHRcdGlmICghbmV3X2xvb2t1cC5oYXMob2xkX2Jsb2NrLmtleSkpIGRlc3Ryb3kob2xkX2Jsb2NrLCBsb29rdXApO1xuXHR9XG5cblx0d2hpbGUgKG4pIGluc2VydChuZXdfYmxvY2tzW24gLSAxXSk7XG5cblx0cmV0dXJuIG5ld19ibG9ja3M7XG59XG5cbmZ1bmN0aW9uIG1lYXN1cmUoYmxvY2tzKSB7XG5cdGNvbnN0IHJlY3RzID0ge307XG5cdGxldCBpID0gYmxvY2tzLmxlbmd0aDtcblx0d2hpbGUgKGktLSkgcmVjdHNbYmxvY2tzW2ldLmtleV0gPSBibG9ja3NbaV0ubm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0cmV0dXJuIHJlY3RzO1xufVxuXG5mdW5jdGlvbiBnZXRfc3ByZWFkX3VwZGF0ZShsZXZlbHMsIHVwZGF0ZXMpIHtcblx0Y29uc3QgdXBkYXRlID0ge307XG5cblx0Y29uc3QgdG9fbnVsbF9vdXQgPSB7fTtcblx0Y29uc3QgYWNjb3VudGVkX2ZvciA9IHsgJCRzY29wZTogMSB9O1xuXG5cdGxldCBpID0gbGV2ZWxzLmxlbmd0aDtcblx0d2hpbGUgKGktLSkge1xuXHRcdGNvbnN0IG8gPSBsZXZlbHNbaV07XG5cdFx0Y29uc3QgbiA9IHVwZGF0ZXNbaV07XG5cblx0XHRpZiAobikge1xuXHRcdFx0Zm9yIChjb25zdCBrZXkgaW4gbykge1xuXHRcdFx0XHRpZiAoIShrZXkgaW4gbikpIHRvX251bGxfb3V0W2tleV0gPSAxO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKGNvbnN0IGtleSBpbiBuKSB7XG5cdFx0XHRcdGlmICghYWNjb3VudGVkX2ZvcltrZXldKSB7XG5cdFx0XHRcdFx0dXBkYXRlW2tleV0gPSBuW2tleV07XG5cdFx0XHRcdFx0YWNjb3VudGVkX2ZvcltrZXldID0gMTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRsZXZlbHNbaV0gPSBuO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb3IgKGNvbnN0IGtleSBpbiBvKSB7XG5cdFx0XHRcdGFjY291bnRlZF9mb3Jba2V5XSA9IDE7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Zm9yIChjb25zdCBrZXkgaW4gdG9fbnVsbF9vdXQpIHtcblx0XHRpZiAoIShrZXkgaW4gdXBkYXRlKSkgdXBkYXRlW2tleV0gPSB1bmRlZmluZWQ7XG5cdH1cblxuXHRyZXR1cm4gdXBkYXRlO1xufVxuXG5jb25zdCBpbnZhbGlkX2F0dHJpYnV0ZV9uYW1lX2NoYXJhY3RlciA9IC9bXFxzJ1wiPi89XFx1e0ZERDB9LVxcdXtGREVGfVxcdXtGRkZFfVxcdXtGRkZGfVxcdXsxRkZGRX1cXHV7MUZGRkZ9XFx1ezJGRkZFfVxcdXsyRkZGRn1cXHV7M0ZGRkV9XFx1ezNGRkZGfVxcdXs0RkZGRX1cXHV7NEZGRkZ9XFx1ezVGRkZFfVxcdXs1RkZGRn1cXHV7NkZGRkV9XFx1ezZGRkZGfVxcdXs3RkZGRX1cXHV7N0ZGRkZ9XFx1ezhGRkZFfVxcdXs4RkZGRn1cXHV7OUZGRkV9XFx1ezlGRkZGfVxcdXtBRkZGRX1cXHV7QUZGRkZ9XFx1e0JGRkZFfVxcdXtCRkZGRn1cXHV7Q0ZGRkV9XFx1e0NGRkZGfVxcdXtERkZGRX1cXHV7REZGRkZ9XFx1e0VGRkZFfVxcdXtFRkZGRn1cXHV7RkZGRkV9XFx1e0ZGRkZGfVxcdXsxMEZGRkV9XFx1ezEwRkZGRn1dL3U7XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zeW50YXguaHRtbCNhdHRyaWJ1dGVzLTJcbi8vIGh0dHBzOi8vaW5mcmEuc3BlYy53aGF0d2cub3JnLyNub25jaGFyYWN0ZXJcblxuZnVuY3Rpb24gc3ByZWFkKGFyZ3MpIHtcblx0Y29uc3QgYXR0cmlidXRlcyA9IE9iamVjdC5hc3NpZ24oe30sIC4uLmFyZ3MpO1xuXHRsZXQgc3RyID0gJyc7XG5cblx0T2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChuYW1lID0+IHtcblx0XHRpZiAoaW52YWxpZF9hdHRyaWJ1dGVfbmFtZV9jaGFyYWN0ZXIudGVzdChuYW1lKSkgcmV0dXJuO1xuXG5cdFx0Y29uc3QgdmFsdWUgPSBhdHRyaWJ1dGVzW25hbWVdO1xuXHRcdGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG5cdFx0aWYgKHZhbHVlID09PSB0cnVlKSBzdHIgKz0gXCIgXCIgKyBuYW1lO1xuXG5cdFx0Y29uc3QgZXNjYXBlZCA9IFN0cmluZyh2YWx1ZSlcblx0XHRcdC5yZXBsYWNlKC9cIi9nLCAnJiMzNDsnKVxuXHRcdFx0LnJlcGxhY2UoLycvZywgJyYjMzk7Jyk7XG5cblx0XHRzdHIgKz0gXCIgXCIgKyBuYW1lICsgXCI9XCIgKyBKU09OLnN0cmluZ2lmeShlc2NhcGVkKTtcblx0fSk7XG5cblx0cmV0dXJuIHN0cjtcbn1cblxuY29uc3QgZXNjYXBlZCA9IHtcblx0J1wiJzogJyZxdW90OycsXG5cdFwiJ1wiOiAnJiMzOTsnLFxuXHQnJic6ICcmYW1wOycsXG5cdCc8JzogJyZsdDsnLFxuXHQnPic6ICcmZ3Q7J1xufTtcblxuZnVuY3Rpb24gZXNjYXBlKGh0bWwpIHtcblx0cmV0dXJuIFN0cmluZyhodG1sKS5yZXBsYWNlKC9bXCInJjw+XS9nLCBtYXRjaCA9PiBlc2NhcGVkW21hdGNoXSk7XG59XG5cbmZ1bmN0aW9uIGVhY2goaXRlbXMsIGZuKSB7XG5cdGxldCBzdHIgPSAnJztcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdHN0ciArPSBmbihpdGVtc1tpXSwgaSk7XG5cdH1cblx0cmV0dXJuIHN0cjtcbn1cblxuY29uc3QgbWlzc2luZ19jb21wb25lbnQgPSB7XG5cdCQkcmVuZGVyOiAoKSA9PiAnJ1xufTtcblxuZnVuY3Rpb24gdmFsaWRhdGVfY29tcG9uZW50KGNvbXBvbmVudCwgbmFtZSkge1xuXHRpZiAoIWNvbXBvbmVudCB8fCAhY29tcG9uZW50LiQkcmVuZGVyKSB7XG5cdFx0aWYgKG5hbWUgPT09ICdzdmVsdGU6Y29tcG9uZW50JykgbmFtZSArPSAnIHRoaXM9ey4uLn0nO1xuXHRcdHRocm93IG5ldyBFcnJvcihgPCR7bmFtZX0+IGlzIG5vdCBhIHZhbGlkIFNTUiBjb21wb25lbnQuIFlvdSBtYXkgbmVlZCB0byByZXZpZXcgeW91ciBidWlsZCBjb25maWcgdG8gZW5zdXJlIHRoYXQgZGVwZW5kZW5jaWVzIGFyZSBjb21waWxlZCwgcmF0aGVyIHRoYW4gaW1wb3J0ZWQgYXMgcHJlLWNvbXBpbGVkIG1vZHVsZXNgKTtcblx0fVxuXG5cdHJldHVybiBjb21wb25lbnQ7XG59XG5cbmZ1bmN0aW9uIGRlYnVnKGZpbGUsIGxpbmUsIGNvbHVtbiwgdmFsdWVzKSB7XG5cdGNvbnNvbGUubG9nKGB7QGRlYnVnfSAke2ZpbGUgPyBmaWxlICsgJyAnIDogJyd9KCR7bGluZX06JHtjb2x1bW59KWApOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcblx0Y29uc29sZS5sb2codmFsdWVzKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG5cdHJldHVybiAnJztcbn1cblxubGV0IG9uX2Rlc3Ryb3k7XG5cbmZ1bmN0aW9uIGNyZWF0ZV9zc3JfY29tcG9uZW50KGZuKSB7XG5cdGZ1bmN0aW9uICQkcmVuZGVyKHJlc3VsdCwgcHJvcHMsIGJpbmRpbmdzLCBzbG90cykge1xuXHRcdGNvbnN0IHBhcmVudF9jb21wb25lbnQgPSBjdXJyZW50X2NvbXBvbmVudDtcblxuXHRcdGNvbnN0ICQkID0ge1xuXHRcdFx0b25fZGVzdHJveSxcblx0XHRcdGNvbnRleHQ6IG5ldyBNYXAocGFyZW50X2NvbXBvbmVudCA/IHBhcmVudF9jb21wb25lbnQuJCQuY29udGV4dCA6IFtdKSxcblxuXHRcdFx0Ly8gdGhlc2Ugd2lsbCBiZSBpbW1lZGlhdGVseSBkaXNjYXJkZWRcblx0XHRcdG9uX21vdW50OiBbXSxcblx0XHRcdGJlZm9yZV9yZW5kZXI6IFtdLFxuXHRcdFx0YWZ0ZXJfcmVuZGVyOiBbXSxcblx0XHRcdGNhbGxiYWNrczogYmxhbmtfb2JqZWN0KClcblx0XHR9O1xuXG5cdFx0c2V0X2N1cnJlbnRfY29tcG9uZW50KHsgJCQgfSk7XG5cblx0XHRjb25zdCBodG1sID0gZm4ocmVzdWx0LCBwcm9wcywgYmluZGluZ3MsIHNsb3RzKTtcblxuXHRcdHNldF9jdXJyZW50X2NvbXBvbmVudChwYXJlbnRfY29tcG9uZW50KTtcblx0XHRyZXR1cm4gaHRtbDtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0cmVuZGVyOiAocHJvcHMgPSB7fSwgb3B0aW9ucyA9IHt9KSA9PiB7XG5cdFx0XHRvbl9kZXN0cm95ID0gW107XG5cblx0XHRcdGNvbnN0IHJlc3VsdCA9IHsgaGVhZDogJycsIGNzczogbmV3IFNldCgpIH07XG5cdFx0XHRjb25zdCBodG1sID0gJCRyZW5kZXIocmVzdWx0LCBwcm9wcywge30sIG9wdGlvbnMpO1xuXG5cdFx0XHRydW5fYWxsKG9uX2Rlc3Ryb3kpO1xuXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRodG1sLFxuXHRcdFx0XHRjc3M6IHtcblx0XHRcdFx0XHRjb2RlOiBBcnJheS5mcm9tKHJlc3VsdC5jc3MpLm1hcChjc3MgPT4gY3NzLmNvZGUpLmpvaW4oJ1xcbicpLFxuXHRcdFx0XHRcdG1hcDogbnVsbCAvLyBUT0RPXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGhlYWQ6IHJlc3VsdC5oZWFkXG5cdFx0XHR9O1xuXHRcdH0sXG5cblx0XHQkJHJlbmRlclxuXHR9O1xufVxuXG5mdW5jdGlvbiBnZXRfc3RvcmVfdmFsdWUoc3RvcmUpIHtcblx0bGV0IHZhbHVlO1xuXHRzdG9yZS5zdWJzY3JpYmUoXyA9PiB2YWx1ZSA9IF8pKCk7XG5cdHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gYmluZChjb21wb25lbnQsIG5hbWUsIGNhbGxiYWNrKSB7XG5cdGlmIChjb21wb25lbnQuJCQucHJvcHMuaW5kZXhPZihuYW1lKSA9PT0gLTEpIHJldHVybjtcblx0Y29tcG9uZW50LiQkLmJvdW5kW25hbWVdID0gY2FsbGJhY2s7XG5cdGNhbGxiYWNrKGNvbXBvbmVudC4kJC5jdHhbbmFtZV0pO1xufVxuXG5mdW5jdGlvbiBtb3VudF9jb21wb25lbnQoY29tcG9uZW50LCB0YXJnZXQsIGFuY2hvcikge1xuXHRjb25zdCB7IGZyYWdtZW50LCBvbl9tb3VudCwgb25fZGVzdHJveSwgYWZ0ZXJfcmVuZGVyIH0gPSBjb21wb25lbnQuJCQ7XG5cblx0ZnJhZ21lbnQubSh0YXJnZXQsIGFuY2hvcik7XG5cblx0Ly8gb25Nb3VudCBoYXBwZW5zIGFmdGVyIHRoZSBpbml0aWFsIGFmdGVyVXBkYXRlLiBCZWNhdXNlXG5cdC8vIGFmdGVyVXBkYXRlIGNhbGxiYWNrcyBoYXBwZW4gaW4gcmV2ZXJzZSBvcmRlciAoaW5uZXIgZmlyc3QpXG5cdC8vIHdlIHNjaGVkdWxlIG9uTW91bnQgY2FsbGJhY2tzIGJlZm9yZSBhZnRlclVwZGF0ZSBjYWxsYmFja3Ncblx0YWRkX3JlbmRlcl9jYWxsYmFjaygoKSA9PiB7XG5cdFx0Y29uc3QgbmV3X29uX2Rlc3Ryb3kgPSBvbl9tb3VudC5tYXAocnVuKS5maWx0ZXIoaXNfZnVuY3Rpb24pO1xuXHRcdGlmIChvbl9kZXN0cm95KSB7XG5cdFx0XHRvbl9kZXN0cm95LnB1c2goLi4ubmV3X29uX2Rlc3Ryb3kpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBFZGdlIGNhc2UgLSBjb21wb25lbnQgd2FzIGRlc3Ryb3llZCBpbW1lZGlhdGVseSxcblx0XHRcdC8vIG1vc3QgbGlrZWx5IGFzIGEgcmVzdWx0IG9mIGEgYmluZGluZyBpbml0aWFsaXNpbmdcblx0XHRcdHJ1bl9hbGwobmV3X29uX2Rlc3Ryb3kpO1xuXHRcdH1cblx0XHRjb21wb25lbnQuJCQub25fbW91bnQgPSBbXTtcblx0fSk7XG5cblx0YWZ0ZXJfcmVuZGVyLmZvckVhY2goYWRkX3JlbmRlcl9jYWxsYmFjayk7XG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3koY29tcG9uZW50LCBkZXRhY2hpbmcpIHtcblx0aWYgKGNvbXBvbmVudC4kJCkge1xuXHRcdHJ1bl9hbGwoY29tcG9uZW50LiQkLm9uX2Rlc3Ryb3kpO1xuXHRcdGNvbXBvbmVudC4kJC5mcmFnbWVudC5kKGRldGFjaGluZyk7XG5cblx0XHQvLyBUT0RPIG51bGwgb3V0IG90aGVyIHJlZnMsIGluY2x1ZGluZyBjb21wb25lbnQuJCQgKGJ1dCBuZWVkIHRvXG5cdFx0Ly8gcHJlc2VydmUgZmluYWwgc3RhdGU/KVxuXHRcdGNvbXBvbmVudC4kJC5vbl9kZXN0cm95ID0gY29tcG9uZW50LiQkLmZyYWdtZW50ID0gbnVsbDtcblx0XHRjb21wb25lbnQuJCQuY3R4ID0ge307XG5cdH1cbn1cblxuZnVuY3Rpb24gbWFrZV9kaXJ0eShjb21wb25lbnQsIGtleSkge1xuXHRpZiAoIWNvbXBvbmVudC4kJC5kaXJ0eSkge1xuXHRcdGRpcnR5X2NvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuXHRcdHNjaGVkdWxlX3VwZGF0ZSgpO1xuXHRcdGNvbXBvbmVudC4kJC5kaXJ0eSA9IGJsYW5rX29iamVjdCgpO1xuXHR9XG5cdGNvbXBvbmVudC4kJC5kaXJ0eVtrZXldID0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaW5pdChjb21wb25lbnQsIG9wdGlvbnMsIGluc3RhbmNlLCBjcmVhdGVfZnJhZ21lbnQsIG5vdF9lcXVhbCQkMSwgcHJvcF9uYW1lcykge1xuXHRjb25zdCBwYXJlbnRfY29tcG9uZW50ID0gY3VycmVudF9jb21wb25lbnQ7XG5cdHNldF9jdXJyZW50X2NvbXBvbmVudChjb21wb25lbnQpO1xuXG5cdGNvbnN0IHByb3BzID0gb3B0aW9ucy5wcm9wcyB8fCB7fTtcblxuXHRjb25zdCAkJCA9IGNvbXBvbmVudC4kJCA9IHtcblx0XHRmcmFnbWVudDogbnVsbCxcblx0XHRjdHg6IG51bGwsXG5cblx0XHQvLyBzdGF0ZVxuXHRcdHByb3BzOiBwcm9wX25hbWVzLFxuXHRcdHVwZGF0ZTogbm9vcCxcblx0XHRub3RfZXF1YWw6IG5vdF9lcXVhbCQkMSxcblx0XHRib3VuZDogYmxhbmtfb2JqZWN0KCksXG5cblx0XHQvLyBsaWZlY3ljbGVcblx0XHRvbl9tb3VudDogW10sXG5cdFx0b25fZGVzdHJveTogW10sXG5cdFx0YmVmb3JlX3JlbmRlcjogW10sXG5cdFx0YWZ0ZXJfcmVuZGVyOiBbXSxcblx0XHRjb250ZXh0OiBuZXcgTWFwKHBhcmVudF9jb21wb25lbnQgPyBwYXJlbnRfY29tcG9uZW50LiQkLmNvbnRleHQgOiBbXSksXG5cblx0XHQvLyBldmVyeXRoaW5nIGVsc2Vcblx0XHRjYWxsYmFja3M6IGJsYW5rX29iamVjdCgpLFxuXHRcdGRpcnR5OiBudWxsXG5cdH07XG5cblx0bGV0IHJlYWR5ID0gZmFsc2U7XG5cblx0JCQuY3R4ID0gaW5zdGFuY2Vcblx0XHQ/IGluc3RhbmNlKGNvbXBvbmVudCwgcHJvcHMsIChrZXksIHZhbHVlKSA9PiB7XG5cdFx0XHRpZiAoJCQuY3R4ICYmIG5vdF9lcXVhbCQkMSgkJC5jdHhba2V5XSwgJCQuY3R4W2tleV0gPSB2YWx1ZSkpIHtcblx0XHRcdFx0aWYgKCQkLmJvdW5kW2tleV0pICQkLmJvdW5kW2tleV0odmFsdWUpO1xuXHRcdFx0XHRpZiAocmVhZHkpIG1ha2VfZGlydHkoY29tcG9uZW50LCBrZXkpO1xuXHRcdFx0fVxuXHRcdH0pXG5cdFx0OiBwcm9wcztcblxuXHQkJC51cGRhdGUoKTtcblx0cmVhZHkgPSB0cnVlO1xuXHRydW5fYWxsKCQkLmJlZm9yZV9yZW5kZXIpO1xuXHQkJC5mcmFnbWVudCA9IGNyZWF0ZV9mcmFnbWVudCgkJC5jdHgpO1xuXG5cdGlmIChvcHRpb25zLnRhcmdldCkge1xuXHRcdGlmIChvcHRpb25zLmh5ZHJhdGUpIHtcblx0XHRcdCQkLmZyYWdtZW50LmwoY2hpbGRyZW4ob3B0aW9ucy50YXJnZXQpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JCQuZnJhZ21lbnQuYygpO1xuXHRcdH1cblxuXHRcdGlmIChvcHRpb25zLmludHJvICYmIGNvbXBvbmVudC4kJC5mcmFnbWVudC5pKSBjb21wb25lbnQuJCQuZnJhZ21lbnQuaSgpO1xuXHRcdG1vdW50X2NvbXBvbmVudChjb21wb25lbnQsIG9wdGlvbnMudGFyZ2V0LCBvcHRpb25zLmFuY2hvcik7XG5cdFx0Zmx1c2goKTtcblx0fVxuXG5cdHNldF9jdXJyZW50X2NvbXBvbmVudChwYXJlbnRfY29tcG9uZW50KTtcbn1cblxubGV0IFN2ZWx0ZUVsZW1lbnQ7XG5pZiAodHlwZW9mIEhUTUxFbGVtZW50ICE9PSAndW5kZWZpbmVkJykge1xuXHRTdmVsdGVFbGVtZW50ID0gY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG5cdFx0Y29uc3RydWN0b3IoKSB7XG5cdFx0XHRzdXBlcigpO1xuXHRcdFx0dGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG5cdFx0fVxuXG5cdFx0Y29ubmVjdGVkQ2FsbGJhY2soKSB7XG5cdFx0XHRmb3IgKGNvbnN0IGtleSBpbiB0aGlzLiQkLnNsb3R0ZWQpIHtcblx0XHRcdFx0dGhpcy5hcHBlbmRDaGlsZCh0aGlzLiQkLnNsb3R0ZWRba2V5XSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0YXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGF0dHIkJDEsIG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuXHRcdFx0dGhpc1thdHRyJCQxXSA9IG5ld1ZhbHVlO1xuXHRcdH1cblxuXHRcdCRkZXN0cm95KCkge1xuXHRcdFx0ZGVzdHJveSh0aGlzLCB0cnVlKTtcblx0XHRcdHRoaXMuJGRlc3Ryb3kgPSBub29wO1xuXHRcdH1cblxuXHRcdCRvbih0eXBlLCBjYWxsYmFjaykge1xuXHRcdFx0Ly8gVE9ETyBzaG91bGQgdGhpcyBkZWxlZ2F0ZSB0byBhZGRFdmVudExpc3RlbmVyP1xuXHRcdFx0Y29uc3QgY2FsbGJhY2tzID0gKHRoaXMuJCQuY2FsbGJhY2tzW3R5cGVdIHx8ICh0aGlzLiQkLmNhbGxiYWNrc1t0eXBlXSA9IFtdKSk7XG5cdFx0XHRjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG5cblx0XHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRcdGNvbnN0IGluZGV4ID0gY2FsbGJhY2tzLmluZGV4T2YoY2FsbGJhY2spO1xuXHRcdFx0XHRpZiAoaW5kZXggIT09IC0xKSBjYWxsYmFja3Muc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0JHNldCgpIHtcblx0XHRcdC8vIG92ZXJyaWRkZW4gYnkgaW5zdGFuY2UsIGlmIGl0IGhhcyBwcm9wc1xuXHRcdH1cblx0fTtcbn1cblxuY2xhc3MgU3ZlbHRlQ29tcG9uZW50IHtcblx0JGRlc3Ryb3koKSB7XG5cdFx0ZGVzdHJveSh0aGlzLCB0cnVlKTtcblx0XHR0aGlzLiRkZXN0cm95ID0gbm9vcDtcblx0fVxuXG5cdCRvbih0eXBlLCBjYWxsYmFjaykge1xuXHRcdGNvbnN0IGNhbGxiYWNrcyA9ICh0aGlzLiQkLmNhbGxiYWNrc1t0eXBlXSB8fCAodGhpcy4kJC5jYWxsYmFja3NbdHlwZV0gPSBbXSkpO1xuXHRcdGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcblxuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRjb25zdCBpbmRleCA9IGNhbGxiYWNrcy5pbmRleE9mKGNhbGxiYWNrKTtcblx0XHRcdGlmIChpbmRleCAhPT0gLTEpIGNhbGxiYWNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdH07XG5cdH1cblxuXHQkc2V0KCkge1xuXHRcdC8vIG92ZXJyaWRkZW4gYnkgaW5zdGFuY2UsIGlmIGl0IGhhcyBwcm9wc1xuXHR9XG59XG5cbmNsYXNzIFN2ZWx0ZUNvbXBvbmVudERldiBleHRlbmRzIFN2ZWx0ZUNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcblx0XHRpZiAoIW9wdGlvbnMgfHwgKCFvcHRpb25zLnRhcmdldCAmJiAhb3B0aW9ucy4kJGlubGluZSkpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgJ3RhcmdldCcgaXMgYSByZXF1aXJlZCBvcHRpb25gKTtcblx0XHR9XG5cblx0XHRzdXBlcigpO1xuXHR9XG5cblx0JGRlc3Ryb3koKSB7XG5cdFx0c3VwZXIuJGRlc3Ryb3koKTtcblx0XHR0aGlzLiRkZXN0cm95ID0gKCkgPT4ge1xuXHRcdFx0Y29uc29sZS53YXJuKGBDb21wb25lbnQgd2FzIGFscmVhZHkgZGVzdHJveWVkYCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuXHRcdH07XG5cdH1cbn1cblxuZXhwb3J0IHsgY3JlYXRlX2FuaW1hdGlvbiwgZml4X3Bvc2l0aW9uLCBoYW5kbGVfcHJvbWlzZSwgYXBwZW5kLCBpbnNlcnQsIGRldGFjaCwgZGV0YWNoX2JldHdlZW4sIGRldGFjaF9iZWZvcmUsIGRldGFjaF9hZnRlciwgZGVzdHJveV9lYWNoLCBlbGVtZW50LCBvYmplY3Rfd2l0aG91dF9wcm9wZXJ0aWVzLCBzdmdfZWxlbWVudCwgdGV4dCwgc3BhY2UsIGVtcHR5LCBsaXN0ZW4sIHByZXZlbnRfZGVmYXVsdCwgc3RvcF9wcm9wYWdhdGlvbiwgYXR0ciwgc2V0X2F0dHJpYnV0ZXMsIHNldF9jdXN0b21fZWxlbWVudF9kYXRhLCB4bGlua19hdHRyLCBnZXRfYmluZGluZ19ncm91cF92YWx1ZSwgdG9fbnVtYmVyLCB0aW1lX3Jhbmdlc190b19hcnJheSwgY2hpbGRyZW4sIGNsYWltX2VsZW1lbnQsIGNsYWltX3RleHQsIHNldF9kYXRhLCBzZXRfaW5wdXRfdHlwZSwgc2V0X3N0eWxlLCBzZWxlY3Rfb3B0aW9uLCBzZWxlY3Rfb3B0aW9ucywgc2VsZWN0X3ZhbHVlLCBzZWxlY3RfbXVsdGlwbGVfdmFsdWUsIGFkZF9yZXNpemVfbGlzdGVuZXIsIHRvZ2dsZV9jbGFzcywgY3VzdG9tX2V2ZW50LCBkZXN0cm95X2Jsb2NrLCBvdXRyb19hbmRfZGVzdHJveV9ibG9jaywgZml4X2FuZF9vdXRyb19hbmRfZGVzdHJveV9ibG9jaywgdXBkYXRlX2tleWVkX2VhY2gsIG1lYXN1cmUsIGN1cnJlbnRfY29tcG9uZW50LCBzZXRfY3VycmVudF9jb21wb25lbnQsIGJlZm9yZVVwZGF0ZSwgb25Nb3VudCwgYWZ0ZXJVcGRhdGUsIG9uRGVzdHJveSwgY3JlYXRlRXZlbnREaXNwYXRjaGVyLCBzZXRDb250ZXh0LCBnZXRDb250ZXh0LCBidWJibGUsIGNsZWFyX2xvb3BzLCBsb29wLCBkaXJ0eV9jb21wb25lbnRzLCBpbnRyb3MsIHNjaGVkdWxlX3VwZGF0ZSwgdGljaywgYWRkX2JpbmRpbmdfY2FsbGJhY2ssIGFkZF9yZW5kZXJfY2FsbGJhY2ssIGFkZF9mbHVzaF9jYWxsYmFjaywgZmx1c2gsIGdldF9zcHJlYWRfdXBkYXRlLCBpbnZhbGlkX2F0dHJpYnV0ZV9uYW1lX2NoYXJhY3Rlciwgc3ByZWFkLCBlc2NhcGVkLCBlc2NhcGUsIGVhY2gsIG1pc3NpbmdfY29tcG9uZW50LCB2YWxpZGF0ZV9jb21wb25lbnQsIGRlYnVnLCBjcmVhdGVfc3NyX2NvbXBvbmVudCwgZ2V0X3N0b3JlX3ZhbHVlLCBncm91cF9vdXRyb3MsIGNoZWNrX291dHJvcywgb25fb3V0cm8sIGNyZWF0ZV9pbl90cmFuc2l0aW9uLCBjcmVhdGVfb3V0X3RyYW5zaXRpb24sIGNyZWF0ZV9iaWRpcmVjdGlvbmFsX3RyYW5zaXRpb24sIG5vb3AsIGlkZW50aXR5LCBhc3NpZ24sIGlzX3Byb21pc2UsIGFkZF9sb2NhdGlvbiwgcnVuLCBibGFua19vYmplY3QsIHJ1bl9hbGwsIGlzX2Z1bmN0aW9uLCBzYWZlX25vdF9lcXVhbCwgbm90X2VxdWFsLCB2YWxpZGF0ZV9zdG9yZSwgc3Vic2NyaWJlLCBjcmVhdGVfc2xvdCwgZ2V0X3Nsb3RfY29udGV4dCwgZ2V0X3Nsb3RfY2hhbmdlcywgZXhjbHVkZV9pbnRlcm5hbF9wcm9wcywgbm93LCBzZXRfbm93LCBiaW5kLCBtb3VudF9jb21wb25lbnQsIGluaXQsIFN2ZWx0ZUVsZW1lbnQsIFN2ZWx0ZUNvbXBvbmVudCwgU3ZlbHRlQ29tcG9uZW50RGV2IH07XG4iLCJmdW5jdGlvbiBub29wKCkge31cblxuZnVuY3Rpb24gcnVuKGZuKSB7XG5cdHJldHVybiBmbigpO1xufVxuXG5mdW5jdGlvbiBydW5fYWxsKGZucykge1xuXHRmbnMuZm9yRWFjaChydW4pO1xufVxuXG5mdW5jdGlvbiBpc19mdW5jdGlvbih0aGluZykge1xuXHRyZXR1cm4gdHlwZW9mIHRoaW5nID09PSAnZnVuY3Rpb24nO1xufVxuXG5mdW5jdGlvbiBzYWZlX25vdF9lcXVhbChhLCBiKSB7XG5cdHJldHVybiBhICE9IGEgPyBiID09IGIgOiBhICE9PSBiIHx8ICgoYSAmJiB0eXBlb2YgYSA9PT0gJ29iamVjdCcpIHx8IHR5cGVvZiBhID09PSAnZnVuY3Rpb24nKTtcbn1cblxuZnVuY3Rpb24gcmVhZGFibGUodmFsdWUsIHN0YXJ0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3Vic2NyaWJlOiB3cml0YWJsZSh2YWx1ZSwgc3RhcnQpLnN1YnNjcmliZSxcbiAgICB9O1xufVxuZnVuY3Rpb24gd3JpdGFibGUodmFsdWUsIHN0YXJ0ID0gbm9vcCkge1xuICAgIGxldCBzdG9wO1xuICAgIGNvbnN0IHN1YnNjcmliZXJzID0gW107XG4gICAgZnVuY3Rpb24gc2V0KG5ld192YWx1ZSkge1xuICAgICAgICBpZiAoc2FmZV9ub3RfZXF1YWwodmFsdWUsIG5ld192YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gbmV3X3ZhbHVlO1xuICAgICAgICAgICAgaWYgKCFzdG9wKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuOyAvLyBub3QgcmVhZHlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN1YnNjcmliZXJzLmZvckVhY2goKHMpID0+IHNbMV0oKSk7XG4gICAgICAgICAgICBzdWJzY3JpYmVycy5mb3JFYWNoKChzKSA9PiBzWzBdKHZhbHVlKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdXBkYXRlKGZuKSB7XG4gICAgICAgIHNldChmbih2YWx1ZSkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzdWJzY3JpYmUkJDEocnVuJCQxLCBpbnZhbGlkYXRlID0gbm9vcCkge1xuICAgICAgICBjb25zdCBzdWJzY3JpYmVyID0gW3J1biQkMSwgaW52YWxpZGF0ZV07XG4gICAgICAgIHN1YnNjcmliZXJzLnB1c2goc3Vic2NyaWJlcik7XG4gICAgICAgIGlmIChzdWJzY3JpYmVycy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHN0b3AgPSBzdGFydChzZXQpIHx8IG5vb3A7XG4gICAgICAgIH1cbiAgICAgICAgcnVuJCQxKHZhbHVlKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gc3Vic2NyaWJlcnMuaW5kZXhPZihzdWJzY3JpYmVyKTtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN1YnNjcmliZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHsgc2V0LCB1cGRhdGUsIHN1YnNjcmliZTogc3Vic2NyaWJlJCQxIH07XG59XG5mdW5jdGlvbiBkZXJpdmVkKHN0b3JlcywgZm4sIGluaXRpYWxfdmFsdWUpIHtcbiAgICBjb25zdCBzaW5nbGUgPSAhQXJyYXkuaXNBcnJheShzdG9yZXMpO1xuICAgIGNvbnN0IHN0b3Jlc19hcnJheSA9IHNpbmdsZVxuICAgICAgICA/IFtzdG9yZXNdXG4gICAgICAgIDogc3RvcmVzO1xuICAgIGNvbnN0IGF1dG8gPSBmbi5sZW5ndGggPCAyO1xuICAgIHJldHVybiByZWFkYWJsZShpbml0aWFsX3ZhbHVlLCAoc2V0KSA9PiB7XG4gICAgICAgIGxldCBpbml0ZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gW107XG4gICAgICAgIGxldCBwZW5kaW5nID0gMDtcbiAgICAgICAgbGV0IGNsZWFudXAgPSBub29wO1xuICAgICAgICBjb25zdCBzeW5jID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHBlbmRpbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmbihzaW5nbGUgPyB2YWx1ZXNbMF0gOiB2YWx1ZXMsIHNldCk7XG4gICAgICAgICAgICBpZiAoYXV0bykge1xuICAgICAgICAgICAgICAgIHNldChyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2xlYW51cCA9IGlzX2Z1bmN0aW9uKHJlc3VsdCkgPyByZXN1bHQgOiBub29wO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCB1bnN1YnNjcmliZXJzID0gc3RvcmVzX2FycmF5Lm1hcCgoc3RvcmUsIGkpID0+IHN0b3JlLnN1YnNjcmliZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHZhbHVlc1tpXSA9IHZhbHVlO1xuICAgICAgICAgICAgcGVuZGluZyAmPSB+KDEgPDwgaSk7XG4gICAgICAgICAgICBpZiAoaW5pdGVkKSB7XG4gICAgICAgICAgICAgICAgc3luYygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICBwZW5kaW5nIHw9ICgxIDw8IGkpO1xuICAgICAgICB9KSk7XG4gICAgICAgIGluaXRlZCA9IHRydWU7XG4gICAgICAgIHN5bmMoKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgICAgICBydW5fYWxsKHVuc3Vic2NyaWJlcnMpO1xuICAgICAgICAgICAgY2xlYW51cCgpO1xuICAgICAgICB9O1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2V0KHN0b3JlKSB7XG4gICAgbGV0IHZhbHVlO1xuICAgIHN0b3JlLnN1YnNjcmliZSgoXykgPT4gdmFsdWUgPSBfKSgpO1xuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IHsgcmVhZGFibGUsIHdyaXRhYmxlLCBkZXJpdmVkLCBnZXQgfTtcbiIsImltcG9ydCAqIGFzIHNhcHBlciBmcm9tICdAc2FwcGVyL2FwcCc7XHJcbmltcG9ydCAnLi4vbm9kZV9tb2R1bGVzL2J1bG1hL2Nzcy9idWxtYS5taW4uY3NzJ1xyXG5cclxuXHJcbnNhcHBlci5zdGFydCh7XHJcblx0dGFyZ2V0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2FwcGVyJylcclxufSk7IiwiPHNjcmlwdD5cclxuICBpbXBvcnQgeyBvbk1vdW50IH0gZnJvbSBcInN2ZWx0ZVwiO1xyXG4gIGltcG9ydCBtZW51IGZyb20gXCIuLi9tZW51XCI7XHJcblxyXG4gIGV4cG9ydCBsZXQgc2VnbWVudDtcclxuXHJcbiAgb25Nb3VudChhc3luYyAoKSA9PiB7XHJcbiAgICBlbmFibGVSZXNwb25zaWJsZU1lbnUoKTtcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gZW5hYmxlUmVzcG9uc2libGVNZW51KCkge1xyXG4gICAgLy8gR2V0IGFsbCBcIm5hdmJhci1idXJnZXJcIiBlbGVtZW50c1xyXG4gICAgY29uc3QgJG5hdmJhckJ1cmdlcnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZiYXItYnVyZ2VyXCIpLFxyXG4gICAgICAwXHJcbiAgICApO1xyXG5cclxuICAgIC8vIENoZWNrIGlmIHRoZXJlIGFyZSBhbnkgbmF2YmFyIGJ1cmdlcnNcclxuICAgIGlmICgkbmF2YmFyQnVyZ2Vycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIC8vIEFkZCBhIGNsaWNrIGV2ZW50IG9uIGVhY2ggb2YgdGhlbVxyXG4gICAgICAkbmF2YmFyQnVyZ2Vycy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgLy8gR2V0IHRoZSB0YXJnZXQgZnJvbSB0aGUgXCJkYXRhLXRhcmdldFwiIGF0dHJpYnV0ZVxyXG4gICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZWwuZGF0YXNldC50YXJnZXQ7XHJcbiAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0KTtcclxuXHJcbiAgICAgICAgICAvLyBUb2dnbGUgdGhlIFwiaXMtYWN0aXZlXCIgY2xhc3Mgb24gYm90aCB0aGUgXCJuYXZiYXItYnVyZ2VyXCIgYW5kIHRoZSBcIm5hdmJhci1tZW51XCJcclxuICAgICAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoXCJpcy1hY3RpdmVcIik7XHJcbiAgICAgICAgICAkdGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoXCJpcy1hY3RpdmVcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbiAgLm5hdmJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xyXG4gIH1cclxuXHJcbiAgLnNlbGVjdGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuPC9zdHlsZT5cclxuXHJcbjxuYXYgY2xhc3M9XCJuYXZiYXJcIiByb2xlPVwibmF2aWdhdGlvblwiIGFyaWEtbGFiZWw9XCJtYWluIG5hdmlnYXRpb25cIj5cclxuICA8ZGl2IGNsYXNzPVwibmF2YmFyLWJyYW5kXCI+XHJcbiAgICA8YSBjbGFzcz1cIm5hdmJhci1pdGVtXCIgaHJlZj1cImhvbWVcIj5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIHNyYz1cImh0dHBzOi8vYnVsbWEuaW8vaW1hZ2VzL2J1bG1hLWxvZ28ucG5nXCJcclxuICAgICAgICB3aWR0aD1cIjExMlwiXHJcbiAgICAgICAgYWx0PVwiQnVsbWFcIlxyXG4gICAgICAgIGhlaWdodD1cIjI4XCIgLz5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIHNyYz1cImh0dHBzOi8vc3ZlbHRlLmRldi9zdmVsdGUtbG9nby1ob3Jpem9udGFsLnN2Z1wiXHJcbiAgICAgICAgd2lkdGg9XCIxMTJcIlxyXG4gICAgICAgIGFsdD1cIlN2ZWx0ZVwiXHJcbiAgICAgICAgaGVpZ2h0PVwiMjhcIiAvPlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgc3JjPVwiaHR0cHM6Ly9zYXBwZXIuc3ZlbHRlLmRldi9zYXBwZXItbG9nby1ob3Jpem9udGFsLnN2Z1wiXHJcbiAgICAgICAgd2lkdGg9XCIxMTJcIlxyXG4gICAgICAgIGFsdD1cIlNhcHBlclwiXHJcbiAgICAgICAgaGVpZ2h0PVwiMjhcIiAvPlxyXG4gICAgPC9hPlxyXG5cclxuXHJcbiAgXHJcblxyXG4gICAgPGFcclxuICAgICAgaHJlZj1cImphdmFzY3JpcHQ6O1wiXHJcbiAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICBjbGFzcz1cIm5hdmJhci1idXJnZXIgYnVyZ2VyXCJcclxuICAgICAgYXJpYS1sYWJlbD1cIm1lbnVcIlxyXG4gICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxyXG4gICAgICBkYXRhLXRhcmdldD1cIm5hdmJhckJhc2ljRXhhbXBsZVwiPlxyXG4gICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxyXG4gICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxyXG4gICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxyXG4gICAgPC9hPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8ZGl2IGlkPVwibmF2YmFyQmFzaWNFeGFtcGxlXCIgY2xhc3M9XCJuYXZiYXItbWVudVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cIm5hdmJhci1zdGFydFwiPlxyXG5cclxuICAgICAgeyNlYWNoIG1lbnUgYXMgaXRlbX1cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgY2xhc3M9e3NlZ21lbnQgPT09IGl0ZW1bMF0gPyAnbmF2YmFyLWl0ZW0gc2VsZWN0ZWQnIDogJ25hdmJhci1pdGVtJ31cclxuICAgICAgICAgIGhyZWY9e2l0ZW1bMF19PlxyXG4gICAgICAgICAgIHtpdGVtWzFdfVxyXG4gICAgICAgIDwvYT5cclxuICAgICAgey9lYWNofVxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJuYXZiYXItZW5kXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJuYXZiYXItaXRlbVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2RhbmllbHNjaG1pdHovc3ZlbHRlLXNhcHBlci1idWxtYS1jcnVkXCJcclxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJidXR0b24gaXMtbGlnaHRcIj5cclxuICAgICAgICAgICAgR2l0SHViXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvbmF2PlxyXG4iLCJjb25zdCBtZW51ID0gW1xyXG4gICAgW1wiaG9tZVwiLFwiSG9tZVwiXSxcclxuICAgIFtcInByb3ZpZGVyc1wiLFwiUHJvdmlkZXJzXCJdLFxyXG4gICAgW1wiY2F0ZWdvcmllc1wiLFwiQ2F0ZWdvcmllc1wiXSxcclxuICAgIFtcImFib3V0XCIsXCJBYm91dFwiXVxyXG5dXHJcbmV4cG9ydCBkZWZhdWx0IG1lbnUiLCJpbXBvcnQgeyBnZXRDb250ZXh0IH0gZnJvbSAnc3ZlbHRlJztcbmltcG9ydCB7IENPTlRFWFRfS0VZIH0gZnJvbSAnLi9pbnRlcm5hbC9zaGFyZWQnO1xuaW1wb3J0IHsgd3JpdGFibGUgfSBmcm9tICdzdmVsdGUvc3RvcmUubWpzJztcbmltcG9ydCBBcHAgZnJvbSAnLi9pbnRlcm5hbC9BcHAuc3ZlbHRlJztcbmltcG9ydCB7IGlnbm9yZSwgcm91dGVzLCByb290X3ByZWxvYWQsIGNvbXBvbmVudHMsIEVycm9yQ29tcG9uZW50IH0gZnJvbSAnLi9pbnRlcm5hbC9tYW5pZmVzdC1jbGllbnQnO1xuXG5mdW5jdGlvbiBnb3RvKGhyZWYsIG9wdHMgPSB7IHJlcGxhY2VTdGF0ZTogZmFsc2UgfSkge1xuXHRjb25zdCB0YXJnZXQgPSBzZWxlY3RfdGFyZ2V0KG5ldyBVUkwoaHJlZiwgZG9jdW1lbnQuYmFzZVVSSSkpO1xuXG5cdGlmICh0YXJnZXQpIHtcblx0XHRfaGlzdG9yeVtvcHRzLnJlcGxhY2VTdGF0ZSA/ICdyZXBsYWNlU3RhdGUnIDogJ3B1c2hTdGF0ZSddKHsgaWQ6IGNpZCB9LCAnJywgaHJlZik7XG5cdFx0cmV0dXJuIG5hdmlnYXRlKHRhcmdldCwgbnVsbCkudGhlbigoKSA9PiB7fSk7XG5cdH1cblxuXHRsb2NhdGlvbi5ocmVmID0gaHJlZjtcblx0cmV0dXJuIG5ldyBQcm9taXNlKGYgPT4ge30pOyAvLyBuZXZlciByZXNvbHZlc1xufVxuXG5jb25zdCBpbml0aWFsX2RhdGEgPSB0eXBlb2YgX19TQVBQRVJfXyAhPT0gJ3VuZGVmaW5lZCcgJiYgX19TQVBQRVJfXztcblxubGV0IHJlYWR5ID0gZmFsc2U7XG5sZXQgcm9vdF9jb21wb25lbnQ7XG5sZXQgY3VycmVudF90b2tlbjtcbmxldCByb290X3ByZWxvYWRlZDtcbmxldCBjdXJyZW50X2JyYW5jaCA9IFtdO1xuXG5jb25zdCBzdG9yZXMgPSB7XG5cdHBhZ2U6IHdyaXRhYmxlKHt9KSxcblx0cHJlbG9hZGluZzogd3JpdGFibGUobnVsbCksXG5cdHNlc3Npb246IHdyaXRhYmxlKGluaXRpYWxfZGF0YSAmJiBpbml0aWFsX2RhdGEuc2Vzc2lvbilcbn07XG5cbmxldCAkc2Vzc2lvbjtcbmxldCBzZXNzaW9uX2RpcnR5O1xuXG5zdG9yZXMuc2Vzc2lvbi5zdWJzY3JpYmUoYXN5bmMgdmFsdWUgPT4ge1xuXHQkc2Vzc2lvbiA9IHZhbHVlO1xuXG5cdGlmICghcmVhZHkpIHJldHVybjtcblx0c2Vzc2lvbl9kaXJ0eSA9IHRydWU7XG5cblx0Y29uc3QgdGFyZ2V0ID0gc2VsZWN0X3RhcmdldChuZXcgVVJMKGxvY2F0aW9uLmhyZWYpKTtcblxuXHRjb25zdCB0b2tlbiA9IGN1cnJlbnRfdG9rZW4gPSB7fTtcblx0Y29uc3QgeyByZWRpcmVjdCwgcHJvcHMsIGJyYW5jaCB9ID0gYXdhaXQgaHlkcmF0ZV90YXJnZXQodGFyZ2V0KTtcblx0aWYgKHRva2VuICE9PSBjdXJyZW50X3Rva2VuKSByZXR1cm47IC8vIGEgc2Vjb25kYXJ5IG5hdmlnYXRpb24gaGFwcGVuZWQgd2hpbGUgd2Ugd2VyZSBsb2FkaW5nXG5cblx0YXdhaXQgcmVuZGVyKHJlZGlyZWN0LCBicmFuY2gsIHByb3BzLCB0YXJnZXQucGFnZSk7XG59KTtcblxubGV0IHByZWZldGNoaW5nXG5cblxuID0gbnVsbDtcbmZ1bmN0aW9uIHNldF9wcmVmZXRjaGluZyhocmVmLCBwcm9taXNlKSB7XG5cdHByZWZldGNoaW5nID0geyBocmVmLCBwcm9taXNlIH07XG59XG5cbmxldCB0YXJnZXQ7XG5mdW5jdGlvbiBzZXRfdGFyZ2V0KGVsZW1lbnQpIHtcblx0dGFyZ2V0ID0gZWxlbWVudDtcbn1cblxubGV0IHVpZCA9IDE7XG5mdW5jdGlvbiBzZXRfdWlkKG4pIHtcblx0dWlkID0gbjtcbn1cblxubGV0IGNpZDtcbmZ1bmN0aW9uIHNldF9jaWQobikge1xuXHRjaWQgPSBuO1xufVxuXG5jb25zdCBfaGlzdG9yeSA9IHR5cGVvZiBoaXN0b3J5ICE9PSAndW5kZWZpbmVkJyA/IGhpc3RvcnkgOiB7XG5cdHB1c2hTdGF0ZTogKHN0YXRlLCB0aXRsZSwgaHJlZikgPT4ge30sXG5cdHJlcGxhY2VTdGF0ZTogKHN0YXRlLCB0aXRsZSwgaHJlZikgPT4ge30sXG5cdHNjcm9sbFJlc3RvcmF0aW9uOiAnJ1xufTtcblxuY29uc3Qgc2Nyb2xsX2hpc3RvcnkgPSB7fTtcblxuZnVuY3Rpb24gZXh0cmFjdF9xdWVyeShzZWFyY2gpIHtcblx0Y29uc3QgcXVlcnkgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHRpZiAoc2VhcmNoLmxlbmd0aCA+IDApIHtcblx0XHRzZWFyY2guc2xpY2UoMSkuc3BsaXQoJyYnKS5mb3JFYWNoKHNlYXJjaFBhcmFtID0+IHtcblx0XHRcdGxldCBbLCBrZXksIHZhbHVlID0gJyddID0gLyhbXj1dKikoPzo9KC4qKSk/Ly5leGVjKGRlY29kZVVSSUNvbXBvbmVudChzZWFyY2hQYXJhbS5yZXBsYWNlKC9cXCsvZywgJyAnKSkpO1xuXHRcdFx0aWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAnc3RyaW5nJykgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldXTtcblx0XHRcdGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ29iamVjdCcpIChxdWVyeVtrZXldICkucHVzaCh2YWx1ZSk7XG5cdFx0XHRlbHNlIHF1ZXJ5W2tleV0gPSB2YWx1ZTtcblx0XHR9KTtcblx0fVxuXHRyZXR1cm4gcXVlcnk7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdF90YXJnZXQodXJsKSB7XG5cdGlmICh1cmwub3JpZ2luICE9PSBsb2NhdGlvbi5vcmlnaW4pIHJldHVybiBudWxsO1xuXHRpZiAoIXVybC5wYXRobmFtZS5zdGFydHNXaXRoKGluaXRpYWxfZGF0YS5iYXNlVXJsKSkgcmV0dXJuIG51bGw7XG5cblx0bGV0IHBhdGggPSB1cmwucGF0aG5hbWUuc2xpY2UoaW5pdGlhbF9kYXRhLmJhc2VVcmwubGVuZ3RoKTtcblxuXHRpZiAocGF0aCA9PT0gJycpIHtcblx0XHRwYXRoID0gJy8nO1xuXHR9XG5cblx0Ly8gYXZvaWQgYWNjaWRlbnRhbCBjbGFzaGVzIGJldHdlZW4gc2VydmVyIHJvdXRlcyBhbmQgcGFnZSByb3V0ZXNcblx0aWYgKGlnbm9yZS5zb21lKHBhdHRlcm4gPT4gcGF0dGVybi50ZXN0KHBhdGgpKSkgcmV0dXJuO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0Y29uc3Qgcm91dGUgPSByb3V0ZXNbaV07XG5cblx0XHRjb25zdCBtYXRjaCA9IHJvdXRlLnBhdHRlcm4uZXhlYyhwYXRoKTtcblxuXHRcdGlmIChtYXRjaCkge1xuXHRcdFx0Y29uc3QgcXVlcnkgPSBleHRyYWN0X3F1ZXJ5KHVybC5zZWFyY2gpO1xuXHRcdFx0Y29uc3QgcGFydCA9IHJvdXRlLnBhcnRzW3JvdXRlLnBhcnRzLmxlbmd0aCAtIDFdO1xuXHRcdFx0Y29uc3QgcGFyYW1zID0gcGFydC5wYXJhbXMgPyBwYXJ0LnBhcmFtcyhtYXRjaCkgOiB7fTtcblxuXHRcdFx0Y29uc3QgcGFnZSA9IHsgcGF0aCwgcXVlcnksIHBhcmFtcyB9O1xuXG5cdFx0XHRyZXR1cm4geyBocmVmOiB1cmwuaHJlZiwgcm91dGUsIG1hdGNoLCBwYWdlIH07XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZV9lcnJvcih1cmwpIHtcblx0Y29uc3QgeyBwYXRobmFtZSwgc2VhcmNoIH0gPSBsb2NhdGlvbjtcblx0Y29uc3QgeyBzZXNzaW9uLCBwcmVsb2FkZWQsIHN0YXR1cywgZXJyb3IgfSA9IGluaXRpYWxfZGF0YTtcblxuXHRpZiAoIXJvb3RfcHJlbG9hZGVkKSB7XG5cdFx0cm9vdF9wcmVsb2FkZWQgPSBwcmVsb2FkZWQgJiYgcHJlbG9hZGVkWzBdO1xuXHR9XG5cblx0Y29uc3QgcHJvcHMgPSB7XG5cdFx0ZXJyb3IsXG5cdFx0c3RhdHVzLFxuXHRcdHNlc3Npb24sXG5cdFx0bGV2ZWwwOiB7XG5cdFx0XHRwcm9wczogcm9vdF9wcmVsb2FkZWRcblx0XHR9LFxuXHRcdGxldmVsMToge1xuXHRcdFx0cHJvcHM6IHtcblx0XHRcdFx0c3RhdHVzLFxuXHRcdFx0XHRlcnJvclxuXHRcdFx0fSxcblx0XHRcdGNvbXBvbmVudDogRXJyb3JDb21wb25lbnRcblx0XHR9LFxuXHRcdHNlZ21lbnRzOiBwcmVsb2FkZWRcblxuXHR9O1xuXHRjb25zdCBxdWVyeSA9IGV4dHJhY3RfcXVlcnkoc2VhcmNoKTtcblx0cmVuZGVyKG51bGwsIFtdLCBwcm9wcywgeyBwYXRoOiBwYXRobmFtZSwgcXVlcnksIHBhcmFtczoge30gfSk7XG59XG5cbmZ1bmN0aW9uIHNjcm9sbF9zdGF0ZSgpIHtcblx0cmV0dXJuIHtcblx0XHR4OiBwYWdlWE9mZnNldCxcblx0XHR5OiBwYWdlWU9mZnNldFxuXHR9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBuYXZpZ2F0ZSh0YXJnZXQsIGlkLCBub3Njcm9sbCwgaGFzaCkge1xuXHRpZiAoaWQpIHtcblx0XHQvLyBwb3BzdGF0ZSBvciBpbml0aWFsIG5hdmlnYXRpb25cblx0XHRjaWQgPSBpZDtcblx0fSBlbHNlIHtcblx0XHRjb25zdCBjdXJyZW50X3Njcm9sbCA9IHNjcm9sbF9zdGF0ZSgpO1xuXG5cdFx0Ly8gY2xpY2tlZCBvbiBhIGxpbmsuIHByZXNlcnZlIHNjcm9sbCBzdGF0ZVxuXHRcdHNjcm9sbF9oaXN0b3J5W2NpZF0gPSBjdXJyZW50X3Njcm9sbDtcblxuXHRcdGlkID0gY2lkID0gKyt1aWQ7XG5cdFx0c2Nyb2xsX2hpc3RvcnlbY2lkXSA9IG5vc2Nyb2xsID8gY3VycmVudF9zY3JvbGwgOiB7IHg6IDAsIHk6IDAgfTtcblx0fVxuXG5cdGNpZCA9IGlkO1xuXG5cdGlmIChyb290X2NvbXBvbmVudCkgc3RvcmVzLnByZWxvYWRpbmcuc2V0KHRydWUpO1xuXG5cdGNvbnN0IGxvYWRlZCA9IHByZWZldGNoaW5nICYmIHByZWZldGNoaW5nLmhyZWYgPT09IHRhcmdldC5ocmVmID9cblx0XHRwcmVmZXRjaGluZy5wcm9taXNlIDpcblx0XHRoeWRyYXRlX3RhcmdldCh0YXJnZXQpO1xuXG5cdHByZWZldGNoaW5nID0gbnVsbDtcblxuXHRjb25zdCB0b2tlbiA9IGN1cnJlbnRfdG9rZW4gPSB7fTtcblx0Y29uc3QgeyByZWRpcmVjdCwgcHJvcHMsIGJyYW5jaCB9ID0gYXdhaXQgbG9hZGVkO1xuXHRpZiAodG9rZW4gIT09IGN1cnJlbnRfdG9rZW4pIHJldHVybjsgLy8gYSBzZWNvbmRhcnkgbmF2aWdhdGlvbiBoYXBwZW5lZCB3aGlsZSB3ZSB3ZXJlIGxvYWRpbmdcblxuXHRhd2FpdCByZW5kZXIocmVkaXJlY3QsIGJyYW5jaCwgcHJvcHMsIHRhcmdldC5wYWdlKTtcblx0aWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuXG5cdGlmICghbm9zY3JvbGwpIHtcblx0XHRsZXQgc2Nyb2xsID0gc2Nyb2xsX2hpc3RvcnlbaWRdO1xuXG5cdFx0aWYgKGhhc2gpIHtcblx0XHRcdC8vIHNjcm9sbCBpcyBhbiBlbGVtZW50IGlkIChmcm9tIGEgaGFzaCksIHdlIG5lZWQgdG8gY29tcHV0ZSB5LlxuXHRcdFx0Y29uc3QgZGVlcF9saW5rZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoLnNsaWNlKDEpKTtcblxuXHRcdFx0aWYgKGRlZXBfbGlua2VkKSB7XG5cdFx0XHRcdHNjcm9sbCA9IHtcblx0XHRcdFx0XHR4OiAwLFxuXHRcdFx0XHRcdHk6IGRlZXBfbGlua2VkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHNjcm9sbF9oaXN0b3J5W2NpZF0gPSBzY3JvbGw7XG5cdFx0aWYgKHNjcm9sbCkgc2Nyb2xsVG8oc2Nyb2xsLngsIHNjcm9sbC55KTtcblx0fVxufVxuXG5hc3luYyBmdW5jdGlvbiByZW5kZXIocmVkaXJlY3QsIGJyYW5jaCwgcHJvcHMsIHBhZ2UpIHtcblx0aWYgKHJlZGlyZWN0KSByZXR1cm4gZ290byhyZWRpcmVjdC5sb2NhdGlvbiwgeyByZXBsYWNlU3RhdGU6IHRydWUgfSk7XG5cblx0c3RvcmVzLnBhZ2Uuc2V0KHBhZ2UpO1xuXHRzdG9yZXMucHJlbG9hZGluZy5zZXQoZmFsc2UpO1xuXG5cdGlmIChyb290X2NvbXBvbmVudCkge1xuXHRcdHJvb3RfY29tcG9uZW50LiRzZXQocHJvcHMpO1xuXHR9IGVsc2Uge1xuXHRcdHByb3BzLnN0b3JlcyA9IHtcblx0XHRcdHBhZ2U6IHsgc3Vic2NyaWJlOiBzdG9yZXMucGFnZS5zdWJzY3JpYmUgfSxcblx0XHRcdHByZWxvYWRpbmc6IHsgc3Vic2NyaWJlOiBzdG9yZXMucHJlbG9hZGluZy5zdWJzY3JpYmUgfSxcblx0XHRcdHNlc3Npb246IHN0b3Jlcy5zZXNzaW9uXG5cdFx0fTtcblx0XHRwcm9wcy5sZXZlbDAgPSB7XG5cdFx0XHRwcm9wczogYXdhaXQgcm9vdF9wcmVsb2FkZWRcblx0XHR9O1xuXG5cdFx0Ly8gZmlyc3QgbG9hZCDigJQgcmVtb3ZlIFNTUidkIDxoZWFkPiBjb250ZW50c1xuXHRcdGNvbnN0IHN0YXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NhcHBlci1oZWFkLXN0YXJ0Jyk7XG5cdFx0Y29uc3QgZW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NhcHBlci1oZWFkLWVuZCcpO1xuXG5cdFx0aWYgKHN0YXJ0ICYmIGVuZCkge1xuXHRcdFx0d2hpbGUgKHN0YXJ0Lm5leHRTaWJsaW5nICE9PSBlbmQpIGRldGFjaChzdGFydC5uZXh0U2libGluZyk7XG5cdFx0XHRkZXRhY2goc3RhcnQpO1xuXHRcdFx0ZGV0YWNoKGVuZCk7XG5cdFx0fVxuXG5cdFx0cm9vdF9jb21wb25lbnQgPSBuZXcgQXBwKHtcblx0XHRcdHRhcmdldCxcblx0XHRcdHByb3BzLFxuXHRcdFx0aHlkcmF0ZTogdHJ1ZVxuXHRcdH0pO1xuXHR9XG5cblx0Y3VycmVudF9icmFuY2ggPSBicmFuY2g7XG5cdHJlYWR5ID0gdHJ1ZTtcblx0c2Vzc2lvbl9kaXJ0eSA9IGZhbHNlO1xufVxuXG5hc3luYyBmdW5jdGlvbiBoeWRyYXRlX3RhcmdldCh0YXJnZXQpXG5cblxuXG4ge1xuXHRjb25zdCB7IHJvdXRlLCBwYWdlIH0gPSB0YXJnZXQ7XG5cdGNvbnN0IHNlZ21lbnRzID0gcGFnZS5wYXRoLnNwbGl0KCcvJykuZmlsdGVyKEJvb2xlYW4pO1xuXG5cdGxldCByZWRpcmVjdCA9IG51bGw7XG5cblx0Y29uc3QgcHJvcHMgPSB7IGVycm9yOiBudWxsLCBzdGF0dXM6IDIwMCwgc2VnbWVudHM6IFtzZWdtZW50c1swXV0gfTtcblxuXHRjb25zdCBwcmVsb2FkX2NvbnRleHQgPSB7XG5cdFx0ZmV0Y2g6ICh1cmwsIG9wdHMpID0+IGZldGNoKHVybCwgb3B0cyksXG5cdFx0cmVkaXJlY3Q6IChzdGF0dXNDb2RlLCBsb2NhdGlvbikgPT4ge1xuXHRcdFx0aWYgKHJlZGlyZWN0ICYmIChyZWRpcmVjdC5zdGF0dXNDb2RlICE9PSBzdGF0dXNDb2RlIHx8IHJlZGlyZWN0LmxvY2F0aW9uICE9PSBsb2NhdGlvbikpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBDb25mbGljdGluZyByZWRpcmVjdHNgKTtcblx0XHRcdH1cblx0XHRcdHJlZGlyZWN0ID0geyBzdGF0dXNDb2RlLCBsb2NhdGlvbiB9O1xuXHRcdH0sXG5cdFx0ZXJyb3I6IChzdGF0dXMsIGVycm9yKSA9PiB7XG5cdFx0XHRwcm9wcy5lcnJvciA9IHR5cGVvZiBlcnJvciA9PT0gJ3N0cmluZycgPyBuZXcgRXJyb3IoZXJyb3IpIDogZXJyb3I7XG5cdFx0XHRwcm9wcy5zdGF0dXMgPSBzdGF0dXM7XG5cdFx0fVxuXHR9O1xuXG5cdGlmICghcm9vdF9wcmVsb2FkZWQpIHtcblx0XHRyb290X3ByZWxvYWRlZCA9IGluaXRpYWxfZGF0YS5wcmVsb2FkZWRbMF0gfHwgcm9vdF9wcmVsb2FkLmNhbGwocHJlbG9hZF9jb250ZXh0LCB7XG5cdFx0XHRwYXRoOiBwYWdlLnBhdGgsXG5cdFx0XHRxdWVyeTogcGFnZS5xdWVyeSxcblx0XHRcdHBhcmFtczoge31cblx0XHR9LCAkc2Vzc2lvbik7XG5cdH1cblxuXHRsZXQgYnJhbmNoO1xuXHRsZXQgbCA9IDE7XG5cblx0dHJ5IHtcblx0XHRsZXQgc2VnbWVudF9kaXJ0eSA9IGZhbHNlO1xuXHRcdGJyYW5jaCA9IGF3YWl0IFByb21pc2UuYWxsKHJvdXRlLnBhcnRzLm1hcChhc3luYyAocGFydCwgaSkgPT4ge1xuXHRcdFx0Y29uc3Qgc2VnbWVudCA9IHNlZ21lbnRzW2ldO1xuXG5cdFx0XHRpZiAoY3VycmVudF9icmFuY2hbaV0gJiYgY3VycmVudF9icmFuY2hbaV0uc2VnbWVudCAhPT0gc2VnbWVudCkgc2VnbWVudF9kaXJ0eSA9IHRydWU7XG5cblx0XHRcdHByb3BzLnNlZ21lbnRzW2xdID0gc2VnbWVudHNbaSArIDFdOyAvLyBUT0RPIG1ha2UgdGhpcyBsZXNzIGNvbmZ1c2luZ1xuXHRcdFx0aWYgKCFwYXJ0KSByZXR1cm4geyBzZWdtZW50IH07XG5cblx0XHRcdGNvbnN0IGogPSBsKys7XG5cblx0XHRcdGlmICghc2Vzc2lvbl9kaXJ0eSAmJiAhc2VnbWVudF9kaXJ0eSAmJiBjdXJyZW50X2JyYW5jaFtpXSAmJiBjdXJyZW50X2JyYW5jaFtpXS5wYXJ0ID09PSBwYXJ0LmkpIHtcblx0XHRcdFx0cmV0dXJuIGN1cnJlbnRfYnJhbmNoW2ldO1xuXHRcdFx0fVxuXG5cdFx0XHRzZWdtZW50X2RpcnR5ID0gZmFsc2U7XG5cblx0XHRcdGNvbnN0IHsgZGVmYXVsdDogY29tcG9uZW50LCBwcmVsb2FkIH0gPSBhd2FpdCBsb2FkX2NvbXBvbmVudChjb21wb25lbnRzW3BhcnQuaV0pO1xuXG5cdFx0XHRsZXQgcHJlbG9hZGVkO1xuXHRcdFx0aWYgKHJlYWR5IHx8ICFpbml0aWFsX2RhdGEucHJlbG9hZGVkW2kgKyAxXSkge1xuXHRcdFx0XHRwcmVsb2FkZWQgPSBwcmVsb2FkXG5cdFx0XHRcdFx0PyBhd2FpdCBwcmVsb2FkLmNhbGwocHJlbG9hZF9jb250ZXh0LCB7XG5cdFx0XHRcdFx0XHRwYXRoOiBwYWdlLnBhdGgsXG5cdFx0XHRcdFx0XHRxdWVyeTogcGFnZS5xdWVyeSxcblx0XHRcdFx0XHRcdHBhcmFtczogcGFydC5wYXJhbXMgPyBwYXJ0LnBhcmFtcyh0YXJnZXQubWF0Y2gpIDoge31cblx0XHRcdFx0XHR9LCAkc2Vzc2lvbilcblx0XHRcdFx0XHQ6IHt9O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cHJlbG9hZGVkID0gaW5pdGlhbF9kYXRhLnByZWxvYWRlZFtpICsgMV07XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAocHJvcHNbYGxldmVsJHtqfWBdID0geyBjb21wb25lbnQsIHByb3BzOiBwcmVsb2FkZWQsIHNlZ21lbnQsIHBhcnQ6IHBhcnQuaSB9KTtcblx0XHR9KSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0cHJvcHMuZXJyb3IgPSBlcnJvcjtcblx0XHRwcm9wcy5zdGF0dXMgPSA1MDA7XG5cdFx0YnJhbmNoID0gW107XG5cdH1cblxuXHRyZXR1cm4geyByZWRpcmVjdCwgcHJvcHMsIGJyYW5jaCB9O1xufVxuXG5mdW5jdGlvbiBsb2FkX2NzcyhjaHVuaykge1xuXHRjb25zdCBocmVmID0gYGNsaWVudC8ke2NodW5rfWA7XG5cdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW2hyZWY9XCIke2hyZWZ9XCJdYCkpIHJldHVybjtcblxuXHRyZXR1cm4gbmV3IFByb21pc2UoKGZ1bGZpbCwgcmVqZWN0KSA9PiB7XG5cdFx0Y29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcblx0XHRsaW5rLnJlbCA9ICdzdHlsZXNoZWV0Jztcblx0XHRsaW5rLmhyZWYgPSBocmVmO1xuXG5cdFx0bGluay5vbmxvYWQgPSAoKSA9PiBmdWxmaWwoKTtcblx0XHRsaW5rLm9uZXJyb3IgPSByZWplY3Q7XG5cblx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gbG9hZF9jb21wb25lbnQoY29tcG9uZW50KVxuXG5cbiB7XG5cdC8vIFRPRE8gdGhpcyBpcyB0ZW1wb3Jhcnkg4oCUIG9uY2UgcGxhY2Vob2xkZXJzIGFyZVxuXHQvLyBhbHdheXMgcmV3cml0dGVuLCBzY3JhdGNoIHRoZSB0ZXJuYXJ5XG5cdGNvbnN0IHByb21pc2VzID0gKHR5cGVvZiBjb21wb25lbnQuY3NzID09PSAnc3RyaW5nJyA/IFtdIDogY29tcG9uZW50LmNzcy5tYXAobG9hZF9jc3MpKTtcblx0cHJvbWlzZXMudW5zaGlmdChjb21wb25lbnQuanMoKSk7XG5cdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbih2YWx1ZXMgPT4gdmFsdWVzWzBdKTtcbn1cblxuZnVuY3Rpb24gZGV0YWNoKG5vZGUpIHtcblx0bm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChocmVmKSB7XG5cdGNvbnN0IHRhcmdldCA9IHNlbGVjdF90YXJnZXQobmV3IFVSTChocmVmLCBkb2N1bWVudC5iYXNlVVJJKSk7XG5cblx0aWYgKHRhcmdldCkge1xuXHRcdGlmICghcHJlZmV0Y2hpbmcgfHwgaHJlZiAhPT0gcHJlZmV0Y2hpbmcuaHJlZikge1xuXHRcdFx0c2V0X3ByZWZldGNoaW5nKGhyZWYsIGh5ZHJhdGVfdGFyZ2V0KHRhcmdldCkpO1xuXHRcdH1cblxuXHRcdHJldHVybiBwcmVmZXRjaGluZy5wcm9taXNlO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHN0YXJ0KG9wdHNcblxuKSB7XG5cdGlmICgnc2Nyb2xsUmVzdG9yYXRpb24nIGluIF9oaXN0b3J5KSB7XG5cdFx0X2hpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJztcblx0fVxuXG5cdHNldF90YXJnZXQob3B0cy50YXJnZXQpO1xuXG5cdGFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlX2NsaWNrKTtcblx0YWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCBoYW5kbGVfcG9wc3RhdGUpO1xuXG5cdC8vIHByZWZldGNoXG5cdGFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0cmlnZ2VyX3ByZWZldGNoKTtcblx0YWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaGFuZGxlX21vdXNlbW92ZSk7XG5cblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuXHRcdGNvbnN0IHsgaGFzaCwgaHJlZiB9ID0gbG9jYXRpb247XG5cblx0XHRfaGlzdG9yeS5yZXBsYWNlU3RhdGUoeyBpZDogdWlkIH0sICcnLCBocmVmKTtcblxuXHRcdGNvbnN0IHVybCA9IG5ldyBVUkwobG9jYXRpb24uaHJlZik7XG5cblx0XHRpZiAoaW5pdGlhbF9kYXRhLmVycm9yKSByZXR1cm4gaGFuZGxlX2Vycm9yKHVybCk7XG5cblx0XHRjb25zdCB0YXJnZXQgPSBzZWxlY3RfdGFyZ2V0KHVybCk7XG5cdFx0aWYgKHRhcmdldCkgcmV0dXJuIG5hdmlnYXRlKHRhcmdldCwgdWlkLCBmYWxzZSwgaGFzaCk7XG5cdH0pO1xufVxuXG5sZXQgbW91c2Vtb3ZlX3RpbWVvdXQ7XG5cbmZ1bmN0aW9uIGhhbmRsZV9tb3VzZW1vdmUoZXZlbnQpIHtcblx0Y2xlYXJUaW1lb3V0KG1vdXNlbW92ZV90aW1lb3V0KTtcblx0bW91c2Vtb3ZlX3RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHR0cmlnZ2VyX3ByZWZldGNoKGV2ZW50KTtcblx0fSwgMjApO1xufVxuXG5mdW5jdGlvbiB0cmlnZ2VyX3ByZWZldGNoKGV2ZW50KSB7XG5cdGNvbnN0IGEgPSBmaW5kX2FuY2hvcihldmVudC50YXJnZXQpO1xuXHRpZiAoIWEgfHwgYS5yZWwgIT09ICdwcmVmZXRjaCcpIHJldHVybjtcblxuXHRwcmVmZXRjaChhLmhyZWYpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVfY2xpY2soZXZlbnQpIHtcblx0Ly8gQWRhcHRlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS92aXNpb25tZWRpYS9wYWdlLmpzXG5cdC8vIE1JVCBsaWNlbnNlIGh0dHBzOi8vZ2l0aHViLmNvbS92aXNpb25tZWRpYS9wYWdlLmpzI2xpY2Vuc2Vcblx0aWYgKHdoaWNoKGV2ZW50KSAhPT0gMSkgcmV0dXJuO1xuXHRpZiAoZXZlbnQubWV0YUtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5KSByZXR1cm47XG5cdGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKSByZXR1cm47XG5cblx0Y29uc3QgYSA9IGZpbmRfYW5jaG9yKGV2ZW50LnRhcmdldCk7XG5cdGlmICghYSkgcmV0dXJuO1xuXG5cdGlmICghYS5ocmVmKSByZXR1cm47XG5cblx0Ly8gY2hlY2sgaWYgbGluayBpcyBpbnNpZGUgYW4gc3ZnXG5cdC8vIGluIHRoaXMgY2FzZSwgYm90aCBocmVmIGFuZCB0YXJnZXQgYXJlIGFsd2F5cyBpbnNpZGUgYW4gb2JqZWN0XG5cdGNvbnN0IHN2ZyA9IHR5cGVvZiBhLmhyZWYgPT09ICdvYmplY3QnICYmIGEuaHJlZi5jb25zdHJ1Y3Rvci5uYW1lID09PSAnU1ZHQW5pbWF0ZWRTdHJpbmcnO1xuXHRjb25zdCBocmVmID0gU3RyaW5nKHN2ZyA/IChhKS5ocmVmLmJhc2VWYWwgOiBhLmhyZWYpO1xuXG5cdGlmIChocmVmID09PSBsb2NhdGlvbi5ocmVmKSB7XG5cdFx0aWYgKCFsb2NhdGlvbi5oYXNoKSBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIElnbm9yZSBpZiB0YWcgaGFzXG5cdC8vIDEuICdkb3dubG9hZCcgYXR0cmlidXRlXG5cdC8vIDIuIHJlbD0nZXh0ZXJuYWwnIGF0dHJpYnV0ZVxuXHRpZiAoYS5oYXNBdHRyaWJ1dGUoJ2Rvd25sb2FkJykgfHwgYS5nZXRBdHRyaWJ1dGUoJ3JlbCcpID09PSAnZXh0ZXJuYWwnKSByZXR1cm47XG5cblx0Ly8gSWdub3JlIGlmIDxhPiBoYXMgYSB0YXJnZXRcblx0aWYgKHN2ZyA/IChhKS50YXJnZXQuYmFzZVZhbCA6IGEudGFyZ2V0KSByZXR1cm47XG5cblx0Y29uc3QgdXJsID0gbmV3IFVSTChocmVmKTtcblxuXHQvLyBEb24ndCBoYW5kbGUgaGFzaCBjaGFuZ2VzXG5cdGlmICh1cmwucGF0aG5hbWUgPT09IGxvY2F0aW9uLnBhdGhuYW1lICYmIHVybC5zZWFyY2ggPT09IGxvY2F0aW9uLnNlYXJjaCkgcmV0dXJuO1xuXG5cdGNvbnN0IHRhcmdldCA9IHNlbGVjdF90YXJnZXQodXJsKTtcblx0aWYgKHRhcmdldCkge1xuXHRcdGNvbnN0IG5vc2Nyb2xsID0gYS5oYXNBdHRyaWJ1dGUoJ3NhcHBlci1ub3Njcm9sbCcpO1xuXHRcdG5hdmlnYXRlKHRhcmdldCwgbnVsbCwgbm9zY3JvbGwsIHVybC5oYXNoKTtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdF9oaXN0b3J5LnB1c2hTdGF0ZSh7IGlkOiBjaWQgfSwgJycsIHVybC5ocmVmKTtcblx0fVxufVxuXG5mdW5jdGlvbiB3aGljaChldmVudCkge1xuXHRyZXR1cm4gZXZlbnQud2hpY2ggPT09IG51bGwgPyBldmVudC5idXR0b24gOiBldmVudC53aGljaDtcbn1cblxuZnVuY3Rpb24gZmluZF9hbmNob3Iobm9kZSkge1xuXHR3aGlsZSAobm9kZSAmJiBub2RlLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCkgIT09ICdBJykgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTsgLy8gU1ZHIDxhPiBlbGVtZW50cyBoYXZlIGEgbG93ZXJjYXNlIG5hbWVcblx0cmV0dXJuIG5vZGU7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZV9wb3BzdGF0ZShldmVudCkge1xuXHRzY3JvbGxfaGlzdG9yeVtjaWRdID0gc2Nyb2xsX3N0YXRlKCk7XG5cblx0aWYgKGV2ZW50LnN0YXRlKSB7XG5cdFx0Y29uc3QgdXJsID0gbmV3IFVSTChsb2NhdGlvbi5ocmVmKTtcblx0XHRjb25zdCB0YXJnZXQgPSBzZWxlY3RfdGFyZ2V0KHVybCk7XG5cdFx0aWYgKHRhcmdldCkge1xuXHRcdFx0bmF2aWdhdGUodGFyZ2V0LCBldmVudC5zdGF0ZS5pZCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxvY2F0aW9uLmhyZWYgPSBsb2NhdGlvbi5ocmVmO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHQvLyBoYXNoY2hhbmdlXG5cdFx0c2V0X3VpZCh1aWQgKyAxKTtcblx0XHRzZXRfY2lkKHVpZCk7XG5cdFx0X2hpc3RvcnkucmVwbGFjZVN0YXRlKHsgaWQ6IGNpZCB9LCAnJywgbG9jYXRpb24uaHJlZik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2hSb3V0ZXMocGF0aG5hbWVzKSB7XG5cdHJldHVybiByb3V0ZXNcblx0XHQuZmlsdGVyKHBhdGhuYW1lc1xuXHRcdFx0PyByb3V0ZSA9PiBwYXRobmFtZXMuc29tZShwYXRobmFtZSA9PiByb3V0ZS5wYXR0ZXJuLnRlc3QocGF0aG5hbWUpKVxuXHRcdFx0OiAoKSA9PiB0cnVlXG5cdFx0KVxuXHRcdC5yZWR1Y2UoKHByb21pc2UsIHJvdXRlKSA9PiBwcm9taXNlLnRoZW4oKCkgPT4ge1xuXHRcdFx0cmV0dXJuIFByb21pc2UuYWxsKHJvdXRlLnBhcnRzLm1hcChwYXJ0ID0+IHBhcnQgJiYgbG9hZF9jb21wb25lbnQoY29tcG9uZW50c1twYXJ0LmldKSkpO1xuXHRcdH0pLCBQcm9taXNlLnJlc29sdmUoKSk7XG59XG5cbmNvbnN0IHN0b3JlcyQxID0gKCkgPT4gZ2V0Q29udGV4dChDT05URVhUX0tFWSk7XG5cbmV4cG9ydCB7IGdvdG8sIHByZWZldGNoLCBwcmVmZXRjaFJvdXRlcywgc3RhcnQsIHN0b3JlcyQxIGFzIHN0b3JlcyB9O1xuIiwiPCEtLSBUaGlzIGZpbGUgaXMgZ2VuZXJhdGVkIGJ5IFNhcHBlciDigJQgZG8gbm90IGVkaXQgaXQhIC0tPlxuPHNjcmlwdD5cblx0aW1wb3J0IHsgc2V0Q29udGV4dCB9IGZyb20gJ3N2ZWx0ZSc7XG5cdGltcG9ydCB7IENPTlRFWFRfS0VZIH0gZnJvbSAnLi9zaGFyZWQnO1xuXHRpbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uL3JvdXRlcy9fbGF5b3V0LnN2ZWx0ZSc7XG5cdGltcG9ydCBFcnJvciBmcm9tICcuLi8uLi8uLi9yb3V0ZXMvX2Vycm9yLnN2ZWx0ZSc7XG5cblx0ZXhwb3J0IGxldCBzdG9yZXM7XG5cdGV4cG9ydCBsZXQgZXJyb3I7XG5cdGV4cG9ydCBsZXQgc3RhdHVzO1xuXHRleHBvcnQgbGV0IHNlZ21lbnRzO1xuXHRleHBvcnQgbGV0IGxldmVsMDtcblx0ZXhwb3J0IGxldCBsZXZlbDEgPSBudWxsO1xuXG5cdHNldENvbnRleHQoQ09OVEVYVF9LRVksIHN0b3Jlcyk7XG48L3NjcmlwdD5cblxuPExheW91dCBzZWdtZW50PVwie3NlZ21lbnRzWzBdfVwiIHsuLi5sZXZlbDAucHJvcHN9PlxuXHR7I2lmIGVycm9yfVxuXHRcdDxFcnJvciB7ZXJyb3J9IHtzdGF0dXN9Lz5cblx0ezplbHNlfVxuXHRcdDxzdmVsdGU6Y29tcG9uZW50IHRoaXM9XCJ7bGV2ZWwxLmNvbXBvbmVudH1cIiB7Li4ubGV2ZWwxLnByb3BzfS8+XG5cdHsvaWZ9XG48L0xheW91dD4iLCIvLyBUaGlzIGZpbGUgaXMgZ2VuZXJhdGVkIGJ5IFNhcHBlciDigJQgZG8gbm90IGVkaXQgaXQhXG5leHBvcnQgeyBkZWZhdWx0IGFzIFJvb3QgfSBmcm9tICcuLi8uLi8uLi9yb3V0ZXMvX2xheW91dC5zdmVsdGUnO1xuZXhwb3J0IHsgcHJlbG9hZCBhcyByb290X3ByZWxvYWQgfSBmcm9tICcuL3NoYXJlZCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEVycm9yQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vcm91dGVzL19lcnJvci5zdmVsdGUnO1xuXG5leHBvcnQgY29uc3QgaWdub3JlID0gW107XG5cbmV4cG9ydCBjb25zdCBjb21wb25lbnRzID0gW1xuXHR7XG5cdFx0anM6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImluZGV4XCIgKi8gXCIuLi8uLi8uLi9yb3V0ZXMvaW5kZXguc3ZlbHRlXCIpLFxuXHRcdGNzczogXCJfX1NBUFBFUl9DU1NfUExBQ0VIT0xERVI6aW5kZXguc3ZlbHRlX19cIlxuXHR9LFxuXHR7XG5cdFx0anM6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImNhdGVnb3JpZXNcIiAqLyBcIi4uLy4uLy4uL3JvdXRlcy9jYXRlZ29yaWVzLnN2ZWx0ZVwiKSxcblx0XHRjc3M6IFwiX19TQVBQRVJfQ1NTX1BMQUNFSE9MREVSOmNhdGVnb3JpZXMuc3ZlbHRlX19cIlxuXHR9LFxuXHR7XG5cdFx0anM6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInByb3ZpZGVyc1wiICovIFwiLi4vLi4vLi4vcm91dGVzL3Byb3ZpZGVycy5zdmVsdGVcIiksXG5cdFx0Y3NzOiBcIl9fU0FQUEVSX0NTU19QTEFDRUhPTERFUjpwcm92aWRlcnMuc3ZlbHRlX19cIlxuXHR9LFxuXHR7XG5cdFx0anM6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImFib3V0XCIgKi8gXCIuLi8uLi8uLi9yb3V0ZXMvYWJvdXQuc3ZlbHRlXCIpLFxuXHRcdGNzczogXCJfX1NBUFBFUl9DU1NfUExBQ0VIT0xERVI6YWJvdXQuc3ZlbHRlX19cIlxuXHR9LFxuXHR7XG5cdFx0anM6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImhvbWVcIiAqLyBcIi4uLy4uLy4uL3JvdXRlcy9ob21lLnN2ZWx0ZVwiKSxcblx0XHRjc3M6IFwiX19TQVBQRVJfQ1NTX1BMQUNFSE9MREVSOmhvbWUuc3ZlbHRlX19cIlxuXHR9XG5dO1xuXG5leHBvcnQgY29uc3Qgcm91dGVzID0gW1xuXHR7XG5cdFx0Ly8gaW5kZXguc3ZlbHRlXG5cdFx0cGF0dGVybjogL15cXC8kLyxcblx0XHRwYXJ0czogW1xuXHRcdFx0eyBpOiAwIH1cblx0XHRdXG5cdH0sXG5cblx0e1xuXHRcdC8vIGNhdGVnb3JpZXMuc3ZlbHRlXG5cdFx0cGF0dGVybjogL15cXC9jYXRlZ29yaWVzXFwvPyQvLFxuXHRcdHBhcnRzOiBbXG5cdFx0XHR7IGk6IDEgfVxuXHRcdF1cblx0fSxcblxuXHR7XG5cdFx0Ly8gcHJvdmlkZXJzLnN2ZWx0ZVxuXHRcdHBhdHRlcm46IC9eXFwvcHJvdmlkZXJzXFwvPyQvLFxuXHRcdHBhcnRzOiBbXG5cdFx0XHR7IGk6IDIgfVxuXHRcdF1cblx0fSxcblxuXHR7XG5cdFx0Ly8gYWJvdXQuc3ZlbHRlXG5cdFx0cGF0dGVybjogL15cXC9hYm91dFxcLz8kLyxcblx0XHRwYXJ0czogW1xuXHRcdFx0eyBpOiAzIH1cblx0XHRdXG5cdH0sXG5cblx0e1xuXHRcdC8vIGhvbWUuc3ZlbHRlXG5cdFx0cGF0dGVybjogL15cXC9ob21lXFwvPyQvLFxuXHRcdHBhcnRzOiBbXG5cdFx0XHR7IGk6IDQgfVxuXHRcdF1cblx0fVxuXTtcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG5cdGltcG9ydChcIkM6L1VzZXJzL3Nwcnl0aGVyY2gvd3JrL3N2ZWx0ZS9zdmVsdGUtc2FwcGVyLWJ1bG1hLWNydWQvbm9kZV9tb2R1bGVzL3NhcHBlci9zYXBwZXItZGV2LWNsaWVudC5qc1wiKS50aGVuKGNsaWVudCA9PiB7XG5cdFx0Y2xpZW50LmNvbm5lY3QoMTAwMDApO1xuXHR9KTtcbn0iLCJpbXBvcnQgeyB3cml0YWJsZSB9IGZyb20gJ3N2ZWx0ZS9zdG9yZSc7XG5cbmV4cG9ydCBjb25zdCBDT05URVhUX0tFWSA9IHt9O1xuXG5leHBvcnQgY29uc3QgcHJlbG9hZCA9ICgpID0+ICh7fSk7IiwiPHNjcmlwdD5cclxuXHRleHBvcnQgbGV0IHN0YXR1cztcclxuXHRleHBvcnQgbGV0IGVycm9yO1xyXG5cclxuXHRjb25zdCBkZXYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JztcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcblx0aDEsIHAge1xyXG5cdFx0bWFyZ2luOiAwIGF1dG87XHJcblx0fVxyXG5cclxuXHRoMSB7XHJcblx0XHRmb250LXNpemU6IDIuOGVtO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRcdG1hcmdpbjogMCAwIDAuNWVtIDA7XHJcblx0fVxyXG5cclxuXHRwIHtcclxuXHRcdG1hcmdpbjogMWVtIGF1dG87XHJcblx0fVxyXG5cclxuXHRAbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcclxuXHRcdGgxIHtcclxuXHRcdFx0Zm9udC1zaXplOiA0ZW07XHJcblx0XHR9XHJcblx0fVxyXG48L3N0eWxlPlxyXG5cclxuPHN2ZWx0ZTpoZWFkPlxyXG5cdDx0aXRsZT57c3RhdHVzfTwvdGl0bGU+XHJcbjwvc3ZlbHRlOmhlYWQ+XHJcblxyXG48aDE+e3N0YXR1c308L2gxPlxyXG5cclxuPHA+e2Vycm9yLm1lc3NhZ2V9PC9wPlxyXG5cclxueyNpZiBkZXYgJiYgZXJyb3Iuc3RhY2t9XHJcblx0PHByZT57ZXJyb3Iuc3RhY2t9PC9wcmU+XHJcbnsvaWZ9XHJcbiIsIjxzY3JpcHQ+XHJcblx0aW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL05hdi5zdmVsdGUnO1xyXG5cclxuXHRleHBvcnQgbGV0IHNlZ21lbnQ7XHJcbjwvc2NyaXB0PlxyXG5cclxuPE5hdiB7c2VnbWVudH0vPlxyXG5cclxuPG1haW4+XHJcblx0PHNsb3Q+PC9zbG90PlxyXG48L21haW4+Il0sInNvdXJjZVJvb3QiOiIifQ==