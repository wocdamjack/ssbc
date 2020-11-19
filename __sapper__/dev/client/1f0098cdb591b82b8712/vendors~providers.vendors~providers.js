(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~providers"],{

/***/ "./node_modules/abortcontroller-polyfill/dist/abortcontroller-polyfill-only.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/abortcontroller-polyfill/dist/abortcontroller-polyfill-only.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
   true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) :
  undefined;
}((function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  var Emitter = /*#__PURE__*/function () {
    function Emitter() {
      _classCallCheck(this, Emitter);

      Object.defineProperty(this, 'listeners', {
        value: {},
        writable: true,
        configurable: true
      });
    }

    _createClass(Emitter, [{
      key: "addEventListener",
      value: function addEventListener(type, callback) {
        if (!(type in this.listeners)) {
          this.listeners[type] = [];
        }

        this.listeners[type].push(callback);
      }
    }, {
      key: "removeEventListener",
      value: function removeEventListener(type, callback) {
        if (!(type in this.listeners)) {
          return;
        }

        var stack = this.listeners[type];

        for (var i = 0, l = stack.length; i < l; i++) {
          if (stack[i] === callback) {
            stack.splice(i, 1);
            return;
          }
        }
      }
    }, {
      key: "dispatchEvent",
      value: function dispatchEvent(event) {
        var _this = this;

        if (!(event.type in this.listeners)) {
          return;
        }

        var debounce = function debounce(callback) {
          setTimeout(function () {
            return callback.call(_this, event);
          });
        };

        var stack = this.listeners[event.type];

        for (var i = 0, l = stack.length; i < l; i++) {
          debounce(stack[i]);
        }

        return !event.defaultPrevented;
      }
    }]);

    return Emitter;
  }();

  var AbortSignal = /*#__PURE__*/function (_Emitter) {
    _inherits(AbortSignal, _Emitter);

    var _super = _createSuper(AbortSignal);

    function AbortSignal() {
      var _this2;

      _classCallCheck(this, AbortSignal);

      _this2 = _super.call(this); // Some versions of babel does not transpile super() correctly for IE <= 10, if the parent
      // constructor has failed to run, then "this.listeners" will still be undefined and then we call
      // the parent constructor directly instead as a workaround. For general details, see babel bug:
      // https://github.com/babel/babel/issues/3041
      // This hack was added as a fix for the issue described here:
      // https://github.com/Financial-Times/polyfill-library/pull/59#issuecomment-477558042

      if (!_this2.listeners) {
        Emitter.call(_assertThisInitialized(_this2));
      } // Compared to assignment, Object.defineProperty makes properties non-enumerable by default and
      // we want Object.keys(new AbortController().signal) to be [] for compat with the native impl


      Object.defineProperty(_assertThisInitialized(_this2), 'aborted', {
        value: false,
        writable: true,
        configurable: true
      });
      Object.defineProperty(_assertThisInitialized(_this2), 'onabort', {
        value: null,
        writable: true,
        configurable: true
      });
      return _this2;
    }

    _createClass(AbortSignal, [{
      key: "toString",
      value: function toString() {
        return '[object AbortSignal]';
      }
    }, {
      key: "dispatchEvent",
      value: function dispatchEvent(event) {
        if (event.type === 'abort') {
          this.aborted = true;

          if (typeof this.onabort === 'function') {
            this.onabort.call(this, event);
          }
        }

        _get(_getPrototypeOf(AbortSignal.prototype), "dispatchEvent", this).call(this, event);
      }
    }]);

    return AbortSignal;
  }(Emitter);
  var AbortController = /*#__PURE__*/function () {
    function AbortController() {
      _classCallCheck(this, AbortController);

      // Compared to assignment, Object.defineProperty makes properties non-enumerable by default and
      // we want Object.keys(new AbortController()) to be [] for compat with the native impl
      Object.defineProperty(this, 'signal', {
        value: new AbortSignal(),
        writable: true,
        configurable: true
      });
    }

    _createClass(AbortController, [{
      key: "abort",
      value: function abort() {
        var event;

        try {
          event = new Event('abort');
        } catch (e) {
          if (typeof document !== 'undefined') {
            if (!document.createEvent) {
              // For Internet Explorer 8:
              event = document.createEventObject();
              event.type = 'abort';
            } else {
              // For Internet Explorer 11:
              event = document.createEvent('Event');
              event.initEvent('abort', false, false);
            }
          } else {
            // Fallback where document isn't available:
            event = {
              type: 'abort',
              bubbles: false,
              cancelable: false
            };
          }
        }

        this.signal.dispatchEvent(event);
      }
    }, {
      key: "toString",
      value: function toString() {
        return '[object AbortController]';
      }
    }]);

    return AbortController;
  }();

  if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
    // These are necessary to make sure that we get correct output for:
    // Object.prototype.toString.call(new AbortController())
    AbortController.prototype[Symbol.toStringTag] = 'AbortController';
    AbortSignal.prototype[Symbol.toStringTag] = 'AbortSignal';
  }

  function polyfillNeeded(self) {
    if (self.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL) {
      console.log('__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill');
      return true;
    } // Note that the "unfetch" minimal fetch polyfill defines fetch() without
    // defining window.Request, and this polyfill need to work on top of unfetch
    // so the below feature detection needs the !self.AbortController part.
    // The Request.prototype check is also needed because Safari versions 11.1.2
    // up to and including 12.1.x has a window.AbortController present but still
    // does NOT correctly implement abortable fetch:
    // https://bugs.webkit.org/show_bug.cgi?id=174980#c2


    return typeof self.Request === 'function' && !self.Request.prototype.hasOwnProperty('signal') || !self.AbortController;
  }

  (function (self) {

    if (!polyfillNeeded(self)) {
      return;
    }

    self.AbortController = AbortController;
    self.AbortSignal = AbortSignal;
  })(typeof self !== 'undefined' ? self : global);

})));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/add-to-unscopables.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/flatten-into-array.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/flatten-into-array.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");

// `FlattenIntoArray` abstract operation
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var flattenIntoArray = function (target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? bind(mapper, thisArg, 3) : false;
  var element;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      if (depth > 0 && isArray(element)) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1FFFFFFFFFFFFF) throw TypeError('Exceed the acceptable array length');
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
};

module.exports = flattenIntoArray;


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-context.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-context.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "./node_modules/core-js/internals/inspect-source.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/inspect-source.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var objectHas = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var shared = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = global;


/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.7.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.flat.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.flat.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var flattenIntoArray = __webpack_require__(/*! ../internals/flatten-into-array */ "./node_modules/core-js/internals/flatten-into-array.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");

// `Array.prototype.flat` method
// https://github.com/tc39/proposal-flatMap
$({ target: 'Array', proto: true }, {
  flat: function flat(/* depthArg = 1 */) {
    var depthArg = arguments.length ? arguments[0] : undefined;
    var O = toObject(this);
    var sourceLen = toLength(O.length);
    var A = arraySpeciesCreate(O, 0);
    A.length = flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));
    return A;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.unscopables.flat.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.unscopables.flat.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this method was added to unscopables after implementation
// in popular engines, so it's moved to a separate module
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

addToUnscopables('flat');


/***/ }),

/***/ "./node_modules/cross-fetch/dist/browser-ponyfill.js":
/*!***********************************************************!*\
  !*** ./node_modules/cross-fetch/dist/browser-ponyfill.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var __self__ = (function (root) {
function F() {
this.fetch = false;
this.DOMException = root.DOMException
}
F.prototype = root;
return new F();
})(typeof self !== 'undefined' ? self : this);
(function(self) {

var irrelevant = (function (exports) {

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob:
      'FileReader' in self &&
      'Blob' in self &&
      (function() {
        try {
          new Blob();
          return true
        } catch (e) {
          return false
        }
      })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  function isDataView(obj) {
    return obj && DataView.prototype.isPrototypeOf(obj)
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ];

    var isArrayBufferView =
      ArrayBuffer.isView ||
      function(obj) {
        return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
      };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift();
        return {done: value === undefined, value: value}
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      };
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ', ' + value : value;
  };

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function(name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null
  };

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  };

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push(name);
    });
    return iteratorFor(items)
  };

  Headers.prototype.values = function() {
    var items = [];
    this.forEach(function(value) {
      items.push(value);
    });
    return iteratorFor(items)
  };

  Headers.prototype.entries = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push([name, value]);
    });
    return iteratorFor(items)
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result);
      };
      reader.onerror = function() {
        reject(reader.error);
      };
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function(body) {
      this._bodyInit = body;
      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        this._bodyText = body = Object.prototype.toString.call(body);
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this);
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      };

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      };
    }

    this.text = function() {
      var rejected = consumed(this);
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    };

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      };
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    };

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      this.signal = input.signal;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'same-origin';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.signal = options.signal || this.signal;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body);
  }

  Request.prototype.clone = function() {
    return new Request(this, {body: this._bodyInit})
  };

  function decode(body) {
    var form = new FormData();
    body
      .trim()
      .split('&')
      .forEach(function(bytes) {
        if (bytes) {
          var split = bytes.split('=');
          var name = split.shift().replace(/\+/g, ' ');
          var value = split.join('=').replace(/\+/g, ' ');
          form.append(decodeURIComponent(name), decodeURIComponent(value));
        }
      });
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
    preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':');
      var key = parts.shift().trim();
      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = options.status === undefined ? 200 : options.status;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  };

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''});
    response.type = 'error';
    return response
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  };

  exports.DOMException = self.DOMException;
  try {
    new exports.DOMException();
  } catch (err) {
    exports.DOMException = function(message, name) {
      this.message = message;
      this.name = name;
      var error = Error(message);
      this.stack = error.stack;
    };
    exports.DOMException.prototype = Object.create(Error.prototype);
    exports.DOMException.prototype.constructor = exports.DOMException;
  }

  function fetch(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init);

      if (request.signal && request.signal.aborted) {
        return reject(new exports.DOMException('Aborted', 'AbortError'))
      }

      var xhr = new XMLHttpRequest();

      function abortXhr() {
        xhr.abort();
      }

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.onabort = function() {
        reject(new exports.DOMException('Aborted', 'AbortError'));
      };

      xhr.open(request.method, request.url, true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false;
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value);
      });

      if (request.signal) {
        request.signal.addEventListener('abort', abortXhr);

        xhr.onreadystatechange = function() {
          // DONE (success or failure)
          if (xhr.readyState === 4) {
            request.signal.removeEventListener('abort', abortXhr);
          }
        };
      }

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    })
  }

  fetch.polyfill = true;

  if (!self.fetch) {
    self.fetch = fetch;
    self.Headers = Headers;
    self.Request = Request;
    self.Response = Response;
  }

  exports.Headers = Headers;
  exports.Request = Request;
  exports.Response = Response;
  exports.fetch = fetch;

  return exports;

}({}));
})(__self__);
delete __self__.fetch.polyfill
exports = __self__.fetch // To enable: import fetch from 'cross-fetch'
exports.default = __self__.fetch // For TypeScript consumers without esModuleInterop.
exports.fetch = __self__.fetch // To enable: import {fetch} from 'cross-fetch'
exports.Headers = __self__.Headers
exports.Request = __self__.Request
exports.Response = __self__.Response
module.exports = exports


/***/ }),

/***/ "./node_modules/fhirclient/lib/Client.js":
/*!***********************************************!*\
  !*** ./node_modules/fhirclient/lib/Client.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.flat */ "./node_modules/core-js/modules/es.array.flat.js");

__webpack_require__(/*! core-js/modules/es.array.unscopables.flat */ "./node_modules/core-js/modules/es.array.unscopables.flat.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

const lib_1 = __webpack_require__(/*! ./lib */ "./node_modules/fhirclient/lib/lib.js");

const strings_1 = __webpack_require__(/*! ./strings */ "./node_modules/fhirclient/lib/strings.js");

const settings_1 = __webpack_require__(/*! ./settings */ "./node_modules/fhirclient/lib/settings.js"); // $lab:coverage:off$
// @ts-ignore


const {
  Response
} = typeof FHIRCLIENT_PURE !== "undefined" ? window : __webpack_require__(/*! cross-fetch */ "./node_modules/cross-fetch/dist/browser-ponyfill.js"); // $lab:coverage:on$

const debug = lib_1.debug.extend("client");
/**
 * Adds patient context to requestOptions object to be used with [[Client.request]]
 * @param requestOptions Can be a string URL (relative to the serviceUrl), or an
 * object which will be passed to fetch()
 * @param client Current FHIR client object containing patient context
 * @return requestOptions object contextualized to current patient
 */

async function contextualize(requestOptions, client) {
  const base = lib_1.absolute("/", client.state.serverUrl);

  async function contextualURL(_url) {
    const resourceType = _url.pathname.split("/").pop();

    if (!resourceType) {
      throw new Error(`Invalid url "${_url}"`);
    }

    if (settings_1.patientCompartment.indexOf(resourceType) == -1) {
      throw new Error(`Cannot filter "${resourceType}" resources by patient`);
    }

    const conformance = await lib_1.fetchConformanceStatement(client.state.serverUrl);
    const searchParam = lib_1.getPatientParam(conformance, resourceType);

    _url.searchParams.set(searchParam, client.patient.id);

    return _url.href;
  }

  if (typeof requestOptions == "string" || requestOptions instanceof URL) {
    return {
      url: await contextualURL(new URL(requestOptions + "", base))
    };
  }

  requestOptions.url = await contextualURL(new URL(requestOptions.url + "", base));
  return requestOptions;
}
/**
 * Gets single reference by id. Caches the result.
 * @param refId
 * @param cache A map to store the resolved refs
 * @param client The client instance
 * @param [signal] The `AbortSignal` if any
 * @returns The resolved reference
 * @private
 */


function getRef(refId, cache, client, signal) {
  if (!cache[refId]) {
    // Note that we set cache[refId] immediately! When the promise is
    // settled it will be updated. This is to avoid a ref being fetched
    // twice because some of these requests are executed in parallel.
    cache[refId] = client.request({
      url: refId,
      signal
    }).then(res => {
      cache[refId] = res;
      return res;
    }, error => {
      delete cache[refId];
      throw error;
    });
  }

  return Promise.resolve(cache[refId]);
}
/**
 * Resolves a reference in the given resource.
 * @param obj FHIR Resource
 */


function resolveRef(obj, path, graph, cache, client, signal) {
  const node = lib_1.getPath(obj, path);

  if (node) {
    const isArray = Array.isArray(node);
    return Promise.all(lib_1.makeArray(node).filter(Boolean).map((item, i) => {
      const ref = item.reference;

      if (ref) {
        return getRef(ref, cache, client, signal).then(sub => {
          if (graph) {
            if (isArray) {
              if (path.indexOf("..") > -1) {
                lib_1.setPath(obj, `${path.replace("..", `.${i}.`)}`, sub);
              } else {
                lib_1.setPath(obj, `${path}.${i}`, sub);
              }
            } else {
              lib_1.setPath(obj, path, sub);
            }
          }
        }).catch(ex => {
          /* ignore missing references */
          if (ex.status !== 404) {
            throw ex;
          }
        });
      }
    }));
  }
}
/**
 * Given a resource and a list of ref paths - resolves them all
 * @param obj FHIR Resource
 * @param fhirOptions The fhir options of the initiating request call
 * @param cache A map to store fetched refs
 * @param client The client instance
 * @private
 */


function resolveRefs(obj, fhirOptions, cache, client, signal) {
  // 1. Sanitize paths, remove any invalid ones
  let paths = lib_1.makeArray(fhirOptions.resolveReferences).filter(Boolean) // No false, 0, null, undefined or ""
  .map(path => String(path).trim()).filter(Boolean); // No space-only strings
  // 2. Remove duplicates

  paths = paths.filter((p, i) => {
    const index = paths.indexOf(p, i + 1);

    if (index > -1) {
      debug("Duplicated reference path \"%s\"", p);
      return false;
    }

    return true;
  }); // 3. Early exit if no valid paths are found

  if (!paths.length) {
    return Promise.resolve();
  } // 4. Group the paths by depth so that child refs are looked up
  // after their parents!


  const groups = {};
  paths.forEach(path => {
    const len = path.split(".").length;

    if (!groups[len]) {
      groups[len] = [];
    }

    groups[len].push(path);
  }); // 5. Execute groups sequentially! Paths within same group are
  // fetched in parallel!

  let task = Promise.resolve();
  Object.keys(groups).sort().forEach(len => {
    const group = groups[len];
    task = task.then(() => Promise.all(group.map(path => {
      return resolveRef(obj, path, !!fhirOptions.graph, cache, client, signal);
    })));
  });
  return task;
}
/**
 * This is a FHIR client that is returned to you from the `ready()` call of the
 * **SMART API**. You can also create it yourself if needed:
 *
 * ```js
 * // BROWSER
 * const client = FHIR.client("https://r4.smarthealthit.org");
 *
 * // SERVER
 * const client = smart(req, res).client("https://r4.smarthealthit.org");
 * ```
 */


class Client {
  /**
   * Validates the parameters, creates an instance and tries to connect it to
   * FhirJS, if one is available globally.
   */
  constructor(environment, state) {
    /**
     * @category Utility
     */
    this.units = lib_1.units;

    const _state = typeof state == "string" ? {
      serverUrl: state
    } : state; // Valid serverUrl is required!


    if (!_state.serverUrl || !_state.serverUrl.match(/https?:\/\/.+/)) {
      throw new Error("A \"serverUrl\" option is required and must begin with \"http(s)\"");
    }

    this.state = _state;
    this.environment = environment;
    this._refreshTask = null;
    const client = this; // patient api ---------------------------------------------------------

    this.patient = {
      get id() {
        return client.getPatientId();
      },

      read: (requestOptions = {}) => {
        const id = this.patient.id;
        return id ? this.request(Object.assign(Object.assign({}, requestOptions), {
          url: `Patient/${id}`
        })) : Promise.reject(new Error("Patient is not available"));
      },
      request: (requestOptions, fhirOptions = {}) => {
        if (this.patient.id) {
          return (async () => {
            const options = await contextualize(requestOptions, this);
            return this.request(options, fhirOptions);
          })();
        } else {
          return Promise.reject(new Error("Patient is not available"));
        }
      }
    }; // encounter api -------------------------------------------------------

    this.encounter = {
      get id() {
        return client.getEncounterId();
      },

      read: (requestOptions = {}) => {
        const id = this.encounter.id;
        return id ? this.request(Object.assign(Object.assign({}, requestOptions), {
          url: `Encounter/${id}`
        })) : Promise.reject(new Error("Encounter is not available"));
      }
    }; // user api ------------------------------------------------------------

    this.user = {
      get fhirUser() {
        return client.getFhirUser();
      },

      get id() {
        return client.getUserId();
      },

      get resourceType() {
        return client.getUserType();
      },

      read: (requestOptions = {}) => {
        const fhirUser = this.user.fhirUser;
        return fhirUser ? this.request(Object.assign(Object.assign({}, requestOptions), {
          url: fhirUser
        })) : Promise.reject(new Error("User is not available"));
      }
    }; // fhir.js api (attached automatically in browser)
    // ---------------------------------------------------------------------

    this.connect(environment.fhir);
  }
  /**
   * This method is used to make the "link" between the `fhirclient` and the
   * `fhir.js`, if one is available.
   * **Note:** This is called by the constructor. If fhir.js is available in
   * the global scope as `fhir`, it will automatically be linked to any [[Client]]
   * instance. You should only use this method to connect to `fhir.js` which
   * is not global.
   */


  connect(fhirJs) {
    if (typeof fhirJs == "function") {
      const options = {
        baseUrl: this.state.serverUrl.replace(/\/$/, "")
      };
      const accessToken = this.getState("tokenResponse.access_token");

      if (accessToken) {
        options.auth = {
          token: accessToken
        };
      } else {
        const {
          username,
          password
        } = this.state;

        if (username && password) {
          options.auth = {
            user: username,
            pass: password
          };
        }
      }

      this.api = fhirJs(options);
      const patientId = this.getState("tokenResponse.patient");

      if (patientId) {
        this.patient.api = fhirJs(Object.assign(Object.assign({}, options), {
          patient: patientId
        }));
      }
    }

    return this;
  }
  /**
   * Returns the ID of the selected patient or null. You should have requested
   * "launch/patient" scope. Otherwise this will return null.
   */


  getPatientId() {
    const tokenResponse = this.state.tokenResponse;

    if (tokenResponse) {
      // We have been authorized against this server but we don't know
      // the patient. This should be a scope issue.
      if (!tokenResponse.patient) {
        if (!(this.state.scope || "").match(/\blaunch(\/patient)?\b/)) {
          debug(strings_1.default.noScopeForId, "patient", "patient");
        } else {
          // The server should have returned the patient!
          debug("The ID of the selected patient is not available. Please check if your server supports that.");
        }

        return null;
      }

      return tokenResponse.patient;
    }

    if (this.state.authorizeUri) {
      debug(strings_1.default.noIfNoAuth, "the ID of the selected patient");
    } else {
      debug(strings_1.default.noFreeContext, "selected patient");
    }

    return null;
  }
  /**
   * Returns the ID of the selected encounter or null. You should have
   * requested "launch/encounter" scope. Otherwise this will return null.
   * Note that not all servers support the "launch/encounter" scope so this
   * will be null if they don't.
   */


  getEncounterId() {
    const tokenResponse = this.state.tokenResponse;

    if (tokenResponse) {
      // We have been authorized against this server but we don't know
      // the encounter. This should be a scope issue.
      if (!tokenResponse.encounter) {
        if (!(this.state.scope || "").match(/\blaunch(\/encounter)?\b/)) {
          debug(strings_1.default.noScopeForId, "encounter", "encounter");
        } else {
          // The server should have returned the encounter!
          debug("The ID of the selected encounter is not available. Please check if your server supports that, and that the selected patient has any recorded encounters.");
        }

        return null;
      }

      return tokenResponse.encounter;
    }

    if (this.state.authorizeUri) {
      debug(strings_1.default.noIfNoAuth, "the ID of the selected encounter");
    } else {
      debug(strings_1.default.noFreeContext, "selected encounter");
    }

    return null;
  }
  /**
   * Returns the (decoded) id_token if any. You need to request "openid" and
   * "profile" scopes if you need to receive an id_token (if you need to know
   * who the logged-in user is).
   */


  getIdToken() {
    const tokenResponse = this.state.tokenResponse;

    if (tokenResponse) {
      const idToken = tokenResponse.id_token;
      const scope = this.state.scope || ""; // We have been authorized against this server but we don't have
      // the id_token. This should be a scope issue.

      if (!idToken) {
        const hasOpenid = scope.match(/\bopenid\b/);
        const hasProfile = scope.match(/\bprofile\b/);
        const hasFhirUser = scope.match(/\bfhirUser\b/);

        if (!hasOpenid || !(hasFhirUser || hasProfile)) {
          debug("You are trying to get the id_token but you are not " + "using the right scopes. Please add 'openid' and " + "'fhirUser' or 'profile' to the scopes you are " + "requesting.");
        } else {
          // The server should have returned the id_token!
          debug("The id_token is not available. Please check if your server supports that.");
        }

        return null;
      }

      return lib_1.jwtDecode(idToken, this.environment);
    }

    if (this.state.authorizeUri) {
      debug(strings_1.default.noIfNoAuth, "the id_token");
    } else {
      debug(strings_1.default.noFreeContext, "id_token");
    }

    return null;
  }
  /**
   * Returns the profile of the logged_in user (if any). This is a string
   * having the following shape `"{user type}/{user id}"`. For example:
   * `"Practitioner/abc"` or `"Patient/xyz"`.
   */


  getFhirUser() {
    const idToken = this.getIdToken();

    if (idToken) {
      return idToken.profile;
    }

    return null;
  }
  /**
   * Returns the user ID or null.
   */


  getUserId() {
    const profile = this.getFhirUser();

    if (profile) {
      return profile.split("/")[1];
    }

    return null;
  }
  /**
   * Returns the type of the logged-in user or null. The result can be
   * "Practitioner", "Patient" or "RelatedPerson".
   */


  getUserType() {
    const profile = this.getFhirUser();

    if (profile) {
      return profile.split("/")[0];
    }

    return null;
  }
  /**
   * Builds and returns the value of the `Authorization` header that can be
   * sent to the FHIR server
   */


  getAuthorizationHeader() {
    const accessToken = this.getState("tokenResponse.access_token");

    if (accessToken) {
      return "Bearer " + accessToken;
    }

    const {
      username,
      password
    } = this.state;

    if (username && password) {
      return "Basic " + this.environment.btoa(username + ":" + password);
    }

    return null;
  }
  /**
   * Used internally to clear the state of the instance and the state in the
   * associated storage.
   */


  async _clearState() {
    const storage = this.environment.getStorage();
    const key = await storage.get(settings_1.SMART_KEY);

    if (key) {
      await storage.unset(key);
    }

    await storage.unset(settings_1.SMART_KEY);
    this.state.tokenResponse = {};
  }
  /**
   * Creates a new resource in a server-assigned location
   * @see http://hl7.org/fhir/http.html#create
   * @param resource A FHIR resource to be created
   * @param [requestOptions] Any options to be passed to the fetch call.
   * Note that `method` and `body` will be ignored.
   * @category Request
   */


  create(resource, requestOptions = {}) {
    return this.request(Object.assign(Object.assign({}, requestOptions), {
      url: `${resource.resourceType}`,
      method: "POST",
      body: JSON.stringify(resource),
      headers: Object.assign({
        // TODO: Do we need to alternate with "application/json+fhir"?
        "Content-Type": "application/json"
      }, requestOptions.headers)
    }));
  }
  /**
   * Creates a new current version for an existing resource or creates an
   * initial version if no resource already exists for the given id.
   * @see http://hl7.org/fhir/http.html#update
   * @param resource A FHIR resource to be updated
   * @param requestOptions Any options to be passed to the fetch call.
   * Note that `method` and `body` will be ignored.
   * @category Request
   */


  update(resource, requestOptions = {}) {
    return this.request(Object.assign(Object.assign({}, requestOptions), {
      url: `${resource.resourceType}/${resource.id}`,
      method: "PUT",
      body: JSON.stringify(resource),
      headers: Object.assign({
        // TODO: Do we need to alternate with "application/json+fhir"?
        "Content-Type": "application/json"
      }, requestOptions.headers)
    }));
  }
  /**
   * Removes an existing resource.
   * @see http://hl7.org/fhir/http.html#delete
   * @param url Relative URI of the FHIR resource to be deleted
   * (format: `resourceType/id`)
   * @param requestOptions Any options (except `method` which will be fixed
   * to `DELETE`) to be passed to the fetch call.
   * @category Request
   */


  delete(url, requestOptions = {}) {
    return this.request(Object.assign(Object.assign({}, requestOptions), {
      url,
      method: "DELETE"
    }));
  }
  /**
   * @param requestOptions Can be a string URL (relative to the serviceUrl),
   * or an object which will be passed to fetch()
   * @param fhirOptions Additional options to control the behavior
   * @param _resolvedRefs DO NOT USE! Used internally.
   * @category Request
   */


  async request(requestOptions, fhirOptions = {}, _resolvedRefs = {}) {
    var _a;

    const debugRequest = lib_1.debug.extend("client:request");

    if (!requestOptions) {
      throw new Error("request requires an url or request options as argument");
    } // url -----------------------------------------------------------------


    let url;

    if (typeof requestOptions == "string" || requestOptions instanceof URL) {
      url = String(requestOptions);
      requestOptions = {};
    } else {
      url = String(requestOptions.url);
    }

    url = lib_1.absolute(url, this.state.serverUrl);
    const options = {
      graph: fhirOptions.graph !== false,
      flat: !!fhirOptions.flat,
      pageLimit: (_a = fhirOptions.pageLimit) !== null && _a !== void 0 ? _a : 1,
      resolveReferences: fhirOptions.resolveReferences || [],
      useRefreshToken: fhirOptions.useRefreshToken !== false,
      onPage: typeof fhirOptions.onPage == "function" ? fhirOptions.onPage : undefined
    };
    const signal = requestOptions.signal || undefined; // Refresh the access token if needed

    const job = options.useRefreshToken ? this.refreshIfNeeded({
      signal
    }).then(() => requestOptions) : Promise.resolve(requestOptions);
    return job // Add the Authorization header now, after the access token might
    // have been updated
    .then(requestOptions => {
      const authHeader = this.getAuthorizationHeader();

      if (authHeader) {
        requestOptions.headers = Object.assign(Object.assign({}, requestOptions.headers), {
          Authorization: authHeader
        });
      }

      return requestOptions;
    }) // Make the request
    .then(requestOptions => {
      debugRequest("%s, options: %O, fhirOptions: %O", url, requestOptions, options);
      return lib_1.request(url, requestOptions);
    }) // Handle 401 ------------------------------------------------------
    .catch(async error => {
      if (error.status == 401) {
        // !accessToken -> not authorized -> No session. Need to launch.
        if (!this.getState("tokenResponse.access_token")) {
          throw new Error("This app cannot be accessed directly. Please launch it as SMART app!");
        } // auto-refresh not enabled and Session expired.
        // Need to re-launch. Clear state to start over!


        if (!options.useRefreshToken) {
          debugRequest("Your session has expired and the useRefreshToken option is set to false. Please re-launch the app.");
          await this._clearState();
          throw new Error(strings_1.default.expired);
        } // otherwise -> auto-refresh failed. Session expired.
        // Need to re-launch. Clear state to start over!


        debugRequest("Auto-refresh failed! Please re-launch the app.");
        await this._clearState();
        throw new Error(strings_1.default.expired);
      }

      throw error;
    }) // Handle 403 ------------------------------------------------------
    .catch(error => {
      if (error.status == 403) {
        debugRequest("Permission denied! Please make sure that you have requested the proper scopes.");
      }

      throw error;
    }).then(data => {
      // Handle raw responses (anything other than json) -------------
      if (!data) return data;
      if (typeof data == "string") return data;
      if (data instanceof Response) return data; // Resolve References ------------------------------------------

      return (async _data => {
        if (_data.resourceType == "Bundle") {
          await Promise.all((_data.entry || []).map(item => resolveRefs(item.resource, options, _resolvedRefs, this, signal)));
        } else {
          await resolveRefs(_data, options, _resolvedRefs, this, signal);
        }

        return _data;
      })(data) // Pagination ----------------------------------------------
      .then(async _data => {
        if (_data && _data.resourceType == "Bundle") {
          const links = _data.link || [];

          if (options.flat) {
            _data = (_data.entry || []).map(entry => entry.resource);
          }

          if (options.onPage) {
            await options.onPage(_data, Object.assign({}, _resolvedRefs));
          }

          if (--options.pageLimit) {
            const next = links.find(l => l.relation == "next");
            _data = lib_1.makeArray(_data);

            if (next && next.url) {
              const nextPage = await this.request({
                url: next.url,
                // Aborting the main request (even after it is complete)
                // must propagate to any child requests and abort them!
                // To do so, just pass the same AbortSignal if one is
                // provided.
                signal
              }, options, _resolvedRefs);

              if (options.onPage) {
                return null;
              }

              if (options.resolveReferences.length) {
                Object.assign(_resolvedRefs, nextPage.references);
                return _data.concat(lib_1.makeArray(nextPage.data || nextPage));
              }

              return _data.concat(lib_1.makeArray(nextPage));
            }
          }
        }

        return _data;
      }) // Finalize ------------------------------------------------
      .then(_data => {
        if (options.graph) {
          _resolvedRefs = {};
        } else if (!options.onPage && options.resolveReferences.length) {
          return {
            data: _data,
            references: _resolvedRefs
          };
        }

        return _data;
      });
    });
  }
  /**
   * Checks if access token and refresh token are present. If they are, and if
   * the access token is expired or is about to expire in the next 10 seconds,
   * calls `this.refresh()` to obtain new access token.
   * @param requestOptions Any options to pass to the fetch call. Most of them
   * will be overridden, bit it might still be useful for passing additional
   * request options or an abort signal.
   * @category Request
   */


  refreshIfNeeded(requestOptions = {}) {
    const accessToken = this.getState("tokenResponse.access_token");
    const refreshToken = this.getState("tokenResponse.refresh_token");
    const expiresAt = this.state.expiresAt || 0;

    if (accessToken && refreshToken && expiresAt - 10 < Date.now() / 1000) {
      return this.refresh(requestOptions);
    }

    return Promise.resolve(this.state);
  }
  /**
   * Use the refresh token to obtain new access token. If the refresh token is
   * expired (or this fails for any other reason) it will be deleted from the
   * state, so that we don't enter into loops trying to re-authorize.
   *
   * This method is typically called internally from [[Client.request]] if
   * certain request fails with 401.
   *
   * @param requestOptions Any options to pass to the fetch call. Most of them
   * will be overridden, bit it might still be useful for passing additional
   * request options or an abort signal.
   * @category Request
   */


  refresh(requestOptions = {}) {
    var _a, _b;

    const debugRefresh = lib_1.debug.extend("client:refresh");
    debugRefresh("Attempting to refresh with refresh_token...");
    const refreshToken = (_b = (_a = this.state) === null || _a === void 0 ? void 0 : _a.tokenResponse) === null || _b === void 0 ? void 0 : _b.refresh_token;

    if (!refreshToken) {
      throw new Error("Unable to refresh. No refresh_token found.");
    }

    const tokenUri = this.state.tokenUri;

    if (!tokenUri) {
      throw new Error("Unable to refresh. No tokenUri found.");
    }

    const scopes = this.getState("tokenResponse.scope") || "";
    const hasOfflineAccess = scopes.search(/\boffline_access\b/) > -1;
    const hasOnlineAccess = scopes.search(/\bonline_access\b/) > -1;

    if (!hasOfflineAccess && !hasOnlineAccess) {
      throw new Error("Unable to refresh. No offline_access or online_access scope found.");
    } // This method is typically called internally from `request` if certain
    // request fails with 401. However, clients will often run multiple
    // requests in parallel which may result in multiple refresh calls.
    // To avoid that, we keep a reference to the current refresh task (if any).


    if (!this._refreshTask) {
      const refreshRequestOptions = Object.assign(Object.assign({
        credentials: this.environment.options.refreshTokenWithCredentials || "same-origin"
      }, requestOptions), {
        method: "POST",
        mode: "cors",
        headers: Object.assign(Object.assign({}, requestOptions.headers || {}), {
          "content-type": "application/x-www-form-urlencoded"
        }),
        body: `grant_type=refresh_token&refresh_token=${encodeURIComponent(refreshToken)}`
      }); // custom authorization header can be passed on manual calls

      if (!("authorization" in refreshRequestOptions.headers)) {
        const {
          clientSecret,
          clientId
        } = this.state;

        if (clientSecret) {
          // @ts-ignore
          refreshRequestOptions.headers.authorization = "Basic " + this.environment.btoa(clientId + ":" + clientSecret);
        }
      }

      this._refreshTask = lib_1.request(tokenUri, refreshRequestOptions).then(data => {
        if (!data.access_token) {
          throw new Error("No access token received");
        }

        debugRefresh("Received new access token response %O", data);
        Object.assign(this.state.tokenResponse, data);
        this.state.expiresAt = lib_1.getAccessTokenExpiration(data, this.environment);
        return this.state;
      }).catch(error => {
        var _a, _b;

        if ((_b = (_a = this.state) === null || _a === void 0 ? void 0 : _a.tokenResponse) === null || _b === void 0 ? void 0 : _b.refresh_token) {
          debugRefresh("Deleting the expired or invalid refresh token.");
          delete this.state.tokenResponse.refresh_token;
        }

        throw error;
      }).finally(() => {
        this._refreshTask = null;
        const key = this.state.key;

        if (key) {
          this.environment.getStorage().set(key, this.state);
        } else {
          debugRefresh("No 'key' found in Clint.state. Cannot persist the instance.");
        }
      });
    }

    return this._refreshTask;
  } // utils -------------------------------------------------------------------

  /**
   * Groups the observations by code. Returns a map that will look like:
   * ```js
   * const map = client.byCodes(observations, "code");
   * // map = {
   * //     "55284-4": [ observation1, observation2 ],
   * //     "6082-2": [ observation3 ]
   * // }
   * ```
   * @param observations Array of observations
   * @param property The name of a CodeableConcept property to group by
   * @todo This should be deprecated and moved elsewhere. One should not have
   * to obtain an instance of [[Client]] just to use utility functions like this.
   * @deprecated
   * @category Utility
   */


  byCode(observations, property) {
    return lib_1.byCode(observations, property);
  }
  /**
   * First groups the observations by code using `byCode`. Then returns a function
   * that accepts codes as arguments and will return a flat array of observations
   * having that codes. Example:
   * ```js
   * const filter = client.byCodes(observations, "category");
   * filter("laboratory") // => [ observation1, observation2 ]
   * filter("vital-signs") // => [ observation3 ]
   * filter("laboratory", "vital-signs") // => [ observation1, observation2, observation3 ]
   * ```
   * @param observations Array of observations
   * @param property The name of a CodeableConcept property to group by
   * @todo This should be deprecated and moved elsewhere. One should not have
   * to obtain an instance of [[Client]] just to use utility functions like this.
   * @deprecated
   * @category Utility
   */


  byCodes(observations, property) {
    return lib_1.byCodes(observations, property);
  }
  /**
   * Walks through an object (or array) and returns the value found at the
   * provided path. This function is very simple so it intentionally does not
   * support any argument polymorphism, meaning that the path can only be a
   * dot-separated string. If the path is invalid returns undefined.
   * @param obj The object (or Array) to walk through
   * @param path The path (eg. "a.b.4.c")
   * @returns {*} Whatever is found in the path or undefined
   * @todo This should be deprecated and moved elsewhere. One should not have
   * to obtain an instance of [[Client]] just to use utility functions like this.
   * @deprecated
   * @category Utility
   */


  getPath(obj, path = "") {
    return lib_1.getPath(obj, path);
  }
  /**
   * Returns a copy of the client state. Accepts a dot-separated path argument
   * (same as for `getPath`) to allow for selecting specific properties.
   * Examples:
   * ```js
   * client.getState(); // -> the entire state object
   * client.getState("serverUrl"); // -> the URL we are connected to
   * client.getState("tokenResponse.patient"); // -> The selected patient ID (if any)
   * ```
   * @param path The path (eg. "a.b.4.c")
   * @returns {*} Whatever is found in the path or undefined
   */


  getState(path = "") {
    return lib_1.getPath(Object.assign({}, this.state), path);
  }
  /**
   * Returns a promise that will be resolved with the fhir version as defined
   * in the CapabilityStatement.
   */


  getFhirVersion() {
    return lib_1.fetchConformanceStatement(this.state.serverUrl).then(metadata => metadata.fhirVersion);
  }
  /**
   * Returns a promise that will be resolved with the numeric fhir version
   * - 2 for DSTU2
   * - 3 for STU3
   * - 4 for R4
   * - 0 if the version is not known
   */


  getFhirRelease() {
    return this.getFhirVersion().then(v => {
      var _a;

      return (_a = settings_1.fhirVersions[v]) !== null && _a !== void 0 ? _a : 0;
    });
  }

}

exports.default = Client;

/***/ }),

/***/ "./node_modules/fhirclient/lib/HttpError.js":
/*!**************************************************!*\
  !*** ./node_modules/fhirclient/lib/HttpError.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

class HttpError extends Error {
  constructor(message = "Unknown error", statusCode = 0, statusText = "Error", body = null) {
    super(message);
    this.message = message;
    this.name = "HttpError";
    this.statusCode = statusCode;
    this.status = statusCode;
    this.statusText = statusText;
    this.body = body;
  }

  toJSON() {
    return {
      name: this.name,
      statusCode: this.statusCode,
      status: this.status,
      statusText: this.statusText,
      message: this.message,
      body: this.body
    };
  }

}

exports.default = HttpError;

/***/ }),

/***/ "./node_modules/fhirclient/lib/adapters/BrowserAdapter.js":
/*!****************************************************************!*\
  !*** ./node_modules/fhirclient/lib/adapters/BrowserAdapter.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const smart_1 = __webpack_require__(/*! ../smart */ "./node_modules/fhirclient/lib/smart.js");

const Client_1 = __webpack_require__(/*! ../Client */ "./node_modules/fhirclient/lib/Client.js");

const BrowserStorage_1 = __webpack_require__(/*! ../storage/BrowserStorage */ "./node_modules/fhirclient/lib/storage/BrowserStorage.js");
/**
 * Browser Adapter
 */


class BrowserAdapter {
  /**
   * @param options Environment-specific options
   */
  constructor(options = {}) {
    /**
     * Stores the URL instance associated with this adapter
     */
    this._url = null;
    /**
     * Holds the Storage instance associated with this instance
     */

    this._storage = null;
    this.options = Object.assign({
      // Replaces the browser's current URL
      // using window.history.replaceState API or by reloading.
      replaceBrowserHistory: true,
      // When set to true, this variable will fully utilize
      // HTML5 sessionStorage API.
      // This variable can be overridden to false by setting
      // FHIR.oauth2.settings.fullSessionStorageSupport = false.
      // When set to false, the sessionStorage will be keyed
      // by a state variable. This is to allow the embedded IE browser
      // instances instantiated on a single thread to continue to
      // function without having sessionStorage data shared
      // across the embedded IE instances.
      fullSessionStorageSupport: true,
      // Do we want to send cookies while making a request to the token
      // endpoint in order to obtain new access token using existing
      // refresh token. In rare cases the auth server might require the
      // client to send cookies along with those requests. In this case
      // developers will have to change this before initializing the app
      // like so:
      // `FHIR.oauth2.settings.refreshTokenWithCredentials = "include";`
      // or
      // `FHIR.oauth2.settings.refreshTokenWithCredentials = "same-origin";`
      // Can be one of:
      // "include"     - always send cookies
      // "same-origin" - only send cookies if we are on the same domain (default)
      // "omit"        - do not send cookies
      refreshTokenWithCredentials: "same-origin"
    }, options);
  }
  /**
   * Given a relative path, returns an absolute url using the instance base URL
   */


  relative(path) {
    return new URL(path, this.getUrl().href).href;
  }
  /**
   * In browsers we need to be able to (dynamically) check if fhir.js is
   * included in the page. If it is, it should have created a "fhir" variable
   * in the global scope.
   */


  get fhir() {
    // @ts-ignore
    return typeof fhir === "function" ? fhir : null;
  }
  /**
   * Given the current environment, this method must return the current url
   * as URL instance
   */


  getUrl() {
    if (!this._url) {
      this._url = new URL(location + "");
    }

    return this._url;
  }
  /**
   * Given the current environment, this method must redirect to the given
   * path
   */


  redirect(to) {
    location.href = to;
  }
  /**
   * Returns a BrowserStorage object which is just a wrapper around
   * sessionStorage
   */


  getStorage() {
    if (!this._storage) {
      this._storage = new BrowserStorage_1.default();
    }

    return this._storage;
  }
  /**
   * Returns a reference to the AbortController constructor. In browsers,
   * AbortController will always be available as global (native or polyfilled)
   */


  getAbortController() {
    return AbortController;
  }
  /**
   * ASCII string to Base64
   */


  atob(str) {
    return window.atob(str);
  }
  /**
   * Base64 to ASCII string
   */


  btoa(str) {
    return window.btoa(str);
  }
  /**
   * Creates and returns adapter-aware SMART api. Not that while the shape of
   * the returned object is well known, the arguments to this function are not.
   * Those who override this method are free to require any environment-specific
   * arguments. For example in node we will need a request, a response and
   * optionally a storage or storage factory function.
   */


  getSmartApi() {
    return {
      ready: (...args) => smart_1.ready(this, ...args),
      authorize: options => smart_1.authorize(this, options),
      init: options => smart_1.init(this, options),
      client: state => new Client_1.default(this, state),
      options: this.options
    };
  }

}

exports.default = BrowserAdapter;

/***/ }),

/***/ "./node_modules/fhirclient/lib/entry/browser.js":
/*!******************************************************!*\
  !*** ./node_modules/fhirclient/lib/entry/browser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // In Browsers we create an adapter, get the SMART api from it and build the
// global FHIR object

const BrowserAdapter_1 = __webpack_require__(/*! ../adapters/BrowserAdapter */ "./node_modules/fhirclient/lib/adapters/BrowserAdapter.js");

const adapter = new BrowserAdapter_1.default();
const {
  ready,
  authorize,
  init,
  client,
  options
} = adapter.getSmartApi(); // We have two kinds of browser builds - "pure" for new browsers and "legacy"
// for old ones. In pure builds we assume that the browser supports everything
// we need. In legacy mode, the library also acts as a polyfill. Babel will
// automatically polyfill everything except "fetch", which we have to handle
// manually.
// @ts-ignore

if (typeof FHIRCLIENT_PURE == "undefined") {
  const fetch = __webpack_require__(/*! cross-fetch */ "./node_modules/cross-fetch/dist/browser-ponyfill.js");

  __webpack_require__(/*! abortcontroller-polyfill/dist/abortcontroller-polyfill-only */ "./node_modules/abortcontroller-polyfill/dist/abortcontroller-polyfill-only.js");

  if (!window.fetch) {
    window.fetch = fetch.default;
    window.Headers = fetch.Headers;
    window.Request = fetch.Request;
    window.Response = fetch.Response;
  }
} // $lab:coverage:off$


const FHIR = {
  AbortController: window.AbortController,
  client,
  oauth2: {
    settings: options,
    ready,
    authorize,
    init
  }
};
module.exports = FHIR; // $lab:coverage:on$

/***/ }),

/***/ "./node_modules/fhirclient/lib/lib.js":
/*!********************************************!*\
  !*** ./node_modules/fhirclient/lib/lib.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * This file contains some shared functions. They are used by other modules, but
 * are defined here so that tests can import this library and test them.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTargetWindow = exports.getPatientParam = exports.byCodes = exports.byCode = exports.getAccessTokenExpiration = exports.jwtDecode = exports.randomString = exports.absolute = exports.makeArray = exports.setPath = exports.getPath = exports.humanizeError = exports.fetchConformanceStatement = exports.getAndCache = exports.request = exports.responseToJSON = exports.checkResponse = exports.units = exports.debug = void 0;

const HttpError_1 = __webpack_require__(/*! ./HttpError */ "./node_modules/fhirclient/lib/HttpError.js");

const settings_1 = __webpack_require__(/*! ./settings */ "./node_modules/fhirclient/lib/settings.js");

const debug = __webpack_require__(/*! debug */ "./node_modules/fhirclient/node_modules/debug/src/browser.js"); // $lab:coverage:off$
// @ts-ignore


const {
  fetch
} = typeof FHIRCLIENT_PURE !== "undefined" ? window : __webpack_require__(/*! cross-fetch */ "./node_modules/cross-fetch/dist/browser-ponyfill.js"); // $lab:coverage:on$

const _debug = debug("FHIR");

exports.debug = _debug;
/**
 * The cache for the `getAndCache` function
 */

const cache = {};
/**
 * A namespace with functions for converting between different measurement units
 */

exports.units = {
  cm({
    code,
    value
  }) {
    ensureNumerical({
      code,
      value
    });
    if (code == "cm") return value;
    if (code == "m") return value * 100;
    if (code == "in") return value * 2.54;
    if (code == "[in_us]") return value * 2.54;
    if (code == "[in_i]") return value * 2.54;
    if (code == "ft") return value * 30.48;
    if (code == "[ft_us]") return value * 30.48;
    throw new Error("Unrecognized length unit: " + code);
  },

  kg({
    code,
    value
  }) {
    ensureNumerical({
      code,
      value
    });
    if (code == "kg") return value;
    if (code == "g") return value / 1000;
    if (code.match(/lb/)) return value / 2.20462;
    if (code.match(/oz/)) return value / 35.274;
    throw new Error("Unrecognized weight unit: " + code);
  },

  any(pq) {
    ensureNumerical(pq);
    return pq.value;
  }

};
/**
 * Assertion function to guard arguments for `units` functions
 */

function ensureNumerical({
  value,
  code
}) {
  if (typeof value !== "number") {
    throw new Error("Found a non-numerical unit: " + value + " " + code);
  }
}
/**
 * Used in fetch Promise chains to reject if the "ok" property is not true
 */


async function checkResponse(resp) {
  if (!resp.ok) {
    throw await humanizeError(resp);
  }

  return resp;
}

exports.checkResponse = checkResponse;
/**
 * Used in fetch Promise chains to return the JSON version of the response.
 * Note that `resp.json()` will throw on empty body so we use resp.text()
 * instead.
 */

function responseToJSON(resp) {
  return resp.text().then(text => text.length ? JSON.parse(text) : "");
}

exports.responseToJSON = responseToJSON;
/**
 * This is our built-in request function. It does a few things by default
 * (unless told otherwise):
 * - Makes CORS requests
 * - Sets accept header to "application/json"
 * - Handles errors
 * - If the response is json return the json object
 * - If the response is text return the result text
 * - Otherwise return the response object on which we call stuff like `.blob()`
 */

function request(url, options = {}) {
  return fetch(url, Object.assign(Object.assign({
    mode: "cors"
  }, options), {
    headers: Object.assign({
      accept: "application/json"
    }, options.headers)
  })).then(checkResponse).then(res => {
    const type = res.headers.get("Content-Type") + "";

    if (type.match(/\bjson\b/i)) {
      return responseToJSON(res).then(body => ({
        res,
        body
      }));
    }

    if (type.match(/^text\//i)) {
      return res.text().then(body => ({
        res,
        body
      }));
    }

    return {
      res
    };
  }).then(({
    res,
    body
  }) => {
    // Some servers will reply after CREATE with json content type but with
    // empty body. In this case check if a location header is received and
    // fetch that to use it as the final result.
    if (!body && res.status == 201) {
      const location = res.headers.get("location") + "";

      if (location) {
        return request(location, Object.assign(Object.assign({}, options), {
          method: "GET",
          body: null
        }));
      }
    } // For any non-text and non-json response return the Response object.
    // This to let users decide if they want to call text(), blob() or
    // something else on it


    if (body === undefined) {
      return res;
    } // Otherwise just return the parsed body (can also be "" or null)


    return body;
  });
}

exports.request = request;
/**
 * Makes a request using `fetch` and stores the result in internal memory cache.
 * The cache is cleared when the page is unloaded.
 * @param url The URL to request
 * @param requestOptions Request options
 * @param force If true, reload from source and update the cache, even if it has
 * already been cached.
 */

function getAndCache(url, requestOptions, force = "development" === "test") {
  if (force || !cache[url]) {
    cache[url] = request(url, requestOptions);
    return cache[url];
  }

  return Promise.resolve(cache[url]);
}

exports.getAndCache = getAndCache;
/**
 * Fetches the conformance statement from the given base URL.
 * Note that the result is cached in memory (until the page is reloaded in the
 * browser) because it might have to be re-used by the client
 * @param baseUrl The base URL of the FHIR server
 * @param [requestOptions] Any options passed to the fetch call
 */

function fetchConformanceStatement(baseUrl = "/", requestOptions) {
  const url = String(baseUrl).replace(/\/*$/, "/") + "metadata";
  return getAndCache(url, requestOptions).catch(ex => {
    throw new Error(`Failed to fetch the conformance statement from "${url}". ${ex}`);
  });
}

exports.fetchConformanceStatement = fetchConformanceStatement;
/**
 * Given a response object, generates and throws detailed HttpError.
 * @param resp The `Response` object of a failed `fetch` request
 */

async function humanizeError(resp) {
  let msg = `${resp.status} ${resp.statusText}\nURL: ${resp.url}`;
  let body = null;

  try {
    const type = resp.headers.get("Content-Type") || "text/plain";

    if (type.match(/\bjson\b/i)) {
      body = await resp.json();

      if (body.error) {
        msg += "\n" + body.error;

        if (body.error_description) {
          msg += ": " + body.error_description;
        }
      } else {
        msg += "\n\n" + JSON.stringify(body, null, 4);
      }
    } else if (type.match(/^text\//i)) {
      body = await resp.text();

      if (body) {
        msg += "\n\n" + body;
      }
    }
  } catch (_) {// ignore
  }

  throw new HttpError_1.default(msg, resp.status, resp.statusText, body);
}

exports.humanizeError = humanizeError;
/**
 * Walks through an object (or array) and returns the value found at the
 * provided path. This function is very simple so it intentionally does not
 * support any argument polymorphism, meaning that the path can only be a
 * dot-separated string. If the path is invalid returns undefined.
 * @param obj The object (or Array) to walk through
 * @param path The path (eg. "a.b.4.c")
 * @returns {*} Whatever is found in the path or undefined
 */

function getPath(obj, path = "") {
  path = path.trim();

  if (!path) {
    return obj;
  }

  let segments = path.split(".");
  let result = obj;

  while (result && segments.length) {
    const key = segments.shift();

    if (!key && Array.isArray(result)) {
      return result.map(o => getPath(o, segments.join(".")));
    } else {
      result = result[key];
    }
  }

  return result;
}

exports.getPath = getPath;
/**
 * Like getPath, but if the node is found, its value is set to @value
 * @param obj The object (or Array) to walk through
 * @param path The path (eg. "a.b.4.c")
 * @param value The value to set
 * @param createEmpty If true, create missing intermediate objects or arrays
 * @returns The modified object
 */

function setPath(obj, path, value, createEmpty = false) {
  path.trim().split(".").reduce((out, key, idx, arr) => {
    if (out && idx === arr.length - 1) {
      out[key] = value;
    } else {
      if (out && out[key] === undefined && createEmpty) {
        out[key] = arr[idx + 1].match(/^[0-9]+$/) ? [] : {};
      }

      return out ? out[key] : undefined;
    }
  }, obj);
  return obj;
}

exports.setPath = setPath;
/**
 * If the argument is an array returns it as is. Otherwise puts it in an array
 * (`[arg]`) and returns the result
 * @param arg The element to test and possibly convert to array
 * @category Utility
 */

function makeArray(arg) {
  if (Array.isArray(arg)) {
    return arg;
  }

  return [arg];
}

exports.makeArray = makeArray;
/**
 * Given a path, converts it to absolute url based on the `baseUrl`. If baseUrl
 * is not provided, the result would be a rooted path (one that starts with `/`).
 * @param path The path to convert
 * @param baseUrl The base URL
 */

function absolute(path, baseUrl) {
  if (path.match(/^http/)) return path;
  if (path.match(/^urn/)) return path;
  return String(baseUrl || "").replace(/\/+$/, "") + "/" + path.replace(/^\/+/, "");
}

exports.absolute = absolute;
/**
 * Generates random strings. By default this returns random 8 characters long
 * alphanumeric strings.
 * @param strLength The length of the output string. Defaults to 8.
 * @param charSet A string containing all the possible characters.
 *     Defaults to all the upper and lower-case letters plus digits.
 * @category Utility
 */

function randomString(strLength = 8, charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789") {
  const result = [];
  const len = charSet.length;

  while (strLength--) {
    result.push(charSet.charAt(Math.floor(Math.random() * len)));
  }

  return result.join("");
}

exports.randomString = randomString;
/**
 * Decodes a JWT token and returns it's body.
 * @param token The token to read
 * @param env An `Adapter` or any other object that has an `atob` method
 * @category Utility
 */

function jwtDecode(token, env) {
  const payload = token.split(".")[1];
  return payload ? JSON.parse(env.atob(payload)) : null;
}

exports.jwtDecode = jwtDecode;
/**
 * Given a token response, computes and returns the expiresAt timestamp.
 * Note that this should only be used immediately after an access token is
 * received, otherwise the computed timestamp will be incorrect.
 * @param tokenResponse
 * @param env
 */

function getAccessTokenExpiration(tokenResponse, env) {
  const now = Math.floor(Date.now() / 1000); // Option 1 - using the expires_in property of the token response

  if (tokenResponse.expires_in) {
    return now + tokenResponse.expires_in;
  } // Option 2 - using the exp property of JWT tokens (must not assume JWT!)


  if (tokenResponse.access_token) {
    let tokenBody = jwtDecode(tokenResponse.access_token, env);

    if (tokenBody && tokenBody.exp) {
      return tokenBody.exp;
    }
  } // Option 3 - if none of the above worked set this to 5 minutes after now


  return now + 300;
}

exports.getAccessTokenExpiration = getAccessTokenExpiration;
/**
 * Groups the observations by code. Returns a map that will look like:
 * ```js
 * const map = client.byCodes(observations, "code");
 * // map = {
 * //     "55284-4": [ observation1, observation2 ],
 * //     "6082-2": [ observation3 ]
 * // }
 * ```
 * @param observations Array of observations
 * @param property The name of a CodeableConcept property to group by
 */

function byCode(observations, property) {
  const ret = {};

  function handleCodeableConcept(concept, observation) {
    if (concept && Array.isArray(concept.coding)) {
      concept.coding.forEach(({
        code
      }) => {
        if (code) {
          ret[code] = ret[code] || [];
          ret[code].push(observation);
        }
      });
    }
  }

  makeArray(observations).forEach(o => {
    if (o.resourceType === "Observation" && o[property]) {
      if (Array.isArray(o[property])) {
        o[property].forEach(concept => handleCodeableConcept(concept, o));
      } else {
        handleCodeableConcept(o[property], o);
      }
    }
  });
  return ret;
}

exports.byCode = byCode;
/**
 * First groups the observations by code using `byCode`. Then returns a function
 * that accepts codes as arguments and will return a flat array of observations
 * having that codes. Example:
 * ```js
 * const filter = client.byCodes(observations, "category");
 * filter("laboratory") // => [ observation1, observation2 ]
 * filter("vital-signs") // => [ observation3 ]
 * filter("laboratory", "vital-signs") // => [ observation1, observation2, observation3 ]
 * ```
 * @param observations Array of observations
 * @param property The name of a CodeableConcept property to group by
 */

function byCodes(observations, property) {
  const bank = byCode(observations, property);
  return (...codes) => codes.filter(code => code + "" in bank).reduce((prev, code) => prev.concat(bank[code + ""]), []);
}

exports.byCodes = byCodes;
/**
 * Given a conformance statement and a resource type, returns the name of the
 * URL parameter that can be used to scope the resource type by patient ID.
 */

function getPatientParam(conformance, resourceType) {
  // Find what resources are supported by this server
  const resources = getPath(conformance, "rest.0.resource") || []; // Check if this resource is supported

  const meta = resources.find(r => r.type === resourceType);

  if (!meta) {
    throw new Error(`Resource "${resourceType}" is not supported by this FHIR server`);
  } // Check if any search parameters are available for this resource


  if (!Array.isArray(meta.searchParam)) {
    throw new Error(`No search parameters supported for "${resourceType}" on this FHIR server`);
  } // This is a rare case but could happen in generic workflows


  if (resourceType == "Patient" && meta.searchParam.find(x => x.name == "_id")) {
    return "_id";
  } // Now find the first possible parameter name


  const out = settings_1.patientParams.find(p => meta.searchParam.find(x => x.name == p)); // If there is no match

  if (!out) {
    throw new Error("I don't know what param to use for " + resourceType);
  }

  return out;
}

exports.getPatientParam = getPatientParam;
/**
 * Resolves a reference to target window. It may also open new window or tab if
 * the `target = "popup"` or `target = "_blank"`.
 * @param target
 * @param width Only used when `target = "popup"`
 * @param height Only used when `target = "popup"`
 */

async function getTargetWindow(target, width = 800, height = 720) {
  // The target can be a function that returns the target. This can be
  // used to open a layer pop-up with an iframe and then return a reference
  // to that iframe (or its name)
  if (typeof target == "function") {
    target = await target();
  } // The target can be a window reference


  if (target && typeof target == "object") {
    return target;
  } // At this point target must be a string


  if (typeof target != "string") {
    _debug("Invalid target type '%s'. Failing back to '_self'.", typeof target);

    return self;
  } // Current window


  if (target == "_self") {
    return self;
  } // The parent frame


  if (target == "_parent") {
    return parent;
  } // The top window


  if (target == "_top") {
    return top;
  } // New tab or window


  if (target == "_blank") {
    let error,
        targetWindow = null;

    try {
      targetWindow = window.open("", "SMARTAuthPopup");

      if (!targetWindow) {
        throw new Error("Perhaps window.open was blocked");
      }
    } catch (e) {
      error = e;
    }

    if (!targetWindow) {
      _debug("Cannot open window. Failing back to '_self'. %s", error);

      return self;
    } else {
      return targetWindow;
    }
  } // Popup window


  if (target == "popup") {
    let error,
        targetWindow = null; // if (!targetWindow || targetWindow.closed) {

    try {
      targetWindow = window.open("", "SMARTAuthPopup", ["height=" + height, "width=" + width, "menubar=0", "resizable=1", "status=0", "top=" + (screen.height - height) / 2, "left=" + (screen.width - width) / 2].join(","));

      if (!targetWindow) {
        throw new Error("Perhaps the popup window was blocked");
      }
    } catch (e) {
      error = e;
    }

    if (!targetWindow) {
      _debug("Cannot open window. Failing back to '_self'. %s", error);

      return self;
    } else {
      return targetWindow;
    }
  } // Frame or window by name


  const winOrFrame = frames[target];

  if (winOrFrame) {
    return winOrFrame;
  }

  _debug("Unknown target '%s'. Failing back to '_self'.", target);

  return self;
}

exports.getTargetWindow = getTargetWindow;

/***/ }),

/***/ "./node_modules/fhirclient/lib/settings.js":
/*!*************************************************!*\
  !*** ./node_modules/fhirclient/lib/settings.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SMART_KEY = exports.patientParams = exports.fhirVersions = exports.patientCompartment = void 0;
/**
 * Combined list of FHIR resource types accepting patient parameter in FHIR R2-R4
 */

exports.patientCompartment = ["Account", "AdverseEvent", "AllergyIntolerance", "Appointment", "AppointmentResponse", "AuditEvent", "Basic", "BodySite", "BodyStructure", "CarePlan", "CareTeam", "ChargeItem", "Claim", "ClaimResponse", "ClinicalImpression", "Communication", "CommunicationRequest", "Composition", "Condition", "Consent", "Coverage", "CoverageEligibilityRequest", "CoverageEligibilityResponse", "DetectedIssue", "DeviceRequest", "DeviceUseRequest", "DeviceUseStatement", "DiagnosticOrder", "DiagnosticReport", "DocumentManifest", "DocumentReference", "EligibilityRequest", "Encounter", "EnrollmentRequest", "EpisodeOfCare", "ExplanationOfBenefit", "FamilyMemberHistory", "Flag", "Goal", "Group", "ImagingManifest", "ImagingObjectSelection", "ImagingStudy", "Immunization", "ImmunizationEvaluation", "ImmunizationRecommendation", "Invoice", "List", "MeasureReport", "Media", "MedicationAdministration", "MedicationDispense", "MedicationOrder", "MedicationRequest", "MedicationStatement", "MolecularSequence", "NutritionOrder", "Observation", "Order", "Patient", "Person", "Procedure", "ProcedureRequest", "Provenance", "QuestionnaireResponse", "ReferralRequest", "RelatedPerson", "RequestGroup", "ResearchSubject", "RiskAssessment", "Schedule", "ServiceRequest", "Specimen", "SupplyDelivery", "SupplyRequest", "VisionPrescription"];
/**
 * Map of FHIR releases and their abstract version as number
 */

exports.fhirVersions = {
  "0.4.0": 2,
  "0.5.0": 2,
  "1.0.0": 2,
  "1.0.1": 2,
  "1.0.2": 2,
  "1.1.0": 3,
  "1.4.0": 3,
  "1.6.0": 3,
  "1.8.0": 3,
  "3.0.0": 3,
  "3.0.1": 3,
  "3.3.0": 4,
  "3.5.0": 4,
  "4.0.0": 4,
  "4.0.1": 4
};
/**
 * Combined (FHIR R2-R4) list of search parameters that can be used to scope
 * a request by patient ID.
 */

exports.patientParams = ["patient", "subject", "requester", "member", "actor", "beneficiary"];
/**
 * The name of the sessionStorage entry that contains the current key
 */

exports.SMART_KEY = "SMART_KEY";

/***/ }),

/***/ "./node_modules/fhirclient/lib/smart.js":
/*!**********************************************!*\
  !*** ./node_modules/fhirclient/lib/smart.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = exports.ready = exports.buildTokenRequest = exports.completeAuth = exports.onMessage = exports.isInPopUp = exports.isInFrame = exports.authorize = exports.getSecurityExtensions = exports.fetchWellKnownJson = exports.KEY = void 0;
/* global window */

const lib_1 = __webpack_require__(/*! ./lib */ "./node_modules/fhirclient/lib/lib.js");

const Client_1 = __webpack_require__(/*! ./Client */ "./node_modules/fhirclient/lib/Client.js");

const settings_1 = __webpack_require__(/*! ./settings */ "./node_modules/fhirclient/lib/settings.js");

Object.defineProperty(exports, "KEY", {
  enumerable: true,
  get: function () {
    return settings_1.SMART_KEY;
  }
});
const debug = lib_1.debug.extend("oauth2");

function isBrowser() {
  return typeof window === "object";
}
/**
 * Fetches the well-known json file from the given base URL.
 * Note that the result is cached in memory (until the page is reloaded in the
 * browser) because it might have to be re-used by the client
 * @param baseUrl The base URL of the FHIR server
 */


function fetchWellKnownJson(baseUrl = "/", requestOptions) {
  const url = String(baseUrl).replace(/\/*$/, "/") + ".well-known/smart-configuration";
  return lib_1.getAndCache(url, requestOptions).catch(ex => {
    throw new Error(`Failed to fetch the well-known json "${url}". ${ex.message}`);
  });
}

exports.fetchWellKnownJson = fetchWellKnownJson;
/**
 * Fetch a "WellKnownJson" and extract the SMART endpoints from it
 */

function getSecurityExtensionsFromWellKnownJson(baseUrl = "/", requestOptions) {
  return fetchWellKnownJson(baseUrl, requestOptions).then(meta => {
    if (!meta.authorization_endpoint || !meta.token_endpoint) {
      throw new Error("Invalid wellKnownJson");
    }

    return {
      registrationUri: meta.registration_endpoint || "",
      authorizeUri: meta.authorization_endpoint,
      tokenUri: meta.token_endpoint
    };
  });
}
/**
 * Fetch a `CapabilityStatement` and extract the SMART endpoints from it
 */


function getSecurityExtensionsFromConformanceStatement(baseUrl = "/", requestOptions) {
  return lib_1.fetchConformanceStatement(baseUrl, requestOptions).then(meta => {
    const nsUri = "http://fhir-registry.smarthealthit.org/StructureDefinition/oauth-uris";
    const extensions = (lib_1.getPath(meta || {}, "rest.0.security.extension") || []).filter(e => e.url === nsUri).map(o => o.extension)[0];
    const out = {
      registrationUri: "",
      authorizeUri: "",
      tokenUri: ""
    };

    if (extensions) {
      extensions.forEach(ext => {
        if (ext.url === "register") {
          out.registrationUri = ext.valueUri;
        }

        if (ext.url === "authorize") {
          out.authorizeUri = ext.valueUri;
        }

        if (ext.url === "token") {
          out.tokenUri = ext.valueUri;
        }
      });
    }

    return out;
  });
}
/**
 * This works similarly to `Promise.any()`. The tasks are objects containing a
 * request promise and it's AbortController. Returns a promise that will be
 * resolved with the return value of the first successful request, or rejected
 * with an aggregate error if all tasks fail. Any requests, other than the first
 * one that succeeds will be aborted.
 */


function any(tasks) {
  const len = tasks.length;
  const errors = [];
  let resolved = false;
  return new Promise((resolve, reject) => {
    function onSuccess(task, result) {
      task.complete = true;

      if (!resolved) {
        resolved = true;
        tasks.forEach(t => {
          if (!t.complete) {
            t.controller.abort();
          }
        });
        resolve(result);
      }
    }

    function onError(error) {
      if (errors.push(error) === len) {
        reject(new Error(errors.map(e => e.message).join("; ")));
      }
    }

    tasks.forEach(t => {
      t.promise.then(result => onSuccess(t, result), onError);
    });
  });
}
/**
 * Given a FHIR server, returns an object with it's Oauth security endpoints
 * that we are interested in. This will try to find the info in both the
 * `CapabilityStatement` and the `.well-known/smart-configuration`. Whatever
 * Arrives first will be used and the other request will be aborted.
 * @param [baseUrl] Fhir server base URL
 * @param [env] The Adapter
 */


function getSecurityExtensions(env, baseUrl = "/") {
  const AbortController = env.getAbortController();
  const abortController1 = new AbortController();
  const abortController2 = new AbortController();
  return any([{
    controller: abortController1,
    promise: getSecurityExtensionsFromWellKnownJson(baseUrl, {
      signal: abortController1.signal
    })
  }, {
    controller: abortController2,
    promise: getSecurityExtensionsFromConformanceStatement(baseUrl, {
      signal: abortController2.signal
    })
  }]);
}

exports.getSecurityExtensions = getSecurityExtensions;
/**
 * Starts the SMART Launch Sequence.
 * > **IMPORTANT**:
 *   `authorize()` will end up redirecting you to the authorization server.
 *    This means that you should not add anything to the returned promise chain.
 *    Any code written directly after the authorize() call might not be executed
 *    due to that redirect!
 * @param env
 * @param [params]
 * @param [_noRedirect] If true, resolve with the redirect url without trying to redirect to it
 */

async function authorize(env, params = {}, _noRedirect = false) {
  // Obtain input
  const {
    redirect_uri,
    clientSecret,
    fakeTokenResponse,
    patientId,
    encounterId,
    client_id,
    target,
    width,
    height
  } = params;
  let {
    iss,
    launch,
    fhirServiceUrl,
    redirectUri,
    scope = "",
    clientId,
    completeInTarget
  } = params;
  const url = env.getUrl();
  const storage = env.getStorage(); // For these three an url param takes precedence over inline option

  iss = url.searchParams.get("iss") || iss;
  fhirServiceUrl = url.searchParams.get("fhirServiceUrl") || fhirServiceUrl;
  launch = url.searchParams.get("launch") || launch;

  if (!clientId) {
    clientId = client_id;
  }

  if (!redirectUri) {
    redirectUri = redirect_uri;
  }

  if (!redirectUri) {
    redirectUri = env.relative(".");
  } else if (!redirectUri.match(/^https?\:\/\//)) {
    redirectUri = env.relative(redirectUri);
  }

  const serverUrl = String(iss || fhirServiceUrl || ""); // Validate input

  if (!serverUrl) {
    throw new Error("No server url found. It must be specified as `iss` or as " + "`fhirServiceUrl` parameter");
  }

  if (iss) {
    debug("Making %s launch...", launch ? "EHR" : "standalone");
  } // append launch scope if needed


  if (launch && !scope.match(/launch/)) {
    scope += " launch";
  }

  if (isBrowser()) {
    const inFrame = isInFrame();
    const inPopUp = isInPopUp();

    if ((inFrame || inPopUp) && completeInTarget !== true && completeInTarget !== false) {
      // completeInTarget will default to true if authorize is called from
      // within an iframe. This is to avoid issues when the entire app
      // happens to be rendered in an iframe (including in some EHRs),
      // even though that was not how the app developer's intention.
      completeInTarget = inFrame; // In this case we can't always make the best decision so ask devs
      // to be explicit in their configuration.

      console.warn('Your app is being authorized from within an iframe or popup ' + 'window. Please be explicit and provide a "completeInTarget" ' + 'option. Use "true" to complete the authorization in the ' + 'same window, or "false" to try to complete it in the parent ' + 'or the opener window. See http://docs.smarthealthit.org/client-js/api.html');
    }
  } // If `authorize` is called, make sure we clear any previous state (in case
  // this is a re-authorize)


  const oldKey = await storage.get(settings_1.SMART_KEY);
  await storage.unset(oldKey); // create initial state

  const stateKey = lib_1.randomString(16);
  const state = {
    clientId,
    scope,
    redirectUri,
    serverUrl,
    clientSecret,
    tokenResponse: {},
    key: stateKey,
    completeInTarget
  };
  const fullSessionStorageSupport = isBrowser() ? lib_1.getPath(env, "options.fullSessionStorageSupport") : true;

  if (fullSessionStorageSupport) {
    await storage.set(settings_1.SMART_KEY, stateKey);
  } // fakeTokenResponse to override stuff (useful in development)


  if (fakeTokenResponse) {
    Object.assign(state.tokenResponse, fakeTokenResponse);
  } // Fixed patientId (useful in development)


  if (patientId) {
    Object.assign(state.tokenResponse, {
      patient: patientId
    });
  } // Fixed encounterId (useful in development)


  if (encounterId) {
    Object.assign(state.tokenResponse, {
      encounter: encounterId
    });
  }

  let redirectUrl = redirectUri + "?state=" + encodeURIComponent(stateKey); // bypass oauth if fhirServiceUrl is used (but iss takes precedence)

  if (fhirServiceUrl && !iss) {
    debug("Making fake launch...");
    await storage.set(stateKey, state);

    if (_noRedirect) {
      return redirectUrl;
    }

    return await env.redirect(redirectUrl);
  } // Get oauth endpoints and add them to the state


  const extensions = await getSecurityExtensions(env, serverUrl);
  Object.assign(state, extensions);
  await storage.set(stateKey, state); // If this happens to be an open server and there is no authorizeUri

  if (!state.authorizeUri) {
    if (_noRedirect) {
      return redirectUrl;
    }

    return await env.redirect(redirectUrl);
  } // build the redirect uri


  const redirectParams = ["response_type=code", "client_id=" + encodeURIComponent(clientId || ""), "scope=" + encodeURIComponent(scope), "redirect_uri=" + encodeURIComponent(redirectUri), "aud=" + encodeURIComponent(serverUrl), "state=" + encodeURIComponent(stateKey)]; // also pass this in case of EHR launch

  if (launch) {
    redirectParams.push("launch=" + encodeURIComponent(launch));
  }

  redirectUrl = state.authorizeUri + "?" + redirectParams.join("&");

  if (_noRedirect) {
    return redirectUrl;
  }

  if (target && isBrowser()) {
    let win;
    win = await lib_1.getTargetWindow(target, width, height);

    if (win !== self) {
      try {
        // Also remove any old state from the target window and then
        // transfer the current state there
        win.sessionStorage.removeItem(oldKey);
        win.sessionStorage.setItem(stateKey, JSON.stringify(state));
      } catch (ex) {
        lib_1.debug(`Failed to modify window.sessionStorage. Perhaps it is from different origin?. Failing back to "_self". %s`, ex);
        win = self;
      }
    }

    if (win !== self) {
      try {
        win.location.href = redirectUrl;
        self.addEventListener("message", onMessage);
      } catch (ex) {
        lib_1.debug(`Failed to modify window.location. Perhaps it is from different origin?. Failing back to "_self". %s`, ex);
        self.location.href = redirectUrl;
      }
    } else {
      self.location.href = redirectUrl;
    }

    return;
  } else {
    return await env.redirect(redirectUrl);
  }
}

exports.authorize = authorize;
/**
 * Checks if called within a frame. Only works in browsers!
 * If the current window has a `parent` or `top` properties that refer to
 * another window, returns true. If trying to access `top` or `parent` throws an
 * error, returns true. Otherwise returns `false`.
 */

function isInFrame() {
  try {
    return self !== top && parent !== self;
  } catch (e) {
    return true;
  }
}

exports.isInFrame = isInFrame;
/**
 * Checks if called within another window (popup or tab). Only works in browsers!
 * To consider itself called in a new window, this function verifies that:
 * 1. `self === top` (not in frame)
 * 2. `!!opener && opener !== self` The window has an opener
 * 3. `!!window.name` The window has a `name` set
 */

function isInPopUp() {
  try {
    return self === top && !!opener && opener !== self && !!window.name;
  } catch (e) {
    return false;
  }
}

exports.isInPopUp = isInPopUp;
/**
 * Another window can send a "completeAuth" message to this one, making it to
 * navigate to e.data.url
 * @param e The message event
 */

function onMessage(e) {
  if (e.data.type == "completeAuth" && e.origin === new URL(self.location.href).origin) {
    window.removeEventListener("message", onMessage);
    window.location.href = e.data.url;
  }
}

exports.onMessage = onMessage;
/**
 * The completeAuth function should only be called on the page that represents
 * the redirectUri. We typically land there after a redirect from the
 * authorization server..
 */

async function completeAuth(env) {
  var _a, _b;

  const url = env.getUrl();
  const Storage = env.getStorage();
  const params = url.searchParams;
  let key = params.get("state");
  const code = params.get("code");
  const authError = params.get("error");
  const authErrorDescription = params.get("error_description");

  if (!key) {
    key = await Storage.get(settings_1.SMART_KEY);
  } // Start by checking the url for `error` and `error_description` parameters.
  // This happens when the auth server rejects our authorization attempt. In
  // this case it has no other way to tell us what the error was, other than
  // appending these parameters to the redirect url.
  // From client's point of view, this is not very reliable (because we can't
  // know how we have landed on this page - was it a redirect or was it loaded
  // manually). However, if `completeAuth()` is being called, we can assume
  // that the url comes from the auth server (otherwise the app won't work
  // anyway).


  if (authError || authErrorDescription) {
    throw new Error([authError, authErrorDescription].filter(Boolean).join(": "));
  }

  debug("key: %s, code: %s", key, code); // key might be coming from the page url so it might be empty or missing

  if (!key) {
    throw new Error("No 'state' parameter found. Please (re)launch the app.");
  } // Check if we have a previous state


  let state = await Storage.get(key);
  const fullSessionStorageSupport = isBrowser() ? lib_1.getPath(env, "options.fullSessionStorageSupport") : true; // If we are in a popup window or an iframe and the authorization is
  // complete, send the location back to our opener and exit.

  if (isBrowser() && state && !state.completeInTarget) {
    const inFrame = isInFrame();
    const inPopUp = isInPopUp(); // we are about to return to the opener/parent where completeAuth will
    // be called again. In rare cases the opener or parent might also be
    // a frame or popup. Then inFrame or inPopUp will be true but we still
    // have to stop going up the chain. To guard against that weird form of
    // recursion we pass one additional parameter to the url which we later
    // remove.

    if ((inFrame || inPopUp) && !url.searchParams.get("complete")) {
      url.searchParams.set("complete", "1");
      const {
        href,
        origin
      } = url;

      if (inFrame) {
        parent.postMessage({
          type: "completeAuth",
          url: href
        }, origin);
      }

      if (inPopUp) {
        opener.postMessage({
          type: "completeAuth",
          url: href
        }, origin);
        window.close();
      }

      return new Promise(() => {});
    }
  }

  url.searchParams.delete("complete"); // Do we have to remove the `code` and `state` params from the URL?

  const hasState = params.has("state");

  if (isBrowser() && lib_1.getPath(env, "options.replaceBrowserHistory") && (code || hasState)) {
    // `code` is the flag that tell us to request an access token.
    // We have to remove it, otherwise the page will authorize on
    // every load!
    if (code) {
      params.delete("code");
      debug("Removed code parameter from the url.");
    } // If we have `fullSessionStorageSupport` it means we no longer
    // need the `state` key. It will be stored to a well know
    // location - sessionStorage[SMART_KEY]. However, no
    // fullSessionStorageSupport means that this "well know location"
    // might be shared between windows and tabs. In this case we
    // MUST keep the `state` url parameter.


    if (hasState && fullSessionStorageSupport) {
      params.delete("state");
      debug("Removed state parameter from the url.");
    } // If the browser does not support the replaceState method for the
    // History Web API, the "code" parameter cannot be removed. As a
    // consequence, the page will (re)authorize on every load. The
    // workaround is to reload the page to new location without those
    // parameters. If that is not acceptable replaceBrowserHistory
    // should be set to false.


    if (window.history.replaceState) {
      window.history.replaceState({}, "", url.href);
    }
  } // If the state does not exist, it means the page has been loaded directly.


  if (!state) {
    throw new Error("No state found! Please (re)launch the app.");
  } // Assume the client has already completed a token exchange when
  // there is no code (but we have a state) or access token is found in state


  const authorized = !code || ((_a = state.tokenResponse) === null || _a === void 0 ? void 0 : _a.access_token); // If we are authorized already, then this is just a reload.
  // Otherwise, we have to complete the code flow

  if (!authorized && state.tokenUri) {
    if (!code) {
      throw new Error("'code' url parameter is required");
    }

    debug("Preparing to exchange the code for access token...");
    const requestOptions = buildTokenRequest(env, code, state);
    debug("Token request options: %O", requestOptions); // The EHR authorization server SHALL return a JSON structure that
    // includes an access token or a message indicating that the
    // authorization request has been denied.

    const tokenResponse = await lib_1.request(state.tokenUri, requestOptions);
    debug("Token response: %O", tokenResponse);

    if (!tokenResponse.access_token) {
      throw new Error("Failed to obtain access token.");
    } // Now we need to determine when is this authorization going to expire


    state.expiresAt = lib_1.getAccessTokenExpiration(tokenResponse, env); // save the tokenResponse so that we don't have to re-authorize on
    // every page reload

    state = Object.assign(Object.assign({}, state), {
      tokenResponse
    });
    await Storage.set(key, state);
    debug("Authorization successful!");
  } else {
    debug(((_b = state.tokenResponse) === null || _b === void 0 ? void 0 : _b.access_token) ? "Already authorized" : "No authorization needed");
  }

  if (fullSessionStorageSupport) {
    await Storage.set(settings_1.SMART_KEY, key);
  }

  const client = new Client_1.default(env, state);
  debug("Created client instance: %O", client);
  return client;
}

exports.completeAuth = completeAuth;
/**
 * Builds the token request options. Does not make the request, just
 * creates it's configuration and returns it in a Promise.
 */

function buildTokenRequest(env, code, state) {
  const {
    redirectUri,
    clientSecret,
    tokenUri,
    clientId
  } = state;

  if (!redirectUri) {
    throw new Error("Missing state.redirectUri");
  }

  if (!tokenUri) {
    throw new Error("Missing state.tokenUri");
  }

  if (!clientId) {
    throw new Error("Missing state.clientId");
  }

  const requestOptions = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded"
    },
    body: `code=${code}&grant_type=authorization_code&redirect_uri=${encodeURIComponent(redirectUri)}`
  }; // For public apps, authentication is not possible (and thus not required),
  // since a client with no secret cannot prove its identity when it issues a
  // call. (The end-to-end system can still be secure because the client comes
  // from a known, https protected endpoint specified and enforced by the
  // redirect uri.) For confidential apps, an Authorization header using HTTP
  // Basic authentication is required, where the username is the app’s
  // client_id and the password is the app’s client_secret (see example).

  if (clientSecret) {
    requestOptions.headers.Authorization = "Basic " + env.btoa(clientId + ":" + clientSecret);
    debug("Using state.clientSecret to construct the authorization header: %s", requestOptions.headers.Authorization);
  } else {
    debug("No clientSecret found in state. Adding the clientId to the POST body");
    requestOptions.body += `&client_id=${encodeURIComponent(clientId)}`;
  }

  return requestOptions;
}

exports.buildTokenRequest = buildTokenRequest;
/**
 * @param env
 * @param [onSuccess]
 * @param [onError]
 */

async function ready(env, onSuccess, onError) {
  let task = completeAuth(env);

  if (onSuccess) {
    task = task.then(onSuccess);
  }

  if (onError) {
    task = task.catch(onError);
  }

  return task;
}

exports.ready = ready;
/**
 * This function can be used when you want to handle everything in one page
 * (no launch endpoint needed). You can think of it as if it does:
 * ```js
 * authorize(options).then(ready)
 * ```
 *
 * **Be careful with init()!** There are some details you need to be aware of:
 *
 * 1. It will only work if your launch_uri is the same as your redirect_uri.
 *    While this should be valid, we can’t promise that every EHR will allow you
 *    to register client with such settings.
 * 2. Internally, `init()` will be called twice. First it will redirect to the
 *    EHR, then the EHR will redirect back to the page where init() will be
 *    called again to complete the authorization. This is generally fine,
 *    because the returned promise will only be resolved once, after the second
 *    execution, but please also consider the following:
 *    - You should wrap all your app’s code in a function that is only executed
 *      after `init()` resolves!
 *    - Since the page will be loaded twice, you must be careful if your code
 *      has global side effects that can persist between page reloads
 *      (for example writing to localStorage).
 * 3. For standalone launch, only use init in combination with offline_access
 *    scope. Once the access_token expires, if you don’t have a refresh_token
 *    there is no way to re-authorize properly. We detect that and delete the
 *    expired access token, but it still means that the user will have to
 *    refresh the page twice to re-authorize.
 * @param env The adapter
 * @param options The authorize options
 */

async function init(env, options) {
  const url = env.getUrl();
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state"); // if `code` and `state` params are present we need to complete the auth flow

  if (code && state) {
    return completeAuth(env);
  } // Check for existing client state. If state is found, it means a client
  // instance have already been created in this session and we should try to
  // "revive" it.


  const storage = env.getStorage();
  const key = state || (await storage.get(settings_1.SMART_KEY));
  const cached = await storage.get(key);

  if (cached) {
    return new Client_1.default(env, cached);
  } // Otherwise try to launch


  return authorize(env, options).then(() => {
    // `init` promises a Client but that cannot happen in this case. The
    // browser will be redirected (unload the page and be redirected back
    // to it later and the same init function will be called again). On
    // success, authorize will resolve with the redirect url but we don't
    // want to return that from this promise chain because it is not a
    // Client instance. At the same time, if authorize fails, we do want to
    // pass the error to those waiting for a client instance.
    return new Promise(() => {});
  });
}

exports.init = init;

/***/ }),

/***/ "./node_modules/fhirclient/lib/storage/BrowserStorage.js":
/*!***************************************************************!*\
  !*** ./node_modules/fhirclient/lib/storage/BrowserStorage.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

class Storage {
  /**
   * Gets the value at `key`. Returns a promise that will be resolved
   * with that value (or undefined for missing keys).
   */
  async get(key) {
    const value = sessionStorage[key];

    if (value) {
      return JSON.parse(value);
    }

    return null;
  }
  /**
   * Sets the `value` on `key` and returns a promise that will be resolved
   * with the value that was set.
   */


  async set(key, value) {
    sessionStorage[key] = JSON.stringify(value);
    return value;
  }
  /**
   * Deletes the value at `key`. Returns a promise that will be resolved
   * with true if the key was deleted or with false if it was not (eg. if
   * did not exist).
   */


  async unset(key) {
    if (key in sessionStorage) {
      delete sessionStorage[key];
      return true;
    }

    return false;
  }

}

exports.default = Storage;

/***/ }),

/***/ "./node_modules/fhirclient/lib/strings.js":
/*!************************************************!*\
  !*** ./node_modules/fhirclient/lib/strings.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // This map contains reusable debug messages (only those used in multiple places)

exports.default = {
  expired: "Session expired! Please re-launch the app",
  noScopeForId: "Trying to get the ID of the selected %s. Please add 'launch' or 'launch/%s' to the requested scopes and try again.",
  noIfNoAuth: "You are trying to get %s but the app is not authorized yet.",
  noFreeContext: "Please don't use open fhir servers if you need to access launch context items like the %S."
};

/***/ }),

/***/ "./node_modules/fhirclient/node_modules/debug/src/browser.js":
/*!*******************************************************************!*\
  !*** ./node_modules/fhirclient/node_modules/debug/src/browser.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */
exports.log = console.debug || console.log || (() => {});

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = __webpack_require__(/*! ./common */ "./node_modules/fhirclient/node_modules/debug/src/common.js")(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/fhirclient/node_modules/debug/src/common.js":
/*!******************************************************************!*\
  !*** ./node_modules/fhirclient/node_modules/debug/src/common.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = __webpack_require__(/*! ms */ "./node_modules/fhirclient/node_modules/ms/index.js");

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* Active `debug` instances.
	*/
	createDebug.instances = [];

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return match;
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.enabled = createDebug.enabled(namespace);
		debug.useColors = createDebug.useColors();
		debug.color = createDebug.selectColor(namespace);
		debug.destroy = destroy;
		debug.extend = extend;

		// Env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		createDebug.instances.push(debug);

		return debug;
	}

	function destroy() {
		const index = createDebug.instances.indexOf(this);
		if (index !== -1) {
			createDebug.instances.splice(index, 1);
			return true;
		}
		return false;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}

		for (i = 0; i < createDebug.instances.length; i++) {
			const instance = createDebug.instances[i];
			instance.enabled = createDebug.enabled(instance.namespace);
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

module.exports = setup;


/***/ }),

/***/ "./node_modules/fhirclient/node_modules/ms/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/fhirclient/node_modules/ms/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),

/***/ "./node_modules/svelte-select/src/Item.svelte":
/*!****************************************************!*\
  !*** ./node_modules/svelte-select/src/Item.svelte ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal.mjs");
/* node_modules\svelte-select\src\Item.svelte generated by Svelte v3.4.1 */


const file = "node_modules\\svelte-select\\src\\Item.svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = 'svelte-bdnybl-style';
	style.textContent = ".item.svelte-bdnybl{cursor:default;height:var(--height, 42px);line-height:var(--height, 42px);padding:var(--itemPadding, 0 20px);color:var(--itemColor, inherit);text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.groupHeader.svelte-bdnybl{text-transform:var(--groupTitleTextTransform, uppercase)}.groupItem.svelte-bdnybl{padding-left:var(--groupItemPaddingLeft, 40px)}.item.svelte-bdnybl:active{background:var(--itemActiveBackground, #b9daff)}.item.active.svelte-bdnybl{background:var(--itemIsActiveBG, #007aff);color:var(--itemIsActiveColor, #fff)}.item.first.svelte-bdnybl{border-radius:var(--itemFirstBorderRadius, 4px 4px 0 0)}.item.hover.svelte-bdnybl:not(.active){background:var(--itemHoverBG, #e7f2ff)}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSXRlbS5zdmVsdGUiLCJzb3VyY2VzIjpbIkl0ZW0uc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gIGV4cG9ydCBsZXQgaXNBY3RpdmUgPSBmYWxzZTtcbiAgZXhwb3J0IGxldCBpc0ZpcnN0ID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgaXNIb3ZlciA9IGZhbHNlO1xuICBleHBvcnQgbGV0IGdldE9wdGlvbkxhYmVsID0gdW5kZWZpbmVkO1xuICBleHBvcnQgbGV0IGl0ZW0gPSB1bmRlZmluZWQ7XG4gIGV4cG9ydCBsZXQgZmlsdGVyVGV4dCA9ICcnO1xuXG4gIGxldCBpdGVtQ2xhc3NlcyA9ICcnO1xuXG4gICQ6IHtcbiAgICBjb25zdCBjbGFzc2VzID0gW107XG4gICAgaWYgKGlzQWN0aXZlKSB7IGNsYXNzZXMucHVzaCgnYWN0aXZlJyk7IH1cbiAgICBpZiAoaXNGaXJzdCkgeyBjbGFzc2VzLnB1c2goJ2ZpcnN0Jyk7IH1cbiAgICBpZiAoaXNIb3ZlcikgeyBjbGFzc2VzLnB1c2goJ2hvdmVyJyk7IH1cbiAgICBpZiAoaXRlbS5pc0dyb3VwSGVhZGVyKSB7IGNsYXNzZXMucHVzaCgnZ3JvdXBIZWFkZXInKTsgfVxuICAgIGlmIChpdGVtLmlzR3JvdXBJdGVtKSB7IGNsYXNzZXMucHVzaCgnZ3JvdXBJdGVtJyk7IH1cbiAgICBpdGVtQ2xhc3NlcyA9IGNsYXNzZXMuam9pbignICcpO1xuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAuaXRlbSB7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIGhlaWdodDogdmFyKC0taGVpZ2h0LCA0MnB4KTtcbiAgICBsaW5lLWhlaWdodDogdmFyKC0taGVpZ2h0LCA0MnB4KTtcbiAgICBwYWRkaW5nOiB2YXIoLS1pdGVtUGFkZGluZywgMCAyMHB4KTtcbiAgICBjb2xvcjogdmFyKC0taXRlbUNvbG9yLCBpbmhlcml0KTtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cblxuICAuZ3JvdXBIZWFkZXIge1xuICAgIHRleHQtdHJhbnNmb3JtOiB2YXIoLS1ncm91cFRpdGxlVGV4dFRyYW5zZm9ybSwgdXBwZXJjYXNlKTtcbiAgfVxuXG4gIC5ncm91cEl0ZW0ge1xuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tZ3JvdXBJdGVtUGFkZGluZ0xlZnQsIDQwcHgpO1xuICB9XG5cbiAgLml0ZW06YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pdGVtQWN0aXZlQmFja2dyb3VuZCwgI2I5ZGFmZik7XG4gIH1cblxuICAuaXRlbS5hY3RpdmUge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWl0ZW1Jc0FjdGl2ZUJHLCAjMDA3YWZmKTtcbiAgICBjb2xvcjogdmFyKC0taXRlbUlzQWN0aXZlQ29sb3IsICNmZmYpO1xuICB9XG5cbiAgLml0ZW0uZmlyc3Qge1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWl0ZW1GaXJzdEJvcmRlclJhZGl1cywgNHB4IDRweCAwIDApO1xuICB9XG5cbiAgLml0ZW0uaG92ZXI6bm90KC5hY3RpdmUpIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pdGVtSG92ZXJCRywgI2U3ZjJmZik7XG4gIH1cbjwvc3R5bGU+XG5cblxuXG48ZGl2IGNsYXNzPVwiaXRlbSB7aXRlbUNsYXNzZXN9XCI+XG4gIHtAaHRtbCBnZXRPcHRpb25MYWJlbChpdGVtLCBmaWx0ZXJUZXh0KX1cbjwvZGl2PlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCRSxLQUFLLGNBQUMsQ0FBQyxBQUNMLE1BQU0sQ0FBRSxPQUFPLENBQ2YsTUFBTSxDQUFFLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUMzQixXQUFXLENBQUUsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQ2hDLE9BQU8sQ0FBRSxJQUFJLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FDbkMsS0FBSyxDQUFFLElBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUNoQyxhQUFhLENBQUUsUUFBUSxDQUN2QixRQUFRLENBQUUsTUFBTSxDQUNoQixXQUFXLENBQUUsTUFBTSxBQUNyQixDQUFDLEFBRUQsWUFBWSxjQUFDLENBQUMsQUFDWixjQUFjLENBQUUsSUFBSSx5QkFBeUIsQ0FBQyxVQUFVLENBQUMsQUFDM0QsQ0FBQyxBQUVELFVBQVUsY0FBQyxDQUFDLEFBQ1YsWUFBWSxDQUFFLElBQUksc0JBQXNCLENBQUMsS0FBSyxDQUFDLEFBQ2pELENBQUMsQUFFRCxtQkFBSyxPQUFPLEFBQUMsQ0FBQyxBQUNaLFVBQVUsQ0FBRSxJQUFJLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxBQUNsRCxDQUFDLEFBRUQsS0FBSyxPQUFPLGNBQUMsQ0FBQyxBQUNaLFVBQVUsQ0FBRSxJQUFJLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUMxQyxLQUFLLENBQUUsSUFBSSxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQUFDdkMsQ0FBQyxBQUVELEtBQUssTUFBTSxjQUFDLENBQUMsQUFDWCxhQUFhLENBQUUsSUFBSSx1QkFBdUIsQ0FBQyxZQUFZLENBQUMsQUFDMUQsQ0FBQyxBQUVELEtBQUssb0JBQU0sS0FBSyxPQUFPLENBQUMsQUFBQyxDQUFDLEFBQ3hCLFVBQVUsQ0FBRSxJQUFJLGFBQWEsQ0FBQyxRQUFRLENBQUMsQUFDekMsQ0FBQyJ9 */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(document.head, style);
}

function create_fragment(ctx) {
	var div, raw_value = ctx.getOptionLabel(ctx.item, ctx.filterText), div_class_value;

	return {
		c: function create() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			this.h()
		},

		l: function claim(nodes) {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "DIV", { class: true }, false);
			var div_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div);

			div_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			this.h();
		},

		h: function hydrate() {
			div.className = div_class_value = "item " + ctx.itemClasses + " svelte-bdnybl";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div, file, 61, 0, 1353);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);
			div.innerHTML = raw_value;
		},

		p: function update(changed, ctx) {
			if ((changed.getOptionLabel || changed.item || changed.filterText) && raw_value !== (raw_value = ctx.getOptionLabel(ctx.item, ctx.filterText))) {
				div.innerHTML = raw_value;
			}

			if ((changed.itemClasses) && div_class_value !== (div_class_value = "item " + ctx.itemClasses + " svelte-bdnybl")) {
				div.className = div_class_value;
			}
		},

		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
			}
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { isActive = false, isFirst = false, isHover = false, getOptionLabel = undefined, item = undefined, filterText = '' } = $$props;

  let itemClasses = '';

	$$self.$set = $$props => {
		if ('isActive' in $$props) $$invalidate('isActive', isActive = $$props.isActive);
		if ('isFirst' in $$props) $$invalidate('isFirst', isFirst = $$props.isFirst);
		if ('isHover' in $$props) $$invalidate('isHover', isHover = $$props.isHover);
		if ('getOptionLabel' in $$props) $$invalidate('getOptionLabel', getOptionLabel = $$props.getOptionLabel);
		if ('item' in $$props) $$invalidate('item', item = $$props.item);
		if ('filterText' in $$props) $$invalidate('filterText', filterText = $$props.filterText);
	};

	$$self.$$.update = ($$dirty = { isActive: 1, isFirst: 1, isHover: 1, item: 1 }) => {
		if ($$dirty.isActive || $$dirty.isFirst || $$dirty.isHover || $$dirty.item) { {
        const classes = [];
        if (isActive) { classes.push('active'); }
        if (isFirst) { classes.push('first'); }
        if (isHover) { classes.push('hover'); }
        if (item.isGroupHeader) { classes.push('groupHeader'); }
        if (item.isGroupItem) { classes.push('groupItem'); }
        $$invalidate('itemClasses', itemClasses = classes.join(' '));
      } }
	};

	return {
		isActive,
		isFirst,
		isHover,
		getOptionLabel,
		item,
		filterText,
		itemClasses
	};
}

class Item extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-bdnybl-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], ["isActive", "isFirst", "isHover", "getOptionLabel", "item", "filterText"]);
	}

	get isActive() {
		throw new Error("<Item>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set isActive(value) {
		throw new Error("<Item>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get isFirst() {
		throw new Error("<Item>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set isFirst(value) {
		throw new Error("<Item>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get isHover() {
		throw new Error("<Item>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set isHover(value) {
		throw new Error("<Item>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getOptionLabel() {
		throw new Error("<Item>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set getOptionLabel(value) {
		throw new Error("<Item>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get item() {
		throw new Error("<Item>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set item(value) {
		throw new Error("<Item>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get filterText() {
		throw new Error("<Item>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set filterText(value) {
		throw new Error("<Item>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Item);

/***/ }),

/***/ "./node_modules/svelte-select/src/List.svelte":
/*!****************************************************!*\
  !*** ./node_modules/svelte-select/src/List.svelte ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var _Item_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Item.svelte */ "./node_modules/svelte-select/src/Item.svelte");
/* harmony import */ var _VirtualList_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VirtualList.svelte */ "./node_modules/svelte-select/src/VirtualList.svelte");
/* node_modules\svelte-select\src\List.svelte generated by Svelte v3.4.1 */





const file = "node_modules\\svelte-select\\src\\List.svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = 'svelte-ux0sbr-style';
	style.textContent = ".listContainer.svelte-ux0sbr{box-shadow:var(--listShadow, 0 2px 3px 0 rgba(44, 62, 80, 0.24));border-radius:var(--listBorderRadius, 4px);max-height:var(--listMaxHeight, 250px);overflow-y:auto;background:var(--listBackground, #fff)}.virtualList.svelte-ux0sbr{height:var(--virtualListHeight, 200px)}.listGroupTitle.svelte-ux0sbr{color:var(--groupTitleColor, #8f8f8f);cursor:default;font-size:var(--groupTitleFontSize, 12px);font-weight:var(--groupTitleFontWeight, 600);height:var(--height, 42px);line-height:var(--height, 42px);padding:var(--groupTitlePadding, 0 20px);text-overflow:ellipsis;overflow-x:hidden;white-space:nowrap;text-transform:var(--groupTitleTextTransform, uppercase)}.empty.svelte-ux0sbr{text-align:var(--listEmptyTextAlign, center);padding:var(--listEmptyPadding, 20px 0);color:var(--listEmptyColor, #78848F)}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlzdC5zdmVsdGUiLCJzb3VyY2VzIjpbIkxpc3Quc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gIGltcG9ydCB7IGJlZm9yZVVwZGF0ZSwgY3JlYXRlRXZlbnREaXNwYXRjaGVyLCBvbkRlc3Ryb3ksIG9uTW91bnQsIHRpY2sgfSBmcm9tICdzdmVsdGUnO1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gY3JlYXRlRXZlbnREaXNwYXRjaGVyKCk7XG5cbiAgZXhwb3J0IGxldCBjb250YWluZXIgPSB1bmRlZmluZWQ7XG5cbiAgaW1wb3J0IEl0ZW1Db21wb25lbnQgZnJvbSAnLi9JdGVtLnN2ZWx0ZSc7XG4gIGltcG9ydCBWaXJ0dWFsTGlzdCBmcm9tICcuL1ZpcnR1YWxMaXN0LnN2ZWx0ZSc7XG5cbiAgZXhwb3J0IGxldCBJdGVtID0gSXRlbUNvbXBvbmVudDtcbiAgZXhwb3J0IGxldCBpc1ZpcnR1YWxMaXN0ID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgaXRlbXMgPSBbXTtcbiAgZXhwb3J0IGxldCBnZXRPcHRpb25MYWJlbCA9IChvcHRpb24sIGZpbHRlclRleHQpID0+IHtcbiAgICBpZiAob3B0aW9uKSByZXR1cm4gb3B0aW9uLmlzQ3JlYXRvciA/IGBDcmVhdGUgXFxcIiR7ZmlsdGVyVGV4dH1cXFwiYCA6IG9wdGlvbi5sYWJlbDtcbiAgfTtcbiAgZXhwb3J0IGxldCBnZXRHcm91cEhlYWRlckxhYmVsID0gKG9wdGlvbikgPT4geyByZXR1cm4gb3B0aW9uLmxhYmVsIH07XG4gIGV4cG9ydCBsZXQgaXRlbUhlaWdodCA9IDQwO1xuICBleHBvcnQgbGV0IGhvdmVySXRlbUluZGV4ID0gMDtcbiAgZXhwb3J0IGxldCBzZWxlY3RlZFZhbHVlID0gdW5kZWZpbmVkO1xuICBleHBvcnQgbGV0IG9wdGlvbklkZW50aWZpZXIgPSAndmFsdWUnO1xuICBleHBvcnQgbGV0IGhpZGVFbXB0eVN0YXRlID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgbm9PcHRpb25zTWVzc2FnZSA9ICdObyBvcHRpb25zJztcbiAgZXhwb3J0IGxldCBpc011bHRpID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgYWN0aXZlSXRlbUluZGV4ID0gMDtcbiAgZXhwb3J0IGxldCBmaWx0ZXJUZXh0ID0gJyc7XG5cbiAgbGV0IGlzU2Nyb2xsaW5nVGltZXIgPSAwO1xuICBsZXQgaXNTY3JvbGxpbmcgPSBmYWxzZTtcbiAgbGV0IHByZXZfaXRlbXM7XG4gIGxldCBwcmV2X2FjdGl2ZUl0ZW1JbmRleDtcbiAgbGV0IHByZXZfc2VsZWN0ZWRWYWx1ZTtcblxuICBvbk1vdW50KCgpID0+IHtcbiAgICBpZiAoaXRlbXMubGVuZ3RoID4gMCAmJiAhaXNNdWx0aSAmJiBzZWxlY3RlZFZhbHVlKSB7XG4gICAgICBjb25zdCBfaG92ZXJJdGVtSW5kZXggPSBpdGVtcy5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW1bb3B0aW9uSWRlbnRpZmllcl0gPT09IHNlbGVjdGVkVmFsdWVbb3B0aW9uSWRlbnRpZmllcl0pO1xuXG4gICAgICBpZiAoX2hvdmVySXRlbUluZGV4KSB7XG4gICAgICAgIGhvdmVySXRlbUluZGV4ID0gX2hvdmVySXRlbUluZGV4O1xuICAgICAgfVxuICAgIH1cblxuICAgIHNjcm9sbFRvQWN0aXZlSXRlbSgnYWN0aXZlJyk7XG5cblxuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICBjbGVhclRpbWVvdXQoaXNTY3JvbGxpbmdUaW1lcik7XG5cbiAgICAgIGlzU2Nyb2xsaW5nVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaXNTY3JvbGxpbmcgPSBmYWxzZTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfSwgZmFsc2UpO1xuICB9KTtcblxuICBvbkRlc3Ryb3koKCkgPT4ge1xuICAgIC8vIGNsZWFyVGltZW91dChpc1Njcm9sbGluZ1RpbWVyKTtcbiAgfSk7XG5cbiAgYmVmb3JlVXBkYXRlKCgpID0+IHtcblxuICAgIGlmIChpdGVtcyAhPT0gcHJldl9pdGVtcyAmJiBpdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICBob3Zlckl0ZW1JbmRleCA9IDA7XG4gICAgfVxuXG5cbiAgICAvLyBpZiAocHJldl9hY3RpdmVJdGVtSW5kZXggJiYgYWN0aXZlSXRlbUluZGV4ID4gLTEpIHtcbiAgICAvLyAgIGhvdmVySXRlbUluZGV4ID0gYWN0aXZlSXRlbUluZGV4O1xuXG4gICAgLy8gICBzY3JvbGxUb0FjdGl2ZUl0ZW0oJ2FjdGl2ZScpO1xuICAgIC8vIH1cbiAgICAvLyBpZiAocHJldl9zZWxlY3RlZFZhbHVlICYmIHNlbGVjdGVkVmFsdWUpIHtcbiAgICAvLyAgIHNjcm9sbFRvQWN0aXZlSXRlbSgnYWN0aXZlJyk7XG5cbiAgICAvLyAgIGlmIChpdGVtcyAmJiAhaXNNdWx0aSkge1xuICAgIC8vICAgICBjb25zdCBob3Zlckl0ZW1JbmRleCA9IGl0ZW1zLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbVtvcHRpb25JZGVudGlmaWVyXSA9PT0gc2VsZWN0ZWRWYWx1ZVtvcHRpb25JZGVudGlmaWVyXSk7XG5cbiAgICAvLyAgICAgaWYgKGhvdmVySXRlbUluZGV4KSB7XG4gICAgLy8gICAgICAgaG92ZXJJdGVtSW5kZXggPSBob3Zlckl0ZW1JbmRleDtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfVxuICAgIC8vIH1cblxuICAgIHByZXZfaXRlbXMgPSBpdGVtcztcbiAgICBwcmV2X2FjdGl2ZUl0ZW1JbmRleCA9IGFjdGl2ZUl0ZW1JbmRleDtcbiAgICBwcmV2X3NlbGVjdGVkVmFsdWUgPSBzZWxlY3RlZFZhbHVlO1xuICB9KTtcblxuICBmdW5jdGlvbiBpdGVtQ2xhc3Nlcyhob3Zlckl0ZW1JbmRleCwgaXRlbSwgaXRlbUluZGV4LCBpdGVtcywgc2VsZWN0ZWRWYWx1ZSwgb3B0aW9uSWRlbnRpZmllciwgaXNNdWx0aSkge1xuICAgIHJldHVybiBgJHtzZWxlY3RlZFZhbHVlICYmICFpc011bHRpICYmIChzZWxlY3RlZFZhbHVlW29wdGlvbklkZW50aWZpZXJdID09PSBpdGVtW29wdGlvbklkZW50aWZpZXJdKSA/ICdhY3RpdmUgJyA6ICcnfSR7aG92ZXJJdGVtSW5kZXggPT09IGl0ZW1JbmRleCB8fCBpdGVtcy5sZW5ndGggPT09IDEgPyAnaG92ZXInIDogJyd9YDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVNlbGVjdChpdGVtKSB7XG4gICAgaWYgKGl0ZW0uaXNDcmVhdG9yKSByZXR1cm47XG4gICAgZGlzcGF0Y2goJ2l0ZW1TZWxlY3RlZCcsIGl0ZW0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlSG92ZXIoaSkge1xuICAgIGlmIChpc1Njcm9sbGluZykgcmV0dXJuO1xuICAgIGhvdmVySXRlbUluZGV4ID0gaTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGFyZ3MpIHtcbiAgICBjb25zdCB7IGl0ZW0sIGksIGV2ZW50IH0gPSBhcmdzO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgaWYgKHNlbGVjdGVkVmFsdWUgJiYgIWlzTXVsdGkgJiYgc2VsZWN0ZWRWYWx1ZVtvcHRpb25JZGVudGlmaWVyXSA9PT0gaXRlbVtvcHRpb25JZGVudGlmaWVyXSkgcmV0dXJuIGNsb3NlTGlzdCgpO1xuXG4gICAgaWYgKGl0ZW0uaXNDcmVhdG9yKSB7XG4gICAgICBkaXNwYXRjaCgnaXRlbUNyZWF0ZWQnLCBmaWx0ZXJUZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWN0aXZlSXRlbUluZGV4ID0gaTtcbiAgICAgIGhvdmVySXRlbUluZGV4ID0gaTtcbiAgICAgIGhhbmRsZVNlbGVjdChpdGVtKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZUxpc3QoKSB7XG4gICAgZGlzcGF0Y2goJ2Nsb3NlTGlzdCcpO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gdXBkYXRlSG92ZXJJdGVtKGluY3JlbWVudCkge1xuICAgIGlmIChpc1ZpcnR1YWxMaXN0KSByZXR1cm47XG5cbiAgICBsZXQgaXNOb25TZWxlY3RhYmxlSXRlbSA9IHRydWU7XG5cbiAgICB3aGlsZSAoaXNOb25TZWxlY3RhYmxlSXRlbSkge1xuICAgICAgaWYgKGluY3JlbWVudCA+IDAgJiYgaG92ZXJJdGVtSW5kZXggPT09IChpdGVtcy5sZW5ndGggLSAxKSkge1xuICAgICAgICBob3Zlckl0ZW1JbmRleCA9IDA7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChpbmNyZW1lbnQgPCAwICYmIGhvdmVySXRlbUluZGV4ID09PSAwKSB7XG4gICAgICAgIGhvdmVySXRlbUluZGV4ID0gaXRlbXMubGVuZ3RoIC0gMTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBob3Zlckl0ZW1JbmRleCA9IGhvdmVySXRlbUluZGV4ICsgaW5jcmVtZW50O1xuICAgICAgfVxuXG4gICAgICBpc05vblNlbGVjdGFibGVJdGVtID0gaXRlbXNbaG92ZXJJdGVtSW5kZXhdLmlzR3JvdXBIZWFkZXIgJiYgIWl0ZW1zW2hvdmVySXRlbUluZGV4XS5pc1NlbGVjdGFibGU7XG4gICAgfVxuXG4gICAgYXdhaXQgdGljaygpO1xuXG4gICAgc2Nyb2xsVG9BY3RpdmVJdGVtKCdob3ZlcicpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlS2V5RG93bihlKSB7XG4gICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpdGVtcy5sZW5ndGggJiYgdXBkYXRlSG92ZXJJdGVtKDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGl0ZW1zLmxlbmd0aCAmJiB1cGRhdGVIb3Zlckl0ZW0oLTEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSBicmVhaztcbiAgICAgICAgY29uc3QgaG92ZXJJdGVtID0gaXRlbXNbaG92ZXJJdGVtSW5kZXhdO1xuICAgICAgICBpZiAoc2VsZWN0ZWRWYWx1ZSAmJiAhaXNNdWx0aSAmJiBzZWxlY3RlZFZhbHVlW29wdGlvbklkZW50aWZpZXJdID09PSBob3Zlckl0ZW1bb3B0aW9uSWRlbnRpZmllcl0pIHtcbiAgICAgICAgICBjbG9zZUxpc3QoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChob3Zlckl0ZW0uaXNDcmVhdG9yKSB7XG4gICAgICAgICAgZGlzcGF0Y2goJ2l0ZW1DcmVhdGVkJywgZmlsdGVyVGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWN0aXZlSXRlbUluZGV4ID0gaG92ZXJJdGVtSW5kZXg7XG4gICAgICAgICAgaGFuZGxlU2VsZWN0KGl0ZW1zW2hvdmVySXRlbUluZGV4XSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdUYWInOlxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIGJyZWFrO1xuICAgICAgICBpZiAoc2VsZWN0ZWRWYWx1ZSAmJiBzZWxlY3RlZFZhbHVlW29wdGlvbklkZW50aWZpZXJdID09PSBpdGVtc1tob3Zlckl0ZW1JbmRleF1bb3B0aW9uSWRlbnRpZmllcl0pIHJldHVybiBjbG9zZUxpc3QoKTtcbiAgICAgICAgYWN0aXZlSXRlbUluZGV4ID0gaG92ZXJJdGVtSW5kZXg7XG4gICAgICAgIGhhbmRsZVNlbGVjdChpdGVtc1tob3Zlckl0ZW1JbmRleF0pO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzY3JvbGxUb0FjdGl2ZUl0ZW0oY2xhc3NOYW1lKSB7XG4gICAgaWYgKGlzVmlydHVhbExpc3QgfHwgIWNvbnRhaW5lcikgcmV0dXJuO1xuXG4gICAgbGV0IG9mZnNldEJvdW5kaW5nO1xuICAgIGNvbnN0IGZvY3VzZWRFbGVtQm91bmRpbmcgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihgLmxpc3RJdGVtIC4ke2NsYXNzTmFtZX1gKTtcblxuICAgIGlmIChmb2N1c2VkRWxlbUJvdW5kaW5nKSB7XG4gICAgICBvZmZzZXRCb3VuZGluZyA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20gLSBmb2N1c2VkRWxlbUJvdW5kaW5nLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbTtcbiAgICB9XG5cbiAgICBjb250YWluZXIuc2Nyb2xsVG9wIC09IG9mZnNldEJvdW5kaW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNJdGVtQWN0aXZlKGl0ZW0sIHNlbGVjdGVkVmFsdWUsIG9wdGlvbklkZW50aWZpZXIpIHtcbiAgICByZXR1cm4gc2VsZWN0ZWRWYWx1ZSAmJiAoc2VsZWN0ZWRWYWx1ZVtvcHRpb25JZGVudGlmaWVyXSA9PT0gaXRlbVtvcHRpb25JZGVudGlmaWVyXSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gaXNJdGVtRmlyc3QoaXRlbUluZGV4KSB7XG4gICAgcmV0dXJuIGl0ZW1JbmRleCA9PT0gMDtcbiAgfTtcblxuICBmdW5jdGlvbiBpc0l0ZW1Ib3Zlcihob3Zlckl0ZW1JbmRleCwgaXRlbSwgaXRlbUluZGV4LCBpdGVtcykge1xuICAgIHJldHVybiBob3Zlckl0ZW1JbmRleCA9PT0gaXRlbUluZGV4IHx8IGl0ZW1zLmxlbmd0aCA9PT0gMTtcbiAgfVxuXG48L3NjcmlwdD5cblxuPHN2ZWx0ZTp3aW5kb3cgb246a2V5ZG93bj1cIntoYW5kbGVLZXlEb3dufVwiIC8+XG5cbnsjaWYgaXNWaXJ0dWFsTGlzdH1cbjxkaXYgY2xhc3M9XCJsaXN0Q29udGFpbmVyIHZpcnR1YWxMaXN0XCIgYmluZDp0aGlzPXtjb250YWluZXJ9PlxuXG4gIDxWaXJ0dWFsTGlzdCB7aXRlbXN9IHtpdGVtSGVpZ2h0fSBsZXQ6aXRlbSBsZXQ6aT5cbiAgXG4gICAgPGRpdiBvbjptb3VzZW92ZXI9XCJ7KCkgPT4gaGFuZGxlSG92ZXIoaSl9XCIgb246Y2xpY2s9XCJ7ZXZlbnQgPT4gaGFuZGxlQ2xpY2soe2l0ZW0sIGksIGV2ZW50fSl9XCJcbiAgICAgICAgY2xhc3M9XCJsaXN0SXRlbVwiPlxuICAgICAgICAgIDxzdmVsdGU6Y29tcG9uZW50IFxuICAgICAgICAgICAgdGhpcz1cIntJdGVtfVwiXG4gICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICAgIHtmaWx0ZXJUZXh0fVxuICAgICAgICAgICAge2dldE9wdGlvbkxhYmVsfVxuICAgICAgICAgICAgaXNGaXJzdD1cIntpc0l0ZW1GaXJzdChpKX1cIlxuICAgICAgICAgICAgaXNBY3RpdmU9XCJ7aXNJdGVtQWN0aXZlKGl0ZW0sIHNlbGVjdGVkVmFsdWUsIG9wdGlvbklkZW50aWZpZXIpfVwiXG4gICAgICAgICAgICBpc0hvdmVyPVwie2lzSXRlbUhvdmVyKGhvdmVySXRlbUluZGV4LCBpdGVtLCBpLCBpdGVtcyl9XCJcbiAgICAgICAgICAvPlxuICAgIDwvZGl2PlxuICBcbjwvVmlydHVhbExpc3Q+XG48L2Rpdj5cbnsvaWZ9XG5cbnsjaWYgIWlzVmlydHVhbExpc3R9XG48ZGl2IGNsYXNzPVwibGlzdENvbnRhaW5lclwiIGJpbmQ6dGhpcz17Y29udGFpbmVyfT5cbiAgeyNlYWNoIGl0ZW1zIGFzIGl0ZW0sIGl9XG4gICAgeyNpZiBpdGVtLmlzR3JvdXBIZWFkZXIgJiYgIWl0ZW0uaXNTZWxlY3RhYmxlfVxuICAgICAgPGRpdiBjbGFzcz1cImxpc3RHcm91cFRpdGxlXCI+e2dldEdyb3VwSGVhZGVyTGFiZWwoaXRlbSl9PC9kaXY+XG4gICAgeyA6ZWxzZSB9XG4gICAgPGRpdiBcbiAgICAgIG9uOm1vdXNlb3Zlcj1cInsoKSA9PiBoYW5kbGVIb3ZlcihpKX1cIiBcbiAgICAgIG9uOmNsaWNrPVwie2V2ZW50ID0+IGhhbmRsZUNsaWNrKHtpdGVtLCBpLCBldmVudH0pfVwiXG4gICAgICBjbGFzcz1cImxpc3RJdGVtXCJcbiAgICA+XG4gICAgICA8c3ZlbHRlOmNvbXBvbmVudCBcbiAgICAgICAgdGhpcz1cIntJdGVtfVwiXG4gICAgICAgIHtpdGVtfVxuICAgICAgICB7ZmlsdGVyVGV4dH1cbiAgICAgICAge2dldE9wdGlvbkxhYmVsfVxuICAgICAgICBpc0ZpcnN0PVwie2lzSXRlbUZpcnN0KGkpfVwiXG4gICAgICAgIGlzQWN0aXZlPVwie2lzSXRlbUFjdGl2ZShpdGVtLCBzZWxlY3RlZFZhbHVlLCBvcHRpb25JZGVudGlmaWVyKX1cIlxuICAgICAgICBpc0hvdmVyPVwie2lzSXRlbUhvdmVyKGhvdmVySXRlbUluZGV4LCBpdGVtLCBpLCBpdGVtcyl9XCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICAgey9pZn1cbiAgezplbHNlfVxuICAgIHsjaWYgIWhpZGVFbXB0eVN0YXRlfVxuICAgICAgPGRpdiBjbGFzcz1cImVtcHR5XCI+e25vT3B0aW9uc01lc3NhZ2V9PC9kaXY+XG4gICAgey9pZn1cbiAgey9lYWNofVxuPC9kaXY+XG57L2lmfVxuXG48c3R5bGU+XG4gIC5saXN0Q29udGFpbmVyIHtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1saXN0U2hhZG93LCAwIDJweCAzcHggMCByZ2JhKDQ0LCA2MiwgODAsIDAuMjQpKTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1saXN0Qm9yZGVyUmFkaXVzLCA0cHgpO1xuICAgIG1heC1oZWlnaHQ6IHZhcigtLWxpc3RNYXhIZWlnaHQsIDI1MHB4KTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpc3RCYWNrZ3JvdW5kLCAjZmZmKTtcbiAgfVxuXG4gIC52aXJ0dWFsTGlzdCB7XG4gICAgaGVpZ2h0OiB2YXIoLS12aXJ0dWFsTGlzdEhlaWdodCwgMjAwcHgpO1xuICB9XG5cbiAgLmxpc3RHcm91cFRpdGxlIHtcbiAgICBjb2xvcjogdmFyKC0tZ3JvdXBUaXRsZUNvbG9yLCAjOGY4ZjhmKTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgZm9udC1zaXplOiB2YXIoLS1ncm91cFRpdGxlRm9udFNpemUsIDEycHgpO1xuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1ncm91cFRpdGxlRm9udFdlaWdodCwgNjAwKTtcbiAgICBoZWlnaHQ6IHZhcigtLWhlaWdodCwgNDJweCk7XG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWhlaWdodCwgNDJweCk7XG4gICAgcGFkZGluZzogdmFyKC0tZ3JvdXBUaXRsZVBhZGRpbmcsIDAgMjBweCk7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHZhcigtLWdyb3VwVGl0bGVUZXh0VHJhbnNmb3JtLCB1cHBlcmNhc2UpO1xuICB9XG5cbiAgLmVtcHR5IHtcbiAgICB0ZXh0LWFsaWduOiB2YXIoLS1saXN0RW1wdHlUZXh0QWxpZ24sIGNlbnRlcik7XG4gICAgcGFkZGluZzogdmFyKC0tbGlzdEVtcHR5UGFkZGluZywgMjBweCAwKTtcbiAgICBjb2xvcjogdmFyKC0tbGlzdEVtcHR5Q29sb3IsICM3ODg0OEYpO1xuICB9XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNRRSxjQUFjLGNBQUMsQ0FBQyxBQUNkLFVBQVUsQ0FBRSxJQUFJLFlBQVksQ0FBQyxtQ0FBbUMsQ0FBQyxDQUNqRSxhQUFhLENBQUUsSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FDM0MsVUFBVSxDQUFFLElBQUksZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUN2QyxVQUFVLENBQUUsSUFBSSxDQUNoQixVQUFVLENBQUUsSUFBSSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQUFDekMsQ0FBQyxBQUVELFlBQVksY0FBQyxDQUFDLEFBQ1osTUFBTSxDQUFFLElBQUksbUJBQW1CLENBQUMsTUFBTSxDQUFDLEFBQ3pDLENBQUMsQUFFRCxlQUFlLGNBQUMsQ0FBQyxBQUNmLEtBQUssQ0FBRSxJQUFJLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUN0QyxNQUFNLENBQUUsT0FBTyxDQUNmLFNBQVMsQ0FBRSxJQUFJLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUMxQyxXQUFXLENBQUUsSUFBSSxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FDN0MsTUFBTSxDQUFFLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUMzQixXQUFXLENBQUUsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQ2hDLE9BQU8sQ0FBRSxJQUFJLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUN6QyxhQUFhLENBQUUsUUFBUSxDQUN2QixVQUFVLENBQUUsTUFBTSxDQUNsQixXQUFXLENBQUUsTUFBTSxDQUNuQixjQUFjLENBQUUsSUFBSSx5QkFBeUIsQ0FBQyxVQUFVLENBQUMsQUFDM0QsQ0FBQyxBQUVELE1BQU0sY0FBQyxDQUFDLEFBQ04sVUFBVSxDQUFFLElBQUksb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQzdDLE9BQU8sQ0FBRSxJQUFJLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUN4QyxLQUFLLENBQUUsSUFBSSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQUFDdkMsQ0FBQyJ9 */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(document.head, style);
}

function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.item = list[i];
	child_ctx.i = i;
	return child_ctx;
}

// (210:0) {#if isVirtualList}
function create_if_block_3(ctx) {
	var div, current;

	var virtuallist = new _VirtualList_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({
		props: {
		items: ctx.items,
		itemHeight: ctx.itemHeight,
		$$slots: {
		default: [create_default_slot, ({ item, i }) => ({ item, i })]
	},
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			virtuallist.$$.fragment.c();
			this.h()
		},

		l: function claim(nodes) {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "DIV", { class: true }, false);
			var div_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div);

			virtuallist.$$.fragment.l(div_nodes);
			div_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			this.h();
		},

		h: function hydrate() {
			div.className = "listContainer virtualList svelte-ux0sbr";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div, file, 210, 0, 5850);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(virtuallist, div, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_binding_callback"])(() => ctx.div_binding(div, null));
			current = true;
		},

		p: function update(changed, ctx) {
			var virtuallist_changes = {};
			if (changed.items) virtuallist_changes.items = ctx.items;
			if (changed.itemHeight) virtuallist_changes.itemHeight = ctx.itemHeight;
			if (changed.$$scope || changed.Item || changed.filterText || changed.getOptionLabel || changed.selectedValue || changed.optionIdentifier || changed.hoverItemIndex || changed.items) virtuallist_changes.$$scope = { changed, ctx };
			virtuallist.$set(virtuallist_changes);

			if (changed.items) {
				ctx.div_binding(null, div);
				;
				ctx.div_binding(div, null);
			}
		},

		i: function intro(local) {
			if (current) return;
			virtuallist.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			virtuallist.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
			}

			virtuallist.$destroy();

			ctx.div_binding(null, div);
		}
	};
}

// (213:2) <VirtualList {items} {itemHeight} let:item let:i>
function create_default_slot(ctx) {
	var div, current, dispose;

	var switch_value = ctx.Item;

	function switch_props(ctx) {
		return {
			props: {
			item: ctx.item,
			filterText: ctx.filterText,
			getOptionLabel: ctx.getOptionLabel,
			isFirst: isItemFirst(ctx.i),
			isActive: isItemActive(ctx.item, ctx.selectedValue, ctx.optionIdentifier),
			isHover: isItemHover(ctx.hoverItemIndex, ctx.item, ctx.i, ctx.items)
		},
			$$inline: true
		};
	}

	if (switch_value) {
		var switch_instance = new switch_value(switch_props(ctx));
	}

	function mouseover_handler() {
		return ctx.mouseover_handler(ctx);
	}

	function click_handler(...args) {
		return ctx.click_handler(ctx, ...args);
	}

	return {
		c: function create() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			if (switch_instance) switch_instance.$$.fragment.c();
			this.h()
		},

		l: function claim(nodes) {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "DIV", { class: true }, false);
			var div_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div);

			if (switch_instance) switch_instance.$$.fragment.l(div_nodes);
			div_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			this.h();
		},

		h: function hydrate() {
			div.className = "listItem";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div, file, 214, 4, 5972);

			dispose = [
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(div, "mouseover", mouseover_handler),
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(div, "click", click_handler)
			];
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);

			if (switch_instance) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(switch_instance, div, null);
			}

			current = true;
		},

		p: function update(changed, new_ctx) {
			ctx = new_ctx;
			var switch_instance_changes = {};
			if (changed.item) switch_instance_changes.item = ctx.item;
			if (changed.filterText) switch_instance_changes.filterText = ctx.filterText;
			if (changed.getOptionLabel) switch_instance_changes.getOptionLabel = ctx.getOptionLabel;
			if (changed.isItemFirst || changed.i) switch_instance_changes.isFirst = isItemFirst(ctx.i);
			if (changed.isItemActive || changed.item || changed.selectedValue || changed.optionIdentifier) switch_instance_changes.isActive = isItemActive(ctx.item, ctx.selectedValue, ctx.optionIdentifier);
			if (changed.isItemHover || changed.hoverItemIndex || changed.item || changed.i || changed.items) switch_instance_changes.isHover = isItemHover(ctx.hoverItemIndex, ctx.item, ctx.i, ctx.items);

			if (switch_value !== (switch_value = ctx.Item)) {
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
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(switch_instance, div, null);
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
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
			}

			if (switch_instance) switch_instance.$destroy();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["run_all"])(dispose);
		}
	};
}

// (232:0) {#if !isVirtualList}
function create_if_block(ctx) {
	var div, current;

	var each_value = ctx.items;

	var each_blocks = [];

	for (var i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	function outro_block(i, detaching, local) {
		if (each_blocks[i]) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["on_outro"])(() => {
					each_blocks[i].d(detaching);
					each_blocks[i] = null;
				});
			}

			each_blocks[i].o(local);
		}
	}

	var each_1_else = null;

	if (!each_value.length) {
		each_1_else = create_else_block_1(ctx);
		each_1_else.c();
	}

	return {
		c: function create() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}
			this.h()
		},

		l: function claim(nodes) {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "DIV", { class: true }, false);
			var div_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div_nodes);
			}

			div_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			this.h();
		},

		h: function hydrate() {
			div.className = "listContainer svelte-ux0sbr";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div, file, 232, 0, 6482);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}

			if (each_1_else) {
				each_1_else.m(div, null);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_binding_callback"])(() => ctx.div_binding_1(div, null));
			current = true;
		},

		p: function update(changed, ctx) {
			if (changed.items || changed.getGroupHeaderLabel || changed.Item || changed.filterText || changed.getOptionLabel || changed.isItemFirst || changed.isItemActive || changed.selectedValue || changed.optionIdentifier || changed.isItemHover || changed.hoverItemIndex || changed.hideEmptyState || changed.noOptionsMessage) {
				each_value = ctx.items;

				for (var i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(changed, child_ctx);
						each_blocks[i].i(1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].i(1);
						each_blocks[i].m(div, null);
					}
				}

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();
				for (; i < each_blocks.length; i += 1) outro_block(i, 1, 1);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();
			}

			if (!each_value.length && each_1_else) {
				each_1_else.p(changed, ctx);
			} else if (!each_value.length) {
				each_1_else = create_else_block_1(ctx);
				each_1_else.c();
				each_1_else.m(div, null);
			} else if (each_1_else) {
				each_1_else.d(1);
				each_1_else = null;
			}

			if (changed.items) {
				ctx.div_binding_1(null, div);
				;
				ctx.div_binding_1(div, null);
			}
		},

		i: function intro(local) {
			if (current) return;
			for (var i = 0; i < each_value.length; i += 1) each_blocks[i].i();

			current = true;
		},

		o: function outro(local) {
			each_blocks = each_blocks.filter(Boolean);
			for (let i = 0; i < each_blocks.length; i += 1) outro_block(i, 0);

			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_each"])(each_blocks, detaching);

			if (each_1_else) each_1_else.d();

			ctx.div_binding_1(null, div);
		}
	};
}

// (254:2) {:else}
function create_else_block_1(ctx) {
	var if_block_anchor;

	var if_block = (!ctx.hideEmptyState) && create_if_block_2(ctx);

	return {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
		},

		l: function claim(nodes) {
			if (if_block) if_block.l(nodes);
			if_block_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
		},

		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, if_block_anchor, anchor);
		},

		p: function update(changed, ctx) {
			if (!ctx.hideEmptyState) {
				if (if_block) {
					if_block.p(changed, ctx);
				} else {
					if_block = create_if_block_2(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},

		d: function destroy(detaching) {
			if (if_block) if_block.d(detaching);

			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(if_block_anchor);
			}
		}
	};
}

// (255:4) {#if !hideEmptyState}
function create_if_block_2(ctx) {
	var div, t;

	return {
		c: function create() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(ctx.noOptionsMessage);
			this.h()
		},

		l: function claim(nodes) {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "DIV", { class: true }, false);
			var div_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div);

			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div_nodes, ctx.noOptionsMessage);
			div_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			this.h();
		},

		h: function hydrate() {
			div.className = "empty svelte-ux0sbr";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div, file, 255, 6, 7186);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, t);
		},

		p: function update(changed, ctx) {
			if (changed.noOptionsMessage) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t, ctx.noOptionsMessage);
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
			}
		}
	};
}

// (237:4) { :else }
function create_else_block(ctx) {
	var div, t, current, dispose;

	var switch_value = ctx.Item;

	function switch_props(ctx) {
		return {
			props: {
			item: ctx.item,
			filterText: ctx.filterText,
			getOptionLabel: ctx.getOptionLabel,
			isFirst: isItemFirst(ctx.i),
			isActive: isItemActive(ctx.item, ctx.selectedValue, ctx.optionIdentifier),
			isHover: isItemHover(ctx.hoverItemIndex, ctx.item, ctx.i, ctx.items)
		},
			$$inline: true
		};
	}

	if (switch_value) {
		var switch_instance = new switch_value(switch_props(ctx));
	}

	function mouseover_handler_1() {
		return ctx.mouseover_handler_1(ctx);
	}

	function click_handler_1(...args) {
		return ctx.click_handler_1(ctx, ...args);
	}

	return {
		c: function create() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			if (switch_instance) switch_instance.$$.fragment.c();
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			this.h()
		},

		l: function claim(nodes) {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "DIV", { class: true }, false);
			var div_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div);

			if (switch_instance) switch_instance.$$.fragment.l(div_nodes);
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div_nodes, "\n    ");
			div_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			this.h();
		},

		h: function hydrate() {
			div.className = "listItem";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div, file, 237, 4, 6696);

			dispose = [
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(div, "mouseover", mouseover_handler_1),
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(div, "click", click_handler_1)
			];
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);

			if (switch_instance) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(switch_instance, div, null);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, t);
			current = true;
		},

		p: function update(changed, new_ctx) {
			ctx = new_ctx;
			var switch_instance_changes = {};
			if (changed.items) switch_instance_changes.item = ctx.item;
			if (changed.filterText) switch_instance_changes.filterText = ctx.filterText;
			if (changed.getOptionLabel) switch_instance_changes.getOptionLabel = ctx.getOptionLabel;
			if (changed.isItemFirst) switch_instance_changes.isFirst = isItemFirst(ctx.i);
			if (changed.isItemActive || changed.items || changed.selectedValue || changed.optionIdentifier) switch_instance_changes.isActive = isItemActive(ctx.item, ctx.selectedValue, ctx.optionIdentifier);
			if (changed.isItemHover || changed.hoverItemIndex || changed.items) switch_instance_changes.isHover = isItemHover(ctx.hoverItemIndex, ctx.item, ctx.i, ctx.items);

			if (switch_value !== (switch_value = ctx.Item)) {
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
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(switch_instance, div, t);
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
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
			}

			if (switch_instance) switch_instance.$destroy();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["run_all"])(dispose);
		}
	};
}

// (235:4) {#if item.isGroupHeader && !item.isSelectable}
function create_if_block_1(ctx) {
	var div, t_value = ctx.getGroupHeaderLabel(ctx.item), t;

	return {
		c: function create() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t_value);
			this.h()
		},

		l: function claim(nodes) {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "DIV", { class: true }, false);
			var div_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div);

			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div_nodes, t_value);
			div_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			this.h();
		},

		h: function hydrate() {
			div.className = "listGroupTitle svelte-ux0sbr";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div, file, 235, 6, 6616);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, t);
		},

		p: function update(changed, ctx) {
			if ((changed.getGroupHeaderLabel || changed.items) && t_value !== (t_value = ctx.getGroupHeaderLabel(ctx.item))) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t, t_value);
			}
		},

		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
			}
		}
	};
}

// (234:2) {#each items as item, i}
function create_each_block(ctx) {
	var current_block_type_index, if_block, if_block_anchor, current;

	var if_block_creators = [
		create_if_block_1,
		create_else_block
	];

	var if_blocks = [];

	function select_block_type(ctx) {
		if (ctx.item.isGroupHeader && !ctx.item.isSelectable) return 0;
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
	var t, if_block1_anchor, current, dispose;

	var if_block0 = (ctx.isVirtualList) && create_if_block_3(ctx);

	var if_block1 = (!ctx.isVirtualList) && create_if_block(ctx);

	return {
		c: function create() {
			if (if_block0) if_block0.c();
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			if (if_block1) if_block1.c();
			if_block1_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
			this.h()
		},

		l: function claim(nodes) {
			if (if_block0) if_block0.l(nodes);
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(nodes, "\n\n");
			if (if_block1) if_block1.l(nodes);
			if_block1_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
			this.h();
		},

		h: function hydrate() {
			dispose = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(window, "keydown", ctx.handleKeyDown);
		},

		m: function mount(target, anchor) {
			if (if_block0) if_block0.m(target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t, anchor);
			if (if_block1) if_block1.m(target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, if_block1_anchor, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			if (ctx.isVirtualList) {
				if (if_block0) {
					if_block0.p(changed, ctx);
					if_block0.i(1);
				} else {
					if_block0 = create_if_block_3(ctx);
					if_block0.c();
					if_block0.i(1);
					if_block0.m(t.parentNode, t);
				}
			} else if (if_block0) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["on_outro"])(() => {
					if_block0.d(1);
					if_block0 = null;
				});

				if_block0.o(1);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();
			}

			if (!ctx.isVirtualList) {
				if (if_block1) {
					if_block1.p(changed, ctx);
					if_block1.i(1);
				} else {
					if_block1 = create_if_block(ctx);
					if_block1.c();
					if_block1.i(1);
					if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
				}
			} else if (if_block1) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["on_outro"])(() => {
					if_block1.d(1);
					if_block1 = null;
				});

				if_block1.o(1);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();
			}
		},

		i: function intro(local) {
			if (current) return;
			if (if_block0) if_block0.i();
			if (if_block1) if_block1.i();
			current = true;
		},

		o: function outro(local) {
			if (if_block0) if_block0.o();
			if (if_block1) if_block1.o();
			current = false;
		},

		d: function destroy(detaching) {
			if (if_block0) if_block0.d(detaching);

			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t);
			}

			if (if_block1) if_block1.d(detaching);

			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(if_block1_anchor);
			}

			dispose();
		}
	};
}

function itemClasses(hoverItemIndex, item, itemIndex, items, selectedValue, optionIdentifier, isMulti) {
  return `${selectedValue && !isMulti && (selectedValue[optionIdentifier] === item[optionIdentifier]) ? 'active ' : ''}${hoverItemIndex === itemIndex || items.length === 1 ? 'hover' : ''}`;
}

function isItemActive(item, selectedValue, optionIdentifier) {
  return selectedValue && (selectedValue[optionIdentifier] === item[optionIdentifier]);
}

function isItemFirst(itemIndex) {
  return itemIndex === 0;
}

function isItemHover(hoverItemIndex, item, itemIndex, items) {
  return hoverItemIndex === itemIndex || items.length === 1;
}

function instance($$self, $$props, $$invalidate) {
	const dispatch = Object(svelte__WEBPACK_IMPORTED_MODULE_1__["createEventDispatcher"])();

  let { container = undefined } = $$props;

  let { Item = _Item_svelte__WEBPACK_IMPORTED_MODULE_2__["default"], isVirtualList = false, items = [], getOptionLabel = (option, filterText) => {
    if (option) return option.isCreator ? `Create \"${filterText}\"` : option.label;
  } } = $$props;
  let { getGroupHeaderLabel = (option) => { return option.label } } = $$props;
  let { itemHeight = 40, hoverItemIndex = 0, selectedValue = undefined, optionIdentifier = 'value', hideEmptyState = false, noOptionsMessage = 'No options', isMulti = false, activeItemIndex = 0, filterText = '' } = $$props;

  let isScrollingTimer = 0;
  let isScrolling = false;
  let prev_items;
  let prev_activeItemIndex;
  let prev_selectedValue;

  Object(svelte__WEBPACK_IMPORTED_MODULE_1__["onMount"])(() => {
    if (items.length > 0 && !isMulti && selectedValue) {
      const _hoverItemIndex = items.findIndex((item) => item[optionIdentifier] === selectedValue[optionIdentifier]);

      if (_hoverItemIndex) {
        $$invalidate('hoverItemIndex', hoverItemIndex = _hoverItemIndex);
      }
    }

    scrollToActiveItem('active');


    container.addEventListener('scroll', () => {
      clearTimeout(isScrollingTimer);

      $$invalidate('isScrollingTimer', isScrollingTimer = setTimeout(() => {
        $$invalidate('isScrolling', isScrolling = false);
      }, 100));
    }, false);
  });

  Object(svelte__WEBPACK_IMPORTED_MODULE_1__["onDestroy"])(() => {
    // clearTimeout(isScrollingTimer);
  });

  Object(svelte__WEBPACK_IMPORTED_MODULE_1__["beforeUpdate"])(() => {

    if (items !== prev_items && items.length > 0) {
      $$invalidate('hoverItemIndex', hoverItemIndex = 0);
    }


    // if (prev_activeItemIndex && activeItemIndex > -1) {
    //   hoverItemIndex = activeItemIndex;

    //   scrollToActiveItem('active');
    // }
    // if (prev_selectedValue && selectedValue) {
    //   scrollToActiveItem('active');

    //   if (items && !isMulti) {
    //     const hoverItemIndex = items.findIndex((item) => item[optionIdentifier] === selectedValue[optionIdentifier]);

    //     if (hoverItemIndex) {
    //       hoverItemIndex = hoverItemIndex;
    //     }
    //   }
    // }

    $$invalidate('prev_items', prev_items = items);
    $$invalidate('prev_activeItemIndex', prev_activeItemIndex = activeItemIndex);
    $$invalidate('prev_selectedValue', prev_selectedValue = selectedValue);
  });

  function handleSelect(item) {
    if (item.isCreator) return;
    dispatch('itemSelected', item);
  }

  function handleHover(i) {
    if (isScrolling) return;
    $$invalidate('hoverItemIndex', hoverItemIndex = i);
  }

  function handleClick(args) {
    const { item, i, event } = args;
    event.stopPropagation();

    if (selectedValue && !isMulti && selectedValue[optionIdentifier] === item[optionIdentifier]) return closeList();

    if (item.isCreator) {
      dispatch('itemCreated', filterText);
    } else {
      $$invalidate('activeItemIndex', activeItemIndex = i);
      $$invalidate('hoverItemIndex', hoverItemIndex = i);
      handleSelect(item);
    }
  }

  function closeList() {
    dispatch('closeList');
  }

  async function updateHoverItem(increment) {
    if (isVirtualList) return;

    let isNonSelectableItem = true;

    while (isNonSelectableItem) {
      if (increment > 0 && hoverItemIndex === (items.length - 1)) {
        $$invalidate('hoverItemIndex', hoverItemIndex = 0);
      }
      else if (increment < 0 && hoverItemIndex === 0) {
        $$invalidate('hoverItemIndex', hoverItemIndex = items.length - 1);
      }
      else {
        $$invalidate('hoverItemIndex', hoverItemIndex = hoverItemIndex + increment);
      }

      isNonSelectableItem = items[hoverItemIndex].isGroupHeader && !items[hoverItemIndex].isSelectable;
    }

    await Object(svelte__WEBPACK_IMPORTED_MODULE_1__["tick"])();

    scrollToActiveItem('hover');
  }

  function handleKeyDown(e) {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        items.length && updateHoverItem(1);
        break;
      case 'ArrowUp':
        e.preventDefault();
        items.length && updateHoverItem(-1);
        break;
      case 'Enter':
        e.preventDefault();
        if (items.length === 0) break;
        const hoverItem = items[hoverItemIndex];
        if (selectedValue && !isMulti && selectedValue[optionIdentifier] === hoverItem[optionIdentifier]) {
          closeList();
          break;
        }

        if (hoverItem.isCreator) {
          dispatch('itemCreated', filterText);
        } else {
          $$invalidate('activeItemIndex', activeItemIndex = hoverItemIndex);
          handleSelect(items[hoverItemIndex]);
        }
        break;
      case 'Tab':
        e.preventDefault();
        if (items.length === 0) break;
        if (selectedValue && selectedValue[optionIdentifier] === items[hoverItemIndex][optionIdentifier]) return closeList();
        $$invalidate('activeItemIndex', activeItemIndex = hoverItemIndex);
        handleSelect(items[hoverItemIndex]);
        break;
    }
  }

  function scrollToActiveItem(className) {
    if (isVirtualList || !container) return;

    let offsetBounding;
    const focusedElemBounding = container.querySelector(`.listItem .${className}`);

    if (focusedElemBounding) {
      offsetBounding = container.getBoundingClientRect().bottom - focusedElemBounding.getBoundingClientRect().bottom;
    }

    container.scrollTop -= offsetBounding; $$invalidate('container', container);
  };;

	function mouseover_handler({ i }) {
		return handleHover(i);
	}

	function click_handler({ item, i }, event) {
		return handleClick({item, i, event});
	}

	function div_binding($$node, check) {
		container = $$node;
		$$invalidate('container', container);
	}

	function mouseover_handler_1({ i }) {
		return handleHover(i);
	}

	function click_handler_1({ item, i }, event) {
		return handleClick({item, i, event});
	}

	function div_binding_1($$node, check) {
		container = $$node;
		$$invalidate('container', container);
	}

	$$self.$set = $$props => {
		if ('container' in $$props) $$invalidate('container', container = $$props.container);
		if ('Item' in $$props) $$invalidate('Item', Item = $$props.Item);
		if ('isVirtualList' in $$props) $$invalidate('isVirtualList', isVirtualList = $$props.isVirtualList);
		if ('items' in $$props) $$invalidate('items', items = $$props.items);
		if ('getOptionLabel' in $$props) $$invalidate('getOptionLabel', getOptionLabel = $$props.getOptionLabel);
		if ('getGroupHeaderLabel' in $$props) $$invalidate('getGroupHeaderLabel', getGroupHeaderLabel = $$props.getGroupHeaderLabel);
		if ('itemHeight' in $$props) $$invalidate('itemHeight', itemHeight = $$props.itemHeight);
		if ('hoverItemIndex' in $$props) $$invalidate('hoverItemIndex', hoverItemIndex = $$props.hoverItemIndex);
		if ('selectedValue' in $$props) $$invalidate('selectedValue', selectedValue = $$props.selectedValue);
		if ('optionIdentifier' in $$props) $$invalidate('optionIdentifier', optionIdentifier = $$props.optionIdentifier);
		if ('hideEmptyState' in $$props) $$invalidate('hideEmptyState', hideEmptyState = $$props.hideEmptyState);
		if ('noOptionsMessage' in $$props) $$invalidate('noOptionsMessage', noOptionsMessage = $$props.noOptionsMessage);
		if ('isMulti' in $$props) $$invalidate('isMulti', isMulti = $$props.isMulti);
		if ('activeItemIndex' in $$props) $$invalidate('activeItemIndex', activeItemIndex = $$props.activeItemIndex);
		if ('filterText' in $$props) $$invalidate('filterText', filterText = $$props.filterText);
	};

	return {
		container,
		Item,
		isVirtualList,
		items,
		getOptionLabel,
		getGroupHeaderLabel,
		itemHeight,
		hoverItemIndex,
		selectedValue,
		optionIdentifier,
		hideEmptyState,
		noOptionsMessage,
		isMulti,
		activeItemIndex,
		filterText,
		handleHover,
		handleClick,
		handleKeyDown,
		mouseover_handler,
		click_handler,
		div_binding,
		mouseover_handler_1,
		click_handler_1,
		div_binding_1
	};
}

class List extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-ux0sbr-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], ["container", "Item", "isVirtualList", "items", "getOptionLabel", "getGroupHeaderLabel", "itemHeight", "hoverItemIndex", "selectedValue", "optionIdentifier", "hideEmptyState", "noOptionsMessage", "isMulti", "activeItemIndex", "filterText"]);
	}

	get container() {
		throw new Error("<List>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set container(value) {
		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get Item() {
		throw new Error("<List>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set Item(value) {
		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get isVirtualList() {
		throw new Error("<List>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set isVirtualList(value) {
		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get items() {
		throw new Error("<List>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set items(value) {
		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getOptionLabel() {
		throw new Error("<List>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set getOptionLabel(value) {
		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getGroupHeaderLabel() {
		throw new Error("<List>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set getGroupHeaderLabel(value) {
		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get itemHeight() {
		throw new Error("<List>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set itemHeight(value) {
		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get hoverItemIndex() {
		throw new Error("<List>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set hoverItemIndex(value) {
		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get selectedValue() {
		throw new Error("<List>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set selectedValue(value) {
		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get optionIdentifier() {
		throw new Error("<List>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set optionIdentifier(value) {
		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get hideEmptyState() {
		throw new Error("<List>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set hideEmptyState(value) {
		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get noOptionsMessage() {
		throw new Error("<List>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set noOptionsMessage(value) {
		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get isMulti() {
		throw new Error("<List>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set isMulti(value) {
		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get activeItemIndex() {
		throw new Error("<List>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set activeItemIndex(value) {
		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get filterText() {
		throw new Error("<List>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set filterText(value) {
		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ }),

/***/ "./node_modules/svelte-select/src/MultiSelection.svelte":
/*!**************************************************************!*\
  !*** ./node_modules/svelte-select/src/MultiSelection.svelte ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* node_modules\svelte-select\src\MultiSelection.svelte generated by Svelte v3.4.1 */



const file = "node_modules\\svelte-select\\src\\MultiSelection.svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = 'svelte-14r1jr2-style';
	style.textContent = ".multiSelectItem.svelte-14r1jr2{background:var(--multiItemBG, #EBEDEF);margin:var(--multiItemMargin, 5px 5px 0 0);border-radius:var(--multiItemBorderRadius, 16px);height:var(--multiItemHeight, 32px);line-height:var(--multiItemHeight, 32px);display:flex;cursor:default;padding:var(--multiItemPadding, 0 10px 0 15px);max-width:100%}.multiSelectItem_label.svelte-14r1jr2{margin:var(--multiLabelMargin, 0 5px 0 0);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.multiSelectItem.svelte-14r1jr2:hover,.multiSelectItem.active.svelte-14r1jr2{background-color:var(--multiItemActiveBG, #006FFF);color:var(--multiItemActiveColor, #fff)}.multiSelectItem.disabled.svelte-14r1jr2:hover{background:var(--multiItemDisabledHoverBg, #EBEDEF);color:var(--multiItemDisabledHoverColor, #C1C6CC)}.multiSelectItem_clear.svelte-14r1jr2{border-radius:var(--multiClearRadius, 50%);background:var(--multiClearBG, #52616F);min-width:var(--multiClearWidth, 16px);max-width:var(--multiClearWidth, 16px);height:var(--multiClearHeight, 16px);position:relative;top:var(--multiClearTop, 8px);text-align:var(--multiClearTextAlign, center);padding:var(--multiClearPadding, 1px)}.multiSelectItem_clear.svelte-14r1jr2:hover,.active.svelte-14r1jr2 .multiSelectItem_clear.svelte-14r1jr2{background:var(--multiClearHoverBG, #fff)}.multiSelectItem_clear.svelte-14r1jr2:hover svg.svelte-14r1jr2,.active.svelte-14r1jr2 .multiSelectItem_clear svg.svelte-14r1jr2{fill:var(--multiClearHoverFill, #006FFF)}.multiSelectItem_clear.svelte-14r1jr2 svg.svelte-14r1jr2{fill:var(--multiClearFill, #EBEDEF);vertical-align:top}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXVsdGlTZWxlY3Rpb24uc3ZlbHRlIiwic291cmNlcyI6WyJNdWx0aVNlbGVjdGlvbi5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgaW1wb3J0IHsgY3JlYXRlRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnc3ZlbHRlJztcblxuICBjb25zdCBkaXNwYXRjaCA9IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpO1xuXG4gIGV4cG9ydCBsZXQgc2VsZWN0ZWRWYWx1ZSA9IFtdO1xuICBleHBvcnQgbGV0IGFjdGl2ZVNlbGVjdGVkVmFsdWUgPSB1bmRlZmluZWQ7XG4gIGV4cG9ydCBsZXQgaXNEaXNhYmxlZCA9IGZhbHNlO1xuICBleHBvcnQgbGV0IGdldFNlbGVjdGlvbkxhYmVsID0gdW5kZWZpbmVkO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsZWFyKGksIGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZGlzcGF0Y2goJ211bHRpSXRlbUNsZWFyJywge2l9KTtcbiAgfVxuPC9zY3JpcHQ+XG5cbnsjZWFjaCBzZWxlY3RlZFZhbHVlIGFzIHZhbHVlLCBpfVxuPGRpdiBjbGFzcz1cIm11bHRpU2VsZWN0SXRlbSB7YWN0aXZlU2VsZWN0ZWRWYWx1ZSA9PT0gaSA/ICdhY3RpdmUnIDogJyd9IHtpc0Rpc2FibGVkID8gJ2Rpc2FibGVkJyA6ICcnfVwiPlxuICA8ZGl2IGNsYXNzPVwibXVsdGlTZWxlY3RJdGVtX2xhYmVsXCI+XG4gICAge0BodG1sIGdldFNlbGVjdGlvbkxhYmVsKHZhbHVlKX1cbiAgPC9kaXY+XG4gIHsjaWYgIWlzRGlzYWJsZWR9XG4gIDxkaXYgY2xhc3M9XCJtdWx0aVNlbGVjdEl0ZW1fY2xlYXJcIiBvbjpjbGljaz1cIntldmVudCA9PiBoYW5kbGVDbGVhcihpLCBldmVudCl9XCI+XG4gICAgPHN2ZyB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgdmlld0JveD1cIi0yIC0yIDUwIDUwXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTM0LjkyMywzNy4yNTFMMjQsMjYuMzI4TDEzLjA3NywzNy4yNTFMOS40MzYsMzMuNjFsMTAuOTIzLTEwLjkyM0w5LjQzNiwxMS43NjVsMy42NDEtMy42NDFMMjQsMTkuMDQ3TDM0LjkyMyw4LjEyNCBsMy42NDEsMy42NDFMMjcuNjQxLDIyLjY4OEwzOC41NjQsMzMuNjFMMzQuOTIzLDM3LjI1MXpcIj48L3BhdGg+XG4gICAgPC9zdmc+XG4gIDwvZGl2PlxuICB7L2lmfVxuPC9kaXY+XG57L2VhY2h9XG5cblxuXG48c3R5bGU+XG4gIC5tdWx0aVNlbGVjdEl0ZW0ge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLW11bHRpSXRlbUJHLCAjRUJFREVGKTtcbiAgICBtYXJnaW46IHZhcigtLW11bHRpSXRlbU1hcmdpbiwgNXB4IDVweCAwIDApO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLW11bHRpSXRlbUJvcmRlclJhZGl1cywgMTZweCk7XG4gICAgaGVpZ2h0OiB2YXIoLS1tdWx0aUl0ZW1IZWlnaHQsIDMycHgpO1xuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1tdWx0aUl0ZW1IZWlnaHQsIDMycHgpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIHBhZGRpbmc6IHZhcigtLW11bHRpSXRlbVBhZGRpbmcsIDAgMTBweCAwIDE1cHgpO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5tdWx0aVNlbGVjdEl0ZW1fbGFiZWwge1xuICAgIG1hcmdpbjogdmFyKC0tbXVsdGlMYWJlbE1hcmdpbiwgMCA1cHggMCAwKTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cblxuICAubXVsdGlTZWxlY3RJdGVtOmhvdmVyLFxuICAubXVsdGlTZWxlY3RJdGVtLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVsdGlJdGVtQWN0aXZlQkcsICMwMDZGRkYpO1xuICAgIGNvbG9yOiB2YXIoLS1tdWx0aUl0ZW1BY3RpdmVDb2xvciwgI2ZmZik7XG4gIH1cblxuICAubXVsdGlTZWxlY3RJdGVtLmRpc2FibGVkOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tdWx0aUl0ZW1EaXNhYmxlZEhvdmVyQmcsICNFQkVERUYpO1xuICAgIGNvbG9yOiB2YXIoLS1tdWx0aUl0ZW1EaXNhYmxlZEhvdmVyQ29sb3IsICNDMUM2Q0MpO1xuICB9XG5cbiAgLm11bHRpU2VsZWN0SXRlbV9jbGVhciB7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tbXVsdGlDbGVhclJhZGl1cywgNTAlKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tdWx0aUNsZWFyQkcsICM1MjYxNkYpO1xuICAgIG1pbi13aWR0aDogdmFyKC0tbXVsdGlDbGVhcldpZHRoLCAxNnB4KTtcbiAgICBtYXgtd2lkdGg6IHZhcigtLW11bHRpQ2xlYXJXaWR0aCwgMTZweCk7XG4gICAgaGVpZ2h0OiB2YXIoLS1tdWx0aUNsZWFySGVpZ2h0LCAxNnB4KTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiB2YXIoLS1tdWx0aUNsZWFyVG9wLCA4cHgpO1xuICAgIHRleHQtYWxpZ246IHZhcigtLW11bHRpQ2xlYXJUZXh0QWxpZ24sIGNlbnRlcik7XG4gICAgcGFkZGluZzogdmFyKC0tbXVsdGlDbGVhclBhZGRpbmcsIDFweCk7XG4gIH1cblxuICAubXVsdGlTZWxlY3RJdGVtX2NsZWFyOmhvdmVyLFxuICAuYWN0aXZlIC5tdWx0aVNlbGVjdEl0ZW1fY2xlYXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLW11bHRpQ2xlYXJIb3ZlckJHLCAjZmZmKTtcbiAgfVxuXG4gIC5tdWx0aVNlbGVjdEl0ZW1fY2xlYXI6aG92ZXIgc3ZnLFxuICAuYWN0aXZlIC5tdWx0aVNlbGVjdEl0ZW1fY2xlYXIgc3ZnIHtcbiAgICBmaWxsOiB2YXIoLS1tdWx0aUNsZWFySG92ZXJGaWxsLCAjMDA2RkZGKTtcbiAgfVxuXG4gIC5tdWx0aVNlbGVjdEl0ZW1fY2xlYXIgc3ZnIHtcbiAgICBmaWxsOiB2YXIoLS1tdWx0aUNsZWFyRmlsbCwgI0VCRURFRik7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgfVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ0UsZ0JBQWdCLGVBQUMsQ0FBQyxBQUNoQixVQUFVLENBQUUsSUFBSSxhQUFhLENBQUMsUUFBUSxDQUFDLENBQ3ZDLE1BQU0sQ0FBRSxJQUFJLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxDQUMzQyxhQUFhLENBQUUsSUFBSSx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsQ0FDakQsTUFBTSxDQUFFLElBQUksaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQ3BDLFdBQVcsQ0FBRSxJQUFJLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUN6QyxPQUFPLENBQUUsSUFBSSxDQUNiLE1BQU0sQ0FBRSxPQUFPLENBQ2YsT0FBTyxDQUFFLElBQUksa0JBQWtCLENBQUMsY0FBYyxDQUFDLENBQy9DLFNBQVMsQ0FBRSxJQUFJLEFBQ2pCLENBQUMsQUFFRCxzQkFBc0IsZUFBQyxDQUFDLEFBQ3RCLE1BQU0sQ0FBRSxJQUFJLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUMxQyxRQUFRLENBQUUsTUFBTSxDQUNoQixhQUFhLENBQUUsUUFBUSxDQUN2QixXQUFXLENBQUUsTUFBTSxBQUNyQixDQUFDLEFBRUQsK0JBQWdCLE1BQU0sQ0FDdEIsZ0JBQWdCLE9BQU8sZUFBQyxDQUFDLEFBQ3ZCLGdCQUFnQixDQUFFLElBQUksbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQ25ELEtBQUssQ0FBRSxJQUFJLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxBQUMxQyxDQUFDLEFBRUQsZ0JBQWdCLHdCQUFTLE1BQU0sQUFBQyxDQUFDLEFBQy9CLFVBQVUsQ0FBRSxJQUFJLDBCQUEwQixDQUFDLFFBQVEsQ0FBQyxDQUNwRCxLQUFLLENBQUUsSUFBSSw2QkFBNkIsQ0FBQyxRQUFRLENBQUMsQUFDcEQsQ0FBQyxBQUVELHNCQUFzQixlQUFDLENBQUMsQUFDdEIsYUFBYSxDQUFFLElBQUksa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQzNDLFVBQVUsQ0FBRSxJQUFJLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FDeEMsU0FBUyxDQUFFLElBQUksaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQ3ZDLFNBQVMsQ0FBRSxJQUFJLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUN2QyxNQUFNLENBQUUsSUFBSSxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FDckMsUUFBUSxDQUFFLFFBQVEsQ0FDbEIsR0FBRyxDQUFFLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUM5QixVQUFVLENBQUUsSUFBSSxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsQ0FDOUMsT0FBTyxDQUFFLElBQUksbUJBQW1CLENBQUMsSUFBSSxDQUFDLEFBQ3hDLENBQUMsQUFFRCxxQ0FBc0IsTUFBTSxDQUM1QixzQkFBTyxDQUFDLHNCQUFzQixlQUFDLENBQUMsQUFDOUIsVUFBVSxDQUFFLElBQUksbUJBQW1CLENBQUMsS0FBSyxDQUFDLEFBQzVDLENBQUMsQUFFRCxxQ0FBc0IsTUFBTSxDQUFDLGtCQUFHLENBQ2hDLHNCQUFPLENBQUMsc0JBQXNCLENBQUMsR0FBRyxlQUFDLENBQUMsQUFDbEMsSUFBSSxDQUFFLElBQUkscUJBQXFCLENBQUMsUUFBUSxDQUFDLEFBQzNDLENBQUMsQUFFRCxxQ0FBc0IsQ0FBQyxHQUFHLGVBQUMsQ0FBQyxBQUMxQixJQUFJLENBQUUsSUFBSSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FDcEMsY0FBYyxDQUFFLEdBQUcsQUFDckIsQ0FBQyJ9 */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(document.head, style);
}

function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.value = list[i];
	child_ctx.i = i;
	return child_ctx;
}

// (22:2) {#if !isDisabled}
function create_if_block(ctx) {
	var div, svg, path, dispose;

	function click_handler(...args) {
		return ctx.click_handler(ctx, ...args);
	}

	return {
		c: function create() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			svg = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["svg_element"])("svg");
			path = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["svg_element"])("path");
			this.h()
		},

		l: function claim(nodes) {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "DIV", { class: true }, false);
			var div_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div);

			svg = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div_nodes, "svg", { width: true, height: true, viewBox: true, focusable: true, role: true, class: true }, true);
			var svg_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(svg);

			path = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(svg_nodes, "path", { d: true }, true);
			var path_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(path);

			path_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			svg_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			div_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			this.h();
		},

		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(path, "d", "M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124 l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(path, file, 24, 6, 806);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(svg, "width", "100%");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(svg, "height", "100%");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(svg, "viewBox", "-2 -2 50 50");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(svg, "focusable", "false");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(svg, "role", "presentation");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(svg, "class", "svelte-14r1jr2");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(svg, file, 23, 4, 707);
			div.className = "multiSelectItem_clear svelte-14r1jr2";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div, file, 22, 2, 623);
			dispose = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(div, "click", click_handler);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, svg);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(svg, path);
		},

		p: function update(changed, new_ctx) {
			ctx = new_ctx;
		},

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
			}

			dispose();
		}
	};
}

// (17:0) {#each selectedValue as value, i}
function create_each_block(ctx) {
	var div1, div0, raw_value = ctx.getSelectionLabel(ctx.value), t0, t1, div1_class_value;

	var if_block = (!ctx.isDisabled) && create_if_block(ctx);

	return {
		c: function create() {
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			if (if_block) if_block.c();
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			this.h()
		},

		l: function claim(nodes) {
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "DIV", { class: true }, false);
			var div1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div1);

			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div1_nodes, "DIV", { class: true }, false);
			var div0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div0);

			div0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div1_nodes, "\n  ");
			if (if_block) if_block.l(div1_nodes);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div1_nodes, "\n");
			div1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			this.h();
		},

		h: function hydrate() {
			div0.className = "multiSelectItem_label svelte-14r1jr2";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div0, file, 18, 2, 519);
			div1.className = div1_class_value = "multiSelectItem " + (ctx.activeSelectedValue === ctx.i ? 'active' : '') + " " + (ctx.isDisabled ? 'disabled' : '') + " svelte-14r1jr2";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div1, file, 17, 0, 412);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, div0);
			div0.innerHTML = raw_value;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, t0);
			if (if_block) if_block.m(div1, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, t1);
		},

		p: function update(changed, ctx) {
			if ((changed.getSelectionLabel || changed.selectedValue) && raw_value !== (raw_value = ctx.getSelectionLabel(ctx.value))) {
				div0.innerHTML = raw_value;
			}

			if (!ctx.isDisabled) {
				if (!if_block) {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(div1, t1);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			if ((changed.activeSelectedValue || changed.isDisabled) && div1_class_value !== (div1_class_value = "multiSelectItem " + (ctx.activeSelectedValue === ctx.i ? 'active' : '') + " " + (ctx.isDisabled ? 'disabled' : '') + " svelte-14r1jr2")) {
				div1.className = div1_class_value;
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div1);
			}

			if (if_block) if_block.d();
		}
	};
}

function create_fragment(ctx) {
	var each_1_anchor;

	var each_value = ctx.selectedValue;

	var each_blocks = [];

	for (var i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	return {
		c: function create() {
			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
		},

		l: function claim(nodes) {
			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
		},

		m: function mount(target, anchor) {
			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, each_1_anchor, anchor);
		},

		p: function update(changed, ctx) {
			if (changed.activeSelectedValue || changed.isDisabled || changed.getSelectionLabel || changed.selectedValue) {
				each_value = ctx.selectedValue;

				for (var i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(changed, child_ctx);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
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
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_each"])(each_blocks, detaching);

			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(each_1_anchor);
			}
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	const dispatch = Object(svelte__WEBPACK_IMPORTED_MODULE_1__["createEventDispatcher"])();

  let { selectedValue = [], activeSelectedValue = undefined, isDisabled = false, getSelectionLabel = undefined } = $$props;

  function handleClear(i, event) {
    event.stopPropagation();
    dispatch('multiItemClear', {i});
  }

	function click_handler({ i }, event) {
		return handleClear(i, event);
	}

	$$self.$set = $$props => {
		if ('selectedValue' in $$props) $$invalidate('selectedValue', selectedValue = $$props.selectedValue);
		if ('activeSelectedValue' in $$props) $$invalidate('activeSelectedValue', activeSelectedValue = $$props.activeSelectedValue);
		if ('isDisabled' in $$props) $$invalidate('isDisabled', isDisabled = $$props.isDisabled);
		if ('getSelectionLabel' in $$props) $$invalidate('getSelectionLabel', getSelectionLabel = $$props.getSelectionLabel);
	};

	return {
		selectedValue,
		activeSelectedValue,
		isDisabled,
		getSelectionLabel,
		handleClear,
		click_handler
	};
}

class MultiSelection extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-14r1jr2-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], ["selectedValue", "activeSelectedValue", "isDisabled", "getSelectionLabel"]);
	}

	get selectedValue() {
		throw new Error("<MultiSelection>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set selectedValue(value) {
		throw new Error("<MultiSelection>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get activeSelectedValue() {
		throw new Error("<MultiSelection>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set activeSelectedValue(value) {
		throw new Error("<MultiSelection>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get isDisabled() {
		throw new Error("<MultiSelection>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set isDisabled(value) {
		throw new Error("<MultiSelection>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getSelectionLabel() {
		throw new Error("<MultiSelection>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set getSelectionLabel(value) {
		throw new Error("<MultiSelection>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* harmony default export */ __webpack_exports__["default"] = (MultiSelection);

/***/ }),

/***/ "./node_modules/svelte-select/src/Select.svelte":
/*!******************************************************!*\
  !*** ./node_modules/svelte-select/src/Select.svelte ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var _List_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./List.svelte */ "./node_modules/svelte-select/src/List.svelte");
/* harmony import */ var _Item_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Item.svelte */ "./node_modules/svelte-select/src/Item.svelte");
/* harmony import */ var _Selection_svelte__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Selection.svelte */ "./node_modules/svelte-select/src/Selection.svelte");
/* harmony import */ var _MultiSelection_svelte__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MultiSelection.svelte */ "./node_modules/svelte-select/src/MultiSelection.svelte");
/* harmony import */ var _utils_isOutOfViewport__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/isOutOfViewport */ "./node_modules/svelte-select/src/utils/isOutOfViewport.js");
/* harmony import */ var _utils_debounce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/debounce */ "./node_modules/svelte-select/src/utils/debounce.js");
/* node_modules\svelte-select\src\Select.svelte generated by Svelte v3.4.1 */









const file = "node_modules\\svelte-select\\src\\Select.svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = 'svelte-1kmtf2c-style';
	style.textContent = ".selectContainer.svelte-1kmtf2c{--padding:0 16px;border:var(--border, 1px solid #d8dbdf);border-radius:var(--borderRadius, 3px);height:var(--height, 42px);position:relative;display:flex;align-items:center;padding:var(--padding);background:var(--background, #fff)}.selectContainer.svelte-1kmtf2c input.svelte-1kmtf2c{cursor:default;border:none;color:var(--inputColor, #3f4f5f);height:var(--height, 42px);line-height:var(--height, 42px);padding:var(--inputPadding, var(--padding));width:100%;background:transparent;font-size:var(--inputFontSize, 14px);letter-spacing:var(--inputLetterSpacing, -0.08px);position:absolute;left:var(--inputLeft, 0)}.selectContainer.svelte-1kmtf2c input.svelte-1kmtf2c::placeholder{color:var(--placeholderColor, #78848f)}.selectContainer.svelte-1kmtf2c input.svelte-1kmtf2c:focus{outline:none}.selectContainer.svelte-1kmtf2c:hover{border-color:var(--borderHoverColor, #b2b8bf)}.selectContainer.focused.svelte-1kmtf2c{border-color:var(--borderFocusColor, #006fe8)}.selectContainer.disabled.svelte-1kmtf2c{background:var(--disabledBackground, #ebedef);border-color:var(--disabledBorderColor, #ebedef);color:var(--disabledColor, #c1c6cc)}.selectContainer.disabled.svelte-1kmtf2c input.svelte-1kmtf2c::placeholder{color:var(--disabledPlaceholderColor, #c1c6cc)}.selectedItem.svelte-1kmtf2c{line-height:var(--height, 42px);height:var(--height, 42px);overflow-x:hidden;padding:var(--selectedItemPadding, 0 20px 0 0)}.selectedItem.svelte-1kmtf2c:focus{outline:none}.clearSelect.svelte-1kmtf2c{position:absolute;right:var(--clearSelectRight, 10px);top:var(--clearSelectTop, 11px);bottom:var(--clearSelectBottom, 11px);width:var(--clearSelectWidth, 20px);color:var(--clearSelectColor, #c5cacf);flex:none !important}.clearSelect.svelte-1kmtf2c:hover{color:var(--clearSelectHoverColor, #2c3e50)}.selectContainer.focused.svelte-1kmtf2c .clearSelect.svelte-1kmtf2c{color:var(--clearSelectFocusColor, #3f4f5f)}.indicator.svelte-1kmtf2c{position:absolute;right:var(--indicatorRight, 10px);top:var(--indicatorTop, 11px);width:var(--indicatorWidth, 20px);height:var(--indicatorHeight, 20px);color:var(--indicatorColor, #c5cacf)}.indicator.svelte-1kmtf2c svg.svelte-1kmtf2c{display:inline-block;fill:var(--indicatorFill, currentcolor);line-height:1;stroke:var(--indicatorStroke, currentcolor);stroke-width:0}.spinner.svelte-1kmtf2c{position:absolute;right:var(--spinnerRight, 10px);top:var(--spinnerLeft, 11px);width:var(--spinnerWidth, 20px);height:var(--spinnerHeight, 20px);color:var(--spinnerColor, #51ce6c);animation:svelte-1kmtf2c-rotate 0.75s linear infinite}.spinner_icon.svelte-1kmtf2c{display:block;height:100%;transform-origin:center center;width:100%;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;-webkit-transform:none}.spinner_path.svelte-1kmtf2c{stroke-dasharray:90;stroke-linecap:round}.multiSelect.svelte-1kmtf2c{display:flex;padding:var(--multiSelectPadding, 0 35px 0 16px);height:auto;flex-wrap:wrap;align-items:stretch}.multiSelect.svelte-1kmtf2c>.svelte-1kmtf2c{flex:1 1 50px}.selectContainer.multiSelect.svelte-1kmtf2c input.svelte-1kmtf2c{padding:var(--multiSelectInputPadding, 0);position:relative;margin:var(--multiSelectInputMargin, 0)}.hasError.svelte-1kmtf2c{border:var(--errorBorder, 1px solid #ff2d55);background:var(--errorBackground, #fff)}@keyframes svelte-1kmtf2c-rotate{100%{transform:rotate(360deg)}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VsZWN0LnN2ZWx0ZSIsInNvdXJjZXMiOlsiU2VsZWN0LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICBpbXBvcnQge1xuICAgIGJlZm9yZVVwZGF0ZSxcbiAgICBjcmVhdGVFdmVudERpc3BhdGNoZXIsXG4gICAgb25EZXN0cm95LFxuICAgIG9uTW91bnQsXG4gICAgdGlja1xuICB9IGZyb20gXCJzdmVsdGVcIjtcbiAgaW1wb3J0IExpc3QgZnJvbSBcIi4vTGlzdC5zdmVsdGVcIjtcbiAgaW1wb3J0IEl0ZW1Db21wb25lbnQgZnJvbSBcIi4vSXRlbS5zdmVsdGVcIjtcbiAgaW1wb3J0IFNlbGVjdGlvbkNvbXBvbmVudCBmcm9tIFwiLi9TZWxlY3Rpb24uc3ZlbHRlXCI7XG4gIGltcG9ydCBNdWx0aVNlbGVjdGlvbkNvbXBvbmVudCBmcm9tIFwiLi9NdWx0aVNlbGVjdGlvbi5zdmVsdGVcIjtcbiAgaW1wb3J0IGlzT3V0T2ZWaWV3cG9ydCBmcm9tIFwiLi91dGlscy9pc091dE9mVmlld3BvcnRcIjtcbiAgaW1wb3J0IGRlYm91bmNlIGZyb20gXCIuL3V0aWxzL2RlYm91bmNlXCI7XG5cbiAgY29uc3QgZGlzcGF0Y2ggPSBjcmVhdGVFdmVudERpc3BhdGNoZXIoKTtcbiAgZXhwb3J0IGxldCBjb250YWluZXIgPSB1bmRlZmluZWQ7XG4gIGV4cG9ydCBsZXQgaW5wdXQgPSB1bmRlZmluZWQ7XG4gIGV4cG9ydCBsZXQgSXRlbSA9IEl0ZW1Db21wb25lbnQ7XG4gIGV4cG9ydCBsZXQgU2VsZWN0aW9uID0gU2VsZWN0aW9uQ29tcG9uZW50O1xuICBleHBvcnQgbGV0IE11bHRpU2VsZWN0aW9uID0gTXVsdGlTZWxlY3Rpb25Db21wb25lbnQ7XG4gIGV4cG9ydCBsZXQgaXNNdWx0aSA9IGZhbHNlO1xuICBleHBvcnQgbGV0IGlzRGlzYWJsZWQgPSBmYWxzZTtcbiAgZXhwb3J0IGxldCBpc0NyZWF0YWJsZSA9IGZhbHNlO1xuICBleHBvcnQgbGV0IGlzRm9jdXNlZCA9IGZhbHNlO1xuICBleHBvcnQgbGV0IHNlbGVjdGVkVmFsdWUgPSB1bmRlZmluZWQ7XG4gIGV4cG9ydCBsZXQgZmlsdGVyVGV4dCA9IFwiXCI7XG4gIGV4cG9ydCBsZXQgcGxhY2Vob2xkZXIgPSBcIlNlbGVjdC4uLlwiO1xuICBleHBvcnQgbGV0IGl0ZW1zID0gW107XG4gIGV4cG9ydCBsZXQgaXRlbUZpbHRlciA9IChsYWJlbCwgZmlsdGVyVGV4dCwgb3B0aW9uKSA9PlxuICAgIGxhYmVsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZmlsdGVyVGV4dC50b0xvd2VyQ2FzZSgpKTtcbiAgZXhwb3J0IGxldCBncm91cEJ5ID0gdW5kZWZpbmVkO1xuICBleHBvcnQgbGV0IGdyb3VwRmlsdGVyID0gZ3JvdXBzID0+IGdyb3VwcztcbiAgZXhwb3J0IGxldCBpc0dyb3VwSGVhZGVyU2VsZWN0YWJsZSA9IGZhbHNlO1xuICBleHBvcnQgbGV0IGdldEdyb3VwSGVhZGVyTGFiZWwgPSBvcHRpb24gPT4ge1xuICAgIHJldHVybiBvcHRpb24ubGFiZWw7XG4gIH07XG4gIGV4cG9ydCBsZXQgZ2V0T3B0aW9uTGFiZWwgPSAob3B0aW9uLCBmaWx0ZXJUZXh0KSA9PiB7XG4gICAgcmV0dXJuIG9wdGlvbi5pc0NyZWF0b3IgPyBgQ3JlYXRlIFxcXCIke2ZpbHRlclRleHR9XFxcImAgOiBvcHRpb24ubGFiZWw7XG4gIH07XG4gIGV4cG9ydCBsZXQgb3B0aW9uSWRlbnRpZmllciA9IFwidmFsdWVcIjtcbiAgZXhwb3J0IGxldCBsb2FkT3B0aW9ucyA9IHVuZGVmaW5lZDtcbiAgZXhwb3J0IGxldCBoYXNFcnJvciA9IGZhbHNlO1xuICBleHBvcnQgbGV0IGNvbnRhaW5lclN0eWxlcyA9IFwiXCI7XG4gIGV4cG9ydCBsZXQgZ2V0U2VsZWN0aW9uTGFiZWwgPSBvcHRpb24gPT4ge1xuICAgIGlmIChvcHRpb24pIHJldHVybiBvcHRpb24ubGFiZWw7XG4gIH07XG5cbiAgZXhwb3J0IGxldCBjcmVhdGVHcm91cEhlYWRlckl0ZW0gPSBncm91cFZhbHVlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IGdyb3VwVmFsdWUsXG4gICAgICBsYWJlbDogZ3JvdXBWYWx1ZVxuICAgIH07XG4gIH07XG5cbiAgZXhwb3J0IGxldCBjcmVhdGVJdGVtID0gZmlsdGVyVGV4dCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBmaWx0ZXJUZXh0LFxuICAgICAgbGFiZWw6IGZpbHRlclRleHRcbiAgICB9O1xuICB9O1xuXG4gIGV4cG9ydCBsZXQgaXNTZWFyY2hhYmxlID0gdHJ1ZTtcbiAgZXhwb3J0IGxldCBpbnB1dFN0eWxlcyA9IFwiXCI7XG4gIGV4cG9ydCBsZXQgaXNDbGVhcmFibGUgPSB0cnVlO1xuICBleHBvcnQgbGV0IGlzV2FpdGluZyA9IGZhbHNlO1xuICBleHBvcnQgbGV0IGxpc3RQbGFjZW1lbnQgPSBcImF1dG9cIjtcbiAgZXhwb3J0IGxldCBsaXN0T3BlbiA9IGZhbHNlO1xuICBleHBvcnQgbGV0IGxpc3QgPSB1bmRlZmluZWQ7XG4gIGV4cG9ydCBsZXQgaXNWaXJ0dWFsTGlzdCA9IGZhbHNlO1xuICBleHBvcnQgbGV0IGxvYWRPcHRpb25zSW50ZXJ2YWwgPSAzMDA7XG4gIGV4cG9ydCBsZXQgbm9PcHRpb25zTWVzc2FnZSA9IFwiTm8gb3B0aW9uc1wiO1xuICBleHBvcnQgbGV0IGhpZGVFbXB0eVN0YXRlID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgZmlsdGVyZWRJdGVtcyA9IFtdO1xuICBleHBvcnQgbGV0IGlucHV0QXR0cmlidXRlcyA9IHt9O1xuICBleHBvcnQgbGV0IGxpc3RBdXRvV2lkdGggPSB0cnVlO1xuICBleHBvcnQgbGV0IGl0ZW1IZWlnaHQgPSA0MDtcbiAgZXhwb3J0IGxldCBJY29uID0gdW5kZWZpbmVkO1xuICBleHBvcnQgbGV0IGljb25Qcm9wcyA9IHt9O1xuICBleHBvcnQgbGV0IHNob3dDaGV2cm9uID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgc2hvd0luZGljYXRvciA9IGZhbHNlO1xuICBleHBvcnQgbGV0IGNvbnRhaW5lckNsYXNzZXMgPSBcIlwiO1xuICBleHBvcnQgbGV0IGluZGljYXRvclN2ZyA9IHVuZGVmaW5lZDtcblxuICBsZXQgdGFyZ2V0O1xuICBsZXQgYWN0aXZlU2VsZWN0ZWRWYWx1ZTtcbiAgbGV0IF9pdGVtcyA9IFtdO1xuICBsZXQgb3JpZ2luYWxJdGVtc0Nsb25lO1xuICBsZXQgcHJldl9zZWxlY3RlZFZhbHVlO1xuICBsZXQgcHJldl9saXN0T3BlbjtcbiAgbGV0IHByZXZfZmlsdGVyVGV4dDtcbiAgbGV0IHByZXZfaXNGb2N1c2VkO1xuICBsZXQgcHJldl9maWx0ZXJlZEl0ZW1zO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIHJlc2V0RmlsdGVyKCkge1xuICAgIGF3YWl0IHRpY2soKTtcbiAgICBmaWx0ZXJUZXh0ID0gXCJcIjtcbiAgfVxuXG4gIGxldCBnZXRJdGVtc0hhc0ludm9rZWQgPSBmYWxzZTtcbiAgY29uc3QgZ2V0SXRlbXMgPSBkZWJvdW5jZShhc3luYyAoKSA9PiB7XG4gICAgZ2V0SXRlbXNIYXNJbnZva2VkID0gdHJ1ZTtcbiAgICBpc1dhaXRpbmcgPSB0cnVlO1xuXG4gICAgbGV0IHJlcyA9IGF3YWl0IGxvYWRPcHRpb25zKGZpbHRlclRleHQpLmNhdGNoKGVyciA9PiB7XG4gICAgICBjb25zb2xlLndhcm4oJ3N2ZWx0ZS1zZWxlY3QgbG9hZE9wdGlvbnMgZXJyb3IgOj4+ICcsIGVycik7XG4gICAgICBkaXNwYXRjaChcImVycm9yXCIsIHsgdHlwZTogJ2xvYWRPcHRpb25zJywgZGV0YWlsczogZXJyIH0pO1xuICAgIH0pO1xuXG4gICAgaWYgKHJlcykgeyBcbiAgICAgIGl0ZW1zID0gWy4uLnJlc107XG4gICAgfSBlbHNlIHtcbiAgICAgIGl0ZW1zID0gW107XG4gICAgfVxuXG4gICAgaXNXYWl0aW5nID0gZmFsc2U7XG4gICAgaXNGb2N1c2VkID0gdHJ1ZTtcbiAgICBsaXN0T3BlbiA9IHRydWU7XG4gIH0sIGxvYWRPcHRpb25zSW50ZXJ2YWwpO1xuXG4gICQ6IGRpc2FibGVkID0gaXNEaXNhYmxlZDtcblxuICAkOiB7XG4gICAgaWYgKHR5cGVvZiBzZWxlY3RlZFZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBzZWxlY3RlZFZhbHVlID0ge1xuICAgICAgICBbb3B0aW9uSWRlbnRpZmllcl06IHNlbGVjdGVkVmFsdWUsXG4gICAgICAgIGxhYmVsOiBzZWxlY3RlZFZhbHVlXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoaXNNdWx0aSAmJiBBcnJheS5pc0FycmF5KHNlbGVjdGVkVmFsdWUpICYmIHNlbGVjdGVkVmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgc2VsZWN0ZWRWYWx1ZSA9IHNlbGVjdGVkVmFsdWUubWFwKGl0ZW0gPT4gdHlwZW9mIGl0ZW0gPT09IFwic3RyaW5nXCIgPyAoeyB2YWx1ZTogaXRlbSwgbGFiZWw6IGl0ZW0gfSkgOiBpdGVtKTtcbiAgICB9XG4gIH1cblxuICAkOiB7XG4gICAgaWYgKG5vT3B0aW9uc01lc3NhZ2UgJiYgbGlzdCkgbGlzdC4kc2V0KHsgbm9PcHRpb25zTWVzc2FnZSB9KTtcbiAgfVxuXG4gICQ6IHNob3dTZWxlY3RlZEl0ZW0gPSBzZWxlY3RlZFZhbHVlICYmIGZpbHRlclRleHQubGVuZ3RoID09PSAwO1xuXG4gICQ6IHBsYWNlaG9sZGVyVGV4dCA9IHNlbGVjdGVkVmFsdWUgPyBcIlwiIDogcGxhY2Vob2xkZXI7XG5cbiAgbGV0IF9pbnB1dEF0dHJpYnV0ZXMgPSB7fTtcbiAgJDoge1xuICAgIF9pbnB1dEF0dHJpYnV0ZXMgPSBPYmplY3QuYXNzaWduKGlucHV0QXR0cmlidXRlcywge1xuICAgICAgYXV0b2NvbXBsZXRlOiBcIm9mZlwiLFxuICAgICAgYXV0b2NvcnJlY3Q6IFwib2ZmXCIsXG4gICAgICBzcGVsbGNoZWNrOiBmYWxzZVxuICAgIH0pO1xuXG4gICAgaWYgKCFpc1NlYXJjaGFibGUpIHtcbiAgICAgIF9pbnB1dEF0dHJpYnV0ZXMucmVhZG9ubHkgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gICQ6IHtcbiAgICBsZXQgX2ZpbHRlcmVkSXRlbXM7XG4gICAgbGV0IF9pdGVtcyA9IGl0ZW1zO1xuXG4gICAgaWYgKGl0ZW1zICYmIGl0ZW1zLmxlbmd0aCA+IDAgJiYgdHlwZW9mIGl0ZW1zWzBdICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICBfaXRlbXMgPSBpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgdmFsdWU6IGl0ZW0sXG4gICAgICAgICAgbGFiZWw6IGl0ZW1cbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChsb2FkT3B0aW9ucyAmJiBmaWx0ZXJUZXh0Lmxlbmd0aCA9PT0gMCAmJiBvcmlnaW5hbEl0ZW1zQ2xvbmUpIHtcbiAgICAgIF9maWx0ZXJlZEl0ZW1zID0gSlNPTi5wYXJzZShvcmlnaW5hbEl0ZW1zQ2xvbmUpO1xuICAgICAgX2l0ZW1zID0gSlNPTi5wYXJzZShvcmlnaW5hbEl0ZW1zQ2xvbmUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBfZmlsdGVyZWRJdGVtcyA9IGxvYWRPcHRpb25zXG4gICAgICAgID8gZmlsdGVyVGV4dC5sZW5ndGggPT09IDBcbiAgICAgICAgICA/IFtdXG4gICAgICAgICAgOiBfaXRlbXNcbiAgICAgICAgOiBfaXRlbXMuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICAgICAgbGV0IGtlZXBJdGVtID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKGlzTXVsdGkgJiYgc2VsZWN0ZWRWYWx1ZSkge1xuICAgICAgICAgICAgICBrZWVwSXRlbSA9ICFzZWxlY3RlZFZhbHVlLnNvbWUodmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZVtvcHRpb25JZGVudGlmaWVyXSA9PT0gaXRlbVtvcHRpb25JZGVudGlmaWVyXTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgha2VlcEl0ZW0pIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGlmIChmaWx0ZXJUZXh0Lmxlbmd0aCA8IDEpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW1GaWx0ZXIoXG4gICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsKGl0ZW0sIGZpbHRlclRleHQpLFxuICAgICAgICAgICAgICBmaWx0ZXJUZXh0LFxuICAgICAgICAgICAgICBpdGVtXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChncm91cEJ5KSB7XG4gICAgICBjb25zdCBncm91cFZhbHVlcyA9IFtdO1xuICAgICAgY29uc3QgZ3JvdXBzID0ge307XG5cbiAgICAgIF9maWx0ZXJlZEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGNvbnN0IGdyb3VwVmFsdWUgPSBncm91cEJ5KGl0ZW0pO1xuXG4gICAgICAgIGlmICghZ3JvdXBWYWx1ZXMuaW5jbHVkZXMoZ3JvdXBWYWx1ZSkpIHtcbiAgICAgICAgICBncm91cFZhbHVlcy5wdXNoKGdyb3VwVmFsdWUpO1xuICAgICAgICAgIGdyb3Vwc1tncm91cFZhbHVlXSA9IFtdO1xuXG4gICAgICAgICAgaWYgKGdyb3VwVmFsdWUpIHtcbiAgICAgICAgICAgIGdyb3Vwc1tncm91cFZhbHVlXS5wdXNoKFxuICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKGNyZWF0ZUdyb3VwSGVhZGVySXRlbShncm91cFZhbHVlLCBpdGVtKSwge1xuICAgICAgICAgICAgICAgIGlkOiBncm91cFZhbHVlLFxuICAgICAgICAgICAgICAgIGlzR3JvdXBIZWFkZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgaXNTZWxlY3RhYmxlOiBpc0dyb3VwSGVhZGVyU2VsZWN0YWJsZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBncm91cHNbZ3JvdXBWYWx1ZV0ucHVzaChcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHsgaXNHcm91cEl0ZW06ICEhZ3JvdXBWYWx1ZSB9LCBpdGVtKVxuICAgICAgICApO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHNvcnRlZEdyb3VwZWRJdGVtcyA9IFtdO1xuXG4gICAgICBncm91cEZpbHRlcihncm91cFZhbHVlcykuZm9yRWFjaChncm91cFZhbHVlID0+IHtcbiAgICAgICAgc29ydGVkR3JvdXBlZEl0ZW1zLnB1c2goLi4uZ3JvdXBzW2dyb3VwVmFsdWVdKTtcbiAgICAgIH0pO1xuXG4gICAgICBmaWx0ZXJlZEl0ZW1zID0gc29ydGVkR3JvdXBlZEl0ZW1zO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaWx0ZXJlZEl0ZW1zID0gX2ZpbHRlcmVkSXRlbXM7XG4gICAgfVxuICB9XG5cbiAgYmVmb3JlVXBkYXRlKCgpID0+IHtcbiAgICBpZiAoaXNNdWx0aSAmJiBzZWxlY3RlZFZhbHVlICYmIHNlbGVjdGVkVmFsdWUubGVuZ3RoID4gMSkge1xuICAgICAgY2hlY2tTZWxlY3RlZFZhbHVlRm9yRHVwbGljYXRlcygpO1xuICAgIH1cblxuICAgIGlmICghaXNNdWx0aSAmJiBzZWxlY3RlZFZhbHVlICYmIHByZXZfc2VsZWN0ZWRWYWx1ZSAhPT0gc2VsZWN0ZWRWYWx1ZSkge1xuICAgICAgaWYgKFxuICAgICAgICAhcHJldl9zZWxlY3RlZFZhbHVlIHx8XG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHNlbGVjdGVkVmFsdWVbb3B0aW9uSWRlbnRpZmllcl0pICE9PVxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHByZXZfc2VsZWN0ZWRWYWx1ZVtvcHRpb25JZGVudGlmaWVyXSlcbiAgICAgICkge1xuICAgICAgICBkaXNwYXRjaChcInNlbGVjdFwiLCBzZWxlY3RlZFZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBpc011bHRpICYmXG4gICAgICBKU09OLnN0cmluZ2lmeShzZWxlY3RlZFZhbHVlKSAhPT0gSlNPTi5zdHJpbmdpZnkocHJldl9zZWxlY3RlZFZhbHVlKVxuICAgICkge1xuICAgICAgaWYgKGNoZWNrU2VsZWN0ZWRWYWx1ZUZvckR1cGxpY2F0ZXMoKSkge1xuICAgICAgICBkaXNwYXRjaChcInNlbGVjdFwiLCBzZWxlY3RlZFZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29udGFpbmVyICYmIGxpc3RPcGVuICE9PSBwcmV2X2xpc3RPcGVuKSB7XG4gICAgICBpZiAobGlzdE9wZW4pIHtcbiAgICAgICAgbG9hZExpc3QoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlbW92ZUxpc3QoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZmlsdGVyVGV4dCAhPT0gcHJldl9maWx0ZXJUZXh0KSB7XG4gICAgICBpZiAoZmlsdGVyVGV4dC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlzRm9jdXNlZCA9IHRydWU7XG4gICAgICAgIGxpc3RPcGVuID0gdHJ1ZTtcblxuICAgICAgICBpZiAobG9hZE9wdGlvbnMpIHtcbiAgICAgICAgICBnZXRJdGVtcygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxvYWRMaXN0KCk7XG4gICAgICAgICAgbGlzdE9wZW4gPSB0cnVlO1xuXG4gICAgICAgICAgaWYgKGlzTXVsdGkpIHtcbiAgICAgICAgICAgIGFjdGl2ZVNlbGVjdGVkVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRMaXN0KFtdKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGxpc3QpIHtcbiAgICAgICAgbGlzdC4kc2V0KHtcbiAgICAgICAgICBmaWx0ZXJUZXh0XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc0ZvY3VzZWQgIT09IHByZXZfaXNGb2N1c2VkKSB7XG4gICAgICBpZiAoaXNGb2N1c2VkIHx8IGxpc3RPcGVuKSB7XG4gICAgICAgIGhhbmRsZUZvY3VzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNldEZpbHRlcigpO1xuICAgICAgICBpZiAoaW5wdXQpIGlucHV0LmJsdXIoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocHJldl9maWx0ZXJlZEl0ZW1zICE9PSBmaWx0ZXJlZEl0ZW1zKSB7XG4gICAgICBsZXQgX2ZpbHRlcmVkSXRlbXMgPSBbLi4uZmlsdGVyZWRJdGVtc107XG5cbiAgICAgIGlmIChpc0NyZWF0YWJsZSAmJiBmaWx0ZXJUZXh0KSB7XG4gICAgICAgIGNvbnN0IGl0ZW1Ub0NyZWF0ZSA9IGNyZWF0ZUl0ZW0oZmlsdGVyVGV4dCk7XG4gICAgICAgIGl0ZW1Ub0NyZWF0ZS5pc0NyZWF0b3IgPSB0cnVlO1xuXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nSXRlbVdpdGhGaWx0ZXJWYWx1ZSA9IF9maWx0ZXJlZEl0ZW1zLmZpbmQoaXRlbSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGl0ZW1bb3B0aW9uSWRlbnRpZmllcl0gPT09IGl0ZW1Ub0NyZWF0ZVtvcHRpb25JZGVudGlmaWVyXTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGV4aXN0aW5nU2VsZWN0aW9uV2l0aEZpbHRlclZhbHVlO1xuXG4gICAgICAgIGlmIChzZWxlY3RlZFZhbHVlKSB7XG4gICAgICAgICAgaWYgKGlzTXVsdGkpIHtcbiAgICAgICAgICAgIGV4aXN0aW5nU2VsZWN0aW9uV2l0aEZpbHRlclZhbHVlID0gc2VsZWN0ZWRWYWx1ZS5maW5kKHNlbGVjdGlvbiA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uW29wdGlvbklkZW50aWZpZXJdID09PSBpdGVtVG9DcmVhdGVbb3B0aW9uSWRlbnRpZmllcl1cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICBzZWxlY3RlZFZhbHVlW29wdGlvbklkZW50aWZpZXJdID09PSBpdGVtVG9DcmVhdGVbb3B0aW9uSWRlbnRpZmllcl1cbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGV4aXN0aW5nU2VsZWN0aW9uV2l0aEZpbHRlclZhbHVlID0gc2VsZWN0ZWRWYWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWV4aXN0aW5nSXRlbVdpdGhGaWx0ZXJWYWx1ZSAmJiAhZXhpc3RpbmdTZWxlY3Rpb25XaXRoRmlsdGVyVmFsdWUpIHtcbiAgICAgICAgICBfZmlsdGVyZWRJdGVtcyA9IFsuLi5fZmlsdGVyZWRJdGVtcywgaXRlbVRvQ3JlYXRlXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzZXRMaXN0KF9maWx0ZXJlZEl0ZW1zKTtcbiAgICB9XG5cbiAgICBwcmV2X3NlbGVjdGVkVmFsdWUgPSBzZWxlY3RlZFZhbHVlO1xuICAgIHByZXZfbGlzdE9wZW4gPSBsaXN0T3BlbjtcbiAgICBwcmV2X2ZpbHRlclRleHQgPSBmaWx0ZXJUZXh0O1xuICAgIHByZXZfaXNGb2N1c2VkID0gaXNGb2N1c2VkO1xuICAgIHByZXZfZmlsdGVyZWRJdGVtcyA9IGZpbHRlcmVkSXRlbXM7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGNoZWNrU2VsZWN0ZWRWYWx1ZUZvckR1cGxpY2F0ZXMoKSB7XG4gICAgbGV0IG5vRHVwbGljYXRlcyA9IHRydWU7XG4gICAgaWYgKHNlbGVjdGVkVmFsdWUpIHtcbiAgICAgIGNvbnN0IGlkcyA9IFtdO1xuICAgICAgY29uc3QgdW5pcXVlVmFsdWVzID0gW107XG5cbiAgICAgIHNlbGVjdGVkVmFsdWUuZm9yRWFjaCh2YWwgPT4ge1xuICAgICAgICBpZiAoIWlkcy5pbmNsdWRlcyh2YWxbb3B0aW9uSWRlbnRpZmllcl0pKSB7XG4gICAgICAgICAgaWRzLnB1c2godmFsW29wdGlvbklkZW50aWZpZXJdKTtcbiAgICAgICAgICB1bmlxdWVWYWx1ZXMucHVzaCh2YWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vRHVwbGljYXRlcyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKCFub0R1cGxpY2F0ZXMpXG4gICAgICAgIHNlbGVjdGVkVmFsdWUgPSB1bmlxdWVWYWx1ZXM7XG4gICAgfVxuICAgIHJldHVybiBub0R1cGxpY2F0ZXM7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBzZXRMaXN0KGl0ZW1zKSB7XG4gICAgYXdhaXQgdGljaygpO1xuICAgIGlmIChsaXN0KSByZXR1cm4gbGlzdC4kc2V0KHsgaXRlbXMgfSk7XG4gICAgaWYgKGxvYWRPcHRpb25zICYmIGdldEl0ZW1zSGFzSW52b2tlZCAmJiBpdGVtcy5sZW5ndGggPiAwKSBsb2FkTGlzdCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTXVsdGlJdGVtQ2xlYXIoZXZlbnQpIHtcbiAgICBjb25zdCB7IGRldGFpbCB9ID0gZXZlbnQ7XG4gICAgY29uc3QgaXRlbVRvUmVtb3ZlID1cbiAgICAgIHNlbGVjdGVkVmFsdWVbZGV0YWlsID8gZGV0YWlsLmkgOiBzZWxlY3RlZFZhbHVlLmxlbmd0aCAtIDFdO1xuXG4gICAgaWYgKHNlbGVjdGVkVmFsdWUubGVuZ3RoID09PSAxKSB7XG4gICAgICBzZWxlY3RlZFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxlY3RlZFZhbHVlID0gc2VsZWN0ZWRWYWx1ZS5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgIHJldHVybiBpdGVtICE9PSBpdGVtVG9SZW1vdmU7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBkaXNwYXRjaChcImNsZWFyXCIsIGl0ZW1Ub1JlbW92ZSk7XG5cbiAgICBnZXRQb3NpdGlvbigpO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0UG9zaXRpb24oKSB7XG4gICAgYXdhaXQgdGljaygpO1xuICAgIGlmICghdGFyZ2V0IHx8ICFjb250YWluZXIpIHJldHVybjtcbiAgICBjb25zdCB7IHRvcCwgaGVpZ2h0LCB3aWR0aCB9ID0gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgdGFyZ2V0LnN0eWxlW1wibWluLXdpZHRoXCJdID0gYCR7d2lkdGh9cHhgO1xuICAgIHRhcmdldC5zdHlsZS53aWR0aCA9IGAke2xpc3RBdXRvV2lkdGggPyBcImF1dG9cIiA6IFwiMTAwJVwifWA7XG4gICAgdGFyZ2V0LnN0eWxlLmxlZnQgPSBcIjBcIjtcblxuICAgIGlmIChsaXN0UGxhY2VtZW50ID09PSBcInRvcFwiKSB7XG4gICAgICB0YXJnZXQuc3R5bGUuYm90dG9tID0gYCR7aGVpZ2h0ICsgNX1weGA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldC5zdHlsZS50b3AgPSBgJHtoZWlnaHQgKyA1fXB4YDtcbiAgICB9XG5cbiAgICB0YXJnZXQgPSB0YXJnZXQ7XG5cbiAgICBpZiAobGlzdFBsYWNlbWVudCA9PT0gXCJhdXRvXCIgJiYgaXNPdXRPZlZpZXdwb3J0KHRhcmdldCkuYm90dG9tKSB7XG4gICAgICB0YXJnZXQuc3R5bGUudG9wID0gYGA7XG4gICAgICB0YXJnZXQuc3R5bGUuYm90dG9tID0gYCR7aGVpZ2h0ICsgNX1weGA7XG4gICAgfVxuXG4gICAgdGFyZ2V0LnN0eWxlLnZpc2liaWxpdHkgPSBcIlwiO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlS2V5RG93bihlKSB7XG4gICAgaWYgKCFpc0ZvY3VzZWQpIHJldHVybjtcblxuICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsaXN0T3BlbiA9IHRydWU7XG4gICAgICAgIGFjdGl2ZVNlbGVjdGVkVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIkFycm93VXBcIjpcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsaXN0T3BlbiA9IHRydWU7XG4gICAgICAgIGFjdGl2ZVNlbGVjdGVkVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIlRhYlwiOlxuICAgICAgICBpZiAoIWxpc3RPcGVuKSBpc0ZvY3VzZWQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiQmFja3NwYWNlXCI6XG4gICAgICAgIGlmICghaXNNdWx0aSB8fCBmaWx0ZXJUZXh0Lmxlbmd0aCA+IDApIHJldHVybjtcbiAgICAgICAgaWYgKGlzTXVsdGkgJiYgc2VsZWN0ZWRWYWx1ZSAmJiBzZWxlY3RlZFZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBoYW5kbGVNdWx0aUl0ZW1DbGVhcihcbiAgICAgICAgICAgIGFjdGl2ZVNlbGVjdGVkVmFsdWUgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICA/IGFjdGl2ZVNlbGVjdGVkVmFsdWVcbiAgICAgICAgICAgICAgOiBzZWxlY3RlZFZhbHVlLmxlbmd0aCAtIDFcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmIChhY3RpdmVTZWxlY3RlZFZhbHVlID09PSAwIHx8IGFjdGl2ZVNlbGVjdGVkVmFsdWUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGFjdGl2ZVNlbGVjdGVkVmFsdWUgPVxuICAgICAgICAgICAgc2VsZWN0ZWRWYWx1ZS5sZW5ndGggPiBhY3RpdmVTZWxlY3RlZFZhbHVlXG4gICAgICAgICAgICAgID8gYWN0aXZlU2VsZWN0ZWRWYWx1ZSAtIDFcbiAgICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICAgIGlmIChsaXN0KSBsaXN0LiRzZXQoeyBob3Zlckl0ZW1JbmRleDogLTEgfSk7XG4gICAgICAgIGlmICghaXNNdWx0aSB8fCBmaWx0ZXJUZXh0Lmxlbmd0aCA+IDApIHJldHVybjtcblxuICAgICAgICBpZiAoYWN0aXZlU2VsZWN0ZWRWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgYWN0aXZlU2VsZWN0ZWRWYWx1ZSA9IHNlbGVjdGVkVmFsdWUubGVuZ3RoIC0gMTtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBzZWxlY3RlZFZhbHVlLmxlbmd0aCA+IGFjdGl2ZVNlbGVjdGVkVmFsdWUgJiZcbiAgICAgICAgICBhY3RpdmVTZWxlY3RlZFZhbHVlICE9PSAwXG4gICAgICAgICkge1xuICAgICAgICAgIGFjdGl2ZVNlbGVjdGVkVmFsdWUgLT0gMTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICAgIGlmIChsaXN0KSBsaXN0LiRzZXQoeyBob3Zlckl0ZW1JbmRleDogLTEgfSk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhaXNNdWx0aSB8fFxuICAgICAgICAgIGZpbHRlclRleHQubGVuZ3RoID4gMCB8fFxuICAgICAgICAgIGFjdGl2ZVNlbGVjdGVkVmFsdWUgPT09IHVuZGVmaW5lZFxuICAgICAgICApXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAoYWN0aXZlU2VsZWN0ZWRWYWx1ZSA9PT0gc2VsZWN0ZWRWYWx1ZS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgYWN0aXZlU2VsZWN0ZWRWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfSBlbHNlIGlmIChhY3RpdmVTZWxlY3RlZFZhbHVlIDwgc2VsZWN0ZWRWYWx1ZS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgYWN0aXZlU2VsZWN0ZWRWYWx1ZSArPSAxO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUZvY3VzKCkge1xuICAgIGlzRm9jdXNlZCA9IHRydWU7XG4gICAgaWYgKGlucHV0KSBpbnB1dC5mb2N1cygpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlTGlzdCgpIHtcbiAgICByZXNldEZpbHRlcigpO1xuICAgIGFjdGl2ZVNlbGVjdGVkVmFsdWUgPSB1bmRlZmluZWQ7XG5cbiAgICBpZiAoIWxpc3QpIHJldHVybjtcbiAgICBsaXN0LiRkZXN0cm95KCk7XG4gICAgbGlzdCA9IHVuZGVmaW5lZDtcblxuICAgIGlmICghdGFyZ2V0KSByZXR1cm47XG4gICAgaWYgKHRhcmdldC5wYXJlbnROb2RlKSB0YXJnZXQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0YXJnZXQpO1xuICAgIHRhcmdldCA9IHVuZGVmaW5lZDtcblxuICAgIGxpc3QgPSBsaXN0O1xuICAgIHRhcmdldCA9IHRhcmdldDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVdpbmRvd0NsaWNrKGV2ZW50KSB7XG4gICAgaWYgKCFjb250YWluZXIpIHJldHVybjtcbiAgICBjb25zdCBldmVudFRhcmdldCA9XG4gICAgICBldmVudC5wYXRoICYmIGV2ZW50LnBhdGgubGVuZ3RoID4gMCA/IGV2ZW50LnBhdGhbMF0gOiBldmVudC50YXJnZXQ7XG4gICAgaWYgKGNvbnRhaW5lci5jb250YWlucyhldmVudFRhcmdldCkpIHJldHVybjtcbiAgICBpc0ZvY3VzZWQgPSBmYWxzZTtcbiAgICBsaXN0T3BlbiA9IGZhbHNlO1xuICAgIGFjdGl2ZVNlbGVjdGVkVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgaWYgKGlucHV0KSBpbnB1dC5ibHVyKCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVDbGljaygpIHtcbiAgICBpZiAoaXNEaXNhYmxlZCkgcmV0dXJuO1xuICAgIGlzRm9jdXNlZCA9IHRydWU7XG4gICAgbGlzdE9wZW4gPSAhbGlzdE9wZW47XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gaGFuZGxlQ2xlYXIoKSB7XG4gICAgc2VsZWN0ZWRWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICBsaXN0T3BlbiA9IGZhbHNlO1xuICAgIGRpc3BhdGNoKFwiY2xlYXJcIiwgc2VsZWN0ZWRWYWx1ZSk7XG4gICAgaGFuZGxlRm9jdXMoKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGxvYWRMaXN0KCkge1xuICAgIGF3YWl0IHRpY2soKTtcbiAgICBpZiAodGFyZ2V0ICYmIGxpc3QpIHJldHVybjtcblxuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBJdGVtLFxuICAgICAgZmlsdGVyVGV4dCxcbiAgICAgIG9wdGlvbklkZW50aWZpZXIsXG4gICAgICBub09wdGlvbnNNZXNzYWdlLFxuICAgICAgaGlkZUVtcHR5U3RhdGUsXG4gICAgICBpc1ZpcnR1YWxMaXN0LFxuICAgICAgc2VsZWN0ZWRWYWx1ZSxcbiAgICAgIGlzTXVsdGksXG4gICAgICBnZXRHcm91cEhlYWRlckxhYmVsLFxuICAgICAgaXRlbXM6IGZpbHRlcmVkSXRlbXMsXG4gICAgICBpdGVtSGVpZ2h0XG4gICAgfTtcblxuICAgIGlmIChnZXRPcHRpb25MYWJlbCkge1xuICAgICAgZGF0YS5nZXRPcHRpb25MYWJlbCA9IGdldE9wdGlvbkxhYmVsO1xuICAgIH1cblxuICAgIHRhcmdldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBPYmplY3QuYXNzaWduKHRhcmdldC5zdHlsZSwge1xuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgIFwiei1pbmRleFwiOiAyLFxuICAgICAgdmlzaWJpbGl0eTogXCJoaWRkZW5cIlxuICAgIH0pO1xuXG4gICAgbGlzdCA9IGxpc3Q7XG4gICAgdGFyZ2V0ID0gdGFyZ2V0O1xuICAgIGlmIChjb250YWluZXIpIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXJnZXQpO1xuXG4gICAgbGlzdCA9IG5ldyBMaXN0KHtcbiAgICAgIHRhcmdldCxcbiAgICAgIHByb3BzOiBkYXRhXG4gICAgfSk7XG5cbiAgICBsaXN0LiRvbihcIml0ZW1TZWxlY3RlZFwiLCBldmVudCA9PiB7XG4gICAgICBjb25zdCB7IGRldGFpbCB9ID0gZXZlbnQ7XG5cbiAgICAgIGlmIChkZXRhaWwpIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIGRldGFpbCk7XG5cbiAgICAgICAgaWYgKCFpdGVtLmlzR3JvdXBIZWFkZXIgfHwgaXRlbS5pc1NlbGVjdGFibGUpIHtcblxuICAgICAgICAgIGlmIChpc011bHRpKSB7XG4gICAgICAgICAgICBzZWxlY3RlZFZhbHVlID0gc2VsZWN0ZWRWYWx1ZSA/IHNlbGVjdGVkVmFsdWUuY29uY2F0KFtpdGVtXSkgOiBbaXRlbV07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGVjdGVkVmFsdWUgPSBpdGVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlc2V0RmlsdGVyKCk7XG4gICAgICAgICAgc2VsZWN0ZWRWYWx1ZSA9IHNlbGVjdGVkVmFsdWU7XG5cbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGxpc3RPcGVuID0gZmFsc2U7XG4gICAgICAgICAgICBhY3RpdmVTZWxlY3RlZFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBsaXN0LiRvbihcIml0ZW1DcmVhdGVkXCIsIGV2ZW50ID0+IHtcbiAgICAgIGNvbnN0IHsgZGV0YWlsIH0gPSBldmVudDtcbiAgICAgIGlmIChpc011bHRpKSB7XG4gICAgICAgIHNlbGVjdGVkVmFsdWUgPSBzZWxlY3RlZFZhbHVlIHx8IFtdO1xuICAgICAgICBzZWxlY3RlZFZhbHVlID0gWy4uLnNlbGVjdGVkVmFsdWUsIGNyZWF0ZUl0ZW0oZGV0YWlsKV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxlY3RlZFZhbHVlID0gY3JlYXRlSXRlbShkZXRhaWwpO1xuICAgICAgfVxuXG4gICAgICBmaWx0ZXJUZXh0ID0gXCJcIjtcbiAgICAgIGxpc3RPcGVuID0gZmFsc2U7XG4gICAgICBhY3RpdmVTZWxlY3RlZFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgcmVzZXRGaWx0ZXIoKTtcbiAgICB9KTtcblxuICAgIGxpc3QuJG9uKFwiY2xvc2VMaXN0XCIsICgpID0+IHtcbiAgICAgIGxpc3RPcGVuID0gZmFsc2U7XG4gICAgfSk7XG5cbiAgICAobGlzdCA9IGxpc3QpLCAodGFyZ2V0ID0gdGFyZ2V0KTtcbiAgICBnZXRQb3NpdGlvbigpO1xuICB9XG5cbiAgb25Nb3VudCgoKSA9PiB7XG4gICAgaWYgKGlzRm9jdXNlZCkgaW5wdXQuZm9jdXMoKTtcbiAgICBpZiAobGlzdE9wZW4pIGxvYWRMaXN0KCk7XG5cbiAgICBpZiAoaXRlbXMgJiYgaXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgb3JpZ2luYWxJdGVtc0Nsb25lID0gSlNPTi5zdHJpbmdpZnkoaXRlbXMpO1xuICAgIH1cbiAgfSk7XG5cbiAgb25EZXN0cm95KCgpID0+IHtcbiAgICByZW1vdmVMaXN0KCk7XG4gIH0pO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgLnNlbGVjdENvbnRhaW5lciB7XG4gICAgLS1wYWRkaW5nOiAwIDE2cHg7XG5cbiAgICBib3JkZXI6IHZhcigtLWJvcmRlciwgMXB4IHNvbGlkICNkOGRiZGYpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlclJhZGl1cywgM3B4KTtcbiAgICBoZWlnaHQ6IHZhcigtLWhlaWdodCwgNDJweCk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLCAjZmZmKTtcbiAgfVxuXG4gIC5zZWxlY3RDb250YWluZXIgaW5wdXQge1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLWlucHV0Q29sb3IsICMzZjRmNWYpO1xuICAgIGhlaWdodDogdmFyKC0taGVpZ2h0LCA0MnB4KTtcbiAgICBsaW5lLWhlaWdodDogdmFyKC0taGVpZ2h0LCA0MnB4KTtcbiAgICBwYWRkaW5nOiB2YXIoLS1pbnB1dFBhZGRpbmcsIHZhcigtLXBhZGRpbmcpKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBmb250LXNpemU6IHZhcigtLWlucHV0Rm9udFNpemUsIDE0cHgpO1xuICAgIGxldHRlci1zcGFjaW5nOiB2YXIoLS1pbnB1dExldHRlclNwYWNpbmcsIC0wLjA4cHgpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiB2YXIoLS1pbnB1dExlZnQsIDApO1xuICB9XG5cbiAgLnNlbGVjdENvbnRhaW5lciBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiB2YXIoLS1wbGFjZWhvbGRlckNvbG9yLCAjNzg4NDhmKTtcbiAgfVxuXG4gIC5zZWxlY3RDb250YWluZXIgaW5wdXQ6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cblxuICAuc2VsZWN0Q29udGFpbmVyOmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJvcmRlckhvdmVyQ29sb3IsICNiMmI4YmYpO1xuICB9XG5cbiAgLnNlbGVjdENvbnRhaW5lci5mb2N1c2VkIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJvcmRlckZvY3VzQ29sb3IsICMwMDZmZTgpO1xuICB9XG5cbiAgLnNlbGVjdENvbnRhaW5lci5kaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZGlzYWJsZWRCYWNrZ3JvdW5kLCAjZWJlZGVmKTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWRpc2FibGVkQm9yZGVyQ29sb3IsICNlYmVkZWYpO1xuICAgIGNvbG9yOiB2YXIoLS1kaXNhYmxlZENvbG9yLCAjYzFjNmNjKTtcbiAgfVxuXG4gIC5zZWxlY3RDb250YWluZXIuZGlzYWJsZWQgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogdmFyKC0tZGlzYWJsZWRQbGFjZWhvbGRlckNvbG9yLCAjYzFjNmNjKTtcbiAgfVxuXG4gIC5zZWxlY3RlZEl0ZW0ge1xuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1oZWlnaHQsIDQycHgpO1xuICAgIGhlaWdodDogdmFyKC0taGVpZ2h0LCA0MnB4KTtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgcGFkZGluZzogdmFyKC0tc2VsZWN0ZWRJdGVtUGFkZGluZywgMCAyMHB4IDAgMCk7XG4gIH1cblxuICAuc2VsZWN0ZWRJdGVtOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG5cbiAgLmNsZWFyU2VsZWN0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IHZhcigtLWNsZWFyU2VsZWN0UmlnaHQsIDEwcHgpO1xuICAgIHRvcDogdmFyKC0tY2xlYXJTZWxlY3RUb3AsIDExcHgpO1xuICAgIGJvdHRvbTogdmFyKC0tY2xlYXJTZWxlY3RCb3R0b20sIDExcHgpO1xuICAgIHdpZHRoOiB2YXIoLS1jbGVhclNlbGVjdFdpZHRoLCAyMHB4KTtcbiAgICBjb2xvcjogdmFyKC0tY2xlYXJTZWxlY3RDb2xvciwgI2M1Y2FjZik7XG4gICAgZmxleDogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmNsZWFyU2VsZWN0OmhvdmVyIHtcbiAgICBjb2xvcjogdmFyKC0tY2xlYXJTZWxlY3RIb3ZlckNvbG9yLCAjMmMzZTUwKTtcbiAgfVxuXG4gIC5zZWxlY3RDb250YWluZXIuZm9jdXNlZCAuY2xlYXJTZWxlY3Qge1xuICAgIGNvbG9yOiB2YXIoLS1jbGVhclNlbGVjdEZvY3VzQ29sb3IsICMzZjRmNWYpO1xuICB9XG5cbiAgLmluZGljYXRvciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiB2YXIoLS1pbmRpY2F0b3JSaWdodCwgMTBweCk7XG4gICAgdG9wOiB2YXIoLS1pbmRpY2F0b3JUb3AsIDExcHgpO1xuICAgIHdpZHRoOiB2YXIoLS1pbmRpY2F0b3JXaWR0aCwgMjBweCk7XG4gICAgaGVpZ2h0OiB2YXIoLS1pbmRpY2F0b3JIZWlnaHQsIDIwcHgpO1xuICAgIGNvbG9yOiB2YXIoLS1pbmRpY2F0b3JDb2xvciwgI2M1Y2FjZik7XG4gIH1cblxuICAuaW5kaWNhdG9yIHN2ZyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZpbGw6IHZhcigtLWluZGljYXRvckZpbGwsIGN1cnJlbnRjb2xvcik7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgc3Ryb2tlOiB2YXIoLS1pbmRpY2F0b3JTdHJva2UsIGN1cnJlbnRjb2xvcik7XG4gICAgc3Ryb2tlLXdpZHRoOiAwO1xuICB9XG5cbiAgLnNwaW5uZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogdmFyKC0tc3Bpbm5lclJpZ2h0LCAxMHB4KTtcbiAgICB0b3A6IHZhcigtLXNwaW5uZXJMZWZ0LCAxMXB4KTtcbiAgICB3aWR0aDogdmFyKC0tc3Bpbm5lcldpZHRoLCAyMHB4KTtcbiAgICBoZWlnaHQ6IHZhcigtLXNwaW5uZXJIZWlnaHQsIDIwcHgpO1xuICAgIGNvbG9yOiB2YXIoLS1zcGlubmVyQ29sb3IsICM1MWNlNmMpO1xuICAgIGFuaW1hdGlvbjogcm90YXRlIDAuNzVzIGxpbmVhciBpbmZpbml0ZTtcbiAgfVxuXG4gIC5zcGlubmVyX2ljb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xuICB9XG5cbiAgLnNwaW5uZXJfcGF0aCB7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogOTA7XG4gICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuICB9XG5cbiAgLm11bHRpU2VsZWN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IHZhcigtLW11bHRpU2VsZWN0UGFkZGluZywgMCAzNXB4IDAgMTZweCk7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgfVxuXG4gIC5tdWx0aVNlbGVjdCA+ICoge1xuICAgIGZsZXg6IDEgMSA1MHB4O1xuICB9XG5cbiAgLnNlbGVjdENvbnRhaW5lci5tdWx0aVNlbGVjdCBpbnB1dCB7XG4gICAgcGFkZGluZzogdmFyKC0tbXVsdGlTZWxlY3RJbnB1dFBhZGRpbmcsIDApO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IHZhcigtLW11bHRpU2VsZWN0SW5wdXRNYXJnaW4sIDApO1xuICB9XG5cbiAgLmhhc0Vycm9yIHtcbiAgICBib3JkZXI6IHZhcigtLWVycm9yQm9yZGVyLCAxcHggc29saWQgI2ZmMmQ1NSk7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZXJyb3JCYWNrZ3JvdW5kLCAjZmZmKTtcbiAgfVxuXG4gIEBrZXlmcmFtZXMgcm90YXRlIHtcbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgfVxuICB9XG48L3N0eWxlPlxuXG48c3ZlbHRlOndpbmRvd1xuICBvbjpjbGljaz17aGFuZGxlV2luZG93Q2xpY2t9XG4gIG9uOmtleWRvd249e2hhbmRsZUtleURvd259XG4gIG9uOnJlc2l6ZT17Z2V0UG9zaXRpb259IC8+XG5cbjxkaXZcbiAgY2xhc3M9XCJzZWxlY3RDb250YWluZXIge2NvbnRhaW5lckNsYXNzZXN9XCJcbiAgY2xhc3M6aGFzRXJyb3JcbiAgY2xhc3M6bXVsdGlTZWxlY3Q9e2lzTXVsdGl9XG4gIGNsYXNzOmRpc2FibGVkPXtpc0Rpc2FibGVkfVxuICBjbGFzczpmb2N1c2VkPXtpc0ZvY3VzZWR9XG4gIHN0eWxlPXtjb250YWluZXJTdHlsZXN9XG4gIG9uOmNsaWNrPXtoYW5kbGVDbGlja31cbiAgYmluZDp0aGlzPXtjb250YWluZXJ9PlxuXG4gIHsjaWYgSWNvbn1cbiAgICA8c3ZlbHRlOmNvbXBvbmVudCB0aGlzPXtJY29ufSB7Li4uaWNvblByb3BzfSAvPlxuICB7L2lmfVxuXG4gIHsjaWYgaXNNdWx0aSAmJiBzZWxlY3RlZFZhbHVlICYmIHNlbGVjdGVkVmFsdWUubGVuZ3RoID4gMH1cbiAgICA8c3ZlbHRlOmNvbXBvbmVudFxuICAgICAgdGhpcz17TXVsdGlTZWxlY3Rpb259XG4gICAgICB7c2VsZWN0ZWRWYWx1ZX1cbiAgICAgIHtnZXRTZWxlY3Rpb25MYWJlbH1cbiAgICAgIHthY3RpdmVTZWxlY3RlZFZhbHVlfVxuICAgICAge2lzRGlzYWJsZWR9XG4gICAgICBvbjptdWx0aUl0ZW1DbGVhcj17aGFuZGxlTXVsdGlJdGVtQ2xlYXJ9XG4gICAgICBvbjpmb2N1cz17aGFuZGxlRm9jdXN9IC8+XG4gIHsvaWZ9XG5cbiAgeyNpZiBpc0Rpc2FibGVkfVxuICAgIDxpbnB1dFxuICAgICAgey4uLl9pbnB1dEF0dHJpYnV0ZXN9XG4gICAgICBiaW5kOnRoaXM9e2lucHV0fVxuICAgICAgb246Zm9jdXM9e2hhbmRsZUZvY3VzfVxuICAgICAgYmluZDp2YWx1ZT17ZmlsdGVyVGV4dH1cbiAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlclRleHR9XG4gICAgICBzdHlsZT17aW5wdXRTdHlsZXN9XG4gICAgICBkaXNhYmxlZCAvPlxuICB7OmVsc2V9XG4gICAgPGlucHV0XG4gICAgICB7Li4uX2lucHV0QXR0cmlidXRlc31cbiAgICAgIGJpbmQ6dGhpcz17aW5wdXR9XG4gICAgICBvbjpmb2N1cz17aGFuZGxlRm9jdXN9XG4gICAgICBiaW5kOnZhbHVlPXtmaWx0ZXJUZXh0fVxuICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyVGV4dH1cbiAgICAgIHN0eWxlPXtpbnB1dFN0eWxlc30gLz5cbiAgey9pZn1cblxuICB7I2lmICFpc011bHRpICYmIHNob3dTZWxlY3RlZEl0ZW19XG4gICAgPGRpdiBjbGFzcz1cInNlbGVjdGVkSXRlbVwiIG9uOmZvY3VzPXtoYW5kbGVGb2N1c30+XG4gICAgICA8c3ZlbHRlOmNvbXBvbmVudFxuICAgICAgICB0aGlzPXtTZWxlY3Rpb259XG4gICAgICAgIGl0ZW09e3NlbGVjdGVkVmFsdWV9XG4gICAgICAgIHtnZXRTZWxlY3Rpb25MYWJlbH0gLz5cbiAgICA8L2Rpdj5cbiAgey9pZn1cblxuICB7I2lmIHNob3dTZWxlY3RlZEl0ZW0gJiYgaXNDbGVhcmFibGUgJiYgIWlzRGlzYWJsZWQgJiYgIWlzV2FpdGluZ31cbiAgICA8ZGl2IGNsYXNzPVwiY2xlYXJTZWxlY3RcIiBvbjpjbGlja3xwcmV2ZW50RGVmYXVsdD17aGFuZGxlQ2xlYXJ9PlxuICAgICAgPHN2Z1xuICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgdmlld0JveD1cIi0yIC0yIDUwIDUwXCJcbiAgICAgICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxuICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCI+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgZD1cIk0zNC45MjMsMzcuMjUxTDI0LDI2LjMyOEwxMy4wNzcsMzcuMjUxTDkuNDM2LDMzLjYxbDEwLjkyMy0xMC45MjNMOS40MzYsMTEuNzY1bDMuNjQxLTMuNjQxTDI0LDE5LjA0N0wzNC45MjMsOC4xMjRcbiAgICAgICAgICBsMy42NDEsMy42NDFMMjcuNjQxLDIyLjY4OEwzOC41NjQsMzMuNjFMMzQuOTIzLDM3LjI1MXpcIiAvPlxuICAgICAgPC9zdmc+XG4gICAgPC9kaXY+XG4gIHsvaWZ9XG5cbiAgeyNpZiBzaG93SW5kaWNhdG9yIHx8IChzaG93Q2hldnJvbiAmJiAhc2VsZWN0ZWRWYWx1ZSB8fCAoIWlzU2VhcmNoYWJsZSAmJiAhaXNEaXNhYmxlZCAmJiAhaXNXYWl0aW5nICYmICgoc2hvd1NlbGVjdGVkSXRlbSAmJiAhaXNDbGVhcmFibGUpIHx8ICFzaG93U2VsZWN0ZWRJdGVtKSkpfVxuICAgIDxkaXYgY2xhc3M9XCJpbmRpY2F0b3JcIj5cbiAgICAgIHsjaWYgaW5kaWNhdG9yU3ZnfVxuICAgICAgICB7QGh0bWwgaW5kaWNhdG9yU3ZnfVxuICAgICAgezplbHNlfVxuICAgICAgICA8c3ZnXG4gICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICAgICAgICBmb2N1c2FibGU9XCJmYWxzZVwiPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTTQuNTE2IDcuNTQ4YzAuNDM2LTAuNDQ2IDEuMDQzLTAuNDgxIDEuNTc2IDBsMy45MDggMy43NDdcbiAgICAgICAgICAgIDMuOTA4LTMuNzQ3YzAuNTMzLTAuNDgxIDEuMTQxLTAuNDQ2IDEuNTc0IDAgMC40MzYgMC40NDUgMC40MDggMS4xOTcgMFxuICAgICAgICAgICAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDJcbiAgICAgICAgICAgIDAuMzM1LTAuNzg3IDAuMzM1cy0wLjU3LTAuMTEyLTAuNzg5LTAuMzM1YzBcbiAgICAgICAgICAgIDAtNC4yODctNC4wODQtNC42OTUtNC41MDJzLTAuNDM2LTEuMTcgMC0xLjYxNXpcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIHsvaWZ9XG4gICAgPC9kaXY+XG4gIHsvaWZ9XG5cbiAgeyNpZiBpc1dhaXRpbmd9XG4gICAgPGRpdiBjbGFzcz1cInNwaW5uZXJcIj5cbiAgICAgIDxzdmcgY2xhc3M9XCJzcGlubmVyX2ljb25cIiB2aWV3Qm94PVwiMjUgMjUgNTAgNTBcIj5cbiAgICAgICAgPGNpcmNsZVxuICAgICAgICAgIGNsYXNzPVwic3Bpbm5lcl9wYXRoXCJcbiAgICAgICAgICBjeD1cIjUwXCJcbiAgICAgICAgICBjeT1cIjUwXCJcbiAgICAgICAgICByPVwiMjBcIlxuICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjVcIlxuICAgICAgICAgIHN0cm9rZS1taXRlcmxpbWl0PVwiMTBcIiAvPlxuICAgICAgPC9zdmc+XG4gICAgPC9kaXY+XG4gIHsvaWZ9XG48L2Rpdj5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErbUJFLGdCQUFnQixlQUFDLENBQUMsQUFDaEIsU0FBUyxDQUFFLE1BQU0sQ0FFakIsTUFBTSxDQUFFLElBQUksUUFBUSxDQUFDLGtCQUFrQixDQUFDLENBQ3hDLGFBQWEsQ0FBRSxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FDdkMsTUFBTSxDQUFFLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUMzQixRQUFRLENBQUUsUUFBUSxDQUNsQixPQUFPLENBQUUsSUFBSSxDQUNiLFdBQVcsQ0FBRSxNQUFNLENBQ25CLE9BQU8sQ0FBRSxJQUFJLFNBQVMsQ0FBQyxDQUN2QixVQUFVLENBQUUsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLEFBQ3JDLENBQUMsQUFFRCwrQkFBZ0IsQ0FBQyxLQUFLLGVBQUMsQ0FBQyxBQUN0QixNQUFNLENBQUUsT0FBTyxDQUNmLE1BQU0sQ0FBRSxJQUFJLENBQ1osS0FBSyxDQUFFLElBQUksWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUNqQyxNQUFNLENBQUUsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQzNCLFdBQVcsQ0FBRSxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FDaEMsT0FBTyxDQUFFLElBQUksY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUM1QyxLQUFLLENBQUUsSUFBSSxDQUNYLFVBQVUsQ0FBRSxXQUFXLENBQ3ZCLFNBQVMsQ0FBRSxJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FDckMsY0FBYyxDQUFFLElBQUksb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQ2xELFFBQVEsQ0FBRSxRQUFRLENBQ2xCLElBQUksQ0FBRSxJQUFJLFdBQVcsQ0FB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 */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(document.head, style);
}

// (798:2) {#if Icon}
function create_if_block_7(ctx) {
	var switch_instance_anchor, current;

	var switch_instance_spread_levels = [
		ctx.iconProps
	];

	var switch_value = ctx.Icon;

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

		m: function mount(target_1, anchor) {
			if (switch_instance) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(switch_instance, target_1, anchor);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target_1, switch_instance_anchor, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var switch_instance_changes = changed.iconProps ? Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["get_spread_update"])(switch_instance_spread_levels, [
				ctx.iconProps
			]) : {};

			if (switch_value !== (switch_value = ctx.Icon)) {
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

// (802:2) {#if isMulti && selectedValue && selectedValue.length > 0}
function create_if_block_6(ctx) {
	var switch_instance_anchor, current;

	var switch_value = ctx.MultiSelection;

	function switch_props(ctx) {
		return {
			props: {
			selectedValue: ctx.selectedValue,
			getSelectionLabel: ctx.getSelectionLabel,
			activeSelectedValue: ctx.activeSelectedValue,
			isDisabled: ctx.isDisabled
		},
			$$inline: true
		};
	}

	if (switch_value) {
		var switch_instance = new switch_value(switch_props(ctx));
		switch_instance.$on("multiItemClear", ctx.handleMultiItemClear);
		switch_instance.$on("focus", ctx.handleFocus);
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

		m: function mount(target_1, anchor) {
			if (switch_instance) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(switch_instance, target_1, anchor);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target_1, switch_instance_anchor, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var switch_instance_changes = {};
			if (changed.selectedValue) switch_instance_changes.selectedValue = ctx.selectedValue;
			if (changed.getSelectionLabel) switch_instance_changes.getSelectionLabel = ctx.getSelectionLabel;
			if (changed.activeSelectedValue) switch_instance_changes.activeSelectedValue = ctx.activeSelectedValue;
			if (changed.isDisabled) switch_instance_changes.isDisabled = ctx.isDisabled;

			if (switch_value !== (switch_value = ctx.MultiSelection)) {
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
					switch_instance.$on("multiItemClear", ctx.handleMultiItemClear);
					switch_instance.$on("focus", ctx.handleFocus);

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

// (822:2) {:else}
function create_else_block_1(ctx) {
	var input_1, dispose;

	var input_1_levels = [
		ctx._inputAttributes,
		{ placeholder: ctx.placeholderText },
		{ style: ctx.inputStyles },
		{ class: "svelte-1kmtf2c" }
	];

	var input_1_data = {};
	for (var i = 0; i < input_1_levels.length; i += 1) {
		input_1_data = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["assign"])(input_1_data, input_1_levels[i]);
	}

	return {
		c: function create() {
			input_1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("input");
			this.h()
		},

		l: function claim(nodes) {
			input_1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "INPUT", { placeholder: true, style: true, class: true }, false);
			var input_1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(input_1);

			input_1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			this.h();
		},

		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_attributes"])(input_1, input_1_data);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(input_1, file, 822, 4, 20314);

			dispose = [
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(input_1, "input", ctx.input_1_input_handler_1),
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(input_1, "focus", ctx.handleFocus)
			];
		},

		m: function mount(target_1, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target_1, input_1, anchor);

			input_1.value = ctx.filterText;

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_binding_callback"])(() => ctx.input_1_binding_1(input_1, null));
		},

		p: function update(changed, ctx) {
			if (changed.filterText && (input_1.value !== ctx.filterText)) input_1.value = ctx.filterText;
			if (changed.items) {
				ctx.input_1_binding_1(null, input_1);
				;
				ctx.input_1_binding_1(input_1, null);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_attributes"])(input_1, Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["get_spread_update"])(input_1_levels, [
				(changed._inputAttributes) && ctx._inputAttributes,
				(changed.placeholderText) && { placeholder: ctx.placeholderText },
				(changed.inputStyles) && { style: ctx.inputStyles },
				{ class: "svelte-1kmtf2c" }
			]));
		},

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(input_1);
			}

			ctx.input_1_binding_1(null, input_1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["run_all"])(dispose);
		}
	};
}

// (813:2) {#if isDisabled}
function create_if_block_5(ctx) {
	var input_1, dispose;

	var input_1_levels = [
		ctx._inputAttributes,
		{ placeholder: ctx.placeholderText },
		{ style: ctx.inputStyles },
		{ disabled: true },
		{ class: "svelte-1kmtf2c" }
	];

	var input_1_data = {};
	for (var i = 0; i < input_1_levels.length; i += 1) {
		input_1_data = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["assign"])(input_1_data, input_1_levels[i]);
	}

	return {
		c: function create() {
			input_1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("input");
			this.h()
		},

		l: function claim(nodes) {
			input_1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "INPUT", { placeholder: true, style: true, disabled: true, class: true }, false);
			var input_1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(input_1);

			input_1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			this.h();
		},

		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_attributes"])(input_1, input_1_data);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(input_1, file, 813, 4, 20102);

			dispose = [
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(input_1, "input", ctx.input_1_input_handler),
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(input_1, "focus", ctx.handleFocus)
			];
		},

		m: function mount(target_1, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target_1, input_1, anchor);

			input_1.value = ctx.filterText;

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_binding_callback"])(() => ctx.input_1_binding(input_1, null));
		},

		p: function update(changed, ctx) {
			if (changed.filterText && (input_1.value !== ctx.filterText)) input_1.value = ctx.filterText;
			if (changed.items) {
				ctx.input_1_binding(null, input_1);
				;
				ctx.input_1_binding(input_1, null);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_attributes"])(input_1, Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["get_spread_update"])(input_1_levels, [
				(changed._inputAttributes) && ctx._inputAttributes,
				(changed.placeholderText) && { placeholder: ctx.placeholderText },
				(changed.inputStyles) && { style: ctx.inputStyles },
				{ disabled: true },
				{ class: "svelte-1kmtf2c" }
			]));
		},

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(input_1);
			}

			ctx.input_1_binding(null, input_1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["run_all"])(dispose);
		}
	};
}

// (832:2) {#if !isMulti && showSelectedItem}
function create_if_block_4(ctx) {
	var div, current, dispose;

	var switch_value = ctx.Selection;

	function switch_props(ctx) {
		return {
			props: {
			item: ctx.selectedValue,
			getSelectionLabel: ctx.getSelectionLabel
		},
			$$inline: true
		};
	}

	if (switch_value) {
		var switch_instance = new switch_value(switch_props(ctx));
	}

	return {
		c: function create() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			if (switch_instance) switch_instance.$$.fragment.c();
			this.h()
		},

		l: function claim(nodes) {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "DIV", { class: true }, false);
			var div_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div);

			if (switch_instance) switch_instance.$$.fragment.l(div_nodes);
			div_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			this.h();
		},

		h: function hydrate() {
			div.className = "selectedItem svelte-1kmtf2c";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div, file, 832, 4, 20547);
			dispose = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(div, "focus", ctx.handleFocus);
		},

		m: function mount(target_1, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target_1, div, anchor);

			if (switch_instance) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(switch_instance, div, null);
			}

			current = true;
		},

		p: function update(changed, ctx) {
			var switch_instance_changes = {};
			if (changed.selectedValue) switch_instance_changes.item = ctx.selectedValue;
			if (changed.getSelectionLabel) switch_instance_changes.getSelectionLabel = ctx.getSelectionLabel;

			if (switch_value !== (switch_value = ctx.Selection)) {
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
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(switch_instance, div, null);
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
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
			}

			if (switch_instance) switch_instance.$destroy();
			dispose();
		}
	};
}

// (841:2) {#if showSelectedItem && isClearable && !isDisabled && !isWaiting}
function create_if_block_3(ctx) {
	var div, svg, path, dispose;

	return {
		c: function create() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			svg = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["svg_element"])("svg");
			path = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["svg_element"])("path");
			this.h()
		},

		l: function claim(nodes) {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "DIV", { class: true }, false);
			var div_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div);

			svg = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div_nodes, "svg", { width: true, height: true, viewBox: true, focusable: true, role: true, class: true }, true);
			var svg_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(svg);

			path = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(svg_nodes, "path", { fill: true, d: true }, true);
			var path_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(path);

			path_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			svg_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			div_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			this.h();
		},

		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(path, "fill", "currentColor");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(path, "d", "M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124\n          l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(path, file, 848, 8, 21010);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(svg, "width", "100%");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(svg, "height", "100%");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(svg, "viewBox", "-2 -2 50 50");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(svg, "focusable", "false");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(svg, "role", "presentation");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(svg, "class", "svelte-1kmtf2c");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(svg, file, 842, 6, 20869);
			div.className = "clearSelect svelte-1kmtf2c";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div, file, 841, 4, 20799);
			dispose = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(div, "click", Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["prevent_default"])(ctx.handleClear));
		},

		m: function mount(target_1, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target_1, div, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, svg);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(svg, path);
		},

		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
			}

			dispose();
		}
	};
}

// (857:2) {#if showIndicator || (showChevron && !selectedValue || (!isSearchable && !isDisabled && !isWaiting && ((showSelectedItem && !isClearable) || !showSelectedItem)))}
function create_if_block_1(ctx) {
	var div;

	function select_block_type_1(ctx) {
		if (ctx.indicatorSvg) return create_if_block_2;
		return create_else_block;
	}

	var current_block_type = select_block_type_1(ctx);
	var if_block = current_block_type(ctx);

	return {
		c: function create() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			if_block.c();
			this.h()
		},

		l: function claim(nodes) {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "DIV", { class: true }, false);
			var div_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div);

			if_block.l(div_nodes);
			div_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			this.h();
		},

		h: function hydrate() {
			div.className = "indicator svelte-1kmtf2c";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div, file, 857, 4, 21444);
		},

		m: function mount(target_1, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target_1, div, anchor);
			if_block.m(div, null);
		},

		p: function update(changed, ctx) {
			if (current_block_type === (current_block_type = select_block_type_1(ctx)) && if_block) {
				if_block.p(changed, ctx);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);
				if (if_block) {
					if_block.c();
					if_block.m(div, null);
				}
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
			}

			if_block.d();
		}
	};
}

// (861:6) {:else}
function create_else_block(ctx) {
	var svg, path;

	return {
		c: function create() {
			svg = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["svg_element"])("svg");
			path = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["svg_element"])("path");
			this.h()
		},

		l: function claim(nodes) {
			svg = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "svg", { width: true, height: true, viewBox: true, focusable: true, class: true }, true);
			var svg_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(svg);

			path = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(svg_nodes, "path", { d: true }, true);
			var path_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(path);

			path_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			svg_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			this.h();
		},

		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(path, "d", "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747\n            3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0\n            1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502\n            0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0\n            0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(path, file, 866, 10, 21665);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(svg, "width", "100%");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(svg, "height", "100%");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(svg, "viewBox", "0 0 20 20");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(svg, "focusable", "false");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(svg, "class", "svelte-1kmtf2c");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(svg, file, 861, 8, 21544);
		},

		m: function mount(target_1, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target_1, svg, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(svg, path);
		},

		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(svg);
			}
		}
	};
}

// (859:6) {#if indicatorSvg}
function create_if_block_2(ctx) {
	var raw_before, raw_after;

	return {
		c: function create() {
			raw_before = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])('noscript');
			raw_after = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])('noscript');
		},

		l: function claim(nodes) {
			raw_before = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])('noscript');
			raw_after = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])('noscript');
		},

		m: function mount(target_1, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target_1, raw_before, anchor);
			raw_before.insertAdjacentHTML("afterend", ctx.indicatorSvg);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target_1, raw_after, anchor);
		},

		p: function update(changed, ctx) {
			if (changed.indicatorSvg) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_between"])(raw_before, raw_after);
				raw_before.insertAdjacentHTML("afterend", ctx.indicatorSvg);
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_between"])(raw_before, raw_after);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(raw_before);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(raw_after);
			}
		}
	};
}

// (878:2) {#if isWaiting}
function create_if_block(ctx) {
	var div, svg, circle;

	return {
		c: function create() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			svg = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["svg_element"])("svg");
			circle = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["svg_element"])("circle");
			this.h()
		},

		l: function claim(nodes) {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "DIV", { class: true }, false);
			var div_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div);

			svg = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div_nodes, "svg", { class: true, viewBox: true }, true);
			var svg_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(svg);

			circle = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(svg_nodes, "circle", { class: true, cx: true, cy: true, r: true, fill: true, stroke: true, "stroke-width": true, "stroke-miterlimit": true }, true);
			var circle_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(circle);

			circle_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			svg_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			div_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			this.h();
		},

		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(circle, "class", "spinner_path svelte-1kmtf2c");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(circle, "cx", "50");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(circle, "cy", "50");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(circle, "r", "20");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(circle, "fill", "none");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(circle, "stroke", "currentColor");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(circle, "stroke-width", "5");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(circle, "stroke-miterlimit", "10");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(circle, file, 880, 8, 22170);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(svg, "class", "spinner_icon svelte-1kmtf2c");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(svg, "viewBox", "25 25 50 50");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(svg, file, 879, 6, 22113);
			div.className = "spinner svelte-1kmtf2c";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div, file, 878, 4, 22085);
		},

		m: function mount(target_1, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target_1, div, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, svg);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(svg, circle);
		},

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
			}
		}
	};
}

function create_fragment(ctx) {
	var div, t0, t1, t2, t3, t4, t5, div_class_value, current, dispose;

	var if_block0 = (ctx.Icon) && create_if_block_7(ctx);

	var if_block1 = (ctx.isMulti && ctx.selectedValue && ctx.selectedValue.length > 0) && create_if_block_6(ctx);

	function select_block_type(ctx) {
		if (ctx.isDisabled) return create_if_block_5;
		return create_else_block_1;
	}

	var current_block_type = select_block_type(ctx);
	var if_block2 = current_block_type(ctx);

	var if_block3 = (!ctx.isMulti && ctx.showSelectedItem) && create_if_block_4(ctx);

	var if_block4 = (ctx.showSelectedItem && ctx.isClearable && !ctx.isDisabled && !ctx.isWaiting) && create_if_block_3(ctx);

	var if_block5 = (ctx.showIndicator || (ctx.showChevron && !ctx.selectedValue || (!ctx.isSearchable && !ctx.isDisabled && !ctx.isWaiting && ((ctx.showSelectedItem && !ctx.isClearable) || !ctx.showSelectedItem)))) && create_if_block_1(ctx);

	var if_block6 = (ctx.isWaiting) && create_if_block(ctx);

	return {
		c: function create() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			if (if_block0) if_block0.c();
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			if (if_block1) if_block1.c();
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			if_block2.c();
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			if (if_block3) if_block3.c();
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			if (if_block4) if_block4.c();
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			if (if_block5) if_block5.c();
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			if (if_block6) if_block6.c();
			this.h()
		},

		l: function claim(nodes) {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "DIV", { class: true, style: true }, false);
			var div_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div);

			if (if_block0) if_block0.l(div_nodes);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div_nodes, "\n\n  ");
			if (if_block1) if_block1.l(div_nodes);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div_nodes, "\n\n  ");
			if_block2.l(div_nodes);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div_nodes, "\n\n  ");
			if (if_block3) if_block3.l(div_nodes);
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div_nodes, "\n\n  ");
			if (if_block4) if_block4.l(div_nodes);
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div_nodes, "\n\n  ");
			if (if_block5) if_block5.l(div_nodes);
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div_nodes, "\n\n  ");
			if (if_block6) if_block6.l(div_nodes);
			div_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			this.h();
		},

		h: function hydrate() {
			div.className = div_class_value = "selectContainer " + ctx.containerClasses + " svelte-1kmtf2c";
			div.style.cssText = ctx.containerStyles;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["toggle_class"])(div, "hasError", ctx.hasError);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["toggle_class"])(div, "multiSelect", ctx.isMulti);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["toggle_class"])(div, "disabled", ctx.isDisabled);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["toggle_class"])(div, "focused", ctx.isFocused);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div, file, 787, 0, 19479);

			dispose = [
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(window, "click", ctx.handleWindowClick),
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(window, "keydown", ctx.handleKeyDown),
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(window, "resize", ctx.getPosition),
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(div, "click", ctx.handleClick)
			];
		},

		m: function mount(target_1, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target_1, div, anchor);
			if (if_block0) if_block0.m(div, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, t0);
			if (if_block1) if_block1.m(div, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, t1);
			if_block2.m(div, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, t2);
			if (if_block3) if_block3.m(div, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, t3);
			if (if_block4) if_block4.m(div, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, t4);
			if (if_block5) if_block5.m(div, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, t5);
			if (if_block6) if_block6.m(div, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_binding_callback"])(() => ctx.div_binding(div, null));
			current = true;
		},

		p: function update(changed, ctx) {
			if (ctx.Icon) {
				if (if_block0) {
					if_block0.p(changed, ctx);
					if_block0.i(1);
				} else {
					if_block0 = create_if_block_7(ctx);
					if_block0.c();
					if_block0.i(1);
					if_block0.m(div, t0);
				}
			} else if (if_block0) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["on_outro"])(() => {
					if_block0.d(1);
					if_block0 = null;
				});

				if_block0.o(1);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();
			}

			if (ctx.isMulti && ctx.selectedValue && ctx.selectedValue.length > 0) {
				if (if_block1) {
					if_block1.p(changed, ctx);
					if_block1.i(1);
				} else {
					if_block1 = create_if_block_6(ctx);
					if_block1.c();
					if_block1.i(1);
					if_block1.m(div, t1);
				}
			} else if (if_block1) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["on_outro"])(() => {
					if_block1.d(1);
					if_block1 = null;
				});

				if_block1.o(1);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();
			}

			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block2) {
				if_block2.p(changed, ctx);
			} else {
				if_block2.d(1);
				if_block2 = current_block_type(ctx);
				if (if_block2) {
					if_block2.c();
					if_block2.m(div, t2);
				}
			}

			if (!ctx.isMulti && ctx.showSelectedItem) {
				if (if_block3) {
					if_block3.p(changed, ctx);
					if_block3.i(1);
				} else {
					if_block3 = create_if_block_4(ctx);
					if_block3.c();
					if_block3.i(1);
					if_block3.m(div, t3);
				}
			} else if (if_block3) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["on_outro"])(() => {
					if_block3.d(1);
					if_block3 = null;
				});

				if_block3.o(1);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();
			}

			if (ctx.showSelectedItem && ctx.isClearable && !ctx.isDisabled && !ctx.isWaiting) {
				if (if_block4) {
					if_block4.p(changed, ctx);
				} else {
					if_block4 = create_if_block_3(ctx);
					if_block4.c();
					if_block4.m(div, t4);
				}
			} else if (if_block4) {
				if_block4.d(1);
				if_block4 = null;
			}

			if (ctx.showIndicator || (ctx.showChevron && !ctx.selectedValue || (!ctx.isSearchable && !ctx.isDisabled && !ctx.isWaiting && ((ctx.showSelectedItem && !ctx.isClearable) || !ctx.showSelectedItem)))) {
				if (if_block5) {
					if_block5.p(changed, ctx);
				} else {
					if_block5 = create_if_block_1(ctx);
					if_block5.c();
					if_block5.m(div, t5);
				}
			} else if (if_block5) {
				if_block5.d(1);
				if_block5 = null;
			}

			if (ctx.isWaiting) {
				if (!if_block6) {
					if_block6 = create_if_block(ctx);
					if_block6.c();
					if_block6.m(div, null);
				}
			} else if (if_block6) {
				if_block6.d(1);
				if_block6 = null;
			}

			if (changed.items) {
				ctx.div_binding(null, div);
				;
				ctx.div_binding(div, null);
			}

			if ((!current || changed.containerClasses) && div_class_value !== (div_class_value = "selectContainer " + ctx.containerClasses + " svelte-1kmtf2c")) {
				div.className = div_class_value;
			}

			if (!current || changed.containerStyles) {
				div.style.cssText = ctx.containerStyles;
			}

			if ((changed.containerClasses || changed.hasError)) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["toggle_class"])(div, "hasError", ctx.hasError);
			}

			if ((changed.containerClasses || changed.isMulti)) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["toggle_class"])(div, "multiSelect", ctx.isMulti);
			}

			if ((changed.containerClasses || changed.isDisabled)) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["toggle_class"])(div, "disabled", ctx.isDisabled);
			}

			if ((changed.containerClasses || changed.isFocused)) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["toggle_class"])(div, "focused", ctx.isFocused);
			}
		},

		i: function intro(local) {
			if (current) return;
			if (if_block0) if_block0.i();
			if (if_block1) if_block1.i();
			if (if_block3) if_block3.i();
			current = true;
		},

		o: function outro(local) {
			if (if_block0) if_block0.o();
			if (if_block1) if_block1.o();
			if (if_block3) if_block3.o();
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
			}

			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
			if_block2.d();
			if (if_block3) if_block3.d();
			if (if_block4) if_block4.d();
			if (if_block5) if_block5.d();
			if (if_block6) if_block6.d();
			ctx.div_binding(null, div);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["run_all"])(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	

  const dispatch = Object(svelte__WEBPACK_IMPORTED_MODULE_1__["createEventDispatcher"])();
  let { container = undefined, input = undefined, Item = _Item_svelte__WEBPACK_IMPORTED_MODULE_3__["default"], Selection = _Selection_svelte__WEBPACK_IMPORTED_MODULE_4__["default"], MultiSelection = _MultiSelection_svelte__WEBPACK_IMPORTED_MODULE_5__["default"], isMulti = false, isDisabled = false, isCreatable = false, isFocused = false, selectedValue = undefined, filterText = "", placeholder = "Select...", items = [], itemFilter = (label, filterText, option) =>
    label.toLowerCase().includes(filterText.toLowerCase()) } = $$props;
  let { groupBy = undefined, groupFilter = groups => groups } = $$props;
  let { isGroupHeaderSelectable = false, getGroupHeaderLabel = option => {
    return option.label;
  } } = $$props;
  let { getOptionLabel = (option, filterText) => {
    return option.isCreator ? `Create \"${filterText}\"` : option.label;
  } } = $$props;
  let { optionIdentifier = "value", loadOptions = undefined, hasError = false, containerStyles = "", getSelectionLabel = option => {
    if (option) return option.label;
  } } = $$props;

  let { createGroupHeaderItem = groupValue => {
    return {
      value: groupValue,
      label: groupValue
    };
  } } = $$props;

  let { createItem = filterText => {
    return {
      value: filterText,
      label: filterText
    };
  } } = $$props;

  let { isSearchable = true, inputStyles = "", isClearable = true, isWaiting = false, listPlacement = "auto", listOpen = false, list = undefined, isVirtualList = false, loadOptionsInterval = 300, noOptionsMessage = "No options", hideEmptyState = false, filteredItems = [], inputAttributes = {}, listAutoWidth = true, itemHeight = 40, Icon = undefined, iconProps = {}, showChevron = false, showIndicator = false, containerClasses = "", indicatorSvg = undefined } = $$props;

  let target;
  let activeSelectedValue;
  let _items = [];
  let originalItemsClone;
  let prev_selectedValue;
  let prev_listOpen;
  let prev_filterText;
  let prev_isFocused;
  let prev_filteredItems;

  async function resetFilter() {
    await Object(svelte__WEBPACK_IMPORTED_MODULE_1__["tick"])();
    $$invalidate('filterText', filterText = "");
  }

  let getItemsHasInvoked = false;
  const getItems = Object(_utils_debounce__WEBPACK_IMPORTED_MODULE_7__["default"])(async () => {
    $$invalidate('getItemsHasInvoked', getItemsHasInvoked = true);
    $$invalidate('isWaiting', isWaiting = true);

    let res = await loadOptions(filterText).catch(err => {
      console.warn('svelte-select loadOptions error :>> ', err);
      dispatch("error", { type: 'loadOptions', details: err });
    });

    if (res) { 
      $$invalidate('items', items = [...res]);
    } else {
      $$invalidate('items', items = []);
    }

    $$invalidate('isWaiting', isWaiting = false);
    $$invalidate('isFocused', isFocused = true);
    $$invalidate('listOpen', listOpen = true);
  }, loadOptionsInterval);

  let _inputAttributes = {};

  Object(svelte__WEBPACK_IMPORTED_MODULE_1__["beforeUpdate"])(() => {
    if (isMulti && selectedValue && selectedValue.length > 1) {
      checkSelectedValueForDuplicates();
    }

    if (!isMulti && selectedValue && prev_selectedValue !== selectedValue) {
      if (
        !prev_selectedValue ||
        JSON.stringify(selectedValue[optionIdentifier]) !==
          JSON.stringify(prev_selectedValue[optionIdentifier])
      ) {
        dispatch("select", selectedValue);
      }
    }

    if (
      isMulti &&
      JSON.stringify(selectedValue) !== JSON.stringify(prev_selectedValue)
    ) {
      if (checkSelectedValueForDuplicates()) {
        dispatch("select", selectedValue);
      }
    }

    if (container && listOpen !== prev_listOpen) {
      if (listOpen) {
        loadList();
      } else {
        removeList();
      }
    }

    if (filterText !== prev_filterText) {
      if (filterText.length > 0) {
        $$invalidate('isFocused', isFocused = true);
        $$invalidate('listOpen', listOpen = true);

        if (loadOptions) {
          getItems();
        } else {
          loadList();
          $$invalidate('listOpen', listOpen = true);

          if (isMulti) {
            $$invalidate('activeSelectedValue', activeSelectedValue = undefined);
          }
        }
      } else {
        setList([]);
      }

      if (list) {
        list.$set({
          filterText
        });
      }
    }

    if (isFocused !== prev_isFocused) {
      if (isFocused || listOpen) {
        handleFocus();
      } else {
        resetFilter();
        if (input) input.blur();
      }
    }

    if (prev_filteredItems !== filteredItems) {
      let _filteredItems = [...filteredItems];

      if (isCreatable && filterText) {
        const itemToCreate = createItem(filterText);
        itemToCreate.isCreator = true;

        const existingItemWithFilterValue = _filteredItems.find(item => {
          return item[optionIdentifier] === itemToCreate[optionIdentifier];
        });

        let existingSelectionWithFilterValue;

        if (selectedValue) {
          if (isMulti) {
            existingSelectionWithFilterValue = selectedValue.find(selection => {
              return (
                selection[optionIdentifier] === itemToCreate[optionIdentifier]
              );
            });
          } else if (
            selectedValue[optionIdentifier] === itemToCreate[optionIdentifier]
          ) {
            existingSelectionWithFilterValue = selectedValue;
          }
        }

        if (!existingItemWithFilterValue && !existingSelectionWithFilterValue) {
          _filteredItems = [..._filteredItems, itemToCreate];
        }
      }

      setList(_filteredItems);
    }

    $$invalidate('prev_selectedValue', prev_selectedValue = selectedValue);
    $$invalidate('prev_listOpen', prev_listOpen = listOpen);
    $$invalidate('prev_filterText', prev_filterText = filterText);
    $$invalidate('prev_isFocused', prev_isFocused = isFocused);
    $$invalidate('prev_filteredItems', prev_filteredItems = filteredItems);
  });

  function checkSelectedValueForDuplicates() {
    let noDuplicates = true;
    if (selectedValue) {
      const ids = [];
      const uniqueValues = [];

      selectedValue.forEach(val => {
        if (!ids.includes(val[optionIdentifier])) {
          ids.push(val[optionIdentifier]);
          uniqueValues.push(val);
        } else {
          noDuplicates = false;
        }
      });

      if (!noDuplicates)
        $$invalidate('selectedValue', selectedValue = uniqueValues);
    }
    return noDuplicates;
  }

  async function setList(items) {
    await Object(svelte__WEBPACK_IMPORTED_MODULE_1__["tick"])();
    if (list) return list.$set({ items });
    if (loadOptions && getItemsHasInvoked && items.length > 0) loadList();
  }

  function handleMultiItemClear(event) {
    const { detail } = event;
    const itemToRemove =
      selectedValue[detail ? detail.i : selectedValue.length - 1];

    if (selectedValue.length === 1) {
      $$invalidate('selectedValue', selectedValue = undefined);
    } else {
      $$invalidate('selectedValue', selectedValue = selectedValue.filter(item => {
        return item !== itemToRemove;
      }));
    }

    dispatch("clear", itemToRemove);

    getPosition();
  }

  async function getPosition() {
    await Object(svelte__WEBPACK_IMPORTED_MODULE_1__["tick"])();
    if (!target || !container) return;
    const { top, height, width } = container.getBoundingClientRect();

    target.style["min-width"] = `${width}px`; $$invalidate('target', target);
    target.style.width = `${listAutoWidth ? "auto" : "100%"}`; $$invalidate('target', target);
    target.style.left = "0"; $$invalidate('target', target);

    if (listPlacement === "top") {
      target.style.bottom = `${height + 5}px`; $$invalidate('target', target);
    } else {
      target.style.top = `${height + 5}px`; $$invalidate('target', target);
    }

    $$invalidate('target', target);

    if (listPlacement === "auto" && Object(_utils_isOutOfViewport__WEBPACK_IMPORTED_MODULE_6__["default"])(target).bottom) {
      target.style.top = ``; $$invalidate('target', target);
      target.style.bottom = `${height + 5}px`; $$invalidate('target', target);
    }

    target.style.visibility = ""; $$invalidate('target', target);
  }

  function handleKeyDown(e) {
    if (!isFocused) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        $$invalidate('listOpen', listOpen = true);
        $$invalidate('activeSelectedValue', activeSelectedValue = undefined);
        break;
      case "ArrowUp":
        e.preventDefault();
        $$invalidate('listOpen', listOpen = true);
        $$invalidate('activeSelectedValue', activeSelectedValue = undefined);
        break;
      case "Tab":
        if (!listOpen) $$invalidate('isFocused', isFocused = false);
        break;
      case "Backspace":
        if (!isMulti || filterText.length > 0) return;
        if (isMulti && selectedValue && selectedValue.length > 0) {
          handleMultiItemClear(
            activeSelectedValue !== undefined
              ? activeSelectedValue
              : selectedValue.length - 1
          );
          if (activeSelectedValue === 0 || activeSelectedValue === undefined)
            break;
          $$invalidate('activeSelectedValue', activeSelectedValue =
            selectedValue.length > activeSelectedValue
              ? activeSelectedValue - 1
              : undefined);
        }
        break;
      case "ArrowLeft":
        if (list) list.$set({ hoverItemIndex: -1 });
        if (!isMulti || filterText.length > 0) return;

        if (activeSelectedValue === undefined) {
          $$invalidate('activeSelectedValue', activeSelectedValue = selectedValue.length - 1);
        } else if (
          selectedValue.length > activeSelectedValue &&
          activeSelectedValue !== 0
        ) {
          $$invalidate('activeSelectedValue', activeSelectedValue -= 1);
        }
        break;
      case "ArrowRight":
        if (list) list.$set({ hoverItemIndex: -1 });
        if (
          !isMulti ||
          filterText.length > 0 ||
          activeSelectedValue === undefined
        )
          return;
        if (activeSelectedValue === selectedValue.length - 1) {
          $$invalidate('activeSelectedValue', activeSelectedValue = undefined);
        } else if (activeSelectedValue < selectedValue.length - 1) {
          $$invalidate('activeSelectedValue', activeSelectedValue += 1);
        }
        break;
    }
  }

  function handleFocus() {
    $$invalidate('isFocused', isFocused = true);
    if (input) input.focus();
  }

  function removeList() {
    resetFilter();
    $$invalidate('activeSelectedValue', activeSelectedValue = undefined);

    if (!list) return;
    list.$destroy();
    $$invalidate('list', list = undefined);

    if (!target) return;
    if (target.parentNode) target.parentNode.removeChild(target);
    $$invalidate('target', target = undefined);

    $$invalidate('list', list);
    $$invalidate('target', target);
  }

  function handleWindowClick(event) {
    if (!container) return;
    const eventTarget =
      event.path && event.path.length > 0 ? event.path[0] : event.target;
    if (container.contains(eventTarget)) return;
    $$invalidate('isFocused', isFocused = false);
    $$invalidate('listOpen', listOpen = false);
    $$invalidate('activeSelectedValue', activeSelectedValue = undefined);
    if (input) input.blur();
  }

  function handleClick() {
    if (isDisabled) return;
    $$invalidate('isFocused', isFocused = true);
    $$invalidate('listOpen', listOpen = !listOpen);
  }

  function handleClear() {
    $$invalidate('selectedValue', selectedValue = undefined);
    $$invalidate('listOpen', listOpen = false);
    dispatch("clear", selectedValue);
    handleFocus();
  }

  async function loadList() {
    await Object(svelte__WEBPACK_IMPORTED_MODULE_1__["tick"])();
    if (target && list) return;

    const data = {
      Item,
      filterText,
      optionIdentifier,
      noOptionsMessage,
      hideEmptyState,
      isVirtualList,
      selectedValue,
      isMulti,
      getGroupHeaderLabel,
      items: filteredItems,
      itemHeight
    };

    if (getOptionLabel) {
      data.getOptionLabel = getOptionLabel;
    }

    $$invalidate('target', target = document.createElement("div"));

    Object.assign(target.style, {
      position: "absolute",
      "z-index": 2,
      visibility: "hidden"
    });

    $$invalidate('list', list);
    $$invalidate('target', target);
    if (container) container.appendChild(target);

    $$invalidate('list', list = new _List_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({
      target,
      props: data
    }));

    list.$on("itemSelected", event => {
      const { detail } = event;

      if (detail) {
        const item = Object.assign({}, detail);

        if (!item.isGroupHeader || item.isSelectable) {

          if (isMulti) {
            $$invalidate('selectedValue', selectedValue = selectedValue ? selectedValue.concat([item]) : [item]);
          } else {
            $$invalidate('selectedValue', selectedValue = item);
          }

          resetFilter();
          $$invalidate('selectedValue', selectedValue), $$invalidate('optionIdentifier', optionIdentifier), $$invalidate('isMulti', isMulti);

          setTimeout(() => {
            $$invalidate('listOpen', listOpen = false);
            $$invalidate('activeSelectedValue', activeSelectedValue = undefined);
          });
        }
      }
    });

    list.$on("itemCreated", event => {
      const { detail } = event;
      if (isMulti) {
        $$invalidate('selectedValue', selectedValue = selectedValue || []);
        $$invalidate('selectedValue', selectedValue = [...selectedValue, createItem(detail)]);
      } else {
        $$invalidate('selectedValue', selectedValue = createItem(detail));
      }

      $$invalidate('filterText', filterText = "");
      $$invalidate('listOpen', listOpen = false);
      $$invalidate('activeSelectedValue', activeSelectedValue = undefined);
      resetFilter();
    });

    list.$on("closeList", () => {
      $$invalidate('listOpen', listOpen = false);
    });

    ($$invalidate('list', list)), ($$invalidate('target', target));
    getPosition();
  }

  Object(svelte__WEBPACK_IMPORTED_MODULE_1__["onMount"])(() => {
    if (isFocused) input.focus();
    if (listOpen) loadList();

    if (items && items.length > 0) {
      $$invalidate('originalItemsClone', originalItemsClone = JSON.stringify(items));
    }
  });

  Object(svelte__WEBPACK_IMPORTED_MODULE_1__["onDestroy"])(() => {
    removeList();
  });

	function input_1_input_handler() {
		filterText = this.value;
		$$invalidate('filterText', filterText);
	}

	function input_1_binding($$node, check) {
		input = $$node;
		$$invalidate('input', input);
	}

	function input_1_input_handler_1() {
		filterText = this.value;
		$$invalidate('filterText', filterText);
	}

	function input_1_binding_1($$node, check) {
		input = $$node;
		$$invalidate('input', input);
	}

	function div_binding($$node, check) {
		container = $$node;
		$$invalidate('container', container);
	}

	$$self.$set = $$props => {
		if ('container' in $$props) $$invalidate('container', container = $$props.container);
		if ('input' in $$props) $$invalidate('input', input = $$props.input);
		if ('Item' in $$props) $$invalidate('Item', Item = $$props.Item);
		if ('Selection' in $$props) $$invalidate('Selection', Selection = $$props.Selection);
		if ('MultiSelection' in $$props) $$invalidate('MultiSelection', MultiSelection = $$props.MultiSelection);
		if ('isMulti' in $$props) $$invalidate('isMulti', isMulti = $$props.isMulti);
		if ('isDisabled' in $$props) $$invalidate('isDisabled', isDisabled = $$props.isDisabled);
		if ('isCreatable' in $$props) $$invalidate('isCreatable', isCreatable = $$props.isCreatable);
		if ('isFocused' in $$props) $$invalidate('isFocused', isFocused = $$props.isFocused);
		if ('selectedValue' in $$props) $$invalidate('selectedValue', selectedValue = $$props.selectedValue);
		if ('filterText' in $$props) $$invalidate('filterText', filterText = $$props.filterText);
		if ('placeholder' in $$props) $$invalidate('placeholder', placeholder = $$props.placeholder);
		if ('items' in $$props) $$invalidate('items', items = $$props.items);
		if ('itemFilter' in $$props) $$invalidate('itemFilter', itemFilter = $$props.itemFilter);
		if ('groupBy' in $$props) $$invalidate('groupBy', groupBy = $$props.groupBy);
		if ('groupFilter' in $$props) $$invalidate('groupFilter', groupFilter = $$props.groupFilter);
		if ('isGroupHeaderSelectable' in $$props) $$invalidate('isGroupHeaderSelectable', isGroupHeaderSelectable = $$props.isGroupHeaderSelectable);
		if ('getGroupHeaderLabel' in $$props) $$invalidate('getGroupHeaderLabel', getGroupHeaderLabel = $$props.getGroupHeaderLabel);
		if ('getOptionLabel' in $$props) $$invalidate('getOptionLabel', getOptionLabel = $$props.getOptionLabel);
		if ('optionIdentifier' in $$props) $$invalidate('optionIdentifier', optionIdentifier = $$props.optionIdentifier);
		if ('loadOptions' in $$props) $$invalidate('loadOptions', loadOptions = $$props.loadOptions);
		if ('hasError' in $$props) $$invalidate('hasError', hasError = $$props.hasError);
		if ('containerStyles' in $$props) $$invalidate('containerStyles', containerStyles = $$props.containerStyles);
		if ('getSelectionLabel' in $$props) $$invalidate('getSelectionLabel', getSelectionLabel = $$props.getSelectionLabel);
		if ('createGroupHeaderItem' in $$props) $$invalidate('createGroupHeaderItem', createGroupHeaderItem = $$props.createGroupHeaderItem);
		if ('createItem' in $$props) $$invalidate('createItem', createItem = $$props.createItem);
		if ('isSearchable' in $$props) $$invalidate('isSearchable', isSearchable = $$props.isSearchable);
		if ('inputStyles' in $$props) $$invalidate('inputStyles', inputStyles = $$props.inputStyles);
		if ('isClearable' in $$props) $$invalidate('isClearable', isClearable = $$props.isClearable);
		if ('isWaiting' in $$props) $$invalidate('isWaiting', isWaiting = $$props.isWaiting);
		if ('listPlacement' in $$props) $$invalidate('listPlacement', listPlacement = $$props.listPlacement);
		if ('listOpen' in $$props) $$invalidate('listOpen', listOpen = $$props.listOpen);
		if ('list' in $$props) $$invalidate('list', list = $$props.list);
		if ('isVirtualList' in $$props) $$invalidate('isVirtualList', isVirtualList = $$props.isVirtualList);
		if ('loadOptionsInterval' in $$props) $$invalidate('loadOptionsInterval', loadOptionsInterval = $$props.loadOptionsInterval);
		if ('noOptionsMessage' in $$props) $$invalidate('noOptionsMessage', noOptionsMessage = $$props.noOptionsMessage);
		if ('hideEmptyState' in $$props) $$invalidate('hideEmptyState', hideEmptyState = $$props.hideEmptyState);
		if ('filteredItems' in $$props) $$invalidate('filteredItems', filteredItems = $$props.filteredItems);
		if ('inputAttributes' in $$props) $$invalidate('inputAttributes', inputAttributes = $$props.inputAttributes);
		if ('listAutoWidth' in $$props) $$invalidate('listAutoWidth', listAutoWidth = $$props.listAutoWidth);
		if ('itemHeight' in $$props) $$invalidate('itemHeight', itemHeight = $$props.itemHeight);
		if ('Icon' in $$props) $$invalidate('Icon', Icon = $$props.Icon);
		if ('iconProps' in $$props) $$invalidate('iconProps', iconProps = $$props.iconProps);
		if ('showChevron' in $$props) $$invalidate('showChevron', showChevron = $$props.showChevron);
		if ('showIndicator' in $$props) $$invalidate('showIndicator', showIndicator = $$props.showIndicator);
		if ('containerClasses' in $$props) $$invalidate('containerClasses', containerClasses = $$props.containerClasses);
		if ('indicatorSvg' in $$props) $$invalidate('indicatorSvg', indicatorSvg = $$props.indicatorSvg);
	};

	let disabled, showSelectedItem, placeholderText;

	$$self.$$.update = ($$dirty = { isDisabled: 1, selectedValue: 1, optionIdentifier: 1, isMulti: 1, noOptionsMessage: 1, list: 1, filterText: 1, placeholder: 1, inputAttributes: 1, isSearchable: 1, items: 1, loadOptions: 1, originalItemsClone: 1, itemFilter: 1, getOptionLabel: 1, groupBy: 1, createGroupHeaderItem: 1, isGroupHeaderSelectable: 1, groupFilter: 1 }) => {
		if ($$dirty.isDisabled) { $$invalidate('disabled', disabled = isDisabled); }
		if ($$dirty.selectedValue || $$dirty.optionIdentifier || $$dirty.isMulti) { {
        if (typeof selectedValue === "string") {
          $$invalidate('selectedValue', selectedValue = {
            [optionIdentifier]: selectedValue,
            label: selectedValue
          });
        } else if (isMulti && Array.isArray(selectedValue) && selectedValue.length > 0) {
          $$invalidate('selectedValue', selectedValue = selectedValue.map(item => typeof item === "string" ? ({ value: item, label: item }) : item));
        }
      } }
		if ($$dirty.noOptionsMessage || $$dirty.list) { {
        if (noOptionsMessage && list) list.$set({ noOptionsMessage });
      } }
		if ($$dirty.selectedValue || $$dirty.filterText) { $$invalidate('showSelectedItem', showSelectedItem = selectedValue && filterText.length === 0); }
		if ($$dirty.selectedValue || $$dirty.placeholder) { $$invalidate('placeholderText', placeholderText = selectedValue ? "" : placeholder); }
		if ($$dirty.inputAttributes || $$dirty.isSearchable) { {
        $$invalidate('_inputAttributes', _inputAttributes = Object.assign(inputAttributes, {
          autocomplete: "off",
          autocorrect: "off",
          spellcheck: false
        }));
    
        if (!isSearchable) {
          _inputAttributes.readonly = true; $$invalidate('_inputAttributes', _inputAttributes), $$invalidate('inputAttributes', inputAttributes), $$invalidate('isSearchable', isSearchable);
        }
      } }
		if ($$dirty.items || $$dirty.loadOptions || $$dirty.filterText || $$dirty.originalItemsClone || $$dirty.isMulti || $$dirty.selectedValue || $$dirty.optionIdentifier || $$dirty.itemFilter || $$dirty.getOptionLabel || $$dirty.groupBy || $$dirty.createGroupHeaderItem || $$dirty.isGroupHeaderSelectable || $$dirty.groupFilter) { {
        let _filteredItems;
        let _items = items;
    
        if (items && items.length > 0 && typeof items[0] !== "object") {
          _items = items.map((item, index) => {
            return {
              index,
              value: item,
              label: item
            };
          });
        }
    
        if (loadOptions && filterText.length === 0 && originalItemsClone) {
          _filteredItems = JSON.parse(originalItemsClone);
          _items = JSON.parse(originalItemsClone);
        } else {
          _filteredItems = loadOptions
            ? filterText.length === 0
              ? []
              : _items
            : _items.filter(item => {
                let keepItem = true;
    
                if (isMulti && selectedValue) {
                  keepItem = !selectedValue.some(value => {
                    return value[optionIdentifier] === item[optionIdentifier];
                  });
                }
    
                if (!keepItem) return false;
                if (filterText.length < 1) return true;
                return itemFilter(
                  getOptionLabel(item, filterText),
                  filterText,
                  item
                );
              });
        }
    
        if (groupBy) {
          const groupValues = [];
          const groups = {};
    
          _filteredItems.forEach(item => {
            const groupValue = groupBy(item);
    
            if (!groupValues.includes(groupValue)) {
              groupValues.push(groupValue);
              groups[groupValue] = [];
    
              if (groupValue) {
                groups[groupValue].push(
                  Object.assign(createGroupHeaderItem(groupValue, item), {
                    id: groupValue,
                    isGroupHeader: true,
                    isSelectable: isGroupHeaderSelectable
                  })
                );
              }
            }
    
            groups[groupValue].push(
              Object.assign({ isGroupItem: !!groupValue }, item)
            );
          });
    
          const sortedGroupedItems = [];
    
          groupFilter(groupValues).forEach(groupValue => {
            sortedGroupedItems.push(...groups[groupValue]);
          });
    
          $$invalidate('filteredItems', filteredItems = sortedGroupedItems);
        } else {
          $$invalidate('filteredItems', filteredItems = _filteredItems);
        }
      } }
	};

	return {
		container,
		input,
		Item,
		Selection,
		MultiSelection,
		isMulti,
		isDisabled,
		isCreatable,
		isFocused,
		selectedValue,
		filterText,
		placeholder,
		items,
		itemFilter,
		groupBy,
		groupFilter,
		isGroupHeaderSelectable,
		getGroupHeaderLabel,
		getOptionLabel,
		optionIdentifier,
		loadOptions,
		hasError,
		containerStyles,
		getSelectionLabel,
		createGroupHeaderItem,
		createItem,
		isSearchable,
		inputStyles,
		isClearable,
		isWaiting,
		listPlacement,
		listOpen,
		list,
		isVirtualList,
		loadOptionsInterval,
		noOptionsMessage,
		hideEmptyState,
		filteredItems,
		inputAttributes,
		listAutoWidth,
		itemHeight,
		Icon,
		iconProps,
		showChevron,
		showIndicator,
		containerClasses,
		indicatorSvg,
		activeSelectedValue,
		_inputAttributes,
		handleMultiItemClear,
		getPosition,
		handleKeyDown,
		handleFocus,
		handleWindowClick,
		handleClick,
		handleClear,
		showSelectedItem,
		placeholderText,
		input_1_input_handler,
		input_1_binding,
		input_1_input_handler_1,
		input_1_binding_1,
		div_binding
	};
}

class Select extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-1kmtf2c-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], ["container", "input", "Item", "Selection", "MultiSelection", "isMulti", "isDisabled", "isCreatable", "isFocused", "selectedValue", "filterText", "placeholder", "items", "itemFilter", "groupBy", "groupFilter", "isGroupHeaderSelectable", "getGroupHeaderLabel", "getOptionLabel", "optionIdentifier", "loadOptions", "hasError", "containerStyles", "getSelectionLabel", "createGroupHeaderItem", "createItem", "isSearchable", "inputStyles", "isClearable", "isWaiting", "listPlacement", "listOpen", "list", "isVirtualList", "loadOptionsInterval", "noOptionsMessage", "hideEmptyState", "filteredItems", "inputAttributes", "listAutoWidth", "itemHeight", "Icon", "iconProps", "showChevron", "showIndicator", "containerClasses", "indicatorSvg", "handleClear"]);

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.handleClear === undefined && !('handleClear' in props)) {
			console.warn("<Select> was created without expected prop 'handleClear'");
		}
	}

	get container() {
		throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set container(value) {
		throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get input() {
		throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set input(value) {
		throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get Item() {
		throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set Item(value) {
		throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get Selection() {
		throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set Selection(value) {
		throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get MultiSelection() {
		throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set MultiSelection(value) {
		throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get isMulti() {
		throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set isMulti(value) {
		throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get isDisabled() {
		throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set isDisabled(value) {
		throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get isCreatable() {
		throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set isCreatable(value) {
		throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get isFocused() {
		throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set isFocused(value) {
		throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get selectedValue() {
		throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set selectedValue(value) {
		throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get filterText() {
		throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set filterText(value) {
		throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get placeholder() {
		throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set placeholder(value) {
		throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get items() {
		throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set items(value) {
		throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get itemFilter() {
		throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set itemFilter(value) {
		throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get groupBy() {
		throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set groupBy(value) {
		throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get groupFilter() {
		throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set groupFilter(value) {
		throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get isGroupHeaderSelectable() {
		throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set isGroupHeaderSelectable(value) {
		throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getGroupHeaderLabel() {
		throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set getGroupHeaderLabel(value) {
		throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getOptionLabel() {
		throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set getOptionLabel(value) {
		throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get optionIdentifier() {
		throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set optionIdentifier(value) {
		throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get loadOptions() {
		throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set loadOptions(value) {
		throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get hasError() {
		throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set hasError(value) {
		throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get containerStyles() {
		throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set containerStyles(value) {
		throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getSelectionLabel() {
		throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set getSelectionLabel(value) {
		throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get createGroupHeaderItem() {
		throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set createGroupHeaderItem(value) {
		throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get createItem() {
		throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set createItem(value) {
		throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get isSearchable() {
		throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set isSearchable(value) {
		throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get inputStyles() {
		throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set inputStyles(value) {
		throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get isClearable() {
		throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set isClearable(value) {
		throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get isWaiting() {
		throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set isWaiting(value) {
		throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get listPlacement() {
		throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set listPlacement(value) {
		throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get listOpen() {
		throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set listOpen(value) {
		throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get list() {
		throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set list(value) {
		throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get isVirtualList() {
		throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set isVirtualList(value) {
		throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get loadOptionsInterval() {
		throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set loadOptionsInterval(value) {
		throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get noOptionsMessage() {
		throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set noOptionsMessage(value) {
		throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get hideEmptyState() {
		throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set hideEmptyState(value) {
		throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get filteredItems() {
		throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set filteredItems(value) {
		throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get inputAttributes() {
		throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set inputAttributes(value) {
		throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get listAutoWidth() {
		throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set listAutoWidth(value) {
		throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get itemHeight() {
		throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set itemHeight(value) {
		throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get Icon() {
		throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set Icon(value) {
		throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get iconProps() {
		throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set iconProps(value) {
		throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get showChevron() {
		throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set showChevron(value) {
		throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get showIndicator() {
		throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set showIndicator(value) {
		throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get containerClasses() {
		throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set containerClasses(value) {
		throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get indicatorSvg() {
		throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set indicatorSvg(value) {
		throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get handleClear() {
		return this.$$.ctx.handleClear;
	}

	set handleClear(value) {
		throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Select);

/***/ }),

/***/ "./node_modules/svelte-select/src/Selection.svelte":
/*!*********************************************************!*\
  !*** ./node_modules/svelte-select/src/Selection.svelte ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal.mjs");
/* node_modules\svelte-select\src\Selection.svelte generated by Svelte v3.4.1 */


const file = "node_modules\\svelte-select\\src\\Selection.svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = 'svelte-ch6bh7-style';
	style.textContent = ".selection.svelte-ch6bh7{text-overflow:ellipsis;overflow-x:hidden;white-space:nowrap}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VsZWN0aW9uLnN2ZWx0ZSIsInNvdXJjZXMiOlsiU2VsZWN0aW9uLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICBleHBvcnQgbGV0IGdldFNlbGVjdGlvbkxhYmVsID0gdW5kZWZpbmVkO1xuICBleHBvcnQgbGV0IGl0ZW0gPSB1bmRlZmluZWQ7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAuc2VsZWN0aW9uIHtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxuPC9zdHlsZT5cblxuPGRpdiBjbGFzcz1cInNlbGVjdGlvblwiPlxuICB7QGh0bWwgZ2V0U2VsZWN0aW9uTGFiZWwoaXRlbSl9IFxuPC9kaXY+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUUsVUFBVSxjQUFDLENBQUMsQUFDVixhQUFhLENBQUUsUUFBUSxDQUN2QixVQUFVLENBQUUsTUFBTSxDQUNsQixXQUFXLENBQUUsTUFBTSxBQUNyQixDQUFDIn0= */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(document.head, style);
}

function create_fragment(ctx) {
	var div, raw_value = ctx.getSelectionLabel(ctx.item);

	return {
		c: function create() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			this.h()
		},

		l: function claim(nodes) {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "DIV", { class: true }, false);
			var div_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div);

			div_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			this.h();
		},

		h: function hydrate() {
			div.className = "selection svelte-ch6bh7";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div, file, 13, 0, 210);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);
			div.innerHTML = raw_value;
		},

		p: function update(changed, ctx) {
			if ((changed.getSelectionLabel || changed.item) && raw_value !== (raw_value = ctx.getSelectionLabel(ctx.item))) {
				div.innerHTML = raw_value;
			}
		},

		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
			}
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { getSelectionLabel = undefined, item = undefined } = $$props;

	$$self.$set = $$props => {
		if ('getSelectionLabel' in $$props) $$invalidate('getSelectionLabel', getSelectionLabel = $$props.getSelectionLabel);
		if ('item' in $$props) $$invalidate('item', item = $$props.item);
	};

	return { getSelectionLabel, item };
}

class Selection extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-ch6bh7-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], ["getSelectionLabel", "item"]);
	}

	get getSelectionLabel() {
		throw new Error("<Selection>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set getSelectionLabel(value) {
		throw new Error("<Selection>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get item() {
		throw new Error("<Selection>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set item(value) {
		throw new Error("<Selection>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Selection);

/***/ }),

/***/ "./node_modules/svelte-select/src/VirtualList.svelte":
/*!***********************************************************!*\
  !*** ./node_modules/svelte-select/src/VirtualList.svelte ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* node_modules\svelte-select\src\VirtualList.svelte generated by Svelte v3.4.1 */



const file = "node_modules\\svelte-select\\src\\VirtualList.svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = 'svelte-p6ehlv-style';
	style.textContent = "svelte-virtual-list-viewport.svelte-p6ehlv{position:relative;overflow-y:auto;-webkit-overflow-scrolling:touch;display:block}svelte-virtual-list-contents.svelte-p6ehlv,svelte-virtual-list-row.svelte-p6ehlv{display:block}svelte-virtual-list-row.svelte-p6ehlv{overflow:hidden}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlydHVhbExpc3Quc3ZlbHRlIiwic291cmNlcyI6WyJWaXJ0dWFsTGlzdC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblx0aW1wb3J0IHsgb25Nb3VudCwgdGljayB9IGZyb20gJ3N2ZWx0ZSc7XG5cblx0Ly8gcHJvcHNcblx0ZXhwb3J0IGxldCBpdGVtcyA9IHVuZGVmaW5lZDtcblx0ZXhwb3J0IGxldCBoZWlnaHQgPSAnMTAwJSc7XG5cdGV4cG9ydCBsZXQgaXRlbUhlaWdodCA9IDQwO1xuXHRleHBvcnQgbGV0IGhvdmVySXRlbUluZGV4ID0gMDtcblxuXHQvLyByZWFkLW9ubHksIGJ1dCB2aXNpYmxlIHRvIGNvbnN1bWVycyB2aWEgYmluZDpzdGFydFxuXHRleHBvcnQgbGV0IHN0YXJ0ID0gMDtcblx0ZXhwb3J0IGxldCBlbmQgPSAwO1xuXG5cdC8vIGxvY2FsIHN0YXRlXG5cdGxldCBoZWlnaHRfbWFwID0gW107XG5cdGxldCByb3dzO1xuXHRsZXQgdmlld3BvcnQ7XG5cdGxldCBjb250ZW50cztcblx0bGV0IHZpZXdwb3J0X2hlaWdodCA9IDA7XG5cdGxldCB2aXNpYmxlO1xuXHRsZXQgbW91bnRlZDtcblxuXHRsZXQgdG9wID0gMDtcblx0bGV0IGJvdHRvbSA9IDA7XG5cdGxldCBhdmVyYWdlX2hlaWdodDtcblxuXHQkOiB2aXNpYmxlID0gaXRlbXMuc2xpY2Uoc3RhcnQsIGVuZCkubWFwKChkYXRhLCBpKSA9PiB7XG5cdFx0cmV0dXJuIHsgaW5kZXg6IGkgKyBzdGFydCwgZGF0YSB9O1xuXHR9KTtcblxuXHQvLyB3aGVuZXZlciBgaXRlbXNgIGNoYW5nZXMsIGludmFsaWRhdGUgdGhlIGN1cnJlbnQgaGVpZ2h0bWFwXG5cdCQ6IGlmIChtb3VudGVkKSByZWZyZXNoKGl0ZW1zLCB2aWV3cG9ydF9oZWlnaHQsIGl0ZW1IZWlnaHQpO1xuXG5cdGFzeW5jIGZ1bmN0aW9uIHJlZnJlc2goaXRlbXMsIHZpZXdwb3J0X2hlaWdodCwgaXRlbUhlaWdodCkge1xuXHRcdGNvbnN0IHsgc2Nyb2xsVG9wIH0gPSB2aWV3cG9ydDtcblxuXHRcdGF3YWl0IHRpY2soKTsgLy8gd2FpdCB1bnRpbCB0aGUgRE9NIGlzIHVwIHRvIGRhdGVcblxuXHRcdGxldCBjb250ZW50X2hlaWdodCA9IHRvcCAtIHNjcm9sbFRvcDtcblx0XHRsZXQgaSA9IHN0YXJ0O1xuXG5cdFx0d2hpbGUgKGNvbnRlbnRfaGVpZ2h0IDwgdmlld3BvcnRfaGVpZ2h0ICYmIGkgPCBpdGVtcy5sZW5ndGgpIHtcblx0XHRcdGxldCByb3cgPSByb3dzW2kgLSBzdGFydF07XG5cblx0XHRcdGlmICghcm93KSB7XG5cdFx0XHRcdGVuZCA9IGkgKyAxO1xuXHRcdFx0XHRhd2FpdCB0aWNrKCk7IC8vIHJlbmRlciB0aGUgbmV3bHkgdmlzaWJsZSByb3dcblx0XHRcdFx0cm93ID0gcm93c1tpIC0gc3RhcnRdO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCByb3dfaGVpZ2h0ID0gaGVpZ2h0X21hcFtpXSA9IGl0ZW1IZWlnaHQgfHwgcm93Lm9mZnNldEhlaWdodDtcblx0XHRcdGNvbnRlbnRfaGVpZ2h0ICs9IHJvd19oZWlnaHQ7XG5cdFx0XHRpICs9IDE7XG5cdFx0fVxuXG5cdFx0ZW5kID0gaTtcblxuXHRcdGNvbnN0IHJlbWFpbmluZyA9IGl0ZW1zLmxlbmd0aCAtIGVuZDtcblx0XHRhdmVyYWdlX2hlaWdodCA9ICh0b3AgKyBjb250ZW50X2hlaWdodCkgLyBlbmQ7XG5cblx0XHRib3R0b20gPSByZW1haW5pbmcgKiBhdmVyYWdlX2hlaWdodDtcblx0XHRoZWlnaHRfbWFwLmxlbmd0aCA9IGl0ZW1zLmxlbmd0aDtcblxuXHRcdHZpZXdwb3J0LnNjcm9sbFRvcCA9IDA7XG5cdH1cblxuXHRhc3luYyBmdW5jdGlvbiBoYW5kbGVfc2Nyb2xsKCkge1xuXHRcdGNvbnN0IHsgc2Nyb2xsVG9wIH0gPSB2aWV3cG9ydDtcblxuXHRcdGNvbnN0IG9sZF9zdGFydCA9IHN0YXJ0O1xuXG5cdFx0Zm9yIChsZXQgdiA9IDA7IHYgPCByb3dzLmxlbmd0aDsgdiArPSAxKSB7XG5cdFx0XHRoZWlnaHRfbWFwW3N0YXJ0ICsgdl0gPSBpdGVtSGVpZ2h0IHx8IHJvd3Nbdl0ub2Zmc2V0SGVpZ2h0O1xuXHRcdH1cblxuXHRcdGxldCBpID0gMDtcblx0XHRsZXQgeSA9IDA7XG5cblx0XHR3aGlsZSAoaSA8IGl0ZW1zLmxlbmd0aCkge1xuXHRcdFx0Y29uc3Qgcm93X2hlaWdodCA9IGhlaWdodF9tYXBbaV0gfHwgYXZlcmFnZV9oZWlnaHQ7XG5cdFx0XHRpZiAoeSArIHJvd19oZWlnaHQgPiBzY3JvbGxUb3ApIHtcblx0XHRcdFx0c3RhcnQgPSBpO1xuXHRcdFx0XHR0b3AgPSB5O1xuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHR5ICs9IHJvd19oZWlnaHQ7XG5cdFx0XHRpICs9IDE7XG5cdFx0fVxuXG5cdFx0d2hpbGUgKGkgPCBpdGVtcy5sZW5ndGgpIHtcblx0XHRcdHkgKz0gaGVpZ2h0X21hcFtpXSB8fCBhdmVyYWdlX2hlaWdodDtcblx0XHRcdGkgKz0gMTtcblxuXHRcdFx0aWYgKHkgPiBzY3JvbGxUb3AgKyB2aWV3cG9ydF9oZWlnaHQpIGJyZWFrO1xuXHRcdH1cblxuXHRcdGVuZCA9IGk7XG5cblx0XHRjb25zdCByZW1haW5pbmcgPSBpdGVtcy5sZW5ndGggLSBlbmQ7XG5cdFx0YXZlcmFnZV9oZWlnaHQgPSB5IC8gZW5kO1xuXG5cdFx0d2hpbGUgKGkgPCBpdGVtcy5sZW5ndGgpIGhlaWdodF9tYXBbaSsrXSA9IGF2ZXJhZ2VfaGVpZ2h0O1xuXHRcdGJvdHRvbSA9IHJlbWFpbmluZyAqIGF2ZXJhZ2VfaGVpZ2h0O1xuXG5cdFx0Ly8gcHJldmVudCBqdW1waW5nIGlmIHdlIHNjcm9sbGVkIHVwIGludG8gdW5rbm93biB0ZXJyaXRvcnlcblx0XHRpZiAoc3RhcnQgPCBvbGRfc3RhcnQpIHtcblx0XHRcdGF3YWl0IHRpY2soKTtcblxuXHRcdFx0bGV0IGV4cGVjdGVkX2hlaWdodCA9IDA7XG5cdFx0XHRsZXQgYWN0dWFsX2hlaWdodCA9IDA7XG5cblx0XHRcdGZvciAobGV0IGkgPSBzdGFydDsgaSA8IG9sZF9zdGFydDsgaSArPSAxKSB7XG5cdFx0XHRcdGlmIChyb3dzW2kgLSBzdGFydF0pIHtcblx0XHRcdFx0XHRleHBlY3RlZF9oZWlnaHQgKz0gaGVpZ2h0X21hcFtpXTtcblx0XHRcdFx0XHRhY3R1YWxfaGVpZ2h0ICs9IGl0ZW1IZWlnaHQgfHwgcm93c1tpIC0gc3RhcnRdLm9mZnNldEhlaWdodDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBkID0gYWN0dWFsX2hlaWdodCAtIGV4cGVjdGVkX2hlaWdodDtcblx0XHRcdHZpZXdwb3J0LnNjcm9sbFRvKDAsIHNjcm9sbFRvcCArIGQpO1xuXHRcdH1cblxuXHRcdC8vIFRPRE8gaWYgd2Ugb3ZlcmVzdGltYXRlZCB0aGUgc3BhY2UgdGhlc2Vcblx0XHQvLyByb3dzIHdvdWxkIG9jY3VweSB3ZSBtYXkgbmVlZCB0byBhZGQgc29tZVxuXHRcdC8vIG1vcmUuIG1heWJlIHdlIGNhbiBqdXN0IGNhbGwgaGFuZGxlX3Njcm9sbCBhZ2Fpbj9cblx0fVxuXG5cdC8vIHRyaWdnZXIgaW5pdGlhbCByZWZyZXNoXG5cdG9uTW91bnQoKCkgPT4ge1xuXHRcdHJvd3MgPSBjb250ZW50cy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc3ZlbHRlLXZpcnR1YWwtbGlzdC1yb3cnKTtcblx0XHRtb3VudGVkID0gdHJ1ZTtcblx0fSk7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXHRzdmVsdGUtdmlydHVhbC1saXN0LXZpZXdwb3J0IHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0b3ZlcmZsb3cteTogYXV0bztcblx0XHQtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdH1cblxuXHRzdmVsdGUtdmlydHVhbC1saXN0LWNvbnRlbnRzLFxuXHRzdmVsdGUtdmlydHVhbC1saXN0LXJvdyB7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdH1cblxuXHRzdmVsdGUtdmlydHVhbC1saXN0LXJvdyB7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0fVxuPC9zdHlsZT5cblxuPHN2ZWx0ZS12aXJ0dWFsLWxpc3Qtdmlld3BvcnQgYmluZDp0aGlzPXt2aWV3cG9ydH0gYmluZDpvZmZzZXRIZWlnaHQ9e3ZpZXdwb3J0X2hlaWdodH0gb246c2Nyb2xsPXtoYW5kbGVfc2Nyb2xsfVxuXHRzdHlsZT1cImhlaWdodDoge2hlaWdodH07XCI+XG5cdDxzdmVsdGUtdmlydHVhbC1saXN0LWNvbnRlbnRzIGJpbmQ6dGhpcz17Y29udGVudHN9IHN0eWxlPVwicGFkZGluZy10b3A6IHt0b3B9cHg7IHBhZGRpbmctYm90dG9tOiB7Ym90dG9tfXB4O1wiPlxuXHRcdHsjZWFjaCB2aXNpYmxlIGFzIHJvdyAocm93LmluZGV4KX1cblx0XHRcdDxzdmVsdGUtdmlydHVhbC1saXN0LXJvdz5cblx0XHRcdFx0PHNsb3QgaXRlbT17cm93LmRhdGF9IGk9e3Jvdy5pbmRleH0ge2hvdmVySXRlbUluZGV4fT5NaXNzaW5nIHRlbXBsYXRlPC9zbG90PlxuXHRcdFx0PC9zdmVsdGUtdmlydHVhbC1saXN0LXJvdz5cblx0XHR7L2VhY2h9XG5cdDwvc3ZlbHRlLXZpcnR1YWwtbGlzdC1jb250ZW50cz5cbjwvc3ZlbHRlLXZpcnR1YWwtbGlzdC12aWV3cG9ydD4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUlDLDRCQUE0QixjQUFDLENBQUMsQUFDN0IsUUFBUSxDQUFFLFFBQVEsQ0FDbEIsVUFBVSxDQUFFLElBQUksQ0FDaEIsMEJBQTBCLENBQUUsS0FBSyxDQUNqQyxPQUFPLENBQUUsS0FBSyxBQUNmLENBQUMsQUFFRCwwQ0FBNEIsQ0FDNUIsdUJBQXVCLGNBQUMsQ0FBQyxBQUN4QixPQUFPLENBQUUsS0FBSyxBQUNmLENBQUMsQUFFRCx1QkFBdUIsY0FBQyxDQUFDLEFBQ3hCLFFBQVEsQ0FBRSxNQUFNLEFBQ2pCLENBQUMifQ== */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(document.head, style);
}

const get_default_slot_changes = ({ visible, row, hoverItemIndex }) => ({
	item: visible,
	i: visible,
	hoverItemIndex: hoverItemIndex
});
const get_default_slot_context = ({ visible, row, hoverItemIndex }) => ({
	item: row.data,
	i: row.index,
	hoverItemIndex: hoverItemIndex
});

function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.row = list[i];
	return child_ctx;
}

// (158:2) {#each visible as row (row.index)}
function create_each_block(key_1, ctx) {
	var svelte_virtual_list_row, t0, t1, current;

	const default_slot_1 = ctx.$$slots.default;
	const default_slot = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_slot"])(default_slot_1, ctx, get_default_slot_context);

	return {
		key: key_1,

		first: null,

		c: function create() {
			svelte_virtual_list_row = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("svelte-virtual-list-row");

			if (!default_slot) {
				t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Missing template");
			}

			if (default_slot) default_slot.c();
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			this.h()
		},

		l: function claim(nodes) {
			svelte_virtual_list_row = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "SVELTE-VIRTUAL-LIST-ROW", { class: true }, false);
			var svelte_virtual_list_row_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(svelte_virtual_list_row);

			if (!default_slot) {
				t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(svelte_virtual_list_row_nodes, "Missing template");
			}

			if (default_slot) default_slot.l(svelte_virtual_list_row_nodes);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(svelte_virtual_list_row_nodes, "\n\t\t\t");
			svelte_virtual_list_row_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			this.h();
		},

		h: function hydrate() {
			svelte_virtual_list_row.className = "svelte-p6ehlv";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(svelte_virtual_list_row, file, 158, 3, 3514);
			this.first = svelte_virtual_list_row;
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, svelte_virtual_list_row, anchor);

			if (!default_slot) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(svelte_virtual_list_row, t0);
			}

			else {
				default_slot.m(svelte_virtual_list_row, null);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(svelte_virtual_list_row, t1);
			current = true;
		},

		p: function update(changed, ctx) {
			if (default_slot && default_slot.p && (changed.$$scope || changed.visible || changed.hoverItemIndex)) {
				default_slot.p(Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["get_slot_changes"])(default_slot_1, ctx, changed, get_default_slot_changes), Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["get_slot_context"])(default_slot_1, ctx, get_default_slot_context));
			}
		},

		i: function intro(local) {
			if (current) return;
			if (default_slot && default_slot.i) default_slot.i(local);
			current = true;
		},

		o: function outro(local) {
			if (default_slot && default_slot.o) default_slot.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(svelte_virtual_list_row);
			}

			if (default_slot) default_slot.d(detaching);
		}
	};
}

function create_fragment(ctx) {
	var svelte_virtual_list_viewport, svelte_virtual_list_contents, each_blocks = [], each_1_lookup = new Map(), svelte_virtual_list_viewport_resize_listener, current, dispose;

	var each_value = ctx.visible;

	const get_key = ctx => ctx.row.index;

	for (var i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

	return {
		c: function create() {
			svelte_virtual_list_viewport = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("svelte-virtual-list-viewport");
			svelte_virtual_list_contents = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("svelte-virtual-list-contents");

			for (i = 0; i < each_blocks.length; i += 1) each_blocks[i].c();
			this.h()
		},

		l: function claim(nodes) {
			svelte_virtual_list_viewport = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "SVELTE-VIRTUAL-LIST-VIEWPORT", { style: true, class: true }, false);
			var svelte_virtual_list_viewport_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(svelte_virtual_list_viewport);

			svelte_virtual_list_contents = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(svelte_virtual_list_viewport_nodes, "SVELTE-VIRTUAL-LIST-CONTENTS", { style: true, class: true }, false);
			var svelte_virtual_list_contents_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(svelte_virtual_list_contents);

			for (i = 0; i < each_blocks.length; i += 1) each_blocks[i].l(svelte_virtual_list_contents_nodes);

			svelte_virtual_list_contents_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			svelte_virtual_list_viewport_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			this.h();
		},

		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(svelte_virtual_list_contents, "padding-top", "" + ctx.top + "px");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(svelte_virtual_list_contents, "padding-bottom", "" + ctx.bottom + "px");
			svelte_virtual_list_contents.className = "svelte-p6ehlv";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(svelte_virtual_list_contents, file, 156, 1, 3364);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_render_callback"])(() => ctx.svelte_virtual_list_viewport_resize_handler.call(svelte_virtual_list_viewport));
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(svelte_virtual_list_viewport, "height", ctx.height);
			svelte_virtual_list_viewport.className = "svelte-p6ehlv";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(svelte_virtual_list_viewport, file, 154, 0, 3222);
			dispose = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(svelte_virtual_list_viewport, "scroll", ctx.handle_scroll);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, svelte_virtual_list_viewport, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(svelte_virtual_list_viewport, svelte_virtual_list_contents);

			for (i = 0; i < each_blocks.length; i += 1) each_blocks[i].m(svelte_virtual_list_contents, null);

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_binding_callback"])(() => ctx.svelte_virtual_list_contents_binding(svelte_virtual_list_contents, null));
			svelte_virtual_list_viewport_resize_listener = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_resize_listener"])(svelte_virtual_list_viewport, ctx.svelte_virtual_list_viewport_resize_handler.bind(svelte_virtual_list_viewport));
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_binding_callback"])(() => ctx.svelte_virtual_list_viewport_binding(svelte_virtual_list_viewport, null));
			current = true;
		},

		p: function update(changed, ctx) {
			const each_value = ctx.visible;

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();
			each_blocks = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["update_keyed_each"])(each_blocks, changed, get_key, 1, ctx, each_value, each_1_lookup, svelte_virtual_list_contents, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["outro_and_destroy_block"], create_each_block, null, get_each_context);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();

			if (changed.items) {
				ctx.svelte_virtual_list_contents_binding(null, svelte_virtual_list_contents);
				;
				ctx.svelte_virtual_list_contents_binding(svelte_virtual_list_contents, null);
			}

			if (!current || changed.top) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(svelte_virtual_list_contents, "padding-top", "" + ctx.top + "px");
			}

			if (!current || changed.bottom) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(svelte_virtual_list_contents, "padding-bottom", "" + ctx.bottom + "px");
			}

			if (changed.items) {
				ctx.svelte_virtual_list_viewport_binding(null, svelte_virtual_list_viewport);
				;
				ctx.svelte_virtual_list_viewport_binding(svelte_virtual_list_viewport, null);
			}

			if (!current || changed.height) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(svelte_virtual_list_viewport, "height", ctx.height);
			}
		},

		i: function intro(local) {
			if (current) return;
			for (var i = 0; i < each_value.length; i += 1) each_blocks[i].i();

			current = true;
		},

		o: function outro(local) {
			for (i = 0; i < each_blocks.length; i += 1) each_blocks[i].o();

			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(svelte_virtual_list_viewport);
			}

			for (i = 0; i < each_blocks.length; i += 1) each_blocks[i].d();

			ctx.svelte_virtual_list_contents_binding(null, svelte_virtual_list_contents);
			svelte_virtual_list_viewport_resize_listener.cancel();
			ctx.svelte_virtual_list_viewport_binding(null, svelte_virtual_list_viewport);
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	// props
	let { items = undefined, height = '100%', itemHeight = 40, hoverItemIndex = 0, start = 0, end = 0 } = $$props;

	// local state
	let height_map = [];
	let rows;
	let viewport;
	let contents;
	let viewport_height = 0;
	let visible;
	let mounted;

	let top = 0;
	let bottom = 0;
	let average_height;

	async function refresh(items, viewport_height, itemHeight) {
		const { scrollTop } = viewport;

		await Object(svelte__WEBPACK_IMPORTED_MODULE_1__["tick"])(); // wait until the DOM is up to date

		let content_height = top - scrollTop;
		let i = start;

		while (content_height < viewport_height && i < items.length) {
			let row = rows[i - start];

			if (!row) {
				$$invalidate('end', end = i + 1);
				await Object(svelte__WEBPACK_IMPORTED_MODULE_1__["tick"])(); // render the newly visible row
				row = rows[i - start];
			}

			const row_height = height_map[i] = itemHeight || row.offsetHeight;
			content_height += row_height; $$invalidate('height_map', height_map);
			i += 1;
		}

		$$invalidate('end', end = i);

		const remaining = items.length - end;
		$$invalidate('average_height', average_height = (top + content_height) / end);

		$$invalidate('bottom', bottom = remaining * average_height);
		height_map.length = items.length; $$invalidate('height_map', height_map);

		viewport.scrollTop = 0; $$invalidate('viewport', viewport);
	}

	async function handle_scroll() {
		const { scrollTop } = viewport;

		const old_start = start;

		for (let v = 0; v < rows.length; v += 1) {
			height_map[start + v] = itemHeight || rows[v].offsetHeight; $$invalidate('height_map', height_map);
		}

		let i = 0;
		let y = 0;

		while (i < items.length) {
			const row_height = height_map[i] || average_height;
			if (y + row_height > scrollTop) {
				$$invalidate('start', start = i);
				$$invalidate('top', top = y);

				break;
			}

			y += row_height;
			i += 1;
		}

		while (i < items.length) {
			y += height_map[i] || average_height;
			i += 1;

			if (y > scrollTop + viewport_height) break;
		}

		$$invalidate('end', end = i);

		const remaining = items.length - end;
		$$invalidate('average_height', average_height = y / end);

		while (i < items.length) { height_map[i++] = average_height; $$invalidate('height_map', height_map); }
		$$invalidate('bottom', bottom = remaining * average_height);

		// prevent jumping if we scrolled up into unknown territory
		if (start < old_start) {
			await Object(svelte__WEBPACK_IMPORTED_MODULE_1__["tick"])();

			let expected_height = 0;
			let actual_height = 0;

			for (let i = start; i < old_start; i += 1) {
				if (rows[i - start]) {
					expected_height += height_map[i];
					actual_height += itemHeight || rows[i - start].offsetHeight;
				}
			}

			const d = actual_height - expected_height;
			viewport.scrollTo(0, scrollTop + d);
		}

		// TODO if we overestimated the space these
		// rows would occupy we may need to add some
		// more. maybe we can just call handle_scroll again?
	}

	// trigger initial refresh
	Object(svelte__WEBPACK_IMPORTED_MODULE_1__["onMount"])(() => {
		$$invalidate('rows', rows = contents.getElementsByTagName('svelte-virtual-list-row'));
		$$invalidate('mounted', mounted = true);
	});

	let { $$slots = {}, $$scope } = $$props;

	function svelte_virtual_list_contents_binding($$node, check) {
		contents = $$node;
		$$invalidate('contents', contents);
	}

	function svelte_virtual_list_viewport_resize_handler() {
		viewport_height = this.offsetHeight;
		$$invalidate('viewport_height', viewport_height);
	}

	function svelte_virtual_list_viewport_binding($$node, check) {
		viewport = $$node;
		$$invalidate('viewport', viewport);
	}

	$$self.$set = $$props => {
		if ('items' in $$props) $$invalidate('items', items = $$props.items);
		if ('height' in $$props) $$invalidate('height', height = $$props.height);
		if ('itemHeight' in $$props) $$invalidate('itemHeight', itemHeight = $$props.itemHeight);
		if ('hoverItemIndex' in $$props) $$invalidate('hoverItemIndex', hoverItemIndex = $$props.hoverItemIndex);
		if ('start' in $$props) $$invalidate('start', start = $$props.start);
		if ('end' in $$props) $$invalidate('end', end = $$props.end);
		if ('$$scope' in $$props) $$invalidate('$$scope', $$scope = $$props.$$scope);
	};

	$$self.$$.update = ($$dirty = { items: 1, start: 1, end: 1, mounted: 1, viewport_height: 1, itemHeight: 1 }) => {
		if ($$dirty.items || $$dirty.start || $$dirty.end) { $$invalidate('visible', visible = items.slice(start, end).map((data, i) => {
				return { index: i + start, data };
			})); }
		if ($$dirty.mounted || $$dirty.items || $$dirty.viewport_height || $$dirty.itemHeight) { if (mounted) refresh(items, viewport_height, itemHeight); }
	};

	return {
		items,
		height,
		itemHeight,
		hoverItemIndex,
		start,
		end,
		viewport,
		contents,
		viewport_height,
		visible,
		top,
		bottom,
		handle_scroll,
		svelte_virtual_list_contents_binding,
		svelte_virtual_list_viewport_resize_handler,
		svelte_virtual_list_viewport_binding,
		$$slots,
		$$scope
	};
}

class VirtualList extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-p6ehlv-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], ["items", "height", "itemHeight", "hoverItemIndex", "start", "end"]);
	}

	get items() {
		throw new Error("<VirtualList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set items(value) {
		throw new Error("<VirtualList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get height() {
		throw new Error("<VirtualList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set height(value) {
		throw new Error("<VirtualList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get itemHeight() {
		throw new Error("<VirtualList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set itemHeight(value) {
		throw new Error("<VirtualList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get hoverItemIndex() {
		throw new Error("<VirtualList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set hoverItemIndex(value) {
		throw new Error("<VirtualList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get start() {
		throw new Error("<VirtualList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set start(value) {
		throw new Error("<VirtualList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get end() {
		throw new Error("<VirtualList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set end(value) {
		throw new Error("<VirtualList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* harmony default export */ __webpack_exports__["default"] = (VirtualList);

/***/ }),

/***/ "./node_modules/svelte-select/src/utils/debounce.js":
/*!**********************************************************!*\
  !*** ./node_modules/svelte-select/src/utils/debounce.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return debounce; });
function debounce(func, wait, immediate) {
  let timeout;

  return function executedFunction() {
    let context = this;
    let args = arguments;
	    
    let later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    let callNow = immediate && !timeout;
	
    clearTimeout(timeout);

    timeout = setTimeout(later, wait);
	
    if (callNow) func.apply(context, args);
  };
};


/***/ }),

/***/ "./node_modules/svelte-select/src/utils/isOutOfViewport.js":
/*!*****************************************************************!*\
  !*** ./node_modules/svelte-select/src/utils/isOutOfViewport.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(elem) {
  const bounding = elem.getBoundingClientRect();
  const out = {};

  out.top = bounding.top < 0;
  out.left = bounding.left < 0;
  out.bottom = bounding.bottom > (window.innerHeight || document.documentElement.clientHeight);
  out.right = bounding.right > (window.innerWidth || document.documentElement.clientWidth);
  out.any = out.top || out.left || out.bottom || out.right;

  return out;
});;



/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYWJvcnRjb250cm9sbGVyLXBvbHlmaWxsL2Rpc3QvYWJvcnRjb250cm9sbGVyLXBvbHlmaWxsLW9ubHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YtcmF3LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb3B5LWNvbnN0cnVjdG9yLXByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZmxhdHRlbi1pbnRvLWFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1idWlsdC1pbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2hpZGRlbi1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9odG1sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2luc3BlY3Qtc291cmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWZvcmNlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1wdXJlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9uYXRpdmUtc3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9uYXRpdmUtd2Vhay1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQtc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91aWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZsYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS51bnNjb3BhYmxlcy5mbGF0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jcm9zcy1mZXRjaC9kaXN0L2Jyb3dzZXItcG9ueWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZoaXJjbGllbnQvbGliL0NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmhpcmNsaWVudC9saWIvSHR0cEVycm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9maGlyY2xpZW50L2xpYi9hZGFwdGVycy9Ccm93c2VyQWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmhpcmNsaWVudC9saWIvZW50cnkvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmhpcmNsaWVudC9saWIvbGliLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9maGlyY2xpZW50L2xpYi9zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmhpcmNsaWVudC9saWIvc21hcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZoaXJjbGllbnQvbGliL3N0b3JhZ2UvQnJvd3NlclN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZoaXJjbGllbnQvbGliL3N0cmluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZoaXJjbGllbnQvbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9maGlyY2xpZW50L25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvY29tbW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9maGlyY2xpZW50L25vZGVfbW9kdWxlcy9tcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3ZlbHRlLXNlbGVjdC9zcmMvSXRlbS5zdmVsdGUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS1zZWxlY3Qvc3JjL0xpc3Quc3ZlbHRlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdmVsdGUtc2VsZWN0L3NyYy9NdWx0aVNlbGVjdGlvbi5zdmVsdGUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS1zZWxlY3Qvc3JjL1NlbGVjdC5zdmVsdGUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS1zZWxlY3Qvc3JjL1NlbGVjdGlvbi5zdmVsdGUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS1zZWxlY3Qvc3JjL1ZpcnR1YWxMaXN0LnN2ZWx0ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3ZlbHRlLXNlbGVjdC9zcmMvdXRpbHMvZGVib3VuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS1zZWxlY3Qvc3JjL3V0aWxzL2lzT3V0T2ZWaWV3cG9ydC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0EsRUFBRSxLQUEwQyxHQUFHLG9DQUFPLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQSxvR0FBQztBQUM5RCxFQUFFLFNBQVM7QUFDWCxDQUFDLGVBQWU7O0FBRWhCO0FBQ0E7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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZELFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVCw4RUFBOEU7QUFDOUU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLHFCQUFxQjtBQUNuRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLHVDQUF1QywwQkFBMEI7QUFDakU7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtCQUErQiwwQkFBMEIsZUFBZTtBQUN4RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQyxHQUFHO0FBQ0osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxNQUFNO0FBQzNEO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDamlCYTs7QUFFYixtQkFBTyxDQUFDLHNGQUErQjs7QUFFdkMsbUJBQU8sQ0FBQyw4R0FBMkM7O0FBRW5EO0FBQ0E7QUFDQSxDQUFDOztBQUVELGNBQWMsbUJBQU8sQ0FBQyxtREFBTzs7QUFFN0Isa0JBQWtCLG1CQUFPLENBQUMsMkRBQVc7O0FBRXJDLG1CQUFtQixtQkFBTyxDQUFDLDZEQUFZLEVBQUU7QUFDekM7OztBQUdBO0FBQ0E7QUFDQSxDQUFDLHFEQUFxRCxtQkFBTyxDQUFDLHdFQUFhLEVBQUU7O0FBRTdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDLEtBQUs7QUFDM0M7O0FBRUE7QUFDQSx3Q0FBd0MsYUFBYTtBQUNyRDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHVCQUF1QixFQUFFLElBQUk7QUFDbkUsZUFBZTtBQUNmLHNDQUFzQyxLQUFLLEdBQUcsRUFBRTtBQUNoRDtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRyxFQUFFOztBQUVMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHLEVBQUU7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSyxTQUFTOzs7QUFHZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCOztBQUV4QjtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQLGdDQUFnQztBQUNoQztBQUNBLCtEQUErRDtBQUMvRCwwQkFBMEIsR0FBRztBQUM3QixTQUFTO0FBQ1QsT0FBTztBQUNQLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQLGdDQUFnQztBQUNoQztBQUNBLCtEQUErRDtBQUMvRCw0QkFBNEIsR0FBRztBQUMvQixTQUFTO0FBQ1Q7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBLE9BQU87O0FBRVAsZ0NBQWdDO0FBQ2hDO0FBQ0EscUVBQXFFO0FBQ3JFO0FBQ0EsU0FBUztBQUNUO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZ0VBQWdFO0FBQ2hFO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsVUFBVSxFQUFFLFFBQVE7QUFDdkQ7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxzQ0FBc0M7QUFDdEMsc0RBQXNEO0FBQ3RELGNBQWMsc0JBQXNCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxzQ0FBc0M7QUFDdEMsc0RBQXNEO0FBQ3RELGNBQWMsc0JBQXNCLEdBQUcsWUFBWTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsaUNBQWlDO0FBQ2pDLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLGdEQUFnRCxvQkFBb0I7QUFDcEU7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7OztBQUdMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtEQUErRDtBQUMvRDtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdEQUF3RDtBQUN4RDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7O0FBRWY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSw2QkFBNkI7QUFDN0I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLCtDQUErQyw4QkFBOEI7QUFDN0U7QUFDQSxTQUFTO0FBQ1Qsd0RBQXdELGlDQUFpQztBQUN6RixPQUFPLEVBQUU7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsRUFBRTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLGtDQUFrQztBQUNsQyw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBLGVBQWUsRUFBRTtBQUNqQjs7O0FBR0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQSx5Qjs7Ozs7Ozs7Ozs7O0FDLzhCYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw0Qjs7Ozs7Ozs7Ozs7O0FDOUJhOztBQUViO0FBQ0E7QUFDQSxDQUFDOztBQUVELGdCQUFnQixtQkFBTyxDQUFDLHdEQUFVOztBQUVsQyxpQkFBaUIsbUJBQU8sQ0FBQywwREFBVzs7QUFFcEMseUJBQXlCLG1CQUFPLENBQUMsMEZBQTJCO0FBQzVEO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFO0FBQ3ZFO0FBQ0EsMkVBQTJFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsaUM7Ozs7Ozs7Ozs7OztBQ2hLYTtBQUNiOztBQUVBLHlCQUF5QixtQkFBTyxDQUFDLDRGQUE0Qjs7QUFFN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLHlCQUF5QjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLG1CQUFPLENBQUMsd0VBQWE7O0FBRXJDLEVBQUUsbUJBQU8sQ0FBQyxrSkFBNkQ7O0FBRXZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHFCOzs7Ozs7Ozs7Ozs7QUMzQ1Q7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBLG9CQUFvQixtQkFBTyxDQUFDLCtEQUFhOztBQUV6QyxtQkFBbUIsbUJBQU8sQ0FBQyw2REFBWTs7QUFFdkMsY0FBYyxtQkFBTyxDQUFDLDBFQUFPLEVBQUU7QUFDL0I7OztBQUdBO0FBQ0E7QUFDQSxDQUFDLHFEQUFxRCxtQkFBTyxDQUFDLHdFQUFhLEVBQUU7O0FBRTdFOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtEQUErRDtBQUMvRDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkI7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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0I3RDtBQUFBO0FBQWU7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDWEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDIiwiZmlsZSI6IjFmMDA5OGNkYjU5MWI4MmI4NzEyL3ZlbmRvcnN+cHJvdmlkZXJzLnZlbmRvcnN+cHJvdmlkZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIChmYWN0b3J5KSB7XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gIGZhY3RvcnkoKTtcbn0oKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH1cblxuICBmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuXG4gICAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gICAgfTtcbiAgICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xuICB9XG5cbiAgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICAgIG8uX19wcm90b19fID0gcDtcbiAgICAgIHJldHVybiBvO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xuICB9XG5cbiAgZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTtcbiAgICBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlO1xuXG4gICAgdHJ5IHtcbiAgICAgIERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gICAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBzZWxmO1xuICB9XG5cbiAgZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICAgIGlmIChjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgICAgcmV0dXJuIGNhbGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG4gIH1cblxuICBmdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkge1xuICAgIHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkge1xuICAgICAgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLFxuICAgICAgICAgIHJlc3VsdDtcblxuICAgICAgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHtcbiAgICAgICAgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjtcblxuICAgICAgICByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9zdXBlclByb3BCYXNlKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgICB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgICAgb2JqZWN0ID0gX2dldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgICBpZiAob2JqZWN0ID09PSBudWxsKSBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9XG5cbiAgZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LmdldCkge1xuICAgICAgX2dldCA9IFJlZmxlY3QuZ2V0O1xuICAgIH0gZWxzZSB7XG4gICAgICBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICAgICAgICB2YXIgYmFzZSA9IF9zdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xuXG4gICAgICAgIGlmICghYmFzZSkgcmV0dXJuO1xuICAgICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuXG4gICAgICAgIGlmIChkZXNjLmdldCkge1xuICAgICAgICAgIHJldHVybiBkZXNjLmdldC5jYWxsKHJlY2VpdmVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlciB8fCB0YXJnZXQpO1xuICB9XG5cbiAgdmFyIEVtaXR0ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEVtaXR0ZXIoKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRW1pdHRlcik7XG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnbGlzdGVuZXJzJywge1xuICAgICAgICB2YWx1ZToge30sXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhFbWl0dGVyLCBbe1xuICAgICAga2V5OiBcImFkZEV2ZW50TGlzdGVuZXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICghKHR5cGUgaW4gdGhpcy5saXN0ZW5lcnMpKSB7XG4gICAgICAgICAgdGhpcy5saXN0ZW5lcnNbdHlwZV0gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGlzdGVuZXJzW3R5cGVdLnB1c2goY2FsbGJhY2spO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZW1vdmVFdmVudExpc3RlbmVyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAoISh0eXBlIGluIHRoaXMubGlzdGVuZXJzKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzdGFjayA9IHRoaXMubGlzdGVuZXJzW3R5cGVdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gc3RhY2subGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHN0YWNrW2ldID09PSBjYWxsYmFjaykge1xuICAgICAgICAgICAgc3RhY2suc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJkaXNwYXRjaEV2ZW50XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChldmVudCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIGlmICghKGV2ZW50LnR5cGUgaW4gdGhpcy5saXN0ZW5lcnMpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRlYm91bmNlID0gZnVuY3Rpb24gZGVib3VuY2UoY2FsbGJhY2spIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjay5jYWxsKF90aGlzLCBldmVudCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHN0YWNrID0gdGhpcy5saXN0ZW5lcnNbZXZlbnQudHlwZV07XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBzdGFjay5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBkZWJvdW5jZShzdGFja1tpXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQ7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEVtaXR0ZXI7XG4gIH0oKTtcblxuICB2YXIgQWJvcnRTaWduYWwgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9FbWl0dGVyKSB7XG4gICAgX2luaGVyaXRzKEFib3J0U2lnbmFsLCBfRW1pdHRlcik7XG5cbiAgICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKEFib3J0U2lnbmFsKTtcblxuICAgIGZ1bmN0aW9uIEFib3J0U2lnbmFsKCkge1xuICAgICAgdmFyIF90aGlzMjtcblxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFib3J0U2lnbmFsKTtcblxuICAgICAgX3RoaXMyID0gX3N1cGVyLmNhbGwodGhpcyk7IC8vIFNvbWUgdmVyc2lvbnMgb2YgYmFiZWwgZG9lcyBub3QgdHJhbnNwaWxlIHN1cGVyKCkgY29ycmVjdGx5IGZvciBJRSA8PSAxMCwgaWYgdGhlIHBhcmVudFxuICAgICAgLy8gY29uc3RydWN0b3IgaGFzIGZhaWxlZCB0byBydW4sIHRoZW4gXCJ0aGlzLmxpc3RlbmVyc1wiIHdpbGwgc3RpbGwgYmUgdW5kZWZpbmVkIGFuZCB0aGVuIHdlIGNhbGxcbiAgICAgIC8vIHRoZSBwYXJlbnQgY29uc3RydWN0b3IgZGlyZWN0bHkgaW5zdGVhZCBhcyBhIHdvcmthcm91bmQuIEZvciBnZW5lcmFsIGRldGFpbHMsIHNlZSBiYWJlbCBidWc6XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYmFiZWwvYmFiZWwvaXNzdWVzLzMwNDFcbiAgICAgIC8vIFRoaXMgaGFjayB3YXMgYWRkZWQgYXMgYSBmaXggZm9yIHRoZSBpc3N1ZSBkZXNjcmliZWQgaGVyZTpcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9GaW5hbmNpYWwtVGltZXMvcG9seWZpbGwtbGlicmFyeS9wdWxsLzU5I2lzc3VlY29tbWVudC00Nzc1NTgwNDJcblxuICAgICAgaWYgKCFfdGhpczIubGlzdGVuZXJzKSB7XG4gICAgICAgIEVtaXR0ZXIuY2FsbChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzMikpO1xuICAgICAgfSAvLyBDb21wYXJlZCB0byBhc3NpZ25tZW50LCBPYmplY3QuZGVmaW5lUHJvcGVydHkgbWFrZXMgcHJvcGVydGllcyBub24tZW51bWVyYWJsZSBieSBkZWZhdWx0IGFuZFxuICAgICAgLy8gd2Ugd2FudCBPYmplY3Qua2V5cyhuZXcgQWJvcnRDb250cm9sbGVyKCkuc2lnbmFsKSB0byBiZSBbXSBmb3IgY29tcGF0IHdpdGggdGhlIG5hdGl2ZSBpbXBsXG5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMyKSwgJ2Fib3J0ZWQnLCB7XG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpczIpLCAnb25hYm9ydCcsIHtcbiAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIF90aGlzMjtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQWJvcnRTaWduYWwsIFt7XG4gICAgICBrZXk6IFwidG9TdHJpbmdcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuICdbb2JqZWN0IEFib3J0U2lnbmFsXSc7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImRpc3BhdGNoRXZlbnRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNwYXRjaEV2ZW50KGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC50eXBlID09PSAnYWJvcnQnKSB7XG4gICAgICAgICAgdGhpcy5hYm9ydGVkID0gdHJ1ZTtcblxuICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5vbmFib3J0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLm9uYWJvcnQuY2FsbCh0aGlzLCBldmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoQWJvcnRTaWduYWwucHJvdG90eXBlKSwgXCJkaXNwYXRjaEV2ZW50XCIsIHRoaXMpLmNhbGwodGhpcywgZXZlbnQpO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBBYm9ydFNpZ25hbDtcbiAgfShFbWl0dGVyKTtcbiAgdmFyIEFib3J0Q29udHJvbGxlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQWJvcnRDb250cm9sbGVyKCkge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFib3J0Q29udHJvbGxlcik7XG5cbiAgICAgIC8vIENvbXBhcmVkIHRvIGFzc2lnbm1lbnQsIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBtYWtlcyBwcm9wZXJ0aWVzIG5vbi1lbnVtZXJhYmxlIGJ5IGRlZmF1bHQgYW5kXG4gICAgICAvLyB3ZSB3YW50IE9iamVjdC5rZXlzKG5ldyBBYm9ydENvbnRyb2xsZXIoKSkgdG8gYmUgW10gZm9yIGNvbXBhdCB3aXRoIHRoZSBuYXRpdmUgaW1wbFxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdzaWduYWwnLCB7XG4gICAgICAgIHZhbHVlOiBuZXcgQWJvcnRTaWduYWwoKSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEFib3J0Q29udHJvbGxlciwgW3tcbiAgICAgIGtleTogXCJhYm9ydFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFib3J0KCkge1xuICAgICAgICB2YXIgZXZlbnQ7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBldmVudCA9IG5ldyBFdmVudCgnYWJvcnQnKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBpZiAoIWRvY3VtZW50LmNyZWF0ZUV2ZW50KSB7XG4gICAgICAgICAgICAgIC8vIEZvciBJbnRlcm5ldCBFeHBsb3JlciA4OlxuICAgICAgICAgICAgICBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50T2JqZWN0KCk7XG4gICAgICAgICAgICAgIGV2ZW50LnR5cGUgPSAnYWJvcnQnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gRm9yIEludGVybmV0IEV4cGxvcmVyIDExOlxuICAgICAgICAgICAgICBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuICAgICAgICAgICAgICBldmVudC5pbml0RXZlbnQoJ2Fib3J0JywgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gRmFsbGJhY2sgd2hlcmUgZG9jdW1lbnQgaXNuJ3QgYXZhaWxhYmxlOlxuICAgICAgICAgICAgZXZlbnQgPSB7XG4gICAgICAgICAgICAgIHR5cGU6ICdhYm9ydCcsXG4gICAgICAgICAgICAgIGJ1YmJsZXM6IGZhbHNlLFxuICAgICAgICAgICAgICBjYW5jZWxhYmxlOiBmYWxzZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNpZ25hbC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwidG9TdHJpbmdcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuICdbb2JqZWN0IEFib3J0Q29udHJvbGxlcl0nO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBBYm9ydENvbnRyb2xsZXI7XG4gIH0oKTtcblxuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gICAgLy8gVGhlc2UgYXJlIG5lY2Vzc2FyeSB0byBtYWtlIHN1cmUgdGhhdCB3ZSBnZXQgY29ycmVjdCBvdXRwdXQgZm9yOlxuICAgIC8vIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXcgQWJvcnRDb250cm9sbGVyKCkpXG4gICAgQWJvcnRDb250cm9sbGVyLnByb3RvdHlwZVtTeW1ib2wudG9TdHJpbmdUYWddID0gJ0Fib3J0Q29udHJvbGxlcic7XG4gICAgQWJvcnRTaWduYWwucHJvdG90eXBlW1N5bWJvbC50b1N0cmluZ1RhZ10gPSAnQWJvcnRTaWduYWwnO1xuICB9XG5cbiAgZnVuY3Rpb24gcG9seWZpbGxOZWVkZWQoc2VsZikge1xuICAgIGlmIChzZWxmLl9fRk9SQ0VfSU5TVEFMTF9BQk9SVENPTlRST0xMRVJfUE9MWUZJTEwpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdfX0ZPUkNFX0lOU1RBTExfQUJPUlRDT05UUk9MTEVSX1BPTFlGSUxMPXRydWUgaXMgc2V0LCB3aWxsIGZvcmNlIGluc3RhbGwgcG9seWZpbGwnKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gLy8gTm90ZSB0aGF0IHRoZSBcInVuZmV0Y2hcIiBtaW5pbWFsIGZldGNoIHBvbHlmaWxsIGRlZmluZXMgZmV0Y2goKSB3aXRob3V0XG4gICAgLy8gZGVmaW5pbmcgd2luZG93LlJlcXVlc3QsIGFuZCB0aGlzIHBvbHlmaWxsIG5lZWQgdG8gd29yayBvbiB0b3Agb2YgdW5mZXRjaFxuICAgIC8vIHNvIHRoZSBiZWxvdyBmZWF0dXJlIGRldGVjdGlvbiBuZWVkcyB0aGUgIXNlbGYuQWJvcnRDb250cm9sbGVyIHBhcnQuXG4gICAgLy8gVGhlIFJlcXVlc3QucHJvdG90eXBlIGNoZWNrIGlzIGFsc28gbmVlZGVkIGJlY2F1c2UgU2FmYXJpIHZlcnNpb25zIDExLjEuMlxuICAgIC8vIHVwIHRvIGFuZCBpbmNsdWRpbmcgMTIuMS54IGhhcyBhIHdpbmRvdy5BYm9ydENvbnRyb2xsZXIgcHJlc2VudCBidXQgc3RpbGxcbiAgICAvLyBkb2VzIE5PVCBjb3JyZWN0bHkgaW1wbGVtZW50IGFib3J0YWJsZSBmZXRjaDpcbiAgICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc0OTgwI2MyXG5cblxuICAgIHJldHVybiB0eXBlb2Ygc2VsZi5SZXF1ZXN0ID09PSAnZnVuY3Rpb24nICYmICFzZWxmLlJlcXVlc3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KCdzaWduYWwnKSB8fCAhc2VsZi5BYm9ydENvbnRyb2xsZXI7XG4gIH1cblxuICAoZnVuY3Rpb24gKHNlbGYpIHtcblxuICAgIGlmICghcG9seWZpbGxOZWVkZWQoc2VsZikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZWxmLkFib3J0Q29udHJvbGxlciA9IEFib3J0Q29udHJvbGxlcjtcbiAgICBzZWxmLkFib3J0U2lnbmFsID0gQWJvcnRTaWduYWw7XG4gIH0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiBnbG9iYWwpO1xuXG59KSkpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKFN0cmluZyhpdCkgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcbiIsInZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZScpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcblxudmFyIFVOU0NPUEFCTEVTID0gd2VsbEtub3duU3ltYm9sKCd1bnNjb3BhYmxlcycpO1xudmFyIEFycmF5UHJvdG90eXBlID0gQXJyYXkucHJvdG90eXBlO1xuXG4vLyBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQHVuc2NvcGFibGVzXG5pZiAoQXJyYXlQcm90b3R5cGVbVU5TQ09QQUJMRVNdID09IHVuZGVmaW5lZCkge1xuICBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKEFycmF5UHJvdG90eXBlLCBVTlNDT1BBQkxFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogY3JlYXRlKG51bGwpXG4gIH0pO1xufVxuXG4vLyBhZGQgYSBrZXkgdG8gQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgQXJyYXlQcm90b3R5cGVbVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoU3RyaW5nKGl0KSArICcgaXMgbm90IGFuIG9iamVjdCcpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCJ2YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUueyBpbmRleE9mLCBpbmNsdWRlcyB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgIGlmICgoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykgJiYgT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmNsdWRlc2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xuICBpbmNsdWRlczogY3JlYXRlTWV0aG9kKHRydWUpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2ZgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5kZXhvZlxuICBpbmRleE9mOiBjcmVhdGVNZXRob2QoZmFsc2UpXG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcblxuLy8gYEFycmF5U3BlY2llc0NyZWF0ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheXNwZWNpZXNjcmVhdGVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9yaWdpbmFsQXJyYXksIGxlbmd0aCkge1xuICB2YXIgQztcbiAgaWYgKGlzQXJyYXkob3JpZ2luYWxBcnJheSkpIHtcbiAgICBDID0gb3JpZ2luYWxBcnJheS5jb25zdHJ1Y3RvcjtcbiAgICAvLyBjcm9zcy1yZWFsbSBmYWxsYmFja1xuICAgIGlmICh0eXBlb2YgQyA9PSAnZnVuY3Rpb24nICYmIChDID09PSBBcnJheSB8fCBpc0FycmF5KEMucHJvdG90eXBlKSkpIEMgPSB1bmRlZmluZWQ7XG4gICAgZWxzZSBpZiAoaXNPYmplY3QoQykpIHtcbiAgICAgIEMgPSBDW1NQRUNJRVNdO1xuICAgICAgaWYgKEMgPT09IG51bGwpIEMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9IHJldHVybiBuZXcgKEMgPT09IHVuZGVmaW5lZCA/IEFycmF5IDogQykobGVuZ3RoID09PSAwID8gMCA6IGxlbmd0aCk7XG59O1xuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciBvd25LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL293bi1rZXlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG4gIHZhciBrZXlzID0gb3duS2V5cyhzb3VyY2UpO1xuICB2YXIgZGVmaW5lUHJvcGVydHkgPSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mO1xuICB2YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlLmY7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIGlmICghaGFzKHRhcmdldCwga2V5KSkgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICB9XG59O1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIGtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAxLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KVsxXSAhPSA3O1xufSk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgZG9jdW1lbnQgPSBnbG9iYWwuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBFWElTVFMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBFWElTVFMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsIi8vIElFOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSBbXG4gICdjb25zdHJ1Y3RvcicsXG4gICdoYXNPd25Qcm9wZXJ0eScsXG4gICdpc1Byb3RvdHlwZU9mJyxcbiAgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJyxcbiAgJ3RvTG9jYWxlU3RyaW5nJyxcbiAgJ3RvU3RyaW5nJyxcbiAgJ3ZhbHVlT2YnXG5dO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpLmY7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG52YXIgc2V0R2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1nbG9iYWwnKTtcbnZhciBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcHktY29uc3RydWN0b3ItcHJvcGVydGllcycpO1xudmFyIGlzRm9yY2VkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWZvcmNlZCcpO1xuXG4vKlxuICBvcHRpb25zLnRhcmdldCAgICAgIC0gbmFtZSBvZiB0aGUgdGFyZ2V0IG9iamVjdFxuICBvcHRpb25zLmdsb2JhbCAgICAgIC0gdGFyZ2V0IGlzIHRoZSBnbG9iYWwgb2JqZWN0XG4gIG9wdGlvbnMuc3RhdCAgICAgICAgLSBleHBvcnQgYXMgc3RhdGljIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucHJvdG8gICAgICAgLSBleHBvcnQgYXMgcHJvdG90eXBlIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucmVhbCAgICAgICAgLSByZWFsIHByb3RvdHlwZSBtZXRob2QgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLmZvcmNlZCAgICAgIC0gZXhwb3J0IGV2ZW4gaWYgdGhlIG5hdGl2ZSBmZWF0dXJlIGlzIGF2YWlsYWJsZVxuICBvcHRpb25zLmJpbmQgICAgICAgIC0gYmluZCBtZXRob2RzIHRvIHRoZSB0YXJnZXQsIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy53cmFwICAgICAgICAtIHdyYXAgY29uc3RydWN0b3JzIHRvIHByZXZlbnRpbmcgZ2xvYmFsIHBvbGx1dGlvbiwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLnVuc2FmZSAgICAgIC0gdXNlIHRoZSBzaW1wbGUgYXNzaWdubWVudCBvZiBwcm9wZXJ0eSBpbnN0ZWFkIG9mIGRlbGV0ZSArIGRlZmluZVByb3BlcnR5XG4gIG9wdGlvbnMuc2hhbSAgICAgICAgLSBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gIG9wdGlvbnMuZW51bWVyYWJsZSAgLSBleHBvcnQgYXMgZW51bWVyYWJsZSBwcm9wZXJ0eVxuICBvcHRpb25zLm5vVGFyZ2V0R2V0IC0gcHJldmVudCBjYWxsaW5nIGEgZ2V0dGVyIG9uIHRhcmdldFxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9wdGlvbnMsIHNvdXJjZSkge1xuICB2YXIgVEFSR0VUID0gb3B0aW9ucy50YXJnZXQ7XG4gIHZhciBHTE9CQUwgPSBvcHRpb25zLmdsb2JhbDtcbiAgdmFyIFNUQVRJQyA9IG9wdGlvbnMuc3RhdDtcbiAgdmFyIEZPUkNFRCwgdGFyZ2V0LCBrZXksIHRhcmdldFByb3BlcnR5LCBzb3VyY2VQcm9wZXJ0eSwgZGVzY3JpcHRvcjtcbiAgaWYgKEdMT0JBTCkge1xuICAgIHRhcmdldCA9IGdsb2JhbDtcbiAgfSBlbHNlIGlmIChTVEFUSUMpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxbVEFSR0VUXSB8fCBzZXRHbG9iYWwoVEFSR0VULCB7fSk7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0ID0gKGdsb2JhbFtUQVJHRVRdIHx8IHt9KS5wcm90b3R5cGU7XG4gIH1cbiAgaWYgKHRhcmdldCkgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgc291cmNlUHJvcGVydHkgPSBzb3VyY2Vba2V5XTtcbiAgICBpZiAob3B0aW9ucy5ub1RhcmdldEdldCkge1xuICAgICAgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XG4gICAgICB0YXJnZXRQcm9wZXJ0eSA9IGRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci52YWx1ZTtcbiAgICB9IGVsc2UgdGFyZ2V0UHJvcGVydHkgPSB0YXJnZXRba2V5XTtcbiAgICBGT1JDRUQgPSBpc0ZvcmNlZChHTE9CQUwgPyBrZXkgOiBUQVJHRVQgKyAoU1RBVElDID8gJy4nIDogJyMnKSArIGtleSwgb3B0aW9ucy5mb3JjZWQpO1xuICAgIC8vIGNvbnRhaW5lZCBpbiB0YXJnZXRcbiAgICBpZiAoIUZPUkNFRCAmJiB0YXJnZXRQcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodHlwZW9mIHNvdXJjZVByb3BlcnR5ID09PSB0eXBlb2YgdGFyZ2V0UHJvcGVydHkpIGNvbnRpbnVlO1xuICAgICAgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyhzb3VyY2VQcm9wZXJ0eSwgdGFyZ2V0UHJvcGVydHkpO1xuICAgIH1cbiAgICAvLyBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gICAgaWYgKG9wdGlvbnMuc2hhbSB8fCAodGFyZ2V0UHJvcGVydHkgJiYgdGFyZ2V0UHJvcGVydHkuc2hhbSkpIHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShzb3VyY2VQcm9wZXJ0eSwgJ3NoYW0nLCB0cnVlKTtcbiAgICB9XG4gICAgLy8gZXh0ZW5kIGdsb2JhbFxuICAgIHJlZGVmaW5lKHRhcmdldCwga2V5LCBzb3VyY2VQcm9wZXJ0eSwgb3B0aW9ucyk7XG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtY29udGV4dCcpO1xuXG4vLyBgRmxhdHRlbkludG9BcnJheWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLWZsYXRNYXAvI3NlYy1GbGF0dGVuSW50b0FycmF5XG52YXIgZmxhdHRlbkludG9BcnJheSA9IGZ1bmN0aW9uICh0YXJnZXQsIG9yaWdpbmFsLCBzb3VyY2UsIHNvdXJjZUxlbiwgc3RhcnQsIGRlcHRoLCBtYXBwZXIsIHRoaXNBcmcpIHtcbiAgdmFyIHRhcmdldEluZGV4ID0gc3RhcnQ7XG4gIHZhciBzb3VyY2VJbmRleCA9IDA7XG4gIHZhciBtYXBGbiA9IG1hcHBlciA/IGJpbmQobWFwcGVyLCB0aGlzQXJnLCAzKSA6IGZhbHNlO1xuICB2YXIgZWxlbWVudDtcblxuICB3aGlsZSAoc291cmNlSW5kZXggPCBzb3VyY2VMZW4pIHtcbiAgICBpZiAoc291cmNlSW5kZXggaW4gc291cmNlKSB7XG4gICAgICBlbGVtZW50ID0gbWFwRm4gPyBtYXBGbihzb3VyY2Vbc291cmNlSW5kZXhdLCBzb3VyY2VJbmRleCwgb3JpZ2luYWwpIDogc291cmNlW3NvdXJjZUluZGV4XTtcblxuICAgICAgaWYgKGRlcHRoID4gMCAmJiBpc0FycmF5KGVsZW1lbnQpKSB7XG4gICAgICAgIHRhcmdldEluZGV4ID0gZmxhdHRlbkludG9BcnJheSh0YXJnZXQsIG9yaWdpbmFsLCBlbGVtZW50LCB0b0xlbmd0aChlbGVtZW50Lmxlbmd0aCksIHRhcmdldEluZGV4LCBkZXB0aCAtIDEpIC0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0YXJnZXRJbmRleCA+PSAweDFGRkZGRkZGRkZGRkZGKSB0aHJvdyBUeXBlRXJyb3IoJ0V4Y2VlZCB0aGUgYWNjZXB0YWJsZSBhcnJheSBsZW5ndGgnKTtcbiAgICAgICAgdGFyZ2V0W3RhcmdldEluZGV4XSA9IGVsZW1lbnQ7XG4gICAgICB9XG5cbiAgICAgIHRhcmdldEluZGV4Kys7XG4gICAgfVxuICAgIHNvdXJjZUluZGV4Kys7XG4gIH1cbiAgcmV0dXJuIHRhcmdldEluZGV4O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmbGF0dGVuSW50b0FycmF5O1xuIiwidmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWZ1bmN0aW9uJyk7XG5cbi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCk7XG4gICAgfTtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCJ2YXIgcGF0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9wYXRoJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG52YXIgYUZ1bmN0aW9uID0gZnVuY3Rpb24gKHZhcmlhYmxlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFyaWFibGUgPT0gJ2Z1bmN0aW9uJyA/IHZhcmlhYmxlIDogdW5kZWZpbmVkO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZXNwYWNlLCBtZXRob2QpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gYUZ1bmN0aW9uKHBhdGhbbmFtZXNwYWNlXSkgfHwgYUZ1bmN0aW9uKGdsb2JhbFtuYW1lc3BhY2VdKVxuICAgIDogcGF0aFtuYW1lc3BhY2VdICYmIHBhdGhbbmFtZXNwYWNlXVttZXRob2RdIHx8IGdsb2JhbFtuYW1lc3BhY2VdICYmIGdsb2JhbFtuYW1lc3BhY2VdW21ldGhvZF07XG59O1xuIiwidmFyIGNoZWNrID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAmJiBpdC5NYXRoID09IE1hdGggJiYgaXQ7XG59O1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxubW9kdWxlLmV4cG9ydHMgPVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgY2hlY2sodHlwZW9mIGdsb2JhbFRoaXMgPT0gJ29iamVjdCcgJiYgZ2xvYmFsVGhpcykgfHxcbiAgY2hlY2sodHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cpIHx8XG4gIGNoZWNrKHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYpIHx8XG4gIGNoZWNrKHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsKSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pKCkgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge307XG4iLCJ2YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRCdWlsdEluKCdkb2N1bWVudCcsICdkb2N1bWVudEVsZW1lbnQnKTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xuXG4vLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGNyZWF0ZUVsZW1lbnQoJ2RpdicpLCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH1cbiAgfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbnZhciBzcGxpdCA9ICcnLnNwbGl0O1xuXG4vLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xubW9kdWxlLmV4cG9ydHMgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIHRocm93cyBhbiBlcnJvciBpbiByaGlubywgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3JoaW5vL2lzc3Vlcy8zNDZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICByZXR1cm4gIU9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApO1xufSkgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNsYXNzb2YoaXQpID09ICdTdHJpbmcnID8gc3BsaXQuY2FsbChpdCwgJycpIDogT2JqZWN0KGl0KTtcbn0gOiBPYmplY3Q7XG4iLCJ2YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG5cbnZhciBmdW5jdGlvblRvU3RyaW5nID0gRnVuY3Rpb24udG9TdHJpbmc7XG5cbi8vIHRoaXMgaGVscGVyIGJyb2tlbiBpbiBgMy40LjEtMy40LjRgLCBzbyB3ZSBjYW4ndCB1c2UgYHNoYXJlZGAgaGVscGVyXG5pZiAodHlwZW9mIHN0b3JlLmluc3BlY3RTb3VyY2UgIT0gJ2Z1bmN0aW9uJykge1xuICBzdG9yZS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uVG9TdHJpbmcuY2FsbChpdCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmUuaW5zcGVjdFNvdXJjZTtcbiIsInZhciBOQVRJVkVfV0VBS19NQVAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmF0aXZlLXdlYWstbWFwJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBvYmplY3RIYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG52YXIgV2Vha01hcCA9IGdsb2JhbC5XZWFrTWFwO1xudmFyIHNldCwgZ2V0LCBoYXM7XG5cbnZhciBlbmZvcmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBoYXMoaXQpID8gZ2V0KGl0KSA6IHNldChpdCwge30pO1xufTtcblxudmFyIGdldHRlckZvciA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaXQpIHtcbiAgICB2YXIgc3RhdGU7XG4gICAgaWYgKCFpc09iamVjdChpdCkgfHwgKHN0YXRlID0gZ2V0KGl0KSkudHlwZSAhPT0gVFlQRSkge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCdJbmNvbXBhdGlibGUgcmVjZWl2ZXIsICcgKyBUWVBFICsgJyByZXF1aXJlZCcpO1xuICAgIH0gcmV0dXJuIHN0YXRlO1xuICB9O1xufTtcblxuaWYgKE5BVElWRV9XRUFLX01BUCkge1xuICB2YXIgc3RvcmUgPSBzaGFyZWQuc3RhdGUgfHwgKHNoYXJlZC5zdGF0ZSA9IG5ldyBXZWFrTWFwKCkpO1xuICB2YXIgd21nZXQgPSBzdG9yZS5nZXQ7XG4gIHZhciB3bWhhcyA9IHN0b3JlLmhhcztcbiAgdmFyIHdtc2V0ID0gc3RvcmUuc2V0O1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgbWV0YWRhdGEuZmFjYWRlID0gaXQ7XG4gICAgd21zZXQuY2FsbChzdG9yZSwgaXQsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiB3bWdldC5jYWxsKHN0b3JlLCBpdCkgfHwge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiB3bWhhcy5jYWxsKHN0b3JlLCBpdCk7XG4gIH07XG59IGVsc2Uge1xuICB2YXIgU1RBVEUgPSBzaGFyZWRLZXkoJ3N0YXRlJyk7XG4gIGhpZGRlbktleXNbU1RBVEVdID0gdHJ1ZTtcbiAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShpdCwgU1RBVEUsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBvYmplY3RIYXMoaXQsIFNUQVRFKSA/IGl0W1NUQVRFXSA6IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gb2JqZWN0SGFzKGl0LCBTVEFURSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldCxcbiAgZ2V0OiBnZXQsXG4gIGhhczogaGFzLFxuICBlbmZvcmNlOiBlbmZvcmNlLFxuICBnZXR0ZXJGb3I6IGdldHRlckZvclxufTtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbi8vIGBJc0FycmF5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWlzYXJyYXlcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZykge1xuICByZXR1cm4gY2xhc3NvZihhcmcpID09ICdBcnJheSc7XG59O1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbnZhciByZXBsYWNlbWVudCA9IC8jfFxcLnByb3RvdHlwZVxcLi87XG5cbnZhciBpc0ZvcmNlZCA9IGZ1bmN0aW9uIChmZWF0dXJlLCBkZXRlY3Rpb24pIHtcbiAgdmFyIHZhbHVlID0gZGF0YVtub3JtYWxpemUoZmVhdHVyZSldO1xuICByZXR1cm4gdmFsdWUgPT0gUE9MWUZJTEwgPyB0cnVlXG4gICAgOiB2YWx1ZSA9PSBOQVRJVkUgPyBmYWxzZVxuICAgIDogdHlwZW9mIGRldGVjdGlvbiA9PSAnZnVuY3Rpb24nID8gZmFpbHMoZGV0ZWN0aW9uKVxuICAgIDogISFkZXRlY3Rpb247XG59O1xuXG52YXIgbm9ybWFsaXplID0gaXNGb3JjZWQubm9ybWFsaXplID0gZnVuY3Rpb24gKHN0cmluZykge1xuICByZXR1cm4gU3RyaW5nKHN0cmluZykucmVwbGFjZShyZXBsYWNlbWVudCwgJy4nKS50b0xvd2VyQ2FzZSgpO1xufTtcblxudmFyIGRhdGEgPSBpc0ZvcmNlZC5kYXRhID0ge307XG52YXIgTkFUSVZFID0gaXNGb3JjZWQuTkFUSVZFID0gJ04nO1xudmFyIFBPTFlGSUxMID0gaXNGb3JjZWQuUE9MWUZJTEwgPSAnUCc7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGb3JjZWQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAhIU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gQ2hyb21lIDM4IFN5bWJvbCBoYXMgaW5jb3JyZWN0IHRvU3RyaW5nIGNvbnZlcnNpb25cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHJldHVybiAhU3RyaW5nKFN5bWJvbCgpKTtcbn0pO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpbnNwZWN0U291cmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luc3BlY3Qtc291cmNlJyk7XG5cbnZhciBXZWFrTWFwID0gZ2xvYmFsLldlYWtNYXA7XG5cbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgJiYgL25hdGl2ZSBjb2RlLy50ZXN0KGluc3BlY3RTb3VyY2UoV2Vha01hcCkpO1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGRlZmluZVByb3BlcnRpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcbnZhciBodG1sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2h0bWwnKTtcbnZhciBkb2N1bWVudENyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xuXG52YXIgR1QgPSAnPic7XG52YXIgTFQgPSAnPCc7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgU0NSSVBUID0gJ3NjcmlwdCc7XG52YXIgSUVfUFJPVE8gPSBzaGFyZWRLZXkoJ0lFX1BST1RPJyk7XG5cbnZhciBFbXB0eUNvbnN0cnVjdG9yID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xuXG52YXIgc2NyaXB0VGFnID0gZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgcmV0dXJuIExUICsgU0NSSVBUICsgR1QgKyBjb250ZW50ICsgTFQgKyAnLycgKyBTQ1JJUFQgKyBHVDtcbn07XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBBY3RpdmVYIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgTnVsbFByb3RvT2JqZWN0VmlhQWN0aXZlWCA9IGZ1bmN0aW9uIChhY3RpdmVYRG9jdW1lbnQpIHtcbiAgYWN0aXZlWERvY3VtZW50LndyaXRlKHNjcmlwdFRhZygnJykpO1xuICBhY3RpdmVYRG9jdW1lbnQuY2xvc2UoKTtcbiAgdmFyIHRlbXAgPSBhY3RpdmVYRG9jdW1lbnQucGFyZW50V2luZG93Lk9iamVjdDtcbiAgYWN0aXZlWERvY3VtZW50ID0gbnVsbDsgLy8gYXZvaWQgbWVtb3J5IGxlYWtcbiAgcmV0dXJuIHRlbXA7XG59O1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgTnVsbFByb3RvT2JqZWN0VmlhSUZyYW1lID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gZG9jdW1lbnRDcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgdmFyIEpTID0gJ2phdmEnICsgU0NSSVBUICsgJzonO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBodG1sLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy80NzVcbiAgaWZyYW1lLnNyYyA9IFN0cmluZyhKUyk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUoc2NyaXB0VGFnKCdkb2N1bWVudC5GPU9iamVjdCcpKTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgcmV0dXJuIGlmcmFtZURvY3VtZW50LkY7XG59O1xuXG4vLyBDaGVjayBmb3IgZG9jdW1lbnQuZG9tYWluIGFuZCBhY3RpdmUgeCBzdXBwb3J0XG4vLyBObyBuZWVkIHRvIHVzZSBhY3RpdmUgeCBhcHByb2FjaCB3aGVuIGRvY3VtZW50LmRvbWFpbiBpcyBub3Qgc2V0XG4vLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2VzLXNoaW1zL2VzNS1zaGltL2lzc3Vlcy8xNTBcbi8vIHZhcmlhdGlvbiBvZiBodHRwczovL2dpdGh1Yi5jb20va2l0Y2FtYnJpZGdlL2VzNS1zaGltL2NvbW1pdC80ZjczOGFjMDY2MzQ2XG4vLyBhdm9pZCBJRSBHQyBidWdcbnZhciBhY3RpdmVYRG9jdW1lbnQ7XG52YXIgTnVsbFByb3RvT2JqZWN0ID0gZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIC8qIGdsb2JhbCBBY3RpdmVYT2JqZWN0ICovXG4gICAgYWN0aXZlWERvY3VtZW50ID0gZG9jdW1lbnQuZG9tYWluICYmIG5ldyBBY3RpdmVYT2JqZWN0KCdodG1sZmlsZScpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBpZ25vcmUgKi8gfVxuICBOdWxsUHJvdG9PYmplY3QgPSBhY3RpdmVYRG9jdW1lbnQgPyBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYKGFjdGl2ZVhEb2N1bWVudCkgOiBOdWxsUHJvdG9PYmplY3RWaWFJRnJhbWUoKTtcbiAgdmFyIGxlbmd0aCA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSBkZWxldGUgTnVsbFByb3RvT2JqZWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbbGVuZ3RoXV07XG4gIHJldHVybiBOdWxsUHJvdG9PYmplY3QoKTtcbn07XG5cbmhpZGRlbktleXNbSUVfUFJPVE9dID0gdHJ1ZTtcblxuLy8gYE9iamVjdC5jcmVhdGVgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmNyZWF0ZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlDb25zdHJ1Y3RvcltQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5Q29uc3RydWN0b3IoKTtcbiAgICBFbXB0eUNvbnN0cnVjdG9yW1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IE51bGxQcm90b09iamVjdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZGVmaW5lUHJvcGVydGllcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBvYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzJyk7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydGllc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydGllc1xubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IG9iamVjdEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKE8sIGtleSA9IGtleXNbaW5kZXgrK10sIFByb3BlcnRpZXNba2V5XSk7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG5cbnZhciBuYXRpdmVEZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydHlcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gbmF0aXZlRGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIG5hdGl2ZURlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlJyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG5cbnZhciBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yXG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/IG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvciA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0luZGV4ZWRPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhcyhPLCBQKSkgcmV0dXJuIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcighcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG4iLCJ2YXIgaW50ZXJuYWxPYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xuXG52YXIgaGlkZGVuS2V5cyA9IGVudW1CdWdLZXlzLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5bmFtZXNcbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gaW50ZXJuYWxPYmplY3RLZXlzKE8sIGhpZGRlbktleXMpO1xufTtcbiIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4iLCJ2YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGluZGV4T2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMnKS5pbmRleE9mO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgIWhhcyhoaWRkZW5LZXlzLCBrZXkpICYmIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+aW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsInZhciBpbnRlcm5hbE9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG5cbi8vIGBPYmplY3Qua2V5c2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3Qua2V5c1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuIGludGVybmFsT2JqZWN0S2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIG5hdGl2ZVByb3BlcnR5SXNFbnVtZXJhYmxlID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gTmFzaG9ybiB+IEpESzggYnVnXG52YXIgTkFTSE9STl9CVUcgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgJiYgIW5hdGl2ZVByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoeyAxOiAyIH0sIDEpO1xuXG4vLyBgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZWAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnByb3BlcnR5aXNlbnVtZXJhYmxlXG5leHBvcnRzLmYgPSBOQVNIT1JOX0JVRyA/IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKFYpIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhpcywgVik7XG4gIHJldHVybiAhIWRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci5lbnVtZXJhYmxlO1xufSA6IG5hdGl2ZVByb3BlcnR5SXNFbnVtZXJhYmxlO1xuIiwidmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG5cbi8vIGFsbCBvYmplY3Qga2V5cywgaW5jbHVkZXMgbm9uLWVudW1lcmFibGUgYW5kIHN5bWJvbHNcbm1vZHVsZS5leHBvcnRzID0gZ2V0QnVpbHRJbignUmVmbGVjdCcsICdvd25LZXlzJykgfHwgZnVuY3Rpb24gb3duS2V5cyhpdCkge1xuICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUuZihhbk9iamVjdChpdCkpO1xuICB2YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlLmY7XG4gIHJldHVybiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPyBrZXlzLmNvbmNhdChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpKSA6IGtleXM7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBnbG9iYWw7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgc2V0R2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1nbG9iYWwnKTtcbnZhciBpbnNwZWN0U291cmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luc3BlY3Qtc291cmNlJyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xuXG52YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0O1xudmFyIGVuZm9yY2VJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5lbmZvcmNlO1xudmFyIFRFTVBMQVRFID0gU3RyaW5nKFN0cmluZykuc3BsaXQoJ1N0cmluZycpO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuICB2YXIgdW5zYWZlID0gb3B0aW9ucyA/ICEhb3B0aW9ucy51bnNhZmUgOiBmYWxzZTtcbiAgdmFyIHNpbXBsZSA9IG9wdGlvbnMgPyAhIW9wdGlvbnMuZW51bWVyYWJsZSA6IGZhbHNlO1xuICB2YXIgbm9UYXJnZXRHZXQgPSBvcHRpb25zID8gISFvcHRpb25zLm5vVGFyZ2V0R2V0IDogZmFsc2U7XG4gIHZhciBzdGF0ZTtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKHR5cGVvZiBrZXkgPT0gJ3N0cmluZycgJiYgIWhhcyh2YWx1ZSwgJ25hbWUnKSkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHZhbHVlLCAnbmFtZScsIGtleSk7XG4gICAgfVxuICAgIHN0YXRlID0gZW5mb3JjZUludGVybmFsU3RhdGUodmFsdWUpO1xuICAgIGlmICghc3RhdGUuc291cmNlKSB7XG4gICAgICBzdGF0ZS5zb3VyY2UgPSBURU1QTEFURS5qb2luKHR5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyBrZXkgOiAnJyk7XG4gICAgfVxuICB9XG4gIGlmIChPID09PSBnbG9iYWwpIHtcbiAgICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgICBlbHNlIHNldEdsb2JhbChrZXksIHZhbHVlKTtcbiAgICByZXR1cm47XG4gIH0gZWxzZSBpZiAoIXVuc2FmZSkge1xuICAgIGRlbGV0ZSBPW2tleV07XG4gIH0gZWxzZSBpZiAoIW5vVGFyZ2V0R2V0ICYmIE9ba2V5XSkge1xuICAgIHNpbXBsZSA9IHRydWU7XG4gIH1cbiAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG4gIGVsc2UgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KE8sIGtleSwgdmFsdWUpO1xuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG59KShGdW5jdGlvbi5wcm90b3R5cGUsICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpLnNvdXJjZSB8fCBpbnNwZWN0U291cmNlKHRoaXMpO1xufSk7XG4iLCIvLyBgUmVxdWlyZU9iamVjdENvZXJjaWJsZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZXF1aXJlb2JqZWN0Y29lcmNpYmxlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KGdsb2JhbCwga2V5LCB2YWx1ZSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZ2xvYmFsW2tleV0gPSB2YWx1ZTtcbiAgfSByZXR1cm4gdmFsdWU7XG59O1xuIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG5cbnZhciBrZXlzID0gc2hhcmVkKCdrZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4ga2V5c1trZXldIHx8IChrZXlzW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBzZXRHbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LWdsb2JhbCcpO1xuXG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCBzZXRHbG9iYWwoU0hBUkVELCB7fSk7XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmU7XG4iLCJ2YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG52YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDoge30pO1xufSkoJ3ZlcnNpb25zJywgW10pLnB1c2goe1xuICB2ZXJzaW9uOiAnMy43LjAnLFxuICBtb2RlOiBJU19QVVJFID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMjAgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknXG59KTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlcicpO1xuXG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIEhlbHBlciBmb3IgYSBwb3B1bGFyIHJlcGVhdGluZyBjYXNlIG9mIHRoZSBzcGVjOlxuLy8gTGV0IGludGVnZXIgYmUgPyBUb0ludGVnZXIoaW5kZXgpLlxuLy8gSWYgaW50ZWdlciA8IDAsIGxldCByZXN1bHQgYmUgbWF4KChsZW5ndGggKyBpbnRlZ2VyKSwgMCk7IGVsc2UgbGV0IHJlc3VsdCBiZSBtaW4oaW50ZWdlciwgbGVuZ3RoKS5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgdmFyIGludGVnZXIgPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW50ZWdlciA8IDAgPyBtYXgoaW50ZWdlciArIGxlbmd0aCwgMCkgOiBtaW4oaW50ZWdlciwgbGVuZ3RoKTtcbn07XG4iLCIvLyB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSW5kZXhlZE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGl0KSk7XG59O1xuIiwidmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG4vLyBgVG9JbnRlZ2VyYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXRvaW50ZWdlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGlzTmFOKGFyZ3VtZW50ID0gK2FyZ3VtZW50KSA/IDAgOiAoYXJndW1lbnQgPiAwID8gZmxvb3IgOiBjZWlsKShhcmd1bWVudCk7XG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyJyk7XG5cbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gYFRvTGVuZ3RoYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXRvbGVuZ3RoXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gYXJndW1lbnQgPiAwID8gbWluKHRvSW50ZWdlcihhcmd1bWVudCksIDB4MUZGRkZGRkZGRkZGRkYpIDogMDsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsInZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG4vLyBgVG9PYmplY3RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdG9vYmplY3Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBPYmplY3QocmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudCkpO1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxuLy8gYFRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXRvcHJpbWl0aXZlXG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBQUkVGRVJSRURfU1RSSU5HKSB7XG4gIGlmICghaXNPYmplY3QoaW5wdXQpKSByZXR1cm4gaW5wdXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUFJFRkVSUkVEX1NUUklORyAmJiB0eXBlb2YgKGZuID0gaW5wdXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpbnB1dC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUFJFRkVSUkVEX1NUUklORyAmJiB0eXBlb2YgKGZuID0gaW5wdXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsInZhciBpZCA9IDA7XG52YXIgcG9zdGZpeCA9IE1hdGgucmFuZG9tKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnICsgU3RyaW5nKGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXkpICsgJylfJyArICgrK2lkICsgcG9zdGZpeCkudG9TdHJpbmcoMzYpO1xufTtcbiIsInZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25hdGl2ZS1zeW1ib2wnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfU1lNQk9MXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAmJiAhU3ltYm9sLnNoYW1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCc7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmF0aXZlLXN5bWJvbCcpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbnZhciBXZWxsS25vd25TeW1ib2xzU3RvcmUgPSBzaGFyZWQoJ3drcycpO1xudmFyIFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgY3JlYXRlV2VsbEtub3duU3ltYm9sID0gVVNFX1NZTUJPTF9BU19VSUQgPyBTeW1ib2wgOiBTeW1ib2wgJiYgU3ltYm9sLndpdGhvdXRTZXR0ZXIgfHwgdWlkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGlmICghaGFzKFdlbGxLbm93blN5bWJvbHNTdG9yZSwgbmFtZSkpIHtcbiAgICBpZiAoTkFUSVZFX1NZTUJPTCAmJiBoYXMoU3ltYm9sLCBuYW1lKSkgV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdID0gU3ltYm9sW25hbWVdO1xuICAgIGVsc2UgV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdID0gY3JlYXRlV2VsbEtub3duU3ltYm9sKCdTeW1ib2wuJyArIG5hbWUpO1xuICB9IHJldHVybiBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZmxhdHRlbkludG9BcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mbGF0dGVuLWludG8tYXJyYXknKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlcicpO1xudmFyIGFycmF5U3BlY2llc0NyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZsYXRgIG1ldGhvZFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtZmxhdE1hcFxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUgfSwge1xuICBmbGF0OiBmdW5jdGlvbiBmbGF0KC8qIGRlcHRoQXJnID0gMSAqLykge1xuICAgIHZhciBkZXB0aEFyZyA9IGFyZ3VtZW50cy5sZW5ndGggPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQ7XG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcbiAgICB2YXIgc291cmNlTGVuID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBBID0gYXJyYXlTcGVjaWVzQ3JlYXRlKE8sIDApO1xuICAgIEEubGVuZ3RoID0gZmxhdHRlbkludG9BcnJheShBLCBPLCBPLCBzb3VyY2VMZW4sIDAsIGRlcHRoQXJnID09PSB1bmRlZmluZWQgPyAxIDogdG9JbnRlZ2VyKGRlcHRoQXJnKSk7XG4gICAgcmV0dXJuIEE7XG4gIH1cbn0pO1xuIiwiLy8gdGhpcyBtZXRob2Qgd2FzIGFkZGVkIHRvIHVuc2NvcGFibGVzIGFmdGVyIGltcGxlbWVudGF0aW9uXG4vLyBpbiBwb3B1bGFyIGVuZ2luZXMsIHNvIGl0J3MgbW92ZWQgdG8gYSBzZXBhcmF0ZSBtb2R1bGVcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcycpO1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdmbGF0Jyk7XG4iLCJ2YXIgX19zZWxmX18gPSAoZnVuY3Rpb24gKHJvb3QpIHtcbmZ1bmN0aW9uIEYoKSB7XG50aGlzLmZldGNoID0gZmFsc2U7XG50aGlzLkRPTUV4Y2VwdGlvbiA9IHJvb3QuRE9NRXhjZXB0aW9uXG59XG5GLnByb3RvdHlwZSA9IHJvb3Q7XG5yZXR1cm4gbmV3IEYoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzKTtcbihmdW5jdGlvbihzZWxmKSB7XG5cbnZhciBpcnJlbGV2YW50ID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG5cbiAgdmFyIHN1cHBvcnQgPSB7XG4gICAgc2VhcmNoUGFyYW1zOiAnVVJMU2VhcmNoUGFyYW1zJyBpbiBzZWxmLFxuICAgIGl0ZXJhYmxlOiAnU3ltYm9sJyBpbiBzZWxmICYmICdpdGVyYXRvcicgaW4gU3ltYm9sLFxuICAgIGJsb2I6XG4gICAgICAnRmlsZVJlYWRlcicgaW4gc2VsZiAmJlxuICAgICAgJ0Jsb2InIGluIHNlbGYgJiZcbiAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBuZXcgQmxvYigpO1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSkoKSxcbiAgICBmb3JtRGF0YTogJ0Zvcm1EYXRhJyBpbiBzZWxmLFxuICAgIGFycmF5QnVmZmVyOiAnQXJyYXlCdWZmZXInIGluIHNlbGZcbiAgfTtcblxuICBmdW5jdGlvbiBpc0RhdGFWaWV3KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgRGF0YVZpZXcucHJvdG90eXBlLmlzUHJvdG90eXBlT2Yob2JqKVxuICB9XG5cbiAgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIpIHtcbiAgICB2YXIgdmlld0NsYXNzZXMgPSBbXG4gICAgICAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgICAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDMyQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgRmxvYXQ2NEFycmF5XSdcbiAgICBdO1xuXG4gICAgdmFyIGlzQXJyYXlCdWZmZXJWaWV3ID1cbiAgICAgIEFycmF5QnVmZmVyLmlzVmlldyB8fFxuICAgICAgZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmogJiYgdmlld0NsYXNzZXMuaW5kZXhPZihPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSkgPiAtMVxuICAgICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZU5hbWUobmFtZSkge1xuICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIG5hbWUgPSBTdHJpbmcobmFtZSk7XG4gICAgfVxuICAgIGlmICgvW15hLXowLTlcXC0jJCUmJyorLl5fYHx+XS9pLnRlc3QobmFtZSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgY2hhcmFjdGVyIGluIGhlYWRlciBmaWVsZCBuYW1lJylcbiAgICB9XG4gICAgcmV0dXJuIG5hbWUudG9Mb3dlckNhc2UoKVxuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplVmFsdWUodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgdmFsdWUgPSBTdHJpbmcodmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIC8vIEJ1aWxkIGEgZGVzdHJ1Y3RpdmUgaXRlcmF0b3IgZm9yIHRoZSB2YWx1ZSBsaXN0XG4gIGZ1bmN0aW9uIGl0ZXJhdG9yRm9yKGl0ZW1zKSB7XG4gICAgdmFyIGl0ZXJhdG9yID0ge1xuICAgICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGl0ZW1zLnNoaWZ0KCk7XG4gICAgICAgIHJldHVybiB7ZG9uZTogdmFsdWUgPT09IHVuZGVmaW5lZCwgdmFsdWU6IHZhbHVlfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoc3VwcG9ydC5pdGVyYWJsZSkge1xuICAgICAgaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZXJhdG9yXG4gIH1cblxuICBmdW5jdGlvbiBIZWFkZXJzKGhlYWRlcnMpIHtcbiAgICB0aGlzLm1hcCA9IHt9O1xuXG4gICAgaWYgKGhlYWRlcnMgaW5zdGFuY2VvZiBIZWFkZXJzKSB7XG4gICAgICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQobmFtZSwgdmFsdWUpO1xuICAgICAgfSwgdGhpcyk7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGhlYWRlcnMpKSB7XG4gICAgICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24oaGVhZGVyKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKGhlYWRlclswXSwgaGVhZGVyWzFdKTtcbiAgICAgIH0sIHRoaXMpO1xuICAgIH0gZWxzZSBpZiAoaGVhZGVycykge1xuICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaGVhZGVycykuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKG5hbWUsIGhlYWRlcnNbbmFtZV0pO1xuICAgICAgfSwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICBuYW1lID0gbm9ybWFsaXplTmFtZShuYW1lKTtcbiAgICB2YWx1ZSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKTtcbiAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLm1hcFtuYW1lXTtcbiAgICB0aGlzLm1hcFtuYW1lXSA9IG9sZFZhbHVlID8gb2xkVmFsdWUgKyAnLCAnICsgdmFsdWUgOiB2YWx1ZTtcbiAgfTtcblxuICBIZWFkZXJzLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMubWFwW25vcm1hbGl6ZU5hbWUobmFtZSldO1xuICB9O1xuXG4gIEhlYWRlcnMucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBuYW1lID0gbm9ybWFsaXplTmFtZShuYW1lKTtcbiAgICByZXR1cm4gdGhpcy5oYXMobmFtZSkgPyB0aGlzLm1hcFtuYW1lXSA6IG51bGxcbiAgfTtcblxuICBIZWFkZXJzLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwLmhhc093blByb3BlcnR5KG5vcm1hbGl6ZU5hbWUobmFtZSkpXG4gIH07XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICB0aGlzLm1hcFtub3JtYWxpemVOYW1lKG5hbWUpXSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKTtcbiAgfTtcblxuICBIZWFkZXJzLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24oY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMubWFwKSB7XG4gICAgICBpZiAodGhpcy5tYXAuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB0aGlzLm1hcFtuYW1lXSwgbmFtZSwgdGhpcyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIEhlYWRlcnMucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgIGl0ZW1zLnB1c2gobmFtZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9O1xuXG4gIEhlYWRlcnMucHJvdG90eXBlLnZhbHVlcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdO1xuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgaXRlbXMucHVzaCh2YWx1ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9O1xuXG4gIEhlYWRlcnMucHJvdG90eXBlLmVudHJpZXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgIGl0ZW1zLnB1c2goW25hbWUsIHZhbHVlXSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9O1xuXG4gIGlmIChzdXBwb3J0Lml0ZXJhYmxlKSB7XG4gICAgSGVhZGVycy5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXSA9IEhlYWRlcnMucHJvdG90eXBlLmVudHJpZXM7XG4gIH1cblxuICBmdW5jdGlvbiBjb25zdW1lZChib2R5KSB7XG4gICAgaWYgKGJvZHkuYm9keVVzZWQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKCdBbHJlYWR5IHJlYWQnKSlcbiAgICB9XG4gICAgYm9keS5ib2R5VXNlZCA9IHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXNvbHZlKHJlYWRlci5yZXN1bHQpO1xuICAgICAgfTtcbiAgICAgIHJlYWRlci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChyZWFkZXIuZXJyb3IpO1xuICAgICAgfTtcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEJsb2JBc0FycmF5QnVmZmVyKGJsb2IpIHtcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICB2YXIgcHJvbWlzZSA9IGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpO1xuICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihibG9iKTtcbiAgICByZXR1cm4gcHJvbWlzZVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEJsb2JBc1RleHQoYmxvYikge1xuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHZhciBwcm9taXNlID0gZmlsZVJlYWRlclJlYWR5KHJlYWRlcik7XG4gICAgcmVhZGVyLnJlYWRBc1RleHQoYmxvYik7XG4gICAgcmV0dXJuIHByb21pc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWRBcnJheUJ1ZmZlckFzVGV4dChidWYpIHtcbiAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1Zik7XG4gICAgdmFyIGNoYXJzID0gbmV3IEFycmF5KHZpZXcubGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmlldy5sZW5ndGg7IGkrKykge1xuICAgICAgY2hhcnNbaV0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHZpZXdbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gY2hhcnMuam9pbignJylcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1ZmZlckNsb25lKGJ1Zikge1xuICAgIGlmIChidWYuc2xpY2UpIHtcbiAgICAgIHJldHVybiBidWYuc2xpY2UoMClcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShidWYuYnl0ZUxlbmd0aCk7XG4gICAgICB2aWV3LnNldChuZXcgVWludDhBcnJheShidWYpKTtcbiAgICAgIHJldHVybiB2aWV3LmJ1ZmZlclxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIEJvZHkoKSB7XG4gICAgdGhpcy5ib2R5VXNlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5faW5pdEJvZHkgPSBmdW5jdGlvbihib2R5KSB7XG4gICAgICB0aGlzLl9ib2R5SW5pdCA9IGJvZHk7XG4gICAgICBpZiAoIWJvZHkpIHtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSAnJztcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGJvZHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keTtcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5ibG9iICYmIEJsb2IucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUJsb2IgPSBib2R5O1xuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmZvcm1EYXRhICYmIEZvcm1EYXRhLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlGb3JtRGF0YSA9IGJvZHk7XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuc2VhcmNoUGFyYW1zICYmIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHkudG9TdHJpbmcoKTtcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlciAmJiBzdXBwb3J0LmJsb2IgJiYgaXNEYXRhVmlldyhib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIgPSBidWZmZXJDbG9uZShib2R5LmJ1ZmZlcik7XG4gICAgICAgIC8vIElFIDEwLTExIGNhbid0IGhhbmRsZSBhIERhdGFWaWV3IGJvZHkuXG4gICAgICAgIHRoaXMuX2JvZHlJbml0ID0gbmV3IEJsb2IoW3RoaXMuX2JvZHlBcnJheUJ1ZmZlcl0pO1xuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyICYmIChBcnJheUJ1ZmZlci5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSB8fCBpc0FycmF5QnVmZmVyVmlldyhib2R5KSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyID0gYnVmZmVyQ2xvbmUoYm9keSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHkgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYm9keSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJykpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsICd0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLTgnKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QmxvYiAmJiB0aGlzLl9ib2R5QmxvYi50eXBlKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgdGhpcy5fYm9keUJsb2IudHlwZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5zZWFyY2hQYXJhbXMgJiYgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PVVURi04Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHN1cHBvcnQuYmxvYikge1xuICAgICAgdGhpcy5ibG9iID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByZWplY3RlZCA9IGNvbnN1bWVkKHRoaXMpO1xuICAgICAgICBpZiAocmVqZWN0ZWQpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0ZWRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9ib2R5QmxvYikge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keUJsb2IpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbdGhpcy5fYm9keUFycmF5QnVmZmVyXSkpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUZvcm1EYXRhKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZCBub3QgcmVhZCBGb3JtRGF0YSBib2R5IGFzIGJsb2InKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3RoaXMuX2JvZHlUZXh0XSkpXG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHRoaXMuYXJyYXlCdWZmZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICAgIHJldHVybiBjb25zdW1lZCh0aGlzKSB8fCBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keUFycmF5QnVmZmVyKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmJsb2IoKS50aGVuKHJlYWRCbG9iQXNBcnJheUJ1ZmZlcilcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICB0aGlzLnRleHQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciByZWplY3RlZCA9IGNvbnN1bWVkKHRoaXMpO1xuICAgICAgaWYgKHJlamVjdGVkKSB7XG4gICAgICAgIHJldHVybiByZWplY3RlZFxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fYm9keUJsb2IpIHtcbiAgICAgICAgcmV0dXJuIHJlYWRCbG9iQXNUZXh0KHRoaXMuX2JvZHlCbG9iKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZWFkQXJyYXlCdWZmZXJBc1RleHQodGhpcy5fYm9keUFycmF5QnVmZmVyKSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUZvcm1EYXRhKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IHJlYWQgRm9ybURhdGEgYm9keSBhcyB0ZXh0JylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keVRleHQpXG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChzdXBwb3J0LmZvcm1EYXRhKSB7XG4gICAgICB0aGlzLmZvcm1EYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRleHQoKS50aGVuKGRlY29kZSlcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdGhpcy5qc29uID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy50ZXh0KCkudGhlbihKU09OLnBhcnNlKVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgLy8gSFRUUCBtZXRob2RzIHdob3NlIGNhcGl0YWxpemF0aW9uIHNob3VsZCBiZSBub3JtYWxpemVkXG4gIHZhciBtZXRob2RzID0gWydERUxFVEUnLCAnR0VUJywgJ0hFQUQnLCAnT1BUSU9OUycsICdQT1NUJywgJ1BVVCddO1xuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZU1ldGhvZChtZXRob2QpIHtcbiAgICB2YXIgdXBjYXNlZCA9IG1ldGhvZC50b1VwcGVyQ2FzZSgpO1xuICAgIHJldHVybiBtZXRob2RzLmluZGV4T2YodXBjYXNlZCkgPiAtMSA/IHVwY2FzZWQgOiBtZXRob2RcbiAgfVxuXG4gIGZ1bmN0aW9uIFJlcXVlc3QoaW5wdXQsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgYm9keSA9IG9wdGlvbnMuYm9keTtcblxuICAgIGlmIChpbnB1dCBpbnN0YW5jZW9mIFJlcXVlc3QpIHtcbiAgICAgIGlmIChpbnB1dC5ib2R5VXNlZCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBbHJlYWR5IHJlYWQnKVxuICAgICAgfVxuICAgICAgdGhpcy51cmwgPSBpbnB1dC51cmw7XG4gICAgICB0aGlzLmNyZWRlbnRpYWxzID0gaW5wdXQuY3JlZGVudGlhbHM7XG4gICAgICBpZiAoIW9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhpbnB1dC5oZWFkZXJzKTtcbiAgICAgIH1cbiAgICAgIHRoaXMubWV0aG9kID0gaW5wdXQubWV0aG9kO1xuICAgICAgdGhpcy5tb2RlID0gaW5wdXQubW9kZTtcbiAgICAgIHRoaXMuc2lnbmFsID0gaW5wdXQuc2lnbmFsO1xuICAgICAgaWYgKCFib2R5ICYmIGlucHV0Ll9ib2R5SW5pdCAhPSBudWxsKSB7XG4gICAgICAgIGJvZHkgPSBpbnB1dC5fYm9keUluaXQ7XG4gICAgICAgIGlucHV0LmJvZHlVc2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51cmwgPSBTdHJpbmcoaW5wdXQpO1xuICAgIH1cblxuICAgIHRoaXMuY3JlZGVudGlhbHMgPSBvcHRpb25zLmNyZWRlbnRpYWxzIHx8IHRoaXMuY3JlZGVudGlhbHMgfHwgJ3NhbWUtb3JpZ2luJztcbiAgICBpZiAob3B0aW9ucy5oZWFkZXJzIHx8ICF0aGlzLmhlYWRlcnMpIHtcbiAgICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdGlvbnMuaGVhZGVycyk7XG4gICAgfVxuICAgIHRoaXMubWV0aG9kID0gbm9ybWFsaXplTWV0aG9kKG9wdGlvbnMubWV0aG9kIHx8IHRoaXMubWV0aG9kIHx8ICdHRVQnKTtcbiAgICB0aGlzLm1vZGUgPSBvcHRpb25zLm1vZGUgfHwgdGhpcy5tb2RlIHx8IG51bGw7XG4gICAgdGhpcy5zaWduYWwgPSBvcHRpb25zLnNpZ25hbCB8fCB0aGlzLnNpZ25hbDtcbiAgICB0aGlzLnJlZmVycmVyID0gbnVsbDtcblxuICAgIGlmICgodGhpcy5tZXRob2QgPT09ICdHRVQnIHx8IHRoaXMubWV0aG9kID09PSAnSEVBRCcpICYmIGJvZHkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0JvZHkgbm90IGFsbG93ZWQgZm9yIEdFVCBvciBIRUFEIHJlcXVlc3RzJylcbiAgICB9XG4gICAgdGhpcy5faW5pdEJvZHkoYm9keSk7XG4gIH1cblxuICBSZXF1ZXN0LnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUmVxdWVzdCh0aGlzLCB7Ym9keTogdGhpcy5fYm9keUluaXR9KVxuICB9O1xuXG4gIGZ1bmN0aW9uIGRlY29kZShib2R5KSB7XG4gICAgdmFyIGZvcm0gPSBuZXcgRm9ybURhdGEoKTtcbiAgICBib2R5XG4gICAgICAudHJpbSgpXG4gICAgICAuc3BsaXQoJyYnKVxuICAgICAgLmZvckVhY2goZnVuY3Rpb24oYnl0ZXMpIHtcbiAgICAgICAgaWYgKGJ5dGVzKSB7XG4gICAgICAgICAgdmFyIHNwbGl0ID0gYnl0ZXMuc3BsaXQoJz0nKTtcbiAgICAgICAgICB2YXIgbmFtZSA9IHNwbGl0LnNoaWZ0KCkucmVwbGFjZSgvXFwrL2csICcgJyk7XG4gICAgICAgICAgdmFyIHZhbHVlID0gc3BsaXQuam9pbignPScpLnJlcGxhY2UoL1xcKy9nLCAnICcpO1xuICAgICAgICAgIGZvcm0uYXBwZW5kKGRlY29kZVVSSUNvbXBvbmVudChuYW1lKSwgZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIHJldHVybiBmb3JtXG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUhlYWRlcnMocmF3SGVhZGVycykge1xuICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAvLyBSZXBsYWNlIGluc3RhbmNlcyBvZiBcXHJcXG4gYW5kIFxcbiBmb2xsb3dlZCBieSBhdCBsZWFzdCBvbmUgc3BhY2Ugb3IgaG9yaXpvbnRhbCB0YWIgd2l0aCBhIHNwYWNlXG4gICAgLy8gaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzAjc2VjdGlvbi0zLjJcbiAgICB2YXIgcHJlUHJvY2Vzc2VkSGVhZGVycyA9IHJhd0hlYWRlcnMucmVwbGFjZSgvXFxyP1xcbltcXHQgXSsvZywgJyAnKTtcbiAgICBwcmVQcm9jZXNzZWRIZWFkZXJzLnNwbGl0KC9cXHI/XFxuLykuZm9yRWFjaChmdW5jdGlvbihsaW5lKSB7XG4gICAgICB2YXIgcGFydHMgPSBsaW5lLnNwbGl0KCc6Jyk7XG4gICAgICB2YXIga2V5ID0gcGFydHMuc2hpZnQoKS50cmltKCk7XG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHBhcnRzLmpvaW4oJzonKS50cmltKCk7XG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKGtleSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBoZWFkZXJzXG4gIH1cblxuICBCb2R5LmNhbGwoUmVxdWVzdC5wcm90b3R5cGUpO1xuXG4gIGZ1bmN0aW9uIFJlc3BvbnNlKGJvZHlJbml0LCBvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgdGhpcy50eXBlID0gJ2RlZmF1bHQnO1xuICAgIHRoaXMuc3RhdHVzID0gb3B0aW9ucy5zdGF0dXMgPT09IHVuZGVmaW5lZCA/IDIwMCA6IG9wdGlvbnMuc3RhdHVzO1xuICAgIHRoaXMub2sgPSB0aGlzLnN0YXR1cyA+PSAyMDAgJiYgdGhpcy5zdGF0dXMgPCAzMDA7XG4gICAgdGhpcy5zdGF0dXNUZXh0ID0gJ3N0YXR1c1RleHQnIGluIG9wdGlvbnMgPyBvcHRpb25zLnN0YXR1c1RleHQgOiAnT0snO1xuICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdGlvbnMuaGVhZGVycyk7XG4gICAgdGhpcy51cmwgPSBvcHRpb25zLnVybCB8fCAnJztcbiAgICB0aGlzLl9pbml0Qm9keShib2R5SW5pdCk7XG4gIH1cblxuICBCb2R5LmNhbGwoUmVzcG9uc2UucHJvdG90eXBlKTtcblxuICBSZXNwb25zZS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKHRoaXMuX2JvZHlJbml0LCB7XG4gICAgICBzdGF0dXM6IHRoaXMuc3RhdHVzLFxuICAgICAgc3RhdHVzVGV4dDogdGhpcy5zdGF0dXNUZXh0LFxuICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnModGhpcy5oZWFkZXJzKSxcbiAgICAgIHVybDogdGhpcy51cmxcbiAgICB9KVxuICB9O1xuXG4gIFJlc3BvbnNlLmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKG51bGwsIHtzdGF0dXM6IDAsIHN0YXR1c1RleHQ6ICcnfSk7XG4gICAgcmVzcG9uc2UudHlwZSA9ICdlcnJvcic7XG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH07XG5cbiAgdmFyIHJlZGlyZWN0U3RhdHVzZXMgPSBbMzAxLCAzMDIsIDMwMywgMzA3LCAzMDhdO1xuXG4gIFJlc3BvbnNlLnJlZGlyZWN0ID0gZnVuY3Rpb24odXJsLCBzdGF0dXMpIHtcbiAgICBpZiAocmVkaXJlY3RTdGF0dXNlcy5pbmRleE9mKHN0YXR1cykgPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCBzdGF0dXMgY29kZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShudWxsLCB7c3RhdHVzOiBzdGF0dXMsIGhlYWRlcnM6IHtsb2NhdGlvbjogdXJsfX0pXG4gIH07XG5cbiAgZXhwb3J0cy5ET01FeGNlcHRpb24gPSBzZWxmLkRPTUV4Y2VwdGlvbjtcbiAgdHJ5IHtcbiAgICBuZXcgZXhwb3J0cy5ET01FeGNlcHRpb24oKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZXhwb3J0cy5ET01FeGNlcHRpb24gPSBmdW5jdGlvbihtZXNzYWdlLCBuYW1lKSB7XG4gICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgIHZhciBlcnJvciA9IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgdGhpcy5zdGFjayA9IGVycm9yLnN0YWNrO1xuICAgIH07XG4gICAgZXhwb3J0cy5ET01FeGNlcHRpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuICAgIGV4cG9ydHMuRE9NRXhjZXB0aW9uLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGV4cG9ydHMuRE9NRXhjZXB0aW9uO1xuICB9XG5cbiAgZnVuY3Rpb24gZmV0Y2goaW5wdXQsIGluaXQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KGlucHV0LCBpbml0KTtcblxuICAgICAgaWYgKHJlcXVlc3Quc2lnbmFsICYmIHJlcXVlc3Quc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgZXhwb3J0cy5ET01FeGNlcHRpb24oJ0Fib3J0ZWQnLCAnQWJvcnRFcnJvcicpKVxuICAgICAgfVxuXG4gICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgIGZ1bmN0aW9uIGFib3J0WGhyKCkge1xuICAgICAgICB4aHIuYWJvcnQoKTtcbiAgICAgIH1cblxuICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICBzdGF0dXM6IHhoci5zdGF0dXMsXG4gICAgICAgICAgc3RhdHVzVGV4dDogeGhyLnN0YXR1c1RleHQsXG4gICAgICAgICAgaGVhZGVyczogcGFyc2VIZWFkZXJzKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSB8fCAnJylcbiAgICAgICAgfTtcbiAgICAgICAgb3B0aW9ucy51cmwgPSAncmVzcG9uc2VVUkwnIGluIHhociA/IHhoci5yZXNwb25zZVVSTCA6IG9wdGlvbnMuaGVhZGVycy5nZXQoJ1gtUmVxdWVzdC1VUkwnKTtcbiAgICAgICAgdmFyIGJvZHkgPSAncmVzcG9uc2UnIGluIHhociA/IHhoci5yZXNwb25zZSA6IHhoci5yZXNwb25zZVRleHQ7XG4gICAgICAgIHJlc29sdmUobmV3IFJlc3BvbnNlKGJvZHksIG9wdGlvbnMpKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJykpO1xuICAgICAgfTtcblxuICAgICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QobmV3IFR5cGVFcnJvcignTmV0d29yayByZXF1ZXN0IGZhaWxlZCcpKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5vbmFib3J0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgZXhwb3J0cy5ET01FeGNlcHRpb24oJ0Fib3J0ZWQnLCAnQWJvcnRFcnJvcicpKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5vcGVuKHJlcXVlc3QubWV0aG9kLCByZXF1ZXN0LnVybCwgdHJ1ZSk7XG5cbiAgICAgIGlmIChyZXF1ZXN0LmNyZWRlbnRpYWxzID09PSAnaW5jbHVkZScpIHtcbiAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHJlcXVlc3QuY3JlZGVudGlhbHMgPT09ICdvbWl0Jykge1xuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmICgncmVzcG9uc2VUeXBlJyBpbiB4aHIgJiYgc3VwcG9ydC5ibG9iKSB7XG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYmxvYic7XG4gICAgICB9XG5cbiAgICAgIHJlcXVlc3QuaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsIHZhbHVlKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAocmVxdWVzdC5zaWduYWwpIHtcbiAgICAgICAgcmVxdWVzdC5zaWduYWwuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBhYm9ydFhocik7XG5cbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIERPTkUgKHN1Y2Nlc3Mgb3IgZmFpbHVyZSlcbiAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICAgIHJlcXVlc3Quc2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgYWJvcnRYaHIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgeGhyLnNlbmQodHlwZW9mIHJlcXVlc3QuX2JvZHlJbml0ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiByZXF1ZXN0Ll9ib2R5SW5pdCk7XG4gICAgfSlcbiAgfVxuXG4gIGZldGNoLnBvbHlmaWxsID0gdHJ1ZTtcblxuICBpZiAoIXNlbGYuZmV0Y2gpIHtcbiAgICBzZWxmLmZldGNoID0gZmV0Y2g7XG4gICAgc2VsZi5IZWFkZXJzID0gSGVhZGVycztcbiAgICBzZWxmLlJlcXVlc3QgPSBSZXF1ZXN0O1xuICAgIHNlbGYuUmVzcG9uc2UgPSBSZXNwb25zZTtcbiAgfVxuXG4gIGV4cG9ydHMuSGVhZGVycyA9IEhlYWRlcnM7XG4gIGV4cG9ydHMuUmVxdWVzdCA9IFJlcXVlc3Q7XG4gIGV4cG9ydHMuUmVzcG9uc2UgPSBSZXNwb25zZTtcbiAgZXhwb3J0cy5mZXRjaCA9IGZldGNoO1xuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KHt9KSk7XG59KShfX3NlbGZfXyk7XG5kZWxldGUgX19zZWxmX18uZmV0Y2gucG9seWZpbGxcbmV4cG9ydHMgPSBfX3NlbGZfXy5mZXRjaCAvLyBUbyBlbmFibGU6IGltcG9ydCBmZXRjaCBmcm9tICdjcm9zcy1mZXRjaCdcbmV4cG9ydHMuZGVmYXVsdCA9IF9fc2VsZl9fLmZldGNoIC8vIEZvciBUeXBlU2NyaXB0IGNvbnN1bWVycyB3aXRob3V0IGVzTW9kdWxlSW50ZXJvcC5cbmV4cG9ydHMuZmV0Y2ggPSBfX3NlbGZfXy5mZXRjaCAvLyBUbyBlbmFibGU6IGltcG9ydCB7ZmV0Y2h9IGZyb20gJ2Nyb3NzLWZldGNoJ1xuZXhwb3J0cy5IZWFkZXJzID0gX19zZWxmX18uSGVhZGVyc1xuZXhwb3J0cy5SZXF1ZXN0ID0gX19zZWxmX18uUmVxdWVzdFxuZXhwb3J0cy5SZXNwb25zZSA9IF9fc2VsZl9fLlJlc3BvbnNlXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5yZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZsYXRcIik7XG5cbnJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkudW5zY29wYWJsZXMuZmxhdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuY29uc3QgbGliXzEgPSByZXF1aXJlKFwiLi9saWJcIik7XG5cbmNvbnN0IHN0cmluZ3NfMSA9IHJlcXVpcmUoXCIuL3N0cmluZ3NcIik7XG5cbmNvbnN0IHNldHRpbmdzXzEgPSByZXF1aXJlKFwiLi9zZXR0aW5nc1wiKTsgLy8gJGxhYjpjb3ZlcmFnZTpvZmYkXG4vLyBAdHMtaWdub3JlXG5cblxuY29uc3Qge1xuICBSZXNwb25zZVxufSA9IHR5cGVvZiBGSElSQ0xJRU5UX1BVUkUgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiByZXF1aXJlKFwiY3Jvc3MtZmV0Y2hcIik7IC8vICRsYWI6Y292ZXJhZ2U6b24kXG5cbmNvbnN0IGRlYnVnID0gbGliXzEuZGVidWcuZXh0ZW5kKFwiY2xpZW50XCIpO1xuLyoqXG4gKiBBZGRzIHBhdGllbnQgY29udGV4dCB0byByZXF1ZXN0T3B0aW9ucyBvYmplY3QgdG8gYmUgdXNlZCB3aXRoIFtbQ2xpZW50LnJlcXVlc3RdXVxuICogQHBhcmFtIHJlcXVlc3RPcHRpb25zIENhbiBiZSBhIHN0cmluZyBVUkwgKHJlbGF0aXZlIHRvIHRoZSBzZXJ2aWNlVXJsKSwgb3IgYW5cbiAqIG9iamVjdCB3aGljaCB3aWxsIGJlIHBhc3NlZCB0byBmZXRjaCgpXG4gKiBAcGFyYW0gY2xpZW50IEN1cnJlbnQgRkhJUiBjbGllbnQgb2JqZWN0IGNvbnRhaW5pbmcgcGF0aWVudCBjb250ZXh0XG4gKiBAcmV0dXJuIHJlcXVlc3RPcHRpb25zIG9iamVjdCBjb250ZXh0dWFsaXplZCB0byBjdXJyZW50IHBhdGllbnRcbiAqL1xuXG5hc3luYyBmdW5jdGlvbiBjb250ZXh0dWFsaXplKHJlcXVlc3RPcHRpb25zLCBjbGllbnQpIHtcbiAgY29uc3QgYmFzZSA9IGxpYl8xLmFic29sdXRlKFwiL1wiLCBjbGllbnQuc3RhdGUuc2VydmVyVXJsKTtcblxuICBhc3luYyBmdW5jdGlvbiBjb250ZXh0dWFsVVJMKF91cmwpIHtcbiAgICBjb25zdCByZXNvdXJjZVR5cGUgPSBfdXJsLnBhdGhuYW1lLnNwbGl0KFwiL1wiKS5wb3AoKTtcblxuICAgIGlmICghcmVzb3VyY2VUeXBlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgdXJsIFwiJHtfdXJsfVwiYCk7XG4gICAgfVxuXG4gICAgaWYgKHNldHRpbmdzXzEucGF0aWVudENvbXBhcnRtZW50LmluZGV4T2YocmVzb3VyY2VUeXBlKSA9PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgZmlsdGVyIFwiJHtyZXNvdXJjZVR5cGV9XCIgcmVzb3VyY2VzIGJ5IHBhdGllbnRgKTtcbiAgICB9XG5cbiAgICBjb25zdCBjb25mb3JtYW5jZSA9IGF3YWl0IGxpYl8xLmZldGNoQ29uZm9ybWFuY2VTdGF0ZW1lbnQoY2xpZW50LnN0YXRlLnNlcnZlclVybCk7XG4gICAgY29uc3Qgc2VhcmNoUGFyYW0gPSBsaWJfMS5nZXRQYXRpZW50UGFyYW0oY29uZm9ybWFuY2UsIHJlc291cmNlVHlwZSk7XG5cbiAgICBfdXJsLnNlYXJjaFBhcmFtcy5zZXQoc2VhcmNoUGFyYW0sIGNsaWVudC5wYXRpZW50LmlkKTtcblxuICAgIHJldHVybiBfdXJsLmhyZWY7XG4gIH1cblxuICBpZiAodHlwZW9mIHJlcXVlc3RPcHRpb25zID09IFwic3RyaW5nXCIgfHwgcmVxdWVzdE9wdGlvbnMgaW5zdGFuY2VvZiBVUkwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXJsOiBhd2FpdCBjb250ZXh0dWFsVVJMKG5ldyBVUkwocmVxdWVzdE9wdGlvbnMgKyBcIlwiLCBiYXNlKSlcbiAgICB9O1xuICB9XG5cbiAgcmVxdWVzdE9wdGlvbnMudXJsID0gYXdhaXQgY29udGV4dHVhbFVSTChuZXcgVVJMKHJlcXVlc3RPcHRpb25zLnVybCArIFwiXCIsIGJhc2UpKTtcbiAgcmV0dXJuIHJlcXVlc3RPcHRpb25zO1xufVxuLyoqXG4gKiBHZXRzIHNpbmdsZSByZWZlcmVuY2UgYnkgaWQuIENhY2hlcyB0aGUgcmVzdWx0LlxuICogQHBhcmFtIHJlZklkXG4gKiBAcGFyYW0gY2FjaGUgQSBtYXAgdG8gc3RvcmUgdGhlIHJlc29sdmVkIHJlZnNcbiAqIEBwYXJhbSBjbGllbnQgVGhlIGNsaWVudCBpbnN0YW5jZVxuICogQHBhcmFtIFtzaWduYWxdIFRoZSBgQWJvcnRTaWduYWxgIGlmIGFueVxuICogQHJldHVybnMgVGhlIHJlc29sdmVkIHJlZmVyZW5jZVxuICogQHByaXZhdGVcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldFJlZihyZWZJZCwgY2FjaGUsIGNsaWVudCwgc2lnbmFsKSB7XG4gIGlmICghY2FjaGVbcmVmSWRdKSB7XG4gICAgLy8gTm90ZSB0aGF0IHdlIHNldCBjYWNoZVtyZWZJZF0gaW1tZWRpYXRlbHkhIFdoZW4gdGhlIHByb21pc2UgaXNcbiAgICAvLyBzZXR0bGVkIGl0IHdpbGwgYmUgdXBkYXRlZC4gVGhpcyBpcyB0byBhdm9pZCBhIHJlZiBiZWluZyBmZXRjaGVkXG4gICAgLy8gdHdpY2UgYmVjYXVzZSBzb21lIG9mIHRoZXNlIHJlcXVlc3RzIGFyZSBleGVjdXRlZCBpbiBwYXJhbGxlbC5cbiAgICBjYWNoZVtyZWZJZF0gPSBjbGllbnQucmVxdWVzdCh7XG4gICAgICB1cmw6IHJlZklkLFxuICAgICAgc2lnbmFsXG4gICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgY2FjaGVbcmVmSWRdID0gcmVzO1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9LCBlcnJvciA9PiB7XG4gICAgICBkZWxldGUgY2FjaGVbcmVmSWRdO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNhY2hlW3JlZklkXSk7XG59XG4vKipcbiAqIFJlc29sdmVzIGEgcmVmZXJlbmNlIGluIHRoZSBnaXZlbiByZXNvdXJjZS5cbiAqIEBwYXJhbSBvYmogRkhJUiBSZXNvdXJjZVxuICovXG5cblxuZnVuY3Rpb24gcmVzb2x2ZVJlZihvYmosIHBhdGgsIGdyYXBoLCBjYWNoZSwgY2xpZW50LCBzaWduYWwpIHtcbiAgY29uc3Qgbm9kZSA9IGxpYl8xLmdldFBhdGgob2JqLCBwYXRoKTtcblxuICBpZiAobm9kZSkge1xuICAgIGNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5KG5vZGUpO1xuICAgIHJldHVybiBQcm9taXNlLmFsbChsaWJfMS5tYWtlQXJyYXkobm9kZSkuZmlsdGVyKEJvb2xlYW4pLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgY29uc3QgcmVmID0gaXRlbS5yZWZlcmVuY2U7XG5cbiAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgcmV0dXJuIGdldFJlZihyZWYsIGNhY2hlLCBjbGllbnQsIHNpZ25hbCkudGhlbihzdWIgPT4ge1xuICAgICAgICAgIGlmIChncmFwaCkge1xuICAgICAgICAgICAgaWYgKGlzQXJyYXkpIHtcbiAgICAgICAgICAgICAgaWYgKHBhdGguaW5kZXhPZihcIi4uXCIpID4gLTEpIHtcbiAgICAgICAgICAgICAgICBsaWJfMS5zZXRQYXRoKG9iaiwgYCR7cGF0aC5yZXBsYWNlKFwiLi5cIiwgYC4ke2l9LmApfWAsIHN1Yik7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGliXzEuc2V0UGF0aChvYmosIGAke3BhdGh9LiR7aX1gLCBzdWIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBsaWJfMS5zZXRQYXRoKG9iaiwgcGF0aCwgc3ViKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGV4ID0+IHtcbiAgICAgICAgICAvKiBpZ25vcmUgbWlzc2luZyByZWZlcmVuY2VzICovXG4gICAgICAgICAgaWYgKGV4LnN0YXR1cyAhPT0gNDA0KSB7XG4gICAgICAgICAgICB0aHJvdyBleDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pKTtcbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhIHJlc291cmNlIGFuZCBhIGxpc3Qgb2YgcmVmIHBhdGhzIC0gcmVzb2x2ZXMgdGhlbSBhbGxcbiAqIEBwYXJhbSBvYmogRkhJUiBSZXNvdXJjZVxuICogQHBhcmFtIGZoaXJPcHRpb25zIFRoZSBmaGlyIG9wdGlvbnMgb2YgdGhlIGluaXRpYXRpbmcgcmVxdWVzdCBjYWxsXG4gKiBAcGFyYW0gY2FjaGUgQSBtYXAgdG8gc3RvcmUgZmV0Y2hlZCByZWZzXG4gKiBAcGFyYW0gY2xpZW50IFRoZSBjbGllbnQgaW5zdGFuY2VcbiAqIEBwcml2YXRlXG4gKi9cblxuXG5mdW5jdGlvbiByZXNvbHZlUmVmcyhvYmosIGZoaXJPcHRpb25zLCBjYWNoZSwgY2xpZW50LCBzaWduYWwpIHtcbiAgLy8gMS4gU2FuaXRpemUgcGF0aHMsIHJlbW92ZSBhbnkgaW52YWxpZCBvbmVzXG4gIGxldCBwYXRocyA9IGxpYl8xLm1ha2VBcnJheShmaGlyT3B0aW9ucy5yZXNvbHZlUmVmZXJlbmNlcykuZmlsdGVyKEJvb2xlYW4pIC8vIE5vIGZhbHNlLCAwLCBudWxsLCB1bmRlZmluZWQgb3IgXCJcIlxuICAubWFwKHBhdGggPT4gU3RyaW5nKHBhdGgpLnRyaW0oKSkuZmlsdGVyKEJvb2xlYW4pOyAvLyBObyBzcGFjZS1vbmx5IHN0cmluZ3NcbiAgLy8gMi4gUmVtb3ZlIGR1cGxpY2F0ZXNcblxuICBwYXRocyA9IHBhdGhzLmZpbHRlcigocCwgaSkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gcGF0aHMuaW5kZXhPZihwLCBpICsgMSk7XG5cbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgZGVidWcoXCJEdXBsaWNhdGVkIHJlZmVyZW5jZSBwYXRoIFxcXCIlc1xcXCJcIiwgcCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH0pOyAvLyAzLiBFYXJseSBleGl0IGlmIG5vIHZhbGlkIHBhdGhzIGFyZSBmb3VuZFxuXG4gIGlmICghcGF0aHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9IC8vIDQuIEdyb3VwIHRoZSBwYXRocyBieSBkZXB0aCBzbyB0aGF0IGNoaWxkIHJlZnMgYXJlIGxvb2tlZCB1cFxuICAvLyBhZnRlciB0aGVpciBwYXJlbnRzIVxuXG5cbiAgY29uc3QgZ3JvdXBzID0ge307XG4gIHBhdGhzLmZvckVhY2gocGF0aCA9PiB7XG4gICAgY29uc3QgbGVuID0gcGF0aC5zcGxpdChcIi5cIikubGVuZ3RoO1xuXG4gICAgaWYgKCFncm91cHNbbGVuXSkge1xuICAgICAgZ3JvdXBzW2xlbl0gPSBbXTtcbiAgICB9XG5cbiAgICBncm91cHNbbGVuXS5wdXNoKHBhdGgpO1xuICB9KTsgLy8gNS4gRXhlY3V0ZSBncm91cHMgc2VxdWVudGlhbGx5ISBQYXRocyB3aXRoaW4gc2FtZSBncm91cCBhcmVcbiAgLy8gZmV0Y2hlZCBpbiBwYXJhbGxlbCFcblxuICBsZXQgdGFzayA9IFByb21pc2UucmVzb2x2ZSgpO1xuICBPYmplY3Qua2V5cyhncm91cHMpLnNvcnQoKS5mb3JFYWNoKGxlbiA9PiB7XG4gICAgY29uc3QgZ3JvdXAgPSBncm91cHNbbGVuXTtcbiAgICB0YXNrID0gdGFzay50aGVuKCgpID0+IFByb21pc2UuYWxsKGdyb3VwLm1hcChwYXRoID0+IHtcbiAgICAgIHJldHVybiByZXNvbHZlUmVmKG9iaiwgcGF0aCwgISFmaGlyT3B0aW9ucy5ncmFwaCwgY2FjaGUsIGNsaWVudCwgc2lnbmFsKTtcbiAgICB9KSkpO1xuICB9KTtcbiAgcmV0dXJuIHRhc2s7XG59XG4vKipcbiAqIFRoaXMgaXMgYSBGSElSIGNsaWVudCB0aGF0IGlzIHJldHVybmVkIHRvIHlvdSBmcm9tIHRoZSBgcmVhZHkoKWAgY2FsbCBvZiB0aGVcbiAqICoqU01BUlQgQVBJKiouIFlvdSBjYW4gYWxzbyBjcmVhdGUgaXQgeW91cnNlbGYgaWYgbmVlZGVkOlxuICpcbiAqIGBgYGpzXG4gKiAvLyBCUk9XU0VSXG4gKiBjb25zdCBjbGllbnQgPSBGSElSLmNsaWVudChcImh0dHBzOi8vcjQuc21hcnRoZWFsdGhpdC5vcmdcIik7XG4gKlxuICogLy8gU0VSVkVSXG4gKiBjb25zdCBjbGllbnQgPSBzbWFydChyZXEsIHJlcykuY2xpZW50KFwiaHR0cHM6Ly9yNC5zbWFydGhlYWx0aGl0Lm9yZ1wiKTtcbiAqIGBgYFxuICovXG5cblxuY2xhc3MgQ2xpZW50IHtcbiAgLyoqXG4gICAqIFZhbGlkYXRlcyB0aGUgcGFyYW1ldGVycywgY3JlYXRlcyBhbiBpbnN0YW5jZSBhbmQgdHJpZXMgdG8gY29ubmVjdCBpdCB0b1xuICAgKiBGaGlySlMsIGlmIG9uZSBpcyBhdmFpbGFibGUgZ2xvYmFsbHkuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihlbnZpcm9ubWVudCwgc3RhdGUpIHtcbiAgICAvKipcbiAgICAgKiBAY2F0ZWdvcnkgVXRpbGl0eVxuICAgICAqL1xuICAgIHRoaXMudW5pdHMgPSBsaWJfMS51bml0cztcblxuICAgIGNvbnN0IF9zdGF0ZSA9IHR5cGVvZiBzdGF0ZSA9PSBcInN0cmluZ1wiID8ge1xuICAgICAgc2VydmVyVXJsOiBzdGF0ZVxuICAgIH0gOiBzdGF0ZTsgLy8gVmFsaWQgc2VydmVyVXJsIGlzIHJlcXVpcmVkIVxuXG5cbiAgICBpZiAoIV9zdGF0ZS5zZXJ2ZXJVcmwgfHwgIV9zdGF0ZS5zZXJ2ZXJVcmwubWF0Y2goL2h0dHBzPzpcXC9cXC8uKy8pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIFxcXCJzZXJ2ZXJVcmxcXFwiIG9wdGlvbiBpcyByZXF1aXJlZCBhbmQgbXVzdCBiZWdpbiB3aXRoIFxcXCJodHRwKHMpXFxcIlwiKTtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlID0gX3N0YXRlO1xuICAgIHRoaXMuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcbiAgICB0aGlzLl9yZWZyZXNoVGFzayA9IG51bGw7XG4gICAgY29uc3QgY2xpZW50ID0gdGhpczsgLy8gcGF0aWVudCBhcGkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICB0aGlzLnBhdGllbnQgPSB7XG4gICAgICBnZXQgaWQoKSB7XG4gICAgICAgIHJldHVybiBjbGllbnQuZ2V0UGF0aWVudElkKCk7XG4gICAgICB9LFxuXG4gICAgICByZWFkOiAocmVxdWVzdE9wdGlvbnMgPSB7fSkgPT4ge1xuICAgICAgICBjb25zdCBpZCA9IHRoaXMucGF0aWVudC5pZDtcbiAgICAgICAgcmV0dXJuIGlkID8gdGhpcy5yZXF1ZXN0KE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcmVxdWVzdE9wdGlvbnMpLCB7XG4gICAgICAgICAgdXJsOiBgUGF0aWVudC8ke2lkfWBcbiAgICAgICAgfSkpIDogUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiUGF0aWVudCBpcyBub3QgYXZhaWxhYmxlXCIpKTtcbiAgICAgIH0sXG4gICAgICByZXF1ZXN0OiAocmVxdWVzdE9wdGlvbnMsIGZoaXJPcHRpb25zID0ge30pID0+IHtcbiAgICAgICAgaWYgKHRoaXMucGF0aWVudC5pZCkge1xuICAgICAgICAgIHJldHVybiAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGF3YWl0IGNvbnRleHR1YWxpemUocmVxdWVzdE9wdGlvbnMsIHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChvcHRpb25zLCBmaGlyT3B0aW9ucyk7XG4gICAgICAgICAgfSkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiUGF0aWVudCBpcyBub3QgYXZhaWxhYmxlXCIpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07IC8vIGVuY291bnRlciBhcGkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgdGhpcy5lbmNvdW50ZXIgPSB7XG4gICAgICBnZXQgaWQoKSB7XG4gICAgICAgIHJldHVybiBjbGllbnQuZ2V0RW5jb3VudGVySWQoKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlYWQ6IChyZXF1ZXN0T3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgICAgIGNvbnN0IGlkID0gdGhpcy5lbmNvdW50ZXIuaWQ7XG4gICAgICAgIHJldHVybiBpZCA/IHRoaXMucmVxdWVzdChPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHJlcXVlc3RPcHRpb25zKSwge1xuICAgICAgICAgIHVybDogYEVuY291bnRlci8ke2lkfWBcbiAgICAgICAgfSkpIDogUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiRW5jb3VudGVyIGlzIG5vdCBhdmFpbGFibGVcIikpO1xuICAgICAgfVxuICAgIH07IC8vIHVzZXIgYXBpIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgdGhpcy51c2VyID0ge1xuICAgICAgZ2V0IGZoaXJVc2VyKCkge1xuICAgICAgICByZXR1cm4gY2xpZW50LmdldEZoaXJVc2VyKCk7XG4gICAgICB9LFxuXG4gICAgICBnZXQgaWQoKSB7XG4gICAgICAgIHJldHVybiBjbGllbnQuZ2V0VXNlcklkKCk7XG4gICAgICB9LFxuXG4gICAgICBnZXQgcmVzb3VyY2VUeXBlKCkge1xuICAgICAgICByZXR1cm4gY2xpZW50LmdldFVzZXJUeXBlKCk7XG4gICAgICB9LFxuXG4gICAgICByZWFkOiAocmVxdWVzdE9wdGlvbnMgPSB7fSkgPT4ge1xuICAgICAgICBjb25zdCBmaGlyVXNlciA9IHRoaXMudXNlci5maGlyVXNlcjtcbiAgICAgICAgcmV0dXJuIGZoaXJVc2VyID8gdGhpcy5yZXF1ZXN0KE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcmVxdWVzdE9wdGlvbnMpLCB7XG4gICAgICAgICAgdXJsOiBmaGlyVXNlclxuICAgICAgICB9KSkgOiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJVc2VyIGlzIG5vdCBhdmFpbGFibGVcIikpO1xuICAgICAgfVxuICAgIH07IC8vIGZoaXIuanMgYXBpIChhdHRhY2hlZCBhdXRvbWF0aWNhbGx5IGluIGJyb3dzZXIpXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICB0aGlzLmNvbm5lY3QoZW52aXJvbm1lbnQuZmhpcik7XG4gIH1cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gbWFrZSB0aGUgXCJsaW5rXCIgYmV0d2VlbiB0aGUgYGZoaXJjbGllbnRgIGFuZCB0aGVcbiAgICogYGZoaXIuanNgLCBpZiBvbmUgaXMgYXZhaWxhYmxlLlxuICAgKiAqKk5vdGU6KiogVGhpcyBpcyBjYWxsZWQgYnkgdGhlIGNvbnN0cnVjdG9yLiBJZiBmaGlyLmpzIGlzIGF2YWlsYWJsZSBpblxuICAgKiB0aGUgZ2xvYmFsIHNjb3BlIGFzIGBmaGlyYCwgaXQgd2lsbCBhdXRvbWF0aWNhbGx5IGJlIGxpbmtlZCB0byBhbnkgW1tDbGllbnRdXVxuICAgKiBpbnN0YW5jZS4gWW91IHNob3VsZCBvbmx5IHVzZSB0aGlzIG1ldGhvZCB0byBjb25uZWN0IHRvIGBmaGlyLmpzYCB3aGljaFxuICAgKiBpcyBub3QgZ2xvYmFsLlxuICAgKi9cblxuXG4gIGNvbm5lY3QoZmhpckpzKSB7XG4gICAgaWYgKHR5cGVvZiBmaGlySnMgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBiYXNlVXJsOiB0aGlzLnN0YXRlLnNlcnZlclVybC5yZXBsYWNlKC9cXC8kLywgXCJcIilcbiAgICAgIH07XG4gICAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IHRoaXMuZ2V0U3RhdGUoXCJ0b2tlblJlc3BvbnNlLmFjY2Vzc190b2tlblwiKTtcblxuICAgICAgaWYgKGFjY2Vzc1Rva2VuKSB7XG4gICAgICAgIG9wdGlvbnMuYXV0aCA9IHtcbiAgICAgICAgICB0b2tlbjogYWNjZXNzVG9rZW5cbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgICBwYXNzd29yZFxuICAgICAgICB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBpZiAodXNlcm5hbWUgJiYgcGFzc3dvcmQpIHtcbiAgICAgICAgICBvcHRpb25zLmF1dGggPSB7XG4gICAgICAgICAgICB1c2VyOiB1c2VybmFtZSxcbiAgICAgICAgICAgIHBhc3M6IHBhc3N3b3JkXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmFwaSA9IGZoaXJKcyhvcHRpb25zKTtcbiAgICAgIGNvbnN0IHBhdGllbnRJZCA9IHRoaXMuZ2V0U3RhdGUoXCJ0b2tlblJlc3BvbnNlLnBhdGllbnRcIik7XG5cbiAgICAgIGlmIChwYXRpZW50SWQpIHtcbiAgICAgICAgdGhpcy5wYXRpZW50LmFwaSA9IGZoaXJKcyhPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMpLCB7XG4gICAgICAgICAgcGF0aWVudDogcGF0aWVudElkXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyB0aGUgSUQgb2YgdGhlIHNlbGVjdGVkIHBhdGllbnQgb3IgbnVsbC4gWW91IHNob3VsZCBoYXZlIHJlcXVlc3RlZFxuICAgKiBcImxhdW5jaC9wYXRpZW50XCIgc2NvcGUuIE90aGVyd2lzZSB0aGlzIHdpbGwgcmV0dXJuIG51bGwuXG4gICAqL1xuXG5cbiAgZ2V0UGF0aWVudElkKCkge1xuICAgIGNvbnN0IHRva2VuUmVzcG9uc2UgPSB0aGlzLnN0YXRlLnRva2VuUmVzcG9uc2U7XG5cbiAgICBpZiAodG9rZW5SZXNwb25zZSkge1xuICAgICAgLy8gV2UgaGF2ZSBiZWVuIGF1dGhvcml6ZWQgYWdhaW5zdCB0aGlzIHNlcnZlciBidXQgd2UgZG9uJ3Qga25vd1xuICAgICAgLy8gdGhlIHBhdGllbnQuIFRoaXMgc2hvdWxkIGJlIGEgc2NvcGUgaXNzdWUuXG4gICAgICBpZiAoIXRva2VuUmVzcG9uc2UucGF0aWVudCkge1xuICAgICAgICBpZiAoISh0aGlzLnN0YXRlLnNjb3BlIHx8IFwiXCIpLm1hdGNoKC9cXGJsYXVuY2goXFwvcGF0aWVudCk/XFxiLykpIHtcbiAgICAgICAgICBkZWJ1ZyhzdHJpbmdzXzEuZGVmYXVsdC5ub1Njb3BlRm9ySWQsIFwicGF0aWVudFwiLCBcInBhdGllbnRcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gVGhlIHNlcnZlciBzaG91bGQgaGF2ZSByZXR1cm5lZCB0aGUgcGF0aWVudCFcbiAgICAgICAgICBkZWJ1ZyhcIlRoZSBJRCBvZiB0aGUgc2VsZWN0ZWQgcGF0aWVudCBpcyBub3QgYXZhaWxhYmxlLiBQbGVhc2UgY2hlY2sgaWYgeW91ciBzZXJ2ZXIgc3VwcG9ydHMgdGhhdC5cIik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRva2VuUmVzcG9uc2UucGF0aWVudDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5hdXRob3JpemVVcmkpIHtcbiAgICAgIGRlYnVnKHN0cmluZ3NfMS5kZWZhdWx0Lm5vSWZOb0F1dGgsIFwidGhlIElEIG9mIHRoZSBzZWxlY3RlZCBwYXRpZW50XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWJ1ZyhzdHJpbmdzXzEuZGVmYXVsdC5ub0ZyZWVDb250ZXh0LCBcInNlbGVjdGVkIHBhdGllbnRcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIElEIG9mIHRoZSBzZWxlY3RlZCBlbmNvdW50ZXIgb3IgbnVsbC4gWW91IHNob3VsZCBoYXZlXG4gICAqIHJlcXVlc3RlZCBcImxhdW5jaC9lbmNvdW50ZXJcIiBzY29wZS4gT3RoZXJ3aXNlIHRoaXMgd2lsbCByZXR1cm4gbnVsbC5cbiAgICogTm90ZSB0aGF0IG5vdCBhbGwgc2VydmVycyBzdXBwb3J0IHRoZSBcImxhdW5jaC9lbmNvdW50ZXJcIiBzY29wZSBzbyB0aGlzXG4gICAqIHdpbGwgYmUgbnVsbCBpZiB0aGV5IGRvbid0LlxuICAgKi9cblxuXG4gIGdldEVuY291bnRlcklkKCkge1xuICAgIGNvbnN0IHRva2VuUmVzcG9uc2UgPSB0aGlzLnN0YXRlLnRva2VuUmVzcG9uc2U7XG5cbiAgICBpZiAodG9rZW5SZXNwb25zZSkge1xuICAgICAgLy8gV2UgaGF2ZSBiZWVuIGF1dGhvcml6ZWQgYWdhaW5zdCB0aGlzIHNlcnZlciBidXQgd2UgZG9uJ3Qga25vd1xuICAgICAgLy8gdGhlIGVuY291bnRlci4gVGhpcyBzaG91bGQgYmUgYSBzY29wZSBpc3N1ZS5cbiAgICAgIGlmICghdG9rZW5SZXNwb25zZS5lbmNvdW50ZXIpIHtcbiAgICAgICAgaWYgKCEodGhpcy5zdGF0ZS5zY29wZSB8fCBcIlwiKS5tYXRjaCgvXFxibGF1bmNoKFxcL2VuY291bnRlcik/XFxiLykpIHtcbiAgICAgICAgICBkZWJ1ZyhzdHJpbmdzXzEuZGVmYXVsdC5ub1Njb3BlRm9ySWQsIFwiZW5jb3VudGVyXCIsIFwiZW5jb3VudGVyXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFRoZSBzZXJ2ZXIgc2hvdWxkIGhhdmUgcmV0dXJuZWQgdGhlIGVuY291bnRlciFcbiAgICAgICAgICBkZWJ1ZyhcIlRoZSBJRCBvZiB0aGUgc2VsZWN0ZWQgZW5jb3VudGVyIGlzIG5vdCBhdmFpbGFibGUuIFBsZWFzZSBjaGVjayBpZiB5b3VyIHNlcnZlciBzdXBwb3J0cyB0aGF0LCBhbmQgdGhhdCB0aGUgc2VsZWN0ZWQgcGF0aWVudCBoYXMgYW55IHJlY29yZGVkIGVuY291bnRlcnMuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0b2tlblJlc3BvbnNlLmVuY291bnRlcjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5hdXRob3JpemVVcmkpIHtcbiAgICAgIGRlYnVnKHN0cmluZ3NfMS5kZWZhdWx0Lm5vSWZOb0F1dGgsIFwidGhlIElEIG9mIHRoZSBzZWxlY3RlZCBlbmNvdW50ZXJcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlYnVnKHN0cmluZ3NfMS5kZWZhdWx0Lm5vRnJlZUNvbnRleHQsIFwic2VsZWN0ZWQgZW5jb3VudGVyXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSAoZGVjb2RlZCkgaWRfdG9rZW4gaWYgYW55LiBZb3UgbmVlZCB0byByZXF1ZXN0IFwib3BlbmlkXCIgYW5kXG4gICAqIFwicHJvZmlsZVwiIHNjb3BlcyBpZiB5b3UgbmVlZCB0byByZWNlaXZlIGFuIGlkX3Rva2VuIChpZiB5b3UgbmVlZCB0byBrbm93XG4gICAqIHdobyB0aGUgbG9nZ2VkLWluIHVzZXIgaXMpLlxuICAgKi9cblxuXG4gIGdldElkVG9rZW4oKSB7XG4gICAgY29uc3QgdG9rZW5SZXNwb25zZSA9IHRoaXMuc3RhdGUudG9rZW5SZXNwb25zZTtcblxuICAgIGlmICh0b2tlblJlc3BvbnNlKSB7XG4gICAgICBjb25zdCBpZFRva2VuID0gdG9rZW5SZXNwb25zZS5pZF90b2tlbjtcbiAgICAgIGNvbnN0IHNjb3BlID0gdGhpcy5zdGF0ZS5zY29wZSB8fCBcIlwiOyAvLyBXZSBoYXZlIGJlZW4gYXV0aG9yaXplZCBhZ2FpbnN0IHRoaXMgc2VydmVyIGJ1dCB3ZSBkb24ndCBoYXZlXG4gICAgICAvLyB0aGUgaWRfdG9rZW4uIFRoaXMgc2hvdWxkIGJlIGEgc2NvcGUgaXNzdWUuXG5cbiAgICAgIGlmICghaWRUb2tlbikge1xuICAgICAgICBjb25zdCBoYXNPcGVuaWQgPSBzY29wZS5tYXRjaCgvXFxib3BlbmlkXFxiLyk7XG4gICAgICAgIGNvbnN0IGhhc1Byb2ZpbGUgPSBzY29wZS5tYXRjaCgvXFxicHJvZmlsZVxcYi8pO1xuICAgICAgICBjb25zdCBoYXNGaGlyVXNlciA9IHNjb3BlLm1hdGNoKC9cXGJmaGlyVXNlclxcYi8pO1xuXG4gICAgICAgIGlmICghaGFzT3BlbmlkIHx8ICEoaGFzRmhpclVzZXIgfHwgaGFzUHJvZmlsZSkpIHtcbiAgICAgICAgICBkZWJ1ZyhcIllvdSBhcmUgdHJ5aW5nIHRvIGdldCB0aGUgaWRfdG9rZW4gYnV0IHlvdSBhcmUgbm90IFwiICsgXCJ1c2luZyB0aGUgcmlnaHQgc2NvcGVzLiBQbGVhc2UgYWRkICdvcGVuaWQnIGFuZCBcIiArIFwiJ2ZoaXJVc2VyJyBvciAncHJvZmlsZScgdG8gdGhlIHNjb3BlcyB5b3UgYXJlIFwiICsgXCJyZXF1ZXN0aW5nLlwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBUaGUgc2VydmVyIHNob3VsZCBoYXZlIHJldHVybmVkIHRoZSBpZF90b2tlbiFcbiAgICAgICAgICBkZWJ1ZyhcIlRoZSBpZF90b2tlbiBpcyBub3QgYXZhaWxhYmxlLiBQbGVhc2UgY2hlY2sgaWYgeW91ciBzZXJ2ZXIgc3VwcG9ydHMgdGhhdC5cIik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxpYl8xLmp3dERlY29kZShpZFRva2VuLCB0aGlzLmVudmlyb25tZW50KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5hdXRob3JpemVVcmkpIHtcbiAgICAgIGRlYnVnKHN0cmluZ3NfMS5kZWZhdWx0Lm5vSWZOb0F1dGgsIFwidGhlIGlkX3Rva2VuXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWJ1ZyhzdHJpbmdzXzEuZGVmYXVsdC5ub0ZyZWVDb250ZXh0LCBcImlkX3Rva2VuXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBwcm9maWxlIG9mIHRoZSBsb2dnZWRfaW4gdXNlciAoaWYgYW55KS4gVGhpcyBpcyBhIHN0cmluZ1xuICAgKiBoYXZpbmcgdGhlIGZvbGxvd2luZyBzaGFwZSBgXCJ7dXNlciB0eXBlfS97dXNlciBpZH1cImAuIEZvciBleGFtcGxlOlxuICAgKiBgXCJQcmFjdGl0aW9uZXIvYWJjXCJgIG9yIGBcIlBhdGllbnQveHl6XCJgLlxuICAgKi9cblxuXG4gIGdldEZoaXJVc2VyKCkge1xuICAgIGNvbnN0IGlkVG9rZW4gPSB0aGlzLmdldElkVG9rZW4oKTtcblxuICAgIGlmIChpZFRva2VuKSB7XG4gICAgICByZXR1cm4gaWRUb2tlbi5wcm9maWxlO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB1c2VyIElEIG9yIG51bGwuXG4gICAqL1xuXG5cbiAgZ2V0VXNlcklkKCkge1xuICAgIGNvbnN0IHByb2ZpbGUgPSB0aGlzLmdldEZoaXJVc2VyKCk7XG5cbiAgICBpZiAocHJvZmlsZSkge1xuICAgICAgcmV0dXJuIHByb2ZpbGUuc3BsaXQoXCIvXCIpWzFdO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB0eXBlIG9mIHRoZSBsb2dnZWQtaW4gdXNlciBvciBudWxsLiBUaGUgcmVzdWx0IGNhbiBiZVxuICAgKiBcIlByYWN0aXRpb25lclwiLCBcIlBhdGllbnRcIiBvciBcIlJlbGF0ZWRQZXJzb25cIi5cbiAgICovXG5cblxuICBnZXRVc2VyVHlwZSgpIHtcbiAgICBjb25zdCBwcm9maWxlID0gdGhpcy5nZXRGaGlyVXNlcigpO1xuXG4gICAgaWYgKHByb2ZpbGUpIHtcbiAgICAgIHJldHVybiBwcm9maWxlLnNwbGl0KFwiL1wiKVswXTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICAvKipcbiAgICogQnVpbGRzIGFuZCByZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgYEF1dGhvcml6YXRpb25gIGhlYWRlciB0aGF0IGNhbiBiZVxuICAgKiBzZW50IHRvIHRoZSBGSElSIHNlcnZlclxuICAgKi9cblxuXG4gIGdldEF1dGhvcml6YXRpb25IZWFkZXIoKSB7XG4gICAgY29uc3QgYWNjZXNzVG9rZW4gPSB0aGlzLmdldFN0YXRlKFwidG9rZW5SZXNwb25zZS5hY2Nlc3NfdG9rZW5cIik7XG5cbiAgICBpZiAoYWNjZXNzVG9rZW4pIHtcbiAgICAgIHJldHVybiBcIkJlYXJlciBcIiArIGFjY2Vzc1Rva2VuO1xuICAgIH1cblxuICAgIGNvbnN0IHtcbiAgICAgIHVzZXJuYW1lLFxuICAgICAgcGFzc3dvcmRcbiAgICB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmICh1c2VybmFtZSAmJiBwYXNzd29yZCkge1xuICAgICAgcmV0dXJuIFwiQmFzaWMgXCIgKyB0aGlzLmVudmlyb25tZW50LmJ0b2EodXNlcm5hbWUgKyBcIjpcIiArIHBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICAvKipcbiAgICogVXNlZCBpbnRlcm5hbGx5IHRvIGNsZWFyIHRoZSBzdGF0ZSBvZiB0aGUgaW5zdGFuY2UgYW5kIHRoZSBzdGF0ZSBpbiB0aGVcbiAgICogYXNzb2NpYXRlZCBzdG9yYWdlLlxuICAgKi9cblxuXG4gIGFzeW5jIF9jbGVhclN0YXRlKCkge1xuICAgIGNvbnN0IHN0b3JhZ2UgPSB0aGlzLmVudmlyb25tZW50LmdldFN0b3JhZ2UoKTtcbiAgICBjb25zdCBrZXkgPSBhd2FpdCBzdG9yYWdlLmdldChzZXR0aW5nc18xLlNNQVJUX0tFWSk7XG5cbiAgICBpZiAoa2V5KSB7XG4gICAgICBhd2FpdCBzdG9yYWdlLnVuc2V0KGtleSk7XG4gICAgfVxuXG4gICAgYXdhaXQgc3RvcmFnZS51bnNldChzZXR0aW5nc18xLlNNQVJUX0tFWSk7XG4gICAgdGhpcy5zdGF0ZS50b2tlblJlc3BvbnNlID0ge307XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgcmVzb3VyY2UgaW4gYSBzZXJ2ZXItYXNzaWduZWQgbG9jYXRpb25cbiAgICogQHNlZSBodHRwOi8vaGw3Lm9yZy9maGlyL2h0dHAuaHRtbCNjcmVhdGVcbiAgICogQHBhcmFtIHJlc291cmNlIEEgRkhJUiByZXNvdXJjZSB0byBiZSBjcmVhdGVkXG4gICAqIEBwYXJhbSBbcmVxdWVzdE9wdGlvbnNdIEFueSBvcHRpb25zIHRvIGJlIHBhc3NlZCB0byB0aGUgZmV0Y2ggY2FsbC5cbiAgICogTm90ZSB0aGF0IGBtZXRob2RgIGFuZCBgYm9keWAgd2lsbCBiZSBpZ25vcmVkLlxuICAgKiBAY2F0ZWdvcnkgUmVxdWVzdFxuICAgKi9cblxuXG4gIGNyZWF0ZShyZXNvdXJjZSwgcmVxdWVzdE9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCByZXF1ZXN0T3B0aW9ucyksIHtcbiAgICAgIHVybDogYCR7cmVzb3VyY2UucmVzb3VyY2VUeXBlfWAsXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVzb3VyY2UpLFxuICAgICAgaGVhZGVyczogT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIC8vIFRPRE86IERvIHdlIG5lZWQgdG8gYWx0ZXJuYXRlIHdpdGggXCJhcHBsaWNhdGlvbi9qc29uK2ZoaXJcIj9cbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgIH0sIHJlcXVlc3RPcHRpb25zLmhlYWRlcnMpXG4gICAgfSkpO1xuICB9XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGN1cnJlbnQgdmVyc2lvbiBmb3IgYW4gZXhpc3RpbmcgcmVzb3VyY2Ugb3IgY3JlYXRlcyBhblxuICAgKiBpbml0aWFsIHZlcnNpb24gaWYgbm8gcmVzb3VyY2UgYWxyZWFkeSBleGlzdHMgZm9yIHRoZSBnaXZlbiBpZC5cbiAgICogQHNlZSBodHRwOi8vaGw3Lm9yZy9maGlyL2h0dHAuaHRtbCN1cGRhdGVcbiAgICogQHBhcmFtIHJlc291cmNlIEEgRkhJUiByZXNvdXJjZSB0byBiZSB1cGRhdGVkXG4gICAqIEBwYXJhbSByZXF1ZXN0T3B0aW9ucyBBbnkgb3B0aW9ucyB0byBiZSBwYXNzZWQgdG8gdGhlIGZldGNoIGNhbGwuXG4gICAqIE5vdGUgdGhhdCBgbWV0aG9kYCBhbmQgYGJvZHlgIHdpbGwgYmUgaWdub3JlZC5cbiAgICogQGNhdGVnb3J5IFJlcXVlc3RcbiAgICovXG5cblxuICB1cGRhdGUocmVzb3VyY2UsIHJlcXVlc3RPcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcmVxdWVzdE9wdGlvbnMpLCB7XG4gICAgICB1cmw6IGAke3Jlc291cmNlLnJlc291cmNlVHlwZX0vJHtyZXNvdXJjZS5pZH1gLFxuICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVzb3VyY2UpLFxuICAgICAgaGVhZGVyczogT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIC8vIFRPRE86IERvIHdlIG5lZWQgdG8gYWx0ZXJuYXRlIHdpdGggXCJhcHBsaWNhdGlvbi9qc29uK2ZoaXJcIj9cbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgIH0sIHJlcXVlc3RPcHRpb25zLmhlYWRlcnMpXG4gICAgfSkpO1xuICB9XG4gIC8qKlxuICAgKiBSZW1vdmVzIGFuIGV4aXN0aW5nIHJlc291cmNlLlxuICAgKiBAc2VlIGh0dHA6Ly9obDcub3JnL2ZoaXIvaHR0cC5odG1sI2RlbGV0ZVxuICAgKiBAcGFyYW0gdXJsIFJlbGF0aXZlIFVSSSBvZiB0aGUgRkhJUiByZXNvdXJjZSB0byBiZSBkZWxldGVkXG4gICAqIChmb3JtYXQ6IGByZXNvdXJjZVR5cGUvaWRgKVxuICAgKiBAcGFyYW0gcmVxdWVzdE9wdGlvbnMgQW55IG9wdGlvbnMgKGV4Y2VwdCBgbWV0aG9kYCB3aGljaCB3aWxsIGJlIGZpeGVkXG4gICAqIHRvIGBERUxFVEVgKSB0byBiZSBwYXNzZWQgdG8gdGhlIGZldGNoIGNhbGwuXG4gICAqIEBjYXRlZ29yeSBSZXF1ZXN0XG4gICAqL1xuXG5cbiAgZGVsZXRlKHVybCwgcmVxdWVzdE9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCByZXF1ZXN0T3B0aW9ucyksIHtcbiAgICAgIHVybCxcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIlxuICAgIH0pKTtcbiAgfVxuICAvKipcbiAgICogQHBhcmFtIHJlcXVlc3RPcHRpb25zIENhbiBiZSBhIHN0cmluZyBVUkwgKHJlbGF0aXZlIHRvIHRoZSBzZXJ2aWNlVXJsKSxcbiAgICogb3IgYW4gb2JqZWN0IHdoaWNoIHdpbGwgYmUgcGFzc2VkIHRvIGZldGNoKClcbiAgICogQHBhcmFtIGZoaXJPcHRpb25zIEFkZGl0aW9uYWwgb3B0aW9ucyB0byBjb250cm9sIHRoZSBiZWhhdmlvclxuICAgKiBAcGFyYW0gX3Jlc29sdmVkUmVmcyBETyBOT1QgVVNFISBVc2VkIGludGVybmFsbHkuXG4gICAqIEBjYXRlZ29yeSBSZXF1ZXN0XG4gICAqL1xuXG5cbiAgYXN5bmMgcmVxdWVzdChyZXF1ZXN0T3B0aW9ucywgZmhpck9wdGlvbnMgPSB7fSwgX3Jlc29sdmVkUmVmcyA9IHt9KSB7XG4gICAgdmFyIF9hO1xuXG4gICAgY29uc3QgZGVidWdSZXF1ZXN0ID0gbGliXzEuZGVidWcuZXh0ZW5kKFwiY2xpZW50OnJlcXVlc3RcIik7XG5cbiAgICBpZiAoIXJlcXVlc3RPcHRpb25zKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJyZXF1ZXN0IHJlcXVpcmVzIGFuIHVybCBvciByZXF1ZXN0IG9wdGlvbnMgYXMgYXJndW1lbnRcIik7XG4gICAgfSAvLyB1cmwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4gICAgbGV0IHVybDtcblxuICAgIGlmICh0eXBlb2YgcmVxdWVzdE9wdGlvbnMgPT0gXCJzdHJpbmdcIiB8fCByZXF1ZXN0T3B0aW9ucyBpbnN0YW5jZW9mIFVSTCkge1xuICAgICAgdXJsID0gU3RyaW5nKHJlcXVlc3RPcHRpb25zKTtcbiAgICAgIHJlcXVlc3RPcHRpb25zID0ge307XG4gICAgfSBlbHNlIHtcbiAgICAgIHVybCA9IFN0cmluZyhyZXF1ZXN0T3B0aW9ucy51cmwpO1xuICAgIH1cblxuICAgIHVybCA9IGxpYl8xLmFic29sdXRlKHVybCwgdGhpcy5zdGF0ZS5zZXJ2ZXJVcmwpO1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBncmFwaDogZmhpck9wdGlvbnMuZ3JhcGggIT09IGZhbHNlLFxuICAgICAgZmxhdDogISFmaGlyT3B0aW9ucy5mbGF0LFxuICAgICAgcGFnZUxpbWl0OiAoX2EgPSBmaGlyT3B0aW9ucy5wYWdlTGltaXQpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IDEsXG4gICAgICByZXNvbHZlUmVmZXJlbmNlczogZmhpck9wdGlvbnMucmVzb2x2ZVJlZmVyZW5jZXMgfHwgW10sXG4gICAgICB1c2VSZWZyZXNoVG9rZW46IGZoaXJPcHRpb25zLnVzZVJlZnJlc2hUb2tlbiAhPT0gZmFsc2UsXG4gICAgICBvblBhZ2U6IHR5cGVvZiBmaGlyT3B0aW9ucy5vblBhZ2UgPT0gXCJmdW5jdGlvblwiID8gZmhpck9wdGlvbnMub25QYWdlIDogdW5kZWZpbmVkXG4gICAgfTtcbiAgICBjb25zdCBzaWduYWwgPSByZXF1ZXN0T3B0aW9ucy5zaWduYWwgfHwgdW5kZWZpbmVkOyAvLyBSZWZyZXNoIHRoZSBhY2Nlc3MgdG9rZW4gaWYgbmVlZGVkXG5cbiAgICBjb25zdCBqb2IgPSBvcHRpb25zLnVzZVJlZnJlc2hUb2tlbiA/IHRoaXMucmVmcmVzaElmTmVlZGVkKHtcbiAgICAgIHNpZ25hbFxuICAgIH0pLnRoZW4oKCkgPT4gcmVxdWVzdE9wdGlvbnMpIDogUHJvbWlzZS5yZXNvbHZlKHJlcXVlc3RPcHRpb25zKTtcbiAgICByZXR1cm4gam9iIC8vIEFkZCB0aGUgQXV0aG9yaXphdGlvbiBoZWFkZXIgbm93LCBhZnRlciB0aGUgYWNjZXNzIHRva2VuIG1pZ2h0XG4gICAgLy8gaGF2ZSBiZWVuIHVwZGF0ZWRcbiAgICAudGhlbihyZXF1ZXN0T3B0aW9ucyA9PiB7XG4gICAgICBjb25zdCBhdXRoSGVhZGVyID0gdGhpcy5nZXRBdXRob3JpemF0aW9uSGVhZGVyKCk7XG5cbiAgICAgIGlmIChhdXRoSGVhZGVyKSB7XG4gICAgICAgIHJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHJlcXVlc3RPcHRpb25zLmhlYWRlcnMpLCB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYXV0aEhlYWRlclxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlcXVlc3RPcHRpb25zO1xuICAgIH0pIC8vIE1ha2UgdGhlIHJlcXVlc3RcbiAgICAudGhlbihyZXF1ZXN0T3B0aW9ucyA9PiB7XG4gICAgICBkZWJ1Z1JlcXVlc3QoXCIlcywgb3B0aW9uczogJU8sIGZoaXJPcHRpb25zOiAlT1wiLCB1cmwsIHJlcXVlc3RPcHRpb25zLCBvcHRpb25zKTtcbiAgICAgIHJldHVybiBsaWJfMS5yZXF1ZXN0KHVybCwgcmVxdWVzdE9wdGlvbnMpO1xuICAgIH0pIC8vIEhhbmRsZSA0MDEgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLmNhdGNoKGFzeW5jIGVycm9yID0+IHtcbiAgICAgIGlmIChlcnJvci5zdGF0dXMgPT0gNDAxKSB7XG4gICAgICAgIC8vICFhY2Nlc3NUb2tlbiAtPiBub3QgYXV0aG9yaXplZCAtPiBObyBzZXNzaW9uLiBOZWVkIHRvIGxhdW5jaC5cbiAgICAgICAgaWYgKCF0aGlzLmdldFN0YXRlKFwidG9rZW5SZXNwb25zZS5hY2Nlc3NfdG9rZW5cIikpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIGFwcCBjYW5ub3QgYmUgYWNjZXNzZWQgZGlyZWN0bHkuIFBsZWFzZSBsYXVuY2ggaXQgYXMgU01BUlQgYXBwIVwiKTtcbiAgICAgICAgfSAvLyBhdXRvLXJlZnJlc2ggbm90IGVuYWJsZWQgYW5kIFNlc3Npb24gZXhwaXJlZC5cbiAgICAgICAgLy8gTmVlZCB0byByZS1sYXVuY2guIENsZWFyIHN0YXRlIHRvIHN0YXJ0IG92ZXIhXG5cblxuICAgICAgICBpZiAoIW9wdGlvbnMudXNlUmVmcmVzaFRva2VuKSB7XG4gICAgICAgICAgZGVidWdSZXF1ZXN0KFwiWW91ciBzZXNzaW9uIGhhcyBleHBpcmVkIGFuZCB0aGUgdXNlUmVmcmVzaFRva2VuIG9wdGlvbiBpcyBzZXQgdG8gZmFsc2UuIFBsZWFzZSByZS1sYXVuY2ggdGhlIGFwcC5cIik7XG4gICAgICAgICAgYXdhaXQgdGhpcy5fY2xlYXJTdGF0ZSgpO1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihzdHJpbmdzXzEuZGVmYXVsdC5leHBpcmVkKTtcbiAgICAgICAgfSAvLyBvdGhlcndpc2UgLT4gYXV0by1yZWZyZXNoIGZhaWxlZC4gU2Vzc2lvbiBleHBpcmVkLlxuICAgICAgICAvLyBOZWVkIHRvIHJlLWxhdW5jaC4gQ2xlYXIgc3RhdGUgdG8gc3RhcnQgb3ZlciFcblxuXG4gICAgICAgIGRlYnVnUmVxdWVzdChcIkF1dG8tcmVmcmVzaCBmYWlsZWQhIFBsZWFzZSByZS1sYXVuY2ggdGhlIGFwcC5cIik7XG4gICAgICAgIGF3YWl0IHRoaXMuX2NsZWFyU3RhdGUoKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHN0cmluZ3NfMS5kZWZhdWx0LmV4cGlyZWQpO1xuICAgICAgfVxuXG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9KSAvLyBIYW5kbGUgNDAzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICBpZiAoZXJyb3Iuc3RhdHVzID09IDQwMykge1xuICAgICAgICBkZWJ1Z1JlcXVlc3QoXCJQZXJtaXNzaW9uIGRlbmllZCEgUGxlYXNlIG1ha2Ugc3VyZSB0aGF0IHlvdSBoYXZlIHJlcXVlc3RlZCB0aGUgcHJvcGVyIHNjb3Blcy5cIik7XG4gICAgICB9XG5cbiAgICAgIHRocm93IGVycm9yO1xuICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAvLyBIYW5kbGUgcmF3IHJlc3BvbnNlcyAoYW55dGhpbmcgb3RoZXIgdGhhbiBqc29uKSAtLS0tLS0tLS0tLS0tXG4gICAgICBpZiAoIWRhdGEpIHJldHVybiBkYXRhO1xuICAgICAgaWYgKHR5cGVvZiBkYXRhID09IFwic3RyaW5nXCIpIHJldHVybiBkYXRhO1xuICAgICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBSZXNwb25zZSkgcmV0dXJuIGRhdGE7IC8vIFJlc29sdmUgUmVmZXJlbmNlcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgcmV0dXJuIChhc3luYyBfZGF0YSA9PiB7XG4gICAgICAgIGlmIChfZGF0YS5yZXNvdXJjZVR5cGUgPT0gXCJCdW5kbGVcIikge1xuICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKChfZGF0YS5lbnRyeSB8fCBbXSkubWFwKGl0ZW0gPT4gcmVzb2x2ZVJlZnMoaXRlbS5yZXNvdXJjZSwgb3B0aW9ucywgX3Jlc29sdmVkUmVmcywgdGhpcywgc2lnbmFsKSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGF3YWl0IHJlc29sdmVSZWZzKF9kYXRhLCBvcHRpb25zLCBfcmVzb2x2ZWRSZWZzLCB0aGlzLCBzaWduYWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9kYXRhO1xuICAgICAgfSkoZGF0YSkgLy8gUGFnaW5hdGlvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAudGhlbihhc3luYyBfZGF0YSA9PiB7XG4gICAgICAgIGlmIChfZGF0YSAmJiBfZGF0YS5yZXNvdXJjZVR5cGUgPT0gXCJCdW5kbGVcIikge1xuICAgICAgICAgIGNvbnN0IGxpbmtzID0gX2RhdGEubGluayB8fCBbXTtcblxuICAgICAgICAgIGlmIChvcHRpb25zLmZsYXQpIHtcbiAgICAgICAgICAgIF9kYXRhID0gKF9kYXRhLmVudHJ5IHx8IFtdKS5tYXAoZW50cnkgPT4gZW50cnkucmVzb3VyY2UpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChvcHRpb25zLm9uUGFnZSkge1xuICAgICAgICAgICAgYXdhaXQgb3B0aW9ucy5vblBhZ2UoX2RhdGEsIE9iamVjdC5hc3NpZ24oe30sIF9yZXNvbHZlZFJlZnMpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoLS1vcHRpb25zLnBhZ2VMaW1pdCkge1xuICAgICAgICAgICAgY29uc3QgbmV4dCA9IGxpbmtzLmZpbmQobCA9PiBsLnJlbGF0aW9uID09IFwibmV4dFwiKTtcbiAgICAgICAgICAgIF9kYXRhID0gbGliXzEubWFrZUFycmF5KF9kYXRhKTtcblxuICAgICAgICAgICAgaWYgKG5leHQgJiYgbmV4dC51cmwpIHtcbiAgICAgICAgICAgICAgY29uc3QgbmV4dFBhZ2UgPSBhd2FpdCB0aGlzLnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgIHVybDogbmV4dC51cmwsXG4gICAgICAgICAgICAgICAgLy8gQWJvcnRpbmcgdGhlIG1haW4gcmVxdWVzdCAoZXZlbiBhZnRlciBpdCBpcyBjb21wbGV0ZSlcbiAgICAgICAgICAgICAgICAvLyBtdXN0IHByb3BhZ2F0ZSB0byBhbnkgY2hpbGQgcmVxdWVzdHMgYW5kIGFib3J0IHRoZW0hXG4gICAgICAgICAgICAgICAgLy8gVG8gZG8gc28sIGp1c3QgcGFzcyB0aGUgc2FtZSBBYm9ydFNpZ25hbCBpZiBvbmUgaXNcbiAgICAgICAgICAgICAgICAvLyBwcm92aWRlZC5cbiAgICAgICAgICAgICAgICBzaWduYWxcbiAgICAgICAgICAgICAgfSwgb3B0aW9ucywgX3Jlc29sdmVkUmVmcyk7XG5cbiAgICAgICAgICAgICAgaWYgKG9wdGlvbnMub25QYWdlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAob3B0aW9ucy5yZXNvbHZlUmVmZXJlbmNlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKF9yZXNvbHZlZFJlZnMsIG5leHRQYWdlLnJlZmVyZW5jZXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBfZGF0YS5jb25jYXQobGliXzEubWFrZUFycmF5KG5leHRQYWdlLmRhdGEgfHwgbmV4dFBhZ2UpKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBfZGF0YS5jb25jYXQobGliXzEubWFrZUFycmF5KG5leHRQYWdlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9kYXRhO1xuICAgICAgfSkgLy8gRmluYWxpemUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAudGhlbihfZGF0YSA9PiB7XG4gICAgICAgIGlmIChvcHRpb25zLmdyYXBoKSB7XG4gICAgICAgICAgX3Jlc29sdmVkUmVmcyA9IHt9O1xuICAgICAgICB9IGVsc2UgaWYgKCFvcHRpb25zLm9uUGFnZSAmJiBvcHRpb25zLnJlc29sdmVSZWZlcmVuY2VzLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYXRhOiBfZGF0YSxcbiAgICAgICAgICAgIHJlZmVyZW5jZXM6IF9yZXNvbHZlZFJlZnNcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9kYXRhO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBhY2Nlc3MgdG9rZW4gYW5kIHJlZnJlc2ggdG9rZW4gYXJlIHByZXNlbnQuIElmIHRoZXkgYXJlLCBhbmQgaWZcbiAgICogdGhlIGFjY2VzcyB0b2tlbiBpcyBleHBpcmVkIG9yIGlzIGFib3V0IHRvIGV4cGlyZSBpbiB0aGUgbmV4dCAxMCBzZWNvbmRzLFxuICAgKiBjYWxscyBgdGhpcy5yZWZyZXNoKClgIHRvIG9idGFpbiBuZXcgYWNjZXNzIHRva2VuLlxuICAgKiBAcGFyYW0gcmVxdWVzdE9wdGlvbnMgQW55IG9wdGlvbnMgdG8gcGFzcyB0byB0aGUgZmV0Y2ggY2FsbC4gTW9zdCBvZiB0aGVtXG4gICAqIHdpbGwgYmUgb3ZlcnJpZGRlbiwgYml0IGl0IG1pZ2h0IHN0aWxsIGJlIHVzZWZ1bCBmb3IgcGFzc2luZyBhZGRpdGlvbmFsXG4gICAqIHJlcXVlc3Qgb3B0aW9ucyBvciBhbiBhYm9ydCBzaWduYWwuXG4gICAqIEBjYXRlZ29yeSBSZXF1ZXN0XG4gICAqL1xuXG5cbiAgcmVmcmVzaElmTmVlZGVkKHJlcXVlc3RPcHRpb25zID0ge30pIHtcbiAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IHRoaXMuZ2V0U3RhdGUoXCJ0b2tlblJlc3BvbnNlLmFjY2Vzc190b2tlblwiKTtcbiAgICBjb25zdCByZWZyZXNoVG9rZW4gPSB0aGlzLmdldFN0YXRlKFwidG9rZW5SZXNwb25zZS5yZWZyZXNoX3Rva2VuXCIpO1xuICAgIGNvbnN0IGV4cGlyZXNBdCA9IHRoaXMuc3RhdGUuZXhwaXJlc0F0IHx8IDA7XG5cbiAgICBpZiAoYWNjZXNzVG9rZW4gJiYgcmVmcmVzaFRva2VuICYmIGV4cGlyZXNBdCAtIDEwIDwgRGF0ZS5ub3coKSAvIDEwMDApIHtcbiAgICAgIHJldHVybiB0aGlzLnJlZnJlc2gocmVxdWVzdE9wdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zdGF0ZSk7XG4gIH1cbiAgLyoqXG4gICAqIFVzZSB0aGUgcmVmcmVzaCB0b2tlbiB0byBvYnRhaW4gbmV3IGFjY2VzcyB0b2tlbi4gSWYgdGhlIHJlZnJlc2ggdG9rZW4gaXNcbiAgICogZXhwaXJlZCAob3IgdGhpcyBmYWlscyBmb3IgYW55IG90aGVyIHJlYXNvbikgaXQgd2lsbCBiZSBkZWxldGVkIGZyb20gdGhlXG4gICAqIHN0YXRlLCBzbyB0aGF0IHdlIGRvbid0IGVudGVyIGludG8gbG9vcHMgdHJ5aW5nIHRvIHJlLWF1dGhvcml6ZS5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgaXMgdHlwaWNhbGx5IGNhbGxlZCBpbnRlcm5hbGx5IGZyb20gW1tDbGllbnQucmVxdWVzdF1dIGlmXG4gICAqIGNlcnRhaW4gcmVxdWVzdCBmYWlscyB3aXRoIDQwMS5cbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RPcHRpb25zIEFueSBvcHRpb25zIHRvIHBhc3MgdG8gdGhlIGZldGNoIGNhbGwuIE1vc3Qgb2YgdGhlbVxuICAgKiB3aWxsIGJlIG92ZXJyaWRkZW4sIGJpdCBpdCBtaWdodCBzdGlsbCBiZSB1c2VmdWwgZm9yIHBhc3NpbmcgYWRkaXRpb25hbFxuICAgKiByZXF1ZXN0IG9wdGlvbnMgb3IgYW4gYWJvcnQgc2lnbmFsLlxuICAgKiBAY2F0ZWdvcnkgUmVxdWVzdFxuICAgKi9cblxuXG4gIHJlZnJlc2gocmVxdWVzdE9wdGlvbnMgPSB7fSkge1xuICAgIHZhciBfYSwgX2I7XG5cbiAgICBjb25zdCBkZWJ1Z1JlZnJlc2ggPSBsaWJfMS5kZWJ1Zy5leHRlbmQoXCJjbGllbnQ6cmVmcmVzaFwiKTtcbiAgICBkZWJ1Z1JlZnJlc2goXCJBdHRlbXB0aW5nIHRvIHJlZnJlc2ggd2l0aCByZWZyZXNoX3Rva2VuLi4uXCIpO1xuICAgIGNvbnN0IHJlZnJlc2hUb2tlbiA9IChfYiA9IChfYSA9IHRoaXMuc3RhdGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50b2tlblJlc3BvbnNlKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IucmVmcmVzaF90b2tlbjtcblxuICAgIGlmICghcmVmcmVzaFRva2VuKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gcmVmcmVzaC4gTm8gcmVmcmVzaF90b2tlbiBmb3VuZC5cIik7XG4gICAgfVxuXG4gICAgY29uc3QgdG9rZW5VcmkgPSB0aGlzLnN0YXRlLnRva2VuVXJpO1xuXG4gICAgaWYgKCF0b2tlblVyaSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIHJlZnJlc2guIE5vIHRva2VuVXJpIGZvdW5kLlwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBzY29wZXMgPSB0aGlzLmdldFN0YXRlKFwidG9rZW5SZXNwb25zZS5zY29wZVwiKSB8fCBcIlwiO1xuICAgIGNvbnN0IGhhc09mZmxpbmVBY2Nlc3MgPSBzY29wZXMuc2VhcmNoKC9cXGJvZmZsaW5lX2FjY2Vzc1xcYi8pID4gLTE7XG4gICAgY29uc3QgaGFzT25saW5lQWNjZXNzID0gc2NvcGVzLnNlYXJjaCgvXFxib25saW5lX2FjY2Vzc1xcYi8pID4gLTE7XG5cbiAgICBpZiAoIWhhc09mZmxpbmVBY2Nlc3MgJiYgIWhhc09ubGluZUFjY2Vzcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIHJlZnJlc2guIE5vIG9mZmxpbmVfYWNjZXNzIG9yIG9ubGluZV9hY2Nlc3Mgc2NvcGUgZm91bmQuXCIpO1xuICAgIH0gLy8gVGhpcyBtZXRob2QgaXMgdHlwaWNhbGx5IGNhbGxlZCBpbnRlcm5hbGx5IGZyb20gYHJlcXVlc3RgIGlmIGNlcnRhaW5cbiAgICAvLyByZXF1ZXN0IGZhaWxzIHdpdGggNDAxLiBIb3dldmVyLCBjbGllbnRzIHdpbGwgb2Z0ZW4gcnVuIG11bHRpcGxlXG4gICAgLy8gcmVxdWVzdHMgaW4gcGFyYWxsZWwgd2hpY2ggbWF5IHJlc3VsdCBpbiBtdWx0aXBsZSByZWZyZXNoIGNhbGxzLlxuICAgIC8vIFRvIGF2b2lkIHRoYXQsIHdlIGtlZXAgYSByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnQgcmVmcmVzaCB0YXNrIChpZiBhbnkpLlxuXG5cbiAgICBpZiAoIXRoaXMuX3JlZnJlc2hUYXNrKSB7XG4gICAgICBjb25zdCByZWZyZXNoUmVxdWVzdE9wdGlvbnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBjcmVkZW50aWFsczogdGhpcy5lbnZpcm9ubWVudC5vcHRpb25zLnJlZnJlc2hUb2tlbldpdGhDcmVkZW50aWFscyB8fCBcInNhbWUtb3JpZ2luXCJcbiAgICAgIH0sIHJlcXVlc3RPcHRpb25zKSwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBtb2RlOiBcImNvcnNcIixcbiAgICAgICAgaGVhZGVyczogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCByZXF1ZXN0T3B0aW9ucy5oZWFkZXJzIHx8IHt9KSwge1xuICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCJcbiAgICAgICAgfSksXG4gICAgICAgIGJvZHk6IGBncmFudF90eXBlPXJlZnJlc2hfdG9rZW4mcmVmcmVzaF90b2tlbj0ke2VuY29kZVVSSUNvbXBvbmVudChyZWZyZXNoVG9rZW4pfWBcbiAgICAgIH0pOyAvLyBjdXN0b20gYXV0aG9yaXphdGlvbiBoZWFkZXIgY2FuIGJlIHBhc3NlZCBvbiBtYW51YWwgY2FsbHNcblxuICAgICAgaWYgKCEoXCJhdXRob3JpemF0aW9uXCIgaW4gcmVmcmVzaFJlcXVlc3RPcHRpb25zLmhlYWRlcnMpKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBjbGllbnRTZWNyZXQsXG4gICAgICAgICAgY2xpZW50SWRcbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgaWYgKGNsaWVudFNlY3JldCkge1xuICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICByZWZyZXNoUmVxdWVzdE9wdGlvbnMuaGVhZGVycy5hdXRob3JpemF0aW9uID0gXCJCYXNpYyBcIiArIHRoaXMuZW52aXJvbm1lbnQuYnRvYShjbGllbnRJZCArIFwiOlwiICsgY2xpZW50U2VjcmV0KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9yZWZyZXNoVGFzayA9IGxpYl8xLnJlcXVlc3QodG9rZW5VcmksIHJlZnJlc2hSZXF1ZXN0T3B0aW9ucykudGhlbihkYXRhID0+IHtcbiAgICAgICAgaWYgKCFkYXRhLmFjY2Vzc190b2tlbikge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGFjY2VzcyB0b2tlbiByZWNlaXZlZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlYnVnUmVmcmVzaChcIlJlY2VpdmVkIG5ldyBhY2Nlc3MgdG9rZW4gcmVzcG9uc2UgJU9cIiwgZGF0YSk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5zdGF0ZS50b2tlblJlc3BvbnNlLCBkYXRhKTtcbiAgICAgICAgdGhpcy5zdGF0ZS5leHBpcmVzQXQgPSBsaWJfMS5nZXRBY2Nlc3NUb2tlbkV4cGlyYXRpb24oZGF0YSwgdGhpcy5lbnZpcm9ubWVudCk7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlO1xuICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICB2YXIgX2EsIF9iO1xuXG4gICAgICAgIGlmICgoX2IgPSAoX2EgPSB0aGlzLnN0YXRlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudG9rZW5SZXNwb25zZSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnJlZnJlc2hfdG9rZW4pIHtcbiAgICAgICAgICBkZWJ1Z1JlZnJlc2goXCJEZWxldGluZyB0aGUgZXhwaXJlZCBvciBpbnZhbGlkIHJlZnJlc2ggdG9rZW4uXCIpO1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLnN0YXRlLnRva2VuUmVzcG9uc2UucmVmcmVzaF90b2tlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfSkuZmluYWxseSgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3JlZnJlc2hUYXNrID0gbnVsbDtcbiAgICAgICAgY29uc3Qga2V5ID0gdGhpcy5zdGF0ZS5rZXk7XG5cbiAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgIHRoaXMuZW52aXJvbm1lbnQuZ2V0U3RvcmFnZSgpLnNldChrZXksIHRoaXMuc3RhdGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlYnVnUmVmcmVzaChcIk5vICdrZXknIGZvdW5kIGluIENsaW50LnN0YXRlLiBDYW5ub3QgcGVyc2lzdCB0aGUgaW5zdGFuY2UuXCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fcmVmcmVzaFRhc2s7XG4gIH0gLy8gdXRpbHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBHcm91cHMgdGhlIG9ic2VydmF0aW9ucyBieSBjb2RlLiBSZXR1cm5zIGEgbWFwIHRoYXQgd2lsbCBsb29rIGxpa2U6XG4gICAqIGBgYGpzXG4gICAqIGNvbnN0IG1hcCA9IGNsaWVudC5ieUNvZGVzKG9ic2VydmF0aW9ucywgXCJjb2RlXCIpO1xuICAgKiAvLyBtYXAgPSB7XG4gICAqIC8vICAgICBcIjU1Mjg0LTRcIjogWyBvYnNlcnZhdGlvbjEsIG9ic2VydmF0aW9uMiBdLFxuICAgKiAvLyAgICAgXCI2MDgyLTJcIjogWyBvYnNlcnZhdGlvbjMgXVxuICAgKiAvLyB9XG4gICAqIGBgYFxuICAgKiBAcGFyYW0gb2JzZXJ2YXRpb25zIEFycmF5IG9mIG9ic2VydmF0aW9uc1xuICAgKiBAcGFyYW0gcHJvcGVydHkgVGhlIG5hbWUgb2YgYSBDb2RlYWJsZUNvbmNlcHQgcHJvcGVydHkgdG8gZ3JvdXAgYnlcbiAgICogQHRvZG8gVGhpcyBzaG91bGQgYmUgZGVwcmVjYXRlZCBhbmQgbW92ZWQgZWxzZXdoZXJlLiBPbmUgc2hvdWxkIG5vdCBoYXZlXG4gICAqIHRvIG9idGFpbiBhbiBpbnN0YW5jZSBvZiBbW0NsaWVudF1dIGp1c3QgdG8gdXNlIHV0aWxpdHkgZnVuY3Rpb25zIGxpa2UgdGhpcy5cbiAgICogQGRlcHJlY2F0ZWRcbiAgICogQGNhdGVnb3J5IFV0aWxpdHlcbiAgICovXG5cblxuICBieUNvZGUob2JzZXJ2YXRpb25zLCBwcm9wZXJ0eSkge1xuICAgIHJldHVybiBsaWJfMS5ieUNvZGUob2JzZXJ2YXRpb25zLCBwcm9wZXJ0eSk7XG4gIH1cbiAgLyoqXG4gICAqIEZpcnN0IGdyb3VwcyB0aGUgb2JzZXJ2YXRpb25zIGJ5IGNvZGUgdXNpbmcgYGJ5Q29kZWAuIFRoZW4gcmV0dXJucyBhIGZ1bmN0aW9uXG4gICAqIHRoYXQgYWNjZXB0cyBjb2RlcyBhcyBhcmd1bWVudHMgYW5kIHdpbGwgcmV0dXJuIGEgZmxhdCBhcnJheSBvZiBvYnNlcnZhdGlvbnNcbiAgICogaGF2aW5nIHRoYXQgY29kZXMuIEV4YW1wbGU6XG4gICAqIGBgYGpzXG4gICAqIGNvbnN0IGZpbHRlciA9IGNsaWVudC5ieUNvZGVzKG9ic2VydmF0aW9ucywgXCJjYXRlZ29yeVwiKTtcbiAgICogZmlsdGVyKFwibGFib3JhdG9yeVwiKSAvLyA9PiBbIG9ic2VydmF0aW9uMSwgb2JzZXJ2YXRpb24yIF1cbiAgICogZmlsdGVyKFwidml0YWwtc2lnbnNcIikgLy8gPT4gWyBvYnNlcnZhdGlvbjMgXVxuICAgKiBmaWx0ZXIoXCJsYWJvcmF0b3J5XCIsIFwidml0YWwtc2lnbnNcIikgLy8gPT4gWyBvYnNlcnZhdGlvbjEsIG9ic2VydmF0aW9uMiwgb2JzZXJ2YXRpb24zIF1cbiAgICogYGBgXG4gICAqIEBwYXJhbSBvYnNlcnZhdGlvbnMgQXJyYXkgb2Ygb2JzZXJ2YXRpb25zXG4gICAqIEBwYXJhbSBwcm9wZXJ0eSBUaGUgbmFtZSBvZiBhIENvZGVhYmxlQ29uY2VwdCBwcm9wZXJ0eSB0byBncm91cCBieVxuICAgKiBAdG9kbyBUaGlzIHNob3VsZCBiZSBkZXByZWNhdGVkIGFuZCBtb3ZlZCBlbHNld2hlcmUuIE9uZSBzaG91bGQgbm90IGhhdmVcbiAgICogdG8gb2J0YWluIGFuIGluc3RhbmNlIG9mIFtbQ2xpZW50XV0ganVzdCB0byB1c2UgdXRpbGl0eSBmdW5jdGlvbnMgbGlrZSB0aGlzLlxuICAgKiBAZGVwcmVjYXRlZFxuICAgKiBAY2F0ZWdvcnkgVXRpbGl0eVxuICAgKi9cblxuXG4gIGJ5Q29kZXMob2JzZXJ2YXRpb25zLCBwcm9wZXJ0eSkge1xuICAgIHJldHVybiBsaWJfMS5ieUNvZGVzKG9ic2VydmF0aW9ucywgcHJvcGVydHkpO1xuICB9XG4gIC8qKlxuICAgKiBXYWxrcyB0aHJvdWdoIGFuIG9iamVjdCAob3IgYXJyYXkpIGFuZCByZXR1cm5zIHRoZSB2YWx1ZSBmb3VuZCBhdCB0aGVcbiAgICogcHJvdmlkZWQgcGF0aC4gVGhpcyBmdW5jdGlvbiBpcyB2ZXJ5IHNpbXBsZSBzbyBpdCBpbnRlbnRpb25hbGx5IGRvZXMgbm90XG4gICAqIHN1cHBvcnQgYW55IGFyZ3VtZW50IHBvbHltb3JwaGlzbSwgbWVhbmluZyB0aGF0IHRoZSBwYXRoIGNhbiBvbmx5IGJlIGFcbiAgICogZG90LXNlcGFyYXRlZCBzdHJpbmcuIElmIHRoZSBwYXRoIGlzIGludmFsaWQgcmV0dXJucyB1bmRlZmluZWQuXG4gICAqIEBwYXJhbSBvYmogVGhlIG9iamVjdCAob3IgQXJyYXkpIHRvIHdhbGsgdGhyb3VnaFxuICAgKiBAcGFyYW0gcGF0aCBUaGUgcGF0aCAoZWcuIFwiYS5iLjQuY1wiKVxuICAgKiBAcmV0dXJucyB7Kn0gV2hhdGV2ZXIgaXMgZm91bmQgaW4gdGhlIHBhdGggb3IgdW5kZWZpbmVkXG4gICAqIEB0b2RvIFRoaXMgc2hvdWxkIGJlIGRlcHJlY2F0ZWQgYW5kIG1vdmVkIGVsc2V3aGVyZS4gT25lIHNob3VsZCBub3QgaGF2ZVxuICAgKiB0byBvYnRhaW4gYW4gaW5zdGFuY2Ugb2YgW1tDbGllbnRdXSBqdXN0IHRvIHVzZSB1dGlsaXR5IGZ1bmN0aW9ucyBsaWtlIHRoaXMuXG4gICAqIEBkZXByZWNhdGVkXG4gICAqIEBjYXRlZ29yeSBVdGlsaXR5XG4gICAqL1xuXG5cbiAgZ2V0UGF0aChvYmosIHBhdGggPSBcIlwiKSB7XG4gICAgcmV0dXJuIGxpYl8xLmdldFBhdGgob2JqLCBwYXRoKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhIGNvcHkgb2YgdGhlIGNsaWVudCBzdGF0ZS4gQWNjZXB0cyBhIGRvdC1zZXBhcmF0ZWQgcGF0aCBhcmd1bWVudFxuICAgKiAoc2FtZSBhcyBmb3IgYGdldFBhdGhgKSB0byBhbGxvdyBmb3Igc2VsZWN0aW5nIHNwZWNpZmljIHByb3BlcnRpZXMuXG4gICAqIEV4YW1wbGVzOlxuICAgKiBgYGBqc1xuICAgKiBjbGllbnQuZ2V0U3RhdGUoKTsgLy8gLT4gdGhlIGVudGlyZSBzdGF0ZSBvYmplY3RcbiAgICogY2xpZW50LmdldFN0YXRlKFwic2VydmVyVXJsXCIpOyAvLyAtPiB0aGUgVVJMIHdlIGFyZSBjb25uZWN0ZWQgdG9cbiAgICogY2xpZW50LmdldFN0YXRlKFwidG9rZW5SZXNwb25zZS5wYXRpZW50XCIpOyAvLyAtPiBUaGUgc2VsZWN0ZWQgcGF0aWVudCBJRCAoaWYgYW55KVxuICAgKiBgYGBcbiAgICogQHBhcmFtIHBhdGggVGhlIHBhdGggKGVnLiBcImEuYi40LmNcIilcbiAgICogQHJldHVybnMgeyp9IFdoYXRldmVyIGlzIGZvdW5kIGluIHRoZSBwYXRoIG9yIHVuZGVmaW5lZFxuICAgKi9cblxuXG4gIGdldFN0YXRlKHBhdGggPSBcIlwiKSB7XG4gICAgcmV0dXJuIGxpYl8xLmdldFBhdGgoT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSksIHBhdGgpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHdpbGwgYmUgcmVzb2x2ZWQgd2l0aCB0aGUgZmhpciB2ZXJzaW9uIGFzIGRlZmluZWRcbiAgICogaW4gdGhlIENhcGFiaWxpdHlTdGF0ZW1lbnQuXG4gICAqL1xuXG5cbiAgZ2V0RmhpclZlcnNpb24oKSB7XG4gICAgcmV0dXJuIGxpYl8xLmZldGNoQ29uZm9ybWFuY2VTdGF0ZW1lbnQodGhpcy5zdGF0ZS5zZXJ2ZXJVcmwpLnRoZW4obWV0YWRhdGEgPT4gbWV0YWRhdGEuZmhpclZlcnNpb24pO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHdpbGwgYmUgcmVzb2x2ZWQgd2l0aCB0aGUgbnVtZXJpYyBmaGlyIHZlcnNpb25cbiAgICogLSAyIGZvciBEU1RVMlxuICAgKiAtIDMgZm9yIFNUVTNcbiAgICogLSA0IGZvciBSNFxuICAgKiAtIDAgaWYgdGhlIHZlcnNpb24gaXMgbm90IGtub3duXG4gICAqL1xuXG5cbiAgZ2V0RmhpclJlbGVhc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RmhpclZlcnNpb24oKS50aGVuKHYgPT4ge1xuICAgICAgdmFyIF9hO1xuXG4gICAgICByZXR1cm4gKF9hID0gc2V0dGluZ3NfMS5maGlyVmVyc2lvbnNbdl0pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IDA7XG4gICAgfSk7XG4gIH1cblxufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBDbGllbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmNsYXNzIEh0dHBFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZSA9IFwiVW5rbm93biBlcnJvclwiLCBzdGF0dXNDb2RlID0gMCwgc3RhdHVzVGV4dCA9IFwiRXJyb3JcIiwgYm9keSA9IG51bGwpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMubmFtZSA9IFwiSHR0cEVycm9yXCI7XG4gICAgdGhpcy5zdGF0dXNDb2RlID0gc3RhdHVzQ29kZTtcbiAgICB0aGlzLnN0YXR1cyA9IHN0YXR1c0NvZGU7XG4gICAgdGhpcy5zdGF0dXNUZXh0ID0gc3RhdHVzVGV4dDtcbiAgICB0aGlzLmJvZHkgPSBib2R5O1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICBzdGF0dXNDb2RlOiB0aGlzLnN0YXR1c0NvZGUsXG4gICAgICBzdGF0dXM6IHRoaXMuc3RhdHVzLFxuICAgICAgc3RhdHVzVGV4dDogdGhpcy5zdGF0dXNUZXh0LFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgYm9keTogdGhpcy5ib2R5XG4gICAgfTtcbiAgfVxuXG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEh0dHBFcnJvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuY29uc3Qgc21hcnRfMSA9IHJlcXVpcmUoXCIuLi9zbWFydFwiKTtcblxuY29uc3QgQ2xpZW50XzEgPSByZXF1aXJlKFwiLi4vQ2xpZW50XCIpO1xuXG5jb25zdCBCcm93c2VyU3RvcmFnZV8xID0gcmVxdWlyZShcIi4uL3N0b3JhZ2UvQnJvd3NlclN0b3JhZ2VcIik7XG4vKipcbiAqIEJyb3dzZXIgQWRhcHRlclxuICovXG5cblxuY2xhc3MgQnJvd3NlckFkYXB0ZXIge1xuICAvKipcbiAgICogQHBhcmFtIG9wdGlvbnMgRW52aXJvbm1lbnQtc3BlY2lmaWMgb3B0aW9uc1xuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogU3RvcmVzIHRoZSBVUkwgaW5zdGFuY2UgYXNzb2NpYXRlZCB3aXRoIHRoaXMgYWRhcHRlclxuICAgICAqL1xuICAgIHRoaXMuX3VybCA9IG51bGw7XG4gICAgLyoqXG4gICAgICogSG9sZHMgdGhlIFN0b3JhZ2UgaW5zdGFuY2UgYXNzb2NpYXRlZCB3aXRoIHRoaXMgaW5zdGFuY2VcbiAgICAgKi9cblxuICAgIHRoaXMuX3N0b3JhZ2UgPSBudWxsO1xuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgLy8gUmVwbGFjZXMgdGhlIGJyb3dzZXIncyBjdXJyZW50IFVSTFxuICAgICAgLy8gdXNpbmcgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlIEFQSSBvciBieSByZWxvYWRpbmcuXG4gICAgICByZXBsYWNlQnJvd3Nlckhpc3Rvcnk6IHRydWUsXG4gICAgICAvLyBXaGVuIHNldCB0byB0cnVlLCB0aGlzIHZhcmlhYmxlIHdpbGwgZnVsbHkgdXRpbGl6ZVxuICAgICAgLy8gSFRNTDUgc2Vzc2lvblN0b3JhZ2UgQVBJLlxuICAgICAgLy8gVGhpcyB2YXJpYWJsZSBjYW4gYmUgb3ZlcnJpZGRlbiB0byBmYWxzZSBieSBzZXR0aW5nXG4gICAgICAvLyBGSElSLm9hdXRoMi5zZXR0aW5ncy5mdWxsU2Vzc2lvblN0b3JhZ2VTdXBwb3J0ID0gZmFsc2UuXG4gICAgICAvLyBXaGVuIHNldCB0byBmYWxzZSwgdGhlIHNlc3Npb25TdG9yYWdlIHdpbGwgYmUga2V5ZWRcbiAgICAgIC8vIGJ5IGEgc3RhdGUgdmFyaWFibGUuIFRoaXMgaXMgdG8gYWxsb3cgdGhlIGVtYmVkZGVkIElFIGJyb3dzZXJcbiAgICAgIC8vIGluc3RhbmNlcyBpbnN0YW50aWF0ZWQgb24gYSBzaW5nbGUgdGhyZWFkIHRvIGNvbnRpbnVlIHRvXG4gICAgICAvLyBmdW5jdGlvbiB3aXRob3V0IGhhdmluZyBzZXNzaW9uU3RvcmFnZSBkYXRhIHNoYXJlZFxuICAgICAgLy8gYWNyb3NzIHRoZSBlbWJlZGRlZCBJRSBpbnN0YW5jZXMuXG4gICAgICBmdWxsU2Vzc2lvblN0b3JhZ2VTdXBwb3J0OiB0cnVlLFxuICAgICAgLy8gRG8gd2Ugd2FudCB0byBzZW5kIGNvb2tpZXMgd2hpbGUgbWFraW5nIGEgcmVxdWVzdCB0byB0aGUgdG9rZW5cbiAgICAgIC8vIGVuZHBvaW50IGluIG9yZGVyIHRvIG9idGFpbiBuZXcgYWNjZXNzIHRva2VuIHVzaW5nIGV4aXN0aW5nXG4gICAgICAvLyByZWZyZXNoIHRva2VuLiBJbiByYXJlIGNhc2VzIHRoZSBhdXRoIHNlcnZlciBtaWdodCByZXF1aXJlIHRoZVxuICAgICAgLy8gY2xpZW50IHRvIHNlbmQgY29va2llcyBhbG9uZyB3aXRoIHRob3NlIHJlcXVlc3RzLiBJbiB0aGlzIGNhc2VcbiAgICAgIC8vIGRldmVsb3BlcnMgd2lsbCBoYXZlIHRvIGNoYW5nZSB0aGlzIGJlZm9yZSBpbml0aWFsaXppbmcgdGhlIGFwcFxuICAgICAgLy8gbGlrZSBzbzpcbiAgICAgIC8vIGBGSElSLm9hdXRoMi5zZXR0aW5ncy5yZWZyZXNoVG9rZW5XaXRoQ3JlZGVudGlhbHMgPSBcImluY2x1ZGVcIjtgXG4gICAgICAvLyBvclxuICAgICAgLy8gYEZISVIub2F1dGgyLnNldHRpbmdzLnJlZnJlc2hUb2tlbldpdGhDcmVkZW50aWFscyA9IFwic2FtZS1vcmlnaW5cIjtgXG4gICAgICAvLyBDYW4gYmUgb25lIG9mOlxuICAgICAgLy8gXCJpbmNsdWRlXCIgICAgIC0gYWx3YXlzIHNlbmQgY29va2llc1xuICAgICAgLy8gXCJzYW1lLW9yaWdpblwiIC0gb25seSBzZW5kIGNvb2tpZXMgaWYgd2UgYXJlIG9uIHRoZSBzYW1lIGRvbWFpbiAoZGVmYXVsdClcbiAgICAgIC8vIFwib21pdFwiICAgICAgICAtIGRvIG5vdCBzZW5kIGNvb2tpZXNcbiAgICAgIHJlZnJlc2hUb2tlbldpdGhDcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiXG4gICAgfSwgb3B0aW9ucyk7XG4gIH1cbiAgLyoqXG4gICAqIEdpdmVuIGEgcmVsYXRpdmUgcGF0aCwgcmV0dXJucyBhbiBhYnNvbHV0ZSB1cmwgdXNpbmcgdGhlIGluc3RhbmNlIGJhc2UgVVJMXG4gICAqL1xuXG5cbiAgcmVsYXRpdmUocGF0aCkge1xuICAgIHJldHVybiBuZXcgVVJMKHBhdGgsIHRoaXMuZ2V0VXJsKCkuaHJlZikuaHJlZjtcbiAgfVxuICAvKipcbiAgICogSW4gYnJvd3NlcnMgd2UgbmVlZCB0byBiZSBhYmxlIHRvIChkeW5hbWljYWxseSkgY2hlY2sgaWYgZmhpci5qcyBpc1xuICAgKiBpbmNsdWRlZCBpbiB0aGUgcGFnZS4gSWYgaXQgaXMsIGl0IHNob3VsZCBoYXZlIGNyZWF0ZWQgYSBcImZoaXJcIiB2YXJpYWJsZVxuICAgKiBpbiB0aGUgZ2xvYmFsIHNjb3BlLlxuICAgKi9cblxuXG4gIGdldCBmaGlyKCkge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICByZXR1cm4gdHlwZW9mIGZoaXIgPT09IFwiZnVuY3Rpb25cIiA/IGZoaXIgOiBudWxsO1xuICB9XG4gIC8qKlxuICAgKiBHaXZlbiB0aGUgY3VycmVudCBlbnZpcm9ubWVudCwgdGhpcyBtZXRob2QgbXVzdCByZXR1cm4gdGhlIGN1cnJlbnQgdXJsXG4gICAqIGFzIFVSTCBpbnN0YW5jZVxuICAgKi9cblxuXG4gIGdldFVybCgpIHtcbiAgICBpZiAoIXRoaXMuX3VybCkge1xuICAgICAgdGhpcy5fdXJsID0gbmV3IFVSTChsb2NhdGlvbiArIFwiXCIpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl91cmw7XG4gIH1cbiAgLyoqXG4gICAqIEdpdmVuIHRoZSBjdXJyZW50IGVudmlyb25tZW50LCB0aGlzIG1ldGhvZCBtdXN0IHJlZGlyZWN0IHRvIHRoZSBnaXZlblxuICAgKiBwYXRoXG4gICAqL1xuXG5cbiAgcmVkaXJlY3QodG8pIHtcbiAgICBsb2NhdGlvbi5ocmVmID0gdG87XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgYSBCcm93c2VyU3RvcmFnZSBvYmplY3Qgd2hpY2ggaXMganVzdCBhIHdyYXBwZXIgYXJvdW5kXG4gICAqIHNlc3Npb25TdG9yYWdlXG4gICAqL1xuXG5cbiAgZ2V0U3RvcmFnZSgpIHtcbiAgICBpZiAoIXRoaXMuX3N0b3JhZ2UpIHtcbiAgICAgIHRoaXMuX3N0b3JhZ2UgPSBuZXcgQnJvd3NlclN0b3JhZ2VfMS5kZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3N0b3JhZ2U7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIEFib3J0Q29udHJvbGxlciBjb25zdHJ1Y3Rvci4gSW4gYnJvd3NlcnMsXG4gICAqIEFib3J0Q29udHJvbGxlciB3aWxsIGFsd2F5cyBiZSBhdmFpbGFibGUgYXMgZ2xvYmFsIChuYXRpdmUgb3IgcG9seWZpbGxlZClcbiAgICovXG5cblxuICBnZXRBYm9ydENvbnRyb2xsZXIoKSB7XG4gICAgcmV0dXJuIEFib3J0Q29udHJvbGxlcjtcbiAgfVxuICAvKipcbiAgICogQVNDSUkgc3RyaW5nIHRvIEJhc2U2NFxuICAgKi9cblxuXG4gIGF0b2Ioc3RyKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5hdG9iKHN0cik7XG4gIH1cbiAgLyoqXG4gICAqIEJhc2U2NCB0byBBU0NJSSBzdHJpbmdcbiAgICovXG5cblxuICBidG9hKHN0cikge1xuICAgIHJldHVybiB3aW5kb3cuYnRvYShzdHIpO1xuICB9XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuZCByZXR1cm5zIGFkYXB0ZXItYXdhcmUgU01BUlQgYXBpLiBOb3QgdGhhdCB3aGlsZSB0aGUgc2hhcGUgb2ZcbiAgICogdGhlIHJldHVybmVkIG9iamVjdCBpcyB3ZWxsIGtub3duLCB0aGUgYXJndW1lbnRzIHRvIHRoaXMgZnVuY3Rpb24gYXJlIG5vdC5cbiAgICogVGhvc2Ugd2hvIG92ZXJyaWRlIHRoaXMgbWV0aG9kIGFyZSBmcmVlIHRvIHJlcXVpcmUgYW55IGVudmlyb25tZW50LXNwZWNpZmljXG4gICAqIGFyZ3VtZW50cy4gRm9yIGV4YW1wbGUgaW4gbm9kZSB3ZSB3aWxsIG5lZWQgYSByZXF1ZXN0LCBhIHJlc3BvbnNlIGFuZFxuICAgKiBvcHRpb25hbGx5IGEgc3RvcmFnZSBvciBzdG9yYWdlIGZhY3RvcnkgZnVuY3Rpb24uXG4gICAqL1xuXG5cbiAgZ2V0U21hcnRBcGkoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlYWR5OiAoLi4uYXJncykgPT4gc21hcnRfMS5yZWFkeSh0aGlzLCAuLi5hcmdzKSxcbiAgICAgIGF1dGhvcml6ZTogb3B0aW9ucyA9PiBzbWFydF8xLmF1dGhvcml6ZSh0aGlzLCBvcHRpb25zKSxcbiAgICAgIGluaXQ6IG9wdGlvbnMgPT4gc21hcnRfMS5pbml0KHRoaXMsIG9wdGlvbnMpLFxuICAgICAgY2xpZW50OiBzdGF0ZSA9PiBuZXcgQ2xpZW50XzEuZGVmYXVsdCh0aGlzLCBzdGF0ZSksXG4gICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnNcbiAgICB9O1xuICB9XG5cbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gQnJvd3NlckFkYXB0ZXI7IiwiXCJ1c2Ugc3RyaWN0XCI7IC8vIEluIEJyb3dzZXJzIHdlIGNyZWF0ZSBhbiBhZGFwdGVyLCBnZXQgdGhlIFNNQVJUIGFwaSBmcm9tIGl0IGFuZCBidWlsZCB0aGVcbi8vIGdsb2JhbCBGSElSIG9iamVjdFxuXG5jb25zdCBCcm93c2VyQWRhcHRlcl8xID0gcmVxdWlyZShcIi4uL2FkYXB0ZXJzL0Jyb3dzZXJBZGFwdGVyXCIpO1xuXG5jb25zdCBhZGFwdGVyID0gbmV3IEJyb3dzZXJBZGFwdGVyXzEuZGVmYXVsdCgpO1xuY29uc3Qge1xuICByZWFkeSxcbiAgYXV0aG9yaXplLFxuICBpbml0LFxuICBjbGllbnQsXG4gIG9wdGlvbnNcbn0gPSBhZGFwdGVyLmdldFNtYXJ0QXBpKCk7IC8vIFdlIGhhdmUgdHdvIGtpbmRzIG9mIGJyb3dzZXIgYnVpbGRzIC0gXCJwdXJlXCIgZm9yIG5ldyBicm93c2VycyBhbmQgXCJsZWdhY3lcIlxuLy8gZm9yIG9sZCBvbmVzLiBJbiBwdXJlIGJ1aWxkcyB3ZSBhc3N1bWUgdGhhdCB0aGUgYnJvd3NlciBzdXBwb3J0cyBldmVyeXRoaW5nXG4vLyB3ZSBuZWVkLiBJbiBsZWdhY3kgbW9kZSwgdGhlIGxpYnJhcnkgYWxzbyBhY3RzIGFzIGEgcG9seWZpbGwuIEJhYmVsIHdpbGxcbi8vIGF1dG9tYXRpY2FsbHkgcG9seWZpbGwgZXZlcnl0aGluZyBleGNlcHQgXCJmZXRjaFwiLCB3aGljaCB3ZSBoYXZlIHRvIGhhbmRsZVxuLy8gbWFudWFsbHkuXG4vLyBAdHMtaWdub3JlXG5cbmlmICh0eXBlb2YgRkhJUkNMSUVOVF9QVVJFID09IFwidW5kZWZpbmVkXCIpIHtcbiAgY29uc3QgZmV0Y2ggPSByZXF1aXJlKFwiY3Jvc3MtZmV0Y2hcIik7XG5cbiAgcmVxdWlyZShcImFib3J0Y29udHJvbGxlci1wb2x5ZmlsbC9kaXN0L2Fib3J0Y29udHJvbGxlci1wb2x5ZmlsbC1vbmx5XCIpO1xuXG4gIGlmICghd2luZG93LmZldGNoKSB7XG4gICAgd2luZG93LmZldGNoID0gZmV0Y2guZGVmYXVsdDtcbiAgICB3aW5kb3cuSGVhZGVycyA9IGZldGNoLkhlYWRlcnM7XG4gICAgd2luZG93LlJlcXVlc3QgPSBmZXRjaC5SZXF1ZXN0O1xuICAgIHdpbmRvdy5SZXNwb25zZSA9IGZldGNoLlJlc3BvbnNlO1xuICB9XG59IC8vICRsYWI6Y292ZXJhZ2U6b2ZmJFxuXG5cbmNvbnN0IEZISVIgPSB7XG4gIEFib3J0Q29udHJvbGxlcjogd2luZG93LkFib3J0Q29udHJvbGxlcixcbiAgY2xpZW50LFxuICBvYXV0aDI6IHtcbiAgICBzZXR0aW5nczogb3B0aW9ucyxcbiAgICByZWFkeSxcbiAgICBhdXRob3JpemUsXG4gICAgaW5pdFxuICB9XG59O1xubW9kdWxlLmV4cG9ydHMgPSBGSElSOyAvLyAkbGFiOmNvdmVyYWdlOm9uJCIsIlwidXNlIHN0cmljdFwiO1xuLypcbiAqIFRoaXMgZmlsZSBjb250YWlucyBzb21lIHNoYXJlZCBmdW5jdGlvbnMuIFRoZXkgYXJlIHVzZWQgYnkgb3RoZXIgbW9kdWxlcywgYnV0XG4gKiBhcmUgZGVmaW5lZCBoZXJlIHNvIHRoYXQgdGVzdHMgY2FuIGltcG9ydCB0aGlzIGxpYnJhcnkgYW5kIHRlc3QgdGhlbS5cbiAqL1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXRUYXJnZXRXaW5kb3cgPSBleHBvcnRzLmdldFBhdGllbnRQYXJhbSA9IGV4cG9ydHMuYnlDb2RlcyA9IGV4cG9ydHMuYnlDb2RlID0gZXhwb3J0cy5nZXRBY2Nlc3NUb2tlbkV4cGlyYXRpb24gPSBleHBvcnRzLmp3dERlY29kZSA9IGV4cG9ydHMucmFuZG9tU3RyaW5nID0gZXhwb3J0cy5hYnNvbHV0ZSA9IGV4cG9ydHMubWFrZUFycmF5ID0gZXhwb3J0cy5zZXRQYXRoID0gZXhwb3J0cy5nZXRQYXRoID0gZXhwb3J0cy5odW1hbml6ZUVycm9yID0gZXhwb3J0cy5mZXRjaENvbmZvcm1hbmNlU3RhdGVtZW50ID0gZXhwb3J0cy5nZXRBbmRDYWNoZSA9IGV4cG9ydHMucmVxdWVzdCA9IGV4cG9ydHMucmVzcG9uc2VUb0pTT04gPSBleHBvcnRzLmNoZWNrUmVzcG9uc2UgPSBleHBvcnRzLnVuaXRzID0gZXhwb3J0cy5kZWJ1ZyA9IHZvaWQgMDtcblxuY29uc3QgSHR0cEVycm9yXzEgPSByZXF1aXJlKFwiLi9IdHRwRXJyb3JcIik7XG5cbmNvbnN0IHNldHRpbmdzXzEgPSByZXF1aXJlKFwiLi9zZXR0aW5nc1wiKTtcblxuY29uc3QgZGVidWcgPSByZXF1aXJlKFwiZGVidWdcIik7IC8vICRsYWI6Y292ZXJhZ2U6b2ZmJFxuLy8gQHRzLWlnbm9yZVxuXG5cbmNvbnN0IHtcbiAgZmV0Y2hcbn0gPSB0eXBlb2YgRkhJUkNMSUVOVF9QVVJFICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDogcmVxdWlyZShcImNyb3NzLWZldGNoXCIpOyAvLyAkbGFiOmNvdmVyYWdlOm9uJFxuXG5jb25zdCBfZGVidWcgPSBkZWJ1ZyhcIkZISVJcIik7XG5cbmV4cG9ydHMuZGVidWcgPSBfZGVidWc7XG4vKipcbiAqIFRoZSBjYWNoZSBmb3IgdGhlIGBnZXRBbmRDYWNoZWAgZnVuY3Rpb25cbiAqL1xuXG5jb25zdCBjYWNoZSA9IHt9O1xuLyoqXG4gKiBBIG5hbWVzcGFjZSB3aXRoIGZ1bmN0aW9ucyBmb3IgY29udmVydGluZyBiZXR3ZWVuIGRpZmZlcmVudCBtZWFzdXJlbWVudCB1bml0c1xuICovXG5cbmV4cG9ydHMudW5pdHMgPSB7XG4gIGNtKHtcbiAgICBjb2RlLFxuICAgIHZhbHVlXG4gIH0pIHtcbiAgICBlbnN1cmVOdW1lcmljYWwoe1xuICAgICAgY29kZSxcbiAgICAgIHZhbHVlXG4gICAgfSk7XG4gICAgaWYgKGNvZGUgPT0gXCJjbVwiKSByZXR1cm4gdmFsdWU7XG4gICAgaWYgKGNvZGUgPT0gXCJtXCIpIHJldHVybiB2YWx1ZSAqIDEwMDtcbiAgICBpZiAoY29kZSA9PSBcImluXCIpIHJldHVybiB2YWx1ZSAqIDIuNTQ7XG4gICAgaWYgKGNvZGUgPT0gXCJbaW5fdXNdXCIpIHJldHVybiB2YWx1ZSAqIDIuNTQ7XG4gICAgaWYgKGNvZGUgPT0gXCJbaW5faV1cIikgcmV0dXJuIHZhbHVlICogMi41NDtcbiAgICBpZiAoY29kZSA9PSBcImZ0XCIpIHJldHVybiB2YWx1ZSAqIDMwLjQ4O1xuICAgIGlmIChjb2RlID09IFwiW2Z0X3VzXVwiKSByZXR1cm4gdmFsdWUgKiAzMC40ODtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbnJlY29nbml6ZWQgbGVuZ3RoIHVuaXQ6IFwiICsgY29kZSk7XG4gIH0sXG5cbiAga2coe1xuICAgIGNvZGUsXG4gICAgdmFsdWVcbiAgfSkge1xuICAgIGVuc3VyZU51bWVyaWNhbCh7XG4gICAgICBjb2RlLFxuICAgICAgdmFsdWVcbiAgICB9KTtcbiAgICBpZiAoY29kZSA9PSBcImtnXCIpIHJldHVybiB2YWx1ZTtcbiAgICBpZiAoY29kZSA9PSBcImdcIikgcmV0dXJuIHZhbHVlIC8gMTAwMDtcbiAgICBpZiAoY29kZS5tYXRjaCgvbGIvKSkgcmV0dXJuIHZhbHVlIC8gMi4yMDQ2MjtcbiAgICBpZiAoY29kZS5tYXRjaCgvb3ovKSkgcmV0dXJuIHZhbHVlIC8gMzUuMjc0O1xuICAgIHRocm93IG5ldyBFcnJvcihcIlVucmVjb2duaXplZCB3ZWlnaHQgdW5pdDogXCIgKyBjb2RlKTtcbiAgfSxcblxuICBhbnkocHEpIHtcbiAgICBlbnN1cmVOdW1lcmljYWwocHEpO1xuICAgIHJldHVybiBwcS52YWx1ZTtcbiAgfVxuXG59O1xuLyoqXG4gKiBBc3NlcnRpb24gZnVuY3Rpb24gdG8gZ3VhcmQgYXJndW1lbnRzIGZvciBgdW5pdHNgIGZ1bmN0aW9uc1xuICovXG5cbmZ1bmN0aW9uIGVuc3VyZU51bWVyaWNhbCh7XG4gIHZhbHVlLFxuICBjb2RlXG59KSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwibnVtYmVyXCIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJGb3VuZCBhIG5vbi1udW1lcmljYWwgdW5pdDogXCIgKyB2YWx1ZSArIFwiIFwiICsgY29kZSk7XG4gIH1cbn1cbi8qKlxuICogVXNlZCBpbiBmZXRjaCBQcm9taXNlIGNoYWlucyB0byByZWplY3QgaWYgdGhlIFwib2tcIiBwcm9wZXJ0eSBpcyBub3QgdHJ1ZVxuICovXG5cblxuYXN5bmMgZnVuY3Rpb24gY2hlY2tSZXNwb25zZShyZXNwKSB7XG4gIGlmICghcmVzcC5vaykge1xuICAgIHRocm93IGF3YWl0IGh1bWFuaXplRXJyb3IocmVzcCk7XG4gIH1cblxuICByZXR1cm4gcmVzcDtcbn1cblxuZXhwb3J0cy5jaGVja1Jlc3BvbnNlID0gY2hlY2tSZXNwb25zZTtcbi8qKlxuICogVXNlZCBpbiBmZXRjaCBQcm9taXNlIGNoYWlucyB0byByZXR1cm4gdGhlIEpTT04gdmVyc2lvbiBvZiB0aGUgcmVzcG9uc2UuXG4gKiBOb3RlIHRoYXQgYHJlc3AuanNvbigpYCB3aWxsIHRocm93IG9uIGVtcHR5IGJvZHkgc28gd2UgdXNlIHJlc3AudGV4dCgpXG4gKiBpbnN0ZWFkLlxuICovXG5cbmZ1bmN0aW9uIHJlc3BvbnNlVG9KU09OKHJlc3ApIHtcbiAgcmV0dXJuIHJlc3AudGV4dCgpLnRoZW4odGV4dCA9PiB0ZXh0Lmxlbmd0aCA/IEpTT04ucGFyc2UodGV4dCkgOiBcIlwiKTtcbn1cblxuZXhwb3J0cy5yZXNwb25zZVRvSlNPTiA9IHJlc3BvbnNlVG9KU09OO1xuLyoqXG4gKiBUaGlzIGlzIG91ciBidWlsdC1pbiByZXF1ZXN0IGZ1bmN0aW9uLiBJdCBkb2VzIGEgZmV3IHRoaW5ncyBieSBkZWZhdWx0XG4gKiAodW5sZXNzIHRvbGQgb3RoZXJ3aXNlKTpcbiAqIC0gTWFrZXMgQ09SUyByZXF1ZXN0c1xuICogLSBTZXRzIGFjY2VwdCBoZWFkZXIgdG8gXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAqIC0gSGFuZGxlcyBlcnJvcnNcbiAqIC0gSWYgdGhlIHJlc3BvbnNlIGlzIGpzb24gcmV0dXJuIHRoZSBqc29uIG9iamVjdFxuICogLSBJZiB0aGUgcmVzcG9uc2UgaXMgdGV4dCByZXR1cm4gdGhlIHJlc3VsdCB0ZXh0XG4gKiAtIE90aGVyd2lzZSByZXR1cm4gdGhlIHJlc3BvbnNlIG9iamVjdCBvbiB3aGljaCB3ZSBjYWxsIHN0dWZmIGxpa2UgYC5ibG9iKClgXG4gKi9cblxuZnVuY3Rpb24gcmVxdWVzdCh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICByZXR1cm4gZmV0Y2godXJsLCBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe1xuICAgIG1vZGU6IFwiY29yc1wiXG4gIH0sIG9wdGlvbnMpLCB7XG4gICAgaGVhZGVyczogT2JqZWN0LmFzc2lnbih7XG4gICAgICBhY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgfSwgb3B0aW9ucy5oZWFkZXJzKVxuICB9KSkudGhlbihjaGVja1Jlc3BvbnNlKS50aGVuKHJlcyA9PiB7XG4gICAgY29uc3QgdHlwZSA9IHJlcy5oZWFkZXJzLmdldChcIkNvbnRlbnQtVHlwZVwiKSArIFwiXCI7XG5cbiAgICBpZiAodHlwZS5tYXRjaCgvXFxianNvblxcYi9pKSkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlVG9KU09OKHJlcykudGhlbihib2R5ID0+ICh7XG4gICAgICAgIHJlcyxcbiAgICAgICAgYm9keVxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIGlmICh0eXBlLm1hdGNoKC9edGV4dFxcLy9pKSkge1xuICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbihib2R5ID0+ICh7XG4gICAgICAgIHJlcyxcbiAgICAgICAgYm9keVxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICByZXNcbiAgICB9O1xuICB9KS50aGVuKCh7XG4gICAgcmVzLFxuICAgIGJvZHlcbiAgfSkgPT4ge1xuICAgIC8vIFNvbWUgc2VydmVycyB3aWxsIHJlcGx5IGFmdGVyIENSRUFURSB3aXRoIGpzb24gY29udGVudCB0eXBlIGJ1dCB3aXRoXG4gICAgLy8gZW1wdHkgYm9keS4gSW4gdGhpcyBjYXNlIGNoZWNrIGlmIGEgbG9jYXRpb24gaGVhZGVyIGlzIHJlY2VpdmVkIGFuZFxuICAgIC8vIGZldGNoIHRoYXQgdG8gdXNlIGl0IGFzIHRoZSBmaW5hbCByZXN1bHQuXG4gICAgaWYgKCFib2R5ICYmIHJlcy5zdGF0dXMgPT0gMjAxKSB7XG4gICAgICBjb25zdCBsb2NhdGlvbiA9IHJlcy5oZWFkZXJzLmdldChcImxvY2F0aW9uXCIpICsgXCJcIjtcblxuICAgICAgaWYgKGxvY2F0aW9uKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0KGxvY2F0aW9uLCBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMpLCB7XG4gICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgIGJvZHk6IG51bGxcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH0gLy8gRm9yIGFueSBub24tdGV4dCBhbmQgbm9uLWpzb24gcmVzcG9uc2UgcmV0dXJuIHRoZSBSZXNwb25zZSBvYmplY3QuXG4gICAgLy8gVGhpcyB0byBsZXQgdXNlcnMgZGVjaWRlIGlmIHRoZXkgd2FudCB0byBjYWxsIHRleHQoKSwgYmxvYigpIG9yXG4gICAgLy8gc29tZXRoaW5nIGVsc2Ugb24gaXRcblxuXG4gICAgaWYgKGJvZHkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9IC8vIE90aGVyd2lzZSBqdXN0IHJldHVybiB0aGUgcGFyc2VkIGJvZHkgKGNhbiBhbHNvIGJlIFwiXCIgb3IgbnVsbClcblxuXG4gICAgcmV0dXJuIGJvZHk7XG4gIH0pO1xufVxuXG5leHBvcnRzLnJlcXVlc3QgPSByZXF1ZXN0O1xuLyoqXG4gKiBNYWtlcyBhIHJlcXVlc3QgdXNpbmcgYGZldGNoYCBhbmQgc3RvcmVzIHRoZSByZXN1bHQgaW4gaW50ZXJuYWwgbWVtb3J5IGNhY2hlLlxuICogVGhlIGNhY2hlIGlzIGNsZWFyZWQgd2hlbiB0aGUgcGFnZSBpcyB1bmxvYWRlZC5cbiAqIEBwYXJhbSB1cmwgVGhlIFVSTCB0byByZXF1ZXN0XG4gKiBAcGFyYW0gcmVxdWVzdE9wdGlvbnMgUmVxdWVzdCBvcHRpb25zXG4gKiBAcGFyYW0gZm9yY2UgSWYgdHJ1ZSwgcmVsb2FkIGZyb20gc291cmNlIGFuZCB1cGRhdGUgdGhlIGNhY2hlLCBldmVuIGlmIGl0IGhhc1xuICogYWxyZWFkeSBiZWVuIGNhY2hlZC5cbiAqL1xuXG5mdW5jdGlvbiBnZXRBbmRDYWNoZSh1cmwsIHJlcXVlc3RPcHRpb25zLCBmb3JjZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInRlc3RcIikge1xuICBpZiAoZm9yY2UgfHwgIWNhY2hlW3VybF0pIHtcbiAgICBjYWNoZVt1cmxdID0gcmVxdWVzdCh1cmwsIHJlcXVlc3RPcHRpb25zKTtcbiAgICByZXR1cm4gY2FjaGVbdXJsXTtcbiAgfVxuXG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2FjaGVbdXJsXSk7XG59XG5cbmV4cG9ydHMuZ2V0QW5kQ2FjaGUgPSBnZXRBbmRDYWNoZTtcbi8qKlxuICogRmV0Y2hlcyB0aGUgY29uZm9ybWFuY2Ugc3RhdGVtZW50IGZyb20gdGhlIGdpdmVuIGJhc2UgVVJMLlxuICogTm90ZSB0aGF0IHRoZSByZXN1bHQgaXMgY2FjaGVkIGluIG1lbW9yeSAodW50aWwgdGhlIHBhZ2UgaXMgcmVsb2FkZWQgaW4gdGhlXG4gKiBicm93c2VyKSBiZWNhdXNlIGl0IG1pZ2h0IGhhdmUgdG8gYmUgcmUtdXNlZCBieSB0aGUgY2xpZW50XG4gKiBAcGFyYW0gYmFzZVVybCBUaGUgYmFzZSBVUkwgb2YgdGhlIEZISVIgc2VydmVyXG4gKiBAcGFyYW0gW3JlcXVlc3RPcHRpb25zXSBBbnkgb3B0aW9ucyBwYXNzZWQgdG8gdGhlIGZldGNoIGNhbGxcbiAqL1xuXG5mdW5jdGlvbiBmZXRjaENvbmZvcm1hbmNlU3RhdGVtZW50KGJhc2VVcmwgPSBcIi9cIiwgcmVxdWVzdE9wdGlvbnMpIHtcbiAgY29uc3QgdXJsID0gU3RyaW5nKGJhc2VVcmwpLnJlcGxhY2UoL1xcLyokLywgXCIvXCIpICsgXCJtZXRhZGF0YVwiO1xuICByZXR1cm4gZ2V0QW5kQ2FjaGUodXJsLCByZXF1ZXN0T3B0aW9ucykuY2F0Y2goZXggPT4ge1xuICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGZldGNoIHRoZSBjb25mb3JtYW5jZSBzdGF0ZW1lbnQgZnJvbSBcIiR7dXJsfVwiLiAke2V4fWApO1xuICB9KTtcbn1cblxuZXhwb3J0cy5mZXRjaENvbmZvcm1hbmNlU3RhdGVtZW50ID0gZmV0Y2hDb25mb3JtYW5jZVN0YXRlbWVudDtcbi8qKlxuICogR2l2ZW4gYSByZXNwb25zZSBvYmplY3QsIGdlbmVyYXRlcyBhbmQgdGhyb3dzIGRldGFpbGVkIEh0dHBFcnJvci5cbiAqIEBwYXJhbSByZXNwIFRoZSBgUmVzcG9uc2VgIG9iamVjdCBvZiBhIGZhaWxlZCBgZmV0Y2hgIHJlcXVlc3RcbiAqL1xuXG5hc3luYyBmdW5jdGlvbiBodW1hbml6ZUVycm9yKHJlc3ApIHtcbiAgbGV0IG1zZyA9IGAke3Jlc3Auc3RhdHVzfSAke3Jlc3Auc3RhdHVzVGV4dH1cXG5VUkw6ICR7cmVzcC51cmx9YDtcbiAgbGV0IGJvZHkgPSBudWxsO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgdHlwZSA9IHJlc3AuaGVhZGVycy5nZXQoXCJDb250ZW50LVR5cGVcIikgfHwgXCJ0ZXh0L3BsYWluXCI7XG5cbiAgICBpZiAodHlwZS5tYXRjaCgvXFxianNvblxcYi9pKSkge1xuICAgICAgYm9keSA9IGF3YWl0IHJlc3AuanNvbigpO1xuXG4gICAgICBpZiAoYm9keS5lcnJvcikge1xuICAgICAgICBtc2cgKz0gXCJcXG5cIiArIGJvZHkuZXJyb3I7XG5cbiAgICAgICAgaWYgKGJvZHkuZXJyb3JfZGVzY3JpcHRpb24pIHtcbiAgICAgICAgICBtc2cgKz0gXCI6IFwiICsgYm9keS5lcnJvcl9kZXNjcmlwdGlvbjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbXNnICs9IFwiXFxuXFxuXCIgKyBKU09OLnN0cmluZ2lmeShib2R5LCBudWxsLCA0KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUubWF0Y2goL150ZXh0XFwvL2kpKSB7XG4gICAgICBib2R5ID0gYXdhaXQgcmVzcC50ZXh0KCk7XG5cbiAgICAgIGlmIChib2R5KSB7XG4gICAgICAgIG1zZyArPSBcIlxcblxcblwiICsgYm9keTtcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKF8pIHsvLyBpZ25vcmVcbiAgfVxuXG4gIHRocm93IG5ldyBIdHRwRXJyb3JfMS5kZWZhdWx0KG1zZywgcmVzcC5zdGF0dXMsIHJlc3Auc3RhdHVzVGV4dCwgYm9keSk7XG59XG5cbmV4cG9ydHMuaHVtYW5pemVFcnJvciA9IGh1bWFuaXplRXJyb3I7XG4vKipcbiAqIFdhbGtzIHRocm91Z2ggYW4gb2JqZWN0IChvciBhcnJheSkgYW5kIHJldHVybnMgdGhlIHZhbHVlIGZvdW5kIGF0IHRoZVxuICogcHJvdmlkZWQgcGF0aC4gVGhpcyBmdW5jdGlvbiBpcyB2ZXJ5IHNpbXBsZSBzbyBpdCBpbnRlbnRpb25hbGx5IGRvZXMgbm90XG4gKiBzdXBwb3J0IGFueSBhcmd1bWVudCBwb2x5bW9ycGhpc20sIG1lYW5pbmcgdGhhdCB0aGUgcGF0aCBjYW4gb25seSBiZSBhXG4gKiBkb3Qtc2VwYXJhdGVkIHN0cmluZy4gSWYgdGhlIHBhdGggaXMgaW52YWxpZCByZXR1cm5zIHVuZGVmaW5lZC5cbiAqIEBwYXJhbSBvYmogVGhlIG9iamVjdCAob3IgQXJyYXkpIHRvIHdhbGsgdGhyb3VnaFxuICogQHBhcmFtIHBhdGggVGhlIHBhdGggKGVnLiBcImEuYi40LmNcIilcbiAqIEByZXR1cm5zIHsqfSBXaGF0ZXZlciBpcyBmb3VuZCBpbiB0aGUgcGF0aCBvciB1bmRlZmluZWRcbiAqL1xuXG5mdW5jdGlvbiBnZXRQYXRoKG9iaiwgcGF0aCA9IFwiXCIpIHtcbiAgcGF0aCA9IHBhdGgudHJpbSgpO1xuXG4gIGlmICghcGF0aCkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBsZXQgc2VnbWVudHMgPSBwYXRoLnNwbGl0KFwiLlwiKTtcbiAgbGV0IHJlc3VsdCA9IG9iajtcblxuICB3aGlsZSAocmVzdWx0ICYmIHNlZ21lbnRzLmxlbmd0aCkge1xuICAgIGNvbnN0IGtleSA9IHNlZ21lbnRzLnNoaWZ0KCk7XG5cbiAgICBpZiAoIWtleSAmJiBBcnJheS5pc0FycmF5KHJlc3VsdCkpIHtcbiAgICAgIHJldHVybiByZXN1bHQubWFwKG8gPT4gZ2V0UGF0aChvLCBzZWdtZW50cy5qb2luKFwiLlwiKSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSByZXN1bHRba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnRzLmdldFBhdGggPSBnZXRQYXRoO1xuLyoqXG4gKiBMaWtlIGdldFBhdGgsIGJ1dCBpZiB0aGUgbm9kZSBpcyBmb3VuZCwgaXRzIHZhbHVlIGlzIHNldCB0byBAdmFsdWVcbiAqIEBwYXJhbSBvYmogVGhlIG9iamVjdCAob3IgQXJyYXkpIHRvIHdhbGsgdGhyb3VnaFxuICogQHBhcmFtIHBhdGggVGhlIHBhdGggKGVnLiBcImEuYi40LmNcIilcbiAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0XG4gKiBAcGFyYW0gY3JlYXRlRW1wdHkgSWYgdHJ1ZSwgY3JlYXRlIG1pc3NpbmcgaW50ZXJtZWRpYXRlIG9iamVjdHMgb3IgYXJyYXlzXG4gKiBAcmV0dXJucyBUaGUgbW9kaWZpZWQgb2JqZWN0XG4gKi9cblxuZnVuY3Rpb24gc2V0UGF0aChvYmosIHBhdGgsIHZhbHVlLCBjcmVhdGVFbXB0eSA9IGZhbHNlKSB7XG4gIHBhdGgudHJpbSgpLnNwbGl0KFwiLlwiKS5yZWR1Y2UoKG91dCwga2V5LCBpZHgsIGFycikgPT4ge1xuICAgIGlmIChvdXQgJiYgaWR4ID09PSBhcnIubGVuZ3RoIC0gMSkge1xuICAgICAgb3V0W2tleV0gPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG91dCAmJiBvdXRba2V5XSA9PT0gdW5kZWZpbmVkICYmIGNyZWF0ZUVtcHR5KSB7XG4gICAgICAgIG91dFtrZXldID0gYXJyW2lkeCArIDFdLm1hdGNoKC9eWzAtOV0rJC8pID8gW10gOiB7fTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG91dCA/IG91dFtrZXldIDogdW5kZWZpbmVkO1xuICAgIH1cbiAgfSwgb2JqKTtcbiAgcmV0dXJuIG9iajtcbn1cblxuZXhwb3J0cy5zZXRQYXRoID0gc2V0UGF0aDtcbi8qKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGFycmF5IHJldHVybnMgaXQgYXMgaXMuIE90aGVyd2lzZSBwdXRzIGl0IGluIGFuIGFycmF5XG4gKiAoYFthcmddYCkgYW5kIHJldHVybnMgdGhlIHJlc3VsdFxuICogQHBhcmFtIGFyZyBUaGUgZWxlbWVudCB0byB0ZXN0IGFuZCBwb3NzaWJseSBjb252ZXJ0IHRvIGFycmF5XG4gKiBAY2F0ZWdvcnkgVXRpbGl0eVxuICovXG5cbmZ1bmN0aW9uIG1ha2VBcnJheShhcmcpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuICAgIHJldHVybiBhcmc7XG4gIH1cblxuICByZXR1cm4gW2FyZ107XG59XG5cbmV4cG9ydHMubWFrZUFycmF5ID0gbWFrZUFycmF5O1xuLyoqXG4gKiBHaXZlbiBhIHBhdGgsIGNvbnZlcnRzIGl0IHRvIGFic29sdXRlIHVybCBiYXNlZCBvbiB0aGUgYGJhc2VVcmxgLiBJZiBiYXNlVXJsXG4gKiBpcyBub3QgcHJvdmlkZWQsIHRoZSByZXN1bHQgd291bGQgYmUgYSByb290ZWQgcGF0aCAob25lIHRoYXQgc3RhcnRzIHdpdGggYC9gKS5cbiAqIEBwYXJhbSBwYXRoIFRoZSBwYXRoIHRvIGNvbnZlcnRcbiAqIEBwYXJhbSBiYXNlVXJsIFRoZSBiYXNlIFVSTFxuICovXG5cbmZ1bmN0aW9uIGFic29sdXRlKHBhdGgsIGJhc2VVcmwpIHtcbiAgaWYgKHBhdGgubWF0Y2goL15odHRwLykpIHJldHVybiBwYXRoO1xuICBpZiAocGF0aC5tYXRjaCgvXnVybi8pKSByZXR1cm4gcGF0aDtcbiAgcmV0dXJuIFN0cmluZyhiYXNlVXJsIHx8IFwiXCIpLnJlcGxhY2UoL1xcLyskLywgXCJcIikgKyBcIi9cIiArIHBhdGgucmVwbGFjZSgvXlxcLysvLCBcIlwiKTtcbn1cblxuZXhwb3J0cy5hYnNvbHV0ZSA9IGFic29sdXRlO1xuLyoqXG4gKiBHZW5lcmF0ZXMgcmFuZG9tIHN0cmluZ3MuIEJ5IGRlZmF1bHQgdGhpcyByZXR1cm5zIHJhbmRvbSA4IGNoYXJhY3RlcnMgbG9uZ1xuICogYWxwaGFudW1lcmljIHN0cmluZ3MuXG4gKiBAcGFyYW0gc3RyTGVuZ3RoIFRoZSBsZW5ndGggb2YgdGhlIG91dHB1dCBzdHJpbmcuIERlZmF1bHRzIHRvIDguXG4gKiBAcGFyYW0gY2hhclNldCBBIHN0cmluZyBjb250YWluaW5nIGFsbCB0aGUgcG9zc2libGUgY2hhcmFjdGVycy5cbiAqICAgICBEZWZhdWx0cyB0byBhbGwgdGhlIHVwcGVyIGFuZCBsb3dlci1jYXNlIGxldHRlcnMgcGx1cyBkaWdpdHMuXG4gKiBAY2F0ZWdvcnkgVXRpbGl0eVxuICovXG5cbmZ1bmN0aW9uIHJhbmRvbVN0cmluZyhzdHJMZW5ndGggPSA4LCBjaGFyU2V0ID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OVwiKSB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuICBjb25zdCBsZW4gPSBjaGFyU2V0Lmxlbmd0aDtcblxuICB3aGlsZSAoc3RyTGVuZ3RoLS0pIHtcbiAgICByZXN1bHQucHVzaChjaGFyU2V0LmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsZW4pKSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XG59XG5cbmV4cG9ydHMucmFuZG9tU3RyaW5nID0gcmFuZG9tU3RyaW5nO1xuLyoqXG4gKiBEZWNvZGVzIGEgSldUIHRva2VuIGFuZCByZXR1cm5zIGl0J3MgYm9keS5cbiAqIEBwYXJhbSB0b2tlbiBUaGUgdG9rZW4gdG8gcmVhZFxuICogQHBhcmFtIGVudiBBbiBgQWRhcHRlcmAgb3IgYW55IG90aGVyIG9iamVjdCB0aGF0IGhhcyBhbiBgYXRvYmAgbWV0aG9kXG4gKiBAY2F0ZWdvcnkgVXRpbGl0eVxuICovXG5cbmZ1bmN0aW9uIGp3dERlY29kZSh0b2tlbiwgZW52KSB7XG4gIGNvbnN0IHBheWxvYWQgPSB0b2tlbi5zcGxpdChcIi5cIilbMV07XG4gIHJldHVybiBwYXlsb2FkID8gSlNPTi5wYXJzZShlbnYuYXRvYihwYXlsb2FkKSkgOiBudWxsO1xufVxuXG5leHBvcnRzLmp3dERlY29kZSA9IGp3dERlY29kZTtcbi8qKlxuICogR2l2ZW4gYSB0b2tlbiByZXNwb25zZSwgY29tcHV0ZXMgYW5kIHJldHVybnMgdGhlIGV4cGlyZXNBdCB0aW1lc3RhbXAuXG4gKiBOb3RlIHRoYXQgdGhpcyBzaG91bGQgb25seSBiZSB1c2VkIGltbWVkaWF0ZWx5IGFmdGVyIGFuIGFjY2VzcyB0b2tlbiBpc1xuICogcmVjZWl2ZWQsIG90aGVyd2lzZSB0aGUgY29tcHV0ZWQgdGltZXN0YW1wIHdpbGwgYmUgaW5jb3JyZWN0LlxuICogQHBhcmFtIHRva2VuUmVzcG9uc2VcbiAqIEBwYXJhbSBlbnZcbiAqL1xuXG5mdW5jdGlvbiBnZXRBY2Nlc3NUb2tlbkV4cGlyYXRpb24odG9rZW5SZXNwb25zZSwgZW52KSB7XG4gIGNvbnN0IG5vdyA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApOyAvLyBPcHRpb24gMSAtIHVzaW5nIHRoZSBleHBpcmVzX2luIHByb3BlcnR5IG9mIHRoZSB0b2tlbiByZXNwb25zZVxuXG4gIGlmICh0b2tlblJlc3BvbnNlLmV4cGlyZXNfaW4pIHtcbiAgICByZXR1cm4gbm93ICsgdG9rZW5SZXNwb25zZS5leHBpcmVzX2luO1xuICB9IC8vIE9wdGlvbiAyIC0gdXNpbmcgdGhlIGV4cCBwcm9wZXJ0eSBvZiBKV1QgdG9rZW5zIChtdXN0IG5vdCBhc3N1bWUgSldUISlcblxuXG4gIGlmICh0b2tlblJlc3BvbnNlLmFjY2Vzc190b2tlbikge1xuICAgIGxldCB0b2tlbkJvZHkgPSBqd3REZWNvZGUodG9rZW5SZXNwb25zZS5hY2Nlc3NfdG9rZW4sIGVudik7XG5cbiAgICBpZiAodG9rZW5Cb2R5ICYmIHRva2VuQm9keS5leHApIHtcbiAgICAgIHJldHVybiB0b2tlbkJvZHkuZXhwO1xuICAgIH1cbiAgfSAvLyBPcHRpb24gMyAtIGlmIG5vbmUgb2YgdGhlIGFib3ZlIHdvcmtlZCBzZXQgdGhpcyB0byA1IG1pbnV0ZXMgYWZ0ZXIgbm93XG5cblxuICByZXR1cm4gbm93ICsgMzAwO1xufVxuXG5leHBvcnRzLmdldEFjY2Vzc1Rva2VuRXhwaXJhdGlvbiA9IGdldEFjY2Vzc1Rva2VuRXhwaXJhdGlvbjtcbi8qKlxuICogR3JvdXBzIHRoZSBvYnNlcnZhdGlvbnMgYnkgY29kZS4gUmV0dXJucyBhIG1hcCB0aGF0IHdpbGwgbG9vayBsaWtlOlxuICogYGBganNcbiAqIGNvbnN0IG1hcCA9IGNsaWVudC5ieUNvZGVzKG9ic2VydmF0aW9ucywgXCJjb2RlXCIpO1xuICogLy8gbWFwID0ge1xuICogLy8gICAgIFwiNTUyODQtNFwiOiBbIG9ic2VydmF0aW9uMSwgb2JzZXJ2YXRpb24yIF0sXG4gKiAvLyAgICAgXCI2MDgyLTJcIjogWyBvYnNlcnZhdGlvbjMgXVxuICogLy8gfVxuICogYGBgXG4gKiBAcGFyYW0gb2JzZXJ2YXRpb25zIEFycmF5IG9mIG9ic2VydmF0aW9uc1xuICogQHBhcmFtIHByb3BlcnR5IFRoZSBuYW1lIG9mIGEgQ29kZWFibGVDb25jZXB0IHByb3BlcnR5IHRvIGdyb3VwIGJ5XG4gKi9cblxuZnVuY3Rpb24gYnlDb2RlKG9ic2VydmF0aW9ucywgcHJvcGVydHkpIHtcbiAgY29uc3QgcmV0ID0ge307XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ29kZWFibGVDb25jZXB0KGNvbmNlcHQsIG9ic2VydmF0aW9uKSB7XG4gICAgaWYgKGNvbmNlcHQgJiYgQXJyYXkuaXNBcnJheShjb25jZXB0LmNvZGluZykpIHtcbiAgICAgIGNvbmNlcHQuY29kaW5nLmZvckVhY2goKHtcbiAgICAgICAgY29kZVxuICAgICAgfSkgPT4ge1xuICAgICAgICBpZiAoY29kZSkge1xuICAgICAgICAgIHJldFtjb2RlXSA9IHJldFtjb2RlXSB8fCBbXTtcbiAgICAgICAgICByZXRbY29kZV0ucHVzaChvYnNlcnZhdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG1ha2VBcnJheShvYnNlcnZhdGlvbnMpLmZvckVhY2gobyA9PiB7XG4gICAgaWYgKG8ucmVzb3VyY2VUeXBlID09PSBcIk9ic2VydmF0aW9uXCIgJiYgb1twcm9wZXJ0eV0pIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG9bcHJvcGVydHldKSkge1xuICAgICAgICBvW3Byb3BlcnR5XS5mb3JFYWNoKGNvbmNlcHQgPT4gaGFuZGxlQ29kZWFibGVDb25jZXB0KGNvbmNlcHQsIG8pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhhbmRsZUNvZGVhYmxlQ29uY2VwdChvW3Byb3BlcnR5XSwgbyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJldDtcbn1cblxuZXhwb3J0cy5ieUNvZGUgPSBieUNvZGU7XG4vKipcbiAqIEZpcnN0IGdyb3VwcyB0aGUgb2JzZXJ2YXRpb25zIGJ5IGNvZGUgdXNpbmcgYGJ5Q29kZWAuIFRoZW4gcmV0dXJucyBhIGZ1bmN0aW9uXG4gKiB0aGF0IGFjY2VwdHMgY29kZXMgYXMgYXJndW1lbnRzIGFuZCB3aWxsIHJldHVybiBhIGZsYXQgYXJyYXkgb2Ygb2JzZXJ2YXRpb25zXG4gKiBoYXZpbmcgdGhhdCBjb2Rlcy4gRXhhbXBsZTpcbiAqIGBgYGpzXG4gKiBjb25zdCBmaWx0ZXIgPSBjbGllbnQuYnlDb2RlcyhvYnNlcnZhdGlvbnMsIFwiY2F0ZWdvcnlcIik7XG4gKiBmaWx0ZXIoXCJsYWJvcmF0b3J5XCIpIC8vID0+IFsgb2JzZXJ2YXRpb24xLCBvYnNlcnZhdGlvbjIgXVxuICogZmlsdGVyKFwidml0YWwtc2lnbnNcIikgLy8gPT4gWyBvYnNlcnZhdGlvbjMgXVxuICogZmlsdGVyKFwibGFib3JhdG9yeVwiLCBcInZpdGFsLXNpZ25zXCIpIC8vID0+IFsgb2JzZXJ2YXRpb24xLCBvYnNlcnZhdGlvbjIsIG9ic2VydmF0aW9uMyBdXG4gKiBgYGBcbiAqIEBwYXJhbSBvYnNlcnZhdGlvbnMgQXJyYXkgb2Ygb2JzZXJ2YXRpb25zXG4gKiBAcGFyYW0gcHJvcGVydHkgVGhlIG5hbWUgb2YgYSBDb2RlYWJsZUNvbmNlcHQgcHJvcGVydHkgdG8gZ3JvdXAgYnlcbiAqL1xuXG5mdW5jdGlvbiBieUNvZGVzKG9ic2VydmF0aW9ucywgcHJvcGVydHkpIHtcbiAgY29uc3QgYmFuayA9IGJ5Q29kZShvYnNlcnZhdGlvbnMsIHByb3BlcnR5KTtcbiAgcmV0dXJuICguLi5jb2RlcykgPT4gY29kZXMuZmlsdGVyKGNvZGUgPT4gY29kZSArIFwiXCIgaW4gYmFuaykucmVkdWNlKChwcmV2LCBjb2RlKSA9PiBwcmV2LmNvbmNhdChiYW5rW2NvZGUgKyBcIlwiXSksIFtdKTtcbn1cblxuZXhwb3J0cy5ieUNvZGVzID0gYnlDb2Rlcztcbi8qKlxuICogR2l2ZW4gYSBjb25mb3JtYW5jZSBzdGF0ZW1lbnQgYW5kIGEgcmVzb3VyY2UgdHlwZSwgcmV0dXJucyB0aGUgbmFtZSBvZiB0aGVcbiAqIFVSTCBwYXJhbWV0ZXIgdGhhdCBjYW4gYmUgdXNlZCB0byBzY29wZSB0aGUgcmVzb3VyY2UgdHlwZSBieSBwYXRpZW50IElELlxuICovXG5cbmZ1bmN0aW9uIGdldFBhdGllbnRQYXJhbShjb25mb3JtYW5jZSwgcmVzb3VyY2VUeXBlKSB7XG4gIC8vIEZpbmQgd2hhdCByZXNvdXJjZXMgYXJlIHN1cHBvcnRlZCBieSB0aGlzIHNlcnZlclxuICBjb25zdCByZXNvdXJjZXMgPSBnZXRQYXRoKGNvbmZvcm1hbmNlLCBcInJlc3QuMC5yZXNvdXJjZVwiKSB8fCBbXTsgLy8gQ2hlY2sgaWYgdGhpcyByZXNvdXJjZSBpcyBzdXBwb3J0ZWRcblxuICBjb25zdCBtZXRhID0gcmVzb3VyY2VzLmZpbmQociA9PiByLnR5cGUgPT09IHJlc291cmNlVHlwZSk7XG5cbiAgaWYgKCFtZXRhKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBSZXNvdXJjZSBcIiR7cmVzb3VyY2VUeXBlfVwiIGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhpcyBGSElSIHNlcnZlcmApO1xuICB9IC8vIENoZWNrIGlmIGFueSBzZWFyY2ggcGFyYW1ldGVycyBhcmUgYXZhaWxhYmxlIGZvciB0aGlzIHJlc291cmNlXG5cblxuICBpZiAoIUFycmF5LmlzQXJyYXkobWV0YS5zZWFyY2hQYXJhbSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIHNlYXJjaCBwYXJhbWV0ZXJzIHN1cHBvcnRlZCBmb3IgXCIke3Jlc291cmNlVHlwZX1cIiBvbiB0aGlzIEZISVIgc2VydmVyYCk7XG4gIH0gLy8gVGhpcyBpcyBhIHJhcmUgY2FzZSBidXQgY291bGQgaGFwcGVuIGluIGdlbmVyaWMgd29ya2Zsb3dzXG5cblxuICBpZiAocmVzb3VyY2VUeXBlID09IFwiUGF0aWVudFwiICYmIG1ldGEuc2VhcmNoUGFyYW0uZmluZCh4ID0+IHgubmFtZSA9PSBcIl9pZFwiKSkge1xuICAgIHJldHVybiBcIl9pZFwiO1xuICB9IC8vIE5vdyBmaW5kIHRoZSBmaXJzdCBwb3NzaWJsZSBwYXJhbWV0ZXIgbmFtZVxuXG5cbiAgY29uc3Qgb3V0ID0gc2V0dGluZ3NfMS5wYXRpZW50UGFyYW1zLmZpbmQocCA9PiBtZXRhLnNlYXJjaFBhcmFtLmZpbmQoeCA9PiB4Lm5hbWUgPT0gcCkpOyAvLyBJZiB0aGVyZSBpcyBubyBtYXRjaFxuXG4gIGlmICghb3V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiSSBkb24ndCBrbm93IHdoYXQgcGFyYW0gdG8gdXNlIGZvciBcIiArIHJlc291cmNlVHlwZSk7XG4gIH1cblxuICByZXR1cm4gb3V0O1xufVxuXG5leHBvcnRzLmdldFBhdGllbnRQYXJhbSA9IGdldFBhdGllbnRQYXJhbTtcbi8qKlxuICogUmVzb2x2ZXMgYSByZWZlcmVuY2UgdG8gdGFyZ2V0IHdpbmRvdy4gSXQgbWF5IGFsc28gb3BlbiBuZXcgd2luZG93IG9yIHRhYiBpZlxuICogdGhlIGB0YXJnZXQgPSBcInBvcHVwXCJgIG9yIGB0YXJnZXQgPSBcIl9ibGFua1wiYC5cbiAqIEBwYXJhbSB0YXJnZXRcbiAqIEBwYXJhbSB3aWR0aCBPbmx5IHVzZWQgd2hlbiBgdGFyZ2V0ID0gXCJwb3B1cFwiYFxuICogQHBhcmFtIGhlaWdodCBPbmx5IHVzZWQgd2hlbiBgdGFyZ2V0ID0gXCJwb3B1cFwiYFxuICovXG5cbmFzeW5jIGZ1bmN0aW9uIGdldFRhcmdldFdpbmRvdyh0YXJnZXQsIHdpZHRoID0gODAwLCBoZWlnaHQgPSA3MjApIHtcbiAgLy8gVGhlIHRhcmdldCBjYW4gYmUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIHRhcmdldC4gVGhpcyBjYW4gYmVcbiAgLy8gdXNlZCB0byBvcGVuIGEgbGF5ZXIgcG9wLXVwIHdpdGggYW4gaWZyYW1lIGFuZCB0aGVuIHJldHVybiBhIHJlZmVyZW5jZVxuICAvLyB0byB0aGF0IGlmcmFtZSAob3IgaXRzIG5hbWUpXG4gIGlmICh0eXBlb2YgdGFyZ2V0ID09IFwiZnVuY3Rpb25cIikge1xuICAgIHRhcmdldCA9IGF3YWl0IHRhcmdldCgpO1xuICB9IC8vIFRoZSB0YXJnZXQgY2FuIGJlIGEgd2luZG93IHJlZmVyZW5jZVxuXG5cbiAgaWYgKHRhcmdldCAmJiB0eXBlb2YgdGFyZ2V0ID09IFwib2JqZWN0XCIpIHtcbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9IC8vIEF0IHRoaXMgcG9pbnQgdGFyZ2V0IG11c3QgYmUgYSBzdHJpbmdcblxuXG4gIGlmICh0eXBlb2YgdGFyZ2V0ICE9IFwic3RyaW5nXCIpIHtcbiAgICBfZGVidWcoXCJJbnZhbGlkIHRhcmdldCB0eXBlICclcycuIEZhaWxpbmcgYmFjayB0byAnX3NlbGYnLlwiLCB0eXBlb2YgdGFyZ2V0KTtcblxuICAgIHJldHVybiBzZWxmO1xuICB9IC8vIEN1cnJlbnQgd2luZG93XG5cblxuICBpZiAodGFyZ2V0ID09IFwiX3NlbGZcIikge1xuICAgIHJldHVybiBzZWxmO1xuICB9IC8vIFRoZSBwYXJlbnQgZnJhbWVcblxuXG4gIGlmICh0YXJnZXQgPT0gXCJfcGFyZW50XCIpIHtcbiAgICByZXR1cm4gcGFyZW50O1xuICB9IC8vIFRoZSB0b3Agd2luZG93XG5cblxuICBpZiAodGFyZ2V0ID09IFwiX3RvcFwiKSB7XG4gICAgcmV0dXJuIHRvcDtcbiAgfSAvLyBOZXcgdGFiIG9yIHdpbmRvd1xuXG5cbiAgaWYgKHRhcmdldCA9PSBcIl9ibGFua1wiKSB7XG4gICAgbGV0IGVycm9yLFxuICAgICAgICB0YXJnZXRXaW5kb3cgPSBudWxsO1xuXG4gICAgdHJ5IHtcbiAgICAgIHRhcmdldFdpbmRvdyA9IHdpbmRvdy5vcGVuKFwiXCIsIFwiU01BUlRBdXRoUG9wdXBcIik7XG5cbiAgICAgIGlmICghdGFyZ2V0V2luZG93KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBlcmhhcHMgd2luZG93Lm9wZW4gd2FzIGJsb2NrZWRcIik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZXJyb3IgPSBlO1xuICAgIH1cblxuICAgIGlmICghdGFyZ2V0V2luZG93KSB7XG4gICAgICBfZGVidWcoXCJDYW5ub3Qgb3BlbiB3aW5kb3cuIEZhaWxpbmcgYmFjayB0byAnX3NlbGYnLiAlc1wiLCBlcnJvcik7XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGFyZ2V0V2luZG93O1xuICAgIH1cbiAgfSAvLyBQb3B1cCB3aW5kb3dcblxuXG4gIGlmICh0YXJnZXQgPT0gXCJwb3B1cFwiKSB7XG4gICAgbGV0IGVycm9yLFxuICAgICAgICB0YXJnZXRXaW5kb3cgPSBudWxsOyAvLyBpZiAoIXRhcmdldFdpbmRvdyB8fCB0YXJnZXRXaW5kb3cuY2xvc2VkKSB7XG5cbiAgICB0cnkge1xuICAgICAgdGFyZ2V0V2luZG93ID0gd2luZG93Lm9wZW4oXCJcIiwgXCJTTUFSVEF1dGhQb3B1cFwiLCBbXCJoZWlnaHQ9XCIgKyBoZWlnaHQsIFwid2lkdGg9XCIgKyB3aWR0aCwgXCJtZW51YmFyPTBcIiwgXCJyZXNpemFibGU9MVwiLCBcInN0YXR1cz0wXCIsIFwidG9wPVwiICsgKHNjcmVlbi5oZWlnaHQgLSBoZWlnaHQpIC8gMiwgXCJsZWZ0PVwiICsgKHNjcmVlbi53aWR0aCAtIHdpZHRoKSAvIDJdLmpvaW4oXCIsXCIpKTtcblxuICAgICAgaWYgKCF0YXJnZXRXaW5kb3cpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGVyaGFwcyB0aGUgcG9wdXAgd2luZG93IHdhcyBibG9ja2VkXCIpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGVycm9yID0gZTtcbiAgICB9XG5cbiAgICBpZiAoIXRhcmdldFdpbmRvdykge1xuICAgICAgX2RlYnVnKFwiQ2Fubm90IG9wZW4gd2luZG93LiBGYWlsaW5nIGJhY2sgdG8gJ19zZWxmJy4gJXNcIiwgZXJyb3IpO1xuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRhcmdldFdpbmRvdztcbiAgICB9XG4gIH0gLy8gRnJhbWUgb3Igd2luZG93IGJ5IG5hbWVcblxuXG4gIGNvbnN0IHdpbk9yRnJhbWUgPSBmcmFtZXNbdGFyZ2V0XTtcblxuICBpZiAod2luT3JGcmFtZSkge1xuICAgIHJldHVybiB3aW5PckZyYW1lO1xuICB9XG5cbiAgX2RlYnVnKFwiVW5rbm93biB0YXJnZXQgJyVzJy4gRmFpbGluZyBiYWNrIHRvICdfc2VsZicuXCIsIHRhcmdldCk7XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbmV4cG9ydHMuZ2V0VGFyZ2V0V2luZG93ID0gZ2V0VGFyZ2V0V2luZG93OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5TTUFSVF9LRVkgPSBleHBvcnRzLnBhdGllbnRQYXJhbXMgPSBleHBvcnRzLmZoaXJWZXJzaW9ucyA9IGV4cG9ydHMucGF0aWVudENvbXBhcnRtZW50ID0gdm9pZCAwO1xuLyoqXG4gKiBDb21iaW5lZCBsaXN0IG9mIEZISVIgcmVzb3VyY2UgdHlwZXMgYWNjZXB0aW5nIHBhdGllbnQgcGFyYW1ldGVyIGluIEZISVIgUjItUjRcbiAqL1xuXG5leHBvcnRzLnBhdGllbnRDb21wYXJ0bWVudCA9IFtcIkFjY291bnRcIiwgXCJBZHZlcnNlRXZlbnRcIiwgXCJBbGxlcmd5SW50b2xlcmFuY2VcIiwgXCJBcHBvaW50bWVudFwiLCBcIkFwcG9pbnRtZW50UmVzcG9uc2VcIiwgXCJBdWRpdEV2ZW50XCIsIFwiQmFzaWNcIiwgXCJCb2R5U2l0ZVwiLCBcIkJvZHlTdHJ1Y3R1cmVcIiwgXCJDYXJlUGxhblwiLCBcIkNhcmVUZWFtXCIsIFwiQ2hhcmdlSXRlbVwiLCBcIkNsYWltXCIsIFwiQ2xhaW1SZXNwb25zZVwiLCBcIkNsaW5pY2FsSW1wcmVzc2lvblwiLCBcIkNvbW11bmljYXRpb25cIiwgXCJDb21tdW5pY2F0aW9uUmVxdWVzdFwiLCBcIkNvbXBvc2l0aW9uXCIsIFwiQ29uZGl0aW9uXCIsIFwiQ29uc2VudFwiLCBcIkNvdmVyYWdlXCIsIFwiQ292ZXJhZ2VFbGlnaWJpbGl0eVJlcXVlc3RcIiwgXCJDb3ZlcmFnZUVsaWdpYmlsaXR5UmVzcG9uc2VcIiwgXCJEZXRlY3RlZElzc3VlXCIsIFwiRGV2aWNlUmVxdWVzdFwiLCBcIkRldmljZVVzZVJlcXVlc3RcIiwgXCJEZXZpY2VVc2VTdGF0ZW1lbnRcIiwgXCJEaWFnbm9zdGljT3JkZXJcIiwgXCJEaWFnbm9zdGljUmVwb3J0XCIsIFwiRG9jdW1lbnRNYW5pZmVzdFwiLCBcIkRvY3VtZW50UmVmZXJlbmNlXCIsIFwiRWxpZ2liaWxpdHlSZXF1ZXN0XCIsIFwiRW5jb3VudGVyXCIsIFwiRW5yb2xsbWVudFJlcXVlc3RcIiwgXCJFcGlzb2RlT2ZDYXJlXCIsIFwiRXhwbGFuYXRpb25PZkJlbmVmaXRcIiwgXCJGYW1pbHlNZW1iZXJIaXN0b3J5XCIsIFwiRmxhZ1wiLCBcIkdvYWxcIiwgXCJHcm91cFwiLCBcIkltYWdpbmdNYW5pZmVzdFwiLCBcIkltYWdpbmdPYmplY3RTZWxlY3Rpb25cIiwgXCJJbWFnaW5nU3R1ZHlcIiwgXCJJbW11bml6YXRpb25cIiwgXCJJbW11bml6YXRpb25FdmFsdWF0aW9uXCIsIFwiSW1tdW5pemF0aW9uUmVjb21tZW5kYXRpb25cIiwgXCJJbnZvaWNlXCIsIFwiTGlzdFwiLCBcIk1lYXN1cmVSZXBvcnRcIiwgXCJNZWRpYVwiLCBcIk1lZGljYXRpb25BZG1pbmlzdHJhdGlvblwiLCBcIk1lZGljYXRpb25EaXNwZW5zZVwiLCBcIk1lZGljYXRpb25PcmRlclwiLCBcIk1lZGljYXRpb25SZXF1ZXN0XCIsIFwiTWVkaWNhdGlvblN0YXRlbWVudFwiLCBcIk1vbGVjdWxhclNlcXVlbmNlXCIsIFwiTnV0cml0aW9uT3JkZXJcIiwgXCJPYnNlcnZhdGlvblwiLCBcIk9yZGVyXCIsIFwiUGF0aWVudFwiLCBcIlBlcnNvblwiLCBcIlByb2NlZHVyZVwiLCBcIlByb2NlZHVyZVJlcXVlc3RcIiwgXCJQcm92ZW5hbmNlXCIsIFwiUXVlc3Rpb25uYWlyZVJlc3BvbnNlXCIsIFwiUmVmZXJyYWxSZXF1ZXN0XCIsIFwiUmVsYXRlZFBlcnNvblwiLCBcIlJlcXVlc3RHcm91cFwiLCBcIlJlc2VhcmNoU3ViamVjdFwiLCBcIlJpc2tBc3Nlc3NtZW50XCIsIFwiU2NoZWR1bGVcIiwgXCJTZXJ2aWNlUmVxdWVzdFwiLCBcIlNwZWNpbWVuXCIsIFwiU3VwcGx5RGVsaXZlcnlcIiwgXCJTdXBwbHlSZXF1ZXN0XCIsIFwiVmlzaW9uUHJlc2NyaXB0aW9uXCJdO1xuLyoqXG4gKiBNYXAgb2YgRkhJUiByZWxlYXNlcyBhbmQgdGhlaXIgYWJzdHJhY3QgdmVyc2lvbiBhcyBudW1iZXJcbiAqL1xuXG5leHBvcnRzLmZoaXJWZXJzaW9ucyA9IHtcbiAgXCIwLjQuMFwiOiAyLFxuICBcIjAuNS4wXCI6IDIsXG4gIFwiMS4wLjBcIjogMixcbiAgXCIxLjAuMVwiOiAyLFxuICBcIjEuMC4yXCI6IDIsXG4gIFwiMS4xLjBcIjogMyxcbiAgXCIxLjQuMFwiOiAzLFxuICBcIjEuNi4wXCI6IDMsXG4gIFwiMS44LjBcIjogMyxcbiAgXCIzLjAuMFwiOiAzLFxuICBcIjMuMC4xXCI6IDMsXG4gIFwiMy4zLjBcIjogNCxcbiAgXCIzLjUuMFwiOiA0LFxuICBcIjQuMC4wXCI6IDQsXG4gIFwiNC4wLjFcIjogNFxufTtcbi8qKlxuICogQ29tYmluZWQgKEZISVIgUjItUjQpIGxpc3Qgb2Ygc2VhcmNoIHBhcmFtZXRlcnMgdGhhdCBjYW4gYmUgdXNlZCB0byBzY29wZVxuICogYSByZXF1ZXN0IGJ5IHBhdGllbnQgSUQuXG4gKi9cblxuZXhwb3J0cy5wYXRpZW50UGFyYW1zID0gW1wicGF0aWVudFwiLCBcInN1YmplY3RcIiwgXCJyZXF1ZXN0ZXJcIiwgXCJtZW1iZXJcIiwgXCJhY3RvclwiLCBcImJlbmVmaWNpYXJ5XCJdO1xuLyoqXG4gKiBUaGUgbmFtZSBvZiB0aGUgc2Vzc2lvblN0b3JhZ2UgZW50cnkgdGhhdCBjb250YWlucyB0aGUgY3VycmVudCBrZXlcbiAqL1xuXG5leHBvcnRzLlNNQVJUX0tFWSA9IFwiU01BUlRfS0VZXCI7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmluaXQgPSBleHBvcnRzLnJlYWR5ID0gZXhwb3J0cy5idWlsZFRva2VuUmVxdWVzdCA9IGV4cG9ydHMuY29tcGxldGVBdXRoID0gZXhwb3J0cy5vbk1lc3NhZ2UgPSBleHBvcnRzLmlzSW5Qb3BVcCA9IGV4cG9ydHMuaXNJbkZyYW1lID0gZXhwb3J0cy5hdXRob3JpemUgPSBleHBvcnRzLmdldFNlY3VyaXR5RXh0ZW5zaW9ucyA9IGV4cG9ydHMuZmV0Y2hXZWxsS25vd25Kc29uID0gZXhwb3J0cy5LRVkgPSB2b2lkIDA7XG4vKiBnbG9iYWwgd2luZG93ICovXG5cbmNvbnN0IGxpYl8xID0gcmVxdWlyZShcIi4vbGliXCIpO1xuXG5jb25zdCBDbGllbnRfMSA9IHJlcXVpcmUoXCIuL0NsaWVudFwiKTtcblxuY29uc3Qgc2V0dGluZ3NfMSA9IHJlcXVpcmUoXCIuL3NldHRpbmdzXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJLRVlcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gc2V0dGluZ3NfMS5TTUFSVF9LRVk7XG4gIH1cbn0pO1xuY29uc3QgZGVidWcgPSBsaWJfMS5kZWJ1Zy5leHRlbmQoXCJvYXV0aDJcIik7XG5cbmZ1bmN0aW9uIGlzQnJvd3NlcigpIHtcbiAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCI7XG59XG4vKipcbiAqIEZldGNoZXMgdGhlIHdlbGwta25vd24ganNvbiBmaWxlIGZyb20gdGhlIGdpdmVuIGJhc2UgVVJMLlxuICogTm90ZSB0aGF0IHRoZSByZXN1bHQgaXMgY2FjaGVkIGluIG1lbW9yeSAodW50aWwgdGhlIHBhZ2UgaXMgcmVsb2FkZWQgaW4gdGhlXG4gKiBicm93c2VyKSBiZWNhdXNlIGl0IG1pZ2h0IGhhdmUgdG8gYmUgcmUtdXNlZCBieSB0aGUgY2xpZW50XG4gKiBAcGFyYW0gYmFzZVVybCBUaGUgYmFzZSBVUkwgb2YgdGhlIEZISVIgc2VydmVyXG4gKi9cblxuXG5mdW5jdGlvbiBmZXRjaFdlbGxLbm93bkpzb24oYmFzZVVybCA9IFwiL1wiLCByZXF1ZXN0T3B0aW9ucykge1xuICBjb25zdCB1cmwgPSBTdHJpbmcoYmFzZVVybCkucmVwbGFjZSgvXFwvKiQvLCBcIi9cIikgKyBcIi53ZWxsLWtub3duL3NtYXJ0LWNvbmZpZ3VyYXRpb25cIjtcbiAgcmV0dXJuIGxpYl8xLmdldEFuZENhY2hlKHVybCwgcmVxdWVzdE9wdGlvbnMpLmNhdGNoKGV4ID0+IHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBmZXRjaCB0aGUgd2VsbC1rbm93biBqc29uIFwiJHt1cmx9XCIuICR7ZXgubWVzc2FnZX1gKTtcbiAgfSk7XG59XG5cbmV4cG9ydHMuZmV0Y2hXZWxsS25vd25Kc29uID0gZmV0Y2hXZWxsS25vd25Kc29uO1xuLyoqXG4gKiBGZXRjaCBhIFwiV2VsbEtub3duSnNvblwiIGFuZCBleHRyYWN0IHRoZSBTTUFSVCBlbmRwb2ludHMgZnJvbSBpdFxuICovXG5cbmZ1bmN0aW9uIGdldFNlY3VyaXR5RXh0ZW5zaW9uc0Zyb21XZWxsS25vd25Kc29uKGJhc2VVcmwgPSBcIi9cIiwgcmVxdWVzdE9wdGlvbnMpIHtcbiAgcmV0dXJuIGZldGNoV2VsbEtub3duSnNvbihiYXNlVXJsLCByZXF1ZXN0T3B0aW9ucykudGhlbihtZXRhID0+IHtcbiAgICBpZiAoIW1ldGEuYXV0aG9yaXphdGlvbl9lbmRwb2ludCB8fCAhbWV0YS50b2tlbl9lbmRwb2ludCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB3ZWxsS25vd25Kc29uXCIpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICByZWdpc3RyYXRpb25Vcmk6IG1ldGEucmVnaXN0cmF0aW9uX2VuZHBvaW50IHx8IFwiXCIsXG4gICAgICBhdXRob3JpemVVcmk6IG1ldGEuYXV0aG9yaXphdGlvbl9lbmRwb2ludCxcbiAgICAgIHRva2VuVXJpOiBtZXRhLnRva2VuX2VuZHBvaW50XG4gICAgfTtcbiAgfSk7XG59XG4vKipcbiAqIEZldGNoIGEgYENhcGFiaWxpdHlTdGF0ZW1lbnRgIGFuZCBleHRyYWN0IHRoZSBTTUFSVCBlbmRwb2ludHMgZnJvbSBpdFxuICovXG5cblxuZnVuY3Rpb24gZ2V0U2VjdXJpdHlFeHRlbnNpb25zRnJvbUNvbmZvcm1hbmNlU3RhdGVtZW50KGJhc2VVcmwgPSBcIi9cIiwgcmVxdWVzdE9wdGlvbnMpIHtcbiAgcmV0dXJuIGxpYl8xLmZldGNoQ29uZm9ybWFuY2VTdGF0ZW1lbnQoYmFzZVVybCwgcmVxdWVzdE9wdGlvbnMpLnRoZW4obWV0YSA9PiB7XG4gICAgY29uc3QgbnNVcmkgPSBcImh0dHA6Ly9maGlyLXJlZ2lzdHJ5LnNtYXJ0aGVhbHRoaXQub3JnL1N0cnVjdHVyZURlZmluaXRpb24vb2F1dGgtdXJpc1wiO1xuICAgIGNvbnN0IGV4dGVuc2lvbnMgPSAobGliXzEuZ2V0UGF0aChtZXRhIHx8IHt9LCBcInJlc3QuMC5zZWN1cml0eS5leHRlbnNpb25cIikgfHwgW10pLmZpbHRlcihlID0+IGUudXJsID09PSBuc1VyaSkubWFwKG8gPT4gby5leHRlbnNpb24pWzBdO1xuICAgIGNvbnN0IG91dCA9IHtcbiAgICAgIHJlZ2lzdHJhdGlvblVyaTogXCJcIixcbiAgICAgIGF1dGhvcml6ZVVyaTogXCJcIixcbiAgICAgIHRva2VuVXJpOiBcIlwiXG4gICAgfTtcblxuICAgIGlmIChleHRlbnNpb25zKSB7XG4gICAgICBleHRlbnNpb25zLmZvckVhY2goZXh0ID0+IHtcbiAgICAgICAgaWYgKGV4dC51cmwgPT09IFwicmVnaXN0ZXJcIikge1xuICAgICAgICAgIG91dC5yZWdpc3RyYXRpb25VcmkgPSBleHQudmFsdWVVcmk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXh0LnVybCA9PT0gXCJhdXRob3JpemVcIikge1xuICAgICAgICAgIG91dC5hdXRob3JpemVVcmkgPSBleHQudmFsdWVVcmk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXh0LnVybCA9PT0gXCJ0b2tlblwiKSB7XG4gICAgICAgICAgb3V0LnRva2VuVXJpID0gZXh0LnZhbHVlVXJpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0O1xuICB9KTtcbn1cbi8qKlxuICogVGhpcyB3b3JrcyBzaW1pbGFybHkgdG8gYFByb21pc2UuYW55KClgLiBUaGUgdGFza3MgYXJlIG9iamVjdHMgY29udGFpbmluZyBhXG4gKiByZXF1ZXN0IHByb21pc2UgYW5kIGl0J3MgQWJvcnRDb250cm9sbGVyLiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHdpbGwgYmVcbiAqIHJlc29sdmVkIHdpdGggdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgZmlyc3Qgc3VjY2Vzc2Z1bCByZXF1ZXN0LCBvciByZWplY3RlZFxuICogd2l0aCBhbiBhZ2dyZWdhdGUgZXJyb3IgaWYgYWxsIHRhc2tzIGZhaWwuIEFueSByZXF1ZXN0cywgb3RoZXIgdGhhbiB0aGUgZmlyc3RcbiAqIG9uZSB0aGF0IHN1Y2NlZWRzIHdpbGwgYmUgYWJvcnRlZC5cbiAqL1xuXG5cbmZ1bmN0aW9uIGFueSh0YXNrcykge1xuICBjb25zdCBsZW4gPSB0YXNrcy5sZW5ndGg7XG4gIGNvbnN0IGVycm9ycyA9IFtdO1xuICBsZXQgcmVzb2x2ZWQgPSBmYWxzZTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBmdW5jdGlvbiBvblN1Y2Nlc3ModGFzaywgcmVzdWx0KSB7XG4gICAgICB0YXNrLmNvbXBsZXRlID0gdHJ1ZTtcblxuICAgICAgaWYgKCFyZXNvbHZlZCkge1xuICAgICAgICByZXNvbHZlZCA9IHRydWU7XG4gICAgICAgIHRhc2tzLmZvckVhY2godCA9PiB7XG4gICAgICAgICAgaWYgKCF0LmNvbXBsZXRlKSB7XG4gICAgICAgICAgICB0LmNvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25FcnJvcihlcnJvcikge1xuICAgICAgaWYgKGVycm9ycy5wdXNoKGVycm9yKSA9PT0gbGVuKSB7XG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXJyb3JzLm1hcChlID0+IGUubWVzc2FnZSkuam9pbihcIjsgXCIpKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGFza3MuZm9yRWFjaCh0ID0+IHtcbiAgICAgIHQucHJvbWlzZS50aGVuKHJlc3VsdCA9PiBvblN1Y2Nlc3ModCwgcmVzdWx0KSwgb25FcnJvcik7XG4gICAgfSk7XG4gIH0pO1xufVxuLyoqXG4gKiBHaXZlbiBhIEZISVIgc2VydmVyLCByZXR1cm5zIGFuIG9iamVjdCB3aXRoIGl0J3MgT2F1dGggc2VjdXJpdHkgZW5kcG9pbnRzXG4gKiB0aGF0IHdlIGFyZSBpbnRlcmVzdGVkIGluLiBUaGlzIHdpbGwgdHJ5IHRvIGZpbmQgdGhlIGluZm8gaW4gYm90aCB0aGVcbiAqIGBDYXBhYmlsaXR5U3RhdGVtZW50YCBhbmQgdGhlIGAud2VsbC1rbm93bi9zbWFydC1jb25maWd1cmF0aW9uYC4gV2hhdGV2ZXJcbiAqIEFycml2ZXMgZmlyc3Qgd2lsbCBiZSB1c2VkIGFuZCB0aGUgb3RoZXIgcmVxdWVzdCB3aWxsIGJlIGFib3J0ZWQuXG4gKiBAcGFyYW0gW2Jhc2VVcmxdIEZoaXIgc2VydmVyIGJhc2UgVVJMXG4gKiBAcGFyYW0gW2Vudl0gVGhlIEFkYXB0ZXJcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldFNlY3VyaXR5RXh0ZW5zaW9ucyhlbnYsIGJhc2VVcmwgPSBcIi9cIikge1xuICBjb25zdCBBYm9ydENvbnRyb2xsZXIgPSBlbnYuZ2V0QWJvcnRDb250cm9sbGVyKCk7XG4gIGNvbnN0IGFib3J0Q29udHJvbGxlcjEgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gIGNvbnN0IGFib3J0Q29udHJvbGxlcjIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gIHJldHVybiBhbnkoW3tcbiAgICBjb250cm9sbGVyOiBhYm9ydENvbnRyb2xsZXIxLFxuICAgIHByb21pc2U6IGdldFNlY3VyaXR5RXh0ZW5zaW9uc0Zyb21XZWxsS25vd25Kc29uKGJhc2VVcmwsIHtcbiAgICAgIHNpZ25hbDogYWJvcnRDb250cm9sbGVyMS5zaWduYWxcbiAgICB9KVxuICB9LCB7XG4gICAgY29udHJvbGxlcjogYWJvcnRDb250cm9sbGVyMixcbiAgICBwcm9taXNlOiBnZXRTZWN1cml0eUV4dGVuc2lvbnNGcm9tQ29uZm9ybWFuY2VTdGF0ZW1lbnQoYmFzZVVybCwge1xuICAgICAgc2lnbmFsOiBhYm9ydENvbnRyb2xsZXIyLnNpZ25hbFxuICAgIH0pXG4gIH1dKTtcbn1cblxuZXhwb3J0cy5nZXRTZWN1cml0eUV4dGVuc2lvbnMgPSBnZXRTZWN1cml0eUV4dGVuc2lvbnM7XG4vKipcbiAqIFN0YXJ0cyB0aGUgU01BUlQgTGF1bmNoIFNlcXVlbmNlLlxuICogPiAqKklNUE9SVEFOVCoqOlxuICogICBgYXV0aG9yaXplKClgIHdpbGwgZW5kIHVwIHJlZGlyZWN0aW5nIHlvdSB0byB0aGUgYXV0aG9yaXphdGlvbiBzZXJ2ZXIuXG4gKiAgICBUaGlzIG1lYW5zIHRoYXQgeW91IHNob3VsZCBub3QgYWRkIGFueXRoaW5nIHRvIHRoZSByZXR1cm5lZCBwcm9taXNlIGNoYWluLlxuICogICAgQW55IGNvZGUgd3JpdHRlbiBkaXJlY3RseSBhZnRlciB0aGUgYXV0aG9yaXplKCkgY2FsbCBtaWdodCBub3QgYmUgZXhlY3V0ZWRcbiAqICAgIGR1ZSB0byB0aGF0IHJlZGlyZWN0IVxuICogQHBhcmFtIGVudlxuICogQHBhcmFtIFtwYXJhbXNdXG4gKiBAcGFyYW0gW19ub1JlZGlyZWN0XSBJZiB0cnVlLCByZXNvbHZlIHdpdGggdGhlIHJlZGlyZWN0IHVybCB3aXRob3V0IHRyeWluZyB0byByZWRpcmVjdCB0byBpdFxuICovXG5cbmFzeW5jIGZ1bmN0aW9uIGF1dGhvcml6ZShlbnYsIHBhcmFtcyA9IHt9LCBfbm9SZWRpcmVjdCA9IGZhbHNlKSB7XG4gIC8vIE9idGFpbiBpbnB1dFxuICBjb25zdCB7XG4gICAgcmVkaXJlY3RfdXJpLFxuICAgIGNsaWVudFNlY3JldCxcbiAgICBmYWtlVG9rZW5SZXNwb25zZSxcbiAgICBwYXRpZW50SWQsXG4gICAgZW5jb3VudGVySWQsXG4gICAgY2xpZW50X2lkLFxuICAgIHRhcmdldCxcbiAgICB3aWR0aCxcbiAgICBoZWlnaHRcbiAgfSA9IHBhcmFtcztcbiAgbGV0IHtcbiAgICBpc3MsXG4gICAgbGF1bmNoLFxuICAgIGZoaXJTZXJ2aWNlVXJsLFxuICAgIHJlZGlyZWN0VXJpLFxuICAgIHNjb3BlID0gXCJcIixcbiAgICBjbGllbnRJZCxcbiAgICBjb21wbGV0ZUluVGFyZ2V0XG4gIH0gPSBwYXJhbXM7XG4gIGNvbnN0IHVybCA9IGVudi5nZXRVcmwoKTtcbiAgY29uc3Qgc3RvcmFnZSA9IGVudi5nZXRTdG9yYWdlKCk7IC8vIEZvciB0aGVzZSB0aHJlZSBhbiB1cmwgcGFyYW0gdGFrZXMgcHJlY2VkZW5jZSBvdmVyIGlubGluZSBvcHRpb25cblxuICBpc3MgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcImlzc1wiKSB8fCBpc3M7XG4gIGZoaXJTZXJ2aWNlVXJsID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJmaGlyU2VydmljZVVybFwiKSB8fCBmaGlyU2VydmljZVVybDtcbiAgbGF1bmNoID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJsYXVuY2hcIikgfHwgbGF1bmNoO1xuXG4gIGlmICghY2xpZW50SWQpIHtcbiAgICBjbGllbnRJZCA9IGNsaWVudF9pZDtcbiAgfVxuXG4gIGlmICghcmVkaXJlY3RVcmkpIHtcbiAgICByZWRpcmVjdFVyaSA9IHJlZGlyZWN0X3VyaTtcbiAgfVxuXG4gIGlmICghcmVkaXJlY3RVcmkpIHtcbiAgICByZWRpcmVjdFVyaSA9IGVudi5yZWxhdGl2ZShcIi5cIik7XG4gIH0gZWxzZSBpZiAoIXJlZGlyZWN0VXJpLm1hdGNoKC9eaHR0cHM/XFw6XFwvXFwvLykpIHtcbiAgICByZWRpcmVjdFVyaSA9IGVudi5yZWxhdGl2ZShyZWRpcmVjdFVyaSk7XG4gIH1cblxuICBjb25zdCBzZXJ2ZXJVcmwgPSBTdHJpbmcoaXNzIHx8IGZoaXJTZXJ2aWNlVXJsIHx8IFwiXCIpOyAvLyBWYWxpZGF0ZSBpbnB1dFxuXG4gIGlmICghc2VydmVyVXJsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gc2VydmVyIHVybCBmb3VuZC4gSXQgbXVzdCBiZSBzcGVjaWZpZWQgYXMgYGlzc2Agb3IgYXMgXCIgKyBcImBmaGlyU2VydmljZVVybGAgcGFyYW1ldGVyXCIpO1xuICB9XG5cbiAgaWYgKGlzcykge1xuICAgIGRlYnVnKFwiTWFraW5nICVzIGxhdW5jaC4uLlwiLCBsYXVuY2ggPyBcIkVIUlwiIDogXCJzdGFuZGFsb25lXCIpO1xuICB9IC8vIGFwcGVuZCBsYXVuY2ggc2NvcGUgaWYgbmVlZGVkXG5cblxuICBpZiAobGF1bmNoICYmICFzY29wZS5tYXRjaCgvbGF1bmNoLykpIHtcbiAgICBzY29wZSArPSBcIiBsYXVuY2hcIjtcbiAgfVxuXG4gIGlmIChpc0Jyb3dzZXIoKSkge1xuICAgIGNvbnN0IGluRnJhbWUgPSBpc0luRnJhbWUoKTtcbiAgICBjb25zdCBpblBvcFVwID0gaXNJblBvcFVwKCk7XG5cbiAgICBpZiAoKGluRnJhbWUgfHwgaW5Qb3BVcCkgJiYgY29tcGxldGVJblRhcmdldCAhPT0gdHJ1ZSAmJiBjb21wbGV0ZUluVGFyZ2V0ICE9PSBmYWxzZSkge1xuICAgICAgLy8gY29tcGxldGVJblRhcmdldCB3aWxsIGRlZmF1bHQgdG8gdHJ1ZSBpZiBhdXRob3JpemUgaXMgY2FsbGVkIGZyb21cbiAgICAgIC8vIHdpdGhpbiBhbiBpZnJhbWUuIFRoaXMgaXMgdG8gYXZvaWQgaXNzdWVzIHdoZW4gdGhlIGVudGlyZSBhcHBcbiAgICAgIC8vIGhhcHBlbnMgdG8gYmUgcmVuZGVyZWQgaW4gYW4gaWZyYW1lIChpbmNsdWRpbmcgaW4gc29tZSBFSFJzKSxcbiAgICAgIC8vIGV2ZW4gdGhvdWdoIHRoYXQgd2FzIG5vdCBob3cgdGhlIGFwcCBkZXZlbG9wZXIncyBpbnRlbnRpb24uXG4gICAgICBjb21wbGV0ZUluVGFyZ2V0ID0gaW5GcmFtZTsgLy8gSW4gdGhpcyBjYXNlIHdlIGNhbid0IGFsd2F5cyBtYWtlIHRoZSBiZXN0IGRlY2lzaW9uIHNvIGFzayBkZXZzXG4gICAgICAvLyB0byBiZSBleHBsaWNpdCBpbiB0aGVpciBjb25maWd1cmF0aW9uLlxuXG4gICAgICBjb25zb2xlLndhcm4oJ1lvdXIgYXBwIGlzIGJlaW5nIGF1dGhvcml6ZWQgZnJvbSB3aXRoaW4gYW4gaWZyYW1lIG9yIHBvcHVwICcgKyAnd2luZG93LiBQbGVhc2UgYmUgZXhwbGljaXQgYW5kIHByb3ZpZGUgYSBcImNvbXBsZXRlSW5UYXJnZXRcIiAnICsgJ29wdGlvbi4gVXNlIFwidHJ1ZVwiIHRvIGNvbXBsZXRlIHRoZSBhdXRob3JpemF0aW9uIGluIHRoZSAnICsgJ3NhbWUgd2luZG93LCBvciBcImZhbHNlXCIgdG8gdHJ5IHRvIGNvbXBsZXRlIGl0IGluIHRoZSBwYXJlbnQgJyArICdvciB0aGUgb3BlbmVyIHdpbmRvdy4gU2VlIGh0dHA6Ly9kb2NzLnNtYXJ0aGVhbHRoaXQub3JnL2NsaWVudC1qcy9hcGkuaHRtbCcpO1xuICAgIH1cbiAgfSAvLyBJZiBgYXV0aG9yaXplYCBpcyBjYWxsZWQsIG1ha2Ugc3VyZSB3ZSBjbGVhciBhbnkgcHJldmlvdXMgc3RhdGUgKGluIGNhc2VcbiAgLy8gdGhpcyBpcyBhIHJlLWF1dGhvcml6ZSlcblxuXG4gIGNvbnN0IG9sZEtleSA9IGF3YWl0IHN0b3JhZ2UuZ2V0KHNldHRpbmdzXzEuU01BUlRfS0VZKTtcbiAgYXdhaXQgc3RvcmFnZS51bnNldChvbGRLZXkpOyAvLyBjcmVhdGUgaW5pdGlhbCBzdGF0ZVxuXG4gIGNvbnN0IHN0YXRlS2V5ID0gbGliXzEucmFuZG9tU3RyaW5nKDE2KTtcbiAgY29uc3Qgc3RhdGUgPSB7XG4gICAgY2xpZW50SWQsXG4gICAgc2NvcGUsXG4gICAgcmVkaXJlY3RVcmksXG4gICAgc2VydmVyVXJsLFxuICAgIGNsaWVudFNlY3JldCxcbiAgICB0b2tlblJlc3BvbnNlOiB7fSxcbiAgICBrZXk6IHN0YXRlS2V5LFxuICAgIGNvbXBsZXRlSW5UYXJnZXRcbiAgfTtcbiAgY29uc3QgZnVsbFNlc3Npb25TdG9yYWdlU3VwcG9ydCA9IGlzQnJvd3NlcigpID8gbGliXzEuZ2V0UGF0aChlbnYsIFwib3B0aW9ucy5mdWxsU2Vzc2lvblN0b3JhZ2VTdXBwb3J0XCIpIDogdHJ1ZTtcblxuICBpZiAoZnVsbFNlc3Npb25TdG9yYWdlU3VwcG9ydCkge1xuICAgIGF3YWl0IHN0b3JhZ2Uuc2V0KHNldHRpbmdzXzEuU01BUlRfS0VZLCBzdGF0ZUtleSk7XG4gIH0gLy8gZmFrZVRva2VuUmVzcG9uc2UgdG8gb3ZlcnJpZGUgc3R1ZmYgKHVzZWZ1bCBpbiBkZXZlbG9wbWVudClcblxuXG4gIGlmIChmYWtlVG9rZW5SZXNwb25zZSkge1xuICAgIE9iamVjdC5hc3NpZ24oc3RhdGUudG9rZW5SZXNwb25zZSwgZmFrZVRva2VuUmVzcG9uc2UpO1xuICB9IC8vIEZpeGVkIHBhdGllbnRJZCAodXNlZnVsIGluIGRldmVsb3BtZW50KVxuXG5cbiAgaWYgKHBhdGllbnRJZCkge1xuICAgIE9iamVjdC5hc3NpZ24oc3RhdGUudG9rZW5SZXNwb25zZSwge1xuICAgICAgcGF0aWVudDogcGF0aWVudElkXG4gICAgfSk7XG4gIH0gLy8gRml4ZWQgZW5jb3VudGVySWQgKHVzZWZ1bCBpbiBkZXZlbG9wbWVudClcblxuXG4gIGlmIChlbmNvdW50ZXJJZCkge1xuICAgIE9iamVjdC5hc3NpZ24oc3RhdGUudG9rZW5SZXNwb25zZSwge1xuICAgICAgZW5jb3VudGVyOiBlbmNvdW50ZXJJZFxuICAgIH0pO1xuICB9XG5cbiAgbGV0IHJlZGlyZWN0VXJsID0gcmVkaXJlY3RVcmkgKyBcIj9zdGF0ZT1cIiArIGVuY29kZVVSSUNvbXBvbmVudChzdGF0ZUtleSk7IC8vIGJ5cGFzcyBvYXV0aCBpZiBmaGlyU2VydmljZVVybCBpcyB1c2VkIChidXQgaXNzIHRha2VzIHByZWNlZGVuY2UpXG5cbiAgaWYgKGZoaXJTZXJ2aWNlVXJsICYmICFpc3MpIHtcbiAgICBkZWJ1ZyhcIk1ha2luZyBmYWtlIGxhdW5jaC4uLlwiKTtcbiAgICBhd2FpdCBzdG9yYWdlLnNldChzdGF0ZUtleSwgc3RhdGUpO1xuXG4gICAgaWYgKF9ub1JlZGlyZWN0KSB7XG4gICAgICByZXR1cm4gcmVkaXJlY3RVcmw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF3YWl0IGVudi5yZWRpcmVjdChyZWRpcmVjdFVybCk7XG4gIH0gLy8gR2V0IG9hdXRoIGVuZHBvaW50cyBhbmQgYWRkIHRoZW0gdG8gdGhlIHN0YXRlXG5cblxuICBjb25zdCBleHRlbnNpb25zID0gYXdhaXQgZ2V0U2VjdXJpdHlFeHRlbnNpb25zKGVudiwgc2VydmVyVXJsKTtcbiAgT2JqZWN0LmFzc2lnbihzdGF0ZSwgZXh0ZW5zaW9ucyk7XG4gIGF3YWl0IHN0b3JhZ2Uuc2V0KHN0YXRlS2V5LCBzdGF0ZSk7IC8vIElmIHRoaXMgaGFwcGVucyB0byBiZSBhbiBvcGVuIHNlcnZlciBhbmQgdGhlcmUgaXMgbm8gYXV0aG9yaXplVXJpXG5cbiAgaWYgKCFzdGF0ZS5hdXRob3JpemVVcmkpIHtcbiAgICBpZiAoX25vUmVkaXJlY3QpIHtcbiAgICAgIHJldHVybiByZWRpcmVjdFVybDtcbiAgICB9XG5cbiAgICByZXR1cm4gYXdhaXQgZW52LnJlZGlyZWN0KHJlZGlyZWN0VXJsKTtcbiAgfSAvLyBidWlsZCB0aGUgcmVkaXJlY3QgdXJpXG5cblxuICBjb25zdCByZWRpcmVjdFBhcmFtcyA9IFtcInJlc3BvbnNlX3R5cGU9Y29kZVwiLCBcImNsaWVudF9pZD1cIiArIGVuY29kZVVSSUNvbXBvbmVudChjbGllbnRJZCB8fCBcIlwiKSwgXCJzY29wZT1cIiArIGVuY29kZVVSSUNvbXBvbmVudChzY29wZSksIFwicmVkaXJlY3RfdXJpPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHJlZGlyZWN0VXJpKSwgXCJhdWQ9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoc2VydmVyVXJsKSwgXCJzdGF0ZT1cIiArIGVuY29kZVVSSUNvbXBvbmVudChzdGF0ZUtleSldOyAvLyBhbHNvIHBhc3MgdGhpcyBpbiBjYXNlIG9mIEVIUiBsYXVuY2hcblxuICBpZiAobGF1bmNoKSB7XG4gICAgcmVkaXJlY3RQYXJhbXMucHVzaChcImxhdW5jaD1cIiArIGVuY29kZVVSSUNvbXBvbmVudChsYXVuY2gpKTtcbiAgfVxuXG4gIHJlZGlyZWN0VXJsID0gc3RhdGUuYXV0aG9yaXplVXJpICsgXCI/XCIgKyByZWRpcmVjdFBhcmFtcy5qb2luKFwiJlwiKTtcblxuICBpZiAoX25vUmVkaXJlY3QpIHtcbiAgICByZXR1cm4gcmVkaXJlY3RVcmw7XG4gIH1cblxuICBpZiAodGFyZ2V0ICYmIGlzQnJvd3NlcigpKSB7XG4gICAgbGV0IHdpbjtcbiAgICB3aW4gPSBhd2FpdCBsaWJfMS5nZXRUYXJnZXRXaW5kb3codGFyZ2V0LCB3aWR0aCwgaGVpZ2h0KTtcblxuICAgIGlmICh3aW4gIT09IHNlbGYpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIEFsc28gcmVtb3ZlIGFueSBvbGQgc3RhdGUgZnJvbSB0aGUgdGFyZ2V0IHdpbmRvdyBhbmQgdGhlblxuICAgICAgICAvLyB0cmFuc2ZlciB0aGUgY3VycmVudCBzdGF0ZSB0aGVyZVxuICAgICAgICB3aW4uc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShvbGRLZXkpO1xuICAgICAgICB3aW4uc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShzdGF0ZUtleSwgSlNPTi5zdHJpbmdpZnkoc3RhdGUpKTtcbiAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgIGxpYl8xLmRlYnVnKGBGYWlsZWQgdG8gbW9kaWZ5IHdpbmRvdy5zZXNzaW9uU3RvcmFnZS4gUGVyaGFwcyBpdCBpcyBmcm9tIGRpZmZlcmVudCBvcmlnaW4/LiBGYWlsaW5nIGJhY2sgdG8gXCJfc2VsZlwiLiAlc2AsIGV4KTtcbiAgICAgICAgd2luID0gc2VsZjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAod2luICE9PSBzZWxmKSB7XG4gICAgICB0cnkge1xuICAgICAgICB3aW4ubG9jYXRpb24uaHJlZiA9IHJlZGlyZWN0VXJsO1xuICAgICAgICBzZWxmLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIG9uTWVzc2FnZSk7XG4gICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICBsaWJfMS5kZWJ1ZyhgRmFpbGVkIHRvIG1vZGlmeSB3aW5kb3cubG9jYXRpb24uIFBlcmhhcHMgaXQgaXMgZnJvbSBkaWZmZXJlbnQgb3JpZ2luPy4gRmFpbGluZyBiYWNrIHRvIFwiX3NlbGZcIi4gJXNgLCBleCk7XG4gICAgICAgIHNlbGYubG9jYXRpb24uaHJlZiA9IHJlZGlyZWN0VXJsO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzZWxmLmxvY2F0aW9uLmhyZWYgPSByZWRpcmVjdFVybDtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGF3YWl0IGVudi5yZWRpcmVjdChyZWRpcmVjdFVybCk7XG4gIH1cbn1cblxuZXhwb3J0cy5hdXRob3JpemUgPSBhdXRob3JpemU7XG4vKipcbiAqIENoZWNrcyBpZiBjYWxsZWQgd2l0aGluIGEgZnJhbWUuIE9ubHkgd29ya3MgaW4gYnJvd3NlcnMhXG4gKiBJZiB0aGUgY3VycmVudCB3aW5kb3cgaGFzIGEgYHBhcmVudGAgb3IgYHRvcGAgcHJvcGVydGllcyB0aGF0IHJlZmVyIHRvXG4gKiBhbm90aGVyIHdpbmRvdywgcmV0dXJucyB0cnVlLiBJZiB0cnlpbmcgdG8gYWNjZXNzIGB0b3BgIG9yIGBwYXJlbnRgIHRocm93cyBhblxuICogZXJyb3IsIHJldHVybnMgdHJ1ZS4gT3RoZXJ3aXNlIHJldHVybnMgYGZhbHNlYC5cbiAqL1xuXG5mdW5jdGlvbiBpc0luRnJhbWUoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHNlbGYgIT09IHRvcCAmJiBwYXJlbnQgIT09IHNlbGY7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG5leHBvcnRzLmlzSW5GcmFtZSA9IGlzSW5GcmFtZTtcbi8qKlxuICogQ2hlY2tzIGlmIGNhbGxlZCB3aXRoaW4gYW5vdGhlciB3aW5kb3cgKHBvcHVwIG9yIHRhYikuIE9ubHkgd29ya3MgaW4gYnJvd3NlcnMhXG4gKiBUbyBjb25zaWRlciBpdHNlbGYgY2FsbGVkIGluIGEgbmV3IHdpbmRvdywgdGhpcyBmdW5jdGlvbiB2ZXJpZmllcyB0aGF0OlxuICogMS4gYHNlbGYgPT09IHRvcGAgKG5vdCBpbiBmcmFtZSlcbiAqIDIuIGAhIW9wZW5lciAmJiBvcGVuZXIgIT09IHNlbGZgIFRoZSB3aW5kb3cgaGFzIGFuIG9wZW5lclxuICogMy4gYCEhd2luZG93Lm5hbWVgIFRoZSB3aW5kb3cgaGFzIGEgYG5hbWVgIHNldFxuICovXG5cbmZ1bmN0aW9uIGlzSW5Qb3BVcCgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gc2VsZiA9PT0gdG9wICYmICEhb3BlbmVyICYmIG9wZW5lciAhPT0gc2VsZiAmJiAhIXdpbmRvdy5uYW1lO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydHMuaXNJblBvcFVwID0gaXNJblBvcFVwO1xuLyoqXG4gKiBBbm90aGVyIHdpbmRvdyBjYW4gc2VuZCBhIFwiY29tcGxldGVBdXRoXCIgbWVzc2FnZSB0byB0aGlzIG9uZSwgbWFraW5nIGl0IHRvXG4gKiBuYXZpZ2F0ZSB0byBlLmRhdGEudXJsXG4gKiBAcGFyYW0gZSBUaGUgbWVzc2FnZSBldmVudFxuICovXG5cbmZ1bmN0aW9uIG9uTWVzc2FnZShlKSB7XG4gIGlmIChlLmRhdGEudHlwZSA9PSBcImNvbXBsZXRlQXV0aFwiICYmIGUub3JpZ2luID09PSBuZXcgVVJMKHNlbGYubG9jYXRpb24uaHJlZikub3JpZ2luKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIG9uTWVzc2FnZSk7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBlLmRhdGEudXJsO1xuICB9XG59XG5cbmV4cG9ydHMub25NZXNzYWdlID0gb25NZXNzYWdlO1xuLyoqXG4gKiBUaGUgY29tcGxldGVBdXRoIGZ1bmN0aW9uIHNob3VsZCBvbmx5IGJlIGNhbGxlZCBvbiB0aGUgcGFnZSB0aGF0IHJlcHJlc2VudHNcbiAqIHRoZSByZWRpcmVjdFVyaS4gV2UgdHlwaWNhbGx5IGxhbmQgdGhlcmUgYWZ0ZXIgYSByZWRpcmVjdCBmcm9tIHRoZVxuICogYXV0aG9yaXphdGlvbiBzZXJ2ZXIuLlxuICovXG5cbmFzeW5jIGZ1bmN0aW9uIGNvbXBsZXRlQXV0aChlbnYpIHtcbiAgdmFyIF9hLCBfYjtcblxuICBjb25zdCB1cmwgPSBlbnYuZ2V0VXJsKCk7XG4gIGNvbnN0IFN0b3JhZ2UgPSBlbnYuZ2V0U3RvcmFnZSgpO1xuICBjb25zdCBwYXJhbXMgPSB1cmwuc2VhcmNoUGFyYW1zO1xuICBsZXQga2V5ID0gcGFyYW1zLmdldChcInN0YXRlXCIpO1xuICBjb25zdCBjb2RlID0gcGFyYW1zLmdldChcImNvZGVcIik7XG4gIGNvbnN0IGF1dGhFcnJvciA9IHBhcmFtcy5nZXQoXCJlcnJvclwiKTtcbiAgY29uc3QgYXV0aEVycm9yRGVzY3JpcHRpb24gPSBwYXJhbXMuZ2V0KFwiZXJyb3JfZGVzY3JpcHRpb25cIik7XG5cbiAgaWYgKCFrZXkpIHtcbiAgICBrZXkgPSBhd2FpdCBTdG9yYWdlLmdldChzZXR0aW5nc18xLlNNQVJUX0tFWSk7XG4gIH0gLy8gU3RhcnQgYnkgY2hlY2tpbmcgdGhlIHVybCBmb3IgYGVycm9yYCBhbmQgYGVycm9yX2Rlc2NyaXB0aW9uYCBwYXJhbWV0ZXJzLlxuICAvLyBUaGlzIGhhcHBlbnMgd2hlbiB0aGUgYXV0aCBzZXJ2ZXIgcmVqZWN0cyBvdXIgYXV0aG9yaXphdGlvbiBhdHRlbXB0LiBJblxuICAvLyB0aGlzIGNhc2UgaXQgaGFzIG5vIG90aGVyIHdheSB0byB0ZWxsIHVzIHdoYXQgdGhlIGVycm9yIHdhcywgb3RoZXIgdGhhblxuICAvLyBhcHBlbmRpbmcgdGhlc2UgcGFyYW1ldGVycyB0byB0aGUgcmVkaXJlY3QgdXJsLlxuICAvLyBGcm9tIGNsaWVudCdzIHBvaW50IG9mIHZpZXcsIHRoaXMgaXMgbm90IHZlcnkgcmVsaWFibGUgKGJlY2F1c2Ugd2UgY2FuJ3RcbiAgLy8ga25vdyBob3cgd2UgaGF2ZSBsYW5kZWQgb24gdGhpcyBwYWdlIC0gd2FzIGl0IGEgcmVkaXJlY3Qgb3Igd2FzIGl0IGxvYWRlZFxuICAvLyBtYW51YWxseSkuIEhvd2V2ZXIsIGlmIGBjb21wbGV0ZUF1dGgoKWAgaXMgYmVpbmcgY2FsbGVkLCB3ZSBjYW4gYXNzdW1lXG4gIC8vIHRoYXQgdGhlIHVybCBjb21lcyBmcm9tIHRoZSBhdXRoIHNlcnZlciAob3RoZXJ3aXNlIHRoZSBhcHAgd29uJ3Qgd29ya1xuICAvLyBhbnl3YXkpLlxuXG5cbiAgaWYgKGF1dGhFcnJvciB8fCBhdXRoRXJyb3JEZXNjcmlwdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihbYXV0aEVycm9yLCBhdXRoRXJyb3JEZXNjcmlwdGlvbl0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCI6IFwiKSk7XG4gIH1cblxuICBkZWJ1ZyhcImtleTogJXMsIGNvZGU6ICVzXCIsIGtleSwgY29kZSk7IC8vIGtleSBtaWdodCBiZSBjb21pbmcgZnJvbSB0aGUgcGFnZSB1cmwgc28gaXQgbWlnaHQgYmUgZW1wdHkgb3IgbWlzc2luZ1xuXG4gIGlmICgha2V5KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gJ3N0YXRlJyBwYXJhbWV0ZXIgZm91bmQuIFBsZWFzZSAocmUpbGF1bmNoIHRoZSBhcHAuXCIpO1xuICB9IC8vIENoZWNrIGlmIHdlIGhhdmUgYSBwcmV2aW91cyBzdGF0ZVxuXG5cbiAgbGV0IHN0YXRlID0gYXdhaXQgU3RvcmFnZS5nZXQoa2V5KTtcbiAgY29uc3QgZnVsbFNlc3Npb25TdG9yYWdlU3VwcG9ydCA9IGlzQnJvd3NlcigpID8gbGliXzEuZ2V0UGF0aChlbnYsIFwib3B0aW9ucy5mdWxsU2Vzc2lvblN0b3JhZ2VTdXBwb3J0XCIpIDogdHJ1ZTsgLy8gSWYgd2UgYXJlIGluIGEgcG9wdXAgd2luZG93IG9yIGFuIGlmcmFtZSBhbmQgdGhlIGF1dGhvcml6YXRpb24gaXNcbiAgLy8gY29tcGxldGUsIHNlbmQgdGhlIGxvY2F0aW9uIGJhY2sgdG8gb3VyIG9wZW5lciBhbmQgZXhpdC5cblxuICBpZiAoaXNCcm93c2VyKCkgJiYgc3RhdGUgJiYgIXN0YXRlLmNvbXBsZXRlSW5UYXJnZXQpIHtcbiAgICBjb25zdCBpbkZyYW1lID0gaXNJbkZyYW1lKCk7XG4gICAgY29uc3QgaW5Qb3BVcCA9IGlzSW5Qb3BVcCgpOyAvLyB3ZSBhcmUgYWJvdXQgdG8gcmV0dXJuIHRvIHRoZSBvcGVuZXIvcGFyZW50IHdoZXJlIGNvbXBsZXRlQXV0aCB3aWxsXG4gICAgLy8gYmUgY2FsbGVkIGFnYWluLiBJbiByYXJlIGNhc2VzIHRoZSBvcGVuZXIgb3IgcGFyZW50IG1pZ2h0IGFsc28gYmVcbiAgICAvLyBhIGZyYW1lIG9yIHBvcHVwLiBUaGVuIGluRnJhbWUgb3IgaW5Qb3BVcCB3aWxsIGJlIHRydWUgYnV0IHdlIHN0aWxsXG4gICAgLy8gaGF2ZSB0byBzdG9wIGdvaW5nIHVwIHRoZSBjaGFpbi4gVG8gZ3VhcmQgYWdhaW5zdCB0aGF0IHdlaXJkIGZvcm0gb2ZcbiAgICAvLyByZWN1cnNpb24gd2UgcGFzcyBvbmUgYWRkaXRpb25hbCBwYXJhbWV0ZXIgdG8gdGhlIHVybCB3aGljaCB3ZSBsYXRlclxuICAgIC8vIHJlbW92ZS5cblxuICAgIGlmICgoaW5GcmFtZSB8fCBpblBvcFVwKSAmJiAhdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJjb21wbGV0ZVwiKSkge1xuICAgICAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoXCJjb21wbGV0ZVwiLCBcIjFcIik7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGhyZWYsXG4gICAgICAgIG9yaWdpblxuICAgICAgfSA9IHVybDtcblxuICAgICAgaWYgKGluRnJhbWUpIHtcbiAgICAgICAgcGFyZW50LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICB0eXBlOiBcImNvbXBsZXRlQXV0aFwiLFxuICAgICAgICAgIHVybDogaHJlZlxuICAgICAgICB9LCBvcmlnaW4pO1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5Qb3BVcCkge1xuICAgICAgICBvcGVuZXIucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgIHR5cGU6IFwiY29tcGxldGVBdXRoXCIsXG4gICAgICAgICAgdXJsOiBocmVmXG4gICAgICAgIH0sIG9yaWdpbik7XG4gICAgICAgIHdpbmRvdy5jbG9zZSgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pO1xuICAgIH1cbiAgfVxuXG4gIHVybC5zZWFyY2hQYXJhbXMuZGVsZXRlKFwiY29tcGxldGVcIik7IC8vIERvIHdlIGhhdmUgdG8gcmVtb3ZlIHRoZSBgY29kZWAgYW5kIGBzdGF0ZWAgcGFyYW1zIGZyb20gdGhlIFVSTD9cblxuICBjb25zdCBoYXNTdGF0ZSA9IHBhcmFtcy5oYXMoXCJzdGF0ZVwiKTtcblxuICBpZiAoaXNCcm93c2VyKCkgJiYgbGliXzEuZ2V0UGF0aChlbnYsIFwib3B0aW9ucy5yZXBsYWNlQnJvd3Nlckhpc3RvcnlcIikgJiYgKGNvZGUgfHwgaGFzU3RhdGUpKSB7XG4gICAgLy8gYGNvZGVgIGlzIHRoZSBmbGFnIHRoYXQgdGVsbCB1cyB0byByZXF1ZXN0IGFuIGFjY2VzcyB0b2tlbi5cbiAgICAvLyBXZSBoYXZlIHRvIHJlbW92ZSBpdCwgb3RoZXJ3aXNlIHRoZSBwYWdlIHdpbGwgYXV0aG9yaXplIG9uXG4gICAgLy8gZXZlcnkgbG9hZCFcbiAgICBpZiAoY29kZSkge1xuICAgICAgcGFyYW1zLmRlbGV0ZShcImNvZGVcIik7XG4gICAgICBkZWJ1ZyhcIlJlbW92ZWQgY29kZSBwYXJhbWV0ZXIgZnJvbSB0aGUgdXJsLlwiKTtcbiAgICB9IC8vIElmIHdlIGhhdmUgYGZ1bGxTZXNzaW9uU3RvcmFnZVN1cHBvcnRgIGl0IG1lYW5zIHdlIG5vIGxvbmdlclxuICAgIC8vIG5lZWQgdGhlIGBzdGF0ZWAga2V5LiBJdCB3aWxsIGJlIHN0b3JlZCB0byBhIHdlbGwga25vd1xuICAgIC8vIGxvY2F0aW9uIC0gc2Vzc2lvblN0b3JhZ2VbU01BUlRfS0VZXS4gSG93ZXZlciwgbm9cbiAgICAvLyBmdWxsU2Vzc2lvblN0b3JhZ2VTdXBwb3J0IG1lYW5zIHRoYXQgdGhpcyBcIndlbGwga25vdyBsb2NhdGlvblwiXG4gICAgLy8gbWlnaHQgYmUgc2hhcmVkIGJldHdlZW4gd2luZG93cyBhbmQgdGFicy4gSW4gdGhpcyBjYXNlIHdlXG4gICAgLy8gTVVTVCBrZWVwIHRoZSBgc3RhdGVgIHVybCBwYXJhbWV0ZXIuXG5cblxuICAgIGlmIChoYXNTdGF0ZSAmJiBmdWxsU2Vzc2lvblN0b3JhZ2VTdXBwb3J0KSB7XG4gICAgICBwYXJhbXMuZGVsZXRlKFwic3RhdGVcIik7XG4gICAgICBkZWJ1ZyhcIlJlbW92ZWQgc3RhdGUgcGFyYW1ldGVyIGZyb20gdGhlIHVybC5cIik7XG4gICAgfSAvLyBJZiB0aGUgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSByZXBsYWNlU3RhdGUgbWV0aG9kIGZvciB0aGVcbiAgICAvLyBIaXN0b3J5IFdlYiBBUEksIHRoZSBcImNvZGVcIiBwYXJhbWV0ZXIgY2Fubm90IGJlIHJlbW92ZWQuIEFzIGFcbiAgICAvLyBjb25zZXF1ZW5jZSwgdGhlIHBhZ2Ugd2lsbCAocmUpYXV0aG9yaXplIG9uIGV2ZXJ5IGxvYWQuIFRoZVxuICAgIC8vIHdvcmthcm91bmQgaXMgdG8gcmVsb2FkIHRoZSBwYWdlIHRvIG5ldyBsb2NhdGlvbiB3aXRob3V0IHRob3NlXG4gICAgLy8gcGFyYW1ldGVycy4gSWYgdGhhdCBpcyBub3QgYWNjZXB0YWJsZSByZXBsYWNlQnJvd3Nlckhpc3RvcnlcbiAgICAvLyBzaG91bGQgYmUgc2V0IHRvIGZhbHNlLlxuXG5cbiAgICBpZiAod2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKSB7XG4gICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sIFwiXCIsIHVybC5ocmVmKTtcbiAgICB9XG4gIH0gLy8gSWYgdGhlIHN0YXRlIGRvZXMgbm90IGV4aXN0LCBpdCBtZWFucyB0aGUgcGFnZSBoYXMgYmVlbiBsb2FkZWQgZGlyZWN0bHkuXG5cblxuICBpZiAoIXN0YXRlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gc3RhdGUgZm91bmQhIFBsZWFzZSAocmUpbGF1bmNoIHRoZSBhcHAuXCIpO1xuICB9IC8vIEFzc3VtZSB0aGUgY2xpZW50IGhhcyBhbHJlYWR5IGNvbXBsZXRlZCBhIHRva2VuIGV4Y2hhbmdlIHdoZW5cbiAgLy8gdGhlcmUgaXMgbm8gY29kZSAoYnV0IHdlIGhhdmUgYSBzdGF0ZSkgb3IgYWNjZXNzIHRva2VuIGlzIGZvdW5kIGluIHN0YXRlXG5cblxuICBjb25zdCBhdXRob3JpemVkID0gIWNvZGUgfHwgKChfYSA9IHN0YXRlLnRva2VuUmVzcG9uc2UpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hY2Nlc3NfdG9rZW4pOyAvLyBJZiB3ZSBhcmUgYXV0aG9yaXplZCBhbHJlYWR5LCB0aGVuIHRoaXMgaXMganVzdCBhIHJlbG9hZC5cbiAgLy8gT3RoZXJ3aXNlLCB3ZSBoYXZlIHRvIGNvbXBsZXRlIHRoZSBjb2RlIGZsb3dcblxuICBpZiAoIWF1dGhvcml6ZWQgJiYgc3RhdGUudG9rZW5VcmkpIHtcbiAgICBpZiAoIWNvZGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIidjb2RlJyB1cmwgcGFyYW1ldGVyIGlzIHJlcXVpcmVkXCIpO1xuICAgIH1cblxuICAgIGRlYnVnKFwiUHJlcGFyaW5nIHRvIGV4Y2hhbmdlIHRoZSBjb2RlIGZvciBhY2Nlc3MgdG9rZW4uLi5cIik7XG4gICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSBidWlsZFRva2VuUmVxdWVzdChlbnYsIGNvZGUsIHN0YXRlKTtcbiAgICBkZWJ1ZyhcIlRva2VuIHJlcXVlc3Qgb3B0aW9uczogJU9cIiwgcmVxdWVzdE9wdGlvbnMpOyAvLyBUaGUgRUhSIGF1dGhvcml6YXRpb24gc2VydmVyIFNIQUxMIHJldHVybiBhIEpTT04gc3RydWN0dXJlIHRoYXRcbiAgICAvLyBpbmNsdWRlcyBhbiBhY2Nlc3MgdG9rZW4gb3IgYSBtZXNzYWdlIGluZGljYXRpbmcgdGhhdCB0aGVcbiAgICAvLyBhdXRob3JpemF0aW9uIHJlcXVlc3QgaGFzIGJlZW4gZGVuaWVkLlxuXG4gICAgY29uc3QgdG9rZW5SZXNwb25zZSA9IGF3YWl0IGxpYl8xLnJlcXVlc3Qoc3RhdGUudG9rZW5VcmksIHJlcXVlc3RPcHRpb25zKTtcbiAgICBkZWJ1ZyhcIlRva2VuIHJlc3BvbnNlOiAlT1wiLCB0b2tlblJlc3BvbnNlKTtcblxuICAgIGlmICghdG9rZW5SZXNwb25zZS5hY2Nlc3NfdG9rZW4pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBvYnRhaW4gYWNjZXNzIHRva2VuLlwiKTtcbiAgICB9IC8vIE5vdyB3ZSBuZWVkIHRvIGRldGVybWluZSB3aGVuIGlzIHRoaXMgYXV0aG9yaXphdGlvbiBnb2luZyB0byBleHBpcmVcblxuXG4gICAgc3RhdGUuZXhwaXJlc0F0ID0gbGliXzEuZ2V0QWNjZXNzVG9rZW5FeHBpcmF0aW9uKHRva2VuUmVzcG9uc2UsIGVudik7IC8vIHNhdmUgdGhlIHRva2VuUmVzcG9uc2Ugc28gdGhhdCB3ZSBkb24ndCBoYXZlIHRvIHJlLWF1dGhvcml6ZSBvblxuICAgIC8vIGV2ZXJ5IHBhZ2UgcmVsb2FkXG5cbiAgICBzdGF0ZSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUpLCB7XG4gICAgICB0b2tlblJlc3BvbnNlXG4gICAgfSk7XG4gICAgYXdhaXQgU3RvcmFnZS5zZXQoa2V5LCBzdGF0ZSk7XG4gICAgZGVidWcoXCJBdXRob3JpemF0aW9uIHN1Y2Nlc3NmdWwhXCIpO1xuICB9IGVsc2Uge1xuICAgIGRlYnVnKCgoX2IgPSBzdGF0ZS50b2tlblJlc3BvbnNlKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuYWNjZXNzX3Rva2VuKSA/IFwiQWxyZWFkeSBhdXRob3JpemVkXCIgOiBcIk5vIGF1dGhvcml6YXRpb24gbmVlZGVkXCIpO1xuICB9XG5cbiAgaWYgKGZ1bGxTZXNzaW9uU3RvcmFnZVN1cHBvcnQpIHtcbiAgICBhd2FpdCBTdG9yYWdlLnNldChzZXR0aW5nc18xLlNNQVJUX0tFWSwga2V5KTtcbiAgfVxuXG4gIGNvbnN0IGNsaWVudCA9IG5ldyBDbGllbnRfMS5kZWZhdWx0KGVudiwgc3RhdGUpO1xuICBkZWJ1ZyhcIkNyZWF0ZWQgY2xpZW50IGluc3RhbmNlOiAlT1wiLCBjbGllbnQpO1xuICByZXR1cm4gY2xpZW50O1xufVxuXG5leHBvcnRzLmNvbXBsZXRlQXV0aCA9IGNvbXBsZXRlQXV0aDtcbi8qKlxuICogQnVpbGRzIHRoZSB0b2tlbiByZXF1ZXN0IG9wdGlvbnMuIERvZXMgbm90IG1ha2UgdGhlIHJlcXVlc3QsIGp1c3RcbiAqIGNyZWF0ZXMgaXQncyBjb25maWd1cmF0aW9uIGFuZCByZXR1cm5zIGl0IGluIGEgUHJvbWlzZS5cbiAqL1xuXG5mdW5jdGlvbiBidWlsZFRva2VuUmVxdWVzdChlbnYsIGNvZGUsIHN0YXRlKSB7XG4gIGNvbnN0IHtcbiAgICByZWRpcmVjdFVyaSxcbiAgICBjbGllbnRTZWNyZXQsXG4gICAgdG9rZW5VcmksXG4gICAgY2xpZW50SWRcbiAgfSA9IHN0YXRlO1xuXG4gIGlmICghcmVkaXJlY3RVcmkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIHN0YXRlLnJlZGlyZWN0VXJpXCIpO1xuICB9XG5cbiAgaWYgKCF0b2tlblVyaSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1pc3Npbmcgc3RhdGUudG9rZW5VcmlcIik7XG4gIH1cblxuICBpZiAoIWNsaWVudElkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBzdGF0ZS5jbGllbnRJZFwiKTtcbiAgfVxuXG4gIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIlxuICAgIH0sXG4gICAgYm9keTogYGNvZGU9JHtjb2RlfSZncmFudF90eXBlPWF1dGhvcml6YXRpb25fY29kZSZyZWRpcmVjdF91cmk9JHtlbmNvZGVVUklDb21wb25lbnQocmVkaXJlY3RVcmkpfWBcbiAgfTsgLy8gRm9yIHB1YmxpYyBhcHBzLCBhdXRoZW50aWNhdGlvbiBpcyBub3QgcG9zc2libGUgKGFuZCB0aHVzIG5vdCByZXF1aXJlZCksXG4gIC8vIHNpbmNlIGEgY2xpZW50IHdpdGggbm8gc2VjcmV0IGNhbm5vdCBwcm92ZSBpdHMgaWRlbnRpdHkgd2hlbiBpdCBpc3N1ZXMgYVxuICAvLyBjYWxsLiAoVGhlIGVuZC10by1lbmQgc3lzdGVtIGNhbiBzdGlsbCBiZSBzZWN1cmUgYmVjYXVzZSB0aGUgY2xpZW50IGNvbWVzXG4gIC8vIGZyb20gYSBrbm93biwgaHR0cHMgcHJvdGVjdGVkIGVuZHBvaW50IHNwZWNpZmllZCBhbmQgZW5mb3JjZWQgYnkgdGhlXG4gIC8vIHJlZGlyZWN0IHVyaS4pIEZvciBjb25maWRlbnRpYWwgYXBwcywgYW4gQXV0aG9yaXphdGlvbiBoZWFkZXIgdXNpbmcgSFRUUFxuICAvLyBCYXNpYyBhdXRoZW50aWNhdGlvbiBpcyByZXF1aXJlZCwgd2hlcmUgdGhlIHVzZXJuYW1lIGlzIHRoZSBhcHDigJlzXG4gIC8vIGNsaWVudF9pZCBhbmQgdGhlIHBhc3N3b3JkIGlzIHRoZSBhcHDigJlzIGNsaWVudF9zZWNyZXQgKHNlZSBleGFtcGxlKS5cblxuICBpZiAoY2xpZW50U2VjcmV0KSB7XG4gICAgcmVxdWVzdE9wdGlvbnMuaGVhZGVycy5BdXRob3JpemF0aW9uID0gXCJCYXNpYyBcIiArIGVudi5idG9hKGNsaWVudElkICsgXCI6XCIgKyBjbGllbnRTZWNyZXQpO1xuICAgIGRlYnVnKFwiVXNpbmcgc3RhdGUuY2xpZW50U2VjcmV0IHRvIGNvbnN0cnVjdCB0aGUgYXV0aG9yaXphdGlvbiBoZWFkZXI6ICVzXCIsIHJlcXVlc3RPcHRpb25zLmhlYWRlcnMuQXV0aG9yaXphdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgZGVidWcoXCJObyBjbGllbnRTZWNyZXQgZm91bmQgaW4gc3RhdGUuIEFkZGluZyB0aGUgY2xpZW50SWQgdG8gdGhlIFBPU1QgYm9keVwiKTtcbiAgICByZXF1ZXN0T3B0aW9ucy5ib2R5ICs9IGAmY2xpZW50X2lkPSR7ZW5jb2RlVVJJQ29tcG9uZW50KGNsaWVudElkKX1gO1xuICB9XG5cbiAgcmV0dXJuIHJlcXVlc3RPcHRpb25zO1xufVxuXG5leHBvcnRzLmJ1aWxkVG9rZW5SZXF1ZXN0ID0gYnVpbGRUb2tlblJlcXVlc3Q7XG4vKipcbiAqIEBwYXJhbSBlbnZcbiAqIEBwYXJhbSBbb25TdWNjZXNzXVxuICogQHBhcmFtIFtvbkVycm9yXVxuICovXG5cbmFzeW5jIGZ1bmN0aW9uIHJlYWR5KGVudiwgb25TdWNjZXNzLCBvbkVycm9yKSB7XG4gIGxldCB0YXNrID0gY29tcGxldGVBdXRoKGVudik7XG5cbiAgaWYgKG9uU3VjY2Vzcykge1xuICAgIHRhc2sgPSB0YXNrLnRoZW4ob25TdWNjZXNzKTtcbiAgfVxuXG4gIGlmIChvbkVycm9yKSB7XG4gICAgdGFzayA9IHRhc2suY2F0Y2gob25FcnJvcik7XG4gIH1cblxuICByZXR1cm4gdGFzaztcbn1cblxuZXhwb3J0cy5yZWFkeSA9IHJlYWR5O1xuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNhbiBiZSB1c2VkIHdoZW4geW91IHdhbnQgdG8gaGFuZGxlIGV2ZXJ5dGhpbmcgaW4gb25lIHBhZ2VcbiAqIChubyBsYXVuY2ggZW5kcG9pbnQgbmVlZGVkKS4gWW91IGNhbiB0aGluayBvZiBpdCBhcyBpZiBpdCBkb2VzOlxuICogYGBganNcbiAqIGF1dGhvcml6ZShvcHRpb25zKS50aGVuKHJlYWR5KVxuICogYGBgXG4gKlxuICogKipCZSBjYXJlZnVsIHdpdGggaW5pdCgpISoqIFRoZXJlIGFyZSBzb21lIGRldGFpbHMgeW91IG5lZWQgdG8gYmUgYXdhcmUgb2Y6XG4gKlxuICogMS4gSXQgd2lsbCBvbmx5IHdvcmsgaWYgeW91ciBsYXVuY2hfdXJpIGlzIHRoZSBzYW1lIGFzIHlvdXIgcmVkaXJlY3RfdXJpLlxuICogICAgV2hpbGUgdGhpcyBzaG91bGQgYmUgdmFsaWQsIHdlIGNhbuKAmXQgcHJvbWlzZSB0aGF0IGV2ZXJ5IEVIUiB3aWxsIGFsbG93IHlvdVxuICogICAgdG8gcmVnaXN0ZXIgY2xpZW50IHdpdGggc3VjaCBzZXR0aW5ncy5cbiAqIDIuIEludGVybmFsbHksIGBpbml0KClgIHdpbGwgYmUgY2FsbGVkIHR3aWNlLiBGaXJzdCBpdCB3aWxsIHJlZGlyZWN0IHRvIHRoZVxuICogICAgRUhSLCB0aGVuIHRoZSBFSFIgd2lsbCByZWRpcmVjdCBiYWNrIHRvIHRoZSBwYWdlIHdoZXJlIGluaXQoKSB3aWxsIGJlXG4gKiAgICBjYWxsZWQgYWdhaW4gdG8gY29tcGxldGUgdGhlIGF1dGhvcml6YXRpb24uIFRoaXMgaXMgZ2VuZXJhbGx5IGZpbmUsXG4gKiAgICBiZWNhdXNlIHRoZSByZXR1cm5lZCBwcm9taXNlIHdpbGwgb25seSBiZSByZXNvbHZlZCBvbmNlLCBhZnRlciB0aGUgc2Vjb25kXG4gKiAgICBleGVjdXRpb24sIGJ1dCBwbGVhc2UgYWxzbyBjb25zaWRlciB0aGUgZm9sbG93aW5nOlxuICogICAgLSBZb3Ugc2hvdWxkIHdyYXAgYWxsIHlvdXIgYXBw4oCZcyBjb2RlIGluIGEgZnVuY3Rpb24gdGhhdCBpcyBvbmx5IGV4ZWN1dGVkXG4gKiAgICAgIGFmdGVyIGBpbml0KClgIHJlc29sdmVzIVxuICogICAgLSBTaW5jZSB0aGUgcGFnZSB3aWxsIGJlIGxvYWRlZCB0d2ljZSwgeW91IG11c3QgYmUgY2FyZWZ1bCBpZiB5b3VyIGNvZGVcbiAqICAgICAgaGFzIGdsb2JhbCBzaWRlIGVmZmVjdHMgdGhhdCBjYW4gcGVyc2lzdCBiZXR3ZWVuIHBhZ2UgcmVsb2Fkc1xuICogICAgICAoZm9yIGV4YW1wbGUgd3JpdGluZyB0byBsb2NhbFN0b3JhZ2UpLlxuICogMy4gRm9yIHN0YW5kYWxvbmUgbGF1bmNoLCBvbmx5IHVzZSBpbml0IGluIGNvbWJpbmF0aW9uIHdpdGggb2ZmbGluZV9hY2Nlc3NcbiAqICAgIHNjb3BlLiBPbmNlIHRoZSBhY2Nlc3NfdG9rZW4gZXhwaXJlcywgaWYgeW91IGRvbuKAmXQgaGF2ZSBhIHJlZnJlc2hfdG9rZW5cbiAqICAgIHRoZXJlIGlzIG5vIHdheSB0byByZS1hdXRob3JpemUgcHJvcGVybHkuIFdlIGRldGVjdCB0aGF0IGFuZCBkZWxldGUgdGhlXG4gKiAgICBleHBpcmVkIGFjY2VzcyB0b2tlbiwgYnV0IGl0IHN0aWxsIG1lYW5zIHRoYXQgdGhlIHVzZXIgd2lsbCBoYXZlIHRvXG4gKiAgICByZWZyZXNoIHRoZSBwYWdlIHR3aWNlIHRvIHJlLWF1dGhvcml6ZS5cbiAqIEBwYXJhbSBlbnYgVGhlIGFkYXB0ZXJcbiAqIEBwYXJhbSBvcHRpb25zIFRoZSBhdXRob3JpemUgb3B0aW9uc1xuICovXG5cbmFzeW5jIGZ1bmN0aW9uIGluaXQoZW52LCBvcHRpb25zKSB7XG4gIGNvbnN0IHVybCA9IGVudi5nZXRVcmwoKTtcbiAgY29uc3QgY29kZSA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwiY29kZVwiKTtcbiAgY29uc3Qgc3RhdGUgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInN0YXRlXCIpOyAvLyBpZiBgY29kZWAgYW5kIGBzdGF0ZWAgcGFyYW1zIGFyZSBwcmVzZW50IHdlIG5lZWQgdG8gY29tcGxldGUgdGhlIGF1dGggZmxvd1xuXG4gIGlmIChjb2RlICYmIHN0YXRlKSB7XG4gICAgcmV0dXJuIGNvbXBsZXRlQXV0aChlbnYpO1xuICB9IC8vIENoZWNrIGZvciBleGlzdGluZyBjbGllbnQgc3RhdGUuIElmIHN0YXRlIGlzIGZvdW5kLCBpdCBtZWFucyBhIGNsaWVudFxuICAvLyBpbnN0YW5jZSBoYXZlIGFscmVhZHkgYmVlbiBjcmVhdGVkIGluIHRoaXMgc2Vzc2lvbiBhbmQgd2Ugc2hvdWxkIHRyeSB0b1xuICAvLyBcInJldml2ZVwiIGl0LlxuXG5cbiAgY29uc3Qgc3RvcmFnZSA9IGVudi5nZXRTdG9yYWdlKCk7XG4gIGNvbnN0IGtleSA9IHN0YXRlIHx8IChhd2FpdCBzdG9yYWdlLmdldChzZXR0aW5nc18xLlNNQVJUX0tFWSkpO1xuICBjb25zdCBjYWNoZWQgPSBhd2FpdCBzdG9yYWdlLmdldChrZXkpO1xuXG4gIGlmIChjYWNoZWQpIHtcbiAgICByZXR1cm4gbmV3IENsaWVudF8xLmRlZmF1bHQoZW52LCBjYWNoZWQpO1xuICB9IC8vIE90aGVyd2lzZSB0cnkgdG8gbGF1bmNoXG5cblxuICByZXR1cm4gYXV0aG9yaXplKGVudiwgb3B0aW9ucykudGhlbigoKSA9PiB7XG4gICAgLy8gYGluaXRgIHByb21pc2VzIGEgQ2xpZW50IGJ1dCB0aGF0IGNhbm5vdCBoYXBwZW4gaW4gdGhpcyBjYXNlLiBUaGVcbiAgICAvLyBicm93c2VyIHdpbGwgYmUgcmVkaXJlY3RlZCAodW5sb2FkIHRoZSBwYWdlIGFuZCBiZSByZWRpcmVjdGVkIGJhY2tcbiAgICAvLyB0byBpdCBsYXRlciBhbmQgdGhlIHNhbWUgaW5pdCBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBhZ2FpbikuIE9uXG4gICAgLy8gc3VjY2VzcywgYXV0aG9yaXplIHdpbGwgcmVzb2x2ZSB3aXRoIHRoZSByZWRpcmVjdCB1cmwgYnV0IHdlIGRvbid0XG4gICAgLy8gd2FudCB0byByZXR1cm4gdGhhdCBmcm9tIHRoaXMgcHJvbWlzZSBjaGFpbiBiZWNhdXNlIGl0IGlzIG5vdCBhXG4gICAgLy8gQ2xpZW50IGluc3RhbmNlLiBBdCB0aGUgc2FtZSB0aW1lLCBpZiBhdXRob3JpemUgZmFpbHMsIHdlIGRvIHdhbnQgdG9cbiAgICAvLyBwYXNzIHRoZSBlcnJvciB0byB0aG9zZSB3YWl0aW5nIGZvciBhIGNsaWVudCBpbnN0YW5jZS5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pO1xuICB9KTtcbn1cblxuZXhwb3J0cy5pbml0ID0gaW5pdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuY2xhc3MgU3RvcmFnZSB7XG4gIC8qKlxuICAgKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YC4gUmV0dXJucyBhIHByb21pc2UgdGhhdCB3aWxsIGJlIHJlc29sdmVkXG4gICAqIHdpdGggdGhhdCB2YWx1ZSAob3IgdW5kZWZpbmVkIGZvciBtaXNzaW5nIGtleXMpLlxuICAgKi9cbiAgYXN5bmMgZ2V0KGtleSkge1xuICAgIGNvbnN0IHZhbHVlID0gc2Vzc2lvblN0b3JhZ2Vba2V5XTtcblxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UodmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIC8qKlxuICAgKiBTZXRzIHRoZSBgdmFsdWVgIG9uIGBrZXlgIGFuZCByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHdpbGwgYmUgcmVzb2x2ZWRcbiAgICogd2l0aCB0aGUgdmFsdWUgdGhhdCB3YXMgc2V0LlxuICAgKi9cblxuXG4gIGFzeW5jIHNldChrZXksIHZhbHVlKSB7XG4gICAgc2Vzc2lvblN0b3JhZ2Vba2V5XSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgLyoqXG4gICAqIERlbGV0ZXMgdGhlIHZhbHVlIGF0IGBrZXlgLiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHdpbGwgYmUgcmVzb2x2ZWRcbiAgICogd2l0aCB0cnVlIGlmIHRoZSBrZXkgd2FzIGRlbGV0ZWQgb3Igd2l0aCBmYWxzZSBpZiBpdCB3YXMgbm90IChlZy4gaWZcbiAgICogZGlkIG5vdCBleGlzdCkuXG4gICAqL1xuXG5cbiAgYXN5bmMgdW5zZXQoa2V5KSB7XG4gICAgaWYgKGtleSBpbiBzZXNzaW9uU3RvcmFnZSkge1xuICAgICAgZGVsZXRlIHNlc3Npb25TdG9yYWdlW2tleV07XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBTdG9yYWdlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pOyAvLyBUaGlzIG1hcCBjb250YWlucyByZXVzYWJsZSBkZWJ1ZyBtZXNzYWdlcyAob25seSB0aG9zZSB1c2VkIGluIG11bHRpcGxlIHBsYWNlcylcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBleHBpcmVkOiBcIlNlc3Npb24gZXhwaXJlZCEgUGxlYXNlIHJlLWxhdW5jaCB0aGUgYXBwXCIsXG4gIG5vU2NvcGVGb3JJZDogXCJUcnlpbmcgdG8gZ2V0IHRoZSBJRCBvZiB0aGUgc2VsZWN0ZWQgJXMuIFBsZWFzZSBhZGQgJ2xhdW5jaCcgb3IgJ2xhdW5jaC8lcycgdG8gdGhlIHJlcXVlc3RlZCBzY29wZXMgYW5kIHRyeSBhZ2Fpbi5cIixcbiAgbm9JZk5vQXV0aDogXCJZb3UgYXJlIHRyeWluZyB0byBnZXQgJXMgYnV0IHRoZSBhcHAgaXMgbm90IGF1dGhvcml6ZWQgeWV0LlwiLFxuICBub0ZyZWVDb250ZXh0OiBcIlBsZWFzZSBkb24ndCB1c2Ugb3BlbiBmaGlyIHNlcnZlcnMgaWYgeW91IG5lZWQgdG8gYWNjZXNzIGxhdW5jaCBjb250ZXh0IGl0ZW1zIGxpa2UgdGhlICVTLlwiXG59OyIsIi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG4vKipcbiAqIFRoaXMgaXMgdGhlIHdlYiBicm93c2VyIGltcGxlbWVudGF0aW9uIG9mIGBkZWJ1ZygpYC5cbiAqL1xuXG5leHBvcnRzLmZvcm1hdEFyZ3MgPSBmb3JtYXRBcmdzO1xuZXhwb3J0cy5zYXZlID0gc2F2ZTtcbmV4cG9ydHMubG9hZCA9IGxvYWQ7XG5leHBvcnRzLnVzZUNvbG9ycyA9IHVzZUNvbG9ycztcbmV4cG9ydHMuc3RvcmFnZSA9IGxvY2Fsc3RvcmFnZSgpO1xuXG4vKipcbiAqIENvbG9ycy5cbiAqL1xuXG5leHBvcnRzLmNvbG9ycyA9IFtcblx0JyMwMDAwQ0MnLFxuXHQnIzAwMDBGRicsXG5cdCcjMDAzM0NDJyxcblx0JyMwMDMzRkYnLFxuXHQnIzAwNjZDQycsXG5cdCcjMDA2NkZGJyxcblx0JyMwMDk5Q0MnLFxuXHQnIzAwOTlGRicsXG5cdCcjMDBDQzAwJyxcblx0JyMwMENDMzMnLFxuXHQnIzAwQ0M2NicsXG5cdCcjMDBDQzk5Jyxcblx0JyMwMENDQ0MnLFxuXHQnIzAwQ0NGRicsXG5cdCcjMzMwMENDJyxcblx0JyMzMzAwRkYnLFxuXHQnIzMzMzNDQycsXG5cdCcjMzMzM0ZGJyxcblx0JyMzMzY2Q0MnLFxuXHQnIzMzNjZGRicsXG5cdCcjMzM5OUNDJyxcblx0JyMzMzk5RkYnLFxuXHQnIzMzQ0MwMCcsXG5cdCcjMzNDQzMzJyxcblx0JyMzM0NDNjYnLFxuXHQnIzMzQ0M5OScsXG5cdCcjMzNDQ0NDJyxcblx0JyMzM0NDRkYnLFxuXHQnIzY2MDBDQycsXG5cdCcjNjYwMEZGJyxcblx0JyM2NjMzQ0MnLFxuXHQnIzY2MzNGRicsXG5cdCcjNjZDQzAwJyxcblx0JyM2NkNDMzMnLFxuXHQnIzk5MDBDQycsXG5cdCcjOTkwMEZGJyxcblx0JyM5OTMzQ0MnLFxuXHQnIzk5MzNGRicsXG5cdCcjOTlDQzAwJyxcblx0JyM5OUNDMzMnLFxuXHQnI0NDMDAwMCcsXG5cdCcjQ0MwMDMzJyxcblx0JyNDQzAwNjYnLFxuXHQnI0NDMDA5OScsXG5cdCcjQ0MwMENDJyxcblx0JyNDQzAwRkYnLFxuXHQnI0NDMzMwMCcsXG5cdCcjQ0MzMzMzJyxcblx0JyNDQzMzNjYnLFxuXHQnI0NDMzM5OScsXG5cdCcjQ0MzM0NDJyxcblx0JyNDQzMzRkYnLFxuXHQnI0NDNjYwMCcsXG5cdCcjQ0M2NjMzJyxcblx0JyNDQzk5MDAnLFxuXHQnI0NDOTkzMycsXG5cdCcjQ0NDQzAwJyxcblx0JyNDQ0NDMzMnLFxuXHQnI0ZGMDAwMCcsXG5cdCcjRkYwMDMzJyxcblx0JyNGRjAwNjYnLFxuXHQnI0ZGMDA5OScsXG5cdCcjRkYwMENDJyxcblx0JyNGRjAwRkYnLFxuXHQnI0ZGMzMwMCcsXG5cdCcjRkYzMzMzJyxcblx0JyNGRjMzNjYnLFxuXHQnI0ZGMzM5OScsXG5cdCcjRkYzM0NDJyxcblx0JyNGRjMzRkYnLFxuXHQnI0ZGNjYwMCcsXG5cdCcjRkY2NjMzJyxcblx0JyNGRjk5MDAnLFxuXHQnI0ZGOTkzMycsXG5cdCcjRkZDQzAwJyxcblx0JyNGRkNDMzMnXG5dO1xuXG4vKipcbiAqIEN1cnJlbnRseSBvbmx5IFdlYktpdC1iYXNlZCBXZWIgSW5zcGVjdG9ycywgRmlyZWZveCA+PSB2MzEsXG4gKiBhbmQgdGhlIEZpcmVidWcgZXh0ZW5zaW9uIChhbnkgRmlyZWZveCB2ZXJzaW9uKSBhcmUga25vd25cbiAqIHRvIHN1cHBvcnQgXCIlY1wiIENTUyBjdXN0b21pemF0aW9ucy5cbiAqXG4gKiBUT0RPOiBhZGQgYSBgbG9jYWxTdG9yYWdlYCB2YXJpYWJsZSB0byBleHBsaWNpdGx5IGVuYWJsZS9kaXNhYmxlIGNvbG9yc1xuICovXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG5mdW5jdGlvbiB1c2VDb2xvcnMoKSB7XG5cdC8vIE5COiBJbiBhbiBFbGVjdHJvbiBwcmVsb2FkIHNjcmlwdCwgZG9jdW1lbnQgd2lsbCBiZSBkZWZpbmVkIGJ1dCBub3QgZnVsbHlcblx0Ly8gaW5pdGlhbGl6ZWQuIFNpbmNlIHdlIGtub3cgd2UncmUgaW4gQ2hyb21lLCB3ZSdsbCBqdXN0IGRldGVjdCB0aGlzIGNhc2Vcblx0Ly8gZXhwbGljaXRseVxuXHRpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnByb2Nlc3MgJiYgKHdpbmRvdy5wcm9jZXNzLnR5cGUgPT09ICdyZW5kZXJlcicgfHwgd2luZG93LnByb2Nlc3MuX19ud2pzKSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0Ly8gSW50ZXJuZXQgRXhwbG9yZXIgYW5kIEVkZ2UgZG8gbm90IHN1cHBvcnQgY29sb3JzLlxuXHRpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goLyhlZGdlfHRyaWRlbnQpXFwvKFxcZCspLykpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvLyBJcyB3ZWJraXQ/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE2NDU5NjA2LzM3Njc3M1xuXHQvLyBkb2N1bWVudCBpcyB1bmRlZmluZWQgaW4gcmVhY3QtbmF0aXZlOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QtbmF0aXZlL3B1bGwvMTYzMlxuXHRyZXR1cm4gKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuV2Via2l0QXBwZWFyYW5jZSkgfHxcblx0XHQvLyBJcyBmaXJlYnVnPyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zOTgxMjAvMzc2NzczXG5cdFx0KHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5jb25zb2xlICYmICh3aW5kb3cuY29uc29sZS5maXJlYnVnIHx8ICh3aW5kb3cuY29uc29sZS5leGNlcHRpb24gJiYgd2luZG93LmNvbnNvbGUudGFibGUpKSkgfHxcblx0XHQvLyBJcyBmaXJlZm94ID49IHYzMT9cblx0XHQvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1Rvb2xzL1dlYl9Db25zb2xlI1N0eWxpbmdfbWVzc2FnZXNcblx0XHQodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2ZpcmVmb3hcXC8oXFxkKykvKSAmJiBwYXJzZUludChSZWdFeHAuJDEsIDEwKSA+PSAzMSkgfHxcblx0XHQvLyBEb3VibGUgY2hlY2sgd2Via2l0IGluIHVzZXJBZ2VudCBqdXN0IGluIGNhc2Ugd2UgYXJlIGluIGEgd29ya2VyXG5cdFx0KHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9hcHBsZXdlYmtpdFxcLyhcXGQrKS8pKTtcbn1cblxuLyoqXG4gKiBDb2xvcml6ZSBsb2cgYXJndW1lbnRzIGlmIGVuYWJsZWQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBmb3JtYXRBcmdzKGFyZ3MpIHtcblx0YXJnc1swXSA9ICh0aGlzLnVzZUNvbG9ycyA/ICclYycgOiAnJykgK1xuXHRcdHRoaXMubmFtZXNwYWNlICtcblx0XHQodGhpcy51c2VDb2xvcnMgPyAnICVjJyA6ICcgJykgK1xuXHRcdGFyZ3NbMF0gK1xuXHRcdCh0aGlzLnVzZUNvbG9ycyA/ICclYyAnIDogJyAnKSArXG5cdFx0JysnICsgbW9kdWxlLmV4cG9ydHMuaHVtYW5pemUodGhpcy5kaWZmKTtcblxuXHRpZiAoIXRoaXMudXNlQ29sb3JzKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgYyA9ICdjb2xvcjogJyArIHRoaXMuY29sb3I7XG5cdGFyZ3Muc3BsaWNlKDEsIDAsIGMsICdjb2xvcjogaW5oZXJpdCcpO1xuXG5cdC8vIFRoZSBmaW5hbCBcIiVjXCIgaXMgc29tZXdoYXQgdHJpY2t5LCBiZWNhdXNlIHRoZXJlIGNvdWxkIGJlIG90aGVyXG5cdC8vIGFyZ3VtZW50cyBwYXNzZWQgZWl0aGVyIGJlZm9yZSBvciBhZnRlciB0aGUgJWMsIHNvIHdlIG5lZWQgdG9cblx0Ly8gZmlndXJlIG91dCB0aGUgY29ycmVjdCBpbmRleCB0byBpbnNlcnQgdGhlIENTUyBpbnRvXG5cdGxldCBpbmRleCA9IDA7XG5cdGxldCBsYXN0QyA9IDA7XG5cdGFyZ3NbMF0ucmVwbGFjZSgvJVthLXpBLVolXS9nLCBtYXRjaCA9PiB7XG5cdFx0aWYgKG1hdGNoID09PSAnJSUnKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGluZGV4Kys7XG5cdFx0aWYgKG1hdGNoID09PSAnJWMnKSB7XG5cdFx0XHQvLyBXZSBvbmx5IGFyZSBpbnRlcmVzdGVkIGluIHRoZSAqbGFzdCogJWNcblx0XHRcdC8vICh0aGUgdXNlciBtYXkgaGF2ZSBwcm92aWRlZCB0aGVpciBvd24pXG5cdFx0XHRsYXN0QyA9IGluZGV4O1xuXHRcdH1cblx0fSk7XG5cblx0YXJncy5zcGxpY2UobGFzdEMsIDAsIGMpO1xufVxuXG4vKipcbiAqIEludm9rZXMgYGNvbnNvbGUuZGVidWcoKWAgd2hlbiBhdmFpbGFibGUuXG4gKiBOby1vcCB3aGVuIGBjb25zb2xlLmRlYnVnYCBpcyBub3QgYSBcImZ1bmN0aW9uXCIuXG4gKiBJZiBgY29uc29sZS5kZWJ1Z2AgaXMgbm90IGF2YWlsYWJsZSwgZmFsbHMgYmFja1xuICogdG8gYGNvbnNvbGUubG9nYC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5leHBvcnRzLmxvZyA9IGNvbnNvbGUuZGVidWcgfHwgY29uc29sZS5sb2cgfHwgKCgpID0+IHt9KTtcblxuLyoqXG4gKiBTYXZlIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNhdmUobmFtZXNwYWNlcykge1xuXHR0cnkge1xuXHRcdGlmIChuYW1lc3BhY2VzKSB7XG5cdFx0XHRleHBvcnRzLnN0b3JhZ2Uuc2V0SXRlbSgnZGVidWcnLCBuYW1lc3BhY2VzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZXhwb3J0cy5zdG9yYWdlLnJlbW92ZUl0ZW0oJ2RlYnVnJyk7XG5cdFx0fVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdC8vIFN3YWxsb3dcblx0XHQvLyBYWFggKEBRaXgtKSBzaG91bGQgd2UgYmUgbG9nZ2luZyB0aGVzZT9cblx0fVxufVxuXG4vKipcbiAqIExvYWQgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEByZXR1cm4ge1N0cmluZ30gcmV0dXJucyB0aGUgcHJldmlvdXNseSBwZXJzaXN0ZWQgZGVidWcgbW9kZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBsb2FkKCkge1xuXHRsZXQgcjtcblx0dHJ5IHtcblx0XHRyID0gZXhwb3J0cy5zdG9yYWdlLmdldEl0ZW0oJ2RlYnVnJyk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Ly8gU3dhbGxvd1xuXHRcdC8vIFhYWCAoQFFpeC0pIHNob3VsZCB3ZSBiZSBsb2dnaW5nIHRoZXNlP1xuXHR9XG5cblx0Ly8gSWYgZGVidWcgaXNuJ3Qgc2V0IGluIExTLCBhbmQgd2UncmUgaW4gRWxlY3Ryb24sIHRyeSB0byBsb2FkICRERUJVR1xuXHRpZiAoIXIgJiYgdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmICdlbnYnIGluIHByb2Nlc3MpIHtcblx0XHRyID0gcHJvY2Vzcy5lbnYuREVCVUc7XG5cdH1cblxuXHRyZXR1cm4gcjtcbn1cblxuLyoqXG4gKiBMb2NhbHN0b3JhZ2UgYXR0ZW1wdHMgdG8gcmV0dXJuIHRoZSBsb2NhbHN0b3JhZ2UuXG4gKlxuICogVGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSBzYWZhcmkgdGhyb3dzXG4gKiB3aGVuIGEgdXNlciBkaXNhYmxlcyBjb29raWVzL2xvY2Fsc3RvcmFnZVxuICogYW5kIHlvdSBhdHRlbXB0IHRvIGFjY2VzcyBpdC5cbiAqXG4gKiBAcmV0dXJuIHtMb2NhbFN0b3JhZ2V9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBsb2NhbHN0b3JhZ2UoKSB7XG5cdHRyeSB7XG5cdFx0Ly8gVFZNTEtpdCAoQXBwbGUgVFYgSlMgUnVudGltZSkgZG9lcyBub3QgaGF2ZSBhIHdpbmRvdyBvYmplY3QsIGp1c3QgbG9jYWxTdG9yYWdlIGluIHRoZSBnbG9iYWwgY29udGV4dFxuXHRcdC8vIFRoZSBCcm93c2VyIGFsc28gaGFzIGxvY2FsU3RvcmFnZSBpbiB0aGUgZ2xvYmFsIGNvbnRleHQuXG5cdFx0cmV0dXJuIGxvY2FsU3RvcmFnZTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHQvLyBTd2FsbG93XG5cdFx0Ly8gWFhYIChAUWl4LSkgc2hvdWxkIHdlIGJlIGxvZ2dpbmcgdGhlc2U/XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2NvbW1vbicpKGV4cG9ydHMpO1xuXG5jb25zdCB7Zm9ybWF0dGVyc30gPSBtb2R1bGUuZXhwb3J0cztcblxuLyoqXG4gKiBNYXAgJWogdG8gYEpTT04uc3RyaW5naWZ5KClgLCBzaW5jZSBubyBXZWIgSW5zcGVjdG9ycyBkbyB0aGF0IGJ5IGRlZmF1bHQuXG4gKi9cblxuZm9ybWF0dGVycy5qID0gZnVuY3Rpb24gKHYpIHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkodik7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0cmV0dXJuICdbVW5leHBlY3RlZEpTT05QYXJzZUVycm9yXTogJyArIGVycm9yLm1lc3NhZ2U7XG5cdH1cbn07XG4iLCJcbi8qKlxuICogVGhpcyBpcyB0aGUgY29tbW9uIGxvZ2ljIGZvciBib3RoIHRoZSBOb2RlLmpzIGFuZCB3ZWIgYnJvd3NlclxuICogaW1wbGVtZW50YXRpb25zIG9mIGBkZWJ1ZygpYC5cbiAqL1xuXG5mdW5jdGlvbiBzZXR1cChlbnYpIHtcblx0Y3JlYXRlRGVidWcuZGVidWcgPSBjcmVhdGVEZWJ1Zztcblx0Y3JlYXRlRGVidWcuZGVmYXVsdCA9IGNyZWF0ZURlYnVnO1xuXHRjcmVhdGVEZWJ1Zy5jb2VyY2UgPSBjb2VyY2U7XG5cdGNyZWF0ZURlYnVnLmRpc2FibGUgPSBkaXNhYmxlO1xuXHRjcmVhdGVEZWJ1Zy5lbmFibGUgPSBlbmFibGU7XG5cdGNyZWF0ZURlYnVnLmVuYWJsZWQgPSBlbmFibGVkO1xuXHRjcmVhdGVEZWJ1Zy5odW1hbml6ZSA9IHJlcXVpcmUoJ21zJyk7XG5cblx0T2JqZWN0LmtleXMoZW52KS5mb3JFYWNoKGtleSA9PiB7XG5cdFx0Y3JlYXRlRGVidWdba2V5XSA9IGVudltrZXldO1xuXHR9KTtcblxuXHQvKipcblx0KiBBY3RpdmUgYGRlYnVnYCBpbnN0YW5jZXMuXG5cdCovXG5cdGNyZWF0ZURlYnVnLmluc3RhbmNlcyA9IFtdO1xuXG5cdC8qKlxuXHQqIFRoZSBjdXJyZW50bHkgYWN0aXZlIGRlYnVnIG1vZGUgbmFtZXMsIGFuZCBuYW1lcyB0byBza2lwLlxuXHQqL1xuXG5cdGNyZWF0ZURlYnVnLm5hbWVzID0gW107XG5cdGNyZWF0ZURlYnVnLnNraXBzID0gW107XG5cblx0LyoqXG5cdCogTWFwIG9mIHNwZWNpYWwgXCIlblwiIGhhbmRsaW5nIGZ1bmN0aW9ucywgZm9yIHRoZSBkZWJ1ZyBcImZvcm1hdFwiIGFyZ3VtZW50LlxuXHQqXG5cdCogVmFsaWQga2V5IG5hbWVzIGFyZSBhIHNpbmdsZSwgbG93ZXIgb3IgdXBwZXItY2FzZSBsZXR0ZXIsIGkuZS4gXCJuXCIgYW5kIFwiTlwiLlxuXHQqL1xuXHRjcmVhdGVEZWJ1Zy5mb3JtYXR0ZXJzID0ge307XG5cblx0LyoqXG5cdCogU2VsZWN0cyBhIGNvbG9yIGZvciBhIGRlYnVnIG5hbWVzcGFjZVxuXHQqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2UgVGhlIG5hbWVzcGFjZSBzdHJpbmcgZm9yIHRoZSBmb3IgdGhlIGRlYnVnIGluc3RhbmNlIHRvIGJlIGNvbG9yZWRcblx0KiBAcmV0dXJuIHtOdW1iZXJ8U3RyaW5nfSBBbiBBTlNJIGNvbG9yIGNvZGUgZm9yIHRoZSBnaXZlbiBuYW1lc3BhY2Vcblx0KiBAYXBpIHByaXZhdGVcblx0Ki9cblx0ZnVuY3Rpb24gc2VsZWN0Q29sb3IobmFtZXNwYWNlKSB7XG5cdFx0bGV0IGhhc2ggPSAwO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBuYW1lc3BhY2UubGVuZ3RoOyBpKyspIHtcblx0XHRcdGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIG5hbWVzcGFjZS5jaGFyQ29kZUF0KGkpO1xuXHRcdFx0aGFzaCB8PSAwOyAvLyBDb252ZXJ0IHRvIDMyYml0IGludGVnZXJcblx0XHR9XG5cblx0XHRyZXR1cm4gY3JlYXRlRGVidWcuY29sb3JzW01hdGguYWJzKGhhc2gpICUgY3JlYXRlRGVidWcuY29sb3JzLmxlbmd0aF07XG5cdH1cblx0Y3JlYXRlRGVidWcuc2VsZWN0Q29sb3IgPSBzZWxlY3RDb2xvcjtcblxuXHQvKipcblx0KiBDcmVhdGUgYSBkZWJ1Z2dlciB3aXRoIHRoZSBnaXZlbiBgbmFtZXNwYWNlYC5cblx0KlxuXHQqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2Vcblx0KiBAcmV0dXJuIHtGdW5jdGlvbn1cblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBjcmVhdGVEZWJ1ZyhuYW1lc3BhY2UpIHtcblx0XHRsZXQgcHJldlRpbWU7XG5cblx0XHRmdW5jdGlvbiBkZWJ1ZyguLi5hcmdzKSB7XG5cdFx0XHQvLyBEaXNhYmxlZD9cblx0XHRcdGlmICghZGVidWcuZW5hYmxlZCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHNlbGYgPSBkZWJ1ZztcblxuXHRcdFx0Ly8gU2V0IGBkaWZmYCB0aW1lc3RhbXBcblx0XHRcdGNvbnN0IGN1cnIgPSBOdW1iZXIobmV3IERhdGUoKSk7XG5cdFx0XHRjb25zdCBtcyA9IGN1cnIgLSAocHJldlRpbWUgfHwgY3Vycik7XG5cdFx0XHRzZWxmLmRpZmYgPSBtcztcblx0XHRcdHNlbGYucHJldiA9IHByZXZUaW1lO1xuXHRcdFx0c2VsZi5jdXJyID0gY3Vycjtcblx0XHRcdHByZXZUaW1lID0gY3VycjtcblxuXHRcdFx0YXJnc1swXSA9IGNyZWF0ZURlYnVnLmNvZXJjZShhcmdzWzBdKTtcblxuXHRcdFx0aWYgKHR5cGVvZiBhcmdzWzBdICE9PSAnc3RyaW5nJykge1xuXHRcdFx0XHQvLyBBbnl0aGluZyBlbHNlIGxldCdzIGluc3BlY3Qgd2l0aCAlT1xuXHRcdFx0XHRhcmdzLnVuc2hpZnQoJyVPJyk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFwcGx5IGFueSBgZm9ybWF0dGVyc2AgdHJhbnNmb3JtYXRpb25zXG5cdFx0XHRsZXQgaW5kZXggPSAwO1xuXHRcdFx0YXJnc1swXSA9IGFyZ3NbMF0ucmVwbGFjZSgvJShbYS16QS1aJV0pL2csIChtYXRjaCwgZm9ybWF0KSA9PiB7XG5cdFx0XHRcdC8vIElmIHdlIGVuY291bnRlciBhbiBlc2NhcGVkICUgdGhlbiBkb24ndCBpbmNyZWFzZSB0aGUgYXJyYXkgaW5kZXhcblx0XHRcdFx0aWYgKG1hdGNoID09PSAnJSUnKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG1hdGNoO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGluZGV4Kys7XG5cdFx0XHRcdGNvbnN0IGZvcm1hdHRlciA9IGNyZWF0ZURlYnVnLmZvcm1hdHRlcnNbZm9ybWF0XTtcblx0XHRcdFx0aWYgKHR5cGVvZiBmb3JtYXR0ZXIgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRjb25zdCB2YWwgPSBhcmdzW2luZGV4XTtcblx0XHRcdFx0XHRtYXRjaCA9IGZvcm1hdHRlci5jYWxsKHNlbGYsIHZhbCk7XG5cblx0XHRcdFx0XHQvLyBOb3cgd2UgbmVlZCB0byByZW1vdmUgYGFyZ3NbaW5kZXhdYCBzaW5jZSBpdCdzIGlubGluZWQgaW4gdGhlIGBmb3JtYXRgXG5cdFx0XHRcdFx0YXJncy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0XHRcdGluZGV4LS07XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG1hdGNoO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIEFwcGx5IGVudi1zcGVjaWZpYyBmb3JtYXR0aW5nIChjb2xvcnMsIGV0Yy4pXG5cdFx0XHRjcmVhdGVEZWJ1Zy5mb3JtYXRBcmdzLmNhbGwoc2VsZiwgYXJncyk7XG5cblx0XHRcdGNvbnN0IGxvZ0ZuID0gc2VsZi5sb2cgfHwgY3JlYXRlRGVidWcubG9nO1xuXHRcdFx0bG9nRm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cdFx0fVxuXG5cdFx0ZGVidWcubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuXHRcdGRlYnVnLmVuYWJsZWQgPSBjcmVhdGVEZWJ1Zy5lbmFibGVkKG5hbWVzcGFjZSk7XG5cdFx0ZGVidWcudXNlQ29sb3JzID0gY3JlYXRlRGVidWcudXNlQ29sb3JzKCk7XG5cdFx0ZGVidWcuY29sb3IgPSBjcmVhdGVEZWJ1Zy5zZWxlY3RDb2xvcihuYW1lc3BhY2UpO1xuXHRcdGRlYnVnLmRlc3Ryb3kgPSBkZXN0cm95O1xuXHRcdGRlYnVnLmV4dGVuZCA9IGV4dGVuZDtcblxuXHRcdC8vIEVudi1zcGVjaWZpYyBpbml0aWFsaXphdGlvbiBsb2dpYyBmb3IgZGVidWcgaW5zdGFuY2VzXG5cdFx0aWYgKHR5cGVvZiBjcmVhdGVEZWJ1Zy5pbml0ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRjcmVhdGVEZWJ1Zy5pbml0KGRlYnVnKTtcblx0XHR9XG5cblx0XHRjcmVhdGVEZWJ1Zy5pbnN0YW5jZXMucHVzaChkZWJ1Zyk7XG5cblx0XHRyZXR1cm4gZGVidWc7XG5cdH1cblxuXHRmdW5jdGlvbiBkZXN0cm95KCkge1xuXHRcdGNvbnN0IGluZGV4ID0gY3JlYXRlRGVidWcuaW5zdGFuY2VzLmluZGV4T2YodGhpcyk7XG5cdFx0aWYgKGluZGV4ICE9PSAtMSkge1xuXHRcdFx0Y3JlYXRlRGVidWcuaW5zdGFuY2VzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0ZnVuY3Rpb24gZXh0ZW5kKG5hbWVzcGFjZSwgZGVsaW1pdGVyKSB7XG5cdFx0Y29uc3QgbmV3RGVidWcgPSBjcmVhdGVEZWJ1Zyh0aGlzLm5hbWVzcGFjZSArICh0eXBlb2YgZGVsaW1pdGVyID09PSAndW5kZWZpbmVkJyA/ICc6JyA6IGRlbGltaXRlcikgKyBuYW1lc3BhY2UpO1xuXHRcdG5ld0RlYnVnLmxvZyA9IHRoaXMubG9nO1xuXHRcdHJldHVybiBuZXdEZWJ1Zztcblx0fVxuXG5cdC8qKlxuXHQqIEVuYWJsZXMgYSBkZWJ1ZyBtb2RlIGJ5IG5hbWVzcGFjZXMuIFRoaXMgY2FuIGluY2x1ZGUgbW9kZXNcblx0KiBzZXBhcmF0ZWQgYnkgYSBjb2xvbiBhbmQgd2lsZGNhcmRzLlxuXHQqXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBlbmFibGUobmFtZXNwYWNlcykge1xuXHRcdGNyZWF0ZURlYnVnLnNhdmUobmFtZXNwYWNlcyk7XG5cblx0XHRjcmVhdGVEZWJ1Zy5uYW1lcyA9IFtdO1xuXHRcdGNyZWF0ZURlYnVnLnNraXBzID0gW107XG5cblx0XHRsZXQgaTtcblx0XHRjb25zdCBzcGxpdCA9ICh0eXBlb2YgbmFtZXNwYWNlcyA9PT0gJ3N0cmluZycgPyBuYW1lc3BhY2VzIDogJycpLnNwbGl0KC9bXFxzLF0rLyk7XG5cdFx0Y29uc3QgbGVuID0gc3BsaXQubGVuZ3RoO1xuXG5cdFx0Zm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRpZiAoIXNwbGl0W2ldKSB7XG5cdFx0XHRcdC8vIGlnbm9yZSBlbXB0eSBzdHJpbmdzXG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRuYW1lc3BhY2VzID0gc3BsaXRbaV0ucmVwbGFjZSgvXFwqL2csICcuKj8nKTtcblxuXHRcdFx0aWYgKG5hbWVzcGFjZXNbMF0gPT09ICctJykge1xuXHRcdFx0XHRjcmVhdGVEZWJ1Zy5za2lwcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcy5zdWJzdHIoMSkgKyAnJCcpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNyZWF0ZURlYnVnLm5hbWVzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzICsgJyQnKSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChpID0gMDsgaSA8IGNyZWF0ZURlYnVnLmluc3RhbmNlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgaW5zdGFuY2UgPSBjcmVhdGVEZWJ1Zy5pbnN0YW5jZXNbaV07XG5cdFx0XHRpbnN0YW5jZS5lbmFibGVkID0gY3JlYXRlRGVidWcuZW5hYmxlZChpbnN0YW5jZS5uYW1lc3BhY2UpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQqIERpc2FibGUgZGVidWcgb3V0cHV0LlxuXHQqXG5cdCogQHJldHVybiB7U3RyaW5nfSBuYW1lc3BhY2VzXG5cdCogQGFwaSBwdWJsaWNcblx0Ki9cblx0ZnVuY3Rpb24gZGlzYWJsZSgpIHtcblx0XHRjb25zdCBuYW1lc3BhY2VzID0gW1xuXHRcdFx0Li4uY3JlYXRlRGVidWcubmFtZXMubWFwKHRvTmFtZXNwYWNlKSxcblx0XHRcdC4uLmNyZWF0ZURlYnVnLnNraXBzLm1hcCh0b05hbWVzcGFjZSkubWFwKG5hbWVzcGFjZSA9PiAnLScgKyBuYW1lc3BhY2UpXG5cdFx0XS5qb2luKCcsJyk7XG5cdFx0Y3JlYXRlRGVidWcuZW5hYmxlKCcnKTtcblx0XHRyZXR1cm4gbmFtZXNwYWNlcztcblx0fVxuXG5cdC8qKlxuXHQqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gbW9kZSBuYW1lIGlzIGVuYWJsZWQsIGZhbHNlIG90aGVyd2lzZS5cblx0KlxuXHQqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG5cdCogQHJldHVybiB7Qm9vbGVhbn1cblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBlbmFibGVkKG5hbWUpIHtcblx0XHRpZiAobmFtZVtuYW1lLmxlbmd0aCAtIDFdID09PSAnKicpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGxldCBpO1xuXHRcdGxldCBsZW47XG5cblx0XHRmb3IgKGkgPSAwLCBsZW4gPSBjcmVhdGVEZWJ1Zy5za2lwcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0aWYgKGNyZWF0ZURlYnVnLnNraXBzW2ldLnRlc3QobmFtZSkpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZvciAoaSA9IDAsIGxlbiA9IGNyZWF0ZURlYnVnLm5hbWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRpZiAoY3JlYXRlRGVidWcubmFtZXNbaV0udGVzdChuYW1lKSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvKipcblx0KiBDb252ZXJ0IHJlZ2V4cCB0byBuYW1lc3BhY2Vcblx0KlxuXHQqIEBwYXJhbSB7UmVnRXhwfSByZWd4ZXBcblx0KiBAcmV0dXJuIHtTdHJpbmd9IG5hbWVzcGFjZVxuXHQqIEBhcGkgcHJpdmF0ZVxuXHQqL1xuXHRmdW5jdGlvbiB0b05hbWVzcGFjZShyZWdleHApIHtcblx0XHRyZXR1cm4gcmVnZXhwLnRvU3RyaW5nKClcblx0XHRcdC5zdWJzdHJpbmcoMiwgcmVnZXhwLnRvU3RyaW5nKCkubGVuZ3RoIC0gMilcblx0XHRcdC5yZXBsYWNlKC9cXC5cXCpcXD8kLywgJyonKTtcblx0fVxuXG5cdC8qKlxuXHQqIENvZXJjZSBgdmFsYC5cblx0KlxuXHQqIEBwYXJhbSB7TWl4ZWR9IHZhbFxuXHQqIEByZXR1cm4ge01peGVkfVxuXHQqIEBhcGkgcHJpdmF0ZVxuXHQqL1xuXHRmdW5jdGlvbiBjb2VyY2UodmFsKSB7XG5cdFx0aWYgKHZhbCBpbnN0YW5jZW9mIEVycm9yKSB7XG5cdFx0XHRyZXR1cm4gdmFsLnN0YWNrIHx8IHZhbC5tZXNzYWdlO1xuXHRcdH1cblx0XHRyZXR1cm4gdmFsO1xuXHR9XG5cblx0Y3JlYXRlRGVidWcuZW5hYmxlKGNyZWF0ZURlYnVnLmxvYWQoKSk7XG5cblx0cmV0dXJuIGNyZWF0ZURlYnVnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldHVwO1xuIiwiLyoqXG4gKiBIZWxwZXJzLlxuICovXG5cbnZhciBzID0gMTAwMDtcbnZhciBtID0gcyAqIDYwO1xudmFyIGggPSBtICogNjA7XG52YXIgZCA9IGggKiAyNDtcbnZhciB3ID0gZCAqIDc7XG52YXIgeSA9IGQgKiAzNjUuMjU7XG5cbi8qKlxuICogUGFyc2Ugb3IgZm9ybWF0IHRoZSBnaXZlbiBgdmFsYC5cbiAqXG4gKiBPcHRpb25zOlxuICpcbiAqICAtIGBsb25nYCB2ZXJib3NlIGZvcm1hdHRpbmcgW2ZhbHNlXVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0gdmFsXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAdGhyb3dzIHtFcnJvcn0gdGhyb3cgYW4gZXJyb3IgaWYgdmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSBudW1iZXJcbiAqIEByZXR1cm4ge1N0cmluZ3xOdW1iZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odmFsLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWw7XG4gIGlmICh0eXBlID09PSAnc3RyaW5nJyAmJiB2YWwubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBwYXJzZSh2YWwpO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXInICYmIGlzRmluaXRlKHZhbCkpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5sb25nID8gZm10TG9uZyh2YWwpIDogZm10U2hvcnQodmFsKTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3ZhbCBpcyBub3QgYSBub24tZW1wdHkgc3RyaW5nIG9yIGEgdmFsaWQgbnVtYmVyLiB2YWw9JyArXG4gICAgICBKU09OLnN0cmluZ2lmeSh2YWwpXG4gICk7XG59O1xuXG4vKipcbiAqIFBhcnNlIHRoZSBnaXZlbiBgc3RyYCBhbmQgcmV0dXJuIG1pbGxpc2Vjb25kcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZShzdHIpIHtcbiAgc3RyID0gU3RyaW5nKHN0cik7XG4gIGlmIChzdHIubGVuZ3RoID4gMTAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBtYXRjaCA9IC9eKC0/KD86XFxkKyk/XFwuP1xcZCspICoobWlsbGlzZWNvbmRzP3xtc2Vjcz98bXN8c2Vjb25kcz98c2Vjcz98c3xtaW51dGVzP3xtaW5zP3xtfGhvdXJzP3xocnM/fGh8ZGF5cz98ZHx3ZWVrcz98d3x5ZWFycz98eXJzP3x5KT8kL2kuZXhlYyhcbiAgICBzdHJcbiAgKTtcbiAgaWYgKCFtYXRjaCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbiA9IHBhcnNlRmxvYXQobWF0Y2hbMV0pO1xuICB2YXIgdHlwZSA9IChtYXRjaFsyXSB8fCAnbXMnKS50b0xvd2VyQ2FzZSgpO1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICd5ZWFycyc6XG4gICAgY2FzZSAneWVhcic6XG4gICAgY2FzZSAneXJzJzpcbiAgICBjYXNlICd5cic6XG4gICAgY2FzZSAneSc6XG4gICAgICByZXR1cm4gbiAqIHk7XG4gICAgY2FzZSAnd2Vla3MnOlxuICAgIGNhc2UgJ3dlZWsnOlxuICAgIGNhc2UgJ3cnOlxuICAgICAgcmV0dXJuIG4gKiB3O1xuICAgIGNhc2UgJ2RheXMnOlxuICAgIGNhc2UgJ2RheSc6XG4gICAgY2FzZSAnZCc6XG4gICAgICByZXR1cm4gbiAqIGQ7XG4gICAgY2FzZSAnaG91cnMnOlxuICAgIGNhc2UgJ2hvdXInOlxuICAgIGNhc2UgJ2hycyc6XG4gICAgY2FzZSAnaHInOlxuICAgIGNhc2UgJ2gnOlxuICAgICAgcmV0dXJuIG4gKiBoO1xuICAgIGNhc2UgJ21pbnV0ZXMnOlxuICAgIGNhc2UgJ21pbnV0ZSc6XG4gICAgY2FzZSAnbWlucyc6XG4gICAgY2FzZSAnbWluJzpcbiAgICBjYXNlICdtJzpcbiAgICAgIHJldHVybiBuICogbTtcbiAgICBjYXNlICdzZWNvbmRzJzpcbiAgICBjYXNlICdzZWNvbmQnOlxuICAgIGNhc2UgJ3NlY3MnOlxuICAgIGNhc2UgJ3NlYyc6XG4gICAgY2FzZSAncyc6XG4gICAgICByZXR1cm4gbiAqIHM7XG4gICAgY2FzZSAnbWlsbGlzZWNvbmRzJzpcbiAgICBjYXNlICdtaWxsaXNlY29uZCc6XG4gICAgY2FzZSAnbXNlY3MnOlxuICAgIGNhc2UgJ21zZWMnOlxuICAgIGNhc2UgJ21zJzpcbiAgICAgIHJldHVybiBuO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5cbi8qKlxuICogU2hvcnQgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10U2hvcnQobXMpIHtcbiAgdmFyIG1zQWJzID0gTWF0aC5hYnMobXMpO1xuICBpZiAobXNBYnMgPj0gZCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gZCkgKyAnZCc7XG4gIH1cbiAgaWYgKG1zQWJzID49IGgpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIGgpICsgJ2gnO1xuICB9XG4gIGlmIChtc0FicyA+PSBtKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBtKSArICdtJztcbiAgfVxuICBpZiAobXNBYnMgPj0gcykge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gcykgKyAncyc7XG4gIH1cbiAgcmV0dXJuIG1zICsgJ21zJztcbn1cblxuLyoqXG4gKiBMb25nIGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdExvbmcobXMpIHtcbiAgdmFyIG1zQWJzID0gTWF0aC5hYnMobXMpO1xuICBpZiAobXNBYnMgPj0gZCkge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBkLCAnZGF5Jyk7XG4gIH1cbiAgaWYgKG1zQWJzID49IGgpIHtcbiAgICByZXR1cm4gcGx1cmFsKG1zLCBtc0FicywgaCwgJ2hvdXInKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gbSkge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBtLCAnbWludXRlJyk7XG4gIH1cbiAgaWYgKG1zQWJzID49IHMpIHtcbiAgICByZXR1cm4gcGx1cmFsKG1zLCBtc0FicywgcywgJ3NlY29uZCcpO1xuICB9XG4gIHJldHVybiBtcyArICcgbXMnO1xufVxuXG4vKipcbiAqIFBsdXJhbGl6YXRpb24gaGVscGVyLlxuICovXG5cbmZ1bmN0aW9uIHBsdXJhbChtcywgbXNBYnMsIG4sIG5hbWUpIHtcbiAgdmFyIGlzUGx1cmFsID0gbXNBYnMgPj0gbiAqIDEuNTtcbiAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBuKSArICcgJyArIG5hbWUgKyAoaXNQbHVyYWwgPyAncycgOiAnJyk7XG59XG4iLCI8c2NyaXB0PlxuICBleHBvcnQgbGV0IGlzQWN0aXZlID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgaXNGaXJzdCA9IGZhbHNlO1xuICBleHBvcnQgbGV0IGlzSG92ZXIgPSBmYWxzZTtcbiAgZXhwb3J0IGxldCBnZXRPcHRpb25MYWJlbCA9IHVuZGVmaW5lZDtcbiAgZXhwb3J0IGxldCBpdGVtID0gdW5kZWZpbmVkO1xuICBleHBvcnQgbGV0IGZpbHRlclRleHQgPSAnJztcblxuICBsZXQgaXRlbUNsYXNzZXMgPSAnJztcblxuICAkOiB7XG4gICAgY29uc3QgY2xhc3NlcyA9IFtdO1xuICAgIGlmIChpc0FjdGl2ZSkgeyBjbGFzc2VzLnB1c2goJ2FjdGl2ZScpOyB9XG4gICAgaWYgKGlzRmlyc3QpIHsgY2xhc3Nlcy5wdXNoKCdmaXJzdCcpOyB9XG4gICAgaWYgKGlzSG92ZXIpIHsgY2xhc3Nlcy5wdXNoKCdob3ZlcicpOyB9XG4gICAgaWYgKGl0ZW0uaXNHcm91cEhlYWRlcikgeyBjbGFzc2VzLnB1c2goJ2dyb3VwSGVhZGVyJyk7IH1cbiAgICBpZiAoaXRlbS5pc0dyb3VwSXRlbSkgeyBjbGFzc2VzLnB1c2goJ2dyb3VwSXRlbScpOyB9XG4gICAgaXRlbUNsYXNzZXMgPSBjbGFzc2VzLmpvaW4oJyAnKTtcbiAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgLml0ZW0ge1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICBoZWlnaHQ6IHZhcigtLWhlaWdodCwgNDJweCk7XG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWhlaWdodCwgNDJweCk7XG4gICAgcGFkZGluZzogdmFyKC0taXRlbVBhZGRpbmcsIDAgMjBweCk7XG4gICAgY29sb3I6IHZhcigtLWl0ZW1Db2xvciwgaW5oZXJpdCk7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG5cbiAgLmdyb3VwSGVhZGVyIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdmFyKC0tZ3JvdXBUaXRsZVRleHRUcmFuc2Zvcm0sIHVwcGVyY2FzZSk7XG4gIH1cblxuICAuZ3JvdXBJdGVtIHtcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLWdyb3VwSXRlbVBhZGRpbmdMZWZ0LCA0MHB4KTtcbiAgfVxuXG4gIC5pdGVtOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taXRlbUFjdGl2ZUJhY2tncm91bmQsICNiOWRhZmYpO1xuICB9XG5cbiAgLml0ZW0uYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pdGVtSXNBY3RpdmVCRywgIzAwN2FmZik7XG4gICAgY29sb3I6IHZhcigtLWl0ZW1Jc0FjdGl2ZUNvbG9yLCAjZmZmKTtcbiAgfVxuXG4gIC5pdGVtLmZpcnN0IHtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1pdGVtRmlyc3RCb3JkZXJSYWRpdXMsIDRweCA0cHggMCAwKTtcbiAgfVxuXG4gIC5pdGVtLmhvdmVyOm5vdCguYWN0aXZlKSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taXRlbUhvdmVyQkcsICNlN2YyZmYpO1xuICB9XG48L3N0eWxlPlxuXG5cblxuPGRpdiBjbGFzcz1cIml0ZW0ge2l0ZW1DbGFzc2VzfVwiPlxuICB7QGh0bWwgZ2V0T3B0aW9uTGFiZWwoaXRlbSwgZmlsdGVyVGV4dCl9XG48L2Rpdj5cbiIsIjxzY3JpcHQ+XG4gIGltcG9ydCB7IGJlZm9yZVVwZGF0ZSwgY3JlYXRlRXZlbnREaXNwYXRjaGVyLCBvbkRlc3Ryb3ksIG9uTW91bnQsIHRpY2sgfSBmcm9tICdzdmVsdGUnO1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gY3JlYXRlRXZlbnREaXNwYXRjaGVyKCk7XG5cbiAgZXhwb3J0IGxldCBjb250YWluZXIgPSB1bmRlZmluZWQ7XG5cbiAgaW1wb3J0IEl0ZW1Db21wb25lbnQgZnJvbSAnLi9JdGVtLnN2ZWx0ZSc7XG4gIGltcG9ydCBWaXJ0dWFsTGlzdCBmcm9tICcuL1ZpcnR1YWxMaXN0LnN2ZWx0ZSc7XG5cbiAgZXhwb3J0IGxldCBJdGVtID0gSXRlbUNvbXBvbmVudDtcbiAgZXhwb3J0IGxldCBpc1ZpcnR1YWxMaXN0ID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgaXRlbXMgPSBbXTtcbiAgZXhwb3J0IGxldCBnZXRPcHRpb25MYWJlbCA9IChvcHRpb24sIGZpbHRlclRleHQpID0+IHtcbiAgICBpZiAob3B0aW9uKSByZXR1cm4gb3B0aW9uLmlzQ3JlYXRvciA/IGBDcmVhdGUgXFxcIiR7ZmlsdGVyVGV4dH1cXFwiYCA6IG9wdGlvbi5sYWJlbDtcbiAgfTtcbiAgZXhwb3J0IGxldCBnZXRHcm91cEhlYWRlckxhYmVsID0gKG9wdGlvbikgPT4geyByZXR1cm4gb3B0aW9uLmxhYmVsIH07XG4gIGV4cG9ydCBsZXQgaXRlbUhlaWdodCA9IDQwO1xuICBleHBvcnQgbGV0IGhvdmVySXRlbUluZGV4ID0gMDtcbiAgZXhwb3J0IGxldCBzZWxlY3RlZFZhbHVlID0gdW5kZWZpbmVkO1xuICBleHBvcnQgbGV0IG9wdGlvbklkZW50aWZpZXIgPSAndmFsdWUnO1xuICBleHBvcnQgbGV0IGhpZGVFbXB0eVN0YXRlID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgbm9PcHRpb25zTWVzc2FnZSA9ICdObyBvcHRpb25zJztcbiAgZXhwb3J0IGxldCBpc011bHRpID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgYWN0aXZlSXRlbUluZGV4ID0gMDtcbiAgZXhwb3J0IGxldCBmaWx0ZXJUZXh0ID0gJyc7XG5cbiAgbGV0IGlzU2Nyb2xsaW5nVGltZXIgPSAwO1xuICBsZXQgaXNTY3JvbGxpbmcgPSBmYWxzZTtcbiAgbGV0IHByZXZfaXRlbXM7XG4gIGxldCBwcmV2X2FjdGl2ZUl0ZW1JbmRleDtcbiAgbGV0IHByZXZfc2VsZWN0ZWRWYWx1ZTtcblxuICBvbk1vdW50KCgpID0+IHtcbiAgICBpZiAoaXRlbXMubGVuZ3RoID4gMCAmJiAhaXNNdWx0aSAmJiBzZWxlY3RlZFZhbHVlKSB7XG4gICAgICBjb25zdCBfaG92ZXJJdGVtSW5kZXggPSBpdGVtcy5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW1bb3B0aW9uSWRlbnRpZmllcl0gPT09IHNlbGVjdGVkVmFsdWVbb3B0aW9uSWRlbnRpZmllcl0pO1xuXG4gICAgICBpZiAoX2hvdmVySXRlbUluZGV4KSB7XG4gICAgICAgIGhvdmVySXRlbUluZGV4ID0gX2hvdmVySXRlbUluZGV4O1xuICAgICAgfVxuICAgIH1cblxuICAgIHNjcm9sbFRvQWN0aXZlSXRlbSgnYWN0aXZlJyk7XG5cblxuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICBjbGVhclRpbWVvdXQoaXNTY3JvbGxpbmdUaW1lcik7XG5cbiAgICAgIGlzU2Nyb2xsaW5nVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaXNTY3JvbGxpbmcgPSBmYWxzZTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfSwgZmFsc2UpO1xuICB9KTtcblxuICBvbkRlc3Ryb3koKCkgPT4ge1xuICAgIC8vIGNsZWFyVGltZW91dChpc1Njcm9sbGluZ1RpbWVyKTtcbiAgfSk7XG5cbiAgYmVmb3JlVXBkYXRlKCgpID0+IHtcblxuICAgIGlmIChpdGVtcyAhPT0gcHJldl9pdGVtcyAmJiBpdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICBob3Zlckl0ZW1JbmRleCA9IDA7XG4gICAgfVxuXG5cbiAgICAvLyBpZiAocHJldl9hY3RpdmVJdGVtSW5kZXggJiYgYWN0aXZlSXRlbUluZGV4ID4gLTEpIHtcbiAgICAvLyAgIGhvdmVySXRlbUluZGV4ID0gYWN0aXZlSXRlbUluZGV4O1xuXG4gICAgLy8gICBzY3JvbGxUb0FjdGl2ZUl0ZW0oJ2FjdGl2ZScpO1xuICAgIC8vIH1cbiAgICAvLyBpZiAocHJldl9zZWxlY3RlZFZhbHVlICYmIHNlbGVjdGVkVmFsdWUpIHtcbiAgICAvLyAgIHNjcm9sbFRvQWN0aXZlSXRlbSgnYWN0aXZlJyk7XG5cbiAgICAvLyAgIGlmIChpdGVtcyAmJiAhaXNNdWx0aSkge1xuICAgIC8vICAgICBjb25zdCBob3Zlckl0ZW1JbmRleCA9IGl0ZW1zLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbVtvcHRpb25JZGVudGlmaWVyXSA9PT0gc2VsZWN0ZWRWYWx1ZVtvcHRpb25JZGVudGlmaWVyXSk7XG5cbiAgICAvLyAgICAgaWYgKGhvdmVySXRlbUluZGV4KSB7XG4gICAgLy8gICAgICAgaG92ZXJJdGVtSW5kZXggPSBob3Zlckl0ZW1JbmRleDtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfVxuICAgIC8vIH1cblxuICAgIHByZXZfaXRlbXMgPSBpdGVtcztcbiAgICBwcmV2X2FjdGl2ZUl0ZW1JbmRleCA9IGFjdGl2ZUl0ZW1JbmRleDtcbiAgICBwcmV2X3NlbGVjdGVkVmFsdWUgPSBzZWxlY3RlZFZhbHVlO1xuICB9KTtcblxuICBmdW5jdGlvbiBpdGVtQ2xhc3Nlcyhob3Zlckl0ZW1JbmRleCwgaXRlbSwgaXRlbUluZGV4LCBpdGVtcywgc2VsZWN0ZWRWYWx1ZSwgb3B0aW9uSWRlbnRpZmllciwgaXNNdWx0aSkge1xuICAgIHJldHVybiBgJHtzZWxlY3RlZFZhbHVlICYmICFpc011bHRpICYmIChzZWxlY3RlZFZhbHVlW29wdGlvbklkZW50aWZpZXJdID09PSBpdGVtW29wdGlvbklkZW50aWZpZXJdKSA/ICdhY3RpdmUgJyA6ICcnfSR7aG92ZXJJdGVtSW5kZXggPT09IGl0ZW1JbmRleCB8fCBpdGVtcy5sZW5ndGggPT09IDEgPyAnaG92ZXInIDogJyd9YDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVNlbGVjdChpdGVtKSB7XG4gICAgaWYgKGl0ZW0uaXNDcmVhdG9yKSByZXR1cm47XG4gICAgZGlzcGF0Y2goJ2l0ZW1TZWxlY3RlZCcsIGl0ZW0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlSG92ZXIoaSkge1xuICAgIGlmIChpc1Njcm9sbGluZykgcmV0dXJuO1xuICAgIGhvdmVySXRlbUluZGV4ID0gaTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGFyZ3MpIHtcbiAgICBjb25zdCB7IGl0ZW0sIGksIGV2ZW50IH0gPSBhcmdzO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgaWYgKHNlbGVjdGVkVmFsdWUgJiYgIWlzTXVsdGkgJiYgc2VsZWN0ZWRWYWx1ZVtvcHRpb25JZGVudGlmaWVyXSA9PT0gaXRlbVtvcHRpb25JZGVudGlmaWVyXSkgcmV0dXJuIGNsb3NlTGlzdCgpO1xuXG4gICAgaWYgKGl0ZW0uaXNDcmVhdG9yKSB7XG4gICAgICBkaXNwYXRjaCgnaXRlbUNyZWF0ZWQnLCBmaWx0ZXJUZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWN0aXZlSXRlbUluZGV4ID0gaTtcbiAgICAgIGhvdmVySXRlbUluZGV4ID0gaTtcbiAgICAgIGhhbmRsZVNlbGVjdChpdGVtKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZUxpc3QoKSB7XG4gICAgZGlzcGF0Y2goJ2Nsb3NlTGlzdCcpO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gdXBkYXRlSG92ZXJJdGVtKGluY3JlbWVudCkge1xuICAgIGlmIChpc1ZpcnR1YWxMaXN0KSByZXR1cm47XG5cbiAgICBsZXQgaXNOb25TZWxlY3RhYmxlSXRlbSA9IHRydWU7XG5cbiAgICB3aGlsZSAoaXNOb25TZWxlY3RhYmxlSXRlbSkge1xuICAgICAgaWYgKGluY3JlbWVudCA+IDAgJiYgaG92ZXJJdGVtSW5kZXggPT09IChpdGVtcy5sZW5ndGggLSAxKSkge1xuICAgICAgICBob3Zlckl0ZW1JbmRleCA9IDA7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChpbmNyZW1lbnQgPCAwICYmIGhvdmVySXRlbUluZGV4ID09PSAwKSB7XG4gICAgICAgIGhvdmVySXRlbUluZGV4ID0gaXRlbXMubGVuZ3RoIC0gMTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBob3Zlckl0ZW1JbmRleCA9IGhvdmVySXRlbUluZGV4ICsgaW5jcmVtZW50O1xuICAgICAgfVxuXG4gICAgICBpc05vblNlbGVjdGFibGVJdGVtID0gaXRlbXNbaG92ZXJJdGVtSW5kZXhdLmlzR3JvdXBIZWFkZXIgJiYgIWl0ZW1zW2hvdmVySXRlbUluZGV4XS5pc1NlbGVjdGFibGU7XG4gICAgfVxuXG4gICAgYXdhaXQgdGljaygpO1xuXG4gICAgc2Nyb2xsVG9BY3RpdmVJdGVtKCdob3ZlcicpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlS2V5RG93bihlKSB7XG4gICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpdGVtcy5sZW5ndGggJiYgdXBkYXRlSG92ZXJJdGVtKDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGl0ZW1zLmxlbmd0aCAmJiB1cGRhdGVIb3Zlckl0ZW0oLTEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSBicmVhaztcbiAgICAgICAgY29uc3QgaG92ZXJJdGVtID0gaXRlbXNbaG92ZXJJdGVtSW5kZXhdO1xuICAgICAgICBpZiAoc2VsZWN0ZWRWYWx1ZSAmJiAhaXNNdWx0aSAmJiBzZWxlY3RlZFZhbHVlW29wdGlvbklkZW50aWZpZXJdID09PSBob3Zlckl0ZW1bb3B0aW9uSWRlbnRpZmllcl0pIHtcbiAgICAgICAgICBjbG9zZUxpc3QoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChob3Zlckl0ZW0uaXNDcmVhdG9yKSB7XG4gICAgICAgICAgZGlzcGF0Y2goJ2l0ZW1DcmVhdGVkJywgZmlsdGVyVGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWN0aXZlSXRlbUluZGV4ID0gaG92ZXJJdGVtSW5kZXg7XG4gICAgICAgICAgaGFuZGxlU2VsZWN0KGl0ZW1zW2hvdmVySXRlbUluZGV4XSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdUYWInOlxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIGJyZWFrO1xuICAgICAgICBpZiAoc2VsZWN0ZWRWYWx1ZSAmJiBzZWxlY3RlZFZhbHVlW29wdGlvbklkZW50aWZpZXJdID09PSBpdGVtc1tob3Zlckl0ZW1JbmRleF1bb3B0aW9uSWRlbnRpZmllcl0pIHJldHVybiBjbG9zZUxpc3QoKTtcbiAgICAgICAgYWN0aXZlSXRlbUluZGV4ID0gaG92ZXJJdGVtSW5kZXg7XG4gICAgICAgIGhhbmRsZVNlbGVjdChpdGVtc1tob3Zlckl0ZW1JbmRleF0pO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzY3JvbGxUb0FjdGl2ZUl0ZW0oY2xhc3NOYW1lKSB7XG4gICAgaWYgKGlzVmlydHVhbExpc3QgfHwgIWNvbnRhaW5lcikgcmV0dXJuO1xuXG4gICAgbGV0IG9mZnNldEJvdW5kaW5nO1xuICAgIGNvbnN0IGZvY3VzZWRFbGVtQm91bmRpbmcgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihgLmxpc3RJdGVtIC4ke2NsYXNzTmFtZX1gKTtcblxuICAgIGlmIChmb2N1c2VkRWxlbUJvdW5kaW5nKSB7XG4gICAgICBvZmZzZXRCb3VuZGluZyA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20gLSBmb2N1c2VkRWxlbUJvdW5kaW5nLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbTtcbiAgICB9XG5cbiAgICBjb250YWluZXIuc2Nyb2xsVG9wIC09IG9mZnNldEJvdW5kaW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNJdGVtQWN0aXZlKGl0ZW0sIHNlbGVjdGVkVmFsdWUsIG9wdGlvbklkZW50aWZpZXIpIHtcbiAgICByZXR1cm4gc2VsZWN0ZWRWYWx1ZSAmJiAoc2VsZWN0ZWRWYWx1ZVtvcHRpb25JZGVudGlmaWVyXSA9PT0gaXRlbVtvcHRpb25JZGVudGlmaWVyXSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gaXNJdGVtRmlyc3QoaXRlbUluZGV4KSB7XG4gICAgcmV0dXJuIGl0ZW1JbmRleCA9PT0gMDtcbiAgfTtcblxuICBmdW5jdGlvbiBpc0l0ZW1Ib3Zlcihob3Zlckl0ZW1JbmRleCwgaXRlbSwgaXRlbUluZGV4LCBpdGVtcykge1xuICAgIHJldHVybiBob3Zlckl0ZW1JbmRleCA9PT0gaXRlbUluZGV4IHx8IGl0ZW1zLmxlbmd0aCA9PT0gMTtcbiAgfVxuXG48L3NjcmlwdD5cblxuPHN2ZWx0ZTp3aW5kb3cgb246a2V5ZG93bj1cIntoYW5kbGVLZXlEb3dufVwiIC8+XG5cbnsjaWYgaXNWaXJ0dWFsTGlzdH1cbjxkaXYgY2xhc3M9XCJsaXN0Q29udGFpbmVyIHZpcnR1YWxMaXN0XCIgYmluZDp0aGlzPXtjb250YWluZXJ9PlxuXG4gIDxWaXJ0dWFsTGlzdCB7aXRlbXN9IHtpdGVtSGVpZ2h0fSBsZXQ6aXRlbSBsZXQ6aT5cbiAgXG4gICAgPGRpdiBvbjptb3VzZW92ZXI9XCJ7KCkgPT4gaGFuZGxlSG92ZXIoaSl9XCIgb246Y2xpY2s9XCJ7ZXZlbnQgPT4gaGFuZGxlQ2xpY2soe2l0ZW0sIGksIGV2ZW50fSl9XCJcbiAgICAgICAgY2xhc3M9XCJsaXN0SXRlbVwiPlxuICAgICAgICAgIDxzdmVsdGU6Y29tcG9uZW50IFxuICAgICAgICAgICAgdGhpcz1cIntJdGVtfVwiXG4gICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICAgIHtmaWx0ZXJUZXh0fVxuICAgICAgICAgICAge2dldE9wdGlvbkxhYmVsfVxuICAgICAgICAgICAgaXNGaXJzdD1cIntpc0l0ZW1GaXJzdChpKX1cIlxuICAgICAgICAgICAgaXNBY3RpdmU9XCJ7aXNJdGVtQWN0aXZlKGl0ZW0sIHNlbGVjdGVkVmFsdWUsIG9wdGlvbklkZW50aWZpZXIpfVwiXG4gICAgICAgICAgICBpc0hvdmVyPVwie2lzSXRlbUhvdmVyKGhvdmVySXRlbUluZGV4LCBpdGVtLCBpLCBpdGVtcyl9XCJcbiAgICAgICAgICAvPlxuICAgIDwvZGl2PlxuICBcbjwvVmlydHVhbExpc3Q+XG48L2Rpdj5cbnsvaWZ9XG5cbnsjaWYgIWlzVmlydHVhbExpc3R9XG48ZGl2IGNsYXNzPVwibGlzdENvbnRhaW5lclwiIGJpbmQ6dGhpcz17Y29udGFpbmVyfT5cbiAgeyNlYWNoIGl0ZW1zIGFzIGl0ZW0sIGl9XG4gICAgeyNpZiBpdGVtLmlzR3JvdXBIZWFkZXIgJiYgIWl0ZW0uaXNTZWxlY3RhYmxlfVxuICAgICAgPGRpdiBjbGFzcz1cImxpc3RHcm91cFRpdGxlXCI+e2dldEdyb3VwSGVhZGVyTGFiZWwoaXRlbSl9PC9kaXY+XG4gICAgeyA6ZWxzZSB9XG4gICAgPGRpdiBcbiAgICAgIG9uOm1vdXNlb3Zlcj1cInsoKSA9PiBoYW5kbGVIb3ZlcihpKX1cIiBcbiAgICAgIG9uOmNsaWNrPVwie2V2ZW50ID0+IGhhbmRsZUNsaWNrKHtpdGVtLCBpLCBldmVudH0pfVwiXG4gICAgICBjbGFzcz1cImxpc3RJdGVtXCJcbiAgICA+XG4gICAgICA8c3ZlbHRlOmNvbXBvbmVudCBcbiAgICAgICAgdGhpcz1cIntJdGVtfVwiXG4gICAgICAgIHtpdGVtfVxuICAgICAgICB7ZmlsdGVyVGV4dH1cbiAgICAgICAge2dldE9wdGlvbkxhYmVsfVxuICAgICAgICBpc0ZpcnN0PVwie2lzSXRlbUZpcnN0KGkpfVwiXG4gICAgICAgIGlzQWN0aXZlPVwie2lzSXRlbUFjdGl2ZShpdGVtLCBzZWxlY3RlZFZhbHVlLCBvcHRpb25JZGVudGlmaWVyKX1cIlxuICAgICAgICBpc0hvdmVyPVwie2lzSXRlbUhvdmVyKGhvdmVySXRlbUluZGV4LCBpdGVtLCBpLCBpdGVtcyl9XCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICAgey9pZn1cbiAgezplbHNlfVxuICAgIHsjaWYgIWhpZGVFbXB0eVN0YXRlfVxuICAgICAgPGRpdiBjbGFzcz1cImVtcHR5XCI+e25vT3B0aW9uc01lc3NhZ2V9PC9kaXY+XG4gICAgey9pZn1cbiAgey9lYWNofVxuPC9kaXY+XG57L2lmfVxuXG48c3R5bGU+XG4gIC5saXN0Q29udGFpbmVyIHtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1saXN0U2hhZG93LCAwIDJweCAzcHggMCByZ2JhKDQ0LCA2MiwgODAsIDAuMjQpKTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1saXN0Qm9yZGVyUmFkaXVzLCA0cHgpO1xuICAgIG1heC1oZWlnaHQ6IHZhcigtLWxpc3RNYXhIZWlnaHQsIDI1MHB4KTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpc3RCYWNrZ3JvdW5kLCAjZmZmKTtcbiAgfVxuXG4gIC52aXJ0dWFsTGlzdCB7XG4gICAgaGVpZ2h0OiB2YXIoLS12aXJ0dWFsTGlzdEhlaWdodCwgMjAwcHgpO1xuICB9XG5cbiAgLmxpc3RHcm91cFRpdGxlIHtcbiAgICBjb2xvcjogdmFyKC0tZ3JvdXBUaXRsZUNvbG9yLCAjOGY4ZjhmKTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgZm9udC1zaXplOiB2YXIoLS1ncm91cFRpdGxlRm9udFNpemUsIDEycHgpO1xuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1ncm91cFRpdGxlRm9udFdlaWdodCwgNjAwKTtcbiAgICBoZWlnaHQ6IHZhcigtLWhlaWdodCwgNDJweCk7XG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWhlaWdodCwgNDJweCk7XG4gICAgcGFkZGluZzogdmFyKC0tZ3JvdXBUaXRsZVBhZGRpbmcsIDAgMjBweCk7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHZhcigtLWdyb3VwVGl0bGVUZXh0VHJhbnNmb3JtLCB1cHBlcmNhc2UpO1xuICB9XG5cbiAgLmVtcHR5IHtcbiAgICB0ZXh0LWFsaWduOiB2YXIoLS1saXN0RW1wdHlUZXh0QWxpZ24sIGNlbnRlcik7XG4gICAgcGFkZGluZzogdmFyKC0tbGlzdEVtcHR5UGFkZGluZywgMjBweCAwKTtcbiAgICBjb2xvcjogdmFyKC0tbGlzdEVtcHR5Q29sb3IsICM3ODg0OEYpO1xuICB9XG48L3N0eWxlPlxuIiwiPHNjcmlwdD5cbiAgaW1wb3J0IHsgY3JlYXRlRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnc3ZlbHRlJztcblxuICBjb25zdCBkaXNwYXRjaCA9IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpO1xuXG4gIGV4cG9ydCBsZXQgc2VsZWN0ZWRWYWx1ZSA9IFtdO1xuICBleHBvcnQgbGV0IGFjdGl2ZVNlbGVjdGVkVmFsdWUgPSB1bmRlZmluZWQ7XG4gIGV4cG9ydCBsZXQgaXNEaXNhYmxlZCA9IGZhbHNlO1xuICBleHBvcnQgbGV0IGdldFNlbGVjdGlvbkxhYmVsID0gdW5kZWZpbmVkO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsZWFyKGksIGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZGlzcGF0Y2goJ211bHRpSXRlbUNsZWFyJywge2l9KTtcbiAgfVxuPC9zY3JpcHQ+XG5cbnsjZWFjaCBzZWxlY3RlZFZhbHVlIGFzIHZhbHVlLCBpfVxuPGRpdiBjbGFzcz1cIm11bHRpU2VsZWN0SXRlbSB7YWN0aXZlU2VsZWN0ZWRWYWx1ZSA9PT0gaSA/ICdhY3RpdmUnIDogJyd9IHtpc0Rpc2FibGVkID8gJ2Rpc2FibGVkJyA6ICcnfVwiPlxuICA8ZGl2IGNsYXNzPVwibXVsdGlTZWxlY3RJdGVtX2xhYmVsXCI+XG4gICAge0BodG1sIGdldFNlbGVjdGlvbkxhYmVsKHZhbHVlKX1cbiAgPC9kaXY+XG4gIHsjaWYgIWlzRGlzYWJsZWR9XG4gIDxkaXYgY2xhc3M9XCJtdWx0aVNlbGVjdEl0ZW1fY2xlYXJcIiBvbjpjbGljaz1cIntldmVudCA9PiBoYW5kbGVDbGVhcihpLCBldmVudCl9XCI+XG4gICAgPHN2ZyB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgdmlld0JveD1cIi0yIC0yIDUwIDUwXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTM0LjkyMywzNy4yNTFMMjQsMjYuMzI4TDEzLjA3NywzNy4yNTFMOS40MzYsMzMuNjFsMTAuOTIzLTEwLjkyM0w5LjQzNiwxMS43NjVsMy42NDEtMy42NDFMMjQsMTkuMDQ3TDM0LjkyMyw4LjEyNCBsMy42NDEsMy42NDFMMjcuNjQxLDIyLjY4OEwzOC41NjQsMzMuNjFMMzQuOTIzLDM3LjI1MXpcIj48L3BhdGg+XG4gICAgPC9zdmc+XG4gIDwvZGl2PlxuICB7L2lmfVxuPC9kaXY+XG57L2VhY2h9XG5cblxuXG48c3R5bGU+XG4gIC5tdWx0aVNlbGVjdEl0ZW0ge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLW11bHRpSXRlbUJHLCAjRUJFREVGKTtcbiAgICBtYXJnaW46IHZhcigtLW11bHRpSXRlbU1hcmdpbiwgNXB4IDVweCAwIDApO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLW11bHRpSXRlbUJvcmRlclJhZGl1cywgMTZweCk7XG4gICAgaGVpZ2h0OiB2YXIoLS1tdWx0aUl0ZW1IZWlnaHQsIDMycHgpO1xuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1tdWx0aUl0ZW1IZWlnaHQsIDMycHgpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIHBhZGRpbmc6IHZhcigtLW11bHRpSXRlbVBhZGRpbmcsIDAgMTBweCAwIDE1cHgpO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5tdWx0aVNlbGVjdEl0ZW1fbGFiZWwge1xuICAgIG1hcmdpbjogdmFyKC0tbXVsdGlMYWJlbE1hcmdpbiwgMCA1cHggMCAwKTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cblxuICAubXVsdGlTZWxlY3RJdGVtOmhvdmVyLFxuICAubXVsdGlTZWxlY3RJdGVtLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVsdGlJdGVtQWN0aXZlQkcsICMwMDZGRkYpO1xuICAgIGNvbG9yOiB2YXIoLS1tdWx0aUl0ZW1BY3RpdmVDb2xvciwgI2ZmZik7XG4gIH1cblxuICAubXVsdGlTZWxlY3RJdGVtLmRpc2FibGVkOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tdWx0aUl0ZW1EaXNhYmxlZEhvdmVyQmcsICNFQkVERUYpO1xuICAgIGNvbG9yOiB2YXIoLS1tdWx0aUl0ZW1EaXNhYmxlZEhvdmVyQ29sb3IsICNDMUM2Q0MpO1xuICB9XG5cbiAgLm11bHRpU2VsZWN0SXRlbV9jbGVhciB7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tbXVsdGlDbGVhclJhZGl1cywgNTAlKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tdWx0aUNsZWFyQkcsICM1MjYxNkYpO1xuICAgIG1pbi13aWR0aDogdmFyKC0tbXVsdGlDbGVhcldpZHRoLCAxNnB4KTtcbiAgICBtYXgtd2lkdGg6IHZhcigtLW11bHRpQ2xlYXJXaWR0aCwgMTZweCk7XG4gICAgaGVpZ2h0OiB2YXIoLS1tdWx0aUNsZWFySGVpZ2h0LCAxNnB4KTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiB2YXIoLS1tdWx0aUNsZWFyVG9wLCA4cHgpO1xuICAgIHRleHQtYWxpZ246IHZhcigtLW11bHRpQ2xlYXJUZXh0QWxpZ24sIGNlbnRlcik7XG4gICAgcGFkZGluZzogdmFyKC0tbXVsdGlDbGVhclBhZGRpbmcsIDFweCk7XG4gIH1cblxuICAubXVsdGlTZWxlY3RJdGVtX2NsZWFyOmhvdmVyLFxuICAuYWN0aXZlIC5tdWx0aVNlbGVjdEl0ZW1fY2xlYXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLW11bHRpQ2xlYXJIb3ZlckJHLCAjZmZmKTtcbiAgfVxuXG4gIC5tdWx0aVNlbGVjdEl0ZW1fY2xlYXI6aG92ZXIgc3ZnLFxuICAuYWN0aXZlIC5tdWx0aVNlbGVjdEl0ZW1fY2xlYXIgc3ZnIHtcbiAgICBmaWxsOiB2YXIoLS1tdWx0aUNsZWFySG92ZXJGaWxsLCAjMDA2RkZGKTtcbiAgfVxuXG4gIC5tdWx0aVNlbGVjdEl0ZW1fY2xlYXIgc3ZnIHtcbiAgICBmaWxsOiB2YXIoLS1tdWx0aUNsZWFyRmlsbCwgI0VCRURFRik7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgfVxuPC9zdHlsZT5cbiIsIjxzY3JpcHQ+XG4gIGltcG9ydCB7XG4gICAgYmVmb3JlVXBkYXRlLFxuICAgIGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcixcbiAgICBvbkRlc3Ryb3ksXG4gICAgb25Nb3VudCxcbiAgICB0aWNrXG4gIH0gZnJvbSBcInN2ZWx0ZVwiO1xuICBpbXBvcnQgTGlzdCBmcm9tIFwiLi9MaXN0LnN2ZWx0ZVwiO1xuICBpbXBvcnQgSXRlbUNvbXBvbmVudCBmcm9tIFwiLi9JdGVtLnN2ZWx0ZVwiO1xuICBpbXBvcnQgU2VsZWN0aW9uQ29tcG9uZW50IGZyb20gXCIuL1NlbGVjdGlvbi5zdmVsdGVcIjtcbiAgaW1wb3J0IE11bHRpU2VsZWN0aW9uQ29tcG9uZW50IGZyb20gXCIuL011bHRpU2VsZWN0aW9uLnN2ZWx0ZVwiO1xuICBpbXBvcnQgaXNPdXRPZlZpZXdwb3J0IGZyb20gXCIuL3V0aWxzL2lzT3V0T2ZWaWV3cG9ydFwiO1xuICBpbXBvcnQgZGVib3VuY2UgZnJvbSBcIi4vdXRpbHMvZGVib3VuY2VcIjtcblxuICBjb25zdCBkaXNwYXRjaCA9IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpO1xuICBleHBvcnQgbGV0IGNvbnRhaW5lciA9IHVuZGVmaW5lZDtcbiAgZXhwb3J0IGxldCBpbnB1dCA9IHVuZGVmaW5lZDtcbiAgZXhwb3J0IGxldCBJdGVtID0gSXRlbUNvbXBvbmVudDtcbiAgZXhwb3J0IGxldCBTZWxlY3Rpb24gPSBTZWxlY3Rpb25Db21wb25lbnQ7XG4gIGV4cG9ydCBsZXQgTXVsdGlTZWxlY3Rpb24gPSBNdWx0aVNlbGVjdGlvbkNvbXBvbmVudDtcbiAgZXhwb3J0IGxldCBpc011bHRpID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgaXNEaXNhYmxlZCA9IGZhbHNlO1xuICBleHBvcnQgbGV0IGlzQ3JlYXRhYmxlID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgaXNGb2N1c2VkID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgc2VsZWN0ZWRWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgZXhwb3J0IGxldCBmaWx0ZXJUZXh0ID0gXCJcIjtcbiAgZXhwb3J0IGxldCBwbGFjZWhvbGRlciA9IFwiU2VsZWN0Li4uXCI7XG4gIGV4cG9ydCBsZXQgaXRlbXMgPSBbXTtcbiAgZXhwb3J0IGxldCBpdGVtRmlsdGVyID0gKGxhYmVsLCBmaWx0ZXJUZXh0LCBvcHRpb24pID0+XG4gICAgbGFiZWwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhmaWx0ZXJUZXh0LnRvTG93ZXJDYXNlKCkpO1xuICBleHBvcnQgbGV0IGdyb3VwQnkgPSB1bmRlZmluZWQ7XG4gIGV4cG9ydCBsZXQgZ3JvdXBGaWx0ZXIgPSBncm91cHMgPT4gZ3JvdXBzO1xuICBleHBvcnQgbGV0IGlzR3JvdXBIZWFkZXJTZWxlY3RhYmxlID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgZ2V0R3JvdXBIZWFkZXJMYWJlbCA9IG9wdGlvbiA9PiB7XG4gICAgcmV0dXJuIG9wdGlvbi5sYWJlbDtcbiAgfTtcbiAgZXhwb3J0IGxldCBnZXRPcHRpb25MYWJlbCA9IChvcHRpb24sIGZpbHRlclRleHQpID0+IHtcbiAgICByZXR1cm4gb3B0aW9uLmlzQ3JlYXRvciA/IGBDcmVhdGUgXFxcIiR7ZmlsdGVyVGV4dH1cXFwiYCA6IG9wdGlvbi5sYWJlbDtcbiAgfTtcbiAgZXhwb3J0IGxldCBvcHRpb25JZGVudGlmaWVyID0gXCJ2YWx1ZVwiO1xuICBleHBvcnQgbGV0IGxvYWRPcHRpb25zID0gdW5kZWZpbmVkO1xuICBleHBvcnQgbGV0IGhhc0Vycm9yID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgY29udGFpbmVyU3R5bGVzID0gXCJcIjtcbiAgZXhwb3J0IGxldCBnZXRTZWxlY3Rpb25MYWJlbCA9IG9wdGlvbiA9PiB7XG4gICAgaWYgKG9wdGlvbikgcmV0dXJuIG9wdGlvbi5sYWJlbDtcbiAgfTtcblxuICBleHBvcnQgbGV0IGNyZWF0ZUdyb3VwSGVhZGVySXRlbSA9IGdyb3VwVmFsdWUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogZ3JvdXBWYWx1ZSxcbiAgICAgIGxhYmVsOiBncm91cFZhbHVlXG4gICAgfTtcbiAgfTtcblxuICBleHBvcnQgbGV0IGNyZWF0ZUl0ZW0gPSBmaWx0ZXJUZXh0ID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IGZpbHRlclRleHQsXG4gICAgICBsYWJlbDogZmlsdGVyVGV4dFxuICAgIH07XG4gIH07XG5cbiAgZXhwb3J0IGxldCBpc1NlYXJjaGFibGUgPSB0cnVlO1xuICBleHBvcnQgbGV0IGlucHV0U3R5bGVzID0gXCJcIjtcbiAgZXhwb3J0IGxldCBpc0NsZWFyYWJsZSA9IHRydWU7XG4gIGV4cG9ydCBsZXQgaXNXYWl0aW5nID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgbGlzdFBsYWNlbWVudCA9IFwiYXV0b1wiO1xuICBleHBvcnQgbGV0IGxpc3RPcGVuID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgbGlzdCA9IHVuZGVmaW5lZDtcbiAgZXhwb3J0IGxldCBpc1ZpcnR1YWxMaXN0ID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgbG9hZE9wdGlvbnNJbnRlcnZhbCA9IDMwMDtcbiAgZXhwb3J0IGxldCBub09wdGlvbnNNZXNzYWdlID0gXCJObyBvcHRpb25zXCI7XG4gIGV4cG9ydCBsZXQgaGlkZUVtcHR5U3RhdGUgPSBmYWxzZTtcbiAgZXhwb3J0IGxldCBmaWx0ZXJlZEl0ZW1zID0gW107XG4gIGV4cG9ydCBsZXQgaW5wdXRBdHRyaWJ1dGVzID0ge307XG4gIGV4cG9ydCBsZXQgbGlzdEF1dG9XaWR0aCA9IHRydWU7XG4gIGV4cG9ydCBsZXQgaXRlbUhlaWdodCA9IDQwO1xuICBleHBvcnQgbGV0IEljb24gPSB1bmRlZmluZWQ7XG4gIGV4cG9ydCBsZXQgaWNvblByb3BzID0ge307XG4gIGV4cG9ydCBsZXQgc2hvd0NoZXZyb24gPSBmYWxzZTtcbiAgZXhwb3J0IGxldCBzaG93SW5kaWNhdG9yID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgY29udGFpbmVyQ2xhc3NlcyA9IFwiXCI7XG4gIGV4cG9ydCBsZXQgaW5kaWNhdG9yU3ZnID0gdW5kZWZpbmVkO1xuXG4gIGxldCB0YXJnZXQ7XG4gIGxldCBhY3RpdmVTZWxlY3RlZFZhbHVlO1xuICBsZXQgX2l0ZW1zID0gW107XG4gIGxldCBvcmlnaW5hbEl0ZW1zQ2xvbmU7XG4gIGxldCBwcmV2X3NlbGVjdGVkVmFsdWU7XG4gIGxldCBwcmV2X2xpc3RPcGVuO1xuICBsZXQgcHJldl9maWx0ZXJUZXh0O1xuICBsZXQgcHJldl9pc0ZvY3VzZWQ7XG4gIGxldCBwcmV2X2ZpbHRlcmVkSXRlbXM7XG5cbiAgYXN5bmMgZnVuY3Rpb24gcmVzZXRGaWx0ZXIoKSB7XG4gICAgYXdhaXQgdGljaygpO1xuICAgIGZpbHRlclRleHQgPSBcIlwiO1xuICB9XG5cbiAgbGV0IGdldEl0ZW1zSGFzSW52b2tlZCA9IGZhbHNlO1xuICBjb25zdCBnZXRJdGVtcyA9IGRlYm91bmNlKGFzeW5jICgpID0+IHtcbiAgICBnZXRJdGVtc0hhc0ludm9rZWQgPSB0cnVlO1xuICAgIGlzV2FpdGluZyA9IHRydWU7XG5cbiAgICBsZXQgcmVzID0gYXdhaXQgbG9hZE9wdGlvbnMoZmlsdGVyVGV4dCkuY2F0Y2goZXJyID0+IHtcbiAgICAgIGNvbnNvbGUud2Fybignc3ZlbHRlLXNlbGVjdCBsb2FkT3B0aW9ucyBlcnJvciA6Pj4gJywgZXJyKTtcbiAgICAgIGRpc3BhdGNoKFwiZXJyb3JcIiwgeyB0eXBlOiAnbG9hZE9wdGlvbnMnLCBkZXRhaWxzOiBlcnIgfSk7XG4gICAgfSk7XG5cbiAgICBpZiAocmVzKSB7IFxuICAgICAgaXRlbXMgPSBbLi4ucmVzXTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXRlbXMgPSBbXTtcbiAgICB9XG5cbiAgICBpc1dhaXRpbmcgPSBmYWxzZTtcbiAgICBpc0ZvY3VzZWQgPSB0cnVlO1xuICAgIGxpc3RPcGVuID0gdHJ1ZTtcbiAgfSwgbG9hZE9wdGlvbnNJbnRlcnZhbCk7XG5cbiAgJDogZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuXG4gICQ6IHtcbiAgICBpZiAodHlwZW9mIHNlbGVjdGVkVmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHNlbGVjdGVkVmFsdWUgPSB7XG4gICAgICAgIFtvcHRpb25JZGVudGlmaWVyXTogc2VsZWN0ZWRWYWx1ZSxcbiAgICAgICAgbGFiZWw6IHNlbGVjdGVkVmFsdWVcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChpc011bHRpICYmIEFycmF5LmlzQXJyYXkoc2VsZWN0ZWRWYWx1ZSkgJiYgc2VsZWN0ZWRWYWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICBzZWxlY3RlZFZhbHVlID0gc2VsZWN0ZWRWYWx1ZS5tYXAoaXRlbSA9PiB0eXBlb2YgaXRlbSA9PT0gXCJzdHJpbmdcIiA/ICh7IHZhbHVlOiBpdGVtLCBsYWJlbDogaXRlbSB9KSA6IGl0ZW0pO1xuICAgIH1cbiAgfVxuXG4gICQ6IHtcbiAgICBpZiAobm9PcHRpb25zTWVzc2FnZSAmJiBsaXN0KSBsaXN0LiRzZXQoeyBub09wdGlvbnNNZXNzYWdlIH0pO1xuICB9XG5cbiAgJDogc2hvd1NlbGVjdGVkSXRlbSA9IHNlbGVjdGVkVmFsdWUgJiYgZmlsdGVyVGV4dC5sZW5ndGggPT09IDA7XG5cbiAgJDogcGxhY2Vob2xkZXJUZXh0ID0gc2VsZWN0ZWRWYWx1ZSA/IFwiXCIgOiBwbGFjZWhvbGRlcjtcblxuICBsZXQgX2lucHV0QXR0cmlidXRlcyA9IHt9O1xuICAkOiB7XG4gICAgX2lucHV0QXR0cmlidXRlcyA9IE9iamVjdC5hc3NpZ24oaW5wdXRBdHRyaWJ1dGVzLCB7XG4gICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICBhdXRvY29ycmVjdDogXCJvZmZcIixcbiAgICAgIHNwZWxsY2hlY2s6IGZhbHNlXG4gICAgfSk7XG5cbiAgICBpZiAoIWlzU2VhcmNoYWJsZSkge1xuICAgICAgX2lucHV0QXR0cmlidXRlcy5yZWFkb25seSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgJDoge1xuICAgIGxldCBfZmlsdGVyZWRJdGVtcztcbiAgICBsZXQgX2l0ZW1zID0gaXRlbXM7XG5cbiAgICBpZiAoaXRlbXMgJiYgaXRlbXMubGVuZ3RoID4gMCAmJiB0eXBlb2YgaXRlbXNbMF0gIT09IFwib2JqZWN0XCIpIHtcbiAgICAgIF9pdGVtcyA9IGl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpbmRleCxcbiAgICAgICAgICB2YWx1ZTogaXRlbSxcbiAgICAgICAgICBsYWJlbDogaXRlbVxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGxvYWRPcHRpb25zICYmIGZpbHRlclRleHQubGVuZ3RoID09PSAwICYmIG9yaWdpbmFsSXRlbXNDbG9uZSkge1xuICAgICAgX2ZpbHRlcmVkSXRlbXMgPSBKU09OLnBhcnNlKG9yaWdpbmFsSXRlbXNDbG9uZSk7XG4gICAgICBfaXRlbXMgPSBKU09OLnBhcnNlKG9yaWdpbmFsSXRlbXNDbG9uZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIF9maWx0ZXJlZEl0ZW1zID0gbG9hZE9wdGlvbnNcbiAgICAgICAgPyBmaWx0ZXJUZXh0Lmxlbmd0aCA9PT0gMFxuICAgICAgICAgID8gW11cbiAgICAgICAgICA6IF9pdGVtc1xuICAgICAgICA6IF9pdGVtcy5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgICAgICBsZXQga2VlcEl0ZW0gPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAoaXNNdWx0aSAmJiBzZWxlY3RlZFZhbHVlKSB7XG4gICAgICAgICAgICAgIGtlZXBJdGVtID0gIXNlbGVjdGVkVmFsdWUuc29tZSh2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlW29wdGlvbklkZW50aWZpZXJdID09PSBpdGVtW29wdGlvbklkZW50aWZpZXJdO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFrZWVwSXRlbSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgaWYgKGZpbHRlclRleHQubGVuZ3RoIDwgMSkgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICByZXR1cm4gaXRlbUZpbHRlcihcbiAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWwoaXRlbSwgZmlsdGVyVGV4dCksXG4gICAgICAgICAgICAgIGZpbHRlclRleHQsXG4gICAgICAgICAgICAgIGl0ZW1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGdyb3VwQnkpIHtcbiAgICAgIGNvbnN0IGdyb3VwVmFsdWVzID0gW107XG4gICAgICBjb25zdCBncm91cHMgPSB7fTtcblxuICAgICAgX2ZpbHRlcmVkSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgY29uc3QgZ3JvdXBWYWx1ZSA9IGdyb3VwQnkoaXRlbSk7XG5cbiAgICAgICAgaWYgKCFncm91cFZhbHVlcy5pbmNsdWRlcyhncm91cFZhbHVlKSkge1xuICAgICAgICAgIGdyb3VwVmFsdWVzLnB1c2goZ3JvdXBWYWx1ZSk7XG4gICAgICAgICAgZ3JvdXBzW2dyb3VwVmFsdWVdID0gW107XG5cbiAgICAgICAgICBpZiAoZ3JvdXBWYWx1ZSkge1xuICAgICAgICAgICAgZ3JvdXBzW2dyb3VwVmFsdWVdLnB1c2goXG4gICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oY3JlYXRlR3JvdXBIZWFkZXJJdGVtKGdyb3VwVmFsdWUsIGl0ZW0pLCB7XG4gICAgICAgICAgICAgICAgaWQ6IGdyb3VwVmFsdWUsXG4gICAgICAgICAgICAgICAgaXNHcm91cEhlYWRlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpc1NlbGVjdGFibGU6IGlzR3JvdXBIZWFkZXJTZWxlY3RhYmxlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGdyb3Vwc1tncm91cFZhbHVlXS5wdXNoKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oeyBpc0dyb3VwSXRlbTogISFncm91cFZhbHVlIH0sIGl0ZW0pXG4gICAgICAgICk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgc29ydGVkR3JvdXBlZEl0ZW1zID0gW107XG5cbiAgICAgIGdyb3VwRmlsdGVyKGdyb3VwVmFsdWVzKS5mb3JFYWNoKGdyb3VwVmFsdWUgPT4ge1xuICAgICAgICBzb3J0ZWRHcm91cGVkSXRlbXMucHVzaCguLi5ncm91cHNbZ3JvdXBWYWx1ZV0pO1xuICAgICAgfSk7XG5cbiAgICAgIGZpbHRlcmVkSXRlbXMgPSBzb3J0ZWRHcm91cGVkSXRlbXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpbHRlcmVkSXRlbXMgPSBfZmlsdGVyZWRJdGVtcztcbiAgICB9XG4gIH1cblxuICBiZWZvcmVVcGRhdGUoKCkgPT4ge1xuICAgIGlmIChpc011bHRpICYmIHNlbGVjdGVkVmFsdWUgJiYgc2VsZWN0ZWRWYWx1ZS5sZW5ndGggPiAxKSB7XG4gICAgICBjaGVja1NlbGVjdGVkVmFsdWVGb3JEdXBsaWNhdGVzKCk7XG4gICAgfVxuXG4gICAgaWYgKCFpc011bHRpICYmIHNlbGVjdGVkVmFsdWUgJiYgcHJldl9zZWxlY3RlZFZhbHVlICE9PSBzZWxlY3RlZFZhbHVlKSB7XG4gICAgICBpZiAoXG4gICAgICAgICFwcmV2X3NlbGVjdGVkVmFsdWUgfHxcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoc2VsZWN0ZWRWYWx1ZVtvcHRpb25JZGVudGlmaWVyXSkgIT09XG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkocHJldl9zZWxlY3RlZFZhbHVlW29wdGlvbklkZW50aWZpZXJdKVxuICAgICAgKSB7XG4gICAgICAgIGRpc3BhdGNoKFwic2VsZWN0XCIsIHNlbGVjdGVkVmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGlzTXVsdGkgJiZcbiAgICAgIEpTT04uc3RyaW5naWZ5KHNlbGVjdGVkVmFsdWUpICE9PSBKU09OLnN0cmluZ2lmeShwcmV2X3NlbGVjdGVkVmFsdWUpXG4gICAgKSB7XG4gICAgICBpZiAoY2hlY2tTZWxlY3RlZFZhbHVlRm9yRHVwbGljYXRlcygpKSB7XG4gICAgICAgIGRpc3BhdGNoKFwic2VsZWN0XCIsIHNlbGVjdGVkVmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb250YWluZXIgJiYgbGlzdE9wZW4gIT09IHByZXZfbGlzdE9wZW4pIHtcbiAgICAgIGlmIChsaXN0T3Blbikge1xuICAgICAgICBsb2FkTGlzdCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVtb3ZlTGlzdCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmaWx0ZXJUZXh0ICE9PSBwcmV2X2ZpbHRlclRleHQpIHtcbiAgICAgIGlmIChmaWx0ZXJUZXh0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgaXNGb2N1c2VkID0gdHJ1ZTtcbiAgICAgICAgbGlzdE9wZW4gPSB0cnVlO1xuXG4gICAgICAgIGlmIChsb2FkT3B0aW9ucykge1xuICAgICAgICAgIGdldEl0ZW1zKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbG9hZExpc3QoKTtcbiAgICAgICAgICBsaXN0T3BlbiA9IHRydWU7XG5cbiAgICAgICAgICBpZiAoaXNNdWx0aSkge1xuICAgICAgICAgICAgYWN0aXZlU2VsZWN0ZWRWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldExpc3QoW10pO1xuICAgICAgfVxuXG4gICAgICBpZiAobGlzdCkge1xuICAgICAgICBsaXN0LiRzZXQoe1xuICAgICAgICAgIGZpbHRlclRleHRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzRm9jdXNlZCAhPT0gcHJldl9pc0ZvY3VzZWQpIHtcbiAgICAgIGlmIChpc0ZvY3VzZWQgfHwgbGlzdE9wZW4pIHtcbiAgICAgICAgaGFuZGxlRm9jdXMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc2V0RmlsdGVyKCk7XG4gICAgICAgIGlmIChpbnB1dCkgaW5wdXQuYmx1cigpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcmV2X2ZpbHRlcmVkSXRlbXMgIT09IGZpbHRlcmVkSXRlbXMpIHtcbiAgICAgIGxldCBfZmlsdGVyZWRJdGVtcyA9IFsuLi5maWx0ZXJlZEl0ZW1zXTtcblxuICAgICAgaWYgKGlzQ3JlYXRhYmxlICYmIGZpbHRlclRleHQpIHtcbiAgICAgICAgY29uc3QgaXRlbVRvQ3JlYXRlID0gY3JlYXRlSXRlbShmaWx0ZXJUZXh0KTtcbiAgICAgICAgaXRlbVRvQ3JlYXRlLmlzQ3JlYXRvciA9IHRydWU7XG5cbiAgICAgICAgY29uc3QgZXhpc3RpbmdJdGVtV2l0aEZpbHRlclZhbHVlID0gX2ZpbHRlcmVkSXRlbXMuZmluZChpdGVtID0+IHtcbiAgICAgICAgICByZXR1cm4gaXRlbVtvcHRpb25JZGVudGlmaWVyXSA9PT0gaXRlbVRvQ3JlYXRlW29wdGlvbklkZW50aWZpZXJdO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgZXhpc3RpbmdTZWxlY3Rpb25XaXRoRmlsdGVyVmFsdWU7XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkVmFsdWUpIHtcbiAgICAgICAgICBpZiAoaXNNdWx0aSkge1xuICAgICAgICAgICAgZXhpc3RpbmdTZWxlY3Rpb25XaXRoRmlsdGVyVmFsdWUgPSBzZWxlY3RlZFZhbHVlLmZpbmQoc2VsZWN0aW9uID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb25bb3B0aW9uSWRlbnRpZmllcl0gPT09IGl0ZW1Ub0NyZWF0ZVtvcHRpb25JZGVudGlmaWVyXVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgIHNlbGVjdGVkVmFsdWVbb3B0aW9uSWRlbnRpZmllcl0gPT09IGl0ZW1Ub0NyZWF0ZVtvcHRpb25JZGVudGlmaWVyXVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgZXhpc3RpbmdTZWxlY3Rpb25XaXRoRmlsdGVyVmFsdWUgPSBzZWxlY3RlZFZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZXhpc3RpbmdJdGVtV2l0aEZpbHRlclZhbHVlICYmICFleGlzdGluZ1NlbGVjdGlvbldpdGhGaWx0ZXJWYWx1ZSkge1xuICAgICAgICAgIF9maWx0ZXJlZEl0ZW1zID0gWy4uLl9maWx0ZXJlZEl0ZW1zLCBpdGVtVG9DcmVhdGVdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHNldExpc3QoX2ZpbHRlcmVkSXRlbXMpO1xuICAgIH1cblxuICAgIHByZXZfc2VsZWN0ZWRWYWx1ZSA9IHNlbGVjdGVkVmFsdWU7XG4gICAgcHJldl9saXN0T3BlbiA9IGxpc3RPcGVuO1xuICAgIHByZXZfZmlsdGVyVGV4dCA9IGZpbHRlclRleHQ7XG4gICAgcHJldl9pc0ZvY3VzZWQgPSBpc0ZvY3VzZWQ7XG4gICAgcHJldl9maWx0ZXJlZEl0ZW1zID0gZmlsdGVyZWRJdGVtcztcbiAgfSk7XG5cbiAgZnVuY3Rpb24gY2hlY2tTZWxlY3RlZFZhbHVlRm9yRHVwbGljYXRlcygpIHtcbiAgICBsZXQgbm9EdXBsaWNhdGVzID0gdHJ1ZTtcbiAgICBpZiAoc2VsZWN0ZWRWYWx1ZSkge1xuICAgICAgY29uc3QgaWRzID0gW107XG4gICAgICBjb25zdCB1bmlxdWVWYWx1ZXMgPSBbXTtcblxuICAgICAgc2VsZWN0ZWRWYWx1ZS5mb3JFYWNoKHZhbCA9PiB7XG4gICAgICAgIGlmICghaWRzLmluY2x1ZGVzKHZhbFtvcHRpb25JZGVudGlmaWVyXSkpIHtcbiAgICAgICAgICBpZHMucHVzaCh2YWxbb3B0aW9uSWRlbnRpZmllcl0pO1xuICAgICAgICAgIHVuaXF1ZVZhbHVlcy5wdXNoKHZhbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9EdXBsaWNhdGVzID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIW5vRHVwbGljYXRlcylcbiAgICAgICAgc2VsZWN0ZWRWYWx1ZSA9IHVuaXF1ZVZhbHVlcztcbiAgICB9XG4gICAgcmV0dXJuIG5vRHVwbGljYXRlcztcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHNldExpc3QoaXRlbXMpIHtcbiAgICBhd2FpdCB0aWNrKCk7XG4gICAgaWYgKGxpc3QpIHJldHVybiBsaXN0LiRzZXQoeyBpdGVtcyB9KTtcbiAgICBpZiAobG9hZE9wdGlvbnMgJiYgZ2V0SXRlbXNIYXNJbnZva2VkICYmIGl0ZW1zLmxlbmd0aCA+IDApIGxvYWRMaXN0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVNdWx0aUl0ZW1DbGVhcihldmVudCkge1xuICAgIGNvbnN0IHsgZGV0YWlsIH0gPSBldmVudDtcbiAgICBjb25zdCBpdGVtVG9SZW1vdmUgPVxuICAgICAgc2VsZWN0ZWRWYWx1ZVtkZXRhaWwgPyBkZXRhaWwuaSA6IHNlbGVjdGVkVmFsdWUubGVuZ3RoIC0gMV07XG5cbiAgICBpZiAoc2VsZWN0ZWRWYWx1ZS5sZW5ndGggPT09IDEpIHtcbiAgICAgIHNlbGVjdGVkVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGVjdGVkVmFsdWUgPSBzZWxlY3RlZFZhbHVlLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgcmV0dXJuIGl0ZW0gIT09IGl0ZW1Ub1JlbW92ZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGRpc3BhdGNoKFwiY2xlYXJcIiwgaXRlbVRvUmVtb3ZlKTtcblxuICAgIGdldFBvc2l0aW9uKCk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBnZXRQb3NpdGlvbigpIHtcbiAgICBhd2FpdCB0aWNrKCk7XG4gICAgaWYgKCF0YXJnZXQgfHwgIWNvbnRhaW5lcikgcmV0dXJuO1xuICAgIGNvbnN0IHsgdG9wLCBoZWlnaHQsIHdpZHRoIH0gPSBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICB0YXJnZXQuc3R5bGVbXCJtaW4td2lkdGhcIl0gPSBgJHt3aWR0aH1weGA7XG4gICAgdGFyZ2V0LnN0eWxlLndpZHRoID0gYCR7bGlzdEF1dG9XaWR0aCA/IFwiYXV0b1wiIDogXCIxMDAlXCJ9YDtcbiAgICB0YXJnZXQuc3R5bGUubGVmdCA9IFwiMFwiO1xuXG4gICAgaWYgKGxpc3RQbGFjZW1lbnQgPT09IFwidG9wXCIpIHtcbiAgICAgIHRhcmdldC5zdHlsZS5ib3R0b20gPSBgJHtoZWlnaHQgKyA1fXB4YDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFyZ2V0LnN0eWxlLnRvcCA9IGAke2hlaWdodCArIDV9cHhgO1xuICAgIH1cblxuICAgIHRhcmdldCA9IHRhcmdldDtcblxuICAgIGlmIChsaXN0UGxhY2VtZW50ID09PSBcImF1dG9cIiAmJiBpc091dE9mVmlld3BvcnQodGFyZ2V0KS5ib3R0b20pIHtcbiAgICAgIHRhcmdldC5zdHlsZS50b3AgPSBgYDtcbiAgICAgIHRhcmdldC5zdHlsZS5ib3R0b20gPSBgJHtoZWlnaHQgKyA1fXB4YDtcbiAgICB9XG5cbiAgICB0YXJnZXQuc3R5bGUudmlzaWJpbGl0eSA9IFwiXCI7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVLZXlEb3duKGUpIHtcbiAgICBpZiAoIWlzRm9jdXNlZCkgcmV0dXJuO1xuXG4gICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgY2FzZSBcIkFycm93RG93blwiOlxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxpc3RPcGVuID0gdHJ1ZTtcbiAgICAgICAgYWN0aXZlU2VsZWN0ZWRWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiQXJyb3dVcFwiOlxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxpc3RPcGVuID0gdHJ1ZTtcbiAgICAgICAgYWN0aXZlU2VsZWN0ZWRWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiVGFiXCI6XG4gICAgICAgIGlmICghbGlzdE9wZW4pIGlzRm9jdXNlZCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJCYWNrc3BhY2VcIjpcbiAgICAgICAgaWYgKCFpc011bHRpIHx8IGZpbHRlclRleHQubGVuZ3RoID4gMCkgcmV0dXJuO1xuICAgICAgICBpZiAoaXNNdWx0aSAmJiBzZWxlY3RlZFZhbHVlICYmIHNlbGVjdGVkVmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGhhbmRsZU11bHRpSXRlbUNsZWFyKFxuICAgICAgICAgICAgYWN0aXZlU2VsZWN0ZWRWYWx1ZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgID8gYWN0aXZlU2VsZWN0ZWRWYWx1ZVxuICAgICAgICAgICAgICA6IHNlbGVjdGVkVmFsdWUubGVuZ3RoIC0gMVxuICAgICAgICAgICk7XG4gICAgICAgICAgaWYgKGFjdGl2ZVNlbGVjdGVkVmFsdWUgPT09IDAgfHwgYWN0aXZlU2VsZWN0ZWRWYWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgYWN0aXZlU2VsZWN0ZWRWYWx1ZSA9XG4gICAgICAgICAgICBzZWxlY3RlZFZhbHVlLmxlbmd0aCA+IGFjdGl2ZVNlbGVjdGVkVmFsdWVcbiAgICAgICAgICAgICAgPyBhY3RpdmVTZWxlY3RlZFZhbHVlIC0gMVxuICAgICAgICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcbiAgICAgICAgaWYgKGxpc3QpIGxpc3QuJHNldCh7IGhvdmVySXRlbUluZGV4OiAtMSB9KTtcbiAgICAgICAgaWYgKCFpc011bHRpIHx8IGZpbHRlclRleHQubGVuZ3RoID4gMCkgcmV0dXJuO1xuXG4gICAgICAgIGlmIChhY3RpdmVTZWxlY3RlZFZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBhY3RpdmVTZWxlY3RlZFZhbHVlID0gc2VsZWN0ZWRWYWx1ZS5sZW5ndGggLSAxO1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIHNlbGVjdGVkVmFsdWUubGVuZ3RoID4gYWN0aXZlU2VsZWN0ZWRWYWx1ZSAmJlxuICAgICAgICAgIGFjdGl2ZVNlbGVjdGVkVmFsdWUgIT09IDBcbiAgICAgICAgKSB7XG4gICAgICAgICAgYWN0aXZlU2VsZWN0ZWRWYWx1ZSAtPSAxO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjpcbiAgICAgICAgaWYgKGxpc3QpIGxpc3QuJHNldCh7IGhvdmVySXRlbUluZGV4OiAtMSB9KTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICFpc011bHRpIHx8XG4gICAgICAgICAgZmlsdGVyVGV4dC5sZW5ndGggPiAwIHx8XG4gICAgICAgICAgYWN0aXZlU2VsZWN0ZWRWYWx1ZSA9PT0gdW5kZWZpbmVkXG4gICAgICAgIClcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmIChhY3RpdmVTZWxlY3RlZFZhbHVlID09PSBzZWxlY3RlZFZhbHVlLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICBhY3RpdmVTZWxlY3RlZFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICB9IGVsc2UgaWYgKGFjdGl2ZVNlbGVjdGVkVmFsdWUgPCBzZWxlY3RlZFZhbHVlLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICBhY3RpdmVTZWxlY3RlZFZhbHVlICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlRm9jdXMoKSB7XG4gICAgaXNGb2N1c2VkID0gdHJ1ZTtcbiAgICBpZiAoaW5wdXQpIGlucHV0LmZvY3VzKCk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVMaXN0KCkge1xuICAgIHJlc2V0RmlsdGVyKCk7XG4gICAgYWN0aXZlU2VsZWN0ZWRWYWx1ZSA9IHVuZGVmaW5lZDtcblxuICAgIGlmICghbGlzdCkgcmV0dXJuO1xuICAgIGxpc3QuJGRlc3Ryb3koKTtcbiAgICBsaXN0ID0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKCF0YXJnZXQpIHJldHVybjtcbiAgICBpZiAodGFyZ2V0LnBhcmVudE5vZGUpIHRhcmdldC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRhcmdldCk7XG4gICAgdGFyZ2V0ID0gdW5kZWZpbmVkO1xuXG4gICAgbGlzdCA9IGxpc3Q7XG4gICAgdGFyZ2V0ID0gdGFyZ2V0O1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlV2luZG93Q2xpY2soZXZlbnQpIHtcbiAgICBpZiAoIWNvbnRhaW5lcikgcmV0dXJuO1xuICAgIGNvbnN0IGV2ZW50VGFyZ2V0ID1cbiAgICAgIGV2ZW50LnBhdGggJiYgZXZlbnQucGF0aC5sZW5ndGggPiAwID8gZXZlbnQucGF0aFswXSA6IGV2ZW50LnRhcmdldDtcbiAgICBpZiAoY29udGFpbmVyLmNvbnRhaW5zKGV2ZW50VGFyZ2V0KSkgcmV0dXJuO1xuICAgIGlzRm9jdXNlZCA9IGZhbHNlO1xuICAgIGxpc3RPcGVuID0gZmFsc2U7XG4gICAgYWN0aXZlU2VsZWN0ZWRWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICBpZiAoaW5wdXQpIGlucHV0LmJsdXIoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xuICAgIGlmIChpc0Rpc2FibGVkKSByZXR1cm47XG4gICAgaXNGb2N1c2VkID0gdHJ1ZTtcbiAgICBsaXN0T3BlbiA9ICFsaXN0T3BlbjtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBoYW5kbGVDbGVhcigpIHtcbiAgICBzZWxlY3RlZFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIGxpc3RPcGVuID0gZmFsc2U7XG4gICAgZGlzcGF0Y2goXCJjbGVhclwiLCBzZWxlY3RlZFZhbHVlKTtcbiAgICBoYW5kbGVGb2N1cygpO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gbG9hZExpc3QoKSB7XG4gICAgYXdhaXQgdGljaygpO1xuICAgIGlmICh0YXJnZXQgJiYgbGlzdCkgcmV0dXJuO1xuXG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIEl0ZW0sXG4gICAgICBmaWx0ZXJUZXh0LFxuICAgICAgb3B0aW9uSWRlbnRpZmllcixcbiAgICAgIG5vT3B0aW9uc01lc3NhZ2UsXG4gICAgICBoaWRlRW1wdHlTdGF0ZSxcbiAgICAgIGlzVmlydHVhbExpc3QsXG4gICAgICBzZWxlY3RlZFZhbHVlLFxuICAgICAgaXNNdWx0aSxcbiAgICAgIGdldEdyb3VwSGVhZGVyTGFiZWwsXG4gICAgICBpdGVtczogZmlsdGVyZWRJdGVtcyxcbiAgICAgIGl0ZW1IZWlnaHRcbiAgICB9O1xuXG4gICAgaWYgKGdldE9wdGlvbkxhYmVsKSB7XG4gICAgICBkYXRhLmdldE9wdGlvbkxhYmVsID0gZ2V0T3B0aW9uTGFiZWw7XG4gICAgfVxuXG4gICAgdGFyZ2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LnN0eWxlLCB7XG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgXCJ6LWluZGV4XCI6IDIsXG4gICAgICB2aXNpYmlsaXR5OiBcImhpZGRlblwiXG4gICAgfSk7XG5cbiAgICBsaXN0ID0gbGlzdDtcbiAgICB0YXJnZXQgPSB0YXJnZXQ7XG4gICAgaWYgKGNvbnRhaW5lcikgY29udGFpbmVyLmFwcGVuZENoaWxkKHRhcmdldCk7XG5cbiAgICBsaXN0ID0gbmV3IExpc3Qoe1xuICAgICAgdGFyZ2V0LFxuICAgICAgcHJvcHM6IGRhdGFcbiAgICB9KTtcblxuICAgIGxpc3QuJG9uKFwiaXRlbVNlbGVjdGVkXCIsIGV2ZW50ID0+IHtcbiAgICAgIGNvbnN0IHsgZGV0YWlsIH0gPSBldmVudDtcblxuICAgICAgaWYgKGRldGFpbCkge1xuICAgICAgICBjb25zdCBpdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgZGV0YWlsKTtcblxuICAgICAgICBpZiAoIWl0ZW0uaXNHcm91cEhlYWRlciB8fCBpdGVtLmlzU2VsZWN0YWJsZSkge1xuXG4gICAgICAgICAgaWYgKGlzTXVsdGkpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkVmFsdWUgPSBzZWxlY3RlZFZhbHVlID8gc2VsZWN0ZWRWYWx1ZS5jb25jYXQoW2l0ZW1dKSA6IFtpdGVtXTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZWN0ZWRWYWx1ZSA9IGl0ZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVzZXRGaWx0ZXIoKTtcbiAgICAgICAgICBzZWxlY3RlZFZhbHVlID0gc2VsZWN0ZWRWYWx1ZTtcblxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgbGlzdE9wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIGFjdGl2ZVNlbGVjdGVkVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGxpc3QuJG9uKFwiaXRlbUNyZWF0ZWRcIiwgZXZlbnQgPT4ge1xuICAgICAgY29uc3QgeyBkZXRhaWwgfSA9IGV2ZW50O1xuICAgICAgaWYgKGlzTXVsdGkpIHtcbiAgICAgICAgc2VsZWN0ZWRWYWx1ZSA9IHNlbGVjdGVkVmFsdWUgfHwgW107XG4gICAgICAgIHNlbGVjdGVkVmFsdWUgPSBbLi4uc2VsZWN0ZWRWYWx1ZSwgY3JlYXRlSXRlbShkZXRhaWwpXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGVjdGVkVmFsdWUgPSBjcmVhdGVJdGVtKGRldGFpbCk7XG4gICAgICB9XG5cbiAgICAgIGZpbHRlclRleHQgPSBcIlwiO1xuICAgICAgbGlzdE9wZW4gPSBmYWxzZTtcbiAgICAgIGFjdGl2ZVNlbGVjdGVkVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICByZXNldEZpbHRlcigpO1xuICAgIH0pO1xuXG4gICAgbGlzdC4kb24oXCJjbG9zZUxpc3RcIiwgKCkgPT4ge1xuICAgICAgbGlzdE9wZW4gPSBmYWxzZTtcbiAgICB9KTtcblxuICAgIChsaXN0ID0gbGlzdCksICh0YXJnZXQgPSB0YXJnZXQpO1xuICAgIGdldFBvc2l0aW9uKCk7XG4gIH1cblxuICBvbk1vdW50KCgpID0+IHtcbiAgICBpZiAoaXNGb2N1c2VkKSBpbnB1dC5mb2N1cygpO1xuICAgIGlmIChsaXN0T3BlbikgbG9hZExpc3QoKTtcblxuICAgIGlmIChpdGVtcyAmJiBpdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICBvcmlnaW5hbEl0ZW1zQ2xvbmUgPSBKU09OLnN0cmluZ2lmeShpdGVtcyk7XG4gICAgfVxuICB9KTtcblxuICBvbkRlc3Ryb3koKCkgPT4ge1xuICAgIHJlbW92ZUxpc3QoKTtcbiAgfSk7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAuc2VsZWN0Q29udGFpbmVyIHtcbiAgICAtLXBhZGRpbmc6IDAgMTZweDtcblxuICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyLCAxcHggc29saWQgI2Q4ZGJkZik7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyUmFkaXVzLCAzcHgpO1xuICAgIGhlaWdodDogdmFyKC0taGVpZ2h0LCA0MnB4KTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IHZhcigtLXBhZGRpbmcpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQsICNmZmYpO1xuICB9XG5cbiAgLnNlbGVjdENvbnRhaW5lciBpbnB1dCB7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogdmFyKC0taW5wdXRDb2xvciwgIzNmNGY1Zik7XG4gICAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQsIDQycHgpO1xuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1oZWlnaHQsIDQycHgpO1xuICAgIHBhZGRpbmc6IHZhcigtLWlucHV0UGFkZGluZywgdmFyKC0tcGFkZGluZykpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGZvbnQtc2l6ZTogdmFyKC0taW5wdXRGb250U2l6ZSwgMTRweCk7XG4gICAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLWlucHV0TGV0dGVyU3BhY2luZywgLTAuMDhweCk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IHZhcigtLWlucHV0TGVmdCwgMCk7XG4gIH1cblxuICAuc2VsZWN0Q29udGFpbmVyIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHZhcigtLXBsYWNlaG9sZGVyQ29sb3IsICM3ODg0OGYpO1xuICB9XG5cbiAgLnNlbGVjdENvbnRhaW5lciBpbnB1dDpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuXG4gIC5zZWxlY3RDb250YWluZXI6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVySG92ZXJDb2xvciwgI2IyYjhiZik7XG4gIH1cblxuICAuc2VsZWN0Q29udGFpbmVyLmZvY3VzZWQge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyRm9jdXNDb2xvciwgIzAwNmZlOCk7XG4gIH1cblxuICAuc2VsZWN0Q29udGFpbmVyLmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kaXNhYmxlZEJhY2tncm91bmQsICNlYmVkZWYpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZGlzYWJsZWRCb3JkZXJDb2xvciwgI2ViZWRlZik7XG4gICAgY29sb3I6IHZhcigtLWRpc2FibGVkQ29sb3IsICNjMWM2Y2MpO1xuICB9XG5cbiAgLnNlbGVjdENvbnRhaW5lci5kaXNhYmxlZCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiB2YXIoLS1kaXNhYmxlZFBsYWNlaG9sZGVyQ29sb3IsICNjMWM2Y2MpO1xuICB9XG5cbiAgLnNlbGVjdGVkSXRlbSB7XG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWhlaWdodCwgNDJweCk7XG4gICAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQsIDQycHgpO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiB2YXIoLS1zZWxlY3RlZEl0ZW1QYWRkaW5nLCAwIDIwcHggMCAwKTtcbiAgfVxuXG4gIC5zZWxlY3RlZEl0ZW06Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cblxuICAuY2xlYXJTZWxlY3Qge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogdmFyKC0tY2xlYXJTZWxlY3RSaWdodCwgMTBweCk7XG4gICAgdG9wOiB2YXIoLS1jbGVhclNlbGVjdFRvcCwgMTFweCk7XG4gICAgYm90dG9tOiB2YXIoLS1jbGVhclNlbGVjdEJvdHRvbSwgMTFweCk7XG4gICAgd2lkdGg6IHZhcigtLWNsZWFyU2VsZWN0V2lkdGgsIDIwcHgpO1xuICAgIGNvbG9yOiB2YXIoLS1jbGVhclNlbGVjdENvbG9yLCAjYzVjYWNmKTtcbiAgICBmbGV4OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuY2xlYXJTZWxlY3Q6aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS1jbGVhclNlbGVjdEhvdmVyQ29sb3IsICMyYzNlNTApO1xuICB9XG5cbiAgLnNlbGVjdENvbnRhaW5lci5mb2N1c2VkIC5jbGVhclNlbGVjdCB7XG4gICAgY29sb3I6IHZhcigtLWNsZWFyU2VsZWN0Rm9jdXNDb2xvciwgIzNmNGY1Zik7XG4gIH1cblxuICAuaW5kaWNhdG9yIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IHZhcigtLWluZGljYXRvclJpZ2h0LCAxMHB4KTtcbiAgICB0b3A6IHZhcigtLWluZGljYXRvclRvcCwgMTFweCk7XG4gICAgd2lkdGg6IHZhcigtLWluZGljYXRvcldpZHRoLCAyMHB4KTtcbiAgICBoZWlnaHQ6IHZhcigtLWluZGljYXRvckhlaWdodCwgMjBweCk7XG4gICAgY29sb3I6IHZhcigtLWluZGljYXRvckNvbG9yLCAjYzVjYWNmKTtcbiAgfVxuXG4gIC5pbmRpY2F0b3Igc3ZnIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZmlsbDogdmFyKC0taW5kaWNhdG9yRmlsbCwgY3VycmVudGNvbG9yKTtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBzdHJva2U6IHZhcigtLWluZGljYXRvclN0cm9rZSwgY3VycmVudGNvbG9yKTtcbiAgICBzdHJva2Utd2lkdGg6IDA7XG4gIH1cblxuICAuc3Bpbm5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiB2YXIoLS1zcGlubmVyUmlnaHQsIDEwcHgpO1xuICAgIHRvcDogdmFyKC0tc3Bpbm5lckxlZnQsIDExcHgpO1xuICAgIHdpZHRoOiB2YXIoLS1zcGlubmVyV2lkdGgsIDIwcHgpO1xuICAgIGhlaWdodDogdmFyKC0tc3Bpbm5lckhlaWdodCwgMjBweCk7XG4gICAgY29sb3I6IHZhcigtLXNwaW5uZXJDb2xvciwgIzUxY2U2Yyk7XG4gICAgYW5pbWF0aW9uOiByb3RhdGUgMC43NXMgbGluZWFyIGluZmluaXRlO1xuICB9XG5cbiAgLnNwaW5uZXJfaWNvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XG4gIH1cblxuICAuc3Bpbm5lcl9wYXRoIHtcbiAgICBzdHJva2UtZGFzaGFycmF5OiA5MDtcbiAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG4gIH1cblxuICAubXVsdGlTZWxlY3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogdmFyKC0tbXVsdGlTZWxlY3RQYWRkaW5nLCAwIDM1cHggMCAxNnB4KTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICB9XG5cbiAgLm11bHRpU2VsZWN0ID4gKiB7XG4gICAgZmxleDogMSAxIDUwcHg7XG4gIH1cblxuICAuc2VsZWN0Q29udGFpbmVyLm11bHRpU2VsZWN0IGlucHV0IHtcbiAgICBwYWRkaW5nOiB2YXIoLS1tdWx0aVNlbGVjdElucHV0UGFkZGluZywgMCk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogdmFyKC0tbXVsdGlTZWxlY3RJbnB1dE1hcmdpbiwgMCk7XG4gIH1cblxuICAuaGFzRXJyb3Ige1xuICAgIGJvcmRlcjogdmFyKC0tZXJyb3JCb3JkZXIsIDFweCBzb2xpZCAjZmYyZDU1KTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1lcnJvckJhY2tncm91bmQsICNmZmYpO1xuICB9XG5cbiAgQGtleWZyYW1lcyByb3RhdGUge1xuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG4gIH1cbjwvc3R5bGU+XG5cbjxzdmVsdGU6d2luZG93XG4gIG9uOmNsaWNrPXtoYW5kbGVXaW5kb3dDbGlja31cbiAgb246a2V5ZG93bj17aGFuZGxlS2V5RG93bn1cbiAgb246cmVzaXplPXtnZXRQb3NpdGlvbn0gLz5cblxuPGRpdlxuICBjbGFzcz1cInNlbGVjdENvbnRhaW5lciB7Y29udGFpbmVyQ2xhc3Nlc31cIlxuICBjbGFzczpoYXNFcnJvclxuICBjbGFzczptdWx0aVNlbGVjdD17aXNNdWx0aX1cbiAgY2xhc3M6ZGlzYWJsZWQ9e2lzRGlzYWJsZWR9XG4gIGNsYXNzOmZvY3VzZWQ9e2lzRm9jdXNlZH1cbiAgc3R5bGU9e2NvbnRhaW5lclN0eWxlc31cbiAgb246Y2xpY2s9e2hhbmRsZUNsaWNrfVxuICBiaW5kOnRoaXM9e2NvbnRhaW5lcn0+XG5cbiAgeyNpZiBJY29ufVxuICAgIDxzdmVsdGU6Y29tcG9uZW50IHRoaXM9e0ljb259IHsuLi5pY29uUHJvcHN9IC8+XG4gIHsvaWZ9XG5cbiAgeyNpZiBpc011bHRpICYmIHNlbGVjdGVkVmFsdWUgJiYgc2VsZWN0ZWRWYWx1ZS5sZW5ndGggPiAwfVxuICAgIDxzdmVsdGU6Y29tcG9uZW50XG4gICAgICB0aGlzPXtNdWx0aVNlbGVjdGlvbn1cbiAgICAgIHtzZWxlY3RlZFZhbHVlfVxuICAgICAge2dldFNlbGVjdGlvbkxhYmVsfVxuICAgICAge2FjdGl2ZVNlbGVjdGVkVmFsdWV9XG4gICAgICB7aXNEaXNhYmxlZH1cbiAgICAgIG9uOm11bHRpSXRlbUNsZWFyPXtoYW5kbGVNdWx0aUl0ZW1DbGVhcn1cbiAgICAgIG9uOmZvY3VzPXtoYW5kbGVGb2N1c30gLz5cbiAgey9pZn1cblxuICB7I2lmIGlzRGlzYWJsZWR9XG4gICAgPGlucHV0XG4gICAgICB7Li4uX2lucHV0QXR0cmlidXRlc31cbiAgICAgIGJpbmQ6dGhpcz17aW5wdXR9XG4gICAgICBvbjpmb2N1cz17aGFuZGxlRm9jdXN9XG4gICAgICBiaW5kOnZhbHVlPXtmaWx0ZXJUZXh0fVxuICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyVGV4dH1cbiAgICAgIHN0eWxlPXtpbnB1dFN0eWxlc31cbiAgICAgIGRpc2FibGVkIC8+XG4gIHs6ZWxzZX1cbiAgICA8aW5wdXRcbiAgICAgIHsuLi5faW5wdXRBdHRyaWJ1dGVzfVxuICAgICAgYmluZDp0aGlzPXtpbnB1dH1cbiAgICAgIG9uOmZvY3VzPXtoYW5kbGVGb2N1c31cbiAgICAgIGJpbmQ6dmFsdWU9e2ZpbHRlclRleHR9XG4gICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJUZXh0fVxuICAgICAgc3R5bGU9e2lucHV0U3R5bGVzfSAvPlxuICB7L2lmfVxuXG4gIHsjaWYgIWlzTXVsdGkgJiYgc2hvd1NlbGVjdGVkSXRlbX1cbiAgICA8ZGl2IGNsYXNzPVwic2VsZWN0ZWRJdGVtXCIgb246Zm9jdXM9e2hhbmRsZUZvY3VzfT5cbiAgICAgIDxzdmVsdGU6Y29tcG9uZW50XG4gICAgICAgIHRoaXM9e1NlbGVjdGlvbn1cbiAgICAgICAgaXRlbT17c2VsZWN0ZWRWYWx1ZX1cbiAgICAgICAge2dldFNlbGVjdGlvbkxhYmVsfSAvPlxuICAgIDwvZGl2PlxuICB7L2lmfVxuXG4gIHsjaWYgc2hvd1NlbGVjdGVkSXRlbSAmJiBpc0NsZWFyYWJsZSAmJiAhaXNEaXNhYmxlZCAmJiAhaXNXYWl0aW5nfVxuICAgIDxkaXYgY2xhc3M9XCJjbGVhclNlbGVjdFwiIG9uOmNsaWNrfHByZXZlbnREZWZhdWx0PXtoYW5kbGVDbGVhcn0+XG4gICAgICA8c3ZnXG4gICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICB2aWV3Qm94PVwiLTIgLTIgNTAgNTBcIlxuICAgICAgICBmb2N1c2FibGU9XCJmYWxzZVwiXG4gICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIj5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICBkPVwiTTM0LjkyMywzNy4yNTFMMjQsMjYuMzI4TDEzLjA3NywzNy4yNTFMOS40MzYsMzMuNjFsMTAuOTIzLTEwLjkyM0w5LjQzNiwxMS43NjVsMy42NDEtMy42NDFMMjQsMTkuMDQ3TDM0LjkyMyw4LjEyNFxuICAgICAgICAgIGwzLjY0MSwzLjY0MUwyNy42NDEsMjIuNjg4TDM4LjU2NCwzMy42MUwzNC45MjMsMzcuMjUxelwiIC8+XG4gICAgICA8L3N2Zz5cbiAgICA8L2Rpdj5cbiAgey9pZn1cblxuICB7I2lmIHNob3dJbmRpY2F0b3IgfHwgKHNob3dDaGV2cm9uICYmICFzZWxlY3RlZFZhbHVlIHx8ICghaXNTZWFyY2hhYmxlICYmICFpc0Rpc2FibGVkICYmICFpc1dhaXRpbmcgJiYgKChzaG93U2VsZWN0ZWRJdGVtICYmICFpc0NsZWFyYWJsZSkgfHwgIXNob3dTZWxlY3RlZEl0ZW0pKSl9XG4gICAgPGRpdiBjbGFzcz1cImluZGljYXRvclwiPlxuICAgICAgeyNpZiBpbmRpY2F0b3JTdmd9XG4gICAgICAgIHtAaHRtbCBpbmRpY2F0b3JTdmd9XG4gICAgICB7OmVsc2V9XG4gICAgICAgIDxzdmdcbiAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxuICAgICAgICAgIGZvY3VzYWJsZT1cImZhbHNlXCI+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0N1xuICAgICAgICAgICAgMy45MDgtMy43NDdjMC41MzMtMC40ODEgMS4xNDEtMC40NDYgMS41NzQgMCAwLjQzNiAwLjQ0NSAwLjQwOCAxLjE5NyAwXG4gICAgICAgICAgICAxLjYxNS0wLjQwNiAwLjQxOC00LjY5NSA0LjUwMi00LjY5NSA0LjUwMi0wLjIxNyAwLjIyMy0wLjUwMlxuICAgICAgICAgICAgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMFxuICAgICAgICAgICAgMC00LjI4Ny00LjA4NC00LjY5NS00LjUwMnMtMC40MzYtMS4xNyAwLTEuNjE1elwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgey9pZn1cbiAgICA8L2Rpdj5cbiAgey9pZn1cblxuICB7I2lmIGlzV2FpdGluZ31cbiAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lclwiPlxuICAgICAgPHN2ZyBjbGFzcz1cInNwaW5uZXJfaWNvblwiIHZpZXdCb3g9XCIyNSAyNSA1MCA1MFwiPlxuICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgY2xhc3M9XCJzcGlubmVyX3BhdGhcIlxuICAgICAgICAgIGN4PVwiNTBcIlxuICAgICAgICAgIGN5PVwiNTBcIlxuICAgICAgICAgIHI9XCIyMFwiXG4gICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiNVwiXG4gICAgICAgICAgc3Ryb2tlLW1pdGVybGltaXQ9XCIxMFwiIC8+XG4gICAgICA8L3N2Zz5cbiAgICA8L2Rpdj5cbiAgey9pZn1cbjwvZGl2PlxuIiwiPHNjcmlwdD5cbiAgZXhwb3J0IGxldCBnZXRTZWxlY3Rpb25MYWJlbCA9IHVuZGVmaW5lZDtcbiAgZXhwb3J0IGxldCBpdGVtID0gdW5kZWZpbmVkO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgLnNlbGVjdGlvbiB7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cbjwvc3R5bGU+XG5cbjxkaXYgY2xhc3M9XCJzZWxlY3Rpb25cIj5cbiAge0BodG1sIGdldFNlbGVjdGlvbkxhYmVsKGl0ZW0pfSBcbjwvZGl2PlxuIiwiPHNjcmlwdD5cblx0aW1wb3J0IHsgb25Nb3VudCwgdGljayB9IGZyb20gJ3N2ZWx0ZSc7XG5cblx0Ly8gcHJvcHNcblx0ZXhwb3J0IGxldCBpdGVtcyA9IHVuZGVmaW5lZDtcblx0ZXhwb3J0IGxldCBoZWlnaHQgPSAnMTAwJSc7XG5cdGV4cG9ydCBsZXQgaXRlbUhlaWdodCA9IDQwO1xuXHRleHBvcnQgbGV0IGhvdmVySXRlbUluZGV4ID0gMDtcblxuXHQvLyByZWFkLW9ubHksIGJ1dCB2aXNpYmxlIHRvIGNvbnN1bWVycyB2aWEgYmluZDpzdGFydFxuXHRleHBvcnQgbGV0IHN0YXJ0ID0gMDtcblx0ZXhwb3J0IGxldCBlbmQgPSAwO1xuXG5cdC8vIGxvY2FsIHN0YXRlXG5cdGxldCBoZWlnaHRfbWFwID0gW107XG5cdGxldCByb3dzO1xuXHRsZXQgdmlld3BvcnQ7XG5cdGxldCBjb250ZW50cztcblx0bGV0IHZpZXdwb3J0X2hlaWdodCA9IDA7XG5cdGxldCB2aXNpYmxlO1xuXHRsZXQgbW91bnRlZDtcblxuXHRsZXQgdG9wID0gMDtcblx0bGV0IGJvdHRvbSA9IDA7XG5cdGxldCBhdmVyYWdlX2hlaWdodDtcblxuXHQkOiB2aXNpYmxlID0gaXRlbXMuc2xpY2Uoc3RhcnQsIGVuZCkubWFwKChkYXRhLCBpKSA9PiB7XG5cdFx0cmV0dXJuIHsgaW5kZXg6IGkgKyBzdGFydCwgZGF0YSB9O1xuXHR9KTtcblxuXHQvLyB3aGVuZXZlciBgaXRlbXNgIGNoYW5nZXMsIGludmFsaWRhdGUgdGhlIGN1cnJlbnQgaGVpZ2h0bWFwXG5cdCQ6IGlmIChtb3VudGVkKSByZWZyZXNoKGl0ZW1zLCB2aWV3cG9ydF9oZWlnaHQsIGl0ZW1IZWlnaHQpO1xuXG5cdGFzeW5jIGZ1bmN0aW9uIHJlZnJlc2goaXRlbXMsIHZpZXdwb3J0X2hlaWdodCwgaXRlbUhlaWdodCkge1xuXHRcdGNvbnN0IHsgc2Nyb2xsVG9wIH0gPSB2aWV3cG9ydDtcblxuXHRcdGF3YWl0IHRpY2soKTsgLy8gd2FpdCB1bnRpbCB0aGUgRE9NIGlzIHVwIHRvIGRhdGVcblxuXHRcdGxldCBjb250ZW50X2hlaWdodCA9IHRvcCAtIHNjcm9sbFRvcDtcblx0XHRsZXQgaSA9IHN0YXJ0O1xuXG5cdFx0d2hpbGUgKGNvbnRlbnRfaGVpZ2h0IDwgdmlld3BvcnRfaGVpZ2h0ICYmIGkgPCBpdGVtcy5sZW5ndGgpIHtcblx0XHRcdGxldCByb3cgPSByb3dzW2kgLSBzdGFydF07XG5cblx0XHRcdGlmICghcm93KSB7XG5cdFx0XHRcdGVuZCA9IGkgKyAxO1xuXHRcdFx0XHRhd2FpdCB0aWNrKCk7IC8vIHJlbmRlciB0aGUgbmV3bHkgdmlzaWJsZSByb3dcblx0XHRcdFx0cm93ID0gcm93c1tpIC0gc3RhcnRdO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCByb3dfaGVpZ2h0ID0gaGVpZ2h0X21hcFtpXSA9IGl0ZW1IZWlnaHQgfHwgcm93Lm9mZnNldEhlaWdodDtcblx0XHRcdGNvbnRlbnRfaGVpZ2h0ICs9IHJvd19oZWlnaHQ7XG5cdFx0XHRpICs9IDE7XG5cdFx0fVxuXG5cdFx0ZW5kID0gaTtcblxuXHRcdGNvbnN0IHJlbWFpbmluZyA9IGl0ZW1zLmxlbmd0aCAtIGVuZDtcblx0XHRhdmVyYWdlX2hlaWdodCA9ICh0b3AgKyBjb250ZW50X2hlaWdodCkgLyBlbmQ7XG5cblx0XHRib3R0b20gPSByZW1haW5pbmcgKiBhdmVyYWdlX2hlaWdodDtcblx0XHRoZWlnaHRfbWFwLmxlbmd0aCA9IGl0ZW1zLmxlbmd0aDtcblxuXHRcdHZpZXdwb3J0LnNjcm9sbFRvcCA9IDA7XG5cdH1cblxuXHRhc3luYyBmdW5jdGlvbiBoYW5kbGVfc2Nyb2xsKCkge1xuXHRcdGNvbnN0IHsgc2Nyb2xsVG9wIH0gPSB2aWV3cG9ydDtcblxuXHRcdGNvbnN0IG9sZF9zdGFydCA9IHN0YXJ0O1xuXG5cdFx0Zm9yIChsZXQgdiA9IDA7IHYgPCByb3dzLmxlbmd0aDsgdiArPSAxKSB7XG5cdFx0XHRoZWlnaHRfbWFwW3N0YXJ0ICsgdl0gPSBpdGVtSGVpZ2h0IHx8IHJvd3Nbdl0ub2Zmc2V0SGVpZ2h0O1xuXHRcdH1cblxuXHRcdGxldCBpID0gMDtcblx0XHRsZXQgeSA9IDA7XG5cblx0XHR3aGlsZSAoaSA8IGl0ZW1zLmxlbmd0aCkge1xuXHRcdFx0Y29uc3Qgcm93X2hlaWdodCA9IGhlaWdodF9tYXBbaV0gfHwgYXZlcmFnZV9oZWlnaHQ7XG5cdFx0XHRpZiAoeSArIHJvd19oZWlnaHQgPiBzY3JvbGxUb3ApIHtcblx0XHRcdFx0c3RhcnQgPSBpO1xuXHRcdFx0XHR0b3AgPSB5O1xuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHR5ICs9IHJvd19oZWlnaHQ7XG5cdFx0XHRpICs9IDE7XG5cdFx0fVxuXG5cdFx0d2hpbGUgKGkgPCBpdGVtcy5sZW5ndGgpIHtcblx0XHRcdHkgKz0gaGVpZ2h0X21hcFtpXSB8fCBhdmVyYWdlX2hlaWdodDtcblx0XHRcdGkgKz0gMTtcblxuXHRcdFx0aWYgKHkgPiBzY3JvbGxUb3AgKyB2aWV3cG9ydF9oZWlnaHQpIGJyZWFrO1xuXHRcdH1cblxuXHRcdGVuZCA9IGk7XG5cblx0XHRjb25zdCByZW1haW5pbmcgPSBpdGVtcy5sZW5ndGggLSBlbmQ7XG5cdFx0YXZlcmFnZV9oZWlnaHQgPSB5IC8gZW5kO1xuXG5cdFx0d2hpbGUgKGkgPCBpdGVtcy5sZW5ndGgpIGhlaWdodF9tYXBbaSsrXSA9IGF2ZXJhZ2VfaGVpZ2h0O1xuXHRcdGJvdHRvbSA9IHJlbWFpbmluZyAqIGF2ZXJhZ2VfaGVpZ2h0O1xuXG5cdFx0Ly8gcHJldmVudCBqdW1waW5nIGlmIHdlIHNjcm9sbGVkIHVwIGludG8gdW5rbm93biB0ZXJyaXRvcnlcblx0XHRpZiAoc3RhcnQgPCBvbGRfc3RhcnQpIHtcblx0XHRcdGF3YWl0IHRpY2soKTtcblxuXHRcdFx0bGV0IGV4cGVjdGVkX2hlaWdodCA9IDA7XG5cdFx0XHRsZXQgYWN0dWFsX2hlaWdodCA9IDA7XG5cblx0XHRcdGZvciAobGV0IGkgPSBzdGFydDsgaSA8IG9sZF9zdGFydDsgaSArPSAxKSB7XG5cdFx0XHRcdGlmIChyb3dzW2kgLSBzdGFydF0pIHtcblx0XHRcdFx0XHRleHBlY3RlZF9oZWlnaHQgKz0gaGVpZ2h0X21hcFtpXTtcblx0XHRcdFx0XHRhY3R1YWxfaGVpZ2h0ICs9IGl0ZW1IZWlnaHQgfHwgcm93c1tpIC0gc3RhcnRdLm9mZnNldEhlaWdodDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBkID0gYWN0dWFsX2hlaWdodCAtIGV4cGVjdGVkX2hlaWdodDtcblx0XHRcdHZpZXdwb3J0LnNjcm9sbFRvKDAsIHNjcm9sbFRvcCArIGQpO1xuXHRcdH1cblxuXHRcdC8vIFRPRE8gaWYgd2Ugb3ZlcmVzdGltYXRlZCB0aGUgc3BhY2UgdGhlc2Vcblx0XHQvLyByb3dzIHdvdWxkIG9jY3VweSB3ZSBtYXkgbmVlZCB0byBhZGQgc29tZVxuXHRcdC8vIG1vcmUuIG1heWJlIHdlIGNhbiBqdXN0IGNhbGwgaGFuZGxlX3Njcm9sbCBhZ2Fpbj9cblx0fVxuXG5cdC8vIHRyaWdnZXIgaW5pdGlhbCByZWZyZXNoXG5cdG9uTW91bnQoKCkgPT4ge1xuXHRcdHJvd3MgPSBjb250ZW50cy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc3ZlbHRlLXZpcnR1YWwtbGlzdC1yb3cnKTtcblx0XHRtb3VudGVkID0gdHJ1ZTtcblx0fSk7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXHRzdmVsdGUtdmlydHVhbC1saXN0LXZpZXdwb3J0IHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0b3ZlcmZsb3cteTogYXV0bztcblx0XHQtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdH1cblxuXHRzdmVsdGUtdmlydHVhbC1saXN0LWNvbnRlbnRzLFxuXHRzdmVsdGUtdmlydHVhbC1saXN0LXJvdyB7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdH1cblxuXHRzdmVsdGUtdmlydHVhbC1saXN0LXJvdyB7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0fVxuPC9zdHlsZT5cblxuPHN2ZWx0ZS12aXJ0dWFsLWxpc3Qtdmlld3BvcnQgYmluZDp0aGlzPXt2aWV3cG9ydH0gYmluZDpvZmZzZXRIZWlnaHQ9e3ZpZXdwb3J0X2hlaWdodH0gb246c2Nyb2xsPXtoYW5kbGVfc2Nyb2xsfVxuXHRzdHlsZT1cImhlaWdodDoge2hlaWdodH07XCI+XG5cdDxzdmVsdGUtdmlydHVhbC1saXN0LWNvbnRlbnRzIGJpbmQ6dGhpcz17Y29udGVudHN9IHN0eWxlPVwicGFkZGluZy10b3A6IHt0b3B9cHg7IHBhZGRpbmctYm90dG9tOiB7Ym90dG9tfXB4O1wiPlxuXHRcdHsjZWFjaCB2aXNpYmxlIGFzIHJvdyAocm93LmluZGV4KX1cblx0XHRcdDxzdmVsdGUtdmlydHVhbC1saXN0LXJvdz5cblx0XHRcdFx0PHNsb3QgaXRlbT17cm93LmRhdGF9IGk9e3Jvdy5pbmRleH0ge2hvdmVySXRlbUluZGV4fT5NaXNzaW5nIHRlbXBsYXRlPC9zbG90PlxuXHRcdFx0PC9zdmVsdGUtdmlydHVhbC1saXN0LXJvdz5cblx0XHR7L2VhY2h9XG5cdDwvc3ZlbHRlLXZpcnR1YWwtbGlzdC1jb250ZW50cz5cbjwvc3ZlbHRlLXZpcnR1YWwtbGlzdC12aWV3cG9ydD4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBpbW1lZGlhdGUpIHtcbiAgbGV0IHRpbWVvdXQ7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGV4ZWN1dGVkRnVuY3Rpb24oKSB7XG4gICAgbGV0IGNvbnRleHQgPSB0aGlzO1xuICAgIGxldCBhcmdzID0gYXJndW1lbnRzO1xuXHQgICAgXG4gICAgbGV0IGxhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgIGlmICghaW1tZWRpYXRlKSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH07XG5cbiAgICBsZXQgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcblx0XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuXHRcbiAgICBpZiAoY2FsbE5vdykgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgfTtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbGVtKSB7XG4gIGNvbnN0IGJvdW5kaW5nID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgY29uc3Qgb3V0ID0ge307XG5cbiAgb3V0LnRvcCA9IGJvdW5kaW5nLnRvcCA8IDA7XG4gIG91dC5sZWZ0ID0gYm91bmRpbmcubGVmdCA8IDA7XG4gIG91dC5ib3R0b20gPSBib3VuZGluZy5ib3R0b20gPiAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpO1xuICBvdXQucmlnaHQgPSBib3VuZGluZy5yaWdodCA+ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpO1xuICBvdXQuYW55ID0gb3V0LnRvcCB8fCBvdXQubGVmdCB8fCBvdXQuYm90dG9tIHx8IG91dC5yaWdodDtcblxuICByZXR1cm4gb3V0O1xufTtcblxuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==