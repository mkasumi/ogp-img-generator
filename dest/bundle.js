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

  for (var i = 0; i < 5; i++) {
    var ogpIconRow = document.createElement("li");
    for (var j = 0; j < 4; j++) {
      var ogpIcon = document.createElement("span");
      var textNode = document.createTextNode("🐶");
      ogpIcon.appendChild(textNode);
      ogpIcon.setAttribute('class', 'c-img-ogp__icon');
      ogpIconRow.appendChild(ogpIcon);
    }
    element.appendChild(ogpIconRow);
  }
};

window.addEventListener("load", function () {
  bg();
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvaHRtbDJjYW52YXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIm9ubG9hZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0aGVuIiwiY2FudmFzIiwiaW1nRGF0YSIsInRvRGF0YVVSTCIsInNyYyIsImhyZWYiLCJiZyIsImVsZW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaSIsIm9ncEljb25Sb3ciLCJjcmVhdGVFbGVtZW50IiwiaiIsIm9ncEljb24iLCJ0ZXh0Tm9kZSIsImNyZWF0ZVRleHROb2RlIiwiYXBwZW5kQ2hpbGQiLCJzZXRBdHRyaWJ1dGUiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxJQUF5RDtBQUM3RDtBQUNBLE1BQU0sRUFLNEI7QUFDbEMsQ0FBQztBQUNELG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQywwQkFBMEIsRUFBRTtBQUMvRCx5Q0FBeUMsZUFBZTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELCtEQUErRDtBQUM3SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGtDQUFrQyxpQ0FBaUMsZUFBZSxlQUFlLGdCQUFnQixvQkFBb0IsTUFBTSwwQ0FBMEMsK0JBQStCLGFBQWEscUJBQXFCLG1DQUFtQyxFQUFFLEVBQUUsY0FBYyxXQUFXLFVBQVUsRUFBRSxVQUFVLE1BQU0seUNBQXlDLEVBQUUsVUFBVSxrQkFBa0IsRUFBRSxFQUFFLGFBQWEsRUFBRSwyQkFBMkIsMEJBQTBCLFlBQVksRUFBRSwyQ0FBMkMsOEJBQThCLEVBQUUsT0FBTyw2RUFBNkUsRUFBRSxHQUFHLEVBQUU7O0FBRXJwQixnQ0FBZ0MsMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUUsRUFBRSx5REFBeUQscUVBQXFFLDZEQUE2RCxvQkFBb0IsR0FBRyxFQUFFOztBQUVqakIsaURBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdkosd0JBQXdCLEVBQUU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLEVBQUU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLElBQUksWUFBWSxJQUFJLFlBQVksSUFBSTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIsSUFBSSxZQUFZLElBQUksWUFBWSxJQUFJO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxDQUFDOztBQUVEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsQ0FBQzs7QUFFRDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0NBQWtDLFFBQVE7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3REFBd0Q7O0FBRXhELE9BQU87QUFDUDtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsaURBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdko7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHVCQUF1Qix1QkFBdUI7QUFDOUM7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGdDQUFnQywyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHlEQUF5RCxxRUFBcUUsNkRBQTZELG9CQUFvQixHQUFHLEVBQUU7O0FBRWpqQjs7QUFFQTs7QUFFQSxpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxDQUFDOztBQUVEOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxnQ0FBZ0MsMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUUsRUFBRSx5REFBeUQscUVBQXFFLDZEQUE2RCxvQkFBb0IsR0FBRyxFQUFFOztBQUVqakIsaURBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdko7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxhQUFhO0FBQzVGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrRkFBa0YsZUFBZTtBQUNqRztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxDQUFDOztBQUVEOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGdDQUFnQywyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHlEQUF5RCxxRUFBcUUsNkRBQTZELG9CQUFvQixHQUFHLEVBQUU7O0FBRWpqQixpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7O0FBRUw7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNDQUFzQztBQUN0QyxLQUFLO0FBQ0w7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUEsZ0NBQWdDLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUseURBQXlELHFFQUFxRSw2REFBNkQsb0JBQW9CLEdBQUcsRUFBRTs7QUFFampCOztBQUVBLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrRUFBK0UsU0FBRTtBQUNqRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLG9CQUFvQjtBQUNwQjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxDQUFDOztBQUVELE9BQU87QUFDUDtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0EsMkRBQTJELFNBQUk7QUFDL0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLDZIQUE2SCxTQUFFO0FBQy9IO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBHQUEwRyxTQUFFO0FBQzVHO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7OztBQUdBLG1EQUFtRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRTlQOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLEtBQUk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnRUFBZ0U7O0FBRWhFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQSxrQ0FBa0MsaUNBQWlDLGVBQWUsZUFBZSxnQkFBZ0Isb0JBQW9CLE1BQU0sMENBQTBDLCtCQUErQixhQUFhLHFCQUFxQixtQ0FBbUMsRUFBRSxFQUFFLGNBQWMsV0FBVyxVQUFVLEVBQUUsVUFBVSxNQUFNLHlDQUF5QyxFQUFFLFVBQVUsa0JBQWtCLEVBQUUsRUFBRSxhQUFhLEVBQUUsMkJBQTJCLDBCQUEwQixZQUFZLEVBQUUsMkNBQTJDLDhCQUE4QixFQUFFLE9BQU8sNkVBQTZFLEVBQUUsR0FBRyxFQUFFOztBQUVycEI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFFBQVEsS0FBSTtBQUNaO0FBQ0E7O0FBRUEsbURBQW1ELFdBQVc7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsZ0NBQWdDLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUseURBQXlELHFFQUFxRSw2REFBNkQsb0JBQW9CLEdBQUcsRUFBRTs7QUFFampCOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaURBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdko7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGdDQUFnQywyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHlEQUF5RCxxRUFBcUUsNkRBQTZELG9CQUFvQixHQUFHLEVBQUU7O0FBRWpqQjs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0YsaURBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdko7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxDQUFDOztBQUVEOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBLGtDQUFrQyxpQ0FBaUMsZUFBZSxlQUFlLGdCQUFnQixvQkFBb0IsTUFBTSwwQ0FBMEMsK0JBQStCLGFBQWEscUJBQXFCLG1DQUFtQyxFQUFFLEVBQUUsY0FBYyxXQUFXLFVBQVUsRUFBRSxVQUFVLE1BQU0seUNBQXlDLEVBQUUsVUFBVSxrQkFBa0IsRUFBRSxFQUFFLGFBQWEsRUFBRSwyQkFBMkIsMEJBQTBCLFlBQVksRUFBRSwyQ0FBMkMsOEJBQThCLEVBQUUsT0FBTyw2RUFBNkUsRUFBRSxHQUFHLEVBQUU7O0FBRXJwQjs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNB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QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0RBQStEO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFF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Q0MsSUFBL0MsQ0FBb0QsVUFBU0MsTUFBVCxFQUFpQjtBQUNqRTtBQUNBLFFBQU1DLFVBQVVELE9BQU9FLFNBQVAsRUFBaEI7QUFDQUwsYUFBU0MsY0FBVCxDQUF3QixXQUF4QixFQUFxQ00sSUFBckMsR0FBNENILE9BQTVDO0FBQ0gsR0FKRDtBQUtELENBWkQ7O0FBY0EsSUFBSUksS0FBSyxTQUFMQSxFQUFLLEdBQVc7QUFDbkIsTUFBSUMsVUFBVVQsU0FBU1Usc0JBQVQsQ0FBZ0MsV0FBaEMsRUFBNkMsQ0FBN0MsQ0FBZDs7QUFFQyxPQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSSxDQUFwQixFQUF1QkEsR0FBdkIsRUFBMkI7QUFDekIsUUFBSUMsYUFBYVosU0FBU2EsYUFBVCxDQUF3QixJQUF4QixDQUFqQjtBQUNBLFNBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLENBQXBCLEVBQXVCQSxHQUF2QixFQUEyQjtBQUN2QixVQUFJQyxVQUFVZixTQUFTYSxhQUFULENBQXdCLE1BQXhCLENBQWQ7QUFDQSxVQUFJRyxXQUFXaEIsU0FBU2lCLGNBQVQsQ0FBd0IsSUFBeEIsQ0FBZjtBQUNBRixjQUFRRyxXQUFSLENBQW9CRixRQUFwQjtBQUNBRCxjQUFRSSxZQUFSLENBQXFCLE9BQXJCLEVBQTZCLGlCQUE3QjtBQUNBUCxpQkFBV00sV0FBWCxDQUF1QkgsT0FBdkI7QUFDSDtBQUNETixZQUFRUyxXQUFSLENBQW9CTixVQUFwQjtBQUNEO0FBRUYsQ0FmRDs7QUFpQkFkLE9BQU9zQixnQkFBUCxDQUF3QixNQUF4QixFQUErQixZQUFVO0FBQ3ZDWjtBQUNELENBRkQsRSIsImZpbGUiOiIuL2Rlc3QvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvaW5kZXguanNcIik7XG4iLCIvKiFcbiAqIGh0bWwyY2FudmFzIDEuMC4wLWFscGhhLjEyIDxodHRwczovL2h0bWwyY2FudmFzLmhlcnR6ZW4uY29tPlxuICogQ29weXJpZ2h0IChjKSAyMDE4IE5pa2xhcyB2b24gSGVydHplbiA8aHR0cHM6Ly9oZXJ0emVuLmNvbT5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBMaWNlbnNlXG4gKi9cbihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImh0bWwyY2FudmFzXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImh0bWwyY2FudmFzXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuLyoqKioqKi8gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuLyoqKioqKi8gXHRcdFx0XHRnZXQ6IGdldHRlclxuLyoqKioqKi8gXHRcdFx0fSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDI3KTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuLy8gaHR0cDovL2Rldi53My5vcmcvY3Nzd2cvY3NzLWNvbG9yL1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfc2xpY2VkVG9BcnJheSA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0pIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfSByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IHJldHVybiBhcnI7IH0gZWxzZSBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSB7IHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7IH0gZWxzZSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9IH07IH0oKTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEhFWDMgPSAvXiMoW2EtZjAtOV17M30pJC9pO1xudmFyIGhleDMgPSBmdW5jdGlvbiBoZXgzKHZhbHVlKSB7XG4gICAgdmFyIG1hdGNoID0gdmFsdWUubWF0Y2goSEVYMyk7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIHJldHVybiBbcGFyc2VJbnQobWF0Y2hbMV1bMF0gKyBtYXRjaFsxXVswXSwgMTYpLCBwYXJzZUludChtYXRjaFsxXVsxXSArIG1hdGNoWzFdWzFdLCAxNiksIHBhcnNlSW50KG1hdGNoWzFdWzJdICsgbWF0Y2hbMV1bMl0sIDE2KSwgbnVsbF07XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5cbnZhciBIRVg2ID0gL14jKFthLWYwLTldezZ9KSQvaTtcbnZhciBoZXg2ID0gZnVuY3Rpb24gaGV4Nih2YWx1ZSkge1xuICAgIHZhciBtYXRjaCA9IHZhbHVlLm1hdGNoKEhFWDYpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgICByZXR1cm4gW3BhcnNlSW50KG1hdGNoWzFdLnN1YnN0cmluZygwLCAyKSwgMTYpLCBwYXJzZUludChtYXRjaFsxXS5zdWJzdHJpbmcoMiwgNCksIDE2KSwgcGFyc2VJbnQobWF0Y2hbMV0uc3Vic3RyaW5nKDQsIDYpLCAxNiksIG51bGxdO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG52YXIgUkdCID0gL15yZ2JcXChcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSlcXHMqLFxccyooXFxkezEsM30pXFxzKlxcKSQvO1xudmFyIHJnYiA9IGZ1bmN0aW9uIHJnYih2YWx1ZSkge1xuICAgIHZhciBtYXRjaCA9IHZhbHVlLm1hdGNoKFJHQik7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIHJldHVybiBbTnVtYmVyKG1hdGNoWzFdKSwgTnVtYmVyKG1hdGNoWzJdKSwgTnVtYmVyKG1hdGNoWzNdKSwgbnVsbF07XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5cbnZhciBSR0JBID0gL15yZ2JhXFwoXFxzKihcXGR7MSwzfSlcXHMqLFxccyooXFxkezEsM30pXFxzKixcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGQ/XFwuP1xcZCspXFxzKlxcKSQvO1xudmFyIHJnYmEgPSBmdW5jdGlvbiByZ2JhKHZhbHVlKSB7XG4gICAgdmFyIG1hdGNoID0gdmFsdWUubWF0Y2goUkdCQSk7XG4gICAgaWYgKG1hdGNoICYmIG1hdGNoLmxlbmd0aCA+IDQpIHtcbiAgICAgICAgcmV0dXJuIFtOdW1iZXIobWF0Y2hbMV0pLCBOdW1iZXIobWF0Y2hbMl0pLCBOdW1iZXIobWF0Y2hbM10pLCBOdW1iZXIobWF0Y2hbNF0pXTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxudmFyIGZyb21BcnJheSA9IGZ1bmN0aW9uIGZyb21BcnJheShhcnJheSkge1xuICAgIHJldHVybiBbTWF0aC5taW4oYXJyYXlbMF0sIDI1NSksIE1hdGgubWluKGFycmF5WzFdLCAyNTUpLCBNYXRoLm1pbihhcnJheVsyXSwgMjU1KSwgYXJyYXkubGVuZ3RoID4gMyA/IGFycmF5WzNdIDogbnVsbF07XG59O1xuXG52YXIgbmFtZWRDb2xvciA9IGZ1bmN0aW9uIG5hbWVkQ29sb3IobmFtZSkge1xuICAgIHZhciBjb2xvciA9IE5BTUVEX0NPTE9SU1tuYW1lLnRvTG93ZXJDYXNlKCldO1xuICAgIHJldHVybiBjb2xvciA/IGNvbG9yIDogZmFsc2U7XG59O1xuXG52YXIgQ29sb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ29sb3IodmFsdWUpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbG9yKTtcblxuICAgICAgICB2YXIgX3JlZiA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gZnJvbUFycmF5KHZhbHVlKSA6IGhleDModmFsdWUpIHx8IHJnYih2YWx1ZSkgfHwgcmdiYSh2YWx1ZSkgfHwgbmFtZWRDb2xvcih2YWx1ZSkgfHwgaGV4Nih2YWx1ZSkgfHwgWzAsIDAsIDAsIG51bGxdLFxuICAgICAgICAgICAgX3JlZjIgPSBfc2xpY2VkVG9BcnJheShfcmVmLCA0KSxcbiAgICAgICAgICAgIHIgPSBfcmVmMlswXSxcbiAgICAgICAgICAgIGcgPSBfcmVmMlsxXSxcbiAgICAgICAgICAgIGIgPSBfcmVmMlsyXSxcbiAgICAgICAgICAgIGEgPSBfcmVmMlszXTtcblxuICAgICAgICB0aGlzLnIgPSByO1xuICAgICAgICB0aGlzLmcgPSBnO1xuICAgICAgICB0aGlzLmIgPSBiO1xuICAgICAgICB0aGlzLmEgPSBhO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhDb2xvciwgW3tcbiAgICAgICAga2V5OiAnaXNUcmFuc3BhcmVudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc1RyYW5zcGFyZW50KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYSA9PT0gMDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAndG9TdHJpbmcnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hICE9PSBudWxsICYmIHRoaXMuYSAhPT0gMSA/ICdyZ2JhKCcgKyB0aGlzLnIgKyAnLCcgKyB0aGlzLmcgKyAnLCcgKyB0aGlzLmIgKyAnLCcgKyB0aGlzLmEgKyAnKScgOiAncmdiKCcgKyB0aGlzLnIgKyAnLCcgKyB0aGlzLmcgKyAnLCcgKyB0aGlzLmIgKyAnKSc7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQ29sb3I7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IENvbG9yO1xuXG5cbnZhciBOQU1FRF9DT0xPUlMgPSB7XG4gICAgdHJhbnNwYXJlbnQ6IFswLCAwLCAwLCAwXSxcbiAgICBhbGljZWJsdWU6IFsyNDAsIDI0OCwgMjU1LCBudWxsXSxcbiAgICBhbnRpcXVld2hpdGU6IFsyNTAsIDIzNSwgMjE1LCBudWxsXSxcbiAgICBhcXVhOiBbMCwgMjU1LCAyNTUsIG51bGxdLFxuICAgIGFxdWFtYXJpbmU6IFsxMjcsIDI1NSwgMjEyLCBudWxsXSxcbiAgICBhenVyZTogWzI0MCwgMjU1LCAyNTUsIG51bGxdLFxuICAgIGJlaWdlOiBbMjQ1LCAyNDUsIDIyMCwgbnVsbF0sXG4gICAgYmlzcXVlOiBbMjU1LCAyMjgsIDE5NiwgbnVsbF0sXG4gICAgYmxhY2s6IFswLCAwLCAwLCBudWxsXSxcbiAgICBibGFuY2hlZGFsbW9uZDogWzI1NSwgMjM1LCAyMDUsIG51bGxdLFxuICAgIGJsdWU6IFswLCAwLCAyNTUsIG51bGxdLFxuICAgIGJsdWV2aW9sZXQ6IFsxMzgsIDQzLCAyMjYsIG51bGxdLFxuICAgIGJyb3duOiBbMTY1LCA0MiwgNDIsIG51bGxdLFxuICAgIGJ1cmx5d29vZDogWzIyMiwgMTg0LCAxMzUsIG51bGxdLFxuICAgIGNhZGV0Ymx1ZTogWzk1LCAxNTgsIDE2MCwgbnVsbF0sXG4gICAgY2hhcnRyZXVzZTogWzEyNywgMjU1LCAwLCBudWxsXSxcbiAgICBjaG9jb2xhdGU6IFsyMTAsIDEwNSwgMzAsIG51bGxdLFxuICAgIGNvcmFsOiBbMjU1LCAxMjcsIDgwLCBudWxsXSxcbiAgICBjb3JuZmxvd2VyYmx1ZTogWzEwMCwgMTQ5LCAyMzcsIG51bGxdLFxuICAgIGNvcm5zaWxrOiBbMjU1LCAyNDgsIDIyMCwgbnVsbF0sXG4gICAgY3JpbXNvbjogWzIyMCwgMjAsIDYwLCBudWxsXSxcbiAgICBjeWFuOiBbMCwgMjU1LCAyNTUsIG51bGxdLFxuICAgIGRhcmtibHVlOiBbMCwgMCwgMTM5LCBudWxsXSxcbiAgICBkYXJrY3lhbjogWzAsIDEzOSwgMTM5LCBudWxsXSxcbiAgICBkYXJrZ29sZGVucm9kOiBbMTg0LCAxMzQsIDExLCBudWxsXSxcbiAgICBkYXJrZ3JheTogWzE2OSwgMTY5LCAxNjksIG51bGxdLFxuICAgIGRhcmtncmVlbjogWzAsIDEwMCwgMCwgbnVsbF0sXG4gICAgZGFya2dyZXk6IFsxNjksIDE2OSwgMTY5LCBudWxsXSxcbiAgICBkYXJra2hha2k6IFsxODksIDE4MywgMTA3LCBudWxsXSxcbiAgICBkYXJrbWFnZW50YTogWzEzOSwgMCwgMTM5LCBudWxsXSxcbiAgICBkYXJrb2xpdmVncmVlbjogWzg1LCAxMDcsIDQ3LCBudWxsXSxcbiAgICBkYXJrb3JhbmdlOiBbMjU1LCAxNDAsIDAsIG51bGxdLFxuICAgIGRhcmtvcmNoaWQ6IFsxNTMsIDUwLCAyMDQsIG51bGxdLFxuICAgIGRhcmtyZWQ6IFsxMzksIDAsIDAsIG51bGxdLFxuICAgIGRhcmtzYWxtb246IFsyMzMsIDE1MCwgMTIyLCBudWxsXSxcbiAgICBkYXJrc2VhZ3JlZW46IFsxNDMsIDE4OCwgMTQzLCBudWxsXSxcbiAgICBkYXJrc2xhdGVibHVlOiBbNzIsIDYxLCAxMzksIG51bGxdLFxuICAgIGRhcmtzbGF0ZWdyYXk6IFs0NywgNzksIDc5LCBudWxsXSxcbiAgICBkYXJrc2xhdGVncmV5OiBbNDcsIDc5LCA3OSwgbnVsbF0sXG4gICAgZGFya3R1cnF1b2lzZTogWzAsIDIwNiwgMjA5LCBudWxsXSxcbiAgICBkYXJrdmlvbGV0OiBbMTQ4LCAwLCAyMTEsIG51bGxdLFxuICAgIGRlZXBwaW5rOiBbMjU1LCAyMCwgMTQ3LCBudWxsXSxcbiAgICBkZWVwc2t5Ymx1ZTogWzAsIDE5MSwgMjU1LCBudWxsXSxcbiAgICBkaW1ncmF5OiBbMTA1LCAxMDUsIDEwNSwgbnVsbF0sXG4gICAgZGltZ3JleTogWzEwNSwgMTA1LCAxMDUsIG51bGxdLFxuICAgIGRvZGdlcmJsdWU6IFszMCwgMTQ0LCAyNTUsIG51bGxdLFxuICAgIGZpcmVicmljazogWzE3OCwgMzQsIDM0LCBudWxsXSxcbiAgICBmbG9yYWx3aGl0ZTogWzI1NSwgMjUwLCAyNDAsIG51bGxdLFxuICAgIGZvcmVzdGdyZWVuOiBbMzQsIDEzOSwgMzQsIG51bGxdLFxuICAgIGZ1Y2hzaWE6IFsyNTUsIDAsIDI1NSwgbnVsbF0sXG4gICAgZ2FpbnNib3JvOiBbMjIwLCAyMjAsIDIyMCwgbnVsbF0sXG4gICAgZ2hvc3R3aGl0ZTogWzI0OCwgMjQ4LCAyNTUsIG51bGxdLFxuICAgIGdvbGQ6IFsyNTUsIDIxNSwgMCwgbnVsbF0sXG4gICAgZ29sZGVucm9kOiBbMjE4LCAxNjUsIDMyLCBudWxsXSxcbiAgICBncmF5OiBbMTI4LCAxMjgsIDEyOCwgbnVsbF0sXG4gICAgZ3JlZW46IFswLCAxMjgsIDAsIG51bGxdLFxuICAgIGdyZWVueWVsbG93OiBbMTczLCAyNTUsIDQ3LCBudWxsXSxcbiAgICBncmV5OiBbMTI4LCAxMjgsIDEyOCwgbnVsbF0sXG4gICAgaG9uZXlkZXc6IFsyNDAsIDI1NSwgMjQwLCBudWxsXSxcbiAgICBob3RwaW5rOiBbMjU1LCAxMDUsIDE4MCwgbnVsbF0sXG4gICAgaW5kaWFucmVkOiBbMjA1LCA5MiwgOTIsIG51bGxdLFxuICAgIGluZGlnbzogWzc1LCAwLCAxMzAsIG51bGxdLFxuICAgIGl2b3J5OiBbMjU1LCAyNTUsIDI0MCwgbnVsbF0sXG4gICAga2hha2k6IFsyNDAsIDIzMCwgMTQwLCBudWxsXSxcbiAgICBsYXZlbmRlcjogWzIzMCwgMjMwLCAyNTAsIG51bGxdLFxuICAgIGxhdmVuZGVyYmx1c2g6IFsyNTUsIDI0MCwgMjQ1LCBudWxsXSxcbiAgICBsYXduZ3JlZW46IFsxMjQsIDI1MiwgMCwgbnVsbF0sXG4gICAgbGVtb25jaGlmZm9uOiBbMjU1LCAyNTAsIDIwNSwgbnVsbF0sXG4gICAgbGlnaHRibHVlOiBbMTczLCAyMTYsIDIzMCwgbnVsbF0sXG4gICAgbGlnaHRjb3JhbDogWzI0MCwgMTI4LCAxMjgsIG51bGxdLFxuICAgIGxpZ2h0Y3lhbjogWzIyNCwgMjU1LCAyNTUsIG51bGxdLFxuICAgIGxpZ2h0Z29sZGVucm9keWVsbG93OiBbMjUwLCAyNTAsIDIxMCwgbnVsbF0sXG4gICAgbGlnaHRncmF5OiBbMjExLCAyMTEsIDIxMSwgbnVsbF0sXG4gICAgbGlnaHRncmVlbjogWzE0NCwgMjM4LCAxNDQsIG51bGxdLFxuICAgIGxpZ2h0Z3JleTogWzIxMSwgMjExLCAyMTEsIG51bGxdLFxuICAgIGxpZ2h0cGluazogWzI1NSwgMTgyLCAxOTMsIG51bGxdLFxuICAgIGxpZ2h0c2FsbW9uOiBbMjU1LCAxNjAsIDEyMiwgbnVsbF0sXG4gICAgbGlnaHRzZWFncmVlbjogWzMyLCAxNzgsIDE3MCwgbnVsbF0sXG4gICAgbGlnaHRza3libHVlOiBbMTM1LCAyMDYsIDI1MCwgbnVsbF0sXG4gICAgbGlnaHRzbGF0ZWdyYXk6IFsxMTksIDEzNiwgMTUzLCBudWxsXSxcbiAgICBsaWdodHNsYXRlZ3JleTogWzExOSwgMTM2LCAxNTMsIG51bGxdLFxuICAgIGxpZ2h0c3RlZWxibHVlOiBbMTc2LCAxOTYsIDIyMiwgbnVsbF0sXG4gICAgbGlnaHR5ZWxsb3c6IFsyNTUsIDI1NSwgMjI0LCBudWxsXSxcbiAgICBsaW1lOiBbMCwgMjU1LCAwLCBudWxsXSxcbiAgICBsaW1lZ3JlZW46IFs1MCwgMjA1LCA1MCwgbnVsbF0sXG4gICAgbGluZW46IFsyNTAsIDI0MCwgMjMwLCBudWxsXSxcbiAgICBtYWdlbnRhOiBbMjU1LCAwLCAyNTUsIG51bGxdLFxuICAgIG1hcm9vbjogWzEyOCwgMCwgMCwgbnVsbF0sXG4gICAgbWVkaXVtYXF1YW1hcmluZTogWzEwMiwgMjA1LCAxNzAsIG51bGxdLFxuICAgIG1lZGl1bWJsdWU6IFswLCAwLCAyMDUsIG51bGxdLFxuICAgIG1lZGl1bW9yY2hpZDogWzE4NiwgODUsIDIxMSwgbnVsbF0sXG4gICAgbWVkaXVtcHVycGxlOiBbMTQ3LCAxMTIsIDIxOSwgbnVsbF0sXG4gICAgbWVkaXVtc2VhZ3JlZW46IFs2MCwgMTc5LCAxMTMsIG51bGxdLFxuICAgIG1lZGl1bXNsYXRlYmx1ZTogWzEyMywgMTA0LCAyMzgsIG51bGxdLFxuICAgIG1lZGl1bXNwcmluZ2dyZWVuOiBbMCwgMjUwLCAxNTQsIG51bGxdLFxuICAgIG1lZGl1bXR1cnF1b2lzZTogWzcyLCAyMDksIDIwNCwgbnVsbF0sXG4gICAgbWVkaXVtdmlvbGV0cmVkOiBbMTk5LCAyMSwgMTMzLCBudWxsXSxcbiAgICBtaWRuaWdodGJsdWU6IFsyNSwgMjUsIDExMiwgbnVsbF0sXG4gICAgbWludGNyZWFtOiBbMjQ1LCAyNTUsIDI1MCwgbnVsbF0sXG4gICAgbWlzdHlyb3NlOiBbMjU1LCAyMjgsIDIyNSwgbnVsbF0sXG4gICAgbW9jY2FzaW46IFsyNTUsIDIyOCwgMTgxLCBudWxsXSxcbiAgICBuYXZham93aGl0ZTogWzI1NSwgMjIyLCAxNzMsIG51bGxdLFxuICAgIG5hdnk6IFswLCAwLCAxMjgsIG51bGxdLFxuICAgIG9sZGxhY2U6IFsyNTMsIDI0NSwgMjMwLCBudWxsXSxcbiAgICBvbGl2ZTogWzEyOCwgMTI4LCAwLCBudWxsXSxcbiAgICBvbGl2ZWRyYWI6IFsxMDcsIDE0MiwgMzUsIG51bGxdLFxuICAgIG9yYW5nZTogWzI1NSwgMTY1LCAwLCBudWxsXSxcbiAgICBvcmFuZ2VyZWQ6IFsyNTUsIDY5LCAwLCBudWxsXSxcbiAgICBvcmNoaWQ6IFsyMTgsIDExMiwgMjE0LCBudWxsXSxcbiAgICBwYWxlZ29sZGVucm9kOiBbMjM4LCAyMzIsIDE3MCwgbnVsbF0sXG4gICAgcGFsZWdyZWVuOiBbMTUyLCAyNTEsIDE1MiwgbnVsbF0sXG4gICAgcGFsZXR1cnF1b2lzZTogWzE3NSwgMjM4LCAyMzgsIG51bGxdLFxuICAgIHBhbGV2aW9sZXRyZWQ6IFsyMTksIDExMiwgMTQ3LCBudWxsXSxcbiAgICBwYXBheWF3aGlwOiBbMjU1LCAyMzksIDIxMywgbnVsbF0sXG4gICAgcGVhY2hwdWZmOiBbMjU1LCAyMTgsIDE4NSwgbnVsbF0sXG4gICAgcGVydTogWzIwNSwgMTMzLCA2MywgbnVsbF0sXG4gICAgcGluazogWzI1NSwgMTkyLCAyMDMsIG51bGxdLFxuICAgIHBsdW06IFsyMjEsIDE2MCwgMjIxLCBudWxsXSxcbiAgICBwb3dkZXJibHVlOiBbMTc2LCAyMjQsIDIzMCwgbnVsbF0sXG4gICAgcHVycGxlOiBbMTI4LCAwLCAxMjgsIG51bGxdLFxuICAgIHJlYmVjY2FwdXJwbGU6IFsxMDIsIDUxLCAxNTMsIG51bGxdLFxuICAgIHJlZDogWzI1NSwgMCwgMCwgbnVsbF0sXG4gICAgcm9zeWJyb3duOiBbMTg4LCAxNDMsIDE0MywgbnVsbF0sXG4gICAgcm95YWxibHVlOiBbNjUsIDEwNSwgMjI1LCBudWxsXSxcbiAgICBzYWRkbGVicm93bjogWzEzOSwgNjksIDE5LCBudWxsXSxcbiAgICBzYWxtb246IFsyNTAsIDEyOCwgMTE0LCBudWxsXSxcbiAgICBzYW5keWJyb3duOiBbMjQ0LCAxNjQsIDk2LCBudWxsXSxcbiAgICBzZWFncmVlbjogWzQ2LCAxMzksIDg3LCBudWxsXSxcbiAgICBzZWFzaGVsbDogWzI1NSwgMjQ1LCAyMzgsIG51bGxdLFxuICAgIHNpZW5uYTogWzE2MCwgODIsIDQ1LCBudWxsXSxcbiAgICBzaWx2ZXI6IFsxOTIsIDE5MiwgMTkyLCBudWxsXSxcbiAgICBza3libHVlOiBbMTM1LCAyMDYsIDIzNSwgbnVsbF0sXG4gICAgc2xhdGVibHVlOiBbMTA2LCA5MCwgMjA1LCBudWxsXSxcbiAgICBzbGF0ZWdyYXk6IFsxMTIsIDEyOCwgMTQ0LCBudWxsXSxcbiAgICBzbGF0ZWdyZXk6IFsxMTIsIDEyOCwgMTQ0LCBudWxsXSxcbiAgICBzbm93OiBbMjU1LCAyNTAsIDI1MCwgbnVsbF0sXG4gICAgc3ByaW5nZ3JlZW46IFswLCAyNTUsIDEyNywgbnVsbF0sXG4gICAgc3RlZWxibHVlOiBbNzAsIDEzMCwgMTgwLCBudWxsXSxcbiAgICB0YW46IFsyMTAsIDE4MCwgMTQwLCBudWxsXSxcbiAgICB0ZWFsOiBbMCwgMTI4LCAxMjgsIG51bGxdLFxuICAgIHRoaXN0bGU6IFsyMTYsIDE5MSwgMjE2LCBudWxsXSxcbiAgICB0b21hdG86IFsyNTUsIDk5LCA3MSwgbnVsbF0sXG4gICAgdHVycXVvaXNlOiBbNjQsIDIyNCwgMjA4LCBudWxsXSxcbiAgICB2aW9sZXQ6IFsyMzgsIDEzMCwgMjM4LCBudWxsXSxcbiAgICB3aGVhdDogWzI0NSwgMjIyLCAxNzksIG51bGxdLFxuICAgIHdoaXRlOiBbMjU1LCAyNTUsIDI1NSwgbnVsbF0sXG4gICAgd2hpdGVzbW9rZTogWzI0NSwgMjQ1LCAyNDUsIG51bGxdLFxuICAgIHllbGxvdzogWzI1NSwgMjU1LCAwLCBudWxsXSxcbiAgICB5ZWxsb3dncmVlbjogWzE1NCwgMjA1LCA1MCwgbnVsbF1cbn07XG5cbnZhciBUUkFOU1BBUkVOVCA9IGV4cG9ydHMuVFJBTlNQQVJFTlQgPSBuZXcgQ29sb3IoWzAsIDAsIDAsIDBdKTtcblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY2FsY3VsYXRlTGVuZ3RoRnJvbVZhbHVlV2l0aFVuaXQgPSBleHBvcnRzLkxFTkdUSF9UWVBFID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX05vZGVDb250YWluZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXG52YXIgX05vZGVDb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTm9kZUNvbnRhaW5lcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBMRU5HVEhfV0lUSF9VTklUID0gLyhbXFxkLl0rKShweHxyP2VtfCUpL2k7XG5cbnZhciBMRU5HVEhfVFlQRSA9IGV4cG9ydHMuTEVOR1RIX1RZUEUgPSB7XG4gICAgUFg6IDAsXG4gICAgUEVSQ0VOVEFHRTogMVxufTtcblxudmFyIExlbmd0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBMZW5ndGgodmFsdWUpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExlbmd0aCk7XG5cbiAgICAgICAgdGhpcy50eXBlID0gdmFsdWUuc3Vic3RyKHZhbHVlLmxlbmd0aCAtIDEpID09PSAnJScgPyBMRU5HVEhfVFlQRS5QRVJDRU5UQUdFIDogTEVOR1RIX1RZUEUuUFg7XG4gICAgICAgIHZhciBwYXJzZWRWYWx1ZSA9IHBhcnNlRmxvYXQodmFsdWUpO1xuICAgICAgICBpZiAodHJ1ZSAmJiBpc05hTihwYXJzZWRWYWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgdmFsdWUgZ2l2ZW4gZm9yIExlbmd0aDogXCInICsgdmFsdWUgKyAnXCInKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZhbHVlID0gaXNOYU4ocGFyc2VkVmFsdWUpID8gMCA6IHBhcnNlZFZhbHVlO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhMZW5ndGgsIFt7XG4gICAgICAgIGtleTogJ2lzUGVyY2VudGFnZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc1BlcmNlbnRhZ2UoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSBMRU5HVEhfVFlQRS5QRVJDRU5UQUdFO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRBYnNvbHV0ZVZhbHVlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEFic29sdXRlVmFsdWUocGFyZW50TGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc1BlcmNlbnRhZ2UoKSA/IHBhcmVudExlbmd0aCAqICh0aGlzLnZhbHVlIC8gMTAwKSA6IHRoaXMudmFsdWU7XG4gICAgICAgIH1cbiAgICB9XSwgW3tcbiAgICAgICAga2V5OiAnY3JlYXRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZSh2KSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IExlbmd0aCh2KTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBMZW5ndGg7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IExlbmd0aDtcblxuXG52YXIgZ2V0Um9vdEZvbnRTaXplID0gZnVuY3Rpb24gZ2V0Um9vdEZvbnRTaXplKGNvbnRhaW5lcikge1xuICAgIHZhciBwYXJlbnQgPSBjb250YWluZXIucGFyZW50O1xuICAgIHJldHVybiBwYXJlbnQgPyBnZXRSb290Rm9udFNpemUocGFyZW50KSA6IHBhcnNlRmxvYXQoY29udGFpbmVyLnN0eWxlLmZvbnQuZm9udFNpemUpO1xufTtcblxudmFyIGNhbGN1bGF0ZUxlbmd0aEZyb21WYWx1ZVdpdGhVbml0ID0gZXhwb3J0cy5jYWxjdWxhdGVMZW5ndGhGcm9tVmFsdWVXaXRoVW5pdCA9IGZ1bmN0aW9uIGNhbGN1bGF0ZUxlbmd0aEZyb21WYWx1ZVdpdGhVbml0KGNvbnRhaW5lciwgdmFsdWUsIHVuaXQpIHtcbiAgICBzd2l0Y2ggKHVuaXQpIHtcbiAgICAgICAgY2FzZSAncHgnOlxuICAgICAgICBjYXNlICclJzpcbiAgICAgICAgICAgIHJldHVybiBuZXcgTGVuZ3RoKHZhbHVlICsgdW5pdCk7XG4gICAgICAgIGNhc2UgJ2VtJzpcbiAgICAgICAgY2FzZSAncmVtJzpcbiAgICAgICAgICAgIHZhciBsZW5ndGggPSBuZXcgTGVuZ3RoKHZhbHVlKTtcbiAgICAgICAgICAgIGxlbmd0aC52YWx1ZSAqPSB1bml0ID09PSAnZW0nID8gcGFyc2VGbG9hdChjb250YWluZXIuc3R5bGUuZm9udC5mb250U2l6ZSkgOiBnZXRSb290Rm9udFNpemUoY29udGFpbmVyKTtcbiAgICAgICAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAvLyBUT0RPOiBoYW5kbGUgY29ycmVjdGx5IGlmIHVua25vd24gdW5pdCBpcyB1c2VkXG4gICAgICAgICAgICByZXR1cm4gbmV3IExlbmd0aCgnMCcpO1xuICAgIH1cbn07XG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnBhcnNlQm91bmRDdXJ2ZXMgPSBleHBvcnRzLmNhbGN1bGF0ZVBhZGRpbmdCb3hQYXRoID0gZXhwb3J0cy5jYWxjdWxhdGVCb3JkZXJCb3hQYXRoID0gZXhwb3J0cy5wYXJzZVBhdGhGb3JCb3JkZXIgPSBleHBvcnRzLnBhcnNlRG9jdW1lbnRTaXplID0gZXhwb3J0cy5jYWxjdWxhdGVDb250ZW50Qm94ID0gZXhwb3J0cy5jYWxjdWxhdGVQYWRkaW5nQm94ID0gZXhwb3J0cy5wYXJzZUJvdW5kcyA9IGV4cG9ydHMuQm91bmRzID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX1ZlY3RvciA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG5cbnZhciBfVmVjdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1ZlY3Rvcik7XG5cbnZhciBfQmV6aWVyQ3VydmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMyKTtcblxudmFyIF9CZXppZXJDdXJ2ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9CZXppZXJDdXJ2ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBUT1AgPSAwO1xudmFyIFJJR0hUID0gMTtcbnZhciBCT1RUT00gPSAyO1xudmFyIExFRlQgPSAzO1xuXG52YXIgSCA9IDA7XG52YXIgViA9IDE7XG5cbnZhciBCb3VuZHMgPSBleHBvcnRzLkJvdW5kcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCb3VuZHMoeCwgeSwgdywgaCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQm91bmRzKTtcblxuICAgICAgICB0aGlzLmxlZnQgPSB4O1xuICAgICAgICB0aGlzLnRvcCA9IHk7XG4gICAgICAgIHRoaXMud2lkdGggPSB3O1xuICAgICAgICB0aGlzLmhlaWdodCA9IGg7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEJvdW5kcywgbnVsbCwgW3tcbiAgICAgICAga2V5OiAnZnJvbUNsaWVudFJlY3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZnJvbUNsaWVudFJlY3QoY2xpZW50UmVjdCwgc2Nyb2xsWCwgc2Nyb2xsWSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBCb3VuZHMoY2xpZW50UmVjdC5sZWZ0ICsgc2Nyb2xsWCwgY2xpZW50UmVjdC50b3AgKyBzY3JvbGxZLCBjbGllbnRSZWN0LndpZHRoLCBjbGllbnRSZWN0LmhlaWdodCk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQm91bmRzO1xufSgpO1xuXG52YXIgcGFyc2VCb3VuZHMgPSBleHBvcnRzLnBhcnNlQm91bmRzID0gZnVuY3Rpb24gcGFyc2VCb3VuZHMobm9kZSwgc2Nyb2xsWCwgc2Nyb2xsWSkge1xuICAgIHJldHVybiBCb3VuZHMuZnJvbUNsaWVudFJlY3Qobm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwgc2Nyb2xsWCwgc2Nyb2xsWSk7XG59O1xuXG52YXIgY2FsY3VsYXRlUGFkZGluZ0JveCA9IGV4cG9ydHMuY2FsY3VsYXRlUGFkZGluZ0JveCA9IGZ1bmN0aW9uIGNhbGN1bGF0ZVBhZGRpbmdCb3goYm91bmRzLCBib3JkZXJzKSB7XG4gICAgcmV0dXJuIG5ldyBCb3VuZHMoYm91bmRzLmxlZnQgKyBib3JkZXJzW0xFRlRdLmJvcmRlcldpZHRoLCBib3VuZHMudG9wICsgYm9yZGVyc1tUT1BdLmJvcmRlcldpZHRoLCBib3VuZHMud2lkdGggLSAoYm9yZGVyc1tSSUdIVF0uYm9yZGVyV2lkdGggKyBib3JkZXJzW0xFRlRdLmJvcmRlcldpZHRoKSwgYm91bmRzLmhlaWdodCAtIChib3JkZXJzW1RPUF0uYm9yZGVyV2lkdGggKyBib3JkZXJzW0JPVFRPTV0uYm9yZGVyV2lkdGgpKTtcbn07XG5cbnZhciBjYWxjdWxhdGVDb250ZW50Qm94ID0gZXhwb3J0cy5jYWxjdWxhdGVDb250ZW50Qm94ID0gZnVuY3Rpb24gY2FsY3VsYXRlQ29udGVudEJveChib3VuZHMsIHBhZGRpbmcsIGJvcmRlcnMpIHtcbiAgICAvLyBUT0RPIHN1cHBvcnQgcGVyY2VudGFnZSBwYWRkaW5nc1xuICAgIHZhciBwYWRkaW5nVG9wID0gcGFkZGluZ1tUT1BdLnZhbHVlO1xuICAgIHZhciBwYWRkaW5nUmlnaHQgPSBwYWRkaW5nW1JJR0hUXS52YWx1ZTtcbiAgICB2YXIgcGFkZGluZ0JvdHRvbSA9IHBhZGRpbmdbQk9UVE9NXS52YWx1ZTtcbiAgICB2YXIgcGFkZGluZ0xlZnQgPSBwYWRkaW5nW0xFRlRdLnZhbHVlO1xuXG4gICAgcmV0dXJuIG5ldyBCb3VuZHMoYm91bmRzLmxlZnQgKyBwYWRkaW5nTGVmdCArIGJvcmRlcnNbTEVGVF0uYm9yZGVyV2lkdGgsIGJvdW5kcy50b3AgKyBwYWRkaW5nVG9wICsgYm9yZGVyc1tUT1BdLmJvcmRlcldpZHRoLCBib3VuZHMud2lkdGggLSAoYm9yZGVyc1tSSUdIVF0uYm9yZGVyV2lkdGggKyBib3JkZXJzW0xFRlRdLmJvcmRlcldpZHRoICsgcGFkZGluZ0xlZnQgKyBwYWRkaW5nUmlnaHQpLCBib3VuZHMuaGVpZ2h0IC0gKGJvcmRlcnNbVE9QXS5ib3JkZXJXaWR0aCArIGJvcmRlcnNbQk9UVE9NXS5ib3JkZXJXaWR0aCArIHBhZGRpbmdUb3AgKyBwYWRkaW5nQm90dG9tKSk7XG59O1xuXG52YXIgcGFyc2VEb2N1bWVudFNpemUgPSBleHBvcnRzLnBhcnNlRG9jdW1lbnRTaXplID0gZnVuY3Rpb24gcGFyc2VEb2N1bWVudFNpemUoZG9jdW1lbnQpIHtcbiAgICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgdmFyIGRvY3VtZW50RWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICAgIGlmICghYm9keSB8fCAhZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvciggdHJ1ZSA/ICdVbmFibGUgdG8gZ2V0IGRvY3VtZW50IHNpemUnIDogJycpO1xuICAgIH1cbiAgICB2YXIgd2lkdGggPSBNYXRoLm1heChNYXRoLm1heChib2R5LnNjcm9sbFdpZHRoLCBkb2N1bWVudEVsZW1lbnQuc2Nyb2xsV2lkdGgpLCBNYXRoLm1heChib2R5Lm9mZnNldFdpZHRoLCBkb2N1bWVudEVsZW1lbnQub2Zmc2V0V2lkdGgpLCBNYXRoLm1heChib2R5LmNsaWVudFdpZHRoLCBkb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpKTtcblxuICAgIHZhciBoZWlnaHQgPSBNYXRoLm1heChNYXRoLm1heChib2R5LnNjcm9sbEhlaWdodCwgZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCksIE1hdGgubWF4KGJvZHkub2Zmc2V0SGVpZ2h0LCBkb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0KSwgTWF0aC5tYXgoYm9keS5jbGllbnRIZWlnaHQsIGRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpKTtcblxuICAgIHJldHVybiBuZXcgQm91bmRzKDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xufTtcblxudmFyIHBhcnNlUGF0aEZvckJvcmRlciA9IGV4cG9ydHMucGFyc2VQYXRoRm9yQm9yZGVyID0gZnVuY3Rpb24gcGFyc2VQYXRoRm9yQm9yZGVyKGN1cnZlcywgYm9yZGVyU2lkZSkge1xuICAgIHN3aXRjaCAoYm9yZGVyU2lkZSkge1xuICAgICAgICBjYXNlIFRPUDpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVQYXRoRnJvbUN1cnZlcyhjdXJ2ZXMudG9wTGVmdE91dGVyLCBjdXJ2ZXMudG9wTGVmdElubmVyLCBjdXJ2ZXMudG9wUmlnaHRPdXRlciwgY3VydmVzLnRvcFJpZ2h0SW5uZXIpO1xuICAgICAgICBjYXNlIFJJR0hUOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZVBhdGhGcm9tQ3VydmVzKGN1cnZlcy50b3BSaWdodE91dGVyLCBjdXJ2ZXMudG9wUmlnaHRJbm5lciwgY3VydmVzLmJvdHRvbVJpZ2h0T3V0ZXIsIGN1cnZlcy5ib3R0b21SaWdodElubmVyKTtcbiAgICAgICAgY2FzZSBCT1RUT006XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlUGF0aEZyb21DdXJ2ZXMoY3VydmVzLmJvdHRvbVJpZ2h0T3V0ZXIsIGN1cnZlcy5ib3R0b21SaWdodElubmVyLCBjdXJ2ZXMuYm90dG9tTGVmdE91dGVyLCBjdXJ2ZXMuYm90dG9tTGVmdElubmVyKTtcbiAgICAgICAgY2FzZSBMRUZUOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZVBhdGhGcm9tQ3VydmVzKGN1cnZlcy5ib3R0b21MZWZ0T3V0ZXIsIGN1cnZlcy5ib3R0b21MZWZ0SW5uZXIsIGN1cnZlcy50b3BMZWZ0T3V0ZXIsIGN1cnZlcy50b3BMZWZ0SW5uZXIpO1xuICAgIH1cbn07XG5cbnZhciBjcmVhdGVQYXRoRnJvbUN1cnZlcyA9IGZ1bmN0aW9uIGNyZWF0ZVBhdGhGcm9tQ3VydmVzKG91dGVyMSwgaW5uZXIxLCBvdXRlcjIsIGlubmVyMikge1xuICAgIHZhciBwYXRoID0gW107XG4gICAgaWYgKG91dGVyMSBpbnN0YW5jZW9mIF9CZXppZXJDdXJ2ZTIuZGVmYXVsdCkge1xuICAgICAgICBwYXRoLnB1c2gob3V0ZXIxLnN1YmRpdmlkZSgwLjUsIGZhbHNlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcGF0aC5wdXNoKG91dGVyMSk7XG4gICAgfVxuXG4gICAgaWYgKG91dGVyMiBpbnN0YW5jZW9mIF9CZXppZXJDdXJ2ZTIuZGVmYXVsdCkge1xuICAgICAgICBwYXRoLnB1c2gob3V0ZXIyLnN1YmRpdmlkZSgwLjUsIHRydWUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwYXRoLnB1c2gob3V0ZXIyKTtcbiAgICB9XG5cbiAgICBpZiAoaW5uZXIyIGluc3RhbmNlb2YgX0JlemllckN1cnZlMi5kZWZhdWx0KSB7XG4gICAgICAgIHBhdGgucHVzaChpbm5lcjIuc3ViZGl2aWRlKDAuNSwgdHJ1ZSkucmV2ZXJzZSgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwYXRoLnB1c2goaW5uZXIyKTtcbiAgICB9XG5cbiAgICBpZiAoaW5uZXIxIGluc3RhbmNlb2YgX0JlemllckN1cnZlMi5kZWZhdWx0KSB7XG4gICAgICAgIHBhdGgucHVzaChpbm5lcjEuc3ViZGl2aWRlKDAuNSwgZmFsc2UpLnJldmVyc2UoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcGF0aC5wdXNoKGlubmVyMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhdGg7XG59O1xuXG52YXIgY2FsY3VsYXRlQm9yZGVyQm94UGF0aCA9IGV4cG9ydHMuY2FsY3VsYXRlQm9yZGVyQm94UGF0aCA9IGZ1bmN0aW9uIGNhbGN1bGF0ZUJvcmRlckJveFBhdGgoY3VydmVzKSB7XG4gICAgcmV0dXJuIFtjdXJ2ZXMudG9wTGVmdE91dGVyLCBjdXJ2ZXMudG9wUmlnaHRPdXRlciwgY3VydmVzLmJvdHRvbVJpZ2h0T3V0ZXIsIGN1cnZlcy5ib3R0b21MZWZ0T3V0ZXJdO1xufTtcblxudmFyIGNhbGN1bGF0ZVBhZGRpbmdCb3hQYXRoID0gZXhwb3J0cy5jYWxjdWxhdGVQYWRkaW5nQm94UGF0aCA9IGZ1bmN0aW9uIGNhbGN1bGF0ZVBhZGRpbmdCb3hQYXRoKGN1cnZlcykge1xuICAgIHJldHVybiBbY3VydmVzLnRvcExlZnRJbm5lciwgY3VydmVzLnRvcFJpZ2h0SW5uZXIsIGN1cnZlcy5ib3R0b21SaWdodElubmVyLCBjdXJ2ZXMuYm90dG9tTGVmdElubmVyXTtcbn07XG5cbnZhciBwYXJzZUJvdW5kQ3VydmVzID0gZXhwb3J0cy5wYXJzZUJvdW5kQ3VydmVzID0gZnVuY3Rpb24gcGFyc2VCb3VuZEN1cnZlcyhib3VuZHMsIGJvcmRlcnMsIGJvcmRlclJhZGl1cykge1xuICAgIHZhciB0bGggPSBib3JkZXJSYWRpdXNbQ09STkVSLlRPUF9MRUZUXVtIXS5nZXRBYnNvbHV0ZVZhbHVlKGJvdW5kcy53aWR0aCk7XG4gICAgdmFyIHRsdiA9IGJvcmRlclJhZGl1c1tDT1JORVIuVE9QX0xFRlRdW1ZdLmdldEFic29sdXRlVmFsdWUoYm91bmRzLmhlaWdodCk7XG4gICAgdmFyIHRyaCA9IGJvcmRlclJhZGl1c1tDT1JORVIuVE9QX1JJR0hUXVtIXS5nZXRBYnNvbHV0ZVZhbHVlKGJvdW5kcy53aWR0aCk7XG4gICAgdmFyIHRydiA9IGJvcmRlclJhZGl1c1tDT1JORVIuVE9QX1JJR0hUXVtWXS5nZXRBYnNvbHV0ZVZhbHVlKGJvdW5kcy5oZWlnaHQpO1xuICAgIHZhciBicmggPSBib3JkZXJSYWRpdXNbQ09STkVSLkJPVFRPTV9SSUdIVF1bSF0uZ2V0QWJzb2x1dGVWYWx1ZShib3VuZHMud2lkdGgpO1xuICAgIHZhciBicnYgPSBib3JkZXJSYWRpdXNbQ09STkVSLkJPVFRPTV9SSUdIVF1bVl0uZ2V0QWJzb2x1dGVWYWx1ZShib3VuZHMuaGVpZ2h0KTtcbiAgICB2YXIgYmxoID0gYm9yZGVyUmFkaXVzW0NPUk5FUi5CT1RUT01fTEVGVF1bSF0uZ2V0QWJzb2x1dGVWYWx1ZShib3VuZHMud2lkdGgpO1xuICAgIHZhciBibHYgPSBib3JkZXJSYWRpdXNbQ09STkVSLkJPVFRPTV9MRUZUXVtWXS5nZXRBYnNvbHV0ZVZhbHVlKGJvdW5kcy5oZWlnaHQpO1xuXG4gICAgdmFyIGZhY3RvcnMgPSBbXTtcbiAgICBmYWN0b3JzLnB1c2goKHRsaCArIHRyaCkgLyBib3VuZHMud2lkdGgpO1xuICAgIGZhY3RvcnMucHVzaCgoYmxoICsgYnJoKSAvIGJvdW5kcy53aWR0aCk7XG4gICAgZmFjdG9ycy5wdXNoKCh0bHYgKyBibHYpIC8gYm91bmRzLmhlaWdodCk7XG4gICAgZmFjdG9ycy5wdXNoKCh0cnYgKyBicnYpIC8gYm91bmRzLmhlaWdodCk7XG4gICAgdmFyIG1heEZhY3RvciA9IE1hdGgubWF4LmFwcGx5KE1hdGgsIGZhY3RvcnMpO1xuXG4gICAgaWYgKG1heEZhY3RvciA+IDEpIHtcbiAgICAgICAgdGxoIC89IG1heEZhY3RvcjtcbiAgICAgICAgdGx2IC89IG1heEZhY3RvcjtcbiAgICAgICAgdHJoIC89IG1heEZhY3RvcjtcbiAgICAgICAgdHJ2IC89IG1heEZhY3RvcjtcbiAgICAgICAgYnJoIC89IG1heEZhY3RvcjtcbiAgICAgICAgYnJ2IC89IG1heEZhY3RvcjtcbiAgICAgICAgYmxoIC89IG1heEZhY3RvcjtcbiAgICAgICAgYmx2IC89IG1heEZhY3RvcjtcbiAgICB9XG5cbiAgICB2YXIgdG9wV2lkdGggPSBib3VuZHMud2lkdGggLSB0cmg7XG4gICAgdmFyIHJpZ2h0SGVpZ2h0ID0gYm91bmRzLmhlaWdodCAtIGJydjtcbiAgICB2YXIgYm90dG9tV2lkdGggPSBib3VuZHMud2lkdGggLSBicmg7XG4gICAgdmFyIGxlZnRIZWlnaHQgPSBib3VuZHMuaGVpZ2h0IC0gYmx2O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdG9wTGVmdE91dGVyOiB0bGggPiAwIHx8IHRsdiA+IDAgPyBnZXRDdXJ2ZVBvaW50cyhib3VuZHMubGVmdCwgYm91bmRzLnRvcCwgdGxoLCB0bHYsIENPUk5FUi5UT1BfTEVGVCkgOiBuZXcgX1ZlY3RvcjIuZGVmYXVsdChib3VuZHMubGVmdCwgYm91bmRzLnRvcCksXG4gICAgICAgIHRvcExlZnRJbm5lcjogdGxoID4gMCB8fCB0bHYgPiAwID8gZ2V0Q3VydmVQb2ludHMoYm91bmRzLmxlZnQgKyBib3JkZXJzW0xFRlRdLmJvcmRlcldpZHRoLCBib3VuZHMudG9wICsgYm9yZGVyc1tUT1BdLmJvcmRlcldpZHRoLCBNYXRoLm1heCgwLCB0bGggLSBib3JkZXJzW0xFRlRdLmJvcmRlcldpZHRoKSwgTWF0aC5tYXgoMCwgdGx2IC0gYm9yZGVyc1tUT1BdLmJvcmRlcldpZHRoKSwgQ09STkVSLlRPUF9MRUZUKSA6IG5ldyBfVmVjdG9yMi5kZWZhdWx0KGJvdW5kcy5sZWZ0ICsgYm9yZGVyc1tMRUZUXS5ib3JkZXJXaWR0aCwgYm91bmRzLnRvcCArIGJvcmRlcnNbVE9QXS5ib3JkZXJXaWR0aCksXG4gICAgICAgIHRvcFJpZ2h0T3V0ZXI6IHRyaCA+IDAgfHwgdHJ2ID4gMCA/IGdldEN1cnZlUG9pbnRzKGJvdW5kcy5sZWZ0ICsgdG9wV2lkdGgsIGJvdW5kcy50b3AsIHRyaCwgdHJ2LCBDT1JORVIuVE9QX1JJR0hUKSA6IG5ldyBfVmVjdG9yMi5kZWZhdWx0KGJvdW5kcy5sZWZ0ICsgYm91bmRzLndpZHRoLCBib3VuZHMudG9wKSxcbiAgICAgICAgdG9wUmlnaHRJbm5lcjogdHJoID4gMCB8fCB0cnYgPiAwID8gZ2V0Q3VydmVQb2ludHMoYm91bmRzLmxlZnQgKyBNYXRoLm1pbih0b3BXaWR0aCwgYm91bmRzLndpZHRoICsgYm9yZGVyc1tMRUZUXS5ib3JkZXJXaWR0aCksIGJvdW5kcy50b3AgKyBib3JkZXJzW1RPUF0uYm9yZGVyV2lkdGgsIHRvcFdpZHRoID4gYm91bmRzLndpZHRoICsgYm9yZGVyc1tMRUZUXS5ib3JkZXJXaWR0aCA/IDAgOiB0cmggLSBib3JkZXJzW0xFRlRdLmJvcmRlcldpZHRoLCB0cnYgLSBib3JkZXJzW1RPUF0uYm9yZGVyV2lkdGgsIENPUk5FUi5UT1BfUklHSFQpIDogbmV3IF9WZWN0b3IyLmRlZmF1bHQoYm91bmRzLmxlZnQgKyBib3VuZHMud2lkdGggLSBib3JkZXJzW1JJR0hUXS5ib3JkZXJXaWR0aCwgYm91bmRzLnRvcCArIGJvcmRlcnNbVE9QXS5ib3JkZXJXaWR0aCksXG4gICAgICAgIGJvdHRvbVJpZ2h0T3V0ZXI6IGJyaCA+IDAgfHwgYnJ2ID4gMCA/IGdldEN1cnZlUG9pbnRzKGJvdW5kcy5sZWZ0ICsgYm90dG9tV2lkdGgsIGJvdW5kcy50b3AgKyByaWdodEhlaWdodCwgYnJoLCBicnYsIENPUk5FUi5CT1RUT01fUklHSFQpIDogbmV3IF9WZWN0b3IyLmRlZmF1bHQoYm91bmRzLmxlZnQgKyBib3VuZHMud2lkdGgsIGJvdW5kcy50b3AgKyBib3VuZHMuaGVpZ2h0KSxcbiAgICAgICAgYm90dG9tUmlnaHRJbm5lcjogYnJoID4gMCB8fCBicnYgPiAwID8gZ2V0Q3VydmVQb2ludHMoYm91bmRzLmxlZnQgKyBNYXRoLm1pbihib3R0b21XaWR0aCwgYm91bmRzLndpZHRoIC0gYm9yZGVyc1tMRUZUXS5ib3JkZXJXaWR0aCksIGJvdW5kcy50b3AgKyBNYXRoLm1pbihyaWdodEhlaWdodCwgYm91bmRzLmhlaWdodCArIGJvcmRlcnNbVE9QXS5ib3JkZXJXaWR0aCksIE1hdGgubWF4KDAsIGJyaCAtIGJvcmRlcnNbUklHSFRdLmJvcmRlcldpZHRoKSwgYnJ2IC0gYm9yZGVyc1tCT1RUT01dLmJvcmRlcldpZHRoLCBDT1JORVIuQk9UVE9NX1JJR0hUKSA6IG5ldyBfVmVjdG9yMi5kZWZhdWx0KGJvdW5kcy5sZWZ0ICsgYm91bmRzLndpZHRoIC0gYm9yZGVyc1tSSUdIVF0uYm9yZGVyV2lkdGgsIGJvdW5kcy50b3AgKyBib3VuZHMuaGVpZ2h0IC0gYm9yZGVyc1tCT1RUT01dLmJvcmRlcldpZHRoKSxcbiAgICAgICAgYm90dG9tTGVmdE91dGVyOiBibGggPiAwIHx8IGJsdiA+IDAgPyBnZXRDdXJ2ZVBvaW50cyhib3VuZHMubGVmdCwgYm91bmRzLnRvcCArIGxlZnRIZWlnaHQsIGJsaCwgYmx2LCBDT1JORVIuQk9UVE9NX0xFRlQpIDogbmV3IF9WZWN0b3IyLmRlZmF1bHQoYm91bmRzLmxlZnQsIGJvdW5kcy50b3AgKyBib3VuZHMuaGVpZ2h0KSxcbiAgICAgICAgYm90dG9tTGVmdElubmVyOiBibGggPiAwIHx8IGJsdiA+IDAgPyBnZXRDdXJ2ZVBvaW50cyhib3VuZHMubGVmdCArIGJvcmRlcnNbTEVGVF0uYm9yZGVyV2lkdGgsIGJvdW5kcy50b3AgKyBsZWZ0SGVpZ2h0LCBNYXRoLm1heCgwLCBibGggLSBib3JkZXJzW0xFRlRdLmJvcmRlcldpZHRoKSwgYmx2IC0gYm9yZGVyc1tCT1RUT01dLmJvcmRlcldpZHRoLCBDT1JORVIuQk9UVE9NX0xFRlQpIDogbmV3IF9WZWN0b3IyLmRlZmF1bHQoYm91bmRzLmxlZnQgKyBib3JkZXJzW0xFRlRdLmJvcmRlcldpZHRoLCBib3VuZHMudG9wICsgYm91bmRzLmhlaWdodCAtIGJvcmRlcnNbQk9UVE9NXS5ib3JkZXJXaWR0aClcbiAgICB9O1xufTtcblxudmFyIENPUk5FUiA9IHtcbiAgICBUT1BfTEVGVDogMCxcbiAgICBUT1BfUklHSFQ6IDEsXG4gICAgQk9UVE9NX1JJR0hUOiAyLFxuICAgIEJPVFRPTV9MRUZUOiAzXG59O1xuXG52YXIgZ2V0Q3VydmVQb2ludHMgPSBmdW5jdGlvbiBnZXRDdXJ2ZVBvaW50cyh4LCB5LCByMSwgcjIsIHBvc2l0aW9uKSB7XG4gICAgdmFyIGthcHBhID0gNCAqICgoTWF0aC5zcXJ0KDIpIC0gMSkgLyAzKTtcbiAgICB2YXIgb3ggPSByMSAqIGthcHBhOyAvLyBjb250cm9sIHBvaW50IG9mZnNldCBob3Jpem9udGFsXG4gICAgdmFyIG95ID0gcjIgKiBrYXBwYTsgLy8gY29udHJvbCBwb2ludCBvZmZzZXQgdmVydGljYWxcbiAgICB2YXIgeG0gPSB4ICsgcjE7IC8vIHgtbWlkZGxlXG4gICAgdmFyIHltID0geSArIHIyOyAvLyB5LW1pZGRsZVxuXG4gICAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgICAgICBjYXNlIENPUk5FUi5UT1BfTEVGVDpcbiAgICAgICAgICAgIHJldHVybiBuZXcgX0JlemllckN1cnZlMi5kZWZhdWx0KG5ldyBfVmVjdG9yMi5kZWZhdWx0KHgsIHltKSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoeCwgeW0gLSBveSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KHhtIC0gb3gsIHkpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdCh4bSwgeSkpO1xuICAgICAgICBjYXNlIENPUk5FUi5UT1BfUklHSFQ6XG4gICAgICAgICAgICByZXR1cm4gbmV3IF9CZXppZXJDdXJ2ZTIuZGVmYXVsdChuZXcgX1ZlY3RvcjIuZGVmYXVsdCh4LCB5KSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoeCArIG94LCB5KSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoeG0sIHltIC0gb3kpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdCh4bSwgeW0pKTtcbiAgICAgICAgY2FzZSBDT1JORVIuQk9UVE9NX1JJR0hUOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBfQmV6aWVyQ3VydmUyLmRlZmF1bHQobmV3IF9WZWN0b3IyLmRlZmF1bHQoeG0sIHkpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdCh4bSwgeSArIG95KSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoeCArIG94LCB5bSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KHgsIHltKSk7XG4gICAgICAgIGNhc2UgQ09STkVSLkJPVFRPTV9MRUZUOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBfQmV6aWVyQ3VydmUyLmRlZmF1bHQobmV3IF9WZWN0b3IyLmRlZmF1bHQoeG0sIHltKSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoeG0gLSBveCwgeW0pLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdCh4LCB5ICsgb3kpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdCh4LCB5KSk7XG4gICAgfVxufTtcblxuLyoqKi8gfSksXG4vKiAzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9Db2xvciA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBfQ29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29sb3IpO1xuXG52YXIgX1V0aWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuXG52YXIgX2JhY2tncm91bmQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG52YXIgX2JvcmRlciA9IF9fd2VicGFja19yZXF1aXJlX18oMTIpO1xuXG52YXIgX2JvcmRlclJhZGl1cyA9IF9fd2VicGFja19yZXF1aXJlX18oMzMpO1xuXG52YXIgX2Rpc3BsYXkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM0KTtcblxudmFyIF9mbG9hdCA9IF9fd2VicGFja19yZXF1aXJlX18oMzUpO1xuXG52YXIgX2ZvbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM2KTtcblxudmFyIF9sZXR0ZXJTcGFjaW5nID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNyk7XG5cbnZhciBfbGluZUJyZWFrID0gX193ZWJwYWNrX3JlcXVpcmVfXygzOCk7XG5cbnZhciBfbGlzdFN0eWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4KTtcblxudmFyIF9tYXJnaW4gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM5KTtcblxudmFyIF9vdmVyZmxvdyA9IF9fd2VicGFja19yZXF1aXJlX18oNDApO1xuXG52YXIgX292ZXJmbG93V3JhcCA9IF9fd2VicGFja19yZXF1aXJlX18oMTgpO1xuXG52YXIgX3BhZGRpbmcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE3KTtcblxudmFyIF9wb3NpdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oMTkpO1xuXG52YXIgX3RleHREZWNvcmF0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSk7XG5cbnZhciBfdGV4dFNoYWRvdyA9IF9fd2VicGFja19yZXF1aXJlX18oNDEpO1xuXG52YXIgX3RleHRUcmFuc2Zvcm0gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIwKTtcblxudmFyIF90cmFuc2Zvcm0gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQyKTtcblxudmFyIF92aXNpYmlsaXR5ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0Myk7XG5cbnZhciBfd29yZEJyZWFrID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0NCk7XG5cbnZhciBfekluZGV4ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0NSk7XG5cbnZhciBfQm91bmRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxudmFyIF9JbnB1dCA9IF9fd2VicGFja19yZXF1aXJlX18oMjEpO1xuXG52YXIgX0xpc3RJdGVtID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBJTlBVVF9UQUdTID0gWydJTlBVVCcsICdURVhUQVJFQScsICdTRUxFQ1QnXTtcblxudmFyIE5vZGVDb250YWluZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTm9kZUNvbnRhaW5lcihub2RlLCBwYXJlbnQsIHJlc291cmNlTG9hZGVyLCBpbmRleCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOb2RlQ29udGFpbmVyKTtcblxuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy50YWdOYW1lID0gbm9kZS50YWdOYW1lO1xuICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgICAgIHRoaXMuY2hpbGROb2RlcyA9IFtdO1xuICAgICAgICB0aGlzLmxpc3RJdGVtcyA9IFtdO1xuICAgICAgICBpZiAodHlwZW9mIG5vZGUuc3RhcnQgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RTdGFydCA9IG5vZGUuc3RhcnQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRlZmF1bHRWaWV3ID0gbm9kZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuICAgICAgICB2YXIgc2Nyb2xsWCA9IGRlZmF1bHRWaWV3LnBhZ2VYT2Zmc2V0O1xuICAgICAgICB2YXIgc2Nyb2xsWSA9IGRlZmF1bHRWaWV3LnBhZ2VZT2Zmc2V0O1xuICAgICAgICB2YXIgc3R5bGUgPSBkZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKG5vZGUsIG51bGwpO1xuICAgICAgICB2YXIgZGlzcGxheSA9ICgwLCBfZGlzcGxheS5wYXJzZURpc3BsYXkpKHN0eWxlLmRpc3BsYXkpO1xuXG4gICAgICAgIHZhciBJU19JTlBVVCA9IG5vZGUudHlwZSA9PT0gJ3JhZGlvJyB8fCBub2RlLnR5cGUgPT09ICdjaGVja2JveCc7XG5cbiAgICAgICAgdmFyIHBvc2l0aW9uID0gKDAsIF9wb3NpdGlvbi5wYXJzZVBvc2l0aW9uKShzdHlsZS5wb3NpdGlvbik7XG5cbiAgICAgICAgdGhpcy5zdHlsZSA9IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IElTX0lOUFVUID8gX0lucHV0LklOUFVUX0JBQ0tHUk9VTkQgOiAoMCwgX2JhY2tncm91bmQucGFyc2VCYWNrZ3JvdW5kKShzdHlsZSwgcmVzb3VyY2VMb2FkZXIpLFxuICAgICAgICAgICAgYm9yZGVyOiBJU19JTlBVVCA/IF9JbnB1dC5JTlBVVF9CT1JERVJTIDogKDAsIF9ib3JkZXIucGFyc2VCb3JkZXIpKHN0eWxlKSxcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogKG5vZGUgaW5zdGFuY2VvZiBkZWZhdWx0Vmlldy5IVE1MSW5wdXRFbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSAmJiBJU19JTlBVVCA/ICgwLCBfSW5wdXQuZ2V0SW5wdXRCb3JkZXJSYWRpdXMpKG5vZGUpIDogKDAsIF9ib3JkZXJSYWRpdXMucGFyc2VCb3JkZXJSYWRpdXMpKHN0eWxlKSxcbiAgICAgICAgICAgIGNvbG9yOiBJU19JTlBVVCA/IF9JbnB1dC5JTlBVVF9DT0xPUiA6IG5ldyBfQ29sb3IyLmRlZmF1bHQoc3R5bGUuY29sb3IpLFxuICAgICAgICAgICAgZGlzcGxheTogZGlzcGxheSxcbiAgICAgICAgICAgIGZsb2F0OiAoMCwgX2Zsb2F0LnBhcnNlQ1NTRmxvYXQpKHN0eWxlLmZsb2F0KSxcbiAgICAgICAgICAgIGZvbnQ6ICgwLCBfZm9udC5wYXJzZUZvbnQpKHN0eWxlKSxcbiAgICAgICAgICAgIGxldHRlclNwYWNpbmc6ICgwLCBfbGV0dGVyU3BhY2luZy5wYXJzZUxldHRlclNwYWNpbmcpKHN0eWxlLmxldHRlclNwYWNpbmcpLFxuICAgICAgICAgICAgbGlzdFN0eWxlOiBkaXNwbGF5ID09PSBfZGlzcGxheS5ESVNQTEFZLkxJU1RfSVRFTSA/ICgwLCBfbGlzdFN0eWxlLnBhcnNlTGlzdFN0eWxlKShzdHlsZSkgOiBudWxsLFxuICAgICAgICAgICAgbGluZUJyZWFrOiAoMCwgX2xpbmVCcmVhay5wYXJzZUxpbmVCcmVhaykoc3R5bGUubGluZUJyZWFrKSxcbiAgICAgICAgICAgIG1hcmdpbjogKDAsIF9tYXJnaW4ucGFyc2VNYXJnaW4pKHN0eWxlKSxcbiAgICAgICAgICAgIG9wYWNpdHk6IHBhcnNlRmxvYXQoc3R5bGUub3BhY2l0eSksXG4gICAgICAgICAgICBvdmVyZmxvdzogSU5QVVRfVEFHUy5pbmRleE9mKG5vZGUudGFnTmFtZSkgPT09IC0xID8gKDAsIF9vdmVyZmxvdy5wYXJzZU92ZXJmbG93KShzdHlsZS5vdmVyZmxvdykgOiBfb3ZlcmZsb3cuT1ZFUkZMT1cuSElEREVOLFxuICAgICAgICAgICAgb3ZlcmZsb3dXcmFwOiAoMCwgX292ZXJmbG93V3JhcC5wYXJzZU92ZXJmbG93V3JhcCkoc3R5bGUub3ZlcmZsb3dXcmFwID8gc3R5bGUub3ZlcmZsb3dXcmFwIDogc3R5bGUud29yZFdyYXApLFxuICAgICAgICAgICAgcGFkZGluZzogKDAsIF9wYWRkaW5nLnBhcnNlUGFkZGluZykoc3R5bGUpLFxuICAgICAgICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxuICAgICAgICAgICAgdGV4dERlY29yYXRpb246ICgwLCBfdGV4dERlY29yYXRpb24ucGFyc2VUZXh0RGVjb3JhdGlvbikoc3R5bGUpLFxuICAgICAgICAgICAgdGV4dFNoYWRvdzogKDAsIF90ZXh0U2hhZG93LnBhcnNlVGV4dFNoYWRvdykoc3R5bGUudGV4dFNoYWRvdyksXG4gICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiAoMCwgX3RleHRUcmFuc2Zvcm0ucGFyc2VUZXh0VHJhbnNmb3JtKShzdHlsZS50ZXh0VHJhbnNmb3JtKSxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogKDAsIF90cmFuc2Zvcm0ucGFyc2VUcmFuc2Zvcm0pKHN0eWxlKSxcbiAgICAgICAgICAgIHZpc2liaWxpdHk6ICgwLCBfdmlzaWJpbGl0eS5wYXJzZVZpc2liaWxpdHkpKHN0eWxlLnZpc2liaWxpdHkpLFxuICAgICAgICAgICAgd29yZEJyZWFrOiAoMCwgX3dvcmRCcmVhay5wYXJzZVdvcmRCcmVhaykoc3R5bGUud29yZEJyZWFrKSxcbiAgICAgICAgICAgIHpJbmRleDogKDAsIF96SW5kZXgucGFyc2VaSW5kZXgpKHBvc2l0aW9uICE9PSBfcG9zaXRpb24uUE9TSVRJT04uU1RBVElDID8gc3R5bGUuekluZGV4IDogJ2F1dG8nKVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0aGlzLmlzVHJhbnNmb3JtZWQoKSkge1xuICAgICAgICAgICAgLy8gZ2V0Qm91bmRpbmdDbGllbnRSZWN0IHByb3ZpZGVzIHZhbHVlcyBwb3N0LXRyYW5zZm9ybSwgd2Ugd2FudCB0aGVtIHdpdGhvdXQgdGhlIHRyYW5zZm9ybWF0aW9uXG4gICAgICAgICAgICBub2RlLnN0eWxlLnRyYW5zZm9ybSA9ICdtYXRyaXgoMSwwLDAsMSwwLDApJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkaXNwbGF5ID09PSBfZGlzcGxheS5ESVNQTEFZLkxJU1RfSVRFTSkge1xuICAgICAgICAgICAgdmFyIGxpc3RPd25lciA9ICgwLCBfTGlzdEl0ZW0uZ2V0TGlzdE93bmVyKSh0aGlzKTtcbiAgICAgICAgICAgIGlmIChsaXN0T3duZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGlzdEluZGV4ID0gbGlzdE93bmVyLmxpc3RJdGVtcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgbGlzdE93bmVyLmxpc3RJdGVtcy5wdXNoKHRoaXMpO1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdEluZGV4ID0gbm9kZS5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykgJiYgdHlwZW9mIG5vZGUudmFsdWUgPT09ICdudW1iZXInID8gbm9kZS52YWx1ZSA6IGxpc3RJbmRleCA9PT0gMCA/IHR5cGVvZiBsaXN0T3duZXIubGlzdFN0YXJ0ID09PSAnbnVtYmVyJyA/IGxpc3RPd25lci5saXN0U3RhcnQgOiAxIDogbGlzdE93bmVyLmxpc3RJdGVtc1tsaXN0SW5kZXggLSAxXS5saXN0SW5kZXggKyAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVE9ETyBtb3ZlIGJvdW5kIHJldHJpZXZhbCBmb3IgYWxsIG5vZGVzIHRvIGEgbGF0ZXIgc3RhZ2U/XG4gICAgICAgIGlmIChub2RlLnRhZ05hbWUgPT09ICdJTUcnKSB7XG4gICAgICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYm91bmRzID0gKDAsIF9Cb3VuZHMucGFyc2VCb3VuZHMpKG5vZGUsIHNjcm9sbFgsIHNjcm9sbFkpO1xuICAgICAgICAgICAgICAgIF90aGlzLmN1cnZlZEJvdW5kcyA9ICgwLCBfQm91bmRzLnBhcnNlQm91bmRDdXJ2ZXMpKF90aGlzLmJvdW5kcywgX3RoaXMuc3R5bGUuYm9yZGVyLCBfdGhpcy5zdHlsZS5ib3JkZXJSYWRpdXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbWFnZSA9IGdldEltYWdlKG5vZGUsIHJlc291cmNlTG9hZGVyKTtcbiAgICAgICAgdGhpcy5ib3VuZHMgPSBJU19JTlBVVCA/ICgwLCBfSW5wdXQucmVmb3JtYXRJbnB1dEJvdW5kcykoKDAsIF9Cb3VuZHMucGFyc2VCb3VuZHMpKG5vZGUsIHNjcm9sbFgsIHNjcm9sbFkpKSA6ICgwLCBfQm91bmRzLnBhcnNlQm91bmRzKShub2RlLCBzY3JvbGxYLCBzY3JvbGxZKTtcbiAgICAgICAgdGhpcy5jdXJ2ZWRCb3VuZHMgPSAoMCwgX0JvdW5kcy5wYXJzZUJvdW5kQ3VydmVzKSh0aGlzLmJvdW5kcywgdGhpcy5zdHlsZS5ib3JkZXIsIHRoaXMuc3R5bGUuYm9yZGVyUmFkaXVzKTtcblxuICAgICAgICBpZiAodHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5uYW1lID0gJycgKyBub2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSArIChub2RlLmlkID8gJyMnICsgbm9kZS5pZCA6ICcnKSArIG5vZGUuY2xhc3NOYW1lLnRvU3RyaW5nKCkuc3BsaXQoJyAnKS5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcy5sZW5ndGggPyAnLicgKyBzIDogJyc7XG4gICAgICAgICAgICB9KS5qb2luKCcnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhOb2RlQ29udGFpbmVyLCBbe1xuICAgICAgICBrZXk6ICdnZXRDbGlwUGF0aHMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q2xpcFBhdGhzKCkge1xuICAgICAgICAgICAgdmFyIHBhcmVudENsaXBzID0gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5nZXRDbGlwUGF0aHMoKSA6IFtdO1xuICAgICAgICAgICAgdmFyIGlzQ2xpcHBlZCA9IHRoaXMuc3R5bGUub3ZlcmZsb3cgIT09IF9vdmVyZmxvdy5PVkVSRkxPVy5WSVNJQkxFO1xuXG4gICAgICAgICAgICByZXR1cm4gaXNDbGlwcGVkID8gcGFyZW50Q2xpcHMuY29uY2F0KFsoMCwgX0JvdW5kcy5jYWxjdWxhdGVQYWRkaW5nQm94UGF0aCkodGhpcy5jdXJ2ZWRCb3VuZHMpXSkgOiBwYXJlbnRDbGlwcztcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaXNJbkZsb3cnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaXNJbkZsb3coKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc1Jvb3RFbGVtZW50KCkgJiYgIXRoaXMuaXNGbG9hdGluZygpICYmICF0aGlzLmlzQWJzb2x1dGVseVBvc2l0aW9uZWQoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaXNWaXNpYmxlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzVmlzaWJsZSgpIHtcbiAgICAgICAgICAgIHJldHVybiAhKDAsIF9VdGlsLmNvbnRhaW5zKSh0aGlzLnN0eWxlLmRpc3BsYXksIF9kaXNwbGF5LkRJU1BMQVkuTk9ORSkgJiYgdGhpcy5zdHlsZS5vcGFjaXR5ID4gMCAmJiB0aGlzLnN0eWxlLnZpc2liaWxpdHkgPT09IF92aXNpYmlsaXR5LlZJU0lCSUxJVFkuVklTSUJMRTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaXNBYnNvbHV0ZWx5UG9zaXRpb25lZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc0Fic29sdXRlbHlQb3NpdGlvbmVkKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3R5bGUucG9zaXRpb24gIT09IF9wb3NpdGlvbi5QT1NJVElPTi5TVEFUSUMgJiYgdGhpcy5zdHlsZS5wb3NpdGlvbiAhPT0gX3Bvc2l0aW9uLlBPU0lUSU9OLlJFTEFUSVZFO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdpc1Bvc2l0aW9uZWQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaXNQb3NpdGlvbmVkKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3R5bGUucG9zaXRpb24gIT09IF9wb3NpdGlvbi5QT1NJVElPTi5TVEFUSUM7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2lzRmxvYXRpbmcnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaXNGbG9hdGluZygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0eWxlLmZsb2F0ICE9PSBfZmxvYXQuRkxPQVQuTk9ORTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaXNSb290RWxlbWVudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc1Jvb3RFbGVtZW50KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50ID09PSBudWxsO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdpc1RyYW5zZm9ybWVkJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzVHJhbnNmb3JtZWQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdHlsZS50cmFuc2Zvcm0gIT09IG51bGw7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2lzUG9zaXRpb25lZFdpdGhaSW5kZXgnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaXNQb3NpdGlvbmVkV2l0aFpJbmRleCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzUG9zaXRpb25lZCgpICYmICF0aGlzLnN0eWxlLnpJbmRleC5hdXRvO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdpc0lubGluZUxldmVsJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzSW5saW5lTGV2ZWwoKSB7XG4gICAgICAgICAgICByZXR1cm4gKDAsIF9VdGlsLmNvbnRhaW5zKSh0aGlzLnN0eWxlLmRpc3BsYXksIF9kaXNwbGF5LkRJU1BMQVkuSU5MSU5FKSB8fCAoMCwgX1V0aWwuY29udGFpbnMpKHRoaXMuc3R5bGUuZGlzcGxheSwgX2Rpc3BsYXkuRElTUExBWS5JTkxJTkVfQkxPQ0spIHx8ICgwLCBfVXRpbC5jb250YWlucykodGhpcy5zdHlsZS5kaXNwbGF5LCBfZGlzcGxheS5ESVNQTEFZLklOTElORV9GTEVYKSB8fCAoMCwgX1V0aWwuY29udGFpbnMpKHRoaXMuc3R5bGUuZGlzcGxheSwgX2Rpc3BsYXkuRElTUExBWS5JTkxJTkVfR1JJRCkgfHwgKDAsIF9VdGlsLmNvbnRhaW5zKSh0aGlzLnN0eWxlLmRpc3BsYXksIF9kaXNwbGF5LkRJU1BMQVkuSU5MSU5FX0xJU1RfSVRFTSkgfHwgKDAsIF9VdGlsLmNvbnRhaW5zKSh0aGlzLnN0eWxlLmRpc3BsYXksIF9kaXNwbGF5LkRJU1BMQVkuSU5MSU5FX1RBQkxFKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaXNJbmxpbmVCbG9ja09ySW5saW5lVGFibGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaXNJbmxpbmVCbG9ja09ySW5saW5lVGFibGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gKDAsIF9VdGlsLmNvbnRhaW5zKSh0aGlzLnN0eWxlLmRpc3BsYXksIF9kaXNwbGF5LkRJU1BMQVkuSU5MSU5FX0JMT0NLKSB8fCAoMCwgX1V0aWwuY29udGFpbnMpKHRoaXMuc3R5bGUuZGlzcGxheSwgX2Rpc3BsYXkuRElTUExBWS5JTkxJTkVfVEFCTEUpO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIE5vZGVDb250YWluZXI7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE5vZGVDb250YWluZXI7XG5cblxudmFyIGdldEltYWdlID0gZnVuY3Rpb24gZ2V0SW1hZ2Uobm9kZSwgcmVzb3VyY2VMb2FkZXIpIHtcbiAgICBpZiAobm9kZSBpbnN0YW5jZW9mIG5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5TVkdTVkdFbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBTVkdTVkdFbGVtZW50KSB7XG4gICAgICAgIHZhciBzID0gbmV3IFhNTFNlcmlhbGl6ZXIoKTtcbiAgICAgICAgcmV0dXJuIHJlc291cmNlTG9hZGVyLmxvYWRJbWFnZSgnZGF0YTppbWFnZS9zdmcreG1sLCcgKyBlbmNvZGVVUklDb21wb25lbnQocy5zZXJpYWxpemVUb1N0cmluZyhub2RlKSkpO1xuICAgIH1cbiAgICBzd2l0Y2ggKG5vZGUudGFnTmFtZSkge1xuICAgICAgICBjYXNlICdJTUcnOlxuICAgICAgICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgICAgICAgdmFyIGltZyA9IG5vZGU7XG4gICAgICAgICAgICByZXR1cm4gcmVzb3VyY2VMb2FkZXIubG9hZEltYWdlKGltZy5jdXJyZW50U3JjIHx8IGltZy5zcmMpO1xuICAgICAgICBjYXNlICdDQU5WQVMnOlxuICAgICAgICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgICAgICAgdmFyIGNhbnZhcyA9IG5vZGU7XG4gICAgICAgICAgICByZXR1cm4gcmVzb3VyY2VMb2FkZXIubG9hZENhbnZhcyhjYW52YXMpO1xuICAgICAgICBjYXNlICdJRlJBTUUnOlxuICAgICAgICAgICAgdmFyIGlmcmFtZUtleSA9IG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWh0bWwyY2FudmFzLWludGVybmFsLWlmcmFtZS1rZXknKTtcbiAgICAgICAgICAgIGlmIChpZnJhbWVLZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWZyYW1lS2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG4vKioqLyB9KSxcbi8qIDQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xudmFyIGNvbnRhaW5zID0gZXhwb3J0cy5jb250YWlucyA9IGZ1bmN0aW9uIGNvbnRhaW5zKGJpdCwgdmFsdWUpIHtcbiAgICByZXR1cm4gKGJpdCAmIHZhbHVlKSAhPT0gMDtcbn07XG5cbnZhciBkaXN0YW5jZSA9IGV4cG9ydHMuZGlzdGFuY2UgPSBmdW5jdGlvbiBkaXN0YW5jZShhLCBiKSB7XG4gICAgcmV0dXJuIE1hdGguc3FydChhICogYSArIGIgKiBiKTtcbn07XG5cbnZhciBjb3B5Q1NTU3R5bGVzID0gZXhwb3J0cy5jb3B5Q1NTU3R5bGVzID0gZnVuY3Rpb24gY29weUNTU1N0eWxlcyhzdHlsZSwgdGFyZ2V0KSB7XG4gICAgLy8gRWRnZSBkb2VzIG5vdCBwcm92aWRlIHZhbHVlIGZvciBjc3NUZXh0XG4gICAgZm9yICh2YXIgaSA9IHN0eWxlLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIHZhciBwcm9wZXJ0eSA9IHN0eWxlLml0ZW0oaSk7XG4gICAgICAgIC8vIFNhZmFyaSBzaG93cyBwc2V1ZG9lbGVtZW50cyBpZiBjb250ZW50IGlzIHNldFxuICAgICAgICBpZiAocHJvcGVydHkgIT09ICdjb250ZW50Jykge1xuICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLnNldFByb3BlcnR5KHByb3BlcnR5LCBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKHByb3BlcnR5KSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn07XG5cbnZhciBTTUFMTF9JTUFHRSA9IGV4cG9ydHMuU01BTExfSU1BR0UgPSAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3JztcblxuLyoqKi8gfSksXG4vKiA1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucGFyc2VCYWNrZ3JvdW5kSW1hZ2UgPSBleHBvcnRzLnBhcnNlQmFja2dyb3VuZCA9IGV4cG9ydHMuY2FsY3VsYXRlQmFja2dyb3VuZFJlcGVhdFBhdGggPSBleHBvcnRzLmNhbGN1bGF0ZUJhY2tncm91bmRQb3NpdGlvbiA9IGV4cG9ydHMuY2FsY3VsYXRlQmFja2dyb3VuZ1Bvc2l0aW9uaW5nQXJlYSA9IGV4cG9ydHMuY2FsY3VsYXRlQmFja2dyb3VuZ1BhaW50aW5nQXJlYSA9IGV4cG9ydHMuY2FsY3VsYXRlR3JhZGllbnRCYWNrZ3JvdW5kU2l6ZSA9IGV4cG9ydHMuY2FsY3VsYXRlQmFja2dyb3VuZFNpemUgPSBleHBvcnRzLkJBQ0tHUk9VTkRfT1JJR0lOID0gZXhwb3J0cy5CQUNLR1JPVU5EX0NMSVAgPSBleHBvcnRzLkJBQ0tHUk9VTkRfU0laRSA9IGV4cG9ydHMuQkFDS0dST1VORF9SRVBFQVQgPSB1bmRlZmluZWQ7XG5cbnZhciBfQ29sb3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgX0NvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvbG9yKTtcblxudmFyIF9MZW5ndGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG52YXIgX0xlbmd0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MZW5ndGgpO1xuXG52YXIgX1NpemUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMxKTtcblxudmFyIF9TaXplMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1NpemUpO1xuXG52YXIgX1ZlY3RvciA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG5cbnZhciBfVmVjdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1ZlY3Rvcik7XG5cbnZhciBfQm91bmRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxudmFyIF9wYWRkaW5nID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBCQUNLR1JPVU5EX1JFUEVBVCA9IGV4cG9ydHMuQkFDS0dST1VORF9SRVBFQVQgPSB7XG4gICAgUkVQRUFUOiAwLFxuICAgIE5PX1JFUEVBVDogMSxcbiAgICBSRVBFQVRfWDogMixcbiAgICBSRVBFQVRfWTogM1xufTtcblxudmFyIEJBQ0tHUk9VTkRfU0laRSA9IGV4cG9ydHMuQkFDS0dST1VORF9TSVpFID0ge1xuICAgIEFVVE86IDAsXG4gICAgQ09OVEFJTjogMSxcbiAgICBDT1ZFUjogMixcbiAgICBMRU5HVEg6IDNcbn07XG5cbnZhciBCQUNLR1JPVU5EX0NMSVAgPSBleHBvcnRzLkJBQ0tHUk9VTkRfQ0xJUCA9IHtcbiAgICBCT1JERVJfQk9YOiAwLFxuICAgIFBBRERJTkdfQk9YOiAxLFxuICAgIENPTlRFTlRfQk9YOiAyXG59O1xuXG52YXIgQkFDS0dST1VORF9PUklHSU4gPSBleHBvcnRzLkJBQ0tHUk9VTkRfT1JJR0lOID0gQkFDS0dST1VORF9DTElQO1xuXG52YXIgQVVUTyA9ICdhdXRvJztcblxudmFyIEJhY2tncm91bmRTaXplID0gZnVuY3Rpb24gQmFja2dyb3VuZFNpemUoc2l6ZSkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCYWNrZ3JvdW5kU2l6ZSk7XG5cbiAgICBzd2l0Y2ggKHNpemUpIHtcbiAgICAgICAgY2FzZSAnY29udGFpbic6XG4gICAgICAgICAgICB0aGlzLnNpemUgPSBCQUNLR1JPVU5EX1NJWkUuQ09OVEFJTjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjb3Zlcic6XG4gICAgICAgICAgICB0aGlzLnNpemUgPSBCQUNLR1JPVU5EX1NJWkUuQ09WRVI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXV0byc6XG4gICAgICAgICAgICB0aGlzLnNpemUgPSBCQUNLR1JPVU5EX1NJWkUuQVVUTztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IG5ldyBfTGVuZ3RoMi5kZWZhdWx0KHNpemUpO1xuICAgIH1cbn07XG5cbnZhciBjYWxjdWxhdGVCYWNrZ3JvdW5kU2l6ZSA9IGV4cG9ydHMuY2FsY3VsYXRlQmFja2dyb3VuZFNpemUgPSBmdW5jdGlvbiBjYWxjdWxhdGVCYWNrZ3JvdW5kU2l6ZShiYWNrZ3JvdW5kSW1hZ2UsIGltYWdlLCBib3VuZHMpIHtcbiAgICB2YXIgd2lkdGggPSAwO1xuICAgIHZhciBoZWlnaHQgPSAwO1xuICAgIHZhciBzaXplID0gYmFja2dyb3VuZEltYWdlLnNpemU7XG4gICAgaWYgKHNpemVbMF0uc2l6ZSA9PT0gQkFDS0dST1VORF9TSVpFLkNPTlRBSU4gfHwgc2l6ZVswXS5zaXplID09PSBCQUNLR1JPVU5EX1NJWkUuQ09WRVIpIHtcbiAgICAgICAgdmFyIHRhcmdldFJhdGlvID0gYm91bmRzLndpZHRoIC8gYm91bmRzLmhlaWdodDtcbiAgICAgICAgdmFyIGN1cnJlbnRSYXRpbyA9IGltYWdlLndpZHRoIC8gaW1hZ2UuaGVpZ2h0O1xuICAgICAgICByZXR1cm4gdGFyZ2V0UmF0aW8gPCBjdXJyZW50UmF0aW8gIT09IChzaXplWzBdLnNpemUgPT09IEJBQ0tHUk9VTkRfU0laRS5DT1ZFUikgPyBuZXcgX1NpemUyLmRlZmF1bHQoYm91bmRzLndpZHRoLCBib3VuZHMud2lkdGggLyBjdXJyZW50UmF0aW8pIDogbmV3IF9TaXplMi5kZWZhdWx0KGJvdW5kcy5oZWlnaHQgKiBjdXJyZW50UmF0aW8sIGJvdW5kcy5oZWlnaHQpO1xuICAgIH1cblxuICAgIGlmIChzaXplWzBdLnZhbHVlKSB7XG4gICAgICAgIHdpZHRoID0gc2l6ZVswXS52YWx1ZS5nZXRBYnNvbHV0ZVZhbHVlKGJvdW5kcy53aWR0aCk7XG4gICAgfVxuXG4gICAgaWYgKHNpemVbMF0uc2l6ZSA9PT0gQkFDS0dST1VORF9TSVpFLkFVVE8gJiYgc2l6ZVsxXS5zaXplID09PSBCQUNLR1JPVU5EX1NJWkUuQVVUTykge1xuICAgICAgICBoZWlnaHQgPSBpbWFnZS5oZWlnaHQ7XG4gICAgfSBlbHNlIGlmIChzaXplWzFdLnNpemUgPT09IEJBQ0tHUk9VTkRfU0laRS5BVVRPKSB7XG4gICAgICAgIGhlaWdodCA9IHdpZHRoIC8gaW1hZ2Uud2lkdGggKiBpbWFnZS5oZWlnaHQ7XG4gICAgfSBlbHNlIGlmIChzaXplWzFdLnZhbHVlKSB7XG4gICAgICAgIGhlaWdodCA9IHNpemVbMV0udmFsdWUuZ2V0QWJzb2x1dGVWYWx1ZShib3VuZHMuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBpZiAoc2l6ZVswXS5zaXplID09PSBCQUNLR1JPVU5EX1NJWkUuQVVUTykge1xuICAgICAgICB3aWR0aCA9IGhlaWdodCAvIGltYWdlLmhlaWdodCAqIGltYWdlLndpZHRoO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgX1NpemUyLmRlZmF1bHQod2lkdGgsIGhlaWdodCk7XG59O1xuXG52YXIgY2FsY3VsYXRlR3JhZGllbnRCYWNrZ3JvdW5kU2l6ZSA9IGV4cG9ydHMuY2FsY3VsYXRlR3JhZGllbnRCYWNrZ3JvdW5kU2l6ZSA9IGZ1bmN0aW9uIGNhbGN1bGF0ZUdyYWRpZW50QmFja2dyb3VuZFNpemUoYmFja2dyb3VuZEltYWdlLCBib3VuZHMpIHtcbiAgICB2YXIgc2l6ZSA9IGJhY2tncm91bmRJbWFnZS5zaXplO1xuICAgIHZhciB3aWR0aCA9IHNpemVbMF0udmFsdWUgPyBzaXplWzBdLnZhbHVlLmdldEFic29sdXRlVmFsdWUoYm91bmRzLndpZHRoKSA6IGJvdW5kcy53aWR0aDtcbiAgICB2YXIgaGVpZ2h0ID0gc2l6ZVsxXS52YWx1ZSA/IHNpemVbMV0udmFsdWUuZ2V0QWJzb2x1dGVWYWx1ZShib3VuZHMuaGVpZ2h0KSA6IHNpemVbMF0udmFsdWUgPyB3aWR0aCA6IGJvdW5kcy5oZWlnaHQ7XG5cbiAgICByZXR1cm4gbmV3IF9TaXplMi5kZWZhdWx0KHdpZHRoLCBoZWlnaHQpO1xufTtcblxudmFyIEFVVE9fU0laRSA9IG5ldyBCYWNrZ3JvdW5kU2l6ZShBVVRPKTtcblxudmFyIGNhbGN1bGF0ZUJhY2tncm91bmdQYWludGluZ0FyZWEgPSBleHBvcnRzLmNhbGN1bGF0ZUJhY2tncm91bmdQYWludGluZ0FyZWEgPSBmdW5jdGlvbiBjYWxjdWxhdGVCYWNrZ3JvdW5nUGFpbnRpbmdBcmVhKGN1cnZlcywgY2xpcCkge1xuICAgIHN3aXRjaCAoY2xpcCkge1xuICAgICAgICBjYXNlIEJBQ0tHUk9VTkRfQ0xJUC5CT1JERVJfQk9YOlxuICAgICAgICAgICAgcmV0dXJuICgwLCBfQm91bmRzLmNhbGN1bGF0ZUJvcmRlckJveFBhdGgpKGN1cnZlcyk7XG4gICAgICAgIGNhc2UgQkFDS0dST1VORF9DTElQLlBBRERJTkdfQk9YOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuICgwLCBfQm91bmRzLmNhbGN1bGF0ZVBhZGRpbmdCb3hQYXRoKShjdXJ2ZXMpO1xuICAgIH1cbn07XG5cbnZhciBjYWxjdWxhdGVCYWNrZ3JvdW5nUG9zaXRpb25pbmdBcmVhID0gZXhwb3J0cy5jYWxjdWxhdGVCYWNrZ3JvdW5nUG9zaXRpb25pbmdBcmVhID0gZnVuY3Rpb24gY2FsY3VsYXRlQmFja2dyb3VuZ1Bvc2l0aW9uaW5nQXJlYShiYWNrZ3JvdW5kT3JpZ2luLCBib3VuZHMsIHBhZGRpbmcsIGJvcmRlcikge1xuICAgIHZhciBwYWRkaW5nQm94ID0gKDAsIF9Cb3VuZHMuY2FsY3VsYXRlUGFkZGluZ0JveCkoYm91bmRzLCBib3JkZXIpO1xuXG4gICAgc3dpdGNoIChiYWNrZ3JvdW5kT3JpZ2luKSB7XG4gICAgICAgIGNhc2UgQkFDS0dST1VORF9PUklHSU4uQk9SREVSX0JPWDpcbiAgICAgICAgICAgIHJldHVybiBib3VuZHM7XG4gICAgICAgIGNhc2UgQkFDS0dST1VORF9PUklHSU4uQ09OVEVOVF9CT1g6XG4gICAgICAgICAgICB2YXIgcGFkZGluZ0xlZnQgPSBwYWRkaW5nW19wYWRkaW5nLlBBRERJTkdfU0lERVMuTEVGVF0uZ2V0QWJzb2x1dGVWYWx1ZShib3VuZHMud2lkdGgpO1xuICAgICAgICAgICAgdmFyIHBhZGRpbmdSaWdodCA9IHBhZGRpbmdbX3BhZGRpbmcuUEFERElOR19TSURFUy5SSUdIVF0uZ2V0QWJzb2x1dGVWYWx1ZShib3VuZHMud2lkdGgpO1xuICAgICAgICAgICAgdmFyIHBhZGRpbmdUb3AgPSBwYWRkaW5nW19wYWRkaW5nLlBBRERJTkdfU0lERVMuVE9QXS5nZXRBYnNvbHV0ZVZhbHVlKGJvdW5kcy53aWR0aCk7XG4gICAgICAgICAgICB2YXIgcGFkZGluZ0JvdHRvbSA9IHBhZGRpbmdbX3BhZGRpbmcuUEFERElOR19TSURFUy5CT1RUT01dLmdldEFic29sdXRlVmFsdWUoYm91bmRzLndpZHRoKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgX0JvdW5kcy5Cb3VuZHMocGFkZGluZ0JveC5sZWZ0ICsgcGFkZGluZ0xlZnQsIHBhZGRpbmdCb3gudG9wICsgcGFkZGluZ1RvcCwgcGFkZGluZ0JveC53aWR0aCAtIHBhZGRpbmdMZWZ0IC0gcGFkZGluZ1JpZ2h0LCBwYWRkaW5nQm94LmhlaWdodCAtIHBhZGRpbmdUb3AgLSBwYWRkaW5nQm90dG9tKTtcbiAgICAgICAgY2FzZSBCQUNLR1JPVU5EX09SSUdJTi5QQURESU5HX0JPWDpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBwYWRkaW5nQm94O1xuICAgIH1cbn07XG5cbnZhciBjYWxjdWxhdGVCYWNrZ3JvdW5kUG9zaXRpb24gPSBleHBvcnRzLmNhbGN1bGF0ZUJhY2tncm91bmRQb3NpdGlvbiA9IGZ1bmN0aW9uIGNhbGN1bGF0ZUJhY2tncm91bmRQb3NpdGlvbihwb3NpdGlvbiwgc2l6ZSwgYm91bmRzKSB7XG4gICAgcmV0dXJuIG5ldyBfVmVjdG9yMi5kZWZhdWx0KHBvc2l0aW9uWzBdLmdldEFic29sdXRlVmFsdWUoYm91bmRzLndpZHRoIC0gc2l6ZS53aWR0aCksIHBvc2l0aW9uWzFdLmdldEFic29sdXRlVmFsdWUoYm91bmRzLmhlaWdodCAtIHNpemUuaGVpZ2h0KSk7XG59O1xuXG52YXIgY2FsY3VsYXRlQmFja2dyb3VuZFJlcGVhdFBhdGggPSBleHBvcnRzLmNhbGN1bGF0ZUJhY2tncm91bmRSZXBlYXRQYXRoID0gZnVuY3Rpb24gY2FsY3VsYXRlQmFja2dyb3VuZFJlcGVhdFBhdGgoYmFja2dyb3VuZCwgcG9zaXRpb24sIHNpemUsIGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEsIGJvdW5kcykge1xuICAgIHZhciByZXBlYXQgPSBiYWNrZ3JvdW5kLnJlcGVhdDtcbiAgICBzd2l0Y2ggKHJlcGVhdCkge1xuICAgICAgICBjYXNlIEJBQ0tHUk9VTkRfUkVQRUFULlJFUEVBVF9YOlxuICAgICAgICAgICAgcmV0dXJuIFtuZXcgX1ZlY3RvcjIuZGVmYXVsdChNYXRoLnJvdW5kKGJvdW5kcy5sZWZ0KSwgTWF0aC5yb3VuZChiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhLnRvcCArIHBvc2l0aW9uLnkpKSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoTWF0aC5yb3VuZChib3VuZHMubGVmdCArIGJvdW5kcy53aWR0aCksIE1hdGgucm91bmQoYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYS50b3AgKyBwb3NpdGlvbi55KSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KE1hdGgucm91bmQoYm91bmRzLmxlZnQgKyBib3VuZHMud2lkdGgpLCBNYXRoLnJvdW5kKHNpemUuaGVpZ2h0ICsgYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYS50b3AgKyBwb3NpdGlvbi55KSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KE1hdGgucm91bmQoYm91bmRzLmxlZnQpLCBNYXRoLnJvdW5kKHNpemUuaGVpZ2h0ICsgYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYS50b3AgKyBwb3NpdGlvbi55KSldO1xuICAgICAgICBjYXNlIEJBQ0tHUk9VTkRfUkVQRUFULlJFUEVBVF9ZOlxuICAgICAgICAgICAgcmV0dXJuIFtuZXcgX1ZlY3RvcjIuZGVmYXVsdChNYXRoLnJvdW5kKGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEubGVmdCArIHBvc2l0aW9uLngpLCBNYXRoLnJvdW5kKGJvdW5kcy50b3ApKSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoTWF0aC5yb3VuZChiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhLmxlZnQgKyBwb3NpdGlvbi54ICsgc2l6ZS53aWR0aCksIE1hdGgucm91bmQoYm91bmRzLnRvcCkpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdChNYXRoLnJvdW5kKGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEubGVmdCArIHBvc2l0aW9uLnggKyBzaXplLndpZHRoKSwgTWF0aC5yb3VuZChib3VuZHMuaGVpZ2h0ICsgYm91bmRzLnRvcCkpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdChNYXRoLnJvdW5kKGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEubGVmdCArIHBvc2l0aW9uLngpLCBNYXRoLnJvdW5kKGJvdW5kcy5oZWlnaHQgKyBib3VuZHMudG9wKSldO1xuICAgICAgICBjYXNlIEJBQ0tHUk9VTkRfUkVQRUFULk5PX1JFUEVBVDpcbiAgICAgICAgICAgIHJldHVybiBbbmV3IF9WZWN0b3IyLmRlZmF1bHQoTWF0aC5yb3VuZChiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhLmxlZnQgKyBwb3NpdGlvbi54KSwgTWF0aC5yb3VuZChiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhLnRvcCArIHBvc2l0aW9uLnkpKSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoTWF0aC5yb3VuZChiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhLmxlZnQgKyBwb3NpdGlvbi54ICsgc2l6ZS53aWR0aCksIE1hdGgucm91bmQoYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYS50b3AgKyBwb3NpdGlvbi55KSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KE1hdGgucm91bmQoYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYS5sZWZ0ICsgcG9zaXRpb24ueCArIHNpemUud2lkdGgpLCBNYXRoLnJvdW5kKGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEudG9wICsgcG9zaXRpb24ueSArIHNpemUuaGVpZ2h0KSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KE1hdGgucm91bmQoYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYS5sZWZ0ICsgcG9zaXRpb24ueCksIE1hdGgucm91bmQoYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYS50b3AgKyBwb3NpdGlvbi55ICsgc2l6ZS5oZWlnaHQpKV07XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gW25ldyBfVmVjdG9yMi5kZWZhdWx0KE1hdGgucm91bmQoYm91bmRzLmxlZnQpLCBNYXRoLnJvdW5kKGJvdW5kcy50b3ApKSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoTWF0aC5yb3VuZChib3VuZHMubGVmdCArIGJvdW5kcy53aWR0aCksIE1hdGgucm91bmQoYm91bmRzLnRvcCkpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdChNYXRoLnJvdW5kKGJvdW5kcy5sZWZ0ICsgYm91bmRzLndpZHRoKSwgTWF0aC5yb3VuZChib3VuZHMuaGVpZ2h0ICsgYm91bmRzLnRvcCkpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdChNYXRoLnJvdW5kKGJvdW5kcy5sZWZ0KSwgTWF0aC5yb3VuZChib3VuZHMuaGVpZ2h0ICsgYm91bmRzLnRvcCkpXTtcbiAgICB9XG59O1xuXG52YXIgcGFyc2VCYWNrZ3JvdW5kID0gZXhwb3J0cy5wYXJzZUJhY2tncm91bmQgPSBmdW5jdGlvbiBwYXJzZUJhY2tncm91bmQoc3R5bGUsIHJlc291cmNlTG9hZGVyKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBuZXcgX0NvbG9yMi5kZWZhdWx0KHN0eWxlLmJhY2tncm91bmRDb2xvciksXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogcGFyc2VCYWNrZ3JvdW5kSW1hZ2VzKHN0eWxlLCByZXNvdXJjZUxvYWRlciksXG4gICAgICAgIGJhY2tncm91bmRDbGlwOiBwYXJzZUJhY2tncm91bmRDbGlwKHN0eWxlLmJhY2tncm91bmRDbGlwKSxcbiAgICAgICAgYmFja2dyb3VuZE9yaWdpbjogcGFyc2VCYWNrZ3JvdW5kT3JpZ2luKHN0eWxlLmJhY2tncm91bmRPcmlnaW4pXG4gICAgfTtcbn07XG5cbnZhciBwYXJzZUJhY2tncm91bmRDbGlwID0gZnVuY3Rpb24gcGFyc2VCYWNrZ3JvdW5kQ2xpcChiYWNrZ3JvdW5kQ2xpcCkge1xuICAgIHN3aXRjaCAoYmFja2dyb3VuZENsaXApIHtcbiAgICAgICAgY2FzZSAncGFkZGluZy1ib3gnOlxuICAgICAgICAgICAgcmV0dXJuIEJBQ0tHUk9VTkRfQ0xJUC5QQURESU5HX0JPWDtcbiAgICAgICAgY2FzZSAnY29udGVudC1ib3gnOlxuICAgICAgICAgICAgcmV0dXJuIEJBQ0tHUk9VTkRfQ0xJUC5DT05URU5UX0JPWDtcbiAgICB9XG4gICAgcmV0dXJuIEJBQ0tHUk9VTkRfQ0xJUC5CT1JERVJfQk9YO1xufTtcblxudmFyIHBhcnNlQmFja2dyb3VuZE9yaWdpbiA9IGZ1bmN0aW9uIHBhcnNlQmFja2dyb3VuZE9yaWdpbihiYWNrZ3JvdW5kT3JpZ2luKSB7XG4gICAgc3dpdGNoIChiYWNrZ3JvdW5kT3JpZ2luKSB7XG4gICAgICAgIGNhc2UgJ3BhZGRpbmctYm94JzpcbiAgICAgICAgICAgIHJldHVybiBCQUNLR1JPVU5EX09SSUdJTi5QQURESU5HX0JPWDtcbiAgICAgICAgY2FzZSAnY29udGVudC1ib3gnOlxuICAgICAgICAgICAgcmV0dXJuIEJBQ0tHUk9VTkRfT1JJR0lOLkNPTlRFTlRfQk9YO1xuICAgIH1cbiAgICByZXR1cm4gQkFDS0dST1VORF9PUklHSU4uQk9SREVSX0JPWDtcbn07XG5cbnZhciBwYXJzZUJhY2tncm91bmRSZXBlYXQgPSBmdW5jdGlvbiBwYXJzZUJhY2tncm91bmRSZXBlYXQoYmFja2dyb3VuZFJlcGVhdCkge1xuICAgIHN3aXRjaCAoYmFja2dyb3VuZFJlcGVhdC50cmltKCkpIHtcbiAgICAgICAgY2FzZSAnbm8tcmVwZWF0JzpcbiAgICAgICAgICAgIHJldHVybiBCQUNLR1JPVU5EX1JFUEVBVC5OT19SRVBFQVQ7XG4gICAgICAgIGNhc2UgJ3JlcGVhdC14JzpcbiAgICAgICAgY2FzZSAncmVwZWF0IG5vLXJlcGVhdCc6XG4gICAgICAgICAgICByZXR1cm4gQkFDS0dST1VORF9SRVBFQVQuUkVQRUFUX1g7XG4gICAgICAgIGNhc2UgJ3JlcGVhdC15JzpcbiAgICAgICAgY2FzZSAnbm8tcmVwZWF0IHJlcGVhdCc6XG4gICAgICAgICAgICByZXR1cm4gQkFDS0dST1VORF9SRVBFQVQuUkVQRUFUX1k7XG4gICAgICAgIGNhc2UgJ3JlcGVhdCc6XG4gICAgICAgICAgICByZXR1cm4gQkFDS0dST1VORF9SRVBFQVQuUkVQRUFUO1xuICAgIH1cblxuICAgIGlmICh0cnVlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgYmFja2dyb3VuZC1yZXBlYXQgdmFsdWUgXCInICsgYmFja2dyb3VuZFJlcGVhdCArICdcIicpO1xuICAgIH1cblxuICAgIHJldHVybiBCQUNLR1JPVU5EX1JFUEVBVC5SRVBFQVQ7XG59O1xuXG52YXIgcGFyc2VCYWNrZ3JvdW5kSW1hZ2VzID0gZnVuY3Rpb24gcGFyc2VCYWNrZ3JvdW5kSW1hZ2VzKHN0eWxlLCByZXNvdXJjZUxvYWRlcikge1xuICAgIHZhciBzb3VyY2VzID0gcGFyc2VCYWNrZ3JvdW5kSW1hZ2Uoc3R5bGUuYmFja2dyb3VuZEltYWdlKS5tYXAoZnVuY3Rpb24gKGJhY2tncm91bmRJbWFnZSkge1xuICAgICAgICBpZiAoYmFja2dyb3VuZEltYWdlLm1ldGhvZCA9PT0gJ3VybCcpIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSByZXNvdXJjZUxvYWRlci5sb2FkSW1hZ2UoYmFja2dyb3VuZEltYWdlLmFyZ3NbMF0pO1xuICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlLmFyZ3MgPSBrZXkgPyBba2V5XSA6IFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBiYWNrZ3JvdW5kSW1hZ2U7XG4gICAgfSk7XG4gICAgdmFyIHBvc2l0aW9ucyA9IHN0eWxlLmJhY2tncm91bmRQb3NpdGlvbi5zcGxpdCgnLCcpO1xuICAgIHZhciByZXBlYXRzID0gc3R5bGUuYmFja2dyb3VuZFJlcGVhdC5zcGxpdCgnLCcpO1xuICAgIHZhciBzaXplcyA9IHN0eWxlLmJhY2tncm91bmRTaXplLnNwbGl0KCcsJyk7XG5cbiAgICByZXR1cm4gc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSwgaW5kZXgpIHtcbiAgICAgICAgdmFyIHNpemUgPSAoc2l6ZXNbaW5kZXhdIHx8IEFVVE8pLnRyaW0oKS5zcGxpdCgnICcpLm1hcChwYXJzZUJhY2tncm91bmRTaXplKTtcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gKHBvc2l0aW9uc1tpbmRleF0gfHwgQVVUTykudHJpbSgpLnNwbGl0KCcgJykubWFwKHBhcnNlQmFja2dvdW5kUG9zaXRpb24pO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzb3VyY2U6IHNvdXJjZSxcbiAgICAgICAgICAgIHJlcGVhdDogcGFyc2VCYWNrZ3JvdW5kUmVwZWF0KHR5cGVvZiByZXBlYXRzW2luZGV4XSA9PT0gJ3N0cmluZycgPyByZXBlYXRzW2luZGV4XSA6IHJlcGVhdHNbMF0pLFxuICAgICAgICAgICAgc2l6ZTogc2l6ZS5sZW5ndGggPCAyID8gW3NpemVbMF0sIEFVVE9fU0laRV0gOiBbc2l6ZVswXSwgc2l6ZVsxXV0sXG4gICAgICAgICAgICBwb3NpdGlvbjogcG9zaXRpb24ubGVuZ3RoIDwgMiA/IFtwb3NpdGlvblswXSwgcG9zaXRpb25bMF1dIDogW3Bvc2l0aW9uWzBdLCBwb3NpdGlvblsxXV1cbiAgICAgICAgfTtcbiAgICB9KTtcbn07XG5cbnZhciBwYXJzZUJhY2tncm91bmRTaXplID0gZnVuY3Rpb24gcGFyc2VCYWNrZ3JvdW5kU2l6ZShzaXplKSB7XG4gICAgcmV0dXJuIHNpemUgPT09ICdhdXRvJyA/IEFVVE9fU0laRSA6IG5ldyBCYWNrZ3JvdW5kU2l6ZShzaXplKTtcbn07XG5cbnZhciBwYXJzZUJhY2tnb3VuZFBvc2l0aW9uID0gZnVuY3Rpb24gcGFyc2VCYWNrZ291bmRQb3NpdGlvbihwb3NpdGlvbikge1xuICAgIHN3aXRjaCAocG9zaXRpb24pIHtcbiAgICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBfTGVuZ3RoMi5kZWZhdWx0KCcxMDAlJyk7XG4gICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICBjYXNlICd0b3AnOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBfTGVuZ3RoMi5kZWZhdWx0KCcwJScpO1xuICAgICAgICBjYXNlICdhdXRvJzpcbiAgICAgICAgICAgIHJldHVybiBuZXcgX0xlbmd0aDIuZGVmYXVsdCgnMCcpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IF9MZW5ndGgyLmRlZmF1bHQocG9zaXRpb24pO1xufTtcblxudmFyIHBhcnNlQmFja2dyb3VuZEltYWdlID0gZXhwb3J0cy5wYXJzZUJhY2tncm91bmRJbWFnZSA9IGZ1bmN0aW9uIHBhcnNlQmFja2dyb3VuZEltYWdlKGltYWdlKSB7XG4gICAgdmFyIHdoaXRlc3BhY2UgPSAvXlxccyQvO1xuICAgIHZhciByZXN1bHRzID0gW107XG5cbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIHZhciBtZXRob2QgPSAnJztcbiAgICB2YXIgcXVvdGUgPSBudWxsO1xuICAgIHZhciBkZWZpbml0aW9uID0gJyc7XG4gICAgdmFyIG1vZGUgPSAwO1xuICAgIHZhciBudW1QYXJlbiA9IDA7XG5cbiAgICB2YXIgYXBwZW5kUmVzdWx0ID0gZnVuY3Rpb24gYXBwZW5kUmVzdWx0KCkge1xuICAgICAgICB2YXIgcHJlZml4ID0gJyc7XG4gICAgICAgIGlmIChtZXRob2QpIHtcbiAgICAgICAgICAgIGlmIChkZWZpbml0aW9uLnN1YnN0cigwLCAxKSA9PT0gJ1wiJykge1xuICAgICAgICAgICAgICAgIGRlZmluaXRpb24gPSBkZWZpbml0aW9uLnN1YnN0cigxLCBkZWZpbml0aW9uLmxlbmd0aCAtIDIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZGVmaW5pdGlvbikge1xuICAgICAgICAgICAgICAgIGFyZ3MucHVzaChkZWZpbml0aW9uLnRyaW0oKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBwcmVmaXhfaSA9IG1ldGhvZC5pbmRleE9mKCctJywgMSkgKyAxO1xuICAgICAgICAgICAgaWYgKG1ldGhvZC5zdWJzdHIoMCwgMSkgPT09ICctJyAmJiBwcmVmaXhfaSA+IDApIHtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBtZXRob2Quc3Vic3RyKDAsIHByZWZpeF9pKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIG1ldGhvZCA9IG1ldGhvZC5zdWJzdHIocHJlZml4X2kpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWV0aG9kID0gbWV0aG9kLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBpZiAobWV0aG9kICE9PSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgICAgICAgICAgICAgIGFyZ3M6IGFyZ3NcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhcmdzID0gW107XG4gICAgICAgIG1ldGhvZCA9IGRlZmluaXRpb24gPSAnJztcbiAgICB9O1xuXG4gICAgaW1hZ2Uuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgaWYgKG1vZGUgPT09IDAgJiYgd2hpdGVzcGFjZS50ZXN0KGMpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoIChjKSB7XG4gICAgICAgICAgICBjYXNlICdcIic6XG4gICAgICAgICAgICAgICAgaWYgKCFxdW90ZSkge1xuICAgICAgICAgICAgICAgICAgICBxdW90ZSA9IGM7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChxdW90ZSA9PT0gYykge1xuICAgICAgICAgICAgICAgICAgICBxdW90ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnKCc6XG4gICAgICAgICAgICAgICAgaWYgKHF1b3RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBtb2RlID0gMTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG51bVBhcmVuKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnKSc6XG4gICAgICAgICAgICAgICAgaWYgKHF1b3RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobnVtUGFyZW4gPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGUgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXBwZW5kUmVzdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBudW1QYXJlbi0tO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICcsJzpcbiAgICAgICAgICAgICAgICBpZiAocXVvdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtb2RlID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGFwcGVuZFJlc3VsdCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtb2RlID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChudW1QYXJlbiA9PT0gMCAmJiAhbWV0aG9kLm1hdGNoKC9edXJsJC9pKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJncy5wdXNoKGRlZmluaXRpb24udHJpbSgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmluaXRpb24gPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtb2RlID09PSAwKSB7XG4gICAgICAgICAgICBtZXRob2QgKz0gYztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlZmluaXRpb24gKz0gYztcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgYXBwZW5kUmVzdWx0KCk7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG59O1xuXG4vKioqLyB9KSxcbi8qIDYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xudmFyIFBBVEggPSBleHBvcnRzLlBBVEggPSB7XG4gICAgVkVDVE9SOiAwLFxuICAgIEJFWklFUl9DVVJWRTogMSxcbiAgICBDSVJDTEU6IDJcbn07XG5cbi8qKiovIH0pLFxuLyogNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfUGF0aCA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBWZWN0b3IgPSBmdW5jdGlvbiBWZWN0b3IoeCwgeSkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBWZWN0b3IpO1xuXG4gICAgdGhpcy50eXBlID0gX1BhdGguUEFUSC5WRUNUT1I7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIGlmICh0cnVlKSB7XG4gICAgICAgIGlmIChpc05hTih4KSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCB4IHZhbHVlIGdpdmVuIGZvciBWZWN0b3InKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNOYU4oeSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgeSB2YWx1ZSBnaXZlbiBmb3IgVmVjdG9yJyk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBWZWN0b3I7XG5cbi8qKiovIH0pLFxuLyogOCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnBhcnNlTGlzdFN0eWxlID0gZXhwb3J0cy5wYXJzZUxpc3RTdHlsZVR5cGUgPSBleHBvcnRzLkxJU1RfU1RZTEVfVFlQRSA9IGV4cG9ydHMuTElTVF9TVFlMRV9QT1NJVElPTiA9IHVuZGVmaW5lZDtcblxudmFyIF9iYWNrZ3JvdW5kID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxudmFyIExJU1RfU1RZTEVfUE9TSVRJT04gPSBleHBvcnRzLkxJU1RfU1RZTEVfUE9TSVRJT04gPSB7XG4gICAgSU5TSURFOiAwLFxuICAgIE9VVFNJREU6IDFcbn07XG5cbnZhciBMSVNUX1NUWUxFX1RZUEUgPSBleHBvcnRzLkxJU1RfU1RZTEVfVFlQRSA9IHtcbiAgICBOT05FOiAtMSxcbiAgICBESVNDOiAwLFxuICAgIENJUkNMRTogMSxcbiAgICBTUVVBUkU6IDIsXG4gICAgREVDSU1BTDogMyxcbiAgICBDSktfREVDSU1BTDogNCxcbiAgICBERUNJTUFMX0xFQURJTkdfWkVSTzogNSxcbiAgICBMT1dFUl9ST01BTjogNixcbiAgICBVUFBFUl9ST01BTjogNyxcbiAgICBMT1dFUl9HUkVFSzogOCxcbiAgICBMT1dFUl9BTFBIQTogOSxcbiAgICBVUFBFUl9BTFBIQTogMTAsXG4gICAgQVJBQklDX0lORElDOiAxMSxcbiAgICBBUk1FTklBTjogMTIsXG4gICAgQkVOR0FMSTogMTMsXG4gICAgQ0FNQk9ESUFOOiAxNCxcbiAgICBDSktfRUFSVEhMWV9CUkFOQ0g6IDE1LFxuICAgIENKS19IRUFWRU5MWV9TVEVNOiAxNixcbiAgICBDSktfSURFT0dSQVBISUM6IDE3LFxuICAgIERFVkFOQUdBUkk6IDE4LFxuICAgIEVUSElPUElDX05VTUVSSUM6IDE5LFxuICAgIEdFT1JHSUFOOiAyMCxcbiAgICBHVUpBUkFUSTogMjEsXG4gICAgR1VSTVVLSEk6IDIyLFxuICAgIEhFQlJFVzogMjIsXG4gICAgSElSQUdBTkE6IDIzLFxuICAgIEhJUkFHQU5BX0lST0hBOiAyNCxcbiAgICBKQVBBTkVTRV9GT1JNQUw6IDI1LFxuICAgIEpBUEFORVNFX0lORk9STUFMOiAyNixcbiAgICBLQU5OQURBOiAyNyxcbiAgICBLQVRBS0FOQTogMjgsXG4gICAgS0FUQUtBTkFfSVJPSEE6IDI5LFxuICAgIEtITUVSOiAzMCxcbiAgICBLT1JFQU5fSEFOR1VMX0ZPUk1BTDogMzEsXG4gICAgS09SRUFOX0hBTkpBX0ZPUk1BTDogMzIsXG4gICAgS09SRUFOX0hBTkpBX0lORk9STUFMOiAzMyxcbiAgICBMQU86IDM0LFxuICAgIExPV0VSX0FSTUVOSUFOOiAzNSxcbiAgICBNQUxBWUFMQU06IDM2LFxuICAgIE1PTkdPTElBTjogMzcsXG4gICAgTVlBTk1BUjogMzgsXG4gICAgT1JJWUE6IDM5LFxuICAgIFBFUlNJQU46IDQwLFxuICAgIFNJTVBfQ0hJTkVTRV9GT1JNQUw6IDQxLFxuICAgIFNJTVBfQ0hJTkVTRV9JTkZPUk1BTDogNDIsXG4gICAgVEFNSUw6IDQzLFxuICAgIFRFTFVHVTogNDQsXG4gICAgVEhBSTogNDUsXG4gICAgVElCRVRBTjogNDYsXG4gICAgVFJBRF9DSElORVNFX0ZPUk1BTDogNDcsXG4gICAgVFJBRF9DSElORVNFX0lORk9STUFMOiA0OCxcbiAgICBVUFBFUl9BUk1FTklBTjogNDksXG4gICAgRElTQ0xPU1VSRV9PUEVOOiA1MCxcbiAgICBESVNDTE9TVVJFX0NMT1NFRDogNTFcbn07XG5cbnZhciBwYXJzZUxpc3RTdHlsZVR5cGUgPSBleHBvcnRzLnBhcnNlTGlzdFN0eWxlVHlwZSA9IGZ1bmN0aW9uIHBhcnNlTGlzdFN0eWxlVHlwZSh0eXBlKSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2Rpc2MnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5ESVNDO1xuICAgICAgICBjYXNlICdjaXJjbGUnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5DSVJDTEU7XG4gICAgICAgIGNhc2UgJ3NxdWFyZSc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLlNRVUFSRTtcbiAgICAgICAgY2FzZSAnZGVjaW1hbCc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkRFQ0lNQUw7XG4gICAgICAgIGNhc2UgJ2Nqay1kZWNpbWFsJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuQ0pLX0RFQ0lNQUw7XG4gICAgICAgIGNhc2UgJ2RlY2ltYWwtbGVhZGluZy16ZXJvJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuREVDSU1BTF9MRUFESU5HX1pFUk87XG4gICAgICAgIGNhc2UgJ2xvd2VyLXJvbWFuJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuTE9XRVJfUk9NQU47XG4gICAgICAgIGNhc2UgJ3VwcGVyLXJvbWFuJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuVVBQRVJfUk9NQU47XG4gICAgICAgIGNhc2UgJ2xvd2VyLWdyZWVrJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuTE9XRVJfR1JFRUs7XG4gICAgICAgIGNhc2UgJ2xvd2VyLWFscGhhJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuTE9XRVJfQUxQSEE7XG4gICAgICAgIGNhc2UgJ3VwcGVyLWFscGhhJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuVVBQRVJfQUxQSEE7XG4gICAgICAgIGNhc2UgJ2FyYWJpYy1pbmRpYyc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkFSQUJJQ19JTkRJQztcbiAgICAgICAgY2FzZSAnYXJtZW5pYW4nOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5BUk1FTklBTjtcbiAgICAgICAgY2FzZSAnYmVuZ2FsaSc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkJFTkdBTEk7XG4gICAgICAgIGNhc2UgJ2NhbWJvZGlhbic6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkNBTUJPRElBTjtcbiAgICAgICAgY2FzZSAnY2prLWVhcnRobHktYnJhbmNoJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuQ0pLX0VBUlRITFlfQlJBTkNIO1xuICAgICAgICBjYXNlICdjamstaGVhdmVubHktc3RlbSc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkNKS19IRUFWRU5MWV9TVEVNO1xuICAgICAgICBjYXNlICdjamstaWRlb2dyYXBoaWMnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5DSktfSURFT0dSQVBISUM7XG4gICAgICAgIGNhc2UgJ2RldmFuYWdhcmknOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5ERVZBTkFHQVJJO1xuICAgICAgICBjYXNlICdldGhpb3BpYy1udW1lcmljJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuRVRISU9QSUNfTlVNRVJJQztcbiAgICAgICAgY2FzZSAnZ2VvcmdpYW4nOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5HRU9SR0lBTjtcbiAgICAgICAgY2FzZSAnZ3VqYXJhdGknOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5HVUpBUkFUSTtcbiAgICAgICAgY2FzZSAnZ3VybXVraGknOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5HVVJNVUtISTtcbiAgICAgICAgY2FzZSAnaGVicmV3JzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuSEVCUkVXO1xuICAgICAgICBjYXNlICdoaXJhZ2FuYSc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkhJUkFHQU5BO1xuICAgICAgICBjYXNlICdoaXJhZ2FuYS1pcm9oYSc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkhJUkFHQU5BX0lST0hBO1xuICAgICAgICBjYXNlICdqYXBhbmVzZS1mb3JtYWwnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5KQVBBTkVTRV9GT1JNQUw7XG4gICAgICAgIGNhc2UgJ2phcGFuZXNlLWluZm9ybWFsJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuSkFQQU5FU0VfSU5GT1JNQUw7XG4gICAgICAgIGNhc2UgJ2thbm5hZGEnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5LQU5OQURBO1xuICAgICAgICBjYXNlICdrYXRha2FuYSc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLktBVEFLQU5BO1xuICAgICAgICBjYXNlICdrYXRha2FuYS1pcm9oYSc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLktBVEFLQU5BX0lST0hBO1xuICAgICAgICBjYXNlICdraG1lcic6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLktITUVSO1xuICAgICAgICBjYXNlICdrb3JlYW4taGFuZ3VsLWZvcm1hbCc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLktPUkVBTl9IQU5HVUxfRk9STUFMO1xuICAgICAgICBjYXNlICdrb3JlYW4taGFuamEtZm9ybWFsJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuS09SRUFOX0hBTkpBX0ZPUk1BTDtcbiAgICAgICAgY2FzZSAna29yZWFuLWhhbmphLWluZm9ybWFsJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuS09SRUFOX0hBTkpBX0lORk9STUFMO1xuICAgICAgICBjYXNlICdsYW8nOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5MQU87XG4gICAgICAgIGNhc2UgJ2xvd2VyLWFybWVuaWFuJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuTE9XRVJfQVJNRU5JQU47XG4gICAgICAgIGNhc2UgJ21hbGF5YWxhbSc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLk1BTEFZQUxBTTtcbiAgICAgICAgY2FzZSAnbW9uZ29saWFuJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuTU9OR09MSUFOO1xuICAgICAgICBjYXNlICdteWFubWFyJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuTVlBTk1BUjtcbiAgICAgICAgY2FzZSAnb3JpeWEnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5PUklZQTtcbiAgICAgICAgY2FzZSAncGVyc2lhbic6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLlBFUlNJQU47XG4gICAgICAgIGNhc2UgJ3NpbXAtY2hpbmVzZS1mb3JtYWwnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5TSU1QX0NISU5FU0VfRk9STUFMO1xuICAgICAgICBjYXNlICdzaW1wLWNoaW5lc2UtaW5mb3JtYWwnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5TSU1QX0NISU5FU0VfSU5GT1JNQUw7XG4gICAgICAgIGNhc2UgJ3RhbWlsJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuVEFNSUw7XG4gICAgICAgIGNhc2UgJ3RlbHVndSc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLlRFTFVHVTtcbiAgICAgICAgY2FzZSAndGhhaSc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLlRIQUk7XG4gICAgICAgIGNhc2UgJ3RpYmV0YW4nOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5USUJFVEFOO1xuICAgICAgICBjYXNlICd0cmFkLWNoaW5lc2UtZm9ybWFsJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuVFJBRF9DSElORVNFX0ZPUk1BTDtcbiAgICAgICAgY2FzZSAndHJhZC1jaGluZXNlLWluZm9ybWFsJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuVFJBRF9DSElORVNFX0lORk9STUFMO1xuICAgICAgICBjYXNlICd1cHBlci1hcm1lbmlhbic6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLlVQUEVSX0FSTUVOSUFOO1xuICAgICAgICBjYXNlICdkaXNjbG9zdXJlLW9wZW4nOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5ESVNDTE9TVVJFX09QRU47XG4gICAgICAgIGNhc2UgJ2Rpc2Nsb3N1cmUtY2xvc2VkJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuRElTQ0xPU1VSRV9DTE9TRUQ7XG4gICAgICAgIGNhc2UgJ25vbmUnOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5OT05FO1xuICAgIH1cbn07XG5cbnZhciBwYXJzZUxpc3RTdHlsZSA9IGV4cG9ydHMucGFyc2VMaXN0U3R5bGUgPSBmdW5jdGlvbiBwYXJzZUxpc3RTdHlsZShzdHlsZSkge1xuICAgIHZhciBsaXN0U3R5bGVJbWFnZSA9ICgwLCBfYmFja2dyb3VuZC5wYXJzZUJhY2tncm91bmRJbWFnZSkoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnbGlzdC1zdHlsZS1pbWFnZScpKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBsaXN0U3R5bGVUeXBlOiBwYXJzZUxpc3RTdHlsZVR5cGUoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnbGlzdC1zdHlsZS10eXBlJykpLFxuICAgICAgICBsaXN0U3R5bGVJbWFnZTogbGlzdFN0eWxlSW1hZ2UubGVuZ3RoID8gbGlzdFN0eWxlSW1hZ2VbMF0gOiBudWxsLFxuICAgICAgICBsaXN0U3R5bGVQb3NpdGlvbjogcGFyc2VMaXN0U3R5bGVQb3NpdGlvbihzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdsaXN0LXN0eWxlLXBvc2l0aW9uJykpXG4gICAgfTtcbn07XG5cbnZhciBwYXJzZUxpc3RTdHlsZVBvc2l0aW9uID0gZnVuY3Rpb24gcGFyc2VMaXN0U3R5bGVQb3NpdGlvbihwb3NpdGlvbikge1xuICAgIHN3aXRjaCAocG9zaXRpb24pIHtcbiAgICAgICAgY2FzZSAnaW5zaWRlJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1BPU0lUSU9OLklOU0lERTtcbiAgICAgICAgY2FzZSAnb3V0c2lkZSc6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9QT1NJVElPTi5PVVRTSURFO1xuICAgIH1cbn07XG5cbi8qKiovIH0pLFxuLyogOSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfdGV4dFRyYW5zZm9ybSA9IF9fd2VicGFja19yZXF1aXJlX18oMjApO1xuXG52YXIgX1RleHRCb3VuZHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIyKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFRleHRDb250YWluZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVGV4dENvbnRhaW5lcih0ZXh0LCBwYXJlbnQsIGJvdW5kcykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGV4dENvbnRhaW5lcik7XG5cbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMuYm91bmRzID0gYm91bmRzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhUZXh0Q29udGFpbmVyLCBudWxsLCBbe1xuICAgICAgICBrZXk6ICdmcm9tVGV4dE5vZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZnJvbVRleHROb2RlKG5vZGUsIHBhcmVudCkge1xuICAgICAgICAgICAgdmFyIHRleHQgPSB0cmFuc2Zvcm0obm9kZS5kYXRhLCBwYXJlbnQuc3R5bGUudGV4dFRyYW5zZm9ybSk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFRleHRDb250YWluZXIodGV4dCwgcGFyZW50LCAoMCwgX1RleHRCb3VuZHMucGFyc2VUZXh0Qm91bmRzKSh0ZXh0LCBwYXJlbnQsIG5vZGUpKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBUZXh0Q29udGFpbmVyO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBUZXh0Q29udGFpbmVyO1xuXG5cbnZhciBDQVBJVEFMSVpFID0gLyhefFxcc3w6fC18XFwofFxcKSkoW2Etel0pL2c7XG5cbnZhciB0cmFuc2Zvcm0gPSBmdW5jdGlvbiB0cmFuc2Zvcm0odGV4dCwgX3RyYW5zZm9ybSkge1xuICAgIHN3aXRjaCAoX3RyYW5zZm9ybSkge1xuICAgICAgICBjYXNlIF90ZXh0VHJhbnNmb3JtLlRFWFRfVFJBTlNGT1JNLkxPV0VSQ0FTRTpcbiAgICAgICAgICAgIHJldHVybiB0ZXh0LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNhc2UgX3RleHRUcmFuc2Zvcm0uVEVYVF9UUkFOU0ZPUk0uQ0FQSVRBTElaRTpcbiAgICAgICAgICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoQ0FQSVRBTElaRSwgY2FwaXRhbGl6ZSk7XG4gICAgICAgIGNhc2UgX3RleHRUcmFuc2Zvcm0uVEVYVF9UUkFOU0ZPUk0uVVBQRVJDQVNFOlxuICAgICAgICAgICAgcmV0dXJuIHRleHQudG9VcHBlckNhc2UoKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiB0ZXh0O1xuICAgIH1cbn07XG5cbmZ1bmN0aW9uIGNhcGl0YWxpemUobSwgcDEsIHAyKSB7XG4gICAgaWYgKG0ubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gcDEgKyBwMi50b1VwcGVyQ2FzZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBtO1xufVxuXG4vKioqLyB9KSxcbi8qIDEwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9Gb3JlaWduT2JqZWN0UmVuZGVyZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIzKTtcblxudmFyIHRlc3RSYW5nZUJvdW5kcyA9IGZ1bmN0aW9uIHRlc3RSYW5nZUJvdW5kcyhkb2N1bWVudCkge1xuICAgIHZhciBURVNUX0hFSUdIVCA9IDEyMztcblxuICAgIGlmIChkb2N1bWVudC5jcmVhdGVSYW5nZSkge1xuICAgICAgICB2YXIgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICAgICAgICBpZiAocmFuZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KSB7XG4gICAgICAgICAgICB2YXIgdGVzdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdib3VuZHRlc3QnKTtcbiAgICAgICAgICAgIHRlc3RFbGVtZW50LnN0eWxlLmhlaWdodCA9IFRFU1RfSEVJR0hUICsgJ3B4JztcbiAgICAgICAgICAgIHRlc3RFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0ZXN0RWxlbWVudCk7XG5cbiAgICAgICAgICAgIHJhbmdlLnNlbGVjdE5vZGUodGVzdEVsZW1lbnQpO1xuICAgICAgICAgICAgdmFyIHJhbmdlQm91bmRzID0gcmFuZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICB2YXIgcmFuZ2VIZWlnaHQgPSBNYXRoLnJvdW5kKHJhbmdlQm91bmRzLmhlaWdodCk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRlc3RFbGVtZW50KTtcbiAgICAgICAgICAgIGlmIChyYW5nZUhlaWdodCA9PT0gVEVTVF9IRUlHSFQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn07XG5cbi8vIGlPUyAxMC4zIHRhaW50cyBjYW52YXMgd2l0aCBiYXNlNjQgaW1hZ2VzIHVubGVzcyBjcm9zc09yaWdpbiA9ICdhbm9ueW1vdXMnXG52YXIgdGVzdEJhc2U2NCA9IGZ1bmN0aW9uIHRlc3RCYXNlNjQoZG9jdW1lbnQsIHNyYykge1xuICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgIC8vIFNpbmdsZSBwaXhlbCBiYXNlNjQgaW1hZ2UgcmVuZGVycyBmaW5lIG9uIGlPUyAxMC4zPz8/XG4gICAgICAgIGltZy5zcmMgPSBzcmM7XG5cbiAgICAgICAgdmFyIG9ubG9hZCA9IGZ1bmN0aW9uIG9ubG9hZCgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIDAsIDApO1xuICAgICAgICAgICAgICAgIGNhbnZhcy50b0RhdGFVUkwoKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGltZy5vbmxvYWQgPSBvbmxvYWQ7XG4gICAgICAgIGltZy5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChpbWcuY29tcGxldGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIG9ubG9hZCgpO1xuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxudmFyIHRlc3RDT1JTID0gZnVuY3Rpb24gdGVzdENPUlMoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBuZXcgSW1hZ2UoKS5jcm9zc09yaWdpbiAhPT0gJ3VuZGVmaW5lZCc7XG59O1xuXG52YXIgdGVzdFJlc3BvbnNlVHlwZSA9IGZ1bmN0aW9uIHRlc3RSZXNwb25zZVR5cGUoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBuZXcgWE1MSHR0cFJlcXVlc3QoKS5yZXNwb25zZVR5cGUgPT09ICdzdHJpbmcnO1xufTtcblxudmFyIHRlc3RTVkcgPSBmdW5jdGlvbiB0ZXN0U1ZHKGRvY3VtZW50KSB7XG4gICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgaW1nLnNyYyA9ICdkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz1cXCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcJz48L3N2Zz4nO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIDAsIDApO1xuICAgICAgICBjYW52YXMudG9EYXRhVVJMKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufTtcblxudmFyIGlzR3JlZW5QaXhlbCA9IGZ1bmN0aW9uIGlzR3JlZW5QaXhlbChkYXRhKSB7XG4gICAgcmV0dXJuIGRhdGFbMF0gPT09IDAgJiYgZGF0YVsxXSA9PT0gMjU1ICYmIGRhdGFbMl0gPT09IDAgJiYgZGF0YVszXSA9PT0gMjU1O1xufTtcblxudmFyIHRlc3RGb3JlaWduT2JqZWN0ID0gZnVuY3Rpb24gdGVzdEZvcmVpZ25PYmplY3QoZG9jdW1lbnQpIHtcbiAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdmFyIHNpemUgPSAxMDA7XG4gICAgY2FudmFzLndpZHRoID0gc2l6ZTtcbiAgICBjYW52YXMuaGVpZ2h0ID0gc2l6ZTtcbiAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2IoMCwgMjU1LCAwKSc7XG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIHNpemUsIHNpemUpO1xuXG4gICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIHZhciBncmVlbkltYWdlU3JjID0gY2FudmFzLnRvRGF0YVVSTCgpO1xuICAgIGltZy5zcmMgPSBncmVlbkltYWdlU3JjO1xuICAgIHZhciBzdmcgPSAoMCwgX0ZvcmVpZ25PYmplY3RSZW5kZXJlci5jcmVhdGVGb3JlaWduT2JqZWN0U1ZHKShzaXplLCBzaXplLCAwLCAwLCBpbWcpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAncmVkJztcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgc2l6ZSwgc2l6ZSk7XG5cbiAgICByZXR1cm4gKDAsIF9Gb3JlaWduT2JqZWN0UmVuZGVyZXIubG9hZFNlcmlhbGl6ZWRTVkcpKHN2ZykudGhlbihmdW5jdGlvbiAoaW1nKSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwKTtcbiAgICAgICAgdmFyIGRhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIHNpemUsIHNpemUpLmRhdGE7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAncmVkJztcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIHNpemUsIHNpemUpO1xuXG4gICAgICAgIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCgnICsgZ3JlZW5JbWFnZVNyYyArICcpJztcbiAgICAgICAgbm9kZS5zdHlsZS5oZWlnaHQgPSBzaXplICsgJ3B4JztcbiAgICAgICAgLy8gRmlyZWZveCA1NSBkb2VzIG5vdCByZW5kZXIgaW5saW5lIDxpbWcgLz4gdGFnc1xuICAgICAgICByZXR1cm4gaXNHcmVlblBpeGVsKGRhdGEpID8gKDAsIF9Gb3JlaWduT2JqZWN0UmVuZGVyZXIubG9hZFNlcmlhbGl6ZWRTVkcpKCgwLCBfRm9yZWlnbk9iamVjdFJlbmRlcmVyLmNyZWF0ZUZvcmVpZ25PYmplY3RTVkcpKHNpemUsIHNpemUsIDAsIDAsIG5vZGUpKSA6IFByb21pc2UucmVqZWN0KGZhbHNlKTtcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChpbWcpIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIDAsIDApO1xuICAgICAgICAvLyBFZGdlIGRvZXMgbm90IHJlbmRlciBiYWNrZ3JvdW5kLWltYWdlc1xuICAgICAgICByZXR1cm4gaXNHcmVlblBpeGVsKGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgc2l6ZSwgc2l6ZSkuZGF0YSk7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xufTtcblxudmFyIEZFQVRVUkVTID0ge1xuICAgIC8vICRGbG93Rml4TWUgLSBnZXQvc2V0IHByb3BlcnRpZXMgbm90IHlldCBzdXBwb3J0ZWRcbiAgICBnZXQgU1VQUE9SVF9SQU5HRV9CT1VORFMoKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcblxuICAgICAgICB2YXIgdmFsdWUgPSB0ZXN0UmFuZ2VCb3VuZHMoZG9jdW1lbnQpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRkVBVFVSRVMsICdTVVBQT1JUX1JBTkdFX0JPVU5EUycsIHsgdmFsdWU6IHZhbHVlIH0pO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSxcbiAgICAvLyAkRmxvd0ZpeE1lIC0gZ2V0L3NldCBwcm9wZXJ0aWVzIG5vdCB5ZXQgc3VwcG9ydGVkXG4gICAgZ2V0IFNVUFBPUlRfU1ZHX0RSQVdJTkcoKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcblxuICAgICAgICB2YXIgdmFsdWUgPSB0ZXN0U1ZHKGRvY3VtZW50KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZFQVRVUkVTLCAnU1VQUE9SVF9TVkdfRFJBV0lORycsIHsgdmFsdWU6IHZhbHVlIH0pO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSxcbiAgICAvLyAkRmxvd0ZpeE1lIC0gZ2V0L3NldCBwcm9wZXJ0aWVzIG5vdCB5ZXQgc3VwcG9ydGVkXG4gICAgZ2V0IFNVUFBPUlRfQkFTRTY0X0RSQVdJTkcoKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHNyYykge1xuICAgICAgICAgICAgdmFyIF92YWx1ZSA9IHRlc3RCYXNlNjQoZG9jdW1lbnQsIHNyYyk7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRkVBVFVSRVMsICdTVVBQT1JUX0JBU0U2NF9EUkFXSU5HJywgeyB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdmFsdWU7XG4gICAgICAgICAgICAgICAgfSB9KTtcbiAgICAgICAgICAgIHJldHVybiBfdmFsdWU7XG4gICAgICAgIH07XG4gICAgfSxcbiAgICAvLyAkRmxvd0ZpeE1lIC0gZ2V0L3NldCBwcm9wZXJ0aWVzIG5vdCB5ZXQgc3VwcG9ydGVkXG4gICAgZ2V0IFNVUFBPUlRfRk9SRUlHTk9CSkVDVF9EUkFXSU5HKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG5cbiAgICAgICAgdmFyIHZhbHVlID0gdHlwZW9mIEFycmF5LmZyb20gPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHdpbmRvdy5mZXRjaCA9PT0gJ2Z1bmN0aW9uJyA/IHRlc3RGb3JlaWduT2JqZWN0KGRvY3VtZW50KSA6IFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGRUFUVVJFUywgJ1NVUFBPUlRfRk9SRUlHTk9CSkVDVF9EUkFXSU5HJywgeyB2YWx1ZTogdmFsdWUgfSk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxuICAgIC8vICRGbG93Rml4TWUgLSBnZXQvc2V0IHByb3BlcnRpZXMgbm90IHlldCBzdXBwb3J0ZWRcbiAgICBnZXQgU1VQUE9SVF9DT1JTX0lNQUdFUygpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICAgIHZhciB2YWx1ZSA9IHRlc3RDT1JTKCk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGRUFUVVJFUywgJ1NVUFBPUlRfQ09SU19JTUFHRVMnLCB7IHZhbHVlOiB2YWx1ZSB9KTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG4gICAgLy8gJEZsb3dGaXhNZSAtIGdldC9zZXQgcHJvcGVydGllcyBub3QgeWV0IHN1cHBvcnRlZFxuICAgIGdldCBTVVBQT1JUX1JFU1BPTlNFX1RZUEUoKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcblxuICAgICAgICB2YXIgdmFsdWUgPSB0ZXN0UmVzcG9uc2VUeXBlKCk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGRUFUVVJFUywgJ1NVUFBPUlRfUkVTUE9OU0VfVFlQRScsIHsgdmFsdWU6IHZhbHVlIH0pO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSxcbiAgICAvLyAkRmxvd0ZpeE1lIC0gZ2V0L3NldCBwcm9wZXJ0aWVzIG5vdCB5ZXQgc3VwcG9ydGVkXG4gICAgZ2V0IFNVUFBPUlRfQ09SU19YSFIoKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcblxuICAgICAgICB2YXIgdmFsdWUgPSAnd2l0aENyZWRlbnRpYWxzJyBpbiBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZFQVRVUkVTLCAnU1VQUE9SVF9DT1JTX1hIUicsIHsgdmFsdWU6IHZhbHVlIH0pO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRkVBVFVSRVM7XG5cbi8qKiovIH0pLFxuLyogMTEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5wYXJzZVRleHREZWNvcmF0aW9uID0gZXhwb3J0cy5URVhUX0RFQ09SQVRJT05fTElORSA9IGV4cG9ydHMuVEVYVF9ERUNPUkFUSU9OID0gZXhwb3J0cy5URVhUX0RFQ09SQVRJT05fU1RZTEUgPSB1bmRlZmluZWQ7XG5cbnZhciBfQ29sb3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgX0NvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvbG9yKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFRFWFRfREVDT1JBVElPTl9TVFlMRSA9IGV4cG9ydHMuVEVYVF9ERUNPUkFUSU9OX1NUWUxFID0ge1xuICAgIFNPTElEOiAwLFxuICAgIERPVUJMRTogMSxcbiAgICBET1RURUQ6IDIsXG4gICAgREFTSEVEOiAzLFxuICAgIFdBVlk6IDRcbn07XG5cbnZhciBURVhUX0RFQ09SQVRJT04gPSBleHBvcnRzLlRFWFRfREVDT1JBVElPTiA9IHtcbiAgICBOT05FOiBudWxsXG59O1xuXG52YXIgVEVYVF9ERUNPUkFUSU9OX0xJTkUgPSBleHBvcnRzLlRFWFRfREVDT1JBVElPTl9MSU5FID0ge1xuICAgIFVOREVSTElORTogMSxcbiAgICBPVkVSTElORTogMixcbiAgICBMSU5FX1RIUk9VR0g6IDMsXG4gICAgQkxJTks6IDRcbn07XG5cbnZhciBwYXJzZUxpbmUgPSBmdW5jdGlvbiBwYXJzZUxpbmUobGluZSkge1xuICAgIHN3aXRjaCAobGluZSkge1xuICAgICAgICBjYXNlICd1bmRlcmxpbmUnOlxuICAgICAgICAgICAgcmV0dXJuIFRFWFRfREVDT1JBVElPTl9MSU5FLlVOREVSTElORTtcbiAgICAgICAgY2FzZSAnb3ZlcmxpbmUnOlxuICAgICAgICAgICAgcmV0dXJuIFRFWFRfREVDT1JBVElPTl9MSU5FLk9WRVJMSU5FO1xuICAgICAgICBjYXNlICdsaW5lLXRocm91Z2gnOlxuICAgICAgICAgICAgcmV0dXJuIFRFWFRfREVDT1JBVElPTl9MSU5FLkxJTkVfVEhST1VHSDtcbiAgICB9XG4gICAgcmV0dXJuIFRFWFRfREVDT1JBVElPTl9MSU5FLkJMSU5LO1xufTtcblxudmFyIHBhcnNlVGV4dERlY29yYXRpb25MaW5lID0gZnVuY3Rpb24gcGFyc2VUZXh0RGVjb3JhdGlvbkxpbmUobGluZSkge1xuICAgIGlmIChsaW5lID09PSAnbm9uZScpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpbmUuc3BsaXQoJyAnKS5tYXAocGFyc2VMaW5lKTtcbn07XG5cbnZhciBwYXJzZVRleHREZWNvcmF0aW9uU3R5bGUgPSBmdW5jdGlvbiBwYXJzZVRleHREZWNvcmF0aW9uU3R5bGUoc3R5bGUpIHtcbiAgICBzd2l0Y2ggKHN0eWxlKSB7XG4gICAgICAgIGNhc2UgJ2RvdWJsZSc6XG4gICAgICAgICAgICByZXR1cm4gVEVYVF9ERUNPUkFUSU9OX1NUWUxFLkRPVUJMRTtcbiAgICAgICAgY2FzZSAnZG90dGVkJzpcbiAgICAgICAgICAgIHJldHVybiBURVhUX0RFQ09SQVRJT05fU1RZTEUuRE9UVEVEO1xuICAgICAgICBjYXNlICdkYXNoZWQnOlxuICAgICAgICAgICAgcmV0dXJuIFRFWFRfREVDT1JBVElPTl9TVFlMRS5EQVNIRUQ7XG4gICAgICAgIGNhc2UgJ3dhdnknOlxuICAgICAgICAgICAgcmV0dXJuIFRFWFRfREVDT1JBVElPTl9TVFlMRS5XQVZZO1xuICAgIH1cbiAgICByZXR1cm4gVEVYVF9ERUNPUkFUSU9OX1NUWUxFLlNPTElEO1xufTtcblxudmFyIHBhcnNlVGV4dERlY29yYXRpb24gPSBleHBvcnRzLnBhcnNlVGV4dERlY29yYXRpb24gPSBmdW5jdGlvbiBwYXJzZVRleHREZWNvcmF0aW9uKHN0eWxlKSB7XG4gICAgdmFyIHRleHREZWNvcmF0aW9uTGluZSA9IHBhcnNlVGV4dERlY29yYXRpb25MaW5lKHN0eWxlLnRleHREZWNvcmF0aW9uTGluZSA/IHN0eWxlLnRleHREZWNvcmF0aW9uTGluZSA6IHN0eWxlLnRleHREZWNvcmF0aW9uKTtcbiAgICBpZiAodGV4dERlY29yYXRpb25MaW5lID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBURVhUX0RFQ09SQVRJT04uTk9ORTtcbiAgICB9XG5cbiAgICB2YXIgdGV4dERlY29yYXRpb25Db2xvciA9IHN0eWxlLnRleHREZWNvcmF0aW9uQ29sb3IgPyBuZXcgX0NvbG9yMi5kZWZhdWx0KHN0eWxlLnRleHREZWNvcmF0aW9uQ29sb3IpIDogbnVsbDtcbiAgICB2YXIgdGV4dERlY29yYXRpb25TdHlsZSA9IHBhcnNlVGV4dERlY29yYXRpb25TdHlsZShzdHlsZS50ZXh0RGVjb3JhdGlvblN0eWxlKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHRleHREZWNvcmF0aW9uTGluZTogdGV4dERlY29yYXRpb25MaW5lLFxuICAgICAgICB0ZXh0RGVjb3JhdGlvbkNvbG9yOiB0ZXh0RGVjb3JhdGlvbkNvbG9yLFxuICAgICAgICB0ZXh0RGVjb3JhdGlvblN0eWxlOiB0ZXh0RGVjb3JhdGlvblN0eWxlXG4gICAgfTtcbn07XG5cbi8qKiovIH0pLFxuLyogMTIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5wYXJzZUJvcmRlciA9IGV4cG9ydHMuQk9SREVSX1NJREVTID0gZXhwb3J0cy5CT1JERVJfU1RZTEUgPSB1bmRlZmluZWQ7XG5cbnZhciBfQ29sb3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgX0NvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvbG9yKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIEJPUkRFUl9TVFlMRSA9IGV4cG9ydHMuQk9SREVSX1NUWUxFID0ge1xuICAgIE5PTkU6IDAsXG4gICAgU09MSUQ6IDFcbn07XG5cbnZhciBCT1JERVJfU0lERVMgPSBleHBvcnRzLkJPUkRFUl9TSURFUyA9IHtcbiAgICBUT1A6IDAsXG4gICAgUklHSFQ6IDEsXG4gICAgQk9UVE9NOiAyLFxuICAgIExFRlQ6IDNcbn07XG5cbnZhciBTSURFUyA9IE9iamVjdC5rZXlzKEJPUkRFUl9TSURFUykubWFwKGZ1bmN0aW9uIChzKSB7XG4gICAgcmV0dXJuIHMudG9Mb3dlckNhc2UoKTtcbn0pO1xuXG52YXIgcGFyc2VCb3JkZXJTdHlsZSA9IGZ1bmN0aW9uIHBhcnNlQm9yZGVyU3R5bGUoc3R5bGUpIHtcbiAgICBzd2l0Y2ggKHN0eWxlKSB7XG4gICAgICAgIGNhc2UgJ25vbmUnOlxuICAgICAgICAgICAgcmV0dXJuIEJPUkRFUl9TVFlMRS5OT05FO1xuICAgIH1cbiAgICByZXR1cm4gQk9SREVSX1NUWUxFLlNPTElEO1xufTtcblxudmFyIHBhcnNlQm9yZGVyID0gZXhwb3J0cy5wYXJzZUJvcmRlciA9IGZ1bmN0aW9uIHBhcnNlQm9yZGVyKHN0eWxlKSB7XG4gICAgcmV0dXJuIFNJREVTLm1hcChmdW5jdGlvbiAoc2lkZSkge1xuICAgICAgICB2YXIgYm9yZGVyQ29sb3IgPSBuZXcgX0NvbG9yMi5kZWZhdWx0KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2JvcmRlci0nICsgc2lkZSArICctY29sb3InKSk7XG4gICAgICAgIHZhciBib3JkZXJTdHlsZSA9IHBhcnNlQm9yZGVyU3R5bGUoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnYm9yZGVyLScgKyBzaWRlICsgJy1zdHlsZScpKTtcbiAgICAgICAgdmFyIGJvcmRlcldpZHRoID0gcGFyc2VGbG9hdChzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdib3JkZXItJyArIHNpZGUgKyAnLXdpZHRoJykpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGJvcmRlckNvbG9yLFxuICAgICAgICAgICAgYm9yZGVyU3R5bGU6IGJvcmRlclN0eWxlLFxuICAgICAgICAgICAgYm9yZGVyV2lkdGg6IGlzTmFOKGJvcmRlcldpZHRoKSA/IDAgOiBib3JkZXJXaWR0aFxuICAgICAgICB9O1xuICAgIH0pO1xufTtcblxuLyoqKi8gfSksXG4vKiAxMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgdG9Db2RlUG9pbnRzID0gZXhwb3J0cy50b0NvZGVQb2ludHMgPSBmdW5jdGlvbiB0b0NvZGVQb2ludHMoc3RyKSB7XG4gICAgdmFyIGNvZGVQb2ludHMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGxlbmd0aCA9IHN0ci5sZW5ndGg7XG4gICAgd2hpbGUgKGkgPCBsZW5ndGgpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gc3RyLmNoYXJDb2RlQXQoaSsrKTtcbiAgICAgICAgaWYgKHZhbHVlID49IDB4ZDgwMCAmJiB2YWx1ZSA8PSAweGRiZmYgJiYgaSA8IGxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGV4dHJhID0gc3RyLmNoYXJDb2RlQXQoaSsrKTtcbiAgICAgICAgICAgIGlmICgoZXh0cmEgJiAweGZjMDApID09PSAweGRjMDApIHtcbiAgICAgICAgICAgICAgICBjb2RlUG9pbnRzLnB1c2goKCh2YWx1ZSAmIDB4M2ZmKSA8PCAxMCkgKyAoZXh0cmEgJiAweDNmZikgKyAweDEwMDAwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29kZVBvaW50cy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBpLS07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb2RlUG9pbnRzLnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb2RlUG9pbnRzO1xufTtcblxudmFyIGZyb21Db2RlUG9pbnQgPSBleHBvcnRzLmZyb21Db2RlUG9pbnQgPSBmdW5jdGlvbiBmcm9tQ29kZVBvaW50KCkge1xuICAgIGlmIChTdHJpbmcuZnJvbUNvZGVQb2ludCkge1xuICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21Db2RlUG9pbnQuYXBwbHkoU3RyaW5nLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGlmICghbGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICB2YXIgY29kZVVuaXRzID0gW107XG5cbiAgICB2YXIgaW5kZXggPSAtMTtcbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgdmFyIGNvZGVQb2ludCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gaW5kZXggPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbaW5kZXhdO1xuICAgICAgICBpZiAoY29kZVBvaW50IDw9IDB4ZmZmZikge1xuICAgICAgICAgICAgY29kZVVuaXRzLnB1c2goY29kZVBvaW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvZGVQb2ludCAtPSAweDEwMDAwO1xuICAgICAgICAgICAgY29kZVVuaXRzLnB1c2goKGNvZGVQb2ludCA+PiAxMCkgKyAweGQ4MDAsIGNvZGVQb2ludCAlIDB4NDAwICsgMHhkYzAwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5kZXggKyAxID09PSBsZW5ndGggfHwgY29kZVVuaXRzLmxlbmd0aCA+IDB4NDAwMCkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoU3RyaW5nLCBjb2RlVW5pdHMpO1xuICAgICAgICAgICAgY29kZVVuaXRzLmxlbmd0aCA9IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbnZhciBjaGFycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJztcblxuLy8gVXNlIGEgbG9va3VwIHRhYmxlIHRvIGZpbmQgdGhlIGluZGV4LlxudmFyIGxvb2t1cCA9IHR5cGVvZiBVaW50OEFycmF5ID09PSAndW5kZWZpbmVkJyA/IFtdIDogbmV3IFVpbnQ4QXJyYXkoMjU2KTtcbmZvciAodmFyIGkgPSAwOyBpIDwgY2hhcnMubGVuZ3RoOyBpKyspIHtcbiAgICBsb29rdXBbY2hhcnMuY2hhckNvZGVBdChpKV0gPSBpO1xufVxuXG52YXIgZGVjb2RlID0gZXhwb3J0cy5kZWNvZGUgPSBmdW5jdGlvbiBkZWNvZGUoYmFzZTY0KSB7XG4gICAgdmFyIGJ1ZmZlckxlbmd0aCA9IGJhc2U2NC5sZW5ndGggKiAwLjc1LFxuICAgICAgICBsZW4gPSBiYXNlNjQubGVuZ3RoLFxuICAgICAgICBpID0gdm9pZCAwLFxuICAgICAgICBwID0gMCxcbiAgICAgICAgZW5jb2RlZDEgPSB2b2lkIDAsXG4gICAgICAgIGVuY29kZWQyID0gdm9pZCAwLFxuICAgICAgICBlbmNvZGVkMyA9IHZvaWQgMCxcbiAgICAgICAgZW5jb2RlZDQgPSB2b2lkIDA7XG5cbiAgICBpZiAoYmFzZTY0W2Jhc2U2NC5sZW5ndGggLSAxXSA9PT0gJz0nKSB7XG4gICAgICAgIGJ1ZmZlckxlbmd0aC0tO1xuICAgICAgICBpZiAoYmFzZTY0W2Jhc2U2NC5sZW5ndGggLSAyXSA9PT0gJz0nKSB7XG4gICAgICAgICAgICBidWZmZXJMZW5ndGgtLTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBidWZmZXIgPSB0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgVWludDhBcnJheS5wcm90b3R5cGUuc2xpY2UgIT09ICd1bmRlZmluZWQnID8gbmV3IEFycmF5QnVmZmVyKGJ1ZmZlckxlbmd0aCkgOiBuZXcgQXJyYXkoYnVmZmVyTGVuZ3RoKTtcbiAgICB2YXIgYnl0ZXMgPSBBcnJheS5pc0FycmF5KGJ1ZmZlcikgPyBidWZmZXIgOiBuZXcgVWludDhBcnJheShidWZmZXIpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgICAgIGVuY29kZWQxID0gbG9va3VwW2Jhc2U2NC5jaGFyQ29kZUF0KGkpXTtcbiAgICAgICAgZW5jb2RlZDIgPSBsb29rdXBbYmFzZTY0LmNoYXJDb2RlQXQoaSArIDEpXTtcbiAgICAgICAgZW5jb2RlZDMgPSBsb29rdXBbYmFzZTY0LmNoYXJDb2RlQXQoaSArIDIpXTtcbiAgICAgICAgZW5jb2RlZDQgPSBsb29rdXBbYmFzZTY0LmNoYXJDb2RlQXQoaSArIDMpXTtcblxuICAgICAgICBieXRlc1twKytdID0gZW5jb2RlZDEgPDwgMiB8IGVuY29kZWQyID4+IDQ7XG4gICAgICAgIGJ5dGVzW3ArK10gPSAoZW5jb2RlZDIgJiAxNSkgPDwgNCB8IGVuY29kZWQzID4+IDI7XG4gICAgICAgIGJ5dGVzW3ArK10gPSAoZW5jb2RlZDMgJiAzKSA8PCA2IHwgZW5jb2RlZDQgJiA2MztcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmZmVyO1xufTtcblxudmFyIHBvbHlVaW50MTZBcnJheSA9IGV4cG9ydHMucG9seVVpbnQxNkFycmF5ID0gZnVuY3Rpb24gcG9seVVpbnQxNkFycmF5KGJ1ZmZlcikge1xuICAgIHZhciBsZW5ndGggPSBidWZmZXIubGVuZ3RoO1xuICAgIHZhciBieXRlcyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsZW5ndGg7IF9pICs9IDIpIHtcbiAgICAgICAgYnl0ZXMucHVzaChidWZmZXJbX2kgKyAxXSA8PCA4IHwgYnVmZmVyW19pXSk7XG4gICAgfVxuICAgIHJldHVybiBieXRlcztcbn07XG5cbnZhciBwb2x5VWludDMyQXJyYXkgPSBleHBvcnRzLnBvbHlVaW50MzJBcnJheSA9IGZ1bmN0aW9uIHBvbHlVaW50MzJBcnJheShidWZmZXIpIHtcbiAgICB2YXIgbGVuZ3RoID0gYnVmZmVyLmxlbmd0aDtcbiAgICB2YXIgYnl0ZXMgPSBbXTtcbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBsZW5ndGg7IF9pMiArPSA0KSB7XG4gICAgICAgIGJ5dGVzLnB1c2goYnVmZmVyW19pMiArIDNdIDw8IDI0IHwgYnVmZmVyW19pMiArIDJdIDw8IDE2IHwgYnVmZmVyW19pMiArIDFdIDw8IDggfCBidWZmZXJbX2kyXSk7XG4gICAgfVxuICAgIHJldHVybiBieXRlcztcbn07XG5cbi8qKiovIH0pLFxuLyogMTQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jcmVhdGVDb3VudGVyVGV4dCA9IGV4cG9ydHMuaW5saW5lTGlzdEl0ZW1FbGVtZW50ID0gZXhwb3J0cy5nZXRMaXN0T3duZXIgPSB1bmRlZmluZWQ7XG5cbnZhciBfVXRpbCA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG5cbnZhciBfTm9kZUNvbnRhaW5lciA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cbnZhciBfTm9kZUNvbnRhaW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ob2RlQ29udGFpbmVyKTtcblxudmFyIF9UZXh0Q29udGFpbmVyID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTtcblxudmFyIF9UZXh0Q29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RleHRDb250YWluZXIpO1xuXG52YXIgX2xpc3RTdHlsZSA9IF9fd2VicGFja19yZXF1aXJlX18oOCk7XG5cbnZhciBfVW5pY29kZSA9IF9fd2VicGFja19yZXF1aXJlX18oMjQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vLyBNYXJnaW4gYmV0d2VlbiB0aGUgZW51bWVyYXRpb24gYW5kIHRoZSBsaXN0IGl0ZW0gY29udGVudFxudmFyIE1BUkdJTl9SSUdIVCA9IDc7XG5cbnZhciBhbmNlc3RvclR5cGVzID0gWydPTCcsICdVTCcsICdNRU5VJ107XG5cbnZhciBnZXRMaXN0T3duZXIgPSBleHBvcnRzLmdldExpc3RPd25lciA9IGZ1bmN0aW9uIGdldExpc3RPd25lcihjb250YWluZXIpIHtcbiAgICB2YXIgcGFyZW50ID0gY29udGFpbmVyLnBhcmVudDtcbiAgICBpZiAoIXBhcmVudCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBkbyB7XG4gICAgICAgIHZhciBpc0FuY2VzdG9yID0gYW5jZXN0b3JUeXBlcy5pbmRleE9mKHBhcmVudC50YWdOYW1lKSAhPT0gLTE7XG4gICAgICAgIGlmIChpc0FuY2VzdG9yKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XG4gICAgfSB3aGlsZSAocGFyZW50KTtcblxuICAgIHJldHVybiBjb250YWluZXIucGFyZW50O1xufTtcblxudmFyIGlubGluZUxpc3RJdGVtRWxlbWVudCA9IGV4cG9ydHMuaW5saW5lTGlzdEl0ZW1FbGVtZW50ID0gZnVuY3Rpb24gaW5saW5lTGlzdEl0ZW1FbGVtZW50KG5vZGUsIGNvbnRhaW5lciwgcmVzb3VyY2VMb2FkZXIpIHtcbiAgICB2YXIgbGlzdFN0eWxlID0gY29udGFpbmVyLnN0eWxlLmxpc3RTdHlsZTtcblxuICAgIGlmICghbGlzdFN0eWxlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgc3R5bGUgPSBub2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBudWxsKTtcbiAgICB2YXIgd3JhcHBlciA9IG5vZGUub3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KCdodG1sMmNhbnZhc3dyYXBwZXInKTtcbiAgICAoMCwgX1V0aWwuY29weUNTU1N0eWxlcykoc3R5bGUsIHdyYXBwZXIpO1xuXG4gICAgd3JhcHBlci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgd3JhcHBlci5zdHlsZS5ib3R0b20gPSAnYXV0byc7XG4gICAgd3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB3cmFwcGVyLnN0eWxlLmxldHRlclNwYWNpbmcgPSAnbm9ybWFsJztcblxuICAgIHN3aXRjaCAobGlzdFN0eWxlLmxpc3RTdHlsZVBvc2l0aW9uKSB7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1BPU0lUSU9OLk9VVFNJREU6XG4gICAgICAgICAgICB3cmFwcGVyLnN0eWxlLmxlZnQgPSAnYXV0byc7XG4gICAgICAgICAgICB3cmFwcGVyLnN0eWxlLnJpZ2h0ID0gbm9kZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LmlubmVyV2lkdGggLSBjb250YWluZXIuYm91bmRzLmxlZnQgLSBjb250YWluZXIuc3R5bGUubWFyZ2luWzFdLmdldEFic29sdXRlVmFsdWUoY29udGFpbmVyLmJvdW5kcy53aWR0aCkgKyBNQVJHSU5fUklHSFQgKyAncHgnO1xuICAgICAgICAgICAgd3JhcHBlci5zdHlsZS50ZXh0QWxpZ24gPSAncmlnaHQnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1BPU0lUSU9OLklOU0lERTpcbiAgICAgICAgICAgIHdyYXBwZXIuc3R5bGUubGVmdCA9IGNvbnRhaW5lci5ib3VuZHMubGVmdCAtIGNvbnRhaW5lci5zdHlsZS5tYXJnaW5bM10uZ2V0QWJzb2x1dGVWYWx1ZShjb250YWluZXIuYm91bmRzLndpZHRoKSArICdweCc7XG4gICAgICAgICAgICB3cmFwcGVyLnN0eWxlLnJpZ2h0ID0gJ2F1dG8nO1xuICAgICAgICAgICAgd3JhcHBlci5zdHlsZS50ZXh0QWxpZ24gPSAnbGVmdCc7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICB2YXIgdGV4dCA9IHZvaWQgMDtcbiAgICB2YXIgTUFSR0lOX1RPUCA9IGNvbnRhaW5lci5zdHlsZS5tYXJnaW5bMF0uZ2V0QWJzb2x1dGVWYWx1ZShjb250YWluZXIuYm91bmRzLndpZHRoKTtcbiAgICB2YXIgc3R5bGVJbWFnZSA9IGxpc3RTdHlsZS5saXN0U3R5bGVJbWFnZTtcbiAgICBpZiAoc3R5bGVJbWFnZSkge1xuICAgICAgICBpZiAoc3R5bGVJbWFnZS5tZXRob2QgPT09ICd1cmwnKSB7XG4gICAgICAgICAgICB2YXIgaW1hZ2UgPSBub2RlLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBpbWFnZS5zcmMgPSBzdHlsZUltYWdlLmFyZ3NbMF07XG4gICAgICAgICAgICB3cmFwcGVyLnN0eWxlLnRvcCA9IGNvbnRhaW5lci5ib3VuZHMudG9wIC0gTUFSR0lOX1RPUCArICdweCc7XG4gICAgICAgICAgICB3cmFwcGVyLnN0eWxlLndpZHRoID0gJ2F1dG8nO1xuICAgICAgICAgICAgd3JhcHBlci5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XG4gICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBzaXplID0gcGFyc2VGbG9hdChjb250YWluZXIuc3R5bGUuZm9udC5mb250U2l6ZSkgKiAwLjU7XG4gICAgICAgICAgICB3cmFwcGVyLnN0eWxlLnRvcCA9IGNvbnRhaW5lci5ib3VuZHMudG9wIC0gTUFSR0lOX1RPUCArIGNvbnRhaW5lci5ib3VuZHMuaGVpZ2h0IC0gMS41ICogc2l6ZSArICdweCc7XG4gICAgICAgICAgICB3cmFwcGVyLnN0eWxlLndpZHRoID0gc2l6ZSArICdweCc7XG4gICAgICAgICAgICB3cmFwcGVyLnN0eWxlLmhlaWdodCA9IHNpemUgKyAncHgnO1xuICAgICAgICAgICAgd3JhcHBlci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBzdHlsZS5saXN0U3R5bGVJbWFnZTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbnRhaW5lci5saXN0SW5kZXggPT09ICdudW1iZXInKSB7XG4gICAgICAgIHRleHQgPSBub2RlLm93bmVyRG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3JlYXRlQ291bnRlclRleHQoY29udGFpbmVyLmxpc3RJbmRleCwgbGlzdFN0eWxlLmxpc3RTdHlsZVR5cGUsIHRydWUpKTtcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgICAgd3JhcHBlci5zdHlsZS50b3AgPSBjb250YWluZXIuYm91bmRzLnRvcCAtIE1BUkdJTl9UT1AgKyAncHgnO1xuICAgIH1cblxuICAgIC8vICRGbG93Rml4TWVcbiAgICB2YXIgYm9keSA9IG5vZGUub3duZXJEb2N1bWVudC5ib2R5O1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG5cbiAgICBpZiAodGV4dCkge1xuICAgICAgICBjb250YWluZXIuY2hpbGROb2Rlcy5wdXNoKF9UZXh0Q29udGFpbmVyMi5kZWZhdWx0LmZyb21UZXh0Tm9kZSh0ZXh0LCBjb250YWluZXIpKTtcbiAgICAgICAgYm9keS5yZW1vdmVDaGlsZCh3cmFwcGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICAgIGNvbnRhaW5lci5jaGlsZE5vZGVzLnB1c2gobmV3IF9Ob2RlQ29udGFpbmVyMi5kZWZhdWx0KHdyYXBwZXIsIGNvbnRhaW5lciwgcmVzb3VyY2VMb2FkZXIsIDApKTtcbiAgICB9XG59O1xuXG52YXIgUk9NQU5fVVBQRVIgPSB7XG4gICAgaW50ZWdlcnM6IFsxMDAwLCA5MDAsIDUwMCwgNDAwLCAxMDAsIDkwLCA1MCwgNDAsIDEwLCA5LCA1LCA0LCAxXSxcbiAgICB2YWx1ZXM6IFsnTScsICdDTScsICdEJywgJ0NEJywgJ0MnLCAnWEMnLCAnTCcsICdYTCcsICdYJywgJ0lYJywgJ1YnLCAnSVYnLCAnSSddXG59O1xuXG52YXIgQVJNRU5JQU4gPSB7XG4gICAgaW50ZWdlcnM6IFs5MDAwLCA4MDAwLCA3MDAwLCA2MDAwLCA1MDAwLCA0MDAwLCAzMDAwLCAyMDAwLCAxMDAwLCA5MDAsIDgwMCwgNzAwLCA2MDAsIDUwMCwgNDAwLCAzMDAsIDIwMCwgMTAwLCA5MCwgODAsIDcwLCA2MCwgNTAsIDQwLCAzMCwgMjAsIDEwLCA5LCA4LCA3LCA2LCA1LCA0LCAzLCAyLCAxXSxcbiAgICB2YWx1ZXM6IFsn1ZQnLCAn1ZMnLCAn1ZInLCAn1ZEnLCAn1ZAnLCAn1Y8nLCAn1Y4nLCAn1Y0nLCAn1YwnLCAn1YsnLCAn1YonLCAn1YknLCAn1YgnLCAn1YcnLCAn1YYnLCAn1YUnLCAn1YQnLCAn1YMnLCAn1YInLCAn1YEnLCAn1YAnLCAn1L8nLCAn1L4nLCAn1L0nLCAn1LwnLCAn1LsnLCAn1LonLCAn1LknLCAn1LgnLCAn1LcnLCAn1LYnLCAn1LUnLCAn1LQnLCAn1LMnLCAn1LInLCAn1LEnXVxufTtcblxudmFyIEhFQlJFVyA9IHtcbiAgICBpbnRlZ2VyczogWzEwMDAwLCA5MDAwLCA4MDAwLCA3MDAwLCA2MDAwLCA1MDAwLCA0MDAwLCAzMDAwLCAyMDAwLCAxMDAwLCA0MDAsIDMwMCwgMjAwLCAxMDAsIDkwLCA4MCwgNzAsIDYwLCA1MCwgNDAsIDMwLCAyMCwgMTksIDE4LCAxNywgMTYsIDE1LCAxMCwgOSwgOCwgNywgNiwgNSwgNCwgMywgMiwgMV0sXG4gICAgdmFsdWVzOiBbJ9eZ17MnLCAn15jXsycsICfXl9ezJywgJ9eW17MnLCAn15XXsycsICfXlNezJywgJ9eT17MnLCAn15LXsycsICfXkdezJywgJ9eQ17MnLCAn16onLCAn16knLCAn16gnLCAn16cnLCAn16YnLCAn16QnLCAn16InLCAn16EnLCAn16AnLCAn154nLCAn15wnLCAn15snLCAn15nXmCcsICfXmdeXJywgJ9eZ15YnLCAn15jXlicsICfXmNeVJywgJ9eZJywgJ9eYJywgJ9eXJywgJ9eWJywgJ9eVJywgJ9eUJywgJ9eTJywgJ9eSJywgJ9eRJywgJ9eQJ11cbn07XG5cbnZhciBHRU9SR0lBTiA9IHtcbiAgICBpbnRlZ2VyczogWzEwMDAwLCA5MDAwLCA4MDAwLCA3MDAwLCA2MDAwLCA1MDAwLCA0MDAwLCAzMDAwLCAyMDAwLCAxMDAwLCA5MDAsIDgwMCwgNzAwLCA2MDAsIDUwMCwgNDAwLCAzMDAsIDIwMCwgMTAwLCA5MCwgODAsIDcwLCA2MCwgNTAsIDQwLCAzMCwgMjAsIDEwLCA5LCA4LCA3LCA2LCA1LCA0LCAzLCAyLCAxXSxcbiAgICB2YWx1ZXM6IFsn4YO1JywgJ+GDsCcsICfhg68nLCAn4YO0JywgJ+GDricsICfhg60nLCAn4YOsJywgJ+GDqycsICfhg6onLCAn4YOpJywgJ+GDqCcsICfhg6cnLCAn4YOmJywgJ+GDpScsICfhg6QnLCAn4YOzJywgJ+GDoicsICfhg6EnLCAn4YOgJywgJ+GDnycsICfhg54nLCAn4YOdJywgJ+GDsicsICfhg5wnLCAn4YObJywgJ+GDmicsICfhg5knLCAn4YOYJywgJ+GDlycsICfhg7EnLCAn4YOWJywgJ+GDlScsICfhg5QnLCAn4YOTJywgJ+GDkicsICfhg5EnLCAn4YOQJ11cbn07XG5cbnZhciBjcmVhdGVBZGRpdGl2ZUNvdW50ZXIgPSBmdW5jdGlvbiBjcmVhdGVBZGRpdGl2ZUNvdW50ZXIodmFsdWUsIG1pbiwgbWF4LCBzeW1ib2xzLCBmYWxsYmFjaywgc3VmZml4KSB7XG4gICAgaWYgKHZhbHVlIDwgbWluIHx8IHZhbHVlID4gbWF4KSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyVGV4dCh2YWx1ZSwgZmFsbGJhY2ssIHN1ZmZpeC5sZW5ndGggPiAwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3ltYm9scy5pbnRlZ2Vycy5yZWR1Y2UoZnVuY3Rpb24gKHN0cmluZywgaW50ZWdlciwgaW5kZXgpIHtcbiAgICAgICAgd2hpbGUgKHZhbHVlID49IGludGVnZXIpIHtcbiAgICAgICAgICAgIHZhbHVlIC09IGludGVnZXI7XG4gICAgICAgICAgICBzdHJpbmcgKz0gc3ltYm9scy52YWx1ZXNbaW5kZXhdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgfSwgJycpICsgc3VmZml4O1xufTtcblxudmFyIGNyZWF0ZUNvdW50ZXJTdHlsZVdpdGhTeW1ib2xSZXNvbHZlciA9IGZ1bmN0aW9uIGNyZWF0ZUNvdW50ZXJTdHlsZVdpdGhTeW1ib2xSZXNvbHZlcih2YWx1ZSwgY29kZVBvaW50UmFuZ2VMZW5ndGgsIGlzTnVtZXJpYywgcmVzb2x2ZXIpIHtcbiAgICB2YXIgc3RyaW5nID0gJyc7XG5cbiAgICBkbyB7XG4gICAgICAgIGlmICghaXNOdW1lcmljKSB7XG4gICAgICAgICAgICB2YWx1ZS0tO1xuICAgICAgICB9XG4gICAgICAgIHN0cmluZyA9IHJlc29sdmVyKHZhbHVlKSArIHN0cmluZztcbiAgICAgICAgdmFsdWUgLz0gY29kZVBvaW50UmFuZ2VMZW5ndGg7XG4gICAgfSB3aGlsZSAodmFsdWUgKiBjb2RlUG9pbnRSYW5nZUxlbmd0aCA+PSBjb2RlUG9pbnRSYW5nZUxlbmd0aCk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xufTtcblxudmFyIGNyZWF0ZUNvdW50ZXJTdHlsZUZyb21SYW5nZSA9IGZ1bmN0aW9uIGNyZWF0ZUNvdW50ZXJTdHlsZUZyb21SYW5nZSh2YWx1ZSwgY29kZVBvaW50UmFuZ2VTdGFydCwgY29kZVBvaW50UmFuZ2VFbmQsIGlzTnVtZXJpYywgc3VmZml4KSB7XG4gICAgdmFyIGNvZGVQb2ludFJhbmdlTGVuZ3RoID0gY29kZVBvaW50UmFuZ2VFbmQgLSBjb2RlUG9pbnRSYW5nZVN0YXJ0ICsgMTtcblxuICAgIHJldHVybiAodmFsdWUgPCAwID8gJy0nIDogJycpICsgKGNyZWF0ZUNvdW50ZXJTdHlsZVdpdGhTeW1ib2xSZXNvbHZlcihNYXRoLmFicyh2YWx1ZSksIGNvZGVQb2ludFJhbmdlTGVuZ3RoLCBpc051bWVyaWMsIGZ1bmN0aW9uIChjb2RlUG9pbnQpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfVW5pY29kZS5mcm9tQ29kZVBvaW50KShNYXRoLmZsb29yKGNvZGVQb2ludCAlIGNvZGVQb2ludFJhbmdlTGVuZ3RoKSArIGNvZGVQb2ludFJhbmdlU3RhcnQpO1xuICAgIH0pICsgc3VmZml4KTtcbn07XG5cbnZhciBjcmVhdGVDb3VudGVyU3R5bGVGcm9tU3ltYm9scyA9IGZ1bmN0aW9uIGNyZWF0ZUNvdW50ZXJTdHlsZUZyb21TeW1ib2xzKHZhbHVlLCBzeW1ib2xzKSB7XG4gICAgdmFyIHN1ZmZpeCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogJy4gJztcblxuICAgIHZhciBjb2RlUG9pbnRSYW5nZUxlbmd0aCA9IHN5bWJvbHMubGVuZ3RoO1xuICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVXaXRoU3ltYm9sUmVzb2x2ZXIoTWF0aC5hYnModmFsdWUpLCBjb2RlUG9pbnRSYW5nZUxlbmd0aCwgZmFsc2UsIGZ1bmN0aW9uIChjb2RlUG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIHN5bWJvbHNbTWF0aC5mbG9vcihjb2RlUG9pbnQgJSBjb2RlUG9pbnRSYW5nZUxlbmd0aCldO1xuICAgIH0pICsgc3VmZml4O1xufTtcblxudmFyIENKS19aRVJPUyA9IDEgPDwgMDtcbnZhciBDSktfVEVOX0NPRUZGSUNJRU5UUyA9IDEgPDwgMTtcbnZhciBDSktfVEVOX0hJR0hfQ09FRkZJQ0lFTlRTID0gMSA8PCAyO1xudmFyIENKS19IVU5EUkVEX0NPRUZGSUNJRU5UUyA9IDEgPDwgMztcblxudmFyIGNyZWF0ZUNKS0NvdW50ZXIgPSBmdW5jdGlvbiBjcmVhdGVDSktDb3VudGVyKHZhbHVlLCBudW1iZXJzLCBtdWx0aXBsaWVycywgbmVnYXRpdmVTaWduLCBzdWZmaXgsIGZsYWdzKSB7XG4gICAgaWYgKHZhbHVlIDwgLTk5OTkgfHwgdmFsdWUgPiA5OTk5KSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyVGV4dCh2YWx1ZSwgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuQ0pLX0RFQ0lNQUwsIHN1ZmZpeC5sZW5ndGggPiAwKTtcbiAgICB9XG4gICAgdmFyIHRtcCA9IE1hdGguYWJzKHZhbHVlKTtcbiAgICB2YXIgc3RyaW5nID0gc3VmZml4O1xuXG4gICAgaWYgKHRtcCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gbnVtYmVyc1swXSArIHN0cmluZztcbiAgICB9XG5cbiAgICBmb3IgKHZhciBkaWdpdCA9IDA7IHRtcCA+IDAgJiYgZGlnaXQgPD0gNDsgZGlnaXQrKykge1xuICAgICAgICB2YXIgY29lZmZpY2llbnQgPSB0bXAgJSAxMDtcblxuICAgICAgICBpZiAoY29lZmZpY2llbnQgPT09IDAgJiYgKDAsIF9VdGlsLmNvbnRhaW5zKShmbGFncywgQ0pLX1pFUk9TKSAmJiBzdHJpbmcgIT09ICcnKSB7XG4gICAgICAgICAgICBzdHJpbmcgPSBudW1iZXJzW2NvZWZmaWNpZW50XSArIHN0cmluZztcbiAgICAgICAgfSBlbHNlIGlmIChjb2VmZmljaWVudCA+IDEgfHwgY29lZmZpY2llbnQgPT09IDEgJiYgZGlnaXQgPT09IDAgfHwgY29lZmZpY2llbnQgPT09IDEgJiYgZGlnaXQgPT09IDEgJiYgKDAsIF9VdGlsLmNvbnRhaW5zKShmbGFncywgQ0pLX1RFTl9DT0VGRklDSUVOVFMpIHx8IGNvZWZmaWNpZW50ID09PSAxICYmIGRpZ2l0ID09PSAxICYmICgwLCBfVXRpbC5jb250YWlucykoZmxhZ3MsIENKS19URU5fSElHSF9DT0VGRklDSUVOVFMpICYmIHZhbHVlID4gMTAwIHx8IGNvZWZmaWNpZW50ID09PSAxICYmIGRpZ2l0ID4gMSAmJiAoMCwgX1V0aWwuY29udGFpbnMpKGZsYWdzLCBDSktfSFVORFJFRF9DT0VGRklDSUVOVFMpKSB7XG4gICAgICAgICAgICBzdHJpbmcgPSBudW1iZXJzW2NvZWZmaWNpZW50XSArIChkaWdpdCA+IDAgPyBtdWx0aXBsaWVyc1tkaWdpdCAtIDFdIDogJycpICsgc3RyaW5nO1xuICAgICAgICB9IGVsc2UgaWYgKGNvZWZmaWNpZW50ID09PSAxICYmIGRpZ2l0ID4gMCkge1xuICAgICAgICAgICAgc3RyaW5nID0gbXVsdGlwbGllcnNbZGlnaXQgLSAxXSArIHN0cmluZztcbiAgICAgICAgfVxuICAgICAgICB0bXAgPSBNYXRoLmZsb29yKHRtcCAvIDEwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKHZhbHVlIDwgMCA/IG5lZ2F0aXZlU2lnbiA6ICcnKSArIHN0cmluZztcbn07XG5cbnZhciBDSElORVNFX0lORk9STUFMX01VTFRJUExJRVJTID0gJ+WNgeeZvuWNg+iQrCc7XG52YXIgQ0hJTkVTRV9GT1JNQUxfTVVMVElQTElFUlMgPSAn5ou+5L2w5Luf6JCsJztcbnZhciBKQVBBTkVTRV9ORUdBVElWRSA9ICfjg57jgqTjg4rjgrknO1xudmFyIEtPUkVBTl9ORUdBVElWRSA9ICfrp4jsnbTrhIjsiqQgJztcblxudmFyIGNyZWF0ZUNvdW50ZXJUZXh0ID0gZXhwb3J0cy5jcmVhdGVDb3VudGVyVGV4dCA9IGZ1bmN0aW9uIGNyZWF0ZUNvdW50ZXJUZXh0KHZhbHVlLCB0eXBlLCBhcHBlbmRTdWZmaXgpIHtcbiAgICB2YXIgZGVmYXVsdFN1ZmZpeCA9IGFwcGVuZFN1ZmZpeCA/ICcuICcgOiAnJztcbiAgICB2YXIgY2prU3VmZml4ID0gYXBwZW5kU3VmZml4ID8gJ+OAgScgOiAnJztcbiAgICB2YXIga29yZWFuU3VmZml4ID0gYXBwZW5kU3VmZml4ID8gJywgJyA6ICcnO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkRJU0M6XG4gICAgICAgICAgICByZXR1cm4gJ+KAoic7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuQ0lSQ0xFOlxuICAgICAgICAgICAgcmV0dXJuICfil6YnO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLlNRVUFSRTpcbiAgICAgICAgICAgIHJldHVybiAn4pe+JztcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5ERUNJTUFMX0xFQURJTkdfWkVSTzpcbiAgICAgICAgICAgIHZhciBzdHJpbmcgPSBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDQ4LCA1NywgdHJ1ZSwgZGVmYXVsdFN1ZmZpeCk7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nLmxlbmd0aCA8IDQgPyAnMCcgKyBzdHJpbmcgOiBzdHJpbmc7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuQ0pLX0RFQ0lNQUw6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVN5bWJvbHModmFsdWUsICfjgIfkuIDkuozkuInlm5vkupTlha3kuIPlhavkuZ0nLCBjamtTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkxPV0VSX1JPTUFOOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUFkZGl0aXZlQ291bnRlcih2YWx1ZSwgMSwgMzk5OSwgUk9NQU5fVVBQRVIsIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkRFQ0lNQUwsIGRlZmF1bHRTdWZmaXgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuVVBQRVJfUk9NQU46XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQWRkaXRpdmVDb3VudGVyKHZhbHVlLCAxLCAzOTk5LCBST01BTl9VUFBFUiwgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuREVDSU1BTCwgZGVmYXVsdFN1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuTE9XRVJfR1JFRUs6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVJhbmdlKHZhbHVlLCA5NDUsIDk2OSwgZmFsc2UsIGRlZmF1bHRTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkxPV0VSX0FMUEhBOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvdW50ZXJTdHlsZUZyb21SYW5nZSh2YWx1ZSwgOTcsIDEyMiwgZmFsc2UsIGRlZmF1bHRTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLlVQUEVSX0FMUEhBOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvdW50ZXJTdHlsZUZyb21SYW5nZSh2YWx1ZSwgNjUsIDkwLCBmYWxzZSwgZGVmYXVsdFN1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuQVJBQklDX0lORElDOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvdW50ZXJTdHlsZUZyb21SYW5nZSh2YWx1ZSwgMTYzMiwgMTY0MSwgdHJ1ZSwgZGVmYXVsdFN1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuQVJNRU5JQU46XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuVVBQRVJfQVJNRU5JQU46XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQWRkaXRpdmVDb3VudGVyKHZhbHVlLCAxLCA5OTk5LCBBUk1FTklBTiwgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuREVDSU1BTCwgZGVmYXVsdFN1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuTE9XRVJfQVJNRU5JQU46XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQWRkaXRpdmVDb3VudGVyKHZhbHVlLCAxLCA5OTk5LCBBUk1FTklBTiwgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuREVDSU1BTCwgZGVmYXVsdFN1ZmZpeCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5CRU5HQUxJOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvdW50ZXJTdHlsZUZyb21SYW5nZSh2YWx1ZSwgMjUzNCwgMjU0MywgdHJ1ZSwgZGVmYXVsdFN1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuQ0FNQk9ESUFOOlxuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLktITUVSOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvdW50ZXJTdHlsZUZyb21SYW5nZSh2YWx1ZSwgNjExMiwgNjEyMSwgdHJ1ZSwgZGVmYXVsdFN1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuQ0pLX0VBUlRITFlfQlJBTkNIOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvdW50ZXJTdHlsZUZyb21TeW1ib2xzKHZhbHVlLCAn5a2Q5LiR5a+F5Y2v6L6w5bez5Y2I5pyq55Sz6YWJ5oiM5LqlJywgY2prU3VmZml4KTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5DSktfSEVBVkVOTFlfU1RFTTpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tU3ltYm9scyh2YWx1ZSwgJ+eUsuS5meS4meS4geaIiuW3seW6mui+m+WjrOeZuCcsIGNqa1N1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuQ0pLX0lERU9HUkFQSElDOlxuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLlRSQURfQ0hJTkVTRV9JTkZPUk1BTDpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDSktDb3VudGVyKHZhbHVlLCAn6Zu25LiA5LqM5LiJ5Zub5LqU5YWt5LiD5YWr5LmdJywgQ0hJTkVTRV9JTkZPUk1BTF9NVUxUSVBMSUVSUywgJ+iyoCcsIGNqa1N1ZmZpeCwgQ0pLX1RFTl9DT0VGRklDSUVOVFMgfCBDSktfVEVOX0hJR0hfQ09FRkZJQ0lFTlRTIHwgQ0pLX0hVTkRSRURfQ09FRkZJQ0lFTlRTKTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5UUkFEX0NISU5FU0VfRk9STUFMOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNKS0NvdW50ZXIodmFsdWUsICfpm7blo7nosrPlj4PogobkvI3pmbjmn5LmjYznjpYnLCBDSElORVNFX0ZPUk1BTF9NVUxUSVBMSUVSUywgJ+iyoCcsIGNqa1N1ZmZpeCwgQ0pLX1pFUk9TIHwgQ0pLX1RFTl9DT0VGRklDSUVOVFMgfCBDSktfVEVOX0hJR0hfQ09FRkZJQ0lFTlRTIHwgQ0pLX0hVTkRSRURfQ09FRkZJQ0lFTlRTKTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5TSU1QX0NISU5FU0VfSU5GT1JNQUw6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ0pLQ291bnRlcih2YWx1ZSwgJ+mbtuS4gOS6jOS4ieWbm+S6lOWFreS4g+WFq+S5nScsIENISU5FU0VfSU5GT1JNQUxfTVVMVElQTElFUlMsICfotJ8nLCBjamtTdWZmaXgsIENKS19URU5fQ09FRkZJQ0lFTlRTIHwgQ0pLX1RFTl9ISUdIX0NPRUZGSUNJRU5UUyB8IENKS19IVU5EUkVEX0NPRUZGSUNJRU5UUyk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuU0lNUF9DSElORVNFX0ZPUk1BTDpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDSktDb3VudGVyKHZhbHVlLCAn6Zu25aO56LSw5Y+B6IKG5LyN6ZmG5p+S5o2M546WJywgQ0hJTkVTRV9GT1JNQUxfTVVMVElQTElFUlMsICfotJ8nLCBjamtTdWZmaXgsIENKS19aRVJPUyB8IENKS19URU5fQ09FRkZJQ0lFTlRTIHwgQ0pLX1RFTl9ISUdIX0NPRUZGSUNJRU5UUyB8IENKS19IVU5EUkVEX0NPRUZGSUNJRU5UUyk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuSkFQQU5FU0VfSU5GT1JNQUw6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ0pLQ291bnRlcih2YWx1ZSwgJ+OAh+S4gOS6jOS4ieWbm+S6lOWFreS4g+WFq+S5nScsICfljYHnmb7ljYPkuIcnLCBKQVBBTkVTRV9ORUdBVElWRSwgY2prU3VmZml4LCAwKTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5KQVBBTkVTRV9GT1JNQUw6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ0pLQ291bnRlcih2YWx1ZSwgJ+mbtuWjseW8kOWPguWbm+S8jeWFreS4g+WFq+S5nScsICfmi77nmb7ljYPkuIcnLCBKQVBBTkVTRV9ORUdBVElWRSwgY2prU3VmZml4LCBDSktfWkVST1MgfCBDSktfVEVOX0NPRUZGSUNJRU5UUyB8IENKS19URU5fSElHSF9DT0VGRklDSUVOVFMpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLktPUkVBTl9IQU5HVUxfRk9STUFMOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNKS0NvdW50ZXIodmFsdWUsICfsmIHsnbzsnbTsgrzsgqzsmKTsnKHsuaDtjJTqtawnLCAn7Iut67Cx7LKc66eMJywgS09SRUFOX05FR0FUSVZFLCBrb3JlYW5TdWZmaXgsIENKS19aRVJPUyB8IENKS19URU5fQ09FRkZJQ0lFTlRTIHwgQ0pLX1RFTl9ISUdIX0NPRUZGSUNJRU5UUyk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuS09SRUFOX0hBTkpBX0lORk9STUFMOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNKS0NvdW50ZXIodmFsdWUsICfpm7bkuIDkuozkuInlm5vkupTlha3kuIPlhavkuZ0nLCAn5Y2B55m+5Y2D6JCsJywgS09SRUFOX05FR0FUSVZFLCBrb3JlYW5TdWZmaXgsIDApO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLktPUkVBTl9IQU5KQV9GT1JNQUw6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ0pLQ291bnRlcih2YWx1ZSwgJ+mbtuWjueiys+WPg+Wbm+S6lOWFreS4g+WFq+S5nScsICfmi77nmb7ljYMnLCBLT1JFQU5fTkVHQVRJVkUsIGtvcmVhblN1ZmZpeCwgQ0pLX1pFUk9TIHwgQ0pLX1RFTl9DT0VGRklDSUVOVFMgfCBDSktfVEVOX0hJR0hfQ09FRkZJQ0lFTlRTKTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5ERVZBTkFHQVJJOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvdW50ZXJTdHlsZUZyb21SYW5nZSh2YWx1ZSwgMHg5NjYsIDB4OTZmLCB0cnVlLCBkZWZhdWx0U3VmZml4KTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5HRU9SR0lBTjpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVBZGRpdGl2ZUNvdW50ZXIodmFsdWUsIDEsIDE5OTk5LCBHRU9SR0lBTiwgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuREVDSU1BTCwgZGVmYXVsdFN1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuR1VKQVJBVEk6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVJhbmdlKHZhbHVlLCAweGFlNiwgMHhhZWYsIHRydWUsIGRlZmF1bHRTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkdVUk1VS0hJOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvdW50ZXJTdHlsZUZyb21SYW5nZSh2YWx1ZSwgMHhhNjYsIDB4YTZmLCB0cnVlLCBkZWZhdWx0U3VmZml4KTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5IRUJSRVc6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQWRkaXRpdmVDb3VudGVyKHZhbHVlLCAxLCAxMDk5OSwgSEVCUkVXLCBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5ERUNJTUFMLCBkZWZhdWx0U3VmZml4KTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5ISVJBR0FOQTpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tU3ltYm9scyh2YWx1ZSwgJ+OBguOBhOOBhuOBiOOBiuOBi+OBjeOBj+OBkeOBk+OBleOBl+OBmeOBm+OBneOBn+OBoeOBpOOBpuOBqOOBquOBq+OBrOOBreOBruOBr+OBsuOBteOBuOOBu+OBvuOBv+OCgOOCgeOCguOChOOChuOCiOOCieOCiuOCi+OCjOOCjeOCj+OCkOOCkeOCkuOCkycpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkhJUkFHQU5BX0lST0hBOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvdW50ZXJTdHlsZUZyb21TeW1ib2xzKHZhbHVlLCAn44GE44KN44Gv44Gr44G744G444Go44Gh44KK44Gs44KL44KS44KP44GL44KI44Gf44KM44Gd44Gk44Gt44Gq44KJ44KA44GG44KQ44Gu44GK44GP44KE44G+44GR44G144GT44GI44Gm44GC44GV44GN44KG44KB44G/44GX44KR44Gy44KC44Gb44GZJyk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuS0FOTkFEQTpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDB4Y2U2LCAweGNlZiwgdHJ1ZSwgZGVmYXVsdFN1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuS0FUQUtBTkE6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVN5bWJvbHModmFsdWUsICfjgqLjgqTjgqbjgqjjgqrjgqvjgq3jgq/jgrHjgrPjgrXjgrfjgrnjgrvjgr3jgr/jg4Hjg4Tjg4bjg4jjg4rjg4vjg4zjg43jg47jg4/jg5Ljg5Xjg5jjg5vjg57jg5/jg6Djg6Hjg6Ljg6Tjg6bjg6jjg6njg6rjg6vjg6zjg63jg6/jg7Djg7Hjg7Ljg7MnLCBjamtTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLktBVEFLQU5BX0lST0hBOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvdW50ZXJTdHlsZUZyb21TeW1ib2xzKHZhbHVlLCAn44Kk44Ot44OP44OL44Ob44OY44OI44OB44Oq44OM44Or44Oy44Ov44Kr44Oo44K/44Os44K944OE44ON44OK44Op44Og44Km44Ow44OO44Kq44Kv44Ok44Oe44Kx44OV44Kz44Ko44OG44Ki44K144Kt44Om44Oh44Of44K344Ox44OS44Oi44K744K5JywgY2prU3VmZml4KTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5MQU86XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVJhbmdlKHZhbHVlLCAweGVkMCwgMHhlZDksIHRydWUsIGRlZmF1bHRTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLk1PTkdPTElBTjpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDB4MTgxMCwgMHgxODE5LCB0cnVlLCBkZWZhdWx0U3VmZml4KTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5NWUFOTUFSOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvdW50ZXJTdHlsZUZyb21SYW5nZSh2YWx1ZSwgMHgxMDQwLCAweDEwNDksIHRydWUsIGRlZmF1bHRTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLk9SSVlBOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvdW50ZXJTdHlsZUZyb21SYW5nZSh2YWx1ZSwgMHhiNjYsIDB4YjZmLCB0cnVlLCBkZWZhdWx0U3VmZml4KTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5QRVJTSUFOOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvdW50ZXJTdHlsZUZyb21SYW5nZSh2YWx1ZSwgMHg2ZjAsIDB4NmY5LCB0cnVlLCBkZWZhdWx0U3VmZml4KTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5UQU1JTDpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDB4YmU2LCAweGJlZiwgdHJ1ZSwgZGVmYXVsdFN1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuVEVMVUdVOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvdW50ZXJTdHlsZUZyb21SYW5nZSh2YWx1ZSwgMHhjNjYsIDB4YzZmLCB0cnVlLCBkZWZhdWx0U3VmZml4KTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5USEFJOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvdW50ZXJTdHlsZUZyb21SYW5nZSh2YWx1ZSwgMHhlNTAsIDB4ZTU5LCB0cnVlLCBkZWZhdWx0U3VmZml4KTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5USUJFVEFOOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvdW50ZXJTdHlsZUZyb21SYW5nZSh2YWx1ZSwgMHhmMjAsIDB4ZjI5LCB0cnVlLCBkZWZhdWx0U3VmZml4KTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5ERUNJTUFMOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvdW50ZXJTdHlsZUZyb21SYW5nZSh2YWx1ZSwgNDgsIDU3LCB0cnVlLCBkZWZhdWx0U3VmZml4KTtcbiAgICB9XG59O1xuXG4vKioqLyB9KSxcbi8qIDE1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9QYXRoID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxudmFyIF90ZXh0RGVjb3JhdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgYWRkQ29sb3JTdG9wcyA9IGZ1bmN0aW9uIGFkZENvbG9yU3RvcHMoZ3JhZGllbnQsIGNhbnZhc0dyYWRpZW50KSB7XG4gICAgdmFyIG1heFN0b3AgPSBNYXRoLm1heC5hcHBseShudWxsLCBncmFkaWVudC5jb2xvclN0b3BzLm1hcChmdW5jdGlvbiAoY29sb3JTdG9wKSB7XG4gICAgICAgIHJldHVybiBjb2xvclN0b3Auc3RvcDtcbiAgICB9KSk7XG4gICAgdmFyIGYgPSAxIC8gTWF0aC5tYXgoMSwgbWF4U3RvcCk7XG4gICAgZ3JhZGllbnQuY29sb3JTdG9wcy5mb3JFYWNoKGZ1bmN0aW9uIChjb2xvclN0b3ApIHtcbiAgICAgICAgY2FudmFzR3JhZGllbnQuYWRkQ29sb3JTdG9wKGYgKiBjb2xvclN0b3Auc3RvcCwgY29sb3JTdG9wLmNvbG9yLnRvU3RyaW5nKCkpO1xuICAgIH0pO1xufTtcblxudmFyIENhbnZhc1JlbmRlcmVyID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENhbnZhc1JlbmRlcmVyKGNhbnZhcykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2FudmFzUmVuZGVyZXIpO1xuXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzID8gY2FudmFzIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKENhbnZhc1JlbmRlcmVyLCBbe1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IE1hdGguZmxvb3Iob3B0aW9ucy53aWR0aCAqIG9wdGlvbnMuc2NhbGUpO1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gTWF0aC5mbG9vcihvcHRpb25zLmhlaWdodCAqIG9wdGlvbnMuc2NhbGUpO1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUud2lkdGggPSBvcHRpb25zLndpZHRoICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0ICsgJ3B4JztcblxuICAgICAgICAgICAgdGhpcy5jdHguc2NhbGUodGhpcy5vcHRpb25zLnNjYWxlLCB0aGlzLm9wdGlvbnMuc2NhbGUpO1xuICAgICAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKC1vcHRpb25zLngsIC1vcHRpb25zLnkpO1xuICAgICAgICAgICAgdGhpcy5jdHgudGV4dEJhc2VsaW5lID0gJ2JvdHRvbSc7XG4gICAgICAgICAgICBvcHRpb25zLmxvZ2dlci5sb2coJ0NhbnZhcyByZW5kZXJlciBpbml0aWFsaXplZCAoJyArIG9wdGlvbnMud2lkdGggKyAneCcgKyBvcHRpb25zLmhlaWdodCArICcgYXQgJyArIG9wdGlvbnMueCArICcsJyArIG9wdGlvbnMueSArICcpIHdpdGggc2NhbGUgJyArIHRoaXMub3B0aW9ucy5zY2FsZSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NsaXAnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY2xpcChjbGlwUGF0aHMsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICBpZiAoY2xpcFBhdGhzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnNhdmUoKTtcbiAgICAgICAgICAgICAgICBjbGlwUGF0aHMuZm9yRWFjaChmdW5jdGlvbiAocGF0aCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5wYXRoKHBhdGgpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jdHguY2xpcCgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuXG4gICAgICAgICAgICBpZiAoY2xpcFBhdGhzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZHJhd0ltYWdlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRyYXdJbWFnZShpbWFnZSwgc291cmNlLCBkZXN0aW5hdGlvbikge1xuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGltYWdlLCBzb3VyY2UubGVmdCwgc291cmNlLnRvcCwgc291cmNlLndpZHRoLCBzb3VyY2UuaGVpZ2h0LCBkZXN0aW5hdGlvbi5sZWZ0LCBkZXN0aW5hdGlvbi50b3AsIGRlc3RpbmF0aW9uLndpZHRoLCBkZXN0aW5hdGlvbi5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdkcmF3U2hhcGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZHJhd1NoYXBlKHBhdGgsIGNvbG9yKSB7XG4gICAgICAgICAgICB0aGlzLnBhdGgocGF0aCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvci50b1N0cmluZygpO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdmaWxsJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGZpbGwoY29sb3IpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldFRhcmdldCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5jYW52YXMpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdwYXRoJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBhdGgoX3BhdGgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KF9wYXRoKSkge1xuICAgICAgICAgICAgICAgIF9wYXRoLmZvckVhY2goZnVuY3Rpb24gKHBvaW50LCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RhcnQgPSBwb2ludC50eXBlID09PSBfUGF0aC5QQVRILlZFQ1RPUiA/IHBvaW50IDogcG9pbnQuc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMyLmN0eC5tb3ZlVG8oc3RhcnQueCwgc3RhcnQueSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczIuY3R4LmxpbmVUbyhzdGFydC54LCBzdGFydC55KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChwb2ludC50eXBlID09PSBfUGF0aC5QQVRILkJFWklFUl9DVVJWRSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMyLmN0eC5iZXppZXJDdXJ2ZVRvKHBvaW50LnN0YXJ0Q29udHJvbC54LCBwb2ludC5zdGFydENvbnRyb2wueSwgcG9pbnQuZW5kQ29udHJvbC54LCBwb2ludC5lbmRDb250cm9sLnksIHBvaW50LmVuZC54LCBwb2ludC5lbmQueSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYXJjKF9wYXRoLnggKyBfcGF0aC5yYWRpdXMsIF9wYXRoLnkgKyBfcGF0aC5yYWRpdXMsIF9wYXRoLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVjdGFuZ2xlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlY3RhbmdsZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2xvcikge1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3IudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXJMaW5lYXJHcmFkaWVudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJMaW5lYXJHcmFkaWVudChib3VuZHMsIGdyYWRpZW50KSB7XG4gICAgICAgICAgICB2YXIgbGluZWFyR3JhZGllbnQgPSB0aGlzLmN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudChib3VuZHMubGVmdCArIGdyYWRpZW50LmRpcmVjdGlvbi54MSwgYm91bmRzLnRvcCArIGdyYWRpZW50LmRpcmVjdGlvbi55MSwgYm91bmRzLmxlZnQgKyBncmFkaWVudC5kaXJlY3Rpb24ueDAsIGJvdW5kcy50b3AgKyBncmFkaWVudC5kaXJlY3Rpb24ueTApO1xuXG4gICAgICAgICAgICBhZGRDb2xvclN0b3BzKGdyYWRpZW50LCBsaW5lYXJHcmFkaWVudCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBsaW5lYXJHcmFkaWVudDtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KGJvdW5kcy5sZWZ0LCBib3VuZHMudG9wLCBib3VuZHMud2lkdGgsIGJvdW5kcy5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXJSYWRpYWxHcmFkaWVudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJSYWRpYWxHcmFkaWVudChib3VuZHMsIGdyYWRpZW50KSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIHggPSBib3VuZHMubGVmdCArIGdyYWRpZW50LmNlbnRlci54O1xuICAgICAgICAgICAgdmFyIHkgPSBib3VuZHMudG9wICsgZ3JhZGllbnQuY2VudGVyLnk7XG5cbiAgICAgICAgICAgIHZhciByYWRpYWxHcmFkaWVudCA9IHRoaXMuY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIGdyYWRpZW50LnJhZGl1cy54KTtcbiAgICAgICAgICAgIGlmICghcmFkaWFsR3JhZGllbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFkZENvbG9yU3RvcHMoZ3JhZGllbnQsIHJhZGlhbEdyYWRpZW50KTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHJhZGlhbEdyYWRpZW50O1xuXG4gICAgICAgICAgICBpZiAoZ3JhZGllbnQucmFkaXVzLnggIT09IGdyYWRpZW50LnJhZGl1cy55KSB7XG4gICAgICAgICAgICAgICAgLy8gdHJhbnNmb3JtcyBmb3IgZWxsaXB0aWNhbCByYWRpYWwgZ3JhZGllbnRcbiAgICAgICAgICAgICAgICB2YXIgbWlkWCA9IGJvdW5kcy5sZWZ0ICsgMC41ICogYm91bmRzLndpZHRoO1xuICAgICAgICAgICAgICAgIHZhciBtaWRZID0gYm91bmRzLnRvcCArIDAuNSAqIGJvdW5kcy5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgdmFyIGYgPSBncmFkaWVudC5yYWRpdXMueSAvIGdyYWRpZW50LnJhZGl1cy54O1xuICAgICAgICAgICAgICAgIHZhciBpbnZGID0gMSAvIGY7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZm9ybShtaWRYLCBtaWRZLCBbMSwgMCwgMCwgZiwgMCwgMF0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5jdHguZmlsbFJlY3QoYm91bmRzLmxlZnQsIGludkYgKiAoYm91bmRzLnRvcCAtIG1pZFkpICsgbWlkWSwgYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0ICogaW52Rik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KGJvdW5kcy5sZWZ0LCBib3VuZHMudG9wLCBib3VuZHMud2lkdGgsIGJvdW5kcy5oZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXJSZXBlYXQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyUmVwZWF0KHBhdGgsIGltYWdlLCBpbWFnZVNpemUsIG9mZnNldFgsIG9mZnNldFkpIHtcbiAgICAgICAgICAgIHRoaXMucGF0aChwYXRoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuY3R4LmNyZWF0ZVBhdHRlcm4odGhpcy5yZXNpemVJbWFnZShpbWFnZSwgaW1hZ2VTaXplKSwgJ3JlcGVhdCcpO1xuICAgICAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKG9mZnNldFgsIG9mZnNldFkpO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKC1vZmZzZXRYLCAtb2Zmc2V0WSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlclRleHROb2RlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlclRleHROb2RlKHRleHRCb3VuZHMsIGNvbG9yLCBmb250LCB0ZXh0RGVjb3JhdGlvbiwgdGV4dFNoYWRvd3MpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gW2ZvbnQuZm9udFN0eWxlLCBmb250LmZvbnRWYXJpYW50LCBmb250LmZvbnRXZWlnaHQsIGZvbnQuZm9udFNpemUsIGZvbnQuZm9udEZhbWlseV0uam9pbignICcpO1xuXG4gICAgICAgICAgICB0ZXh0Qm91bmRzLmZvckVhY2goZnVuY3Rpb24gKHRleHQpIHtcbiAgICAgICAgICAgICAgICBfdGhpczQuY3R4LmZpbGxTdHlsZSA9IGNvbG9yLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRleHRTaGFkb3dzICYmIHRleHQudGV4dC50cmltKCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHRTaGFkb3dzLnNsaWNlKDApLnJldmVyc2UoKS5mb3JFYWNoKGZ1bmN0aW9uICh0ZXh0U2hhZG93KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczQuY3R4LnNoYWRvd0NvbG9yID0gdGV4dFNoYWRvdy5jb2xvci50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXM0LmN0eC5zaGFkb3dPZmZzZXRYID0gdGV4dFNoYWRvdy5vZmZzZXRYICogX3RoaXM0Lm9wdGlvbnMuc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczQuY3R4LnNoYWRvd09mZnNldFkgPSB0ZXh0U2hhZG93Lm9mZnNldFkgKiBfdGhpczQub3B0aW9ucy5zY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzNC5jdHguc2hhZG93Qmx1ciA9IHRleHRTaGFkb3cuYmx1cjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXM0LmN0eC5maWxsVGV4dCh0ZXh0LnRleHQsIHRleHQuYm91bmRzLmxlZnQsIHRleHQuYm91bmRzLnRvcCArIHRleHQuYm91bmRzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzNC5jdHguZmlsbFRleHQodGV4dC50ZXh0LCB0ZXh0LmJvdW5kcy5sZWZ0LCB0ZXh0LmJvdW5kcy50b3AgKyB0ZXh0LmJvdW5kcy5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0ZXh0RGVjb3JhdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGV4dERlY29yYXRpb25Db2xvciA9IHRleHREZWNvcmF0aW9uLnRleHREZWNvcmF0aW9uQ29sb3IgfHwgY29sb3I7XG4gICAgICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uLnRleHREZWNvcmF0aW9uTGluZS5mb3JFYWNoKGZ1bmN0aW9uICh0ZXh0RGVjb3JhdGlvbkxpbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGV4dERlY29yYXRpb25MaW5lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBfdGV4dERlY29yYXRpb24uVEVYVF9ERUNPUkFUSU9OX0xJTkUuVU5ERVJMSU5FOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEcmF3cyBhIGxpbmUgYXQgdGhlIGJhc2VsaW5lIG9mIHRoZSBmb250XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE8gQXMgc29tZSBicm93c2VycyBkaXNwbGF5IHRoZSBsaW5lIGFzIG1vcmUgdGhhbiAxcHggaWYgdGhlIGZvbnQtc2l6ZSBpcyBiaWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5lZWQgdG8gdGFrZSB0aGF0IGludG8gYWNjb3VudCBib3RoIGluIHBvc2l0aW9uIGFuZCBzaXplXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfb3B0aW9ucyRmb250TWV0cmljcyQgPSBfdGhpczQub3B0aW9ucy5mb250TWV0cmljcy5nZXRNZXRyaWNzKGZvbnQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZWxpbmUgPSBfb3B0aW9ucyRmb250TWV0cmljcyQuYmFzZWxpbmU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXM0LnJlY3RhbmdsZSh0ZXh0LmJvdW5kcy5sZWZ0LCBNYXRoLnJvdW5kKHRleHQuYm91bmRzLnRvcCArIGJhc2VsaW5lKSwgdGV4dC5ib3VuZHMud2lkdGgsIDEsIHRleHREZWNvcmF0aW9uQ29sb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIF90ZXh0RGVjb3JhdGlvbi5URVhUX0RFQ09SQVRJT05fTElORS5PVkVSTElORTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXM0LnJlY3RhbmdsZSh0ZXh0LmJvdW5kcy5sZWZ0LCBNYXRoLnJvdW5kKHRleHQuYm91bmRzLnRvcCksIHRleHQuYm91bmRzLndpZHRoLCAxLCB0ZXh0RGVjb3JhdGlvbkNvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBfdGV4dERlY29yYXRpb24uVEVYVF9ERUNPUkFUSU9OX0xJTkUuTElORV9USFJPVUdIOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPIHRyeSBhbmQgZmluZCBleGFjdCBwb3NpdGlvbiBmb3IgbGluZS10aHJvdWdoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfb3B0aW9ucyRmb250TWV0cmljcyQyID0gX3RoaXM0Lm9wdGlvbnMuZm9udE1ldHJpY3MuZ2V0TWV0cmljcyhmb250KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pZGRsZSA9IF9vcHRpb25zJGZvbnRNZXRyaWNzJDIubWlkZGxlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzNC5yZWN0YW5nbGUodGV4dC5ib3VuZHMubGVmdCwgTWF0aC5jZWlsKHRleHQuYm91bmRzLnRvcCArIG1pZGRsZSksIHRleHQuYm91bmRzLndpZHRoLCAxLCB0ZXh0RGVjb3JhdGlvbkNvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZXNpemVJbWFnZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZXNpemVJbWFnZShpbWFnZSwgc2l6ZSkge1xuICAgICAgICAgICAgaWYgKGltYWdlLndpZHRoID09PSBzaXplLndpZHRoICYmIGltYWdlLmhlaWdodCA9PT0gc2l6ZS5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW1hZ2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBjYW52YXMgPSB0aGlzLmNhbnZhcy5vd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gc2l6ZS53aWR0aDtcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBzaXplLmhlaWdodDtcbiAgICAgICAgICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDAsIGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQsIDAsIDAsIHNpemUud2lkdGgsIHNpemUuaGVpZ2h0KTtcbiAgICAgICAgICAgIHJldHVybiBjYW52YXM7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NldE9wYWNpdHknLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0T3BhY2l0eShvcGFjaXR5KSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IG9wYWNpdHk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3RyYW5zZm9ybScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB0cmFuc2Zvcm0ob2Zmc2V0WCwgb2Zmc2V0WSwgbWF0cml4LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5jdHguc2F2ZSgpO1xuICAgICAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKG9mZnNldFgsIG9mZnNldFkpO1xuICAgICAgICAgICAgdGhpcy5jdHgudHJhbnNmb3JtKG1hdHJpeFswXSwgbWF0cml4WzFdLCBtYXRyaXhbMl0sIG1hdHJpeFszXSwgbWF0cml4WzRdLCBtYXRyaXhbNV0pO1xuICAgICAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKC1vZmZzZXRYLCAtb2Zmc2V0WSk7XG5cbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG5cbiAgICAgICAgICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBDYW52YXNSZW5kZXJlcjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQ2FudmFzUmVuZGVyZXI7XG5cbi8qKiovIH0pLFxuLyogMTYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgTG9nZ2VyID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIExvZ2dlcihlbmFibGVkLCBpZCwgc3RhcnQpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExvZ2dlcik7XG5cbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgZW5hYmxlZDtcbiAgICAgICAgdGhpcy5zdGFydCA9IHN0YXJ0ID8gc3RhcnQgOiBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKExvZ2dlciwgW3tcbiAgICAgICAga2V5OiAnY2hpbGQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY2hpbGQoaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTG9nZ2VyKHRoaXMuZW5hYmxlZCwgaWQsIHRoaXMuc3RhcnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZsb3d0eXBlL25vLXdlYWstdHlwZXNcblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnbG9nJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxvZygpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmVuYWJsZWQgJiYgd2luZG93LmNvbnNvbGUgJiYgd2luZG93LmNvbnNvbGUubG9nKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICAgICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5jYWxsKHdpbmRvdy5jb25zb2xlLmxvZywgd2luZG93LmNvbnNvbGUpLmFwcGx5KHdpbmRvdy5jb25zb2xlLCBbRGF0ZS5ub3coKSAtIHRoaXMuc3RhcnQgKyAnbXMnLCB0aGlzLmlkID8gJ2h0bWwyY2FudmFzICgnICsgdGhpcy5pZCArICcpOicgOiAnaHRtbDJjYW52YXM6J10uY29uY2F0KFtdLnNsaWNlLmNhbGwoYXJncywgMCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmbG93dHlwZS9uby13ZWFrLXR5cGVzXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2Vycm9yJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGVycm9yKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZW5hYmxlZCAmJiB3aW5kb3cuY29uc29sZSAmJiB3aW5kb3cuY29uc29sZS5lcnJvcikge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5jYWxsKHdpbmRvdy5jb25zb2xlLmVycm9yLCB3aW5kb3cuY29uc29sZSkuYXBwbHkod2luZG93LmNvbnNvbGUsIFtEYXRlLm5vdygpIC0gdGhpcy5zdGFydCArICdtcycsIHRoaXMuaWQgPyAnaHRtbDJjYW52YXMgKCcgKyB0aGlzLmlkICsgJyk6JyA6ICdodG1sMmNhbnZhczonXS5jb25jYXQoW10uc2xpY2UuY2FsbChhcmdzLCAwKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIExvZ2dlcjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTG9nZ2VyO1xuXG4vKioqLyB9KSxcbi8qIDE3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucGFyc2VQYWRkaW5nID0gZXhwb3J0cy5QQURESU5HX1NJREVTID0gdW5kZWZpbmVkO1xuXG52YXIgX0xlbmd0aCA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cbnZhciBfTGVuZ3RoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xlbmd0aCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBQQURESU5HX1NJREVTID0gZXhwb3J0cy5QQURESU5HX1NJREVTID0ge1xuICAgIFRPUDogMCxcbiAgICBSSUdIVDogMSxcbiAgICBCT1RUT006IDIsXG4gICAgTEVGVDogM1xufTtcblxudmFyIFNJREVTID0gWyd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXTtcblxudmFyIHBhcnNlUGFkZGluZyA9IGV4cG9ydHMucGFyc2VQYWRkaW5nID0gZnVuY3Rpb24gcGFyc2VQYWRkaW5nKHN0eWxlKSB7XG4gICAgcmV0dXJuIFNJREVTLm1hcChmdW5jdGlvbiAoc2lkZSkge1xuICAgICAgICByZXR1cm4gbmV3IF9MZW5ndGgyLmRlZmF1bHQoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy0nICsgc2lkZSkpO1xuICAgIH0pO1xufTtcblxuLyoqKi8gfSksXG4vKiAxOCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgT1ZFUkZMT1dfV1JBUCA9IGV4cG9ydHMuT1ZFUkZMT1dfV1JBUCA9IHtcbiAgICBOT1JNQUw6IDAsXG4gICAgQlJFQUtfV09SRDogMVxufTtcblxudmFyIHBhcnNlT3ZlcmZsb3dXcmFwID0gZXhwb3J0cy5wYXJzZU92ZXJmbG93V3JhcCA9IGZ1bmN0aW9uIHBhcnNlT3ZlcmZsb3dXcmFwKG92ZXJmbG93KSB7XG4gICAgc3dpdGNoIChvdmVyZmxvdykge1xuICAgICAgICBjYXNlICdicmVhay13b3JkJzpcbiAgICAgICAgICAgIHJldHVybiBPVkVSRkxPV19XUkFQLkJSRUFLX1dPUkQ7XG4gICAgICAgIGNhc2UgJ25vcm1hbCc6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gT1ZFUkZMT1dfV1JBUC5OT1JNQUw7XG4gICAgfVxufTtcblxuLyoqKi8gfSksXG4vKiAxOSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgUE9TSVRJT04gPSBleHBvcnRzLlBPU0lUSU9OID0ge1xuICAgIFNUQVRJQzogMCxcbiAgICBSRUxBVElWRTogMSxcbiAgICBBQlNPTFVURTogMixcbiAgICBGSVhFRDogMyxcbiAgICBTVElDS1k6IDRcbn07XG5cbnZhciBwYXJzZVBvc2l0aW9uID0gZXhwb3J0cy5wYXJzZVBvc2l0aW9uID0gZnVuY3Rpb24gcGFyc2VQb3NpdGlvbihwb3NpdGlvbikge1xuICAgIHN3aXRjaCAocG9zaXRpb24pIHtcbiAgICAgICAgY2FzZSAncmVsYXRpdmUnOlxuICAgICAgICAgICAgcmV0dXJuIFBPU0lUSU9OLlJFTEFUSVZFO1xuICAgICAgICBjYXNlICdhYnNvbHV0ZSc6XG4gICAgICAgICAgICByZXR1cm4gUE9TSVRJT04uQUJTT0xVVEU7XG4gICAgICAgIGNhc2UgJ2ZpeGVkJzpcbiAgICAgICAgICAgIHJldHVybiBQT1NJVElPTi5GSVhFRDtcbiAgICAgICAgY2FzZSAnc3RpY2t5JzpcbiAgICAgICAgICAgIHJldHVybiBQT1NJVElPTi5TVElDS1k7XG4gICAgfVxuXG4gICAgcmV0dXJuIFBPU0lUSU9OLlNUQVRJQztcbn07XG5cbi8qKiovIH0pLFxuLyogMjAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xudmFyIFRFWFRfVFJBTlNGT1JNID0gZXhwb3J0cy5URVhUX1RSQU5TRk9STSA9IHtcbiAgICBOT05FOiAwLFxuICAgIExPV0VSQ0FTRTogMSxcbiAgICBVUFBFUkNBU0U6IDIsXG4gICAgQ0FQSVRBTElaRTogM1xufTtcblxudmFyIHBhcnNlVGV4dFRyYW5zZm9ybSA9IGV4cG9ydHMucGFyc2VUZXh0VHJhbnNmb3JtID0gZnVuY3Rpb24gcGFyc2VUZXh0VHJhbnNmb3JtKHRleHRUcmFuc2Zvcm0pIHtcbiAgICBzd2l0Y2ggKHRleHRUcmFuc2Zvcm0pIHtcbiAgICAgICAgY2FzZSAndXBwZXJjYXNlJzpcbiAgICAgICAgICAgIHJldHVybiBURVhUX1RSQU5TRk9STS5VUFBFUkNBU0U7XG4gICAgICAgIGNhc2UgJ2xvd2VyY2FzZSc6XG4gICAgICAgICAgICByZXR1cm4gVEVYVF9UUkFOU0ZPUk0uTE9XRVJDQVNFO1xuICAgICAgICBjYXNlICdjYXBpdGFsaXplJzpcbiAgICAgICAgICAgIHJldHVybiBURVhUX1RSQU5TRk9STS5DQVBJVEFMSVpFO1xuICAgIH1cblxuICAgIHJldHVybiBURVhUX1RSQU5TRk9STS5OT05FO1xufTtcblxuLyoqKi8gfSksXG4vKiAyMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlZm9ybWF0SW5wdXRCb3VuZHMgPSBleHBvcnRzLmlubGluZVNlbGVjdEVsZW1lbnQgPSBleHBvcnRzLmlubGluZVRleHRBcmVhRWxlbWVudCA9IGV4cG9ydHMuaW5saW5lSW5wdXRFbGVtZW50ID0gZXhwb3J0cy5nZXRJbnB1dEJvcmRlclJhZGl1cyA9IGV4cG9ydHMuSU5QVVRfQkFDS0dST1VORCA9IGV4cG9ydHMuSU5QVVRfQk9SREVSUyA9IGV4cG9ydHMuSU5QVVRfQ09MT1IgPSB1bmRlZmluZWQ7XG5cbnZhciBfVGV4dENvbnRhaW5lciA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG5cbnZhciBfVGV4dENvbnRhaW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UZXh0Q29udGFpbmVyKTtcblxudmFyIF9iYWNrZ3JvdW5kID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxudmFyIF9ib3JkZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEyKTtcblxudmFyIF9DaXJjbGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUwKTtcblxudmFyIF9DaXJjbGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ2lyY2xlKTtcblxudmFyIF9WZWN0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xuXG52YXIgX1ZlY3RvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9WZWN0b3IpO1xuXG52YXIgX0NvbG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxudmFyIF9Db2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db2xvcik7XG5cbnZhciBfTGVuZ3RoID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxudmFyIF9MZW5ndGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTGVuZ3RoKTtcblxudmFyIF9Cb3VuZHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG52YXIgX1RleHRCb3VuZHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIyKTtcblxudmFyIF9VdGlsID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIElOUFVUX0NPTE9SID0gZXhwb3J0cy5JTlBVVF9DT0xPUiA9IG5ldyBfQ29sb3IyLmRlZmF1bHQoWzQyLCA0MiwgNDJdKTtcbnZhciBJTlBVVF9CT1JERVJfQ09MT1IgPSBuZXcgX0NvbG9yMi5kZWZhdWx0KFsxNjUsIDE2NSwgMTY1XSk7XG52YXIgSU5QVVRfQkFDS0dST1VORF9DT0xPUiA9IG5ldyBfQ29sb3IyLmRlZmF1bHQoWzIyMiwgMjIyLCAyMjJdKTtcbnZhciBJTlBVVF9CT1JERVIgPSB7XG4gICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgYm9yZGVyQ29sb3I6IElOUFVUX0JPUkRFUl9DT0xPUixcbiAgICBib3JkZXJTdHlsZTogX2JvcmRlci5CT1JERVJfU1RZTEUuU09MSURcbn07XG52YXIgSU5QVVRfQk9SREVSUyA9IGV4cG9ydHMuSU5QVVRfQk9SREVSUyA9IFtJTlBVVF9CT1JERVIsIElOUFVUX0JPUkRFUiwgSU5QVVRfQk9SREVSLCBJTlBVVF9CT1JERVJdO1xudmFyIElOUFVUX0JBQ0tHUk9VTkQgPSBleHBvcnRzLklOUFVUX0JBQ0tHUk9VTkQgPSB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBJTlBVVF9CQUNLR1JPVU5EX0NPTE9SLFxuICAgIGJhY2tncm91bmRJbWFnZTogW10sXG4gICAgYmFja2dyb3VuZENsaXA6IF9iYWNrZ3JvdW5kLkJBQ0tHUk9VTkRfQ0xJUC5QQURESU5HX0JPWCxcbiAgICBiYWNrZ3JvdW5kT3JpZ2luOiBfYmFja2dyb3VuZC5CQUNLR1JPVU5EX09SSUdJTi5QQURESU5HX0JPWFxufTtcblxudmFyIFJBRElPX0JPUkRFUl9SQURJVVMgPSBuZXcgX0xlbmd0aDIuZGVmYXVsdCgnNTAlJyk7XG52YXIgUkFESU9fQk9SREVSX1JBRElVU19UVVBMRSA9IFtSQURJT19CT1JERVJfUkFESVVTLCBSQURJT19CT1JERVJfUkFESVVTXTtcbnZhciBJTlBVVF9SQURJT19CT1JERVJfUkFESVVTID0gW1JBRElPX0JPUkRFUl9SQURJVVNfVFVQTEUsIFJBRElPX0JPUkRFUl9SQURJVVNfVFVQTEUsIFJBRElPX0JPUkRFUl9SQURJVVNfVFVQTEUsIFJBRElPX0JPUkRFUl9SQURJVVNfVFVQTEVdO1xuXG52YXIgQ0hFQ0tCT1hfQk9SREVSX1JBRElVUyA9IG5ldyBfTGVuZ3RoMi5kZWZhdWx0KCczcHgnKTtcbnZhciBDSEVDS0JPWF9CT1JERVJfUkFESVVTX1RVUExFID0gW0NIRUNLQk9YX0JPUkRFUl9SQURJVVMsIENIRUNLQk9YX0JPUkRFUl9SQURJVVNdO1xudmFyIElOUFVUX0NIRUNLQk9YX0JPUkRFUl9SQURJVVMgPSBbQ0hFQ0tCT1hfQk9SREVSX1JBRElVU19UVVBMRSwgQ0hFQ0tCT1hfQk9SREVSX1JBRElVU19UVVBMRSwgQ0hFQ0tCT1hfQk9SREVSX1JBRElVU19UVVBMRSwgQ0hFQ0tCT1hfQk9SREVSX1JBRElVU19UVVBMRV07XG5cbnZhciBnZXRJbnB1dEJvcmRlclJhZGl1cyA9IGV4cG9ydHMuZ2V0SW5wdXRCb3JkZXJSYWRpdXMgPSBmdW5jdGlvbiBnZXRJbnB1dEJvcmRlclJhZGl1cyhub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUudHlwZSA9PT0gJ3JhZGlvJyA/IElOUFVUX1JBRElPX0JPUkRFUl9SQURJVVMgOiBJTlBVVF9DSEVDS0JPWF9CT1JERVJfUkFESVVTO1xufTtcblxudmFyIGlubGluZUlucHV0RWxlbWVudCA9IGV4cG9ydHMuaW5saW5lSW5wdXRFbGVtZW50ID0gZnVuY3Rpb24gaW5saW5lSW5wdXRFbGVtZW50KG5vZGUsIGNvbnRhaW5lcikge1xuICAgIGlmIChub2RlLnR5cGUgPT09ICdyYWRpbycgfHwgbm9kZS50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgIGlmIChub2RlLmNoZWNrZWQpIHtcbiAgICAgICAgICAgIHZhciBzaXplID0gTWF0aC5taW4oY29udGFpbmVyLmJvdW5kcy53aWR0aCwgY29udGFpbmVyLmJvdW5kcy5oZWlnaHQpO1xuICAgICAgICAgICAgY29udGFpbmVyLmNoaWxkTm9kZXMucHVzaChub2RlLnR5cGUgPT09ICdjaGVja2JveCcgPyBbbmV3IF9WZWN0b3IyLmRlZmF1bHQoY29udGFpbmVyLmJvdW5kcy5sZWZ0ICsgc2l6ZSAqIDAuMzkzNjMsIGNvbnRhaW5lci5ib3VuZHMudG9wICsgc2l6ZSAqIDAuNzkpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdChjb250YWluZXIuYm91bmRzLmxlZnQgKyBzaXplICogMC4xNiwgY29udGFpbmVyLmJvdW5kcy50b3AgKyBzaXplICogMC41NTQ5KSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoY29udGFpbmVyLmJvdW5kcy5sZWZ0ICsgc2l6ZSAqIDAuMjczNDcsIGNvbnRhaW5lci5ib3VuZHMudG9wICsgc2l6ZSAqIDAuNDQwNzEpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdChjb250YWluZXIuYm91bmRzLmxlZnQgKyBzaXplICogMC4zOTY5NCwgY29udGFpbmVyLmJvdW5kcy50b3AgKyBzaXplICogMC41NjQ5KSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoY29udGFpbmVyLmJvdW5kcy5sZWZ0ICsgc2l6ZSAqIDAuNzI5ODMsIGNvbnRhaW5lci5ib3VuZHMudG9wICsgc2l6ZSAqIDAuMjMpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdChjb250YWluZXIuYm91bmRzLmxlZnQgKyBzaXplICogMC44NCwgY29udGFpbmVyLmJvdW5kcy50b3AgKyBzaXplICogMC4zNDA4NSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KGNvbnRhaW5lci5ib3VuZHMubGVmdCArIHNpemUgKiAwLjM5MzYzLCBjb250YWluZXIuYm91bmRzLnRvcCArIHNpemUgKiAwLjc5KV0gOiBuZXcgX0NpcmNsZTIuZGVmYXVsdChjb250YWluZXIuYm91bmRzLmxlZnQgKyBzaXplIC8gNCwgY29udGFpbmVyLmJvdW5kcy50b3AgKyBzaXplIC8gNCwgc2l6ZSAvIDQpKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlubGluZUZvcm1FbGVtZW50KGdldElucHV0VmFsdWUobm9kZSksIG5vZGUsIGNvbnRhaW5lciwgZmFsc2UpO1xuICAgIH1cbn07XG5cbnZhciBpbmxpbmVUZXh0QXJlYUVsZW1lbnQgPSBleHBvcnRzLmlubGluZVRleHRBcmVhRWxlbWVudCA9IGZ1bmN0aW9uIGlubGluZVRleHRBcmVhRWxlbWVudChub2RlLCBjb250YWluZXIpIHtcbiAgICBpbmxpbmVGb3JtRWxlbWVudChub2RlLnZhbHVlLCBub2RlLCBjb250YWluZXIsIHRydWUpO1xufTtcblxudmFyIGlubGluZVNlbGVjdEVsZW1lbnQgPSBleHBvcnRzLmlubGluZVNlbGVjdEVsZW1lbnQgPSBmdW5jdGlvbiBpbmxpbmVTZWxlY3RFbGVtZW50KG5vZGUsIGNvbnRhaW5lcikge1xuICAgIHZhciBvcHRpb24gPSBub2RlLm9wdGlvbnNbbm9kZS5zZWxlY3RlZEluZGV4IHx8IDBdO1xuICAgIGlubGluZUZvcm1FbGVtZW50KG9wdGlvbiA/IG9wdGlvbi50ZXh0IHx8ICcnIDogJycsIG5vZGUsIGNvbnRhaW5lciwgZmFsc2UpO1xufTtcblxudmFyIHJlZm9ybWF0SW5wdXRCb3VuZHMgPSBleHBvcnRzLnJlZm9ybWF0SW5wdXRCb3VuZHMgPSBmdW5jdGlvbiByZWZvcm1hdElucHV0Qm91bmRzKGJvdW5kcykge1xuICAgIGlmIChib3VuZHMud2lkdGggPiBib3VuZHMuaGVpZ2h0KSB7XG4gICAgICAgIGJvdW5kcy5sZWZ0ICs9IChib3VuZHMud2lkdGggLSBib3VuZHMuaGVpZ2h0KSAvIDI7XG4gICAgICAgIGJvdW5kcy53aWR0aCA9IGJvdW5kcy5oZWlnaHQ7XG4gICAgfSBlbHNlIGlmIChib3VuZHMud2lkdGggPCBib3VuZHMuaGVpZ2h0KSB7XG4gICAgICAgIGJvdW5kcy50b3AgKz0gKGJvdW5kcy5oZWlnaHQgLSBib3VuZHMud2lkdGgpIC8gMjtcbiAgICAgICAgYm91bmRzLmhlaWdodCA9IGJvdW5kcy53aWR0aDtcbiAgICB9XG4gICAgcmV0dXJuIGJvdW5kcztcbn07XG5cbnZhciBpbmxpbmVGb3JtRWxlbWVudCA9IGZ1bmN0aW9uIGlubGluZUZvcm1FbGVtZW50KHZhbHVlLCBub2RlLCBjb250YWluZXIsIGFsbG93TGluZWJyZWFrKSB7XG4gICAgdmFyIGJvZHkgPSBub2RlLm93bmVyRG9jdW1lbnQuYm9keTtcbiAgICBpZiAodmFsdWUubGVuZ3RoID4gMCAmJiBib2R5KSB7XG4gICAgICAgIHZhciB3cmFwcGVyID0gbm9kZS5vd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2h0bWwyY2FudmFzd3JhcHBlcicpO1xuICAgICAgICAoMCwgX1V0aWwuY29weUNTU1N0eWxlcykobm9kZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUobm9kZSwgbnVsbCksIHdyYXBwZXIpO1xuICAgICAgICB3cmFwcGVyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgd3JhcHBlci5zdHlsZS5sZWZ0ID0gY29udGFpbmVyLmJvdW5kcy5sZWZ0ICsgJ3B4JztcbiAgICAgICAgd3JhcHBlci5zdHlsZS50b3AgPSBjb250YWluZXIuYm91bmRzLnRvcCArICdweCc7XG4gICAgICAgIGlmICghYWxsb3dMaW5lYnJlYWspIHtcbiAgICAgICAgICAgIHdyYXBwZXIuc3R5bGUud2hpdGVTcGFjZSA9ICdub3dyYXAnO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0ZXh0ID0gbm9kZS5vd25lckRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlKTtcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcbiAgICAgICAgY29udGFpbmVyLmNoaWxkTm9kZXMucHVzaChfVGV4dENvbnRhaW5lcjIuZGVmYXVsdC5mcm9tVGV4dE5vZGUodGV4dCwgY29udGFpbmVyKSk7XG4gICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQod3JhcHBlcik7XG4gICAgfVxufTtcblxudmFyIGdldElucHV0VmFsdWUgPSBmdW5jdGlvbiBnZXRJbnB1dFZhbHVlKG5vZGUpIHtcbiAgICB2YXIgdmFsdWUgPSBub2RlLnR5cGUgPT09ICdwYXNzd29yZCcgPyBuZXcgQXJyYXkobm9kZS52YWx1ZS5sZW5ndGggKyAxKS5qb2luKCdcXHUyMDIyJykgOiBub2RlLnZhbHVlO1xuXG4gICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA9PT0gMCA/IG5vZGUucGxhY2Vob2xkZXIgfHwgJycgOiB2YWx1ZTtcbn07XG5cbi8qKiovIH0pLFxuLyogMjIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5wYXJzZVRleHRCb3VuZHMgPSBleHBvcnRzLlRleHRCb3VuZHMgPSB1bmRlZmluZWQ7XG5cbnZhciBfQm91bmRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxudmFyIF90ZXh0RGVjb3JhdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpO1xuXG52YXIgX0ZlYXR1cmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKTtcblxudmFyIF9GZWF0dXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ZlYXR1cmUpO1xuXG52YXIgX1VuaWNvZGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFRleHRCb3VuZHMgPSBleHBvcnRzLlRleHRCb3VuZHMgPSBmdW5jdGlvbiBUZXh0Qm91bmRzKHRleHQsIGJvdW5kcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUZXh0Qm91bmRzKTtcblxuICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgdGhpcy5ib3VuZHMgPSBib3VuZHM7XG59O1xuXG52YXIgcGFyc2VUZXh0Qm91bmRzID0gZXhwb3J0cy5wYXJzZVRleHRCb3VuZHMgPSBmdW5jdGlvbiBwYXJzZVRleHRCb3VuZHModmFsdWUsIHBhcmVudCwgbm9kZSkge1xuICAgIHZhciBsZXR0ZXJSZW5kZXJpbmcgPSBwYXJlbnQuc3R5bGUubGV0dGVyU3BhY2luZyAhPT0gMDtcbiAgICB2YXIgdGV4dExpc3QgPSBsZXR0ZXJSZW5kZXJpbmcgPyAoMCwgX1VuaWNvZGUudG9Db2RlUG9pbnRzKSh2YWx1ZSkubWFwKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHJldHVybiAoMCwgX1VuaWNvZGUuZnJvbUNvZGVQb2ludCkoaSk7XG4gICAgfSkgOiAoMCwgX1VuaWNvZGUuYnJlYWtXb3JkcykodmFsdWUsIHBhcmVudCk7XG4gICAgdmFyIGxlbmd0aCA9IHRleHRMaXN0Lmxlbmd0aDtcbiAgICB2YXIgZGVmYXVsdFZpZXcgPSBub2RlLnBhcmVudE5vZGUgPyBub2RlLnBhcmVudE5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyA6IG51bGw7XG4gICAgdmFyIHNjcm9sbFggPSBkZWZhdWx0VmlldyA/IGRlZmF1bHRWaWV3LnBhZ2VYT2Zmc2V0IDogMDtcbiAgICB2YXIgc2Nyb2xsWSA9IGRlZmF1bHRWaWV3ID8gZGVmYXVsdFZpZXcucGFnZVlPZmZzZXQgOiAwO1xuICAgIHZhciB0ZXh0Qm91bmRzID0gW107XG4gICAgdmFyIG9mZnNldCA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgdGV4dCA9IHRleHRMaXN0W2ldO1xuICAgICAgICBpZiAocGFyZW50LnN0eWxlLnRleHREZWNvcmF0aW9uICE9PSBfdGV4dERlY29yYXRpb24uVEVYVF9ERUNPUkFUSU9OLk5PTkUgfHwgdGV4dC50cmltKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKF9GZWF0dXJlMi5kZWZhdWx0LlNVUFBPUlRfUkFOR0VfQk9VTkRTKSB7XG4gICAgICAgICAgICAgICAgdGV4dEJvdW5kcy5wdXNoKG5ldyBUZXh0Qm91bmRzKHRleHQsIGdldFJhbmdlQm91bmRzKG5vZGUsIG9mZnNldCwgdGV4dC5sZW5ndGgsIHNjcm9sbFgsIHNjcm9sbFkpKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciByZXBsYWNlbWVudE5vZGUgPSBub2RlLnNwbGl0VGV4dCh0ZXh0Lmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgdGV4dEJvdW5kcy5wdXNoKG5ldyBUZXh0Qm91bmRzKHRleHQsIGdldFdyYXBwZXJCb3VuZHMobm9kZSwgc2Nyb2xsWCwgc2Nyb2xsWSkpKTtcbiAgICAgICAgICAgICAgICBub2RlID0gcmVwbGFjZW1lbnROb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCFfRmVhdHVyZTIuZGVmYXVsdC5TVVBQT1JUX1JBTkdFX0JPVU5EUykge1xuICAgICAgICAgICAgbm9kZSA9IG5vZGUuc3BsaXRUZXh0KHRleHQubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICBvZmZzZXQgKz0gdGV4dC5sZW5ndGg7XG4gICAgfVxuICAgIHJldHVybiB0ZXh0Qm91bmRzO1xufTtcblxudmFyIGdldFdyYXBwZXJCb3VuZHMgPSBmdW5jdGlvbiBnZXRXcmFwcGVyQm91bmRzKG5vZGUsIHNjcm9sbFgsIHNjcm9sbFkpIHtcbiAgICB2YXIgd3JhcHBlciA9IG5vZGUub3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KCdodG1sMmNhbnZhc3dyYXBwZXInKTtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKG5vZGUuY2xvbmVOb2RlKHRydWUpKTtcbiAgICB2YXIgcGFyZW50Tm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICBpZiAocGFyZW50Tm9kZSkge1xuICAgICAgICBwYXJlbnROb2RlLnJlcGxhY2VDaGlsZCh3cmFwcGVyLCBub2RlKTtcbiAgICAgICAgdmFyIGJvdW5kcyA9ICgwLCBfQm91bmRzLnBhcnNlQm91bmRzKSh3cmFwcGVyLCBzY3JvbGxYLCBzY3JvbGxZKTtcbiAgICAgICAgaWYgKHdyYXBwZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgcGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQod3JhcHBlci5maXJzdENoaWxkLCB3cmFwcGVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYm91bmRzO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IF9Cb3VuZHMuQm91bmRzKDAsIDAsIDAsIDApO1xufTtcblxudmFyIGdldFJhbmdlQm91bmRzID0gZnVuY3Rpb24gZ2V0UmFuZ2VCb3VuZHMobm9kZSwgb2Zmc2V0LCBsZW5ndGgsIHNjcm9sbFgsIHNjcm9sbFkpIHtcbiAgICB2YXIgcmFuZ2UgPSBub2RlLm93bmVyRG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICByYW5nZS5zZXRTdGFydChub2RlLCBvZmZzZXQpO1xuICAgIHJhbmdlLnNldEVuZChub2RlLCBvZmZzZXQgKyBsZW5ndGgpO1xuICAgIHJldHVybiBfQm91bmRzLkJvdW5kcy5mcm9tQ2xpZW50UmVjdChyYW5nZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwgc2Nyb2xsWCwgc2Nyb2xsWSk7XG59O1xuXG4vKioqLyB9KSxcbi8qIDIzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEZvcmVpZ25PYmplY3RSZW5kZXJlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBGb3JlaWduT2JqZWN0UmVuZGVyZXIoZWxlbWVudCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRm9yZWlnbk9iamVjdFJlbmRlcmVyKTtcblxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhGb3JlaWduT2JqZWN0UmVuZGVyZXIsIFt7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIob3B0aW9ucykge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IE1hdGguZmxvb3Iob3B0aW9ucy53aWR0aCkgKiBvcHRpb25zLnNjYWxlO1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gTWF0aC5mbG9vcihvcHRpb25zLmhlaWdodCkgKiBvcHRpb25zLnNjYWxlO1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUud2lkdGggPSBvcHRpb25zLndpZHRoICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0ICsgJ3B4JztcblxuICAgICAgICAgICAgb3B0aW9ucy5sb2dnZXIubG9nKCdGb3JlaWduT2JqZWN0IHJlbmRlcmVyIGluaXRpYWxpemVkICgnICsgb3B0aW9ucy53aWR0aCArICd4JyArIG9wdGlvbnMuaGVpZ2h0ICsgJyBhdCAnICsgb3B0aW9ucy54ICsgJywnICsgb3B0aW9ucy55ICsgJykgd2l0aCBzY2FsZSAnICsgb3B0aW9ucy5zY2FsZSk7XG4gICAgICAgICAgICB2YXIgc3ZnID0gY3JlYXRlRm9yZWlnbk9iamVjdFNWRyhNYXRoLm1heChvcHRpb25zLndpbmRvd1dpZHRoLCBvcHRpb25zLndpZHRoKSAqIG9wdGlvbnMuc2NhbGUsIE1hdGgubWF4KG9wdGlvbnMud2luZG93SGVpZ2h0LCBvcHRpb25zLmhlaWdodCkgKiBvcHRpb25zLnNjYWxlLCBvcHRpb25zLnNjcm9sbFggKiBvcHRpb25zLnNjYWxlLCBvcHRpb25zLnNjcm9sbFkgKiBvcHRpb25zLnNjYWxlLCB0aGlzLmVsZW1lbnQpO1xuXG4gICAgICAgICAgICByZXR1cm4gbG9hZFNlcmlhbGl6ZWRTVkcoc3ZnKS50aGVuKGZ1bmN0aW9uIChpbWcpIHtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY3R4LmZpbGxTdHlsZSA9IG9wdGlvbnMuYmFja2dyb3VuZENvbG9yLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmN0eC5maWxsUmVjdCgwLCAwLCBvcHRpb25zLndpZHRoICogb3B0aW9ucy5zY2FsZSwgb3B0aW9ucy5oZWlnaHQgKiBvcHRpb25zLnNjYWxlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBfdGhpcy5jdHguZHJhd0ltYWdlKGltZywgLW9wdGlvbnMueCAqIG9wdGlvbnMuc2NhbGUsIC1vcHRpb25zLnkgKiBvcHRpb25zLnNjYWxlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuY2FudmFzO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gRm9yZWlnbk9iamVjdFJlbmRlcmVyO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBGb3JlaWduT2JqZWN0UmVuZGVyZXI7XG52YXIgY3JlYXRlRm9yZWlnbk9iamVjdFNWRyA9IGV4cG9ydHMuY3JlYXRlRm9yZWlnbk9iamVjdFNWRyA9IGZ1bmN0aW9uIGNyZWF0ZUZvcmVpZ25PYmplY3RTVkcod2lkdGgsIGhlaWdodCwgeCwgeSwgbm9kZSkge1xuICAgIHZhciB4bWxucyA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG4gICAgdmFyIHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyh4bWxucywgJ3N2ZycpO1xuICAgIHZhciBmb3JlaWduT2JqZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHhtbG5zLCAnZm9yZWlnbk9iamVjdCcpO1xuICAgIHN2Zy5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnd2lkdGgnLCB3aWR0aCk7XG4gICAgc3ZnLnNldEF0dHJpYnV0ZU5TKG51bGwsICdoZWlnaHQnLCBoZWlnaHQpO1xuXG4gICAgZm9yZWlnbk9iamVjdC5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnd2lkdGgnLCAnMTAwJScpO1xuICAgIGZvcmVpZ25PYmplY3Quc2V0QXR0cmlidXRlTlMobnVsbCwgJ2hlaWdodCcsICcxMDAlJyk7XG4gICAgZm9yZWlnbk9iamVjdC5zZXRBdHRyaWJ1dGVOUyhudWxsLCAneCcsIHgpO1xuICAgIGZvcmVpZ25PYmplY3Quc2V0QXR0cmlidXRlTlMobnVsbCwgJ3knLCB5KTtcbiAgICBmb3JlaWduT2JqZWN0LnNldEF0dHJpYnV0ZU5TKG51bGwsICdleHRlcm5hbFJlc291cmNlc1JlcXVpcmVkJywgJ3RydWUnKTtcbiAgICBzdmcuYXBwZW5kQ2hpbGQoZm9yZWlnbk9iamVjdCk7XG5cbiAgICBmb3JlaWduT2JqZWN0LmFwcGVuZENoaWxkKG5vZGUpO1xuXG4gICAgcmV0dXJuIHN2Zztcbn07XG5cbnZhciBsb2FkU2VyaWFsaXplZFNWRyA9IGV4cG9ydHMubG9hZFNlcmlhbGl6ZWRTVkcgPSBmdW5jdGlvbiBsb2FkU2VyaWFsaXplZFNWRyhzdmcpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShpbWcpO1xuICAgICAgICB9O1xuICAgICAgICBpbWcub25lcnJvciA9IHJlamVjdDtcblxuICAgICAgICBpbWcuc3JjID0gJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCcgKyBlbmNvZGVVUklDb21wb25lbnQobmV3IFhNTFNlcmlhbGl6ZXIoKS5zZXJpYWxpemVUb1N0cmluZyhzdmcpKTtcbiAgICB9KTtcbn07XG5cbi8qKiovIH0pLFxuLyogMjQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5icmVha1dvcmRzID0gZXhwb3J0cy5mcm9tQ29kZVBvaW50ID0gZXhwb3J0cy50b0NvZGVQb2ludHMgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3NzTGluZUJyZWFrID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0Nik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndG9Db2RlUG9pbnRzJywge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBfY3NzTGluZUJyZWFrLnRvQ29kZVBvaW50cztcbiAgICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnZnJvbUNvZGVQb2ludCcsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gX2Nzc0xpbmVCcmVhay5mcm9tQ29kZVBvaW50O1xuICAgIH1cbn0pO1xuXG52YXIgX05vZGVDb250YWluZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXG52YXIgX05vZGVDb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTm9kZUNvbnRhaW5lcik7XG5cbnZhciBfb3ZlcmZsb3dXcmFwID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBicmVha1dvcmRzID0gZXhwb3J0cy5icmVha1dvcmRzID0gZnVuY3Rpb24gYnJlYWtXb3JkcyhzdHIsIHBhcmVudCkge1xuICAgIHZhciBicmVha2VyID0gKDAsIF9jc3NMaW5lQnJlYWsuTGluZUJyZWFrZXIpKHN0ciwge1xuICAgICAgICBsaW5lQnJlYWs6IHBhcmVudC5zdHlsZS5saW5lQnJlYWssXG4gICAgICAgIHdvcmRCcmVhazogcGFyZW50LnN0eWxlLm92ZXJmbG93V3JhcCA9PT0gX292ZXJmbG93V3JhcC5PVkVSRkxPV19XUkFQLkJSRUFLX1dPUkQgPyAnYnJlYWstd29yZCcgOiBwYXJlbnQuc3R5bGUud29yZEJyZWFrXG4gICAgfSk7XG5cbiAgICB2YXIgd29yZHMgPSBbXTtcbiAgICB2YXIgYmsgPSB2b2lkIDA7XG5cbiAgICB3aGlsZSAoIShiayA9IGJyZWFrZXIubmV4dCgpKS5kb25lKSB7XG4gICAgICAgIHdvcmRzLnB1c2goYmsudmFsdWUuc2xpY2UoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdvcmRzO1xufTtcblxuLyoqKi8gfSksXG4vKiAyNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkZvbnRNZXRyaWNzID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX1V0aWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgU0FNUExFX1RFWFQgPSAnSGlkZGVuIFRleHQnO1xuXG52YXIgRm9udE1ldHJpY3MgPSBleHBvcnRzLkZvbnRNZXRyaWNzID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEZvbnRNZXRyaWNzKGRvY3VtZW50KSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGb250TWV0cmljcyk7XG5cbiAgICAgICAgdGhpcy5fZGF0YSA9IHt9O1xuICAgICAgICB0aGlzLl9kb2N1bWVudCA9IGRvY3VtZW50O1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhGb250TWV0cmljcywgW3tcbiAgICAgICAga2V5OiAnX3BhcnNlTWV0cmljcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfcGFyc2VNZXRyaWNzKGZvbnQpIHtcbiAgICAgICAgICAgIHZhciBjb250YWluZXIgPSB0aGlzLl9kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHZhciBpbWcgPSB0aGlzLl9kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIHZhciBzcGFuID0gdGhpcy5fZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gICAgICAgICAgICB2YXIgYm9keSA9IHRoaXMuX2RvY3VtZW50LmJvZHk7XG4gICAgICAgICAgICBpZiAoIWJvZHkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIHRydWUgPyAnTm8gZG9jdW1lbnQgZm91bmQgZm9yIGZvbnQgbWV0cmljcycgOiAnJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICBjb250YWluZXIuc3R5bGUuZm9udEZhbWlseSA9IGZvbnQuZm9udEZhbWlseTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5mb250U2l6ZSA9IGZvbnQuZm9udFNpemU7XG4gICAgICAgICAgICBjb250YWluZXIuc3R5bGUubWFyZ2luID0gJzAnO1xuICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLnBhZGRpbmcgPSAnMCc7XG5cbiAgICAgICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgICAgICAgICAgaW1nLnNyYyA9IF9VdGlsLlNNQUxMX0lNQUdFO1xuICAgICAgICAgICAgaW1nLndpZHRoID0gMTtcbiAgICAgICAgICAgIGltZy5oZWlnaHQgPSAxO1xuXG4gICAgICAgICAgICBpbWcuc3R5bGUubWFyZ2luID0gJzAnO1xuICAgICAgICAgICAgaW1nLnN0eWxlLnBhZGRpbmcgPSAnMCc7XG4gICAgICAgICAgICBpbWcuc3R5bGUudmVydGljYWxBbGlnbiA9ICdiYXNlbGluZSc7XG5cbiAgICAgICAgICAgIHNwYW4uc3R5bGUuZm9udEZhbWlseSA9IGZvbnQuZm9udEZhbWlseTtcbiAgICAgICAgICAgIHNwYW4uc3R5bGUuZm9udFNpemUgPSBmb250LmZvbnRTaXplO1xuICAgICAgICAgICAgc3Bhbi5zdHlsZS5tYXJnaW4gPSAnMCc7XG4gICAgICAgICAgICBzcGFuLnN0eWxlLnBhZGRpbmcgPSAnMCc7XG5cbiAgICAgICAgICAgIHNwYW4uYXBwZW5kQ2hpbGQodGhpcy5fZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoU0FNUExFX1RFWFQpKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcpO1xuICAgICAgICAgICAgdmFyIGJhc2VsaW5lID0gaW1nLm9mZnNldFRvcCAtIHNwYW4ub2Zmc2V0VG9wICsgMjtcblxuICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKHNwYW4pO1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuX2RvY3VtZW50LmNyZWF0ZVRleHROb2RlKFNBTVBMRV9URVhUKSk7XG5cbiAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5saW5lSGVpZ2h0ID0gJ25vcm1hbCc7XG4gICAgICAgICAgICBpbWcuc3R5bGUudmVydGljYWxBbGlnbiA9ICdzdXBlcic7XG5cbiAgICAgICAgICAgIHZhciBtaWRkbGUgPSBpbWcub2Zmc2V0VG9wIC0gY29udGFpbmVyLm9mZnNldFRvcCArIDI7XG5cbiAgICAgICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQoY29udGFpbmVyKTtcblxuICAgICAgICAgICAgcmV0dXJuIHsgYmFzZWxpbmU6IGJhc2VsaW5lLCBtaWRkbGU6IG1pZGRsZSB9O1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRNZXRyaWNzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldE1ldHJpY3MoZm9udCkge1xuICAgICAgICAgICAgdmFyIGtleSA9IGZvbnQuZm9udEZhbWlseSArICcgJyArIGZvbnQuZm9udFNpemU7XG4gICAgICAgICAgICBpZiAodGhpcy5fZGF0YVtrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kYXRhW2tleV0gPSB0aGlzLl9wYXJzZU1ldHJpY3MoZm9udCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kYXRhW2tleV07XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gRm9udE1ldHJpY3M7XG59KCk7XG5cbi8qKiovIH0pLFxuLyogMjYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5Qcm94eSA9IHVuZGVmaW5lZDtcblxudmFyIF9GZWF0dXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMCk7XG5cbnZhciBfRmVhdHVyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9GZWF0dXJlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFByb3h5ID0gZXhwb3J0cy5Qcm94eSA9IGZ1bmN0aW9uIFByb3h5KHNyYywgb3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucy5wcm94eSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoIHRydWUgPyAnTm8gcHJveHkgZGVmaW5lZCcgOiBudWxsKTtcbiAgICB9XG4gICAgdmFyIHByb3h5ID0gb3B0aW9ucy5wcm94eTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciByZXNwb25zZVR5cGUgPSBfRmVhdHVyZTIuZGVmYXVsdC5TVVBQT1JUX0NPUlNfWEhSICYmIF9GZWF0dXJlMi5kZWZhdWx0LlNVUFBPUlRfUkVTUE9OU0VfVFlQRSA/ICdibG9iJyA6ICd0ZXh0JztcbiAgICAgICAgdmFyIHhociA9IF9GZWF0dXJlMi5kZWZhdWx0LlNVUFBPUlRfQ09SU19YSFIgPyBuZXcgWE1MSHR0cFJlcXVlc3QoKSA6IG5ldyBYRG9tYWluUmVxdWVzdCgpO1xuICAgICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHhociBpbnN0YW5jZW9mIFhNTEh0dHBSZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VUeXBlID09PSAndGV4dCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoeGhyLnJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUocmVhZGVyLnJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTCh4aHIucmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCB0cnVlID8gJ0ZhaWxlZCB0byBwcm94eSByZXNvdXJjZSAnICsgc3JjLnN1YnN0cmluZygwLCAyNTYpICsgJyB3aXRoIHN0YXR1cyBjb2RlICcgKyB4aHIuc3RhdHVzIDogJycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB4aHIub25lcnJvciA9IHJlamVjdDtcbiAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIHByb3h5ICsgJz91cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChzcmMpICsgJyZyZXNwb25zZVR5cGU9JyArIHJlc3BvbnNlVHlwZSk7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlVHlwZSAhPT0gJ3RleHQnICYmIHhociBpbnN0YW5jZW9mIFhNTEh0dHBSZXF1ZXN0KSB7XG4gICAgICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gcmVzcG9uc2VUeXBlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuaW1hZ2VUaW1lb3V0KSB7XG4gICAgICAgICAgICB2YXIgdGltZW91dCA9IG9wdGlvbnMuaW1hZ2VUaW1lb3V0O1xuICAgICAgICAgICAgeGhyLnRpbWVvdXQgPSB0aW1lb3V0O1xuICAgICAgICAgICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KCB0cnVlID8gJ1RpbWVkIG91dCAoJyArIHRpbWVvdXQgKyAnbXMpIHByb3h5aW5nICcgKyBzcmMuc3Vic3RyaW5nKDAsIDI1NikgOiAnJyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgeGhyLnNlbmQoKTtcbiAgICB9KTtcbn07XG5cbi8qKiovIH0pLFxuLyogMjcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9DYW52YXNSZW5kZXJlciA9IF9fd2VicGFja19yZXF1aXJlX18oMTUpO1xuXG52YXIgX0NhbnZhc1JlbmRlcmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NhbnZhc1JlbmRlcmVyKTtcblxudmFyIF9Mb2dnZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2KTtcblxudmFyIF9Mb2dnZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTG9nZ2VyKTtcblxudmFyIF9XaW5kb3cgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI4KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGh0bWwyY2FudmFzID0gZnVuY3Rpb24gaHRtbDJjYW52YXMoZWxlbWVudCwgY29uZikge1xuICAgIHZhciBjb25maWcgPSBjb25mIHx8IHt9O1xuICAgIHZhciBsb2dnZXIgPSBuZXcgX0xvZ2dlcjIuZGVmYXVsdCh0eXBlb2YgY29uZmlnLmxvZ2dpbmcgPT09ICdib29sZWFuJyA/IGNvbmZpZy5sb2dnaW5nIDogdHJ1ZSk7XG4gICAgbG9nZ2VyLmxvZygnaHRtbDJjYW52YXMgJyArIFwiMS4wLjAtYWxwaGEuMTJcIik7XG5cbiAgICBpZiAodHJ1ZSAmJiB0eXBlb2YgY29uZmlnLm9ucmVuZGVyZWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgbG9nZ2VyLmVycm9yKCdvbnJlbmRlcmVkIG9wdGlvbiBpcyBkZXByZWNhdGVkLCBodG1sMmNhbnZhcyByZXR1cm5zIGEgUHJvbWlzZSB3aXRoIHRoZSBjYW52YXMgYXMgdGhlIHZhbHVlJyk7XG4gICAgfVxuXG4gICAgdmFyIG93bmVyRG9jdW1lbnQgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQ7XG4gICAgaWYgKCFvd25lckRvY3VtZW50KSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgnUHJvdmlkZWQgZWxlbWVudCBpcyBub3Qgd2l0aGluIGEgRG9jdW1lbnQnKTtcbiAgICB9XG4gICAgdmFyIGRlZmF1bHRWaWV3ID0gb3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcblxuICAgIHZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgIGFsbG93VGFpbnQ6IGZhbHNlLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgaW1hZ2VUaW1lb3V0OiAxNTAwMCxcbiAgICAgICAgbG9nZ2luZzogdHJ1ZSxcbiAgICAgICAgcHJveHk6IG51bGwsXG4gICAgICAgIHJlbW92ZUNvbnRhaW5lcjogdHJ1ZSxcbiAgICAgICAgZm9yZWlnbk9iamVjdFJlbmRlcmluZzogZmFsc2UsXG4gICAgICAgIHNjYWxlOiBkZWZhdWx0Vmlldy5kZXZpY2VQaXhlbFJhdGlvIHx8IDEsXG4gICAgICAgIHRhcmdldDogbmV3IF9DYW52YXNSZW5kZXJlcjIuZGVmYXVsdChjb25maWcuY2FudmFzKSxcbiAgICAgICAgdXNlQ09SUzogZmFsc2UsXG4gICAgICAgIHdpbmRvd1dpZHRoOiBkZWZhdWx0Vmlldy5pbm5lcldpZHRoLFxuICAgICAgICB3aW5kb3dIZWlnaHQ6IGRlZmF1bHRWaWV3LmlubmVySGVpZ2h0LFxuICAgICAgICBzY3JvbGxYOiBkZWZhdWx0Vmlldy5wYWdlWE9mZnNldCxcbiAgICAgICAgc2Nyb2xsWTogZGVmYXVsdFZpZXcucGFnZVlPZmZzZXRcbiAgICB9O1xuXG4gICAgdmFyIHJlc3VsdCA9ICgwLCBfV2luZG93LnJlbmRlckVsZW1lbnQpKGVsZW1lbnQsIF9leHRlbmRzKHt9LCBkZWZhdWx0T3B0aW9ucywgY29uZmlnKSwgbG9nZ2VyKTtcblxuICAgIGlmICh0cnVlKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGxvZ2dlci5lcnJvcihlKTtcbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuaHRtbDJjYW52YXMuQ2FudmFzUmVuZGVyZXIgPSBfQ2FudmFzUmVuZGVyZXIyLmRlZmF1bHQ7XG5cbm1vZHVsZS5leHBvcnRzID0gaHRtbDJjYW52YXM7XG5cbi8qKiovIH0pLFxuLyogMjggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZW5kZXJFbGVtZW50ID0gdW5kZWZpbmVkO1xuXG52YXIgX3NsaWNlZFRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH0gcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGkpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyByZXR1cm4gYXJyOyB9IGVsc2UgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkgeyByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpOyB9IGVsc2UgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTsgfSB9OyB9KCk7XG5cbnZhciBfTG9nZ2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNik7XG5cbnZhciBfTG9nZ2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xvZ2dlcik7XG5cbnZhciBfTm9kZVBhcnNlciA9IF9fd2VicGFja19yZXF1aXJlX18oMjkpO1xuXG52YXIgX1JlbmRlcmVyID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1MSk7XG5cbnZhciBfUmVuZGVyZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUmVuZGVyZXIpO1xuXG52YXIgX0ZvcmVpZ25PYmplY3RSZW5kZXJlciA9IF9fd2VicGFja19yZXF1aXJlX18oMjMpO1xuXG52YXIgX0ZvcmVpZ25PYmplY3RSZW5kZXJlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Gb3JlaWduT2JqZWN0UmVuZGVyZXIpO1xuXG52YXIgX0ZlYXR1cmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKTtcblxudmFyIF9GZWF0dXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ZlYXR1cmUpO1xuXG52YXIgX0JvdW5kcyA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cbnZhciBfQ2xvbmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDU0KTtcblxudmFyIF9Gb250ID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNSk7XG5cbnZhciBfQ29sb3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgX0NvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvbG9yKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHJlbmRlckVsZW1lbnQgPSBleHBvcnRzLnJlbmRlckVsZW1lbnQgPSBmdW5jdGlvbiByZW5kZXJFbGVtZW50KGVsZW1lbnQsIG9wdGlvbnMsIGxvZ2dlcikge1xuICAgIHZhciBvd25lckRvY3VtZW50ID0gZWxlbWVudC5vd25lckRvY3VtZW50O1xuXG4gICAgdmFyIHdpbmRvd0JvdW5kcyA9IG5ldyBfQm91bmRzLkJvdW5kcyhvcHRpb25zLnNjcm9sbFgsIG9wdGlvbnMuc2Nyb2xsWSwgb3B0aW9ucy53aW5kb3dXaWR0aCwgb3B0aW9ucy53aW5kb3dIZWlnaHQpO1xuXG4gICAgLy8gaHR0cDovL3d3dy53My5vcmcvVFIvY3NzMy1iYWNrZ3JvdW5kLyNzcGVjaWFsLWJhY2tncm91bmRzXG4gICAgdmFyIGRvY3VtZW50QmFja2dyb3VuZENvbG9yID0gb3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgPyBuZXcgX0NvbG9yMi5kZWZhdWx0KGdldENvbXB1dGVkU3R5bGUob3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmJhY2tncm91bmRDb2xvcikgOiBfQ29sb3IuVFJBTlNQQVJFTlQ7XG4gICAgdmFyIGJvZHlCYWNrZ3JvdW5kQ29sb3IgPSBvd25lckRvY3VtZW50LmJvZHkgPyBuZXcgX0NvbG9yMi5kZWZhdWx0KGdldENvbXB1dGVkU3R5bGUob3duZXJEb2N1bWVudC5ib2R5KS5iYWNrZ3JvdW5kQ29sb3IpIDogX0NvbG9yLlRSQU5TUEFSRU5UO1xuXG4gICAgdmFyIGJhY2tncm91bmRDb2xvciA9IGVsZW1lbnQgPT09IG93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ID8gZG9jdW1lbnRCYWNrZ3JvdW5kQ29sb3IuaXNUcmFuc3BhcmVudCgpID8gYm9keUJhY2tncm91bmRDb2xvci5pc1RyYW5zcGFyZW50KCkgPyBvcHRpb25zLmJhY2tncm91bmRDb2xvciA/IG5ldyBfQ29sb3IyLmRlZmF1bHQob3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IpIDogbnVsbCA6IGJvZHlCYWNrZ3JvdW5kQ29sb3IgOiBkb2N1bWVudEJhY2tncm91bmRDb2xvciA6IG9wdGlvbnMuYmFja2dyb3VuZENvbG9yID8gbmV3IF9Db2xvcjIuZGVmYXVsdChvcHRpb25zLmJhY2tncm91bmRDb2xvcikgOiBudWxsO1xuXG4gICAgcmV0dXJuIChvcHRpb25zLmZvcmVpZ25PYmplY3RSZW5kZXJpbmcgPyAvLyAkRmxvd0ZpeE1lXG4gICAgX0ZlYXR1cmUyLmRlZmF1bHQuU1VQUE9SVF9GT1JFSUdOT0JKRUNUX0RSQVdJTkcgOiBQcm9taXNlLnJlc29sdmUoZmFsc2UpKS50aGVuKGZ1bmN0aW9uIChzdXBwb3J0Rm9yZWlnbk9iamVjdCkge1xuICAgICAgICByZXR1cm4gc3VwcG9ydEZvcmVpZ25PYmplY3QgPyBmdW5jdGlvbiAoY2xvbmVyKSB7XG4gICAgICAgICAgICBpZiAodHJ1ZSkge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5sb2coJ0RvY3VtZW50IGNsb25lZCwgdXNpbmcgZm9yZWlnbk9iamVjdCByZW5kZXJpbmcnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNsb25lci5pbmxpbmVGb250cyhvd25lckRvY3VtZW50KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2xvbmVyLnJlc291cmNlTG9hZGVyLnJlYWR5KCk7XG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVuZGVyZXIgPSBuZXcgX0ZvcmVpZ25PYmplY3RSZW5kZXJlcjIuZGVmYXVsdChjbG9uZXIuZG9jdW1lbnRFbGVtZW50KTtcblxuICAgICAgICAgICAgICAgIHZhciBkZWZhdWx0VmlldyA9IG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gICAgICAgICAgICAgICAgdmFyIHNjcm9sbFggPSBkZWZhdWx0Vmlldy5wYWdlWE9mZnNldDtcbiAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsWSA9IGRlZmF1bHRWaWV3LnBhZ2VZT2Zmc2V0O1xuXG4gICAgICAgICAgICAgICAgdmFyIGlzRG9jdW1lbnQgPSBlbGVtZW50LnRhZ05hbWUgPT09ICdIVE1MJyB8fCBlbGVtZW50LnRhZ05hbWUgPT09ICdCT0RZJztcblxuICAgICAgICAgICAgICAgIHZhciBfcmVmID0gaXNEb2N1bWVudCA/ICgwLCBfQm91bmRzLnBhcnNlRG9jdW1lbnRTaXplKShvd25lckRvY3VtZW50KSA6ICgwLCBfQm91bmRzLnBhcnNlQm91bmRzKShlbGVtZW50LCBzY3JvbGxYLCBzY3JvbGxZKSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGggPSBfcmVmLndpZHRoLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPSBfcmVmLmhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgbGVmdCA9IF9yZWYubGVmdCxcbiAgICAgICAgICAgICAgICAgICAgdG9wID0gX3JlZi50b3A7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyZXIucmVuZGVyKHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBiYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlcjogbG9nZ2VyLFxuICAgICAgICAgICAgICAgICAgICBzY2FsZTogb3B0aW9ucy5zY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgeDogdHlwZW9mIG9wdGlvbnMueCA9PT0gJ251bWJlcicgPyBvcHRpb25zLnggOiBsZWZ0LFxuICAgICAgICAgICAgICAgICAgICB5OiB0eXBlb2Ygb3B0aW9ucy55ID09PSAnbnVtYmVyJyA/IG9wdGlvbnMueSA6IHRvcCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHR5cGVvZiBvcHRpb25zLndpZHRoID09PSAnbnVtYmVyJyA/IG9wdGlvbnMud2lkdGggOiBNYXRoLmNlaWwod2lkdGgpLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHR5cGVvZiBvcHRpb25zLmhlaWdodCA9PT0gJ251bWJlcicgPyBvcHRpb25zLmhlaWdodCA6IE1hdGguY2VpbChoZWlnaHQpLFxuICAgICAgICAgICAgICAgICAgICB3aW5kb3dXaWR0aDogb3B0aW9ucy53aW5kb3dXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgd2luZG93SGVpZ2h0OiBvcHRpb25zLndpbmRvd0hlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsWDogb3B0aW9ucy5zY3JvbGxYLFxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxZOiBvcHRpb25zLnNjcm9sbFlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KG5ldyBfQ2xvbmUuRG9jdW1lbnRDbG9uZXIoZWxlbWVudCwgb3B0aW9ucywgbG9nZ2VyLCB0cnVlLCByZW5kZXJFbGVtZW50KSkgOiAoMCwgX0Nsb25lLmNsb25lV2luZG93KShvd25lckRvY3VtZW50LCB3aW5kb3dCb3VuZHMsIGVsZW1lbnQsIG9wdGlvbnMsIGxvZ2dlciwgcmVuZGVyRWxlbWVudCkudGhlbihmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgICAgICAgIHZhciBfcmVmMyA9IF9zbGljZWRUb0FycmF5KF9yZWYyLCAzKSxcbiAgICAgICAgICAgICAgICBjb250YWluZXIgPSBfcmVmM1swXSxcbiAgICAgICAgICAgICAgICBjbG9uZWRFbGVtZW50ID0gX3JlZjNbMV0sXG4gICAgICAgICAgICAgICAgcmVzb3VyY2VMb2FkZXIgPSBfcmVmM1syXTtcblxuICAgICAgICAgICAgaWYgKHRydWUpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIubG9nKCdEb2N1bWVudCBjbG9uZWQsIHVzaW5nIGNvbXB1dGVkIHJlbmRlcmluZycpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgc3RhY2sgPSAoMCwgX05vZGVQYXJzZXIuTm9kZVBhcnNlcikoY2xvbmVkRWxlbWVudCwgcmVzb3VyY2VMb2FkZXIsIGxvZ2dlcik7XG4gICAgICAgICAgICB2YXIgY2xvbmVkRG9jdW1lbnQgPSBjbG9uZWRFbGVtZW50Lm93bmVyRG9jdW1lbnQ7XG5cbiAgICAgICAgICAgIGlmIChiYWNrZ3JvdW5kQ29sb3IgPT09IHN0YWNrLmNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kLmJhY2tncm91bmRDb2xvcikge1xuICAgICAgICAgICAgICAgIHN0YWNrLmNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kLmJhY2tncm91bmRDb2xvciA9IF9Db2xvci5UUkFOU1BBUkVOVDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlc291cmNlTG9hZGVyLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoaW1hZ2VTdG9yZSkge1xuICAgICAgICAgICAgICAgIHZhciBmb250TWV0cmljcyA9IG5ldyBfRm9udC5Gb250TWV0cmljcyhjbG9uZWREb2N1bWVudCk7XG4gICAgICAgICAgICAgICAgaWYgKHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmxvZygnU3RhcnRpbmcgcmVuZGVyZXInKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgZGVmYXVsdFZpZXcgPSBjbG9uZWREb2N1bWVudC5kZWZhdWx0VmlldztcbiAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsWCA9IGRlZmF1bHRWaWV3LnBhZ2VYT2Zmc2V0O1xuICAgICAgICAgICAgICAgIHZhciBzY3JvbGxZID0gZGVmYXVsdFZpZXcucGFnZVlPZmZzZXQ7XG5cbiAgICAgICAgICAgICAgICB2YXIgaXNEb2N1bWVudCA9IGNsb25lZEVsZW1lbnQudGFnTmFtZSA9PT0gJ0hUTUwnIHx8IGNsb25lZEVsZW1lbnQudGFnTmFtZSA9PT0gJ0JPRFknO1xuXG4gICAgICAgICAgICAgICAgdmFyIF9yZWY0ID0gaXNEb2N1bWVudCA/ICgwLCBfQm91bmRzLnBhcnNlRG9jdW1lbnRTaXplKShvd25lckRvY3VtZW50KSA6ICgwLCBfQm91bmRzLnBhcnNlQm91bmRzKShjbG9uZWRFbGVtZW50LCBzY3JvbGxYLCBzY3JvbGxZKSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGggPSBfcmVmNC53aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gX3JlZjQuaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gX3JlZjQubGVmdCxcbiAgICAgICAgICAgICAgICAgICAgdG9wID0gX3JlZjQudG9wO1xuXG4gICAgICAgICAgICAgICAgdmFyIHJlbmRlck9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYmFja2dyb3VuZENvbG9yLFxuICAgICAgICAgICAgICAgICAgICBmb250TWV0cmljczogZm9udE1ldHJpY3MsXG4gICAgICAgICAgICAgICAgICAgIGltYWdlU3RvcmU6IGltYWdlU3RvcmUsXG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlcjogbG9nZ2VyLFxuICAgICAgICAgICAgICAgICAgICBzY2FsZTogb3B0aW9ucy5zY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgeDogdHlwZW9mIG9wdGlvbnMueCA9PT0gJ251bWJlcicgPyBvcHRpb25zLnggOiBsZWZ0LFxuICAgICAgICAgICAgICAgICAgICB5OiB0eXBlb2Ygb3B0aW9ucy55ID09PSAnbnVtYmVyJyA/IG9wdGlvbnMueSA6IHRvcCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHR5cGVvZiBvcHRpb25zLndpZHRoID09PSAnbnVtYmVyJyA/IG9wdGlvbnMud2lkdGggOiBNYXRoLmNlaWwod2lkdGgpLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHR5cGVvZiBvcHRpb25zLmhlaWdodCA9PT0gJ251bWJlcicgPyBvcHRpb25zLmhlaWdodCA6IE1hdGguY2VpbChoZWlnaHQpXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnMudGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwob3B0aW9ucy50YXJnZXQubWFwKGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZW5kZXJlciA9IG5ldyBfUmVuZGVyZXIyLmRlZmF1bHQodGFyZ2V0LCByZW5kZXJPcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJlci5yZW5kZXIoc3RhY2spO1xuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlbmRlcmVyID0gbmV3IF9SZW5kZXJlcjIuZGVmYXVsdChvcHRpb25zLnRhcmdldCwgcmVuZGVyT3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjYW52YXMgPSByZW5kZXJlci5yZW5kZXIoc3RhY2spO1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5yZW1vdmVDb250YWluZXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250YWluZXIucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIubG9nKCdDYW5ub3QgZGV0YWNoIGNsb25lZCBpZnJhbWUgYXMgaXQgaXMgbm90IGluIHRoZSBET00gYW55bW9yZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbnZhcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuXG4vKioqLyB9KSxcbi8qIDI5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuTm9kZVBhcnNlciA9IHVuZGVmaW5lZDtcblxudmFyIF9TdGFja2luZ0NvbnRleHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMwKTtcblxudmFyIF9TdGFja2luZ0NvbnRleHQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU3RhY2tpbmdDb250ZXh0KTtcblxudmFyIF9Ob2RlQ29udGFpbmVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblxudmFyIF9Ob2RlQ29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX05vZGVDb250YWluZXIpO1xuXG52YXIgX1RleHRDb250YWluZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpO1xuXG52YXIgX1RleHRDb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGV4dENvbnRhaW5lcik7XG5cbnZhciBfSW5wdXQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIxKTtcblxudmFyIF9MaXN0SXRlbSA9IF9fd2VicGFja19yZXF1aXJlX18oMTQpO1xuXG52YXIgX2xpc3RTdHlsZSA9IF9fd2VicGFja19yZXF1aXJlX18oOCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBOb2RlUGFyc2VyID0gZXhwb3J0cy5Ob2RlUGFyc2VyID0gZnVuY3Rpb24gTm9kZVBhcnNlcihub2RlLCByZXNvdXJjZUxvYWRlciwgbG9nZ2VyKSB7XG4gICAgaWYgKHRydWUpIHtcbiAgICAgICAgbG9nZ2VyLmxvZygnU3RhcnRpbmcgbm9kZSBwYXJzaW5nJyk7XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gMDtcblxuICAgIHZhciBjb250YWluZXIgPSBuZXcgX05vZGVDb250YWluZXIyLmRlZmF1bHQobm9kZSwgbnVsbCwgcmVzb3VyY2VMb2FkZXIsIGluZGV4KyspO1xuICAgIHZhciBzdGFjayA9IG5ldyBfU3RhY2tpbmdDb250ZXh0Mi5kZWZhdWx0KGNvbnRhaW5lciwgbnVsbCwgdHJ1ZSk7XG5cbiAgICBwYXJzZU5vZGVUcmVlKG5vZGUsIGNvbnRhaW5lciwgc3RhY2ssIHJlc291cmNlTG9hZGVyLCBpbmRleCk7XG5cbiAgICBpZiAodHJ1ZSkge1xuICAgICAgICBsb2dnZXIubG9nKCdGaW5pc2hlZCBwYXJzaW5nIG5vZGUgdHJlZScpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGFjaztcbn07XG5cbnZhciBJR05PUkVEX05PREVfTkFNRVMgPSBbJ1NDUklQVCcsICdIRUFEJywgJ1RJVExFJywgJ09CSkVDVCcsICdCUicsICdPUFRJT04nXTtcblxudmFyIHBhcnNlTm9kZVRyZWUgPSBmdW5jdGlvbiBwYXJzZU5vZGVUcmVlKG5vZGUsIHBhcmVudCwgc3RhY2ssIHJlc291cmNlTG9hZGVyLCBpbmRleCkge1xuICAgIGlmICh0cnVlICYmIGluZGV4ID4gNTAwMDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWN1cnNpb24gZXJyb3Igd2hpbGUgcGFyc2luZyBub2RlIHRyZWUnKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBjaGlsZE5vZGUgPSBub2RlLmZpcnN0Q2hpbGQsIG5leHROb2RlOyBjaGlsZE5vZGU7IGNoaWxkTm9kZSA9IG5leHROb2RlKSB7XG4gICAgICAgIG5leHROb2RlID0gY2hpbGROb2RlLm5leHRTaWJsaW5nO1xuICAgICAgICB2YXIgZGVmYXVsdFZpZXcgPSBjaGlsZE5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcbiAgICAgICAgaWYgKGNoaWxkTm9kZSBpbnN0YW5jZW9mIGRlZmF1bHRWaWV3LlRleHQgfHwgY2hpbGROb2RlIGluc3RhbmNlb2YgVGV4dCB8fCBkZWZhdWx0Vmlldy5wYXJlbnQgJiYgY2hpbGROb2RlIGluc3RhbmNlb2YgZGVmYXVsdFZpZXcucGFyZW50LlRleHQpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGUuZGF0YS50cmltKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHBhcmVudC5jaGlsZE5vZGVzLnB1c2goX1RleHRDb250YWluZXIyLmRlZmF1bHQuZnJvbVRleHROb2RlKGNoaWxkTm9kZSwgcGFyZW50KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY2hpbGROb2RlIGluc3RhbmNlb2YgZGVmYXVsdFZpZXcuSFRNTEVsZW1lbnQgfHwgY2hpbGROb2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgZGVmYXVsdFZpZXcucGFyZW50ICYmIGNoaWxkTm9kZSBpbnN0YW5jZW9mIGRlZmF1bHRWaWV3LnBhcmVudC5IVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKElHTk9SRURfTk9ERV9OQU1FUy5pbmRleE9mKGNoaWxkTm9kZS5ub2RlTmFtZSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IG5ldyBfTm9kZUNvbnRhaW5lcjIuZGVmYXVsdChjaGlsZE5vZGUsIHBhcmVudCwgcmVzb3VyY2VMb2FkZXIsIGluZGV4KyspO1xuICAgICAgICAgICAgICAgIGlmIChjb250YWluZXIuaXNWaXNpYmxlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkTm9kZS50YWdOYW1lID09PSAnSU5QVVQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICAgICAgICAgICAgICAgICAgICAoMCwgX0lucHV0LmlubGluZUlucHV0RWxlbWVudCkoY2hpbGROb2RlLCBjb250YWluZXIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNoaWxkTm9kZS50YWdOYW1lID09PSAnVEVYVEFSRUEnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICAgICAgICAgICAgICAgICAgICAoMCwgX0lucHV0LmlubGluZVRleHRBcmVhRWxlbWVudCkoY2hpbGROb2RlLCBjb250YWluZXIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNoaWxkTm9kZS50YWdOYW1lID09PSAnU0VMRUNUJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgICAgICAgICAgICAgICAgICAgKDAsIF9JbnB1dC5pbmxpbmVTZWxlY3RFbGVtZW50KShjaGlsZE5vZGUsIGNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29udGFpbmVyLnN0eWxlLmxpc3RTdHlsZSAmJiBjb250YWluZXIuc3R5bGUubGlzdFN0eWxlLmxpc3RTdHlsZVR5cGUgIT09IF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLk5PTkUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICgwLCBfTGlzdEl0ZW0uaW5saW5lTGlzdEl0ZW1FbGVtZW50KShjaGlsZE5vZGUsIGNvbnRhaW5lciwgcmVzb3VyY2VMb2FkZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIFNIT1VMRF9UUkFWRVJTRV9DSElMRFJFTiA9IGNoaWxkTm9kZS50YWdOYW1lICE9PSAnVEVYVEFSRUEnO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdHJlYXRBc1JlYWxTdGFja2luZ0NvbnRleHQgPSBjcmVhdGVzUmVhbFN0YWNraW5nQ29udGV4dChjb250YWluZXIsIGNoaWxkTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0cmVhdEFzUmVhbFN0YWNraW5nQ29udGV4dCB8fCBjcmVhdGVzU3RhY2tpbmdDb250ZXh0KGNvbnRhaW5lcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZvciB0cmVhdEFzUmVhbFN0YWNraW5nQ29udGV4dDpmYWxzZSwgYW55IHBvc2l0aW9uZWQgZGVzY2VuZGFudHMgYW5kIGRlc2NlbmRhbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3aGljaCBhY3R1YWxseSBjcmVhdGUgYSBuZXcgc3RhY2tpbmcgY29udGV4dCBzaG91bGQgYmUgY29uc2lkZXJlZCBwYXJ0IG9mIHRoZSBwYXJlbnQgc3RhY2tpbmcgY29udGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmVudFN0YWNrID0gdHJlYXRBc1JlYWxTdGFja2luZ0NvbnRleHQgfHwgY29udGFpbmVyLmlzUG9zaXRpb25lZCgpID8gc3RhY2suZ2V0UmVhbFBhcmVudFN0YWNraW5nQ29udGV4dCgpIDogc3RhY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2hpbGRTdGFjayA9IG5ldyBfU3RhY2tpbmdDb250ZXh0Mi5kZWZhdWx0KGNvbnRhaW5lciwgcGFyZW50U3RhY2ssIHRyZWF0QXNSZWFsU3RhY2tpbmdDb250ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudFN0YWNrLmNvbnRleHRzLnB1c2goY2hpbGRTdGFjayk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoU0hPVUxEX1RSQVZFUlNFX0NISUxEUkVOKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VOb2RlVHJlZShjaGlsZE5vZGUsIGNvbnRhaW5lciwgY2hpbGRTdGFjaywgcmVzb3VyY2VMb2FkZXIsIGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrLmNoaWxkcmVuLnB1c2goY29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChTSE9VTERfVFJBVkVSU0VfQ0hJTERSRU4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZU5vZGVUcmVlKGNoaWxkTm9kZSwgY29udGFpbmVyLCBzdGFjaywgcmVzb3VyY2VMb2FkZXIsIGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjaGlsZE5vZGUgaW5zdGFuY2VvZiBkZWZhdWx0Vmlldy5TVkdTVkdFbGVtZW50IHx8IGNoaWxkTm9kZSBpbnN0YW5jZW9mIFNWR1NWR0VsZW1lbnQgfHwgZGVmYXVsdFZpZXcucGFyZW50ICYmIGNoaWxkTm9kZSBpbnN0YW5jZW9mIGRlZmF1bHRWaWV3LnBhcmVudC5TVkdTVkdFbGVtZW50KSB7XG4gICAgICAgICAgICB2YXIgX2NvbnRhaW5lciA9IG5ldyBfTm9kZUNvbnRhaW5lcjIuZGVmYXVsdChjaGlsZE5vZGUsIHBhcmVudCwgcmVzb3VyY2VMb2FkZXIsIGluZGV4KyspO1xuICAgICAgICAgICAgdmFyIF90cmVhdEFzUmVhbFN0YWNraW5nQ29udGV4dCA9IGNyZWF0ZXNSZWFsU3RhY2tpbmdDb250ZXh0KF9jb250YWluZXIsIGNoaWxkTm9kZSk7XG4gICAgICAgICAgICBpZiAoX3RyZWF0QXNSZWFsU3RhY2tpbmdDb250ZXh0IHx8IGNyZWF0ZXNTdGFja2luZ0NvbnRleHQoX2NvbnRhaW5lcikpIHtcbiAgICAgICAgICAgICAgICAvLyBmb3IgdHJlYXRBc1JlYWxTdGFja2luZ0NvbnRleHQ6ZmFsc2UsIGFueSBwb3NpdGlvbmVkIGRlc2NlbmRhbnRzIGFuZCBkZXNjZW5kYW50c1xuICAgICAgICAgICAgICAgIC8vIHdoaWNoIGFjdHVhbGx5IGNyZWF0ZSBhIG5ldyBzdGFja2luZyBjb250ZXh0IHNob3VsZCBiZSBjb25zaWRlcmVkIHBhcnQgb2YgdGhlIHBhcmVudCBzdGFja2luZyBjb250ZXh0XG4gICAgICAgICAgICAgICAgdmFyIF9wYXJlbnRTdGFjayA9IF90cmVhdEFzUmVhbFN0YWNraW5nQ29udGV4dCB8fCBfY29udGFpbmVyLmlzUG9zaXRpb25lZCgpID8gc3RhY2suZ2V0UmVhbFBhcmVudFN0YWNraW5nQ29udGV4dCgpIDogc3RhY2s7XG4gICAgICAgICAgICAgICAgdmFyIF9jaGlsZFN0YWNrID0gbmV3IF9TdGFja2luZ0NvbnRleHQyLmRlZmF1bHQoX2NvbnRhaW5lciwgX3BhcmVudFN0YWNrLCBfdHJlYXRBc1JlYWxTdGFja2luZ0NvbnRleHQpO1xuICAgICAgICAgICAgICAgIF9wYXJlbnRTdGFjay5jb250ZXh0cy5wdXNoKF9jaGlsZFN0YWNrKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RhY2suY2hpbGRyZW4ucHVzaChfY29udGFpbmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cbnZhciBjcmVhdGVzUmVhbFN0YWNraW5nQ29udGV4dCA9IGZ1bmN0aW9uIGNyZWF0ZXNSZWFsU3RhY2tpbmdDb250ZXh0KGNvbnRhaW5lciwgbm9kZSkge1xuICAgIHJldHVybiBjb250YWluZXIuaXNSb290RWxlbWVudCgpIHx8IGNvbnRhaW5lci5pc1Bvc2l0aW9uZWRXaXRoWkluZGV4KCkgfHwgY29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPCAxIHx8IGNvbnRhaW5lci5pc1RyYW5zZm9ybWVkKCkgfHwgaXNCb2R5V2l0aFRyYW5zcGFyZW50Um9vdChjb250YWluZXIsIG5vZGUpO1xufTtcblxudmFyIGNyZWF0ZXNTdGFja2luZ0NvbnRleHQgPSBmdW5jdGlvbiBjcmVhdGVzU3RhY2tpbmdDb250ZXh0KGNvbnRhaW5lcikge1xuICAgIHJldHVybiBjb250YWluZXIuaXNQb3NpdGlvbmVkKCkgfHwgY29udGFpbmVyLmlzRmxvYXRpbmcoKTtcbn07XG5cbnZhciBpc0JvZHlXaXRoVHJhbnNwYXJlbnRSb290ID0gZnVuY3Rpb24gaXNCb2R5V2l0aFRyYW5zcGFyZW50Um9vdChjb250YWluZXIsIG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS5ub2RlTmFtZSA9PT0gJ0JPRFknICYmIGNvbnRhaW5lci5wYXJlbnQgaW5zdGFuY2VvZiBfTm9kZUNvbnRhaW5lcjIuZGVmYXVsdCAmJiBjb250YWluZXIucGFyZW50LnN0eWxlLmJhY2tncm91bmQuYmFja2dyb3VuZENvbG9yLmlzVHJhbnNwYXJlbnQoKTtcbn07XG5cbi8qKiovIH0pLFxuLyogMzAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX05vZGVDb250YWluZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXG52YXIgX05vZGVDb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTm9kZUNvbnRhaW5lcik7XG5cbnZhciBfcG9zaXRpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFN0YWNraW5nQ29udGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTdGFja2luZ0NvbnRleHQoY29udGFpbmVyLCBwYXJlbnQsIHRyZWF0QXNSZWFsU3RhY2tpbmdDb250ZXh0KSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdGFja2luZ0NvbnRleHQpO1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5jb250ZXh0cyA9IFtdO1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgICAgIHRoaXMudHJlYXRBc1JlYWxTdGFja2luZ0NvbnRleHQgPSB0cmVhdEFzUmVhbFN0YWNraW5nQ29udGV4dDtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoU3RhY2tpbmdDb250ZXh0LCBbe1xuICAgICAgICBrZXk6ICdnZXRPcGFjaXR5JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldE9wYWNpdHkoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLmNvbnRhaW5lci5zdHlsZS5vcGFjaXR5ICogdGhpcy5wYXJlbnQuZ2V0T3BhY2l0eSgpIDogdGhpcy5jb250YWluZXIuc3R5bGUub3BhY2l0eTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0UmVhbFBhcmVudFN0YWNraW5nQ29udGV4dCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRSZWFsUGFyZW50U3RhY2tpbmdDb250ZXh0KCkge1xuICAgICAgICAgICAgcmV0dXJuICF0aGlzLnBhcmVudCB8fCB0aGlzLnRyZWF0QXNSZWFsU3RhY2tpbmdDb250ZXh0ID8gdGhpcyA6IHRoaXMucGFyZW50LmdldFJlYWxQYXJlbnRTdGFja2luZ0NvbnRleHQoKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBTdGFja2luZ0NvbnRleHQ7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFN0YWNraW5nQ29udGV4dDtcblxuLyoqKi8gfSksXG4vKiAzMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBTaXplID0gZnVuY3Rpb24gU2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNpemUpO1xuXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gU2l6ZTtcblxuLyoqKi8gfSksXG4vKiAzMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfUGF0aCA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cbnZhciBfVmVjdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcblxudmFyIF9WZWN0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVmVjdG9yKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIGxlcnAgPSBmdW5jdGlvbiBsZXJwKGEsIGIsIHQpIHtcbiAgICByZXR1cm4gbmV3IF9WZWN0b3IyLmRlZmF1bHQoYS54ICsgKGIueCAtIGEueCkgKiB0LCBhLnkgKyAoYi55IC0gYS55KSAqIHQpO1xufTtcblxudmFyIEJlemllckN1cnZlID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEJlemllckN1cnZlKHN0YXJ0LCBzdGFydENvbnRyb2wsIGVuZENvbnRyb2wsIGVuZCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQmV6aWVyQ3VydmUpO1xuXG4gICAgICAgIHRoaXMudHlwZSA9IF9QYXRoLlBBVEguQkVaSUVSX0NVUlZFO1xuICAgICAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XG4gICAgICAgIHRoaXMuc3RhcnRDb250cm9sID0gc3RhcnRDb250cm9sO1xuICAgICAgICB0aGlzLmVuZENvbnRyb2wgPSBlbmRDb250cm9sO1xuICAgICAgICB0aGlzLmVuZCA9IGVuZDtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQmV6aWVyQ3VydmUsIFt7XG4gICAgICAgIGtleTogJ3N1YmRpdmlkZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzdWJkaXZpZGUodCwgZmlyc3RIYWxmKSB7XG4gICAgICAgICAgICB2YXIgYWIgPSBsZXJwKHRoaXMuc3RhcnQsIHRoaXMuc3RhcnRDb250cm9sLCB0KTtcbiAgICAgICAgICAgIHZhciBiYyA9IGxlcnAodGhpcy5zdGFydENvbnRyb2wsIHRoaXMuZW5kQ29udHJvbCwgdCk7XG4gICAgICAgICAgICB2YXIgY2QgPSBsZXJwKHRoaXMuZW5kQ29udHJvbCwgdGhpcy5lbmQsIHQpO1xuICAgICAgICAgICAgdmFyIGFiYmMgPSBsZXJwKGFiLCBiYywgdCk7XG4gICAgICAgICAgICB2YXIgYmNjZCA9IGxlcnAoYmMsIGNkLCB0KTtcbiAgICAgICAgICAgIHZhciBkZXN0ID0gbGVycChhYmJjLCBiY2NkLCB0KTtcbiAgICAgICAgICAgIHJldHVybiBmaXJzdEhhbGYgPyBuZXcgQmV6aWVyQ3VydmUodGhpcy5zdGFydCwgYWIsIGFiYmMsIGRlc3QpIDogbmV3IEJlemllckN1cnZlKGRlc3QsIGJjY2QsIGNkLCB0aGlzLmVuZCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JldmVyc2UnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmV2ZXJzZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQmV6aWVyQ3VydmUodGhpcy5lbmQsIHRoaXMuZW5kQ29udHJvbCwgdGhpcy5zdGFydENvbnRyb2wsIHRoaXMuc3RhcnQpO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEJlemllckN1cnZlO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBCZXppZXJDdXJ2ZTtcblxuLyoqKi8gfSksXG4vKiAzMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnBhcnNlQm9yZGVyUmFkaXVzID0gdW5kZWZpbmVkO1xuXG52YXIgX3NsaWNlZFRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH0gcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGkpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyByZXR1cm4gYXJyOyB9IGVsc2UgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkgeyByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpOyB9IGVsc2UgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTsgfSB9OyB9KCk7XG5cbnZhciBfTGVuZ3RoID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxudmFyIF9MZW5ndGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTGVuZ3RoKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFNJREVTID0gWyd0b3AtbGVmdCcsICd0b3AtcmlnaHQnLCAnYm90dG9tLXJpZ2h0JywgJ2JvdHRvbS1sZWZ0J107XG5cbnZhciBwYXJzZUJvcmRlclJhZGl1cyA9IGV4cG9ydHMucGFyc2VCb3JkZXJSYWRpdXMgPSBmdW5jdGlvbiBwYXJzZUJvcmRlclJhZGl1cyhzdHlsZSkge1xuICAgIHJldHVybiBTSURFUy5tYXAoZnVuY3Rpb24gKHNpZGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnYm9yZGVyLScgKyBzaWRlICsgJy1yYWRpdXMnKTtcblxuICAgICAgICB2YXIgX3ZhbHVlJHNwbGl0JG1hcCA9IHZhbHVlLnNwbGl0KCcgJykubWFwKF9MZW5ndGgyLmRlZmF1bHQuY3JlYXRlKSxcbiAgICAgICAgICAgIF92YWx1ZSRzcGxpdCRtYXAyID0gX3NsaWNlZFRvQXJyYXkoX3ZhbHVlJHNwbGl0JG1hcCwgMiksXG4gICAgICAgICAgICBob3Jpem9udGFsID0gX3ZhbHVlJHNwbGl0JG1hcDJbMF0sXG4gICAgICAgICAgICB2ZXJ0aWNhbCA9IF92YWx1ZSRzcGxpdCRtYXAyWzFdO1xuXG4gICAgICAgIHJldHVybiB0eXBlb2YgdmVydGljYWwgPT09ICd1bmRlZmluZWQnID8gW2hvcml6b250YWwsIGhvcml6b250YWxdIDogW2hvcml6b250YWwsIHZlcnRpY2FsXTtcbiAgICB9KTtcbn07XG5cbi8qKiovIH0pLFxuLyogMzQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xudmFyIERJU1BMQVkgPSBleHBvcnRzLkRJU1BMQVkgPSB7XG4gICAgTk9ORTogMSA8PCAwLFxuICAgIEJMT0NLOiAxIDw8IDEsXG4gICAgSU5MSU5FOiAxIDw8IDIsXG4gICAgUlVOX0lOOiAxIDw8IDMsXG4gICAgRkxPVzogMSA8PCA0LFxuICAgIEZMT1dfUk9PVDogMSA8PCA1LFxuICAgIFRBQkxFOiAxIDw8IDYsXG4gICAgRkxFWDogMSA8PCA3LFxuICAgIEdSSUQ6IDEgPDwgOCxcbiAgICBSVUJZOiAxIDw8IDksXG4gICAgU1VCR1JJRDogMSA8PCAxMCxcbiAgICBMSVNUX0lURU06IDEgPDwgMTEsXG4gICAgVEFCTEVfUk9XX0dST1VQOiAxIDw8IDEyLFxuICAgIFRBQkxFX0hFQURFUl9HUk9VUDogMSA8PCAxMyxcbiAgICBUQUJMRV9GT09URVJfR1JPVVA6IDEgPDwgMTQsXG4gICAgVEFCTEVfUk9XOiAxIDw8IDE1LFxuICAgIFRBQkxFX0NFTEw6IDEgPDwgMTYsXG4gICAgVEFCTEVfQ09MVU1OX0dST1VQOiAxIDw8IDE3LFxuICAgIFRBQkxFX0NPTFVNTjogMSA8PCAxOCxcbiAgICBUQUJMRV9DQVBUSU9OOiAxIDw8IDE5LFxuICAgIFJVQllfQkFTRTogMSA8PCAyMCxcbiAgICBSVUJZX1RFWFQ6IDEgPDwgMjEsXG4gICAgUlVCWV9CQVNFX0NPTlRBSU5FUjogMSA8PCAyMixcbiAgICBSVUJZX1RFWFRfQ09OVEFJTkVSOiAxIDw8IDIzLFxuICAgIENPTlRFTlRTOiAxIDw8IDI0LFxuICAgIElOTElORV9CTE9DSzogMSA8PCAyNSxcbiAgICBJTkxJTkVfTElTVF9JVEVNOiAxIDw8IDI2LFxuICAgIElOTElORV9UQUJMRTogMSA8PCAyNyxcbiAgICBJTkxJTkVfRkxFWDogMSA8PCAyOCxcbiAgICBJTkxJTkVfR1JJRDogMSA8PCAyOVxufTtcblxudmFyIHBhcnNlRGlzcGxheVZhbHVlID0gZnVuY3Rpb24gcGFyc2VEaXNwbGF5VmFsdWUoZGlzcGxheSkge1xuICAgIHN3aXRjaCAoZGlzcGxheSkge1xuICAgICAgICBjYXNlICdibG9jayc6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5CTE9DSztcbiAgICAgICAgY2FzZSAnaW5saW5lJzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLklOTElORTtcbiAgICAgICAgY2FzZSAncnVuLWluJzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLlJVTl9JTjtcbiAgICAgICAgY2FzZSAnZmxvdyc6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5GTE9XO1xuICAgICAgICBjYXNlICdmbG93LXJvb3QnOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuRkxPV19ST09UO1xuICAgICAgICBjYXNlICd0YWJsZSc6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5UQUJMRTtcbiAgICAgICAgY2FzZSAnZmxleCc6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5GTEVYO1xuICAgICAgICBjYXNlICdncmlkJzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLkdSSUQ7XG4gICAgICAgIGNhc2UgJ3J1YnknOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuUlVCWTtcbiAgICAgICAgY2FzZSAnc3ViZ3JpZCc6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5TVUJHUklEO1xuICAgICAgICBjYXNlICdsaXN0LWl0ZW0nOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuTElTVF9JVEVNO1xuICAgICAgICBjYXNlICd0YWJsZS1yb3ctZ3JvdXAnOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuVEFCTEVfUk9XX0dST1VQO1xuICAgICAgICBjYXNlICd0YWJsZS1oZWFkZXItZ3JvdXAnOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuVEFCTEVfSEVBREVSX0dST1VQO1xuICAgICAgICBjYXNlICd0YWJsZS1mb290ZXItZ3JvdXAnOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuVEFCTEVfRk9PVEVSX0dST1VQO1xuICAgICAgICBjYXNlICd0YWJsZS1yb3cnOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuVEFCTEVfUk9XO1xuICAgICAgICBjYXNlICd0YWJsZS1jZWxsJzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLlRBQkxFX0NFTEw7XG4gICAgICAgIGNhc2UgJ3RhYmxlLWNvbHVtbi1ncm91cCc6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5UQUJMRV9DT0xVTU5fR1JPVVA7XG4gICAgICAgIGNhc2UgJ3RhYmxlLWNvbHVtbic6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5UQUJMRV9DT0xVTU47XG4gICAgICAgIGNhc2UgJ3RhYmxlLWNhcHRpb24nOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuVEFCTEVfQ0FQVElPTjtcbiAgICAgICAgY2FzZSAncnVieS1iYXNlJzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLlJVQllfQkFTRTtcbiAgICAgICAgY2FzZSAncnVieS10ZXh0JzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLlJVQllfVEVYVDtcbiAgICAgICAgY2FzZSAncnVieS1iYXNlLWNvbnRhaW5lcic6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5SVUJZX0JBU0VfQ09OVEFJTkVSO1xuICAgICAgICBjYXNlICdydWJ5LXRleHQtY29udGFpbmVyJzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLlJVQllfVEVYVF9DT05UQUlORVI7XG4gICAgICAgIGNhc2UgJ2NvbnRlbnRzJzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLkNPTlRFTlRTO1xuICAgICAgICBjYXNlICdpbmxpbmUtYmxvY2snOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuSU5MSU5FX0JMT0NLO1xuICAgICAgICBjYXNlICdpbmxpbmUtbGlzdC1pdGVtJzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLklOTElORV9MSVNUX0lURU07XG4gICAgICAgIGNhc2UgJ2lubGluZS10YWJsZSc6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5JTkxJTkVfVEFCTEU7XG4gICAgICAgIGNhc2UgJ2lubGluZS1mbGV4JzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLklOTElORV9GTEVYO1xuICAgICAgICBjYXNlICdpbmxpbmUtZ3JpZCc6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5JTkxJTkVfR1JJRDtcbiAgICB9XG5cbiAgICByZXR1cm4gRElTUExBWS5OT05FO1xufTtcblxudmFyIHNldERpc3BsYXlCaXQgPSBmdW5jdGlvbiBzZXREaXNwbGF5Qml0KGJpdCwgZGlzcGxheSkge1xuICAgIHJldHVybiBiaXQgfCBwYXJzZURpc3BsYXlWYWx1ZShkaXNwbGF5KTtcbn07XG5cbnZhciBwYXJzZURpc3BsYXkgPSBleHBvcnRzLnBhcnNlRGlzcGxheSA9IGZ1bmN0aW9uIHBhcnNlRGlzcGxheShkaXNwbGF5KSB7XG4gICAgcmV0dXJuIGRpc3BsYXkuc3BsaXQoJyAnKS5yZWR1Y2Uoc2V0RGlzcGxheUJpdCwgMCk7XG59O1xuXG4vKioqLyB9KSxcbi8qIDM1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbnZhciBGTE9BVCA9IGV4cG9ydHMuRkxPQVQgPSB7XG4gICAgTk9ORTogMCxcbiAgICBMRUZUOiAxLFxuICAgIFJJR0hUOiAyLFxuICAgIElOTElORV9TVEFSVDogMyxcbiAgICBJTkxJTkVfRU5EOiA0XG59O1xuXG52YXIgcGFyc2VDU1NGbG9hdCA9IGV4cG9ydHMucGFyc2VDU1NGbG9hdCA9IGZ1bmN0aW9uIHBhcnNlQ1NTRmxvYXQoZmxvYXQpIHtcbiAgICBzd2l0Y2ggKGZsb2F0KSB7XG4gICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgICAgcmV0dXJuIEZMT0FULkxFRlQ7XG4gICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgIHJldHVybiBGTE9BVC5SSUdIVDtcbiAgICAgICAgY2FzZSAnaW5saW5lLXN0YXJ0JzpcbiAgICAgICAgICAgIHJldHVybiBGTE9BVC5JTkxJTkVfU1RBUlQ7XG4gICAgICAgIGNhc2UgJ2lubGluZS1lbmQnOlxuICAgICAgICAgICAgcmV0dXJuIEZMT0FULklOTElORV9FTkQ7XG4gICAgfVxuICAgIHJldHVybiBGTE9BVC5OT05FO1xufTtcblxuLyoqKi8gfSksXG4vKiAzNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cblxudmFyIHBhcnNlRm9udFdlaWdodCA9IGZ1bmN0aW9uIHBhcnNlRm9udFdlaWdodCh3ZWlnaHQpIHtcbiAgICBzd2l0Y2ggKHdlaWdodCkge1xuICAgICAgICBjYXNlICdub3JtYWwnOlxuICAgICAgICAgICAgcmV0dXJuIDQwMDtcbiAgICAgICAgY2FzZSAnYm9sZCc6XG4gICAgICAgICAgICByZXR1cm4gNzAwO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZSA9IHBhcnNlSW50KHdlaWdodCwgMTApO1xuICAgIHJldHVybiBpc05hTih2YWx1ZSkgPyA0MDAgOiB2YWx1ZTtcbn07XG5cbnZhciBwYXJzZUZvbnQgPSBleHBvcnRzLnBhcnNlRm9udCA9IGZ1bmN0aW9uIHBhcnNlRm9udChzdHlsZSkge1xuICAgIHZhciBmb250RmFtaWx5ID0gc3R5bGUuZm9udEZhbWlseTtcbiAgICB2YXIgZm9udFNpemUgPSBzdHlsZS5mb250U2l6ZTtcbiAgICB2YXIgZm9udFN0eWxlID0gc3R5bGUuZm9udFN0eWxlO1xuICAgIHZhciBmb250VmFyaWFudCA9IHN0eWxlLmZvbnRWYXJpYW50O1xuICAgIHZhciBmb250V2VpZ2h0ID0gcGFyc2VGb250V2VpZ2h0KHN0eWxlLmZvbnRXZWlnaHQpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZm9udEZhbWlseTogZm9udEZhbWlseSxcbiAgICAgICAgZm9udFNpemU6IGZvbnRTaXplLFxuICAgICAgICBmb250U3R5bGU6IGZvbnRTdHlsZSxcbiAgICAgICAgZm9udFZhcmlhbnQ6IGZvbnRWYXJpYW50LFxuICAgICAgICBmb250V2VpZ2h0OiBmb250V2VpZ2h0XG4gICAgfTtcbn07XG5cbi8qKiovIH0pLFxuLyogMzcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xudmFyIHBhcnNlTGV0dGVyU3BhY2luZyA9IGV4cG9ydHMucGFyc2VMZXR0ZXJTcGFjaW5nID0gZnVuY3Rpb24gcGFyc2VMZXR0ZXJTcGFjaW5nKGxldHRlclNwYWNpbmcpIHtcbiAgICBpZiAobGV0dGVyU3BhY2luZyA9PT0gJ25vcm1hbCcpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIHZhciB2YWx1ZSA9IHBhcnNlRmxvYXQobGV0dGVyU3BhY2luZyk7XG4gICAgcmV0dXJuIGlzTmFOKHZhbHVlKSA/IDAgOiB2YWx1ZTtcbn07XG5cbi8qKiovIH0pLFxuLyogMzggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xudmFyIExJTkVfQlJFQUsgPSBleHBvcnRzLkxJTkVfQlJFQUsgPSB7XG4gICAgTk9STUFMOiAnbm9ybWFsJyxcbiAgICBTVFJJQ1Q6ICdzdHJpY3QnXG59O1xuXG52YXIgcGFyc2VMaW5lQnJlYWsgPSBleHBvcnRzLnBhcnNlTGluZUJyZWFrID0gZnVuY3Rpb24gcGFyc2VMaW5lQnJlYWsod29yZEJyZWFrKSB7XG4gICAgc3dpdGNoICh3b3JkQnJlYWspIHtcbiAgICAgICAgY2FzZSAnc3RyaWN0JzpcbiAgICAgICAgICAgIHJldHVybiBMSU5FX0JSRUFLLlNUUklDVDtcbiAgICAgICAgY2FzZSAnbm9ybWFsJzpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBMSU5FX0JSRUFLLk5PUk1BTDtcbiAgICB9XG59O1xuXG4vKioqLyB9KSxcbi8qIDM5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucGFyc2VNYXJnaW4gPSB1bmRlZmluZWQ7XG5cbnZhciBfTGVuZ3RoID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxudmFyIF9MZW5ndGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTGVuZ3RoKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFNJREVTID0gWyd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXTtcblxudmFyIHBhcnNlTWFyZ2luID0gZXhwb3J0cy5wYXJzZU1hcmdpbiA9IGZ1bmN0aW9uIHBhcnNlTWFyZ2luKHN0eWxlKSB7XG4gICAgcmV0dXJuIFNJREVTLm1hcChmdW5jdGlvbiAoc2lkZSkge1xuICAgICAgICByZXR1cm4gbmV3IF9MZW5ndGgyLmRlZmF1bHQoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnbWFyZ2luLScgKyBzaWRlKSk7XG4gICAgfSk7XG59O1xuXG4vKioqLyB9KSxcbi8qIDQwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbnZhciBPVkVSRkxPVyA9IGV4cG9ydHMuT1ZFUkZMT1cgPSB7XG4gICAgVklTSUJMRTogMCxcbiAgICBISURERU46IDEsXG4gICAgU0NST0xMOiAyLFxuICAgIEFVVE86IDNcbn07XG5cbnZhciBwYXJzZU92ZXJmbG93ID0gZXhwb3J0cy5wYXJzZU92ZXJmbG93ID0gZnVuY3Rpb24gcGFyc2VPdmVyZmxvdyhvdmVyZmxvdykge1xuICAgIHN3aXRjaCAob3ZlcmZsb3cpIHtcbiAgICAgICAgY2FzZSAnaGlkZGVuJzpcbiAgICAgICAgICAgIHJldHVybiBPVkVSRkxPVy5ISURERU47XG4gICAgICAgIGNhc2UgJ3Njcm9sbCc6XG4gICAgICAgICAgICByZXR1cm4gT1ZFUkZMT1cuU0NST0xMO1xuICAgICAgICBjYXNlICdhdXRvJzpcbiAgICAgICAgICAgIHJldHVybiBPVkVSRkxPVy5BVVRPO1xuICAgICAgICBjYXNlICd2aXNpYmxlJzpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBPVkVSRkxPVy5WSVNJQkxFO1xuICAgIH1cbn07XG5cbi8qKiovIH0pLFxuLyogNDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5wYXJzZVRleHRTaGFkb3cgPSB1bmRlZmluZWQ7XG5cbnZhciBfQ29sb3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgX0NvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvbG9yKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIE5VTUJFUiA9IC9eKFsrLV18XFxkfFxcLikkL2k7XG5cbnZhciBwYXJzZVRleHRTaGFkb3cgPSBleHBvcnRzLnBhcnNlVGV4dFNoYWRvdyA9IGZ1bmN0aW9uIHBhcnNlVGV4dFNoYWRvdyh0ZXh0U2hhZG93KSB7XG4gICAgaWYgKHRleHRTaGFkb3cgPT09ICdub25lJyB8fCB0eXBlb2YgdGV4dFNoYWRvdyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIGN1cnJlbnRWYWx1ZSA9ICcnO1xuICAgIHZhciBpc0xlbmd0aCA9IGZhbHNlO1xuICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICB2YXIgc2hhZG93cyA9IFtdO1xuICAgIHZhciBudW1QYXJlbnMgPSAwO1xuICAgIHZhciBjb2xvciA9IG51bGw7XG5cbiAgICB2YXIgYXBwZW5kVmFsdWUgPSBmdW5jdGlvbiBhcHBlbmRWYWx1ZSgpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChpc0xlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKHBhcnNlRmxvYXQoY3VycmVudFZhbHVlKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbG9yID0gbmV3IF9Db2xvcjIuZGVmYXVsdChjdXJyZW50VmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlzTGVuZ3RoID0gZmFsc2U7XG4gICAgICAgIGN1cnJlbnRWYWx1ZSA9ICcnO1xuICAgIH07XG5cbiAgICB2YXIgYXBwZW5kU2hhZG93ID0gZnVuY3Rpb24gYXBwZW5kU2hhZG93KCkge1xuICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCAmJiBjb2xvciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgc2hhZG93cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBjb2xvcjogY29sb3IsXG4gICAgICAgICAgICAgICAgb2Zmc2V0WDogdmFsdWVzWzBdIHx8IDAsXG4gICAgICAgICAgICAgICAgb2Zmc2V0WTogdmFsdWVzWzFdIHx8IDAsXG4gICAgICAgICAgICAgICAgYmx1cjogdmFsdWVzWzJdIHx8IDBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHZhbHVlcy5zcGxpY2UoMCwgdmFsdWVzLmxlbmd0aCk7XG4gICAgICAgIGNvbG9yID0gbnVsbDtcbiAgICB9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZXh0U2hhZG93Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjID0gdGV4dFNoYWRvd1tpXTtcbiAgICAgICAgc3dpdGNoIChjKSB7XG4gICAgICAgICAgICBjYXNlICcoJzpcbiAgICAgICAgICAgICAgICBjdXJyZW50VmFsdWUgKz0gYztcbiAgICAgICAgICAgICAgICBudW1QYXJlbnMrKztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJyknOlxuICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZSArPSBjO1xuICAgICAgICAgICAgICAgIG51bVBhcmVucy0tO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnLCc6XG4gICAgICAgICAgICAgICAgaWYgKG51bVBhcmVucyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBhcHBlbmRWYWx1ZSgpO1xuICAgICAgICAgICAgICAgICAgICBhcHBlbmRTaGFkb3coKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VmFsdWUgKz0gYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICcgJzpcbiAgICAgICAgICAgICAgICBpZiAobnVtUGFyZW5zID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGFwcGVuZFZhbHVlKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFZhbHVlICs9IGM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFZhbHVlLmxlbmd0aCA9PT0gMCAmJiBOVU1CRVIudGVzdChjKSkge1xuICAgICAgICAgICAgICAgICAgICBpc0xlbmd0aCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZSArPSBjO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXBwZW5kVmFsdWUoKTtcbiAgICBhcHBlbmRTaGFkb3coKTtcblxuICAgIGlmIChzaGFkb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gc2hhZG93cztcbn07XG5cbi8qKiovIH0pLFxuLyogNDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5wYXJzZVRyYW5zZm9ybSA9IHVuZGVmaW5lZDtcblxudmFyIF9MZW5ndGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG52YXIgX0xlbmd0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MZW5ndGgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgdG9GbG9hdCA9IGZ1bmN0aW9uIHRvRmxvYXQocykge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KHMudHJpbSgpKTtcbn07XG5cbnZhciBNQVRSSVggPSAvKG1hdHJpeHxtYXRyaXgzZClcXCgoLispXFwpLztcblxudmFyIHBhcnNlVHJhbnNmb3JtID0gZXhwb3J0cy5wYXJzZVRyYW5zZm9ybSA9IGZ1bmN0aW9uIHBhcnNlVHJhbnNmb3JtKHN0eWxlKSB7XG4gICAgdmFyIHRyYW5zZm9ybSA9IHBhcnNlVHJhbnNmb3JtTWF0cml4KHN0eWxlLnRyYW5zZm9ybSB8fCBzdHlsZS53ZWJraXRUcmFuc2Zvcm0gfHwgc3R5bGUubW96VHJhbnNmb3JtIHx8XG4gICAgLy8gJEZsb3dGaXhNZVxuICAgIHN0eWxlLm1zVHJhbnNmb3JtIHx8XG4gICAgLy8gJEZsb3dGaXhNZVxuICAgIHN0eWxlLm9UcmFuc2Zvcm0pO1xuICAgIGlmICh0cmFuc2Zvcm0gPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbjogcGFyc2VUcmFuc2Zvcm1PcmlnaW4oc3R5bGUudHJhbnNmb3JtT3JpZ2luIHx8IHN0eWxlLndlYmtpdFRyYW5zZm9ybU9yaWdpbiB8fCBzdHlsZS5tb3pUcmFuc2Zvcm1PcmlnaW4gfHxcbiAgICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgICBzdHlsZS5tc1RyYW5zZm9ybU9yaWdpbiB8fFxuICAgICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICAgIHN0eWxlLm9UcmFuc2Zvcm1PcmlnaW4pXG4gICAgfTtcbn07XG5cbi8vICRGbG93Rml4TWVcbnZhciBwYXJzZVRyYW5zZm9ybU9yaWdpbiA9IGZ1bmN0aW9uIHBhcnNlVHJhbnNmb3JtT3JpZ2luKG9yaWdpbikge1xuICAgIGlmICh0eXBlb2Ygb3JpZ2luICE9PSAnc3RyaW5nJykge1xuICAgICAgICB2YXIgdiA9IG5ldyBfTGVuZ3RoMi5kZWZhdWx0KCcwJyk7XG4gICAgICAgIHJldHVybiBbdiwgdl07XG4gICAgfVxuICAgIHZhciB2YWx1ZXMgPSBvcmlnaW4uc3BsaXQoJyAnKS5tYXAoX0xlbmd0aDIuZGVmYXVsdC5jcmVhdGUpO1xuICAgIHJldHVybiBbdmFsdWVzWzBdLCB2YWx1ZXNbMV1dO1xufTtcblxuLy8gJEZsb3dGaXhNZVxudmFyIHBhcnNlVHJhbnNmb3JtTWF0cml4ID0gZnVuY3Rpb24gcGFyc2VUcmFuc2Zvcm1NYXRyaXgodHJhbnNmb3JtKSB7XG4gICAgaWYgKHRyYW5zZm9ybSA9PT0gJ25vbmUnIHx8IHR5cGVvZiB0cmFuc2Zvcm0gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBtYXRjaCA9IHRyYW5zZm9ybS5tYXRjaChNQVRSSVgpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgICBpZiAobWF0Y2hbMV0gPT09ICdtYXRyaXgnKSB7XG4gICAgICAgICAgICB2YXIgbWF0cml4ID0gbWF0Y2hbMl0uc3BsaXQoJywnKS5tYXAodG9GbG9hdCk7XG4gICAgICAgICAgICByZXR1cm4gW21hdHJpeFswXSwgbWF0cml4WzFdLCBtYXRyaXhbMl0sIG1hdHJpeFszXSwgbWF0cml4WzRdLCBtYXRyaXhbNV1dO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIG1hdHJpeDNkID0gbWF0Y2hbMl0uc3BsaXQoJywnKS5tYXAodG9GbG9hdCk7XG4gICAgICAgICAgICByZXR1cm4gW21hdHJpeDNkWzBdLCBtYXRyaXgzZFsxXSwgbWF0cml4M2RbNF0sIG1hdHJpeDNkWzVdLCBtYXRyaXgzZFsxMl0sIG1hdHJpeDNkWzEzXV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG4vKioqLyB9KSxcbi8qIDQzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbnZhciBWSVNJQklMSVRZID0gZXhwb3J0cy5WSVNJQklMSVRZID0ge1xuICAgIFZJU0lCTEU6IDAsXG4gICAgSElEREVOOiAxLFxuICAgIENPTExBUFNFOiAyXG59O1xuXG52YXIgcGFyc2VWaXNpYmlsaXR5ID0gZXhwb3J0cy5wYXJzZVZpc2liaWxpdHkgPSBmdW5jdGlvbiBwYXJzZVZpc2liaWxpdHkodmlzaWJpbGl0eSkge1xuICAgIHN3aXRjaCAodmlzaWJpbGl0eSkge1xuICAgICAgICBjYXNlICdoaWRkZW4nOlxuICAgICAgICAgICAgcmV0dXJuIFZJU0lCSUxJVFkuSElEREVOO1xuICAgICAgICBjYXNlICdjb2xsYXBzZSc6XG4gICAgICAgICAgICByZXR1cm4gVklTSUJJTElUWS5DT0xMQVBTRTtcbiAgICAgICAgY2FzZSAndmlzaWJsZSc6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gVklTSUJJTElUWS5WSVNJQkxFO1xuICAgIH1cbn07XG5cbi8qKiovIH0pLFxuLyogNDQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xudmFyIFdPUkRfQlJFQUsgPSBleHBvcnRzLldPUkRfQlJFQUsgPSB7XG4gICAgTk9STUFMOiAnbm9ybWFsJyxcbiAgICBCUkVBS19BTEw6ICdicmVhay1hbGwnLFxuICAgIEtFRVBfQUxMOiAna2VlcC1hbGwnXG59O1xuXG52YXIgcGFyc2VXb3JkQnJlYWsgPSBleHBvcnRzLnBhcnNlV29yZEJyZWFrID0gZnVuY3Rpb24gcGFyc2VXb3JkQnJlYWsod29yZEJyZWFrKSB7XG4gICAgc3dpdGNoICh3b3JkQnJlYWspIHtcbiAgICAgICAgY2FzZSAnYnJlYWstYWxsJzpcbiAgICAgICAgICAgIHJldHVybiBXT1JEX0JSRUFLLkJSRUFLX0FMTDtcbiAgICAgICAgY2FzZSAna2VlcC1hbGwnOlxuICAgICAgICAgICAgcmV0dXJuIFdPUkRfQlJFQUsuS0VFUF9BTEw7XG4gICAgICAgIGNhc2UgJ25vcm1hbCc6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gV09SRF9CUkVBSy5OT1JNQUw7XG4gICAgfVxufTtcblxuLyoqKi8gfSksXG4vKiA0NSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgcGFyc2VaSW5kZXggPSBleHBvcnRzLnBhcnNlWkluZGV4ID0gZnVuY3Rpb24gcGFyc2VaSW5kZXgoekluZGV4KSB7XG4gICAgdmFyIGF1dG8gPSB6SW5kZXggPT09ICdhdXRvJztcbiAgICByZXR1cm4ge1xuICAgICAgICBhdXRvOiBhdXRvLFxuICAgICAgICBvcmRlcjogYXV0byA/IDAgOiBwYXJzZUludCh6SW5kZXgsIDEwKVxuICAgIH07XG59O1xuXG4vKioqLyB9KSxcbi8qIDQ2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfVXRpbCA9IF9fd2VicGFja19yZXF1aXJlX18oMTMpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3RvQ29kZVBvaW50cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9VdGlsLnRvQ29kZVBvaW50cztcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2Zyb21Db2RlUG9pbnQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfVXRpbC5mcm9tQ29kZVBvaW50O1xuICB9XG59KTtcblxudmFyIF9MaW5lQnJlYWsgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ3KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5lQnJlYWtlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9MaW5lQnJlYWsuTGluZUJyZWFrZXI7XG4gIH1cbn0pO1xuXG4vKioqLyB9KSxcbi8qIDQ3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuTGluZUJyZWFrZXIgPSBleHBvcnRzLmlubGluZUJyZWFrT3Bwb3J0dW5pdGllcyA9IGV4cG9ydHMubGluZUJyZWFrQXRJbmRleCA9IGV4cG9ydHMuY29kZVBvaW50c1RvQ2hhcmFjdGVyQ2xhc3NlcyA9IGV4cG9ydHMuVW5pY29kZVRyaWUgPSBleHBvcnRzLkJSRUFLX0FMTE9XRUQgPSBleHBvcnRzLkJSRUFLX05PVF9BTExPV0VEID0gZXhwb3J0cy5CUkVBS19NQU5EQVRPUlkgPSBleHBvcnRzLmNsYXNzZXMgPSBleHBvcnRzLkxFVFRFUl9OVU1CRVJfTU9ESUZJRVIgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfc2xpY2VkVG9BcnJheSA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0pIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfSByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IHJldHVybiBhcnI7IH0gZWxzZSBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSB7IHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7IH0gZWxzZSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9IH07IH0oKTtcblxudmFyIF9UcmllID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0OCk7XG5cbnZhciBfbGluZWJyZWFrVHJpZSA9IF9fd2VicGFja19yZXF1aXJlX18oNDkpO1xuXG52YXIgX2xpbmVicmVha1RyaWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGluZWJyZWFrVHJpZSk7XG5cbnZhciBfVXRpbCA9IF9fd2VicGFja19yZXF1aXJlX18oMTMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIExFVFRFUl9OVU1CRVJfTU9ESUZJRVIgPSBleHBvcnRzLkxFVFRFUl9OVU1CRVJfTU9ESUZJRVIgPSA1MDtcblxuLy8gTm9uLXRhaWxvcmFibGUgTGluZSBCcmVha2luZyBDbGFzc2VzXG52YXIgQksgPSAxOyAvLyAgQ2F1c2UgYSBsaW5lIGJyZWFrIChhZnRlcilcbnZhciBDUiA9IDI7IC8vICBDYXVzZSBhIGxpbmUgYnJlYWsgKGFmdGVyKSwgZXhjZXB0IGJldHdlZW4gQ1IgYW5kIExGXG52YXIgTEYgPSAzOyAvLyAgQ2F1c2UgYSBsaW5lIGJyZWFrIChhZnRlcilcbnZhciBDTSA9IDQ7IC8vICBQcm9oaWJpdCBhIGxpbmUgYnJlYWsgYmV0d2VlbiB0aGUgY2hhcmFjdGVyIGFuZCB0aGUgcHJlY2VkaW5nIGNoYXJhY3RlclxudmFyIE5MID0gNTsgLy8gIENhdXNlIGEgbGluZSBicmVhayAoYWZ0ZXIpXG52YXIgU0cgPSA2OyAvLyAgRG8gbm90IG9jY3VyIGluIHdlbGwtZm9ybWVkIHRleHRcbnZhciBXSiA9IDc7IC8vICBQcm9oaWJpdCBsaW5lIGJyZWFrcyBiZWZvcmUgYW5kIGFmdGVyXG52YXIgWlcgPSA4OyAvLyAgUHJvdmlkZSBhIGJyZWFrIG9wcG9ydHVuaXR5XG52YXIgR0wgPSA5OyAvLyAgUHJvaGliaXQgbGluZSBicmVha3MgYmVmb3JlIGFuZCBhZnRlclxudmFyIFNQID0gMTA7IC8vIEVuYWJsZSBpbmRpcmVjdCBsaW5lIGJyZWFrc1xudmFyIFpXSiA9IDExOyAvLyBQcm9oaWJpdCBsaW5lIGJyZWFrcyB3aXRoaW4gam9pbmVyIHNlcXVlbmNlc1xuLy8gQnJlYWsgT3Bwb3J0dW5pdGllc1xudmFyIEIyID0gMTI7IC8vICBQcm92aWRlIGEgbGluZSBicmVhayBvcHBvcnR1bml0eSBiZWZvcmUgYW5kIGFmdGVyIHRoZSBjaGFyYWN0ZXJcbnZhciBCQSA9IDEzOyAvLyAgR2VuZXJhbGx5IHByb3ZpZGUgYSBsaW5lIGJyZWFrIG9wcG9ydHVuaXR5IGFmdGVyIHRoZSBjaGFyYWN0ZXJcbnZhciBCQiA9IDE0OyAvLyAgR2VuZXJhbGx5IHByb3ZpZGUgYSBsaW5lIGJyZWFrIG9wcG9ydHVuaXR5IGJlZm9yZSB0aGUgY2hhcmFjdGVyXG52YXIgSFkgPSAxNTsgLy8gIFByb3ZpZGUgYSBsaW5lIGJyZWFrIG9wcG9ydHVuaXR5IGFmdGVyIHRoZSBjaGFyYWN0ZXIsIGV4Y2VwdCBpbiBudW1lcmljIGNvbnRleHRcbnZhciBDQiA9IDE2OyAvLyAgIFByb3ZpZGUgYSBsaW5lIGJyZWFrIG9wcG9ydHVuaXR5IGNvbnRpbmdlbnQgb24gYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuLy8gQ2hhcmFjdGVycyBQcm9oaWJpdGluZyBDZXJ0YWluIEJyZWFrc1xudmFyIENMID0gMTc7IC8vICBQcm9oaWJpdCBsaW5lIGJyZWFrcyBiZWZvcmVcbnZhciBDUCA9IDE4OyAvLyAgUHJvaGliaXQgbGluZSBicmVha3MgYmVmb3JlXG52YXIgRVggPSAxOTsgLy8gIFByb2hpYml0IGxpbmUgYnJlYWtzIGJlZm9yZVxudmFyIElOID0gMjA7IC8vICBBbGxvdyBvbmx5IGluZGlyZWN0IGxpbmUgYnJlYWtzIGJldHdlZW4gcGFpcnNcbnZhciBOUyA9IDIxOyAvLyAgQWxsb3cgb25seSBpbmRpcmVjdCBsaW5lIGJyZWFrcyBiZWZvcmVcbnZhciBPUCA9IDIyOyAvLyAgUHJvaGliaXQgbGluZSBicmVha3MgYWZ0ZXJcbnZhciBRVSA9IDIzOyAvLyAgQWN0IGxpa2UgdGhleSBhcmUgYm90aCBvcGVuaW5nIGFuZCBjbG9zaW5nXG4vLyBOdW1lcmljIENvbnRleHRcbnZhciBJUyA9IDI0OyAvLyAgUHJldmVudCBicmVha3MgYWZ0ZXIgYW55IGFuZCBiZWZvcmUgbnVtZXJpY1xudmFyIE5VID0gMjU7IC8vICBGb3JtIG51bWVyaWMgZXhwcmVzc2lvbnMgZm9yIGxpbmUgYnJlYWtpbmcgcHVycG9zZXNcbnZhciBQTyA9IDI2OyAvLyAgRG8gbm90IGJyZWFrIGZvbGxvd2luZyBhIG51bWVyaWMgZXhwcmVzc2lvblxudmFyIFBSID0gMjc7IC8vICBEbyBub3QgYnJlYWsgaW4gZnJvbnQgb2YgYSBudW1lcmljIGV4cHJlc3Npb25cbnZhciBTWSA9IDI4OyAvLyAgUHJldmVudCBhIGJyZWFrIGJlZm9yZTsgYW5kIGFsbG93IGEgYnJlYWsgYWZ0ZXJcbi8vIE90aGVyIENoYXJhY3RlcnNcbnZhciBBSSA9IDI5OyAvLyAgQWN0IGxpa2UgQUwgd2hlbiB0aGUgcmVzb2x2ZWRFQVcgaXMgTjsgb3RoZXJ3aXNlOyBhY3QgYXMgSURcbnZhciBBTCA9IDMwOyAvLyAgQXJlIGFscGhhYmV0aWMgY2hhcmFjdGVycyBvciBzeW1ib2xzIHRoYXQgYXJlIHVzZWQgd2l0aCBhbHBoYWJldGljIGNoYXJhY3RlcnNcbnZhciBDSiA9IDMxOyAvLyAgVHJlYXQgYXMgTlMgb3IgSUQgZm9yIHN0cmljdCBvciBub3JtYWwgYnJlYWtpbmcuXG52YXIgRUIgPSAzMjsgLy8gIERvIG5vdCBicmVhayBmcm9tIGZvbGxvd2luZyBFbW9qaSBNb2RpZmllclxudmFyIEVNID0gMzM7IC8vICBEbyBub3QgYnJlYWsgZnJvbSBwcmVjZWRpbmcgRW1vamkgQmFzZVxudmFyIEgyID0gMzQ7IC8vICBGb3JtIEtvcmVhbiBzeWxsYWJsZSBibG9ja3NcbnZhciBIMyA9IDM1OyAvLyAgRm9ybSBLb3JlYW4gc3lsbGFibGUgYmxvY2tzXG52YXIgSEwgPSAzNjsgLy8gIERvIG5vdCBicmVhayBhcm91bmQgYSBmb2xsb3dpbmcgaHlwaGVuOyBvdGhlcndpc2UgYWN0IGFzIEFscGhhYmV0aWNcbnZhciBJRCA9IDM3OyAvLyAgQnJlYWsgYmVmb3JlIG9yIGFmdGVyOyBleGNlcHQgaW4gc29tZSBudW1lcmljIGNvbnRleHRcbnZhciBKTCA9IDM4OyAvLyAgRm9ybSBLb3JlYW4gc3lsbGFibGUgYmxvY2tzXG52YXIgSlYgPSAzOTsgLy8gIEZvcm0gS29yZWFuIHN5bGxhYmxlIGJsb2Nrc1xudmFyIEpUID0gNDA7IC8vICBGb3JtIEtvcmVhbiBzeWxsYWJsZSBibG9ja3NcbnZhciBSSSA9IDQxOyAvLyAgS2VlcCBwYWlycyB0b2dldGhlci4gRm9yIHBhaXJzOyBicmVhayBiZWZvcmUgYW5kIGFmdGVyIG90aGVyIGNsYXNzZXNcbnZhciBTQSA9IDQyOyAvLyAgUHJvdmlkZSBhIGxpbmUgYnJlYWsgb3Bwb3J0dW5pdHkgY29udGluZ2VudCBvbiBhZGRpdGlvbmFsLCBsYW5ndWFnZS1zcGVjaWZpYyBjb250ZXh0IGFuYWx5c2lzXG52YXIgWFggPSA0MzsgLy8gIEhhdmUgYXMgeWV0IHVua25vd24gbGluZSBicmVha2luZyBiZWhhdmlvciBvciB1bmFzc2lnbmVkIGNvZGUgcG9zaXRpb25zXG5cbnZhciBjbGFzc2VzID0gZXhwb3J0cy5jbGFzc2VzID0ge1xuICAgIEJLOiBCSyxcbiAgICBDUjogQ1IsXG4gICAgTEY6IExGLFxuICAgIENNOiBDTSxcbiAgICBOTDogTkwsXG4gICAgU0c6IFNHLFxuICAgIFdKOiBXSixcbiAgICBaVzogWlcsXG4gICAgR0w6IEdMLFxuICAgIFNQOiBTUCxcbiAgICBaV0o6IFpXSixcbiAgICBCMjogQjIsXG4gICAgQkE6IEJBLFxuICAgIEJCOiBCQixcbiAgICBIWTogSFksXG4gICAgQ0I6IENCLFxuICAgIENMOiBDTCxcbiAgICBDUDogQ1AsXG4gICAgRVg6IEVYLFxuICAgIElOOiBJTixcbiAgICBOUzogTlMsXG4gICAgT1A6IE9QLFxuICAgIFFVOiBRVSxcbiAgICBJUzogSVMsXG4gICAgTlU6IE5VLFxuICAgIFBPOiBQTyxcbiAgICBQUjogUFIsXG4gICAgU1k6IFNZLFxuICAgIEFJOiBBSSxcbiAgICBBTDogQUwsXG4gICAgQ0o6IENKLFxuICAgIEVCOiBFQixcbiAgICBFTTogRU0sXG4gICAgSDI6IEgyLFxuICAgIEgzOiBIMyxcbiAgICBITDogSEwsXG4gICAgSUQ6IElELFxuICAgIEpMOiBKTCxcbiAgICBKVjogSlYsXG4gICAgSlQ6IEpULFxuICAgIFJJOiBSSSxcbiAgICBTQTogU0EsXG4gICAgWFg6IFhYXG59O1xuXG52YXIgQlJFQUtfTUFOREFUT1JZID0gZXhwb3J0cy5CUkVBS19NQU5EQVRPUlkgPSAnISc7XG52YXIgQlJFQUtfTk9UX0FMTE9XRUQgPSBleHBvcnRzLkJSRUFLX05PVF9BTExPV0VEID0gJ8OXJztcbnZhciBCUkVBS19BTExPV0VEID0gZXhwb3J0cy5CUkVBS19BTExPV0VEID0gJ8O3JztcbnZhciBVbmljb2RlVHJpZSA9IGV4cG9ydHMuVW5pY29kZVRyaWUgPSAoMCwgX1RyaWUuY3JlYXRlVHJpZUZyb21CYXNlNjQpKF9saW5lYnJlYWtUcmllMi5kZWZhdWx0KTtcblxudmFyIEFMUEhBQkVUSUNTID0gW0FMLCBITF07XG52YXIgSEFSRF9MSU5FX0JSRUFLUyA9IFtCSywgQ1IsIExGLCBOTF07XG52YXIgU1BBQ0UgPSBbU1AsIFpXXTtcbnZhciBQUkVGSVhfUE9TVEZJWCA9IFtQUiwgUE9dO1xudmFyIExJTkVfQlJFQUtTID0gSEFSRF9MSU5FX0JSRUFLUy5jb25jYXQoU1BBQ0UpO1xudmFyIEtPUkVBTl9TWUxMQUJMRV9CTE9DSyA9IFtKTCwgSlYsIEpULCBIMiwgSDNdO1xudmFyIEhZUEhFTiA9IFtIWSwgQkFdO1xuXG52YXIgY29kZVBvaW50c1RvQ2hhcmFjdGVyQ2xhc3NlcyA9IGV4cG9ydHMuY29kZVBvaW50c1RvQ2hhcmFjdGVyQ2xhc3NlcyA9IGZ1bmN0aW9uIGNvZGVQb2ludHNUb0NoYXJhY3RlckNsYXNzZXMoY29kZVBvaW50cykge1xuICAgIHZhciBsaW5lQnJlYWsgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICdzdHJpY3QnO1xuXG4gICAgdmFyIHR5cGVzID0gW107XG4gICAgdmFyIGluZGljaWVzID0gW107XG4gICAgdmFyIGNhdGVnb3JpZXMgPSBbXTtcbiAgICBjb2RlUG9pbnRzLmZvckVhY2goZnVuY3Rpb24gKGNvZGVQb2ludCwgaW5kZXgpIHtcbiAgICAgICAgdmFyIGNsYXNzVHlwZSA9IFVuaWNvZGVUcmllLmdldChjb2RlUG9pbnQpO1xuICAgICAgICBpZiAoY2xhc3NUeXBlID4gTEVUVEVSX05VTUJFUl9NT0RJRklFUikge1xuICAgICAgICAgICAgY2F0ZWdvcmllcy5wdXNoKHRydWUpO1xuICAgICAgICAgICAgY2xhc3NUeXBlIC09IExFVFRFUl9OVU1CRVJfTU9ESUZJRVI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYXRlZ29yaWVzLnB1c2goZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFsnbm9ybWFsJywgJ2F1dG8nLCAnbG9vc2UnXS5pbmRleE9mKGxpbmVCcmVhaykgIT09IC0xKSB7XG4gICAgICAgICAgICAvLyBVKzIwMTAsIOKAkyBVKzIwMTMsIOOAnCBVKzMwMUMsIOOCoCBVKzMwQTBcbiAgICAgICAgICAgIGlmIChbMHgyMDEwLCAweDIwMTMsIDB4MzAxYywgMHgzMGEwXS5pbmRleE9mKGNvZGVQb2ludCkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgaW5kaWNpZXMucHVzaChpbmRleCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVzLnB1c2goQ0IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNsYXNzVHlwZSA9PT0gQ00gfHwgY2xhc3NUeXBlID09PSBaV0opIHtcbiAgICAgICAgICAgIC8vIExCMTAgVHJlYXQgYW55IHJlbWFpbmluZyBjb21iaW5pbmcgbWFyayBvciBaV0ogYXMgQUwuXG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICBpbmRpY2llcy5wdXNoKGluZGV4KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZXMucHVzaChBTCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIExCOSBEbyBub3QgYnJlYWsgYSBjb21iaW5pbmcgY2hhcmFjdGVyIHNlcXVlbmNlOyB0cmVhdCBpdCBhcyBpZiBpdCBoYXMgdGhlIGxpbmUgYnJlYWtpbmcgY2xhc3Mgb2ZcbiAgICAgICAgICAgIC8vIHRoZSBiYXNlIGNoYXJhY3RlciBpbiBhbGwgb2YgdGhlIGZvbGxvd2luZyBydWxlcy4gVHJlYXQgWldKIGFzIGlmIGl0IHdlcmUgQ00uXG4gICAgICAgICAgICB2YXIgcHJldiA9IHR5cGVzW2luZGV4IC0gMV07XG4gICAgICAgICAgICBpZiAoTElORV9CUkVBS1MuaW5kZXhPZihwcmV2KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBpbmRpY2llcy5wdXNoKGluZGljaWVzW2luZGV4IC0gMV0pO1xuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlcy5wdXNoKHByZXYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5kaWNpZXMucHVzaChpbmRleCk7XG4gICAgICAgICAgICByZXR1cm4gdHlwZXMucHVzaChBTCk7XG4gICAgICAgIH1cblxuICAgICAgICBpbmRpY2llcy5wdXNoKGluZGV4KTtcblxuICAgICAgICBpZiAoY2xhc3NUeXBlID09PSBDSikge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVzLnB1c2gobGluZUJyZWFrID09PSAnc3RyaWN0JyA/IE5TIDogSUQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNsYXNzVHlwZSA9PT0gU0EpIHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlcy5wdXNoKEFMKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjbGFzc1R5cGUgPT09IEFJKSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZXMucHVzaChBTCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGb3Igc3VwcGxlbWVudGFyeSBjaGFyYWN0ZXJzLCBhIHVzZWZ1bCBkZWZhdWx0IGlzIHRvIHRyZWF0IGNoYXJhY3RlcnMgaW4gdGhlIHJhbmdlIDEwMDAwLi4xRkZGRCBhcyBBTFxuICAgICAgICAvLyBhbmQgY2hhcmFjdGVycyBpbiB0aGUgcmFuZ2VzIDIwMDAwLi4yRkZGRCBhbmQgMzAwMDAuLjNGRkZEIGFzIElELCB1bnRpbCB0aGUgaW1wbGVtZW50YXRpb24gY2FuIGJlIHJldmlzZWRcbiAgICAgICAgLy8gdG8gdGFrZSBpbnRvIGFjY291bnQgdGhlIGFjdHVhbCBsaW5lIGJyZWFraW5nIHByb3BlcnRpZXMgZm9yIHRoZXNlIGNoYXJhY3RlcnMuXG4gICAgICAgIGlmIChjbGFzc1R5cGUgPT09IFhYKSB7XG4gICAgICAgICAgICBpZiAoY29kZVBvaW50ID49IDB4MjAwMDAgJiYgY29kZVBvaW50IDw9IDB4MmZmZmQgfHwgY29kZVBvaW50ID49IDB4MzAwMDAgJiYgY29kZVBvaW50IDw9IDB4M2ZmZmQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZXMucHVzaChJRCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlcy5wdXNoKEFMKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHR5cGVzLnB1c2goY2xhc3NUeXBlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBbaW5kaWNpZXMsIHR5cGVzLCBjYXRlZ29yaWVzXTtcbn07XG5cbnZhciBpc0FkamFjZW50V2l0aFNwYWNlSWdub3JlZCA9IGZ1bmN0aW9uIGlzQWRqYWNlbnRXaXRoU3BhY2VJZ25vcmVkKGEsIGIsIGN1cnJlbnRJbmRleCwgY2xhc3NUeXBlcykge1xuICAgIHZhciBjdXJyZW50ID0gY2xhc3NUeXBlc1tjdXJyZW50SW5kZXhdO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGEpID8gYS5pbmRleE9mKGN1cnJlbnQpICE9PSAtMSA6IGEgPT09IGN1cnJlbnQpIHtcbiAgICAgICAgdmFyIGkgPSBjdXJyZW50SW5kZXg7XG4gICAgICAgIHdoaWxlIChpIDw9IGNsYXNzVHlwZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgICB2YXIgbmV4dCA9IGNsYXNzVHlwZXNbaV07XG5cbiAgICAgICAgICAgIGlmIChuZXh0ID09PSBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChuZXh0ICE9PSBTUCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnQgPT09IFNQKSB7XG4gICAgICAgIHZhciBfaSA9IGN1cnJlbnRJbmRleDtcblxuICAgICAgICB3aGlsZSAoX2kgPiAwKSB7XG4gICAgICAgICAgICBfaS0tO1xuICAgICAgICAgICAgdmFyIHByZXYgPSBjbGFzc1R5cGVzW19pXTtcblxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYSkgPyBhLmluZGV4T2YocHJldikgIT09IC0xIDogYSA9PT0gcHJldikge1xuICAgICAgICAgICAgICAgIHZhciBuID0gY3VycmVudEluZGV4O1xuICAgICAgICAgICAgICAgIHdoaWxlIChuIDw9IGNsYXNzVHlwZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIG4rKztcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9uZXh0ID0gY2xhc3NUeXBlc1tuXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoX25leHQgPT09IGIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKF9uZXh0ICE9PSBTUCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwcmV2ICE9PSBTUCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5cbnZhciBwcmV2aW91c05vblNwYWNlQ2xhc3NUeXBlID0gZnVuY3Rpb24gcHJldmlvdXNOb25TcGFjZUNsYXNzVHlwZShjdXJyZW50SW5kZXgsIGNsYXNzVHlwZXMpIHtcbiAgICB2YXIgaSA9IGN1cnJlbnRJbmRleDtcbiAgICB3aGlsZSAoaSA+PSAwKSB7XG4gICAgICAgIHZhciB0eXBlID0gY2xhc3NUeXBlc1tpXTtcbiAgICAgICAgaWYgKHR5cGUgPT09IFNQKSB7XG4gICAgICAgICAgICBpLS07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gMDtcbn07XG5cbnZhciBfbGluZUJyZWFrQXRJbmRleCA9IGZ1bmN0aW9uIF9saW5lQnJlYWtBdEluZGV4KGNvZGVQb2ludHMsIGNsYXNzVHlwZXMsIGluZGljaWVzLCBpbmRleCwgZm9yYmlkZGVuQnJlYWtzKSB7XG4gICAgaWYgKGluZGljaWVzW2luZGV4XSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgdmFyIGN1cnJlbnRJbmRleCA9IGluZGV4IC0gMTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShmb3JiaWRkZW5CcmVha3MpICYmIGZvcmJpZGRlbkJyZWFrc1tjdXJyZW50SW5kZXhdID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICB2YXIgYmVmb3JlSW5kZXggPSBjdXJyZW50SW5kZXggLSAxO1xuICAgIHZhciBhZnRlckluZGV4ID0gY3VycmVudEluZGV4ICsgMTtcbiAgICB2YXIgY3VycmVudCA9IGNsYXNzVHlwZXNbY3VycmVudEluZGV4XTtcblxuICAgIC8vIExCNCBBbHdheXMgYnJlYWsgYWZ0ZXIgaGFyZCBsaW5lIGJyZWFrcy5cbiAgICAvLyBMQjUgVHJlYXQgQ1IgZm9sbG93ZWQgYnkgTEYsIGFzIHdlbGwgYXMgQ1IsIExGLCBhbmQgTkwgYXMgaGFyZCBsaW5lIGJyZWFrcy5cbiAgICB2YXIgYmVmb3JlID0gYmVmb3JlSW5kZXggPj0gMCA/IGNsYXNzVHlwZXNbYmVmb3JlSW5kZXhdIDogMDtcbiAgICB2YXIgbmV4dCA9IGNsYXNzVHlwZXNbYWZ0ZXJJbmRleF07XG5cbiAgICBpZiAoY3VycmVudCA9PT0gQ1IgJiYgbmV4dCA9PT0gTEYpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIGlmIChIQVJEX0xJTkVfQlJFQUtTLmluZGV4T2YoY3VycmVudCkgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19NQU5EQVRPUlk7XG4gICAgfVxuXG4gICAgLy8gTEI2IERvIG5vdCBicmVhayBiZWZvcmUgaGFyZCBsaW5lIGJyZWFrcy5cbiAgICBpZiAoSEFSRF9MSU5FX0JSRUFLUy5pbmRleE9mKG5leHQpICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEI3IERvIG5vdCBicmVhayBiZWZvcmUgc3BhY2VzIG9yIHplcm8gd2lkdGggc3BhY2UuXG4gICAgaWYgKFNQQUNFLmluZGV4T2YobmV4dCkgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjggQnJlYWsgYmVmb3JlIGFueSBjaGFyYWN0ZXIgZm9sbG93aW5nIGEgemVyby13aWR0aCBzcGFjZSwgZXZlbiBpZiBvbmUgb3IgbW9yZSBzcGFjZXMgaW50ZXJ2ZW5lLlxuICAgIGlmIChwcmV2aW91c05vblNwYWNlQ2xhc3NUeXBlKGN1cnJlbnRJbmRleCwgY2xhc3NUeXBlcykgPT09IFpXKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCOGEgRG8gbm90IGJyZWFrIGJldHdlZW4gYSB6ZXJvIHdpZHRoIGpvaW5lciBhbmQgYW4gaWRlb2dyYXBoLCBlbW9qaSBiYXNlIG9yIGVtb2ppIG1vZGlmaWVyLlxuICAgIGlmIChVbmljb2RlVHJpZS5nZXQoY29kZVBvaW50c1tjdXJyZW50SW5kZXhdKSA9PT0gWldKICYmIChuZXh0ID09PSBJRCB8fCBuZXh0ID09PSBFQiB8fCBuZXh0ID09PSBFTSkpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCMTEgRG8gbm90IGJyZWFrIGJlZm9yZSBvciBhZnRlciBXb3JkIGpvaW5lciBhbmQgcmVsYXRlZCBjaGFyYWN0ZXJzLlxuICAgIGlmIChjdXJyZW50ID09PSBXSiB8fCBuZXh0ID09PSBXSikge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIxMiBEbyBub3QgYnJlYWsgYWZ0ZXIgTkJTUCBhbmQgcmVsYXRlZCBjaGFyYWN0ZXJzLlxuICAgIGlmIChjdXJyZW50ID09PSBHTCkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIxMmEgRG8gbm90IGJyZWFrIGJlZm9yZSBOQlNQIGFuZCByZWxhdGVkIGNoYXJhY3RlcnMsIGV4Y2VwdCBhZnRlciBzcGFjZXMgYW5kIGh5cGhlbnMuXG4gICAgaWYgKFtTUCwgQkEsIEhZXS5pbmRleE9mKGN1cnJlbnQpID09PSAtMSAmJiBuZXh0ID09PSBHTCkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIxMyBEbyBub3QgYnJlYWsgYmVmb3JlIOKAmF3igJkgb3Ig4oCYIeKAmSBvciDigJg74oCZIG9yIOKAmC/igJksIGV2ZW4gYWZ0ZXIgc3BhY2VzLlxuICAgIGlmIChbQ0wsIENQLCBFWCwgSVMsIFNZXS5pbmRleE9mKG5leHQpICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIxNCBEbyBub3QgYnJlYWsgYWZ0ZXIg4oCYW+KAmSwgZXZlbiBhZnRlciBzcGFjZXMuXG4gICAgaWYgKHByZXZpb3VzTm9uU3BhY2VDbGFzc1R5cGUoY3VycmVudEluZGV4LCBjbGFzc1R5cGVzKSA9PT0gT1ApIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCMTUgRG8gbm90IGJyZWFrIHdpdGhpbiDigJjigJ1b4oCZLCBldmVuIHdpdGggaW50ZXJ2ZW5pbmcgc3BhY2VzLlxuICAgIGlmIChpc0FkamFjZW50V2l0aFNwYWNlSWdub3JlZChRVSwgT1AsIGN1cnJlbnRJbmRleCwgY2xhc3NUeXBlcykpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCMTYgRG8gbm90IGJyZWFrIGJldHdlZW4gY2xvc2luZyBwdW5jdHVhdGlvbiBhbmQgYSBub25zdGFydGVyIChsYj1OUyksIGV2ZW4gd2l0aCBpbnRlcnZlbmluZyBzcGFjZXMuXG4gICAgaWYgKGlzQWRqYWNlbnRXaXRoU3BhY2VJZ25vcmVkKFtDTCwgQ1BdLCBOUywgY3VycmVudEluZGV4LCBjbGFzc1R5cGVzKSkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIxNyBEbyBub3QgYnJlYWsgd2l0aGluIOKAmOKAlOKAlOKAmSwgZXZlbiB3aXRoIGludGVydmVuaW5nIHNwYWNlcy5cbiAgICBpZiAoaXNBZGphY2VudFdpdGhTcGFjZUlnbm9yZWQoQjIsIEIyLCBjdXJyZW50SW5kZXgsIGNsYXNzVHlwZXMpKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjE4IEJyZWFrIGFmdGVyIHNwYWNlcy5cbiAgICBpZiAoY3VycmVudCA9PT0gU1ApIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIxOSBEbyBub3QgYnJlYWsgYmVmb3JlIG9yIGFmdGVyIHF1b3RhdGlvbiBtYXJrcywgc3VjaCBhcyDigJgg4oCdIOKAmS5cbiAgICBpZiAoY3VycmVudCA9PT0gUVUgfHwgbmV4dCA9PT0gUVUpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCMjAgQnJlYWsgYmVmb3JlIGFuZCBhZnRlciB1bnJlc29sdmVkIENCLlxuICAgIGlmIChuZXh0ID09PSBDQiB8fCBjdXJyZW50ID09PSBDQikge1xuICAgICAgICByZXR1cm4gQlJFQUtfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjIxIERvIG5vdCBicmVhayBiZWZvcmUgaHlwaGVuLW1pbnVzLCBvdGhlciBoeXBoZW5zLCBmaXhlZC13aWR0aCBzcGFjZXMsIHNtYWxsIGthbmEsIGFuZCBvdGhlciBub24tc3RhcnRlcnMsIG9yIGFmdGVyIGFjdXRlIGFjY2VudHMuXG4gICAgaWYgKFtCQSwgSFksIE5TXS5pbmRleE9mKG5leHQpICE9PSAtMSB8fCBjdXJyZW50ID09PSBCQikge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIyMWEgRG9uJ3QgYnJlYWsgYWZ0ZXIgSGVicmV3ICsgSHlwaGVuLlxuICAgIGlmIChiZWZvcmUgPT09IEhMICYmIEhZUEhFTi5pbmRleE9mKGN1cnJlbnQpICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIyMWIgRG9u4oCZdCBicmVhayBiZXR3ZWVuIFNvbGlkdXMgYW5kIEhlYnJldyBsZXR0ZXJzLlxuICAgIGlmIChjdXJyZW50ID09PSBTWSAmJiBuZXh0ID09PSBITCkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIyMiBEbyBub3QgYnJlYWsgYmV0d2VlbiB0d28gZWxsaXBzZXMsIG9yIGJldHdlZW4gbGV0dGVycywgbnVtYmVycyBvciBleGNsYW1hdGlvbnMgYW5kIGVsbGlwc2lzLlxuICAgIGlmIChuZXh0ID09PSBJTiAmJiBBTFBIQUJFVElDUy5jb25jYXQoSU4sIEVYLCBOVSwgSUQsIEVCLCBFTSkuaW5kZXhPZihjdXJyZW50KSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCMjMgRG8gbm90IGJyZWFrIGJldHdlZW4gZGlnaXRzIGFuZCBsZXR0ZXJzLlxuICAgIGlmIChBTFBIQUJFVElDUy5pbmRleE9mKG5leHQpICE9PSAtMSAmJiBjdXJyZW50ID09PSBOVSB8fCBBTFBIQUJFVElDUy5pbmRleE9mKGN1cnJlbnQpICE9PSAtMSAmJiBuZXh0ID09PSBOVSkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIyM2EgRG8gbm90IGJyZWFrIGJldHdlZW4gbnVtZXJpYyBwcmVmaXhlcyBhbmQgaWRlb2dyYXBocywgb3IgYmV0d2VlbiBpZGVvZ3JhcGhzIGFuZCBudW1lcmljIHBvc3RmaXhlcy5cbiAgICBpZiAoY3VycmVudCA9PT0gUFIgJiYgW0lELCBFQiwgRU1dLmluZGV4T2YobmV4dCkgIT09IC0xIHx8IFtJRCwgRUIsIEVNXS5pbmRleE9mKGN1cnJlbnQpICE9PSAtMSAmJiBuZXh0ID09PSBQTykge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIyNCBEbyBub3QgYnJlYWsgYmV0d2VlbiBudW1lcmljIHByZWZpeC9wb3N0Zml4IGFuZCBsZXR0ZXJzLCBvciBiZXR3ZWVuIGxldHRlcnMgYW5kIHByZWZpeC9wb3N0Zml4LlxuICAgIGlmIChBTFBIQUJFVElDUy5pbmRleE9mKGN1cnJlbnQpICE9PSAtMSAmJiBQUkVGSVhfUE9TVEZJWC5pbmRleE9mKG5leHQpICE9PSAtMSB8fCBQUkVGSVhfUE9TVEZJWC5pbmRleE9mKGN1cnJlbnQpICE9PSAtMSAmJiBBTFBIQUJFVElDUy5pbmRleE9mKG5leHQpICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIyNSBEbyBub3QgYnJlYWsgYmV0d2VlbiB0aGUgZm9sbG93aW5nIHBhaXJzIG9mIGNsYXNzZXMgcmVsZXZhbnQgdG8gbnVtYmVyczpcbiAgICBpZiAoXG4gICAgLy8gKFBSIHwgUE8pIMOXICggT1AgfCBIWSApPyBOVVxuICAgIFtQUiwgUE9dLmluZGV4T2YoY3VycmVudCkgIT09IC0xICYmIChuZXh0ID09PSBOVSB8fCBbT1AsIEhZXS5pbmRleE9mKG5leHQpICE9PSAtMSAmJiBjbGFzc1R5cGVzW2FmdGVySW5kZXggKyAxXSA9PT0gTlUpIHx8XG4gICAgLy8gKCBPUCB8IEhZICkgw5cgTlVcbiAgICBbT1AsIEhZXS5pbmRleE9mKGN1cnJlbnQpICE9PSAtMSAmJiBuZXh0ID09PSBOVSB8fFxuICAgIC8vIE5VIMOXXHQoTlUgfCBTWSB8IElTKVxuICAgIGN1cnJlbnQgPT09IE5VICYmIFtOVSwgU1ksIElTXS5pbmRleE9mKG5leHQpICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTlUgKE5VIHwgU1kgfCBJUykqIMOXIChOVSB8IFNZIHwgSVMgfCBDTCB8IENQKVxuICAgIGlmIChbTlUsIFNZLCBJUywgQ0wsIENQXS5pbmRleE9mKG5leHQpICE9PSAtMSkge1xuICAgICAgICB2YXIgcHJldkluZGV4ID0gY3VycmVudEluZGV4O1xuICAgICAgICB3aGlsZSAocHJldkluZGV4ID49IDApIHtcbiAgICAgICAgICAgIHZhciB0eXBlID0gY2xhc3NUeXBlc1twcmV2SW5kZXhdO1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09IE5VKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChbU1ksIElTXS5pbmRleE9mKHR5cGUpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHByZXZJbmRleC0tO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIE5VIChOVSB8IFNZIHwgSVMpKiAoQ0wgfCBDUCk/IMOXIChQTyB8IFBSKSlcbiAgICBpZiAoW1BSLCBQT10uaW5kZXhPZihuZXh0KSAhPT0gLTEpIHtcbiAgICAgICAgdmFyIF9wcmV2SW5kZXggPSBbQ0wsIENQXS5pbmRleE9mKGN1cnJlbnQpICE9PSAtMSA/IGJlZm9yZUluZGV4IDogY3VycmVudEluZGV4O1xuICAgICAgICB3aGlsZSAoX3ByZXZJbmRleCA+PSAwKSB7XG4gICAgICAgICAgICB2YXIgX3R5cGUgPSBjbGFzc1R5cGVzW19wcmV2SW5kZXhdO1xuICAgICAgICAgICAgaWYgKF90eXBlID09PSBOVSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoW1NZLCBJU10uaW5kZXhPZihfdHlwZSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgX3ByZXZJbmRleC0tO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIExCMjYgRG8gbm90IGJyZWFrIGEgS29yZWFuIHN5bGxhYmxlLlxuICAgIGlmIChKTCA9PT0gY3VycmVudCAmJiBbSkwsIEpWLCBIMiwgSDNdLmluZGV4T2YobmV4dCkgIT09IC0xIHx8IFtKViwgSDJdLmluZGV4T2YoY3VycmVudCkgIT09IC0xICYmIFtKViwgSlRdLmluZGV4T2YobmV4dCkgIT09IC0xIHx8IFtKVCwgSDNdLmluZGV4T2YoY3VycmVudCkgIT09IC0xICYmIG5leHQgPT09IEpUKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjI3IFRyZWF0IGEgS29yZWFuIFN5bGxhYmxlIEJsb2NrIHRoZSBzYW1lIGFzIElELlxuICAgIGlmIChLT1JFQU5fU1lMTEFCTEVfQkxPQ0suaW5kZXhPZihjdXJyZW50KSAhPT0gLTEgJiYgW0lOLCBQT10uaW5kZXhPZihuZXh0KSAhPT0gLTEgfHwgS09SRUFOX1NZTExBQkxFX0JMT0NLLmluZGV4T2YobmV4dCkgIT09IC0xICYmIGN1cnJlbnQgPT09IFBSKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjI4IERvIG5vdCBicmVhayBiZXR3ZWVuIGFscGhhYmV0aWNzICjigJxhdOKAnSkuXG4gICAgaWYgKEFMUEhBQkVUSUNTLmluZGV4T2YoY3VycmVudCkgIT09IC0xICYmIEFMUEhBQkVUSUNTLmluZGV4T2YobmV4dCkgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjI5IERvIG5vdCBicmVhayBiZXR3ZWVuIG51bWVyaWMgcHVuY3R1YXRpb24gYW5kIGFscGhhYmV0aWNzICjigJxlLmcu4oCdKS5cbiAgICBpZiAoY3VycmVudCA9PT0gSVMgJiYgQUxQSEFCRVRJQ1MuaW5kZXhPZihuZXh0KSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCMzAgRG8gbm90IGJyZWFrIGJldHdlZW4gbGV0dGVycywgbnVtYmVycywgb3Igb3JkaW5hcnkgc3ltYm9scyBhbmQgb3BlbmluZyBvciBjbG9zaW5nIHBhcmVudGhlc2VzLlxuICAgIGlmIChBTFBIQUJFVElDUy5jb25jYXQoTlUpLmluZGV4T2YoY3VycmVudCkgIT09IC0xICYmIG5leHQgPT09IE9QIHx8IEFMUEhBQkVUSUNTLmNvbmNhdChOVSkuaW5kZXhPZihuZXh0KSAhPT0gLTEgJiYgY3VycmVudCA9PT0gQ1ApIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCMzBhIEJyZWFrIGJldHdlZW4gdHdvIHJlZ2lvbmFsIGluZGljYXRvciBzeW1ib2xzIGlmIGFuZCBvbmx5IGlmIHRoZXJlIGFyZSBhbiBldmVuIG51bWJlciBvZiByZWdpb25hbFxuICAgIC8vIGluZGljYXRvcnMgcHJlY2VkaW5nIHRoZSBwb3NpdGlvbiBvZiB0aGUgYnJlYWsuXG4gICAgaWYgKGN1cnJlbnQgPT09IFJJICYmIG5leHQgPT09IFJJKSB7XG4gICAgICAgIHZhciBpID0gaW5kaWNpZXNbY3VycmVudEluZGV4XTtcbiAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgd2hpbGUgKGkgPiAwKSB7XG4gICAgICAgICAgICBpLS07XG4gICAgICAgICAgICBpZiAoY2xhc3NUeXBlc1tpXSA9PT0gUkkpIHtcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY291bnQgJSAyICE9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBMQjMwYiBEbyBub3QgYnJlYWsgYmV0d2VlbiBhbiBlbW9qaSBiYXNlIGFuZCBhbiBlbW9qaSBtb2RpZmllci5cbiAgICBpZiAoY3VycmVudCA9PT0gRUIgJiYgbmV4dCA9PT0gRU0pIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIHJldHVybiBCUkVBS19BTExPV0VEO1xufTtcblxudmFyIGxpbmVCcmVha0F0SW5kZXggPSBleHBvcnRzLmxpbmVCcmVha0F0SW5kZXggPSBmdW5jdGlvbiBsaW5lQnJlYWtBdEluZGV4KGNvZGVQb2ludHMsIGluZGV4KSB7XG4gICAgLy8gTEIyIE5ldmVyIGJyZWFrIGF0IHRoZSBzdGFydCBvZiB0ZXh0LlxuICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIzIEFsd2F5cyBicmVhayBhdCB0aGUgZW5kIG9mIHRleHQuXG4gICAgaWYgKGluZGV4ID49IGNvZGVQb2ludHMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19NQU5EQVRPUlk7XG4gICAgfVxuXG4gICAgdmFyIF9jb2RlUG9pbnRzVG9DaGFyYWN0ZSA9IGNvZGVQb2ludHNUb0NoYXJhY3RlckNsYXNzZXMoY29kZVBvaW50cyksXG4gICAgICAgIF9jb2RlUG9pbnRzVG9DaGFyYWN0ZTIgPSBfc2xpY2VkVG9BcnJheShfY29kZVBvaW50c1RvQ2hhcmFjdGUsIDIpLFxuICAgICAgICBpbmRpY2llcyA9IF9jb2RlUG9pbnRzVG9DaGFyYWN0ZTJbMF0sXG4gICAgICAgIGNsYXNzVHlwZXMgPSBfY29kZVBvaW50c1RvQ2hhcmFjdGUyWzFdO1xuXG4gICAgcmV0dXJuIF9saW5lQnJlYWtBdEluZGV4KGNvZGVQb2ludHMsIGNsYXNzVHlwZXMsIGluZGljaWVzLCBpbmRleCk7XG59O1xuXG52YXIgY3NzRm9ybWF0dGVkQ2xhc3NlcyA9IGZ1bmN0aW9uIGNzc0Zvcm1hdHRlZENsYXNzZXMoY29kZVBvaW50cywgb3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0geyBsaW5lQnJlYWs6ICdub3JtYWwnLCB3b3JkQnJlYWs6ICdub3JtYWwnIH07XG4gICAgfVxuXG4gICAgdmFyIF9jb2RlUG9pbnRzVG9DaGFyYWN0ZTMgPSBjb2RlUG9pbnRzVG9DaGFyYWN0ZXJDbGFzc2VzKGNvZGVQb2ludHMsIG9wdGlvbnMubGluZUJyZWFrKSxcbiAgICAgICAgX2NvZGVQb2ludHNUb0NoYXJhY3RlNCA9IF9zbGljZWRUb0FycmF5KF9jb2RlUG9pbnRzVG9DaGFyYWN0ZTMsIDMpLFxuICAgICAgICBpbmRpY2llcyA9IF9jb2RlUG9pbnRzVG9DaGFyYWN0ZTRbMF0sXG4gICAgICAgIGNsYXNzVHlwZXMgPSBfY29kZVBvaW50c1RvQ2hhcmFjdGU0WzFdLFxuICAgICAgICBpc0xldHRlck51bWJlciA9IF9jb2RlUG9pbnRzVG9DaGFyYWN0ZTRbMl07XG5cbiAgICBpZiAob3B0aW9ucy53b3JkQnJlYWsgPT09ICdicmVhay1hbGwnIHx8IG9wdGlvbnMud29yZEJyZWFrID09PSAnYnJlYWstd29yZCcpIHtcbiAgICAgICAgY2xhc3NUeXBlcyA9IGNsYXNzVHlwZXMubWFwKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgICAgICByZXR1cm4gW05VLCBBTCwgU0FdLmluZGV4T2YodHlwZSkgIT09IC0xID8gSUQgOiB0eXBlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgZm9yYmlkZGVuQnJlYWtwb2ludHMgPSBvcHRpb25zLndvcmRCcmVhayA9PT0gJ2tlZXAtYWxsJyA/IGlzTGV0dGVyTnVtYmVyLm1hcChmdW5jdGlvbiAoaXNMZXR0ZXJOdW1iZXIsIGkpIHtcbiAgICAgICAgcmV0dXJuIGlzTGV0dGVyTnVtYmVyICYmIGNvZGVQb2ludHNbaV0gPj0gMHg0ZTAwICYmIGNvZGVQb2ludHNbaV0gPD0gMHg5ZmZmO1xuICAgIH0pIDogbnVsbDtcblxuICAgIHJldHVybiBbaW5kaWNpZXMsIGNsYXNzVHlwZXMsIGZvcmJpZGRlbkJyZWFrcG9pbnRzXTtcbn07XG5cbnZhciBpbmxpbmVCcmVha09wcG9ydHVuaXRpZXMgPSBleHBvcnRzLmlubGluZUJyZWFrT3Bwb3J0dW5pdGllcyA9IGZ1bmN0aW9uIGlubGluZUJyZWFrT3Bwb3J0dW5pdGllcyhzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIgY29kZVBvaW50cyA9ICgwLCBfVXRpbC50b0NvZGVQb2ludHMpKHN0cik7XG4gICAgdmFyIG91dHB1dCA9IEJSRUFLX05PVF9BTExPV0VEO1xuXG4gICAgdmFyIF9jc3NGb3JtYXR0ZWRDbGFzc2VzID0gY3NzRm9ybWF0dGVkQ2xhc3Nlcyhjb2RlUG9pbnRzLCBvcHRpb25zKSxcbiAgICAgICAgX2Nzc0Zvcm1hdHRlZENsYXNzZXMyID0gX3NsaWNlZFRvQXJyYXkoX2Nzc0Zvcm1hdHRlZENsYXNzZXMsIDMpLFxuICAgICAgICBpbmRpY2llcyA9IF9jc3NGb3JtYXR0ZWRDbGFzc2VzMlswXSxcbiAgICAgICAgY2xhc3NUeXBlcyA9IF9jc3NGb3JtYXR0ZWRDbGFzc2VzMlsxXSxcbiAgICAgICAgZm9yYmlkZGVuQnJlYWtwb2ludHMgPSBfY3NzRm9ybWF0dGVkQ2xhc3NlczJbMl07XG5cbiAgICBjb2RlUG9pbnRzLmZvckVhY2goZnVuY3Rpb24gKGNvZGVQb2ludCwgaSkge1xuICAgICAgICBvdXRwdXQgKz0gKDAsIF9VdGlsLmZyb21Db2RlUG9pbnQpKGNvZGVQb2ludCkgKyAoaSA+PSBjb2RlUG9pbnRzLmxlbmd0aCAtIDEgPyBCUkVBS19NQU5EQVRPUlkgOiBfbGluZUJyZWFrQXRJbmRleChjb2RlUG9pbnRzLCBjbGFzc1R5cGVzLCBpbmRpY2llcywgaSArIDEsIGZvcmJpZGRlbkJyZWFrcG9pbnRzKSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gb3V0cHV0O1xufTtcblxudmFyIEJyZWFrID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEJyZWFrKGNvZGVQb2ludHMsIGxpbmVCcmVhaywgc3RhcnQsIGVuZCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQnJlYWspO1xuXG4gICAgICAgIHRoaXMuX2NvZGVQb2ludHMgPSBjb2RlUG9pbnRzO1xuICAgICAgICB0aGlzLnJlcXVpcmVkID0gbGluZUJyZWFrID09PSBCUkVBS19NQU5EQVRPUlk7XG4gICAgICAgIHRoaXMuc3RhcnQgPSBzdGFydDtcbiAgICAgICAgdGhpcy5lbmQgPSBlbmQ7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEJyZWFrLCBbe1xuICAgICAgICBrZXk6ICdzbGljZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzbGljZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBfVXRpbC5mcm9tQ29kZVBvaW50LmFwcGx5KHVuZGVmaW5lZCwgX3RvQ29uc3VtYWJsZUFycmF5KHRoaXMuX2NvZGVQb2ludHMuc2xpY2UodGhpcy5zdGFydCwgdGhpcy5lbmQpKSk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQnJlYWs7XG59KCk7XG5cbnZhciBMaW5lQnJlYWtlciA9IGV4cG9ydHMuTGluZUJyZWFrZXIgPSBmdW5jdGlvbiBMaW5lQnJlYWtlcihzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIgY29kZVBvaW50cyA9ICgwLCBfVXRpbC50b0NvZGVQb2ludHMpKHN0cik7XG5cbiAgICB2YXIgX2Nzc0Zvcm1hdHRlZENsYXNzZXMzID0gY3NzRm9ybWF0dGVkQ2xhc3Nlcyhjb2RlUG9pbnRzLCBvcHRpb25zKSxcbiAgICAgICAgX2Nzc0Zvcm1hdHRlZENsYXNzZXM0ID0gX3NsaWNlZFRvQXJyYXkoX2Nzc0Zvcm1hdHRlZENsYXNzZXMzLCAzKSxcbiAgICAgICAgaW5kaWNpZXMgPSBfY3NzRm9ybWF0dGVkQ2xhc3NlczRbMF0sXG4gICAgICAgIGNsYXNzVHlwZXMgPSBfY3NzRm9ybWF0dGVkQ2xhc3NlczRbMV0sXG4gICAgICAgIGZvcmJpZGRlbkJyZWFrcG9pbnRzID0gX2Nzc0Zvcm1hdHRlZENsYXNzZXM0WzJdO1xuXG4gICAgdmFyIGxlbmd0aCA9IGNvZGVQb2ludHMubGVuZ3RoO1xuICAgIHZhciBsYXN0RW5kID0gMDtcbiAgICB2YXIgbmV4dEluZGV4ID0gMDtcblxuICAgIHJldHVybiB7XG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgICBpZiAobmV4dEluZGV4ID49IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBsaW5lQnJlYWsgPSBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICAgICAgICAgIHdoaWxlIChuZXh0SW5kZXggPCBsZW5ndGggJiYgKGxpbmVCcmVhayA9IF9saW5lQnJlYWtBdEluZGV4KGNvZGVQb2ludHMsIGNsYXNzVHlwZXMsIGluZGljaWVzLCArK25leHRJbmRleCwgZm9yYmlkZGVuQnJlYWtwb2ludHMpKSA9PT0gQlJFQUtfTk9UX0FMTE9XRUQpIHt9XG5cbiAgICAgICAgICAgIGlmIChsaW5lQnJlYWsgIT09IEJSRUFLX05PVF9BTExPV0VEIHx8IG5leHRJbmRleCA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gbmV3IEJyZWFrKGNvZGVQb2ludHMsIGxpbmVCcmVhaywgbGFzdEVuZCwgbmV4dEluZGV4KTtcbiAgICAgICAgICAgICAgICBsYXN0RW5kID0gbmV4dEluZGV4O1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9O1xuICAgICAgICB9XG4gICAgfTtcbn07XG5cbi8qKiovIH0pLFxuLyogNDggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5UcmllID0gZXhwb3J0cy5jcmVhdGVUcmllRnJvbUJhc2U2NCA9IGV4cG9ydHMuVVRSSUUyX0lOREVYXzJfTUFTSyA9IGV4cG9ydHMuVVRSSUUyX0lOREVYXzJfQkxPQ0tfTEVOR1RIID0gZXhwb3J0cy5VVFJJRTJfT01JVFRFRF9CTVBfSU5ERVhfMV9MRU5HVEggPSBleHBvcnRzLlVUUklFMl9JTkRFWF8xX09GRlNFVCA9IGV4cG9ydHMuVVRSSUUyX1VURjhfMkJfSU5ERVhfMl9MRU5HVEggPSBleHBvcnRzLlVUUklFMl9VVEY4XzJCX0lOREVYXzJfT0ZGU0VUID0gZXhwb3J0cy5VVFJJRTJfSU5ERVhfMl9CTVBfTEVOR1RIID0gZXhwb3J0cy5VVFJJRTJfTFNDUF9JTkRFWF8yX0xFTkdUSCA9IGV4cG9ydHMuVVRSSUUyX0RBVEFfTUFTSyA9IGV4cG9ydHMuVVRSSUUyX0RBVEFfQkxPQ0tfTEVOR1RIID0gZXhwb3J0cy5VVFJJRTJfTFNDUF9JTkRFWF8yX09GRlNFVCA9IGV4cG9ydHMuVVRSSUUyX1NISUZUXzFfMiA9IGV4cG9ydHMuVVRSSUUyX0lOREVYX1NISUZUID0gZXhwb3J0cy5VVFJJRTJfU0hJRlRfMSA9IGV4cG9ydHMuVVRSSUUyX1NISUZUXzIgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfVXRpbCA9IF9fd2VicGFja19yZXF1aXJlX18oMTMpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vKiogU2hpZnQgc2l6ZSBmb3IgZ2V0dGluZyB0aGUgaW5kZXgtMiB0YWJsZSBvZmZzZXQuICovXG52YXIgVVRSSUUyX1NISUZUXzIgPSBleHBvcnRzLlVUUklFMl9TSElGVF8yID0gNTtcblxuLyoqIFNoaWZ0IHNpemUgZm9yIGdldHRpbmcgdGhlIGluZGV4LTEgdGFibGUgb2Zmc2V0LiAqL1xudmFyIFVUUklFMl9TSElGVF8xID0gZXhwb3J0cy5VVFJJRTJfU0hJRlRfMSA9IDYgKyA1O1xuXG4vKipcbiAqIFNoaWZ0IHNpemUgZm9yIHNoaWZ0aW5nIGxlZnQgdGhlIGluZGV4IGFycmF5IHZhbHVlcy5cbiAqIEluY3JlYXNlcyBwb3NzaWJsZSBkYXRhIHNpemUgd2l0aCAxNi1iaXQgaW5kZXggdmFsdWVzIGF0IHRoZSBjb3N0XG4gKiBvZiBjb21wYWN0YWJpbGl0eS5cbiAqIFRoaXMgcmVxdWlyZXMgZGF0YSBibG9ja3MgdG8gYmUgYWxpZ25lZCBieSBVVFJJRTJfREFUQV9HUkFOVUxBUklUWS5cbiAqL1xudmFyIFVUUklFMl9JTkRFWF9TSElGVCA9IGV4cG9ydHMuVVRSSUUyX0lOREVYX1NISUZUID0gMjtcblxuLyoqXG4gKiBEaWZmZXJlbmNlIGJldHdlZW4gdGhlIHR3byBzaGlmdCBzaXplcyxcbiAqIGZvciBnZXR0aW5nIGFuIGluZGV4LTEgb2Zmc2V0IGZyb20gYW4gaW5kZXgtMiBvZmZzZXQuIDY9MTEtNVxuICovXG52YXIgVVRSSUUyX1NISUZUXzFfMiA9IGV4cG9ydHMuVVRSSUUyX1NISUZUXzFfMiA9IFVUUklFMl9TSElGVF8xIC0gVVRSSUUyX1NISUZUXzI7XG5cbi8qKlxuICogVGhlIHBhcnQgb2YgdGhlIGluZGV4LTIgdGFibGUgZm9yIFUrRDgwMC4uVStEQkZGIHN0b3JlcyB2YWx1ZXMgZm9yXG4gKiBsZWFkIHN1cnJvZ2F0ZSBjb2RlIF91bml0c18gbm90IGNvZGUgX3BvaW50c18uXG4gKiBWYWx1ZXMgZm9yIGxlYWQgc3Vycm9nYXRlIGNvZGUgX3BvaW50c18gYXJlIGluZGV4ZWQgd2l0aCB0aGlzIHBvcnRpb24gb2YgdGhlIHRhYmxlLlxuICogTGVuZ3RoPTMyPTB4MjA9MHg0MDA+PlVUUklFMl9TSElGVF8yLiAoVGhlcmUgYXJlIDEwMjQ9MHg0MDAgbGVhZCBzdXJyb2dhdGVzLilcbiAqL1xudmFyIFVUUklFMl9MU0NQX0lOREVYXzJfT0ZGU0VUID0gZXhwb3J0cy5VVFJJRTJfTFNDUF9JTkRFWF8yX09GRlNFVCA9IDB4MTAwMDAgPj4gVVRSSUUyX1NISUZUXzI7XG5cbi8qKiBOdW1iZXIgb2YgZW50cmllcyBpbiBhIGRhdGEgYmxvY2suIDMyPTB4MjAgKi9cbnZhciBVVFJJRTJfREFUQV9CTE9DS19MRU5HVEggPSBleHBvcnRzLlVUUklFMl9EQVRBX0JMT0NLX0xFTkdUSCA9IDEgPDwgVVRSSUUyX1NISUZUXzI7XG4vKiogTWFzayBmb3IgZ2V0dGluZyB0aGUgbG93ZXIgYml0cyBmb3IgdGhlIGluLWRhdGEtYmxvY2sgb2Zmc2V0LiAqL1xudmFyIFVUUklFMl9EQVRBX01BU0sgPSBleHBvcnRzLlVUUklFMl9EQVRBX01BU0sgPSBVVFJJRTJfREFUQV9CTE9DS19MRU5HVEggLSAxO1xuXG52YXIgVVRSSUUyX0xTQ1BfSU5ERVhfMl9MRU5HVEggPSBleHBvcnRzLlVUUklFMl9MU0NQX0lOREVYXzJfTEVOR1RIID0gMHg0MDAgPj4gVVRSSUUyX1NISUZUXzI7XG4vKiogQ291bnQgdGhlIGxlbmd0aHMgb2YgYm90aCBCTVAgcGllY2VzLiAyMDgwPTB4ODIwICovXG52YXIgVVRSSUUyX0lOREVYXzJfQk1QX0xFTkdUSCA9IGV4cG9ydHMuVVRSSUUyX0lOREVYXzJfQk1QX0xFTkdUSCA9IFVUUklFMl9MU0NQX0lOREVYXzJfT0ZGU0VUICsgVVRSSUUyX0xTQ1BfSU5ERVhfMl9MRU5HVEg7XG4vKipcbiAqIFRoZSAyLWJ5dGUgVVRGLTggdmVyc2lvbiBvZiB0aGUgaW5kZXgtMiB0YWJsZSBmb2xsb3dzIGF0IG9mZnNldCAyMDgwPTB4ODIwLlxuICogTGVuZ3RoIDMyPTB4MjAgZm9yIGxlYWQgYnl0ZXMgQzAuLkRGLCByZWdhcmRsZXNzIG9mIFVUUklFMl9TSElGVF8yLlxuICovXG52YXIgVVRSSUUyX1VURjhfMkJfSU5ERVhfMl9PRkZTRVQgPSBleHBvcnRzLlVUUklFMl9VVEY4XzJCX0lOREVYXzJfT0ZGU0VUID0gVVRSSUUyX0lOREVYXzJfQk1QX0xFTkdUSDtcbnZhciBVVFJJRTJfVVRGOF8yQl9JTkRFWF8yX0xFTkdUSCA9IGV4cG9ydHMuVVRSSUUyX1VURjhfMkJfSU5ERVhfMl9MRU5HVEggPSAweDgwMCA+PiA2OyAvKiBVKzA4MDAgaXMgdGhlIGZpcnN0IGNvZGUgcG9pbnQgYWZ0ZXIgMi1ieXRlIFVURi04ICovXG4vKipcbiAqIFRoZSBpbmRleC0xIHRhYmxlLCBvbmx5IHVzZWQgZm9yIHN1cHBsZW1lbnRhcnkgY29kZSBwb2ludHMsIGF0IG9mZnNldCAyMTEyPTB4ODQwLlxuICogVmFyaWFibGUgbGVuZ3RoLCBmb3IgY29kZSBwb2ludHMgdXAgdG8gaGlnaFN0YXJ0LCB3aGVyZSB0aGUgbGFzdCBzaW5nbGUtdmFsdWUgcmFuZ2Ugc3RhcnRzLlxuICogTWF4aW11bSBsZW5ndGggNTEyPTB4MjAwPTB4MTAwMDAwPj5VVFJJRTJfU0hJRlRfMS5cbiAqIChGb3IgMHgxMDAwMDAgc3VwcGxlbWVudGFyeSBjb2RlIHBvaW50cyBVKzEwMDAwLi5VKzEwZmZmZi4pXG4gKlxuICogVGhlIHBhcnQgb2YgdGhlIGluZGV4LTIgdGFibGUgZm9yIHN1cHBsZW1lbnRhcnkgY29kZSBwb2ludHMgc3RhcnRzXG4gKiBhZnRlciB0aGlzIGluZGV4LTEgdGFibGUuXG4gKlxuICogQm90aCB0aGUgaW5kZXgtMSB0YWJsZSBhbmQgdGhlIGZvbGxvd2luZyBwYXJ0IG9mIHRoZSBpbmRleC0yIHRhYmxlXG4gKiBhcmUgb21pdHRlZCBjb21wbGV0ZWx5IGlmIHRoZXJlIGlzIG9ubHkgQk1QIGRhdGEuXG4gKi9cbnZhciBVVFJJRTJfSU5ERVhfMV9PRkZTRVQgPSBleHBvcnRzLlVUUklFMl9JTkRFWF8xX09GRlNFVCA9IFVUUklFMl9VVEY4XzJCX0lOREVYXzJfT0ZGU0VUICsgVVRSSUUyX1VURjhfMkJfSU5ERVhfMl9MRU5HVEg7XG5cbi8qKlxuICogTnVtYmVyIG9mIGluZGV4LTEgZW50cmllcyBmb3IgdGhlIEJNUC4gMzI9MHgyMFxuICogVGhpcyBwYXJ0IG9mIHRoZSBpbmRleC0xIHRhYmxlIGlzIG9taXR0ZWQgZnJvbSB0aGUgc2VyaWFsaXplZCBmb3JtLlxuICovXG52YXIgVVRSSUUyX09NSVRURURfQk1QX0lOREVYXzFfTEVOR1RIID0gZXhwb3J0cy5VVFJJRTJfT01JVFRFRF9CTVBfSU5ERVhfMV9MRU5HVEggPSAweDEwMDAwID4+IFVUUklFMl9TSElGVF8xO1xuXG4vKiogTnVtYmVyIG9mIGVudHJpZXMgaW4gYW4gaW5kZXgtMiBibG9jay4gNjQ9MHg0MCAqL1xudmFyIFVUUklFMl9JTkRFWF8yX0JMT0NLX0xFTkdUSCA9IGV4cG9ydHMuVVRSSUUyX0lOREVYXzJfQkxPQ0tfTEVOR1RIID0gMSA8PCBVVFJJRTJfU0hJRlRfMV8yO1xuLyoqIE1hc2sgZm9yIGdldHRpbmcgdGhlIGxvd2VyIGJpdHMgZm9yIHRoZSBpbi1pbmRleC0yLWJsb2NrIG9mZnNldC4gKi9cbnZhciBVVFJJRTJfSU5ERVhfMl9NQVNLID0gZXhwb3J0cy5VVFJJRTJfSU5ERVhfMl9NQVNLID0gVVRSSUUyX0lOREVYXzJfQkxPQ0tfTEVOR1RIIC0gMTtcblxudmFyIGNyZWF0ZVRyaWVGcm9tQmFzZTY0ID0gZXhwb3J0cy5jcmVhdGVUcmllRnJvbUJhc2U2NCA9IGZ1bmN0aW9uIGNyZWF0ZVRyaWVGcm9tQmFzZTY0KGJhc2U2NCkge1xuICAgIHZhciBidWZmZXIgPSAoMCwgX1V0aWwuZGVjb2RlKShiYXNlNjQpO1xuICAgIHZhciB2aWV3MzIgPSBBcnJheS5pc0FycmF5KGJ1ZmZlcikgPyAoMCwgX1V0aWwucG9seVVpbnQzMkFycmF5KShidWZmZXIpIDogbmV3IFVpbnQzMkFycmF5KGJ1ZmZlcik7XG4gICAgdmFyIHZpZXcxNiA9IEFycmF5LmlzQXJyYXkoYnVmZmVyKSA/ICgwLCBfVXRpbC5wb2x5VWludDE2QXJyYXkpKGJ1ZmZlcikgOiBuZXcgVWludDE2QXJyYXkoYnVmZmVyKTtcbiAgICB2YXIgaGVhZGVyTGVuZ3RoID0gMjQ7XG5cbiAgICB2YXIgaW5kZXggPSB2aWV3MTYuc2xpY2UoaGVhZGVyTGVuZ3RoIC8gMiwgdmlldzMyWzRdIC8gMik7XG4gICAgdmFyIGRhdGEgPSB2aWV3MzJbNV0gPT09IDIgPyB2aWV3MTYuc2xpY2UoKGhlYWRlckxlbmd0aCArIHZpZXczMls0XSkgLyAyKSA6IHZpZXczMi5zbGljZShNYXRoLmNlaWwoKGhlYWRlckxlbmd0aCArIHZpZXczMls0XSkgLyA0KSk7XG5cbiAgICByZXR1cm4gbmV3IFRyaWUodmlldzMyWzBdLCB2aWV3MzJbMV0sIHZpZXczMlsyXSwgdmlldzMyWzNdLCBpbmRleCwgZGF0YSk7XG59O1xuXG52YXIgVHJpZSA9IGV4cG9ydHMuVHJpZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUcmllKGluaXRpYWxWYWx1ZSwgZXJyb3JWYWx1ZSwgaGlnaFN0YXJ0LCBoaWdoVmFsdWVJbmRleCwgaW5kZXgsIGRhdGEpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRyaWUpO1xuXG4gICAgICAgIHRoaXMuaW5pdGlhbFZhbHVlID0gaW5pdGlhbFZhbHVlO1xuICAgICAgICB0aGlzLmVycm9yVmFsdWUgPSBlcnJvclZhbHVlO1xuICAgICAgICB0aGlzLmhpZ2hTdGFydCA9IGhpZ2hTdGFydDtcbiAgICAgICAgdGhpcy5oaWdoVmFsdWVJbmRleCA9IGhpZ2hWYWx1ZUluZGV4O1xuICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSB2YWx1ZSBmb3IgYSBjb2RlIHBvaW50IGFzIHN0b3JlZCBpbiB0aGUgVHJpZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBjb2RlUG9pbnQgdGhlIGNvZGUgcG9pbnRcbiAgICAgKiBAcmV0dXJuIHRoZSB2YWx1ZVxuICAgICAqL1xuXG5cbiAgICBfY3JlYXRlQ2xhc3MoVHJpZSwgW3tcbiAgICAgICAga2V5OiAnZ2V0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldChjb2RlUG9pbnQpIHtcbiAgICAgICAgICAgIHZhciBpeCA9IHZvaWQgMDtcbiAgICAgICAgICAgIGlmIChjb2RlUG9pbnQgPj0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChjb2RlUG9pbnQgPCAweDBkODAwIHx8IGNvZGVQb2ludCA+IDB4MGRiZmYgJiYgY29kZVBvaW50IDw9IDB4MGZmZmYpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gT3JkaW5hcnkgQk1QIGNvZGUgcG9pbnQsIGV4Y2x1ZGluZyBsZWFkaW5nIHN1cnJvZ2F0ZXMuXG4gICAgICAgICAgICAgICAgICAgIC8vIEJNUCB1c2VzIGEgc2luZ2xlIGxldmVsIGxvb2t1cC4gIEJNUCBpbmRleCBzdGFydHMgYXQgb2Zmc2V0IDAgaW4gdGhlIFRyaWUyIGluZGV4LlxuICAgICAgICAgICAgICAgICAgICAvLyAxNiBiaXQgZGF0YSBpcyBzdG9yZWQgaW4gdGhlIGluZGV4IGFycmF5IGl0c2VsZi5cbiAgICAgICAgICAgICAgICAgICAgaXggPSB0aGlzLmluZGV4W2NvZGVQb2ludCA+PiBVVFJJRTJfU0hJRlRfMl07XG4gICAgICAgICAgICAgICAgICAgIGl4ID0gKGl4IDw8IFVUUklFMl9JTkRFWF9TSElGVCkgKyAoY29kZVBvaW50ICYgVVRSSUUyX0RBVEFfTUFTSyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGFbaXhdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChjb2RlUG9pbnQgPD0gMHhmZmZmKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIExlYWQgU3Vycm9nYXRlIENvZGUgUG9pbnQuICBBIFNlcGFyYXRlIGluZGV4IHNlY3Rpb24gaXMgc3RvcmVkIGZvclxuICAgICAgICAgICAgICAgICAgICAvLyBsZWFkIHN1cnJvZ2F0ZSBjb2RlIHVuaXRzIGFuZCBjb2RlIHBvaW50cy5cbiAgICAgICAgICAgICAgICAgICAgLy8gICBUaGUgbWFpbiBpbmRleCBoYXMgdGhlIGNvZGUgdW5pdCBkYXRhLlxuICAgICAgICAgICAgICAgICAgICAvLyAgIEZvciB0aGlzIGZ1bmN0aW9uLCB3ZSBuZWVkIHRoZSBjb2RlIHBvaW50IGRhdGEuXG4gICAgICAgICAgICAgICAgICAgIC8vIE5vdGU6IHRoaXMgZXhwcmVzc2lvbiBjb3VsZCBiZSByZWZhY3RvcmVkIGZvciBzbGlnaHRseSBpbXByb3ZlZCBlZmZpY2llbmN5LCBidXRcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgc3Vycm9nYXRlIGNvZGUgcG9pbnRzIHdpbGwgYmUgc28gcmFyZSBpbiBwcmFjdGljZSB0aGF0IGl0J3Mgbm90IHdvcnRoIGl0LlxuICAgICAgICAgICAgICAgICAgICBpeCA9IHRoaXMuaW5kZXhbVVRSSUUyX0xTQ1BfSU5ERVhfMl9PRkZTRVQgKyAoY29kZVBvaW50IC0gMHhkODAwID4+IFVUUklFMl9TSElGVF8yKV07XG4gICAgICAgICAgICAgICAgICAgIGl4ID0gKGl4IDw8IFVUUklFMl9JTkRFWF9TSElGVCkgKyAoY29kZVBvaW50ICYgVVRSSUUyX0RBVEFfTUFTSyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGFbaXhdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChjb2RlUG9pbnQgPCB0aGlzLmhpZ2hTdGFydCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTdXBwbGVtZW50YWwgY29kZSBwb2ludCwgdXNlIHR3by1sZXZlbCBsb29rdXAuXG4gICAgICAgICAgICAgICAgICAgIGl4ID0gVVRSSUUyX0lOREVYXzFfT0ZGU0VUIC0gVVRSSUUyX09NSVRURURfQk1QX0lOREVYXzFfTEVOR1RIICsgKGNvZGVQb2ludCA+PiBVVFJJRTJfU0hJRlRfMSk7XG4gICAgICAgICAgICAgICAgICAgIGl4ID0gdGhpcy5pbmRleFtpeF07XG4gICAgICAgICAgICAgICAgICAgIGl4ICs9IGNvZGVQb2ludCA+PiBVVFJJRTJfU0hJRlRfMiAmIFVUUklFMl9JTkRFWF8yX01BU0s7XG4gICAgICAgICAgICAgICAgICAgIGl4ID0gdGhpcy5pbmRleFtpeF07XG4gICAgICAgICAgICAgICAgICAgIGl4ID0gKGl4IDw8IFVUUklFMl9JTkRFWF9TSElGVCkgKyAoY29kZVBvaW50ICYgVVRSSUUyX0RBVEFfTUFTSyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGFbaXhdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY29kZVBvaW50IDw9IDB4MTBmZmZmKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGFbdGhpcy5oaWdoVmFsdWVJbmRleF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBGYWxsIHRocm91Z2guICBUaGUgY29kZSBwb2ludCBpcyBvdXRzaWRlIG9mIHRoZSBsZWdhbCByYW5nZSBvZiAwLi4weDEwZmZmZi5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVycm9yVmFsdWU7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gVHJpZTtcbn0oKTtcblxuLyoqKi8gfSksXG4vKiA0OSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5tb2R1bGUuZXhwb3J0cyA9ICdLd0FBQUFBQUFBQUFDQTRBSURvQUFQQWZBQUFDQUFBQUFBQUlBQkFBR0FCQUFFZ0FVQUJZQUY0QVpnQmVBR1lBWUFCb0FIQUFlQUJlQUdZQWZBQ0VBSUFBaUFDUUFKZ0FvQUNvQUswQXRRQzlBTVVBWGdCbUFGNEFaZ0JlQUdZQXpRRFZBRjRBWmdEUkFOa0EzZ0RtQU93QTlBRDhBQVFCREFFVUFSb0JJZ0dBQUlnQUp3RXZBVGNCUHdGRkFVMEJUQUZVQVZ3QlpBRnNBWE1CZXdHREFUQUFpd0dUQVpzQm9nR2tBYXdCdEFHOEFjSUJ5Z0hTQWRvQjRBSG9BZkFCK0FIK0FRWUNEZ0lXQXY0QkhnSW1BaTRDTmdJK0FrVUNUUUpUQWxzQ1l3SnJBbkVDZVFLQkFrMENpUUtSQXBrQ29RS29BckFDdUFMQUFzUUN6QUl3QU5RQzNBTGtBakFBN0FMMEF2d0NBUU1KQXhBREdBTXdBQ0FESmdNdUF6WURQZ09BQUVZRFNnTlNBMUlEVWdOYUExb0RZQU5pQTJJRGdBQ0FBR29EZ0FCeUEzWURmZ09BQUlRRGdBQ0tBNUlEbWdPQUFJQUFvZ09xQTRBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUs4RHR3T0FBSUFBdndQSEE4OEQxd1BmQXlBRDV3UHNBL1FEL0FPQUFJQUFCQVFNQkJJRWdBQVdCQjRFSmdRdUJETUVJQU03QkVFRVhnQkpCQ0FEVVFSWkJHRUVhUVF3QURBQWNRUStBWGtFZ1FTSkJKRUVnQUNZQklBQW9BU29CSzhFdHdRd0FMOEV4UVNBQUlBQWdBQ0FBSUFBZ0FDZ0FNMEVYZ0JlQUY0QVhnQmVBRjRBWGdCZUFOVUVYZ0RaQk9FRVhnRHBCUEVFK1FRQkJRa0ZFUVVaQlNFRktRVXhCVFVGUFFWRkJVd0ZWQVZjQlY0QVl3VmVBR3NGY3dWN0JZTUZpd1dTQlY0QW1nV2dCYWNGWGdCZUFGNEFYZ0JlQUtzRlhnQ3lCYkVGdWdXN0JjSUZ3Z1hJQmNJRndnWFFCZFFGM0FYa0Jlc0Y4d1g3QlFNR0N3WVRCaHNHSXdZckJqTUdPd1plQUQ4R1J3Wk5CbDRBVkFaYkJsNEFYZ0JlQUY0QVhnQmVBRjRBWGdCZUFGNEFYZ0JlQUdNR1hnQnFCbkVHWGdCZUFGNEFYZ0JlQUY0QVhnQmVBRjRBWGdCNUJvQUc0d1NHQm80R2t3YUFBSUFESGdSNUFGNEFYZ0JlQUpzR2dBQkdBNEFBb3dhckJyTUdzd2FnQUxzR3d3YkxCakFBMHdiYUJ0b0czUWJhQnRvRzJnYmFCdG9HMmdibEJ1c0c4d2I3QmdNSEN3Y1RCeHNIQ3djakJ5c0hNQWMxQnpVSE9nZENCOW9HU2dkU0Ixb0hZQWZhQmxvSGFBZmFCbElIMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCalVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSGJRZGVBRjRBTlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RZDFCMzBITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCNE1IMmdhS0I2OEVnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJOEhsd2RlQUo4SHB3ZUFBSUFBcndlM0IxNEFYZ0MvQjhVSHlnY3dBTkFIMkFmZ0I0QUE2QWZ3Qno0QitBY0FDRndCQ0FnUENCY0lvZ0VZQVI4SUp3aUFBQzhJTndnL0NDQURSd2hQQ0ZjSVh3aG5DRW9ER2dTQUFJQUFnQUJ2Q0hjSWVBaDVDSG9JZXdoOENIMElkd2g0Q0hrSWVnaDdDSHdJZlFoM0NIZ0llUWg2Q0hzSWZBaDlDSGNJZUFoNUNIb0lld2g4Q0gwSWR3aDRDSGtJZWdoN0NId0lmUWgzQ0hnSWVRaDZDSHNJZkFoOUNIY0llQWg1Q0hvSWV3aDhDSDBJZHdoNENIa0llZ2g3Q0h3SWZRaDNDSGdJZVFoNkNIc0lmQWg5Q0hjSWVBaDVDSG9JZXdoOENIMElkd2g0Q0hrSWVnaDdDSHdJZlFoM0NIZ0llUWg2Q0hzSWZBaDlDSGNJZUFoNUNIb0lld2g4Q0gwSWR3aDRDSGtJZWdoN0NId0lmUWgzQ0hnSWVRaDZDSHNJZkFoOUNIY0llQWg1Q0hvSWV3aDhDSDBJZHdoNENIa0llZ2g3Q0h3SWZRaDNDSGdJZVFoNkNIc0lmQWg5Q0hjSWVBaDVDSG9JZXdoOENIMElkd2g0Q0hrSWVnaDdDSHdJZlFoM0NIZ0llUWg2Q0hzSWZBaDlDSGNJZUFoNUNIb0lld2g4Q0gwSWR3aDRDSGtJZWdoN0NId0lmUWgzQ0hnSWVRaDZDSHNJZkFoOUNIY0llQWg1Q0hvSWV3aDhDSDBJZHdoNENIa0llZ2g3Q0h3SWZRaDNDSGdJZVFoNkNIc0lmQWg5Q0hjSWVBaDVDSG9JZXdoOENIMElkd2g0Q0hrSWVnaDdDSHdJZlFoM0NIZ0llUWg2Q0hzSWZBaDlDSGNJZUFoNUNIb0lld2g4Q0gwSWR3aDRDSGtJZWdoN0NId0lmUWgzQ0hnSWVRaDZDSHNJZkFoOUNIY0llQWg1Q0hvSWV3aDhDSDBJZHdoNENIa0llZ2g3Q0h3SWZRaDNDSGdJZVFoNkNIc0lmQWg5Q0hjSWVBaDVDSG9JZXdoOENIMElkd2g0Q0hrSWVnaDdDSHdJZlFoM0NIZ0llUWg2Q0hzSWZBaDlDSGNJZUFoNUNIb0lld2g4Q0gwSWR3aDRDSGtJZWdoN0NId0lmUWgzQ0hnSWVRaDZDSHNJZkFoOUNIY0llQWg1Q0hvSWV3aDhDSDBJZHdoNENIa0llZ2g3Q0h3SWZRaDNDSGdJZVFoNkNIc0lmQWg5Q0hjSWVBaDVDSG9JZXdoOENIMElkd2g0Q0hrSWVnaDdDSHdJZlFoM0NIZ0llUWg2Q0hzSWZBaDlDSGNJZUFoNUNIb0lld2g4Q0gwSWR3aDRDSGtJZWdoN0NId0loQWlMQ0k0SU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FKWUlsZ2lXQ0pZSWxnaVdDSllJbGdpV0NKWUlsZ2lXQ0pZSWxnaVdDSllJbGdpV0NKWUlsZ2lXQ0pZSWxnaVdDSllJbGdpV0NKWUlsZ2lXQ0pZSWxnZ3dBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUI1NElOUWMxQjZJSTJnYXFDTElJdWdpQUFJQUF2Z2pHQ0lBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQXl3aUhBWUFBMHdpQUFOa0kzUWpsQ08wSTlBajhDSUFBZ0FDQUFBSUpDZ2tTQ1JvSklna25DVFlITHdrM0NaWUlsZ2lXQ0pZSWxnaVdDSllJbGdpV0NKWUlsZ2lXQ0pZSWxnaVdDSllJbGdpV0NKWUlsZ2lXQ0pZSWxnaVdDSllJbGdpV0NKWUlsZ2lXQ0pZSWxnaUFBSUFBQUFGQUFYZ0JlQUdBQWNBQmVBSHdBUUFDUUFLQUFyUUM5QUo0QVhnQmVBRTBBM2dCUkFONEE3QUQ4QU13QkdnRUFBS2NCTndFRkFVd0JYQUY0UWtoQ21FS25BcmNDZ0FISEFzQUJ6NExBQWNBQndBSEFBZCtDNkFCb0FHK0MvNExBQWNBQndBSEFBYytERjRNQUFjQUI1NE0zZ3dlRFY0Tm5nM2VEYUFCb0FHZ0FhQUJvQUdnQWFBQm9BR2dBYUFCb0FHZ0FhQUJvQUdnQWFBQm9BR2dBYUFCb0FFZURxQUJWZzZXRHFBQm9RNmdBYUFCb0FIWER2Y09Ody8zRHZjTzl3NzNEdmNPOXc3M0R2Y085dzczRHZjTzl3NzNEdmNPOXc3M0R2Y085dzczRHZjTzl3NzNEdmNPOXc3M0R2Y085dzczRHZjTzl3NzNEbmNQQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQjdjUFB3bEdDVTRKTUFDQUFJQUFnQUJXQ1Y0SllRbUFBR2tKY0FsNENYd0pnQWt3QURBQU1BQXdBSWdKZ0FDTENaTUpnQUNaQ1o4Sm93bXJDWUFBc3drd0FGNEFYZ0I4QUlBQXV3a0FCTU1KeVFtQUFNNEpnQURWQ1RBQU1BQXdBREFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBcXdZV0JOa0lNQUF3QURBQU1BRGRDZUFKNkFudUNSNEU5Z2t3QVA0SkJRb05DakFBTUFDQUFCVUswd2lBQUIwS0pBb3NDalFLZ0FBd0FEd0tRd3FBQUVzS3ZRbWRDVk1LV3dvd0FEQUFnQUNBQUxjRU1BQ0FBR01LZ0FCckNqQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUFlQkRBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBSWtFUFFGekNub0tpUVNDQ29vS2tBcUpCSmdLb0Fxa0Nva0VHQUdzQ3JRS3ZBckJDakFBTUFESkN0RUtGUUhaQ3VFSy9nSHBDdkVLTUFBd0FEQUFNQUNBQUl3RStRb3dBSUFBUHdFQkN6QUFNQUF3QURBQU1BQ0FBQWtMRVFzd0FJQUFQd0VaQ3lFTGdBQU9DQ2tMTUFBeEN6a0xNQUF3QURBQU1BQXdBREFBWGdCZUFFRUxNQUF3QURBQU1BQXdBREFBTUFBd0FFa0xUUXRWQzRBQVhBdGtDNEFBaVFrd0FEQUFNQUF3QURBQU1BQXdBREFBYkF0eEMza0xnQXVGQzRzTE1BQXdBSk1MbHd1ZkN6QUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQXB3c3dBREFBTUFDQUFJQUFnQUN2QzRBQWdBQ0FBSUFBZ0FDQUFMY0xNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQXZ3dUFBTWNMZ0FDQUFJQUFnQUNBQUlBQXlndUFBSUFBZ0FDQUFJQUEwUXN3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQU5rTGdBQ0FBSUFBNEFzd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNKQ1I0RTZBc3dBREFBaHdId0M0QUErQXNBREFnTUVBd3dBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQ0FBSUFBR0F3ZERDVU1NQUF3QUMwTU5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RdzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhQUXd3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBRFVITlFjMUJ6VUhOUWMxQnpVSE5RYzJCekFBTUFBNUREVUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWRGRERBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBZ0FDQUFJQUFUUXhTREZvTU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QUY0QVhnQmVBRjRBWGdCZUFGNEFZZ3hlQUdvTVhnQnhESGtNZnd4ZUFJVU1YZ0JlQUkwTU1BQXdBREFBTUFBd0FGNEFYZ0NWREowTU1BQXdBREFBTUFCZUFGNEFwUXhlQUtzTXN3eTdERjRBd2d5OURNb01YZ0JlQUY0QVhnQmVBRjRBWGdCZUFGNEFYZ0RSRE5rTWVRQnFDZUFNM0F4OEFPWU03QXowRFBnTVhnQmVBRjRBWGdCZUFGNEFYZ0JlQUY0QVhnQmVBRjRBWGdCZUFGNEFYZ0NnQUFBTm9BQUhEUTRORmcwd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQWVEU1lOTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBSUFBZ0FDQUFJQUFnQUNBQUM0Tk1BQmVBRjRBTmcwd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FENE5SZzFPRFZZTlhnMW1EVEFBYlEwd0FEQUFNQUF3QURBQU1BQXdBREFBMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCblVOZWczQ0JZQU53Z1dGRGRvR2pBM2FCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdhVURad05wQTJvRGRvRzJnYXdEYmNOdnczSERkb0cyZ2JQRGRZTjNBM2ZEZVlOMmdic0RmTU4yZ2JhQnZvTi9nM2FCZ1lPRGc3YUJsNEFYZ0JlQUJZT1hnQmVBQ1VHMmdZZURsNEFKQTVlQUN3TzJ3M2FCdG9HTVE0NUR0b0cyZ2JhQnRvR1FRN2FCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdaSkRqVUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUIxRU8yZ1kxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RZFpEalVITlFjMUJ6VUhOUWMxQjJFT05RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSGFBNDFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUIzQU8yZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ1kxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUIyRU8yZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ1pKRHRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQmtrT2VBNmdBS0FBb0FBd0FEQUFNQUF3QUtBQW9BQ2dBS0FBb0FDZ0FLQUFnQTR3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BRC8vd1FBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQTBBQXdBQkFBRUFBZ0FFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFLQUJNQUZ3QWVBQnNBR2dBZUFCY0FGZ0FTQUI0QUd3QVlBQThBR0FBY0FFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FHQUFZQUI0QUhnQWVBQk1BSGdCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBRmdBYkFCSUFIZ0FlQUI0QVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUJZQURRQVJBQjRBQkFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FCQUFFQUFRQUJBQUVBQVVBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQWtBRmdBYUFCc0FHd0FiQUI0QUhRQWRBQjRBVHdBWEFCNEFEUUFlQUI0QUdnQWJBRThBVHdBT0FGQUFIUUFkQUIwQVR3QlBBQmNBVHdCUEFFOEFGZ0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBSFFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUIwQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdCUUFCNEFIZ0FlQUI0QVVBQlFBRkFBVUFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBZUFCNEFIZ0FlQUZBQVR3QkFBRThBVHdCUEFFQUFUd0JRQUZBQVR3QlFBQjRBSGdBZUFCNEFIZ0FlQUIwQUhRQWRBQjBBSGdBZEFCNEFEZ0JRQUZBQVVBQlFBRkFBSGdBZUFCNEFIZ0FlQUI0QUhnQlFBQjRBVUFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFKQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQWtBQ1FBSkFBa0FDUUFKQUFrQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBZUFCNEFIZ0FlQUZBQUhnQWVBQjRBS3dBckFGQUFVQUJRQUZBQUdBQlFBQ3NBS3dBckFDc0FIZ0FlQUZBQUhnQlFBRkFBVUFBckFGQUFLd0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUt3QWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFCQUFFQUFRQUJBQUVBQVFBQkFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FVQUFlQUI0QUhnQWVBQjRBSGdBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QVlBQTBBS3dBckFCNEFIZ0FiQUNzQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQURRQUVBQjRBQkFBRUFCNEFCQUFFQUJNQUJBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQVZnQldBRllBVmdCV0FGWUFWZ0JXQUZZQVZnQldBRllBVmdCV0FGWUFWZ0JXQUZZQVZnQldBRllBVmdCV0FGWUFWZ0JXQUZZQUt3QXJBQ3NBS3dBckFGWUFWZ0JXQUI0QUhnQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBR2dBYUFCb0FHQUFZQUI0QUhnQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBRXdBRUFDc0FFd0FUQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBQm9BR1FBWkFCNEFVQUJRQUFRQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFCTUFVQUFFQUFRQUJBQUVBQVFBQkFBRUFCNEFIZ0FFQUFRQUJBQUVBQVFBQkFCUUFGQUFCQUFFQUI0QUJBQUVBQVFBQkFCUUFGQUFTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JRQUZBQVVBQWVBQjRBVUFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUt3QWVBRkFBQkFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBRkFBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFVQUJRQUI0QUhnQVlBQk1BVUFBckFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBRUFBUUFCQUFFQUZBQUJBQUVBQVFBQkFBRUFGQUFCQUFFQUFRQVVBQUVBQVFBQkFBRUFBUUFLd0FyQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBRUFBUUFCQUFyQUNzQUhnQXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQWVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFFQUFRQUJBQlFBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBRkFBQkFBRUFBUUFCQUFFQUFRQUJBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQVFBQkFBTkFBMEFTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0FlQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFCQUFFQUFRQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBRkFBVUFBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQXJBRkFBS3dBckFDc0FVQUJRQUZBQVVBQXJBQ3NBQkFCUUFBUUFCQUFFQUFRQUJBQUVBQVFBS3dBckFBUUFCQUFyQUNzQUJBQUVBQVFBVUFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBQkFBckFDc0FLd0FyQUZBQVVBQXJBRkFBVUFCUUFBUUFCQUFyQUNzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QlFBRkFBR2dBYUFGQUFVQUJRQUZBQVVBQk1BQjRBR3dCUUFCNEFLd0FyQUNzQUJBQUVBQVFBS3dCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFGQUFVQUFyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FVQUJRQUZBQVVBQlFBRkFBVUFBckFGQUFVQUFyQUZBQVVBQXJBRkFBVUFBckFDc0FCQUFyQUFRQUJBQUVBQVFBQkFBckFDc0FLd0FyQUFRQUJBQXJBQ3NBQkFBRUFBUUFLd0FyQUNzQUJBQXJBQ3NBS3dBckFDc0FLd0FyQUZBQVVBQlFBRkFBS3dCUUFDc0FLd0FyQUNzQUt3QXJBQ3NBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dBRUFBUUFVQUJRQUZBQUJBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBQkFBRUFBUUFLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUZBQVVBQlFBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUZBQVVBQXJBRkFBVUFCUUFGQUFVQUFyQUNzQUJBQlFBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQXJBQVFBQkFBRUFDc0FCQUFFQUFRQUt3QXJBRkFBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQVVBQlFBQVFBQkFBckFDc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0FlQUJzQUt3QXJBQ3NBS3dBckFDc0FLd0JRQUFRQUJBQUVBQVFBQkFBRUFDc0FCQUFFQUFRQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBRkFBVUFBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQUVBQVFBQkFBRUFBUUFLd0FyQUFRQUJBQXJBQ3NBQkFBRUFBUUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFBUUFCQUFyQUNzQUt3QXJBRkFBVUFBckFGQUFVQUJRQUFRQUJBQXJBQ3NBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dBZUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBRUFGQUFLd0JRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0JRQUZBQVVBQXJBRkFBVUFCUUFGQUFLd0FyQUNzQVVBQlFBQ3NBVUFBckFGQUFVQUFyQUNzQUt3QlFBRkFBS3dBckFDc0FVQUJRQUZBQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUNzQUt3QUVBQVFBQkFBRUFBUUFLd0FyQUNzQUJBQUVBQVFBS3dBRUFBUUFCQUFFQUNzQUt3QlFBQ3NBS3dBckFDc0FLd0FyQUFRQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRkFBVUFCUUFCNEFIZ0FlQUI0QUhnQWVBQnNBSGdBckFDc0FLd0FyQUNzQUJBQUVBQVFBQkFBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFGQUFVQUJRQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0FyQUZBQUJBQUVBQVFBQkFBRUFBUUFCQUFyQUFRQUJBQUVBQ3NBQkFBRUFBUUFCQUFyQUNzQUt3QXJBQ3NBS3dBckFBUUFCQUFyQUZBQVVBQlFBQ3NBS3dBckFDc0FLd0JRQUZBQUJBQUVBQ3NBS3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBQjRBVUFBRUFBUUFCQUFyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUZBQVVBQlFBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBVUFCUUFGQUFVQUJRQUNzQUt3QUVBRkFBQkFBRUFBUUFCQUFFQUFRQUJBQXJBQVFBQkFBRUFDc0FCQUFFQUFRQUJBQXJBQ3NBS3dBckFDc0FLd0FyQUFRQUJBQXJBQ3NBS3dBckFDc0FLd0FyQUZBQUt3QlFBRkFBQkFBRUFDc0FLd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUNzQVVBQlFBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFCQUFFQUZBQUJBQUVBQVFBQkFBRUFBUUFCQUFyQUFRQUJBQUVBQ3NBQkFBRUFBUUFCQUJRQUI0QUt3QXJBQ3NBS3dCUUFGQUFVQUFFQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUJBQUVBQ3NBS3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFCb0FVQUJRQUZBQVVBQlFBRkFBS3dBckFBUUFCQUFyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FVQUFyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QUVBQ3NBS3dBckFDc0FCQUFFQUFRQUJBQUVBQVFBS3dBRUFDc0FCQUFFQUFRQUJBQUVBQVFBQkFBRUFDc0FLd0FyQUNzQUt3QXJBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBS3dBckFBUUFCQUFlQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUFxQUZ3QVhBQXFBQ29BS2dBcUFDb0FLZ0FxQUNzQUt3QXJBQ3NBR3dCY0FGd0FYQUJjQUZ3QVhBQmNBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQWVBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBRFFBTkFDc0FLd0FyQUNzQUt3QmNBRndBS3dCY0FDc0FLd0JjQUZ3QUt3QmNBQ3NBS3dCY0FDc0FLd0FyQUNzQUt3QXJBRndBWEFCY0FGd0FLd0JjQUZ3QVhBQmNBRndBWEFCY0FDc0FYQUJjQUZ3QUt3QmNBQ3NBWEFBckFDc0FYQUJjQUNzQVhBQmNBRndBWEFBcUFGd0FYQUFxQUNvQUtnQXFBQ29BS2dBckFDb0FLZ0JjQUNzQUt3QmNBRndBWEFCY0FGd0FLd0JjQUNzQUtnQXFBQ29BS2dBcUFDb0FLd0FyQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQUt3QXJBRndBWEFCY0FGd0FVQUFPQUE0QURnQU9BQjRBRGdBT0FBa0FEZ0FPQUEwQUNRQVRBQk1BRXdBVEFCTUFDUUFlQUJNQUhnQWVBQjRBQkFBRUFCNEFIZ0FlQUI0QUhnQWVBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBTkFBUUFIZ0FFQUI0QUJBQVdBQkVBRmdBUkFBUUFCQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FyQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBTkFBUUFCQUFFQUFRQUJBQU5BQVFBQkFCUUFGQUFVQUJRQUZBQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQ3NBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUNzQURRQU5BQjRBSGdBZUFCNEFIZ0FlQUFRQUhnQWVBQjRBSGdBZUFCNEFLd0FlQUI0QURnQU9BQTBBRGdBZUFCNEFIZ0FlQUI0QUNRQUpBQ3NBS3dBckFDc0FLd0JjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FLZ0FxQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUZ3QVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QU5BQTBBSGdBZUFCNEFIZ0JjQUZ3QVhBQmNBRndBWEFBcUFDb0FLZ0FxQUZ3QVhBQmNBRndBS2dBcUFDb0FYQUFxQUNvQUtnQmNBRndBS2dBcUFDb0FLZ0FxQUNvQUtnQmNBRndBWEFBcUFDb0FLZ0FxQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBS2dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBcUFDb0FYQUFxQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQUtnQXFBQ29BS2dBcUFDb0FVQUJRQUZBQVVBQlFBRkFBS3dCUUFDc0FLd0FyQUNzQUt3QlFBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBZUFGQUFVQUJRQUZBQVdBQllBRmdBV0FCWUFGZ0FXQUJZQUZnQVdBQllBRmdBV0FCWUFGZ0FXQUJZQUZnQVdBQllBRmdBV0FCWUFGZ0FXQUJZQUZnQVdBQllBRmdBV0FCWUFGa0FXUUJaQUZrQVdRQlpBRmtBV1FCWkFGa0FXUUJaQUZrQVdRQlpBRmtBV1FCWkFGa0FXUUJaQUZrQVdRQlpBRmtBV1FCWkFGa0FXUUJaQUZrQVdRQmFBRm9BV2dCYUFGb0FXZ0JhQUZvQVdnQmFBRm9BV2dCYUFGb0FXZ0JhQUZvQVdnQmFBRm9BV2dCYUFGb0FXZ0JhQUZvQVdnQmFBRm9BV2dCYUFGb0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0JRQUZBQVVBQlFBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBVUFBckFGQUFVQUJRQUZBQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBVUFCUUFGQUFVQUFyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQVVBQlFBRkFBVUFBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFBckFGQUFLd0JRQUZBQVVBQlFBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBRkFBVUFCUUFGQUFLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQUt3QUVBQVFBQkFBZUFBMEFIZ0FlQUI0QUhnQWVBQjRBSGdCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUNzQUt3QXJBQ3NBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUNzQUt3QU5BRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFlQUI0QVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUEwQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUJZQUVRQXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFEUUFOQUEwQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBS3dBckFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFGQUFVQUJRQUZBQUJBQUVBQVFBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFBUUFCQUFFQUEwQURRQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQUVBQVFBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBRkFBVUFCUUFDc0FCQUFFQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBcUFDb0FEUUFOQUJVQVhBQU5BQjRBRFFBYkFGd0FLZ0FyQUNzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQUt3QXJBQ3NBS3dBckFCNEFIZ0FUQUJNQURRQU5BQTRBSGdBVEFCTUFIZ0FFQUFRQUJBQUpBQ3NBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FVQUJRQUZBQVVBQlFBQVFBQkFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBQkFCUUFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFDc0FLd0FyQUNzQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBS3dBckFDc0FLd0FlQUNzQUt3QXJBQk1BRXdCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FDc0FLd0JjQUZ3QVhBQmNBRndBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUNzQUt3QXJBQ3NBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBS3dBckFDc0FLd0FyQUNzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QmNBQ3NBS3dBckFDb0FLZ0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBQkFBRUFBUUFCQUFFQUNzQUt3QWVBQjRBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FLZ0FxQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FyQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQXJBQ3NBQkFCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFDc0FLd0FyQUNzQUt3QXJBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBS3dBckFDc0FLd0FyQUNzQUtnQXFBQ29BS2dBcUFDb0FLZ0JjQUNvQUtnQXFBQ29BS2dBcUFDc0FLd0FFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBckFBUUFCQUFFQUFRQUJBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQUVBQVFBQkFBRUFBUUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FyQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQURRQU5BQjRBRFFBTkFBMEFEUUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUNzQUt3QXJBQVFBQkFBRUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBVUFCUUFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUhnQWVBQjRBSGdCUUFGQUFVQUJRQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQXJBQ3NBS3dBTkFBMEFEUUFOQUEwQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QXJBQ3NBS3dCUUFGQUFVQUJMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBTkFBMEFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUJBQUVBQVFBSGdBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUZBQVVBQlFBRkFBQkFCUUFGQUFVQUJRQUFRQUJBQUVBRkFBVUFBRUFBUUFCQUFyQUNzQUt3QXJBQ3NBS3dBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBS3dBRUFBUUFCQUFFQUFRQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBckFDc0FVQUJRQUZBQVVBQlFBRkFBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFGQUFLd0JRQUNzQVVBQXJBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFLd0FyQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQ3NBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBRkFBSGdBZUFCNEFVQUJRQUZBQUt3QWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBRkFBVUFCUUFGQUFLd0FyQUI0QUhnQWVBQjRBSGdBZUFDc0FIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FyQUNzQVVBQlFBRkFBS3dBZUFCNEFIZ0FlQUI0QUhnQWVBQTRBSGdBckFBMEFEUUFOQUEwQURRQU5BQTBBQ1FBTkFBMEFEUUFJQUFRQUN3QUVBQVFBRFFBSkFBMEFEUUFNQUIwQUhRQWVBQmNBRndBV0FCY0FGd0FYQUJZQUZ3QWRBQjBBSGdBZUFCUUFGQUFVQUEwQUFRQUJBQVFBQkFBRUFBUUFCQUFKQUJvQUdnQWFBQm9BR2dBYUFCb0FHZ0FlQUJjQUZ3QWRBQlVBRlFBZUFCNEFIZ0FlQUI0QUhnQVlBQllBRVFBVkFCVUFGUUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQU5BQjRBRFFBTkFBMEFEUUFlQUEwQURRQU5BQWNBSGdBZUFCNEFIZ0FyQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQVVBQlFBQ3NBS3dCUEFGQUFVQUJRQUZBQVVBQWVBQjRBSGdBV0FCRUFUd0JRQUU4QVR3QlBBRThBVUFCUUFGQUFVQUJRQUI0QUhnQWVBQllBRVFBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBQ3NBR3dBYkFCc0FHd0FiQUJzQUd3QWFBQnNBR3dBYkFCc0FHd0FiQUJzQUd3QWJBQnNBR3dBYkFCc0FHd0FhQUJzQUd3QWJBQnNBR2dBYkFCc0FHZ0FiQUJzQUd3QWJBQnNBR3dBYkFCc0FHd0FiQUJzQUd3QWJBQnNBR3dBYkFCc0FCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQjRBSGdCUUFCb0FIZ0FkQUI0QVVBQWVBQm9BSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBVHdBZUFGQUFHd0FlQUI0QVVBQlFBRkFBVUFCUUFCNEFIZ0FlQUIwQUhRQWVBRkFBSGdCUUFCNEFVQUFlQUZBQVR3QlFBRkFBSGdBZUFCNEFIZ0FlQUI0QUhnQlFBRkFBVUFCUUFGQUFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdCUUFCNEFVQUJRQUZBQVVBQlBBRThBVUFCUUFGQUFVQUJRQUU4QVVBQlFBRThBVUFCUEFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JRQUZBQVVBQlFBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlBBRThBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBSGdBZUFGQUFVQUJRQUZBQVR3QWVBQjRBS3dBckFDc0FLd0FkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWRBQjRBSFFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIUUFlQUIwQUhRQWVBQjRBSGdBZEFCMEFIZ0FlQUIwQUhnQWVBQjRBSFFBZUFCMEFHd0FiQUI0QUhRQWVBQjRBSGdBZUFCMEFIZ0FlQUIwQUhRQWRBQjBBSGdBZUFCMEFIZ0FkQUI0QUhRQWRBQjBBSFFBZEFCMEFIZ0FkQUI0QUhnQWVBQjRBSGdBZEFCMEFIUUFkQUI0QUhnQWVBQjRBSFFBZEFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIUUFlQUI0QUhnQWRBQjRBSGdBZUFCNEFIZ0FkQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSFFBZEFCNEFIZ0FkQUIwQUhRQWRBQjRBSGdBZEFCMEFIZ0FlQUIwQUhRQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWRBQjBBSGdBZUFCMEFIUUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjBBSGdBZUFCNEFIUUFlQUI0QUhnQWVBQjRBSGdBZUFCMEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZEFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQlFBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQVdBQkVBRmdBUkFCNEFIZ0FlQUI0QUhnQWVBQjBBSGdBZUFCNEFIZ0FlQUI0QUhnQWxBQ1VBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBRmdBUkFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUNVQUpRQWxBQ1VBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JQQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlBBRThBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUUFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUI0QUhnQWVBQjRBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIZ0FlQUIwQUhRQWRBQjBBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZEFCMEFIZ0FkQUIwQUhRQWRBQjBBSFFBZEFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZEFCMEFIZ0FlQUIwQUhRQWVBQjRBSGdBZUFCMEFIUUFlQUI0QUhnQWVBQjBBSFFBZEFCNEFIZ0FkQUI0QUhnQWRBQjBBSFFBZEFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSFFBZEFCMEFIUUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FkQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFKUUFsQUNVQUpRQWVBQjBBSFFBZUFCNEFIUUFlQUI0QUhnQWVBQjBBSFFBZUFCNEFIZ0FlQUNVQUpRQWRBQjBBSlFBZUFDVUFKUUFsQUNBQUpRQWxBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUpRQWxBQ1VBSGdBZUFCNEFIZ0FkQUI0QUhRQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSFFBZEFCNEFIUUFkQUIwQUhnQWRBQ1VBSFFBZEFCNEFIUUFkQUI0QUhRQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FsQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjBBSFFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUhRQWRBQjBBSFFBbEFCNEFKUUFsQUNVQUhRQWxBQ1VBSFFBZEFCMEFKUUFsQUIwQUhRQWxBQjBBSFFBbEFDVUFKUUFlQUIwQUhnQWVBQjRBSGdBZEFCMEFKUUFkQUIwQUhRQWRBQjBBSFFBbEFDVUFKUUFsQUNVQUhRQWxBQ1VBSUFBbEFCMEFIUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFIZ0FlQUI0QUpRQWxBQ0FBSUFBZ0FDQUFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZEFCNEFIZ0FlQUJjQUZ3QVhBQmNBRndBWEFCNEFFd0FUQUNVQUhnQWVBQjRBRmdBUkFCWUFFUUFXQUJFQUZnQVJBQllBRVFBV0FCRUFGZ0FSQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlBBRThBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FXQUJFQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUZnQVJBQllBRVFBV0FCRUFGZ0FSQUJZQUVRQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQllBRVFBV0FCRUFGZ0FSQUJZQUVRQVdBQkVBRmdBUkFCWUFFUUFXQUJFQUZnQVJBQllBRVFBV0FCRUFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFGZ0FSQUJZQUVRQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQllBRVFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhRQWRBQjBBSFFBZEFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUt3QXJBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBS3dBckFDc0FIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUt3QWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFCNEFIZ0FlQUI0QUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBRUFBUUFCQUFlQUI0QUt3QXJBQ3NBS3dBckFCTUFEUUFOQUEwQVVBQVRBQTBBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBS3dBckFDc0FLd0FyQUNzQVVBQU5BQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FFQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQXJBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUNzQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFBMEFEUUFOQUEwQURRQU5BQTBBRFFBZUFBMEFGZ0FOQUI0QUhnQVhBQmNBSGdBZUFCY0FGd0FXQUJFQUZnQVJBQllBRVFBV0FCRUFEUUFOQUEwQURRQVRBRkFBRFFBTkFCNEFEUUFOQUI0QUhnQWVBQjRBSGdBTUFBd0FEUUFOQUEwQUhnQU5BQTBBRmdBTkFBMEFEUUFOQUEwQURRQU5BQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDc0FKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBckFDc0FLd0FyQUEwQUVRQVJBQ1VBSlFCSEFGY0FWd0FXQUJFQUZnQVJBQllBRVFBV0FCRUFGZ0FSQUNVQUpRQVdBQkVBRmdBUkFCWUFFUUFXQUJFQUZRQVdBQkVBRVFBbEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFBUUFCQUFFQUFRQUJBQUVBQ1VBVndCWEFGY0FWd0EyQUNVQUpRQlhBRmNBVndCSEFFY0FKUUFsQUNVQUt3QlJBRmNBVVFCWEFGRUFWd0JSQUZjQVVRQlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZFQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCUkFGY0FVUUJYQUZFQVZ3QlhBRmNBVndCWEFGY0FVUUJYQUZjQVZ3QlhBRmNBVndCUkFGRUFLd0FyQUFRQUJBQVZBQlVBUndCSEFGY0FGUUJSQUZjQVVRQlhBRkVBVndCUkFGY0FVUUJYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGRUFWd0JSQUZjQVVRQlhBRmNBVndCWEFGY0FWd0JSQUZjQVZ3QlhBRmNBVndCWEFGRUFVUUJYQUZjQVZ3QlhBQlVBVVFCSEFFY0FWd0FyQUNzQUt3QXJBQ3NBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FLd0FyQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QXJBQ1VBSlFCWEFGY0FWd0JYQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQUt3QXJBQ3NBS3dBckFDVUFKUUFsQUNVQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBVVFCUkFGRUFVUUJSQUZFQVVRQlJBRkVBVVFCUkFGRUFVUUJSQUZFQVVRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDc0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0FsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBRThBVHdCUEFFOEFUd0JQQUU4QVR3QWxBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUJYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFFY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBS3dBckFDc0FKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFEUUFUQUEwQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUZBQVVBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUZBQUJBQUVBQVFBQkFBZUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFIZ0JRQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QVVBQlFBQVFBQkFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQVFBQkFBZUFBMEFEUUFOQUEwQURRQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBVUFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQlFBQjRBSGdBZUFCNEFIZ0FlQUZBQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQXJBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUFRQVVBQlFBRkFBQkFCUUFGQUFVQUJRQUFRQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFBUUFCQUFFQUFRQUJBQWVBQjRBSGdBZUFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFIZ0FlQUJvQUhnQXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQURnQU9BQk1BRXdBckFDc0FLd0FyQUNzQUt3QXJBQ3NBQkFBRUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUFRQUJBQUVBQVFBQkFBRUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBTkFBMEFTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0FyQUNzQUt3QXJBQ3NBS3dBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFCUUFGQUFVQUJRQUZBQVVBQWVBQjRBSGdCUUFBNEFVQUFyQUNzQVVBQlFBRkFBVUFCUUFGQUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBMEFEUUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFCNEFXQUJZQUZnQVdBQllBRmdBV0FCWUFGZ0FXQUJZQUZnQVdBQllBRmdBV0FCWUFGZ0FXQUJZQUZnQVdBQllBRmdBV0FCWUFGZ0FXQUJZQUNzQUt3QXJBQVFBSGdBZUFCNEFIZ0FlQUI0QURRQU5BQTBBSGdBZUFCNEFIZ0FyQUZBQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QXJBQ3NBS3dBckFCNEFIZ0JjQUZ3QVhBQmNBRndBS2dCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FYQUJjQUZ3QVhBQmNBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUZBQVVBQlFBQVFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQVFBQkFBckFDc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0FyQUNzQUhnQU5BQTBBRFFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QUtnQXFBQ29BWEFBcUFDb0FLZ0JjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUFxQUZ3QUtnQXFBQ29BWEFCY0FDb0FLZ0JjQUZ3QVhBQmNBRndBS2dBcUFGd0FLZ0JjQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFGd0FYQUJjQUNvQUtnQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBQkFBRUFBUUFCQUFFQUEwQURRQlFBRkFBVUFBRUFBUUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFBckFDc0FVQUJRQUZBQVVBQlFBRkFBS3dBckFGQUFVQUJRQUZBQVVBQlFBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQURRQUVBQVFBS3dBckFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FLd0FyQUNzQUt3QXJBQ3NBVkFCVkFGVUFWUUJWQUZVQVZRQlZBRlVBVlFCVkFGVUFWUUJWQUZVQVZRQlZBRlVBVlFCVkFGVUFWUUJWQUZVQVZRQlZBRlVBVlFCVUFGVUFWUUJWQUZVQVZRQlZBRlVBVlFCVkFGVUFWUUJWQUZVQVZRQlZBRlVBVlFCVkFGVUFWUUJWQUZVQVZRQlZBRlVBVlFCVkFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUZrQVdRQlpBRmtBV1FCWkFGa0FXUUJaQUZrQVdRQlpBRmtBV1FCWkFGa0FXUUJaQUZrQUt3QXJBQ3NBS3dCYUFGb0FXZ0JhQUZvQVdnQmFBRm9BV2dCYUFGb0FXZ0JhQUZvQVdnQmFBRm9BV2dCYUFGb0FXZ0JhQUZvQVdnQmFBRm9BV2dCYUFGb0FLd0FyQUNzQUt3QUdBQVlBQmdBR0FBWUFCZ0FHQUFZQUJnQUdBQVlBQmdBR0FBWUFCZ0FHQUFZQUJnQUdBQVlBQmdBR0FBWUFCZ0FHQUFZQUJnQUdBQVlBQmdBR0FBWUFWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBQ1VBSlFCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBSlFBbEFDVUFKUUFsQUNVQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFLd0FyQUNzQUt3QXJBRllBQkFCV0FGWUFWZ0JXQUZZQVZnQldBRllBVmdCV0FCNEFWZ0JXQUZZQVZnQldBRllBVmdCV0FGWUFWZ0JXQUZZQVZnQXJBRllBVmdCV0FGWUFWZ0FyQUZZQUt3QldBRllBS3dCV0FGWUFLd0JXQUZZQVZnQldBRllBVmdCV0FGWUFWZ0JXQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUVRQVdBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFhQUI0QUt3QXJBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUdBQVJBQkVBR0FBWUFCTUFFd0FXQUJFQUZBQXJBQ3NBS3dBckFDc0FLd0FFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFDVUFKUUFsQUNVQUpRQVdBQkVBRmdBUkFCWUFFUUFXQUJFQUZnQVJBQllBRVFBbEFDVUFGZ0FSQUNVQUpRQWxBQ1VBSlFBbEFDVUFFUUFsQUJFQUt3QVZBQlVBRXdBVEFDVUFGZ0FSQUJZQUVRQVdBQkVBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ3NBSlFBYkFCb0FKUUFyQUNzQUt3QXJBRkFBVUFCUUFGQUFVQUFyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFBY0FLd0FUQUNVQUpRQWJBQm9BSlFBbEFCWUFFUUFsQUNVQUVRQWxBQkVBSlFCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFCVUFGUUFsQUNVQUpRQVRBQ1VBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBQllBSlFBUkFDVUFKUUFsQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0FXQUNVQUVRQWxBQllBRVFBUkFCWUFFUUFSQUJVQVZ3QlJBRkVBVVFCUkFGRUFVUUJSQUZFQVVRQlJBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUVjQVJ3QXJBQ3NBVndCWEFGY0FWd0JYQUZjQUt3QXJBRmNBVndCWEFGY0FWd0JYQUNzQUt3QlhBRmNBVndCWEFGY0FWd0FyQUNzQVZ3QlhBRmNBS3dBckFDc0FHZ0FiQUNVQUpRQWxBQnNBR3dBckFCNEFIZ0FlQUI0QUhnQWVBQjRBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBRUFBUUFCQUFRQUIwQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dCUUFGQUFLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FyQUNzQURRQU5BQTBBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0FyQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQlFBRkFBSGdBZUFCNEFLd0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQXJBQ3NBS3dBckFCNEFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBQkFBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFBUUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQUVBQVFBQkFBRUFBUUFLd0FyQUNzQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FEUUJRQUZBQVVBQlFBQ3NBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFBMEFVQUJRQUZBQVVBQlFBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFCNEFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBVUFBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBVUFCUUFDc0FLd0FyQUZBQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUEwQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFCNEFIZ0JRQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0FyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBVUFCUUFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFDc0FEUUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUNzQUt3QXJBQjRBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQUJBQUVBQVFBS3dBRUFBUUFLd0FyQUNzQUt3QXJBQVFBQkFBRUFBUUFVQUJRQUZBQVVBQXJBRkFBVUFCUUFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBS3dBckFDc0FCQUFFQUFRQUt3QXJBQ3NBS3dBRUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBRFFBTkFBMEFEUUFOQUEwQURRQU5BQjRBS3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFCNEFVQUJRQUZBQVVBQlFBRkFBVUFCUUFCNEFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBQkFBRUFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFBMEFEUUFOQUEwQURRQU5BQlFBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QU5BQTBBRFFBTkFBMEFEUUFOQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQUt3QXJBQ3NBS3dBckFDc0FIZ0FlQUI0QUhnQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQUVBQVFBQkFBRUFBUUFCQUFFQUEwQURRQWVBQjRBSGdBZUFCNEFLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FCQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFlQUI0QUhnQU5BQTBBRFFBTkFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBQ3NBS3dBckFDc0FLd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUNzQUt3QXJBQ3NBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUNzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QU5BQTBBRFFBTkFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUJBQWVBQTRBVUFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBRUFGQUFVQUJRQUZBQURRQU5BQjRBRFFBZUFBUUFCQUFFQUI0QUt3QXJBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBVUFBT0FGQUFEUUFOQUEwQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBTkFBMEFIZ0FOQUEwQUhnQUVBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQXJBRkFBS3dCUUFGQUFVQUJRQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUEwQUt3QXJBQ3NBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFLd0FyQUNzQUt3QXJBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBS3dBckFDc0FLd0FyQUNzQUJBQUVBQVFBQkFBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FVQUJRQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFBUUFCQUFFQUFRQUJBQXJBQ3NBQkFBRUFDc0FLd0FFQUFRQUJBQXJBQ3NBVUFBckFDc0FLd0FyQUNzQUt3QUVBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBQkFBRUFDc0FLd0FFQUFRQUJBQUVBQVFBQkFBRUFDc0FLd0FyQUFRQUJBQUVBQVFBQkFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FCQUFFQUFRQUJBQUVBQVFBQkFCUUFGQUFVQUJRQUEwQURRQU5BQTBBSGdCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFDc0FEUUFyQUI0QUt3QXJBQVFBQkFBRUFBUUFVQUJRQUI0QVVBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBRUFBUUFCQUFFQUFRQUJBQUVBQ3NBS3dBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBT0FBMEFEUUFUQUJNQUhnQWVBQjRBRFFBTkFBMEFEUUFOQUEwQURRQU5BQTBBRFFBTkFBMEFEUUFOQUEwQVVBQlFBRkFBVUFBRUFBUUFLd0FyQUFRQURRQU5BQjRBVUFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0FyQUNzQUt3QXJBQ3NBS3dBT0FBNEFEZ0FPQUE0QURnQU9BQTRBRGdBT0FBNEFEZ0FPQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFBckFDc0FLd0FxQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBckFDc0FLd0FyQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVhBQmNBQTBBRFFBTkFDb0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQUVBQVFBQkFBRUFBUUFCQUFFQUZBQUJBQUVBQVFBQkFBT0FCNEFEUUFOQUEwQURRQU9BQjRBQkFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBVUFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFVQUJRQUZBQVVBQXJBQ3NBVUFCUUFGQUFVQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBMEFEUUFOQUNzQURnQU9BQTRBRFFBTkFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFDc0FCQUFFQUFRQUJBQUVBQVFBQkFBRUFGQUFEUUFOQUEwQURRQU5BQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBT0FCTUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBckFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUNzQVVBQlFBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFFQUFRQUJBQUVBQVFBQkFBckFDc0FLd0FFQUNzQUJBQUVBQ3NBQkFBRUFBUUFCQUFFQUFRQUJBQlFBQVFBS3dBckFDc0FLd0FyQUNzQUt3QXJBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBS3dBckFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQUt3QXJBQ3NBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBRFFBTkFBMEFEUUFOQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBU0FCSUFFZ0FRd0JEQUVNQVVBQlFBRkFBVUFCREFGQUFVQUJRQUVnQVF3QklBRU1BVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBU0FCREFFTUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJJQUVNQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQUt3QXJBQ3NBS3dBTkFBMEFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBQVFBQkFBRUFBUUFCQUFOQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFFQUFRQUJBQUVBQVFBQkFBRUFBMEFEUUFOQUI0QUhnQWVBQjRBSGdBZUFGQUFVQUJRQUZBQURRQWVBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQVVBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FCQUFFQUFRQUJBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFFY0FSd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBQ3NBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQUt3QWVBQVFBQkFBTkFBUUFCQUFFQUFRQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FIZ0FlQUI0QUhnQWVBQjRBSGdBckFDc0FIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBQkFBRUFBUUFCQUFFQUI0QUhnQWVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFIZ0FlQUFRQUJBQUVBQVFBQkFBRUFBUUFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQUVBQVFBQkFBRUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQjRBSGdBRUFBUUFCQUFlQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQ3NBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FyQUZBQVVBQXJBQ3NBVUFBckFDc0FVQUJRQUNzQUt3QlFBRkFBVUFCUUFDc0FIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUt3QlFBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBckFGQUFVQUJRQUZBQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QWVBQjRBVUFCUUFGQUFVQUJRQUNzQVVBQXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQWVBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBS3dBckFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUI0QUhnQWVBQjRBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FFQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUJBQWVBQjRBRFFBTkFBMEFEUUFlQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFBUUFCQUFFQUFRQUJBQXJBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FCQUFFQUFRQUJBQUVBQVFBQkFBckFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBckFDc0FCQUFFQUFRQUJBQUVBQVFBQkFBckFBUUFCQUFyQUFRQUJBQUVBQVFBQkFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFBUUFCQUFFQUFRQUJBQUVBQVFBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBSGdBZUFCNEFIZ0FFQUFRQUJBQUVBQVFBQkFBRUFDc0FLd0FyQUNzQUt3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBQ3NBS3dBckFDc0FGZ0FXQUZBQVVBQlFBRkFBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFGQUFVQUFyQUZBQUt3QXJBRkFBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FVQUJRQUZBQVVBQXJBRkFBS3dCUUFDc0FLd0FyQUNzQUt3QXJBRkFBS3dBckFDc0FLd0JRQUNzQVVBQXJBRkFBS3dCUUFGQUFVQUFyQUZBQVVBQXJBRkFBS3dBckFGQUFLd0JRQUNzQVVBQXJBRkFBS3dCUUFDc0FVQUJRQUNzQVVBQXJBQ3NBVUFCUUFGQUFVQUFyQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0JRQUZBQVVBQlFBQ3NBVUFCUUFGQUFVQUFyQUZBQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQXJBRkFBVUFCUUFGQUFVQUFyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFCNEFIZ0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBVHdCUEFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUEFFOEFUd0FsQUNVQUpRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWVBQ1VBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSGdBZUFDVUFKUUFsQUNVQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ2tBS1FBcEFDa0FLUUFwQUNrQUtRQXBBQ2tBS1FBcEFDa0FLUUFwQUNrQUtRQXBBQ2tBS1FBcEFDa0FLUUFwQUNrQUtRQWxBQ1VBSlFBbEFDVUFJQUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQjRBSGdBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUhnQWVBQ1VBSlFBbEFDVUFKUUFlQUNVQUpRQWxBQ1VBSlFBZ0FDQUFJQUFsQUNVQUlBQWxBQ1VBSUFBZ0FDQUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUlRQWhBQ0VBSVFBaEFDVUFKUUFnQUNBQUpRQWxBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSUFBZ0FDQUFJQUFsQUNVQUpRQWxBQ0FBSlFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBbEFDVUFKUUFnQUNVQUpRQWxBQ1VBSUFBZ0FDQUFKUUFnQUNBQUlBQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFlQUNVQUhnQWxBQjRBSlFBbEFDVUFKUUFsQUNBQUpRQWxBQ1VBSlFBZUFDVUFIZ0FlQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSGdBZUFCNEFIZ0FlQUI0QUhnQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFJQUFnQUNVQUpRQWxBQ1VBSUFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSUFBbEFDVUFKUUFsQUNBQUlBQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFCNEFIZ0FlQUI0QUhnQWVBQ1VBSlFBbEFDVUFKUUFsQUNVQUlBQWdBQ0FBSlFBbEFDVUFJQUFnQUNBQUlBQWdBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFGd0FYQUJjQUZRQVZBQlVBSGdBZUFCNEFIZ0FsQUNVQUpRQWdBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUlBQWdBQ0FBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSUFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFJQUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FsQUNVQUpRQWxBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUpRQWxBQ1VBSlFBbEFDVUFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDQUFJQUFnQUNBQUlBQWxBQ0FBSUFBbEFDVUFKUUFsQUNVQUpRQWdBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSlFBbEFDVUFJQUFnQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNzQUt3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBckFBUUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQSc7XG5cbi8qKiovIH0pLFxuLyogNTAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX1BhdGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgQ2lyY2xlID0gZnVuY3Rpb24gQ2lyY2xlKHgsIHksIHJhZGl1cykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDaXJjbGUpO1xuXG4gICAgdGhpcy50eXBlID0gX1BhdGguUEFUSC5DSVJDTEU7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgIGlmICh0cnVlKSB7XG4gICAgICAgIGlmIChpc05hTih4KSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCB4IHZhbHVlIGdpdmVuIGZvciBDaXJjbGUnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNOYU4oeSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgeSB2YWx1ZSBnaXZlbiBmb3IgQ2lyY2xlJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzTmFOKHJhZGl1cykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgcmFkaXVzIHZhbHVlIGdpdmVuIGZvciBDaXJjbGUnKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IENpcmNsZTtcblxuLyoqKi8gfSksXG4vKiA1MSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfc2xpY2VkVG9BcnJheSA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0pIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfSByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IHJldHVybiBhcnI7IH0gZWxzZSBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSB7IHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7IH0gZWxzZSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9IH07IH0oKTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9Cb3VuZHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG52YXIgX0ZvbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI1KTtcblxudmFyIF9HcmFkaWVudCA9IF9fd2VicGFja19yZXF1aXJlX18oNTIpO1xuXG52YXIgX1RleHRDb250YWluZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpO1xuXG52YXIgX1RleHRDb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGV4dENvbnRhaW5lcik7XG5cbnZhciBfYmFja2dyb3VuZCA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cbnZhciBfYm9yZGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBSZW5kZXJlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZW5kZXJlcih0YXJnZXQsIG9wdGlvbnMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlbmRlcmVyKTtcblxuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGFyZ2V0LnJlbmRlcihvcHRpb25zKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoUmVuZGVyZXIsIFt7XG4gICAgICAgIGtleTogJ3JlbmRlck5vZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyTm9kZShjb250YWluZXIpIHtcbiAgICAgICAgICAgIGlmIChjb250YWluZXIuaXNWaXNpYmxlKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlck5vZGVCYWNrZ3JvdW5kQW5kQm9yZGVycyhjb250YWluZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyTm9kZUNvbnRlbnQoY29udGFpbmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyTm9kZUNvbnRlbnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyTm9kZUNvbnRlbnQoY29udGFpbmVyKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiBjYWxsYmFjaygpIHtcbiAgICAgICAgICAgICAgICBpZiAoY29udGFpbmVyLmNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBfVGV4dENvbnRhaW5lcjIuZGVmYXVsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdHlsZSA9IGNoaWxkLnBhcmVudC5zdHlsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy50YXJnZXQucmVuZGVyVGV4dE5vZGUoY2hpbGQuYm91bmRzLCBzdHlsZS5jb2xvciwgc3R5bGUuZm9udCwgc3R5bGUudGV4dERlY29yYXRpb24sIHN0eWxlLnRleHRTaGFkb3cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy50YXJnZXQuZHJhd1NoYXBlKGNoaWxkLCBjb250YWluZXIuc3R5bGUuY29sb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoY29udGFpbmVyLmltYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfaW1hZ2UgPSBfdGhpcy5vcHRpb25zLmltYWdlU3RvcmUuZ2V0KGNvbnRhaW5lci5pbWFnZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfaW1hZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb250ZW50Qm94ID0gKDAsIF9Cb3VuZHMuY2FsY3VsYXRlQ29udGVudEJveCkoY29udGFpbmVyLmJvdW5kcywgY29udGFpbmVyLnN0eWxlLnBhZGRpbmcsIGNvbnRhaW5lci5zdHlsZS5ib3JkZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF93aWR0aCA9IHR5cGVvZiBfaW1hZ2Uud2lkdGggPT09ICdudW1iZXInICYmIF9pbWFnZS53aWR0aCA+IDAgPyBfaW1hZ2Uud2lkdGggOiBjb250ZW50Qm94LndpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9oZWlnaHQgPSB0eXBlb2YgX2ltYWdlLmhlaWdodCA9PT0gJ251bWJlcicgJiYgX2ltYWdlLmhlaWdodCA+IDAgPyBfaW1hZ2UuaGVpZ2h0IDogY29udGVudEJveC5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3dpZHRoID4gMCAmJiBfaGVpZ2h0ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnRhcmdldC5jbGlwKFsoMCwgX0JvdW5kcy5jYWxjdWxhdGVQYWRkaW5nQm94UGF0aCkoY29udGFpbmVyLmN1cnZlZEJvdW5kcyldLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnRhcmdldC5kcmF3SW1hZ2UoX2ltYWdlLCBuZXcgX0JvdW5kcy5Cb3VuZHMoMCwgMCwgX3dpZHRoLCBfaGVpZ2h0KSwgY29udGVudEJveCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIHBhdGhzID0gY29udGFpbmVyLmdldENsaXBQYXRocygpO1xuICAgICAgICAgICAgaWYgKHBhdGhzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LmNsaXAocGF0aHMsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyTm9kZUJhY2tncm91bmRBbmRCb3JkZXJzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlck5vZGVCYWNrZ3JvdW5kQW5kQm9yZGVycyhjb250YWluZXIpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgSEFTX0JBQ0tHUk9VTkQgPSAhY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmQuYmFja2dyb3VuZENvbG9yLmlzVHJhbnNwYXJlbnQoKSB8fCBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZC5iYWNrZ3JvdW5kSW1hZ2UubGVuZ3RoO1xuXG4gICAgICAgICAgICB2YXIgaGFzUmVuZGVyYWJsZUJvcmRlcnMgPSBjb250YWluZXIuc3R5bGUuYm9yZGVyLnNvbWUoZnVuY3Rpb24gKGJvcmRlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBib3JkZXIuYm9yZGVyU3R5bGUgIT09IF9ib3JkZXIuQk9SREVSX1NUWUxFLk5PTkUgJiYgIWJvcmRlci5ib3JkZXJDb2xvci5pc1RyYW5zcGFyZW50KCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJhY2tncm91bmRQYWludGluZ0FyZWEgPSAoMCwgX2JhY2tncm91bmQuY2FsY3VsYXRlQmFja2dyb3VuZ1BhaW50aW5nQXJlYSkoY29udGFpbmVyLmN1cnZlZEJvdW5kcywgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmQuYmFja2dyb3VuZENsaXApO1xuXG4gICAgICAgICAgICAgICAgaWYgKEhBU19CQUNLR1JPVU5EKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzMi50YXJnZXQuY2xpcChbYmFja2dyb3VuZFBhaW50aW5nQXJlYV0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmQuYmFja2dyb3VuZENvbG9yLmlzVHJhbnNwYXJlbnQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMi50YXJnZXQuZmlsbChjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZC5iYWNrZ3JvdW5kQ29sb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczIucmVuZGVyQmFja2dyb3VuZEltYWdlKGNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5ib3JkZXIuZm9yRWFjaChmdW5jdGlvbiAoYm9yZGVyLCBzaWRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChib3JkZXIuYm9yZGVyU3R5bGUgIT09IF9ib3JkZXIuQk9SREVSX1NUWUxFLk5PTkUgJiYgIWJvcmRlci5ib3JkZXJDb2xvci5pc1RyYW5zcGFyZW50KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMi5yZW5kZXJCb3JkZXIoYm9yZGVyLCBzaWRlLCBjb250YWluZXIuY3VydmVkQm91bmRzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKEhBU19CQUNLR1JPVU5EIHx8IGhhc1JlbmRlcmFibGVCb3JkZXJzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhdGhzID0gY29udGFpbmVyLnBhcmVudCA/IGNvbnRhaW5lci5wYXJlbnQuZ2V0Q2xpcFBhdGhzKCkgOiBbXTtcbiAgICAgICAgICAgICAgICBpZiAocGF0aHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LmNsaXAocGF0aHMsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyQmFja2dyb3VuZEltYWdlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckJhY2tncm91bmRJbWFnZShjb250YWluZXIpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgICAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZC5iYWNrZ3JvdW5kSW1hZ2Uuc2xpY2UoMCkucmV2ZXJzZSgpLmZvckVhY2goZnVuY3Rpb24gKGJhY2tncm91bmRJbWFnZSkge1xuICAgICAgICAgICAgICAgIGlmIChiYWNrZ3JvdW5kSW1hZ2Uuc291cmNlLm1ldGhvZCA9PT0gJ3VybCcgJiYgYmFja2dyb3VuZEltYWdlLnNvdXJjZS5hcmdzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpczMucmVuZGVyQmFja2dyb3VuZFJlcGVhdChjb250YWluZXIsIGJhY2tncm91bmRJbWFnZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICgvZ3JhZGllbnQvaS50ZXN0KGJhY2tncm91bmRJbWFnZS5zb3VyY2UubWV0aG9kKSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpczMucmVuZGVyQmFja2dyb3VuZEdyYWRpZW50KGNvbnRhaW5lciwgYmFja2dyb3VuZEltYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyQmFja2dyb3VuZFJlcGVhdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJCYWNrZ3JvdW5kUmVwZWF0KGNvbnRhaW5lciwgYmFja2dyb3VuZCkge1xuICAgICAgICAgICAgdmFyIGltYWdlID0gdGhpcy5vcHRpb25zLmltYWdlU3RvcmUuZ2V0KGJhY2tncm91bmQuc291cmNlLmFyZ3NbMF0pO1xuICAgICAgICAgICAgaWYgKGltYWdlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEgPSAoMCwgX2JhY2tncm91bmQuY2FsY3VsYXRlQmFja2dyb3VuZ1Bvc2l0aW9uaW5nQXJlYSkoY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmQuYmFja2dyb3VuZE9yaWdpbiwgY29udGFpbmVyLmJvdW5kcywgY29udGFpbmVyLnN0eWxlLnBhZGRpbmcsIGNvbnRhaW5lci5zdHlsZS5ib3JkZXIpO1xuICAgICAgICAgICAgICAgIHZhciBiYWNrZ3JvdW5kSW1hZ2VTaXplID0gKDAsIF9iYWNrZ3JvdW5kLmNhbGN1bGF0ZUJhY2tncm91bmRTaXplKShiYWNrZ3JvdW5kLCBpbWFnZSwgYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYSk7XG4gICAgICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gKDAsIF9iYWNrZ3JvdW5kLmNhbGN1bGF0ZUJhY2tncm91bmRQb3NpdGlvbikoYmFja2dyb3VuZC5wb3NpdGlvbiwgYmFja2dyb3VuZEltYWdlU2l6ZSwgYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYSk7XG4gICAgICAgICAgICAgICAgdmFyIF9wYXRoID0gKDAsIF9iYWNrZ3JvdW5kLmNhbGN1bGF0ZUJhY2tncm91bmRSZXBlYXRQYXRoKShiYWNrZ3JvdW5kLCBwb3NpdGlvbiwgYmFja2dyb3VuZEltYWdlU2l6ZSwgYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYSwgY29udGFpbmVyLmJvdW5kcyk7XG5cbiAgICAgICAgICAgICAgICB2YXIgX29mZnNldFggPSBNYXRoLnJvdW5kKGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEubGVmdCArIHBvc2l0aW9uLngpO1xuICAgICAgICAgICAgICAgIHZhciBfb2Zmc2V0WSA9IE1hdGgucm91bmQoYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYS50b3AgKyBwb3NpdGlvbi55KTtcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5yZW5kZXJSZXBlYXQoX3BhdGgsIGltYWdlLCBiYWNrZ3JvdW5kSW1hZ2VTaXplLCBfb2Zmc2V0WCwgX29mZnNldFkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXJCYWNrZ3JvdW5kR3JhZGllbnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyQmFja2dyb3VuZEdyYWRpZW50KGNvbnRhaW5lciwgYmFja2dyb3VuZCkge1xuICAgICAgICAgICAgdmFyIGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEgPSAoMCwgX2JhY2tncm91bmQuY2FsY3VsYXRlQmFja2dyb3VuZ1Bvc2l0aW9uaW5nQXJlYSkoY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmQuYmFja2dyb3VuZE9yaWdpbiwgY29udGFpbmVyLmJvdW5kcywgY29udGFpbmVyLnN0eWxlLnBhZGRpbmcsIGNvbnRhaW5lci5zdHlsZS5ib3JkZXIpO1xuICAgICAgICAgICAgdmFyIGJhY2tncm91bmRJbWFnZVNpemUgPSAoMCwgX2JhY2tncm91bmQuY2FsY3VsYXRlR3JhZGllbnRCYWNrZ3JvdW5kU2l6ZSkoYmFja2dyb3VuZCwgYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYSk7XG4gICAgICAgICAgICB2YXIgcG9zaXRpb24gPSAoMCwgX2JhY2tncm91bmQuY2FsY3VsYXRlQmFja2dyb3VuZFBvc2l0aW9uKShiYWNrZ3JvdW5kLnBvc2l0aW9uLCBiYWNrZ3JvdW5kSW1hZ2VTaXplLCBiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhKTtcbiAgICAgICAgICAgIHZhciBncmFkaWVudEJvdW5kcyA9IG5ldyBfQm91bmRzLkJvdW5kcyhNYXRoLnJvdW5kKGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEubGVmdCArIHBvc2l0aW9uLngpLCBNYXRoLnJvdW5kKGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEudG9wICsgcG9zaXRpb24ueSksIGJhY2tncm91bmRJbWFnZVNpemUud2lkdGgsIGJhY2tncm91bmRJbWFnZVNpemUuaGVpZ2h0KTtcblxuICAgICAgICAgICAgdmFyIGdyYWRpZW50ID0gKDAsIF9HcmFkaWVudC5wYXJzZUdyYWRpZW50KShjb250YWluZXIsIGJhY2tncm91bmQuc291cmNlLCBncmFkaWVudEJvdW5kcyk7XG4gICAgICAgICAgICBpZiAoZ3JhZGllbnQpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGdyYWRpZW50LnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBfR3JhZGllbnQuR1JBRElFTlRfVFlQRS5MSU5FQVJfR1JBRElFTlQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5yZW5kZXJMaW5lYXJHcmFkaWVudChncmFkaWVudEJvdW5kcywgZ3JhZGllbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgX0dyYWRpZW50LkdSQURJRU5UX1RZUEUuUkFESUFMX0dSQURJRU5UOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YXJnZXQucmVuZGVyUmFkaWFsR3JhZGllbnQoZ3JhZGllbnRCb3VuZHMsIGdyYWRpZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyQm9yZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckJvcmRlcihib3JkZXIsIHNpZGUsIGN1cnZlUG9pbnRzKSB7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC5kcmF3U2hhcGUoKDAsIF9Cb3VuZHMucGFyc2VQYXRoRm9yQm9yZGVyKShjdXJ2ZVBvaW50cywgc2lkZSksIGJvcmRlci5ib3JkZXJDb2xvcik7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlclN0YWNrJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlclN0YWNrKHN0YWNrKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgICAgICAgaWYgKHN0YWNrLmNvbnRhaW5lci5pc1Zpc2libGUoKSkge1xuICAgICAgICAgICAgICAgIHZhciBfb3BhY2l0eSA9IHN0YWNrLmdldE9wYWNpdHkoKTtcbiAgICAgICAgICAgICAgICBpZiAoX29wYWNpdHkgIT09IHRoaXMuX29wYWNpdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YXJnZXQuc2V0T3BhY2l0eShzdGFjay5nZXRPcGFjaXR5KCkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9vcGFjaXR5ID0gX29wYWNpdHk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIF90cmFuc2Zvcm0gPSBzdGFjay5jb250YWluZXIuc3R5bGUudHJhbnNmb3JtO1xuICAgICAgICAgICAgICAgIGlmIChfdHJhbnNmb3JtICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LnRyYW5zZm9ybShzdGFjay5jb250YWluZXIuYm91bmRzLmxlZnQgKyBfdHJhbnNmb3JtLnRyYW5zZm9ybU9yaWdpblswXS52YWx1ZSwgc3RhY2suY29udGFpbmVyLmJvdW5kcy50b3AgKyBfdHJhbnNmb3JtLnRyYW5zZm9ybU9yaWdpblsxXS52YWx1ZSwgX3RyYW5zZm9ybS50cmFuc2Zvcm0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczQucmVuZGVyU3RhY2tDb250ZW50KHN0YWNrKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJTdGFja0NvbnRlbnQoc3RhY2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyU3RhY2tDb250ZW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlclN0YWNrQ29udGVudChzdGFjaykge1xuICAgICAgICAgICAgdmFyIF9zcGxpdFN0YWNraW5nQ29udGV4dCA9IHNwbGl0U3RhY2tpbmdDb250ZXh0cyhzdGFjayksXG4gICAgICAgICAgICAgICAgX3NwbGl0U3RhY2tpbmdDb250ZXh0MiA9IF9zbGljZWRUb0FycmF5KF9zcGxpdFN0YWNraW5nQ29udGV4dCwgNSksXG4gICAgICAgICAgICAgICAgbmVnYXRpdmVaSW5kZXggPSBfc3BsaXRTdGFja2luZ0NvbnRleHQyWzBdLFxuICAgICAgICAgICAgICAgIHplcm9PckF1dG9aSW5kZXhPclRyYW5zZm9ybWVkT3JPcGFjaXR5ID0gX3NwbGl0U3RhY2tpbmdDb250ZXh0MlsxXSxcbiAgICAgICAgICAgICAgICBwb3NpdGl2ZVpJbmRleCA9IF9zcGxpdFN0YWNraW5nQ29udGV4dDJbMl0sXG4gICAgICAgICAgICAgICAgbm9uUG9zaXRpb25lZEZsb2F0cyA9IF9zcGxpdFN0YWNraW5nQ29udGV4dDJbM10sXG4gICAgICAgICAgICAgICAgbm9uUG9zaXRpb25lZElubGluZUxldmVsID0gX3NwbGl0U3RhY2tpbmdDb250ZXh0Mls0XTtcblxuICAgICAgICAgICAgdmFyIF9zcGxpdERlc2NlbmRhbnRzID0gc3BsaXREZXNjZW5kYW50cyhzdGFjayksXG4gICAgICAgICAgICAgICAgX3NwbGl0RGVzY2VuZGFudHMyID0gX3NsaWNlZFRvQXJyYXkoX3NwbGl0RGVzY2VuZGFudHMsIDIpLFxuICAgICAgICAgICAgICAgIGlubGluZUxldmVsID0gX3NwbGl0RGVzY2VuZGFudHMyWzBdLFxuICAgICAgICAgICAgICAgIG5vbklubGluZUxldmVsID0gX3NwbGl0RGVzY2VuZGFudHMyWzFdO1xuXG4gICAgICAgICAgICAvLyBodHRwczovL3d3dy53My5vcmcvVFIvY3NzLXBvc2l0aW9uLTMvI3BhaW50aW5nLW9yZGVyXG4gICAgICAgICAgICAvLyAxLiB0aGUgYmFja2dyb3VuZCBhbmQgYm9yZGVycyBvZiB0aGUgZWxlbWVudCBmb3JtaW5nIHRoZSBzdGFja2luZyBjb250ZXh0LlxuXG5cbiAgICAgICAgICAgIHRoaXMucmVuZGVyTm9kZUJhY2tncm91bmRBbmRCb3JkZXJzKHN0YWNrLmNvbnRhaW5lcik7XG4gICAgICAgICAgICAvLyAyLiB0aGUgY2hpbGQgc3RhY2tpbmcgY29udGV4dHMgd2l0aCBuZWdhdGl2ZSBzdGFjayBsZXZlbHMgKG1vc3QgbmVnYXRpdmUgZmlyc3QpLlxuICAgICAgICAgICAgbmVnYXRpdmVaSW5kZXguc29ydChzb3J0QnlaSW5kZXgpLmZvckVhY2godGhpcy5yZW5kZXJTdGFjaywgdGhpcyk7XG4gICAgICAgICAgICAvLyAzLiBGb3IgYWxsIGl0cyBpbi1mbG93LCBub24tcG9zaXRpb25lZCwgYmxvY2stbGV2ZWwgZGVzY2VuZGFudHMgaW4gdHJlZSBvcmRlcjpcbiAgICAgICAgICAgIHRoaXMucmVuZGVyTm9kZUNvbnRlbnQoc3RhY2suY29udGFpbmVyKTtcbiAgICAgICAgICAgIG5vbklubGluZUxldmVsLmZvckVhY2godGhpcy5yZW5kZXJOb2RlLCB0aGlzKTtcbiAgICAgICAgICAgIC8vIDQuIEFsbCBub24tcG9zaXRpb25lZCBmbG9hdGluZyBkZXNjZW5kYW50cywgaW4gdHJlZSBvcmRlci4gRm9yIGVhY2ggb25lIG9mIHRoZXNlLFxuICAgICAgICAgICAgLy8gdHJlYXQgdGhlIGVsZW1lbnQgYXMgaWYgaXQgY3JlYXRlZCBhIG5ldyBzdGFja2luZyBjb250ZXh0LCBidXQgYW55IHBvc2l0aW9uZWQgZGVzY2VuZGFudHMgYW5kIGRlc2NlbmRhbnRzXG4gICAgICAgICAgICAvLyB3aGljaCBhY3R1YWxseSBjcmVhdGUgYSBuZXcgc3RhY2tpbmcgY29udGV4dCBzaG91bGQgYmUgY29uc2lkZXJlZCBwYXJ0IG9mIHRoZSBwYXJlbnQgc3RhY2tpbmcgY29udGV4dCxcbiAgICAgICAgICAgIC8vIG5vdCB0aGlzIG5ldyBvbmUuXG4gICAgICAgICAgICBub25Qb3NpdGlvbmVkRmxvYXRzLmZvckVhY2godGhpcy5yZW5kZXJTdGFjaywgdGhpcyk7XG4gICAgICAgICAgICAvLyA1LiB0aGUgaW4tZmxvdywgaW5saW5lLWxldmVsLCBub24tcG9zaXRpb25lZCBkZXNjZW5kYW50cywgaW5jbHVkaW5nIGlubGluZSB0YWJsZXMgYW5kIGlubGluZSBibG9ja3MuXG4gICAgICAgICAgICBub25Qb3NpdGlvbmVkSW5saW5lTGV2ZWwuZm9yRWFjaCh0aGlzLnJlbmRlclN0YWNrLCB0aGlzKTtcbiAgICAgICAgICAgIGlubGluZUxldmVsLmZvckVhY2godGhpcy5yZW5kZXJOb2RlLCB0aGlzKTtcbiAgICAgICAgICAgIC8vIDYuIEFsbCBwb3NpdGlvbmVkLCBvcGFjaXR5IG9yIHRyYW5zZm9ybSBkZXNjZW5kYW50cywgaW4gdHJlZSBvcmRlciB0aGF0IGZhbGwgaW50byB0aGUgZm9sbG93aW5nIGNhdGVnb3JpZXM6XG4gICAgICAgICAgICAvLyAgQWxsIHBvc2l0aW9uZWQgZGVzY2VuZGFudHMgd2l0aCAnei1pbmRleDogYXV0bycgb3IgJ3otaW5kZXg6IDAnLCBpbiB0cmVlIG9yZGVyLlxuICAgICAgICAgICAgLy8gIEZvciB0aG9zZSB3aXRoICd6LWluZGV4OiBhdXRvJywgdHJlYXQgdGhlIGVsZW1lbnQgYXMgaWYgaXQgY3JlYXRlZCBhIG5ldyBzdGFja2luZyBjb250ZXh0LFxuICAgICAgICAgICAgLy8gIGJ1dCBhbnkgcG9zaXRpb25lZCBkZXNjZW5kYW50cyBhbmQgZGVzY2VuZGFudHMgd2hpY2ggYWN0dWFsbHkgY3JlYXRlIGEgbmV3IHN0YWNraW5nIGNvbnRleHQgc2hvdWxkIGJlXG4gICAgICAgICAgICAvLyAgY29uc2lkZXJlZCBwYXJ0IG9mIHRoZSBwYXJlbnQgc3RhY2tpbmcgY29udGV4dCwgbm90IHRoaXMgbmV3IG9uZS4gRm9yIHRob3NlIHdpdGggJ3otaW5kZXg6IDAnLFxuICAgICAgICAgICAgLy8gIHRyZWF0IHRoZSBzdGFja2luZyBjb250ZXh0IGdlbmVyYXRlZCBhdG9taWNhbGx5LlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vICBBbGwgb3BhY2l0eSBkZXNjZW5kYW50cyB3aXRoIG9wYWNpdHkgbGVzcyB0aGFuIDFcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgQWxsIHRyYW5zZm9ybSBkZXNjZW5kYW50cyB3aXRoIHRyYW5zZm9ybSBvdGhlciB0aGFuIG5vbmVcbiAgICAgICAgICAgIHplcm9PckF1dG9aSW5kZXhPclRyYW5zZm9ybWVkT3JPcGFjaXR5LmZvckVhY2godGhpcy5yZW5kZXJTdGFjaywgdGhpcyk7XG4gICAgICAgICAgICAvLyA3LiBTdGFja2luZyBjb250ZXh0cyBmb3JtZWQgYnkgcG9zaXRpb25lZCBkZXNjZW5kYW50cyB3aXRoIHotaW5kaWNlcyBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gMSBpbiB6LWluZGV4XG4gICAgICAgICAgICAvLyBvcmRlciAoc21hbGxlc3QgZmlyc3QpIHRoZW4gdHJlZSBvcmRlci5cbiAgICAgICAgICAgIHBvc2l0aXZlWkluZGV4LnNvcnQoc29ydEJ5WkluZGV4KS5mb3JFYWNoKHRoaXMucmVuZGVyU3RhY2ssIHRoaXMpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKHN0YWNrKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5yZWN0YW5nbGUodGhpcy5vcHRpb25zLngsIHRoaXMub3B0aW9ucy55LCB0aGlzLm9wdGlvbnMud2lkdGgsIHRoaXMub3B0aW9ucy5oZWlnaHQsIHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZW5kZXJTdGFjayhzdGFjayk7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcy50YXJnZXQuZ2V0VGFyZ2V0KCk7XG4gICAgICAgICAgICBpZiAodHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQudGhlbihmdW5jdGlvbiAob3V0cHV0KSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzNS5vcHRpb25zLmxvZ2dlci5sb2coJ1JlbmRlciBjb21wbGV0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gUmVuZGVyZXI7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFJlbmRlcmVyO1xuXG5cbnZhciBzcGxpdERlc2NlbmRhbnRzID0gZnVuY3Rpb24gc3BsaXREZXNjZW5kYW50cyhzdGFjaykge1xuICAgIHZhciBpbmxpbmVMZXZlbCA9IFtdO1xuICAgIHZhciBub25JbmxpbmVMZXZlbCA9IFtdO1xuXG4gICAgdmFyIGxlbmd0aCA9IHN0YWNrLmNoaWxkcmVuLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IHN0YWNrLmNoaWxkcmVuW2ldO1xuICAgICAgICBpZiAoY2hpbGQuaXNJbmxpbmVMZXZlbCgpKSB7XG4gICAgICAgICAgICBpbmxpbmVMZXZlbC5wdXNoKGNoaWxkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vbklubGluZUxldmVsLnB1c2goY2hpbGQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbaW5saW5lTGV2ZWwsIG5vbklubGluZUxldmVsXTtcbn07XG5cbnZhciBzcGxpdFN0YWNraW5nQ29udGV4dHMgPSBmdW5jdGlvbiBzcGxpdFN0YWNraW5nQ29udGV4dHMoc3RhY2spIHtcbiAgICB2YXIgbmVnYXRpdmVaSW5kZXggPSBbXTtcbiAgICB2YXIgemVyb09yQXV0b1pJbmRleE9yVHJhbnNmb3JtZWRPck9wYWNpdHkgPSBbXTtcbiAgICB2YXIgcG9zaXRpdmVaSW5kZXggPSBbXTtcbiAgICB2YXIgbm9uUG9zaXRpb25lZEZsb2F0cyA9IFtdO1xuICAgIHZhciBub25Qb3NpdGlvbmVkSW5saW5lTGV2ZWwgPSBbXTtcbiAgICB2YXIgbGVuZ3RoID0gc3RhY2suY29udGV4dHMubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoaWxkID0gc3RhY2suY29udGV4dHNbaV07XG4gICAgICAgIGlmIChjaGlsZC5jb250YWluZXIuaXNQb3NpdGlvbmVkKCkgfHwgY2hpbGQuY29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPCAxIHx8IGNoaWxkLmNvbnRhaW5lci5pc1RyYW5zZm9ybWVkKCkpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZC5jb250YWluZXIuc3R5bGUuekluZGV4Lm9yZGVyIDwgMCkge1xuICAgICAgICAgICAgICAgIG5lZ2F0aXZlWkluZGV4LnB1c2goY2hpbGQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjaGlsZC5jb250YWluZXIuc3R5bGUuekluZGV4Lm9yZGVyID4gMCkge1xuICAgICAgICAgICAgICAgIHBvc2l0aXZlWkluZGV4LnB1c2goY2hpbGQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB6ZXJvT3JBdXRvWkluZGV4T3JUcmFuc2Zvcm1lZE9yT3BhY2l0eS5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjaGlsZC5jb250YWluZXIuaXNGbG9hdGluZygpKSB7XG4gICAgICAgICAgICAgICAgbm9uUG9zaXRpb25lZEZsb2F0cy5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbm9uUG9zaXRpb25lZElubGluZUxldmVsLnB1c2goY2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbbmVnYXRpdmVaSW5kZXgsIHplcm9PckF1dG9aSW5kZXhPclRyYW5zZm9ybWVkT3JPcGFjaXR5LCBwb3NpdGl2ZVpJbmRleCwgbm9uUG9zaXRpb25lZEZsb2F0cywgbm9uUG9zaXRpb25lZElubGluZUxldmVsXTtcbn07XG5cbnZhciBzb3J0QnlaSW5kZXggPSBmdW5jdGlvbiBzb3J0QnlaSW5kZXgoYSwgYikge1xuICAgIGlmIChhLmNvbnRhaW5lci5zdHlsZS56SW5kZXgub3JkZXIgPiBiLmNvbnRhaW5lci5zdHlsZS56SW5kZXgub3JkZXIpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChhLmNvbnRhaW5lci5zdHlsZS56SW5kZXgub3JkZXIgPCBiLmNvbnRhaW5lci5zdHlsZS56SW5kZXgub3JkZXIpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIHJldHVybiBhLmNvbnRhaW5lci5pbmRleCA+IGIuY29udGFpbmVyLmluZGV4ID8gMSA6IC0xO1xufTtcblxuLyoqKi8gfSksXG4vKiA1MiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnRyYW5zZm9ybVdlYmtpdFJhZGlhbEdyYWRpZW50QXJncyA9IGV4cG9ydHMucGFyc2VHcmFkaWVudCA9IGV4cG9ydHMuUmFkaWFsR3JhZGllbnQgPSBleHBvcnRzLkxpbmVhckdyYWRpZW50ID0gZXhwb3J0cy5SQURJQUxfR1JBRElFTlRfU0hBUEUgPSBleHBvcnRzLkdSQURJRU5UX1RZUEUgPSB1bmRlZmluZWQ7XG5cbnZhciBfc2xpY2VkVG9BcnJheSA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0pIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfSByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IHJldHVybiBhcnI7IH0gZWxzZSBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSB7IHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7IH0gZWxzZSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9IH07IH0oKTtcblxudmFyIF9Ob2RlQ29udGFpbmVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblxudmFyIF9Ob2RlQ29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX05vZGVDb250YWluZXIpO1xuXG52YXIgX0FuZ2xlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1Myk7XG5cbnZhciBfQ29sb3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgX0NvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvbG9yKTtcblxudmFyIF9MZW5ndGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG52YXIgX0xlbmd0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MZW5ndGgpO1xuXG52YXIgX1V0aWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgU0lERV9PUl9DT1JORVIgPSAvXih0byApPyhsZWZ0fHRvcHxyaWdodHxib3R0b20pKCAobGVmdHx0b3B8cmlnaHR8Ym90dG9tKSk/JC9pO1xudmFyIFBFUkNFTlRBR0VfQU5HTEVTID0gL14oWystXT9cXGQqXFwuP1xcZCspJSAoWystXT9cXGQqXFwuP1xcZCspJSQvaTtcbnZhciBFTkRTX1dJVEhfTEVOR1RIID0gLyhweCl8JXwoIDApJC9pO1xudmFyIEZST01fVE9fQ09MT1JTVE9QID0gL14oZnJvbXx0b3xjb2xvci1zdG9wKVxcKCg/OihbXFxkLl0rKSglKT8sXFxzKik/KC4rPylcXCkkL2k7XG52YXIgUkFESUFMX1NIQVBFX0RFRklOSVRJT04gPSAvXlxccyooY2lyY2xlfGVsbGlwc2UpP1xccyooKD86KFtcXGQuXSspKHB4fHI/ZW18JSlcXHMqKD86KFtcXGQuXSspKHB4fHI/ZW18JSkpPyl8Y2xvc2VzdC1zaWRlfGNsb3Nlc3QtY29ybmVyfGZhcnRoZXN0LXNpZGV8ZmFydGhlc3QtY29ybmVyKT9cXHMqKD86YXRcXHMqKD86KGxlZnR8Y2VudGVyfHJpZ2h0KXwoW1xcZC5dKykocHh8cj9lbXwlKSlcXHMrKD86KHRvcHxjZW50ZXJ8Ym90dG9tKXwoW1xcZC5dKykocHh8cj9lbXwlKSkpPyg/Olxcc3wkKS9pO1xuXG52YXIgR1JBRElFTlRfVFlQRSA9IGV4cG9ydHMuR1JBRElFTlRfVFlQRSA9IHtcbiAgICBMSU5FQVJfR1JBRElFTlQ6IDAsXG4gICAgUkFESUFMX0dSQURJRU5UOiAxXG59O1xuXG52YXIgUkFESUFMX0dSQURJRU5UX1NIQVBFID0gZXhwb3J0cy5SQURJQUxfR1JBRElFTlRfU0hBUEUgPSB7XG4gICAgQ0lSQ0xFOiAwLFxuICAgIEVMTElQU0U6IDFcbn07XG5cbnZhciBMRU5HVEhfRk9SX1BPU0lUSU9OID0ge1xuICAgIGxlZnQ6IG5ldyBfTGVuZ3RoMi5kZWZhdWx0KCcwJScpLFxuICAgIHRvcDogbmV3IF9MZW5ndGgyLmRlZmF1bHQoJzAlJyksXG4gICAgY2VudGVyOiBuZXcgX0xlbmd0aDIuZGVmYXVsdCgnNTAlJyksXG4gICAgcmlnaHQ6IG5ldyBfTGVuZ3RoMi5kZWZhdWx0KCcxMDAlJyksXG4gICAgYm90dG9tOiBuZXcgX0xlbmd0aDIuZGVmYXVsdCgnMTAwJScpXG59O1xuXG52YXIgTGluZWFyR3JhZGllbnQgPSBleHBvcnRzLkxpbmVhckdyYWRpZW50ID0gZnVuY3Rpb24gTGluZWFyR3JhZGllbnQoY29sb3JTdG9wcywgZGlyZWN0aW9uKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExpbmVhckdyYWRpZW50KTtcblxuICAgIHRoaXMudHlwZSA9IEdSQURJRU5UX1RZUEUuTElORUFSX0dSQURJRU5UO1xuICAgIHRoaXMuY29sb3JTdG9wcyA9IGNvbG9yU3RvcHM7XG4gICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG59O1xuXG52YXIgUmFkaWFsR3JhZGllbnQgPSBleHBvcnRzLlJhZGlhbEdyYWRpZW50ID0gZnVuY3Rpb24gUmFkaWFsR3JhZGllbnQoY29sb3JTdG9wcywgc2hhcGUsIGNlbnRlciwgcmFkaXVzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJhZGlhbEdyYWRpZW50KTtcblxuICAgIHRoaXMudHlwZSA9IEdSQURJRU5UX1RZUEUuUkFESUFMX0dSQURJRU5UO1xuICAgIHRoaXMuY29sb3JTdG9wcyA9IGNvbG9yU3RvcHM7XG4gICAgdGhpcy5zaGFwZSA9IHNoYXBlO1xuICAgIHRoaXMuY2VudGVyID0gY2VudGVyO1xuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xufTtcblxudmFyIHBhcnNlR3JhZGllbnQgPSBleHBvcnRzLnBhcnNlR3JhZGllbnQgPSBmdW5jdGlvbiBwYXJzZUdyYWRpZW50KGNvbnRhaW5lciwgX3JlZiwgYm91bmRzKSB7XG4gICAgdmFyIGFyZ3MgPSBfcmVmLmFyZ3MsXG4gICAgICAgIG1ldGhvZCA9IF9yZWYubWV0aG9kLFxuICAgICAgICBwcmVmaXggPSBfcmVmLnByZWZpeDtcblxuICAgIGlmIChtZXRob2QgPT09ICdsaW5lYXItZ3JhZGllbnQnKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUxpbmVhckdyYWRpZW50KGFyZ3MsIGJvdW5kcywgISFwcmVmaXgpO1xuICAgIH0gZWxzZSBpZiAobWV0aG9kID09PSAnZ3JhZGllbnQnICYmIGFyZ3NbMF0gPT09ICdsaW5lYXInKSB7XG4gICAgICAgIC8vIFRPRE8gaGFuZGxlIGNvcnJlY3QgYW5nbGVcbiAgICAgICAgcmV0dXJuIHBhcnNlTGluZWFyR3JhZGllbnQoWyd0byBib3R0b20nXS5jb25jYXQodHJhbnNmb3JtT2Jzb2xldGVDb2xvclN0b3BzKGFyZ3Muc2xpY2UoMykpKSwgYm91bmRzLCAhIXByZWZpeCk7XG4gICAgfSBlbHNlIGlmIChtZXRob2QgPT09ICdyYWRpYWwtZ3JhZGllbnQnKSB7XG4gICAgICAgIHJldHVybiBwYXJzZVJhZGlhbEdyYWRpZW50KGNvbnRhaW5lciwgcHJlZml4ID09PSAnLXdlYmtpdC0nID8gdHJhbnNmb3JtV2Via2l0UmFkaWFsR3JhZGllbnRBcmdzKGFyZ3MpIDogYXJncywgYm91bmRzKTtcbiAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gJ2dyYWRpZW50JyAmJiBhcmdzWzBdID09PSAncmFkaWFsJykge1xuICAgICAgICByZXR1cm4gcGFyc2VSYWRpYWxHcmFkaWVudChjb250YWluZXIsIHRyYW5zZm9ybU9ic29sZXRlQ29sb3JTdG9wcyh0cmFuc2Zvcm1XZWJraXRSYWRpYWxHcmFkaWVudEFyZ3MoYXJncy5zbGljZSgxKSkpLCBib3VuZHMpO1xuICAgIH1cbn07XG5cbnZhciBwYXJzZUNvbG9yU3RvcHMgPSBmdW5jdGlvbiBwYXJzZUNvbG9yU3RvcHMoYXJncywgZmlyc3RDb2xvclN0b3BJbmRleCwgbGluZUxlbmd0aCkge1xuICAgIHZhciBjb2xvclN0b3BzID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gZmlyc3RDb2xvclN0b3BJbmRleDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHZhbHVlID0gYXJnc1tpXTtcbiAgICAgICAgdmFyIEhBU19MRU5HVEggPSBFTkRTX1dJVEhfTEVOR1RILnRlc3QodmFsdWUpO1xuICAgICAgICB2YXIgbGFzdFNwYWNlSW5kZXggPSB2YWx1ZS5sYXN0SW5kZXhPZignICcpO1xuICAgICAgICB2YXIgX2NvbG9yID0gbmV3IF9Db2xvcjIuZGVmYXVsdChIQVNfTEVOR1RIID8gdmFsdWUuc3Vic3RyaW5nKDAsIGxhc3RTcGFjZUluZGV4KSA6IHZhbHVlKTtcbiAgICAgICAgdmFyIF9zdG9wID0gSEFTX0xFTkdUSCA/IG5ldyBfTGVuZ3RoMi5kZWZhdWx0KHZhbHVlLnN1YnN0cmluZyhsYXN0U3BhY2VJbmRleCArIDEpKSA6IGkgPT09IGZpcnN0Q29sb3JTdG9wSW5kZXggPyBuZXcgX0xlbmd0aDIuZGVmYXVsdCgnMCUnKSA6IGkgPT09IGFyZ3MubGVuZ3RoIC0gMSA/IG5ldyBfTGVuZ3RoMi5kZWZhdWx0KCcxMDAlJykgOiBudWxsO1xuICAgICAgICBjb2xvclN0b3BzLnB1c2goeyBjb2xvcjogX2NvbG9yLCBzdG9wOiBfc3RvcCB9KTtcbiAgICB9XG5cbiAgICB2YXIgYWJzb2x1dGVWYWx1ZWRDb2xvclN0b3BzID0gY29sb3JTdG9wcy5tYXAoZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICAgIHZhciBjb2xvciA9IF9yZWYyLmNvbG9yLFxuICAgICAgICAgICAgc3RvcCA9IF9yZWYyLnN0b3A7XG5cbiAgICAgICAgdmFyIGFic29sdXRlU3RvcCA9IGxpbmVMZW5ndGggPT09IDAgPyAwIDogc3RvcCA/IHN0b3AuZ2V0QWJzb2x1dGVWYWx1ZShsaW5lTGVuZ3RoKSAvIGxpbmVMZW5ndGggOiBudWxsO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2xvcjogY29sb3IsXG4gICAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICAgICAgICBzdG9wOiBhYnNvbHV0ZVN0b3BcbiAgICAgICAgfTtcbiAgICB9KTtcblxuICAgIHZhciBwcmV2aW91c0NvbG9yU3RvcCA9IGFic29sdXRlVmFsdWVkQ29sb3JTdG9wc1swXS5zdG9wO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhYnNvbHV0ZVZhbHVlZENvbG9yU3RvcHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIGlmIChwcmV2aW91c0NvbG9yU3RvcCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdmFyIF9zdG9wMiA9IGFic29sdXRlVmFsdWVkQ29sb3JTdG9wc1tfaV0uc3RvcDtcbiAgICAgICAgICAgIGlmIChfc3RvcDIgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IF9pO1xuICAgICAgICAgICAgICAgIHdoaWxlIChhYnNvbHV0ZVZhbHVlZENvbG9yU3RvcHNbbl0uc3RvcCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBuKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBzdGVwcyA9IG4gLSBfaSArIDE7XG4gICAgICAgICAgICAgICAgdmFyIG5leHRDb2xvclN0ZXAgPSBhYnNvbHV0ZVZhbHVlZENvbG9yU3RvcHNbbl0uc3RvcDtcbiAgICAgICAgICAgICAgICB2YXIgc3RlcFNpemUgPSAobmV4dENvbG9yU3RlcCAtIHByZXZpb3VzQ29sb3JTdG9wKSAvIHN0ZXBzO1xuICAgICAgICAgICAgICAgIGZvciAoOyBfaSA8IG47IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNDb2xvclN0b3AgPSBhYnNvbHV0ZVZhbHVlZENvbG9yU3RvcHNbX2ldLnN0b3AgPSBwcmV2aW91c0NvbG9yU3RvcCArIHN0ZXBTaXplO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNDb2xvclN0b3AgPSBfc3RvcDI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYWJzb2x1dGVWYWx1ZWRDb2xvclN0b3BzO1xufTtcblxudmFyIHBhcnNlTGluZWFyR3JhZGllbnQgPSBmdW5jdGlvbiBwYXJzZUxpbmVhckdyYWRpZW50KGFyZ3MsIGJvdW5kcywgaGFzUHJlZml4KSB7XG4gICAgdmFyIGFuZ2xlID0gKDAsIF9BbmdsZS5wYXJzZUFuZ2xlKShhcmdzWzBdKTtcbiAgICB2YXIgSEFTX1NJREVfT1JfQ09STkVSID0gU0lERV9PUl9DT1JORVIudGVzdChhcmdzWzBdKTtcbiAgICB2YXIgSEFTX0RJUkVDVElPTiA9IEhBU19TSURFX09SX0NPUk5FUiB8fCBhbmdsZSAhPT0gbnVsbCB8fCBQRVJDRU5UQUdFX0FOR0xFUy50ZXN0KGFyZ3NbMF0pO1xuICAgIHZhciBkaXJlY3Rpb24gPSBIQVNfRElSRUNUSU9OID8gYW5nbGUgIT09IG51bGwgPyBjYWxjdWxhdGVHcmFkaWVudERpcmVjdGlvbihcbiAgICAvLyBpZiB0aGVyZSBpcyBhIHByZWZpeCwgdGhlIDDCsCBhbmdsZSBwb2ludHMgZHVlIEVhc3QgKGluc3RlYWQgb2YgTm9ydGggcGVyIFczQylcbiAgICBoYXNQcmVmaXggPyBhbmdsZSAtIE1hdGguUEkgKiAwLjUgOiBhbmdsZSwgYm91bmRzKSA6IEhBU19TSURFX09SX0NPUk5FUiA/IHBhcnNlU2lkZU9yQ29ybmVyKGFyZ3NbMF0sIGJvdW5kcykgOiBwYXJzZVBlcmNlbnRhZ2VBbmdsZShhcmdzWzBdLCBib3VuZHMpIDogY2FsY3VsYXRlR3JhZGllbnREaXJlY3Rpb24oTWF0aC5QSSwgYm91bmRzKTtcbiAgICB2YXIgZmlyc3RDb2xvclN0b3BJbmRleCA9IEhBU19ESVJFQ1RJT04gPyAxIDogMDtcblxuICAgIC8vIFRPRE86IEZpeCBzb21lIGluYWNjdXJhY3kgd2l0aCBjb2xvciBzdG9wcyB3aXRoIHB4IHZhbHVlc1xuICAgIHZhciBsaW5lTGVuZ3RoID0gTWF0aC5taW4oKDAsIF9VdGlsLmRpc3RhbmNlKShNYXRoLmFicyhkaXJlY3Rpb24ueDApICsgTWF0aC5hYnMoZGlyZWN0aW9uLngxKSwgTWF0aC5hYnMoZGlyZWN0aW9uLnkwKSArIE1hdGguYWJzKGRpcmVjdGlvbi55MSkpLCBib3VuZHMud2lkdGggKiAyLCBib3VuZHMuaGVpZ2h0ICogMik7XG5cbiAgICByZXR1cm4gbmV3IExpbmVhckdyYWRpZW50KHBhcnNlQ29sb3JTdG9wcyhhcmdzLCBmaXJzdENvbG9yU3RvcEluZGV4LCBsaW5lTGVuZ3RoKSwgZGlyZWN0aW9uKTtcbn07XG5cbnZhciBwYXJzZVJhZGlhbEdyYWRpZW50ID0gZnVuY3Rpb24gcGFyc2VSYWRpYWxHcmFkaWVudChjb250YWluZXIsIGFyZ3MsIGJvdW5kcykge1xuICAgIHZhciBtID0gYXJnc1swXS5tYXRjaChSQURJQUxfU0hBUEVfREVGSU5JVElPTik7XG4gICAgdmFyIHNoYXBlID0gbSAmJiAobVsxXSA9PT0gJ2NpcmNsZScgfHwgLy8gZXhwbGljaXQgc2hhcGUgc3BlY2lmaWNhdGlvblxuICAgIG1bM10gIT09IHVuZGVmaW5lZCAmJiBtWzVdID09PSB1bmRlZmluZWQpIC8vIG9ubHkgb25lIHJhZGl1cyBjb29yZGluYXRlXG4gICAgPyBSQURJQUxfR1JBRElFTlRfU0hBUEUuQ0lSQ0xFIDogUkFESUFMX0dSQURJRU5UX1NIQVBFLkVMTElQU0U7XG4gICAgdmFyIHJhZGl1cyA9IHt9O1xuICAgIHZhciBjZW50ZXIgPSB7fTtcblxuICAgIGlmIChtKSB7XG4gICAgICAgIC8vIFJhZGl1c1xuICAgICAgICBpZiAobVszXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByYWRpdXMueCA9ICgwLCBfTGVuZ3RoLmNhbGN1bGF0ZUxlbmd0aEZyb21WYWx1ZVdpdGhVbml0KShjb250YWluZXIsIG1bM10sIG1bNF0pLmdldEFic29sdXRlVmFsdWUoYm91bmRzLndpZHRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtWzVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJhZGl1cy55ID0gKDAsIF9MZW5ndGguY2FsY3VsYXRlTGVuZ3RoRnJvbVZhbHVlV2l0aFVuaXQpKGNvbnRhaW5lciwgbVs1XSwgbVs2XSkuZ2V0QWJzb2x1dGVWYWx1ZShib3VuZHMuaGVpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFBvc2l0aW9uXG4gICAgICAgIGlmIChtWzddKSB7XG4gICAgICAgICAgICBjZW50ZXIueCA9IExFTkdUSF9GT1JfUE9TSVRJT05bbVs3XS50b0xvd2VyQ2FzZSgpXTtcbiAgICAgICAgfSBlbHNlIGlmIChtWzhdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNlbnRlci54ID0gKDAsIF9MZW5ndGguY2FsY3VsYXRlTGVuZ3RoRnJvbVZhbHVlV2l0aFVuaXQpKGNvbnRhaW5lciwgbVs4XSwgbVs5XSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobVsxMF0pIHtcbiAgICAgICAgICAgIGNlbnRlci55ID0gTEVOR1RIX0ZPUl9QT1NJVElPTlttWzEwXS50b0xvd2VyQ2FzZSgpXTtcbiAgICAgICAgfSBlbHNlIGlmIChtWzExXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjZW50ZXIueSA9ICgwLCBfTGVuZ3RoLmNhbGN1bGF0ZUxlbmd0aEZyb21WYWx1ZVdpdGhVbml0KShjb250YWluZXIsIG1bMTFdLCBtWzEyXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgZ3JhZGllbnRDZW50ZXIgPSB7XG4gICAgICAgIHg6IGNlbnRlci54ID09PSB1bmRlZmluZWQgPyBib3VuZHMud2lkdGggLyAyIDogY2VudGVyLnguZ2V0QWJzb2x1dGVWYWx1ZShib3VuZHMud2lkdGgpLFxuICAgICAgICB5OiBjZW50ZXIueSA9PT0gdW5kZWZpbmVkID8gYm91bmRzLmhlaWdodCAvIDIgOiBjZW50ZXIueS5nZXRBYnNvbHV0ZVZhbHVlKGJvdW5kcy5oZWlnaHQpXG4gICAgfTtcbiAgICB2YXIgZ3JhZGllbnRSYWRpdXMgPSBjYWxjdWxhdGVSYWRpdXMobSAmJiBtWzJdIHx8ICdmYXJ0aGVzdC1jb3JuZXInLCBzaGFwZSwgZ3JhZGllbnRDZW50ZXIsIHJhZGl1cywgYm91bmRzKTtcblxuICAgIHJldHVybiBuZXcgUmFkaWFsR3JhZGllbnQocGFyc2VDb2xvclN0b3BzKGFyZ3MsIG0gPyAxIDogMCwgTWF0aC5taW4oZ3JhZGllbnRSYWRpdXMueCwgZ3JhZGllbnRSYWRpdXMueSkpLCBzaGFwZSwgZ3JhZGllbnRDZW50ZXIsIGdyYWRpZW50UmFkaXVzKTtcbn07XG5cbnZhciBjYWxjdWxhdGVHcmFkaWVudERpcmVjdGlvbiA9IGZ1bmN0aW9uIGNhbGN1bGF0ZUdyYWRpZW50RGlyZWN0aW9uKHJhZGlhbiwgYm91bmRzKSB7XG4gICAgdmFyIHdpZHRoID0gYm91bmRzLndpZHRoO1xuICAgIHZhciBoZWlnaHQgPSBib3VuZHMuaGVpZ2h0O1xuICAgIHZhciBIQUxGX1dJRFRIID0gd2lkdGggKiAwLjU7XG4gICAgdmFyIEhBTEZfSEVJR0hUID0gaGVpZ2h0ICogMC41O1xuICAgIHZhciBsaW5lTGVuZ3RoID0gTWF0aC5hYnMod2lkdGggKiBNYXRoLnNpbihyYWRpYW4pKSArIE1hdGguYWJzKGhlaWdodCAqIE1hdGguY29zKHJhZGlhbikpO1xuICAgIHZhciBIQUxGX0xJTkVfTEVOR1RIID0gbGluZUxlbmd0aCAvIDI7XG5cbiAgICB2YXIgeDAgPSBIQUxGX1dJRFRIICsgTWF0aC5zaW4ocmFkaWFuKSAqIEhBTEZfTElORV9MRU5HVEg7XG4gICAgdmFyIHkwID0gSEFMRl9IRUlHSFQgLSBNYXRoLmNvcyhyYWRpYW4pICogSEFMRl9MSU5FX0xFTkdUSDtcbiAgICB2YXIgeDEgPSB3aWR0aCAtIHgwO1xuICAgIHZhciB5MSA9IGhlaWdodCAtIHkwO1xuXG4gICAgcmV0dXJuIHsgeDA6IHgwLCB4MTogeDEsIHkwOiB5MCwgeTE6IHkxIH07XG59O1xuXG52YXIgcGFyc2VUb3BSaWdodCA9IGZ1bmN0aW9uIHBhcnNlVG9wUmlnaHQoYm91bmRzKSB7XG4gICAgcmV0dXJuIE1hdGguYWNvcyhib3VuZHMud2lkdGggLyAyIC8gKCgwLCBfVXRpbC5kaXN0YW5jZSkoYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0KSAvIDIpKTtcbn07XG5cbnZhciBwYXJzZVNpZGVPckNvcm5lciA9IGZ1bmN0aW9uIHBhcnNlU2lkZU9yQ29ybmVyKHNpZGUsIGJvdW5kcykge1xuICAgIHN3aXRjaCAoc2lkZSkge1xuICAgICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICBjYXNlICd0byB0b3AnOlxuICAgICAgICAgICAgcmV0dXJuIGNhbGN1bGF0ZUdyYWRpZW50RGlyZWN0aW9uKDAsIGJvdW5kcyk7XG4gICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICBjYXNlICd0byByaWdodCc6XG4gICAgICAgICAgICByZXR1cm4gY2FsY3VsYXRlR3JhZGllbnREaXJlY3Rpb24oTWF0aC5QSSAvIDIsIGJvdW5kcyk7XG4gICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgY2FzZSAndG8gbGVmdCc6XG4gICAgICAgICAgICByZXR1cm4gY2FsY3VsYXRlR3JhZGllbnREaXJlY3Rpb24oMyAqIE1hdGguUEkgLyAyLCBib3VuZHMpO1xuICAgICAgICBjYXNlICd0b3AgcmlnaHQnOlxuICAgICAgICBjYXNlICdyaWdodCB0b3AnOlxuICAgICAgICBjYXNlICd0byBib3R0b20gbGVmdCc6XG4gICAgICAgIGNhc2UgJ3RvIGxlZnQgYm90dG9tJzpcbiAgICAgICAgICAgIHJldHVybiBjYWxjdWxhdGVHcmFkaWVudERpcmVjdGlvbihNYXRoLlBJICsgcGFyc2VUb3BSaWdodChib3VuZHMpLCBib3VuZHMpO1xuICAgICAgICBjYXNlICd0b3AgbGVmdCc6XG4gICAgICAgIGNhc2UgJ2xlZnQgdG9wJzpcbiAgICAgICAgY2FzZSAndG8gYm90dG9tIHJpZ2h0JzpcbiAgICAgICAgY2FzZSAndG8gcmlnaHQgYm90dG9tJzpcbiAgICAgICAgICAgIHJldHVybiBjYWxjdWxhdGVHcmFkaWVudERpcmVjdGlvbihNYXRoLlBJIC0gcGFyc2VUb3BSaWdodChib3VuZHMpLCBib3VuZHMpO1xuICAgICAgICBjYXNlICdib3R0b20gbGVmdCc6XG4gICAgICAgIGNhc2UgJ2xlZnQgYm90dG9tJzpcbiAgICAgICAgY2FzZSAndG8gdG9wIHJpZ2h0JzpcbiAgICAgICAgY2FzZSAndG8gcmlnaHQgdG9wJzpcbiAgICAgICAgICAgIHJldHVybiBjYWxjdWxhdGVHcmFkaWVudERpcmVjdGlvbihwYXJzZVRvcFJpZ2h0KGJvdW5kcyksIGJvdW5kcyk7XG4gICAgICAgIGNhc2UgJ2JvdHRvbSByaWdodCc6XG4gICAgICAgIGNhc2UgJ3JpZ2h0IGJvdHRvbSc6XG4gICAgICAgIGNhc2UgJ3RvIHRvcCBsZWZ0JzpcbiAgICAgICAgY2FzZSAndG8gbGVmdCB0b3AnOlxuICAgICAgICAgICAgcmV0dXJuIGNhbGN1bGF0ZUdyYWRpZW50RGlyZWN0aW9uKDIgKiBNYXRoLlBJIC0gcGFyc2VUb3BSaWdodChib3VuZHMpLCBib3VuZHMpO1xuICAgICAgICBjYXNlICd0b3AnOlxuICAgICAgICBjYXNlICd0byBib3R0b20nOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGNhbGN1bGF0ZUdyYWRpZW50RGlyZWN0aW9uKE1hdGguUEksIGJvdW5kcyk7XG4gICAgfVxufTtcblxudmFyIHBhcnNlUGVyY2VudGFnZUFuZ2xlID0gZnVuY3Rpb24gcGFyc2VQZXJjZW50YWdlQW5nbGUoYW5nbGUsIGJvdW5kcykge1xuICAgIHZhciBfYW5nbGUkc3BsaXQkbWFwID0gYW5nbGUuc3BsaXQoJyAnKS5tYXAocGFyc2VGbG9hdCksXG4gICAgICAgIF9hbmdsZSRzcGxpdCRtYXAyID0gX3NsaWNlZFRvQXJyYXkoX2FuZ2xlJHNwbGl0JG1hcCwgMiksXG4gICAgICAgIGxlZnQgPSBfYW5nbGUkc3BsaXQkbWFwMlswXSxcbiAgICAgICAgdG9wID0gX2FuZ2xlJHNwbGl0JG1hcDJbMV07XG5cbiAgICB2YXIgcmF0aW8gPSBsZWZ0IC8gMTAwICogYm91bmRzLndpZHRoIC8gKHRvcCAvIDEwMCAqIGJvdW5kcy5oZWlnaHQpO1xuXG4gICAgcmV0dXJuIGNhbGN1bGF0ZUdyYWRpZW50RGlyZWN0aW9uKE1hdGguYXRhbihpc05hTihyYXRpbykgPyAxIDogcmF0aW8pICsgTWF0aC5QSSAvIDIsIGJvdW5kcyk7XG59O1xuXG52YXIgZmluZENvcm5lciA9IGZ1bmN0aW9uIGZpbmRDb3JuZXIoYm91bmRzLCB4LCB5LCBjbG9zZXN0KSB7XG4gICAgdmFyIGNvcm5lcnMgPSBbeyB4OiAwLCB5OiAwIH0sIHsgeDogMCwgeTogYm91bmRzLmhlaWdodCB9LCB7IHg6IGJvdW5kcy53aWR0aCwgeTogMCB9LCB7IHg6IGJvdW5kcy53aWR0aCwgeTogYm91bmRzLmhlaWdodCB9XTtcblxuICAgIC8vICRGbG93Rml4TWVcbiAgICByZXR1cm4gY29ybmVycy5yZWR1Y2UoZnVuY3Rpb24gKHN0YXQsIGNvcm5lcikge1xuICAgICAgICB2YXIgZCA9ICgwLCBfVXRpbC5kaXN0YW5jZSkoeCAtIGNvcm5lci54LCB5IC0gY29ybmVyLnkpO1xuICAgICAgICBpZiAoY2xvc2VzdCA/IGQgPCBzdGF0Lm9wdGltdW1EaXN0YW5jZSA6IGQgPiBzdGF0Lm9wdGltdW1EaXN0YW5jZSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBvcHRpbXVtQ29ybmVyOiBjb3JuZXIsXG4gICAgICAgICAgICAgICAgb3B0aW11bURpc3RhbmNlOiBkXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0YXQ7XG4gICAgfSwge1xuICAgICAgICBvcHRpbXVtRGlzdGFuY2U6IGNsb3Nlc3QgPyBJbmZpbml0eSA6IC1JbmZpbml0eSxcbiAgICAgICAgb3B0aW11bUNvcm5lcjogbnVsbFxuICAgIH0pLm9wdGltdW1Db3JuZXI7XG59O1xuXG52YXIgY2FsY3VsYXRlUmFkaXVzID0gZnVuY3Rpb24gY2FsY3VsYXRlUmFkaXVzKGV4dGVudCwgc2hhcGUsIGNlbnRlciwgcmFkaXVzLCBib3VuZHMpIHtcbiAgICB2YXIgeCA9IGNlbnRlci54O1xuICAgIHZhciB5ID0gY2VudGVyLnk7XG4gICAgdmFyIHJ4ID0gMDtcbiAgICB2YXIgcnkgPSAwO1xuXG4gICAgc3dpdGNoIChleHRlbnQpIHtcbiAgICAgICAgY2FzZSAnY2xvc2VzdC1zaWRlJzpcbiAgICAgICAgICAgIC8vIFRoZSBlbmRpbmcgc2hhcGUgaXMgc2l6ZWQgc28gdGhhdCB0aGF0IGl0IGV4YWN0bHkgbWVldHMgdGhlIHNpZGUgb2YgdGhlIGdyYWRpZW50IGJveCBjbG9zZXN0IHRvIHRoZSBncmFkaWVudOKAmXMgY2VudGVyLlxuICAgICAgICAgICAgLy8gSWYgdGhlIHNoYXBlIGlzIGFuIGVsbGlwc2UsIGl0IGV4YWN0bHkgbWVldHMgdGhlIGNsb3Nlc3Qgc2lkZSBpbiBlYWNoIGRpbWVuc2lvbi5cbiAgICAgICAgICAgIGlmIChzaGFwZSA9PT0gUkFESUFMX0dSQURJRU5UX1NIQVBFLkNJUkNMRSkge1xuICAgICAgICAgICAgICAgIHJ4ID0gcnkgPSBNYXRoLm1pbihNYXRoLmFicyh4KSwgTWF0aC5hYnMoeCAtIGJvdW5kcy53aWR0aCksIE1hdGguYWJzKHkpLCBNYXRoLmFicyh5IC0gYm91bmRzLmhlaWdodCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzaGFwZSA9PT0gUkFESUFMX0dSQURJRU5UX1NIQVBFLkVMTElQU0UpIHtcbiAgICAgICAgICAgICAgICByeCA9IE1hdGgubWluKE1hdGguYWJzKHgpLCBNYXRoLmFicyh4IC0gYm91bmRzLndpZHRoKSk7XG4gICAgICAgICAgICAgICAgcnkgPSBNYXRoLm1pbihNYXRoLmFicyh5KSwgTWF0aC5hYnMoeSAtIGJvdW5kcy5oZWlnaHQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2Nsb3Nlc3QtY29ybmVyJzpcbiAgICAgICAgICAgIC8vIFRoZSBlbmRpbmcgc2hhcGUgaXMgc2l6ZWQgc28gdGhhdCB0aGF0IGl0IHBhc3NlcyB0aHJvdWdoIHRoZSBjb3JuZXIgb2YgdGhlIGdyYWRpZW50IGJveCBjbG9zZXN0IHRvIHRoZSBncmFkaWVudOKAmXMgY2VudGVyLlxuICAgICAgICAgICAgLy8gSWYgdGhlIHNoYXBlIGlzIGFuIGVsbGlwc2UsIHRoZSBlbmRpbmcgc2hhcGUgaXMgZ2l2ZW4gdGhlIHNhbWUgYXNwZWN0LXJhdGlvIGl0IHdvdWxkIGhhdmUgaWYgY2xvc2VzdC1zaWRlIHdlcmUgc3BlY2lmaWVkLlxuICAgICAgICAgICAgaWYgKHNoYXBlID09PSBSQURJQUxfR1JBRElFTlRfU0hBUEUuQ0lSQ0xFKSB7XG4gICAgICAgICAgICAgICAgcnggPSByeSA9IE1hdGgubWluKCgwLCBfVXRpbC5kaXN0YW5jZSkoeCwgeSksICgwLCBfVXRpbC5kaXN0YW5jZSkoeCwgeSAtIGJvdW5kcy5oZWlnaHQpLCAoMCwgX1V0aWwuZGlzdGFuY2UpKHggLSBib3VuZHMud2lkdGgsIHkpLCAoMCwgX1V0aWwuZGlzdGFuY2UpKHggLSBib3VuZHMud2lkdGgsIHkgLSBib3VuZHMuaGVpZ2h0KSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNoYXBlID09PSBSQURJQUxfR1JBRElFTlRfU0hBUEUuRUxMSVBTRSkge1xuICAgICAgICAgICAgICAgIC8vIENvbXB1dGUgdGhlIHJhdGlvIHJ5L3J4ICh3aGljaCBpcyB0byBiZSB0aGUgc2FtZSBhcyBmb3IgXCJjbG9zZXN0LXNpZGVcIilcbiAgICAgICAgICAgICAgICB2YXIgYyA9IE1hdGgubWluKE1hdGguYWJzKHkpLCBNYXRoLmFicyh5IC0gYm91bmRzLmhlaWdodCkpIC8gTWF0aC5taW4oTWF0aC5hYnMoeCksIE1hdGguYWJzKHggLSBib3VuZHMud2lkdGgpKTtcbiAgICAgICAgICAgICAgICB2YXIgY29ybmVyID0gZmluZENvcm5lcihib3VuZHMsIHgsIHksIHRydWUpO1xuICAgICAgICAgICAgICAgIHJ4ID0gKDAsIF9VdGlsLmRpc3RhbmNlKShjb3JuZXIueCAtIHgsIChjb3JuZXIueSAtIHkpIC8gYyk7XG4gICAgICAgICAgICAgICAgcnkgPSBjICogcng7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdmYXJ0aGVzdC1zaWRlJzpcbiAgICAgICAgICAgIC8vIFNhbWUgYXMgY2xvc2VzdC1zaWRlLCBleGNlcHQgdGhlIGVuZGluZyBzaGFwZSBpcyBzaXplZCBiYXNlZCBvbiB0aGUgZmFydGhlc3Qgc2lkZShzKVxuICAgICAgICAgICAgaWYgKHNoYXBlID09PSBSQURJQUxfR1JBRElFTlRfU0hBUEUuQ0lSQ0xFKSB7XG4gICAgICAgICAgICAgICAgcnggPSByeSA9IE1hdGgubWF4KE1hdGguYWJzKHgpLCBNYXRoLmFicyh4IC0gYm91bmRzLndpZHRoKSwgTWF0aC5hYnMoeSksIE1hdGguYWJzKHkgLSBib3VuZHMuaGVpZ2h0KSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNoYXBlID09PSBSQURJQUxfR1JBRElFTlRfU0hBUEUuRUxMSVBTRSkge1xuICAgICAgICAgICAgICAgIHJ4ID0gTWF0aC5tYXgoTWF0aC5hYnMoeCksIE1hdGguYWJzKHggLSBib3VuZHMud2lkdGgpKTtcbiAgICAgICAgICAgICAgICByeSA9IE1hdGgubWF4KE1hdGguYWJzKHkpLCBNYXRoLmFicyh5IC0gYm91bmRzLmhlaWdodCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnZmFydGhlc3QtY29ybmVyJzpcbiAgICAgICAgICAgIC8vIFNhbWUgYXMgY2xvc2VzdC1jb3JuZXIsIGV4Y2VwdCB0aGUgZW5kaW5nIHNoYXBlIGlzIHNpemVkIGJhc2VkIG9uIHRoZSBmYXJ0aGVzdCBjb3JuZXIuXG4gICAgICAgICAgICAvLyBJZiB0aGUgc2hhcGUgaXMgYW4gZWxsaXBzZSwgdGhlIGVuZGluZyBzaGFwZSBpcyBnaXZlbiB0aGUgc2FtZSBhc3BlY3QgcmF0aW8gaXQgd291bGQgaGF2ZSBpZiBmYXJ0aGVzdC1zaWRlIHdlcmUgc3BlY2lmaWVkLlxuICAgICAgICAgICAgaWYgKHNoYXBlID09PSBSQURJQUxfR1JBRElFTlRfU0hBUEUuQ0lSQ0xFKSB7XG4gICAgICAgICAgICAgICAgcnggPSByeSA9IE1hdGgubWF4KCgwLCBfVXRpbC5kaXN0YW5jZSkoeCwgeSksICgwLCBfVXRpbC5kaXN0YW5jZSkoeCwgeSAtIGJvdW5kcy5oZWlnaHQpLCAoMCwgX1V0aWwuZGlzdGFuY2UpKHggLSBib3VuZHMud2lkdGgsIHkpLCAoMCwgX1V0aWwuZGlzdGFuY2UpKHggLSBib3VuZHMud2lkdGgsIHkgLSBib3VuZHMuaGVpZ2h0KSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNoYXBlID09PSBSQURJQUxfR1JBRElFTlRfU0hBUEUuRUxMSVBTRSkge1xuICAgICAgICAgICAgICAgIC8vIENvbXB1dGUgdGhlIHJhdGlvIHJ5L3J4ICh3aGljaCBpcyB0byBiZSB0aGUgc2FtZSBhcyBmb3IgXCJmYXJ0aGVzdC1zaWRlXCIpXG4gICAgICAgICAgICAgICAgdmFyIF9jID0gTWF0aC5tYXgoTWF0aC5hYnMoeSksIE1hdGguYWJzKHkgLSBib3VuZHMuaGVpZ2h0KSkgLyBNYXRoLm1heChNYXRoLmFicyh4KSwgTWF0aC5hYnMoeCAtIGJvdW5kcy53aWR0aCkpO1xuICAgICAgICAgICAgICAgIHZhciBfY29ybmVyID0gZmluZENvcm5lcihib3VuZHMsIHgsIHksIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByeCA9ICgwLCBfVXRpbC5kaXN0YW5jZSkoX2Nvcm5lci54IC0geCwgKF9jb3JuZXIueSAtIHkpIC8gX2MpO1xuICAgICAgICAgICAgICAgIHJ5ID0gX2MgKiByeDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAvLyBwaXhlbCBvciBwZXJjZW50YWdlIHZhbHVlc1xuICAgICAgICAgICAgcnggPSByYWRpdXMueCB8fCAwO1xuICAgICAgICAgICAgcnkgPSByYWRpdXMueSAhPT0gdW5kZWZpbmVkID8gcmFkaXVzLnkgOiByeDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHg6IHJ4LFxuICAgICAgICB5OiByeVxuICAgIH07XG59O1xuXG52YXIgdHJhbnNmb3JtV2Via2l0UmFkaWFsR3JhZGllbnRBcmdzID0gZXhwb3J0cy50cmFuc2Zvcm1XZWJraXRSYWRpYWxHcmFkaWVudEFyZ3MgPSBmdW5jdGlvbiB0cmFuc2Zvcm1XZWJraXRSYWRpYWxHcmFkaWVudEFyZ3MoYXJncykge1xuICAgIHZhciBzaGFwZSA9ICcnO1xuICAgIHZhciByYWRpdXMgPSAnJztcbiAgICB2YXIgZXh0ZW50ID0gJyc7XG4gICAgdmFyIHBvc2l0aW9uID0gJyc7XG4gICAgdmFyIGlkeCA9IDA7XG5cbiAgICB2YXIgUE9TSVRJT04gPSAvXihsZWZ0fGNlbnRlcnxyaWdodHxcXGQrKD86cHh8cj9lbXwlKT8pKD86XFxzKyh0b3B8Y2VudGVyfGJvdHRvbXxcXGQrKD86cHh8cj9lbXwlKT8pKT8kL2k7XG4gICAgdmFyIFNIQVBFX0FORF9FWFRFTlQgPSAvXihjaXJjbGV8ZWxsaXBzZSk/XFxzKihjbG9zZXN0LXNpZGV8Y2xvc2VzdC1jb3JuZXJ8ZmFydGhlc3Qtc2lkZXxmYXJ0aGVzdC1jb3JuZXJ8Y29udGFpbnxjb3Zlcik/JC9pO1xuICAgIHZhciBSQURJVVMgPSAvXlxcZCsocHh8cj9lbXwlKT8oPzpcXHMrXFxkKyhweHxyP2VtfCUpPyk/JC9pO1xuXG4gICAgdmFyIG1hdGNoU3RhcnRQb3NpdGlvbiA9IGFyZ3NbaWR4XS5tYXRjaChQT1NJVElPTik7XG4gICAgaWYgKG1hdGNoU3RhcnRQb3NpdGlvbikge1xuICAgICAgICBpZHgrKztcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hTaGFwZUV4dGVudCA9IGFyZ3NbaWR4XS5tYXRjaChTSEFQRV9BTkRfRVhURU5UKTtcbiAgICBpZiAobWF0Y2hTaGFwZUV4dGVudCkge1xuICAgICAgICBzaGFwZSA9IG1hdGNoU2hhcGVFeHRlbnRbMV0gfHwgJyc7XG4gICAgICAgIGV4dGVudCA9IG1hdGNoU2hhcGVFeHRlbnRbMl0gfHwgJyc7XG4gICAgICAgIGlmIChleHRlbnQgPT09ICdjb250YWluJykge1xuICAgICAgICAgICAgZXh0ZW50ID0gJ2Nsb3Nlc3Qtc2lkZSc7XG4gICAgICAgIH0gZWxzZSBpZiAoZXh0ZW50ID09PSAnY292ZXInKSB7XG4gICAgICAgICAgICBleHRlbnQgPSAnZmFydGhlc3QtY29ybmVyJztcbiAgICAgICAgfVxuICAgICAgICBpZHgrKztcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hTdGFydFJhZGl1cyA9IGFyZ3NbaWR4XS5tYXRjaChSQURJVVMpO1xuICAgIGlmIChtYXRjaFN0YXJ0UmFkaXVzKSB7XG4gICAgICAgIGlkeCsrO1xuICAgIH1cblxuICAgIHZhciBtYXRjaEVuZFBvc2l0aW9uID0gYXJnc1tpZHhdLm1hdGNoKFBPU0lUSU9OKTtcbiAgICBpZiAobWF0Y2hFbmRQb3NpdGlvbikge1xuICAgICAgICBpZHgrKztcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hFbmRSYWRpdXMgPSBhcmdzW2lkeF0ubWF0Y2goUkFESVVTKTtcbiAgICBpZiAobWF0Y2hFbmRSYWRpdXMpIHtcbiAgICAgICAgaWR4Kys7XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoUG9zaXRpb24gPSBtYXRjaEVuZFBvc2l0aW9uIHx8IG1hdGNoU3RhcnRQb3NpdGlvbjtcbiAgICBpZiAobWF0Y2hQb3NpdGlvbiAmJiBtYXRjaFBvc2l0aW9uWzFdKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbWF0Y2hQb3NpdGlvblsxXSArICgvXlxcZCskLy50ZXN0KG1hdGNoUG9zaXRpb25bMV0pID8gJ3B4JyA6ICcnKTtcbiAgICAgICAgaWYgKG1hdGNoUG9zaXRpb25bMl0pIHtcbiAgICAgICAgICAgIHBvc2l0aW9uICs9ICcgJyArIG1hdGNoUG9zaXRpb25bMl0gKyAoL15cXGQrJC8udGVzdChtYXRjaFBvc2l0aW9uWzJdKSA/ICdweCcgOiAnJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hSYWRpdXMgPSBtYXRjaEVuZFJhZGl1cyB8fCBtYXRjaFN0YXJ0UmFkaXVzO1xuICAgIGlmIChtYXRjaFJhZGl1cykge1xuICAgICAgICByYWRpdXMgPSBtYXRjaFJhZGl1c1swXTtcbiAgICAgICAgaWYgKCFtYXRjaFJhZGl1c1sxXSkge1xuICAgICAgICAgICAgcmFkaXVzICs9ICdweCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocG9zaXRpb24gJiYgIXNoYXBlICYmICFyYWRpdXMgJiYgIWV4dGVudCkge1xuICAgICAgICByYWRpdXMgPSBwb3NpdGlvbjtcbiAgICAgICAgcG9zaXRpb24gPSAnJztcbiAgICB9XG5cbiAgICBpZiAocG9zaXRpb24pIHtcbiAgICAgICAgcG9zaXRpb24gPSAnYXQgJyArIHBvc2l0aW9uO1xuICAgIH1cblxuICAgIHJldHVybiBbW3NoYXBlLCBleHRlbnQsIHJhZGl1cywgcG9zaXRpb25dLmZpbHRlcihmdW5jdGlvbiAocykge1xuICAgICAgICByZXR1cm4gISFzO1xuICAgIH0pLmpvaW4oJyAnKV0uY29uY2F0KGFyZ3Muc2xpY2UoaWR4KSk7XG59O1xuXG52YXIgdHJhbnNmb3JtT2Jzb2xldGVDb2xvclN0b3BzID0gZnVuY3Rpb24gdHJhbnNmb3JtT2Jzb2xldGVDb2xvclN0b3BzKGFyZ3MpIHtcbiAgICByZXR1cm4gYXJncy5tYXAoZnVuY3Rpb24gKGNvbG9yKSB7XG4gICAgICAgIHJldHVybiBjb2xvci5tYXRjaChGUk9NX1RPX0NPTE9SU1RPUCk7XG4gICAgfSlcbiAgICAvLyAkRmxvd0ZpeE1lXG4gICAgLm1hcChmdW5jdGlvbiAodiwgaW5kZXgpIHtcbiAgICAgICAgaWYgKCF2KSB7XG4gICAgICAgICAgICByZXR1cm4gYXJnc1tpbmRleF07XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKHZbMV0pIHtcbiAgICAgICAgICAgIGNhc2UgJ2Zyb20nOlxuICAgICAgICAgICAgICAgIHJldHVybiB2WzRdICsgJyAwJSc7XG4gICAgICAgICAgICBjYXNlICd0byc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZbNF0gKyAnIDEwMCUnO1xuICAgICAgICAgICAgY2FzZSAnY29sb3Itc3RvcCc6XG4gICAgICAgICAgICAgICAgaWYgKHZbM10gPT09ICclJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdls0XSArICcgJyArIHZbMl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB2WzRdICsgJyAnICsgcGFyc2VGbG9hdCh2WzJdKSAqIDEwMCArICclJztcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuLyoqKi8gfSksXG4vKiA1MyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgQU5HTEUgPSAvKFsrLV0/XFxkKlxcLj9cXGQrKShkZWd8Z3JhZHxyYWR8dHVybikvaTtcblxudmFyIHBhcnNlQW5nbGUgPSBleHBvcnRzLnBhcnNlQW5nbGUgPSBmdW5jdGlvbiBwYXJzZUFuZ2xlKGFuZ2xlKSB7XG4gICAgdmFyIG1hdGNoID0gYW5nbGUubWF0Y2goQU5HTEUpO1xuXG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHBhcnNlRmxvYXQobWF0Y2hbMV0pO1xuICAgICAgICBzd2l0Y2ggKG1hdGNoWzJdLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgIGNhc2UgJ2RlZyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGguUEkgKiB2YWx1ZSAvIDE4MDtcbiAgICAgICAgICAgIGNhc2UgJ2dyYWQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLlBJIC8gMjAwICogdmFsdWU7XG4gICAgICAgICAgICBjYXNlICdyYWQnOlxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIGNhc2UgJ3R1cm4nOlxuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLlBJICogMiAqIHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG4vKioqLyB9KSxcbi8qIDU0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY2xvbmVXaW5kb3cgPSBleHBvcnRzLkRvY3VtZW50Q2xvbmVyID0gdW5kZWZpbmVkO1xuXG52YXIgX3NsaWNlZFRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH0gcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGkpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyByZXR1cm4gYXJyOyB9IGVsc2UgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkgeyByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpOyB9IGVsc2UgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTsgfSB9OyB9KCk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfQm91bmRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxudmFyIF9Qcm94eSA9IF9fd2VicGFja19yZXF1aXJlX18oMjYpO1xuXG52YXIgX1Jlc291cmNlTG9hZGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1NSk7XG5cbnZhciBfUmVzb3VyY2VMb2FkZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUmVzb3VyY2VMb2FkZXIpO1xuXG52YXIgX1V0aWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuXG52YXIgX2JhY2tncm91bmQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG52YXIgX0NhbnZhc1JlbmRlcmVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNSk7XG5cbnZhciBfQ2FudmFzUmVuZGVyZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ2FudmFzUmVuZGVyZXIpO1xuXG52YXIgX1BzZXVkb05vZGVDb250ZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1Nik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBJR05PUkVfQVRUUklCVVRFID0gJ2RhdGEtaHRtbDJjYW52YXMtaWdub3JlJztcblxudmFyIERvY3VtZW50Q2xvbmVyID0gZXhwb3J0cy5Eb2N1bWVudENsb25lciA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEb2N1bWVudENsb25lcihlbGVtZW50LCBvcHRpb25zLCBsb2dnZXIsIGNvcHlJbmxpbmUsIHJlbmRlcmVyKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEb2N1bWVudENsb25lcik7XG5cbiAgICAgICAgdGhpcy5yZWZlcmVuY2VFbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5zY3JvbGxlZEVsZW1lbnRzID0gW107XG4gICAgICAgIHRoaXMuY29weVN0eWxlcyA9IGNvcHlJbmxpbmU7XG4gICAgICAgIHRoaXMuaW5saW5lSW1hZ2VzID0gY29weUlubGluZTtcbiAgICAgICAgdGhpcy5sb2dnZXIgPSBsb2dnZXI7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICAgICAgdGhpcy5yZXNvdXJjZUxvYWRlciA9IG5ldyBfUmVzb3VyY2VMb2FkZXIyLmRlZmF1bHQob3B0aW9ucywgbG9nZ2VyLCB3aW5kb3cpO1xuICAgICAgICB0aGlzLnBzZXVkb0NvbnRlbnREYXRhID0ge1xuICAgICAgICAgICAgY291bnRlcnM6IHt9LFxuICAgICAgICAgICAgcXVvdGVEZXB0aDogMFxuICAgICAgICB9O1xuICAgICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICAgIHRoaXMuZG9jdW1lbnRFbGVtZW50ID0gdGhpcy5jbG9uZU5vZGUoZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKERvY3VtZW50Q2xvbmVyLCBbe1xuICAgICAgICBrZXk6ICdpbmxpbmVBbGxJbWFnZXMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaW5saW5lQWxsSW1hZ2VzKG5vZGUpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmlubGluZUltYWdlcyAmJiBub2RlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0eWxlID0gbm9kZS5zdHlsZTtcbiAgICAgICAgICAgICAgICBQcm9taXNlLmFsbCgoMCwgX2JhY2tncm91bmQucGFyc2VCYWNrZ3JvdW5kSW1hZ2UpKHN0eWxlLmJhY2tncm91bmRJbWFnZSkubWFwKGZ1bmN0aW9uIChiYWNrZ3JvdW5kSW1hZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJhY2tncm91bmRJbWFnZS5tZXRob2QgPT09ICd1cmwnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMucmVzb3VyY2VMb2FkZXIuaW5saW5lSW1hZ2UoYmFja2dyb3VuZEltYWdlLmFyZ3NbMF0pLnRoZW4oZnVuY3Rpb24gKGltZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbWcgJiYgdHlwZW9mIGltZy5zcmMgPT09ICdzdHJpbmcnID8gJ3VybChcIicgKyBpbWcuc3JjICsgJ1wiKScgOiAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmxvZ2dlci5sb2coJ1VuYWJsZSB0byBsb2FkIGltYWdlJywgZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgnJyArIGJhY2tncm91bmRJbWFnZS5wcmVmaXggKyBiYWNrZ3JvdW5kSW1hZ2UubWV0aG9kICsgJygnICsgYmFja2dyb3VuZEltYWdlLmFyZ3Muam9pbignLCcpICsgJyknKTtcbiAgICAgICAgICAgICAgICB9KSkudGhlbihmdW5jdGlvbiAoYmFja2dyb3VuZEltYWdlcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYmFja2dyb3VuZEltYWdlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPIE11bHRpcGxlIGJhY2tncm91bmRzIHNvbWVob3cgYnJva2VuIGluIENocm9tZVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYmFja2dyb3VuZEltYWdlcy5qb2luKCcsJyk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNvdXJjZUxvYWRlci5pbmxpbmVJbWFnZShub2RlLnNyYykudGhlbihmdW5jdGlvbiAoaW1nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1nICYmIG5vZGUgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50ICYmIG5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJlbnROb2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjbG9uZWRDaGlsZCA9ICgwLCBfVXRpbC5jb3B5Q1NTU3R5bGVzKShub2RlLnN0eWxlLCBpbWcuY2xvbmVOb2RlKGZhbHNlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoY2xvbmVkQ2hpbGQsIG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5sb2dnZXIubG9nKCdVbmFibGUgdG8gbG9hZCBpbWFnZScsIGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2lubGluZUZvbnRzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlubGluZUZvbnRzKGRvY3VtZW50KSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKEFycmF5LmZyb20oZG9jdW1lbnQuc3R5bGVTaGVldHMpLm1hcChmdW5jdGlvbiAoc2hlZXQpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2hlZXQuaHJlZikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmV0Y2goc2hlZXQuaHJlZikudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAodGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZVN0eWxlU2hlZXRGb250c0Zyb21UZXh0KHRleHQsIHNoZWV0LmhyZWYpO1xuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpczIubG9nZ2VyLmxvZygnVW5hYmxlIHRvIGxvYWQgc3R5bGVzaGVldCcsIGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldFNoZWV0Rm9udHMoc2hlZXQsIGRvY3VtZW50KTtcbiAgICAgICAgICAgIH0pKS50aGVuKGZ1bmN0aW9uIChmb250cykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmb250cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgZm9udCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNjLmNvbmNhdChmb250KTtcbiAgICAgICAgICAgICAgICB9LCBbXSk7XG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChmb250cykge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChmb250cy5tYXAoZnVuY3Rpb24gKGZvbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZldGNoKGZvbnQuZm9ybWF0c1swXS5zcmMpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuYmxvYigpO1xuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChibG9iKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5vbmVycm9yID0gcmVqZWN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHJlYWRlci5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRhdGFVcmkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQuZm9udEZhY2Uuc2V0UHJvcGVydHkoJ3NyYycsICd1cmwoXCInICsgZGF0YVVyaSArICdcIiknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnQGZvbnQtZmFjZSB7JyArIGZvbnQuZm9udEZhY2UuY3NzVGV4dCArICcgJztcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoZm9udENzcykge1xuICAgICAgICAgICAgICAgIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSBmb250Q3NzLmpvaW4oJ1xcbicpO1xuICAgICAgICAgICAgICAgIF90aGlzMi5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NyZWF0ZUVsZW1lbnRDbG9uZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVFbGVtZW50Q2xvbmUobm9kZSkge1xuICAgICAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmNvcHlTdHlsZXMgJiYgbm9kZSBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIGltZyA9IG5vZGUub3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3JjID0gbm9kZS50b0RhdGFVUkwoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGltZztcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coJ1VuYWJsZSB0byBjbG9uZSBjYW52YXMgY29udGVudHMsIGNhbnZhcyBpcyB0YWludGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGVtcElmcmFtZSA9IG5vZGUuY2xvbmVOb2RlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB2YXIgaWZyYW1lS2V5ID0gZ2VuZXJhdGVJZnJhbWVLZXkoKTtcbiAgICAgICAgICAgICAgICB0ZW1wSWZyYW1lLnNldEF0dHJpYnV0ZSgnZGF0YS1odG1sMmNhbnZhcy1pbnRlcm5hbC1pZnJhbWUta2V5JywgaWZyYW1lS2V5KTtcblxuICAgICAgICAgICAgICAgIHZhciBfcGFyc2VCb3VuZHMgPSAoMCwgX0JvdW5kcy5wYXJzZUJvdW5kcykobm9kZSwgMCwgMCksXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoID0gX3BhcnNlQm91bmRzLndpZHRoLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPSBfcGFyc2VCb3VuZHMuaGVpZ2h0O1xuXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNvdXJjZUxvYWRlci5jYWNoZVtpZnJhbWVLZXldID0gZ2V0SWZyYW1lRG9jdW1lbnRFbGVtZW50KG5vZGUsIHRoaXMub3B0aW9ucykudGhlbihmdW5jdGlvbiAoZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczMucmVuZGVyZXIoZG9jdW1lbnRFbGVtZW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3luYzogX3RoaXMzLm9wdGlvbnMuYXN5bmMsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxvd1RhaW50OiBfdGhpczMub3B0aW9ucy5hbGxvd1RhaW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW52YXM6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVRpbWVvdXQ6IF90aGlzMy5vcHRpb25zLmltYWdlVGltZW91dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dpbmc6IF90aGlzMy5vcHRpb25zLmxvZ2dpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm94eTogX3RoaXMzLm9wdGlvbnMucHJveHksXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVDb250YWluZXI6IF90aGlzMy5vcHRpb25zLnJlbW92ZUNvbnRhaW5lcixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiBfdGhpczMub3B0aW9ucy5zY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcmVpZ25PYmplY3RSZW5kZXJpbmc6IF90aGlzMy5vcHRpb25zLmZvcmVpZ25PYmplY3RSZW5kZXJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VDT1JTOiBfdGhpczMub3B0aW9ucy51c2VDT1JTLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBuZXcgX0NhbnZhc1JlbmRlcmVyMi5kZWZhdWx0KCksXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93V2lkdGg6IGRvY3VtZW50RWxlbWVudC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LmlubmVyV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dIZWlnaHQ6IGRvY3VtZW50RWxlbWVudC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LmlubmVySGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsWDogZG9jdW1lbnRFbGVtZW50Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcucGFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxZOiBkb2N1bWVudEVsZW1lbnQub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5wYWdlWU9mZnNldFxuICAgICAgICAgICAgICAgICAgICB9LCBfdGhpczMubG9nZ2VyLmNoaWxkKGlmcmFtZUtleSkpO1xuICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGNhbnZhcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlmcmFtZUNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWZyYW1lQ2FudmFzLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShjYW52YXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmcmFtZUNhbnZhcy5vbmVycm9yID0gcmVqZWN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWZyYW1lQ2FudmFzLnNyYyA9IGNhbnZhcy50b0RhdGFVUkwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZW1wSWZyYW1lLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wSWZyYW1lLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKCgwLCBfVXRpbC5jb3B5Q1NTU3R5bGVzKShub2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKSwgaWZyYW1lQ2FudmFzKSwgdGVtcElmcmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiB0ZW1wSWZyYW1lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxTdHlsZUVsZW1lbnQgJiYgbm9kZS5zaGVldCAmJiBub2RlLnNoZWV0LmNzc1J1bGVzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNzcyA9IFtdLnNsaWNlLmNhbGwobm9kZS5zaGVldC5jc3NSdWxlcywgMCkucmVkdWNlKGZ1bmN0aW9uIChjc3MsIHJ1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChydWxlICYmIHJ1bGUuY3NzVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjc3MgKyBydWxlLmNzc1RleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3NzO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMy5sb2dnZXIubG9nKCdVbmFibGUgdG8gYWNjZXNzIGNzc1RleHQgcHJvcGVydHknLCBydWxlLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNzcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sICcnKTtcbiAgICAgICAgICAgICAgICB2YXIgc3R5bGUgPSBub2RlLmNsb25lTm9kZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSBjc3M7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbm9kZS5jbG9uZU5vZGUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjbG9uZU5vZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY2xvbmVOb2RlKG5vZGUpIHtcbiAgICAgICAgICAgIHZhciBjbG9uZSA9IG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFID8gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobm9kZS5ub2RlVmFsdWUpIDogdGhpcy5jcmVhdGVFbGVtZW50Q2xvbmUobm9kZSk7XG5cbiAgICAgICAgICAgIHZhciB3aW5kb3cgPSBub2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gICAgICAgICAgICB2YXIgc3R5bGUgPSBub2RlIGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50ID8gd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSkgOiBudWxsO1xuICAgICAgICAgICAgdmFyIHN0eWxlQmVmb3JlID0gbm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCA/IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUsICc6YmVmb3JlJykgOiBudWxsO1xuICAgICAgICAgICAgdmFyIHN0eWxlQWZ0ZXIgPSBub2RlIGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50ID8gd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSwgJzphZnRlcicpIDogbnVsbDtcblxuICAgICAgICAgICAgaWYgKHRoaXMucmVmZXJlbmNlRWxlbWVudCA9PT0gbm9kZSAmJiBjbG9uZSBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvbmVkUmVmZXJlbmNlRWxlbWVudCA9IGNsb25lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY2xvbmUgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEJvZHlFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgY3JlYXRlUHNldWRvSGlkZVN0eWxlcyhjbG9uZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBjb3VudGVycyA9ICgwLCBfUHNldWRvTm9kZUNvbnRlbnQucGFyc2VDb3VudGVyUmVzZXQpKHN0eWxlLCB0aGlzLnBzZXVkb0NvbnRlbnREYXRhKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50QmVmb3JlID0gKDAsIF9Qc2V1ZG9Ob2RlQ29udGVudC5yZXNvbHZlUHNldWRvQ29udGVudCkobm9kZSwgc3R5bGVCZWZvcmUsIHRoaXMucHNldWRvQ29udGVudERhdGEpO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBjaGlsZCA9IG5vZGUuZmlyc3RDaGlsZDsgY2hpbGQ7IGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFIHx8IGNoaWxkLm5vZGVOYW1lICE9PSAnU0NSSVBUJyAmJlxuICAgICAgICAgICAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgICAgICAgICAgICAhY2hpbGQuaGFzQXR0cmlidXRlKElHTk9SRV9BVFRSSUJVVEUpICYmICh0eXBlb2YgdGhpcy5vcHRpb25zLmlnbm9yZUVsZW1lbnRzICE9PSAnZnVuY3Rpb24nIHx8XG4gICAgICAgICAgICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgICAgICAgICAgICF0aGlzLm9wdGlvbnMuaWdub3JlRWxlbWVudHMoY2hpbGQpKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY29weVN0eWxlcyB8fCBjaGlsZC5ub2RlTmFtZSAhPT0gJ1NUWUxFJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xvbmUuYXBwZW5kQ2hpbGQodGhpcy5jbG9uZU5vZGUoY2hpbGQpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGNvbnRlbnRBZnRlciA9ICgwLCBfUHNldWRvTm9kZUNvbnRlbnQucmVzb2x2ZVBzZXVkb0NvbnRlbnQpKG5vZGUsIHN0eWxlQWZ0ZXIsIHRoaXMucHNldWRvQ29udGVudERhdGEpO1xuICAgICAgICAgICAgKDAsIF9Qc2V1ZG9Ob2RlQ29udGVudC5wb3BDb3VudGVycykoY291bnRlcnMsIHRoaXMucHNldWRvQ29udGVudERhdGEpO1xuXG4gICAgICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCAmJiBjbG9uZSBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGlmIChzdHlsZUJlZm9yZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlubGluZUFsbEltYWdlcyhpbmxpbmVQc2V1ZG9FbGVtZW50KG5vZGUsIGNsb25lLCBzdHlsZUJlZm9yZSwgY29udGVudEJlZm9yZSwgUFNFVURPX0JFRk9SRSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3R5bGVBZnRlcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlubGluZUFsbEltYWdlcyhpbmxpbmVQc2V1ZG9FbGVtZW50KG5vZGUsIGNsb25lLCBzdHlsZUFmdGVyLCBjb250ZW50QWZ0ZXIsIFBTRVVET19BRlRFUikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3R5bGUgJiYgdGhpcy5jb3B5U3R5bGVzICYmICEobm9kZSBpbnN0YW5jZW9mIEhUTUxJRnJhbWVFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAoMCwgX1V0aWwuY29weUNTU1N0eWxlcykoc3R5bGUsIGNsb25lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pbmxpbmVBbGxJbWFnZXMoY2xvbmUpO1xuICAgICAgICAgICAgICAgIGlmIChub2RlLnNjcm9sbFRvcCAhPT0gMCB8fCBub2RlLnNjcm9sbExlZnQgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxlZEVsZW1lbnRzLnB1c2goW2Nsb25lLCBub2RlLnNjcm9sbExlZnQsIG5vZGUuc2Nyb2xsVG9wXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN3aXRjaCAobm9kZS5ub2RlTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdDQU5WQVMnOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNvcHlTdHlsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9uZUNhbnZhc0NvbnRlbnRzKG5vZGUsIGNsb25lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdURVhUQVJFQSc6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1NFTEVDVCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9uZS52YWx1ZSA9IG5vZGUudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY2xvbmU7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gRG9jdW1lbnRDbG9uZXI7XG59KCk7XG5cbnZhciBnZXRTaGVldEZvbnRzID0gZnVuY3Rpb24gZ2V0U2hlZXRGb250cyhzaGVldCwgZG9jdW1lbnQpIHtcbiAgICAvLyAkRmxvd0ZpeE1lXG4gICAgcmV0dXJuIChzaGVldC5jc3NSdWxlcyA/IEFycmF5LmZyb20oc2hlZXQuY3NzUnVsZXMpIDogW10pLmZpbHRlcihmdW5jdGlvbiAocnVsZSkge1xuICAgICAgICByZXR1cm4gcnVsZS50eXBlID09PSBDU1NSdWxlLkZPTlRfRkFDRV9SVUxFO1xuICAgIH0pLm1hcChmdW5jdGlvbiAocnVsZSkge1xuICAgICAgICB2YXIgc3JjID0gKDAsIF9iYWNrZ3JvdW5kLnBhcnNlQmFja2dyb3VuZEltYWdlKShydWxlLnN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3NyYycpKTtcbiAgICAgICAgdmFyIGZvcm1hdHMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzcmMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChzcmNbaV0ubWV0aG9kID09PSAndXJsJyAmJiBzcmNbaSArIDFdICYmIHNyY1tpICsgMV0ubWV0aG9kID09PSAnZm9ybWF0Jykge1xuICAgICAgICAgICAgICAgIHZhciBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgICAgIGEuaHJlZiA9IHNyY1tpXS5hcmdzWzBdO1xuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIGZvbnQgPSB7XG4gICAgICAgICAgICAgICAgICAgIHNyYzogYS5ocmVmLFxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IHNyY1tpICsgMV0uYXJnc1swXVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZm9ybWF0cy5wdXNoKGZvbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC8vIFRPRE8gc2VsZWN0IGNvcnJlY3QgZm9ybWF0IGZvciBicm93c2VyKSxcblxuICAgICAgICAgICAgZm9ybWF0czogZm9ybWF0cy5maWx0ZXIoZnVuY3Rpb24gKGZvbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKC9ed29mZi9pLnRlc3QoZm9udC5mb3JtYXQpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgZm9udEZhY2U6IHJ1bGUuc3R5bGVcbiAgICAgICAgfTtcbiAgICB9KS5maWx0ZXIoZnVuY3Rpb24gKGZvbnQpIHtcbiAgICAgICAgcmV0dXJuIGZvbnQuZm9ybWF0cy5sZW5ndGg7XG4gICAgfSk7XG59O1xuXG52YXIgY3JlYXRlU3R5bGVTaGVldEZvbnRzRnJvbVRleHQgPSBmdW5jdGlvbiBjcmVhdGVTdHlsZVNoZWV0Rm9udHNGcm9tVGV4dCh0ZXh0LCBiYXNlSHJlZikge1xuICAgIHZhciBkb2MgPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoJycpO1xuICAgIHZhciBiYXNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYmFzZScpO1xuICAgIC8vICRGbG93Rml4TWVcbiAgICBiYXNlLmhyZWYgPSBiYXNlSHJlZjtcbiAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXG4gICAgc3R5bGUudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIGlmIChkb2MuaGVhZCkge1xuICAgICAgICBkb2MuaGVhZC5hcHBlbmRDaGlsZChiYXNlKTtcbiAgICB9XG4gICAgaWYgKGRvYy5ib2R5KSB7XG4gICAgICAgIGRvYy5ib2R5LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGUuc2hlZXQgPyBnZXRTaGVldEZvbnRzKHN0eWxlLnNoZWV0LCBkb2MpIDogW107XG59O1xuXG52YXIgcmVzdG9yZU93bmVyU2Nyb2xsID0gZnVuY3Rpb24gcmVzdG9yZU93bmVyU2Nyb2xsKG93bmVyRG9jdW1lbnQsIHgsIHkpIHtcbiAgICBpZiAob3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyAmJiAoeCAhPT0gb3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5wYWdlWE9mZnNldCB8fCB5ICE9PSBvd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LnBhZ2VZT2Zmc2V0KSkge1xuICAgICAgICBvd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LnNjcm9sbFRvKHgsIHkpO1xuICAgIH1cbn07XG5cbnZhciBjbG9uZUNhbnZhc0NvbnRlbnRzID0gZnVuY3Rpb24gY2xvbmVDYW52YXNDb250ZW50cyhjYW52YXMsIGNsb25lZENhbnZhcykge1xuICAgIHRyeSB7XG4gICAgICAgIGlmIChjbG9uZWRDYW52YXMpIHtcbiAgICAgICAgICAgIGNsb25lZENhbnZhcy53aWR0aCA9IGNhbnZhcy53aWR0aDtcbiAgICAgICAgICAgIGNsb25lZENhbnZhcy5oZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuICAgICAgICAgICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgdmFyIGNsb25lZEN0eCA9IGNsb25lZENhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgaWYgKGN0eCkge1xuICAgICAgICAgICAgICAgIGNsb25lZEN0eC5wdXRJbWFnZURhdGEoY3R4LmdldEltYWdlRGF0YSgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpLCAwLCAwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2xvbmVkQ3R4LmRyYXdJbWFnZShjYW52YXMsIDAsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge31cbn07XG5cbnZhciBpbmxpbmVQc2V1ZG9FbGVtZW50ID0gZnVuY3Rpb24gaW5saW5lUHNldWRvRWxlbWVudChub2RlLCBjbG9uZSwgc3R5bGUsIGNvbnRlbnRJdGVtcywgcHNldWRvRWx0KSB7XG4gICAgaWYgKCFzdHlsZSB8fCAhc3R5bGUuY29udGVudCB8fCBzdHlsZS5jb250ZW50ID09PSAnbm9uZScgfHwgc3R5bGUuY29udGVudCA9PT0gJy1tb3otYWx0LWNvbnRlbnQnIHx8IHN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGFub255bW91c1JlcGxhY2VkRWxlbWVudCA9IGNsb25lLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHRtbDJjYW52YXNwc2V1ZG9lbGVtZW50Jyk7XG4gICAgKDAsIF9VdGlsLmNvcHlDU1NTdHlsZXMpKHN0eWxlLCBhbm9ueW1vdXNSZXBsYWNlZEVsZW1lbnQpO1xuXG4gICAgaWYgKGNvbnRlbnRJdGVtcykge1xuICAgICAgICB2YXIgbGVuID0gY29udGVudEl0ZW1zLmxlbmd0aDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBjb250ZW50SXRlbXNbaV07XG4gICAgICAgICAgICBzd2l0Y2ggKGl0ZW0udHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgX1BzZXVkb05vZGVDb250ZW50LlBTRVVET19DT05URU5UX0lURU1fVFlQRS5JTUFHRTpcbiAgICAgICAgICAgICAgICAgICAgdmFyIGltZyA9IGNsb25lLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zcmMgPSAoMCwgX2JhY2tncm91bmQucGFyc2VCYWNrZ3JvdW5kSW1hZ2UpKCd1cmwoJyArIGl0ZW0udmFsdWUgKyAnKScpWzBdLmFyZ3NbMF07XG4gICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICAgICAgICAgICAgICBhbm9ueW1vdXNSZXBsYWNlZEVsZW1lbnQuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBfUHNldWRvTm9kZUNvbnRlbnQuUFNFVURPX0NPTlRFTlRfSVRFTV9UWVBFLlRFWFQ6XG4gICAgICAgICAgICAgICAgICAgIGFub255bW91c1JlcGxhY2VkRWxlbWVudC5hcHBlbmRDaGlsZChjbG9uZS5vd25lckRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGl0ZW0udmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhbm9ueW1vdXNSZXBsYWNlZEVsZW1lbnQuY2xhc3NOYW1lID0gUFNFVURPX0hJREVfRUxFTUVOVF9DTEFTU19CRUZPUkUgKyAnICcgKyBQU0VVRE9fSElERV9FTEVNRU5UX0NMQVNTX0FGVEVSO1xuICAgIGNsb25lLmNsYXNzTmFtZSArPSBwc2V1ZG9FbHQgPT09IFBTRVVET19CRUZPUkUgPyAnICcgKyBQU0VVRE9fSElERV9FTEVNRU5UX0NMQVNTX0JFRk9SRSA6ICcgJyArIFBTRVVET19ISURFX0VMRU1FTlRfQ0xBU1NfQUZURVI7XG4gICAgaWYgKHBzZXVkb0VsdCA9PT0gUFNFVURPX0JFRk9SRSkge1xuICAgICAgICBjbG9uZS5pbnNlcnRCZWZvcmUoYW5vbnltb3VzUmVwbGFjZWRFbGVtZW50LCBjbG9uZS5maXJzdENoaWxkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjbG9uZS5hcHBlbmRDaGlsZChhbm9ueW1vdXNSZXBsYWNlZEVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBhbm9ueW1vdXNSZXBsYWNlZEVsZW1lbnQ7XG59O1xuXG52YXIgVVJMX1JFR0VYUCA9IC9edXJsXFwoKC4rKVxcKSQvaTtcbnZhciBQU0VVRE9fQkVGT1JFID0gJzpiZWZvcmUnO1xudmFyIFBTRVVET19BRlRFUiA9ICc6YWZ0ZXInO1xudmFyIFBTRVVET19ISURFX0VMRU1FTlRfQ0xBU1NfQkVGT1JFID0gJ19fX2h0bWwyY2FudmFzX19fcHNldWRvZWxlbWVudF9iZWZvcmUnO1xudmFyIFBTRVVET19ISURFX0VMRU1FTlRfQ0xBU1NfQUZURVIgPSAnX19faHRtbDJjYW52YXNfX19wc2V1ZG9lbGVtZW50X2FmdGVyJztcblxudmFyIFBTRVVET19ISURFX0VMRU1FTlRfU1RZTEUgPSAne1xcbiAgICBjb250ZW50OiBcIlwiICFpbXBvcnRhbnQ7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59JztcblxudmFyIGNyZWF0ZVBzZXVkb0hpZGVTdHlsZXMgPSBmdW5jdGlvbiBjcmVhdGVQc2V1ZG9IaWRlU3R5bGVzKGJvZHkpIHtcbiAgICBjcmVhdGVTdHlsZXMoYm9keSwgJy4nICsgUFNFVURPX0hJREVfRUxFTUVOVF9DTEFTU19CRUZPUkUgKyBQU0VVRE9fQkVGT1JFICsgUFNFVURPX0hJREVfRUxFTUVOVF9TVFlMRSArICdcXG4gICAgICAgICAuJyArIFBTRVVET19ISURFX0VMRU1FTlRfQ0xBU1NfQUZURVIgKyBQU0VVRE9fQUZURVIgKyBQU0VVRE9fSElERV9FTEVNRU5UX1NUWUxFKTtcbn07XG5cbnZhciBjcmVhdGVTdHlsZXMgPSBmdW5jdGlvbiBjcmVhdGVTdHlsZXMoYm9keSwgc3R5bGVzKSB7XG4gICAgdmFyIHN0eWxlID0gYm9keS5vd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgc3R5bGUuaW5uZXJIVE1MID0gc3R5bGVzO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufTtcblxudmFyIGluaXROb2RlID0gZnVuY3Rpb24gaW5pdE5vZGUoX3JlZikge1xuICAgIHZhciBfcmVmMiA9IF9zbGljZWRUb0FycmF5KF9yZWYsIDMpLFxuICAgICAgICBlbGVtZW50ID0gX3JlZjJbMF0sXG4gICAgICAgIHggPSBfcmVmMlsxXSxcbiAgICAgICAgeSA9IF9yZWYyWzJdO1xuXG4gICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0geDtcbiAgICBlbGVtZW50LnNjcm9sbFRvcCA9IHk7XG59O1xuXG52YXIgZ2VuZXJhdGVJZnJhbWVLZXkgPSBmdW5jdGlvbiBnZW5lcmF0ZUlmcmFtZUtleSgpIHtcbiAgICByZXR1cm4gTWF0aC5jZWlsKERhdGUubm93KCkgKyBNYXRoLnJhbmRvbSgpICogMTAwMDAwMDApLnRvU3RyaW5nKDE2KTtcbn07XG5cbnZhciBEQVRBX1VSSV9SRUdFWFAgPSAvXmRhdGE6dGV4dFxcLyguKyk7KGJhc2U2NCk/LCguKikkL2k7XG5cbnZhciBnZXRJZnJhbWVEb2N1bWVudEVsZW1lbnQgPSBmdW5jdGlvbiBnZXRJZnJhbWVEb2N1bWVudEVsZW1lbnQobm9kZSwgb3B0aW9ucykge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobm9kZS5jb250ZW50V2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gb3B0aW9ucy5wcm94eSA/ICgwLCBfUHJveHkuUHJveHkpKG5vZGUuc3JjLCBvcHRpb25zKS50aGVuKGZ1bmN0aW9uIChodG1sKSB7XG4gICAgICAgICAgICB2YXIgbWF0Y2ggPSBodG1sLm1hdGNoKERBVEFfVVJJX1JFR0VYUCk7XG4gICAgICAgICAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBtYXRjaFsyXSA9PT0gJ2Jhc2U2NCcgPyB3aW5kb3cuYXRvYihkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbM10pKSA6IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSk7XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGh0bWwpIHtcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVJZnJhbWVDb250YWluZXIobm9kZS5vd25lckRvY3VtZW50LCAoMCwgX0JvdW5kcy5wYXJzZUJvdW5kcykobm9kZSwgMCwgMCkpLnRoZW4oZnVuY3Rpb24gKGNsb25lSWZyYW1lQ29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNsb25lV2luZG93ID0gY2xvbmVJZnJhbWVDb250YWluZXIuY29udGVudFdpbmRvdztcbiAgICAgICAgICAgICAgICB2YXIgZG9jdW1lbnRDbG9uZSA9IGNsb25lV2luZG93LmRvY3VtZW50O1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnRDbG9uZS5vcGVuKCk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnRDbG9uZS53cml0ZShodG1sKTtcbiAgICAgICAgICAgICAgICB2YXIgaWZyYW1lTG9hZCA9IGlmcmFtZUxvYWRlcihjbG9uZUlmcmFtZUNvbnRhaW5lcikudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudENsb25lLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50Q2xvbmUuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWZyYW1lTG9hZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KSA6IFByb21pc2UucmVqZWN0KCk7XG4gICAgfVxufTtcblxudmFyIGNyZWF0ZUlmcmFtZUNvbnRhaW5lciA9IGZ1bmN0aW9uIGNyZWF0ZUlmcmFtZUNvbnRhaW5lcihvd25lckRvY3VtZW50LCBib3VuZHMpIHtcbiAgICB2YXIgY2xvbmVJZnJhbWVDb250YWluZXIgPSBvd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuXG4gICAgY2xvbmVJZnJhbWVDb250YWluZXIuY2xhc3NOYW1lID0gJ2h0bWwyY2FudmFzLWNvbnRhaW5lcic7XG4gICAgY2xvbmVJZnJhbWVDb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIGNsb25lSWZyYW1lQ29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICBjbG9uZUlmcmFtZUNvbnRhaW5lci5zdHlsZS5sZWZ0ID0gJy0xMDAwMHB4JztcbiAgICBjbG9uZUlmcmFtZUNvbnRhaW5lci5zdHlsZS50b3AgPSAnMHB4JztcbiAgICBjbG9uZUlmcmFtZUNvbnRhaW5lci5zdHlsZS5ib3JkZXIgPSAnMCc7XG4gICAgY2xvbmVJZnJhbWVDb250YWluZXIud2lkdGggPSBib3VuZHMud2lkdGgudG9TdHJpbmcoKTtcbiAgICBjbG9uZUlmcmFtZUNvbnRhaW5lci5oZWlnaHQgPSBib3VuZHMuaGVpZ2h0LnRvU3RyaW5nKCk7XG4gICAgY2xvbmVJZnJhbWVDb250YWluZXIuc2Nyb2xsaW5nID0gJ25vJzsgLy8gaW9zIHdvbid0IHNjcm9sbCB3aXRob3V0IGl0XG4gICAgY2xvbmVJZnJhbWVDb250YWluZXIuc2V0QXR0cmlidXRlKElHTk9SRV9BVFRSSUJVVEUsICd0cnVlJyk7XG4gICAgaWYgKCFvd25lckRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCB0cnVlID8gJ0JvZHkgZWxlbWVudCBub3QgZm91bmQgaW4gRG9jdW1lbnQgdGhhdCBpcyBnZXR0aW5nIHJlbmRlcmVkJyA6ICcnKTtcbiAgICB9XG5cbiAgICBvd25lckRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2xvbmVJZnJhbWVDb250YWluZXIpO1xuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjbG9uZUlmcmFtZUNvbnRhaW5lcik7XG59O1xuXG52YXIgaWZyYW1lTG9hZGVyID0gZnVuY3Rpb24gaWZyYW1lTG9hZGVyKGNsb25lSWZyYW1lQ29udGFpbmVyKSB7XG4gICAgdmFyIGNsb25lV2luZG93ID0gY2xvbmVJZnJhbWVDb250YWluZXIuY29udGVudFdpbmRvdztcbiAgICB2YXIgZG9jdW1lbnRDbG9uZSA9IGNsb25lV2luZG93LmRvY3VtZW50O1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgY2xvbmVXaW5kb3cub25sb2FkID0gY2xvbmVJZnJhbWVDb250YWluZXIub25sb2FkID0gZG9jdW1lbnRDbG9uZS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50Q2xvbmUuYm9keS5jaGlsZE5vZGVzLmxlbmd0aCA+IDAgJiYgZG9jdW1lbnRDbG9uZS5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGNsb25lSWZyYW1lQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgIH07XG4gICAgfSk7XG59O1xuXG52YXIgY2xvbmVXaW5kb3cgPSBleHBvcnRzLmNsb25lV2luZG93ID0gZnVuY3Rpb24gY2xvbmVXaW5kb3cob3duZXJEb2N1bWVudCwgYm91bmRzLCByZWZlcmVuY2VFbGVtZW50LCBvcHRpb25zLCBsb2dnZXIsIHJlbmRlcmVyKSB7XG4gICAgdmFyIGNsb25lciA9IG5ldyBEb2N1bWVudENsb25lcihyZWZlcmVuY2VFbGVtZW50LCBvcHRpb25zLCBsb2dnZXIsIGZhbHNlLCByZW5kZXJlcik7XG4gICAgdmFyIHNjcm9sbFggPSBvd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LnBhZ2VYT2Zmc2V0O1xuICAgIHZhciBzY3JvbGxZID0gb3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5wYWdlWU9mZnNldDtcblxuICAgIHJldHVybiBjcmVhdGVJZnJhbWVDb250YWluZXIob3duZXJEb2N1bWVudCwgYm91bmRzKS50aGVuKGZ1bmN0aW9uIChjbG9uZUlmcmFtZUNvbnRhaW5lcikge1xuICAgICAgICB2YXIgY2xvbmVXaW5kb3cgPSBjbG9uZUlmcmFtZUNvbnRhaW5lci5jb250ZW50V2luZG93O1xuICAgICAgICB2YXIgZG9jdW1lbnRDbG9uZSA9IGNsb25lV2luZG93LmRvY3VtZW50O1xuXG4gICAgICAgIC8qIENocm9tZSBkb2Vzbid0IGRldGVjdCByZWxhdGl2ZSBiYWNrZ3JvdW5kLWltYWdlcyBhc3NpZ25lZCBpbiBpbmxpbmUgPHN0eWxlPiBzaGVldHMgd2hlbiBmZXRjaGVkIHRocm91Z2ggZ2V0Q29tcHV0ZWRTdHlsZVxuICAgICAgICAgICAgIGlmIHdpbmRvdyB1cmwgaXMgYWJvdXQ6YmxhbmssIHdlIGNhbiBhc3NpZ24gdGhlIHVybCB0byBjdXJyZW50IGJ5IHdyaXRpbmcgb250byB0aGUgZG9jdW1lbnRcbiAgICAgICAgICAgICAqL1xuXG4gICAgICAgIHZhciBpZnJhbWVMb2FkID0gaWZyYW1lTG9hZGVyKGNsb25lSWZyYW1lQ29udGFpbmVyKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNsb25lci5zY3JvbGxlZEVsZW1lbnRzLmZvckVhY2goaW5pdE5vZGUpO1xuICAgICAgICAgICAgY2xvbmVXaW5kb3cuc2Nyb2xsVG8oYm91bmRzLmxlZnQsIGJvdW5kcy50b3ApO1xuICAgICAgICAgICAgaWYgKC8oaVBhZHxpUGhvbmV8aVBvZCkvZy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmIChjbG9uZVdpbmRvdy5zY3JvbGxZICE9PSBib3VuZHMudG9wIHx8IGNsb25lV2luZG93LnNjcm9sbFggIT09IGJvdW5kcy5sZWZ0KSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50Q2xvbmUuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnRvcCA9IC1ib3VuZHMudG9wICsgJ3B4JztcbiAgICAgICAgICAgICAgICBkb2N1bWVudENsb25lLmRvY3VtZW50RWxlbWVudC5zdHlsZS5sZWZ0ID0gLWJvdW5kcy5sZWZ0ICsgJ3B4JztcbiAgICAgICAgICAgICAgICBkb2N1bWVudENsb25lLmRvY3VtZW50RWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBQcm9taXNlLnJlc29sdmUoW2Nsb25lSWZyYW1lQ29udGFpbmVyLCBjbG9uZXIuY2xvbmVkUmVmZXJlbmNlRWxlbWVudCwgY2xvbmVyLnJlc291cmNlTG9hZGVyXSk7XG5cbiAgICAgICAgICAgIHZhciBvbmNsb25lID0gb3B0aW9ucy5vbmNsb25lO1xuXG4gICAgICAgICAgICByZXR1cm4gY2xvbmVyLmNsb25lZFJlZmVyZW5jZUVsZW1lbnQgaW5zdGFuY2VvZiBjbG9uZVdpbmRvdy5IVE1MRWxlbWVudCB8fCBjbG9uZXIuY2xvbmVkUmVmZXJlbmNlRWxlbWVudCBpbnN0YW5jZW9mIG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuSFRNTEVsZW1lbnQgfHwgY2xvbmVyLmNsb25lZFJlZmVyZW5jZUVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA/IHR5cGVvZiBvbmNsb25lID09PSAnZnVuY3Rpb24nID8gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9uY2xvbmUoZG9jdW1lbnRDbG9uZSk7XG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfSkgOiByZXN1bHQgOiBQcm9taXNlLnJlamVjdCggdHJ1ZSA/ICdFcnJvciBmaW5kaW5nIHRoZSAnICsgcmVmZXJlbmNlRWxlbWVudC5ub2RlTmFtZSArICcgaW4gdGhlIGNsb25lZCBkb2N1bWVudCcgOiAnJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50Q2xvbmUub3BlbigpO1xuICAgICAgICBkb2N1bWVudENsb25lLndyaXRlKHNlcmlhbGl6ZURvY3R5cGUoZG9jdW1lbnQuZG9jdHlwZSkgKyAnPGh0bWw+PC9odG1sPicpO1xuICAgICAgICAvLyBDaHJvbWUgc2Nyb2xscyB0aGUgcGFyZW50IGRvY3VtZW50IGZvciBzb21lIHJlYXNvbiBhZnRlciB0aGUgd3JpdGUgdG8gdGhlIGNsb25lZCB3aW5kb3c/Pz9cbiAgICAgICAgcmVzdG9yZU93bmVyU2Nyb2xsKHJlZmVyZW5jZUVsZW1lbnQub3duZXJEb2N1bWVudCwgc2Nyb2xsWCwgc2Nyb2xsWSk7XG4gICAgICAgIGRvY3VtZW50Q2xvbmUucmVwbGFjZUNoaWxkKGRvY3VtZW50Q2xvbmUuYWRvcHROb2RlKGNsb25lci5kb2N1bWVudEVsZW1lbnQpLCBkb2N1bWVudENsb25lLmRvY3VtZW50RWxlbWVudCk7XG4gICAgICAgIGRvY3VtZW50Q2xvbmUuY2xvc2UoKTtcblxuICAgICAgICByZXR1cm4gaWZyYW1lTG9hZDtcbiAgICB9KTtcbn07XG5cbnZhciBzZXJpYWxpemVEb2N0eXBlID0gZnVuY3Rpb24gc2VyaWFsaXplRG9jdHlwZShkb2N0eXBlKSB7XG4gICAgdmFyIHN0ciA9ICcnO1xuICAgIGlmIChkb2N0eXBlKSB7XG4gICAgICAgIHN0ciArPSAnPCFET0NUWVBFICc7XG4gICAgICAgIGlmIChkb2N0eXBlLm5hbWUpIHtcbiAgICAgICAgICAgIHN0ciArPSBkb2N0eXBlLm5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZG9jdHlwZS5pbnRlcm5hbFN1YnNldCkge1xuICAgICAgICAgICAgc3RyICs9IGRvY3R5cGUuaW50ZXJuYWxTdWJzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZG9jdHlwZS5wdWJsaWNJZCkge1xuICAgICAgICAgICAgc3RyICs9ICdcIicgKyBkb2N0eXBlLnB1YmxpY0lkICsgJ1wiJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkb2N0eXBlLnN5c3RlbUlkKSB7XG4gICAgICAgICAgICBzdHIgKz0gJ1wiJyArIGRvY3R5cGUuc3lzdGVtSWQgKyAnXCInO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RyICs9ICc+JztcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyO1xufTtcblxuLyoqKi8gfSksXG4vKiA1NSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlJlc291cmNlU3RvcmUgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfRmVhdHVyZSA9IF9fd2VicGFja19yZXF1aXJlX18oMTApO1xuXG52YXIgX0ZlYXR1cmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRmVhdHVyZSk7XG5cbnZhciBfUHJveHkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI2KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFJlc291cmNlTG9hZGVyID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlc291cmNlTG9hZGVyKG9wdGlvbnMsIGxvZ2dlciwgd2luZG93KSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSZXNvdXJjZUxvYWRlcik7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5fd2luZG93ID0gd2luZG93O1xuICAgICAgICB0aGlzLm9yaWdpbiA9IHRoaXMuZ2V0T3JpZ2luKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgdGhpcy5jYWNoZSA9IHt9O1xuICAgICAgICB0aGlzLmxvZ2dlciA9IGxvZ2dlcjtcbiAgICAgICAgdGhpcy5faW5kZXggPSAwO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhSZXNvdXJjZUxvYWRlciwgW3tcbiAgICAgICAga2V5OiAnbG9hZEltYWdlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWRJbWFnZShzcmMpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmhhc1Jlc291cmNlSW5DYWNoZShzcmMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNyYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc0Jsb2JJbWFnZShzcmMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZVtzcmNdID0gX2xvYWRJbWFnZShzcmMsIHRoaXMub3B0aW9ucy5pbWFnZVRpbWVvdXQgfHwgMCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNyYztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFpc1NWRyhzcmMpIHx8IF9GZWF0dXJlMi5kZWZhdWx0LlNVUFBPUlRfU1ZHX0RSQVdJTkcpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmFsbG93VGFpbnQgPT09IHRydWUgfHwgaXNJbmxpbmVJbWFnZShzcmMpIHx8IHRoaXMuaXNTYW1lT3JpZ2luKHNyYykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRkSW1hZ2Uoc3JjLCBzcmMsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmlzU2FtZU9yaWdpbihzcmMpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLnByb3h5ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZVtzcmNdID0gKDAsIF9Qcm94eS5Qcm94eSkoc3JjLCB0aGlzLm9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKHNyYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfbG9hZEltYWdlKHNyYywgX3RoaXMub3B0aW9ucy5pbWFnZVRpbWVvdXQgfHwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzcmM7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLnVzZUNPUlMgPT09IHRydWUgJiYgX0ZlYXR1cmUyLmRlZmF1bHQuU1VQUE9SVF9DT1JTX0lNQUdFUykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRkSW1hZ2Uoc3JjLCBzcmMsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdpbmxpbmVJbWFnZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbmxpbmVJbWFnZShzcmMpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICBpZiAoaXNJbmxpbmVJbWFnZShzcmMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9sb2FkSW1hZ2Uoc3JjLCB0aGlzLm9wdGlvbnMuaW1hZ2VUaW1lb3V0IHx8IDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuaGFzUmVzb3VyY2VJbkNhY2hlKHNyYykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jYWNoZVtzcmNdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzU2FtZU9yaWdpbihzcmMpICYmIHR5cGVvZiB0aGlzLm9wdGlvbnMucHJveHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVbc3JjXSA9ICgwLCBfUHJveHkuUHJveHkpKHNyYywgdGhpcy5vcHRpb25zKS50aGVuKGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9sb2FkSW1hZ2Uoc3JjLCBfdGhpczIub3B0aW9ucy5pbWFnZVRpbWVvdXQgfHwgMCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnhockltYWdlKHNyYyk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3hockltYWdlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHhockltYWdlKHNyYykge1xuICAgICAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgICAgIHRoaXMuY2FjaGVbc3JjXSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCdGYWlsZWQgdG8gZmV0Y2ggaW1hZ2UgJyArIHNyYy5zdWJzdHJpbmcoMCwgMjU2KSArICcgd2l0aCBzdGF0dXMgY29kZSAnICsgeGhyLnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSByZWFkZXIucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKHhoci5yZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYmxvYic7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzMy5vcHRpb25zLmltYWdlVGltZW91dCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGltZW91dCA9IF90aGlzMy5vcHRpb25zLmltYWdlVGltZW91dDtcbiAgICAgICAgICAgICAgICAgICAgeGhyLnRpbWVvdXQgPSB0aW1lb3V0O1xuICAgICAgICAgICAgICAgICAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdCggdHJ1ZSA/ICdUaW1lZCBvdXQgKCcgKyB0aW1lb3V0ICsgJ21zKSBmZXRjaGluZyAnICsgc3JjLnN1YnN0cmluZygwLCAyNTYpIDogJycpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB4aHIub3BlbignR0VUJywgc3JjLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB4aHIuc2VuZCgpO1xuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9sb2FkSW1hZ2Uoc3JjLCBfdGhpczMub3B0aW9ucy5pbWFnZVRpbWVvdXQgfHwgMCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVbc3JjXTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnbG9hZENhbnZhcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkQ2FudmFzKG5vZGUpIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBTdHJpbmcodGhpcy5faW5kZXgrKyk7XG4gICAgICAgICAgICB0aGlzLmNhY2hlW2tleV0gPSBQcm9taXNlLnJlc29sdmUobm9kZSk7XG4gICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdoYXNSZXNvdXJjZUluQ2FjaGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGFzUmVzb3VyY2VJbkNhY2hlKGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiB0aGlzLmNhY2hlW2tleV0gIT09ICd1bmRlZmluZWQnO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdhZGRJbWFnZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRJbWFnZShrZXksIHNyYywgdXNlQ09SUykge1xuICAgICAgICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKCdBZGRlZCBpbWFnZSAnICsga2V5LnN1YnN0cmluZygwLCAyNTYpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGltYWdlTG9hZEhhbmRsZXIgPSBmdW5jdGlvbiBpbWFnZUxvYWRIYW5kbGVyKHN1cHBvcnRzRGF0YUltYWdlcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGltZyk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIC8vaW9zIHNhZmFyaSAxMC4zIHRhaW50cyBjYW52YXMgd2l0aCBkYXRhIHVybHMgdW5sZXNzIGNyb3NzT3JpZ2luIGlzIHNldCB0byBhbm9ueW1vdXNcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzdXBwb3J0c0RhdGFJbWFnZXMgfHwgdXNlQ09SUykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nLmNyb3NzT3JpZ2luID0gJ2Fub255bW91cyc7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpbWcub25lcnJvciA9IHJlamVjdDtcbiAgICAgICAgICAgICAgICAgICAgaW1nLnNyYyA9IHNyYztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGltZy5jb21wbGV0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSW5saW5lIFhNTCBpbWFnZXMgbWF5IGZhaWwgdG8gcGFyc2UsIHRocm93aW5nIGFuIEVycm9yIGxhdGVyIG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGltZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGhpczQub3B0aW9ucy5pbWFnZVRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0aW1lb3V0ID0gX3RoaXM0Lm9wdGlvbnMuaW1hZ2VUaW1lb3V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdCggdHJ1ZSA/ICdUaW1lZCBvdXQgKCcgKyB0aW1lb3V0ICsgJ21zKSBmZXRjaGluZyAnICsgc3JjLnN1YnN0cmluZygwLCAyNTYpIDogJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgdGltZW91dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMuY2FjaGVba2V5XSA9IGlzSW5saW5lQmFzZTY0SW1hZ2Uoc3JjKSAmJiAhaXNTVkcoc3JjKSA/IC8vICRGbG93Rml4TWVcbiAgICAgICAgICAgIF9GZWF0dXJlMi5kZWZhdWx0LlNVUFBPUlRfQkFTRTY0X0RSQVdJTkcoc3JjKS50aGVuKGltYWdlTG9hZEhhbmRsZXIpIDogaW1hZ2VMb2FkSGFuZGxlcih0cnVlKTtcbiAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2lzU2FtZU9yaWdpbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc1NhbWVPcmlnaW4odXJsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRPcmlnaW4odXJsKSA9PT0gdGhpcy5vcmlnaW47XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldE9yaWdpbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRPcmlnaW4odXJsKSB7XG4gICAgICAgICAgICB2YXIgbGluayA9IHRoaXMuX2xpbmsgfHwgKHRoaXMuX2xpbmsgPSB0aGlzLl93aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpKTtcbiAgICAgICAgICAgIGxpbmsuaHJlZiA9IHVybDtcbiAgICAgICAgICAgIGxpbmsuaHJlZiA9IGxpbmsuaHJlZjsgLy8gSUU5LCBMT0whIC0gaHR0cDovL2pzZmlkZGxlLm5ldC9uaWtsYXN2aC8yZTQ4Yi9cbiAgICAgICAgICAgIHJldHVybiBsaW5rLnByb3RvY29sICsgbGluay5ob3N0bmFtZSArIGxpbmsucG9ydDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVhZHknLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVhZHkoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmNhY2hlKTtcbiAgICAgICAgICAgIHZhciB2YWx1ZXMgPSBrZXlzLm1hcChmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzNS5jYWNoZVtzdHJdLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczUubG9nZ2VyLmxvZygnVW5hYmxlIHRvIGxvYWQgaW1hZ2UnLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHZhbHVlcykudGhlbihmdW5jdGlvbiAoaW1hZ2VzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXM1LmxvZ2dlci5sb2coJ0ZpbmlzaGVkIGxvYWRpbmcgJyArIGltYWdlcy5sZW5ndGggKyAnIGltYWdlcycsIGltYWdlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUmVzb3VyY2VTdG9yZShrZXlzLCBpbWFnZXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gUmVzb3VyY2VMb2FkZXI7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFJlc291cmNlTG9hZGVyO1xuXG52YXIgUmVzb3VyY2VTdG9yZSA9IGV4cG9ydHMuUmVzb3VyY2VTdG9yZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZXNvdXJjZVN0b3JlKGtleXMsIHJlc291cmNlcykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVzb3VyY2VTdG9yZSk7XG5cbiAgICAgICAgdGhpcy5fa2V5cyA9IGtleXM7XG4gICAgICAgIHRoaXMuX3Jlc291cmNlcyA9IHJlc291cmNlcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoUmVzb3VyY2VTdG9yZSwgW3tcbiAgICAgICAga2V5OiAnZ2V0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuX2tleXMuaW5kZXhPZihrZXkpO1xuICAgICAgICAgICAgcmV0dXJuIGluZGV4ID09PSAtMSA/IG51bGwgOiB0aGlzLl9yZXNvdXJjZXNbaW5kZXhdO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFJlc291cmNlU3RvcmU7XG59KCk7XG5cbnZhciBJTkxJTkVfU1ZHID0gL15kYXRhOmltYWdlXFwvc3ZnXFwreG1sL2k7XG52YXIgSU5MSU5FX0JBU0U2NCA9IC9eZGF0YTppbWFnZVxcLy4qO2Jhc2U2NCwvaTtcbnZhciBJTkxJTkVfSU1HID0gL15kYXRhOmltYWdlXFwvLiovaTtcblxudmFyIGlzSW5saW5lSW1hZ2UgPSBmdW5jdGlvbiBpc0lubGluZUltYWdlKHNyYykge1xuICAgIHJldHVybiBJTkxJTkVfSU1HLnRlc3Qoc3JjKTtcbn07XG52YXIgaXNJbmxpbmVCYXNlNjRJbWFnZSA9IGZ1bmN0aW9uIGlzSW5saW5lQmFzZTY0SW1hZ2Uoc3JjKSB7XG4gICAgcmV0dXJuIElOTElORV9CQVNFNjQudGVzdChzcmMpO1xufTtcbnZhciBpc0Jsb2JJbWFnZSA9IGZ1bmN0aW9uIGlzQmxvYkltYWdlKHNyYykge1xuICAgIHJldHVybiBzcmMuc3Vic3RyKDAsIDQpID09PSAnYmxvYic7XG59O1xuXG52YXIgaXNTVkcgPSBmdW5jdGlvbiBpc1NWRyhzcmMpIHtcbiAgICByZXR1cm4gc3JjLnN1YnN0cigtMykudG9Mb3dlckNhc2UoKSA9PT0gJ3N2ZycgfHwgSU5MSU5FX1NWRy50ZXN0KHNyYyk7XG59O1xuXG52YXIgX2xvYWRJbWFnZSA9IGZ1bmN0aW9uIF9sb2FkSW1hZ2Uoc3JjLCB0aW1lb3V0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoaW1nKTtcbiAgICAgICAgfTtcbiAgICAgICAgaW1nLm9uZXJyb3IgPSByZWplY3Q7XG4gICAgICAgIGltZy5zcmMgPSBzcmM7XG4gICAgICAgIGlmIChpbWcuY29tcGxldGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIC8vIElubGluZSBYTUwgaW1hZ2VzIG1heSBmYWlsIHRvIHBhcnNlLCB0aHJvd2luZyBhbiBFcnJvciBsYXRlciBvblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShpbWcpO1xuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGltZW91dCkge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdCggdHJ1ZSA/ICdUaW1lZCBvdXQgKCcgKyB0aW1lb3V0ICsgJ21zKSBsb2FkaW5nIGltYWdlJyA6ICcnKTtcbiAgICAgICAgICAgIH0sIHRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG4vKioqLyB9KSxcbi8qIDU2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucGFyc2VDb250ZW50ID0gZXhwb3J0cy5yZXNvbHZlUHNldWRvQ29udGVudCA9IGV4cG9ydHMucG9wQ291bnRlcnMgPSBleHBvcnRzLnBhcnNlQ291bnRlclJlc2V0ID0gZXhwb3J0cy5UT0tFTl9UWVBFID0gZXhwb3J0cy5QU0VVRE9fQ09OVEVOVF9JVEVNX1RZUEUgPSB1bmRlZmluZWQ7XG5cbnZhciBfc2xpY2VkVG9BcnJheSA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0pIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfSByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IHJldHVybiBhcnI7IH0gZWxzZSBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSB7IHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7IH0gZWxzZSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9IH07IH0oKTtcblxudmFyIF9MaXN0SXRlbSA9IF9fd2VicGFja19yZXF1aXJlX18oMTQpO1xuXG52YXIgX2xpc3RTdHlsZSA9IF9fd2VicGFja19yZXF1aXJlX18oOCk7XG5cbnZhciBQU0VVRE9fQ09OVEVOVF9JVEVNX1RZUEUgPSBleHBvcnRzLlBTRVVET19DT05URU5UX0lURU1fVFlQRSA9IHtcbiAgICBURVhUOiAwLFxuICAgIElNQUdFOiAxXG59O1xuXG52YXIgVE9LRU5fVFlQRSA9IGV4cG9ydHMuVE9LRU5fVFlQRSA9IHtcbiAgICBTVFJJTkc6IDAsXG4gICAgQVRUUklCVVRFOiAxLFxuICAgIFVSTDogMixcbiAgICBDT1VOVEVSOiAzLFxuICAgIENPVU5URVJTOiA0LFxuICAgIE9QRU5RVU9URTogNSxcbiAgICBDTE9TRVFVT1RFOiA2XG59O1xuXG52YXIgcGFyc2VDb3VudGVyUmVzZXQgPSBleHBvcnRzLnBhcnNlQ291bnRlclJlc2V0ID0gZnVuY3Rpb24gcGFyc2VDb3VudGVyUmVzZXQoc3R5bGUsIGRhdGEpIHtcbiAgICBpZiAoIXN0eWxlIHx8ICFzdHlsZS5jb3VudGVyUmVzZXQgfHwgc3R5bGUuY291bnRlclJlc2V0ID09PSAnbm9uZScpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHZhciBjb3VudGVyTmFtZXMgPSBbXTtcbiAgICB2YXIgY291bnRlclJlc2V0cyA9IHN0eWxlLmNvdW50ZXJSZXNldC5zcGxpdCgvXFxzKixcXHMqLyk7XG4gICAgdmFyIGxlbkNvdW50ZXJSZXNldHMgPSBjb3VudGVyUmVzZXRzLmxlbmd0aDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuQ291bnRlclJlc2V0czsgaSsrKSB7XG4gICAgICAgIHZhciBfY291bnRlclJlc2V0cyRpJHNwbGkgPSBjb3VudGVyUmVzZXRzW2ldLnNwbGl0KC9cXHMrLyksXG4gICAgICAgICAgICBfY291bnRlclJlc2V0cyRpJHNwbGkyID0gX3NsaWNlZFRvQXJyYXkoX2NvdW50ZXJSZXNldHMkaSRzcGxpLCAyKSxcbiAgICAgICAgICAgIGNvdW50ZXJOYW1lID0gX2NvdW50ZXJSZXNldHMkaSRzcGxpMlswXSxcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZSA9IF9jb3VudGVyUmVzZXRzJGkkc3BsaTJbMV07XG5cbiAgICAgICAgY291bnRlck5hbWVzLnB1c2goY291bnRlck5hbWUpO1xuICAgICAgICB2YXIgY291bnRlciA9IGRhdGEuY291bnRlcnNbY291bnRlck5hbWVdO1xuICAgICAgICBpZiAoIWNvdW50ZXIpIHtcbiAgICAgICAgICAgIGNvdW50ZXIgPSBkYXRhLmNvdW50ZXJzW2NvdW50ZXJOYW1lXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGNvdW50ZXIucHVzaChwYXJzZUludChpbml0aWFsVmFsdWUgfHwgMCwgMTApKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY291bnRlck5hbWVzO1xufTtcblxudmFyIHBvcENvdW50ZXJzID0gZXhwb3J0cy5wb3BDb3VudGVycyA9IGZ1bmN0aW9uIHBvcENvdW50ZXJzKGNvdW50ZXJOYW1lcywgZGF0YSkge1xuICAgIHZhciBsZW5Db3VudGVycyA9IGNvdW50ZXJOYW1lcy5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5Db3VudGVyczsgaSsrKSB7XG4gICAgICAgIGRhdGEuY291bnRlcnNbY291bnRlck5hbWVzW2ldXS5wb3AoKTtcbiAgICB9XG59O1xuXG52YXIgcmVzb2x2ZVBzZXVkb0NvbnRlbnQgPSBleHBvcnRzLnJlc29sdmVQc2V1ZG9Db250ZW50ID0gZnVuY3Rpb24gcmVzb2x2ZVBzZXVkb0NvbnRlbnQobm9kZSwgc3R5bGUsIGRhdGEpIHtcbiAgICBpZiAoIXN0eWxlIHx8ICFzdHlsZS5jb250ZW50IHx8IHN0eWxlLmNvbnRlbnQgPT09ICdub25lJyB8fCBzdHlsZS5jb250ZW50ID09PSAnLW1vei1hbHQtY29udGVudCcgfHwgc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciB0b2tlbnMgPSBwYXJzZUNvbnRlbnQoc3R5bGUuY29udGVudCk7XG5cbiAgICB2YXIgbGVuID0gdG9rZW5zLmxlbmd0aDtcbiAgICB2YXIgY29udGVudEl0ZW1zID0gW107XG4gICAgdmFyIHMgPSAnJztcblxuICAgIC8vIGluY3JlbWVudCB0aGUgY291bnRlciAoaWYgdGhlcmUgaXMgYSBcImNvdW50ZXItaW5jcmVtZW50XCIgZGVjbGFyYXRpb24pXG4gICAgdmFyIGNvdW50ZXJJbmNyZW1lbnQgPSBzdHlsZS5jb3VudGVySW5jcmVtZW50O1xuICAgIGlmIChjb3VudGVySW5jcmVtZW50ICYmIGNvdW50ZXJJbmNyZW1lbnQgIT09ICdub25lJykge1xuICAgICAgICB2YXIgX2NvdW50ZXJJbmNyZW1lbnQkc3BsID0gY291bnRlckluY3JlbWVudC5zcGxpdCgvXFxzKy8pLFxuICAgICAgICAgICAgX2NvdW50ZXJJbmNyZW1lbnQkc3BsMiA9IF9zbGljZWRUb0FycmF5KF9jb3VudGVySW5jcmVtZW50JHNwbCwgMiksXG4gICAgICAgICAgICBjb3VudGVyTmFtZSA9IF9jb3VudGVySW5jcmVtZW50JHNwbDJbMF0sXG4gICAgICAgICAgICBpbmNyZW1lbnRWYWx1ZSA9IF9jb3VudGVySW5jcmVtZW50JHNwbDJbMV07XG5cbiAgICAgICAgdmFyIGNvdW50ZXIgPSBkYXRhLmNvdW50ZXJzW2NvdW50ZXJOYW1lXTtcbiAgICAgICAgaWYgKGNvdW50ZXIpIHtcbiAgICAgICAgICAgIGNvdW50ZXJbY291bnRlci5sZW5ndGggLSAxXSArPSBpbmNyZW1lbnRWYWx1ZSA9PT0gdW5kZWZpbmVkID8gMSA6IHBhcnNlSW50KGluY3JlbWVudFZhbHVlLCAxMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBidWlsZCB0aGUgY29udGVudCBzdHJpbmdcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgc3dpdGNoICh0b2tlbi50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFRPS0VOX1RZUEUuU1RSSU5HOlxuICAgICAgICAgICAgICAgIHMgKz0gdG9rZW4udmFsdWUgfHwgJyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgVE9LRU5fVFlQRS5BVFRSSUJVVEU6XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiB0b2tlbi52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBzICs9IG5vZGUuZ2V0QXR0cmlidXRlKHRva2VuLnZhbHVlKSB8fCAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgVE9LRU5fVFlQRS5DT1VOVEVSOlxuICAgICAgICAgICAgICAgIHZhciBfY291bnRlciA9IGRhdGEuY291bnRlcnNbdG9rZW4ubmFtZSB8fCAnJ107XG4gICAgICAgICAgICAgICAgaWYgKF9jb3VudGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHMgKz0gZm9ybWF0Q291bnRlclZhbHVlKFtfY291bnRlcltfY291bnRlci5sZW5ndGggLSAxXV0sICcnLCB0b2tlbi5mb3JtYXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBUT0tFTl9UWVBFLkNPVU5URVJTOlxuICAgICAgICAgICAgICAgIHZhciBfY291bnRlcnMgPSBkYXRhLmNvdW50ZXJzW3Rva2VuLm5hbWUgfHwgJyddO1xuICAgICAgICAgICAgICAgIGlmIChfY291bnRlcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgcyArPSBmb3JtYXRDb3VudGVyVmFsdWUoX2NvdW50ZXJzLCB0b2tlbi5nbHVlLCB0b2tlbi5mb3JtYXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBUT0tFTl9UWVBFLk9QRU5RVU9URTpcbiAgICAgICAgICAgICAgICBzICs9IGdldFF1b3RlKHN0eWxlLCB0cnVlLCBkYXRhLnF1b3RlRGVwdGgpO1xuICAgICAgICAgICAgICAgIGRhdGEucXVvdGVEZXB0aCsrO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFRPS0VOX1RZUEUuQ0xPU0VRVU9URTpcbiAgICAgICAgICAgICAgICBkYXRhLnF1b3RlRGVwdGgtLTtcbiAgICAgICAgICAgICAgICBzICs9IGdldFF1b3RlKHN0eWxlLCBmYWxzZSwgZGF0YS5xdW90ZURlcHRoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBUT0tFTl9UWVBFLlVSTDpcbiAgICAgICAgICAgICAgICBpZiAocykge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50SXRlbXMucHVzaCh7IHR5cGU6IFBTRVVET19DT05URU5UX0lURU1fVFlQRS5URVhULCB2YWx1ZTogcyB9KTtcbiAgICAgICAgICAgICAgICAgICAgcyA9ICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250ZW50SXRlbXMucHVzaCh7IHR5cGU6IFBTRVVET19DT05URU5UX0lURU1fVFlQRS5JTUFHRSwgdmFsdWU6IHRva2VuLnZhbHVlIHx8ICcnIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHMpIHtcbiAgICAgICAgY29udGVudEl0ZW1zLnB1c2goeyB0eXBlOiBQU0VVRE9fQ09OVEVOVF9JVEVNX1RZUEUuVEVYVCwgdmFsdWU6IHMgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRlbnRJdGVtcztcbn07XG5cbnZhciBwYXJzZUNvbnRlbnQgPSBleHBvcnRzLnBhcnNlQ29udGVudCA9IGZ1bmN0aW9uIHBhcnNlQ29udGVudChjb250ZW50LCBjYWNoZSkge1xuICAgIGlmIChjYWNoZSAmJiBjYWNoZVtjb250ZW50XSkge1xuICAgICAgICByZXR1cm4gY2FjaGVbY29udGVudF07XG4gICAgfVxuXG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBsZW4gPSBjb250ZW50Lmxlbmd0aDtcblxuICAgIHZhciBpc1N0cmluZyA9IGZhbHNlO1xuICAgIHZhciBpc0VzY2FwZWQgPSBmYWxzZTtcbiAgICB2YXIgaXNGdW5jdGlvbiA9IGZhbHNlO1xuICAgIHZhciBzdHIgPSAnJztcbiAgICB2YXIgZnVuY3Rpb25OYW1lID0gJyc7XG4gICAgdmFyIGFyZ3MgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdmFyIGMgPSBjb250ZW50LmNoYXJBdChpKTtcblxuICAgICAgICBzd2l0Y2ggKGMpIHtcbiAgICAgICAgICAgIGNhc2UgXCInXCI6XG4gICAgICAgICAgICBjYXNlICdcIic6XG4gICAgICAgICAgICAgICAgaWYgKGlzRXNjYXBlZCkge1xuICAgICAgICAgICAgICAgICAgICBzdHIgKz0gYztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpc1N0cmluZyA9ICFpc1N0cmluZztcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0Z1bmN0aW9uICYmICFpc1N0cmluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBUT0tFTl9UWVBFLlNUUklORywgdmFsdWU6IHN0ciB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ciA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdcXFxcJzpcbiAgICAgICAgICAgICAgICBpZiAoaXNFc2NhcGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ciArPSBjO1xuICAgICAgICAgICAgICAgICAgICBpc0VzY2FwZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpc0VzY2FwZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnKCc6XG4gICAgICAgICAgICAgICAgaWYgKGlzU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ciArPSBjO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlzRnVuY3Rpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbk5hbWUgPSBzdHI7XG4gICAgICAgICAgICAgICAgICAgIHN0ciA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBhcmdzID0gW107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICcpJzpcbiAgICAgICAgICAgICAgICBpZiAoaXNTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyICs9IGM7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc0Z1bmN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MucHVzaChzdHIpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChmdW5jdGlvbk5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2F0dHInOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBUT0tFTl9UWVBFLkFUVFJJQlVURSwgdmFsdWU6IGFyZ3NbMF0gfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdjb3VudGVyJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb3VudGVyID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogVE9LRU5fVFlQRS5DT1VOVEVSLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYXJnc1swXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyLmZvcm1hdCA9IGFyZ3NbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW5zLnB1c2goY291bnRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdjb3VudGVycyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2NvdW50ZXJzMiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFRPS0VOX1RZUEUuQ09VTlRFUlMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBhcmdzWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb3VudGVyczIuZ2x1ZSA9IGFyZ3NbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvdW50ZXJzMi5mb3JtYXQgPSBhcmdzWzJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKF9jb3VudGVyczIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAndXJsJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogVE9LRU5fVFlQRS5VUkwsIHZhbHVlOiBhcmdzWzBdIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlzRnVuY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgc3RyID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICcsJzpcbiAgICAgICAgICAgICAgICBpZiAoaXNTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyICs9IGM7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc0Z1bmN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3MucHVzaChzdHIpO1xuICAgICAgICAgICAgICAgICAgICBzdHIgPSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJyAnOlxuICAgICAgICAgICAgY2FzZSAnXFx0JzpcbiAgICAgICAgICAgICAgICBpZiAoaXNTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyICs9IGM7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdHIpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkT3RoZXJUb2tlbih0b2tlbnMsIHN0cik7XG4gICAgICAgICAgICAgICAgICAgIHN0ciA9ICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBzdHIgKz0gYztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjICE9PSAnXFxcXCcpIHtcbiAgICAgICAgICAgIGlzRXNjYXBlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0cikge1xuICAgICAgICBhZGRPdGhlclRva2VuKHRva2Vucywgc3RyKTtcbiAgICB9XG5cbiAgICBpZiAoY2FjaGUpIHtcbiAgICAgICAgY2FjaGVbY29udGVudF0gPSB0b2tlbnM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRva2Vucztcbn07XG5cbnZhciBhZGRPdGhlclRva2VuID0gZnVuY3Rpb24gYWRkT3RoZXJUb2tlbih0b2tlbnMsIGlkZW50aWZpZXIpIHtcbiAgICBzd2l0Y2ggKGlkZW50aWZpZXIpIHtcbiAgICAgICAgY2FzZSAnb3Blbi1xdW90ZSc6XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFRPS0VOX1RZUEUuT1BFTlFVT1RFIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2Nsb3NlLXF1b3RlJzpcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogVE9LRU5fVFlQRS5DTE9TRVFVT1RFIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufTtcblxudmFyIGdldFF1b3RlID0gZnVuY3Rpb24gZ2V0UXVvdGUoc3R5bGUsIGlzT3BlbmluZywgcXVvdGVEZXB0aCkge1xuICAgIHZhciBxdW90ZXMgPSBzdHlsZS5xdW90ZXMgPyBzdHlsZS5xdW90ZXMuc3BsaXQoL1xccysvKSA6IFtcIidcXFwiJ1wiLCBcIidcXFwiJ1wiXTtcbiAgICB2YXIgaWR4ID0gcXVvdGVEZXB0aCAqIDI7XG4gICAgaWYgKGlkeCA+PSBxdW90ZXMubGVuZ3RoKSB7XG4gICAgICAgIGlkeCA9IHF1b3Rlcy5sZW5ndGggLSAyO1xuICAgIH1cbiAgICBpZiAoIWlzT3BlbmluZykge1xuICAgICAgICArK2lkeDtcbiAgICB9XG4gICAgcmV0dXJuIHF1b3Rlc1tpZHhdLnJlcGxhY2UoL15bXCInXXxbXCInXSQvZywgJycpO1xufTtcblxudmFyIGZvcm1hdENvdW50ZXJWYWx1ZSA9IGZ1bmN0aW9uIGZvcm1hdENvdW50ZXJWYWx1ZShjb3VudGVyLCBnbHVlLCBmb3JtYXQpIHtcbiAgICB2YXIgbGVuID0gY291bnRlci5sZW5ndGg7XG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBnbHVlIHx8ICcnO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCArPSAoMCwgX0xpc3RJdGVtLmNyZWF0ZUNvdW50ZXJUZXh0KShjb3VudGVyW2ldLCAoMCwgX2xpc3RTdHlsZS5wYXJzZUxpc3RTdHlsZVR5cGUpKGZvcm1hdCB8fCAnZGVjaW1hbCcpLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTtcbn0pOyIsImltcG9ydCBodG1sMmNhbnZhcyBmcm9tICcuLi8uLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9odG1sMmNhbnZhcy5qcyc7XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpe1xuIGh0bWwyY2FudmFzKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0XCIpKS50aGVuKGZ1bmN0aW9uKGNhbnZhcykge1xuICAgY29uc3QgaW1nRGF0YSA9IGNhbnZhcy50b0RhdGFVUkwoKTtcbiAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0XCIpLnNyYyA9IGltZ0RhdGE7XG4gfSk7XG5cbiAvL+ODnOOCv+ODs+OCkuaKvOS4i+OBl+OBn+mam+OBq+ODgOOCpuODs+ODreODvOODieOBmeOCi+eUu+WDj+OCkuS9nOOCi1xuICBodG1sMmNhbnZhcyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFwiKSkudGhlbihmdW5jdGlvbihjYW52YXMpIHtcbiAgICAgIC8vYeOCv+OCsOOBrmhyZWbjgavjgq3jg6Pjg5fjg4Hjg6PnlLvlg4/jga5VUkzjgpLoqK3lrppcbiAgICAgIGNvbnN0IGltZ0RhdGEgPSBjYW52YXMudG9EYXRhVVJMKCk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9ncF9pbWFnZVwiKS5ocmVmID0gaW1nRGF0YTtcbiAgfSk7XG59O1xuXG52YXIgYmcgPSBmdW5jdGlvbigpIHtcblx0dmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdqcy1vZ3AtYmcnKVswXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IDU7IGkrKyl7XG4gICAgdmFyIG9ncEljb25Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImxpXCIgKTtcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IDQ7IGorKyl7XG4gICAgICAgIHZhciBvZ3BJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJzcGFuXCIgKTtcbiAgICAgICAgdmFyIHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCLwn5C2XCIpO1xuICAgICAgICBvZ3BJY29uLmFwcGVuZENoaWxkKHRleHROb2RlKTtcbiAgICAgICAgb2dwSWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnYy1pbWctb2dwX19pY29uJylcbiAgICAgICAgb2dwSWNvblJvdy5hcHBlbmRDaGlsZChvZ3BJY29uKTtcbiAgICB9XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChvZ3BJY29uUm93KTtcbiAgfVxuXG59O1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixmdW5jdGlvbigpe1xuICBiZygpO1xufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==