/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/html2canvas/dist/html2canvas.js":
/*!******************************************************!*\
  !*** ./node_modules/html2canvas/dist/html2canvas.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * html2canvas 1.0.0-alpha.12 <https://html2canvas.hertzen.com>
 * Copyright (c) 2018 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// http://dev.w3.org/csswg/css-color/

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HEX3 = /^#([a-f0-9]{3})$/i;
var hex3 = function hex3(value) {
    var match = value.match(HEX3);
    if (match) {
        return [parseInt(match[1][0] + match[1][0], 16), parseInt(match[1][1] + match[1][1], 16), parseInt(match[1][2] + match[1][2], 16), null];
    }
    return false;
};

var HEX6 = /^#([a-f0-9]{6})$/i;
var hex6 = function hex6(value) {
    var match = value.match(HEX6);
    if (match) {
        return [parseInt(match[1].substring(0, 2), 16), parseInt(match[1].substring(2, 4), 16), parseInt(match[1].substring(4, 6), 16), null];
    }
    return false;
};

var RGB = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
var rgb = function rgb(value) {
    var match = value.match(RGB);
    if (match) {
        return [Number(match[1]), Number(match[2]), Number(match[3]), null];
    }
    return false;
};

var RGBA = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?\.?\d+)\s*\)$/;
var rgba = function rgba(value) {
    var match = value.match(RGBA);
    if (match && match.length > 4) {
        return [Number(match[1]), Number(match[2]), Number(match[3]), Number(match[4])];
    }
    return false;
};

var fromArray = function fromArray(array) {
    return [Math.min(array[0], 255), Math.min(array[1], 255), Math.min(array[2], 255), array.length > 3 ? array[3] : null];
};

var namedColor = function namedColor(name) {
    var color = NAMED_COLORS[name.toLowerCase()];
    return color ? color : false;
};

var Color = function () {
    function Color(value) {
        _classCallCheck(this, Color);

        var _ref = Array.isArray(value) ? fromArray(value) : hex3(value) || rgb(value) || rgba(value) || namedColor(value) || hex6(value) || [0, 0, 0, null],
            _ref2 = _slicedToArray(_ref, 4),
            r = _ref2[0],
            g = _ref2[1],
            b = _ref2[2],
            a = _ref2[3];

        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    _createClass(Color, [{
        key: 'isTransparent',
        value: function isTransparent() {
            return this.a === 0;
        }
    }, {
        key: 'toString',
        value: function toString() {
            return this.a !== null && this.a !== 1 ? 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',' + this.a + ')' : 'rgb(' + this.r + ',' + this.g + ',' + this.b + ')';
        }
    }]);

    return Color;
}();

exports.default = Color;


var NAMED_COLORS = {
    transparent: [0, 0, 0, 0],
    aliceblue: [240, 248, 255, null],
    antiquewhite: [250, 235, 215, null],
    aqua: [0, 255, 255, null],
    aquamarine: [127, 255, 212, null],
    azure: [240, 255, 255, null],
    beige: [245, 245, 220, null],
    bisque: [255, 228, 196, null],
    black: [0, 0, 0, null],
    blanchedalmond: [255, 235, 205, null],
    blue: [0, 0, 255, null],
    blueviolet: [138, 43, 226, null],
    brown: [165, 42, 42, null],
    burlywood: [222, 184, 135, null],
    cadetblue: [95, 158, 160, null],
    chartreuse: [127, 255, 0, null],
    chocolate: [210, 105, 30, null],
    coral: [255, 127, 80, null],
    cornflowerblue: [100, 149, 237, null],
    cornsilk: [255, 248, 220, null],
    crimson: [220, 20, 60, null],
    cyan: [0, 255, 255, null],
    darkblue: [0, 0, 139, null],
    darkcyan: [0, 139, 139, null],
    darkgoldenrod: [184, 134, 11, null],
    darkgray: [169, 169, 169, null],
    darkgreen: [0, 100, 0, null],
    darkgrey: [169, 169, 169, null],
    darkkhaki: [189, 183, 107, null],
    darkmagenta: [139, 0, 139, null],
    darkolivegreen: [85, 107, 47, null],
    darkorange: [255, 140, 0, null],
    darkorchid: [153, 50, 204, null],
    darkred: [139, 0, 0, null],
    darksalmon: [233, 150, 122, null],
    darkseagreen: [143, 188, 143, null],
    darkslateblue: [72, 61, 139, null],
    darkslategray: [47, 79, 79, null],
    darkslategrey: [47, 79, 79, null],
    darkturquoise: [0, 206, 209, null],
    darkviolet: [148, 0, 211, null],
    deeppink: [255, 20, 147, null],
    deepskyblue: [0, 191, 255, null],
    dimgray: [105, 105, 105, null],
    dimgrey: [105, 105, 105, null],
    dodgerblue: [30, 144, 255, null],
    firebrick: [178, 34, 34, null],
    floralwhite: [255, 250, 240, null],
    forestgreen: [34, 139, 34, null],
    fuchsia: [255, 0, 255, null],
    gainsboro: [220, 220, 220, null],
    ghostwhite: [248, 248, 255, null],
    gold: [255, 215, 0, null],
    goldenrod: [218, 165, 32, null],
    gray: [128, 128, 128, null],
    green: [0, 128, 0, null],
    greenyellow: [173, 255, 47, null],
    grey: [128, 128, 128, null],
    honeydew: [240, 255, 240, null],
    hotpink: [255, 105, 180, null],
    indianred: [205, 92, 92, null],
    indigo: [75, 0, 130, null],
    ivory: [255, 255, 240, null],
    khaki: [240, 230, 140, null],
    lavender: [230, 230, 250, null],
    lavenderblush: [255, 240, 245, null],
    lawngreen: [124, 252, 0, null],
    lemonchiffon: [255, 250, 205, null],
    lightblue: [173, 216, 230, null],
    lightcoral: [240, 128, 128, null],
    lightcyan: [224, 255, 255, null],
    lightgoldenrodyellow: [250, 250, 210, null],
    lightgray: [211, 211, 211, null],
    lightgreen: [144, 238, 144, null],
    lightgrey: [211, 211, 211, null],
    lightpink: [255, 182, 193, null],
    lightsalmon: [255, 160, 122, null],
    lightseagreen: [32, 178, 170, null],
    lightskyblue: [135, 206, 250, null],
    lightslategray: [119, 136, 153, null],
    lightslategrey: [119, 136, 153, null],
    lightsteelblue: [176, 196, 222, null],
    lightyellow: [255, 255, 224, null],
    lime: [0, 255, 0, null],
    limegreen: [50, 205, 50, null],
    linen: [250, 240, 230, null],
    magenta: [255, 0, 255, null],
    maroon: [128, 0, 0, null],
    mediumaquamarine: [102, 205, 170, null],
    mediumblue: [0, 0, 205, null],
    mediumorchid: [186, 85, 211, null],
    mediumpurple: [147, 112, 219, null],
    mediumseagreen: [60, 179, 113, null],
    mediumslateblue: [123, 104, 238, null],
    mediumspringgreen: [0, 250, 154, null],
    mediumturquoise: [72, 209, 204, null],
    mediumvioletred: [199, 21, 133, null],
    midnightblue: [25, 25, 112, null],
    mintcream: [245, 255, 250, null],
    mistyrose: [255, 228, 225, null],
    moccasin: [255, 228, 181, null],
    navajowhite: [255, 222, 173, null],
    navy: [0, 0, 128, null],
    oldlace: [253, 245, 230, null],
    olive: [128, 128, 0, null],
    olivedrab: [107, 142, 35, null],
    orange: [255, 165, 0, null],
    orangered: [255, 69, 0, null],
    orchid: [218, 112, 214, null],
    palegoldenrod: [238, 232, 170, null],
    palegreen: [152, 251, 152, null],
    paleturquoise: [175, 238, 238, null],
    palevioletred: [219, 112, 147, null],
    papayawhip: [255, 239, 213, null],
    peachpuff: [255, 218, 185, null],
    peru: [205, 133, 63, null],
    pink: [255, 192, 203, null],
    plum: [221, 160, 221, null],
    powderblue: [176, 224, 230, null],
    purple: [128, 0, 128, null],
    rebeccapurple: [102, 51, 153, null],
    red: [255, 0, 0, null],
    rosybrown: [188, 143, 143, null],
    royalblue: [65, 105, 225, null],
    saddlebrown: [139, 69, 19, null],
    salmon: [250, 128, 114, null],
    sandybrown: [244, 164, 96, null],
    seagreen: [46, 139, 87, null],
    seashell: [255, 245, 238, null],
    sienna: [160, 82, 45, null],
    silver: [192, 192, 192, null],
    skyblue: [135, 206, 235, null],
    slateblue: [106, 90, 205, null],
    slategray: [112, 128, 144, null],
    slategrey: [112, 128, 144, null],
    snow: [255, 250, 250, null],
    springgreen: [0, 255, 127, null],
    steelblue: [70, 130, 180, null],
    tan: [210, 180, 140, null],
    teal: [0, 128, 128, null],
    thistle: [216, 191, 216, null],
    tomato: [255, 99, 71, null],
    turquoise: [64, 224, 208, null],
    violet: [238, 130, 238, null],
    wheat: [245, 222, 179, null],
    white: [255, 255, 255, null],
    whitesmoke: [245, 245, 245, null],
    yellow: [255, 255, 0, null],
    yellowgreen: [154, 205, 50, null]
};

var TRANSPARENT = exports.TRANSPARENT = new Color([0, 0, 0, 0]);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.calculateLengthFromValueWithUnit = exports.LENGTH_TYPE = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _NodeContainer = __webpack_require__(3);

var _NodeContainer2 = _interopRequireDefault(_NodeContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LENGTH_WITH_UNIT = /([\d.]+)(px|r?em|%)/i;

var LENGTH_TYPE = exports.LENGTH_TYPE = {
    PX: 0,
    PERCENTAGE: 1
};

var Length = function () {
    function Length(value) {
        _classCallCheck(this, Length);

        this.type = value.substr(value.length - 1) === '%' ? LENGTH_TYPE.PERCENTAGE : LENGTH_TYPE.PX;
        var parsedValue = parseFloat(value);
        if ( true && isNaN(parsedValue)) {
            console.error('Invalid value given for Length: "' + value + '"');
        }
        this.value = isNaN(parsedValue) ? 0 : parsedValue;
    }

    _createClass(Length, [{
        key: 'isPercentage',
        value: function isPercentage() {
            return this.type === LENGTH_TYPE.PERCENTAGE;
        }
    }, {
        key: 'getAbsoluteValue',
        value: function getAbsoluteValue(parentLength) {
            return this.isPercentage() ? parentLength * (this.value / 100) : this.value;
        }
    }], [{
        key: 'create',
        value: function create(v) {
            return new Length(v);
        }
    }]);

    return Length;
}();

exports.default = Length;


var getRootFontSize = function getRootFontSize(container) {
    var parent = container.parent;
    return parent ? getRootFontSize(parent) : parseFloat(container.style.font.fontSize);
};

var calculateLengthFromValueWithUnit = exports.calculateLengthFromValueWithUnit = function calculateLengthFromValueWithUnit(container, value, unit) {
    switch (unit) {
        case 'px':
        case '%':
            return new Length(value + unit);
        case 'em':
        case 'rem':
            var length = new Length(value);
            length.value *= unit === 'em' ? parseFloat(container.style.font.fontSize) : getRootFontSize(container);
            return length;
        default:
            // TODO: handle correctly if unknown unit is used
            return new Length('0');
    }
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseBoundCurves = exports.calculatePaddingBoxPath = exports.calculateBorderBoxPath = exports.parsePathForBorder = exports.parseDocumentSize = exports.calculateContentBox = exports.calculatePaddingBox = exports.parseBounds = exports.Bounds = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Vector = __webpack_require__(7);

var _Vector2 = _interopRequireDefault(_Vector);

var _BezierCurve = __webpack_require__(32);

var _BezierCurve2 = _interopRequireDefault(_BezierCurve);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TOP = 0;
var RIGHT = 1;
var BOTTOM = 2;
var LEFT = 3;

var H = 0;
var V = 1;

var Bounds = exports.Bounds = function () {
    function Bounds(x, y, w, h) {
        _classCallCheck(this, Bounds);

        this.left = x;
        this.top = y;
        this.width = w;
        this.height = h;
    }

    _createClass(Bounds, null, [{
        key: 'fromClientRect',
        value: function fromClientRect(clientRect, scrollX, scrollY) {
            return new Bounds(clientRect.left + scrollX, clientRect.top + scrollY, clientRect.width, clientRect.height);
        }
    }]);

    return Bounds;
}();

var parseBounds = exports.parseBounds = function parseBounds(node, scrollX, scrollY) {
    return Bounds.fromClientRect(node.getBoundingClientRect(), scrollX, scrollY);
};

var calculatePaddingBox = exports.calculatePaddingBox = function calculatePaddingBox(bounds, borders) {
    return new Bounds(bounds.left + borders[LEFT].borderWidth, bounds.top + borders[TOP].borderWidth, bounds.width - (borders[RIGHT].borderWidth + borders[LEFT].borderWidth), bounds.height - (borders[TOP].borderWidth + borders[BOTTOM].borderWidth));
};

var calculateContentBox = exports.calculateContentBox = function calculateContentBox(bounds, padding, borders) {
    // TODO support percentage paddings
    var paddingTop = padding[TOP].value;
    var paddingRight = padding[RIGHT].value;
    var paddingBottom = padding[BOTTOM].value;
    var paddingLeft = padding[LEFT].value;

    return new Bounds(bounds.left + paddingLeft + borders[LEFT].borderWidth, bounds.top + paddingTop + borders[TOP].borderWidth, bounds.width - (borders[RIGHT].borderWidth + borders[LEFT].borderWidth + paddingLeft + paddingRight), bounds.height - (borders[TOP].borderWidth + borders[BOTTOM].borderWidth + paddingTop + paddingBottom));
};

var parseDocumentSize = exports.parseDocumentSize = function parseDocumentSize(document) {
    var body = document.body;
    var documentElement = document.documentElement;

    if (!body || !documentElement) {
        throw new Error( true ? 'Unable to get document size' : undefined);
    }
    var width = Math.max(Math.max(body.scrollWidth, documentElement.scrollWidth), Math.max(body.offsetWidth, documentElement.offsetWidth), Math.max(body.clientWidth, documentElement.clientWidth));

    var height = Math.max(Math.max(body.scrollHeight, documentElement.scrollHeight), Math.max(body.offsetHeight, documentElement.offsetHeight), Math.max(body.clientHeight, documentElement.clientHeight));

    return new Bounds(0, 0, width, height);
};

var parsePathForBorder = exports.parsePathForBorder = function parsePathForBorder(curves, borderSide) {
    switch (borderSide) {
        case TOP:
            return createPathFromCurves(curves.topLeftOuter, curves.topLeftInner, curves.topRightOuter, curves.topRightInner);
        case RIGHT:
            return createPathFromCurves(curves.topRightOuter, curves.topRightInner, curves.bottomRightOuter, curves.bottomRightInner);
        case BOTTOM:
            return createPathFromCurves(curves.bottomRightOuter, curves.bottomRightInner, curves.bottomLeftOuter, curves.bottomLeftInner);
        case LEFT:
        default:
            return createPathFromCurves(curves.bottomLeftOuter, curves.bottomLeftInner, curves.topLeftOuter, curves.topLeftInner);
    }
};

var createPathFromCurves = function createPathFromCurves(outer1, inner1, outer2, inner2) {
    var path = [];
    if (outer1 instanceof _BezierCurve2.default) {
        path.push(outer1.subdivide(0.5, false));
    } else {
        path.push(outer1);
    }

    if (outer2 instanceof _BezierCurve2.default) {
        path.push(outer2.subdivide(0.5, true));
    } else {
        path.push(outer2);
    }

    if (inner2 instanceof _BezierCurve2.default) {
        path.push(inner2.subdivide(0.5, true).reverse());
    } else {
        path.push(inner2);
    }

    if (inner1 instanceof _BezierCurve2.default) {
        path.push(inner1.subdivide(0.5, false).reverse());
    } else {
        path.push(inner1);
    }

    return path;
};

var calculateBorderBoxPath = exports.calculateBorderBoxPath = function calculateBorderBoxPath(curves) {
    return [curves.topLeftOuter, curves.topRightOuter, curves.bottomRightOuter, curves.bottomLeftOuter];
};

var calculatePaddingBoxPath = exports.calculatePaddingBoxPath = function calculatePaddingBoxPath(curves) {
    return [curves.topLeftInner, curves.topRightInner, curves.bottomRightInner, curves.bottomLeftInner];
};

var parseBoundCurves = exports.parseBoundCurves = function parseBoundCurves(bounds, borders, borderRadius) {
    var tlh = borderRadius[CORNER.TOP_LEFT][H].getAbsoluteValue(bounds.width);
    var tlv = borderRadius[CORNER.TOP_LEFT][V].getAbsoluteValue(bounds.height);
    var trh = borderRadius[CORNER.TOP_RIGHT][H].getAbsoluteValue(bounds.width);
    var trv = borderRadius[CORNER.TOP_RIGHT][V].getAbsoluteValue(bounds.height);
    var brh = borderRadius[CORNER.BOTTOM_RIGHT][H].getAbsoluteValue(bounds.width);
    var brv = borderRadius[CORNER.BOTTOM_RIGHT][V].getAbsoluteValue(bounds.height);
    var blh = borderRadius[CORNER.BOTTOM_LEFT][H].getAbsoluteValue(bounds.width);
    var blv = borderRadius[CORNER.BOTTOM_LEFT][V].getAbsoluteValue(bounds.height);

    var factors = [];
    factors.push((tlh + trh) / bounds.width);
    factors.push((blh + brh) / bounds.width);
    factors.push((tlv + blv) / bounds.height);
    factors.push((trv + brv) / bounds.height);
    var maxFactor = Math.max.apply(Math, factors);

    if (maxFactor > 1) {
        tlh /= maxFactor;
        tlv /= maxFactor;
        trh /= maxFactor;
        trv /= maxFactor;
        brh /= maxFactor;
        brv /= maxFactor;
        blh /= maxFactor;
        blv /= maxFactor;
    }

    var topWidth = bounds.width - trh;
    var rightHeight = bounds.height - brv;
    var bottomWidth = bounds.width - brh;
    var leftHeight = bounds.height - blv;

    return {
        topLeftOuter: tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left, bounds.top, tlh, tlv, CORNER.TOP_LEFT) : new _Vector2.default(bounds.left, bounds.top),
        topLeftInner: tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borders[LEFT].borderWidth, bounds.top + borders[TOP].borderWidth, Math.max(0, tlh - borders[LEFT].borderWidth), Math.max(0, tlv - borders[TOP].borderWidth), CORNER.TOP_LEFT) : new _Vector2.default(bounds.left + borders[LEFT].borderWidth, bounds.top + borders[TOP].borderWidth),
        topRightOuter: trh > 0 || trv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top, trh, trv, CORNER.TOP_RIGHT) : new _Vector2.default(bounds.left + bounds.width, bounds.top),
        topRightInner: trh > 0 || trv > 0 ? getCurvePoints(bounds.left + Math.min(topWidth, bounds.width + borders[LEFT].borderWidth), bounds.top + borders[TOP].borderWidth, topWidth > bounds.width + borders[LEFT].borderWidth ? 0 : trh - borders[LEFT].borderWidth, trv - borders[TOP].borderWidth, CORNER.TOP_RIGHT) : new _Vector2.default(bounds.left + bounds.width - borders[RIGHT].borderWidth, bounds.top + borders[TOP].borderWidth),
        bottomRightOuter: brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh, brv, CORNER.BOTTOM_RIGHT) : new _Vector2.default(bounds.left + bounds.width, bounds.top + bounds.height),
        bottomRightInner: brh > 0 || brv > 0 ? getCurvePoints(bounds.left + Math.min(bottomWidth, bounds.width - borders[LEFT].borderWidth), bounds.top + Math.min(rightHeight, bounds.height + borders[TOP].borderWidth), Math.max(0, brh - borders[RIGHT].borderWidth), brv - borders[BOTTOM].borderWidth, CORNER.BOTTOM_RIGHT) : new _Vector2.default(bounds.left + bounds.width - borders[RIGHT].borderWidth, bounds.top + bounds.height - borders[BOTTOM].borderWidth),
        bottomLeftOuter: blh > 0 || blv > 0 ? getCurvePoints(bounds.left, bounds.top + leftHeight, blh, blv, CORNER.BOTTOM_LEFT) : new _Vector2.default(bounds.left, bounds.top + bounds.height),
        bottomLeftInner: blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borders[LEFT].borderWidth, bounds.top + leftHeight, Math.max(0, blh - borders[LEFT].borderWidth), blv - borders[BOTTOM].borderWidth, CORNER.BOTTOM_LEFT) : new _Vector2.default(bounds.left + borders[LEFT].borderWidth, bounds.top + bounds.height - borders[BOTTOM].borderWidth)
    };
};

var CORNER = {
    TOP_LEFT: 0,
    TOP_RIGHT: 1,
    BOTTOM_RIGHT: 2,
    BOTTOM_LEFT: 3
};

var getCurvePoints = function getCurvePoints(x, y, r1, r2, position) {
    var kappa = 4 * ((Math.sqrt(2) - 1) / 3);
    var ox = r1 * kappa; // control point offset horizontal
    var oy = r2 * kappa; // control point offset vertical
    var xm = x + r1; // x-middle
    var ym = y + r2; // y-middle

    switch (position) {
        case CORNER.TOP_LEFT:
            return new _BezierCurve2.default(new _Vector2.default(x, ym), new _Vector2.default(x, ym - oy), new _Vector2.default(xm - ox, y), new _Vector2.default(xm, y));
        case CORNER.TOP_RIGHT:
            return new _BezierCurve2.default(new _Vector2.default(x, y), new _Vector2.default(x + ox, y), new _Vector2.default(xm, ym - oy), new _Vector2.default(xm, ym));
        case CORNER.BOTTOM_RIGHT:
            return new _BezierCurve2.default(new _Vector2.default(xm, y), new _Vector2.default(xm, y + oy), new _Vector2.default(x + ox, ym), new _Vector2.default(x, ym));
        case CORNER.BOTTOM_LEFT:
        default:
            return new _BezierCurve2.default(new _Vector2.default(xm, ym), new _Vector2.default(xm - ox, ym), new _Vector2.default(x, y + oy), new _Vector2.default(x, y));
    }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Color = __webpack_require__(0);

var _Color2 = _interopRequireDefault(_Color);

var _Util = __webpack_require__(4);

var _background = __webpack_require__(5);

var _border = __webpack_require__(12);

var _borderRadius = __webpack_require__(33);

var _display = __webpack_require__(34);

var _float = __webpack_require__(35);

var _font = __webpack_require__(36);

var _letterSpacing = __webpack_require__(37);

var _lineBreak = __webpack_require__(38);

var _listStyle = __webpack_require__(8);

var _margin = __webpack_require__(39);

var _overflow = __webpack_require__(40);

var _overflowWrap = __webpack_require__(18);

var _padding = __webpack_require__(17);

var _position = __webpack_require__(19);

var _textDecoration = __webpack_require__(11);

var _textShadow = __webpack_require__(41);

var _textTransform = __webpack_require__(20);

var _transform = __webpack_require__(42);

var _visibility = __webpack_require__(43);

var _wordBreak = __webpack_require__(44);

var _zIndex = __webpack_require__(45);

var _Bounds = __webpack_require__(2);

var _Input = __webpack_require__(21);

var _ListItem = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var INPUT_TAGS = ['INPUT', 'TEXTAREA', 'SELECT'];

var NodeContainer = function () {
    function NodeContainer(node, parent, resourceLoader, index) {
        var _this = this;

        _classCallCheck(this, NodeContainer);

        this.parent = parent;
        this.tagName = node.tagName;
        this.index = index;
        this.childNodes = [];
        this.listItems = [];
        if (typeof node.start === 'number') {
            this.listStart = node.start;
        }
        var defaultView = node.ownerDocument.defaultView;
        var scrollX = defaultView.pageXOffset;
        var scrollY = defaultView.pageYOffset;
        var style = defaultView.getComputedStyle(node, null);
        var display = (0, _display.parseDisplay)(style.display);

        var IS_INPUT = node.type === 'radio' || node.type === 'checkbox';

        var position = (0, _position.parsePosition)(style.position);

        this.style = {
            background: IS_INPUT ? _Input.INPUT_BACKGROUND : (0, _background.parseBackground)(style, resourceLoader),
            border: IS_INPUT ? _Input.INPUT_BORDERS : (0, _border.parseBorder)(style),
            borderRadius: (node instanceof defaultView.HTMLInputElement || node instanceof HTMLInputElement) && IS_INPUT ? (0, _Input.getInputBorderRadius)(node) : (0, _borderRadius.parseBorderRadius)(style),
            color: IS_INPUT ? _Input.INPUT_COLOR : new _Color2.default(style.color),
            display: display,
            float: (0, _float.parseCSSFloat)(style.float),
            font: (0, _font.parseFont)(style),
            letterSpacing: (0, _letterSpacing.parseLetterSpacing)(style.letterSpacing),
            listStyle: display === _display.DISPLAY.LIST_ITEM ? (0, _listStyle.parseListStyle)(style) : null,
            lineBreak: (0, _lineBreak.parseLineBreak)(style.lineBreak),
            margin: (0, _margin.parseMargin)(style),
            opacity: parseFloat(style.opacity),
            overflow: INPUT_TAGS.indexOf(node.tagName) === -1 ? (0, _overflow.parseOverflow)(style.overflow) : _overflow.OVERFLOW.HIDDEN,
            overflowWrap: (0, _overflowWrap.parseOverflowWrap)(style.overflowWrap ? style.overflowWrap : style.wordWrap),
            padding: (0, _padding.parsePadding)(style),
            position: position,
            textDecoration: (0, _textDecoration.parseTextDecoration)(style),
            textShadow: (0, _textShadow.parseTextShadow)(style.textShadow),
            textTransform: (0, _textTransform.parseTextTransform)(style.textTransform),
            transform: (0, _transform.parseTransform)(style),
            visibility: (0, _visibility.parseVisibility)(style.visibility),
            wordBreak: (0, _wordBreak.parseWordBreak)(style.wordBreak),
            zIndex: (0, _zIndex.parseZIndex)(position !== _position.POSITION.STATIC ? style.zIndex : 'auto')
        };

        if (this.isTransformed()) {
            // getBoundingClientRect provides values post-transform, we want them without the transformation
            node.style.transform = 'matrix(1,0,0,1,0,0)';
        }

        if (display === _display.DISPLAY.LIST_ITEM) {
            var listOwner = (0, _ListItem.getListOwner)(this);
            if (listOwner) {
                var listIndex = listOwner.listItems.length;
                listOwner.listItems.push(this);
                this.listIndex = node.hasAttribute('value') && typeof node.value === 'number' ? node.value : listIndex === 0 ? typeof listOwner.listStart === 'number' ? listOwner.listStart : 1 : listOwner.listItems[listIndex - 1].listIndex + 1;
            }
        }

        // TODO move bound retrieval for all nodes to a later stage?
        if (node.tagName === 'IMG') {
            node.addEventListener('load', function () {
                _this.bounds = (0, _Bounds.parseBounds)(node, scrollX, scrollY);
                _this.curvedBounds = (0, _Bounds.parseBoundCurves)(_this.bounds, _this.style.border, _this.style.borderRadius);
            });
        }
        this.image = getImage(node, resourceLoader);
        this.bounds = IS_INPUT ? (0, _Input.reformatInputBounds)((0, _Bounds.parseBounds)(node, scrollX, scrollY)) : (0, _Bounds.parseBounds)(node, scrollX, scrollY);
        this.curvedBounds = (0, _Bounds.parseBoundCurves)(this.bounds, this.style.border, this.style.borderRadius);

        if (true) {
            this.name = '' + node.tagName.toLowerCase() + (node.id ? '#' + node.id : '') + node.className.toString().split(' ').map(function (s) {
                return s.length ? '.' + s : '';
            }).join('');
        }
    }

    _createClass(NodeContainer, [{
        key: 'getClipPaths',
        value: function getClipPaths() {
            var parentClips = this.parent ? this.parent.getClipPaths() : [];
            var isClipped = this.style.overflow !== _overflow.OVERFLOW.VISIBLE;

            return isClipped ? parentClips.concat([(0, _Bounds.calculatePaddingBoxPath)(this.curvedBounds)]) : parentClips;
        }
    }, {
        key: 'isInFlow',
        value: function isInFlow() {
            return this.isRootElement() && !this.isFloating() && !this.isAbsolutelyPositioned();
        }
    }, {
        key: 'isVisible',
        value: function isVisible() {
            return !(0, _Util.contains)(this.style.display, _display.DISPLAY.NONE) && this.style.opacity > 0 && this.style.visibility === _visibility.VISIBILITY.VISIBLE;
        }
    }, {
        key: 'isAbsolutelyPositioned',
        value: function isAbsolutelyPositioned() {
            return this.style.position !== _position.POSITION.STATIC && this.style.position !== _position.POSITION.RELATIVE;
        }
    }, {
        key: 'isPositioned',
        value: function isPositioned() {
            return this.style.position !== _position.POSITION.STATIC;
        }
    }, {
        key: 'isFloating',
        value: function isFloating() {
            return this.style.float !== _float.FLOAT.NONE;
        }
    }, {
        key: 'isRootElement',
        value: function isRootElement() {
            return this.parent === null;
        }
    }, {
        key: 'isTransformed',
        value: function isTransformed() {
            return this.style.transform !== null;
        }
    }, {
        key: 'isPositionedWithZIndex',
        value: function isPositionedWithZIndex() {
            return this.isPositioned() && !this.style.zIndex.auto;
        }
    }, {
        key: 'isInlineLevel',
        value: function isInlineLevel() {
            return (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE) || (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_BLOCK) || (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_FLEX) || (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_GRID) || (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_LIST_ITEM) || (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_TABLE);
        }
    }, {
        key: 'isInlineBlockOrInlineTable',
        value: function isInlineBlockOrInlineTable() {
            return (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_BLOCK) || (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_TABLE);
        }
    }]);

    return NodeContainer;
}();

exports.default = NodeContainer;


var getImage = function getImage(node, resourceLoader) {
    if (node instanceof node.ownerDocument.defaultView.SVGSVGElement || node instanceof SVGSVGElement) {
        var s = new XMLSerializer();
        return resourceLoader.loadImage('data:image/svg+xml,' + encodeURIComponent(s.serializeToString(node)));
    }
    switch (node.tagName) {
        case 'IMG':
            // $FlowFixMe
            var img = node;
            return resourceLoader.loadImage(img.currentSrc || img.src);
        case 'CANVAS':
            // $FlowFixMe
            var canvas = node;
            return resourceLoader.loadCanvas(canvas);
        case 'IFRAME':
            var iframeKey = node.getAttribute('data-html2canvas-internal-iframe-key');
            if (iframeKey) {
                return iframeKey;
            }
            break;
    }

    return null;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var contains = exports.contains = function contains(bit, value) {
    return (bit & value) !== 0;
};

var distance = exports.distance = function distance(a, b) {
    return Math.sqrt(a * a + b * b);
};

var copyCSSStyles = exports.copyCSSStyles = function copyCSSStyles(style, target) {
    // Edge does not provide value for cssText
    for (var i = style.length - 1; i >= 0; i--) {
        var property = style.item(i);
        // Safari shows pseudoelements if content is set
        if (property !== 'content') {
            target.style.setProperty(property, style.getPropertyValue(property));
        }
    }
    return target;
};

var SMALL_IMAGE = exports.SMALL_IMAGE = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseBackgroundImage = exports.parseBackground = exports.calculateBackgroundRepeatPath = exports.calculateBackgroundPosition = exports.calculateBackgroungPositioningArea = exports.calculateBackgroungPaintingArea = exports.calculateGradientBackgroundSize = exports.calculateBackgroundSize = exports.BACKGROUND_ORIGIN = exports.BACKGROUND_CLIP = exports.BACKGROUND_SIZE = exports.BACKGROUND_REPEAT = undefined;

var _Color = __webpack_require__(0);

var _Color2 = _interopRequireDefault(_Color);

var _Length = __webpack_require__(1);

var _Length2 = _interopRequireDefault(_Length);

var _Size = __webpack_require__(31);

var _Size2 = _interopRequireDefault(_Size);

var _Vector = __webpack_require__(7);

var _Vector2 = _interopRequireDefault(_Vector);

var _Bounds = __webpack_require__(2);

var _padding = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BACKGROUND_REPEAT = exports.BACKGROUND_REPEAT = {
    REPEAT: 0,
    NO_REPEAT: 1,
    REPEAT_X: 2,
    REPEAT_Y: 3
};

var BACKGROUND_SIZE = exports.BACKGROUND_SIZE = {
    AUTO: 0,
    CONTAIN: 1,
    COVER: 2,
    LENGTH: 3
};

var BACKGROUND_CLIP = exports.BACKGROUND_CLIP = {
    BORDER_BOX: 0,
    PADDING_BOX: 1,
    CONTENT_BOX: 2
};

var BACKGROUND_ORIGIN = exports.BACKGROUND_ORIGIN = BACKGROUND_CLIP;

var AUTO = 'auto';

var BackgroundSize = function BackgroundSize(size) {
    _classCallCheck(this, BackgroundSize);

    switch (size) {
        case 'contain':
            this.size = BACKGROUND_SIZE.CONTAIN;
            break;
        case 'cover':
            this.size = BACKGROUND_SIZE.COVER;
            break;
        case 'auto':
            this.size = BACKGROUND_SIZE.AUTO;
            break;
        default:
            this.value = new _Length2.default(size);
    }
};

var calculateBackgroundSize = exports.calculateBackgroundSize = function calculateBackgroundSize(backgroundImage, image, bounds) {
    var width = 0;
    var height = 0;
    var size = backgroundImage.size;
    if (size[0].size === BACKGROUND_SIZE.CONTAIN || size[0].size === BACKGROUND_SIZE.COVER) {
        var targetRatio = bounds.width / bounds.height;
        var currentRatio = image.width / image.height;
        return targetRatio < currentRatio !== (size[0].size === BACKGROUND_SIZE.COVER) ? new _Size2.default(bounds.width, bounds.width / currentRatio) : new _Size2.default(bounds.height * currentRatio, bounds.height);
    }

    if (size[0].value) {
        width = size[0].value.getAbsoluteValue(bounds.width);
    }

    if (size[0].size === BACKGROUND_SIZE.AUTO && size[1].size === BACKGROUND_SIZE.AUTO) {
        height = image.height;
    } else if (size[1].size === BACKGROUND_SIZE.AUTO) {
        height = width / image.width * image.height;
    } else if (size[1].value) {
        height = size[1].value.getAbsoluteValue(bounds.height);
    }

    if (size[0].size === BACKGROUND_SIZE.AUTO) {
        width = height / image.height * image.width;
    }

    return new _Size2.default(width, height);
};

var calculateGradientBackgroundSize = exports.calculateGradientBackgroundSize = function calculateGradientBackgroundSize(backgroundImage, bounds) {
    var size = backgroundImage.size;
    var width = size[0].value ? size[0].value.getAbsoluteValue(bounds.width) : bounds.width;
    var height = size[1].value ? size[1].value.getAbsoluteValue(bounds.height) : size[0].value ? width : bounds.height;

    return new _Size2.default(width, height);
};

var AUTO_SIZE = new BackgroundSize(AUTO);

var calculateBackgroungPaintingArea = exports.calculateBackgroungPaintingArea = function calculateBackgroungPaintingArea(curves, clip) {
    switch (clip) {
        case BACKGROUND_CLIP.BORDER_BOX:
            return (0, _Bounds.calculateBorderBoxPath)(curves);
        case BACKGROUND_CLIP.PADDING_BOX:
        default:
            return (0, _Bounds.calculatePaddingBoxPath)(curves);
    }
};

var calculateBackgroungPositioningArea = exports.calculateBackgroungPositioningArea = function calculateBackgroungPositioningArea(backgroundOrigin, bounds, padding, border) {
    var paddingBox = (0, _Bounds.calculatePaddingBox)(bounds, border);

    switch (backgroundOrigin) {
        case BACKGROUND_ORIGIN.BORDER_BOX:
            return bounds;
        case BACKGROUND_ORIGIN.CONTENT_BOX:
            var paddingLeft = padding[_padding.PADDING_SIDES.LEFT].getAbsoluteValue(bounds.width);
            var paddingRight = padding[_padding.PADDING_SIDES.RIGHT].getAbsoluteValue(bounds.width);
            var paddingTop = padding[_padding.PADDING_SIDES.TOP].getAbsoluteValue(bounds.width);
            var paddingBottom = padding[_padding.PADDING_SIDES.BOTTOM].getAbsoluteValue(bounds.width);
            return new _Bounds.Bounds(paddingBox.left + paddingLeft, paddingBox.top + paddingTop, paddingBox.width - paddingLeft - paddingRight, paddingBox.height - paddingTop - paddingBottom);
        case BACKGROUND_ORIGIN.PADDING_BOX:
        default:
            return paddingBox;
    }
};

var calculateBackgroundPosition = exports.calculateBackgroundPosition = function calculateBackgroundPosition(position, size, bounds) {
    return new _Vector2.default(position[0].getAbsoluteValue(bounds.width - size.width), position[1].getAbsoluteValue(bounds.height - size.height));
};

var calculateBackgroundRepeatPath = exports.calculateBackgroundRepeatPath = function calculateBackgroundRepeatPath(background, position, size, backgroundPositioningArea, bounds) {
    var repeat = background.repeat;
    switch (repeat) {
        case BACKGROUND_REPEAT.REPEAT_X:
            return [new _Vector2.default(Math.round(bounds.left), Math.round(backgroundPositioningArea.top + position.y)), new _Vector2.default(Math.round(bounds.left + bounds.width), Math.round(backgroundPositioningArea.top + position.y)), new _Vector2.default(Math.round(bounds.left + bounds.width), Math.round(size.height + backgroundPositioningArea.top + position.y)), new _Vector2.default(Math.round(bounds.left), Math.round(size.height + backgroundPositioningArea.top + position.y))];
        case BACKGROUND_REPEAT.REPEAT_Y:
            return [new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x), Math.round(bounds.top)), new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x + size.width), Math.round(bounds.top)), new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x + size.width), Math.round(bounds.height + bounds.top)), new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x), Math.round(bounds.height + bounds.top))];
        case BACKGROUND_REPEAT.NO_REPEAT:
            return [new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x), Math.round(backgroundPositioningArea.top + position.y)), new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x + size.width), Math.round(backgroundPositioningArea.top + position.y)), new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x + size.width), Math.round(backgroundPositioningArea.top + position.y + size.height)), new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x), Math.round(backgroundPositioningArea.top + position.y + size.height))];
        default:
            return [new _Vector2.default(Math.round(bounds.left), Math.round(bounds.top)), new _Vector2.default(Math.round(bounds.left + bounds.width), Math.round(bounds.top)), new _Vector2.default(Math.round(bounds.left + bounds.width), Math.round(bounds.height + bounds.top)), new _Vector2.default(Math.round(bounds.left), Math.round(bounds.height + bounds.top))];
    }
};

var parseBackground = exports.parseBackground = function parseBackground(style, resourceLoader) {
    return {
        backgroundColor: new _Color2.default(style.backgroundColor),
        backgroundImage: parseBackgroundImages(style, resourceLoader),
        backgroundClip: parseBackgroundClip(style.backgroundClip),
        backgroundOrigin: parseBackgroundOrigin(style.backgroundOrigin)
    };
};

var parseBackgroundClip = function parseBackgroundClip(backgroundClip) {
    switch (backgroundClip) {
        case 'padding-box':
            return BACKGROUND_CLIP.PADDING_BOX;
        case 'content-box':
            return BACKGROUND_CLIP.CONTENT_BOX;
    }
    return BACKGROUND_CLIP.BORDER_BOX;
};

var parseBackgroundOrigin = function parseBackgroundOrigin(backgroundOrigin) {
    switch (backgroundOrigin) {
        case 'padding-box':
            return BACKGROUND_ORIGIN.PADDING_BOX;
        case 'content-box':
            return BACKGROUND_ORIGIN.CONTENT_BOX;
    }
    return BACKGROUND_ORIGIN.BORDER_BOX;
};

var parseBackgroundRepeat = function parseBackgroundRepeat(backgroundRepeat) {
    switch (backgroundRepeat.trim()) {
        case 'no-repeat':
            return BACKGROUND_REPEAT.NO_REPEAT;
        case 'repeat-x':
        case 'repeat no-repeat':
            return BACKGROUND_REPEAT.REPEAT_X;
        case 'repeat-y':
        case 'no-repeat repeat':
            return BACKGROUND_REPEAT.REPEAT_Y;
        case 'repeat':
            return BACKGROUND_REPEAT.REPEAT;
    }

    if (true) {
        console.error('Invalid background-repeat value "' + backgroundRepeat + '"');
    }

    return BACKGROUND_REPEAT.REPEAT;
};

var parseBackgroundImages = function parseBackgroundImages(style, resourceLoader) {
    var sources = parseBackgroundImage(style.backgroundImage).map(function (backgroundImage) {
        if (backgroundImage.method === 'url') {
            var key = resourceLoader.loadImage(backgroundImage.args[0]);
            backgroundImage.args = key ? [key] : [];
        }
        return backgroundImage;
    });
    var positions = style.backgroundPosition.split(',');
    var repeats = style.backgroundRepeat.split(',');
    var sizes = style.backgroundSize.split(',');

    return sources.map(function (source, index) {
        var size = (sizes[index] || AUTO).trim().split(' ').map(parseBackgroundSize);
        var position = (positions[index] || AUTO).trim().split(' ').map(parseBackgoundPosition);

        return {
            source: source,
            repeat: parseBackgroundRepeat(typeof repeats[index] === 'string' ? repeats[index] : repeats[0]),
            size: size.length < 2 ? [size[0], AUTO_SIZE] : [size[0], size[1]],
            position: position.length < 2 ? [position[0], position[0]] : [position[0], position[1]]
        };
    });
};

var parseBackgroundSize = function parseBackgroundSize(size) {
    return size === 'auto' ? AUTO_SIZE : new BackgroundSize(size);
};

var parseBackgoundPosition = function parseBackgoundPosition(position) {
    switch (position) {
        case 'bottom':
        case 'right':
            return new _Length2.default('100%');
        case 'left':
        case 'top':
            return new _Length2.default('0%');
        case 'auto':
            return new _Length2.default('0');
    }
    return new _Length2.default(position);
};

var parseBackgroundImage = exports.parseBackgroundImage = function parseBackgroundImage(image) {
    var whitespace = /^\s$/;
    var results = [];

    var args = [];
    var method = '';
    var quote = null;
    var definition = '';
    var mode = 0;
    var numParen = 0;

    var appendResult = function appendResult() {
        var prefix = '';
        if (method) {
            if (definition.substr(0, 1) === '"') {
                definition = definition.substr(1, definition.length - 2);
            }

            if (definition) {
                args.push(definition.trim());
            }

            var prefix_i = method.indexOf('-', 1) + 1;
            if (method.substr(0, 1) === '-' && prefix_i > 0) {
                prefix = method.substr(0, prefix_i).toLowerCase();
                method = method.substr(prefix_i);
            }
            method = method.toLowerCase();
            if (method !== 'none') {
                results.push({
                    prefix: prefix,
                    method: method,
                    args: args
                });
            }
        }
        args = [];
        method = definition = '';
    };

    image.split('').forEach(function (c) {
        if (mode === 0 && whitespace.test(c)) {
            return;
        }
        switch (c) {
            case '"':
                if (!quote) {
                    quote = c;
                } else if (quote === c) {
                    quote = null;
                }
                break;
            case '(':
                if (quote) {
                    break;
                } else if (mode === 0) {
                    mode = 1;
                    return;
                } else {
                    numParen++;
                }
                break;
            case ')':
                if (quote) {
                    break;
                } else if (mode === 1) {
                    if (numParen === 0) {
                        mode = 0;
                        appendResult();
                        return;
                    } else {
                        numParen--;
                    }
                }
                break;

            case ',':
                if (quote) {
                    break;
                } else if (mode === 0) {
                    appendResult();
                    return;
                } else if (mode === 1) {
                    if (numParen === 0 && !method.match(/^url$/i)) {
                        args.push(definition.trim());
                        definition = '';
                        return;
                    }
                }
                break;
        }

        if (mode === 0) {
            method += c;
        } else {
            definition += c;
        }
    });

    appendResult();
    return results;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var PATH = exports.PATH = {
    VECTOR: 0,
    BEZIER_CURVE: 1,
    CIRCLE: 2
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Path = __webpack_require__(6);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vector = function Vector(x, y) {
    _classCallCheck(this, Vector);

    this.type = _Path.PATH.VECTOR;
    this.x = x;
    this.y = y;
    if (true) {
        if (isNaN(x)) {
            console.error('Invalid x value given for Vector');
        }
        if (isNaN(y)) {
            console.error('Invalid y value given for Vector');
        }
    }
};

exports.default = Vector;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseListStyle = exports.parseListStyleType = exports.LIST_STYLE_TYPE = exports.LIST_STYLE_POSITION = undefined;

var _background = __webpack_require__(5);

var LIST_STYLE_POSITION = exports.LIST_STYLE_POSITION = {
    INSIDE: 0,
    OUTSIDE: 1
};

var LIST_STYLE_TYPE = exports.LIST_STYLE_TYPE = {
    NONE: -1,
    DISC: 0,
    CIRCLE: 1,
    SQUARE: 2,
    DECIMAL: 3,
    CJK_DECIMAL: 4,
    DECIMAL_LEADING_ZERO: 5,
    LOWER_ROMAN: 6,
    UPPER_ROMAN: 7,
    LOWER_GREEK: 8,
    LOWER_ALPHA: 9,
    UPPER_ALPHA: 10,
    ARABIC_INDIC: 11,
    ARMENIAN: 12,
    BENGALI: 13,
    CAMBODIAN: 14,
    CJK_EARTHLY_BRANCH: 15,
    CJK_HEAVENLY_STEM: 16,
    CJK_IDEOGRAPHIC: 17,
    DEVANAGARI: 18,
    ETHIOPIC_NUMERIC: 19,
    GEORGIAN: 20,
    GUJARATI: 21,
    GURMUKHI: 22,
    HEBREW: 22,
    HIRAGANA: 23,
    HIRAGANA_IROHA: 24,
    JAPANESE_FORMAL: 25,
    JAPANESE_INFORMAL: 26,
    KANNADA: 27,
    KATAKANA: 28,
    KATAKANA_IROHA: 29,
    KHMER: 30,
    KOREAN_HANGUL_FORMAL: 31,
    KOREAN_HANJA_FORMAL: 32,
    KOREAN_HANJA_INFORMAL: 33,
    LAO: 34,
    LOWER_ARMENIAN: 35,
    MALAYALAM: 36,
    MONGOLIAN: 37,
    MYANMAR: 38,
    ORIYA: 39,
    PERSIAN: 40,
    SIMP_CHINESE_FORMAL: 41,
    SIMP_CHINESE_INFORMAL: 42,
    TAMIL: 43,
    TELUGU: 44,
    THAI: 45,
    TIBETAN: 46,
    TRAD_CHINESE_FORMAL: 47,
    TRAD_CHINESE_INFORMAL: 48,
    UPPER_ARMENIAN: 49,
    DISCLOSURE_OPEN: 50,
    DISCLOSURE_CLOSED: 51
};

var parseListStyleType = exports.parseListStyleType = function parseListStyleType(type) {
    switch (type) {
        case 'disc':
            return LIST_STYLE_TYPE.DISC;
        case 'circle':
            return LIST_STYLE_TYPE.CIRCLE;
        case 'square':
            return LIST_STYLE_TYPE.SQUARE;
        case 'decimal':
            return LIST_STYLE_TYPE.DECIMAL;
        case 'cjk-decimal':
            return LIST_STYLE_TYPE.CJK_DECIMAL;
        case 'decimal-leading-zero':
            return LIST_STYLE_TYPE.DECIMAL_LEADING_ZERO;
        case 'lower-roman':
            return LIST_STYLE_TYPE.LOWER_ROMAN;
        case 'upper-roman':
            return LIST_STYLE_TYPE.UPPER_ROMAN;
        case 'lower-greek':
            return LIST_STYLE_TYPE.LOWER_GREEK;
        case 'lower-alpha':
            return LIST_STYLE_TYPE.LOWER_ALPHA;
        case 'upper-alpha':
            return LIST_STYLE_TYPE.UPPER_ALPHA;
        case 'arabic-indic':
            return LIST_STYLE_TYPE.ARABIC_INDIC;
        case 'armenian':
            return LIST_STYLE_TYPE.ARMENIAN;
        case 'bengali':
            return LIST_STYLE_TYPE.BENGALI;
        case 'cambodian':
            return LIST_STYLE_TYPE.CAMBODIAN;
        case 'cjk-earthly-branch':
            return LIST_STYLE_TYPE.CJK_EARTHLY_BRANCH;
        case 'cjk-heavenly-stem':
            return LIST_STYLE_TYPE.CJK_HEAVENLY_STEM;
        case 'cjk-ideographic':
            return LIST_STYLE_TYPE.CJK_IDEOGRAPHIC;
        case 'devanagari':
            return LIST_STYLE_TYPE.DEVANAGARI;
        case 'ethiopic-numeric':
            return LIST_STYLE_TYPE.ETHIOPIC_NUMERIC;
        case 'georgian':
            return LIST_STYLE_TYPE.GEORGIAN;
        case 'gujarati':
            return LIST_STYLE_TYPE.GUJARATI;
        case 'gurmukhi':
            return LIST_STYLE_TYPE.GURMUKHI;
        case 'hebrew':
            return LIST_STYLE_TYPE.HEBREW;
        case 'hiragana':
            return LIST_STYLE_TYPE.HIRAGANA;
        case 'hiragana-iroha':
            return LIST_STYLE_TYPE.HIRAGANA_IROHA;
        case 'japanese-formal':
            return LIST_STYLE_TYPE.JAPANESE_FORMAL;
        case 'japanese-informal':
            return LIST_STYLE_TYPE.JAPANESE_INFORMAL;
        case 'kannada':
            return LIST_STYLE_TYPE.KANNADA;
        case 'katakana':
            return LIST_STYLE_TYPE.KATAKANA;
        case 'katakana-iroha':
            return LIST_STYLE_TYPE.KATAKANA_IROHA;
        case 'khmer':
            return LIST_STYLE_TYPE.KHMER;
        case 'korean-hangul-formal':
            return LIST_STYLE_TYPE.KOREAN_HANGUL_FORMAL;
        case 'korean-hanja-formal':
            return LIST_STYLE_TYPE.KOREAN_HANJA_FORMAL;
        case 'korean-hanja-informal':
            return LIST_STYLE_TYPE.KOREAN_HANJA_INFORMAL;
        case 'lao':
            return LIST_STYLE_TYPE.LAO;
        case 'lower-armenian':
            return LIST_STYLE_TYPE.LOWER_ARMENIAN;
        case 'malayalam':
            return LIST_STYLE_TYPE.MALAYALAM;
        case 'mongolian':
            return LIST_STYLE_TYPE.MONGOLIAN;
        case 'myanmar':
            return LIST_STYLE_TYPE.MYANMAR;
        case 'oriya':
            return LIST_STYLE_TYPE.ORIYA;
        case 'persian':
            return LIST_STYLE_TYPE.PERSIAN;
        case 'simp-chinese-formal':
            return LIST_STYLE_TYPE.SIMP_CHINESE_FORMAL;
        case 'simp-chinese-informal':
            return LIST_STYLE_TYPE.SIMP_CHINESE_INFORMAL;
        case 'tamil':
            return LIST_STYLE_TYPE.TAMIL;
        case 'telugu':
            return LIST_STYLE_TYPE.TELUGU;
        case 'thai':
            return LIST_STYLE_TYPE.THAI;
        case 'tibetan':
            return LIST_STYLE_TYPE.TIBETAN;
        case 'trad-chinese-formal':
            return LIST_STYLE_TYPE.TRAD_CHINESE_FORMAL;
        case 'trad-chinese-informal':
            return LIST_STYLE_TYPE.TRAD_CHINESE_INFORMAL;
        case 'upper-armenian':
            return LIST_STYLE_TYPE.UPPER_ARMENIAN;
        case 'disclosure-open':
            return LIST_STYLE_TYPE.DISCLOSURE_OPEN;
        case 'disclosure-closed':
            return LIST_STYLE_TYPE.DISCLOSURE_CLOSED;
        case 'none':
        default:
            return LIST_STYLE_TYPE.NONE;
    }
};

var parseListStyle = exports.parseListStyle = function parseListStyle(style) {
    var listStyleImage = (0, _background.parseBackgroundImage)(style.getPropertyValue('list-style-image'));
    return {
        listStyleType: parseListStyleType(style.getPropertyValue('list-style-type')),
        listStyleImage: listStyleImage.length ? listStyleImage[0] : null,
        listStylePosition: parseListStylePosition(style.getPropertyValue('list-style-position'))
    };
};

var parseListStylePosition = function parseListStylePosition(position) {
    switch (position) {
        case 'inside':
            return LIST_STYLE_POSITION.INSIDE;
        case 'outside':
        default:
            return LIST_STYLE_POSITION.OUTSIDE;
    }
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _textTransform = __webpack_require__(20);

var _TextBounds = __webpack_require__(22);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TextContainer = function () {
    function TextContainer(text, parent, bounds) {
        _classCallCheck(this, TextContainer);

        this.text = text;
        this.parent = parent;
        this.bounds = bounds;
    }

    _createClass(TextContainer, null, [{
        key: 'fromTextNode',
        value: function fromTextNode(node, parent) {
            var text = transform(node.data, parent.style.textTransform);
            return new TextContainer(text, parent, (0, _TextBounds.parseTextBounds)(text, parent, node));
        }
    }]);

    return TextContainer;
}();

exports.default = TextContainer;


var CAPITALIZE = /(^|\s|:|-|\(|\))([a-z])/g;

var transform = function transform(text, _transform) {
    switch (_transform) {
        case _textTransform.TEXT_TRANSFORM.LOWERCASE:
            return text.toLowerCase();
        case _textTransform.TEXT_TRANSFORM.CAPITALIZE:
            return text.replace(CAPITALIZE, capitalize);
        case _textTransform.TEXT_TRANSFORM.UPPERCASE:
            return text.toUpperCase();
        default:
            return text;
    }
};

function capitalize(m, p1, p2) {
    if (m.length > 0) {
        return p1 + p2.toUpperCase();
    }

    return m;
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ForeignObjectRenderer = __webpack_require__(23);

var testRangeBounds = function testRangeBounds(document) {
    var TEST_HEIGHT = 123;

    if (document.createRange) {
        var range = document.createRange();
        if (range.getBoundingClientRect) {
            var testElement = document.createElement('boundtest');
            testElement.style.height = TEST_HEIGHT + 'px';
            testElement.style.display = 'block';
            document.body.appendChild(testElement);

            range.selectNode(testElement);
            var rangeBounds = range.getBoundingClientRect();
            var rangeHeight = Math.round(rangeBounds.height);
            document.body.removeChild(testElement);
            if (rangeHeight === TEST_HEIGHT) {
                return true;
            }
        }
    }

    return false;
};

// iOS 10.3 taints canvas with base64 images unless crossOrigin = 'anonymous'
var testBase64 = function testBase64(document, src) {
    var img = new Image();
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');

    return new Promise(function (resolve) {
        // Single pixel base64 image renders fine on iOS 10.3???
        img.src = src;

        var onload = function onload() {
            try {
                ctx.drawImage(img, 0, 0);
                canvas.toDataURL();
            } catch (e) {
                return resolve(false);
            }

            return resolve(true);
        };

        img.onload = onload;
        img.onerror = function () {
            return resolve(false);
        };

        if (img.complete === true) {
            setTimeout(function () {
                onload();
            }, 500);
        }
    });
};

var testCORS = function testCORS() {
    return typeof new Image().crossOrigin !== 'undefined';
};

var testResponseType = function testResponseType() {
    return typeof new XMLHttpRequest().responseType === 'string';
};

var testSVG = function testSVG(document) {
    var img = new Image();
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    img.src = 'data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\'></svg>';

    try {
        ctx.drawImage(img, 0, 0);
        canvas.toDataURL();
    } catch (e) {
        return false;
    }
    return true;
};

var isGreenPixel = function isGreenPixel(data) {
    return data[0] === 0 && data[1] === 255 && data[2] === 0 && data[3] === 255;
};

var testForeignObject = function testForeignObject(document) {
    var canvas = document.createElement('canvas');
    var size = 100;
    canvas.width = size;
    canvas.height = size;
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgb(0, 255, 0)';
    ctx.fillRect(0, 0, size, size);

    var img = new Image();
    var greenImageSrc = canvas.toDataURL();
    img.src = greenImageSrc;
    var svg = (0, _ForeignObjectRenderer.createForeignObjectSVG)(size, size, 0, 0, img);
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, size, size);

    return (0, _ForeignObjectRenderer.loadSerializedSVG)(svg).then(function (img) {
        ctx.drawImage(img, 0, 0);
        var data = ctx.getImageData(0, 0, size, size).data;
        ctx.fillStyle = 'red';
        ctx.fillRect(0, 0, size, size);

        var node = document.createElement('div');
        node.style.backgroundImage = 'url(' + greenImageSrc + ')';
        node.style.height = size + 'px';
        // Firefox 55 does not render inline <img /> tags
        return isGreenPixel(data) ? (0, _ForeignObjectRenderer.loadSerializedSVG)((0, _ForeignObjectRenderer.createForeignObjectSVG)(size, size, 0, 0, node)) : Promise.reject(false);
    }).then(function (img) {
        ctx.drawImage(img, 0, 0);
        // Edge does not render background-images
        return isGreenPixel(ctx.getImageData(0, 0, size, size).data);
    }).catch(function (e) {
        return false;
    });
};

var FEATURES = {
    // $FlowFixMe - get/set properties not yet supported
    get SUPPORT_RANGE_BOUNDS() {
        'use strict';

        var value = testRangeBounds(document);
        Object.defineProperty(FEATURES, 'SUPPORT_RANGE_BOUNDS', { value: value });
        return value;
    },
    // $FlowFixMe - get/set properties not yet supported
    get SUPPORT_SVG_DRAWING() {
        'use strict';

        var value = testSVG(document);
        Object.defineProperty(FEATURES, 'SUPPORT_SVG_DRAWING', { value: value });
        return value;
    },
    // $FlowFixMe - get/set properties not yet supported
    get SUPPORT_BASE64_DRAWING() {
        'use strict';

        return function (src) {
            var _value = testBase64(document, src);
            Object.defineProperty(FEATURES, 'SUPPORT_BASE64_DRAWING', { value: function value() {
                    return _value;
                } });
            return _value;
        };
    },
    // $FlowFixMe - get/set properties not yet supported
    get SUPPORT_FOREIGNOBJECT_DRAWING() {
        'use strict';

        var value = typeof Array.from === 'function' && typeof window.fetch === 'function' ? testForeignObject(document) : Promise.resolve(false);
        Object.defineProperty(FEATURES, 'SUPPORT_FOREIGNOBJECT_DRAWING', { value: value });
        return value;
    },
    // $FlowFixMe - get/set properties not yet supported
    get SUPPORT_CORS_IMAGES() {
        'use strict';

        var value = testCORS();
        Object.defineProperty(FEATURES, 'SUPPORT_CORS_IMAGES', { value: value });
        return value;
    },
    // $FlowFixMe - get/set properties not yet supported
    get SUPPORT_RESPONSE_TYPE() {
        'use strict';

        var value = testResponseType();
        Object.defineProperty(FEATURES, 'SUPPORT_RESPONSE_TYPE', { value: value });
        return value;
    },
    // $FlowFixMe - get/set properties not yet supported
    get SUPPORT_CORS_XHR() {
        'use strict';

        var value = 'withCredentials' in new XMLHttpRequest();
        Object.defineProperty(FEATURES, 'SUPPORT_CORS_XHR', { value: value });
        return value;
    }
};

exports.default = FEATURES;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseTextDecoration = exports.TEXT_DECORATION_LINE = exports.TEXT_DECORATION = exports.TEXT_DECORATION_STYLE = undefined;

var _Color = __webpack_require__(0);

var _Color2 = _interopRequireDefault(_Color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TEXT_DECORATION_STYLE = exports.TEXT_DECORATION_STYLE = {
    SOLID: 0,
    DOUBLE: 1,
    DOTTED: 2,
    DASHED: 3,
    WAVY: 4
};

var TEXT_DECORATION = exports.TEXT_DECORATION = {
    NONE: null
};

var TEXT_DECORATION_LINE = exports.TEXT_DECORATION_LINE = {
    UNDERLINE: 1,
    OVERLINE: 2,
    LINE_THROUGH: 3,
    BLINK: 4
};

var parseLine = function parseLine(line) {
    switch (line) {
        case 'underline':
            return TEXT_DECORATION_LINE.UNDERLINE;
        case 'overline':
            return TEXT_DECORATION_LINE.OVERLINE;
        case 'line-through':
            return TEXT_DECORATION_LINE.LINE_THROUGH;
    }
    return TEXT_DECORATION_LINE.BLINK;
};

var parseTextDecorationLine = function parseTextDecorationLine(line) {
    if (line === 'none') {
        return null;
    }

    return line.split(' ').map(parseLine);
};

var parseTextDecorationStyle = function parseTextDecorationStyle(style) {
    switch (style) {
        case 'double':
            return TEXT_DECORATION_STYLE.DOUBLE;
        case 'dotted':
            return TEXT_DECORATION_STYLE.DOTTED;
        case 'dashed':
            return TEXT_DECORATION_STYLE.DASHED;
        case 'wavy':
            return TEXT_DECORATION_STYLE.WAVY;
    }
    return TEXT_DECORATION_STYLE.SOLID;
};

var parseTextDecoration = exports.parseTextDecoration = function parseTextDecoration(style) {
    var textDecorationLine = parseTextDecorationLine(style.textDecorationLine ? style.textDecorationLine : style.textDecoration);
    if (textDecorationLine === null) {
        return TEXT_DECORATION.NONE;
    }

    var textDecorationColor = style.textDecorationColor ? new _Color2.default(style.textDecorationColor) : null;
    var textDecorationStyle = parseTextDecorationStyle(style.textDecorationStyle);

    return {
        textDecorationLine: textDecorationLine,
        textDecorationColor: textDecorationColor,
        textDecorationStyle: textDecorationStyle
    };
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseBorder = exports.BORDER_SIDES = exports.BORDER_STYLE = undefined;

var _Color = __webpack_require__(0);

var _Color2 = _interopRequireDefault(_Color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BORDER_STYLE = exports.BORDER_STYLE = {
    NONE: 0,
    SOLID: 1
};

var BORDER_SIDES = exports.BORDER_SIDES = {
    TOP: 0,
    RIGHT: 1,
    BOTTOM: 2,
    LEFT: 3
};

var SIDES = Object.keys(BORDER_SIDES).map(function (s) {
    return s.toLowerCase();
});

var parseBorderStyle = function parseBorderStyle(style) {
    switch (style) {
        case 'none':
            return BORDER_STYLE.NONE;
    }
    return BORDER_STYLE.SOLID;
};

var parseBorder = exports.parseBorder = function parseBorder(style) {
    return SIDES.map(function (side) {
        var borderColor = new _Color2.default(style.getPropertyValue('border-' + side + '-color'));
        var borderStyle = parseBorderStyle(style.getPropertyValue('border-' + side + '-style'));
        var borderWidth = parseFloat(style.getPropertyValue('border-' + side + '-width'));
        return {
            borderColor: borderColor,
            borderStyle: borderStyle,
            borderWidth: isNaN(borderWidth) ? 0 : borderWidth
        };
    });
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var toCodePoints = exports.toCodePoints = function toCodePoints(str) {
    var codePoints = [];
    var i = 0;
    var length = str.length;
    while (i < length) {
        var value = str.charCodeAt(i++);
        if (value >= 0xd800 && value <= 0xdbff && i < length) {
            var extra = str.charCodeAt(i++);
            if ((extra & 0xfc00) === 0xdc00) {
                codePoints.push(((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000);
            } else {
                codePoints.push(value);
                i--;
            }
        } else {
            codePoints.push(value);
        }
    }
    return codePoints;
};

var fromCodePoint = exports.fromCodePoint = function fromCodePoint() {
    if (String.fromCodePoint) {
        return String.fromCodePoint.apply(String, arguments);
    }

    var length = arguments.length;
    if (!length) {
        return '';
    }

    var codeUnits = [];

    var index = -1;
    var result = '';
    while (++index < length) {
        var codePoint = arguments.length <= index ? undefined : arguments[index];
        if (codePoint <= 0xffff) {
            codeUnits.push(codePoint);
        } else {
            codePoint -= 0x10000;
            codeUnits.push((codePoint >> 10) + 0xd800, codePoint % 0x400 + 0xdc00);
        }
        if (index + 1 === length || codeUnits.length > 0x4000) {
            result += String.fromCharCode.apply(String, codeUnits);
            codeUnits.length = 0;
        }
    }
    return result;
};

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

// Use a lookup table to find the index.
var lookup = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
for (var i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
}

var decode = exports.decode = function decode(base64) {
    var bufferLength = base64.length * 0.75,
        len = base64.length,
        i = void 0,
        p = 0,
        encoded1 = void 0,
        encoded2 = void 0,
        encoded3 = void 0,
        encoded4 = void 0;

    if (base64[base64.length - 1] === '=') {
        bufferLength--;
        if (base64[base64.length - 2] === '=') {
            bufferLength--;
        }
    }

    var buffer = typeof ArrayBuffer !== 'undefined' && typeof Uint8Array !== 'undefined' && typeof Uint8Array.prototype.slice !== 'undefined' ? new ArrayBuffer(bufferLength) : new Array(bufferLength);
    var bytes = Array.isArray(buffer) ? buffer : new Uint8Array(buffer);

    for (i = 0; i < len; i += 4) {
        encoded1 = lookup[base64.charCodeAt(i)];
        encoded2 = lookup[base64.charCodeAt(i + 1)];
        encoded3 = lookup[base64.charCodeAt(i + 2)];
        encoded4 = lookup[base64.charCodeAt(i + 3)];

        bytes[p++] = encoded1 << 2 | encoded2 >> 4;
        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }

    return buffer;
};

var polyUint16Array = exports.polyUint16Array = function polyUint16Array(buffer) {
    var length = buffer.length;
    var bytes = [];
    for (var _i = 0; _i < length; _i += 2) {
        bytes.push(buffer[_i + 1] << 8 | buffer[_i]);
    }
    return bytes;
};

var polyUint32Array = exports.polyUint32Array = function polyUint32Array(buffer) {
    var length = buffer.length;
    var bytes = [];
    for (var _i2 = 0; _i2 < length; _i2 += 4) {
        bytes.push(buffer[_i2 + 3] << 24 | buffer[_i2 + 2] << 16 | buffer[_i2 + 1] << 8 | buffer[_i2]);
    }
    return bytes;
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createCounterText = exports.inlineListItemElement = exports.getListOwner = undefined;

var _Util = __webpack_require__(4);

var _NodeContainer = __webpack_require__(3);

var _NodeContainer2 = _interopRequireDefault(_NodeContainer);

var _TextContainer = __webpack_require__(9);

var _TextContainer2 = _interopRequireDefault(_TextContainer);

var _listStyle = __webpack_require__(8);

var _Unicode = __webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Margin between the enumeration and the list item content
var MARGIN_RIGHT = 7;

var ancestorTypes = ['OL', 'UL', 'MENU'];

var getListOwner = exports.getListOwner = function getListOwner(container) {
    var parent = container.parent;
    if (!parent) {
        return null;
    }

    do {
        var isAncestor = ancestorTypes.indexOf(parent.tagName) !== -1;
        if (isAncestor) {
            return parent;
        }
        parent = parent.parent;
    } while (parent);

    return container.parent;
};

var inlineListItemElement = exports.inlineListItemElement = function inlineListItemElement(node, container, resourceLoader) {
    var listStyle = container.style.listStyle;

    if (!listStyle) {
        return;
    }

    var style = node.ownerDocument.defaultView.getComputedStyle(node, null);
    var wrapper = node.ownerDocument.createElement('html2canvaswrapper');
    (0, _Util.copyCSSStyles)(style, wrapper);

    wrapper.style.position = 'absolute';
    wrapper.style.bottom = 'auto';
    wrapper.style.display = 'block';
    wrapper.style.letterSpacing = 'normal';

    switch (listStyle.listStylePosition) {
        case _listStyle.LIST_STYLE_POSITION.OUTSIDE:
            wrapper.style.left = 'auto';
            wrapper.style.right = node.ownerDocument.defaultView.innerWidth - container.bounds.left - container.style.margin[1].getAbsoluteValue(container.bounds.width) + MARGIN_RIGHT + 'px';
            wrapper.style.textAlign = 'right';
            break;
        case _listStyle.LIST_STYLE_POSITION.INSIDE:
            wrapper.style.left = container.bounds.left - container.style.margin[3].getAbsoluteValue(container.bounds.width) + 'px';
            wrapper.style.right = 'auto';
            wrapper.style.textAlign = 'left';
            break;
    }

    var text = void 0;
    var MARGIN_TOP = container.style.margin[0].getAbsoluteValue(container.bounds.width);
    var styleImage = listStyle.listStyleImage;
    if (styleImage) {
        if (styleImage.method === 'url') {
            var image = node.ownerDocument.createElement('img');
            image.src = styleImage.args[0];
            wrapper.style.top = container.bounds.top - MARGIN_TOP + 'px';
            wrapper.style.width = 'auto';
            wrapper.style.height = 'auto';
            wrapper.appendChild(image);
        } else {
            var size = parseFloat(container.style.font.fontSize) * 0.5;
            wrapper.style.top = container.bounds.top - MARGIN_TOP + container.bounds.height - 1.5 * size + 'px';
            wrapper.style.width = size + 'px';
            wrapper.style.height = size + 'px';
            wrapper.style.backgroundImage = style.listStyleImage;
        }
    } else if (typeof container.listIndex === 'number') {
        text = node.ownerDocument.createTextNode(createCounterText(container.listIndex, listStyle.listStyleType, true));
        wrapper.appendChild(text);
        wrapper.style.top = container.bounds.top - MARGIN_TOP + 'px';
    }

    // $FlowFixMe
    var body = node.ownerDocument.body;
    body.appendChild(wrapper);

    if (text) {
        container.childNodes.push(_TextContainer2.default.fromTextNode(text, container));
        body.removeChild(wrapper);
    } else {
        // $FlowFixMe
        container.childNodes.push(new _NodeContainer2.default(wrapper, container, resourceLoader, 0));
    }
};

var ROMAN_UPPER = {
    integers: [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
    values: ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
};

var ARMENIAN = {
    integers: [9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    values: ['Ք', 'Փ', 'Ւ', 'Ց', 'Ր', 'Տ', 'Վ', 'Ս', 'Ռ', 'Ջ', 'Պ', 'Չ', 'Ո', 'Շ', 'Ն', 'Յ', 'Մ', 'Ճ', 'Ղ', 'Ձ', 'Հ', 'Կ', 'Ծ', 'Խ', 'Լ', 'Ի', 'Ժ', 'Թ', 'Ը', 'Է', 'Զ', 'Ե', 'Դ', 'Գ', 'Բ', 'Ա']
};

var HEBREW = {
    integers: [10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    values: ['י׳', 'ט׳', 'ח׳', 'ז׳', 'ו׳', 'ה׳', 'ד׳', 'ג׳', 'ב׳', 'א׳', 'ת', 'ש', 'ר', 'ק', 'צ', 'פ', 'ע', 'ס', 'נ', 'מ', 'ל', 'כ', 'יט', 'יח', 'יז', 'טז', 'טו', 'י', 'ט', 'ח', 'ז', 'ו', 'ה', 'ד', 'ג', 'ב', 'א']
};

var GEORGIAN = {
    integers: [10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    values: ['ჵ', 'ჰ', 'ჯ', 'ჴ', 'ხ', 'ჭ', 'წ', 'ძ', 'ც', 'ჩ', 'შ', 'ყ', 'ღ', 'ქ', 'ფ', 'ჳ', 'ტ', 'ს', 'რ', 'ჟ', 'პ', 'ო', 'ჲ', 'ნ', 'მ', 'ლ', 'კ', 'ი', 'თ', 'ჱ', 'ზ', 'ვ', 'ე', 'დ', 'გ', 'ბ', 'ა']
};

var createAdditiveCounter = function createAdditiveCounter(value, min, max, symbols, fallback, suffix) {
    if (value < min || value > max) {
        return createCounterText(value, fallback, suffix.length > 0);
    }

    return symbols.integers.reduce(function (string, integer, index) {
        while (value >= integer) {
            value -= integer;
            string += symbols.values[index];
        }
        return string;
    }, '') + suffix;
};

var createCounterStyleWithSymbolResolver = function createCounterStyleWithSymbolResolver(value, codePointRangeLength, isNumeric, resolver) {
    var string = '';

    do {
        if (!isNumeric) {
            value--;
        }
        string = resolver(value) + string;
        value /= codePointRangeLength;
    } while (value * codePointRangeLength >= codePointRangeLength);

    return string;
};

var createCounterStyleFromRange = function createCounterStyleFromRange(value, codePointRangeStart, codePointRangeEnd, isNumeric, suffix) {
    var codePointRangeLength = codePointRangeEnd - codePointRangeStart + 1;

    return (value < 0 ? '-' : '') + (createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, isNumeric, function (codePoint) {
        return (0, _Unicode.fromCodePoint)(Math.floor(codePoint % codePointRangeLength) + codePointRangeStart);
    }) + suffix);
};

var createCounterStyleFromSymbols = function createCounterStyleFromSymbols(value, symbols) {
    var suffix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '. ';

    var codePointRangeLength = symbols.length;
    return createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, false, function (codePoint) {
        return symbols[Math.floor(codePoint % codePointRangeLength)];
    }) + suffix;
};

var CJK_ZEROS = 1 << 0;
var CJK_TEN_COEFFICIENTS = 1 << 1;
var CJK_TEN_HIGH_COEFFICIENTS = 1 << 2;
var CJK_HUNDRED_COEFFICIENTS = 1 << 3;

var createCJKCounter = function createCJKCounter(value, numbers, multipliers, negativeSign, suffix, flags) {
    if (value < -9999 || value > 9999) {
        return createCounterText(value, _listStyle.LIST_STYLE_TYPE.CJK_DECIMAL, suffix.length > 0);
    }
    var tmp = Math.abs(value);
    var string = suffix;

    if (tmp === 0) {
        return numbers[0] + string;
    }

    for (var digit = 0; tmp > 0 && digit <= 4; digit++) {
        var coefficient = tmp % 10;

        if (coefficient === 0 && (0, _Util.contains)(flags, CJK_ZEROS) && string !== '') {
            string = numbers[coefficient] + string;
        } else if (coefficient > 1 || coefficient === 1 && digit === 0 || coefficient === 1 && digit === 1 && (0, _Util.contains)(flags, CJK_TEN_COEFFICIENTS) || coefficient === 1 && digit === 1 && (0, _Util.contains)(flags, CJK_TEN_HIGH_COEFFICIENTS) && value > 100 || coefficient === 1 && digit > 1 && (0, _Util.contains)(flags, CJK_HUNDRED_COEFFICIENTS)) {
            string = numbers[coefficient] + (digit > 0 ? multipliers[digit - 1] : '') + string;
        } else if (coefficient === 1 && digit > 0) {
            string = multipliers[digit - 1] + string;
        }
        tmp = Math.floor(tmp / 10);
    }

    return (value < 0 ? negativeSign : '') + string;
};

var CHINESE_INFORMAL_MULTIPLIERS = '十百千萬';
var CHINESE_FORMAL_MULTIPLIERS = '拾佰仟萬';
var JAPANESE_NEGATIVE = 'マイナス';
var KOREAN_NEGATIVE = '마이너스 ';

var createCounterText = exports.createCounterText = function createCounterText(value, type, appendSuffix) {
    var defaultSuffix = appendSuffix ? '. ' : '';
    var cjkSuffix = appendSuffix ? '、' : '';
    var koreanSuffix = appendSuffix ? ', ' : '';
    switch (type) {
        case _listStyle.LIST_STYLE_TYPE.DISC:
            return '•';
        case _listStyle.LIST_STYLE_TYPE.CIRCLE:
            return '◦';
        case _listStyle.LIST_STYLE_TYPE.SQUARE:
            return '◾';
        case _listStyle.LIST_STYLE_TYPE.DECIMAL_LEADING_ZERO:
            var string = createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
            return string.length < 4 ? '0' + string : string;
        case _listStyle.LIST_STYLE_TYPE.CJK_DECIMAL:
            return createCounterStyleFromSymbols(value, '〇一二三四五六七八九', cjkSuffix);
        case _listStyle.LIST_STYLE_TYPE.LOWER_ROMAN:
            return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, _listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix).toLowerCase();
        case _listStyle.LIST_STYLE_TYPE.UPPER_ROMAN:
            return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, _listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.LOWER_GREEK:
            return createCounterStyleFromRange(value, 945, 969, false, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.LOWER_ALPHA:
            return createCounterStyleFromRange(value, 97, 122, false, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.UPPER_ALPHA:
            return createCounterStyleFromRange(value, 65, 90, false, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.ARABIC_INDIC:
            return createCounterStyleFromRange(value, 1632, 1641, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.ARMENIAN:
        case _listStyle.LIST_STYLE_TYPE.UPPER_ARMENIAN:
            return createAdditiveCounter(value, 1, 9999, ARMENIAN, _listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.LOWER_ARMENIAN:
            return createAdditiveCounter(value, 1, 9999, ARMENIAN, _listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix).toLowerCase();
        case _listStyle.LIST_STYLE_TYPE.BENGALI:
            return createCounterStyleFromRange(value, 2534, 2543, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.CAMBODIAN:
        case _listStyle.LIST_STYLE_TYPE.KHMER:
            return createCounterStyleFromRange(value, 6112, 6121, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.CJK_EARTHLY_BRANCH:
            return createCounterStyleFromSymbols(value, '子丑寅卯辰巳午未申酉戌亥', cjkSuffix);
        case _listStyle.LIST_STYLE_TYPE.CJK_HEAVENLY_STEM:
            return createCounterStyleFromSymbols(value, '甲乙丙丁戊己庚辛壬癸', cjkSuffix);
        case _listStyle.LIST_STYLE_TYPE.CJK_IDEOGRAPHIC:
        case _listStyle.LIST_STYLE_TYPE.TRAD_CHINESE_INFORMAL:
            return createCJKCounter(value, '零一二三四五六七八九', CHINESE_INFORMAL_MULTIPLIERS, '負', cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
        case _listStyle.LIST_STYLE_TYPE.TRAD_CHINESE_FORMAL:
            return createCJKCounter(value, '零壹貳參肆伍陸柒捌玖', CHINESE_FORMAL_MULTIPLIERS, '負', cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
        case _listStyle.LIST_STYLE_TYPE.SIMP_CHINESE_INFORMAL:
            return createCJKCounter(value, '零一二三四五六七八九', CHINESE_INFORMAL_MULTIPLIERS, '负', cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
        case _listStyle.LIST_STYLE_TYPE.SIMP_CHINESE_FORMAL:
            return createCJKCounter(value, '零壹贰叁肆伍陆柒捌玖', CHINESE_FORMAL_MULTIPLIERS, '负', cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
        case _listStyle.LIST_STYLE_TYPE.JAPANESE_INFORMAL:
            return createCJKCounter(value, '〇一二三四五六七八九', '十百千万', JAPANESE_NEGATIVE, cjkSuffix, 0);
        case _listStyle.LIST_STYLE_TYPE.JAPANESE_FORMAL:
            return createCJKCounter(value, '零壱弐参四伍六七八九', '拾百千万', JAPANESE_NEGATIVE, cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
        case _listStyle.LIST_STYLE_TYPE.KOREAN_HANGUL_FORMAL:
            return createCJKCounter(value, '영일이삼사오육칠팔구', '십백천만', KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
        case _listStyle.LIST_STYLE_TYPE.KOREAN_HANJA_INFORMAL:
            return createCJKCounter(value, '零一二三四五六七八九', '十百千萬', KOREAN_NEGATIVE, koreanSuffix, 0);
        case _listStyle.LIST_STYLE_TYPE.KOREAN_HANJA_FORMAL:
            return createCJKCounter(value, '零壹貳參四五六七八九', '拾百千', KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
        case _listStyle.LIST_STYLE_TYPE.DEVANAGARI:
            return createCounterStyleFromRange(value, 0x966, 0x96f, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.GEORGIAN:
            return createAdditiveCounter(value, 1, 19999, GEORGIAN, _listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.GUJARATI:
            return createCounterStyleFromRange(value, 0xae6, 0xaef, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.GURMUKHI:
            return createCounterStyleFromRange(value, 0xa66, 0xa6f, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.HEBREW:
            return createAdditiveCounter(value, 1, 10999, HEBREW, _listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.HIRAGANA:
            return createCounterStyleFromSymbols(value, 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん');
        case _listStyle.LIST_STYLE_TYPE.HIRAGANA_IROHA:
            return createCounterStyleFromSymbols(value, 'いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす');
        case _listStyle.LIST_STYLE_TYPE.KANNADA:
            return createCounterStyleFromRange(value, 0xce6, 0xcef, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.KATAKANA:
            return createCounterStyleFromSymbols(value, 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン', cjkSuffix);
        case _listStyle.LIST_STYLE_TYPE.KATAKANA_IROHA:
            return createCounterStyleFromSymbols(value, 'イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス', cjkSuffix);
        case _listStyle.LIST_STYLE_TYPE.LAO:
            return createCounterStyleFromRange(value, 0xed0, 0xed9, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.MONGOLIAN:
            return createCounterStyleFromRange(value, 0x1810, 0x1819, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.MYANMAR:
            return createCounterStyleFromRange(value, 0x1040, 0x1049, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.ORIYA:
            return createCounterStyleFromRange(value, 0xb66, 0xb6f, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.PERSIAN:
            return createCounterStyleFromRange(value, 0x6f0, 0x6f9, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.TAMIL:
            return createCounterStyleFromRange(value, 0xbe6, 0xbef, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.TELUGU:
            return createCounterStyleFromRange(value, 0xc66, 0xc6f, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.THAI:
            return createCounterStyleFromRange(value, 0xe50, 0xe59, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.TIBETAN:
            return createCounterStyleFromRange(value, 0xf20, 0xf29, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.DECIMAL:
        default:
            return createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
    }
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Path = __webpack_require__(6);

var _textDecoration = __webpack_require__(11);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var addColorStops = function addColorStops(gradient, canvasGradient) {
    var maxStop = Math.max.apply(null, gradient.colorStops.map(function (colorStop) {
        return colorStop.stop;
    }));
    var f = 1 / Math.max(1, maxStop);
    gradient.colorStops.forEach(function (colorStop) {
        canvasGradient.addColorStop(f * colorStop.stop, colorStop.color.toString());
    });
};

var CanvasRenderer = function () {
    function CanvasRenderer(canvas) {
        _classCallCheck(this, CanvasRenderer);

        this.canvas = canvas ? canvas : document.createElement('canvas');
    }

    _createClass(CanvasRenderer, [{
        key: 'render',
        value: function render(options) {
            this.ctx = this.canvas.getContext('2d');
            this.options = options;
            this.canvas.width = Math.floor(options.width * options.scale);
            this.canvas.height = Math.floor(options.height * options.scale);
            this.canvas.style.width = options.width + 'px';
            this.canvas.style.height = options.height + 'px';

            this.ctx.scale(this.options.scale, this.options.scale);
            this.ctx.translate(-options.x, -options.y);
            this.ctx.textBaseline = 'bottom';
            options.logger.log('Canvas renderer initialized (' + options.width + 'x' + options.height + ' at ' + options.x + ',' + options.y + ') with scale ' + this.options.scale);
        }
    }, {
        key: 'clip',
        value: function clip(clipPaths, callback) {
            var _this = this;

            if (clipPaths.length) {
                this.ctx.save();
                clipPaths.forEach(function (path) {
                    _this.path(path);
                    _this.ctx.clip();
                });
            }

            callback();

            if (clipPaths.length) {
                this.ctx.restore();
            }
        }
    }, {
        key: 'drawImage',
        value: function drawImage(image, source, destination) {
            this.ctx.drawImage(image, source.left, source.top, source.width, source.height, destination.left, destination.top, destination.width, destination.height);
        }
    }, {
        key: 'drawShape',
        value: function drawShape(path, color) {
            this.path(path);
            this.ctx.fillStyle = color.toString();
            this.ctx.fill();
        }
    }, {
        key: 'fill',
        value: function fill(color) {
            this.ctx.fillStyle = color.toString();
            this.ctx.fill();
        }
    }, {
        key: 'getTarget',
        value: function getTarget() {
            this.canvas.getContext('2d').setTransform(1, 0, 0, 1, 0, 0);
            return Promise.resolve(this.canvas);
        }
    }, {
        key: 'path',
        value: function path(_path) {
            var _this2 = this;

            this.ctx.beginPath();
            if (Array.isArray(_path)) {
                _path.forEach(function (point, index) {
                    var start = point.type === _Path.PATH.VECTOR ? point : point.start;
                    if (index === 0) {
                        _this2.ctx.moveTo(start.x, start.y);
                    } else {
                        _this2.ctx.lineTo(start.x, start.y);
                    }

                    if (point.type === _Path.PATH.BEZIER_CURVE) {
                        _this2.ctx.bezierCurveTo(point.startControl.x, point.startControl.y, point.endControl.x, point.endControl.y, point.end.x, point.end.y);
                    }
                });
            } else {
                this.ctx.arc(_path.x + _path.radius, _path.y + _path.radius, _path.radius, 0, Math.PI * 2, true);
            }

            this.ctx.closePath();
        }
    }, {
        key: 'rectangle',
        value: function rectangle(x, y, width, height, color) {
            this.ctx.fillStyle = color.toString();
            this.ctx.fillRect(x, y, width, height);
        }
    }, {
        key: 'renderLinearGradient',
        value: function renderLinearGradient(bounds, gradient) {
            var linearGradient = this.ctx.createLinearGradient(bounds.left + gradient.direction.x1, bounds.top + gradient.direction.y1, bounds.left + gradient.direction.x0, bounds.top + gradient.direction.y0);

            addColorStops(gradient, linearGradient);
            this.ctx.fillStyle = linearGradient;
            this.ctx.fillRect(bounds.left, bounds.top, bounds.width, bounds.height);
        }
    }, {
        key: 'renderRadialGradient',
        value: function renderRadialGradient(bounds, gradient) {
            var _this3 = this;

            var x = bounds.left + gradient.center.x;
            var y = bounds.top + gradient.center.y;

            var radialGradient = this.ctx.createRadialGradient(x, y, 0, x, y, gradient.radius.x);
            if (!radialGradient) {
                return;
            }

            addColorStops(gradient, radialGradient);
            this.ctx.fillStyle = radialGradient;

            if (gradient.radius.x !== gradient.radius.y) {
                // transforms for elliptical radial gradient
                var midX = bounds.left + 0.5 * bounds.width;
                var midY = bounds.top + 0.5 * bounds.height;
                var f = gradient.radius.y / gradient.radius.x;
                var invF = 1 / f;

                this.transform(midX, midY, [1, 0, 0, f, 0, 0], function () {
                    return _this3.ctx.fillRect(bounds.left, invF * (bounds.top - midY) + midY, bounds.width, bounds.height * invF);
                });
            } else {
                this.ctx.fillRect(bounds.left, bounds.top, bounds.width, bounds.height);
            }
        }
    }, {
        key: 'renderRepeat',
        value: function renderRepeat(path, image, imageSize, offsetX, offsetY) {
            this.path(path);
            this.ctx.fillStyle = this.ctx.createPattern(this.resizeImage(image, imageSize), 'repeat');
            this.ctx.translate(offsetX, offsetY);
            this.ctx.fill();
            this.ctx.translate(-offsetX, -offsetY);
        }
    }, {
        key: 'renderTextNode',
        value: function renderTextNode(textBounds, color, font, textDecoration, textShadows) {
            var _this4 = this;

            this.ctx.font = [font.fontStyle, font.fontVariant, font.fontWeight, font.fontSize, font.fontFamily].join(' ');

            textBounds.forEach(function (text) {
                _this4.ctx.fillStyle = color.toString();
                if (textShadows && text.text.trim().length) {
                    textShadows.slice(0).reverse().forEach(function (textShadow) {
                        _this4.ctx.shadowColor = textShadow.color.toString();
                        _this4.ctx.shadowOffsetX = textShadow.offsetX * _this4.options.scale;
                        _this4.ctx.shadowOffsetY = textShadow.offsetY * _this4.options.scale;
                        _this4.ctx.shadowBlur = textShadow.blur;

                        _this4.ctx.fillText(text.text, text.bounds.left, text.bounds.top + text.bounds.height);
                    });
                } else {
                    _this4.ctx.fillText(text.text, text.bounds.left, text.bounds.top + text.bounds.height);
                }

                if (textDecoration !== null) {
                    var textDecorationColor = textDecoration.textDecorationColor || color;
                    textDecoration.textDecorationLine.forEach(function (textDecorationLine) {
                        switch (textDecorationLine) {
                            case _textDecoration.TEXT_DECORATION_LINE.UNDERLINE:
                                // Draws a line at the baseline of the font
                                // TODO As some browsers display the line as more than 1px if the font-size is big,
                                // need to take that into account both in position and size
                                var _options$fontMetrics$ = _this4.options.fontMetrics.getMetrics(font),
                                    baseline = _options$fontMetrics$.baseline;

                                _this4.rectangle(text.bounds.left, Math.round(text.bounds.top + baseline), text.bounds.width, 1, textDecorationColor);
                                break;
                            case _textDecoration.TEXT_DECORATION_LINE.OVERLINE:
                                _this4.rectangle(text.bounds.left, Math.round(text.bounds.top), text.bounds.width, 1, textDecorationColor);
                                break;
                            case _textDecoration.TEXT_DECORATION_LINE.LINE_THROUGH:
                                // TODO try and find exact position for line-through
                                var _options$fontMetrics$2 = _this4.options.fontMetrics.getMetrics(font),
                                    middle = _options$fontMetrics$2.middle;

                                _this4.rectangle(text.bounds.left, Math.ceil(text.bounds.top + middle), text.bounds.width, 1, textDecorationColor);
                                break;
                        }
                    });
                }
            });
        }
    }, {
        key: 'resizeImage',
        value: function resizeImage(image, size) {
            if (image.width === size.width && image.height === size.height) {
                return image;
            }

            var canvas = this.canvas.ownerDocument.createElement('canvas');
            canvas.width = size.width;
            canvas.height = size.height;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, size.width, size.height);
            return canvas;
        }
    }, {
        key: 'setOpacity',
        value: function setOpacity(opacity) {
            this.ctx.globalAlpha = opacity;
        }
    }, {
        key: 'transform',
        value: function transform(offsetX, offsetY, matrix, callback) {
            this.ctx.save();
            this.ctx.translate(offsetX, offsetY);
            this.ctx.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
            this.ctx.translate(-offsetX, -offsetY);

            callback();

            this.ctx.restore();
        }
    }]);

    return CanvasRenderer;
}();

exports.default = CanvasRenderer;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Logger = function () {
    function Logger(enabled, id, start) {
        _classCallCheck(this, Logger);

        this.enabled = typeof window !== 'undefined' && enabled;
        this.start = start ? start : Date.now();
        this.id = id;
    }

    _createClass(Logger, [{
        key: 'child',
        value: function child(id) {
            return new Logger(this.enabled, id, this.start);
        }

        // eslint-disable-next-line flowtype/no-weak-types

    }, {
        key: 'log',
        value: function log() {
            if (this.enabled && window.console && window.console.log) {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                Function.prototype.bind.call(window.console.log, window.console).apply(window.console, [Date.now() - this.start + 'ms', this.id ? 'html2canvas (' + this.id + '):' : 'html2canvas:'].concat([].slice.call(args, 0)));
            }
        }

        // eslint-disable-next-line flowtype/no-weak-types

    }, {
        key: 'error',
        value: function error() {
            if (this.enabled && window.console && window.console.error) {
                for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    args[_key2] = arguments[_key2];
                }

                Function.prototype.bind.call(window.console.error, window.console).apply(window.console, [Date.now() - this.start + 'ms', this.id ? 'html2canvas (' + this.id + '):' : 'html2canvas:'].concat([].slice.call(args, 0)));
            }
        }
    }]);

    return Logger;
}();

exports.default = Logger;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parsePadding = exports.PADDING_SIDES = undefined;

var _Length = __webpack_require__(1);

var _Length2 = _interopRequireDefault(_Length);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PADDING_SIDES = exports.PADDING_SIDES = {
    TOP: 0,
    RIGHT: 1,
    BOTTOM: 2,
    LEFT: 3
};

var SIDES = ['top', 'right', 'bottom', 'left'];

var parsePadding = exports.parsePadding = function parsePadding(style) {
    return SIDES.map(function (side) {
        return new _Length2.default(style.getPropertyValue('padding-' + side));
    });
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var OVERFLOW_WRAP = exports.OVERFLOW_WRAP = {
    NORMAL: 0,
    BREAK_WORD: 1
};

var parseOverflowWrap = exports.parseOverflowWrap = function parseOverflowWrap(overflow) {
    switch (overflow) {
        case 'break-word':
            return OVERFLOW_WRAP.BREAK_WORD;
        case 'normal':
        default:
            return OVERFLOW_WRAP.NORMAL;
    }
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var POSITION = exports.POSITION = {
    STATIC: 0,
    RELATIVE: 1,
    ABSOLUTE: 2,
    FIXED: 3,
    STICKY: 4
};

var parsePosition = exports.parsePosition = function parsePosition(position) {
    switch (position) {
        case 'relative':
            return POSITION.RELATIVE;
        case 'absolute':
            return POSITION.ABSOLUTE;
        case 'fixed':
            return POSITION.FIXED;
        case 'sticky':
            return POSITION.STICKY;
    }

    return POSITION.STATIC;
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var TEXT_TRANSFORM = exports.TEXT_TRANSFORM = {
    NONE: 0,
    LOWERCASE: 1,
    UPPERCASE: 2,
    CAPITALIZE: 3
};

var parseTextTransform = exports.parseTextTransform = function parseTextTransform(textTransform) {
    switch (textTransform) {
        case 'uppercase':
            return TEXT_TRANSFORM.UPPERCASE;
        case 'lowercase':
            return TEXT_TRANSFORM.LOWERCASE;
        case 'capitalize':
            return TEXT_TRANSFORM.CAPITALIZE;
    }

    return TEXT_TRANSFORM.NONE;
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.reformatInputBounds = exports.inlineSelectElement = exports.inlineTextAreaElement = exports.inlineInputElement = exports.getInputBorderRadius = exports.INPUT_BACKGROUND = exports.INPUT_BORDERS = exports.INPUT_COLOR = undefined;

var _TextContainer = __webpack_require__(9);

var _TextContainer2 = _interopRequireDefault(_TextContainer);

var _background = __webpack_require__(5);

var _border = __webpack_require__(12);

var _Circle = __webpack_require__(50);

var _Circle2 = _interopRequireDefault(_Circle);

var _Vector = __webpack_require__(7);

var _Vector2 = _interopRequireDefault(_Vector);

var _Color = __webpack_require__(0);

var _Color2 = _interopRequireDefault(_Color);

var _Length = __webpack_require__(1);

var _Length2 = _interopRequireDefault(_Length);

var _Bounds = __webpack_require__(2);

var _TextBounds = __webpack_require__(22);

var _Util = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INPUT_COLOR = exports.INPUT_COLOR = new _Color2.default([42, 42, 42]);
var INPUT_BORDER_COLOR = new _Color2.default([165, 165, 165]);
var INPUT_BACKGROUND_COLOR = new _Color2.default([222, 222, 222]);
var INPUT_BORDER = {
    borderWidth: 1,
    borderColor: INPUT_BORDER_COLOR,
    borderStyle: _border.BORDER_STYLE.SOLID
};
var INPUT_BORDERS = exports.INPUT_BORDERS = [INPUT_BORDER, INPUT_BORDER, INPUT_BORDER, INPUT_BORDER];
var INPUT_BACKGROUND = exports.INPUT_BACKGROUND = {
    backgroundColor: INPUT_BACKGROUND_COLOR,
    backgroundImage: [],
    backgroundClip: _background.BACKGROUND_CLIP.PADDING_BOX,
    backgroundOrigin: _background.BACKGROUND_ORIGIN.PADDING_BOX
};

var RADIO_BORDER_RADIUS = new _Length2.default('50%');
var RADIO_BORDER_RADIUS_TUPLE = [RADIO_BORDER_RADIUS, RADIO_BORDER_RADIUS];
var INPUT_RADIO_BORDER_RADIUS = [RADIO_BORDER_RADIUS_TUPLE, RADIO_BORDER_RADIUS_TUPLE, RADIO_BORDER_RADIUS_TUPLE, RADIO_BORDER_RADIUS_TUPLE];

var CHECKBOX_BORDER_RADIUS = new _Length2.default('3px');
var CHECKBOX_BORDER_RADIUS_TUPLE = [CHECKBOX_BORDER_RADIUS, CHECKBOX_BORDER_RADIUS];
var INPUT_CHECKBOX_BORDER_RADIUS = [CHECKBOX_BORDER_RADIUS_TUPLE, CHECKBOX_BORDER_RADIUS_TUPLE, CHECKBOX_BORDER_RADIUS_TUPLE, CHECKBOX_BORDER_RADIUS_TUPLE];

var getInputBorderRadius = exports.getInputBorderRadius = function getInputBorderRadius(node) {
    return node.type === 'radio' ? INPUT_RADIO_BORDER_RADIUS : INPUT_CHECKBOX_BORDER_RADIUS;
};

var inlineInputElement = exports.inlineInputElement = function inlineInputElement(node, container) {
    if (node.type === 'radio' || node.type === 'checkbox') {
        if (node.checked) {
            var size = Math.min(container.bounds.width, container.bounds.height);
            container.childNodes.push(node.type === 'checkbox' ? [new _Vector2.default(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79), new _Vector2.default(container.bounds.left + size * 0.16, container.bounds.top + size * 0.5549), new _Vector2.default(container.bounds.left + size * 0.27347, container.bounds.top + size * 0.44071), new _Vector2.default(container.bounds.left + size * 0.39694, container.bounds.top + size * 0.5649), new _Vector2.default(container.bounds.left + size * 0.72983, container.bounds.top + size * 0.23), new _Vector2.default(container.bounds.left + size * 0.84, container.bounds.top + size * 0.34085), new _Vector2.default(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79)] : new _Circle2.default(container.bounds.left + size / 4, container.bounds.top + size / 4, size / 4));
        }
    } else {
        inlineFormElement(getInputValue(node), node, container, false);
    }
};

var inlineTextAreaElement = exports.inlineTextAreaElement = function inlineTextAreaElement(node, container) {
    inlineFormElement(node.value, node, container, true);
};

var inlineSelectElement = exports.inlineSelectElement = function inlineSelectElement(node, container) {
    var option = node.options[node.selectedIndex || 0];
    inlineFormElement(option ? option.text || '' : '', node, container, false);
};

var reformatInputBounds = exports.reformatInputBounds = function reformatInputBounds(bounds) {
    if (bounds.width > bounds.height) {
        bounds.left += (bounds.width - bounds.height) / 2;
        bounds.width = bounds.height;
    } else if (bounds.width < bounds.height) {
        bounds.top += (bounds.height - bounds.width) / 2;
        bounds.height = bounds.width;
    }
    return bounds;
};

var inlineFormElement = function inlineFormElement(value, node, container, allowLinebreak) {
    var body = node.ownerDocument.body;
    if (value.length > 0 && body) {
        var wrapper = node.ownerDocument.createElement('html2canvaswrapper');
        (0, _Util.copyCSSStyles)(node.ownerDocument.defaultView.getComputedStyle(node, null), wrapper);
        wrapper.style.position = 'absolute';
        wrapper.style.left = container.bounds.left + 'px';
        wrapper.style.top = container.bounds.top + 'px';
        if (!allowLinebreak) {
            wrapper.style.whiteSpace = 'nowrap';
        }
        var text = node.ownerDocument.createTextNode(value);
        wrapper.appendChild(text);
        body.appendChild(wrapper);
        container.childNodes.push(_TextContainer2.default.fromTextNode(text, container));
        body.removeChild(wrapper);
    }
};

var getInputValue = function getInputValue(node) {
    var value = node.type === 'password' ? new Array(node.value.length + 1).join('\u2022') : node.value;

    return value.length === 0 ? node.placeholder || '' : value;
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseTextBounds = exports.TextBounds = undefined;

var _Bounds = __webpack_require__(2);

var _textDecoration = __webpack_require__(11);

var _Feature = __webpack_require__(10);

var _Feature2 = _interopRequireDefault(_Feature);

var _Unicode = __webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TextBounds = exports.TextBounds = function TextBounds(text, bounds) {
    _classCallCheck(this, TextBounds);

    this.text = text;
    this.bounds = bounds;
};

var parseTextBounds = exports.parseTextBounds = function parseTextBounds(value, parent, node) {
    var letterRendering = parent.style.letterSpacing !== 0;
    var textList = letterRendering ? (0, _Unicode.toCodePoints)(value).map(function (i) {
        return (0, _Unicode.fromCodePoint)(i);
    }) : (0, _Unicode.breakWords)(value, parent);
    var length = textList.length;
    var defaultView = node.parentNode ? node.parentNode.ownerDocument.defaultView : null;
    var scrollX = defaultView ? defaultView.pageXOffset : 0;
    var scrollY = defaultView ? defaultView.pageYOffset : 0;
    var textBounds = [];
    var offset = 0;
    for (var i = 0; i < length; i++) {
        var text = textList[i];
        if (parent.style.textDecoration !== _textDecoration.TEXT_DECORATION.NONE || text.trim().length > 0) {
            if (_Feature2.default.SUPPORT_RANGE_BOUNDS) {
                textBounds.push(new TextBounds(text, getRangeBounds(node, offset, text.length, scrollX, scrollY)));
            } else {
                var replacementNode = node.splitText(text.length);
                textBounds.push(new TextBounds(text, getWrapperBounds(node, scrollX, scrollY)));
                node = replacementNode;
            }
        } else if (!_Feature2.default.SUPPORT_RANGE_BOUNDS) {
            node = node.splitText(text.length);
        }
        offset += text.length;
    }
    return textBounds;
};

var getWrapperBounds = function getWrapperBounds(node, scrollX, scrollY) {
    var wrapper = node.ownerDocument.createElement('html2canvaswrapper');
    wrapper.appendChild(node.cloneNode(true));
    var parentNode = node.parentNode;
    if (parentNode) {
        parentNode.replaceChild(wrapper, node);
        var bounds = (0, _Bounds.parseBounds)(wrapper, scrollX, scrollY);
        if (wrapper.firstChild) {
            parentNode.replaceChild(wrapper.firstChild, wrapper);
        }
        return bounds;
    }
    return new _Bounds.Bounds(0, 0, 0, 0);
};

var getRangeBounds = function getRangeBounds(node, offset, length, scrollX, scrollY) {
    var range = node.ownerDocument.createRange();
    range.setStart(node, offset);
    range.setEnd(node, offset + length);
    return _Bounds.Bounds.fromClientRect(range.getBoundingClientRect(), scrollX, scrollY);
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ForeignObjectRenderer = function () {
    function ForeignObjectRenderer(element) {
        _classCallCheck(this, ForeignObjectRenderer);

        this.element = element;
    }

    _createClass(ForeignObjectRenderer, [{
        key: 'render',
        value: function render(options) {
            var _this = this;

            this.options = options;
            this.canvas = document.createElement('canvas');
            this.ctx = this.canvas.getContext('2d');
            this.canvas.width = Math.floor(options.width) * options.scale;
            this.canvas.height = Math.floor(options.height) * options.scale;
            this.canvas.style.width = options.width + 'px';
            this.canvas.style.height = options.height + 'px';

            options.logger.log('ForeignObject renderer initialized (' + options.width + 'x' + options.height + ' at ' + options.x + ',' + options.y + ') with scale ' + options.scale);
            var svg = createForeignObjectSVG(Math.max(options.windowWidth, options.width) * options.scale, Math.max(options.windowHeight, options.height) * options.scale, options.scrollX * options.scale, options.scrollY * options.scale, this.element);

            return loadSerializedSVG(svg).then(function (img) {
                if (options.backgroundColor) {
                    _this.ctx.fillStyle = options.backgroundColor.toString();
                    _this.ctx.fillRect(0, 0, options.width * options.scale, options.height * options.scale);
                }

                _this.ctx.drawImage(img, -options.x * options.scale, -options.y * options.scale);
                return _this.canvas;
            });
        }
    }]);

    return ForeignObjectRenderer;
}();

exports.default = ForeignObjectRenderer;
var createForeignObjectSVG = exports.createForeignObjectSVG = function createForeignObjectSVG(width, height, x, y, node) {
    var xmlns = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(xmlns, 'svg');
    var foreignObject = document.createElementNS(xmlns, 'foreignObject');
    svg.setAttributeNS(null, 'width', width);
    svg.setAttributeNS(null, 'height', height);

    foreignObject.setAttributeNS(null, 'width', '100%');
    foreignObject.setAttributeNS(null, 'height', '100%');
    foreignObject.setAttributeNS(null, 'x', x);
    foreignObject.setAttributeNS(null, 'y', y);
    foreignObject.setAttributeNS(null, 'externalResourcesRequired', 'true');
    svg.appendChild(foreignObject);

    foreignObject.appendChild(node);

    return svg;
};

var loadSerializedSVG = exports.loadSerializedSVG = function loadSerializedSVG(svg) {
    return new Promise(function (resolve, reject) {
        var img = new Image();
        img.onload = function () {
            return resolve(img);
        };
        img.onerror = reject;

        img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(new XMLSerializer().serializeToString(svg));
    });
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.breakWords = exports.fromCodePoint = exports.toCodePoints = undefined;

var _cssLineBreak = __webpack_require__(46);

Object.defineProperty(exports, 'toCodePoints', {
    enumerable: true,
    get: function get() {
        return _cssLineBreak.toCodePoints;
    }
});
Object.defineProperty(exports, 'fromCodePoint', {
    enumerable: true,
    get: function get() {
        return _cssLineBreak.fromCodePoint;
    }
});

var _NodeContainer = __webpack_require__(3);

var _NodeContainer2 = _interopRequireDefault(_NodeContainer);

var _overflowWrap = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var breakWords = exports.breakWords = function breakWords(str, parent) {
    var breaker = (0, _cssLineBreak.LineBreaker)(str, {
        lineBreak: parent.style.lineBreak,
        wordBreak: parent.style.overflowWrap === _overflowWrap.OVERFLOW_WRAP.BREAK_WORD ? 'break-word' : parent.style.wordBreak
    });

    var words = [];
    var bk = void 0;

    while (!(bk = breaker.next()).done) {
        words.push(bk.value.slice());
    }

    return words;
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FontMetrics = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Util = __webpack_require__(4);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SAMPLE_TEXT = 'Hidden Text';

var FontMetrics = exports.FontMetrics = function () {
    function FontMetrics(document) {
        _classCallCheck(this, FontMetrics);

        this._data = {};
        this._document = document;
    }

    _createClass(FontMetrics, [{
        key: '_parseMetrics',
        value: function _parseMetrics(font) {
            var container = this._document.createElement('div');
            var img = this._document.createElement('img');
            var span = this._document.createElement('span');

            var body = this._document.body;
            if (!body) {
                throw new Error( true ? 'No document found for font metrics' : undefined);
            }

            container.style.visibility = 'hidden';
            container.style.fontFamily = font.fontFamily;
            container.style.fontSize = font.fontSize;
            container.style.margin = '0';
            container.style.padding = '0';

            body.appendChild(container);

            img.src = _Util.SMALL_IMAGE;
            img.width = 1;
            img.height = 1;

            img.style.margin = '0';
            img.style.padding = '0';
            img.style.verticalAlign = 'baseline';

            span.style.fontFamily = font.fontFamily;
            span.style.fontSize = font.fontSize;
            span.style.margin = '0';
            span.style.padding = '0';

            span.appendChild(this._document.createTextNode(SAMPLE_TEXT));
            container.appendChild(span);
            container.appendChild(img);
            var baseline = img.offsetTop - span.offsetTop + 2;

            container.removeChild(span);
            container.appendChild(this._document.createTextNode(SAMPLE_TEXT));

            container.style.lineHeight = 'normal';
            img.style.verticalAlign = 'super';

            var middle = img.offsetTop - container.offsetTop + 2;

            body.removeChild(container);

            return { baseline: baseline, middle: middle };
        }
    }, {
        key: 'getMetrics',
        value: function getMetrics(font) {
            var key = font.fontFamily + ' ' + font.fontSize;
            if (this._data[key] === undefined) {
                this._data[key] = this._parseMetrics(font);
            }

            return this._data[key];
        }
    }]);

    return FontMetrics;
}();

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Proxy = undefined;

var _Feature = __webpack_require__(10);

var _Feature2 = _interopRequireDefault(_Feature);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Proxy = exports.Proxy = function Proxy(src, options) {
    if (!options.proxy) {
        return Promise.reject( true ? 'No proxy defined' : undefined);
    }
    var proxy = options.proxy;

    return new Promise(function (resolve, reject) {
        var responseType = _Feature2.default.SUPPORT_CORS_XHR && _Feature2.default.SUPPORT_RESPONSE_TYPE ? 'blob' : 'text';
        var xhr = _Feature2.default.SUPPORT_CORS_XHR ? new XMLHttpRequest() : new XDomainRequest();
        xhr.onload = function () {
            if (xhr instanceof XMLHttpRequest) {
                if (xhr.status === 200) {
                    if (responseType === 'text') {
                        resolve(xhr.response);
                    } else {
                        var reader = new FileReader();
                        // $FlowFixMe
                        reader.addEventListener('load', function () {
                            return resolve(reader.result);
                        }, false);
                        // $FlowFixMe
                        reader.addEventListener('error', function (e) {
                            return reject(e);
                        }, false);
                        reader.readAsDataURL(xhr.response);
                    }
                } else {
                    reject( true ? 'Failed to proxy resource ' + src.substring(0, 256) + ' with status code ' + xhr.status : undefined);
                }
            } else {
                resolve(xhr.responseText);
            }
        };

        xhr.onerror = reject;
        xhr.open('GET', proxy + '?url=' + encodeURIComponent(src) + '&responseType=' + responseType);

        if (responseType !== 'text' && xhr instanceof XMLHttpRequest) {
            xhr.responseType = responseType;
        }

        if (options.imageTimeout) {
            var timeout = options.imageTimeout;
            xhr.timeout = timeout;
            xhr.ontimeout = function () {
                return reject( true ? 'Timed out (' + timeout + 'ms) proxying ' + src.substring(0, 256) : undefined);
            };
        }

        xhr.send();
    });
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _CanvasRenderer = __webpack_require__(15);

var _CanvasRenderer2 = _interopRequireDefault(_CanvasRenderer);

var _Logger = __webpack_require__(16);

var _Logger2 = _interopRequireDefault(_Logger);

var _Window = __webpack_require__(28);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var html2canvas = function html2canvas(element, conf) {
    var config = conf || {};
    var logger = new _Logger2.default(typeof config.logging === 'boolean' ? config.logging : true);
    logger.log('html2canvas ' + "1.0.0-alpha.12");

    if ( true && typeof config.onrendered === 'function') {
        logger.error('onrendered option is deprecated, html2canvas returns a Promise with the canvas as the value');
    }

    var ownerDocument = element.ownerDocument;
    if (!ownerDocument) {
        return Promise.reject('Provided element is not within a Document');
    }
    var defaultView = ownerDocument.defaultView;

    var defaultOptions = {
        async: true,
        allowTaint: false,
        backgroundColor: '#ffffff',
        imageTimeout: 15000,
        logging: true,
        proxy: null,
        removeContainer: true,
        foreignObjectRendering: false,
        scale: defaultView.devicePixelRatio || 1,
        target: new _CanvasRenderer2.default(config.canvas),
        useCORS: false,
        windowWidth: defaultView.innerWidth,
        windowHeight: defaultView.innerHeight,
        scrollX: defaultView.pageXOffset,
        scrollY: defaultView.pageYOffset
    };

    var result = (0, _Window.renderElement)(element, _extends({}, defaultOptions, config), logger);

    if (true) {
        return result.catch(function (e) {
            logger.error(e);
            throw e;
        });
    }
    return result;
};

html2canvas.CanvasRenderer = _CanvasRenderer2.default;

module.exports = html2canvas;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.renderElement = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _Logger = __webpack_require__(16);

var _Logger2 = _interopRequireDefault(_Logger);

var _NodeParser = __webpack_require__(29);

var _Renderer = __webpack_require__(51);

var _Renderer2 = _interopRequireDefault(_Renderer);

var _ForeignObjectRenderer = __webpack_require__(23);

var _ForeignObjectRenderer2 = _interopRequireDefault(_ForeignObjectRenderer);

var _Feature = __webpack_require__(10);

var _Feature2 = _interopRequireDefault(_Feature);

var _Bounds = __webpack_require__(2);

var _Clone = __webpack_require__(54);

var _Font = __webpack_require__(25);

var _Color = __webpack_require__(0);

var _Color2 = _interopRequireDefault(_Color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderElement = exports.renderElement = function renderElement(element, options, logger) {
    var ownerDocument = element.ownerDocument;

    var windowBounds = new _Bounds.Bounds(options.scrollX, options.scrollY, options.windowWidth, options.windowHeight);

    // http://www.w3.org/TR/css3-background/#special-backgrounds
    var documentBackgroundColor = ownerDocument.documentElement ? new _Color2.default(getComputedStyle(ownerDocument.documentElement).backgroundColor) : _Color.TRANSPARENT;
    var bodyBackgroundColor = ownerDocument.body ? new _Color2.default(getComputedStyle(ownerDocument.body).backgroundColor) : _Color.TRANSPARENT;

    var backgroundColor = element === ownerDocument.documentElement ? documentBackgroundColor.isTransparent() ? bodyBackgroundColor.isTransparent() ? options.backgroundColor ? new _Color2.default(options.backgroundColor) : null : bodyBackgroundColor : documentBackgroundColor : options.backgroundColor ? new _Color2.default(options.backgroundColor) : null;

    return (options.foreignObjectRendering ? // $FlowFixMe
    _Feature2.default.SUPPORT_FOREIGNOBJECT_DRAWING : Promise.resolve(false)).then(function (supportForeignObject) {
        return supportForeignObject ? function (cloner) {
            if (true) {
                logger.log('Document cloned, using foreignObject rendering');
            }

            return cloner.inlineFonts(ownerDocument).then(function () {
                return cloner.resourceLoader.ready();
            }).then(function () {
                var renderer = new _ForeignObjectRenderer2.default(cloner.documentElement);

                var defaultView = ownerDocument.defaultView;
                var scrollX = defaultView.pageXOffset;
                var scrollY = defaultView.pageYOffset;

                var isDocument = element.tagName === 'HTML' || element.tagName === 'BODY';

                var _ref = isDocument ? (0, _Bounds.parseDocumentSize)(ownerDocument) : (0, _Bounds.parseBounds)(element, scrollX, scrollY),
                    width = _ref.width,
                    height = _ref.height,
                    left = _ref.left,
                    top = _ref.top;

                return renderer.render({
                    backgroundColor: backgroundColor,
                    logger: logger,
                    scale: options.scale,
                    x: typeof options.x === 'number' ? options.x : left,
                    y: typeof options.y === 'number' ? options.y : top,
                    width: typeof options.width === 'number' ? options.width : Math.ceil(width),
                    height: typeof options.height === 'number' ? options.height : Math.ceil(height),
                    windowWidth: options.windowWidth,
                    windowHeight: options.windowHeight,
                    scrollX: options.scrollX,
                    scrollY: options.scrollY
                });
            });
        }(new _Clone.DocumentCloner(element, options, logger, true, renderElement)) : (0, _Clone.cloneWindow)(ownerDocument, windowBounds, element, options, logger, renderElement).then(function (_ref2) {
            var _ref3 = _slicedToArray(_ref2, 3),
                container = _ref3[0],
                clonedElement = _ref3[1],
                resourceLoader = _ref3[2];

            if (true) {
                logger.log('Document cloned, using computed rendering');
            }

            var stack = (0, _NodeParser.NodeParser)(clonedElement, resourceLoader, logger);
            var clonedDocument = clonedElement.ownerDocument;

            if (backgroundColor === stack.container.style.background.backgroundColor) {
                stack.container.style.background.backgroundColor = _Color.TRANSPARENT;
            }

            return resourceLoader.ready().then(function (imageStore) {
                var fontMetrics = new _Font.FontMetrics(clonedDocument);
                if (true) {
                    logger.log('Starting renderer');
                }

                var defaultView = clonedDocument.defaultView;
                var scrollX = defaultView.pageXOffset;
                var scrollY = defaultView.pageYOffset;

                var isDocument = clonedElement.tagName === 'HTML' || clonedElement.tagName === 'BODY';

                var _ref4 = isDocument ? (0, _Bounds.parseDocumentSize)(ownerDocument) : (0, _Bounds.parseBounds)(clonedElement, scrollX, scrollY),
                    width = _ref4.width,
                    height = _ref4.height,
                    left = _ref4.left,
                    top = _ref4.top;

                var renderOptions = {
                    backgroundColor: backgroundColor,
                    fontMetrics: fontMetrics,
                    imageStore: imageStore,
                    logger: logger,
                    scale: options.scale,
                    x: typeof options.x === 'number' ? options.x : left,
                    y: typeof options.y === 'number' ? options.y : top,
                    width: typeof options.width === 'number' ? options.width : Math.ceil(width),
                    height: typeof options.height === 'number' ? options.height : Math.ceil(height)
                };

                if (Array.isArray(options.target)) {
                    return Promise.all(options.target.map(function (target) {
                        var renderer = new _Renderer2.default(target, renderOptions);
                        return renderer.render(stack);
                    }));
                } else {
                    var renderer = new _Renderer2.default(options.target, renderOptions);
                    var canvas = renderer.render(stack);
                    if (options.removeContainer === true) {
                        if (container.parentNode) {
                            container.parentNode.removeChild(container);
                        } else if (true) {
                            logger.log('Cannot detach cloned iframe as it is not in the DOM anymore');
                        }
                    }

                    return canvas;
                }
            });
        });
    });
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NodeParser = undefined;

var _StackingContext = __webpack_require__(30);

var _StackingContext2 = _interopRequireDefault(_StackingContext);

var _NodeContainer = __webpack_require__(3);

var _NodeContainer2 = _interopRequireDefault(_NodeContainer);

var _TextContainer = __webpack_require__(9);

var _TextContainer2 = _interopRequireDefault(_TextContainer);

var _Input = __webpack_require__(21);

var _ListItem = __webpack_require__(14);

var _listStyle = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NodeParser = exports.NodeParser = function NodeParser(node, resourceLoader, logger) {
    if (true) {
        logger.log('Starting node parsing');
    }

    var index = 0;

    var container = new _NodeContainer2.default(node, null, resourceLoader, index++);
    var stack = new _StackingContext2.default(container, null, true);

    parseNodeTree(node, container, stack, resourceLoader, index);

    if (true) {
        logger.log('Finished parsing node tree');
    }

    return stack;
};

var IGNORED_NODE_NAMES = ['SCRIPT', 'HEAD', 'TITLE', 'OBJECT', 'BR', 'OPTION'];

var parseNodeTree = function parseNodeTree(node, parent, stack, resourceLoader, index) {
    if ( true && index > 50000) {
        throw new Error('Recursion error while parsing node tree');
    }

    for (var childNode = node.firstChild, nextNode; childNode; childNode = nextNode) {
        nextNode = childNode.nextSibling;
        var defaultView = childNode.ownerDocument.defaultView;
        if (childNode instanceof defaultView.Text || childNode instanceof Text || defaultView.parent && childNode instanceof defaultView.parent.Text) {
            if (childNode.data.trim().length > 0) {
                parent.childNodes.push(_TextContainer2.default.fromTextNode(childNode, parent));
            }
        } else if (childNode instanceof defaultView.HTMLElement || childNode instanceof HTMLElement || defaultView.parent && childNode instanceof defaultView.parent.HTMLElement) {
            if (IGNORED_NODE_NAMES.indexOf(childNode.nodeName) === -1) {
                var container = new _NodeContainer2.default(childNode, parent, resourceLoader, index++);
                if (container.isVisible()) {
                    if (childNode.tagName === 'INPUT') {
                        // $FlowFixMe
                        (0, _Input.inlineInputElement)(childNode, container);
                    } else if (childNode.tagName === 'TEXTAREA') {
                        // $FlowFixMe
                        (0, _Input.inlineTextAreaElement)(childNode, container);
                    } else if (childNode.tagName === 'SELECT') {
                        // $FlowFixMe
                        (0, _Input.inlineSelectElement)(childNode, container);
                    } else if (container.style.listStyle && container.style.listStyle.listStyleType !== _listStyle.LIST_STYLE_TYPE.NONE) {
                        (0, _ListItem.inlineListItemElement)(childNode, container, resourceLoader);
                    }

                    var SHOULD_TRAVERSE_CHILDREN = childNode.tagName !== 'TEXTAREA';
                    var treatAsRealStackingContext = createsRealStackingContext(container, childNode);
                    if (treatAsRealStackingContext || createsStackingContext(container)) {
                        // for treatAsRealStackingContext:false, any positioned descendants and descendants
                        // which actually create a new stacking context should be considered part of the parent stacking context
                        var parentStack = treatAsRealStackingContext || container.isPositioned() ? stack.getRealParentStackingContext() : stack;
                        var childStack = new _StackingContext2.default(container, parentStack, treatAsRealStackingContext);
                        parentStack.contexts.push(childStack);
                        if (SHOULD_TRAVERSE_CHILDREN) {
                            parseNodeTree(childNode, container, childStack, resourceLoader, index);
                        }
                    } else {
                        stack.children.push(container);
                        if (SHOULD_TRAVERSE_CHILDREN) {
                            parseNodeTree(childNode, container, stack, resourceLoader, index);
                        }
                    }
                }
            }
        } else if (childNode instanceof defaultView.SVGSVGElement || childNode instanceof SVGSVGElement || defaultView.parent && childNode instanceof defaultView.parent.SVGSVGElement) {
            var _container = new _NodeContainer2.default(childNode, parent, resourceLoader, index++);
            var _treatAsRealStackingContext = createsRealStackingContext(_container, childNode);
            if (_treatAsRealStackingContext || createsStackingContext(_container)) {
                // for treatAsRealStackingContext:false, any positioned descendants and descendants
                // which actually create a new stacking context should be considered part of the parent stacking context
                var _parentStack = _treatAsRealStackingContext || _container.isPositioned() ? stack.getRealParentStackingContext() : stack;
                var _childStack = new _StackingContext2.default(_container, _parentStack, _treatAsRealStackingContext);
                _parentStack.contexts.push(_childStack);
            } else {
                stack.children.push(_container);
            }
        }
    }
};

var createsRealStackingContext = function createsRealStackingContext(container, node) {
    return container.isRootElement() || container.isPositionedWithZIndex() || container.style.opacity < 1 || container.isTransformed() || isBodyWithTransparentRoot(container, node);
};

var createsStackingContext = function createsStackingContext(container) {
    return container.isPositioned() || container.isFloating();
};

var isBodyWithTransparentRoot = function isBodyWithTransparentRoot(container, node) {
    return node.nodeName === 'BODY' && container.parent instanceof _NodeContainer2.default && container.parent.style.background.backgroundColor.isTransparent();
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _NodeContainer = __webpack_require__(3);

var _NodeContainer2 = _interopRequireDefault(_NodeContainer);

var _position = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StackingContext = function () {
    function StackingContext(container, parent, treatAsRealStackingContext) {
        _classCallCheck(this, StackingContext);

        this.container = container;
        this.parent = parent;
        this.contexts = [];
        this.children = [];
        this.treatAsRealStackingContext = treatAsRealStackingContext;
    }

    _createClass(StackingContext, [{
        key: 'getOpacity',
        value: function getOpacity() {
            return this.parent ? this.container.style.opacity * this.parent.getOpacity() : this.container.style.opacity;
        }
    }, {
        key: 'getRealParentStackingContext',
        value: function getRealParentStackingContext() {
            return !this.parent || this.treatAsRealStackingContext ? this : this.parent.getRealParentStackingContext();
        }
    }]);

    return StackingContext;
}();

exports.default = StackingContext;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Size = function Size(width, height) {
    _classCallCheck(this, Size);

    this.width = width;
    this.height = height;
};

exports.default = Size;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Path = __webpack_require__(6);

var _Vector = __webpack_require__(7);

var _Vector2 = _interopRequireDefault(_Vector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lerp = function lerp(a, b, t) {
    return new _Vector2.default(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t);
};

var BezierCurve = function () {
    function BezierCurve(start, startControl, endControl, end) {
        _classCallCheck(this, BezierCurve);

        this.type = _Path.PATH.BEZIER_CURVE;
        this.start = start;
        this.startControl = startControl;
        this.endControl = endControl;
        this.end = end;
    }

    _createClass(BezierCurve, [{
        key: 'subdivide',
        value: function subdivide(t, firstHalf) {
            var ab = lerp(this.start, this.startControl, t);
            var bc = lerp(this.startControl, this.endControl, t);
            var cd = lerp(this.endControl, this.end, t);
            var abbc = lerp(ab, bc, t);
            var bccd = lerp(bc, cd, t);
            var dest = lerp(abbc, bccd, t);
            return firstHalf ? new BezierCurve(this.start, ab, abbc, dest) : new BezierCurve(dest, bccd, cd, this.end);
        }
    }, {
        key: 'reverse',
        value: function reverse() {
            return new BezierCurve(this.end, this.endControl, this.startControl, this.start);
        }
    }]);

    return BezierCurve;
}();

exports.default = BezierCurve;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseBorderRadius = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _Length = __webpack_require__(1);

var _Length2 = _interopRequireDefault(_Length);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SIDES = ['top-left', 'top-right', 'bottom-right', 'bottom-left'];

var parseBorderRadius = exports.parseBorderRadius = function parseBorderRadius(style) {
    return SIDES.map(function (side) {
        var value = style.getPropertyValue('border-' + side + '-radius');

        var _value$split$map = value.split(' ').map(_Length2.default.create),
            _value$split$map2 = _slicedToArray(_value$split$map, 2),
            horizontal = _value$split$map2[0],
            vertical = _value$split$map2[1];

        return typeof vertical === 'undefined' ? [horizontal, horizontal] : [horizontal, vertical];
    });
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var DISPLAY = exports.DISPLAY = {
    NONE: 1 << 0,
    BLOCK: 1 << 1,
    INLINE: 1 << 2,
    RUN_IN: 1 << 3,
    FLOW: 1 << 4,
    FLOW_ROOT: 1 << 5,
    TABLE: 1 << 6,
    FLEX: 1 << 7,
    GRID: 1 << 8,
    RUBY: 1 << 9,
    SUBGRID: 1 << 10,
    LIST_ITEM: 1 << 11,
    TABLE_ROW_GROUP: 1 << 12,
    TABLE_HEADER_GROUP: 1 << 13,
    TABLE_FOOTER_GROUP: 1 << 14,
    TABLE_ROW: 1 << 15,
    TABLE_CELL: 1 << 16,
    TABLE_COLUMN_GROUP: 1 << 17,
    TABLE_COLUMN: 1 << 18,
    TABLE_CAPTION: 1 << 19,
    RUBY_BASE: 1 << 20,
    RUBY_TEXT: 1 << 21,
    RUBY_BASE_CONTAINER: 1 << 22,
    RUBY_TEXT_CONTAINER: 1 << 23,
    CONTENTS: 1 << 24,
    INLINE_BLOCK: 1 << 25,
    INLINE_LIST_ITEM: 1 << 26,
    INLINE_TABLE: 1 << 27,
    INLINE_FLEX: 1 << 28,
    INLINE_GRID: 1 << 29
};

var parseDisplayValue = function parseDisplayValue(display) {
    switch (display) {
        case 'block':
            return DISPLAY.BLOCK;
        case 'inline':
            return DISPLAY.INLINE;
        case 'run-in':
            return DISPLAY.RUN_IN;
        case 'flow':
            return DISPLAY.FLOW;
        case 'flow-root':
            return DISPLAY.FLOW_ROOT;
        case 'table':
            return DISPLAY.TABLE;
        case 'flex':
            return DISPLAY.FLEX;
        case 'grid':
            return DISPLAY.GRID;
        case 'ruby':
            return DISPLAY.RUBY;
        case 'subgrid':
            return DISPLAY.SUBGRID;
        case 'list-item':
            return DISPLAY.LIST_ITEM;
        case 'table-row-group':
            return DISPLAY.TABLE_ROW_GROUP;
        case 'table-header-group':
            return DISPLAY.TABLE_HEADER_GROUP;
        case 'table-footer-group':
            return DISPLAY.TABLE_FOOTER_GROUP;
        case 'table-row':
            return DISPLAY.TABLE_ROW;
        case 'table-cell':
            return DISPLAY.TABLE_CELL;
        case 'table-column-group':
            return DISPLAY.TABLE_COLUMN_GROUP;
        case 'table-column':
            return DISPLAY.TABLE_COLUMN;
        case 'table-caption':
            return DISPLAY.TABLE_CAPTION;
        case 'ruby-base':
            return DISPLAY.RUBY_BASE;
        case 'ruby-text':
            return DISPLAY.RUBY_TEXT;
        case 'ruby-base-container':
            return DISPLAY.RUBY_BASE_CONTAINER;
        case 'ruby-text-container':
            return DISPLAY.RUBY_TEXT_CONTAINER;
        case 'contents':
            return DISPLAY.CONTENTS;
        case 'inline-block':
            return DISPLAY.INLINE_BLOCK;
        case 'inline-list-item':
            return DISPLAY.INLINE_LIST_ITEM;
        case 'inline-table':
            return DISPLAY.INLINE_TABLE;
        case 'inline-flex':
            return DISPLAY.INLINE_FLEX;
        case 'inline-grid':
            return DISPLAY.INLINE_GRID;
    }

    return DISPLAY.NONE;
};

var setDisplayBit = function setDisplayBit(bit, display) {
    return bit | parseDisplayValue(display);
};

var parseDisplay = exports.parseDisplay = function parseDisplay(display) {
    return display.split(' ').reduce(setDisplayBit, 0);
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var FLOAT = exports.FLOAT = {
    NONE: 0,
    LEFT: 1,
    RIGHT: 2,
    INLINE_START: 3,
    INLINE_END: 4
};

var parseCSSFloat = exports.parseCSSFloat = function parseCSSFloat(float) {
    switch (float) {
        case 'left':
            return FLOAT.LEFT;
        case 'right':
            return FLOAT.RIGHT;
        case 'inline-start':
            return FLOAT.INLINE_START;
        case 'inline-end':
            return FLOAT.INLINE_END;
    }
    return FLOAT.NONE;
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


var parseFontWeight = function parseFontWeight(weight) {
    switch (weight) {
        case 'normal':
            return 400;
        case 'bold':
            return 700;
    }

    var value = parseInt(weight, 10);
    return isNaN(value) ? 400 : value;
};

var parseFont = exports.parseFont = function parseFont(style) {
    var fontFamily = style.fontFamily;
    var fontSize = style.fontSize;
    var fontStyle = style.fontStyle;
    var fontVariant = style.fontVariant;
    var fontWeight = parseFontWeight(style.fontWeight);

    return {
        fontFamily: fontFamily,
        fontSize: fontSize,
        fontStyle: fontStyle,
        fontVariant: fontVariant,
        fontWeight: fontWeight
    };
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var parseLetterSpacing = exports.parseLetterSpacing = function parseLetterSpacing(letterSpacing) {
    if (letterSpacing === 'normal') {
        return 0;
    }
    var value = parseFloat(letterSpacing);
    return isNaN(value) ? 0 : value;
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var LINE_BREAK = exports.LINE_BREAK = {
    NORMAL: 'normal',
    STRICT: 'strict'
};

var parseLineBreak = exports.parseLineBreak = function parseLineBreak(wordBreak) {
    switch (wordBreak) {
        case 'strict':
            return LINE_BREAK.STRICT;
        case 'normal':
        default:
            return LINE_BREAK.NORMAL;
    }
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseMargin = undefined;

var _Length = __webpack_require__(1);

var _Length2 = _interopRequireDefault(_Length);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SIDES = ['top', 'right', 'bottom', 'left'];

var parseMargin = exports.parseMargin = function parseMargin(style) {
    return SIDES.map(function (side) {
        return new _Length2.default(style.getPropertyValue('margin-' + side));
    });
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var OVERFLOW = exports.OVERFLOW = {
    VISIBLE: 0,
    HIDDEN: 1,
    SCROLL: 2,
    AUTO: 3
};

var parseOverflow = exports.parseOverflow = function parseOverflow(overflow) {
    switch (overflow) {
        case 'hidden':
            return OVERFLOW.HIDDEN;
        case 'scroll':
            return OVERFLOW.SCROLL;
        case 'auto':
            return OVERFLOW.AUTO;
        case 'visible':
        default:
            return OVERFLOW.VISIBLE;
    }
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseTextShadow = undefined;

var _Color = __webpack_require__(0);

var _Color2 = _interopRequireDefault(_Color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NUMBER = /^([+-]|\d|\.)$/i;

var parseTextShadow = exports.parseTextShadow = function parseTextShadow(textShadow) {
    if (textShadow === 'none' || typeof textShadow !== 'string') {
        return null;
    }

    var currentValue = '';
    var isLength = false;
    var values = [];
    var shadows = [];
    var numParens = 0;
    var color = null;

    var appendValue = function appendValue() {
        if (currentValue.length) {
            if (isLength) {
                values.push(parseFloat(currentValue));
            } else {
                color = new _Color2.default(currentValue);
            }
        }
        isLength = false;
        currentValue = '';
    };

    var appendShadow = function appendShadow() {
        if (values.length && color !== null) {
            shadows.push({
                color: color,
                offsetX: values[0] || 0,
                offsetY: values[1] || 0,
                blur: values[2] || 0
            });
        }
        values.splice(0, values.length);
        color = null;
    };

    for (var i = 0; i < textShadow.length; i++) {
        var c = textShadow[i];
        switch (c) {
            case '(':
                currentValue += c;
                numParens++;
                break;
            case ')':
                currentValue += c;
                numParens--;
                break;
            case ',':
                if (numParens === 0) {
                    appendValue();
                    appendShadow();
                } else {
                    currentValue += c;
                }
                break;
            case ' ':
                if (numParens === 0) {
                    appendValue();
                } else {
                    currentValue += c;
                }
                break;
            default:
                if (currentValue.length === 0 && NUMBER.test(c)) {
                    isLength = true;
                }
                currentValue += c;
        }
    }

    appendValue();
    appendShadow();

    if (shadows.length === 0) {
        return null;
    }

    return shadows;
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseTransform = undefined;

var _Length = __webpack_require__(1);

var _Length2 = _interopRequireDefault(_Length);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toFloat = function toFloat(s) {
    return parseFloat(s.trim());
};

var MATRIX = /(matrix|matrix3d)\((.+)\)/;

var parseTransform = exports.parseTransform = function parseTransform(style) {
    var transform = parseTransformMatrix(style.transform || style.webkitTransform || style.mozTransform ||
    // $FlowFixMe
    style.msTransform ||
    // $FlowFixMe
    style.oTransform);
    if (transform === null) {
        return null;
    }

    return {
        transform: transform,
        transformOrigin: parseTransformOrigin(style.transformOrigin || style.webkitTransformOrigin || style.mozTransformOrigin ||
        // $FlowFixMe
        style.msTransformOrigin ||
        // $FlowFixMe
        style.oTransformOrigin)
    };
};

// $FlowFixMe
var parseTransformOrigin = function parseTransformOrigin(origin) {
    if (typeof origin !== 'string') {
        var v = new _Length2.default('0');
        return [v, v];
    }
    var values = origin.split(' ').map(_Length2.default.create);
    return [values[0], values[1]];
};

// $FlowFixMe
var parseTransformMatrix = function parseTransformMatrix(transform) {
    if (transform === 'none' || typeof transform !== 'string') {
        return null;
    }

    var match = transform.match(MATRIX);
    if (match) {
        if (match[1] === 'matrix') {
            var matrix = match[2].split(',').map(toFloat);
            return [matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]];
        } else {
            var matrix3d = match[2].split(',').map(toFloat);
            return [matrix3d[0], matrix3d[1], matrix3d[4], matrix3d[5], matrix3d[12], matrix3d[13]];
        }
    }
    return null;
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var VISIBILITY = exports.VISIBILITY = {
    VISIBLE: 0,
    HIDDEN: 1,
    COLLAPSE: 2
};

var parseVisibility = exports.parseVisibility = function parseVisibility(visibility) {
    switch (visibility) {
        case 'hidden':
            return VISIBILITY.HIDDEN;
        case 'collapse':
            return VISIBILITY.COLLAPSE;
        case 'visible':
        default:
            return VISIBILITY.VISIBLE;
    }
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var WORD_BREAK = exports.WORD_BREAK = {
    NORMAL: 'normal',
    BREAK_ALL: 'break-all',
    KEEP_ALL: 'keep-all'
};

var parseWordBreak = exports.parseWordBreak = function parseWordBreak(wordBreak) {
    switch (wordBreak) {
        case 'break-all':
            return WORD_BREAK.BREAK_ALL;
        case 'keep-all':
            return WORD_BREAK.KEEP_ALL;
        case 'normal':
        default:
            return WORD_BREAK.NORMAL;
    }
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var parseZIndex = exports.parseZIndex = function parseZIndex(zIndex) {
    var auto = zIndex === 'auto';
    return {
        auto: auto,
        order: auto ? 0 : parseInt(zIndex, 10)
    };
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Util = __webpack_require__(13);

Object.defineProperty(exports, 'toCodePoints', {
  enumerable: true,
  get: function get() {
    return _Util.toCodePoints;
  }
});
Object.defineProperty(exports, 'fromCodePoint', {
  enumerable: true,
  get: function get() {
    return _Util.fromCodePoint;
  }
});

var _LineBreak = __webpack_require__(47);

Object.defineProperty(exports, 'LineBreaker', {
  enumerable: true,
  get: function get() {
    return _LineBreak.LineBreaker;
  }
});

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LineBreaker = exports.inlineBreakOpportunities = exports.lineBreakAtIndex = exports.codePointsToCharacterClasses = exports.UnicodeTrie = exports.BREAK_ALLOWED = exports.BREAK_NOT_ALLOWED = exports.BREAK_MANDATORY = exports.classes = exports.LETTER_NUMBER_MODIFIER = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _Trie = __webpack_require__(48);

var _linebreakTrie = __webpack_require__(49);

var _linebreakTrie2 = _interopRequireDefault(_linebreakTrie);

var _Util = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LETTER_NUMBER_MODIFIER = exports.LETTER_NUMBER_MODIFIER = 50;

// Non-tailorable Line Breaking Classes
var BK = 1; //  Cause a line break (after)
var CR = 2; //  Cause a line break (after), except between CR and LF
var LF = 3; //  Cause a line break (after)
var CM = 4; //  Prohibit a line break between the character and the preceding character
var NL = 5; //  Cause a line break (after)
var SG = 6; //  Do not occur in well-formed text
var WJ = 7; //  Prohibit line breaks before and after
var ZW = 8; //  Provide a break opportunity
var GL = 9; //  Prohibit line breaks before and after
var SP = 10; // Enable indirect line breaks
var ZWJ = 11; // Prohibit line breaks within joiner sequences
// Break Opportunities
var B2 = 12; //  Provide a line break opportunity before and after the character
var BA = 13; //  Generally provide a line break opportunity after the character
var BB = 14; //  Generally provide a line break opportunity before the character
var HY = 15; //  Provide a line break opportunity after the character, except in numeric context
var CB = 16; //   Provide a line break opportunity contingent on additional information
// Characters Prohibiting Certain Breaks
var CL = 17; //  Prohibit line breaks before
var CP = 18; //  Prohibit line breaks before
var EX = 19; //  Prohibit line breaks before
var IN = 20; //  Allow only indirect line breaks between pairs
var NS = 21; //  Allow only indirect line breaks before
var OP = 22; //  Prohibit line breaks after
var QU = 23; //  Act like they are both opening and closing
// Numeric Context
var IS = 24; //  Prevent breaks after any and before numeric
var NU = 25; //  Form numeric expressions for line breaking purposes
var PO = 26; //  Do not break following a numeric expression
var PR = 27; //  Do not break in front of a numeric expression
var SY = 28; //  Prevent a break before; and allow a break after
// Other Characters
var AI = 29; //  Act like AL when the resolvedEAW is N; otherwise; act as ID
var AL = 30; //  Are alphabetic characters or symbols that are used with alphabetic characters
var CJ = 31; //  Treat as NS or ID for strict or normal breaking.
var EB = 32; //  Do not break from following Emoji Modifier
var EM = 33; //  Do not break from preceding Emoji Base
var H2 = 34; //  Form Korean syllable blocks
var H3 = 35; //  Form Korean syllable blocks
var HL = 36; //  Do not break around a following hyphen; otherwise act as Alphabetic
var ID = 37; //  Break before or after; except in some numeric context
var JL = 38; //  Form Korean syllable blocks
var JV = 39; //  Form Korean syllable blocks
var JT = 40; //  Form Korean syllable blocks
var RI = 41; //  Keep pairs together. For pairs; break before and after other classes
var SA = 42; //  Provide a line break opportunity contingent on additional, language-specific context analysis
var XX = 43; //  Have as yet unknown line breaking behavior or unassigned code positions

var classes = exports.classes = {
    BK: BK,
    CR: CR,
    LF: LF,
    CM: CM,
    NL: NL,
    SG: SG,
    WJ: WJ,
    ZW: ZW,
    GL: GL,
    SP: SP,
    ZWJ: ZWJ,
    B2: B2,
    BA: BA,
    BB: BB,
    HY: HY,
    CB: CB,
    CL: CL,
    CP: CP,
    EX: EX,
    IN: IN,
    NS: NS,
    OP: OP,
    QU: QU,
    IS: IS,
    NU: NU,
    PO: PO,
    PR: PR,
    SY: SY,
    AI: AI,
    AL: AL,
    CJ: CJ,
    EB: EB,
    EM: EM,
    H2: H2,
    H3: H3,
    HL: HL,
    ID: ID,
    JL: JL,
    JV: JV,
    JT: JT,
    RI: RI,
    SA: SA,
    XX: XX
};

var BREAK_MANDATORY = exports.BREAK_MANDATORY = '!';
var BREAK_NOT_ALLOWED = exports.BREAK_NOT_ALLOWED = '×';
var BREAK_ALLOWED = exports.BREAK_ALLOWED = '÷';
var UnicodeTrie = exports.UnicodeTrie = (0, _Trie.createTrieFromBase64)(_linebreakTrie2.default);

var ALPHABETICS = [AL, HL];
var HARD_LINE_BREAKS = [BK, CR, LF, NL];
var SPACE = [SP, ZW];
var PREFIX_POSTFIX = [PR, PO];
var LINE_BREAKS = HARD_LINE_BREAKS.concat(SPACE);
var KOREAN_SYLLABLE_BLOCK = [JL, JV, JT, H2, H3];
var HYPHEN = [HY, BA];

var codePointsToCharacterClasses = exports.codePointsToCharacterClasses = function codePointsToCharacterClasses(codePoints) {
    var lineBreak = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'strict';

    var types = [];
    var indicies = [];
    var categories = [];
    codePoints.forEach(function (codePoint, index) {
        var classType = UnicodeTrie.get(codePoint);
        if (classType > LETTER_NUMBER_MODIFIER) {
            categories.push(true);
            classType -= LETTER_NUMBER_MODIFIER;
        } else {
            categories.push(false);
        }

        if (['normal', 'auto', 'loose'].indexOf(lineBreak) !== -1) {
            // U+2010, – U+2013, 〜 U+301C, ゠ U+30A0
            if ([0x2010, 0x2013, 0x301c, 0x30a0].indexOf(codePoint) !== -1) {
                indicies.push(index);
                return types.push(CB);
            }
        }

        if (classType === CM || classType === ZWJ) {
            // LB10 Treat any remaining combining mark or ZWJ as AL.
            if (index === 0) {
                indicies.push(index);
                return types.push(AL);
            }

            // LB9 Do not break a combining character sequence; treat it as if it has the line breaking class of
            // the base character in all of the following rules. Treat ZWJ as if it were CM.
            var prev = types[index - 1];
            if (LINE_BREAKS.indexOf(prev) === -1) {
                indicies.push(indicies[index - 1]);
                return types.push(prev);
            }
            indicies.push(index);
            return types.push(AL);
        }

        indicies.push(index);

        if (classType === CJ) {
            return types.push(lineBreak === 'strict' ? NS : ID);
        }

        if (classType === SA) {
            return types.push(AL);
        }

        if (classType === AI) {
            return types.push(AL);
        }

        // For supplementary characters, a useful default is to treat characters in the range 10000..1FFFD as AL
        // and characters in the ranges 20000..2FFFD and 30000..3FFFD as ID, until the implementation can be revised
        // to take into account the actual line breaking properties for these characters.
        if (classType === XX) {
            if (codePoint >= 0x20000 && codePoint <= 0x2fffd || codePoint >= 0x30000 && codePoint <= 0x3fffd) {
                return types.push(ID);
            } else {
                return types.push(AL);
            }
        }

        types.push(classType);
    });

    return [indicies, types, categories];
};

var isAdjacentWithSpaceIgnored = function isAdjacentWithSpaceIgnored(a, b, currentIndex, classTypes) {
    var current = classTypes[currentIndex];
    if (Array.isArray(a) ? a.indexOf(current) !== -1 : a === current) {
        var i = currentIndex;
        while (i <= classTypes.length) {
            i++;
            var next = classTypes[i];

            if (next === b) {
                return true;
            }

            if (next !== SP) {
                break;
            }
        }
    }

    if (current === SP) {
        var _i = currentIndex;

        while (_i > 0) {
            _i--;
            var prev = classTypes[_i];

            if (Array.isArray(a) ? a.indexOf(prev) !== -1 : a === prev) {
                var n = currentIndex;
                while (n <= classTypes.length) {
                    n++;
                    var _next = classTypes[n];

                    if (_next === b) {
                        return true;
                    }

                    if (_next !== SP) {
                        break;
                    }
                }
            }

            if (prev !== SP) {
                break;
            }
        }
    }
    return false;
};

var previousNonSpaceClassType = function previousNonSpaceClassType(currentIndex, classTypes) {
    var i = currentIndex;
    while (i >= 0) {
        var type = classTypes[i];
        if (type === SP) {
            i--;
        } else {
            return type;
        }
    }
    return 0;
};

var _lineBreakAtIndex = function _lineBreakAtIndex(codePoints, classTypes, indicies, index, forbiddenBreaks) {
    if (indicies[index] === 0) {
        return BREAK_NOT_ALLOWED;
    }

    var currentIndex = index - 1;
    if (Array.isArray(forbiddenBreaks) && forbiddenBreaks[currentIndex] === true) {
        return BREAK_NOT_ALLOWED;
    }

    var beforeIndex = currentIndex - 1;
    var afterIndex = currentIndex + 1;
    var current = classTypes[currentIndex];

    // LB4 Always break after hard line breaks.
    // LB5 Treat CR followed by LF, as well as CR, LF, and NL as hard line breaks.
    var before = beforeIndex >= 0 ? classTypes[beforeIndex] : 0;
    var next = classTypes[afterIndex];

    if (current === CR && next === LF) {
        return BREAK_NOT_ALLOWED;
    }

    if (HARD_LINE_BREAKS.indexOf(current) !== -1) {
        return BREAK_MANDATORY;
    }

    // LB6 Do not break before hard line breaks.
    if (HARD_LINE_BREAKS.indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB7 Do not break before spaces or zero width space.
    if (SPACE.indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB8 Break before any character following a zero-width space, even if one or more spaces intervene.
    if (previousNonSpaceClassType(currentIndex, classTypes) === ZW) {
        return BREAK_ALLOWED;
    }

    // LB8a Do not break between a zero width joiner and an ideograph, emoji base or emoji modifier.
    if (UnicodeTrie.get(codePoints[currentIndex]) === ZWJ && (next === ID || next === EB || next === EM)) {
        return BREAK_NOT_ALLOWED;
    }

    // LB11 Do not break before or after Word joiner and related characters.
    if (current === WJ || next === WJ) {
        return BREAK_NOT_ALLOWED;
    }

    // LB12 Do not break after NBSP and related characters.
    if (current === GL) {
        return BREAK_NOT_ALLOWED;
    }

    // LB12a Do not break before NBSP and related characters, except after spaces and hyphens.
    if ([SP, BA, HY].indexOf(current) === -1 && next === GL) {
        return BREAK_NOT_ALLOWED;
    }

    // LB13 Do not break before ‘]’ or ‘!’ or ‘;’ or ‘/’, even after spaces.
    if ([CL, CP, EX, IS, SY].indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB14 Do not break after ‘[’, even after spaces.
    if (previousNonSpaceClassType(currentIndex, classTypes) === OP) {
        return BREAK_NOT_ALLOWED;
    }

    // LB15 Do not break within ‘”[’, even with intervening spaces.
    if (isAdjacentWithSpaceIgnored(QU, OP, currentIndex, classTypes)) {
        return BREAK_NOT_ALLOWED;
    }

    // LB16 Do not break between closing punctuation and a nonstarter (lb=NS), even with intervening spaces.
    if (isAdjacentWithSpaceIgnored([CL, CP], NS, currentIndex, classTypes)) {
        return BREAK_NOT_ALLOWED;
    }

    // LB17 Do not break within ‘——’, even with intervening spaces.
    if (isAdjacentWithSpaceIgnored(B2, B2, currentIndex, classTypes)) {
        return BREAK_NOT_ALLOWED;
    }

    // LB18 Break after spaces.
    if (current === SP) {
        return BREAK_ALLOWED;
    }

    // LB19 Do not break before or after quotation marks, such as ‘ ” ’.
    if (current === QU || next === QU) {
        return BREAK_NOT_ALLOWED;
    }

    // LB20 Break before and after unresolved CB.
    if (next === CB || current === CB) {
        return BREAK_ALLOWED;
    }

    // LB21 Do not break before hyphen-minus, other hyphens, fixed-width spaces, small kana, and other non-starters, or after acute accents.
    if ([BA, HY, NS].indexOf(next) !== -1 || current === BB) {
        return BREAK_NOT_ALLOWED;
    }

    // LB21a Don't break after Hebrew + Hyphen.
    if (before === HL && HYPHEN.indexOf(current) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB21b Don’t break between Solidus and Hebrew letters.
    if (current === SY && next === HL) {
        return BREAK_NOT_ALLOWED;
    }

    // LB22 Do not break between two ellipses, or between letters, numbers or exclamations and ellipsis.
    if (next === IN && ALPHABETICS.concat(IN, EX, NU, ID, EB, EM).indexOf(current) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB23 Do not break between digits and letters.
    if (ALPHABETICS.indexOf(next) !== -1 && current === NU || ALPHABETICS.indexOf(current) !== -1 && next === NU) {
        return BREAK_NOT_ALLOWED;
    }

    // LB23a Do not break between numeric prefixes and ideographs, or between ideographs and numeric postfixes.
    if (current === PR && [ID, EB, EM].indexOf(next) !== -1 || [ID, EB, EM].indexOf(current) !== -1 && next === PO) {
        return BREAK_NOT_ALLOWED;
    }

    // LB24 Do not break between numeric prefix/postfix and letters, or between letters and prefix/postfix.
    if (ALPHABETICS.indexOf(current) !== -1 && PREFIX_POSTFIX.indexOf(next) !== -1 || PREFIX_POSTFIX.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB25 Do not break between the following pairs of classes relevant to numbers:
    if (
    // (PR | PO) × ( OP | HY )? NU
    [PR, PO].indexOf(current) !== -1 && (next === NU || [OP, HY].indexOf(next) !== -1 && classTypes[afterIndex + 1] === NU) ||
    // ( OP | HY ) × NU
    [OP, HY].indexOf(current) !== -1 && next === NU ||
    // NU ×	(NU | SY | IS)
    current === NU && [NU, SY, IS].indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // NU (NU | SY | IS)* × (NU | SY | IS | CL | CP)
    if ([NU, SY, IS, CL, CP].indexOf(next) !== -1) {
        var prevIndex = currentIndex;
        while (prevIndex >= 0) {
            var type = classTypes[prevIndex];
            if (type === NU) {
                return BREAK_NOT_ALLOWED;
            } else if ([SY, IS].indexOf(type) !== -1) {
                prevIndex--;
            } else {
                break;
            }
        }
    }

    // NU (NU | SY | IS)* (CL | CP)? × (PO | PR))
    if ([PR, PO].indexOf(next) !== -1) {
        var _prevIndex = [CL, CP].indexOf(current) !== -1 ? beforeIndex : currentIndex;
        while (_prevIndex >= 0) {
            var _type = classTypes[_prevIndex];
            if (_type === NU) {
                return BREAK_NOT_ALLOWED;
            } else if ([SY, IS].indexOf(_type) !== -1) {
                _prevIndex--;
            } else {
                break;
            }
        }
    }

    // LB26 Do not break a Korean syllable.
    if (JL === current && [JL, JV, H2, H3].indexOf(next) !== -1 || [JV, H2].indexOf(current) !== -1 && [JV, JT].indexOf(next) !== -1 || [JT, H3].indexOf(current) !== -1 && next === JT) {
        return BREAK_NOT_ALLOWED;
    }

    // LB27 Treat a Korean Syllable Block the same as ID.
    if (KOREAN_SYLLABLE_BLOCK.indexOf(current) !== -1 && [IN, PO].indexOf(next) !== -1 || KOREAN_SYLLABLE_BLOCK.indexOf(next) !== -1 && current === PR) {
        return BREAK_NOT_ALLOWED;
    }

    // LB28 Do not break between alphabetics (“at”).
    if (ALPHABETICS.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB29 Do not break between numeric punctuation and alphabetics (“e.g.”).
    if (current === IS && ALPHABETICS.indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB30 Do not break between letters, numbers, or ordinary symbols and opening or closing parentheses.
    if (ALPHABETICS.concat(NU).indexOf(current) !== -1 && next === OP || ALPHABETICS.concat(NU).indexOf(next) !== -1 && current === CP) {
        return BREAK_NOT_ALLOWED;
    }

    // LB30a Break between two regional indicator symbols if and only if there are an even number of regional
    // indicators preceding the position of the break.
    if (current === RI && next === RI) {
        var i = indicies[currentIndex];
        var count = 1;
        while (i > 0) {
            i--;
            if (classTypes[i] === RI) {
                count++;
            } else {
                break;
            }
        }
        if (count % 2 !== 0) {
            return BREAK_NOT_ALLOWED;
        }
    }

    // LB30b Do not break between an emoji base and an emoji modifier.
    if (current === EB && next === EM) {
        return BREAK_NOT_ALLOWED;
    }

    return BREAK_ALLOWED;
};

var lineBreakAtIndex = exports.lineBreakAtIndex = function lineBreakAtIndex(codePoints, index) {
    // LB2 Never break at the start of text.
    if (index === 0) {
        return BREAK_NOT_ALLOWED;
    }

    // LB3 Always break at the end of text.
    if (index >= codePoints.length) {
        return BREAK_MANDATORY;
    }

    var _codePointsToCharacte = codePointsToCharacterClasses(codePoints),
        _codePointsToCharacte2 = _slicedToArray(_codePointsToCharacte, 2),
        indicies = _codePointsToCharacte2[0],
        classTypes = _codePointsToCharacte2[1];

    return _lineBreakAtIndex(codePoints, classTypes, indicies, index);
};

var cssFormattedClasses = function cssFormattedClasses(codePoints, options) {
    if (!options) {
        options = { lineBreak: 'normal', wordBreak: 'normal' };
    }

    var _codePointsToCharacte3 = codePointsToCharacterClasses(codePoints, options.lineBreak),
        _codePointsToCharacte4 = _slicedToArray(_codePointsToCharacte3, 3),
        indicies = _codePointsToCharacte4[0],
        classTypes = _codePointsToCharacte4[1],
        isLetterNumber = _codePointsToCharacte4[2];

    if (options.wordBreak === 'break-all' || options.wordBreak === 'break-word') {
        classTypes = classTypes.map(function (type) {
            return [NU, AL, SA].indexOf(type) !== -1 ? ID : type;
        });
    }

    var forbiddenBreakpoints = options.wordBreak === 'keep-all' ? isLetterNumber.map(function (isLetterNumber, i) {
        return isLetterNumber && codePoints[i] >= 0x4e00 && codePoints[i] <= 0x9fff;
    }) : null;

    return [indicies, classTypes, forbiddenBreakpoints];
};

var inlineBreakOpportunities = exports.inlineBreakOpportunities = function inlineBreakOpportunities(str, options) {
    var codePoints = (0, _Util.toCodePoints)(str);
    var output = BREAK_NOT_ALLOWED;

    var _cssFormattedClasses = cssFormattedClasses(codePoints, options),
        _cssFormattedClasses2 = _slicedToArray(_cssFormattedClasses, 3),
        indicies = _cssFormattedClasses2[0],
        classTypes = _cssFormattedClasses2[1],
        forbiddenBreakpoints = _cssFormattedClasses2[2];

    codePoints.forEach(function (codePoint, i) {
        output += (0, _Util.fromCodePoint)(codePoint) + (i >= codePoints.length - 1 ? BREAK_MANDATORY : _lineBreakAtIndex(codePoints, classTypes, indicies, i + 1, forbiddenBreakpoints));
    });

    return output;
};

var Break = function () {
    function Break(codePoints, lineBreak, start, end) {
        _classCallCheck(this, Break);

        this._codePoints = codePoints;
        this.required = lineBreak === BREAK_MANDATORY;
        this.start = start;
        this.end = end;
    }

    _createClass(Break, [{
        key: 'slice',
        value: function slice() {
            return _Util.fromCodePoint.apply(undefined, _toConsumableArray(this._codePoints.slice(this.start, this.end)));
        }
    }]);

    return Break;
}();

var LineBreaker = exports.LineBreaker = function LineBreaker(str, options) {
    var codePoints = (0, _Util.toCodePoints)(str);

    var _cssFormattedClasses3 = cssFormattedClasses(codePoints, options),
        _cssFormattedClasses4 = _slicedToArray(_cssFormattedClasses3, 3),
        indicies = _cssFormattedClasses4[0],
        classTypes = _cssFormattedClasses4[1],
        forbiddenBreakpoints = _cssFormattedClasses4[2];

    var length = codePoints.length;
    var lastEnd = 0;
    var nextIndex = 0;

    return {
        next: function next() {
            if (nextIndex >= length) {
                return { done: true };
            }
            var lineBreak = BREAK_NOT_ALLOWED;
            while (nextIndex < length && (lineBreak = _lineBreakAtIndex(codePoints, classTypes, indicies, ++nextIndex, forbiddenBreakpoints)) === BREAK_NOT_ALLOWED) {}

            if (lineBreak !== BREAK_NOT_ALLOWED || nextIndex === length) {
                var value = new Break(codePoints, lineBreak, lastEnd, nextIndex);
                lastEnd = nextIndex;
                return { value: value, done: false };
            }

            return { done: true };
        }
    };
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Trie = exports.createTrieFromBase64 = exports.UTRIE2_INDEX_2_MASK = exports.UTRIE2_INDEX_2_BLOCK_LENGTH = exports.UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = exports.UTRIE2_INDEX_1_OFFSET = exports.UTRIE2_UTF8_2B_INDEX_2_LENGTH = exports.UTRIE2_UTF8_2B_INDEX_2_OFFSET = exports.UTRIE2_INDEX_2_BMP_LENGTH = exports.UTRIE2_LSCP_INDEX_2_LENGTH = exports.UTRIE2_DATA_MASK = exports.UTRIE2_DATA_BLOCK_LENGTH = exports.UTRIE2_LSCP_INDEX_2_OFFSET = exports.UTRIE2_SHIFT_1_2 = exports.UTRIE2_INDEX_SHIFT = exports.UTRIE2_SHIFT_1 = exports.UTRIE2_SHIFT_2 = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Util = __webpack_require__(13);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** Shift size for getting the index-2 table offset. */
var UTRIE2_SHIFT_2 = exports.UTRIE2_SHIFT_2 = 5;

/** Shift size for getting the index-1 table offset. */
var UTRIE2_SHIFT_1 = exports.UTRIE2_SHIFT_1 = 6 + 5;

/**
 * Shift size for shifting left the index array values.
 * Increases possible data size with 16-bit index values at the cost
 * of compactability.
 * This requires data blocks to be aligned by UTRIE2_DATA_GRANULARITY.
 */
var UTRIE2_INDEX_SHIFT = exports.UTRIE2_INDEX_SHIFT = 2;

/**
 * Difference between the two shift sizes,
 * for getting an index-1 offset from an index-2 offset. 6=11-5
 */
var UTRIE2_SHIFT_1_2 = exports.UTRIE2_SHIFT_1_2 = UTRIE2_SHIFT_1 - UTRIE2_SHIFT_2;

/**
 * The part of the index-2 table for U+D800..U+DBFF stores values for
 * lead surrogate code _units_ not code _points_.
 * Values for lead surrogate code _points_ are indexed with this portion of the table.
 * Length=32=0x20=0x400>>UTRIE2_SHIFT_2. (There are 1024=0x400 lead surrogates.)
 */
var UTRIE2_LSCP_INDEX_2_OFFSET = exports.UTRIE2_LSCP_INDEX_2_OFFSET = 0x10000 >> UTRIE2_SHIFT_2;

/** Number of entries in a data block. 32=0x20 */
var UTRIE2_DATA_BLOCK_LENGTH = exports.UTRIE2_DATA_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_2;
/** Mask for getting the lower bits for the in-data-block offset. */
var UTRIE2_DATA_MASK = exports.UTRIE2_DATA_MASK = UTRIE2_DATA_BLOCK_LENGTH - 1;

var UTRIE2_LSCP_INDEX_2_LENGTH = exports.UTRIE2_LSCP_INDEX_2_LENGTH = 0x400 >> UTRIE2_SHIFT_2;
/** Count the lengths of both BMP pieces. 2080=0x820 */
var UTRIE2_INDEX_2_BMP_LENGTH = exports.UTRIE2_INDEX_2_BMP_LENGTH = UTRIE2_LSCP_INDEX_2_OFFSET + UTRIE2_LSCP_INDEX_2_LENGTH;
/**
 * The 2-byte UTF-8 version of the index-2 table follows at offset 2080=0x820.
 * Length 32=0x20 for lead bytes C0..DF, regardless of UTRIE2_SHIFT_2.
 */
var UTRIE2_UTF8_2B_INDEX_2_OFFSET = exports.UTRIE2_UTF8_2B_INDEX_2_OFFSET = UTRIE2_INDEX_2_BMP_LENGTH;
var UTRIE2_UTF8_2B_INDEX_2_LENGTH = exports.UTRIE2_UTF8_2B_INDEX_2_LENGTH = 0x800 >> 6; /* U+0800 is the first code point after 2-byte UTF-8 */
/**
 * The index-1 table, only used for supplementary code points, at offset 2112=0x840.
 * Variable length, for code points up to highStart, where the last single-value range starts.
 * Maximum length 512=0x200=0x100000>>UTRIE2_SHIFT_1.
 * (For 0x100000 supplementary code points U+10000..U+10ffff.)
 *
 * The part of the index-2 table for supplementary code points starts
 * after this index-1 table.
 *
 * Both the index-1 table and the following part of the index-2 table
 * are omitted completely if there is only BMP data.
 */
var UTRIE2_INDEX_1_OFFSET = exports.UTRIE2_INDEX_1_OFFSET = UTRIE2_UTF8_2B_INDEX_2_OFFSET + UTRIE2_UTF8_2B_INDEX_2_LENGTH;

/**
 * Number of index-1 entries for the BMP. 32=0x20
 * This part of the index-1 table is omitted from the serialized form.
 */
var UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = exports.UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = 0x10000 >> UTRIE2_SHIFT_1;

/** Number of entries in an index-2 block. 64=0x40 */
var UTRIE2_INDEX_2_BLOCK_LENGTH = exports.UTRIE2_INDEX_2_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_1_2;
/** Mask for getting the lower bits for the in-index-2-block offset. */
var UTRIE2_INDEX_2_MASK = exports.UTRIE2_INDEX_2_MASK = UTRIE2_INDEX_2_BLOCK_LENGTH - 1;

var createTrieFromBase64 = exports.createTrieFromBase64 = function createTrieFromBase64(base64) {
    var buffer = (0, _Util.decode)(base64);
    var view32 = Array.isArray(buffer) ? (0, _Util.polyUint32Array)(buffer) : new Uint32Array(buffer);
    var view16 = Array.isArray(buffer) ? (0, _Util.polyUint16Array)(buffer) : new Uint16Array(buffer);
    var headerLength = 24;

    var index = view16.slice(headerLength / 2, view32[4] / 2);
    var data = view32[5] === 2 ? view16.slice((headerLength + view32[4]) / 2) : view32.slice(Math.ceil((headerLength + view32[4]) / 4));

    return new Trie(view32[0], view32[1], view32[2], view32[3], index, data);
};

var Trie = exports.Trie = function () {
    function Trie(initialValue, errorValue, highStart, highValueIndex, index, data) {
        _classCallCheck(this, Trie);

        this.initialValue = initialValue;
        this.errorValue = errorValue;
        this.highStart = highStart;
        this.highValueIndex = highValueIndex;
        this.index = index;
        this.data = data;
    }

    /**
     * Get the value for a code point as stored in the Trie.
     *
     * @param codePoint the code point
     * @return the value
     */


    _createClass(Trie, [{
        key: 'get',
        value: function get(codePoint) {
            var ix = void 0;
            if (codePoint >= 0) {
                if (codePoint < 0x0d800 || codePoint > 0x0dbff && codePoint <= 0x0ffff) {
                    // Ordinary BMP code point, excluding leading surrogates.
                    // BMP uses a single level lookup.  BMP index starts at offset 0 in the Trie2 index.
                    // 16 bit data is stored in the index array itself.
                    ix = this.index[codePoint >> UTRIE2_SHIFT_2];
                    ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                    return this.data[ix];
                }

                if (codePoint <= 0xffff) {
                    // Lead Surrogate Code Point.  A Separate index section is stored for
                    // lead surrogate code units and code points.
                    //   The main index has the code unit data.
                    //   For this function, we need the code point data.
                    // Note: this expression could be refactored for slightly improved efficiency, but
                    //       surrogate code points will be so rare in practice that it's not worth it.
                    ix = this.index[UTRIE2_LSCP_INDEX_2_OFFSET + (codePoint - 0xd800 >> UTRIE2_SHIFT_2)];
                    ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                    return this.data[ix];
                }

                if (codePoint < this.highStart) {
                    // Supplemental code point, use two-level lookup.
                    ix = UTRIE2_INDEX_1_OFFSET - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH + (codePoint >> UTRIE2_SHIFT_1);
                    ix = this.index[ix];
                    ix += codePoint >> UTRIE2_SHIFT_2 & UTRIE2_INDEX_2_MASK;
                    ix = this.index[ix];
                    ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                    return this.data[ix];
                }
                if (codePoint <= 0x10ffff) {
                    return this.data[this.highValueIndex];
                }
            }

            // Fall through.  The code point is outside of the legal range of 0..0x10ffff.
            return this.errorValue;
        }
    }]);

    return Trie;
}();

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = 'KwAAAAAAAAAACA4AIDoAAPAfAAACAAAAAAAIABAAGABAAEgAUABYAF4AZgBeAGYAYABoAHAAeABeAGYAfACEAIAAiACQAJgAoACoAK0AtQC9AMUAXgBmAF4AZgBeAGYAzQDVAF4AZgDRANkA3gDmAOwA9AD8AAQBDAEUARoBIgGAAIgAJwEvATcBPwFFAU0BTAFUAVwBZAFsAXMBewGDATAAiwGTAZsBogGkAawBtAG8AcIBygHSAdoB4AHoAfAB+AH+AQYCDgIWAv4BHgImAi4CNgI+AkUCTQJTAlsCYwJrAnECeQKBAk0CiQKRApkCoQKoArACuALAAsQCzAIwANQC3ALkAjAA7AL0AvwCAQMJAxADGAMwACADJgMuAzYDPgOAAEYDSgNSA1IDUgNaA1oDYANiA2IDgACAAGoDgAByA3YDfgOAAIQDgACKA5IDmgOAAIAAogOqA4AAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAK8DtwOAAIAAvwPHA88D1wPfAyAD5wPsA/QD/AOAAIAABAQMBBIEgAAWBB4EJgQuBDMEIAM7BEEEXgBJBCADUQRZBGEEaQQwADAAcQQ+AXkEgQSJBJEEgACYBIAAoASoBK8EtwQwAL8ExQSAAIAAgACAAIAAgACgAM0EXgBeAF4AXgBeAF4AXgBeANUEXgDZBOEEXgDpBPEE+QQBBQkFEQUZBSEFKQUxBTUFPQVFBUwFVAVcBV4AYwVeAGsFcwV7BYMFiwWSBV4AmgWgBacFXgBeAF4AXgBeAKsFXgCyBbEFugW7BcIFwgXIBcIFwgXQBdQF3AXkBesF8wX7BQMGCwYTBhsGIwYrBjMGOwZeAD8GRwZNBl4AVAZbBl4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAGMGXgBqBnEGXgBeAF4AXgBeAF4AXgBeAF4AXgB5BoAG4wSGBo4GkwaAAIADHgR5AF4AXgBeAJsGgABGA4AAowarBrMGswagALsGwwbLBjAA0wbaBtoG3QbaBtoG2gbaBtoG2gblBusG8wb7BgMHCwcTBxsHCwcjBysHMAc1BzUHOgdCB9oGSgdSB1oHYAfaBloHaAfaBlIH2gbaBtoG2gbaBtoG2gbaBjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHbQdeAF4ANQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQd1B30HNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B4MH2gaKB68EgACAAIAAgACAAIAAgACAAI8HlwdeAJ8HpweAAIAArwe3B14AXgC/B8UHygcwANAH2AfgB4AA6AfwBz4B+AcACFwBCAgPCBcIogEYAR8IJwiAAC8INwg/CCADRwhPCFcIXwhnCEoDGgSAAIAAgABvCHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIhAiLCI4IMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAANQc1BzUHNQc1BzUHNQc1BzUHNQc1B54INQc1B6II2gaqCLIIugiAAIAAvgjGCIAAgACAAIAAgACAAIAAgACAAIAAywiHAYAA0wiAANkI3QjlCO0I9Aj8CIAAgACAAAIJCgkSCRoJIgknCTYHLwk3CZYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiAAIAAAAFAAXgBeAGAAcABeAHwAQACQAKAArQC9AJ4AXgBeAE0A3gBRAN4A7AD8AMwBGgEAAKcBNwEFAUwBXAF4QkhCmEKnArcCgAHHAsABz4LAAcABwAHAAd+C6ABoAG+C/4LAAcABwAHAAc+DF4MAAcAB54M3gweDV4Nng3eDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEeDqABVg6WDqABoQ6gAaABoAHXDvcONw/3DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DncPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB7cPPwlGCU4JMACAAIAAgABWCV4JYQmAAGkJcAl4CXwJgAkwADAAMAAwAIgJgACLCZMJgACZCZ8JowmrCYAAswkwAF4AXgB8AIAAuwkABMMJyQmAAM4JgADVCTAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAqwYWBNkIMAAwADAAMADdCeAJ6AnuCR4E9gkwAP4JBQoNCjAAMACAABUK0wiAAB0KJAosCjQKgAAwADwKQwqAAEsKvQmdCVMKWwowADAAgACAALcEMACAAGMKgABrCjAAMAAwADAAMAAwADAAMAAwADAAMAAeBDAAMAAwADAAMAAwADAAMAAwADAAMAAwAIkEPQFzCnoKiQSCCooKkAqJBJgKoAqkCokEGAGsCrQKvArBCjAAMADJCtEKFQHZCuEK/gHpCvEKMAAwADAAMACAAIwE+QowAIAAPwEBCzAAMAAwADAAMACAAAkLEQswAIAAPwEZCyELgAAOCCkLMAAxCzkLMAAwADAAMAAwADAAXgBeAEELMAAwADAAMAAwADAAMAAwAEkLTQtVC4AAXAtkC4AAiQkwADAAMAAwADAAMAAwADAAbAtxC3kLgAuFC4sLMAAwAJMLlwufCzAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAApwswADAAMACAAIAAgACvC4AAgACAAIAAgACAALcLMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAvwuAAMcLgACAAIAAgACAAIAAyguAAIAAgACAAIAA0QswADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAANkLgACAAIAA4AswADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACJCR4E6AswADAAhwHwC4AA+AsADAgMEAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMACAAIAAGAwdDCUMMAAwAC0MNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQw1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHPQwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADUHNQc1BzUHNQc1BzUHNQc2BzAAMAA5DDUHNQc1BzUHNQc1BzUHNQc1BzUHNQdFDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAATQxSDFoMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAF4AXgBeAF4AXgBeAF4AYgxeAGoMXgBxDHkMfwxeAIUMXgBeAI0MMAAwADAAMAAwAF4AXgCVDJ0MMAAwADAAMABeAF4ApQxeAKsMswy7DF4Awgy9DMoMXgBeAF4AXgBeAF4AXgBeAF4AXgDRDNkMeQBqCeAM3Ax8AOYM7Az0DPgMXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgCgAAANoAAHDQ4NFg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAeDSYNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAC4NMABeAF4ANg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAD4NRg1ODVYNXg1mDTAAbQ0wADAAMAAwADAAMAAwADAA2gbaBtoG2gbaBtoG2gbaBnUNeg3CBYANwgWFDdoGjA3aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gaUDZwNpA2oDdoG2gawDbcNvw3HDdoG2gbPDdYN3A3fDeYN2gbsDfMN2gbaBvoN/g3aBgYODg7aBl4AXgBeABYOXgBeACUG2gYeDl4AJA5eACwO2w3aBtoGMQ45DtoG2gbaBtoGQQ7aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B1EO2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQdZDjUHNQc1BzUHNQc1B2EONQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHaA41BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B3AO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B2EO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBkkOeA6gAKAAoAAwADAAMAAwAKAAoACgAKAAoACgAKAAgA4wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAD//wQABAAEAAQABAAEAAQABAAEAA0AAwABAAEAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAKABMAFwAeABsAGgAeABcAFgASAB4AGwAYAA8AGAAcAEsASwBLAEsASwBLAEsASwBLAEsAGAAYAB4AHgAeABMAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAFgAbABIAHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYADQARAB4ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkAFgAaABsAGwAbAB4AHQAdAB4ATwAXAB4ADQAeAB4AGgAbAE8ATwAOAFAAHQAdAB0ATwBPABcATwBPAE8AFgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwArAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAAQABAANAA0ASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAUAArACsAKwArACsAKwArACsABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAGgAaAFAAUABQAFAAUABMAB4AGwBQAB4AKwArACsABAAEAAQAKwBQAFAAUABQAFAAUAArACsAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUAArAFAAUAArACsABAArAAQABAAEAAQABAArACsAKwArAAQABAArACsABAAEAAQAKwArACsABAArACsAKwArACsAKwArAFAAUABQAFAAKwBQACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwAEAAQAUABQAFAABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQAKwArAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeABsAKwArACsAKwArACsAKwBQAAQABAAEAAQABAAEACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAKwArACsAKwArACsAKwArAAQABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwAEAFAAKwBQAFAAUABQAFAAUAArACsAKwBQAFAAUAArAFAAUABQAFAAKwArACsAUABQACsAUAArAFAAUAArACsAKwBQAFAAKwArACsAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQAKwArACsABAAEAAQAKwAEAAQABAAEACsAKwBQACsAKwArACsAKwArAAQAKwArACsAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAB4AHgAeAB4AHgAeABsAHgArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArAFAAUABQACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAB4AUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArACsAKwArACsAKwArAFAAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwArAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAKwBcAFwAKwBcACsAKwBcACsAKwArACsAKwArAFwAXABcAFwAKwBcAFwAXABcAFwAXABcACsAXABcAFwAKwBcACsAXAArACsAXABcACsAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgArACoAKgBcACsAKwBcAFwAXABcAFwAKwBcACsAKgAqACoAKgAqACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAFwAXABcAFwAUAAOAA4ADgAOAB4ADgAOAAkADgAOAA0ACQATABMAEwATABMACQAeABMAHgAeAB4ABAAEAB4AHgAeAB4AHgAeAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUAANAAQAHgAEAB4ABAAWABEAFgARAAQABABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAAQABAAEAAQABAANAAQABABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsADQANAB4AHgAeAB4AHgAeAAQAHgAeAB4AHgAeAB4AKwAeAB4ADgAOAA0ADgAeAB4AHgAeAB4ACQAJACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgAeAB4AHgBcAFwAXABcAFwAXAAqACoAKgAqAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAKgAqACoAKgAqACoAKgBcAFwAXAAqACoAKgAqAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAXAAqAEsASwBLAEsASwBLAEsASwBLAEsAKgAqACoAKgAqACoAUABQAFAAUABQAFAAKwBQACsAKwArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQACsAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwAEAAQABAAeAA0AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAEQArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAADQANAA0AUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAA0ADQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoADQANABUAXAANAB4ADQAbAFwAKgArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAB4AHgATABMADQANAA4AHgATABMAHgAEAAQABAAJACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAUABQAFAAUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwAeACsAKwArABMAEwBLAEsASwBLAEsASwBLAEsASwBLAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwBcAFwAXABcAFwAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcACsAKwArACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwAeAB4AXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsABABLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKgAqACoAKgAqACoAKgBcACoAKgAqACoAKgAqACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAUABQAFAAUABQAFAAUAArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4ADQANAA0ADQAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAHgAeAB4AHgBQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwANAA0ADQANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwBQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsABAAEAAQAHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAABABQAFAAUABQAAQABAAEAFAAUAAEAAQABAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAKwBQACsAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAKwArAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAKwAeAB4AHgAeAB4AHgAeAA4AHgArAA0ADQANAA0ADQANAA0ACQANAA0ADQAIAAQACwAEAAQADQAJAA0ADQAMAB0AHQAeABcAFwAWABcAFwAXABYAFwAdAB0AHgAeABQAFAAUAA0AAQABAAQABAAEAAQABAAJABoAGgAaABoAGgAaABoAGgAeABcAFwAdABUAFQAeAB4AHgAeAB4AHgAYABYAEQAVABUAFQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgANAB4ADQANAA0ADQAeAA0ADQANAAcAHgAeAB4AHgArAAQABAAEAAQABAAEAAQABAAEAAQAUABQACsAKwBPAFAAUABQAFAAUAAeAB4AHgAWABEATwBQAE8ATwBPAE8AUABQAFAAUABQAB4AHgAeABYAEQArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGgAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgBQABoAHgAdAB4AUAAeABoAHgAeAB4AHgAeAB4AHgAeAB4ATwAeAFAAGwAeAB4AUABQAFAAUABQAB4AHgAeAB0AHQAeAFAAHgBQAB4AUAAeAFAATwBQAFAAHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AUABQAFAAUABPAE8AUABQAFAAUABQAE8AUABQAE8AUABPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAE8ATwBPAE8ATwBPAE8ATwBPAE8AUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAATwAeAB4AKwArACsAKwAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB0AHQAeAB4AHgAdAB0AHgAeAB0AHgAeAB4AHQAeAB0AGwAbAB4AHQAeAB4AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB0AHgAdAB4AHQAdAB0AHQAdAB0AHgAdAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAdAB0AHQAdAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAlACUAHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB0AHQAeAB4AHgAeAB0AHQAdAB4AHgAdAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB0AHQAeAB4AHQAeAB4AHgAeAB0AHQAeAB4AHgAeACUAJQAdAB0AJQAeACUAJQAlACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHQAdAB0AHgAdACUAHQAdAB4AHQAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHQAdAB0AHQAlAB4AJQAlACUAHQAlACUAHQAdAB0AJQAlAB0AHQAlAB0AHQAlACUAJQAeAB0AHgAeAB4AHgAdAB0AJQAdAB0AHQAdAB0AHQAlACUAJQAlACUAHQAlACUAIAAlAB0AHQAlACUAJQAlACUAJQAlACUAHgAeAB4AJQAlACAAIAAgACAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeABcAFwAXABcAFwAXAB4AEwATACUAHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACUAJQBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwArACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAE8ATwBPAE8ATwBPAE8ATwAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeACsAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUAArACsAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQBQAFAAUABQACsAKwArACsAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAABAAEAAQAKwAEAAQAKwArACsAKwArAAQABAAEAAQAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsABAAEAAQAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsADQANAA0ADQANAA0ADQANAB4AKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAUABQAFAAUABQAA0ADQANAA0ADQANABQAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwANAA0ADQANAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAeAAQABAAEAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLACsADQArAB4AKwArAAQABAAEAAQAUABQAB4AUAArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwAEAAQABAAEAAQABAAEAAQABAAOAA0ADQATABMAHgAeAB4ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0AUABQAFAAUAAEAAQAKwArAAQADQANAB4AUAArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXABcAA0ADQANACoASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUAArACsAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANACsADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEcARwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwAeAAQABAANAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAEAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUAArACsAUAArACsAUABQACsAKwBQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAeAB4ADQANAA0ADQAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAArAAQABAArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAEAAQABAAEAAQABAAEACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAFgAWAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAKwBQACsAKwArACsAKwArAFAAKwArACsAKwBQACsAUAArAFAAKwBQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQACsAUAArAFAAKwBQACsAUABQACsAUAArACsAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAUABQAFAAUAArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUAArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAlACUAJQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeACUAJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeACUAJQAlACUAJQAeACUAJQAlACUAJQAgACAAIAAlACUAIAAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIQAhACEAIQAhACUAJQAgACAAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAIAAlACUAJQAlACAAJQAgACAAIAAgACAAIAAgACAAIAAlACUAJQAgACUAJQAlACUAIAAgACAAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeACUAHgAlAB4AJQAlACUAJQAlACAAJQAlACUAJQAeACUAHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAIAAgACAAIAAgAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFwAXABcAFQAVABUAHgAeAB4AHgAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAlACAAIAAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsA';

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Path = __webpack_require__(6);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Circle = function Circle(x, y, radius) {
    _classCallCheck(this, Circle);

    this.type = _Path.PATH.CIRCLE;
    this.x = x;
    this.y = y;
    this.radius = radius;
    if (true) {
        if (isNaN(x)) {
            console.error('Invalid x value given for Circle');
        }
        if (isNaN(y)) {
            console.error('Invalid y value given for Circle');
        }
        if (isNaN(radius)) {
            console.error('Invalid radius value given for Circle');
        }
    }
};

exports.default = Circle;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Bounds = __webpack_require__(2);

var _Font = __webpack_require__(25);

var _Gradient = __webpack_require__(52);

var _TextContainer = __webpack_require__(9);

var _TextContainer2 = _interopRequireDefault(_TextContainer);

var _background = __webpack_require__(5);

var _border = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Renderer = function () {
    function Renderer(target, options) {
        _classCallCheck(this, Renderer);

        this.target = target;
        this.options = options;
        target.render(options);
    }

    _createClass(Renderer, [{
        key: 'renderNode',
        value: function renderNode(container) {
            if (container.isVisible()) {
                this.renderNodeBackgroundAndBorders(container);
                this.renderNodeContent(container);
            }
        }
    }, {
        key: 'renderNodeContent',
        value: function renderNodeContent(container) {
            var _this = this;

            var callback = function callback() {
                if (container.childNodes.length) {
                    container.childNodes.forEach(function (child) {
                        if (child instanceof _TextContainer2.default) {
                            var style = child.parent.style;
                            _this.target.renderTextNode(child.bounds, style.color, style.font, style.textDecoration, style.textShadow);
                        } else {
                            _this.target.drawShape(child, container.style.color);
                        }
                    });
                }

                if (container.image) {
                    var _image = _this.options.imageStore.get(container.image);
                    if (_image) {
                        var contentBox = (0, _Bounds.calculateContentBox)(container.bounds, container.style.padding, container.style.border);
                        var _width = typeof _image.width === 'number' && _image.width > 0 ? _image.width : contentBox.width;
                        var _height = typeof _image.height === 'number' && _image.height > 0 ? _image.height : contentBox.height;
                        if (_width > 0 && _height > 0) {
                            _this.target.clip([(0, _Bounds.calculatePaddingBoxPath)(container.curvedBounds)], function () {
                                _this.target.drawImage(_image, new _Bounds.Bounds(0, 0, _width, _height), contentBox);
                            });
                        }
                    }
                }
            };
            var paths = container.getClipPaths();
            if (paths.length) {
                this.target.clip(paths, callback);
            } else {
                callback();
            }
        }
    }, {
        key: 'renderNodeBackgroundAndBorders',
        value: function renderNodeBackgroundAndBorders(container) {
            var _this2 = this;

            var HAS_BACKGROUND = !container.style.background.backgroundColor.isTransparent() || container.style.background.backgroundImage.length;

            var hasRenderableBorders = container.style.border.some(function (border) {
                return border.borderStyle !== _border.BORDER_STYLE.NONE && !border.borderColor.isTransparent();
            });

            var callback = function callback() {
                var backgroundPaintingArea = (0, _background.calculateBackgroungPaintingArea)(container.curvedBounds, container.style.background.backgroundClip);

                if (HAS_BACKGROUND) {
                    _this2.target.clip([backgroundPaintingArea], function () {
                        if (!container.style.background.backgroundColor.isTransparent()) {
                            _this2.target.fill(container.style.background.backgroundColor);
                        }

                        _this2.renderBackgroundImage(container);
                    });
                }

                container.style.border.forEach(function (border, side) {
                    if (border.borderStyle !== _border.BORDER_STYLE.NONE && !border.borderColor.isTransparent()) {
                        _this2.renderBorder(border, side, container.curvedBounds);
                    }
                });
            };

            if (HAS_BACKGROUND || hasRenderableBorders) {
                var paths = container.parent ? container.parent.getClipPaths() : [];
                if (paths.length) {
                    this.target.clip(paths, callback);
                } else {
                    callback();
                }
            }
        }
    }, {
        key: 'renderBackgroundImage',
        value: function renderBackgroundImage(container) {
            var _this3 = this;

            container.style.background.backgroundImage.slice(0).reverse().forEach(function (backgroundImage) {
                if (backgroundImage.source.method === 'url' && backgroundImage.source.args.length) {
                    _this3.renderBackgroundRepeat(container, backgroundImage);
                } else if (/gradient/i.test(backgroundImage.source.method)) {
                    _this3.renderBackgroundGradient(container, backgroundImage);
                }
            });
        }
    }, {
        key: 'renderBackgroundRepeat',
        value: function renderBackgroundRepeat(container, background) {
            var image = this.options.imageStore.get(background.source.args[0]);
            if (image) {
                var backgroundPositioningArea = (0, _background.calculateBackgroungPositioningArea)(container.style.background.backgroundOrigin, container.bounds, container.style.padding, container.style.border);
                var backgroundImageSize = (0, _background.calculateBackgroundSize)(background, image, backgroundPositioningArea);
                var position = (0, _background.calculateBackgroundPosition)(background.position, backgroundImageSize, backgroundPositioningArea);
                var _path = (0, _background.calculateBackgroundRepeatPath)(background, position, backgroundImageSize, backgroundPositioningArea, container.bounds);

                var _offsetX = Math.round(backgroundPositioningArea.left + position.x);
                var _offsetY = Math.round(backgroundPositioningArea.top + position.y);
                this.target.renderRepeat(_path, image, backgroundImageSize, _offsetX, _offsetY);
            }
        }
    }, {
        key: 'renderBackgroundGradient',
        value: function renderBackgroundGradient(container, background) {
            var backgroundPositioningArea = (0, _background.calculateBackgroungPositioningArea)(container.style.background.backgroundOrigin, container.bounds, container.style.padding, container.style.border);
            var backgroundImageSize = (0, _background.calculateGradientBackgroundSize)(background, backgroundPositioningArea);
            var position = (0, _background.calculateBackgroundPosition)(background.position, backgroundImageSize, backgroundPositioningArea);
            var gradientBounds = new _Bounds.Bounds(Math.round(backgroundPositioningArea.left + position.x), Math.round(backgroundPositioningArea.top + position.y), backgroundImageSize.width, backgroundImageSize.height);

            var gradient = (0, _Gradient.parseGradient)(container, background.source, gradientBounds);
            if (gradient) {
                switch (gradient.type) {
                    case _Gradient.GRADIENT_TYPE.LINEAR_GRADIENT:
                        // $FlowFixMe
                        this.target.renderLinearGradient(gradientBounds, gradient);
                        break;
                    case _Gradient.GRADIENT_TYPE.RADIAL_GRADIENT:
                        // $FlowFixMe
                        this.target.renderRadialGradient(gradientBounds, gradient);
                        break;
                }
            }
        }
    }, {
        key: 'renderBorder',
        value: function renderBorder(border, side, curvePoints) {
            this.target.drawShape((0, _Bounds.parsePathForBorder)(curvePoints, side), border.borderColor);
        }
    }, {
        key: 'renderStack',
        value: function renderStack(stack) {
            var _this4 = this;

            if (stack.container.isVisible()) {
                var _opacity = stack.getOpacity();
                if (_opacity !== this._opacity) {
                    this.target.setOpacity(stack.getOpacity());
                    this._opacity = _opacity;
                }

                var _transform = stack.container.style.transform;
                if (_transform !== null) {
                    this.target.transform(stack.container.bounds.left + _transform.transformOrigin[0].value, stack.container.bounds.top + _transform.transformOrigin[1].value, _transform.transform, function () {
                        return _this4.renderStackContent(stack);
                    });
                } else {
                    this.renderStackContent(stack);
                }
            }
        }
    }, {
        key: 'renderStackContent',
        value: function renderStackContent(stack) {
            var _splitStackingContext = splitStackingContexts(stack),
                _splitStackingContext2 = _slicedToArray(_splitStackingContext, 5),
                negativeZIndex = _splitStackingContext2[0],
                zeroOrAutoZIndexOrTransformedOrOpacity = _splitStackingContext2[1],
                positiveZIndex = _splitStackingContext2[2],
                nonPositionedFloats = _splitStackingContext2[3],
                nonPositionedInlineLevel = _splitStackingContext2[4];

            var _splitDescendants = splitDescendants(stack),
                _splitDescendants2 = _slicedToArray(_splitDescendants, 2),
                inlineLevel = _splitDescendants2[0],
                nonInlineLevel = _splitDescendants2[1];

            // https://www.w3.org/TR/css-position-3/#painting-order
            // 1. the background and borders of the element forming the stacking context.


            this.renderNodeBackgroundAndBorders(stack.container);
            // 2. the child stacking contexts with negative stack levels (most negative first).
            negativeZIndex.sort(sortByZIndex).forEach(this.renderStack, this);
            // 3. For all its in-flow, non-positioned, block-level descendants in tree order:
            this.renderNodeContent(stack.container);
            nonInlineLevel.forEach(this.renderNode, this);
            // 4. All non-positioned floating descendants, in tree order. For each one of these,
            // treat the element as if it created a new stacking context, but any positioned descendants and descendants
            // which actually create a new stacking context should be considered part of the parent stacking context,
            // not this new one.
            nonPositionedFloats.forEach(this.renderStack, this);
            // 5. the in-flow, inline-level, non-positioned descendants, including inline tables and inline blocks.
            nonPositionedInlineLevel.forEach(this.renderStack, this);
            inlineLevel.forEach(this.renderNode, this);
            // 6. All positioned, opacity or transform descendants, in tree order that fall into the following categories:
            //  All positioned descendants with 'z-index: auto' or 'z-index: 0', in tree order.
            //  For those with 'z-index: auto', treat the element as if it created a new stacking context,
            //  but any positioned descendants and descendants which actually create a new stacking context should be
            //  considered part of the parent stacking context, not this new one. For those with 'z-index: 0',
            //  treat the stacking context generated atomically.
            //
            //  All opacity descendants with opacity less than 1
            //
            //  All transform descendants with transform other than none
            zeroOrAutoZIndexOrTransformedOrOpacity.forEach(this.renderStack, this);
            // 7. Stacking contexts formed by positioned descendants with z-indices greater than or equal to 1 in z-index
            // order (smallest first) then tree order.
            positiveZIndex.sort(sortByZIndex).forEach(this.renderStack, this);
        }
    }, {
        key: 'render',
        value: function render(stack) {
            var _this5 = this;

            if (this.options.backgroundColor) {
                this.target.rectangle(this.options.x, this.options.y, this.options.width, this.options.height, this.options.backgroundColor);
            }
            this.renderStack(stack);
            var target = this.target.getTarget();
            if (true) {
                return target.then(function (output) {
                    _this5.options.logger.log('Render completed');
                    return output;
                });
            }
            return target;
        }
    }]);

    return Renderer;
}();

exports.default = Renderer;


var splitDescendants = function splitDescendants(stack) {
    var inlineLevel = [];
    var nonInlineLevel = [];

    var length = stack.children.length;
    for (var i = 0; i < length; i++) {
        var child = stack.children[i];
        if (child.isInlineLevel()) {
            inlineLevel.push(child);
        } else {
            nonInlineLevel.push(child);
        }
    }
    return [inlineLevel, nonInlineLevel];
};

var splitStackingContexts = function splitStackingContexts(stack) {
    var negativeZIndex = [];
    var zeroOrAutoZIndexOrTransformedOrOpacity = [];
    var positiveZIndex = [];
    var nonPositionedFloats = [];
    var nonPositionedInlineLevel = [];
    var length = stack.contexts.length;
    for (var i = 0; i < length; i++) {
        var child = stack.contexts[i];
        if (child.container.isPositioned() || child.container.style.opacity < 1 || child.container.isTransformed()) {
            if (child.container.style.zIndex.order < 0) {
                negativeZIndex.push(child);
            } else if (child.container.style.zIndex.order > 0) {
                positiveZIndex.push(child);
            } else {
                zeroOrAutoZIndexOrTransformedOrOpacity.push(child);
            }
        } else {
            if (child.container.isFloating()) {
                nonPositionedFloats.push(child);
            } else {
                nonPositionedInlineLevel.push(child);
            }
        }
    }
    return [negativeZIndex, zeroOrAutoZIndexOrTransformedOrOpacity, positiveZIndex, nonPositionedFloats, nonPositionedInlineLevel];
};

var sortByZIndex = function sortByZIndex(a, b) {
    if (a.container.style.zIndex.order > b.container.style.zIndex.order) {
        return 1;
    } else if (a.container.style.zIndex.order < b.container.style.zIndex.order) {
        return -1;
    }

    return a.container.index > b.container.index ? 1 : -1;
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformWebkitRadialGradientArgs = exports.parseGradient = exports.RadialGradient = exports.LinearGradient = exports.RADIAL_GRADIENT_SHAPE = exports.GRADIENT_TYPE = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _NodeContainer = __webpack_require__(3);

var _NodeContainer2 = _interopRequireDefault(_NodeContainer);

var _Angle = __webpack_require__(53);

var _Color = __webpack_require__(0);

var _Color2 = _interopRequireDefault(_Color);

var _Length = __webpack_require__(1);

var _Length2 = _interopRequireDefault(_Length);

var _Util = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SIDE_OR_CORNER = /^(to )?(left|top|right|bottom)( (left|top|right|bottom))?$/i;
var PERCENTAGE_ANGLES = /^([+-]?\d*\.?\d+)% ([+-]?\d*\.?\d+)%$/i;
var ENDS_WITH_LENGTH = /(px)|%|( 0)$/i;
var FROM_TO_COLORSTOP = /^(from|to|color-stop)\((?:([\d.]+)(%)?,\s*)?(.+?)\)$/i;
var RADIAL_SHAPE_DEFINITION = /^\s*(circle|ellipse)?\s*((?:([\d.]+)(px|r?em|%)\s*(?:([\d.]+)(px|r?em|%))?)|closest-side|closest-corner|farthest-side|farthest-corner)?\s*(?:at\s*(?:(left|center|right)|([\d.]+)(px|r?em|%))\s+(?:(top|center|bottom)|([\d.]+)(px|r?em|%)))?(?:\s|$)/i;

var GRADIENT_TYPE = exports.GRADIENT_TYPE = {
    LINEAR_GRADIENT: 0,
    RADIAL_GRADIENT: 1
};

var RADIAL_GRADIENT_SHAPE = exports.RADIAL_GRADIENT_SHAPE = {
    CIRCLE: 0,
    ELLIPSE: 1
};

var LENGTH_FOR_POSITION = {
    left: new _Length2.default('0%'),
    top: new _Length2.default('0%'),
    center: new _Length2.default('50%'),
    right: new _Length2.default('100%'),
    bottom: new _Length2.default('100%')
};

var LinearGradient = exports.LinearGradient = function LinearGradient(colorStops, direction) {
    _classCallCheck(this, LinearGradient);

    this.type = GRADIENT_TYPE.LINEAR_GRADIENT;
    this.colorStops = colorStops;
    this.direction = direction;
};

var RadialGradient = exports.RadialGradient = function RadialGradient(colorStops, shape, center, radius) {
    _classCallCheck(this, RadialGradient);

    this.type = GRADIENT_TYPE.RADIAL_GRADIENT;
    this.colorStops = colorStops;
    this.shape = shape;
    this.center = center;
    this.radius = radius;
};

var parseGradient = exports.parseGradient = function parseGradient(container, _ref, bounds) {
    var args = _ref.args,
        method = _ref.method,
        prefix = _ref.prefix;

    if (method === 'linear-gradient') {
        return parseLinearGradient(args, bounds, !!prefix);
    } else if (method === 'gradient' && args[0] === 'linear') {
        // TODO handle correct angle
        return parseLinearGradient(['to bottom'].concat(transformObsoleteColorStops(args.slice(3))), bounds, !!prefix);
    } else if (method === 'radial-gradient') {
        return parseRadialGradient(container, prefix === '-webkit-' ? transformWebkitRadialGradientArgs(args) : args, bounds);
    } else if (method === 'gradient' && args[0] === 'radial') {
        return parseRadialGradient(container, transformObsoleteColorStops(transformWebkitRadialGradientArgs(args.slice(1))), bounds);
    }
};

var parseColorStops = function parseColorStops(args, firstColorStopIndex, lineLength) {
    var colorStops = [];

    for (var i = firstColorStopIndex; i < args.length; i++) {
        var value = args[i];
        var HAS_LENGTH = ENDS_WITH_LENGTH.test(value);
        var lastSpaceIndex = value.lastIndexOf(' ');
        var _color = new _Color2.default(HAS_LENGTH ? value.substring(0, lastSpaceIndex) : value);
        var _stop = HAS_LENGTH ? new _Length2.default(value.substring(lastSpaceIndex + 1)) : i === firstColorStopIndex ? new _Length2.default('0%') : i === args.length - 1 ? new _Length2.default('100%') : null;
        colorStops.push({ color: _color, stop: _stop });
    }

    var absoluteValuedColorStops = colorStops.map(function (_ref2) {
        var color = _ref2.color,
            stop = _ref2.stop;

        var absoluteStop = lineLength === 0 ? 0 : stop ? stop.getAbsoluteValue(lineLength) / lineLength : null;

        return {
            color: color,
            // $FlowFixMe
            stop: absoluteStop
        };
    });

    var previousColorStop = absoluteValuedColorStops[0].stop;
    for (var _i = 0; _i < absoluteValuedColorStops.length; _i++) {
        if (previousColorStop !== null) {
            var _stop2 = absoluteValuedColorStops[_i].stop;
            if (_stop2 === null) {
                var n = _i;
                while (absoluteValuedColorStops[n].stop === null) {
                    n++;
                }
                var steps = n - _i + 1;
                var nextColorStep = absoluteValuedColorStops[n].stop;
                var stepSize = (nextColorStep - previousColorStop) / steps;
                for (; _i < n; _i++) {
                    previousColorStop = absoluteValuedColorStops[_i].stop = previousColorStop + stepSize;
                }
            } else {
                previousColorStop = _stop2;
            }
        }
    }

    return absoluteValuedColorStops;
};

var parseLinearGradient = function parseLinearGradient(args, bounds, hasPrefix) {
    var angle = (0, _Angle.parseAngle)(args[0]);
    var HAS_SIDE_OR_CORNER = SIDE_OR_CORNER.test(args[0]);
    var HAS_DIRECTION = HAS_SIDE_OR_CORNER || angle !== null || PERCENTAGE_ANGLES.test(args[0]);
    var direction = HAS_DIRECTION ? angle !== null ? calculateGradientDirection(
    // if there is a prefix, the 0° angle points due East (instead of North per W3C)
    hasPrefix ? angle - Math.PI * 0.5 : angle, bounds) : HAS_SIDE_OR_CORNER ? parseSideOrCorner(args[0], bounds) : parsePercentageAngle(args[0], bounds) : calculateGradientDirection(Math.PI, bounds);
    var firstColorStopIndex = HAS_DIRECTION ? 1 : 0;

    // TODO: Fix some inaccuracy with color stops with px values
    var lineLength = Math.min((0, _Util.distance)(Math.abs(direction.x0) + Math.abs(direction.x1), Math.abs(direction.y0) + Math.abs(direction.y1)), bounds.width * 2, bounds.height * 2);

    return new LinearGradient(parseColorStops(args, firstColorStopIndex, lineLength), direction);
};

var parseRadialGradient = function parseRadialGradient(container, args, bounds) {
    var m = args[0].match(RADIAL_SHAPE_DEFINITION);
    var shape = m && (m[1] === 'circle' || // explicit shape specification
    m[3] !== undefined && m[5] === undefined) // only one radius coordinate
    ? RADIAL_GRADIENT_SHAPE.CIRCLE : RADIAL_GRADIENT_SHAPE.ELLIPSE;
    var radius = {};
    var center = {};

    if (m) {
        // Radius
        if (m[3] !== undefined) {
            radius.x = (0, _Length.calculateLengthFromValueWithUnit)(container, m[3], m[4]).getAbsoluteValue(bounds.width);
        }

        if (m[5] !== undefined) {
            radius.y = (0, _Length.calculateLengthFromValueWithUnit)(container, m[5], m[6]).getAbsoluteValue(bounds.height);
        }

        // Position
        if (m[7]) {
            center.x = LENGTH_FOR_POSITION[m[7].toLowerCase()];
        } else if (m[8] !== undefined) {
            center.x = (0, _Length.calculateLengthFromValueWithUnit)(container, m[8], m[9]);
        }

        if (m[10]) {
            center.y = LENGTH_FOR_POSITION[m[10].toLowerCase()];
        } else if (m[11] !== undefined) {
            center.y = (0, _Length.calculateLengthFromValueWithUnit)(container, m[11], m[12]);
        }
    }

    var gradientCenter = {
        x: center.x === undefined ? bounds.width / 2 : center.x.getAbsoluteValue(bounds.width),
        y: center.y === undefined ? bounds.height / 2 : center.y.getAbsoluteValue(bounds.height)
    };
    var gradientRadius = calculateRadius(m && m[2] || 'farthest-corner', shape, gradientCenter, radius, bounds);

    return new RadialGradient(parseColorStops(args, m ? 1 : 0, Math.min(gradientRadius.x, gradientRadius.y)), shape, gradientCenter, gradientRadius);
};

var calculateGradientDirection = function calculateGradientDirection(radian, bounds) {
    var width = bounds.width;
    var height = bounds.height;
    var HALF_WIDTH = width * 0.5;
    var HALF_HEIGHT = height * 0.5;
    var lineLength = Math.abs(width * Math.sin(radian)) + Math.abs(height * Math.cos(radian));
    var HALF_LINE_LENGTH = lineLength / 2;

    var x0 = HALF_WIDTH + Math.sin(radian) * HALF_LINE_LENGTH;
    var y0 = HALF_HEIGHT - Math.cos(radian) * HALF_LINE_LENGTH;
    var x1 = width - x0;
    var y1 = height - y0;

    return { x0: x0, x1: x1, y0: y0, y1: y1 };
};

var parseTopRight = function parseTopRight(bounds) {
    return Math.acos(bounds.width / 2 / ((0, _Util.distance)(bounds.width, bounds.height) / 2));
};

var parseSideOrCorner = function parseSideOrCorner(side, bounds) {
    switch (side) {
        case 'bottom':
        case 'to top':
            return calculateGradientDirection(0, bounds);
        case 'left':
        case 'to right':
            return calculateGradientDirection(Math.PI / 2, bounds);
        case 'right':
        case 'to left':
            return calculateGradientDirection(3 * Math.PI / 2, bounds);
        case 'top right':
        case 'right top':
        case 'to bottom left':
        case 'to left bottom':
            return calculateGradientDirection(Math.PI + parseTopRight(bounds), bounds);
        case 'top left':
        case 'left top':
        case 'to bottom right':
        case 'to right bottom':
            return calculateGradientDirection(Math.PI - parseTopRight(bounds), bounds);
        case 'bottom left':
        case 'left bottom':
        case 'to top right':
        case 'to right top':
            return calculateGradientDirection(parseTopRight(bounds), bounds);
        case 'bottom right':
        case 'right bottom':
        case 'to top left':
        case 'to left top':
            return calculateGradientDirection(2 * Math.PI - parseTopRight(bounds), bounds);
        case 'top':
        case 'to bottom':
        default:
            return calculateGradientDirection(Math.PI, bounds);
    }
};

var parsePercentageAngle = function parsePercentageAngle(angle, bounds) {
    var _angle$split$map = angle.split(' ').map(parseFloat),
        _angle$split$map2 = _slicedToArray(_angle$split$map, 2),
        left = _angle$split$map2[0],
        top = _angle$split$map2[1];

    var ratio = left / 100 * bounds.width / (top / 100 * bounds.height);

    return calculateGradientDirection(Math.atan(isNaN(ratio) ? 1 : ratio) + Math.PI / 2, bounds);
};

var findCorner = function findCorner(bounds, x, y, closest) {
    var corners = [{ x: 0, y: 0 }, { x: 0, y: bounds.height }, { x: bounds.width, y: 0 }, { x: bounds.width, y: bounds.height }];

    // $FlowFixMe
    return corners.reduce(function (stat, corner) {
        var d = (0, _Util.distance)(x - corner.x, y - corner.y);
        if (closest ? d < stat.optimumDistance : d > stat.optimumDistance) {
            return {
                optimumCorner: corner,
                optimumDistance: d
            };
        }

        return stat;
    }, {
        optimumDistance: closest ? Infinity : -Infinity,
        optimumCorner: null
    }).optimumCorner;
};

var calculateRadius = function calculateRadius(extent, shape, center, radius, bounds) {
    var x = center.x;
    var y = center.y;
    var rx = 0;
    var ry = 0;

    switch (extent) {
        case 'closest-side':
            // The ending shape is sized so that that it exactly meets the side of the gradient box closest to the gradient’s center.
            // If the shape is an ellipse, it exactly meets the closest side in each dimension.
            if (shape === RADIAL_GRADIENT_SHAPE.CIRCLE) {
                rx = ry = Math.min(Math.abs(x), Math.abs(x - bounds.width), Math.abs(y), Math.abs(y - bounds.height));
            } else if (shape === RADIAL_GRADIENT_SHAPE.ELLIPSE) {
                rx = Math.min(Math.abs(x), Math.abs(x - bounds.width));
                ry = Math.min(Math.abs(y), Math.abs(y - bounds.height));
            }
            break;

        case 'closest-corner':
            // The ending shape is sized so that that it passes through the corner of the gradient box closest to the gradient’s center.
            // If the shape is an ellipse, the ending shape is given the same aspect-ratio it would have if closest-side were specified.
            if (shape === RADIAL_GRADIENT_SHAPE.CIRCLE) {
                rx = ry = Math.min((0, _Util.distance)(x, y), (0, _Util.distance)(x, y - bounds.height), (0, _Util.distance)(x - bounds.width, y), (0, _Util.distance)(x - bounds.width, y - bounds.height));
            } else if (shape === RADIAL_GRADIENT_SHAPE.ELLIPSE) {
                // Compute the ratio ry/rx (which is to be the same as for "closest-side")
                var c = Math.min(Math.abs(y), Math.abs(y - bounds.height)) / Math.min(Math.abs(x), Math.abs(x - bounds.width));
                var corner = findCorner(bounds, x, y, true);
                rx = (0, _Util.distance)(corner.x - x, (corner.y - y) / c);
                ry = c * rx;
            }
            break;

        case 'farthest-side':
            // Same as closest-side, except the ending shape is sized based on the farthest side(s)
            if (shape === RADIAL_GRADIENT_SHAPE.CIRCLE) {
                rx = ry = Math.max(Math.abs(x), Math.abs(x - bounds.width), Math.abs(y), Math.abs(y - bounds.height));
            } else if (shape === RADIAL_GRADIENT_SHAPE.ELLIPSE) {
                rx = Math.max(Math.abs(x), Math.abs(x - bounds.width));
                ry = Math.max(Math.abs(y), Math.abs(y - bounds.height));
            }
            break;

        case 'farthest-corner':
            // Same as closest-corner, except the ending shape is sized based on the farthest corner.
            // If the shape is an ellipse, the ending shape is given the same aspect ratio it would have if farthest-side were specified.
            if (shape === RADIAL_GRADIENT_SHAPE.CIRCLE) {
                rx = ry = Math.max((0, _Util.distance)(x, y), (0, _Util.distance)(x, y - bounds.height), (0, _Util.distance)(x - bounds.width, y), (0, _Util.distance)(x - bounds.width, y - bounds.height));
            } else if (shape === RADIAL_GRADIENT_SHAPE.ELLIPSE) {
                // Compute the ratio ry/rx (which is to be the same as for "farthest-side")
                var _c = Math.max(Math.abs(y), Math.abs(y - bounds.height)) / Math.max(Math.abs(x), Math.abs(x - bounds.width));
                var _corner = findCorner(bounds, x, y, false);
                rx = (0, _Util.distance)(_corner.x - x, (_corner.y - y) / _c);
                ry = _c * rx;
            }
            break;

        default:
            // pixel or percentage values
            rx = radius.x || 0;
            ry = radius.y !== undefined ? radius.y : rx;
            break;
    }

    return {
        x: rx,
        y: ry
    };
};

var transformWebkitRadialGradientArgs = exports.transformWebkitRadialGradientArgs = function transformWebkitRadialGradientArgs(args) {
    var shape = '';
    var radius = '';
    var extent = '';
    var position = '';
    var idx = 0;

    var POSITION = /^(left|center|right|\d+(?:px|r?em|%)?)(?:\s+(top|center|bottom|\d+(?:px|r?em|%)?))?$/i;
    var SHAPE_AND_EXTENT = /^(circle|ellipse)?\s*(closest-side|closest-corner|farthest-side|farthest-corner|contain|cover)?$/i;
    var RADIUS = /^\d+(px|r?em|%)?(?:\s+\d+(px|r?em|%)?)?$/i;

    var matchStartPosition = args[idx].match(POSITION);
    if (matchStartPosition) {
        idx++;
    }

    var matchShapeExtent = args[idx].match(SHAPE_AND_EXTENT);
    if (matchShapeExtent) {
        shape = matchShapeExtent[1] || '';
        extent = matchShapeExtent[2] || '';
        if (extent === 'contain') {
            extent = 'closest-side';
        } else if (extent === 'cover') {
            extent = 'farthest-corner';
        }
        idx++;
    }

    var matchStartRadius = args[idx].match(RADIUS);
    if (matchStartRadius) {
        idx++;
    }

    var matchEndPosition = args[idx].match(POSITION);
    if (matchEndPosition) {
        idx++;
    }

    var matchEndRadius = args[idx].match(RADIUS);
    if (matchEndRadius) {
        idx++;
    }

    var matchPosition = matchEndPosition || matchStartPosition;
    if (matchPosition && matchPosition[1]) {
        position = matchPosition[1] + (/^\d+$/.test(matchPosition[1]) ? 'px' : '');
        if (matchPosition[2]) {
            position += ' ' + matchPosition[2] + (/^\d+$/.test(matchPosition[2]) ? 'px' : '');
        }
    }

    var matchRadius = matchEndRadius || matchStartRadius;
    if (matchRadius) {
        radius = matchRadius[0];
        if (!matchRadius[1]) {
            radius += 'px';
        }
    }

    if (position && !shape && !radius && !extent) {
        radius = position;
        position = '';
    }

    if (position) {
        position = 'at ' + position;
    }

    return [[shape, extent, radius, position].filter(function (s) {
        return !!s;
    }).join(' ')].concat(args.slice(idx));
};

var transformObsoleteColorStops = function transformObsoleteColorStops(args) {
    return args.map(function (color) {
        return color.match(FROM_TO_COLORSTOP);
    })
    // $FlowFixMe
    .map(function (v, index) {
        if (!v) {
            return args[index];
        }

        switch (v[1]) {
            case 'from':
                return v[4] + ' 0%';
            case 'to':
                return v[4] + ' 100%';
            case 'color-stop':
                if (v[3] === '%') {
                    return v[4] + ' ' + v[2];
                }
                return v[4] + ' ' + parseFloat(v[2]) * 100 + '%';
        }
    });
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var ANGLE = /([+-]?\d*\.?\d+)(deg|grad|rad|turn)/i;

var parseAngle = exports.parseAngle = function parseAngle(angle) {
    var match = angle.match(ANGLE);

    if (match) {
        var value = parseFloat(match[1]);
        switch (match[2].toLowerCase()) {
            case 'deg':
                return Math.PI * value / 180;
            case 'grad':
                return Math.PI / 200 * value;
            case 'rad':
                return value;
            case 'turn':
                return Math.PI * 2 * value;
        }
    }

    return null;
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cloneWindow = exports.DocumentCloner = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Bounds = __webpack_require__(2);

var _Proxy = __webpack_require__(26);

var _ResourceLoader = __webpack_require__(55);

var _ResourceLoader2 = _interopRequireDefault(_ResourceLoader);

var _Util = __webpack_require__(4);

var _background = __webpack_require__(5);

var _CanvasRenderer = __webpack_require__(15);

var _CanvasRenderer2 = _interopRequireDefault(_CanvasRenderer);

var _PseudoNodeContent = __webpack_require__(56);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IGNORE_ATTRIBUTE = 'data-html2canvas-ignore';

var DocumentCloner = exports.DocumentCloner = function () {
    function DocumentCloner(element, options, logger, copyInline, renderer) {
        _classCallCheck(this, DocumentCloner);

        this.referenceElement = element;
        this.scrolledElements = [];
        this.copyStyles = copyInline;
        this.inlineImages = copyInline;
        this.logger = logger;
        this.options = options;
        this.renderer = renderer;
        this.resourceLoader = new _ResourceLoader2.default(options, logger, window);
        this.pseudoContentData = {
            counters: {},
            quoteDepth: 0
        };
        // $FlowFixMe
        this.documentElement = this.cloneNode(element.ownerDocument.documentElement);
    }

    _createClass(DocumentCloner, [{
        key: 'inlineAllImages',
        value: function inlineAllImages(node) {
            var _this = this;

            if (this.inlineImages && node) {
                var style = node.style;
                Promise.all((0, _background.parseBackgroundImage)(style.backgroundImage).map(function (backgroundImage) {
                    if (backgroundImage.method === 'url') {
                        return _this.resourceLoader.inlineImage(backgroundImage.args[0]).then(function (img) {
                            return img && typeof img.src === 'string' ? 'url("' + img.src + '")' : 'none';
                        }).catch(function (e) {
                            if (true) {
                                _this.logger.log('Unable to load image', e);
                            }
                        });
                    }
                    return Promise.resolve('' + backgroundImage.prefix + backgroundImage.method + '(' + backgroundImage.args.join(',') + ')');
                })).then(function (backgroundImages) {
                    if (backgroundImages.length > 1) {
                        // TODO Multiple backgrounds somehow broken in Chrome
                        style.backgroundColor = '';
                    }
                    style.backgroundImage = backgroundImages.join(',');
                });

                if (node instanceof HTMLImageElement) {
                    this.resourceLoader.inlineImage(node.src).then(function (img) {
                        if (img && node instanceof HTMLImageElement && node.parentNode) {
                            var parentNode = node.parentNode;
                            var clonedChild = (0, _Util.copyCSSStyles)(node.style, img.cloneNode(false));
                            parentNode.replaceChild(clonedChild, node);
                        }
                    }).catch(function (e) {
                        if (true) {
                            _this.logger.log('Unable to load image', e);
                        }
                    });
                }
            }
        }
    }, {
        key: 'inlineFonts',
        value: function inlineFonts(document) {
            var _this2 = this;

            return Promise.all(Array.from(document.styleSheets).map(function (sheet) {
                if (sheet.href) {
                    return fetch(sheet.href).then(function (res) {
                        return res.text();
                    }).then(function (text) {
                        return createStyleSheetFontsFromText(text, sheet.href);
                    }).catch(function (e) {
                        if (true) {
                            _this2.logger.log('Unable to load stylesheet', e);
                        }
                        return [];
                    });
                }
                return getSheetFonts(sheet, document);
            })).then(function (fonts) {
                return fonts.reduce(function (acc, font) {
                    return acc.concat(font);
                }, []);
            }).then(function (fonts) {
                return Promise.all(fonts.map(function (font) {
                    return fetch(font.formats[0].src).then(function (response) {
                        return response.blob();
                    }).then(function (blob) {
                        return new Promise(function (resolve, reject) {
                            var reader = new FileReader();
                            reader.onerror = reject;
                            reader.onload = function () {
                                // $FlowFixMe
                                var result = reader.result;
                                resolve(result);
                            };
                            reader.readAsDataURL(blob);
                        });
                    }).then(function (dataUri) {
                        font.fontFace.setProperty('src', 'url("' + dataUri + '")');
                        return '@font-face {' + font.fontFace.cssText + ' ';
                    });
                }));
            }).then(function (fontCss) {
                var style = document.createElement('style');
                style.textContent = fontCss.join('\n');
                _this2.documentElement.appendChild(style);
            });
        }
    }, {
        key: 'createElementClone',
        value: function createElementClone(node) {
            var _this3 = this;

            if (this.copyStyles && node instanceof HTMLCanvasElement) {
                var img = node.ownerDocument.createElement('img');
                try {
                    img.src = node.toDataURL();
                    return img;
                } catch (e) {
                    if (true) {
                        this.logger.log('Unable to clone canvas contents, canvas is tainted');
                    }
                }
            }

            if (node instanceof HTMLIFrameElement) {
                var tempIframe = node.cloneNode(false);
                var iframeKey = generateIframeKey();
                tempIframe.setAttribute('data-html2canvas-internal-iframe-key', iframeKey);

                var _parseBounds = (0, _Bounds.parseBounds)(node, 0, 0),
                    width = _parseBounds.width,
                    height = _parseBounds.height;

                this.resourceLoader.cache[iframeKey] = getIframeDocumentElement(node, this.options).then(function (documentElement) {
                    return _this3.renderer(documentElement, {
                        async: _this3.options.async,
                        allowTaint: _this3.options.allowTaint,
                        backgroundColor: '#ffffff',
                        canvas: null,
                        imageTimeout: _this3.options.imageTimeout,
                        logging: _this3.options.logging,
                        proxy: _this3.options.proxy,
                        removeContainer: _this3.options.removeContainer,
                        scale: _this3.options.scale,
                        foreignObjectRendering: _this3.options.foreignObjectRendering,
                        useCORS: _this3.options.useCORS,
                        target: new _CanvasRenderer2.default(),
                        width: width,
                        height: height,
                        x: 0,
                        y: 0,
                        windowWidth: documentElement.ownerDocument.defaultView.innerWidth,
                        windowHeight: documentElement.ownerDocument.defaultView.innerHeight,
                        scrollX: documentElement.ownerDocument.defaultView.pageXOffset,
                        scrollY: documentElement.ownerDocument.defaultView.pageYOffset
                    }, _this3.logger.child(iframeKey));
                }).then(function (canvas) {
                    return new Promise(function (resolve, reject) {
                        var iframeCanvas = document.createElement('img');
                        iframeCanvas.onload = function () {
                            return resolve(canvas);
                        };
                        iframeCanvas.onerror = reject;
                        iframeCanvas.src = canvas.toDataURL();
                        if (tempIframe.parentNode) {
                            tempIframe.parentNode.replaceChild((0, _Util.copyCSSStyles)(node.ownerDocument.defaultView.getComputedStyle(node), iframeCanvas), tempIframe);
                        }
                    });
                });
                return tempIframe;
            }

            if (node instanceof HTMLStyleElement && node.sheet && node.sheet.cssRules) {
                var css = [].slice.call(node.sheet.cssRules, 0).reduce(function (css, rule) {
                    try {
                        if (rule && rule.cssText) {
                            return css + rule.cssText;
                        }
                        return css;
                    } catch (err) {
                        _this3.logger.log('Unable to access cssText property', rule.name);
                        return css;
                    }
                }, '');
                var style = node.cloneNode(false);
                style.textContent = css;
                return style;
            }

            return node.cloneNode(false);
        }
    }, {
        key: 'cloneNode',
        value: function cloneNode(node) {
            var clone = node.nodeType === Node.TEXT_NODE ? document.createTextNode(node.nodeValue) : this.createElementClone(node);

            var window = node.ownerDocument.defaultView;
            var style = node instanceof window.HTMLElement ? window.getComputedStyle(node) : null;
            var styleBefore = node instanceof window.HTMLElement ? window.getComputedStyle(node, ':before') : null;
            var styleAfter = node instanceof window.HTMLElement ? window.getComputedStyle(node, ':after') : null;

            if (this.referenceElement === node && clone instanceof window.HTMLElement) {
                this.clonedReferenceElement = clone;
            }

            if (clone instanceof window.HTMLBodyElement) {
                createPseudoHideStyles(clone);
            }

            var counters = (0, _PseudoNodeContent.parseCounterReset)(style, this.pseudoContentData);
            var contentBefore = (0, _PseudoNodeContent.resolvePseudoContent)(node, styleBefore, this.pseudoContentData);

            for (var child = node.firstChild; child; child = child.nextSibling) {
                if (child.nodeType !== Node.ELEMENT_NODE || child.nodeName !== 'SCRIPT' &&
                // $FlowFixMe
                !child.hasAttribute(IGNORE_ATTRIBUTE) && (typeof this.options.ignoreElements !== 'function' ||
                // $FlowFixMe
                !this.options.ignoreElements(child))) {
                    if (!this.copyStyles || child.nodeName !== 'STYLE') {
                        clone.appendChild(this.cloneNode(child));
                    }
                }
            }

            var contentAfter = (0, _PseudoNodeContent.resolvePseudoContent)(node, styleAfter, this.pseudoContentData);
            (0, _PseudoNodeContent.popCounters)(counters, this.pseudoContentData);

            if (node instanceof window.HTMLElement && clone instanceof window.HTMLElement) {
                if (styleBefore) {
                    this.inlineAllImages(inlinePseudoElement(node, clone, styleBefore, contentBefore, PSEUDO_BEFORE));
                }
                if (styleAfter) {
                    this.inlineAllImages(inlinePseudoElement(node, clone, styleAfter, contentAfter, PSEUDO_AFTER));
                }
                if (style && this.copyStyles && !(node instanceof HTMLIFrameElement)) {
                    (0, _Util.copyCSSStyles)(style, clone);
                }
                this.inlineAllImages(clone);
                if (node.scrollTop !== 0 || node.scrollLeft !== 0) {
                    this.scrolledElements.push([clone, node.scrollLeft, node.scrollTop]);
                }
                switch (node.nodeName) {
                    case 'CANVAS':
                        if (!this.copyStyles) {
                            cloneCanvasContents(node, clone);
                        }
                        break;
                    case 'TEXTAREA':
                    case 'SELECT':
                        clone.value = node.value;
                        break;
                }
            }
            return clone;
        }
    }]);

    return DocumentCloner;
}();

var getSheetFonts = function getSheetFonts(sheet, document) {
    // $FlowFixMe
    return (sheet.cssRules ? Array.from(sheet.cssRules) : []).filter(function (rule) {
        return rule.type === CSSRule.FONT_FACE_RULE;
    }).map(function (rule) {
        var src = (0, _background.parseBackgroundImage)(rule.style.getPropertyValue('src'));
        var formats = [];
        for (var i = 0; i < src.length; i++) {
            if (src[i].method === 'url' && src[i + 1] && src[i + 1].method === 'format') {
                var a = document.createElement('a');
                a.href = src[i].args[0];
                if (document.body) {
                    document.body.appendChild(a);
                }

                var font = {
                    src: a.href,
                    format: src[i + 1].args[0]
                };
                formats.push(font);
            }
        }

        return {
            // TODO select correct format for browser),

            formats: formats.filter(function (font) {
                return (/^woff/i.test(font.format)
                );
            }),
            fontFace: rule.style
        };
    }).filter(function (font) {
        return font.formats.length;
    });
};

var createStyleSheetFontsFromText = function createStyleSheetFontsFromText(text, baseHref) {
    var doc = document.implementation.createHTMLDocument('');
    var base = document.createElement('base');
    // $FlowFixMe
    base.href = baseHref;
    var style = document.createElement('style');

    style.textContent = text;
    if (doc.head) {
        doc.head.appendChild(base);
    }
    if (doc.body) {
        doc.body.appendChild(style);
    }

    return style.sheet ? getSheetFonts(style.sheet, doc) : [];
};

var restoreOwnerScroll = function restoreOwnerScroll(ownerDocument, x, y) {
    if (ownerDocument.defaultView && (x !== ownerDocument.defaultView.pageXOffset || y !== ownerDocument.defaultView.pageYOffset)) {
        ownerDocument.defaultView.scrollTo(x, y);
    }
};

var cloneCanvasContents = function cloneCanvasContents(canvas, clonedCanvas) {
    try {
        if (clonedCanvas) {
            clonedCanvas.width = canvas.width;
            clonedCanvas.height = canvas.height;
            var ctx = canvas.getContext('2d');
            var clonedCtx = clonedCanvas.getContext('2d');
            if (ctx) {
                clonedCtx.putImageData(ctx.getImageData(0, 0, canvas.width, canvas.height), 0, 0);
            } else {
                clonedCtx.drawImage(canvas, 0, 0);
            }
        }
    } catch (e) {}
};

var inlinePseudoElement = function inlinePseudoElement(node, clone, style, contentItems, pseudoElt) {
    if (!style || !style.content || style.content === 'none' || style.content === '-moz-alt-content' || style.display === 'none') {
        return;
    }

    var anonymousReplacedElement = clone.ownerDocument.createElement('html2canvaspseudoelement');
    (0, _Util.copyCSSStyles)(style, anonymousReplacedElement);

    if (contentItems) {
        var len = contentItems.length;
        for (var i = 0; i < len; i++) {
            var item = contentItems[i];
            switch (item.type) {
                case _PseudoNodeContent.PSEUDO_CONTENT_ITEM_TYPE.IMAGE:
                    var img = clone.ownerDocument.createElement('img');
                    img.src = (0, _background.parseBackgroundImage)('url(' + item.value + ')')[0].args[0];
                    img.style.opacity = '1';
                    anonymousReplacedElement.appendChild(img);
                    break;
                case _PseudoNodeContent.PSEUDO_CONTENT_ITEM_TYPE.TEXT:
                    anonymousReplacedElement.appendChild(clone.ownerDocument.createTextNode(item.value));
                    break;
            }
        }
    }

    anonymousReplacedElement.className = PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + ' ' + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
    clone.className += pseudoElt === PSEUDO_BEFORE ? ' ' + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE : ' ' + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
    if (pseudoElt === PSEUDO_BEFORE) {
        clone.insertBefore(anonymousReplacedElement, clone.firstChild);
    } else {
        clone.appendChild(anonymousReplacedElement);
    }

    return anonymousReplacedElement;
};

var URL_REGEXP = /^url\((.+)\)$/i;
var PSEUDO_BEFORE = ':before';
var PSEUDO_AFTER = ':after';
var PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = '___html2canvas___pseudoelement_before';
var PSEUDO_HIDE_ELEMENT_CLASS_AFTER = '___html2canvas___pseudoelement_after';

var PSEUDO_HIDE_ELEMENT_STYLE = '{\n    content: "" !important;\n    display: none !important;\n}';

var createPseudoHideStyles = function createPseudoHideStyles(body) {
    createStyles(body, '.' + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + PSEUDO_BEFORE + PSEUDO_HIDE_ELEMENT_STYLE + '\n         .' + PSEUDO_HIDE_ELEMENT_CLASS_AFTER + PSEUDO_AFTER + PSEUDO_HIDE_ELEMENT_STYLE);
};

var createStyles = function createStyles(body, styles) {
    var style = body.ownerDocument.createElement('style');
    style.innerHTML = styles;
    body.appendChild(style);
};

var initNode = function initNode(_ref) {
    var _ref2 = _slicedToArray(_ref, 3),
        element = _ref2[0],
        x = _ref2[1],
        y = _ref2[2];

    element.scrollLeft = x;
    element.scrollTop = y;
};

var generateIframeKey = function generateIframeKey() {
    return Math.ceil(Date.now() + Math.random() * 10000000).toString(16);
};

var DATA_URI_REGEXP = /^data:text\/(.+);(base64)?,(.*)$/i;

var getIframeDocumentElement = function getIframeDocumentElement(node, options) {
    try {
        return Promise.resolve(node.contentWindow.document.documentElement);
    } catch (e) {
        return options.proxy ? (0, _Proxy.Proxy)(node.src, options).then(function (html) {
            var match = html.match(DATA_URI_REGEXP);
            if (!match) {
                return Promise.reject();
            }

            return match[2] === 'base64' ? window.atob(decodeURIComponent(match[3])) : decodeURIComponent(match[3]);
        }).then(function (html) {
            return createIframeContainer(node.ownerDocument, (0, _Bounds.parseBounds)(node, 0, 0)).then(function (cloneIframeContainer) {
                var cloneWindow = cloneIframeContainer.contentWindow;
                var documentClone = cloneWindow.document;

                documentClone.open();
                documentClone.write(html);
                var iframeLoad = iframeLoader(cloneIframeContainer).then(function () {
                    return documentClone.documentElement;
                });

                documentClone.close();
                return iframeLoad;
            });
        }) : Promise.reject();
    }
};

var createIframeContainer = function createIframeContainer(ownerDocument, bounds) {
    var cloneIframeContainer = ownerDocument.createElement('iframe');

    cloneIframeContainer.className = 'html2canvas-container';
    cloneIframeContainer.style.visibility = 'hidden';
    cloneIframeContainer.style.position = 'fixed';
    cloneIframeContainer.style.left = '-10000px';
    cloneIframeContainer.style.top = '0px';
    cloneIframeContainer.style.border = '0';
    cloneIframeContainer.width = bounds.width.toString();
    cloneIframeContainer.height = bounds.height.toString();
    cloneIframeContainer.scrolling = 'no'; // ios won't scroll without it
    cloneIframeContainer.setAttribute(IGNORE_ATTRIBUTE, 'true');
    if (!ownerDocument.body) {
        return Promise.reject( true ? 'Body element not found in Document that is getting rendered' : undefined);
    }

    ownerDocument.body.appendChild(cloneIframeContainer);

    return Promise.resolve(cloneIframeContainer);
};

var iframeLoader = function iframeLoader(cloneIframeContainer) {
    var cloneWindow = cloneIframeContainer.contentWindow;
    var documentClone = cloneWindow.document;

    return new Promise(function (resolve, reject) {
        cloneWindow.onload = cloneIframeContainer.onload = documentClone.onreadystatechange = function () {
            var interval = setInterval(function () {
                if (documentClone.body.childNodes.length > 0 && documentClone.readyState === 'complete') {
                    clearInterval(interval);
                    resolve(cloneIframeContainer);
                }
            }, 50);
        };
    });
};

var cloneWindow = exports.cloneWindow = function cloneWindow(ownerDocument, bounds, referenceElement, options, logger, renderer) {
    var cloner = new DocumentCloner(referenceElement, options, logger, false, renderer);
    var scrollX = ownerDocument.defaultView.pageXOffset;
    var scrollY = ownerDocument.defaultView.pageYOffset;

    return createIframeContainer(ownerDocument, bounds).then(function (cloneIframeContainer) {
        var cloneWindow = cloneIframeContainer.contentWindow;
        var documentClone = cloneWindow.document;

        /* Chrome doesn't detect relative background-images assigned in inline <style> sheets when fetched through getComputedStyle
             if window url is about:blank, we can assign the url to current by writing onto the document
             */

        var iframeLoad = iframeLoader(cloneIframeContainer).then(function () {
            cloner.scrolledElements.forEach(initNode);
            cloneWindow.scrollTo(bounds.left, bounds.top);
            if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (cloneWindow.scrollY !== bounds.top || cloneWindow.scrollX !== bounds.left)) {
                documentClone.documentElement.style.top = -bounds.top + 'px';
                documentClone.documentElement.style.left = -bounds.left + 'px';
                documentClone.documentElement.style.position = 'absolute';
            }

            var result = Promise.resolve([cloneIframeContainer, cloner.clonedReferenceElement, cloner.resourceLoader]);

            var onclone = options.onclone;

            return cloner.clonedReferenceElement instanceof cloneWindow.HTMLElement || cloner.clonedReferenceElement instanceof ownerDocument.defaultView.HTMLElement || cloner.clonedReferenceElement instanceof HTMLElement ? typeof onclone === 'function' ? Promise.resolve().then(function () {
                return onclone(documentClone);
            }).then(function () {
                return result;
            }) : result : Promise.reject( true ? 'Error finding the ' + referenceElement.nodeName + ' in the cloned document' : undefined);
        });

        documentClone.open();
        documentClone.write(serializeDoctype(document.doctype) + '<html></html>');
        // Chrome scrolls the parent document for some reason after the write to the cloned window???
        restoreOwnerScroll(referenceElement.ownerDocument, scrollX, scrollY);
        documentClone.replaceChild(documentClone.adoptNode(cloner.documentElement), documentClone.documentElement);
        documentClone.close();

        return iframeLoad;
    });
};

var serializeDoctype = function serializeDoctype(doctype) {
    var str = '';
    if (doctype) {
        str += '<!DOCTYPE ';
        if (doctype.name) {
            str += doctype.name;
        }

        if (doctype.internalSubset) {
            str += doctype.internalSubset;
        }

        if (doctype.publicId) {
            str += '"' + doctype.publicId + '"';
        }

        if (doctype.systemId) {
            str += '"' + doctype.systemId + '"';
        }

        str += '>';
    }

    return str;
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ResourceStore = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Feature = __webpack_require__(10);

var _Feature2 = _interopRequireDefault(_Feature);

var _Proxy = __webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ResourceLoader = function () {
    function ResourceLoader(options, logger, window) {
        _classCallCheck(this, ResourceLoader);

        this.options = options;
        this._window = window;
        this.origin = this.getOrigin(window.location.href);
        this.cache = {};
        this.logger = logger;
        this._index = 0;
    }

    _createClass(ResourceLoader, [{
        key: 'loadImage',
        value: function loadImage(src) {
            var _this = this;

            if (this.hasResourceInCache(src)) {
                return src;
            }
            if (isBlobImage(src)) {
                this.cache[src] = _loadImage(src, this.options.imageTimeout || 0);
                return src;
            }

            if (!isSVG(src) || _Feature2.default.SUPPORT_SVG_DRAWING) {
                if (this.options.allowTaint === true || isInlineImage(src) || this.isSameOrigin(src)) {
                    return this.addImage(src, src, false);
                } else if (!this.isSameOrigin(src)) {
                    if (typeof this.options.proxy === 'string') {
                        this.cache[src] = (0, _Proxy.Proxy)(src, this.options).then(function (src) {
                            return _loadImage(src, _this.options.imageTimeout || 0);
                        });
                        return src;
                    } else if (this.options.useCORS === true && _Feature2.default.SUPPORT_CORS_IMAGES) {
                        return this.addImage(src, src, true);
                    }
                }
            }
        }
    }, {
        key: 'inlineImage',
        value: function inlineImage(src) {
            var _this2 = this;

            if (isInlineImage(src)) {
                return _loadImage(src, this.options.imageTimeout || 0);
            }
            if (this.hasResourceInCache(src)) {
                return this.cache[src];
            }
            if (!this.isSameOrigin(src) && typeof this.options.proxy === 'string') {
                return this.cache[src] = (0, _Proxy.Proxy)(src, this.options).then(function (src) {
                    return _loadImage(src, _this2.options.imageTimeout || 0);
                });
            }

            return this.xhrImage(src);
        }
    }, {
        key: 'xhrImage',
        value: function xhrImage(src) {
            var _this3 = this;

            this.cache[src] = new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        if (xhr.status !== 200) {
                            reject('Failed to fetch image ' + src.substring(0, 256) + ' with status code ' + xhr.status);
                        } else {
                            var reader = new FileReader();
                            reader.addEventListener('load', function () {
                                // $FlowFixMe
                                var result = reader.result;
                                resolve(result);
                            }, false);
                            reader.addEventListener('error', function (e) {
                                return reject(e);
                            }, false);
                            reader.readAsDataURL(xhr.response);
                        }
                    }
                };
                xhr.responseType = 'blob';
                if (_this3.options.imageTimeout) {
                    var timeout = _this3.options.imageTimeout;
                    xhr.timeout = timeout;
                    xhr.ontimeout = function () {
                        return reject( true ? 'Timed out (' + timeout + 'ms) fetching ' + src.substring(0, 256) : undefined);
                    };
                }
                xhr.open('GET', src, true);
                xhr.send();
            }).then(function (src) {
                return _loadImage(src, _this3.options.imageTimeout || 0);
            });

            return this.cache[src];
        }
    }, {
        key: 'loadCanvas',
        value: function loadCanvas(node) {
            var key = String(this._index++);
            this.cache[key] = Promise.resolve(node);
            return key;
        }
    }, {
        key: 'hasResourceInCache',
        value: function hasResourceInCache(key) {
            return typeof this.cache[key] !== 'undefined';
        }
    }, {
        key: 'addImage',
        value: function addImage(key, src, useCORS) {
            var _this4 = this;

            if (true) {
                this.logger.log('Added image ' + key.substring(0, 256));
            }

            var imageLoadHandler = function imageLoadHandler(supportsDataImages) {
                return new Promise(function (resolve, reject) {
                    var img = new Image();
                    img.onload = function () {
                        return resolve(img);
                    };
                    //ios safari 10.3 taints canvas with data urls unless crossOrigin is set to anonymous
                    if (!supportsDataImages || useCORS) {
                        img.crossOrigin = 'anonymous';
                    }

                    img.onerror = reject;
                    img.src = src;
                    if (img.complete === true) {
                        // Inline XML images may fail to parse, throwing an Error later on
                        setTimeout(function () {
                            resolve(img);
                        }, 500);
                    }
                    if (_this4.options.imageTimeout) {
                        var timeout = _this4.options.imageTimeout;
                        setTimeout(function () {
                            return reject( true ? 'Timed out (' + timeout + 'ms) fetching ' + src.substring(0, 256) : undefined);
                        }, timeout);
                    }
                });
            };

            this.cache[key] = isInlineBase64Image(src) && !isSVG(src) ? // $FlowFixMe
            _Feature2.default.SUPPORT_BASE64_DRAWING(src).then(imageLoadHandler) : imageLoadHandler(true);
            return key;
        }
    }, {
        key: 'isSameOrigin',
        value: function isSameOrigin(url) {
            return this.getOrigin(url) === this.origin;
        }
    }, {
        key: 'getOrigin',
        value: function getOrigin(url) {
            var link = this._link || (this._link = this._window.document.createElement('a'));
            link.href = url;
            link.href = link.href; // IE9, LOL! - http://jsfiddle.net/niklasvh/2e48b/
            return link.protocol + link.hostname + link.port;
        }
    }, {
        key: 'ready',
        value: function ready() {
            var _this5 = this;

            var keys = Object.keys(this.cache);
            var values = keys.map(function (str) {
                return _this5.cache[str].catch(function (e) {
                    if (true) {
                        _this5.logger.log('Unable to load image', e);
                    }
                    return null;
                });
            });
            return Promise.all(values).then(function (images) {
                if (true) {
                    _this5.logger.log('Finished loading ' + images.length + ' images', images);
                }
                return new ResourceStore(keys, images);
            });
        }
    }]);

    return ResourceLoader;
}();

exports.default = ResourceLoader;

var ResourceStore = exports.ResourceStore = function () {
    function ResourceStore(keys, resources) {
        _classCallCheck(this, ResourceStore);

        this._keys = keys;
        this._resources = resources;
    }

    _createClass(ResourceStore, [{
        key: 'get',
        value: function get(key) {
            var index = this._keys.indexOf(key);
            return index === -1 ? null : this._resources[index];
        }
    }]);

    return ResourceStore;
}();

var INLINE_SVG = /^data:image\/svg\+xml/i;
var INLINE_BASE64 = /^data:image\/.*;base64,/i;
var INLINE_IMG = /^data:image\/.*/i;

var isInlineImage = function isInlineImage(src) {
    return INLINE_IMG.test(src);
};
var isInlineBase64Image = function isInlineBase64Image(src) {
    return INLINE_BASE64.test(src);
};
var isBlobImage = function isBlobImage(src) {
    return src.substr(0, 4) === 'blob';
};

var isSVG = function isSVG(src) {
    return src.substr(-3).toLowerCase() === 'svg' || INLINE_SVG.test(src);
};

var _loadImage = function _loadImage(src, timeout) {
    return new Promise(function (resolve, reject) {
        var img = new Image();
        img.onload = function () {
            return resolve(img);
        };
        img.onerror = reject;
        img.src = src;
        if (img.complete === true) {
            // Inline XML images may fail to parse, throwing an Error later on
            setTimeout(function () {
                resolve(img);
            }, 500);
        }
        if (timeout) {
            setTimeout(function () {
                return reject( true ? 'Timed out (' + timeout + 'ms) loading image' : undefined);
            }, timeout);
        }
    });
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseContent = exports.resolvePseudoContent = exports.popCounters = exports.parseCounterReset = exports.TOKEN_TYPE = exports.PSEUDO_CONTENT_ITEM_TYPE = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _ListItem = __webpack_require__(14);

var _listStyle = __webpack_require__(8);

var PSEUDO_CONTENT_ITEM_TYPE = exports.PSEUDO_CONTENT_ITEM_TYPE = {
    TEXT: 0,
    IMAGE: 1
};

var TOKEN_TYPE = exports.TOKEN_TYPE = {
    STRING: 0,
    ATTRIBUTE: 1,
    URL: 2,
    COUNTER: 3,
    COUNTERS: 4,
    OPENQUOTE: 5,
    CLOSEQUOTE: 6
};

var parseCounterReset = exports.parseCounterReset = function parseCounterReset(style, data) {
    if (!style || !style.counterReset || style.counterReset === 'none') {
        return [];
    }

    var counterNames = [];
    var counterResets = style.counterReset.split(/\s*,\s*/);
    var lenCounterResets = counterResets.length;

    for (var i = 0; i < lenCounterResets; i++) {
        var _counterResets$i$spli = counterResets[i].split(/\s+/),
            _counterResets$i$spli2 = _slicedToArray(_counterResets$i$spli, 2),
            counterName = _counterResets$i$spli2[0],
            initialValue = _counterResets$i$spli2[1];

        counterNames.push(counterName);
        var counter = data.counters[counterName];
        if (!counter) {
            counter = data.counters[counterName] = [];
        }
        counter.push(parseInt(initialValue || 0, 10));
    }

    return counterNames;
};

var popCounters = exports.popCounters = function popCounters(counterNames, data) {
    var lenCounters = counterNames.length;
    for (var i = 0; i < lenCounters; i++) {
        data.counters[counterNames[i]].pop();
    }
};

var resolvePseudoContent = exports.resolvePseudoContent = function resolvePseudoContent(node, style, data) {
    if (!style || !style.content || style.content === 'none' || style.content === '-moz-alt-content' || style.display === 'none') {
        return null;
    }

    var tokens = parseContent(style.content);

    var len = tokens.length;
    var contentItems = [];
    var s = '';

    // increment the counter (if there is a "counter-increment" declaration)
    var counterIncrement = style.counterIncrement;
    if (counterIncrement && counterIncrement !== 'none') {
        var _counterIncrement$spl = counterIncrement.split(/\s+/),
            _counterIncrement$spl2 = _slicedToArray(_counterIncrement$spl, 2),
            counterName = _counterIncrement$spl2[0],
            incrementValue = _counterIncrement$spl2[1];

        var counter = data.counters[counterName];
        if (counter) {
            counter[counter.length - 1] += incrementValue === undefined ? 1 : parseInt(incrementValue, 10);
        }
    }

    // build the content string
    for (var i = 0; i < len; i++) {
        var token = tokens[i];
        switch (token.type) {
            case TOKEN_TYPE.STRING:
                s += token.value || '';
                break;

            case TOKEN_TYPE.ATTRIBUTE:
                if (node instanceof HTMLElement && token.value) {
                    s += node.getAttribute(token.value) || '';
                }
                break;

            case TOKEN_TYPE.COUNTER:
                var _counter = data.counters[token.name || ''];
                if (_counter) {
                    s += formatCounterValue([_counter[_counter.length - 1]], '', token.format);
                }
                break;

            case TOKEN_TYPE.COUNTERS:
                var _counters = data.counters[token.name || ''];
                if (_counters) {
                    s += formatCounterValue(_counters, token.glue, token.format);
                }
                break;

            case TOKEN_TYPE.OPENQUOTE:
                s += getQuote(style, true, data.quoteDepth);
                data.quoteDepth++;
                break;

            case TOKEN_TYPE.CLOSEQUOTE:
                data.quoteDepth--;
                s += getQuote(style, false, data.quoteDepth);
                break;

            case TOKEN_TYPE.URL:
                if (s) {
                    contentItems.push({ type: PSEUDO_CONTENT_ITEM_TYPE.TEXT, value: s });
                    s = '';
                }
                contentItems.push({ type: PSEUDO_CONTENT_ITEM_TYPE.IMAGE, value: token.value || '' });
                break;
        }
    }

    if (s) {
        contentItems.push({ type: PSEUDO_CONTENT_ITEM_TYPE.TEXT, value: s });
    }

    return contentItems;
};

var parseContent = exports.parseContent = function parseContent(content, cache) {
    if (cache && cache[content]) {
        return cache[content];
    }

    var tokens = [];
    var len = content.length;

    var isString = false;
    var isEscaped = false;
    var isFunction = false;
    var str = '';
    var functionName = '';
    var args = [];

    for (var i = 0; i < len; i++) {
        var c = content.charAt(i);

        switch (c) {
            case "'":
            case '"':
                if (isEscaped) {
                    str += c;
                } else {
                    isString = !isString;
                    if (!isFunction && !isString) {
                        tokens.push({ type: TOKEN_TYPE.STRING, value: str });
                        str = '';
                    }
                }
                break;

            case '\\':
                if (isEscaped) {
                    str += c;
                    isEscaped = false;
                } else {
                    isEscaped = true;
                }
                break;

            case '(':
                if (isString) {
                    str += c;
                } else {
                    isFunction = true;
                    functionName = str;
                    str = '';
                    args = [];
                }
                break;

            case ')':
                if (isString) {
                    str += c;
                } else if (isFunction) {
                    if (str) {
                        args.push(str);
                    }

                    switch (functionName) {
                        case 'attr':
                            if (args.length > 0) {
                                tokens.push({ type: TOKEN_TYPE.ATTRIBUTE, value: args[0] });
                            }
                            break;

                        case 'counter':
                            if (args.length > 0) {
                                var counter = {
                                    type: TOKEN_TYPE.COUNTER,
                                    name: args[0]
                                };
                                if (args.length > 1) {
                                    counter.format = args[1];
                                }
                                tokens.push(counter);
                            }
                            break;

                        case 'counters':
                            if (args.length > 0) {
                                var _counters2 = {
                                    type: TOKEN_TYPE.COUNTERS,
                                    name: args[0]
                                };
                                if (args.length > 1) {
                                    _counters2.glue = args[1];
                                }
                                if (args.length > 2) {
                                    _counters2.format = args[2];
                                }
                                tokens.push(_counters2);
                            }
                            break;

                        case 'url':
                            if (args.length > 0) {
                                tokens.push({ type: TOKEN_TYPE.URL, value: args[0] });
                            }
                            break;
                    }

                    isFunction = false;
                    str = '';
                }
                break;

            case ',':
                if (isString) {
                    str += c;
                } else if (isFunction) {
                    args.push(str);
                    str = '';
                }
                break;

            case ' ':
            case '\t':
                if (isString) {
                    str += c;
                } else if (str) {
                    addOtherToken(tokens, str);
                    str = '';
                }
                break;

            default:
                str += c;
        }

        if (c !== '\\') {
            isEscaped = false;
        }
    }

    if (str) {
        addOtherToken(tokens, str);
    }

    if (cache) {
        cache[content] = tokens;
    }

    return tokens;
};

var addOtherToken = function addOtherToken(tokens, identifier) {
    switch (identifier) {
        case 'open-quote':
            tokens.push({ type: TOKEN_TYPE.OPENQUOTE });
            break;
        case 'close-quote':
            tokens.push({ type: TOKEN_TYPE.CLOSEQUOTE });
            break;
    }
};

var getQuote = function getQuote(style, isOpening, quoteDepth) {
    var quotes = style.quotes ? style.quotes.split(/\s+/) : ["'\"'", "'\"'"];
    var idx = quoteDepth * 2;
    if (idx >= quotes.length) {
        idx = quotes.length - 2;
    }
    if (!isOpening) {
        ++idx;
    }
    return quotes[idx].replace(/^["']|["']$/g, '');
};

var formatCounterValue = function formatCounterValue(counter, glue, format) {
    var len = counter.length;
    var result = '';

    for (var i = 0; i < len; i++) {
        if (i > 0) {
            result += glue || '';
        }
        result += (0, _ListItem.createCounterText)(counter[i], (0, _listStyle.parseListStyleType)(format || 'decimal'), false);
    }

    return result;
};

/***/ })
/******/ ]);
});

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _html2canvas = __webpack_require__(/*! ../../node_modules/html2canvas/dist/html2canvas.js */ "./node_modules/html2canvas/dist/html2canvas.js");

var _html2canvas2 = _interopRequireDefault(_html2canvas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
  (0, _html2canvas2.default)(document.getElementById("target")).then(function (canvas) {
    var imgData = canvas.toDataURL();
    document.getElementById("result").src = imgData;
  });

  //ボタンを押下した際にダウンロードする画像を作る
  (0, _html2canvas2.default)(document.getElementById("target")).then(function (canvas) {
    //aタグのhrefにキャプチャ画像のURLを設定
    var imgData = canvas.toDataURL();
    document.getElementById("ogp_image").href = imgData;
  });
};

var bg = function bg() {
  var element = document.getElementsByClassName('js-ogp-bg')[0];

  for (var i = 1; i <= 5; i++) {
    var ogpIcon = document.createElement("span");
    var textNode = document.createTextNode("🐶");
    ogpIcon.appendChild(textNode);
    ogpIcon.setAttribute('class', 'c-img-ogp__icon');
    element.appendChild(ogpIcon);
  }
};

window.addEventListener("load", function () {
  bg();
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvaHRtbDJjYW52YXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIm9ubG9hZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0aGVuIiwiY2FudmFzIiwiaW1nRGF0YSIsInRvRGF0YVVSTCIsInNyYyIsImhyZWYiLCJiZyIsImVsZW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaSIsIm9ncEljb24iLCJjcmVhdGVFbGVtZW50IiwidGV4dE5vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsImFwcGVuZENoaWxkIiwic2V0QXR0cmlidXRlIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksSUFBeUQ7QUFDN0Q7QUFDQSxNQUFNLEVBSzRCO0FBQ2xDLENBQUM7QUFDRCxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsMEJBQTBCLEVBQUU7QUFDL0QseUNBQXlDLGVBQWU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCwrREFBK0Q7QUFDN0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxrQ0FBa0MsaUNBQWlDLGVBQWUsZUFBZSxnQkFBZ0Isb0JBQW9CLE1BQU0sMENBQTBDLCtCQUErQixhQUFhLHFCQUFxQixtQ0FBbUMsRUFBRSxFQUFFLGNBQWMsV0FBVyxVQUFVLEVBQUUsVUFBVSxNQUFNLHlDQUF5QyxFQUFFLFVBQVUsa0JBQWtCLEVBQUUsRUFBRSxhQUFhLEVBQUUsMkJBQTJCLDBCQUEwQixZQUFZLEVBQUUsMkNBQTJDLDhCQUE4QixFQUFFLE9BQU8sNkVBQTZFLEVBQUUsR0FBRyxFQUFFOztBQUVycEIsZ0NBQWdDLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUseURBQXlELHFFQUFxRSw2REFBNkQsb0JBQW9CLEdBQUcsRUFBRTs7QUFFampCLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLHdCQUF3QixFQUFFO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixFQUFFO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixJQUFJLFlBQVksSUFBSSxZQUFZLElBQUk7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCLElBQUksWUFBWSxJQUFJLFlBQVksSUFBSTtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsQ0FBQzs7QUFFRDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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N0YsaURBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdko7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGFBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGNBQWM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsdUJBQXVCO0FBQzlDOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxnQ0FBZ0MsMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFn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OztBQUVMO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtB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QUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtEQUErRDtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLEtBQUs7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QVNDLE1BQVQsRUFBaUI7QUFDakU7QUFDQSxRQUFNQyxVQUFVRCxPQUFPRSxTQUFQLEVBQWhCO0FBQ0FMLGFBQVNDLGNBQVQsQ0FBd0IsV0FBeEIsRUFBcUNNLElBQXJDLEdBQTRDSCxPQUE1QztBQUNILEdBSkQ7QUFLRCxDQVpEOztBQWNBLElBQUlJLEtBQUssU0FBTEEsRUFBSyxHQUFXO0FBQ25CLE1BQUlDLFVBQVVULFNBQVNVLHNCQUFULENBQWdDLFdBQWhDLEVBQTZDLENBQTdDLENBQWQ7O0FBRUEsT0FBSSxJQUFJQyxJQUFJLENBQVosRUFBZUEsS0FBSyxDQUFwQixFQUF1QkEsR0FBdkIsRUFBMkI7QUFDeEIsUUFBSUMsVUFBVVosU0FBU2EsYUFBVCxDQUF3QixNQUF4QixDQUFkO0FBQ0EsUUFBSUMsV0FBV2QsU0FBU2UsY0FBVCxDQUF3QixJQUF4QixDQUFmO0FBQ0FILFlBQVFJLFdBQVIsQ0FBb0JGLFFBQXBCO0FBQ0FGLFlBQVFLLFlBQVIsQ0FBcUIsT0FBckIsRUFBNkIsaUJBQTdCO0FBQ0FSLFlBQVFPLFdBQVIsQ0FBb0JKLE9BQXBCO0FBQ0g7QUFFQSxDQVhEOztBQWFBZCxPQUFPb0IsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBK0IsWUFBVTtBQUN2Q1Y7QUFDRCxDQUZELEUiLCJmaWxlIjoiLi9kZXN0L2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL2luZGV4LmpzXCIpO1xuIiwiLyohXG4gKiBodG1sMmNhbnZhcyAxLjAuMC1hbHBoYS4xMiA8aHR0cHM6Ly9odG1sMmNhbnZhcy5oZXJ0emVuLmNvbT5cbiAqIENvcHlyaWdodCAoYykgMjAxOCBOaWtsYXMgdm9uIEhlcnR6ZW4gPGh0dHBzOi8vaGVydHplbi5jb20+XG4gKiBSZWxlYXNlZCB1bmRlciBNSVQgTGljZW5zZVxuICovXG4oZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJodG1sMmNhbnZhc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJodG1sMmNhbnZhc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbi8qKioqKiovIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbi8qKioqKiovIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbi8qKioqKiovIFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyNyk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbi8vIGh0dHA6Ly9kZXYudzMub3JnL2Nzc3dnL2Nzcy1jb2xvci9cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3NsaWNlZFRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH0gcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGkpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyByZXR1cm4gYXJyOyB9IGVsc2UgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkgeyByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpOyB9IGVsc2UgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTsgfSB9OyB9KCk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBIRVgzID0gL14jKFthLWYwLTldezN9KSQvaTtcbnZhciBoZXgzID0gZnVuY3Rpb24gaGV4Myh2YWx1ZSkge1xuICAgIHZhciBtYXRjaCA9IHZhbHVlLm1hdGNoKEhFWDMpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgICByZXR1cm4gW3BhcnNlSW50KG1hdGNoWzFdWzBdICsgbWF0Y2hbMV1bMF0sIDE2KSwgcGFyc2VJbnQobWF0Y2hbMV1bMV0gKyBtYXRjaFsxXVsxXSwgMTYpLCBwYXJzZUludChtYXRjaFsxXVsyXSArIG1hdGNoWzFdWzJdLCAxNiksIG51bGxdO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG52YXIgSEVYNiA9IC9eIyhbYS1mMC05XXs2fSkkL2k7XG52YXIgaGV4NiA9IGZ1bmN0aW9uIGhleDYodmFsdWUpIHtcbiAgICB2YXIgbWF0Y2ggPSB2YWx1ZS5tYXRjaChIRVg2KTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIFtwYXJzZUludChtYXRjaFsxXS5zdWJzdHJpbmcoMCwgMiksIDE2KSwgcGFyc2VJbnQobWF0Y2hbMV0uc3Vic3RyaW5nKDIsIDQpLCAxNiksIHBhcnNlSW50KG1hdGNoWzFdLnN1YnN0cmluZyg0LCA2KSwgMTYpLCBudWxsXTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxudmFyIFJHQiA9IC9ecmdiXFwoXFxzKihcXGR7MSwzfSlcXHMqLFxccyooXFxkezEsM30pXFxzKixcXHMqKFxcZHsxLDN9KVxccypcXCkkLztcbnZhciByZ2IgPSBmdW5jdGlvbiByZ2IodmFsdWUpIHtcbiAgICB2YXIgbWF0Y2ggPSB2YWx1ZS5tYXRjaChSR0IpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgICByZXR1cm4gW051bWJlcihtYXRjaFsxXSksIE51bWJlcihtYXRjaFsyXSksIE51bWJlcihtYXRjaFszXSksIG51bGxdO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG52YXIgUkdCQSA9IC9ecmdiYVxcKFxccyooXFxkezEsM30pXFxzKixcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSlcXHMqLFxccyooXFxkP1xcLj9cXGQrKVxccypcXCkkLztcbnZhciByZ2JhID0gZnVuY3Rpb24gcmdiYSh2YWx1ZSkge1xuICAgIHZhciBtYXRjaCA9IHZhbHVlLm1hdGNoKFJHQkEpO1xuICAgIGlmIChtYXRjaCAmJiBtYXRjaC5sZW5ndGggPiA0KSB7XG4gICAgICAgIHJldHVybiBbTnVtYmVyKG1hdGNoWzFdKSwgTnVtYmVyKG1hdGNoWzJdKSwgTnVtYmVyKG1hdGNoWzNdKSwgTnVtYmVyKG1hdGNoWzRdKV07XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5cbnZhciBmcm9tQXJyYXkgPSBmdW5jdGlvbiBmcm9tQXJyYXkoYXJyYXkpIHtcbiAgICByZXR1cm4gW01hdGgubWluKGFycmF5WzBdLCAyNTUpLCBNYXRoLm1pbihhcnJheVsxXSwgMjU1KSwgTWF0aC5taW4oYXJyYXlbMl0sIDI1NSksIGFycmF5Lmxlbmd0aCA+IDMgPyBhcnJheVszXSA6IG51bGxdO1xufTtcblxudmFyIG5hbWVkQ29sb3IgPSBmdW5jdGlvbiBuYW1lZENvbG9yKG5hbWUpIHtcbiAgICB2YXIgY29sb3IgPSBOQU1FRF9DT0xPUlNbbmFtZS50b0xvd2VyQ2FzZSgpXTtcbiAgICByZXR1cm4gY29sb3IgPyBjb2xvciA6IGZhbHNlO1xufTtcblxudmFyIENvbG9yID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENvbG9yKHZhbHVlKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb2xvcik7XG5cbiAgICAgICAgdmFyIF9yZWYgPSBBcnJheS5pc0FycmF5KHZhbHVlKSA/IGZyb21BcnJheSh2YWx1ZSkgOiBoZXgzKHZhbHVlKSB8fCByZ2IodmFsdWUpIHx8IHJnYmEodmFsdWUpIHx8IG5hbWVkQ29sb3IodmFsdWUpIHx8IGhleDYodmFsdWUpIHx8IFswLCAwLCAwLCBudWxsXSxcbiAgICAgICAgICAgIF9yZWYyID0gX3NsaWNlZFRvQXJyYXkoX3JlZiwgNCksXG4gICAgICAgICAgICByID0gX3JlZjJbMF0sXG4gICAgICAgICAgICBnID0gX3JlZjJbMV0sXG4gICAgICAgICAgICBiID0gX3JlZjJbMl0sXG4gICAgICAgICAgICBhID0gX3JlZjJbM107XG5cbiAgICAgICAgdGhpcy5yID0gcjtcbiAgICAgICAgdGhpcy5nID0gZztcbiAgICAgICAgdGhpcy5iID0gYjtcbiAgICAgICAgdGhpcy5hID0gYTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQ29sb3IsIFt7XG4gICAgICAgIGtleTogJ2lzVHJhbnNwYXJlbnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaXNUcmFuc3BhcmVudCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmEgPT09IDA7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3RvU3RyaW5nJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYSAhPT0gbnVsbCAmJiB0aGlzLmEgIT09IDEgPyAncmdiYSgnICsgdGhpcy5yICsgJywnICsgdGhpcy5nICsgJywnICsgdGhpcy5iICsgJywnICsgdGhpcy5hICsgJyknIDogJ3JnYignICsgdGhpcy5yICsgJywnICsgdGhpcy5nICsgJywnICsgdGhpcy5iICsgJyknO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIENvbG9yO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBDb2xvcjtcblxuXG52YXIgTkFNRURfQ09MT1JTID0ge1xuICAgIHRyYW5zcGFyZW50OiBbMCwgMCwgMCwgMF0sXG4gICAgYWxpY2VibHVlOiBbMjQwLCAyNDgsIDI1NSwgbnVsbF0sXG4gICAgYW50aXF1ZXdoaXRlOiBbMjUwLCAyMzUsIDIxNSwgbnVsbF0sXG4gICAgYXF1YTogWzAsIDI1NSwgMjU1LCBudWxsXSxcbiAgICBhcXVhbWFyaW5lOiBbMTI3LCAyNTUsIDIxMiwgbnVsbF0sXG4gICAgYXp1cmU6IFsyNDAsIDI1NSwgMjU1LCBudWxsXSxcbiAgICBiZWlnZTogWzI0NSwgMjQ1LCAyMjAsIG51bGxdLFxuICAgIGJpc3F1ZTogWzI1NSwgMjI4LCAxOTYsIG51bGxdLFxuICAgIGJsYWNrOiBbMCwgMCwgMCwgbnVsbF0sXG4gICAgYmxhbmNoZWRhbG1vbmQ6IFsyNTUsIDIzNSwgMjA1LCBudWxsXSxcbiAgICBibHVlOiBbMCwgMCwgMjU1LCBudWxsXSxcbiAgICBibHVldmlvbGV0OiBbMTM4LCA0MywgMjI2LCBudWxsXSxcbiAgICBicm93bjogWzE2NSwgNDIsIDQyLCBudWxsXSxcbiAgICBidXJseXdvb2Q6IFsyMjIsIDE4NCwgMTM1LCBudWxsXSxcbiAgICBjYWRldGJsdWU6IFs5NSwgMTU4LCAxNjAsIG51bGxdLFxuICAgIGNoYXJ0cmV1c2U6IFsxMjcsIDI1NSwgMCwgbnVsbF0sXG4gICAgY2hvY29sYXRlOiBbMjEwLCAxMDUsIDMwLCBudWxsXSxcbiAgICBjb3JhbDogWzI1NSwgMTI3LCA4MCwgbnVsbF0sXG4gICAgY29ybmZsb3dlcmJsdWU6IFsxMDAsIDE0OSwgMjM3LCBudWxsXSxcbiAgICBjb3Juc2lsazogWzI1NSwgMjQ4LCAyMjAsIG51bGxdLFxuICAgIGNyaW1zb246IFsyMjAsIDIwLCA2MCwgbnVsbF0sXG4gICAgY3lhbjogWzAsIDI1NSwgMjU1LCBudWxsXSxcbiAgICBkYXJrYmx1ZTogWzAsIDAsIDEzOSwgbnVsbF0sXG4gICAgZGFya2N5YW46IFswLCAxMzksIDEzOSwgbnVsbF0sXG4gICAgZGFya2dvbGRlbnJvZDogWzE4NCwgMTM0LCAxMSwgbnVsbF0sXG4gICAgZGFya2dyYXk6IFsxNjksIDE2OSwgMTY5LCBudWxsXSxcbiAgICBkYXJrZ3JlZW46IFswLCAxMDAsIDAsIG51bGxdLFxuICAgIGRhcmtncmV5OiBbMTY5LCAxNjksIDE2OSwgbnVsbF0sXG4gICAgZGFya2toYWtpOiBbMTg5LCAxODMsIDEwNywgbnVsbF0sXG4gICAgZGFya21hZ2VudGE6IFsxMzksIDAsIDEzOSwgbnVsbF0sXG4gICAgZGFya29saXZlZ3JlZW46IFs4NSwgMTA3LCA0NywgbnVsbF0sXG4gICAgZGFya29yYW5nZTogWzI1NSwgMTQwLCAwLCBudWxsXSxcbiAgICBkYXJrb3JjaGlkOiBbMTUzLCA1MCwgMjA0LCBudWxsXSxcbiAgICBkYXJrcmVkOiBbMTM5LCAwLCAwLCBudWxsXSxcbiAgICBkYXJrc2FsbW9uOiBbMjMzLCAxNTAsIDEyMiwgbnVsbF0sXG4gICAgZGFya3NlYWdyZWVuOiBbMTQzLCAxODgsIDE0MywgbnVsbF0sXG4gICAgZGFya3NsYXRlYmx1ZTogWzcyLCA2MSwgMTM5LCBudWxsXSxcbiAgICBkYXJrc2xhdGVncmF5OiBbNDcsIDc5LCA3OSwgbnVsbF0sXG4gICAgZGFya3NsYXRlZ3JleTogWzQ3LCA3OSwgNzksIG51bGxdLFxuICAgIGRhcmt0dXJxdW9pc2U6IFswLCAyMDYsIDIwOSwgbnVsbF0sXG4gICAgZGFya3Zpb2xldDogWzE0OCwgMCwgMjExLCBudWxsXSxcbiAgICBkZWVwcGluazogWzI1NSwgMjAsIDE0NywgbnVsbF0sXG4gICAgZGVlcHNreWJsdWU6IFswLCAxOTEsIDI1NSwgbnVsbF0sXG4gICAgZGltZ3JheTogWzEwNSwgMTA1LCAxMDUsIG51bGxdLFxuICAgIGRpbWdyZXk6IFsxMDUsIDEwNSwgMTA1LCBudWxsXSxcbiAgICBkb2RnZXJibHVlOiBbMzAsIDE0NCwgMjU1LCBudWxsXSxcbiAgICBmaXJlYnJpY2s6IFsxNzgsIDM0LCAzNCwgbnVsbF0sXG4gICAgZmxvcmFsd2hpdGU6IFsyNTUsIDI1MCwgMjQwLCBudWxsXSxcbiAgICBmb3Jlc3RncmVlbjogWzM0LCAxMzksIDM0LCBudWxsXSxcbiAgICBmdWNoc2lhOiBbMjU1LCAwLCAyNTUsIG51bGxdLFxuICAgIGdhaW5zYm9ybzogWzIyMCwgMjIwLCAyMjAsIG51bGxdLFxuICAgIGdob3N0d2hpdGU6IFsyNDgsIDI0OCwgMjU1LCBudWxsXSxcbiAgICBnb2xkOiBbMjU1LCAyMTUsIDAsIG51bGxdLFxuICAgIGdvbGRlbnJvZDogWzIxOCwgMTY1LCAzMiwgbnVsbF0sXG4gICAgZ3JheTogWzEyOCwgMTI4LCAxMjgsIG51bGxdLFxuICAgIGdyZWVuOiBbMCwgMTI4LCAwLCBudWxsXSxcbiAgICBncmVlbnllbGxvdzogWzE3MywgMjU1LCA0NywgbnVsbF0sXG4gICAgZ3JleTogWzEyOCwgMTI4LCAxMjgsIG51bGxdLFxuICAgIGhvbmV5ZGV3OiBbMjQwLCAyNTUsIDI0MCwgbnVsbF0sXG4gICAgaG90cGluazogWzI1NSwgMTA1LCAxODAsIG51bGxdLFxuICAgIGluZGlhbnJlZDogWzIwNSwgOTIsIDkyLCBudWxsXSxcbiAgICBpbmRpZ286IFs3NSwgMCwgMTMwLCBudWxsXSxcbiAgICBpdm9yeTogWzI1NSwgMjU1LCAyNDAsIG51bGxdLFxuICAgIGtoYWtpOiBbMjQwLCAyMzAsIDE0MCwgbnVsbF0sXG4gICAgbGF2ZW5kZXI6IFsyMzAsIDIzMCwgMjUwLCBudWxsXSxcbiAgICBsYXZlbmRlcmJsdXNoOiBbMjU1LCAyNDAsIDI0NSwgbnVsbF0sXG4gICAgbGF3bmdyZWVuOiBbMTI0LCAyNTIsIDAsIG51bGxdLFxuICAgIGxlbW9uY2hpZmZvbjogWzI1NSwgMjUwLCAyMDUsIG51bGxdLFxuICAgIGxpZ2h0Ymx1ZTogWzE3MywgMjE2LCAyMzAsIG51bGxdLFxuICAgIGxpZ2h0Y29yYWw6IFsyNDAsIDEyOCwgMTI4LCBudWxsXSxcbiAgICBsaWdodGN5YW46IFsyMjQsIDI1NSwgMjU1LCBudWxsXSxcbiAgICBsaWdodGdvbGRlbnJvZHllbGxvdzogWzI1MCwgMjUwLCAyMTAsIG51bGxdLFxuICAgIGxpZ2h0Z3JheTogWzIxMSwgMjExLCAyMTEsIG51bGxdLFxuICAgIGxpZ2h0Z3JlZW46IFsxNDQsIDIzOCwgMTQ0LCBudWxsXSxcbiAgICBsaWdodGdyZXk6IFsyMTEsIDIxMSwgMjExLCBudWxsXSxcbiAgICBsaWdodHBpbms6IFsyNTUsIDE4MiwgMTkzLCBudWxsXSxcbiAgICBsaWdodHNhbG1vbjogWzI1NSwgMTYwLCAxMjIsIG51bGxdLFxuICAgIGxpZ2h0c2VhZ3JlZW46IFszMiwgMTc4LCAxNzAsIG51bGxdLFxuICAgIGxpZ2h0c2t5Ymx1ZTogWzEzNSwgMjA2LCAyNTAsIG51bGxdLFxuICAgIGxpZ2h0c2xhdGVncmF5OiBbMTE5LCAxMzYsIDE1MywgbnVsbF0sXG4gICAgbGlnaHRzbGF0ZWdyZXk6IFsxMTksIDEzNiwgMTUzLCBudWxsXSxcbiAgICBsaWdodHN0ZWVsYmx1ZTogWzE3NiwgMTk2LCAyMjIsIG51bGxdLFxuICAgIGxpZ2h0eWVsbG93OiBbMjU1LCAyNTUsIDIyNCwgbnVsbF0sXG4gICAgbGltZTogWzAsIDI1NSwgMCwgbnVsbF0sXG4gICAgbGltZWdyZWVuOiBbNTAsIDIwNSwgNTAsIG51bGxdLFxuICAgIGxpbmVuOiBbMjUwLCAyNDAsIDIzMCwgbnVsbF0sXG4gICAgbWFnZW50YTogWzI1NSwgMCwgMjU1LCBudWxsXSxcbiAgICBtYXJvb246IFsxMjgsIDAsIDAsIG51bGxdLFxuICAgIG1lZGl1bWFxdWFtYXJpbmU6IFsxMDIsIDIwNSwgMTcwLCBudWxsXSxcbiAgICBtZWRpdW1ibHVlOiBbMCwgMCwgMjA1LCBudWxsXSxcbiAgICBtZWRpdW1vcmNoaWQ6IFsxODYsIDg1LCAyMTEsIG51bGxdLFxuICAgIG1lZGl1bXB1cnBsZTogWzE0NywgMTEyLCAyMTksIG51bGxdLFxuICAgIG1lZGl1bXNlYWdyZWVuOiBbNjAsIDE3OSwgMTEzLCBudWxsXSxcbiAgICBtZWRpdW1zbGF0ZWJsdWU6IFsxMjMsIDEwNCwgMjM4LCBudWxsXSxcbiAgICBtZWRpdW1zcHJpbmdncmVlbjogWzAsIDI1MCwgMTU0LCBudWxsXSxcbiAgICBtZWRpdW10dXJxdW9pc2U6IFs3MiwgMjA5LCAyMDQsIG51bGxdLFxuICAgIG1lZGl1bXZpb2xldHJlZDogWzE5OSwgMjEsIDEzMywgbnVsbF0sXG4gICAgbWlkbmlnaHRibHVlOiBbMjUsIDI1LCAxMTIsIG51bGxdLFxuICAgIG1pbnRjcmVhbTogWzI0NSwgMjU1LCAyNTAsIG51bGxdLFxuICAgIG1pc3R5cm9zZTogWzI1NSwgMjI4LCAyMjUsIG51bGxdLFxuICAgIG1vY2Nhc2luOiBbMjU1LCAyMjgsIDE4MSwgbnVsbF0sXG4gICAgbmF2YWpvd2hpdGU6IFsyNTUsIDIyMiwgMTczLCBudWxsXSxcbiAgICBuYXZ5OiBbMCwgMCwgMTI4LCBudWxsXSxcbiAgICBvbGRsYWNlOiBbMjUzLCAyNDUsIDIzMCwgbnVsbF0sXG4gICAgb2xpdmU6IFsxMjgsIDEyOCwgMCwgbnVsbF0sXG4gICAgb2xpdmVkcmFiOiBbMTA3LCAxNDIsIDM1LCBudWxsXSxcbiAgICBvcmFuZ2U6IFsyNTUsIDE2NSwgMCwgbnVsbF0sXG4gICAgb3JhbmdlcmVkOiBbMjU1LCA2OSwgMCwgbnVsbF0sXG4gICAgb3JjaGlkOiBbMjE4LCAxMTIsIDIxNCwgbnVsbF0sXG4gICAgcGFsZWdvbGRlbnJvZDogWzIzOCwgMjMyLCAxNzAsIG51bGxdLFxuICAgIHBhbGVncmVlbjogWzE1MiwgMjUxLCAxNTIsIG51bGxdLFxuICAgIHBhbGV0dXJxdW9pc2U6IFsxNzUsIDIzOCwgMjM4LCBudWxsXSxcbiAgICBwYWxldmlvbGV0cmVkOiBbMjE5LCAxMTIsIDE0NywgbnVsbF0sXG4gICAgcGFwYXlhd2hpcDogWzI1NSwgMjM5LCAyMTMsIG51bGxdLFxuICAgIHBlYWNocHVmZjogWzI1NSwgMjE4LCAxODUsIG51bGxdLFxuICAgIHBlcnU6IFsyMDUsIDEzMywgNjMsIG51bGxdLFxuICAgIHBpbms6IFsyNTUsIDE5MiwgMjAzLCBudWxsXSxcbiAgICBwbHVtOiBbMjIxLCAxNjAsIDIyMSwgbnVsbF0sXG4gICAgcG93ZGVyYmx1ZTogWzE3NiwgMjI0LCAyMzAsIG51bGxdLFxuICAgIHB1cnBsZTogWzEyOCwgMCwgMTI4LCBudWxsXSxcbiAgICByZWJlY2NhcHVycGxlOiBbMTAyLCA1MSwgMTUzLCBudWxsXSxcbiAgICByZWQ6IFsyNTUsIDAsIDAsIG51bGxdLFxuICAgIHJvc3licm93bjogWzE4OCwgMTQzLCAxNDMsIG51bGxdLFxuICAgIHJveWFsYmx1ZTogWzY1LCAxMDUsIDIyNSwgbnVsbF0sXG4gICAgc2FkZGxlYnJvd246IFsxMzksIDY5LCAxOSwgbnVsbF0sXG4gICAgc2FsbW9uOiBbMjUwLCAxMjgsIDExNCwgbnVsbF0sXG4gICAgc2FuZHlicm93bjogWzI0NCwgMTY0LCA5NiwgbnVsbF0sXG4gICAgc2VhZ3JlZW46IFs0NiwgMTM5LCA4NywgbnVsbF0sXG4gICAgc2Vhc2hlbGw6IFsyNTUsIDI0NSwgMjM4LCBudWxsXSxcbiAgICBzaWVubmE6IFsxNjAsIDgyLCA0NSwgbnVsbF0sXG4gICAgc2lsdmVyOiBbMTkyLCAxOTIsIDE5MiwgbnVsbF0sXG4gICAgc2t5Ymx1ZTogWzEzNSwgMjA2LCAyMzUsIG51bGxdLFxuICAgIHNsYXRlYmx1ZTogWzEwNiwgOTAsIDIwNSwgbnVsbF0sXG4gICAgc2xhdGVncmF5OiBbMTEyLCAxMjgsIDE0NCwgbnVsbF0sXG4gICAgc2xhdGVncmV5OiBbMTEyLCAxMjgsIDE0NCwgbnVsbF0sXG4gICAgc25vdzogWzI1NSwgMjUwLCAyNTAsIG51bGxdLFxuICAgIHNwcmluZ2dyZWVuOiBbMCwgMjU1LCAxMjcsIG51bGxdLFxuICAgIHN0ZWVsYmx1ZTogWzcwLCAxMzAsIDE4MCwgbnVsbF0sXG4gICAgdGFuOiBbMjEwLCAxODAsIDE0MCwgbnVsbF0sXG4gICAgdGVhbDogWzAsIDEyOCwgMTI4LCBudWxsXSxcbiAgICB0aGlzdGxlOiBbMjE2LCAxOTEsIDIxNiwgbnVsbF0sXG4gICAgdG9tYXRvOiBbMjU1LCA5OSwgNzEsIG51bGxdLFxuICAgIHR1cnF1b2lzZTogWzY0LCAyMjQsIDIwOCwgbnVsbF0sXG4gICAgdmlvbGV0OiBbMjM4LCAxMzAsIDIzOCwgbnVsbF0sXG4gICAgd2hlYXQ6IFsyNDUsIDIyMiwgMTc5LCBudWxsXSxcbiAgICB3aGl0ZTogWzI1NSwgMjU1LCAyNTUsIG51bGxdLFxuICAgIHdoaXRlc21va2U6IFsyNDUsIDI0NSwgMjQ1LCBudWxsXSxcbiAgICB5ZWxsb3c6IFsyNTUsIDI1NSwgMCwgbnVsbF0sXG4gICAgeWVsbG93Z3JlZW46IFsxNTQsIDIwNSwgNTAsIG51bGxdXG59O1xuXG52YXIgVFJBTlNQQVJFTlQgPSBleHBvcnRzLlRSQU5TUEFSRU5UID0gbmV3IENvbG9yKFswLCAwLCAwLCAwXSk7XG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNhbGN1bGF0ZUxlbmd0aEZyb21WYWx1ZVdpdGhVbml0ID0gZXhwb3J0cy5MRU5HVEhfVFlQRSA9IHVuZGVmaW5lZDtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9Ob2RlQ29udGFpbmVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblxudmFyIF9Ob2RlQ29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX05vZGVDb250YWluZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgTEVOR1RIX1dJVEhfVU5JVCA9IC8oW1xcZC5dKykocHh8cj9lbXwlKS9pO1xuXG52YXIgTEVOR1RIX1RZUEUgPSBleHBvcnRzLkxFTkdUSF9UWVBFID0ge1xuICAgIFBYOiAwLFxuICAgIFBFUkNFTlRBR0U6IDFcbn07XG5cbnZhciBMZW5ndGggPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTGVuZ3RoKHZhbHVlKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMZW5ndGgpO1xuXG4gICAgICAgIHRoaXMudHlwZSA9IHZhbHVlLnN1YnN0cih2YWx1ZS5sZW5ndGggLSAxKSA9PT0gJyUnID8gTEVOR1RIX1RZUEUuUEVSQ0VOVEFHRSA6IExFTkdUSF9UWVBFLlBYO1xuICAgICAgICB2YXIgcGFyc2VkVmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICAgICAgaWYgKHRydWUgJiYgaXNOYU4ocGFyc2VkVmFsdWUpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIHZhbHVlIGdpdmVuIGZvciBMZW5ndGg6IFwiJyArIHZhbHVlICsgJ1wiJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52YWx1ZSA9IGlzTmFOKHBhcnNlZFZhbHVlKSA/IDAgOiBwYXJzZWRWYWx1ZTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoTGVuZ3RoLCBbe1xuICAgICAgICBrZXk6ICdpc1BlcmNlbnRhZ2UnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaXNQZXJjZW50YWdlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gTEVOR1RIX1RZUEUuUEVSQ0VOVEFHRTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0QWJzb2x1dGVWYWx1ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRBYnNvbHV0ZVZhbHVlKHBhcmVudExlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNQZXJjZW50YWdlKCkgPyBwYXJlbnRMZW5ndGggKiAodGhpcy52YWx1ZSAvIDEwMCkgOiB0aGlzLnZhbHVlO1xuICAgICAgICB9XG4gICAgfV0sIFt7XG4gICAgICAgIGtleTogJ2NyZWF0ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGUodikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBMZW5ndGgodik7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTGVuZ3RoO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBMZW5ndGg7XG5cblxudmFyIGdldFJvb3RGb250U2l6ZSA9IGZ1bmN0aW9uIGdldFJvb3RGb250U2l6ZShjb250YWluZXIpIHtcbiAgICB2YXIgcGFyZW50ID0gY29udGFpbmVyLnBhcmVudDtcbiAgICByZXR1cm4gcGFyZW50ID8gZ2V0Um9vdEZvbnRTaXplKHBhcmVudCkgOiBwYXJzZUZsb2F0KGNvbnRhaW5lci5zdHlsZS5mb250LmZvbnRTaXplKTtcbn07XG5cbnZhciBjYWxjdWxhdGVMZW5ndGhGcm9tVmFsdWVXaXRoVW5pdCA9IGV4cG9ydHMuY2FsY3VsYXRlTGVuZ3RoRnJvbVZhbHVlV2l0aFVuaXQgPSBmdW5jdGlvbiBjYWxjdWxhdGVMZW5ndGhGcm9tVmFsdWVXaXRoVW5pdChjb250YWluZXIsIHZhbHVlLCB1bml0KSB7XG4gICAgc3dpdGNoICh1bml0KSB7XG4gICAgICAgIGNhc2UgJ3B4JzpcbiAgICAgICAgY2FzZSAnJSc6XG4gICAgICAgICAgICByZXR1cm4gbmV3IExlbmd0aCh2YWx1ZSArIHVuaXQpO1xuICAgICAgICBjYXNlICdlbSc6XG4gICAgICAgIGNhc2UgJ3JlbSc6XG4gICAgICAgICAgICB2YXIgbGVuZ3RoID0gbmV3IExlbmd0aCh2YWx1ZSk7XG4gICAgICAgICAgICBsZW5ndGgudmFsdWUgKj0gdW5pdCA9PT0gJ2VtJyA/IHBhcnNlRmxvYXQoY29udGFpbmVyLnN0eWxlLmZvbnQuZm9udFNpemUpIDogZ2V0Um9vdEZvbnRTaXplKGNvbnRhaW5lcik7XG4gICAgICAgICAgICByZXR1cm4gbGVuZ3RoO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgLy8gVE9ETzogaGFuZGxlIGNvcnJlY3RseSBpZiB1bmtub3duIHVuaXQgaXMgdXNlZFxuICAgICAgICAgICAgcmV0dXJuIG5ldyBMZW5ndGgoJzAnKTtcbiAgICB9XG59O1xuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5wYXJzZUJvdW5kQ3VydmVzID0gZXhwb3J0cy5jYWxjdWxhdGVQYWRkaW5nQm94UGF0aCA9IGV4cG9ydHMuY2FsY3VsYXRlQm9yZGVyQm94UGF0aCA9IGV4cG9ydHMucGFyc2VQYXRoRm9yQm9yZGVyID0gZXhwb3J0cy5wYXJzZURvY3VtZW50U2l6ZSA9IGV4cG9ydHMuY2FsY3VsYXRlQ29udGVudEJveCA9IGV4cG9ydHMuY2FsY3VsYXRlUGFkZGluZ0JveCA9IGV4cG9ydHMucGFyc2VCb3VuZHMgPSBleHBvcnRzLkJvdW5kcyA9IHVuZGVmaW5lZDtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9WZWN0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xuXG52YXIgX1ZlY3RvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9WZWN0b3IpO1xuXG52YXIgX0JlemllckN1cnZlID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMik7XG5cbnZhciBfQmV6aWVyQ3VydmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQmV6aWVyQ3VydmUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgVE9QID0gMDtcbnZhciBSSUdIVCA9IDE7XG52YXIgQk9UVE9NID0gMjtcbnZhciBMRUZUID0gMztcblxudmFyIEggPSAwO1xudmFyIFYgPSAxO1xuXG52YXIgQm91bmRzID0gZXhwb3J0cy5Cb3VuZHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQm91bmRzKHgsIHksIHcsIGgpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJvdW5kcyk7XG5cbiAgICAgICAgdGhpcy5sZWZ0ID0geDtcbiAgICAgICAgdGhpcy50b3AgPSB5O1xuICAgICAgICB0aGlzLndpZHRoID0gdztcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhCb3VuZHMsIG51bGwsIFt7XG4gICAgICAgIGtleTogJ2Zyb21DbGllbnRSZWN0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGZyb21DbGllbnRSZWN0KGNsaWVudFJlY3QsIHNjcm9sbFgsIHNjcm9sbFkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQm91bmRzKGNsaWVudFJlY3QubGVmdCArIHNjcm9sbFgsIGNsaWVudFJlY3QudG9wICsgc2Nyb2xsWSwgY2xpZW50UmVjdC53aWR0aCwgY2xpZW50UmVjdC5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEJvdW5kcztcbn0oKTtcblxudmFyIHBhcnNlQm91bmRzID0gZXhwb3J0cy5wYXJzZUJvdW5kcyA9IGZ1bmN0aW9uIHBhcnNlQm91bmRzKG5vZGUsIHNjcm9sbFgsIHNjcm9sbFkpIHtcbiAgICByZXR1cm4gQm91bmRzLmZyb21DbGllbnRSZWN0KG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksIHNjcm9sbFgsIHNjcm9sbFkpO1xufTtcblxudmFyIGNhbGN1bGF0ZVBhZGRpbmdCb3ggPSBleHBvcnRzLmNhbGN1bGF0ZVBhZGRpbmdCb3ggPSBmdW5jdGlvbiBjYWxjdWxhdGVQYWRkaW5nQm94KGJvdW5kcywgYm9yZGVycykge1xuICAgIHJldHVybiBuZXcgQm91bmRzKGJvdW5kcy5sZWZ0ICsgYm9yZGVyc1tMRUZUXS5ib3JkZXJXaWR0aCwgYm91bmRzLnRvcCArIGJvcmRlcnNbVE9QXS5ib3JkZXJXaWR0aCwgYm91bmRzLndpZHRoIC0gKGJvcmRlcnNbUklHSFRdLmJvcmRlcldpZHRoICsgYm9yZGVyc1tMRUZUXS5ib3JkZXJXaWR0aCksIGJvdW5kcy5oZWlnaHQgLSAoYm9yZGVyc1tUT1BdLmJvcmRlcldpZHRoICsgYm9yZGVyc1tCT1RUT01dLmJvcmRlcldpZHRoKSk7XG59O1xuXG52YXIgY2FsY3VsYXRlQ29udGVudEJveCA9IGV4cG9ydHMuY2FsY3VsYXRlQ29udGVudEJveCA9IGZ1bmN0aW9uIGNhbGN1bGF0ZUNvbnRlbnRCb3goYm91bmRzLCBwYWRkaW5nLCBib3JkZXJzKSB7XG4gICAgLy8gVE9ETyBzdXBwb3J0IHBlcmNlbnRhZ2UgcGFkZGluZ3NcbiAgICB2YXIgcGFkZGluZ1RvcCA9IHBhZGRpbmdbVE9QXS52YWx1ZTtcbiAgICB2YXIgcGFkZGluZ1JpZ2h0ID0gcGFkZGluZ1tSSUdIVF0udmFsdWU7XG4gICAgdmFyIHBhZGRpbmdCb3R0b20gPSBwYWRkaW5nW0JPVFRPTV0udmFsdWU7XG4gICAgdmFyIHBhZGRpbmdMZWZ0ID0gcGFkZGluZ1tMRUZUXS52YWx1ZTtcblxuICAgIHJldHVybiBuZXcgQm91bmRzKGJvdW5kcy5sZWZ0ICsgcGFkZGluZ0xlZnQgKyBib3JkZXJzW0xFRlRdLmJvcmRlcldpZHRoLCBib3VuZHMudG9wICsgcGFkZGluZ1RvcCArIGJvcmRlcnNbVE9QXS5ib3JkZXJXaWR0aCwgYm91bmRzLndpZHRoIC0gKGJvcmRlcnNbUklHSFRdLmJvcmRlcldpZHRoICsgYm9yZGVyc1tMRUZUXS5ib3JkZXJXaWR0aCArIHBhZGRpbmdMZWZ0ICsgcGFkZGluZ1JpZ2h0KSwgYm91bmRzLmhlaWdodCAtIChib3JkZXJzW1RPUF0uYm9yZGVyV2lkdGggKyBib3JkZXJzW0JPVFRPTV0uYm9yZGVyV2lkdGggKyBwYWRkaW5nVG9wICsgcGFkZGluZ0JvdHRvbSkpO1xufTtcblxudmFyIHBhcnNlRG9jdW1lbnRTaXplID0gZXhwb3J0cy5wYXJzZURvY3VtZW50U2l6ZSA9IGZ1bmN0aW9uIHBhcnNlRG9jdW1lbnRTaXplKGRvY3VtZW50KSB7XG4gICAgdmFyIGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgIHZhciBkb2N1bWVudEVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgICBpZiAoIWJvZHkgfHwgIWRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIHRydWUgPyAnVW5hYmxlIHRvIGdldCBkb2N1bWVudCBzaXplJyA6ICcnKTtcbiAgICB9XG4gICAgdmFyIHdpZHRoID0gTWF0aC5tYXgoTWF0aC5tYXgoYm9keS5zY3JvbGxXaWR0aCwgZG9jdW1lbnRFbGVtZW50LnNjcm9sbFdpZHRoKSwgTWF0aC5tYXgoYm9keS5vZmZzZXRXaWR0aCwgZG9jdW1lbnRFbGVtZW50Lm9mZnNldFdpZHRoKSwgTWF0aC5tYXgoYm9keS5jbGllbnRXaWR0aCwgZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKSk7XG5cbiAgICB2YXIgaGVpZ2h0ID0gTWF0aC5tYXgoTWF0aC5tYXgoYm9keS5zY3JvbGxIZWlnaHQsIGRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQpLCBNYXRoLm1heChib2R5Lm9mZnNldEhlaWdodCwgZG9jdW1lbnRFbGVtZW50Lm9mZnNldEhlaWdodCksIE1hdGgubWF4KGJvZHkuY2xpZW50SGVpZ2h0LCBkb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSk7XG5cbiAgICByZXR1cm4gbmV3IEJvdW5kcygwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbn07XG5cbnZhciBwYXJzZVBhdGhGb3JCb3JkZXIgPSBleHBvcnRzLnBhcnNlUGF0aEZvckJvcmRlciA9IGZ1bmN0aW9uIHBhcnNlUGF0aEZvckJvcmRlcihjdXJ2ZXMsIGJvcmRlclNpZGUpIHtcbiAgICBzd2l0Y2ggKGJvcmRlclNpZGUpIHtcbiAgICAgICAgY2FzZSBUT1A6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlUGF0aEZyb21DdXJ2ZXMoY3VydmVzLnRvcExlZnRPdXRlciwgY3VydmVzLnRvcExlZnRJbm5lciwgY3VydmVzLnRvcFJpZ2h0T3V0ZXIsIGN1cnZlcy50b3BSaWdodElubmVyKTtcbiAgICAgICAgY2FzZSBSSUdIVDpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVQYXRoRnJvbUN1cnZlcyhjdXJ2ZXMudG9wUmlnaHRPdXRlciwgY3VydmVzLnRvcFJpZ2h0SW5uZXIsIGN1cnZlcy5ib3R0b21SaWdodE91dGVyLCBjdXJ2ZXMuYm90dG9tUmlnaHRJbm5lcik7XG4gICAgICAgIGNhc2UgQk9UVE9NOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZVBhdGhGcm9tQ3VydmVzKGN1cnZlcy5ib3R0b21SaWdodE91dGVyLCBjdXJ2ZXMuYm90dG9tUmlnaHRJbm5lciwgY3VydmVzLmJvdHRvbUxlZnRPdXRlciwgY3VydmVzLmJvdHRvbUxlZnRJbm5lcik7XG4gICAgICAgIGNhc2UgTEVGVDpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVQYXRoRnJvbUN1cnZlcyhjdXJ2ZXMuYm90dG9tTGVmdE91dGVyLCBjdXJ2ZXMuYm90dG9tTGVmdElubmVyLCBjdXJ2ZXMudG9wTGVmdE91dGVyLCBjdXJ2ZXMudG9wTGVmdElubmVyKTtcbiAgICB9XG59O1xuXG52YXIgY3JlYXRlUGF0aEZyb21DdXJ2ZXMgPSBmdW5jdGlvbiBjcmVhdGVQYXRoRnJvbUN1cnZlcyhvdXRlcjEsIGlubmVyMSwgb3V0ZXIyLCBpbm5lcjIpIHtcbiAgICB2YXIgcGF0aCA9IFtdO1xuICAgIGlmIChvdXRlcjEgaW5zdGFuY2VvZiBfQmV6aWVyQ3VydmUyLmRlZmF1bHQpIHtcbiAgICAgICAgcGF0aC5wdXNoKG91dGVyMS5zdWJkaXZpZGUoMC41LCBmYWxzZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHBhdGgucHVzaChvdXRlcjEpO1xuICAgIH1cblxuICAgIGlmIChvdXRlcjIgaW5zdGFuY2VvZiBfQmV6aWVyQ3VydmUyLmRlZmF1bHQpIHtcbiAgICAgICAgcGF0aC5wdXNoKG91dGVyMi5zdWJkaXZpZGUoMC41LCB0cnVlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcGF0aC5wdXNoKG91dGVyMik7XG4gICAgfVxuXG4gICAgaWYgKGlubmVyMiBpbnN0YW5jZW9mIF9CZXppZXJDdXJ2ZTIuZGVmYXVsdCkge1xuICAgICAgICBwYXRoLnB1c2goaW5uZXIyLnN1YmRpdmlkZSgwLjUsIHRydWUpLnJldmVyc2UoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcGF0aC5wdXNoKGlubmVyMik7XG4gICAgfVxuXG4gICAgaWYgKGlubmVyMSBpbnN0YW5jZW9mIF9CZXppZXJDdXJ2ZTIuZGVmYXVsdCkge1xuICAgICAgICBwYXRoLnB1c2goaW5uZXIxLnN1YmRpdmlkZSgwLjUsIGZhbHNlKS5yZXZlcnNlKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHBhdGgucHVzaChpbm5lcjEpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXRoO1xufTtcblxudmFyIGNhbGN1bGF0ZUJvcmRlckJveFBhdGggPSBleHBvcnRzLmNhbGN1bGF0ZUJvcmRlckJveFBhdGggPSBmdW5jdGlvbiBjYWxjdWxhdGVCb3JkZXJCb3hQYXRoKGN1cnZlcykge1xuICAgIHJldHVybiBbY3VydmVzLnRvcExlZnRPdXRlciwgY3VydmVzLnRvcFJpZ2h0T3V0ZXIsIGN1cnZlcy5ib3R0b21SaWdodE91dGVyLCBjdXJ2ZXMuYm90dG9tTGVmdE91dGVyXTtcbn07XG5cbnZhciBjYWxjdWxhdGVQYWRkaW5nQm94UGF0aCA9IGV4cG9ydHMuY2FsY3VsYXRlUGFkZGluZ0JveFBhdGggPSBmdW5jdGlvbiBjYWxjdWxhdGVQYWRkaW5nQm94UGF0aChjdXJ2ZXMpIHtcbiAgICByZXR1cm4gW2N1cnZlcy50b3BMZWZ0SW5uZXIsIGN1cnZlcy50b3BSaWdodElubmVyLCBjdXJ2ZXMuYm90dG9tUmlnaHRJbm5lciwgY3VydmVzLmJvdHRvbUxlZnRJbm5lcl07XG59O1xuXG52YXIgcGFyc2VCb3VuZEN1cnZlcyA9IGV4cG9ydHMucGFyc2VCb3VuZEN1cnZlcyA9IGZ1bmN0aW9uIHBhcnNlQm91bmRDdXJ2ZXMoYm91bmRzLCBib3JkZXJzLCBib3JkZXJSYWRpdXMpIHtcbiAgICB2YXIgdGxoID0gYm9yZGVyUmFkaXVzW0NPUk5FUi5UT1BfTEVGVF1bSF0uZ2V0QWJzb2x1dGVWYWx1ZShib3VuZHMud2lkdGgpO1xuICAgIHZhciB0bHYgPSBib3JkZXJSYWRpdXNbQ09STkVSLlRPUF9MRUZUXVtWXS5nZXRBYnNvbHV0ZVZhbHVlKGJvdW5kcy5oZWlnaHQpO1xuICAgIHZhciB0cmggPSBib3JkZXJSYWRpdXNbQ09STkVSLlRPUF9SSUdIVF1bSF0uZ2V0QWJzb2x1dGVWYWx1ZShib3VuZHMud2lkdGgpO1xuICAgIHZhciB0cnYgPSBib3JkZXJSYWRpdXNbQ09STkVSLlRPUF9SSUdIVF1bVl0uZ2V0QWJzb2x1dGVWYWx1ZShib3VuZHMuaGVpZ2h0KTtcbiAgICB2YXIgYnJoID0gYm9yZGVyUmFkaXVzW0NPUk5FUi5CT1RUT01fUklHSFRdW0hdLmdldEFic29sdXRlVmFsdWUoYm91bmRzLndpZHRoKTtcbiAgICB2YXIgYnJ2ID0gYm9yZGVyUmFkaXVzW0NPUk5FUi5CT1RUT01fUklHSFRdW1ZdLmdldEFic29sdXRlVmFsdWUoYm91bmRzLmhlaWdodCk7XG4gICAgdmFyIGJsaCA9IGJvcmRlclJhZGl1c1tDT1JORVIuQk9UVE9NX0xFRlRdW0hdLmdldEFic29sdXRlVmFsdWUoYm91bmRzLndpZHRoKTtcbiAgICB2YXIgYmx2ID0gYm9yZGVyUmFkaXVzW0NPUk5FUi5CT1RUT01fTEVGVF1bVl0uZ2V0QWJzb2x1dGVWYWx1ZShib3VuZHMuaGVpZ2h0KTtcblxuICAgIHZhciBmYWN0b3JzID0gW107XG4gICAgZmFjdG9ycy5wdXNoKCh0bGggKyB0cmgpIC8gYm91bmRzLndpZHRoKTtcbiAgICBmYWN0b3JzLnB1c2goKGJsaCArIGJyaCkgLyBib3VuZHMud2lkdGgpO1xuICAgIGZhY3RvcnMucHVzaCgodGx2ICsgYmx2KSAvIGJvdW5kcy5oZWlnaHQpO1xuICAgIGZhY3RvcnMucHVzaCgodHJ2ICsgYnJ2KSAvIGJvdW5kcy5oZWlnaHQpO1xuICAgIHZhciBtYXhGYWN0b3IgPSBNYXRoLm1heC5hcHBseShNYXRoLCBmYWN0b3JzKTtcblxuICAgIGlmIChtYXhGYWN0b3IgPiAxKSB7XG4gICAgICAgIHRsaCAvPSBtYXhGYWN0b3I7XG4gICAgICAgIHRsdiAvPSBtYXhGYWN0b3I7XG4gICAgICAgIHRyaCAvPSBtYXhGYWN0b3I7XG4gICAgICAgIHRydiAvPSBtYXhGYWN0b3I7XG4gICAgICAgIGJyaCAvPSBtYXhGYWN0b3I7XG4gICAgICAgIGJydiAvPSBtYXhGYWN0b3I7XG4gICAgICAgIGJsaCAvPSBtYXhGYWN0b3I7XG4gICAgICAgIGJsdiAvPSBtYXhGYWN0b3I7XG4gICAgfVxuXG4gICAgdmFyIHRvcFdpZHRoID0gYm91bmRzLndpZHRoIC0gdHJoO1xuICAgIHZhciByaWdodEhlaWdodCA9IGJvdW5kcy5oZWlnaHQgLSBicnY7XG4gICAgdmFyIGJvdHRvbVdpZHRoID0gYm91bmRzLndpZHRoIC0gYnJoO1xuICAgIHZhciBsZWZ0SGVpZ2h0ID0gYm91bmRzLmhlaWdodCAtIGJsdjtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHRvcExlZnRPdXRlcjogdGxoID4gMCB8fCB0bHYgPiAwID8gZ2V0Q3VydmVQb2ludHMoYm91bmRzLmxlZnQsIGJvdW5kcy50b3AsIHRsaCwgdGx2LCBDT1JORVIuVE9QX0xFRlQpIDogbmV3IF9WZWN0b3IyLmRlZmF1bHQoYm91bmRzLmxlZnQsIGJvdW5kcy50b3ApLFxuICAgICAgICB0b3BMZWZ0SW5uZXI6IHRsaCA+IDAgfHwgdGx2ID4gMCA/IGdldEN1cnZlUG9pbnRzKGJvdW5kcy5sZWZ0ICsgYm9yZGVyc1tMRUZUXS5ib3JkZXJXaWR0aCwgYm91bmRzLnRvcCArIGJvcmRlcnNbVE9QXS5ib3JkZXJXaWR0aCwgTWF0aC5tYXgoMCwgdGxoIC0gYm9yZGVyc1tMRUZUXS5ib3JkZXJXaWR0aCksIE1hdGgubWF4KDAsIHRsdiAtIGJvcmRlcnNbVE9QXS5ib3JkZXJXaWR0aCksIENPUk5FUi5UT1BfTEVGVCkgOiBuZXcgX1ZlY3RvcjIuZGVmYXVsdChib3VuZHMubGVmdCArIGJvcmRlcnNbTEVGVF0uYm9yZGVyV2lkdGgsIGJvdW5kcy50b3AgKyBib3JkZXJzW1RPUF0uYm9yZGVyV2lkdGgpLFxuICAgICAgICB0b3BSaWdodE91dGVyOiB0cmggPiAwIHx8IHRydiA+IDAgPyBnZXRDdXJ2ZVBvaW50cyhib3VuZHMubGVmdCArIHRvcFdpZHRoLCBib3VuZHMudG9wLCB0cmgsIHRydiwgQ09STkVSLlRPUF9SSUdIVCkgOiBuZXcgX1ZlY3RvcjIuZGVmYXVsdChib3VuZHMubGVmdCArIGJvdW5kcy53aWR0aCwgYm91bmRzLnRvcCksXG4gICAgICAgIHRvcFJpZ2h0SW5uZXI6IHRyaCA+IDAgfHwgdHJ2ID4gMCA/IGdldEN1cnZlUG9pbnRzKGJvdW5kcy5sZWZ0ICsgTWF0aC5taW4odG9wV2lkdGgsIGJvdW5kcy53aWR0aCArIGJvcmRlcnNbTEVGVF0uYm9yZGVyV2lkdGgpLCBib3VuZHMudG9wICsgYm9yZGVyc1tUT1BdLmJvcmRlcldpZHRoLCB0b3BXaWR0aCA+IGJvdW5kcy53aWR0aCArIGJvcmRlcnNbTEVGVF0uYm9yZGVyV2lkdGggPyAwIDogdHJoIC0gYm9yZGVyc1tMRUZUXS5ib3JkZXJXaWR0aCwgdHJ2IC0gYm9yZGVyc1tUT1BdLmJvcmRlcldpZHRoLCBDT1JORVIuVE9QX1JJR0hUKSA6IG5ldyBfVmVjdG9yMi5kZWZhdWx0KGJvdW5kcy5sZWZ0ICsgYm91bmRzLndpZHRoIC0gYm9yZGVyc1tSSUdIVF0uYm9yZGVyV2lkdGgsIGJvdW5kcy50b3AgKyBib3JkZXJzW1RPUF0uYm9yZGVyV2lkdGgpLFxuICAgICAgICBib3R0b21SaWdodE91dGVyOiBicmggPiAwIHx8IGJydiA+IDAgPyBnZXRDdXJ2ZVBvaW50cyhib3VuZHMubGVmdCArIGJvdHRvbVdpZHRoLCBib3VuZHMudG9wICsgcmlnaHRIZWlnaHQsIGJyaCwgYnJ2LCBDT1JORVIuQk9UVE9NX1JJR0hUKSA6IG5ldyBfVmVjdG9yMi5kZWZhdWx0KGJvdW5kcy5sZWZ0ICsgYm91bmRzLndpZHRoLCBib3VuZHMudG9wICsgYm91bmRzLmhlaWdodCksXG4gICAgICAgIGJvdHRvbVJpZ2h0SW5uZXI6IGJyaCA+IDAgfHwgYnJ2ID4gMCA/IGdldEN1cnZlUG9pbnRzKGJvdW5kcy5sZWZ0ICsgTWF0aC5taW4oYm90dG9tV2lkdGgsIGJvdW5kcy53aWR0aCAtIGJvcmRlcnNbTEVGVF0uYm9yZGVyV2lkdGgpLCBib3VuZHMudG9wICsgTWF0aC5taW4ocmlnaHRIZWlnaHQsIGJvdW5kcy5oZWlnaHQgKyBib3JkZXJzW1RPUF0uYm9yZGVyV2lkdGgpLCBNYXRoLm1heCgwLCBicmggLSBib3JkZXJzW1JJR0hUXS5ib3JkZXJXaWR0aCksIGJydiAtIGJvcmRlcnNbQk9UVE9NXS5ib3JkZXJXaWR0aCwgQ09STkVSLkJPVFRPTV9SSUdIVCkgOiBuZXcgX1ZlY3RvcjIuZGVmYXVsdChib3VuZHMubGVmdCArIGJvdW5kcy53aWR0aCAtIGJvcmRlcnNbUklHSFRdLmJvcmRlcldpZHRoLCBib3VuZHMudG9wICsgYm91bmRzLmhlaWdodCAtIGJvcmRlcnNbQk9UVE9NXS5ib3JkZXJXaWR0aCksXG4gICAgICAgIGJvdHRvbUxlZnRPdXRlcjogYmxoID4gMCB8fCBibHYgPiAwID8gZ2V0Q3VydmVQb2ludHMoYm91bmRzLmxlZnQsIGJvdW5kcy50b3AgKyBsZWZ0SGVpZ2h0LCBibGgsIGJsdiwgQ09STkVSLkJPVFRPTV9MRUZUKSA6IG5ldyBfVmVjdG9yMi5kZWZhdWx0KGJvdW5kcy5sZWZ0LCBib3VuZHMudG9wICsgYm91bmRzLmhlaWdodCksXG4gICAgICAgIGJvdHRvbUxlZnRJbm5lcjogYmxoID4gMCB8fCBibHYgPiAwID8gZ2V0Q3VydmVQb2ludHMoYm91bmRzLmxlZnQgKyBib3JkZXJzW0xFRlRdLmJvcmRlcldpZHRoLCBib3VuZHMudG9wICsgbGVmdEhlaWdodCwgTWF0aC5tYXgoMCwgYmxoIC0gYm9yZGVyc1tMRUZUXS5ib3JkZXJXaWR0aCksIGJsdiAtIGJvcmRlcnNbQk9UVE9NXS5ib3JkZXJXaWR0aCwgQ09STkVSLkJPVFRPTV9MRUZUKSA6IG5ldyBfVmVjdG9yMi5kZWZhdWx0KGJvdW5kcy5sZWZ0ICsgYm9yZGVyc1tMRUZUXS5ib3JkZXJXaWR0aCwgYm91bmRzLnRvcCArIGJvdW5kcy5oZWlnaHQgLSBib3JkZXJzW0JPVFRPTV0uYm9yZGVyV2lkdGgpXG4gICAgfTtcbn07XG5cbnZhciBDT1JORVIgPSB7XG4gICAgVE9QX0xFRlQ6IDAsXG4gICAgVE9QX1JJR0hUOiAxLFxuICAgIEJPVFRPTV9SSUdIVDogMixcbiAgICBCT1RUT01fTEVGVDogM1xufTtcblxudmFyIGdldEN1cnZlUG9pbnRzID0gZnVuY3Rpb24gZ2V0Q3VydmVQb2ludHMoeCwgeSwgcjEsIHIyLCBwb3NpdGlvbikge1xuICAgIHZhciBrYXBwYSA9IDQgKiAoKE1hdGguc3FydCgyKSAtIDEpIC8gMyk7XG4gICAgdmFyIG94ID0gcjEgKiBrYXBwYTsgLy8gY29udHJvbCBwb2ludCBvZmZzZXQgaG9yaXpvbnRhbFxuICAgIHZhciBveSA9IHIyICoga2FwcGE7IC8vIGNvbnRyb2wgcG9pbnQgb2Zmc2V0IHZlcnRpY2FsXG4gICAgdmFyIHhtID0geCArIHIxOyAvLyB4LW1pZGRsZVxuICAgIHZhciB5bSA9IHkgKyByMjsgLy8geS1taWRkbGVcblxuICAgIHN3aXRjaCAocG9zaXRpb24pIHtcbiAgICAgICAgY2FzZSBDT1JORVIuVE9QX0xFRlQ6XG4gICAgICAgICAgICByZXR1cm4gbmV3IF9CZXppZXJDdXJ2ZTIuZGVmYXVsdChuZXcgX1ZlY3RvcjIuZGVmYXVsdCh4LCB5bSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KHgsIHltIC0gb3kpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdCh4bSAtIG94LCB5KSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoeG0sIHkpKTtcbiAgICAgICAgY2FzZSBDT1JORVIuVE9QX1JJR0hUOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBfQmV6aWVyQ3VydmUyLmRlZmF1bHQobmV3IF9WZWN0b3IyLmRlZmF1bHQoeCwgeSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KHggKyBveCwgeSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KHhtLCB5bSAtIG95KSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoeG0sIHltKSk7XG4gICAgICAgIGNhc2UgQ09STkVSLkJPVFRPTV9SSUdIVDpcbiAgICAgICAgICAgIHJldHVybiBuZXcgX0JlemllckN1cnZlMi5kZWZhdWx0KG5ldyBfVmVjdG9yMi5kZWZhdWx0KHhtLCB5KSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoeG0sIHkgKyBveSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KHggKyBveCwgeW0pLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdCh4LCB5bSkpO1xuICAgICAgICBjYXNlIENPUk5FUi5CT1RUT01fTEVGVDpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBuZXcgX0JlemllckN1cnZlMi5kZWZhdWx0KG5ldyBfVmVjdG9yMi5kZWZhdWx0KHhtLCB5bSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KHhtIC0gb3gsIHltKSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoeCwgeSArIG95KSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoeCwgeSkpO1xuICAgIH1cbn07XG5cbi8qKiovIH0pLFxuLyogMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfQ29sb3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgX0NvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvbG9yKTtcblxudmFyIF9VdGlsID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblxudmFyIF9iYWNrZ3JvdW5kID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxudmFyIF9ib3JkZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEyKTtcblxudmFyIF9ib3JkZXJSYWRpdXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMzKTtcblxudmFyIF9kaXNwbGF5ID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNCk7XG5cbnZhciBfZmxvYXQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM1KTtcblxudmFyIF9mb250ID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNik7XG5cbnZhciBfbGV0dGVyU3BhY2luZyA9IF9fd2VicGFja19yZXF1aXJlX18oMzcpO1xuXG52YXIgX2xpbmVCcmVhayA9IF9fd2VicGFja19yZXF1aXJlX18oMzgpO1xuXG52YXIgX2xpc3RTdHlsZSA9IF9fd2VicGFja19yZXF1aXJlX18oOCk7XG5cbnZhciBfbWFyZ2luID0gX193ZWJwYWNrX3JlcXVpcmVfXygzOSk7XG5cbnZhciBfb3ZlcmZsb3cgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQwKTtcblxudmFyIF9vdmVyZmxvd1dyYXAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE4KTtcblxudmFyIF9wYWRkaW5nID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNyk7XG5cbnZhciBfcG9zaXRpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE5KTtcblxudmFyIF90ZXh0RGVjb3JhdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpO1xuXG52YXIgX3RleHRTaGFkb3cgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQxKTtcblxudmFyIF90ZXh0VHJhbnNmb3JtID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMCk7XG5cbnZhciBfdHJhbnNmb3JtID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0Mik7XG5cbnZhciBfdmlzaWJpbGl0eSA9IF9fd2VicGFja19yZXF1aXJlX18oNDMpO1xuXG52YXIgX3dvcmRCcmVhayA9IF9fd2VicGFja19yZXF1aXJlX18oNDQpO1xuXG52YXIgX3pJbmRleCA9IF9fd2VicGFja19yZXF1aXJlX18oNDUpO1xuXG52YXIgX0JvdW5kcyA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cbnZhciBfSW5wdXQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIxKTtcblxudmFyIF9MaXN0SXRlbSA9IF9fd2VicGFja19yZXF1aXJlX18oMTQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgSU5QVVRfVEFHUyA9IFsnSU5QVVQnLCAnVEVYVEFSRUEnLCAnU0VMRUNUJ107XG5cbnZhciBOb2RlQ29udGFpbmVyID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE5vZGVDb250YWluZXIobm9kZSwgcGFyZW50LCByZXNvdXJjZUxvYWRlciwgaW5kZXgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTm9kZUNvbnRhaW5lcik7XG5cbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMudGFnTmFtZSA9IG5vZGUudGFnTmFtZTtcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMgPSBbXTtcbiAgICAgICAgdGhpcy5saXN0SXRlbXMgPSBbXTtcbiAgICAgICAgaWYgKHR5cGVvZiBub2RlLnN0YXJ0ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdGhpcy5saXN0U3RhcnQgPSBub2RlLnN0YXJ0O1xuICAgICAgICB9XG4gICAgICAgIHZhciBkZWZhdWx0VmlldyA9IG5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcbiAgICAgICAgdmFyIHNjcm9sbFggPSBkZWZhdWx0Vmlldy5wYWdlWE9mZnNldDtcbiAgICAgICAgdmFyIHNjcm9sbFkgPSBkZWZhdWx0Vmlldy5wYWdlWU9mZnNldDtcbiAgICAgICAgdmFyIHN0eWxlID0gZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBudWxsKTtcbiAgICAgICAgdmFyIGRpc3BsYXkgPSAoMCwgX2Rpc3BsYXkucGFyc2VEaXNwbGF5KShzdHlsZS5kaXNwbGF5KTtcblxuICAgICAgICB2YXIgSVNfSU5QVVQgPSBub2RlLnR5cGUgPT09ICdyYWRpbycgfHwgbm9kZS50eXBlID09PSAnY2hlY2tib3gnO1xuXG4gICAgICAgIHZhciBwb3NpdGlvbiA9ICgwLCBfcG9zaXRpb24ucGFyc2VQb3NpdGlvbikoc3R5bGUucG9zaXRpb24pO1xuXG4gICAgICAgIHRoaXMuc3R5bGUgPSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBJU19JTlBVVCA/IF9JbnB1dC5JTlBVVF9CQUNLR1JPVU5EIDogKDAsIF9iYWNrZ3JvdW5kLnBhcnNlQmFja2dyb3VuZCkoc3R5bGUsIHJlc291cmNlTG9hZGVyKSxcbiAgICAgICAgICAgIGJvcmRlcjogSVNfSU5QVVQgPyBfSW5wdXQuSU5QVVRfQk9SREVSUyA6ICgwLCBfYm9yZGVyLnBhcnNlQm9yZGVyKShzdHlsZSksXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IChub2RlIGluc3RhbmNlb2YgZGVmYXVsdFZpZXcuSFRNTElucHV0RWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkgJiYgSVNfSU5QVVQgPyAoMCwgX0lucHV0LmdldElucHV0Qm9yZGVyUmFkaXVzKShub2RlKSA6ICgwLCBfYm9yZGVyUmFkaXVzLnBhcnNlQm9yZGVyUmFkaXVzKShzdHlsZSksXG4gICAgICAgICAgICBjb2xvcjogSVNfSU5QVVQgPyBfSW5wdXQuSU5QVVRfQ09MT1IgOiBuZXcgX0NvbG9yMi5kZWZhdWx0KHN0eWxlLmNvbG9yKSxcbiAgICAgICAgICAgIGRpc3BsYXk6IGRpc3BsYXksXG4gICAgICAgICAgICBmbG9hdDogKDAsIF9mbG9hdC5wYXJzZUNTU0Zsb2F0KShzdHlsZS5mbG9hdCksXG4gICAgICAgICAgICBmb250OiAoMCwgX2ZvbnQucGFyc2VGb250KShzdHlsZSksXG4gICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiAoMCwgX2xldHRlclNwYWNpbmcucGFyc2VMZXR0ZXJTcGFjaW5nKShzdHlsZS5sZXR0ZXJTcGFjaW5nKSxcbiAgICAgICAgICAgIGxpc3RTdHlsZTogZGlzcGxheSA9PT0gX2Rpc3BsYXkuRElTUExBWS5MSVNUX0lURU0gPyAoMCwgX2xpc3RTdHlsZS5wYXJzZUxpc3RTdHlsZSkoc3R5bGUpIDogbnVsbCxcbiAgICAgICAgICAgIGxpbmVCcmVhazogKDAsIF9saW5lQnJlYWsucGFyc2VMaW5lQnJlYWspKHN0eWxlLmxpbmVCcmVhayksXG4gICAgICAgICAgICBtYXJnaW46ICgwLCBfbWFyZ2luLnBhcnNlTWFyZ2luKShzdHlsZSksXG4gICAgICAgICAgICBvcGFjaXR5OiBwYXJzZUZsb2F0KHN0eWxlLm9wYWNpdHkpLFxuICAgICAgICAgICAgb3ZlcmZsb3c6IElOUFVUX1RBR1MuaW5kZXhPZihub2RlLnRhZ05hbWUpID09PSAtMSA/ICgwLCBfb3ZlcmZsb3cucGFyc2VPdmVyZmxvdykoc3R5bGUub3ZlcmZsb3cpIDogX292ZXJmbG93Lk9WRVJGTE9XLkhJRERFTixcbiAgICAgICAgICAgIG92ZXJmbG93V3JhcDogKDAsIF9vdmVyZmxvd1dyYXAucGFyc2VPdmVyZmxvd1dyYXApKHN0eWxlLm92ZXJmbG93V3JhcCA/IHN0eWxlLm92ZXJmbG93V3JhcCA6IHN0eWxlLndvcmRXcmFwKSxcbiAgICAgICAgICAgIHBhZGRpbmc6ICgwLCBfcGFkZGluZy5wYXJzZVBhZGRpbmcpKHN0eWxlKSxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcbiAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiAoMCwgX3RleHREZWNvcmF0aW9uLnBhcnNlVGV4dERlY29yYXRpb24pKHN0eWxlKSxcbiAgICAgICAgICAgIHRleHRTaGFkb3c6ICgwLCBfdGV4dFNoYWRvdy5wYXJzZVRleHRTaGFkb3cpKHN0eWxlLnRleHRTaGFkb3cpLFxuICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogKDAsIF90ZXh0VHJhbnNmb3JtLnBhcnNlVGV4dFRyYW5zZm9ybSkoc3R5bGUudGV4dFRyYW5zZm9ybSksXG4gICAgICAgICAgICB0cmFuc2Zvcm06ICgwLCBfdHJhbnNmb3JtLnBhcnNlVHJhbnNmb3JtKShzdHlsZSksXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiAoMCwgX3Zpc2liaWxpdHkucGFyc2VWaXNpYmlsaXR5KShzdHlsZS52aXNpYmlsaXR5KSxcbiAgICAgICAgICAgIHdvcmRCcmVhazogKDAsIF93b3JkQnJlYWsucGFyc2VXb3JkQnJlYWspKHN0eWxlLndvcmRCcmVhayksXG4gICAgICAgICAgICB6SW5kZXg6ICgwLCBfekluZGV4LnBhcnNlWkluZGV4KShwb3NpdGlvbiAhPT0gX3Bvc2l0aW9uLlBPU0lUSU9OLlNUQVRJQyA/IHN0eWxlLnpJbmRleCA6ICdhdXRvJylcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy5pc1RyYW5zZm9ybWVkKCkpIHtcbiAgICAgICAgICAgIC8vIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBwcm92aWRlcyB2YWx1ZXMgcG9zdC10cmFuc2Zvcm0sIHdlIHdhbnQgdGhlbSB3aXRob3V0IHRoZSB0cmFuc2Zvcm1hdGlvblxuICAgICAgICAgICAgbm9kZS5zdHlsZS50cmFuc2Zvcm0gPSAnbWF0cml4KDEsMCwwLDEsMCwwKSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGlzcGxheSA9PT0gX2Rpc3BsYXkuRElTUExBWS5MSVNUX0lURU0pIHtcbiAgICAgICAgICAgIHZhciBsaXN0T3duZXIgPSAoMCwgX0xpc3RJdGVtLmdldExpc3RPd25lcikodGhpcyk7XG4gICAgICAgICAgICBpZiAobGlzdE93bmVyKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxpc3RJbmRleCA9IGxpc3RPd25lci5saXN0SXRlbXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGxpc3RPd25lci5saXN0SXRlbXMucHVzaCh0aGlzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RJbmRleCA9IG5vZGUuaGFzQXR0cmlidXRlKCd2YWx1ZScpICYmIHR5cGVvZiBub2RlLnZhbHVlID09PSAnbnVtYmVyJyA/IG5vZGUudmFsdWUgOiBsaXN0SW5kZXggPT09IDAgPyB0eXBlb2YgbGlzdE93bmVyLmxpc3RTdGFydCA9PT0gJ251bWJlcicgPyBsaXN0T3duZXIubGlzdFN0YXJ0IDogMSA6IGxpc3RPd25lci5saXN0SXRlbXNbbGlzdEluZGV4IC0gMV0ubGlzdEluZGV4ICsgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRPRE8gbW92ZSBib3VuZCByZXRyaWV2YWwgZm9yIGFsbCBub2RlcyB0byBhIGxhdGVyIHN0YWdlP1xuICAgICAgICBpZiAobm9kZS50YWdOYW1lID09PSAnSU1HJykge1xuICAgICAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmJvdW5kcyA9ICgwLCBfQm91bmRzLnBhcnNlQm91bmRzKShub2RlLCBzY3JvbGxYLCBzY3JvbGxZKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5jdXJ2ZWRCb3VuZHMgPSAoMCwgX0JvdW5kcy5wYXJzZUJvdW5kQ3VydmVzKShfdGhpcy5ib3VuZHMsIF90aGlzLnN0eWxlLmJvcmRlciwgX3RoaXMuc3R5bGUuYm9yZGVyUmFkaXVzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW1hZ2UgPSBnZXRJbWFnZShub2RlLCByZXNvdXJjZUxvYWRlcik7XG4gICAgICAgIHRoaXMuYm91bmRzID0gSVNfSU5QVVQgPyAoMCwgX0lucHV0LnJlZm9ybWF0SW5wdXRCb3VuZHMpKCgwLCBfQm91bmRzLnBhcnNlQm91bmRzKShub2RlLCBzY3JvbGxYLCBzY3JvbGxZKSkgOiAoMCwgX0JvdW5kcy5wYXJzZUJvdW5kcykobm9kZSwgc2Nyb2xsWCwgc2Nyb2xsWSk7XG4gICAgICAgIHRoaXMuY3VydmVkQm91bmRzID0gKDAsIF9Cb3VuZHMucGFyc2VCb3VuZEN1cnZlcykodGhpcy5ib3VuZHMsIHRoaXMuc3R5bGUuYm9yZGVyLCB0aGlzLnN0eWxlLmJvcmRlclJhZGl1cyk7XG5cbiAgICAgICAgaWYgKHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMubmFtZSA9ICcnICsgbm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgKyAobm9kZS5pZCA/ICcjJyArIG5vZGUuaWQgOiAnJykgKyBub2RlLmNsYXNzTmFtZS50b1N0cmluZygpLnNwbGl0KCcgJykubWFwKGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHMubGVuZ3RoID8gJy4nICsgcyA6ICcnO1xuICAgICAgICAgICAgfSkuam9pbignJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoTm9kZUNvbnRhaW5lciwgW3tcbiAgICAgICAga2V5OiAnZ2V0Q2xpcFBhdGhzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldENsaXBQYXRocygpIHtcbiAgICAgICAgICAgIHZhciBwYXJlbnRDbGlwcyA9IHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQuZ2V0Q2xpcFBhdGhzKCkgOiBbXTtcbiAgICAgICAgICAgIHZhciBpc0NsaXBwZWQgPSB0aGlzLnN0eWxlLm92ZXJmbG93ICE9PSBfb3ZlcmZsb3cuT1ZFUkZMT1cuVklTSUJMRTtcblxuICAgICAgICAgICAgcmV0dXJuIGlzQ2xpcHBlZCA/IHBhcmVudENsaXBzLmNvbmNhdChbKDAsIF9Cb3VuZHMuY2FsY3VsYXRlUGFkZGluZ0JveFBhdGgpKHRoaXMuY3VydmVkQm91bmRzKV0pIDogcGFyZW50Q2xpcHM7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2lzSW5GbG93JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzSW5GbG93KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNSb290RWxlbWVudCgpICYmICF0aGlzLmlzRmxvYXRpbmcoKSAmJiAhdGhpcy5pc0Fic29sdXRlbHlQb3NpdGlvbmVkKCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2lzVmlzaWJsZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc1Zpc2libGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gISgwLCBfVXRpbC5jb250YWlucykodGhpcy5zdHlsZS5kaXNwbGF5LCBfZGlzcGxheS5ESVNQTEFZLk5PTkUpICYmIHRoaXMuc3R5bGUub3BhY2l0eSA+IDAgJiYgdGhpcy5zdHlsZS52aXNpYmlsaXR5ID09PSBfdmlzaWJpbGl0eS5WSVNJQklMSVRZLlZJU0lCTEU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2lzQWJzb2x1dGVseVBvc2l0aW9uZWQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaXNBYnNvbHV0ZWx5UG9zaXRpb25lZCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0eWxlLnBvc2l0aW9uICE9PSBfcG9zaXRpb24uUE9TSVRJT04uU1RBVElDICYmIHRoaXMuc3R5bGUucG9zaXRpb24gIT09IF9wb3NpdGlvbi5QT1NJVElPTi5SRUxBVElWRTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaXNQb3NpdGlvbmVkJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzUG9zaXRpb25lZCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0eWxlLnBvc2l0aW9uICE9PSBfcG9zaXRpb24uUE9TSVRJT04uU1RBVElDO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdpc0Zsb2F0aW5nJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzRmxvYXRpbmcoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdHlsZS5mbG9hdCAhPT0gX2Zsb2F0LkZMT0FULk5PTkU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2lzUm9vdEVsZW1lbnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaXNSb290RWxlbWVudCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudCA9PT0gbnVsbDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaXNUcmFuc2Zvcm1lZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc1RyYW5zZm9ybWVkKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3R5bGUudHJhbnNmb3JtICE9PSBudWxsO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdpc1Bvc2l0aW9uZWRXaXRoWkluZGV4JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzUG9zaXRpb25lZFdpdGhaSW5kZXgoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc1Bvc2l0aW9uZWQoKSAmJiAhdGhpcy5zdHlsZS56SW5kZXguYXV0bztcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaXNJbmxpbmVMZXZlbCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc0lubGluZUxldmVsKCkge1xuICAgICAgICAgICAgcmV0dXJuICgwLCBfVXRpbC5jb250YWlucykodGhpcy5zdHlsZS5kaXNwbGF5LCBfZGlzcGxheS5ESVNQTEFZLklOTElORSkgfHwgKDAsIF9VdGlsLmNvbnRhaW5zKSh0aGlzLnN0eWxlLmRpc3BsYXksIF9kaXNwbGF5LkRJU1BMQVkuSU5MSU5FX0JMT0NLKSB8fCAoMCwgX1V0aWwuY29udGFpbnMpKHRoaXMuc3R5bGUuZGlzcGxheSwgX2Rpc3BsYXkuRElTUExBWS5JTkxJTkVfRkxFWCkgfHwgKDAsIF9VdGlsLmNvbnRhaW5zKSh0aGlzLnN0eWxlLmRpc3BsYXksIF9kaXNwbGF5LkRJU1BMQVkuSU5MSU5FX0dSSUQpIHx8ICgwLCBfVXRpbC5jb250YWlucykodGhpcy5zdHlsZS5kaXNwbGF5LCBfZGlzcGxheS5ESVNQTEFZLklOTElORV9MSVNUX0lURU0pIHx8ICgwLCBfVXRpbC5jb250YWlucykodGhpcy5zdHlsZS5kaXNwbGF5LCBfZGlzcGxheS5ESVNQTEFZLklOTElORV9UQUJMRSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2lzSW5saW5lQmxvY2tPcklubGluZVRhYmxlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzSW5saW5lQmxvY2tPcklubGluZVRhYmxlKCkge1xuICAgICAgICAgICAgcmV0dXJuICgwLCBfVXRpbC5jb250YWlucykodGhpcy5zdHlsZS5kaXNwbGF5LCBfZGlzcGxheS5ESVNQTEFZLklOTElORV9CTE9DSykgfHwgKDAsIF9VdGlsLmNvbnRhaW5zKSh0aGlzLnN0eWxlLmRpc3BsYXksIF9kaXNwbGF5LkRJU1BMQVkuSU5MSU5FX1RBQkxFKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBOb2RlQ29udGFpbmVyO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBOb2RlQ29udGFpbmVyO1xuXG5cbnZhciBnZXRJbWFnZSA9IGZ1bmN0aW9uIGdldEltYWdlKG5vZGUsIHJlc291cmNlTG9hZGVyKSB7XG4gICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBub2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuU1ZHU1ZHRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgU1ZHU1ZHRWxlbWVudCkge1xuICAgICAgICB2YXIgcyA9IG5ldyBYTUxTZXJpYWxpemVyKCk7XG4gICAgICAgIHJldHVybiByZXNvdXJjZUxvYWRlci5sb2FkSW1hZ2UoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCwnICsgZW5jb2RlVVJJQ29tcG9uZW50KHMuc2VyaWFsaXplVG9TdHJpbmcobm9kZSkpKTtcbiAgICB9XG4gICAgc3dpdGNoIChub2RlLnRhZ05hbWUpIHtcbiAgICAgICAgY2FzZSAnSU1HJzpcbiAgICAgICAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgICAgICAgIHZhciBpbWcgPSBub2RlO1xuICAgICAgICAgICAgcmV0dXJuIHJlc291cmNlTG9hZGVyLmxvYWRJbWFnZShpbWcuY3VycmVudFNyYyB8fCBpbWcuc3JjKTtcbiAgICAgICAgY2FzZSAnQ0FOVkFTJzpcbiAgICAgICAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgICAgICAgIHZhciBjYW52YXMgPSBub2RlO1xuICAgICAgICAgICAgcmV0dXJuIHJlc291cmNlTG9hZGVyLmxvYWRDYW52YXMoY2FudmFzKTtcbiAgICAgICAgY2FzZSAnSUZSQU1FJzpcbiAgICAgICAgICAgIHZhciBpZnJhbWVLZXkgPSBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1odG1sMmNhbnZhcy1pbnRlcm5hbC1pZnJhbWUta2V5Jyk7XG4gICAgICAgICAgICBpZiAoaWZyYW1lS2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlmcmFtZUtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xufTtcblxuLyoqKi8gfSksXG4vKiA0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbnZhciBjb250YWlucyA9IGV4cG9ydHMuY29udGFpbnMgPSBmdW5jdGlvbiBjb250YWlucyhiaXQsIHZhbHVlKSB7XG4gICAgcmV0dXJuIChiaXQgJiB2YWx1ZSkgIT09IDA7XG59O1xuXG52YXIgZGlzdGFuY2UgPSBleHBvcnRzLmRpc3RhbmNlID0gZnVuY3Rpb24gZGlzdGFuY2UoYSwgYikge1xuICAgIHJldHVybiBNYXRoLnNxcnQoYSAqIGEgKyBiICogYik7XG59O1xuXG52YXIgY29weUNTU1N0eWxlcyA9IGV4cG9ydHMuY29weUNTU1N0eWxlcyA9IGZ1bmN0aW9uIGNvcHlDU1NTdHlsZXMoc3R5bGUsIHRhcmdldCkge1xuICAgIC8vIEVkZ2UgZG9lcyBub3QgcHJvdmlkZSB2YWx1ZSBmb3IgY3NzVGV4dFxuICAgIGZvciAodmFyIGkgPSBzdHlsZS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICB2YXIgcHJvcGVydHkgPSBzdHlsZS5pdGVtKGkpO1xuICAgICAgICAvLyBTYWZhcmkgc2hvd3MgcHNldWRvZWxlbWVudHMgaWYgY29udGVudCBpcyBzZXRcbiAgICAgICAgaWYgKHByb3BlcnR5ICE9PSAnY29udGVudCcpIHtcbiAgICAgICAgICAgIHRhcmdldC5zdHlsZS5zZXRQcm9wZXJ0eShwcm9wZXJ0eSwgc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShwcm9wZXJ0eSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59O1xuXG52YXIgU01BTExfSU1BR0UgPSBleHBvcnRzLlNNQUxMX0lNQUdFID0gJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBNyc7XG5cbi8qKiovIH0pLFxuLyogNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnBhcnNlQmFja2dyb3VuZEltYWdlID0gZXhwb3J0cy5wYXJzZUJhY2tncm91bmQgPSBleHBvcnRzLmNhbGN1bGF0ZUJhY2tncm91bmRSZXBlYXRQYXRoID0gZXhwb3J0cy5jYWxjdWxhdGVCYWNrZ3JvdW5kUG9zaXRpb24gPSBleHBvcnRzLmNhbGN1bGF0ZUJhY2tncm91bmdQb3NpdGlvbmluZ0FyZWEgPSBleHBvcnRzLmNhbGN1bGF0ZUJhY2tncm91bmdQYWludGluZ0FyZWEgPSBleHBvcnRzLmNhbGN1bGF0ZUdyYWRpZW50QmFja2dyb3VuZFNpemUgPSBleHBvcnRzLmNhbGN1bGF0ZUJhY2tncm91bmRTaXplID0gZXhwb3J0cy5CQUNLR1JPVU5EX09SSUdJTiA9IGV4cG9ydHMuQkFDS0dST1VORF9DTElQID0gZXhwb3J0cy5CQUNLR1JPVU5EX1NJWkUgPSBleHBvcnRzLkJBQ0tHUk9VTkRfUkVQRUFUID0gdW5kZWZpbmVkO1xuXG52YXIgX0NvbG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxudmFyIF9Db2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db2xvcik7XG5cbnZhciBfTGVuZ3RoID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxudmFyIF9MZW5ndGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTGVuZ3RoKTtcblxudmFyIF9TaXplID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMSk7XG5cbnZhciBfU2l6ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TaXplKTtcblxudmFyIF9WZWN0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xuXG52YXIgX1ZlY3RvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9WZWN0b3IpO1xuXG52YXIgX0JvdW5kcyA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cbnZhciBfcGFkZGluZyA9IF9fd2VicGFja19yZXF1aXJlX18oMTcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgQkFDS0dST1VORF9SRVBFQVQgPSBleHBvcnRzLkJBQ0tHUk9VTkRfUkVQRUFUID0ge1xuICAgIFJFUEVBVDogMCxcbiAgICBOT19SRVBFQVQ6IDEsXG4gICAgUkVQRUFUX1g6IDIsXG4gICAgUkVQRUFUX1k6IDNcbn07XG5cbnZhciBCQUNLR1JPVU5EX1NJWkUgPSBleHBvcnRzLkJBQ0tHUk9VTkRfU0laRSA9IHtcbiAgICBBVVRPOiAwLFxuICAgIENPTlRBSU46IDEsXG4gICAgQ09WRVI6IDIsXG4gICAgTEVOR1RIOiAzXG59O1xuXG52YXIgQkFDS0dST1VORF9DTElQID0gZXhwb3J0cy5CQUNLR1JPVU5EX0NMSVAgPSB7XG4gICAgQk9SREVSX0JPWDogMCxcbiAgICBQQURESU5HX0JPWDogMSxcbiAgICBDT05URU5UX0JPWDogMlxufTtcblxudmFyIEJBQ0tHUk9VTkRfT1JJR0lOID0gZXhwb3J0cy5CQUNLR1JPVU5EX09SSUdJTiA9IEJBQ0tHUk9VTkRfQ0xJUDtcblxudmFyIEFVVE8gPSAnYXV0byc7XG5cbnZhciBCYWNrZ3JvdW5kU2l6ZSA9IGZ1bmN0aW9uIEJhY2tncm91bmRTaXplKHNpemUpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQmFja2dyb3VuZFNpemUpO1xuXG4gICAgc3dpdGNoIChzaXplKSB7XG4gICAgICAgIGNhc2UgJ2NvbnRhaW4nOlxuICAgICAgICAgICAgdGhpcy5zaXplID0gQkFDS0dST1VORF9TSVpFLkNPTlRBSU47XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY292ZXInOlxuICAgICAgICAgICAgdGhpcy5zaXplID0gQkFDS0dST1VORF9TSVpFLkNPVkVSO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F1dG8nOlxuICAgICAgICAgICAgdGhpcy5zaXplID0gQkFDS0dST1VORF9TSVpFLkFVVE87XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBuZXcgX0xlbmd0aDIuZGVmYXVsdChzaXplKTtcbiAgICB9XG59O1xuXG52YXIgY2FsY3VsYXRlQmFja2dyb3VuZFNpemUgPSBleHBvcnRzLmNhbGN1bGF0ZUJhY2tncm91bmRTaXplID0gZnVuY3Rpb24gY2FsY3VsYXRlQmFja2dyb3VuZFNpemUoYmFja2dyb3VuZEltYWdlLCBpbWFnZSwgYm91bmRzKSB7XG4gICAgdmFyIHdpZHRoID0gMDtcbiAgICB2YXIgaGVpZ2h0ID0gMDtcbiAgICB2YXIgc2l6ZSA9IGJhY2tncm91bmRJbWFnZS5zaXplO1xuICAgIGlmIChzaXplWzBdLnNpemUgPT09IEJBQ0tHUk9VTkRfU0laRS5DT05UQUlOIHx8IHNpemVbMF0uc2l6ZSA9PT0gQkFDS0dST1VORF9TSVpFLkNPVkVSKSB7XG4gICAgICAgIHZhciB0YXJnZXRSYXRpbyA9IGJvdW5kcy53aWR0aCAvIGJvdW5kcy5oZWlnaHQ7XG4gICAgICAgIHZhciBjdXJyZW50UmF0aW8gPSBpbWFnZS53aWR0aCAvIGltYWdlLmhlaWdodDtcbiAgICAgICAgcmV0dXJuIHRhcmdldFJhdGlvIDwgY3VycmVudFJhdGlvICE9PSAoc2l6ZVswXS5zaXplID09PSBCQUNLR1JPVU5EX1NJWkUuQ09WRVIpID8gbmV3IF9TaXplMi5kZWZhdWx0KGJvdW5kcy53aWR0aCwgYm91bmRzLndpZHRoIC8gY3VycmVudFJhdGlvKSA6IG5ldyBfU2l6ZTIuZGVmYXVsdChib3VuZHMuaGVpZ2h0ICogY3VycmVudFJhdGlvLCBib3VuZHMuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBpZiAoc2l6ZVswXS52YWx1ZSkge1xuICAgICAgICB3aWR0aCA9IHNpemVbMF0udmFsdWUuZ2V0QWJzb2x1dGVWYWx1ZShib3VuZHMud2lkdGgpO1xuICAgIH1cblxuICAgIGlmIChzaXplWzBdLnNpemUgPT09IEJBQ0tHUk9VTkRfU0laRS5BVVRPICYmIHNpemVbMV0uc2l6ZSA9PT0gQkFDS0dST1VORF9TSVpFLkFVVE8pIHtcbiAgICAgICAgaGVpZ2h0ID0gaW1hZ2UuaGVpZ2h0O1xuICAgIH0gZWxzZSBpZiAoc2l6ZVsxXS5zaXplID09PSBCQUNLR1JPVU5EX1NJWkUuQVVUTykge1xuICAgICAgICBoZWlnaHQgPSB3aWR0aCAvIGltYWdlLndpZHRoICogaW1hZ2UuaGVpZ2h0O1xuICAgIH0gZWxzZSBpZiAoc2l6ZVsxXS52YWx1ZSkge1xuICAgICAgICBoZWlnaHQgPSBzaXplWzFdLnZhbHVlLmdldEFic29sdXRlVmFsdWUoYm91bmRzLmhlaWdodCk7XG4gICAgfVxuXG4gICAgaWYgKHNpemVbMF0uc2l6ZSA9PT0gQkFDS0dST1VORF9TSVpFLkFVVE8pIHtcbiAgICAgICAgd2lkdGggPSBoZWlnaHQgLyBpbWFnZS5oZWlnaHQgKiBpbWFnZS53aWR0aDtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IF9TaXplMi5kZWZhdWx0KHdpZHRoLCBoZWlnaHQpO1xufTtcblxudmFyIGNhbGN1bGF0ZUdyYWRpZW50QmFja2dyb3VuZFNpemUgPSBleHBvcnRzLmNhbGN1bGF0ZUdyYWRpZW50QmFja2dyb3VuZFNpemUgPSBmdW5jdGlvbiBjYWxjdWxhdGVHcmFkaWVudEJhY2tncm91bmRTaXplKGJhY2tncm91bmRJbWFnZSwgYm91bmRzKSB7XG4gICAgdmFyIHNpemUgPSBiYWNrZ3JvdW5kSW1hZ2Uuc2l6ZTtcbiAgICB2YXIgd2lkdGggPSBzaXplWzBdLnZhbHVlID8gc2l6ZVswXS52YWx1ZS5nZXRBYnNvbHV0ZVZhbHVlKGJvdW5kcy53aWR0aCkgOiBib3VuZHMud2lkdGg7XG4gICAgdmFyIGhlaWdodCA9IHNpemVbMV0udmFsdWUgPyBzaXplWzFdLnZhbHVlLmdldEFic29sdXRlVmFsdWUoYm91bmRzLmhlaWdodCkgOiBzaXplWzBdLnZhbHVlID8gd2lkdGggOiBib3VuZHMuaGVpZ2h0O1xuXG4gICAgcmV0dXJuIG5ldyBfU2l6ZTIuZGVmYXVsdCh3aWR0aCwgaGVpZ2h0KTtcbn07XG5cbnZhciBBVVRPX1NJWkUgPSBuZXcgQmFja2dyb3VuZFNpemUoQVVUTyk7XG5cbnZhciBjYWxjdWxhdGVCYWNrZ3JvdW5nUGFpbnRpbmdBcmVhID0gZXhwb3J0cy5jYWxjdWxhdGVCYWNrZ3JvdW5nUGFpbnRpbmdBcmVhID0gZnVuY3Rpb24gY2FsY3VsYXRlQmFja2dyb3VuZ1BhaW50aW5nQXJlYShjdXJ2ZXMsIGNsaXApIHtcbiAgICBzd2l0Y2ggKGNsaXApIHtcbiAgICAgICAgY2FzZSBCQUNLR1JPVU5EX0NMSVAuQk9SREVSX0JPWDpcbiAgICAgICAgICAgIHJldHVybiAoMCwgX0JvdW5kcy5jYWxjdWxhdGVCb3JkZXJCb3hQYXRoKShjdXJ2ZXMpO1xuICAgICAgICBjYXNlIEJBQ0tHUk9VTkRfQ0xJUC5QQURESU5HX0JPWDpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiAoMCwgX0JvdW5kcy5jYWxjdWxhdGVQYWRkaW5nQm94UGF0aCkoY3VydmVzKTtcbiAgICB9XG59O1xuXG52YXIgY2FsY3VsYXRlQmFja2dyb3VuZ1Bvc2l0aW9uaW5nQXJlYSA9IGV4cG9ydHMuY2FsY3VsYXRlQmFja2dyb3VuZ1Bvc2l0aW9uaW5nQXJlYSA9IGZ1bmN0aW9uIGNhbGN1bGF0ZUJhY2tncm91bmdQb3NpdGlvbmluZ0FyZWEoYmFja2dyb3VuZE9yaWdpbiwgYm91bmRzLCBwYWRkaW5nLCBib3JkZXIpIHtcbiAgICB2YXIgcGFkZGluZ0JveCA9ICgwLCBfQm91bmRzLmNhbGN1bGF0ZVBhZGRpbmdCb3gpKGJvdW5kcywgYm9yZGVyKTtcblxuICAgIHN3aXRjaCAoYmFja2dyb3VuZE9yaWdpbikge1xuICAgICAgICBjYXNlIEJBQ0tHUk9VTkRfT1JJR0lOLkJPUkRFUl9CT1g6XG4gICAgICAgICAgICByZXR1cm4gYm91bmRzO1xuICAgICAgICBjYXNlIEJBQ0tHUk9VTkRfT1JJR0lOLkNPTlRFTlRfQk9YOlxuICAgICAgICAgICAgdmFyIHBhZGRpbmdMZWZ0ID0gcGFkZGluZ1tfcGFkZGluZy5QQURESU5HX1NJREVTLkxFRlRdLmdldEFic29sdXRlVmFsdWUoYm91bmRzLndpZHRoKTtcbiAgICAgICAgICAgIHZhciBwYWRkaW5nUmlnaHQgPSBwYWRkaW5nW19wYWRkaW5nLlBBRERJTkdfU0lERVMuUklHSFRdLmdldEFic29sdXRlVmFsdWUoYm91bmRzLndpZHRoKTtcbiAgICAgICAgICAgIHZhciBwYWRkaW5nVG9wID0gcGFkZGluZ1tfcGFkZGluZy5QQURESU5HX1NJREVTLlRPUF0uZ2V0QWJzb2x1dGVWYWx1ZShib3VuZHMud2lkdGgpO1xuICAgICAgICAgICAgdmFyIHBhZGRpbmdCb3R0b20gPSBwYWRkaW5nW19wYWRkaW5nLlBBRERJTkdfU0lERVMuQk9UVE9NXS5nZXRBYnNvbHV0ZVZhbHVlKGJvdW5kcy53aWR0aCk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IF9Cb3VuZHMuQm91bmRzKHBhZGRpbmdCb3gubGVmdCArIHBhZGRpbmdMZWZ0LCBwYWRkaW5nQm94LnRvcCArIHBhZGRpbmdUb3AsIHBhZGRpbmdCb3gud2lkdGggLSBwYWRkaW5nTGVmdCAtIHBhZGRpbmdSaWdodCwgcGFkZGluZ0JveC5oZWlnaHQgLSBwYWRkaW5nVG9wIC0gcGFkZGluZ0JvdHRvbSk7XG4gICAgICAgIGNhc2UgQkFDS0dST1VORF9PUklHSU4uUEFERElOR19CT1g6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gcGFkZGluZ0JveDtcbiAgICB9XG59O1xuXG52YXIgY2FsY3VsYXRlQmFja2dyb3VuZFBvc2l0aW9uID0gZXhwb3J0cy5jYWxjdWxhdGVCYWNrZ3JvdW5kUG9zaXRpb24gPSBmdW5jdGlvbiBjYWxjdWxhdGVCYWNrZ3JvdW5kUG9zaXRpb24ocG9zaXRpb24sIHNpemUsIGJvdW5kcykge1xuICAgIHJldHVybiBuZXcgX1ZlY3RvcjIuZGVmYXVsdChwb3NpdGlvblswXS5nZXRBYnNvbHV0ZVZhbHVlKGJvdW5kcy53aWR0aCAtIHNpemUud2lkdGgpLCBwb3NpdGlvblsxXS5nZXRBYnNvbHV0ZVZhbHVlKGJvdW5kcy5oZWlnaHQgLSBzaXplLmhlaWdodCkpO1xufTtcblxudmFyIGNhbGN1bGF0ZUJhY2tncm91bmRSZXBlYXRQYXRoID0gZXhwb3J0cy5jYWxjdWxhdGVCYWNrZ3JvdW5kUmVwZWF0UGF0aCA9IGZ1bmN0aW9uIGNhbGN1bGF0ZUJhY2tncm91bmRSZXBlYXRQYXRoKGJhY2tncm91bmQsIHBvc2l0aW9uLCBzaXplLCBiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhLCBib3VuZHMpIHtcbiAgICB2YXIgcmVwZWF0ID0gYmFja2dyb3VuZC5yZXBlYXQ7XG4gICAgc3dpdGNoIChyZXBlYXQpIHtcbiAgICAgICAgY2FzZSBCQUNLR1JPVU5EX1JFUEVBVC5SRVBFQVRfWDpcbiAgICAgICAgICAgIHJldHVybiBbbmV3IF9WZWN0b3IyLmRlZmF1bHQoTWF0aC5yb3VuZChib3VuZHMubGVmdCksIE1hdGgucm91bmQoYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYS50b3AgKyBwb3NpdGlvbi55KSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KE1hdGgucm91bmQoYm91bmRzLmxlZnQgKyBib3VuZHMud2lkdGgpLCBNYXRoLnJvdW5kKGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEudG9wICsgcG9zaXRpb24ueSkpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdChNYXRoLnJvdW5kKGJvdW5kcy5sZWZ0ICsgYm91bmRzLndpZHRoKSwgTWF0aC5yb3VuZChzaXplLmhlaWdodCArIGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEudG9wICsgcG9zaXRpb24ueSkpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdChNYXRoLnJvdW5kKGJvdW5kcy5sZWZ0KSwgTWF0aC5yb3VuZChzaXplLmhlaWdodCArIGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEudG9wICsgcG9zaXRpb24ueSkpXTtcbiAgICAgICAgY2FzZSBCQUNLR1JPVU5EX1JFUEVBVC5SRVBFQVRfWTpcbiAgICAgICAgICAgIHJldHVybiBbbmV3IF9WZWN0b3IyLmRlZmF1bHQoTWF0aC5yb3VuZChiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhLmxlZnQgKyBwb3NpdGlvbi54KSwgTWF0aC5yb3VuZChib3VuZHMudG9wKSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KE1hdGgucm91bmQoYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYS5sZWZ0ICsgcG9zaXRpb24ueCArIHNpemUud2lkdGgpLCBNYXRoLnJvdW5kKGJvdW5kcy50b3ApKSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoTWF0aC5yb3VuZChiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhLmxlZnQgKyBwb3NpdGlvbi54ICsgc2l6ZS53aWR0aCksIE1hdGgucm91bmQoYm91bmRzLmhlaWdodCArIGJvdW5kcy50b3ApKSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoTWF0aC5yb3VuZChiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhLmxlZnQgKyBwb3NpdGlvbi54KSwgTWF0aC5yb3VuZChib3VuZHMuaGVpZ2h0ICsgYm91bmRzLnRvcCkpXTtcbiAgICAgICAgY2FzZSBCQUNLR1JPVU5EX1JFUEVBVC5OT19SRVBFQVQ6XG4gICAgICAgICAgICByZXR1cm4gW25ldyBfVmVjdG9yMi5kZWZhdWx0KE1hdGgucm91bmQoYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYS5sZWZ0ICsgcG9zaXRpb24ueCksIE1hdGgucm91bmQoYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYS50b3AgKyBwb3NpdGlvbi55KSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KE1hdGgucm91bmQoYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYS5sZWZ0ICsgcG9zaXRpb24ueCArIHNpemUud2lkdGgpLCBNYXRoLnJvdW5kKGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEudG9wICsgcG9zaXRpb24ueSkpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdChNYXRoLnJvdW5kKGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEubGVmdCArIHBvc2l0aW9uLnggKyBzaXplLndpZHRoKSwgTWF0aC5yb3VuZChiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhLnRvcCArIHBvc2l0aW9uLnkgKyBzaXplLmhlaWdodCkpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdChNYXRoLnJvdW5kKGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEubGVmdCArIHBvc2l0aW9uLngpLCBNYXRoLnJvdW5kKGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEudG9wICsgcG9zaXRpb24ueSArIHNpemUuaGVpZ2h0KSldO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIFtuZXcgX1ZlY3RvcjIuZGVmYXVsdChNYXRoLnJvdW5kKGJvdW5kcy5sZWZ0KSwgTWF0aC5yb3VuZChib3VuZHMudG9wKSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KE1hdGgucm91bmQoYm91bmRzLmxlZnQgKyBib3VuZHMud2lkdGgpLCBNYXRoLnJvdW5kKGJvdW5kcy50b3ApKSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoTWF0aC5yb3VuZChib3VuZHMubGVmdCArIGJvdW5kcy53aWR0aCksIE1hdGgucm91bmQoYm91bmRzLmhlaWdodCArIGJvdW5kcy50b3ApKSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoTWF0aC5yb3VuZChib3VuZHMubGVmdCksIE1hdGgucm91bmQoYm91bmRzLmhlaWdodCArIGJvdW5kcy50b3ApKV07XG4gICAgfVxufTtcblxudmFyIHBhcnNlQmFja2dyb3VuZCA9IGV4cG9ydHMucGFyc2VCYWNrZ3JvdW5kID0gZnVuY3Rpb24gcGFyc2VCYWNrZ3JvdW5kKHN0eWxlLCByZXNvdXJjZUxvYWRlcikge1xuICAgIHJldHVybiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogbmV3IF9Db2xvcjIuZGVmYXVsdChzdHlsZS5iYWNrZ3JvdW5kQ29sb3IpLFxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IHBhcnNlQmFja2dyb3VuZEltYWdlcyhzdHlsZSwgcmVzb3VyY2VMb2FkZXIpLFxuICAgICAgICBiYWNrZ3JvdW5kQ2xpcDogcGFyc2VCYWNrZ3JvdW5kQ2xpcChzdHlsZS5iYWNrZ3JvdW5kQ2xpcCksXG4gICAgICAgIGJhY2tncm91bmRPcmlnaW46IHBhcnNlQmFja2dyb3VuZE9yaWdpbihzdHlsZS5iYWNrZ3JvdW5kT3JpZ2luKVxuICAgIH07XG59O1xuXG52YXIgcGFyc2VCYWNrZ3JvdW5kQ2xpcCA9IGZ1bmN0aW9uIHBhcnNlQmFja2dyb3VuZENsaXAoYmFja2dyb3VuZENsaXApIHtcbiAgICBzd2l0Y2ggKGJhY2tncm91bmRDbGlwKSB7XG4gICAgICAgIGNhc2UgJ3BhZGRpbmctYm94JzpcbiAgICAgICAgICAgIHJldHVybiBCQUNLR1JPVU5EX0NMSVAuUEFERElOR19CT1g7XG4gICAgICAgIGNhc2UgJ2NvbnRlbnQtYm94JzpcbiAgICAgICAgICAgIHJldHVybiBCQUNLR1JPVU5EX0NMSVAuQ09OVEVOVF9CT1g7XG4gICAgfVxuICAgIHJldHVybiBCQUNLR1JPVU5EX0NMSVAuQk9SREVSX0JPWDtcbn07XG5cbnZhciBwYXJzZUJhY2tncm91bmRPcmlnaW4gPSBmdW5jdGlvbiBwYXJzZUJhY2tncm91bmRPcmlnaW4oYmFja2dyb3VuZE9yaWdpbikge1xuICAgIHN3aXRjaCAoYmFja2dyb3VuZE9yaWdpbikge1xuICAgICAgICBjYXNlICdwYWRkaW5nLWJveCc6XG4gICAgICAgICAgICByZXR1cm4gQkFDS0dST1VORF9PUklHSU4uUEFERElOR19CT1g7XG4gICAgICAgIGNhc2UgJ2NvbnRlbnQtYm94JzpcbiAgICAgICAgICAgIHJldHVybiBCQUNLR1JPVU5EX09SSUdJTi5DT05URU5UX0JPWDtcbiAgICB9XG4gICAgcmV0dXJuIEJBQ0tHUk9VTkRfT1JJR0lOLkJPUkRFUl9CT1g7XG59O1xuXG52YXIgcGFyc2VCYWNrZ3JvdW5kUmVwZWF0ID0gZnVuY3Rpb24gcGFyc2VCYWNrZ3JvdW5kUmVwZWF0KGJhY2tncm91bmRSZXBlYXQpIHtcbiAgICBzd2l0Y2ggKGJhY2tncm91bmRSZXBlYXQudHJpbSgpKSB7XG4gICAgICAgIGNhc2UgJ25vLXJlcGVhdCc6XG4gICAgICAgICAgICByZXR1cm4gQkFDS0dST1VORF9SRVBFQVQuTk9fUkVQRUFUO1xuICAgICAgICBjYXNlICdyZXBlYXQteCc6XG4gICAgICAgIGNhc2UgJ3JlcGVhdCBuby1yZXBlYXQnOlxuICAgICAgICAgICAgcmV0dXJuIEJBQ0tHUk9VTkRfUkVQRUFULlJFUEVBVF9YO1xuICAgICAgICBjYXNlICdyZXBlYXQteSc6XG4gICAgICAgIGNhc2UgJ25vLXJlcGVhdCByZXBlYXQnOlxuICAgICAgICAgICAgcmV0dXJuIEJBQ0tHUk9VTkRfUkVQRUFULlJFUEVBVF9ZO1xuICAgICAgICBjYXNlICdyZXBlYXQnOlxuICAgICAgICAgICAgcmV0dXJuIEJBQ0tHUk9VTkRfUkVQRUFULlJFUEVBVDtcbiAgICB9XG5cbiAgICBpZiAodHJ1ZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIGJhY2tncm91bmQtcmVwZWF0IHZhbHVlIFwiJyArIGJhY2tncm91bmRSZXBlYXQgKyAnXCInKTtcbiAgICB9XG5cbiAgICByZXR1cm4gQkFDS0dST1VORF9SRVBFQVQuUkVQRUFUO1xufTtcblxudmFyIHBhcnNlQmFja2dyb3VuZEltYWdlcyA9IGZ1bmN0aW9uIHBhcnNlQmFja2dyb3VuZEltYWdlcyhzdHlsZSwgcmVzb3VyY2VMb2FkZXIpIHtcbiAgICB2YXIgc291cmNlcyA9IHBhcnNlQmFja2dyb3VuZEltYWdlKHN0eWxlLmJhY2tncm91bmRJbWFnZSkubWFwKGZ1bmN0aW9uIChiYWNrZ3JvdW5kSW1hZ2UpIHtcbiAgICAgICAgaWYgKGJhY2tncm91bmRJbWFnZS5tZXRob2QgPT09ICd1cmwnKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gcmVzb3VyY2VMb2FkZXIubG9hZEltYWdlKGJhY2tncm91bmRJbWFnZS5hcmdzWzBdKTtcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZS5hcmdzID0ga2V5ID8gW2tleV0gOiBbXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYmFja2dyb3VuZEltYWdlO1xuICAgIH0pO1xuICAgIHZhciBwb3NpdGlvbnMgPSBzdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24uc3BsaXQoJywnKTtcbiAgICB2YXIgcmVwZWF0cyA9IHN0eWxlLmJhY2tncm91bmRSZXBlYXQuc3BsaXQoJywnKTtcbiAgICB2YXIgc2l6ZXMgPSBzdHlsZS5iYWNrZ3JvdW5kU2l6ZS5zcGxpdCgnLCcpO1xuXG4gICAgcmV0dXJuIHNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UsIGluZGV4KSB7XG4gICAgICAgIHZhciBzaXplID0gKHNpemVzW2luZGV4XSB8fCBBVVRPKS50cmltKCkuc3BsaXQoJyAnKS5tYXAocGFyc2VCYWNrZ3JvdW5kU2l6ZSk7XG4gICAgICAgIHZhciBwb3NpdGlvbiA9IChwb3NpdGlvbnNbaW5kZXhdIHx8IEFVVE8pLnRyaW0oKS5zcGxpdCgnICcpLm1hcChwYXJzZUJhY2tnb3VuZFBvc2l0aW9uKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc291cmNlOiBzb3VyY2UsXG4gICAgICAgICAgICByZXBlYXQ6IHBhcnNlQmFja2dyb3VuZFJlcGVhdCh0eXBlb2YgcmVwZWF0c1tpbmRleF0gPT09ICdzdHJpbmcnID8gcmVwZWF0c1tpbmRleF0gOiByZXBlYXRzWzBdKSxcbiAgICAgICAgICAgIHNpemU6IHNpemUubGVuZ3RoIDwgMiA/IFtzaXplWzBdLCBBVVRPX1NJWkVdIDogW3NpemVbMF0sIHNpemVbMV1dLFxuICAgICAgICAgICAgcG9zaXRpb246IHBvc2l0aW9uLmxlbmd0aCA8IDIgPyBbcG9zaXRpb25bMF0sIHBvc2l0aW9uWzBdXSA6IFtwb3NpdGlvblswXSwgcG9zaXRpb25bMV1dXG4gICAgICAgIH07XG4gICAgfSk7XG59O1xuXG52YXIgcGFyc2VCYWNrZ3JvdW5kU2l6ZSA9IGZ1bmN0aW9uIHBhcnNlQmFja2dyb3VuZFNpemUoc2l6ZSkge1xuICAgIHJldHVybiBzaXplID09PSAnYXV0bycgPyBBVVRPX1NJWkUgOiBuZXcgQmFja2dyb3VuZFNpemUoc2l6ZSk7XG59O1xuXG52YXIgcGFyc2VCYWNrZ291bmRQb3NpdGlvbiA9IGZ1bmN0aW9uIHBhcnNlQmFja2dvdW5kUG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICBzd2l0Y2ggKHBvc2l0aW9uKSB7XG4gICAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgIHJldHVybiBuZXcgX0xlbmd0aDIuZGVmYXVsdCgnMTAwJScpO1xuICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgICAgIHJldHVybiBuZXcgX0xlbmd0aDIuZGVmYXVsdCgnMCUnKTtcbiAgICAgICAgY2FzZSAnYXV0byc6XG4gICAgICAgICAgICByZXR1cm4gbmV3IF9MZW5ndGgyLmRlZmF1bHQoJzAnKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBfTGVuZ3RoMi5kZWZhdWx0KHBvc2l0aW9uKTtcbn07XG5cbnZhciBwYXJzZUJhY2tncm91bmRJbWFnZSA9IGV4cG9ydHMucGFyc2VCYWNrZ3JvdW5kSW1hZ2UgPSBmdW5jdGlvbiBwYXJzZUJhY2tncm91bmRJbWFnZShpbWFnZSkge1xuICAgIHZhciB3aGl0ZXNwYWNlID0gL15cXHMkLztcbiAgICB2YXIgcmVzdWx0cyA9IFtdO1xuXG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICB2YXIgbWV0aG9kID0gJyc7XG4gICAgdmFyIHF1b3RlID0gbnVsbDtcbiAgICB2YXIgZGVmaW5pdGlvbiA9ICcnO1xuICAgIHZhciBtb2RlID0gMDtcbiAgICB2YXIgbnVtUGFyZW4gPSAwO1xuXG4gICAgdmFyIGFwcGVuZFJlc3VsdCA9IGZ1bmN0aW9uIGFwcGVuZFJlc3VsdCgpIHtcbiAgICAgICAgdmFyIHByZWZpeCA9ICcnO1xuICAgICAgICBpZiAobWV0aG9kKSB7XG4gICAgICAgICAgICBpZiAoZGVmaW5pdGlvbi5zdWJzdHIoMCwgMSkgPT09ICdcIicpIHtcbiAgICAgICAgICAgICAgICBkZWZpbml0aW9uID0gZGVmaW5pdGlvbi5zdWJzdHIoMSwgZGVmaW5pdGlvbi5sZW5ndGggLSAyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRlZmluaXRpb24pIHtcbiAgICAgICAgICAgICAgICBhcmdzLnB1c2goZGVmaW5pdGlvbi50cmltKCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgcHJlZml4X2kgPSBtZXRob2QuaW5kZXhPZignLScsIDEpICsgMTtcbiAgICAgICAgICAgIGlmIChtZXRob2Quc3Vic3RyKDAsIDEpID09PSAnLScgJiYgcHJlZml4X2kgPiAwKSB7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gbWV0aG9kLnN1YnN0cigwLCBwcmVmaXhfaSkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICBtZXRob2QgPSBtZXRob2Quc3Vic3RyKHByZWZpeF9pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1ldGhvZCA9IG1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgaWYgKG1ldGhvZCAhPT0gJ25vbmUnKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICAgICAgICAgICAgICBhcmdzOiBhcmdzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXJncyA9IFtdO1xuICAgICAgICBtZXRob2QgPSBkZWZpbml0aW9uID0gJyc7XG4gICAgfTtcblxuICAgIGltYWdlLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIGlmIChtb2RlID09PSAwICYmIHdoaXRlc3BhY2UudGVzdChjKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAoYykge1xuICAgICAgICAgICAgY2FzZSAnXCInOlxuICAgICAgICAgICAgICAgIGlmICghcXVvdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVvdGUgPSBjO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocXVvdGUgPT09IGMpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVvdGUgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJygnOlxuICAgICAgICAgICAgICAgIGlmIChxdW90ZSkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1vZGUgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kZSA9IDE7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBudW1QYXJlbisrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJyknOlxuICAgICAgICAgICAgICAgIGlmIChxdW90ZSkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1vZGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG51bVBhcmVuID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcGVuZFJlc3VsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbnVtUGFyZW4tLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnLCc6XG4gICAgICAgICAgICAgICAgaWYgKHF1b3RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBhcHBlbmRSZXN1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobnVtUGFyZW4gPT09IDAgJiYgIW1ldGhvZC5tYXRjaCgvXnVybCQvaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MucHVzaChkZWZpbml0aW9uLnRyaW0oKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZpbml0aW9uID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobW9kZSA9PT0gMCkge1xuICAgICAgICAgICAgbWV0aG9kICs9IGM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZWZpbml0aW9uICs9IGM7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGFwcGVuZFJlc3VsdCgpO1xuICAgIHJldHVybiByZXN1bHRzO1xufTtcblxuLyoqKi8gfSksXG4vKiA2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbnZhciBQQVRIID0gZXhwb3J0cy5QQVRIID0ge1xuICAgIFZFQ1RPUjogMCxcbiAgICBCRVpJRVJfQ1VSVkU6IDEsXG4gICAgQ0lSQ0xFOiAyXG59O1xuXG4vKioqLyB9KSxcbi8qIDcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX1BhdGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgVmVjdG9yID0gZnVuY3Rpb24gVmVjdG9yKHgsIHkpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVmVjdG9yKTtcblxuICAgIHRoaXMudHlwZSA9IF9QYXRoLlBBVEguVkVDVE9SO1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICBpZiAodHJ1ZSkge1xuICAgICAgICBpZiAoaXNOYU4oeCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgeCB2YWx1ZSBnaXZlbiBmb3IgVmVjdG9yJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzTmFOKHkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIHkgdmFsdWUgZ2l2ZW4gZm9yIFZlY3RvcicpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVmVjdG9yO1xuXG4vKioqLyB9KSxcbi8qIDggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5wYXJzZUxpc3RTdHlsZSA9IGV4cG9ydHMucGFyc2VMaXN0U3R5bGVUeXBlID0gZXhwb3J0cy5MSVNUX1NUWUxFX1RZUEUgPSBleHBvcnRzLkxJU1RfU1RZTEVfUE9TSVRJT04gPSB1bmRlZmluZWQ7XG5cbnZhciBfYmFja2dyb3VuZCA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cbnZhciBMSVNUX1NUWUxFX1BPU0lUSU9OID0gZXhwb3J0cy5MSVNUX1NUWUxFX1BPU0lUSU9OID0ge1xuICAgIElOU0lERTogMCxcbiAgICBPVVRTSURFOiAxXG59O1xuXG52YXIgTElTVF9TVFlMRV9UWVBFID0gZXhwb3J0cy5MSVNUX1NUWUxFX1RZUEUgPSB7XG4gICAgTk9ORTogLTEsXG4gICAgRElTQzogMCxcbiAgICBDSVJDTEU6IDEsXG4gICAgU1FVQVJFOiAyLFxuICAgIERFQ0lNQUw6IDMsXG4gICAgQ0pLX0RFQ0lNQUw6IDQsXG4gICAgREVDSU1BTF9MRUFESU5HX1pFUk86IDUsXG4gICAgTE9XRVJfUk9NQU46IDYsXG4gICAgVVBQRVJfUk9NQU46IDcsXG4gICAgTE9XRVJfR1JFRUs6IDgsXG4gICAgTE9XRVJfQUxQSEE6IDksXG4gICAgVVBQRVJfQUxQSEE6IDEwLFxuICAgIEFSQUJJQ19JTkRJQzogMTEsXG4gICAgQVJNRU5JQU46IDEyLFxuICAgIEJFTkdBTEk6IDEzLFxuICAgIENBTUJPRElBTjogMTQsXG4gICAgQ0pLX0VBUlRITFlfQlJBTkNIOiAxNSxcbiAgICBDSktfSEVBVkVOTFlfU1RFTTogMTYsXG4gICAgQ0pLX0lERU9HUkFQSElDOiAxNyxcbiAgICBERVZBTkFHQVJJOiAxOCxcbiAgICBFVEhJT1BJQ19OVU1FUklDOiAxOSxcbiAgICBHRU9SR0lBTjogMjAsXG4gICAgR1VKQVJBVEk6IDIxLFxuICAgIEdVUk1VS0hJOiAyMixcbiAgICBIRUJSRVc6IDIyLFxuICAgIEhJUkFHQU5BOiAyMyxcbiAgICBISVJBR0FOQV9JUk9IQTogMjQsXG4gICAgSkFQQU5FU0VfRk9STUFMOiAyNSxcbiAgICBKQVBBTkVTRV9JTkZPUk1BTDogMjYsXG4gICAgS0FOTkFEQTogMjcsXG4gICAgS0FUQUtBTkE6IDI4LFxuICAgIEtBVEFLQU5BX0lST0hBOiAyOSxcbiAgICBLSE1FUjogMzAsXG4gICAgS09SRUFOX0hBTkdVTF9GT1JNQUw6IDMxLFxuICAgIEtPUkVBTl9IQU5KQV9GT1JNQUw6IDMyLFxuICAgIEtPUkVBTl9IQU5KQV9JTkZPUk1BTDogMzMsXG4gICAgTEFPOiAzNCxcbiAgICBMT1dFUl9BUk1FTklBTjogMzUsXG4gICAgTUFMQVlBTEFNOiAzNixcbiAgICBNT05HT0xJQU46IDM3LFxuICAgIE1ZQU5NQVI6IDM4LFxuICAgIE9SSVlBOiAzOSxcbiAgICBQRVJTSUFOOiA0MCxcbiAgICBTSU1QX0NISU5FU0VfRk9STUFMOiA0MSxcbiAgICBTSU1QX0NISU5FU0VfSU5GT1JNQUw6IDQyLFxuICAgIFRBTUlMOiA0MyxcbiAgICBURUxVR1U6IDQ0LFxuICAgIFRIQUk6IDQ1LFxuICAgIFRJQkVUQU46IDQ2LFxuICAgIFRSQURfQ0hJTkVTRV9GT1JNQUw6IDQ3LFxuICAgIFRSQURfQ0hJTkVTRV9JTkZPUk1BTDogNDgsXG4gICAgVVBQRVJfQVJNRU5JQU46IDQ5LFxuICAgIERJU0NMT1NVUkVfT1BFTjogNTAsXG4gICAgRElTQ0xPU1VSRV9DTE9TRUQ6IDUxXG59O1xuXG52YXIgcGFyc2VMaXN0U3R5bGVUeXBlID0gZXhwb3J0cy5wYXJzZUxpc3RTdHlsZVR5cGUgPSBmdW5jdGlvbiBwYXJzZUxpc3RTdHlsZVR5cGUodHlwZSkge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdkaXNjJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuRElTQztcbiAgICAgICAgY2FzZSAnY2lyY2xlJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuQ0lSQ0xFO1xuICAgICAgICBjYXNlICdzcXVhcmUnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5TUVVBUkU7XG4gICAgICAgIGNhc2UgJ2RlY2ltYWwnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5ERUNJTUFMO1xuICAgICAgICBjYXNlICdjamstZGVjaW1hbCc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkNKS19ERUNJTUFMO1xuICAgICAgICBjYXNlICdkZWNpbWFsLWxlYWRpbmctemVybyc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkRFQ0lNQUxfTEVBRElOR19aRVJPO1xuICAgICAgICBjYXNlICdsb3dlci1yb21hbic6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkxPV0VSX1JPTUFOO1xuICAgICAgICBjYXNlICd1cHBlci1yb21hbic6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLlVQUEVSX1JPTUFOO1xuICAgICAgICBjYXNlICdsb3dlci1ncmVlayc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkxPV0VSX0dSRUVLO1xuICAgICAgICBjYXNlICdsb3dlci1hbHBoYSc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkxPV0VSX0FMUEhBO1xuICAgICAgICBjYXNlICd1cHBlci1hbHBoYSc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLlVQUEVSX0FMUEhBO1xuICAgICAgICBjYXNlICdhcmFiaWMtaW5kaWMnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5BUkFCSUNfSU5ESUM7XG4gICAgICAgIGNhc2UgJ2FybWVuaWFuJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuQVJNRU5JQU47XG4gICAgICAgIGNhc2UgJ2JlbmdhbGknOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5CRU5HQUxJO1xuICAgICAgICBjYXNlICdjYW1ib2RpYW4nOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5DQU1CT0RJQU47XG4gICAgICAgIGNhc2UgJ2Nqay1lYXJ0aGx5LWJyYW5jaCc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkNKS19FQVJUSExZX0JSQU5DSDtcbiAgICAgICAgY2FzZSAnY2prLWhlYXZlbmx5LXN0ZW0nOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5DSktfSEVBVkVOTFlfU1RFTTtcbiAgICAgICAgY2FzZSAnY2prLWlkZW9ncmFwaGljJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuQ0pLX0lERU9HUkFQSElDO1xuICAgICAgICBjYXNlICdkZXZhbmFnYXJpJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuREVWQU5BR0FSSTtcbiAgICAgICAgY2FzZSAnZXRoaW9waWMtbnVtZXJpYyc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkVUSElPUElDX05VTUVSSUM7XG4gICAgICAgIGNhc2UgJ2dlb3JnaWFuJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuR0VPUkdJQU47XG4gICAgICAgIGNhc2UgJ2d1amFyYXRpJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuR1VKQVJBVEk7XG4gICAgICAgIGNhc2UgJ2d1cm11a2hpJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuR1VSTVVLSEk7XG4gICAgICAgIGNhc2UgJ2hlYnJldyc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkhFQlJFVztcbiAgICAgICAgY2FzZSAnaGlyYWdhbmEnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5ISVJBR0FOQTtcbiAgICAgICAgY2FzZSAnaGlyYWdhbmEtaXJvaGEnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5ISVJBR0FOQV9JUk9IQTtcbiAgICAgICAgY2FzZSAnamFwYW5lc2UtZm9ybWFsJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuSkFQQU5FU0VfRk9STUFMO1xuICAgICAgICBjYXNlICdqYXBhbmVzZS1pbmZvcm1hbCc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkpBUEFORVNFX0lORk9STUFMO1xuICAgICAgICBjYXNlICdrYW5uYWRhJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuS0FOTkFEQTtcbiAgICAgICAgY2FzZSAna2F0YWthbmEnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5LQVRBS0FOQTtcbiAgICAgICAgY2FzZSAna2F0YWthbmEtaXJvaGEnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5LQVRBS0FOQV9JUk9IQTtcbiAgICAgICAgY2FzZSAna2htZXInOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5LSE1FUjtcbiAgICAgICAgY2FzZSAna29yZWFuLWhhbmd1bC1mb3JtYWwnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5LT1JFQU5fSEFOR1VMX0ZPUk1BTDtcbiAgICAgICAgY2FzZSAna29yZWFuLWhhbmphLWZvcm1hbCc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLktPUkVBTl9IQU5KQV9GT1JNQUw7XG4gICAgICAgIGNhc2UgJ2tvcmVhbi1oYW5qYS1pbmZvcm1hbCc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLktPUkVBTl9IQU5KQV9JTkZPUk1BTDtcbiAgICAgICAgY2FzZSAnbGFvJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuTEFPO1xuICAgICAgICBjYXNlICdsb3dlci1hcm1lbmlhbic6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkxPV0VSX0FSTUVOSUFOO1xuICAgICAgICBjYXNlICdtYWxheWFsYW0nOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5NQUxBWUFMQU07XG4gICAgICAgIGNhc2UgJ21vbmdvbGlhbic6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLk1PTkdPTElBTjtcbiAgICAgICAgY2FzZSAnbXlhbm1hcic6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLk1ZQU5NQVI7XG4gICAgICAgIGNhc2UgJ29yaXlhJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuT1JJWUE7XG4gICAgICAgIGNhc2UgJ3BlcnNpYW4nOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5QRVJTSUFOO1xuICAgICAgICBjYXNlICdzaW1wLWNoaW5lc2UtZm9ybWFsJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuU0lNUF9DSElORVNFX0ZPUk1BTDtcbiAgICAgICAgY2FzZSAnc2ltcC1jaGluZXNlLWluZm9ybWFsJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuU0lNUF9DSElORVNFX0lORk9STUFMO1xuICAgICAgICBjYXNlICd0YW1pbCc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLlRBTUlMO1xuICAgICAgICBjYXNlICd0ZWx1Z3UnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5URUxVR1U7XG4gICAgICAgIGNhc2UgJ3RoYWknOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5USEFJO1xuICAgICAgICBjYXNlICd0aWJldGFuJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuVElCRVRBTjtcbiAgICAgICAgY2FzZSAndHJhZC1jaGluZXNlLWZvcm1hbCc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLlRSQURfQ0hJTkVTRV9GT1JNQUw7XG4gICAgICAgIGNhc2UgJ3RyYWQtY2hpbmVzZS1pbmZvcm1hbCc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLlRSQURfQ0hJTkVTRV9JTkZPUk1BTDtcbiAgICAgICAgY2FzZSAndXBwZXItYXJtZW5pYW4nOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5VUFBFUl9BUk1FTklBTjtcbiAgICAgICAgY2FzZSAnZGlzY2xvc3VyZS1vcGVuJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuRElTQ0xPU1VSRV9PUEVOO1xuICAgICAgICBjYXNlICdkaXNjbG9zdXJlLWNsb3NlZCc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkRJU0NMT1NVUkVfQ0xPU0VEO1xuICAgICAgICBjYXNlICdub25lJzpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuTk9ORTtcbiAgICB9XG59O1xuXG52YXIgcGFyc2VMaXN0U3R5bGUgPSBleHBvcnRzLnBhcnNlTGlzdFN0eWxlID0gZnVuY3Rpb24gcGFyc2VMaXN0U3R5bGUoc3R5bGUpIHtcbiAgICB2YXIgbGlzdFN0eWxlSW1hZ2UgPSAoMCwgX2JhY2tncm91bmQucGFyc2VCYWNrZ3JvdW5kSW1hZ2UpKHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2xpc3Qtc3R5bGUtaW1hZ2UnKSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGlzdFN0eWxlVHlwZTogcGFyc2VMaXN0U3R5bGVUeXBlKHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2xpc3Qtc3R5bGUtdHlwZScpKSxcbiAgICAgICAgbGlzdFN0eWxlSW1hZ2U6IGxpc3RTdHlsZUltYWdlLmxlbmd0aCA/IGxpc3RTdHlsZUltYWdlWzBdIDogbnVsbCxcbiAgICAgICAgbGlzdFN0eWxlUG9zaXRpb246IHBhcnNlTGlzdFN0eWxlUG9zaXRpb24oc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnbGlzdC1zdHlsZS1wb3NpdGlvbicpKVxuICAgIH07XG59O1xuXG52YXIgcGFyc2VMaXN0U3R5bGVQb3NpdGlvbiA9IGZ1bmN0aW9uIHBhcnNlTGlzdFN0eWxlUG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICBzd2l0Y2ggKHBvc2l0aW9uKSB7XG4gICAgICAgIGNhc2UgJ2luc2lkZSc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9QT1NJVElPTi5JTlNJREU7XG4gICAgICAgIGNhc2UgJ291dHNpZGUnOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfUE9TSVRJT04uT1VUU0lERTtcbiAgICB9XG59O1xuXG4vKioqLyB9KSxcbi8qIDkgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3RleHRUcmFuc2Zvcm0gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIwKTtcblxudmFyIF9UZXh0Qm91bmRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMik7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBUZXh0Q29udGFpbmVyID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRleHRDb250YWluZXIodGV4dCwgcGFyZW50LCBib3VuZHMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRleHRDb250YWluZXIpO1xuXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICB0aGlzLmJvdW5kcyA9IGJvdW5kcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoVGV4dENvbnRhaW5lciwgbnVsbCwgW3tcbiAgICAgICAga2V5OiAnZnJvbVRleHROb2RlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGZyb21UZXh0Tm9kZShub2RlLCBwYXJlbnQpIHtcbiAgICAgICAgICAgIHZhciB0ZXh0ID0gdHJhbnNmb3JtKG5vZGUuZGF0YSwgcGFyZW50LnN0eWxlLnRleHRUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBUZXh0Q29udGFpbmVyKHRleHQsIHBhcmVudCwgKDAsIF9UZXh0Qm91bmRzLnBhcnNlVGV4dEJvdW5kcykodGV4dCwgcGFyZW50LCBub2RlKSk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gVGV4dENvbnRhaW5lcjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVGV4dENvbnRhaW5lcjtcblxuXG52YXIgQ0FQSVRBTElaRSA9IC8oXnxcXHN8OnwtfFxcKHxcXCkpKFthLXpdKS9nO1xuXG52YXIgdHJhbnNmb3JtID0gZnVuY3Rpb24gdHJhbnNmb3JtKHRleHQsIF90cmFuc2Zvcm0pIHtcbiAgICBzd2l0Y2ggKF90cmFuc2Zvcm0pIHtcbiAgICAgICAgY2FzZSBfdGV4dFRyYW5zZm9ybS5URVhUX1RSQU5TRk9STS5MT1dFUkNBU0U6XG4gICAgICAgICAgICByZXR1cm4gdGV4dC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjYXNlIF90ZXh0VHJhbnNmb3JtLlRFWFRfVFJBTlNGT1JNLkNBUElUQUxJWkU6XG4gICAgICAgICAgICByZXR1cm4gdGV4dC5yZXBsYWNlKENBUElUQUxJWkUsIGNhcGl0YWxpemUpO1xuICAgICAgICBjYXNlIF90ZXh0VHJhbnNmb3JtLlRFWFRfVFJBTlNGT1JNLlVQUEVSQ0FTRTpcbiAgICAgICAgICAgIHJldHVybiB0ZXh0LnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gdGV4dDtcbiAgICB9XG59O1xuXG5mdW5jdGlvbiBjYXBpdGFsaXplKG0sIHAxLCBwMikge1xuICAgIGlmIChtLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHAxICsgcDIudG9VcHBlckNhc2UoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbTtcbn1cblxuLyoqKi8gfSksXG4vKiAxMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfRm9yZWlnbk9iamVjdFJlbmRlcmVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMyk7XG5cbnZhciB0ZXN0UmFuZ2VCb3VuZHMgPSBmdW5jdGlvbiB0ZXN0UmFuZ2VCb3VuZHMoZG9jdW1lbnQpIHtcbiAgICB2YXIgVEVTVF9IRUlHSFQgPSAxMjM7XG5cbiAgICBpZiAoZG9jdW1lbnQuY3JlYXRlUmFuZ2UpIHtcbiAgICAgICAgdmFyIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICAgICAgaWYgKHJhbmdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCkge1xuICAgICAgICAgICAgdmFyIHRlc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYm91bmR0ZXN0Jyk7XG4gICAgICAgICAgICB0ZXN0RWxlbWVudC5zdHlsZS5oZWlnaHQgPSBURVNUX0hFSUdIVCArICdweCc7XG4gICAgICAgICAgICB0ZXN0RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGVzdEVsZW1lbnQpO1xuXG4gICAgICAgICAgICByYW5nZS5zZWxlY3ROb2RlKHRlc3RFbGVtZW50KTtcbiAgICAgICAgICAgIHZhciByYW5nZUJvdW5kcyA9IHJhbmdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgdmFyIHJhbmdlSGVpZ2h0ID0gTWF0aC5yb3VuZChyYW5nZUJvdW5kcy5oZWlnaHQpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0ZXN0RWxlbWVudCk7XG4gICAgICAgICAgICBpZiAocmFuZ2VIZWlnaHQgPT09IFRFU1RfSEVJR0hUKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG4vLyBpT1MgMTAuMyB0YWludHMgY2FudmFzIHdpdGggYmFzZTY0IGltYWdlcyB1bmxlc3MgY3Jvc3NPcmlnaW4gPSAnYW5vbnltb3VzJ1xudmFyIHRlc3RCYXNlNjQgPSBmdW5jdGlvbiB0ZXN0QmFzZTY0KGRvY3VtZW50LCBzcmMpIHtcbiAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAvLyBTaW5nbGUgcGl4ZWwgYmFzZTY0IGltYWdlIHJlbmRlcnMgZmluZSBvbiBpT1MgMTAuMz8/P1xuICAgICAgICBpbWcuc3JjID0gc3JjO1xuXG4gICAgICAgIHZhciBvbmxvYWQgPSBmdW5jdGlvbiBvbmxvYWQoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwKTtcbiAgICAgICAgICAgICAgICBjYW52YXMudG9EYXRhVVJMKCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgfTtcblxuICAgICAgICBpbWcub25sb2FkID0gb25sb2FkO1xuICAgICAgICBpbWcub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoaW1nLmNvbXBsZXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBvbmxvYWQoKTtcbiAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbnZhciB0ZXN0Q09SUyA9IGZ1bmN0aW9uIHRlc3RDT1JTKCkge1xuICAgIHJldHVybiB0eXBlb2YgbmV3IEltYWdlKCkuY3Jvc3NPcmlnaW4gIT09ICd1bmRlZmluZWQnO1xufTtcblxudmFyIHRlc3RSZXNwb25zZVR5cGUgPSBmdW5jdGlvbiB0ZXN0UmVzcG9uc2VUeXBlKCkge1xuICAgIHJldHVybiB0eXBlb2YgbmV3IFhNTEh0dHBSZXF1ZXN0KCkucmVzcG9uc2VUeXBlID09PSAnc3RyaW5nJztcbn07XG5cbnZhciB0ZXN0U1ZHID0gZnVuY3Rpb24gdGVzdFNWRyhkb2N1bWVudCkge1xuICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGltZy5zcmMgPSAnZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9XFwnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXCc+PC9zdmc+JztcblxuICAgIHRyeSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwKTtcbiAgICAgICAgY2FudmFzLnRvRGF0YVVSTCgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5cbnZhciBpc0dyZWVuUGl4ZWwgPSBmdW5jdGlvbiBpc0dyZWVuUGl4ZWwoZGF0YSkge1xuICAgIHJldHVybiBkYXRhWzBdID09PSAwICYmIGRhdGFbMV0gPT09IDI1NSAmJiBkYXRhWzJdID09PSAwICYmIGRhdGFbM10gPT09IDI1NTtcbn07XG5cbnZhciB0ZXN0Rm9yZWlnbk9iamVjdCA9IGZ1bmN0aW9uIHRlc3RGb3JlaWduT2JqZWN0KGRvY3VtZW50KSB7XG4gICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHZhciBzaXplID0gMTAwO1xuICAgIGNhbnZhcy53aWR0aCA9IHNpemU7XG4gICAgY2FudmFzLmhlaWdodCA9IHNpemU7XG4gICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAncmdiKDAsIDI1NSwgMCknO1xuICAgIGN0eC5maWxsUmVjdCgwLCAwLCBzaXplLCBzaXplKTtcblxuICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICB2YXIgZ3JlZW5JbWFnZVNyYyA9IGNhbnZhcy50b0RhdGFVUkwoKTtcbiAgICBpbWcuc3JjID0gZ3JlZW5JbWFnZVNyYztcbiAgICB2YXIgc3ZnID0gKDAsIF9Gb3JlaWduT2JqZWN0UmVuZGVyZXIuY3JlYXRlRm9yZWlnbk9iamVjdFNWRykoc2l6ZSwgc2l6ZSwgMCwgMCwgaW1nKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJ3JlZCc7XG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIHNpemUsIHNpemUpO1xuXG4gICAgcmV0dXJuICgwLCBfRm9yZWlnbk9iamVjdFJlbmRlcmVyLmxvYWRTZXJpYWxpemVkU1ZHKShzdmcpLnRoZW4oZnVuY3Rpb24gKGltZykge1xuICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgMCwgMCk7XG4gICAgICAgIHZhciBkYXRhID0gY3R4LmdldEltYWdlRGF0YSgwLCAwLCBzaXplLCBzaXplKS5kYXRhO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JlZCc7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBzaXplLCBzaXplKTtcblxuICAgICAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoJyArIGdyZWVuSW1hZ2VTcmMgKyAnKSc7XG4gICAgICAgIG5vZGUuc3R5bGUuaGVpZ2h0ID0gc2l6ZSArICdweCc7XG4gICAgICAgIC8vIEZpcmVmb3ggNTUgZG9lcyBub3QgcmVuZGVyIGlubGluZSA8aW1nIC8+IHRhZ3NcbiAgICAgICAgcmV0dXJuIGlzR3JlZW5QaXhlbChkYXRhKSA/ICgwLCBfRm9yZWlnbk9iamVjdFJlbmRlcmVyLmxvYWRTZXJpYWxpemVkU1ZHKSgoMCwgX0ZvcmVpZ25PYmplY3RSZW5kZXJlci5jcmVhdGVGb3JlaWduT2JqZWN0U1ZHKShzaXplLCBzaXplLCAwLCAwLCBub2RlKSkgOiBQcm9taXNlLnJlamVjdChmYWxzZSk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoaW1nKSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwKTtcbiAgICAgICAgLy8gRWRnZSBkb2VzIG5vdCByZW5kZXIgYmFja2dyb3VuZC1pbWFnZXNcbiAgICAgICAgcmV0dXJuIGlzR3JlZW5QaXhlbChjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIHNpemUsIHNpemUpLmRhdGEpO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbn07XG5cbnZhciBGRUFUVVJFUyA9IHtcbiAgICAvLyAkRmxvd0ZpeE1lIC0gZ2V0L3NldCBwcm9wZXJ0aWVzIG5vdCB5ZXQgc3VwcG9ydGVkXG4gICAgZ2V0IFNVUFBPUlRfUkFOR0VfQk9VTkRTKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG5cbiAgICAgICAgdmFyIHZhbHVlID0gdGVzdFJhbmdlQm91bmRzKGRvY3VtZW50KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZFQVRVUkVTLCAnU1VQUE9SVF9SQU5HRV9CT1VORFMnLCB7IHZhbHVlOiB2YWx1ZSB9KTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG4gICAgLy8gJEZsb3dGaXhNZSAtIGdldC9zZXQgcHJvcGVydGllcyBub3QgeWV0IHN1cHBvcnRlZFxuICAgIGdldCBTVVBQT1JUX1NWR19EUkFXSU5HKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG5cbiAgICAgICAgdmFyIHZhbHVlID0gdGVzdFNWRyhkb2N1bWVudCk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGRUFUVVJFUywgJ1NVUFBPUlRfU1ZHX0RSQVdJTkcnLCB7IHZhbHVlOiB2YWx1ZSB9KTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG4gICAgLy8gJEZsb3dGaXhNZSAtIGdldC9zZXQgcHJvcGVydGllcyBub3QgeWV0IHN1cHBvcnRlZFxuICAgIGdldCBTVVBQT1JUX0JBU0U2NF9EUkFXSU5HKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgICAgIHZhciBfdmFsdWUgPSB0ZXN0QmFzZTY0KGRvY3VtZW50LCBzcmMpO1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZFQVRVUkVTLCAnU1VQUE9SVF9CQVNFNjRfRFJBV0lORycsIHsgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZhbHVlO1xuICAgICAgICAgICAgICAgIH0gfSk7XG4gICAgICAgICAgICByZXR1cm4gX3ZhbHVlO1xuICAgICAgICB9O1xuICAgIH0sXG4gICAgLy8gJEZsb3dGaXhNZSAtIGdldC9zZXQgcHJvcGVydGllcyBub3QgeWV0IHN1cHBvcnRlZFxuICAgIGdldCBTVVBQT1JUX0ZPUkVJR05PQkpFQ1RfRFJBV0lORygpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICAgIHZhciB2YWx1ZSA9IHR5cGVvZiBBcnJheS5mcm9tID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB3aW5kb3cuZmV0Y2ggPT09ICdmdW5jdGlvbicgPyB0ZXN0Rm9yZWlnbk9iamVjdChkb2N1bWVudCkgOiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRkVBVFVSRVMsICdTVVBQT1JUX0ZPUkVJR05PQkpFQ1RfRFJBV0lORycsIHsgdmFsdWU6IHZhbHVlIH0pO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSxcbiAgICAvLyAkRmxvd0ZpeE1lIC0gZ2V0L3NldCBwcm9wZXJ0aWVzIG5vdCB5ZXQgc3VwcG9ydGVkXG4gICAgZ2V0IFNVUFBPUlRfQ09SU19JTUFHRVMoKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcblxuICAgICAgICB2YXIgdmFsdWUgPSB0ZXN0Q09SUygpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRkVBVFVSRVMsICdTVVBQT1JUX0NPUlNfSU1BR0VTJywgeyB2YWx1ZTogdmFsdWUgfSk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxuICAgIC8vICRGbG93Rml4TWUgLSBnZXQvc2V0IHByb3BlcnRpZXMgbm90IHlldCBzdXBwb3J0ZWRcbiAgICBnZXQgU1VQUE9SVF9SRVNQT05TRV9UWVBFKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG5cbiAgICAgICAgdmFyIHZhbHVlID0gdGVzdFJlc3BvbnNlVHlwZSgpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRkVBVFVSRVMsICdTVVBQT1JUX1JFU1BPTlNFX1RZUEUnLCB7IHZhbHVlOiB2YWx1ZSB9KTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG4gICAgLy8gJEZsb3dGaXhNZSAtIGdldC9zZXQgcHJvcGVydGllcyBub3QgeWV0IHN1cHBvcnRlZFxuICAgIGdldCBTVVBQT1JUX0NPUlNfWEhSKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG5cbiAgICAgICAgdmFyIHZhbHVlID0gJ3dpdGhDcmVkZW50aWFscycgaW4gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGRUFUVVJFUywgJ1NVUFBPUlRfQ09SU19YSFInLCB7IHZhbHVlOiB2YWx1ZSB9KTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEZFQVRVUkVTO1xuXG4vKioqLyB9KSxcbi8qIDExICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucGFyc2VUZXh0RGVjb3JhdGlvbiA9IGV4cG9ydHMuVEVYVF9ERUNPUkFUSU9OX0xJTkUgPSBleHBvcnRzLlRFWFRfREVDT1JBVElPTiA9IGV4cG9ydHMuVEVYVF9ERUNPUkFUSU9OX1NUWUxFID0gdW5kZWZpbmVkO1xuXG52YXIgX0NvbG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxudmFyIF9Db2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db2xvcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBURVhUX0RFQ09SQVRJT05fU1RZTEUgPSBleHBvcnRzLlRFWFRfREVDT1JBVElPTl9TVFlMRSA9IHtcbiAgICBTT0xJRDogMCxcbiAgICBET1VCTEU6IDEsXG4gICAgRE9UVEVEOiAyLFxuICAgIERBU0hFRDogMyxcbiAgICBXQVZZOiA0XG59O1xuXG52YXIgVEVYVF9ERUNPUkFUSU9OID0gZXhwb3J0cy5URVhUX0RFQ09SQVRJT04gPSB7XG4gICAgTk9ORTogbnVsbFxufTtcblxudmFyIFRFWFRfREVDT1JBVElPTl9MSU5FID0gZXhwb3J0cy5URVhUX0RFQ09SQVRJT05fTElORSA9IHtcbiAgICBVTkRFUkxJTkU6IDEsXG4gICAgT1ZFUkxJTkU6IDIsXG4gICAgTElORV9USFJPVUdIOiAzLFxuICAgIEJMSU5LOiA0XG59O1xuXG52YXIgcGFyc2VMaW5lID0gZnVuY3Rpb24gcGFyc2VMaW5lKGxpbmUpIHtcbiAgICBzd2l0Y2ggKGxpbmUpIHtcbiAgICAgICAgY2FzZSAndW5kZXJsaW5lJzpcbiAgICAgICAgICAgIHJldHVybiBURVhUX0RFQ09SQVRJT05fTElORS5VTkRFUkxJTkU7XG4gICAgICAgIGNhc2UgJ292ZXJsaW5lJzpcbiAgICAgICAgICAgIHJldHVybiBURVhUX0RFQ09SQVRJT05fTElORS5PVkVSTElORTtcbiAgICAgICAgY2FzZSAnbGluZS10aHJvdWdoJzpcbiAgICAgICAgICAgIHJldHVybiBURVhUX0RFQ09SQVRJT05fTElORS5MSU5FX1RIUk9VR0g7XG4gICAgfVxuICAgIHJldHVybiBURVhUX0RFQ09SQVRJT05fTElORS5CTElOSztcbn07XG5cbnZhciBwYXJzZVRleHREZWNvcmF0aW9uTGluZSA9IGZ1bmN0aW9uIHBhcnNlVGV4dERlY29yYXRpb25MaW5lKGxpbmUpIHtcbiAgICBpZiAobGluZSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBsaW5lLnNwbGl0KCcgJykubWFwKHBhcnNlTGluZSk7XG59O1xuXG52YXIgcGFyc2VUZXh0RGVjb3JhdGlvblN0eWxlID0gZnVuY3Rpb24gcGFyc2VUZXh0RGVjb3JhdGlvblN0eWxlKHN0eWxlKSB7XG4gICAgc3dpdGNoIChzdHlsZSkge1xuICAgICAgICBjYXNlICdkb3VibGUnOlxuICAgICAgICAgICAgcmV0dXJuIFRFWFRfREVDT1JBVElPTl9TVFlMRS5ET1VCTEU7XG4gICAgICAgIGNhc2UgJ2RvdHRlZCc6XG4gICAgICAgICAgICByZXR1cm4gVEVYVF9ERUNPUkFUSU9OX1NUWUxFLkRPVFRFRDtcbiAgICAgICAgY2FzZSAnZGFzaGVkJzpcbiAgICAgICAgICAgIHJldHVybiBURVhUX0RFQ09SQVRJT05fU1RZTEUuREFTSEVEO1xuICAgICAgICBjYXNlICd3YXZ5JzpcbiAgICAgICAgICAgIHJldHVybiBURVhUX0RFQ09SQVRJT05fU1RZTEUuV0FWWTtcbiAgICB9XG4gICAgcmV0dXJuIFRFWFRfREVDT1JBVElPTl9TVFlMRS5TT0xJRDtcbn07XG5cbnZhciBwYXJzZVRleHREZWNvcmF0aW9uID0gZXhwb3J0cy5wYXJzZVRleHREZWNvcmF0aW9uID0gZnVuY3Rpb24gcGFyc2VUZXh0RGVjb3JhdGlvbihzdHlsZSkge1xuICAgIHZhciB0ZXh0RGVjb3JhdGlvbkxpbmUgPSBwYXJzZVRleHREZWNvcmF0aW9uTGluZShzdHlsZS50ZXh0RGVjb3JhdGlvbkxpbmUgPyBzdHlsZS50ZXh0RGVjb3JhdGlvbkxpbmUgOiBzdHlsZS50ZXh0RGVjb3JhdGlvbik7XG4gICAgaWYgKHRleHREZWNvcmF0aW9uTGluZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gVEVYVF9ERUNPUkFUSU9OLk5PTkU7XG4gICAgfVxuXG4gICAgdmFyIHRleHREZWNvcmF0aW9uQ29sb3IgPSBzdHlsZS50ZXh0RGVjb3JhdGlvbkNvbG9yID8gbmV3IF9Db2xvcjIuZGVmYXVsdChzdHlsZS50ZXh0RGVjb3JhdGlvbkNvbG9yKSA6IG51bGw7XG4gICAgdmFyIHRleHREZWNvcmF0aW9uU3R5bGUgPSBwYXJzZVRleHREZWNvcmF0aW9uU3R5bGUoc3R5bGUudGV4dERlY29yYXRpb25TdHlsZSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0ZXh0RGVjb3JhdGlvbkxpbmU6IHRleHREZWNvcmF0aW9uTGluZSxcbiAgICAgICAgdGV4dERlY29yYXRpb25Db2xvcjogdGV4dERlY29yYXRpb25Db2xvcixcbiAgICAgICAgdGV4dERlY29yYXRpb25TdHlsZTogdGV4dERlY29yYXRpb25TdHlsZVxuICAgIH07XG59O1xuXG4vKioqLyB9KSxcbi8qIDEyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucGFyc2VCb3JkZXIgPSBleHBvcnRzLkJPUkRFUl9TSURFUyA9IGV4cG9ydHMuQk9SREVSX1NUWUxFID0gdW5kZWZpbmVkO1xuXG52YXIgX0NvbG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxudmFyIF9Db2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db2xvcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBCT1JERVJfU1RZTEUgPSBleHBvcnRzLkJPUkRFUl9TVFlMRSA9IHtcbiAgICBOT05FOiAwLFxuICAgIFNPTElEOiAxXG59O1xuXG52YXIgQk9SREVSX1NJREVTID0gZXhwb3J0cy5CT1JERVJfU0lERVMgPSB7XG4gICAgVE9QOiAwLFxuICAgIFJJR0hUOiAxLFxuICAgIEJPVFRPTTogMixcbiAgICBMRUZUOiAzXG59O1xuXG52YXIgU0lERVMgPSBPYmplY3Qua2V5cyhCT1JERVJfU0lERVMpLm1hcChmdW5jdGlvbiAocykge1xuICAgIHJldHVybiBzLnRvTG93ZXJDYXNlKCk7XG59KTtcblxudmFyIHBhcnNlQm9yZGVyU3R5bGUgPSBmdW5jdGlvbiBwYXJzZUJvcmRlclN0eWxlKHN0eWxlKSB7XG4gICAgc3dpdGNoIChzdHlsZSkge1xuICAgICAgICBjYXNlICdub25lJzpcbiAgICAgICAgICAgIHJldHVybiBCT1JERVJfU1RZTEUuTk9ORTtcbiAgICB9XG4gICAgcmV0dXJuIEJPUkRFUl9TVFlMRS5TT0xJRDtcbn07XG5cbnZhciBwYXJzZUJvcmRlciA9IGV4cG9ydHMucGFyc2VCb3JkZXIgPSBmdW5jdGlvbiBwYXJzZUJvcmRlcihzdHlsZSkge1xuICAgIHJldHVybiBTSURFUy5tYXAoZnVuY3Rpb24gKHNpZGUpIHtcbiAgICAgICAgdmFyIGJvcmRlckNvbG9yID0gbmV3IF9Db2xvcjIuZGVmYXVsdChzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdib3JkZXItJyArIHNpZGUgKyAnLWNvbG9yJykpO1xuICAgICAgICB2YXIgYm9yZGVyU3R5bGUgPSBwYXJzZUJvcmRlclN0eWxlKHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2JvcmRlci0nICsgc2lkZSArICctc3R5bGUnKSk7XG4gICAgICAgIHZhciBib3JkZXJXaWR0aCA9IHBhcnNlRmxvYXQoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnYm9yZGVyLScgKyBzaWRlICsgJy13aWR0aCcpKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBib3JkZXJDb2xvcixcbiAgICAgICAgICAgIGJvcmRlclN0eWxlOiBib3JkZXJTdHlsZSxcbiAgICAgICAgICAgIGJvcmRlcldpZHRoOiBpc05hTihib3JkZXJXaWR0aCkgPyAwIDogYm9yZGVyV2lkdGhcbiAgICAgICAgfTtcbiAgICB9KTtcbn07XG5cbi8qKiovIH0pLFxuLyogMTMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xudmFyIHRvQ29kZVBvaW50cyA9IGV4cG9ydHMudG9Db2RlUG9pbnRzID0gZnVuY3Rpb24gdG9Db2RlUG9pbnRzKHN0cikge1xuICAgIHZhciBjb2RlUG9pbnRzID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBsZW5ndGggPSBzdHIubGVuZ3RoO1xuICAgIHdoaWxlIChpIDwgbGVuZ3RoKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHN0ci5jaGFyQ29kZUF0KGkrKyk7XG4gICAgICAgIGlmICh2YWx1ZSA+PSAweGQ4MDAgJiYgdmFsdWUgPD0gMHhkYmZmICYmIGkgPCBsZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBleHRyYSA9IHN0ci5jaGFyQ29kZUF0KGkrKyk7XG4gICAgICAgICAgICBpZiAoKGV4dHJhICYgMHhmYzAwKSA9PT0gMHhkYzAwKSB7XG4gICAgICAgICAgICAgICAgY29kZVBvaW50cy5wdXNoKCgodmFsdWUgJiAweDNmZikgPDwgMTApICsgKGV4dHJhICYgMHgzZmYpICsgMHgxMDAwMCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvZGVQb2ludHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29kZVBvaW50cy5wdXNoKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY29kZVBvaW50cztcbn07XG5cbnZhciBmcm9tQ29kZVBvaW50ID0gZXhwb3J0cy5mcm9tQ29kZVBvaW50ID0gZnVuY3Rpb24gZnJvbUNvZGVQb2ludCgpIHtcbiAgICBpZiAoU3RyaW5nLmZyb21Db2RlUG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ29kZVBvaW50LmFwcGx5KFN0cmluZywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBpZiAoIWxlbmd0aCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgdmFyIGNvZGVVbml0cyA9IFtdO1xuXG4gICAgdmFyIGluZGV4ID0gLTE7XG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgIHZhciBjb2RlUG9pbnQgPSBhcmd1bWVudHMubGVuZ3RoIDw9IGluZGV4ID8gdW5kZWZpbmVkIDogYXJndW1lbnRzW2luZGV4XTtcbiAgICAgICAgaWYgKGNvZGVQb2ludCA8PSAweGZmZmYpIHtcbiAgICAgICAgICAgIGNvZGVVbml0cy5wdXNoKGNvZGVQb2ludCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb2RlUG9pbnQgLT0gMHgxMDAwMDtcbiAgICAgICAgICAgIGNvZGVVbml0cy5wdXNoKChjb2RlUG9pbnQgPj4gMTApICsgMHhkODAwLCBjb2RlUG9pbnQgJSAweDQwMCArIDB4ZGMwMCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZGV4ICsgMSA9PT0gbGVuZ3RoIHx8IGNvZGVVbml0cy5sZW5ndGggPiAweDQwMDApIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFN0cmluZywgY29kZVVuaXRzKTtcbiAgICAgICAgICAgIGNvZGVVbml0cy5sZW5ndGggPSAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG52YXIgY2hhcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyc7XG5cbi8vIFVzZSBhIGxvb2t1cCB0YWJsZSB0byBmaW5kIHRoZSBpbmRleC5cbnZhciBsb29rdXAgPSB0eXBlb2YgVWludDhBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyBbXSA6IG5ldyBVaW50OEFycmF5KDI1Nik7XG5mb3IgKHZhciBpID0gMDsgaSA8IGNoYXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgbG9va3VwW2NoYXJzLmNoYXJDb2RlQXQoaSldID0gaTtcbn1cblxudmFyIGRlY29kZSA9IGV4cG9ydHMuZGVjb2RlID0gZnVuY3Rpb24gZGVjb2RlKGJhc2U2NCkge1xuICAgIHZhciBidWZmZXJMZW5ndGggPSBiYXNlNjQubGVuZ3RoICogMC43NSxcbiAgICAgICAgbGVuID0gYmFzZTY0Lmxlbmd0aCxcbiAgICAgICAgaSA9IHZvaWQgMCxcbiAgICAgICAgcCA9IDAsXG4gICAgICAgIGVuY29kZWQxID0gdm9pZCAwLFxuICAgICAgICBlbmNvZGVkMiA9IHZvaWQgMCxcbiAgICAgICAgZW5jb2RlZDMgPSB2b2lkIDAsXG4gICAgICAgIGVuY29kZWQ0ID0gdm9pZCAwO1xuXG4gICAgaWYgKGJhc2U2NFtiYXNlNjQubGVuZ3RoIC0gMV0gPT09ICc9Jykge1xuICAgICAgICBidWZmZXJMZW5ndGgtLTtcbiAgICAgICAgaWYgKGJhc2U2NFtiYXNlNjQubGVuZ3RoIC0gMl0gPT09ICc9Jykge1xuICAgICAgICAgICAgYnVmZmVyTGVuZ3RoLS07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgYnVmZmVyID0gdHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIFVpbnQ4QXJyYXkucHJvdG90eXBlLnNsaWNlICE9PSAndW5kZWZpbmVkJyA/IG5ldyBBcnJheUJ1ZmZlcihidWZmZXJMZW5ndGgpIDogbmV3IEFycmF5KGJ1ZmZlckxlbmd0aCk7XG4gICAgdmFyIGJ5dGVzID0gQXJyYXkuaXNBcnJheShidWZmZXIpID8gYnVmZmVyIDogbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgICAgICBlbmNvZGVkMSA9IGxvb2t1cFtiYXNlNjQuY2hhckNvZGVBdChpKV07XG4gICAgICAgIGVuY29kZWQyID0gbG9va3VwW2Jhc2U2NC5jaGFyQ29kZUF0KGkgKyAxKV07XG4gICAgICAgIGVuY29kZWQzID0gbG9va3VwW2Jhc2U2NC5jaGFyQ29kZUF0KGkgKyAyKV07XG4gICAgICAgIGVuY29kZWQ0ID0gbG9va3VwW2Jhc2U2NC5jaGFyQ29kZUF0KGkgKyAzKV07XG5cbiAgICAgICAgYnl0ZXNbcCsrXSA9IGVuY29kZWQxIDw8IDIgfCBlbmNvZGVkMiA+PiA0O1xuICAgICAgICBieXRlc1twKytdID0gKGVuY29kZWQyICYgMTUpIDw8IDQgfCBlbmNvZGVkMyA+PiAyO1xuICAgICAgICBieXRlc1twKytdID0gKGVuY29kZWQzICYgMykgPDwgNiB8IGVuY29kZWQ0ICYgNjM7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZmZlcjtcbn07XG5cbnZhciBwb2x5VWludDE2QXJyYXkgPSBleHBvcnRzLnBvbHlVaW50MTZBcnJheSA9IGZ1bmN0aW9uIHBvbHlVaW50MTZBcnJheShidWZmZXIpIHtcbiAgICB2YXIgbGVuZ3RoID0gYnVmZmVyLmxlbmd0aDtcbiAgICB2YXIgYnl0ZXMgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGVuZ3RoOyBfaSArPSAyKSB7XG4gICAgICAgIGJ5dGVzLnB1c2goYnVmZmVyW19pICsgMV0gPDwgOCB8IGJ1ZmZlcltfaV0pO1xuICAgIH1cbiAgICByZXR1cm4gYnl0ZXM7XG59O1xuXG52YXIgcG9seVVpbnQzMkFycmF5ID0gZXhwb3J0cy5wb2x5VWludDMyQXJyYXkgPSBmdW5jdGlvbiBwb2x5VWludDMyQXJyYXkoYnVmZmVyKSB7XG4gICAgdmFyIGxlbmd0aCA9IGJ1ZmZlci5sZW5ndGg7XG4gICAgdmFyIGJ5dGVzID0gW107XG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgbGVuZ3RoOyBfaTIgKz0gNCkge1xuICAgICAgICBieXRlcy5wdXNoKGJ1ZmZlcltfaTIgKyAzXSA8PCAyNCB8IGJ1ZmZlcltfaTIgKyAyXSA8PCAxNiB8IGJ1ZmZlcltfaTIgKyAxXSA8PCA4IHwgYnVmZmVyW19pMl0pO1xuICAgIH1cbiAgICByZXR1cm4gYnl0ZXM7XG59O1xuXG4vKioqLyB9KSxcbi8qIDE0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY3JlYXRlQ291bnRlclRleHQgPSBleHBvcnRzLmlubGluZUxpc3RJdGVtRWxlbWVudCA9IGV4cG9ydHMuZ2V0TGlzdE93bmVyID0gdW5kZWZpbmVkO1xuXG52YXIgX1V0aWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuXG52YXIgX05vZGVDb250YWluZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXG52YXIgX05vZGVDb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTm9kZUNvbnRhaW5lcik7XG5cbnZhciBfVGV4dENvbnRhaW5lciA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG5cbnZhciBfVGV4dENvbnRhaW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UZXh0Q29udGFpbmVyKTtcblxudmFyIF9saXN0U3R5bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpO1xuXG52YXIgX1VuaWNvZGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gTWFyZ2luIGJldHdlZW4gdGhlIGVudW1lcmF0aW9uIGFuZCB0aGUgbGlzdCBpdGVtIGNvbnRlbnRcbnZhciBNQVJHSU5fUklHSFQgPSA3O1xuXG52YXIgYW5jZXN0b3JUeXBlcyA9IFsnT0wnLCAnVUwnLCAnTUVOVSddO1xuXG52YXIgZ2V0TGlzdE93bmVyID0gZXhwb3J0cy5nZXRMaXN0T3duZXIgPSBmdW5jdGlvbiBnZXRMaXN0T3duZXIoY29udGFpbmVyKSB7XG4gICAgdmFyIHBhcmVudCA9IGNvbnRhaW5lci5wYXJlbnQ7XG4gICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZG8ge1xuICAgICAgICB2YXIgaXNBbmNlc3RvciA9IGFuY2VzdG9yVHlwZXMuaW5kZXhPZihwYXJlbnQudGFnTmFtZSkgIT09IC0xO1xuICAgICAgICBpZiAoaXNBbmNlc3Rvcikge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICAgICAgfVxuICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50O1xuICAgIH0gd2hpbGUgKHBhcmVudCk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyLnBhcmVudDtcbn07XG5cbnZhciBpbmxpbmVMaXN0SXRlbUVsZW1lbnQgPSBleHBvcnRzLmlubGluZUxpc3RJdGVtRWxlbWVudCA9IGZ1bmN0aW9uIGlubGluZUxpc3RJdGVtRWxlbWVudChub2RlLCBjb250YWluZXIsIHJlc291cmNlTG9hZGVyKSB7XG4gICAgdmFyIGxpc3RTdHlsZSA9IGNvbnRhaW5lci5zdHlsZS5saXN0U3R5bGU7XG5cbiAgICBpZiAoIWxpc3RTdHlsZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHN0eWxlID0gbm9kZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUobm9kZSwgbnVsbCk7XG4gICAgdmFyIHdyYXBwZXIgPSBub2RlLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHRtbDJjYW52YXN3cmFwcGVyJyk7XG4gICAgKDAsIF9VdGlsLmNvcHlDU1NTdHlsZXMpKHN0eWxlLCB3cmFwcGVyKTtcblxuICAgIHdyYXBwZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIHdyYXBwZXIuc3R5bGUuYm90dG9tID0gJ2F1dG8nO1xuICAgIHdyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgd3JhcHBlci5zdHlsZS5sZXR0ZXJTcGFjaW5nID0gJ25vcm1hbCc7XG5cbiAgICBzd2l0Y2ggKGxpc3RTdHlsZS5saXN0U3R5bGVQb3NpdGlvbikge1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9QT1NJVElPTi5PVVRTSURFOlxuICAgICAgICAgICAgd3JhcHBlci5zdHlsZS5sZWZ0ID0gJ2F1dG8nO1xuICAgICAgICAgICAgd3JhcHBlci5zdHlsZS5yaWdodCA9IG5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5pbm5lcldpZHRoIC0gY29udGFpbmVyLmJvdW5kcy5sZWZ0IC0gY29udGFpbmVyLnN0eWxlLm1hcmdpblsxXS5nZXRBYnNvbHV0ZVZhbHVlKGNvbnRhaW5lci5ib3VuZHMud2lkdGgpICsgTUFSR0lOX1JJR0hUICsgJ3B4JztcbiAgICAgICAgICAgIHdyYXBwZXIuc3R5bGUudGV4dEFsaWduID0gJ3JpZ2h0JztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9QT1NJVElPTi5JTlNJREU6XG4gICAgICAgICAgICB3cmFwcGVyLnN0eWxlLmxlZnQgPSBjb250YWluZXIuYm91bmRzLmxlZnQgLSBjb250YWluZXIuc3R5bGUubWFyZ2luWzNdLmdldEFic29sdXRlVmFsdWUoY29udGFpbmVyLmJvdW5kcy53aWR0aCkgKyAncHgnO1xuICAgICAgICAgICAgd3JhcHBlci5zdHlsZS5yaWdodCA9ICdhdXRvJztcbiAgICAgICAgICAgIHdyYXBwZXIuc3R5bGUudGV4dEFsaWduID0gJ2xlZnQnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdmFyIHRleHQgPSB2b2lkIDA7XG4gICAgdmFyIE1BUkdJTl9UT1AgPSBjb250YWluZXIuc3R5bGUubWFyZ2luWzBdLmdldEFic29sdXRlVmFsdWUoY29udGFpbmVyLmJvdW5kcy53aWR0aCk7XG4gICAgdmFyIHN0eWxlSW1hZ2UgPSBsaXN0U3R5bGUubGlzdFN0eWxlSW1hZ2U7XG4gICAgaWYgKHN0eWxlSW1hZ2UpIHtcbiAgICAgICAgaWYgKHN0eWxlSW1hZ2UubWV0aG9kID09PSAndXJsJykge1xuICAgICAgICAgICAgdmFyIGltYWdlID0gbm9kZS5vd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gc3R5bGVJbWFnZS5hcmdzWzBdO1xuICAgICAgICAgICAgd3JhcHBlci5zdHlsZS50b3AgPSBjb250YWluZXIuYm91bmRzLnRvcCAtIE1BUkdJTl9UT1AgKyAncHgnO1xuICAgICAgICAgICAgd3JhcHBlci5zdHlsZS53aWR0aCA9ICdhdXRvJztcbiAgICAgICAgICAgIHdyYXBwZXIuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgc2l6ZSA9IHBhcnNlRmxvYXQoY29udGFpbmVyLnN0eWxlLmZvbnQuZm9udFNpemUpICogMC41O1xuICAgICAgICAgICAgd3JhcHBlci5zdHlsZS50b3AgPSBjb250YWluZXIuYm91bmRzLnRvcCAtIE1BUkdJTl9UT1AgKyBjb250YWluZXIuYm91bmRzLmhlaWdodCAtIDEuNSAqIHNpemUgKyAncHgnO1xuICAgICAgICAgICAgd3JhcHBlci5zdHlsZS53aWR0aCA9IHNpemUgKyAncHgnO1xuICAgICAgICAgICAgd3JhcHBlci5zdHlsZS5oZWlnaHQgPSBzaXplICsgJ3B4JztcbiAgICAgICAgICAgIHdyYXBwZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gc3R5bGUubGlzdFN0eWxlSW1hZ2U7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb250YWluZXIubGlzdEluZGV4ID09PSAnbnVtYmVyJykge1xuICAgICAgICB0ZXh0ID0gbm9kZS5vd25lckRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNyZWF0ZUNvdW50ZXJUZXh0KGNvbnRhaW5lci5saXN0SW5kZXgsIGxpc3RTdHlsZS5saXN0U3R5bGVUeXBlLCB0cnVlKSk7XG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgIHdyYXBwZXIuc3R5bGUudG9wID0gY29udGFpbmVyLmJvdW5kcy50b3AgLSBNQVJHSU5fVE9QICsgJ3B4JztcbiAgICB9XG5cbiAgICAvLyAkRmxvd0ZpeE1lXG4gICAgdmFyIGJvZHkgPSBub2RlLm93bmVyRG9jdW1lbnQuYm9keTtcbiAgICBib2R5LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuXG4gICAgaWYgKHRleHQpIHtcbiAgICAgICAgY29udGFpbmVyLmNoaWxkTm9kZXMucHVzaChfVGV4dENvbnRhaW5lcjIuZGVmYXVsdC5mcm9tVGV4dE5vZGUodGV4dCwgY29udGFpbmVyKSk7XG4gICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQod3JhcHBlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgICBjb250YWluZXIuY2hpbGROb2Rlcy5wdXNoKG5ldyBfTm9kZUNvbnRhaW5lcjIuZGVmYXVsdCh3cmFwcGVyLCBjb250YWluZXIsIHJlc291cmNlTG9hZGVyLCAwKSk7XG4gICAgfVxufTtcblxudmFyIFJPTUFOX1VQUEVSID0ge1xuICAgIGludGVnZXJzOiBbMTAwMCwgOTAwLCA1MDAsIDQwMCwgMTAwLCA5MCwgNTAsIDQwLCAxMCwgOSwgNSwgNCwgMV0sXG4gICAgdmFsdWVzOiBbJ00nLCAnQ00nLCAnRCcsICdDRCcsICdDJywgJ1hDJywgJ0wnLCAnWEwnLCAnWCcsICdJWCcsICdWJywgJ0lWJywgJ0knXVxufTtcblxudmFyIEFSTUVOSUFOID0ge1xuICAgIGludGVnZXJzOiBbOTAwMCwgODAwMCwgNzAwMCwgNjAwMCwgNTAwMCwgNDAwMCwgMzAwMCwgMjAwMCwgMTAwMCwgOTAwLCA4MDAsIDcwMCwgNjAwLCA1MDAsIDQwMCwgMzAwLCAyMDAsIDEwMCwgOTAsIDgwLCA3MCwgNjAsIDUwLCA0MCwgMzAsIDIwLCAxMCwgOSwgOCwgNywgNiwgNSwgNCwgMywgMiwgMV0sXG4gICAgdmFsdWVzOiBbJ9WUJywgJ9WTJywgJ9WSJywgJ9WRJywgJ9WQJywgJ9WPJywgJ9WOJywgJ9WNJywgJ9WMJywgJ9WLJywgJ9WKJywgJ9WJJywgJ9WIJywgJ9WHJywgJ9WGJywgJ9WFJywgJ9WEJywgJ9WDJywgJ9WCJywgJ9WBJywgJ9WAJywgJ9S/JywgJ9S+JywgJ9S9JywgJ9S8JywgJ9S7JywgJ9S6JywgJ9S5JywgJ9S4JywgJ9S3JywgJ9S2JywgJ9S1JywgJ9S0JywgJ9SzJywgJ9SyJywgJ9SxJ11cbn07XG5cbnZhciBIRUJSRVcgPSB7XG4gICAgaW50ZWdlcnM6IFsxMDAwMCwgOTAwMCwgODAwMCwgNzAwMCwgNjAwMCwgNTAwMCwgNDAwMCwgMzAwMCwgMjAwMCwgMTAwMCwgNDAwLCAzMDAsIDIwMCwgMTAwLCA5MCwgODAsIDcwLCA2MCwgNTAsIDQwLCAzMCwgMjAsIDE5LCAxOCwgMTcsIDE2LCAxNSwgMTAsIDksIDgsIDcsIDYsIDUsIDQsIDMsIDIsIDFdLFxuICAgIHZhbHVlczogWyfXmdezJywgJ9eY17MnLCAn15fXsycsICfXltezJywgJ9eV17MnLCAn15TXsycsICfXk9ezJywgJ9eS17MnLCAn15HXsycsICfXkNezJywgJ9eqJywgJ9epJywgJ9eoJywgJ9enJywgJ9emJywgJ9ekJywgJ9eiJywgJ9ehJywgJ9egJywgJ9eeJywgJ9ecJywgJ9ebJywgJ9eZ15gnLCAn15nXlycsICfXmdeWJywgJ9eY15YnLCAn15jXlScsICfXmScsICfXmCcsICfXlycsICfXlicsICfXlScsICfXlCcsICfXkycsICfXkicsICfXkScsICfXkCddXG59O1xuXG52YXIgR0VPUkdJQU4gPSB7XG4gICAgaW50ZWdlcnM6IFsxMDAwMCwgOTAwMCwgODAwMCwgNzAwMCwgNjAwMCwgNTAwMCwgNDAwMCwgMzAwMCwgMjAwMCwgMTAwMCwgOTAwLCA4MDAsIDcwMCwgNjAwLCA1MDAsIDQwMCwgMzAwLCAyMDAsIDEwMCwgOTAsIDgwLCA3MCwgNjAsIDUwLCA0MCwgMzAsIDIwLCAxMCwgOSwgOCwgNywgNiwgNSwgNCwgMywgMiwgMV0sXG4gICAgdmFsdWVzOiBbJ+GDtScsICfhg7AnLCAn4YOvJywgJ+GDtCcsICfhg64nLCAn4YOtJywgJ+GDrCcsICfhg6snLCAn4YOqJywgJ+GDqScsICfhg6gnLCAn4YOnJywgJ+GDpicsICfhg6UnLCAn4YOkJywgJ+GDsycsICfhg6InLCAn4YOhJywgJ+GDoCcsICfhg58nLCAn4YOeJywgJ+GDnScsICfhg7InLCAn4YOcJywgJ+GDmycsICfhg5onLCAn4YOZJywgJ+GDmCcsICfhg5cnLCAn4YOxJywgJ+GDlicsICfhg5UnLCAn4YOUJywgJ+GDkycsICfhg5InLCAn4YORJywgJ+GDkCddXG59O1xuXG52YXIgY3JlYXRlQWRkaXRpdmVDb3VudGVyID0gZnVuY3Rpb24gY3JlYXRlQWRkaXRpdmVDb3VudGVyKHZhbHVlLCBtaW4sIG1heCwgc3ltYm9scywgZmFsbGJhY2ssIHN1ZmZpeCkge1xuICAgIGlmICh2YWx1ZSA8IG1pbiB8fCB2YWx1ZSA+IG1heCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclRleHQodmFsdWUsIGZhbGxiYWNrLCBzdWZmaXgubGVuZ3RoID4gMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN5bWJvbHMuaW50ZWdlcnMucmVkdWNlKGZ1bmN0aW9uIChzdHJpbmcsIGludGVnZXIsIGluZGV4KSB7XG4gICAgICAgIHdoaWxlICh2YWx1ZSA+PSBpbnRlZ2VyKSB7XG4gICAgICAgICAgICB2YWx1ZSAtPSBpbnRlZ2VyO1xuICAgICAgICAgICAgc3RyaW5nICs9IHN5bWJvbHMudmFsdWVzW2luZGV4XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgIH0sICcnKSArIHN1ZmZpeDtcbn07XG5cbnZhciBjcmVhdGVDb3VudGVyU3R5bGVXaXRoU3ltYm9sUmVzb2x2ZXIgPSBmdW5jdGlvbiBjcmVhdGVDb3VudGVyU3R5bGVXaXRoU3ltYm9sUmVzb2x2ZXIodmFsdWUsIGNvZGVQb2ludFJhbmdlTGVuZ3RoLCBpc051bWVyaWMsIHJlc29sdmVyKSB7XG4gICAgdmFyIHN0cmluZyA9ICcnO1xuXG4gICAgZG8ge1xuICAgICAgICBpZiAoIWlzTnVtZXJpYykge1xuICAgICAgICAgICAgdmFsdWUtLTtcbiAgICAgICAgfVxuICAgICAgICBzdHJpbmcgPSByZXNvbHZlcih2YWx1ZSkgKyBzdHJpbmc7XG4gICAgICAgIHZhbHVlIC89IGNvZGVQb2ludFJhbmdlTGVuZ3RoO1xuICAgIH0gd2hpbGUgKHZhbHVlICogY29kZVBvaW50UmFuZ2VMZW5ndGggPj0gY29kZVBvaW50UmFuZ2VMZW5ndGgpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbn07XG5cbnZhciBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UgPSBmdW5jdGlvbiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIGNvZGVQb2ludFJhbmdlU3RhcnQsIGNvZGVQb2ludFJhbmdlRW5kLCBpc051bWVyaWMsIHN1ZmZpeCkge1xuICAgIHZhciBjb2RlUG9pbnRSYW5nZUxlbmd0aCA9IGNvZGVQb2ludFJhbmdlRW5kIC0gY29kZVBvaW50UmFuZ2VTdGFydCArIDE7XG5cbiAgICByZXR1cm4gKHZhbHVlIDwgMCA/ICctJyA6ICcnKSArIChjcmVhdGVDb3VudGVyU3R5bGVXaXRoU3ltYm9sUmVzb2x2ZXIoTWF0aC5hYnModmFsdWUpLCBjb2RlUG9pbnRSYW5nZUxlbmd0aCwgaXNOdW1lcmljLCBmdW5jdGlvbiAoY29kZVBvaW50KSB7XG4gICAgICAgIHJldHVybiAoMCwgX1VuaWNvZGUuZnJvbUNvZGVQb2ludCkoTWF0aC5mbG9vcihjb2RlUG9pbnQgJSBjb2RlUG9pbnRSYW5nZUxlbmd0aCkgKyBjb2RlUG9pbnRSYW5nZVN0YXJ0KTtcbiAgICB9KSArIHN1ZmZpeCk7XG59O1xuXG52YXIgY3JlYXRlQ291bnRlclN0eWxlRnJvbVN5bWJvbHMgPSBmdW5jdGlvbiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tU3ltYm9scyh2YWx1ZSwgc3ltYm9scykge1xuICAgIHZhciBzdWZmaXggPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6ICcuICc7XG5cbiAgICB2YXIgY29kZVBvaW50UmFuZ2VMZW5ndGggPSBzeW1ib2xzLmxlbmd0aDtcbiAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlV2l0aFN5bWJvbFJlc29sdmVyKE1hdGguYWJzKHZhbHVlKSwgY29kZVBvaW50UmFuZ2VMZW5ndGgsIGZhbHNlLCBmdW5jdGlvbiAoY29kZVBvaW50KSB7XG4gICAgICAgIHJldHVybiBzeW1ib2xzW01hdGguZmxvb3IoY29kZVBvaW50ICUgY29kZVBvaW50UmFuZ2VMZW5ndGgpXTtcbiAgICB9KSArIHN1ZmZpeDtcbn07XG5cbnZhciBDSktfWkVST1MgPSAxIDw8IDA7XG52YXIgQ0pLX1RFTl9DT0VGRklDSUVOVFMgPSAxIDw8IDE7XG52YXIgQ0pLX1RFTl9ISUdIX0NPRUZGSUNJRU5UUyA9IDEgPDwgMjtcbnZhciBDSktfSFVORFJFRF9DT0VGRklDSUVOVFMgPSAxIDw8IDM7XG5cbnZhciBjcmVhdGVDSktDb3VudGVyID0gZnVuY3Rpb24gY3JlYXRlQ0pLQ291bnRlcih2YWx1ZSwgbnVtYmVycywgbXVsdGlwbGllcnMsIG5lZ2F0aXZlU2lnbiwgc3VmZml4LCBmbGFncykge1xuICAgIGlmICh2YWx1ZSA8IC05OTk5IHx8IHZhbHVlID4gOTk5OSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclRleHQodmFsdWUsIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkNKS19ERUNJTUFMLCBzdWZmaXgubGVuZ3RoID4gMCk7XG4gICAgfVxuICAgIHZhciB0bXAgPSBNYXRoLmFicyh2YWx1ZSk7XG4gICAgdmFyIHN0cmluZyA9IHN1ZmZpeDtcblxuICAgIGlmICh0bXAgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIG51bWJlcnNbMF0gKyBzdHJpbmc7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgZGlnaXQgPSAwOyB0bXAgPiAwICYmIGRpZ2l0IDw9IDQ7IGRpZ2l0KyspIHtcbiAgICAgICAgdmFyIGNvZWZmaWNpZW50ID0gdG1wICUgMTA7XG5cbiAgICAgICAgaWYgKGNvZWZmaWNpZW50ID09PSAwICYmICgwLCBfVXRpbC5jb250YWlucykoZmxhZ3MsIENKS19aRVJPUykgJiYgc3RyaW5nICE9PSAnJykge1xuICAgICAgICAgICAgc3RyaW5nID0gbnVtYmVyc1tjb2VmZmljaWVudF0gKyBzdHJpbmc7XG4gICAgICAgIH0gZWxzZSBpZiAoY29lZmZpY2llbnQgPiAxIHx8IGNvZWZmaWNpZW50ID09PSAxICYmIGRpZ2l0ID09PSAwIHx8IGNvZWZmaWNpZW50ID09PSAxICYmIGRpZ2l0ID09PSAxICYmICgwLCBfVXRpbC5jb250YWlucykoZmxhZ3MsIENKS19URU5fQ09FRkZJQ0lFTlRTKSB8fCBjb2VmZmljaWVudCA9PT0gMSAmJiBkaWdpdCA9PT0gMSAmJiAoMCwgX1V0aWwuY29udGFpbnMpKGZsYWdzLCBDSktfVEVOX0hJR0hfQ09FRkZJQ0lFTlRTKSAmJiB2YWx1ZSA+IDEwMCB8fCBjb2VmZmljaWVudCA9PT0gMSAmJiBkaWdpdCA+IDEgJiYgKDAsIF9VdGlsLmNvbnRhaW5zKShmbGFncywgQ0pLX0hVTkRSRURfQ09FRkZJQ0lFTlRTKSkge1xuICAgICAgICAgICAgc3RyaW5nID0gbnVtYmVyc1tjb2VmZmljaWVudF0gKyAoZGlnaXQgPiAwID8gbXVsdGlwbGllcnNbZGlnaXQgLSAxXSA6ICcnKSArIHN0cmluZztcbiAgICAgICAgfSBlbHNlIGlmIChjb2VmZmljaWVudCA9PT0gMSAmJiBkaWdpdCA+IDApIHtcbiAgICAgICAgICAgIHN0cmluZyA9IG11bHRpcGxpZXJzW2RpZ2l0IC0gMV0gKyBzdHJpbmc7XG4gICAgICAgIH1cbiAgICAgICAgdG1wID0gTWF0aC5mbG9vcih0bXAgLyAxMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuICh2YWx1ZSA8IDAgPyBuZWdhdGl2ZVNpZ24gOiAnJykgKyBzdHJpbmc7XG59O1xuXG52YXIgQ0hJTkVTRV9JTkZPUk1BTF9NVUxUSVBMSUVSUyA9ICfljYHnmb7ljYPokKwnO1xudmFyIENISU5FU0VfRk9STUFMX01VTFRJUExJRVJTID0gJ+aLvuS9sOS7n+iQrCc7XG52YXIgSkFQQU5FU0VfTkVHQVRJVkUgPSAn44Oe44Kk44OK44K5JztcbnZhciBLT1JFQU5fTkVHQVRJVkUgPSAn66eI7J2064SI7IqkICc7XG5cbnZhciBjcmVhdGVDb3VudGVyVGV4dCA9IGV4cG9ydHMuY3JlYXRlQ291bnRlclRleHQgPSBmdW5jdGlvbiBjcmVhdGVDb3VudGVyVGV4dCh2YWx1ZSwgdHlwZSwgYXBwZW5kU3VmZml4KSB7XG4gICAgdmFyIGRlZmF1bHRTdWZmaXggPSBhcHBlbmRTdWZmaXggPyAnLiAnIDogJyc7XG4gICAgdmFyIGNqa1N1ZmZpeCA9IGFwcGVuZFN1ZmZpeCA/ICfjgIEnIDogJyc7XG4gICAgdmFyIGtvcmVhblN1ZmZpeCA9IGFwcGVuZFN1ZmZpeCA/ICcsICcgOiAnJztcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5ESVNDOlxuICAgICAgICAgICAgcmV0dXJuICfigKInO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkNJUkNMRTpcbiAgICAgICAgICAgIHJldHVybiAn4pemJztcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5TUVVBUkU6XG4gICAgICAgICAgICByZXR1cm4gJ+KXvic7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuREVDSU1BTF9MRUFESU5HX1pFUk86XG4gICAgICAgICAgICB2YXIgc3RyaW5nID0gY3JlYXRlQ291bnRlclN0eWxlRnJvbVJhbmdlKHZhbHVlLCA0OCwgNTcsIHRydWUsIGRlZmF1bHRTdWZmaXgpO1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZy5sZW5ndGggPCA0ID8gJzAnICsgc3RyaW5nIDogc3RyaW5nO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkNKS19ERUNJTUFMOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvdW50ZXJTdHlsZUZyb21TeW1ib2xzKHZhbHVlLCAn44CH5LiA5LqM5LiJ5Zub5LqU5YWt5LiD5YWr5LmdJywgY2prU3VmZml4KTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5MT1dFUl9ST01BTjpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVBZGRpdGl2ZUNvdW50ZXIodmFsdWUsIDEsIDM5OTksIFJPTUFOX1VQUEVSLCBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5ERUNJTUFMLCBkZWZhdWx0U3VmZml4KS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLlVQUEVSX1JPTUFOOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUFkZGl0aXZlQ291bnRlcih2YWx1ZSwgMSwgMzk5OSwgUk9NQU5fVVBQRVIsIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkRFQ0lNQUwsIGRlZmF1bHRTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkxPV0VSX0dSRUVLOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvdW50ZXJTdHlsZUZyb21SYW5nZSh2YWx1ZSwgOTQ1LCA5NjksIGZhbHNlLCBkZWZhdWx0U3VmZml4KTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5MT1dFUl9BTFBIQTpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDk3LCAxMjIsIGZhbHNlLCBkZWZhdWx0U3VmZml4KTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5VUFBFUl9BTFBIQTpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDY1LCA5MCwgZmFsc2UsIGRlZmF1bHRTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkFSQUJJQ19JTkRJQzpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDE2MzIsIDE2NDEsIHRydWUsIGRlZmF1bHRTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkFSTUVOSUFOOlxuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLlVQUEVSX0FSTUVOSUFOOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUFkZGl0aXZlQ291bnRlcih2YWx1ZSwgMSwgOTk5OSwgQVJNRU5JQU4sIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkRFQ0lNQUwsIGRlZmF1bHRTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkxPV0VSX0FSTUVOSUFOOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUFkZGl0aXZlQ291bnRlcih2YWx1ZSwgMSwgOTk5OSwgQVJNRU5JQU4sIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkRFQ0lNQUwsIGRlZmF1bHRTdWZmaXgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuQkVOR0FMSTpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDI1MzQsIDI1NDMsIHRydWUsIGRlZmF1bHRTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkNBTUJPRElBTjpcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5LSE1FUjpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDYxMTIsIDYxMjEsIHRydWUsIGRlZmF1bHRTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkNKS19FQVJUSExZX0JSQU5DSDpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tU3ltYm9scyh2YWx1ZSwgJ+WtkOS4keWvheWNr+i+sOW3s+WNiOacqueUs+mFieaIjOS6pScsIGNqa1N1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuQ0pLX0hFQVZFTkxZX1NURU06XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVN5bWJvbHModmFsdWUsICfnlLLkuZnkuJnkuIHmiIrlt7Hluprovpvlo6znmbgnLCBjamtTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkNKS19JREVPR1JBUEhJQzpcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5UUkFEX0NISU5FU0VfSU5GT1JNQUw6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ0pLQ291bnRlcih2YWx1ZSwgJ+mbtuS4gOS6jOS4ieWbm+S6lOWFreS4g+WFq+S5nScsIENISU5FU0VfSU5GT1JNQUxfTVVMVElQTElFUlMsICfosqAnLCBjamtTdWZmaXgsIENKS19URU5fQ09FRkZJQ0lFTlRTIHwgQ0pLX1RFTl9ISUdIX0NPRUZGSUNJRU5UUyB8IENKS19IVU5EUkVEX0NPRUZGSUNJRU5UUyk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuVFJBRF9DSElORVNFX0ZPUk1BTDpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDSktDb3VudGVyKHZhbHVlLCAn6Zu25aO56LKz5Y+D6IKG5LyN6Zm45p+S5o2M546WJywgQ0hJTkVTRV9GT1JNQUxfTVVMVElQTElFUlMsICfosqAnLCBjamtTdWZmaXgsIENKS19aRVJPUyB8IENKS19URU5fQ09FRkZJQ0lFTlRTIHwgQ0pLX1RFTl9ISUdIX0NPRUZGSUNJRU5UUyB8IENKS19IVU5EUkVEX0NPRUZGSUNJRU5UUyk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuU0lNUF9DSElORVNFX0lORk9STUFMOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNKS0NvdW50ZXIodmFsdWUsICfpm7bkuIDkuozkuInlm5vkupTlha3kuIPlhavkuZ0nLCBDSElORVNFX0lORk9STUFMX01VTFRJUExJRVJTLCAn6LSfJywgY2prU3VmZml4LCBDSktfVEVOX0NPRUZGSUNJRU5UUyB8IENKS19URU5fSElHSF9DT0VGRklDSUVOVFMgfCBDSktfSFVORFJFRF9DT0VGRklDSUVOVFMpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLlNJTVBfQ0hJTkVTRV9GT1JNQUw6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ0pLQ291bnRlcih2YWx1ZSwgJ+mbtuWjuei0sOWPgeiChuS8jemZhuafkuaNjOeOlicsIENISU5FU0VfRk9STUFMX01VTFRJUExJRVJTLCAn6LSfJywgY2prU3VmZml4LCBDSktfWkVST1MgfCBDSktfVEVOX0NPRUZGSUNJRU5UUyB8IENKS19URU5fSElHSF9DT0VGRklDSUVOVFMgfCBDSktfSFVORFJFRF9DT0VGRklDSUVOVFMpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkpBUEFORVNFX0lORk9STUFMOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNKS0NvdW50ZXIodmFsdWUsICfjgIfkuIDkuozkuInlm5vkupTlha3kuIPlhavkuZ0nLCAn5Y2B55m+5Y2D5LiHJywgSkFQQU5FU0VfTkVHQVRJVkUsIGNqa1N1ZmZpeCwgMCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuSkFQQU5FU0VfRk9STUFMOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNKS0NvdW50ZXIodmFsdWUsICfpm7blo7HlvJDlj4Llm5vkvI3lha3kuIPlhavkuZ0nLCAn5ou+55m+5Y2D5LiHJywgSkFQQU5FU0VfTkVHQVRJVkUsIGNqa1N1ZmZpeCwgQ0pLX1pFUk9TIHwgQ0pLX1RFTl9DT0VGRklDSUVOVFMgfCBDSktfVEVOX0hJR0hfQ09FRkZJQ0lFTlRTKTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5LT1JFQU5fSEFOR1VMX0ZPUk1BTDpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDSktDb3VudGVyKHZhbHVlLCAn7JiB7J287J207IK87IKs7Jik7Jyh7Lmg7YyU6rWsJywgJ+yLreuwseyynOunjCcsIEtPUkVBTl9ORUdBVElWRSwga29yZWFuU3VmZml4LCBDSktfWkVST1MgfCBDSktfVEVOX0NPRUZGSUNJRU5UUyB8IENKS19URU5fSElHSF9DT0VGRklDSUVOVFMpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLktPUkVBTl9IQU5KQV9JTkZPUk1BTDpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDSktDb3VudGVyKHZhbHVlLCAn6Zu25LiA5LqM5LiJ5Zub5LqU5YWt5LiD5YWr5LmdJywgJ+WNgeeZvuWNg+iQrCcsIEtPUkVBTl9ORUdBVElWRSwga29yZWFuU3VmZml4LCAwKTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5LT1JFQU5fSEFOSkFfRk9STUFMOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNKS0NvdW50ZXIodmFsdWUsICfpm7blo7nosrPlj4Plm5vkupTlha3kuIPlhavkuZ0nLCAn5ou+55m+5Y2DJywgS09SRUFOX05FR0FUSVZFLCBrb3JlYW5TdWZmaXgsIENKS19aRVJPUyB8IENKS19URU5fQ09FRkZJQ0lFTlRTIHwgQ0pLX1RFTl9ISUdIX0NPRUZGSUNJRU5UUyk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuREVWQU5BR0FSSTpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDB4OTY2LCAweDk2ZiwgdHJ1ZSwgZGVmYXVsdFN1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuR0VPUkdJQU46XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQWRkaXRpdmVDb3VudGVyKHZhbHVlLCAxLCAxOTk5OSwgR0VPUkdJQU4sIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkRFQ0lNQUwsIGRlZmF1bHRTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkdVSkFSQVRJOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvdW50ZXJTdHlsZUZyb21SYW5nZSh2YWx1ZSwgMHhhZTYsIDB4YWVmLCB0cnVlLCBkZWZhdWx0U3VmZml4KTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5HVVJNVUtISTpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDB4YTY2LCAweGE2ZiwgdHJ1ZSwgZGVmYXVsdFN1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuSEVCUkVXOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUFkZGl0aXZlQ291bnRlcih2YWx1ZSwgMSwgMTA5OTksIEhFQlJFVywgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuREVDSU1BTCwgZGVmYXVsdFN1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuSElSQUdBTkE6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVN5bWJvbHModmFsdWUsICfjgYLjgYTjgYbjgYjjgYrjgYvjgY3jgY/jgZHjgZPjgZXjgZfjgZnjgZvjgZ3jgZ/jgaHjgaTjgabjgajjgarjgavjgazjga3jga7jga/jgbLjgbXjgbjjgbvjgb7jgb/jgoDjgoHjgoLjgoTjgobjgojjgonjgorjgovjgozjgo3jgo/jgpDjgpHjgpLjgpMnKTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5ISVJBR0FOQV9JUk9IQTpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tU3ltYm9scyh2YWx1ZSwgJ+OBhOOCjeOBr+OBq+OBu+OBuOOBqOOBoeOCiuOBrOOCi+OCkuOCj+OBi+OCiOOBn+OCjOOBneOBpOOBreOBquOCieOCgOOBhuOCkOOBruOBiuOBj+OChOOBvuOBkeOBteOBk+OBiOOBpuOBguOBleOBjeOChuOCgeOBv+OBl+OCkeOBsuOCguOBm+OBmScpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLktBTk5BREE6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVJhbmdlKHZhbHVlLCAweGNlNiwgMHhjZWYsIHRydWUsIGRlZmF1bHRTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLktBVEFLQU5BOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvdW50ZXJTdHlsZUZyb21TeW1ib2xzKHZhbHVlLCAn44Ki44Kk44Km44Ko44Kq44Kr44Kt44Kv44Kx44Kz44K144K344K544K744K944K/44OB44OE44OG44OI44OK44OL44OM44ON44OO44OP44OS44OV44OY44Ob44Oe44Of44Og44Oh44Oi44Ok44Om44Oo44Op44Oq44Or44Os44Ot44Ov44Ow44Ox44Oy44OzJywgY2prU3VmZml4KTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5LQVRBS0FOQV9JUk9IQTpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tU3ltYm9scyh2YWx1ZSwgJ+OCpOODreODj+ODi+ODm+ODmOODiOODgeODquODjOODq+ODsuODr+OCq+ODqOOCv+ODrOOCveODhOODjeODiuODqeODoOOCpuODsOODjuOCquOCr+ODpOODnuOCseODleOCs+OCqOODhuOCouOCteOCreODpuODoeODn+OCt+ODseODkuODouOCu+OCuScsIGNqa1N1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuTEFPOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvdW50ZXJTdHlsZUZyb21SYW5nZSh2YWx1ZSwgMHhlZDAsIDB4ZWQ5LCB0cnVlLCBkZWZhdWx0U3VmZml4KTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5NT05HT0xJQU46XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVJhbmdlKHZhbHVlLCAweDE4MTAsIDB4MTgxOSwgdHJ1ZSwgZGVmYXVsdFN1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuTVlBTk1BUjpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDB4MTA0MCwgMHgxMDQ5LCB0cnVlLCBkZWZhdWx0U3VmZml4KTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5PUklZQTpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDB4YjY2LCAweGI2ZiwgdHJ1ZSwgZGVmYXVsdFN1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuUEVSU0lBTjpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDB4NmYwLCAweDZmOSwgdHJ1ZSwgZGVmYXVsdFN1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuVEFNSUw6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVJhbmdlKHZhbHVlLCAweGJlNiwgMHhiZWYsIHRydWUsIGRlZmF1bHRTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLlRFTFVHVTpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDB4YzY2LCAweGM2ZiwgdHJ1ZSwgZGVmYXVsdFN1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuVEhBSTpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDB4ZTUwLCAweGU1OSwgdHJ1ZSwgZGVmYXVsdFN1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuVElCRVRBTjpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDB4ZjIwLCAweGYyOSwgdHJ1ZSwgZGVmYXVsdFN1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuREVDSU1BTDpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDQ4LCA1NywgdHJ1ZSwgZGVmYXVsdFN1ZmZpeCk7XG4gICAgfVxufTtcblxuLyoqKi8gfSksXG4vKiAxNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfUGF0aCA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cbnZhciBfdGV4dERlY29yYXRpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIGFkZENvbG9yU3RvcHMgPSBmdW5jdGlvbiBhZGRDb2xvclN0b3BzKGdyYWRpZW50LCBjYW52YXNHcmFkaWVudCkge1xuICAgIHZhciBtYXhTdG9wID0gTWF0aC5tYXguYXBwbHkobnVsbCwgZ3JhZGllbnQuY29sb3JTdG9wcy5tYXAoZnVuY3Rpb24gKGNvbG9yU3RvcCkge1xuICAgICAgICByZXR1cm4gY29sb3JTdG9wLnN0b3A7XG4gICAgfSkpO1xuICAgIHZhciBmID0gMSAvIE1hdGgubWF4KDEsIG1heFN0b3ApO1xuICAgIGdyYWRpZW50LmNvbG9yU3RvcHMuZm9yRWFjaChmdW5jdGlvbiAoY29sb3JTdG9wKSB7XG4gICAgICAgIGNhbnZhc0dyYWRpZW50LmFkZENvbG9yU3RvcChmICogY29sb3JTdG9wLnN0b3AsIGNvbG9yU3RvcC5jb2xvci50b1N0cmluZygpKTtcbiAgICB9KTtcbn07XG5cbnZhciBDYW52YXNSZW5kZXJlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDYW52YXNSZW5kZXJlcihjYW52YXMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENhbnZhc1JlbmRlcmVyKTtcblxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcyA/IGNhbnZhcyA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhDYW52YXNSZW5kZXJlciwgW3tcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcihvcHRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSBNYXRoLmZsb29yKG9wdGlvbnMud2lkdGggKiBvcHRpb25zLnNjYWxlKTtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IE1hdGguZmxvb3Iob3B0aW9ucy5oZWlnaHQgKiBvcHRpb25zLnNjYWxlKTtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLndpZHRoID0gb3B0aW9ucy53aWR0aCArICdweCc7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5oZWlnaHQgPSBvcHRpb25zLmhlaWdodCArICdweCc7XG5cbiAgICAgICAgICAgIHRoaXMuY3R4LnNjYWxlKHRoaXMub3B0aW9ucy5zY2FsZSwgdGhpcy5vcHRpb25zLnNjYWxlKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZSgtb3B0aW9ucy54LCAtb3B0aW9ucy55KTtcbiAgICAgICAgICAgIHRoaXMuY3R4LnRleHRCYXNlbGluZSA9ICdib3R0b20nO1xuICAgICAgICAgICAgb3B0aW9ucy5sb2dnZXIubG9nKCdDYW52YXMgcmVuZGVyZXIgaW5pdGlhbGl6ZWQgKCcgKyBvcHRpb25zLndpZHRoICsgJ3gnICsgb3B0aW9ucy5oZWlnaHQgKyAnIGF0ICcgKyBvcHRpb25zLnggKyAnLCcgKyBvcHRpb25zLnkgKyAnKSB3aXRoIHNjYWxlICcgKyB0aGlzLm9wdGlvbnMuc2NhbGUpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjbGlwJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNsaXAoY2xpcFBhdGhzLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgaWYgKGNsaXBQYXRocy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zYXZlKCk7XG4gICAgICAgICAgICAgICAgY2xpcFBhdGhzLmZvckVhY2goZnVuY3Rpb24gKHBhdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucGF0aChwYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY3R4LmNsaXAoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FsbGJhY2soKTtcblxuICAgICAgICAgICAgaWYgKGNsaXBQYXRocy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2RyYXdJbWFnZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkcmF3SW1hZ2UoaW1hZ2UsIHNvdXJjZSwgZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShpbWFnZSwgc291cmNlLmxlZnQsIHNvdXJjZS50b3AsIHNvdXJjZS53aWR0aCwgc291cmNlLmhlaWdodCwgZGVzdGluYXRpb24ubGVmdCwgZGVzdGluYXRpb24udG9wLCBkZXN0aW5hdGlvbi53aWR0aCwgZGVzdGluYXRpb24uaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZHJhd1NoYXBlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRyYXdTaGFwZShwYXRoLCBjb2xvcikge1xuICAgICAgICAgICAgdGhpcy5wYXRoKHBhdGgpO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3IudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZmlsbCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBmaWxsKGNvbG9yKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvci50b1N0cmluZygpO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRUYXJnZXQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuY2FudmFzKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncGF0aCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwYXRoKF9wYXRoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShfcGF0aCkpIHtcbiAgICAgICAgICAgICAgICBfcGF0aC5mb3JFYWNoKGZ1bmN0aW9uIChwb2ludCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXJ0ID0gcG9pbnQudHlwZSA9PT0gX1BhdGguUEFUSC5WRUNUT1IgPyBwb2ludCA6IHBvaW50LnN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMi5jdHgubW92ZVRvKHN0YXJ0LngsIHN0YXJ0LnkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMyLmN0eC5saW5lVG8oc3RhcnQueCwgc3RhcnQueSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAocG9pbnQudHlwZSA9PT0gX1BhdGguUEFUSC5CRVpJRVJfQ1VSVkUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMi5jdHguYmV6aWVyQ3VydmVUbyhwb2ludC5zdGFydENvbnRyb2wueCwgcG9pbnQuc3RhcnRDb250cm9sLnksIHBvaW50LmVuZENvbnRyb2wueCwgcG9pbnQuZW5kQ29udHJvbC55LCBwb2ludC5lbmQueCwgcG9pbnQuZW5kLnkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmFyYyhfcGF0aC54ICsgX3BhdGgucmFkaXVzLCBfcGF0aC55ICsgX3BhdGgucmFkaXVzLCBfcGF0aC5yYWRpdXMsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlY3RhbmdsZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgY29sb3IpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyTGluZWFyR3JhZGllbnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyTGluZWFyR3JhZGllbnQoYm91bmRzLCBncmFkaWVudCkge1xuICAgICAgICAgICAgdmFyIGxpbmVhckdyYWRpZW50ID0gdGhpcy5jdHguY3JlYXRlTGluZWFyR3JhZGllbnQoYm91bmRzLmxlZnQgKyBncmFkaWVudC5kaXJlY3Rpb24ueDEsIGJvdW5kcy50b3AgKyBncmFkaWVudC5kaXJlY3Rpb24ueTEsIGJvdW5kcy5sZWZ0ICsgZ3JhZGllbnQuZGlyZWN0aW9uLngwLCBib3VuZHMudG9wICsgZ3JhZGllbnQuZGlyZWN0aW9uLnkwKTtcblxuICAgICAgICAgICAgYWRkQ29sb3JTdG9wcyhncmFkaWVudCwgbGluZWFyR3JhZGllbnQpO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gbGluZWFyR3JhZGllbnQ7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsUmVjdChib3VuZHMubGVmdCwgYm91bmRzLnRvcCwgYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyUmFkaWFsR3JhZGllbnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyUmFkaWFsR3JhZGllbnQoYm91bmRzLCBncmFkaWVudCkge1xuICAgICAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciB4ID0gYm91bmRzLmxlZnQgKyBncmFkaWVudC5jZW50ZXIueDtcbiAgICAgICAgICAgIHZhciB5ID0gYm91bmRzLnRvcCArIGdyYWRpZW50LmNlbnRlci55O1xuXG4gICAgICAgICAgICB2YXIgcmFkaWFsR3JhZGllbnQgPSB0aGlzLmN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCBncmFkaWVudC5yYWRpdXMueCk7XG4gICAgICAgICAgICBpZiAoIXJhZGlhbEdyYWRpZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhZGRDb2xvclN0b3BzKGdyYWRpZW50LCByYWRpYWxHcmFkaWVudCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSByYWRpYWxHcmFkaWVudDtcblxuICAgICAgICAgICAgaWYgKGdyYWRpZW50LnJhZGl1cy54ICE9PSBncmFkaWVudC5yYWRpdXMueSkge1xuICAgICAgICAgICAgICAgIC8vIHRyYW5zZm9ybXMgZm9yIGVsbGlwdGljYWwgcmFkaWFsIGdyYWRpZW50XG4gICAgICAgICAgICAgICAgdmFyIG1pZFggPSBib3VuZHMubGVmdCArIDAuNSAqIGJvdW5kcy53aWR0aDtcbiAgICAgICAgICAgICAgICB2YXIgbWlkWSA9IGJvdW5kcy50b3AgKyAwLjUgKiBib3VuZHMuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIHZhciBmID0gZ3JhZGllbnQucmFkaXVzLnkgLyBncmFkaWVudC5yYWRpdXMueDtcbiAgICAgICAgICAgICAgICB2YXIgaW52RiA9IDEgLyBmO1xuXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0obWlkWCwgbWlkWSwgWzEsIDAsIDAsIGYsIDAsIDBdLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczMuY3R4LmZpbGxSZWN0KGJvdW5kcy5sZWZ0LCBpbnZGICogKGJvdW5kcy50b3AgLSBtaWRZKSArIG1pZFksIGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCAqIGludkYpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsUmVjdChib3VuZHMubGVmdCwgYm91bmRzLnRvcCwgYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyUmVwZWF0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlclJlcGVhdChwYXRoLCBpbWFnZSwgaW1hZ2VTaXplLCBvZmZzZXRYLCBvZmZzZXRZKSB7XG4gICAgICAgICAgICB0aGlzLnBhdGgocGF0aCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmN0eC5jcmVhdGVQYXR0ZXJuKHRoaXMucmVzaXplSW1hZ2UoaW1hZ2UsIGltYWdlU2l6ZSksICdyZXBlYXQnKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZShvZmZzZXRYLCBvZmZzZXRZKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZSgtb2Zmc2V0WCwgLW9mZnNldFkpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXJUZXh0Tm9kZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJUZXh0Tm9kZSh0ZXh0Qm91bmRzLCBjb2xvciwgZm9udCwgdGV4dERlY29yYXRpb24sIHRleHRTaGFkb3dzKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFtmb250LmZvbnRTdHlsZSwgZm9udC5mb250VmFyaWFudCwgZm9udC5mb250V2VpZ2h0LCBmb250LmZvbnRTaXplLCBmb250LmZvbnRGYW1pbHldLmpvaW4oJyAnKTtcblxuICAgICAgICAgICAgdGV4dEJvdW5kcy5mb3JFYWNoKGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgICAgICAgICAgICAgX3RoaXM0LmN0eC5maWxsU3R5bGUgPSBjb2xvci50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIGlmICh0ZXh0U2hhZG93cyAmJiB0ZXh0LnRleHQudHJpbSgpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0U2hhZG93cy5zbGljZSgwKS5yZXZlcnNlKCkuZm9yRWFjaChmdW5jdGlvbiAodGV4dFNoYWRvdykge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXM0LmN0eC5zaGFkb3dDb2xvciA9IHRleHRTaGFkb3cuY29sb3IudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzNC5jdHguc2hhZG93T2Zmc2V0WCA9IHRleHRTaGFkb3cub2Zmc2V0WCAqIF90aGlzNC5vcHRpb25zLnNjYWxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXM0LmN0eC5zaGFkb3dPZmZzZXRZID0gdGV4dFNoYWRvdy5vZmZzZXRZICogX3RoaXM0Lm9wdGlvbnMuc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczQuY3R4LnNoYWRvd0JsdXIgPSB0ZXh0U2hhZG93LmJsdXI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzNC5jdHguZmlsbFRleHQodGV4dC50ZXh0LCB0ZXh0LmJvdW5kcy5sZWZ0LCB0ZXh0LmJvdW5kcy50b3AgKyB0ZXh0LmJvdW5kcy5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfdGhpczQuY3R4LmZpbGxUZXh0KHRleHQudGV4dCwgdGV4dC5ib3VuZHMubGVmdCwgdGV4dC5ib3VuZHMudG9wICsgdGV4dC5ib3VuZHMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGV4dERlY29yYXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRleHREZWNvcmF0aW9uQ29sb3IgPSB0ZXh0RGVjb3JhdGlvbi50ZXh0RGVjb3JhdGlvbkNvbG9yIHx8IGNvbG9yO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbi50ZXh0RGVjb3JhdGlvbkxpbmUuZm9yRWFjaChmdW5jdGlvbiAodGV4dERlY29yYXRpb25MaW5lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRleHREZWNvcmF0aW9uTGluZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgX3RleHREZWNvcmF0aW9uLlRFWFRfREVDT1JBVElPTl9MSU5FLlVOREVSTElORTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRHJhd3MgYSBsaW5lIGF0IHRoZSBiYXNlbGluZSBvZiB0aGUgZm9udFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPIEFzIHNvbWUgYnJvd3NlcnMgZGlzcGxheSB0aGUgbGluZSBhcyBtb3JlIHRoYW4gMXB4IGlmIHRoZSBmb250LXNpemUgaXMgYmlnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBuZWVkIHRvIHRha2UgdGhhdCBpbnRvIGFjY291bnQgYm90aCBpbiBwb3NpdGlvbiBhbmQgc2l6ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX29wdGlvbnMkZm9udE1ldHJpY3MkID0gX3RoaXM0Lm9wdGlvbnMuZm9udE1ldHJpY3MuZ2V0TWV0cmljcyhmb250KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VsaW5lID0gX29wdGlvbnMkZm9udE1ldHJpY3MkLmJhc2VsaW5lO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzNC5yZWN0YW5nbGUodGV4dC5ib3VuZHMubGVmdCwgTWF0aC5yb3VuZCh0ZXh0LmJvdW5kcy50b3AgKyBiYXNlbGluZSksIHRleHQuYm91bmRzLndpZHRoLCAxLCB0ZXh0RGVjb3JhdGlvbkNvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBfdGV4dERlY29yYXRpb24uVEVYVF9ERUNPUkFUSU9OX0xJTkUuT1ZFUkxJTkU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzNC5yZWN0YW5nbGUodGV4dC5ib3VuZHMubGVmdCwgTWF0aC5yb3VuZCh0ZXh0LmJvdW5kcy50b3ApLCB0ZXh0LmJvdW5kcy53aWR0aCwgMSwgdGV4dERlY29yYXRpb25Db2xvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgX3RleHREZWNvcmF0aW9uLlRFWFRfREVDT1JBVElPTl9MSU5FLkxJTkVfVEhST1VHSDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyB0cnkgYW5kIGZpbmQgZXhhY3QgcG9zaXRpb24gZm9yIGxpbmUtdGhyb3VnaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX29wdGlvbnMkZm9udE1ldHJpY3MkMiA9IF90aGlzNC5vcHRpb25zLmZvbnRNZXRyaWNzLmdldE1ldHJpY3MoZm9udCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaWRkbGUgPSBfb3B0aW9ucyRmb250TWV0cmljcyQyLm1pZGRsZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpczQucmVjdGFuZ2xlKHRleHQuYm91bmRzLmxlZnQsIE1hdGguY2VpbCh0ZXh0LmJvdW5kcy50b3AgKyBtaWRkbGUpLCB0ZXh0LmJvdW5kcy53aWR0aCwgMSwgdGV4dERlY29yYXRpb25Db2xvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVzaXplSW1hZ2UnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVzaXplSW1hZ2UoaW1hZ2UsIHNpemUpIHtcbiAgICAgICAgICAgIGlmIChpbWFnZS53aWR0aCA9PT0gc2l6ZS53aWR0aCAmJiBpbWFnZS5oZWlnaHQgPT09IHNpemUuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGltYWdlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgY2FudmFzID0gdGhpcy5jYW52YXMub3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IHNpemUud2lkdGg7XG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gc2l6ZS5oZWlnaHQ7XG4gICAgICAgICAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlLCAwLCAwLCBpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0LCAwLCAwLCBzaXplLndpZHRoLCBzaXplLmhlaWdodCk7XG4gICAgICAgICAgICByZXR1cm4gY2FudmFzO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzZXRPcGFjaXR5JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldE9wYWNpdHkob3BhY2l0eSkge1xuICAgICAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSBvcGFjaXR5O1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICd0cmFuc2Zvcm0nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdHJhbnNmb3JtKG9mZnNldFgsIG9mZnNldFksIG1hdHJpeCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LnNhdmUoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZShvZmZzZXRYLCBvZmZzZXRZKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LnRyYW5zZm9ybShtYXRyaXhbMF0sIG1hdHJpeFsxXSwgbWF0cml4WzJdLCBtYXRyaXhbM10sIG1hdHJpeFs0XSwgbWF0cml4WzVdKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZSgtb2Zmc2V0WCwgLW9mZnNldFkpO1xuXG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuXG4gICAgICAgICAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQ2FudmFzUmVuZGVyZXI7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IENhbnZhc1JlbmRlcmVyO1xuXG4vKioqLyB9KSxcbi8qIDE2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIExvZ2dlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBMb2dnZXIoZW5hYmxlZCwgaWQsIHN0YXJ0KSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMb2dnZXIpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIGVuYWJsZWQ7XG4gICAgICAgIHRoaXMuc3RhcnQgPSBzdGFydCA/IHN0YXJ0IDogRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhMb2dnZXIsIFt7XG4gICAgICAgIGtleTogJ2NoaWxkJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNoaWxkKGlkKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IExvZ2dlcih0aGlzLmVuYWJsZWQsIGlkLCB0aGlzLnN0YXJ0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmbG93dHlwZS9uby13ZWFrLXR5cGVzXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xvZycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsb2coKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5lbmFibGVkICYmIHdpbmRvdy5jb25zb2xlICYmIHdpbmRvdy5jb25zb2xlLmxvZykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuY2FsbCh3aW5kb3cuY29uc29sZS5sb2csIHdpbmRvdy5jb25zb2xlKS5hcHBseSh3aW5kb3cuY29uc29sZSwgW0RhdGUubm93KCkgLSB0aGlzLnN0YXJ0ICsgJ21zJywgdGhpcy5pZCA/ICdodG1sMmNhbnZhcyAoJyArIHRoaXMuaWQgKyAnKTonIDogJ2h0bWwyY2FudmFzOiddLmNvbmNhdChbXS5zbGljZS5jYWxsKGFyZ3MsIDApKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZmxvd3R5cGUvbm8td2Vhay10eXBlc1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdlcnJvcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlcnJvcigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmVuYWJsZWQgJiYgd2luZG93LmNvbnNvbGUgJiYgd2luZG93LmNvbnNvbGUuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICAgICAgICAgICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuY2FsbCh3aW5kb3cuY29uc29sZS5lcnJvciwgd2luZG93LmNvbnNvbGUpLmFwcGx5KHdpbmRvdy5jb25zb2xlLCBbRGF0ZS5ub3coKSAtIHRoaXMuc3RhcnQgKyAnbXMnLCB0aGlzLmlkID8gJ2h0bWwyY2FudmFzICgnICsgdGhpcy5pZCArICcpOicgOiAnaHRtbDJjYW52YXM6J10uY29uY2F0KFtdLnNsaWNlLmNhbGwoYXJncywgMCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBMb2dnZXI7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IExvZ2dlcjtcblxuLyoqKi8gfSksXG4vKiAxNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnBhcnNlUGFkZGluZyA9IGV4cG9ydHMuUEFERElOR19TSURFUyA9IHVuZGVmaW5lZDtcblxudmFyIF9MZW5ndGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG52YXIgX0xlbmd0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MZW5ndGgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgUEFERElOR19TSURFUyA9IGV4cG9ydHMuUEFERElOR19TSURFUyA9IHtcbiAgICBUT1A6IDAsXG4gICAgUklHSFQ6IDEsXG4gICAgQk9UVE9NOiAyLFxuICAgIExFRlQ6IDNcbn07XG5cbnZhciBTSURFUyA9IFsndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J107XG5cbnZhciBwYXJzZVBhZGRpbmcgPSBleHBvcnRzLnBhcnNlUGFkZGluZyA9IGZ1bmN0aW9uIHBhcnNlUGFkZGluZyhzdHlsZSkge1xuICAgIHJldHVybiBTSURFUy5tYXAoZnVuY3Rpb24gKHNpZGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBfTGVuZ3RoMi5kZWZhdWx0KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctJyArIHNpZGUpKTtcbiAgICB9KTtcbn07XG5cbi8qKiovIH0pLFxuLyogMTggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xudmFyIE9WRVJGTE9XX1dSQVAgPSBleHBvcnRzLk9WRVJGTE9XX1dSQVAgPSB7XG4gICAgTk9STUFMOiAwLFxuICAgIEJSRUFLX1dPUkQ6IDFcbn07XG5cbnZhciBwYXJzZU92ZXJmbG93V3JhcCA9IGV4cG9ydHMucGFyc2VPdmVyZmxvd1dyYXAgPSBmdW5jdGlvbiBwYXJzZU92ZXJmbG93V3JhcChvdmVyZmxvdykge1xuICAgIHN3aXRjaCAob3ZlcmZsb3cpIHtcbiAgICAgICAgY2FzZSAnYnJlYWstd29yZCc6XG4gICAgICAgICAgICByZXR1cm4gT1ZFUkZMT1dfV1JBUC5CUkVBS19XT1JEO1xuICAgICAgICBjYXNlICdub3JtYWwnOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIE9WRVJGTE9XX1dSQVAuTk9STUFMO1xuICAgIH1cbn07XG5cbi8qKiovIH0pLFxuLyogMTkgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xudmFyIFBPU0lUSU9OID0gZXhwb3J0cy5QT1NJVElPTiA9IHtcbiAgICBTVEFUSUM6IDAsXG4gICAgUkVMQVRJVkU6IDEsXG4gICAgQUJTT0xVVEU6IDIsXG4gICAgRklYRUQ6IDMsXG4gICAgU1RJQ0tZOiA0XG59O1xuXG52YXIgcGFyc2VQb3NpdGlvbiA9IGV4cG9ydHMucGFyc2VQb3NpdGlvbiA9IGZ1bmN0aW9uIHBhcnNlUG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICBzd2l0Y2ggKHBvc2l0aW9uKSB7XG4gICAgICAgIGNhc2UgJ3JlbGF0aXZlJzpcbiAgICAgICAgICAgIHJldHVybiBQT1NJVElPTi5SRUxBVElWRTtcbiAgICAgICAgY2FzZSAnYWJzb2x1dGUnOlxuICAgICAgICAgICAgcmV0dXJuIFBPU0lUSU9OLkFCU09MVVRFO1xuICAgICAgICBjYXNlICdmaXhlZCc6XG4gICAgICAgICAgICByZXR1cm4gUE9TSVRJT04uRklYRUQ7XG4gICAgICAgIGNhc2UgJ3N0aWNreSc6XG4gICAgICAgICAgICByZXR1cm4gUE9TSVRJT04uU1RJQ0tZO1xuICAgIH1cblxuICAgIHJldHVybiBQT1NJVElPTi5TVEFUSUM7XG59O1xuXG4vKioqLyB9KSxcbi8qIDIwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbnZhciBURVhUX1RSQU5TRk9STSA9IGV4cG9ydHMuVEVYVF9UUkFOU0ZPUk0gPSB7XG4gICAgTk9ORTogMCxcbiAgICBMT1dFUkNBU0U6IDEsXG4gICAgVVBQRVJDQVNFOiAyLFxuICAgIENBUElUQUxJWkU6IDNcbn07XG5cbnZhciBwYXJzZVRleHRUcmFuc2Zvcm0gPSBleHBvcnRzLnBhcnNlVGV4dFRyYW5zZm9ybSA9IGZ1bmN0aW9uIHBhcnNlVGV4dFRyYW5zZm9ybSh0ZXh0VHJhbnNmb3JtKSB7XG4gICAgc3dpdGNoICh0ZXh0VHJhbnNmb3JtKSB7XG4gICAgICAgIGNhc2UgJ3VwcGVyY2FzZSc6XG4gICAgICAgICAgICByZXR1cm4gVEVYVF9UUkFOU0ZPUk0uVVBQRVJDQVNFO1xuICAgICAgICBjYXNlICdsb3dlcmNhc2UnOlxuICAgICAgICAgICAgcmV0dXJuIFRFWFRfVFJBTlNGT1JNLkxPV0VSQ0FTRTtcbiAgICAgICAgY2FzZSAnY2FwaXRhbGl6ZSc6XG4gICAgICAgICAgICByZXR1cm4gVEVYVF9UUkFOU0ZPUk0uQ0FQSVRBTElaRTtcbiAgICB9XG5cbiAgICByZXR1cm4gVEVYVF9UUkFOU0ZPUk0uTk9ORTtcbn07XG5cbi8qKiovIH0pLFxuLyogMjEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZWZvcm1hdElucHV0Qm91bmRzID0gZXhwb3J0cy5pbmxpbmVTZWxlY3RFbGVtZW50ID0gZXhwb3J0cy5pbmxpbmVUZXh0QXJlYUVsZW1lbnQgPSBleHBvcnRzLmlubGluZUlucHV0RWxlbWVudCA9IGV4cG9ydHMuZ2V0SW5wdXRCb3JkZXJSYWRpdXMgPSBleHBvcnRzLklOUFVUX0JBQ0tHUk9VTkQgPSBleHBvcnRzLklOUFVUX0JPUkRFUlMgPSBleHBvcnRzLklOUFVUX0NPTE9SID0gdW5kZWZpbmVkO1xuXG52YXIgX1RleHRDb250YWluZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpO1xuXG52YXIgX1RleHRDb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGV4dENvbnRhaW5lcik7XG5cbnZhciBfYmFja2dyb3VuZCA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cbnZhciBfYm9yZGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMik7XG5cbnZhciBfQ2lyY2xlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1MCk7XG5cbnZhciBfQ2lyY2xlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NpcmNsZSk7XG5cbnZhciBfVmVjdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcblxudmFyIF9WZWN0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVmVjdG9yKTtcblxudmFyIF9Db2xvciA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBfQ29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29sb3IpO1xuXG52YXIgX0xlbmd0aCA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cbnZhciBfTGVuZ3RoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xlbmd0aCk7XG5cbnZhciBfQm91bmRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxudmFyIF9UZXh0Qm91bmRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMik7XG5cbnZhciBfVXRpbCA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBJTlBVVF9DT0xPUiA9IGV4cG9ydHMuSU5QVVRfQ09MT1IgPSBuZXcgX0NvbG9yMi5kZWZhdWx0KFs0MiwgNDIsIDQyXSk7XG52YXIgSU5QVVRfQk9SREVSX0NPTE9SID0gbmV3IF9Db2xvcjIuZGVmYXVsdChbMTY1LCAxNjUsIDE2NV0pO1xudmFyIElOUFVUX0JBQ0tHUk9VTkRfQ09MT1IgPSBuZXcgX0NvbG9yMi5kZWZhdWx0KFsyMjIsIDIyMiwgMjIyXSk7XG52YXIgSU5QVVRfQk9SREVSID0ge1xuICAgIGJvcmRlcldpZHRoOiAxLFxuICAgIGJvcmRlckNvbG9yOiBJTlBVVF9CT1JERVJfQ09MT1IsXG4gICAgYm9yZGVyU3R5bGU6IF9ib3JkZXIuQk9SREVSX1NUWUxFLlNPTElEXG59O1xudmFyIElOUFVUX0JPUkRFUlMgPSBleHBvcnRzLklOUFVUX0JPUkRFUlMgPSBbSU5QVVRfQk9SREVSLCBJTlBVVF9CT1JERVIsIElOUFVUX0JPUkRFUiwgSU5QVVRfQk9SREVSXTtcbnZhciBJTlBVVF9CQUNLR1JPVU5EID0gZXhwb3J0cy5JTlBVVF9CQUNLR1JPVU5EID0ge1xuICAgIGJhY2tncm91bmRDb2xvcjogSU5QVVRfQkFDS0dST1VORF9DT0xPUixcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IFtdLFxuICAgIGJhY2tncm91bmRDbGlwOiBfYmFja2dyb3VuZC5CQUNLR1JPVU5EX0NMSVAuUEFERElOR19CT1gsXG4gICAgYmFja2dyb3VuZE9yaWdpbjogX2JhY2tncm91bmQuQkFDS0dST1VORF9PUklHSU4uUEFERElOR19CT1hcbn07XG5cbnZhciBSQURJT19CT1JERVJfUkFESVVTID0gbmV3IF9MZW5ndGgyLmRlZmF1bHQoJzUwJScpO1xudmFyIFJBRElPX0JPUkRFUl9SQURJVVNfVFVQTEUgPSBbUkFESU9fQk9SREVSX1JBRElVUywgUkFESU9fQk9SREVSX1JBRElVU107XG52YXIgSU5QVVRfUkFESU9fQk9SREVSX1JBRElVUyA9IFtSQURJT19CT1JERVJfUkFESVVTX1RVUExFLCBSQURJT19CT1JERVJfUkFESVVTX1RVUExFLCBSQURJT19CT1JERVJfUkFESVVTX1RVUExFLCBSQURJT19CT1JERVJfUkFESVVTX1RVUExFXTtcblxudmFyIENIRUNLQk9YX0JPUkRFUl9SQURJVVMgPSBuZXcgX0xlbmd0aDIuZGVmYXVsdCgnM3B4Jyk7XG52YXIgQ0hFQ0tCT1hfQk9SREVSX1JBRElVU19UVVBMRSA9IFtDSEVDS0JPWF9CT1JERVJfUkFESVVTLCBDSEVDS0JPWF9CT1JERVJfUkFESVVTXTtcbnZhciBJTlBVVF9DSEVDS0JPWF9CT1JERVJfUkFESVVTID0gW0NIRUNLQk9YX0JPUkRFUl9SQURJVVNfVFVQTEUsIENIRUNLQk9YX0JPUkRFUl9SQURJVVNfVFVQTEUsIENIRUNLQk9YX0JPUkRFUl9SQURJVVNfVFVQTEUsIENIRUNLQk9YX0JPUkRFUl9SQURJVVNfVFVQTEVdO1xuXG52YXIgZ2V0SW5wdXRCb3JkZXJSYWRpdXMgPSBleHBvcnRzLmdldElucHV0Qm9yZGVyUmFkaXVzID0gZnVuY3Rpb24gZ2V0SW5wdXRCb3JkZXJSYWRpdXMobm9kZSkge1xuICAgIHJldHVybiBub2RlLnR5cGUgPT09ICdyYWRpbycgPyBJTlBVVF9SQURJT19CT1JERVJfUkFESVVTIDogSU5QVVRfQ0hFQ0tCT1hfQk9SREVSX1JBRElVUztcbn07XG5cbnZhciBpbmxpbmVJbnB1dEVsZW1lbnQgPSBleHBvcnRzLmlubGluZUlucHV0RWxlbWVudCA9IGZ1bmN0aW9uIGlubGluZUlucHV0RWxlbWVudChub2RlLCBjb250YWluZXIpIHtcbiAgICBpZiAobm9kZS50eXBlID09PSAncmFkaW8nIHx8IG5vZGUudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICBpZiAobm9kZS5jaGVja2VkKSB7XG4gICAgICAgICAgICB2YXIgc2l6ZSA9IE1hdGgubWluKGNvbnRhaW5lci5ib3VuZHMud2lkdGgsIGNvbnRhaW5lci5ib3VuZHMuaGVpZ2h0KTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5jaGlsZE5vZGVzLnB1c2gobm9kZS50eXBlID09PSAnY2hlY2tib3gnID8gW25ldyBfVmVjdG9yMi5kZWZhdWx0KGNvbnRhaW5lci5ib3VuZHMubGVmdCArIHNpemUgKiAwLjM5MzYzLCBjb250YWluZXIuYm91bmRzLnRvcCArIHNpemUgKiAwLjc5KSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoY29udGFpbmVyLmJvdW5kcy5sZWZ0ICsgc2l6ZSAqIDAuMTYsIGNvbnRhaW5lci5ib3VuZHMudG9wICsgc2l6ZSAqIDAuNTU0OSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KGNvbnRhaW5lci5ib3VuZHMubGVmdCArIHNpemUgKiAwLjI3MzQ3LCBjb250YWluZXIuYm91bmRzLnRvcCArIHNpemUgKiAwLjQ0MDcxKSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoY29udGFpbmVyLmJvdW5kcy5sZWZ0ICsgc2l6ZSAqIDAuMzk2OTQsIGNvbnRhaW5lci5ib3VuZHMudG9wICsgc2l6ZSAqIDAuNTY0OSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KGNvbnRhaW5lci5ib3VuZHMubGVmdCArIHNpemUgKiAwLjcyOTgzLCBjb250YWluZXIuYm91bmRzLnRvcCArIHNpemUgKiAwLjIzKSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoY29udGFpbmVyLmJvdW5kcy5sZWZ0ICsgc2l6ZSAqIDAuODQsIGNvbnRhaW5lci5ib3VuZHMudG9wICsgc2l6ZSAqIDAuMzQwODUpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdChjb250YWluZXIuYm91bmRzLmxlZnQgKyBzaXplICogMC4zOTM2MywgY29udGFpbmVyLmJvdW5kcy50b3AgKyBzaXplICogMC43OSldIDogbmV3IF9DaXJjbGUyLmRlZmF1bHQoY29udGFpbmVyLmJvdW5kcy5sZWZ0ICsgc2l6ZSAvIDQsIGNvbnRhaW5lci5ib3VuZHMudG9wICsgc2l6ZSAvIDQsIHNpemUgLyA0KSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpbmxpbmVGb3JtRWxlbWVudChnZXRJbnB1dFZhbHVlKG5vZGUpLCBub2RlLCBjb250YWluZXIsIGZhbHNlKTtcbiAgICB9XG59O1xuXG52YXIgaW5saW5lVGV4dEFyZWFFbGVtZW50ID0gZXhwb3J0cy5pbmxpbmVUZXh0QXJlYUVsZW1lbnQgPSBmdW5jdGlvbiBpbmxpbmVUZXh0QXJlYUVsZW1lbnQobm9kZSwgY29udGFpbmVyKSB7XG4gICAgaW5saW5lRm9ybUVsZW1lbnQobm9kZS52YWx1ZSwgbm9kZSwgY29udGFpbmVyLCB0cnVlKTtcbn07XG5cbnZhciBpbmxpbmVTZWxlY3RFbGVtZW50ID0gZXhwb3J0cy5pbmxpbmVTZWxlY3RFbGVtZW50ID0gZnVuY3Rpb24gaW5saW5lU2VsZWN0RWxlbWVudChub2RlLCBjb250YWluZXIpIHtcbiAgICB2YXIgb3B0aW9uID0gbm9kZS5vcHRpb25zW25vZGUuc2VsZWN0ZWRJbmRleCB8fCAwXTtcbiAgICBpbmxpbmVGb3JtRWxlbWVudChvcHRpb24gPyBvcHRpb24udGV4dCB8fCAnJyA6ICcnLCBub2RlLCBjb250YWluZXIsIGZhbHNlKTtcbn07XG5cbnZhciByZWZvcm1hdElucHV0Qm91bmRzID0gZXhwb3J0cy5yZWZvcm1hdElucHV0Qm91bmRzID0gZnVuY3Rpb24gcmVmb3JtYXRJbnB1dEJvdW5kcyhib3VuZHMpIHtcbiAgICBpZiAoYm91bmRzLndpZHRoID4gYm91bmRzLmhlaWdodCkge1xuICAgICAgICBib3VuZHMubGVmdCArPSAoYm91bmRzLndpZHRoIC0gYm91bmRzLmhlaWdodCkgLyAyO1xuICAgICAgICBib3VuZHMud2lkdGggPSBib3VuZHMuaGVpZ2h0O1xuICAgIH0gZWxzZSBpZiAoYm91bmRzLndpZHRoIDwgYm91bmRzLmhlaWdodCkge1xuICAgICAgICBib3VuZHMudG9wICs9IChib3VuZHMuaGVpZ2h0IC0gYm91bmRzLndpZHRoKSAvIDI7XG4gICAgICAgIGJvdW5kcy5oZWlnaHQgPSBib3VuZHMud2lkdGg7XG4gICAgfVxuICAgIHJldHVybiBib3VuZHM7XG59O1xuXG52YXIgaW5saW5lRm9ybUVsZW1lbnQgPSBmdW5jdGlvbiBpbmxpbmVGb3JtRWxlbWVudCh2YWx1ZSwgbm9kZSwgY29udGFpbmVyLCBhbGxvd0xpbmVicmVhaykge1xuICAgIHZhciBib2R5ID0gbm9kZS5vd25lckRvY3VtZW50LmJvZHk7XG4gICAgaWYgKHZhbHVlLmxlbmd0aCA+IDAgJiYgYm9keSkge1xuICAgICAgICB2YXIgd3JhcHBlciA9IG5vZGUub3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KCdodG1sMmNhbnZhc3dyYXBwZXInKTtcbiAgICAgICAgKDAsIF9VdGlsLmNvcHlDU1NTdHlsZXMpKG5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKG5vZGUsIG51bGwpLCB3cmFwcGVyKTtcbiAgICAgICAgd3JhcHBlci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIHdyYXBwZXIuc3R5bGUubGVmdCA9IGNvbnRhaW5lci5ib3VuZHMubGVmdCArICdweCc7XG4gICAgICAgIHdyYXBwZXIuc3R5bGUudG9wID0gY29udGFpbmVyLmJvdW5kcy50b3AgKyAncHgnO1xuICAgICAgICBpZiAoIWFsbG93TGluZWJyZWFrKSB7XG4gICAgICAgICAgICB3cmFwcGVyLnN0eWxlLndoaXRlU3BhY2UgPSAnbm93cmFwJztcbiAgICAgICAgfVxuICAgICAgICB2YXIgdGV4dCA9IG5vZGUub3duZXJEb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSk7XG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG4gICAgICAgIGNvbnRhaW5lci5jaGlsZE5vZGVzLnB1c2goX1RleHRDb250YWluZXIyLmRlZmF1bHQuZnJvbVRleHROb2RlKHRleHQsIGNvbnRhaW5lcikpO1xuICAgICAgICBib2R5LnJlbW92ZUNoaWxkKHdyYXBwZXIpO1xuICAgIH1cbn07XG5cbnZhciBnZXRJbnB1dFZhbHVlID0gZnVuY3Rpb24gZ2V0SW5wdXRWYWx1ZShub2RlKSB7XG4gICAgdmFyIHZhbHVlID0gbm9kZS50eXBlID09PSAncGFzc3dvcmQnID8gbmV3IEFycmF5KG5vZGUudmFsdWUubGVuZ3RoICsgMSkuam9pbignXFx1MjAyMicpIDogbm9kZS52YWx1ZTtcblxuICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPT09IDAgPyBub2RlLnBsYWNlaG9sZGVyIHx8ICcnIDogdmFsdWU7XG59O1xuXG4vKioqLyB9KSxcbi8qIDIyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucGFyc2VUZXh0Qm91bmRzID0gZXhwb3J0cy5UZXh0Qm91bmRzID0gdW5kZWZpbmVkO1xuXG52YXIgX0JvdW5kcyA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cbnZhciBfdGV4dERlY29yYXRpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKTtcblxudmFyIF9GZWF0dXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMCk7XG5cbnZhciBfRmVhdHVyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9GZWF0dXJlKTtcblxudmFyIF9Vbmljb2RlID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBUZXh0Qm91bmRzID0gZXhwb3J0cy5UZXh0Qm91bmRzID0gZnVuY3Rpb24gVGV4dEJvdW5kcyh0ZXh0LCBib3VuZHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGV4dEJvdW5kcyk7XG5cbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgIHRoaXMuYm91bmRzID0gYm91bmRzO1xufTtcblxudmFyIHBhcnNlVGV4dEJvdW5kcyA9IGV4cG9ydHMucGFyc2VUZXh0Qm91bmRzID0gZnVuY3Rpb24gcGFyc2VUZXh0Qm91bmRzKHZhbHVlLCBwYXJlbnQsIG5vZGUpIHtcbiAgICB2YXIgbGV0dGVyUmVuZGVyaW5nID0gcGFyZW50LnN0eWxlLmxldHRlclNwYWNpbmcgIT09IDA7XG4gICAgdmFyIHRleHRMaXN0ID0gbGV0dGVyUmVuZGVyaW5nID8gKDAsIF9Vbmljb2RlLnRvQ29kZVBvaW50cykodmFsdWUpLm1hcChmdW5jdGlvbiAoaSkge1xuICAgICAgICByZXR1cm4gKDAsIF9Vbmljb2RlLmZyb21Db2RlUG9pbnQpKGkpO1xuICAgIH0pIDogKDAsIF9Vbmljb2RlLmJyZWFrV29yZHMpKHZhbHVlLCBwYXJlbnQpO1xuICAgIHZhciBsZW5ndGggPSB0ZXh0TGlzdC5sZW5ndGg7XG4gICAgdmFyIGRlZmF1bHRWaWV3ID0gbm9kZS5wYXJlbnROb2RlID8gbm9kZS5wYXJlbnROb2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgOiBudWxsO1xuICAgIHZhciBzY3JvbGxYID0gZGVmYXVsdFZpZXcgPyBkZWZhdWx0Vmlldy5wYWdlWE9mZnNldCA6IDA7XG4gICAgdmFyIHNjcm9sbFkgPSBkZWZhdWx0VmlldyA/IGRlZmF1bHRWaWV3LnBhZ2VZT2Zmc2V0IDogMDtcbiAgICB2YXIgdGV4dEJvdW5kcyA9IFtdO1xuICAgIHZhciBvZmZzZXQgPSAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHRleHQgPSB0ZXh0TGlzdFtpXTtcbiAgICAgICAgaWYgKHBhcmVudC5zdHlsZS50ZXh0RGVjb3JhdGlvbiAhPT0gX3RleHREZWNvcmF0aW9uLlRFWFRfREVDT1JBVElPTi5OT05FIHx8IHRleHQudHJpbSgpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmIChfRmVhdHVyZTIuZGVmYXVsdC5TVVBQT1JUX1JBTkdFX0JPVU5EUykge1xuICAgICAgICAgICAgICAgIHRleHRCb3VuZHMucHVzaChuZXcgVGV4dEJvdW5kcyh0ZXh0LCBnZXRSYW5nZUJvdW5kcyhub2RlLCBvZmZzZXQsIHRleHQubGVuZ3RoLCBzY3JvbGxYLCBzY3JvbGxZKSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVwbGFjZW1lbnROb2RlID0gbm9kZS5zcGxpdFRleHQodGV4dC5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIHRleHRCb3VuZHMucHVzaChuZXcgVGV4dEJvdW5kcyh0ZXh0LCBnZXRXcmFwcGVyQm91bmRzKG5vZGUsIHNjcm9sbFgsIHNjcm9sbFkpKSk7XG4gICAgICAgICAgICAgICAgbm9kZSA9IHJlcGxhY2VtZW50Tm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICghX0ZlYXR1cmUyLmRlZmF1bHQuU1VQUE9SVF9SQU5HRV9CT1VORFMpIHtcbiAgICAgICAgICAgIG5vZGUgPSBub2RlLnNwbGl0VGV4dCh0ZXh0Lmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgb2Zmc2V0ICs9IHRleHQubGVuZ3RoO1xuICAgIH1cbiAgICByZXR1cm4gdGV4dEJvdW5kcztcbn07XG5cbnZhciBnZXRXcmFwcGVyQm91bmRzID0gZnVuY3Rpb24gZ2V0V3JhcHBlckJvdW5kcyhub2RlLCBzY3JvbGxYLCBzY3JvbGxZKSB7XG4gICAgdmFyIHdyYXBwZXIgPSBub2RlLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHRtbDJjYW52YXN3cmFwcGVyJyk7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChub2RlLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgdmFyIHBhcmVudE5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgaWYgKHBhcmVudE5vZGUpIHtcbiAgICAgICAgcGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQod3JhcHBlciwgbm9kZSk7XG4gICAgICAgIHZhciBib3VuZHMgPSAoMCwgX0JvdW5kcy5wYXJzZUJvdW5kcykod3JhcHBlciwgc2Nyb2xsWCwgc2Nyb2xsWSk7XG4gICAgICAgIGlmICh3cmFwcGVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHdyYXBwZXIuZmlyc3RDaGlsZCwgd3JhcHBlcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJvdW5kcztcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBfQm91bmRzLkJvdW5kcygwLCAwLCAwLCAwKTtcbn07XG5cbnZhciBnZXRSYW5nZUJvdW5kcyA9IGZ1bmN0aW9uIGdldFJhbmdlQm91bmRzKG5vZGUsIG9mZnNldCwgbGVuZ3RoLCBzY3JvbGxYLCBzY3JvbGxZKSB7XG4gICAgdmFyIHJhbmdlID0gbm9kZS5vd25lckRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgcmFuZ2Uuc2V0U3RhcnQobm9kZSwgb2Zmc2V0KTtcbiAgICByYW5nZS5zZXRFbmQobm9kZSwgb2Zmc2V0ICsgbGVuZ3RoKTtcbiAgICByZXR1cm4gX0JvdW5kcy5Cb3VuZHMuZnJvbUNsaWVudFJlY3QocmFuZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksIHNjcm9sbFgsIHNjcm9sbFkpO1xufTtcblxuLyoqKi8gfSksXG4vKiAyMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBGb3JlaWduT2JqZWN0UmVuZGVyZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRm9yZWlnbk9iamVjdFJlbmRlcmVyKGVsZW1lbnQpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZvcmVpZ25PYmplY3RSZW5kZXJlcik7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoRm9yZWlnbk9iamVjdFJlbmRlcmVyLCBbe1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSBNYXRoLmZsb29yKG9wdGlvbnMud2lkdGgpICogb3B0aW9ucy5zY2FsZTtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IE1hdGguZmxvb3Iob3B0aW9ucy5oZWlnaHQpICogb3B0aW9ucy5zY2FsZTtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLndpZHRoID0gb3B0aW9ucy53aWR0aCArICdweCc7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5oZWlnaHQgPSBvcHRpb25zLmhlaWdodCArICdweCc7XG5cbiAgICAgICAgICAgIG9wdGlvbnMubG9nZ2VyLmxvZygnRm9yZWlnbk9iamVjdCByZW5kZXJlciBpbml0aWFsaXplZCAoJyArIG9wdGlvbnMud2lkdGggKyAneCcgKyBvcHRpb25zLmhlaWdodCArICcgYXQgJyArIG9wdGlvbnMueCArICcsJyArIG9wdGlvbnMueSArICcpIHdpdGggc2NhbGUgJyArIG9wdGlvbnMuc2NhbGUpO1xuICAgICAgICAgICAgdmFyIHN2ZyA9IGNyZWF0ZUZvcmVpZ25PYmplY3RTVkcoTWF0aC5tYXgob3B0aW9ucy53aW5kb3dXaWR0aCwgb3B0aW9ucy53aWR0aCkgKiBvcHRpb25zLnNjYWxlLCBNYXRoLm1heChvcHRpb25zLndpbmRvd0hlaWdodCwgb3B0aW9ucy5oZWlnaHQpICogb3B0aW9ucy5zY2FsZSwgb3B0aW9ucy5zY3JvbGxYICogb3B0aW9ucy5zY2FsZSwgb3B0aW9ucy5zY3JvbGxZICogb3B0aW9ucy5zY2FsZSwgdGhpcy5lbGVtZW50KTtcblxuICAgICAgICAgICAgcmV0dXJuIGxvYWRTZXJpYWxpemVkU1ZHKHN2ZykudGhlbihmdW5jdGlvbiAoaW1nKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuYmFja2dyb3VuZENvbG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmN0eC5maWxsU3R5bGUgPSBvcHRpb25zLmJhY2tncm91bmRDb2xvci50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgb3B0aW9ucy53aWR0aCAqIG9wdGlvbnMuc2NhbGUsIG9wdGlvbnMuaGVpZ2h0ICogb3B0aW9ucy5zY2FsZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgX3RoaXMuY3R4LmRyYXdJbWFnZShpbWcsIC1vcHRpb25zLnggKiBvcHRpb25zLnNjYWxlLCAtb3B0aW9ucy55ICogb3B0aW9ucy5zY2FsZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmNhbnZhcztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEZvcmVpZ25PYmplY3RSZW5kZXJlcjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRm9yZWlnbk9iamVjdFJlbmRlcmVyO1xudmFyIGNyZWF0ZUZvcmVpZ25PYmplY3RTVkcgPSBleHBvcnRzLmNyZWF0ZUZvcmVpZ25PYmplY3RTVkcgPSBmdW5jdGlvbiBjcmVhdGVGb3JlaWduT2JqZWN0U1ZHKHdpZHRoLCBoZWlnaHQsIHgsIHksIG5vZGUpIHtcbiAgICB2YXIgeG1sbnMgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xuICAgIHZhciBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoeG1sbnMsICdzdmcnKTtcbiAgICB2YXIgZm9yZWlnbk9iamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyh4bWxucywgJ2ZvcmVpZ25PYmplY3QnKTtcbiAgICBzdmcuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3dpZHRoJywgd2lkdGgpO1xuICAgIHN2Zy5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnaGVpZ2h0JywgaGVpZ2h0KTtcblxuICAgIGZvcmVpZ25PYmplY3Quc2V0QXR0cmlidXRlTlMobnVsbCwgJ3dpZHRoJywgJzEwMCUnKTtcbiAgICBmb3JlaWduT2JqZWN0LnNldEF0dHJpYnV0ZU5TKG51bGwsICdoZWlnaHQnLCAnMTAwJScpO1xuICAgIGZvcmVpZ25PYmplY3Quc2V0QXR0cmlidXRlTlMobnVsbCwgJ3gnLCB4KTtcbiAgICBmb3JlaWduT2JqZWN0LnNldEF0dHJpYnV0ZU5TKG51bGwsICd5JywgeSk7XG4gICAgZm9yZWlnbk9iamVjdC5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnZXh0ZXJuYWxSZXNvdXJjZXNSZXF1aXJlZCcsICd0cnVlJyk7XG4gICAgc3ZnLmFwcGVuZENoaWxkKGZvcmVpZ25PYmplY3QpO1xuXG4gICAgZm9yZWlnbk9iamVjdC5hcHBlbmRDaGlsZChub2RlKTtcblxuICAgIHJldHVybiBzdmc7XG59O1xuXG52YXIgbG9hZFNlcmlhbGl6ZWRTVkcgPSBleHBvcnRzLmxvYWRTZXJpYWxpemVkU1ZHID0gZnVuY3Rpb24gbG9hZFNlcmlhbGl6ZWRTVkcoc3ZnKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoaW1nKTtcbiAgICAgICAgfTtcbiAgICAgICAgaW1nLm9uZXJyb3IgPSByZWplY3Q7XG5cbiAgICAgICAgaW1nLnNyYyA9ICdkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwnICsgZW5jb2RlVVJJQ29tcG9uZW50KG5ldyBYTUxTZXJpYWxpemVyKCkuc2VyaWFsaXplVG9TdHJpbmcoc3ZnKSk7XG4gICAgfSk7XG59O1xuXG4vKioqLyB9KSxcbi8qIDI0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuYnJlYWtXb3JkcyA9IGV4cG9ydHMuZnJvbUNvZGVQb2ludCA9IGV4cG9ydHMudG9Db2RlUG9pbnRzID0gdW5kZWZpbmVkO1xuXG52YXIgX2Nzc0xpbmVCcmVhayA9IF9fd2VicGFja19yZXF1aXJlX18oNDYpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3RvQ29kZVBvaW50cycsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gX2Nzc0xpbmVCcmVhay50b0NvZGVQb2ludHM7XG4gICAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2Zyb21Db2RlUG9pbnQnLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIF9jc3NMaW5lQnJlYWsuZnJvbUNvZGVQb2ludDtcbiAgICB9XG59KTtcblxudmFyIF9Ob2RlQ29udGFpbmVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblxudmFyIF9Ob2RlQ29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX05vZGVDb250YWluZXIpO1xuXG52YXIgX292ZXJmbG93V3JhcCA9IF9fd2VicGFja19yZXF1aXJlX18oMTgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgYnJlYWtXb3JkcyA9IGV4cG9ydHMuYnJlYWtXb3JkcyA9IGZ1bmN0aW9uIGJyZWFrV29yZHMoc3RyLCBwYXJlbnQpIHtcbiAgICB2YXIgYnJlYWtlciA9ICgwLCBfY3NzTGluZUJyZWFrLkxpbmVCcmVha2VyKShzdHIsIHtcbiAgICAgICAgbGluZUJyZWFrOiBwYXJlbnQuc3R5bGUubGluZUJyZWFrLFxuICAgICAgICB3b3JkQnJlYWs6IHBhcmVudC5zdHlsZS5vdmVyZmxvd1dyYXAgPT09IF9vdmVyZmxvd1dyYXAuT1ZFUkZMT1dfV1JBUC5CUkVBS19XT1JEID8gJ2JyZWFrLXdvcmQnIDogcGFyZW50LnN0eWxlLndvcmRCcmVha1xuICAgIH0pO1xuXG4gICAgdmFyIHdvcmRzID0gW107XG4gICAgdmFyIGJrID0gdm9pZCAwO1xuXG4gICAgd2hpbGUgKCEoYmsgPSBicmVha2VyLm5leHQoKSkuZG9uZSkge1xuICAgICAgICB3b3Jkcy5wdXNoKGJrLnZhbHVlLnNsaWNlKCkpO1xuICAgIH1cblxuICAgIHJldHVybiB3b3Jkcztcbn07XG5cbi8qKiovIH0pLFxuLyogMjUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5Gb250TWV0cmljcyA9IHVuZGVmaW5lZDtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9VdGlsID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFNBTVBMRV9URVhUID0gJ0hpZGRlbiBUZXh0JztcblxudmFyIEZvbnRNZXRyaWNzID0gZXhwb3J0cy5Gb250TWV0cmljcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBGb250TWV0cmljcyhkb2N1bWVudCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRm9udE1ldHJpY3MpO1xuXG4gICAgICAgIHRoaXMuX2RhdGEgPSB7fTtcbiAgICAgICAgdGhpcy5fZG9jdW1lbnQgPSBkb2N1bWVudDtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoRm9udE1ldHJpY3MsIFt7XG4gICAgICAgIGtleTogJ19wYXJzZU1ldHJpY3MnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3BhcnNlTWV0cmljcyhmb250KSB7XG4gICAgICAgICAgICB2YXIgY29udGFpbmVyID0gdGhpcy5fZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB2YXIgaW1nID0gdGhpcy5fZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICB2YXIgc3BhbiA9IHRoaXMuX2RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAgICAgICAgICAgdmFyIGJvZHkgPSB0aGlzLl9kb2N1bWVudC5ib2R5O1xuICAgICAgICAgICAgaWYgKCFib2R5KSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCB0cnVlID8gJ05vIGRvY3VtZW50IGZvdW5kIGZvciBmb250IG1ldHJpY3MnIDogJycpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLmZvbnRGYW1pbHkgPSBmb250LmZvbnRGYW1pbHk7XG4gICAgICAgICAgICBjb250YWluZXIuc3R5bGUuZm9udFNpemUgPSBmb250LmZvbnRTaXplO1xuICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLm1hcmdpbiA9ICcwJztcbiAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5wYWRkaW5nID0gJzAnO1xuXG4gICAgICAgICAgICBib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICAgICAgICAgIGltZy5zcmMgPSBfVXRpbC5TTUFMTF9JTUFHRTtcbiAgICAgICAgICAgIGltZy53aWR0aCA9IDE7XG4gICAgICAgICAgICBpbWcuaGVpZ2h0ID0gMTtcblxuICAgICAgICAgICAgaW1nLnN0eWxlLm1hcmdpbiA9ICcwJztcbiAgICAgICAgICAgIGltZy5zdHlsZS5wYWRkaW5nID0gJzAnO1xuICAgICAgICAgICAgaW1nLnN0eWxlLnZlcnRpY2FsQWxpZ24gPSAnYmFzZWxpbmUnO1xuXG4gICAgICAgICAgICBzcGFuLnN0eWxlLmZvbnRGYW1pbHkgPSBmb250LmZvbnRGYW1pbHk7XG4gICAgICAgICAgICBzcGFuLnN0eWxlLmZvbnRTaXplID0gZm9udC5mb250U2l6ZTtcbiAgICAgICAgICAgIHNwYW4uc3R5bGUubWFyZ2luID0gJzAnO1xuICAgICAgICAgICAgc3Bhbi5zdHlsZS5wYWRkaW5nID0gJzAnO1xuXG4gICAgICAgICAgICBzcGFuLmFwcGVuZENoaWxkKHRoaXMuX2RvY3VtZW50LmNyZWF0ZVRleHROb2RlKFNBTVBMRV9URVhUKSk7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgICAgICAgIHZhciBiYXNlbGluZSA9IGltZy5vZmZzZXRUb3AgLSBzcGFuLm9mZnNldFRvcCArIDI7XG5cbiAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChzcGFuKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLl9kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShTQU1QTEVfVEVYVCkpO1xuXG4gICAgICAgICAgICBjb250YWluZXIuc3R5bGUubGluZUhlaWdodCA9ICdub3JtYWwnO1xuICAgICAgICAgICAgaW1nLnN0eWxlLnZlcnRpY2FsQWxpZ24gPSAnc3VwZXInO1xuXG4gICAgICAgICAgICB2YXIgbWlkZGxlID0gaW1nLm9mZnNldFRvcCAtIGNvbnRhaW5lci5vZmZzZXRUb3AgKyAyO1xuXG4gICAgICAgICAgICBib2R5LnJlbW92ZUNoaWxkKGNvbnRhaW5lcik7XG5cbiAgICAgICAgICAgIHJldHVybiB7IGJhc2VsaW5lOiBiYXNlbGluZSwgbWlkZGxlOiBtaWRkbGUgfTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0TWV0cmljcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRNZXRyaWNzKGZvbnQpIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBmb250LmZvbnRGYW1pbHkgKyAnICcgKyBmb250LmZvbnRTaXplO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2RhdGFba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGF0YVtrZXldID0gdGhpcy5fcGFyc2VNZXRyaWNzKGZvbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVtrZXldO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEZvbnRNZXRyaWNzO1xufSgpO1xuXG4vKioqLyB9KSxcbi8qIDI2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuUHJveHkgPSB1bmRlZmluZWQ7XG5cbnZhciBfRmVhdHVyZSA9IF9fd2VicGFja19yZXF1aXJlX18oMTApO1xuXG52YXIgX0ZlYXR1cmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRmVhdHVyZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBQcm94eSA9IGV4cG9ydHMuUHJveHkgPSBmdW5jdGlvbiBQcm94eShzcmMsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMucHJveHkpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCB0cnVlID8gJ05vIHByb3h5IGRlZmluZWQnIDogbnVsbCk7XG4gICAgfVxuICAgIHZhciBwcm94eSA9IG9wdGlvbnMucHJveHk7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgcmVzcG9uc2VUeXBlID0gX0ZlYXR1cmUyLmRlZmF1bHQuU1VQUE9SVF9DT1JTX1hIUiAmJiBfRmVhdHVyZTIuZGVmYXVsdC5TVVBQT1JUX1JFU1BPTlNFX1RZUEUgPyAnYmxvYicgOiAndGV4dCc7XG4gICAgICAgIHZhciB4aHIgPSBfRmVhdHVyZTIuZGVmYXVsdC5TVVBQT1JUX0NPUlNfWEhSID8gbmV3IFhNTEh0dHBSZXF1ZXN0KCkgOiBuZXcgWERvbWFpblJlcXVlc3QoKTtcbiAgICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh4aHIgaW5zdGFuY2VvZiBYTUxIdHRwUmVxdWVzdCkge1xuICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHhoci5yZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHJlYWRlci5yZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoeGhyLnJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCggdHJ1ZSA/ICdGYWlsZWQgdG8gcHJveHkgcmVzb3VyY2UgJyArIHNyYy5zdWJzdHJpbmcoMCwgMjU2KSArICcgd2l0aCBzdGF0dXMgY29kZSAnICsgeGhyLnN0YXR1cyA6ICcnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgeGhyLm9uZXJyb3IgPSByZWplY3Q7XG4gICAgICAgIHhoci5vcGVuKCdHRVQnLCBwcm94eSArICc/dXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQoc3JjKSArICcmcmVzcG9uc2VUeXBlPScgKyByZXNwb25zZVR5cGUpO1xuXG4gICAgICAgIGlmIChyZXNwb25zZVR5cGUgIT09ICd0ZXh0JyAmJiB4aHIgaW5zdGFuY2VvZiBYTUxIdHRwUmVxdWVzdCkge1xuICAgICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IHJlc3BvbnNlVHlwZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLmltYWdlVGltZW91dCkge1xuICAgICAgICAgICAgdmFyIHRpbWVvdXQgPSBvcHRpb25zLmltYWdlVGltZW91dDtcbiAgICAgICAgICAgIHhoci50aW1lb3V0ID0gdGltZW91dDtcbiAgICAgICAgICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdCggdHJ1ZSA/ICdUaW1lZCBvdXQgKCcgKyB0aW1lb3V0ICsgJ21zKSBwcm94eWluZyAnICsgc3JjLnN1YnN0cmluZygwLCAyNTYpIDogJycpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHhoci5zZW5kKCk7XG4gICAgfSk7XG59O1xuXG4vKioqLyB9KSxcbi8qIDI3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfQ2FudmFzUmVuZGVyZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1KTtcblxudmFyIF9DYW52YXNSZW5kZXJlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9DYW52YXNSZW5kZXJlcik7XG5cbnZhciBfTG9nZ2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNik7XG5cbnZhciBfTG9nZ2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xvZ2dlcik7XG5cbnZhciBfV2luZG93ID0gX193ZWJwYWNrX3JlcXVpcmVfXygyOCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBodG1sMmNhbnZhcyA9IGZ1bmN0aW9uIGh0bWwyY2FudmFzKGVsZW1lbnQsIGNvbmYpIHtcbiAgICB2YXIgY29uZmlnID0gY29uZiB8fCB7fTtcbiAgICB2YXIgbG9nZ2VyID0gbmV3IF9Mb2dnZXIyLmRlZmF1bHQodHlwZW9mIGNvbmZpZy5sb2dnaW5nID09PSAnYm9vbGVhbicgPyBjb25maWcubG9nZ2luZyA6IHRydWUpO1xuICAgIGxvZ2dlci5sb2coJ2h0bWwyY2FudmFzICcgKyBcIjEuMC4wLWFscGhhLjEyXCIpO1xuXG4gICAgaWYgKHRydWUgJiYgdHlwZW9mIGNvbmZpZy5vbnJlbmRlcmVkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGxvZ2dlci5lcnJvcignb25yZW5kZXJlZCBvcHRpb24gaXMgZGVwcmVjYXRlZCwgaHRtbDJjYW52YXMgcmV0dXJucyBhIFByb21pc2Ugd2l0aCB0aGUgY2FudmFzIGFzIHRoZSB2YWx1ZScpO1xuICAgIH1cblxuICAgIHZhciBvd25lckRvY3VtZW50ID0gZWxlbWVudC5vd25lckRvY3VtZW50O1xuICAgIGlmICghb3duZXJEb2N1bWVudCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ1Byb3ZpZGVkIGVsZW1lbnQgaXMgbm90IHdpdGhpbiBhIERvY3VtZW50Jyk7XG4gICAgfVxuICAgIHZhciBkZWZhdWx0VmlldyA9IG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG5cbiAgICB2YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICBhbGxvd1RhaW50OiBmYWxzZSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgIGltYWdlVGltZW91dDogMTUwMDAsXG4gICAgICAgIGxvZ2dpbmc6IHRydWUsXG4gICAgICAgIHByb3h5OiBudWxsLFxuICAgICAgICByZW1vdmVDb250YWluZXI6IHRydWUsXG4gICAgICAgIGZvcmVpZ25PYmplY3RSZW5kZXJpbmc6IGZhbHNlLFxuICAgICAgICBzY2FsZTogZGVmYXVsdFZpZXcuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxLFxuICAgICAgICB0YXJnZXQ6IG5ldyBfQ2FudmFzUmVuZGVyZXIyLmRlZmF1bHQoY29uZmlnLmNhbnZhcyksXG4gICAgICAgIHVzZUNPUlM6IGZhbHNlLFxuICAgICAgICB3aW5kb3dXaWR0aDogZGVmYXVsdFZpZXcuaW5uZXJXaWR0aCxcbiAgICAgICAgd2luZG93SGVpZ2h0OiBkZWZhdWx0Vmlldy5pbm5lckhlaWdodCxcbiAgICAgICAgc2Nyb2xsWDogZGVmYXVsdFZpZXcucGFnZVhPZmZzZXQsXG4gICAgICAgIHNjcm9sbFk6IGRlZmF1bHRWaWV3LnBhZ2VZT2Zmc2V0XG4gICAgfTtcblxuICAgIHZhciByZXN1bHQgPSAoMCwgX1dpbmRvdy5yZW5kZXJFbGVtZW50KShlbGVtZW50LCBfZXh0ZW5kcyh7fSwgZGVmYXVsdE9wdGlvbnMsIGNvbmZpZyksIGxvZ2dlcik7XG5cbiAgICBpZiAodHJ1ZSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0LmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBsb2dnZXIuZXJyb3IoZSk7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmh0bWwyY2FudmFzLkNhbnZhc1JlbmRlcmVyID0gX0NhbnZhc1JlbmRlcmVyMi5kZWZhdWx0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGh0bWwyY2FudmFzO1xuXG4vKioqLyB9KSxcbi8qIDI4ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVuZGVyRWxlbWVudCA9IHVuZGVmaW5lZDtcblxudmFyIF9zbGljZWRUb0FycmF5ID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBzbGljZUl0ZXJhdG9yKGFyciwgaSkgeyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9IHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgcmV0dXJuIGFycjsgfSBlbHNlIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpIHsgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTsgfSBlbHNlIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7IH0gfTsgfSgpO1xuXG52YXIgX0xvZ2dlciA9IF9fd2VicGFja19yZXF1aXJlX18oMTYpO1xuXG52YXIgX0xvZ2dlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Mb2dnZXIpO1xuXG52YXIgX05vZGVQYXJzZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI5KTtcblxudmFyIF9SZW5kZXJlciA9IF9fd2VicGFja19yZXF1aXJlX18oNTEpO1xuXG52YXIgX1JlbmRlcmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JlbmRlcmVyKTtcblxudmFyIF9Gb3JlaWduT2JqZWN0UmVuZGVyZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIzKTtcblxudmFyIF9Gb3JlaWduT2JqZWN0UmVuZGVyZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRm9yZWlnbk9iamVjdFJlbmRlcmVyKTtcblxudmFyIF9GZWF0dXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMCk7XG5cbnZhciBfRmVhdHVyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9GZWF0dXJlKTtcblxudmFyIF9Cb3VuZHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG52YXIgX0Nsb25lID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1NCk7XG5cbnZhciBfRm9udCA9IF9fd2VicGFja19yZXF1aXJlX18oMjUpO1xuXG52YXIgX0NvbG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxudmFyIF9Db2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db2xvcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciByZW5kZXJFbGVtZW50ID0gZXhwb3J0cy5yZW5kZXJFbGVtZW50ID0gZnVuY3Rpb24gcmVuZGVyRWxlbWVudChlbGVtZW50LCBvcHRpb25zLCBsb2dnZXIpIHtcbiAgICB2YXIgb3duZXJEb2N1bWVudCA9IGVsZW1lbnQub3duZXJEb2N1bWVudDtcblxuICAgIHZhciB3aW5kb3dCb3VuZHMgPSBuZXcgX0JvdW5kcy5Cb3VuZHMob3B0aW9ucy5zY3JvbGxYLCBvcHRpb25zLnNjcm9sbFksIG9wdGlvbnMud2luZG93V2lkdGgsIG9wdGlvbnMud2luZG93SGVpZ2h0KTtcblxuICAgIC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL2NzczMtYmFja2dyb3VuZC8jc3BlY2lhbC1iYWNrZ3JvdW5kc1xuICAgIHZhciBkb2N1bWVudEJhY2tncm91bmRDb2xvciA9IG93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ID8gbmV3IF9Db2xvcjIuZGVmYXVsdChnZXRDb21wdXRlZFN0eWxlKG93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5iYWNrZ3JvdW5kQ29sb3IpIDogX0NvbG9yLlRSQU5TUEFSRU5UO1xuICAgIHZhciBib2R5QmFja2dyb3VuZENvbG9yID0gb3duZXJEb2N1bWVudC5ib2R5ID8gbmV3IF9Db2xvcjIuZGVmYXVsdChnZXRDb21wdXRlZFN0eWxlKG93bmVyRG9jdW1lbnQuYm9keSkuYmFja2dyb3VuZENvbG9yKSA6IF9Db2xvci5UUkFOU1BBUkVOVDtcblxuICAgIHZhciBiYWNrZ3JvdW5kQ29sb3IgPSBlbGVtZW50ID09PSBvd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCA/IGRvY3VtZW50QmFja2dyb3VuZENvbG9yLmlzVHJhbnNwYXJlbnQoKSA/IGJvZHlCYWNrZ3JvdW5kQ29sb3IuaXNUcmFuc3BhcmVudCgpID8gb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IgPyBuZXcgX0NvbG9yMi5kZWZhdWx0KG9wdGlvbnMuYmFja2dyb3VuZENvbG9yKSA6IG51bGwgOiBib2R5QmFja2dyb3VuZENvbG9yIDogZG9jdW1lbnRCYWNrZ3JvdW5kQ29sb3IgOiBvcHRpb25zLmJhY2tncm91bmRDb2xvciA/IG5ldyBfQ29sb3IyLmRlZmF1bHQob3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IpIDogbnVsbDtcblxuICAgIHJldHVybiAob3B0aW9ucy5mb3JlaWduT2JqZWN0UmVuZGVyaW5nID8gLy8gJEZsb3dGaXhNZVxuICAgIF9GZWF0dXJlMi5kZWZhdWx0LlNVUFBPUlRfRk9SRUlHTk9CSkVDVF9EUkFXSU5HIDogUHJvbWlzZS5yZXNvbHZlKGZhbHNlKSkudGhlbihmdW5jdGlvbiAoc3VwcG9ydEZvcmVpZ25PYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIHN1cHBvcnRGb3JlaWduT2JqZWN0ID8gZnVuY3Rpb24gKGNsb25lcikge1xuICAgICAgICAgICAgaWYgKHRydWUpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIubG9nKCdEb2N1bWVudCBjbG9uZWQsIHVzaW5nIGZvcmVpZ25PYmplY3QgcmVuZGVyaW5nJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjbG9uZXIuaW5saW5lRm9udHMob3duZXJEb2N1bWVudCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNsb25lci5yZXNvdXJjZUxvYWRlci5yZWFkeSgpO1xuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlbmRlcmVyID0gbmV3IF9Gb3JlaWduT2JqZWN0UmVuZGVyZXIyLmRlZmF1bHQoY2xvbmVyLmRvY3VtZW50RWxlbWVudCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgZGVmYXVsdFZpZXcgPSBvd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuICAgICAgICAgICAgICAgIHZhciBzY3JvbGxYID0gZGVmYXVsdFZpZXcucGFnZVhPZmZzZXQ7XG4gICAgICAgICAgICAgICAgdmFyIHNjcm9sbFkgPSBkZWZhdWx0Vmlldy5wYWdlWU9mZnNldDtcblxuICAgICAgICAgICAgICAgIHZhciBpc0RvY3VtZW50ID0gZWxlbWVudC50YWdOYW1lID09PSAnSFRNTCcgfHwgZWxlbWVudC50YWdOYW1lID09PSAnQk9EWSc7XG5cbiAgICAgICAgICAgICAgICB2YXIgX3JlZiA9IGlzRG9jdW1lbnQgPyAoMCwgX0JvdW5kcy5wYXJzZURvY3VtZW50U2l6ZSkob3duZXJEb2N1bWVudCkgOiAoMCwgX0JvdW5kcy5wYXJzZUJvdW5kcykoZWxlbWVudCwgc2Nyb2xsWCwgc2Nyb2xsWSksXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoID0gX3JlZi53aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gX3JlZi5oZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSBfcmVmLmxlZnQsXG4gICAgICAgICAgICAgICAgICAgIHRvcCA9IF9yZWYudG9wO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlcmVyLnJlbmRlcih7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYmFja2dyb3VuZENvbG9yLFxuICAgICAgICAgICAgICAgICAgICBsb2dnZXI6IGxvZ2dlcixcbiAgICAgICAgICAgICAgICAgICAgc2NhbGU6IG9wdGlvbnMuc2NhbGUsXG4gICAgICAgICAgICAgICAgICAgIHg6IHR5cGVvZiBvcHRpb25zLnggPT09ICdudW1iZXInID8gb3B0aW9ucy54IDogbGVmdCxcbiAgICAgICAgICAgICAgICAgICAgeTogdHlwZW9mIG9wdGlvbnMueSA9PT0gJ251bWJlcicgPyBvcHRpb25zLnkgOiB0b3AsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB0eXBlb2Ygb3B0aW9ucy53aWR0aCA9PT0gJ251bWJlcicgPyBvcHRpb25zLndpZHRoIDogTWF0aC5jZWlsKHdpZHRoKSxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB0eXBlb2Ygb3B0aW9ucy5oZWlnaHQgPT09ICdudW1iZXInID8gb3B0aW9ucy5oZWlnaHQgOiBNYXRoLmNlaWwoaGVpZ2h0KSxcbiAgICAgICAgICAgICAgICAgICAgd2luZG93V2lkdGg6IG9wdGlvbnMud2luZG93V2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvd0hlaWdodDogb3B0aW9ucy53aW5kb3dIZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFg6IG9wdGlvbnMuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsWTogb3B0aW9ucy5zY3JvbGxZXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfShuZXcgX0Nsb25lLkRvY3VtZW50Q2xvbmVyKGVsZW1lbnQsIG9wdGlvbnMsIGxvZ2dlciwgdHJ1ZSwgcmVuZGVyRWxlbWVudCkpIDogKDAsIF9DbG9uZS5jbG9uZVdpbmRvdykob3duZXJEb2N1bWVudCwgd2luZG93Qm91bmRzLCBlbGVtZW50LCBvcHRpb25zLCBsb2dnZXIsIHJlbmRlckVsZW1lbnQpLnRoZW4oZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICAgICAgICB2YXIgX3JlZjMgPSBfc2xpY2VkVG9BcnJheShfcmVmMiwgMyksXG4gICAgICAgICAgICAgICAgY29udGFpbmVyID0gX3JlZjNbMF0sXG4gICAgICAgICAgICAgICAgY2xvbmVkRWxlbWVudCA9IF9yZWYzWzFdLFxuICAgICAgICAgICAgICAgIHJlc291cmNlTG9hZGVyID0gX3JlZjNbMl07XG5cbiAgICAgICAgICAgIGlmICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmxvZygnRG9jdW1lbnQgY2xvbmVkLCB1c2luZyBjb21wdXRlZCByZW5kZXJpbmcnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHN0YWNrID0gKDAsIF9Ob2RlUGFyc2VyLk5vZGVQYXJzZXIpKGNsb25lZEVsZW1lbnQsIHJlc291cmNlTG9hZGVyLCBsb2dnZXIpO1xuICAgICAgICAgICAgdmFyIGNsb25lZERvY3VtZW50ID0gY2xvbmVkRWxlbWVudC5vd25lckRvY3VtZW50O1xuXG4gICAgICAgICAgICBpZiAoYmFja2dyb3VuZENvbG9yID09PSBzdGFjay5jb250YWluZXIuc3R5bGUuYmFja2dyb3VuZC5iYWNrZ3JvdW5kQ29sb3IpIHtcbiAgICAgICAgICAgICAgICBzdGFjay5jb250YWluZXIuc3R5bGUuYmFja2dyb3VuZC5iYWNrZ3JvdW5kQ29sb3IgPSBfQ29sb3IuVFJBTlNQQVJFTlQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZXNvdXJjZUxvYWRlci5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKGltYWdlU3RvcmUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZm9udE1ldHJpY3MgPSBuZXcgX0ZvbnQuRm9udE1ldHJpY3MoY2xvbmVkRG9jdW1lbnQpO1xuICAgICAgICAgICAgICAgIGlmICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5sb2coJ1N0YXJ0aW5nIHJlbmRlcmVyJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIGRlZmF1bHRWaWV3ID0gY2xvbmVkRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gICAgICAgICAgICAgICAgdmFyIHNjcm9sbFggPSBkZWZhdWx0Vmlldy5wYWdlWE9mZnNldDtcbiAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsWSA9IGRlZmF1bHRWaWV3LnBhZ2VZT2Zmc2V0O1xuXG4gICAgICAgICAgICAgICAgdmFyIGlzRG9jdW1lbnQgPSBjbG9uZWRFbGVtZW50LnRhZ05hbWUgPT09ICdIVE1MJyB8fCBjbG9uZWRFbGVtZW50LnRhZ05hbWUgPT09ICdCT0RZJztcblxuICAgICAgICAgICAgICAgIHZhciBfcmVmNCA9IGlzRG9jdW1lbnQgPyAoMCwgX0JvdW5kcy5wYXJzZURvY3VtZW50U2l6ZSkob3duZXJEb2N1bWVudCkgOiAoMCwgX0JvdW5kcy5wYXJzZUJvdW5kcykoY2xvbmVkRWxlbWVudCwgc2Nyb2xsWCwgc2Nyb2xsWSksXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoID0gX3JlZjQud2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IF9yZWY0LmhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgbGVmdCA9IF9yZWY0LmxlZnQsXG4gICAgICAgICAgICAgICAgICAgIHRvcCA9IF9yZWY0LnRvcDtcblxuICAgICAgICAgICAgICAgIHZhciByZW5kZXJPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJhY2tncm91bmRDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgZm9udE1ldHJpY3M6IGZvbnRNZXRyaWNzLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZVN0b3JlOiBpbWFnZVN0b3JlLFxuICAgICAgICAgICAgICAgICAgICBsb2dnZXI6IGxvZ2dlcixcbiAgICAgICAgICAgICAgICAgICAgc2NhbGU6IG9wdGlvbnMuc2NhbGUsXG4gICAgICAgICAgICAgICAgICAgIHg6IHR5cGVvZiBvcHRpb25zLnggPT09ICdudW1iZXInID8gb3B0aW9ucy54IDogbGVmdCxcbiAgICAgICAgICAgICAgICAgICAgeTogdHlwZW9mIG9wdGlvbnMueSA9PT0gJ251bWJlcicgPyBvcHRpb25zLnkgOiB0b3AsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB0eXBlb2Ygb3B0aW9ucy53aWR0aCA9PT0gJ251bWJlcicgPyBvcHRpb25zLndpZHRoIDogTWF0aC5jZWlsKHdpZHRoKSxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB0eXBlb2Ygb3B0aW9ucy5oZWlnaHQgPT09ICdudW1iZXInID8gb3B0aW9ucy5oZWlnaHQgOiBNYXRoLmNlaWwoaGVpZ2h0KVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zLnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKG9wdGlvbnMudGFyZ2V0Lm1hcChmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVuZGVyZXIgPSBuZXcgX1JlbmRlcmVyMi5kZWZhdWx0KHRhcmdldCwgcmVuZGVyT3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyZXIucmVuZGVyKHN0YWNrKTtcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZW5kZXJlciA9IG5ldyBfUmVuZGVyZXIyLmRlZmF1bHQob3B0aW9ucy50YXJnZXQsIHJlbmRlck9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2FudmFzID0gcmVuZGVyZXIucmVuZGVyKHN0YWNrKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMucmVtb3ZlQ29udGFpbmVyID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udGFpbmVyLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjb250YWluZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmxvZygnQ2Fubm90IGRldGFjaCBjbG9uZWQgaWZyYW1lIGFzIGl0IGlzIG5vdCBpbiB0aGUgRE9NIGFueW1vcmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYW52YXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcblxuLyoqKi8gfSksXG4vKiAyOSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLk5vZGVQYXJzZXIgPSB1bmRlZmluZWQ7XG5cbnZhciBfU3RhY2tpbmdDb250ZXh0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMCk7XG5cbnZhciBfU3RhY2tpbmdDb250ZXh0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1N0YWNraW5nQ29udGV4dCk7XG5cbnZhciBfTm9kZUNvbnRhaW5lciA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cbnZhciBfTm9kZUNvbnRhaW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ob2RlQ29udGFpbmVyKTtcblxudmFyIF9UZXh0Q29udGFpbmVyID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTtcblxudmFyIF9UZXh0Q29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RleHRDb250YWluZXIpO1xuXG52YXIgX0lucHV0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMSk7XG5cbnZhciBfTGlzdEl0ZW0gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE0KTtcblxudmFyIF9saXN0U3R5bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgTm9kZVBhcnNlciA9IGV4cG9ydHMuTm9kZVBhcnNlciA9IGZ1bmN0aW9uIE5vZGVQYXJzZXIobm9kZSwgcmVzb3VyY2VMb2FkZXIsIGxvZ2dlcikge1xuICAgIGlmICh0cnVlKSB7XG4gICAgICAgIGxvZ2dlci5sb2coJ1N0YXJ0aW5nIG5vZGUgcGFyc2luZycpO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IDA7XG5cbiAgICB2YXIgY29udGFpbmVyID0gbmV3IF9Ob2RlQ29udGFpbmVyMi5kZWZhdWx0KG5vZGUsIG51bGwsIHJlc291cmNlTG9hZGVyLCBpbmRleCsrKTtcbiAgICB2YXIgc3RhY2sgPSBuZXcgX1N0YWNraW5nQ29udGV4dDIuZGVmYXVsdChjb250YWluZXIsIG51bGwsIHRydWUpO1xuXG4gICAgcGFyc2VOb2RlVHJlZShub2RlLCBjb250YWluZXIsIHN0YWNrLCByZXNvdXJjZUxvYWRlciwgaW5kZXgpO1xuXG4gICAgaWYgKHRydWUpIHtcbiAgICAgICAgbG9nZ2VyLmxvZygnRmluaXNoZWQgcGFyc2luZyBub2RlIHRyZWUnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhY2s7XG59O1xuXG52YXIgSUdOT1JFRF9OT0RFX05BTUVTID0gWydTQ1JJUFQnLCAnSEVBRCcsICdUSVRMRScsICdPQkpFQ1QnLCAnQlInLCAnT1BUSU9OJ107XG5cbnZhciBwYXJzZU5vZGVUcmVlID0gZnVuY3Rpb24gcGFyc2VOb2RlVHJlZShub2RlLCBwYXJlbnQsIHN0YWNrLCByZXNvdXJjZUxvYWRlciwgaW5kZXgpIHtcbiAgICBpZiAodHJ1ZSAmJiBpbmRleCA+IDUwMDAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUmVjdXJzaW9uIGVycm9yIHdoaWxlIHBhcnNpbmcgbm9kZSB0cmVlJyk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgY2hpbGROb2RlID0gbm9kZS5maXJzdENoaWxkLCBuZXh0Tm9kZTsgY2hpbGROb2RlOyBjaGlsZE5vZGUgPSBuZXh0Tm9kZSkge1xuICAgICAgICBuZXh0Tm9kZSA9IGNoaWxkTm9kZS5uZXh0U2libGluZztcbiAgICAgICAgdmFyIGRlZmF1bHRWaWV3ID0gY2hpbGROb2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gICAgICAgIGlmIChjaGlsZE5vZGUgaW5zdGFuY2VvZiBkZWZhdWx0Vmlldy5UZXh0IHx8IGNoaWxkTm9kZSBpbnN0YW5jZW9mIFRleHQgfHwgZGVmYXVsdFZpZXcucGFyZW50ICYmIGNoaWxkTm9kZSBpbnN0YW5jZW9mIGRlZmF1bHRWaWV3LnBhcmVudC5UZXh0KSB7XG4gICAgICAgICAgICBpZiAoY2hpbGROb2RlLmRhdGEudHJpbSgpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQuY2hpbGROb2Rlcy5wdXNoKF9UZXh0Q29udGFpbmVyMi5kZWZhdWx0LmZyb21UZXh0Tm9kZShjaGlsZE5vZGUsIHBhcmVudCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNoaWxkTm9kZSBpbnN0YW5jZW9mIGRlZmF1bHRWaWV3LkhUTUxFbGVtZW50IHx8IGNoaWxkTm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IGRlZmF1bHRWaWV3LnBhcmVudCAmJiBjaGlsZE5vZGUgaW5zdGFuY2VvZiBkZWZhdWx0Vmlldy5wYXJlbnQuSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmIChJR05PUkVEX05PREVfTkFNRVMuaW5kZXhPZihjaGlsZE5vZGUubm9kZU5hbWUpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBuZXcgX05vZGVDb250YWluZXIyLmRlZmF1bHQoY2hpbGROb2RlLCBwYXJlbnQsIHJlc291cmNlTG9hZGVyLCBpbmRleCsrKTtcbiAgICAgICAgICAgICAgICBpZiAoY29udGFpbmVyLmlzVmlzaWJsZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZE5vZGUudGFnTmFtZSA9PT0gJ0lOUFVUJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgICAgICAgICAgICAgICAgICAgKDAsIF9JbnB1dC5pbmxpbmVJbnB1dEVsZW1lbnQpKGNoaWxkTm9kZSwgY29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaGlsZE5vZGUudGFnTmFtZSA9PT0gJ1RFWFRBUkVBJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgICAgICAgICAgICAgICAgICAgKDAsIF9JbnB1dC5pbmxpbmVUZXh0QXJlYUVsZW1lbnQpKGNoaWxkTm9kZSwgY29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaGlsZE5vZGUudGFnTmFtZSA9PT0gJ1NFTEVDVCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgICAgICAgICAgICAgICAgICAgICgwLCBfSW5wdXQuaW5saW5lU2VsZWN0RWxlbWVudCkoY2hpbGROb2RlLCBjb250YWluZXIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvbnRhaW5lci5zdHlsZS5saXN0U3R5bGUgJiYgY29udGFpbmVyLnN0eWxlLmxpc3RTdHlsZS5saXN0U3R5bGVUeXBlICE9PSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5OT05FKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAoMCwgX0xpc3RJdGVtLmlubGluZUxpc3RJdGVtRWxlbWVudCkoY2hpbGROb2RlLCBjb250YWluZXIsIHJlc291cmNlTG9hZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHZhciBTSE9VTERfVFJBVkVSU0VfQ0hJTERSRU4gPSBjaGlsZE5vZGUudGFnTmFtZSAhPT0gJ1RFWFRBUkVBJztcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRyZWF0QXNSZWFsU3RhY2tpbmdDb250ZXh0ID0gY3JlYXRlc1JlYWxTdGFja2luZ0NvbnRleHQoY29udGFpbmVyLCBjaGlsZE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHJlYXRBc1JlYWxTdGFja2luZ0NvbnRleHQgfHwgY3JlYXRlc1N0YWNraW5nQ29udGV4dChjb250YWluZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmb3IgdHJlYXRBc1JlYWxTdGFja2luZ0NvbnRleHQ6ZmFsc2UsIGFueSBwb3NpdGlvbmVkIGRlc2NlbmRhbnRzIGFuZCBkZXNjZW5kYW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2hpY2ggYWN0dWFsbHkgY3JlYXRlIGEgbmV3IHN0YWNraW5nIGNvbnRleHQgc2hvdWxkIGJlIGNvbnNpZGVyZWQgcGFydCBvZiB0aGUgcGFyZW50IHN0YWNraW5nIGNvbnRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJlbnRTdGFjayA9IHRyZWF0QXNSZWFsU3RhY2tpbmdDb250ZXh0IHx8IGNvbnRhaW5lci5pc1Bvc2l0aW9uZWQoKSA/IHN0YWNrLmdldFJlYWxQYXJlbnRTdGFja2luZ0NvbnRleHQoKSA6IHN0YWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNoaWxkU3RhY2sgPSBuZXcgX1N0YWNraW5nQ29udGV4dDIuZGVmYXVsdChjb250YWluZXIsIHBhcmVudFN0YWNrLCB0cmVhdEFzUmVhbFN0YWNraW5nQ29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRTdGFjay5jb250ZXh0cy5wdXNoKGNoaWxkU3RhY2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFNIT1VMRF9UUkFWRVJTRV9DSElMRFJFTikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlTm9kZVRyZWUoY2hpbGROb2RlLCBjb250YWluZXIsIGNoaWxkU3RhY2ssIHJlc291cmNlTG9hZGVyLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFjay5jaGlsZHJlbi5wdXNoKGNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoU0hPVUxEX1RSQVZFUlNFX0NISUxEUkVOKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VOb2RlVHJlZShjaGlsZE5vZGUsIGNvbnRhaW5lciwgc3RhY2ssIHJlc291cmNlTG9hZGVyLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY2hpbGROb2RlIGluc3RhbmNlb2YgZGVmYXVsdFZpZXcuU1ZHU1ZHRWxlbWVudCB8fCBjaGlsZE5vZGUgaW5zdGFuY2VvZiBTVkdTVkdFbGVtZW50IHx8IGRlZmF1bHRWaWV3LnBhcmVudCAmJiBjaGlsZE5vZGUgaW5zdGFuY2VvZiBkZWZhdWx0Vmlldy5wYXJlbnQuU1ZHU1ZHRWxlbWVudCkge1xuICAgICAgICAgICAgdmFyIF9jb250YWluZXIgPSBuZXcgX05vZGVDb250YWluZXIyLmRlZmF1bHQoY2hpbGROb2RlLCBwYXJlbnQsIHJlc291cmNlTG9hZGVyLCBpbmRleCsrKTtcbiAgICAgICAgICAgIHZhciBfdHJlYXRBc1JlYWxTdGFja2luZ0NvbnRleHQgPSBjcmVhdGVzUmVhbFN0YWNraW5nQ29udGV4dChfY29udGFpbmVyLCBjaGlsZE5vZGUpO1xuICAgICAgICAgICAgaWYgKF90cmVhdEFzUmVhbFN0YWNraW5nQ29udGV4dCB8fCBjcmVhdGVzU3RhY2tpbmdDb250ZXh0KF9jb250YWluZXIpKSB7XG4gICAgICAgICAgICAgICAgLy8gZm9yIHRyZWF0QXNSZWFsU3RhY2tpbmdDb250ZXh0OmZhbHNlLCBhbnkgcG9zaXRpb25lZCBkZXNjZW5kYW50cyBhbmQgZGVzY2VuZGFudHNcbiAgICAgICAgICAgICAgICAvLyB3aGljaCBhY3R1YWxseSBjcmVhdGUgYSBuZXcgc3RhY2tpbmcgY29udGV4dCBzaG91bGQgYmUgY29uc2lkZXJlZCBwYXJ0IG9mIHRoZSBwYXJlbnQgc3RhY2tpbmcgY29udGV4dFxuICAgICAgICAgICAgICAgIHZhciBfcGFyZW50U3RhY2sgPSBfdHJlYXRBc1JlYWxTdGFja2luZ0NvbnRleHQgfHwgX2NvbnRhaW5lci5pc1Bvc2l0aW9uZWQoKSA/IHN0YWNrLmdldFJlYWxQYXJlbnRTdGFja2luZ0NvbnRleHQoKSA6IHN0YWNrO1xuICAgICAgICAgICAgICAgIHZhciBfY2hpbGRTdGFjayA9IG5ldyBfU3RhY2tpbmdDb250ZXh0Mi5kZWZhdWx0KF9jb250YWluZXIsIF9wYXJlbnRTdGFjaywgX3RyZWF0QXNSZWFsU3RhY2tpbmdDb250ZXh0KTtcbiAgICAgICAgICAgICAgICBfcGFyZW50U3RhY2suY29udGV4dHMucHVzaChfY2hpbGRTdGFjayk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YWNrLmNoaWxkcmVuLnB1c2goX2NvbnRhaW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG52YXIgY3JlYXRlc1JlYWxTdGFja2luZ0NvbnRleHQgPSBmdW5jdGlvbiBjcmVhdGVzUmVhbFN0YWNraW5nQ29udGV4dChjb250YWluZXIsIG5vZGUpIHtcbiAgICByZXR1cm4gY29udGFpbmVyLmlzUm9vdEVsZW1lbnQoKSB8fCBjb250YWluZXIuaXNQb3NpdGlvbmVkV2l0aFpJbmRleCgpIHx8IGNvbnRhaW5lci5zdHlsZS5vcGFjaXR5IDwgMSB8fCBjb250YWluZXIuaXNUcmFuc2Zvcm1lZCgpIHx8IGlzQm9keVdpdGhUcmFuc3BhcmVudFJvb3QoY29udGFpbmVyLCBub2RlKTtcbn07XG5cbnZhciBjcmVhdGVzU3RhY2tpbmdDb250ZXh0ID0gZnVuY3Rpb24gY3JlYXRlc1N0YWNraW5nQ29udGV4dChjb250YWluZXIpIHtcbiAgICByZXR1cm4gY29udGFpbmVyLmlzUG9zaXRpb25lZCgpIHx8IGNvbnRhaW5lci5pc0Zsb2F0aW5nKCk7XG59O1xuXG52YXIgaXNCb2R5V2l0aFRyYW5zcGFyZW50Um9vdCA9IGZ1bmN0aW9uIGlzQm9keVdpdGhUcmFuc3BhcmVudFJvb3QoY29udGFpbmVyLCBub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUubm9kZU5hbWUgPT09ICdCT0RZJyAmJiBjb250YWluZXIucGFyZW50IGluc3RhbmNlb2YgX05vZGVDb250YWluZXIyLmRlZmF1bHQgJiYgY29udGFpbmVyLnBhcmVudC5zdHlsZS5iYWNrZ3JvdW5kLmJhY2tncm91bmRDb2xvci5pc1RyYW5zcGFyZW50KCk7XG59O1xuXG4vKioqLyB9KSxcbi8qIDMwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9Ob2RlQ29udGFpbmVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblxudmFyIF9Ob2RlQ29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX05vZGVDb250YWluZXIpO1xuXG52YXIgX3Bvc2l0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBTdGFja2luZ0NvbnRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU3RhY2tpbmdDb250ZXh0KGNvbnRhaW5lciwgcGFyZW50LCB0cmVhdEFzUmVhbFN0YWNraW5nQ29udGV4dCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3RhY2tpbmdDb250ZXh0KTtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMuY29udGV4dHMgPSBbXTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgICAgICB0aGlzLnRyZWF0QXNSZWFsU3RhY2tpbmdDb250ZXh0ID0gdHJlYXRBc1JlYWxTdGFja2luZ0NvbnRleHQ7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFN0YWNraW5nQ29udGV4dCwgW3tcbiAgICAgICAga2V5OiAnZ2V0T3BhY2l0eScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRPcGFjaXR5KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5jb250YWluZXIuc3R5bGUub3BhY2l0eSAqIHRoaXMucGFyZW50LmdldE9wYWNpdHkoKSA6IHRoaXMuY29udGFpbmVyLnN0eWxlLm9wYWNpdHk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldFJlYWxQYXJlbnRTdGFja2luZ0NvbnRleHQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UmVhbFBhcmVudFN0YWNraW5nQ29udGV4dCgpIHtcbiAgICAgICAgICAgIHJldHVybiAhdGhpcy5wYXJlbnQgfHwgdGhpcy50cmVhdEFzUmVhbFN0YWNraW5nQ29udGV4dCA/IHRoaXMgOiB0aGlzLnBhcmVudC5nZXRSZWFsUGFyZW50U3RhY2tpbmdDb250ZXh0KCk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gU3RhY2tpbmdDb250ZXh0O1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBTdGFja2luZ0NvbnRleHQ7XG5cbi8qKiovIH0pLFxuLyogMzEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgU2l6ZSA9IGZ1bmN0aW9uIFNpemUod2lkdGgsIGhlaWdodCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTaXplKTtcblxuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFNpemU7XG5cbi8qKiovIH0pLFxuLyogMzIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX1BhdGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG52YXIgX1ZlY3RvciA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG5cbnZhciBfVmVjdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1ZlY3Rvcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBsZXJwID0gZnVuY3Rpb24gbGVycChhLCBiLCB0KSB7XG4gICAgcmV0dXJuIG5ldyBfVmVjdG9yMi5kZWZhdWx0KGEueCArIChiLnggLSBhLngpICogdCwgYS55ICsgKGIueSAtIGEueSkgKiB0KTtcbn07XG5cbnZhciBCZXppZXJDdXJ2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCZXppZXJDdXJ2ZShzdGFydCwgc3RhcnRDb250cm9sLCBlbmRDb250cm9sLCBlbmQpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJlemllckN1cnZlKTtcblxuICAgICAgICB0aGlzLnR5cGUgPSBfUGF0aC5QQVRILkJFWklFUl9DVVJWRTtcbiAgICAgICAgdGhpcy5zdGFydCA9IHN0YXJ0O1xuICAgICAgICB0aGlzLnN0YXJ0Q29udHJvbCA9IHN0YXJ0Q29udHJvbDtcbiAgICAgICAgdGhpcy5lbmRDb250cm9sID0gZW5kQ29udHJvbDtcbiAgICAgICAgdGhpcy5lbmQgPSBlbmQ7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEJlemllckN1cnZlLCBbe1xuICAgICAgICBrZXk6ICdzdWJkaXZpZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc3ViZGl2aWRlKHQsIGZpcnN0SGFsZikge1xuICAgICAgICAgICAgdmFyIGFiID0gbGVycCh0aGlzLnN0YXJ0LCB0aGlzLnN0YXJ0Q29udHJvbCwgdCk7XG4gICAgICAgICAgICB2YXIgYmMgPSBsZXJwKHRoaXMuc3RhcnRDb250cm9sLCB0aGlzLmVuZENvbnRyb2wsIHQpO1xuICAgICAgICAgICAgdmFyIGNkID0gbGVycCh0aGlzLmVuZENvbnRyb2wsIHRoaXMuZW5kLCB0KTtcbiAgICAgICAgICAgIHZhciBhYmJjID0gbGVycChhYiwgYmMsIHQpO1xuICAgICAgICAgICAgdmFyIGJjY2QgPSBsZXJwKGJjLCBjZCwgdCk7XG4gICAgICAgICAgICB2YXIgZGVzdCA9IGxlcnAoYWJiYywgYmNjZCwgdCk7XG4gICAgICAgICAgICByZXR1cm4gZmlyc3RIYWxmID8gbmV3IEJlemllckN1cnZlKHRoaXMuc3RhcnQsIGFiLCBhYmJjLCBkZXN0KSA6IG5ldyBCZXppZXJDdXJ2ZShkZXN0LCBiY2NkLCBjZCwgdGhpcy5lbmQpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZXZlcnNlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJldmVyc2UoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEJlemllckN1cnZlKHRoaXMuZW5kLCB0aGlzLmVuZENvbnRyb2wsIHRoaXMuc3RhcnRDb250cm9sLCB0aGlzLnN0YXJ0KTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBCZXppZXJDdXJ2ZTtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQmV6aWVyQ3VydmU7XG5cbi8qKiovIH0pLFxuLyogMzMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5wYXJzZUJvcmRlclJhZGl1cyA9IHVuZGVmaW5lZDtcblxudmFyIF9zbGljZWRUb0FycmF5ID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBzbGljZUl0ZXJhdG9yKGFyciwgaSkgeyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9IHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgcmV0dXJuIGFycjsgfSBlbHNlIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpIHsgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTsgfSBlbHNlIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7IH0gfTsgfSgpO1xuXG52YXIgX0xlbmd0aCA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cbnZhciBfTGVuZ3RoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xlbmd0aCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBTSURFUyA9IFsndG9wLWxlZnQnLCAndG9wLXJpZ2h0JywgJ2JvdHRvbS1yaWdodCcsICdib3R0b20tbGVmdCddO1xuXG52YXIgcGFyc2VCb3JkZXJSYWRpdXMgPSBleHBvcnRzLnBhcnNlQm9yZGVyUmFkaXVzID0gZnVuY3Rpb24gcGFyc2VCb3JkZXJSYWRpdXMoc3R5bGUpIHtcbiAgICByZXR1cm4gU0lERVMubWFwKGZ1bmN0aW9uIChzaWRlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2JvcmRlci0nICsgc2lkZSArICctcmFkaXVzJyk7XG5cbiAgICAgICAgdmFyIF92YWx1ZSRzcGxpdCRtYXAgPSB2YWx1ZS5zcGxpdCgnICcpLm1hcChfTGVuZ3RoMi5kZWZhdWx0LmNyZWF0ZSksXG4gICAgICAgICAgICBfdmFsdWUkc3BsaXQkbWFwMiA9IF9zbGljZWRUb0FycmF5KF92YWx1ZSRzcGxpdCRtYXAsIDIpLFxuICAgICAgICAgICAgaG9yaXpvbnRhbCA9IF92YWx1ZSRzcGxpdCRtYXAyWzBdLFxuICAgICAgICAgICAgdmVydGljYWwgPSBfdmFsdWUkc3BsaXQkbWFwMlsxXTtcblxuICAgICAgICByZXR1cm4gdHlwZW9mIHZlcnRpY2FsID09PSAndW5kZWZpbmVkJyA/IFtob3Jpem9udGFsLCBob3Jpem9udGFsXSA6IFtob3Jpem9udGFsLCB2ZXJ0aWNhbF07XG4gICAgfSk7XG59O1xuXG4vKioqLyB9KSxcbi8qIDM0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbnZhciBESVNQTEFZID0gZXhwb3J0cy5ESVNQTEFZID0ge1xuICAgIE5PTkU6IDEgPDwgMCxcbiAgICBCTE9DSzogMSA8PCAxLFxuICAgIElOTElORTogMSA8PCAyLFxuICAgIFJVTl9JTjogMSA8PCAzLFxuICAgIEZMT1c6IDEgPDwgNCxcbiAgICBGTE9XX1JPT1Q6IDEgPDwgNSxcbiAgICBUQUJMRTogMSA8PCA2LFxuICAgIEZMRVg6IDEgPDwgNyxcbiAgICBHUklEOiAxIDw8IDgsXG4gICAgUlVCWTogMSA8PCA5LFxuICAgIFNVQkdSSUQ6IDEgPDwgMTAsXG4gICAgTElTVF9JVEVNOiAxIDw8IDExLFxuICAgIFRBQkxFX1JPV19HUk9VUDogMSA8PCAxMixcbiAgICBUQUJMRV9IRUFERVJfR1JPVVA6IDEgPDwgMTMsXG4gICAgVEFCTEVfRk9PVEVSX0dST1VQOiAxIDw8IDE0LFxuICAgIFRBQkxFX1JPVzogMSA8PCAxNSxcbiAgICBUQUJMRV9DRUxMOiAxIDw8IDE2LFxuICAgIFRBQkxFX0NPTFVNTl9HUk9VUDogMSA8PCAxNyxcbiAgICBUQUJMRV9DT0xVTU46IDEgPDwgMTgsXG4gICAgVEFCTEVfQ0FQVElPTjogMSA8PCAxOSxcbiAgICBSVUJZX0JBU0U6IDEgPDwgMjAsXG4gICAgUlVCWV9URVhUOiAxIDw8IDIxLFxuICAgIFJVQllfQkFTRV9DT05UQUlORVI6IDEgPDwgMjIsXG4gICAgUlVCWV9URVhUX0NPTlRBSU5FUjogMSA8PCAyMyxcbiAgICBDT05URU5UUzogMSA8PCAyNCxcbiAgICBJTkxJTkVfQkxPQ0s6IDEgPDwgMjUsXG4gICAgSU5MSU5FX0xJU1RfSVRFTTogMSA8PCAyNixcbiAgICBJTkxJTkVfVEFCTEU6IDEgPDwgMjcsXG4gICAgSU5MSU5FX0ZMRVg6IDEgPDwgMjgsXG4gICAgSU5MSU5FX0dSSUQ6IDEgPDwgMjlcbn07XG5cbnZhciBwYXJzZURpc3BsYXlWYWx1ZSA9IGZ1bmN0aW9uIHBhcnNlRGlzcGxheVZhbHVlKGRpc3BsYXkpIHtcbiAgICBzd2l0Y2ggKGRpc3BsYXkpIHtcbiAgICAgICAgY2FzZSAnYmxvY2snOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuQkxPQ0s7XG4gICAgICAgIGNhc2UgJ2lubGluZSc6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5JTkxJTkU7XG4gICAgICAgIGNhc2UgJ3J1bi1pbic6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5SVU5fSU47XG4gICAgICAgIGNhc2UgJ2Zsb3cnOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuRkxPVztcbiAgICAgICAgY2FzZSAnZmxvdy1yb290JzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLkZMT1dfUk9PVDtcbiAgICAgICAgY2FzZSAndGFibGUnOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuVEFCTEU7XG4gICAgICAgIGNhc2UgJ2ZsZXgnOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuRkxFWDtcbiAgICAgICAgY2FzZSAnZ3JpZCc6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5HUklEO1xuICAgICAgICBjYXNlICdydWJ5JzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLlJVQlk7XG4gICAgICAgIGNhc2UgJ3N1YmdyaWQnOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuU1VCR1JJRDtcbiAgICAgICAgY2FzZSAnbGlzdC1pdGVtJzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLkxJU1RfSVRFTTtcbiAgICAgICAgY2FzZSAndGFibGUtcm93LWdyb3VwJzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLlRBQkxFX1JPV19HUk9VUDtcbiAgICAgICAgY2FzZSAndGFibGUtaGVhZGVyLWdyb3VwJzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLlRBQkxFX0hFQURFUl9HUk9VUDtcbiAgICAgICAgY2FzZSAndGFibGUtZm9vdGVyLWdyb3VwJzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLlRBQkxFX0ZPT1RFUl9HUk9VUDtcbiAgICAgICAgY2FzZSAndGFibGUtcm93JzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLlRBQkxFX1JPVztcbiAgICAgICAgY2FzZSAndGFibGUtY2VsbCc6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5UQUJMRV9DRUxMO1xuICAgICAgICBjYXNlICd0YWJsZS1jb2x1bW4tZ3JvdXAnOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuVEFCTEVfQ09MVU1OX0dST1VQO1xuICAgICAgICBjYXNlICd0YWJsZS1jb2x1bW4nOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuVEFCTEVfQ09MVU1OO1xuICAgICAgICBjYXNlICd0YWJsZS1jYXB0aW9uJzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLlRBQkxFX0NBUFRJT047XG4gICAgICAgIGNhc2UgJ3J1YnktYmFzZSc6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5SVUJZX0JBU0U7XG4gICAgICAgIGNhc2UgJ3J1YnktdGV4dCc6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5SVUJZX1RFWFQ7XG4gICAgICAgIGNhc2UgJ3J1YnktYmFzZS1jb250YWluZXInOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuUlVCWV9CQVNFX0NPTlRBSU5FUjtcbiAgICAgICAgY2FzZSAncnVieS10ZXh0LWNvbnRhaW5lcic6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5SVUJZX1RFWFRfQ09OVEFJTkVSO1xuICAgICAgICBjYXNlICdjb250ZW50cyc6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5DT05URU5UUztcbiAgICAgICAgY2FzZSAnaW5saW5lLWJsb2NrJzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLklOTElORV9CTE9DSztcbiAgICAgICAgY2FzZSAnaW5saW5lLWxpc3QtaXRlbSc6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5JTkxJTkVfTElTVF9JVEVNO1xuICAgICAgICBjYXNlICdpbmxpbmUtdGFibGUnOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuSU5MSU5FX1RBQkxFO1xuICAgICAgICBjYXNlICdpbmxpbmUtZmxleCc6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5JTkxJTkVfRkxFWDtcbiAgICAgICAgY2FzZSAnaW5saW5lLWdyaWQnOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuSU5MSU5FX0dSSUQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIERJU1BMQVkuTk9ORTtcbn07XG5cbnZhciBzZXREaXNwbGF5Qml0ID0gZnVuY3Rpb24gc2V0RGlzcGxheUJpdChiaXQsIGRpc3BsYXkpIHtcbiAgICByZXR1cm4gYml0IHwgcGFyc2VEaXNwbGF5VmFsdWUoZGlzcGxheSk7XG59O1xuXG52YXIgcGFyc2VEaXNwbGF5ID0gZXhwb3J0cy5wYXJzZURpc3BsYXkgPSBmdW5jdGlvbiBwYXJzZURpc3BsYXkoZGlzcGxheSkge1xuICAgIHJldHVybiBkaXNwbGF5LnNwbGl0KCcgJykucmVkdWNlKHNldERpc3BsYXlCaXQsIDApO1xufTtcblxuLyoqKi8gfSksXG4vKiAzNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgRkxPQVQgPSBleHBvcnRzLkZMT0FUID0ge1xuICAgIE5PTkU6IDAsXG4gICAgTEVGVDogMSxcbiAgICBSSUdIVDogMixcbiAgICBJTkxJTkVfU1RBUlQ6IDMsXG4gICAgSU5MSU5FX0VORDogNFxufTtcblxudmFyIHBhcnNlQ1NTRmxvYXQgPSBleHBvcnRzLnBhcnNlQ1NTRmxvYXQgPSBmdW5jdGlvbiBwYXJzZUNTU0Zsb2F0KGZsb2F0KSB7XG4gICAgc3dpdGNoIChmbG9hdCkge1xuICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICAgIHJldHVybiBGTE9BVC5MRUZUO1xuICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgICByZXR1cm4gRkxPQVQuUklHSFQ7XG4gICAgICAgIGNhc2UgJ2lubGluZS1zdGFydCc6XG4gICAgICAgICAgICByZXR1cm4gRkxPQVQuSU5MSU5FX1NUQVJUO1xuICAgICAgICBjYXNlICdpbmxpbmUtZW5kJzpcbiAgICAgICAgICAgIHJldHVybiBGTE9BVC5JTkxJTkVfRU5EO1xuICAgIH1cbiAgICByZXR1cm4gRkxPQVQuTk9ORTtcbn07XG5cbi8qKiovIH0pLFxuLyogMzYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5cbnZhciBwYXJzZUZvbnRXZWlnaHQgPSBmdW5jdGlvbiBwYXJzZUZvbnRXZWlnaHQod2VpZ2h0KSB7XG4gICAgc3dpdGNoICh3ZWlnaHQpIHtcbiAgICAgICAgY2FzZSAnbm9ybWFsJzpcbiAgICAgICAgICAgIHJldHVybiA0MDA7XG4gICAgICAgIGNhc2UgJ2JvbGQnOlxuICAgICAgICAgICAgcmV0dXJuIDcwMDtcbiAgICB9XG5cbiAgICB2YXIgdmFsdWUgPSBwYXJzZUludCh3ZWlnaHQsIDEwKTtcbiAgICByZXR1cm4gaXNOYU4odmFsdWUpID8gNDAwIDogdmFsdWU7XG59O1xuXG52YXIgcGFyc2VGb250ID0gZXhwb3J0cy5wYXJzZUZvbnQgPSBmdW5jdGlvbiBwYXJzZUZvbnQoc3R5bGUpIHtcbiAgICB2YXIgZm9udEZhbWlseSA9IHN0eWxlLmZvbnRGYW1pbHk7XG4gICAgdmFyIGZvbnRTaXplID0gc3R5bGUuZm9udFNpemU7XG4gICAgdmFyIGZvbnRTdHlsZSA9IHN0eWxlLmZvbnRTdHlsZTtcbiAgICB2YXIgZm9udFZhcmlhbnQgPSBzdHlsZS5mb250VmFyaWFudDtcbiAgICB2YXIgZm9udFdlaWdodCA9IHBhcnNlRm9udFdlaWdodChzdHlsZS5mb250V2VpZ2h0KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGZvbnRGYW1pbHk6IGZvbnRGYW1pbHksXG4gICAgICAgIGZvbnRTaXplOiBmb250U2l6ZSxcbiAgICAgICAgZm9udFN0eWxlOiBmb250U3R5bGUsXG4gICAgICAgIGZvbnRWYXJpYW50OiBmb250VmFyaWFudCxcbiAgICAgICAgZm9udFdlaWdodDogZm9udFdlaWdodFxuICAgIH07XG59O1xuXG4vKioqLyB9KSxcbi8qIDM3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbnZhciBwYXJzZUxldHRlclNwYWNpbmcgPSBleHBvcnRzLnBhcnNlTGV0dGVyU3BhY2luZyA9IGZ1bmN0aW9uIHBhcnNlTGV0dGVyU3BhY2luZyhsZXR0ZXJTcGFjaW5nKSB7XG4gICAgaWYgKGxldHRlclNwYWNpbmcgPT09ICdub3JtYWwnKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICB2YXIgdmFsdWUgPSBwYXJzZUZsb2F0KGxldHRlclNwYWNpbmcpO1xuICAgIHJldHVybiBpc05hTih2YWx1ZSkgPyAwIDogdmFsdWU7XG59O1xuXG4vKioqLyB9KSxcbi8qIDM4ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbnZhciBMSU5FX0JSRUFLID0gZXhwb3J0cy5MSU5FX0JSRUFLID0ge1xuICAgIE5PUk1BTDogJ25vcm1hbCcsXG4gICAgU1RSSUNUOiAnc3RyaWN0J1xufTtcblxudmFyIHBhcnNlTGluZUJyZWFrID0gZXhwb3J0cy5wYXJzZUxpbmVCcmVhayA9IGZ1bmN0aW9uIHBhcnNlTGluZUJyZWFrKHdvcmRCcmVhaykge1xuICAgIHN3aXRjaCAod29yZEJyZWFrKSB7XG4gICAgICAgIGNhc2UgJ3N0cmljdCc6XG4gICAgICAgICAgICByZXR1cm4gTElORV9CUkVBSy5TVFJJQ1Q7XG4gICAgICAgIGNhc2UgJ25vcm1hbCc6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gTElORV9CUkVBSy5OT1JNQUw7XG4gICAgfVxufTtcblxuLyoqKi8gfSksXG4vKiAzOSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnBhcnNlTWFyZ2luID0gdW5kZWZpbmVkO1xuXG52YXIgX0xlbmd0aCA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cbnZhciBfTGVuZ3RoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xlbmd0aCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBTSURFUyA9IFsndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J107XG5cbnZhciBwYXJzZU1hcmdpbiA9IGV4cG9ydHMucGFyc2VNYXJnaW4gPSBmdW5jdGlvbiBwYXJzZU1hcmdpbihzdHlsZSkge1xuICAgIHJldHVybiBTSURFUy5tYXAoZnVuY3Rpb24gKHNpZGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBfTGVuZ3RoMi5kZWZhdWx0KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ21hcmdpbi0nICsgc2lkZSkpO1xuICAgIH0pO1xufTtcblxuLyoqKi8gfSksXG4vKiA0MCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgT1ZFUkZMT1cgPSBleHBvcnRzLk9WRVJGTE9XID0ge1xuICAgIFZJU0lCTEU6IDAsXG4gICAgSElEREVOOiAxLFxuICAgIFNDUk9MTDogMixcbiAgICBBVVRPOiAzXG59O1xuXG52YXIgcGFyc2VPdmVyZmxvdyA9IGV4cG9ydHMucGFyc2VPdmVyZmxvdyA9IGZ1bmN0aW9uIHBhcnNlT3ZlcmZsb3cob3ZlcmZsb3cpIHtcbiAgICBzd2l0Y2ggKG92ZXJmbG93KSB7XG4gICAgICAgIGNhc2UgJ2hpZGRlbic6XG4gICAgICAgICAgICByZXR1cm4gT1ZFUkZMT1cuSElEREVOO1xuICAgICAgICBjYXNlICdzY3JvbGwnOlxuICAgICAgICAgICAgcmV0dXJuIE9WRVJGTE9XLlNDUk9MTDtcbiAgICAgICAgY2FzZSAnYXV0byc6XG4gICAgICAgICAgICByZXR1cm4gT1ZFUkZMT1cuQVVUTztcbiAgICAgICAgY2FzZSAndmlzaWJsZSc6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gT1ZFUkZMT1cuVklTSUJMRTtcbiAgICB9XG59O1xuXG4vKioqLyB9KSxcbi8qIDQxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucGFyc2VUZXh0U2hhZG93ID0gdW5kZWZpbmVkO1xuXG52YXIgX0NvbG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxudmFyIF9Db2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db2xvcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBOVU1CRVIgPSAvXihbKy1dfFxcZHxcXC4pJC9pO1xuXG52YXIgcGFyc2VUZXh0U2hhZG93ID0gZXhwb3J0cy5wYXJzZVRleHRTaGFkb3cgPSBmdW5jdGlvbiBwYXJzZVRleHRTaGFkb3codGV4dFNoYWRvdykge1xuICAgIGlmICh0ZXh0U2hhZG93ID09PSAnbm9uZScgfHwgdHlwZW9mIHRleHRTaGFkb3cgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBjdXJyZW50VmFsdWUgPSAnJztcbiAgICB2YXIgaXNMZW5ndGggPSBmYWxzZTtcbiAgICB2YXIgdmFsdWVzID0gW107XG4gICAgdmFyIHNoYWRvd3MgPSBbXTtcbiAgICB2YXIgbnVtUGFyZW5zID0gMDtcbiAgICB2YXIgY29sb3IgPSBudWxsO1xuXG4gICAgdmFyIGFwcGVuZFZhbHVlID0gZnVuY3Rpb24gYXBwZW5kVmFsdWUoKSB7XG4gICAgICAgIGlmIChjdXJyZW50VmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaXNMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaChwYXJzZUZsb2F0KGN1cnJlbnRWYWx1ZSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb2xvciA9IG5ldyBfQ29sb3IyLmRlZmF1bHQoY3VycmVudFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpc0xlbmd0aCA9IGZhbHNlO1xuICAgICAgICBjdXJyZW50VmFsdWUgPSAnJztcbiAgICB9O1xuXG4gICAgdmFyIGFwcGVuZFNoYWRvdyA9IGZ1bmN0aW9uIGFwcGVuZFNoYWRvdygpIHtcbiAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGggJiYgY29sb3IgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHNoYWRvd3MucHVzaCh7XG4gICAgICAgICAgICAgICAgY29sb3I6IGNvbG9yLFxuICAgICAgICAgICAgICAgIG9mZnNldFg6IHZhbHVlc1swXSB8fCAwLFxuICAgICAgICAgICAgICAgIG9mZnNldFk6IHZhbHVlc1sxXSB8fCAwLFxuICAgICAgICAgICAgICAgIGJsdXI6IHZhbHVlc1syXSB8fCAwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB2YWx1ZXMuc3BsaWNlKDAsIHZhbHVlcy5sZW5ndGgpO1xuICAgICAgICBjb2xvciA9IG51bGw7XG4gICAgfTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGV4dFNoYWRvdy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgYyA9IHRleHRTaGFkb3dbaV07XG4gICAgICAgIHN3aXRjaCAoYykge1xuICAgICAgICAgICAgY2FzZSAnKCc6XG4gICAgICAgICAgICAgICAgY3VycmVudFZhbHVlICs9IGM7XG4gICAgICAgICAgICAgICAgbnVtUGFyZW5zKys7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICcpJzpcbiAgICAgICAgICAgICAgICBjdXJyZW50VmFsdWUgKz0gYztcbiAgICAgICAgICAgICAgICBudW1QYXJlbnMtLTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJywnOlxuICAgICAgICAgICAgICAgIGlmIChudW1QYXJlbnMgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYXBwZW5kVmFsdWUoKTtcbiAgICAgICAgICAgICAgICAgICAgYXBwZW5kU2hhZG93KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFZhbHVlICs9IGM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnICc6XG4gICAgICAgICAgICAgICAgaWYgKG51bVBhcmVucyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBhcHBlbmRWYWx1ZSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZSArPSBjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZS5sZW5ndGggPT09IDAgJiYgTlVNQkVSLnRlc3QoYykpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNMZW5ndGggPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdXJyZW50VmFsdWUgKz0gYztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFwcGVuZFZhbHVlKCk7XG4gICAgYXBwZW5kU2hhZG93KCk7XG5cbiAgICBpZiAoc2hhZG93cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNoYWRvd3M7XG59O1xuXG4vKioqLyB9KSxcbi8qIDQyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucGFyc2VUcmFuc2Zvcm0gPSB1bmRlZmluZWQ7XG5cbnZhciBfTGVuZ3RoID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxudmFyIF9MZW5ndGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTGVuZ3RoKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHRvRmxvYXQgPSBmdW5jdGlvbiB0b0Zsb2F0KHMpIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdChzLnRyaW0oKSk7XG59O1xuXG52YXIgTUFUUklYID0gLyhtYXRyaXh8bWF0cml4M2QpXFwoKC4rKVxcKS87XG5cbnZhciBwYXJzZVRyYW5zZm9ybSA9IGV4cG9ydHMucGFyc2VUcmFuc2Zvcm0gPSBmdW5jdGlvbiBwYXJzZVRyYW5zZm9ybShzdHlsZSkge1xuICAgIHZhciB0cmFuc2Zvcm0gPSBwYXJzZVRyYW5zZm9ybU1hdHJpeChzdHlsZS50cmFuc2Zvcm0gfHwgc3R5bGUud2Via2l0VHJhbnNmb3JtIHx8IHN0eWxlLm1velRyYW5zZm9ybSB8fFxuICAgIC8vICRGbG93Rml4TWVcbiAgICBzdHlsZS5tc1RyYW5zZm9ybSB8fFxuICAgIC8vICRGbG93Rml4TWVcbiAgICBzdHlsZS5vVHJhbnNmb3JtKTtcbiAgICBpZiAodHJhbnNmb3JtID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46IHBhcnNlVHJhbnNmb3JtT3JpZ2luKHN0eWxlLnRyYW5zZm9ybU9yaWdpbiB8fCBzdHlsZS53ZWJraXRUcmFuc2Zvcm1PcmlnaW4gfHwgc3R5bGUubW96VHJhbnNmb3JtT3JpZ2luIHx8XG4gICAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgICAgc3R5bGUubXNUcmFuc2Zvcm1PcmlnaW4gfHxcbiAgICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgICBzdHlsZS5vVHJhbnNmb3JtT3JpZ2luKVxuICAgIH07XG59O1xuXG4vLyAkRmxvd0ZpeE1lXG52YXIgcGFyc2VUcmFuc2Zvcm1PcmlnaW4gPSBmdW5jdGlvbiBwYXJzZVRyYW5zZm9ybU9yaWdpbihvcmlnaW4pIHtcbiAgICBpZiAodHlwZW9mIG9yaWdpbiAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgdmFyIHYgPSBuZXcgX0xlbmd0aDIuZGVmYXVsdCgnMCcpO1xuICAgICAgICByZXR1cm4gW3YsIHZdO1xuICAgIH1cbiAgICB2YXIgdmFsdWVzID0gb3JpZ2luLnNwbGl0KCcgJykubWFwKF9MZW5ndGgyLmRlZmF1bHQuY3JlYXRlKTtcbiAgICByZXR1cm4gW3ZhbHVlc1swXSwgdmFsdWVzWzFdXTtcbn07XG5cbi8vICRGbG93Rml4TWVcbnZhciBwYXJzZVRyYW5zZm9ybU1hdHJpeCA9IGZ1bmN0aW9uIHBhcnNlVHJhbnNmb3JtTWF0cml4KHRyYW5zZm9ybSkge1xuICAgIGlmICh0cmFuc2Zvcm0gPT09ICdub25lJyB8fCB0eXBlb2YgdHJhbnNmb3JtICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2ggPSB0cmFuc2Zvcm0ubWF0Y2goTUFUUklYKTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgaWYgKG1hdGNoWzFdID09PSAnbWF0cml4Jykge1xuICAgICAgICAgICAgdmFyIG1hdHJpeCA9IG1hdGNoWzJdLnNwbGl0KCcsJykubWFwKHRvRmxvYXQpO1xuICAgICAgICAgICAgcmV0dXJuIFttYXRyaXhbMF0sIG1hdHJpeFsxXSwgbWF0cml4WzJdLCBtYXRyaXhbM10sIG1hdHJpeFs0XSwgbWF0cml4WzVdXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBtYXRyaXgzZCA9IG1hdGNoWzJdLnNwbGl0KCcsJykubWFwKHRvRmxvYXQpO1xuICAgICAgICAgICAgcmV0dXJuIFttYXRyaXgzZFswXSwgbWF0cml4M2RbMV0sIG1hdHJpeDNkWzRdLCBtYXRyaXgzZFs1XSwgbWF0cml4M2RbMTJdLCBtYXRyaXgzZFsxM11dO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufTtcblxuLyoqKi8gfSksXG4vKiA0MyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgVklTSUJJTElUWSA9IGV4cG9ydHMuVklTSUJJTElUWSA9IHtcbiAgICBWSVNJQkxFOiAwLFxuICAgIEhJRERFTjogMSxcbiAgICBDT0xMQVBTRTogMlxufTtcblxudmFyIHBhcnNlVmlzaWJpbGl0eSA9IGV4cG9ydHMucGFyc2VWaXNpYmlsaXR5ID0gZnVuY3Rpb24gcGFyc2VWaXNpYmlsaXR5KHZpc2liaWxpdHkpIHtcbiAgICBzd2l0Y2ggKHZpc2liaWxpdHkpIHtcbiAgICAgICAgY2FzZSAnaGlkZGVuJzpcbiAgICAgICAgICAgIHJldHVybiBWSVNJQklMSVRZLkhJRERFTjtcbiAgICAgICAgY2FzZSAnY29sbGFwc2UnOlxuICAgICAgICAgICAgcmV0dXJuIFZJU0lCSUxJVFkuQ09MTEFQU0U7XG4gICAgICAgIGNhc2UgJ3Zpc2libGUnOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIFZJU0lCSUxJVFkuVklTSUJMRTtcbiAgICB9XG59O1xuXG4vKioqLyB9KSxcbi8qIDQ0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbnZhciBXT1JEX0JSRUFLID0gZXhwb3J0cy5XT1JEX0JSRUFLID0ge1xuICAgIE5PUk1BTDogJ25vcm1hbCcsXG4gICAgQlJFQUtfQUxMOiAnYnJlYWstYWxsJyxcbiAgICBLRUVQX0FMTDogJ2tlZXAtYWxsJ1xufTtcblxudmFyIHBhcnNlV29yZEJyZWFrID0gZXhwb3J0cy5wYXJzZVdvcmRCcmVhayA9IGZ1bmN0aW9uIHBhcnNlV29yZEJyZWFrKHdvcmRCcmVhaykge1xuICAgIHN3aXRjaCAod29yZEJyZWFrKSB7XG4gICAgICAgIGNhc2UgJ2JyZWFrLWFsbCc6XG4gICAgICAgICAgICByZXR1cm4gV09SRF9CUkVBSy5CUkVBS19BTEw7XG4gICAgICAgIGNhc2UgJ2tlZXAtYWxsJzpcbiAgICAgICAgICAgIHJldHVybiBXT1JEX0JSRUFLLktFRVBfQUxMO1xuICAgICAgICBjYXNlICdub3JtYWwnOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIFdPUkRfQlJFQUsuTk9STUFMO1xuICAgIH1cbn07XG5cbi8qKiovIH0pLFxuLyogNDUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xudmFyIHBhcnNlWkluZGV4ID0gZXhwb3J0cy5wYXJzZVpJbmRleCA9IGZ1bmN0aW9uIHBhcnNlWkluZGV4KHpJbmRleCkge1xuICAgIHZhciBhdXRvID0gekluZGV4ID09PSAnYXV0byc7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYXV0bzogYXV0byxcbiAgICAgICAgb3JkZXI6IGF1dG8gPyAwIDogcGFyc2VJbnQoekluZGV4LCAxMClcbiAgICB9O1xufTtcblxuLyoqKi8gfSksXG4vKiA0NiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX1V0aWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEzKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd0b0NvZGVQb2ludHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfVXRpbC50b0NvZGVQb2ludHM7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdmcm9tQ29kZVBvaW50Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX1V0aWwuZnJvbUNvZGVQb2ludDtcbiAgfVxufSk7XG5cbnZhciBfTGluZUJyZWFrID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0Nyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluZUJyZWFrZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfTGluZUJyZWFrLkxpbmVCcmVha2VyO1xuICB9XG59KTtcblxuLyoqKi8gfSksXG4vKiA0NyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkxpbmVCcmVha2VyID0gZXhwb3J0cy5pbmxpbmVCcmVha09wcG9ydHVuaXRpZXMgPSBleHBvcnRzLmxpbmVCcmVha0F0SW5kZXggPSBleHBvcnRzLmNvZGVQb2ludHNUb0NoYXJhY3RlckNsYXNzZXMgPSBleHBvcnRzLlVuaWNvZGVUcmllID0gZXhwb3J0cy5CUkVBS19BTExPV0VEID0gZXhwb3J0cy5CUkVBS19OT1RfQUxMT1dFRCA9IGV4cG9ydHMuQlJFQUtfTUFOREFUT1JZID0gZXhwb3J0cy5jbGFzc2VzID0gZXhwb3J0cy5MRVRURVJfTlVNQkVSX01PRElGSUVSID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3NsaWNlZFRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH0gcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGkpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyByZXR1cm4gYXJyOyB9IGVsc2UgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkgeyByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpOyB9IGVsc2UgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTsgfSB9OyB9KCk7XG5cbnZhciBfVHJpZSA9IF9fd2VicGFja19yZXF1aXJlX18oNDgpO1xuXG52YXIgX2xpbmVicmVha1RyaWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ5KTtcblxudmFyIF9saW5lYnJlYWtUcmllMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xpbmVicmVha1RyaWUpO1xuXG52YXIgX1V0aWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBMRVRURVJfTlVNQkVSX01PRElGSUVSID0gZXhwb3J0cy5MRVRURVJfTlVNQkVSX01PRElGSUVSID0gNTA7XG5cbi8vIE5vbi10YWlsb3JhYmxlIExpbmUgQnJlYWtpbmcgQ2xhc3Nlc1xudmFyIEJLID0gMTsgLy8gIENhdXNlIGEgbGluZSBicmVhayAoYWZ0ZXIpXG52YXIgQ1IgPSAyOyAvLyAgQ2F1c2UgYSBsaW5lIGJyZWFrIChhZnRlciksIGV4Y2VwdCBiZXR3ZWVuIENSIGFuZCBMRlxudmFyIExGID0gMzsgLy8gIENhdXNlIGEgbGluZSBicmVhayAoYWZ0ZXIpXG52YXIgQ00gPSA0OyAvLyAgUHJvaGliaXQgYSBsaW5lIGJyZWFrIGJldHdlZW4gdGhlIGNoYXJhY3RlciBhbmQgdGhlIHByZWNlZGluZyBjaGFyYWN0ZXJcbnZhciBOTCA9IDU7IC8vICBDYXVzZSBhIGxpbmUgYnJlYWsgKGFmdGVyKVxudmFyIFNHID0gNjsgLy8gIERvIG5vdCBvY2N1ciBpbiB3ZWxsLWZvcm1lZCB0ZXh0XG52YXIgV0ogPSA3OyAvLyAgUHJvaGliaXQgbGluZSBicmVha3MgYmVmb3JlIGFuZCBhZnRlclxudmFyIFpXID0gODsgLy8gIFByb3ZpZGUgYSBicmVhayBvcHBvcnR1bml0eVxudmFyIEdMID0gOTsgLy8gIFByb2hpYml0IGxpbmUgYnJlYWtzIGJlZm9yZSBhbmQgYWZ0ZXJcbnZhciBTUCA9IDEwOyAvLyBFbmFibGUgaW5kaXJlY3QgbGluZSBicmVha3NcbnZhciBaV0ogPSAxMTsgLy8gUHJvaGliaXQgbGluZSBicmVha3Mgd2l0aGluIGpvaW5lciBzZXF1ZW5jZXNcbi8vIEJyZWFrIE9wcG9ydHVuaXRpZXNcbnZhciBCMiA9IDEyOyAvLyAgUHJvdmlkZSBhIGxpbmUgYnJlYWsgb3Bwb3J0dW5pdHkgYmVmb3JlIGFuZCBhZnRlciB0aGUgY2hhcmFjdGVyXG52YXIgQkEgPSAxMzsgLy8gIEdlbmVyYWxseSBwcm92aWRlIGEgbGluZSBicmVhayBvcHBvcnR1bml0eSBhZnRlciB0aGUgY2hhcmFjdGVyXG52YXIgQkIgPSAxNDsgLy8gIEdlbmVyYWxseSBwcm92aWRlIGEgbGluZSBicmVhayBvcHBvcnR1bml0eSBiZWZvcmUgdGhlIGNoYXJhY3RlclxudmFyIEhZID0gMTU7IC8vICBQcm92aWRlIGEgbGluZSBicmVhayBvcHBvcnR1bml0eSBhZnRlciB0aGUgY2hhcmFjdGVyLCBleGNlcHQgaW4gbnVtZXJpYyBjb250ZXh0XG52YXIgQ0IgPSAxNjsgLy8gICBQcm92aWRlIGEgbGluZSBicmVhayBvcHBvcnR1bml0eSBjb250aW5nZW50IG9uIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbi8vIENoYXJhY3RlcnMgUHJvaGliaXRpbmcgQ2VydGFpbiBCcmVha3NcbnZhciBDTCA9IDE3OyAvLyAgUHJvaGliaXQgbGluZSBicmVha3MgYmVmb3JlXG52YXIgQ1AgPSAxODsgLy8gIFByb2hpYml0IGxpbmUgYnJlYWtzIGJlZm9yZVxudmFyIEVYID0gMTk7IC8vICBQcm9oaWJpdCBsaW5lIGJyZWFrcyBiZWZvcmVcbnZhciBJTiA9IDIwOyAvLyAgQWxsb3cgb25seSBpbmRpcmVjdCBsaW5lIGJyZWFrcyBiZXR3ZWVuIHBhaXJzXG52YXIgTlMgPSAyMTsgLy8gIEFsbG93IG9ubHkgaW5kaXJlY3QgbGluZSBicmVha3MgYmVmb3JlXG52YXIgT1AgPSAyMjsgLy8gIFByb2hpYml0IGxpbmUgYnJlYWtzIGFmdGVyXG52YXIgUVUgPSAyMzsgLy8gIEFjdCBsaWtlIHRoZXkgYXJlIGJvdGggb3BlbmluZyBhbmQgY2xvc2luZ1xuLy8gTnVtZXJpYyBDb250ZXh0XG52YXIgSVMgPSAyNDsgLy8gIFByZXZlbnQgYnJlYWtzIGFmdGVyIGFueSBhbmQgYmVmb3JlIG51bWVyaWNcbnZhciBOVSA9IDI1OyAvLyAgRm9ybSBudW1lcmljIGV4cHJlc3Npb25zIGZvciBsaW5lIGJyZWFraW5nIHB1cnBvc2VzXG52YXIgUE8gPSAyNjsgLy8gIERvIG5vdCBicmVhayBmb2xsb3dpbmcgYSBudW1lcmljIGV4cHJlc3Npb25cbnZhciBQUiA9IDI3OyAvLyAgRG8gbm90IGJyZWFrIGluIGZyb250IG9mIGEgbnVtZXJpYyBleHByZXNzaW9uXG52YXIgU1kgPSAyODsgLy8gIFByZXZlbnQgYSBicmVhayBiZWZvcmU7IGFuZCBhbGxvdyBhIGJyZWFrIGFmdGVyXG4vLyBPdGhlciBDaGFyYWN0ZXJzXG52YXIgQUkgPSAyOTsgLy8gIEFjdCBsaWtlIEFMIHdoZW4gdGhlIHJlc29sdmVkRUFXIGlzIE47IG90aGVyd2lzZTsgYWN0IGFzIElEXG52YXIgQUwgPSAzMDsgLy8gIEFyZSBhbHBoYWJldGljIGNoYXJhY3RlcnMgb3Igc3ltYm9scyB0aGF0IGFyZSB1c2VkIHdpdGggYWxwaGFiZXRpYyBjaGFyYWN0ZXJzXG52YXIgQ0ogPSAzMTsgLy8gIFRyZWF0IGFzIE5TIG9yIElEIGZvciBzdHJpY3Qgb3Igbm9ybWFsIGJyZWFraW5nLlxudmFyIEVCID0gMzI7IC8vICBEbyBub3QgYnJlYWsgZnJvbSBmb2xsb3dpbmcgRW1vamkgTW9kaWZpZXJcbnZhciBFTSA9IDMzOyAvLyAgRG8gbm90IGJyZWFrIGZyb20gcHJlY2VkaW5nIEVtb2ppIEJhc2VcbnZhciBIMiA9IDM0OyAvLyAgRm9ybSBLb3JlYW4gc3lsbGFibGUgYmxvY2tzXG52YXIgSDMgPSAzNTsgLy8gIEZvcm0gS29yZWFuIHN5bGxhYmxlIGJsb2Nrc1xudmFyIEhMID0gMzY7IC8vICBEbyBub3QgYnJlYWsgYXJvdW5kIGEgZm9sbG93aW5nIGh5cGhlbjsgb3RoZXJ3aXNlIGFjdCBhcyBBbHBoYWJldGljXG52YXIgSUQgPSAzNzsgLy8gIEJyZWFrIGJlZm9yZSBvciBhZnRlcjsgZXhjZXB0IGluIHNvbWUgbnVtZXJpYyBjb250ZXh0XG52YXIgSkwgPSAzODsgLy8gIEZvcm0gS29yZWFuIHN5bGxhYmxlIGJsb2Nrc1xudmFyIEpWID0gMzk7IC8vICBGb3JtIEtvcmVhbiBzeWxsYWJsZSBibG9ja3NcbnZhciBKVCA9IDQwOyAvLyAgRm9ybSBLb3JlYW4gc3lsbGFibGUgYmxvY2tzXG52YXIgUkkgPSA0MTsgLy8gIEtlZXAgcGFpcnMgdG9nZXRoZXIuIEZvciBwYWlyczsgYnJlYWsgYmVmb3JlIGFuZCBhZnRlciBvdGhlciBjbGFzc2VzXG52YXIgU0EgPSA0MjsgLy8gIFByb3ZpZGUgYSBsaW5lIGJyZWFrIG9wcG9ydHVuaXR5IGNvbnRpbmdlbnQgb24gYWRkaXRpb25hbCwgbGFuZ3VhZ2Utc3BlY2lmaWMgY29udGV4dCBhbmFseXNpc1xudmFyIFhYID0gNDM7IC8vICBIYXZlIGFzIHlldCB1bmtub3duIGxpbmUgYnJlYWtpbmcgYmVoYXZpb3Igb3IgdW5hc3NpZ25lZCBjb2RlIHBvc2l0aW9uc1xuXG52YXIgY2xhc3NlcyA9IGV4cG9ydHMuY2xhc3NlcyA9IHtcbiAgICBCSzogQkssXG4gICAgQ1I6IENSLFxuICAgIExGOiBMRixcbiAgICBDTTogQ00sXG4gICAgTkw6IE5MLFxuICAgIFNHOiBTRyxcbiAgICBXSjogV0osXG4gICAgWlc6IFpXLFxuICAgIEdMOiBHTCxcbiAgICBTUDogU1AsXG4gICAgWldKOiBaV0osXG4gICAgQjI6IEIyLFxuICAgIEJBOiBCQSxcbiAgICBCQjogQkIsXG4gICAgSFk6IEhZLFxuICAgIENCOiBDQixcbiAgICBDTDogQ0wsXG4gICAgQ1A6IENQLFxuICAgIEVYOiBFWCxcbiAgICBJTjogSU4sXG4gICAgTlM6IE5TLFxuICAgIE9QOiBPUCxcbiAgICBRVTogUVUsXG4gICAgSVM6IElTLFxuICAgIE5VOiBOVSxcbiAgICBQTzogUE8sXG4gICAgUFI6IFBSLFxuICAgIFNZOiBTWSxcbiAgICBBSTogQUksXG4gICAgQUw6IEFMLFxuICAgIENKOiBDSixcbiAgICBFQjogRUIsXG4gICAgRU06IEVNLFxuICAgIEgyOiBIMixcbiAgICBIMzogSDMsXG4gICAgSEw6IEhMLFxuICAgIElEOiBJRCxcbiAgICBKTDogSkwsXG4gICAgSlY6IEpWLFxuICAgIEpUOiBKVCxcbiAgICBSSTogUkksXG4gICAgU0E6IFNBLFxuICAgIFhYOiBYWFxufTtcblxudmFyIEJSRUFLX01BTkRBVE9SWSA9IGV4cG9ydHMuQlJFQUtfTUFOREFUT1JZID0gJyEnO1xudmFyIEJSRUFLX05PVF9BTExPV0VEID0gZXhwb3J0cy5CUkVBS19OT1RfQUxMT1dFRCA9ICfDlyc7XG52YXIgQlJFQUtfQUxMT1dFRCA9IGV4cG9ydHMuQlJFQUtfQUxMT1dFRCA9ICfDtyc7XG52YXIgVW5pY29kZVRyaWUgPSBleHBvcnRzLlVuaWNvZGVUcmllID0gKDAsIF9UcmllLmNyZWF0ZVRyaWVGcm9tQmFzZTY0KShfbGluZWJyZWFrVHJpZTIuZGVmYXVsdCk7XG5cbnZhciBBTFBIQUJFVElDUyA9IFtBTCwgSExdO1xudmFyIEhBUkRfTElORV9CUkVBS1MgPSBbQkssIENSLCBMRiwgTkxdO1xudmFyIFNQQUNFID0gW1NQLCBaV107XG52YXIgUFJFRklYX1BPU1RGSVggPSBbUFIsIFBPXTtcbnZhciBMSU5FX0JSRUFLUyA9IEhBUkRfTElORV9CUkVBS1MuY29uY2F0KFNQQUNFKTtcbnZhciBLT1JFQU5fU1lMTEFCTEVfQkxPQ0sgPSBbSkwsIEpWLCBKVCwgSDIsIEgzXTtcbnZhciBIWVBIRU4gPSBbSFksIEJBXTtcblxudmFyIGNvZGVQb2ludHNUb0NoYXJhY3RlckNsYXNzZXMgPSBleHBvcnRzLmNvZGVQb2ludHNUb0NoYXJhY3RlckNsYXNzZXMgPSBmdW5jdGlvbiBjb2RlUG9pbnRzVG9DaGFyYWN0ZXJDbGFzc2VzKGNvZGVQb2ludHMpIHtcbiAgICB2YXIgbGluZUJyZWFrID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnc3RyaWN0JztcblxuICAgIHZhciB0eXBlcyA9IFtdO1xuICAgIHZhciBpbmRpY2llcyA9IFtdO1xuICAgIHZhciBjYXRlZ29yaWVzID0gW107XG4gICAgY29kZVBvaW50cy5mb3JFYWNoKGZ1bmN0aW9uIChjb2RlUG9pbnQsIGluZGV4KSB7XG4gICAgICAgIHZhciBjbGFzc1R5cGUgPSBVbmljb2RlVHJpZS5nZXQoY29kZVBvaW50KTtcbiAgICAgICAgaWYgKGNsYXNzVHlwZSA+IExFVFRFUl9OVU1CRVJfTU9ESUZJRVIpIHtcbiAgICAgICAgICAgIGNhdGVnb3JpZXMucHVzaCh0cnVlKTtcbiAgICAgICAgICAgIGNsYXNzVHlwZSAtPSBMRVRURVJfTlVNQkVSX01PRElGSUVSO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2F0ZWdvcmllcy5wdXNoKGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChbJ25vcm1hbCcsICdhdXRvJywgJ2xvb3NlJ10uaW5kZXhPZihsaW5lQnJlYWspICE9PSAtMSkge1xuICAgICAgICAgICAgLy8gVSsyMDEwLCDigJMgVSsyMDEzLCDjgJwgVSszMDFDLCDjgqAgVSszMEEwXG4gICAgICAgICAgICBpZiAoWzB4MjAxMCwgMHgyMDEzLCAweDMwMWMsIDB4MzBhMF0uaW5kZXhPZihjb2RlUG9pbnQpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGluZGljaWVzLnB1c2goaW5kZXgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlcy5wdXNoKENCKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjbGFzc1R5cGUgPT09IENNIHx8IGNsYXNzVHlwZSA9PT0gWldKKSB7XG4gICAgICAgICAgICAvLyBMQjEwIFRyZWF0IGFueSByZW1haW5pbmcgY29tYmluaW5nIG1hcmsgb3IgWldKIGFzIEFMLlxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaW5kaWNpZXMucHVzaChpbmRleCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVzLnB1c2goQUwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBMQjkgRG8gbm90IGJyZWFrIGEgY29tYmluaW5nIGNoYXJhY3RlciBzZXF1ZW5jZTsgdHJlYXQgaXQgYXMgaWYgaXQgaGFzIHRoZSBsaW5lIGJyZWFraW5nIGNsYXNzIG9mXG4gICAgICAgICAgICAvLyB0aGUgYmFzZSBjaGFyYWN0ZXIgaW4gYWxsIG9mIHRoZSBmb2xsb3dpbmcgcnVsZXMuIFRyZWF0IFpXSiBhcyBpZiBpdCB3ZXJlIENNLlxuICAgICAgICAgICAgdmFyIHByZXYgPSB0eXBlc1tpbmRleCAtIDFdO1xuICAgICAgICAgICAgaWYgKExJTkVfQlJFQUtTLmluZGV4T2YocHJldikgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgaW5kaWNpZXMucHVzaChpbmRpY2llc1tpbmRleCAtIDFdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZXMucHVzaChwcmV2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGluZGljaWVzLnB1c2goaW5kZXgpO1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVzLnB1c2goQUwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5kaWNpZXMucHVzaChpbmRleCk7XG5cbiAgICAgICAgaWYgKGNsYXNzVHlwZSA9PT0gQ0opIHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlcy5wdXNoKGxpbmVCcmVhayA9PT0gJ3N0cmljdCcgPyBOUyA6IElEKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjbGFzc1R5cGUgPT09IFNBKSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZXMucHVzaChBTCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2xhc3NUeXBlID09PSBBSSkge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVzLnB1c2goQUwpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRm9yIHN1cHBsZW1lbnRhcnkgY2hhcmFjdGVycywgYSB1c2VmdWwgZGVmYXVsdCBpcyB0byB0cmVhdCBjaGFyYWN0ZXJzIGluIHRoZSByYW5nZSAxMDAwMC4uMUZGRkQgYXMgQUxcbiAgICAgICAgLy8gYW5kIGNoYXJhY3RlcnMgaW4gdGhlIHJhbmdlcyAyMDAwMC4uMkZGRkQgYW5kIDMwMDAwLi4zRkZGRCBhcyBJRCwgdW50aWwgdGhlIGltcGxlbWVudGF0aW9uIGNhbiBiZSByZXZpc2VkXG4gICAgICAgIC8vIHRvIHRha2UgaW50byBhY2NvdW50IHRoZSBhY3R1YWwgbGluZSBicmVha2luZyBwcm9wZXJ0aWVzIGZvciB0aGVzZSBjaGFyYWN0ZXJzLlxuICAgICAgICBpZiAoY2xhc3NUeXBlID09PSBYWCkge1xuICAgICAgICAgICAgaWYgKGNvZGVQb2ludCA+PSAweDIwMDAwICYmIGNvZGVQb2ludCA8PSAweDJmZmZkIHx8IGNvZGVQb2ludCA+PSAweDMwMDAwICYmIGNvZGVQb2ludCA8PSAweDNmZmZkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVzLnB1c2goSUQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZXMucHVzaChBTCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0eXBlcy5wdXNoKGNsYXNzVHlwZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gW2luZGljaWVzLCB0eXBlcywgY2F0ZWdvcmllc107XG59O1xuXG52YXIgaXNBZGphY2VudFdpdGhTcGFjZUlnbm9yZWQgPSBmdW5jdGlvbiBpc0FkamFjZW50V2l0aFNwYWNlSWdub3JlZChhLCBiLCBjdXJyZW50SW5kZXgsIGNsYXNzVHlwZXMpIHtcbiAgICB2YXIgY3VycmVudCA9IGNsYXNzVHlwZXNbY3VycmVudEluZGV4XTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhKSA/IGEuaW5kZXhPZihjdXJyZW50KSAhPT0gLTEgOiBhID09PSBjdXJyZW50KSB7XG4gICAgICAgIHZhciBpID0gY3VycmVudEluZGV4O1xuICAgICAgICB3aGlsZSAoaSA8PSBjbGFzc1R5cGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgdmFyIG5leHQgPSBjbGFzc1R5cGVzW2ldO1xuXG4gICAgICAgICAgICBpZiAobmV4dCA9PT0gYikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobmV4dCAhPT0gU1ApIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjdXJyZW50ID09PSBTUCkge1xuICAgICAgICB2YXIgX2kgPSBjdXJyZW50SW5kZXg7XG5cbiAgICAgICAgd2hpbGUgKF9pID4gMCkge1xuICAgICAgICAgICAgX2ktLTtcbiAgICAgICAgICAgIHZhciBwcmV2ID0gY2xhc3NUeXBlc1tfaV07XG5cbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGEpID8gYS5pbmRleE9mKHByZXYpICE9PSAtMSA6IGEgPT09IHByZXYpIHtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IGN1cnJlbnRJbmRleDtcbiAgICAgICAgICAgICAgICB3aGlsZSAobiA8PSBjbGFzc1R5cGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBuKys7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfbmV4dCA9IGNsYXNzVHlwZXNbbl07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKF9uZXh0ID09PSBiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChfbmV4dCAhPT0gU1ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocHJldiAhPT0gU1ApIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG52YXIgcHJldmlvdXNOb25TcGFjZUNsYXNzVHlwZSA9IGZ1bmN0aW9uIHByZXZpb3VzTm9uU3BhY2VDbGFzc1R5cGUoY3VycmVudEluZGV4LCBjbGFzc1R5cGVzKSB7XG4gICAgdmFyIGkgPSBjdXJyZW50SW5kZXg7XG4gICAgd2hpbGUgKGkgPj0gMCkge1xuICAgICAgICB2YXIgdHlwZSA9IGNsYXNzVHlwZXNbaV07XG4gICAgICAgIGlmICh0eXBlID09PSBTUCkge1xuICAgICAgICAgICAgaS0tO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIDA7XG59O1xuXG52YXIgX2xpbmVCcmVha0F0SW5kZXggPSBmdW5jdGlvbiBfbGluZUJyZWFrQXRJbmRleChjb2RlUG9pbnRzLCBjbGFzc1R5cGVzLCBpbmRpY2llcywgaW5kZXgsIGZvcmJpZGRlbkJyZWFrcykge1xuICAgIGlmIChpbmRpY2llc1tpbmRleF0gPT09IDApIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIHZhciBjdXJyZW50SW5kZXggPSBpbmRleCAtIDE7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZm9yYmlkZGVuQnJlYWtzKSAmJiBmb3JiaWRkZW5CcmVha3NbY3VycmVudEluZGV4XSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgdmFyIGJlZm9yZUluZGV4ID0gY3VycmVudEluZGV4IC0gMTtcbiAgICB2YXIgYWZ0ZXJJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XG4gICAgdmFyIGN1cnJlbnQgPSBjbGFzc1R5cGVzW2N1cnJlbnRJbmRleF07XG5cbiAgICAvLyBMQjQgQWx3YXlzIGJyZWFrIGFmdGVyIGhhcmQgbGluZSBicmVha3MuXG4gICAgLy8gTEI1IFRyZWF0IENSIGZvbGxvd2VkIGJ5IExGLCBhcyB3ZWxsIGFzIENSLCBMRiwgYW5kIE5MIGFzIGhhcmQgbGluZSBicmVha3MuXG4gICAgdmFyIGJlZm9yZSA9IGJlZm9yZUluZGV4ID49IDAgPyBjbGFzc1R5cGVzW2JlZm9yZUluZGV4XSA6IDA7XG4gICAgdmFyIG5leHQgPSBjbGFzc1R5cGVzW2FmdGVySW5kZXhdO1xuXG4gICAgaWYgKGN1cnJlbnQgPT09IENSICYmIG5leHQgPT09IExGKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICBpZiAoSEFSRF9MSU5FX0JSRUFLUy5pbmRleE9mKGN1cnJlbnQpICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTUFOREFUT1JZO1xuICAgIH1cblxuICAgIC8vIExCNiBEbyBub3QgYnJlYWsgYmVmb3JlIGhhcmQgbGluZSBicmVha3MuXG4gICAgaWYgKEhBUkRfTElORV9CUkVBS1MuaW5kZXhPZihuZXh0KSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCNyBEbyBub3QgYnJlYWsgYmVmb3JlIHNwYWNlcyBvciB6ZXJvIHdpZHRoIHNwYWNlLlxuICAgIGlmIChTUEFDRS5pbmRleE9mKG5leHQpICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEI4IEJyZWFrIGJlZm9yZSBhbnkgY2hhcmFjdGVyIGZvbGxvd2luZyBhIHplcm8td2lkdGggc3BhY2UsIGV2ZW4gaWYgb25lIG9yIG1vcmUgc3BhY2VzIGludGVydmVuZS5cbiAgICBpZiAocHJldmlvdXNOb25TcGFjZUNsYXNzVHlwZShjdXJyZW50SW5kZXgsIGNsYXNzVHlwZXMpID09PSBaVykge1xuICAgICAgICByZXR1cm4gQlJFQUtfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjhhIERvIG5vdCBicmVhayBiZXR3ZWVuIGEgemVybyB3aWR0aCBqb2luZXIgYW5kIGFuIGlkZW9ncmFwaCwgZW1vamkgYmFzZSBvciBlbW9qaSBtb2RpZmllci5cbiAgICBpZiAoVW5pY29kZVRyaWUuZ2V0KGNvZGVQb2ludHNbY3VycmVudEluZGV4XSkgPT09IFpXSiAmJiAobmV4dCA9PT0gSUQgfHwgbmV4dCA9PT0gRUIgfHwgbmV4dCA9PT0gRU0pKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjExIERvIG5vdCBicmVhayBiZWZvcmUgb3IgYWZ0ZXIgV29yZCBqb2luZXIgYW5kIHJlbGF0ZWQgY2hhcmFjdGVycy5cbiAgICBpZiAoY3VycmVudCA9PT0gV0ogfHwgbmV4dCA9PT0gV0opIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCMTIgRG8gbm90IGJyZWFrIGFmdGVyIE5CU1AgYW5kIHJlbGF0ZWQgY2hhcmFjdGVycy5cbiAgICBpZiAoY3VycmVudCA9PT0gR0wpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCMTJhIERvIG5vdCBicmVhayBiZWZvcmUgTkJTUCBhbmQgcmVsYXRlZCBjaGFyYWN0ZXJzLCBleGNlcHQgYWZ0ZXIgc3BhY2VzIGFuZCBoeXBoZW5zLlxuICAgIGlmIChbU1AsIEJBLCBIWV0uaW5kZXhPZihjdXJyZW50KSA9PT0gLTEgJiYgbmV4dCA9PT0gR0wpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCMTMgRG8gbm90IGJyZWFrIGJlZm9yZSDigJhd4oCZIG9yIOKAmCHigJkgb3Ig4oCYO+KAmSBvciDigJgv4oCZLCBldmVuIGFmdGVyIHNwYWNlcy5cbiAgICBpZiAoW0NMLCBDUCwgRVgsIElTLCBTWV0uaW5kZXhPZihuZXh0KSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCMTQgRG8gbm90IGJyZWFrIGFmdGVyIOKAmFvigJksIGV2ZW4gYWZ0ZXIgc3BhY2VzLlxuICAgIGlmIChwcmV2aW91c05vblNwYWNlQ2xhc3NUeXBlKGN1cnJlbnRJbmRleCwgY2xhc3NUeXBlcykgPT09IE9QKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjE1IERvIG5vdCBicmVhayB3aXRoaW4g4oCY4oCdW+KAmSwgZXZlbiB3aXRoIGludGVydmVuaW5nIHNwYWNlcy5cbiAgICBpZiAoaXNBZGphY2VudFdpdGhTcGFjZUlnbm9yZWQoUVUsIE9QLCBjdXJyZW50SW5kZXgsIGNsYXNzVHlwZXMpKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjE2IERvIG5vdCBicmVhayBiZXR3ZWVuIGNsb3NpbmcgcHVuY3R1YXRpb24gYW5kIGEgbm9uc3RhcnRlciAobGI9TlMpLCBldmVuIHdpdGggaW50ZXJ2ZW5pbmcgc3BhY2VzLlxuICAgIGlmIChpc0FkamFjZW50V2l0aFNwYWNlSWdub3JlZChbQ0wsIENQXSwgTlMsIGN1cnJlbnRJbmRleCwgY2xhc3NUeXBlcykpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCMTcgRG8gbm90IGJyZWFrIHdpdGhpbiDigJjigJTigJTigJksIGV2ZW4gd2l0aCBpbnRlcnZlbmluZyBzcGFjZXMuXG4gICAgaWYgKGlzQWRqYWNlbnRXaXRoU3BhY2VJZ25vcmVkKEIyLCBCMiwgY3VycmVudEluZGV4LCBjbGFzc1R5cGVzKSkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIxOCBCcmVhayBhZnRlciBzcGFjZXMuXG4gICAgaWYgKGN1cnJlbnQgPT09IFNQKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCMTkgRG8gbm90IGJyZWFrIGJlZm9yZSBvciBhZnRlciBxdW90YXRpb24gbWFya3MsIHN1Y2ggYXMg4oCYIOKAnSDigJkuXG4gICAgaWYgKGN1cnJlbnQgPT09IFFVIHx8IG5leHQgPT09IFFVKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjIwIEJyZWFrIGJlZm9yZSBhbmQgYWZ0ZXIgdW5yZXNvbHZlZCBDQi5cbiAgICBpZiAobmV4dCA9PT0gQ0IgfHwgY3VycmVudCA9PT0gQ0IpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIyMSBEbyBub3QgYnJlYWsgYmVmb3JlIGh5cGhlbi1taW51cywgb3RoZXIgaHlwaGVucywgZml4ZWQtd2lkdGggc3BhY2VzLCBzbWFsbCBrYW5hLCBhbmQgb3RoZXIgbm9uLXN0YXJ0ZXJzLCBvciBhZnRlciBhY3V0ZSBhY2NlbnRzLlxuICAgIGlmIChbQkEsIEhZLCBOU10uaW5kZXhPZihuZXh0KSAhPT0gLTEgfHwgY3VycmVudCA9PT0gQkIpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCMjFhIERvbid0IGJyZWFrIGFmdGVyIEhlYnJldyArIEh5cGhlbi5cbiAgICBpZiAoYmVmb3JlID09PSBITCAmJiBIWVBIRU4uaW5kZXhPZihjdXJyZW50KSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCMjFiIERvbuKAmXQgYnJlYWsgYmV0d2VlbiBTb2xpZHVzIGFuZCBIZWJyZXcgbGV0dGVycy5cbiAgICBpZiAoY3VycmVudCA9PT0gU1kgJiYgbmV4dCA9PT0gSEwpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCMjIgRG8gbm90IGJyZWFrIGJldHdlZW4gdHdvIGVsbGlwc2VzLCBvciBiZXR3ZWVuIGxldHRlcnMsIG51bWJlcnMgb3IgZXhjbGFtYXRpb25zIGFuZCBlbGxpcHNpcy5cbiAgICBpZiAobmV4dCA9PT0gSU4gJiYgQUxQSEFCRVRJQ1MuY29uY2F0KElOLCBFWCwgTlUsIElELCBFQiwgRU0pLmluZGV4T2YoY3VycmVudCkgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjIzIERvIG5vdCBicmVhayBiZXR3ZWVuIGRpZ2l0cyBhbmQgbGV0dGVycy5cbiAgICBpZiAoQUxQSEFCRVRJQ1MuaW5kZXhPZihuZXh0KSAhPT0gLTEgJiYgY3VycmVudCA9PT0gTlUgfHwgQUxQSEFCRVRJQ1MuaW5kZXhPZihjdXJyZW50KSAhPT0gLTEgJiYgbmV4dCA9PT0gTlUpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCMjNhIERvIG5vdCBicmVhayBiZXR3ZWVuIG51bWVyaWMgcHJlZml4ZXMgYW5kIGlkZW9ncmFwaHMsIG9yIGJldHdlZW4gaWRlb2dyYXBocyBhbmQgbnVtZXJpYyBwb3N0Zml4ZXMuXG4gICAgaWYgKGN1cnJlbnQgPT09IFBSICYmIFtJRCwgRUIsIEVNXS5pbmRleE9mKG5leHQpICE9PSAtMSB8fCBbSUQsIEVCLCBFTV0uaW5kZXhPZihjdXJyZW50KSAhPT0gLTEgJiYgbmV4dCA9PT0gUE8pIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCMjQgRG8gbm90IGJyZWFrIGJldHdlZW4gbnVtZXJpYyBwcmVmaXgvcG9zdGZpeCBhbmQgbGV0dGVycywgb3IgYmV0d2VlbiBsZXR0ZXJzIGFuZCBwcmVmaXgvcG9zdGZpeC5cbiAgICBpZiAoQUxQSEFCRVRJQ1MuaW5kZXhPZihjdXJyZW50KSAhPT0gLTEgJiYgUFJFRklYX1BPU1RGSVguaW5kZXhPZihuZXh0KSAhPT0gLTEgfHwgUFJFRklYX1BPU1RGSVguaW5kZXhPZihjdXJyZW50KSAhPT0gLTEgJiYgQUxQSEFCRVRJQ1MuaW5kZXhPZihuZXh0KSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCMjUgRG8gbm90IGJyZWFrIGJldHdlZW4gdGhlIGZvbGxvd2luZyBwYWlycyBvZiBjbGFzc2VzIHJlbGV2YW50IHRvIG51bWJlcnM6XG4gICAgaWYgKFxuICAgIC8vIChQUiB8IFBPKSDDlyAoIE9QIHwgSFkgKT8gTlVcbiAgICBbUFIsIFBPXS5pbmRleE9mKGN1cnJlbnQpICE9PSAtMSAmJiAobmV4dCA9PT0gTlUgfHwgW09QLCBIWV0uaW5kZXhPZihuZXh0KSAhPT0gLTEgJiYgY2xhc3NUeXBlc1thZnRlckluZGV4ICsgMV0gPT09IE5VKSB8fFxuICAgIC8vICggT1AgfCBIWSApIMOXIE5VXG4gICAgW09QLCBIWV0uaW5kZXhPZihjdXJyZW50KSAhPT0gLTEgJiYgbmV4dCA9PT0gTlUgfHxcbiAgICAvLyBOVSDDl1x0KE5VIHwgU1kgfCBJUylcbiAgICBjdXJyZW50ID09PSBOVSAmJiBbTlUsIFNZLCBJU10uaW5kZXhPZihuZXh0KSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIE5VIChOVSB8IFNZIHwgSVMpKiDDlyAoTlUgfCBTWSB8IElTIHwgQ0wgfCBDUClcbiAgICBpZiAoW05VLCBTWSwgSVMsIENMLCBDUF0uaW5kZXhPZihuZXh0KSAhPT0gLTEpIHtcbiAgICAgICAgdmFyIHByZXZJbmRleCA9IGN1cnJlbnRJbmRleDtcbiAgICAgICAgd2hpbGUgKHByZXZJbmRleCA+PSAwKSB7XG4gICAgICAgICAgICB2YXIgdHlwZSA9IGNsYXNzVHlwZXNbcHJldkluZGV4XTtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSBOVSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoW1NZLCBJU10uaW5kZXhPZih0eXBlKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwcmV2SW5kZXgtLTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBOVSAoTlUgfCBTWSB8IElTKSogKENMIHwgQ1ApPyDDlyAoUE8gfCBQUikpXG4gICAgaWYgKFtQUiwgUE9dLmluZGV4T2YobmV4dCkgIT09IC0xKSB7XG4gICAgICAgIHZhciBfcHJldkluZGV4ID0gW0NMLCBDUF0uaW5kZXhPZihjdXJyZW50KSAhPT0gLTEgPyBiZWZvcmVJbmRleCA6IGN1cnJlbnRJbmRleDtcbiAgICAgICAgd2hpbGUgKF9wcmV2SW5kZXggPj0gMCkge1xuICAgICAgICAgICAgdmFyIF90eXBlID0gY2xhc3NUeXBlc1tfcHJldkluZGV4XTtcbiAgICAgICAgICAgIGlmIChfdHlwZSA9PT0gTlUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFtTWSwgSVNdLmluZGV4T2YoX3R5cGUpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIF9wcmV2SW5kZXgtLTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBMQjI2IERvIG5vdCBicmVhayBhIEtvcmVhbiBzeWxsYWJsZS5cbiAgICBpZiAoSkwgPT09IGN1cnJlbnQgJiYgW0pMLCBKViwgSDIsIEgzXS5pbmRleE9mKG5leHQpICE9PSAtMSB8fCBbSlYsIEgyXS5pbmRleE9mKGN1cnJlbnQpICE9PSAtMSAmJiBbSlYsIEpUXS5pbmRleE9mKG5leHQpICE9PSAtMSB8fCBbSlQsIEgzXS5pbmRleE9mKGN1cnJlbnQpICE9PSAtMSAmJiBuZXh0ID09PSBKVCkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIyNyBUcmVhdCBhIEtvcmVhbiBTeWxsYWJsZSBCbG9jayB0aGUgc2FtZSBhcyBJRC5cbiAgICBpZiAoS09SRUFOX1NZTExBQkxFX0JMT0NLLmluZGV4T2YoY3VycmVudCkgIT09IC0xICYmIFtJTiwgUE9dLmluZGV4T2YobmV4dCkgIT09IC0xIHx8IEtPUkVBTl9TWUxMQUJMRV9CTE9DSy5pbmRleE9mKG5leHQpICE9PSAtMSAmJiBjdXJyZW50ID09PSBQUikge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIyOCBEbyBub3QgYnJlYWsgYmV0d2VlbiBhbHBoYWJldGljcyAo4oCcYXTigJ0pLlxuICAgIGlmIChBTFBIQUJFVElDUy5pbmRleE9mKGN1cnJlbnQpICE9PSAtMSAmJiBBTFBIQUJFVElDUy5pbmRleE9mKG5leHQpICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIyOSBEbyBub3QgYnJlYWsgYmV0d2VlbiBudW1lcmljIHB1bmN0dWF0aW9uIGFuZCBhbHBoYWJldGljcyAo4oCcZS5nLuKAnSkuXG4gICAgaWYgKGN1cnJlbnQgPT09IElTICYmIEFMUEhBQkVUSUNTLmluZGV4T2YobmV4dCkgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjMwIERvIG5vdCBicmVhayBiZXR3ZWVuIGxldHRlcnMsIG51bWJlcnMsIG9yIG9yZGluYXJ5IHN5bWJvbHMgYW5kIG9wZW5pbmcgb3IgY2xvc2luZyBwYXJlbnRoZXNlcy5cbiAgICBpZiAoQUxQSEFCRVRJQ1MuY29uY2F0KE5VKS5pbmRleE9mKGN1cnJlbnQpICE9PSAtMSAmJiBuZXh0ID09PSBPUCB8fCBBTFBIQUJFVElDUy5jb25jYXQoTlUpLmluZGV4T2YobmV4dCkgIT09IC0xICYmIGN1cnJlbnQgPT09IENQKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjMwYSBCcmVhayBiZXR3ZWVuIHR3byByZWdpb25hbCBpbmRpY2F0b3Igc3ltYm9scyBpZiBhbmQgb25seSBpZiB0aGVyZSBhcmUgYW4gZXZlbiBudW1iZXIgb2YgcmVnaW9uYWxcbiAgICAvLyBpbmRpY2F0b3JzIHByZWNlZGluZyB0aGUgcG9zaXRpb24gb2YgdGhlIGJyZWFrLlxuICAgIGlmIChjdXJyZW50ID09PSBSSSAmJiBuZXh0ID09PSBSSSkge1xuICAgICAgICB2YXIgaSA9IGluZGljaWVzW2N1cnJlbnRJbmRleF07XG4gICAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICAgIHdoaWxlIChpID4gMCkge1xuICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgaWYgKGNsYXNzVHlwZXNbaV0gPT09IFJJKSB7XG4gICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvdW50ICUgMiAhPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gTEIzMGIgRG8gbm90IGJyZWFrIGJldHdlZW4gYW4gZW1vamkgYmFzZSBhbmQgYW4gZW1vamkgbW9kaWZpZXIuXG4gICAgaWYgKGN1cnJlbnQgPT09IEVCICYmIG5leHQgPT09IEVNKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICByZXR1cm4gQlJFQUtfQUxMT1dFRDtcbn07XG5cbnZhciBsaW5lQnJlYWtBdEluZGV4ID0gZXhwb3J0cy5saW5lQnJlYWtBdEluZGV4ID0gZnVuY3Rpb24gbGluZUJyZWFrQXRJbmRleChjb2RlUG9pbnRzLCBpbmRleCkge1xuICAgIC8vIExCMiBOZXZlciBicmVhayBhdCB0aGUgc3RhcnQgb2YgdGV4dC5cbiAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCMyBBbHdheXMgYnJlYWsgYXQgdGhlIGVuZCBvZiB0ZXh0LlxuICAgIGlmIChpbmRleCA+PSBjb2RlUG9pbnRzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTUFOREFUT1JZO1xuICAgIH1cblxuICAgIHZhciBfY29kZVBvaW50c1RvQ2hhcmFjdGUgPSBjb2RlUG9pbnRzVG9DaGFyYWN0ZXJDbGFzc2VzKGNvZGVQb2ludHMpLFxuICAgICAgICBfY29kZVBvaW50c1RvQ2hhcmFjdGUyID0gX3NsaWNlZFRvQXJyYXkoX2NvZGVQb2ludHNUb0NoYXJhY3RlLCAyKSxcbiAgICAgICAgaW5kaWNpZXMgPSBfY29kZVBvaW50c1RvQ2hhcmFjdGUyWzBdLFxuICAgICAgICBjbGFzc1R5cGVzID0gX2NvZGVQb2ludHNUb0NoYXJhY3RlMlsxXTtcblxuICAgIHJldHVybiBfbGluZUJyZWFrQXRJbmRleChjb2RlUG9pbnRzLCBjbGFzc1R5cGVzLCBpbmRpY2llcywgaW5kZXgpO1xufTtcblxudmFyIGNzc0Zvcm1hdHRlZENsYXNzZXMgPSBmdW5jdGlvbiBjc3NGb3JtYXR0ZWRDbGFzc2VzKGNvZGVQb2ludHMsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IHsgbGluZUJyZWFrOiAnbm9ybWFsJywgd29yZEJyZWFrOiAnbm9ybWFsJyB9O1xuICAgIH1cblxuICAgIHZhciBfY29kZVBvaW50c1RvQ2hhcmFjdGUzID0gY29kZVBvaW50c1RvQ2hhcmFjdGVyQ2xhc3Nlcyhjb2RlUG9pbnRzLCBvcHRpb25zLmxpbmVCcmVhayksXG4gICAgICAgIF9jb2RlUG9pbnRzVG9DaGFyYWN0ZTQgPSBfc2xpY2VkVG9BcnJheShfY29kZVBvaW50c1RvQ2hhcmFjdGUzLCAzKSxcbiAgICAgICAgaW5kaWNpZXMgPSBfY29kZVBvaW50c1RvQ2hhcmFjdGU0WzBdLFxuICAgICAgICBjbGFzc1R5cGVzID0gX2NvZGVQb2ludHNUb0NoYXJhY3RlNFsxXSxcbiAgICAgICAgaXNMZXR0ZXJOdW1iZXIgPSBfY29kZVBvaW50c1RvQ2hhcmFjdGU0WzJdO1xuXG4gICAgaWYgKG9wdGlvbnMud29yZEJyZWFrID09PSAnYnJlYWstYWxsJyB8fCBvcHRpb25zLndvcmRCcmVhayA9PT0gJ2JyZWFrLXdvcmQnKSB7XG4gICAgICAgIGNsYXNzVHlwZXMgPSBjbGFzc1R5cGVzLm1hcChmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIFtOVSwgQUwsIFNBXS5pbmRleE9mKHR5cGUpICE9PSAtMSA/IElEIDogdHlwZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIGZvcmJpZGRlbkJyZWFrcG9pbnRzID0gb3B0aW9ucy53b3JkQnJlYWsgPT09ICdrZWVwLWFsbCcgPyBpc0xldHRlck51bWJlci5tYXAoZnVuY3Rpb24gKGlzTGV0dGVyTnVtYmVyLCBpKSB7XG4gICAgICAgIHJldHVybiBpc0xldHRlck51bWJlciAmJiBjb2RlUG9pbnRzW2ldID49IDB4NGUwMCAmJiBjb2RlUG9pbnRzW2ldIDw9IDB4OWZmZjtcbiAgICB9KSA6IG51bGw7XG5cbiAgICByZXR1cm4gW2luZGljaWVzLCBjbGFzc1R5cGVzLCBmb3JiaWRkZW5CcmVha3BvaW50c107XG59O1xuXG52YXIgaW5saW5lQnJlYWtPcHBvcnR1bml0aWVzID0gZXhwb3J0cy5pbmxpbmVCcmVha09wcG9ydHVuaXRpZXMgPSBmdW5jdGlvbiBpbmxpbmVCcmVha09wcG9ydHVuaXRpZXMoc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGNvZGVQb2ludHMgPSAoMCwgX1V0aWwudG9Db2RlUG9pbnRzKShzdHIpO1xuICAgIHZhciBvdXRwdXQgPSBCUkVBS19OT1RfQUxMT1dFRDtcblxuICAgIHZhciBfY3NzRm9ybWF0dGVkQ2xhc3NlcyA9IGNzc0Zvcm1hdHRlZENsYXNzZXMoY29kZVBvaW50cywgb3B0aW9ucyksXG4gICAgICAgIF9jc3NGb3JtYXR0ZWRDbGFzc2VzMiA9IF9zbGljZWRUb0FycmF5KF9jc3NGb3JtYXR0ZWRDbGFzc2VzLCAzKSxcbiAgICAgICAgaW5kaWNpZXMgPSBfY3NzRm9ybWF0dGVkQ2xhc3NlczJbMF0sXG4gICAgICAgIGNsYXNzVHlwZXMgPSBfY3NzRm9ybWF0dGVkQ2xhc3NlczJbMV0sXG4gICAgICAgIGZvcmJpZGRlbkJyZWFrcG9pbnRzID0gX2Nzc0Zvcm1hdHRlZENsYXNzZXMyWzJdO1xuXG4gICAgY29kZVBvaW50cy5mb3JFYWNoKGZ1bmN0aW9uIChjb2RlUG9pbnQsIGkpIHtcbiAgICAgICAgb3V0cHV0ICs9ICgwLCBfVXRpbC5mcm9tQ29kZVBvaW50KShjb2RlUG9pbnQpICsgKGkgPj0gY29kZVBvaW50cy5sZW5ndGggLSAxID8gQlJFQUtfTUFOREFUT1JZIDogX2xpbmVCcmVha0F0SW5kZXgoY29kZVBvaW50cywgY2xhc3NUeXBlcywgaW5kaWNpZXMsIGkgKyAxLCBmb3JiaWRkZW5CcmVha3BvaW50cykpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG91dHB1dDtcbn07XG5cbnZhciBCcmVhayA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCcmVhayhjb2RlUG9pbnRzLCBsaW5lQnJlYWssIHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJyZWFrKTtcblxuICAgICAgICB0aGlzLl9jb2RlUG9pbnRzID0gY29kZVBvaW50cztcbiAgICAgICAgdGhpcy5yZXF1aXJlZCA9IGxpbmVCcmVhayA9PT0gQlJFQUtfTUFOREFUT1JZO1xuICAgICAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XG4gICAgICAgIHRoaXMuZW5kID0gZW5kO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhCcmVhaywgW3tcbiAgICAgICAga2V5OiAnc2xpY2UnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2xpY2UoKSB7XG4gICAgICAgICAgICByZXR1cm4gX1V0aWwuZnJvbUNvZGVQb2ludC5hcHBseSh1bmRlZmluZWQsIF90b0NvbnN1bWFibGVBcnJheSh0aGlzLl9jb2RlUG9pbnRzLnNsaWNlKHRoaXMuc3RhcnQsIHRoaXMuZW5kKSkpO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEJyZWFrO1xufSgpO1xuXG52YXIgTGluZUJyZWFrZXIgPSBleHBvcnRzLkxpbmVCcmVha2VyID0gZnVuY3Rpb24gTGluZUJyZWFrZXIoc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGNvZGVQb2ludHMgPSAoMCwgX1V0aWwudG9Db2RlUG9pbnRzKShzdHIpO1xuXG4gICAgdmFyIF9jc3NGb3JtYXR0ZWRDbGFzc2VzMyA9IGNzc0Zvcm1hdHRlZENsYXNzZXMoY29kZVBvaW50cywgb3B0aW9ucyksXG4gICAgICAgIF9jc3NGb3JtYXR0ZWRDbGFzc2VzNCA9IF9zbGljZWRUb0FycmF5KF9jc3NGb3JtYXR0ZWRDbGFzc2VzMywgMyksXG4gICAgICAgIGluZGljaWVzID0gX2Nzc0Zvcm1hdHRlZENsYXNzZXM0WzBdLFxuICAgICAgICBjbGFzc1R5cGVzID0gX2Nzc0Zvcm1hdHRlZENsYXNzZXM0WzFdLFxuICAgICAgICBmb3JiaWRkZW5CcmVha3BvaW50cyA9IF9jc3NGb3JtYXR0ZWRDbGFzc2VzNFsyXTtcblxuICAgIHZhciBsZW5ndGggPSBjb2RlUG9pbnRzLmxlbmd0aDtcbiAgICB2YXIgbGFzdEVuZCA9IDA7XG4gICAgdmFyIG5leHRJbmRleCA9IDA7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBuZXh0OiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgICAgaWYgKG5leHRJbmRleCA+PSBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbGluZUJyZWFrID0gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgICAgICAgICB3aGlsZSAobmV4dEluZGV4IDwgbGVuZ3RoICYmIChsaW5lQnJlYWsgPSBfbGluZUJyZWFrQXRJbmRleChjb2RlUG9pbnRzLCBjbGFzc1R5cGVzLCBpbmRpY2llcywgKytuZXh0SW5kZXgsIGZvcmJpZGRlbkJyZWFrcG9pbnRzKSkgPT09IEJSRUFLX05PVF9BTExPV0VEKSB7fVxuXG4gICAgICAgICAgICBpZiAobGluZUJyZWFrICE9PSBCUkVBS19OT1RfQUxMT1dFRCB8fCBuZXh0SW5kZXggPT09IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IG5ldyBCcmVhayhjb2RlUG9pbnRzLCBsaW5lQnJlYWssIGxhc3RFbmQsIG5leHRJbmRleCk7XG4gICAgICAgICAgICAgICAgbGFzdEVuZCA9IG5leHRJbmRleDtcbiAgICAgICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUgfTtcbiAgICAgICAgfVxuICAgIH07XG59O1xuXG4vKioqLyB9KSxcbi8qIDQ4ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuVHJpZSA9IGV4cG9ydHMuY3JlYXRlVHJpZUZyb21CYXNlNjQgPSBleHBvcnRzLlVUUklFMl9JTkRFWF8yX01BU0sgPSBleHBvcnRzLlVUUklFMl9JTkRFWF8yX0JMT0NLX0xFTkdUSCA9IGV4cG9ydHMuVVRSSUUyX09NSVRURURfQk1QX0lOREVYXzFfTEVOR1RIID0gZXhwb3J0cy5VVFJJRTJfSU5ERVhfMV9PRkZTRVQgPSBleHBvcnRzLlVUUklFMl9VVEY4XzJCX0lOREVYXzJfTEVOR1RIID0gZXhwb3J0cy5VVFJJRTJfVVRGOF8yQl9JTkRFWF8yX09GRlNFVCA9IGV4cG9ydHMuVVRSSUUyX0lOREVYXzJfQk1QX0xFTkdUSCA9IGV4cG9ydHMuVVRSSUUyX0xTQ1BfSU5ERVhfMl9MRU5HVEggPSBleHBvcnRzLlVUUklFMl9EQVRBX01BU0sgPSBleHBvcnRzLlVUUklFMl9EQVRBX0JMT0NLX0xFTkdUSCA9IGV4cG9ydHMuVVRSSUUyX0xTQ1BfSU5ERVhfMl9PRkZTRVQgPSBleHBvcnRzLlVUUklFMl9TSElGVF8xXzIgPSBleHBvcnRzLlVUUklFMl9JTkRFWF9TSElGVCA9IGV4cG9ydHMuVVRSSUUyX1NISUZUXzEgPSBleHBvcnRzLlVUUklFMl9TSElGVF8yID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX1V0aWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEzKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLyoqIFNoaWZ0IHNpemUgZm9yIGdldHRpbmcgdGhlIGluZGV4LTIgdGFibGUgb2Zmc2V0LiAqL1xudmFyIFVUUklFMl9TSElGVF8yID0gZXhwb3J0cy5VVFJJRTJfU0hJRlRfMiA9IDU7XG5cbi8qKiBTaGlmdCBzaXplIGZvciBnZXR0aW5nIHRoZSBpbmRleC0xIHRhYmxlIG9mZnNldC4gKi9cbnZhciBVVFJJRTJfU0hJRlRfMSA9IGV4cG9ydHMuVVRSSUUyX1NISUZUXzEgPSA2ICsgNTtcblxuLyoqXG4gKiBTaGlmdCBzaXplIGZvciBzaGlmdGluZyBsZWZ0IHRoZSBpbmRleCBhcnJheSB2YWx1ZXMuXG4gKiBJbmNyZWFzZXMgcG9zc2libGUgZGF0YSBzaXplIHdpdGggMTYtYml0IGluZGV4IHZhbHVlcyBhdCB0aGUgY29zdFxuICogb2YgY29tcGFjdGFiaWxpdHkuXG4gKiBUaGlzIHJlcXVpcmVzIGRhdGEgYmxvY2tzIHRvIGJlIGFsaWduZWQgYnkgVVRSSUUyX0RBVEFfR1JBTlVMQVJJVFkuXG4gKi9cbnZhciBVVFJJRTJfSU5ERVhfU0hJRlQgPSBleHBvcnRzLlVUUklFMl9JTkRFWF9TSElGVCA9IDI7XG5cbi8qKlxuICogRGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSB0d28gc2hpZnQgc2l6ZXMsXG4gKiBmb3IgZ2V0dGluZyBhbiBpbmRleC0xIG9mZnNldCBmcm9tIGFuIGluZGV4LTIgb2Zmc2V0LiA2PTExLTVcbiAqL1xudmFyIFVUUklFMl9TSElGVF8xXzIgPSBleHBvcnRzLlVUUklFMl9TSElGVF8xXzIgPSBVVFJJRTJfU0hJRlRfMSAtIFVUUklFMl9TSElGVF8yO1xuXG4vKipcbiAqIFRoZSBwYXJ0IG9mIHRoZSBpbmRleC0yIHRhYmxlIGZvciBVK0Q4MDAuLlUrREJGRiBzdG9yZXMgdmFsdWVzIGZvclxuICogbGVhZCBzdXJyb2dhdGUgY29kZSBfdW5pdHNfIG5vdCBjb2RlIF9wb2ludHNfLlxuICogVmFsdWVzIGZvciBsZWFkIHN1cnJvZ2F0ZSBjb2RlIF9wb2ludHNfIGFyZSBpbmRleGVkIHdpdGggdGhpcyBwb3J0aW9uIG9mIHRoZSB0YWJsZS5cbiAqIExlbmd0aD0zMj0weDIwPTB4NDAwPj5VVFJJRTJfU0hJRlRfMi4gKFRoZXJlIGFyZSAxMDI0PTB4NDAwIGxlYWQgc3Vycm9nYXRlcy4pXG4gKi9cbnZhciBVVFJJRTJfTFNDUF9JTkRFWF8yX09GRlNFVCA9IGV4cG9ydHMuVVRSSUUyX0xTQ1BfSU5ERVhfMl9PRkZTRVQgPSAweDEwMDAwID4+IFVUUklFMl9TSElGVF8yO1xuXG4vKiogTnVtYmVyIG9mIGVudHJpZXMgaW4gYSBkYXRhIGJsb2NrLiAzMj0weDIwICovXG52YXIgVVRSSUUyX0RBVEFfQkxPQ0tfTEVOR1RIID0gZXhwb3J0cy5VVFJJRTJfREFUQV9CTE9DS19MRU5HVEggPSAxIDw8IFVUUklFMl9TSElGVF8yO1xuLyoqIE1hc2sgZm9yIGdldHRpbmcgdGhlIGxvd2VyIGJpdHMgZm9yIHRoZSBpbi1kYXRhLWJsb2NrIG9mZnNldC4gKi9cbnZhciBVVFJJRTJfREFUQV9NQVNLID0gZXhwb3J0cy5VVFJJRTJfREFUQV9NQVNLID0gVVRSSUUyX0RBVEFfQkxPQ0tfTEVOR1RIIC0gMTtcblxudmFyIFVUUklFMl9MU0NQX0lOREVYXzJfTEVOR1RIID0gZXhwb3J0cy5VVFJJRTJfTFNDUF9JTkRFWF8yX0xFTkdUSCA9IDB4NDAwID4+IFVUUklFMl9TSElGVF8yO1xuLyoqIENvdW50IHRoZSBsZW5ndGhzIG9mIGJvdGggQk1QIHBpZWNlcy4gMjA4MD0weDgyMCAqL1xudmFyIFVUUklFMl9JTkRFWF8yX0JNUF9MRU5HVEggPSBleHBvcnRzLlVUUklFMl9JTkRFWF8yX0JNUF9MRU5HVEggPSBVVFJJRTJfTFNDUF9JTkRFWF8yX09GRlNFVCArIFVUUklFMl9MU0NQX0lOREVYXzJfTEVOR1RIO1xuLyoqXG4gKiBUaGUgMi1ieXRlIFVURi04IHZlcnNpb24gb2YgdGhlIGluZGV4LTIgdGFibGUgZm9sbG93cyBhdCBvZmZzZXQgMjA4MD0weDgyMC5cbiAqIExlbmd0aCAzMj0weDIwIGZvciBsZWFkIGJ5dGVzIEMwLi5ERiwgcmVnYXJkbGVzcyBvZiBVVFJJRTJfU0hJRlRfMi5cbiAqL1xudmFyIFVUUklFMl9VVEY4XzJCX0lOREVYXzJfT0ZGU0VUID0gZXhwb3J0cy5VVFJJRTJfVVRGOF8yQl9JTkRFWF8yX09GRlNFVCA9IFVUUklFMl9JTkRFWF8yX0JNUF9MRU5HVEg7XG52YXIgVVRSSUUyX1VURjhfMkJfSU5ERVhfMl9MRU5HVEggPSBleHBvcnRzLlVUUklFMl9VVEY4XzJCX0lOREVYXzJfTEVOR1RIID0gMHg4MDAgPj4gNjsgLyogVSswODAwIGlzIHRoZSBmaXJzdCBjb2RlIHBvaW50IGFmdGVyIDItYnl0ZSBVVEYtOCAqL1xuLyoqXG4gKiBUaGUgaW5kZXgtMSB0YWJsZSwgb25seSB1c2VkIGZvciBzdXBwbGVtZW50YXJ5IGNvZGUgcG9pbnRzLCBhdCBvZmZzZXQgMjExMj0weDg0MC5cbiAqIFZhcmlhYmxlIGxlbmd0aCwgZm9yIGNvZGUgcG9pbnRzIHVwIHRvIGhpZ2hTdGFydCwgd2hlcmUgdGhlIGxhc3Qgc2luZ2xlLXZhbHVlIHJhbmdlIHN0YXJ0cy5cbiAqIE1heGltdW0gbGVuZ3RoIDUxMj0weDIwMD0weDEwMDAwMD4+VVRSSUUyX1NISUZUXzEuXG4gKiAoRm9yIDB4MTAwMDAwIHN1cHBsZW1lbnRhcnkgY29kZSBwb2ludHMgVSsxMDAwMC4uVSsxMGZmZmYuKVxuICpcbiAqIFRoZSBwYXJ0IG9mIHRoZSBpbmRleC0yIHRhYmxlIGZvciBzdXBwbGVtZW50YXJ5IGNvZGUgcG9pbnRzIHN0YXJ0c1xuICogYWZ0ZXIgdGhpcyBpbmRleC0xIHRhYmxlLlxuICpcbiAqIEJvdGggdGhlIGluZGV4LTEgdGFibGUgYW5kIHRoZSBmb2xsb3dpbmcgcGFydCBvZiB0aGUgaW5kZXgtMiB0YWJsZVxuICogYXJlIG9taXR0ZWQgY29tcGxldGVseSBpZiB0aGVyZSBpcyBvbmx5IEJNUCBkYXRhLlxuICovXG52YXIgVVRSSUUyX0lOREVYXzFfT0ZGU0VUID0gZXhwb3J0cy5VVFJJRTJfSU5ERVhfMV9PRkZTRVQgPSBVVFJJRTJfVVRGOF8yQl9JTkRFWF8yX09GRlNFVCArIFVUUklFMl9VVEY4XzJCX0lOREVYXzJfTEVOR1RIO1xuXG4vKipcbiAqIE51bWJlciBvZiBpbmRleC0xIGVudHJpZXMgZm9yIHRoZSBCTVAuIDMyPTB4MjBcbiAqIFRoaXMgcGFydCBvZiB0aGUgaW5kZXgtMSB0YWJsZSBpcyBvbWl0dGVkIGZyb20gdGhlIHNlcmlhbGl6ZWQgZm9ybS5cbiAqL1xudmFyIFVUUklFMl9PTUlUVEVEX0JNUF9JTkRFWF8xX0xFTkdUSCA9IGV4cG9ydHMuVVRSSUUyX09NSVRURURfQk1QX0lOREVYXzFfTEVOR1RIID0gMHgxMDAwMCA+PiBVVFJJRTJfU0hJRlRfMTtcblxuLyoqIE51bWJlciBvZiBlbnRyaWVzIGluIGFuIGluZGV4LTIgYmxvY2suIDY0PTB4NDAgKi9cbnZhciBVVFJJRTJfSU5ERVhfMl9CTE9DS19MRU5HVEggPSBleHBvcnRzLlVUUklFMl9JTkRFWF8yX0JMT0NLX0xFTkdUSCA9IDEgPDwgVVRSSUUyX1NISUZUXzFfMjtcbi8qKiBNYXNrIGZvciBnZXR0aW5nIHRoZSBsb3dlciBiaXRzIGZvciB0aGUgaW4taW5kZXgtMi1ibG9jayBvZmZzZXQuICovXG52YXIgVVRSSUUyX0lOREVYXzJfTUFTSyA9IGV4cG9ydHMuVVRSSUUyX0lOREVYXzJfTUFTSyA9IFVUUklFMl9JTkRFWF8yX0JMT0NLX0xFTkdUSCAtIDE7XG5cbnZhciBjcmVhdGVUcmllRnJvbUJhc2U2NCA9IGV4cG9ydHMuY3JlYXRlVHJpZUZyb21CYXNlNjQgPSBmdW5jdGlvbiBjcmVhdGVUcmllRnJvbUJhc2U2NChiYXNlNjQpIHtcbiAgICB2YXIgYnVmZmVyID0gKDAsIF9VdGlsLmRlY29kZSkoYmFzZTY0KTtcbiAgICB2YXIgdmlldzMyID0gQXJyYXkuaXNBcnJheShidWZmZXIpID8gKDAsIF9VdGlsLnBvbHlVaW50MzJBcnJheSkoYnVmZmVyKSA6IG5ldyBVaW50MzJBcnJheShidWZmZXIpO1xuICAgIHZhciB2aWV3MTYgPSBBcnJheS5pc0FycmF5KGJ1ZmZlcikgPyAoMCwgX1V0aWwucG9seVVpbnQxNkFycmF5KShidWZmZXIpIDogbmV3IFVpbnQxNkFycmF5KGJ1ZmZlcik7XG4gICAgdmFyIGhlYWRlckxlbmd0aCA9IDI0O1xuXG4gICAgdmFyIGluZGV4ID0gdmlldzE2LnNsaWNlKGhlYWRlckxlbmd0aCAvIDIsIHZpZXczMls0XSAvIDIpO1xuICAgIHZhciBkYXRhID0gdmlldzMyWzVdID09PSAyID8gdmlldzE2LnNsaWNlKChoZWFkZXJMZW5ndGggKyB2aWV3MzJbNF0pIC8gMikgOiB2aWV3MzIuc2xpY2UoTWF0aC5jZWlsKChoZWFkZXJMZW5ndGggKyB2aWV3MzJbNF0pIC8gNCkpO1xuXG4gICAgcmV0dXJuIG5ldyBUcmllKHZpZXczMlswXSwgdmlldzMyWzFdLCB2aWV3MzJbMl0sIHZpZXczMlszXSwgaW5kZXgsIGRhdGEpO1xufTtcblxudmFyIFRyaWUgPSBleHBvcnRzLlRyaWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVHJpZShpbml0aWFsVmFsdWUsIGVycm9yVmFsdWUsIGhpZ2hTdGFydCwgaGlnaFZhbHVlSW5kZXgsIGluZGV4LCBkYXRhKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUcmllKTtcblxuICAgICAgICB0aGlzLmluaXRpYWxWYWx1ZSA9IGluaXRpYWxWYWx1ZTtcbiAgICAgICAgdGhpcy5lcnJvclZhbHVlID0gZXJyb3JWYWx1ZTtcbiAgICAgICAgdGhpcy5oaWdoU3RhcnQgPSBoaWdoU3RhcnQ7XG4gICAgICAgIHRoaXMuaGlnaFZhbHVlSW5kZXggPSBoaWdoVmFsdWVJbmRleDtcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgdmFsdWUgZm9yIGEgY29kZSBwb2ludCBhcyBzdG9yZWQgaW4gdGhlIFRyaWUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29kZVBvaW50IHRoZSBjb2RlIHBvaW50XG4gICAgICogQHJldHVybiB0aGUgdmFsdWVcbiAgICAgKi9cblxuXG4gICAgX2NyZWF0ZUNsYXNzKFRyaWUsIFt7XG4gICAgICAgIGtleTogJ2dldCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXQoY29kZVBvaW50KSB7XG4gICAgICAgICAgICB2YXIgaXggPSB2b2lkIDA7XG4gICAgICAgICAgICBpZiAoY29kZVBvaW50ID49IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoY29kZVBvaW50IDwgMHgwZDgwMCB8fCBjb2RlUG9pbnQgPiAweDBkYmZmICYmIGNvZGVQb2ludCA8PSAweDBmZmZmKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE9yZGluYXJ5IEJNUCBjb2RlIHBvaW50LCBleGNsdWRpbmcgbGVhZGluZyBzdXJyb2dhdGVzLlxuICAgICAgICAgICAgICAgICAgICAvLyBCTVAgdXNlcyBhIHNpbmdsZSBsZXZlbCBsb29rdXAuICBCTVAgaW5kZXggc3RhcnRzIGF0IG9mZnNldCAwIGluIHRoZSBUcmllMiBpbmRleC5cbiAgICAgICAgICAgICAgICAgICAgLy8gMTYgYml0IGRhdGEgaXMgc3RvcmVkIGluIHRoZSBpbmRleCBhcnJheSBpdHNlbGYuXG4gICAgICAgICAgICAgICAgICAgIGl4ID0gdGhpcy5pbmRleFtjb2RlUG9pbnQgPj4gVVRSSUUyX1NISUZUXzJdO1xuICAgICAgICAgICAgICAgICAgICBpeCA9IChpeCA8PCBVVFJJRTJfSU5ERVhfU0hJRlQpICsgKGNvZGVQb2ludCAmIFVUUklFMl9EQVRBX01BU0spO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhW2l4XTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoY29kZVBvaW50IDw9IDB4ZmZmZikge1xuICAgICAgICAgICAgICAgICAgICAvLyBMZWFkIFN1cnJvZ2F0ZSBDb2RlIFBvaW50LiAgQSBTZXBhcmF0ZSBpbmRleCBzZWN0aW9uIGlzIHN0b3JlZCBmb3JcbiAgICAgICAgICAgICAgICAgICAgLy8gbGVhZCBzdXJyb2dhdGUgY29kZSB1bml0cyBhbmQgY29kZSBwb2ludHMuXG4gICAgICAgICAgICAgICAgICAgIC8vICAgVGhlIG1haW4gaW5kZXggaGFzIHRoZSBjb2RlIHVuaXQgZGF0YS5cbiAgICAgICAgICAgICAgICAgICAgLy8gICBGb3IgdGhpcyBmdW5jdGlvbiwgd2UgbmVlZCB0aGUgY29kZSBwb2ludCBkYXRhLlxuICAgICAgICAgICAgICAgICAgICAvLyBOb3RlOiB0aGlzIGV4cHJlc3Npb24gY291bGQgYmUgcmVmYWN0b3JlZCBmb3Igc2xpZ2h0bHkgaW1wcm92ZWQgZWZmaWNpZW5jeSwgYnV0XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgIHN1cnJvZ2F0ZSBjb2RlIHBvaW50cyB3aWxsIGJlIHNvIHJhcmUgaW4gcHJhY3RpY2UgdGhhdCBpdCdzIG5vdCB3b3J0aCBpdC5cbiAgICAgICAgICAgICAgICAgICAgaXggPSB0aGlzLmluZGV4W1VUUklFMl9MU0NQX0lOREVYXzJfT0ZGU0VUICsgKGNvZGVQb2ludCAtIDB4ZDgwMCA+PiBVVFJJRTJfU0hJRlRfMildO1xuICAgICAgICAgICAgICAgICAgICBpeCA9IChpeCA8PCBVVFJJRTJfSU5ERVhfU0hJRlQpICsgKGNvZGVQb2ludCAmIFVUUklFMl9EQVRBX01BU0spO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhW2l4XTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoY29kZVBvaW50IDwgdGhpcy5oaWdoU3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU3VwcGxlbWVudGFsIGNvZGUgcG9pbnQsIHVzZSB0d28tbGV2ZWwgbG9va3VwLlxuICAgICAgICAgICAgICAgICAgICBpeCA9IFVUUklFMl9JTkRFWF8xX09GRlNFVCAtIFVUUklFMl9PTUlUVEVEX0JNUF9JTkRFWF8xX0xFTkdUSCArIChjb2RlUG9pbnQgPj4gVVRSSUUyX1NISUZUXzEpO1xuICAgICAgICAgICAgICAgICAgICBpeCA9IHRoaXMuaW5kZXhbaXhdO1xuICAgICAgICAgICAgICAgICAgICBpeCArPSBjb2RlUG9pbnQgPj4gVVRSSUUyX1NISUZUXzIgJiBVVFJJRTJfSU5ERVhfMl9NQVNLO1xuICAgICAgICAgICAgICAgICAgICBpeCA9IHRoaXMuaW5kZXhbaXhdO1xuICAgICAgICAgICAgICAgICAgICBpeCA9IChpeCA8PCBVVFJJRTJfSU5ERVhfU0hJRlQpICsgKGNvZGVQb2ludCAmIFVUUklFMl9EQVRBX01BU0spO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhW2l4XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNvZGVQb2ludCA8PSAweDEwZmZmZikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhW3RoaXMuaGlnaFZhbHVlSW5kZXhdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRmFsbCB0aHJvdWdoLiAgVGhlIGNvZGUgcG9pbnQgaXMgb3V0c2lkZSBvZiB0aGUgbGVnYWwgcmFuZ2Ugb2YgMC4uMHgxMGZmZmYuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvclZhbHVlO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFRyaWU7XG59KCk7XG5cbi8qKiovIH0pLFxuLyogNDkgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxubW9kdWxlLmV4cG9ydHMgPSAnS3dBQUFBQUFBQUFBQ0E0QUlEb0FBUEFmQUFBQ0FBQUFBQUFJQUJBQUdBQkFBRWdBVUFCWUFGNEFaZ0JlQUdZQVlBQm9BSEFBZUFCZUFHWUFmQUNFQUlBQWlBQ1FBSmdBb0FDb0FLMEF0UUM5QU1VQVhnQm1BRjRBWmdCZUFHWUF6UURWQUY0QVpnRFJBTmtBM2dEbUFPd0E5QUQ4QUFRQkRBRVVBUm9CSWdHQUFJZ0FKd0V2QVRjQlB3RkZBVTBCVEFGVUFWd0JaQUZzQVhNQmV3R0RBVEFBaXdHVEFac0JvZ0drQWF3QnRBRzhBY0lCeWdIU0Fkb0I0QUhvQWZBQitBSCtBUVlDRGdJV0F2NEJIZ0ltQWk0Q05nSStBa1VDVFFKVEFsc0NZd0pyQW5FQ2VRS0JBazBDaVFLUkFwa0NvUUtvQXJBQ3VBTEFBc1FDekFJd0FOUUMzQUxrQWpBQTdBTDBBdndDQVFNSkF4QURHQU13QUNBREpnTXVBellEUGdPQUFFWURTZ05TQTFJRFVnTmFBMW9EWUFOaUEySURnQUNBQUdvRGdBQnlBM1lEZmdPQUFJUURnQUNLQTVJRG1nT0FBSUFBb2dPcUE0QUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFLOER0d09BQUlBQXZ3UEhBODhEMXdQZkF5QUQ1d1BzQS9RRC9BT0FBSUFBQkFRTUJCSUVnQUFXQkI0RUpnUXVCRE1FSUFNN0JFRUVYZ0JKQkNBRFVRUlpCR0VFYVFRd0FEQUFjUVErQVhrRWdRU0pCSkVFZ0FDWUJJQUFvQVNvQks4RXR3UXdBTDhFeFFTQUFJQUFnQUNBQUlBQWdBQ2dBTTBFWGdCZUFGNEFYZ0JlQUY0QVhnQmVBTlVFWGdEWkJPRUVYZ0RwQlBFRStRUUJCUWtGRVFVWkJTRUZLUVV4QlRVRlBRVkZCVXdGVkFWY0JWNEFZd1ZlQUdzRmN3VjdCWU1GaXdXU0JWNEFtZ1dnQmFjRlhnQmVBRjRBWGdCZUFLc0ZYZ0N5QmJFRnVnVzdCY0lGd2dYSUJjSUZ3Z1hRQmRRRjNBWGtCZXNGOHdYN0JRTUdDd1lUQmhzR0l3WXJCak1HT3daZUFEOEdSd1pOQmw0QVZBWmJCbDRBWGdCZUFGNEFYZ0JlQUY0QVhnQmVBRjRBWGdCZUFHTUdYZ0JxQm5FR1hnQmVBRjRBWGdCZUFGNEFYZ0JlQUY0QVhnQjVCb0FHNHdTR0JvNEdrd2FBQUlBREhnUjVBRjRBWGdCZUFKc0dnQUJHQTRBQW93YXJCck1Hc3dhZ0FMc0d3d2JMQmpBQTB3YmFCdG9HM1FiYUJ0b0cyZ2JhQnRvRzJnYmxCdXNHOHdiN0JnTUhDd2NUQnhzSEN3Y2pCeXNITUFjMUJ6VUhPZ2RDQjlvR1NnZFNCMW9IWUFmYUJsb0hhQWZhQmxJSDJnYmFCdG9HMmdiYUJ0b0cyZ2JhQmpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhiUWRlQUY0QU5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWQxQjMwSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQjRNSDJnYUtCNjhFZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSThIbHdkZUFKOEhwd2VBQUlBQXJ3ZTNCMTRBWGdDL0I4VUh5Z2N3QU5BSDJBZmdCNEFBNkFmd0J6NEIrQWNBQ0Z3QkNBZ1BDQmNJb2dFWUFSOElKd2lBQUM4SU53Zy9DQ0FEUndoUENGY0lYd2huQ0VvREdnU0FBSUFBZ0FCdkNIY0llQWg1Q0hvSWV3aDhDSDBJZHdoNENIa0llZ2g3Q0h3SWZRaDNDSGdJZVFoNkNIc0lmQWg5Q0hjSWVBaDVDSG9JZXdoOENIMElkd2g0Q0hrSWVnaDdDSHdJZlFoM0NIZ0llUWg2Q0hzSWZBaDlDSGNJZUFoNUNIb0lld2g4Q0gwSWR3aDRDSGtJZWdoN0NId0lmUWgzQ0hnSWVRaDZDSHNJZkFoOUNIY0llQWg1Q0hvSWV3aDhDSDBJZHdoNENIa0llZ2g3Q0h3SWZRaDNDSGdJZVFoNkNIc0lmQWg5Q0hjSWVBaDVDSG9JZXdoOENIMElkd2g0Q0hrSWVnaDdDSHdJZlFoM0NIZ0llUWg2Q0hzSWZBaDlDSGNJZUFoNUNIb0lld2g4Q0gwSWR3aDRDSGtJZWdoN0NId0lmUWgzQ0hnSWVRaDZDSHNJZkFoOUNIY0llQWg1Q0hvSWV3aDhDSDBJZHdoNENIa0llZ2g3Q0h3SWZRaDNDSGdJZVFoNkNIc0lmQWg5Q0hjSWVBaDVDSG9JZXdoOENIMElkd2g0Q0hrSWVnaDdDSHdJZlFoM0NIZ0llUWg2Q0hzSWZBaDlDSGNJZUFoNUNIb0lld2g4Q0gwSWR3aDRDSGtJZWdoN0NId0lmUWgzQ0hnSWVRaDZDSHNJZkFoOUNIY0llQWg1Q0hvSWV3aDhDSDBJZHdoNENIa0llZ2g3Q0h3SWZRaDNDSGdJZVFoNkNIc0lmQWg5Q0hjSWVBaDVDSG9JZXdoOENIMElkd2g0Q0hrSWVnaDdDSHdJZlFoM0NIZ0llUWg2Q0hzSWZBaDlDSGNJZUFoNUNIb0lld2g4Q0gwSWR3aDRDSGtJZWdoN0NId0lmUWgzQ0hnSWVRaDZDSHNJZkFoOUNIY0llQWg1Q0hvSWV3aDhDSDBJZHdoNENIa0llZ2g3Q0h3SWZRaDNDSGdJZVFoNkNIc0lmQWg5Q0hjSWVBaDVDSG9JZXdoOENIMElkd2g0Q0hrSWVnaDdDSHdJZlFoM0NIZ0llUWg2Q0hzSWZBaDlDSGNJZUFoNUNIb0lld2g4Q0gwSWR3aDRDSGtJZWdoN0NId0lmUWgzQ0hnSWVRaDZDSHNJZkFoOUNIY0llQWg1Q0hvSWV3aDhDSDBJZHdoNENIa0llZ2g3Q0h3SWZRaDNDSGdJZVFoNkNIc0lmQWg5Q0hjSWVBaDVDSG9JZXdoOENIMElkd2g0Q0hrSWVnaDdDSHdJaEFpTENJNElNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBSllJbGdpV0NKWUlsZ2lXQ0pZSWxnaVdDSllJbGdpV0NKWUlsZ2lXQ0pZSWxnaVdDSllJbGdpV0NKWUlsZ2lXQ0pZSWxnaVdDSllJbGdpV0NKWUlsZ2d3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCNTRJTlFjMUI2SUkyZ2FxQ0xJSXVnaUFBSUFBdmdqR0NJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUF5d2lIQVlBQTB3aUFBTmtJM1FqbENPMEk5QWo4Q0lBQWdBQ0FBQUlKQ2drU0NSb0pJZ2tuQ1RZSEx3azNDWllJbGdpV0NKWUlsZ2lXQ0pZSWxnaVdDSllJbGdpV0NKWUlsZ2lXQ0pZSWxnaVdDSllJbGdpV0NKWUlsZ2lXQ0pZSWxnaVdDSllJbGdpV0NKWUlsZ2lBQUlBQUFBRkFBWGdCZUFHQUFjQUJlQUh3QVFBQ1FBS0FBclFDOUFKNEFYZ0JlQUUwQTNnQlJBTjRBN0FEOEFNd0JHZ0VBQUtjQk53RUZBVXdCWEFGNFFraENtRUtuQXJjQ2dBSEhBc0FCejRMQUFjQUJ3QUhBQWQrQzZBQm9BRytDLzRMQUFjQUJ3QUhBQWMrREY0TUFBY0FCNTRNM2d3ZURWNE5uZzNlRGFBQm9BR2dBYUFCb0FHZ0FhQUJvQUdnQWFBQm9BR2dBYUFCb0FHZ0FhQUJvQUdnQWFBQm9BRWVEcUFCVmc2V0RxQUJvUTZnQWFBQm9BSFhEdmNPTncvM0R2Y085dzczRHZjTzl3NzNEdmNPOXc3M0R2Y085dzczRHZjTzl3NzNEdmNPOXc3M0R2Y085dzczRHZjTzl3NzNEdmNPOXc3M0R2Y085dzczRG5jUEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUI3Y1BQd2xHQ1U0Sk1BQ0FBSUFBZ0FCV0NWNEpZUW1BQUdrSmNBbDRDWHdKZ0Frd0FEQUFNQUF3QUlnSmdBQ0xDWk1KZ0FDWkNaOEpvd21yQ1lBQXN3a3dBRjRBWGdCOEFJQUF1d2tBQk1NSnlRbUFBTTRKZ0FEVkNUQUFNQUF3QURBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQXF3WVdCTmtJTUFBd0FEQUFNQURkQ2VBSjZBbnVDUjRFOWdrd0FQNEpCUW9OQ2pBQU1BQ0FBQlVLMHdpQUFCMEtKQW9zQ2pRS2dBQXdBRHdLUXdxQUFFc0t2UW1kQ1ZNS1d3b3dBREFBZ0FDQUFMY0VNQUNBQUdNS2dBQnJDakFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBZUJEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QUlrRVBRRnpDbm9LaVFTQ0Nvb0trQXFKQkpnS29BcWtDb2tFR0FHc0NyUUt2QXJCQ2pBQU1BREpDdEVLRlFIWkN1RUsvZ0hwQ3ZFS01BQXdBREFBTUFDQUFJd0UrUW93QUlBQVB3RUJDekFBTUFBd0FEQUFNQUNBQUFrTEVRc3dBSUFBUHdFWkN5RUxnQUFPQ0NrTE1BQXhDemtMTUFBd0FEQUFNQUF3QURBQVhnQmVBRUVMTUFBd0FEQUFNQUF3QURBQU1BQXdBRWtMVFF0VkM0QUFYQXRrQzRBQWlRa3dBREFBTUFBd0FEQUFNQUF3QURBQWJBdHhDM2tMZ0F1RkM0c0xNQUF3QUpNTGx3dWZDekFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFwd3N3QURBQU1BQ0FBSUFBZ0FDdkM0QUFnQUNBQUlBQWdBQ0FBTGNMTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUF2d3VBQU1jTGdBQ0FBSUFBZ0FDQUFJQUF5Z3VBQUlBQWdBQ0FBSUFBMFFzd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFOa0xnQUNBQUlBQTRBc3dBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDSkNSNEU2QXN3QURBQWh3SHdDNEFBK0FzQURBZ01FQXd3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUNBQUlBQUdBd2REQ1VNTUFBd0FDME1OUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUXcxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVIUFF3d0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURVSE5RYzFCelVITlFjMUJ6VUhOUWMyQnpBQU1BQTVERFVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFkRkREQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQWdBQ0FBSUFBVFF4U0RGb01NQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FGNEFYZ0JlQUY0QVhnQmVBRjRBWWd4ZUFHb01YZ0J4REhrTWZ3eGVBSVVNWGdCZUFJME1NQUF3QURBQU1BQXdBRjRBWGdDVkRKME1NQUF3QURBQU1BQmVBRjRBcFF4ZUFLc01zd3k3REY0QXdneTlETW9NWGdCZUFGNEFYZ0JlQUY0QVhnQmVBRjRBWGdEUkROa01lUUJxQ2VBTTNBeDhBT1lNN0F6MERQZ01YZ0JlQUY0QVhnQmVBRjRBWGdCZUFGNEFYZ0JlQUY0QVhnQmVBRjRBWGdDZ0FBQU5vQUFIRFE0TkZnMHdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUFlRFNZTk1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QUlBQWdBQ0FBSUFBZ0FDQUFDNE5NQUJlQUY0QU5nMHdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBRDROUmcxT0RWWU5YZzFtRFRBQWJRMHdBREFBTUFBd0FEQUFNQUF3QURBQTJnYmFCdG9HMmdiYUJ0b0cyZ2JhQm5VTmVnM0NCWUFOd2dXRkRkb0dqQTNhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYVVEWndOcEEyb0Rkb0cyZ2F3RGJjTnZ3M0hEZG9HMmdiUERkWU4zQTNmRGVZTjJnYnNEZk1OMmdiYUJ2b04vZzNhQmdZT0RnN2FCbDRBWGdCZUFCWU9YZ0JlQUNVRzJnWWVEbDRBSkE1ZUFDd08ydzNhQnRvR01RNDVEdG9HMmdiYUJ0b0dRUTdhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnWkpEalVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCMUVPMmdZMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWRaRGpVSE5RYzFCelVITlFjMUIyRU9OUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhhQTQxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCM0FPMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdZMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCMkVPMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdaSkR0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJra09lQTZnQUtBQW9BQXdBREFBTUFBd0FLQUFvQUNnQUtBQW9BQ2dBS0FBZ0E0d0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUQvL3dRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUEwQUF3QUJBQUVBQWdBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBS0FCTUFGd0FlQUJzQUdnQWVBQmNBRmdBU0FCNEFHd0FZQUE4QUdBQWNBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBR0FBWUFCNEFIZ0FlQUJNQUhnQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUZnQWJBQklBSGdBZUFCNEFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFCWUFEUUFSQUI0QUJBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBQkFBRUFBUUFCQUFFQUFVQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFrQUZnQWFBQnNBR3dBYkFCNEFIUUFkQUI0QVR3QVhBQjRBRFFBZUFCNEFHZ0FiQUU4QVR3QU9BRkFBSFFBZEFCMEFUd0JQQUJjQVR3QlBBRThBRmdCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUhRQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCMEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQlFBQjRBSGdBZUFCNEFVQUJRQUZBQVVBQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQWVBQjRBSGdBZUFGQUFUd0JBQUU4QVR3QlBBRUFBVHdCUUFGQUFUd0JRQUI0QUhnQWVBQjRBSGdBZUFCMEFIUUFkQUIwQUhnQWRBQjRBRGdCUUFGQUFVQUJRQUZBQUhnQWVBQjRBSGdBZUFCNEFIZ0JRQUI0QVVBQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBSkFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFrQUNRQUpBQWtBQ1FBSkFBa0FCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQWVBQjRBSGdBZUFGQUFIZ0FlQUI0QUt3QXJBRkFBVUFCUUFGQUFHQUJRQUNzQUt3QXJBQ3NBSGdBZUFGQUFIZ0JRQUZBQVVBQXJBRkFBS3dBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFLd0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBQkFBRUFBUUFCQUFFQUFRQUJBQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBVUFBZUFCNEFIZ0FlQUI0QUhnQXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FZQUEwQUt3QXJBQjRBSGdBYkFDc0FCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFEUUFFQUI0QUJBQUVBQjRBQkFBRUFCTUFCQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FWZ0JXQUZZQVZnQldBRllBVmdCV0FGWUFWZ0JXQUZZQVZnQldBRllBVmdCV0FGWUFWZ0JXQUZZQVZnQldBRllBVmdCV0FGWUFLd0FyQUNzQUt3QXJBRllBVmdCV0FCNEFIZ0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUdnQWFBQm9BR0FBWUFCNEFIZ0FFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUV3QUVBQ3NBRXdBVEFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUJMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUJvQUdRQVpBQjRBVUFCUUFBUUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQk1BVUFBRUFBUUFCQUFFQUFRQUJBQUVBQjRBSGdBRUFBUUFCQUFFQUFRQUJBQlFBRkFBQkFBRUFCNEFCQUFFQUFRQUJBQlFBRkFBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCUUFGQUFVQUFlQUI0QVVBQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFLd0FlQUZBQUJBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUZBQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBVUFCUUFCNEFIZ0FZQUJNQVVBQXJBQ3NBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQUVBQVFBQkFBRUFGQUFCQUFFQUFRQUJBQUVBRkFBQkFBRUFBUUFVQUFFQUFRQUJBQUVBQVFBS3dBckFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQUVBQVFBQkFBckFDc0FIZ0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFlQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBRUFBUUFCQUJRQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUZBQUJBQUVBQVFBQkFBRUFBUUFCQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUFRQUJBQU5BQTBBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dBZUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBQkFBRUFBUUFLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUZBQVVBQXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUZBQUt3QXJBQ3NBVUFCUUFGQUFVQUFyQUNzQUJBQlFBQVFBQkFBRUFBUUFCQUFFQUFRQUt3QXJBQVFBQkFBckFDc0FCQUFFQUFRQVVBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUJBQXJBQ3NBS3dBckFGQUFVQUFyQUZBQVVBQlFBQVFBQkFBckFDc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JRQUZBQUdnQWFBRkFBVUFCUUFGQUFVQUJNQUI0QUd3QlFBQjRBS3dBckFDc0FCQUFFQUFRQUt3QlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QXJBRkFBVUFBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQXJBRkFBVUFBckFGQUFVQUFyQUZBQVVBQXJBQ3NBQkFBckFBUUFCQUFFQUFRQUJBQXJBQ3NBS3dBckFBUUFCQUFyQUNzQUJBQUVBQVFBS3dBckFDc0FCQUFyQUNzQUt3QXJBQ3NBS3dBckFGQUFVQUJRQUZBQUt3QlFBQ3NBS3dBckFDc0FLd0FyQUNzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QUVBQVFBVUFCUUFGQUFCQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUJBQUVBQVFBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFGQUFVQUJRQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FVQUJRQUZBQVVBQlFBRkFBVUFBckFGQUFVQUFyQUZBQVVBQlFBRkFBVUFBckFDc0FCQUJRQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFyQUFRQUJBQUVBQ3NBQkFBRUFBUUFLd0FyQUZBQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FVQUJRQUFRQUJBQXJBQ3NBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dBZUFCc0FLd0FyQUNzQUt3QXJBQ3NBS3dCUUFBUUFCQUFFQUFRQUJBQUVBQ3NBQkFBRUFBUUFLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUZBQVVBQXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFFQUFRQUJBQUVBQVFBS3dBckFBUUFCQUFyQUNzQUJBQUVBQVFBS3dBckFDc0FLd0FyQUNzQUt3QXJBQVFBQkFBckFDc0FLd0FyQUZBQVVBQXJBRkFBVUFCUUFBUUFCQUFyQUNzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QWVBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QUVBRkFBS3dCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dCUUFGQUFVQUFyQUZBQVVBQlFBRkFBS3dBckFDc0FVQUJRQUNzQVVBQXJBRkFBVUFBckFDc0FLd0JRQUZBQUt3QXJBQ3NBVUFCUUFGQUFLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFDc0FLd0FFQUFRQUJBQUVBQVFBS3dBckFDc0FCQUFFQUFRQUt3QUVBQVFBQkFBRUFDc0FLd0JRQUNzQUt3QXJBQ3NBS3dBckFBUUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUZBQVVBQlFBQjRBSGdBZUFCNEFIZ0FlQUJzQUhnQXJBQ3NBS3dBckFDc0FCQUFFQUFRQUJBQXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBRkFBVUFCUUFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBS3dBckFGQUFCQUFFQUFRQUJBQUVBQVFBQkFBckFBUUFCQUFFQUNzQUJBQUVBQVFBQkFBckFDc0FLd0FyQUNzQUt3QXJBQVFBQkFBckFGQUFVQUJRQUNzQUt3QXJBQ3NBS3dCUUFGQUFCQUFFQUNzQUt3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUI0QVVBQUVBQVFBQkFBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFGQUFVQUJRQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQVVBQlFBRkFBVUFCUUFDc0FLd0FFQUZBQUJBQUVBQVFBQkFBRUFBUUFCQUFyQUFRQUJBQUVBQ3NBQkFBRUFBUUFCQUFyQUNzQUt3QXJBQ3NBS3dBckFBUUFCQUFyQUNzQUt3QXJBQ3NBS3dBckFGQUFLd0JRQUZBQUJBQUVBQ3NBS3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFDc0FVQUJRQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBQkFBRUFGQUFCQUFFQUFRQUJBQUVBQVFBQkFBckFBUUFCQUFFQUNzQUJBQUVBQVFBQkFCUUFCNEFLd0FyQUNzQUt3QlFBRkFBVUFBRUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFCQUFFQUNzQUt3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQm9BVUFCUUFGQUFVQUJRQUZBQUt3QXJBQVFBQkFBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBVUFBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FFQUNzQUt3QXJBQ3NBQkFBRUFBUUFCQUFFQUFRQUt3QUVBQ3NBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQ3NBS3dBckFDc0FLd0FyQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQUt3QXJBQVFBQkFBZUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFBcUFGd0FYQUFxQUNvQUtnQXFBQ29BS2dBcUFDc0FLd0FyQUNzQUd3QmNBRndBWEFCY0FGd0FYQUJjQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FlQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQURRQU5BQ3NBS3dBckFDc0FLd0JjQUZ3QUt3QmNBQ3NBS3dCY0FGd0FLd0JjQUNzQUt3QmNBQ3NBS3dBckFDc0FLd0FyQUZ3QVhBQmNBRndBS3dCY0FGd0FYQUJjQUZ3QVhBQmNBQ3NBWEFCY0FGd0FLd0JjQUNzQVhBQXJBQ3NBWEFCY0FDc0FYQUJjQUZ3QVhBQXFBRndBWEFBcUFDb0FLZ0FxQUNvQUtnQXJBQ29BS2dCY0FDc0FLd0JjQUZ3QVhBQmNBRndBS3dCY0FDc0FLZ0FxQUNvQUtnQXFBQ29BS3dBckFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FLd0FyQUZ3QVhBQmNBRndBVUFBT0FBNEFEZ0FPQUI0QURnQU9BQWtBRGdBT0FBMEFDUUFUQUJNQUV3QVRBQk1BQ1FBZUFCTUFIZ0FlQUI0QUJBQUVBQjRBSGdBZUFCNEFIZ0FlQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQU5BQVFBSGdBRUFCNEFCQUFXQUJFQUZnQVJBQVFBQkFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQU5BQVFBQkFBRUFBUUFCQUFOQUFRQUJBQlFBRkFBVUFCUUFGQUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUNzQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFDc0FEUUFOQUI0QUhnQWVBQjRBSGdBZUFBUUFIZ0FlQUI0QUhnQWVBQjRBS3dBZUFCNEFEZ0FPQUEwQURnQWVBQjRBSGdBZUFCNEFDUUFKQUNzQUt3QXJBQ3NBS3dCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBS2dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBcUFGd0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0FOQUEwQUhnQWVBQjRBSGdCY0FGd0FYQUJjQUZ3QVhBQXFBQ29BS2dBcUFGd0FYQUJjQUZ3QUtnQXFBQ29BWEFBcUFDb0FLZ0JjQUZ3QUtnQXFBQ29BS2dBcUFDb0FLZ0JjQUZ3QVhBQXFBQ29BS2dBcUFGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BWEFBcUFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FLZ0FxQUNvQUtnQXFBQ29BVUFCUUFGQUFVQUJRQUZBQUt3QlFBQ3NBS3dBckFDc0FLd0JRQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQWVBRkFBVUFCUUFGQUFXQUJZQUZnQVdBQllBRmdBV0FCWUFGZ0FXQUJZQUZnQVdBQllBRmdBV0FCWUFGZ0FXQUJZQUZnQVdBQllBRmdBV0FCWUFGZ0FXQUJZQUZnQVdBQllBRmtBV1FCWkFGa0FXUUJaQUZrQVdRQlpBRmtBV1FCWkFGa0FXUUJaQUZrQVdRQlpBRmtBV1FCWkFGa0FXUUJaQUZrQVdRQlpBRmtBV1FCWkFGa0FXUUJhQUZvQVdnQmFBRm9BV2dCYUFGb0FXZ0JhQUZvQVdnQmFBRm9BV2dCYUFGb0FXZ0JhQUZvQVdnQmFBRm9BV2dCYUFGb0FXZ0JhQUZvQVdnQmFBRm9BVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dCUUFGQUFVQUJRQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUNzQVVBQXJBRkFBVUFCUUFGQUFLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQVVBQlFBRkFBVUFBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FVQUJRQUZBQVVBQXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQXJBRkFBS3dCUUFGQUFVQUJRQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUZBQVVBQlFBRkFBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0FFQUFRQUJBQWVBQTBBSGdBZUFCNEFIZ0FlQUI0QUhnQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFDc0FLd0FyQUNzQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0FOQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBZUFCNEFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFBMEFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFCWUFFUUFyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBRFFBTkFBMEFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQUt3QXJBQ3NBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBRkFBVUFCUUFGQUFCQUFFQUFRQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQVFBQkFBRUFBMEFEUUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFFQUFRQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUZBQVVBQlFBQ3NBQkFBRUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQXFBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BRFFBTkFCVUFYQUFOQUI0QURRQWJBRndBS2dBckFDc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0FyQUNzQUt3QXJBQjRBSGdBVEFCTUFEUUFOQUE0QUhnQVRBQk1BSGdBRUFBUUFCQUFKQUNzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUFRQUJBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUJBQlFBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQ3NBS3dBckFDc0FCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUt3QXJBQ3NBS3dBZUFDc0FLd0FyQUJNQUV3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBQ3NBS3dCY0FGd0FYQUJjQUZ3QUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FDc0FLd0FyQUNzQVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QUt3QXJBQ3NBS3dBckFDc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JjQUNzQUt3QXJBQ29BS2dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUJBQUVBQVFBQkFBRUFDc0FLd0FlQUI0QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBS2dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBckFDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FyQUNzQUJBQkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBQ3NBS3dBckFDc0FLd0FyQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQUt3QXJBQ3NBS3dBckFDc0FLZ0FxQUNvQUtnQXFBQ29BS2dCY0FDb0FLZ0FxQUNvQUtnQXFBQ3NBS3dBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQXJBQVFBQkFBRUFBUUFCQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFFQUFRQUJBQUVBQVFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FEUUFOQUI0QURRQU5BQTBBRFFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFDc0FLd0FyQUFRQUJBQUVBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQVVBQlFBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FIZ0FlQUI0QUhnQlFBRkFBVUFCUUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFyQUNzQUt3QU5BQTBBRFFBTkFBMEFTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0FyQUNzQUt3QlFBRkFBVUFCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQU5BQTBBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FCQUFFQUFRQUhnQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFGQUFVQUJRQUZBQUJBQlFBRkFBVUFCUUFBUUFCQUFFQUZBQVVBQUVBQVFBQkFBckFDc0FLd0FyQUNzQUt3QUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUt3QUVBQVFBQkFBRUFBUUFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQXJBQ3NBVUFCUUFGQUFVQUJRQUZBQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBRkFBS3dCUUFDc0FVQUFyQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBS3dBckFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUNzQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUZBQUhnQWVBQjRBVUFCUUFGQUFLd0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUZBQVVBQlFBRkFBS3dBckFCNEFIZ0FlQUI0QUhnQWVBQ3NBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBckFDc0FVQUJRQUZBQUt3QWVBQjRBSGdBZUFCNEFIZ0FlQUE0QUhnQXJBQTBBRFFBTkFBMEFEUUFOQUEwQUNRQU5BQTBBRFFBSUFBUUFDd0FFQUFRQURRQUpBQTBBRFFBTUFCMEFIUUFlQUJjQUZ3QVdBQmNBRndBWEFCWUFGd0FkQUIwQUhnQWVBQlFBRkFBVUFBMEFBUUFCQUFRQUJBQUVBQVFBQkFBSkFCb0FHZ0FhQUJvQUdnQWFBQm9BR2dBZUFCY0FGd0FkQUJVQUZRQWVBQjRBSGdBZUFCNEFIZ0FZQUJZQUVRQVZBQlVBRlFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FOQUI0QURRQU5BQTBBRFFBZUFBMEFEUUFOQUFjQUhnQWVBQjRBSGdBckFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFVQUJRQUNzQUt3QlBBRkFBVUFCUUFGQUFVQUFlQUI0QUhnQVdBQkVBVHdCUUFFOEFUd0JQQUU4QVVBQlFBRkFBVUFCUUFCNEFIZ0FlQUJZQUVRQXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUNzQUd3QWJBQnNBR3dBYkFCc0FHd0FhQUJzQUd3QWJBQnNBR3dBYkFCc0FHd0FiQUJzQUd3QWJBQnNBR3dBYUFCc0FHd0FiQUJzQUdnQWJBQnNBR2dBYkFCc0FHd0FiQUJzQUd3QWJBQnNBR3dBYkFCc0FHd0FiQUJzQUd3QWJBQnNBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUI0QUhnQlFBQm9BSGdBZEFCNEFVQUFlQUJvQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QVR3QWVBRkFBR3dBZUFCNEFVQUJRQUZBQVVBQlFBQjRBSGdBZUFCMEFIUUFlQUZBQUhnQlFBQjRBVUFBZUFGQUFUd0JRQUZBQUhnQWVBQjRBSGdBZUFCNEFIZ0JRQUZBQVVBQlFBRkFBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQlFBQjRBVUFCUUFGQUFVQUJQQUU4QVVBQlFBRkFBVUFCUUFFOEFVQUJRQUU4QVVBQlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUUFGQUFVQUJRQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUhnQWVBRkFBVUFCUUFGQUFUd0FlQUI0QUt3QXJBQ3NBS3dBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FkQUI0QUhRQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSFFBZUFCMEFIUUFlQUI0QUhnQWRBQjBBSGdBZUFCMEFIZ0FlQUI0QUhRQWVBQjBBR3dBYkFCNEFIUUFlQUI0QUhnQWVBQjBBSGdBZUFCMEFIUUFkQUIwQUhnQWVBQjBBSGdBZEFCNEFIUUFkQUIwQUhRQWRBQjBBSGdBZEFCNEFIZ0FlQUI0QUhnQWRBQjBBSFFBZEFCNEFIZ0FlQUI0QUhRQWRBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSFFBZUFCNEFIZ0FkQUI0QUhnQWVBQjRBSGdBZEFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhRQWRBQjRBSGdBZEFCMEFIUUFkQUI0QUhnQWRBQjBBSGdBZUFCMEFIUUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FkQUIwQUhnQWVBQjBBSFFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUIwQUhnQWVBQjRBSFFBZUFCNEFIZ0FlQUI0QUhnQWVBQjBBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWRBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUJRQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FXQUJFQUZnQVJBQjRBSGdBZUFCNEFIZ0FlQUIwQUhnQWVBQjRBSGdBZUFCNEFIZ0FsQUNVQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUZnQVJBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFDVUFKUUFsQUNVQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCUEFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUJQQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlFBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCNEFIZ0FlQUI0QUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSGdBZUFCMEFIUUFkQUIwQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWRBQjBBSGdBZEFCMEFIUUFkQUIwQUhRQWRBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWRBQjBBSGdBZUFCMEFIUUFlQUI0QUhnQWVBQjBBSFFBZUFCNEFIZ0FlQUIwQUhRQWRBQjRBSGdBZEFCNEFIZ0FkQUIwQUhRQWRBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhRQWRBQjBBSFFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZEFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSlFBbEFDVUFKUUFlQUIwQUhRQWVBQjRBSFFBZUFCNEFIZ0FlQUIwQUhRQWVBQjRBSGdBZUFDVUFKUUFkQUIwQUpRQWVBQ1VBSlFBbEFDQUFKUUFsQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFKUUFsQUNVQUhnQWVBQjRBSGdBZEFCNEFIUUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhRQWRBQjRBSFFBZEFCMEFIZ0FkQUNVQUhRQWRBQjRBSFFBZEFCNEFIUUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBbEFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUIwQUhRQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFIUUFkQUIwQUhRQWxBQjRBSlFBbEFDVUFIUUFsQUNVQUhRQWRBQjBBSlFBbEFCMEFIUUFsQUIwQUhRQWxBQ1VBSlFBZUFCMEFIZ0FlQUI0QUhnQWRBQjBBSlFBZEFCMEFIUUFkQUIwQUhRQWxBQ1VBSlFBbEFDVUFIUUFsQUNVQUlBQWxBQjBBSFFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSGdBZUFCNEFKUUFsQUNBQUlBQWdBQ0FBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWRBQjRBSGdBZUFCY0FGd0FYQUJjQUZ3QVhBQjRBRXdBVEFDVUFIZ0FlQUI0QUZnQVJBQllBRVFBV0FCRUFGZ0FSQUJZQUVRQVdBQkVBRmdBUkFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBV0FCRUFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFGZ0FSQUJZQUVRQVdBQkVBRmdBUkFCWUFFUUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUJZQUVRQVdBQkVBRmdBUkFCWUFFUUFXQUJFQUZnQVJBQllBRVFBV0FCRUFGZ0FSQUJZQUVRQVdBQkVBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBRmdBUkFCWUFFUUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUJZQUVRQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIUUFkQUIwQUhRQWRBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFLd0FyQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUt3QXJBQ3NBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFLd0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQjRBSGdBZUFCNEFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQUVBQVFBQkFBZUFCNEFLd0FyQUNzQUt3QXJBQk1BRFFBTkFBMEFVQUFUQUEwQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQUt3QXJBQ3NBS3dBckFDc0FVQUFOQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBRUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0JRQUZBQVVBQlFBRkFBVUFCUUFDc0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQTBBRFFBTkFBMEFEUUFOQUEwQURRQWVBQTBBRmdBTkFCNEFIZ0FYQUJjQUhnQWVBQmNBRndBV0FCRUFGZ0FSQUJZQUVRQVdBQkVBRFFBTkFBMEFEUUFUQUZBQURRQU5BQjRBRFFBTkFCNEFIZ0FlQUI0QUhnQU1BQXdBRFFBTkFBMEFIZ0FOQUEwQUZnQU5BQTBBRFFBTkFBMEFEUUFOQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ3NBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQXJBQ3NBS3dBckFBMEFFUUFSQUNVQUpRQkhBRmNBVndBV0FCRUFGZ0FSQUJZQUVRQVdBQkVBRmdBUkFDVUFKUUFXQUJFQUZnQVJBQllBRVFBV0FCRUFGUUFXQUJFQUVRQWxBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBQVFBQkFBRUFBUUFCQUFFQUNVQVZ3QlhBRmNBVndBMkFDVUFKUUJYQUZjQVZ3QkhBRWNBSlFBbEFDVUFLd0JSQUZjQVVRQlhBRkVBVndCUkFGY0FVUUJYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGRUFWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlJBRmNBVVFCWEFGRUFWd0JYQUZjQVZ3QlhBRmNBVVFCWEFGY0FWd0JYQUZjQVZ3QlJBRkVBS3dBckFBUUFCQUFWQUJVQVJ3QkhBRmNBRlFCUkFGY0FVUUJYQUZFQVZ3QlJBRmNBVVFCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRkVBVndCUkFGY0FVUUJYQUZjQVZ3QlhBRmNBVndCUkFGY0FWd0JYQUZjQVZ3QlhBRkVBVVFCWEFGY0FWd0JYQUJVQVVRQkhBRWNBVndBckFDc0FLd0FyQUNzQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBS3dBckFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0FyQUNVQUpRQlhBRmNBVndCWEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FLd0FyQUNzQUt3QXJBQ1VBSlFBbEFDVUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQVVRQlJBRkVBVVFCUkFGRUFVUUJSQUZFQVVRQlJBRkVBVVFCUkFGRUFVUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ3NBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUU4QVR3QlBBRThBVHdCUEFFOEFUd0FsQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRWNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQUt3QXJBQ3NBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBRFFBVEFBMEFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFGQUFVQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFGQUFCQUFFQUFRQUJBQWVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBSGdCUUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFVQUJRQUFRQUJBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUFRQUJBQWVBQTBBRFFBTkFBMEFEUUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QVVBQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0JRQUI0QUhnQWVBQjRBSGdBZUFGQUFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FyQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFBUUFVQUJRQUZBQUJBQlFBRkFBVUFCUUFBUUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQVFBQkFBRUFBUUFCQUFlQUI0QUhnQWVBQ3NBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBSGdBZUFCb0FIZ0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFEZ0FPQUJNQUV3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUJBQUVBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFBUUFCQUFFQUFRQUJBQUVBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QU5BQTBBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dBckFDc0FLd0FyQUNzQUt3QUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQlFBRkFBVUFCUUFGQUFVQUFlQUI0QUhnQlFBQTRBVUFBckFDc0FVQUJRQUZBQVVBQlFBRkFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQTBBRFFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQjRBV0FCWUFGZ0FXQUJZQUZnQVdBQllBRmdBV0FCWUFGZ0FXQUJZQUZnQVdBQllBRmdBV0FCWUFGZ0FXQUJZQUZnQVdBQllBRmdBV0FCWUFDc0FLd0FyQUFRQUhnQWVBQjRBSGdBZUFCNEFEUUFOQUEwQUhnQWVBQjRBSGdBckFGQUFTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0FyQUNzQUt3QXJBQjRBSGdCY0FGd0FYQUJjQUZ3QUtnQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBWEFCY0FGd0FYQUJjQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFGQUFVQUJRQUFRQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUFRQUJBQXJBQ3NBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dBckFDc0FIZ0FOQUEwQURRQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FLZ0FxQUNvQVhBQXFBQ29BS2dCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFBcUFGd0FLZ0FxQUNvQVhBQmNBQ29BS2dCY0FGd0FYQUJjQUZ3QUtnQXFBRndBS2dCY0FDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBRndBWEFCY0FDb0FLZ0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUJBQUVBQVFBQkFBRUFBMEFEUUJRQUZBQVVBQUVBQVFBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBVUFCUUFGQUFVQUJRQUZBQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0JRQUZBQVVBQlFBRkFBVUFCUUFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFEUUFFQUFRQUt3QXJBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBS3dBckFDc0FLd0FyQUNzQVZBQlZBRlVBVlFCVkFGVUFWUUJWQUZVQVZRQlZBRlVBVlFCVkFGVUFWUUJWQUZVQVZRQlZBRlVBVlFCVkFGVUFWUUJWQUZVQVZRQlVBRlVBVlFCVkFGVUFWUUJWQUZVQVZRQlZBRlVBVlFCVkFGVUFWUUJWQUZVQVZRQlZBRlVBVlFCVkFGVUFWUUJWQUZVQVZRQlZBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFGa0FXUUJaQUZrQVdRQlpBRmtBV1FCWkFGa0FXUUJaQUZrQVdRQlpBRmtBV1FCWkFGa0FLd0FyQUNzQUt3QmFBRm9BV2dCYUFGb0FXZ0JhQUZvQVdnQmFBRm9BV2dCYUFGb0FXZ0JhQUZvQVdnQmFBRm9BV2dCYUFGb0FXZ0JhQUZvQVdnQmFBRm9BS3dBckFDc0FLd0FHQUFZQUJnQUdBQVlBQmdBR0FBWUFCZ0FHQUFZQUJnQUdBQVlBQmdBR0FBWUFCZ0FHQUFZQUJnQUdBQVlBQmdBR0FBWUFCZ0FHQUFZQUJnQUdBQVlBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUNVQUpRQlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQUpRQWxBQ1VBSlFBbEFDVUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBS3dBckFDc0FLd0FyQUZZQUJBQldBRllBVmdCV0FGWUFWZ0JXQUZZQVZnQldBQjRBVmdCV0FGWUFWZ0JXQUZZQVZnQldBRllBVmdCV0FGWUFWZ0FyQUZZQVZnQldBRllBVmdBckFGWUFLd0JXQUZZQUt3QldBRllBS3dCV0FGWUFWZ0JXQUZZQVZnQldBRllBVmdCV0FGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFFUUFXQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBYUFCNEFLd0FyQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFHQUFSQUJFQUdBQVlBQk1BRXdBV0FCRUFGQUFyQUNzQUt3QXJBQ3NBS3dBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQ1VBSlFBbEFDVUFKUUFXQUJFQUZnQVJBQllBRVFBV0FCRUFGZ0FSQUJZQUVRQWxBQ1VBRmdBUkFDVUFKUUFsQUNVQUpRQWxBQ1VBRVFBbEFCRUFLd0FWQUJVQUV3QVRBQ1VBRmdBUkFCWUFFUUFXQUJFQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNzQUpRQWJBQm9BSlFBckFDc0FLd0FyQUZBQVVBQlFBRkFBVUFBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBQWNBS3dBVEFDVUFKUUFiQUJvQUpRQWxBQllBRVFBbEFDVUFFUUFsQUJFQUpRQlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBQlVBRlFBbEFDVUFKUUFUQUNVQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUJZQUpRQVJBQ1VBSlFBbEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndBV0FDVUFFUUFsQUJZQUVRQVJBQllBRVFBUkFCVUFWd0JSQUZFQVVRQlJBRkVBVVFCUkFGRUFVUUJSQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFFY0FSd0FyQUNzQVZ3QlhBRmNBVndCWEFGY0FLd0FyQUZjQVZ3QlhBRmNBVndCWEFDc0FLd0JYQUZjQVZ3QlhBRmNBVndBckFDc0FWd0JYQUZjQUt3QXJBQ3NBR2dBYkFDVUFKUUFsQUJzQUd3QXJBQjRBSGdBZUFCNEFIZ0FlQUI0QUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QUVBQVFBQkFBUUFCMEFLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QlFBRkFBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFDc0FEUUFOQUEwQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBS3dBckFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0JRQUZBQUhnQWVBQjRBS3dBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FyQUNzQUt3QXJBQjRBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUJBQXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQVFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFFQUFRQUJBQUVBQVFBS3dBckFDc0FLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBRFFCUUFGQUFVQUJRQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQTBBVUFCUUFGQUFVQUJRQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFDc0FLd0FyQUNzQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQjRBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUFyQUNzQVVBQXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQVVBQlFBQ3NBS3dBckFGQUFLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFBMEFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQjRBSGdCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBS3dBckFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQVVBQlFBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBQ3NBRFFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFDc0FLd0FyQUI0QVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFCQUFFQUFRQUt3QUVBQVFBS3dBckFDc0FLd0FyQUFRQUJBQUVBQVFBVUFCUUFGQUFVQUFyQUZBQVVBQlFBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQUt3QXJBQ3NBQkFBRUFBUUFLd0FyQUNzQUt3QUVBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQURRQU5BQTBBRFFBTkFBMEFEUUFOQUI0QUt3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQjRBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQjRBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUJBQUVBQ3NBS3dBckFDc0FVQUJRQUZBQVVBQlFBQTBBRFFBTkFBMEFEUUFOQUJRQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FOQUEwQURRQU5BQTBBRFFBTkFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0FyQUNzQUt3QXJBQ3NBSGdBZUFCNEFIZ0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUFFQUFRQUJBQUVBQVFBQkFBRUFBMEFEUUFlQUI0QUhnQWVBQjRBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBQkFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBZUFCNEFIZ0FOQUEwQURRQU5BQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUNzQUt3QXJBQ3NBS3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFDc0FLd0FyQUNzQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFDc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0FOQUEwQURRQU5BQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFCQUFlQUE0QVVBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QUVBRkFBVUFCUUFGQUFEUUFOQUI0QURRQWVBQVFBQkFBRUFCNEFLd0FyQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVVBQU9BRkFBRFFBTkFBMEFLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQU5BQTBBSGdBTkFBMEFIZ0FFQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUZBQUt3QlFBRkFBVUFCUUFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFBMEFLd0FyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBS3dBckFDc0FLd0FyQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQUt3QXJBQ3NBS3dBckFDc0FCQUFFQUFRQUJBQXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBVUFCUUFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQVFBQkFBRUFBUUFCQUFyQUNzQUJBQUVBQ3NBS3dBRUFBUUFCQUFyQUNzQVVBQXJBQ3NBS3dBckFDc0FLd0FFQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQUJBQUVBQ3NBS3dBRUFBUUFCQUFFQUFRQUJBQUVBQ3NBS3dBckFBUUFCQUFFQUFRQUJBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBQkFBRUFBUUFCQUFFQUFRQUJBQlFBRkFBVUFCUUFBMEFEUUFOQUEwQUhnQkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBQ3NBRFFBckFCNEFLd0FyQUFRQUJBQUVBQVFBVUFCUUFCNEFVQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQUVBQVFBQkFBRUFBUUFCQUFFQUNzQUt3QUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQU9BQTBBRFFBVEFCTUFIZ0FlQUI0QURRQU5BQTBBRFFBTkFBMEFEUUFOQUEwQURRQU5BQTBBRFFBTkFBMEFVQUJRQUZBQVVBQUVBQVFBS3dBckFBUUFEUUFOQUI0QVVBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dBckFDc0FLd0FyQUNzQUt3QU9BQTRBRGdBT0FBNEFEZ0FPQUE0QURnQU9BQTRBRGdBT0FDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQXJBQ3NBS3dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQXJBQ3NBS3dBckFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FYQUJjQUEwQURRQU5BQ29BU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFFQUFRQUJBQUVBQVFBQkFBRUFGQUFCQUFFQUFRQUJBQU9BQjRBRFFBTkFBMEFEUUFPQUI0QUJBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQVVBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBVUFCUUFGQUFVQUFyQUNzQVVBQlFBRkFBVUFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQTBBRFFBTkFDc0FEZ0FPQUE0QURRQU5BQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQ3NBQkFBRUFBUUFCQUFFQUFRQUJBQUVBRkFBRFFBTkFBMEFEUUFOQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QU9BQk1BVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQXJBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFDc0FVQUJRQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBRUFBUUFCQUFFQUFRQUJBQXJBQ3NBS3dBRUFDc0FCQUFFQUNzQUJBQUVBQVFBQkFBRUFBUUFCQUJRQUFRQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQUt3QXJBQ3NBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0FyQUNzQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQURRQU5BQTBBRFFBTkFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVNBQklBRWdBUXdCREFFTUFVQUJRQUZBQVVBQkRBRkFBVUFCUUFFZ0FRd0JJQUVNQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVNBQkRBRU1BVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCSUFFTUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FLd0FyQUNzQUt3QU5BQTBBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUFRQUJBQUVBQVFBQkFBTkFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBRUFBUUFCQUFFQUFRQUJBQUVBQTBBRFFBTkFCNEFIZ0FlQUI0QUhnQWVBRkFBVUFCUUFGQUFEUUFlQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FVQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBQkFBRUFBUUFCQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRWNBUndBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUNzQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0FlQUFRQUJBQU5BQVFBQkFBRUFBUUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBSGdBZUFCNEFIZ0FlQUI0QUhnQXJBQ3NBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUJBQUVBQVFBQkFBRUFCNEFIZ0FlQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBSGdBZUFBUUFCQUFFQUFRQUJBQUVBQVFBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FFQUFRQUJBQUVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUI0QUhnQUVBQVFBQkFBZUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUNzQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBckFGQUFVQUFyQUNzQVVBQXJBQ3NBVUFCUUFDc0FLd0JRQUZBQVVBQlFBQ3NBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFLd0JRQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQXJBRkFBVUFCUUFGQUFLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FlQUI0QVVBQlFBRkFBVUFCUUFDc0FVQUFyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUNzQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFlQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUt3QXJBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFCNEFIZ0FlQUI0QUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBRUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFCQUFlQUI0QURRQU5BQTBBRFFBZUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQVFBQkFBRUFBUUFCQUFyQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBQkFBRUFBUUFCQUFFQUFRQUJBQXJBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQXJBQ3NBQkFBRUFBUUFCQUFFQUFRQUJBQXJBQVFBQkFBckFBUUFCQUFFQUFRQUJBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQVFBQkFBRUFBUUFCQUFFQUFRQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUhnQWVBQjRBSGdBRUFBUUFCQUFFQUFRQUJBQUVBQ3NBS3dBckFDc0FLd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUNzQUt3QXJBQ3NBRmdBV0FGQUFVQUJRQUZBQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBRkFBVUFBckFGQUFLd0FyQUZBQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBVUFCUUFGQUFVQUFyQUZBQUt3QlFBQ3NBS3dBckFDc0FLd0FyQUZBQUt3QXJBQ3NBS3dCUUFDc0FVQUFyQUZBQUt3QlFBRkFBVUFBckFGQUFVQUFyQUZBQUt3QXJBRkFBS3dCUUFDc0FVQUFyQUZBQUt3QlFBQ3NBVUFCUUFDc0FVQUFyQUNzQVVBQlFBRkFBVUFBckFGQUFVQUJRQUZBQVVBQlFBRkFBS3dCUUFGQUFVQUJRQUNzQVVBQlFBRkFBVUFBckFGQUFLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUFyQUZBQVVBQlFBRkFBVUFBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQjRBSGdBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlBBRThBVHdBbEFDVUFKUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFlQUNVQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhnQWVBQ1VBSlFBbEFDVUFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNrQUtRQXBBQ2tBS1FBcEFDa0FLUUFwQUNrQUtRQXBBQ2tBS1FBcEFDa0FLUUFwQUNrQUtRQXBBQ2tBS1FBcEFDa0FLUUFsQUNVQUpRQWxBQ1VBSUFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUI0QUhnQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFIZ0FlQUNVQUpRQWxBQ1VBSlFBZUFDVUFKUUFsQUNVQUpRQWdBQ0FBSUFBbEFDVUFJQUFsQUNVQUlBQWdBQ0FBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFJUUFoQUNFQUlRQWhBQ1VBSlFBZ0FDQUFKUUFsQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUlBQWdBQ0FBSUFBbEFDVUFKUUFsQUNBQUpRQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWxBQ1VBSlFBZ0FDVUFKUUFsQUNVQUlBQWdBQ0FBSlFBZ0FDQUFJQUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBZUFDVUFIZ0FsQUI0QUpRQWxBQ1VBSlFBbEFDQUFKUUFsQUNVQUpRQWVBQ1VBSGdBZUFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUhnQWVBQjRBSGdBZUFCNEFIZ0FsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSUFBZ0FDVUFKUUFsQUNVQUlBQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUlBQWxBQ1VBSlFBbEFDQUFJQUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQjRBSGdBZUFCNEFIZ0FlQUNVQUpRQWxBQ1VBSlFBbEFDVUFJQUFnQUNBQUpRQWxBQ1VBSUFBZ0FDQUFJQUFnQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBRndBWEFCY0FGUUFWQUJVQUhnQWVBQjRBSGdBbEFDVUFKUUFnQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFJQUFnQUNBQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUlBQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSUFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBbEFDVUFKUUFsQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFKUUFsQUNVQUpRQWxBQ1VBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ0FBSUFBZ0FDQUFJQUFsQUNBQUlBQWxBQ1VBSlFBbEFDVUFKUUFnQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUpRQWxBQ1VBSUFBZ0FDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDc0FLd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUJYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQXJBQVFBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0EnO1xuXG4vKioqLyB9KSxcbi8qIDUwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9QYXRoID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIENpcmNsZSA9IGZ1bmN0aW9uIENpcmNsZSh4LCB5LCByYWRpdXMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2lyY2xlKTtcblxuICAgIHRoaXMudHlwZSA9IF9QYXRoLlBBVEguQ0lSQ0xFO1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICBpZiAodHJ1ZSkge1xuICAgICAgICBpZiAoaXNOYU4oeCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgeCB2YWx1ZSBnaXZlbiBmb3IgQ2lyY2xlJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzTmFOKHkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIHkgdmFsdWUgZ2l2ZW4gZm9yIENpcmNsZScpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc05hTihyYWRpdXMpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIHJhZGl1cyB2YWx1ZSBnaXZlbiBmb3IgQ2lyY2xlJyk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBDaXJjbGU7XG5cbi8qKiovIH0pLFxuLyogNTEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3NsaWNlZFRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH0gcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGkpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyByZXR1cm4gYXJyOyB9IGVsc2UgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkgeyByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpOyB9IGVsc2UgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTsgfSB9OyB9KCk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfQm91bmRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxudmFyIF9Gb250ID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNSk7XG5cbnZhciBfR3JhZGllbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUyKTtcblxudmFyIF9UZXh0Q29udGFpbmVyID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTtcblxudmFyIF9UZXh0Q29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RleHRDb250YWluZXIpO1xuXG52YXIgX2JhY2tncm91bmQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG52YXIgX2JvcmRlciA9IF9fd2VicGFja19yZXF1aXJlX18oMTIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgUmVuZGVyZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVuZGVyZXIodGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSZW5kZXJlcik7XG5cbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRhcmdldC5yZW5kZXIob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFJlbmRlcmVyLCBbe1xuICAgICAgICBrZXk6ICdyZW5kZXJOb2RlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlck5vZGUoY29udGFpbmVyKSB7XG4gICAgICAgICAgICBpZiAoY29udGFpbmVyLmlzVmlzaWJsZSgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJOb2RlQmFja2dyb3VuZEFuZEJvcmRlcnMoY29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlck5vZGVDb250ZW50KGNvbnRhaW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlck5vZGVDb250ZW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlck5vZGVDb250ZW50KGNvbnRhaW5lcikge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5lci5jaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgX1RleHRDb250YWluZXIyLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3R5bGUgPSBjaGlsZC5wYXJlbnQuc3R5bGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMudGFyZ2V0LnJlbmRlclRleHROb2RlKGNoaWxkLmJvdW5kcywgc3R5bGUuY29sb3IsIHN0eWxlLmZvbnQsIHN0eWxlLnRleHREZWNvcmF0aW9uLCBzdHlsZS50ZXh0U2hhZG93KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMudGFyZ2V0LmRyYXdTaGFwZShjaGlsZCwgY29udGFpbmVyLnN0eWxlLmNvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5lci5pbWFnZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2ltYWdlID0gX3RoaXMub3B0aW9ucy5pbWFnZVN0b3JlLmdldChjb250YWluZXIuaW1hZ2UpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2ltYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29udGVudEJveCA9ICgwLCBfQm91bmRzLmNhbGN1bGF0ZUNvbnRlbnRCb3gpKGNvbnRhaW5lci5ib3VuZHMsIGNvbnRhaW5lci5zdHlsZS5wYWRkaW5nLCBjb250YWluZXIuc3R5bGUuYm9yZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfd2lkdGggPSB0eXBlb2YgX2ltYWdlLndpZHRoID09PSAnbnVtYmVyJyAmJiBfaW1hZ2Uud2lkdGggPiAwID8gX2ltYWdlLndpZHRoIDogY29udGVudEJveC53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfaGVpZ2h0ID0gdHlwZW9mIF9pbWFnZS5oZWlnaHQgPT09ICdudW1iZXInICYmIF9pbWFnZS5oZWlnaHQgPiAwID8gX2ltYWdlLmhlaWdodCA6IGNvbnRlbnRCb3guaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF93aWR0aCA+IDAgJiYgX2hlaWdodCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy50YXJnZXQuY2xpcChbKDAsIF9Cb3VuZHMuY2FsY3VsYXRlUGFkZGluZ0JveFBhdGgpKGNvbnRhaW5lci5jdXJ2ZWRCb3VuZHMpXSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy50YXJnZXQuZHJhd0ltYWdlKF9pbWFnZSwgbmV3IF9Cb3VuZHMuQm91bmRzKDAsIDAsIF93aWR0aCwgX2hlaWdodCksIGNvbnRlbnRCb3gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBwYXRocyA9IGNvbnRhaW5lci5nZXRDbGlwUGF0aHMoKTtcbiAgICAgICAgICAgIGlmIChwYXRocy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5jbGlwKHBhdGhzLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlck5vZGVCYWNrZ3JvdW5kQW5kQm9yZGVycycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJOb2RlQmFja2dyb3VuZEFuZEJvcmRlcnMoY29udGFpbmVyKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIEhBU19CQUNLR1JPVU5EID0gIWNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kLmJhY2tncm91bmRDb2xvci5pc1RyYW5zcGFyZW50KCkgfHwgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmQuYmFja2dyb3VuZEltYWdlLmxlbmd0aDtcblxuICAgICAgICAgICAgdmFyIGhhc1JlbmRlcmFibGVCb3JkZXJzID0gY29udGFpbmVyLnN0eWxlLmJvcmRlci5zb21lKGZ1bmN0aW9uIChib3JkZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYm9yZGVyLmJvcmRlclN0eWxlICE9PSBfYm9yZGVyLkJPUkRFUl9TVFlMRS5OT05FICYmICFib3JkZXIuYm9yZGVyQ29sb3IuaXNUcmFuc3BhcmVudCgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IGZ1bmN0aW9uIGNhbGxiYWNrKCkge1xuICAgICAgICAgICAgICAgIHZhciBiYWNrZ3JvdW5kUGFpbnRpbmdBcmVhID0gKDAsIF9iYWNrZ3JvdW5kLmNhbGN1bGF0ZUJhY2tncm91bmdQYWludGluZ0FyZWEpKGNvbnRhaW5lci5jdXJ2ZWRCb3VuZHMsIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kLmJhY2tncm91bmRDbGlwKTtcblxuICAgICAgICAgICAgICAgIGlmIChIQVNfQkFDS0dST1VORCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpczIudGFyZ2V0LmNsaXAoW2JhY2tncm91bmRQYWludGluZ0FyZWFdLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kLmJhY2tncm91bmRDb2xvci5pc1RyYW5zcGFyZW50KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpczIudGFyZ2V0LmZpbGwoY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmQuYmFja2dyb3VuZENvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMyLnJlbmRlckJhY2tncm91bmRJbWFnZShjb250YWluZXIpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb250YWluZXIuc3R5bGUuYm9yZGVyLmZvckVhY2goZnVuY3Rpb24gKGJvcmRlciwgc2lkZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYm9yZGVyLmJvcmRlclN0eWxlICE9PSBfYm9yZGVyLkJPUkRFUl9TVFlMRS5OT05FICYmICFib3JkZXIuYm9yZGVyQ29sb3IuaXNUcmFuc3BhcmVudCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczIucmVuZGVyQm9yZGVyKGJvcmRlciwgc2lkZSwgY29udGFpbmVyLmN1cnZlZEJvdW5kcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChIQVNfQkFDS0dST1VORCB8fCBoYXNSZW5kZXJhYmxlQm9yZGVycykge1xuICAgICAgICAgICAgICAgIHZhciBwYXRocyA9IGNvbnRhaW5lci5wYXJlbnQgPyBjb250YWluZXIucGFyZW50LmdldENsaXBQYXRocygpIDogW107XG4gICAgICAgICAgICAgICAgaWYgKHBhdGhzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5jbGlwKHBhdGhzLCBjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlckJhY2tncm91bmRJbWFnZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJCYWNrZ3JvdW5kSW1hZ2UoY29udGFpbmVyKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmQuYmFja2dyb3VuZEltYWdlLnNsaWNlKDApLnJldmVyc2UoKS5mb3JFYWNoKGZ1bmN0aW9uIChiYWNrZ3JvdW5kSW1hZ2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoYmFja2dyb3VuZEltYWdlLnNvdXJjZS5tZXRob2QgPT09ICd1cmwnICYmIGJhY2tncm91bmRJbWFnZS5zb3VyY2UuYXJncy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMzLnJlbmRlckJhY2tncm91bmRSZXBlYXQoY29udGFpbmVyLCBiYWNrZ3JvdW5kSW1hZ2UpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoL2dyYWRpZW50L2kudGVzdChiYWNrZ3JvdW5kSW1hZ2Uuc291cmNlLm1ldGhvZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMzLnJlbmRlckJhY2tncm91bmRHcmFkaWVudChjb250YWluZXIsIGJhY2tncm91bmRJbWFnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlckJhY2tncm91bmRSZXBlYXQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyQmFja2dyb3VuZFJlcGVhdChjb250YWluZXIsIGJhY2tncm91bmQpIHtcbiAgICAgICAgICAgIHZhciBpbWFnZSA9IHRoaXMub3B0aW9ucy5pbWFnZVN0b3JlLmdldChiYWNrZ3JvdW5kLnNvdXJjZS5hcmdzWzBdKTtcbiAgICAgICAgICAgIGlmIChpbWFnZSkge1xuICAgICAgICAgICAgICAgIHZhciBiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhID0gKDAsIF9iYWNrZ3JvdW5kLmNhbGN1bGF0ZUJhY2tncm91bmdQb3NpdGlvbmluZ0FyZWEpKGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kLmJhY2tncm91bmRPcmlnaW4sIGNvbnRhaW5lci5ib3VuZHMsIGNvbnRhaW5lci5zdHlsZS5wYWRkaW5nLCBjb250YWluZXIuc3R5bGUuYm9yZGVyKTtcbiAgICAgICAgICAgICAgICB2YXIgYmFja2dyb3VuZEltYWdlU2l6ZSA9ICgwLCBfYmFja2dyb3VuZC5jYWxjdWxhdGVCYWNrZ3JvdW5kU2l6ZSkoYmFja2dyb3VuZCwgaW1hZ2UsIGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEpO1xuICAgICAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9ICgwLCBfYmFja2dyb3VuZC5jYWxjdWxhdGVCYWNrZ3JvdW5kUG9zaXRpb24pKGJhY2tncm91bmQucG9zaXRpb24sIGJhY2tncm91bmRJbWFnZVNpemUsIGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEpO1xuICAgICAgICAgICAgICAgIHZhciBfcGF0aCA9ICgwLCBfYmFja2dyb3VuZC5jYWxjdWxhdGVCYWNrZ3JvdW5kUmVwZWF0UGF0aCkoYmFja2dyb3VuZCwgcG9zaXRpb24sIGJhY2tncm91bmRJbWFnZVNpemUsIGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEsIGNvbnRhaW5lci5ib3VuZHMpO1xuXG4gICAgICAgICAgICAgICAgdmFyIF9vZmZzZXRYID0gTWF0aC5yb3VuZChiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhLmxlZnQgKyBwb3NpdGlvbi54KTtcbiAgICAgICAgICAgICAgICB2YXIgX29mZnNldFkgPSBNYXRoLnJvdW5kKGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEudG9wICsgcG9zaXRpb24ueSk7XG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQucmVuZGVyUmVwZWF0KF9wYXRoLCBpbWFnZSwgYmFja2dyb3VuZEltYWdlU2l6ZSwgX29mZnNldFgsIF9vZmZzZXRZKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyQmFja2dyb3VuZEdyYWRpZW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckJhY2tncm91bmRHcmFkaWVudChjb250YWluZXIsIGJhY2tncm91bmQpIHtcbiAgICAgICAgICAgIHZhciBiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhID0gKDAsIF9iYWNrZ3JvdW5kLmNhbGN1bGF0ZUJhY2tncm91bmdQb3NpdGlvbmluZ0FyZWEpKGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kLmJhY2tncm91bmRPcmlnaW4sIGNvbnRhaW5lci5ib3VuZHMsIGNvbnRhaW5lci5zdHlsZS5wYWRkaW5nLCBjb250YWluZXIuc3R5bGUuYm9yZGVyKTtcbiAgICAgICAgICAgIHZhciBiYWNrZ3JvdW5kSW1hZ2VTaXplID0gKDAsIF9iYWNrZ3JvdW5kLmNhbGN1bGF0ZUdyYWRpZW50QmFja2dyb3VuZFNpemUpKGJhY2tncm91bmQsIGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEpO1xuICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gKDAsIF9iYWNrZ3JvdW5kLmNhbGN1bGF0ZUJhY2tncm91bmRQb3NpdGlvbikoYmFja2dyb3VuZC5wb3NpdGlvbiwgYmFja2dyb3VuZEltYWdlU2l6ZSwgYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYSk7XG4gICAgICAgICAgICB2YXIgZ3JhZGllbnRCb3VuZHMgPSBuZXcgX0JvdW5kcy5Cb3VuZHMoTWF0aC5yb3VuZChiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhLmxlZnQgKyBwb3NpdGlvbi54KSwgTWF0aC5yb3VuZChiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhLnRvcCArIHBvc2l0aW9uLnkpLCBiYWNrZ3JvdW5kSW1hZ2VTaXplLndpZHRoLCBiYWNrZ3JvdW5kSW1hZ2VTaXplLmhlaWdodCk7XG5cbiAgICAgICAgICAgIHZhciBncmFkaWVudCA9ICgwLCBfR3JhZGllbnQucGFyc2VHcmFkaWVudCkoY29udGFpbmVyLCBiYWNrZ3JvdW5kLnNvdXJjZSwgZ3JhZGllbnRCb3VuZHMpO1xuICAgICAgICAgICAgaWYgKGdyYWRpZW50KSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChncmFkaWVudC50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgX0dyYWRpZW50LkdSQURJRU5UX1RZUEUuTElORUFSX0dSQURJRU5UOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YXJnZXQucmVuZGVyTGluZWFyR3JhZGllbnQoZ3JhZGllbnRCb3VuZHMsIGdyYWRpZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIF9HcmFkaWVudC5HUkFESUVOVF9UWVBFLlJBRElBTF9HUkFESUVOVDpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LnJlbmRlclJhZGlhbEdyYWRpZW50KGdyYWRpZW50Qm91bmRzLCBncmFkaWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlckJvcmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJCb3JkZXIoYm9yZGVyLCBzaWRlLCBjdXJ2ZVBvaW50cykge1xuICAgICAgICAgICAgdGhpcy50YXJnZXQuZHJhd1NoYXBlKCgwLCBfQm91bmRzLnBhcnNlUGF0aEZvckJvcmRlcikoY3VydmVQb2ludHMsIHNpZGUpLCBib3JkZXIuYm9yZGVyQ29sb3IpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXJTdGFjaycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJTdGFjayhzdGFjaykge1xuICAgICAgICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmIChzdGFjay5jb250YWluZXIuaXNWaXNpYmxlKCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgX29wYWNpdHkgPSBzdGFjay5nZXRPcGFjaXR5KCk7XG4gICAgICAgICAgICAgICAgaWYgKF9vcGFjaXR5ICE9PSB0aGlzLl9vcGFjaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LnNldE9wYWNpdHkoc3RhY2suZ2V0T3BhY2l0eSgpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fb3BhY2l0eSA9IF9vcGFjaXR5O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBfdHJhbnNmb3JtID0gc3RhY2suY29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybTtcbiAgICAgICAgICAgICAgICBpZiAoX3RyYW5zZm9ybSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC50cmFuc2Zvcm0oc3RhY2suY29udGFpbmVyLmJvdW5kcy5sZWZ0ICsgX3RyYW5zZm9ybS50cmFuc2Zvcm1PcmlnaW5bMF0udmFsdWUsIHN0YWNrLmNvbnRhaW5lci5ib3VuZHMudG9wICsgX3RyYW5zZm9ybS50cmFuc2Zvcm1PcmlnaW5bMV0udmFsdWUsIF90cmFuc2Zvcm0udHJhbnNmb3JtLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXM0LnJlbmRlclN0YWNrQ29udGVudChzdGFjayk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyU3RhY2tDb250ZW50KHN0YWNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlclN0YWNrQ29udGVudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJTdGFja0NvbnRlbnQoc3RhY2spIHtcbiAgICAgICAgICAgIHZhciBfc3BsaXRTdGFja2luZ0NvbnRleHQgPSBzcGxpdFN0YWNraW5nQ29udGV4dHMoc3RhY2spLFxuICAgICAgICAgICAgICAgIF9zcGxpdFN0YWNraW5nQ29udGV4dDIgPSBfc2xpY2VkVG9BcnJheShfc3BsaXRTdGFja2luZ0NvbnRleHQsIDUpLFxuICAgICAgICAgICAgICAgIG5lZ2F0aXZlWkluZGV4ID0gX3NwbGl0U3RhY2tpbmdDb250ZXh0MlswXSxcbiAgICAgICAgICAgICAgICB6ZXJvT3JBdXRvWkluZGV4T3JUcmFuc2Zvcm1lZE9yT3BhY2l0eSA9IF9zcGxpdFN0YWNraW5nQ29udGV4dDJbMV0sXG4gICAgICAgICAgICAgICAgcG9zaXRpdmVaSW5kZXggPSBfc3BsaXRTdGFja2luZ0NvbnRleHQyWzJdLFxuICAgICAgICAgICAgICAgIG5vblBvc2l0aW9uZWRGbG9hdHMgPSBfc3BsaXRTdGFja2luZ0NvbnRleHQyWzNdLFxuICAgICAgICAgICAgICAgIG5vblBvc2l0aW9uZWRJbmxpbmVMZXZlbCA9IF9zcGxpdFN0YWNraW5nQ29udGV4dDJbNF07XG5cbiAgICAgICAgICAgIHZhciBfc3BsaXREZXNjZW5kYW50cyA9IHNwbGl0RGVzY2VuZGFudHMoc3RhY2spLFxuICAgICAgICAgICAgICAgIF9zcGxpdERlc2NlbmRhbnRzMiA9IF9zbGljZWRUb0FycmF5KF9zcGxpdERlc2NlbmRhbnRzLCAyKSxcbiAgICAgICAgICAgICAgICBpbmxpbmVMZXZlbCA9IF9zcGxpdERlc2NlbmRhbnRzMlswXSxcbiAgICAgICAgICAgICAgICBub25JbmxpbmVMZXZlbCA9IF9zcGxpdERlc2NlbmRhbnRzMlsxXTtcblxuICAgICAgICAgICAgLy8gaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1wb3NpdGlvbi0zLyNwYWludGluZy1vcmRlclxuICAgICAgICAgICAgLy8gMS4gdGhlIGJhY2tncm91bmQgYW5kIGJvcmRlcnMgb2YgdGhlIGVsZW1lbnQgZm9ybWluZyB0aGUgc3RhY2tpbmcgY29udGV4dC5cblxuXG4gICAgICAgICAgICB0aGlzLnJlbmRlck5vZGVCYWNrZ3JvdW5kQW5kQm9yZGVycyhzdGFjay5jb250YWluZXIpO1xuICAgICAgICAgICAgLy8gMi4gdGhlIGNoaWxkIHN0YWNraW5nIGNvbnRleHRzIHdpdGggbmVnYXRpdmUgc3RhY2sgbGV2ZWxzIChtb3N0IG5lZ2F0aXZlIGZpcnN0KS5cbiAgICAgICAgICAgIG5lZ2F0aXZlWkluZGV4LnNvcnQoc29ydEJ5WkluZGV4KS5mb3JFYWNoKHRoaXMucmVuZGVyU3RhY2ssIHRoaXMpO1xuICAgICAgICAgICAgLy8gMy4gRm9yIGFsbCBpdHMgaW4tZmxvdywgbm9uLXBvc2l0aW9uZWQsIGJsb2NrLWxldmVsIGRlc2NlbmRhbnRzIGluIHRyZWUgb3JkZXI6XG4gICAgICAgICAgICB0aGlzLnJlbmRlck5vZGVDb250ZW50KHN0YWNrLmNvbnRhaW5lcik7XG4gICAgICAgICAgICBub25JbmxpbmVMZXZlbC5mb3JFYWNoKHRoaXMucmVuZGVyTm9kZSwgdGhpcyk7XG4gICAgICAgICAgICAvLyA0LiBBbGwgbm9uLXBvc2l0aW9uZWQgZmxvYXRpbmcgZGVzY2VuZGFudHMsIGluIHRyZWUgb3JkZXIuIEZvciBlYWNoIG9uZSBvZiB0aGVzZSxcbiAgICAgICAgICAgIC8vIHRyZWF0IHRoZSBlbGVtZW50IGFzIGlmIGl0IGNyZWF0ZWQgYSBuZXcgc3RhY2tpbmcgY29udGV4dCwgYnV0IGFueSBwb3NpdGlvbmVkIGRlc2NlbmRhbnRzIGFuZCBkZXNjZW5kYW50c1xuICAgICAgICAgICAgLy8gd2hpY2ggYWN0dWFsbHkgY3JlYXRlIGEgbmV3IHN0YWNraW5nIGNvbnRleHQgc2hvdWxkIGJlIGNvbnNpZGVyZWQgcGFydCBvZiB0aGUgcGFyZW50IHN0YWNraW5nIGNvbnRleHQsXG4gICAgICAgICAgICAvLyBub3QgdGhpcyBuZXcgb25lLlxuICAgICAgICAgICAgbm9uUG9zaXRpb25lZEZsb2F0cy5mb3JFYWNoKHRoaXMucmVuZGVyU3RhY2ssIHRoaXMpO1xuICAgICAgICAgICAgLy8gNS4gdGhlIGluLWZsb3csIGlubGluZS1sZXZlbCwgbm9uLXBvc2l0aW9uZWQgZGVzY2VuZGFudHMsIGluY2x1ZGluZyBpbmxpbmUgdGFibGVzIGFuZCBpbmxpbmUgYmxvY2tzLlxuICAgICAgICAgICAgbm9uUG9zaXRpb25lZElubGluZUxldmVsLmZvckVhY2godGhpcy5yZW5kZXJTdGFjaywgdGhpcyk7XG4gICAgICAgICAgICBpbmxpbmVMZXZlbC5mb3JFYWNoKHRoaXMucmVuZGVyTm9kZSwgdGhpcyk7XG4gICAgICAgICAgICAvLyA2LiBBbGwgcG9zaXRpb25lZCwgb3BhY2l0eSBvciB0cmFuc2Zvcm0gZGVzY2VuZGFudHMsIGluIHRyZWUgb3JkZXIgdGhhdCBmYWxsIGludG8gdGhlIGZvbGxvd2luZyBjYXRlZ29yaWVzOlxuICAgICAgICAgICAgLy8gIEFsbCBwb3NpdGlvbmVkIGRlc2NlbmRhbnRzIHdpdGggJ3otaW5kZXg6IGF1dG8nIG9yICd6LWluZGV4OiAwJywgaW4gdHJlZSBvcmRlci5cbiAgICAgICAgICAgIC8vICBGb3IgdGhvc2Ugd2l0aCAnei1pbmRleDogYXV0bycsIHRyZWF0IHRoZSBlbGVtZW50IGFzIGlmIGl0IGNyZWF0ZWQgYSBuZXcgc3RhY2tpbmcgY29udGV4dCxcbiAgICAgICAgICAgIC8vICBidXQgYW55IHBvc2l0aW9uZWQgZGVzY2VuZGFudHMgYW5kIGRlc2NlbmRhbnRzIHdoaWNoIGFjdHVhbGx5IGNyZWF0ZSBhIG5ldyBzdGFja2luZyBjb250ZXh0IHNob3VsZCBiZVxuICAgICAgICAgICAgLy8gIGNvbnNpZGVyZWQgcGFydCBvZiB0aGUgcGFyZW50IHN0YWNraW5nIGNvbnRleHQsIG5vdCB0aGlzIG5ldyBvbmUuIEZvciB0aG9zZSB3aXRoICd6LWluZGV4OiAwJyxcbiAgICAgICAgICAgIC8vICB0cmVhdCB0aGUgc3RhY2tpbmcgY29udGV4dCBnZW5lcmF0ZWQgYXRvbWljYWxseS5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgQWxsIG9wYWNpdHkgZGVzY2VuZGFudHMgd2l0aCBvcGFjaXR5IGxlc3MgdGhhbiAxXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gIEFsbCB0cmFuc2Zvcm0gZGVzY2VuZGFudHMgd2l0aCB0cmFuc2Zvcm0gb3RoZXIgdGhhbiBub25lXG4gICAgICAgICAgICB6ZXJvT3JBdXRvWkluZGV4T3JUcmFuc2Zvcm1lZE9yT3BhY2l0eS5mb3JFYWNoKHRoaXMucmVuZGVyU3RhY2ssIHRoaXMpO1xuICAgICAgICAgICAgLy8gNy4gU3RhY2tpbmcgY29udGV4dHMgZm9ybWVkIGJ5IHBvc2l0aW9uZWQgZGVzY2VuZGFudHMgd2l0aCB6LWluZGljZXMgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIDEgaW4gei1pbmRleFxuICAgICAgICAgICAgLy8gb3JkZXIgKHNtYWxsZXN0IGZpcnN0KSB0aGVuIHRyZWUgb3JkZXIuXG4gICAgICAgICAgICBwb3NpdGl2ZVpJbmRleC5zb3J0KHNvcnRCeVpJbmRleCkuZm9yRWFjaCh0aGlzLnJlbmRlclN0YWNrLCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcihzdGFjaykge1xuICAgICAgICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYmFja2dyb3VuZENvbG9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQucmVjdGFuZ2xlKHRoaXMub3B0aW9ucy54LCB0aGlzLm9wdGlvbnMueSwgdGhpcy5vcHRpb25zLndpZHRoLCB0aGlzLm9wdGlvbnMuaGVpZ2h0LCB0aGlzLm9wdGlvbnMuYmFja2dyb3VuZENvbG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVuZGVyU3RhY2soc3RhY2spO1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMudGFyZ2V0LmdldFRhcmdldCgpO1xuICAgICAgICAgICAgaWYgKHRydWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0LnRoZW4oZnVuY3Rpb24gKG91dHB1dCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpczUub3B0aW9ucy5sb2dnZXIubG9nKCdSZW5kZXIgY29tcGxldGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFJlbmRlcmVyO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBSZW5kZXJlcjtcblxuXG52YXIgc3BsaXREZXNjZW5kYW50cyA9IGZ1bmN0aW9uIHNwbGl0RGVzY2VuZGFudHMoc3RhY2spIHtcbiAgICB2YXIgaW5saW5lTGV2ZWwgPSBbXTtcbiAgICB2YXIgbm9uSW5saW5lTGV2ZWwgPSBbXTtcblxuICAgIHZhciBsZW5ndGggPSBzdGFjay5jaGlsZHJlbi5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hpbGQgPSBzdGFjay5jaGlsZHJlbltpXTtcbiAgICAgICAgaWYgKGNoaWxkLmlzSW5saW5lTGV2ZWwoKSkge1xuICAgICAgICAgICAgaW5saW5lTGV2ZWwucHVzaChjaGlsZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub25JbmxpbmVMZXZlbC5wdXNoKGNoaWxkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gW2lubGluZUxldmVsLCBub25JbmxpbmVMZXZlbF07XG59O1xuXG52YXIgc3BsaXRTdGFja2luZ0NvbnRleHRzID0gZnVuY3Rpb24gc3BsaXRTdGFja2luZ0NvbnRleHRzKHN0YWNrKSB7XG4gICAgdmFyIG5lZ2F0aXZlWkluZGV4ID0gW107XG4gICAgdmFyIHplcm9PckF1dG9aSW5kZXhPclRyYW5zZm9ybWVkT3JPcGFjaXR5ID0gW107XG4gICAgdmFyIHBvc2l0aXZlWkluZGV4ID0gW107XG4gICAgdmFyIG5vblBvc2l0aW9uZWRGbG9hdHMgPSBbXTtcbiAgICB2YXIgbm9uUG9zaXRpb25lZElubGluZUxldmVsID0gW107XG4gICAgdmFyIGxlbmd0aCA9IHN0YWNrLmNvbnRleHRzLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IHN0YWNrLmNvbnRleHRzW2ldO1xuICAgICAgICBpZiAoY2hpbGQuY29udGFpbmVyLmlzUG9zaXRpb25lZCgpIHx8IGNoaWxkLmNvbnRhaW5lci5zdHlsZS5vcGFjaXR5IDwgMSB8fCBjaGlsZC5jb250YWluZXIuaXNUcmFuc2Zvcm1lZCgpKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGQuY29udGFpbmVyLnN0eWxlLnpJbmRleC5vcmRlciA8IDApIHtcbiAgICAgICAgICAgICAgICBuZWdhdGl2ZVpJbmRleC5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hpbGQuY29udGFpbmVyLnN0eWxlLnpJbmRleC5vcmRlciA+IDApIHtcbiAgICAgICAgICAgICAgICBwb3NpdGl2ZVpJbmRleC5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgemVyb09yQXV0b1pJbmRleE9yVHJhbnNmb3JtZWRPck9wYWNpdHkucHVzaChjaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoY2hpbGQuY29udGFpbmVyLmlzRmxvYXRpbmcoKSkge1xuICAgICAgICAgICAgICAgIG5vblBvc2l0aW9uZWRGbG9hdHMucHVzaChjaGlsZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5vblBvc2l0aW9uZWRJbmxpbmVMZXZlbC5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gW25lZ2F0aXZlWkluZGV4LCB6ZXJvT3JBdXRvWkluZGV4T3JUcmFuc2Zvcm1lZE9yT3BhY2l0eSwgcG9zaXRpdmVaSW5kZXgsIG5vblBvc2l0aW9uZWRGbG9hdHMsIG5vblBvc2l0aW9uZWRJbmxpbmVMZXZlbF07XG59O1xuXG52YXIgc29ydEJ5WkluZGV4ID0gZnVuY3Rpb24gc29ydEJ5WkluZGV4KGEsIGIpIHtcbiAgICBpZiAoYS5jb250YWluZXIuc3R5bGUuekluZGV4Lm9yZGVyID4gYi5jb250YWluZXIuc3R5bGUuekluZGV4Lm9yZGVyKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZiAoYS5jb250YWluZXIuc3R5bGUuekluZGV4Lm9yZGVyIDwgYi5jb250YWluZXIuc3R5bGUuekluZGV4Lm9yZGVyKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICByZXR1cm4gYS5jb250YWluZXIuaW5kZXggPiBiLmNvbnRhaW5lci5pbmRleCA/IDEgOiAtMTtcbn07XG5cbi8qKiovIH0pLFxuLyogNTIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy50cmFuc2Zvcm1XZWJraXRSYWRpYWxHcmFkaWVudEFyZ3MgPSBleHBvcnRzLnBhcnNlR3JhZGllbnQgPSBleHBvcnRzLlJhZGlhbEdyYWRpZW50ID0gZXhwb3J0cy5MaW5lYXJHcmFkaWVudCA9IGV4cG9ydHMuUkFESUFMX0dSQURJRU5UX1NIQVBFID0gZXhwb3J0cy5HUkFESUVOVF9UWVBFID0gdW5kZWZpbmVkO1xuXG52YXIgX3NsaWNlZFRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH0gcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGkpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyByZXR1cm4gYXJyOyB9IGVsc2UgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkgeyByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpOyB9IGVsc2UgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTsgfSB9OyB9KCk7XG5cbnZhciBfTm9kZUNvbnRhaW5lciA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cbnZhciBfTm9kZUNvbnRhaW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ob2RlQ29udGFpbmVyKTtcblxudmFyIF9BbmdsZSA9IF9fd2VicGFja19yZXF1aXJlX18oNTMpO1xuXG52YXIgX0NvbG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxudmFyIF9Db2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db2xvcik7XG5cbnZhciBfTGVuZ3RoID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxudmFyIF9MZW5ndGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTGVuZ3RoKTtcblxudmFyIF9VdGlsID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFNJREVfT1JfQ09STkVSID0gL14odG8gKT8obGVmdHx0b3B8cmlnaHR8Ym90dG9tKSggKGxlZnR8dG9wfHJpZ2h0fGJvdHRvbSkpPyQvaTtcbnZhciBQRVJDRU5UQUdFX0FOR0xFUyA9IC9eKFsrLV0/XFxkKlxcLj9cXGQrKSUgKFsrLV0/XFxkKlxcLj9cXGQrKSUkL2k7XG52YXIgRU5EU19XSVRIX0xFTkdUSCA9IC8ocHgpfCV8KCAwKSQvaTtcbnZhciBGUk9NX1RPX0NPTE9SU1RPUCA9IC9eKGZyb218dG98Y29sb3Itc3RvcClcXCgoPzooW1xcZC5dKykoJSk/LFxccyopPyguKz8pXFwpJC9pO1xudmFyIFJBRElBTF9TSEFQRV9ERUZJTklUSU9OID0gL15cXHMqKGNpcmNsZXxlbGxpcHNlKT9cXHMqKCg/OihbXFxkLl0rKShweHxyP2VtfCUpXFxzKig/OihbXFxkLl0rKShweHxyP2VtfCUpKT8pfGNsb3Nlc3Qtc2lkZXxjbG9zZXN0LWNvcm5lcnxmYXJ0aGVzdC1zaWRlfGZhcnRoZXN0LWNvcm5lcik/XFxzKig/OmF0XFxzKig/OihsZWZ0fGNlbnRlcnxyaWdodCl8KFtcXGQuXSspKHB4fHI/ZW18JSkpXFxzKyg/Oih0b3B8Y2VudGVyfGJvdHRvbSl8KFtcXGQuXSspKHB4fHI/ZW18JSkpKT8oPzpcXHN8JCkvaTtcblxudmFyIEdSQURJRU5UX1RZUEUgPSBleHBvcnRzLkdSQURJRU5UX1RZUEUgPSB7XG4gICAgTElORUFSX0dSQURJRU5UOiAwLFxuICAgIFJBRElBTF9HUkFESUVOVDogMVxufTtcblxudmFyIFJBRElBTF9HUkFESUVOVF9TSEFQRSA9IGV4cG9ydHMuUkFESUFMX0dSQURJRU5UX1NIQVBFID0ge1xuICAgIENJUkNMRTogMCxcbiAgICBFTExJUFNFOiAxXG59O1xuXG52YXIgTEVOR1RIX0ZPUl9QT1NJVElPTiA9IHtcbiAgICBsZWZ0OiBuZXcgX0xlbmd0aDIuZGVmYXVsdCgnMCUnKSxcbiAgICB0b3A6IG5ldyBfTGVuZ3RoMi5kZWZhdWx0KCcwJScpLFxuICAgIGNlbnRlcjogbmV3IF9MZW5ndGgyLmRlZmF1bHQoJzUwJScpLFxuICAgIHJpZ2h0OiBuZXcgX0xlbmd0aDIuZGVmYXVsdCgnMTAwJScpLFxuICAgIGJvdHRvbTogbmV3IF9MZW5ndGgyLmRlZmF1bHQoJzEwMCUnKVxufTtcblxudmFyIExpbmVhckdyYWRpZW50ID0gZXhwb3J0cy5MaW5lYXJHcmFkaWVudCA9IGZ1bmN0aW9uIExpbmVhckdyYWRpZW50KGNvbG9yU3RvcHMsIGRpcmVjdGlvbikge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMaW5lYXJHcmFkaWVudCk7XG5cbiAgICB0aGlzLnR5cGUgPSBHUkFESUVOVF9UWVBFLkxJTkVBUl9HUkFESUVOVDtcbiAgICB0aGlzLmNvbG9yU3RvcHMgPSBjb2xvclN0b3BzO1xuICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xufTtcblxudmFyIFJhZGlhbEdyYWRpZW50ID0gZXhwb3J0cy5SYWRpYWxHcmFkaWVudCA9IGZ1bmN0aW9uIFJhZGlhbEdyYWRpZW50KGNvbG9yU3RvcHMsIHNoYXBlLCBjZW50ZXIsIHJhZGl1cykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSYWRpYWxHcmFkaWVudCk7XG5cbiAgICB0aGlzLnR5cGUgPSBHUkFESUVOVF9UWVBFLlJBRElBTF9HUkFESUVOVDtcbiAgICB0aGlzLmNvbG9yU3RvcHMgPSBjb2xvclN0b3BzO1xuICAgIHRoaXMuc2hhcGUgPSBzaGFwZTtcbiAgICB0aGlzLmNlbnRlciA9IGNlbnRlcjtcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbn07XG5cbnZhciBwYXJzZUdyYWRpZW50ID0gZXhwb3J0cy5wYXJzZUdyYWRpZW50ID0gZnVuY3Rpb24gcGFyc2VHcmFkaWVudChjb250YWluZXIsIF9yZWYsIGJvdW5kcykge1xuICAgIHZhciBhcmdzID0gX3JlZi5hcmdzLFxuICAgICAgICBtZXRob2QgPSBfcmVmLm1ldGhvZCxcbiAgICAgICAgcHJlZml4ID0gX3JlZi5wcmVmaXg7XG5cbiAgICBpZiAobWV0aG9kID09PSAnbGluZWFyLWdyYWRpZW50Jykge1xuICAgICAgICByZXR1cm4gcGFyc2VMaW5lYXJHcmFkaWVudChhcmdzLCBib3VuZHMsICEhcHJlZml4KTtcbiAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gJ2dyYWRpZW50JyAmJiBhcmdzWzBdID09PSAnbGluZWFyJykge1xuICAgICAgICAvLyBUT0RPIGhhbmRsZSBjb3JyZWN0IGFuZ2xlXG4gICAgICAgIHJldHVybiBwYXJzZUxpbmVhckdyYWRpZW50KFsndG8gYm90dG9tJ10uY29uY2F0KHRyYW5zZm9ybU9ic29sZXRlQ29sb3JTdG9wcyhhcmdzLnNsaWNlKDMpKSksIGJvdW5kcywgISFwcmVmaXgpO1xuICAgIH0gZWxzZSBpZiAobWV0aG9kID09PSAncmFkaWFsLWdyYWRpZW50Jykge1xuICAgICAgICByZXR1cm4gcGFyc2VSYWRpYWxHcmFkaWVudChjb250YWluZXIsIHByZWZpeCA9PT0gJy13ZWJraXQtJyA/IHRyYW5zZm9ybVdlYmtpdFJhZGlhbEdyYWRpZW50QXJncyhhcmdzKSA6IGFyZ3MsIGJvdW5kcyk7XG4gICAgfSBlbHNlIGlmIChtZXRob2QgPT09ICdncmFkaWVudCcgJiYgYXJnc1swXSA9PT0gJ3JhZGlhbCcpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlUmFkaWFsR3JhZGllbnQoY29udGFpbmVyLCB0cmFuc2Zvcm1PYnNvbGV0ZUNvbG9yU3RvcHModHJhbnNmb3JtV2Via2l0UmFkaWFsR3JhZGllbnRBcmdzKGFyZ3Muc2xpY2UoMSkpKSwgYm91bmRzKTtcbiAgICB9XG59O1xuXG52YXIgcGFyc2VDb2xvclN0b3BzID0gZnVuY3Rpb24gcGFyc2VDb2xvclN0b3BzKGFyZ3MsIGZpcnN0Q29sb3JTdG9wSW5kZXgsIGxpbmVMZW5ndGgpIHtcbiAgICB2YXIgY29sb3JTdG9wcyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IGZpcnN0Q29sb3JTdG9wSW5kZXg7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGFyZ3NbaV07XG4gICAgICAgIHZhciBIQVNfTEVOR1RIID0gRU5EU19XSVRIX0xFTkdUSC50ZXN0KHZhbHVlKTtcbiAgICAgICAgdmFyIGxhc3RTcGFjZUluZGV4ID0gdmFsdWUubGFzdEluZGV4T2YoJyAnKTtcbiAgICAgICAgdmFyIF9jb2xvciA9IG5ldyBfQ29sb3IyLmRlZmF1bHQoSEFTX0xFTkdUSCA/IHZhbHVlLnN1YnN0cmluZygwLCBsYXN0U3BhY2VJbmRleCkgOiB2YWx1ZSk7XG4gICAgICAgIHZhciBfc3RvcCA9IEhBU19MRU5HVEggPyBuZXcgX0xlbmd0aDIuZGVmYXVsdCh2YWx1ZS5zdWJzdHJpbmcobGFzdFNwYWNlSW5kZXggKyAxKSkgOiBpID09PSBmaXJzdENvbG9yU3RvcEluZGV4ID8gbmV3IF9MZW5ndGgyLmRlZmF1bHQoJzAlJykgOiBpID09PSBhcmdzLmxlbmd0aCAtIDEgPyBuZXcgX0xlbmd0aDIuZGVmYXVsdCgnMTAwJScpIDogbnVsbDtcbiAgICAgICAgY29sb3JTdG9wcy5wdXNoKHsgY29sb3I6IF9jb2xvciwgc3RvcDogX3N0b3AgfSk7XG4gICAgfVxuXG4gICAgdmFyIGFic29sdXRlVmFsdWVkQ29sb3JTdG9wcyA9IGNvbG9yU3RvcHMubWFwKGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgICB2YXIgY29sb3IgPSBfcmVmMi5jb2xvcixcbiAgICAgICAgICAgIHN0b3AgPSBfcmVmMi5zdG9wO1xuXG4gICAgICAgIHZhciBhYnNvbHV0ZVN0b3AgPSBsaW5lTGVuZ3RoID09PSAwID8gMCA6IHN0b3AgPyBzdG9wLmdldEFic29sdXRlVmFsdWUobGluZUxlbmd0aCkgLyBsaW5lTGVuZ3RoIDogbnVsbDtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29sb3I6IGNvbG9yLFxuICAgICAgICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgICAgICAgc3RvcDogYWJzb2x1dGVTdG9wXG4gICAgICAgIH07XG4gICAgfSk7XG5cbiAgICB2YXIgcHJldmlvdXNDb2xvclN0b3AgPSBhYnNvbHV0ZVZhbHVlZENvbG9yU3RvcHNbMF0uc3RvcDtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYWJzb2x1dGVWYWx1ZWRDb2xvclN0b3BzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBpZiAocHJldmlvdXNDb2xvclN0b3AgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHZhciBfc3RvcDIgPSBhYnNvbHV0ZVZhbHVlZENvbG9yU3RvcHNbX2ldLnN0b3A7XG4gICAgICAgICAgICBpZiAoX3N0b3AyID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdmFyIG4gPSBfaTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoYWJzb2x1dGVWYWx1ZWRDb2xvclN0b3BzW25dLnN0b3AgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgbisrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgc3RlcHMgPSBuIC0gX2kgKyAxO1xuICAgICAgICAgICAgICAgIHZhciBuZXh0Q29sb3JTdGVwID0gYWJzb2x1dGVWYWx1ZWRDb2xvclN0b3BzW25dLnN0b3A7XG4gICAgICAgICAgICAgICAgdmFyIHN0ZXBTaXplID0gKG5leHRDb2xvclN0ZXAgLSBwcmV2aW91c0NvbG9yU3RvcCkgLyBzdGVwcztcbiAgICAgICAgICAgICAgICBmb3IgKDsgX2kgPCBuOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzQ29sb3JTdG9wID0gYWJzb2x1dGVWYWx1ZWRDb2xvclN0b3BzW19pXS5zdG9wID0gcHJldmlvdXNDb2xvclN0b3AgKyBzdGVwU2l6ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByZXZpb3VzQ29sb3JTdG9wID0gX3N0b3AyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFic29sdXRlVmFsdWVkQ29sb3JTdG9wcztcbn07XG5cbnZhciBwYXJzZUxpbmVhckdyYWRpZW50ID0gZnVuY3Rpb24gcGFyc2VMaW5lYXJHcmFkaWVudChhcmdzLCBib3VuZHMsIGhhc1ByZWZpeCkge1xuICAgIHZhciBhbmdsZSA9ICgwLCBfQW5nbGUucGFyc2VBbmdsZSkoYXJnc1swXSk7XG4gICAgdmFyIEhBU19TSURFX09SX0NPUk5FUiA9IFNJREVfT1JfQ09STkVSLnRlc3QoYXJnc1swXSk7XG4gICAgdmFyIEhBU19ESVJFQ1RJT04gPSBIQVNfU0lERV9PUl9DT1JORVIgfHwgYW5nbGUgIT09IG51bGwgfHwgUEVSQ0VOVEFHRV9BTkdMRVMudGVzdChhcmdzWzBdKTtcbiAgICB2YXIgZGlyZWN0aW9uID0gSEFTX0RJUkVDVElPTiA/IGFuZ2xlICE9PSBudWxsID8gY2FsY3VsYXRlR3JhZGllbnREaXJlY3Rpb24oXG4gICAgLy8gaWYgdGhlcmUgaXMgYSBwcmVmaXgsIHRoZSAwwrAgYW5nbGUgcG9pbnRzIGR1ZSBFYXN0IChpbnN0ZWFkIG9mIE5vcnRoIHBlciBXM0MpXG4gICAgaGFzUHJlZml4ID8gYW5nbGUgLSBNYXRoLlBJICogMC41IDogYW5nbGUsIGJvdW5kcykgOiBIQVNfU0lERV9PUl9DT1JORVIgPyBwYXJzZVNpZGVPckNvcm5lcihhcmdzWzBdLCBib3VuZHMpIDogcGFyc2VQZXJjZW50YWdlQW5nbGUoYXJnc1swXSwgYm91bmRzKSA6IGNhbGN1bGF0ZUdyYWRpZW50RGlyZWN0aW9uKE1hdGguUEksIGJvdW5kcyk7XG4gICAgdmFyIGZpcnN0Q29sb3JTdG9wSW5kZXggPSBIQVNfRElSRUNUSU9OID8gMSA6IDA7XG5cbiAgICAvLyBUT0RPOiBGaXggc29tZSBpbmFjY3VyYWN5IHdpdGggY29sb3Igc3RvcHMgd2l0aCBweCB2YWx1ZXNcbiAgICB2YXIgbGluZUxlbmd0aCA9IE1hdGgubWluKCgwLCBfVXRpbC5kaXN0YW5jZSkoTWF0aC5hYnMoZGlyZWN0aW9uLngwKSArIE1hdGguYWJzKGRpcmVjdGlvbi54MSksIE1hdGguYWJzKGRpcmVjdGlvbi55MCkgKyBNYXRoLmFicyhkaXJlY3Rpb24ueTEpKSwgYm91bmRzLndpZHRoICogMiwgYm91bmRzLmhlaWdodCAqIDIpO1xuXG4gICAgcmV0dXJuIG5ldyBMaW5lYXJHcmFkaWVudChwYXJzZUNvbG9yU3RvcHMoYXJncywgZmlyc3RDb2xvclN0b3BJbmRleCwgbGluZUxlbmd0aCksIGRpcmVjdGlvbik7XG59O1xuXG52YXIgcGFyc2VSYWRpYWxHcmFkaWVudCA9IGZ1bmN0aW9uIHBhcnNlUmFkaWFsR3JhZGllbnQoY29udGFpbmVyLCBhcmdzLCBib3VuZHMpIHtcbiAgICB2YXIgbSA9IGFyZ3NbMF0ubWF0Y2goUkFESUFMX1NIQVBFX0RFRklOSVRJT04pO1xuICAgIHZhciBzaGFwZSA9IG0gJiYgKG1bMV0gPT09ICdjaXJjbGUnIHx8IC8vIGV4cGxpY2l0IHNoYXBlIHNwZWNpZmljYXRpb25cbiAgICBtWzNdICE9PSB1bmRlZmluZWQgJiYgbVs1XSA9PT0gdW5kZWZpbmVkKSAvLyBvbmx5IG9uZSByYWRpdXMgY29vcmRpbmF0ZVxuICAgID8gUkFESUFMX0dSQURJRU5UX1NIQVBFLkNJUkNMRSA6IFJBRElBTF9HUkFESUVOVF9TSEFQRS5FTExJUFNFO1xuICAgIHZhciByYWRpdXMgPSB7fTtcbiAgICB2YXIgY2VudGVyID0ge307XG5cbiAgICBpZiAobSkge1xuICAgICAgICAvLyBSYWRpdXNcbiAgICAgICAgaWYgKG1bM10gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmFkaXVzLnggPSAoMCwgX0xlbmd0aC5jYWxjdWxhdGVMZW5ndGhGcm9tVmFsdWVXaXRoVW5pdCkoY29udGFpbmVyLCBtWzNdLCBtWzRdKS5nZXRBYnNvbHV0ZVZhbHVlKGJvdW5kcy53aWR0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobVs1XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByYWRpdXMueSA9ICgwLCBfTGVuZ3RoLmNhbGN1bGF0ZUxlbmd0aEZyb21WYWx1ZVdpdGhVbml0KShjb250YWluZXIsIG1bNV0sIG1bNl0pLmdldEFic29sdXRlVmFsdWUoYm91bmRzLmhlaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQb3NpdGlvblxuICAgICAgICBpZiAobVs3XSkge1xuICAgICAgICAgICAgY2VudGVyLnggPSBMRU5HVEhfRk9SX1BPU0lUSU9OW21bN10udG9Mb3dlckNhc2UoKV07XG4gICAgICAgIH0gZWxzZSBpZiAobVs4XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjZW50ZXIueCA9ICgwLCBfTGVuZ3RoLmNhbGN1bGF0ZUxlbmd0aEZyb21WYWx1ZVdpdGhVbml0KShjb250YWluZXIsIG1bOF0sIG1bOV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1bMTBdKSB7XG4gICAgICAgICAgICBjZW50ZXIueSA9IExFTkdUSF9GT1JfUE9TSVRJT05bbVsxMF0udG9Mb3dlckNhc2UoKV07XG4gICAgICAgIH0gZWxzZSBpZiAobVsxMV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY2VudGVyLnkgPSAoMCwgX0xlbmd0aC5jYWxjdWxhdGVMZW5ndGhGcm9tVmFsdWVXaXRoVW5pdCkoY29udGFpbmVyLCBtWzExXSwgbVsxMl0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGdyYWRpZW50Q2VudGVyID0ge1xuICAgICAgICB4OiBjZW50ZXIueCA9PT0gdW5kZWZpbmVkID8gYm91bmRzLndpZHRoIC8gMiA6IGNlbnRlci54LmdldEFic29sdXRlVmFsdWUoYm91bmRzLndpZHRoKSxcbiAgICAgICAgeTogY2VudGVyLnkgPT09IHVuZGVmaW5lZCA/IGJvdW5kcy5oZWlnaHQgLyAyIDogY2VudGVyLnkuZ2V0QWJzb2x1dGVWYWx1ZShib3VuZHMuaGVpZ2h0KVxuICAgIH07XG4gICAgdmFyIGdyYWRpZW50UmFkaXVzID0gY2FsY3VsYXRlUmFkaXVzKG0gJiYgbVsyXSB8fCAnZmFydGhlc3QtY29ybmVyJywgc2hhcGUsIGdyYWRpZW50Q2VudGVyLCByYWRpdXMsIGJvdW5kcyk7XG5cbiAgICByZXR1cm4gbmV3IFJhZGlhbEdyYWRpZW50KHBhcnNlQ29sb3JTdG9wcyhhcmdzLCBtID8gMSA6IDAsIE1hdGgubWluKGdyYWRpZW50UmFkaXVzLngsIGdyYWRpZW50UmFkaXVzLnkpKSwgc2hhcGUsIGdyYWRpZW50Q2VudGVyLCBncmFkaWVudFJhZGl1cyk7XG59O1xuXG52YXIgY2FsY3VsYXRlR3JhZGllbnREaXJlY3Rpb24gPSBmdW5jdGlvbiBjYWxjdWxhdGVHcmFkaWVudERpcmVjdGlvbihyYWRpYW4sIGJvdW5kcykge1xuICAgIHZhciB3aWR0aCA9IGJvdW5kcy53aWR0aDtcbiAgICB2YXIgaGVpZ2h0ID0gYm91bmRzLmhlaWdodDtcbiAgICB2YXIgSEFMRl9XSURUSCA9IHdpZHRoICogMC41O1xuICAgIHZhciBIQUxGX0hFSUdIVCA9IGhlaWdodCAqIDAuNTtcbiAgICB2YXIgbGluZUxlbmd0aCA9IE1hdGguYWJzKHdpZHRoICogTWF0aC5zaW4ocmFkaWFuKSkgKyBNYXRoLmFicyhoZWlnaHQgKiBNYXRoLmNvcyhyYWRpYW4pKTtcbiAgICB2YXIgSEFMRl9MSU5FX0xFTkdUSCA9IGxpbmVMZW5ndGggLyAyO1xuXG4gICAgdmFyIHgwID0gSEFMRl9XSURUSCArIE1hdGguc2luKHJhZGlhbikgKiBIQUxGX0xJTkVfTEVOR1RIO1xuICAgIHZhciB5MCA9IEhBTEZfSEVJR0hUIC0gTWF0aC5jb3MocmFkaWFuKSAqIEhBTEZfTElORV9MRU5HVEg7XG4gICAgdmFyIHgxID0gd2lkdGggLSB4MDtcbiAgICB2YXIgeTEgPSBoZWlnaHQgLSB5MDtcblxuICAgIHJldHVybiB7IHgwOiB4MCwgeDE6IHgxLCB5MDogeTAsIHkxOiB5MSB9O1xufTtcblxudmFyIHBhcnNlVG9wUmlnaHQgPSBmdW5jdGlvbiBwYXJzZVRvcFJpZ2h0KGJvdW5kcykge1xuICAgIHJldHVybiBNYXRoLmFjb3MoYm91bmRzLndpZHRoIC8gMiAvICgoMCwgX1V0aWwuZGlzdGFuY2UpKGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCkgLyAyKSk7XG59O1xuXG52YXIgcGFyc2VTaWRlT3JDb3JuZXIgPSBmdW5jdGlvbiBwYXJzZVNpZGVPckNvcm5lcihzaWRlLCBib3VuZHMpIHtcbiAgICBzd2l0Y2ggKHNpZGUpIHtcbiAgICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgY2FzZSAndG8gdG9wJzpcbiAgICAgICAgICAgIHJldHVybiBjYWxjdWxhdGVHcmFkaWVudERpcmVjdGlvbigwLCBib3VuZHMpO1xuICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgY2FzZSAndG8gcmlnaHQnOlxuICAgICAgICAgICAgcmV0dXJuIGNhbGN1bGF0ZUdyYWRpZW50RGlyZWN0aW9uKE1hdGguUEkgLyAyLCBib3VuZHMpO1xuICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgIGNhc2UgJ3RvIGxlZnQnOlxuICAgICAgICAgICAgcmV0dXJuIGNhbGN1bGF0ZUdyYWRpZW50RGlyZWN0aW9uKDMgKiBNYXRoLlBJIC8gMiwgYm91bmRzKTtcbiAgICAgICAgY2FzZSAndG9wIHJpZ2h0JzpcbiAgICAgICAgY2FzZSAncmlnaHQgdG9wJzpcbiAgICAgICAgY2FzZSAndG8gYm90dG9tIGxlZnQnOlxuICAgICAgICBjYXNlICd0byBsZWZ0IGJvdHRvbSc6XG4gICAgICAgICAgICByZXR1cm4gY2FsY3VsYXRlR3JhZGllbnREaXJlY3Rpb24oTWF0aC5QSSArIHBhcnNlVG9wUmlnaHQoYm91bmRzKSwgYm91bmRzKTtcbiAgICAgICAgY2FzZSAndG9wIGxlZnQnOlxuICAgICAgICBjYXNlICdsZWZ0IHRvcCc6XG4gICAgICAgIGNhc2UgJ3RvIGJvdHRvbSByaWdodCc6XG4gICAgICAgIGNhc2UgJ3RvIHJpZ2h0IGJvdHRvbSc6XG4gICAgICAgICAgICByZXR1cm4gY2FsY3VsYXRlR3JhZGllbnREaXJlY3Rpb24oTWF0aC5QSSAtIHBhcnNlVG9wUmlnaHQoYm91bmRzKSwgYm91bmRzKTtcbiAgICAgICAgY2FzZSAnYm90dG9tIGxlZnQnOlxuICAgICAgICBjYXNlICdsZWZ0IGJvdHRvbSc6XG4gICAgICAgIGNhc2UgJ3RvIHRvcCByaWdodCc6XG4gICAgICAgIGNhc2UgJ3RvIHJpZ2h0IHRvcCc6XG4gICAgICAgICAgICByZXR1cm4gY2FsY3VsYXRlR3JhZGllbnREaXJlY3Rpb24ocGFyc2VUb3BSaWdodChib3VuZHMpLCBib3VuZHMpO1xuICAgICAgICBjYXNlICdib3R0b20gcmlnaHQnOlxuICAgICAgICBjYXNlICdyaWdodCBib3R0b20nOlxuICAgICAgICBjYXNlICd0byB0b3AgbGVmdCc6XG4gICAgICAgIGNhc2UgJ3RvIGxlZnQgdG9wJzpcbiAgICAgICAgICAgIHJldHVybiBjYWxjdWxhdGVHcmFkaWVudERpcmVjdGlvbigyICogTWF0aC5QSSAtIHBhcnNlVG9wUmlnaHQoYm91bmRzKSwgYm91bmRzKTtcbiAgICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgY2FzZSAndG8gYm90dG9tJzpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBjYWxjdWxhdGVHcmFkaWVudERpcmVjdGlvbihNYXRoLlBJLCBib3VuZHMpO1xuICAgIH1cbn07XG5cbnZhciBwYXJzZVBlcmNlbnRhZ2VBbmdsZSA9IGZ1bmN0aW9uIHBhcnNlUGVyY2VudGFnZUFuZ2xlKGFuZ2xlLCBib3VuZHMpIHtcbiAgICB2YXIgX2FuZ2xlJHNwbGl0JG1hcCA9IGFuZ2xlLnNwbGl0KCcgJykubWFwKHBhcnNlRmxvYXQpLFxuICAgICAgICBfYW5nbGUkc3BsaXQkbWFwMiA9IF9zbGljZWRUb0FycmF5KF9hbmdsZSRzcGxpdCRtYXAsIDIpLFxuICAgICAgICBsZWZ0ID0gX2FuZ2xlJHNwbGl0JG1hcDJbMF0sXG4gICAgICAgIHRvcCA9IF9hbmdsZSRzcGxpdCRtYXAyWzFdO1xuXG4gICAgdmFyIHJhdGlvID0gbGVmdCAvIDEwMCAqIGJvdW5kcy53aWR0aCAvICh0b3AgLyAxMDAgKiBib3VuZHMuaGVpZ2h0KTtcblxuICAgIHJldHVybiBjYWxjdWxhdGVHcmFkaWVudERpcmVjdGlvbihNYXRoLmF0YW4oaXNOYU4ocmF0aW8pID8gMSA6IHJhdGlvKSArIE1hdGguUEkgLyAyLCBib3VuZHMpO1xufTtcblxudmFyIGZpbmRDb3JuZXIgPSBmdW5jdGlvbiBmaW5kQ29ybmVyKGJvdW5kcywgeCwgeSwgY2xvc2VzdCkge1xuICAgIHZhciBjb3JuZXJzID0gW3sgeDogMCwgeTogMCB9LCB7IHg6IDAsIHk6IGJvdW5kcy5oZWlnaHQgfSwgeyB4OiBib3VuZHMud2lkdGgsIHk6IDAgfSwgeyB4OiBib3VuZHMud2lkdGgsIHk6IGJvdW5kcy5oZWlnaHQgfV07XG5cbiAgICAvLyAkRmxvd0ZpeE1lXG4gICAgcmV0dXJuIGNvcm5lcnMucmVkdWNlKGZ1bmN0aW9uIChzdGF0LCBjb3JuZXIpIHtcbiAgICAgICAgdmFyIGQgPSAoMCwgX1V0aWwuZGlzdGFuY2UpKHggLSBjb3JuZXIueCwgeSAtIGNvcm5lci55KTtcbiAgICAgICAgaWYgKGNsb3Nlc3QgPyBkIDwgc3RhdC5vcHRpbXVtRGlzdGFuY2UgOiBkID4gc3RhdC5vcHRpbXVtRGlzdGFuY2UpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgb3B0aW11bUNvcm5lcjogY29ybmVyLFxuICAgICAgICAgICAgICAgIG9wdGltdW1EaXN0YW5jZTogZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGF0O1xuICAgIH0sIHtcbiAgICAgICAgb3B0aW11bURpc3RhbmNlOiBjbG9zZXN0ID8gSW5maW5pdHkgOiAtSW5maW5pdHksXG4gICAgICAgIG9wdGltdW1Db3JuZXI6IG51bGxcbiAgICB9KS5vcHRpbXVtQ29ybmVyO1xufTtcblxudmFyIGNhbGN1bGF0ZVJhZGl1cyA9IGZ1bmN0aW9uIGNhbGN1bGF0ZVJhZGl1cyhleHRlbnQsIHNoYXBlLCBjZW50ZXIsIHJhZGl1cywgYm91bmRzKSB7XG4gICAgdmFyIHggPSBjZW50ZXIueDtcbiAgICB2YXIgeSA9IGNlbnRlci55O1xuICAgIHZhciByeCA9IDA7XG4gICAgdmFyIHJ5ID0gMDtcblxuICAgIHN3aXRjaCAoZXh0ZW50KSB7XG4gICAgICAgIGNhc2UgJ2Nsb3Nlc3Qtc2lkZSc6XG4gICAgICAgICAgICAvLyBUaGUgZW5kaW5nIHNoYXBlIGlzIHNpemVkIHNvIHRoYXQgdGhhdCBpdCBleGFjdGx5IG1lZXRzIHRoZSBzaWRlIG9mIHRoZSBncmFkaWVudCBib3ggY2xvc2VzdCB0byB0aGUgZ3JhZGllbnTigJlzIGNlbnRlci5cbiAgICAgICAgICAgIC8vIElmIHRoZSBzaGFwZSBpcyBhbiBlbGxpcHNlLCBpdCBleGFjdGx5IG1lZXRzIHRoZSBjbG9zZXN0IHNpZGUgaW4gZWFjaCBkaW1lbnNpb24uXG4gICAgICAgICAgICBpZiAoc2hhcGUgPT09IFJBRElBTF9HUkFESUVOVF9TSEFQRS5DSVJDTEUpIHtcbiAgICAgICAgICAgICAgICByeCA9IHJ5ID0gTWF0aC5taW4oTWF0aC5hYnMoeCksIE1hdGguYWJzKHggLSBib3VuZHMud2lkdGgpLCBNYXRoLmFicyh5KSwgTWF0aC5hYnMoeSAtIGJvdW5kcy5oZWlnaHQpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hhcGUgPT09IFJBRElBTF9HUkFESUVOVF9TSEFQRS5FTExJUFNFKSB7XG4gICAgICAgICAgICAgICAgcnggPSBNYXRoLm1pbihNYXRoLmFicyh4KSwgTWF0aC5hYnMoeCAtIGJvdW5kcy53aWR0aCkpO1xuICAgICAgICAgICAgICAgIHJ5ID0gTWF0aC5taW4oTWF0aC5hYnMoeSksIE1hdGguYWJzKHkgLSBib3VuZHMuaGVpZ2h0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdjbG9zZXN0LWNvcm5lcic6XG4gICAgICAgICAgICAvLyBUaGUgZW5kaW5nIHNoYXBlIGlzIHNpemVkIHNvIHRoYXQgdGhhdCBpdCBwYXNzZXMgdGhyb3VnaCB0aGUgY29ybmVyIG9mIHRoZSBncmFkaWVudCBib3ggY2xvc2VzdCB0byB0aGUgZ3JhZGllbnTigJlzIGNlbnRlci5cbiAgICAgICAgICAgIC8vIElmIHRoZSBzaGFwZSBpcyBhbiBlbGxpcHNlLCB0aGUgZW5kaW5nIHNoYXBlIGlzIGdpdmVuIHRoZSBzYW1lIGFzcGVjdC1yYXRpbyBpdCB3b3VsZCBoYXZlIGlmIGNsb3Nlc3Qtc2lkZSB3ZXJlIHNwZWNpZmllZC5cbiAgICAgICAgICAgIGlmIChzaGFwZSA9PT0gUkFESUFMX0dSQURJRU5UX1NIQVBFLkNJUkNMRSkge1xuICAgICAgICAgICAgICAgIHJ4ID0gcnkgPSBNYXRoLm1pbigoMCwgX1V0aWwuZGlzdGFuY2UpKHgsIHkpLCAoMCwgX1V0aWwuZGlzdGFuY2UpKHgsIHkgLSBib3VuZHMuaGVpZ2h0KSwgKDAsIF9VdGlsLmRpc3RhbmNlKSh4IC0gYm91bmRzLndpZHRoLCB5KSwgKDAsIF9VdGlsLmRpc3RhbmNlKSh4IC0gYm91bmRzLndpZHRoLCB5IC0gYm91bmRzLmhlaWdodCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzaGFwZSA9PT0gUkFESUFMX0dSQURJRU5UX1NIQVBFLkVMTElQU0UpIHtcbiAgICAgICAgICAgICAgICAvLyBDb21wdXRlIHRoZSByYXRpbyByeS9yeCAod2hpY2ggaXMgdG8gYmUgdGhlIHNhbWUgYXMgZm9yIFwiY2xvc2VzdC1zaWRlXCIpXG4gICAgICAgICAgICAgICAgdmFyIGMgPSBNYXRoLm1pbihNYXRoLmFicyh5KSwgTWF0aC5hYnMoeSAtIGJvdW5kcy5oZWlnaHQpKSAvIE1hdGgubWluKE1hdGguYWJzKHgpLCBNYXRoLmFicyh4IC0gYm91bmRzLndpZHRoKSk7XG4gICAgICAgICAgICAgICAgdmFyIGNvcm5lciA9IGZpbmRDb3JuZXIoYm91bmRzLCB4LCB5LCB0cnVlKTtcbiAgICAgICAgICAgICAgICByeCA9ICgwLCBfVXRpbC5kaXN0YW5jZSkoY29ybmVyLnggLSB4LCAoY29ybmVyLnkgLSB5KSAvIGMpO1xuICAgICAgICAgICAgICAgIHJ5ID0gYyAqIHJ4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnZmFydGhlc3Qtc2lkZSc6XG4gICAgICAgICAgICAvLyBTYW1lIGFzIGNsb3Nlc3Qtc2lkZSwgZXhjZXB0IHRoZSBlbmRpbmcgc2hhcGUgaXMgc2l6ZWQgYmFzZWQgb24gdGhlIGZhcnRoZXN0IHNpZGUocylcbiAgICAgICAgICAgIGlmIChzaGFwZSA9PT0gUkFESUFMX0dSQURJRU5UX1NIQVBFLkNJUkNMRSkge1xuICAgICAgICAgICAgICAgIHJ4ID0gcnkgPSBNYXRoLm1heChNYXRoLmFicyh4KSwgTWF0aC5hYnMoeCAtIGJvdW5kcy53aWR0aCksIE1hdGguYWJzKHkpLCBNYXRoLmFicyh5IC0gYm91bmRzLmhlaWdodCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzaGFwZSA9PT0gUkFESUFMX0dSQURJRU5UX1NIQVBFLkVMTElQU0UpIHtcbiAgICAgICAgICAgICAgICByeCA9IE1hdGgubWF4KE1hdGguYWJzKHgpLCBNYXRoLmFicyh4IC0gYm91bmRzLndpZHRoKSk7XG4gICAgICAgICAgICAgICAgcnkgPSBNYXRoLm1heChNYXRoLmFicyh5KSwgTWF0aC5hYnMoeSAtIGJvdW5kcy5oZWlnaHQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2ZhcnRoZXN0LWNvcm5lcic6XG4gICAgICAgICAgICAvLyBTYW1lIGFzIGNsb3Nlc3QtY29ybmVyLCBleGNlcHQgdGhlIGVuZGluZyBzaGFwZSBpcyBzaXplZCBiYXNlZCBvbiB0aGUgZmFydGhlc3QgY29ybmVyLlxuICAgICAgICAgICAgLy8gSWYgdGhlIHNoYXBlIGlzIGFuIGVsbGlwc2UsIHRoZSBlbmRpbmcgc2hhcGUgaXMgZ2l2ZW4gdGhlIHNhbWUgYXNwZWN0IHJhdGlvIGl0IHdvdWxkIGhhdmUgaWYgZmFydGhlc3Qtc2lkZSB3ZXJlIHNwZWNpZmllZC5cbiAgICAgICAgICAgIGlmIChzaGFwZSA9PT0gUkFESUFMX0dSQURJRU5UX1NIQVBFLkNJUkNMRSkge1xuICAgICAgICAgICAgICAgIHJ4ID0gcnkgPSBNYXRoLm1heCgoMCwgX1V0aWwuZGlzdGFuY2UpKHgsIHkpLCAoMCwgX1V0aWwuZGlzdGFuY2UpKHgsIHkgLSBib3VuZHMuaGVpZ2h0KSwgKDAsIF9VdGlsLmRpc3RhbmNlKSh4IC0gYm91bmRzLndpZHRoLCB5KSwgKDAsIF9VdGlsLmRpc3RhbmNlKSh4IC0gYm91bmRzLndpZHRoLCB5IC0gYm91bmRzLmhlaWdodCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzaGFwZSA9PT0gUkFESUFMX0dSQURJRU5UX1NIQVBFLkVMTElQU0UpIHtcbiAgICAgICAgICAgICAgICAvLyBDb21wdXRlIHRoZSByYXRpbyByeS9yeCAod2hpY2ggaXMgdG8gYmUgdGhlIHNhbWUgYXMgZm9yIFwiZmFydGhlc3Qtc2lkZVwiKVxuICAgICAgICAgICAgICAgIHZhciBfYyA9IE1hdGgubWF4KE1hdGguYWJzKHkpLCBNYXRoLmFicyh5IC0gYm91bmRzLmhlaWdodCkpIC8gTWF0aC5tYXgoTWF0aC5hYnMoeCksIE1hdGguYWJzKHggLSBib3VuZHMud2lkdGgpKTtcbiAgICAgICAgICAgICAgICB2YXIgX2Nvcm5lciA9IGZpbmRDb3JuZXIoYm91bmRzLCB4LCB5LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcnggPSAoMCwgX1V0aWwuZGlzdGFuY2UpKF9jb3JuZXIueCAtIHgsIChfY29ybmVyLnkgLSB5KSAvIF9jKTtcbiAgICAgICAgICAgICAgICByeSA9IF9jICogcng7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgLy8gcGl4ZWwgb3IgcGVyY2VudGFnZSB2YWx1ZXNcbiAgICAgICAgICAgIHJ4ID0gcmFkaXVzLnggfHwgMDtcbiAgICAgICAgICAgIHJ5ID0gcmFkaXVzLnkgIT09IHVuZGVmaW5lZCA/IHJhZGl1cy55IDogcng7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB4OiByeCxcbiAgICAgICAgeTogcnlcbiAgICB9O1xufTtcblxudmFyIHRyYW5zZm9ybVdlYmtpdFJhZGlhbEdyYWRpZW50QXJncyA9IGV4cG9ydHMudHJhbnNmb3JtV2Via2l0UmFkaWFsR3JhZGllbnRBcmdzID0gZnVuY3Rpb24gdHJhbnNmb3JtV2Via2l0UmFkaWFsR3JhZGllbnRBcmdzKGFyZ3MpIHtcbiAgICB2YXIgc2hhcGUgPSAnJztcbiAgICB2YXIgcmFkaXVzID0gJyc7XG4gICAgdmFyIGV4dGVudCA9ICcnO1xuICAgIHZhciBwb3NpdGlvbiA9ICcnO1xuICAgIHZhciBpZHggPSAwO1xuXG4gICAgdmFyIFBPU0lUSU9OID0gL14obGVmdHxjZW50ZXJ8cmlnaHR8XFxkKyg/OnB4fHI/ZW18JSk/KSg/OlxccysodG9wfGNlbnRlcnxib3R0b218XFxkKyg/OnB4fHI/ZW18JSk/KSk/JC9pO1xuICAgIHZhciBTSEFQRV9BTkRfRVhURU5UID0gL14oY2lyY2xlfGVsbGlwc2UpP1xccyooY2xvc2VzdC1zaWRlfGNsb3Nlc3QtY29ybmVyfGZhcnRoZXN0LXNpZGV8ZmFydGhlc3QtY29ybmVyfGNvbnRhaW58Y292ZXIpPyQvaTtcbiAgICB2YXIgUkFESVVTID0gL15cXGQrKHB4fHI/ZW18JSk/KD86XFxzK1xcZCsocHh8cj9lbXwlKT8pPyQvaTtcblxuICAgIHZhciBtYXRjaFN0YXJ0UG9zaXRpb24gPSBhcmdzW2lkeF0ubWF0Y2goUE9TSVRJT04pO1xuICAgIGlmIChtYXRjaFN0YXJ0UG9zaXRpb24pIHtcbiAgICAgICAgaWR4Kys7XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoU2hhcGVFeHRlbnQgPSBhcmdzW2lkeF0ubWF0Y2goU0hBUEVfQU5EX0VYVEVOVCk7XG4gICAgaWYgKG1hdGNoU2hhcGVFeHRlbnQpIHtcbiAgICAgICAgc2hhcGUgPSBtYXRjaFNoYXBlRXh0ZW50WzFdIHx8ICcnO1xuICAgICAgICBleHRlbnQgPSBtYXRjaFNoYXBlRXh0ZW50WzJdIHx8ICcnO1xuICAgICAgICBpZiAoZXh0ZW50ID09PSAnY29udGFpbicpIHtcbiAgICAgICAgICAgIGV4dGVudCA9ICdjbG9zZXN0LXNpZGUnO1xuICAgICAgICB9IGVsc2UgaWYgKGV4dGVudCA9PT0gJ2NvdmVyJykge1xuICAgICAgICAgICAgZXh0ZW50ID0gJ2ZhcnRoZXN0LWNvcm5lcic7XG4gICAgICAgIH1cbiAgICAgICAgaWR4Kys7XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoU3RhcnRSYWRpdXMgPSBhcmdzW2lkeF0ubWF0Y2goUkFESVVTKTtcbiAgICBpZiAobWF0Y2hTdGFydFJhZGl1cykge1xuICAgICAgICBpZHgrKztcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hFbmRQb3NpdGlvbiA9IGFyZ3NbaWR4XS5tYXRjaChQT1NJVElPTik7XG4gICAgaWYgKG1hdGNoRW5kUG9zaXRpb24pIHtcbiAgICAgICAgaWR4Kys7XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoRW5kUmFkaXVzID0gYXJnc1tpZHhdLm1hdGNoKFJBRElVUyk7XG4gICAgaWYgKG1hdGNoRW5kUmFkaXVzKSB7XG4gICAgICAgIGlkeCsrO1xuICAgIH1cblxuICAgIHZhciBtYXRjaFBvc2l0aW9uID0gbWF0Y2hFbmRQb3NpdGlvbiB8fCBtYXRjaFN0YXJ0UG9zaXRpb247XG4gICAgaWYgKG1hdGNoUG9zaXRpb24gJiYgbWF0Y2hQb3NpdGlvblsxXSkge1xuICAgICAgICBwb3NpdGlvbiA9IG1hdGNoUG9zaXRpb25bMV0gKyAoL15cXGQrJC8udGVzdChtYXRjaFBvc2l0aW9uWzFdKSA/ICdweCcgOiAnJyk7XG4gICAgICAgIGlmIChtYXRjaFBvc2l0aW9uWzJdKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiArPSAnICcgKyBtYXRjaFBvc2l0aW9uWzJdICsgKC9eXFxkKyQvLnRlc3QobWF0Y2hQb3NpdGlvblsyXSkgPyAncHgnIDogJycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoUmFkaXVzID0gbWF0Y2hFbmRSYWRpdXMgfHwgbWF0Y2hTdGFydFJhZGl1cztcbiAgICBpZiAobWF0Y2hSYWRpdXMpIHtcbiAgICAgICAgcmFkaXVzID0gbWF0Y2hSYWRpdXNbMF07XG4gICAgICAgIGlmICghbWF0Y2hSYWRpdXNbMV0pIHtcbiAgICAgICAgICAgIHJhZGl1cyArPSAncHgnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBvc2l0aW9uICYmICFzaGFwZSAmJiAhcmFkaXVzICYmICFleHRlbnQpIHtcbiAgICAgICAgcmFkaXVzID0gcG9zaXRpb247XG4gICAgICAgIHBvc2l0aW9uID0gJyc7XG4gICAgfVxuXG4gICAgaWYgKHBvc2l0aW9uKSB7XG4gICAgICAgIHBvc2l0aW9uID0gJ2F0ICcgKyBwb3NpdGlvbjtcbiAgICB9XG5cbiAgICByZXR1cm4gW1tzaGFwZSwgZXh0ZW50LCByYWRpdXMsIHBvc2l0aW9uXS5maWx0ZXIoZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgcmV0dXJuICEhcztcbiAgICB9KS5qb2luKCcgJyldLmNvbmNhdChhcmdzLnNsaWNlKGlkeCkpO1xufTtcblxudmFyIHRyYW5zZm9ybU9ic29sZXRlQ29sb3JTdG9wcyA9IGZ1bmN0aW9uIHRyYW5zZm9ybU9ic29sZXRlQ29sb3JTdG9wcyhhcmdzKSB7XG4gICAgcmV0dXJuIGFyZ3MubWFwKGZ1bmN0aW9uIChjb2xvcikge1xuICAgICAgICByZXR1cm4gY29sb3IubWF0Y2goRlJPTV9UT19DT0xPUlNUT1ApO1xuICAgIH0pXG4gICAgLy8gJEZsb3dGaXhNZVxuICAgIC5tYXAoZnVuY3Rpb24gKHYsIGluZGV4KSB7XG4gICAgICAgIGlmICghdikge1xuICAgICAgICAgICAgcmV0dXJuIGFyZ3NbaW5kZXhdO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoICh2WzFdKSB7XG4gICAgICAgICAgICBjYXNlICdmcm9tJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdls0XSArICcgMCUnO1xuICAgICAgICAgICAgY2FzZSAndG8nOlxuICAgICAgICAgICAgICAgIHJldHVybiB2WzRdICsgJyAxMDAlJztcbiAgICAgICAgICAgIGNhc2UgJ2NvbG9yLXN0b3AnOlxuICAgICAgICAgICAgICAgIGlmICh2WzNdID09PSAnJScpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZbNF0gKyAnICcgKyB2WzJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdls0XSArICcgJyArIHBhcnNlRmxvYXQodlsyXSkgKiAxMDAgKyAnJSc7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbi8qKiovIH0pLFxuLyogNTMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xudmFyIEFOR0xFID0gLyhbKy1dP1xcZCpcXC4/XFxkKykoZGVnfGdyYWR8cmFkfHR1cm4pL2k7XG5cbnZhciBwYXJzZUFuZ2xlID0gZXhwb3J0cy5wYXJzZUFuZ2xlID0gZnVuY3Rpb24gcGFyc2VBbmdsZShhbmdsZSkge1xuICAgIHZhciBtYXRjaCA9IGFuZ2xlLm1hdGNoKEFOR0xFKTtcblxuICAgIGlmIChtYXRjaCkge1xuICAgICAgICB2YXIgdmFsdWUgPSBwYXJzZUZsb2F0KG1hdGNoWzFdKTtcbiAgICAgICAgc3dpdGNoIChtYXRjaFsyXS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICBjYXNlICdkZWcnOlxuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLlBJICogdmFsdWUgLyAxODA7XG4gICAgICAgICAgICBjYXNlICdncmFkJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5QSSAvIDIwMCAqIHZhbHVlO1xuICAgICAgICAgICAgY2FzZSAncmFkJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICBjYXNlICd0dXJuJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5QSSAqIDIgKiB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xufTtcblxuLyoqKi8gfSksXG4vKiA1NCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNsb25lV2luZG93ID0gZXhwb3J0cy5Eb2N1bWVudENsb25lciA9IHVuZGVmaW5lZDtcblxudmFyIF9zbGljZWRUb0FycmF5ID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBzbGljZUl0ZXJhdG9yKGFyciwgaSkgeyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9IHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgcmV0dXJuIGFycjsgfSBlbHNlIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpIHsgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTsgfSBlbHNlIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7IH0gfTsgfSgpO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX0JvdW5kcyA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cbnZhciBfUHJveHkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI2KTtcblxudmFyIF9SZXNvdXJjZUxvYWRlciA9IF9fd2VicGFja19yZXF1aXJlX18oNTUpO1xuXG52YXIgX1Jlc291cmNlTG9hZGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Jlc291cmNlTG9hZGVyKTtcblxudmFyIF9VdGlsID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblxudmFyIF9iYWNrZ3JvdW5kID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxudmFyIF9DYW52YXNSZW5kZXJlciA9IF9fd2VicGFja19yZXF1aXJlX18oMTUpO1xuXG52YXIgX0NhbnZhc1JlbmRlcmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NhbnZhc1JlbmRlcmVyKTtcblxudmFyIF9Qc2V1ZG9Ob2RlQ29udGVudCA9IF9fd2VicGFja19yZXF1aXJlX18oNTYpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgSUdOT1JFX0FUVFJJQlVURSA9ICdkYXRhLWh0bWwyY2FudmFzLWlnbm9yZSc7XG5cbnZhciBEb2N1bWVudENsb25lciA9IGV4cG9ydHMuRG9jdW1lbnRDbG9uZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRG9jdW1lbnRDbG9uZXIoZWxlbWVudCwgb3B0aW9ucywgbG9nZ2VyLCBjb3B5SW5saW5lLCByZW5kZXJlcikge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRG9jdW1lbnRDbG9uZXIpO1xuXG4gICAgICAgIHRoaXMucmVmZXJlbmNlRWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuc2Nyb2xsZWRFbGVtZW50cyA9IFtdO1xuICAgICAgICB0aGlzLmNvcHlTdHlsZXMgPSBjb3B5SW5saW5lO1xuICAgICAgICB0aGlzLmlubGluZUltYWdlcyA9IGNvcHlJbmxpbmU7XG4gICAgICAgIHRoaXMubG9nZ2VyID0gbG9nZ2VyO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgICAgIHRoaXMucmVzb3VyY2VMb2FkZXIgPSBuZXcgX1Jlc291cmNlTG9hZGVyMi5kZWZhdWx0KG9wdGlvbnMsIGxvZ2dlciwgd2luZG93KTtcbiAgICAgICAgdGhpcy5wc2V1ZG9Db250ZW50RGF0YSA9IHtcbiAgICAgICAgICAgIGNvdW50ZXJzOiB7fSxcbiAgICAgICAgICAgIHF1b3RlRGVwdGg6IDBcbiAgICAgICAgfTtcbiAgICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgICB0aGlzLmRvY3VtZW50RWxlbWVudCA9IHRoaXMuY2xvbmVOb2RlKGVsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhEb2N1bWVudENsb25lciwgW3tcbiAgICAgICAga2V5OiAnaW5saW5lQWxsSW1hZ2VzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlubGluZUFsbEltYWdlcyhub2RlKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5pbmxpbmVJbWFnZXMgJiYgbm9kZSkge1xuICAgICAgICAgICAgICAgIHZhciBzdHlsZSA9IG5vZGUuc3R5bGU7XG4gICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoKDAsIF9iYWNrZ3JvdW5kLnBhcnNlQmFja2dyb3VuZEltYWdlKShzdHlsZS5iYWNrZ3JvdW5kSW1hZ2UpLm1hcChmdW5jdGlvbiAoYmFja2dyb3VuZEltYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChiYWNrZ3JvdW5kSW1hZ2UubWV0aG9kID09PSAndXJsJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnJlc291cmNlTG9hZGVyLmlubGluZUltYWdlKGJhY2tncm91bmRJbWFnZS5hcmdzWzBdKS50aGVuKGZ1bmN0aW9uIChpbWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW1nICYmIHR5cGVvZiBpbWcuc3JjID09PSAnc3RyaW5nJyA/ICd1cmwoXCInICsgaW1nLnNyYyArICdcIiknIDogJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5sb2dnZXIubG9nKCdVbmFibGUgdG8gbG9hZCBpbWFnZScsIGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoJycgKyBiYWNrZ3JvdW5kSW1hZ2UucHJlZml4ICsgYmFja2dyb3VuZEltYWdlLm1ldGhvZCArICcoJyArIGJhY2tncm91bmRJbWFnZS5hcmdzLmpvaW4oJywnKSArICcpJyk7XG4gICAgICAgICAgICAgICAgfSkpLnRoZW4oZnVuY3Rpb24gKGJhY2tncm91bmRJbWFnZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJhY2tncm91bmRJbWFnZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyBNdWx0aXBsZSBiYWNrZ3JvdW5kcyBzb21laG93IGJyb2tlbiBpbiBDaHJvbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGJhY2tncm91bmRJbWFnZXMuam9pbignLCcpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzb3VyY2VMb2FkZXIuaW5saW5lSW1hZ2Uobm9kZS5zcmMpLnRoZW4oZnVuY3Rpb24gKGltZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltZyAmJiBub2RlIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCAmJiBub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFyZW50Tm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2xvbmVkQ2hpbGQgPSAoMCwgX1V0aWwuY29weUNTU1N0eWxlcykobm9kZS5zdHlsZSwgaW1nLmNsb25lTm9kZShmYWxzZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGNsb25lZENoaWxkLCBub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMubG9nZ2VyLmxvZygnVW5hYmxlIHRvIGxvYWQgaW1hZ2UnLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdpbmxpbmVGb250cycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbmxpbmVGb250cyhkb2N1bWVudCkge1xuICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChBcnJheS5mcm9tKGRvY3VtZW50LnN0eWxlU2hlZXRzKS5tYXAoZnVuY3Rpb24gKHNoZWV0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHNoZWV0LmhyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZldGNoKHNoZWV0LmhyZWYpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVTdHlsZVNoZWV0Rm9udHNGcm9tVGV4dCh0ZXh0LCBzaGVldC5ocmVmKTtcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMyLmxvZ2dlci5sb2coJ1VuYWJsZSB0byBsb2FkIHN0eWxlc2hlZXQnLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBnZXRTaGVldEZvbnRzKHNoZWV0LCBkb2N1bWVudCk7XG4gICAgICAgICAgICB9KSkudGhlbihmdW5jdGlvbiAoZm9udHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9udHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGZvbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjYy5jb25jYXQoZm9udCk7XG4gICAgICAgICAgICAgICAgfSwgW10pO1xuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoZm9udHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoZm9udHMubWFwKGZ1bmN0aW9uIChmb250KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmZXRjaChmb250LmZvcm1hdHNbMF0uc3JjKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmJsb2IoKTtcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoYmxvYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIub25lcnJvciA9IHJlamVjdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSByZWFkZXIucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChkYXRhVXJpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LmZvbnRGYWNlLnNldFByb3BlcnR5KCdzcmMnLCAndXJsKFwiJyArIGRhdGFVcmkgKyAnXCIpJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ0Bmb250LWZhY2UgeycgKyBmb250LmZvbnRGYWNlLmNzc1RleHQgKyAnICc7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGZvbnRDc3MpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICAgICAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gZm9udENzcy5qb2luKCdcXG4nKTtcbiAgICAgICAgICAgICAgICBfdGhpczIuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjcmVhdGVFbGVtZW50Q2xvbmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlRWxlbWVudENsb25lKG5vZGUpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5jb3B5U3R5bGVzICYmIG5vZGUgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHZhciBpbWcgPSBub2RlLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaW1nLnNyYyA9IG5vZGUudG9EYXRhVVJMKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpbWc7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKCdVbmFibGUgdG8gY2xvbmUgY2FudmFzIGNvbnRlbnRzLCBjYW52YXMgaXMgdGFpbnRlZCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIHRlbXBJZnJhbWUgPSBub2RlLmNsb25lTm9kZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgdmFyIGlmcmFtZUtleSA9IGdlbmVyYXRlSWZyYW1lS2V5KCk7XG4gICAgICAgICAgICAgICAgdGVtcElmcmFtZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaHRtbDJjYW52YXMtaW50ZXJuYWwtaWZyYW1lLWtleScsIGlmcmFtZUtleSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgX3BhcnNlQm91bmRzID0gKDAsIF9Cb3VuZHMucGFyc2VCb3VuZHMpKG5vZGUsIDAsIDApLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IF9wYXJzZUJvdW5kcy53aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gX3BhcnNlQm91bmRzLmhlaWdodDtcblxuICAgICAgICAgICAgICAgIHRoaXMucmVzb3VyY2VMb2FkZXIuY2FjaGVbaWZyYW1lS2V5XSA9IGdldElmcmFtZURvY3VtZW50RWxlbWVudChub2RlLCB0aGlzLm9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKGRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMzLnJlbmRlcmVyKGRvY3VtZW50RWxlbWVudCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmM6IF90aGlzMy5vcHRpb25zLmFzeW5jLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dUYWludDogX3RoaXMzLm9wdGlvbnMuYWxsb3dUYWludCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FudmFzOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VUaW1lb3V0OiBfdGhpczMub3B0aW9ucy5pbWFnZVRpbWVvdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnaW5nOiBfdGhpczMub3B0aW9ucy5sb2dnaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJveHk6IF90aGlzMy5vcHRpb25zLnByb3h5LFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQ29udGFpbmVyOiBfdGhpczMub3B0aW9ucy5yZW1vdmVDb250YWluZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogX3RoaXMzLm9wdGlvbnMuc2NhbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JlaWduT2JqZWN0UmVuZGVyaW5nOiBfdGhpczMub3B0aW9ucy5mb3JlaWduT2JqZWN0UmVuZGVyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlQ09SUzogX3RoaXMzLm9wdGlvbnMudXNlQ09SUyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogbmV3IF9DYW52YXNSZW5kZXJlcjIuZGVmYXVsdCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd1dpZHRoOiBkb2N1bWVudEVsZW1lbnQub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5pbm5lcldpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93SGVpZ2h0OiBkb2N1bWVudEVsZW1lbnQub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5pbm5lckhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFg6IGRvY3VtZW50RWxlbWVudC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LnBhZ2VYT2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsWTogZG9jdW1lbnRFbGVtZW50Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcucGFnZVlPZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgfSwgX3RoaXMzLmxvZ2dlci5jaGlsZChpZnJhbWVLZXkpKTtcbiAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChjYW52YXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZnJhbWVDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmcmFtZUNhbnZhcy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoY2FudmFzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZnJhbWVDYW52YXMub25lcnJvciA9IHJlamVjdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmcmFtZUNhbnZhcy5zcmMgPSBjYW52YXMudG9EYXRhVVJMKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGVtcElmcmFtZS5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcElmcmFtZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZCgoMCwgX1V0aWwuY29weUNTU1N0eWxlcykobm9kZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUobm9kZSksIGlmcmFtZUNhbnZhcyksIHRlbXBJZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGVtcElmcmFtZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MU3R5bGVFbGVtZW50ICYmIG5vZGUuc2hlZXQgJiYgbm9kZS5zaGVldC5jc3NSdWxlcykge1xuICAgICAgICAgICAgICAgIHZhciBjc3MgPSBbXS5zbGljZS5jYWxsKG5vZGUuc2hlZXQuY3NzUnVsZXMsIDApLnJlZHVjZShmdW5jdGlvbiAoY3NzLCBydWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocnVsZSAmJiBydWxlLmNzc1RleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3NzICsgcnVsZS5jc3NUZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNzcztcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczMubG9nZ2VyLmxvZygnVW5hYmxlIHRvIGFjY2VzcyBjc3NUZXh0IHByb3BlcnR5JywgcnVsZS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjc3M7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCAnJyk7XG4gICAgICAgICAgICAgICAgdmFyIHN0eWxlID0gbm9kZS5jbG9uZU5vZGUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gY3NzO1xuICAgICAgICAgICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG5vZGUuY2xvbmVOb2RlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY2xvbmVOb2RlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNsb25lTm9kZShub2RlKSB7XG4gICAgICAgICAgICB2YXIgY2xvbmUgPSBub2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSA/IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG5vZGUubm9kZVZhbHVlKSA6IHRoaXMuY3JlYXRlRWxlbWVudENsb25lKG5vZGUpO1xuXG4gICAgICAgICAgICB2YXIgd2luZG93ID0gbm9kZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuICAgICAgICAgICAgdmFyIHN0eWxlID0gbm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCA/IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpIDogbnVsbDtcbiAgICAgICAgICAgIHZhciBzdHlsZUJlZm9yZSA9IG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQgPyB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCAnOmJlZm9yZScpIDogbnVsbDtcbiAgICAgICAgICAgIHZhciBzdHlsZUFmdGVyID0gbm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCA/IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUsICc6YWZ0ZXInKSA6IG51bGw7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnJlZmVyZW5jZUVsZW1lbnQgPT09IG5vZGUgJiYgY2xvbmUgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb25lZFJlZmVyZW5jZUVsZW1lbnQgPSBjbG9uZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNsb25lIGluc3RhbmNlb2Ygd2luZG93LkhUTUxCb2R5RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBzZXVkb0hpZGVTdHlsZXMoY2xvbmUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgY291bnRlcnMgPSAoMCwgX1BzZXVkb05vZGVDb250ZW50LnBhcnNlQ291bnRlclJlc2V0KShzdHlsZSwgdGhpcy5wc2V1ZG9Db250ZW50RGF0YSk7XG4gICAgICAgICAgICB2YXIgY29udGVudEJlZm9yZSA9ICgwLCBfUHNldWRvTm9kZUNvbnRlbnQucmVzb2x2ZVBzZXVkb0NvbnRlbnQpKG5vZGUsIHN0eWxlQmVmb3JlLCB0aGlzLnBzZXVkb0NvbnRlbnREYXRhKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgY2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7IGNoaWxkOyBjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSB8fCBjaGlsZC5ub2RlTmFtZSAhPT0gJ1NDUklQVCcgJiZcbiAgICAgICAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICAgICAgICAgICAgIWNoaWxkLmhhc0F0dHJpYnV0ZShJR05PUkVfQVRUUklCVVRFKSAmJiAodHlwZW9mIHRoaXMub3B0aW9ucy5pZ25vcmVFbGVtZW50cyAhPT0gJ2Z1bmN0aW9uJyB8fFxuICAgICAgICAgICAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgICAgICAgICAgICAhdGhpcy5vcHRpb25zLmlnbm9yZUVsZW1lbnRzKGNoaWxkKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNvcHlTdHlsZXMgfHwgY2hpbGQubm9kZU5hbWUgIT09ICdTVFlMRScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb25lLmFwcGVuZENoaWxkKHRoaXMuY2xvbmVOb2RlKGNoaWxkKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBjb250ZW50QWZ0ZXIgPSAoMCwgX1BzZXVkb05vZGVDb250ZW50LnJlc29sdmVQc2V1ZG9Db250ZW50KShub2RlLCBzdHlsZUFmdGVyLCB0aGlzLnBzZXVkb0NvbnRlbnREYXRhKTtcbiAgICAgICAgICAgICgwLCBfUHNldWRvTm9kZUNvbnRlbnQucG9wQ291bnRlcnMpKGNvdW50ZXJzLCB0aGlzLnBzZXVkb0NvbnRlbnREYXRhKTtcblxuICAgICAgICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQgJiYgY2xvbmUgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3R5bGVCZWZvcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmxpbmVBbGxJbWFnZXMoaW5saW5lUHNldWRvRWxlbWVudChub2RlLCBjbG9uZSwgc3R5bGVCZWZvcmUsIGNvbnRlbnRCZWZvcmUsIFBTRVVET19CRUZPUkUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0eWxlQWZ0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmxpbmVBbGxJbWFnZXMoaW5saW5lUHNldWRvRWxlbWVudChub2RlLCBjbG9uZSwgc3R5bGVBZnRlciwgY29udGVudEFmdGVyLCBQU0VVRE9fQUZURVIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0eWxlICYmIHRoaXMuY29weVN0eWxlcyAmJiAhKG5vZGUgaW5zdGFuY2VvZiBIVE1MSUZyYW1lRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgKDAsIF9VdGlsLmNvcHlDU1NTdHlsZXMpKHN0eWxlLCBjbG9uZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaW5saW5lQWxsSW1hZ2VzKGNsb25lKTtcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5zY3JvbGxUb3AgIT09IDAgfHwgbm9kZS5zY3JvbGxMZWZ0ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsZWRFbGVtZW50cy5wdXNoKFtjbG9uZSwgbm9kZS5zY3JvbGxMZWZ0LCBub2RlLnNjcm9sbFRvcF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG5vZGUubm9kZU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnQ0FOVkFTJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5jb3B5U3R5bGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvbmVDYW52YXNDb250ZW50cyhub2RlLCBjbG9uZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnVEVYVEFSRUEnOlxuICAgICAgICAgICAgICAgICAgICBjYXNlICdTRUxFQ1QnOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvbmUudmFsdWUgPSBub2RlLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNsb25lO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIERvY3VtZW50Q2xvbmVyO1xufSgpO1xuXG52YXIgZ2V0U2hlZXRGb250cyA9IGZ1bmN0aW9uIGdldFNoZWV0Rm9udHMoc2hlZXQsIGRvY3VtZW50KSB7XG4gICAgLy8gJEZsb3dGaXhNZVxuICAgIHJldHVybiAoc2hlZXQuY3NzUnVsZXMgPyBBcnJheS5mcm9tKHNoZWV0LmNzc1J1bGVzKSA6IFtdKS5maWx0ZXIoZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICAgICAgcmV0dXJuIHJ1bGUudHlwZSA9PT0gQ1NTUnVsZS5GT05UX0ZBQ0VfUlVMRTtcbiAgICB9KS5tYXAoZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICAgICAgdmFyIHNyYyA9ICgwLCBfYmFja2dyb3VuZC5wYXJzZUJhY2tncm91bmRJbWFnZSkocnVsZS5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdzcmMnKSk7XG4gICAgICAgIHZhciBmb3JtYXRzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3JjLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoc3JjW2ldLm1ldGhvZCA9PT0gJ3VybCcgJiYgc3JjW2kgKyAxXSAmJiBzcmNbaSArIDFdLm1ldGhvZCA9PT0gJ2Zvcm1hdCcpIHtcbiAgICAgICAgICAgICAgICB2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICAgICAgICBhLmhyZWYgPSBzcmNbaV0uYXJnc1swXTtcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGEpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBmb250ID0ge1xuICAgICAgICAgICAgICAgICAgICBzcmM6IGEuaHJlZixcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBzcmNbaSArIDFdLmFyZ3NbMF1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGZvcm1hdHMucHVzaChmb250KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAvLyBUT0RPIHNlbGVjdCBjb3JyZWN0IGZvcm1hdCBmb3IgYnJvd3NlciksXG5cbiAgICAgICAgICAgIGZvcm1hdHM6IGZvcm1hdHMuZmlsdGVyKGZ1bmN0aW9uIChmb250KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgvXndvZmYvaS50ZXN0KGZvbnQuZm9ybWF0KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGZvbnRGYWNlOiBydWxlLnN0eWxlXG4gICAgICAgIH07XG4gICAgfSkuZmlsdGVyKGZ1bmN0aW9uIChmb250KSB7XG4gICAgICAgIHJldHVybiBmb250LmZvcm1hdHMubGVuZ3RoO1xuICAgIH0pO1xufTtcblxudmFyIGNyZWF0ZVN0eWxlU2hlZXRGb250c0Zyb21UZXh0ID0gZnVuY3Rpb24gY3JlYXRlU3R5bGVTaGVldEZvbnRzRnJvbVRleHQodGV4dCwgYmFzZUhyZWYpIHtcbiAgICB2YXIgZG9jID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KCcnKTtcbiAgICB2YXIgYmFzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Jhc2UnKTtcbiAgICAvLyAkRmxvd0ZpeE1lXG4gICAgYmFzZS5ocmVmID0gYmFzZUhyZWY7XG4gICAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuICAgIHN0eWxlLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICBpZiAoZG9jLmhlYWQpIHtcbiAgICAgICAgZG9jLmhlYWQuYXBwZW5kQ2hpbGQoYmFzZSk7XG4gICAgfVxuICAgIGlmIChkb2MuYm9keSkge1xuICAgICAgICBkb2MuYm9keS5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlLnNoZWV0ID8gZ2V0U2hlZXRGb250cyhzdHlsZS5zaGVldCwgZG9jKSA6IFtdO1xufTtcblxudmFyIHJlc3RvcmVPd25lclNjcm9sbCA9IGZ1bmN0aW9uIHJlc3RvcmVPd25lclNjcm9sbChvd25lckRvY3VtZW50LCB4LCB5KSB7XG4gICAgaWYgKG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgJiYgKHggIT09IG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcucGFnZVhPZmZzZXQgfHwgeSAhPT0gb3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5wYWdlWU9mZnNldCkpIHtcbiAgICAgICAgb3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5zY3JvbGxUbyh4LCB5KTtcbiAgICB9XG59O1xuXG52YXIgY2xvbmVDYW52YXNDb250ZW50cyA9IGZ1bmN0aW9uIGNsb25lQ2FudmFzQ29udGVudHMoY2FudmFzLCBjbG9uZWRDYW52YXMpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAoY2xvbmVkQ2FudmFzKSB7XG4gICAgICAgICAgICBjbG9uZWRDYW52YXMud2lkdGggPSBjYW52YXMud2lkdGg7XG4gICAgICAgICAgICBjbG9uZWRDYW52YXMuaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcbiAgICAgICAgICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgIHZhciBjbG9uZWRDdHggPSBjbG9uZWRDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgIGlmIChjdHgpIHtcbiAgICAgICAgICAgICAgICBjbG9uZWRDdHgucHV0SW1hZ2VEYXRhKGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KSwgMCwgMCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNsb25lZEN0eC5kcmF3SW1hZ2UoY2FudmFzLCAwLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHt9XG59O1xuXG52YXIgaW5saW5lUHNldWRvRWxlbWVudCA9IGZ1bmN0aW9uIGlubGluZVBzZXVkb0VsZW1lbnQobm9kZSwgY2xvbmUsIHN0eWxlLCBjb250ZW50SXRlbXMsIHBzZXVkb0VsdCkge1xuICAgIGlmICghc3R5bGUgfHwgIXN0eWxlLmNvbnRlbnQgfHwgc3R5bGUuY29udGVudCA9PT0gJ25vbmUnIHx8IHN0eWxlLmNvbnRlbnQgPT09ICctbW96LWFsdC1jb250ZW50JyB8fCBzdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBhbm9ueW1vdXNSZXBsYWNlZEVsZW1lbnQgPSBjbG9uZS5vd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2h0bWwyY2FudmFzcHNldWRvZWxlbWVudCcpO1xuICAgICgwLCBfVXRpbC5jb3B5Q1NTU3R5bGVzKShzdHlsZSwgYW5vbnltb3VzUmVwbGFjZWRFbGVtZW50KTtcblxuICAgIGlmIChjb250ZW50SXRlbXMpIHtcbiAgICAgICAgdmFyIGxlbiA9IGNvbnRlbnRJdGVtcy5sZW5ndGg7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gY29udGVudEl0ZW1zW2ldO1xuICAgICAgICAgICAgc3dpdGNoIChpdGVtLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIF9Qc2V1ZG9Ob2RlQ29udGVudC5QU0VVRE9fQ09OVEVOVF9JVEVNX1RZUEUuSU1BR0U6XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbWcgPSBjbG9uZS5vd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3JjID0gKDAsIF9iYWNrZ3JvdW5kLnBhcnNlQmFja2dyb3VuZEltYWdlKSgndXJsKCcgKyBpdGVtLnZhbHVlICsgJyknKVswXS5hcmdzWzBdO1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgICAgICAgICAgICAgYW5vbnltb3VzUmVwbGFjZWRFbGVtZW50LmFwcGVuZENoaWxkKGltZyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgX1BzZXVkb05vZGVDb250ZW50LlBTRVVET19DT05URU5UX0lURU1fVFlQRS5URVhUOlxuICAgICAgICAgICAgICAgICAgICBhbm9ueW1vdXNSZXBsYWNlZEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2xvbmUub3duZXJEb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShpdGVtLnZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYW5vbnltb3VzUmVwbGFjZWRFbGVtZW50LmNsYXNzTmFtZSA9IFBTRVVET19ISURFX0VMRU1FTlRfQ0xBU1NfQkVGT1JFICsgJyAnICsgUFNFVURPX0hJREVfRUxFTUVOVF9DTEFTU19BRlRFUjtcbiAgICBjbG9uZS5jbGFzc05hbWUgKz0gcHNldWRvRWx0ID09PSBQU0VVRE9fQkVGT1JFID8gJyAnICsgUFNFVURPX0hJREVfRUxFTUVOVF9DTEFTU19CRUZPUkUgOiAnICcgKyBQU0VVRE9fSElERV9FTEVNRU5UX0NMQVNTX0FGVEVSO1xuICAgIGlmIChwc2V1ZG9FbHQgPT09IFBTRVVET19CRUZPUkUpIHtcbiAgICAgICAgY2xvbmUuaW5zZXJ0QmVmb3JlKGFub255bW91c1JlcGxhY2VkRWxlbWVudCwgY2xvbmUuZmlyc3RDaGlsZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2xvbmUuYXBwZW5kQ2hpbGQoYW5vbnltb3VzUmVwbGFjZWRFbGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYW5vbnltb3VzUmVwbGFjZWRFbGVtZW50O1xufTtcblxudmFyIFVSTF9SRUdFWFAgPSAvXnVybFxcKCguKylcXCkkL2k7XG52YXIgUFNFVURPX0JFRk9SRSA9ICc6YmVmb3JlJztcbnZhciBQU0VVRE9fQUZURVIgPSAnOmFmdGVyJztcbnZhciBQU0VVRE9fSElERV9FTEVNRU5UX0NMQVNTX0JFRk9SRSA9ICdfX19odG1sMmNhbnZhc19fX3BzZXVkb2VsZW1lbnRfYmVmb3JlJztcbnZhciBQU0VVRE9fSElERV9FTEVNRU5UX0NMQVNTX0FGVEVSID0gJ19fX2h0bWwyY2FudmFzX19fcHNldWRvZWxlbWVudF9hZnRlcic7XG5cbnZhciBQU0VVRE9fSElERV9FTEVNRU5UX1NUWUxFID0gJ3tcXG4gICAgY29udGVudDogXCJcIiAhaW1wb3J0YW50O1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufSc7XG5cbnZhciBjcmVhdGVQc2V1ZG9IaWRlU3R5bGVzID0gZnVuY3Rpb24gY3JlYXRlUHNldWRvSGlkZVN0eWxlcyhib2R5KSB7XG4gICAgY3JlYXRlU3R5bGVzKGJvZHksICcuJyArIFBTRVVET19ISURFX0VMRU1FTlRfQ0xBU1NfQkVGT1JFICsgUFNFVURPX0JFRk9SRSArIFBTRVVET19ISURFX0VMRU1FTlRfU1RZTEUgKyAnXFxuICAgICAgICAgLicgKyBQU0VVRE9fSElERV9FTEVNRU5UX0NMQVNTX0FGVEVSICsgUFNFVURPX0FGVEVSICsgUFNFVURPX0hJREVfRUxFTUVOVF9TVFlMRSk7XG59O1xuXG52YXIgY3JlYXRlU3R5bGVzID0gZnVuY3Rpb24gY3JlYXRlU3R5bGVzKGJvZHksIHN0eWxlcykge1xuICAgIHZhciBzdHlsZSA9IGJvZHkub3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHN0eWxlLmlubmVySFRNTCA9IHN0eWxlcztcbiAgICBib2R5LmFwcGVuZENoaWxkKHN0eWxlKTtcbn07XG5cbnZhciBpbml0Tm9kZSA9IGZ1bmN0aW9uIGluaXROb2RlKF9yZWYpIHtcbiAgICB2YXIgX3JlZjIgPSBfc2xpY2VkVG9BcnJheShfcmVmLCAzKSxcbiAgICAgICAgZWxlbWVudCA9IF9yZWYyWzBdLFxuICAgICAgICB4ID0gX3JlZjJbMV0sXG4gICAgICAgIHkgPSBfcmVmMlsyXTtcblxuICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCA9IHg7XG4gICAgZWxlbWVudC5zY3JvbGxUb3AgPSB5O1xufTtcblxudmFyIGdlbmVyYXRlSWZyYW1lS2V5ID0gZnVuY3Rpb24gZ2VuZXJhdGVJZnJhbWVLZXkoKSB7XG4gICAgcmV0dXJuIE1hdGguY2VpbChEYXRlLm5vdygpICsgTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwKS50b1N0cmluZygxNik7XG59O1xuXG52YXIgREFUQV9VUklfUkVHRVhQID0gL15kYXRhOnRleHRcXC8oLispOyhiYXNlNjQpPywoLiopJC9pO1xuXG52YXIgZ2V0SWZyYW1lRG9jdW1lbnRFbGVtZW50ID0gZnVuY3Rpb24gZ2V0SWZyYW1lRG9jdW1lbnRFbGVtZW50KG5vZGUsIG9wdGlvbnMpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5vZGUuY29udGVudFdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMucHJveHkgPyAoMCwgX1Byb3h5LlByb3h5KShub2RlLnNyYywgb3B0aW9ucykudGhlbihmdW5jdGlvbiAoaHRtbCkge1xuICAgICAgICAgICAgdmFyIG1hdGNoID0gaHRtbC5tYXRjaChEQVRBX1VSSV9SRUdFWFApO1xuICAgICAgICAgICAgaWYgKCFtYXRjaCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hbMl0gPT09ICdiYXNlNjQnID8gd2luZG93LmF0b2IoZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzNdKSkgOiBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbM10pO1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChodG1sKSB7XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlSWZyYW1lQ29udGFpbmVyKG5vZGUub3duZXJEb2N1bWVudCwgKDAsIF9Cb3VuZHMucGFyc2VCb3VuZHMpKG5vZGUsIDAsIDApKS50aGVuKGZ1bmN0aW9uIChjbG9uZUlmcmFtZUNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgIHZhciBjbG9uZVdpbmRvdyA9IGNsb25lSWZyYW1lQ29udGFpbmVyLmNvbnRlbnRXaW5kb3c7XG4gICAgICAgICAgICAgICAgdmFyIGRvY3VtZW50Q2xvbmUgPSBjbG9uZVdpbmRvdy5kb2N1bWVudDtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50Q2xvbmUub3BlbigpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50Q2xvbmUud3JpdGUoaHRtbCk7XG4gICAgICAgICAgICAgICAgdmFyIGlmcmFtZUxvYWQgPSBpZnJhbWVMb2FkZXIoY2xvbmVJZnJhbWVDb250YWluZXIpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnRDbG9uZS5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudENsb25lLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlmcmFtZUxvYWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkgOiBQcm9taXNlLnJlamVjdCgpO1xuICAgIH1cbn07XG5cbnZhciBjcmVhdGVJZnJhbWVDb250YWluZXIgPSBmdW5jdGlvbiBjcmVhdGVJZnJhbWVDb250YWluZXIob3duZXJEb2N1bWVudCwgYm91bmRzKSB7XG4gICAgdmFyIGNsb25lSWZyYW1lQ29udGFpbmVyID0gb3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcblxuICAgIGNsb25lSWZyYW1lQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdodG1sMmNhbnZhcy1jb250YWluZXInO1xuICAgIGNsb25lSWZyYW1lQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICBjbG9uZUlmcmFtZUNvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgY2xvbmVJZnJhbWVDb250YWluZXIuc3R5bGUubGVmdCA9ICctMTAwMDBweCc7XG4gICAgY2xvbmVJZnJhbWVDb250YWluZXIuc3R5bGUudG9wID0gJzBweCc7XG4gICAgY2xvbmVJZnJhbWVDb250YWluZXIuc3R5bGUuYm9yZGVyID0gJzAnO1xuICAgIGNsb25lSWZyYW1lQ29udGFpbmVyLndpZHRoID0gYm91bmRzLndpZHRoLnRvU3RyaW5nKCk7XG4gICAgY2xvbmVJZnJhbWVDb250YWluZXIuaGVpZ2h0ID0gYm91bmRzLmhlaWdodC50b1N0cmluZygpO1xuICAgIGNsb25lSWZyYW1lQ29udGFpbmVyLnNjcm9sbGluZyA9ICdubyc7IC8vIGlvcyB3b24ndCBzY3JvbGwgd2l0aG91dCBpdFxuICAgIGNsb25lSWZyYW1lQ29udGFpbmVyLnNldEF0dHJpYnV0ZShJR05PUkVfQVRUUklCVVRFLCAndHJ1ZScpO1xuICAgIGlmICghb3duZXJEb2N1bWVudC5ib2R5KSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCggdHJ1ZSA/ICdCb2R5IGVsZW1lbnQgbm90IGZvdW5kIGluIERvY3VtZW50IHRoYXQgaXMgZ2V0dGluZyByZW5kZXJlZCcgOiAnJyk7XG4gICAgfVxuXG4gICAgb3duZXJEb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNsb25lSWZyYW1lQ29udGFpbmVyKTtcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2xvbmVJZnJhbWVDb250YWluZXIpO1xufTtcblxudmFyIGlmcmFtZUxvYWRlciA9IGZ1bmN0aW9uIGlmcmFtZUxvYWRlcihjbG9uZUlmcmFtZUNvbnRhaW5lcikge1xuICAgIHZhciBjbG9uZVdpbmRvdyA9IGNsb25lSWZyYW1lQ29udGFpbmVyLmNvbnRlbnRXaW5kb3c7XG4gICAgdmFyIGRvY3VtZW50Q2xvbmUgPSBjbG9uZVdpbmRvdy5kb2N1bWVudDtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGNsb25lV2luZG93Lm9ubG9hZCA9IGNsb25lSWZyYW1lQ29udGFpbmVyLm9ubG9hZCA9IGRvY3VtZW50Q2xvbmUub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudENsb25lLmJvZHkuY2hpbGROb2Rlcy5sZW5ndGggPiAwICYmIGRvY3VtZW50Q2xvbmUucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShjbG9uZUlmcmFtZUNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgNTApO1xuICAgICAgICB9O1xuICAgIH0pO1xufTtcblxudmFyIGNsb25lV2luZG93ID0gZXhwb3J0cy5jbG9uZVdpbmRvdyA9IGZ1bmN0aW9uIGNsb25lV2luZG93KG93bmVyRG9jdW1lbnQsIGJvdW5kcywgcmVmZXJlbmNlRWxlbWVudCwgb3B0aW9ucywgbG9nZ2VyLCByZW5kZXJlcikge1xuICAgIHZhciBjbG9uZXIgPSBuZXcgRG9jdW1lbnRDbG9uZXIocmVmZXJlbmNlRWxlbWVudCwgb3B0aW9ucywgbG9nZ2VyLCBmYWxzZSwgcmVuZGVyZXIpO1xuICAgIHZhciBzY3JvbGxYID0gb3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5wYWdlWE9mZnNldDtcbiAgICB2YXIgc2Nyb2xsWSA9IG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcucGFnZVlPZmZzZXQ7XG5cbiAgICByZXR1cm4gY3JlYXRlSWZyYW1lQ29udGFpbmVyKG93bmVyRG9jdW1lbnQsIGJvdW5kcykudGhlbihmdW5jdGlvbiAoY2xvbmVJZnJhbWVDb250YWluZXIpIHtcbiAgICAgICAgdmFyIGNsb25lV2luZG93ID0gY2xvbmVJZnJhbWVDb250YWluZXIuY29udGVudFdpbmRvdztcbiAgICAgICAgdmFyIGRvY3VtZW50Q2xvbmUgPSBjbG9uZVdpbmRvdy5kb2N1bWVudDtcblxuICAgICAgICAvKiBDaHJvbWUgZG9lc24ndCBkZXRlY3QgcmVsYXRpdmUgYmFja2dyb3VuZC1pbWFnZXMgYXNzaWduZWQgaW4gaW5saW5lIDxzdHlsZT4gc2hlZXRzIHdoZW4gZmV0Y2hlZCB0aHJvdWdoIGdldENvbXB1dGVkU3R5bGVcbiAgICAgICAgICAgICBpZiB3aW5kb3cgdXJsIGlzIGFib3V0OmJsYW5rLCB3ZSBjYW4gYXNzaWduIHRoZSB1cmwgdG8gY3VycmVudCBieSB3cml0aW5nIG9udG8gdGhlIGRvY3VtZW50XG4gICAgICAgICAgICAgKi9cblxuICAgICAgICB2YXIgaWZyYW1lTG9hZCA9IGlmcmFtZUxvYWRlcihjbG9uZUlmcmFtZUNvbnRhaW5lcikudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjbG9uZXIuc2Nyb2xsZWRFbGVtZW50cy5mb3JFYWNoKGluaXROb2RlKTtcbiAgICAgICAgICAgIGNsb25lV2luZG93LnNjcm9sbFRvKGJvdW5kcy5sZWZ0LCBib3VuZHMudG9wKTtcbiAgICAgICAgICAgIGlmICgvKGlQYWR8aVBob25lfGlQb2QpL2cudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAoY2xvbmVXaW5kb3cuc2Nyb2xsWSAhPT0gYm91bmRzLnRvcCB8fCBjbG9uZVdpbmRvdy5zY3JvbGxYICE9PSBib3VuZHMubGVmdCkpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudENsb25lLmRvY3VtZW50RWxlbWVudC5zdHlsZS50b3AgPSAtYm91bmRzLnRvcCArICdweCc7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnRDbG9uZS5kb2N1bWVudEVsZW1lbnQuc3R5bGUubGVmdCA9IC1ib3VuZHMubGVmdCArICdweCc7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnRDbG9uZS5kb2N1bWVudEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gUHJvbWlzZS5yZXNvbHZlKFtjbG9uZUlmcmFtZUNvbnRhaW5lciwgY2xvbmVyLmNsb25lZFJlZmVyZW5jZUVsZW1lbnQsIGNsb25lci5yZXNvdXJjZUxvYWRlcl0pO1xuXG4gICAgICAgICAgICB2YXIgb25jbG9uZSA9IG9wdGlvbnMub25jbG9uZTtcblxuICAgICAgICAgICAgcmV0dXJuIGNsb25lci5jbG9uZWRSZWZlcmVuY2VFbGVtZW50IGluc3RhbmNlb2YgY2xvbmVXaW5kb3cuSFRNTEVsZW1lbnQgfHwgY2xvbmVyLmNsb25lZFJlZmVyZW5jZUVsZW1lbnQgaW5zdGFuY2VvZiBvd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LkhUTUxFbGVtZW50IHx8IGNsb25lci5jbG9uZWRSZWZlcmVuY2VFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPyB0eXBlb2Ygb25jbG9uZSA9PT0gJ2Z1bmN0aW9uJyA/IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvbmNsb25lKGRvY3VtZW50Q2xvbmUpO1xuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH0pIDogcmVzdWx0IDogUHJvbWlzZS5yZWplY3QoIHRydWUgPyAnRXJyb3IgZmluZGluZyB0aGUgJyArIHJlZmVyZW5jZUVsZW1lbnQubm9kZU5hbWUgKyAnIGluIHRoZSBjbG9uZWQgZG9jdW1lbnQnIDogJycpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudENsb25lLm9wZW4oKTtcbiAgICAgICAgZG9jdW1lbnRDbG9uZS53cml0ZShzZXJpYWxpemVEb2N0eXBlKGRvY3VtZW50LmRvY3R5cGUpICsgJzxodG1sPjwvaHRtbD4nKTtcbiAgICAgICAgLy8gQ2hyb21lIHNjcm9sbHMgdGhlIHBhcmVudCBkb2N1bWVudCBmb3Igc29tZSByZWFzb24gYWZ0ZXIgdGhlIHdyaXRlIHRvIHRoZSBjbG9uZWQgd2luZG93Pz8/XG4gICAgICAgIHJlc3RvcmVPd25lclNjcm9sbChyZWZlcmVuY2VFbGVtZW50Lm93bmVyRG9jdW1lbnQsIHNjcm9sbFgsIHNjcm9sbFkpO1xuICAgICAgICBkb2N1bWVudENsb25lLnJlcGxhY2VDaGlsZChkb2N1bWVudENsb25lLmFkb3B0Tm9kZShjbG9uZXIuZG9jdW1lbnRFbGVtZW50KSwgZG9jdW1lbnRDbG9uZS5kb2N1bWVudEVsZW1lbnQpO1xuICAgICAgICBkb2N1bWVudENsb25lLmNsb3NlKCk7XG5cbiAgICAgICAgcmV0dXJuIGlmcmFtZUxvYWQ7XG4gICAgfSk7XG59O1xuXG52YXIgc2VyaWFsaXplRG9jdHlwZSA9IGZ1bmN0aW9uIHNlcmlhbGl6ZURvY3R5cGUoZG9jdHlwZSkge1xuICAgIHZhciBzdHIgPSAnJztcbiAgICBpZiAoZG9jdHlwZSkge1xuICAgICAgICBzdHIgKz0gJzwhRE9DVFlQRSAnO1xuICAgICAgICBpZiAoZG9jdHlwZS5uYW1lKSB7XG4gICAgICAgICAgICBzdHIgKz0gZG9jdHlwZS5uYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRvY3R5cGUuaW50ZXJuYWxTdWJzZXQpIHtcbiAgICAgICAgICAgIHN0ciArPSBkb2N0eXBlLmludGVybmFsU3Vic2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRvY3R5cGUucHVibGljSWQpIHtcbiAgICAgICAgICAgIHN0ciArPSAnXCInICsgZG9jdHlwZS5wdWJsaWNJZCArICdcIic7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZG9jdHlwZS5zeXN0ZW1JZCkge1xuICAgICAgICAgICAgc3RyICs9ICdcIicgKyBkb2N0eXBlLnN5c3RlbUlkICsgJ1wiJztcbiAgICAgICAgfVxuXG4gICAgICAgIHN0ciArPSAnPic7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cjtcbn07XG5cbi8qKiovIH0pLFxuLyogNTUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5SZXNvdXJjZVN0b3JlID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX0ZlYXR1cmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKTtcblxudmFyIF9GZWF0dXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ZlYXR1cmUpO1xuXG52YXIgX1Byb3h5ID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBSZXNvdXJjZUxvYWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZXNvdXJjZUxvYWRlcihvcHRpb25zLCBsb2dnZXIsIHdpbmRvdykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVzb3VyY2VMb2FkZXIpO1xuXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRoaXMuX3dpbmRvdyA9IHdpbmRvdztcbiAgICAgICAgdGhpcy5vcmlnaW4gPSB0aGlzLmdldE9yaWdpbih3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIHRoaXMuY2FjaGUgPSB7fTtcbiAgICAgICAgdGhpcy5sb2dnZXIgPSBsb2dnZXI7XG4gICAgICAgIHRoaXMuX2luZGV4ID0gMDtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoUmVzb3VyY2VMb2FkZXIsIFt7XG4gICAgICAgIGtleTogJ2xvYWRJbWFnZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkSW1hZ2Uoc3JjKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5oYXNSZXNvdXJjZUluQ2FjaGUoc3JjKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzcmM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNCbG9iSW1hZ2Uoc3JjKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVbc3JjXSA9IF9sb2FkSW1hZ2Uoc3JjLCB0aGlzLm9wdGlvbnMuaW1hZ2VUaW1lb3V0IHx8IDApO1xuICAgICAgICAgICAgICAgIHJldHVybiBzcmM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghaXNTVkcoc3JjKSB8fCBfRmVhdHVyZTIuZGVmYXVsdC5TVVBQT1JUX1NWR19EUkFXSU5HKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hbGxvd1RhaW50ID09PSB0cnVlIHx8IGlzSW5saW5lSW1hZ2Uoc3JjKSB8fCB0aGlzLmlzU2FtZU9yaWdpbihzcmMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZEltYWdlKHNyYywgc3JjLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5pc1NhbWVPcmlnaW4oc3JjKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5wcm94eSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVbc3JjXSA9ICgwLCBfUHJveHkuUHJveHkpKHNyYywgdGhpcy5vcHRpb25zKS50aGVuKGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2xvYWRJbWFnZShzcmMsIF90aGlzLm9wdGlvbnMuaW1hZ2VUaW1lb3V0IHx8IDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3JjO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy51c2VDT1JTID09PSB0cnVlICYmIF9GZWF0dXJlMi5kZWZhdWx0LlNVUFBPUlRfQ09SU19JTUFHRVMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZEltYWdlKHNyYywgc3JjLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaW5saW5lSW1hZ2UnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaW5saW5lSW1hZ2Uoc3JjKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgaWYgKGlzSW5saW5lSW1hZ2Uoc3JjKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfbG9hZEltYWdlKHNyYywgdGhpcy5vcHRpb25zLmltYWdlVGltZW91dCB8fCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmhhc1Jlc291cmNlSW5DYWNoZShzcmMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVbc3JjXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5pc1NhbWVPcmlnaW4oc3JjKSAmJiB0eXBlb2YgdGhpcy5vcHRpb25zLnByb3h5ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNhY2hlW3NyY10gPSAoMCwgX1Byb3h5LlByb3h5KShzcmMsIHRoaXMub3B0aW9ucykudGhlbihmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfbG9hZEltYWdlKHNyYywgX3RoaXMyLm9wdGlvbnMuaW1hZ2VUaW1lb3V0IHx8IDApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy54aHJJbWFnZShzcmMpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICd4aHJJbWFnZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB4aHJJbWFnZShzcmMpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgICAgICB0aGlzLmNhY2hlW3NyY10gPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCgnRmFpbGVkIHRvIGZldGNoIGltYWdlICcgKyBzcmMuc3Vic3RyaW5nKDAsIDI1NikgKyAnIHdpdGggc3RhdHVzIGNvZGUgJyArIHhoci5zdGF0dXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gcmVhZGVyLnJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTCh4aHIucmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2Jsb2InO1xuICAgICAgICAgICAgICAgIGlmIChfdGhpczMub3B0aW9ucy5pbWFnZVRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRpbWVvdXQgPSBfdGhpczMub3B0aW9ucy5pbWFnZVRpbWVvdXQ7XG4gICAgICAgICAgICAgICAgICAgIHhoci50aW1lb3V0ID0gdGltZW91dDtcbiAgICAgICAgICAgICAgICAgICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoIHRydWUgPyAnVGltZWQgb3V0ICgnICsgdGltZW91dCArICdtcykgZmV0Y2hpbmcgJyArIHNyYy5zdWJzdHJpbmcoMCwgMjU2KSA6ICcnKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIHNyYywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgeGhyLnNlbmQoKTtcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHNyYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBfbG9hZEltYWdlKHNyYywgX3RoaXMzLm9wdGlvbnMuaW1hZ2VUaW1lb3V0IHx8IDApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhY2hlW3NyY107XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xvYWRDYW52YXMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbG9hZENhbnZhcyhub2RlKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gU3RyaW5nKHRoaXMuX2luZGV4KyspO1xuICAgICAgICAgICAgdGhpcy5jYWNoZVtrZXldID0gUHJvbWlzZS5yZXNvbHZlKG5vZGUpO1xuICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFzUmVzb3VyY2VJbkNhY2hlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhc1Jlc291cmNlSW5DYWNoZShrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgdGhpcy5jYWNoZVtrZXldICE9PSAndW5kZWZpbmVkJztcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnYWRkSW1hZ2UnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYWRkSW1hZ2Uoa2V5LCBzcmMsIHVzZUNPUlMpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICAgICAgICBpZiAodHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZygnQWRkZWQgaW1hZ2UgJyArIGtleS5zdWJzdHJpbmcoMCwgMjU2KSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBpbWFnZUxvYWRIYW5kbGVyID0gZnVuY3Rpb24gaW1hZ2VMb2FkSGFuZGxlcihzdXBwb3J0c0RhdGFJbWFnZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShpbWcpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAvL2lvcyBzYWZhcmkgMTAuMyB0YWludHMgY2FudmFzIHdpdGggZGF0YSB1cmxzIHVubGVzcyBjcm9zc09yaWdpbiBpcyBzZXQgdG8gYW5vbnltb3VzXG4gICAgICAgICAgICAgICAgICAgIGlmICghc3VwcG9ydHNEYXRhSW1hZ2VzIHx8IHVzZUNPUlMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZy5jcm9zc09yaWdpbiA9ICdhbm9ueW1vdXMnO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaW1nLm9uZXJyb3IgPSByZWplY3Q7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zcmMgPSBzcmM7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbWcuY29tcGxldGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElubGluZSBYTUwgaW1hZ2VzIG1heSBmYWlsIHRvIHBhcnNlLCB0aHJvd2luZyBhbiBFcnJvciBsYXRlciBvblxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShpbWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXM0Lm9wdGlvbnMuaW1hZ2VUaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGltZW91dCA9IF90aGlzNC5vcHRpb25zLmltYWdlVGltZW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoIHRydWUgPyAnVGltZWQgb3V0ICgnICsgdGltZW91dCArICdtcykgZmV0Y2hpbmcgJyArIHNyYy5zdWJzdHJpbmcoMCwgMjU2KSA6ICcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRpbWVvdXQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLmNhY2hlW2tleV0gPSBpc0lubGluZUJhc2U2NEltYWdlKHNyYykgJiYgIWlzU1ZHKHNyYykgPyAvLyAkRmxvd0ZpeE1lXG4gICAgICAgICAgICBfRmVhdHVyZTIuZGVmYXVsdC5TVVBQT1JUX0JBU0U2NF9EUkFXSU5HKHNyYykudGhlbihpbWFnZUxvYWRIYW5kbGVyKSA6IGltYWdlTG9hZEhhbmRsZXIodHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdpc1NhbWVPcmlnaW4nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaXNTYW1lT3JpZ2luKHVybCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0T3JpZ2luKHVybCkgPT09IHRoaXMub3JpZ2luO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRPcmlnaW4nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0T3JpZ2luKHVybCkge1xuICAgICAgICAgICAgdmFyIGxpbmsgPSB0aGlzLl9saW5rIHx8ICh0aGlzLl9saW5rID0gdGhpcy5fd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKSk7XG4gICAgICAgICAgICBsaW5rLmhyZWYgPSB1cmw7XG4gICAgICAgICAgICBsaW5rLmhyZWYgPSBsaW5rLmhyZWY7IC8vIElFOSwgTE9MISAtIGh0dHA6Ly9qc2ZpZGRsZS5uZXQvbmlrbGFzdmgvMmU0OGIvXG4gICAgICAgICAgICByZXR1cm4gbGluay5wcm90b2NvbCArIGxpbmsuaG9zdG5hbWUgKyBsaW5rLnBvcnQ7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlYWR5JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlYWR5KCkge1xuICAgICAgICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcy5jYWNoZSk7XG4gICAgICAgICAgICB2YXIgdmFsdWVzID0ga2V5cy5tYXAoZnVuY3Rpb24gKHN0cikge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczUuY2FjaGVbc3RyXS5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXM1LmxvZ2dlci5sb2coJ1VuYWJsZSB0byBsb2FkIGltYWdlJywgZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbCh2YWx1ZXMpLnRoZW4oZnVuY3Rpb24gKGltYWdlcykge1xuICAgICAgICAgICAgICAgIGlmICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzNS5sb2dnZXIubG9nKCdGaW5pc2hlZCBsb2FkaW5nICcgKyBpbWFnZXMubGVuZ3RoICsgJyBpbWFnZXMnLCBpbWFnZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFJlc291cmNlU3RvcmUoa2V5cywgaW1hZ2VzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFJlc291cmNlTG9hZGVyO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBSZXNvdXJjZUxvYWRlcjtcblxudmFyIFJlc291cmNlU3RvcmUgPSBleHBvcnRzLlJlc291cmNlU3RvcmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVzb3VyY2VTdG9yZShrZXlzLCByZXNvdXJjZXMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlc291cmNlU3RvcmUpO1xuXG4gICAgICAgIHRoaXMuX2tleXMgPSBrZXlzO1xuICAgICAgICB0aGlzLl9yZXNvdXJjZXMgPSByZXNvdXJjZXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFJlc291cmNlU3RvcmUsIFt7XG4gICAgICAgIGtleTogJ2dldCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLl9rZXlzLmluZGV4T2Yoa2V5KTtcbiAgICAgICAgICAgIHJldHVybiBpbmRleCA9PT0gLTEgPyBudWxsIDogdGhpcy5fcmVzb3VyY2VzW2luZGV4XTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBSZXNvdXJjZVN0b3JlO1xufSgpO1xuXG52YXIgSU5MSU5FX1NWRyA9IC9eZGF0YTppbWFnZVxcL3N2Z1xcK3htbC9pO1xudmFyIElOTElORV9CQVNFNjQgPSAvXmRhdGE6aW1hZ2VcXC8uKjtiYXNlNjQsL2k7XG52YXIgSU5MSU5FX0lNRyA9IC9eZGF0YTppbWFnZVxcLy4qL2k7XG5cbnZhciBpc0lubGluZUltYWdlID0gZnVuY3Rpb24gaXNJbmxpbmVJbWFnZShzcmMpIHtcbiAgICByZXR1cm4gSU5MSU5FX0lNRy50ZXN0KHNyYyk7XG59O1xudmFyIGlzSW5saW5lQmFzZTY0SW1hZ2UgPSBmdW5jdGlvbiBpc0lubGluZUJhc2U2NEltYWdlKHNyYykge1xuICAgIHJldHVybiBJTkxJTkVfQkFTRTY0LnRlc3Qoc3JjKTtcbn07XG52YXIgaXNCbG9iSW1hZ2UgPSBmdW5jdGlvbiBpc0Jsb2JJbWFnZShzcmMpIHtcbiAgICByZXR1cm4gc3JjLnN1YnN0cigwLCA0KSA9PT0gJ2Jsb2InO1xufTtcblxudmFyIGlzU1ZHID0gZnVuY3Rpb24gaXNTVkcoc3JjKSB7XG4gICAgcmV0dXJuIHNyYy5zdWJzdHIoLTMpLnRvTG93ZXJDYXNlKCkgPT09ICdzdmcnIHx8IElOTElORV9TVkcudGVzdChzcmMpO1xufTtcblxudmFyIF9sb2FkSW1hZ2UgPSBmdW5jdGlvbiBfbG9hZEltYWdlKHNyYywgdGltZW91dCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGltZyk7XG4gICAgICAgIH07XG4gICAgICAgIGltZy5vbmVycm9yID0gcmVqZWN0O1xuICAgICAgICBpbWcuc3JjID0gc3JjO1xuICAgICAgICBpZiAoaW1nLmNvbXBsZXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAvLyBJbmxpbmUgWE1MIGltYWdlcyBtYXkgZmFpbCB0byBwYXJzZSwgdGhyb3dpbmcgYW4gRXJyb3IgbGF0ZXIgb25cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoaW1nKTtcbiAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoIHRydWUgPyAnVGltZWQgb3V0ICgnICsgdGltZW91dCArICdtcykgbG9hZGluZyBpbWFnZScgOiAnJyk7XG4gICAgICAgICAgICB9LCB0aW1lb3V0KTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuLyoqKi8gfSksXG4vKiA1NiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnBhcnNlQ29udGVudCA9IGV4cG9ydHMucmVzb2x2ZVBzZXVkb0NvbnRlbnQgPSBleHBvcnRzLnBvcENvdW50ZXJzID0gZXhwb3J0cy5wYXJzZUNvdW50ZXJSZXNldCA9IGV4cG9ydHMuVE9LRU5fVFlQRSA9IGV4cG9ydHMuUFNFVURPX0NPTlRFTlRfSVRFTV9UWVBFID0gdW5kZWZpbmVkO1xuXG52YXIgX3NsaWNlZFRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH0gcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGkpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyByZXR1cm4gYXJyOyB9IGVsc2UgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkgeyByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpOyB9IGVsc2UgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTsgfSB9OyB9KCk7XG5cbnZhciBfTGlzdEl0ZW0gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE0KTtcblxudmFyIF9saXN0U3R5bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpO1xuXG52YXIgUFNFVURPX0NPTlRFTlRfSVRFTV9UWVBFID0gZXhwb3J0cy5QU0VVRE9fQ09OVEVOVF9JVEVNX1RZUEUgPSB7XG4gICAgVEVYVDogMCxcbiAgICBJTUFHRTogMVxufTtcblxudmFyIFRPS0VOX1RZUEUgPSBleHBvcnRzLlRPS0VOX1RZUEUgPSB7XG4gICAgU1RSSU5HOiAwLFxuICAgIEFUVFJJQlVURTogMSxcbiAgICBVUkw6IDIsXG4gICAgQ09VTlRFUjogMyxcbiAgICBDT1VOVEVSUzogNCxcbiAgICBPUEVOUVVPVEU6IDUsXG4gICAgQ0xPU0VRVU9URTogNlxufTtcblxudmFyIHBhcnNlQ291bnRlclJlc2V0ID0gZXhwb3J0cy5wYXJzZUNvdW50ZXJSZXNldCA9IGZ1bmN0aW9uIHBhcnNlQ291bnRlclJlc2V0KHN0eWxlLCBkYXRhKSB7XG4gICAgaWYgKCFzdHlsZSB8fCAhc3R5bGUuY291bnRlclJlc2V0IHx8IHN0eWxlLmNvdW50ZXJSZXNldCA9PT0gJ25vbmUnKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICB2YXIgY291bnRlck5hbWVzID0gW107XG4gICAgdmFyIGNvdW50ZXJSZXNldHMgPSBzdHlsZS5jb3VudGVyUmVzZXQuc3BsaXQoL1xccyosXFxzKi8pO1xuICAgIHZhciBsZW5Db3VudGVyUmVzZXRzID0gY291bnRlclJlc2V0cy5sZW5ndGg7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbkNvdW50ZXJSZXNldHM7IGkrKykge1xuICAgICAgICB2YXIgX2NvdW50ZXJSZXNldHMkaSRzcGxpID0gY291bnRlclJlc2V0c1tpXS5zcGxpdCgvXFxzKy8pLFxuICAgICAgICAgICAgX2NvdW50ZXJSZXNldHMkaSRzcGxpMiA9IF9zbGljZWRUb0FycmF5KF9jb3VudGVyUmVzZXRzJGkkc3BsaSwgMiksXG4gICAgICAgICAgICBjb3VudGVyTmFtZSA9IF9jb3VudGVyUmVzZXRzJGkkc3BsaTJbMF0sXG4gICAgICAgICAgICBpbml0aWFsVmFsdWUgPSBfY291bnRlclJlc2V0cyRpJHNwbGkyWzFdO1xuXG4gICAgICAgIGNvdW50ZXJOYW1lcy5wdXNoKGNvdW50ZXJOYW1lKTtcbiAgICAgICAgdmFyIGNvdW50ZXIgPSBkYXRhLmNvdW50ZXJzW2NvdW50ZXJOYW1lXTtcbiAgICAgICAgaWYgKCFjb3VudGVyKSB7XG4gICAgICAgICAgICBjb3VudGVyID0gZGF0YS5jb3VudGVyc1tjb3VudGVyTmFtZV0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBjb3VudGVyLnB1c2gocGFyc2VJbnQoaW5pdGlhbFZhbHVlIHx8IDAsIDEwKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvdW50ZXJOYW1lcztcbn07XG5cbnZhciBwb3BDb3VudGVycyA9IGV4cG9ydHMucG9wQ291bnRlcnMgPSBmdW5jdGlvbiBwb3BDb3VudGVycyhjb3VudGVyTmFtZXMsIGRhdGEpIHtcbiAgICB2YXIgbGVuQ291bnRlcnMgPSBjb3VudGVyTmFtZXMubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuQ291bnRlcnM7IGkrKykge1xuICAgICAgICBkYXRhLmNvdW50ZXJzW2NvdW50ZXJOYW1lc1tpXV0ucG9wKCk7XG4gICAgfVxufTtcblxudmFyIHJlc29sdmVQc2V1ZG9Db250ZW50ID0gZXhwb3J0cy5yZXNvbHZlUHNldWRvQ29udGVudCA9IGZ1bmN0aW9uIHJlc29sdmVQc2V1ZG9Db250ZW50KG5vZGUsIHN0eWxlLCBkYXRhKSB7XG4gICAgaWYgKCFzdHlsZSB8fCAhc3R5bGUuY29udGVudCB8fCBzdHlsZS5jb250ZW50ID09PSAnbm9uZScgfHwgc3R5bGUuY29udGVudCA9PT0gJy1tb3otYWx0LWNvbnRlbnQnIHx8IHN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgdG9rZW5zID0gcGFyc2VDb250ZW50KHN0eWxlLmNvbnRlbnQpO1xuXG4gICAgdmFyIGxlbiA9IHRva2Vucy5sZW5ndGg7XG4gICAgdmFyIGNvbnRlbnRJdGVtcyA9IFtdO1xuICAgIHZhciBzID0gJyc7XG5cbiAgICAvLyBpbmNyZW1lbnQgdGhlIGNvdW50ZXIgKGlmIHRoZXJlIGlzIGEgXCJjb3VudGVyLWluY3JlbWVudFwiIGRlY2xhcmF0aW9uKVxuICAgIHZhciBjb3VudGVySW5jcmVtZW50ID0gc3R5bGUuY291bnRlckluY3JlbWVudDtcbiAgICBpZiAoY291bnRlckluY3JlbWVudCAmJiBjb3VudGVySW5jcmVtZW50ICE9PSAnbm9uZScpIHtcbiAgICAgICAgdmFyIF9jb3VudGVySW5jcmVtZW50JHNwbCA9IGNvdW50ZXJJbmNyZW1lbnQuc3BsaXQoL1xccysvKSxcbiAgICAgICAgICAgIF9jb3VudGVySW5jcmVtZW50JHNwbDIgPSBfc2xpY2VkVG9BcnJheShfY291bnRlckluY3JlbWVudCRzcGwsIDIpLFxuICAgICAgICAgICAgY291bnRlck5hbWUgPSBfY291bnRlckluY3JlbWVudCRzcGwyWzBdLFxuICAgICAgICAgICAgaW5jcmVtZW50VmFsdWUgPSBfY291bnRlckluY3JlbWVudCRzcGwyWzFdO1xuXG4gICAgICAgIHZhciBjb3VudGVyID0gZGF0YS5jb3VudGVyc1tjb3VudGVyTmFtZV07XG4gICAgICAgIGlmIChjb3VudGVyKSB7XG4gICAgICAgICAgICBjb3VudGVyW2NvdW50ZXIubGVuZ3RoIC0gMV0gKz0gaW5jcmVtZW50VmFsdWUgPT09IHVuZGVmaW5lZCA/IDEgOiBwYXJzZUludChpbmNyZW1lbnRWYWx1ZSwgMTApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gYnVpbGQgdGhlIGNvbnRlbnQgc3RyaW5nXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgIHN3aXRjaCAodG9rZW4udHlwZSkge1xuICAgICAgICAgICAgY2FzZSBUT0tFTl9UWVBFLlNUUklORzpcbiAgICAgICAgICAgICAgICBzICs9IHRva2VuLnZhbHVlIHx8ICcnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFRPS0VOX1RZUEUuQVRUUklCVVRFOlxuICAgICAgICAgICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgdG9rZW4udmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcyArPSBub2RlLmdldEF0dHJpYnV0ZSh0b2tlbi52YWx1ZSkgfHwgJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFRPS0VOX1RZUEUuQ09VTlRFUjpcbiAgICAgICAgICAgICAgICB2YXIgX2NvdW50ZXIgPSBkYXRhLmNvdW50ZXJzW3Rva2VuLm5hbWUgfHwgJyddO1xuICAgICAgICAgICAgICAgIGlmIChfY291bnRlcikge1xuICAgICAgICAgICAgICAgICAgICBzICs9IGZvcm1hdENvdW50ZXJWYWx1ZShbX2NvdW50ZXJbX2NvdW50ZXIubGVuZ3RoIC0gMV1dLCAnJywgdG9rZW4uZm9ybWF0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgVE9LRU5fVFlQRS5DT1VOVEVSUzpcbiAgICAgICAgICAgICAgICB2YXIgX2NvdW50ZXJzID0gZGF0YS5jb3VudGVyc1t0b2tlbi5uYW1lIHx8ICcnXTtcbiAgICAgICAgICAgICAgICBpZiAoX2NvdW50ZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIHMgKz0gZm9ybWF0Q291bnRlclZhbHVlKF9jb3VudGVycywgdG9rZW4uZ2x1ZSwgdG9rZW4uZm9ybWF0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgVE9LRU5fVFlQRS5PUEVOUVVPVEU6XG4gICAgICAgICAgICAgICAgcyArPSBnZXRRdW90ZShzdHlsZSwgdHJ1ZSwgZGF0YS5xdW90ZURlcHRoKTtcbiAgICAgICAgICAgICAgICBkYXRhLnF1b3RlRGVwdGgrKztcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBUT0tFTl9UWVBFLkNMT1NFUVVPVEU6XG4gICAgICAgICAgICAgICAgZGF0YS5xdW90ZURlcHRoLS07XG4gICAgICAgICAgICAgICAgcyArPSBnZXRRdW90ZShzdHlsZSwgZmFsc2UsIGRhdGEucXVvdGVEZXB0aCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgVE9LRU5fVFlQRS5VUkw6XG4gICAgICAgICAgICAgICAgaWYgKHMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudEl0ZW1zLnB1c2goeyB0eXBlOiBQU0VVRE9fQ09OVEVOVF9JVEVNX1RZUEUuVEVYVCwgdmFsdWU6IHMgfSk7XG4gICAgICAgICAgICAgICAgICAgIHMgPSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGVudEl0ZW1zLnB1c2goeyB0eXBlOiBQU0VVRE9fQ09OVEVOVF9JVEVNX1RZUEUuSU1BR0UsIHZhbHVlOiB0b2tlbi52YWx1ZSB8fCAnJyB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzKSB7XG4gICAgICAgIGNvbnRlbnRJdGVtcy5wdXNoKHsgdHlwZTogUFNFVURPX0NPTlRFTlRfSVRFTV9UWVBFLlRFWFQsIHZhbHVlOiBzIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb250ZW50SXRlbXM7XG59O1xuXG52YXIgcGFyc2VDb250ZW50ID0gZXhwb3J0cy5wYXJzZUNvbnRlbnQgPSBmdW5jdGlvbiBwYXJzZUNvbnRlbnQoY29udGVudCwgY2FjaGUpIHtcbiAgICBpZiAoY2FjaGUgJiYgY2FjaGVbY29udGVudF0pIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlW2NvbnRlbnRdO1xuICAgIH1cblxuICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICB2YXIgbGVuID0gY29udGVudC5sZW5ndGg7XG5cbiAgICB2YXIgaXNTdHJpbmcgPSBmYWxzZTtcbiAgICB2YXIgaXNFc2NhcGVkID0gZmFsc2U7XG4gICAgdmFyIGlzRnVuY3Rpb24gPSBmYWxzZTtcbiAgICB2YXIgc3RyID0gJyc7XG4gICAgdmFyIGZ1bmN0aW9uTmFtZSA9ICcnO1xuICAgIHZhciBhcmdzID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHZhciBjID0gY29udGVudC5jaGFyQXQoaSk7XG5cbiAgICAgICAgc3dpdGNoIChjKSB7XG4gICAgICAgICAgICBjYXNlIFwiJ1wiOlxuICAgICAgICAgICAgY2FzZSAnXCInOlxuICAgICAgICAgICAgICAgIGlmIChpc0VzY2FwZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyICs9IGM7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaXNTdHJpbmcgPSAhaXNTdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNGdW5jdGlvbiAmJiAhaXNTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogVE9LRU5fVFlQRS5TVFJJTkcsIHZhbHVlOiBzdHIgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHIgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnXFxcXCc6XG4gICAgICAgICAgICAgICAgaWYgKGlzRXNjYXBlZCkge1xuICAgICAgICAgICAgICAgICAgICBzdHIgKz0gYztcbiAgICAgICAgICAgICAgICAgICAgaXNFc2NhcGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaXNFc2NhcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJygnOlxuICAgICAgICAgICAgICAgIGlmIChpc1N0cmluZykge1xuICAgICAgICAgICAgICAgICAgICBzdHIgKz0gYztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpc0Z1bmN0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb25OYW1lID0gc3RyO1xuICAgICAgICAgICAgICAgICAgICBzdHIgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgYXJncyA9IFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnKSc6XG4gICAgICAgICAgICAgICAgaWYgKGlzU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ciArPSBjO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNGdW5jdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzLnB1c2goc3RyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZnVuY3Rpb25OYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdhdHRyJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogVE9LRU5fVFlQRS5BVFRSSUJVVEUsIHZhbHVlOiBhcmdzWzBdIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnY291bnRlcic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY291bnRlciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFRPS0VOX1RZUEUuQ09VTlRFUixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGFyZ3NbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlci5mb3JtYXQgPSBhcmdzWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKGNvdW50ZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnY291bnRlcnMnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9jb3VudGVyczIgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBUT0tFTl9UWVBFLkNPVU5URVJTLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYXJnc1swXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY291bnRlcnMyLmdsdWUgPSBhcmdzWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb3VudGVyczIuZm9ybWF0ID0gYXJnc1syXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbnMucHVzaChfY291bnRlcnMyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3VybCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFRPS0VOX1RZUEUuVVJMLCB2YWx1ZTogYXJnc1swXSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpc0Z1bmN0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHN0ciA9ICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnLCc6XG4gICAgICAgICAgICAgICAgaWYgKGlzU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ciArPSBjO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNGdW5jdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBhcmdzLnB1c2goc3RyKTtcbiAgICAgICAgICAgICAgICAgICAgc3RyID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICcgJzpcbiAgICAgICAgICAgIGNhc2UgJ1xcdCc6XG4gICAgICAgICAgICAgICAgaWYgKGlzU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ciArPSBjO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RyKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZE90aGVyVG9rZW4odG9rZW5zLCBzdHIpO1xuICAgICAgICAgICAgICAgICAgICBzdHIgPSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgc3RyICs9IGM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYyAhPT0gJ1xcXFwnKSB7XG4gICAgICAgICAgICBpc0VzY2FwZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdHIpIHtcbiAgICAgICAgYWRkT3RoZXJUb2tlbih0b2tlbnMsIHN0cik7XG4gICAgfVxuXG4gICAgaWYgKGNhY2hlKSB7XG4gICAgICAgIGNhY2hlW2NvbnRlbnRdID0gdG9rZW5zO1xuICAgIH1cblxuICAgIHJldHVybiB0b2tlbnM7XG59O1xuXG52YXIgYWRkT3RoZXJUb2tlbiA9IGZ1bmN0aW9uIGFkZE90aGVyVG9rZW4odG9rZW5zLCBpZGVudGlmaWVyKSB7XG4gICAgc3dpdGNoIChpZGVudGlmaWVyKSB7XG4gICAgICAgIGNhc2UgJ29wZW4tcXVvdGUnOlxuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBUT0tFTl9UWVBFLk9QRU5RVU9URSB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjbG9zZS1xdW90ZSc6XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFRPS0VOX1RZUEUuQ0xPU0VRVU9URSB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn07XG5cbnZhciBnZXRRdW90ZSA9IGZ1bmN0aW9uIGdldFF1b3RlKHN0eWxlLCBpc09wZW5pbmcsIHF1b3RlRGVwdGgpIHtcbiAgICB2YXIgcXVvdGVzID0gc3R5bGUucXVvdGVzID8gc3R5bGUucXVvdGVzLnNwbGl0KC9cXHMrLykgOiBbXCInXFxcIidcIiwgXCInXFxcIidcIl07XG4gICAgdmFyIGlkeCA9IHF1b3RlRGVwdGggKiAyO1xuICAgIGlmIChpZHggPj0gcXVvdGVzLmxlbmd0aCkge1xuICAgICAgICBpZHggPSBxdW90ZXMubGVuZ3RoIC0gMjtcbiAgICB9XG4gICAgaWYgKCFpc09wZW5pbmcpIHtcbiAgICAgICAgKytpZHg7XG4gICAgfVxuICAgIHJldHVybiBxdW90ZXNbaWR4XS5yZXBsYWNlKC9eW1wiJ118W1wiJ10kL2csICcnKTtcbn07XG5cbnZhciBmb3JtYXRDb3VudGVyVmFsdWUgPSBmdW5jdGlvbiBmb3JtYXRDb3VudGVyVmFsdWUoY291bnRlciwgZ2x1ZSwgZm9ybWF0KSB7XG4gICAgdmFyIGxlbiA9IGNvdW50ZXIubGVuZ3RoO1xuICAgIHZhciByZXN1bHQgPSAnJztcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gZ2x1ZSB8fCAnJztcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgKz0gKDAsIF9MaXN0SXRlbS5jcmVhdGVDb3VudGVyVGV4dCkoY291bnRlcltpXSwgKDAsIF9saXN0U3R5bGUucGFyc2VMaXN0U3R5bGVUeXBlKShmb3JtYXQgfHwgJ2RlY2ltYWwnKSwgZmFsc2UpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKioqLyB9KVxuLyoqKioqKi8gXSk7XG59KTsiLCJpbXBvcnQgaHRtbDJjYW52YXMgZnJvbSAnLi4vLi4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvaHRtbDJjYW52YXMuanMnO1xuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKXtcbiBodG1sMmNhbnZhcyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFwiKSkudGhlbihmdW5jdGlvbihjYW52YXMpIHtcbiAgIGNvbnN0IGltZ0RhdGEgPSBjYW52YXMudG9EYXRhVVJMKCk7XG4gICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3VsdFwiKS5zcmMgPSBpbWdEYXRhO1xuIH0pO1xuXG4gLy/jg5zjgr/jg7PjgpLmirzkuIvjgZfjgZ/pmpvjgavjg4Djgqbjg7Pjg63jg7zjg4njgZnjgovnlLvlg4/jgpLkvZzjgotcbiAgaHRtbDJjYW52YXMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRcIikpLnRoZW4oZnVuY3Rpb24oY2FudmFzKSB7XG4gICAgICAvL2Hjgr/jgrDjga5ocmVm44Gr44Kt44Oj44OX44OB44Oj55S75YOP44GuVVJM44KS6Kit5a6aXG4gICAgICBjb25zdCBpbWdEYXRhID0gY2FudmFzLnRvRGF0YVVSTCgpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvZ3BfaW1hZ2VcIikuaHJlZiA9IGltZ0RhdGE7XG4gIH0pO1xufTtcblxudmFyIGJnID0gZnVuY3Rpb24oKSB7XG5cdHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnanMtb2dwLWJnJylbMF07XG5cblx0Zm9yKHZhciBpID0gMTsgaSA8PSA1OyBpKyspe1xuICAgIHZhciBvZ3BJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJzcGFuXCIgKTtcbiAgICB2YXIgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIvCfkLZcIik7XG4gICAgb2dwSWNvbi5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSk7XG4gICAgb2dwSWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnYy1pbWctb2dwX19pY29uJylcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKG9ncEljb24pO1xufVxuXG59O1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixmdW5jdGlvbigpe1xuICBiZygpO1xufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==