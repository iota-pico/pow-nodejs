(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ffi"));
	else if(typeof define === 'function' && define.amd)
		define("@iota-pico/pow-nodejs", ["ffi"], factory);
	else if(typeof exports === 'object')
		exports["@iota-pico/pow-nodejs"] = factory(require("ffi"));
	else
		root["IotaPicoPowNodejs"] = factory(root["ffi"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_ffi__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./dist/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../core/dist/error/coreError.js":
/*!***************************************!*\
  !*** ../core/dist/error/coreError.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _extendableBuiltin(cls) {
  function ExtendableBuiltin() {
    var instance = Reflect.construct(cls, Array.from(arguments));
    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
    return instance;
  }

  ExtendableBuiltin.prototype = Object.create(cls.prototype, {
    constructor: {
      value: cls,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(ExtendableBuiltin, cls);
  } else {
    ExtendableBuiltin.__proto__ = cls;
  }

  return ExtendableBuiltin;
}

Object.defineProperty(exports, "__esModule", {
  value: true
});

var jsonHelper_1 = __webpack_require__(/*! ../helpers/jsonHelper */ "../core/dist/helpers/jsonHelper.js");

var stringHelper_1 = __webpack_require__(/*! ../helpers/stringHelper */ "../core/dist/helpers/stringHelper.js");
/**
 * A core implementation of an error.
 */


var CoreError =
/*#__PURE__*/
function (_extendableBuiltin2) {
  _inherits(CoreError, _extendableBuiltin2);

  /**
   * Create an instance of CoreError.
   * @param message The message for the error.
   * @param additional Additional details about the error.
   * @param innerError Add information from inner error if there was one.
   */
  function CoreError(message, additional, innerError) {
    var _this;

    _classCallCheck(this, CoreError);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CoreError).call(this, message));
    _this.additional = additional ? additional : {};
    _this.innerError = innerError;
    _this.domain = "Core";
    return _this;
  }
  /**
   * Check if an object could be a CoreError.
   * @param obj The object to check if it is a CoreError.
   * @returns true If the tested object is a CoreError.
   */


  _createClass(CoreError, [{
    key: "format",

    /**
     * Format the error to a readable version.
     * @returns Formatted version of the error.
     */
    value: function format() {
      var _this2 = this;

      var out = "";

      if (!stringHelper_1.StringHelper.isEmpty(this.domain)) {
        out += "".concat(this.domain, ": ");
      }

      if (!stringHelper_1.StringHelper.isEmpty(this.message)) {
        out += "".concat(this.message);
      }

      var keys = Object.keys(this.additional);

      if (keys.length > 0) {
        if (out.length > 0) {
          out += "\n";
        }

        keys.forEach(function (key) {
          out += "\t".concat(key, ": ").concat(jsonHelper_1.JsonHelper.stringify(_this2.additional[key]), "\n");
        });
      }

      return out;
    }
  }], [{
    key: "isError",
    value: function isError(obj) {
      return obj !== undefined && obj !== null && _typeof(obj) === "object" && "message" in obj && "additional" in obj;
    }
  }]);

  return CoreError;
}(_extendableBuiltin(Error));

exports.CoreError = CoreError;

/***/ }),

/***/ "../core/dist/factories/factoryBase.js":
/*!*********************************************!*\
  !*** ../core/dist/factories/factoryBase.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Factory to generate types.
 * @typeparam T The generic type for the object types in the factory.
 */

var FactoryBase =
/*#__PURE__*/
function () {
  function FactoryBase() {
    _classCallCheck(this, FactoryBase);

    /* @internal */
    this._types = {};
  }
  /**
   * Register a new type with the factory.
   * @param name The name of the type to register.
   * @param typeConstructor The constructor for the type.
   */


  _createClass(FactoryBase, [{
    key: "register",
    value: function register(name, typeConstructor) {
      this.getInstance()._types[name] = typeConstructor;
    }
    /**
     * Unregister a type from the factory.
     * @param name The name of the type to unregister.
     */

  }, {
    key: "unregister",
    value: function unregister(name) {
      delete this.getInstance()._types[name];
    }
    /**
     * Does the factory contain a specific type.
     * @param name The name of the type to look for.
     * @returns True if the type exists.
     */

  }, {
    key: "exists",
    value: function exists(name) {
      return this.getInstance()._types[name] !== undefined;
    }
    /**
     * List the types in the factory.
     * @param name The name of the type to look for.
     * @returns True if the type exists.
     */

  }, {
    key: "types",
    value: function types() {
      return Object.keys(this.getInstance()._types);
    }
    /**
     * Create an instance of an object from the factory.
     * @param name The name of the type to create.
     * @param args Any parameters to pass to the constructor.
     * @returns A new instance of the type if it exists, or undefined if it does not.
     */

  }, {
    key: "create",
    value: function create(name) {
      var instance = this.getInstance();

      if (instance._types[name]) {
        var _instance$_types;

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        return (_instance$_types = instance._types)[name].apply(_instance$_types, args);
      } else {
        return undefined;
      }
    }
  }]);

  return FactoryBase;
}();

exports.FactoryBase = FactoryBase;

/***/ }),

/***/ "../core/dist/helpers/arrayHelper.js":
/*!*******************************************!*\
  !*** ../core/dist/helpers/arrayHelper.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(/*! ./objectHelper */ "../core/dist/helpers/objectHelper.js");
/**
 * Array helper methods.
 */


var ArrayHelper =
/*#__PURE__*/
function () {
  function ArrayHelper() {
    _classCallCheck(this, ArrayHelper);
  }

  _createClass(ArrayHelper, null, [{
    key: "isArray",

    /**
     * Is the value an array.
     * @param value Object to test.
     * @returns True if the value is an array.
     */
    value: function isArray(value) {
      return value === null || value === undefined ? false : Array.isArray(value);
    }
    /**
     * Is the value a empty array.
     * @param value Object to test.
     * @returns True if the value is a empty array.
     */

  }, {
    key: "isEmpty",
    value: function isEmpty(value) {
      return !ArrayHelper.isArray(value) || value.length === 0;
    }
    /**
     * Is the value a non empty array of specific type.
     * @param value Object to test.
     * @param type The type of the object
     * @returns True if the value is a non empty array of a specific type.
     */

  }, {
    key: "isTyped",
    value: function isTyped(value, type) {
      return !ArrayHelper.isEmpty(value) && !value.includes(undefined) && !value.includes(null) && value.every(function (a) {
        return objectHelper_1.ObjectHelper.isType(a, type);
      });
    }
  }]);

  return ArrayHelper;
}();

exports.ArrayHelper = ArrayHelper;

/***/ }),

/***/ "../core/dist/helpers/jsonHelper.js":
/*!******************************************!*\
  !*** ../core/dist/helpers/jsonHelper.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Json helper methods.
 */

var JsonHelper =
/*#__PURE__*/
function () {
  function JsonHelper() {
    _classCallCheck(this, JsonHelper);
  }

  _createClass(JsonHelper, null, [{
    key: "stringify",

    /**
     * Stringify an object with recursion breaking.
     * @param value A JavaScript value, usually an object or array, to be converted.
     * @param replacer A function that transforms the results.
     * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
     * @returns String version of the object.
     */
    value: function stringify(value, replacer, space) {
      // eliminates any recursion in the stringify
      var cache = [];

      var recusionReplacer = function recusionReplacer(key, replaceValue) {
        if (_typeof(replaceValue) === "object" && value !== null && replaceValue !== undefined) {
          if (cache.indexOf(replaceValue) !== -1) {
            // circular reference found, discard key
            return;
          } else {
            cache.push(replaceValue);
          }
        }

        return replacer ? replacer(key, replaceValue) : replaceValue;
      };

      return JSON.stringify(value, recusionReplacer, space);
    }
  }]);

  return JsonHelper;
}();

exports.JsonHelper = JsonHelper;

/***/ }),

/***/ "../core/dist/helpers/numberHelper.js":
/*!********************************************!*\
  !*** ../core/dist/helpers/numberHelper.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Number helper methods.
 */

var NumberHelper =
/*#__PURE__*/
function () {
  function NumberHelper() {
    _classCallCheck(this, NumberHelper);
  }

  _createClass(NumberHelper, null, [{
    key: "isInteger",

    /**
     * Is the value an integer.
     * @param value Object to test for its integerness.
     * @returns True if the object is a integer.
     */
    value: function isInteger(value) {
      return Number.isInteger(value) && !Number.isNaN(value) && Number.isFinite(value);
    }
    /**
     * Is the value a number.
     * @param value Object to test for its numberyness.
     * @returns True if the object is a number.
     */

  }, {
    key: "isNumber",
    value: function isNumber(value) {
      return value !== undefined && value !== null && typeof value === "number" && !Number.isNaN(value) && Number.isFinite(value);
    }
    /**
     * Is the value a float number formatted as a string, can be used for big numbers that would overflow parseFloat.
     * @param value The value to check
     * @returns True if the number is formatted correctly.
     */

  }, {
    key: "isFloatString",
    value: function isFloatString(value) {
      return /^-?\d*\.?\d+$/.test(value);
    }
    /**
     * Is the value a integer number formatted as a string, can be used for big numbers that would overflow parseInt.
     * @param value The value to check
     * @returns True if the number is formatted correctly.
     */

  }, {
    key: "isIntegerString",
    value: function isIntegerString(value) {
      return /^-?\d+$/.test(value);
    }
  }]);

  return NumberHelper;
}();

exports.NumberHelper = NumberHelper;

/***/ }),

/***/ "../core/dist/helpers/objectHelper.js":
/*!********************************************!*\
  !*** ../core/dist/helpers/objectHelper.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Object helper methods.
 */

var ObjectHelper =
/*#__PURE__*/
function () {
  function ObjectHelper() {
    _classCallCheck(this, ObjectHelper);
  }

  _createClass(ObjectHelper, null, [{
    key: "isEmpty",

    /**
     * Is the value empty.
     * @param value Object to test.
     * @returns True if the value is empty.
     */
    value: function isEmpty(value) {
      return value === null || value === undefined;
    }
    /**
     * Is the value an object.
     * @param value Object to test.
     * @returns True if the value is an object.
     */

  }, {
    key: "isObject",
    value: function isObject(value) {
      return value === null || value === undefined ? false : _typeof(value) === "object" && !Array.isArray(value);
    }
    /**
     * Is the value an object if given type.
     * @param value Object to test.
     * @param typeConstructor A callback method which returns an instance of the object.
     * @returns True if the value is an object of the specified type.
     */

  }, {
    key: "isType",
    value: function isType(value, typeConstructor) {
      var valueClassName = ObjectHelper.getClassName(value);
      return valueClassName !== undefined && valueClassName === ObjectHelper.getClassName(typeConstructor);
    }
    /**
     * Get the class name of an object if it has one.
     * @param object The object to get the class name for.
     * @returns The class name if it has one or undefined if not.
     */

  }, {
    key: "getClassName",
    value: function getClassName(object) {
      if (object === null || object === undefined) {
        return undefined;
      } else {
        var _constructor = typeof object === "function" ? object.toString() : object.constructor.toString();

        var results = _constructor.match(/\w+/g);

        return results && results.length > 1 ? results[1] : undefined;
      }
    }
  }]);

  return ObjectHelper;
}();

exports.ObjectHelper = ObjectHelper;

/***/ }),

/***/ "../core/dist/helpers/stringHelper.js":
/*!********************************************!*\
  !*** ../core/dist/helpers/stringHelper.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * String helper methods.
 */

var StringHelper =
/*#__PURE__*/
function () {
  function StringHelper() {
    _classCallCheck(this, StringHelper);
  }

  _createClass(StringHelper, null, [{
    key: "isString",

    /**
     * Is the value a string.
     * @param value Object to test for its stringyness.
     * @returns True if the object is a string.
     */
    value: function isString(value) {
      return value === null || value === undefined ? false : Object.prototype.toString.call(value) === "[object String]";
    }
    /**
     * Is the value a string that is empty.
     * @param value Object to test for its no emptyness.
     * @returns True if the object is an empty string.
     */

  }, {
    key: "isEmpty",
    value: function isEmpty(value) {
      return !StringHelper.isString(value) || value.length === 0;
    }
    /**
     * Is the string all ASCII characters.
     * @param value string to test if is is ASCII.
     * @returns True if the object is all ASCII.
     */

  }, {
    key: "isAscii",
    value: function isAscii(value) {
      return value === null || value === undefined ? false : /^[\x00-\xFF]*$/.test(value);
    }
    /**
     * Encode non ASCII characters with control characters.
     * @param value The string value to escape.
     * @returns The escaped version of the string.
     */

  }, {
    key: "encodeNonASCII",
    value: function encodeNonASCII(value) {
      return StringHelper.isString(value) ? value.replace(/[\u007F-\uFFFF]/g, function (chr) {
        return "\\u".concat("0000".concat(chr.charCodeAt(0).toString(16)).substr(-4));
      }) : undefined;
    }
    /**
     * Decode control characters to ASCII.
     * @param value The encoded string to convert back to ASCII.
     * @returns The decoded version of the string.
     */

  }, {
    key: "decodeNonASCII",
    value: function decodeNonASCII(value) {
      return StringHelper.isString(value) ? value.replace(/\\u([\d\w]{4})/gi, function (match, grp) {
        return String.fromCharCode(parseInt(grp, 16));
      }) : undefined;
    }
  }]);

  return StringHelper;
}();

exports.StringHelper = StringHelper;

/***/ }),

/***/ "../core/dist/services/timeService.js":
/*!********************************************!*\
  !*** ../core/dist/services/timeService.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Represents a class which can provide the time.
 */

var TimeService =
/*#__PURE__*/
function () {
  function TimeService() {
    _classCallCheck(this, TimeService);
  }

  _createClass(TimeService, [{
    key: "msSinceEpoch",

    /**
     * Returns the number of milliseconds since 1970/01/01.
     * @returns Number of milliseconds.
     */
    value: function msSinceEpoch() {
      return Date.now();
    }
  }]);

  return TimeService;
}();

exports.TimeService = TimeService;

/***/ }),

/***/ "../crypto/dist/digests/sha3.js":
/*!**************************************!*\
  !*** ../crypto/dist/digests/sha3.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

var cryptoError_1 = __webpack_require__(/*! ../error/cryptoError */ "../crypto/dist/error/cryptoError.js");
/**
 * Sha3 implementation.
 */


var Sha3 =
/*#__PURE__*/
function () {
  /**
   * Create a new instance of SHA3.
   * @param bits The number of input bits.
   * @param padding The padding to use.
   * @param outputBits The number of output bits.
   */
  function Sha3(bits, padding, outputBits) {
    _classCallCheck(this, Sha3);

    this._padding = padding;
    this._outputBits = outputBits;
    this._blockCount = 1600 - (bits << 1) >> 5;
    this._byteCount = this._blockCount << 2;
    this._outputBlocks = outputBits >> 5;
    this._extraBytes = (outputBits & 31) >> 3;
    this.reset();
  }
  /**
   * Reset the digest.
   */


  _createClass(Sha3, [{
    key: "reset",
    value: function reset() {
      this._reset = true;
      this._block = 0;
      this._start = 0;
      this._blocks = new Uint32Array(this._blockCount + 1);
      this._state = new Uint32Array(50);
    }
    /**
     * Update the digest.
     * @param input Array of data to use in the update.
     */

  }, {
    key: "update",
    value: function update(input) {
      if (!objectHelper_1.ObjectHelper.isType(input, ArrayBuffer)) {
        throw new cryptoError_1.CryptoError("Input is not of type ArrayBuffer");
      }

      var message = new Uint8Array(input);
      var length = message.length;
      var index = 0;
      var i;

      while (index < length) {
        if (this._reset) {
          this._reset = false;
          this._blocks[0] = this._block;

          for (i = 1; i < this._blockCount + 1; ++i) {
            this._blocks[i] = 0;
          }
        }

        for (i = this._start; index < length && i < this._byteCount; ++index) {
          this._blocks[i >> 2] |= message[index] << Sha3.SHIFT[i++ & 3];
        }

        this._lastByteIndex = i;

        if (i >= this._byteCount) {
          this._start = i - this._byteCount;
          this._block = this._blocks[this._blockCount];

          for (i = 0; i < this._blockCount; ++i) {
            this._state[i] ^= this._blocks[i];
          }

          this.keccakPermutation(this._state);
          this._reset = true;
        } else {
          this._start = i;
        }
      }
    }
    /**
     * Finalize and return the hash for the digest, will also reset the state.
     * @returns Array buffer containing the digest.
     */

  }, {
    key: "digest",
    value: function digest() {
      this.finalize();
      var i = 0;
      var j = 0;
      var bytes = this._outputBits >> 3;
      var buffer;

      if (this._extraBytes) {
        buffer = new ArrayBuffer(this._outputBlocks + 1 << 2);
      } else {
        buffer = new ArrayBuffer(bytes);
      }

      var array = new Uint32Array(buffer);

      while (j < this._outputBlocks) {
        for (i = 0; i < this._blockCount && j < this._outputBlocks; ++i, ++j) {
          array[j] = this._state[i];
        }
      }

      if (this._extraBytes) {
        array[i] = this._state[i];
        buffer = buffer.slice(0, bytes);
      }

      this.reset();
      return buffer;
    }
    /* @internal */

  }, {
    key: "finalize",
    value: function finalize() {
      var i = this._lastByteIndex;
      this._blocks[i >> 2] |= this._padding[i & 3];

      if (this._lastByteIndex === this._byteCount) {
        this._blocks[0] = this._blocks[this._blockCount];

        for (i = 1; i < this._blockCount + 1; ++i) {
          this._blocks[i] = 0;
        }
      }

      this._blocks[this._blockCount - 1] |= 0x80000000;

      for (i = 0; i < this._blockCount; ++i) {
        this._state[i] ^= this._blocks[i];
      }

      this.keccakPermutation(this._state);
    }
    /* @internal */

  }, {
    key: "keccakPermutation",
    value: function keccakPermutation(s) {
      // tslint:disable-next-line:one-variable-per-declaration
      var h, l, n, c0, c1, c2, c3, c4, c5, c6, c7, c8, c9, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23, b24, b25, b26, b27, b28, b29, b30, b31, b32, b33, b34, b35, b36, b37, b38, b39, b40, b41, b42, b43, b44, b45, b46, b47, b48, b49;

      for (n = 0; n < 48; n += 2) {
        c0 = s[0] ^ s[10] ^ s[20] ^ s[30] ^ s[40];
        c1 = s[1] ^ s[11] ^ s[21] ^ s[31] ^ s[41];
        c2 = s[2] ^ s[12] ^ s[22] ^ s[32] ^ s[42];
        c3 = s[3] ^ s[13] ^ s[23] ^ s[33] ^ s[43];
        c4 = s[4] ^ s[14] ^ s[24] ^ s[34] ^ s[44];
        c5 = s[5] ^ s[15] ^ s[25] ^ s[35] ^ s[45];
        c6 = s[6] ^ s[16] ^ s[26] ^ s[36] ^ s[46];
        c7 = s[7] ^ s[17] ^ s[27] ^ s[37] ^ s[47];
        c8 = s[8] ^ s[18] ^ s[28] ^ s[38] ^ s[48];
        c9 = s[9] ^ s[19] ^ s[29] ^ s[39] ^ s[49];
        h = c8 ^ (c2 << 1 | c3 >>> 31);
        l = c9 ^ (c3 << 1 | c2 >>> 31);
        s[0] ^= h;
        s[1] ^= l;
        s[10] ^= h;
        s[11] ^= l;
        s[20] ^= h;
        s[21] ^= l;
        s[30] ^= h;
        s[31] ^= l;
        s[40] ^= h;
        s[41] ^= l;
        h = c0 ^ (c4 << 1 | c5 >>> 31);
        l = c1 ^ (c5 << 1 | c4 >>> 31);
        s[2] ^= h;
        s[3] ^= l;
        s[12] ^= h;
        s[13] ^= l;
        s[22] ^= h;
        s[23] ^= l;
        s[32] ^= h;
        s[33] ^= l;
        s[42] ^= h;
        s[43] ^= l;
        h = c2 ^ (c6 << 1 | c7 >>> 31);
        l = c3 ^ (c7 << 1 | c6 >>> 31);
        s[4] ^= h;
        s[5] ^= l;
        s[14] ^= h;
        s[15] ^= l;
        s[24] ^= h;
        s[25] ^= l;
        s[34] ^= h;
        s[35] ^= l;
        s[44] ^= h;
        s[45] ^= l;
        h = c4 ^ (c8 << 1 | c9 >>> 31);
        l = c5 ^ (c9 << 1 | c8 >>> 31);
        s[6] ^= h;
        s[7] ^= l;
        s[16] ^= h;
        s[17] ^= l;
        s[26] ^= h;
        s[27] ^= l;
        s[36] ^= h;
        s[37] ^= l;
        s[46] ^= h;
        s[47] ^= l;
        h = c6 ^ (c0 << 1 | c1 >>> 31);
        l = c7 ^ (c1 << 1 | c0 >>> 31);
        s[8] ^= h;
        s[9] ^= l;
        s[18] ^= h;
        s[19] ^= l;
        s[28] ^= h;
        s[29] ^= l;
        s[38] ^= h;
        s[39] ^= l;
        s[48] ^= h;
        s[49] ^= l;
        b0 = s[0];
        b1 = s[1];
        b32 = s[11] << 4 | s[10] >>> 28;
        b33 = s[10] << 4 | s[11] >>> 28;
        b14 = s[20] << 3 | s[21] >>> 29;
        b15 = s[21] << 3 | s[20] >>> 29;
        b46 = s[31] << 9 | s[30] >>> 23;
        b47 = s[30] << 9 | s[31] >>> 23;
        b28 = s[40] << 18 | s[41] >>> 14;
        b29 = s[41] << 18 | s[40] >>> 14;
        b20 = s[2] << 1 | s[3] >>> 31;
        b21 = s[3] << 1 | s[2] >>> 31;
        b2 = s[13] << 12 | s[12] >>> 20;
        b3 = s[12] << 12 | s[13] >>> 20;
        b34 = s[22] << 10 | s[23] >>> 22;
        b35 = s[23] << 10 | s[22] >>> 22;
        b16 = s[33] << 13 | s[32] >>> 19;
        b17 = s[32] << 13 | s[33] >>> 19;
        b48 = s[42] << 2 | s[43] >>> 30;
        b49 = s[43] << 2 | s[42] >>> 30;
        b40 = s[5] << 30 | s[4] >>> 2;
        b41 = s[4] << 30 | s[5] >>> 2;
        b22 = s[14] << 6 | s[15] >>> 26;
        b23 = s[15] << 6 | s[14] >>> 26;
        b4 = s[25] << 11 | s[24] >>> 21;
        b5 = s[24] << 11 | s[25] >>> 21;
        b36 = s[34] << 15 | s[35] >>> 17;
        b37 = s[35] << 15 | s[34] >>> 17;
        b18 = s[45] << 29 | s[44] >>> 3;
        b19 = s[44] << 29 | s[45] >>> 3;
        b10 = s[6] << 28 | s[7] >>> 4;
        b11 = s[7] << 28 | s[6] >>> 4;
        b42 = s[17] << 23 | s[16] >>> 9;
        b43 = s[16] << 23 | s[17] >>> 9;
        b24 = s[26] << 25 | s[27] >>> 7;
        b25 = s[27] << 25 | s[26] >>> 7;
        b6 = s[36] << 21 | s[37] >>> 11;
        b7 = s[37] << 21 | s[36] >>> 11;
        b38 = s[47] << 24 | s[46] >>> 8;
        b39 = s[46] << 24 | s[47] >>> 8;
        b30 = s[8] << 27 | s[9] >>> 5;
        b31 = s[9] << 27 | s[8] >>> 5;
        b12 = s[18] << 20 | s[19] >>> 12;
        b13 = s[19] << 20 | s[18] >>> 12;
        b44 = s[29] << 7 | s[28] >>> 25;
        b45 = s[28] << 7 | s[29] >>> 25;
        b26 = s[38] << 8 | s[39] >>> 24;
        b27 = s[39] << 8 | s[38] >>> 24;
        b8 = s[48] << 14 | s[49] >>> 18;
        b9 = s[49] << 14 | s[48] >>> 18;
        s[0] = b0 ^ ~b2 & b4;
        s[1] = b1 ^ ~b3 & b5;
        s[10] = b10 ^ ~b12 & b14;
        s[11] = b11 ^ ~b13 & b15;
        s[20] = b20 ^ ~b22 & b24;
        s[21] = b21 ^ ~b23 & b25;
        s[30] = b30 ^ ~b32 & b34;
        s[31] = b31 ^ ~b33 & b35;
        s[40] = b40 ^ ~b42 & b44;
        s[41] = b41 ^ ~b43 & b45;
        s[2] = b2 ^ ~b4 & b6;
        s[3] = b3 ^ ~b5 & b7;
        s[12] = b12 ^ ~b14 & b16;
        s[13] = b13 ^ ~b15 & b17;
        s[22] = b22 ^ ~b24 & b26;
        s[23] = b23 ^ ~b25 & b27;
        s[32] = b32 ^ ~b34 & b36;
        s[33] = b33 ^ ~b35 & b37;
        s[42] = b42 ^ ~b44 & b46;
        s[43] = b43 ^ ~b45 & b47;
        s[4] = b4 ^ ~b6 & b8;
        s[5] = b5 ^ ~b7 & b9;
        s[14] = b14 ^ ~b16 & b18;
        s[15] = b15 ^ ~b17 & b19;
        s[24] = b24 ^ ~b26 & b28;
        s[25] = b25 ^ ~b27 & b29;
        s[34] = b34 ^ ~b36 & b38;
        s[35] = b35 ^ ~b37 & b39;
        s[44] = b44 ^ ~b46 & b48;
        s[45] = b45 ^ ~b47 & b49;
        s[6] = b6 ^ ~b8 & b0;
        s[7] = b7 ^ ~b9 & b1;
        s[16] = b16 ^ ~b18 & b10;
        s[17] = b17 ^ ~b19 & b11;
        s[26] = b26 ^ ~b28 & b20;
        s[27] = b27 ^ ~b29 & b21;
        s[36] = b36 ^ ~b38 & b30;
        s[37] = b37 ^ ~b39 & b31;
        s[46] = b46 ^ ~b48 & b40;
        s[47] = b47 ^ ~b49 & b41;
        s[8] = b8 ^ ~b0 & b2;
        s[9] = b9 ^ ~b1 & b3;
        s[18] = b18 ^ ~b10 & b12;
        s[19] = b19 ^ ~b11 & b13;
        s[28] = b28 ^ ~b20 & b22;
        s[29] = b29 ^ ~b21 & b23;
        s[38] = b38 ^ ~b30 & b32;
        s[39] = b39 ^ ~b31 & b33;
        s[48] = b48 ^ ~b40 & b42;
        s[49] = b49 ^ ~b41 & b43;
        s[0] ^= Sha3.ROUND_CONSTANTS[n];
        s[1] ^= Sha3.ROUND_CONSTANTS[n + 1];
      }
    }
  }]);

  return Sha3;
}();
/* Padding to use for Keccak */


Sha3.KECCAK_PADDING = new Uint32Array([1, 256, 65536, 16777216]);
/* @internal */

Sha3.SHIFT = new Uint8Array([0, 8, 16, 24]);
/* @internal */

Sha3.ROUND_CONSTANTS = new Uint32Array([1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648]);
exports.Sha3 = Sha3;

/***/ }),

/***/ "../crypto/dist/error/cryptoError.js":
/*!*******************************************!*\
  !*** ../crypto/dist/error/cryptoError.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var coreError_1 = __webpack_require__(/*! @iota-pico/core/dist/error/coreError */ "../core/dist/error/coreError.js");
/**
 * A crypto implementation of an error.
 */


var CryptoError =
/*#__PURE__*/
function (_coreError_1$CoreErro) {
  _inherits(CryptoError, _coreError_1$CoreErro);

  /**
   * Create an instance of CryptoError.
   * @param message The message for the error.
   * @param additional Additional details about the error.
   * @param innerError Add information from inner error if there was one.
   */
  function CryptoError(message, additional, innerError) {
    var _this;

    _classCallCheck(this, CryptoError);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CryptoError).call(this, message, additional, innerError));
    _this.domain = "Crypto";
    return _this;
  }

  return CryptoError;
}(coreError_1.CoreError);

exports.CryptoError = CryptoError;

/***/ }),

/***/ "../crypto/dist/factories/spongeFactory.js":
/*!*************************************************!*\
  !*** ../crypto/dist/factories/spongeFactory.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var factoryBase_1 = __webpack_require__(/*! @iota-pico/core/dist/factories/factoryBase */ "../core/dist/factories/factoryBase.js");

var curl_1 = __webpack_require__(/*! ../sponges/curl */ "../crypto/dist/sponges/curl.js");

var kerl_1 = __webpack_require__(/*! ../sponges/kerl */ "../crypto/dist/sponges/kerl.js");
/**
 * Factory to generate sponges.
 */


var SpongeFactory =
/*#__PURE__*/
function (_factoryBase_1$Factor) {
  _inherits(SpongeFactory, _factoryBase_1$Factor);

  /**
   * Don't allow manual construction of the factory.
   * @internal
   */
  function SpongeFactory() {
    _classCallCheck(this, SpongeFactory);

    return _possibleConstructorReturn(this, _getPrototypeOf(SpongeFactory).call(this));
  }
  /**
   * Get the instance of the factory.
   * @returns The factory instance.
   */


  _createClass(SpongeFactory, [{
    key: "getInstance",

    /* @internal */
    value: function getInstance() {
      return SpongeFactory.instance();
    }
  }], [{
    key: "instance",
    value: function instance() {
      if (!SpongeFactory._instance) {
        SpongeFactory._instance = new SpongeFactory();

        SpongeFactory._instance.register("curl", function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return _construct(curl_1.Curl, args);
        });

        SpongeFactory._instance.register("curl81", function () {
          return new curl_1.Curl(81);
        });

        SpongeFactory._instance.register("curl27", function () {
          return new curl_1.Curl(27);
        });

        SpongeFactory._instance.register("kerl", function () {
          return new kerl_1.Kerl();
        });
      }

      return SpongeFactory._instance;
    }
  }]);

  return SpongeFactory;
}(factoryBase_1.FactoryBase);

exports.SpongeFactory = SpongeFactory;

/***/ }),

/***/ "../crypto/dist/helpers/bigIntegerHelper.js":
/*!**************************************************!*\
  !*** ../crypto/dist/helpers/bigIntegerHelper.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var numberHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/numberHelper */ "../core/dist/helpers/numberHelper.js");

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

var big_integer_1 = __importDefault(__webpack_require__(/*! big-integer */ "../crypto/node_modules/.registry.npmjs.org/big-integer/1.6.31/node_modules/big-integer/BigInteger.js"));

var cryptoError_1 = __webpack_require__(/*! ../error/cryptoError */ "../crypto/dist/error/cryptoError.js");
/**
 * Helper class to convert between BigInteger and other types.
 * Converted from https://github.com/iotaledger/iri/blob/dev/src/main/java/com/iota/iri/hash/Kerl.java
 */


var BigIntegerHelper =
/*#__PURE__*/
function () {
  function BigIntegerHelper() {
    _classCallCheck(this, BigIntegerHelper);
  }

  _createClass(BigIntegerHelper, null, [{
    key: "tritsToBigInteger",

    /**
     * Convert trits to a bigInteger.
     * @param trits The trits to convert.
     * @param offset Offset within the array to start.
     * @param length The length of the trits array to convert.
     * @returns Big integer version of trits.
     */
    value: function tritsToBigInteger(trits, offset, length) {
      if (!objectHelper_1.ObjectHelper.isType(trits, Int8Array) || trits.length === 0) {
        throw new cryptoError_1.CryptoError("The trits must be a non empty Int8Array");
      }

      if (!numberHelper_1.NumberHelper.isInteger(offset) || offset < 0) {
        throw new cryptoError_1.CryptoError("The offset must be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || length <= 0) {
        throw new cryptoError_1.CryptoError("The length must be a number > 0");
      }

      if (offset + length > trits.length) {
        throw new cryptoError_1.CryptoError("The offset + length is beyond the length of the array");
      }

      var value = big_integer_1.default.zero;

      for (var i = length - 1; i >= 0; i--) {
        value = value.multiply(BigIntegerHelper.RADIX).add(big_integer_1.default(trits[offset + i]));
      }

      return value;
    }
    /**
     * Convert bigInteger to trits.
     * @param value The bigInteger to convert to trits.
     * @param trits The array to receive the trits.
     * @param offset The offset to place the trits in the array.
     * @param length The length of the array.
     */

  }, {
    key: "bigIntegerToTrits",
    value: function bigIntegerToTrits(value, trits, offset, length) {
      if (!objectHelper_1.ObjectHelper.isType(value, big_integer_1.default)) {
        throw new cryptoError_1.CryptoError("The value must be a bigInteger type");
      }

      if (!objectHelper_1.ObjectHelper.isType(trits, Int8Array)) {
        throw new cryptoError_1.CryptoError("The trits must be an Int8Array");
      }

      if (!numberHelper_1.NumberHelper.isInteger(offset) || offset < 0) {
        throw new cryptoError_1.CryptoError("The offset must be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || length <= 0) {
        throw new cryptoError_1.CryptoError("The length must be a number > 0");
      }

      if (offset + length > trits.length) {
        throw new cryptoError_1.CryptoError("The offset + length is beyond the length of the array");
      }

      var absoluteValue = value.compareTo(big_integer_1.default.zero) < 0 ? value.negate() : value;

      for (var i = 0; i < length; i++) {
        var divRemainder = absoluteValue.divmod(BigIntegerHelper.RADIX);
        absoluteValue = divRemainder.quotient;
        var remainder = divRemainder.remainder;

        if (remainder > BigIntegerHelper.MAX_TRIT_VALUE) {
          remainder = BigIntegerHelper.MIN_TRIT_VALUE;
          absoluteValue = absoluteValue.add(big_integer_1.default["1"]);
        }

        trits[offset + i] = remainder.toJSNumber();
      }

      if (value.compareTo(big_integer_1.default.zero) < 0) {
        for (var _i = 0; _i < length; _i++) {
          // Avoid negative zero
          trits[offset + _i] = trits[offset + _i] === 0 ? 0 : -trits[offset + _i];
        }
      }
    }
    /**
     * Convert the bigInteger into bytes.
     * @param value The value to convert.
     * @param destination The destination array to store the bytes.
     * @param offset The offset within the array to store the bytes.
     */

  }, {
    key: "bigIntegerToBytes",
    value: function bigIntegerToBytes(value, destination, offset) {
      if (!objectHelper_1.ObjectHelper.isType(value, big_integer_1.default)) {
        throw new cryptoError_1.CryptoError("The value must be a bigInteger type");
      }

      if (!objectHelper_1.ObjectHelper.isType(destination, ArrayBuffer) || destination.byteLength === 0) {
        throw new cryptoError_1.CryptoError("The destination must be an array");
      }

      if (!numberHelper_1.NumberHelper.isInteger(offset) || offset < 0) {
        throw new cryptoError_1.CryptoError("The offset must be a number >= 0");
      }

      if (destination.byteLength - offset < BigIntegerHelper.BYTE_HASH_LENGTH) {
        throw new cryptoError_1.CryptoError("Destination array has invalid size, it must be at least ".concat(BigIntegerHelper.BYTE_HASH_LENGTH));
      } // Remember if it is negative for later


      var isNeg = value.isNegative() ? -1 : 0;
      var hexString = value.toString(16);

      if (isNeg === -1) {
        // But remove it for now
        hexString = hexString.slice(1);
      } // Now make sure the hex string is an even length so the regex works


      if (hexString.length % 2 === 1) {
        hexString = "0".concat(hexString);
      }

      var matches = hexString.match(/[0-9a-f]{2}/g); // Convert the hex to numbers

      var signedBytes = new Int8Array(matches.map(function (hex) {
        return parseInt("0x".concat(hex), 16);
      }));

      if (isNeg === -1) {
        BigIntegerHelper.twosComplement(signedBytes);
      }

      var dataView = new DataView(destination); // Pad the start of the buffer with the neg value

      var i = offset;

      while (i + signedBytes.length < BigIntegerHelper.BYTE_HASH_LENGTH) {
        dataView.setInt8(i++, isNeg);
      } // And copy in the actual bytes


      for (var j = signedBytes.length; j-- > 0;) {
        dataView.setInt8(i++, signedBytes[signedBytes.length - 1 - j]);
      }
    }
    /**
     * Convert bytes to a bigInteger.
     * @param source The source bytes.
     * @param offset The offset within the bytes to start conversion.
     * @param length The length of the bytes to use for conversion.
     * @returns Big integer version of bytes.
     */

  }, {
    key: "bytesToBigInteger",
    value: function bytesToBigInteger(source, offset, length) {
      if (!objectHelper_1.ObjectHelper.isType(source, ArrayBuffer) || source.byteLength === 0) {
        throw new cryptoError_1.CryptoError("The source must be a non empty number array");
      }

      if (!numberHelper_1.NumberHelper.isInteger(offset) || offset < 0) {
        throw new cryptoError_1.CryptoError("The offset must be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || length <= 0) {
        throw new cryptoError_1.CryptoError("The length must be a number > 0");
      }

      if (source.byteLength - offset < BigIntegerHelper.BYTE_HASH_LENGTH) {
        throw new cryptoError_1.CryptoError("Source array has invalid size, it must be at least ".concat(BigIntegerHelper.BYTE_HASH_LENGTH));
      }

      var dataView = new DataView(source);
      var signedBytes = new Int8Array(dataView.byteLength);

      for (var b = 0; b < dataView.byteLength; b++) {
        signedBytes[b] = dataView.getInt8(b + offset);
      } // Remove the initial padding leaving at least one byte


      var paddingOffset = 0;
      var firstByte = signedBytes[0];
      var isNeg = firstByte < 0; // If the first padding character is negative then reverse the 2s complement
      // but first strip of the leading padding

      if (firstByte === 0 || firstByte === -1) {
        while (signedBytes[paddingOffset] === firstByte && paddingOffset < signedBytes.length - 1) {
          paddingOffset++;
        } // Strip any padding


        signedBytes = signedBytes.slice(paddingOffset);
      }

      if (isNeg) {
        BigIntegerHelper.twosComplement(signedBytes);
      }

      var hexString = isNeg ? "-" : "";
      var dv = new DataView(signedBytes.buffer);

      for (var h = 0; h < dv.byteLength; h++) {
        hexString += "00".concat(dv.getUint8(h).toString(16)).slice(-2);
      }

      return big_integer_1.default(hexString, 16);
    }
    /* @internal */

  }, {
    key: "twosComplement",
    value: function twosComplement(signedBytes) {
      // if the whole number is negative then
      // change to 2's complements by noting all the numbers
      // and adding 1 to the last i.e. ~bignum+1
      for (var b = 0; b < signedBytes.length; b++) {
        signedBytes[b] = ~signedBytes[b];
      } // Add 1 to last number, if the number is 0xFF continue to carry


      var c = signedBytes.length - 1;

      do {
        signedBytes[c]++;
      } while (signedBytes[c--] === 0 && c > 0);
    }
  }]);

  return BigIntegerHelper;
}();
/* @internal */


BigIntegerHelper.RADIX = big_integer_1.default(3);
/* @internal */

BigIntegerHelper.MAX_TRIT_VALUE = BigIntegerHelper.RADIX.minus(1).divide(2);
/* @internal */

BigIntegerHelper.MIN_TRIT_VALUE = BigIntegerHelper.MAX_TRIT_VALUE.negate();
/* @internal */

BigIntegerHelper.BIT_HASH_LENGTH = 384;
/* @internal */

BigIntegerHelper.BYTE_HASH_LENGTH = BigIntegerHelper.BIT_HASH_LENGTH / 8;
exports.BigIntegerHelper = BigIntegerHelper;

/***/ }),

/***/ "../crypto/dist/helpers/transactionHelper.js":
/*!***************************************************!*\
  !*** ../crypto/dist/helpers/transactionHelper.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

var hash_1 = __webpack_require__(/*! @iota-pico/data/dist/data/hash */ "../data/dist/data/hash.js");

var transaction_1 = __webpack_require__(/*! @iota-pico/data/dist/data/transaction */ "../data/dist/data/transaction.js");

var trits_1 = __webpack_require__(/*! @iota-pico/data/dist/data/trits */ "../data/dist/data/trits.js");

var cryptoError_1 = __webpack_require__(/*! ../error/cryptoError */ "../crypto/dist/error/cryptoError.js");

var spongeFactory_1 = __webpack_require__(/*! ../factories/spongeFactory */ "../crypto/dist/factories/spongeFactory.js");
/**
 * Helper class for transactions.
 * Converted https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/signing/signing.js
 */


var TransactionHelper =
/*#__PURE__*/
function () {
  function TransactionHelper() {
    _classCallCheck(this, TransactionHelper);
  }

  _createClass(TransactionHelper, null, [{
    key: "hash",

    /**
     * Create the hash for a transaction.
     * @param transaction The transaction to generate the hash.
     * @returns The hash of thr transaction.
     */
    value: function hash(transaction) {
      if (!objectHelper_1.ObjectHelper.isType(transaction, transaction_1.Transaction)) {
        throw new cryptoError_1.CryptoError("The transaction must be of type Transaction");
      }

      var curl = spongeFactory_1.SpongeFactory.instance().create("curl");
      var transactionTrits = trits_1.Trits.fromTrytes(transaction.toTrytes()).toArray();
      curl.initialize();
      curl.absorb(transactionTrits, 0, transactionTrits.length);
      var hashTrits = new Int8Array(curl.getConstant("HASH_LENGTH"));
      curl.squeeze(hashTrits, 0, hashTrits.length);
      return hash_1.Hash.fromTrytes(trits_1.Trits.fromArray(hashTrits).toTrytes());
    }
  }]);

  return TransactionHelper;
}();

exports.TransactionHelper = TransactionHelper;

/***/ }),

/***/ "../crypto/dist/proofOfWork/proofOfWorkBase.js":
/*!*****************************************************!*\
  !*** ../crypto/dist/proofOfWork/proofOfWorkBase.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "../crypto/node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.49/node_modules/@babel/runtime/regenerator/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var arrayHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/arrayHelper */ "../core/dist/helpers/arrayHelper.js");

var numberHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/numberHelper */ "../core/dist/helpers/numberHelper.js");

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

var timeService_1 = __webpack_require__(/*! @iota-pico/core/dist/services/timeService */ "../core/dist/services/timeService.js");

var hash_1 = __webpack_require__(/*! @iota-pico/data/dist/data/hash */ "../data/dist/data/hash.js");

var tag_1 = __webpack_require__(/*! @iota-pico/data/dist/data/tag */ "../data/dist/data/tag.js");

var transaction_1 = __webpack_require__(/*! @iota-pico/data/dist/data/transaction */ "../data/dist/data/transaction.js");

var tryteNumber_1 = __webpack_require__(/*! @iota-pico/data/dist/data/tryteNumber */ "../data/dist/data/tryteNumber.js");

var trytes_1 = __webpack_require__(/*! @iota-pico/data/dist/data/trytes */ "../data/dist/data/trytes.js");

var cryptoError_1 = __webpack_require__(/*! ../error/cryptoError */ "../crypto/dist/error/cryptoError.js");

var transactionHelper_1 = __webpack_require__(/*! ../helpers/transactionHelper */ "../crypto/dist/helpers/transactionHelper.js");
/**
 * Base class for proof of work.
 */


var ProofOfWorkBase =
/*#__PURE__*/
function () {
  /**
   * Create an instance of ProofOfWork.
   * @param timeService Service to get the time for attachments.
   */
  function ProofOfWorkBase(timeService) {
    _classCallCheck(this, ProofOfWorkBase);

    this._timeService = timeService || new timeService_1.TimeService();
  }
  /**
   * Allow the proof of work to perform any initialization.
   * Will throw an exception if the implementation is not supported.
   * @returns Promise.
   */


  _createClass(ProofOfWorkBase, [{
    key: "initialize",
    value: function () {
      var _initialize = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", Promise.resolve());

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function initialize() {
        return _initialize.apply(this, arguments);
      };
    }()
    /**
     * Perform a proof of work on the data.
     * @param trunkTransaction The trunkTransaction to use for the pow.
     * @param branchTransaction The branchTransaction to use for the pow.
     * @param trytes The trytes to perform the pow on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns The trytes produced by the proof of work.
     */

  }, {
    key: "pow",
    value: function () {
      var _pow = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(trunkTransaction, branchTransaction, trytes, minWeightMagnitude) {
        var finalTrytes, previousTransactionHash, i, transaction, newTrytes, singleTrytes, returnTransaction;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (objectHelper_1.ObjectHelper.isType(trunkTransaction, hash_1.Hash)) {
                  _context2.next = 2;
                  break;
                }

                throw new cryptoError_1.CryptoError("The trunkTransaction must be an object of type Hash");

              case 2:
                if (objectHelper_1.ObjectHelper.isType(branchTransaction, hash_1.Hash)) {
                  _context2.next = 4;
                  break;
                }

                throw new cryptoError_1.CryptoError("The branchTransaction must be an object of type Hash");

              case 4:
                if (arrayHelper_1.ArrayHelper.isTyped(trytes, trytes_1.Trytes)) {
                  _context2.next = 6;
                  break;
                }

                throw new cryptoError_1.CryptoError("The trytes must be an array of type Trytes");

              case 6:
                if (!(!numberHelper_1.NumberHelper.isInteger(minWeightMagnitude) || minWeightMagnitude <= 0)) {
                  _context2.next = 8;
                  break;
                }

                throw new cryptoError_1.CryptoError("The minWeightMagnitude must be > 0");

              case 8:
                finalTrytes = [];
                i = 0;

              case 10:
                if (!(i < trytes.length)) {
                  _context2.next = 35;
                  break;
                }

                transaction = transaction_1.Transaction.fromTrytes(trytes[i]); // Start with last index transaction
                // Assign it the trunk / branch which the user has supplied
                // If there is a bundle, chain the bundle transactions via
                // trunkTransaction together

                transaction.attachmentTimestamp = tryteNumber_1.TryteNumber.fromNumber(this._timeService.msSinceEpoch());
                transaction.attachmentTimestampLowerBound = tryteNumber_1.TryteNumber.fromNumber(0);
                transaction.attachmentTimestampUpperBound = tryteNumber_1.TryteNumber.fromNumber(ProofOfWorkBase.MAX_TIMESTAMP_VALUE); // If this is the first transaction, to be processed
                // Make sure that it's the last in the bundle and then
                // assign it the supplied trunk and branch transactions

                if (!objectHelper_1.ObjectHelper.isEmpty(previousTransactionHash)) {
                  _context2.next = 22;
                  break;
                }

                if (!(transaction.lastIndex.toNumber() !== transaction.currentIndex.toNumber())) {
                  _context2.next = 18;
                  break;
                }

                throw new cryptoError_1.CryptoError("Wrong bundle order. The bundle should be ordered in descending order from currentIndex");

              case 18:
                transaction.trunkTransaction = trunkTransaction;
                transaction.branchTransaction = branchTransaction;
                _context2.next = 24;
                break;

              case 22:
                transaction.trunkTransaction = previousTransactionHash;
                transaction.branchTransaction = trunkTransaction;

              case 24:
                newTrytes = transaction.toTrytes();
                _context2.next = 27;
                return this.singlePow(newTrytes, minWeightMagnitude);

              case 27:
                singleTrytes = _context2.sent;
                transaction.nonce = tag_1.Tag.fromTrytes(singleTrytes.sub(transaction_1.Transaction.LENGTH - tag_1.Tag.LENGTH, tag_1.Tag.LENGTH)); // Calculate the hash of the new transaction with nonce and use that as the previous hash for next entry

                returnTransaction = transaction_1.Transaction.fromTrytes(singleTrytes);
                previousTransactionHash = transactionHelper_1.TransactionHelper.hash(returnTransaction);
                finalTrytes.push(returnTransaction);

              case 32:
                i++;
                _context2.next = 10;
                break;

              case 35:
                return _context2.abrupt("return", finalTrytes.reverse().map(function (transaction) {
                  return transaction.toTrytes();
                }));

              case 36:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function pow(_x, _x2, _x3, _x4) {
        return _pow.apply(this, arguments);
      };
    }()
  }]);

  return ProofOfWorkBase;
}();
/**
 * The maximum timestamp value used in proof of work.
 */


ProofOfWorkBase.MAX_TIMESTAMP_VALUE = (Math.pow(3, 27) - 1) / 2;
exports.ProofOfWorkBase = ProofOfWorkBase;

/***/ }),

/***/ "../crypto/dist/sponges/curl.js":
/*!**************************************!*\
  !*** ../crypto/dist/sponges/curl.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var numberHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/numberHelper */ "../core/dist/helpers/numberHelper.js");

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

var cryptoError_1 = __webpack_require__(/*! ../error/cryptoError */ "../crypto/dist/error/cryptoError.js");
/**
 * Implementation of ISponge using Curl algorithm.
 * https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/curl/curl.js
 */


var Curl =
/*#__PURE__*/
function () {
  /**
   * Create a new instance of Curl.
   * @param rounds The number of rounds to use.
   */
  function Curl() {
    var rounds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Curl.NUMBER_OF_ROUNDS;

    _classCallCheck(this, Curl);

    this._numberOfRounds = rounds;
  }
  /**
   * Get the constant for the spone.
   * @param name The name of the constant to get.
   * @returns The constant.
   */


  _createClass(Curl, [{
    key: "getConstant",
    value: function getConstant(name) {
      switch (name) {
        case "NUMBER_OF_ROUNDS":
          {
            return this._numberOfRounds;
          }

        case "HASH_LENGTH":
        case "STATE_LENGTH":
          {
            return Curl[name];
          }

        default:
          throw new cryptoError_1.CryptoError("Unknown constant requested ".concat(name));
      }
    }
    /**
     * Get the state.
     * @returns The state.
     */

  }, {
    key: "getState",
    value: function getState() {
      return this._state;
    }
    /**
     * Initialise the hasher.
     * @param state The initial state for the hasher.
     */

  }, {
    key: "initialize",
    value: function initialize(state) {
      if (state) {
        this._state = state;
      } else {
        this._state = new Int8Array(Curl.STATE_LENGTH);
      }
    }
    /**
     * Reset the hasher.
     */

  }, {
    key: "reset",
    value: function reset() {
      this.initialize();
    }
    /**
     * Absorb trits into the hash.
     * @param trits The trits to absorb.
     * @param offset The offset into the trits to absorb from.
     * @param length The number of trits to absorb.
     */

  }, {
    key: "absorb",
    value: function absorb(trits, offset, length) {
      if (!objectHelper_1.ObjectHelper.isType(trits, Int8Array) || trits.length === 0) {
        throw new cryptoError_1.CryptoError("Trits must be a non empty Int8Array");
      }

      if (!numberHelper_1.NumberHelper.isInteger(offset) || offset < 0) {
        throw new cryptoError_1.CryptoError("Offset must be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || length < 0) {
        throw new cryptoError_1.CryptoError("Length must be a number >= 0");
      }

      if (length + offset > trits.length) {
        throw new cryptoError_1.CryptoError("The offset + length is beyond the length of the trits");
      }

      var localOffset = offset;
      var localLength = length;

      do {
        var i = 0;
        var limit = localLength < Curl.HASH_LENGTH ? localLength : Curl.HASH_LENGTH;

        while (i < limit) {
          this._state[i++] = trits[localOffset++];
        }

        this.transform();
        localLength -= Curl.HASH_LENGTH;
      } while (localLength > 0);
    }
    /**
     * Squeeze trits into the hash.
     * @param trits The trits to squeeze.
     * @param offset The offset into the trits to squeeze from.
     * @param length The number of trits to squeeze.
     */

  }, {
    key: "squeeze",
    value: function squeeze(trits, offset, length) {
      if (!objectHelper_1.ObjectHelper.isType(trits, Int8Array) || trits.length === 0) {
        throw new cryptoError_1.CryptoError("Trits must be a non empty Int8Array");
      }

      if (!numberHelper_1.NumberHelper.isInteger(offset) || offset < 0) {
        throw new cryptoError_1.CryptoError("Offset must be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || length < 0) {
        throw new cryptoError_1.CryptoError("Length must be a number >= 0");
      }

      if (length + offset > trits.length) {
        throw new cryptoError_1.CryptoError("The offset + length is beyond the length of the trits");
      }

      var localOffset = offset;
      var localLength = length;

      do {
        var i = 0;
        var limit = localLength < Curl.HASH_LENGTH ? length : Curl.HASH_LENGTH;

        while (i < limit) {
          trits[localOffset++] = this._state[i++];
        }

        this.transform();
        localLength -= Curl.HASH_LENGTH;
      } while (localLength > 0);
    }
    /**
     * Transform the hash.
     * @internal
     */

  }, {
    key: "transform",
    value: function transform() {
      var stateCopy;
      var index = 0;

      for (var round = 0; round < this._numberOfRounds; round++) {
        stateCopy = new Int8Array(this._state.slice());

        for (var i = 0; i < Curl.STATE_LENGTH; i++) {
          this._state[i] = Curl.TRUTH_TABLE[stateCopy[index] + (stateCopy[index += index < 365 ? 364 : -365] << 2) + 5];
        }
      }
    }
  }]);

  return Curl;
}();

Curl.HASH_LENGTH = 243;
Curl.NUMBER_OF_ROUNDS = 81;
Curl.STATE_LENGTH = Curl.HASH_LENGTH * 3;
/* @internal */

Curl.TRUTH_TABLE = new Int8Array([1, 0, -1, 2, 1, -1, 0, 2, -1, 1, 0]);
exports.Curl = Curl;

/***/ }),

/***/ "../crypto/dist/sponges/kerl.js":
/*!**************************************!*\
  !*** ../crypto/dist/sponges/kerl.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var numberHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/numberHelper */ "../core/dist/helpers/numberHelper.js");

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

var sha3_1 = __webpack_require__(/*! ../digests/sha3 */ "../crypto/dist/digests/sha3.js");

var cryptoError_1 = __webpack_require__(/*! ../error/cryptoError */ "../crypto/dist/error/cryptoError.js");

var bigIntegerHelper_1 = __webpack_require__(/*! ../helpers/bigIntegerHelper */ "../crypto/dist/helpers/bigIntegerHelper.js");
/**
 * Implementation of ISponge using Kerl algorithm.
 * https://github.com/iotaledger/iri/blob/dev/src/main/java/com/iota/iri/hash/Kerl.java
 */


var Kerl =
/*#__PURE__*/
function () {
  /**
   * Create a new instance of Kerl.
   */
  function Kerl() {
    _classCallCheck(this, Kerl);

    this._keccak = new sha3_1.Sha3(384, sha3_1.Sha3.KECCAK_PADDING, 384);
  }
  /**
   * Get the constant for the spone.
   * @param name The name of the constant to get.
   * @returns The constant.
   */


  _createClass(Kerl, [{
    key: "getConstant",
    value: function getConstant(name) {
      switch (name) {
        case "HASH_LENGTH":
        case "BIT_HASH_LENGTH":
        case "BYTE_HASH_LENGTH":
          {
            return Kerl[name];
          }

        default:
          throw new cryptoError_1.CryptoError("Unknown constant requested ".concat(name));
      }
    }
    /**
     * Get the state.
     * @returns The state.
     */

  }, {
    key: "getState",
    value: function getState() {
      return undefined;
    }
    /**
     * Initialise the hasher.
     * @param state The initial state for the hasher.
     */

  }, {
    key: "initialize",
    value: function initialize(state) {}
    /**
     * Reset the hasher.
     */

  }, {
    key: "reset",
    value: function reset() {
      this._keccak.reset();
    }
    /**
     * Absorb trits into the hash.
     * @param trits The trits to absorb.
     * @param offset The offset into the trits to absorb from.
     * @param length The number of trits to absorb.
     */

  }, {
    key: "absorb",
    value: function absorb(trits, offset, length) {
      if (!objectHelper_1.ObjectHelper.isType(trits, Int8Array) || trits.length === 0) {
        throw new cryptoError_1.CryptoError("Trits must be a non empty Int8Array");
      }

      if (!numberHelper_1.NumberHelper.isInteger(offset) || offset < 0) {
        throw new cryptoError_1.CryptoError("Offset must be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || length < 0) {
        throw new cryptoError_1.CryptoError("Length must be a number >= 0");
      }

      if (length + offset > trits.length) {
        throw new cryptoError_1.CryptoError("The offset + length is beyond the length of the trits");
      }

      if (length % 243 !== 0) {
        throw new cryptoError_1.CryptoError("Length must be a multiple of ".concat(Kerl.HASH_LENGTH), {
          length: length
        });
      }

      var localOffset = offset;
      var localLength = length;

      do {
        var tritState = trits.slice(localOffset, localOffset + Kerl.HASH_LENGTH);
        tritState[Kerl.HASH_LENGTH - 1] = 0;
        var bigInt = bigIntegerHelper_1.BigIntegerHelper.tritsToBigInteger(tritState, 0, tritState.length);
        var byteState = new ArrayBuffer(Kerl.BYTE_HASH_LENGTH);
        bigIntegerHelper_1.BigIntegerHelper.bigIntegerToBytes(bigInt, byteState, 0);

        this._keccak.update(byteState);

        localOffset += Kerl.HASH_LENGTH;
        localLength -= Kerl.HASH_LENGTH;
      } while (localLength > 0);
    }
    /**
     * Squeeze trits into the hash.
     * @param trits The trits to squeeze.
     * @param offset The offset into the trits to squeeze from.
     * @param length The number of trits to squeeze.
     */

  }, {
    key: "squeeze",
    value: function squeeze(trits, offset, length) {
      if (!objectHelper_1.ObjectHelper.isType(trits, Int8Array) || trits.length === 0) {
        throw new cryptoError_1.CryptoError("Trits must be a non empty Int8Array");
      }

      if (!numberHelper_1.NumberHelper.isInteger(offset) || offset < 0) {
        throw new cryptoError_1.CryptoError("Offset must be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || length < 0) {
        throw new cryptoError_1.CryptoError("Length must be a number >= 0");
      }

      if (length + offset > trits.length) {
        throw new cryptoError_1.CryptoError("The offset + length is beyond the length of the trits");
      }

      if (length % 243 !== 0) {
        throw new cryptoError_1.CryptoError("Length must be a multiple of ".concat(Kerl.HASH_LENGTH), {
          length: length
        });
      }

      var localOffset = offset;
      var localLength = length;

      do {
        var byteStateBuffer = this._keccak.digest();

        var bigInt = bigIntegerHelper_1.BigIntegerHelper.bytesToBigInteger(byteStateBuffer, 0, Kerl.BYTE_HASH_LENGTH);
        var tritState = new Int8Array(Kerl.HASH_LENGTH);
        bigIntegerHelper_1.BigIntegerHelper.bigIntegerToTrits(bigInt, tritState, 0, Kerl.HASH_LENGTH);
        tritState[Kerl.HASH_LENGTH - 1] = 0;
        var i = 0;

        while (i < Kerl.HASH_LENGTH) {
          trits[localOffset++] = tritState[i++];
        }

        var dv = new DataView(byteStateBuffer);

        for (i = 0; i < dv.byteLength; i++) {
          dv.setUint8(i, dv.getUint8(i) ^ 0xFF);
        }

        this._keccak.update(byteStateBuffer);

        localLength -= Kerl.HASH_LENGTH;
      } while (localLength > 0);
    }
  }]);

  return Kerl;
}();
/* @internal */


Kerl.HASH_LENGTH = 243;
/* @internal */

Kerl.BIT_HASH_LENGTH = 384;
/* @internal */

Kerl.BYTE_HASH_LENGTH = Kerl.BIT_HASH_LENGTH / 8;
exports.Kerl = Kerl;

/***/ }),

/***/ "../crypto/node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.49/node_modules/@babel/runtime/regenerator/index.js":
/*!********************************************************************************************************************************!*\
  !*** ../crypto/node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.49/node_modules/@babel/runtime/regenerator/index.js ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "../crypto/node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "../crypto/node_modules/.registry.npmjs.org/big-integer/1.6.31/node_modules/big-integer/BigInteger.js":
/*!************************************************************************************************************!*\
  !*** ../crypto/node_modules/.registry.npmjs.org/big-integer/1.6.31/node_modules/big-integer/BigInteger.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var bigInt = (function (undefined) {
    "use strict";

    var BASE = 1e7,
        LOG_BASE = 7,
        MAX_INT = 9007199254740992,
        MAX_INT_ARR = smallToArray(MAX_INT),
        LOG_MAX_INT = Math.log(MAX_INT);

    function Integer(v, radix) {
        if (typeof v === "undefined") return Integer[0];
        if (typeof radix !== "undefined") return +radix === 10 ? parseValue(v) : parseBase(v, radix);
        return parseValue(v);
    }

    function BigInteger(value, sign) {
        this.value = value;
        this.sign = sign;
        this.isSmall = false;
    }
    BigInteger.prototype = Object.create(Integer.prototype);

    function SmallInteger(value) {
        this.value = value;
        this.sign = value < 0;
        this.isSmall = true;
    }
    SmallInteger.prototype = Object.create(Integer.prototype);

    function isPrecise(n) {
        return -MAX_INT < n && n < MAX_INT;
    }

    function smallToArray(n) { // For performance reasons doesn't reference BASE, need to change this function if BASE changes
        if (n < 1e7)
            return [n];
        if (n < 1e14)
            return [n % 1e7, Math.floor(n / 1e7)];
        return [n % 1e7, Math.floor(n / 1e7) % 1e7, Math.floor(n / 1e14)];
    }

    function arrayToSmall(arr) { // If BASE changes this function may need to change
        trim(arr);
        var length = arr.length;
        if (length < 4 && compareAbs(arr, MAX_INT_ARR) < 0) {
            switch (length) {
                case 0: return 0;
                case 1: return arr[0];
                case 2: return arr[0] + arr[1] * BASE;
                default: return arr[0] + (arr[1] + arr[2] * BASE) * BASE;
            }
        }
        return arr;
    }

    function trim(v) {
        var i = v.length;
        while (v[--i] === 0);
        v.length = i + 1;
    }

    function createArray(length) { // function shamelessly stolen from Yaffle's library https://github.com/Yaffle/BigInteger
        var x = new Array(length);
        var i = -1;
        while (++i < length) {
            x[i] = 0;
        }
        return x;
    }

    function truncate(n) {
        if (n > 0) return Math.floor(n);
        return Math.ceil(n);
    }

    function add(a, b) { // assumes a and b are arrays with a.length >= b.length
        var l_a = a.length,
            l_b = b.length,
            r = new Array(l_a),
            carry = 0,
            base = BASE,
            sum, i;
        for (i = 0; i < l_b; i++) {
            sum = a[i] + b[i] + carry;
            carry = sum >= base ? 1 : 0;
            r[i] = sum - carry * base;
        }
        while (i < l_a) {
            sum = a[i] + carry;
            carry = sum === base ? 1 : 0;
            r[i++] = sum - carry * base;
        }
        if (carry > 0) r.push(carry);
        return r;
    }

    function addAny(a, b) {
        if (a.length >= b.length) return add(a, b);
        return add(b, a);
    }

    function addSmall(a, carry) { // assumes a is array, carry is number with 0 <= carry < MAX_INT
        var l = a.length,
            r = new Array(l),
            base = BASE,
            sum, i;
        for (i = 0; i < l; i++) {
            sum = a[i] - base + carry;
            carry = Math.floor(sum / base);
            r[i] = sum - carry * base;
            carry += 1;
        }
        while (carry > 0) {
            r[i++] = carry % base;
            carry = Math.floor(carry / base);
        }
        return r;
    }

    BigInteger.prototype.add = function (v) {
        var n = parseValue(v);
        if (this.sign !== n.sign) {
            return this.subtract(n.negate());
        }
        var a = this.value, b = n.value;
        if (n.isSmall) {
            return new BigInteger(addSmall(a, Math.abs(b)), this.sign);
        }
        return new BigInteger(addAny(a, b), this.sign);
    };
    BigInteger.prototype.plus = BigInteger.prototype.add;

    SmallInteger.prototype.add = function (v) {
        var n = parseValue(v);
        var a = this.value;
        if (a < 0 !== n.sign) {
            return this.subtract(n.negate());
        }
        var b = n.value;
        if (n.isSmall) {
            if (isPrecise(a + b)) return new SmallInteger(a + b);
            b = smallToArray(Math.abs(b));
        }
        return new BigInteger(addSmall(b, Math.abs(a)), a < 0);
    };
    SmallInteger.prototype.plus = SmallInteger.prototype.add;

    function subtract(a, b) { // assumes a and b are arrays with a >= b
        var a_l = a.length,
            b_l = b.length,
            r = new Array(a_l),
            borrow = 0,
            base = BASE,
            i, difference;
        for (i = 0; i < b_l; i++) {
            difference = a[i] - borrow - b[i];
            if (difference < 0) {
                difference += base;
                borrow = 1;
            } else borrow = 0;
            r[i] = difference;
        }
        for (i = b_l; i < a_l; i++) {
            difference = a[i] - borrow;
            if (difference < 0) difference += base;
            else {
                r[i++] = difference;
                break;
            }
            r[i] = difference;
        }
        for (; i < a_l; i++) {
            r[i] = a[i];
        }
        trim(r);
        return r;
    }

    function subtractAny(a, b, sign) {
        var value;
        if (compareAbs(a, b) >= 0) {
            value = subtract(a, b);
        } else {
            value = subtract(b, a);
            sign = !sign;
        }
        value = arrayToSmall(value);
        if (typeof value === "number") {
            if (sign) value = -value;
            return new SmallInteger(value);
        }
        return new BigInteger(value, sign);
    }

    function subtractSmall(a, b, sign) { // assumes a is array, b is number with 0 <= b < MAX_INT
        var l = a.length,
            r = new Array(l),
            carry = -b,
            base = BASE,
            i, difference;
        for (i = 0; i < l; i++) {
            difference = a[i] + carry;
            carry = Math.floor(difference / base);
            difference %= base;
            r[i] = difference < 0 ? difference + base : difference;
        }
        r = arrayToSmall(r);
        if (typeof r === "number") {
            if (sign) r = -r;
            return new SmallInteger(r);
        } return new BigInteger(r, sign);
    }

    BigInteger.prototype.subtract = function (v) {
        var n = parseValue(v);
        if (this.sign !== n.sign) {
            return this.add(n.negate());
        }
        var a = this.value, b = n.value;
        if (n.isSmall)
            return subtractSmall(a, Math.abs(b), this.sign);
        return subtractAny(a, b, this.sign);
    };
    BigInteger.prototype.minus = BigInteger.prototype.subtract;

    SmallInteger.prototype.subtract = function (v) {
        var n = parseValue(v);
        var a = this.value;
        if (a < 0 !== n.sign) {
            return this.add(n.negate());
        }
        var b = n.value;
        if (n.isSmall) {
            return new SmallInteger(a - b);
        }
        return subtractSmall(b, Math.abs(a), a >= 0);
    };
    SmallInteger.prototype.minus = SmallInteger.prototype.subtract;

    BigInteger.prototype.negate = function () {
        return new BigInteger(this.value, !this.sign);
    };
    SmallInteger.prototype.negate = function () {
        var sign = this.sign;
        var small = new SmallInteger(-this.value);
        small.sign = !sign;
        return small;
    };

    BigInteger.prototype.abs = function () {
        return new BigInteger(this.value, false);
    };
    SmallInteger.prototype.abs = function () {
        return new SmallInteger(Math.abs(this.value));
    };

    function multiplyLong(a, b) {
        var a_l = a.length,
            b_l = b.length,
            l = a_l + b_l,
            r = createArray(l),
            base = BASE,
            product, carry, i, a_i, b_j;
        for (i = 0; i < a_l; ++i) {
            a_i = a[i];
            for (var j = 0; j < b_l; ++j) {
                b_j = b[j];
                product = a_i * b_j + r[i + j];
                carry = Math.floor(product / base);
                r[i + j] = product - carry * base;
                r[i + j + 1] += carry;
            }
        }
        trim(r);
        return r;
    }

    function multiplySmall(a, b) { // assumes a is array, b is number with |b| < BASE
        var l = a.length,
            r = new Array(l),
            base = BASE,
            carry = 0,
            product, i;
        for (i = 0; i < l; i++) {
            product = a[i] * b + carry;
            carry = Math.floor(product / base);
            r[i] = product - carry * base;
        }
        while (carry > 0) {
            r[i++] = carry % base;
            carry = Math.floor(carry / base);
        }
        return r;
    }

    function shiftLeft(x, n) {
        var r = [];
        while (n-- > 0) r.push(0);
        return r.concat(x);
    }

    function multiplyKaratsuba(x, y) {
        var n = Math.max(x.length, y.length);

        if (n <= 30) return multiplyLong(x, y);
        n = Math.ceil(n / 2);

        var b = x.slice(n),
            a = x.slice(0, n),
            d = y.slice(n),
            c = y.slice(0, n);

        var ac = multiplyKaratsuba(a, c),
            bd = multiplyKaratsuba(b, d),
            abcd = multiplyKaratsuba(addAny(a, b), addAny(c, d));

        var product = addAny(addAny(ac, shiftLeft(subtract(subtract(abcd, ac), bd), n)), shiftLeft(bd, 2 * n));
        trim(product);
        return product;
    }

    // The following function is derived from a surface fit of a graph plotting the performance difference
    // between long multiplication and karatsuba multiplication versus the lengths of the two arrays.
    function useKaratsuba(l1, l2) {
        return -0.012 * l1 - 0.012 * l2 + 0.000015 * l1 * l2 > 0;
    }

    BigInteger.prototype.multiply = function (v) {
        var n = parseValue(v),
            a = this.value, b = n.value,
            sign = this.sign !== n.sign,
            abs;
        if (n.isSmall) {
            if (b === 0) return Integer[0];
            if (b === 1) return this;
            if (b === -1) return this.negate();
            abs = Math.abs(b);
            if (abs < BASE) {
                return new BigInteger(multiplySmall(a, abs), sign);
            }
            b = smallToArray(abs);
        }
        if (useKaratsuba(a.length, b.length)) // Karatsuba is only faster for certain array sizes
            return new BigInteger(multiplyKaratsuba(a, b), sign);
        return new BigInteger(multiplyLong(a, b), sign);
    };

    BigInteger.prototype.times = BigInteger.prototype.multiply;

    function multiplySmallAndArray(a, b, sign) { // a >= 0
        if (a < BASE) {
            return new BigInteger(multiplySmall(b, a), sign);
        }
        return new BigInteger(multiplyLong(b, smallToArray(a)), sign);
    }
    SmallInteger.prototype._multiplyBySmall = function (a) {
        if (isPrecise(a.value * this.value)) {
            return new SmallInteger(a.value * this.value);
        }
        return multiplySmallAndArray(Math.abs(a.value), smallToArray(Math.abs(this.value)), this.sign !== a.sign);
    };
    BigInteger.prototype._multiplyBySmall = function (a) {
        if (a.value === 0) return Integer[0];
        if (a.value === 1) return this;
        if (a.value === -1) return this.negate();
        return multiplySmallAndArray(Math.abs(a.value), this.value, this.sign !== a.sign);
    };
    SmallInteger.prototype.multiply = function (v) {
        return parseValue(v)._multiplyBySmall(this);
    };
    SmallInteger.prototype.times = SmallInteger.prototype.multiply;

    function square(a) {
        var l = a.length,
            r = createArray(l + l),
            base = BASE,
            product, carry, i, a_i, a_j;
        for (i = 0; i < l; i++) {
            a_i = a[i];
            for (var j = 0; j < l; j++) {
                a_j = a[j];
                product = a_i * a_j + r[i + j];
                carry = Math.floor(product / base);
                r[i + j] = product - carry * base;
                r[i + j + 1] += carry;
            }
        }
        trim(r);
        return r;
    }

    BigInteger.prototype.square = function () {
        return new BigInteger(square(this.value), false);
    };

    SmallInteger.prototype.square = function () {
        var value = this.value * this.value;
        if (isPrecise(value)) return new SmallInteger(value);
        return new BigInteger(square(smallToArray(Math.abs(this.value))), false);
    };

    function divMod1(a, b) { // Left over from previous version. Performs faster than divMod2 on smaller input sizes.
        var a_l = a.length,
            b_l = b.length,
            base = BASE,
            result = createArray(b.length),
            divisorMostSignificantDigit = b[b_l - 1],
            // normalization
            lambda = Math.ceil(base / (2 * divisorMostSignificantDigit)),
            remainder = multiplySmall(a, lambda),
            divisor = multiplySmall(b, lambda),
            quotientDigit, shift, carry, borrow, i, l, q;
        if (remainder.length <= a_l) remainder.push(0);
        divisor.push(0);
        divisorMostSignificantDigit = divisor[b_l - 1];
        for (shift = a_l - b_l; shift >= 0; shift--) {
            quotientDigit = base - 1;
            if (remainder[shift + b_l] !== divisorMostSignificantDigit) {
                quotientDigit = Math.floor((remainder[shift + b_l] * base + remainder[shift + b_l - 1]) / divisorMostSignificantDigit);
            }
            // quotientDigit <= base - 1
            carry = 0;
            borrow = 0;
            l = divisor.length;
            for (i = 0; i < l; i++) {
                carry += quotientDigit * divisor[i];
                q = Math.floor(carry / base);
                borrow += remainder[shift + i] - (carry - q * base);
                carry = q;
                if (borrow < 0) {
                    remainder[shift + i] = borrow + base;
                    borrow = -1;
                } else {
                    remainder[shift + i] = borrow;
                    borrow = 0;
                }
            }
            while (borrow !== 0) {
                quotientDigit -= 1;
                carry = 0;
                for (i = 0; i < l; i++) {
                    carry += remainder[shift + i] - base + divisor[i];
                    if (carry < 0) {
                        remainder[shift + i] = carry + base;
                        carry = 0;
                    } else {
                        remainder[shift + i] = carry;
                        carry = 1;
                    }
                }
                borrow += carry;
            }
            result[shift] = quotientDigit;
        }
        // denormalization
        remainder = divModSmall(remainder, lambda)[0];
        return [arrayToSmall(result), arrayToSmall(remainder)];
    }

    function divMod2(a, b) { // Implementation idea shamelessly stolen from Silent Matt's library http://silentmatt.com/biginteger/
        // Performs faster than divMod1 on larger input sizes.
        var a_l = a.length,
            b_l = b.length,
            result = [],
            part = [],
            base = BASE,
            guess, xlen, highx, highy, check;
        while (a_l) {
            part.unshift(a[--a_l]);
            trim(part);
            if (compareAbs(part, b) < 0) {
                result.push(0);
                continue;
            }
            xlen = part.length;
            highx = part[xlen - 1] * base + part[xlen - 2];
            highy = b[b_l - 1] * base + b[b_l - 2];
            if (xlen > b_l) {
                highx = (highx + 1) * base;
            }
            guess = Math.ceil(highx / highy);
            do {
                check = multiplySmall(b, guess);
                if (compareAbs(check, part) <= 0) break;
                guess--;
            } while (guess);
            result.push(guess);
            part = subtract(part, check);
        }
        result.reverse();
        return [arrayToSmall(result), arrayToSmall(part)];
    }

    function divModSmall(value, lambda) {
        var length = value.length,
            quotient = createArray(length),
            base = BASE,
            i, q, remainder, divisor;
        remainder = 0;
        for (i = length - 1; i >= 0; --i) {
            divisor = remainder * base + value[i];
            q = truncate(divisor / lambda);
            remainder = divisor - q * lambda;
            quotient[i] = q | 0;
        }
        return [quotient, remainder | 0];
    }

    function divModAny(self, v) {
        var value, n = parseValue(v);
        var a = self.value, b = n.value;
        var quotient;
        if (b === 0) throw new Error("Cannot divide by zero");
        if (self.isSmall) {
            if (n.isSmall) {
                return [new SmallInteger(truncate(a / b)), new SmallInteger(a % b)];
            }
            return [Integer[0], self];
        }
        if (n.isSmall) {
            if (b === 1) return [self, Integer[0]];
            if (b == -1) return [self.negate(), Integer[0]];
            var abs = Math.abs(b);
            if (abs < BASE) {
                value = divModSmall(a, abs);
                quotient = arrayToSmall(value[0]);
                var remainder = value[1];
                if (self.sign) remainder = -remainder;
                if (typeof quotient === "number") {
                    if (self.sign !== n.sign) quotient = -quotient;
                    return [new SmallInteger(quotient), new SmallInteger(remainder)];
                }
                return [new BigInteger(quotient, self.sign !== n.sign), new SmallInteger(remainder)];
            }
            b = smallToArray(abs);
        }
        var comparison = compareAbs(a, b);
        if (comparison === -1) return [Integer[0], self];
        if (comparison === 0) return [Integer[self.sign === n.sign ? 1 : -1], Integer[0]];

        // divMod1 is faster on smaller input sizes
        if (a.length + b.length <= 200)
            value = divMod1(a, b);
        else value = divMod2(a, b);

        quotient = value[0];
        var qSign = self.sign !== n.sign,
            mod = value[1],
            mSign = self.sign;
        if (typeof quotient === "number") {
            if (qSign) quotient = -quotient;
            quotient = new SmallInteger(quotient);
        } else quotient = new BigInteger(quotient, qSign);
        if (typeof mod === "number") {
            if (mSign) mod = -mod;
            mod = new SmallInteger(mod);
        } else mod = new BigInteger(mod, mSign);
        return [quotient, mod];
    }

    BigInteger.prototype.divmod = function (v) {
        var result = divModAny(this, v);
        return {
            quotient: result[0],
            remainder: result[1]
        };
    };
    SmallInteger.prototype.divmod = BigInteger.prototype.divmod;

    BigInteger.prototype.divide = function (v) {
        return divModAny(this, v)[0];
    };
    SmallInteger.prototype.over = SmallInteger.prototype.divide = BigInteger.prototype.over = BigInteger.prototype.divide;

    BigInteger.prototype.mod = function (v) {
        return divModAny(this, v)[1];
    };
    SmallInteger.prototype.remainder = SmallInteger.prototype.mod = BigInteger.prototype.remainder = BigInteger.prototype.mod;

    BigInteger.prototype.pow = function (v) {
        var n = parseValue(v),
            a = this.value,
            b = n.value,
            value, x, y;
        if (b === 0) return Integer[1];
        if (a === 0) return Integer[0];
        if (a === 1) return Integer[1];
        if (a === -1) return n.isEven() ? Integer[1] : Integer[-1];
        if (n.sign) {
            return Integer[0];
        }
        if (!n.isSmall) throw new Error("The exponent " + n.toString() + " is too large.");
        if (this.isSmall) {
            if (isPrecise(value = Math.pow(a, b)))
                return new SmallInteger(truncate(value));
        }
        x = this;
        y = Integer[1];
        while (true) {
            if (b & 1 === 1) {
                y = y.times(x);
                --b;
            }
            if (b === 0) break;
            b /= 2;
            x = x.square();
        }
        return y;
    };
    SmallInteger.prototype.pow = BigInteger.prototype.pow;

    BigInteger.prototype.modPow = function (exp, mod) {
        exp = parseValue(exp);
        mod = parseValue(mod);
        if (mod.isZero()) throw new Error("Cannot take modPow with modulus 0");
        var r = Integer[1],
            base = this.mod(mod);
        while (exp.isPositive()) {
            if (base.isZero()) return Integer[0];
            if (exp.isOdd()) r = r.multiply(base).mod(mod);
            exp = exp.divide(2);
            base = base.square().mod(mod);
        }
        return r;
    };
    SmallInteger.prototype.modPow = BigInteger.prototype.modPow;

    function compareAbs(a, b) {
        if (a.length !== b.length) {
            return a.length > b.length ? 1 : -1;
        }
        for (var i = a.length - 1; i >= 0; i--) {
            if (a[i] !== b[i]) return a[i] > b[i] ? 1 : -1;
        }
        return 0;
    }

    BigInteger.prototype.compareAbs = function (v) {
        var n = parseValue(v),
            a = this.value,
            b = n.value;
        if (n.isSmall) return 1;
        return compareAbs(a, b);
    };
    SmallInteger.prototype.compareAbs = function (v) {
        var n = parseValue(v),
            a = Math.abs(this.value),
            b = n.value;
        if (n.isSmall) {
            b = Math.abs(b);
            return a === b ? 0 : a > b ? 1 : -1;
        }
        return -1;
    };

    BigInteger.prototype.compare = function (v) {
        // See discussion about comparison with Infinity:
        // https://github.com/peterolson/BigInteger.js/issues/61
        if (v === Infinity) {
            return -1;
        }
        if (v === -Infinity) {
            return 1;
        }

        var n = parseValue(v),
            a = this.value,
            b = n.value;
        if (this.sign !== n.sign) {
            return n.sign ? 1 : -1;
        }
        if (n.isSmall) {
            return this.sign ? -1 : 1;
        }
        return compareAbs(a, b) * (this.sign ? -1 : 1);
    };
    BigInteger.prototype.compareTo = BigInteger.prototype.compare;

    SmallInteger.prototype.compare = function (v) {
        if (v === Infinity) {
            return -1;
        }
        if (v === -Infinity) {
            return 1;
        }

        var n = parseValue(v),
            a = this.value,
            b = n.value;
        if (n.isSmall) {
            return a == b ? 0 : a > b ? 1 : -1;
        }
        if (a < 0 !== n.sign) {
            return a < 0 ? -1 : 1;
        }
        return a < 0 ? 1 : -1;
    };
    SmallInteger.prototype.compareTo = SmallInteger.prototype.compare;

    BigInteger.prototype.equals = function (v) {
        return this.compare(v) === 0;
    };
    SmallInteger.prototype.eq = SmallInteger.prototype.equals = BigInteger.prototype.eq = BigInteger.prototype.equals;

    BigInteger.prototype.notEquals = function (v) {
        return this.compare(v) !== 0;
    };
    SmallInteger.prototype.neq = SmallInteger.prototype.notEquals = BigInteger.prototype.neq = BigInteger.prototype.notEquals;

    BigInteger.prototype.greater = function (v) {
        return this.compare(v) > 0;
    };
    SmallInteger.prototype.gt = SmallInteger.prototype.greater = BigInteger.prototype.gt = BigInteger.prototype.greater;

    BigInteger.prototype.lesser = function (v) {
        return this.compare(v) < 0;
    };
    SmallInteger.prototype.lt = SmallInteger.prototype.lesser = BigInteger.prototype.lt = BigInteger.prototype.lesser;

    BigInteger.prototype.greaterOrEquals = function (v) {
        return this.compare(v) >= 0;
    };
    SmallInteger.prototype.geq = SmallInteger.prototype.greaterOrEquals = BigInteger.prototype.geq = BigInteger.prototype.greaterOrEquals;

    BigInteger.prototype.lesserOrEquals = function (v) {
        return this.compare(v) <= 0;
    };
    SmallInteger.prototype.leq = SmallInteger.prototype.lesserOrEquals = BigInteger.prototype.leq = BigInteger.prototype.lesserOrEquals;

    BigInteger.prototype.isEven = function () {
        return (this.value[0] & 1) === 0;
    };
    SmallInteger.prototype.isEven = function () {
        return (this.value & 1) === 0;
    };

    BigInteger.prototype.isOdd = function () {
        return (this.value[0] & 1) === 1;
    };
    SmallInteger.prototype.isOdd = function () {
        return (this.value & 1) === 1;
    };

    BigInteger.prototype.isPositive = function () {
        return !this.sign;
    };
    SmallInteger.prototype.isPositive = function () {
        return this.value > 0;
    };

    BigInteger.prototype.isNegative = function () {
        return this.sign;
    };
    SmallInteger.prototype.isNegative = function () {
        return this.value < 0;
    };

    BigInteger.prototype.isUnit = function () {
        return false;
    };
    SmallInteger.prototype.isUnit = function () {
        return Math.abs(this.value) === 1;
    };

    BigInteger.prototype.isZero = function () {
        return false;
    };
    SmallInteger.prototype.isZero = function () {
        return this.value === 0;
    };
    BigInteger.prototype.isDivisibleBy = function (v) {
        var n = parseValue(v);
        var value = n.value;
        if (value === 0) return false;
        if (value === 1) return true;
        if (value === 2) return this.isEven();
        return this.mod(n).equals(Integer[0]);
    };
    SmallInteger.prototype.isDivisibleBy = BigInteger.prototype.isDivisibleBy;

    function isBasicPrime(v) {
        var n = v.abs();
        if (n.isUnit()) return false;
        if (n.equals(2) || n.equals(3) || n.equals(5)) return true;
        if (n.isEven() || n.isDivisibleBy(3) || n.isDivisibleBy(5)) return false;
        if (n.lesser(25)) return true;
        // we don't know if it's prime: let the other functions figure it out
    }

    BigInteger.prototype.isPrime = function () {
        var isPrime = isBasicPrime(this);
        if (isPrime !== undefined) return isPrime;
        var n = this.abs(),
            nPrev = n.prev();
        var a = [2, 3, 5, 7, 11, 13, 17, 19],
            b = nPrev,
            d, t, i, x;
        while (b.isEven()) b = b.divide(2);
        for (i = 0; i < a.length; i++) {
            x = bigInt(a[i]).modPow(b, n);
            if (x.equals(Integer[1]) || x.equals(nPrev)) continue;
            for (t = true, d = b; t && d.lesser(nPrev); d = d.multiply(2)) {
                x = x.square().mod(n);
                if (x.equals(nPrev)) t = false;
            }
            if (t) return false;
        }
        return true;
    };
    SmallInteger.prototype.isPrime = BigInteger.prototype.isPrime;

    BigInteger.prototype.isProbablePrime = function (iterations) {
        var isPrime = isBasicPrime(this);
        if (isPrime !== undefined) return isPrime;
        var n = this.abs();
        var t = iterations === undefined ? 5 : iterations;
        // use the Fermat primality test
        for (var i = 0; i < t; i++) {
            var a = bigInt.randBetween(2, n.minus(2));
            if (!a.modPow(n.prev(), n).isUnit()) return false; // definitely composite
        }
        return true; // large chance of being prime
    };
    SmallInteger.prototype.isProbablePrime = BigInteger.prototype.isProbablePrime;

    BigInteger.prototype.modInv = function (n) {
        var t = bigInt.zero, newT = bigInt.one, r = parseValue(n), newR = this.abs(), q, lastT, lastR;
        while (!newR.equals(bigInt.zero)) {
            q = r.divide(newR);
            lastT = t;
            lastR = r;
            t = newT;
            r = newR;
            newT = lastT.subtract(q.multiply(newT));
            newR = lastR.subtract(q.multiply(newR));
        }
        if (!r.equals(1)) throw new Error(this.toString() + " and " + n.toString() + " are not co-prime");
        if (t.compare(0) === -1) {
            t = t.add(n);
        }
        if (this.isNegative()) {
            return t.negate();
        }
        return t;
    };

    SmallInteger.prototype.modInv = BigInteger.prototype.modInv;

    BigInteger.prototype.next = function () {
        var value = this.value;
        if (this.sign) {
            return subtractSmall(value, 1, this.sign);
        }
        return new BigInteger(addSmall(value, 1), this.sign);
    };
    SmallInteger.prototype.next = function () {
        var value = this.value;
        if (value + 1 < MAX_INT) return new SmallInteger(value + 1);
        return new BigInteger(MAX_INT_ARR, false);
    };

    BigInteger.prototype.prev = function () {
        var value = this.value;
        if (this.sign) {
            return new BigInteger(addSmall(value, 1), true);
        }
        return subtractSmall(value, 1, this.sign);
    };
    SmallInteger.prototype.prev = function () {
        var value = this.value;
        if (value - 1 > -MAX_INT) return new SmallInteger(value - 1);
        return new BigInteger(MAX_INT_ARR, true);
    };

    var powersOfTwo = [1];
    while (2 * powersOfTwo[powersOfTwo.length - 1] <= BASE) powersOfTwo.push(2 * powersOfTwo[powersOfTwo.length - 1]);
    var powers2Length = powersOfTwo.length, highestPower2 = powersOfTwo[powers2Length - 1];

    function shift_isSmall(n) {
        return ((typeof n === "number" || typeof n === "string") && +Math.abs(n) <= BASE) ||
            (n instanceof BigInteger && n.value.length <= 1);
    }

    BigInteger.prototype.shiftLeft = function (n) {
        if (!shift_isSmall(n)) {
            throw new Error(String(n) + " is too large for shifting.");
        }
        n = +n;
        if (n < 0) return this.shiftRight(-n);
        var result = this;
        while (n >= powers2Length) {
            result = result.multiply(highestPower2);
            n -= powers2Length - 1;
        }
        return result.multiply(powersOfTwo[n]);
    };
    SmallInteger.prototype.shiftLeft = BigInteger.prototype.shiftLeft;

    BigInteger.prototype.shiftRight = function (n) {
        var remQuo;
        if (!shift_isSmall(n)) {
            throw new Error(String(n) + " is too large for shifting.");
        }
        n = +n;
        if (n < 0) return this.shiftLeft(-n);
        var result = this;
        while (n >= powers2Length) {
            if (result.isZero()) return result;
            remQuo = divModAny(result, highestPower2);
            result = remQuo[1].isNegative() ? remQuo[0].prev() : remQuo[0];
            n -= powers2Length - 1;
        }
        remQuo = divModAny(result, powersOfTwo[n]);
        return remQuo[1].isNegative() ? remQuo[0].prev() : remQuo[0];
    };
    SmallInteger.prototype.shiftRight = BigInteger.prototype.shiftRight;

    function bitwise(x, y, fn) {
        y = parseValue(y);
        var xSign = x.isNegative(), ySign = y.isNegative();
        var xRem = xSign ? x.not() : x,
            yRem = ySign ? y.not() : y;
        var xDigit = 0, yDigit = 0;
        var xDivMod = null, yDivMod = null;
        var result = [];
        while (!xRem.isZero() || !yRem.isZero()) {
            xDivMod = divModAny(xRem, highestPower2);
            xDigit = xDivMod[1].toJSNumber();
            if (xSign) {
                xDigit = highestPower2 - 1 - xDigit; // two's complement for negative numbers
            }

            yDivMod = divModAny(yRem, highestPower2);
            yDigit = yDivMod[1].toJSNumber();
            if (ySign) {
                yDigit = highestPower2 - 1 - yDigit; // two's complement for negative numbers
            }

            xRem = xDivMod[0];
            yRem = yDivMod[0];
            result.push(fn(xDigit, yDigit));
        }
        var sum = fn(xSign ? 1 : 0, ySign ? 1 : 0) !== 0 ? bigInt(-1) : bigInt(0);
        for (var i = result.length - 1; i >= 0; i -= 1) {
            sum = sum.multiply(highestPower2).add(bigInt(result[i]));
        }
        return sum;
    }

    BigInteger.prototype.not = function () {
        return this.negate().prev();
    };
    SmallInteger.prototype.not = BigInteger.prototype.not;

    BigInteger.prototype.and = function (n) {
        return bitwise(this, n, function (a, b) { return a & b; });
    };
    SmallInteger.prototype.and = BigInteger.prototype.and;

    BigInteger.prototype.or = function (n) {
        return bitwise(this, n, function (a, b) { return a | b; });
    };
    SmallInteger.prototype.or = BigInteger.prototype.or;

    BigInteger.prototype.xor = function (n) {
        return bitwise(this, n, function (a, b) { return a ^ b; });
    };
    SmallInteger.prototype.xor = BigInteger.prototype.xor;

    var LOBMASK_I = 1 << 30, LOBMASK_BI = (BASE & -BASE) * (BASE & -BASE) | LOBMASK_I;
    function roughLOB(n) { // get lowestOneBit (rough)
        // SmallInteger: return Min(lowestOneBit(n), 1 << 30)
        // BigInteger: return Min(lowestOneBit(n), 1 << 14) [BASE=1e7]
        var v = n.value, x = typeof v === "number" ? v | LOBMASK_I : v[0] + v[1] * BASE | LOBMASK_BI;
        return x & -x;
    }

    function integerLogarithm(value, base) {
        if (base.compareTo(value) <= 0) {
            var tmp = integerLogarithm(value, base.square(base));
            var p = tmp.p;
            var e = tmp.e;
            var t = p.multiply(base);
            return t.compareTo(value) <= 0 ? { p: t, e: e * 2 + 1 } : { p: p, e: e * 2 };
        }
        return { p: bigInt(1), e: 0 };
    }

    BigInteger.prototype.bitLength = function () {
        var n = this;
        if (n.compareTo(bigInt(0)) < 0) {
            n = n.negate().subtract(bigInt(1));
        }
        if (n.compareTo(bigInt(0)) === 0) {
            return bigInt(0);
        }
        return bigInt(integerLogarithm(n, bigInt(2)).e).add(bigInt(1));
    }
    SmallInteger.prototype.bitLength = BigInteger.prototype.bitLength;

    function max(a, b) {
        a = parseValue(a);
        b = parseValue(b);
        return a.greater(b) ? a : b;
    }
    function min(a, b) {
        a = parseValue(a);
        b = parseValue(b);
        return a.lesser(b) ? a : b;
    }
    function gcd(a, b) {
        a = parseValue(a).abs();
        b = parseValue(b).abs();
        if (a.equals(b)) return a;
        if (a.isZero()) return b;
        if (b.isZero()) return a;
        var c = Integer[1], d, t;
        while (a.isEven() && b.isEven()) {
            d = Math.min(roughLOB(a), roughLOB(b));
            a = a.divide(d);
            b = b.divide(d);
            c = c.multiply(d);
        }
        while (a.isEven()) {
            a = a.divide(roughLOB(a));
        }
        do {
            while (b.isEven()) {
                b = b.divide(roughLOB(b));
            }
            if (a.greater(b)) {
                t = b; b = a; a = t;
            }
            b = b.subtract(a);
        } while (!b.isZero());
        return c.isUnit() ? a : a.multiply(c);
    }
    function lcm(a, b) {
        a = parseValue(a).abs();
        b = parseValue(b).abs();
        return a.divide(gcd(a, b)).multiply(b);
    }
    function randBetween(a, b) {
        a = parseValue(a);
        b = parseValue(b);
        var low = min(a, b), high = max(a, b);
        var range = high.subtract(low).add(1);
        if (range.isSmall) return low.add(Math.floor(Math.random() * range));
        var length = range.value.length - 1;
        var result = [], restricted = true;
        for (var i = length; i >= 0; i--) {
            var top = restricted ? range.value[i] : BASE;
            var digit = truncate(Math.random() * top);
            result.unshift(digit);
            if (digit < top) restricted = false;
        }
        result = arrayToSmall(result);
        return low.add(typeof result === "number" ? new SmallInteger(result) : new BigInteger(result, false));
    }
    var parseBase = function (text, base) {
        var length = text.length;
        var i;
        var absBase = Math.abs(base);
        for (var i = 0; i < length; i++) {
            var c = text[i].toLowerCase();
            if (c === "-") continue;
            if (/[a-z0-9]/.test(c)) {
                if (/[0-9]/.test(c) && +c >= absBase) {
                    if (c === "1" && absBase === 1) continue;
                    throw new Error(c + " is not a valid digit in base " + base + ".");
                } else if (c.charCodeAt(0) - 87 >= absBase) {
                    throw new Error(c + " is not a valid digit in base " + base + ".");
                }
            }
        }
        if (2 <= base && base <= 36) {
            if (length <= LOG_MAX_INT / Math.log(base)) {
                var result = parseInt(text, base);
                if (isNaN(result)) {
                    throw new Error(c + " is not a valid digit in base " + base + ".");
                }
                return new SmallInteger(parseInt(text, base));
            }
        }
        base = parseValue(base);
        var digits = [];
        var isNegative = text[0] === "-";
        for (i = isNegative ? 1 : 0; i < text.length; i++) {
            var c = text[i].toLowerCase(),
                charCode = c.charCodeAt(0);
            if (48 <= charCode && charCode <= 57) digits.push(parseValue(c));
            else if (97 <= charCode && charCode <= 122) digits.push(parseValue(c.charCodeAt(0) - 87));
            else if (c === "<") {
                var start = i;
                do { i++; } while (text[i] !== ">");
                digits.push(parseValue(text.slice(start + 1, i)));
            }
            else throw new Error(c + " is not a valid character");
        }
        return parseBaseFromArray(digits, base, isNegative);
    };

    function parseBaseFromArray(digits, base, isNegative) {
        var val = Integer[0], pow = Integer[1], i;
        for (i = digits.length - 1; i >= 0; i--) {
            val = val.add(digits[i].times(pow));
            pow = pow.times(base);
        }
        return isNegative ? val.negate() : val;
    }

    function stringify(digit) {
        if (digit <= 35) {
            return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(digit);
        }
        return "<" + digit + ">";
    }

    function toBase(n, base) {
        base = bigInt(base);
        if (base.isZero()) {
            if (n.isZero()) return { value: [0], isNegative: false };
            throw new Error("Cannot convert nonzero numbers to base 0.");
        }
        if (base.equals(-1)) {
            if (n.isZero()) return { value: [0], isNegative: false };
            if (n.isNegative())
                return {
                    value: [].concat.apply([], Array.apply(null, Array(-n))
                        .map(Array.prototype.valueOf, [1, 0])
                    ),
                    isNegative: false
                };

            var arr = Array.apply(null, Array(+n - 1))
                .map(Array.prototype.valueOf, [0, 1]);
            arr.unshift([1]);
            return {
                value: [].concat.apply([], arr),
                isNegative: false
            };
        }

        var neg = false;
        if (n.isNegative() && base.isPositive()) {
            neg = true;
            n = n.abs();
        }
        if (base.equals(1)) {
            if (n.isZero()) return { value: [0], isNegative: false };

            return {
                value: Array.apply(null, Array(+n))
                    .map(Number.prototype.valueOf, 1),
                isNegative: neg
            };
        }
        var out = [];
        var left = n, divmod;
        while (left.isNegative() || left.compareAbs(base) >= 0) {
            divmod = left.divmod(base);
            left = divmod.quotient;
            var digit = divmod.remainder;
            if (digit.isNegative()) {
                digit = base.minus(digit).abs();
                left = left.next();
            }
            out.push(digit.toJSNumber());
        }
        out.push(left.toJSNumber());
        return { value: out.reverse(), isNegative: neg };
    }

    function toBaseString(n, base) {
        var arr = toBase(n, base);
        return (arr.isNegative ? "-" : "") + arr.value.map(stringify).join('');
    }

    BigInteger.prototype.toArray = function (radix) {
        return toBase(this, radix);
    };

    SmallInteger.prototype.toArray = function (radix) {
        return toBase(this, radix);
    };

    BigInteger.prototype.toString = function (radix) {
        if (radix === undefined) radix = 10;
        if (radix !== 10) return toBaseString(this, radix);
        var v = this.value, l = v.length, str = String(v[--l]), zeros = "0000000", digit;
        while (--l >= 0) {
            digit = String(v[l]);
            str += zeros.slice(digit.length) + digit;
        }
        var sign = this.sign ? "-" : "";
        return sign + str;
    };

    SmallInteger.prototype.toString = function (radix) {
        if (radix === undefined) radix = 10;
        if (radix != 10) return toBaseString(this, radix);
        return String(this.value);
    };
    BigInteger.prototype.toJSON = SmallInteger.prototype.toJSON = function () { return this.toString(); }

    BigInteger.prototype.valueOf = function () {
        return parseInt(this.toString(), 10);
    };
    BigInteger.prototype.toJSNumber = BigInteger.prototype.valueOf;

    SmallInteger.prototype.valueOf = function () {
        return this.value;
    };
    SmallInteger.prototype.toJSNumber = SmallInteger.prototype.valueOf;

    function parseStringValue(v) {
        if (isPrecise(+v)) {
            var x = +v;
            if (x === truncate(x))
                return new SmallInteger(x);
            throw new Error("Invalid integer: " + v);
        }
        var sign = v[0] === "-";
        if (sign) v = v.slice(1);
        var split = v.split(/e/i);
        if (split.length > 2) throw new Error("Invalid integer: " + split.join("e"));
        if (split.length === 2) {
            var exp = split[1];
            if (exp[0] === "+") exp = exp.slice(1);
            exp = +exp;
            if (exp !== truncate(exp) || !isPrecise(exp)) throw new Error("Invalid integer: " + exp + " is not a valid exponent.");
            var text = split[0];
            var decimalPlace = text.indexOf(".");
            if (decimalPlace >= 0) {
                exp -= text.length - decimalPlace - 1;
                text = text.slice(0, decimalPlace) + text.slice(decimalPlace + 1);
            }
            if (exp < 0) throw new Error("Cannot include negative exponent part for integers");
            text += (new Array(exp + 1)).join("0");
            v = text;
        }
        var isValid = /^([0-9][0-9]*)$/.test(v);
        if (!isValid) throw new Error("Invalid integer: " + v);
        var r = [], max = v.length, l = LOG_BASE, min = max - l;
        while (max > 0) {
            r.push(+v.slice(min, max));
            min -= l;
            if (min < 0) min = 0;
            max -= l;
        }
        trim(r);
        return new BigInteger(r, sign);
    }

    function parseNumberValue(v) {
        if (isPrecise(v)) {
            if (v !== truncate(v)) throw new Error(v + " is not an integer.");
            return new SmallInteger(v);
        }
        return parseStringValue(v.toString());
    }

    function parseValue(v) {
        if (typeof v === "number") {
            return parseNumberValue(v);
        }
        if (typeof v === "string") {
            return parseStringValue(v);
        }
        return v;
    }
    // Pre-define numbers in range [-999,999]
    for (var i = 0; i < 1000; i++) {
        Integer[i] = new SmallInteger(i);
        if (i > 0) Integer[-i] = new SmallInteger(-i);
    }
    // Backwards compatibility
    Integer.one = Integer[1];
    Integer.zero = Integer[0];
    Integer.minusOne = Integer[-1];
    Integer.max = max;
    Integer.min = min;
    Integer.gcd = gcd;
    Integer.lcm = lcm;
    Integer.isInstance = function (x) { return x instanceof BigInteger || x instanceof SmallInteger; };
    Integer.randBetween = randBetween;

    Integer.fromArray = function (digits, base, isNegative) {
        return parseBaseFromArray(digits.map(parseValue), parseValue(base || 10), isNegative);
    };

    return Integer;
})();

// Node.js check
if (typeof module !== "undefined" && module.hasOwnProperty("exports")) {
    module.exports = bigInt;
}

//amd check
if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
        return bigInt;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../pow-nodejs/node_modules/.registry.npmjs.org/webpack/4.12.0/node_modules/webpack/buildin/module.js */ "./node_modules/.registry.npmjs.org/webpack/4.12.0/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../crypto/node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime-module.js":
/*!********************************************************************************************************************************!*\
  !*** ../crypto/node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime-module.js ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "../crypto/node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "../crypto/node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime.js":
/*!*************************************************************************************************************************!*\
  !*** ../crypto/node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),

/***/ "../data/dist/data/address.js":
/*!************************************!*\
  !*** ../data/dist/data/address.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

var dataError_1 = __webpack_require__(/*! ../error/dataError */ "../data/dist/error/dataError.js");

var trytes_1 = __webpack_require__(/*! ./trytes */ "../data/dist/data/trytes.js");
/**
 * A class for handling addresses.
 */


var Address =
/*#__PURE__*/
function () {
  /* @internal */
  function Address(addressTrytes, checksumTrytes) {
    _classCallCheck(this, Address);

    this._addressTrytes = addressTrytes;
    this._checksumTrytes = checksumTrytes;
  }
  /**
   * Create address from trytes.
   * @param address The trytes to create the address from.
   * @returns An instance of Address.
   */


  _createClass(Address, [{
    key: "toTrytes",

    /**
     * Convert the address to trytes with no checksum.
     * @returns Trytes version of the address with no checksum.
     */
    value: function toTrytes() {
      return trytes_1.Trytes.fromString(this._addressTrytes);
    }
    /**
     * Convert the address to trytes with a checksum, creating a blank one if needed.
     * @returns Trytes version of the address with checksu,.
     */

  }, {
    key: "toTrytesWithChecksum",
    value: function toTrytesWithChecksum() {
      if (!objectHelper_1.ObjectHelper.isEmpty(this._checksumTrytes)) {
        return trytes_1.Trytes.fromString(this._addressTrytes + this._checksumTrytes);
      } else {
        throw new dataError_1.DataError("This address has no checksum calculated for it");
      }
    }
    /**
     * Get the string view of the object.
     * @returns string of the trytes.
     */

  }, {
    key: "toString",
    value: function toString() {
      if (!objectHelper_1.ObjectHelper.isEmpty(this._checksumTrytes)) {
        return this._addressTrytes + this._checksumTrytes;
      } else {
        return this._addressTrytes;
      }
    }
  }], [{
    key: "fromTrytes",
    value: function fromTrytes(address) {
      if (!objectHelper_1.ObjectHelper.isType(address, trytes_1.Trytes)) {
        throw new dataError_1.DataError("The address should be a valid Trytes object");
      }

      var trytesString = address.toString();

      if (trytesString.length !== Address.LENGTH && trytesString.length !== Address.LENGTH_WITH_CHECKSUM) {
        throw new dataError_1.DataError("The address should either be ".concat(Address.LENGTH, " or ").concat(Address.LENGTH_WITH_CHECKSUM, " characters in length"), {
          length: trytesString.length
        });
      }

      var addressTrytes = trytesString.substr(0, Address.LENGTH);
      var checksumTrytes;

      if (trytesString.length === Address.LENGTH_WITH_CHECKSUM) {
        checksumTrytes = trytesString.substr(Address.LENGTH);
      }

      return new Address(addressTrytes, checksumTrytes);
    }
  }]);

  return Address;
}();
/**
 * The length for a valid address without checksum (81).
 */


Address.LENGTH = 81;
/**
 * The length for an address checksum (9).
 */

Address.LENGTH_CHECKSUM = 9;
/**
 * The length for valid address with checksum (90).
 */

Address.LENGTH_WITH_CHECKSUM = Address.LENGTH + Address.LENGTH_CHECKSUM;
/**
 * An empty hash all 9s.
 */

Address.EMPTY = Address.fromTrytes(trytes_1.Trytes.fromString("9".repeat(Address.LENGTH)));
exports.Address = Address;

/***/ }),

/***/ "../data/dist/data/hash.js":
/*!*********************************!*\
  !*** ../data/dist/data/hash.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

var dataError_1 = __webpack_require__(/*! ../error/dataError */ "../data/dist/error/dataError.js");

var trytes_1 = __webpack_require__(/*! ./trytes */ "../data/dist/data/trytes.js");
/**
 * A class for handling hashes.
 */


var Hash =
/*#__PURE__*/
function () {
  /* @internal */
  function Hash(trytes) {
    _classCallCheck(this, Hash);

    this._trytes = trytes;
  }
  /**
   * Create hash from trytes.
   * @param hash The trytes to create the hash from.
   * @returns An instance of Hash.
   */


  _createClass(Hash, [{
    key: "toTrytes",

    /**
     * Convert the hash to trytes.
     * @returns Trytes version of the hash.
     */
    value: function toTrytes() {
      return this._trytes;
    }
    /**
     * Get the string view of the object.
     * @returns string of the trytes.
     */

  }, {
    key: "toString",
    value: function toString() {
      return this._trytes.toString();
    }
  }], [{
    key: "fromTrytes",
    value: function fromTrytes(hash) {
      if (!objectHelper_1.ObjectHelper.isType(hash, trytes_1.Trytes)) {
        throw new dataError_1.DataError("The hash should be a valid Trytes object");
      }

      var length = hash.length();

      if (length !== Hash.LENGTH) {
        throw new dataError_1.DataError("The hash should be ".concat(Hash.LENGTH, " characters in length"), {
          length: length
        });
      }

      return new Hash(hash);
    }
  }]);

  return Hash;
}();
/**
 * The length for a valid hash (81).
 */


Hash.LENGTH = 81;
/**
 * An empty hash all 9s.
 */

Hash.EMPTY = Hash.fromTrytes(trytes_1.Trytes.fromString("9".repeat(Hash.LENGTH)));
exports.Hash = Hash;

/***/ }),

/***/ "../data/dist/data/signatureMessageFragment.js":
/*!*****************************************************!*\
  !*** ../data/dist/data/signatureMessageFragment.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

var dataError_1 = __webpack_require__(/*! ../error/dataError */ "../data/dist/error/dataError.js");

var trytes_1 = __webpack_require__(/*! ./trytes */ "../data/dist/data/trytes.js");
/**
 * A class for handling signature message fragments.
 */


var SignatureMessageFragment =
/*#__PURE__*/
function () {
  /* @internal */
  function SignatureMessageFragment(trytes) {
    _classCallCheck(this, SignatureMessageFragment);

    this._trytes = trytes;
  }
  /**
   * Create signature fragment from trytes.
   * @param signatureMessageFragment The trytes to create the signature fragment from.
   * @returns An instance of SignatureMessageFragment.
   */


  _createClass(SignatureMessageFragment, [{
    key: "toTrytes",

    /**
     * Convert the signature fragment to trytes.
     * @returns Trytes version of the signature fragment.
     */
    value: function toTrytes() {
      return this._trytes;
    }
    /**
     * Get the string view of the object.
     * @returns string of the trytes.
     */

  }, {
    key: "toString",
    value: function toString() {
      return this._trytes.toString();
    }
  }], [{
    key: "fromTrytes",
    value: function fromTrytes(signatureMessageFragment) {
      if (!objectHelper_1.ObjectHelper.isType(signatureMessageFragment, trytes_1.Trytes)) {
        throw new dataError_1.DataError("The signatureMessageFragment should be a valid Trytes object");
      }

      var length = signatureMessageFragment.length();

      if (length !== SignatureMessageFragment.LENGTH) {
        throw new dataError_1.DataError("The signatureMessageFragment should be ".concat(SignatureMessageFragment.LENGTH, " characters in length"), {
          length: length
        });
      }

      return new SignatureMessageFragment(signatureMessageFragment);
    }
  }]);

  return SignatureMessageFragment;
}();
/**
 * The length of a valid signature message fragment (2187)
 */


SignatureMessageFragment.LENGTH = 2187;
/**
 * An empty signature message fragment all 9s.
 */

SignatureMessageFragment.EMPTY = SignatureMessageFragment.fromTrytes(trytes_1.Trytes.fromString("9".repeat(SignatureMessageFragment.LENGTH)));
exports.SignatureMessageFragment = SignatureMessageFragment;

/***/ }),

/***/ "../data/dist/data/tag.js":
/*!********************************!*\
  !*** ../data/dist/data/tag.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

var dataError_1 = __webpack_require__(/*! ../error/dataError */ "../data/dist/error/dataError.js");

var trytes_1 = __webpack_require__(/*! ./trytes */ "../data/dist/data/trytes.js");
/**
 * A class for handling tags.
 */


var Tag =
/*#__PURE__*/
function () {
  /* @internal */
  function Tag(trytes) {
    _classCallCheck(this, Tag);

    this._trytes = trytes;
  }
  /**
   * Create tag from trytes.
   * @param tag The trytes to create the tag from.
   * @returns An instance of Tag.
   */


  _createClass(Tag, [{
    key: "toTrytes",

    /**
     * Convert the tag to trytes.
     * @returns Trytes version of the tag.
     */
    value: function toTrytes() {
      return trytes_1.Trytes.fromString(this._trytes);
    }
    /**
     * Get the string view of the object.
     * @returns string of the trytes.
     */

  }, {
    key: "toString",
    value: function toString() {
      return this._trytes;
    }
  }], [{
    key: "fromTrytes",
    value: function fromTrytes(tag) {
      if (!objectHelper_1.ObjectHelper.isType(tag, trytes_1.Trytes)) {
        throw new dataError_1.DataError("The tag should be a valid Trytes object");
      }

      var trytesString = tag.toString();

      if (trytesString.length > Tag.LENGTH) {
        throw new dataError_1.DataError("The tag should be at most ".concat(Tag.LENGTH, " characters in length"), {
          length: trytesString.length
        });
      }

      while (trytesString.length < Tag.LENGTH) {
        trytesString += "9";
      }

      return new Tag(trytesString);
    }
  }]);

  return Tag;
}();
/**
 * The length of a valid tag (27).
 */


Tag.LENGTH = 27;
/**
 * An empty tag all 9s.
 */

Tag.EMPTY = Tag.fromTrytes(trytes_1.Trytes.fromString("9".repeat(Tag.LENGTH)));
exports.Tag = Tag;

/***/ }),

/***/ "../data/dist/data/transaction.js":
/*!****************************************!*\
  !*** ../data/dist/data/transaction.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

var dataError_1 = __webpack_require__(/*! ../error/dataError */ "../data/dist/error/dataError.js");

var address_1 = __webpack_require__(/*! ./address */ "../data/dist/data/address.js");

var hash_1 = __webpack_require__(/*! ./hash */ "../data/dist/data/hash.js");

var signatureMessageFragment_1 = __webpack_require__(/*! ./signatureMessageFragment */ "../data/dist/data/signatureMessageFragment.js");

var tag_1 = __webpack_require__(/*! ./tag */ "../data/dist/data/tag.js");

var tryteNumber_1 = __webpack_require__(/*! ./tryteNumber */ "../data/dist/data/tryteNumber.js");

var trytes_1 = __webpack_require__(/*! ./trytes */ "../data/dist/data/trytes.js");
/**
 * A class for handling transactions.
 */


var Transaction =
/*#__PURE__*/
function () {
  /* @internal */
  function Transaction() {
    _classCallCheck(this, Transaction);
  }
  /**
   * Create instance of transaction from parameters.
   * @param signatureMessageFragment The signature message fragment.
   * @param address The address.
   * @param value The value.
   * @param obsoleteTag Obsolete transaction tag.
   * @param timestamp The timestamp.
   * @param currentIndex The current index.
   * @param lastIndex The last index.
   * @param bundle The bundle.
   * @param trunkTransaction The trunk transaction.
   * @param branchTransaction The branch transaction.
   * @param tag The tag.
   * @param attachmentTimestamp The attachment timestamp.
   * @param attachmentTimestampLowerBound The attachment timestamp lower bound.
   * @param attachmentTimestampUpperBound  The attachment timestamp upper bound.
   * @param nonce The nonce.
   * @returns New instance of transaction.
   */


  _createClass(Transaction, [{
    key: "toTrytes",

    /**
     * Convert the transaction to trytes.
     * @returns The transaction as trytes.
     */
    value: function toTrytes() {
      if (!objectHelper_1.ObjectHelper.isType(this.signatureMessageFragment, signatureMessageFragment_1.SignatureMessageFragment)) {
        throw new dataError_1.DataError("The signatureMessageFragment must be set to create transaction trytes", {
          signatureMessageFragment: this.signatureMessageFragment
        });
      }

      if (!objectHelper_1.ObjectHelper.isType(this.address, address_1.Address)) {
        throw new dataError_1.DataError("The address must be set to create transaction trytes", {
          address: this.address
        });
      }

      if (!objectHelper_1.ObjectHelper.isType(this.obsoleteTag, tag_1.Tag)) {
        throw new dataError_1.DataError("The obsoleteTag must be set to create transaction trytes", {
          obsoleteTag: this.obsoleteTag
        });
      }

      if (!objectHelper_1.ObjectHelper.isType(this.bundle, hash_1.Hash)) {
        throw new dataError_1.DataError("The bundle must be set to create transaction trytes", {
          bundle: this.bundle
        });
      }

      if (!objectHelper_1.ObjectHelper.isType(this.trunkTransaction, hash_1.Hash)) {
        throw new dataError_1.DataError("The trunkTransaction must be set to create transaction trytes", {
          trunkTransaction: this.trunkTransaction
        });
      }

      if (!objectHelper_1.ObjectHelper.isType(this.branchTransaction, hash_1.Hash)) {
        throw new dataError_1.DataError("The branchTransaction must be set to create transaction trytes", {
          branchTransaction: this.branchTransaction
        });
      }

      if (!objectHelper_1.ObjectHelper.isType(this.nonce, tag_1.Tag)) {
        throw new dataError_1.DataError("The nonce must be set to create transaction trytes", {
          nonce: this.nonce
        });
      }

      var trytes = this.signatureMessageFragment.toTrytes().toString() + this.address.toTrytes().toString() + (this.value || Transaction.EMPTY_11).toTrytes().toString() + Transaction.CHECK_VALUE + this.obsoleteTag.toTrytes().toString() + (this.timestamp || tryteNumber_1.TryteNumber.EMPTY_9).toTrytes().toString() + (this.currentIndex || tryteNumber_1.TryteNumber.EMPTY_9).toTrytes().toString() + (this.lastIndex || tryteNumber_1.TryteNumber.EMPTY_9).toTrytes().toString() + this.bundle.toTrytes().toString() + this.trunkTransaction.toTrytes().toString() + this.branchTransaction.toTrytes().toString() + (this.tag || this.obsoleteTag).toTrytes().toString() + (this.attachmentTimestamp || tryteNumber_1.TryteNumber.EMPTY_9).toTrytes().toString() + (this.attachmentTimestampLowerBound || tryteNumber_1.TryteNumber.EMPTY_9).toTrytes().toString() + (this.attachmentTimestampUpperBound || tryteNumber_1.TryteNumber.EMPTY_9).toTrytes().toString() + this.nonce.toTrytes().toString();
      var length = trytes.length;

      if (length !== Transaction.LENGTH) {
        throw new dataError_1.DataError("The trytes must be ".concat(Transaction.LENGTH, " in length ").concat(length), {
          length: length
        });
      }

      return trytes_1.Trytes.fromString(trytes);
    }
    /**
     * Get the string view of the object.
     * @returns string view of the object.
     */

  }, {
    key: "toString",
    value: function toString() {
      return "{\n\tsignatureMessageFragment: \"".concat((this.signatureMessageFragment || signatureMessageFragment_1.SignatureMessageFragment.EMPTY).toTrytes().toString(), "\"\n\taddress: \"").concat((this.address || address_1.Address.EMPTY).toTrytes().toString(), "\"\n\tvalue: ").concat((this.value || Transaction.EMPTY_11).toNumber(), "\n\tobsoleteTag: \"").concat((this.obsoleteTag || tag_1.Tag.EMPTY).toTrytes().toString(), "\"\n\ttimestamp: ").concat((this.timestamp || tryteNumber_1.TryteNumber.EMPTY_9).toNumber(), "\n\tcurrentIndex: ").concat((this.currentIndex || tryteNumber_1.TryteNumber.EMPTY_9).toNumber(), "\n\tlastIndex: ").concat((this.lastIndex || tryteNumber_1.TryteNumber.EMPTY_9).toNumber(), "\n\tbundle: \"").concat((this.bundle || hash_1.Hash.EMPTY).toTrytes().toString(), "\"\n\ttrunkTransaction: \"").concat((this.trunkTransaction || hash_1.Hash.EMPTY).toTrytes().toString(), "\"\n\tbranchTransaction: \"").concat((this.branchTransaction || hash_1.Hash.EMPTY).toTrytes().toString(), "\"\n\ttag: \"").concat((this.tag || this.obsoleteTag || tag_1.Tag.EMPTY).toTrytes().toString(), "\"\n\tattachmentTimestamp: ").concat((this.attachmentTimestamp || tryteNumber_1.TryteNumber.EMPTY_9).toNumber(), "\n\tattachmentTimestampLowerBound: ").concat((this.attachmentTimestampLowerBound || tryteNumber_1.TryteNumber.EMPTY_9).toNumber(), "\n\tattachmentTimestampUpperBound: ").concat((this.attachmentTimestampUpperBound || tryteNumber_1.TryteNumber.EMPTY_9).toNumber(), "\n\tnonce: \"").concat((this.nonce || tag_1.Tag.EMPTY).toTrytes().toString(), "\"\n}");
    }
  }], [{
    key: "fromParams",
    value: function fromParams(signatureMessageFragment, address, value, obsoleteTag, timestamp, currentIndex, lastIndex, bundle, trunkTransaction, branchTransaction, tag, attachmentTimestamp, attachmentTimestampLowerBound, attachmentTimestampUpperBound, nonce) {
      var tx = new Transaction();
      tx.signatureMessageFragment = signatureMessageFragment;
      tx.address = address;
      tx.value = tryteNumber_1.TryteNumber.fromNumber(value, 11);
      tx.obsoleteTag = obsoleteTag;
      tx.timestamp = tryteNumber_1.TryteNumber.fromNumber(timestamp);
      tx.currentIndex = tryteNumber_1.TryteNumber.fromNumber(currentIndex);
      tx.lastIndex = tryteNumber_1.TryteNumber.fromNumber(lastIndex);
      tx.bundle = bundle;
      tx.trunkTransaction = trunkTransaction;
      tx.branchTransaction = branchTransaction;
      tx.tag = tag;
      tx.attachmentTimestamp = tryteNumber_1.TryteNumber.fromNumber(attachmentTimestamp);
      tx.attachmentTimestampLowerBound = tryteNumber_1.TryteNumber.fromNumber(attachmentTimestampLowerBound);
      tx.attachmentTimestampUpperBound = tryteNumber_1.TryteNumber.fromNumber(attachmentTimestampUpperBound);
      tx.nonce = nonce;
      return tx;
    }
    /**
     * Create instance of transaction from trytes.
     * @param trytes The trytes for the this.
     * @returns An instance of this.
     */

  }, {
    key: "fromTrytes",
    value: function fromTrytes(trytes) {
      if (!objectHelper_1.ObjectHelper.isType(trytes, trytes_1.Trytes)) {
        throw new dataError_1.DataError("The trytes should be a valid Trytes object");
      }

      var length = trytes.length();

      if (length !== Transaction.LENGTH) {
        throw new dataError_1.DataError("The trytes must be ".concat(Transaction.LENGTH, " in length"), {
          length: length
        });
      }

      var checkIndexStart = 2279;
      var checkIndexLength = 16;
      var check = trytes.sub(checkIndexStart, checkIndexLength).toString();

      if (check !== Transaction.CHECK_VALUE) {
        throw new dataError_1.DataError("The trytes between ".concat(checkIndexStart, " and ").concat(checkIndexStart + checkIndexLength, " should be all 9s"), {
          check: check
        });
      }

      var tx = new Transaction();
      var startPos = 0;
      tx.signatureMessageFragment = signatureMessageFragment_1.SignatureMessageFragment.fromTrytes(trytes.sub(startPos, signatureMessageFragment_1.SignatureMessageFragment.LENGTH));
      startPos += signatureMessageFragment_1.SignatureMessageFragment.LENGTH;
      tx.address = address_1.Address.fromTrytes(trytes.sub(startPos, address_1.Address.LENGTH));
      startPos += address_1.Address.LENGTH;
      tx.value = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(startPos, 11), 11);
      startPos += 11;
      startPos += Transaction.CHECK_VALUE_LENGTH;
      tx.obsoleteTag = tag_1.Tag.fromTrytes(trytes.sub(startPos, tag_1.Tag.LENGTH));
      startPos += tag_1.Tag.LENGTH;
      tx.timestamp = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(startPos, tryteNumber_1.TryteNumber.LENGTH_9));
      startPos += tryteNumber_1.TryteNumber.LENGTH_9;
      tx.currentIndex = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(startPos, tryteNumber_1.TryteNumber.LENGTH_9));
      startPos += tryteNumber_1.TryteNumber.LENGTH_9;
      tx.lastIndex = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(startPos, tryteNumber_1.TryteNumber.LENGTH_9));
      startPos += tryteNumber_1.TryteNumber.LENGTH_9;
      tx.bundle = hash_1.Hash.fromTrytes(trytes.sub(startPos, hash_1.Hash.LENGTH));
      startPos += hash_1.Hash.LENGTH;
      tx.trunkTransaction = hash_1.Hash.fromTrytes(trytes.sub(startPos, hash_1.Hash.LENGTH));
      startPos += hash_1.Hash.LENGTH;
      tx.branchTransaction = hash_1.Hash.fromTrytes(trytes.sub(startPos, hash_1.Hash.LENGTH));
      startPos += hash_1.Hash.LENGTH;
      tx.tag = tag_1.Tag.fromTrytes(trytes.sub(startPos, tag_1.Tag.LENGTH));
      startPos += tag_1.Tag.LENGTH;
      tx.attachmentTimestamp = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(startPos, tryteNumber_1.TryteNumber.LENGTH_9));
      startPos += tryteNumber_1.TryteNumber.LENGTH_9;
      tx.attachmentTimestampLowerBound = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(startPos, tryteNumber_1.TryteNumber.LENGTH_9));
      startPos += tryteNumber_1.TryteNumber.LENGTH_9;
      tx.attachmentTimestampUpperBound = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(startPos, tryteNumber_1.TryteNumber.LENGTH_9));
      startPos += tryteNumber_1.TryteNumber.LENGTH_9;
      tx.nonce = tag_1.Tag.fromTrytes(trytes.sub(startPos, tag_1.Tag.LENGTH));
      return tx;
    }
  }]);

  return Transaction;
}();
/**
 * The length of a valid transaction (2673).
 */


Transaction.LENGTH = 2673;
/**
 * The length of a valid check value (16).
 */

Transaction.CHECK_VALUE_LENGTH = 16;
/**
 * The check value for bundles all 9s.
 */

Transaction.CHECK_VALUE = "9".repeat(Transaction.CHECK_VALUE_LENGTH);
/* @internal */

Transaction.EMPTY_11 = tryteNumber_1.TryteNumber.fromNumber(0, 11);
exports.Transaction = Transaction;

/***/ }),

/***/ "../data/dist/data/trits.js":
/*!**********************************!*\
  !*** ../data/dist/data/trits.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var arrayHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/arrayHelper */ "../core/dist/helpers/arrayHelper.js");

var numberHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/numberHelper */ "../core/dist/helpers/numberHelper.js");

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

var dataError_1 = __webpack_require__(/*! ../error/dataError */ "../data/dist/error/dataError.js");

var trytes_1 = __webpack_require__(/*! ./trytes */ "../data/dist/data/trytes.js");
/**
 * A class for handling trits.
 */


var Trits =
/*#__PURE__*/
function () {
  /* @internal */
  function Trits(trits) {
    _classCallCheck(this, Trits);

    this._trits = trits;
  }
  /**
   * Create instance of trits from Int8Array array.
   * @param value Trytes used to create trits.
   * @returns An instance of Trits.
   */


  _createClass(Trits, [{
    key: "toArray",

    /**
     * Get the value of the trits array.
     * @returns Array representation of the trits.
     */
    value: function toArray() {
      return this._trits;
    }
    /**
     * Get the value of the trits array as a number array.
     * @returns Array representation of the trits.
     */

  }, {
    key: "toNumberArray",
    value: function toNumberArray() {
      return Array.from(this._trits);
    }
    /**
     * Get the trits as trytes.
     * @returns Instance of Trytes.
     */

  }, {
    key: "toTrytes",
    value: function toTrytes() {
      var trytes = "";

      for (var i = 0; i < this._trits.length; i += 3) {
        // Iterate over all possible tryte values to find correct trit representation
        for (var j = 0; j < trytes_1.Trytes.ALPHABET.length; j++) {
          if (Trits.TRYTES_TRITS[j][0] === this._trits[i] && Trits.TRYTES_TRITS[j][1] === this._trits[i + 1] && Trits.TRYTES_TRITS[j][2] === this._trits[i + 2]) {
            trytes += trytes_1.Trytes.ALPHABET.charAt(j);
            break;
          }
        }
      }

      return trytes_1.Trytes.fromString(trytes);
    }
    /**
     * Get the trits as a number.
     * @returns The trits converted to a number.
     */

  }, {
    key: "toNumber",
    value: function toNumber() {
      var returnValue = 0;

      for (var i = this._trits.length - 1; i >= 0; i--) {
        returnValue = returnValue * 3 + this._trits[i];
      }

      return returnValue;
    }
    /**
     * What is the length of the trits.
     * @returns Length of the trits.
     */

  }, {
    key: "length",
    value: function length() {
      return this._trits.length;
    }
    /**
     * Get a sub of the trits.
     * @param start The start position to get the sub.
     * @param length The length of the sub.
     * @returns The trits sub.
     */

  }, {
    key: "sub",
    value: function sub(start, length) {
      if (!numberHelper_1.NumberHelper.isInteger(start) || start < 0) {
        throw new dataError_1.DataError("The start must be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || start + length > this._trits.length) {
        throw new dataError_1.DataError("The start + length must <= ".concat(this._trits.length));
      }

      return Trits.fromArray(this._trits.slice(start, start + length));
    }
  }], [{
    key: "fromArray",
    value: function fromArray(value) {
      if (!objectHelper_1.ObjectHelper.isType(value, Int8Array)) {
        throw new dataError_1.DataError("The value does not contain valid trits");
      }

      return new Trits(value);
    }
    /**
     * Create instance of trits from number array.
     * @param value Trytes used to create trits.
     * @returns An instance of Trits.
     */

  }, {
    key: "fromNumberArray",
    value: function fromNumberArray(value) {
      if (!arrayHelper_1.ArrayHelper.isTyped(value, Number)) {
        throw new dataError_1.DataError("The value does not contain valid trits");
      }

      return new Trits(new Int8Array(value));
    }
    /**
     * Create instance of trits from trytes.
     * @param value Trytes used to create trits.
     * @returns An instance of Trits.
     */

  }, {
    key: "fromTrytes",
    value: function fromTrytes(value) {
      if (!objectHelper_1.ObjectHelper.isType(value, trytes_1.Trytes)) {
        throw new dataError_1.DataError("The value should be a valid Trytes object");
      }

      var trytesString = value.toString();
      var trits = new Int8Array(trytesString.length * 3);

      for (var i = 0; i < trytesString.length; i++) {
        var idx = trytes_1.Trytes.ALPHABET.indexOf(trytesString.charAt(i));
        trits[i * 3] = Trits.TRYTES_TRITS[idx][0];
        trits[i * 3 + 1] = Trits.TRYTES_TRITS[idx][1];
        trits[i * 3 + 2] = Trits.TRYTES_TRITS[idx][2];
      }

      return new Trits(trits);
    }
    /**
     * Create instance of trits from number
     * @param value Number used to create trits.
     * @returns An instance of Trits.
     */

  }, {
    key: "fromNumber",
    value: function fromNumber(value) {
      if (!numberHelper_1.NumberHelper.isInteger(value)) {
        throw new dataError_1.DataError("The value is not an integer");
      }

      var trits = [];
      var absoluteValue = value < 0 ? -value : value;

      while (absoluteValue > 0) {
        var remainder = absoluteValue % 3;
        absoluteValue = Math.floor(absoluteValue / 3);

        if (remainder > 1) {
          remainder = -1;
          absoluteValue++;
        }

        trits[trits.length] = remainder;
      }

      if (value < 0) {
        for (var i = 0; i < trits.length; i++) {
          trits[i] = -trits[i];
        }
      }

      return new Trits(new Int8Array(trits));
    }
    /**
     * Add two trits together.
     * @param first The first trit.
     * @param second The second trit.
     * @returns New trit which is the addition of the a + b.
     */

  }, {
    key: "add",
    value: function add(first, second) {
      if (!objectHelper_1.ObjectHelper.isType(first, Trits)) {
        throw new dataError_1.DataError("The first should be a valid Trits object");
      }

      if (!objectHelper_1.ObjectHelper.isType(second, Trits)) {
        throw new dataError_1.DataError("The seconds should be a valid Trits object");
      }

      var out = new Int8Array(Math.max(first._trits.length, second._trits.length));
      var carry = 0;
      var iA;
      var iB;

      for (var i = 0; i < out.length; i++) {
        iA = i < first._trits.length ? first._trits[i] : 0;
        iB = i < second._trits.length ? second._trits[i] : 0;
        var fA = Trits.fullAdd(iA, iB, carry);
        out[i] = fA[0];
        carry = fA[1];
      }

      return Trits.fromArray(out);
    }
    /* @internal */

  }, {
    key: "fullAdd",
    value: function fullAdd(a, b, c) {
      var sA = Trits.sum(a, b);
      var cA = Trits.cons(a, b);
      var cB = Trits.cons(sA, c);
      var cOut = Trits.any(cA, cB);
      var sOUt = Trits.sum(sA, c);
      return new Int8Array([sOUt, cOut]);
    }
    /* @internal */

  }, {
    key: "sum",
    value: function sum(a, b) {
      var s = a + b;

      switch (s) {
        case 2:
          return -1;

        case -2:
          return 1;

        default:
          return s;
      }
    }
    /* @internal */

  }, {
    key: "cons",
    value: function cons(a, b) {
      if (a === b) {
        return a;
      }

      return 0;
    }
    /* @internal */

  }, {
    key: "any",
    value: function any(a, b) {
      var s = a + b;

      if (s > 0) {
        return 1;
      } else if (s < 0) {
        return -1;
      }

      return 0;
    }
  }]);

  return Trits;
}();
/* @internal */


Trits.TRYTES_TRITS = [new Int8Array([0, 0, 0]), new Int8Array([1, 0, 0]), new Int8Array([-1, 1, 0]), new Int8Array([0, 1, 0]), new Int8Array([1, 1, 0]), new Int8Array([-1, -1, 1]), new Int8Array([0, -1, 1]), new Int8Array([1, -1, 1]), new Int8Array([-1, 0, 1]), new Int8Array([0, 0, 1]), new Int8Array([1, 0, 1]), new Int8Array([-1, 1, 1]), new Int8Array([0, 1, 1]), new Int8Array([1, 1, 1]), new Int8Array([-1, -1, -1]), new Int8Array([0, -1, -1]), new Int8Array([1, -1, -1]), new Int8Array([-1, 0, -1]), new Int8Array([0, 0, -1]), new Int8Array([1, 0, -1]), new Int8Array([-1, 1, -1]), new Int8Array([0, 1, -1]), new Int8Array([1, 1, -1]), new Int8Array([-1, -1, 0]), new Int8Array([0, -1, 0]), new Int8Array([1, -1, 0]), new Int8Array([-1, 0, 0])];
exports.Trits = Trits;

/***/ }),

/***/ "../data/dist/data/tryteNumber.js":
/*!****************************************!*\
  !*** ../data/dist/data/tryteNumber.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var numberHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/numberHelper */ "../core/dist/helpers/numberHelper.js");

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

var dataError_1 = __webpack_require__(/*! ../error/dataError */ "../data/dist/error/dataError.js");

var trits_1 = __webpack_require__(/*! ./trits */ "../data/dist/data/trits.js");

var trytes_1 = __webpack_require__(/*! ./trytes */ "../data/dist/data/trytes.js");
/**
 * A class for handling tryte number.
 */


var TryteNumber =
/*#__PURE__*/
function () {
  /* @internal */
  function TryteNumber(trytes) {
    _classCallCheck(this, TryteNumber);

    this._trytes = trytes;
  }
  /**
   * Create tryte number from number.
   * @param value The number value to create the object from.
   * @param length The tryte length to pad the number with.
   * @returns An instance of TryteNumber.
   */


  _createClass(TryteNumber, [{
    key: "toTrytes",

    /**
     * Convert the tryte number to trytes.
     * @returns Trytes version of the tryte number.
     */
    value: function toTrytes() {
      return trytes_1.Trytes.fromString(this._trytes);
    }
    /**
     * Convert the tryte number to number.
     * @returns number value of the tryte number.
     */

  }, {
    key: "toNumber",
    value: function toNumber() {
      return trits_1.Trits.fromTrytes(trytes_1.Trytes.fromString(this._trytes)).toNumber();
    }
    /**
     * Get the string view of the object.
     * @returns string of the trytes.
     */

  }, {
    key: "toString",
    value: function toString() {
      return this._trytes;
    }
    /**
     * Get the value of the object.
     * @returns string of the trytes.
     */

  }, {
    key: "valueOf",
    value: function valueOf() {
      return this.toNumber();
    }
  }], [{
    key: "fromNumber",
    value: function fromNumber(value) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TryteNumber.LENGTH_9;
      var trytes;

      if (!numberHelper_1.NumberHelper.isInteger(length) || length <= 0) {
        throw new dataError_1.DataError("The length should be a number > 0", {
          length: length
        });
      }

      if (objectHelper_1.ObjectHelper.isEmpty(value)) {
        trytes = "9".repeat(length);
      } else {
        if (!numberHelper_1.NumberHelper.isInteger(value)) {
          throw new dataError_1.DataError("The value is not an integer", {
            value: value
          });
        }

        var trits = trits_1.Trits.fromNumber(value).toNumberArray();

        while (trits.length < length * 3) {
          trits.push(0);
        }

        trytes = trits_1.Trits.fromNumberArray(trits).toTrytes().toString();
      }

      return new TryteNumber(trytes);
    }
    /**
     * Create tryte number from trytes.
     * @param value The number value to create the object from.
     * @param length The tryte length to pad the number with.
     * @returns An instance of TryteNumber.
     */

  }, {
    key: "fromTrytes",
    value: function fromTrytes(value) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TryteNumber.LENGTH_9;

      if (!objectHelper_1.ObjectHelper.isType(value, trytes_1.Trytes)) {
        throw new dataError_1.DataError("The value should be a valid Trytes object");
      }

      var tryteString = value.toString();

      if (!numberHelper_1.NumberHelper.isInteger(length) || length <= 0) {
        throw new dataError_1.DataError("The length should be a number > 0", {
          length: length
        });
      }

      if (tryteString.length > length) {
        throw new dataError_1.DataError("The value contains too many characters", {
          length: tryteString.length
        });
      }

      while (tryteString.length < length) {
        tryteString += "9";
      }

      return new TryteNumber(tryteString);
    }
  }]);

  return TryteNumber;
}();
/**
 * Length of a number that uses 9 trytes.
 */


TryteNumber.LENGTH_9 = 9;
/**
 * An empty 9 length tryte number.
 */

TryteNumber.EMPTY_9 = TryteNumber.fromNumber(0, TryteNumber.LENGTH_9);
exports.TryteNumber = TryteNumber;

/***/ }),

/***/ "../data/dist/data/trytes.js":
/*!***********************************!*\
  !*** ../data/dist/data/trytes.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var numberHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/numberHelper */ "../core/dist/helpers/numberHelper.js");

var stringHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/stringHelper */ "../core/dist/helpers/stringHelper.js");

var dataError_1 = __webpack_require__(/*! ../error/dataError */ "../data/dist/error/dataError.js");
/**
 * A class for handling trytes.
 */


var Trytes =
/*#__PURE__*/
function () {
  /* @internal */
  function Trytes(trytes) {
    _classCallCheck(this, Trytes);

    this._trytes = trytes;
  }
  /**
   * Create trytes from a string.
   * @param value A string to create the trytes from.
   * @param length An optional validation length for the trytes, 0 means ignore length.
   * @returns An instance of Trytes.
   */


  _createClass(Trytes, [{
    key: "toString",

    /**
     * Convert the trytes to a string.
     * @returns String representation of the trytes.
     */
    value: function toString() {
      return this._trytes;
    }
    /**
     * Get the length of the trytes.
     * @returns The length of the trytes.
     */

  }, {
    key: "length",
    value: function length() {
      return this._trytes.length;
    }
    /**
     * Get a sub of the trytes.
     * @param start The start position to get the sub.
     * @param length The length of the sub.
     * @returns The trytes sub.
     */

  }, {
    key: "sub",
    value: function sub(start, length) {
      if (!numberHelper_1.NumberHelper.isInteger(start) || start < 0) {
        throw new dataError_1.DataError("The start must be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || start + length > this._trytes.length) {
        throw new dataError_1.DataError("The start + length must <= ".concat(this._trytes.length));
      }

      return Trytes.fromString(this._trytes.substr(start, length));
    }
  }], [{
    key: "fromString",
    value: function fromString(value) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (!stringHelper_1.StringHelper.isString(value)) {
        throw new dataError_1.DataError("The value must be a non empty string");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || length < 0) {
        throw new dataError_1.DataError("The length must be >= 0");
      }

      if (!Trytes.isValid(value, length)) {
        throw new dataError_1.DataError("The value and length do not contain valid trytes", {
          value: value,
          length: length
        });
      }

      return new Trytes(value);
    }
    /**
     * Does the value contain valid trytes.
     * @param value A string to validate as trytes.
     * @param length An optional validation length for the trytes, 0 means ignore length.
     * @returns True if the input was valid trytes.
     */

  }, {
    key: "isValid",
    value: function isValid(value) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (!stringHelper_1.StringHelper.isString(value)) {
        return false;
      } else {
        return new RegExp("^[9A-Z]{".concat(length ? length : "0,", "}$")).test(value);
      }
    }
  }]);

  return Trytes;
}();
/**
 * All the characters that can be used in trytes.
 */


Trytes.ALPHABET = "9ABCDEFGHIJKLMNOPQRSTUVWXYZ";
exports.Trytes = Trytes;

/***/ }),

/***/ "../data/dist/error/dataError.js":
/*!***************************************!*\
  !*** ../data/dist/error/dataError.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var coreError_1 = __webpack_require__(/*! @iota-pico/core/dist/error/coreError */ "../core/dist/error/coreError.js");
/**
 * A data implementation of an error.
 */


var DataError =
/*#__PURE__*/
function (_coreError_1$CoreErro) {
  _inherits(DataError, _coreError_1$CoreErro);

  /**
   * Create an instance of DataError.
   * @param message The message for the error.
   * @param additional Additional details about the error.
   * @param innerError Add information from inner error if there was one.
   */
  function DataError(message, additional, innerError) {
    var _this;

    _classCallCheck(this, DataError);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DataError).call(this, message, additional, innerError));
    _this.domain = "Data";
    return _this;
  }

  return DataError;
}(coreError_1.CoreError);

exports.DataError = DataError;

/***/ }),

/***/ "./dist/index.js":
/*!***********************!*\
  !*** ./dist/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Combined index of all the modules.
 */

__export(__webpack_require__(/*! ./proofOfWorkNodeJs */ "./dist/proofOfWorkNodeJs.js"));

/***/ }),

/***/ "./dist/proofOfWorkNodeJs.js":
/*!***********************************!*\
  !*** ./dist/proofOfWorkNodeJs.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.49/node_modules/@babel/runtime/regenerator/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var numberHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/numberHelper */ "../core/dist/helpers/numberHelper.js");

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

var cryptoError_1 = __webpack_require__(/*! @iota-pico/crypto/dist/error/cryptoError */ "../crypto/dist/error/cryptoError.js");

var proofOfWorkBase_1 = __webpack_require__(/*! @iota-pico/crypto/dist/proofOfWork/proofOfWorkBase */ "../crypto/dist/proofOfWork/proofOfWorkBase.js");

var trytes_1 = __webpack_require__(/*! @iota-pico/data/dist/data/trytes */ "../data/dist/data/trytes.js");

var ffi = __importStar(__webpack_require__(/*! ffi */ "ffi"));

var fs = __importStar(__webpack_require__(/*! fs */ "fs"));

var os = __importStar(__webpack_require__(/*! os */ "os"));

var path = __importStar(__webpack_require__(/*! path */ "path"));

var util = __importStar(__webpack_require__(/*! util */ "util"));
/**
 * ProofOfWork implementation using NodeJS.
 */


var ProofOfWorkNodeJs =
/*#__PURE__*/
function (_proofOfWorkBase_1$Pr) {
  _inherits(ProofOfWorkNodeJs, _proofOfWorkBase_1$Pr);

  /**
   * Create a new instance of ProofOfWork.
   * @param nodePlatform Provides platform specific functions, optional mostly used for testing.
   * @param timeService Service to get the time for attachments.
   */
  function ProofOfWorkNodeJs(nodePlatform, timeService) {
    var _this;

    _classCallCheck(this, ProofOfWorkNodeJs);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProofOfWorkNodeJs).call(this, timeService));

    if (objectHelper_1.ObjectHelper.isEmpty(nodePlatform)) {
      _this._nodePlatform = {
        pathResolve: path.resolve,
        pathJoin: path.join,
        platform: os.platform,
        lstat: fs.lstat,
        loadLibrary: ffi.Library
      };
    } else {
      _this._nodePlatform = nodePlatform;
    }

    return _this;
  }
  /**
   * Allow the proof of work to perform any initialization.
   * Will throw an exception if the implementation is not supported.
   */


  _createClass(ProofOfWorkNodeJs, [{
    key: "initialize",
    value: function () {
      var _initialize = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        var fullPath, platform, libFile, stat;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _get(_getPrototypeOf(ProofOfWorkNodeJs.prototype), "initialize", this).call(this);

              case 2:
                fullPath = this._nodePlatform.pathJoin(path.join(__dirname, "../binaries/"));
                platform = this._nodePlatform.platform();
                libFile = this._nodePlatform.pathJoin(fullPath, platform, "libccurl");
                _context.t0 = platform;
                _context.next = _context.t0 === "darwin" ? 8 : _context.t0 === "win32" ? 10 : 12;
                break;

              case 8:
                libFile += ".dylib";
                return _context.abrupt("break", 13);

              case 10:
                libFile += ".dll";
                return _context.abrupt("break", 13);

              case 12:
                libFile += ".so";

              case 13:
                _context.next = 15;
                return util.promisify(this._nodePlatform.lstat)(libFile);

              case 15:
                stat = _context.sent;

                if (!stat.isFile()) {
                  _context.next = 20;
                  break;
                }

                this._library = this._nodePlatform.loadLibrary(libFile, {
                  ccurl_pow: ["string", ["string", "int"]]
                });
                _context.next = 21;
                break;

              case 20:
                throw new cryptoError_1.CryptoError("Library files does not exist", {
                  libFile: libFile
                });

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function initialize() {
        return _initialize.apply(this, arguments);
      };
    }()
    /**
     * Perform a proof of work on a single item.
     * @param trytes The trytes to perform the pow on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns The trytes produced by the proof of work.
     */

  }, {
    key: "singlePow",
    value: function () {
      var _singlePow = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(trytes, minWeightMagnitude) {
        var _this2 = this;

        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", new Promise(function (resolve, reject) {
                  if (objectHelper_1.ObjectHelper.isEmpty(_this2._library)) {
                    throw new cryptoError_1.CryptoError("Library not loaded, have you called initialize");
                  }

                  if (!objectHelper_1.ObjectHelper.isType(trytes, trytes_1.Trytes)) {
                    throw new cryptoError_1.CryptoError("The trytes must be an object of type Trytes");
                  }

                  if (!numberHelper_1.NumberHelper.isInteger(minWeightMagnitude) || minWeightMagnitude <= 0) {
                    throw new cryptoError_1.CryptoError("The minWeightMagnitude must be > 0");
                  }

                  _this2._library.ccurl_pow.async(trytes.toString(), minWeightMagnitude, function (error, returnedTrytes) {
                    if (error) {
                      reject(error);
                    } else {
                      resolve(trytes_1.Trytes.fromString(returnedTrytes));
                    }
                  });
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function singlePow(_x, _x2) {
        return _singlePow.apply(this, arguments);
      };
    }()
  }]);

  return ProofOfWorkNodeJs;
}(proofOfWorkBase_1.ProofOfWorkBase);

exports.ProofOfWorkNodeJs = ProofOfWorkNodeJs;

/***/ }),

/***/ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.49/node_modules/@babel/runtime/regenerator/index.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.49/node_modules/@babel/runtime/regenerator/index.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime-module.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/webpack/4.12.0/node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "ffi":
/*!**********************!*\
  !*** external "ffi" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ffi__;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd05vZGVqcy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dOb2RlanMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dOb2RlanMvLi4vLi4vc3JjL2Vycm9yL2NvcmVFcnJvci50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd05vZGVqcy8uLi8uLi9zcmMvZmFjdG9yaWVzL2ZhY3RvcnlCYXNlLnRzIiwid2VicGFjazovL0lvdGFQaWNvUG93Tm9kZWpzLy4uLy4uL3NyYy9oZWxwZXJzL2FycmF5SGVscGVyLnRzIiwid2VicGFjazovL0lvdGFQaWNvUG93Tm9kZWpzLy4uLy4uL3NyYy9oZWxwZXJzL2pzb25IZWxwZXIudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dOb2RlanMvLi4vLi4vc3JjL2hlbHBlcnMvbnVtYmVySGVscGVyLnRzIiwid2VicGFjazovL0lvdGFQaWNvUG93Tm9kZWpzLy4uLy4uL3NyYy9oZWxwZXJzL29iamVjdEhlbHBlci50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd05vZGVqcy8uLi8uLi9zcmMvaGVscGVycy9zdHJpbmdIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dOb2RlanMvLi4vLi4vc3JjL3NlcnZpY2VzL3RpbWVTZXJ2aWNlLnRzIiwid2VicGFjazovL0lvdGFQaWNvUG93Tm9kZWpzLy4uLy4uL3NyYy9kaWdlc3RzL3NoYTMudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dOb2RlanMvLi4vLi4vc3JjL2Vycm9yL2NyeXB0b0Vycm9yLnRzIiwid2VicGFjazovL0lvdGFQaWNvUG93Tm9kZWpzLy4uLy4uL3NyYy9mYWN0b3JpZXMvc3BvbmdlRmFjdG9yeS50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd05vZGVqcy8uLi8uLi9zcmMvaGVscGVycy9iaWdJbnRlZ2VySGVscGVyLnRzIiwid2VicGFjazovL0lvdGFQaWNvUG93Tm9kZWpzLy4uLy4uL3NyYy9oZWxwZXJzL3RyYW5zYWN0aW9uSGVscGVyLnRzIiwid2VicGFjazovL0lvdGFQaWNvUG93Tm9kZWpzLy4uLy4uL3NyYy9wcm9vZk9mV29yay9wcm9vZk9mV29ya0Jhc2UudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dOb2RlanMvLi4vLi4vc3JjL3Nwb25nZXMvY3VybC50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd05vZGVqcy8uLi8uLi9zcmMvc3Bvbmdlcy9rZXJsLnRzIiwid2VicGFjazovL0lvdGFQaWNvUG93Tm9kZWpzLy4uL2NyeXB0by9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9AYmFiZWwvcnVudGltZS83LjAuMC1iZXRhLjQ5L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd05vZGVqcy8uLi9jcnlwdG8vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvYmlnLWludGVnZXIvMS42LjMxL25vZGVfbW9kdWxlcy9iaWctaW50ZWdlci9CaWdJbnRlZ2VyLmpzIiwid2VicGFjazovL0lvdGFQaWNvUG93Tm9kZWpzLy4uL2NyeXB0by9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9yZWdlbmVyYXRvci1ydW50aW1lLzAuMTEuMS9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLW1vZHVsZS5qcyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd05vZGVqcy8uLi9jcnlwdG8vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvcmVnZW5lcmF0b3ItcnVudGltZS8wLjExLjEvbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd05vZGVqcy8uLi8uLi9zcmMvZGF0YS9hZGRyZXNzLnRzIiwid2VicGFjazovL0lvdGFQaWNvUG93Tm9kZWpzLy4uLy4uL3NyYy9kYXRhL2hhc2gudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dOb2RlanMvLi4vLi4vc3JjL2RhdGEvc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LnRzIiwid2VicGFjazovL0lvdGFQaWNvUG93Tm9kZWpzLy4uLy4uL3NyYy9kYXRhL3RhZy50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd05vZGVqcy8uLi8uLi9zcmMvZGF0YS90cmFuc2FjdGlvbi50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd05vZGVqcy8uLi8uLi9zcmMvZGF0YS90cml0cy50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd05vZGVqcy8uLi8uLi9zcmMvZGF0YS90cnl0ZU51bWJlci50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd05vZGVqcy8uLi8uLi9zcmMvZGF0YS90cnl0ZXMudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dOb2RlanMvLi4vLi4vc3JjL2Vycm9yL2RhdGFFcnJvci50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd05vZGVqcy8uLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dOb2RlanMvLi4vc3JjL3Byb29mT2ZXb3JrTm9kZUpzLnRzIiwid2VicGFjazovL0lvdGFQaWNvUG93Tm9kZWpzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvQGJhYmVsL3J1bnRpbWUvNy4wLjAtYmV0YS40OS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dOb2RlanMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9yZWdlbmVyYXRvci1ydW50aW1lLzAuMTEuMS9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLW1vZHVsZS5qcyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd05vZGVqcy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvMC4xMS4xL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dOb2RlanMvKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovL0lvdGFQaWNvUG93Tm9kZWpzL2V4dGVybmFsIFwiZmZpXCIiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dOb2RlanMvZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovL0lvdGFQaWNvUG93Tm9kZWpzL2V4dGVybmFsIFwib3NcIiIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd05vZGVqcy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd05vZGVqcy9leHRlcm5hbCBcInV0aWxcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUEr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RUFBRixLQUFTLENBQVQ7QUFDQSxZQUFJLE1BQU8sTUFBTSxDQUFQLEdBQWEsT0FBTyxFQUExQixDQUFKO0FBQ0EsWUFBSSxNQUFPLE1BQU0sQ0FBUCxHQUFhLE9BQU8sRUFBMUIsQ0FBSjtBQUNBLFVBQUUsQ0FBRixLQUFRLENBQVI7QUFDQSxVQUFFLENBQUYsS0FBUSxDQUFSO0FBQ0EsVUFBRSxFQUFGLEtBQVMsQ0FBVDtBQUNBLFVBQUUsRUFBRixLQUFTLENBQVQ7QUFDQSxVQUFFLEVBQUYsS0FBUyxDQUFUO0FBQ0EsVUFBRSxFQUFGLEtBQVMsQ0FBVDtBQUNBLFVBQUUsRUFBRixLQUFTLENBQVQ7QUFDQSxVQUFFLEVBQUYsS0FBUyxDQUFUO0FBQ0EsVUFBRSxFQUFGLEtBQVMsQ0FBVDtBQUNBLFVBQUUsRUFBRixLQUFTLENBQVQ7QUFDQSxZQUFJLE1BQU8sTUFBTSxDQUFQLEdBQWEsT0FBTyxFQUExQixDQUFKO0FBQ0EsWUFBSSxNQUFPLE1BQU0sQ0FBUCxHQUFhLE9BQU8sRUFBMUIsQ0FBSjtBQUNBLFVBQUUsQ0FBRixLQUFRLENBQVI7QUFDQSxVQUFFLENBQUYsS0FBUSxDQUFSO0FBQ0EsVUFBRSxFQUFGLEtBQVMsQ0FBVDtBQUNBLFVBQUUsRUFBRixLQUFTLENBQVQ7QUFDQSxVQUFFLEVBQUYsS0FBUyxDQUFUO0FBQ0EsVUFBRSxFQUFGLEtBQVMsQ0FBVDtBQUNBLFVBQUUsRUFBRixLQUFTLENBQVQ7QUFDQSxVQUFFLEVBQUYsS0FBUyxDQUFUO0FBQ0EsVUFBRSxFQUFGLEtBQVMsQ0FBVDtBQUNBLFVBQUUsRUFBRixLQUFTLENBQVQ7QUFDQSxZQUFJLE1BQU8sTUFBTSxDQUFQLEdBQWEsT0FBTyxFQUExQixDQUFKO0FBQ0EsWUFBSSxNQUFPLE1BQU0sQ0FBUCxHQUFhLE9BQU8sRUFBMUIsQ0FBSjtBQUNBLFVBQUUsQ0FBRixLQUFRLENBQVI7QUFDQSxVQUFFLENBQUYsS0FBUSxDQUFSO0FBQ0EsVUFBRSxFQUFGLEtBQVMsQ0FBVDtBQUNBLFVBQUUsRUFBRixLQUFTLENBQVQ7QUFDQSxVQUFF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RUFBRixLQUFTLEVBQVYsR0FBaUIsRUFBRSxFQUFGLE1BQVUsRUFBaEM7QUFDQSxhQUFNLEVBQUUsRUFBRixLQUFTLEVBQVYsR0FBaUIsRUFBRSxFQUFGLE1BQVUsRUFBaEM7QUFDQSxjQUFPLEVBQUUsRUFBRixLQUFTLEVBQVYsR0FBaUIsRUFBRSxFQUFGLE1BQVUsRUFBakM7QUFDQSxjQUFPLEVBQUUsRUFBRixLQUFTLEVBQVYsR0FBaUIsRUFBRSxFQUFGLE1BQVUsRUFBakM7QUFDQSxjQUFPLEVBQUUsRUFBRixLQUFTLEVBQVYsR0FBaUIsRUFBRSxFQUFGLE1BQVUsQ0FBakM7QUFDQSxjQUFPLEVBQUUsRUFBRixLQUFTLEVBQVYsR0FBaUIsRUFBRSxFQUFGLE1BQVUsQ0FBakM7QUFDQSxjQUFPLEVBQUUsQ0FBRixLQUFRLEVBQVQsR0FBZ0IsRUFBRSxDQUFGLE1BQVMsQ0FBL0I7QUFDQSxjQUFPLEVBQUUsQ0FBRixLQUFRLEVBQVQsR0FBZ0IsRUFBRSxDQUFGLE1BQVMsQ0FBL0I7QUFDQSxjQUFPLEVBQUUsRUFBRixLQUFTLEVBQVYsR0FBaUIsRUFBRSxFQUFGLE1BQVUsQ0FBakM7QUFDQSxjQUFPLEVBQUUsRUFBRixLQUFTLEVBQVYsR0FBaUIsRUFBRSxFQUFGLE1BQVUsQ0FBakM7QUFDQSxjQUFPLEVBQUUsRUFBRixLQUFTLEVBQVYsR0FBaUIsRUFBRSxFQUFGLE1BQVUsQ0FBakM7QUFDQSxjQUFPLEVBQUUsRUFBRixLQUFTLEVBQVYsR0FBaUIsRUFBRSxFQUFGLE1BQVUsQ0FBakM7QUFDQSxhQUFNLEVBQUUsRUFBRixLQUFTLEVBQVYsR0FBaUIsRUFBRSxFQUFGLE1BQVUsRUFBaEM7QUFDQSxhQUFNLEVBQUUsRUFBRixLQUFTLEVBQVYsR0FBaUIsRUFBRSxFQUFGLE1BQVUsRUFBaEM7QUFDQSxjQUFPLEVBQUUsRUFBRixLQUFTLEVBQVYsR0FBaUIsRUFBRSxFQUFGLE1BQVUsQ0FBakM7QUFDQSxjQUFPLEVBQUUsRUFBRixLQUFTLEVBQVYsR0FBaUIsRUFBRSxFQUFGLE1BQVUsQ0FBakM7QUFDQSxjQUFPLEVBQUUsQ0FBRixLQUFRLEVBQVQsR0FBZ0IsRUFBRSxDQUFGLE1BQVMsQ0FBL0I7QUFDQSxjQUFPLEVBQUUsQ0FBRixLQUFRLEVBQVQsR0FBZ0IsRUFBRSxDQUFGLE1BQVMsQ0FBL0I7QUFDQSxjQUFPLEVBQUUsRUFBRixLQUFTLEVBQVYsR0FBaUIsRUFBRSxFQUFGLE1BQVUsRUFBakM7QUFDQSxjQUFPLEVBQUUsRUFBRixLQUFTLEVBQVYsR0FBaUIsRUFBRSxFQUFGLE1BQVUsRUFBakM7QUFDQSxjQUFPLEVBQUUsRUFBRixLQUFTLENBQVYsR0FBZ0IsRUFBRSxFQUFGLE1BQVUsRUFBaEM7QUFDQSxjQUFPLEVBQUUsRUFBRixLQUFTLENBQVYsR0FBZ0IsRUFBRSxFQUFGLE1BQVUsRUFBaEM7QUFDQSxjQUFPLEVBQUUsRUFBRixLQUFTLENBQVYsR0FBZ0IsRUFBRSxFQUFGLE1BQVUsRUFBaEM7QUFDQSxjQUFPLEVBQUUsRUFBRixLQUFTLENBQVYsR0FBZ0IsRUFBRSxFQUFGLE1BQVUsRUFBaEM7QUFDQSxhQUFNLEVBQUUsRUFBRixLQUFTLEVBQVYsR0FBaUIsRUFBRSxFQUFGLE1BQVUsRUFBaEM7QUFDQSxhQUFNLEVBQUUsRUFBRixLQUFTLEVBQVYsR0FBaUIsRUFBRSxFQUFGLE1BQVUsRUFBaEM7QUFFQSxVQUFFLENBQUYsSUFBTyxLQUFNLENBQUMsRUFBRCxHQUFNLEVBQW5CO0FBQ0EsVUFBRSxDQUFGLElBQU8sS0FBTSxDQUFDLEVBQUQsR0FBTSxFQUFuQjtBQUNBLFVBQUUsRUFBRixJQUFRLE1BQU8sQ0FBQyxHQUFELEdBQU8sR0FBdEI7QUFDQSxVQUFFLEVBQUYsSUFBUSxNQUFPLENBQUMsR0FBRCxHQUFPLEdBQXRCO0FBQ0EsVUFBRSxFQUFGLElBQVEsTUFBTyxDQUFDLEdBQUQsR0FBTyxHQUF0QjtBQUNBLFVBQUUsRUFBRixJQUFRLE1BQU8sQ0FBQyxHQUFELEdBQU8sR0FBdEI7QUFDQSxVQUFFLEVBQUYsSUFBUSxNQUFPLENBQUMsR0FBRCxHQUFPLEdBQXRCO0FBQ0EsVUFBRSxFQUFGLElBQVEsTUFBTyxDQUFDLEdBQUQsR0FBTyxHQUF0QjtBQUNBLFVBQUUsRUFBRixJQUFRLE1BQU8sQ0FBQyxHQUFELEdBQU8sR0FBdEI7QUFDQSxVQUFFLEVBQUYsSUFBUSxNQUFPLENBQUMsR0FBRCxHQUFPLEdBQXRCO0FBQ0EsVUFBRSxDQUFGLElBQU8sS0FBTSxDQUFDLEVBQUQsR0FBTSxFQUFuQjtBQUNBLFVBQUUsQ0FBRixJQUFPLEtBQU0sQ0FBQyxFQUFELEdBQU0sRUFBbkI7QUFDQSxVQUFFLEVBQUYsSUFBUSxNQUFPLENBQUMsR0FBRCxHQUFPLEdBQXRCO0FBQ0EsVUFBRSxFQUFGLElBQVEsTUFBTyxDQUFDLEdBQUQsR0FBTyxHQUF0QjtBQUNBLFVBQUUsRUFBRixJQUFRLE1BQU8sQ0FBQyxHQUFELEdBQU8sR0FBdEI7QUFDQSxVQUFFLEVBQUYsSUFBUSxNQUFPLENBQUMsR0FBRCxHQUFPLEdBQXRCO0FBQ0EsVUFBRSxFQUFGLElBQVEsTUFBTyxDQUFDLEdBQUQsR0FBTyxHQUF0QjtBQUNBLFVBQUUsRUFBRixJQUFRLE1BQU8sQ0FBQyxHQUFELEdBQU8sR0FBdEI7QUFDQSxVQUFFLEVBQUYsSUFBUSxNQUFPLENBQUMsR0FBRCxHQUFPLEdBQXRCO0FBQ0EsVUFBRSxFQUFGLElBQVEsTUFBTyxDQUFDLEdBQUQsR0FBTyxHQUF0QjtBQUNBLFVBQUUsQ0FBRixJQUFPLEtBQU0sQ0FBQyxFQUFELEdBQU0sRUFBbkI7QUFDQSxVQUFFLENBQUYsSUFBTyxLQUFNLENBQUMsRUFBRCxHQUFNLEVBQW5CO0FBQ0EsVUFBRSxFQUFGLElBQVEsTUFBTyxDQUFDLEdBQUQsR0FBTyxHQUF0QjtBQUNBLFVBQUUsRUFBRixJQUFRLE1BQU8sQ0FBQyxHQUFELEdBQU8sR0FBdEI7QUFDQSxVQUFFLEVBQUYsSUFBUSxNQUFPLENBQUMsR0FBRCxHQUFPLEdBQXRCO0FBQ0EsVUFBRSxFQUFGLElBQVEsTUFBTyxDQUFDLEdBQUQsR0FBTyxHQUF0QjtBQUNBLFVBQUUsRUFBRixJQUFRLE1BQU8sQ0FBQyxHQUFELEdBQU8sR0FBdEI7QUFDQSxVQUFFLEVBQUYsSUFBUSxNQUFPLENBQUMsR0FBRCxHQUFPLEdBQXRCO0FBQ0EsVUFBRSxFQUFGLElBQVEsTUFBTyxDQUFDLEdBQUQsR0FBTyxHQUF0QjtBQUNBLFVBQUUsRUFBRixJQUFRLE1BQU8sQ0FBQyxHQUFELEdBQU8sR0FBdEI7QUFDQSxVQUFFLENBQUYsSUFBTyxLQUFNLENBQUMsRUFBRCxHQUFNLEVBQW5CO0FBQ0EsVUFBRSxDQUFGLElBQU8sS0FBTSxDQUFDLEVBQUQsR0FBTSxFQUFuQjtBQUNBLFVBQUUsRUFBRixJQUFRLE1BQU8sQ0FBQyxHQUFELEdBQU8sR0FBdEI7QUFDQSxVQUFFLEVBQUYsSUFBUSxNQUFPLENBQUMsR0FBRCxHQUFPLEdBQXRCO0FBQ0EsVUFBRSxFQUFGLElBQVEsTUFBTyxDQUFDLEdBQUQsR0FBTyxHQUF0QjtBQUNBLFVBQUUsRUFBRixJQUFRLE1BQU8sQ0FBQyxHQUFELEdBQU8sR0FBdEI7QUFDQSxVQUFFLEVBQUYsSUFBUSxNQUFPLENBQUMsR0FBRCxHQUFPLEdBQXRCO0FBQ0EsVUFBRSxFQUFGLElBQVEsTUFBTyxDQUFDLEdBQUQsR0FBTyxHQUF0QjtBQUNBLFVBQUUsRUFBRixJQUFRLE1BQU8sQ0FBQyxHQUFELEdBQU8sR0FBdEI7QUFDQSxVQUFFLEVBQUYsSUFBUSxNQUFPLENBQUMsR0FBRCxHQUFPLEdBQXRCO0FBQ0EsVUFBRSxDQUFGLElBQU8sS0FBTSxDQUFDLEVBQUQsR0FBTSxFQUFuQjtBQUNBLFVBQUUsQ0FBRixJQUFPLEtBQU0sQ0FBQyxFQUFELEdBQU0sRUFBbkI7QUFDQSxVQUFFLEVBQUYsSUFBUSxNQUFPLENBQUMsR0FBRCxHQUFPLEdBQXRCO0FBQ0EsVUFBRSxFQUFGLElBQVEsTUFBTyxDQUFDLEdBQUQsR0FBTyxHQUF0QjtBQUNBLFVBQUUsRUFBRixJQUFRLE1BQU8sQ0FBQyxHQUFELEdBQU8sR0FBdEI7QUFDQSxVQUFFLEVBQUYsSUFBUSxNQUFPLENBQUMsR0FBRCxHQUFPLEdBQXRCO0FBQ0EsVUFBRSxFQUFGLElB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsUUFBUTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxRQUFRO0FBQzFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsY0FBYztBQUNqQztBQUNBO0FBQ0EsaUNBQWlDLHNCQUFzQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixPQUFPO0FBQzlCO0FBQ0EsOERBQThEO0FBQzlEO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTCxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFD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QTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTCxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsZUFBZSxjQUFjO0FBQzdCOzs7Ozs7Ozs7Ozs7QUN0dEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDckJBLGlEOzs7Ozs7Ozs7OztBQ0FBLCtCOzs7Ozs7Ozs7OztBQ0FBLCtCOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLGlDIiwiZmlsZSI6ImlvdGEtcGljby1wb3ctbm9kZWpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiZmZpXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiQGlvdGEtcGljby9wb3ctbm9kZWpzXCIsIFtcImZmaVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAaW90YS1waWNvL3Bvdy1ub2RlanNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJmZmlcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIklvdGFQaWNvUG93Tm9kZWpzXCJdID0gZmFjdG9yeShyb290W1wiZmZpXCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ZmaV9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9kaXN0L2luZGV4LmpzXCIpO1xuIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBqc29uSGVscGVyXzEgPSByZXF1aXJlKFwiLi4vaGVscGVycy9qc29uSGVscGVyXCIpO1xyXG5jb25zdCBzdHJpbmdIZWxwZXJfMSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3N0cmluZ0hlbHBlclwiKTtcclxuLyoqXHJcbiAqIEEgY29yZSBpbXBsZW1lbnRhdGlvbiBvZiBhbiBlcnJvci5cclxuICovXHJcbmNsYXNzIENvcmVFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIENvcmVFcnJvci5cclxuICAgICAqIEBwYXJhbSBtZXNzYWdlIFRoZSBtZXNzYWdlIGZvciB0aGUgZXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gYWRkaXRpb25hbCBBZGRpdGlvbmFsIGRldGFpbHMgYWJvdXQgdGhlIGVycm9yLlxyXG4gICAgICogQHBhcmFtIGlubmVyRXJyb3IgQWRkIGluZm9ybWF0aW9uIGZyb20gaW5uZXIgZXJyb3IgaWYgdGhlcmUgd2FzIG9uZS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZSwgYWRkaXRpb25hbCwgaW5uZXJFcnJvcikge1xyXG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMuYWRkaXRpb25hbCA9IGFkZGl0aW9uYWwgPyBhZGRpdGlvbmFsIDoge307XHJcbiAgICAgICAgdGhpcy5pbm5lckVycm9yID0gaW5uZXJFcnJvcjtcclxuICAgICAgICB0aGlzLmRvbWFpbiA9IFwiQ29yZVwiO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiBhbiBvYmplY3QgY291bGQgYmUgYSBDb3JlRXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gb2JqIFRoZSBvYmplY3QgdG8gY2hlY2sgaWYgaXQgaXMgYSBDb3JlRXJyb3IuXHJcbiAgICAgKiBAcmV0dXJucyB0cnVlIElmIHRoZSB0ZXN0ZWQgb2JqZWN0IGlzIGEgQ29yZUVycm9yLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNFcnJvcihvYmopIHtcclxuICAgICAgICByZXR1cm4gb2JqICE9PSB1bmRlZmluZWQgJiYgb2JqICE9PSBudWxsICYmIHR5cGVvZiBvYmogPT09IFwib2JqZWN0XCIgJiYgXCJtZXNzYWdlXCIgaW4gb2JqICYmIFwiYWRkaXRpb25hbFwiIGluIG9iajtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRm9ybWF0IHRoZSBlcnJvciB0byBhIHJlYWRhYmxlIHZlcnNpb24uXHJcbiAgICAgKiBAcmV0dXJucyBGb3JtYXR0ZWQgdmVyc2lvbiBvZiB0aGUgZXJyb3IuXHJcbiAgICAgKi9cclxuICAgIGZvcm1hdCgpIHtcclxuICAgICAgICBsZXQgb3V0ID0gXCJcIjtcclxuICAgICAgICBpZiAoIXN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc0VtcHR5KHRoaXMuZG9tYWluKSkge1xyXG4gICAgICAgICAgICBvdXQgKz0gYCR7dGhpcy5kb21haW59OiBgO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc0VtcHR5KHRoaXMubWVzc2FnZSkpIHtcclxuICAgICAgICAgICAgb3V0ICs9IGAke3RoaXMubWVzc2FnZX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5hZGRpdGlvbmFsKTtcclxuICAgICAgICBpZiAoa2V5cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGlmIChvdXQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgb3V0ICs9IFwiXFxuXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAga2V5cy5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvdXQgKz0gYFxcdCR7a2V5fTogJHtqc29uSGVscGVyXzEuSnNvbkhlbHBlci5zdHJpbmdpZnkodGhpcy5hZGRpdGlvbmFsW2tleV0pfVxcbmA7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb3V0O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQ29yZUVycm9yID0gQ29yZUVycm9yO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZMjl5WlVWeWNtOXlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyVnljbTl5TDJOdmNtVkZjbkp2Y2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUVzYzBSQlFXMUVPMEZCUTI1RUxEQkVRVUYxUkR0QlFVVjJSRHM3UjBGRlJ6dEJRVU5JTEdWQlFYVkNMRk5CUVZFc1MwRkJTenRKUVdkQ2FFTTdPenM3TzA5QlMwYzdTVUZEU0N4WlFVRlpMRTlCUVdVc1JVRkJSU3hWUVVGclF5eEZRVUZGTEZWQlFXdENPMUZCUXk5RkxFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0UlFVTm1MRWxCUVVrc1EwRkJReXhWUVVGVkxFZEJRVWNzVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF6dFJRVU12UXl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hIUVVGSExGVkJRVlVzUTBGQlF6dFJRVU0zUWl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFMUJRVTBzUTBGQlF6dEpRVU42UWl4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlVUdFJRVU14UWl4UFFVRlBMRWRCUVVjc1MwRkJTeXhUUVVGVExFbEJRVWtzUjBGQlJ5eExRVUZMTEVsQlFVa3NTVUZCU1N4UFFVRlBMRWRCUVVjc1MwRkJTeXhSUVVGUkxFbEJRVWtzVTBGQlV5eEpRVUZKTEVkQlFVY3NTVUZCU1N4WlFVRlpMRWxCUVVrc1IwRkJSeXhEUVVGRE8wbEJRMjVJTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeE5RVUZOTzFGQlExUXNTVUZCU1N4SFFVRkhMRWRCUVVjc1JVRkJSU3hEUVVGRE8xRkJSV0lzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlR0WlFVTndReXhIUVVGSExFbEJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4SlFVRkpMRU5CUVVNN1UwRkROMEk3VVVGRFJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4RlFVRkZPMWxCUTNKRExFZEJRVWNzU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRUUVVNMVFqdFJRVVZFTEUxQlFVMHNTVUZCU1N4SFFVRkhMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRPMUZCUXpGRExFbEJRVWtzU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRVZCUVVVN1dVRkRha0lzU1VGQlNTeEhRVUZITEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1JVRkJSVHRuUWtGRGFFSXNSMEZCUnl4SlFVRkpMRWxCUVVrc1EwRkJRenRoUVVObU8xbEJRMFFzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRuUWtGRFppeEhRVUZITEVsQlFVa3NTMEZCU3l4SFFVRkhMRXRCUVVzc2RVSkJRVlVzUTBGQlF5eFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTTdXVUZEZGtVc1EwRkJReXhEUVVGRExFTkJRVU03VTBGRFRqdFJRVVZFTEU5QlFVOHNSMEZCUnl4RFFVRkRPMGxCUTJZc1EwRkJRenREUVVOS08wRkJhRVZFTERoQ1FXZEZReUo5IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogRmFjdG9yeSB0byBnZW5lcmF0ZSB0eXBlcy5cclxuICogQHR5cGVwYXJhbSBUIFRoZSBnZW5lcmljIHR5cGUgZm9yIHRoZSBvYmplY3QgdHlwZXMgaW4gdGhlIGZhY3RvcnkuXHJcbiAqL1xyXG5jbGFzcyBGYWN0b3J5QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgICAgICB0aGlzLl90eXBlcyA9IHt9O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlciBhIG5ldyB0eXBlIHdpdGggdGhlIGZhY3RvcnkuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgdHlwZSB0byByZWdpc3Rlci5cclxuICAgICAqIEBwYXJhbSB0eXBlQ29uc3RydWN0b3IgVGhlIGNvbnN0cnVjdG9yIGZvciB0aGUgdHlwZS5cclxuICAgICAqL1xyXG4gICAgcmVnaXN0ZXIobmFtZSwgdHlwZUNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgdGhpcy5nZXRJbnN0YW5jZSgpLl90eXBlc1tuYW1lXSA9IHR5cGVDb25zdHJ1Y3RvcjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVW5yZWdpc3RlciBhIHR5cGUgZnJvbSB0aGUgZmFjdG9yeS5cclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB0eXBlIHRvIHVucmVnaXN0ZXIuXHJcbiAgICAgKi9cclxuICAgIHVucmVnaXN0ZXIobmFtZSkge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmdldEluc3RhbmNlKCkuX3R5cGVzW25hbWVdO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBEb2VzIHRoZSBmYWN0b3J5IGNvbnRhaW4gYSBzcGVjaWZpYyB0eXBlLlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHR5cGUgdG8gbG9vayBmb3IuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB0eXBlIGV4aXN0cy5cclxuICAgICAqL1xyXG4gICAgZXhpc3RzKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRJbnN0YW5jZSgpLl90eXBlc1tuYW1lXSAhPT0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBMaXN0IHRoZSB0eXBlcyBpbiB0aGUgZmFjdG9yeS5cclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB0eXBlIHRvIGxvb2sgZm9yLlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdHlwZSBleGlzdHMuXHJcbiAgICAgKi9cclxuICAgIHR5cGVzKCkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmdldEluc3RhbmNlKCkuX3R5cGVzKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIGFuIG9iamVjdCBmcm9tIHRoZSBmYWN0b3J5LlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHR5cGUgdG8gY3JlYXRlLlxyXG4gICAgICogQHBhcmFtIGFyZ3MgQW55IHBhcmFtZXRlcnMgdG8gcGFzcyB0byB0aGUgY29uc3RydWN0b3IuXHJcbiAgICAgKiBAcmV0dXJucyBBIG5ldyBpbnN0YW5jZSBvZiB0aGUgdHlwZSBpZiBpdCBleGlzdHMsIG9yIHVuZGVmaW5lZCBpZiBpdCBkb2VzIG5vdC5cclxuICAgICAqL1xyXG4gICAgY3JlYXRlKG5hbWUsIC4uLmFyZ3MpIHtcclxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuZ2V0SW5zdGFuY2UoKTtcclxuICAgICAgICBpZiAoaW5zdGFuY2UuX3R5cGVzW25hbWVdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZS5fdHlwZXNbbmFtZV0oLi4uYXJncyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLkZhY3RvcnlCYXNlID0gRmFjdG9yeUJhc2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVptRmpkRzl5ZVVKaGMyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdlptRmpkRzl5YVdWekwyWmhZM1J2Y25sQ1lYTmxMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUczdPMGRCUjBjN1FVRkRTRHRKUVVGQk8xRkJRMGtzWlVGQlpUdFJRVU5GTEZkQlFVMHNSMEZCT0VNc1JVRkJSU3hEUVVGRE8wbEJjMFExUlN4RFFVRkRPMGxCY0VSSE96czdPMDlCU1VjN1NVRkRTU3hSUVVGUkxFTkJRVU1zU1VGQldTeEZRVUZGTEdWQlFYTkRPMUZCUTJoRkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzWlVGQlpTeERRVUZETzBsQlEzUkVMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4VlFVRlZMRU5CUVVNc1NVRkJXVHRSUVVNeFFpeFBRVUZQTEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdTVUZETTBNc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zU1VGQldUdFJRVU4wUWl4UFFVRlBMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1UwRkJVeXhEUVVGRE8wbEJRM3BFTEVOQlFVTTdTVUZGUkRzN096dFBRVWxITzBsQlEwa3NTMEZCU3p0UlFVTlNMRTlCUVU4c1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03U1VGRGJFUXNRMEZCUXp0SlFVVkVPenM3T3p0UFFVdEhPMGxCUTBrc1RVRkJUU3hEUVVGRExFbEJRVmtzUlVGQlJTeEhRVUZITEVsQlFWYzdVVUZEZEVNc1RVRkJUU3hSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRPMUZCUTNCRExFbEJRVWtzVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSVHRaUVVOMlFpeFBRVUZQTEZGQlFWRXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXp0VFFVTjZRenRoUVVGTk8xbEJRMGdzVDBGQlR5eFRRVUZUTEVOQlFVTTdVMEZEY0VJN1NVRkRUQ3hEUVVGRE8wTkJTVW83UVVGNFJFUXNhME5CZDBSREluMD0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIi4vb2JqZWN0SGVscGVyXCIpO1xyXG4vKipcclxuICogQXJyYXkgaGVscGVyIG1ldGhvZHMuXHJcbiAqL1xyXG5jbGFzcyBBcnJheUhlbHBlciB7XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhbiBhcnJheS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdC5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHZhbHVlIGlzIGFuIGFycmF5LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNBcnJheSh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gZmFsc2UgOiBBcnJheS5pc0FycmF5KHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGEgZW1wdHkgYXJyYXkuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB2YWx1ZSBpcyBhIGVtcHR5IGFycmF5LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNFbXB0eSh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiAhQXJyYXlIZWxwZXIuaXNBcnJheSh2YWx1ZSkgfHwgdmFsdWUubGVuZ3RoID09PSAwO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYSBub24gZW1wdHkgYXJyYXkgb2Ygc3BlY2lmaWMgdHlwZS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdC5cclxuICAgICAqIEBwYXJhbSB0eXBlIFRoZSB0eXBlIG9mIHRoZSBvYmplY3RcclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHZhbHVlIGlzIGEgbm9uIGVtcHR5IGFycmF5IG9mIGEgc3BlY2lmaWMgdHlwZS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzVHlwZWQodmFsdWUsIHR5cGUpIHtcclxuICAgICAgICByZXR1cm4gIUFycmF5SGVscGVyLmlzRW1wdHkodmFsdWUpICYmXHJcbiAgICAgICAgICAgICF2YWx1ZS5pbmNsdWRlcyh1bmRlZmluZWQpICYmXHJcbiAgICAgICAgICAgICF2YWx1ZS5pbmNsdWRlcyhudWxsKSAmJlxyXG4gICAgICAgICAgICB2YWx1ZS5ldmVyeSgoYSkgPT4gb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShhLCB0eXBlKSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5BcnJheUhlbHBlciA9IEFycmF5SGVscGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZWEp5WVhsSVpXeHdaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZhR1ZzY0dWeWN5OWhjbkpoZVVobGJIQmxjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRXNhVVJCUVRoRE8wRkJSVGxET3p0SFFVVkhPMEZCUTBnN1NVRkRTVHM3T3p0UFFVbEhPMGxCUTBrc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZWTzFGQlF6VkNMRTlCUVU4c1MwRkJTeXhMUVVGTExFbEJRVWtzU1VGQlNTeExRVUZMTEV0QlFVc3NVMEZCVXp0WlFVTjRReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzBsQlEzWkRMRU5CUVVNN1NVRkZSRHM3T3p0UFFVbEhPMGxCUTBrc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZWTzFGQlF6VkNMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRXRCUVVzc1EwRkJReXhOUVVGTkxFdEJRVXNzUTBGQlF5eERRVUZETzBsQlF6ZEVMRU5CUVVNN1NVRkZSRHM3T3pzN1QwRkxSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCVlN4RlFVRkZMRWxCUVdNN1VVRkROVU1zVDBGQlR5eERRVUZETEZkQlFWY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRE8xbEJRemxDTEVOQlFVTXNTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhUUVVGVExFTkJRVU03V1VGRE1VSXNRMEZCUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF6dFpRVU55UWl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlRTeEZRVUZGTEVWQlFVVXNRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVNNVJDeERRVUZETzBOQlJVbzdRVUZxUTBRc2EwTkJhVU5ESW4wPSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIEpzb24gaGVscGVyIG1ldGhvZHMuXHJcbiAqL1xyXG5jbGFzcyBKc29uSGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogU3RyaW5naWZ5IGFuIG9iamVjdCB3aXRoIHJlY3Vyc2lvbiBicmVha2luZy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBBIEphdmFTY3JpcHQgdmFsdWUsIHVzdWFsbHkgYW4gb2JqZWN0IG9yIGFycmF5LCB0byBiZSBjb252ZXJ0ZWQuXHJcbiAgICAgKiBAcGFyYW0gcmVwbGFjZXIgQSBmdW5jdGlvbiB0aGF0IHRyYW5zZm9ybXMgdGhlIHJlc3VsdHMuXHJcbiAgICAgKiBAcGFyYW0gc3BhY2UgQWRkcyBpbmRlbnRhdGlvbiwgd2hpdGUgc3BhY2UsIGFuZCBsaW5lIGJyZWFrIGNoYXJhY3RlcnMgdG8gdGhlIHJldHVybi12YWx1ZSBKU09OIHRleHQgdG8gbWFrZSBpdCBlYXNpZXIgdG8gcmVhZC5cclxuICAgICAqIEByZXR1cm5zIFN0cmluZyB2ZXJzaW9uIG9mIHRoZSBvYmplY3QuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBzdHJpbmdpZnkodmFsdWUsIHJlcGxhY2VyLCBzcGFjZSkge1xyXG4gICAgICAgIC8vIGVsaW1pbmF0ZXMgYW55IHJlY3Vyc2lvbiBpbiB0aGUgc3RyaW5naWZ5XHJcbiAgICAgICAgY29uc3QgY2FjaGUgPSBbXTtcclxuICAgICAgICBjb25zdCByZWN1c2lvblJlcGxhY2VyID0gKGtleSwgcmVwbGFjZVZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVwbGFjZVZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsICYmIHJlcGxhY2VWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FjaGUuaW5kZXhPZihyZXBsYWNlVmFsdWUpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNpcmN1bGFyIHJlZmVyZW5jZSBmb3VuZCwgZGlzY2FyZCBrZXlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWNoZS5wdXNoKHJlcGxhY2VWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlcGxhY2VyID8gcmVwbGFjZXIoa2V5LCByZXBsYWNlVmFsdWUpIDogcmVwbGFjZVZhbHVlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHZhbHVlLCByZWN1c2lvblJlcGxhY2VyLCBzcGFjZSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Kc29uSGVscGVyID0gSnNvbkhlbHBlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYW5OdmJraGxiSEJsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlvWld4d1pYSnpMMnB6YjI1SVpXeHdaWEl1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJPenRIUVVWSE8wRkJRMGc3U1VGRFNUczdPenM3TzA5QlRVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExFdEJRVlVzUlVGQlJTeFJRVUV5UXl4RlFVRkZMRXRCUVhWQ08xRkJRM0JITERSRFFVRTBRenRSUVVNMVF5eE5RVUZOTEV0QlFVc3NSMEZCVlN4RlFVRkZMRU5CUVVNN1VVRkZlRUlzVFVGQlRTeG5Ra0ZCWjBJc1IwRkJSeXhEUVVGRExFZEJRVmNzUlVGQlJTeFpRVUZwUWl4RlFVRkZMRVZCUVVVN1dVRkRlRVFzU1VGQlNTeFBRVUZQTEZsQlFWa3NTMEZCU3l4UlFVRlJMRWxCUVVrc1MwRkJTeXhMUVVGTExFbEJRVWtzU1VGQlNTeFpRVUZaTEV0QlFVc3NVMEZCVXl4RlFVRkZPMmRDUVVOc1JpeEpRVUZKTEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1dVRkJXU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVWQlFVVTdiMEpCUTNCRExIZERRVUYzUXp0dlFrRkRlRU1zVDBGQlR6dHBRa0ZEVmp0eFFrRkJUVHR2UWtGRFNDeExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRE8ybENRVU0xUWp0aFFVTktPMWxCUlVRc1QwRkJUeXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4SFFVRkhMRVZCUVVVc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZsQlFWa3NRMEZCUXp0UlFVTnFSU3hEUVVGRExFTkJRVU03VVVGRlJpeFBRVUZQTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhGUVVGRkxHZENRVUZuUWl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTTdRMEZEU2p0QlFUTkNSQ3huUTBFeVFrTWlmUT09IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogTnVtYmVyIGhlbHBlciBtZXRob2RzLlxyXG4gKi9cclxuY2xhc3MgTnVtYmVySGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGFuIGludGVnZXIuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QgZm9yIGl0cyBpbnRlZ2VybmVzcy5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG9iamVjdCBpcyBhIGludGVnZXIuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0ludGVnZXIodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcih2YWx1ZSkgJiYgIU51bWJlci5pc05hTih2YWx1ZSkgJiYgTnVtYmVyLmlzRmluaXRlKHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGEgbnVtYmVyLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0IGZvciBpdHMgbnVtYmVyeW5lc3MuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBvYmplY3QgaXMgYSBudW1iZXIuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc051bWJlcih2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIiAmJiAhTnVtYmVyLmlzTmFOKHZhbHVlKSAmJiBOdW1iZXIuaXNGaW5pdGUodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYSBmbG9hdCBudW1iZXIgZm9ybWF0dGVkIGFzIGEgc3RyaW5nLCBjYW4gYmUgdXNlZCBmb3IgYmlnIG51bWJlcnMgdGhhdCB3b3VsZCBvdmVyZmxvdyBwYXJzZUZsb2F0LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVja1xyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgbnVtYmVyIGlzIGZvcm1hdHRlZCBjb3JyZWN0bHkuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0Zsb2F0U3RyaW5nKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIC9eLT9cXGQqXFwuP1xcZCskLy50ZXN0KHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGEgaW50ZWdlciBudW1iZXIgZm9ybWF0dGVkIGFzIGEgc3RyaW5nLCBjYW4gYmUgdXNlZCBmb3IgYmlnIG51bWJlcnMgdGhhdCB3b3VsZCBvdmVyZmxvdyBwYXJzZUludC5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2tcclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG51bWJlciBpcyBmb3JtYXR0ZWQgY29ycmVjdGx5LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNJbnRlZ2VyU3RyaW5nKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIC9eLT9cXGQrJC8udGVzdCh2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5OdW1iZXJIZWxwZXIgPSBOdW1iZXJIZWxwZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJuVnRZbVZ5U0dWc2NHVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyaGxiSEJsY25NdmJuVnRZbVZ5U0dWc2NHVnlMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUczdSMEZGUnp0QlFVTklPMGxCUTBrN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlZUdFJRVU01UWl4UFFVRlBMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGNrWXNRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFdEJRVlU3VVVGRE4wSXNUMEZCVHl4TFFVRkxMRXRCUVVzc1UwRkJVeXhKUVVGSkxFdEJRVXNzUzBGQlN5eEpRVUZKTEVsQlFVa3NUMEZCVHl4TFFVRkxMRXRCUVVzc1VVRkJVU3hKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTJoSkxFTkJRVU03U1VGRlJEczdPenRQUVVsSE8wbEJRMGtzVFVGQlRTeERRVUZETEdGQlFXRXNRMEZCUXl4TFFVRmhPMUZCUTNKRExFOUJRVThzWlVGQlpTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVOMlF5eERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4bFFVRmxMRU5CUVVNc1MwRkJZVHRSUVVOMlF5eFBRVUZQTEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGFrTXNRMEZCUXp0RFFVTktPMEZCY0VORUxHOURRVzlEUXlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIE9iamVjdCBoZWxwZXIgbWV0aG9kcy5cclxuICovXHJcbmNsYXNzIE9iamVjdEhlbHBlciB7XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBlbXB0eS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdC5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHZhbHVlIGlzIGVtcHR5LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNFbXB0eSh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYW4gb2JqZWN0LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0LlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgYW4gb2JqZWN0LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNPYmplY3QodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IGZhbHNlIDogdHlwZW9mICh2YWx1ZSkgPT09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYW4gb2JqZWN0IGlmIGdpdmVuIHR5cGUuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QuXHJcbiAgICAgKiBAcGFyYW0gdHlwZUNvbnN0cnVjdG9yIEEgY2FsbGJhY2sgbWV0aG9kIHdoaWNoIHJldHVybnMgYW4gaW5zdGFuY2Ugb2YgdGhlIG9iamVjdC5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHZhbHVlIGlzIGFuIG9iamVjdCBvZiB0aGUgc3BlY2lmaWVkIHR5cGUuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc1R5cGUodmFsdWUsIHR5cGVDb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlQ2xhc3NOYW1lID0gT2JqZWN0SGVscGVyLmdldENsYXNzTmFtZSh2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlQ2xhc3NOYW1lICE9PSB1bmRlZmluZWQgJiYgdmFsdWVDbGFzc05hbWUgPT09IE9iamVjdEhlbHBlci5nZXRDbGFzc05hbWUodHlwZUNvbnN0cnVjdG9yKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBjbGFzcyBuYW1lIG9mIGFuIG9iamVjdCBpZiBpdCBoYXMgb25lLlxyXG4gICAgICogQHBhcmFtIG9iamVjdCBUaGUgb2JqZWN0IHRvIGdldCB0aGUgY2xhc3MgbmFtZSBmb3IuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgY2xhc3MgbmFtZSBpZiBpdCBoYXMgb25lIG9yIHVuZGVmaW5lZCBpZiBub3QuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRDbGFzc05hbWUob2JqZWN0KSB7XHJcbiAgICAgICAgaWYgKG9iamVjdCA9PT0gbnVsbCB8fCBvYmplY3QgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgY29uc3RydWN0b3IgPSB0eXBlb2Ygb2JqZWN0ID09PSBcImZ1bmN0aW9uXCIgPyBvYmplY3QudG9TdHJpbmcoKSA6IG9iamVjdC5jb25zdHJ1Y3Rvci50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHRzID0gY29uc3RydWN0b3IubWF0Y2goL1xcdysvZyk7XHJcbiAgICAgICAgICAgIHJldHVybiAocmVzdWx0cyAmJiByZXN1bHRzLmxlbmd0aCA+IDEpID8gcmVzdWx0c1sxXSA6IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5PYmplY3RIZWxwZXIgPSBPYmplY3RIZWxwZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWIySnFaV04wU0dWc2NHVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyaGxiSEJsY25NdmIySnFaV04wU0dWc2NHVnlMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUczdSMEZGUnp0QlFVTklPMGxCUTBrN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlZUdFJRVU0xUWl4UFFVRlBMRXRCUVVzc1MwRkJTeXhKUVVGSkxFbEJRVWtzUzBGQlN5eExRVUZMTEZOQlFWTXNRMEZCUXp0SlFVTnFSQ3hEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCVlR0UlFVTTNRaXhQUVVGUExFdEJRVXNzUzBGQlN5eEpRVUZKTEVsQlFVa3NTMEZCU3l4TFFVRkxMRk5CUVZNN1dVRkRlRU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1QwRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEZGQlFWRXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZEZEVVc1EwRkJRenRKUVVWRU96czdPenRQUVV0SE8wbEJRMGtzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRlZMRVZCUVVVc1pVRkJlVUk3VVVGRGRFUXNUVUZCVFN4alFVRmpMRWRCUVVjc1dVRkJXU3hEUVVGRExGbEJRVmtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0UlFVTjRSQ3hQUVVGUExHTkJRV01zUzBGQlN5eFRRVUZUTEVsQlFVa3NZMEZCWXl4TFFVRkxMRmxCUVZrc1EwRkJReXhaUVVGWkxFTkJRVU1zWlVGQlpTeERRVUZETEVOQlFVTTdTVUZEZWtjc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zV1VGQldTeERRVUZETEUxQlFWYzdVVUZEYkVNc1NVRkJTU3hOUVVGTkxFdEJRVXNzU1VGQlNTeEpRVUZKTEUxQlFVMHNTMEZCU3l4VFFVRlRMRVZCUVVVN1dVRkRla01zVDBGQlR5eFRRVUZUTEVOQlFVTTdVMEZEY0VJN1lVRkJUVHRaUVVOSUxFMUJRVTBzVjBGQlZ5eEhRVUZITEU5QlFVOHNUVUZCVFN4TFFVRkxMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zVjBGQlZ5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMWxCUTNKSExFMUJRVTBzVDBGQlR5eEhRVUZITEZkQlFWY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03V1VGRE1VTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1NVRkJTU3hQUVVGUExFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRk5CUVZNc1EwRkJRenRUUVVOdVJUdEpRVU5NTEVOQlFVTTdRMEZEU2p0QlFUZERSQ3h2UTBFMlEwTWlmUT09IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogU3RyaW5nIGhlbHBlciBtZXRob2RzLlxyXG4gKi9cclxuY2xhc3MgU3RyaW5nSGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGEgc3RyaW5nLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0IGZvciBpdHMgc3RyaW5neW5lc3MuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBvYmplY3QgaXMgYSBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc1N0cmluZyh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gZmFsc2UgOiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSBcIltvYmplY3QgU3RyaW5nXVwiO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYSBzdHJpbmcgdGhhdCBpcyBlbXB0eS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdCBmb3IgaXRzIG5vIGVtcHR5bmVzcy5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG9iamVjdCBpcyBhbiBlbXB0eSBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0VtcHR5KHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuICFTdHJpbmdIZWxwZXIuaXNTdHJpbmcodmFsdWUpIHx8IHZhbHVlLmxlbmd0aCA9PT0gMDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHN0cmluZyBhbGwgQVNDSUkgY2hhcmFjdGVycy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBzdHJpbmcgdG8gdGVzdCBpZiBpcyBpcyBBU0NJSS5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG9iamVjdCBpcyBhbGwgQVNDSUkuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0FzY2lpKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyBmYWxzZSA6IC9eW1xceDAwLVxceEZGXSokLy50ZXN0KHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRW5jb2RlIG5vbiBBU0NJSSBjaGFyYWN0ZXJzIHdpdGggY29udHJvbCBjaGFyYWN0ZXJzLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBzdHJpbmcgdmFsdWUgdG8gZXNjYXBlLlxyXG4gICAgICogQHJldHVybnMgVGhlIGVzY2FwZWQgdmVyc2lvbiBvZiB0aGUgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZW5jb2RlTm9uQVNDSUkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gU3RyaW5nSGVscGVyLmlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnJlcGxhY2UoL1tcXHUwMDdGLVxcdUZGRkZdL2csIChjaHIpID0+IGBcXFxcdSR7KGAwMDAwJHtjaHIuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNil9YCkuc3Vic3RyKC00KX1gKSA6IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRGVjb2RlIGNvbnRyb2wgY2hhcmFjdGVycyB0byBBU0NJSS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgZW5jb2RlZCBzdHJpbmcgdG8gY29udmVydCBiYWNrIHRvIEFTQ0lJLlxyXG4gICAgICogQHJldHVybnMgVGhlIGRlY29kZWQgdmVyc2lvbiBvZiB0aGUgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZGVjb2RlTm9uQVNDSUkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gU3RyaW5nSGVscGVyLmlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnJlcGxhY2UoL1xcXFx1KFtcXGRcXHddezR9KS9naSwgKG1hdGNoLCBncnApID0+IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoZ3JwLCAxNikpKSA6IHVuZGVmaW5lZDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlN0cmluZ0hlbHBlciA9IFN0cmluZ0hlbHBlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYzNSeWFXNW5TR1ZzY0dWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJobGJIQmxjbk12YzNSeWFXNW5TR1ZzY0dWeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVRzN1IwRkZSenRCUVVOSU8wbEJRMGs3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCVlR0UlFVTTNRaXhQUVVGUExFdEJRVXNzUzBGQlN5eEpRVUZKTEVsQlFVa3NTMEZCU3l4TFFVRkxMRk5CUVZNN1dVRkRlRU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExGTkJRVk1zUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExHbENRVUZwUWl4RFFVRkRPMGxCUXpsRkxFTkJRVU03U1VGRlJEczdPenRQUVVsSE8wbEJRMGtzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRlZPMUZCUXpWQ0xFOUJRVThzUTBGQlF5eFpRVUZaTEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFdEJRVXNzUTBGQlF5eE5RVUZOTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUXk5RUxFTkJRVU03U1VGRlJEczdPenRQUVVsSE8wbEJRMGtzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRmhPMUZCUXk5Q0xFOUJRVThzUzBGQlN5eExRVUZMTEVsQlFVa3NTVUZCU1N4TFFVRkxMRXRCUVVzc1UwRkJVenRaUVVONFF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGREwwTXNRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1kwRkJZeXhEUVVGRExFdEJRV0U3VVVGRGRFTXNUMEZCVHl4WlFVRlpMRU5CUVVNc1VVRkJVU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExHdENRVUZyUWl4RlFVRkZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNUMEZCVHl4SFFVRkhMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFRRVUZUTEVOQlFVTTdTVUZETDBvc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zWTBGQll5eERRVUZETEV0QlFXRTdVVUZEZEVNc1QwRkJUeXhaUVVGWkxFTkJRVU1zVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEd0Q1FVRnJRaXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RlFVRkZMRU5CUVVNc1RVRkJUU3hEUVVGRExGbEJRVmtzUTBGQlF5eFJRVUZSTEVOQlFVTXNSMEZCUnl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNVMEZCVXl4RFFVRkRPMGxCUTJoS0xFTkJRVU03UTBGRFNqdEJRUzlEUkN4dlEwRXJRME1pZlE9PSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgYSBjbGFzcyB3aGljaCBjYW4gcHJvdmlkZSB0aGUgdGltZS5cclxuICovXHJcbmNsYXNzIFRpbWVTZXJ2aWNlIHtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBzaW5jZSAxOTcwLzAxLzAxLlxyXG4gICAgICogQHJldHVybnMgTnVtYmVyIG9mIG1pbGxpc2Vjb25kcy5cclxuICAgICAqL1xyXG4gICAgbXNTaW5jZUVwb2NoKCkge1xyXG4gICAgICAgIHJldHVybiBEYXRlLm5vdygpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuVGltZVNlcnZpY2UgPSBUaW1lU2VydmljZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZEdsdFpWTmxjblpwWTJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12YzJWeWRtbGpaWE12ZEdsdFpWTmxjblpwWTJVdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVVZCT3p0SFFVVkhPMEZCUTBnN1NVRkRTVHM3TzA5QlIwYzdTVUZEU1N4WlFVRlpPMUZCUTJZc1QwRkJUeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdTVUZEZEVJc1EwRkJRenREUVVOS08wRkJVa1FzYTBOQlVVTWlmUT09IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3QgY3J5cHRvRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvci9jcnlwdG9FcnJvclwiKTtcclxuLyoqXHJcbiAqIFNoYTMgaW1wbGVtZW50YXRpb24uXHJcbiAqL1xyXG5jbGFzcyBTaGEzIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIFNIQTMuXHJcbiAgICAgKiBAcGFyYW0gYml0cyBUaGUgbnVtYmVyIG9mIGlucHV0IGJpdHMuXHJcbiAgICAgKiBAcGFyYW0gcGFkZGluZyBUaGUgcGFkZGluZyB0byB1c2UuXHJcbiAgICAgKiBAcGFyYW0gb3V0cHV0Qml0cyBUaGUgbnVtYmVyIG9mIG91dHB1dCBiaXRzLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihiaXRzLCBwYWRkaW5nLCBvdXRwdXRCaXRzKSB7XHJcbiAgICAgICAgdGhpcy5fcGFkZGluZyA9IHBhZGRpbmc7XHJcbiAgICAgICAgdGhpcy5fb3V0cHV0Qml0cyA9IG91dHB1dEJpdHM7XHJcbiAgICAgICAgdGhpcy5fYmxvY2tDb3VudCA9ICgxNjAwIC0gKGJpdHMgPDwgMSkpID4+IDU7XHJcbiAgICAgICAgdGhpcy5fYnl0ZUNvdW50ID0gdGhpcy5fYmxvY2tDb3VudCA8PCAyO1xyXG4gICAgICAgIHRoaXMuX291dHB1dEJsb2NrcyA9IG91dHB1dEJpdHMgPj4gNTtcclxuICAgICAgICB0aGlzLl9leHRyYUJ5dGVzID0gKG91dHB1dEJpdHMgJiAzMSkgPj4gMztcclxuICAgICAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJlc2V0IHRoZSBkaWdlc3QuXHJcbiAgICAgKi9cclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMuX3Jlc2V0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9ibG9jayA9IDA7XHJcbiAgICAgICAgdGhpcy5fc3RhcnQgPSAwO1xyXG4gICAgICAgIHRoaXMuX2Jsb2NrcyA9IG5ldyBVaW50MzJBcnJheSh0aGlzLl9ibG9ja0NvdW50ICsgMSk7XHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBuZXcgVWludDMyQXJyYXkoNTApO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgdGhlIGRpZ2VzdC5cclxuICAgICAqIEBwYXJhbSBpbnB1dCBBcnJheSBvZiBkYXRhIHRvIHVzZSBpbiB0aGUgdXBkYXRlLlxyXG4gICAgICovXHJcbiAgICB1cGRhdGUoaW5wdXQpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoaW5wdXQsIEFycmF5QnVmZmVyKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIklucHV0IGlzIG5vdCBvZiB0eXBlIEFycmF5QnVmZmVyXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gbmV3IFVpbnQ4QXJyYXkoaW5wdXQpO1xyXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IG1lc3NhZ2UubGVuZ3RoO1xyXG4gICAgICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICAgICAgbGV0IGk7XHJcbiAgICAgICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9yZXNldCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVzZXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2Nrc1swXSA9IHRoaXMuX2Jsb2NrO1xyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMTsgaSA8IHRoaXMuX2Jsb2NrQ291bnQgKyAxOyArK2kpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ibG9ja3NbaV0gPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAoaSA9IHRoaXMuX3N0YXJ0OyBpbmRleCA8IGxlbmd0aCAmJiBpIDwgdGhpcy5fYnl0ZUNvdW50OyArK2luZGV4KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ibG9ja3NbaSA+PiAyXSB8PSBtZXNzYWdlW2luZGV4XSA8PCBTaGEzLlNISUZUW2krKyAmIDNdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2xhc3RCeXRlSW5kZXggPSBpO1xyXG4gICAgICAgICAgICBpZiAoaSA+PSB0aGlzLl9ieXRlQ291bnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXJ0ID0gaSAtIHRoaXMuX2J5dGVDb3VudDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2NrID0gdGhpcy5fYmxvY2tzW3RoaXMuX2Jsb2NrQ291bnRdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMuX2Jsb2NrQ291bnQ7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlW2ldIF49IHRoaXMuX2Jsb2Nrc1tpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMua2VjY2FrUGVybXV0YXRpb24odGhpcy5fc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVzZXQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhcnQgPSBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBGaW5hbGl6ZSBhbmQgcmV0dXJuIHRoZSBoYXNoIGZvciB0aGUgZGlnZXN0LCB3aWxsIGFsc28gcmVzZXQgdGhlIHN0YXRlLlxyXG4gICAgICogQHJldHVybnMgQXJyYXkgYnVmZmVyIGNvbnRhaW5pbmcgdGhlIGRpZ2VzdC5cclxuICAgICAqL1xyXG4gICAgZGlnZXN0KCkge1xyXG4gICAgICAgIHRoaXMuZmluYWxpemUoKTtcclxuICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgbGV0IGogPSAwO1xyXG4gICAgICAgIGNvbnN0IGJ5dGVzID0gdGhpcy5fb3V0cHV0Qml0cyA+PiAzO1xyXG4gICAgICAgIGxldCBidWZmZXI7XHJcbiAgICAgICAgaWYgKHRoaXMuX2V4dHJhQnl0ZXMpIHtcclxuICAgICAgICAgICAgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKCh0aGlzLl9vdXRwdXRCbG9ja3MgKyAxKSA8PCAyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihieXRlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGFycmF5ID0gbmV3IFVpbnQzMkFycmF5KGJ1ZmZlcik7XHJcbiAgICAgICAgd2hpbGUgKGogPCB0aGlzLl9vdXRwdXRCbG9ja3MpIHtcclxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMuX2Jsb2NrQ291bnQgJiYgaiA8IHRoaXMuX291dHB1dEJsb2NrczsgKytpLCArK2opIHtcclxuICAgICAgICAgICAgICAgIGFycmF5W2pdID0gdGhpcy5fc3RhdGVbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2V4dHJhQnl0ZXMpIHtcclxuICAgICAgICAgICAgYXJyYXlbaV0gPSB0aGlzLl9zdGF0ZVtpXTtcclxuICAgICAgICAgICAgYnVmZmVyID0gYnVmZmVyLnNsaWNlKDAsIGJ5dGVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZXNldCgpO1xyXG4gICAgICAgIHJldHVybiBidWZmZXI7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGZpbmFsaXplKCkge1xyXG4gICAgICAgIGxldCBpID0gdGhpcy5fbGFzdEJ5dGVJbmRleDtcclxuICAgICAgICB0aGlzLl9ibG9ja3NbaSA+PiAyXSB8PSB0aGlzLl9wYWRkaW5nW2kgJiAzXTtcclxuICAgICAgICBpZiAodGhpcy5fbGFzdEJ5dGVJbmRleCA9PT0gdGhpcy5fYnl0ZUNvdW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Jsb2Nrc1swXSA9IHRoaXMuX2Jsb2Nrc1t0aGlzLl9ibG9ja0NvdW50XTtcclxuICAgICAgICAgICAgZm9yIChpID0gMTsgaSA8IHRoaXMuX2Jsb2NrQ291bnQgKyAxOyArK2kpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2Nrc1tpXSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fYmxvY2tzW3RoaXMuX2Jsb2NrQ291bnQgLSAxXSB8PSAweDgwMDAwMDAwO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLl9ibG9ja0NvdW50OyArK2kpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RhdGVbaV0gXj0gdGhpcy5fYmxvY2tzW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmtlY2Nha1Blcm11dGF0aW9uKHRoaXMuX3N0YXRlKTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAga2VjY2FrUGVybXV0YXRpb24ocykge1xyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uXHJcbiAgICAgICAgbGV0IGgsIGwsIG4sIGMwLCBjMSwgYzIsIGMzLCBjNCwgYzUsIGM2LCBjNywgYzgsIGM5LCBiMCwgYjEsIGIyLCBiMywgYjQsIGI1LCBiNiwgYjcsIGI4LCBiOSwgYjEwLCBiMTEsIGIxMiwgYjEzLCBiMTQsIGIxNSwgYjE2LCBiMTcsIGIxOCwgYjE5LCBiMjAsIGIyMSwgYjIyLCBiMjMsIGIyNCwgYjI1LCBiMjYsIGIyNywgYjI4LCBiMjksIGIzMCwgYjMxLCBiMzIsIGIzMywgYjM0LCBiMzUsIGIzNiwgYjM3LCBiMzgsIGIzOSwgYjQwLCBiNDEsIGI0MiwgYjQzLCBiNDQsIGI0NSwgYjQ2LCBiNDcsIGI0OCwgYjQ5O1xyXG4gICAgICAgIGZvciAobiA9IDA7IG4gPCA0ODsgbiArPSAyKSB7XHJcbiAgICAgICAgICAgIGMwID0gc1swXSBeIHNbMTBdIF4gc1syMF0gXiBzWzMwXSBeIHNbNDBdO1xyXG4gICAgICAgICAgICBjMSA9IHNbMV0gXiBzWzExXSBeIHNbMjFdIF4gc1szMV0gXiBzWzQxXTtcclxuICAgICAgICAgICAgYzIgPSBzWzJdIF4gc1sxMl0gXiBzWzIyXSBeIHNbMzJdIF4gc1s0Ml07XHJcbiAgICAgICAgICAgIGMzID0gc1szXSBeIHNbMTNdIF4gc1syM10gXiBzWzMzXSBeIHNbNDNdO1xyXG4gICAgICAgICAgICBjNCA9IHNbNF0gXiBzWzE0XSBeIHNbMjRdIF4gc1szNF0gXiBzWzQ0XTtcclxuICAgICAgICAgICAgYzUgPSBzWzVdIF4gc1sxNV0gXiBzWzI1XSBeIHNbMzVdIF4gc1s0NV07XHJcbiAgICAgICAgICAgIGM2ID0gc1s2XSBeIHNbMTZdIF4gc1syNl0gXiBzWzM2XSBeIHNbNDZdO1xyXG4gICAgICAgICAgICBjNyA9IHNbN10gXiBzWzE3XSBeIHNbMjddIF4gc1szN10gXiBzWzQ3XTtcclxuICAgICAgICAgICAgYzggPSBzWzhdIF4gc1sxOF0gXiBzWzI4XSBeIHNbMzhdIF4gc1s0OF07XHJcbiAgICAgICAgICAgIGM5ID0gc1s5XSBeIHNbMTldIF4gc1syOV0gXiBzWzM5XSBeIHNbNDldO1xyXG4gICAgICAgICAgICBoID0gYzggXiAoKGMyIDw8IDEpIHwgKGMzID4+PiAzMSkpO1xyXG4gICAgICAgICAgICBsID0gYzkgXiAoKGMzIDw8IDEpIHwgKGMyID4+PiAzMSkpO1xyXG4gICAgICAgICAgICBzWzBdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMV0gXj0gbDtcclxuICAgICAgICAgICAgc1sxMF0gXj0gaDtcclxuICAgICAgICAgICAgc1sxMV0gXj0gbDtcclxuICAgICAgICAgICAgc1syMF0gXj0gaDtcclxuICAgICAgICAgICAgc1syMV0gXj0gbDtcclxuICAgICAgICAgICAgc1szMF0gXj0gaDtcclxuICAgICAgICAgICAgc1szMV0gXj0gbDtcclxuICAgICAgICAgICAgc1s0MF0gXj0gaDtcclxuICAgICAgICAgICAgc1s0MV0gXj0gbDtcclxuICAgICAgICAgICAgaCA9IGMwIF4gKChjNCA8PCAxKSB8IChjNSA+Pj4gMzEpKTtcclxuICAgICAgICAgICAgbCA9IGMxIF4gKChjNSA8PCAxKSB8IChjNCA+Pj4gMzEpKTtcclxuICAgICAgICAgICAgc1syXSBePSBoO1xyXG4gICAgICAgICAgICBzWzNdIF49IGw7XHJcbiAgICAgICAgICAgIHNbMTJdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMTNdIF49IGw7XHJcbiAgICAgICAgICAgIHNbMjJdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMjNdIF49IGw7XHJcbiAgICAgICAgICAgIHNbMzJdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMzNdIF49IGw7XHJcbiAgICAgICAgICAgIHNbNDJdIF49IGg7XHJcbiAgICAgICAgICAgIHNbNDNdIF49IGw7XHJcbiAgICAgICAgICAgIGggPSBjMiBeICgoYzYgPDwgMSkgfCAoYzcgPj4+IDMxKSk7XHJcbiAgICAgICAgICAgIGwgPSBjMyBeICgoYzcgPDwgMSkgfCAoYzYgPj4+IDMxKSk7XHJcbiAgICAgICAgICAgIHNbNF0gXj0gaDtcclxuICAgICAgICAgICAgc1s1XSBePSBsO1xyXG4gICAgICAgICAgICBzWzE0XSBePSBoO1xyXG4gICAgICAgICAgICBzWzE1XSBePSBsO1xyXG4gICAgICAgICAgICBzWzI0XSBePSBoO1xyXG4gICAgICAgICAgICBzWzI1XSBePSBsO1xyXG4gICAgICAgICAgICBzWzM0XSBePSBoO1xyXG4gICAgICAgICAgICBzWzM1XSBePSBsO1xyXG4gICAgICAgICAgICBzWzQ0XSBePSBoO1xyXG4gICAgICAgICAgICBzWzQ1XSBePSBsO1xyXG4gICAgICAgICAgICBoID0gYzQgXiAoKGM4IDw8IDEpIHwgKGM5ID4+PiAzMSkpO1xyXG4gICAgICAgICAgICBsID0gYzUgXiAoKGM5IDw8IDEpIHwgKGM4ID4+PiAzMSkpO1xyXG4gICAgICAgICAgICBzWzZdIF49IGg7XHJcbiAgICAgICAgICAgIHNbN10gXj0gbDtcclxuICAgICAgICAgICAgc1sxNl0gXj0gaDtcclxuICAgICAgICAgICAgc1sxN10gXj0gbDtcclxuICAgICAgICAgICAgc1syNl0gXj0gaDtcclxuICAgICAgICAgICAgc1syN10gXj0gbDtcclxuICAgICAgICAgICAgc1szNl0gXj0gaDtcclxuICAgICAgICAgICAgc1szN10gXj0gbDtcclxuICAgICAgICAgICAgc1s0Nl0gXj0gaDtcclxuICAgICAgICAgICAgc1s0N10gXj0gbDtcclxuICAgICAgICAgICAgaCA9IGM2IF4gKChjMCA8PCAxKSB8IChjMSA+Pj4gMzEpKTtcclxuICAgICAgICAgICAgbCA9IGM3IF4gKChjMSA8PCAxKSB8IChjMCA+Pj4gMzEpKTtcclxuICAgICAgICAgICAgc1s4XSBePSBoO1xyXG4gICAgICAgICAgICBzWzldIF49IGw7XHJcbiAgICAgICAgICAgIHNbMThdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMTldIF49IGw7XHJcbiAgICAgICAgICAgIHNbMjhdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMjldIF49IGw7XHJcbiAgICAgICAgICAgIHNbMzhdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMzldIF49IGw7XHJcbiAgICAgICAgICAgIHNbNDhdIF49IGg7XHJcbiAgICAgICAgICAgIHNbNDldIF49IGw7XHJcbiAgICAgICAgICAgIGIwID0gc1swXTtcclxuICAgICAgICAgICAgYjEgPSBzWzFdO1xyXG4gICAgICAgICAgICBiMzIgPSAoc1sxMV0gPDwgNCkgfCAoc1sxMF0gPj4+IDI4KTtcclxuICAgICAgICAgICAgYjMzID0gKHNbMTBdIDw8IDQpIHwgKHNbMTFdID4+PiAyOCk7XHJcbiAgICAgICAgICAgIGIxNCA9IChzWzIwXSA8PCAzKSB8IChzWzIxXSA+Pj4gMjkpO1xyXG4gICAgICAgICAgICBiMTUgPSAoc1syMV0gPDwgMykgfCAoc1syMF0gPj4+IDI5KTtcclxuICAgICAgICAgICAgYjQ2ID0gKHNbMzFdIDw8IDkpIHwgKHNbMzBdID4+PiAyMyk7XHJcbiAgICAgICAgICAgIGI0NyA9IChzWzMwXSA8PCA5KSB8IChzWzMxXSA+Pj4gMjMpO1xyXG4gICAgICAgICAgICBiMjggPSAoc1s0MF0gPDwgMTgpIHwgKHNbNDFdID4+PiAxNCk7XHJcbiAgICAgICAgICAgIGIyOSA9IChzWzQxXSA8PCAxOCkgfCAoc1s0MF0gPj4+IDE0KTtcclxuICAgICAgICAgICAgYjIwID0gKHNbMl0gPDwgMSkgfCAoc1szXSA+Pj4gMzEpO1xyXG4gICAgICAgICAgICBiMjEgPSAoc1szXSA8PCAxKSB8IChzWzJdID4+PiAzMSk7XHJcbiAgICAgICAgICAgIGIyID0gKHNbMTNdIDw8IDEyKSB8IChzWzEyXSA+Pj4gMjApO1xyXG4gICAgICAgICAgICBiMyA9IChzWzEyXSA8PCAxMikgfCAoc1sxM10gPj4+IDIwKTtcclxuICAgICAgICAgICAgYjM0ID0gKHNbMjJdIDw8IDEwKSB8IChzWzIzXSA+Pj4gMjIpO1xyXG4gICAgICAgICAgICBiMzUgPSAoc1syM10gPDwgMTApIHwgKHNbMjJdID4+PiAyMik7XHJcbiAgICAgICAgICAgIGIxNiA9IChzWzMzXSA8PCAxMykgfCAoc1szMl0gPj4+IDE5KTtcclxuICAgICAgICAgICAgYjE3ID0gKHNbMzJdIDw8IDEzKSB8IChzWzMzXSA+Pj4gMTkpO1xyXG4gICAgICAgICAgICBiNDggPSAoc1s0Ml0gPDwgMikgfCAoc1s0M10gPj4+IDMwKTtcclxuICAgICAgICAgICAgYjQ5ID0gKHNbNDNdIDw8IDIpIHwgKHNbNDJdID4+PiAzMCk7XHJcbiAgICAgICAgICAgIGI0MCA9IChzWzVdIDw8IDMwKSB8IChzWzRdID4+PiAyKTtcclxuICAgICAgICAgICAgYjQxID0gKHNbNF0gPDwgMzApIHwgKHNbNV0gPj4+IDIpO1xyXG4gICAgICAgICAgICBiMjIgPSAoc1sxNF0gPDwgNikgfCAoc1sxNV0gPj4+IDI2KTtcclxuICAgICAgICAgICAgYjIzID0gKHNbMTVdIDw8IDYpIHwgKHNbMTRdID4+PiAyNik7XHJcbiAgICAgICAgICAgIGI0ID0gKHNbMjVdIDw8IDExKSB8IChzWzI0XSA+Pj4gMjEpO1xyXG4gICAgICAgICAgICBiNSA9IChzWzI0XSA8PCAxMSkgfCAoc1syNV0gPj4+IDIxKTtcclxuICAgICAgICAgICAgYjM2ID0gKHNbMzRdIDw8IDE1KSB8IChzWzM1XSA+Pj4gMTcpO1xyXG4gICAgICAgICAgICBiMzcgPSAoc1szNV0gPDwgMTUpIHwgKHNbMzRdID4+PiAxNyk7XHJcbiAgICAgICAgICAgIGIxOCA9IChzWzQ1XSA8PCAyOSkgfCAoc1s0NF0gPj4+IDMpO1xyXG4gICAgICAgICAgICBiMTkgPSAoc1s0NF0gPDwgMjkpIHwgKHNbNDVdID4+PiAzKTtcclxuICAgICAgICAgICAgYjEwID0gKHNbNl0gPDwgMjgpIHwgKHNbN10gPj4+IDQpO1xyXG4gICAgICAgICAgICBiMTEgPSAoc1s3XSA8PCAyOCkgfCAoc1s2XSA+Pj4gNCk7XHJcbiAgICAgICAgICAgIGI0MiA9IChzWzE3XSA8PCAyMykgfCAoc1sxNl0gPj4+IDkpO1xyXG4gICAgICAgICAgICBiNDMgPSAoc1sxNl0gPDwgMjMpIHwgKHNbMTddID4+PiA5KTtcclxuICAgICAgICAgICAgYjI0ID0gKHNbMjZdIDw8IDI1KSB8IChzWzI3XSA+Pj4gNyk7XHJcbiAgICAgICAgICAgIGIyNSA9IChzWzI3XSA8PCAyNSkgfCAoc1syNl0gPj4+IDcpO1xyXG4gICAgICAgICAgICBiNiA9IChzWzM2XSA8PCAyMSkgfCAoc1szN10gPj4+IDExKTtcclxuICAgICAgICAgICAgYjcgPSAoc1szN10gPDwgMjEpIHwgKHNbMzZdID4+PiAxMSk7XHJcbiAgICAgICAgICAgIGIzOCA9IChzWzQ3XSA8PCAyNCkgfCAoc1s0Nl0gPj4+IDgpO1xyXG4gICAgICAgICAgICBiMzkgPSAoc1s0Nl0gPDwgMjQpIHwgKHNbNDddID4+PiA4KTtcclxuICAgICAgICAgICAgYjMwID0gKHNbOF0gPDwgMjcpIHwgKHNbOV0gPj4+IDUpO1xyXG4gICAgICAgICAgICBiMzEgPSAoc1s5XSA8PCAyNykgfCAoc1s4XSA+Pj4gNSk7XHJcbiAgICAgICAgICAgIGIxMiA9IChzWzE4XSA8PCAyMCkgfCAoc1sxOV0gPj4+IDEyKTtcclxuICAgICAgICAgICAgYjEzID0gKHNbMTldIDw8IDIwKSB8IChzWzE4XSA+Pj4gMTIpO1xyXG4gICAgICAgICAgICBiNDQgPSAoc1syOV0gPDwgNykgfCAoc1syOF0gPj4+IDI1KTtcclxuICAgICAgICAgICAgYjQ1ID0gKHNbMjhdIDw8IDcpIHwgKHNbMjldID4+PiAyNSk7XHJcbiAgICAgICAgICAgIGIyNiA9IChzWzM4XSA8PCA4KSB8IChzWzM5XSA+Pj4gMjQpO1xyXG4gICAgICAgICAgICBiMjcgPSAoc1szOV0gPDwgOCkgfCAoc1szOF0gPj4+IDI0KTtcclxuICAgICAgICAgICAgYjggPSAoc1s0OF0gPDwgMTQpIHwgKHNbNDldID4+PiAxOCk7XHJcbiAgICAgICAgICAgIGI5ID0gKHNbNDldIDw8IDE0KSB8IChzWzQ4XSA+Pj4gMTgpO1xyXG4gICAgICAgICAgICBzWzBdID0gYjAgXiAofmIyICYgYjQpO1xyXG4gICAgICAgICAgICBzWzFdID0gYjEgXiAofmIzICYgYjUpO1xyXG4gICAgICAgICAgICBzWzEwXSA9IGIxMCBeICh+YjEyICYgYjE0KTtcclxuICAgICAgICAgICAgc1sxMV0gPSBiMTEgXiAofmIxMyAmIGIxNSk7XHJcbiAgICAgICAgICAgIHNbMjBdID0gYjIwIF4gKH5iMjIgJiBiMjQpO1xyXG4gICAgICAgICAgICBzWzIxXSA9IGIyMSBeICh+YjIzICYgYjI1KTtcclxuICAgICAgICAgICAgc1szMF0gPSBiMzAgXiAofmIzMiAmIGIzNCk7XHJcbiAgICAgICAgICAgIHNbMzFdID0gYjMxIF4gKH5iMzMgJiBiMzUpO1xyXG4gICAgICAgICAgICBzWzQwXSA9IGI0MCBeICh+YjQyICYgYjQ0KTtcclxuICAgICAgICAgICAgc1s0MV0gPSBiNDEgXiAofmI0MyAmIGI0NSk7XHJcbiAgICAgICAgICAgIHNbMl0gPSBiMiBeICh+YjQgJiBiNik7XHJcbiAgICAgICAgICAgIHNbM10gPSBiMyBeICh+YjUgJiBiNyk7XHJcbiAgICAgICAgICAgIHNbMTJdID0gYjEyIF4gKH5iMTQgJiBiMTYpO1xyXG4gICAgICAgICAgICBzWzEzXSA9IGIxMyBeICh+YjE1ICYgYjE3KTtcclxuICAgICAgICAgICAgc1syMl0gPSBiMjIgXiAofmIyNCAmIGIyNik7XHJcbiAgICAgICAgICAgIHNbMjNdID0gYjIzIF4gKH5iMjUgJiBiMjcpO1xyXG4gICAgICAgICAgICBzWzMyXSA9IGIzMiBeICh+YjM0ICYgYjM2KTtcclxuICAgICAgICAgICAgc1szM10gPSBiMzMgXiAofmIzNSAmIGIzNyk7XHJcbiAgICAgICAgICAgIHNbNDJdID0gYjQyIF4gKH5iNDQgJiBiNDYpO1xyXG4gICAgICAgICAgICBzWzQzXSA9IGI0MyBeICh+YjQ1ICYgYjQ3KTtcclxuICAgICAgICAgICAgc1s0XSA9IGI0IF4gKH5iNiAmIGI4KTtcclxuICAgICAgICAgICAgc1s1XSA9IGI1IF4gKH5iNyAmIGI5KTtcclxuICAgICAgICAgICAgc1sxNF0gPSBiMTQgXiAofmIxNiAmIGIxOCk7XHJcbiAgICAgICAgICAgIHNbMTVdID0gYjE1IF4gKH5iMTcgJiBiMTkpO1xyXG4gICAgICAgICAgICBzWzI0XSA9IGIyNCBeICh+YjI2ICYgYjI4KTtcclxuICAgICAgICAgICAgc1syNV0gPSBiMjUgXiAofmIyNyAmIGIyOSk7XHJcbiAgICAgICAgICAgIHNbMzRdID0gYjM0IF4gKH5iMzYgJiBiMzgpO1xyXG4gICAgICAgICAgICBzWzM1XSA9IGIzNSBeICh+YjM3ICYgYjM5KTtcclxuICAgICAgICAgICAgc1s0NF0gPSBiNDQgXiAofmI0NiAmIGI0OCk7XHJcbiAgICAgICAgICAgIHNbNDVdID0gYjQ1IF4gKH5iNDcgJiBiNDkpO1xyXG4gICAgICAgICAgICBzWzZdID0gYjYgXiAofmI4ICYgYjApO1xyXG4gICAgICAgICAgICBzWzddID0gYjcgXiAofmI5ICYgYjEpO1xyXG4gICAgICAgICAgICBzWzE2XSA9IGIxNiBeICh+YjE4ICYgYjEwKTtcclxuICAgICAgICAgICAgc1sxN10gPSBiMTcgXiAofmIxOSAmIGIxMSk7XHJcbiAgICAgICAgICAgIHNbMjZdID0gYjI2IF4gKH5iMjggJiBiMjApO1xyXG4gICAgICAgICAgICBzWzI3XSA9IGIyNyBeICh+YjI5ICYgYjIxKTtcclxuICAgICAgICAgICAgc1szNl0gPSBiMzYgXiAofmIzOCAmIGIzMCk7XHJcbiAgICAgICAgICAgIHNbMzddID0gYjM3IF4gKH5iMzkgJiBiMzEpO1xyXG4gICAgICAgICAgICBzWzQ2XSA9IGI0NiBeICh+YjQ4ICYgYjQwKTtcclxuICAgICAgICAgICAgc1s0N10gPSBiNDcgXiAofmI0OSAmIGI0MSk7XHJcbiAgICAgICAgICAgIHNbOF0gPSBiOCBeICh+YjAgJiBiMik7XHJcbiAgICAgICAgICAgIHNbOV0gPSBiOSBeICh+YjEgJiBiMyk7XHJcbiAgICAgICAgICAgIHNbMThdID0gYjE4IF4gKH5iMTAgJiBiMTIpO1xyXG4gICAgICAgICAgICBzWzE5XSA9IGIxOSBeICh+YjExICYgYjEzKTtcclxuICAgICAgICAgICAgc1syOF0gPSBiMjggXiAofmIyMCAmIGIyMik7XHJcbiAgICAgICAgICAgIHNbMjldID0gYjI5IF4gKH5iMjEgJiBiMjMpO1xyXG4gICAgICAgICAgICBzWzM4XSA9IGIzOCBeICh+YjMwICYgYjMyKTtcclxuICAgICAgICAgICAgc1szOV0gPSBiMzkgXiAofmIzMSAmIGIzMyk7XHJcbiAgICAgICAgICAgIHNbNDhdID0gYjQ4IF4gKH5iNDAgJiBiNDIpO1xyXG4gICAgICAgICAgICBzWzQ5XSA9IGI0OSBeICh+YjQxICYgYjQzKTtcclxuICAgICAgICAgICAgc1swXSBePSBTaGEzLlJPVU5EX0NPTlNUQU5UU1tuXTtcclxuICAgICAgICAgICAgc1sxXSBePSBTaGEzLlJPVU5EX0NPTlNUQU5UU1tuICsgMV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8qIFBhZGRpbmcgdG8gdXNlIGZvciBLZWNjYWsgKi9cclxuU2hhMy5LRUNDQUtfUEFERElORyA9IG5ldyBVaW50MzJBcnJheShbMSwgMjU2LCA2NTUzNiwgMTY3NzcyMTZdKTtcclxuLyogQGludGVybmFsICovXHJcblNoYTMuU0hJRlQgPSBuZXcgVWludDhBcnJheShbMCwgOCwgMTYsIDI0XSk7XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5TaGEzLlJPVU5EX0NPTlNUQU5UUyA9IG5ldyBVaW50MzJBcnJheShbMSwgMCwgMzI4OTgsIDAsIDMyOTA2LCAyMTQ3NDgzNjQ4LCAyMTQ3NTE2NDE2LCAyMTQ3NDgzNjQ4LCAzMjkwNywgMCwgMjE0NzQ4MzY0OSxcclxuICAgIDAsIDIxNDc1MTY1NDUsIDIxNDc0ODM2NDgsIDMyNzc3LCAyMTQ3NDgzNjQ4LCAxMzgsIDAsIDEzNiwgMCwgMjE0NzUxNjQyNSwgMCxcclxuICAgIDIxNDc0ODM2NTgsIDAsIDIxNDc1MTY1NTUsIDAsIDEzOSwgMjE0NzQ4MzY0OCwgMzI5MDUsIDIxNDc0ODM2NDgsIDMyNzcxLFxyXG4gICAgMjE0NzQ4MzY0OCwgMzI3NzAsIDIxNDc0ODM2NDgsIDEyOCwgMjE0NzQ4MzY0OCwgMzI3NzgsIDAsIDIxNDc0ODM2NTgsIDIxNDc0ODM2NDgsXHJcbiAgICAyMTQ3NTE2NTQ1LCAyMTQ3NDgzNjQ4LCAzMjg5NiwgMjE0NzQ4MzY0OCwgMjE0NzQ4MzY0OSwgMCwgMjE0NzUxNjQyNCwgMjE0NzQ4MzY0OF0pO1xyXG5leHBvcnRzLlNoYTMgPSBTaGEzO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljMmhoTXk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlrYVdkbGMzUnpMM05vWVRNdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTERSRlFVRjVSVHRCUVVONlJTeHpSRUZCYlVRN1FVRkZia1E3TzBkQlJVYzdRVUZEU0R0SlFYRkRTVHM3T3pzN1QwRkxSenRKUVVOSUxGbEJRVmtzU1VGQldTeEZRVUZGTEU5QlFXOUNMRVZCUVVVc1ZVRkJhMEk3VVVGRE9VUXNTVUZCU1N4RFFVRkRMRkZCUVZFc1IwRkJSeXhQUVVGUExFTkJRVU03VVVGRGVFSXNTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhWUVVGVkxFTkJRVU03VVVGRE9VSXNTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhEUVVGRExFbEJRVWtzUjBGQlJ5eERRVUZETEVsQlFVa3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU0zUXl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hIUVVGSExFbEJRVWtzUTBGQlF5eFhRVUZYTEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUTNoRExFbEJRVWtzUTBGQlF5eGhRVUZoTEVkQlFVY3NWVUZCVlN4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVOeVF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4SFFVRkhMRU5CUVVNc1ZVRkJWU3hIUVVGSExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVVXhReXhKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTTdTVUZEYWtJc1EwRkJRenRKUVVWRU96dFBRVVZITzBsQlEwa3NTMEZCU3p0UlFVTlNMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzU1VGQlNTeERRVUZETzFGQlEyNUNMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEyaENMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEyaENMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzU1VGQlNTeFhRVUZYTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU55UkN4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFbEJRVWtzVjBGQlZ5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUTNSRExFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hOUVVGTkxFTkJRVU1zUzBGQmEwSTdVVUZETlVJc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1JVRkJSU3hYUVVGWExFTkJRVU1zUlVGQlJUdFpRVU14UXl4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eHJRMEZCYTBNc1EwRkJReXhEUVVGRE8xTkJRemRFTzFGQlEwUXNUVUZCVFN4UFFVRlBMRWRCUVdVc1NVRkJTU3hWUVVGVkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVVUZEYkVRc1RVRkJUU3hOUVVGTkxFZEJRVWNzVDBGQlR5eERRVUZETEUxQlFVMHNRMEZCUXp0UlFVTTVRaXhKUVVGSkxFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEWkN4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVWT0xFOUJRVThzUzBGQlN5eEhRVUZITEUxQlFVMHNSVUZCUlR0WlFVTnVRaXhKUVVGSkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVTdaMEpCUTJJc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eExRVUZMTEVOQlFVTTdaMEpCUTNCQ0xFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF6dG5Ra0ZET1VJc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhIUVVGSExFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlR0dlFrRkRka01zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03YVVKQlEzWkNPMkZCUTBvN1dVRkRSQ3hMUVVGTExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRXRCUVVzc1IwRkJSeXhOUVVGTkxFbEJRVWtzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4VlFVRlZMRVZCUVVVc1JVRkJSU3hMUVVGTExFVkJRVVU3WjBKQlEyeEZMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SlFVRkpMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlEycEZPMWxCUTBRc1NVRkJTU3hEUVVGRExHTkJRV01zUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZEZUVJc1NVRkJTU3hEUVVGRExFbEJRVWtzU1VGQlNTeERRVUZETEZWQlFWVXNSVUZCUlR0blFrRkRkRUlzU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF6dG5Ra0ZEYkVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF6dG5Ra0ZETjBNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTzI5Q1FVTnVReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdhVUpCUTNKRE8yZENRVU5FTEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1owSkJRM0JETEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRE8yRkJRM1JDTzJsQ1FVRk5PMmRDUVVOSUxFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRPMkZCUTI1Q08xTkJRMG83U1VGRFRDeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVFVGQlRUdFJRVU5VTEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRSUVVWb1FpeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRWaXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEVml4TlFVRk5MRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTndReXhKUVVGSkxFMUJRVTBzUTBGQlF6dFJRVU5ZTEVsQlFVa3NTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSVHRaUVVOc1FpeE5RVUZOTEVkQlFVY3NTVUZCU1N4WFFVRlhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zWVVGQllTeEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRek5FTzJGQlFVMDdXVUZEU0N4TlFVRk5MRWRCUVVjc1NVRkJTU3hYUVVGWExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVMEZEYmtNN1VVRkRSQ3hOUVVGTkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEZkQlFWY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVOMFF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1lVRkJZU3hGUVVGRk8xbEJRek5DTEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEZkQlFWY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExHRkJRV0VzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSVHRuUWtGRGJFVXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1lVRkROMEk3VTBGRFNqdFJRVU5FTEVsQlFVa3NTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSVHRaUVVOc1FpeExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTXhRaXhOUVVGTkxFZEJRVWNzVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03VTBGRGJrTTdVVUZEUkN4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU03VVVGRllpeFBRVUZQTEUxQlFVMHNRMEZCUXp0SlFVTnNRaXhEUVVGRE8wbEJSVVFzWlVGQlpUdEpRVU5RTEZGQlFWRTdVVUZEV2l4SlFVRkpMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETzFGQlF6VkNMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUXpkRExFbEJRVWtzU1VGQlNTeERRVUZETEdOQlFXTXNTMEZCU3l4SlFVRkpMRU5CUVVNc1ZVRkJWU3hGUVVGRk8xbEJRM3BETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU03V1VGRGFrUXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNWMEZCVnl4SFFVRkhMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJUdG5Ra0ZEZGtNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1lVRkRka0k3VTBGRFNqdFJRVU5FTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4VlFVRlZMRU5CUVVNN1VVRkRha1FzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZPMWxCUTI1RExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTnlRenRSUVVORUxFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdTVUZEZUVNc1EwRkJRenRKUVVWRUxHVkJRV1U3U1VGRFVDeHBRa0ZCYVVJc1EwRkJReXhEUVVGak8xRkJRM0JETEhkRVFVRjNSRHRSUVVONFJDeEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGREwwTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlF6bEZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGRE9VVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRE8xRkJRMjVHTEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUlVGQlJTeEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVN1dVRkRlRUlzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRE1VTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdXVUZETVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRNVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRE1VTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdXVUZETVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRNVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRE1VTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdXVUZETVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRNVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRk1VTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYmtNc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRia01zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOV0xFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRWaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFnc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTllMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEV0N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFdDeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMWdzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOWUxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMjVETEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyNURMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEVml4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlExWXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFdDeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMWdzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRXQ3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFnc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTllMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEV0N4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnVReXhEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOdVF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMVlzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOV0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRXQ3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFnc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTllMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEV0N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFdDeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMWdzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGJrTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYmtNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTldMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEVml4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFdDeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMWdzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRXQ3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFnc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTllMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTI1RExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMjVETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFZpeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMVlzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRXQ3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFnc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTllMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEV0N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRldDeEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMVlzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOV0xFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU53UXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRjRU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzQkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOd1F5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEY0VNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRM0JETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTnlReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGNrTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTJ4RExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU5zUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRjRU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzQkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOeVF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEY2tNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRM0pETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTnlReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGNFTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNCRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5zUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRiRU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzQkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOd1F5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEY0VNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRM0JETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTnlReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGNrTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNCRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU53UXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRiRU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyeERMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOd1F5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEY0VNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM0JETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTndReXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGNFTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNCRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU53UXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRjRU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyeERMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOc1F5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEY2tNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRM0pETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTndReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGNFTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNCRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU53UXl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRjRU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlJYQkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU4yUWl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGRrSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRek5DTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVNelFpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRNMElzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUXpOQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTXpRaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZETTBJc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF6TkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU16UWl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGRrSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRM1pDTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVNelFpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRNMElzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUXpOQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTXpRaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZETTBJc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF6TkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU16UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE0wSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRM1pDTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOMlFpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRNMElzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUXpOQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTXpRaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZETTBJc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF6TkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU16UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE0wSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRek5DTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOMlFpeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRka0lzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUXpOQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTXpRaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZETTBJc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF6TkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU16UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE0wSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRek5DTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVNelFpeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRka0lzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNaQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTXpRaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZETTBJc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF6TkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU16UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE0wSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRek5DTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVNelFpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkZNMElzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhsUVVGbExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYUVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4bFFVRmxMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFOQlEzWkRPMGxCUTB3c1EwRkJRenM3UVVGb1ZrUXNLMEpCUVN0Q08wRkJRMUlzYlVKQlFXTXNSMEZCWjBJc1NVRkJTU3hYUVVGWExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRXRCUVVzc1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETzBGQlEyaEhMR1ZCUVdVN1FVRkRVeXhWUVVGTExFZEJRV1VzU1VGQlNTeFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUXpORkxHVkJRV1U3UVVGRFV5eHZRa0ZCWlN4SFFVRm5RaXhKUVVGSkxGZEJRVmNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1MwRkJTeXhGUVVGRkxFTkJRVU1zUlVGQlJTeExRVUZMTEVWQlFVVXNWVUZCVlN4RlFVRkZMRlZCUVZVc1JVRkJSU3hWUVVGVkxFVkJRVVVzUzBGQlN5eEZRVUZGTEVOQlFVTXNSVUZCUlN4VlFVRlZPMGxCUTI1S0xFTkJRVU1zUlVGQlJTeFZRVUZWTEVWQlFVVXNWVUZCVlN4RlFVRkZMRXRCUVVzc1JVRkJSU3hWUVVGVkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxGVkJRVlVzUlVGQlJTeERRVUZETzBsQlF6TkZMRlZCUVZVc1JVRkJSU3hEUVVGRExFVkJRVVVzVlVGQlZTeEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1ZVRkJWU3hGUVVGRkxFdEJRVXNzUlVGQlJTeFZRVUZWTEVWQlFVVXNTMEZCU3p0SlFVTjJSU3hWUVVGVkxFVkJRVVVzUzBGQlN5eEZRVUZGTEZWQlFWVXNSVUZCUlN4SFFVRkhMRVZCUVVVc1ZVRkJWU3hGUVVGRkxFdEJRVXNzUlVGQlJTeERRVUZETEVWQlFVVXNWVUZCVlN4RlFVRkZMRlZCUVZVN1NVRkRhRVlzVlVGQlZTeEZRVUZGTEZWQlFWVXNSVUZCUlN4TFFVRkxMRVZCUVVVc1ZVRkJWU3hGUVVGRkxGVkJRVlVzUlVGQlJTeERRVUZETEVWQlFVVXNWVUZCVlN4RlFVRkZMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU03UVVGV00wWXNiMEpCYTFaREluMD0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGNvcmVFcnJvcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2Vycm9yL2NvcmVFcnJvclwiKTtcclxuLyoqXHJcbiAqIEEgY3J5cHRvIGltcGxlbWVudGF0aW9uIG9mIGFuIGVycm9yLlxyXG4gKi9cclxuY2xhc3MgQ3J5cHRvRXJyb3IgZXh0ZW5kcyBjb3JlRXJyb3JfMS5Db3JlRXJyb3Ige1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQ3J5cHRvRXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSBUaGUgbWVzc2FnZSBmb3IgdGhlIGVycm9yLlxyXG4gICAgICogQHBhcmFtIGFkZGl0aW9uYWwgQWRkaXRpb25hbCBkZXRhaWxzIGFib3V0IHRoZSBlcnJvci5cclxuICAgICAqIEBwYXJhbSBpbm5lckVycm9yIEFkZCBpbmZvcm1hdGlvbiBmcm9tIGlubmVyIGVycm9yIGlmIHRoZXJlIHdhcyBvbmUuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIGFkZGl0aW9uYWwsIGlubmVyRXJyb3IpIHtcclxuICAgICAgICBzdXBlcihtZXNzYWdlLCBhZGRpdGlvbmFsLCBpbm5lckVycm9yKTtcclxuICAgICAgICB0aGlzLmRvbWFpbiA9IFwiQ3J5cHRvXCI7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5DcnlwdG9FcnJvciA9IENyeXB0b0Vycm9yO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZM0o1Y0hSdlJYSnliM0l1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZaWEp5YjNJdlkzSjVjSFJ2UlhKeWIzSXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQkxHOUZRVUZwUlR0QlFVVnFSVHM3UjBGRlJ6dEJRVU5JTEdsQ1FVRjVRaXhUUVVGUkxIRkNRVUZUTzBsQlEzUkRPenM3T3p0UFFVdEhPMGxCUTBnc1dVRkJXU3hQUVVGbExFVkJRVVVzVlVGQmEwTXNSVUZCUlN4VlFVRnJRanRSUVVNdlJTeExRVUZMTEVOQlFVTXNUMEZCVHl4RlFVRkZMRlZCUVZVc1JVRkJSU3hWUVVGVkxFTkJRVU1zUTBGQlF6dFJRVU4yUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExGRkJRVkVzUTBGQlF6dEpRVU16UWl4RFFVRkRPME5CUTBvN1FVRllSQ3hyUTBGWFF5SjkiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGZhY3RvcnlCYXNlXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvZmFjdG9yaWVzL2ZhY3RvcnlCYXNlXCIpO1xyXG5jb25zdCBjdXJsXzEgPSByZXF1aXJlKFwiLi4vc3Bvbmdlcy9jdXJsXCIpO1xyXG5jb25zdCBrZXJsXzEgPSByZXF1aXJlKFwiLi4vc3Bvbmdlcy9rZXJsXCIpO1xyXG4vKipcclxuICogRmFjdG9yeSB0byBnZW5lcmF0ZSBzcG9uZ2VzLlxyXG4gKi9cclxuY2xhc3MgU3BvbmdlRmFjdG9yeSBleHRlbmRzIGZhY3RvcnlCYXNlXzEuRmFjdG9yeUJhc2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiBEb24ndCBhbGxvdyBtYW51YWwgY29uc3RydWN0aW9uIG9mIHRoZSBmYWN0b3J5LlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgaW5zdGFuY2Ugb2YgdGhlIGZhY3RvcnkuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgZmFjdG9yeSBpbnN0YW5jZS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGluc3RhbmNlKCkge1xyXG4gICAgICAgIGlmICghU3BvbmdlRmFjdG9yeS5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgU3BvbmdlRmFjdG9yeS5faW5zdGFuY2UgPSBuZXcgU3BvbmdlRmFjdG9yeSgpO1xyXG4gICAgICAgICAgICBTcG9uZ2VGYWN0b3J5Ll9pbnN0YW5jZS5yZWdpc3RlcihcImN1cmxcIiwgKC4uLmFyZ3MpID0+IG5ldyBjdXJsXzEuQ3VybCguLi5hcmdzKSk7XHJcbiAgICAgICAgICAgIFNwb25nZUZhY3RvcnkuX2luc3RhbmNlLnJlZ2lzdGVyKFwiY3VybDgxXCIsICguLi5hcmdzKSA9PiBuZXcgY3VybF8xLkN1cmwoODEpKTtcclxuICAgICAgICAgICAgU3BvbmdlRmFjdG9yeS5faW5zdGFuY2UucmVnaXN0ZXIoXCJjdXJsMjdcIiwgKC4uLmFyZ3MpID0+IG5ldyBjdXJsXzEuQ3VybCgyNykpO1xyXG4gICAgICAgICAgICBTcG9uZ2VGYWN0b3J5Ll9pbnN0YW5jZS5yZWdpc3RlcihcImtlcmxcIiwgKC4uLmFyZ3MpID0+IG5ldyBrZXJsXzEuS2VybCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFNwb25nZUZhY3RvcnkuX2luc3RhbmNlO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBnZXRJbnN0YW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gU3BvbmdlRmFjdG9yeS5pbnN0YW5jZSgpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuU3BvbmdlRmFjdG9yeSA9IFNwb25nZUZhY3Rvcnk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWMzQnZibWRsUm1GamRHOXllUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OW1ZV04wYjNKcFpYTXZjM0J2Ym1kbFJtRmpkRzl5ZVM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUVzTkVWQlFYbEZPMEZCUlhwRkxEQkRRVUYxUXp0QlFVTjJReXd3UTBGQmRVTTdRVUZGZGtNN08wZEJSVWM3UVVGRFNDeHRRa0ZCTWtJc1UwRkJVU3g1UWtGQmIwSTdTVUZKYmtRN096dFBRVWRITzBsQlEwZzdVVUZEU1N4TFFVRkxMRVZCUVVVc1EwRkJRenRKUVVOYUxFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hOUVVGTkxFTkJRVU1zVVVGQlVUdFJRVU5zUWl4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExGTkJRVk1zUlVGQlJUdFpRVU14UWl4aFFVRmhMRU5CUVVNc1UwRkJVeXhIUVVGSExFbEJRVWtzWVVGQllTeEZRVUZGTEVOQlFVTTdXVUZET1VNc1lVRkJZU3hEUVVGRExGTkJRVk1zUTBGQlF5eFJRVUZSTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1IwRkJSeXhKUVVGSkxFVkJRVVVzUlVGQlJTeERRVUZETEVsQlFVa3NWMEZCU1N4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU42UlN4aFFVRmhMRU5CUVVNc1UwRkJVeXhEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1JVRkJSU3hGUVVGRkxFTkJRVU1zU1VGQlNTeFhRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOMFJTeGhRVUZoTEVOQlFVTXNVMEZCVXl4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NSVUZCUlN4RlFVRkZMRU5CUVVNc1NVRkJTU3hYUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjBSU3hoUVVGaExFTkJRVU1zVTBGQlV5eERRVUZETEZGQlFWRXNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUlVGQlJTeEZRVUZGTEVOQlFVTXNTVUZCU1N4WFFVRkpMRVZCUVVVc1EwRkJReXhEUVVGRE8xTkJRM0pGTzFGQlEwUXNUMEZCVHl4aFFVRmhMRU5CUVVNc1UwRkJVeXhEUVVGRE8wbEJRMjVETEVOQlFVTTdTVUZGUkN4bFFVRmxPMGxCUTB3c1YwRkJWenRSUVVOcVFpeFBRVUZQTEdGQlFXRXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRKUVVOd1F5eERRVUZETzBOQlEwbzdRVUV2UWtRc2MwTkJLMEpESW4wPSIsInZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgbnVtYmVySGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIik7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBiaWdfaW50ZWdlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJiaWctaW50ZWdlclwiKSk7XHJcbmNvbnN0IGNyeXB0b0Vycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvY3J5cHRvRXJyb3JcIik7XHJcbi8qKlxyXG4gKiBIZWxwZXIgY2xhc3MgdG8gY29udmVydCBiZXR3ZWVuIEJpZ0ludGVnZXIgYW5kIG90aGVyIHR5cGVzLlxyXG4gKiBDb252ZXJ0ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vaW90YWxlZGdlci9pcmkvYmxvYi9kZXYvc3JjL21haW4vamF2YS9jb20vaW90YS9pcmkvaGFzaC9LZXJsLmphdmFcclxuICovXHJcbmNsYXNzIEJpZ0ludGVnZXJIZWxwZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IHRyaXRzIHRvIGEgYmlnSW50ZWdlci5cclxuICAgICAqIEBwYXJhbSB0cml0cyBUaGUgdHJpdHMgdG8gY29udmVydC5cclxuICAgICAqIEBwYXJhbSBvZmZzZXQgT2Zmc2V0IHdpdGhpbiB0aGUgYXJyYXkgdG8gc3RhcnQuXHJcbiAgICAgKiBAcGFyYW0gbGVuZ3RoIFRoZSBsZW5ndGggb2YgdGhlIHRyaXRzIGFycmF5IHRvIGNvbnZlcnQuXHJcbiAgICAgKiBAcmV0dXJucyBCaWcgaW50ZWdlciB2ZXJzaW9uIG9mIHRyaXRzLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgdHJpdHNUb0JpZ0ludGVnZXIodHJpdHMsIG9mZnNldCwgbGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRyaXRzLCBJbnQ4QXJyYXkpIHx8IHRyaXRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSB0cml0cyBtdXN0IGJlIGEgbm9uIGVtcHR5IEludDhBcnJheVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKG9mZnNldCkgfHwgb2Zmc2V0IDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBvZmZzZXQgbXVzdCBiZSBhIG51bWJlciA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIobGVuZ3RoKSB8fCBsZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBsZW5ndGggbXVzdCBiZSBhIG51bWJlciA+IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvZmZzZXQgKyBsZW5ndGggPiB0cml0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgb2Zmc2V0ICsgbGVuZ3RoIGlzIGJleW9uZCB0aGUgbGVuZ3RoIG9mIHRoZSBhcnJheVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHZhbHVlID0gYmlnX2ludGVnZXJfMS5kZWZhdWx0Lnplcm87XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IGxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUubXVsdGlwbHkoQmlnSW50ZWdlckhlbHBlci5SQURJWCkuYWRkKGJpZ19pbnRlZ2VyXzEuZGVmYXVsdCh0cml0c1tvZmZzZXQgKyBpXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgYmlnSW50ZWdlciB0byB0cml0cy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgYmlnSW50ZWdlciB0byBjb252ZXJ0IHRvIHRyaXRzLlxyXG4gICAgICogQHBhcmFtIHRyaXRzIFRoZSBhcnJheSB0byByZWNlaXZlIHRoZSB0cml0cy5cclxuICAgICAqIEBwYXJhbSBvZmZzZXQgVGhlIG9mZnNldCB0byBwbGFjZSB0aGUgdHJpdHMgaW4gdGhlIGFycmF5LlxyXG4gICAgICogQHBhcmFtIGxlbmd0aCBUaGUgbGVuZ3RoIG9mIHRoZSBhcnJheS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGJpZ0ludGVnZXJUb1RyaXRzKHZhbHVlLCB0cml0cywgb2Zmc2V0LCBsZW5ndGgpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodmFsdWUsIGJpZ19pbnRlZ2VyXzEuZGVmYXVsdCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgdmFsdWUgbXVzdCBiZSBhIGJpZ0ludGVnZXIgdHlwZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRyaXRzLCBJbnQ4QXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIHRyaXRzIG11c3QgYmUgYW4gSW50OEFycmF5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIob2Zmc2V0KSB8fCBvZmZzZXQgPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIG9mZnNldCBtdXN0IGJlIGEgbnVtYmVyID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihsZW5ndGgpIHx8IGxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIGxlbmd0aCBtdXN0IGJlIGEgbnVtYmVyID4gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9mZnNldCArIGxlbmd0aCA+IHRyaXRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBvZmZzZXQgKyBsZW5ndGggaXMgYmV5b25kIHRoZSBsZW5ndGggb2YgdGhlIGFycmF5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYWJzb2x1dGVWYWx1ZSA9IHZhbHVlLmNvbXBhcmVUbyhiaWdfaW50ZWdlcl8xLmRlZmF1bHQuemVybykgPCAwID8gdmFsdWUubmVnYXRlKCkgOiB2YWx1ZTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpdlJlbWFpbmRlciA9IGFic29sdXRlVmFsdWUuZGl2bW9kKEJpZ0ludGVnZXJIZWxwZXIuUkFESVgpO1xyXG4gICAgICAgICAgICBhYnNvbHV0ZVZhbHVlID0gZGl2UmVtYWluZGVyLnF1b3RpZW50O1xyXG4gICAgICAgICAgICBsZXQgcmVtYWluZGVyID0gZGl2UmVtYWluZGVyLnJlbWFpbmRlcjtcclxuICAgICAgICAgICAgaWYgKHJlbWFpbmRlciA+IEJpZ0ludGVnZXJIZWxwZXIuTUFYX1RSSVRfVkFMVUUpIHtcclxuICAgICAgICAgICAgICAgIHJlbWFpbmRlciA9IEJpZ0ludGVnZXJIZWxwZXIuTUlOX1RSSVRfVkFMVUU7XHJcbiAgICAgICAgICAgICAgICBhYnNvbHV0ZVZhbHVlID0gYWJzb2x1dGVWYWx1ZS5hZGQoYmlnX2ludGVnZXJfMS5kZWZhdWx0W1wiMVwiXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHJpdHNbb2Zmc2V0ICsgaV0gPSByZW1haW5kZXIudG9KU051bWJlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodmFsdWUuY29tcGFyZVRvKGJpZ19pbnRlZ2VyXzEuZGVmYXVsdC56ZXJvKSA8IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgLy8gQXZvaWQgbmVnYXRpdmUgemVyb1xyXG4gICAgICAgICAgICAgICAgdHJpdHNbb2Zmc2V0ICsgaV0gPSB0cml0c1tvZmZzZXQgKyBpXSA9PT0gMCA/IDAgOiAtdHJpdHNbb2Zmc2V0ICsgaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgdGhlIGJpZ0ludGVnZXIgaW50byBieXRlcy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cclxuICAgICAqIEBwYXJhbSBkZXN0aW5hdGlvbiBUaGUgZGVzdGluYXRpb24gYXJyYXkgdG8gc3RvcmUgdGhlIGJ5dGVzLlxyXG4gICAgICogQHBhcmFtIG9mZnNldCBUaGUgb2Zmc2V0IHdpdGhpbiB0aGUgYXJyYXkgdG8gc3RvcmUgdGhlIGJ5dGVzLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgYmlnSW50ZWdlclRvQnl0ZXModmFsdWUsIGRlc3RpbmF0aW9uLCBvZmZzZXQpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodmFsdWUsIGJpZ19pbnRlZ2VyXzEuZGVmYXVsdCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgdmFsdWUgbXVzdCBiZSBhIGJpZ0ludGVnZXIgdHlwZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKGRlc3RpbmF0aW9uLCBBcnJheUJ1ZmZlcikgfHwgZGVzdGluYXRpb24uYnl0ZUxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBkZXN0aW5hdGlvbiBtdXN0IGJlIGFuIGFycmF5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIob2Zmc2V0KSB8fCBvZmZzZXQgPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIG9mZnNldCBtdXN0IGJlIGEgbnVtYmVyID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkZXN0aW5hdGlvbi5ieXRlTGVuZ3RoIC0gb2Zmc2V0IDwgQmlnSW50ZWdlckhlbHBlci5CWVRFX0hBU0hfTEVOR1RIKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKGBEZXN0aW5hdGlvbiBhcnJheSBoYXMgaW52YWxpZCBzaXplLCBpdCBtdXN0IGJlIGF0IGxlYXN0ICR7QmlnSW50ZWdlckhlbHBlci5CWVRFX0hBU0hfTEVOR1RIfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBSZW1lbWJlciBpZiBpdCBpcyBuZWdhdGl2ZSBmb3IgbGF0ZXJcclxuICAgICAgICBjb25zdCBpc05lZyA9IHZhbHVlLmlzTmVnYXRpdmUoKSA/IC0xIDogMDtcclxuICAgICAgICBsZXQgaGV4U3RyaW5nID0gdmFsdWUudG9TdHJpbmcoMTYpO1xyXG4gICAgICAgIGlmIChpc05lZyA9PT0gLTEpIHtcclxuICAgICAgICAgICAgLy8gQnV0IHJlbW92ZSBpdCBmb3Igbm93XHJcbiAgICAgICAgICAgIGhleFN0cmluZyA9IGhleFN0cmluZy5zbGljZSgxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gTm93IG1ha2Ugc3VyZSB0aGUgaGV4IHN0cmluZyBpcyBhbiBldmVuIGxlbmd0aCBzbyB0aGUgcmVnZXggd29ya3NcclxuICAgICAgICBpZiAoaGV4U3RyaW5nLmxlbmd0aCAlIDIgPT09IDEpIHtcclxuICAgICAgICAgICAgaGV4U3RyaW5nID0gYDAke2hleFN0cmluZ31gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBtYXRjaGVzID0gaGV4U3RyaW5nLm1hdGNoKC9bMC05YS1mXXsyfS9nKTtcclxuICAgICAgICAvLyBDb252ZXJ0IHRoZSBoZXggdG8gbnVtYmVyc1xyXG4gICAgICAgIGNvbnN0IHNpZ25lZEJ5dGVzID0gbmV3IEludDhBcnJheShtYXRjaGVzXHJcbiAgICAgICAgICAgIC5tYXAoaGV4ID0+IHBhcnNlSW50KGAweCR7aGV4fWAsIDE2KSkpO1xyXG4gICAgICAgIGlmIChpc05lZyA9PT0gLTEpIHtcclxuICAgICAgICAgICAgQmlnSW50ZWdlckhlbHBlci50d29zQ29tcGxlbWVudChzaWduZWRCeXRlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRhdGFWaWV3ID0gbmV3IERhdGFWaWV3KGRlc3RpbmF0aW9uKTtcclxuICAgICAgICAvLyBQYWQgdGhlIHN0YXJ0IG9mIHRoZSBidWZmZXIgd2l0aCB0aGUgbmVnIHZhbHVlXHJcbiAgICAgICAgbGV0IGkgPSBvZmZzZXQ7XHJcbiAgICAgICAgd2hpbGUgKGkgKyBzaWduZWRCeXRlcy5sZW5ndGggPCBCaWdJbnRlZ2VySGVscGVyLkJZVEVfSEFTSF9MRU5HVEgpIHtcclxuICAgICAgICAgICAgZGF0YVZpZXcuc2V0SW50OChpKyssIGlzTmVnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQW5kIGNvcHkgaW4gdGhlIGFjdHVhbCBieXRlc1xyXG4gICAgICAgIGZvciAobGV0IGogPSBzaWduZWRCeXRlcy5sZW5ndGg7IGotLSA+IDA7KSB7XHJcbiAgICAgICAgICAgIGRhdGFWaWV3LnNldEludDgoaSsrLCBzaWduZWRCeXRlc1tzaWduZWRCeXRlcy5sZW5ndGggLSAxIC0gal0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCBieXRlcyB0byBhIGJpZ0ludGVnZXIuXHJcbiAgICAgKiBAcGFyYW0gc291cmNlIFRoZSBzb3VyY2UgYnl0ZXMuXHJcbiAgICAgKiBAcGFyYW0gb2Zmc2V0IFRoZSBvZmZzZXQgd2l0aGluIHRoZSBieXRlcyB0byBzdGFydCBjb252ZXJzaW9uLlxyXG4gICAgICogQHBhcmFtIGxlbmd0aCBUaGUgbGVuZ3RoIG9mIHRoZSBieXRlcyB0byB1c2UgZm9yIGNvbnZlcnNpb24uXHJcbiAgICAgKiBAcmV0dXJucyBCaWcgaW50ZWdlciB2ZXJzaW9uIG9mIGJ5dGVzLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgYnl0ZXNUb0JpZ0ludGVnZXIoc291cmNlLCBvZmZzZXQsIGxlbmd0aCkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShzb3VyY2UsIEFycmF5QnVmZmVyKSB8fCBzb3VyY2UuYnl0ZUxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBzb3VyY2UgbXVzdCBiZSBhIG5vbiBlbXB0eSBudW1iZXIgYXJyYXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihvZmZzZXQpIHx8IG9mZnNldCA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgb2Zmc2V0IG11c3QgYmUgYSBudW1iZXIgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGxlbmd0aCkgfHwgbGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgbGVuZ3RoIG11c3QgYmUgYSBudW1iZXIgPiAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc291cmNlLmJ5dGVMZW5ndGggLSBvZmZzZXQgPCBCaWdJbnRlZ2VySGVscGVyLkJZVEVfSEFTSF9MRU5HVEgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoYFNvdXJjZSBhcnJheSBoYXMgaW52YWxpZCBzaXplLCBpdCBtdXN0IGJlIGF0IGxlYXN0ICR7QmlnSW50ZWdlckhlbHBlci5CWVRFX0hBU0hfTEVOR1RIfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkYXRhVmlldyA9IG5ldyBEYXRhVmlldyhzb3VyY2UpO1xyXG4gICAgICAgIGxldCBzaWduZWRCeXRlcyA9IG5ldyBJbnQ4QXJyYXkoZGF0YVZpZXcuYnl0ZUxlbmd0aCk7XHJcbiAgICAgICAgZm9yIChsZXQgYiA9IDA7IGIgPCBkYXRhVmlldy5ieXRlTGVuZ3RoOyBiKyspIHtcclxuICAgICAgICAgICAgc2lnbmVkQnl0ZXNbYl0gPSBkYXRhVmlldy5nZXRJbnQ4KGIgKyBvZmZzZXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBSZW1vdmUgdGhlIGluaXRpYWwgcGFkZGluZyBsZWF2aW5nIGF0IGxlYXN0IG9uZSBieXRlXHJcbiAgICAgICAgbGV0IHBhZGRpbmdPZmZzZXQgPSAwO1xyXG4gICAgICAgIGNvbnN0IGZpcnN0Qnl0ZSA9IHNpZ25lZEJ5dGVzWzBdO1xyXG4gICAgICAgIGNvbnN0IGlzTmVnID0gZmlyc3RCeXRlIDwgMDtcclxuICAgICAgICAvLyBJZiB0aGUgZmlyc3QgcGFkZGluZyBjaGFyYWN0ZXIgaXMgbmVnYXRpdmUgdGhlbiByZXZlcnNlIHRoZSAycyBjb21wbGVtZW50XHJcbiAgICAgICAgLy8gYnV0IGZpcnN0IHN0cmlwIG9mIHRoZSBsZWFkaW5nIHBhZGRpbmdcclxuICAgICAgICBpZiAoZmlyc3RCeXRlID09PSAwIHx8IGZpcnN0Qnl0ZSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgd2hpbGUgKHNpZ25lZEJ5dGVzW3BhZGRpbmdPZmZzZXRdID09PSBmaXJzdEJ5dGUgJiYgcGFkZGluZ09mZnNldCA8IHNpZ25lZEJ5dGVzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdPZmZzZXQrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBTdHJpcCBhbnkgcGFkZGluZ1xyXG4gICAgICAgICAgICBzaWduZWRCeXRlcyA9IHNpZ25lZEJ5dGVzLnNsaWNlKHBhZGRpbmdPZmZzZXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNOZWcpIHtcclxuICAgICAgICAgICAgQmlnSW50ZWdlckhlbHBlci50d29zQ29tcGxlbWVudChzaWduZWRCeXRlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBoZXhTdHJpbmcgPSBpc05lZyA/IFwiLVwiIDogXCJcIjtcclxuICAgICAgICBjb25zdCBkdiA9IG5ldyBEYXRhVmlldyhzaWduZWRCeXRlcy5idWZmZXIpO1xyXG4gICAgICAgIGZvciAobGV0IGggPSAwOyBoIDwgZHYuYnl0ZUxlbmd0aDsgaCsrKSB7XHJcbiAgICAgICAgICAgIGhleFN0cmluZyArPSBgMDAke2R2LmdldFVpbnQ4KGgpLnRvU3RyaW5nKDE2KX1gLnNsaWNlKC0yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJpZ19pbnRlZ2VyXzEuZGVmYXVsdChoZXhTdHJpbmcsIDE2KTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgc3RhdGljIHR3b3NDb21wbGVtZW50KHNpZ25lZEJ5dGVzKSB7XHJcbiAgICAgICAgLy8gaWYgdGhlIHdob2xlIG51bWJlciBpcyBuZWdhdGl2ZSB0aGVuXHJcbiAgICAgICAgLy8gY2hhbmdlIHRvIDIncyBjb21wbGVtZW50cyBieSBub3RpbmcgYWxsIHRoZSBudW1iZXJzXHJcbiAgICAgICAgLy8gYW5kIGFkZGluZyAxIHRvIHRoZSBsYXN0IGkuZS4gfmJpZ251bSsxXHJcbiAgICAgICAgZm9yIChsZXQgYiA9IDA7IGIgPCBzaWduZWRCeXRlcy5sZW5ndGg7IGIrKykge1xyXG4gICAgICAgICAgICBzaWduZWRCeXRlc1tiXSA9IH5zaWduZWRCeXRlc1tiXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQWRkIDEgdG8gbGFzdCBudW1iZXIsIGlmIHRoZSBudW1iZXIgaXMgMHhGRiBjb250aW51ZSB0byBjYXJyeVxyXG4gICAgICAgIGxldCBjID0gc2lnbmVkQnl0ZXMubGVuZ3RoIC0gMTtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIHNpZ25lZEJ5dGVzW2NdKys7XHJcbiAgICAgICAgfSB3aGlsZSAoc2lnbmVkQnl0ZXNbYy0tXSA9PT0gMCAmJiBjID4gMCk7XHJcbiAgICB9XHJcbn1cclxuLyogQGludGVybmFsICovXHJcbkJpZ0ludGVnZXJIZWxwZXIuUkFESVggPSBiaWdfaW50ZWdlcl8xLmRlZmF1bHQoMyk7XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5CaWdJbnRlZ2VySGVscGVyLk1BWF9UUklUX1ZBTFVFID0gQmlnSW50ZWdlckhlbHBlci5SQURJWC5taW51cygxKS5kaXZpZGUoMik7XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5CaWdJbnRlZ2VySGVscGVyLk1JTl9UUklUX1ZBTFVFID0gQmlnSW50ZWdlckhlbHBlci5NQVhfVFJJVF9WQUxVRS5uZWdhdGUoKTtcclxuLyogQGludGVybmFsICovXHJcbkJpZ0ludGVnZXJIZWxwZXIuQklUX0hBU0hfTEVOR1RIID0gMzg0O1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuQmlnSW50ZWdlckhlbHBlci5CWVRFX0hBU0hfTEVOR1RIID0gQmlnSW50ZWdlckhlbHBlci5CSVRfSEFTSF9MRU5HVEggLyA4O1xyXG5leHBvcnRzLkJpZ0ludGVnZXJIZWxwZXIgPSBCaWdJbnRlZ2VySGVscGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZbWxuU1c1MFpXZGxja2hsYkhCbGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5b1pXeHdaWEp6TDJKcFowbHVkR1ZuWlhKSVpXeHdaWEl1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCTERSRlFVRjVSVHRCUVVONlJTdzBSVUZCZVVVN1FVRkRla1VzT0VSQlFXbERPMEZCUTJwRExITkVRVUZ0UkR0QlFVVnVSRHM3TzBkQlIwYzdRVUZEU0R0SlFXRkpPenM3T3pzN1QwRk5SenRKUVVOSkxFMUJRVTBzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhMUVVGblFpeEZRVUZGTEUxQlFXTXNSVUZCUlN4TlFVRmpPMUZCUXpWRkxFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFVkJRVVVzVTBGQlV5eERRVUZETEVsQlFVa3NTMEZCU3l4RFFVRkRMRTFCUVUwc1MwRkJTeXhEUVVGRExFVkJRVVU3V1VGRE9VUXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zZVVOQlFYbERMRU5CUVVNc1EwRkJRenRUUVVOd1JUdFJRVVZFTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExGTkJRVk1zUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4TlFVRk5MRWRCUVVjc1EwRkJReXhGUVVGRk8xbEJReTlETEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExHdERRVUZyUXl4RFFVRkRMRU5CUVVNN1UwRkROMFE3VVVGRlJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NUVUZCVFN4SlFVRkpMRU5CUVVNc1JVRkJSVHRaUVVOb1JDeE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXhwUTBGQmFVTXNRMEZCUXl4RFFVRkRPMU5CUXpWRU8xRkJSVVFzU1VGQlNTeE5RVUZOTEVkQlFVY3NUVUZCVFN4SFFVRkhMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVU3V1VGRGFFTXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zZFVSQlFYVkVMRU5CUVVNc1EwRkJRenRUUVVOc1JqdFJRVVZFTEVsQlFVa3NTMEZCU3l4SFFVRkhMSEZDUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETzFGQlJYaENMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzVFVGQlRTeEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFsQlEyeERMRXRCUVVzc1IwRkJSeXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4eFFrRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRMnBHTzFGQlJVUXNUMEZCVHl4TFFVRkxMRU5CUVVNN1NVRkRha0lzUTBGQlF6dEpRVVZFT3pzN096czdUMEZOUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4TFFVRjNRaXhGUVVGRkxFdEJRV2RDTEVWQlFVVXNUVUZCWXl4RlFVRkZMRTFCUVdNN1VVRkRkRWNzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUlVGQlJTeHhRa0ZCVFN4RFFVRkRMRVZCUVVVN1dVRkRja01zVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc2NVTkJRWEZETEVOQlFVTXNRMEZCUXp0VFFVTm9SVHRSUVVWRUxFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFVkJRVVVzVTBGQlV5eERRVUZETEVWQlFVVTdXVUZEZUVNc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNaME5CUVdkRExFTkJRVU1zUTBGQlF6dFRRVU16UkR0UlFVVkVMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hOUVVGTkxFZEJRVWNzUTBGQlF5eEZRVUZGTzFsQlF5OURMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETEd0RFFVRnJReXhEUVVGRExFTkJRVU03VTBGRE4wUTdVVUZGUkN4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFRRVUZUTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1RVRkJUU3hKUVVGSkxFTkJRVU1zUlVGQlJUdFpRVU5vUkN4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eHBRMEZCYVVNc1EwRkJReXhEUVVGRE8xTkJRelZFTzFGQlJVUXNTVUZCU1N4TlFVRk5MRWRCUVVjc1RVRkJUU3hIUVVGSExFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVVTdXVUZEYUVNc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNkVVJCUVhWRUxFTkJRVU1zUTBGQlF6dFRRVU5zUmp0UlFVVkVMRWxCUVVrc1lVRkJZU3hIUVVGSExFdEJRVXNzUTBGQlF5eFRRVUZUTEVOQlFVTXNjVUpCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRPMUZCUlRsRkxFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdXVUZETjBJc1RVRkJUU3haUVVGWkxFZEJRVWNzWVVGQllTeERRVUZETEUxQlFVMHNRMEZCUXl4blFrRkJaMElzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0WlFVTnNSU3hoUVVGaExFZEJRVWNzV1VGQldTeERRVUZETEZGQlFWRXNRMEZCUXp0WlFVTjBReXhKUVVGSkxGTkJRVk1zUjBGQlJ5eFpRVUZaTEVOQlFVTXNVMEZCVXl4RFFVRkRPMWxCUlhaRExFbEJRVWtzVTBGQlV5eEhRVUZITEdkQ1FVRm5RaXhEUVVGRExHTkJRV01zUlVGQlJUdG5Ra0ZETjBNc1UwRkJVeXhIUVVGSExHZENRVUZuUWl4RFFVRkRMR05CUVdNc1EwRkJRenRuUWtGRE5VTXNZVUZCWVN4SFFVRkhMR0ZCUVdFc1EwRkJReXhIUVVGSExFTkJRVU1zY1VKQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8yRkJRMnhFTzFsQlEwUXNTMEZCU3l4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eFRRVUZUTEVOQlFVTXNWVUZCVlN4RlFVRkZMRU5CUVVNN1UwRkRPVU03VVVGRlJDeEpRVUZKTEV0QlFVc3NRMEZCUXl4VFFVRlRMRU5CUVVNc2NVSkJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVN1dVRkRiRU1zUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0blFrRkROMElzYzBKQlFYTkNPMmRDUVVOMFFpeExRVUZMTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0aFFVTjRSVHRUUVVOS08wbEJRMHdzUTBGQlF6dEpRVVZFT3pzN096dFBRVXRITzBsQlEwa3NUVUZCVFN4RFFVRkRMR2xDUVVGcFFpeERRVUZETEV0QlFYZENMRVZCUVVVc1YwRkJkMElzUlVGQlJTeE5RVUZqTzFGQlF6bEdMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRVZCUVVVc2NVSkJRVTBzUTBGQlF5eEZRVUZGTzFsQlEzSkRMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETEhGRFFVRnhReXhEUVVGRExFTkJRVU03VTBGRGFFVTdVVUZGUkN4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNWMEZCVnl4RlFVRkZMRmRCUVZjc1EwRkJReXhKUVVGSkxGZEJRVmNzUTBGQlF5eFZRVUZWTEV0QlFVc3NRMEZCUXl4RlFVRkZPMWxCUTJoR0xFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMR3REUVVGclF5eERRVUZETEVOQlFVTTdVMEZETjBRN1VVRkZSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzVFVGQlRTeEhRVUZITEVOQlFVTXNSVUZCUlR0WlFVTXZReXhOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl4clEwRkJhME1zUTBGQlF5eERRVUZETzFOQlF6ZEVPMUZCUlVRc1NVRkJTU3hYUVVGWExFTkJRVU1zVlVGQlZTeEhRVUZITEUxQlFVMHNSMEZCUnl4blFrRkJaMElzUTBGQlF5eG5Ra0ZCWjBJc1JVRkJSVHRaUVVOeVJTeE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXd5UkVGQk1rUXNaMEpCUVdkQ0xFTkJRVU1zWjBKQlFXZENMRVZCUVVVc1EwRkJReXhEUVVGRE8xTkJRM3BJTzFGQlJVUXNkVU5CUVhWRE8xRkJRM1pETEUxQlFVMHNTMEZCU3l4SFFVRkhMRXRCUVVzc1EwRkJReXhWUVVGVkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVVV4UXl4SlFVRkpMRk5CUVZNc1IwRkJSeXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUlc1RExFbEJRVWtzUzBGQlN5eExRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkZPMWxCUTJRc2QwSkJRWGRDTzFsQlEzaENMRk5CUVZNc1IwRkJSeXhUUVVGVExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUTJ4RE8xRkJRMFFzYjBWQlFXOUZPMUZCUTNCRkxFbEJRVWtzVTBGQlV5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGRk8xbEJRelZDTEZOQlFWTXNSMEZCUnl4SlFVRkpMRk5CUVZNc1JVRkJSU3hEUVVGRE8xTkJReTlDTzFGQlEwUXNUVUZCVFN4UFFVRlBMRWRCUVVjc1UwRkJVeXhEUVVGRExFdEJRVXNzUTBGQlF5eGpRVUZqTEVOQlFVTXNRMEZCUXp0UlFVVm9SQ3cyUWtGQk5rSTdVVUZETjBJc1RVRkJUU3hYUVVGWExFZEJRVWNzU1VGQlNTeFRRVUZUTEVOQlFVTXNUMEZCVHp0aFFVTndReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhIUVVGSExFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkZNME1zU1VGQlNTeExRVUZMTEV0QlFVc3NRMEZCUXl4RFFVRkRMRVZCUVVVN1dVRkRaQ3huUWtGQlowSXNRMEZCUXl4alFVRmpMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU03VTBGRGFFUTdVVUZGUkN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXp0UlFVVXpReXhwUkVGQmFVUTdVVUZEYWtRc1NVRkJTU3hEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETzFGQlEyWXNUMEZCVHl4RFFVRkRMRWRCUVVjc1YwRkJWeXhEUVVGRExFMUJRVTBzUjBGQlJ5eG5Ra0ZCWjBJc1EwRkJReXhuUWtGQlowSXNSVUZCUlR0WlFVTXZSQ3hSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8xTkJRMmhETzFGQlEwUXNLMEpCUVN0Q08xRkJReTlDTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1YwRkJWeXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRWRCUVVjN1dVRkRka01zVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hYUVVGWExFTkJRVU1zVjBGQlZ5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU5zUlR0SlFVTk1MRU5CUVVNN1NVRkZSRHM3T3pzN08wOUJUVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zVFVGQmJVSXNSVUZCUlN4TlFVRmpMRVZCUVVVc1RVRkJZenRSUVVNdlJTeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeEZRVUZGTEZkQlFWY3NRMEZCUXl4SlFVRkpMRTFCUVUwc1EwRkJReXhWUVVGVkxFdEJRVXNzUTBGQlF5eEZRVUZGTzFsQlEzUkZMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETERaRFFVRTJReXhEUVVGRExFTkJRVU03VTBGRGVFVTdVVUZGUkN4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFRRVUZUTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1RVRkJUU3hIUVVGSExFTkJRVU1zUlVGQlJUdFpRVU12UXl4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eHJRMEZCYTBNc1EwRkJReXhEUVVGRE8xTkJRemRFTzFGQlJVUXNTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRTFCUVUwc1NVRkJTU3hEUVVGRExFVkJRVVU3V1VGRGFFUXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zYVVOQlFXbERMRU5CUVVNc1EwRkJRenRUUVVNMVJEdFJRVVZFTEVsQlFVa3NUVUZCVFN4RFFVRkRMRlZCUVZVc1IwRkJSeXhOUVVGTkxFZEJRVWNzWjBKQlFXZENMRU5CUVVNc1owSkJRV2RDTEVWQlFVVTdXVUZEYUVVc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNjMFJCUVhORUxHZENRVUZuUWl4RFFVRkRMR2RDUVVGblFpeEZRVUZGTEVOQlFVTXNRMEZCUXp0VFFVTndTRHRSUVVWRUxFMUJRVTBzVVVGQlVTeEhRVUZITEVsQlFVa3NVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJSWFJETEVsQlFVa3NWMEZCVnl4SFFVRkhMRWxCUVVrc1UwRkJVeXhEUVVGRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXp0UlFVTnlSQ3hMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1VVRkJVU3hEUVVGRExGVkJRVlVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTXhReXhYUVVGWExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETEVOQlFVTTdVMEZEYWtRN1VVRkZSQ3gxUkVGQmRVUTdVVUZEZGtRc1NVRkJTU3hoUVVGaExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEzUkNMRTFCUVUwc1UwRkJVeXhIUVVGSExGZEJRVmNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTnFReXhOUVVGTkxFdEJRVXNzUjBGQlJ5eFRRVUZUTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUlRWQ0xEUkZRVUUwUlR0UlFVTTFSU3g1UTBGQmVVTTdVVUZEZWtNc1NVRkJTU3hUUVVGVExFdEJRVXNzUTBGQlF5eEpRVUZKTEZOQlFWTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1JVRkJSVHRaUVVOeVF5eFBRVUZQTEZkQlFWY3NRMEZCUXl4aFFVRmhMRU5CUVVNc1MwRkJTeXhUUVVGVExFbEJRVWtzWVVGQllTeEhRVUZITEZkQlFWY3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhGUVVGRk8yZENRVU4yUml4aFFVRmhMRVZCUVVVc1EwRkJRenRoUVVOdVFqdFpRVU5FTEc5Q1FVRnZRanRaUVVOd1FpeFhRVUZYTEVkQlFVY3NWMEZCVnl4RFFVRkRMRXRCUVVzc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlF6dFRRVU5zUkR0UlFVVkVMRWxCUVVrc1MwRkJTeXhGUVVGRk8xbEJRMUFzWjBKQlFXZENMRU5CUVVNc1kwRkJZeXhEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETzFOQlEyaEVPMUZCUlVRc1NVRkJTU3hUUVVGVExFZEJRVWNzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF6dFJRVU5xUXl4TlFVRk5MRVZCUVVVc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRkROVU1zUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF5eFZRVUZWTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1dVRkRjRU1zVTBGQlV5eEpRVUZKTEV0QlFVc3NSVUZCUlN4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTTNSRHRSUVVWRUxFOUJRVThzY1VKQlFVMHNRMEZCUXl4VFFVRlRMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03U1VGRGFrTXNRMEZCUXp0SlFVVkVMR1ZCUVdVN1NVRkRVQ3hOUVVGTkxFTkJRVU1zWTBGQll5eERRVUZETEZkQlFYTkNPMUZCUTJoRUxIVkRRVUYxUXp0UlFVTjJReXh6UkVGQmMwUTdVVUZEZEVRc01FTkJRVEJETzFGQlF6RkRMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4WFFVRlhMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFsQlEzcERMRmRCUVZjc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVOd1F6dFJRVU5FTEdkRlFVRm5SVHRSUVVOb1JTeEpRVUZKTEVOQlFVTXNSMEZCUnl4WFFVRlhMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU12UWl4SFFVRkhPMWxCUTBNc1YwRkJWeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTTdVMEZEY0VJc1VVRkJVU3hYUVVGWExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJUdEpRVU01UXl4RFFVRkRPenRCUVd4UFJDeGxRVUZsTzBGQlExTXNjMEpCUVVzc1IwRkJjMElzY1VKQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVNM1JDeGxRVUZsTzBGQlExTXNLMEpCUVdNc1IwRkJjMElzWjBKQlFXZENMRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRGRFY3NaVUZCWlR0QlFVTlRMQ3RDUVVGakxFZEJRWE5DTEdkQ1FVRm5RaXhEUVVGRExHTkJRV01zUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXp0QlFVVnlSeXhsUVVGbE8wRkJRMU1zWjBOQlFXVXNSMEZCVnl4SFFVRkhMRU5CUVVNN1FVRkRkRVFzWlVGQlpUdEJRVU5UTEdsRFFVRm5RaXhIUVVGWExHZENRVUZuUWl4RFFVRkRMR1ZCUVdVc1IwRkJSeXhEUVVGRExFTkJRVU03UVVGWU5VWXNORU5CYjA5REluMD0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBoYXNoXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS9oYXNoXCIpO1xyXG5jb25zdCB0cmFuc2FjdGlvbl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJhbnNhY3Rpb25cIik7XHJcbmNvbnN0IHRyaXRzXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cml0c1wiKTtcclxuY29uc3QgY3J5cHRvRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvci9jcnlwdG9FcnJvclwiKTtcclxuY29uc3Qgc3BvbmdlRmFjdG9yeV8xID0gcmVxdWlyZShcIi4uL2ZhY3Rvcmllcy9zcG9uZ2VGYWN0b3J5XCIpO1xyXG4vKipcclxuICogSGVscGVyIGNsYXNzIGZvciB0cmFuc2FjdGlvbnMuXHJcbiAqIENvbnZlcnRlZCBodHRwczovL2dpdGh1Yi5jb20vaW90YWxlZGdlci9pb3RhLmxpYi5qcy9ibG9iL21hc3Rlci9saWIvY3J5cHRvL3NpZ25pbmcvc2lnbmluZy5qc1xyXG4gKi9cclxuY2xhc3MgVHJhbnNhY3Rpb25IZWxwZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgdGhlIGhhc2ggZm9yIGEgdHJhbnNhY3Rpb24uXHJcbiAgICAgKiBAcGFyYW0gdHJhbnNhY3Rpb24gVGhlIHRyYW5zYWN0aW9uIHRvIGdlbmVyYXRlIHRoZSBoYXNoLlxyXG4gICAgICogQHJldHVybnMgVGhlIGhhc2ggb2YgdGhyIHRyYW5zYWN0aW9uLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaGFzaCh0cmFuc2FjdGlvbikge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0cmFuc2FjdGlvbiwgdHJhbnNhY3Rpb25fMS5UcmFuc2FjdGlvbikpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgdHJhbnNhY3Rpb24gbXVzdCBiZSBvZiB0eXBlIFRyYW5zYWN0aW9uXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjdXJsID0gc3BvbmdlRmFjdG9yeV8xLlNwb25nZUZhY3RvcnkuaW5zdGFuY2UoKS5jcmVhdGUoXCJjdXJsXCIpO1xyXG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uVHJpdHMgPSB0cml0c18xLlRyaXRzLmZyb21Ucnl0ZXModHJhbnNhY3Rpb24udG9Ucnl0ZXMoKSkudG9BcnJheSgpO1xyXG4gICAgICAgIGN1cmwuaW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIGN1cmwuYWJzb3JiKHRyYW5zYWN0aW9uVHJpdHMsIDAsIHRyYW5zYWN0aW9uVHJpdHMubGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBoYXNoVHJpdHMgPSBuZXcgSW50OEFycmF5KGN1cmwuZ2V0Q29uc3RhbnQoXCJIQVNIX0xFTkdUSFwiKSk7XHJcbiAgICAgICAgY3VybC5zcXVlZXplKGhhc2hUcml0cywgMCwgaGFzaFRyaXRzLmxlbmd0aCk7XHJcbiAgICAgICAgcmV0dXJuIGhhc2hfMS5IYXNoLmZyb21Ucnl0ZXModHJpdHNfMS5Ucml0cy5mcm9tQXJyYXkoaGFzaFRyaXRzKS50b1RyeXRlcygpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlRyYW5zYWN0aW9uSGVscGVyID0gVHJhbnNhY3Rpb25IZWxwZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRISmhibk5oWTNScGIyNUlaV3h3WlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12YUdWc2NHVnljeTkwY21GdWMyRmpkR2x2YmtobGJIQmxjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRXNORVZCUVhsRk8wRkJRM3BGTEhsRVFVRnpSRHRCUVVOMFJDeDFSVUZCYjBVN1FVRkRjRVVzTWtSQlFYZEVPMEZCUTNoRUxITkVRVUZ0UkR0QlFVTnVSQ3c0UkVGQk1rUTdRVUZGTTBRN096dEhRVWRITzBGQlEwZzdTVUZEU1RzN096dFBRVWxITzBsQlEwa3NUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGM1FqdFJRVU4yUXl4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNWMEZCVnl4RlFVRkZMSGxDUVVGWExFTkJRVU1zUlVGQlJUdFpRVU5vUkN4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5dzJRMEZCTmtNc1EwRkJReXhEUVVGRE8xTkJRM2hGTzFGQlJVUXNUVUZCVFN4SlFVRkpMRWRCUVVjc05rSkJRV0VzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03VVVGRGNrUXNUVUZCVFN4blFrRkJaMElzUjBGQlJ5eGhRVUZMTEVOQlFVTXNWVUZCVlN4RFFVRkRMRmRCUVZjc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMUZCUlRWRkxFbEJRVWtzUTBGQlF5eFZRVUZWTEVWQlFVVXNRMEZCUXp0UlFVTnNRaXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEdkQ1FVRm5RaXhGUVVGRkxFTkJRVU1zUlVGQlJTeG5Ra0ZCWjBJc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dFJRVVV4UkN4TlFVRk5MRk5CUVZNc1IwRkJSeXhKUVVGSkxGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMR0ZCUVdFc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGFrVXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVExFVkJRVVVzUTBGQlF5eEZRVUZGTEZOQlFWTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVVM1F5eFBRVUZQTEZkQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1lVRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRMnhGTEVOQlFVTTdRMEZEU2p0QlFYUkNSQ3c0UTBGelFrTWlmUT09IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBhcnJheUhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvYXJyYXlIZWxwZXJcIik7XHJcbmNvbnN0IG51bWJlckhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIpO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3QgdGltZVNlcnZpY2VfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9zZXJ2aWNlcy90aW1lU2VydmljZVwiKTtcclxuY29uc3QgaGFzaF8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvaGFzaFwiKTtcclxuY29uc3QgdGFnXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90YWdcIik7XHJcbmNvbnN0IHRyYW5zYWN0aW9uXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cmFuc2FjdGlvblwiKTtcclxuY29uc3QgdHJ5dGVOdW1iZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyeXRlTnVtYmVyXCIpO1xyXG5jb25zdCB0cnl0ZXNfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyeXRlc1wiKTtcclxuY29uc3QgY3J5cHRvRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvci9jcnlwdG9FcnJvclwiKTtcclxuY29uc3QgdHJhbnNhY3Rpb25IZWxwZXJfMSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3RyYW5zYWN0aW9uSGVscGVyXCIpO1xyXG4vKipcclxuICogQmFzZSBjbGFzcyBmb3IgcHJvb2Ygb2Ygd29yay5cclxuICovXHJcbmNsYXNzIFByb29mT2ZXb3JrQmFzZSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBQcm9vZk9mV29yay5cclxuICAgICAqIEBwYXJhbSB0aW1lU2VydmljZSBTZXJ2aWNlIHRvIGdldCB0aGUgdGltZSBmb3IgYXR0YWNobWVudHMuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHRpbWVTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5fdGltZVNlcnZpY2UgPSB0aW1lU2VydmljZSB8fCBuZXcgdGltZVNlcnZpY2VfMS5UaW1lU2VydmljZSgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBBbGxvdyB0aGUgcHJvb2Ygb2Ygd29yayB0byBwZXJmb3JtIGFueSBpbml0aWFsaXphdGlvbi5cclxuICAgICAqIFdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIHRoZSBpbXBsZW1lbnRhdGlvbiBpcyBub3Qgc3VwcG9ydGVkLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZS5cclxuICAgICAqL1xyXG4gICAgYXN5bmMgaW5pdGlhbGl6ZSgpIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFBlcmZvcm0gYSBwcm9vZiBvZiB3b3JrIG9uIHRoZSBkYXRhLlxyXG4gICAgICogQHBhcmFtIHRydW5rVHJhbnNhY3Rpb24gVGhlIHRydW5rVHJhbnNhY3Rpb24gdG8gdXNlIGZvciB0aGUgcG93LlxyXG4gICAgICogQHBhcmFtIGJyYW5jaFRyYW5zYWN0aW9uIFRoZSBicmFuY2hUcmFuc2FjdGlvbiB0byB1c2UgZm9yIHRoZSBwb3cuXHJcbiAgICAgKiBAcGFyYW0gdHJ5dGVzIFRoZSB0cnl0ZXMgdG8gcGVyZm9ybSB0aGUgcG93IG9uLlxyXG4gICAgICogQHBhcmFtIG1pbldlaWdodE1hZ25pdHVkZSBUaGUgbWluaW11bSB3ZWlnaHQgbWFnbml0dWRlLlxyXG4gICAgICogQHJldHVybnMgVGhlIHRyeXRlcyBwcm9kdWNlZCBieSB0aGUgcHJvb2Ygb2Ygd29yay5cclxuICAgICAqL1xyXG4gICAgYXN5bmMgcG93KHRydW5rVHJhbnNhY3Rpb24sIGJyYW5jaFRyYW5zYWN0aW9uLCB0cnl0ZXMsIG1pbldlaWdodE1hZ25pdHVkZSkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0cnVua1RyYW5zYWN0aW9uLCBoYXNoXzEuSGFzaCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgdHJ1bmtUcmFuc2FjdGlvbiBtdXN0IGJlIGFuIG9iamVjdCBvZiB0eXBlIEhhc2hcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShicmFuY2hUcmFuc2FjdGlvbiwgaGFzaF8xLkhhc2gpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIGJyYW5jaFRyYW5zYWN0aW9uIG11c3QgYmUgYW4gb2JqZWN0IG9mIHR5cGUgSGFzaFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFhcnJheUhlbHBlcl8xLkFycmF5SGVscGVyLmlzVHlwZWQodHJ5dGVzLCB0cnl0ZXNfMS5Ucnl0ZXMpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIHRyeXRlcyBtdXN0IGJlIGFuIGFycmF5IG9mIHR5cGUgVHJ5dGVzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIobWluV2VpZ2h0TWFnbml0dWRlKSB8fCBtaW5XZWlnaHRNYWduaXR1ZGUgPD0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBtaW5XZWlnaHRNYWduaXR1ZGUgbXVzdCBiZSA+IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGZpbmFsVHJ5dGVzID0gW107XHJcbiAgICAgICAgbGV0IHByZXZpb3VzVHJhbnNhY3Rpb25IYXNoO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHJ5dGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gdHJhbnNhY3Rpb25fMS5UcmFuc2FjdGlvbi5mcm9tVHJ5dGVzKHRyeXRlc1tpXSk7XHJcbiAgICAgICAgICAgIC8vIFN0YXJ0IHdpdGggbGFzdCBpbmRleCB0cmFuc2FjdGlvblxyXG4gICAgICAgICAgICAvLyBBc3NpZ24gaXQgdGhlIHRydW5rIC8gYnJhbmNoIHdoaWNoIHRoZSB1c2VyIGhhcyBzdXBwbGllZFxyXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIGJ1bmRsZSwgY2hhaW4gdGhlIGJ1bmRsZSB0cmFuc2FjdGlvbnMgdmlhXHJcbiAgICAgICAgICAgIC8vIHRydW5rVHJhbnNhY3Rpb24gdG9nZXRoZXJcclxuICAgICAgICAgICAgdHJhbnNhY3Rpb24uYXR0YWNobWVudFRpbWVzdGFtcCA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbU51bWJlcih0aGlzLl90aW1lU2VydmljZS5tc1NpbmNlRXBvY2goKSk7XHJcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uLmF0dGFjaG1lbnRUaW1lc3RhbXBMb3dlckJvdW5kID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tTnVtYmVyKDApO1xyXG4gICAgICAgICAgICB0cmFuc2FjdGlvbi5hdHRhY2htZW50VGltZXN0YW1wVXBwZXJCb3VuZCA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbU51bWJlcihQcm9vZk9mV29ya0Jhc2UuTUFYX1RJTUVTVEFNUF9WQUxVRSk7XHJcbiAgICAgICAgICAgIC8vIElmIHRoaXMgaXMgdGhlIGZpcnN0IHRyYW5zYWN0aW9uLCB0byBiZSBwcm9jZXNzZWRcclxuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHRoYXQgaXQncyB0aGUgbGFzdCBpbiB0aGUgYnVuZGxlIGFuZCB0aGVuXHJcbiAgICAgICAgICAgIC8vIGFzc2lnbiBpdCB0aGUgc3VwcGxpZWQgdHJ1bmsgYW5kIGJyYW5jaCB0cmFuc2FjdGlvbnNcclxuICAgICAgICAgICAgaWYgKG9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc0VtcHR5KHByZXZpb3VzVHJhbnNhY3Rpb25IYXNoKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgbGFzdCB0cmFuc2FjdGlvbiBpbiB0aGUgYnVuZGxlXHJcbiAgICAgICAgICAgICAgICBpZiAodHJhbnNhY3Rpb24ubGFzdEluZGV4LnRvTnVtYmVyKCkgIT09IHRyYW5zYWN0aW9uLmN1cnJlbnRJbmRleC50b051bWJlcigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJXcm9uZyBidW5kbGUgb3JkZXIuIFRoZSBidW5kbGUgc2hvdWxkIGJlIG9yZGVyZWQgaW4gZGVzY2VuZGluZyBvcmRlciBmcm9tIGN1cnJlbnRJbmRleFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLnRydW5rVHJhbnNhY3Rpb24gPSB0cnVua1RyYW5zYWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24uYnJhbmNoVHJhbnNhY3Rpb24gPSBicmFuY2hUcmFuc2FjdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLnRydW5rVHJhbnNhY3Rpb24gPSBwcmV2aW91c1RyYW5zYWN0aW9uSGFzaDtcclxuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLmJyYW5jaFRyYW5zYWN0aW9uID0gdHJ1bmtUcmFuc2FjdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBuZXdUcnl0ZXMgPSB0cmFuc2FjdGlvbi50b1RyeXRlcygpO1xyXG4gICAgICAgICAgICBjb25zdCBzaW5nbGVUcnl0ZXMgPSBhd2FpdCB0aGlzLnNpbmdsZVBvdyhuZXdUcnl0ZXMsIG1pbldlaWdodE1hZ25pdHVkZSk7XHJcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uLm5vbmNlID0gdGFnXzEuVGFnLmZyb21Ucnl0ZXMoc2luZ2xlVHJ5dGVzLnN1Yih0cmFuc2FjdGlvbl8xLlRyYW5zYWN0aW9uLkxFTkdUSCAtIHRhZ18xLlRhZy5MRU5HVEgsIHRhZ18xLlRhZy5MRU5HVEgpKTtcclxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBoYXNoIG9mIHRoZSBuZXcgdHJhbnNhY3Rpb24gd2l0aCBub25jZSBhbmQgdXNlIHRoYXQgYXMgdGhlIHByZXZpb3VzIGhhc2ggZm9yIG5leHQgZW50cnlcclxuICAgICAgICAgICAgY29uc3QgcmV0dXJuVHJhbnNhY3Rpb24gPSB0cmFuc2FjdGlvbl8xLlRyYW5zYWN0aW9uLmZyb21Ucnl0ZXMoc2luZ2xlVHJ5dGVzKTtcclxuICAgICAgICAgICAgcHJldmlvdXNUcmFuc2FjdGlvbkhhc2ggPSB0cmFuc2FjdGlvbkhlbHBlcl8xLlRyYW5zYWN0aW9uSGVscGVyLmhhc2gocmV0dXJuVHJhbnNhY3Rpb24pO1xyXG4gICAgICAgICAgICBmaW5hbFRyeXRlcy5wdXNoKHJldHVyblRyYW5zYWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcmV2ZXJzZSB0aGUgb3JkZXIgc28gdGhhdCBpdCdzIGFzY2VuZGluZyBmcm9tIGN1cnJlbnRJbmRleFxyXG4gICAgICAgIHJldHVybiBmaW5hbFRyeXRlcy5yZXZlcnNlKCkubWFwKHRyYW5zYWN0aW9uID0+IHRyYW5zYWN0aW9uLnRvVHJ5dGVzKCkpO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBUaGUgbWF4aW11bSB0aW1lc3RhbXAgdmFsdWUgdXNlZCBpbiBwcm9vZiBvZiB3b3JrLlxyXG4gKi9cclxuUHJvb2ZPZldvcmtCYXNlLk1BWF9USU1FU1RBTVBfVkFMVUUgPSAoTWF0aC5wb3coMywgMjcpIC0gMSkgLyAyO1xyXG5leHBvcnRzLlByb29mT2ZXb3JrQmFzZSA9IFByb29mT2ZXb3JrQmFzZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKdmIyWlBabGR2Y210Q1lYTmxMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwzQnliMjltVDJaWGIzSnJMM0J5YjI5bVQyWlhiM0pyUW1GelpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc01FVkJRWFZGTzBGQlEzWkZMRFJGUVVGNVJUdEJRVU42UlN3MFJVRkJlVVU3UVVGRmVrVXNNa1ZCUVhkRk8wRkJRM2hGTEhsRVFVRnpSRHRCUVVOMFJDeDFSRUZCYjBRN1FVRkRjRVFzZFVWQlFXOUZPMEZCUTNCRkxIVkZRVUZ2UlR0QlFVTndSU3cyUkVGQk1FUTdRVUZETVVRc2MwUkJRVzFFTzBGQlEyNUVMRzlGUVVGcFJUdEJRVWRxUlRzN1IwRkZSenRCUVVOSU8wbEJVMGs3T3p0UFFVZEhPMGxCUTBnc1dVRkJXU3hYUVVFd1FqdFJRVU5zUXl4SlFVRkpMRU5CUVVNc1dVRkJXU3hIUVVGSExGZEJRVmNzU1VGQlNTeEpRVUZKTEhsQ1FVRlhMRVZCUVVVc1EwRkJRenRKUVVONlJDeERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEV0QlFVc3NRMEZCUXl4VlFVRlZPMUZCUTI1Q0xFOUJRVThzVDBGQlR5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMGxCUXpkQ0xFTkJRVU03U1VGRlJEczdPenM3T3p0UFFVOUhPMGxCUTBrc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eG5Ra0ZCYzBJc1JVRkJSU3hwUWtGQmRVSXNSVUZCUlN4TlFVRm5RaXhGUVVGRkxHdENRVUV3UWp0UlFVTXhSeXhKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1owSkJRV2RDTEVWQlFVVXNWMEZCU1N4RFFVRkRMRVZCUVVVN1dVRkRPVU1zVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc2NVUkJRWEZFTEVOQlFVTXNRMEZCUXp0VFFVTm9SanRSUVVORUxFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhwUWtGQmFVSXNSVUZCUlN4WFFVRkpMRU5CUVVNc1JVRkJSVHRaUVVNdlF5eE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXh6UkVGQmMwUXNRMEZCUXl4RFFVRkRPMU5CUTJwR08xRkJRMFFzU1VGQlNTeERRVUZETEhsQ1FVRlhMRU5CUVVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUlVGQlJTeGxRVUZOTEVOQlFVTXNSVUZCUlR0WlFVTjBReXhOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl3MFEwRkJORU1zUTBGQlF5eERRVUZETzFOQlEzWkZPMUZCUTBRc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNVMEZCVXl4RFFVRkRMR3RDUVVGclFpeERRVUZETEVsQlFVa3NhMEpCUVd0Q0xFbEJRVWtzUTBGQlF5eEZRVUZGTzFsQlEzaEZMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETEc5RFFVRnZReXhEUVVGRExFTkJRVU03VTBGREwwUTdVVUZGUkN4TlFVRk5MRmRCUVZjc1IwRkJSeXhGUVVGRkxFTkJRVU03VVVGRmRrSXNTVUZCU1N4MVFrRkJOa0lzUTBGQlF6dFJRVVZzUXl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFpRVU53UXl4TlFVRk5MRmRCUVZjc1IwRkJSeXg1UWtGQlZ5eERRVUZETEZWQlFWVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVVYwUkN4dlEwRkJiME03V1VGRGNFTXNNa1JCUVRKRU8xbEJRek5FTERCRVFVRXdSRHRaUVVNeFJDdzBRa0ZCTkVJN1dVRkROVUlzVjBGQlZ5eERRVUZETEcxQ1FVRnRRaXhIUVVGSExIbENRVUZYTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zV1VGQldTeEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTXpSaXhYUVVGWExFTkJRVU1zTmtKQlFUWkNMRWRCUVVjc2VVSkJRVmNzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRkRVVzVjBGQlZ5eERRVUZETERaQ1FVRTJRaXhIUVVGSExIbENRVUZYTEVOQlFVTXNWVUZCVlN4RFFVRkRMR1ZCUVdVc1EwRkJReXh0UWtGQmJVSXNRMEZCUXl4RFFVRkRPMWxCUlhoSExHOUVRVUZ2UkR0WlFVTndSQ3h6UkVGQmMwUTdXVUZEZEVRc2RVUkJRWFZFTzFsQlJYWkVMRWxCUVVrc01rSkJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNkVUpCUVhWQ0xFTkJRVU1zUlVGQlJUdG5Ra0ZETDBNc01FTkJRVEJETzJkQ1FVTXhReXhKUVVGSkxGZEJRVmNzUTBGQlF5eFRRVUZUTEVOQlFVTXNVVUZCVVN4RlFVRkZMRXRCUVVzc1YwRkJWeXhEUVVGRExGbEJRVmtzUTBGQlF5eFJRVUZSTEVWQlFVVXNSVUZCUlR0dlFrRkRNVVVzVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc2QwWkJRWGRHTEVOQlFVTXNRMEZCUXp0cFFrRkRia2c3WjBKQlEwUXNWMEZCVnl4RFFVRkRMR2RDUVVGblFpeEhRVUZITEdkQ1FVRm5RaXhEUVVGRE8yZENRVU5vUkN4WFFVRlhMRU5CUVVNc2FVSkJRV2xDTEVkQlFVY3NhVUpCUVdsQ0xFTkJRVU03WVVGRGNrUTdhVUpCUVUwN1owSkJRMGdzVjBGQlZ5eERRVUZETEdkQ1FVRm5RaXhIUVVGSExIVkNRVUYxUWl4RFFVRkRPMmRDUVVOMlJDeFhRVUZYTEVOQlFVTXNhVUpCUVdsQ0xFZEJRVWNzWjBKQlFXZENMRU5CUVVNN1lVRkRjRVE3V1VGRlJDeE5RVUZOTEZOQlFWTXNSMEZCUnl4WFFVRlhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03V1VGRmVrTXNUVUZCVFN4WlFVRlpMRWRCUVVjc1RVRkJUU3hKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEZOQlFWTXNSVUZCUlN4clFrRkJhMElzUTBGQlF5eERRVUZETzFsQlJYcEZMRmRCUVZjc1EwRkJReXhMUVVGTExFZEJRVWNzVTBGQlJ5eERRVUZETEZWQlFWVXNRMEZCUXl4WlFVRlpMRU5CUVVNc1IwRkJSeXhEUVVGRExIbENRVUZYTEVOQlFVTXNUVUZCVFN4SFFVRkhMRk5CUVVjc1EwRkJReXhOUVVGTkxFVkJRVVVzVTBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkZiRWNzZDBkQlFYZEhPMWxCUTNoSExFMUJRVTBzYVVKQlFXbENMRWRCUVVjc2VVSkJRVmNzUTBGQlF5eFZRVUZWTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN1dVRkRMMFFzZFVKQlFYVkNMRWRCUVVjc2NVTkJRV2xDTEVOQlFVTXNTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeERRVUZETEVOQlFVTTdXVUZGY0VVc1YwRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhEUVVGRE8xTkJRM1pETzFGQlEwUXNOa1JCUVRaRU8xRkJRemRFTEU5QlFVOHNWMEZCVnl4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eFhRVUZYTEVOQlFVTXNSVUZCUlN4RFFVRkRMRmRCUVZjc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6VkZMRU5CUVVNN08wRkJOVVpFT3p0SFFVVkhPMEZCUTI5Q0xHMURRVUZ0UWl4SFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzBGQlNtNUdMREJEUVhOSFF5SjkiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG51bWJlckhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIpO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3QgY3J5cHRvRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvci9jcnlwdG9FcnJvclwiKTtcclxuLyoqXHJcbiAqIEltcGxlbWVudGF0aW9uIG9mIElTcG9uZ2UgdXNpbmcgQ3VybCBhbGdvcml0aG0uXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb3RhbGVkZ2VyL2lvdGEubGliLmpzL2Jsb2IvbWFzdGVyL2xpYi9jcnlwdG8vY3VybC9jdXJsLmpzXHJcbiAqL1xyXG5jbGFzcyBDdXJsIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEN1cmwuXHJcbiAgICAgKiBAcGFyYW0gcm91bmRzIFRoZSBudW1iZXIgb2Ygcm91bmRzIHRvIHVzZS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Iocm91bmRzID0gQ3VybC5OVU1CRVJfT0ZfUk9VTkRTKSB7XHJcbiAgICAgICAgdGhpcy5fbnVtYmVyT2ZSb3VuZHMgPSByb3VuZHM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgY29uc3RhbnQgZm9yIHRoZSBzcG9uZS5cclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBjb25zdGFudCB0byBnZXQuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgY29uc3RhbnQuXHJcbiAgICAgKi9cclxuICAgIGdldENvbnN0YW50KG5hbWUpIHtcclxuICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIk5VTUJFUl9PRl9ST1VORFNcIjoge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX251bWJlck9mUm91bmRzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJIQVNIX0xFTkdUSFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiU1RBVEVfTEVOR1RIXCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEN1cmxbbmFtZV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKGBVbmtub3duIGNvbnN0YW50IHJlcXVlc3RlZCAke25hbWV9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHN0YXRlLlxyXG4gICAgICogQHJldHVybnMgVGhlIHN0YXRlLlxyXG4gICAgICovXHJcbiAgICBnZXRTdGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpc2UgdGhlIGhhc2hlci5cclxuICAgICAqIEBwYXJhbSBzdGF0ZSBUaGUgaW5pdGlhbCBzdGF0ZSBmb3IgdGhlIGhhc2hlci5cclxuICAgICAqL1xyXG4gICAgaW5pdGlhbGl6ZShzdGF0ZSkge1xyXG4gICAgICAgIGlmIChzdGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IHN0YXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSBuZXcgSW50OEFycmF5KEN1cmwuU1RBVEVfTEVOR1RIKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJlc2V0IHRoZSBoYXNoZXIuXHJcbiAgICAgKi9cclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBBYnNvcmIgdHJpdHMgaW50byB0aGUgaGFzaC5cclxuICAgICAqIEBwYXJhbSB0cml0cyBUaGUgdHJpdHMgdG8gYWJzb3JiLlxyXG4gICAgICogQHBhcmFtIG9mZnNldCBUaGUgb2Zmc2V0IGludG8gdGhlIHRyaXRzIHRvIGFic29yYiBmcm9tLlxyXG4gICAgICogQHBhcmFtIGxlbmd0aCBUaGUgbnVtYmVyIG9mIHRyaXRzIHRvIGFic29yYi5cclxuICAgICAqL1xyXG4gICAgYWJzb3JiKHRyaXRzLCBvZmZzZXQsIGxlbmd0aCkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0cml0cywgSW50OEFycmF5KSB8fCB0cml0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUcml0cyBtdXN0IGJlIGEgbm9uIGVtcHR5IEludDhBcnJheVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKG9mZnNldCkgfHwgb2Zmc2V0IDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIk9mZnNldCBtdXN0IGJlIGEgbnVtYmVyID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihsZW5ndGgpIHx8IGxlbmd0aCA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJMZW5ndGggbXVzdCBiZSBhIG51bWJlciA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGVuZ3RoICsgb2Zmc2V0ID4gdHJpdHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIG9mZnNldCArIGxlbmd0aCBpcyBiZXlvbmQgdGhlIGxlbmd0aCBvZiB0aGUgdHJpdHNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBsb2NhbE9mZnNldCA9IG9mZnNldDtcclxuICAgICAgICBsZXQgbG9jYWxMZW5ndGggPSBsZW5ndGg7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbWl0ID0gbG9jYWxMZW5ndGggPCBDdXJsLkhBU0hfTEVOR1RIID8gbG9jYWxMZW5ndGggOiBDdXJsLkhBU0hfTEVOR1RIO1xyXG4gICAgICAgICAgICB3aGlsZSAoaSA8IGxpbWl0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZVtpKytdID0gdHJpdHNbbG9jYWxPZmZzZXQrK107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0oKTtcclxuICAgICAgICAgICAgbG9jYWxMZW5ndGggLT0gQ3VybC5IQVNIX0xFTkdUSDtcclxuICAgICAgICB9IHdoaWxlIChsb2NhbExlbmd0aCA+IDApO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTcXVlZXplIHRyaXRzIGludG8gdGhlIGhhc2guXHJcbiAgICAgKiBAcGFyYW0gdHJpdHMgVGhlIHRyaXRzIHRvIHNxdWVlemUuXHJcbiAgICAgKiBAcGFyYW0gb2Zmc2V0IFRoZSBvZmZzZXQgaW50byB0aGUgdHJpdHMgdG8gc3F1ZWV6ZSBmcm9tLlxyXG4gICAgICogQHBhcmFtIGxlbmd0aCBUaGUgbnVtYmVyIG9mIHRyaXRzIHRvIHNxdWVlemUuXHJcbiAgICAgKi9cclxuICAgIHNxdWVlemUodHJpdHMsIG9mZnNldCwgbGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRyaXRzLCBJbnQ4QXJyYXkpIHx8IHRyaXRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRyaXRzIG11c3QgYmUgYSBub24gZW1wdHkgSW50OEFycmF5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIob2Zmc2V0KSB8fCBvZmZzZXQgPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiT2Zmc2V0IG11c3QgYmUgYSBudW1iZXIgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGxlbmd0aCkgfHwgbGVuZ3RoIDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIkxlbmd0aCBtdXN0IGJlIGEgbnVtYmVyID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZW5ndGggKyBvZmZzZXQgPiB0cml0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgb2Zmc2V0ICsgbGVuZ3RoIGlzIGJleW9uZCB0aGUgbGVuZ3RoIG9mIHRoZSB0cml0c1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGxvY2FsT2Zmc2V0ID0gb2Zmc2V0O1xyXG4gICAgICAgIGxldCBsb2NhbExlbmd0aCA9IGxlbmd0aDtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICAgICAgY29uc3QgbGltaXQgPSBsb2NhbExlbmd0aCA8IEN1cmwuSEFTSF9MRU5HVEggPyBsZW5ndGggOiBDdXJsLkhBU0hfTEVOR1RIO1xyXG4gICAgICAgICAgICB3aGlsZSAoaSA8IGxpbWl0KSB7XHJcbiAgICAgICAgICAgICAgICB0cml0c1tsb2NhbE9mZnNldCsrXSA9IHRoaXMuX3N0YXRlW2krK107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0oKTtcclxuICAgICAgICAgICAgbG9jYWxMZW5ndGggLT0gQ3VybC5IQVNIX0xFTkdUSDtcclxuICAgICAgICB9IHdoaWxlIChsb2NhbExlbmd0aCA+IDApO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBUcmFuc2Zvcm0gdGhlIGhhc2guXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgdHJhbnNmb3JtKCkge1xyXG4gICAgICAgIGxldCBzdGF0ZUNvcHk7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICBmb3IgKGxldCByb3VuZCA9IDA7IHJvdW5kIDwgdGhpcy5fbnVtYmVyT2ZSb3VuZHM7IHJvdW5kKyspIHtcclxuICAgICAgICAgICAgc3RhdGVDb3B5ID0gbmV3IEludDhBcnJheSh0aGlzLl9zdGF0ZS5zbGljZSgpKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBDdXJsLlNUQVRFX0xFTkdUSDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZVtpXSA9IEN1cmwuVFJVVEhfVEFCTEVbc3RhdGVDb3B5W2luZGV4XSArIChzdGF0ZUNvcHlbaW5kZXggKz0gKGluZGV4IDwgMzY1ID8gMzY0IDogLTM2NSldIDw8IDIpICsgNV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQ3VybC5IQVNIX0xFTkdUSCA9IDI0MztcclxuQ3VybC5OVU1CRVJfT0ZfUk9VTkRTID0gODE7XHJcbkN1cmwuU1RBVEVfTEVOR1RIID0gQ3VybC5IQVNIX0xFTkdUSCAqIDM7XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5DdXJsLlRSVVRIX1RBQkxFID0gbmV3IEludDhBcnJheShbMSwgMCwgLTEsIDIsIDEsIC0xLCAwLCAyLCAtMSwgMSwgMF0pO1xyXG5leHBvcnRzLkN1cmwgPSBDdXJsO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZM1Z5YkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTl6Y0c5dVoyVnpMMk4xY213dWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTERSRlFVRjVSVHRCUVVONlJTdzBSVUZCZVVVN1FVRkRla1VzYzBSQlFXMUVPMEZCUjI1RU96czdSMEZIUnp0QlFVTklPMGxCWVVrN096dFBRVWRITzBsQlEwZ3NXVUZCV1N4VFFVRnBRaXhKUVVGSkxFTkJRVU1zWjBKQlFXZENPMUZCUXpsRExFbEJRVWtzUTBGQlF5eGxRVUZsTEVkQlFVY3NUVUZCVFN4RFFVRkRPMGxCUTJ4RExFTkJRVU03U1VGRlJEczdPenRQUVVsSE8wbEJRMGtzVjBGQlZ5eERRVUZETEVsQlFWazdVVUZETTBJc1VVRkJVU3hKUVVGSkxFVkJRVVU3V1VGRFZpeExRVUZMTEd0Q1FVRnJRaXhEUVVGRExFTkJRVU03WjBKQlEzSkNMRTlCUVU4c1NVRkJTU3hEUVVGRExHVkJRV1VzUTBGQlF6dGhRVU12UWp0WlFVTkVMRXRCUVVzc1lVRkJZU3hEUVVGRE8xbEJRMjVDTEV0QlFVc3NZMEZCWXp0blFrRkRia0k3YjBKQlEwa3NUMEZCVHl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03YVVKQlEzSkNPMWxCUTBRc1QwRkJUeXhEUVVGRExFTkJRVU1zVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc09FSkJRVGhDTEVsQlFVa3NSVUZCUlN4RFFVRkRMRU5CUVVNN1UwRkRlRVU3U1VGRFRDeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVVVGQlVUdFJRVU5ZTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJRenRKUVVOMlFpeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVlVGQlZTeERRVUZETEV0QlFXbENPMUZCUXk5Q0xFbEJRVWtzUzBGQlN5eEZRVUZGTzFsQlExQXNTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhMUVVGTExFTkJRVU03VTBGRGRrSTdZVUZCVFR0WlFVTklMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzU1VGQlNTeFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRE8xTkJRMnhFTzBsQlEwd3NRMEZCUXp0SlFVVkVPenRQUVVWSE8wbEJRMGtzUzBGQlN6dFJRVU5TTEVsQlFVa3NRMEZCUXl4VlFVRlZMRVZCUVVVc1EwRkJRenRKUVVOMFFpeERRVUZETzBsQlJVUTdPenM3TzA5QlMwYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1MwRkJaMElzUlVGQlJTeE5RVUZqTEVWQlFVVXNUVUZCWXp0UlFVTXhSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhGUVVGRkxGTkJRVk1zUTBGQlF5eEpRVUZKTEV0QlFVc3NRMEZCUXl4TlFVRk5MRXRCUVVzc1EwRkJReXhGUVVGRk8xbEJRemxFTEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExIRkRRVUZ4UXl4RFFVRkRMRU5CUVVNN1UwRkRhRVU3VVVGRFJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NUVUZCVFN4SFFVRkhMRU5CUVVNc1JVRkJSVHRaUVVNdlF5eE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXc0UWtGQk9FSXNRMEZCUXl4RFFVRkRPMU5CUTNwRU8xRkJRMFFzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEUxQlFVMHNSMEZCUnl4RFFVRkRMRVZCUVVVN1dVRkRMME1zVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc09FSkJRVGhDTEVOQlFVTXNRMEZCUXp0VFFVTjZSRHRSUVVORUxFbEJRVWtzVFVGQlRTeEhRVUZITEUxQlFVMHNSMEZCUnl4TFFVRkxMRU5CUVVNc1RVRkJUU3hGUVVGRk8xbEJRMmhETEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExIVkVRVUYxUkN4RFFVRkRMRU5CUVVNN1UwRkRiRVk3VVVGRlJDeEpRVUZKTEZkQlFWY3NSMEZCUnl4TlFVRk5MRU5CUVVNN1VVRkRla0lzU1VGQlNTeFhRVUZYTEVkQlFVY3NUVUZCVFN4RFFVRkRPMUZCUlhwQ0xFZEJRVWM3V1VGRFF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRWaXhOUVVGTkxFdEJRVXNzUjBGQlJ5eFhRVUZYTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRExFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRE8xbEJSVGxGTEU5QlFVOHNRMEZCUXl4SFFVRkhMRXRCUVVzc1JVRkJSVHRuUWtGRFpDeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRMRU5CUVVNN1lVRkRNME03V1VGRlJDeEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRU5CUVVNN1dVRkZha0lzVjBGQlZ5eEpRVUZKTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNN1UwRkRia01zVVVGQlVTeFhRVUZYTEVkQlFVY3NRMEZCUXl4RlFVRkZPMGxCUXpsQ0xFTkJRVU03U1VGRlJEczdPenM3VDBGTFJ6dEpRVU5KTEU5QlFVOHNRMEZCUXl4TFFVRm5RaXhGUVVGRkxFMUJRV01zUlVGQlJTeE5RVUZqTzFGQlF6TkVMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRVZCUVVVc1UwRkJVeXhEUVVGRExFbEJRVWtzUzBGQlN5eERRVUZETEUxQlFVMHNTMEZCU3l4RFFVRkRMRVZCUVVVN1dVRkRPVVFzVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc2NVTkJRWEZETEVOQlFVTXNRMEZCUXp0VFFVTm9SVHRSUVVORUxFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeE5RVUZOTEVkQlFVY3NRMEZCUXl4RlFVRkZPMWxCUXk5RExFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMRGhDUVVFNFFpeERRVUZETEVOQlFVTTdVMEZEZWtRN1VVRkRSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzVFVGQlRTeEhRVUZITEVOQlFVTXNSVUZCUlR0WlFVTXZReXhOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl3NFFrRkJPRUlzUTBGQlF5eERRVUZETzFOQlEzcEVPMUZCUTBRc1NVRkJTU3hOUVVGTkxFZEJRVWNzVFVGQlRTeEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVN1dVRkRhRU1zVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc2RVUkJRWFZFTEVOQlFVTXNRMEZCUXp0VFFVTnNSanRSUVVWRUxFbEJRVWtzVjBGQlZ5eEhRVUZITEUxQlFVMHNRMEZCUXp0UlFVTjZRaXhKUVVGSkxGZEJRVmNzUjBGQlJ5eE5RVUZOTEVOQlFVTTdVVUZGZWtJc1IwRkJSenRaUVVWRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTldMRTFCUVUwc1MwRkJTeXhIUVVGSExGZEJRVmNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNN1dVRkZla1VzVDBGQlR5eERRVUZETEVkQlFVY3NTMEZCU3l4RlFVRkZPMmRDUVVOa0xFdEJRVXNzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0aFFVTXpRenRaUVVWRUxFbEJRVWtzUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUXp0WlFVVnFRaXhYUVVGWExFbEJRVWtzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXp0VFFVTnVReXhSUVVGUkxGZEJRVmNzUjBGQlJ5eERRVUZETEVWQlFVVTdTVUZET1VJc1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTkxMRk5CUVZNN1VVRkRZaXhKUVVGSkxGTkJRVzlDTEVOQlFVTTdVVUZEZWtJc1NVRkJTU3hMUVVGTExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlJXUXNTMEZCU3l4SlFVRkpMRXRCUVVzc1IwRkJSeXhEUVVGRExFVkJRVVVzUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4bFFVRmxMRVZCUVVVc1MwRkJTeXhGUVVGRkxFVkJRVVU3V1VGRGRrUXNVMEZCVXl4SFFVRkhMRWxCUVVrc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVVdlF5eExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEZsQlFWa3NSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRuUWtGRmVFTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEZOQlFWTXNRMEZCUXl4TFFVRkxMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU51U0R0VFFVTktPMGxCUTB3c1EwRkJRenM3UVVFM1NuTkNMR2RDUVVGWExFZEJRVmNzUjBGQlJ5eERRVUZETzBGQlF6RkNMSEZDUVVGblFpeEhRVUZYTEVWQlFVVXNRMEZCUXp0QlFVTTVRaXhwUWtGQldTeEhRVUZYTEVsQlFVa3NRMEZCUXl4WFFVRlhMRWRCUVVjc1EwRkJReXhEUVVGRE8wRkJSVzVGTEdWQlFXVTdRVUZEVXl4blFrRkJWeXhIUVVGakxFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdRVUZPZWtjc2IwSkJLMHBESW4wPSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgbnVtYmVySGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIik7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBzaGEzXzEgPSByZXF1aXJlKFwiLi4vZGlnZXN0cy9zaGEzXCIpO1xyXG5jb25zdCBjcnlwdG9FcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2NyeXB0b0Vycm9yXCIpO1xyXG5jb25zdCBiaWdJbnRlZ2VySGVscGVyXzEgPSByZXF1aXJlKFwiLi4vaGVscGVycy9iaWdJbnRlZ2VySGVscGVyXCIpO1xyXG4vKipcclxuICogSW1wbGVtZW50YXRpb24gb2YgSVNwb25nZSB1c2luZyBLZXJsIGFsZ29yaXRobS5cclxuICogaHR0cHM6Ly9naXRodWIuY29tL2lvdGFsZWRnZXIvaXJpL2Jsb2IvZGV2L3NyYy9tYWluL2phdmEvY29tL2lvdGEvaXJpL2hhc2gvS2VybC5qYXZhXHJcbiAqL1xyXG5jbGFzcyBLZXJsIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEtlcmwuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2tlY2NhayA9IG5ldyBzaGEzXzEuU2hhMygzODQsIHNoYTNfMS5TaGEzLktFQ0NBS19QQURESU5HLCAzODQpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGNvbnN0YW50IGZvciB0aGUgc3BvbmUuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgY29uc3RhbnQgdG8gZ2V0LlxyXG4gICAgICogQHJldHVybnMgVGhlIGNvbnN0YW50LlxyXG4gICAgICovXHJcbiAgICBnZXRDb25zdGFudChuYW1lKSB7XHJcbiAgICAgICAgc3dpdGNoIChuYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJIQVNIX0xFTkdUSFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiQklUX0hBU0hfTEVOR1RIXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJCWVRFX0hBU0hfTEVOR1RIXCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEtlcmxbbmFtZV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKGBVbmtub3duIGNvbnN0YW50IHJlcXVlc3RlZCAke25hbWV9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHN0YXRlLlxyXG4gICAgICogQHJldHVybnMgVGhlIHN0YXRlLlxyXG4gICAgICovXHJcbiAgICBnZXRTdGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXNlIHRoZSBoYXNoZXIuXHJcbiAgICAgKiBAcGFyYW0gc3RhdGUgVGhlIGluaXRpYWwgc3RhdGUgZm9yIHRoZSBoYXNoZXIuXHJcbiAgICAgKi9cclxuICAgIGluaXRpYWxpemUoc3RhdGUpIHtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmVzZXQgdGhlIGhhc2hlci5cclxuICAgICAqL1xyXG4gICAgcmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5fa2VjY2FrLnJlc2V0KCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEFic29yYiB0cml0cyBpbnRvIHRoZSBoYXNoLlxyXG4gICAgICogQHBhcmFtIHRyaXRzIFRoZSB0cml0cyB0byBhYnNvcmIuXHJcbiAgICAgKiBAcGFyYW0gb2Zmc2V0IFRoZSBvZmZzZXQgaW50byB0aGUgdHJpdHMgdG8gYWJzb3JiIGZyb20uXHJcbiAgICAgKiBAcGFyYW0gbGVuZ3RoIFRoZSBudW1iZXIgb2YgdHJpdHMgdG8gYWJzb3JiLlxyXG4gICAgICovXHJcbiAgICBhYnNvcmIodHJpdHMsIG9mZnNldCwgbGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRyaXRzLCBJbnQ4QXJyYXkpIHx8IHRyaXRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRyaXRzIG11c3QgYmUgYSBub24gZW1wdHkgSW50OEFycmF5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIob2Zmc2V0KSB8fCBvZmZzZXQgPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiT2Zmc2V0IG11c3QgYmUgYSBudW1iZXIgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGxlbmd0aCkgfHwgbGVuZ3RoIDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIkxlbmd0aCBtdXN0IGJlIGEgbnVtYmVyID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZW5ndGggKyBvZmZzZXQgPiB0cml0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgb2Zmc2V0ICsgbGVuZ3RoIGlzIGJleW9uZCB0aGUgbGVuZ3RoIG9mIHRoZSB0cml0c1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxlbmd0aCAlIDI0MyAhPT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihgTGVuZ3RoIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAke0tlcmwuSEFTSF9MRU5HVEh9YCwgeyBsZW5ndGggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBsb2NhbE9mZnNldCA9IG9mZnNldDtcclxuICAgICAgICBsZXQgbG9jYWxMZW5ndGggPSBsZW5ndGg7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBjb25zdCB0cml0U3RhdGUgPSB0cml0cy5zbGljZShsb2NhbE9mZnNldCwgbG9jYWxPZmZzZXQgKyBLZXJsLkhBU0hfTEVOR1RIKTtcclxuICAgICAgICAgICAgdHJpdFN0YXRlW0tlcmwuSEFTSF9MRU5HVEggLSAxXSA9IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IGJpZ0ludCA9IGJpZ0ludGVnZXJIZWxwZXJfMS5CaWdJbnRlZ2VySGVscGVyLnRyaXRzVG9CaWdJbnRlZ2VyKHRyaXRTdGF0ZSwgMCwgdHJpdFN0YXRlLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ5dGVTdGF0ZSA9IG5ldyBBcnJheUJ1ZmZlcihLZXJsLkJZVEVfSEFTSF9MRU5HVEgpO1xyXG4gICAgICAgICAgICBiaWdJbnRlZ2VySGVscGVyXzEuQmlnSW50ZWdlckhlbHBlci5iaWdJbnRlZ2VyVG9CeXRlcyhiaWdJbnQsIGJ5dGVTdGF0ZSwgMCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2tlY2Nhay51cGRhdGUoYnl0ZVN0YXRlKTtcclxuICAgICAgICAgICAgbG9jYWxPZmZzZXQgKz0gS2VybC5IQVNIX0xFTkdUSDtcclxuICAgICAgICAgICAgbG9jYWxMZW5ndGggLT0gS2VybC5IQVNIX0xFTkdUSDtcclxuICAgICAgICB9IHdoaWxlIChsb2NhbExlbmd0aCA+IDApO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTcXVlZXplIHRyaXRzIGludG8gdGhlIGhhc2guXHJcbiAgICAgKiBAcGFyYW0gdHJpdHMgVGhlIHRyaXRzIHRvIHNxdWVlemUuXHJcbiAgICAgKiBAcGFyYW0gb2Zmc2V0IFRoZSBvZmZzZXQgaW50byB0aGUgdHJpdHMgdG8gc3F1ZWV6ZSBmcm9tLlxyXG4gICAgICogQHBhcmFtIGxlbmd0aCBUaGUgbnVtYmVyIG9mIHRyaXRzIHRvIHNxdWVlemUuXHJcbiAgICAgKi9cclxuICAgIHNxdWVlemUodHJpdHMsIG9mZnNldCwgbGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRyaXRzLCBJbnQ4QXJyYXkpIHx8IHRyaXRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRyaXRzIG11c3QgYmUgYSBub24gZW1wdHkgSW50OEFycmF5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIob2Zmc2V0KSB8fCBvZmZzZXQgPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiT2Zmc2V0IG11c3QgYmUgYSBudW1iZXIgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGxlbmd0aCkgfHwgbGVuZ3RoIDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIkxlbmd0aCBtdXN0IGJlIGEgbnVtYmVyID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZW5ndGggKyBvZmZzZXQgPiB0cml0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgb2Zmc2V0ICsgbGVuZ3RoIGlzIGJleW9uZCB0aGUgbGVuZ3RoIG9mIHRoZSB0cml0c1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxlbmd0aCAlIDI0MyAhPT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihgTGVuZ3RoIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAke0tlcmwuSEFTSF9MRU5HVEh9YCwgeyBsZW5ndGggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBsb2NhbE9mZnNldCA9IG9mZnNldDtcclxuICAgICAgICBsZXQgbG9jYWxMZW5ndGggPSBsZW5ndGg7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBjb25zdCBieXRlU3RhdGVCdWZmZXIgPSB0aGlzLl9rZWNjYWsuZGlnZXN0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJpZ0ludCA9IGJpZ0ludGVnZXJIZWxwZXJfMS5CaWdJbnRlZ2VySGVscGVyLmJ5dGVzVG9CaWdJbnRlZ2VyKGJ5dGVTdGF0ZUJ1ZmZlciwgMCwgS2VybC5CWVRFX0hBU0hfTEVOR1RIKTtcclxuICAgICAgICAgICAgY29uc3QgdHJpdFN0YXRlID0gbmV3IEludDhBcnJheShLZXJsLkhBU0hfTEVOR1RIKTtcclxuICAgICAgICAgICAgYmlnSW50ZWdlckhlbHBlcl8xLkJpZ0ludGVnZXJIZWxwZXIuYmlnSW50ZWdlclRvVHJpdHMoYmlnSW50LCB0cml0U3RhdGUsIDAsIEtlcmwuSEFTSF9MRU5HVEgpO1xyXG4gICAgICAgICAgICB0cml0U3RhdGVbS2VybC5IQVNIX0xFTkdUSCAtIDFdID0gMDtcclxuICAgICAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgICAgICB3aGlsZSAoaSA8IEtlcmwuSEFTSF9MRU5HVEgpIHtcclxuICAgICAgICAgICAgICAgIHRyaXRzW2xvY2FsT2Zmc2V0KytdID0gdHJpdFN0YXRlW2krK107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgZHYgPSBuZXcgRGF0YVZpZXcoYnl0ZVN0YXRlQnVmZmVyKTtcclxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGR2LmJ5dGVMZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZHYuc2V0VWludDgoaSwgZHYuZ2V0VWludDgoaSkgXiAweEZGKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9rZWNjYWsudXBkYXRlKGJ5dGVTdGF0ZUJ1ZmZlcik7XHJcbiAgICAgICAgICAgIGxvY2FsTGVuZ3RoIC09IEtlcmwuSEFTSF9MRU5HVEg7XHJcbiAgICAgICAgfSB3aGlsZSAobG9jYWxMZW5ndGggPiAwKTtcclxuICAgIH1cclxufVxyXG4vKiBAaW50ZXJuYWwgKi9cclxuS2VybC5IQVNIX0xFTkdUSCA9IDI0MztcclxuLyogQGludGVybmFsICovXHJcbktlcmwuQklUX0hBU0hfTEVOR1RIID0gMzg0O1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuS2VybC5CWVRFX0hBU0hfTEVOR1RIID0gS2VybC5CSVRfSEFTSF9MRU5HVEggLyA4O1xyXG5leHBvcnRzLktlcmwgPSBLZXJsO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhMlZ5YkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTl6Y0c5dVoyVnpMMnRsY213dWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTERSRlFVRjVSVHRCUVVONlJTdzBSVUZCZVVVN1FVRkRla1VzTUVOQlFYVkRPMEZCUTNaRExITkVRVUZ0UkR0QlFVTnVSQ3hyUlVGQkswUTdRVUZITDBRN096dEhRVWRITzBGQlEwZzdTVUZYU1RzN1QwRkZSenRKUVVOSU8xRkJRMGtzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4SlFVRkpMRmRCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzVjBGQlNTeERRVUZETEdOQlFXTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRKUVVNelJDeERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEZkQlFWY3NRMEZCUXl4SlFVRlpPMUZCUXpOQ0xGRkJRVkVzU1VGQlNTeEZRVUZGTzFsQlExWXNTMEZCU3l4aFFVRmhMRU5CUVVNN1dVRkRia0lzUzBGQlN5eHBRa0ZCYVVJc1EwRkJRenRaUVVOMlFpeExRVUZMTEd0Q1FVRnJRanRuUWtGRGRrSTdiMEpCUTBrc1QwRkJUeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdhVUpCUTNKQ08xbEJRMFFzVDBGQlR5eERRVUZETEVOQlFVTXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zT0VKQlFUaENMRWxCUVVrc1JVRkJSU3hEUVVGRExFTkJRVU03VTBGRGVFVTdTVUZEVEN4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NVVUZCVVR0UlFVTllMRTlCUVU4c1UwRkJVeXhEUVVGRE8wbEJRM0pDTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeFZRVUZWTEVOQlFVTXNTMEZCYVVJN1NVRkRia01zUTBGQlF6dEpRVVZFT3p0UFFVVkhPMGxCUTBrc1MwRkJTenRSUVVOU0xFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN1NVRkRla0lzUTBGQlF6dEpRVVZFT3pzN096dFBRVXRITzBsQlEwa3NUVUZCVFN4RFFVRkRMRXRCUVdkQ0xFVkJRVVVzVFVGQll5eEZRVUZGTEUxQlFXTTdVVUZETVVRc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1JVRkJSU3hUUVVGVExFTkJRVU1zU1VGQlNTeExRVUZMTEVOQlFVTXNUVUZCVFN4TFFVRkxMRU5CUVVNc1JVRkJSVHRaUVVNNVJDeE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXh4UTBGQmNVTXNRMEZCUXl4RFFVRkRPMU5CUTJoRk8xRkJRMFFzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEUxQlFVMHNSMEZCUnl4RFFVRkRMRVZCUVVVN1dVRkRMME1zVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc09FSkJRVGhDTEVOQlFVTXNRMEZCUXp0VFFVTjZSRHRSUVVORUxFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeE5RVUZOTEVkQlFVY3NRMEZCUXl4RlFVRkZPMWxCUXk5RExFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMRGhDUVVFNFFpeERRVUZETEVOQlFVTTdVMEZEZWtRN1VVRkRSQ3hKUVVGSkxFMUJRVTBzUjBGQlJ5eE5RVUZOTEVkQlFVY3NTMEZCU3l4RFFVRkRMRTFCUVUwc1JVRkJSVHRaUVVOb1F5eE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXgxUkVGQmRVUXNRMEZCUXl4RFFVRkRPMU5CUTJ4R08xRkJRMFFzU1VGQlNTeE5RVUZOTEVkQlFVY3NSMEZCUnl4TFFVRkxMRU5CUVVNc1JVRkJSVHRaUVVOd1FpeE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXhuUTBGQlowTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSU3hGUVVGRkxFVkJRVVVzVFVGQlRTeEZRVUZGTEVOQlFVTXNRMEZCUXp0VFFVTjZSanRSUVVWRUxFbEJRVWtzVjBGQlZ5eEhRVUZITEUxQlFVMHNRMEZCUXp0UlFVTjZRaXhKUVVGSkxGZEJRVmNzUjBGQlJ5eE5RVUZOTEVOQlFVTTdVVUZGZWtJc1IwRkJSenRaUVVORExFMUJRVTBzVTBGQlV5eEhRVUZITEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1YwRkJWeXhGUVVGRkxGZEJRVmNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN1dVRkZNMFVzVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlEzQkRMRTFCUVUwc1RVRkJUU3hIUVVGSExHMURRVUZuUWl4RFFVRkRMR2xDUVVGcFFpeERRVUZETEZOQlFWTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1UwRkJVeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFsQlEyeEdMRTFCUVUwc1UwRkJVeXhIUVVGSExFbEJRVWtzVjBGQlZ5eERRVUZETEVsQlFVa3NRMEZCUXl4blFrRkJaMElzUTBGQlF5eERRVUZETzFsQlEzcEVMRzFEUVVGblFpeERRVUZETEdsQ1FVRnBRaXhEUVVGRExFMUJRVTBzUlVGQlJTeFRRVUZUTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkZla1FzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03V1VGRkwwSXNWMEZCVnl4SlFVRkpMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU03V1VGRGFFTXNWMEZCVnl4SlFVRkpMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU03VTBGRGJrTXNVVUZCVVN4WFFVRlhMRWRCUVVjc1EwRkJReXhGUVVGRk8wbEJRemxDTEVOQlFVTTdTVUZGUkRzN096czdUMEZMUnp0SlFVTkpMRTlCUVU4c1EwRkJReXhMUVVGblFpeEZRVUZGTEUxQlFXTXNSVUZCUlN4TlFVRmpPMUZCUXpORUxFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFVkJRVVVzVTBGQlV5eERRVUZETEVsQlFVa3NTMEZCU3l4RFFVRkRMRTFCUVUwc1MwRkJTeXhEUVVGRExFVkJRVVU3V1VGRE9VUXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zY1VOQlFYRkRMRU5CUVVNc1EwRkJRenRUUVVOb1JUdFJRVU5FTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExGTkJRVk1zUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4TlFVRk5MRWRCUVVjc1EwRkJReXhGUVVGRk8xbEJReTlETEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExEaENRVUU0UWl4RFFVRkRMRU5CUVVNN1UwRkRla1E3VVVGRFJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NUVUZCVFN4SFFVRkhMRU5CUVVNc1JVRkJSVHRaUVVNdlF5eE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXc0UWtGQk9FSXNRMEZCUXl4RFFVRkRPMU5CUTNwRU8xRkJRMFFzU1VGQlNTeE5RVUZOTEVkQlFVY3NUVUZCVFN4SFFVRkhMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVU3V1VGRGFFTXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zZFVSQlFYVkVMRU5CUVVNc1EwRkJRenRUUVVOc1JqdFJRVU5FTEVsQlFVa3NUVUZCVFN4SFFVRkhMRWRCUVVjc1MwRkJTeXhEUVVGRExFVkJRVVU3V1VGRGNFSXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zWjBOQlFXZERMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUlVGQlJTeEZRVUZGTEUxQlFVMHNSVUZCUlN4RFFVRkRMRU5CUVVNN1UwRkRla1k3VVVGRlJDeEpRVUZKTEZkQlFWY3NSMEZCUnl4TlFVRk5MRU5CUVVNN1VVRkRla0lzU1VGQlNTeFhRVUZYTEVkQlFVY3NUVUZCVFN4RFFVRkRPMUZCUlhwQ0xFZEJRVWM3V1VGRFF5eE5RVUZOTEdWQlFXVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETzFsQlJUbERMRTFCUVUwc1RVRkJUU3hIUVVGSExHMURRVUZuUWl4RFFVRkRMR2xDUVVGcFFpeERRVUZETEdWQlFXVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRU5CUVVNN1dVRkZOMFlzVFVGQlRTeFRRVUZUTEVkQlFXTXNTVUZCU1N4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETzFsQlF6ZEVMRzFEUVVGblFpeERRVUZETEdsQ1FVRnBRaXhEUVVGRExFMUJRVTBzUlVGQlJTeFRRVUZUTEVWQlFVVXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF6dFpRVVV6UlN4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkZjRU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUTFZc1QwRkJUeXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlR0blFrRkRla0lzUzBGQlN5eERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRMRWRCUVVjc1UwRkJVeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdZVUZEZWtNN1dVRkZSQ3hOUVVGTkxFVkJRVVVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXl4bFFVRmxMRU5CUVVNc1EwRkJRenRaUVVONlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF5eFZRVUZWTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1owSkJRMmhETEVWQlFVVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU03WVVGRGVrTTdXVUZGUkN4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF5eGxRVUZsTEVOQlFVTXNRMEZCUXp0WlFVVnlReXhYUVVGWExFbEJRVWtzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXp0VFFVTnVReXhSUVVGUkxGZEJRVmNzUjBGQlJ5eERRVUZETEVWQlFVVTdTVUZET1VJc1EwRkJRenM3UVVGdVNrUXNaVUZCWlR0QlFVTlRMR2RDUVVGWExFZEJRVmNzUjBGQlJ5eERRVUZETzBGQlEyeEVMR1ZCUVdVN1FVRkRVeXh2UWtGQlpTeEhRVUZYTEVkQlFVY3NRMEZCUXp0QlFVTjBSQ3hsUVVGbE8wRkJRMU1zY1VKQlFXZENMRWRCUVZjc1NVRkJTU3hEUVVGRExHVkJRV1VzUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZPYUVZc2IwSkJjVXBESW4wPSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCJ2YXIgYmlnSW50ID0gKGZ1bmN0aW9uICh1bmRlZmluZWQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgIHZhciBCQVNFID0gMWU3LFxyXG4gICAgICAgIExPR19CQVNFID0gNyxcclxuICAgICAgICBNQVhfSU5UID0gOTAwNzE5OTI1NDc0MDk5MixcclxuICAgICAgICBNQVhfSU5UX0FSUiA9IHNtYWxsVG9BcnJheShNQVhfSU5UKSxcclxuICAgICAgICBMT0dfTUFYX0lOVCA9IE1hdGgubG9nKE1BWF9JTlQpO1xyXG5cclxuICAgIGZ1bmN0aW9uIEludGVnZXIodiwgcmFkaXgpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHYgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBJbnRlZ2VyWzBdO1xyXG4gICAgICAgIGlmICh0eXBlb2YgcmFkaXggIT09IFwidW5kZWZpbmVkXCIpIHJldHVybiArcmFkaXggPT09IDEwID8gcGFyc2VWYWx1ZSh2KSA6IHBhcnNlQmFzZSh2LCByYWRpeCk7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlVmFsdWUodik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gQmlnSW50ZWdlcih2YWx1ZSwgc2lnbikge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnNpZ24gPSBzaWduO1xyXG4gICAgICAgIHRoaXMuaXNTbWFsbCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEludGVnZXIucHJvdG90eXBlKTtcclxuXHJcbiAgICBmdW5jdGlvbiBTbWFsbEludGVnZXIodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5zaWduID0gdmFsdWUgPCAwO1xyXG4gICAgICAgIHRoaXMuaXNTbWFsbCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJbnRlZ2VyLnByb3RvdHlwZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaXNQcmVjaXNlKG4pIHtcclxuICAgICAgICByZXR1cm4gLU1BWF9JTlQgPCBuICYmIG4gPCBNQVhfSU5UO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNtYWxsVG9BcnJheShuKSB7IC8vIEZvciBwZXJmb3JtYW5jZSByZWFzb25zIGRvZXNuJ3QgcmVmZXJlbmNlIEJBU0UsIG5lZWQgdG8gY2hhbmdlIHRoaXMgZnVuY3Rpb24gaWYgQkFTRSBjaGFuZ2VzXHJcbiAgICAgICAgaWYgKG4gPCAxZTcpXHJcbiAgICAgICAgICAgIHJldHVybiBbbl07XHJcbiAgICAgICAgaWYgKG4gPCAxZTE0KVxyXG4gICAgICAgICAgICByZXR1cm4gW24gJSAxZTcsIE1hdGguZmxvb3IobiAvIDFlNyldO1xyXG4gICAgICAgIHJldHVybiBbbiAlIDFlNywgTWF0aC5mbG9vcihuIC8gMWU3KSAlIDFlNywgTWF0aC5mbG9vcihuIC8gMWUxNCldO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFycmF5VG9TbWFsbChhcnIpIHsgLy8gSWYgQkFTRSBjaGFuZ2VzIHRoaXMgZnVuY3Rpb24gbWF5IG5lZWQgdG8gY2hhbmdlXHJcbiAgICAgICAgdHJpbShhcnIpO1xyXG4gICAgICAgIHZhciBsZW5ndGggPSBhcnIubGVuZ3RoO1xyXG4gICAgICAgIGlmIChsZW5ndGggPCA0ICYmIGNvbXBhcmVBYnMoYXJyLCBNQVhfSU5UX0FSUikgPCAwKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAobGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiAwO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gYXJyWzBdO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gYXJyWzBdICsgYXJyWzFdICogQkFTRTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBhcnJbMF0gKyAoYXJyWzFdICsgYXJyWzJdICogQkFTRSkgKiBCQVNFO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnI7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdHJpbSh2KSB7XHJcbiAgICAgICAgdmFyIGkgPSB2Lmxlbmd0aDtcclxuICAgICAgICB3aGlsZSAodlstLWldID09PSAwKTtcclxuICAgICAgICB2Lmxlbmd0aCA9IGkgKyAxO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUFycmF5KGxlbmd0aCkgeyAvLyBmdW5jdGlvbiBzaGFtZWxlc3NseSBzdG9sZW4gZnJvbSBZYWZmbGUncyBsaWJyYXJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9ZYWZmbGUvQmlnSW50ZWdlclxyXG4gICAgICAgIHZhciB4ID0gbmV3IEFycmF5KGxlbmd0aCk7XHJcbiAgICAgICAgdmFyIGkgPSAtMTtcclxuICAgICAgICB3aGlsZSAoKytpIDwgbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHhbaV0gPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0cnVuY2F0ZShuKSB7XHJcbiAgICAgICAgaWYgKG4gPiAwKSByZXR1cm4gTWF0aC5mbG9vcihuKTtcclxuICAgICAgICByZXR1cm4gTWF0aC5jZWlsKG4pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZChhLCBiKSB7IC8vIGFzc3VtZXMgYSBhbmQgYiBhcmUgYXJyYXlzIHdpdGggYS5sZW5ndGggPj0gYi5sZW5ndGhcclxuICAgICAgICB2YXIgbF9hID0gYS5sZW5ndGgsXHJcbiAgICAgICAgICAgIGxfYiA9IGIubGVuZ3RoLFxyXG4gICAgICAgICAgICByID0gbmV3IEFycmF5KGxfYSksXHJcbiAgICAgICAgICAgIGNhcnJ5ID0gMCxcclxuICAgICAgICAgICAgYmFzZSA9IEJBU0UsXHJcbiAgICAgICAgICAgIHN1bSwgaTtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbF9iOyBpKyspIHtcclxuICAgICAgICAgICAgc3VtID0gYVtpXSArIGJbaV0gKyBjYXJyeTtcclxuICAgICAgICAgICAgY2FycnkgPSBzdW0gPj0gYmFzZSA/IDEgOiAwO1xyXG4gICAgICAgICAgICByW2ldID0gc3VtIC0gY2FycnkgKiBiYXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAoaSA8IGxfYSkge1xyXG4gICAgICAgICAgICBzdW0gPSBhW2ldICsgY2Fycnk7XHJcbiAgICAgICAgICAgIGNhcnJ5ID0gc3VtID09PSBiYXNlID8gMSA6IDA7XHJcbiAgICAgICAgICAgIHJbaSsrXSA9IHN1bSAtIGNhcnJ5ICogYmFzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNhcnJ5ID4gMCkgci5wdXNoKGNhcnJ5KTtcclxuICAgICAgICByZXR1cm4gcjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRBbnkoYSwgYikge1xyXG4gICAgICAgIGlmIChhLmxlbmd0aCA+PSBiLmxlbmd0aCkgcmV0dXJuIGFkZChhLCBiKTtcclxuICAgICAgICByZXR1cm4gYWRkKGIsIGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZFNtYWxsKGEsIGNhcnJ5KSB7IC8vIGFzc3VtZXMgYSBpcyBhcnJheSwgY2FycnkgaXMgbnVtYmVyIHdpdGggMCA8PSBjYXJyeSA8IE1BWF9JTlRcclxuICAgICAgICB2YXIgbCA9IGEubGVuZ3RoLFxyXG4gICAgICAgICAgICByID0gbmV3IEFycmF5KGwpLFxyXG4gICAgICAgICAgICBiYXNlID0gQkFTRSxcclxuICAgICAgICAgICAgc3VtLCBpO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgc3VtID0gYVtpXSAtIGJhc2UgKyBjYXJyeTtcclxuICAgICAgICAgICAgY2FycnkgPSBNYXRoLmZsb29yKHN1bSAvIGJhc2UpO1xyXG4gICAgICAgICAgICByW2ldID0gc3VtIC0gY2FycnkgKiBiYXNlO1xyXG4gICAgICAgICAgICBjYXJyeSArPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAoY2FycnkgPiAwKSB7XHJcbiAgICAgICAgICAgIHJbaSsrXSA9IGNhcnJ5ICUgYmFzZTtcclxuICAgICAgICAgICAgY2FycnkgPSBNYXRoLmZsb29yKGNhcnJ5IC8gYmFzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByO1xyXG4gICAgfVxyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgdmFyIG4gPSBwYXJzZVZhbHVlKHYpO1xyXG4gICAgICAgIGlmICh0aGlzLnNpZ24gIT09IG4uc2lnbikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdWJ0cmFjdChuLm5lZ2F0ZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGEgPSB0aGlzLnZhbHVlLCBiID0gbi52YWx1ZTtcclxuICAgICAgICBpZiAobi5pc1NtYWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQmlnSW50ZWdlcihhZGRTbWFsbChhLCBNYXRoLmFicyhiKSksIHRoaXMuc2lnbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgQmlnSW50ZWdlcihhZGRBbnkoYSwgYiksIHRoaXMuc2lnbik7XHJcbiAgICB9O1xyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUucGx1cyA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmFkZDtcclxuXHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgdmFyIG4gPSBwYXJzZVZhbHVlKHYpO1xyXG4gICAgICAgIHZhciBhID0gdGhpcy52YWx1ZTtcclxuICAgICAgICBpZiAoYSA8IDAgIT09IG4uc2lnbikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdWJ0cmFjdChuLm5lZ2F0ZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGIgPSBuLnZhbHVlO1xyXG4gICAgICAgIGlmIChuLmlzU21hbGwpIHtcclxuICAgICAgICAgICAgaWYgKGlzUHJlY2lzZShhICsgYikpIHJldHVybiBuZXcgU21hbGxJbnRlZ2VyKGEgKyBiKTtcclxuICAgICAgICAgICAgYiA9IHNtYWxsVG9BcnJheShNYXRoLmFicyhiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgQmlnSW50ZWdlcihhZGRTbWFsbChiLCBNYXRoLmFicyhhKSksIGEgPCAwKTtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLnBsdXMgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLmFkZDtcclxuXHJcbiAgICBmdW5jdGlvbiBzdWJ0cmFjdChhLCBiKSB7IC8vIGFzc3VtZXMgYSBhbmQgYiBhcmUgYXJyYXlzIHdpdGggYSA+PSBiXHJcbiAgICAgICAgdmFyIGFfbCA9IGEubGVuZ3RoLFxyXG4gICAgICAgICAgICBiX2wgPSBiLmxlbmd0aCxcclxuICAgICAgICAgICAgciA9IG5ldyBBcnJheShhX2wpLFxyXG4gICAgICAgICAgICBib3Jyb3cgPSAwLFxyXG4gICAgICAgICAgICBiYXNlID0gQkFTRSxcclxuICAgICAgICAgICAgaSwgZGlmZmVyZW5jZTtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYl9sOyBpKyspIHtcclxuICAgICAgICAgICAgZGlmZmVyZW5jZSA9IGFbaV0gLSBib3Jyb3cgLSBiW2ldO1xyXG4gICAgICAgICAgICBpZiAoZGlmZmVyZW5jZSA8IDApIHtcclxuICAgICAgICAgICAgICAgIGRpZmZlcmVuY2UgKz0gYmFzZTtcclxuICAgICAgICAgICAgICAgIGJvcnJvdyA9IDE7XHJcbiAgICAgICAgICAgIH0gZWxzZSBib3Jyb3cgPSAwO1xyXG4gICAgICAgICAgICByW2ldID0gZGlmZmVyZW5jZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChpID0gYl9sOyBpIDwgYV9sOyBpKyspIHtcclxuICAgICAgICAgICAgZGlmZmVyZW5jZSA9IGFbaV0gLSBib3Jyb3c7XHJcbiAgICAgICAgICAgIGlmIChkaWZmZXJlbmNlIDwgMCkgZGlmZmVyZW5jZSArPSBiYXNlO1xyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJbaSsrXSA9IGRpZmZlcmVuY2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByW2ldID0gZGlmZmVyZW5jZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICg7IGkgPCBhX2w7IGkrKykge1xyXG4gICAgICAgICAgICByW2ldID0gYVtpXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJpbShyKTtcclxuICAgICAgICByZXR1cm4gcjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdWJ0cmFjdEFueShhLCBiLCBzaWduKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlO1xyXG4gICAgICAgIGlmIChjb21wYXJlQWJzKGEsIGIpID49IDApIHtcclxuICAgICAgICAgICAgdmFsdWUgPSBzdWJ0cmFjdChhLCBiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHN1YnRyYWN0KGIsIGEpO1xyXG4gICAgICAgICAgICBzaWduID0gIXNpZ247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhbHVlID0gYXJyYXlUb1NtYWxsKHZhbHVlKTtcclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIGlmIChzaWduKSB2YWx1ZSA9IC12YWx1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTbWFsbEludGVnZXIodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IEJpZ0ludGVnZXIodmFsdWUsIHNpZ24pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN1YnRyYWN0U21hbGwoYSwgYiwgc2lnbikgeyAvLyBhc3N1bWVzIGEgaXMgYXJyYXksIGIgaXMgbnVtYmVyIHdpdGggMCA8PSBiIDwgTUFYX0lOVFxyXG4gICAgICAgIHZhciBsID0gYS5sZW5ndGgsXHJcbiAgICAgICAgICAgIHIgPSBuZXcgQXJyYXkobCksXHJcbiAgICAgICAgICAgIGNhcnJ5ID0gLWIsXHJcbiAgICAgICAgICAgIGJhc2UgPSBCQVNFLFxyXG4gICAgICAgICAgICBpLCBkaWZmZXJlbmNlO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgZGlmZmVyZW5jZSA9IGFbaV0gKyBjYXJyeTtcclxuICAgICAgICAgICAgY2FycnkgPSBNYXRoLmZsb29yKGRpZmZlcmVuY2UgLyBiYXNlKTtcclxuICAgICAgICAgICAgZGlmZmVyZW5jZSAlPSBiYXNlO1xyXG4gICAgICAgICAgICByW2ldID0gZGlmZmVyZW5jZSA8IDAgPyBkaWZmZXJlbmNlICsgYmFzZSA6IGRpZmZlcmVuY2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHIgPSBhcnJheVRvU21hbGwocik7XHJcbiAgICAgICAgaWYgKHR5cGVvZiByID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIGlmIChzaWduKSByID0gLXI7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgU21hbGxJbnRlZ2VyKHIpO1xyXG4gICAgICAgIH0gcmV0dXJuIG5ldyBCaWdJbnRlZ2VyKHIsIHNpZ24pO1xyXG4gICAgfVxyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnN1YnRyYWN0ID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICB2YXIgbiA9IHBhcnNlVmFsdWUodik7XHJcbiAgICAgICAgaWYgKHRoaXMuc2lnbiAhPT0gbi5zaWduKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZChuLm5lZ2F0ZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGEgPSB0aGlzLnZhbHVlLCBiID0gbi52YWx1ZTtcclxuICAgICAgICBpZiAobi5pc1NtYWxsKVxyXG4gICAgICAgICAgICByZXR1cm4gc3VidHJhY3RTbWFsbChhLCBNYXRoLmFicyhiKSwgdGhpcy5zaWduKTtcclxuICAgICAgICByZXR1cm4gc3VidHJhY3RBbnkoYSwgYiwgdGhpcy5zaWduKTtcclxuICAgIH07XHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5taW51cyA9IEJpZ0ludGVnZXIucHJvdG90eXBlLnN1YnRyYWN0O1xyXG5cclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUuc3VidHJhY3QgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHZhciBuID0gcGFyc2VWYWx1ZSh2KTtcclxuICAgICAgICB2YXIgYSA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgaWYgKGEgPCAwICE9PSBuLnNpZ24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRkKG4ubmVnYXRlKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYiA9IG4udmFsdWU7XHJcbiAgICAgICAgaWYgKG4uaXNTbWFsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFNtYWxsSW50ZWdlcihhIC0gYik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdWJ0cmFjdFNtYWxsKGIsIE1hdGguYWJzKGEpLCBhID49IDApO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUubWludXMgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLnN1YnRyYWN0O1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm5lZ2F0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEJpZ0ludGVnZXIodGhpcy52YWx1ZSwgIXRoaXMuc2lnbik7XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5uZWdhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHNpZ24gPSB0aGlzLnNpZ247XHJcbiAgICAgICAgdmFyIHNtYWxsID0gbmV3IFNtYWxsSW50ZWdlcigtdGhpcy52YWx1ZSk7XHJcbiAgICAgICAgc21hbGwuc2lnbiA9ICFzaWduO1xyXG4gICAgICAgIHJldHVybiBzbWFsbDtcclxuICAgIH07XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYWJzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQmlnSW50ZWdlcih0aGlzLnZhbHVlLCBmYWxzZSk7XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5hYnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTbWFsbEludGVnZXIoTWF0aC5hYnModGhpcy52YWx1ZSkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBtdWx0aXBseUxvbmcoYSwgYikge1xyXG4gICAgICAgIHZhciBhX2wgPSBhLmxlbmd0aCxcclxuICAgICAgICAgICAgYl9sID0gYi5sZW5ndGgsXHJcbiAgICAgICAgICAgIGwgPSBhX2wgKyBiX2wsXHJcbiAgICAgICAgICAgIHIgPSBjcmVhdGVBcnJheShsKSxcclxuICAgICAgICAgICAgYmFzZSA9IEJBU0UsXHJcbiAgICAgICAgICAgIHByb2R1Y3QsIGNhcnJ5LCBpLCBhX2ksIGJfajtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYV9sOyArK2kpIHtcclxuICAgICAgICAgICAgYV9pID0gYVtpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBiX2w7ICsraikge1xyXG4gICAgICAgICAgICAgICAgYl9qID0gYltqXTtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3QgPSBhX2kgKiBiX2ogKyByW2kgKyBqXTtcclxuICAgICAgICAgICAgICAgIGNhcnJ5ID0gTWF0aC5mbG9vcihwcm9kdWN0IC8gYmFzZSk7XHJcbiAgICAgICAgICAgICAgICByW2kgKyBqXSA9IHByb2R1Y3QgLSBjYXJyeSAqIGJhc2U7XHJcbiAgICAgICAgICAgICAgICByW2kgKyBqICsgMV0gKz0gY2Fycnk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdHJpbShyKTtcclxuICAgICAgICByZXR1cm4gcjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtdWx0aXBseVNtYWxsKGEsIGIpIHsgLy8gYXNzdW1lcyBhIGlzIGFycmF5LCBiIGlzIG51bWJlciB3aXRoIHxifCA8IEJBU0VcclxuICAgICAgICB2YXIgbCA9IGEubGVuZ3RoLFxyXG4gICAgICAgICAgICByID0gbmV3IEFycmF5KGwpLFxyXG4gICAgICAgICAgICBiYXNlID0gQkFTRSxcclxuICAgICAgICAgICAgY2FycnkgPSAwLFxyXG4gICAgICAgICAgICBwcm9kdWN0LCBpO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgcHJvZHVjdCA9IGFbaV0gKiBiICsgY2Fycnk7XHJcbiAgICAgICAgICAgIGNhcnJ5ID0gTWF0aC5mbG9vcihwcm9kdWN0IC8gYmFzZSk7XHJcbiAgICAgICAgICAgIHJbaV0gPSBwcm9kdWN0IC0gY2FycnkgKiBiYXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAoY2FycnkgPiAwKSB7XHJcbiAgICAgICAgICAgIHJbaSsrXSA9IGNhcnJ5ICUgYmFzZTtcclxuICAgICAgICAgICAgY2FycnkgPSBNYXRoLmZsb29yKGNhcnJ5IC8gYmFzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNoaWZ0TGVmdCh4LCBuKSB7XHJcbiAgICAgICAgdmFyIHIgPSBbXTtcclxuICAgICAgICB3aGlsZSAobi0tID4gMCkgci5wdXNoKDApO1xyXG4gICAgICAgIHJldHVybiByLmNvbmNhdCh4KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtdWx0aXBseUthcmF0c3ViYSh4LCB5KSB7XHJcbiAgICAgICAgdmFyIG4gPSBNYXRoLm1heCh4Lmxlbmd0aCwgeS5sZW5ndGgpO1xyXG5cclxuICAgICAgICBpZiAobiA8PSAzMCkgcmV0dXJuIG11bHRpcGx5TG9uZyh4LCB5KTtcclxuICAgICAgICBuID0gTWF0aC5jZWlsKG4gLyAyKTtcclxuXHJcbiAgICAgICAgdmFyIGIgPSB4LnNsaWNlKG4pLFxyXG4gICAgICAgICAgICBhID0geC5zbGljZSgwLCBuKSxcclxuICAgICAgICAgICAgZCA9IHkuc2xpY2UobiksXHJcbiAgICAgICAgICAgIGMgPSB5LnNsaWNlKDAsIG4pO1xyXG5cclxuICAgICAgICB2YXIgYWMgPSBtdWx0aXBseUthcmF0c3ViYShhLCBjKSxcclxuICAgICAgICAgICAgYmQgPSBtdWx0aXBseUthcmF0c3ViYShiLCBkKSxcclxuICAgICAgICAgICAgYWJjZCA9IG11bHRpcGx5S2FyYXRzdWJhKGFkZEFueShhLCBiKSwgYWRkQW55KGMsIGQpKTtcclxuXHJcbiAgICAgICAgdmFyIHByb2R1Y3QgPSBhZGRBbnkoYWRkQW55KGFjLCBzaGlmdExlZnQoc3VidHJhY3Qoc3VidHJhY3QoYWJjZCwgYWMpLCBiZCksIG4pKSwgc2hpZnRMZWZ0KGJkLCAyICogbikpO1xyXG4gICAgICAgIHRyaW0ocHJvZHVjdCk7XHJcbiAgICAgICAgcmV0dXJuIHByb2R1Y3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGhlIGZvbGxvd2luZyBmdW5jdGlvbiBpcyBkZXJpdmVkIGZyb20gYSBzdXJmYWNlIGZpdCBvZiBhIGdyYXBoIHBsb3R0aW5nIHRoZSBwZXJmb3JtYW5jZSBkaWZmZXJlbmNlXHJcbiAgICAvLyBiZXR3ZWVuIGxvbmcgbXVsdGlwbGljYXRpb24gYW5kIGthcmF0c3ViYSBtdWx0aXBsaWNhdGlvbiB2ZXJzdXMgdGhlIGxlbmd0aHMgb2YgdGhlIHR3byBhcnJheXMuXHJcbiAgICBmdW5jdGlvbiB1c2VLYXJhdHN1YmEobDEsIGwyKSB7XHJcbiAgICAgICAgcmV0dXJuIC0wLjAxMiAqIGwxIC0gMC4wMTIgKiBsMiArIDAuMDAwMDE1ICogbDEgKiBsMiA+IDA7XHJcbiAgICB9XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubXVsdGlwbHkgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHZhciBuID0gcGFyc2VWYWx1ZSh2KSxcclxuICAgICAgICAgICAgYSA9IHRoaXMudmFsdWUsIGIgPSBuLnZhbHVlLFxyXG4gICAgICAgICAgICBzaWduID0gdGhpcy5zaWduICE9PSBuLnNpZ24sXHJcbiAgICAgICAgICAgIGFicztcclxuICAgICAgICBpZiAobi5pc1NtYWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChiID09PSAwKSByZXR1cm4gSW50ZWdlclswXTtcclxuICAgICAgICAgICAgaWYgKGIgPT09IDEpIHJldHVybiB0aGlzO1xyXG4gICAgICAgICAgICBpZiAoYiA9PT0gLTEpIHJldHVybiB0aGlzLm5lZ2F0ZSgpO1xyXG4gICAgICAgICAgICBhYnMgPSBNYXRoLmFicyhiKTtcclxuICAgICAgICAgICAgaWYgKGFicyA8IEJBU0UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQmlnSW50ZWdlcihtdWx0aXBseVNtYWxsKGEsIGFicyksIHNpZ24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGIgPSBzbWFsbFRvQXJyYXkoYWJzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHVzZUthcmF0c3ViYShhLmxlbmd0aCwgYi5sZW5ndGgpKSAvLyBLYXJhdHN1YmEgaXMgb25seSBmYXN0ZXIgZm9yIGNlcnRhaW4gYXJyYXkgc2l6ZXNcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCaWdJbnRlZ2VyKG11bHRpcGx5S2FyYXRzdWJhKGEsIGIpLCBzaWduKTtcclxuICAgICAgICByZXR1cm4gbmV3IEJpZ0ludGVnZXIobXVsdGlwbHlMb25nKGEsIGIpLCBzaWduKTtcclxuICAgIH07XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUudGltZXMgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tdWx0aXBseTtcclxuXHJcbiAgICBmdW5jdGlvbiBtdWx0aXBseVNtYWxsQW5kQXJyYXkoYSwgYiwgc2lnbikgeyAvLyBhID49IDBcclxuICAgICAgICBpZiAoYSA8IEJBU0UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCaWdJbnRlZ2VyKG11bHRpcGx5U21hbGwoYiwgYSksIHNpZ24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IEJpZ0ludGVnZXIobXVsdGlwbHlMb25nKGIsIHNtYWxsVG9BcnJheShhKSksIHNpZ24pO1xyXG4gICAgfVxyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5fbXVsdGlwbHlCeVNtYWxsID0gZnVuY3Rpb24gKGEpIHtcclxuICAgICAgICBpZiAoaXNQcmVjaXNlKGEudmFsdWUgKiB0aGlzLnZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFNtYWxsSW50ZWdlcihhLnZhbHVlICogdGhpcy52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtdWx0aXBseVNtYWxsQW5kQXJyYXkoTWF0aC5hYnMoYS52YWx1ZSksIHNtYWxsVG9BcnJheShNYXRoLmFicyh0aGlzLnZhbHVlKSksIHRoaXMuc2lnbiAhPT0gYS5zaWduKTtcclxuICAgIH07XHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5fbXVsdGlwbHlCeVNtYWxsID0gZnVuY3Rpb24gKGEpIHtcclxuICAgICAgICBpZiAoYS52YWx1ZSA9PT0gMCkgcmV0dXJuIEludGVnZXJbMF07XHJcbiAgICAgICAgaWYgKGEudmFsdWUgPT09IDEpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIGlmIChhLnZhbHVlID09PSAtMSkgcmV0dXJuIHRoaXMubmVnYXRlKCk7XHJcbiAgICAgICAgcmV0dXJuIG11bHRpcGx5U21hbGxBbmRBcnJheShNYXRoLmFicyhhLnZhbHVlKSwgdGhpcy52YWx1ZSwgdGhpcy5zaWduICE9PSBhLnNpZ24pO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUubXVsdGlwbHkgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHJldHVybiBwYXJzZVZhbHVlKHYpLl9tdWx0aXBseUJ5U21hbGwodGhpcyk7XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS50aW1lcyA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUubXVsdGlwbHk7XHJcblxyXG4gICAgZnVuY3Rpb24gc3F1YXJlKGEpIHtcclxuICAgICAgICB2YXIgbCA9IGEubGVuZ3RoLFxyXG4gICAgICAgICAgICByID0gY3JlYXRlQXJyYXkobCArIGwpLFxyXG4gICAgICAgICAgICBiYXNlID0gQkFTRSxcclxuICAgICAgICAgICAgcHJvZHVjdCwgY2FycnksIGksIGFfaSwgYV9qO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgYV9pID0gYVtpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBsOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGFfaiA9IGFbal07XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0ID0gYV9pICogYV9qICsgcltpICsgal07XHJcbiAgICAgICAgICAgICAgICBjYXJyeSA9IE1hdGguZmxvb3IocHJvZHVjdCAvIGJhc2UpO1xyXG4gICAgICAgICAgICAgICAgcltpICsgal0gPSBwcm9kdWN0IC0gY2FycnkgKiBiYXNlO1xyXG4gICAgICAgICAgICAgICAgcltpICsgaiArIDFdICs9IGNhcnJ5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyaW0ocik7XHJcbiAgICAgICAgcmV0dXJuIHI7XHJcbiAgICB9XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuc3F1YXJlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQmlnSW50ZWdlcihzcXVhcmUodGhpcy52YWx1ZSksIGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5zcXVhcmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZSAqIHRoaXMudmFsdWU7XHJcbiAgICAgICAgaWYgKGlzUHJlY2lzZSh2YWx1ZSkpIHJldHVybiBuZXcgU21hbGxJbnRlZ2VyKHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gbmV3IEJpZ0ludGVnZXIoc3F1YXJlKHNtYWxsVG9BcnJheShNYXRoLmFicyh0aGlzLnZhbHVlKSkpLCBmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGRpdk1vZDEoYSwgYikgeyAvLyBMZWZ0IG92ZXIgZnJvbSBwcmV2aW91cyB2ZXJzaW9uLiBQZXJmb3JtcyBmYXN0ZXIgdGhhbiBkaXZNb2QyIG9uIHNtYWxsZXIgaW5wdXQgc2l6ZXMuXHJcbiAgICAgICAgdmFyIGFfbCA9IGEubGVuZ3RoLFxyXG4gICAgICAgICAgICBiX2wgPSBiLmxlbmd0aCxcclxuICAgICAgICAgICAgYmFzZSA9IEJBU0UsXHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGNyZWF0ZUFycmF5KGIubGVuZ3RoKSxcclxuICAgICAgICAgICAgZGl2aXNvck1vc3RTaWduaWZpY2FudERpZ2l0ID0gYltiX2wgLSAxXSxcclxuICAgICAgICAgICAgLy8gbm9ybWFsaXphdGlvblxyXG4gICAgICAgICAgICBsYW1iZGEgPSBNYXRoLmNlaWwoYmFzZSAvICgyICogZGl2aXNvck1vc3RTaWduaWZpY2FudERpZ2l0KSksXHJcbiAgICAgICAgICAgIHJlbWFpbmRlciA9IG11bHRpcGx5U21hbGwoYSwgbGFtYmRhKSxcclxuICAgICAgICAgICAgZGl2aXNvciA9IG11bHRpcGx5U21hbGwoYiwgbGFtYmRhKSxcclxuICAgICAgICAgICAgcXVvdGllbnREaWdpdCwgc2hpZnQsIGNhcnJ5LCBib3Jyb3csIGksIGwsIHE7XHJcbiAgICAgICAgaWYgKHJlbWFpbmRlci5sZW5ndGggPD0gYV9sKSByZW1haW5kZXIucHVzaCgwKTtcclxuICAgICAgICBkaXZpc29yLnB1c2goMCk7XHJcbiAgICAgICAgZGl2aXNvck1vc3RTaWduaWZpY2FudERpZ2l0ID0gZGl2aXNvcltiX2wgLSAxXTtcclxuICAgICAgICBmb3IgKHNoaWZ0ID0gYV9sIC0gYl9sOyBzaGlmdCA+PSAwOyBzaGlmdC0tKSB7XHJcbiAgICAgICAgICAgIHF1b3RpZW50RGlnaXQgPSBiYXNlIC0gMTtcclxuICAgICAgICAgICAgaWYgKHJlbWFpbmRlcltzaGlmdCArIGJfbF0gIT09IGRpdmlzb3JNb3N0U2lnbmlmaWNhbnREaWdpdCkge1xyXG4gICAgICAgICAgICAgICAgcXVvdGllbnREaWdpdCA9IE1hdGguZmxvb3IoKHJlbWFpbmRlcltzaGlmdCArIGJfbF0gKiBiYXNlICsgcmVtYWluZGVyW3NoaWZ0ICsgYl9sIC0gMV0pIC8gZGl2aXNvck1vc3RTaWduaWZpY2FudERpZ2l0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBxdW90aWVudERpZ2l0IDw9IGJhc2UgLSAxXHJcbiAgICAgICAgICAgIGNhcnJ5ID0gMDtcclxuICAgICAgICAgICAgYm9ycm93ID0gMDtcclxuICAgICAgICAgICAgbCA9IGRpdmlzb3IubGVuZ3RoO1xyXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjYXJyeSArPSBxdW90aWVudERpZ2l0ICogZGl2aXNvcltpXTtcclxuICAgICAgICAgICAgICAgIHEgPSBNYXRoLmZsb29yKGNhcnJ5IC8gYmFzZSk7XHJcbiAgICAgICAgICAgICAgICBib3Jyb3cgKz0gcmVtYWluZGVyW3NoaWZ0ICsgaV0gLSAoY2FycnkgLSBxICogYmFzZSk7XHJcbiAgICAgICAgICAgICAgICBjYXJyeSA9IHE7XHJcbiAgICAgICAgICAgICAgICBpZiAoYm9ycm93IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbWFpbmRlcltzaGlmdCArIGldID0gYm9ycm93ICsgYmFzZTtcclxuICAgICAgICAgICAgICAgICAgICBib3Jyb3cgPSAtMTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtYWluZGVyW3NoaWZ0ICsgaV0gPSBib3Jyb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9ycm93ID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB3aGlsZSAoYm9ycm93ICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBxdW90aWVudERpZ2l0IC09IDE7XHJcbiAgICAgICAgICAgICAgICBjYXJyeSA9IDA7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FycnkgKz0gcmVtYWluZGVyW3NoaWZ0ICsgaV0gLSBiYXNlICsgZGl2aXNvcltpXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FycnkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbWFpbmRlcltzaGlmdCArIGldID0gY2FycnkgKyBiYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJyeSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtYWluZGVyW3NoaWZ0ICsgaV0gPSBjYXJyeTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FycnkgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJvcnJvdyArPSBjYXJyeTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXN1bHRbc2hpZnRdID0gcXVvdGllbnREaWdpdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZGVub3JtYWxpemF0aW9uXHJcbiAgICAgICAgcmVtYWluZGVyID0gZGl2TW9kU21hbGwocmVtYWluZGVyLCBsYW1iZGEpWzBdO1xyXG4gICAgICAgIHJldHVybiBbYXJyYXlUb1NtYWxsKHJlc3VsdCksIGFycmF5VG9TbWFsbChyZW1haW5kZXIpXTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkaXZNb2QyKGEsIGIpIHsgLy8gSW1wbGVtZW50YXRpb24gaWRlYSBzaGFtZWxlc3NseSBzdG9sZW4gZnJvbSBTaWxlbnQgTWF0dCdzIGxpYnJhcnkgaHR0cDovL3NpbGVudG1hdHQuY29tL2JpZ2ludGVnZXIvXHJcbiAgICAgICAgLy8gUGVyZm9ybXMgZmFzdGVyIHRoYW4gZGl2TW9kMSBvbiBsYXJnZXIgaW5wdXQgc2l6ZXMuXHJcbiAgICAgICAgdmFyIGFfbCA9IGEubGVuZ3RoLFxyXG4gICAgICAgICAgICBiX2wgPSBiLmxlbmd0aCxcclxuICAgICAgICAgICAgcmVzdWx0ID0gW10sXHJcbiAgICAgICAgICAgIHBhcnQgPSBbXSxcclxuICAgICAgICAgICAgYmFzZSA9IEJBU0UsXHJcbiAgICAgICAgICAgIGd1ZXNzLCB4bGVuLCBoaWdoeCwgaGlnaHksIGNoZWNrO1xyXG4gICAgICAgIHdoaWxlIChhX2wpIHtcclxuICAgICAgICAgICAgcGFydC51bnNoaWZ0KGFbLS1hX2xdKTtcclxuICAgICAgICAgICAgdHJpbShwYXJ0KTtcclxuICAgICAgICAgICAgaWYgKGNvbXBhcmVBYnMocGFydCwgYikgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaCgwKTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHhsZW4gPSBwYXJ0Lmxlbmd0aDtcclxuICAgICAgICAgICAgaGlnaHggPSBwYXJ0W3hsZW4gLSAxXSAqIGJhc2UgKyBwYXJ0W3hsZW4gLSAyXTtcclxuICAgICAgICAgICAgaGlnaHkgPSBiW2JfbCAtIDFdICogYmFzZSArIGJbYl9sIC0gMl07XHJcbiAgICAgICAgICAgIGlmICh4bGVuID4gYl9sKSB7XHJcbiAgICAgICAgICAgICAgICBoaWdoeCA9IChoaWdoeCArIDEpICogYmFzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBndWVzcyA9IE1hdGguY2VpbChoaWdoeCAvIGhpZ2h5KTtcclxuICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgY2hlY2sgPSBtdWx0aXBseVNtYWxsKGIsIGd1ZXNzKTtcclxuICAgICAgICAgICAgICAgIGlmIChjb21wYXJlQWJzKGNoZWNrLCBwYXJ0KSA8PSAwKSBicmVhaztcclxuICAgICAgICAgICAgICAgIGd1ZXNzLS07XHJcbiAgICAgICAgICAgIH0gd2hpbGUgKGd1ZXNzKTtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2goZ3Vlc3MpO1xyXG4gICAgICAgICAgICBwYXJ0ID0gc3VidHJhY3QocGFydCwgY2hlY2spO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXN1bHQucmV2ZXJzZSgpO1xyXG4gICAgICAgIHJldHVybiBbYXJyYXlUb1NtYWxsKHJlc3VsdCksIGFycmF5VG9TbWFsbChwYXJ0KV07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGl2TW9kU21hbGwodmFsdWUsIGxhbWJkYSkge1xyXG4gICAgICAgIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGgsXHJcbiAgICAgICAgICAgIHF1b3RpZW50ID0gY3JlYXRlQXJyYXkobGVuZ3RoKSxcclxuICAgICAgICAgICAgYmFzZSA9IEJBU0UsXHJcbiAgICAgICAgICAgIGksIHEsIHJlbWFpbmRlciwgZGl2aXNvcjtcclxuICAgICAgICByZW1haW5kZXIgPSAwO1xyXG4gICAgICAgIGZvciAoaSA9IGxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XHJcbiAgICAgICAgICAgIGRpdmlzb3IgPSByZW1haW5kZXIgKiBiYXNlICsgdmFsdWVbaV07XHJcbiAgICAgICAgICAgIHEgPSB0cnVuY2F0ZShkaXZpc29yIC8gbGFtYmRhKTtcclxuICAgICAgICAgICAgcmVtYWluZGVyID0gZGl2aXNvciAtIHEgKiBsYW1iZGE7XHJcbiAgICAgICAgICAgIHF1b3RpZW50W2ldID0gcSB8IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBbcXVvdGllbnQsIHJlbWFpbmRlciB8IDBdO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRpdk1vZEFueShzZWxmLCB2KSB7XHJcbiAgICAgICAgdmFyIHZhbHVlLCBuID0gcGFyc2VWYWx1ZSh2KTtcclxuICAgICAgICB2YXIgYSA9IHNlbGYudmFsdWUsIGIgPSBuLnZhbHVlO1xyXG4gICAgICAgIHZhciBxdW90aWVudDtcclxuICAgICAgICBpZiAoYiA9PT0gMCkgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGRpdmlkZSBieSB6ZXJvXCIpO1xyXG4gICAgICAgIGlmIChzZWxmLmlzU21hbGwpIHtcclxuICAgICAgICAgICAgaWYgKG4uaXNTbWFsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtuZXcgU21hbGxJbnRlZ2VyKHRydW5jYXRlKGEgLyBiKSksIG5ldyBTbWFsbEludGVnZXIoYSAlIGIpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gW0ludGVnZXJbMF0sIHNlbGZdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobi5pc1NtYWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChiID09PSAxKSByZXR1cm4gW3NlbGYsIEludGVnZXJbMF1dO1xyXG4gICAgICAgICAgICBpZiAoYiA9PSAtMSkgcmV0dXJuIFtzZWxmLm5lZ2F0ZSgpLCBJbnRlZ2VyWzBdXTtcclxuICAgICAgICAgICAgdmFyIGFicyA9IE1hdGguYWJzKGIpO1xyXG4gICAgICAgICAgICBpZiAoYWJzIDwgQkFTRSkge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBkaXZNb2RTbWFsbChhLCBhYnMpO1xyXG4gICAgICAgICAgICAgICAgcXVvdGllbnQgPSBhcnJheVRvU21hbGwodmFsdWVbMF0pO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlbWFpbmRlciA9IHZhbHVlWzFdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuc2lnbikgcmVtYWluZGVyID0gLXJlbWFpbmRlcjtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcXVvdGllbnQgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5zaWduICE9PSBuLnNpZ24pIHF1b3RpZW50ID0gLXF1b3RpZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbbmV3IFNtYWxsSW50ZWdlcihxdW90aWVudCksIG5ldyBTbWFsbEludGVnZXIocmVtYWluZGVyKV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW25ldyBCaWdJbnRlZ2VyKHF1b3RpZW50LCBzZWxmLnNpZ24gIT09IG4uc2lnbiksIG5ldyBTbWFsbEludGVnZXIocmVtYWluZGVyKV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYiA9IHNtYWxsVG9BcnJheShhYnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY29tcGFyaXNvbiA9IGNvbXBhcmVBYnMoYSwgYik7XHJcbiAgICAgICAgaWYgKGNvbXBhcmlzb24gPT09IC0xKSByZXR1cm4gW0ludGVnZXJbMF0sIHNlbGZdO1xyXG4gICAgICAgIGlmIChjb21wYXJpc29uID09PSAwKSByZXR1cm4gW0ludGVnZXJbc2VsZi5zaWduID09PSBuLnNpZ24gPyAxIDogLTFdLCBJbnRlZ2VyWzBdXTtcclxuXHJcbiAgICAgICAgLy8gZGl2TW9kMSBpcyBmYXN0ZXIgb24gc21hbGxlciBpbnB1dCBzaXplc1xyXG4gICAgICAgIGlmIChhLmxlbmd0aCArIGIubGVuZ3RoIDw9IDIwMClcclxuICAgICAgICAgICAgdmFsdWUgPSBkaXZNb2QxKGEsIGIpO1xyXG4gICAgICAgIGVsc2UgdmFsdWUgPSBkaXZNb2QyKGEsIGIpO1xyXG5cclxuICAgICAgICBxdW90aWVudCA9IHZhbHVlWzBdO1xyXG4gICAgICAgIHZhciBxU2lnbiA9IHNlbGYuc2lnbiAhPT0gbi5zaWduLFxyXG4gICAgICAgICAgICBtb2QgPSB2YWx1ZVsxXSxcclxuICAgICAgICAgICAgbVNpZ24gPSBzZWxmLnNpZ247XHJcbiAgICAgICAgaWYgKHR5cGVvZiBxdW90aWVudCA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICBpZiAocVNpZ24pIHF1b3RpZW50ID0gLXF1b3RpZW50O1xyXG4gICAgICAgICAgICBxdW90aWVudCA9IG5ldyBTbWFsbEludGVnZXIocXVvdGllbnQpO1xyXG4gICAgICAgIH0gZWxzZSBxdW90aWVudCA9IG5ldyBCaWdJbnRlZ2VyKHF1b3RpZW50LCBxU2lnbik7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBtb2QgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgaWYgKG1TaWduKSBtb2QgPSAtbW9kO1xyXG4gICAgICAgICAgICBtb2QgPSBuZXcgU21hbGxJbnRlZ2VyKG1vZCk7XHJcbiAgICAgICAgfSBlbHNlIG1vZCA9IG5ldyBCaWdJbnRlZ2VyKG1vZCwgbVNpZ24pO1xyXG4gICAgICAgIHJldHVybiBbcXVvdGllbnQsIG1vZF07XHJcbiAgICB9XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZGl2bW9kID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gZGl2TW9kQW55KHRoaXMsIHYpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHF1b3RpZW50OiByZXN1bHRbMF0sXHJcbiAgICAgICAgICAgIHJlbWFpbmRlcjogcmVzdWx0WzFdXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLmRpdm1vZCA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmRpdm1vZDtcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5kaXZpZGUgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHJldHVybiBkaXZNb2RBbnkodGhpcywgdilbMF07XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5vdmVyID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5kaXZpZGUgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5vdmVyID0gQmlnSW50ZWdlci5wcm90b3R5cGUuZGl2aWRlO1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm1vZCA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgcmV0dXJuIGRpdk1vZEFueSh0aGlzLCB2KVsxXTtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLnJlbWFpbmRlciA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUubW9kID0gQmlnSW50ZWdlci5wcm90b3R5cGUucmVtYWluZGVyID0gQmlnSW50ZWdlci5wcm90b3R5cGUubW9kO1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnBvdyA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgdmFyIG4gPSBwYXJzZVZhbHVlKHYpLFxyXG4gICAgICAgICAgICBhID0gdGhpcy52YWx1ZSxcclxuICAgICAgICAgICAgYiA9IG4udmFsdWUsXHJcbiAgICAgICAgICAgIHZhbHVlLCB4LCB5O1xyXG4gICAgICAgIGlmIChiID09PSAwKSByZXR1cm4gSW50ZWdlclsxXTtcclxuICAgICAgICBpZiAoYSA9PT0gMCkgcmV0dXJuIEludGVnZXJbMF07XHJcbiAgICAgICAgaWYgKGEgPT09IDEpIHJldHVybiBJbnRlZ2VyWzFdO1xyXG4gICAgICAgIGlmIChhID09PSAtMSkgcmV0dXJuIG4uaXNFdmVuKCkgPyBJbnRlZ2VyWzFdIDogSW50ZWdlclstMV07XHJcbiAgICAgICAgaWYgKG4uc2lnbikge1xyXG4gICAgICAgICAgICByZXR1cm4gSW50ZWdlclswXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFuLmlzU21hbGwpIHRocm93IG5ldyBFcnJvcihcIlRoZSBleHBvbmVudCBcIiArIG4udG9TdHJpbmcoKSArIFwiIGlzIHRvbyBsYXJnZS5cIik7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTbWFsbCkge1xyXG4gICAgICAgICAgICBpZiAoaXNQcmVjaXNlKHZhbHVlID0gTWF0aC5wb3coYSwgYikpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTbWFsbEludGVnZXIodHJ1bmNhdGUodmFsdWUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgeCA9IHRoaXM7XHJcbiAgICAgICAgeSA9IEludGVnZXJbMV07XHJcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgaWYgKGIgJiAxID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB5ID0geS50aW1lcyh4KTtcclxuICAgICAgICAgICAgICAgIC0tYjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYiA9PT0gMCkgYnJlYWs7XHJcbiAgICAgICAgICAgIGIgLz0gMjtcclxuICAgICAgICAgICAgeCA9IHguc3F1YXJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB5O1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUucG93ID0gQmlnSW50ZWdlci5wcm90b3R5cGUucG93O1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm1vZFBvdyA9IGZ1bmN0aW9uIChleHAsIG1vZCkge1xyXG4gICAgICAgIGV4cCA9IHBhcnNlVmFsdWUoZXhwKTtcclxuICAgICAgICBtb2QgPSBwYXJzZVZhbHVlKG1vZCk7XHJcbiAgICAgICAgaWYgKG1vZC5pc1plcm8oKSkgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHRha2UgbW9kUG93IHdpdGggbW9kdWx1cyAwXCIpO1xyXG4gICAgICAgIHZhciByID0gSW50ZWdlclsxXSxcclxuICAgICAgICAgICAgYmFzZSA9IHRoaXMubW9kKG1vZCk7XHJcbiAgICAgICAgd2hpbGUgKGV4cC5pc1Bvc2l0aXZlKCkpIHtcclxuICAgICAgICAgICAgaWYgKGJhc2UuaXNaZXJvKCkpIHJldHVybiBJbnRlZ2VyWzBdO1xyXG4gICAgICAgICAgICBpZiAoZXhwLmlzT2RkKCkpIHIgPSByLm11bHRpcGx5KGJhc2UpLm1vZChtb2QpO1xyXG4gICAgICAgICAgICBleHAgPSBleHAuZGl2aWRlKDIpO1xyXG4gICAgICAgICAgICBiYXNlID0gYmFzZS5zcXVhcmUoKS5tb2QobW9kKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHI7XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5tb2RQb3cgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tb2RQb3c7XHJcblxyXG4gICAgZnVuY3Rpb24gY29tcGFyZUFicyhhLCBiKSB7XHJcbiAgICAgICAgaWYgKGEubGVuZ3RoICE9PSBiLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYS5sZW5ndGggPiBiLmxlbmd0aCA/IDEgOiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IGEubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgaWYgKGFbaV0gIT09IGJbaV0pIHJldHVybiBhW2ldID4gYltpXSA/IDEgOiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuY29tcGFyZUFicyA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgdmFyIG4gPSBwYXJzZVZhbHVlKHYpLFxyXG4gICAgICAgICAgICBhID0gdGhpcy52YWx1ZSxcclxuICAgICAgICAgICAgYiA9IG4udmFsdWU7XHJcbiAgICAgICAgaWYgKG4uaXNTbWFsbCkgcmV0dXJuIDE7XHJcbiAgICAgICAgcmV0dXJuIGNvbXBhcmVBYnMoYSwgYik7XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5jb21wYXJlQWJzID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICB2YXIgbiA9IHBhcnNlVmFsdWUodiksXHJcbiAgICAgICAgICAgIGEgPSBNYXRoLmFicyh0aGlzLnZhbHVlKSxcclxuICAgICAgICAgICAgYiA9IG4udmFsdWU7XHJcbiAgICAgICAgaWYgKG4uaXNTbWFsbCkge1xyXG4gICAgICAgICAgICBiID0gTWF0aC5hYnMoYik7XHJcbiAgICAgICAgICAgIHJldHVybiBhID09PSBiID8gMCA6IGEgPiBiID8gMSA6IC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9O1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmNvbXBhcmUgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIC8vIFNlZSBkaXNjdXNzaW9uIGFib3V0IGNvbXBhcmlzb24gd2l0aCBJbmZpbml0eTpcclxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcGV0ZXJvbHNvbi9CaWdJbnRlZ2VyLmpzL2lzc3Vlcy82MVxyXG4gICAgICAgIGlmICh2ID09PSBJbmZpbml0eSkge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2ID09PSAtSW5maW5pdHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgbiA9IHBhcnNlVmFsdWUodiksXHJcbiAgICAgICAgICAgIGEgPSB0aGlzLnZhbHVlLFxyXG4gICAgICAgICAgICBiID0gbi52YWx1ZTtcclxuICAgICAgICBpZiAodGhpcy5zaWduICE9PSBuLnNpZ24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIG4uc2lnbiA/IDEgOiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG4uaXNTbWFsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zaWduID8gLTEgOiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY29tcGFyZUFicyhhLCBiKSAqICh0aGlzLnNpZ24gPyAtMSA6IDEpO1xyXG4gICAgfTtcclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmNvbXBhcmVUbyA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmNvbXBhcmU7XHJcblxyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICBpZiAodiA9PT0gSW5maW5pdHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodiA9PT0gLUluZmluaXR5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG4gPSBwYXJzZVZhbHVlKHYpLFxyXG4gICAgICAgICAgICBhID0gdGhpcy52YWx1ZSxcclxuICAgICAgICAgICAgYiA9IG4udmFsdWU7XHJcbiAgICAgICAgaWYgKG4uaXNTbWFsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYSA9PSBiID8gMCA6IGEgPiBiID8gMSA6IC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYSA8IDAgIT09IG4uc2lnbikge1xyXG4gICAgICAgICAgICByZXR1cm4gYSA8IDAgPyAtMSA6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhIDwgMCA/IDEgOiAtMTtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLmNvbXBhcmVUbyA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUuY29tcGFyZTtcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBhcmUodikgPT09IDA7XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5lcSA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUuZXF1YWxzID0gQmlnSW50ZWdlci5wcm90b3R5cGUuZXEgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5lcXVhbHM7XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubm90RXF1YWxzID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb21wYXJlKHYpICE9PSAwO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUubmVxID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5ub3RFcXVhbHMgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5uZXEgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5ub3RFcXVhbHM7XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZ3JlYXRlciA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZSh2KSA+IDA7XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5ndCA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUuZ3JlYXRlciA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmd0ID0gQmlnSW50ZWdlci5wcm90b3R5cGUuZ3JlYXRlcjtcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5sZXNzZXIgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBhcmUodikgPCAwO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUubHQgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLmxlc3NlciA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmx0ID0gQmlnSW50ZWdlci5wcm90b3R5cGUubGVzc2VyO1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmdyZWF0ZXJPckVxdWFscyA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZSh2KSA+PSAwO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUuZ2VxID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5ncmVhdGVyT3JFcXVhbHMgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5nZXEgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5ncmVhdGVyT3JFcXVhbHM7XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubGVzc2VyT3JFcXVhbHMgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBhcmUodikgPD0gMDtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLmxlcSA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUubGVzc2VyT3JFcXVhbHMgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5sZXEgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5sZXNzZXJPckVxdWFscztcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5pc0V2ZW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnZhbHVlWzBdICYgMSkgPT09IDA7XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5pc0V2ZW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnZhbHVlICYgMSkgPT09IDA7XHJcbiAgICB9O1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmlzT2RkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy52YWx1ZVswXSAmIDEpID09PSAxO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUuaXNPZGQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnZhbHVlICYgMSkgPT09IDE7XHJcbiAgICB9O1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmlzUG9zaXRpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuICF0aGlzLnNpZ247XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5pc1Bvc2l0aXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlID4gMDtcclxuICAgIH07XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuaXNOZWdhdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zaWduO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUuaXNOZWdhdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSA8IDA7XHJcbiAgICB9O1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmlzVW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5pc1VuaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKHRoaXMudmFsdWUpID09PSAxO1xyXG4gICAgfTtcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5pc1plcm8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUuaXNaZXJvID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlID09PSAwO1xyXG4gICAgfTtcclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmlzRGl2aXNpYmxlQnkgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHZhciBuID0gcGFyc2VWYWx1ZSh2KTtcclxuICAgICAgICB2YXIgdmFsdWUgPSBuLnZhbHVlO1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMSkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgaWYgKHZhbHVlID09PSAyKSByZXR1cm4gdGhpcy5pc0V2ZW4oKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5tb2QobikuZXF1YWxzKEludGVnZXJbMF0pO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUuaXNEaXZpc2libGVCeSA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmlzRGl2aXNpYmxlQnk7XHJcblxyXG4gICAgZnVuY3Rpb24gaXNCYXNpY1ByaW1lKHYpIHtcclxuICAgICAgICB2YXIgbiA9IHYuYWJzKCk7XHJcbiAgICAgICAgaWYgKG4uaXNVbml0KCkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAobi5lcXVhbHMoMikgfHwgbi5lcXVhbHMoMykgfHwgbi5lcXVhbHMoNSkpIHJldHVybiB0cnVlO1xyXG4gICAgICAgIGlmIChuLmlzRXZlbigpIHx8IG4uaXNEaXZpc2libGVCeSgzKSB8fCBuLmlzRGl2aXNpYmxlQnkoNSkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAobi5sZXNzZXIoMjUpKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAvLyB3ZSBkb24ndCBrbm93IGlmIGl0J3MgcHJpbWU6IGxldCB0aGUgb3RoZXIgZnVuY3Rpb25zIGZpZ3VyZSBpdCBvdXRcclxuICAgIH1cclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5pc1ByaW1lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBpc1ByaW1lID0gaXNCYXNpY1ByaW1lKHRoaXMpO1xyXG4gICAgICAgIGlmIChpc1ByaW1lICE9PSB1bmRlZmluZWQpIHJldHVybiBpc1ByaW1lO1xyXG4gICAgICAgIHZhciBuID0gdGhpcy5hYnMoKSxcclxuICAgICAgICAgICAgblByZXYgPSBuLnByZXYoKTtcclxuICAgICAgICB2YXIgYSA9IFsyLCAzLCA1LCA3LCAxMSwgMTMsIDE3LCAxOV0sXHJcbiAgICAgICAgICAgIGIgPSBuUHJldixcclxuICAgICAgICAgICAgZCwgdCwgaSwgeDtcclxuICAgICAgICB3aGlsZSAoYi5pc0V2ZW4oKSkgYiA9IGIuZGl2aWRlKDIpO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHggPSBiaWdJbnQoYVtpXSkubW9kUG93KGIsIG4pO1xyXG4gICAgICAgICAgICBpZiAoeC5lcXVhbHMoSW50ZWdlclsxXSkgfHwgeC5lcXVhbHMoblByZXYpKSBjb250aW51ZTtcclxuICAgICAgICAgICAgZm9yICh0ID0gdHJ1ZSwgZCA9IGI7IHQgJiYgZC5sZXNzZXIoblByZXYpOyBkID0gZC5tdWx0aXBseSgyKSkge1xyXG4gICAgICAgICAgICAgICAgeCA9IHguc3F1YXJlKCkubW9kKG4pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHguZXF1YWxzKG5QcmV2KSkgdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0KSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUuaXNQcmltZSA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmlzUHJpbWU7XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuaXNQcm9iYWJsZVByaW1lID0gZnVuY3Rpb24gKGl0ZXJhdGlvbnMpIHtcclxuICAgICAgICB2YXIgaXNQcmltZSA9IGlzQmFzaWNQcmltZSh0aGlzKTtcclxuICAgICAgICBpZiAoaXNQcmltZSAhPT0gdW5kZWZpbmVkKSByZXR1cm4gaXNQcmltZTtcclxuICAgICAgICB2YXIgbiA9IHRoaXMuYWJzKCk7XHJcbiAgICAgICAgdmFyIHQgPSBpdGVyYXRpb25zID09PSB1bmRlZmluZWQgPyA1IDogaXRlcmF0aW9ucztcclxuICAgICAgICAvLyB1c2UgdGhlIEZlcm1hdCBwcmltYWxpdHkgdGVzdFxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBhID0gYmlnSW50LnJhbmRCZXR3ZWVuKDIsIG4ubWludXMoMikpO1xyXG4gICAgICAgICAgICBpZiAoIWEubW9kUG93KG4ucHJldigpLCBuKS5pc1VuaXQoKSkgcmV0dXJuIGZhbHNlOyAvLyBkZWZpbml0ZWx5IGNvbXBvc2l0ZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gbGFyZ2UgY2hhbmNlIG9mIGJlaW5nIHByaW1lXHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5pc1Byb2JhYmxlUHJpbWUgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5pc1Byb2JhYmxlUHJpbWU7XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubW9kSW52ID0gZnVuY3Rpb24gKG4pIHtcclxuICAgICAgICB2YXIgdCA9IGJpZ0ludC56ZXJvLCBuZXdUID0gYmlnSW50Lm9uZSwgciA9IHBhcnNlVmFsdWUobiksIG5ld1IgPSB0aGlzLmFicygpLCBxLCBsYXN0VCwgbGFzdFI7XHJcbiAgICAgICAgd2hpbGUgKCFuZXdSLmVxdWFscyhiaWdJbnQuemVybykpIHtcclxuICAgICAgICAgICAgcSA9IHIuZGl2aWRlKG5ld1IpO1xyXG4gICAgICAgICAgICBsYXN0VCA9IHQ7XHJcbiAgICAgICAgICAgIGxhc3RSID0gcjtcclxuICAgICAgICAgICAgdCA9IG5ld1Q7XHJcbiAgICAgICAgICAgIHIgPSBuZXdSO1xyXG4gICAgICAgICAgICBuZXdUID0gbGFzdFQuc3VidHJhY3QocS5tdWx0aXBseShuZXdUKSk7XHJcbiAgICAgICAgICAgIG5ld1IgPSBsYXN0Ui5zdWJ0cmFjdChxLm11bHRpcGx5KG5ld1IpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFyLmVxdWFscygxKSkgdGhyb3cgbmV3IEVycm9yKHRoaXMudG9TdHJpbmcoKSArIFwiIGFuZCBcIiArIG4udG9TdHJpbmcoKSArIFwiIGFyZSBub3QgY28tcHJpbWVcIik7XHJcbiAgICAgICAgaWYgKHQuY29tcGFyZSgwKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgdCA9IHQuYWRkKG4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc05lZ2F0aXZlKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHQubmVnYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuXHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLm1vZEludiA9IEJpZ0ludGVnZXIucHJvdG90eXBlLm1vZEludjtcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgaWYgKHRoaXMuc2lnbikge1xyXG4gICAgICAgICAgICByZXR1cm4gc3VidHJhY3RTbWFsbCh2YWx1ZSwgMSwgdGhpcy5zaWduKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCaWdJbnRlZ2VyKGFkZFNtYWxsKHZhbHVlLCAxKSwgdGhpcy5zaWduKTtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZTtcclxuICAgICAgICBpZiAodmFsdWUgKyAxIDwgTUFYX0lOVCkgcmV0dXJuIG5ldyBTbWFsbEludGVnZXIodmFsdWUgKyAxKTtcclxuICAgICAgICByZXR1cm4gbmV3IEJpZ0ludGVnZXIoTUFYX0lOVF9BUlIsIGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUucHJldiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgIGlmICh0aGlzLnNpZ24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCaWdJbnRlZ2VyKGFkZFNtYWxsKHZhbHVlLCAxKSwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdWJ0cmFjdFNtYWxsKHZhbHVlLCAxLCB0aGlzLnNpZ24pO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUucHJldiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgIGlmICh2YWx1ZSAtIDEgPiAtTUFYX0lOVCkgcmV0dXJuIG5ldyBTbWFsbEludGVnZXIodmFsdWUgLSAxKTtcclxuICAgICAgICByZXR1cm4gbmV3IEJpZ0ludGVnZXIoTUFYX0lOVF9BUlIsIHRydWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgcG93ZXJzT2ZUd28gPSBbMV07XHJcbiAgICB3aGlsZSAoMiAqIHBvd2Vyc09mVHdvW3Bvd2Vyc09mVHdvLmxlbmd0aCAtIDFdIDw9IEJBU0UpIHBvd2Vyc09mVHdvLnB1c2goMiAqIHBvd2Vyc09mVHdvW3Bvd2Vyc09mVHdvLmxlbmd0aCAtIDFdKTtcclxuICAgIHZhciBwb3dlcnMyTGVuZ3RoID0gcG93ZXJzT2ZUd28ubGVuZ3RoLCBoaWdoZXN0UG93ZXIyID0gcG93ZXJzT2ZUd29bcG93ZXJzMkxlbmd0aCAtIDFdO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNoaWZ0X2lzU21hbGwobikge1xyXG4gICAgICAgIHJldHVybiAoKHR5cGVvZiBuID09PSBcIm51bWJlclwiIHx8IHR5cGVvZiBuID09PSBcInN0cmluZ1wiKSAmJiArTWF0aC5hYnMobikgPD0gQkFTRSkgfHxcclxuICAgICAgICAgICAgKG4gaW5zdGFuY2VvZiBCaWdJbnRlZ2VyICYmIG4udmFsdWUubGVuZ3RoIDw9IDEpO1xyXG4gICAgfVxyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnNoaWZ0TGVmdCA9IGZ1bmN0aW9uIChuKSB7XHJcbiAgICAgICAgaWYgKCFzaGlmdF9pc1NtYWxsKG4pKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihTdHJpbmcobikgKyBcIiBpcyB0b28gbGFyZ2UgZm9yIHNoaWZ0aW5nLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbiA9ICtuO1xyXG4gICAgICAgIGlmIChuIDwgMCkgcmV0dXJuIHRoaXMuc2hpZnRSaWdodCgtbik7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXM7XHJcbiAgICAgICAgd2hpbGUgKG4gPj0gcG93ZXJzMkxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQubXVsdGlwbHkoaGlnaGVzdFBvd2VyMik7XHJcbiAgICAgICAgICAgIG4gLT0gcG93ZXJzMkxlbmd0aCAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQubXVsdGlwbHkocG93ZXJzT2ZUd29bbl0pO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUuc2hpZnRMZWZ0ID0gQmlnSW50ZWdlci5wcm90b3R5cGUuc2hpZnRMZWZ0O1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnNoaWZ0UmlnaHQgPSBmdW5jdGlvbiAobikge1xyXG4gICAgICAgIHZhciByZW1RdW87XHJcbiAgICAgICAgaWYgKCFzaGlmdF9pc1NtYWxsKG4pKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihTdHJpbmcobikgKyBcIiBpcyB0b28gbGFyZ2UgZm9yIHNoaWZ0aW5nLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbiA9ICtuO1xyXG4gICAgICAgIGlmIChuIDwgMCkgcmV0dXJuIHRoaXMuc2hpZnRMZWZ0KC1uKTtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcztcclxuICAgICAgICB3aGlsZSAobiA+PSBwb3dlcnMyTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuaXNaZXJvKCkpIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIHJlbVF1byA9IGRpdk1vZEFueShyZXN1bHQsIGhpZ2hlc3RQb3dlcjIpO1xyXG4gICAgICAgICAgICByZXN1bHQgPSByZW1RdW9bMV0uaXNOZWdhdGl2ZSgpID8gcmVtUXVvWzBdLnByZXYoKSA6IHJlbVF1b1swXTtcclxuICAgICAgICAgICAgbiAtPSBwb3dlcnMyTGVuZ3RoIC0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVtUXVvID0gZGl2TW9kQW55KHJlc3VsdCwgcG93ZXJzT2ZUd29bbl0pO1xyXG4gICAgICAgIHJldHVybiByZW1RdW9bMV0uaXNOZWdhdGl2ZSgpID8gcmVtUXVvWzBdLnByZXYoKSA6IHJlbVF1b1swXTtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLnNoaWZ0UmlnaHQgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zaGlmdFJpZ2h0O1xyXG5cclxuICAgIGZ1bmN0aW9uIGJpdHdpc2UoeCwgeSwgZm4pIHtcclxuICAgICAgICB5ID0gcGFyc2VWYWx1ZSh5KTtcclxuICAgICAgICB2YXIgeFNpZ24gPSB4LmlzTmVnYXRpdmUoKSwgeVNpZ24gPSB5LmlzTmVnYXRpdmUoKTtcclxuICAgICAgICB2YXIgeFJlbSA9IHhTaWduID8geC5ub3QoKSA6IHgsXHJcbiAgICAgICAgICAgIHlSZW0gPSB5U2lnbiA/IHkubm90KCkgOiB5O1xyXG4gICAgICAgIHZhciB4RGlnaXQgPSAwLCB5RGlnaXQgPSAwO1xyXG4gICAgICAgIHZhciB4RGl2TW9kID0gbnVsbCwgeURpdk1vZCA9IG51bGw7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIHdoaWxlICgheFJlbS5pc1plcm8oKSB8fCAheVJlbS5pc1plcm8oKSkge1xyXG4gICAgICAgICAgICB4RGl2TW9kID0gZGl2TW9kQW55KHhSZW0sIGhpZ2hlc3RQb3dlcjIpO1xyXG4gICAgICAgICAgICB4RGlnaXQgPSB4RGl2TW9kWzFdLnRvSlNOdW1iZXIoKTtcclxuICAgICAgICAgICAgaWYgKHhTaWduKSB7XHJcbiAgICAgICAgICAgICAgICB4RGlnaXQgPSBoaWdoZXN0UG93ZXIyIC0gMSAtIHhEaWdpdDsgLy8gdHdvJ3MgY29tcGxlbWVudCBmb3IgbmVnYXRpdmUgbnVtYmVyc1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB5RGl2TW9kID0gZGl2TW9kQW55KHlSZW0sIGhpZ2hlc3RQb3dlcjIpO1xyXG4gICAgICAgICAgICB5RGlnaXQgPSB5RGl2TW9kWzFdLnRvSlNOdW1iZXIoKTtcclxuICAgICAgICAgICAgaWYgKHlTaWduKSB7XHJcbiAgICAgICAgICAgICAgICB5RGlnaXQgPSBoaWdoZXN0UG93ZXIyIC0gMSAtIHlEaWdpdDsgLy8gdHdvJ3MgY29tcGxlbWVudCBmb3IgbmVnYXRpdmUgbnVtYmVyc1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB4UmVtID0geERpdk1vZFswXTtcclxuICAgICAgICAgICAgeVJlbSA9IHlEaXZNb2RbMF07XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGZuKHhEaWdpdCwgeURpZ2l0KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzdW0gPSBmbih4U2lnbiA/IDEgOiAwLCB5U2lnbiA/IDEgOiAwKSAhPT0gMCA/IGJpZ0ludCgtMSkgOiBiaWdJbnQoMCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IHJlc3VsdC5sZW5ndGggLSAxOyBpID49IDA7IGkgLT0gMSkge1xyXG4gICAgICAgICAgICBzdW0gPSBzdW0ubXVsdGlwbHkoaGlnaGVzdFBvd2VyMikuYWRkKGJpZ0ludChyZXN1bHRbaV0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN1bTtcclxuICAgIH1cclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5ub3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmVnYXRlKCkucHJldigpO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUubm90ID0gQmlnSW50ZWdlci5wcm90b3R5cGUubm90O1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmFuZCA9IGZ1bmN0aW9uIChuKSB7XHJcbiAgICAgICAgcmV0dXJuIGJpdHdpc2UodGhpcywgbiwgZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEgJiBiOyB9KTtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLmFuZCA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmFuZDtcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5vciA9IGZ1bmN0aW9uIChuKSB7XHJcbiAgICAgICAgcmV0dXJuIGJpdHdpc2UodGhpcywgbiwgZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEgfCBiOyB9KTtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLm9yID0gQmlnSW50ZWdlci5wcm90b3R5cGUub3I7XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUueG9yID0gZnVuY3Rpb24gKG4pIHtcclxuICAgICAgICByZXR1cm4gYml0d2lzZSh0aGlzLCBuLCBmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYSBeIGI7IH0pO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUueG9yID0gQmlnSW50ZWdlci5wcm90b3R5cGUueG9yO1xyXG5cclxuICAgIHZhciBMT0JNQVNLX0kgPSAxIDw8IDMwLCBMT0JNQVNLX0JJID0gKEJBU0UgJiAtQkFTRSkgKiAoQkFTRSAmIC1CQVNFKSB8IExPQk1BU0tfSTtcclxuICAgIGZ1bmN0aW9uIHJvdWdoTE9CKG4pIHsgLy8gZ2V0IGxvd2VzdE9uZUJpdCAocm91Z2gpXHJcbiAgICAgICAgLy8gU21hbGxJbnRlZ2VyOiByZXR1cm4gTWluKGxvd2VzdE9uZUJpdChuKSwgMSA8PCAzMClcclxuICAgICAgICAvLyBCaWdJbnRlZ2VyOiByZXR1cm4gTWluKGxvd2VzdE9uZUJpdChuKSwgMSA8PCAxNCkgW0JBU0U9MWU3XVxyXG4gICAgICAgIHZhciB2ID0gbi52YWx1ZSwgeCA9IHR5cGVvZiB2ID09PSBcIm51bWJlclwiID8gdiB8IExPQk1BU0tfSSA6IHZbMF0gKyB2WzFdICogQkFTRSB8IExPQk1BU0tfQkk7XHJcbiAgICAgICAgcmV0dXJuIHggJiAteDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbnRlZ2VyTG9nYXJpdGhtKHZhbHVlLCBiYXNlKSB7XHJcbiAgICAgICAgaWYgKGJhc2UuY29tcGFyZVRvKHZhbHVlKSA8PSAwKSB7XHJcbiAgICAgICAgICAgIHZhciB0bXAgPSBpbnRlZ2VyTG9nYXJpdGhtKHZhbHVlLCBiYXNlLnNxdWFyZShiYXNlKSk7XHJcbiAgICAgICAgICAgIHZhciBwID0gdG1wLnA7XHJcbiAgICAgICAgICAgIHZhciBlID0gdG1wLmU7XHJcbiAgICAgICAgICAgIHZhciB0ID0gcC5tdWx0aXBseShiYXNlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHQuY29tcGFyZVRvKHZhbHVlKSA8PSAwID8geyBwOiB0LCBlOiBlICogMiArIDEgfSA6IHsgcDogcCwgZTogZSAqIDIgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHsgcDogYmlnSW50KDEpLCBlOiAwIH07XHJcbiAgICB9XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYml0TGVuZ3RoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBuID0gdGhpcztcclxuICAgICAgICBpZiAobi5jb21wYXJlVG8oYmlnSW50KDApKSA8IDApIHtcclxuICAgICAgICAgICAgbiA9IG4ubmVnYXRlKCkuc3VidHJhY3QoYmlnSW50KDEpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG4uY29tcGFyZVRvKGJpZ0ludCgwKSkgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGJpZ0ludCgwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJpZ0ludChpbnRlZ2VyTG9nYXJpdGhtKG4sIGJpZ0ludCgyKSkuZSkuYWRkKGJpZ0ludCgxKSk7XHJcbiAgICB9XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLmJpdExlbmd0aCA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmJpdExlbmd0aDtcclxuXHJcbiAgICBmdW5jdGlvbiBtYXgoYSwgYikge1xyXG4gICAgICAgIGEgPSBwYXJzZVZhbHVlKGEpO1xyXG4gICAgICAgIGIgPSBwYXJzZVZhbHVlKGIpO1xyXG4gICAgICAgIHJldHVybiBhLmdyZWF0ZXIoYikgPyBhIDogYjtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG1pbihhLCBiKSB7XHJcbiAgICAgICAgYSA9IHBhcnNlVmFsdWUoYSk7XHJcbiAgICAgICAgYiA9IHBhcnNlVmFsdWUoYik7XHJcbiAgICAgICAgcmV0dXJuIGEubGVzc2VyKGIpID8gYSA6IGI7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnY2QoYSwgYikge1xyXG4gICAgICAgIGEgPSBwYXJzZVZhbHVlKGEpLmFicygpO1xyXG4gICAgICAgIGIgPSBwYXJzZVZhbHVlKGIpLmFicygpO1xyXG4gICAgICAgIGlmIChhLmVxdWFscyhiKSkgcmV0dXJuIGE7XHJcbiAgICAgICAgaWYgKGEuaXNaZXJvKCkpIHJldHVybiBiO1xyXG4gICAgICAgIGlmIChiLmlzWmVybygpKSByZXR1cm4gYTtcclxuICAgICAgICB2YXIgYyA9IEludGVnZXJbMV0sIGQsIHQ7XHJcbiAgICAgICAgd2hpbGUgKGEuaXNFdmVuKCkgJiYgYi5pc0V2ZW4oKSkge1xyXG4gICAgICAgICAgICBkID0gTWF0aC5taW4ocm91Z2hMT0IoYSksIHJvdWdoTE9CKGIpKTtcclxuICAgICAgICAgICAgYSA9IGEuZGl2aWRlKGQpO1xyXG4gICAgICAgICAgICBiID0gYi5kaXZpZGUoZCk7XHJcbiAgICAgICAgICAgIGMgPSBjLm11bHRpcGx5KGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAoYS5pc0V2ZW4oKSkge1xyXG4gICAgICAgICAgICBhID0gYS5kaXZpZGUocm91Z2hMT0IoYSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIHdoaWxlIChiLmlzRXZlbigpKSB7XHJcbiAgICAgICAgICAgICAgICBiID0gYi5kaXZpZGUocm91Z2hMT0IoYikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhLmdyZWF0ZXIoYikpIHtcclxuICAgICAgICAgICAgICAgIHQgPSBiOyBiID0gYTsgYSA9IHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYiA9IGIuc3VidHJhY3QoYSk7XHJcbiAgICAgICAgfSB3aGlsZSAoIWIuaXNaZXJvKCkpO1xyXG4gICAgICAgIHJldHVybiBjLmlzVW5pdCgpID8gYSA6IGEubXVsdGlwbHkoYyk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBsY20oYSwgYikge1xyXG4gICAgICAgIGEgPSBwYXJzZVZhbHVlKGEpLmFicygpO1xyXG4gICAgICAgIGIgPSBwYXJzZVZhbHVlKGIpLmFicygpO1xyXG4gICAgICAgIHJldHVybiBhLmRpdmlkZShnY2QoYSwgYikpLm11bHRpcGx5KGIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmFuZEJldHdlZW4oYSwgYikge1xyXG4gICAgICAgIGEgPSBwYXJzZVZhbHVlKGEpO1xyXG4gICAgICAgIGIgPSBwYXJzZVZhbHVlKGIpO1xyXG4gICAgICAgIHZhciBsb3cgPSBtaW4oYSwgYiksIGhpZ2ggPSBtYXgoYSwgYik7XHJcbiAgICAgICAgdmFyIHJhbmdlID0gaGlnaC5zdWJ0cmFjdChsb3cpLmFkZCgxKTtcclxuICAgICAgICBpZiAocmFuZ2UuaXNTbWFsbCkgcmV0dXJuIGxvdy5hZGQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmFuZ2UpKTtcclxuICAgICAgICB2YXIgbGVuZ3RoID0gcmFuZ2UudmFsdWUubGVuZ3RoIC0gMTtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gW10sIHJlc3RyaWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSBsZW5ndGg7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIHZhciB0b3AgPSByZXN0cmljdGVkID8gcmFuZ2UudmFsdWVbaV0gOiBCQVNFO1xyXG4gICAgICAgICAgICB2YXIgZGlnaXQgPSB0cnVuY2F0ZShNYXRoLnJhbmRvbSgpICogdG9wKTtcclxuICAgICAgICAgICAgcmVzdWx0LnVuc2hpZnQoZGlnaXQpO1xyXG4gICAgICAgICAgICBpZiAoZGlnaXQgPCB0b3ApIHJlc3RyaWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzdWx0ID0gYXJyYXlUb1NtYWxsKHJlc3VsdCk7XHJcbiAgICAgICAgcmV0dXJuIGxvdy5hZGQodHlwZW9mIHJlc3VsdCA9PT0gXCJudW1iZXJcIiA/IG5ldyBTbWFsbEludGVnZXIocmVzdWx0KSA6IG5ldyBCaWdJbnRlZ2VyKHJlc3VsdCwgZmFsc2UpKTtcclxuICAgIH1cclxuICAgIHZhciBwYXJzZUJhc2UgPSBmdW5jdGlvbiAodGV4dCwgYmFzZSkge1xyXG4gICAgICAgIHZhciBsZW5ndGggPSB0ZXh0Lmxlbmd0aDtcclxuICAgICAgICB2YXIgaTtcclxuICAgICAgICB2YXIgYWJzQmFzZSA9IE1hdGguYWJzKGJhc2UpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGMgPSB0ZXh0W2ldLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIGlmIChjID09PSBcIi1cIikgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmICgvW2EtejAtOV0vLnRlc3QoYykpIHtcclxuICAgICAgICAgICAgICAgIGlmICgvWzAtOV0vLnRlc3QoYykgJiYgK2MgPj0gYWJzQmFzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjID09PSBcIjFcIiAmJiBhYnNCYXNlID09PSAxKSBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYyArIFwiIGlzIG5vdCBhIHZhbGlkIGRpZ2l0IGluIGJhc2UgXCIgKyBiYXNlICsgXCIuXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjLmNoYXJDb2RlQXQoMCkgLSA4NyA+PSBhYnNCYXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGMgKyBcIiBpcyBub3QgYSB2YWxpZCBkaWdpdCBpbiBiYXNlIFwiICsgYmFzZSArIFwiLlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoMiA8PSBiYXNlICYmIGJhc2UgPD0gMzYpIHtcclxuICAgICAgICAgICAgaWYgKGxlbmd0aCA8PSBMT0dfTUFYX0lOVCAvIE1hdGgubG9nKGJhc2UpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gcGFyc2VJbnQodGV4dCwgYmFzZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNOYU4ocmVzdWx0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihjICsgXCIgaXMgbm90IGEgdmFsaWQgZGlnaXQgaW4gYmFzZSBcIiArIGJhc2UgKyBcIi5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNtYWxsSW50ZWdlcihwYXJzZUludCh0ZXh0LCBiYXNlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYmFzZSA9IHBhcnNlVmFsdWUoYmFzZSk7XHJcbiAgICAgICAgdmFyIGRpZ2l0cyA9IFtdO1xyXG4gICAgICAgIHZhciBpc05lZ2F0aXZlID0gdGV4dFswXSA9PT0gXCItXCI7XHJcbiAgICAgICAgZm9yIChpID0gaXNOZWdhdGl2ZSA/IDEgOiAwOyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgYyA9IHRleHRbaV0udG9Mb3dlckNhc2UoKSxcclxuICAgICAgICAgICAgICAgIGNoYXJDb2RlID0gYy5jaGFyQ29kZUF0KDApO1xyXG4gICAgICAgICAgICBpZiAoNDggPD0gY2hhckNvZGUgJiYgY2hhckNvZGUgPD0gNTcpIGRpZ2l0cy5wdXNoKHBhcnNlVmFsdWUoYykpO1xyXG4gICAgICAgICAgICBlbHNlIGlmICg5NyA8PSBjaGFyQ29kZSAmJiBjaGFyQ29kZSA8PSAxMjIpIGRpZ2l0cy5wdXNoKHBhcnNlVmFsdWUoYy5jaGFyQ29kZUF0KDApIC0gODcpKTtcclxuICAgICAgICAgICAgZWxzZSBpZiAoYyA9PT0gXCI8XCIpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzdGFydCA9IGk7XHJcbiAgICAgICAgICAgICAgICBkbyB7IGkrKzsgfSB3aGlsZSAodGV4dFtpXSAhPT0gXCI+XCIpO1xyXG4gICAgICAgICAgICAgICAgZGlnaXRzLnB1c2gocGFyc2VWYWx1ZSh0ZXh0LnNsaWNlKHN0YXJ0ICsgMSwgaSkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHRocm93IG5ldyBFcnJvcihjICsgXCIgaXMgbm90IGEgdmFsaWQgY2hhcmFjdGVyXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcGFyc2VCYXNlRnJvbUFycmF5KGRpZ2l0cywgYmFzZSwgaXNOZWdhdGl2ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHBhcnNlQmFzZUZyb21BcnJheShkaWdpdHMsIGJhc2UsIGlzTmVnYXRpdmUpIHtcclxuICAgICAgICB2YXIgdmFsID0gSW50ZWdlclswXSwgcG93ID0gSW50ZWdlclsxXSwgaTtcclxuICAgICAgICBmb3IgKGkgPSBkaWdpdHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgdmFsID0gdmFsLmFkZChkaWdpdHNbaV0udGltZXMocG93KSk7XHJcbiAgICAgICAgICAgIHBvdyA9IHBvdy50aW1lcyhiYXNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGlzTmVnYXRpdmUgPyB2YWwubmVnYXRlKCkgOiB2YWw7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3RyaW5naWZ5KGRpZ2l0KSB7XHJcbiAgICAgICAgaWYgKGRpZ2l0IDw9IDM1KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIjAxMjM0NTY3ODlhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5elwiLmNoYXJBdChkaWdpdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcIjxcIiArIGRpZ2l0ICsgXCI+XCI7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdG9CYXNlKG4sIGJhc2UpIHtcclxuICAgICAgICBiYXNlID0gYmlnSW50KGJhc2UpO1xyXG4gICAgICAgIGlmIChiYXNlLmlzWmVybygpKSB7XHJcbiAgICAgICAgICAgIGlmIChuLmlzWmVybygpKSByZXR1cm4geyB2YWx1ZTogWzBdLCBpc05lZ2F0aXZlOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgY29udmVydCBub256ZXJvIG51bWJlcnMgdG8gYmFzZSAwLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJhc2UuZXF1YWxzKC0xKSkge1xyXG4gICAgICAgICAgICBpZiAobi5pc1plcm8oKSkgcmV0dXJuIHsgdmFsdWU6IFswXSwgaXNOZWdhdGl2ZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgaWYgKG4uaXNOZWdhdGl2ZSgpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogW10uY29uY2F0LmFwcGx5KFtdLCBBcnJheS5hcHBseShudWxsLCBBcnJheSgtbikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoQXJyYXkucHJvdG90eXBlLnZhbHVlT2YsIFsxLCAwXSlcclxuICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzTmVnYXRpdmU6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdmFyIGFyciA9IEFycmF5LmFwcGx5KG51bGwsIEFycmF5KCtuIC0gMSkpXHJcbiAgICAgICAgICAgICAgICAubWFwKEFycmF5LnByb3RvdHlwZS52YWx1ZU9mLCBbMCwgMV0pO1xyXG4gICAgICAgICAgICBhcnIudW5zaGlmdChbMV0pO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFtdLmNvbmNhdC5hcHBseShbXSwgYXJyKSxcclxuICAgICAgICAgICAgICAgIGlzTmVnYXRpdmU6IGZhbHNlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgbmVnID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKG4uaXNOZWdhdGl2ZSgpICYmIGJhc2UuaXNQb3NpdGl2ZSgpKSB7XHJcbiAgICAgICAgICAgIG5lZyA9IHRydWU7XHJcbiAgICAgICAgICAgIG4gPSBuLmFicygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYmFzZS5lcXVhbHMoMSkpIHtcclxuICAgICAgICAgICAgaWYgKG4uaXNaZXJvKCkpIHJldHVybiB7IHZhbHVlOiBbMF0sIGlzTmVnYXRpdmU6IGZhbHNlIH07XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IEFycmF5LmFwcGx5KG51bGwsIEFycmF5KCtuKSlcclxuICAgICAgICAgICAgICAgICAgICAubWFwKE51bWJlci5wcm90b3R5cGUudmFsdWVPZiwgMSksXHJcbiAgICAgICAgICAgICAgICBpc05lZ2F0aXZlOiBuZWdcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG91dCA9IFtdO1xyXG4gICAgICAgIHZhciBsZWZ0ID0gbiwgZGl2bW9kO1xyXG4gICAgICAgIHdoaWxlIChsZWZ0LmlzTmVnYXRpdmUoKSB8fCBsZWZ0LmNvbXBhcmVBYnMoYmFzZSkgPj0gMCkge1xyXG4gICAgICAgICAgICBkaXZtb2QgPSBsZWZ0LmRpdm1vZChiYXNlKTtcclxuICAgICAgICAgICAgbGVmdCA9IGRpdm1vZC5xdW90aWVudDtcclxuICAgICAgICAgICAgdmFyIGRpZ2l0ID0gZGl2bW9kLnJlbWFpbmRlcjtcclxuICAgICAgICAgICAgaWYgKGRpZ2l0LmlzTmVnYXRpdmUoKSkge1xyXG4gICAgICAgICAgICAgICAgZGlnaXQgPSBiYXNlLm1pbnVzKGRpZ2l0KS5hYnMoKTtcclxuICAgICAgICAgICAgICAgIGxlZnQgPSBsZWZ0Lm5leHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvdXQucHVzaChkaWdpdC50b0pTTnVtYmVyKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvdXQucHVzaChsZWZ0LnRvSlNOdW1iZXIoKSk7XHJcbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG91dC5yZXZlcnNlKCksIGlzTmVnYXRpdmU6IG5lZyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRvQmFzZVN0cmluZyhuLCBiYXNlKSB7XHJcbiAgICAgICAgdmFyIGFyciA9IHRvQmFzZShuLCBiYXNlKTtcclxuICAgICAgICByZXR1cm4gKGFyci5pc05lZ2F0aXZlID8gXCItXCIgOiBcIlwiKSArIGFyci52YWx1ZS5tYXAoc3RyaW5naWZ5KS5qb2luKCcnKTtcclxuICAgIH1cclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS50b0FycmF5ID0gZnVuY3Rpb24gKHJhZGl4KSB7XHJcbiAgICAgICAgcmV0dXJuIHRvQmFzZSh0aGlzLCByYWRpeCk7XHJcbiAgICB9O1xyXG5cclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUudG9BcnJheSA9IGZ1bmN0aW9uIChyYWRpeCkge1xyXG4gICAgICAgIHJldHVybiB0b0Jhc2UodGhpcywgcmFkaXgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIChyYWRpeCkge1xyXG4gICAgICAgIGlmIChyYWRpeCA9PT0gdW5kZWZpbmVkKSByYWRpeCA9IDEwO1xyXG4gICAgICAgIGlmIChyYWRpeCAhPT0gMTApIHJldHVybiB0b0Jhc2VTdHJpbmcodGhpcywgcmFkaXgpO1xyXG4gICAgICAgIHZhciB2ID0gdGhpcy52YWx1ZSwgbCA9IHYubGVuZ3RoLCBzdHIgPSBTdHJpbmcodlstLWxdKSwgemVyb3MgPSBcIjAwMDAwMDBcIiwgZGlnaXQ7XHJcbiAgICAgICAgd2hpbGUgKC0tbCA+PSAwKSB7XHJcbiAgICAgICAgICAgIGRpZ2l0ID0gU3RyaW5nKHZbbF0pO1xyXG4gICAgICAgICAgICBzdHIgKz0gemVyb3Muc2xpY2UoZGlnaXQubGVuZ3RoKSArIGRpZ2l0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc2lnbiA9IHRoaXMuc2lnbiA/IFwiLVwiIDogXCJcIjtcclxuICAgICAgICByZXR1cm4gc2lnbiArIHN0cjtcclxuICAgIH07XHJcblxyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIChyYWRpeCkge1xyXG4gICAgICAgIGlmIChyYWRpeCA9PT0gdW5kZWZpbmVkKSByYWRpeCA9IDEwO1xyXG4gICAgICAgIGlmIChyYWRpeCAhPSAxMCkgcmV0dXJuIHRvQmFzZVN0cmluZyh0aGlzLCByYWRpeCk7XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZyh0aGlzLnZhbHVlKTtcclxuICAgIH07XHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS50b0pTT04gPSBTbWFsbEludGVnZXIucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTsgfVxyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnZhbHVlT2YgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMudG9TdHJpbmcoKSwgMTApO1xyXG4gICAgfTtcclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnRvSlNOdW1iZXIgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS52YWx1ZU9mO1xyXG5cclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUudmFsdWVPZiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLnRvSlNOdW1iZXIgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLnZhbHVlT2Y7XHJcblxyXG4gICAgZnVuY3Rpb24gcGFyc2VTdHJpbmdWYWx1ZSh2KSB7XHJcbiAgICAgICAgaWYgKGlzUHJlY2lzZSgrdikpIHtcclxuICAgICAgICAgICAgdmFyIHggPSArdjtcclxuICAgICAgICAgICAgaWYgKHggPT09IHRydW5jYXRlKHgpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTbWFsbEludGVnZXIoeCk7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgaW50ZWdlcjogXCIgKyB2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHNpZ24gPSB2WzBdID09PSBcIi1cIjtcclxuICAgICAgICBpZiAoc2lnbikgdiA9IHYuc2xpY2UoMSk7XHJcbiAgICAgICAgdmFyIHNwbGl0ID0gdi5zcGxpdCgvZS9pKTtcclxuICAgICAgICBpZiAoc3BsaXQubGVuZ3RoID4gMikgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBpbnRlZ2VyOiBcIiArIHNwbGl0LmpvaW4oXCJlXCIpKTtcclxuICAgICAgICBpZiAoc3BsaXQubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgICAgIHZhciBleHAgPSBzcGxpdFsxXTtcclxuICAgICAgICAgICAgaWYgKGV4cFswXSA9PT0gXCIrXCIpIGV4cCA9IGV4cC5zbGljZSgxKTtcclxuICAgICAgICAgICAgZXhwID0gK2V4cDtcclxuICAgICAgICAgICAgaWYgKGV4cCAhPT0gdHJ1bmNhdGUoZXhwKSB8fCAhaXNQcmVjaXNlKGV4cCkpIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgaW50ZWdlcjogXCIgKyBleHAgKyBcIiBpcyBub3QgYSB2YWxpZCBleHBvbmVudC5cIik7XHJcbiAgICAgICAgICAgIHZhciB0ZXh0ID0gc3BsaXRbMF07XHJcbiAgICAgICAgICAgIHZhciBkZWNpbWFsUGxhY2UgPSB0ZXh0LmluZGV4T2YoXCIuXCIpO1xyXG4gICAgICAgICAgICBpZiAoZGVjaW1hbFBsYWNlID49IDApIHtcclxuICAgICAgICAgICAgICAgIGV4cCAtPSB0ZXh0Lmxlbmd0aCAtIGRlY2ltYWxQbGFjZSAtIDE7XHJcbiAgICAgICAgICAgICAgICB0ZXh0ID0gdGV4dC5zbGljZSgwLCBkZWNpbWFsUGxhY2UpICsgdGV4dC5zbGljZShkZWNpbWFsUGxhY2UgKyAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZXhwIDwgMCkgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGluY2x1ZGUgbmVnYXRpdmUgZXhwb25lbnQgcGFydCBmb3IgaW50ZWdlcnNcIik7XHJcbiAgICAgICAgICAgIHRleHQgKz0gKG5ldyBBcnJheShleHAgKyAxKSkuam9pbihcIjBcIik7XHJcbiAgICAgICAgICAgIHYgPSB0ZXh0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaXNWYWxpZCA9IC9eKFswLTldWzAtOV0qKSQvLnRlc3Qodik7XHJcbiAgICAgICAgaWYgKCFpc1ZhbGlkKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGludGVnZXI6IFwiICsgdik7XHJcbiAgICAgICAgdmFyIHIgPSBbXSwgbWF4ID0gdi5sZW5ndGgsIGwgPSBMT0dfQkFTRSwgbWluID0gbWF4IC0gbDtcclxuICAgICAgICB3aGlsZSAobWF4ID4gMCkge1xyXG4gICAgICAgICAgICByLnB1c2goK3Yuc2xpY2UobWluLCBtYXgpKTtcclxuICAgICAgICAgICAgbWluIC09IGw7XHJcbiAgICAgICAgICAgIGlmIChtaW4gPCAwKSBtaW4gPSAwO1xyXG4gICAgICAgICAgICBtYXggLT0gbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJpbShyKTtcclxuICAgICAgICByZXR1cm4gbmV3IEJpZ0ludGVnZXIociwgc2lnbik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGFyc2VOdW1iZXJWYWx1ZSh2KSB7XHJcbiAgICAgICAgaWYgKGlzUHJlY2lzZSh2KSkge1xyXG4gICAgICAgICAgICBpZiAodiAhPT0gdHJ1bmNhdGUodikpIHRocm93IG5ldyBFcnJvcih2ICsgXCIgaXMgbm90IGFuIGludGVnZXIuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFNtYWxsSW50ZWdlcih2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlU3RyaW5nVmFsdWUodi50b1N0cmluZygpKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwYXJzZVZhbHVlKHYpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHYgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlTnVtYmVyVmFsdWUodik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgdiA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VTdHJpbmdWYWx1ZSh2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHY7XHJcbiAgICB9XHJcbiAgICAvLyBQcmUtZGVmaW5lIG51bWJlcnMgaW4gcmFuZ2UgWy05OTksOTk5XVxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMDAwOyBpKyspIHtcclxuICAgICAgICBJbnRlZ2VyW2ldID0gbmV3IFNtYWxsSW50ZWdlcihpKTtcclxuICAgICAgICBpZiAoaSA+IDApIEludGVnZXJbLWldID0gbmV3IFNtYWxsSW50ZWdlcigtaSk7XHJcbiAgICB9XHJcbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxyXG4gICAgSW50ZWdlci5vbmUgPSBJbnRlZ2VyWzFdO1xyXG4gICAgSW50ZWdlci56ZXJvID0gSW50ZWdlclswXTtcclxuICAgIEludGVnZXIubWludXNPbmUgPSBJbnRlZ2VyWy0xXTtcclxuICAgIEludGVnZXIubWF4ID0gbWF4O1xyXG4gICAgSW50ZWdlci5taW4gPSBtaW47XHJcbiAgICBJbnRlZ2VyLmdjZCA9IGdjZDtcclxuICAgIEludGVnZXIubGNtID0gbGNtO1xyXG4gICAgSW50ZWdlci5pc0luc3RhbmNlID0gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHggaW5zdGFuY2VvZiBCaWdJbnRlZ2VyIHx8IHggaW5zdGFuY2VvZiBTbWFsbEludGVnZXI7IH07XHJcbiAgICBJbnRlZ2VyLnJhbmRCZXR3ZWVuID0gcmFuZEJldHdlZW47XHJcblxyXG4gICAgSW50ZWdlci5mcm9tQXJyYXkgPSBmdW5jdGlvbiAoZGlnaXRzLCBiYXNlLCBpc05lZ2F0aXZlKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlQmFzZUZyb21BcnJheShkaWdpdHMubWFwKHBhcnNlVmFsdWUpLCBwYXJzZVZhbHVlKGJhc2UgfHwgMTApLCBpc05lZ2F0aXZlKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIEludGVnZXI7XHJcbn0pKCk7XHJcblxyXG4vLyBOb2RlLmpzIGNoZWNrXHJcbmlmICh0eXBlb2YgbW9kdWxlICE9PSBcInVuZGVmaW5lZFwiICYmIG1vZHVsZS5oYXNPd25Qcm9wZXJ0eShcImV4cG9ydHNcIikpIHtcclxuICAgIG1vZHVsZS5leHBvcnRzID0gYmlnSW50O1xyXG59XHJcblxyXG4vL2FtZCBjaGVja1xyXG5pZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcclxuICAgIGRlZmluZShcImJpZy1pbnRlZ2VyXCIsIFtdLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGJpZ0ludDtcclxuICAgIH0pO1xyXG59XHJcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuLy8gVGhpcyBtZXRob2Qgb2Ygb2J0YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0IG5lZWRzIHRvIGJlXG4vLyBrZXB0IGlkZW50aWNhbCB0byB0aGUgd2F5IGl0IGlzIG9idGFpbmVkIGluIHJ1bnRpbWUuanNcbnZhciBnID0gKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcyB9KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcblxuLy8gVXNlIGBnZXRPd25Qcm9wZXJ0eU5hbWVzYCBiZWNhdXNlIG5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCBjYWxsaW5nXG4vLyBgaGFzT3duUHJvcGVydHlgIG9uIHRoZSBnbG9iYWwgYHNlbGZgIG9iamVjdCBpbiBhIHdvcmtlci4gU2VlICMxODMuXG52YXIgaGFkUnVudGltZSA9IGcucmVnZW5lcmF0b3JSdW50aW1lICYmXG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGcpLmluZGV4T2YoXCJyZWdlbmVyYXRvclJ1bnRpbWVcIikgPj0gMDtcblxuLy8gU2F2ZSB0aGUgb2xkIHJlZ2VuZXJhdG9yUnVudGltZSBpbiBjYXNlIGl0IG5lZWRzIHRvIGJlIHJlc3RvcmVkIGxhdGVyLlxudmFyIG9sZFJ1bnRpbWUgPSBoYWRSdW50aW1lICYmIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuXG4vLyBGb3JjZSByZWV2YWx1dGF0aW9uIG9mIHJ1bnRpbWUuanMuXG5nLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9ydW50aW1lXCIpO1xuXG5pZiAoaGFkUnVudGltZSkge1xuICAvLyBSZXN0b3JlIHRoZSBvcmlnaW5hbCBydW50aW1lLlxuICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IG9sZFJ1bnRpbWU7XG59IGVsc2Uge1xuICAvLyBSZW1vdmUgdGhlIGdsb2JhbCBwcm9wZXJ0eSBhZGRlZCBieSBydW50aW1lLmpzLlxuICB0cnkge1xuICAgIGRlbGV0ZSBnLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgfSBjYXRjaChlKSB7XG4gICAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG4gIH1cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuIShmdW5jdGlvbihnbG9iYWwpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICB2YXIgaW5Nb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiO1xuICB2YXIgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIGlmIChydW50aW1lKSB7XG4gICAgaWYgKGluTW9kdWxlKSB7XG4gICAgICAvLyBJZiByZWdlbmVyYXRvclJ1bnRpbWUgaXMgZGVmaW5lZCBnbG9iYWxseSBhbmQgd2UncmUgaW4gYSBtb2R1bGUsXG4gICAgICAvLyBtYWtlIHRoZSBleHBvcnRzIG9iamVjdCBpZGVudGljYWwgdG8gcmVnZW5lcmF0b3JSdW50aW1lLlxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuICAgIH1cbiAgICAvLyBEb24ndCBib3RoZXIgZXZhbHVhdGluZyB0aGUgcmVzdCBvZiB0aGlzIGZpbGUgaWYgdGhlIHJ1bnRpbWUgd2FzXG4gICAgLy8gYWxyZWFkeSBkZWZpbmVkIGdsb2JhbGx5LlxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIERlZmluZSB0aGUgcnVudGltZSBnbG9iYWxseSAoYXMgZXhwZWN0ZWQgYnkgZ2VuZXJhdGVkIGNvZGUpIGFzIGVpdGhlclxuICAvLyBtb2R1bGUuZXhwb3J0cyAoaWYgd2UncmUgaW4gYSBtb2R1bGUpIG9yIGEgbmV3LCBlbXB0eSBvYmplY3QuXG4gIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lID0gaW5Nb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA6IHt9O1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIHJ1bnRpbWUud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgcnVudGltZS5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIHJ1bnRpbWUuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLiBJZiB0aGUgUHJvbWlzZSBpcyByZWplY3RlZCwgaG93ZXZlciwgdGhlXG4gICAgICAgICAgLy8gcmVzdWx0IGZvciB0aGlzIGl0ZXJhdGlvbiB3aWxsIGJlIHJlamVjdGVkIHdpdGggdGhlIHNhbWVcbiAgICAgICAgICAvLyByZWFzb24uIE5vdGUgdGhhdCByZWplY3Rpb25zIG9mIHlpZWxkZWQgUHJvbWlzZXMgYXJlIG5vdFxuICAgICAgICAgIC8vIHRocm93biBiYWNrIGludG8gdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgYXMgaXMgdGhlIGNhc2VcbiAgICAgICAgICAvLyB3aGVuIGFuIGF3YWl0ZWQgUHJvbWlzZSBpcyByZWplY3RlZC4gVGhpcyBkaWZmZXJlbmNlIGluXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYmV0d2VlbiB5aWVsZCBhbmQgYXdhaXQgaXMgaW1wb3J0YW50LCBiZWNhdXNlIGl0XG4gICAgICAgICAgLy8gYWxsb3dzIHRoZSBjb25zdW1lciB0byBkZWNpZGUgd2hhdCB0byBkbyB3aXRoIHRoZSB5aWVsZGVkXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIChzd2FsbG93IGl0IGFuZCBjb250aW51ZSwgbWFudWFsbHkgLnRocm93IGl0IGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBnZW5lcmF0b3IsIGFiYW5kb24gaXRlcmF0aW9uLCB3aGF0ZXZlcikuIFdpdGhcbiAgICAgICAgICAvLyBhd2FpdCwgYnkgY29udHJhc3QsIHRoZXJlIGlzIG5vIG9wcG9ydHVuaXR5IHRvIGV4YW1pbmUgdGhlXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIHJlYXNvbiBvdXRzaWRlIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIHNvIHRoZVxuICAgICAgICAgIC8vIG9ubHkgb3B0aW9uIGlzIHRvIHRocm93IGl0IGZyb20gdGhlIGF3YWl0IGV4cHJlc3Npb24sIGFuZFxuICAgICAgICAgIC8vIGxldCB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhbmRsZSB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgcnVudGltZS5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBydW50aW1lLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgcnVudGltZS52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuICAvLyBJbiBzbG9wcHkgbW9kZSwgdW5ib3VuZCBgdGhpc2AgcmVmZXJzIHRvIHRoZSBnbG9iYWwgb2JqZWN0LCBmYWxsYmFjayB0b1xuICAvLyBGdW5jdGlvbiBjb25zdHJ1Y3RvciBpZiB3ZSdyZSBpbiBnbG9iYWwgc3RyaWN0IG1vZGUuIFRoYXQgaXMgc2FkbHkgYSBmb3JtXG4gIC8vIG9mIGluZGlyZWN0IGV2YWwgd2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kuXG4gIChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKClcbik7XG4iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBkYXRhRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvci9kYXRhRXJyb3JcIik7XHJcbmNvbnN0IHRyeXRlc18xID0gcmVxdWlyZShcIi4vdHJ5dGVzXCIpO1xyXG4vKipcclxuICogQSBjbGFzcyBmb3IgaGFuZGxpbmcgYWRkcmVzc2VzLlxyXG4gKi9cclxuY2xhc3MgQWRkcmVzcyB7XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGNvbnN0cnVjdG9yKGFkZHJlc3NUcnl0ZXMsIGNoZWNrc3VtVHJ5dGVzKSB7XHJcbiAgICAgICAgdGhpcy5fYWRkcmVzc1RyeXRlcyA9IGFkZHJlc3NUcnl0ZXM7XHJcbiAgICAgICAgdGhpcy5fY2hlY2tzdW1Ucnl0ZXMgPSBjaGVja3N1bVRyeXRlcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGFkZHJlc3MgZnJvbSB0cnl0ZXMuXHJcbiAgICAgKiBAcGFyYW0gYWRkcmVzcyBUaGUgdHJ5dGVzIHRvIGNyZWF0ZSB0aGUgYWRkcmVzcyBmcm9tLlxyXG4gICAgICogQHJldHVybnMgQW4gaW5zdGFuY2Ugb2YgQWRkcmVzcy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21Ucnl0ZXMoYWRkcmVzcykge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShhZGRyZXNzLCB0cnl0ZXNfMS5Ucnl0ZXMpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgYWRkcmVzcyBzaG91bGQgYmUgYSB2YWxpZCBUcnl0ZXMgb2JqZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0cnl0ZXNTdHJpbmcgPSBhZGRyZXNzLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgaWYgKHRyeXRlc1N0cmluZy5sZW5ndGggIT09IEFkZHJlc3MuTEVOR1RIICYmIHRyeXRlc1N0cmluZy5sZW5ndGggIT09IEFkZHJlc3MuTEVOR1RIX1dJVEhfQ0hFQ0tTVU0pIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIGFkZHJlc3Mgc2hvdWxkIGVpdGhlciBiZSAke0FkZHJlc3MuTEVOR1RIfSBvciAke0FkZHJlc3MuTEVOR1RIX1dJVEhfQ0hFQ0tTVU19IGNoYXJhY3RlcnMgaW4gbGVuZ3RoYCwgeyBsZW5ndGg6IHRyeXRlc1N0cmluZy5sZW5ndGggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGFkZHJlc3NUcnl0ZXMgPSB0cnl0ZXNTdHJpbmcuc3Vic3RyKDAsIEFkZHJlc3MuTEVOR1RIKTtcclxuICAgICAgICBsZXQgY2hlY2tzdW1Ucnl0ZXM7XHJcbiAgICAgICAgaWYgKHRyeXRlc1N0cmluZy5sZW5ndGggPT09IEFkZHJlc3MuTEVOR1RIX1dJVEhfQ0hFQ0tTVU0pIHtcclxuICAgICAgICAgICAgY2hlY2tzdW1Ucnl0ZXMgPSB0cnl0ZXNTdHJpbmcuc3Vic3RyKEFkZHJlc3MuTEVOR1RIKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBZGRyZXNzKGFkZHJlc3NUcnl0ZXMsIGNoZWNrc3VtVHJ5dGVzKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCB0aGUgYWRkcmVzcyB0byB0cnl0ZXMgd2l0aCBubyBjaGVja3N1bS5cclxuICAgICAqIEByZXR1cm5zIFRyeXRlcyB2ZXJzaW9uIG9mIHRoZSBhZGRyZXNzIHdpdGggbm8gY2hlY2tzdW0uXHJcbiAgICAgKi9cclxuICAgIHRvVHJ5dGVzKCkge1xyXG4gICAgICAgIHJldHVybiB0cnl0ZXNfMS5Ucnl0ZXMuZnJvbVN0cmluZyh0aGlzLl9hZGRyZXNzVHJ5dGVzKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCB0aGUgYWRkcmVzcyB0byB0cnl0ZXMgd2l0aCBhIGNoZWNrc3VtLCBjcmVhdGluZyBhIGJsYW5rIG9uZSBpZiBuZWVkZWQuXHJcbiAgICAgKiBAcmV0dXJucyBUcnl0ZXMgdmVyc2lvbiBvZiB0aGUgYWRkcmVzcyB3aXRoIGNoZWNrc3UsLlxyXG4gICAgICovXHJcbiAgICB0b1RyeXRlc1dpdGhDaGVja3N1bSgpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc0VtcHR5KHRoaXMuX2NoZWNrc3VtVHJ5dGVzKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ5dGVzXzEuVHJ5dGVzLmZyb21TdHJpbmcodGhpcy5fYWRkcmVzc1RyeXRlcyArIHRoaXMuX2NoZWNrc3VtVHJ5dGVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoaXMgYWRkcmVzcyBoYXMgbm8gY2hlY2tzdW0gY2FsY3VsYXRlZCBmb3IgaXRgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgc3RyaW5nIHZpZXcgb2YgdGhlIG9iamVjdC5cclxuICAgICAqIEByZXR1cm5zIHN0cmluZyBvZiB0aGUgdHJ5dGVzLlxyXG4gICAgICovXHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc0VtcHR5KHRoaXMuX2NoZWNrc3VtVHJ5dGVzKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYWRkcmVzc1RyeXRlcyArIHRoaXMuX2NoZWNrc3VtVHJ5dGVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FkZHJlc3NUcnl0ZXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBUaGUgbGVuZ3RoIGZvciBhIHZhbGlkIGFkZHJlc3Mgd2l0aG91dCBjaGVja3N1bSAoODEpLlxyXG4gKi9cclxuQWRkcmVzcy5MRU5HVEggPSA4MTtcclxuLyoqXHJcbiAqIFRoZSBsZW5ndGggZm9yIGFuIGFkZHJlc3MgY2hlY2tzdW0gKDkpLlxyXG4gKi9cclxuQWRkcmVzcy5MRU5HVEhfQ0hFQ0tTVU0gPSA5O1xyXG4vKipcclxuICogVGhlIGxlbmd0aCBmb3IgdmFsaWQgYWRkcmVzcyB3aXRoIGNoZWNrc3VtICg5MCkuXHJcbiAqL1xyXG5BZGRyZXNzLkxFTkdUSF9XSVRIX0NIRUNLU1VNID0gQWRkcmVzcy5MRU5HVEggKyBBZGRyZXNzLkxFTkdUSF9DSEVDS1NVTTtcclxuLyoqXHJcbiAqIEFuIGVtcHR5IGhhc2ggYWxsIDlzLlxyXG4gKi9cclxuQWRkcmVzcy5FTVBUWSA9IEFkZHJlc3MuZnJvbVRyeXRlcyh0cnl0ZXNfMS5Ucnl0ZXMuZnJvbVN0cmluZyhcIjlcIi5yZXBlYXQoQWRkcmVzcy5MRU5HVEgpKSk7XHJcbmV4cG9ydHMuQWRkcmVzcyA9IEFkZHJlc3M7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVlXUmtjbVZ6Y3k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlrWVhSaEwyRmtaSEpsYzNNdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTERSRlFVRjVSVHRCUVVONlJTeHJSRUZCSzBNN1FVRkRMME1zY1VOQlFXdERPMEZCUld4RE96dEhRVVZITzBGQlEwZzdTVUYzUWtrc1pVRkJaVHRKUVVObUxGbEJRVzlDTEdGQlFYRkNMRVZCUVVVc1kwRkJjMEk3VVVGRE4wUXNTVUZCU1N4RFFVRkRMR05CUVdNc1IwRkJSeXhoUVVGaExFTkJRVU03VVVGRGNFTXNTVUZCU1N4RFFVRkRMR1ZCUVdVc1IwRkJTU3hqUVVGakxFTkJRVU03U1VGRE0wTXNRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFOUJRV1U3VVVGRGNFTXNTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEU5QlFVOHNSVUZCUlN4bFFVRk5MRU5CUVVNc1JVRkJSVHRaUVVOMlF5eE5RVUZOTEVsQlFVa3NjVUpCUVZNc1EwRkJReXcyUTBGQk5rTXNRMEZCUXl4RFFVRkRPMU5CUTNSRk8xRkJSVVFzVFVGQlRTeFpRVUZaTEVkQlFVY3NUMEZCVHl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8xRkJSWGhETEVsQlFVa3NXVUZCV1N4RFFVRkRMRTFCUVUwc1MwRkJTeXhQUVVGUExFTkJRVU1zVFVGQlRTeEpRVUZKTEZsQlFWa3NRMEZCUXl4TlFVRk5MRXRCUVVzc1QwRkJUeXhEUVVGRExHOUNRVUZ2UWl4RlFVRkZPMWxCUTJoSExFMUJRVTBzU1VGQlNTeHhRa0ZCVXl4RFFVRkRMR2REUVVGblF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4UFFVRlBMRTlCUVU4c1EwRkJReXh2UWtGQmIwSXNkVUpCUVhWQ0xFVkJRVVVzUlVGQlJTeE5RVUZOTEVWQlFVVXNXVUZCV1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFTkJRVU03VTBGRGJFczdVVUZGUkN4TlFVRk5MR0ZCUVdFc1IwRkJSeXhaUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNSVUZCUlN4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03VVVGRE4wUXNTVUZCU1N4alFVRmpMRU5CUVVNN1VVRkRia0lzU1VGQlNTeFpRVUZaTEVOQlFVTXNUVUZCVFN4TFFVRkxMRTlCUVU4c1EwRkJReXh2UWtGQmIwSXNSVUZCUlR0WlFVTjBSQ3hqUVVGakxFZEJRVWNzV1VGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03VTBGRGVFUTdVVUZEUkN4UFFVRlBMRWxCUVVrc1QwRkJUeXhEUVVGRExHRkJRV0VzUlVGQlJTeGpRVUZqTEVOQlFVTXNRMEZCUXp0SlFVTjBSQ3hEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1VVRkJVVHRSUVVOWUxFOUJRVThzWlVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRExFTkJRVU03U1VGRGJFUXNRMEZCUXp0SlFVVkVPenM3VDBGSFJ6dEpRVU5KTEc5Q1FVRnZRanRSUVVOMlFpeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEdWQlFXVXNRMEZCUXl4RlFVRkZPMWxCUXpkRExFOUJRVThzWlVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1kwRkJZeXhIUVVGSExFbEJRVWtzUTBGQlF5eGxRVUZsTEVOQlFVTXNRMEZCUXp0VFFVTjRSVHRoUVVGTk8xbEJRMGdzVFVGQlRTeEpRVUZKTEhGQ1FVRlRMRU5CUVVNc1owUkJRV2RFTEVOQlFVTXNRMEZCUXp0VFFVTjZSVHRKUVVOTUxFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hSUVVGUk8xRkJRMWdzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eGxRVUZsTEVOQlFVTXNSVUZCUlR0WlFVTTNReXhQUVVGUExFbEJRVWtzUTBGQlF5eGpRVUZqTEVkQlFVY3NTVUZCU1N4RFFVRkRMR1ZCUVdVc1EwRkJRenRUUVVOeVJEdGhRVUZOTzFsQlEwZ3NUMEZCVHl4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRE8xTkJRemxDTzBsQlEwd3NRMEZCUXpzN1FVRnVSa1E3TzBkQlJVYzdRVUZEYjBJc1kwRkJUU3hIUVVGWExFVkJRVVVzUTBGQlF6dEJRVU16UXpzN1IwRkZSenRCUVVOdlFpeDFRa0ZCWlN4SFFVRlhMRU5CUVVNc1EwRkJRenRCUVVOdVJEczdSMEZGUnp0QlFVTnZRaXcwUWtGQmIwSXNSMEZCVnl4UFFVRlBMRU5CUVVNc1RVRkJUU3hIUVVGSExFOUJRVThzUTBGQlF5eGxRVUZsTEVOQlFVTTdRVUZGTDBZN08wZEJSVWM3UVVGRGIwSXNZVUZCU3l4SFFVRlpMRTlCUVU4c1EwRkJReXhWUVVGVkxFTkJRVU1zWlVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRnFRamxITERCQ1FYRkdReUo5IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3QgZGF0YUVycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvZGF0YUVycm9yXCIpO1xyXG5jb25zdCB0cnl0ZXNfMSA9IHJlcXVpcmUoXCIuL3RyeXRlc1wiKTtcclxuLyoqXHJcbiAqIEEgY2xhc3MgZm9yIGhhbmRsaW5nIGhhc2hlcy5cclxuICovXHJcbmNsYXNzIEhhc2gge1xyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBjb25zdHJ1Y3Rvcih0cnl0ZXMpIHtcclxuICAgICAgICB0aGlzLl90cnl0ZXMgPSB0cnl0ZXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBoYXNoIGZyb20gdHJ5dGVzLlxyXG4gICAgICogQHBhcmFtIGhhc2ggVGhlIHRyeXRlcyB0byBjcmVhdGUgdGhlIGhhc2ggZnJvbS5cclxuICAgICAqIEByZXR1cm5zIEFuIGluc3RhbmNlIG9mIEhhc2guXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmcm9tVHJ5dGVzKGhhc2gpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoaGFzaCwgdHJ5dGVzXzEuVHJ5dGVzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIGhhc2ggc2hvdWxkIGJlIGEgdmFsaWQgVHJ5dGVzIG9iamVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gaGFzaC5sZW5ndGgoKTtcclxuICAgICAgICBpZiAobGVuZ3RoICE9PSBIYXNoLkxFTkdUSCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgaGFzaCBzaG91bGQgYmUgJHtIYXNoLkxFTkdUSH0gY2hhcmFjdGVycyBpbiBsZW5ndGhgLCB7IGxlbmd0aCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBIYXNoKGhhc2gpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IHRoZSBoYXNoIHRvIHRyeXRlcy5cclxuICAgICAqIEByZXR1cm5zIFRyeXRlcyB2ZXJzaW9uIG9mIHRoZSBoYXNoLlxyXG4gICAgICovXHJcbiAgICB0b1RyeXRlcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJ5dGVzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHN0cmluZyB2aWV3IG9mIHRoZSBvYmplY3QuXHJcbiAgICAgKiBAcmV0dXJucyBzdHJpbmcgb2YgdGhlIHRyeXRlcy5cclxuICAgICAqL1xyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyeXRlcy50b1N0cmluZygpO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBUaGUgbGVuZ3RoIGZvciBhIHZhbGlkIGhhc2ggKDgxKS5cclxuICovXHJcbkhhc2guTEVOR1RIID0gODE7XHJcbi8qKlxyXG4gKiBBbiBlbXB0eSBoYXNoIGFsbCA5cy5cclxuICovXHJcbkhhc2guRU1QVFkgPSBIYXNoLmZyb21Ucnl0ZXModHJ5dGVzXzEuVHJ5dGVzLmZyb21TdHJpbmcoXCI5XCIucmVwZWF0KEhhc2guTEVOR1RIKSkpO1xyXG5leHBvcnRzLkhhc2ggPSBIYXNoO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhR0Z6YUM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlrWVhSaEwyaGhjMmd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJMRFJGUVVGNVJUdEJRVU42UlN4clJFRkJLME03UVVGREwwTXNjVU5CUVd0RE8wRkJSV3hET3p0SFFVVkhPMEZCUTBnN1NVRmhTU3hsUVVGbE8wbEJRMllzV1VGQmIwSXNUVUZCWXp0UlFVTTVRaXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEUxQlFVMHNRMEZCUXp0SlFVTXhRaXhEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTXNTVUZCV1R0UlFVTnFReXhKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hGUVVGRkxHVkJRVTBzUTBGQlF5eEZRVUZGTzFsQlEzQkRMRTFCUVUwc1NVRkJTU3h4UWtGQlV5eERRVUZETERCRFFVRXdReXhEUVVGRExFTkJRVU03VTBGRGJrVTdVVUZGUkN4TlFVRk5MRTFCUVUwc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTTdVVUZETjBJc1NVRkJTU3hOUVVGTkxFdEJRVXNzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlR0WlFVTjRRaXhOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl4elFrRkJjMElzU1VGQlNTeERRVUZETEUxQlFVMHNkVUpCUVhWQ0xFVkJRVVVzUlVGQlJTeE5RVUZOTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUXpkR08xRkJSVVFzVDBGQlR5eEpRVUZKTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRKUVVNeFFpeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVVVGQlVUdFJRVU5ZTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJRenRKUVVONFFpeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVVVGQlVUdFJRVU5ZTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dEpRVU51UXl4RFFVRkRPenRCUVdwRVJEczdSMEZGUnp0QlFVTnZRaXhYUVVGTkxFZEJRVmNzUlVGQlJTeERRVUZETzBGQlF6TkRPenRIUVVWSE8wRkJRMjlDTEZWQlFVc3NSMEZCVXl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExHVkJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCVW5KSExHOUNRVzFFUXlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IGRhdGFFcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2RhdGFFcnJvclwiKTtcclxuY29uc3QgdHJ5dGVzXzEgPSByZXF1aXJlKFwiLi90cnl0ZXNcIik7XHJcbi8qKlxyXG4gKiBBIGNsYXNzIGZvciBoYW5kbGluZyBzaWduYXR1cmUgbWVzc2FnZSBmcmFnbWVudHMuXHJcbiAqL1xyXG5jbGFzcyBTaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQge1xyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBjb25zdHJ1Y3Rvcih0cnl0ZXMpIHtcclxuICAgICAgICB0aGlzLl90cnl0ZXMgPSB0cnl0ZXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBzaWduYXR1cmUgZnJhZ21lbnQgZnJvbSB0cnl0ZXMuXHJcbiAgICAgKiBAcGFyYW0gc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50IFRoZSB0cnl0ZXMgdG8gY3JlYXRlIHRoZSBzaWduYXR1cmUgZnJhZ21lbnQgZnJvbS5cclxuICAgICAqIEByZXR1cm5zIEFuIGluc3RhbmNlIG9mIFNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21Ucnl0ZXMoc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50KSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCwgdHJ5dGVzXzEuVHJ5dGVzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCBzaG91bGQgYmUgYSB2YWxpZCBUcnl0ZXMgb2JqZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBsZW5ndGggPSBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQubGVuZ3RoKCk7XHJcbiAgICAgICAgaWYgKGxlbmd0aCAhPT0gU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LkxFTkdUSCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50IHNob3VsZCBiZSAke1NpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5MRU5HVEh9IGNoYXJhY3RlcnMgaW4gbGVuZ3RoYCwgeyBsZW5ndGggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50KHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgdGhlIHNpZ25hdHVyZSBmcmFnbWVudCB0byB0cnl0ZXMuXHJcbiAgICAgKiBAcmV0dXJucyBUcnl0ZXMgdmVyc2lvbiBvZiB0aGUgc2lnbmF0dXJlIGZyYWdtZW50LlxyXG4gICAgICovXHJcbiAgICB0b1RyeXRlcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJ5dGVzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHN0cmluZyB2aWV3IG9mIHRoZSBvYmplY3QuXHJcbiAgICAgKiBAcmV0dXJucyBzdHJpbmcgb2YgdGhlIHRyeXRlcy5cclxuICAgICAqL1xyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyeXRlcy50b1N0cmluZygpO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBUaGUgbGVuZ3RoIG9mIGEgdmFsaWQgc2lnbmF0dXJlIG1lc3NhZ2UgZnJhZ21lbnQgKDIxODcpXHJcbiAqL1xyXG5TaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQuTEVOR1RIID0gMjE4NztcclxuLyoqXHJcbiAqIEFuIGVtcHR5IHNpZ25hdHVyZSBtZXNzYWdlIGZyYWdtZW50IGFsbCA5cy5cclxuICovXHJcblNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5FTVBUWSA9IFNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5mcm9tVHJ5dGVzKHRyeXRlc18xLlRyeXRlcy5mcm9tU3RyaW5nKFwiOVwiLnJlcGVhdChTaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQuTEVOR1RIKSkpO1xyXG5leHBvcnRzLlNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCA9IFNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYzJsbmJtRjBkWEpsVFdWemMyRm5aVVp5WVdkdFpXNTBMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyUmhkR0V2YzJsbmJtRjBkWEpsVFdWemMyRm5aVVp5WVdkdFpXNTBMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFTdzBSVUZCZVVVN1FVRkRla1VzYTBSQlFTdERPMEZCUXk5RExIRkRRVUZyUXp0QlFVVnNRenM3UjBGRlJ6dEJRVU5JTzBsQllVa3NaVUZCWlR0SlFVTm1MRmxCUVc5Q0xFMUJRV003VVVGRE9VSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhOUVVGTkxFTkJRVU03U1VGRE1VSXNRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExIZENRVUZuUXp0UlFVTnlSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc2QwSkJRWGRDTEVWQlFVVXNaVUZCVFN4RFFVRkRMRVZCUVVVN1dVRkRlRVFzVFVGQlRTeEpRVUZKTEhGQ1FVRlRMRU5CUVVNc09FUkJRVGhFTEVOQlFVTXNRMEZCUXp0VFFVTjJSanRSUVVWRUxFMUJRVTBzVFVGQlRTeEhRVUZITEhkQ1FVRjNRaXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETzFGQlEycEVMRWxCUVVrc1RVRkJUU3hMUVVGTExIZENRVUYzUWl4RFFVRkRMRTFCUVUwc1JVRkJSVHRaUVVNMVF5eE5RVUZOTEVsQlFVa3NjVUpCUVZNc1EwRkJReXd3UTBGQk1FTXNkMEpCUVhkQ0xFTkJRVU1zVFVGQlRTeDFRa0ZCZFVJc1JVRkJSU3hGUVVGRkxFMUJRVTBzUlVGQlJTeERRVUZETEVOQlFVTTdVMEZEY2trN1VVRkRSQ3hQUVVGUExFbEJRVWtzZDBKQlFYZENMRU5CUVVNc2QwSkJRWGRDTEVOQlFVTXNRMEZCUXp0SlFVTnNSU3hEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1VVRkJVVHRSUVVOWUxFOUJRVThzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXp0SlFVTjRRaXhEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1VVRkJVVHRSUVVOWUxFOUJRVThzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRKUVVOdVF5eERRVUZET3p0QlFXaEVSRHM3UjBGRlJ6dEJRVU52UWl3clFrRkJUU3hIUVVGWExFbEJRVWtzUTBGQlF6dEJRVU0zUXpzN1IwRkZSenRCUVVOdlFpdzRRa0ZCU3l4SFFVRTJRaXgzUWtGQmQwSXNRMEZCUXl4VlFVRlZMRU5CUVVNc1pVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMSGRDUVVGM1FpeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVZKcVN5dzBSRUZyUkVNaWZRPT0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBkYXRhRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvci9kYXRhRXJyb3JcIik7XHJcbmNvbnN0IHRyeXRlc18xID0gcmVxdWlyZShcIi4vdHJ5dGVzXCIpO1xyXG4vKipcclxuICogQSBjbGFzcyBmb3IgaGFuZGxpbmcgdGFncy5cclxuICovXHJcbmNsYXNzIFRhZyB7XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGNvbnN0cnVjdG9yKHRyeXRlcykge1xyXG4gICAgICAgIHRoaXMuX3RyeXRlcyA9IHRyeXRlcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIHRhZyBmcm9tIHRyeXRlcy5cclxuICAgICAqIEBwYXJhbSB0YWcgVGhlIHRyeXRlcyB0byBjcmVhdGUgdGhlIHRhZyBmcm9tLlxyXG4gICAgICogQHJldHVybnMgQW4gaW5zdGFuY2Ugb2YgVGFnLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZnJvbVRyeXRlcyh0YWcpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodGFnLCB0cnl0ZXNfMS5Ucnl0ZXMpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdGFnIHNob3VsZCBiZSBhIHZhbGlkIFRyeXRlcyBvYmplY3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB0cnl0ZXNTdHJpbmcgPSB0YWcudG9TdHJpbmcoKTtcclxuICAgICAgICBpZiAodHJ5dGVzU3RyaW5nLmxlbmd0aCA+IFRhZy5MRU5HVEgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIHRhZyBzaG91bGQgYmUgYXQgbW9zdCAke1RhZy5MRU5HVEh9IGNoYXJhY3RlcnMgaW4gbGVuZ3RoYCwgeyBsZW5ndGg6IHRyeXRlc1N0cmluZy5sZW5ndGggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlICh0cnl0ZXNTdHJpbmcubGVuZ3RoIDwgVGFnLkxFTkdUSCkge1xyXG4gICAgICAgICAgICB0cnl0ZXNTdHJpbmcgKz0gXCI5XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgVGFnKHRyeXRlc1N0cmluZyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgdGhlIHRhZyB0byB0cnl0ZXMuXHJcbiAgICAgKiBAcmV0dXJucyBUcnl0ZXMgdmVyc2lvbiBvZiB0aGUgdGFnLlxyXG4gICAgICovXHJcbiAgICB0b1RyeXRlcygpIHtcclxuICAgICAgICByZXR1cm4gdHJ5dGVzXzEuVHJ5dGVzLmZyb21TdHJpbmcodGhpcy5fdHJ5dGVzKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBzdHJpbmcgdmlldyBvZiB0aGUgb2JqZWN0LlxyXG4gICAgICogQHJldHVybnMgc3RyaW5nIG9mIHRoZSB0cnl0ZXMuXHJcbiAgICAgKi9cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cnl0ZXM7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIFRoZSBsZW5ndGggb2YgYSB2YWxpZCB0YWcgKDI3KS5cclxuICovXHJcblRhZy5MRU5HVEggPSAyNztcclxuLyoqXHJcbiAqIEFuIGVtcHR5IHRhZyBhbGwgOXMuXHJcbiAqL1xyXG5UYWcuRU1QVFkgPSBUYWcuZnJvbVRyeXRlcyh0cnl0ZXNfMS5Ucnl0ZXMuZnJvbVN0cmluZyhcIjlcIi5yZXBlYXQoVGFnLkxFTkdUSCkpKTtcclxuZXhwb3J0cy5UYWcgPSBUYWc7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRHRm5MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyUmhkR0V2ZEdGbkxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVN3MFJVRkJlVVU3UVVGRGVrVXNhMFJCUVN0RE8wRkJReTlETEhGRFFVRnJRenRCUVVWc1F6czdSMEZGUnp0QlFVTklPMGxCWVVrc1pVRkJaVHRKUVVObUxGbEJRVzlDTEUxQlFXTTdVVUZET1VJc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eE5RVUZOTEVOQlFVTTdTVUZETVVJc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEVkQlFWYzdVVUZEYUVNc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1JVRkJSU3hsUVVGTkxFTkJRVU1zUlVGQlJUdFpRVU51UXl4TlFVRk5MRWxCUVVrc2NVSkJRVk1zUTBGQlF5eDVRMEZCZVVNc1EwRkJReXhEUVVGRE8xTkJRMnhGTzFGQlJVUXNTVUZCU1N4WlFVRlpMRWRCUVVjc1IwRkJSeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzFGQlJXeERMRWxCUVVrc1dVRkJXU3hEUVVGRExFMUJRVTBzUjBGQlJ5eEhRVUZITEVOQlFVTXNUVUZCVFN4RlFVRkZPMWxCUTJ4RExFMUJRVTBzU1VGQlNTeHhRa0ZCVXl4RFFVRkRMRFpDUVVFMlFpeEhRVUZITEVOQlFVTXNUVUZCVFN4MVFrRkJkVUlzUlVGQlJTeEZRVUZGTEUxQlFVMHNSVUZCUlN4WlFVRlpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFRRVU40U0R0UlFVVkVMRTlCUVU4c1dVRkJXU3hEUVVGRExFMUJRVTBzUjBGQlJ5eEhRVUZITEVOQlFVTXNUVUZCVFN4RlFVRkZPMWxCUTNKRExGbEJRVmtzU1VGQlNTeEhRVUZITEVOQlFVTTdVMEZEZGtJN1VVRkZSQ3hQUVVGUExFbEJRVWtzUjBGQlJ5eERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRPMGxCUTJwRExFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hSUVVGUk8xRkJRMWdzVDBGQlR5eGxRVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dEpRVU16UXl4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NVVUZCVVR0UlFVTllMRTlCUVU4c1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF6dEpRVU40UWl4RFFVRkRPenRCUVhSRVJEczdSMEZGUnp0QlFVTnZRaXhWUVVGTkxFZEJRVmNzUlVGQlJTeERRVUZETzBGQlF6TkRPenRIUVVWSE8wRkJRMjlDTEZOQlFVc3NSMEZCVVN4SFFVRkhMRU5CUVVNc1ZVRkJWU3hEUVVGRExHVkJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCVW14SExHdENRWGRFUXlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IGRhdGFFcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2RhdGFFcnJvclwiKTtcclxuY29uc3QgYWRkcmVzc18xID0gcmVxdWlyZShcIi4vYWRkcmVzc1wiKTtcclxuY29uc3QgaGFzaF8xID0gcmVxdWlyZShcIi4vaGFzaFwiKTtcclxuY29uc3Qgc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50XzEgPSByZXF1aXJlKFwiLi9zaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRcIik7XHJcbmNvbnN0IHRhZ18xID0gcmVxdWlyZShcIi4vdGFnXCIpO1xyXG5jb25zdCB0cnl0ZU51bWJlcl8xID0gcmVxdWlyZShcIi4vdHJ5dGVOdW1iZXJcIik7XHJcbmNvbnN0IHRyeXRlc18xID0gcmVxdWlyZShcIi4vdHJ5dGVzXCIpO1xyXG4vKipcclxuICogQSBjbGFzcyBmb3IgaGFuZGxpbmcgdHJhbnNhY3Rpb25zLlxyXG4gKi9cclxuY2xhc3MgVHJhbnNhY3Rpb24ge1xyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGluc3RhbmNlIG9mIHRyYW5zYWN0aW9uIGZyb20gcGFyYW1ldGVycy5cclxuICAgICAqIEBwYXJhbSBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQgVGhlIHNpZ25hdHVyZSBtZXNzYWdlIGZyYWdtZW50LlxyXG4gICAgICogQHBhcmFtIGFkZHJlc3MgVGhlIGFkZHJlc3MuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlLlxyXG4gICAgICogQHBhcmFtIG9ic29sZXRlVGFnIE9ic29sZXRlIHRyYW5zYWN0aW9uIHRhZy5cclxuICAgICAqIEBwYXJhbSB0aW1lc3RhbXAgVGhlIHRpbWVzdGFtcC5cclxuICAgICAqIEBwYXJhbSBjdXJyZW50SW5kZXggVGhlIGN1cnJlbnQgaW5kZXguXHJcbiAgICAgKiBAcGFyYW0gbGFzdEluZGV4IFRoZSBsYXN0IGluZGV4LlxyXG4gICAgICogQHBhcmFtIGJ1bmRsZSBUaGUgYnVuZGxlLlxyXG4gICAgICogQHBhcmFtIHRydW5rVHJhbnNhY3Rpb24gVGhlIHRydW5rIHRyYW5zYWN0aW9uLlxyXG4gICAgICogQHBhcmFtIGJyYW5jaFRyYW5zYWN0aW9uIFRoZSBicmFuY2ggdHJhbnNhY3Rpb24uXHJcbiAgICAgKiBAcGFyYW0gdGFnIFRoZSB0YWcuXHJcbiAgICAgKiBAcGFyYW0gYXR0YWNobWVudFRpbWVzdGFtcCBUaGUgYXR0YWNobWVudCB0aW1lc3RhbXAuXHJcbiAgICAgKiBAcGFyYW0gYXR0YWNobWVudFRpbWVzdGFtcExvd2VyQm91bmQgVGhlIGF0dGFjaG1lbnQgdGltZXN0YW1wIGxvd2VyIGJvdW5kLlxyXG4gICAgICogQHBhcmFtIGF0dGFjaG1lbnRUaW1lc3RhbXBVcHBlckJvdW5kICBUaGUgYXR0YWNobWVudCB0aW1lc3RhbXAgdXBwZXIgYm91bmQuXHJcbiAgICAgKiBAcGFyYW0gbm9uY2UgVGhlIG5vbmNlLlxyXG4gICAgICogQHJldHVybnMgTmV3IGluc3RhbmNlIG9mIHRyYW5zYWN0aW9uLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZnJvbVBhcmFtcyhzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQsIGFkZHJlc3MsIHZhbHVlLCBvYnNvbGV0ZVRhZywgdGltZXN0YW1wLCBjdXJyZW50SW5kZXgsIGxhc3RJbmRleCwgYnVuZGxlLCB0cnVua1RyYW5zYWN0aW9uLCBicmFuY2hUcmFuc2FjdGlvbiwgdGFnLCBhdHRhY2htZW50VGltZXN0YW1wLCBhdHRhY2htZW50VGltZXN0YW1wTG93ZXJCb3VuZCwgYXR0YWNobWVudFRpbWVzdGFtcFVwcGVyQm91bmQsIG5vbmNlKSB7XHJcbiAgICAgICAgY29uc3QgdHggPSBuZXcgVHJhbnNhY3Rpb24oKTtcclxuICAgICAgICB0eC5zaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQgPSBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQ7XHJcbiAgICAgICAgdHguYWRkcmVzcyA9IGFkZHJlc3M7XHJcbiAgICAgICAgdHgudmFsdWUgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21OdW1iZXIodmFsdWUsIDExKTtcclxuICAgICAgICB0eC5vYnNvbGV0ZVRhZyA9IG9ic29sZXRlVGFnO1xyXG4gICAgICAgIHR4LnRpbWVzdGFtcCA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbU51bWJlcih0aW1lc3RhbXApO1xyXG4gICAgICAgIHR4LmN1cnJlbnRJbmRleCA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbU51bWJlcihjdXJyZW50SW5kZXgpO1xyXG4gICAgICAgIHR4Lmxhc3RJbmRleCA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbU51bWJlcihsYXN0SW5kZXgpO1xyXG4gICAgICAgIHR4LmJ1bmRsZSA9IGJ1bmRsZTtcclxuICAgICAgICB0eC50cnVua1RyYW5zYWN0aW9uID0gdHJ1bmtUcmFuc2FjdGlvbjtcclxuICAgICAgICB0eC5icmFuY2hUcmFuc2FjdGlvbiA9IGJyYW5jaFRyYW5zYWN0aW9uO1xyXG4gICAgICAgIHR4LnRhZyA9IHRhZztcclxuICAgICAgICB0eC5hdHRhY2htZW50VGltZXN0YW1wID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tTnVtYmVyKGF0dGFjaG1lbnRUaW1lc3RhbXApO1xyXG4gICAgICAgIHR4LmF0dGFjaG1lbnRUaW1lc3RhbXBMb3dlckJvdW5kID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tTnVtYmVyKGF0dGFjaG1lbnRUaW1lc3RhbXBMb3dlckJvdW5kKTtcclxuICAgICAgICB0eC5hdHRhY2htZW50VGltZXN0YW1wVXBwZXJCb3VuZCA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbU51bWJlcihhdHRhY2htZW50VGltZXN0YW1wVXBwZXJCb3VuZCk7XHJcbiAgICAgICAgdHgubm9uY2UgPSBub25jZTtcclxuICAgICAgICByZXR1cm4gdHg7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBpbnN0YW5jZSBvZiB0cmFuc2FjdGlvbiBmcm9tIHRyeXRlcy5cclxuICAgICAqIEBwYXJhbSB0cnl0ZXMgVGhlIHRyeXRlcyBmb3IgdGhlIHRoaXMuXHJcbiAgICAgKiBAcmV0dXJucyBBbiBpbnN0YW5jZSBvZiB0aGlzLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZnJvbVRyeXRlcyh0cnl0ZXMpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodHJ5dGVzLCB0cnl0ZXNfMS5Ucnl0ZXMpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdHJ5dGVzIHNob3VsZCBiZSBhIHZhbGlkIFRyeXRlcyBvYmplY3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHRyeXRlcy5sZW5ndGgoKTtcclxuICAgICAgICBpZiAobGVuZ3RoICE9PSBUcmFuc2FjdGlvbi5MRU5HVEgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIHRyeXRlcyBtdXN0IGJlICR7VHJhbnNhY3Rpb24uTEVOR1RIfSBpbiBsZW5ndGhgLCB7IGxlbmd0aCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY2hlY2tJbmRleFN0YXJ0ID0gMjI3OTtcclxuICAgICAgICBjb25zdCBjaGVja0luZGV4TGVuZ3RoID0gMTY7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSB0cnl0ZXMuc3ViKGNoZWNrSW5kZXhTdGFydCwgY2hlY2tJbmRleExlbmd0aCkudG9TdHJpbmcoKTtcclxuICAgICAgICBpZiAoY2hlY2sgIT09IFRyYW5zYWN0aW9uLkNIRUNLX1ZBTFVFKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSB0cnl0ZXMgYmV0d2VlbiAke2NoZWNrSW5kZXhTdGFydH0gYW5kICR7Y2hlY2tJbmRleFN0YXJ0ICsgY2hlY2tJbmRleExlbmd0aH0gc2hvdWxkIGJlIGFsbCA5c2AsIHsgY2hlY2sgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHR4ID0gbmV3IFRyYW5zYWN0aW9uKCk7XHJcbiAgICAgICAgbGV0IHN0YXJ0UG9zID0gMDtcclxuICAgICAgICB0eC5zaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQgPSBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRfMS5TaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQuZnJvbVRyeXRlcyh0cnl0ZXMuc3ViKHN0YXJ0UG9zLCBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRfMS5TaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQuTEVOR1RIKSk7XHJcbiAgICAgICAgc3RhcnRQb3MgKz0gc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50XzEuU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LkxFTkdUSDtcclxuICAgICAgICB0eC5hZGRyZXNzID0gYWRkcmVzc18xLkFkZHJlc3MuZnJvbVRyeXRlcyh0cnl0ZXMuc3ViKHN0YXJ0UG9zLCBhZGRyZXNzXzEuQWRkcmVzcy5MRU5HVEgpKTtcclxuICAgICAgICBzdGFydFBvcyArPSBhZGRyZXNzXzEuQWRkcmVzcy5MRU5HVEg7XHJcbiAgICAgICAgdHgudmFsdWUgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgMTEpLCAxMSk7XHJcbiAgICAgICAgc3RhcnRQb3MgKz0gMTE7XHJcbiAgICAgICAgc3RhcnRQb3MgKz0gVHJhbnNhY3Rpb24uQ0hFQ0tfVkFMVUVfTEVOR1RIO1xyXG4gICAgICAgIHR4Lm9ic29sZXRlVGFnID0gdGFnXzEuVGFnLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgdGFnXzEuVGFnLkxFTkdUSCkpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IHRhZ18xLlRhZy5MRU5HVEg7XHJcbiAgICAgICAgdHgudGltZXN0YW1wID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tVHJ5dGVzKHRyeXRlcy5zdWIoc3RhcnRQb3MsIHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuTEVOR1RIXzkpKTtcclxuICAgICAgICBzdGFydFBvcyArPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkxFTkdUSF85O1xyXG4gICAgICAgIHR4LmN1cnJlbnRJbmRleCA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbVRyeXRlcyh0cnl0ZXMuc3ViKHN0YXJ0UG9zLCB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkxFTkdUSF85KSk7XHJcbiAgICAgICAgc3RhcnRQb3MgKz0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5MRU5HVEhfOTtcclxuICAgICAgICB0eC5sYXN0SW5kZXggPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5MRU5HVEhfOSkpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuTEVOR1RIXzk7XHJcbiAgICAgICAgdHguYnVuZGxlID0gaGFzaF8xLkhhc2guZnJvbVRyeXRlcyh0cnl0ZXMuc3ViKHN0YXJ0UG9zLCBoYXNoXzEuSGFzaC5MRU5HVEgpKTtcclxuICAgICAgICBzdGFydFBvcyArPSBoYXNoXzEuSGFzaC5MRU5HVEg7XHJcbiAgICAgICAgdHgudHJ1bmtUcmFuc2FjdGlvbiA9IGhhc2hfMS5IYXNoLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgaGFzaF8xLkhhc2guTEVOR1RIKSk7XHJcbiAgICAgICAgc3RhcnRQb3MgKz0gaGFzaF8xLkhhc2guTEVOR1RIO1xyXG4gICAgICAgIHR4LmJyYW5jaFRyYW5zYWN0aW9uID0gaGFzaF8xLkhhc2guZnJvbVRyeXRlcyh0cnl0ZXMuc3ViKHN0YXJ0UG9zLCBoYXNoXzEuSGFzaC5MRU5HVEgpKTtcclxuICAgICAgICBzdGFydFBvcyArPSBoYXNoXzEuSGFzaC5MRU5HVEg7XHJcbiAgICAgICAgdHgudGFnID0gdGFnXzEuVGFnLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgdGFnXzEuVGFnLkxFTkdUSCkpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IHRhZ18xLlRhZy5MRU5HVEg7XHJcbiAgICAgICAgdHguYXR0YWNobWVudFRpbWVzdGFtcCA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbVRyeXRlcyh0cnl0ZXMuc3ViKHN0YXJ0UG9zLCB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkxFTkdUSF85KSk7XHJcbiAgICAgICAgc3RhcnRQb3MgKz0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5MRU5HVEhfOTtcclxuICAgICAgICB0eC5hdHRhY2htZW50VGltZXN0YW1wTG93ZXJCb3VuZCA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbVRyeXRlcyh0cnl0ZXMuc3ViKHN0YXJ0UG9zLCB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkxFTkdUSF85KSk7XHJcbiAgICAgICAgc3RhcnRQb3MgKz0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5MRU5HVEhfOTtcclxuICAgICAgICB0eC5hdHRhY2htZW50VGltZXN0YW1wVXBwZXJCb3VuZCA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbVRyeXRlcyh0cnl0ZXMuc3ViKHN0YXJ0UG9zLCB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkxFTkdUSF85KSk7XHJcbiAgICAgICAgc3RhcnRQb3MgKz0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5MRU5HVEhfOTtcclxuICAgICAgICB0eC5ub25jZSA9IHRhZ18xLlRhZy5mcm9tVHJ5dGVzKHRyeXRlcy5zdWIoc3RhcnRQb3MsIHRhZ18xLlRhZy5MRU5HVEgpKTtcclxuICAgICAgICByZXR1cm4gdHg7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgdGhlIHRyYW5zYWN0aW9uIHRvIHRyeXRlcy5cclxuICAgICAqIEByZXR1cm5zIFRoZSB0cmFuc2FjdGlvbiBhcyB0cnl0ZXMuXHJcbiAgICAgKi9cclxuICAgIHRvVHJ5dGVzKCkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0aGlzLnNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCwgc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50XzEuU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50IG11c3QgYmUgc2V0IHRvIGNyZWF0ZSB0cmFuc2FjdGlvbiB0cnl0ZXNgLCB7IHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudDogdGhpcy5zaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0aGlzLmFkZHJlc3MsIGFkZHJlc3NfMS5BZGRyZXNzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgYWRkcmVzcyBtdXN0IGJlIHNldCB0byBjcmVhdGUgdHJhbnNhY3Rpb24gdHJ5dGVzYCwgeyBhZGRyZXNzOiB0aGlzLmFkZHJlc3MgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0aGlzLm9ic29sZXRlVGFnLCB0YWdfMS5UYWcpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSBvYnNvbGV0ZVRhZyBtdXN0IGJlIHNldCB0byBjcmVhdGUgdHJhbnNhY3Rpb24gdHJ5dGVzYCwgeyBvYnNvbGV0ZVRhZzogdGhpcy5vYnNvbGV0ZVRhZyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRoaXMuYnVuZGxlLCBoYXNoXzEuSGFzaCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIGJ1bmRsZSBtdXN0IGJlIHNldCB0byBjcmVhdGUgdHJhbnNhY3Rpb24gdHJ5dGVzYCwgeyBidW5kbGU6IHRoaXMuYnVuZGxlIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodGhpcy50cnVua1RyYW5zYWN0aW9uLCBoYXNoXzEuSGFzaCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIHRydW5rVHJhbnNhY3Rpb24gbXVzdCBiZSBzZXQgdG8gY3JlYXRlIHRyYW5zYWN0aW9uIHRyeXRlc2AsIHsgdHJ1bmtUcmFuc2FjdGlvbjogdGhpcy50cnVua1RyYW5zYWN0aW9uIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodGhpcy5icmFuY2hUcmFuc2FjdGlvbiwgaGFzaF8xLkhhc2gpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSBicmFuY2hUcmFuc2FjdGlvbiBtdXN0IGJlIHNldCB0byBjcmVhdGUgdHJhbnNhY3Rpb24gdHJ5dGVzYCwgeyBicmFuY2hUcmFuc2FjdGlvbjogdGhpcy5icmFuY2hUcmFuc2FjdGlvbiB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRoaXMubm9uY2UsIHRhZ18xLlRhZykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIG5vbmNlIG11c3QgYmUgc2V0IHRvIGNyZWF0ZSB0cmFuc2FjdGlvbiB0cnl0ZXNgLCB7IG5vbmNlOiB0aGlzLm5vbmNlIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0cnl0ZXMgPSB0aGlzLnNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC50b1RyeXRlcygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgKyB0aGlzLmFkZHJlc3MudG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgKHRoaXMudmFsdWUgfHwgVHJhbnNhY3Rpb24uRU1QVFlfMTEpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICArIFRyYW5zYWN0aW9uLkNIRUNLX1ZBTFVFXHJcbiAgICAgICAgICAgICsgdGhpcy5vYnNvbGV0ZVRhZy50b1RyeXRlcygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgKyAodGhpcy50aW1lc3RhbXAgfHwgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5FTVBUWV85KS50b1RyeXRlcygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgKyAodGhpcy5jdXJyZW50SW5kZXggfHwgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5FTVBUWV85KS50b1RyeXRlcygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgKyAodGhpcy5sYXN0SW5kZXggfHwgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5FTVBUWV85KS50b1RyeXRlcygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgKyB0aGlzLmJ1bmRsZS50b1RyeXRlcygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgKyB0aGlzLnRydW5rVHJhbnNhY3Rpb24udG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgdGhpcy5icmFuY2hUcmFuc2FjdGlvbi50b1RyeXRlcygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgKyAodGhpcy50YWcgfHwgdGhpcy5vYnNvbGV0ZVRhZykudG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgKHRoaXMuYXR0YWNobWVudFRpbWVzdGFtcCB8fCB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkVNUFRZXzkpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICArICh0aGlzLmF0dGFjaG1lbnRUaW1lc3RhbXBMb3dlckJvdW5kIHx8IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuRU1QVFlfOSkudG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgKHRoaXMuYXR0YWNobWVudFRpbWVzdGFtcFVwcGVyQm91bmQgfHwgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5FTVBUWV85KS50b1RyeXRlcygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgKyB0aGlzLm5vbmNlLnRvVHJ5dGVzKCkudG9TdHJpbmcoKTtcclxuICAgICAgICBjb25zdCBsZW5ndGggPSB0cnl0ZXMubGVuZ3RoO1xyXG4gICAgICAgIGlmIChsZW5ndGggIT09IFRyYW5zYWN0aW9uLkxFTkdUSCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgdHJ5dGVzIG11c3QgYmUgJHtUcmFuc2FjdGlvbi5MRU5HVEh9IGluIGxlbmd0aCAke2xlbmd0aH1gLCB7IGxlbmd0aCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRyeXRlc18xLlRyeXRlcy5mcm9tU3RyaW5nKHRyeXRlcyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgc3RyaW5nIHZpZXcgb2YgdGhlIG9iamVjdC5cclxuICAgICAqIEByZXR1cm5zIHN0cmluZyB2aWV3IG9mIHRoZSBvYmplY3QuXHJcbiAgICAgKi9cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiBge1xuXFx0c2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50OiBcIiR7KHRoaXMuc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50IHx8IHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudF8xLlNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5FTVBUWSkudG9Ucnl0ZXMoKS50b1N0cmluZygpfVwiXG5cXHRhZGRyZXNzOiBcIiR7KHRoaXMuYWRkcmVzcyB8fCBhZGRyZXNzXzEuQWRkcmVzcy5FTVBUWSkudG9Ucnl0ZXMoKS50b1N0cmluZygpfVwiXG5cXHR2YWx1ZTogJHsodGhpcy52YWx1ZSB8fCBUcmFuc2FjdGlvbi5FTVBUWV8xMSkudG9OdW1iZXIoKX1cblxcdG9ic29sZXRlVGFnOiBcIiR7KHRoaXMub2Jzb2xldGVUYWcgfHwgdGFnXzEuVGFnLkVNUFRZKS50b1RyeXRlcygpLnRvU3RyaW5nKCl9XCJcblxcdHRpbWVzdGFtcDogJHsodGhpcy50aW1lc3RhbXAgfHwgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5FTVBUWV85KS50b051bWJlcigpfVxuXFx0Y3VycmVudEluZGV4OiAkeyh0aGlzLmN1cnJlbnRJbmRleCB8fCB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkVNUFRZXzkpLnRvTnVtYmVyKCl9XG5cXHRsYXN0SW5kZXg6ICR7KHRoaXMubGFzdEluZGV4IHx8IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuRU1QVFlfOSkudG9OdW1iZXIoKX1cblxcdGJ1bmRsZTogXCIkeyh0aGlzLmJ1bmRsZSB8fCBoYXNoXzEuSGFzaC5FTVBUWSkudG9Ucnl0ZXMoKS50b1N0cmluZygpfVwiXG5cXHR0cnVua1RyYW5zYWN0aW9uOiBcIiR7KHRoaXMudHJ1bmtUcmFuc2FjdGlvbiB8fCBoYXNoXzEuSGFzaC5FTVBUWSkudG9Ucnl0ZXMoKS50b1N0cmluZygpfVwiXG5cXHRicmFuY2hUcmFuc2FjdGlvbjogXCIkeyh0aGlzLmJyYW5jaFRyYW5zYWN0aW9uIHx8IGhhc2hfMS5IYXNoLkVNUFRZKS50b1RyeXRlcygpLnRvU3RyaW5nKCl9XCJcblxcdHRhZzogXCIkeyh0aGlzLnRhZyB8fCB0aGlzLm9ic29sZXRlVGFnIHx8IHRhZ18xLlRhZy5FTVBUWSkudG9Ucnl0ZXMoKS50b1N0cmluZygpfVwiXG5cXHRhdHRhY2htZW50VGltZXN0YW1wOiAkeyh0aGlzLmF0dGFjaG1lbnRUaW1lc3RhbXAgfHwgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5FTVBUWV85KS50b051bWJlcigpfVxuXFx0YXR0YWNobWVudFRpbWVzdGFtcExvd2VyQm91bmQ6ICR7KHRoaXMuYXR0YWNobWVudFRpbWVzdGFtcExvd2VyQm91bmQgfHwgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5FTVBUWV85KS50b051bWJlcigpfVxuXFx0YXR0YWNobWVudFRpbWVzdGFtcFVwcGVyQm91bmQ6ICR7KHRoaXMuYXR0YWNobWVudFRpbWVzdGFtcFVwcGVyQm91bmQgfHwgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5FTVBUWV85KS50b051bWJlcigpfVxuXFx0bm9uY2U6IFwiJHsodGhpcy5ub25jZSB8fCB0YWdfMS5UYWcuRU1QVFkpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKX1cIlxufWA7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIFRoZSBsZW5ndGggb2YgYSB2YWxpZCB0cmFuc2FjdGlvbiAoMjY3MykuXHJcbiAqL1xyXG5UcmFuc2FjdGlvbi5MRU5HVEggPSAyNjczO1xyXG4vKipcclxuICogVGhlIGxlbmd0aCBvZiBhIHZhbGlkIGNoZWNrIHZhbHVlICgxNikuXHJcbiAqL1xyXG5UcmFuc2FjdGlvbi5DSEVDS19WQUxVRV9MRU5HVEggPSAxNjtcclxuLyoqXHJcbiAqIFRoZSBjaGVjayB2YWx1ZSBmb3IgYnVuZGxlcyBhbGwgOXMuXHJcbiAqL1xyXG5UcmFuc2FjdGlvbi5DSEVDS19WQUxVRSA9IFwiOVwiLnJlcGVhdChUcmFuc2FjdGlvbi5DSEVDS19WQUxVRV9MRU5HVEgpO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuVHJhbnNhY3Rpb24uRU1QVFlfMTEgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21OdW1iZXIoMCwgMTEpO1xyXG5leHBvcnRzLlRyYW5zYWN0aW9uID0gVHJhbnNhY3Rpb247XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRISmhibk5oWTNScGIyNHVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdlpHRjBZUzkwY21GdWMyRmpkR2x2Ymk1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUVzTkVWQlFYbEZPMEZCUTNwRkxHdEVRVUVyUXp0QlFVTXZReXgxUTBGQmIwTTdRVUZEY0VNc2FVTkJRVGhDTzBGQlF6bENMSGxGUVVGelJUdEJRVU4wUlN3clFrRkJORUk3UVVGRE5VSXNLME5CUVRSRE8wRkJRelZETEhGRFFVRnJRenRCUVVWc1F6czdSMEZGUnp0QlFVTklPMGxCWjBaSkxHVkJRV1U3U1VGRFpqdEpRVU5CTEVOQlFVTTdTVUZGUkRzN096czdPenM3T3pzN096czdPenM3TzA5QmEwSkhPMGxCUTBrc1RVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eDNRa0ZCYTBRc1JVRkRiRVFzVDBGQlowSXNSVUZEYUVJc1MwRkJZU3hGUVVOaUxGZEJRV2RDTEVWQlEyaENMRk5CUVdsQ0xFVkJRMnBDTEZsQlFXOUNMRVZCUTNCQ0xGTkJRV2xDTEVWQlEycENMRTFCUVZrc1JVRkRXaXhuUWtGQmMwSXNSVUZEZEVJc2FVSkJRWFZDTEVWQlEzWkNMRWRCUVZFc1JVRkRVaXh0UWtGQk1rSXNSVUZETTBJc05rSkJRWEZETEVWQlEzSkRMRFpDUVVGeFF5eEZRVU55UXl4TFFVRlZPMUZCUXk5Q0xFMUJRVTBzUlVGQlJTeEhRVUZITEVsQlFVa3NWMEZCVnl4RlFVRkZMRU5CUVVNN1VVRkROMElzUlVGQlJTeERRVUZETEhkQ1FVRjNRaXhIUVVGSExIZENRVUYzUWl4RFFVRkRPMUZCUTNaRUxFVkJRVVVzUTBGQlF5eFBRVUZQTEVkQlFVY3NUMEZCVHl4RFFVRkRPMUZCUTNKQ0xFVkJRVVVzUTBGQlF5eExRVUZMTEVkQlFVY3NlVUpCUVZjc1EwRkJReXhWUVVGVkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUXpkRExFVkJRVVVzUTBGQlF5eFhRVUZYTEVkQlFVY3NWMEZCVnl4RFFVRkRPMUZCUXpkQ0xFVkJRVVVzUTBGQlF5eFRRVUZUTEVkQlFVY3NlVUpCUVZjc1EwRkJReXhWUVVGVkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdVVUZEYWtRc1JVRkJSU3hEUVVGRExGbEJRVmtzUjBGQlJ5eDVRa0ZCVnl4RFFVRkRMRlZCUVZVc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF6dFJRVU4yUkN4RlFVRkZMRU5CUVVNc1UwRkJVeXhIUVVGSExIbENRVUZYTEVOQlFVTXNWVUZCVlN4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRE8xRkJRMnBFTEVWQlFVVXNRMEZCUXl4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGRE8xRkJRMjVDTEVWQlFVVXNRMEZCUXl4blFrRkJaMElzUjBGQlJ5eG5Ra0ZCWjBJc1EwRkJRenRSUVVOMlF5eEZRVUZGTEVOQlFVTXNhVUpCUVdsQ0xFZEJRVWNzYVVKQlFXbENMRU5CUVVNN1VVRkRla01zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNN1VVRkRZaXhGUVVGRkxFTkJRVU1zYlVKQlFXMUNMRWRCUVVjc2VVSkJRVmNzUTBGQlF5eFZRVUZWTEVOQlFVTXNiVUpCUVcxQ0xFTkJRVU1zUTBGQlF6dFJRVU55UlN4RlFVRkZMRU5CUVVNc05rSkJRVFpDTEVkQlFVY3NlVUpCUVZjc1EwRkJReXhWUVVGVkxFTkJRVU1zTmtKQlFUWkNMRU5CUVVNc1EwRkJRenRSUVVONlJpeEZRVUZGTEVOQlFVTXNOa0pCUVRaQ0xFZEJRVWNzZVVKQlFWY3NRMEZCUXl4VlFVRlZMRU5CUVVNc05rSkJRVFpDTEVOQlFVTXNRMEZCUXp0UlFVTjZSaXhGUVVGRkxFTkJRVU1zUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXp0UlFVTnFRaXhQUVVGUExFVkJRVVVzUTBGQlF6dEpRVU5rTEVOQlFVTTdTVUZGUkRzN096dFBRVWxITzBsQlEwa3NUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhOUVVGak8xRkJRMjVETEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVWQlFVVXNaVUZCVFN4RFFVRkRMRVZCUVVVN1dVRkRkRU1zVFVGQlRTeEpRVUZKTEhGQ1FVRlRMRU5CUVVNc05FTkJRVFJETEVOQlFVTXNRMEZCUXp0VFFVTnlSVHRSUVVWRUxFMUJRVTBzVFVGQlRTeEhRVUZITEUxQlFVMHNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJRenRSUVVNdlFpeEpRVUZKTEUxQlFVMHNTMEZCU3l4WFFVRlhMRU5CUVVNc1RVRkJUU3hGUVVGRk8xbEJReTlDTEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExITkNRVUZ6UWl4WFFVRlhMRU5CUVVNc1RVRkJUU3haUVVGWkxFVkJRVVVzUlVGQlJTeE5RVUZOTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUTNwR08xRkJSVVFzVFVGQlRTeGxRVUZsTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUXpkQ0xFMUJRVTBzWjBKQlFXZENMRWRCUVVjc1JVRkJSU3hEUVVGRE8xRkJRelZDTEUxQlFVMHNTMEZCU3l4SFFVRkhMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zWlVGQlpTeEZRVUZGTEdkQ1FVRm5RaXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdVVUZGZGtVc1NVRkJTU3hMUVVGTExFdEJRVXNzVjBGQlZ5eERRVUZETEZkQlFWY3NSVUZCUlR0WlFVTnVReXhOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl4elFrRkJjMElzWlVGQlpTeFJRVUZSTEdWQlFXVXNSMEZCUnl4blFrRkJaMElzYlVKQlFXMUNMRVZCUVVVc1JVRkJSU3hMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETzFOQlEzUkpPMUZCUlVRc1RVRkJUU3hGUVVGRkxFZEJRVWNzU1VGQlNTeFhRVUZYTEVWQlFVVXNRMEZCUXp0UlFVVTNRaXhKUVVGSkxGRkJRVkVzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEYWtJc1JVRkJSU3hEUVVGRExIZENRVUYzUWl4SFFVRkhMRzFFUVVGM1FpeERRVUZETEZWQlFWVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExGRkJRVkVzUlVGQlJTeHRSRUZCZDBJc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEzcElMRkZCUVZFc1NVRkJTU3h0UkVGQmQwSXNRMEZCUXl4TlFVRk5MRU5CUVVNN1VVRkROVU1zUlVGQlJTeERRVUZETEU5QlFVOHNSMEZCUnl4cFFrRkJUeXhEUVVGRExGVkJRVlVzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1JVRkJSU3hwUWtGQlR5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRkRVVzVVVGQlVTeEpRVUZKTEdsQ1FVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRE8xRkJRek5DTEVWQlFVVXNRMEZCUXl4TFFVRkxMRWRCUVVjc2VVSkJRVmNzUTBGQlF5eFZRVUZWTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRhRVVzVVVGQlVTeEpRVUZKTEVWQlFVVXNRMEZCUXp0UlFVTm1MRkZCUVZFc1NVRkJTU3hYUVVGWExFTkJRVU1zYTBKQlFXdENMRU5CUVVNN1VVRkRNME1zUlVGQlJTeERRVUZETEZkQlFWY3NSMEZCUnl4VFFVRkhMRU5CUVVNc1ZVRkJWU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNVVUZCVVN4RlFVRkZMRk5CUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEyeEZMRkZCUVZFc1NVRkJTU3hUUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETzFGQlEzWkNMRVZCUVVVc1EwRkJReXhUUVVGVExFZEJRVWNzZVVKQlFWY3NRMEZCUXl4VlFVRlZMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eFJRVUZSTEVWQlFVVXNlVUpCUVZjc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEyeEdMRkZCUVZFc1NVRkJTU3g1UWtGQlZ5eERRVUZETEZGQlFWRXNRMEZCUXp0UlFVTnFReXhGUVVGRkxFTkJRVU1zV1VGQldTeEhRVUZITEhsQ1FVRlhMRU5CUVVNc1ZVRkJWU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNVVUZCVVN4RlFVRkZMSGxDUVVGWExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTnlSaXhSUVVGUkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl4UlFVRlJMRU5CUVVNN1VVRkRha01zUlVGQlJTeERRVUZETEZOQlFWTXNSMEZCUnl4NVFrRkJWeXhEUVVGRExGVkJRVlVzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1JVRkJSU3g1UWtGQlZ5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRiRVlzVVVGQlVTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc1VVRkJVU3hEUVVGRE8xRkJRMnBETEVWQlFVVXNRMEZCUXl4TlFVRk5MRWRCUVVjc1YwRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1JVRkJSU3hYUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTXZSQ3hSUVVGUkxFbEJRVWtzVjBGQlNTeERRVUZETEUxQlFVMHNRMEZCUXp0UlFVTjRRaXhGUVVGRkxFTkJRVU1zWjBKQlFXZENMRWRCUVVjc1YwRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1JVRkJSU3hYUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTjZSU3hSUVVGUkxFbEJRVWtzVjBGQlNTeERRVUZETEUxQlFVMHNRMEZCUXp0UlFVTjRRaXhGUVVGRkxFTkJRVU1zYVVKQlFXbENMRWRCUVVjc1YwRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1JVRkJSU3hYUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTXhSU3hSUVVGUkxFbEJRVWtzVjBGQlNTeERRVUZETEUxQlFVMHNRMEZCUXp0UlFVTjRRaXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEZOQlFVY3NRMEZCUXl4VlFVRlZMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eFJRVUZSTEVWQlFVVXNVMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRE1VUXNVVUZCVVN4SlFVRkpMRk5CUVVjc1EwRkJReXhOUVVGTkxFTkJRVU03VVVGRGRrSXNSVUZCUlN4RFFVRkRMRzFDUVVGdFFpeEhRVUZITEhsQ1FVRlhMRU5CUVVNc1ZVRkJWU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNVVUZCVVN4RlFVRkZMSGxDUVVGWExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTTFSaXhSUVVGUkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl4UlFVRlJMRU5CUVVNN1VVRkRha01zUlVGQlJTeERRVUZETERaQ1FVRTJRaXhIUVVGSExIbENRVUZYTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zVVVGQlVTeEZRVUZGTEhsQ1FVRlhMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU4wUnl4UlFVRlJMRWxCUVVrc2VVSkJRVmNzUTBGQlF5eFJRVUZSTEVOQlFVTTdVVUZEYWtNc1JVRkJSU3hEUVVGRExEWkNRVUUyUWl4SFFVRkhMSGxDUVVGWExFTkJRVU1zVlVGQlZTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1VVRkJVU3hGUVVGRkxIbENRVUZYTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOMFJ5eFJRVUZSTEVsQlFVa3NlVUpCUVZjc1EwRkJReXhSUVVGUkxFTkJRVU03VVVGRGFrTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1IwRkJSeXhUUVVGSExFTkJRVU1zVlVGQlZTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1VVRkJVU3hGUVVGRkxGTkJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUlRWRUxFOUJRVThzUlVGQlJTeERRVUZETzBsQlEyUXNRMEZCUXp0SlFVVkVPenM3VDBGSFJ6dEpRVU5KTEZGQlFWRTdVVUZEV0N4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMSGRDUVVGM1FpeEZRVUZGTEcxRVFVRjNRaXhEUVVGRExFVkJRVVU3V1VGREwwVXNUVUZCVFN4SlFVRkpMSEZDUVVGVExFTkJRVU1zZFVWQlFYVkZMRVZCUVVVc1JVRkJSU3gzUWtGQmQwSXNSVUZCUlN4SlFVRkpMRU5CUVVNc2QwSkJRWGRDTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUXpkS08xRkJSVVFzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVXNhVUpCUVU4c1EwRkJReXhGUVVGRk8xbEJRemRETEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExITkVRVUZ6UkN4RlFVRkZMRVZCUVVVc1QwRkJUeXhGUVVGRkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUXpGSE8xRkJSVVFzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNVMEZCUnl4RFFVRkRMRVZCUVVVN1dVRkROME1zVFVGQlRTeEpRVUZKTEhGQ1FVRlRMRU5CUVVNc01FUkJRVEJFTEVWQlFVVXNSVUZCUlN4WFFVRlhMRVZCUVVVc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETEVOQlFVTTdVMEZEZEVnN1VVRkZSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeFhRVUZKTEVOQlFVTXNSVUZCUlR0WlFVTjZReXhOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl4eFJFRkJjVVFzUlVGQlJTeEZRVUZGTEUxQlFVMHNSVUZCUlN4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFRRVU4yUnp0UlFVVkVMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1owSkJRV2RDTEVWQlFVVXNWMEZCU1N4RFFVRkRMRVZCUVVVN1dVRkRia1FzVFVGQlRTeEpRVUZKTEhGQ1FVRlRMRU5CUVVNc0swUkJRU3RFTEVWQlFVVXNSVUZCUlN4blFrRkJaMElzUlVGQlJTeEpRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFVkJRVVVzUTBGQlF5eERRVUZETzFOQlEzSkpPMUZCUlVRc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNSVUZCUlN4WFFVRkpMRU5CUVVNc1JVRkJSVHRaUVVOd1JDeE5RVUZOTEVsQlFVa3NjVUpCUVZNc1EwRkJReXhuUlVGQlowVXNSVUZCUlN4RlFVRkZMR2xDUVVGcFFpeEZRVUZGTEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUlVGQlJTeERRVUZETEVOQlFVTTdVMEZEZUVrN1VVRkZSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUlVGQlJTeFRRVUZITEVOQlFVTXNSVUZCUlR0WlFVTjJReXhOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl4dlJFRkJiMFFzUlVGQlJTeEZRVUZGTEV0QlFVc3NSVUZCUlN4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFRRVU53Unp0UlFVVkVMRTFCUVUwc1RVRkJUU3hIUVVGSExFbEJRVWtzUTBGQlF5eDNRa0ZCZDBJc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVTdZMEZETlVRc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVN1kwRkRiRU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4SlFVRkpMRmRCUVZjc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVN1kwRkRNVVFzVjBGQlZ5eERRVUZETEZkQlFWYzdZMEZEZGtJc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVN1kwRkRkRU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4SlFVRkpMSGxDUVVGWExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1VVRkJVU3hGUVVGRk8yTkJRemRFTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1NVRkJTU3g1UWtGQlZ5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExGRkJRVkVzUlVGQlJUdGpRVU5vUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFbEJRVWtzZVVKQlFWY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVTdZMEZETjBRc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVN1kwRkRha01zU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEZGQlFWRXNSVUZCUlR0alFVTXpReXhKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVVVGQlVTeEZRVUZGTzJOQlF6VkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzU1VGQlNTeEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVVVGQlVTeEZRVUZGTzJOQlEzQkVMRU5CUVVNc1NVRkJTU3hEUVVGRExHMUNRVUZ0UWl4SlFVRkpMSGxDUVVGWExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1VVRkJVU3hGUVVGRk8yTkJRM1pGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRFpDUVVFMlFpeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RlFVRkZPMk5CUTJwR0xFTkJRVU1zU1VGQlNTeERRVUZETERaQ1FVRTJRaXhKUVVGSkxIbENRVUZYTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVVVGQlVTeEZRVUZGTzJOQlEycEdMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1VVRkZka01zVFVGQlRTeE5RVUZOTEVkQlFVY3NUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJRenRSUVVNM1FpeEpRVUZKTEUxQlFVMHNTMEZCU3l4WFFVRlhMRU5CUVVNc1RVRkJUU3hGUVVGRk8xbEJReTlDTEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExITkNRVUZ6UWl4WFFVRlhMRU5CUVVNc1RVRkJUU3hqUVVGakxFMUJRVTBzUlVGQlJTeEZRVUZGTEVWQlFVVXNUVUZCVFN4RlFVRkZMRU5CUVVNc1EwRkJRenRUUVVOdVJ6dFJRVVZFTEU5QlFVOHNaVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dEpRVU55UXl4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NVVUZCVVR0UlFVTllMRTlCUVU4N0swSkJRMmRDTEVOQlFVTXNTVUZCU1N4RFFVRkRMSGRDUVVGM1FpeEpRVUZKTEcxRVFVRjNRaXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRkZCUVZFc1JVRkJSVHRqUVVONFJ5eERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRWxCUVVrc2FVSkJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhSUVVGUkxFVkJRVVU3VjBGRGVFUXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhKUVVGSkxGZEJRVmNzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVN2EwSkJRM2hETEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1NVRkJTU3hUUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1VVRkJVU3hGUVVGRk8yVkJRM2hFTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1NVRkJTU3g1UWtGQlZ5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSVHRyUWtGREwwTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1dVRkJXU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1VVRkJVU3hGUVVGRk8yVkJRM2hFTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1NVRkJTU3g1UWtGQlZ5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSVHRoUVVOd1JDeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRWxCUVVrc1YwRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRkZCUVZFc1JVRkJSVHQxUWtGRGRrTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1owSkJRV2RDTEVsQlFVa3NWMEZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEZGQlFWRXNSVUZCUlR0M1FrRkRNVVFzUTBGQlF5eEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFbEJRVWtzVjBGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExGRkJRVkVzUlVGQlJUdFZRVU14UlN4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFbEJRVWtzU1VGQlNTeERRVUZETEZkQlFWY3NTVUZCU1N4VFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RlFVRkZPM2xDUVVOc1JDeERRVUZETEVsQlFVa3NRMEZCUXl4dFFrRkJiVUlzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJUdHRRMEZEYkVRc1EwRkJReXhKUVVGSkxFTkJRVU1zTmtKQlFUWkNMRWxCUVVrc2VVSkJRVmNzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVN2JVTkJRM1JGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRFpDUVVFMlFpeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTzFsQlF6ZEdMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzU1VGQlNTeFRRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVVVGQlVTeEZRVUZGTzBWQlEzcEVMRU5CUVVNN1NVRkRReXhEUVVGRE96dEJRWEJTUkRzN1IwRkZSenRCUVVOdlFpeHJRa0ZCVFN4SFFVRlhMRWxCUVVrc1EwRkJRenRCUVVVM1F6czdSMEZGUnp0QlFVTnZRaXc0UWtGQmEwSXNSMEZCVnl4RlFVRkZMRU5CUVVNN1FVRkZka1E3TzBkQlJVYzdRVUZEYjBJc2RVSkJRVmNzUjBGQlZ5eEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRmRCUVZjc1EwRkJReXhyUWtGQmEwSXNRMEZCUXl4RFFVRkRPMEZCUlhoR0xHVkJRV1U3UVVGRFV5eHZRa0ZCVVN4SFFVRm5RaXg1UWtGQlZ5eERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03UVVGcVFteEdMR3REUVhOU1F5SjkiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGFycmF5SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9hcnJheUhlbHBlclwiKTtcclxuY29uc3QgbnVtYmVySGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIik7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBkYXRhRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvci9kYXRhRXJyb3JcIik7XHJcbmNvbnN0IHRyeXRlc18xID0gcmVxdWlyZShcIi4vdHJ5dGVzXCIpO1xyXG4vKipcclxuICogQSBjbGFzcyBmb3IgaGFuZGxpbmcgdHJpdHMuXHJcbiAqL1xyXG5jbGFzcyBUcml0cyB7XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGNvbnN0cnVjdG9yKHRyaXRzKSB7XHJcbiAgICAgICAgdGhpcy5fdHJpdHMgPSB0cml0cztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGluc3RhbmNlIG9mIHRyaXRzIGZyb20gSW50OEFycmF5IGFycmF5LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRyeXRlcyB1c2VkIHRvIGNyZWF0ZSB0cml0cy5cclxuICAgICAqIEByZXR1cm5zIEFuIGluc3RhbmNlIG9mIFRyaXRzLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZnJvbUFycmF5KHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHZhbHVlLCBJbnQ4QXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdmFsdWUgZG9lcyBub3QgY29udGFpbiB2YWxpZCB0cml0c1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUcml0cyh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBpbnN0YW5jZSBvZiB0cml0cyBmcm9tIG51bWJlciBhcnJheS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUcnl0ZXMgdXNlZCB0byBjcmVhdGUgdHJpdHMuXHJcbiAgICAgKiBAcmV0dXJucyBBbiBpbnN0YW5jZSBvZiBUcml0cy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21OdW1iZXJBcnJheSh2YWx1ZSkge1xyXG4gICAgICAgIGlmICghYXJyYXlIZWxwZXJfMS5BcnJheUhlbHBlci5pc1R5cGVkKHZhbHVlLCBOdW1iZXIpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdmFsdWUgZG9lcyBub3QgY29udGFpbiB2YWxpZCB0cml0c1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUcml0cyhuZXcgSW50OEFycmF5KHZhbHVlKSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBpbnN0YW5jZSBvZiB0cml0cyBmcm9tIHRyeXRlcy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUcnl0ZXMgdXNlZCB0byBjcmVhdGUgdHJpdHMuXHJcbiAgICAgKiBAcmV0dXJucyBBbiBpbnN0YW5jZSBvZiBUcml0cy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21Ucnl0ZXModmFsdWUpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodmFsdWUsIHRyeXRlc18xLlRyeXRlcykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSB2YWx1ZSBzaG91bGQgYmUgYSB2YWxpZCBUcnl0ZXMgb2JqZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0cnl0ZXNTdHJpbmcgPSB2YWx1ZS50b1N0cmluZygpO1xyXG4gICAgICAgIGNvbnN0IHRyaXRzID0gbmV3IEludDhBcnJheSh0cnl0ZXNTdHJpbmcubGVuZ3RoICogMyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cnl0ZXNTdHJpbmcubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgaWR4ID0gdHJ5dGVzXzEuVHJ5dGVzLkFMUEhBQkVULmluZGV4T2YodHJ5dGVzU3RyaW5nLmNoYXJBdChpKSk7XHJcbiAgICAgICAgICAgIHRyaXRzW2kgKiAzXSA9IFRyaXRzLlRSWVRFU19UUklUU1tpZHhdWzBdO1xyXG4gICAgICAgICAgICB0cml0c1tpICogMyArIDFdID0gVHJpdHMuVFJZVEVTX1RSSVRTW2lkeF1bMV07XHJcbiAgICAgICAgICAgIHRyaXRzW2kgKiAzICsgMl0gPSBUcml0cy5UUllURVNfVFJJVFNbaWR4XVsyXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUcml0cyh0cml0cyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBpbnN0YW5jZSBvZiB0cml0cyBmcm9tIG51bWJlclxyXG4gICAgICogQHBhcmFtIHZhbHVlIE51bWJlciB1c2VkIHRvIGNyZWF0ZSB0cml0cy5cclxuICAgICAqIEByZXR1cm5zIEFuIGluc3RhbmNlIG9mIFRyaXRzLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZnJvbU51bWJlcih2YWx1ZSkge1xyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcih2YWx1ZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSB2YWx1ZSBpcyBub3QgYW4gaW50ZWdlclwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdHJpdHMgPSBbXTtcclxuICAgICAgICBsZXQgYWJzb2x1dGVWYWx1ZSA9IHZhbHVlIDwgMCA/IC12YWx1ZSA6IHZhbHVlO1xyXG4gICAgICAgIHdoaWxlIChhYnNvbHV0ZVZhbHVlID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgcmVtYWluZGVyID0gYWJzb2x1dGVWYWx1ZSAlIDM7XHJcbiAgICAgICAgICAgIGFic29sdXRlVmFsdWUgPSBNYXRoLmZsb29yKGFic29sdXRlVmFsdWUgLyAzKTtcclxuICAgICAgICAgICAgaWYgKHJlbWFpbmRlciA+IDEpIHtcclxuICAgICAgICAgICAgICAgIHJlbWFpbmRlciA9IC0xO1xyXG4gICAgICAgICAgICAgICAgYWJzb2x1dGVWYWx1ZSsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyaXRzW3RyaXRzLmxlbmd0aF0gPSByZW1haW5kZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2YWx1ZSA8IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cml0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdHJpdHNbaV0gPSAtdHJpdHNbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUcml0cyhuZXcgSW50OEFycmF5KHRyaXRzKSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEFkZCB0d28gdHJpdHMgdG9nZXRoZXIuXHJcbiAgICAgKiBAcGFyYW0gZmlyc3QgVGhlIGZpcnN0IHRyaXQuXHJcbiAgICAgKiBAcGFyYW0gc2Vjb25kIFRoZSBzZWNvbmQgdHJpdC5cclxuICAgICAqIEByZXR1cm5zIE5ldyB0cml0IHdoaWNoIGlzIHRoZSBhZGRpdGlvbiBvZiB0aGUgYSArIGIuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBhZGQoZmlyc3QsIHNlY29uZCkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShmaXJzdCwgVHJpdHMpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgZmlyc3Qgc2hvdWxkIGJlIGEgdmFsaWQgVHJpdHMgb2JqZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoc2Vjb25kLCBUcml0cykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSBzZWNvbmRzIHNob3VsZCBiZSBhIHZhbGlkIFRyaXRzIG9iamVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgb3V0ID0gbmV3IEludDhBcnJheShNYXRoLm1heChmaXJzdC5fdHJpdHMubGVuZ3RoLCBzZWNvbmQuX3RyaXRzLmxlbmd0aCkpO1xyXG4gICAgICAgIGxldCBjYXJyeSA9IDA7XHJcbiAgICAgICAgbGV0IGlBO1xyXG4gICAgICAgIGxldCBpQjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG91dC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpQSA9IGkgPCBmaXJzdC5fdHJpdHMubGVuZ3RoID8gZmlyc3QuX3RyaXRzW2ldIDogMDtcclxuICAgICAgICAgICAgaUIgPSBpIDwgc2Vjb25kLl90cml0cy5sZW5ndGggPyBzZWNvbmQuX3RyaXRzW2ldIDogMDtcclxuICAgICAgICAgICAgY29uc3QgZkEgPSBUcml0cy5mdWxsQWRkKGlBLCBpQiwgY2FycnkpO1xyXG4gICAgICAgICAgICBvdXRbaV0gPSBmQVswXTtcclxuICAgICAgICAgICAgY2FycnkgPSBmQVsxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFRyaXRzLmZyb21BcnJheShvdXQpO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBzdGF0aWMgZnVsbEFkZChhLCBiLCBjKSB7XHJcbiAgICAgICAgY29uc3Qgc0EgPSBUcml0cy5zdW0oYSwgYik7XHJcbiAgICAgICAgY29uc3QgY0EgPSBUcml0cy5jb25zKGEsIGIpO1xyXG4gICAgICAgIGNvbnN0IGNCID0gVHJpdHMuY29ucyhzQSwgYyk7XHJcbiAgICAgICAgY29uc3QgY091dCA9IFRyaXRzLmFueShjQSwgY0IpO1xyXG4gICAgICAgIGNvbnN0IHNPVXQgPSBUcml0cy5zdW0oc0EsIGMpO1xyXG4gICAgICAgIHJldHVybiBuZXcgSW50OEFycmF5KFtzT1V0LCBjT3V0XSk7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHN0YXRpYyBzdW0oYSwgYikge1xyXG4gICAgICAgIGNvbnN0IHMgPSBhICsgYjtcclxuICAgICAgICBzd2l0Y2ggKHMpIHtcclxuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgIGNhc2UgLTI6IHJldHVybiAxO1xyXG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHN0YXRpYyBjb25zKGEsIGIpIHtcclxuICAgICAgICBpZiAoYSA9PT0gYikge1xyXG4gICAgICAgICAgICByZXR1cm4gYTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHN0YXRpYyBhbnkoYSwgYikge1xyXG4gICAgICAgIGNvbnN0IHMgPSBhICsgYjtcclxuICAgICAgICBpZiAocyA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHMgPCAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgdmFsdWUgb2YgdGhlIHRyaXRzIGFycmF5LlxyXG4gICAgICogQHJldHVybnMgQXJyYXkgcmVwcmVzZW50YXRpb24gb2YgdGhlIHRyaXRzLlxyXG4gICAgICovXHJcbiAgICB0b0FycmF5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cml0cztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSB2YWx1ZSBvZiB0aGUgdHJpdHMgYXJyYXkgYXMgYSBudW1iZXIgYXJyYXkuXHJcbiAgICAgKiBAcmV0dXJucyBBcnJheSByZXByZXNlbnRhdGlvbiBvZiB0aGUgdHJpdHMuXHJcbiAgICAgKi9cclxuICAgIHRvTnVtYmVyQXJyYXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5fdHJpdHMpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHRyaXRzIGFzIHRyeXRlcy5cclxuICAgICAqIEByZXR1cm5zIEluc3RhbmNlIG9mIFRyeXRlcy5cclxuICAgICAqL1xyXG4gICAgdG9Ucnl0ZXMoKSB7XHJcbiAgICAgICAgbGV0IHRyeXRlcyA9IFwiXCI7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl90cml0cy5sZW5ndGg7IGkgKz0gMykge1xyXG4gICAgICAgICAgICAvLyBJdGVyYXRlIG92ZXIgYWxsIHBvc3NpYmxlIHRyeXRlIHZhbHVlcyB0byBmaW5kIGNvcnJlY3QgdHJpdCByZXByZXNlbnRhdGlvblxyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRyeXRlc18xLlRyeXRlcy5BTFBIQUJFVC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKFRyaXRzLlRSWVRFU19UUklUU1tqXVswXSA9PT0gdGhpcy5fdHJpdHNbaV0gJiZcclxuICAgICAgICAgICAgICAgICAgICBUcml0cy5UUllURVNfVFJJVFNbal1bMV0gPT09IHRoaXMuX3RyaXRzW2kgKyAxXSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIFRyaXRzLlRSWVRFU19UUklUU1tqXVsyXSA9PT0gdGhpcy5fdHJpdHNbaSArIDJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5dGVzICs9IHRyeXRlc18xLlRyeXRlcy5BTFBIQUJFVC5jaGFyQXQoaik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRyeXRlc18xLlRyeXRlcy5mcm9tU3RyaW5nKHRyeXRlcyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgdHJpdHMgYXMgYSBudW1iZXIuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgdHJpdHMgY29udmVydGVkIHRvIGEgbnVtYmVyLlxyXG4gICAgICovXHJcbiAgICB0b051bWJlcigpIHtcclxuICAgICAgICBsZXQgcmV0dXJuVmFsdWUgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLl90cml0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHJldHVyblZhbHVlICogMyArIHRoaXMuX3RyaXRzW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFdoYXQgaXMgdGhlIGxlbmd0aCBvZiB0aGUgdHJpdHMuXHJcbiAgICAgKiBAcmV0dXJucyBMZW5ndGggb2YgdGhlIHRyaXRzLlxyXG4gICAgICovXHJcbiAgICBsZW5ndGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyaXRzLmxlbmd0aDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGEgc3ViIG9mIHRoZSB0cml0cy5cclxuICAgICAqIEBwYXJhbSBzdGFydCBUaGUgc3RhcnQgcG9zaXRpb24gdG8gZ2V0IHRoZSBzdWIuXHJcbiAgICAgKiBAcGFyYW0gbGVuZ3RoIFRoZSBsZW5ndGggb2YgdGhlIHN1Yi5cclxuICAgICAqIEByZXR1cm5zIFRoZSB0cml0cyBzdWIuXHJcbiAgICAgKi9cclxuICAgIHN1YihzdGFydCwgbGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKHN0YXJ0KSB8fCBzdGFydCA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSBzdGFydCBtdXN0IGJlIGEgbnVtYmVyID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihsZW5ndGgpIHx8IChzdGFydCArIGxlbmd0aCkgPiB0aGlzLl90cml0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIHN0YXJ0ICsgbGVuZ3RoIG11c3QgPD0gJHt0aGlzLl90cml0cy5sZW5ndGh9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBUcml0cy5mcm9tQXJyYXkodGhpcy5fdHJpdHMuc2xpY2Uoc3RhcnQsIHN0YXJ0ICsgbGVuZ3RoKSk7XHJcbiAgICB9XHJcbn1cclxuLyogQGludGVybmFsICovXHJcblRyaXRzLlRSWVRFU19UUklUUyA9IFtcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzAsIDAsIDBdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzEsIDAsIDBdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWy0xLCAxLCAwXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFswLCAxLCAwXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFsxLCAxLCAwXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFstMSwgLTEsIDFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzAsIC0xLCAxXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFsxLCAtMSwgMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbLTEsIDAsIDFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzAsIDAsIDFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzEsIDAsIDFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWy0xLCAxLCAxXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFswLCAxLCAxXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFsxLCAxLCAxXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFstMSwgLTEsIC0xXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFswLCAtMSwgLTFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzEsIC0xLCAtMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbLTEsIDAsIC0xXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFswLCAwLCAtMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMSwgMCwgLTFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWy0xLCAxLCAtMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMCwgMSwgLTFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzEsIDEsIC0xXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFstMSwgLTEsIDBdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzAsIC0xLCAwXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFsxLCAtMSwgMF0pLFxyXG4gICAgbmV3IEludDhBcnJheShbLTEsIDAsIDBdKVxyXG5dO1xyXG5leHBvcnRzLlRyaXRzID0gVHJpdHM7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRISnBkSE11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZaR0YwWVM5MGNtbDBjeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRXNNRVZCUVhWRk8wRkJRM1pGTERSRlFVRjVSVHRCUVVONlJTdzBSVUZCZVVVN1FVRkRla1VzYTBSQlFTdERPMEZCUXk5RExIRkRRVUZyUXp0QlFVVnNRenM3UjBGRlJ6dEJRVU5JTzBsQmJVTkpMR1ZCUVdVN1NVRkRaaXhaUVVGdlFpeExRVUZuUWp0UlFVTm9ReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEV0QlFVc3NRMEZCUXp0SlFVTjRRaXhEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNTMEZCWjBJN1VVRkRjRU1zU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUlVGQlJTeFRRVUZUTEVOQlFVTXNSVUZCUlR0WlFVTjRReXhOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl4M1EwRkJkME1zUTBGQlF5eERRVUZETzFOQlEycEZPMUZCUTBRc1QwRkJUeXhKUVVGSkxFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTTFRaXhEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eGxRVUZsTEVOQlFVTXNTMEZCWlR0UlFVTjZReXhKUVVGSkxFTkJRVU1zZVVKQlFWY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhGUVVGRkxFMUJRVTBzUTBGQlF5eEZRVUZGTzFsQlEzSkRMRTFCUVUwc1NVRkJTU3h4UWtGQlV5eERRVUZETEhkRFFVRjNReXhEUVVGRExFTkJRVU03VTBGRGFrVTdVVUZEUkN4UFFVRlBMRWxCUVVrc1MwRkJTeXhEUVVGRExFbEJRVWtzVTBGQlV5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRNME1zUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRXRCUVdFN1VVRkRiRU1zU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUlVGQlJTeGxRVUZOTEVOQlFVTXNSVUZCUlR0WlFVTnlReXhOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl3eVEwRkJNa01zUTBGQlF5eERRVUZETzFOQlEzQkZPMUZCUTBRc1RVRkJUU3haUVVGWkxFZEJRVWNzUzBGQlN5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMUZCUTNSRExFMUJRVTBzUzBGQlN5eEhRVUZqTEVsQlFVa3NVMEZCVXl4RFFVRkRMRmxCUVZrc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYUVVc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRmxCUVZrc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdXVUZETVVNc1RVRkJUU3hIUVVGSExFZEJRVWNzWlVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1dVRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpWRUxFdEJRVXNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRExGbEJRVmtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNeFF5eExRVUZMTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6bERMRXRCUVVzc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJReXhaUVVGWkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1UwRkRha1E3VVVGRFJDeFBRVUZQTEVsQlFVa3NTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRelZDTEVOQlFVTTdTVUZGUkRzN096dFBRVWxITzBsQlEwa3NUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhMUVVGaE8xRkJRMnhETEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlFVTXNSVUZCUlR0WlFVTm9ReXhOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl3MlFrRkJOa0lzUTBGQlF5eERRVUZETzFOQlEzUkVPMUZCUTBRc1RVRkJUU3hMUVVGTExFZEJRV0VzUlVGQlJTeERRVUZETzFGQlF6TkNMRWxCUVVrc1lVRkJZU3hIUVVGSExFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTTdVVUZGTDBNc1QwRkJUeXhoUVVGaExFZEJRVWNzUTBGQlF5eEZRVUZGTzFsQlEzUkNMRWxCUVVrc1UwRkJVeXhIUVVGSExHRkJRV0VzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZEYkVNc1lVRkJZU3hIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNZVUZCWVN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJSVGxETEVsQlFVa3NVMEZCVXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRuUWtGRFppeFRRVUZUTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRMllzWVVGQllTeEZRVUZGTEVOQlFVTTdZVUZEYmtJN1dVRkZSQ3hMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRk5CUVZNc1EwRkJRenRUUVVOdVF6dFJRVU5FTEVsQlFVa3NTMEZCU3l4SFFVRkhMRU5CUVVNc1JVRkJSVHRaUVVOWUxFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMmRDUVVOdVF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdZVUZEZUVJN1UwRkRTanRSUVVWRUxFOUJRVThzU1VGQlNTeExRVUZMTEVOQlFVTXNTVUZCU1N4VFFVRlRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU16UXl4RFFVRkRPMGxCUlVRN096czdPMDlCUzBjN1NVRkRTU3hOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFWa3NSVUZCUlN4TlFVRmhPMUZCUTNwRExFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFVkJRVVVzUzBGQlN5eERRVUZETEVWQlFVVTdXVUZEY0VNc1RVRkJUU3hKUVVGSkxIRkNRVUZUTEVOQlFVTXNNRU5CUVRCRExFTkJRVU1zUTBGQlF6dFRRVU51UlR0UlFVTkVMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRVZCUVVVc1MwRkJTeXhEUVVGRExFVkJRVVU3V1VGRGNrTXNUVUZCVFN4SlFVRkpMSEZDUVVGVExFTkJRVU1zTkVOQlFUUkRMRU5CUVVNc1EwRkJRenRUUVVOeVJUdFJRVVZFTEUxQlFVMHNSMEZCUnl4SFFVRkhMRWxCUVVrc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFVkJRVVVzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJReTlGTEVsQlFVa3NTMEZCU3l4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOa0xFbEJRVWtzUlVGQlJTeERRVUZETzFGQlExQXNTVUZCU1N4RlFVRkZMRU5CUVVNN1VVRkZVQ3hMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVVnFReXhGUVVGRkxFZEJRVWNzUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYmtRc1JVRkJSU3hIUVVGSExFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzSkVMRTFCUVUwc1JVRkJSU3hIUVVGSExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dFpRVU40UXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJZc1MwRkJTeXhIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTnFRanRSUVVWRUxFOUJRVThzUzBGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRKUVVOb1F5eERRVUZETzBsQlJVUXNaVUZCWlR0SlFVTlFMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlV5eEZRVUZGTEVOQlFWTXNSVUZCUlN4RFFVRlRPMUZCUTJ4RUxFMUJRVTBzUlVGQlJTeEhRVUZITEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6TkNMRTFCUVUwc1JVRkJSU3hIUVVGSExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRelZDTEUxQlFVMHNSVUZCUlN4SFFVRkhMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUXpkQ0xFMUJRVTBzU1VGQlNTeEhRVUZITEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzFGQlF5OUNMRTFCUVUwc1NVRkJTU3hIUVVGSExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJSVGxDTEU5QlFVOHNTVUZCU1N4VFFVRlRMRU5CUVVNc1EwRkJReXhKUVVGSkxFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTjJReXhEUVVGRE8wbEJSVVFzWlVGQlpUdEpRVU5RTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJVeXhGUVVGRkxFTkJRVk03VVVGRGJrTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVVZvUWl4UlFVRlJMRU5CUVVNc1JVRkJSVHRaUVVOUUxFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOc1FpeExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03V1VGRGJFSXNUMEZCVHl4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03VTBGRGNrSTdTVUZEVEN4RFFVRkRPMGxCUlVRc1pVRkJaVHRKUVVOUUxFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCVXl4RlFVRkZMRU5CUVZNN1VVRkRjRU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZPMWxCUTFRc1QwRkJUeXhEUVVGRExFTkJRVU03VTBGRFdqdFJRVU5FTEU5QlFVOHNRMEZCUXl4RFFVRkRPMGxCUTJJc1EwRkJRenRKUVVWRUxHVkJRV1U3U1VGRFVDeE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVZNc1JVRkJSU3hEUVVGVE8xRkJRMjVETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRmFFSXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRk8xbEJRMUFzVDBGQlR5eERRVUZETEVOQlFVTTdVMEZEV2p0aFFVRk5MRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJUdFpRVU5rTEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNN1UwRkRZanRSUVVWRUxFOUJRVThzUTBGQlF5eERRVUZETzBsQlEySXNRMEZCUXp0SlFVVkVPenM3VDBGSFJ6dEpRVU5KTEU5QlFVODdVVUZEVml4UFFVRlBMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU03U1VGRGRrSXNRMEZCUXp0SlFVVkVPenM3VDBGSFJ6dEpRVU5KTEdGQlFXRTdVVUZEYUVJc1QwRkJUeXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRKUVVOdVF5eERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVVVGQlVUdFJRVU5ZTEVsQlFVa3NUVUZCVFN4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVWb1FpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJUdFpRVU0xUXl3MlJVRkJOa1U3V1VGRE4wVXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEdWQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzJkQ1FVTTNReXhKUVVGSkxFdEJRVXNzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNN2IwSkJRek5ETEV0QlFVc3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzI5Q1FVTXZReXhMUVVGTExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRk8yOUNRVU5xUkN4TlFVRk5MRWxCUVVrc1pVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN2IwSkJRM0JETEUxQlFVMDdhVUpCUTFRN1lVRkRTanRUUVVOS08xRkJSVVFzVDBGQlR5eGxRVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8wbEJRM0pETEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeFJRVUZSTzFGQlExZ3NTVUZCU1N4WFFVRlhMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJSWEJDTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdXVUZET1VNc1YwRkJWeXhIUVVGSExGZEJRVmNzUjBGQlJ5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU5zUkR0UlFVVkVMRTlCUVU4c1YwRkJWeXhEUVVGRE8wbEJRM1pDTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeE5RVUZOTzFGQlExUXNUMEZCVHl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF6dEpRVU01UWl4RFFVRkRPMGxCUlVRN096czdPMDlCUzBjN1NVRkRTU3hIUVVGSExFTkJRVU1zUzBGQllTeEZRVUZGTEUxQlFXTTdVVUZEY0VNc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNVMEZCVXl4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFdEJRVXNzUjBGQlJ5eERRVUZETEVWQlFVVTdXVUZETjBNc1RVRkJUU3hKUVVGSkxIRkNRVUZUTEVOQlFVTXNhVU5CUVdsRExFTkJRVU1zUTBGQlF6dFRRVU14UkR0UlFVTkVMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eE5RVUZOTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFMUJRVTBzUlVGQlJUdFpRVU14UlN4TlFVRk5MRWxCUVVrc2NVSkJRVk1zUTBGQlF5dzRRa0ZCT0VJc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUXpORk8xRkJRMFFzVDBGQlR5eExRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NSVUZCUlN4TFFVRkxMRWRCUVVjc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU55UlN4RFFVRkRPenRCUVhaUlJDeGxRVUZsTzBGQlExTXNhMEpCUVZrc1IwRkJaMEk3U1VGRGFFUXNTVUZCU1N4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTNoQ0xFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU40UWl4SlFVRkpMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVONlFpeEpRVUZKTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEZUVJc1NVRkJTU3hUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRM2hDTEVsQlFVa3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRNVUlzU1VGQlNTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEZWtJc1NVRkJTU3hUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGVrSXNTVUZCU1N4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRla0lzU1VGQlNTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzaENMRWxCUVVrc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVONFFpeEpRVUZKTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTjZRaXhKUVVGSkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGVFSXNTVUZCU1N4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTNoQ0xFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTXpRaXhKUVVGSkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlF6RkNMRWxCUVVrc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRE1VSXNTVUZCU1N4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVNeFFpeEpRVUZKTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTjZRaXhKUVVGSkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU42UWl4SlFVRkpMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRekZDTEVsQlFVa3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTNwQ0xFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzcENMRWxCUVVrc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRE1VSXNTVUZCU1N4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRla0lzU1VGQlNTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEZWtJc1NVRkJTU3hUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03UTBGRE5VSXNRMEZCUXp0QlFUbENUaXh6UWtFd1VVTWlmUT09IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBudW1iZXJIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiKTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IGRhdGFFcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2RhdGFFcnJvclwiKTtcclxuY29uc3QgdHJpdHNfMSA9IHJlcXVpcmUoXCIuL3RyaXRzXCIpO1xyXG5jb25zdCB0cnl0ZXNfMSA9IHJlcXVpcmUoXCIuL3RyeXRlc1wiKTtcclxuLyoqXHJcbiAqIEEgY2xhc3MgZm9yIGhhbmRsaW5nIHRyeXRlIG51bWJlci5cclxuICovXHJcbmNsYXNzIFRyeXRlTnVtYmVyIHtcclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgY29uc3RydWN0b3IodHJ5dGVzKSB7XHJcbiAgICAgICAgdGhpcy5fdHJ5dGVzID0gdHJ5dGVzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgdHJ5dGUgbnVtYmVyIGZyb20gbnVtYmVyLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBudW1iZXIgdmFsdWUgdG8gY3JlYXRlIHRoZSBvYmplY3QgZnJvbS5cclxuICAgICAqIEBwYXJhbSBsZW5ndGggVGhlIHRyeXRlIGxlbmd0aCB0byBwYWQgdGhlIG51bWJlciB3aXRoLlxyXG4gICAgICogQHJldHVybnMgQW4gaW5zdGFuY2Ugb2YgVHJ5dGVOdW1iZXIuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmcm9tTnVtYmVyKHZhbHVlLCBsZW5ndGggPSBUcnl0ZU51bWJlci5MRU5HVEhfOSkge1xyXG4gICAgICAgIGxldCB0cnl0ZXM7XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGxlbmd0aCkgfHwgbGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSBsZW5ndGggc2hvdWxkIGJlIGEgbnVtYmVyID4gMFwiLCB7IGxlbmd0aCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc0VtcHR5KHZhbHVlKSkge1xyXG4gICAgICAgICAgICB0cnl0ZXMgPSBcIjlcIi5yZXBlYXQobGVuZ3RoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcih2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdmFsdWUgaXMgbm90IGFuIGludGVnZXJcIiwgeyB2YWx1ZSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCB0cml0cyA9IHRyaXRzXzEuVHJpdHMuZnJvbU51bWJlcih2YWx1ZSkudG9OdW1iZXJBcnJheSgpO1xyXG4gICAgICAgICAgICB3aGlsZSAodHJpdHMubGVuZ3RoIDwgbGVuZ3RoICogMykge1xyXG4gICAgICAgICAgICAgICAgdHJpdHMucHVzaCgwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cnl0ZXMgPSB0cml0c18xLlRyaXRzLmZyb21OdW1iZXJBcnJheSh0cml0cykudG9Ucnl0ZXMoKS50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFRyeXRlTnVtYmVyKHRyeXRlcyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSB0cnl0ZSBudW1iZXIgZnJvbSB0cnl0ZXMuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIG51bWJlciB2YWx1ZSB0byBjcmVhdGUgdGhlIG9iamVjdCBmcm9tLlxyXG4gICAgICogQHBhcmFtIGxlbmd0aCBUaGUgdHJ5dGUgbGVuZ3RoIHRvIHBhZCB0aGUgbnVtYmVyIHdpdGguXHJcbiAgICAgKiBAcmV0dXJucyBBbiBpbnN0YW5jZSBvZiBUcnl0ZU51bWJlci5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21Ucnl0ZXModmFsdWUsIGxlbmd0aCA9IFRyeXRlTnVtYmVyLkxFTkdUSF85KSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHZhbHVlLCB0cnl0ZXNfMS5Ucnl0ZXMpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdmFsdWUgc2hvdWxkIGJlIGEgdmFsaWQgVHJ5dGVzIG9iamVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHRyeXRlU3RyaW5nID0gdmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIobGVuZ3RoKSB8fCBsZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIGxlbmd0aCBzaG91bGQgYmUgYSBudW1iZXIgPiAwXCIsIHsgbGVuZ3RoIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHJ5dGVTdHJpbmcubGVuZ3RoID4gbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdmFsdWUgY29udGFpbnMgdG9vIG1hbnkgY2hhcmFjdGVyc1wiLCB7IGxlbmd0aDogdHJ5dGVTdHJpbmcubGVuZ3RoIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAodHJ5dGVTdHJpbmcubGVuZ3RoIDwgbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRyeXRlU3RyaW5nICs9IFwiOVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFRyeXRlTnVtYmVyKHRyeXRlU3RyaW5nKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCB0aGUgdHJ5dGUgbnVtYmVyIHRvIHRyeXRlcy5cclxuICAgICAqIEByZXR1cm5zIFRyeXRlcyB2ZXJzaW9uIG9mIHRoZSB0cnl0ZSBudW1iZXIuXHJcbiAgICAgKi9cclxuICAgIHRvVHJ5dGVzKCkge1xyXG4gICAgICAgIHJldHVybiB0cnl0ZXNfMS5Ucnl0ZXMuZnJvbVN0cmluZyh0aGlzLl90cnl0ZXMpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IHRoZSB0cnl0ZSBudW1iZXIgdG8gbnVtYmVyLlxyXG4gICAgICogQHJldHVybnMgbnVtYmVyIHZhbHVlIG9mIHRoZSB0cnl0ZSBudW1iZXIuXHJcbiAgICAgKi9cclxuICAgIHRvTnVtYmVyKCkge1xyXG4gICAgICAgIHJldHVybiB0cml0c18xLlRyaXRzLmZyb21Ucnl0ZXModHJ5dGVzXzEuVHJ5dGVzLmZyb21TdHJpbmcodGhpcy5fdHJ5dGVzKSkudG9OdW1iZXIoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBzdHJpbmcgdmlldyBvZiB0aGUgb2JqZWN0LlxyXG4gICAgICogQHJldHVybnMgc3RyaW5nIG9mIHRoZSB0cnl0ZXMuXHJcbiAgICAgKi9cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cnl0ZXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgdmFsdWUgb2YgdGhlIG9iamVjdC5cclxuICAgICAqIEByZXR1cm5zIHN0cmluZyBvZiB0aGUgdHJ5dGVzLlxyXG4gICAgICovXHJcbiAgICB2YWx1ZU9mKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvTnVtYmVyKCk7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIExlbmd0aCBvZiBhIG51bWJlciB0aGF0IHVzZXMgOSB0cnl0ZXMuXHJcbiAqL1xyXG5Ucnl0ZU51bWJlci5MRU5HVEhfOSA9IDk7XHJcbi8qKlxyXG4gKiBBbiBlbXB0eSA5IGxlbmd0aCB0cnl0ZSBudW1iZXIuXHJcbiAqL1xyXG5Ucnl0ZU51bWJlci5FTVBUWV85ID0gVHJ5dGVOdW1iZXIuZnJvbU51bWJlcigwLCBUcnl0ZU51bWJlci5MRU5HVEhfOSk7XHJcbmV4cG9ydHMuVHJ5dGVOdW1iZXIgPSBUcnl0ZU51bWJlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZEhKNWRHVk9kVzFpWlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12WkdGMFlTOTBjbmwwWlU1MWJXSmxjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRXNORVZCUVhsRk8wRkJRM3BGTERSRlFVRjVSVHRCUVVONlJTeHJSRUZCSzBNN1FVRkRMME1zYlVOQlFXZERPMEZCUTJoRExIRkRRVUZyUXp0QlFVVnNRenM3UjBGRlJ6dEJRVU5JTzBsQllVa3NaVUZCWlR0SlFVTm1MRmxCUVc5Q0xFMUJRV003VVVGRE9VSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhOUVVGTkxFTkJRVU03U1VGRE1VSXNRMEZCUXp0SlFVVkVPenM3T3p0UFFVdEhPMGxCUTBrc1RVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eExRVUZoTEVWQlFVVXNVMEZCYVVJc1YwRkJWeXhEUVVGRExGRkJRVkU3VVVGRGVrVXNTVUZCU1N4TlFVRk5MRU5CUVVNN1VVRkZXQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzVFVGQlRTeEpRVUZKTEVOQlFVTXNSVUZCUlR0WlFVTm9SQ3hOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl4dFEwRkJiVU1zUlVGQlJTeEZRVUZGTEUxQlFVMHNSVUZCUlN4RFFVRkRMRU5CUVVNN1UwRkRlRVU3VVVGRlJDeEpRVUZKTERKQ1FVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZGTzFsQlF6ZENMRTFCUVUwc1IwRkJSeXhIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMU5CUXk5Q08yRkJRVTA3V1VGRFNDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVVTdaMEpCUTJoRExFMUJRVTBzU1VGQlNTeHhRa0ZCVXl4RFFVRkRMRFpDUVVFMlFpeEZRVUZGTEVWQlFVVXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRoUVVOcVJUdFpRVVZFTEUxQlFVMHNTMEZCU3l4SFFVRkhMR0ZCUVVzc1EwRkJReXhWUVVGVkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNZVUZCWVN4RlFVRkZMRU5CUVVNN1dVRkZkRVFzVDBGQlR5eExRVUZMTEVOQlFVTXNUVUZCVFN4SFFVRkhMRTFCUVUwc1IwRkJSeXhEUVVGRExFVkJRVVU3WjBKQlF6bENMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdZVUZEYWtJN1dVRkZSQ3hOUVVGTkxFZEJRVWNzWVVGQlN5eERRVUZETEdWQlFXVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0VFFVTXZSRHRSUVVWRUxFOUJRVThzU1VGQlNTeFhRVUZYTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1NVRkRia01zUTBGQlF6dEpRVVZFT3pzN096dFBRVXRITzBsQlEwa3NUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhMUVVGaExFVkJRVVVzVTBGQmFVSXNWMEZCVnl4RFFVRkRMRkZCUVZFN1VVRkRla1VzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUlVGQlJTeGxRVUZOTEVOQlFVTXNSVUZCUlR0WlFVTnlReXhOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl3eVEwRkJNa01zUTBGQlF5eERRVUZETzFOQlEzQkZPMUZCUTBRc1NVRkJTU3hYUVVGWExFZEJRVWNzUzBGQlN5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMUZCUlc1RExFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeE5RVUZOTEVsQlFVa3NRMEZCUXl4RlFVRkZPMWxCUTJoRUxFMUJRVTBzU1VGQlNTeHhRa0ZCVXl4RFFVRkRMRzFEUVVGdFF5eEZRVUZGTEVWQlFVVXNUVUZCVFN4RlFVRkZMRU5CUVVNc1EwRkJRenRUUVVONFJUdFJRVVZFTEVsQlFVa3NWMEZCVnl4RFFVRkRMRTFCUVUwc1IwRkJSeXhOUVVGTkxFVkJRVVU3V1VGRE4wSXNUVUZCVFN4SlFVRkpMSEZDUVVGVExFTkJRVU1zZDBOQlFYZERMRVZCUVVVc1JVRkJSU3hOUVVGTkxFVkJRVVVzVjBGQlZ5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRU5CUVVNN1UwRkRha2M3VVVGRlJDeFBRVUZQTEZkQlFWY3NRMEZCUXl4TlFVRk5MRWRCUVVjc1RVRkJUU3hGUVVGRk8xbEJRMmhETEZkQlFWY3NTVUZCU1N4SFFVRkhMRU5CUVVNN1UwRkRkRUk3VVVGRlJDeFBRVUZQTEVsQlFVa3NWMEZCVnl4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRE8wbEJRM2hETEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeFJRVUZSTzFGQlExZ3NUMEZCVHl4bFFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0SlFVTXpReXhEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1VVRkJVVHRSUVVOWUxFOUJRVThzWVVGQlN5eERRVUZETEZWQlFWVXNRMEZCUXl4bFFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8wbEJRM2hGTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeFJRVUZSTzFGQlExZ3NUMEZCVHl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRE8wbEJRM2hDTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeFBRVUZQTzFGQlExWXNUMEZCVHl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03U1VGRE0wSXNRMEZCUXpzN1FVRXhSMFE3TzBkQlJVYzdRVUZEYjBJc2IwSkJRVkVzUjBGQlZ5eERRVUZETEVOQlFVTTdRVUZETlVNN08wZEJSVWM3UVVGRGIwSXNiVUpCUVU4c1IwRkJaMElzVjBGQlZ5eERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1YwRkJWeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzBGQlVteEhMR3REUVRSSFF5SjkiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG51bWJlckhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIpO1xyXG5jb25zdCBzdHJpbmdIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL3N0cmluZ0hlbHBlclwiKTtcclxuY29uc3QgZGF0YUVycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvZGF0YUVycm9yXCIpO1xyXG4vKipcclxuICogQSBjbGFzcyBmb3IgaGFuZGxpbmcgdHJ5dGVzLlxyXG4gKi9cclxuY2xhc3MgVHJ5dGVzIHtcclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgY29uc3RydWN0b3IodHJ5dGVzKSB7XHJcbiAgICAgICAgdGhpcy5fdHJ5dGVzID0gdHJ5dGVzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgdHJ5dGVzIGZyb20gYSBzdHJpbmcuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgQSBzdHJpbmcgdG8gY3JlYXRlIHRoZSB0cnl0ZXMgZnJvbS5cclxuICAgICAqIEBwYXJhbSBsZW5ndGggQW4gb3B0aW9uYWwgdmFsaWRhdGlvbiBsZW5ndGggZm9yIHRoZSB0cnl0ZXMsIDAgbWVhbnMgaWdub3JlIGxlbmd0aC5cclxuICAgICAqIEByZXR1cm5zIEFuIGluc3RhbmNlIG9mIFRyeXRlcy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21TdHJpbmcodmFsdWUsIGxlbmd0aCA9IDApIHtcclxuICAgICAgICBpZiAoIXN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc1N0cmluZyh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSB2YWx1ZSBtdXN0IGJlIGEgbm9uIGVtcHR5IHN0cmluZ1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGxlbmd0aCkgfHwgbGVuZ3RoIDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIGxlbmd0aCBtdXN0IGJlID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghVHJ5dGVzLmlzVmFsaWQodmFsdWUsIGxlbmd0aCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSB2YWx1ZSBhbmQgbGVuZ3RoIGRvIG5vdCBjb250YWluIHZhbGlkIHRyeXRlc1wiLCB7IHZhbHVlLCBsZW5ndGggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgVHJ5dGVzKHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRG9lcyB0aGUgdmFsdWUgY29udGFpbiB2YWxpZCB0cnl0ZXMuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgQSBzdHJpbmcgdG8gdmFsaWRhdGUgYXMgdHJ5dGVzLlxyXG4gICAgICogQHBhcmFtIGxlbmd0aCBBbiBvcHRpb25hbCB2YWxpZGF0aW9uIGxlbmd0aCBmb3IgdGhlIHRyeXRlcywgMCBtZWFucyBpZ25vcmUgbGVuZ3RoLlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgaW5wdXQgd2FzIHZhbGlkIHRyeXRlcy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzVmFsaWQodmFsdWUsIGxlbmd0aCA9IDApIHtcclxuICAgICAgICBpZiAoIXN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc1N0cmluZyh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoYF5bOUEtWl17JHtsZW5ndGggPyBsZW5ndGggOiBcIjAsXCJ9fSRgKS50ZXN0KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgdGhlIHRyeXRlcyB0byBhIHN0cmluZy5cclxuICAgICAqIEByZXR1cm5zIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdHJ5dGVzLlxyXG4gICAgICovXHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJ5dGVzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGxlbmd0aCBvZiB0aGUgdHJ5dGVzLlxyXG4gICAgICogQHJldHVybnMgVGhlIGxlbmd0aCBvZiB0aGUgdHJ5dGVzLlxyXG4gICAgICovXHJcbiAgICBsZW5ndGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyeXRlcy5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCBhIHN1YiBvZiB0aGUgdHJ5dGVzLlxyXG4gICAgICogQHBhcmFtIHN0YXJ0IFRoZSBzdGFydCBwb3NpdGlvbiB0byBnZXQgdGhlIHN1Yi5cclxuICAgICAqIEBwYXJhbSBsZW5ndGggVGhlIGxlbmd0aCBvZiB0aGUgc3ViLlxyXG4gICAgICogQHJldHVybnMgVGhlIHRyeXRlcyBzdWIuXHJcbiAgICAgKi9cclxuICAgIHN1YihzdGFydCwgbGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKHN0YXJ0KSB8fCBzdGFydCA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSBzdGFydCBtdXN0IGJlIGEgbnVtYmVyID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihsZW5ndGgpIHx8IChzdGFydCArIGxlbmd0aCkgPiB0aGlzLl90cnl0ZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSBzdGFydCArIGxlbmd0aCBtdXN0IDw9ICR7dGhpcy5fdHJ5dGVzLmxlbmd0aH1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFRyeXRlcy5mcm9tU3RyaW5nKHRoaXMuX3RyeXRlcy5zdWJzdHIoc3RhcnQsIGxlbmd0aCkpO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBBbGwgdGhlIGNoYXJhY3RlcnMgdGhhdCBjYW4gYmUgdXNlZCBpbiB0cnl0ZXMuXHJcbiAqL1xyXG5Ucnl0ZXMuQUxQSEFCRVQgPSBcIjlBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWlwiO1xyXG5leHBvcnRzLlRyeXRlcyA9IFRyeXRlcztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZEhKNWRHVnpMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyUmhkR0V2ZEhKNWRHVnpMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFTdzBSVUZCZVVVN1FVRkRla1VzTkVWQlFYbEZPMEZCUTNwRkxHdEVRVUVyUXp0QlFVVXZRenM3UjBGRlJ6dEJRVU5JTzBsQlUwa3NaVUZCWlR0SlFVTm1MRmxCUVc5Q0xFMUJRV003VVVGRE9VSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhOUVVGTkxFTkJRVU03U1VGRE1VSXNRMEZCUXp0SlFVVkVPenM3T3p0UFFVdEhPMGxCUTBrc1RVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eExRVUZoTEVWQlFVVXNVMEZCYVVJc1EwRkJRenRSUVVOMFJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVVTdXVUZETDBJc1RVRkJUU3hKUVVGSkxIRkNRVUZUTEVOQlFVTXNjME5CUVhORExFTkJRVU1zUTBGQlF6dFRRVU12UkR0UlFVTkVMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hOUVVGTkxFZEJRVWNzUTBGQlF5eEZRVUZGTzFsQlF5OURMRTFCUVUwc1NVRkJTU3h4UWtGQlV5eERRVUZETEhsQ1FVRjVRaXhEUVVGRExFTkJRVU03VTBGRGJFUTdVVUZEUkN4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVWQlFVVXNUVUZCVFN4RFFVRkRMRVZCUVVVN1dVRkRhRU1zVFVGQlRTeEpRVUZKTEhGQ1FVRlRMRU5CUVVNc2EwUkJRV3RFTEVWQlFVVXNSVUZCUlN4TFFVRkxMRVZCUVVVc1RVRkJUU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFRRVU01Ump0UlFVTkVMRTlCUVU4c1NVRkJTU3hOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZETjBJc1EwRkJRenRKUVVWRU96czdPenRQUVV0SE8wbEJRMGtzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRmhMRVZCUVVVc1UwRkJhVUlzUTBGQlF6dFJRVU51UkN4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRVZCUVVVN1dVRkRMMElzVDBGQlR5eExRVUZMTEVOQlFVTTdVMEZEYUVJN1lVRkJUVHRaUVVOSUxFOUJRVThzU1VGQlNTeE5RVUZOTEVOQlFVTXNWMEZCVnl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVMEZEZUVVN1NVRkRUQ3hEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1VVRkJVVHRSUVVOWUxFOUJRVThzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXp0SlFVTjRRaXhEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1RVRkJUVHRSUVVOVUxFOUJRVThzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNN1NVRkRMMElzUTBGQlF6dEpRVVZFT3pzN096dFBRVXRITzBsQlEwa3NSMEZCUnl4RFFVRkRMRXRCUVdFc1JVRkJSU3hOUVVGak8xRkJRM0JETEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4TFFVRkxMRWRCUVVjc1EwRkJReXhGUVVGRk8xbEJRemRETEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExHbERRVUZwUXl4RFFVRkRMRU5CUVVNN1UwRkRNVVE3VVVGRFJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1RVRkJUU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRVZCUVVVN1dVRkRNMFVzVFVGQlRTeEpRVUZKTEhGQ1FVRlRMRU5CUVVNc09FSkJRVGhDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFRRVU0xUlR0UlFVTkVMRTlCUVU4c1RVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTnFSU3hEUVVGRE96dEJRVFZGUkRzN1IwRkZSenRCUVVOWExHVkJRVkVzUjBGQlZ5dzJRa0ZCTmtJc1EwRkJRenRCUVVwdVJTeDNRa0U0UlVNaWZRPT0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGNvcmVFcnJvcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2Vycm9yL2NvcmVFcnJvclwiKTtcclxuLyoqXHJcbiAqIEEgZGF0YSBpbXBsZW1lbnRhdGlvbiBvZiBhbiBlcnJvci5cclxuICovXHJcbmNsYXNzIERhdGFFcnJvciBleHRlbmRzIGNvcmVFcnJvcl8xLkNvcmVFcnJvciB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBEYXRhRXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSBUaGUgbWVzc2FnZSBmb3IgdGhlIGVycm9yLlxyXG4gICAgICogQHBhcmFtIGFkZGl0aW9uYWwgQWRkaXRpb25hbCBkZXRhaWxzIGFib3V0IHRoZSBlcnJvci5cclxuICAgICAqIEBwYXJhbSBpbm5lckVycm9yIEFkZCBpbmZvcm1hdGlvbiBmcm9tIGlubmVyIGVycm9yIGlmIHRoZXJlIHdhcyBvbmUuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIGFkZGl0aW9uYWwsIGlubmVyRXJyb3IpIHtcclxuICAgICAgICBzdXBlcihtZXNzYWdlLCBhZGRpdGlvbmFsLCBpbm5lckVycm9yKTtcclxuICAgICAgICB0aGlzLmRvbWFpbiA9IFwiRGF0YVwiO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuRGF0YUVycm9yID0gRGF0YUVycm9yO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2laR0YwWVVWeWNtOXlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyVnljbTl5TDJSaGRHRkZjbkp2Y2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUVzYjBWQlFXbEZPMEZCUldwRk96dEhRVVZITzBGQlEwZ3NaVUZCZFVJc1UwRkJVU3h4UWtGQlV6dEpRVU53UXpzN096czdUMEZMUnp0SlFVTklMRmxCUVZrc1QwRkJaU3hGUVVGRkxGVkJRV3RETEVWQlFVVXNWVUZCYTBJN1VVRkRMMFVzUzBGQlN5eERRVUZETEU5QlFVOHNSVUZCUlN4VlFVRlZMRVZCUVVVc1ZVRkJWU3hEUVVGRExFTkJRVU03VVVGRGRrTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhOUVVGTkxFTkJRVU03U1VGRGVrSXNRMEZCUXp0RFFVTktPMEZCV0VRc09FSkJWME1pZlE9PSIsImZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBDb21iaW5lZCBpbmRleCBvZiBhbGwgdGhlIG1vZHVsZXMuXHJcbiAqL1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9wcm9vZk9mV29ya05vZGVKc1wiKSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6Y21NdmFXNWtaWGd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCT3p0SFFVVkhPMEZCUTBnc2VVTkJRVzlESW4wPSIsInZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBudW1iZXJIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiKTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IGNyeXB0b0Vycm9yXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jcnlwdG8vZGlzdC9lcnJvci9jcnlwdG9FcnJvclwiKTtcclxuY29uc3QgcHJvb2ZPZldvcmtCYXNlXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jcnlwdG8vZGlzdC9wcm9vZk9mV29yay9wcm9vZk9mV29ya0Jhc2VcIik7XHJcbmNvbnN0IHRyeXRlc18xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJ5dGVzXCIpO1xyXG5jb25zdCBmZmkgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcImZmaVwiKSk7XHJcbmNvbnN0IGZzID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJmc1wiKSk7XHJcbmNvbnN0IG9zID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJvc1wiKSk7XHJcbmNvbnN0IHBhdGggPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInBhdGhcIikpO1xyXG5jb25zdCB1dGlsID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJ1dGlsXCIpKTtcclxuLyoqXHJcbiAqIFByb29mT2ZXb3JrIGltcGxlbWVudGF0aW9uIHVzaW5nIE5vZGVKUy5cclxuICovXHJcbmNsYXNzIFByb29mT2ZXb3JrTm9kZUpzIGV4dGVuZHMgcHJvb2ZPZldvcmtCYXNlXzEuUHJvb2ZPZldvcmtCYXNlIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIFByb29mT2ZXb3JrLlxyXG4gICAgICogQHBhcmFtIG5vZGVQbGF0Zm9ybSBQcm92aWRlcyBwbGF0Zm9ybSBzcGVjaWZpYyBmdW5jdGlvbnMsIG9wdGlvbmFsIG1vc3RseSB1c2VkIGZvciB0ZXN0aW5nLlxyXG4gICAgICogQHBhcmFtIHRpbWVTZXJ2aWNlIFNlcnZpY2UgdG8gZ2V0IHRoZSB0aW1lIGZvciBhdHRhY2htZW50cy5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Iobm9kZVBsYXRmb3JtLCB0aW1lU2VydmljZSkge1xyXG4gICAgICAgIHN1cGVyKHRpbWVTZXJ2aWNlKTtcclxuICAgICAgICBpZiAob2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzRW1wdHkobm9kZVBsYXRmb3JtKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9ub2RlUGxhdGZvcm0gPSB7XHJcbiAgICAgICAgICAgICAgICBwYXRoUmVzb2x2ZTogcGF0aC5yZXNvbHZlLFxyXG4gICAgICAgICAgICAgICAgcGF0aEpvaW46IHBhdGguam9pbixcclxuICAgICAgICAgICAgICAgIHBsYXRmb3JtOiBvcy5wbGF0Zm9ybSxcclxuICAgICAgICAgICAgICAgIGxzdGF0OiBmcy5sc3RhdCxcclxuICAgICAgICAgICAgICAgIGxvYWRMaWJyYXJ5OiBmZmkuTGlicmFyeVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fbm9kZVBsYXRmb3JtID0gbm9kZVBsYXRmb3JtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQWxsb3cgdGhlIHByb29mIG9mIHdvcmsgdG8gcGVyZm9ybSBhbnkgaW5pdGlhbGl6YXRpb24uXHJcbiAgICAgKiBXaWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiB0aGUgaW1wbGVtZW50YXRpb24gaXMgbm90IHN1cHBvcnRlZC5cclxuICAgICAqL1xyXG4gICAgYXN5bmMgaW5pdGlhbGl6ZSgpIHtcclxuICAgICAgICBhd2FpdCBzdXBlci5pbml0aWFsaXplKCk7XHJcbiAgICAgICAgY29uc3QgZnVsbFBhdGggPSB0aGlzLl9ub2RlUGxhdGZvcm0ucGF0aEpvaW4ocGF0aC5qb2luKF9fZGlybmFtZSwgXCIuLi9iaW5hcmllcy9cIikpO1xyXG4gICAgICAgIGNvbnN0IHBsYXRmb3JtID0gdGhpcy5fbm9kZVBsYXRmb3JtLnBsYXRmb3JtKCk7XHJcbiAgICAgICAgbGV0IGxpYkZpbGUgPSB0aGlzLl9ub2RlUGxhdGZvcm0ucGF0aEpvaW4oZnVsbFBhdGgsIHBsYXRmb3JtLCBcImxpYmNjdXJsXCIpO1xyXG4gICAgICAgIHN3aXRjaCAocGxhdGZvcm0pIHtcclxuICAgICAgICAgICAgY2FzZSBcImRhcndpblwiOlxyXG4gICAgICAgICAgICAgICAgbGliRmlsZSArPSBcIi5keWxpYlwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ3aW4zMlwiOlxyXG4gICAgICAgICAgICAgICAgbGliRmlsZSArPSBcIi5kbGxcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBsaWJGaWxlICs9IFwiLnNvXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHN0YXQgPSBhd2FpdCB1dGlsLnByb21pc2lmeSh0aGlzLl9ub2RlUGxhdGZvcm0ubHN0YXQpKGxpYkZpbGUpO1xyXG4gICAgICAgIGlmIChzdGF0LmlzRmlsZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xpYnJhcnkgPSB0aGlzLl9ub2RlUGxhdGZvcm0ubG9hZExpYnJhcnkobGliRmlsZSwge1xyXG4gICAgICAgICAgICAgICAgY2N1cmxfcG93OiBbXCJzdHJpbmdcIiwgW1wic3RyaW5nXCIsIFwiaW50XCJdXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiTGlicmFyeSBmaWxlcyBkb2VzIG5vdCBleGlzdFwiLCB7IGxpYkZpbGUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBQZXJmb3JtIGEgcHJvb2Ygb2Ygd29yayBvbiBhIHNpbmdsZSBpdGVtLlxyXG4gICAgICogQHBhcmFtIHRyeXRlcyBUaGUgdHJ5dGVzIHRvIHBlcmZvcm0gdGhlIHBvdyBvbi5cclxuICAgICAqIEBwYXJhbSBtaW5XZWlnaHRNYWduaXR1ZGUgVGhlIG1pbmltdW0gd2VpZ2h0IG1hZ25pdHVkZS5cclxuICAgICAqIEByZXR1cm5zIFRoZSB0cnl0ZXMgcHJvZHVjZWQgYnkgdGhlIHByb29mIG9mIHdvcmsuXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIHNpbmdsZVBvdyh0cnl0ZXMsIG1pbldlaWdodE1hZ25pdHVkZSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNFbXB0eSh0aGlzLl9saWJyYXJ5KSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJMaWJyYXJ5IG5vdCBsb2FkZWQsIGhhdmUgeW91IGNhbGxlZCBpbml0aWFsaXplXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0cnl0ZXMsIHRyeXRlc18xLlRyeXRlcykpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIHRyeXRlcyBtdXN0IGJlIGFuIG9iamVjdCBvZiB0eXBlIFRyeXRlc1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIobWluV2VpZ2h0TWFnbml0dWRlKSB8fCBtaW5XZWlnaHRNYWduaXR1ZGUgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgbWluV2VpZ2h0TWFnbml0dWRlIG11c3QgYmUgPiAwXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2xpYnJhcnkuY2N1cmxfcG93LmFzeW5jKHRyeXRlcy50b1N0cmluZygpLCBtaW5XZWlnaHRNYWduaXR1ZGUsIChlcnJvciwgcmV0dXJuZWRUcnl0ZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRyeXRlc18xLlRyeXRlcy5mcm9tU3RyaW5nKHJldHVybmVkVHJ5dGVzKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUHJvb2ZPZldvcmtOb2RlSnMgPSBQcm9vZk9mV29ya05vZGVKcztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKdmIyWlBabGR2Y210T2IyUmxTbk11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6Y21NdmNISnZiMlpQWmxkdmNtdE9iMlJsU25NdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN1FVRkJRU3cwUlVGQmVVVTdRVUZEZWtVc05FVkJRWGxGTzBGQlJYcEZMREJGUVVGMVJUdEJRVU4yUlN4M1JrRkJjVVk3UVVGRGNrWXNOa1JCUVRCRU8wRkJRekZFTEhsRFFVRXlRanRCUVVNelFpeDFRMEZCZVVJN1FVRkRla0lzZFVOQlFYbENPMEZCUTNwQ0xESkRRVUUyUWp0QlFVTTNRaXd5UTBGQk5rSTdRVUZITjBJN08wZEJSVWM3UVVGRFNDeDFRa0ZCSzBJc1UwRkJVU3hwUTBGQlpUdEpRVmRzUkRzN096dFBRVWxITzBsQlEwZ3NXVUZCV1N4WlFVRTBRaXhGUVVGRkxGZEJRVEJDTzFGQlEyaEZMRXRCUVVzc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF6dFJRVU51UWl4SlFVRkpMREpDUVVGWkxFTkJRVU1zVDBGQlR5eERRVUZETEZsQlFWa3NRMEZCUXl4RlFVRkZPMWxCUTNCRExFbEJRVWtzUTBGQlF5eGhRVUZoTEVkQlFVYzdaMEpCUTJwQ0xGZEJRVmNzUlVGQlJTeEpRVUZKTEVOQlFVTXNUMEZCVHp0blFrRkRla0lzVVVGQlVTeEZRVUZGTEVsQlFVa3NRMEZCUXl4SlFVRkpPMmRDUVVOdVFpeFJRVUZSTEVWQlFVVXNSVUZCUlN4RFFVRkRMRkZCUVZFN1owSkJRM0pDTEV0QlFVc3NSVUZCUlN4RlFVRkZMRU5CUVVNc1MwRkJTenRuUWtGRFppeFhRVUZYTEVWQlFVVXNSMEZCUnl4RFFVRkRMRTlCUVU4N1lVRkRNMElzUTBGQlF6dFRRVU5NTzJGQlFVMDdXVUZEU0N4SlFVRkpMRU5CUVVNc1lVRkJZU3hIUVVGSExGbEJRVmtzUTBGQlF6dFRRVU55UXp0SlFVTk1MRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4TFFVRkxMRU5CUVVNc1ZVRkJWVHRSUVVOdVFpeE5RVUZOTEV0QlFVc3NRMEZCUXl4VlFVRlZMRVZCUVVVc1EwRkJRenRSUVVWNlFpeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hqUVVGakxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlJXNUdMRTFCUVUwc1VVRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1VVRkZMME1zU1VGQlNTeFBRVUZQTEVkQlFVY3NTVUZCU1N4RFFVRkRMR0ZCUVdFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeEZRVUZGTEZGQlFWRXNSVUZCUlN4VlFVRlZMRU5CUVVNc1EwRkJRenRSUVVNeFJTeFJRVUZSTEZGQlFWRXNSVUZCUlR0WlFVTmtMRXRCUVVzc1VVRkJVVHRuUWtGQlJTeFBRVUZQTEVsQlFVa3NVVUZCVVN4RFFVRkRPMmRDUVVGRExFMUJRVTA3V1VGRE1VTXNTMEZCU3l4UFFVRlBPMmRDUVVGRkxFOUJRVThzU1VGQlNTeE5RVUZOTEVOQlFVTTdaMEpCUVVNc1RVRkJUVHRaUVVOMlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4UFFVRlBMRWxCUVVrc1MwRkJTeXhEUVVGRE8xTkJRemRDTzFGQlJVUXNUVUZCVFN4SlFVRkpMRWRCUVVjc1RVRkJUU3hKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdVVUZEY2tVc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVWQlFVVTdXVUZEWml4SlFVRkpMRU5CUVVNc1VVRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNWMEZCVnl4RFFVRkRMRTlCUVU4c1JVRkJSVHRuUWtGRGNFUXNVMEZCVXl4RlFVRkZMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVVVGQlVTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMkZCUXpORExFTkJRVU1zUTBGQlF6dFRRVU5PTzJGQlFVMDdXVUZEU0N4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5dzRRa0ZCT0VJc1JVRkJSU3hGUVVGRkxFOUJRVThzUlVGQlJTeERRVUZETEVOQlFVTTdVMEZEZEVVN1NVRkRUQ3hEUVVGRE8wbEJSVVE3T3pzN08wOUJTMGM3U1VGRFNTeExRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVdNc1JVRkJSU3hyUWtGQk1FSTdVVUZETjBRc1QwRkJUeXhKUVVGSkxFOUJRVThzUTBGQlV5eERRVUZETEU5QlFVOHNSVUZCUlN4TlFVRk5MRVZCUVVVc1JVRkJSVHRaUVVNelF5eEpRVUZKTERKQ1FVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNSVUZCUlR0blFrRkRja01zVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc1owUkJRV2RFTEVOQlFVTXNRMEZCUXp0aFFVTXpSVHRaUVVORUxFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFVkJRVVVzWlVGQlRTeERRVUZETEVWQlFVVTdaMEpCUTNSRExFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMRFpEUVVFMlF5eERRVUZETEVOQlFVTTdZVUZEZUVVN1dVRkRSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4VFFVRlRMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNTVUZCU1N4clFrRkJhMElzU1VGQlNTeERRVUZETEVWQlFVVTdaMEpCUTNoRkxFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMRzlEUVVGdlF5eERRVUZETEVOQlFVTTdZVUZETDBRN1dVRkRSQ3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZOQlFWTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExGRkJRVkVzUlVGQlJTeEZRVUZGTEd0Q1FVRnJRaXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEdOQlFXTXNSVUZCUlN4RlFVRkZPMmRDUVVNelJpeEpRVUZKTEV0QlFVc3NSVUZCUlR0dlFrRkRVQ3hOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdhVUpCUTJwQ08zRkNRVUZOTzI5Q1FVTklMRTlCUVU4c1EwRkJReXhsUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRMRU5CUVVNN2FVSkJRemxETzFsQlEwd3NRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRVQ3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU5RTEVOQlFVTTdRMEZEU2p0QlFYSkdSQ3c0UTBGeFJrTWlmUT09IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuLy8gVGhpcyBtZXRob2Qgb2Ygb2J0YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0IG5lZWRzIHRvIGJlXG4vLyBrZXB0IGlkZW50aWNhbCB0byB0aGUgd2F5IGl0IGlzIG9idGFpbmVkIGluIHJ1bnRpbWUuanNcbnZhciBnID0gKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcyB9KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcblxuLy8gVXNlIGBnZXRPd25Qcm9wZXJ0eU5hbWVzYCBiZWNhdXNlIG5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCBjYWxsaW5nXG4vLyBgaGFzT3duUHJvcGVydHlgIG9uIHRoZSBnbG9iYWwgYHNlbGZgIG9iamVjdCBpbiBhIHdvcmtlci4gU2VlICMxODMuXG52YXIgaGFkUnVudGltZSA9IGcucmVnZW5lcmF0b3JSdW50aW1lICYmXG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGcpLmluZGV4T2YoXCJyZWdlbmVyYXRvclJ1bnRpbWVcIikgPj0gMDtcblxuLy8gU2F2ZSB0aGUgb2xkIHJlZ2VuZXJhdG9yUnVudGltZSBpbiBjYXNlIGl0IG5lZWRzIHRvIGJlIHJlc3RvcmVkIGxhdGVyLlxudmFyIG9sZFJ1bnRpbWUgPSBoYWRSdW50aW1lICYmIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuXG4vLyBGb3JjZSByZWV2YWx1dGF0aW9uIG9mIHJ1bnRpbWUuanMuXG5nLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9ydW50aW1lXCIpO1xuXG5pZiAoaGFkUnVudGltZSkge1xuICAvLyBSZXN0b3JlIHRoZSBvcmlnaW5hbCBydW50aW1lLlxuICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IG9sZFJ1bnRpbWU7XG59IGVsc2Uge1xuICAvLyBSZW1vdmUgdGhlIGdsb2JhbCBwcm9wZXJ0eSBhZGRlZCBieSBydW50aW1lLmpzLlxuICB0cnkge1xuICAgIGRlbGV0ZSBnLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgfSBjYXRjaChlKSB7XG4gICAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG4gIH1cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuIShmdW5jdGlvbihnbG9iYWwpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICB2YXIgaW5Nb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiO1xuICB2YXIgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIGlmIChydW50aW1lKSB7XG4gICAgaWYgKGluTW9kdWxlKSB7XG4gICAgICAvLyBJZiByZWdlbmVyYXRvclJ1bnRpbWUgaXMgZGVmaW5lZCBnbG9iYWxseSBhbmQgd2UncmUgaW4gYSBtb2R1bGUsXG4gICAgICAvLyBtYWtlIHRoZSBleHBvcnRzIG9iamVjdCBpZGVudGljYWwgdG8gcmVnZW5lcmF0b3JSdW50aW1lLlxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuICAgIH1cbiAgICAvLyBEb24ndCBib3RoZXIgZXZhbHVhdGluZyB0aGUgcmVzdCBvZiB0aGlzIGZpbGUgaWYgdGhlIHJ1bnRpbWUgd2FzXG4gICAgLy8gYWxyZWFkeSBkZWZpbmVkIGdsb2JhbGx5LlxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIERlZmluZSB0aGUgcnVudGltZSBnbG9iYWxseSAoYXMgZXhwZWN0ZWQgYnkgZ2VuZXJhdGVkIGNvZGUpIGFzIGVpdGhlclxuICAvLyBtb2R1bGUuZXhwb3J0cyAoaWYgd2UncmUgaW4gYSBtb2R1bGUpIG9yIGEgbmV3LCBlbXB0eSBvYmplY3QuXG4gIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lID0gaW5Nb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA6IHt9O1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIHJ1bnRpbWUud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgcnVudGltZS5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIHJ1bnRpbWUuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLiBJZiB0aGUgUHJvbWlzZSBpcyByZWplY3RlZCwgaG93ZXZlciwgdGhlXG4gICAgICAgICAgLy8gcmVzdWx0IGZvciB0aGlzIGl0ZXJhdGlvbiB3aWxsIGJlIHJlamVjdGVkIHdpdGggdGhlIHNhbWVcbiAgICAgICAgICAvLyByZWFzb24uIE5vdGUgdGhhdCByZWplY3Rpb25zIG9mIHlpZWxkZWQgUHJvbWlzZXMgYXJlIG5vdFxuICAgICAgICAgIC8vIHRocm93biBiYWNrIGludG8gdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgYXMgaXMgdGhlIGNhc2VcbiAgICAgICAgICAvLyB3aGVuIGFuIGF3YWl0ZWQgUHJvbWlzZSBpcyByZWplY3RlZC4gVGhpcyBkaWZmZXJlbmNlIGluXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYmV0d2VlbiB5aWVsZCBhbmQgYXdhaXQgaXMgaW1wb3J0YW50LCBiZWNhdXNlIGl0XG4gICAgICAgICAgLy8gYWxsb3dzIHRoZSBjb25zdW1lciB0byBkZWNpZGUgd2hhdCB0byBkbyB3aXRoIHRoZSB5aWVsZGVkXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIChzd2FsbG93IGl0IGFuZCBjb250aW51ZSwgbWFudWFsbHkgLnRocm93IGl0IGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBnZW5lcmF0b3IsIGFiYW5kb24gaXRlcmF0aW9uLCB3aGF0ZXZlcikuIFdpdGhcbiAgICAgICAgICAvLyBhd2FpdCwgYnkgY29udHJhc3QsIHRoZXJlIGlzIG5vIG9wcG9ydHVuaXR5IHRvIGV4YW1pbmUgdGhlXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIHJlYXNvbiBvdXRzaWRlIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIHNvIHRoZVxuICAgICAgICAgIC8vIG9ubHkgb3B0aW9uIGlzIHRvIHRocm93IGl0IGZyb20gdGhlIGF3YWl0IGV4cHJlc3Npb24sIGFuZFxuICAgICAgICAgIC8vIGxldCB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhbmRsZSB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgcnVudGltZS5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBydW50aW1lLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgcnVudGltZS52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuICAvLyBJbiBzbG9wcHkgbW9kZSwgdW5ib3VuZCBgdGhpc2AgcmVmZXJzIHRvIHRoZSBnbG9iYWwgb2JqZWN0LCBmYWxsYmFjayB0b1xuICAvLyBGdW5jdGlvbiBjb25zdHJ1Y3RvciBpZiB3ZSdyZSBpbiBnbG9iYWwgc3RyaWN0IG1vZGUuIFRoYXQgaXMgc2FkbHkgYSBmb3JtXG4gIC8vIG9mIGluZGlyZWN0IGV2YWwgd2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kuXG4gIChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKClcbik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZmZpX187IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwib3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dGlsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=