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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvaHRtbDJjYW52YXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIm9ubG9hZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0aGVuIiwiY2FudmFzIiwiaW1nRGF0YSIsInRvRGF0YVVSTCIsInNyYyIsImhyZWYiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLElBQXlEO0FBQzdEO0FBQ0EsTUFBTSxFQUs0QjtBQUNsQyxDQUFDO0FBQ0Qsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDBCQUEwQixFQUFFO0FBQy9ELHlDQUF5QyxlQUFlO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsK0RBQStEO0FBQzdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQsa0NBQWtDLGlDQUFpQyxlQUFlLGVBQWUsZ0JBQWdCLG9CQUFvQixNQUFNLDBDQUEwQywrQkFBK0IsYUFBYSxxQkFBcUIsbUNBQW1DLEVBQUUsRUFBRSxjQUFjLFdBQVcsVUFBVSxFQUFFLFVBQVUsTUFBTSx5Q0FBeUMsRUFBRSxVQUFVLGtCQUFrQixFQUFFLEVBQUUsYUFBYSxFQUFFLDJCQUEyQiwwQkFBMEIsWUFBWSxFQUFFLDJDQUEyQyw4QkFBOEIsRUFBRSxPQUFPLDZFQUE2RSxFQUFFLEdBQUcsRUFBRTs7QUFFcnBCLGdDQUFnQywyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHlEQUF5RCxxRUFBcUUsNkRBQTZELG9CQUFvQixHQUFHLEVBQUU7O0FBRWpqQixpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2Six3QkFBd0IsRUFBRTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsRUFBRTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsSUFBSSxZQUFZLElBQUksWUFBWSxJQUFJO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBCQUEwQixJQUFJLFlBQVksSUFBSSxZQUFZLElBQUk7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLENBQUM7O0FBRUQ7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSxpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztB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Q25DO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCLHVCQUF1QjtBQUM5Qzs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsZ0NBQWdDLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUseURBQXlELHFFQUFxRSw2REFBNkQsb0JBQW9CLEdBQUcsRUFBRTs7QUFFampCOztBQUVBOztBQUVBLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGdDQUFnQywyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHlEQUF5RCxxRUFBcUUsNkRBQTZELG9CQUFvQixHQUFHLEVBQUU7O0FBRWpqQixpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGFBQWE7QUFDNUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtGQUFrRixlQUFlO0FBQ2pHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3Rjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3Rjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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dC9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9pbmRleC5qc1wiKTtcbiIsIi8qIVxuICogaHRtbDJjYW52YXMgMS4wLjAtYWxwaGEuMTIgPGh0dHBzOi8vaHRtbDJjYW52YXMuaGVydHplbi5jb20+XG4gKiBDb3B5cmlnaHQgKGMpIDIwMTggTmlrbGFzIHZvbiBIZXJ0emVuIDxodHRwczovL2hlcnR6ZW4uY29tPlxuICogUmVsZWFzZWQgdW5kZXIgTUlUIExpY2Vuc2VcbiAqL1xuKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiaHRtbDJjYW52YXNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiaHRtbDJjYW52YXNcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4vKioqKioqLyBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4vKioqKioqLyBcdFx0XHRcdGdldDogZ2V0dGVyXG4vKioqKioqLyBcdFx0XHR9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjcpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG4vLyBodHRwOi8vZGV2LnczLm9yZy9jc3N3Zy9jc3MtY29sb3IvXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9zbGljZWRUb0FycmF5ID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBzbGljZUl0ZXJhdG9yKGFyciwgaSkgeyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9IHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgcmV0dXJuIGFycjsgfSBlbHNlIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpIHsgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTsgfSBlbHNlIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7IH0gfTsgfSgpO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgSEVYMyA9IC9eIyhbYS1mMC05XXszfSkkL2k7XG52YXIgaGV4MyA9IGZ1bmN0aW9uIGhleDModmFsdWUpIHtcbiAgICB2YXIgbWF0Y2ggPSB2YWx1ZS5tYXRjaChIRVgzKTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIFtwYXJzZUludChtYXRjaFsxXVswXSArIG1hdGNoWzFdWzBdLCAxNiksIHBhcnNlSW50KG1hdGNoWzFdWzFdICsgbWF0Y2hbMV1bMV0sIDE2KSwgcGFyc2VJbnQobWF0Y2hbMV1bMl0gKyBtYXRjaFsxXVsyXSwgMTYpLCBudWxsXTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxudmFyIEhFWDYgPSAvXiMoW2EtZjAtOV17Nn0pJC9pO1xudmFyIGhleDYgPSBmdW5jdGlvbiBoZXg2KHZhbHVlKSB7XG4gICAgdmFyIG1hdGNoID0gdmFsdWUubWF0Y2goSEVYNik7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIHJldHVybiBbcGFyc2VJbnQobWF0Y2hbMV0uc3Vic3RyaW5nKDAsIDIpLCAxNiksIHBhcnNlSW50KG1hdGNoWzFdLnN1YnN0cmluZygyLCA0KSwgMTYpLCBwYXJzZUludChtYXRjaFsxXS5zdWJzdHJpbmcoNCwgNiksIDE2KSwgbnVsbF07XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5cbnZhciBSR0IgPSAvXnJnYlxcKFxccyooXFxkezEsM30pXFxzKixcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSlcXHMqXFwpJC87XG52YXIgcmdiID0gZnVuY3Rpb24gcmdiKHZhbHVlKSB7XG4gICAgdmFyIG1hdGNoID0gdmFsdWUubWF0Y2goUkdCKTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIFtOdW1iZXIobWF0Y2hbMV0pLCBOdW1iZXIobWF0Y2hbMl0pLCBOdW1iZXIobWF0Y2hbM10pLCBudWxsXTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxudmFyIFJHQkEgPSAvXnJnYmFcXChcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSlcXHMqLFxccyooXFxkezEsM30pXFxzKixcXHMqKFxcZD9cXC4/XFxkKylcXHMqXFwpJC87XG52YXIgcmdiYSA9IGZ1bmN0aW9uIHJnYmEodmFsdWUpIHtcbiAgICB2YXIgbWF0Y2ggPSB2YWx1ZS5tYXRjaChSR0JBKTtcbiAgICBpZiAobWF0Y2ggJiYgbWF0Y2gubGVuZ3RoID4gNCkge1xuICAgICAgICByZXR1cm4gW051bWJlcihtYXRjaFsxXSksIE51bWJlcihtYXRjaFsyXSksIE51bWJlcihtYXRjaFszXSksIE51bWJlcihtYXRjaFs0XSldO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG52YXIgZnJvbUFycmF5ID0gZnVuY3Rpb24gZnJvbUFycmF5KGFycmF5KSB7XG4gICAgcmV0dXJuIFtNYXRoLm1pbihhcnJheVswXSwgMjU1KSwgTWF0aC5taW4oYXJyYXlbMV0sIDI1NSksIE1hdGgubWluKGFycmF5WzJdLCAyNTUpLCBhcnJheS5sZW5ndGggPiAzID8gYXJyYXlbM10gOiBudWxsXTtcbn07XG5cbnZhciBuYW1lZENvbG9yID0gZnVuY3Rpb24gbmFtZWRDb2xvcihuYW1lKSB7XG4gICAgdmFyIGNvbG9yID0gTkFNRURfQ09MT1JTW25hbWUudG9Mb3dlckNhc2UoKV07XG4gICAgcmV0dXJuIGNvbG9yID8gY29sb3IgOiBmYWxzZTtcbn07XG5cbnZhciBDb2xvciA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDb2xvcih2YWx1ZSkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29sb3IpO1xuXG4gICAgICAgIHZhciBfcmVmID0gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyBmcm9tQXJyYXkodmFsdWUpIDogaGV4Myh2YWx1ZSkgfHwgcmdiKHZhbHVlKSB8fCByZ2JhKHZhbHVlKSB8fCBuYW1lZENvbG9yKHZhbHVlKSB8fCBoZXg2KHZhbHVlKSB8fCBbMCwgMCwgMCwgbnVsbF0sXG4gICAgICAgICAgICBfcmVmMiA9IF9zbGljZWRUb0FycmF5KF9yZWYsIDQpLFxuICAgICAgICAgICAgciA9IF9yZWYyWzBdLFxuICAgICAgICAgICAgZyA9IF9yZWYyWzFdLFxuICAgICAgICAgICAgYiA9IF9yZWYyWzJdLFxuICAgICAgICAgICAgYSA9IF9yZWYyWzNdO1xuXG4gICAgICAgIHRoaXMuciA9IHI7XG4gICAgICAgIHRoaXMuZyA9IGc7XG4gICAgICAgIHRoaXMuYiA9IGI7XG4gICAgICAgIHRoaXMuYSA9IGE7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKENvbG9yLCBbe1xuICAgICAgICBrZXk6ICdpc1RyYW5zcGFyZW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzVHJhbnNwYXJlbnQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hID09PSAwO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICd0b1N0cmluZycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmEgIT09IG51bGwgJiYgdGhpcy5hICE9PSAxID8gJ3JnYmEoJyArIHRoaXMuciArICcsJyArIHRoaXMuZyArICcsJyArIHRoaXMuYiArICcsJyArIHRoaXMuYSArICcpJyA6ICdyZ2IoJyArIHRoaXMuciArICcsJyArIHRoaXMuZyArICcsJyArIHRoaXMuYiArICcpJztcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBDb2xvcjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQ29sb3I7XG5cblxudmFyIE5BTUVEX0NPTE9SUyA9IHtcbiAgICB0cmFuc3BhcmVudDogWzAsIDAsIDAsIDBdLFxuICAgIGFsaWNlYmx1ZTogWzI0MCwgMjQ4LCAyNTUsIG51bGxdLFxuICAgIGFudGlxdWV3aGl0ZTogWzI1MCwgMjM1LCAyMTUsIG51bGxdLFxuICAgIGFxdWE6IFswLCAyNTUsIDI1NSwgbnVsbF0sXG4gICAgYXF1YW1hcmluZTogWzEyNywgMjU1LCAyMTIsIG51bGxdLFxuICAgIGF6dXJlOiBbMjQwLCAyNTUsIDI1NSwgbnVsbF0sXG4gICAgYmVpZ2U6IFsyNDUsIDI0NSwgMjIwLCBudWxsXSxcbiAgICBiaXNxdWU6IFsyNTUsIDIyOCwgMTk2LCBudWxsXSxcbiAgICBibGFjazogWzAsIDAsIDAsIG51bGxdLFxuICAgIGJsYW5jaGVkYWxtb25kOiBbMjU1LCAyMzUsIDIwNSwgbnVsbF0sXG4gICAgYmx1ZTogWzAsIDAsIDI1NSwgbnVsbF0sXG4gICAgYmx1ZXZpb2xldDogWzEzOCwgNDMsIDIyNiwgbnVsbF0sXG4gICAgYnJvd246IFsxNjUsIDQyLCA0MiwgbnVsbF0sXG4gICAgYnVybHl3b29kOiBbMjIyLCAxODQsIDEzNSwgbnVsbF0sXG4gICAgY2FkZXRibHVlOiBbOTUsIDE1OCwgMTYwLCBudWxsXSxcbiAgICBjaGFydHJldXNlOiBbMTI3LCAyNTUsIDAsIG51bGxdLFxuICAgIGNob2NvbGF0ZTogWzIxMCwgMTA1LCAzMCwgbnVsbF0sXG4gICAgY29yYWw6IFsyNTUsIDEyNywgODAsIG51bGxdLFxuICAgIGNvcm5mbG93ZXJibHVlOiBbMTAwLCAxNDksIDIzNywgbnVsbF0sXG4gICAgY29ybnNpbGs6IFsyNTUsIDI0OCwgMjIwLCBudWxsXSxcbiAgICBjcmltc29uOiBbMjIwLCAyMCwgNjAsIG51bGxdLFxuICAgIGN5YW46IFswLCAyNTUsIDI1NSwgbnVsbF0sXG4gICAgZGFya2JsdWU6IFswLCAwLCAxMzksIG51bGxdLFxuICAgIGRhcmtjeWFuOiBbMCwgMTM5LCAxMzksIG51bGxdLFxuICAgIGRhcmtnb2xkZW5yb2Q6IFsxODQsIDEzNCwgMTEsIG51bGxdLFxuICAgIGRhcmtncmF5OiBbMTY5LCAxNjksIDE2OSwgbnVsbF0sXG4gICAgZGFya2dyZWVuOiBbMCwgMTAwLCAwLCBudWxsXSxcbiAgICBkYXJrZ3JleTogWzE2OSwgMTY5LCAxNjksIG51bGxdLFxuICAgIGRhcmtraGFraTogWzE4OSwgMTgzLCAxMDcsIG51bGxdLFxuICAgIGRhcmttYWdlbnRhOiBbMTM5LCAwLCAxMzksIG51bGxdLFxuICAgIGRhcmtvbGl2ZWdyZWVuOiBbODUsIDEwNywgNDcsIG51bGxdLFxuICAgIGRhcmtvcmFuZ2U6IFsyNTUsIDE0MCwgMCwgbnVsbF0sXG4gICAgZGFya29yY2hpZDogWzE1MywgNTAsIDIwNCwgbnVsbF0sXG4gICAgZGFya3JlZDogWzEzOSwgMCwgMCwgbnVsbF0sXG4gICAgZGFya3NhbG1vbjogWzIzMywgMTUwLCAxMjIsIG51bGxdLFxuICAgIGRhcmtzZWFncmVlbjogWzE0MywgMTg4LCAxNDMsIG51bGxdLFxuICAgIGRhcmtzbGF0ZWJsdWU6IFs3MiwgNjEsIDEzOSwgbnVsbF0sXG4gICAgZGFya3NsYXRlZ3JheTogWzQ3LCA3OSwgNzksIG51bGxdLFxuICAgIGRhcmtzbGF0ZWdyZXk6IFs0NywgNzksIDc5LCBudWxsXSxcbiAgICBkYXJrdHVycXVvaXNlOiBbMCwgMjA2LCAyMDksIG51bGxdLFxuICAgIGRhcmt2aW9sZXQ6IFsxNDgsIDAsIDIxMSwgbnVsbF0sXG4gICAgZGVlcHBpbms6IFsyNTUsIDIwLCAxNDcsIG51bGxdLFxuICAgIGRlZXBza3libHVlOiBbMCwgMTkxLCAyNTUsIG51bGxdLFxuICAgIGRpbWdyYXk6IFsxMDUsIDEwNSwgMTA1LCBudWxsXSxcbiAgICBkaW1ncmV5OiBbMTA1LCAxMDUsIDEwNSwgbnVsbF0sXG4gICAgZG9kZ2VyYmx1ZTogWzMwLCAxNDQsIDI1NSwgbnVsbF0sXG4gICAgZmlyZWJyaWNrOiBbMTc4LCAzNCwgMzQsIG51bGxdLFxuICAgIGZsb3JhbHdoaXRlOiBbMjU1LCAyNTAsIDI0MCwgbnVsbF0sXG4gICAgZm9yZXN0Z3JlZW46IFszNCwgMTM5LCAzNCwgbnVsbF0sXG4gICAgZnVjaHNpYTogWzI1NSwgMCwgMjU1LCBudWxsXSxcbiAgICBnYWluc2Jvcm86IFsyMjAsIDIyMCwgMjIwLCBudWxsXSxcbiAgICBnaG9zdHdoaXRlOiBbMjQ4LCAyNDgsIDI1NSwgbnVsbF0sXG4gICAgZ29sZDogWzI1NSwgMjE1LCAwLCBudWxsXSxcbiAgICBnb2xkZW5yb2Q6IFsyMTgsIDE2NSwgMzIsIG51bGxdLFxuICAgIGdyYXk6IFsxMjgsIDEyOCwgMTI4LCBudWxsXSxcbiAgICBncmVlbjogWzAsIDEyOCwgMCwgbnVsbF0sXG4gICAgZ3JlZW55ZWxsb3c6IFsxNzMsIDI1NSwgNDcsIG51bGxdLFxuICAgIGdyZXk6IFsxMjgsIDEyOCwgMTI4LCBudWxsXSxcbiAgICBob25leWRldzogWzI0MCwgMjU1LCAyNDAsIG51bGxdLFxuICAgIGhvdHBpbms6IFsyNTUsIDEwNSwgMTgwLCBudWxsXSxcbiAgICBpbmRpYW5yZWQ6IFsyMDUsIDkyLCA5MiwgbnVsbF0sXG4gICAgaW5kaWdvOiBbNzUsIDAsIDEzMCwgbnVsbF0sXG4gICAgaXZvcnk6IFsyNTUsIDI1NSwgMjQwLCBudWxsXSxcbiAgICBraGFraTogWzI0MCwgMjMwLCAxNDAsIG51bGxdLFxuICAgIGxhdmVuZGVyOiBbMjMwLCAyMzAsIDI1MCwgbnVsbF0sXG4gICAgbGF2ZW5kZXJibHVzaDogWzI1NSwgMjQwLCAyNDUsIG51bGxdLFxuICAgIGxhd25ncmVlbjogWzEyNCwgMjUyLCAwLCBudWxsXSxcbiAgICBsZW1vbmNoaWZmb246IFsyNTUsIDI1MCwgMjA1LCBudWxsXSxcbiAgICBsaWdodGJsdWU6IFsxNzMsIDIxNiwgMjMwLCBudWxsXSxcbiAgICBsaWdodGNvcmFsOiBbMjQwLCAxMjgsIDEyOCwgbnVsbF0sXG4gICAgbGlnaHRjeWFuOiBbMjI0LCAyNTUsIDI1NSwgbnVsbF0sXG4gICAgbGlnaHRnb2xkZW5yb2R5ZWxsb3c6IFsyNTAsIDI1MCwgMjEwLCBudWxsXSxcbiAgICBsaWdodGdyYXk6IFsyMTEsIDIxMSwgMjExLCBudWxsXSxcbiAgICBsaWdodGdyZWVuOiBbMTQ0LCAyMzgsIDE0NCwgbnVsbF0sXG4gICAgbGlnaHRncmV5OiBbMjExLCAyMTEsIDIxMSwgbnVsbF0sXG4gICAgbGlnaHRwaW5rOiBbMjU1LCAxODIsIDE5MywgbnVsbF0sXG4gICAgbGlnaHRzYWxtb246IFsyNTUsIDE2MCwgMTIyLCBudWxsXSxcbiAgICBsaWdodHNlYWdyZWVuOiBbMzIsIDE3OCwgMTcwLCBudWxsXSxcbiAgICBsaWdodHNreWJsdWU6IFsxMzUsIDIwNiwgMjUwLCBudWxsXSxcbiAgICBsaWdodHNsYXRlZ3JheTogWzExOSwgMTM2LCAxNTMsIG51bGxdLFxuICAgIGxpZ2h0c2xhdGVncmV5OiBbMTE5LCAxMzYsIDE1MywgbnVsbF0sXG4gICAgbGlnaHRzdGVlbGJsdWU6IFsxNzYsIDE5NiwgMjIyLCBudWxsXSxcbiAgICBsaWdodHllbGxvdzogWzI1NSwgMjU1LCAyMjQsIG51bGxdLFxuICAgIGxpbWU6IFswLCAyNTUsIDAsIG51bGxdLFxuICAgIGxpbWVncmVlbjogWzUwLCAyMDUsIDUwLCBudWxsXSxcbiAgICBsaW5lbjogWzI1MCwgMjQwLCAyMzAsIG51bGxdLFxuICAgIG1hZ2VudGE6IFsyNTUsIDAsIDI1NSwgbnVsbF0sXG4gICAgbWFyb29uOiBbMTI4LCAwLCAwLCBudWxsXSxcbiAgICBtZWRpdW1hcXVhbWFyaW5lOiBbMTAyLCAyMDUsIDE3MCwgbnVsbF0sXG4gICAgbWVkaXVtYmx1ZTogWzAsIDAsIDIwNSwgbnVsbF0sXG4gICAgbWVkaXVtb3JjaGlkOiBbMTg2LCA4NSwgMjExLCBudWxsXSxcbiAgICBtZWRpdW1wdXJwbGU6IFsxNDcsIDExMiwgMjE5LCBudWxsXSxcbiAgICBtZWRpdW1zZWFncmVlbjogWzYwLCAxNzksIDExMywgbnVsbF0sXG4gICAgbWVkaXVtc2xhdGVibHVlOiBbMTIzLCAxMDQsIDIzOCwgbnVsbF0sXG4gICAgbWVkaXVtc3ByaW5nZ3JlZW46IFswLCAyNTAsIDE1NCwgbnVsbF0sXG4gICAgbWVkaXVtdHVycXVvaXNlOiBbNzIsIDIwOSwgMjA0LCBudWxsXSxcbiAgICBtZWRpdW12aW9sZXRyZWQ6IFsxOTksIDIxLCAxMzMsIG51bGxdLFxuICAgIG1pZG5pZ2h0Ymx1ZTogWzI1LCAyNSwgMTEyLCBudWxsXSxcbiAgICBtaW50Y3JlYW06IFsyNDUsIDI1NSwgMjUwLCBudWxsXSxcbiAgICBtaXN0eXJvc2U6IFsyNTUsIDIyOCwgMjI1LCBudWxsXSxcbiAgICBtb2NjYXNpbjogWzI1NSwgMjI4LCAxODEsIG51bGxdLFxuICAgIG5hdmFqb3doaXRlOiBbMjU1LCAyMjIsIDE3MywgbnVsbF0sXG4gICAgbmF2eTogWzAsIDAsIDEyOCwgbnVsbF0sXG4gICAgb2xkbGFjZTogWzI1MywgMjQ1LCAyMzAsIG51bGxdLFxuICAgIG9saXZlOiBbMTI4LCAxMjgsIDAsIG51bGxdLFxuICAgIG9saXZlZHJhYjogWzEwNywgMTQyLCAzNSwgbnVsbF0sXG4gICAgb3JhbmdlOiBbMjU1LCAxNjUsIDAsIG51bGxdLFxuICAgIG9yYW5nZXJlZDogWzI1NSwgNjksIDAsIG51bGxdLFxuICAgIG9yY2hpZDogWzIxOCwgMTEyLCAyMTQsIG51bGxdLFxuICAgIHBhbGVnb2xkZW5yb2Q6IFsyMzgsIDIzMiwgMTcwLCBudWxsXSxcbiAgICBwYWxlZ3JlZW46IFsxNTIsIDI1MSwgMTUyLCBudWxsXSxcbiAgICBwYWxldHVycXVvaXNlOiBbMTc1LCAyMzgsIDIzOCwgbnVsbF0sXG4gICAgcGFsZXZpb2xldHJlZDogWzIxOSwgMTEyLCAxNDcsIG51bGxdLFxuICAgIHBhcGF5YXdoaXA6IFsyNTUsIDIzOSwgMjEzLCBudWxsXSxcbiAgICBwZWFjaHB1ZmY6IFsyNTUsIDIxOCwgMTg1LCBudWxsXSxcbiAgICBwZXJ1OiBbMjA1LCAxMzMsIDYzLCBudWxsXSxcbiAgICBwaW5rOiBbMjU1LCAxOTIsIDIwMywgbnVsbF0sXG4gICAgcGx1bTogWzIyMSwgMTYwLCAyMjEsIG51bGxdLFxuICAgIHBvd2RlcmJsdWU6IFsxNzYsIDIyNCwgMjMwLCBudWxsXSxcbiAgICBwdXJwbGU6IFsxMjgsIDAsIDEyOCwgbnVsbF0sXG4gICAgcmViZWNjYXB1cnBsZTogWzEwMiwgNTEsIDE1MywgbnVsbF0sXG4gICAgcmVkOiBbMjU1LCAwLCAwLCBudWxsXSxcbiAgICByb3N5YnJvd246IFsxODgsIDE0MywgMTQzLCBudWxsXSxcbiAgICByb3lhbGJsdWU6IFs2NSwgMTA1LCAyMjUsIG51bGxdLFxuICAgIHNhZGRsZWJyb3duOiBbMTM5LCA2OSwgMTksIG51bGxdLFxuICAgIHNhbG1vbjogWzI1MCwgMTI4LCAxMTQsIG51bGxdLFxuICAgIHNhbmR5YnJvd246IFsyNDQsIDE2NCwgOTYsIG51bGxdLFxuICAgIHNlYWdyZWVuOiBbNDYsIDEzOSwgODcsIG51bGxdLFxuICAgIHNlYXNoZWxsOiBbMjU1LCAyNDUsIDIzOCwgbnVsbF0sXG4gICAgc2llbm5hOiBbMTYwLCA4MiwgNDUsIG51bGxdLFxuICAgIHNpbHZlcjogWzE5MiwgMTkyLCAxOTIsIG51bGxdLFxuICAgIHNreWJsdWU6IFsxMzUsIDIwNiwgMjM1LCBudWxsXSxcbiAgICBzbGF0ZWJsdWU6IFsxMDYsIDkwLCAyMDUsIG51bGxdLFxuICAgIHNsYXRlZ3JheTogWzExMiwgMTI4LCAxNDQsIG51bGxdLFxuICAgIHNsYXRlZ3JleTogWzExMiwgMTI4LCAxNDQsIG51bGxdLFxuICAgIHNub3c6IFsyNTUsIDI1MCwgMjUwLCBudWxsXSxcbiAgICBzcHJpbmdncmVlbjogWzAsIDI1NSwgMTI3LCBudWxsXSxcbiAgICBzdGVlbGJsdWU6IFs3MCwgMTMwLCAxODAsIG51bGxdLFxuICAgIHRhbjogWzIxMCwgMTgwLCAxNDAsIG51bGxdLFxuICAgIHRlYWw6IFswLCAxMjgsIDEyOCwgbnVsbF0sXG4gICAgdGhpc3RsZTogWzIxNiwgMTkxLCAyMTYsIG51bGxdLFxuICAgIHRvbWF0bzogWzI1NSwgOTksIDcxLCBudWxsXSxcbiAgICB0dXJxdW9pc2U6IFs2NCwgMjI0LCAyMDgsIG51bGxdLFxuICAgIHZpb2xldDogWzIzOCwgMTMwLCAyMzgsIG51bGxdLFxuICAgIHdoZWF0OiBbMjQ1LCAyMjIsIDE3OSwgbnVsbF0sXG4gICAgd2hpdGU6IFsyNTUsIDI1NSwgMjU1LCBudWxsXSxcbiAgICB3aGl0ZXNtb2tlOiBbMjQ1LCAyNDUsIDI0NSwgbnVsbF0sXG4gICAgeWVsbG93OiBbMjU1LCAyNTUsIDAsIG51bGxdLFxuICAgIHllbGxvd2dyZWVuOiBbMTU0LCAyMDUsIDUwLCBudWxsXVxufTtcblxudmFyIFRSQU5TUEFSRU5UID0gZXhwb3J0cy5UUkFOU1BBUkVOVCA9IG5ldyBDb2xvcihbMCwgMCwgMCwgMF0pO1xuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jYWxjdWxhdGVMZW5ndGhGcm9tVmFsdWVXaXRoVW5pdCA9IGV4cG9ydHMuTEVOR1RIX1RZUEUgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfTm9kZUNvbnRhaW5lciA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cbnZhciBfTm9kZUNvbnRhaW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ob2RlQ29udGFpbmVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIExFTkdUSF9XSVRIX1VOSVQgPSAvKFtcXGQuXSspKHB4fHI/ZW18JSkvaTtcblxudmFyIExFTkdUSF9UWVBFID0gZXhwb3J0cy5MRU5HVEhfVFlQRSA9IHtcbiAgICBQWDogMCxcbiAgICBQRVJDRU5UQUdFOiAxXG59O1xuXG52YXIgTGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIExlbmd0aCh2YWx1ZSkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTGVuZ3RoKTtcblxuICAgICAgICB0aGlzLnR5cGUgPSB2YWx1ZS5zdWJzdHIodmFsdWUubGVuZ3RoIC0gMSkgPT09ICclJyA/IExFTkdUSF9UWVBFLlBFUkNFTlRBR0UgOiBMRU5HVEhfVFlQRS5QWDtcbiAgICAgICAgdmFyIHBhcnNlZFZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgICAgIGlmICh0cnVlICYmIGlzTmFOKHBhcnNlZFZhbHVlKSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCB2YWx1ZSBnaXZlbiBmb3IgTGVuZ3RoOiBcIicgKyB2YWx1ZSArICdcIicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudmFsdWUgPSBpc05hTihwYXJzZWRWYWx1ZSkgPyAwIDogcGFyc2VkVmFsdWU7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKExlbmd0aCwgW3tcbiAgICAgICAga2V5OiAnaXNQZXJjZW50YWdlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzUGVyY2VudGFnZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09IExFTkdUSF9UWVBFLlBFUkNFTlRBR0U7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldEFic29sdXRlVmFsdWUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0QWJzb2x1dGVWYWx1ZShwYXJlbnRMZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzUGVyY2VudGFnZSgpID8gcGFyZW50TGVuZ3RoICogKHRoaXMudmFsdWUgLyAxMDApIDogdGhpcy52YWx1ZTtcbiAgICAgICAgfVxuICAgIH1dLCBbe1xuICAgICAgICBrZXk6ICdjcmVhdGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlKHYpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTGVuZ3RoKHYpO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIExlbmd0aDtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTGVuZ3RoO1xuXG5cbnZhciBnZXRSb290Rm9udFNpemUgPSBmdW5jdGlvbiBnZXRSb290Rm9udFNpemUoY29udGFpbmVyKSB7XG4gICAgdmFyIHBhcmVudCA9IGNvbnRhaW5lci5wYXJlbnQ7XG4gICAgcmV0dXJuIHBhcmVudCA/IGdldFJvb3RGb250U2l6ZShwYXJlbnQpIDogcGFyc2VGbG9hdChjb250YWluZXIuc3R5bGUuZm9udC5mb250U2l6ZSk7XG59O1xuXG52YXIgY2FsY3VsYXRlTGVuZ3RoRnJvbVZhbHVlV2l0aFVuaXQgPSBleHBvcnRzLmNhbGN1bGF0ZUxlbmd0aEZyb21WYWx1ZVdpdGhVbml0ID0gZnVuY3Rpb24gY2FsY3VsYXRlTGVuZ3RoRnJvbVZhbHVlV2l0aFVuaXQoY29udGFpbmVyLCB2YWx1ZSwgdW5pdCkge1xuICAgIHN3aXRjaCAodW5pdCkge1xuICAgICAgICBjYXNlICdweCc6XG4gICAgICAgIGNhc2UgJyUnOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBMZW5ndGgodmFsdWUgKyB1bml0KTtcbiAgICAgICAgY2FzZSAnZW0nOlxuICAgICAgICBjYXNlICdyZW0nOlxuICAgICAgICAgICAgdmFyIGxlbmd0aCA9IG5ldyBMZW5ndGgodmFsdWUpO1xuICAgICAgICAgICAgbGVuZ3RoLnZhbHVlICo9IHVuaXQgPT09ICdlbScgPyBwYXJzZUZsb2F0KGNvbnRhaW5lci5zdHlsZS5mb250LmZvbnRTaXplKSA6IGdldFJvb3RGb250U2l6ZShjb250YWluZXIpO1xuICAgICAgICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIC8vIFRPRE86IGhhbmRsZSBjb3JyZWN0bHkgaWYgdW5rbm93biB1bml0IGlzIHVzZWRcbiAgICAgICAgICAgIHJldHVybiBuZXcgTGVuZ3RoKCcwJyk7XG4gICAgfVxufTtcblxuLyoqKi8gfSksXG4vKiAyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucGFyc2VCb3VuZEN1cnZlcyA9IGV4cG9ydHMuY2FsY3VsYXRlUGFkZGluZ0JveFBhdGggPSBleHBvcnRzLmNhbGN1bGF0ZUJvcmRlckJveFBhdGggPSBleHBvcnRzLnBhcnNlUGF0aEZvckJvcmRlciA9IGV4cG9ydHMucGFyc2VEb2N1bWVudFNpemUgPSBleHBvcnRzLmNhbGN1bGF0ZUNvbnRlbnRCb3ggPSBleHBvcnRzLmNhbGN1bGF0ZVBhZGRpbmdCb3ggPSBleHBvcnRzLnBhcnNlQm91bmRzID0gZXhwb3J0cy5Cb3VuZHMgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfVmVjdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcblxudmFyIF9WZWN0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVmVjdG9yKTtcblxudmFyIF9CZXppZXJDdXJ2ZSA9IF9fd2VicGFja19yZXF1aXJlX18oMzIpO1xuXG52YXIgX0JlemllckN1cnZlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0JlemllckN1cnZlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFRPUCA9IDA7XG52YXIgUklHSFQgPSAxO1xudmFyIEJPVFRPTSA9IDI7XG52YXIgTEVGVCA9IDM7XG5cbnZhciBIID0gMDtcbnZhciBWID0gMTtcblxudmFyIEJvdW5kcyA9IGV4cG9ydHMuQm91bmRzID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEJvdW5kcyh4LCB5LCB3LCBoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCb3VuZHMpO1xuXG4gICAgICAgIHRoaXMubGVmdCA9IHg7XG4gICAgICAgIHRoaXMudG9wID0geTtcbiAgICAgICAgdGhpcy53aWR0aCA9IHc7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaDtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQm91bmRzLCBudWxsLCBbe1xuICAgICAgICBrZXk6ICdmcm9tQ2xpZW50UmVjdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBmcm9tQ2xpZW50UmVjdChjbGllbnRSZWN0LCBzY3JvbGxYLCBzY3JvbGxZKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEJvdW5kcyhjbGllbnRSZWN0LmxlZnQgKyBzY3JvbGxYLCBjbGllbnRSZWN0LnRvcCArIHNjcm9sbFksIGNsaWVudFJlY3Qud2lkdGgsIGNsaWVudFJlY3QuaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBCb3VuZHM7XG59KCk7XG5cbnZhciBwYXJzZUJvdW5kcyA9IGV4cG9ydHMucGFyc2VCb3VuZHMgPSBmdW5jdGlvbiBwYXJzZUJvdW5kcyhub2RlLCBzY3JvbGxYLCBzY3JvbGxZKSB7XG4gICAgcmV0dXJuIEJvdW5kcy5mcm9tQ2xpZW50UmVjdChub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCBzY3JvbGxYLCBzY3JvbGxZKTtcbn07XG5cbnZhciBjYWxjdWxhdGVQYWRkaW5nQm94ID0gZXhwb3J0cy5jYWxjdWxhdGVQYWRkaW5nQm94ID0gZnVuY3Rpb24gY2FsY3VsYXRlUGFkZGluZ0JveChib3VuZHMsIGJvcmRlcnMpIHtcbiAgICByZXR1cm4gbmV3IEJvdW5kcyhib3VuZHMubGVmdCArIGJvcmRlcnNbTEVGVF0uYm9yZGVyV2lkdGgsIGJvdW5kcy50b3AgKyBib3JkZXJzW1RPUF0uYm9yZGVyV2lkdGgsIGJvdW5kcy53aWR0aCAtIChib3JkZXJzW1JJR0hUXS5ib3JkZXJXaWR0aCArIGJvcmRlcnNbTEVGVF0uYm9yZGVyV2lkdGgpLCBib3VuZHMuaGVpZ2h0IC0gKGJvcmRlcnNbVE9QXS5ib3JkZXJXaWR0aCArIGJvcmRlcnNbQk9UVE9NXS5ib3JkZXJXaWR0aCkpO1xufTtcblxudmFyIGNhbGN1bGF0ZUNvbnRlbnRCb3ggPSBleHBvcnRzLmNhbGN1bGF0ZUNvbnRlbnRCb3ggPSBmdW5jdGlvbiBjYWxjdWxhdGVDb250ZW50Qm94KGJvdW5kcywgcGFkZGluZywgYm9yZGVycykge1xuICAgIC8vIFRPRE8gc3VwcG9ydCBwZXJjZW50YWdlIHBhZGRpbmdzXG4gICAgdmFyIHBhZGRpbmdUb3AgPSBwYWRkaW5nW1RPUF0udmFsdWU7XG4gICAgdmFyIHBhZGRpbmdSaWdodCA9IHBhZGRpbmdbUklHSFRdLnZhbHVlO1xuICAgIHZhciBwYWRkaW5nQm90dG9tID0gcGFkZGluZ1tCT1RUT01dLnZhbHVlO1xuICAgIHZhciBwYWRkaW5nTGVmdCA9IHBhZGRpbmdbTEVGVF0udmFsdWU7XG5cbiAgICByZXR1cm4gbmV3IEJvdW5kcyhib3VuZHMubGVmdCArIHBhZGRpbmdMZWZ0ICsgYm9yZGVyc1tMRUZUXS5ib3JkZXJXaWR0aCwgYm91bmRzLnRvcCArIHBhZGRpbmdUb3AgKyBib3JkZXJzW1RPUF0uYm9yZGVyV2lkdGgsIGJvdW5kcy53aWR0aCAtIChib3JkZXJzW1JJR0hUXS5ib3JkZXJXaWR0aCArIGJvcmRlcnNbTEVGVF0uYm9yZGVyV2lkdGggKyBwYWRkaW5nTGVmdCArIHBhZGRpbmdSaWdodCksIGJvdW5kcy5oZWlnaHQgLSAoYm9yZGVyc1tUT1BdLmJvcmRlcldpZHRoICsgYm9yZGVyc1tCT1RUT01dLmJvcmRlcldpZHRoICsgcGFkZGluZ1RvcCArIHBhZGRpbmdCb3R0b20pKTtcbn07XG5cbnZhciBwYXJzZURvY3VtZW50U2l6ZSA9IGV4cG9ydHMucGFyc2VEb2N1bWVudFNpemUgPSBmdW5jdGlvbiBwYXJzZURvY3VtZW50U2l6ZShkb2N1bWVudCkge1xuICAgIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICB2YXIgZG9jdW1lbnRFbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gICAgaWYgKCFib2R5IHx8ICFkb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCB0cnVlID8gJ1VuYWJsZSB0byBnZXQgZG9jdW1lbnQgc2l6ZScgOiAnJyk7XG4gICAgfVxuICAgIHZhciB3aWR0aCA9IE1hdGgubWF4KE1hdGgubWF4KGJvZHkuc2Nyb2xsV2lkdGgsIGRvY3VtZW50RWxlbWVudC5zY3JvbGxXaWR0aCksIE1hdGgubWF4KGJvZHkub2Zmc2V0V2lkdGgsIGRvY3VtZW50RWxlbWVudC5vZmZzZXRXaWR0aCksIE1hdGgubWF4KGJvZHkuY2xpZW50V2lkdGgsIGRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCkpO1xuXG4gICAgdmFyIGhlaWdodCA9IE1hdGgubWF4KE1hdGgubWF4KGJvZHkuc2Nyb2xsSGVpZ2h0LCBkb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0KSwgTWF0aC5tYXgoYm9keS5vZmZzZXRIZWlnaHQsIGRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHQpLCBNYXRoLm1heChib2R5LmNsaWVudEhlaWdodCwgZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkpO1xuXG4gICAgcmV0dXJuIG5ldyBCb3VuZHMoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG59O1xuXG52YXIgcGFyc2VQYXRoRm9yQm9yZGVyID0gZXhwb3J0cy5wYXJzZVBhdGhGb3JCb3JkZXIgPSBmdW5jdGlvbiBwYXJzZVBhdGhGb3JCb3JkZXIoY3VydmVzLCBib3JkZXJTaWRlKSB7XG4gICAgc3dpdGNoIChib3JkZXJTaWRlKSB7XG4gICAgICAgIGNhc2UgVE9QOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZVBhdGhGcm9tQ3VydmVzKGN1cnZlcy50b3BMZWZ0T3V0ZXIsIGN1cnZlcy50b3BMZWZ0SW5uZXIsIGN1cnZlcy50b3BSaWdodE91dGVyLCBjdXJ2ZXMudG9wUmlnaHRJbm5lcik7XG4gICAgICAgIGNhc2UgUklHSFQ6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlUGF0aEZyb21DdXJ2ZXMoY3VydmVzLnRvcFJpZ2h0T3V0ZXIsIGN1cnZlcy50b3BSaWdodElubmVyLCBjdXJ2ZXMuYm90dG9tUmlnaHRPdXRlciwgY3VydmVzLmJvdHRvbVJpZ2h0SW5uZXIpO1xuICAgICAgICBjYXNlIEJPVFRPTTpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVQYXRoRnJvbUN1cnZlcyhjdXJ2ZXMuYm90dG9tUmlnaHRPdXRlciwgY3VydmVzLmJvdHRvbVJpZ2h0SW5uZXIsIGN1cnZlcy5ib3R0b21MZWZ0T3V0ZXIsIGN1cnZlcy5ib3R0b21MZWZ0SW5uZXIpO1xuICAgICAgICBjYXNlIExFRlQ6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlUGF0aEZyb21DdXJ2ZXMoY3VydmVzLmJvdHRvbUxlZnRPdXRlciwgY3VydmVzLmJvdHRvbUxlZnRJbm5lciwgY3VydmVzLnRvcExlZnRPdXRlciwgY3VydmVzLnRvcExlZnRJbm5lcik7XG4gICAgfVxufTtcblxudmFyIGNyZWF0ZVBhdGhGcm9tQ3VydmVzID0gZnVuY3Rpb24gY3JlYXRlUGF0aEZyb21DdXJ2ZXMob3V0ZXIxLCBpbm5lcjEsIG91dGVyMiwgaW5uZXIyKSB7XG4gICAgdmFyIHBhdGggPSBbXTtcbiAgICBpZiAob3V0ZXIxIGluc3RhbmNlb2YgX0JlemllckN1cnZlMi5kZWZhdWx0KSB7XG4gICAgICAgIHBhdGgucHVzaChvdXRlcjEuc3ViZGl2aWRlKDAuNSwgZmFsc2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwYXRoLnB1c2gob3V0ZXIxKTtcbiAgICB9XG5cbiAgICBpZiAob3V0ZXIyIGluc3RhbmNlb2YgX0JlemllckN1cnZlMi5kZWZhdWx0KSB7XG4gICAgICAgIHBhdGgucHVzaChvdXRlcjIuc3ViZGl2aWRlKDAuNSwgdHJ1ZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHBhdGgucHVzaChvdXRlcjIpO1xuICAgIH1cblxuICAgIGlmIChpbm5lcjIgaW5zdGFuY2VvZiBfQmV6aWVyQ3VydmUyLmRlZmF1bHQpIHtcbiAgICAgICAgcGF0aC5wdXNoKGlubmVyMi5zdWJkaXZpZGUoMC41LCB0cnVlKS5yZXZlcnNlKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHBhdGgucHVzaChpbm5lcjIpO1xuICAgIH1cblxuICAgIGlmIChpbm5lcjEgaW5zdGFuY2VvZiBfQmV6aWVyQ3VydmUyLmRlZmF1bHQpIHtcbiAgICAgICAgcGF0aC5wdXNoKGlubmVyMS5zdWJkaXZpZGUoMC41LCBmYWxzZSkucmV2ZXJzZSgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwYXRoLnB1c2goaW5uZXIxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGF0aDtcbn07XG5cbnZhciBjYWxjdWxhdGVCb3JkZXJCb3hQYXRoID0gZXhwb3J0cy5jYWxjdWxhdGVCb3JkZXJCb3hQYXRoID0gZnVuY3Rpb24gY2FsY3VsYXRlQm9yZGVyQm94UGF0aChjdXJ2ZXMpIHtcbiAgICByZXR1cm4gW2N1cnZlcy50b3BMZWZ0T3V0ZXIsIGN1cnZlcy50b3BSaWdodE91dGVyLCBjdXJ2ZXMuYm90dG9tUmlnaHRPdXRlciwgY3VydmVzLmJvdHRvbUxlZnRPdXRlcl07XG59O1xuXG52YXIgY2FsY3VsYXRlUGFkZGluZ0JveFBhdGggPSBleHBvcnRzLmNhbGN1bGF0ZVBhZGRpbmdCb3hQYXRoID0gZnVuY3Rpb24gY2FsY3VsYXRlUGFkZGluZ0JveFBhdGgoY3VydmVzKSB7XG4gICAgcmV0dXJuIFtjdXJ2ZXMudG9wTGVmdElubmVyLCBjdXJ2ZXMudG9wUmlnaHRJbm5lciwgY3VydmVzLmJvdHRvbVJpZ2h0SW5uZXIsIGN1cnZlcy5ib3R0b21MZWZ0SW5uZXJdO1xufTtcblxudmFyIHBhcnNlQm91bmRDdXJ2ZXMgPSBleHBvcnRzLnBhcnNlQm91bmRDdXJ2ZXMgPSBmdW5jdGlvbiBwYXJzZUJvdW5kQ3VydmVzKGJvdW5kcywgYm9yZGVycywgYm9yZGVyUmFkaXVzKSB7XG4gICAgdmFyIHRsaCA9IGJvcmRlclJhZGl1c1tDT1JORVIuVE9QX0xFRlRdW0hdLmdldEFic29sdXRlVmFsdWUoYm91bmRzLndpZHRoKTtcbiAgICB2YXIgdGx2ID0gYm9yZGVyUmFkaXVzW0NPUk5FUi5UT1BfTEVGVF1bVl0uZ2V0QWJzb2x1dGVWYWx1ZShib3VuZHMuaGVpZ2h0KTtcbiAgICB2YXIgdHJoID0gYm9yZGVyUmFkaXVzW0NPUk5FUi5UT1BfUklHSFRdW0hdLmdldEFic29sdXRlVmFsdWUoYm91bmRzLndpZHRoKTtcbiAgICB2YXIgdHJ2ID0gYm9yZGVyUmFkaXVzW0NPUk5FUi5UT1BfUklHSFRdW1ZdLmdldEFic29sdXRlVmFsdWUoYm91bmRzLmhlaWdodCk7XG4gICAgdmFyIGJyaCA9IGJvcmRlclJhZGl1c1tDT1JORVIuQk9UVE9NX1JJR0hUXVtIXS5nZXRBYnNvbHV0ZVZhbHVlKGJvdW5kcy53aWR0aCk7XG4gICAgdmFyIGJydiA9IGJvcmRlclJhZGl1c1tDT1JORVIuQk9UVE9NX1JJR0hUXVtWXS5nZXRBYnNvbHV0ZVZhbHVlKGJvdW5kcy5oZWlnaHQpO1xuICAgIHZhciBibGggPSBib3JkZXJSYWRpdXNbQ09STkVSLkJPVFRPTV9MRUZUXVtIXS5nZXRBYnNvbHV0ZVZhbHVlKGJvdW5kcy53aWR0aCk7XG4gICAgdmFyIGJsdiA9IGJvcmRlclJhZGl1c1tDT1JORVIuQk9UVE9NX0xFRlRdW1ZdLmdldEFic29sdXRlVmFsdWUoYm91bmRzLmhlaWdodCk7XG5cbiAgICB2YXIgZmFjdG9ycyA9IFtdO1xuICAgIGZhY3RvcnMucHVzaCgodGxoICsgdHJoKSAvIGJvdW5kcy53aWR0aCk7XG4gICAgZmFjdG9ycy5wdXNoKChibGggKyBicmgpIC8gYm91bmRzLndpZHRoKTtcbiAgICBmYWN0b3JzLnB1c2goKHRsdiArIGJsdikgLyBib3VuZHMuaGVpZ2h0KTtcbiAgICBmYWN0b3JzLnB1c2goKHRydiArIGJydikgLyBib3VuZHMuaGVpZ2h0KTtcbiAgICB2YXIgbWF4RmFjdG9yID0gTWF0aC5tYXguYXBwbHkoTWF0aCwgZmFjdG9ycyk7XG5cbiAgICBpZiAobWF4RmFjdG9yID4gMSkge1xuICAgICAgICB0bGggLz0gbWF4RmFjdG9yO1xuICAgICAgICB0bHYgLz0gbWF4RmFjdG9yO1xuICAgICAgICB0cmggLz0gbWF4RmFjdG9yO1xuICAgICAgICB0cnYgLz0gbWF4RmFjdG9yO1xuICAgICAgICBicmggLz0gbWF4RmFjdG9yO1xuICAgICAgICBicnYgLz0gbWF4RmFjdG9yO1xuICAgICAgICBibGggLz0gbWF4RmFjdG9yO1xuICAgICAgICBibHYgLz0gbWF4RmFjdG9yO1xuICAgIH1cblxuICAgIHZhciB0b3BXaWR0aCA9IGJvdW5kcy53aWR0aCAtIHRyaDtcbiAgICB2YXIgcmlnaHRIZWlnaHQgPSBib3VuZHMuaGVpZ2h0IC0gYnJ2O1xuICAgIHZhciBib3R0b21XaWR0aCA9IGJvdW5kcy53aWR0aCAtIGJyaDtcbiAgICB2YXIgbGVmdEhlaWdodCA9IGJvdW5kcy5oZWlnaHQgLSBibHY7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0b3BMZWZ0T3V0ZXI6IHRsaCA+IDAgfHwgdGx2ID4gMCA/IGdldEN1cnZlUG9pbnRzKGJvdW5kcy5sZWZ0LCBib3VuZHMudG9wLCB0bGgsIHRsdiwgQ09STkVSLlRPUF9MRUZUKSA6IG5ldyBfVmVjdG9yMi5kZWZhdWx0KGJvdW5kcy5sZWZ0LCBib3VuZHMudG9wKSxcbiAgICAgICAgdG9wTGVmdElubmVyOiB0bGggPiAwIHx8IHRsdiA+IDAgPyBnZXRDdXJ2ZVBvaW50cyhib3VuZHMubGVmdCArIGJvcmRlcnNbTEVGVF0uYm9yZGVyV2lkdGgsIGJvdW5kcy50b3AgKyBib3JkZXJzW1RPUF0uYm9yZGVyV2lkdGgsIE1hdGgubWF4KDAsIHRsaCAtIGJvcmRlcnNbTEVGVF0uYm9yZGVyV2lkdGgpLCBNYXRoLm1heCgwLCB0bHYgLSBib3JkZXJzW1RPUF0uYm9yZGVyV2lkdGgpLCBDT1JORVIuVE9QX0xFRlQpIDogbmV3IF9WZWN0b3IyLmRlZmF1bHQoYm91bmRzLmxlZnQgKyBib3JkZXJzW0xFRlRdLmJvcmRlcldpZHRoLCBib3VuZHMudG9wICsgYm9yZGVyc1tUT1BdLmJvcmRlcldpZHRoKSxcbiAgICAgICAgdG9wUmlnaHRPdXRlcjogdHJoID4gMCB8fCB0cnYgPiAwID8gZ2V0Q3VydmVQb2ludHMoYm91bmRzLmxlZnQgKyB0b3BXaWR0aCwgYm91bmRzLnRvcCwgdHJoLCB0cnYsIENPUk5FUi5UT1BfUklHSFQpIDogbmV3IF9WZWN0b3IyLmRlZmF1bHQoYm91bmRzLmxlZnQgKyBib3VuZHMud2lkdGgsIGJvdW5kcy50b3ApLFxuICAgICAgICB0b3BSaWdodElubmVyOiB0cmggPiAwIHx8IHRydiA+IDAgPyBnZXRDdXJ2ZVBvaW50cyhib3VuZHMubGVmdCArIE1hdGgubWluKHRvcFdpZHRoLCBib3VuZHMud2lkdGggKyBib3JkZXJzW0xFRlRdLmJvcmRlcldpZHRoKSwgYm91bmRzLnRvcCArIGJvcmRlcnNbVE9QXS5ib3JkZXJXaWR0aCwgdG9wV2lkdGggPiBib3VuZHMud2lkdGggKyBib3JkZXJzW0xFRlRdLmJvcmRlcldpZHRoID8gMCA6IHRyaCAtIGJvcmRlcnNbTEVGVF0uYm9yZGVyV2lkdGgsIHRydiAtIGJvcmRlcnNbVE9QXS5ib3JkZXJXaWR0aCwgQ09STkVSLlRPUF9SSUdIVCkgOiBuZXcgX1ZlY3RvcjIuZGVmYXVsdChib3VuZHMubGVmdCArIGJvdW5kcy53aWR0aCAtIGJvcmRlcnNbUklHSFRdLmJvcmRlcldpZHRoLCBib3VuZHMudG9wICsgYm9yZGVyc1tUT1BdLmJvcmRlcldpZHRoKSxcbiAgICAgICAgYm90dG9tUmlnaHRPdXRlcjogYnJoID4gMCB8fCBicnYgPiAwID8gZ2V0Q3VydmVQb2ludHMoYm91bmRzLmxlZnQgKyBib3R0b21XaWR0aCwgYm91bmRzLnRvcCArIHJpZ2h0SGVpZ2h0LCBicmgsIGJydiwgQ09STkVSLkJPVFRPTV9SSUdIVCkgOiBuZXcgX1ZlY3RvcjIuZGVmYXVsdChib3VuZHMubGVmdCArIGJvdW5kcy53aWR0aCwgYm91bmRzLnRvcCArIGJvdW5kcy5oZWlnaHQpLFxuICAgICAgICBib3R0b21SaWdodElubmVyOiBicmggPiAwIHx8IGJydiA+IDAgPyBnZXRDdXJ2ZVBvaW50cyhib3VuZHMubGVmdCArIE1hdGgubWluKGJvdHRvbVdpZHRoLCBib3VuZHMud2lkdGggLSBib3JkZXJzW0xFRlRdLmJvcmRlcldpZHRoKSwgYm91bmRzLnRvcCArIE1hdGgubWluKHJpZ2h0SGVpZ2h0LCBib3VuZHMuaGVpZ2h0ICsgYm9yZGVyc1tUT1BdLmJvcmRlcldpZHRoKSwgTWF0aC5tYXgoMCwgYnJoIC0gYm9yZGVyc1tSSUdIVF0uYm9yZGVyV2lkdGgpLCBicnYgLSBib3JkZXJzW0JPVFRPTV0uYm9yZGVyV2lkdGgsIENPUk5FUi5CT1RUT01fUklHSFQpIDogbmV3IF9WZWN0b3IyLmRlZmF1bHQoYm91bmRzLmxlZnQgKyBib3VuZHMud2lkdGggLSBib3JkZXJzW1JJR0hUXS5ib3JkZXJXaWR0aCwgYm91bmRzLnRvcCArIGJvdW5kcy5oZWlnaHQgLSBib3JkZXJzW0JPVFRPTV0uYm9yZGVyV2lkdGgpLFxuICAgICAgICBib3R0b21MZWZ0T3V0ZXI6IGJsaCA+IDAgfHwgYmx2ID4gMCA/IGdldEN1cnZlUG9pbnRzKGJvdW5kcy5sZWZ0LCBib3VuZHMudG9wICsgbGVmdEhlaWdodCwgYmxoLCBibHYsIENPUk5FUi5CT1RUT01fTEVGVCkgOiBuZXcgX1ZlY3RvcjIuZGVmYXVsdChib3VuZHMubGVmdCwgYm91bmRzLnRvcCArIGJvdW5kcy5oZWlnaHQpLFxuICAgICAgICBib3R0b21MZWZ0SW5uZXI6IGJsaCA+IDAgfHwgYmx2ID4gMCA/IGdldEN1cnZlUG9pbnRzKGJvdW5kcy5sZWZ0ICsgYm9yZGVyc1tMRUZUXS5ib3JkZXJXaWR0aCwgYm91bmRzLnRvcCArIGxlZnRIZWlnaHQsIE1hdGgubWF4KDAsIGJsaCAtIGJvcmRlcnNbTEVGVF0uYm9yZGVyV2lkdGgpLCBibHYgLSBib3JkZXJzW0JPVFRPTV0uYm9yZGVyV2lkdGgsIENPUk5FUi5CT1RUT01fTEVGVCkgOiBuZXcgX1ZlY3RvcjIuZGVmYXVsdChib3VuZHMubGVmdCArIGJvcmRlcnNbTEVGVF0uYm9yZGVyV2lkdGgsIGJvdW5kcy50b3AgKyBib3VuZHMuaGVpZ2h0IC0gYm9yZGVyc1tCT1RUT01dLmJvcmRlcldpZHRoKVxuICAgIH07XG59O1xuXG52YXIgQ09STkVSID0ge1xuICAgIFRPUF9MRUZUOiAwLFxuICAgIFRPUF9SSUdIVDogMSxcbiAgICBCT1RUT01fUklHSFQ6IDIsXG4gICAgQk9UVE9NX0xFRlQ6IDNcbn07XG5cbnZhciBnZXRDdXJ2ZVBvaW50cyA9IGZ1bmN0aW9uIGdldEN1cnZlUG9pbnRzKHgsIHksIHIxLCByMiwgcG9zaXRpb24pIHtcbiAgICB2YXIga2FwcGEgPSA0ICogKChNYXRoLnNxcnQoMikgLSAxKSAvIDMpO1xuICAgIHZhciBveCA9IHIxICoga2FwcGE7IC8vIGNvbnRyb2wgcG9pbnQgb2Zmc2V0IGhvcml6b250YWxcbiAgICB2YXIgb3kgPSByMiAqIGthcHBhOyAvLyBjb250cm9sIHBvaW50IG9mZnNldCB2ZXJ0aWNhbFxuICAgIHZhciB4bSA9IHggKyByMTsgLy8geC1taWRkbGVcbiAgICB2YXIgeW0gPSB5ICsgcjI7IC8vIHktbWlkZGxlXG5cbiAgICBzd2l0Y2ggKHBvc2l0aW9uKSB7XG4gICAgICAgIGNhc2UgQ09STkVSLlRPUF9MRUZUOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBfQmV6aWVyQ3VydmUyLmRlZmF1bHQobmV3IF9WZWN0b3IyLmRlZmF1bHQoeCwgeW0pLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdCh4LCB5bSAtIG95KSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoeG0gLSBveCwgeSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KHhtLCB5KSk7XG4gICAgICAgIGNhc2UgQ09STkVSLlRPUF9SSUdIVDpcbiAgICAgICAgICAgIHJldHVybiBuZXcgX0JlemllckN1cnZlMi5kZWZhdWx0KG5ldyBfVmVjdG9yMi5kZWZhdWx0KHgsIHkpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdCh4ICsgb3gsIHkpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdCh4bSwgeW0gLSBveSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KHhtLCB5bSkpO1xuICAgICAgICBjYXNlIENPUk5FUi5CT1RUT01fUklHSFQ6XG4gICAgICAgICAgICByZXR1cm4gbmV3IF9CZXppZXJDdXJ2ZTIuZGVmYXVsdChuZXcgX1ZlY3RvcjIuZGVmYXVsdCh4bSwgeSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KHhtLCB5ICsgb3kpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdCh4ICsgb3gsIHltKSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoeCwgeW0pKTtcbiAgICAgICAgY2FzZSBDT1JORVIuQk9UVE9NX0xFRlQ6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gbmV3IF9CZXppZXJDdXJ2ZTIuZGVmYXVsdChuZXcgX1ZlY3RvcjIuZGVmYXVsdCh4bSwgeW0pLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdCh4bSAtIG94LCB5bSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KHgsIHkgKyBveSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KHgsIHkpKTtcbiAgICB9XG59O1xuXG4vKioqLyB9KSxcbi8qIDMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX0NvbG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxudmFyIF9Db2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db2xvcik7XG5cbnZhciBfVXRpbCA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG5cbnZhciBfYmFja2dyb3VuZCA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cbnZhciBfYm9yZGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMik7XG5cbnZhciBfYm9yZGVyUmFkaXVzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMyk7XG5cbnZhciBfZGlzcGxheSA9IF9fd2VicGFja19yZXF1aXJlX18oMzQpO1xuXG52YXIgX2Zsb2F0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNSk7XG5cbnZhciBfZm9udCA9IF9fd2VicGFja19yZXF1aXJlX18oMzYpO1xuXG52YXIgX2xldHRlclNwYWNpbmcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM3KTtcblxudmFyIF9saW5lQnJlYWsgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM4KTtcblxudmFyIF9saXN0U3R5bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpO1xuXG52YXIgX21hcmdpbiA9IF9fd2VicGFja19yZXF1aXJlX18oMzkpO1xuXG52YXIgX292ZXJmbG93ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0MCk7XG5cbnZhciBfb3ZlcmZsb3dXcmFwID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOCk7XG5cbnZhciBfcGFkZGluZyA9IF9fd2VicGFja19yZXF1aXJlX18oMTcpO1xuXG52YXIgX3Bvc2l0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOSk7XG5cbnZhciBfdGV4dERlY29yYXRpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKTtcblxudmFyIF90ZXh0U2hhZG93ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0MSk7XG5cbnZhciBfdGV4dFRyYW5zZm9ybSA9IF9fd2VicGFja19yZXF1aXJlX18oMjApO1xuXG52YXIgX3RyYW5zZm9ybSA9IF9fd2VicGFja19yZXF1aXJlX18oNDIpO1xuXG52YXIgX3Zpc2liaWxpdHkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQzKTtcblxudmFyIF93b3JkQnJlYWsgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ0KTtcblxudmFyIF96SW5kZXggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ1KTtcblxudmFyIF9Cb3VuZHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG52YXIgX0lucHV0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMSk7XG5cbnZhciBfTGlzdEl0ZW0gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIElOUFVUX1RBR1MgPSBbJ0lOUFVUJywgJ1RFWFRBUkVBJywgJ1NFTEVDVCddO1xuXG52YXIgTm9kZUNvbnRhaW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBOb2RlQ29udGFpbmVyKG5vZGUsIHBhcmVudCwgcmVzb3VyY2VMb2FkZXIsIGluZGV4KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE5vZGVDb250YWluZXIpO1xuXG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICB0aGlzLnRhZ05hbWUgPSBub2RlLnRhZ05hbWU7XG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzID0gW107XG4gICAgICAgIHRoaXMubGlzdEl0ZW1zID0gW107XG4gICAgICAgIGlmICh0eXBlb2Ygbm9kZS5zdGFydCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHRoaXMubGlzdFN0YXJ0ID0gbm9kZS5zdGFydDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZGVmYXVsdFZpZXcgPSBub2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gICAgICAgIHZhciBzY3JvbGxYID0gZGVmYXVsdFZpZXcucGFnZVhPZmZzZXQ7XG4gICAgICAgIHZhciBzY3JvbGxZID0gZGVmYXVsdFZpZXcucGFnZVlPZmZzZXQ7XG4gICAgICAgIHZhciBzdHlsZSA9IGRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUobm9kZSwgbnVsbCk7XG4gICAgICAgIHZhciBkaXNwbGF5ID0gKDAsIF9kaXNwbGF5LnBhcnNlRGlzcGxheSkoc3R5bGUuZGlzcGxheSk7XG5cbiAgICAgICAgdmFyIElTX0lOUFVUID0gbm9kZS50eXBlID09PSAncmFkaW8nIHx8IG5vZGUudHlwZSA9PT0gJ2NoZWNrYm94JztcblxuICAgICAgICB2YXIgcG9zaXRpb24gPSAoMCwgX3Bvc2l0aW9uLnBhcnNlUG9zaXRpb24pKHN0eWxlLnBvc2l0aW9uKTtcblxuICAgICAgICB0aGlzLnN0eWxlID0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogSVNfSU5QVVQgPyBfSW5wdXQuSU5QVVRfQkFDS0dST1VORCA6ICgwLCBfYmFja2dyb3VuZC5wYXJzZUJhY2tncm91bmQpKHN0eWxlLCByZXNvdXJjZUxvYWRlciksXG4gICAgICAgICAgICBib3JkZXI6IElTX0lOUFVUID8gX0lucHV0LklOUFVUX0JPUkRFUlMgOiAoMCwgX2JvcmRlci5wYXJzZUJvcmRlcikoc3R5bGUpLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAobm9kZSBpbnN0YW5jZW9mIGRlZmF1bHRWaWV3LkhUTUxJbnB1dEVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpICYmIElTX0lOUFVUID8gKDAsIF9JbnB1dC5nZXRJbnB1dEJvcmRlclJhZGl1cykobm9kZSkgOiAoMCwgX2JvcmRlclJhZGl1cy5wYXJzZUJvcmRlclJhZGl1cykoc3R5bGUpLFxuICAgICAgICAgICAgY29sb3I6IElTX0lOUFVUID8gX0lucHV0LklOUFVUX0NPTE9SIDogbmV3IF9Db2xvcjIuZGVmYXVsdChzdHlsZS5jb2xvciksXG4gICAgICAgICAgICBkaXNwbGF5OiBkaXNwbGF5LFxuICAgICAgICAgICAgZmxvYXQ6ICgwLCBfZmxvYXQucGFyc2VDU1NGbG9hdCkoc3R5bGUuZmxvYXQpLFxuICAgICAgICAgICAgZm9udDogKDAsIF9mb250LnBhcnNlRm9udCkoc3R5bGUpLFxuICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogKDAsIF9sZXR0ZXJTcGFjaW5nLnBhcnNlTGV0dGVyU3BhY2luZykoc3R5bGUubGV0dGVyU3BhY2luZyksXG4gICAgICAgICAgICBsaXN0U3R5bGU6IGRpc3BsYXkgPT09IF9kaXNwbGF5LkRJU1BMQVkuTElTVF9JVEVNID8gKDAsIF9saXN0U3R5bGUucGFyc2VMaXN0U3R5bGUpKHN0eWxlKSA6IG51bGwsXG4gICAgICAgICAgICBsaW5lQnJlYWs6ICgwLCBfbGluZUJyZWFrLnBhcnNlTGluZUJyZWFrKShzdHlsZS5saW5lQnJlYWspLFxuICAgICAgICAgICAgbWFyZ2luOiAoMCwgX21hcmdpbi5wYXJzZU1hcmdpbikoc3R5bGUpLFxuICAgICAgICAgICAgb3BhY2l0eTogcGFyc2VGbG9hdChzdHlsZS5vcGFjaXR5KSxcbiAgICAgICAgICAgIG92ZXJmbG93OiBJTlBVVF9UQUdTLmluZGV4T2Yobm9kZS50YWdOYW1lKSA9PT0gLTEgPyAoMCwgX292ZXJmbG93LnBhcnNlT3ZlcmZsb3cpKHN0eWxlLm92ZXJmbG93KSA6IF9vdmVyZmxvdy5PVkVSRkxPVy5ISURERU4sXG4gICAgICAgICAgICBvdmVyZmxvd1dyYXA6ICgwLCBfb3ZlcmZsb3dXcmFwLnBhcnNlT3ZlcmZsb3dXcmFwKShzdHlsZS5vdmVyZmxvd1dyYXAgPyBzdHlsZS5vdmVyZmxvd1dyYXAgOiBzdHlsZS53b3JkV3JhcCksXG4gICAgICAgICAgICBwYWRkaW5nOiAoMCwgX3BhZGRpbmcucGFyc2VQYWRkaW5nKShzdHlsZSksXG4gICAgICAgICAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4gICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogKDAsIF90ZXh0RGVjb3JhdGlvbi5wYXJzZVRleHREZWNvcmF0aW9uKShzdHlsZSksXG4gICAgICAgICAgICB0ZXh0U2hhZG93OiAoMCwgX3RleHRTaGFkb3cucGFyc2VUZXh0U2hhZG93KShzdHlsZS50ZXh0U2hhZG93KSxcbiAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06ICgwLCBfdGV4dFRyYW5zZm9ybS5wYXJzZVRleHRUcmFuc2Zvcm0pKHN0eWxlLnRleHRUcmFuc2Zvcm0pLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiAoMCwgX3RyYW5zZm9ybS5wYXJzZVRyYW5zZm9ybSkoc3R5bGUpLFxuICAgICAgICAgICAgdmlzaWJpbGl0eTogKDAsIF92aXNpYmlsaXR5LnBhcnNlVmlzaWJpbGl0eSkoc3R5bGUudmlzaWJpbGl0eSksXG4gICAgICAgICAgICB3b3JkQnJlYWs6ICgwLCBfd29yZEJyZWFrLnBhcnNlV29yZEJyZWFrKShzdHlsZS53b3JkQnJlYWspLFxuICAgICAgICAgICAgekluZGV4OiAoMCwgX3pJbmRleC5wYXJzZVpJbmRleCkocG9zaXRpb24gIT09IF9wb3NpdGlvbi5QT1NJVElPTi5TVEFUSUMgPyBzdHlsZS56SW5kZXggOiAnYXV0bycpXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMuaXNUcmFuc2Zvcm1lZCgpKSB7XG4gICAgICAgICAgICAvLyBnZXRCb3VuZGluZ0NsaWVudFJlY3QgcHJvdmlkZXMgdmFsdWVzIHBvc3QtdHJhbnNmb3JtLCB3ZSB3YW50IHRoZW0gd2l0aG91dCB0aGUgdHJhbnNmb3JtYXRpb25cbiAgICAgICAgICAgIG5vZGUuc3R5bGUudHJhbnNmb3JtID0gJ21hdHJpeCgxLDAsMCwxLDAsMCknO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRpc3BsYXkgPT09IF9kaXNwbGF5LkRJU1BMQVkuTElTVF9JVEVNKSB7XG4gICAgICAgICAgICB2YXIgbGlzdE93bmVyID0gKDAsIF9MaXN0SXRlbS5nZXRMaXN0T3duZXIpKHRoaXMpO1xuICAgICAgICAgICAgaWYgKGxpc3RPd25lcikge1xuICAgICAgICAgICAgICAgIHZhciBsaXN0SW5kZXggPSBsaXN0T3duZXIubGlzdEl0ZW1zLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBsaXN0T3duZXIubGlzdEl0ZW1zLnB1c2godGhpcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0SW5kZXggPSBub2RlLmhhc0F0dHJpYnV0ZSgndmFsdWUnKSAmJiB0eXBlb2Ygbm9kZS52YWx1ZSA9PT0gJ251bWJlcicgPyBub2RlLnZhbHVlIDogbGlzdEluZGV4ID09PSAwID8gdHlwZW9mIGxpc3RPd25lci5saXN0U3RhcnQgPT09ICdudW1iZXInID8gbGlzdE93bmVyLmxpc3RTdGFydCA6IDEgOiBsaXN0T3duZXIubGlzdEl0ZW1zW2xpc3RJbmRleCAtIDFdLmxpc3RJbmRleCArIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUT0RPIG1vdmUgYm91bmQgcmV0cmlldmFsIGZvciBhbGwgbm9kZXMgdG8gYSBsYXRlciBzdGFnZT9cbiAgICAgICAgaWYgKG5vZGUudGFnTmFtZSA9PT0gJ0lNRycpIHtcbiAgICAgICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5ib3VuZHMgPSAoMCwgX0JvdW5kcy5wYXJzZUJvdW5kcykobm9kZSwgc2Nyb2xsWCwgc2Nyb2xsWSk7XG4gICAgICAgICAgICAgICAgX3RoaXMuY3VydmVkQm91bmRzID0gKDAsIF9Cb3VuZHMucGFyc2VCb3VuZEN1cnZlcykoX3RoaXMuYm91bmRzLCBfdGhpcy5zdHlsZS5ib3JkZXIsIF90aGlzLnN0eWxlLmJvcmRlclJhZGl1cyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmltYWdlID0gZ2V0SW1hZ2Uobm9kZSwgcmVzb3VyY2VMb2FkZXIpO1xuICAgICAgICB0aGlzLmJvdW5kcyA9IElTX0lOUFVUID8gKDAsIF9JbnB1dC5yZWZvcm1hdElucHV0Qm91bmRzKSgoMCwgX0JvdW5kcy5wYXJzZUJvdW5kcykobm9kZSwgc2Nyb2xsWCwgc2Nyb2xsWSkpIDogKDAsIF9Cb3VuZHMucGFyc2VCb3VuZHMpKG5vZGUsIHNjcm9sbFgsIHNjcm9sbFkpO1xuICAgICAgICB0aGlzLmN1cnZlZEJvdW5kcyA9ICgwLCBfQm91bmRzLnBhcnNlQm91bmRDdXJ2ZXMpKHRoaXMuYm91bmRzLCB0aGlzLnN0eWxlLmJvcmRlciwgdGhpcy5zdHlsZS5ib3JkZXJSYWRpdXMpO1xuXG4gICAgICAgIGlmICh0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLm5hbWUgPSAnJyArIG5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpICsgKG5vZGUuaWQgPyAnIycgKyBub2RlLmlkIDogJycpICsgbm9kZS5jbGFzc05hbWUudG9TdHJpbmcoKS5zcGxpdCgnICcpLm1hcChmdW5jdGlvbiAocykge1xuICAgICAgICAgICAgICAgIHJldHVybiBzLmxlbmd0aCA/ICcuJyArIHMgOiAnJztcbiAgICAgICAgICAgIH0pLmpvaW4oJycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKE5vZGVDb250YWluZXIsIFt7XG4gICAgICAgIGtleTogJ2dldENsaXBQYXRocycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDbGlwUGF0aHMoKSB7XG4gICAgICAgICAgICB2YXIgcGFyZW50Q2xpcHMgPSB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LmdldENsaXBQYXRocygpIDogW107XG4gICAgICAgICAgICB2YXIgaXNDbGlwcGVkID0gdGhpcy5zdHlsZS5vdmVyZmxvdyAhPT0gX292ZXJmbG93Lk9WRVJGTE9XLlZJU0lCTEU7XG5cbiAgICAgICAgICAgIHJldHVybiBpc0NsaXBwZWQgPyBwYXJlbnRDbGlwcy5jb25jYXQoWygwLCBfQm91bmRzLmNhbGN1bGF0ZVBhZGRpbmdCb3hQYXRoKSh0aGlzLmN1cnZlZEJvdW5kcyldKSA6IHBhcmVudENsaXBzO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdpc0luRmxvdycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc0luRmxvdygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzUm9vdEVsZW1lbnQoKSAmJiAhdGhpcy5pc0Zsb2F0aW5nKCkgJiYgIXRoaXMuaXNBYnNvbHV0ZWx5UG9zaXRpb25lZCgpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdpc1Zpc2libGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaXNWaXNpYmxlKCkge1xuICAgICAgICAgICAgcmV0dXJuICEoMCwgX1V0aWwuY29udGFpbnMpKHRoaXMuc3R5bGUuZGlzcGxheSwgX2Rpc3BsYXkuRElTUExBWS5OT05FKSAmJiB0aGlzLnN0eWxlLm9wYWNpdHkgPiAwICYmIHRoaXMuc3R5bGUudmlzaWJpbGl0eSA9PT0gX3Zpc2liaWxpdHkuVklTSUJJTElUWS5WSVNJQkxFO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdpc0Fic29sdXRlbHlQb3NpdGlvbmVkJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzQWJzb2x1dGVseVBvc2l0aW9uZWQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdHlsZS5wb3NpdGlvbiAhPT0gX3Bvc2l0aW9uLlBPU0lUSU9OLlNUQVRJQyAmJiB0aGlzLnN0eWxlLnBvc2l0aW9uICE9PSBfcG9zaXRpb24uUE9TSVRJT04uUkVMQVRJVkU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2lzUG9zaXRpb25lZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc1Bvc2l0aW9uZWQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdHlsZS5wb3NpdGlvbiAhPT0gX3Bvc2l0aW9uLlBPU0lUSU9OLlNUQVRJQztcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaXNGbG9hdGluZycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc0Zsb2F0aW5nKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3R5bGUuZmxvYXQgIT09IF9mbG9hdC5GTE9BVC5OT05FO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdpc1Jvb3RFbGVtZW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzUm9vdEVsZW1lbnQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQgPT09IG51bGw7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2lzVHJhbnNmb3JtZWQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaXNUcmFuc2Zvcm1lZCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0eWxlLnRyYW5zZm9ybSAhPT0gbnVsbDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaXNQb3NpdGlvbmVkV2l0aFpJbmRleCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc1Bvc2l0aW9uZWRXaXRoWkluZGV4KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNQb3NpdGlvbmVkKCkgJiYgIXRoaXMuc3R5bGUuekluZGV4LmF1dG87XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2lzSW5saW5lTGV2ZWwnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaXNJbmxpbmVMZXZlbCgpIHtcbiAgICAgICAgICAgIHJldHVybiAoMCwgX1V0aWwuY29udGFpbnMpKHRoaXMuc3R5bGUuZGlzcGxheSwgX2Rpc3BsYXkuRElTUExBWS5JTkxJTkUpIHx8ICgwLCBfVXRpbC5jb250YWlucykodGhpcy5zdHlsZS5kaXNwbGF5LCBfZGlzcGxheS5ESVNQTEFZLklOTElORV9CTE9DSykgfHwgKDAsIF9VdGlsLmNvbnRhaW5zKSh0aGlzLnN0eWxlLmRpc3BsYXksIF9kaXNwbGF5LkRJU1BMQVkuSU5MSU5FX0ZMRVgpIHx8ICgwLCBfVXRpbC5jb250YWlucykodGhpcy5zdHlsZS5kaXNwbGF5LCBfZGlzcGxheS5ESVNQTEFZLklOTElORV9HUklEKSB8fCAoMCwgX1V0aWwuY29udGFpbnMpKHRoaXMuc3R5bGUuZGlzcGxheSwgX2Rpc3BsYXkuRElTUExBWS5JTkxJTkVfTElTVF9JVEVNKSB8fCAoMCwgX1V0aWwuY29udGFpbnMpKHRoaXMuc3R5bGUuZGlzcGxheSwgX2Rpc3BsYXkuRElTUExBWS5JTkxJTkVfVEFCTEUpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdpc0lubGluZUJsb2NrT3JJbmxpbmVUYWJsZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc0lubGluZUJsb2NrT3JJbmxpbmVUYWJsZSgpIHtcbiAgICAgICAgICAgIHJldHVybiAoMCwgX1V0aWwuY29udGFpbnMpKHRoaXMuc3R5bGUuZGlzcGxheSwgX2Rpc3BsYXkuRElTUExBWS5JTkxJTkVfQkxPQ0spIHx8ICgwLCBfVXRpbC5jb250YWlucykodGhpcy5zdHlsZS5kaXNwbGF5LCBfZGlzcGxheS5ESVNQTEFZLklOTElORV9UQUJMRSk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTm9kZUNvbnRhaW5lcjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTm9kZUNvbnRhaW5lcjtcblxuXG52YXIgZ2V0SW1hZ2UgPSBmdW5jdGlvbiBnZXRJbWFnZShub2RlLCByZXNvdXJjZUxvYWRlcikge1xuICAgIGlmIChub2RlIGluc3RhbmNlb2Ygbm9kZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LlNWR1NWR0VsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIFNWR1NWR0VsZW1lbnQpIHtcbiAgICAgICAgdmFyIHMgPSBuZXcgWE1MU2VyaWFsaXplcigpO1xuICAgICAgICByZXR1cm4gcmVzb3VyY2VMb2FkZXIubG9hZEltYWdlKCdkYXRhOmltYWdlL3N2Zyt4bWwsJyArIGVuY29kZVVSSUNvbXBvbmVudChzLnNlcmlhbGl6ZVRvU3RyaW5nKG5vZGUpKSk7XG4gICAgfVxuICAgIHN3aXRjaCAobm9kZS50YWdOYW1lKSB7XG4gICAgICAgIGNhc2UgJ0lNRyc6XG4gICAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICAgICAgICB2YXIgaW1nID0gbm9kZTtcbiAgICAgICAgICAgIHJldHVybiByZXNvdXJjZUxvYWRlci5sb2FkSW1hZ2UoaW1nLmN1cnJlbnRTcmMgfHwgaW1nLnNyYyk7XG4gICAgICAgIGNhc2UgJ0NBTlZBUyc6XG4gICAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICAgICAgICB2YXIgY2FudmFzID0gbm9kZTtcbiAgICAgICAgICAgIHJldHVybiByZXNvdXJjZUxvYWRlci5sb2FkQ2FudmFzKGNhbnZhcyk7XG4gICAgICAgIGNhc2UgJ0lGUkFNRSc6XG4gICAgICAgICAgICB2YXIgaWZyYW1lS2V5ID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaHRtbDJjYW52YXMtaW50ZXJuYWwtaWZyYW1lLWtleScpO1xuICAgICAgICAgICAgaWYgKGlmcmFtZUtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpZnJhbWVLZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbn07XG5cbi8qKiovIH0pLFxuLyogNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgY29udGFpbnMgPSBleHBvcnRzLmNvbnRhaW5zID0gZnVuY3Rpb24gY29udGFpbnMoYml0LCB2YWx1ZSkge1xuICAgIHJldHVybiAoYml0ICYgdmFsdWUpICE9PSAwO1xufTtcblxudmFyIGRpc3RhbmNlID0gZXhwb3J0cy5kaXN0YW5jZSA9IGZ1bmN0aW9uIGRpc3RhbmNlKGEsIGIpIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpO1xufTtcblxudmFyIGNvcHlDU1NTdHlsZXMgPSBleHBvcnRzLmNvcHlDU1NTdHlsZXMgPSBmdW5jdGlvbiBjb3B5Q1NTU3R5bGVzKHN0eWxlLCB0YXJnZXQpIHtcbiAgICAvLyBFZGdlIGRvZXMgbm90IHByb3ZpZGUgdmFsdWUgZm9yIGNzc1RleHRcbiAgICBmb3IgKHZhciBpID0gc3R5bGUubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgdmFyIHByb3BlcnR5ID0gc3R5bGUuaXRlbShpKTtcbiAgICAgICAgLy8gU2FmYXJpIHNob3dzIHBzZXVkb2VsZW1lbnRzIGlmIGNvbnRlbnQgaXMgc2V0XG4gICAgICAgIGlmIChwcm9wZXJ0eSAhPT0gJ2NvbnRlbnQnKSB7XG4gICAgICAgICAgICB0YXJnZXQuc3R5bGUuc2V0UHJvcGVydHkocHJvcGVydHksIHN0eWxlLmdldFByb3BlcnR5VmFsdWUocHJvcGVydHkpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufTtcblxudmFyIFNNQUxMX0lNQUdFID0gZXhwb3J0cy5TTUFMTF9JTUFHRSA9ICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTcnO1xuXG4vKioqLyB9KSxcbi8qIDUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5wYXJzZUJhY2tncm91bmRJbWFnZSA9IGV4cG9ydHMucGFyc2VCYWNrZ3JvdW5kID0gZXhwb3J0cy5jYWxjdWxhdGVCYWNrZ3JvdW5kUmVwZWF0UGF0aCA9IGV4cG9ydHMuY2FsY3VsYXRlQmFja2dyb3VuZFBvc2l0aW9uID0gZXhwb3J0cy5jYWxjdWxhdGVCYWNrZ3JvdW5nUG9zaXRpb25pbmdBcmVhID0gZXhwb3J0cy5jYWxjdWxhdGVCYWNrZ3JvdW5nUGFpbnRpbmdBcmVhID0gZXhwb3J0cy5jYWxjdWxhdGVHcmFkaWVudEJhY2tncm91bmRTaXplID0gZXhwb3J0cy5jYWxjdWxhdGVCYWNrZ3JvdW5kU2l6ZSA9IGV4cG9ydHMuQkFDS0dST1VORF9PUklHSU4gPSBleHBvcnRzLkJBQ0tHUk9VTkRfQ0xJUCA9IGV4cG9ydHMuQkFDS0dST1VORF9TSVpFID0gZXhwb3J0cy5CQUNLR1JPVU5EX1JFUEVBVCA9IHVuZGVmaW5lZDtcblxudmFyIF9Db2xvciA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBfQ29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29sb3IpO1xuXG52YXIgX0xlbmd0aCA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cbnZhciBfTGVuZ3RoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xlbmd0aCk7XG5cbnZhciBfU2l6ZSA9IF9fd2VicGFja19yZXF1aXJlX18oMzEpO1xuXG52YXIgX1NpemUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU2l6ZSk7XG5cbnZhciBfVmVjdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcblxudmFyIF9WZWN0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVmVjdG9yKTtcblxudmFyIF9Cb3VuZHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG52YXIgX3BhZGRpbmcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE3KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEJBQ0tHUk9VTkRfUkVQRUFUID0gZXhwb3J0cy5CQUNLR1JPVU5EX1JFUEVBVCA9IHtcbiAgICBSRVBFQVQ6IDAsXG4gICAgTk9fUkVQRUFUOiAxLFxuICAgIFJFUEVBVF9YOiAyLFxuICAgIFJFUEVBVF9ZOiAzXG59O1xuXG52YXIgQkFDS0dST1VORF9TSVpFID0gZXhwb3J0cy5CQUNLR1JPVU5EX1NJWkUgPSB7XG4gICAgQVVUTzogMCxcbiAgICBDT05UQUlOOiAxLFxuICAgIENPVkVSOiAyLFxuICAgIExFTkdUSDogM1xufTtcblxudmFyIEJBQ0tHUk9VTkRfQ0xJUCA9IGV4cG9ydHMuQkFDS0dST1VORF9DTElQID0ge1xuICAgIEJPUkRFUl9CT1g6IDAsXG4gICAgUEFERElOR19CT1g6IDEsXG4gICAgQ09OVEVOVF9CT1g6IDJcbn07XG5cbnZhciBCQUNLR1JPVU5EX09SSUdJTiA9IGV4cG9ydHMuQkFDS0dST1VORF9PUklHSU4gPSBCQUNLR1JPVU5EX0NMSVA7XG5cbnZhciBBVVRPID0gJ2F1dG8nO1xuXG52YXIgQmFja2dyb3VuZFNpemUgPSBmdW5jdGlvbiBCYWNrZ3JvdW5kU2l6ZShzaXplKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJhY2tncm91bmRTaXplKTtcblxuICAgIHN3aXRjaCAoc2l6ZSkge1xuICAgICAgICBjYXNlICdjb250YWluJzpcbiAgICAgICAgICAgIHRoaXMuc2l6ZSA9IEJBQ0tHUk9VTkRfU0laRS5DT05UQUlOO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NvdmVyJzpcbiAgICAgICAgICAgIHRoaXMuc2l6ZSA9IEJBQ0tHUk9VTkRfU0laRS5DT1ZFUjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdXRvJzpcbiAgICAgICAgICAgIHRoaXMuc2l6ZSA9IEJBQ0tHUk9VTkRfU0laRS5BVVRPO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gbmV3IF9MZW5ndGgyLmRlZmF1bHQoc2l6ZSk7XG4gICAgfVxufTtcblxudmFyIGNhbGN1bGF0ZUJhY2tncm91bmRTaXplID0gZXhwb3J0cy5jYWxjdWxhdGVCYWNrZ3JvdW5kU2l6ZSA9IGZ1bmN0aW9uIGNhbGN1bGF0ZUJhY2tncm91bmRTaXplKGJhY2tncm91bmRJbWFnZSwgaW1hZ2UsIGJvdW5kcykge1xuICAgIHZhciB3aWR0aCA9IDA7XG4gICAgdmFyIGhlaWdodCA9IDA7XG4gICAgdmFyIHNpemUgPSBiYWNrZ3JvdW5kSW1hZ2Uuc2l6ZTtcbiAgICBpZiAoc2l6ZVswXS5zaXplID09PSBCQUNLR1JPVU5EX1NJWkUuQ09OVEFJTiB8fCBzaXplWzBdLnNpemUgPT09IEJBQ0tHUk9VTkRfU0laRS5DT1ZFUikge1xuICAgICAgICB2YXIgdGFyZ2V0UmF0aW8gPSBib3VuZHMud2lkdGggLyBib3VuZHMuaGVpZ2h0O1xuICAgICAgICB2YXIgY3VycmVudFJhdGlvID0gaW1hZ2Uud2lkdGggLyBpbWFnZS5oZWlnaHQ7XG4gICAgICAgIHJldHVybiB0YXJnZXRSYXRpbyA8IGN1cnJlbnRSYXRpbyAhPT0gKHNpemVbMF0uc2l6ZSA9PT0gQkFDS0dST1VORF9TSVpFLkNPVkVSKSA/IG5ldyBfU2l6ZTIuZGVmYXVsdChib3VuZHMud2lkdGgsIGJvdW5kcy53aWR0aCAvIGN1cnJlbnRSYXRpbykgOiBuZXcgX1NpemUyLmRlZmF1bHQoYm91bmRzLmhlaWdodCAqIGN1cnJlbnRSYXRpbywgYm91bmRzLmhlaWdodCk7XG4gICAgfVxuXG4gICAgaWYgKHNpemVbMF0udmFsdWUpIHtcbiAgICAgICAgd2lkdGggPSBzaXplWzBdLnZhbHVlLmdldEFic29sdXRlVmFsdWUoYm91bmRzLndpZHRoKTtcbiAgICB9XG5cbiAgICBpZiAoc2l6ZVswXS5zaXplID09PSBCQUNLR1JPVU5EX1NJWkUuQVVUTyAmJiBzaXplWzFdLnNpemUgPT09IEJBQ0tHUk9VTkRfU0laRS5BVVRPKSB7XG4gICAgICAgIGhlaWdodCA9IGltYWdlLmhlaWdodDtcbiAgICB9IGVsc2UgaWYgKHNpemVbMV0uc2l6ZSA9PT0gQkFDS0dST1VORF9TSVpFLkFVVE8pIHtcbiAgICAgICAgaGVpZ2h0ID0gd2lkdGggLyBpbWFnZS53aWR0aCAqIGltYWdlLmhlaWdodDtcbiAgICB9IGVsc2UgaWYgKHNpemVbMV0udmFsdWUpIHtcbiAgICAgICAgaGVpZ2h0ID0gc2l6ZVsxXS52YWx1ZS5nZXRBYnNvbHV0ZVZhbHVlKGJvdW5kcy5oZWlnaHQpO1xuICAgIH1cblxuICAgIGlmIChzaXplWzBdLnNpemUgPT09IEJBQ0tHUk9VTkRfU0laRS5BVVRPKSB7XG4gICAgICAgIHdpZHRoID0gaGVpZ2h0IC8gaW1hZ2UuaGVpZ2h0ICogaW1hZ2Uud2lkdGg7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBfU2l6ZTIuZGVmYXVsdCh3aWR0aCwgaGVpZ2h0KTtcbn07XG5cbnZhciBjYWxjdWxhdGVHcmFkaWVudEJhY2tncm91bmRTaXplID0gZXhwb3J0cy5jYWxjdWxhdGVHcmFkaWVudEJhY2tncm91bmRTaXplID0gZnVuY3Rpb24gY2FsY3VsYXRlR3JhZGllbnRCYWNrZ3JvdW5kU2l6ZShiYWNrZ3JvdW5kSW1hZ2UsIGJvdW5kcykge1xuICAgIHZhciBzaXplID0gYmFja2dyb3VuZEltYWdlLnNpemU7XG4gICAgdmFyIHdpZHRoID0gc2l6ZVswXS52YWx1ZSA/IHNpemVbMF0udmFsdWUuZ2V0QWJzb2x1dGVWYWx1ZShib3VuZHMud2lkdGgpIDogYm91bmRzLndpZHRoO1xuICAgIHZhciBoZWlnaHQgPSBzaXplWzFdLnZhbHVlID8gc2l6ZVsxXS52YWx1ZS5nZXRBYnNvbHV0ZVZhbHVlKGJvdW5kcy5oZWlnaHQpIDogc2l6ZVswXS52YWx1ZSA/IHdpZHRoIDogYm91bmRzLmhlaWdodDtcblxuICAgIHJldHVybiBuZXcgX1NpemUyLmRlZmF1bHQod2lkdGgsIGhlaWdodCk7XG59O1xuXG52YXIgQVVUT19TSVpFID0gbmV3IEJhY2tncm91bmRTaXplKEFVVE8pO1xuXG52YXIgY2FsY3VsYXRlQmFja2dyb3VuZ1BhaW50aW5nQXJlYSA9IGV4cG9ydHMuY2FsY3VsYXRlQmFja2dyb3VuZ1BhaW50aW5nQXJlYSA9IGZ1bmN0aW9uIGNhbGN1bGF0ZUJhY2tncm91bmdQYWludGluZ0FyZWEoY3VydmVzLCBjbGlwKSB7XG4gICAgc3dpdGNoIChjbGlwKSB7XG4gICAgICAgIGNhc2UgQkFDS0dST1VORF9DTElQLkJPUkRFUl9CT1g6XG4gICAgICAgICAgICByZXR1cm4gKDAsIF9Cb3VuZHMuY2FsY3VsYXRlQm9yZGVyQm94UGF0aCkoY3VydmVzKTtcbiAgICAgICAgY2FzZSBCQUNLR1JPVU5EX0NMSVAuUEFERElOR19CT1g6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gKDAsIF9Cb3VuZHMuY2FsY3VsYXRlUGFkZGluZ0JveFBhdGgpKGN1cnZlcyk7XG4gICAgfVxufTtcblxudmFyIGNhbGN1bGF0ZUJhY2tncm91bmdQb3NpdGlvbmluZ0FyZWEgPSBleHBvcnRzLmNhbGN1bGF0ZUJhY2tncm91bmdQb3NpdGlvbmluZ0FyZWEgPSBmdW5jdGlvbiBjYWxjdWxhdGVCYWNrZ3JvdW5nUG9zaXRpb25pbmdBcmVhKGJhY2tncm91bmRPcmlnaW4sIGJvdW5kcywgcGFkZGluZywgYm9yZGVyKSB7XG4gICAgdmFyIHBhZGRpbmdCb3ggPSAoMCwgX0JvdW5kcy5jYWxjdWxhdGVQYWRkaW5nQm94KShib3VuZHMsIGJvcmRlcik7XG5cbiAgICBzd2l0Y2ggKGJhY2tncm91bmRPcmlnaW4pIHtcbiAgICAgICAgY2FzZSBCQUNLR1JPVU5EX09SSUdJTi5CT1JERVJfQk9YOlxuICAgICAgICAgICAgcmV0dXJuIGJvdW5kcztcbiAgICAgICAgY2FzZSBCQUNLR1JPVU5EX09SSUdJTi5DT05URU5UX0JPWDpcbiAgICAgICAgICAgIHZhciBwYWRkaW5nTGVmdCA9IHBhZGRpbmdbX3BhZGRpbmcuUEFERElOR19TSURFUy5MRUZUXS5nZXRBYnNvbHV0ZVZhbHVlKGJvdW5kcy53aWR0aCk7XG4gICAgICAgICAgICB2YXIgcGFkZGluZ1JpZ2h0ID0gcGFkZGluZ1tfcGFkZGluZy5QQURESU5HX1NJREVTLlJJR0hUXS5nZXRBYnNvbHV0ZVZhbHVlKGJvdW5kcy53aWR0aCk7XG4gICAgICAgICAgICB2YXIgcGFkZGluZ1RvcCA9IHBhZGRpbmdbX3BhZGRpbmcuUEFERElOR19TSURFUy5UT1BdLmdldEFic29sdXRlVmFsdWUoYm91bmRzLndpZHRoKTtcbiAgICAgICAgICAgIHZhciBwYWRkaW5nQm90dG9tID0gcGFkZGluZ1tfcGFkZGluZy5QQURESU5HX1NJREVTLkJPVFRPTV0uZ2V0QWJzb2x1dGVWYWx1ZShib3VuZHMud2lkdGgpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBfQm91bmRzLkJvdW5kcyhwYWRkaW5nQm94LmxlZnQgKyBwYWRkaW5nTGVmdCwgcGFkZGluZ0JveC50b3AgKyBwYWRkaW5nVG9wLCBwYWRkaW5nQm94LndpZHRoIC0gcGFkZGluZ0xlZnQgLSBwYWRkaW5nUmlnaHQsIHBhZGRpbmdCb3guaGVpZ2h0IC0gcGFkZGluZ1RvcCAtIHBhZGRpbmdCb3R0b20pO1xuICAgICAgICBjYXNlIEJBQ0tHUk9VTkRfT1JJR0lOLlBBRERJTkdfQk9YOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHBhZGRpbmdCb3g7XG4gICAgfVxufTtcblxudmFyIGNhbGN1bGF0ZUJhY2tncm91bmRQb3NpdGlvbiA9IGV4cG9ydHMuY2FsY3VsYXRlQmFja2dyb3VuZFBvc2l0aW9uID0gZnVuY3Rpb24gY2FsY3VsYXRlQmFja2dyb3VuZFBvc2l0aW9uKHBvc2l0aW9uLCBzaXplLCBib3VuZHMpIHtcbiAgICByZXR1cm4gbmV3IF9WZWN0b3IyLmRlZmF1bHQocG9zaXRpb25bMF0uZ2V0QWJzb2x1dGVWYWx1ZShib3VuZHMud2lkdGggLSBzaXplLndpZHRoKSwgcG9zaXRpb25bMV0uZ2V0QWJzb2x1dGVWYWx1ZShib3VuZHMuaGVpZ2h0IC0gc2l6ZS5oZWlnaHQpKTtcbn07XG5cbnZhciBjYWxjdWxhdGVCYWNrZ3JvdW5kUmVwZWF0UGF0aCA9IGV4cG9ydHMuY2FsY3VsYXRlQmFja2dyb3VuZFJlcGVhdFBhdGggPSBmdW5jdGlvbiBjYWxjdWxhdGVCYWNrZ3JvdW5kUmVwZWF0UGF0aChiYWNrZ3JvdW5kLCBwb3NpdGlvbiwgc2l6ZSwgYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYSwgYm91bmRzKSB7XG4gICAgdmFyIHJlcGVhdCA9IGJhY2tncm91bmQucmVwZWF0O1xuICAgIHN3aXRjaCAocmVwZWF0KSB7XG4gICAgICAgIGNhc2UgQkFDS0dST1VORF9SRVBFQVQuUkVQRUFUX1g6XG4gICAgICAgICAgICByZXR1cm4gW25ldyBfVmVjdG9yMi5kZWZhdWx0KE1hdGgucm91bmQoYm91bmRzLmxlZnQpLCBNYXRoLnJvdW5kKGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEudG9wICsgcG9zaXRpb24ueSkpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdChNYXRoLnJvdW5kKGJvdW5kcy5sZWZ0ICsgYm91bmRzLndpZHRoKSwgTWF0aC5yb3VuZChiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhLnRvcCArIHBvc2l0aW9uLnkpKSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoTWF0aC5yb3VuZChib3VuZHMubGVmdCArIGJvdW5kcy53aWR0aCksIE1hdGgucm91bmQoc2l6ZS5oZWlnaHQgKyBiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhLnRvcCArIHBvc2l0aW9uLnkpKSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoTWF0aC5yb3VuZChib3VuZHMubGVmdCksIE1hdGgucm91bmQoc2l6ZS5oZWlnaHQgKyBiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhLnRvcCArIHBvc2l0aW9uLnkpKV07XG4gICAgICAgIGNhc2UgQkFDS0dST1VORF9SRVBFQVQuUkVQRUFUX1k6XG4gICAgICAgICAgICByZXR1cm4gW25ldyBfVmVjdG9yMi5kZWZhdWx0KE1hdGgucm91bmQoYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYS5sZWZ0ICsgcG9zaXRpb24ueCksIE1hdGgucm91bmQoYm91bmRzLnRvcCkpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdChNYXRoLnJvdW5kKGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEubGVmdCArIHBvc2l0aW9uLnggKyBzaXplLndpZHRoKSwgTWF0aC5yb3VuZChib3VuZHMudG9wKSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KE1hdGgucm91bmQoYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYS5sZWZ0ICsgcG9zaXRpb24ueCArIHNpemUud2lkdGgpLCBNYXRoLnJvdW5kKGJvdW5kcy5oZWlnaHQgKyBib3VuZHMudG9wKSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KE1hdGgucm91bmQoYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYS5sZWZ0ICsgcG9zaXRpb24ueCksIE1hdGgucm91bmQoYm91bmRzLmhlaWdodCArIGJvdW5kcy50b3ApKV07XG4gICAgICAgIGNhc2UgQkFDS0dST1VORF9SRVBFQVQuTk9fUkVQRUFUOlxuICAgICAgICAgICAgcmV0dXJuIFtuZXcgX1ZlY3RvcjIuZGVmYXVsdChNYXRoLnJvdW5kKGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEubGVmdCArIHBvc2l0aW9uLngpLCBNYXRoLnJvdW5kKGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEudG9wICsgcG9zaXRpb24ueSkpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdChNYXRoLnJvdW5kKGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEubGVmdCArIHBvc2l0aW9uLnggKyBzaXplLndpZHRoKSwgTWF0aC5yb3VuZChiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhLnRvcCArIHBvc2l0aW9uLnkpKSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoTWF0aC5yb3VuZChiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhLmxlZnQgKyBwb3NpdGlvbi54ICsgc2l6ZS53aWR0aCksIE1hdGgucm91bmQoYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYS50b3AgKyBwb3NpdGlvbi55ICsgc2l6ZS5oZWlnaHQpKSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoTWF0aC5yb3VuZChiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhLmxlZnQgKyBwb3NpdGlvbi54KSwgTWF0aC5yb3VuZChiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhLnRvcCArIHBvc2l0aW9uLnkgKyBzaXplLmhlaWdodCkpXTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBbbmV3IF9WZWN0b3IyLmRlZmF1bHQoTWF0aC5yb3VuZChib3VuZHMubGVmdCksIE1hdGgucm91bmQoYm91bmRzLnRvcCkpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdChNYXRoLnJvdW5kKGJvdW5kcy5sZWZ0ICsgYm91bmRzLndpZHRoKSwgTWF0aC5yb3VuZChib3VuZHMudG9wKSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KE1hdGgucm91bmQoYm91bmRzLmxlZnQgKyBib3VuZHMud2lkdGgpLCBNYXRoLnJvdW5kKGJvdW5kcy5oZWlnaHQgKyBib3VuZHMudG9wKSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KE1hdGgucm91bmQoYm91bmRzLmxlZnQpLCBNYXRoLnJvdW5kKGJvdW5kcy5oZWlnaHQgKyBib3VuZHMudG9wKSldO1xuICAgIH1cbn07XG5cbnZhciBwYXJzZUJhY2tncm91bmQgPSBleHBvcnRzLnBhcnNlQmFja2dyb3VuZCA9IGZ1bmN0aW9uIHBhcnNlQmFja2dyb3VuZChzdHlsZSwgcmVzb3VyY2VMb2FkZXIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IG5ldyBfQ29sb3IyLmRlZmF1bHQoc3R5bGUuYmFja2dyb3VuZENvbG9yKSxcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBwYXJzZUJhY2tncm91bmRJbWFnZXMoc3R5bGUsIHJlc291cmNlTG9hZGVyKSxcbiAgICAgICAgYmFja2dyb3VuZENsaXA6IHBhcnNlQmFja2dyb3VuZENsaXAoc3R5bGUuYmFja2dyb3VuZENsaXApLFxuICAgICAgICBiYWNrZ3JvdW5kT3JpZ2luOiBwYXJzZUJhY2tncm91bmRPcmlnaW4oc3R5bGUuYmFja2dyb3VuZE9yaWdpbilcbiAgICB9O1xufTtcblxudmFyIHBhcnNlQmFja2dyb3VuZENsaXAgPSBmdW5jdGlvbiBwYXJzZUJhY2tncm91bmRDbGlwKGJhY2tncm91bmRDbGlwKSB7XG4gICAgc3dpdGNoIChiYWNrZ3JvdW5kQ2xpcCkge1xuICAgICAgICBjYXNlICdwYWRkaW5nLWJveCc6XG4gICAgICAgICAgICByZXR1cm4gQkFDS0dST1VORF9DTElQLlBBRERJTkdfQk9YO1xuICAgICAgICBjYXNlICdjb250ZW50LWJveCc6XG4gICAgICAgICAgICByZXR1cm4gQkFDS0dST1VORF9DTElQLkNPTlRFTlRfQk9YO1xuICAgIH1cbiAgICByZXR1cm4gQkFDS0dST1VORF9DTElQLkJPUkRFUl9CT1g7XG59O1xuXG52YXIgcGFyc2VCYWNrZ3JvdW5kT3JpZ2luID0gZnVuY3Rpb24gcGFyc2VCYWNrZ3JvdW5kT3JpZ2luKGJhY2tncm91bmRPcmlnaW4pIHtcbiAgICBzd2l0Y2ggKGJhY2tncm91bmRPcmlnaW4pIHtcbiAgICAgICAgY2FzZSAncGFkZGluZy1ib3gnOlxuICAgICAgICAgICAgcmV0dXJuIEJBQ0tHUk9VTkRfT1JJR0lOLlBBRERJTkdfQk9YO1xuICAgICAgICBjYXNlICdjb250ZW50LWJveCc6XG4gICAgICAgICAgICByZXR1cm4gQkFDS0dST1VORF9PUklHSU4uQ09OVEVOVF9CT1g7XG4gICAgfVxuICAgIHJldHVybiBCQUNLR1JPVU5EX09SSUdJTi5CT1JERVJfQk9YO1xufTtcblxudmFyIHBhcnNlQmFja2dyb3VuZFJlcGVhdCA9IGZ1bmN0aW9uIHBhcnNlQmFja2dyb3VuZFJlcGVhdChiYWNrZ3JvdW5kUmVwZWF0KSB7XG4gICAgc3dpdGNoIChiYWNrZ3JvdW5kUmVwZWF0LnRyaW0oKSkge1xuICAgICAgICBjYXNlICduby1yZXBlYXQnOlxuICAgICAgICAgICAgcmV0dXJuIEJBQ0tHUk9VTkRfUkVQRUFULk5PX1JFUEVBVDtcbiAgICAgICAgY2FzZSAncmVwZWF0LXgnOlxuICAgICAgICBjYXNlICdyZXBlYXQgbm8tcmVwZWF0JzpcbiAgICAgICAgICAgIHJldHVybiBCQUNLR1JPVU5EX1JFUEVBVC5SRVBFQVRfWDtcbiAgICAgICAgY2FzZSAncmVwZWF0LXknOlxuICAgICAgICBjYXNlICduby1yZXBlYXQgcmVwZWF0JzpcbiAgICAgICAgICAgIHJldHVybiBCQUNLR1JPVU5EX1JFUEVBVC5SRVBFQVRfWTtcbiAgICAgICAgY2FzZSAncmVwZWF0JzpcbiAgICAgICAgICAgIHJldHVybiBCQUNLR1JPVU5EX1JFUEVBVC5SRVBFQVQ7XG4gICAgfVxuXG4gICAgaWYgKHRydWUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCBiYWNrZ3JvdW5kLXJlcGVhdCB2YWx1ZSBcIicgKyBiYWNrZ3JvdW5kUmVwZWF0ICsgJ1wiJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIEJBQ0tHUk9VTkRfUkVQRUFULlJFUEVBVDtcbn07XG5cbnZhciBwYXJzZUJhY2tncm91bmRJbWFnZXMgPSBmdW5jdGlvbiBwYXJzZUJhY2tncm91bmRJbWFnZXMoc3R5bGUsIHJlc291cmNlTG9hZGVyKSB7XG4gICAgdmFyIHNvdXJjZXMgPSBwYXJzZUJhY2tncm91bmRJbWFnZShzdHlsZS5iYWNrZ3JvdW5kSW1hZ2UpLm1hcChmdW5jdGlvbiAoYmFja2dyb3VuZEltYWdlKSB7XG4gICAgICAgIGlmIChiYWNrZ3JvdW5kSW1hZ2UubWV0aG9kID09PSAndXJsJykge1xuICAgICAgICAgICAgdmFyIGtleSA9IHJlc291cmNlTG9hZGVyLmxvYWRJbWFnZShiYWNrZ3JvdW5kSW1hZ2UuYXJnc1swXSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2UuYXJncyA9IGtleSA/IFtrZXldIDogW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJhY2tncm91bmRJbWFnZTtcbiAgICB9KTtcbiAgICB2YXIgcG9zaXRpb25zID0gc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uLnNwbGl0KCcsJyk7XG4gICAgdmFyIHJlcGVhdHMgPSBzdHlsZS5iYWNrZ3JvdW5kUmVwZWF0LnNwbGl0KCcsJyk7XG4gICAgdmFyIHNpemVzID0gc3R5bGUuYmFja2dyb3VuZFNpemUuc3BsaXQoJywnKTtcblxuICAgIHJldHVybiBzb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlLCBpbmRleCkge1xuICAgICAgICB2YXIgc2l6ZSA9IChzaXplc1tpbmRleF0gfHwgQVVUTykudHJpbSgpLnNwbGl0KCcgJykubWFwKHBhcnNlQmFja2dyb3VuZFNpemUpO1xuICAgICAgICB2YXIgcG9zaXRpb24gPSAocG9zaXRpb25zW2luZGV4XSB8fCBBVVRPKS50cmltKCkuc3BsaXQoJyAnKS5tYXAocGFyc2VCYWNrZ291bmRQb3NpdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNvdXJjZTogc291cmNlLFxuICAgICAgICAgICAgcmVwZWF0OiBwYXJzZUJhY2tncm91bmRSZXBlYXQodHlwZW9mIHJlcGVhdHNbaW5kZXhdID09PSAnc3RyaW5nJyA/IHJlcGVhdHNbaW5kZXhdIDogcmVwZWF0c1swXSksXG4gICAgICAgICAgICBzaXplOiBzaXplLmxlbmd0aCA8IDIgPyBbc2l6ZVswXSwgQVVUT19TSVpFXSA6IFtzaXplWzBdLCBzaXplWzFdXSxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbi5sZW5ndGggPCAyID8gW3Bvc2l0aW9uWzBdLCBwb3NpdGlvblswXV0gOiBbcG9zaXRpb25bMF0sIHBvc2l0aW9uWzFdXVxuICAgICAgICB9O1xuICAgIH0pO1xufTtcblxudmFyIHBhcnNlQmFja2dyb3VuZFNpemUgPSBmdW5jdGlvbiBwYXJzZUJhY2tncm91bmRTaXplKHNpemUpIHtcbiAgICByZXR1cm4gc2l6ZSA9PT0gJ2F1dG8nID8gQVVUT19TSVpFIDogbmV3IEJhY2tncm91bmRTaXplKHNpemUpO1xufTtcblxudmFyIHBhcnNlQmFja2dvdW5kUG9zaXRpb24gPSBmdW5jdGlvbiBwYXJzZUJhY2tnb3VuZFBvc2l0aW9uKHBvc2l0aW9uKSB7XG4gICAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgICByZXR1cm4gbmV3IF9MZW5ndGgyLmRlZmF1bHQoJzEwMCUnKTtcbiAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgICAgICByZXR1cm4gbmV3IF9MZW5ndGgyLmRlZmF1bHQoJzAlJyk7XG4gICAgICAgIGNhc2UgJ2F1dG8nOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBfTGVuZ3RoMi5kZWZhdWx0KCcwJyk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgX0xlbmd0aDIuZGVmYXVsdChwb3NpdGlvbik7XG59O1xuXG52YXIgcGFyc2VCYWNrZ3JvdW5kSW1hZ2UgPSBleHBvcnRzLnBhcnNlQmFja2dyb3VuZEltYWdlID0gZnVuY3Rpb24gcGFyc2VCYWNrZ3JvdW5kSW1hZ2UoaW1hZ2UpIHtcbiAgICB2YXIgd2hpdGVzcGFjZSA9IC9eXFxzJC87XG4gICAgdmFyIHJlc3VsdHMgPSBbXTtcblxuICAgIHZhciBhcmdzID0gW107XG4gICAgdmFyIG1ldGhvZCA9ICcnO1xuICAgIHZhciBxdW90ZSA9IG51bGw7XG4gICAgdmFyIGRlZmluaXRpb24gPSAnJztcbiAgICB2YXIgbW9kZSA9IDA7XG4gICAgdmFyIG51bVBhcmVuID0gMDtcblxuICAgIHZhciBhcHBlbmRSZXN1bHQgPSBmdW5jdGlvbiBhcHBlbmRSZXN1bHQoKSB7XG4gICAgICAgIHZhciBwcmVmaXggPSAnJztcbiAgICAgICAgaWYgKG1ldGhvZCkge1xuICAgICAgICAgICAgaWYgKGRlZmluaXRpb24uc3Vic3RyKDAsIDEpID09PSAnXCInKSB7XG4gICAgICAgICAgICAgICAgZGVmaW5pdGlvbiA9IGRlZmluaXRpb24uc3Vic3RyKDEsIGRlZmluaXRpb24ubGVuZ3RoIC0gMik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChkZWZpbml0aW9uKSB7XG4gICAgICAgICAgICAgICAgYXJncy5wdXNoKGRlZmluaXRpb24udHJpbSgpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHByZWZpeF9pID0gbWV0aG9kLmluZGV4T2YoJy0nLCAxKSArIDE7XG4gICAgICAgICAgICBpZiAobWV0aG9kLnN1YnN0cigwLCAxKSA9PT0gJy0nICYmIHByZWZpeF9pID4gMCkge1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IG1ldGhvZC5zdWJzdHIoMCwgcHJlZml4X2kpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgbWV0aG9kID0gbWV0aG9kLnN1YnN0cihwcmVmaXhfaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtZXRob2QgPSBtZXRob2QudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGlmIChtZXRob2QgIT09ICdub25lJykge1xuICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgICAgICAgICAgICAgYXJnczogYXJnc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFyZ3MgPSBbXTtcbiAgICAgICAgbWV0aG9kID0gZGVmaW5pdGlvbiA9ICcnO1xuICAgIH07XG5cbiAgICBpbWFnZS5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgICBpZiAobW9kZSA9PT0gMCAmJiB3aGl0ZXNwYWNlLnRlc3QoYykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKGMpIHtcbiAgICAgICAgICAgIGNhc2UgJ1wiJzpcbiAgICAgICAgICAgICAgICBpZiAoIXF1b3RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1b3RlID0gYztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHF1b3RlID09PSBjKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1b3RlID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICcoJzpcbiAgICAgICAgICAgICAgICBpZiAocXVvdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtb2RlID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1vZGUgPSAxO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbnVtUGFyZW4rKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICcpJzpcbiAgICAgICAgICAgICAgICBpZiAocXVvdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtb2RlID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChudW1QYXJlbiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBlbmRSZXN1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bVBhcmVuLS07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJywnOlxuICAgICAgICAgICAgICAgIGlmIChxdW90ZSkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1vZGUgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYXBwZW5kUmVzdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1vZGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG51bVBhcmVuID09PSAwICYmICFtZXRob2QubWF0Y2goL151cmwkL2kpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzLnB1c2goZGVmaW5pdGlvbi50cmltKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvbiA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1vZGUgPT09IDApIHtcbiAgICAgICAgICAgIG1ldGhvZCArPSBjO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVmaW5pdGlvbiArPSBjO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBhcHBlbmRSZXN1bHQoKTtcbiAgICByZXR1cm4gcmVzdWx0cztcbn07XG5cbi8qKiovIH0pLFxuLyogNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgUEFUSCA9IGV4cG9ydHMuUEFUSCA9IHtcbiAgICBWRUNUT1I6IDAsXG4gICAgQkVaSUVSX0NVUlZFOiAxLFxuICAgIENJUkNMRTogMlxufTtcblxuLyoqKi8gfSksXG4vKiA3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9QYXRoID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFZlY3RvciA9IGZ1bmN0aW9uIFZlY3Rvcih4LCB5KSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFZlY3Rvcik7XG5cbiAgICB0aGlzLnR5cGUgPSBfUGF0aC5QQVRILlZFQ1RPUjtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgaWYgKHRydWUpIHtcbiAgICAgICAgaWYgKGlzTmFOKHgpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIHggdmFsdWUgZ2l2ZW4gZm9yIFZlY3RvcicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc05hTih5KSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCB5IHZhbHVlIGdpdmVuIGZvciBWZWN0b3InKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFZlY3RvcjtcblxuLyoqKi8gfSksXG4vKiA4ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucGFyc2VMaXN0U3R5bGUgPSBleHBvcnRzLnBhcnNlTGlzdFN0eWxlVHlwZSA9IGV4cG9ydHMuTElTVF9TVFlMRV9UWVBFID0gZXhwb3J0cy5MSVNUX1NUWUxFX1BPU0lUSU9OID0gdW5kZWZpbmVkO1xuXG52YXIgX2JhY2tncm91bmQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG52YXIgTElTVF9TVFlMRV9QT1NJVElPTiA9IGV4cG9ydHMuTElTVF9TVFlMRV9QT1NJVElPTiA9IHtcbiAgICBJTlNJREU6IDAsXG4gICAgT1VUU0lERTogMVxufTtcblxudmFyIExJU1RfU1RZTEVfVFlQRSA9IGV4cG9ydHMuTElTVF9TVFlMRV9UWVBFID0ge1xuICAgIE5PTkU6IC0xLFxuICAgIERJU0M6IDAsXG4gICAgQ0lSQ0xFOiAxLFxuICAgIFNRVUFSRTogMixcbiAgICBERUNJTUFMOiAzLFxuICAgIENKS19ERUNJTUFMOiA0LFxuICAgIERFQ0lNQUxfTEVBRElOR19aRVJPOiA1LFxuICAgIExPV0VSX1JPTUFOOiA2LFxuICAgIFVQUEVSX1JPTUFOOiA3LFxuICAgIExPV0VSX0dSRUVLOiA4LFxuICAgIExPV0VSX0FMUEhBOiA5LFxuICAgIFVQUEVSX0FMUEhBOiAxMCxcbiAgICBBUkFCSUNfSU5ESUM6IDExLFxuICAgIEFSTUVOSUFOOiAxMixcbiAgICBCRU5HQUxJOiAxMyxcbiAgICBDQU1CT0RJQU46IDE0LFxuICAgIENKS19FQVJUSExZX0JSQU5DSDogMTUsXG4gICAgQ0pLX0hFQVZFTkxZX1NURU06IDE2LFxuICAgIENKS19JREVPR1JBUEhJQzogMTcsXG4gICAgREVWQU5BR0FSSTogMTgsXG4gICAgRVRISU9QSUNfTlVNRVJJQzogMTksXG4gICAgR0VPUkdJQU46IDIwLFxuICAgIEdVSkFSQVRJOiAyMSxcbiAgICBHVVJNVUtISTogMjIsXG4gICAgSEVCUkVXOiAyMixcbiAgICBISVJBR0FOQTogMjMsXG4gICAgSElSQUdBTkFfSVJPSEE6IDI0LFxuICAgIEpBUEFORVNFX0ZPUk1BTDogMjUsXG4gICAgSkFQQU5FU0VfSU5GT1JNQUw6IDI2LFxuICAgIEtBTk5BREE6IDI3LFxuICAgIEtBVEFLQU5BOiAyOCxcbiAgICBLQVRBS0FOQV9JUk9IQTogMjksXG4gICAgS0hNRVI6IDMwLFxuICAgIEtPUkVBTl9IQU5HVUxfRk9STUFMOiAzMSxcbiAgICBLT1JFQU5fSEFOSkFfRk9STUFMOiAzMixcbiAgICBLT1JFQU5fSEFOSkFfSU5GT1JNQUw6IDMzLFxuICAgIExBTzogMzQsXG4gICAgTE9XRVJfQVJNRU5JQU46IDM1LFxuICAgIE1BTEFZQUxBTTogMzYsXG4gICAgTU9OR09MSUFOOiAzNyxcbiAgICBNWUFOTUFSOiAzOCxcbiAgICBPUklZQTogMzksXG4gICAgUEVSU0lBTjogNDAsXG4gICAgU0lNUF9DSElORVNFX0ZPUk1BTDogNDEsXG4gICAgU0lNUF9DSElORVNFX0lORk9STUFMOiA0MixcbiAgICBUQU1JTDogNDMsXG4gICAgVEVMVUdVOiA0NCxcbiAgICBUSEFJOiA0NSxcbiAgICBUSUJFVEFOOiA0NixcbiAgICBUUkFEX0NISU5FU0VfRk9STUFMOiA0NyxcbiAgICBUUkFEX0NISU5FU0VfSU5GT1JNQUw6IDQ4LFxuICAgIFVQUEVSX0FSTUVOSUFOOiA0OSxcbiAgICBESVNDTE9TVVJFX09QRU46IDUwLFxuICAgIERJU0NMT1NVUkVfQ0xPU0VEOiA1MVxufTtcblxudmFyIHBhcnNlTGlzdFN0eWxlVHlwZSA9IGV4cG9ydHMucGFyc2VMaXN0U3R5bGVUeXBlID0gZnVuY3Rpb24gcGFyc2VMaXN0U3R5bGVUeXBlKHR5cGUpIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnZGlzYyc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkRJU0M7XG4gICAgICAgIGNhc2UgJ2NpcmNsZSc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkNJUkNMRTtcbiAgICAgICAgY2FzZSAnc3F1YXJlJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuU1FVQVJFO1xuICAgICAgICBjYXNlICdkZWNpbWFsJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuREVDSU1BTDtcbiAgICAgICAgY2FzZSAnY2prLWRlY2ltYWwnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5DSktfREVDSU1BTDtcbiAgICAgICAgY2FzZSAnZGVjaW1hbC1sZWFkaW5nLXplcm8nOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5ERUNJTUFMX0xFQURJTkdfWkVSTztcbiAgICAgICAgY2FzZSAnbG93ZXItcm9tYW4nOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5MT1dFUl9ST01BTjtcbiAgICAgICAgY2FzZSAndXBwZXItcm9tYW4nOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5VUFBFUl9ST01BTjtcbiAgICAgICAgY2FzZSAnbG93ZXItZ3JlZWsnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5MT1dFUl9HUkVFSztcbiAgICAgICAgY2FzZSAnbG93ZXItYWxwaGEnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5MT1dFUl9BTFBIQTtcbiAgICAgICAgY2FzZSAndXBwZXItYWxwaGEnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5VUFBFUl9BTFBIQTtcbiAgICAgICAgY2FzZSAnYXJhYmljLWluZGljJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuQVJBQklDX0lORElDO1xuICAgICAgICBjYXNlICdhcm1lbmlhbic6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkFSTUVOSUFOO1xuICAgICAgICBjYXNlICdiZW5nYWxpJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuQkVOR0FMSTtcbiAgICAgICAgY2FzZSAnY2FtYm9kaWFuJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuQ0FNQk9ESUFOO1xuICAgICAgICBjYXNlICdjamstZWFydGhseS1icmFuY2gnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5DSktfRUFSVEhMWV9CUkFOQ0g7XG4gICAgICAgIGNhc2UgJ2Nqay1oZWF2ZW5seS1zdGVtJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuQ0pLX0hFQVZFTkxZX1NURU07XG4gICAgICAgIGNhc2UgJ2Nqay1pZGVvZ3JhcGhpYyc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkNKS19JREVPR1JBUEhJQztcbiAgICAgICAgY2FzZSAnZGV2YW5hZ2FyaSc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkRFVkFOQUdBUkk7XG4gICAgICAgIGNhc2UgJ2V0aGlvcGljLW51bWVyaWMnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5FVEhJT1BJQ19OVU1FUklDO1xuICAgICAgICBjYXNlICdnZW9yZ2lhbic6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkdFT1JHSUFOO1xuICAgICAgICBjYXNlICdndWphcmF0aSc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkdVSkFSQVRJO1xuICAgICAgICBjYXNlICdndXJtdWtoaSc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkdVUk1VS0hJO1xuICAgICAgICBjYXNlICdoZWJyZXcnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5IRUJSRVc7XG4gICAgICAgIGNhc2UgJ2hpcmFnYW5hJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuSElSQUdBTkE7XG4gICAgICAgIGNhc2UgJ2hpcmFnYW5hLWlyb2hhJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuSElSQUdBTkFfSVJPSEE7XG4gICAgICAgIGNhc2UgJ2phcGFuZXNlLWZvcm1hbCc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkpBUEFORVNFX0ZPUk1BTDtcbiAgICAgICAgY2FzZSAnamFwYW5lc2UtaW5mb3JtYWwnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5KQVBBTkVTRV9JTkZPUk1BTDtcbiAgICAgICAgY2FzZSAna2FubmFkYSc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLktBTk5BREE7XG4gICAgICAgIGNhc2UgJ2thdGFrYW5hJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuS0FUQUtBTkE7XG4gICAgICAgIGNhc2UgJ2thdGFrYW5hLWlyb2hhJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuS0FUQUtBTkFfSVJPSEE7XG4gICAgICAgIGNhc2UgJ2tobWVyJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuS0hNRVI7XG4gICAgICAgIGNhc2UgJ2tvcmVhbi1oYW5ndWwtZm9ybWFsJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuS09SRUFOX0hBTkdVTF9GT1JNQUw7XG4gICAgICAgIGNhc2UgJ2tvcmVhbi1oYW5qYS1mb3JtYWwnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5LT1JFQU5fSEFOSkFfRk9STUFMO1xuICAgICAgICBjYXNlICdrb3JlYW4taGFuamEtaW5mb3JtYWwnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5LT1JFQU5fSEFOSkFfSU5GT1JNQUw7XG4gICAgICAgIGNhc2UgJ2xhbyc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkxBTztcbiAgICAgICAgY2FzZSAnbG93ZXItYXJtZW5pYW4nOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5MT1dFUl9BUk1FTklBTjtcbiAgICAgICAgY2FzZSAnbWFsYXlhbGFtJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuTUFMQVlBTEFNO1xuICAgICAgICBjYXNlICdtb25nb2xpYW4nOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5NT05HT0xJQU47XG4gICAgICAgIGNhc2UgJ215YW5tYXInOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5NWUFOTUFSO1xuICAgICAgICBjYXNlICdvcml5YSc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLk9SSVlBO1xuICAgICAgICBjYXNlICdwZXJzaWFuJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuUEVSU0lBTjtcbiAgICAgICAgY2FzZSAnc2ltcC1jaGluZXNlLWZvcm1hbCc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLlNJTVBfQ0hJTkVTRV9GT1JNQUw7XG4gICAgICAgIGNhc2UgJ3NpbXAtY2hpbmVzZS1pbmZvcm1hbCc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLlNJTVBfQ0hJTkVTRV9JTkZPUk1BTDtcbiAgICAgICAgY2FzZSAndGFtaWwnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5UQU1JTDtcbiAgICAgICAgY2FzZSAndGVsdWd1JzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuVEVMVUdVO1xuICAgICAgICBjYXNlICd0aGFpJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuVEhBSTtcbiAgICAgICAgY2FzZSAndGliZXRhbic6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLlRJQkVUQU47XG4gICAgICAgIGNhc2UgJ3RyYWQtY2hpbmVzZS1mb3JtYWwnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5UUkFEX0NISU5FU0VfRk9STUFMO1xuICAgICAgICBjYXNlICd0cmFkLWNoaW5lc2UtaW5mb3JtYWwnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5UUkFEX0NISU5FU0VfSU5GT1JNQUw7XG4gICAgICAgIGNhc2UgJ3VwcGVyLWFybWVuaWFuJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuVVBQRVJfQVJNRU5JQU47XG4gICAgICAgIGNhc2UgJ2Rpc2Nsb3N1cmUtb3Blbic6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkRJU0NMT1NVUkVfT1BFTjtcbiAgICAgICAgY2FzZSAnZGlzY2xvc3VyZS1jbG9zZWQnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5ESVNDTE9TVVJFX0NMT1NFRDtcbiAgICAgICAgY2FzZSAnbm9uZSc6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLk5PTkU7XG4gICAgfVxufTtcblxudmFyIHBhcnNlTGlzdFN0eWxlID0gZXhwb3J0cy5wYXJzZUxpc3RTdHlsZSA9IGZ1bmN0aW9uIHBhcnNlTGlzdFN0eWxlKHN0eWxlKSB7XG4gICAgdmFyIGxpc3RTdHlsZUltYWdlID0gKDAsIF9iYWNrZ3JvdW5kLnBhcnNlQmFja2dyb3VuZEltYWdlKShzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdsaXN0LXN0eWxlLWltYWdlJykpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGxpc3RTdHlsZVR5cGU6IHBhcnNlTGlzdFN0eWxlVHlwZShzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdsaXN0LXN0eWxlLXR5cGUnKSksXG4gICAgICAgIGxpc3RTdHlsZUltYWdlOiBsaXN0U3R5bGVJbWFnZS5sZW5ndGggPyBsaXN0U3R5bGVJbWFnZVswXSA6IG51bGwsXG4gICAgICAgIGxpc3RTdHlsZVBvc2l0aW9uOiBwYXJzZUxpc3RTdHlsZVBvc2l0aW9uKHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2xpc3Qtc3R5bGUtcG9zaXRpb24nKSlcbiAgICB9O1xufTtcblxudmFyIHBhcnNlTGlzdFN0eWxlUG9zaXRpb24gPSBmdW5jdGlvbiBwYXJzZUxpc3RTdHlsZVBvc2l0aW9uKHBvc2l0aW9uKSB7XG4gICAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgICAgICBjYXNlICdpbnNpZGUnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfUE9TSVRJT04uSU5TSURFO1xuICAgICAgICBjYXNlICdvdXRzaWRlJzpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1BPU0lUSU9OLk9VVFNJREU7XG4gICAgfVxufTtcblxuLyoqKi8gfSksXG4vKiA5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF90ZXh0VHJhbnNmb3JtID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMCk7XG5cbnZhciBfVGV4dEJvdW5kcyA9IF9fd2VicGFja19yZXF1aXJlX18oMjIpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgVGV4dENvbnRhaW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUZXh0Q29udGFpbmVyKHRleHQsIHBhcmVudCwgYm91bmRzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUZXh0Q29udGFpbmVyKTtcblxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5ib3VuZHMgPSBib3VuZHM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFRleHRDb250YWluZXIsIG51bGwsIFt7XG4gICAgICAgIGtleTogJ2Zyb21UZXh0Tm9kZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBmcm9tVGV4dE5vZGUobm9kZSwgcGFyZW50KSB7XG4gICAgICAgICAgICB2YXIgdGV4dCA9IHRyYW5zZm9ybShub2RlLmRhdGEsIHBhcmVudC5zdHlsZS50ZXh0VHJhbnNmb3JtKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVGV4dENvbnRhaW5lcih0ZXh0LCBwYXJlbnQsICgwLCBfVGV4dEJvdW5kcy5wYXJzZVRleHRCb3VuZHMpKHRleHQsIHBhcmVudCwgbm9kZSkpO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFRleHRDb250YWluZXI7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFRleHRDb250YWluZXI7XG5cblxudmFyIENBUElUQUxJWkUgPSAvKF58XFxzfDp8LXxcXCh8XFwpKShbYS16XSkvZztcblxudmFyIHRyYW5zZm9ybSA9IGZ1bmN0aW9uIHRyYW5zZm9ybSh0ZXh0LCBfdHJhbnNmb3JtKSB7XG4gICAgc3dpdGNoIChfdHJhbnNmb3JtKSB7XG4gICAgICAgIGNhc2UgX3RleHRUcmFuc2Zvcm0uVEVYVF9UUkFOU0ZPUk0uTE9XRVJDQVNFOlxuICAgICAgICAgICAgcmV0dXJuIHRleHQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY2FzZSBfdGV4dFRyYW5zZm9ybS5URVhUX1RSQU5TRk9STS5DQVBJVEFMSVpFOlxuICAgICAgICAgICAgcmV0dXJuIHRleHQucmVwbGFjZShDQVBJVEFMSVpFLCBjYXBpdGFsaXplKTtcbiAgICAgICAgY2FzZSBfdGV4dFRyYW5zZm9ybS5URVhUX1RSQU5TRk9STS5VUFBFUkNBU0U6XG4gICAgICAgICAgICByZXR1cm4gdGV4dC50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgfVxufTtcblxuZnVuY3Rpb24gY2FwaXRhbGl6ZShtLCBwMSwgcDIpIHtcbiAgICBpZiAobS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiBwMSArIHAyLnRvVXBwZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG07XG59XG5cbi8qKiovIH0pLFxuLyogMTAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX0ZvcmVpZ25PYmplY3RSZW5kZXJlciA9IF9fd2VicGFja19yZXF1aXJlX18oMjMpO1xuXG52YXIgdGVzdFJhbmdlQm91bmRzID0gZnVuY3Rpb24gdGVzdFJhbmdlQm91bmRzKGRvY3VtZW50KSB7XG4gICAgdmFyIFRFU1RfSEVJR0hUID0gMTIzO1xuXG4gICAgaWYgKGRvY3VtZW50LmNyZWF0ZVJhbmdlKSB7XG4gICAgICAgIHZhciByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgICAgIGlmIChyYW5nZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QpIHtcbiAgICAgICAgICAgIHZhciB0ZXN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JvdW5kdGVzdCcpO1xuICAgICAgICAgICAgdGVzdEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gVEVTVF9IRUlHSFQgKyAncHgnO1xuICAgICAgICAgICAgdGVzdEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRlc3RFbGVtZW50KTtcblxuICAgICAgICAgICAgcmFuZ2Uuc2VsZWN0Tm9kZSh0ZXN0RWxlbWVudCk7XG4gICAgICAgICAgICB2YXIgcmFuZ2VCb3VuZHMgPSByYW5nZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIHZhciByYW5nZUhlaWdodCA9IE1hdGgucm91bmQocmFuZ2VCb3VuZHMuaGVpZ2h0KTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGVzdEVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKHJhbmdlSGVpZ2h0ID09PSBURVNUX0hFSUdIVCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxuLy8gaU9TIDEwLjMgdGFpbnRzIGNhbnZhcyB3aXRoIGJhc2U2NCBpbWFnZXMgdW5sZXNzIGNyb3NzT3JpZ2luID0gJ2Fub255bW91cydcbnZhciB0ZXN0QmFzZTY0ID0gZnVuY3Rpb24gdGVzdEJhc2U2NChkb2N1bWVudCwgc3JjKSB7XG4gICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgLy8gU2luZ2xlIHBpeGVsIGJhc2U2NCBpbWFnZSByZW5kZXJzIGZpbmUgb24gaU9TIDEwLjM/Pz9cbiAgICAgICAgaW1nLnNyYyA9IHNyYztcblxuICAgICAgICB2YXIgb25sb2FkID0gZnVuY3Rpb24gb25sb2FkKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgMCwgMCk7XG4gICAgICAgICAgICAgICAgY2FudmFzLnRvRGF0YVVSTCgpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaW1nLm9ubG9hZCA9IG9ubG9hZDtcbiAgICAgICAgaW1nLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGltZy5jb21wbGV0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgb25sb2FkKCk7XG4gICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG52YXIgdGVzdENPUlMgPSBmdW5jdGlvbiB0ZXN0Q09SUygpIHtcbiAgICByZXR1cm4gdHlwZW9mIG5ldyBJbWFnZSgpLmNyb3NzT3JpZ2luICE9PSAndW5kZWZpbmVkJztcbn07XG5cbnZhciB0ZXN0UmVzcG9uc2VUeXBlID0gZnVuY3Rpb24gdGVzdFJlc3BvbnNlVHlwZSgpIHtcbiAgICByZXR1cm4gdHlwZW9mIG5ldyBYTUxIdHRwUmVxdWVzdCgpLnJlc3BvbnNlVHlwZSA9PT0gJ3N0cmluZyc7XG59O1xuXG52YXIgdGVzdFNWRyA9IGZ1bmN0aW9uIHRlc3RTVkcoZG9jdW1lbnQpIHtcbiAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBpbWcuc3JjID0gJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVxcJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFwnPjwvc3ZnPic7XG5cbiAgICB0cnkge1xuICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgMCwgMCk7XG4gICAgICAgIGNhbnZhcy50b0RhdGFVUkwoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59O1xuXG52YXIgaXNHcmVlblBpeGVsID0gZnVuY3Rpb24gaXNHcmVlblBpeGVsKGRhdGEpIHtcbiAgICByZXR1cm4gZGF0YVswXSA9PT0gMCAmJiBkYXRhWzFdID09PSAyNTUgJiYgZGF0YVsyXSA9PT0gMCAmJiBkYXRhWzNdID09PSAyNTU7XG59O1xuXG52YXIgdGVzdEZvcmVpZ25PYmplY3QgPSBmdW5jdGlvbiB0ZXN0Rm9yZWlnbk9iamVjdChkb2N1bWVudCkge1xuICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB2YXIgc2l6ZSA9IDEwMDtcbiAgICBjYW52YXMud2lkdGggPSBzaXplO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBzaXplO1xuICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJ3JnYigwLCAyNTUsIDApJztcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgc2l6ZSwgc2l6ZSk7XG5cbiAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgdmFyIGdyZWVuSW1hZ2VTcmMgPSBjYW52YXMudG9EYXRhVVJMKCk7XG4gICAgaW1nLnNyYyA9IGdyZWVuSW1hZ2VTcmM7XG4gICAgdmFyIHN2ZyA9ICgwLCBfRm9yZWlnbk9iamVjdFJlbmRlcmVyLmNyZWF0ZUZvcmVpZ25PYmplY3RTVkcpKHNpemUsIHNpemUsIDAsIDAsIGltZyk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICdyZWQnO1xuICAgIGN0eC5maWxsUmVjdCgwLCAwLCBzaXplLCBzaXplKTtcblxuICAgIHJldHVybiAoMCwgX0ZvcmVpZ25PYmplY3RSZW5kZXJlci5sb2FkU2VyaWFsaXplZFNWRykoc3ZnKS50aGVuKGZ1bmN0aW9uIChpbWcpIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIDAsIDApO1xuICAgICAgICB2YXIgZGF0YSA9IGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgc2l6ZSwgc2l6ZSkuZGF0YTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZWQnO1xuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgc2l6ZSwgc2l6ZSk7XG5cbiAgICAgICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKCcgKyBncmVlbkltYWdlU3JjICsgJyknO1xuICAgICAgICBub2RlLnN0eWxlLmhlaWdodCA9IHNpemUgKyAncHgnO1xuICAgICAgICAvLyBGaXJlZm94IDU1IGRvZXMgbm90IHJlbmRlciBpbmxpbmUgPGltZyAvPiB0YWdzXG4gICAgICAgIHJldHVybiBpc0dyZWVuUGl4ZWwoZGF0YSkgPyAoMCwgX0ZvcmVpZ25PYmplY3RSZW5kZXJlci5sb2FkU2VyaWFsaXplZFNWRykoKDAsIF9Gb3JlaWduT2JqZWN0UmVuZGVyZXIuY3JlYXRlRm9yZWlnbk9iamVjdFNWRykoc2l6ZSwgc2l6ZSwgMCwgMCwgbm9kZSkpIDogUHJvbWlzZS5yZWplY3QoZmFsc2UpO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGltZykge1xuICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgMCwgMCk7XG4gICAgICAgIC8vIEVkZ2UgZG9lcyBub3QgcmVuZGVyIGJhY2tncm91bmQtaW1hZ2VzXG4gICAgICAgIHJldHVybiBpc0dyZWVuUGl4ZWwoY3R4LmdldEltYWdlRGF0YSgwLCAwLCBzaXplLCBzaXplKS5kYXRhKTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG59O1xuXG52YXIgRkVBVFVSRVMgPSB7XG4gICAgLy8gJEZsb3dGaXhNZSAtIGdldC9zZXQgcHJvcGVydGllcyBub3QgeWV0IHN1cHBvcnRlZFxuICAgIGdldCBTVVBQT1JUX1JBTkdFX0JPVU5EUygpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICAgIHZhciB2YWx1ZSA9IHRlc3RSYW5nZUJvdW5kcyhkb2N1bWVudCk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGRUFUVVJFUywgJ1NVUFBPUlRfUkFOR0VfQk9VTkRTJywgeyB2YWx1ZTogdmFsdWUgfSk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxuICAgIC8vICRGbG93Rml4TWUgLSBnZXQvc2V0IHByb3BlcnRpZXMgbm90IHlldCBzdXBwb3J0ZWRcbiAgICBnZXQgU1VQUE9SVF9TVkdfRFJBV0lORygpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICAgIHZhciB2YWx1ZSA9IHRlc3RTVkcoZG9jdW1lbnQpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRkVBVFVSRVMsICdTVVBQT1JUX1NWR19EUkFXSU5HJywgeyB2YWx1ZTogdmFsdWUgfSk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxuICAgIC8vICRGbG93Rml4TWUgLSBnZXQvc2V0IHByb3BlcnRpZXMgbm90IHlldCBzdXBwb3J0ZWRcbiAgICBnZXQgU1VQUE9SVF9CQVNFNjRfRFJBV0lORygpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgICAgICB2YXIgX3ZhbHVlID0gdGVzdEJhc2U2NChkb2N1bWVudCwgc3JjKTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGRUFUVVJFUywgJ1NVUFBPUlRfQkFTRTY0X0RSQVdJTkcnLCB7IHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92YWx1ZTtcbiAgICAgICAgICAgICAgICB9IH0pO1xuICAgICAgICAgICAgcmV0dXJuIF92YWx1ZTtcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIC8vICRGbG93Rml4TWUgLSBnZXQvc2V0IHByb3BlcnRpZXMgbm90IHlldCBzdXBwb3J0ZWRcbiAgICBnZXQgU1VQUE9SVF9GT1JFSUdOT0JKRUNUX0RSQVdJTkcoKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcblxuICAgICAgICB2YXIgdmFsdWUgPSB0eXBlb2YgQXJyYXkuZnJvbSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygd2luZG93LmZldGNoID09PSAnZnVuY3Rpb24nID8gdGVzdEZvcmVpZ25PYmplY3QoZG9jdW1lbnQpIDogUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZFQVRVUkVTLCAnU1VQUE9SVF9GT1JFSUdOT0JKRUNUX0RSQVdJTkcnLCB7IHZhbHVlOiB2YWx1ZSB9KTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG4gICAgLy8gJEZsb3dGaXhNZSAtIGdldC9zZXQgcHJvcGVydGllcyBub3QgeWV0IHN1cHBvcnRlZFxuICAgIGdldCBTVVBQT1JUX0NPUlNfSU1BR0VTKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG5cbiAgICAgICAgdmFyIHZhbHVlID0gdGVzdENPUlMoKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZFQVRVUkVTLCAnU1VQUE9SVF9DT1JTX0lNQUdFUycsIHsgdmFsdWU6IHZhbHVlIH0pO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSxcbiAgICAvLyAkRmxvd0ZpeE1lIC0gZ2V0L3NldCBwcm9wZXJ0aWVzIG5vdCB5ZXQgc3VwcG9ydGVkXG4gICAgZ2V0IFNVUFBPUlRfUkVTUE9OU0VfVFlQRSgpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICAgIHZhciB2YWx1ZSA9IHRlc3RSZXNwb25zZVR5cGUoKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZFQVRVUkVTLCAnU1VQUE9SVF9SRVNQT05TRV9UWVBFJywgeyB2YWx1ZTogdmFsdWUgfSk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxuICAgIC8vICRGbG93Rml4TWUgLSBnZXQvc2V0IHByb3BlcnRpZXMgbm90IHlldCBzdXBwb3J0ZWRcbiAgICBnZXQgU1VQUE9SVF9DT1JTX1hIUigpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICAgIHZhciB2YWx1ZSA9ICd3aXRoQ3JlZGVudGlhbHMnIGluIG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRkVBVFVSRVMsICdTVVBQT1JUX0NPUlNfWEhSJywgeyB2YWx1ZTogdmFsdWUgfSk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBGRUFUVVJFUztcblxuLyoqKi8gfSksXG4vKiAxMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnBhcnNlVGV4dERlY29yYXRpb24gPSBleHBvcnRzLlRFWFRfREVDT1JBVElPTl9MSU5FID0gZXhwb3J0cy5URVhUX0RFQ09SQVRJT04gPSBleHBvcnRzLlRFWFRfREVDT1JBVElPTl9TVFlMRSA9IHVuZGVmaW5lZDtcblxudmFyIF9Db2xvciA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBfQ29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29sb3IpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgVEVYVF9ERUNPUkFUSU9OX1NUWUxFID0gZXhwb3J0cy5URVhUX0RFQ09SQVRJT05fU1RZTEUgPSB7XG4gICAgU09MSUQ6IDAsXG4gICAgRE9VQkxFOiAxLFxuICAgIERPVFRFRDogMixcbiAgICBEQVNIRUQ6IDMsXG4gICAgV0FWWTogNFxufTtcblxudmFyIFRFWFRfREVDT1JBVElPTiA9IGV4cG9ydHMuVEVYVF9ERUNPUkFUSU9OID0ge1xuICAgIE5PTkU6IG51bGxcbn07XG5cbnZhciBURVhUX0RFQ09SQVRJT05fTElORSA9IGV4cG9ydHMuVEVYVF9ERUNPUkFUSU9OX0xJTkUgPSB7XG4gICAgVU5ERVJMSU5FOiAxLFxuICAgIE9WRVJMSU5FOiAyLFxuICAgIExJTkVfVEhST1VHSDogMyxcbiAgICBCTElOSzogNFxufTtcblxudmFyIHBhcnNlTGluZSA9IGZ1bmN0aW9uIHBhcnNlTGluZShsaW5lKSB7XG4gICAgc3dpdGNoIChsaW5lKSB7XG4gICAgICAgIGNhc2UgJ3VuZGVybGluZSc6XG4gICAgICAgICAgICByZXR1cm4gVEVYVF9ERUNPUkFUSU9OX0xJTkUuVU5ERVJMSU5FO1xuICAgICAgICBjYXNlICdvdmVybGluZSc6XG4gICAgICAgICAgICByZXR1cm4gVEVYVF9ERUNPUkFUSU9OX0xJTkUuT1ZFUkxJTkU7XG4gICAgICAgIGNhc2UgJ2xpbmUtdGhyb3VnaCc6XG4gICAgICAgICAgICByZXR1cm4gVEVYVF9ERUNPUkFUSU9OX0xJTkUuTElORV9USFJPVUdIO1xuICAgIH1cbiAgICByZXR1cm4gVEVYVF9ERUNPUkFUSU9OX0xJTkUuQkxJTks7XG59O1xuXG52YXIgcGFyc2VUZXh0RGVjb3JhdGlvbkxpbmUgPSBmdW5jdGlvbiBwYXJzZVRleHREZWNvcmF0aW9uTGluZShsaW5lKSB7XG4gICAgaWYgKGxpbmUgPT09ICdub25lJykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gbGluZS5zcGxpdCgnICcpLm1hcChwYXJzZUxpbmUpO1xufTtcblxudmFyIHBhcnNlVGV4dERlY29yYXRpb25TdHlsZSA9IGZ1bmN0aW9uIHBhcnNlVGV4dERlY29yYXRpb25TdHlsZShzdHlsZSkge1xuICAgIHN3aXRjaCAoc3R5bGUpIHtcbiAgICAgICAgY2FzZSAnZG91YmxlJzpcbiAgICAgICAgICAgIHJldHVybiBURVhUX0RFQ09SQVRJT05fU1RZTEUuRE9VQkxFO1xuICAgICAgICBjYXNlICdkb3R0ZWQnOlxuICAgICAgICAgICAgcmV0dXJuIFRFWFRfREVDT1JBVElPTl9TVFlMRS5ET1RURUQ7XG4gICAgICAgIGNhc2UgJ2Rhc2hlZCc6XG4gICAgICAgICAgICByZXR1cm4gVEVYVF9ERUNPUkFUSU9OX1NUWUxFLkRBU0hFRDtcbiAgICAgICAgY2FzZSAnd2F2eSc6XG4gICAgICAgICAgICByZXR1cm4gVEVYVF9ERUNPUkFUSU9OX1NUWUxFLldBVlk7XG4gICAgfVxuICAgIHJldHVybiBURVhUX0RFQ09SQVRJT05fU1RZTEUuU09MSUQ7XG59O1xuXG52YXIgcGFyc2VUZXh0RGVjb3JhdGlvbiA9IGV4cG9ydHMucGFyc2VUZXh0RGVjb3JhdGlvbiA9IGZ1bmN0aW9uIHBhcnNlVGV4dERlY29yYXRpb24oc3R5bGUpIHtcbiAgICB2YXIgdGV4dERlY29yYXRpb25MaW5lID0gcGFyc2VUZXh0RGVjb3JhdGlvbkxpbmUoc3R5bGUudGV4dERlY29yYXRpb25MaW5lID8gc3R5bGUudGV4dERlY29yYXRpb25MaW5lIDogc3R5bGUudGV4dERlY29yYXRpb24pO1xuICAgIGlmICh0ZXh0RGVjb3JhdGlvbkxpbmUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIFRFWFRfREVDT1JBVElPTi5OT05FO1xuICAgIH1cblxuICAgIHZhciB0ZXh0RGVjb3JhdGlvbkNvbG9yID0gc3R5bGUudGV4dERlY29yYXRpb25Db2xvciA/IG5ldyBfQ29sb3IyLmRlZmF1bHQoc3R5bGUudGV4dERlY29yYXRpb25Db2xvcikgOiBudWxsO1xuICAgIHZhciB0ZXh0RGVjb3JhdGlvblN0eWxlID0gcGFyc2VUZXh0RGVjb3JhdGlvblN0eWxlKHN0eWxlLnRleHREZWNvcmF0aW9uU3R5bGUpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGV4dERlY29yYXRpb25MaW5lOiB0ZXh0RGVjb3JhdGlvbkxpbmUsXG4gICAgICAgIHRleHREZWNvcmF0aW9uQ29sb3I6IHRleHREZWNvcmF0aW9uQ29sb3IsXG4gICAgICAgIHRleHREZWNvcmF0aW9uU3R5bGU6IHRleHREZWNvcmF0aW9uU3R5bGVcbiAgICB9O1xufTtcblxuLyoqKi8gfSksXG4vKiAxMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnBhcnNlQm9yZGVyID0gZXhwb3J0cy5CT1JERVJfU0lERVMgPSBleHBvcnRzLkJPUkRFUl9TVFlMRSA9IHVuZGVmaW5lZDtcblxudmFyIF9Db2xvciA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBfQ29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29sb3IpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgQk9SREVSX1NUWUxFID0gZXhwb3J0cy5CT1JERVJfU1RZTEUgPSB7XG4gICAgTk9ORTogMCxcbiAgICBTT0xJRDogMVxufTtcblxudmFyIEJPUkRFUl9TSURFUyA9IGV4cG9ydHMuQk9SREVSX1NJREVTID0ge1xuICAgIFRPUDogMCxcbiAgICBSSUdIVDogMSxcbiAgICBCT1RUT006IDIsXG4gICAgTEVGVDogM1xufTtcblxudmFyIFNJREVTID0gT2JqZWN0LmtleXMoQk9SREVSX1NJREVTKS5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICByZXR1cm4gcy50b0xvd2VyQ2FzZSgpO1xufSk7XG5cbnZhciBwYXJzZUJvcmRlclN0eWxlID0gZnVuY3Rpb24gcGFyc2VCb3JkZXJTdHlsZShzdHlsZSkge1xuICAgIHN3aXRjaCAoc3R5bGUpIHtcbiAgICAgICAgY2FzZSAnbm9uZSc6XG4gICAgICAgICAgICByZXR1cm4gQk9SREVSX1NUWUxFLk5PTkU7XG4gICAgfVxuICAgIHJldHVybiBCT1JERVJfU1RZTEUuU09MSUQ7XG59O1xuXG52YXIgcGFyc2VCb3JkZXIgPSBleHBvcnRzLnBhcnNlQm9yZGVyID0gZnVuY3Rpb24gcGFyc2VCb3JkZXIoc3R5bGUpIHtcbiAgICByZXR1cm4gU0lERVMubWFwKGZ1bmN0aW9uIChzaWRlKSB7XG4gICAgICAgIHZhciBib3JkZXJDb2xvciA9IG5ldyBfQ29sb3IyLmRlZmF1bHQoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnYm9yZGVyLScgKyBzaWRlICsgJy1jb2xvcicpKTtcbiAgICAgICAgdmFyIGJvcmRlclN0eWxlID0gcGFyc2VCb3JkZXJTdHlsZShzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdib3JkZXItJyArIHNpZGUgKyAnLXN0eWxlJykpO1xuICAgICAgICB2YXIgYm9yZGVyV2lkdGggPSBwYXJzZUZsb2F0KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2JvcmRlci0nICsgc2lkZSArICctd2lkdGgnKSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBib3JkZXJDb2xvcjogYm9yZGVyQ29sb3IsXG4gICAgICAgICAgICBib3JkZXJTdHlsZTogYm9yZGVyU3R5bGUsXG4gICAgICAgICAgICBib3JkZXJXaWR0aDogaXNOYU4oYm9yZGVyV2lkdGgpID8gMCA6IGJvcmRlcldpZHRoXG4gICAgICAgIH07XG4gICAgfSk7XG59O1xuXG4vKioqLyB9KSxcbi8qIDEzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbnZhciB0b0NvZGVQb2ludHMgPSBleHBvcnRzLnRvQ29kZVBvaW50cyA9IGZ1bmN0aW9uIHRvQ29kZVBvaW50cyhzdHIpIHtcbiAgICB2YXIgY29kZVBvaW50cyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgbGVuZ3RoID0gc3RyLmxlbmd0aDtcbiAgICB3aGlsZSAoaSA8IGxlbmd0aCkge1xuICAgICAgICB2YXIgdmFsdWUgPSBzdHIuY2hhckNvZGVBdChpKyspO1xuICAgICAgICBpZiAodmFsdWUgPj0gMHhkODAwICYmIHZhbHVlIDw9IDB4ZGJmZiAmJiBpIDwgbGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgZXh0cmEgPSBzdHIuY2hhckNvZGVBdChpKyspO1xuICAgICAgICAgICAgaWYgKChleHRyYSAmIDB4ZmMwMCkgPT09IDB4ZGMwMCkge1xuICAgICAgICAgICAgICAgIGNvZGVQb2ludHMucHVzaCgoKHZhbHVlICYgMHgzZmYpIDw8IDEwKSArIChleHRyYSAmIDB4M2ZmKSArIDB4MTAwMDApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb2RlUG9pbnRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvZGVQb2ludHMucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvZGVQb2ludHM7XG59O1xuXG52YXIgZnJvbUNvZGVQb2ludCA9IGV4cG9ydHMuZnJvbUNvZGVQb2ludCA9IGZ1bmN0aW9uIGZyb21Db2RlUG9pbnQoKSB7XG4gICAgaWYgKFN0cmluZy5mcm9tQ29kZVBvaW50KSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNvZGVQb2ludC5hcHBseShTdHJpbmcsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgaWYgKCFsZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIHZhciBjb2RlVW5pdHMgPSBbXTtcblxuICAgIHZhciBpbmRleCA9IC0xO1xuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgICB2YXIgY29kZVBvaW50ID0gYXJndW1lbnRzLmxlbmd0aCA8PSBpbmRleCA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1tpbmRleF07XG4gICAgICAgIGlmIChjb2RlUG9pbnQgPD0gMHhmZmZmKSB7XG4gICAgICAgICAgICBjb2RlVW5pdHMucHVzaChjb2RlUG9pbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29kZVBvaW50IC09IDB4MTAwMDA7XG4gICAgICAgICAgICBjb2RlVW5pdHMucHVzaCgoY29kZVBvaW50ID4+IDEwKSArIDB4ZDgwMCwgY29kZVBvaW50ICUgMHg0MDAgKyAweGRjMDApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbmRleCArIDEgPT09IGxlbmd0aCB8fCBjb2RlVW5pdHMubGVuZ3RoID4gMHg0MDAwKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIGNvZGVVbml0cyk7XG4gICAgICAgICAgICBjb2RlVW5pdHMubGVuZ3RoID0gMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxudmFyIGNoYXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nO1xuXG4vLyBVc2UgYSBsb29rdXAgdGFibGUgdG8gZmluZCB0aGUgaW5kZXguXG52YXIgbG9va3VwID0gdHlwZW9mIFVpbnQ4QXJyYXkgPT09ICd1bmRlZmluZWQnID8gW10gOiBuZXcgVWludDhBcnJheSgyNTYpO1xuZm9yICh2YXIgaSA9IDA7IGkgPCBjaGFycy5sZW5ndGg7IGkrKykge1xuICAgIGxvb2t1cFtjaGFycy5jaGFyQ29kZUF0KGkpXSA9IGk7XG59XG5cbnZhciBkZWNvZGUgPSBleHBvcnRzLmRlY29kZSA9IGZ1bmN0aW9uIGRlY29kZShiYXNlNjQpIHtcbiAgICB2YXIgYnVmZmVyTGVuZ3RoID0gYmFzZTY0Lmxlbmd0aCAqIDAuNzUsXG4gICAgICAgIGxlbiA9IGJhc2U2NC5sZW5ndGgsXG4gICAgICAgIGkgPSB2b2lkIDAsXG4gICAgICAgIHAgPSAwLFxuICAgICAgICBlbmNvZGVkMSA9IHZvaWQgMCxcbiAgICAgICAgZW5jb2RlZDIgPSB2b2lkIDAsXG4gICAgICAgIGVuY29kZWQzID0gdm9pZCAwLFxuICAgICAgICBlbmNvZGVkNCA9IHZvaWQgMDtcblxuICAgIGlmIChiYXNlNjRbYmFzZTY0Lmxlbmd0aCAtIDFdID09PSAnPScpIHtcbiAgICAgICAgYnVmZmVyTGVuZ3RoLS07XG4gICAgICAgIGlmIChiYXNlNjRbYmFzZTY0Lmxlbmd0aCAtIDJdID09PSAnPScpIHtcbiAgICAgICAgICAgIGJ1ZmZlckxlbmd0aC0tO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGJ1ZmZlciA9IHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBVaW50OEFycmF5LnByb3RvdHlwZS5zbGljZSAhPT0gJ3VuZGVmaW5lZCcgPyBuZXcgQXJyYXlCdWZmZXIoYnVmZmVyTGVuZ3RoKSA6IG5ldyBBcnJheShidWZmZXJMZW5ndGgpO1xuICAgIHZhciBieXRlcyA9IEFycmF5LmlzQXJyYXkoYnVmZmVyKSA/IGJ1ZmZlciA6IG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICAgICAgZW5jb2RlZDEgPSBsb29rdXBbYmFzZTY0LmNoYXJDb2RlQXQoaSldO1xuICAgICAgICBlbmNvZGVkMiA9IGxvb2t1cFtiYXNlNjQuY2hhckNvZGVBdChpICsgMSldO1xuICAgICAgICBlbmNvZGVkMyA9IGxvb2t1cFtiYXNlNjQuY2hhckNvZGVBdChpICsgMildO1xuICAgICAgICBlbmNvZGVkNCA9IGxvb2t1cFtiYXNlNjQuY2hhckNvZGVBdChpICsgMyldO1xuXG4gICAgICAgIGJ5dGVzW3ArK10gPSBlbmNvZGVkMSA8PCAyIHwgZW5jb2RlZDIgPj4gNDtcbiAgICAgICAgYnl0ZXNbcCsrXSA9IChlbmNvZGVkMiAmIDE1KSA8PCA0IHwgZW5jb2RlZDMgPj4gMjtcbiAgICAgICAgYnl0ZXNbcCsrXSA9IChlbmNvZGVkMyAmIDMpIDw8IDYgfCBlbmNvZGVkNCAmIDYzO1xuICAgIH1cblxuICAgIHJldHVybiBidWZmZXI7XG59O1xuXG52YXIgcG9seVVpbnQxNkFycmF5ID0gZXhwb3J0cy5wb2x5VWludDE2QXJyYXkgPSBmdW5jdGlvbiBwb2x5VWludDE2QXJyYXkoYnVmZmVyKSB7XG4gICAgdmFyIGxlbmd0aCA9IGJ1ZmZlci5sZW5ndGg7XG4gICAgdmFyIGJ5dGVzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxlbmd0aDsgX2kgKz0gMikge1xuICAgICAgICBieXRlcy5wdXNoKGJ1ZmZlcltfaSArIDFdIDw8IDggfCBidWZmZXJbX2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIGJ5dGVzO1xufTtcblxudmFyIHBvbHlVaW50MzJBcnJheSA9IGV4cG9ydHMucG9seVVpbnQzMkFycmF5ID0gZnVuY3Rpb24gcG9seVVpbnQzMkFycmF5KGJ1ZmZlcikge1xuICAgIHZhciBsZW5ndGggPSBidWZmZXIubGVuZ3RoO1xuICAgIHZhciBieXRlcyA9IFtdO1xuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IGxlbmd0aDsgX2kyICs9IDQpIHtcbiAgICAgICAgYnl0ZXMucHVzaChidWZmZXJbX2kyICsgM10gPDwgMjQgfCBidWZmZXJbX2kyICsgMl0gPDwgMTYgfCBidWZmZXJbX2kyICsgMV0gPDwgOCB8IGJ1ZmZlcltfaTJdKTtcbiAgICB9XG4gICAgcmV0dXJuIGJ5dGVzO1xufTtcblxuLyoqKi8gfSksXG4vKiAxNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNyZWF0ZUNvdW50ZXJUZXh0ID0gZXhwb3J0cy5pbmxpbmVMaXN0SXRlbUVsZW1lbnQgPSBleHBvcnRzLmdldExpc3RPd25lciA9IHVuZGVmaW5lZDtcblxudmFyIF9VdGlsID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblxudmFyIF9Ob2RlQ29udGFpbmVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblxudmFyIF9Ob2RlQ29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX05vZGVDb250YWluZXIpO1xuXG52YXIgX1RleHRDb250YWluZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpO1xuXG52YXIgX1RleHRDb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGV4dENvbnRhaW5lcik7XG5cbnZhciBfbGlzdFN0eWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4KTtcblxudmFyIF9Vbmljb2RlID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vIE1hcmdpbiBiZXR3ZWVuIHRoZSBlbnVtZXJhdGlvbiBhbmQgdGhlIGxpc3QgaXRlbSBjb250ZW50XG52YXIgTUFSR0lOX1JJR0hUID0gNztcblxudmFyIGFuY2VzdG9yVHlwZXMgPSBbJ09MJywgJ1VMJywgJ01FTlUnXTtcblxudmFyIGdldExpc3RPd25lciA9IGV4cG9ydHMuZ2V0TGlzdE93bmVyID0gZnVuY3Rpb24gZ2V0TGlzdE93bmVyKGNvbnRhaW5lcikge1xuICAgIHZhciBwYXJlbnQgPSBjb250YWluZXIucGFyZW50O1xuICAgIGlmICghcGFyZW50KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGRvIHtcbiAgICAgICAgdmFyIGlzQW5jZXN0b3IgPSBhbmNlc3RvclR5cGVzLmluZGV4T2YocGFyZW50LnRhZ05hbWUpICE9PSAtMTtcbiAgICAgICAgaWYgKGlzQW5jZXN0b3IpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudDtcbiAgICB9IHdoaWxlIChwYXJlbnQpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lci5wYXJlbnQ7XG59O1xuXG52YXIgaW5saW5lTGlzdEl0ZW1FbGVtZW50ID0gZXhwb3J0cy5pbmxpbmVMaXN0SXRlbUVsZW1lbnQgPSBmdW5jdGlvbiBpbmxpbmVMaXN0SXRlbUVsZW1lbnQobm9kZSwgY29udGFpbmVyLCByZXNvdXJjZUxvYWRlcikge1xuICAgIHZhciBsaXN0U3R5bGUgPSBjb250YWluZXIuc3R5bGUubGlzdFN0eWxlO1xuXG4gICAgaWYgKCFsaXN0U3R5bGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBzdHlsZSA9IG5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKG5vZGUsIG51bGwpO1xuICAgIHZhciB3cmFwcGVyID0gbm9kZS5vd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2h0bWwyY2FudmFzd3JhcHBlcicpO1xuICAgICgwLCBfVXRpbC5jb3B5Q1NTU3R5bGVzKShzdHlsZSwgd3JhcHBlcik7XG5cbiAgICB3cmFwcGVyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICB3cmFwcGVyLnN0eWxlLmJvdHRvbSA9ICdhdXRvJztcbiAgICB3cmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIHdyYXBwZXIuc3R5bGUubGV0dGVyU3BhY2luZyA9ICdub3JtYWwnO1xuXG4gICAgc3dpdGNoIChsaXN0U3R5bGUubGlzdFN0eWxlUG9zaXRpb24pIHtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfUE9TSVRJT04uT1VUU0lERTpcbiAgICAgICAgICAgIHdyYXBwZXIuc3R5bGUubGVmdCA9ICdhdXRvJztcbiAgICAgICAgICAgIHdyYXBwZXIuc3R5bGUucmlnaHQgPSBub2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuaW5uZXJXaWR0aCAtIGNvbnRhaW5lci5ib3VuZHMubGVmdCAtIGNvbnRhaW5lci5zdHlsZS5tYXJnaW5bMV0uZ2V0QWJzb2x1dGVWYWx1ZShjb250YWluZXIuYm91bmRzLndpZHRoKSArIE1BUkdJTl9SSUdIVCArICdweCc7XG4gICAgICAgICAgICB3cmFwcGVyLnN0eWxlLnRleHRBbGlnbiA9ICdyaWdodCc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfUE9TSVRJT04uSU5TSURFOlxuICAgICAgICAgICAgd3JhcHBlci5zdHlsZS5sZWZ0ID0gY29udGFpbmVyLmJvdW5kcy5sZWZ0IC0gY29udGFpbmVyLnN0eWxlLm1hcmdpblszXS5nZXRBYnNvbHV0ZVZhbHVlKGNvbnRhaW5lci5ib3VuZHMud2lkdGgpICsgJ3B4JztcbiAgICAgICAgICAgIHdyYXBwZXIuc3R5bGUucmlnaHQgPSAnYXV0byc7XG4gICAgICAgICAgICB3cmFwcGVyLnN0eWxlLnRleHRBbGlnbiA9ICdsZWZ0JztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHZhciB0ZXh0ID0gdm9pZCAwO1xuICAgIHZhciBNQVJHSU5fVE9QID0gY29udGFpbmVyLnN0eWxlLm1hcmdpblswXS5nZXRBYnNvbHV0ZVZhbHVlKGNvbnRhaW5lci5ib3VuZHMud2lkdGgpO1xuICAgIHZhciBzdHlsZUltYWdlID0gbGlzdFN0eWxlLmxpc3RTdHlsZUltYWdlO1xuICAgIGlmIChzdHlsZUltYWdlKSB7XG4gICAgICAgIGlmIChzdHlsZUltYWdlLm1ldGhvZCA9PT0gJ3VybCcpIHtcbiAgICAgICAgICAgIHZhciBpbWFnZSA9IG5vZGUub3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGltYWdlLnNyYyA9IHN0eWxlSW1hZ2UuYXJnc1swXTtcbiAgICAgICAgICAgIHdyYXBwZXIuc3R5bGUudG9wID0gY29udGFpbmVyLmJvdW5kcy50b3AgLSBNQVJHSU5fVE9QICsgJ3B4JztcbiAgICAgICAgICAgIHdyYXBwZXIuc3R5bGUud2lkdGggPSAnYXV0byc7XG4gICAgICAgICAgICB3cmFwcGVyLnN0eWxlLmhlaWdodCA9ICdhdXRvJztcbiAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHNpemUgPSBwYXJzZUZsb2F0KGNvbnRhaW5lci5zdHlsZS5mb250LmZvbnRTaXplKSAqIDAuNTtcbiAgICAgICAgICAgIHdyYXBwZXIuc3R5bGUudG9wID0gY29udGFpbmVyLmJvdW5kcy50b3AgLSBNQVJHSU5fVE9QICsgY29udGFpbmVyLmJvdW5kcy5oZWlnaHQgLSAxLjUgKiBzaXplICsgJ3B4JztcbiAgICAgICAgICAgIHdyYXBwZXIuc3R5bGUud2lkdGggPSBzaXplICsgJ3B4JztcbiAgICAgICAgICAgIHdyYXBwZXIuc3R5bGUuaGVpZ2h0ID0gc2l6ZSArICdweCc7XG4gICAgICAgICAgICB3cmFwcGVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IHN0eWxlLmxpc3RTdHlsZUltYWdlO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29udGFpbmVyLmxpc3RJbmRleCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgdGV4dCA9IG5vZGUub3duZXJEb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjcmVhdGVDb3VudGVyVGV4dChjb250YWluZXIubGlzdEluZGV4LCBsaXN0U3R5bGUubGlzdFN0eWxlVHlwZSwgdHJ1ZSkpO1xuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICB3cmFwcGVyLnN0eWxlLnRvcCA9IGNvbnRhaW5lci5ib3VuZHMudG9wIC0gTUFSR0lOX1RPUCArICdweCc7XG4gICAgfVxuXG4gICAgLy8gJEZsb3dGaXhNZVxuICAgIHZhciBib2R5ID0gbm9kZS5vd25lckRvY3VtZW50LmJvZHk7XG4gICAgYm9keS5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcblxuICAgIGlmICh0ZXh0KSB7XG4gICAgICAgIGNvbnRhaW5lci5jaGlsZE5vZGVzLnB1c2goX1RleHRDb250YWluZXIyLmRlZmF1bHQuZnJvbVRleHROb2RlKHRleHQsIGNvbnRhaW5lcikpO1xuICAgICAgICBib2R5LnJlbW92ZUNoaWxkKHdyYXBwZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgICAgY29udGFpbmVyLmNoaWxkTm9kZXMucHVzaChuZXcgX05vZGVDb250YWluZXIyLmRlZmF1bHQod3JhcHBlciwgY29udGFpbmVyLCByZXNvdXJjZUxvYWRlciwgMCkpO1xuICAgIH1cbn07XG5cbnZhciBST01BTl9VUFBFUiA9IHtcbiAgICBpbnRlZ2VyczogWzEwMDAsIDkwMCwgNTAwLCA0MDAsIDEwMCwgOTAsIDUwLCA0MCwgMTAsIDksIDUsIDQsIDFdLFxuICAgIHZhbHVlczogWydNJywgJ0NNJywgJ0QnLCAnQ0QnLCAnQycsICdYQycsICdMJywgJ1hMJywgJ1gnLCAnSVgnLCAnVicsICdJVicsICdJJ11cbn07XG5cbnZhciBBUk1FTklBTiA9IHtcbiAgICBpbnRlZ2VyczogWzkwMDAsIDgwMDAsIDcwMDAsIDYwMDAsIDUwMDAsIDQwMDAsIDMwMDAsIDIwMDAsIDEwMDAsIDkwMCwgODAwLCA3MDAsIDYwMCwgNTAwLCA0MDAsIDMwMCwgMjAwLCAxMDAsIDkwLCA4MCwgNzAsIDYwLCA1MCwgNDAsIDMwLCAyMCwgMTAsIDksIDgsIDcsIDYsIDUsIDQsIDMsIDIsIDFdLFxuICAgIHZhbHVlczogWyfVlCcsICfVkycsICfVkicsICfVkScsICfVkCcsICfVjycsICfVjicsICfVjScsICfVjCcsICfViycsICfViicsICfViScsICfViCcsICfVhycsICfVhicsICfVhScsICfVhCcsICfVgycsICfVgicsICfVgScsICfVgCcsICfUvycsICfUvicsICfUvScsICfUvCcsICfUuycsICfUuicsICfUuScsICfUuCcsICfUtycsICfUticsICfUtScsICfUtCcsICfUsycsICfUsicsICfUsSddXG59O1xuXG52YXIgSEVCUkVXID0ge1xuICAgIGludGVnZXJzOiBbMTAwMDAsIDkwMDAsIDgwMDAsIDcwMDAsIDYwMDAsIDUwMDAsIDQwMDAsIDMwMDAsIDIwMDAsIDEwMDAsIDQwMCwgMzAwLCAyMDAsIDEwMCwgOTAsIDgwLCA3MCwgNjAsIDUwLCA0MCwgMzAsIDIwLCAxOSwgMTgsIDE3LCAxNiwgMTUsIDEwLCA5LCA4LCA3LCA2LCA1LCA0LCAzLCAyLCAxXSxcbiAgICB2YWx1ZXM6IFsn15nXsycsICfXmNezJywgJ9eX17MnLCAn15bXsycsICfXldezJywgJ9eU17MnLCAn15PXsycsICfXktezJywgJ9eR17MnLCAn15DXsycsICfXqicsICfXqScsICfXqCcsICfXpycsICfXpicsICfXpCcsICfXoicsICfXoScsICfXoCcsICfXnicsICfXnCcsICfXmycsICfXmdeYJywgJ9eZ15cnLCAn15nXlicsICfXmNeWJywgJ9eY15UnLCAn15knLCAn15gnLCAn15cnLCAn15YnLCAn15UnLCAn15QnLCAn15MnLCAn15InLCAn15EnLCAn15AnXVxufTtcblxudmFyIEdFT1JHSUFOID0ge1xuICAgIGludGVnZXJzOiBbMTAwMDAsIDkwMDAsIDgwMDAsIDcwMDAsIDYwMDAsIDUwMDAsIDQwMDAsIDMwMDAsIDIwMDAsIDEwMDAsIDkwMCwgODAwLCA3MDAsIDYwMCwgNTAwLCA0MDAsIDMwMCwgMjAwLCAxMDAsIDkwLCA4MCwgNzAsIDYwLCA1MCwgNDAsIDMwLCAyMCwgMTAsIDksIDgsIDcsIDYsIDUsIDQsIDMsIDIsIDFdLFxuICAgIHZhbHVlczogWyfhg7UnLCAn4YOwJywgJ+GDrycsICfhg7QnLCAn4YOuJywgJ+GDrScsICfhg6wnLCAn4YOrJywgJ+GDqicsICfhg6knLCAn4YOoJywgJ+GDpycsICfhg6YnLCAn4YOlJywgJ+GDpCcsICfhg7MnLCAn4YOiJywgJ+GDoScsICfhg6AnLCAn4YOfJywgJ+GDnicsICfhg50nLCAn4YOyJywgJ+GDnCcsICfhg5snLCAn4YOaJywgJ+GDmScsICfhg5gnLCAn4YOXJywgJ+GDsScsICfhg5YnLCAn4YOVJywgJ+GDlCcsICfhg5MnLCAn4YOSJywgJ+GDkScsICfhg5AnXVxufTtcblxudmFyIGNyZWF0ZUFkZGl0aXZlQ291bnRlciA9IGZ1bmN0aW9uIGNyZWF0ZUFkZGl0aXZlQ291bnRlcih2YWx1ZSwgbWluLCBtYXgsIHN5bWJvbHMsIGZhbGxiYWNrLCBzdWZmaXgpIHtcbiAgICBpZiAodmFsdWUgPCBtaW4gfHwgdmFsdWUgPiBtYXgpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUNvdW50ZXJUZXh0KHZhbHVlLCBmYWxsYmFjaywgc3VmZml4Lmxlbmd0aCA+IDApO1xuICAgIH1cblxuICAgIHJldHVybiBzeW1ib2xzLmludGVnZXJzLnJlZHVjZShmdW5jdGlvbiAoc3RyaW5nLCBpbnRlZ2VyLCBpbmRleCkge1xuICAgICAgICB3aGlsZSAodmFsdWUgPj0gaW50ZWdlcikge1xuICAgICAgICAgICAgdmFsdWUgLT0gaW50ZWdlcjtcbiAgICAgICAgICAgIHN0cmluZyArPSBzeW1ib2xzLnZhbHVlc1tpbmRleF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICB9LCAnJykgKyBzdWZmaXg7XG59O1xuXG52YXIgY3JlYXRlQ291bnRlclN0eWxlV2l0aFN5bWJvbFJlc29sdmVyID0gZnVuY3Rpb24gY3JlYXRlQ291bnRlclN0eWxlV2l0aFN5bWJvbFJlc29sdmVyKHZhbHVlLCBjb2RlUG9pbnRSYW5nZUxlbmd0aCwgaXNOdW1lcmljLCByZXNvbHZlcikge1xuICAgIHZhciBzdHJpbmcgPSAnJztcblxuICAgIGRvIHtcbiAgICAgICAgaWYgKCFpc051bWVyaWMpIHtcbiAgICAgICAgICAgIHZhbHVlLS07XG4gICAgICAgIH1cbiAgICAgICAgc3RyaW5nID0gcmVzb2x2ZXIodmFsdWUpICsgc3RyaW5nO1xuICAgICAgICB2YWx1ZSAvPSBjb2RlUG9pbnRSYW5nZUxlbmd0aDtcbiAgICB9IHdoaWxlICh2YWx1ZSAqIGNvZGVQb2ludFJhbmdlTGVuZ3RoID49IGNvZGVQb2ludFJhbmdlTGVuZ3RoKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG59O1xuXG52YXIgY3JlYXRlQ291bnRlclN0eWxlRnJvbVJhbmdlID0gZnVuY3Rpb24gY3JlYXRlQ291bnRlclN0eWxlRnJvbVJhbmdlKHZhbHVlLCBjb2RlUG9pbnRSYW5nZVN0YXJ0LCBjb2RlUG9pbnRSYW5nZUVuZCwgaXNOdW1lcmljLCBzdWZmaXgpIHtcbiAgICB2YXIgY29kZVBvaW50UmFuZ2VMZW5ndGggPSBjb2RlUG9pbnRSYW5nZUVuZCAtIGNvZGVQb2ludFJhbmdlU3RhcnQgKyAxO1xuXG4gICAgcmV0dXJuICh2YWx1ZSA8IDAgPyAnLScgOiAnJykgKyAoY3JlYXRlQ291bnRlclN0eWxlV2l0aFN5bWJvbFJlc29sdmVyKE1hdGguYWJzKHZhbHVlKSwgY29kZVBvaW50UmFuZ2VMZW5ndGgsIGlzTnVtZXJpYywgZnVuY3Rpb24gKGNvZGVQb2ludCkge1xuICAgICAgICByZXR1cm4gKDAsIF9Vbmljb2RlLmZyb21Db2RlUG9pbnQpKE1hdGguZmxvb3IoY29kZVBvaW50ICUgY29kZVBvaW50UmFuZ2VMZW5ndGgpICsgY29kZVBvaW50UmFuZ2VTdGFydCk7XG4gICAgfSkgKyBzdWZmaXgpO1xufTtcblxudmFyIGNyZWF0ZUNvdW50ZXJTdHlsZUZyb21TeW1ib2xzID0gZnVuY3Rpb24gY3JlYXRlQ291bnRlclN0eWxlRnJvbVN5bWJvbHModmFsdWUsIHN5bWJvbHMpIHtcbiAgICB2YXIgc3VmZml4ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiAnLiAnO1xuXG4gICAgdmFyIGNvZGVQb2ludFJhbmdlTGVuZ3RoID0gc3ltYm9scy5sZW5ndGg7XG4gICAgcmV0dXJuIGNyZWF0ZUNvdW50ZXJTdHlsZVdpdGhTeW1ib2xSZXNvbHZlcihNYXRoLmFicyh2YWx1ZSksIGNvZGVQb2ludFJhbmdlTGVuZ3RoLCBmYWxzZSwgZnVuY3Rpb24gKGNvZGVQb2ludCkge1xuICAgICAgICByZXR1cm4gc3ltYm9sc1tNYXRoLmZsb29yKGNvZGVQb2ludCAlIGNvZGVQb2ludFJhbmdlTGVuZ3RoKV07XG4gICAgfSkgKyBzdWZmaXg7XG59O1xuXG52YXIgQ0pLX1pFUk9TID0gMSA8PCAwO1xudmFyIENKS19URU5fQ09FRkZJQ0lFTlRTID0gMSA8PCAxO1xudmFyIENKS19URU5fSElHSF9DT0VGRklDSUVOVFMgPSAxIDw8IDI7XG52YXIgQ0pLX0hVTkRSRURfQ09FRkZJQ0lFTlRTID0gMSA8PCAzO1xuXG52YXIgY3JlYXRlQ0pLQ291bnRlciA9IGZ1bmN0aW9uIGNyZWF0ZUNKS0NvdW50ZXIodmFsdWUsIG51bWJlcnMsIG11bHRpcGxpZXJzLCBuZWdhdGl2ZVNpZ24sIHN1ZmZpeCwgZmxhZ3MpIHtcbiAgICBpZiAodmFsdWUgPCAtOTk5OSB8fCB2YWx1ZSA+IDk5OTkpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUNvdW50ZXJUZXh0KHZhbHVlLCBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5DSktfREVDSU1BTCwgc3VmZml4Lmxlbmd0aCA+IDApO1xuICAgIH1cbiAgICB2YXIgdG1wID0gTWF0aC5hYnModmFsdWUpO1xuICAgIHZhciBzdHJpbmcgPSBzdWZmaXg7XG5cbiAgICBpZiAodG1wID09PSAwKSB7XG4gICAgICAgIHJldHVybiBudW1iZXJzWzBdICsgc3RyaW5nO1xuICAgIH1cblxuICAgIGZvciAodmFyIGRpZ2l0ID0gMDsgdG1wID4gMCAmJiBkaWdpdCA8PSA0OyBkaWdpdCsrKSB7XG4gICAgICAgIHZhciBjb2VmZmljaWVudCA9IHRtcCAlIDEwO1xuXG4gICAgICAgIGlmIChjb2VmZmljaWVudCA9PT0gMCAmJiAoMCwgX1V0aWwuY29udGFpbnMpKGZsYWdzLCBDSktfWkVST1MpICYmIHN0cmluZyAhPT0gJycpIHtcbiAgICAgICAgICAgIHN0cmluZyA9IG51bWJlcnNbY29lZmZpY2llbnRdICsgc3RyaW5nO1xuICAgICAgICB9IGVsc2UgaWYgKGNvZWZmaWNpZW50ID4gMSB8fCBjb2VmZmljaWVudCA9PT0gMSAmJiBkaWdpdCA9PT0gMCB8fCBjb2VmZmljaWVudCA9PT0gMSAmJiBkaWdpdCA9PT0gMSAmJiAoMCwgX1V0aWwuY29udGFpbnMpKGZsYWdzLCBDSktfVEVOX0NPRUZGSUNJRU5UUykgfHwgY29lZmZpY2llbnQgPT09IDEgJiYgZGlnaXQgPT09IDEgJiYgKDAsIF9VdGlsLmNvbnRhaW5zKShmbGFncywgQ0pLX1RFTl9ISUdIX0NPRUZGSUNJRU5UUykgJiYgdmFsdWUgPiAxMDAgfHwgY29lZmZpY2llbnQgPT09IDEgJiYgZGlnaXQgPiAxICYmICgwLCBfVXRpbC5jb250YWlucykoZmxhZ3MsIENKS19IVU5EUkVEX0NPRUZGSUNJRU5UUykpIHtcbiAgICAgICAgICAgIHN0cmluZyA9IG51bWJlcnNbY29lZmZpY2llbnRdICsgKGRpZ2l0ID4gMCA/IG11bHRpcGxpZXJzW2RpZ2l0IC0gMV0gOiAnJykgKyBzdHJpbmc7XG4gICAgICAgIH0gZWxzZSBpZiAoY29lZmZpY2llbnQgPT09IDEgJiYgZGlnaXQgPiAwKSB7XG4gICAgICAgICAgICBzdHJpbmcgPSBtdWx0aXBsaWVyc1tkaWdpdCAtIDFdICsgc3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgIHRtcCA9IE1hdGguZmxvb3IodG1wIC8gMTApO1xuICAgIH1cblxuICAgIHJldHVybiAodmFsdWUgPCAwID8gbmVnYXRpdmVTaWduIDogJycpICsgc3RyaW5nO1xufTtcblxudmFyIENISU5FU0VfSU5GT1JNQUxfTVVMVElQTElFUlMgPSAn5Y2B55m+5Y2D6JCsJztcbnZhciBDSElORVNFX0ZPUk1BTF9NVUxUSVBMSUVSUyA9ICfmi77kvbDku5/okKwnO1xudmFyIEpBUEFORVNFX05FR0FUSVZFID0gJ+ODnuOCpOODiuOCuSc7XG52YXIgS09SRUFOX05FR0FUSVZFID0gJ+uniOydtOuEiOyKpCAnO1xuXG52YXIgY3JlYXRlQ291bnRlclRleHQgPSBleHBvcnRzLmNyZWF0ZUNvdW50ZXJUZXh0ID0gZnVuY3Rpb24gY3JlYXRlQ291bnRlclRleHQodmFsdWUsIHR5cGUsIGFwcGVuZFN1ZmZpeCkge1xuICAgIHZhciBkZWZhdWx0U3VmZml4ID0gYXBwZW5kU3VmZml4ID8gJy4gJyA6ICcnO1xuICAgIHZhciBjamtTdWZmaXggPSBhcHBlbmRTdWZmaXggPyAn44CBJyA6ICcnO1xuICAgIHZhciBrb3JlYW5TdWZmaXggPSBhcHBlbmRTdWZmaXggPyAnLCAnIDogJyc7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuRElTQzpcbiAgICAgICAgICAgIHJldHVybiAn4oCiJztcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5DSVJDTEU6XG4gICAgICAgICAgICByZXR1cm4gJ+KXpic7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuU1FVQVJFOlxuICAgICAgICAgICAgcmV0dXJuICfil74nO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkRFQ0lNQUxfTEVBRElOR19aRVJPOlxuICAgICAgICAgICAgdmFyIHN0cmluZyA9IGNyZWF0ZUNvdW50ZXJTdHlsZUZyb21SYW5nZSh2YWx1ZSwgNDgsIDU3LCB0cnVlLCBkZWZhdWx0U3VmZml4KTtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmcubGVuZ3RoIDwgNCA/ICcwJyArIHN0cmluZyA6IHN0cmluZztcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5DSktfREVDSU1BTDpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tU3ltYm9scyh2YWx1ZSwgJ+OAh+S4gOS6jOS4ieWbm+S6lOWFreS4g+WFq+S5nScsIGNqa1N1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuTE9XRVJfUk9NQU46XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQWRkaXRpdmVDb3VudGVyKHZhbHVlLCAxLCAzOTk5LCBST01BTl9VUFBFUiwgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuREVDSU1BTCwgZGVmYXVsdFN1ZmZpeCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5VUFBFUl9ST01BTjpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVBZGRpdGl2ZUNvdW50ZXIodmFsdWUsIDEsIDM5OTksIFJPTUFOX1VQUEVSLCBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5ERUNJTUFMLCBkZWZhdWx0U3VmZml4KTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5MT1dFUl9HUkVFSzpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDk0NSwgOTY5LCBmYWxzZSwgZGVmYXVsdFN1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuTE9XRVJfQUxQSEE6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVJhbmdlKHZhbHVlLCA5NywgMTIyLCBmYWxzZSwgZGVmYXVsdFN1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuVVBQRVJfQUxQSEE6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVJhbmdlKHZhbHVlLCA2NSwgOTAsIGZhbHNlLCBkZWZhdWx0U3VmZml4KTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5BUkFCSUNfSU5ESUM6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVJhbmdlKHZhbHVlLCAxNjMyLCAxNjQxLCB0cnVlLCBkZWZhdWx0U3VmZml4KTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5BUk1FTklBTjpcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5VUFBFUl9BUk1FTklBTjpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVBZGRpdGl2ZUNvdW50ZXIodmFsdWUsIDEsIDk5OTksIEFSTUVOSUFOLCBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5ERUNJTUFMLCBkZWZhdWx0U3VmZml4KTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5MT1dFUl9BUk1FTklBTjpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVBZGRpdGl2ZUNvdW50ZXIodmFsdWUsIDEsIDk5OTksIEFSTUVOSUFOLCBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5ERUNJTUFMLCBkZWZhdWx0U3VmZml4KS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkJFTkdBTEk6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVJhbmdlKHZhbHVlLCAyNTM0LCAyNTQzLCB0cnVlLCBkZWZhdWx0U3VmZml4KTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5DQU1CT0RJQU46XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuS0hNRVI6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVJhbmdlKHZhbHVlLCA2MTEyLCA2MTIxLCB0cnVlLCBkZWZhdWx0U3VmZml4KTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5DSktfRUFSVEhMWV9CUkFOQ0g6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVN5bWJvbHModmFsdWUsICflrZDkuJHlr4Xlja/ovrDlt7PljYjmnKrnlLPphYnmiIzkuqUnLCBjamtTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkNKS19IRUFWRU5MWV9TVEVNOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvdW50ZXJTdHlsZUZyb21TeW1ib2xzKHZhbHVlLCAn55Sy5LmZ5LiZ5LiB5oiK5bex5bqa6L6b5aOs55m4JywgY2prU3VmZml4KTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5DSktfSURFT0dSQVBISUM6XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuVFJBRF9DSElORVNFX0lORk9STUFMOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNKS0NvdW50ZXIodmFsdWUsICfpm7bkuIDkuozkuInlm5vkupTlha3kuIPlhavkuZ0nLCBDSElORVNFX0lORk9STUFMX01VTFRJUExJRVJTLCAn6LKgJywgY2prU3VmZml4LCBDSktfVEVOX0NPRUZGSUNJRU5UUyB8IENKS19URU5fSElHSF9DT0VGRklDSUVOVFMgfCBDSktfSFVORFJFRF9DT0VGRklDSUVOVFMpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLlRSQURfQ0hJTkVTRV9GT1JNQUw6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ0pLQ291bnRlcih2YWx1ZSwgJ+mbtuWjueiys+WPg+iChuS8jemZuOafkuaNjOeOlicsIENISU5FU0VfRk9STUFMX01VTFRJUExJRVJTLCAn6LKgJywgY2prU3VmZml4LCBDSktfWkVST1MgfCBDSktfVEVOX0NPRUZGSUNJRU5UUyB8IENKS19URU5fSElHSF9DT0VGRklDSUVOVFMgfCBDSktfSFVORFJFRF9DT0VGRklDSUVOVFMpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLlNJTVBfQ0hJTkVTRV9JTkZPUk1BTDpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDSktDb3VudGVyKHZhbHVlLCAn6Zu25LiA5LqM5LiJ5Zub5LqU5YWt5LiD5YWr5LmdJywgQ0hJTkVTRV9JTkZPUk1BTF9NVUxUSVBMSUVSUywgJ+i0nycsIGNqa1N1ZmZpeCwgQ0pLX1RFTl9DT0VGRklDSUVOVFMgfCBDSktfVEVOX0hJR0hfQ09FRkZJQ0lFTlRTIHwgQ0pLX0hVTkRSRURfQ09FRkZJQ0lFTlRTKTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5TSU1QX0NISU5FU0VfRk9STUFMOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNKS0NvdW50ZXIodmFsdWUsICfpm7blo7notLDlj4HogobkvI3pmYbmn5LmjYznjpYnLCBDSElORVNFX0ZPUk1BTF9NVUxUSVBMSUVSUywgJ+i0nycsIGNqa1N1ZmZpeCwgQ0pLX1pFUk9TIHwgQ0pLX1RFTl9DT0VGRklDSUVOVFMgfCBDSktfVEVOX0hJR0hfQ09FRkZJQ0lFTlRTIHwgQ0pLX0hVTkRSRURfQ09FRkZJQ0lFTlRTKTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5KQVBBTkVTRV9JTkZPUk1BTDpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDSktDb3VudGVyKHZhbHVlLCAn44CH5LiA5LqM5LiJ5Zub5LqU5YWt5LiD5YWr5LmdJywgJ+WNgeeZvuWNg+S4hycsIEpBUEFORVNFX05FR0FUSVZFLCBjamtTdWZmaXgsIDApO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkpBUEFORVNFX0ZPUk1BTDpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDSktDb3VudGVyKHZhbHVlLCAn6Zu25aOx5byQ5Y+C5Zub5LyN5YWt5LiD5YWr5LmdJywgJ+aLvueZvuWNg+S4hycsIEpBUEFORVNFX05FR0FUSVZFLCBjamtTdWZmaXgsIENKS19aRVJPUyB8IENKS19URU5fQ09FRkZJQ0lFTlRTIHwgQ0pLX1RFTl9ISUdIX0NPRUZGSUNJRU5UUyk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuS09SRUFOX0hBTkdVTF9GT1JNQUw6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ0pLQ291bnRlcih2YWx1ZSwgJ+yYgeydvOydtOyCvOyCrOyYpOycoey5oO2MlOq1rCcsICfsi63rsLHsspzrp4wnLCBLT1JFQU5fTkVHQVRJVkUsIGtvcmVhblN1ZmZpeCwgQ0pLX1pFUk9TIHwgQ0pLX1RFTl9DT0VGRklDSUVOVFMgfCBDSktfVEVOX0hJR0hfQ09FRkZJQ0lFTlRTKTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5LT1JFQU5fSEFOSkFfSU5GT1JNQUw6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ0pLQ291bnRlcih2YWx1ZSwgJ+mbtuS4gOS6jOS4ieWbm+S6lOWFreS4g+WFq+S5nScsICfljYHnmb7ljYPokKwnLCBLT1JFQU5fTkVHQVRJVkUsIGtvcmVhblN1ZmZpeCwgMCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuS09SRUFOX0hBTkpBX0ZPUk1BTDpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDSktDb3VudGVyKHZhbHVlLCAn6Zu25aO56LKz5Y+D5Zub5LqU5YWt5LiD5YWr5LmdJywgJ+aLvueZvuWNgycsIEtPUkVBTl9ORUdBVElWRSwga29yZWFuU3VmZml4LCBDSktfWkVST1MgfCBDSktfVEVOX0NPRUZGSUNJRU5UUyB8IENKS19URU5fSElHSF9DT0VGRklDSUVOVFMpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkRFVkFOQUdBUkk6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVJhbmdlKHZhbHVlLCAweDk2NiwgMHg5NmYsIHRydWUsIGRlZmF1bHRTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkdFT1JHSUFOOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUFkZGl0aXZlQ291bnRlcih2YWx1ZSwgMSwgMTk5OTksIEdFT1JHSUFOLCBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5ERUNJTUFMLCBkZWZhdWx0U3VmZml4KTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5HVUpBUkFUSTpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDB4YWU2LCAweGFlZiwgdHJ1ZSwgZGVmYXVsdFN1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuR1VSTVVLSEk6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVJhbmdlKHZhbHVlLCAweGE2NiwgMHhhNmYsIHRydWUsIGRlZmF1bHRTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkhFQlJFVzpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVBZGRpdGl2ZUNvdW50ZXIodmFsdWUsIDEsIDEwOTk5LCBIRUJSRVcsIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkRFQ0lNQUwsIGRlZmF1bHRTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkhJUkFHQU5BOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvdW50ZXJTdHlsZUZyb21TeW1ib2xzKHZhbHVlLCAn44GC44GE44GG44GI44GK44GL44GN44GP44GR44GT44GV44GX44GZ44Gb44Gd44Gf44Gh44Gk44Gm44Go44Gq44Gr44Gs44Gt44Gu44Gv44Gy44G144G444G744G+44G/44KA44KB44KC44KE44KG44KI44KJ44KK44KL44KM44KN44KP44KQ44KR44KS44KTJyk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuSElSQUdBTkFfSVJPSEE6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVN5bWJvbHModmFsdWUsICfjgYTjgo3jga/jgavjgbvjgbjjgajjgaHjgorjgazjgovjgpLjgo/jgYvjgojjgZ/jgozjgZ3jgaTjga3jgarjgonjgoDjgYbjgpDjga7jgYrjgY/jgoTjgb7jgZHjgbXjgZPjgYjjgabjgYLjgZXjgY3jgobjgoHjgb/jgZfjgpHjgbLjgoLjgZvjgZknKTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5LQU5OQURBOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvdW50ZXJTdHlsZUZyb21SYW5nZSh2YWx1ZSwgMHhjZTYsIDB4Y2VmLCB0cnVlLCBkZWZhdWx0U3VmZml4KTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5LQVRBS0FOQTpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tU3ltYm9scyh2YWx1ZSwgJ+OCouOCpOOCpuOCqOOCquOCq+OCreOCr+OCseOCs+OCteOCt+OCueOCu+OCveOCv+ODgeODhOODhuODiOODiuODi+ODjOODjeODjuODj+ODkuODleODmOODm+ODnuODn+ODoOODoeODouODpOODpuODqOODqeODquODq+ODrOODreODr+ODsOODseODsuODsycsIGNqa1N1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuS0FUQUtBTkFfSVJPSEE6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVN5bWJvbHModmFsdWUsICfjgqTjg63jg4/jg4vjg5vjg5jjg4jjg4Hjg6rjg4zjg6vjg7Ljg6/jgqvjg6jjgr/jg6zjgr3jg4Tjg43jg4rjg6njg6Djgqbjg7Djg47jgqrjgq/jg6Tjg57jgrHjg5XjgrPjgqjjg4bjgqLjgrXjgq3jg6bjg6Hjg5/jgrfjg7Hjg5Ljg6LjgrvjgrknLCBjamtTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkxBTzpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDB4ZWQwLCAweGVkOSwgdHJ1ZSwgZGVmYXVsdFN1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuTU9OR09MSUFOOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvdW50ZXJTdHlsZUZyb21SYW5nZSh2YWx1ZSwgMHgxODEwLCAweDE4MTksIHRydWUsIGRlZmF1bHRTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLk1ZQU5NQVI6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVJhbmdlKHZhbHVlLCAweDEwNDAsIDB4MTA0OSwgdHJ1ZSwgZGVmYXVsdFN1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuT1JJWUE6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVJhbmdlKHZhbHVlLCAweGI2NiwgMHhiNmYsIHRydWUsIGRlZmF1bHRTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLlBFUlNJQU46XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVJhbmdlKHZhbHVlLCAweDZmMCwgMHg2ZjksIHRydWUsIGRlZmF1bHRTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLlRBTUlMOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvdW50ZXJTdHlsZUZyb21SYW5nZSh2YWx1ZSwgMHhiZTYsIDB4YmVmLCB0cnVlLCBkZWZhdWx0U3VmZml4KTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5URUxVR1U6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVJhbmdlKHZhbHVlLCAweGM2NiwgMHhjNmYsIHRydWUsIGRlZmF1bHRTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLlRIQUk6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVJhbmdlKHZhbHVlLCAweGU1MCwgMHhlNTksIHRydWUsIGRlZmF1bHRTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLlRJQkVUQU46XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVJhbmdlKHZhbHVlLCAweGYyMCwgMHhmMjksIHRydWUsIGRlZmF1bHRTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkRFQ0lNQUw6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVJhbmdlKHZhbHVlLCA0OCwgNTcsIHRydWUsIGRlZmF1bHRTdWZmaXgpO1xuICAgIH1cbn07XG5cbi8qKiovIH0pLFxuLyogMTUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX1BhdGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG52YXIgX3RleHREZWNvcmF0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBhZGRDb2xvclN0b3BzID0gZnVuY3Rpb24gYWRkQ29sb3JTdG9wcyhncmFkaWVudCwgY2FudmFzR3JhZGllbnQpIHtcbiAgICB2YXIgbWF4U3RvcCA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGdyYWRpZW50LmNvbG9yU3RvcHMubWFwKGZ1bmN0aW9uIChjb2xvclN0b3ApIHtcbiAgICAgICAgcmV0dXJuIGNvbG9yU3RvcC5zdG9wO1xuICAgIH0pKTtcbiAgICB2YXIgZiA9IDEgLyBNYXRoLm1heCgxLCBtYXhTdG9wKTtcbiAgICBncmFkaWVudC5jb2xvclN0b3BzLmZvckVhY2goZnVuY3Rpb24gKGNvbG9yU3RvcCkge1xuICAgICAgICBjYW52YXNHcmFkaWVudC5hZGRDb2xvclN0b3AoZiAqIGNvbG9yU3RvcC5zdG9wLCBjb2xvclN0b3AuY29sb3IudG9TdHJpbmcoKSk7XG4gICAgfSk7XG59O1xuXG52YXIgQ2FudmFzUmVuZGVyZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ2FudmFzUmVuZGVyZXIoY2FudmFzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDYW52YXNSZW5kZXJlcik7XG5cbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXMgPyBjYW52YXMgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQ2FudmFzUmVuZGVyZXIsIFt7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIob3B0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gTWF0aC5mbG9vcihvcHRpb25zLndpZHRoICogb3B0aW9ucy5zY2FsZSk7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBNYXRoLmZsb29yKG9wdGlvbnMuaGVpZ2h0ICogb3B0aW9ucy5zY2FsZSk7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS53aWR0aCA9IG9wdGlvbnMud2lkdGggKyAncHgnO1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQgKyAncHgnO1xuXG4gICAgICAgICAgICB0aGlzLmN0eC5zY2FsZSh0aGlzLm9wdGlvbnMuc2NhbGUsIHRoaXMub3B0aW9ucy5zY2FsZSk7XG4gICAgICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUoLW9wdGlvbnMueCwgLW9wdGlvbnMueSk7XG4gICAgICAgICAgICB0aGlzLmN0eC50ZXh0QmFzZWxpbmUgPSAnYm90dG9tJztcbiAgICAgICAgICAgIG9wdGlvbnMubG9nZ2VyLmxvZygnQ2FudmFzIHJlbmRlcmVyIGluaXRpYWxpemVkICgnICsgb3B0aW9ucy53aWR0aCArICd4JyArIG9wdGlvbnMuaGVpZ2h0ICsgJyBhdCAnICsgb3B0aW9ucy54ICsgJywnICsgb3B0aW9ucy55ICsgJykgd2l0aCBzY2FsZSAnICsgdGhpcy5vcHRpb25zLnNjYWxlKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY2xpcCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjbGlwKGNsaXBQYXRocywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmIChjbGlwUGF0aHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc2F2ZSgpO1xuICAgICAgICAgICAgICAgIGNsaXBQYXRocy5mb3JFYWNoKGZ1bmN0aW9uIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnBhdGgocGF0aCk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmN0eC5jbGlwKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG5cbiAgICAgICAgICAgIGlmIChjbGlwUGF0aHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgucmVzdG9yZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdkcmF3SW1hZ2UnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZHJhd0ltYWdlKGltYWdlLCBzb3VyY2UsIGRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoaW1hZ2UsIHNvdXJjZS5sZWZ0LCBzb3VyY2UudG9wLCBzb3VyY2Uud2lkdGgsIHNvdXJjZS5oZWlnaHQsIGRlc3RpbmF0aW9uLmxlZnQsIGRlc3RpbmF0aW9uLnRvcCwgZGVzdGluYXRpb24ud2lkdGgsIGRlc3RpbmF0aW9uLmhlaWdodCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2RyYXdTaGFwZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkcmF3U2hhcGUocGF0aCwgY29sb3IpIHtcbiAgICAgICAgICAgIHRoaXMucGF0aChwYXRoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2ZpbGwnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZmlsbChjb2xvcikge1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3IudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0VGFyZ2V0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJykuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLmNhbnZhcyk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3BhdGgnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGF0aChfcGF0aCkge1xuICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoX3BhdGgpKSB7XG4gICAgICAgICAgICAgICAgX3BhdGguZm9yRWFjaChmdW5jdGlvbiAocG9pbnQsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdGFydCA9IHBvaW50LnR5cGUgPT09IF9QYXRoLlBBVEguVkVDVE9SID8gcG9pbnQgOiBwb2ludC5zdGFydDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczIuY3R4Lm1vdmVUbyhzdGFydC54LCBzdGFydC55KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMi5jdHgubGluZVRvKHN0YXJ0LngsIHN0YXJ0LnkpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvaW50LnR5cGUgPT09IF9QYXRoLlBBVEguQkVaSUVSX0NVUlZFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczIuY3R4LmJlemllckN1cnZlVG8ocG9pbnQuc3RhcnRDb250cm9sLngsIHBvaW50LnN0YXJ0Q29udHJvbC55LCBwb2ludC5lbmRDb250cm9sLngsIHBvaW50LmVuZENvbnRyb2wueSwgcG9pbnQuZW5kLngsIHBvaW50LmVuZC55KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5hcmMoX3BhdGgueCArIF9wYXRoLnJhZGl1cywgX3BhdGgueSArIF9wYXRoLnJhZGl1cywgX3BhdGgucmFkaXVzLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZWN0YW5nbGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQsIGNvbG9yKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvci50b1N0cmluZygpO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlckxpbmVhckdyYWRpZW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckxpbmVhckdyYWRpZW50KGJvdW5kcywgZ3JhZGllbnQpIHtcbiAgICAgICAgICAgIHZhciBsaW5lYXJHcmFkaWVudCA9IHRoaXMuY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KGJvdW5kcy5sZWZ0ICsgZ3JhZGllbnQuZGlyZWN0aW9uLngxLCBib3VuZHMudG9wICsgZ3JhZGllbnQuZGlyZWN0aW9uLnkxLCBib3VuZHMubGVmdCArIGdyYWRpZW50LmRpcmVjdGlvbi54MCwgYm91bmRzLnRvcCArIGdyYWRpZW50LmRpcmVjdGlvbi55MCk7XG5cbiAgICAgICAgICAgIGFkZENvbG9yU3RvcHMoZ3JhZGllbnQsIGxpbmVhckdyYWRpZW50KTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGxpbmVhckdyYWRpZW50O1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoYm91bmRzLmxlZnQsIGJvdW5kcy50b3AsIGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlclJhZGlhbEdyYWRpZW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlclJhZGlhbEdyYWRpZW50KGJvdW5kcywgZ3JhZGllbnQpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgeCA9IGJvdW5kcy5sZWZ0ICsgZ3JhZGllbnQuY2VudGVyLng7XG4gICAgICAgICAgICB2YXIgeSA9IGJvdW5kcy50b3AgKyBncmFkaWVudC5jZW50ZXIueTtcblxuICAgICAgICAgICAgdmFyIHJhZGlhbEdyYWRpZW50ID0gdGhpcy5jdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgZ3JhZGllbnQucmFkaXVzLngpO1xuICAgICAgICAgICAgaWYgKCFyYWRpYWxHcmFkaWVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYWRkQ29sb3JTdG9wcyhncmFkaWVudCwgcmFkaWFsR3JhZGllbnQpO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gcmFkaWFsR3JhZGllbnQ7XG5cbiAgICAgICAgICAgIGlmIChncmFkaWVudC5yYWRpdXMueCAhPT0gZ3JhZGllbnQucmFkaXVzLnkpIHtcbiAgICAgICAgICAgICAgICAvLyB0cmFuc2Zvcm1zIGZvciBlbGxpcHRpY2FsIHJhZGlhbCBncmFkaWVudFxuICAgICAgICAgICAgICAgIHZhciBtaWRYID0gYm91bmRzLmxlZnQgKyAwLjUgKiBib3VuZHMud2lkdGg7XG4gICAgICAgICAgICAgICAgdmFyIG1pZFkgPSBib3VuZHMudG9wICsgMC41ICogYm91bmRzLmhlaWdodDtcbiAgICAgICAgICAgICAgICB2YXIgZiA9IGdyYWRpZW50LnJhZGl1cy55IC8gZ3JhZGllbnQucmFkaXVzLng7XG4gICAgICAgICAgICAgICAgdmFyIGludkYgPSAxIC8gZjtcblxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtKG1pZFgsIG1pZFksIFsxLCAwLCAwLCBmLCAwLCAwXSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMzLmN0eC5maWxsUmVjdChib3VuZHMubGVmdCwgaW52RiAqIChib3VuZHMudG9wIC0gbWlkWSkgKyBtaWRZLCBib3VuZHMud2lkdGgsIGJvdW5kcy5oZWlnaHQgKiBpbnZGKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoYm91bmRzLmxlZnQsIGJvdW5kcy50b3AsIGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlclJlcGVhdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJSZXBlYXQocGF0aCwgaW1hZ2UsIGltYWdlU2l6ZSwgb2Zmc2V0WCwgb2Zmc2V0WSkge1xuICAgICAgICAgICAgdGhpcy5wYXRoKHBhdGgpO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5jdHguY3JlYXRlUGF0dGVybih0aGlzLnJlc2l6ZUltYWdlKGltYWdlLCBpbWFnZVNpemUpLCAncmVwZWF0Jyk7XG4gICAgICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUob2Zmc2V0WCwgb2Zmc2V0WSk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUoLW9mZnNldFgsIC1vZmZzZXRZKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyVGV4dE5vZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyVGV4dE5vZGUodGV4dEJvdW5kcywgY29sb3IsIGZvbnQsIHRleHREZWNvcmF0aW9uLCB0ZXh0U2hhZG93cykge1xuICAgICAgICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBbZm9udC5mb250U3R5bGUsIGZvbnQuZm9udFZhcmlhbnQsIGZvbnQuZm9udFdlaWdodCwgZm9udC5mb250U2l6ZSwgZm9udC5mb250RmFtaWx5XS5qb2luKCcgJyk7XG5cbiAgICAgICAgICAgIHRleHRCb3VuZHMuZm9yRWFjaChmdW5jdGlvbiAodGV4dCkge1xuICAgICAgICAgICAgICAgIF90aGlzNC5jdHguZmlsbFN0eWxlID0gY29sb3IudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBpZiAodGV4dFNoYWRvd3MgJiYgdGV4dC50ZXh0LnRyaW0oKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dFNoYWRvd3Muc2xpY2UoMCkucmV2ZXJzZSgpLmZvckVhY2goZnVuY3Rpb24gKHRleHRTaGFkb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzNC5jdHguc2hhZG93Q29sb3IgPSB0ZXh0U2hhZG93LmNvbG9yLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczQuY3R4LnNoYWRvd09mZnNldFggPSB0ZXh0U2hhZG93Lm9mZnNldFggKiBfdGhpczQub3B0aW9ucy5zY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzNC5jdHguc2hhZG93T2Zmc2V0WSA9IHRleHRTaGFkb3cub2Zmc2V0WSAqIF90aGlzNC5vcHRpb25zLnNjYWxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXM0LmN0eC5zaGFkb3dCbHVyID0gdGV4dFNoYWRvdy5ibHVyO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczQuY3R4LmZpbGxUZXh0KHRleHQudGV4dCwgdGV4dC5ib3VuZHMubGVmdCwgdGV4dC5ib3VuZHMudG9wICsgdGV4dC5ib3VuZHMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXM0LmN0eC5maWxsVGV4dCh0ZXh0LnRleHQsIHRleHQuYm91bmRzLmxlZnQsIHRleHQuYm91bmRzLnRvcCArIHRleHQuYm91bmRzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRleHREZWNvcmF0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZXh0RGVjb3JhdGlvbkNvbG9yID0gdGV4dERlY29yYXRpb24udGV4dERlY29yYXRpb25Db2xvciB8fCBjb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb24udGV4dERlY29yYXRpb25MaW5lLmZvckVhY2goZnVuY3Rpb24gKHRleHREZWNvcmF0aW9uTGluZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0ZXh0RGVjb3JhdGlvbkxpbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIF90ZXh0RGVjb3JhdGlvbi5URVhUX0RFQ09SQVRJT05fTElORS5VTkRFUkxJTkU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERyYXdzIGEgbGluZSBhdCB0aGUgYmFzZWxpbmUgb2YgdGhlIGZvbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyBBcyBzb21lIGJyb3dzZXJzIGRpc3BsYXkgdGhlIGxpbmUgYXMgbW9yZSB0aGFuIDFweCBpZiB0aGUgZm9udC1zaXplIGlzIGJpZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbmVlZCB0byB0YWtlIHRoYXQgaW50byBhY2NvdW50IGJvdGggaW4gcG9zaXRpb24gYW5kIHNpemVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9vcHRpb25zJGZvbnRNZXRyaWNzJCA9IF90aGlzNC5vcHRpb25zLmZvbnRNZXRyaWNzLmdldE1ldHJpY3MoZm9udCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlbGluZSA9IF9vcHRpb25zJGZvbnRNZXRyaWNzJC5iYXNlbGluZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpczQucmVjdGFuZ2xlKHRleHQuYm91bmRzLmxlZnQsIE1hdGgucm91bmQodGV4dC5ib3VuZHMudG9wICsgYmFzZWxpbmUpLCB0ZXh0LmJvdW5kcy53aWR0aCwgMSwgdGV4dERlY29yYXRpb25Db2xvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgX3RleHREZWNvcmF0aW9uLlRFWFRfREVDT1JBVElPTl9MSU5FLk9WRVJMSU5FOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpczQucmVjdGFuZ2xlKHRleHQuYm91bmRzLmxlZnQsIE1hdGgucm91bmQodGV4dC5ib3VuZHMudG9wKSwgdGV4dC5ib3VuZHMud2lkdGgsIDEsIHRleHREZWNvcmF0aW9uQ29sb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIF90ZXh0RGVjb3JhdGlvbi5URVhUX0RFQ09SQVRJT05fTElORS5MSU5FX1RIUk9VR0g6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE8gdHJ5IGFuZCBmaW5kIGV4YWN0IHBvc2l0aW9uIGZvciBsaW5lLXRocm91Z2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9vcHRpb25zJGZvbnRNZXRyaWNzJDIgPSBfdGhpczQub3B0aW9ucy5mb250TWV0cmljcy5nZXRNZXRyaWNzKGZvbnQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWlkZGxlID0gX29wdGlvbnMkZm9udE1ldHJpY3MkMi5taWRkbGU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXM0LnJlY3RhbmdsZSh0ZXh0LmJvdW5kcy5sZWZ0LCBNYXRoLmNlaWwodGV4dC5ib3VuZHMudG9wICsgbWlkZGxlKSwgdGV4dC5ib3VuZHMud2lkdGgsIDEsIHRleHREZWNvcmF0aW9uQ29sb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3Jlc2l6ZUltYWdlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2l6ZUltYWdlKGltYWdlLCBzaXplKSB7XG4gICAgICAgICAgICBpZiAoaW1hZ2Uud2lkdGggPT09IHNpemUud2lkdGggJiYgaW1hZ2UuaGVpZ2h0ID09PSBzaXplLmhlaWdodCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbWFnZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGNhbnZhcyA9IHRoaXMuY2FudmFzLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSBzaXplLndpZHRoO1xuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IHNpemUuaGVpZ2h0O1xuICAgICAgICAgICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZSwgMCwgMCwgaW1hZ2Uud2lkdGgsIGltYWdlLmhlaWdodCwgMCwgMCwgc2l6ZS53aWR0aCwgc2l6ZS5oZWlnaHQpO1xuICAgICAgICAgICAgcmV0dXJuIGNhbnZhcztcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2V0T3BhY2l0eScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRPcGFjaXR5KG9wYWNpdHkpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gb3BhY2l0eTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAndHJhbnNmb3JtJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHRyYW5zZm9ybShvZmZzZXRYLCBvZmZzZXRZLCBtYXRyaXgsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5zYXZlKCk7XG4gICAgICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUob2Zmc2V0WCwgb2Zmc2V0WSk7XG4gICAgICAgICAgICB0aGlzLmN0eC50cmFuc2Zvcm0obWF0cml4WzBdLCBtYXRyaXhbMV0sIG1hdHJpeFsyXSwgbWF0cml4WzNdLCBtYXRyaXhbNF0sIG1hdHJpeFs1XSk7XG4gICAgICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUoLW9mZnNldFgsIC1vZmZzZXRZKTtcblxuICAgICAgICAgICAgY2FsbGJhY2soKTtcblxuICAgICAgICAgICAgdGhpcy5jdHgucmVzdG9yZSgpO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIENhbnZhc1JlbmRlcmVyO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBDYW52YXNSZW5kZXJlcjtcblxuLyoqKi8gfSksXG4vKiAxNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBMb2dnZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTG9nZ2VyKGVuYWJsZWQsIGlkLCBzdGFydCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTG9nZ2VyKTtcblxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiBlbmFibGVkO1xuICAgICAgICB0aGlzLnN0YXJ0ID0gc3RhcnQgPyBzdGFydCA6IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoTG9nZ2VyLCBbe1xuICAgICAgICBrZXk6ICdjaGlsZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjaGlsZChpZCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBMb2dnZXIodGhpcy5lbmFibGVkLCBpZCwgdGhpcy5zdGFydCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZmxvd3R5cGUvbm8td2Vhay10eXBlc1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdsb2cnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbG9nKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZW5hYmxlZCAmJiB3aW5kb3cuY29uc29sZSAmJiB3aW5kb3cuY29uc29sZS5sb2cpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmNhbGwod2luZG93LmNvbnNvbGUubG9nLCB3aW5kb3cuY29uc29sZSkuYXBwbHkod2luZG93LmNvbnNvbGUsIFtEYXRlLm5vdygpIC0gdGhpcy5zdGFydCArICdtcycsIHRoaXMuaWQgPyAnaHRtbDJjYW52YXMgKCcgKyB0aGlzLmlkICsgJyk6JyA6ICdodG1sMmNhbnZhczonXS5jb25jYXQoW10uc2xpY2UuY2FsbChhcmdzLCAwKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZsb3d0eXBlL25vLXdlYWstdHlwZXNcblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZXJyb3InLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZXJyb3IoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5lbmFibGVkICYmIHdpbmRvdy5jb25zb2xlICYmIHdpbmRvdy5jb25zb2xlLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmNhbGwod2luZG93LmNvbnNvbGUuZXJyb3IsIHdpbmRvdy5jb25zb2xlKS5hcHBseSh3aW5kb3cuY29uc29sZSwgW0RhdGUubm93KCkgLSB0aGlzLnN0YXJ0ICsgJ21zJywgdGhpcy5pZCA/ICdodG1sMmNhbnZhcyAoJyArIHRoaXMuaWQgKyAnKTonIDogJ2h0bWwyY2FudmFzOiddLmNvbmNhdChbXS5zbGljZS5jYWxsKGFyZ3MsIDApKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTG9nZ2VyO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBMb2dnZXI7XG5cbi8qKiovIH0pLFxuLyogMTcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5wYXJzZVBhZGRpbmcgPSBleHBvcnRzLlBBRERJTkdfU0lERVMgPSB1bmRlZmluZWQ7XG5cbnZhciBfTGVuZ3RoID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxudmFyIF9MZW5ndGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTGVuZ3RoKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFBBRERJTkdfU0lERVMgPSBleHBvcnRzLlBBRERJTkdfU0lERVMgPSB7XG4gICAgVE9QOiAwLFxuICAgIFJJR0hUOiAxLFxuICAgIEJPVFRPTTogMixcbiAgICBMRUZUOiAzXG59O1xuXG52YXIgU0lERVMgPSBbJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddO1xuXG52YXIgcGFyc2VQYWRkaW5nID0gZXhwb3J0cy5wYXJzZVBhZGRpbmcgPSBmdW5jdGlvbiBwYXJzZVBhZGRpbmcoc3R5bGUpIHtcbiAgICByZXR1cm4gU0lERVMubWFwKGZ1bmN0aW9uIChzaWRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgX0xlbmd0aDIuZGVmYXVsdChzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLScgKyBzaWRlKSk7XG4gICAgfSk7XG59O1xuXG4vKioqLyB9KSxcbi8qIDE4ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbnZhciBPVkVSRkxPV19XUkFQID0gZXhwb3J0cy5PVkVSRkxPV19XUkFQID0ge1xuICAgIE5PUk1BTDogMCxcbiAgICBCUkVBS19XT1JEOiAxXG59O1xuXG52YXIgcGFyc2VPdmVyZmxvd1dyYXAgPSBleHBvcnRzLnBhcnNlT3ZlcmZsb3dXcmFwID0gZnVuY3Rpb24gcGFyc2VPdmVyZmxvd1dyYXAob3ZlcmZsb3cpIHtcbiAgICBzd2l0Y2ggKG92ZXJmbG93KSB7XG4gICAgICAgIGNhc2UgJ2JyZWFrLXdvcmQnOlxuICAgICAgICAgICAgcmV0dXJuIE9WRVJGTE9XX1dSQVAuQlJFQUtfV09SRDtcbiAgICAgICAgY2FzZSAnbm9ybWFsJzpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBPVkVSRkxPV19XUkFQLk5PUk1BTDtcbiAgICB9XG59O1xuXG4vKioqLyB9KSxcbi8qIDE5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbnZhciBQT1NJVElPTiA9IGV4cG9ydHMuUE9TSVRJT04gPSB7XG4gICAgU1RBVElDOiAwLFxuICAgIFJFTEFUSVZFOiAxLFxuICAgIEFCU09MVVRFOiAyLFxuICAgIEZJWEVEOiAzLFxuICAgIFNUSUNLWTogNFxufTtcblxudmFyIHBhcnNlUG9zaXRpb24gPSBleHBvcnRzLnBhcnNlUG9zaXRpb24gPSBmdW5jdGlvbiBwYXJzZVBvc2l0aW9uKHBvc2l0aW9uKSB7XG4gICAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgICAgICBjYXNlICdyZWxhdGl2ZSc6XG4gICAgICAgICAgICByZXR1cm4gUE9TSVRJT04uUkVMQVRJVkU7XG4gICAgICAgIGNhc2UgJ2Fic29sdXRlJzpcbiAgICAgICAgICAgIHJldHVybiBQT1NJVElPTi5BQlNPTFVURTtcbiAgICAgICAgY2FzZSAnZml4ZWQnOlxuICAgICAgICAgICAgcmV0dXJuIFBPU0lUSU9OLkZJWEVEO1xuICAgICAgICBjYXNlICdzdGlja3knOlxuICAgICAgICAgICAgcmV0dXJuIFBPU0lUSU9OLlNUSUNLWTtcbiAgICB9XG5cbiAgICByZXR1cm4gUE9TSVRJT04uU1RBVElDO1xufTtcblxuLyoqKi8gfSksXG4vKiAyMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgVEVYVF9UUkFOU0ZPUk0gPSBleHBvcnRzLlRFWFRfVFJBTlNGT1JNID0ge1xuICAgIE5PTkU6IDAsXG4gICAgTE9XRVJDQVNFOiAxLFxuICAgIFVQUEVSQ0FTRTogMixcbiAgICBDQVBJVEFMSVpFOiAzXG59O1xuXG52YXIgcGFyc2VUZXh0VHJhbnNmb3JtID0gZXhwb3J0cy5wYXJzZVRleHRUcmFuc2Zvcm0gPSBmdW5jdGlvbiBwYXJzZVRleHRUcmFuc2Zvcm0odGV4dFRyYW5zZm9ybSkge1xuICAgIHN3aXRjaCAodGV4dFRyYW5zZm9ybSkge1xuICAgICAgICBjYXNlICd1cHBlcmNhc2UnOlxuICAgICAgICAgICAgcmV0dXJuIFRFWFRfVFJBTlNGT1JNLlVQUEVSQ0FTRTtcbiAgICAgICAgY2FzZSAnbG93ZXJjYXNlJzpcbiAgICAgICAgICAgIHJldHVybiBURVhUX1RSQU5TRk9STS5MT1dFUkNBU0U7XG4gICAgICAgIGNhc2UgJ2NhcGl0YWxpemUnOlxuICAgICAgICAgICAgcmV0dXJuIFRFWFRfVFJBTlNGT1JNLkNBUElUQUxJWkU7XG4gICAgfVxuXG4gICAgcmV0dXJuIFRFWFRfVFJBTlNGT1JNLk5PTkU7XG59O1xuXG4vKioqLyB9KSxcbi8qIDIxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVmb3JtYXRJbnB1dEJvdW5kcyA9IGV4cG9ydHMuaW5saW5lU2VsZWN0RWxlbWVudCA9IGV4cG9ydHMuaW5saW5lVGV4dEFyZWFFbGVtZW50ID0gZXhwb3J0cy5pbmxpbmVJbnB1dEVsZW1lbnQgPSBleHBvcnRzLmdldElucHV0Qm9yZGVyUmFkaXVzID0gZXhwb3J0cy5JTlBVVF9CQUNLR1JPVU5EID0gZXhwb3J0cy5JTlBVVF9CT1JERVJTID0gZXhwb3J0cy5JTlBVVF9DT0xPUiA9IHVuZGVmaW5lZDtcblxudmFyIF9UZXh0Q29udGFpbmVyID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTtcblxudmFyIF9UZXh0Q29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RleHRDb250YWluZXIpO1xuXG52YXIgX2JhY2tncm91bmQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG52YXIgX2JvcmRlciA9IF9fd2VicGFja19yZXF1aXJlX18oMTIpO1xuXG52YXIgX0NpcmNsZSA9IF9fd2VicGFja19yZXF1aXJlX18oNTApO1xuXG52YXIgX0NpcmNsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9DaXJjbGUpO1xuXG52YXIgX1ZlY3RvciA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG5cbnZhciBfVmVjdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1ZlY3Rvcik7XG5cbnZhciBfQ29sb3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgX0NvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvbG9yKTtcblxudmFyIF9MZW5ndGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG52YXIgX0xlbmd0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MZW5ndGgpO1xuXG52YXIgX0JvdW5kcyA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cbnZhciBfVGV4dEJvdW5kcyA9IF9fd2VicGFja19yZXF1aXJlX18oMjIpO1xuXG52YXIgX1V0aWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgSU5QVVRfQ09MT1IgPSBleHBvcnRzLklOUFVUX0NPTE9SID0gbmV3IF9Db2xvcjIuZGVmYXVsdChbNDIsIDQyLCA0Ml0pO1xudmFyIElOUFVUX0JPUkRFUl9DT0xPUiA9IG5ldyBfQ29sb3IyLmRlZmF1bHQoWzE2NSwgMTY1LCAxNjVdKTtcbnZhciBJTlBVVF9CQUNLR1JPVU5EX0NPTE9SID0gbmV3IF9Db2xvcjIuZGVmYXVsdChbMjIyLCAyMjIsIDIyMl0pO1xudmFyIElOUFVUX0JPUkRFUiA9IHtcbiAgICBib3JkZXJXaWR0aDogMSxcbiAgICBib3JkZXJDb2xvcjogSU5QVVRfQk9SREVSX0NPTE9SLFxuICAgIGJvcmRlclN0eWxlOiBfYm9yZGVyLkJPUkRFUl9TVFlMRS5TT0xJRFxufTtcbnZhciBJTlBVVF9CT1JERVJTID0gZXhwb3J0cy5JTlBVVF9CT1JERVJTID0gW0lOUFVUX0JPUkRFUiwgSU5QVVRfQk9SREVSLCBJTlBVVF9CT1JERVIsIElOUFVUX0JPUkRFUl07XG52YXIgSU5QVVRfQkFDS0dST1VORCA9IGV4cG9ydHMuSU5QVVRfQkFDS0dST1VORCA9IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IElOUFVUX0JBQ0tHUk9VTkRfQ09MT1IsXG4gICAgYmFja2dyb3VuZEltYWdlOiBbXSxcbiAgICBiYWNrZ3JvdW5kQ2xpcDogX2JhY2tncm91bmQuQkFDS0dST1VORF9DTElQLlBBRERJTkdfQk9YLFxuICAgIGJhY2tncm91bmRPcmlnaW46IF9iYWNrZ3JvdW5kLkJBQ0tHUk9VTkRfT1JJR0lOLlBBRERJTkdfQk9YXG59O1xuXG52YXIgUkFESU9fQk9SREVSX1JBRElVUyA9IG5ldyBfTGVuZ3RoMi5kZWZhdWx0KCc1MCUnKTtcbnZhciBSQURJT19CT1JERVJfUkFESVVTX1RVUExFID0gW1JBRElPX0JPUkRFUl9SQURJVVMsIFJBRElPX0JPUkRFUl9SQURJVVNdO1xudmFyIElOUFVUX1JBRElPX0JPUkRFUl9SQURJVVMgPSBbUkFESU9fQk9SREVSX1JBRElVU19UVVBMRSwgUkFESU9fQk9SREVSX1JBRElVU19UVVBMRSwgUkFESU9fQk9SREVSX1JBRElVU19UVVBMRSwgUkFESU9fQk9SREVSX1JBRElVU19UVVBMRV07XG5cbnZhciBDSEVDS0JPWF9CT1JERVJfUkFESVVTID0gbmV3IF9MZW5ndGgyLmRlZmF1bHQoJzNweCcpO1xudmFyIENIRUNLQk9YX0JPUkRFUl9SQURJVVNfVFVQTEUgPSBbQ0hFQ0tCT1hfQk9SREVSX1JBRElVUywgQ0hFQ0tCT1hfQk9SREVSX1JBRElVU107XG52YXIgSU5QVVRfQ0hFQ0tCT1hfQk9SREVSX1JBRElVUyA9IFtDSEVDS0JPWF9CT1JERVJfUkFESVVTX1RVUExFLCBDSEVDS0JPWF9CT1JERVJfUkFESVVTX1RVUExFLCBDSEVDS0JPWF9CT1JERVJfUkFESVVTX1RVUExFLCBDSEVDS0JPWF9CT1JERVJfUkFESVVTX1RVUExFXTtcblxudmFyIGdldElucHV0Qm9yZGVyUmFkaXVzID0gZXhwb3J0cy5nZXRJbnB1dEJvcmRlclJhZGl1cyA9IGZ1bmN0aW9uIGdldElucHV0Qm9yZGVyUmFkaXVzKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS50eXBlID09PSAncmFkaW8nID8gSU5QVVRfUkFESU9fQk9SREVSX1JBRElVUyA6IElOUFVUX0NIRUNLQk9YX0JPUkRFUl9SQURJVVM7XG59O1xuXG52YXIgaW5saW5lSW5wdXRFbGVtZW50ID0gZXhwb3J0cy5pbmxpbmVJbnB1dEVsZW1lbnQgPSBmdW5jdGlvbiBpbmxpbmVJbnB1dEVsZW1lbnQobm9kZSwgY29udGFpbmVyKSB7XG4gICAgaWYgKG5vZGUudHlwZSA9PT0gJ3JhZGlvJyB8fCBub2RlLnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgaWYgKG5vZGUuY2hlY2tlZCkge1xuICAgICAgICAgICAgdmFyIHNpemUgPSBNYXRoLm1pbihjb250YWluZXIuYm91bmRzLndpZHRoLCBjb250YWluZXIuYm91bmRzLmhlaWdodCk7XG4gICAgICAgICAgICBjb250YWluZXIuY2hpbGROb2Rlcy5wdXNoKG5vZGUudHlwZSA9PT0gJ2NoZWNrYm94JyA/IFtuZXcgX1ZlY3RvcjIuZGVmYXVsdChjb250YWluZXIuYm91bmRzLmxlZnQgKyBzaXplICogMC4zOTM2MywgY29udGFpbmVyLmJvdW5kcy50b3AgKyBzaXplICogMC43OSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KGNvbnRhaW5lci5ib3VuZHMubGVmdCArIHNpemUgKiAwLjE2LCBjb250YWluZXIuYm91bmRzLnRvcCArIHNpemUgKiAwLjU1NDkpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdChjb250YWluZXIuYm91bmRzLmxlZnQgKyBzaXplICogMC4yNzM0NywgY29udGFpbmVyLmJvdW5kcy50b3AgKyBzaXplICogMC40NDA3MSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KGNvbnRhaW5lci5ib3VuZHMubGVmdCArIHNpemUgKiAwLjM5Njk0LCBjb250YWluZXIuYm91bmRzLnRvcCArIHNpemUgKiAwLjU2NDkpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdChjb250YWluZXIuYm91bmRzLmxlZnQgKyBzaXplICogMC43Mjk4MywgY29udGFpbmVyLmJvdW5kcy50b3AgKyBzaXplICogMC4yMyksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KGNvbnRhaW5lci5ib3VuZHMubGVmdCArIHNpemUgKiAwLjg0LCBjb250YWluZXIuYm91bmRzLnRvcCArIHNpemUgKiAwLjM0MDg1KSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoY29udGFpbmVyLmJvdW5kcy5sZWZ0ICsgc2l6ZSAqIDAuMzkzNjMsIGNvbnRhaW5lci5ib3VuZHMudG9wICsgc2l6ZSAqIDAuNzkpXSA6IG5ldyBfQ2lyY2xlMi5kZWZhdWx0KGNvbnRhaW5lci5ib3VuZHMubGVmdCArIHNpemUgLyA0LCBjb250YWluZXIuYm91bmRzLnRvcCArIHNpemUgLyA0LCBzaXplIC8gNCkpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW5saW5lRm9ybUVsZW1lbnQoZ2V0SW5wdXRWYWx1ZShub2RlKSwgbm9kZSwgY29udGFpbmVyLCBmYWxzZSk7XG4gICAgfVxufTtcblxudmFyIGlubGluZVRleHRBcmVhRWxlbWVudCA9IGV4cG9ydHMuaW5saW5lVGV4dEFyZWFFbGVtZW50ID0gZnVuY3Rpb24gaW5saW5lVGV4dEFyZWFFbGVtZW50KG5vZGUsIGNvbnRhaW5lcikge1xuICAgIGlubGluZUZvcm1FbGVtZW50KG5vZGUudmFsdWUsIG5vZGUsIGNvbnRhaW5lciwgdHJ1ZSk7XG59O1xuXG52YXIgaW5saW5lU2VsZWN0RWxlbWVudCA9IGV4cG9ydHMuaW5saW5lU2VsZWN0RWxlbWVudCA9IGZ1bmN0aW9uIGlubGluZVNlbGVjdEVsZW1lbnQobm9kZSwgY29udGFpbmVyKSB7XG4gICAgdmFyIG9wdGlvbiA9IG5vZGUub3B0aW9uc1tub2RlLnNlbGVjdGVkSW5kZXggfHwgMF07XG4gICAgaW5saW5lRm9ybUVsZW1lbnQob3B0aW9uID8gb3B0aW9uLnRleHQgfHwgJycgOiAnJywgbm9kZSwgY29udGFpbmVyLCBmYWxzZSk7XG59O1xuXG52YXIgcmVmb3JtYXRJbnB1dEJvdW5kcyA9IGV4cG9ydHMucmVmb3JtYXRJbnB1dEJvdW5kcyA9IGZ1bmN0aW9uIHJlZm9ybWF0SW5wdXRCb3VuZHMoYm91bmRzKSB7XG4gICAgaWYgKGJvdW5kcy53aWR0aCA+IGJvdW5kcy5oZWlnaHQpIHtcbiAgICAgICAgYm91bmRzLmxlZnQgKz0gKGJvdW5kcy53aWR0aCAtIGJvdW5kcy5oZWlnaHQpIC8gMjtcbiAgICAgICAgYm91bmRzLndpZHRoID0gYm91bmRzLmhlaWdodDtcbiAgICB9IGVsc2UgaWYgKGJvdW5kcy53aWR0aCA8IGJvdW5kcy5oZWlnaHQpIHtcbiAgICAgICAgYm91bmRzLnRvcCArPSAoYm91bmRzLmhlaWdodCAtIGJvdW5kcy53aWR0aCkgLyAyO1xuICAgICAgICBib3VuZHMuaGVpZ2h0ID0gYm91bmRzLndpZHRoO1xuICAgIH1cbiAgICByZXR1cm4gYm91bmRzO1xufTtcblxudmFyIGlubGluZUZvcm1FbGVtZW50ID0gZnVuY3Rpb24gaW5saW5lRm9ybUVsZW1lbnQodmFsdWUsIG5vZGUsIGNvbnRhaW5lciwgYWxsb3dMaW5lYnJlYWspIHtcbiAgICB2YXIgYm9keSA9IG5vZGUub3duZXJEb2N1bWVudC5ib2R5O1xuICAgIGlmICh2YWx1ZS5sZW5ndGggPiAwICYmIGJvZHkpIHtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSBub2RlLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHRtbDJjYW52YXN3cmFwcGVyJyk7XG4gICAgICAgICgwLCBfVXRpbC5jb3B5Q1NTU3R5bGVzKShub2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBudWxsKSwgd3JhcHBlcik7XG4gICAgICAgIHdyYXBwZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICB3cmFwcGVyLnN0eWxlLmxlZnQgPSBjb250YWluZXIuYm91bmRzLmxlZnQgKyAncHgnO1xuICAgICAgICB3cmFwcGVyLnN0eWxlLnRvcCA9IGNvbnRhaW5lci5ib3VuZHMudG9wICsgJ3B4JztcbiAgICAgICAgaWYgKCFhbGxvd0xpbmVicmVhaykge1xuICAgICAgICAgICAgd3JhcHBlci5zdHlsZS53aGl0ZVNwYWNlID0gJ25vd3JhcCc7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRleHQgPSBub2RlLm93bmVyRG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpO1xuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuICAgICAgICBjb250YWluZXIuY2hpbGROb2Rlcy5wdXNoKF9UZXh0Q29udGFpbmVyMi5kZWZhdWx0LmZyb21UZXh0Tm9kZSh0ZXh0LCBjb250YWluZXIpKTtcbiAgICAgICAgYm9keS5yZW1vdmVDaGlsZCh3cmFwcGVyKTtcbiAgICB9XG59O1xuXG52YXIgZ2V0SW5wdXRWYWx1ZSA9IGZ1bmN0aW9uIGdldElucHV0VmFsdWUobm9kZSkge1xuICAgIHZhciB2YWx1ZSA9IG5vZGUudHlwZSA9PT0gJ3Bhc3N3b3JkJyA/IG5ldyBBcnJheShub2RlLnZhbHVlLmxlbmd0aCArIDEpLmpvaW4oJ1xcdTIwMjInKSA6IG5vZGUudmFsdWU7XG5cbiAgICByZXR1cm4gdmFsdWUubGVuZ3RoID09PSAwID8gbm9kZS5wbGFjZWhvbGRlciB8fCAnJyA6IHZhbHVlO1xufTtcblxuLyoqKi8gfSksXG4vKiAyMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnBhcnNlVGV4dEJvdW5kcyA9IGV4cG9ydHMuVGV4dEJvdW5kcyA9IHVuZGVmaW5lZDtcblxudmFyIF9Cb3VuZHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG52YXIgX3RleHREZWNvcmF0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSk7XG5cbnZhciBfRmVhdHVyZSA9IF9fd2VicGFja19yZXF1aXJlX18oMTApO1xuXG52YXIgX0ZlYXR1cmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRmVhdHVyZSk7XG5cbnZhciBfVW5pY29kZSA9IF9fd2VicGFja19yZXF1aXJlX18oMjQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgVGV4dEJvdW5kcyA9IGV4cG9ydHMuVGV4dEJvdW5kcyA9IGZ1bmN0aW9uIFRleHRCb3VuZHModGV4dCwgYm91bmRzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRleHRCb3VuZHMpO1xuXG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICB0aGlzLmJvdW5kcyA9IGJvdW5kcztcbn07XG5cbnZhciBwYXJzZVRleHRCb3VuZHMgPSBleHBvcnRzLnBhcnNlVGV4dEJvdW5kcyA9IGZ1bmN0aW9uIHBhcnNlVGV4dEJvdW5kcyh2YWx1ZSwgcGFyZW50LCBub2RlKSB7XG4gICAgdmFyIGxldHRlclJlbmRlcmluZyA9IHBhcmVudC5zdHlsZS5sZXR0ZXJTcGFjaW5nICE9PSAwO1xuICAgIHZhciB0ZXh0TGlzdCA9IGxldHRlclJlbmRlcmluZyA/ICgwLCBfVW5pY29kZS50b0NvZGVQb2ludHMpKHZhbHVlKS5tYXAoZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfVW5pY29kZS5mcm9tQ29kZVBvaW50KShpKTtcbiAgICB9KSA6ICgwLCBfVW5pY29kZS5icmVha1dvcmRzKSh2YWx1ZSwgcGFyZW50KTtcbiAgICB2YXIgbGVuZ3RoID0gdGV4dExpc3QubGVuZ3RoO1xuICAgIHZhciBkZWZhdWx0VmlldyA9IG5vZGUucGFyZW50Tm9kZSA/IG5vZGUucGFyZW50Tm9kZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3IDogbnVsbDtcbiAgICB2YXIgc2Nyb2xsWCA9IGRlZmF1bHRWaWV3ID8gZGVmYXVsdFZpZXcucGFnZVhPZmZzZXQgOiAwO1xuICAgIHZhciBzY3JvbGxZID0gZGVmYXVsdFZpZXcgPyBkZWZhdWx0Vmlldy5wYWdlWU9mZnNldCA6IDA7XG4gICAgdmFyIHRleHRCb3VuZHMgPSBbXTtcbiAgICB2YXIgb2Zmc2V0ID0gMDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciB0ZXh0ID0gdGV4dExpc3RbaV07XG4gICAgICAgIGlmIChwYXJlbnQuc3R5bGUudGV4dERlY29yYXRpb24gIT09IF90ZXh0RGVjb3JhdGlvbi5URVhUX0RFQ09SQVRJT04uTk9ORSB8fCB0ZXh0LnRyaW0oKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAoX0ZlYXR1cmUyLmRlZmF1bHQuU1VQUE9SVF9SQU5HRV9CT1VORFMpIHtcbiAgICAgICAgICAgICAgICB0ZXh0Qm91bmRzLnB1c2gobmV3IFRleHRCb3VuZHModGV4dCwgZ2V0UmFuZ2VCb3VuZHMobm9kZSwgb2Zmc2V0LCB0ZXh0Lmxlbmd0aCwgc2Nyb2xsWCwgc2Nyb2xsWSkpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlcGxhY2VtZW50Tm9kZSA9IG5vZGUuc3BsaXRUZXh0KHRleHQubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICB0ZXh0Qm91bmRzLnB1c2gobmV3IFRleHRCb3VuZHModGV4dCwgZ2V0V3JhcHBlckJvdW5kcyhub2RlLCBzY3JvbGxYLCBzY3JvbGxZKSkpO1xuICAgICAgICAgICAgICAgIG5vZGUgPSByZXBsYWNlbWVudE5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoIV9GZWF0dXJlMi5kZWZhdWx0LlNVUFBPUlRfUkFOR0VfQk9VTkRTKSB7XG4gICAgICAgICAgICBub2RlID0gbm9kZS5zcGxpdFRleHQodGV4dC5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIG9mZnNldCArPSB0ZXh0Lmxlbmd0aDtcbiAgICB9XG4gICAgcmV0dXJuIHRleHRCb3VuZHM7XG59O1xuXG52YXIgZ2V0V3JhcHBlckJvdW5kcyA9IGZ1bmN0aW9uIGdldFdyYXBwZXJCb3VuZHMobm9kZSwgc2Nyb2xsWCwgc2Nyb2xsWSkge1xuICAgIHZhciB3cmFwcGVyID0gbm9kZS5vd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2h0bWwyY2FudmFzd3JhcHBlcicpO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQobm9kZS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIHZhciBwYXJlbnROb2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgIGlmIChwYXJlbnROb2RlKSB7XG4gICAgICAgIHBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHdyYXBwZXIsIG5vZGUpO1xuICAgICAgICB2YXIgYm91bmRzID0gKDAsIF9Cb3VuZHMucGFyc2VCb3VuZHMpKHdyYXBwZXIsIHNjcm9sbFgsIHNjcm9sbFkpO1xuICAgICAgICBpZiAod3JhcHBlci5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBwYXJlbnROb2RlLnJlcGxhY2VDaGlsZCh3cmFwcGVyLmZpcnN0Q2hpbGQsIHdyYXBwZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib3VuZHM7XG4gICAgfVxuICAgIHJldHVybiBuZXcgX0JvdW5kcy5Cb3VuZHMoMCwgMCwgMCwgMCk7XG59O1xuXG52YXIgZ2V0UmFuZ2VCb3VuZHMgPSBmdW5jdGlvbiBnZXRSYW5nZUJvdW5kcyhub2RlLCBvZmZzZXQsIGxlbmd0aCwgc2Nyb2xsWCwgc2Nyb2xsWSkge1xuICAgIHZhciByYW5nZSA9IG5vZGUub3duZXJEb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICAgIHJhbmdlLnNldFN0YXJ0KG5vZGUsIG9mZnNldCk7XG4gICAgcmFuZ2Uuc2V0RW5kKG5vZGUsIG9mZnNldCArIGxlbmd0aCk7XG4gICAgcmV0dXJuIF9Cb3VuZHMuQm91bmRzLmZyb21DbGllbnRSZWN0KHJhbmdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCBzY3JvbGxYLCBzY3JvbGxZKTtcbn07XG5cbi8qKiovIH0pLFxuLyogMjMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgRm9yZWlnbk9iamVjdFJlbmRlcmVyID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEZvcmVpZ25PYmplY3RSZW5kZXJlcihlbGVtZW50KSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGb3JlaWduT2JqZWN0UmVuZGVyZXIpO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEZvcmVpZ25PYmplY3RSZW5kZXJlciwgW3tcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcihvcHRpb25zKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gTWF0aC5mbG9vcihvcHRpb25zLndpZHRoKSAqIG9wdGlvbnMuc2NhbGU7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBNYXRoLmZsb29yKG9wdGlvbnMuaGVpZ2h0KSAqIG9wdGlvbnMuc2NhbGU7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS53aWR0aCA9IG9wdGlvbnMud2lkdGggKyAncHgnO1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQgKyAncHgnO1xuXG4gICAgICAgICAgICBvcHRpb25zLmxvZ2dlci5sb2coJ0ZvcmVpZ25PYmplY3QgcmVuZGVyZXIgaW5pdGlhbGl6ZWQgKCcgKyBvcHRpb25zLndpZHRoICsgJ3gnICsgb3B0aW9ucy5oZWlnaHQgKyAnIGF0ICcgKyBvcHRpb25zLnggKyAnLCcgKyBvcHRpb25zLnkgKyAnKSB3aXRoIHNjYWxlICcgKyBvcHRpb25zLnNjYWxlKTtcbiAgICAgICAgICAgIHZhciBzdmcgPSBjcmVhdGVGb3JlaWduT2JqZWN0U1ZHKE1hdGgubWF4KG9wdGlvbnMud2luZG93V2lkdGgsIG9wdGlvbnMud2lkdGgpICogb3B0aW9ucy5zY2FsZSwgTWF0aC5tYXgob3B0aW9ucy53aW5kb3dIZWlnaHQsIG9wdGlvbnMuaGVpZ2h0KSAqIG9wdGlvbnMuc2NhbGUsIG9wdGlvbnMuc2Nyb2xsWCAqIG9wdGlvbnMuc2NhbGUsIG9wdGlvbnMuc2Nyb2xsWSAqIG9wdGlvbnMuc2NhbGUsIHRoaXMuZWxlbWVudCk7XG5cbiAgICAgICAgICAgIHJldHVybiBsb2FkU2VyaWFsaXplZFNWRyhzdmcpLnRoZW4oZnVuY3Rpb24gKGltZykge1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmJhY2tncm91bmRDb2xvcikge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jdHguZmlsbFN0eWxlID0gb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIG9wdGlvbnMud2lkdGggKiBvcHRpb25zLnNjYWxlLCBvcHRpb25zLmhlaWdodCAqIG9wdGlvbnMuc2NhbGUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF90aGlzLmN0eC5kcmF3SW1hZ2UoaW1nLCAtb3B0aW9ucy54ICogb3B0aW9ucy5zY2FsZSwgLW9wdGlvbnMueSAqIG9wdGlvbnMuc2NhbGUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5jYW52YXM7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBGb3JlaWduT2JqZWN0UmVuZGVyZXI7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEZvcmVpZ25PYmplY3RSZW5kZXJlcjtcbnZhciBjcmVhdGVGb3JlaWduT2JqZWN0U1ZHID0gZXhwb3J0cy5jcmVhdGVGb3JlaWduT2JqZWN0U1ZHID0gZnVuY3Rpb24gY3JlYXRlRm9yZWlnbk9iamVjdFNWRyh3aWR0aCwgaGVpZ2h0LCB4LCB5LCBub2RlKSB7XG4gICAgdmFyIHhtbG5zID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcbiAgICB2YXIgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHhtbG5zLCAnc3ZnJyk7XG4gICAgdmFyIGZvcmVpZ25PYmplY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoeG1sbnMsICdmb3JlaWduT2JqZWN0Jyk7XG4gICAgc3ZnLnNldEF0dHJpYnV0ZU5TKG51bGwsICd3aWR0aCcsIHdpZHRoKTtcbiAgICBzdmcuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2hlaWdodCcsIGhlaWdodCk7XG5cbiAgICBmb3JlaWduT2JqZWN0LnNldEF0dHJpYnV0ZU5TKG51bGwsICd3aWR0aCcsICcxMDAlJyk7XG4gICAgZm9yZWlnbk9iamVjdC5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnaGVpZ2h0JywgJzEwMCUnKTtcbiAgICBmb3JlaWduT2JqZWN0LnNldEF0dHJpYnV0ZU5TKG51bGwsICd4JywgeCk7XG4gICAgZm9yZWlnbk9iamVjdC5zZXRBdHRyaWJ1dGVOUyhudWxsLCAneScsIHkpO1xuICAgIGZvcmVpZ25PYmplY3Quc2V0QXR0cmlidXRlTlMobnVsbCwgJ2V4dGVybmFsUmVzb3VyY2VzUmVxdWlyZWQnLCAndHJ1ZScpO1xuICAgIHN2Zy5hcHBlbmRDaGlsZChmb3JlaWduT2JqZWN0KTtcblxuICAgIGZvcmVpZ25PYmplY3QuYXBwZW5kQ2hpbGQobm9kZSk7XG5cbiAgICByZXR1cm4gc3ZnO1xufTtcblxudmFyIGxvYWRTZXJpYWxpemVkU1ZHID0gZXhwb3J0cy5sb2FkU2VyaWFsaXplZFNWRyA9IGZ1bmN0aW9uIGxvYWRTZXJpYWxpemVkU1ZHKHN2Zykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGltZyk7XG4gICAgICAgIH07XG4gICAgICAgIGltZy5vbmVycm9yID0gcmVqZWN0O1xuXG4gICAgICAgIGltZy5zcmMgPSAnZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsJyArIGVuY29kZVVSSUNvbXBvbmVudChuZXcgWE1MU2VyaWFsaXplcigpLnNlcmlhbGl6ZVRvU3RyaW5nKHN2ZykpO1xuICAgIH0pO1xufTtcblxuLyoqKi8gfSksXG4vKiAyNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmJyZWFrV29yZHMgPSBleHBvcnRzLmZyb21Db2RlUG9pbnQgPSBleHBvcnRzLnRvQ29kZVBvaW50cyA9IHVuZGVmaW5lZDtcblxudmFyIF9jc3NMaW5lQnJlYWsgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ2KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd0b0NvZGVQb2ludHMnLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIF9jc3NMaW5lQnJlYWsudG9Db2RlUG9pbnRzO1xuICAgIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdmcm9tQ29kZVBvaW50Jywge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBfY3NzTGluZUJyZWFrLmZyb21Db2RlUG9pbnQ7XG4gICAgfVxufSk7XG5cbnZhciBfTm9kZUNvbnRhaW5lciA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cbnZhciBfTm9kZUNvbnRhaW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ob2RlQ29udGFpbmVyKTtcblxudmFyIF9vdmVyZmxvd1dyYXAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE4KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGJyZWFrV29yZHMgPSBleHBvcnRzLmJyZWFrV29yZHMgPSBmdW5jdGlvbiBicmVha1dvcmRzKHN0ciwgcGFyZW50KSB7XG4gICAgdmFyIGJyZWFrZXIgPSAoMCwgX2Nzc0xpbmVCcmVhay5MaW5lQnJlYWtlcikoc3RyLCB7XG4gICAgICAgIGxpbmVCcmVhazogcGFyZW50LnN0eWxlLmxpbmVCcmVhayxcbiAgICAgICAgd29yZEJyZWFrOiBwYXJlbnQuc3R5bGUub3ZlcmZsb3dXcmFwID09PSBfb3ZlcmZsb3dXcmFwLk9WRVJGTE9XX1dSQVAuQlJFQUtfV09SRCA/ICdicmVhay13b3JkJyA6IHBhcmVudC5zdHlsZS53b3JkQnJlYWtcbiAgICB9KTtcblxuICAgIHZhciB3b3JkcyA9IFtdO1xuICAgIHZhciBiayA9IHZvaWQgMDtcblxuICAgIHdoaWxlICghKGJrID0gYnJlYWtlci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgd29yZHMucHVzaChiay52YWx1ZS5zbGljZSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd29yZHM7XG59O1xuXG4vKioqLyB9KSxcbi8qIDI1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuRm9udE1ldHJpY3MgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfVXRpbCA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBTQU1QTEVfVEVYVCA9ICdIaWRkZW4gVGV4dCc7XG5cbnZhciBGb250TWV0cmljcyA9IGV4cG9ydHMuRm9udE1ldHJpY3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRm9udE1ldHJpY3MoZG9jdW1lbnQpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZvbnRNZXRyaWNzKTtcblxuICAgICAgICB0aGlzLl9kYXRhID0ge307XG4gICAgICAgIHRoaXMuX2RvY3VtZW50ID0gZG9jdW1lbnQ7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEZvbnRNZXRyaWNzLCBbe1xuICAgICAgICBrZXk6ICdfcGFyc2VNZXRyaWNzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9wYXJzZU1ldHJpY3MoZm9udCkge1xuICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IHRoaXMuX2RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdmFyIGltZyA9IHRoaXMuX2RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgdmFyIHNwYW4gPSB0aGlzLl9kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICAgICAgICAgIHZhciBib2R5ID0gdGhpcy5fZG9jdW1lbnQuYm9keTtcbiAgICAgICAgICAgIGlmICghYm9keSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciggdHJ1ZSA/ICdObyBkb2N1bWVudCBmb3VuZCBmb3IgZm9udCBtZXRyaWNzJyA6ICcnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5mb250RmFtaWx5ID0gZm9udC5mb250RmFtaWx5O1xuICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLmZvbnRTaXplID0gZm9udC5mb250U2l6ZTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5tYXJnaW4gPSAnMCc7XG4gICAgICAgICAgICBjb250YWluZXIuc3R5bGUucGFkZGluZyA9ICcwJztcblxuICAgICAgICAgICAgYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgICAgICAgICBpbWcuc3JjID0gX1V0aWwuU01BTExfSU1BR0U7XG4gICAgICAgICAgICBpbWcud2lkdGggPSAxO1xuICAgICAgICAgICAgaW1nLmhlaWdodCA9IDE7XG5cbiAgICAgICAgICAgIGltZy5zdHlsZS5tYXJnaW4gPSAnMCc7XG4gICAgICAgICAgICBpbWcuc3R5bGUucGFkZGluZyA9ICcwJztcbiAgICAgICAgICAgIGltZy5zdHlsZS52ZXJ0aWNhbEFsaWduID0gJ2Jhc2VsaW5lJztcblxuICAgICAgICAgICAgc3Bhbi5zdHlsZS5mb250RmFtaWx5ID0gZm9udC5mb250RmFtaWx5O1xuICAgICAgICAgICAgc3Bhbi5zdHlsZS5mb250U2l6ZSA9IGZvbnQuZm9udFNpemU7XG4gICAgICAgICAgICBzcGFuLnN0eWxlLm1hcmdpbiA9ICcwJztcbiAgICAgICAgICAgIHNwYW4uc3R5bGUucGFkZGluZyA9ICcwJztcblxuICAgICAgICAgICAgc3Bhbi5hcHBlbmRDaGlsZCh0aGlzLl9kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShTQU1QTEVfVEVYVCkpO1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltZyk7XG4gICAgICAgICAgICB2YXIgYmFzZWxpbmUgPSBpbWcub2Zmc2V0VG9wIC0gc3Bhbi5vZmZzZXRUb3AgKyAyO1xuXG4gICAgICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoc3Bhbik7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5fZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoU0FNUExFX1RFWFQpKTtcblxuICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLmxpbmVIZWlnaHQgPSAnbm9ybWFsJztcbiAgICAgICAgICAgIGltZy5zdHlsZS52ZXJ0aWNhbEFsaWduID0gJ3N1cGVyJztcblxuICAgICAgICAgICAgdmFyIG1pZGRsZSA9IGltZy5vZmZzZXRUb3AgLSBjb250YWluZXIub2Zmc2V0VG9wICsgMjtcblxuICAgICAgICAgICAgYm9keS5yZW1vdmVDaGlsZChjb250YWluZXIpO1xuXG4gICAgICAgICAgICByZXR1cm4geyBiYXNlbGluZTogYmFzZWxpbmUsIG1pZGRsZTogbWlkZGxlIH07XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldE1ldHJpY3MnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TWV0cmljcyhmb250KSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gZm9udC5mb250RmFtaWx5ICsgJyAnICsgZm9udC5mb250U2l6ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9kYXRhW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2RhdGFba2V5XSA9IHRoaXMuX3BhcnNlTWV0cmljcyhmb250KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFba2V5XTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBGb250TWV0cmljcztcbn0oKTtcblxuLyoqKi8gfSksXG4vKiAyNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlByb3h5ID0gdW5kZWZpbmVkO1xuXG52YXIgX0ZlYXR1cmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKTtcblxudmFyIF9GZWF0dXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ZlYXR1cmUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgUHJveHkgPSBleHBvcnRzLlByb3h5ID0gZnVuY3Rpb24gUHJveHkoc3JjLCBvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zLnByb3h5KSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCggdHJ1ZSA/ICdObyBwcm94eSBkZWZpbmVkJyA6IG51bGwpO1xuICAgIH1cbiAgICB2YXIgcHJveHkgPSBvcHRpb25zLnByb3h5O1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIHJlc3BvbnNlVHlwZSA9IF9GZWF0dXJlMi5kZWZhdWx0LlNVUFBPUlRfQ09SU19YSFIgJiYgX0ZlYXR1cmUyLmRlZmF1bHQuU1VQUE9SVF9SRVNQT05TRV9UWVBFID8gJ2Jsb2InIDogJ3RleHQnO1xuICAgICAgICB2YXIgeGhyID0gX0ZlYXR1cmUyLmRlZmF1bHQuU1VQUE9SVF9DT1JTX1hIUiA/IG5ldyBYTUxIdHRwUmVxdWVzdCgpIDogbmV3IFhEb21haW5SZXF1ZXN0KCk7XG4gICAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoeGhyIGluc3RhbmNlb2YgWE1MSHR0cFJlcXVlc3QpIHtcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZVR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh4aHIucmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShyZWFkZXIucmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKHhoci5yZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoIHRydWUgPyAnRmFpbGVkIHRvIHByb3h5IHJlc291cmNlICcgKyBzcmMuc3Vic3RyaW5nKDAsIDI1NikgKyAnIHdpdGggc3RhdHVzIGNvZGUgJyArIHhoci5zdGF0dXMgOiAnJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHhoci5vbmVycm9yID0gcmVqZWN0O1xuICAgICAgICB4aHIub3BlbignR0VUJywgcHJveHkgKyAnP3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHNyYykgKyAnJnJlc3BvbnNlVHlwZT0nICsgcmVzcG9uc2VUeXBlKTtcblxuICAgICAgICBpZiAocmVzcG9uc2VUeXBlICE9PSAndGV4dCcgJiYgeGhyIGluc3RhbmNlb2YgWE1MSHR0cFJlcXVlc3QpIHtcbiAgICAgICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSByZXNwb25zZVR5cGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5pbWFnZVRpbWVvdXQpIHtcbiAgICAgICAgICAgIHZhciB0aW1lb3V0ID0gb3B0aW9ucy5pbWFnZVRpbWVvdXQ7XG4gICAgICAgICAgICB4aHIudGltZW91dCA9IHRpbWVvdXQ7XG4gICAgICAgICAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoIHRydWUgPyAnVGltZWQgb3V0ICgnICsgdGltZW91dCArICdtcykgcHJveHlpbmcgJyArIHNyYy5zdWJzdHJpbmcoMCwgMjU2KSA6ICcnKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICB4aHIuc2VuZCgpO1xuICAgIH0pO1xufTtcblxuLyoqKi8gfSksXG4vKiAyNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX0NhbnZhc1JlbmRlcmVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNSk7XG5cbnZhciBfQ2FudmFzUmVuZGVyZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ2FudmFzUmVuZGVyZXIpO1xuXG52YXIgX0xvZ2dlciA9IF9fd2VicGFja19yZXF1aXJlX18oMTYpO1xuXG52YXIgX0xvZ2dlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Mb2dnZXIpO1xuXG52YXIgX1dpbmRvdyA9IF9fd2VicGFja19yZXF1aXJlX18oMjgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgaHRtbDJjYW52YXMgPSBmdW5jdGlvbiBodG1sMmNhbnZhcyhlbGVtZW50LCBjb25mKSB7XG4gICAgdmFyIGNvbmZpZyA9IGNvbmYgfHwge307XG4gICAgdmFyIGxvZ2dlciA9IG5ldyBfTG9nZ2VyMi5kZWZhdWx0KHR5cGVvZiBjb25maWcubG9nZ2luZyA9PT0gJ2Jvb2xlYW4nID8gY29uZmlnLmxvZ2dpbmcgOiB0cnVlKTtcbiAgICBsb2dnZXIubG9nKCdodG1sMmNhbnZhcyAnICsgXCIxLjAuMC1hbHBoYS4xMlwiKTtcblxuICAgIGlmICh0cnVlICYmIHR5cGVvZiBjb25maWcub25yZW5kZXJlZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBsb2dnZXIuZXJyb3IoJ29ucmVuZGVyZWQgb3B0aW9uIGlzIGRlcHJlY2F0ZWQsIGh0bWwyY2FudmFzIHJldHVybnMgYSBQcm9taXNlIHdpdGggdGhlIGNhbnZhcyBhcyB0aGUgdmFsdWUnKTtcbiAgICB9XG5cbiAgICB2YXIgb3duZXJEb2N1bWVudCA9IGVsZW1lbnQub3duZXJEb2N1bWVudDtcbiAgICBpZiAoIW93bmVyRG9jdW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCdQcm92aWRlZCBlbGVtZW50IGlzIG5vdCB3aXRoaW4gYSBEb2N1bWVudCcpO1xuICAgIH1cbiAgICB2YXIgZGVmYXVsdFZpZXcgPSBvd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuXG4gICAgdmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgYWxsb3dUYWludDogZmFsc2UsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICBpbWFnZVRpbWVvdXQ6IDE1MDAwLFxuICAgICAgICBsb2dnaW5nOiB0cnVlLFxuICAgICAgICBwcm94eTogbnVsbCxcbiAgICAgICAgcmVtb3ZlQ29udGFpbmVyOiB0cnVlLFxuICAgICAgICBmb3JlaWduT2JqZWN0UmVuZGVyaW5nOiBmYWxzZSxcbiAgICAgICAgc2NhbGU6IGRlZmF1bHRWaWV3LmRldmljZVBpeGVsUmF0aW8gfHwgMSxcbiAgICAgICAgdGFyZ2V0OiBuZXcgX0NhbnZhc1JlbmRlcmVyMi5kZWZhdWx0KGNvbmZpZy5jYW52YXMpLFxuICAgICAgICB1c2VDT1JTOiBmYWxzZSxcbiAgICAgICAgd2luZG93V2lkdGg6IGRlZmF1bHRWaWV3LmlubmVyV2lkdGgsXG4gICAgICAgIHdpbmRvd0hlaWdodDogZGVmYXVsdFZpZXcuaW5uZXJIZWlnaHQsXG4gICAgICAgIHNjcm9sbFg6IGRlZmF1bHRWaWV3LnBhZ2VYT2Zmc2V0LFxuICAgICAgICBzY3JvbGxZOiBkZWZhdWx0Vmlldy5wYWdlWU9mZnNldFxuICAgIH07XG5cbiAgICB2YXIgcmVzdWx0ID0gKDAsIF9XaW5kb3cucmVuZGVyRWxlbWVudCkoZWxlbWVudCwgX2V4dGVuZHMoe30sIGRlZmF1bHRPcHRpb25zLCBjb25maWcpLCBsb2dnZXIpO1xuXG4gICAgaWYgKHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgbG9nZ2VyLmVycm9yKGUpO1xuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5odG1sMmNhbnZhcy5DYW52YXNSZW5kZXJlciA9IF9DYW52YXNSZW5kZXJlcjIuZGVmYXVsdDtcblxubW9kdWxlLmV4cG9ydHMgPSBodG1sMmNhbnZhcztcblxuLyoqKi8gfSksXG4vKiAyOCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlbmRlckVsZW1lbnQgPSB1bmRlZmluZWQ7XG5cbnZhciBfc2xpY2VkVG9BcnJheSA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0pIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfSByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IHJldHVybiBhcnI7IH0gZWxzZSBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSB7IHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7IH0gZWxzZSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9IH07IH0oKTtcblxudmFyIF9Mb2dnZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2KTtcblxudmFyIF9Mb2dnZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTG9nZ2VyKTtcblxudmFyIF9Ob2RlUGFyc2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXygyOSk7XG5cbnZhciBfUmVuZGVyZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUxKTtcblxudmFyIF9SZW5kZXJlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9SZW5kZXJlcik7XG5cbnZhciBfRm9yZWlnbk9iamVjdFJlbmRlcmVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMyk7XG5cbnZhciBfRm9yZWlnbk9iamVjdFJlbmRlcmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ZvcmVpZ25PYmplY3RSZW5kZXJlcik7XG5cbnZhciBfRmVhdHVyZSA9IF9fd2VicGFja19yZXF1aXJlX18oMTApO1xuXG52YXIgX0ZlYXR1cmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRmVhdHVyZSk7XG5cbnZhciBfQm91bmRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxudmFyIF9DbG9uZSA9IF9fd2VicGFja19yZXF1aXJlX18oNTQpO1xuXG52YXIgX0ZvbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI1KTtcblxudmFyIF9Db2xvciA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBfQ29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29sb3IpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgcmVuZGVyRWxlbWVudCA9IGV4cG9ydHMucmVuZGVyRWxlbWVudCA9IGZ1bmN0aW9uIHJlbmRlckVsZW1lbnQoZWxlbWVudCwgb3B0aW9ucywgbG9nZ2VyKSB7XG4gICAgdmFyIG93bmVyRG9jdW1lbnQgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQ7XG5cbiAgICB2YXIgd2luZG93Qm91bmRzID0gbmV3IF9Cb3VuZHMuQm91bmRzKG9wdGlvbnMuc2Nyb2xsWCwgb3B0aW9ucy5zY3JvbGxZLCBvcHRpb25zLndpbmRvd1dpZHRoLCBvcHRpb25zLndpbmRvd0hlaWdodCk7XG5cbiAgICAvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9jc3MzLWJhY2tncm91bmQvI3NwZWNpYWwtYmFja2dyb3VuZHNcbiAgICB2YXIgZG9jdW1lbnRCYWNrZ3JvdW5kQ29sb3IgPSBvd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCA/IG5ldyBfQ29sb3IyLmRlZmF1bHQoZ2V0Q29tcHV0ZWRTdHlsZShvd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuYmFja2dyb3VuZENvbG9yKSA6IF9Db2xvci5UUkFOU1BBUkVOVDtcbiAgICB2YXIgYm9keUJhY2tncm91bmRDb2xvciA9IG93bmVyRG9jdW1lbnQuYm9keSA/IG5ldyBfQ29sb3IyLmRlZmF1bHQoZ2V0Q29tcHV0ZWRTdHlsZShvd25lckRvY3VtZW50LmJvZHkpLmJhY2tncm91bmRDb2xvcikgOiBfQ29sb3IuVFJBTlNQQVJFTlQ7XG5cbiAgICB2YXIgYmFja2dyb3VuZENvbG9yID0gZWxlbWVudCA9PT0gb3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgPyBkb2N1bWVudEJhY2tncm91bmRDb2xvci5pc1RyYW5zcGFyZW50KCkgPyBib2R5QmFja2dyb3VuZENvbG9yLmlzVHJhbnNwYXJlbnQoKSA/IG9wdGlvbnMuYmFja2dyb3VuZENvbG9yID8gbmV3IF9Db2xvcjIuZGVmYXVsdChvcHRpb25zLmJhY2tncm91bmRDb2xvcikgOiBudWxsIDogYm9keUJhY2tncm91bmRDb2xvciA6IGRvY3VtZW50QmFja2dyb3VuZENvbG9yIDogb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IgPyBuZXcgX0NvbG9yMi5kZWZhdWx0KG9wdGlvbnMuYmFja2dyb3VuZENvbG9yKSA6IG51bGw7XG5cbiAgICByZXR1cm4gKG9wdGlvbnMuZm9yZWlnbk9iamVjdFJlbmRlcmluZyA/IC8vICRGbG93Rml4TWVcbiAgICBfRmVhdHVyZTIuZGVmYXVsdC5TVVBQT1JUX0ZPUkVJR05PQkpFQ1RfRFJBV0lORyA6IFByb21pc2UucmVzb2x2ZShmYWxzZSkpLnRoZW4oZnVuY3Rpb24gKHN1cHBvcnRGb3JlaWduT2JqZWN0KSB7XG4gICAgICAgIHJldHVybiBzdXBwb3J0Rm9yZWlnbk9iamVjdCA/IGZ1bmN0aW9uIChjbG9uZXIpIHtcbiAgICAgICAgICAgIGlmICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmxvZygnRG9jdW1lbnQgY2xvbmVkLCB1c2luZyBmb3JlaWduT2JqZWN0IHJlbmRlcmluZycpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY2xvbmVyLmlubGluZUZvbnRzKG93bmVyRG9jdW1lbnQpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjbG9uZXIucmVzb3VyY2VMb2FkZXIucmVhZHkoKTtcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciByZW5kZXJlciA9IG5ldyBfRm9yZWlnbk9iamVjdFJlbmRlcmVyMi5kZWZhdWx0KGNsb25lci5kb2N1bWVudEVsZW1lbnQpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGRlZmF1bHRWaWV3ID0gb3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcbiAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsWCA9IGRlZmF1bHRWaWV3LnBhZ2VYT2Zmc2V0O1xuICAgICAgICAgICAgICAgIHZhciBzY3JvbGxZID0gZGVmYXVsdFZpZXcucGFnZVlPZmZzZXQ7XG5cbiAgICAgICAgICAgICAgICB2YXIgaXNEb2N1bWVudCA9IGVsZW1lbnQudGFnTmFtZSA9PT0gJ0hUTUwnIHx8IGVsZW1lbnQudGFnTmFtZSA9PT0gJ0JPRFknO1xuXG4gICAgICAgICAgICAgICAgdmFyIF9yZWYgPSBpc0RvY3VtZW50ID8gKDAsIF9Cb3VuZHMucGFyc2VEb2N1bWVudFNpemUpKG93bmVyRG9jdW1lbnQpIDogKDAsIF9Cb3VuZHMucGFyc2VCb3VuZHMpKGVsZW1lbnQsIHNjcm9sbFgsIHNjcm9sbFkpLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IF9yZWYud2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IF9yZWYuaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gX3JlZi5sZWZ0LFxuICAgICAgICAgICAgICAgICAgICB0b3AgPSBfcmVmLnRvcDtcblxuICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJlci5yZW5kZXIoe1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJhY2tncm91bmRDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyOiBsb2dnZXIsXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlOiBvcHRpb25zLnNjYWxlLFxuICAgICAgICAgICAgICAgICAgICB4OiB0eXBlb2Ygb3B0aW9ucy54ID09PSAnbnVtYmVyJyA/IG9wdGlvbnMueCA6IGxlZnQsXG4gICAgICAgICAgICAgICAgICAgIHk6IHR5cGVvZiBvcHRpb25zLnkgPT09ICdudW1iZXInID8gb3B0aW9ucy55IDogdG9wLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdHlwZW9mIG9wdGlvbnMud2lkdGggPT09ICdudW1iZXInID8gb3B0aW9ucy53aWR0aCA6IE1hdGguY2VpbCh3aWR0aCksXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogdHlwZW9mIG9wdGlvbnMuaGVpZ2h0ID09PSAnbnVtYmVyJyA/IG9wdGlvbnMuaGVpZ2h0IDogTWF0aC5jZWlsKGhlaWdodCksXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvd1dpZHRoOiBvcHRpb25zLndpbmRvd1dpZHRoLFxuICAgICAgICAgICAgICAgICAgICB3aW5kb3dIZWlnaHQ6IG9wdGlvbnMud2luZG93SGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxYOiBvcHRpb25zLnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFk6IG9wdGlvbnMuc2Nyb2xsWVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0obmV3IF9DbG9uZS5Eb2N1bWVudENsb25lcihlbGVtZW50LCBvcHRpb25zLCBsb2dnZXIsIHRydWUsIHJlbmRlckVsZW1lbnQpKSA6ICgwLCBfQ2xvbmUuY2xvbmVXaW5kb3cpKG93bmVyRG9jdW1lbnQsIHdpbmRvd0JvdW5kcywgZWxlbWVudCwgb3B0aW9ucywgbG9nZ2VyLCByZW5kZXJFbGVtZW50KS50aGVuKGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgICAgICAgdmFyIF9yZWYzID0gX3NsaWNlZFRvQXJyYXkoX3JlZjIsIDMpLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5lciA9IF9yZWYzWzBdLFxuICAgICAgICAgICAgICAgIGNsb25lZEVsZW1lbnQgPSBfcmVmM1sxXSxcbiAgICAgICAgICAgICAgICByZXNvdXJjZUxvYWRlciA9IF9yZWYzWzJdO1xuXG4gICAgICAgICAgICBpZiAodHJ1ZSkge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5sb2coJ0RvY3VtZW50IGNsb25lZCwgdXNpbmcgY29tcHV0ZWQgcmVuZGVyaW5nJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBzdGFjayA9ICgwLCBfTm9kZVBhcnNlci5Ob2RlUGFyc2VyKShjbG9uZWRFbGVtZW50LCByZXNvdXJjZUxvYWRlciwgbG9nZ2VyKTtcbiAgICAgICAgICAgIHZhciBjbG9uZWREb2N1bWVudCA9IGNsb25lZEVsZW1lbnQub3duZXJEb2N1bWVudDtcblxuICAgICAgICAgICAgaWYgKGJhY2tncm91bmRDb2xvciA9PT0gc3RhY2suY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmQuYmFja2dyb3VuZENvbG9yKSB7XG4gICAgICAgICAgICAgICAgc3RhY2suY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmQuYmFja2dyb3VuZENvbG9yID0gX0NvbG9yLlRSQU5TUEFSRU5UO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVzb3VyY2VMb2FkZXIucmVhZHkoKS50aGVuKGZ1bmN0aW9uIChpbWFnZVN0b3JlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZvbnRNZXRyaWNzID0gbmV3IF9Gb250LkZvbnRNZXRyaWNzKGNsb25lZERvY3VtZW50KTtcbiAgICAgICAgICAgICAgICBpZiAodHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIubG9nKCdTdGFydGluZyByZW5kZXJlcicpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBkZWZhdWx0VmlldyA9IGNsb25lZERvY3VtZW50LmRlZmF1bHRWaWV3O1xuICAgICAgICAgICAgICAgIHZhciBzY3JvbGxYID0gZGVmYXVsdFZpZXcucGFnZVhPZmZzZXQ7XG4gICAgICAgICAgICAgICAgdmFyIHNjcm9sbFkgPSBkZWZhdWx0Vmlldy5wYWdlWU9mZnNldDtcblxuICAgICAgICAgICAgICAgIHZhciBpc0RvY3VtZW50ID0gY2xvbmVkRWxlbWVudC50YWdOYW1lID09PSAnSFRNTCcgfHwgY2xvbmVkRWxlbWVudC50YWdOYW1lID09PSAnQk9EWSc7XG5cbiAgICAgICAgICAgICAgICB2YXIgX3JlZjQgPSBpc0RvY3VtZW50ID8gKDAsIF9Cb3VuZHMucGFyc2VEb2N1bWVudFNpemUpKG93bmVyRG9jdW1lbnQpIDogKDAsIF9Cb3VuZHMucGFyc2VCb3VuZHMpKGNsb25lZEVsZW1lbnQsIHNjcm9sbFgsIHNjcm9sbFkpLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IF9yZWY0LndpZHRoLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPSBfcmVmNC5oZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSBfcmVmNC5sZWZ0LFxuICAgICAgICAgICAgICAgICAgICB0b3AgPSBfcmVmNC50b3A7XG5cbiAgICAgICAgICAgICAgICB2YXIgcmVuZGVyT3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBiYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRNZXRyaWNzOiBmb250TWV0cmljcyxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VTdG9yZTogaW1hZ2VTdG9yZSxcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyOiBsb2dnZXIsXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlOiBvcHRpb25zLnNjYWxlLFxuICAgICAgICAgICAgICAgICAgICB4OiB0eXBlb2Ygb3B0aW9ucy54ID09PSAnbnVtYmVyJyA/IG9wdGlvbnMueCA6IGxlZnQsXG4gICAgICAgICAgICAgICAgICAgIHk6IHR5cGVvZiBvcHRpb25zLnkgPT09ICdudW1iZXInID8gb3B0aW9ucy55IDogdG9wLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdHlwZW9mIG9wdGlvbnMud2lkdGggPT09ICdudW1iZXInID8gb3B0aW9ucy53aWR0aCA6IE1hdGguY2VpbCh3aWR0aCksXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogdHlwZW9mIG9wdGlvbnMuaGVpZ2h0ID09PSAnbnVtYmVyJyA/IG9wdGlvbnMuaGVpZ2h0IDogTWF0aC5jZWlsKGhlaWdodClcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucy50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChvcHRpb25zLnRhcmdldC5tYXAoZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlbmRlcmVyID0gbmV3IF9SZW5kZXJlcjIuZGVmYXVsdCh0YXJnZXQsIHJlbmRlck9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlcmVyLnJlbmRlcihzdGFjayk7XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVuZGVyZXIgPSBuZXcgX1JlbmRlcmVyMi5kZWZhdWx0KG9wdGlvbnMudGFyZ2V0LCByZW5kZXJPcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhbnZhcyA9IHJlbmRlcmVyLnJlbmRlcihzdGFjayk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnJlbW92ZUNvbnRhaW5lciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5lci5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlci5sb2coJ0Nhbm5vdCBkZXRhY2ggY2xvbmVkIGlmcmFtZSBhcyBpdCBpcyBub3QgaW4gdGhlIERPTSBhbnltb3JlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FudmFzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG5cbi8qKiovIH0pLFxuLyogMjkgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5Ob2RlUGFyc2VyID0gdW5kZWZpbmVkO1xuXG52YXIgX1N0YWNraW5nQ29udGV4dCA9IF9fd2VicGFja19yZXF1aXJlX18oMzApO1xuXG52YXIgX1N0YWNraW5nQ29udGV4dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TdGFja2luZ0NvbnRleHQpO1xuXG52YXIgX05vZGVDb250YWluZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXG52YXIgX05vZGVDb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTm9kZUNvbnRhaW5lcik7XG5cbnZhciBfVGV4dENvbnRhaW5lciA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG5cbnZhciBfVGV4dENvbnRhaW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UZXh0Q29udGFpbmVyKTtcblxudmFyIF9JbnB1dCA9IF9fd2VicGFja19yZXF1aXJlX18oMjEpO1xuXG52YXIgX0xpc3RJdGVtID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNCk7XG5cbnZhciBfbGlzdFN0eWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIE5vZGVQYXJzZXIgPSBleHBvcnRzLk5vZGVQYXJzZXIgPSBmdW5jdGlvbiBOb2RlUGFyc2VyKG5vZGUsIHJlc291cmNlTG9hZGVyLCBsb2dnZXIpIHtcbiAgICBpZiAodHJ1ZSkge1xuICAgICAgICBsb2dnZXIubG9nKCdTdGFydGluZyBub2RlIHBhcnNpbmcnKTtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSAwO1xuXG4gICAgdmFyIGNvbnRhaW5lciA9IG5ldyBfTm9kZUNvbnRhaW5lcjIuZGVmYXVsdChub2RlLCBudWxsLCByZXNvdXJjZUxvYWRlciwgaW5kZXgrKyk7XG4gICAgdmFyIHN0YWNrID0gbmV3IF9TdGFja2luZ0NvbnRleHQyLmRlZmF1bHQoY29udGFpbmVyLCBudWxsLCB0cnVlKTtcblxuICAgIHBhcnNlTm9kZVRyZWUobm9kZSwgY29udGFpbmVyLCBzdGFjaywgcmVzb3VyY2VMb2FkZXIsIGluZGV4KTtcblxuICAgIGlmICh0cnVlKSB7XG4gICAgICAgIGxvZ2dlci5sb2coJ0ZpbmlzaGVkIHBhcnNpbmcgbm9kZSB0cmVlJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YWNrO1xufTtcblxudmFyIElHTk9SRURfTk9ERV9OQU1FUyA9IFsnU0NSSVBUJywgJ0hFQUQnLCAnVElUTEUnLCAnT0JKRUNUJywgJ0JSJywgJ09QVElPTiddO1xuXG52YXIgcGFyc2VOb2RlVHJlZSA9IGZ1bmN0aW9uIHBhcnNlTm9kZVRyZWUobm9kZSwgcGFyZW50LCBzdGFjaywgcmVzb3VyY2VMb2FkZXIsIGluZGV4KSB7XG4gICAgaWYgKHRydWUgJiYgaW5kZXggPiA1MDAwMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlY3Vyc2lvbiBlcnJvciB3aGlsZSBwYXJzaW5nIG5vZGUgdHJlZScpO1xuICAgIH1cblxuICAgIGZvciAodmFyIGNoaWxkTm9kZSA9IG5vZGUuZmlyc3RDaGlsZCwgbmV4dE5vZGU7IGNoaWxkTm9kZTsgY2hpbGROb2RlID0gbmV4dE5vZGUpIHtcbiAgICAgICAgbmV4dE5vZGUgPSBjaGlsZE5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgIHZhciBkZWZhdWx0VmlldyA9IGNoaWxkTm9kZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuICAgICAgICBpZiAoY2hpbGROb2RlIGluc3RhbmNlb2YgZGVmYXVsdFZpZXcuVGV4dCB8fCBjaGlsZE5vZGUgaW5zdGFuY2VvZiBUZXh0IHx8IGRlZmF1bHRWaWV3LnBhcmVudCAmJiBjaGlsZE5vZGUgaW5zdGFuY2VvZiBkZWZhdWx0Vmlldy5wYXJlbnQuVGV4dCkge1xuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZS5kYXRhLnRyaW0oKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50LmNoaWxkTm9kZXMucHVzaChfVGV4dENvbnRhaW5lcjIuZGVmYXVsdC5mcm9tVGV4dE5vZGUoY2hpbGROb2RlLCBwYXJlbnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjaGlsZE5vZGUgaW5zdGFuY2VvZiBkZWZhdWx0Vmlldy5IVE1MRWxlbWVudCB8fCBjaGlsZE5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBkZWZhdWx0Vmlldy5wYXJlbnQgJiYgY2hpbGROb2RlIGluc3RhbmNlb2YgZGVmYXVsdFZpZXcucGFyZW50LkhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAoSUdOT1JFRF9OT0RFX05BTUVTLmluZGV4T2YoY2hpbGROb2RlLm5vZGVOYW1lKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29udGFpbmVyID0gbmV3IF9Ob2RlQ29udGFpbmVyMi5kZWZhdWx0KGNoaWxkTm9kZSwgcGFyZW50LCByZXNvdXJjZUxvYWRlciwgaW5kZXgrKyk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5lci5pc1Zpc2libGUoKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGROb2RlLnRhZ05hbWUgPT09ICdJTlBVVCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgICAgICAgICAgICAgICAgICAgICgwLCBfSW5wdXQuaW5saW5lSW5wdXRFbGVtZW50KShjaGlsZE5vZGUsIGNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hpbGROb2RlLnRhZ05hbWUgPT09ICdURVhUQVJFQScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgICAgICAgICAgICAgICAgICAgICgwLCBfSW5wdXQuaW5saW5lVGV4dEFyZWFFbGVtZW50KShjaGlsZE5vZGUsIGNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hpbGROb2RlLnRhZ05hbWUgPT09ICdTRUxFQ1QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICAgICAgICAgICAgICAgICAgICAoMCwgX0lucHV0LmlubGluZVNlbGVjdEVsZW1lbnQpKGNoaWxkTm9kZSwgY29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb250YWluZXIuc3R5bGUubGlzdFN0eWxlICYmIGNvbnRhaW5lci5zdHlsZS5saXN0U3R5bGUubGlzdFN0eWxlVHlwZSAhPT0gX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuTk9ORSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgKDAsIF9MaXN0SXRlbS5pbmxpbmVMaXN0SXRlbUVsZW1lbnQpKGNoaWxkTm9kZSwgY29udGFpbmVyLCByZXNvdXJjZUxvYWRlcik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB2YXIgU0hPVUxEX1RSQVZFUlNFX0NISUxEUkVOID0gY2hpbGROb2RlLnRhZ05hbWUgIT09ICdURVhUQVJFQSc7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0cmVhdEFzUmVhbFN0YWNraW5nQ29udGV4dCA9IGNyZWF0ZXNSZWFsU3RhY2tpbmdDb250ZXh0KGNvbnRhaW5lciwgY2hpbGROb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRyZWF0QXNSZWFsU3RhY2tpbmdDb250ZXh0IHx8IGNyZWF0ZXNTdGFja2luZ0NvbnRleHQoY29udGFpbmVyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZm9yIHRyZWF0QXNSZWFsU3RhY2tpbmdDb250ZXh0OmZhbHNlLCBhbnkgcG9zaXRpb25lZCBkZXNjZW5kYW50cyBhbmQgZGVzY2VuZGFudHNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdoaWNoIGFjdHVhbGx5IGNyZWF0ZSBhIG5ldyBzdGFja2luZyBjb250ZXh0IHNob3VsZCBiZSBjb25zaWRlcmVkIHBhcnQgb2YgdGhlIHBhcmVudCBzdGFja2luZyBjb250ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFyZW50U3RhY2sgPSB0cmVhdEFzUmVhbFN0YWNraW5nQ29udGV4dCB8fCBjb250YWluZXIuaXNQb3NpdGlvbmVkKCkgPyBzdGFjay5nZXRSZWFsUGFyZW50U3RhY2tpbmdDb250ZXh0KCkgOiBzdGFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjaGlsZFN0YWNrID0gbmV3IF9TdGFja2luZ0NvbnRleHQyLmRlZmF1bHQoY29udGFpbmVyLCBwYXJlbnRTdGFjaywgdHJlYXRBc1JlYWxTdGFja2luZ0NvbnRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50U3RhY2suY29udGV4dHMucHVzaChjaGlsZFN0YWNrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChTSE9VTERfVFJBVkVSU0VfQ0hJTERSRU4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZU5vZGVUcmVlKGNoaWxkTm9kZSwgY29udGFpbmVyLCBjaGlsZFN0YWNrLCByZXNvdXJjZUxvYWRlciwgaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2suY2hpbGRyZW4ucHVzaChjb250YWluZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFNIT1VMRF9UUkFWRVJTRV9DSElMRFJFTikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlTm9kZVRyZWUoY2hpbGROb2RlLCBjb250YWluZXIsIHN0YWNrLCByZXNvdXJjZUxvYWRlciwgaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNoaWxkTm9kZSBpbnN0YW5jZW9mIGRlZmF1bHRWaWV3LlNWR1NWR0VsZW1lbnQgfHwgY2hpbGROb2RlIGluc3RhbmNlb2YgU1ZHU1ZHRWxlbWVudCB8fCBkZWZhdWx0Vmlldy5wYXJlbnQgJiYgY2hpbGROb2RlIGluc3RhbmNlb2YgZGVmYXVsdFZpZXcucGFyZW50LlNWR1NWR0VsZW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBfY29udGFpbmVyID0gbmV3IF9Ob2RlQ29udGFpbmVyMi5kZWZhdWx0KGNoaWxkTm9kZSwgcGFyZW50LCByZXNvdXJjZUxvYWRlciwgaW5kZXgrKyk7XG4gICAgICAgICAgICB2YXIgX3RyZWF0QXNSZWFsU3RhY2tpbmdDb250ZXh0ID0gY3JlYXRlc1JlYWxTdGFja2luZ0NvbnRleHQoX2NvbnRhaW5lciwgY2hpbGROb2RlKTtcbiAgICAgICAgICAgIGlmIChfdHJlYXRBc1JlYWxTdGFja2luZ0NvbnRleHQgfHwgY3JlYXRlc1N0YWNraW5nQ29udGV4dChfY29udGFpbmVyKSkge1xuICAgICAgICAgICAgICAgIC8vIGZvciB0cmVhdEFzUmVhbFN0YWNraW5nQ29udGV4dDpmYWxzZSwgYW55IHBvc2l0aW9uZWQgZGVzY2VuZGFudHMgYW5kIGRlc2NlbmRhbnRzXG4gICAgICAgICAgICAgICAgLy8gd2hpY2ggYWN0dWFsbHkgY3JlYXRlIGEgbmV3IHN0YWNraW5nIGNvbnRleHQgc2hvdWxkIGJlIGNvbnNpZGVyZWQgcGFydCBvZiB0aGUgcGFyZW50IHN0YWNraW5nIGNvbnRleHRcbiAgICAgICAgICAgICAgICB2YXIgX3BhcmVudFN0YWNrID0gX3RyZWF0QXNSZWFsU3RhY2tpbmdDb250ZXh0IHx8IF9jb250YWluZXIuaXNQb3NpdGlvbmVkKCkgPyBzdGFjay5nZXRSZWFsUGFyZW50U3RhY2tpbmdDb250ZXh0KCkgOiBzdGFjaztcbiAgICAgICAgICAgICAgICB2YXIgX2NoaWxkU3RhY2sgPSBuZXcgX1N0YWNraW5nQ29udGV4dDIuZGVmYXVsdChfY29udGFpbmVyLCBfcGFyZW50U3RhY2ssIF90cmVhdEFzUmVhbFN0YWNraW5nQ29udGV4dCk7XG4gICAgICAgICAgICAgICAgX3BhcmVudFN0YWNrLmNvbnRleHRzLnB1c2goX2NoaWxkU3RhY2spO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdGFjay5jaGlsZHJlbi5wdXNoKF9jb250YWluZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcblxudmFyIGNyZWF0ZXNSZWFsU3RhY2tpbmdDb250ZXh0ID0gZnVuY3Rpb24gY3JlYXRlc1JlYWxTdGFja2luZ0NvbnRleHQoY29udGFpbmVyLCBub2RlKSB7XG4gICAgcmV0dXJuIGNvbnRhaW5lci5pc1Jvb3RFbGVtZW50KCkgfHwgY29udGFpbmVyLmlzUG9zaXRpb25lZFdpdGhaSW5kZXgoKSB8fCBjb250YWluZXIuc3R5bGUub3BhY2l0eSA8IDEgfHwgY29udGFpbmVyLmlzVHJhbnNmb3JtZWQoKSB8fCBpc0JvZHlXaXRoVHJhbnNwYXJlbnRSb290KGNvbnRhaW5lciwgbm9kZSk7XG59O1xuXG52YXIgY3JlYXRlc1N0YWNraW5nQ29udGV4dCA9IGZ1bmN0aW9uIGNyZWF0ZXNTdGFja2luZ0NvbnRleHQoY29udGFpbmVyKSB7XG4gICAgcmV0dXJuIGNvbnRhaW5lci5pc1Bvc2l0aW9uZWQoKSB8fCBjb250YWluZXIuaXNGbG9hdGluZygpO1xufTtcblxudmFyIGlzQm9keVdpdGhUcmFuc3BhcmVudFJvb3QgPSBmdW5jdGlvbiBpc0JvZHlXaXRoVHJhbnNwYXJlbnRSb290KGNvbnRhaW5lciwgbm9kZSkge1xuICAgIHJldHVybiBub2RlLm5vZGVOYW1lID09PSAnQk9EWScgJiYgY29udGFpbmVyLnBhcmVudCBpbnN0YW5jZW9mIF9Ob2RlQ29udGFpbmVyMi5kZWZhdWx0ICYmIGNvbnRhaW5lci5wYXJlbnQuc3R5bGUuYmFja2dyb3VuZC5iYWNrZ3JvdW5kQ29sb3IuaXNUcmFuc3BhcmVudCgpO1xufTtcblxuLyoqKi8gfSksXG4vKiAzMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfTm9kZUNvbnRhaW5lciA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cbnZhciBfTm9kZUNvbnRhaW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ob2RlQ29udGFpbmVyKTtcblxudmFyIF9wb3NpdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oMTkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgU3RhY2tpbmdDb250ZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFN0YWNraW5nQ29udGV4dChjb250YWluZXIsIHBhcmVudCwgdHJlYXRBc1JlYWxTdGFja2luZ0NvbnRleHQpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN0YWNraW5nQ29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICB0aGlzLmNvbnRleHRzID0gW107XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgdGhpcy50cmVhdEFzUmVhbFN0YWNraW5nQ29udGV4dCA9IHRyZWF0QXNSZWFsU3RhY2tpbmdDb250ZXh0O1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhTdGFja2luZ0NvbnRleHQsIFt7XG4gICAgICAgIGtleTogJ2dldE9wYWNpdHknLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0T3BhY2l0eSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMuY29udGFpbmVyLnN0eWxlLm9wYWNpdHkgKiB0aGlzLnBhcmVudC5nZXRPcGFjaXR5KCkgOiB0aGlzLmNvbnRhaW5lci5zdHlsZS5vcGFjaXR5O1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRSZWFsUGFyZW50U3RhY2tpbmdDb250ZXh0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFJlYWxQYXJlbnRTdGFja2luZ0NvbnRleHQoKSB7XG4gICAgICAgICAgICByZXR1cm4gIXRoaXMucGFyZW50IHx8IHRoaXMudHJlYXRBc1JlYWxTdGFja2luZ0NvbnRleHQgPyB0aGlzIDogdGhpcy5wYXJlbnQuZ2V0UmVhbFBhcmVudFN0YWNraW5nQ29udGV4dCgpO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFN0YWNraW5nQ29udGV4dDtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gU3RhY2tpbmdDb250ZXh0O1xuXG4vKioqLyB9KSxcbi8qIDMxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFNpemUgPSBmdW5jdGlvbiBTaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2l6ZSk7XG5cbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBTaXplO1xuXG4vKioqLyB9KSxcbi8qIDMyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9QYXRoID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxudmFyIF9WZWN0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xuXG52YXIgX1ZlY3RvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9WZWN0b3IpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgbGVycCA9IGZ1bmN0aW9uIGxlcnAoYSwgYiwgdCkge1xuICAgIHJldHVybiBuZXcgX1ZlY3RvcjIuZGVmYXVsdChhLnggKyAoYi54IC0gYS54KSAqIHQsIGEueSArIChiLnkgLSBhLnkpICogdCk7XG59O1xuXG52YXIgQmV6aWVyQ3VydmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQmV6aWVyQ3VydmUoc3RhcnQsIHN0YXJ0Q29udHJvbCwgZW5kQ29udHJvbCwgZW5kKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCZXppZXJDdXJ2ZSk7XG5cbiAgICAgICAgdGhpcy50eXBlID0gX1BhdGguUEFUSC5CRVpJRVJfQ1VSVkU7XG4gICAgICAgIHRoaXMuc3RhcnQgPSBzdGFydDtcbiAgICAgICAgdGhpcy5zdGFydENvbnRyb2wgPSBzdGFydENvbnRyb2w7XG4gICAgICAgIHRoaXMuZW5kQ29udHJvbCA9IGVuZENvbnRyb2w7XG4gICAgICAgIHRoaXMuZW5kID0gZW5kO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhCZXppZXJDdXJ2ZSwgW3tcbiAgICAgICAga2V5OiAnc3ViZGl2aWRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN1YmRpdmlkZSh0LCBmaXJzdEhhbGYpIHtcbiAgICAgICAgICAgIHZhciBhYiA9IGxlcnAodGhpcy5zdGFydCwgdGhpcy5zdGFydENvbnRyb2wsIHQpO1xuICAgICAgICAgICAgdmFyIGJjID0gbGVycCh0aGlzLnN0YXJ0Q29udHJvbCwgdGhpcy5lbmRDb250cm9sLCB0KTtcbiAgICAgICAgICAgIHZhciBjZCA9IGxlcnAodGhpcy5lbmRDb250cm9sLCB0aGlzLmVuZCwgdCk7XG4gICAgICAgICAgICB2YXIgYWJiYyA9IGxlcnAoYWIsIGJjLCB0KTtcbiAgICAgICAgICAgIHZhciBiY2NkID0gbGVycChiYywgY2QsIHQpO1xuICAgICAgICAgICAgdmFyIGRlc3QgPSBsZXJwKGFiYmMsIGJjY2QsIHQpO1xuICAgICAgICAgICAgcmV0dXJuIGZpcnN0SGFsZiA/IG5ldyBCZXppZXJDdXJ2ZSh0aGlzLnN0YXJ0LCBhYiwgYWJiYywgZGVzdCkgOiBuZXcgQmV6aWVyQ3VydmUoZGVzdCwgYmNjZCwgY2QsIHRoaXMuZW5kKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmV2ZXJzZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZXZlcnNlKCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBCZXppZXJDdXJ2ZSh0aGlzLmVuZCwgdGhpcy5lbmRDb250cm9sLCB0aGlzLnN0YXJ0Q29udHJvbCwgdGhpcy5zdGFydCk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQmV6aWVyQ3VydmU7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEJlemllckN1cnZlO1xuXG4vKioqLyB9KSxcbi8qIDMzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucGFyc2VCb3JkZXJSYWRpdXMgPSB1bmRlZmluZWQ7XG5cbnZhciBfc2xpY2VkVG9BcnJheSA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0pIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfSByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IHJldHVybiBhcnI7IH0gZWxzZSBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSB7IHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7IH0gZWxzZSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9IH07IH0oKTtcblxudmFyIF9MZW5ndGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG52YXIgX0xlbmd0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MZW5ndGgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgU0lERVMgPSBbJ3RvcC1sZWZ0JywgJ3RvcC1yaWdodCcsICdib3R0b20tcmlnaHQnLCAnYm90dG9tLWxlZnQnXTtcblxudmFyIHBhcnNlQm9yZGVyUmFkaXVzID0gZXhwb3J0cy5wYXJzZUJvcmRlclJhZGl1cyA9IGZ1bmN0aW9uIHBhcnNlQm9yZGVyUmFkaXVzKHN0eWxlKSB7XG4gICAgcmV0dXJuIFNJREVTLm1hcChmdW5jdGlvbiAoc2lkZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdib3JkZXItJyArIHNpZGUgKyAnLXJhZGl1cycpO1xuXG4gICAgICAgIHZhciBfdmFsdWUkc3BsaXQkbWFwID0gdmFsdWUuc3BsaXQoJyAnKS5tYXAoX0xlbmd0aDIuZGVmYXVsdC5jcmVhdGUpLFxuICAgICAgICAgICAgX3ZhbHVlJHNwbGl0JG1hcDIgPSBfc2xpY2VkVG9BcnJheShfdmFsdWUkc3BsaXQkbWFwLCAyKSxcbiAgICAgICAgICAgIGhvcml6b250YWwgPSBfdmFsdWUkc3BsaXQkbWFwMlswXSxcbiAgICAgICAgICAgIHZlcnRpY2FsID0gX3ZhbHVlJHNwbGl0JG1hcDJbMV07XG5cbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2ZXJ0aWNhbCA9PT0gJ3VuZGVmaW5lZCcgPyBbaG9yaXpvbnRhbCwgaG9yaXpvbnRhbF0gOiBbaG9yaXpvbnRhbCwgdmVydGljYWxdO1xuICAgIH0pO1xufTtcblxuLyoqKi8gfSksXG4vKiAzNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgRElTUExBWSA9IGV4cG9ydHMuRElTUExBWSA9IHtcbiAgICBOT05FOiAxIDw8IDAsXG4gICAgQkxPQ0s6IDEgPDwgMSxcbiAgICBJTkxJTkU6IDEgPDwgMixcbiAgICBSVU5fSU46IDEgPDwgMyxcbiAgICBGTE9XOiAxIDw8IDQsXG4gICAgRkxPV19ST09UOiAxIDw8IDUsXG4gICAgVEFCTEU6IDEgPDwgNixcbiAgICBGTEVYOiAxIDw8IDcsXG4gICAgR1JJRDogMSA8PCA4LFxuICAgIFJVQlk6IDEgPDwgOSxcbiAgICBTVUJHUklEOiAxIDw8IDEwLFxuICAgIExJU1RfSVRFTTogMSA8PCAxMSxcbiAgICBUQUJMRV9ST1dfR1JPVVA6IDEgPDwgMTIsXG4gICAgVEFCTEVfSEVBREVSX0dST1VQOiAxIDw8IDEzLFxuICAgIFRBQkxFX0ZPT1RFUl9HUk9VUDogMSA8PCAxNCxcbiAgICBUQUJMRV9ST1c6IDEgPDwgMTUsXG4gICAgVEFCTEVfQ0VMTDogMSA8PCAxNixcbiAgICBUQUJMRV9DT0xVTU5fR1JPVVA6IDEgPDwgMTcsXG4gICAgVEFCTEVfQ09MVU1OOiAxIDw8IDE4LFxuICAgIFRBQkxFX0NBUFRJT046IDEgPDwgMTksXG4gICAgUlVCWV9CQVNFOiAxIDw8IDIwLFxuICAgIFJVQllfVEVYVDogMSA8PCAyMSxcbiAgICBSVUJZX0JBU0VfQ09OVEFJTkVSOiAxIDw8IDIyLFxuICAgIFJVQllfVEVYVF9DT05UQUlORVI6IDEgPDwgMjMsXG4gICAgQ09OVEVOVFM6IDEgPDwgMjQsXG4gICAgSU5MSU5FX0JMT0NLOiAxIDw8IDI1LFxuICAgIElOTElORV9MSVNUX0lURU06IDEgPDwgMjYsXG4gICAgSU5MSU5FX1RBQkxFOiAxIDw8IDI3LFxuICAgIElOTElORV9GTEVYOiAxIDw8IDI4LFxuICAgIElOTElORV9HUklEOiAxIDw8IDI5XG59O1xuXG52YXIgcGFyc2VEaXNwbGF5VmFsdWUgPSBmdW5jdGlvbiBwYXJzZURpc3BsYXlWYWx1ZShkaXNwbGF5KSB7XG4gICAgc3dpdGNoIChkaXNwbGF5KSB7XG4gICAgICAgIGNhc2UgJ2Jsb2NrJzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLkJMT0NLO1xuICAgICAgICBjYXNlICdpbmxpbmUnOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuSU5MSU5FO1xuICAgICAgICBjYXNlICdydW4taW4nOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuUlVOX0lOO1xuICAgICAgICBjYXNlICdmbG93JzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLkZMT1c7XG4gICAgICAgIGNhc2UgJ2Zsb3ctcm9vdCc6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5GTE9XX1JPT1Q7XG4gICAgICAgIGNhc2UgJ3RhYmxlJzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLlRBQkxFO1xuICAgICAgICBjYXNlICdmbGV4JzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLkZMRVg7XG4gICAgICAgIGNhc2UgJ2dyaWQnOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuR1JJRDtcbiAgICAgICAgY2FzZSAncnVieSc6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5SVUJZO1xuICAgICAgICBjYXNlICdzdWJncmlkJzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLlNVQkdSSUQ7XG4gICAgICAgIGNhc2UgJ2xpc3QtaXRlbSc6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5MSVNUX0lURU07XG4gICAgICAgIGNhc2UgJ3RhYmxlLXJvdy1ncm91cCc6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5UQUJMRV9ST1dfR1JPVVA7XG4gICAgICAgIGNhc2UgJ3RhYmxlLWhlYWRlci1ncm91cCc6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5UQUJMRV9IRUFERVJfR1JPVVA7XG4gICAgICAgIGNhc2UgJ3RhYmxlLWZvb3Rlci1ncm91cCc6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5UQUJMRV9GT09URVJfR1JPVVA7XG4gICAgICAgIGNhc2UgJ3RhYmxlLXJvdyc6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5UQUJMRV9ST1c7XG4gICAgICAgIGNhc2UgJ3RhYmxlLWNlbGwnOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuVEFCTEVfQ0VMTDtcbiAgICAgICAgY2FzZSAndGFibGUtY29sdW1uLWdyb3VwJzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLlRBQkxFX0NPTFVNTl9HUk9VUDtcbiAgICAgICAgY2FzZSAndGFibGUtY29sdW1uJzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLlRBQkxFX0NPTFVNTjtcbiAgICAgICAgY2FzZSAndGFibGUtY2FwdGlvbic6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5UQUJMRV9DQVBUSU9OO1xuICAgICAgICBjYXNlICdydWJ5LWJhc2UnOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuUlVCWV9CQVNFO1xuICAgICAgICBjYXNlICdydWJ5LXRleHQnOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuUlVCWV9URVhUO1xuICAgICAgICBjYXNlICdydWJ5LWJhc2UtY29udGFpbmVyJzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLlJVQllfQkFTRV9DT05UQUlORVI7XG4gICAgICAgIGNhc2UgJ3J1YnktdGV4dC1jb250YWluZXInOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuUlVCWV9URVhUX0NPTlRBSU5FUjtcbiAgICAgICAgY2FzZSAnY29udGVudHMnOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuQ09OVEVOVFM7XG4gICAgICAgIGNhc2UgJ2lubGluZS1ibG9jayc6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5JTkxJTkVfQkxPQ0s7XG4gICAgICAgIGNhc2UgJ2lubGluZS1saXN0LWl0ZW0nOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuSU5MSU5FX0xJU1RfSVRFTTtcbiAgICAgICAgY2FzZSAnaW5saW5lLXRhYmxlJzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLklOTElORV9UQUJMRTtcbiAgICAgICAgY2FzZSAnaW5saW5lLWZsZXgnOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuSU5MSU5FX0ZMRVg7XG4gICAgICAgIGNhc2UgJ2lubGluZS1ncmlkJzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLklOTElORV9HUklEO1xuICAgIH1cblxuICAgIHJldHVybiBESVNQTEFZLk5PTkU7XG59O1xuXG52YXIgc2V0RGlzcGxheUJpdCA9IGZ1bmN0aW9uIHNldERpc3BsYXlCaXQoYml0LCBkaXNwbGF5KSB7XG4gICAgcmV0dXJuIGJpdCB8IHBhcnNlRGlzcGxheVZhbHVlKGRpc3BsYXkpO1xufTtcblxudmFyIHBhcnNlRGlzcGxheSA9IGV4cG9ydHMucGFyc2VEaXNwbGF5ID0gZnVuY3Rpb24gcGFyc2VEaXNwbGF5KGRpc3BsYXkpIHtcbiAgICByZXR1cm4gZGlzcGxheS5zcGxpdCgnICcpLnJlZHVjZShzZXREaXNwbGF5Qml0LCAwKTtcbn07XG5cbi8qKiovIH0pLFxuLyogMzUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xudmFyIEZMT0FUID0gZXhwb3J0cy5GTE9BVCA9IHtcbiAgICBOT05FOiAwLFxuICAgIExFRlQ6IDEsXG4gICAgUklHSFQ6IDIsXG4gICAgSU5MSU5FX1NUQVJUOiAzLFxuICAgIElOTElORV9FTkQ6IDRcbn07XG5cbnZhciBwYXJzZUNTU0Zsb2F0ID0gZXhwb3J0cy5wYXJzZUNTU0Zsb2F0ID0gZnVuY3Rpb24gcGFyc2VDU1NGbG9hdChmbG9hdCkge1xuICAgIHN3aXRjaCAoZmxvYXQpIHtcbiAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICByZXR1cm4gRkxPQVQuTEVGVDtcbiAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgcmV0dXJuIEZMT0FULlJJR0hUO1xuICAgICAgICBjYXNlICdpbmxpbmUtc3RhcnQnOlxuICAgICAgICAgICAgcmV0dXJuIEZMT0FULklOTElORV9TVEFSVDtcbiAgICAgICAgY2FzZSAnaW5saW5lLWVuZCc6XG4gICAgICAgICAgICByZXR1cm4gRkxPQVQuSU5MSU5FX0VORDtcbiAgICB9XG4gICAgcmV0dXJuIEZMT0FULk5PTkU7XG59O1xuXG4vKioqLyB9KSxcbi8qIDM2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuXG52YXIgcGFyc2VGb250V2VpZ2h0ID0gZnVuY3Rpb24gcGFyc2VGb250V2VpZ2h0KHdlaWdodCkge1xuICAgIHN3aXRjaCAod2VpZ2h0KSB7XG4gICAgICAgIGNhc2UgJ25vcm1hbCc6XG4gICAgICAgICAgICByZXR1cm4gNDAwO1xuICAgICAgICBjYXNlICdib2xkJzpcbiAgICAgICAgICAgIHJldHVybiA3MDA7XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlID0gcGFyc2VJbnQod2VpZ2h0LCAxMCk7XG4gICAgcmV0dXJuIGlzTmFOKHZhbHVlKSA/IDQwMCA6IHZhbHVlO1xufTtcblxudmFyIHBhcnNlRm9udCA9IGV4cG9ydHMucGFyc2VGb250ID0gZnVuY3Rpb24gcGFyc2VGb250KHN0eWxlKSB7XG4gICAgdmFyIGZvbnRGYW1pbHkgPSBzdHlsZS5mb250RmFtaWx5O1xuICAgIHZhciBmb250U2l6ZSA9IHN0eWxlLmZvbnRTaXplO1xuICAgIHZhciBmb250U3R5bGUgPSBzdHlsZS5mb250U3R5bGU7XG4gICAgdmFyIGZvbnRWYXJpYW50ID0gc3R5bGUuZm9udFZhcmlhbnQ7XG4gICAgdmFyIGZvbnRXZWlnaHQgPSBwYXJzZUZvbnRXZWlnaHQoc3R5bGUuZm9udFdlaWdodCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBmb250RmFtaWx5OiBmb250RmFtaWx5LFxuICAgICAgICBmb250U2l6ZTogZm9udFNpemUsXG4gICAgICAgIGZvbnRTdHlsZTogZm9udFN0eWxlLFxuICAgICAgICBmb250VmFyaWFudDogZm9udFZhcmlhbnQsXG4gICAgICAgIGZvbnRXZWlnaHQ6IGZvbnRXZWlnaHRcbiAgICB9O1xufTtcblxuLyoqKi8gfSksXG4vKiAzNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgcGFyc2VMZXR0ZXJTcGFjaW5nID0gZXhwb3J0cy5wYXJzZUxldHRlclNwYWNpbmcgPSBmdW5jdGlvbiBwYXJzZUxldHRlclNwYWNpbmcobGV0dGVyU3BhY2luZykge1xuICAgIGlmIChsZXR0ZXJTcGFjaW5nID09PSAnbm9ybWFsJykge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgdmFyIHZhbHVlID0gcGFyc2VGbG9hdChsZXR0ZXJTcGFjaW5nKTtcbiAgICByZXR1cm4gaXNOYU4odmFsdWUpID8gMCA6IHZhbHVlO1xufTtcblxuLyoqKi8gfSksXG4vKiAzOCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgTElORV9CUkVBSyA9IGV4cG9ydHMuTElORV9CUkVBSyA9IHtcbiAgICBOT1JNQUw6ICdub3JtYWwnLFxuICAgIFNUUklDVDogJ3N0cmljdCdcbn07XG5cbnZhciBwYXJzZUxpbmVCcmVhayA9IGV4cG9ydHMucGFyc2VMaW5lQnJlYWsgPSBmdW5jdGlvbiBwYXJzZUxpbmVCcmVhayh3b3JkQnJlYWspIHtcbiAgICBzd2l0Y2ggKHdvcmRCcmVhaykge1xuICAgICAgICBjYXNlICdzdHJpY3QnOlxuICAgICAgICAgICAgcmV0dXJuIExJTkVfQlJFQUsuU1RSSUNUO1xuICAgICAgICBjYXNlICdub3JtYWwnOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIExJTkVfQlJFQUsuTk9STUFMO1xuICAgIH1cbn07XG5cbi8qKiovIH0pLFxuLyogMzkgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5wYXJzZU1hcmdpbiA9IHVuZGVmaW5lZDtcblxudmFyIF9MZW5ndGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG52YXIgX0xlbmd0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MZW5ndGgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgU0lERVMgPSBbJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddO1xuXG52YXIgcGFyc2VNYXJnaW4gPSBleHBvcnRzLnBhcnNlTWFyZ2luID0gZnVuY3Rpb24gcGFyc2VNYXJnaW4oc3R5bGUpIHtcbiAgICByZXR1cm4gU0lERVMubWFwKGZ1bmN0aW9uIChzaWRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgX0xlbmd0aDIuZGVmYXVsdChzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdtYXJnaW4tJyArIHNpZGUpKTtcbiAgICB9KTtcbn07XG5cbi8qKiovIH0pLFxuLyogNDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xudmFyIE9WRVJGTE9XID0gZXhwb3J0cy5PVkVSRkxPVyA9IHtcbiAgICBWSVNJQkxFOiAwLFxuICAgIEhJRERFTjogMSxcbiAgICBTQ1JPTEw6IDIsXG4gICAgQVVUTzogM1xufTtcblxudmFyIHBhcnNlT3ZlcmZsb3cgPSBleHBvcnRzLnBhcnNlT3ZlcmZsb3cgPSBmdW5jdGlvbiBwYXJzZU92ZXJmbG93KG92ZXJmbG93KSB7XG4gICAgc3dpdGNoIChvdmVyZmxvdykge1xuICAgICAgICBjYXNlICdoaWRkZW4nOlxuICAgICAgICAgICAgcmV0dXJuIE9WRVJGTE9XLkhJRERFTjtcbiAgICAgICAgY2FzZSAnc2Nyb2xsJzpcbiAgICAgICAgICAgIHJldHVybiBPVkVSRkxPVy5TQ1JPTEw7XG4gICAgICAgIGNhc2UgJ2F1dG8nOlxuICAgICAgICAgICAgcmV0dXJuIE9WRVJGTE9XLkFVVE87XG4gICAgICAgIGNhc2UgJ3Zpc2libGUnOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIE9WRVJGTE9XLlZJU0lCTEU7XG4gICAgfVxufTtcblxuLyoqKi8gfSksXG4vKiA0MSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnBhcnNlVGV4dFNoYWRvdyA9IHVuZGVmaW5lZDtcblxudmFyIF9Db2xvciA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBfQ29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29sb3IpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgTlVNQkVSID0gL14oWystXXxcXGR8XFwuKSQvaTtcblxudmFyIHBhcnNlVGV4dFNoYWRvdyA9IGV4cG9ydHMucGFyc2VUZXh0U2hhZG93ID0gZnVuY3Rpb24gcGFyc2VUZXh0U2hhZG93KHRleHRTaGFkb3cpIHtcbiAgICBpZiAodGV4dFNoYWRvdyA9PT0gJ25vbmUnIHx8IHR5cGVvZiB0ZXh0U2hhZG93ICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgY3VycmVudFZhbHVlID0gJyc7XG4gICAgdmFyIGlzTGVuZ3RoID0gZmFsc2U7XG4gICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgIHZhciBzaGFkb3dzID0gW107XG4gICAgdmFyIG51bVBhcmVucyA9IDA7XG4gICAgdmFyIGNvbG9yID0gbnVsbDtcblxuICAgIHZhciBhcHBlbmRWYWx1ZSA9IGZ1bmN0aW9uIGFwcGVuZFZhbHVlKCkge1xuICAgICAgICBpZiAoY3VycmVudFZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGlzTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzLnB1c2gocGFyc2VGbG9hdChjdXJyZW50VmFsdWUpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29sb3IgPSBuZXcgX0NvbG9yMi5kZWZhdWx0KGN1cnJlbnRWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaXNMZW5ndGggPSBmYWxzZTtcbiAgICAgICAgY3VycmVudFZhbHVlID0gJyc7XG4gICAgfTtcblxuICAgIHZhciBhcHBlbmRTaGFkb3cgPSBmdW5jdGlvbiBhcHBlbmRTaGFkb3coKSB7XG4gICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoICYmIGNvbG9yICE9PSBudWxsKSB7XG4gICAgICAgICAgICBzaGFkb3dzLnB1c2goe1xuICAgICAgICAgICAgICAgIGNvbG9yOiBjb2xvcixcbiAgICAgICAgICAgICAgICBvZmZzZXRYOiB2YWx1ZXNbMF0gfHwgMCxcbiAgICAgICAgICAgICAgICBvZmZzZXRZOiB2YWx1ZXNbMV0gfHwgMCxcbiAgICAgICAgICAgICAgICBibHVyOiB2YWx1ZXNbMl0gfHwgMFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWVzLnNwbGljZSgwLCB2YWx1ZXMubGVuZ3RoKTtcbiAgICAgICAgY29sb3IgPSBudWxsO1xuICAgIH07XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRleHRTaGFkb3cubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGMgPSB0ZXh0U2hhZG93W2ldO1xuICAgICAgICBzd2l0Y2ggKGMpIHtcbiAgICAgICAgICAgIGNhc2UgJygnOlxuICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZSArPSBjO1xuICAgICAgICAgICAgICAgIG51bVBhcmVucysrO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnKSc6XG4gICAgICAgICAgICAgICAgY3VycmVudFZhbHVlICs9IGM7XG4gICAgICAgICAgICAgICAgbnVtUGFyZW5zLS07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICcsJzpcbiAgICAgICAgICAgICAgICBpZiAobnVtUGFyZW5zID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGFwcGVuZFZhbHVlKCk7XG4gICAgICAgICAgICAgICAgICAgIGFwcGVuZFNoYWRvdygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZSArPSBjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJyAnOlxuICAgICAgICAgICAgICAgIGlmIChudW1QYXJlbnMgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYXBwZW5kVmFsdWUoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VmFsdWUgKz0gYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VmFsdWUubGVuZ3RoID09PSAwICYmIE5VTUJFUi50ZXN0KGMpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzTGVuZ3RoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VycmVudFZhbHVlICs9IGM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhcHBlbmRWYWx1ZSgpO1xuICAgIGFwcGVuZFNoYWRvdygpO1xuXG4gICAgaWYgKHNoYWRvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBzaGFkb3dzO1xufTtcblxuLyoqKi8gfSksXG4vKiA0MiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnBhcnNlVHJhbnNmb3JtID0gdW5kZWZpbmVkO1xuXG52YXIgX0xlbmd0aCA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cbnZhciBfTGVuZ3RoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xlbmd0aCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciB0b0Zsb2F0ID0gZnVuY3Rpb24gdG9GbG9hdChzKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQocy50cmltKCkpO1xufTtcblxudmFyIE1BVFJJWCA9IC8obWF0cml4fG1hdHJpeDNkKVxcKCguKylcXCkvO1xuXG52YXIgcGFyc2VUcmFuc2Zvcm0gPSBleHBvcnRzLnBhcnNlVHJhbnNmb3JtID0gZnVuY3Rpb24gcGFyc2VUcmFuc2Zvcm0oc3R5bGUpIHtcbiAgICB2YXIgdHJhbnNmb3JtID0gcGFyc2VUcmFuc2Zvcm1NYXRyaXgoc3R5bGUudHJhbnNmb3JtIHx8IHN0eWxlLndlYmtpdFRyYW5zZm9ybSB8fCBzdHlsZS5tb3pUcmFuc2Zvcm0gfHxcbiAgICAvLyAkRmxvd0ZpeE1lXG4gICAgc3R5bGUubXNUcmFuc2Zvcm0gfHxcbiAgICAvLyAkRmxvd0ZpeE1lXG4gICAgc3R5bGUub1RyYW5zZm9ybSk7XG4gICAgaWYgKHRyYW5zZm9ybSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiBwYXJzZVRyYW5zZm9ybU9yaWdpbihzdHlsZS50cmFuc2Zvcm1PcmlnaW4gfHwgc3R5bGUud2Via2l0VHJhbnNmb3JtT3JpZ2luIHx8IHN0eWxlLm1velRyYW5zZm9ybU9yaWdpbiB8fFxuICAgICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICAgIHN0eWxlLm1zVHJhbnNmb3JtT3JpZ2luIHx8XG4gICAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgICAgc3R5bGUub1RyYW5zZm9ybU9yaWdpbilcbiAgICB9O1xufTtcblxuLy8gJEZsb3dGaXhNZVxudmFyIHBhcnNlVHJhbnNmb3JtT3JpZ2luID0gZnVuY3Rpb24gcGFyc2VUcmFuc2Zvcm1PcmlnaW4ob3JpZ2luKSB7XG4gICAgaWYgKHR5cGVvZiBvcmlnaW4gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhciB2ID0gbmV3IF9MZW5ndGgyLmRlZmF1bHQoJzAnKTtcbiAgICAgICAgcmV0dXJuIFt2LCB2XTtcbiAgICB9XG4gICAgdmFyIHZhbHVlcyA9IG9yaWdpbi5zcGxpdCgnICcpLm1hcChfTGVuZ3RoMi5kZWZhdWx0LmNyZWF0ZSk7XG4gICAgcmV0dXJuIFt2YWx1ZXNbMF0sIHZhbHVlc1sxXV07XG59O1xuXG4vLyAkRmxvd0ZpeE1lXG52YXIgcGFyc2VUcmFuc2Zvcm1NYXRyaXggPSBmdW5jdGlvbiBwYXJzZVRyYW5zZm9ybU1hdHJpeCh0cmFuc2Zvcm0pIHtcbiAgICBpZiAodHJhbnNmb3JtID09PSAnbm9uZScgfHwgdHlwZW9mIHRyYW5zZm9ybSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoID0gdHJhbnNmb3JtLm1hdGNoKE1BVFJJWCk7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGlmIChtYXRjaFsxXSA9PT0gJ21hdHJpeCcpIHtcbiAgICAgICAgICAgIHZhciBtYXRyaXggPSBtYXRjaFsyXS5zcGxpdCgnLCcpLm1hcCh0b0Zsb2F0KTtcbiAgICAgICAgICAgIHJldHVybiBbbWF0cml4WzBdLCBtYXRyaXhbMV0sIG1hdHJpeFsyXSwgbWF0cml4WzNdLCBtYXRyaXhbNF0sIG1hdHJpeFs1XV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgbWF0cml4M2QgPSBtYXRjaFsyXS5zcGxpdCgnLCcpLm1hcCh0b0Zsb2F0KTtcbiAgICAgICAgICAgIHJldHVybiBbbWF0cml4M2RbMF0sIG1hdHJpeDNkWzFdLCBtYXRyaXgzZFs0XSwgbWF0cml4M2RbNV0sIG1hdHJpeDNkWzEyXSwgbWF0cml4M2RbMTNdXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn07XG5cbi8qKiovIH0pLFxuLyogNDMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xudmFyIFZJU0lCSUxJVFkgPSBleHBvcnRzLlZJU0lCSUxJVFkgPSB7XG4gICAgVklTSUJMRTogMCxcbiAgICBISURERU46IDEsXG4gICAgQ09MTEFQU0U6IDJcbn07XG5cbnZhciBwYXJzZVZpc2liaWxpdHkgPSBleHBvcnRzLnBhcnNlVmlzaWJpbGl0eSA9IGZ1bmN0aW9uIHBhcnNlVmlzaWJpbGl0eSh2aXNpYmlsaXR5KSB7XG4gICAgc3dpdGNoICh2aXNpYmlsaXR5KSB7XG4gICAgICAgIGNhc2UgJ2hpZGRlbic6XG4gICAgICAgICAgICByZXR1cm4gVklTSUJJTElUWS5ISURERU47XG4gICAgICAgIGNhc2UgJ2NvbGxhcHNlJzpcbiAgICAgICAgICAgIHJldHVybiBWSVNJQklMSVRZLkNPTExBUFNFO1xuICAgICAgICBjYXNlICd2aXNpYmxlJzpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBWSVNJQklMSVRZLlZJU0lCTEU7XG4gICAgfVxufTtcblxuLyoqKi8gfSksXG4vKiA0NCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgV09SRF9CUkVBSyA9IGV4cG9ydHMuV09SRF9CUkVBSyA9IHtcbiAgICBOT1JNQUw6ICdub3JtYWwnLFxuICAgIEJSRUFLX0FMTDogJ2JyZWFrLWFsbCcsXG4gICAgS0VFUF9BTEw6ICdrZWVwLWFsbCdcbn07XG5cbnZhciBwYXJzZVdvcmRCcmVhayA9IGV4cG9ydHMucGFyc2VXb3JkQnJlYWsgPSBmdW5jdGlvbiBwYXJzZVdvcmRCcmVhayh3b3JkQnJlYWspIHtcbiAgICBzd2l0Y2ggKHdvcmRCcmVhaykge1xuICAgICAgICBjYXNlICdicmVhay1hbGwnOlxuICAgICAgICAgICAgcmV0dXJuIFdPUkRfQlJFQUsuQlJFQUtfQUxMO1xuICAgICAgICBjYXNlICdrZWVwLWFsbCc6XG4gICAgICAgICAgICByZXR1cm4gV09SRF9CUkVBSy5LRUVQX0FMTDtcbiAgICAgICAgY2FzZSAnbm9ybWFsJzpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBXT1JEX0JSRUFLLk5PUk1BTDtcbiAgICB9XG59O1xuXG4vKioqLyB9KSxcbi8qIDQ1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbnZhciBwYXJzZVpJbmRleCA9IGV4cG9ydHMucGFyc2VaSW5kZXggPSBmdW5jdGlvbiBwYXJzZVpJbmRleCh6SW5kZXgpIHtcbiAgICB2YXIgYXV0byA9IHpJbmRleCA9PT0gJ2F1dG8nO1xuICAgIHJldHVybiB7XG4gICAgICAgIGF1dG86IGF1dG8sXG4gICAgICAgIG9yZGVyOiBhdXRvID8gMCA6IHBhcnNlSW50KHpJbmRleCwgMTApXG4gICAgfTtcbn07XG5cbi8qKiovIH0pLFxuLyogNDYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9VdGlsID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndG9Db2RlUG9pbnRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX1V0aWwudG9Db2RlUG9pbnRzO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnZnJvbUNvZGVQb2ludCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9VdGlsLmZyb21Db2RlUG9pbnQ7XG4gIH1cbn0pO1xuXG52YXIgX0xpbmVCcmVhayA9IF9fd2VicGFja19yZXF1aXJlX18oNDcpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmVCcmVha2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX0xpbmVCcmVhay5MaW5lQnJlYWtlcjtcbiAgfVxufSk7XG5cbi8qKiovIH0pLFxuLyogNDcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5MaW5lQnJlYWtlciA9IGV4cG9ydHMuaW5saW5lQnJlYWtPcHBvcnR1bml0aWVzID0gZXhwb3J0cy5saW5lQnJlYWtBdEluZGV4ID0gZXhwb3J0cy5jb2RlUG9pbnRzVG9DaGFyYWN0ZXJDbGFzc2VzID0gZXhwb3J0cy5Vbmljb2RlVHJpZSA9IGV4cG9ydHMuQlJFQUtfQUxMT1dFRCA9IGV4cG9ydHMuQlJFQUtfTk9UX0FMTE9XRUQgPSBleHBvcnRzLkJSRUFLX01BTkRBVE9SWSA9IGV4cG9ydHMuY2xhc3NlcyA9IGV4cG9ydHMuTEVUVEVSX05VTUJFUl9NT0RJRklFUiA9IHVuZGVmaW5lZDtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9zbGljZWRUb0FycmF5ID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBzbGljZUl0ZXJhdG9yKGFyciwgaSkgeyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9IHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgcmV0dXJuIGFycjsgfSBlbHNlIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpIHsgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTsgfSBlbHNlIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7IH0gfTsgfSgpO1xuXG52YXIgX1RyaWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ4KTtcblxudmFyIF9saW5lYnJlYWtUcmllID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0OSk7XG5cbnZhciBfbGluZWJyZWFrVHJpZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saW5lYnJlYWtUcmllKTtcblxudmFyIF9VdGlsID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gZWxzZSB7IHJldHVybiBBcnJheS5mcm9tKGFycik7IH0gfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgTEVUVEVSX05VTUJFUl9NT0RJRklFUiA9IGV4cG9ydHMuTEVUVEVSX05VTUJFUl9NT0RJRklFUiA9IDUwO1xuXG4vLyBOb24tdGFpbG9yYWJsZSBMaW5lIEJyZWFraW5nIENsYXNzZXNcbnZhciBCSyA9IDE7IC8vICBDYXVzZSBhIGxpbmUgYnJlYWsgKGFmdGVyKVxudmFyIENSID0gMjsgLy8gIENhdXNlIGEgbGluZSBicmVhayAoYWZ0ZXIpLCBleGNlcHQgYmV0d2VlbiBDUiBhbmQgTEZcbnZhciBMRiA9IDM7IC8vICBDYXVzZSBhIGxpbmUgYnJlYWsgKGFmdGVyKVxudmFyIENNID0gNDsgLy8gIFByb2hpYml0IGEgbGluZSBicmVhayBiZXR3ZWVuIHRoZSBjaGFyYWN0ZXIgYW5kIHRoZSBwcmVjZWRpbmcgY2hhcmFjdGVyXG52YXIgTkwgPSA1OyAvLyAgQ2F1c2UgYSBsaW5lIGJyZWFrIChhZnRlcilcbnZhciBTRyA9IDY7IC8vICBEbyBub3Qgb2NjdXIgaW4gd2VsbC1mb3JtZWQgdGV4dFxudmFyIFdKID0gNzsgLy8gIFByb2hpYml0IGxpbmUgYnJlYWtzIGJlZm9yZSBhbmQgYWZ0ZXJcbnZhciBaVyA9IDg7IC8vICBQcm92aWRlIGEgYnJlYWsgb3Bwb3J0dW5pdHlcbnZhciBHTCA9IDk7IC8vICBQcm9oaWJpdCBsaW5lIGJyZWFrcyBiZWZvcmUgYW5kIGFmdGVyXG52YXIgU1AgPSAxMDsgLy8gRW5hYmxlIGluZGlyZWN0IGxpbmUgYnJlYWtzXG52YXIgWldKID0gMTE7IC8vIFByb2hpYml0IGxpbmUgYnJlYWtzIHdpdGhpbiBqb2luZXIgc2VxdWVuY2VzXG4vLyBCcmVhayBPcHBvcnR1bml0aWVzXG52YXIgQjIgPSAxMjsgLy8gIFByb3ZpZGUgYSBsaW5lIGJyZWFrIG9wcG9ydHVuaXR5IGJlZm9yZSBhbmQgYWZ0ZXIgdGhlIGNoYXJhY3RlclxudmFyIEJBID0gMTM7IC8vICBHZW5lcmFsbHkgcHJvdmlkZSBhIGxpbmUgYnJlYWsgb3Bwb3J0dW5pdHkgYWZ0ZXIgdGhlIGNoYXJhY3RlclxudmFyIEJCID0gMTQ7IC8vICBHZW5lcmFsbHkgcHJvdmlkZSBhIGxpbmUgYnJlYWsgb3Bwb3J0dW5pdHkgYmVmb3JlIHRoZSBjaGFyYWN0ZXJcbnZhciBIWSA9IDE1OyAvLyAgUHJvdmlkZSBhIGxpbmUgYnJlYWsgb3Bwb3J0dW5pdHkgYWZ0ZXIgdGhlIGNoYXJhY3RlciwgZXhjZXB0IGluIG51bWVyaWMgY29udGV4dFxudmFyIENCID0gMTY7IC8vICAgUHJvdmlkZSBhIGxpbmUgYnJlYWsgb3Bwb3J0dW5pdHkgY29udGluZ2VudCBvbiBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4vLyBDaGFyYWN0ZXJzIFByb2hpYml0aW5nIENlcnRhaW4gQnJlYWtzXG52YXIgQ0wgPSAxNzsgLy8gIFByb2hpYml0IGxpbmUgYnJlYWtzIGJlZm9yZVxudmFyIENQID0gMTg7IC8vICBQcm9oaWJpdCBsaW5lIGJyZWFrcyBiZWZvcmVcbnZhciBFWCA9IDE5OyAvLyAgUHJvaGliaXQgbGluZSBicmVha3MgYmVmb3JlXG52YXIgSU4gPSAyMDsgLy8gIEFsbG93IG9ubHkgaW5kaXJlY3QgbGluZSBicmVha3MgYmV0d2VlbiBwYWlyc1xudmFyIE5TID0gMjE7IC8vICBBbGxvdyBvbmx5IGluZGlyZWN0IGxpbmUgYnJlYWtzIGJlZm9yZVxudmFyIE9QID0gMjI7IC8vICBQcm9oaWJpdCBsaW5lIGJyZWFrcyBhZnRlclxudmFyIFFVID0gMjM7IC8vICBBY3QgbGlrZSB0aGV5IGFyZSBib3RoIG9wZW5pbmcgYW5kIGNsb3Npbmdcbi8vIE51bWVyaWMgQ29udGV4dFxudmFyIElTID0gMjQ7IC8vICBQcmV2ZW50IGJyZWFrcyBhZnRlciBhbnkgYW5kIGJlZm9yZSBudW1lcmljXG52YXIgTlUgPSAyNTsgLy8gIEZvcm0gbnVtZXJpYyBleHByZXNzaW9ucyBmb3IgbGluZSBicmVha2luZyBwdXJwb3Nlc1xudmFyIFBPID0gMjY7IC8vICBEbyBub3QgYnJlYWsgZm9sbG93aW5nIGEgbnVtZXJpYyBleHByZXNzaW9uXG52YXIgUFIgPSAyNzsgLy8gIERvIG5vdCBicmVhayBpbiBmcm9udCBvZiBhIG51bWVyaWMgZXhwcmVzc2lvblxudmFyIFNZID0gMjg7IC8vICBQcmV2ZW50IGEgYnJlYWsgYmVmb3JlOyBhbmQgYWxsb3cgYSBicmVhayBhZnRlclxuLy8gT3RoZXIgQ2hhcmFjdGVyc1xudmFyIEFJID0gMjk7IC8vICBBY3QgbGlrZSBBTCB3aGVuIHRoZSByZXNvbHZlZEVBVyBpcyBOOyBvdGhlcndpc2U7IGFjdCBhcyBJRFxudmFyIEFMID0gMzA7IC8vICBBcmUgYWxwaGFiZXRpYyBjaGFyYWN0ZXJzIG9yIHN5bWJvbHMgdGhhdCBhcmUgdXNlZCB3aXRoIGFscGhhYmV0aWMgY2hhcmFjdGVyc1xudmFyIENKID0gMzE7IC8vICBUcmVhdCBhcyBOUyBvciBJRCBmb3Igc3RyaWN0IG9yIG5vcm1hbCBicmVha2luZy5cbnZhciBFQiA9IDMyOyAvLyAgRG8gbm90IGJyZWFrIGZyb20gZm9sbG93aW5nIEVtb2ppIE1vZGlmaWVyXG52YXIgRU0gPSAzMzsgLy8gIERvIG5vdCBicmVhayBmcm9tIHByZWNlZGluZyBFbW9qaSBCYXNlXG52YXIgSDIgPSAzNDsgLy8gIEZvcm0gS29yZWFuIHN5bGxhYmxlIGJsb2Nrc1xudmFyIEgzID0gMzU7IC8vICBGb3JtIEtvcmVhbiBzeWxsYWJsZSBibG9ja3NcbnZhciBITCA9IDM2OyAvLyAgRG8gbm90IGJyZWFrIGFyb3VuZCBhIGZvbGxvd2luZyBoeXBoZW47IG90aGVyd2lzZSBhY3QgYXMgQWxwaGFiZXRpY1xudmFyIElEID0gMzc7IC8vICBCcmVhayBiZWZvcmUgb3IgYWZ0ZXI7IGV4Y2VwdCBpbiBzb21lIG51bWVyaWMgY29udGV4dFxudmFyIEpMID0gMzg7IC8vICBGb3JtIEtvcmVhbiBzeWxsYWJsZSBibG9ja3NcbnZhciBKViA9IDM5OyAvLyAgRm9ybSBLb3JlYW4gc3lsbGFibGUgYmxvY2tzXG52YXIgSlQgPSA0MDsgLy8gIEZvcm0gS29yZWFuIHN5bGxhYmxlIGJsb2Nrc1xudmFyIFJJID0gNDE7IC8vICBLZWVwIHBhaXJzIHRvZ2V0aGVyLiBGb3IgcGFpcnM7IGJyZWFrIGJlZm9yZSBhbmQgYWZ0ZXIgb3RoZXIgY2xhc3Nlc1xudmFyIFNBID0gNDI7IC8vICBQcm92aWRlIGEgbGluZSBicmVhayBvcHBvcnR1bml0eSBjb250aW5nZW50IG9uIGFkZGl0aW9uYWwsIGxhbmd1YWdlLXNwZWNpZmljIGNvbnRleHQgYW5hbHlzaXNcbnZhciBYWCA9IDQzOyAvLyAgSGF2ZSBhcyB5ZXQgdW5rbm93biBsaW5lIGJyZWFraW5nIGJlaGF2aW9yIG9yIHVuYXNzaWduZWQgY29kZSBwb3NpdGlvbnNcblxudmFyIGNsYXNzZXMgPSBleHBvcnRzLmNsYXNzZXMgPSB7XG4gICAgQks6IEJLLFxuICAgIENSOiBDUixcbiAgICBMRjogTEYsXG4gICAgQ006IENNLFxuICAgIE5MOiBOTCxcbiAgICBTRzogU0csXG4gICAgV0o6IFdKLFxuICAgIFpXOiBaVyxcbiAgICBHTDogR0wsXG4gICAgU1A6IFNQLFxuICAgIFpXSjogWldKLFxuICAgIEIyOiBCMixcbiAgICBCQTogQkEsXG4gICAgQkI6IEJCLFxuICAgIEhZOiBIWSxcbiAgICBDQjogQ0IsXG4gICAgQ0w6IENMLFxuICAgIENQOiBDUCxcbiAgICBFWDogRVgsXG4gICAgSU46IElOLFxuICAgIE5TOiBOUyxcbiAgICBPUDogT1AsXG4gICAgUVU6IFFVLFxuICAgIElTOiBJUyxcbiAgICBOVTogTlUsXG4gICAgUE86IFBPLFxuICAgIFBSOiBQUixcbiAgICBTWTogU1ksXG4gICAgQUk6IEFJLFxuICAgIEFMOiBBTCxcbiAgICBDSjogQ0osXG4gICAgRUI6IEVCLFxuICAgIEVNOiBFTSxcbiAgICBIMjogSDIsXG4gICAgSDM6IEgzLFxuICAgIEhMOiBITCxcbiAgICBJRDogSUQsXG4gICAgSkw6IEpMLFxuICAgIEpWOiBKVixcbiAgICBKVDogSlQsXG4gICAgUkk6IFJJLFxuICAgIFNBOiBTQSxcbiAgICBYWDogWFhcbn07XG5cbnZhciBCUkVBS19NQU5EQVRPUlkgPSBleHBvcnRzLkJSRUFLX01BTkRBVE9SWSA9ICchJztcbnZhciBCUkVBS19OT1RfQUxMT1dFRCA9IGV4cG9ydHMuQlJFQUtfTk9UX0FMTE9XRUQgPSAnw5cnO1xudmFyIEJSRUFLX0FMTE9XRUQgPSBleHBvcnRzLkJSRUFLX0FMTE9XRUQgPSAnw7cnO1xudmFyIFVuaWNvZGVUcmllID0gZXhwb3J0cy5Vbmljb2RlVHJpZSA9ICgwLCBfVHJpZS5jcmVhdGVUcmllRnJvbUJhc2U2NCkoX2xpbmVicmVha1RyaWUyLmRlZmF1bHQpO1xuXG52YXIgQUxQSEFCRVRJQ1MgPSBbQUwsIEhMXTtcbnZhciBIQVJEX0xJTkVfQlJFQUtTID0gW0JLLCBDUiwgTEYsIE5MXTtcbnZhciBTUEFDRSA9IFtTUCwgWlddO1xudmFyIFBSRUZJWF9QT1NURklYID0gW1BSLCBQT107XG52YXIgTElORV9CUkVBS1MgPSBIQVJEX0xJTkVfQlJFQUtTLmNvbmNhdChTUEFDRSk7XG52YXIgS09SRUFOX1NZTExBQkxFX0JMT0NLID0gW0pMLCBKViwgSlQsIEgyLCBIM107XG52YXIgSFlQSEVOID0gW0hZLCBCQV07XG5cbnZhciBjb2RlUG9pbnRzVG9DaGFyYWN0ZXJDbGFzc2VzID0gZXhwb3J0cy5jb2RlUG9pbnRzVG9DaGFyYWN0ZXJDbGFzc2VzID0gZnVuY3Rpb24gY29kZVBvaW50c1RvQ2hhcmFjdGVyQ2xhc3Nlcyhjb2RlUG9pbnRzKSB7XG4gICAgdmFyIGxpbmVCcmVhayA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogJ3N0cmljdCc7XG5cbiAgICB2YXIgdHlwZXMgPSBbXTtcbiAgICB2YXIgaW5kaWNpZXMgPSBbXTtcbiAgICB2YXIgY2F0ZWdvcmllcyA9IFtdO1xuICAgIGNvZGVQb2ludHMuZm9yRWFjaChmdW5jdGlvbiAoY29kZVBvaW50LCBpbmRleCkge1xuICAgICAgICB2YXIgY2xhc3NUeXBlID0gVW5pY29kZVRyaWUuZ2V0KGNvZGVQb2ludCk7XG4gICAgICAgIGlmIChjbGFzc1R5cGUgPiBMRVRURVJfTlVNQkVSX01PRElGSUVSKSB7XG4gICAgICAgICAgICBjYXRlZ29yaWVzLnB1c2godHJ1ZSk7XG4gICAgICAgICAgICBjbGFzc1R5cGUgLT0gTEVUVEVSX05VTUJFUl9NT0RJRklFUjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhdGVnb3JpZXMucHVzaChmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoWydub3JtYWwnLCAnYXV0bycsICdsb29zZSddLmluZGV4T2YobGluZUJyZWFrKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIC8vIFUrMjAxMCwg4oCTIFUrMjAxMywg44CcIFUrMzAxQywg44KgIFUrMzBBMFxuICAgICAgICAgICAgaWYgKFsweDIwMTAsIDB4MjAxMywgMHgzMDFjLCAweDMwYTBdLmluZGV4T2YoY29kZVBvaW50KSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBpbmRpY2llcy5wdXNoKGluZGV4KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZXMucHVzaChDQik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2xhc3NUeXBlID09PSBDTSB8fCBjbGFzc1R5cGUgPT09IFpXSikge1xuICAgICAgICAgICAgLy8gTEIxMCBUcmVhdCBhbnkgcmVtYWluaW5nIGNvbWJpbmluZyBtYXJrIG9yIFpXSiBhcyBBTC5cbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGluZGljaWVzLnB1c2goaW5kZXgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlcy5wdXNoKEFMKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gTEI5IERvIG5vdCBicmVhayBhIGNvbWJpbmluZyBjaGFyYWN0ZXIgc2VxdWVuY2U7IHRyZWF0IGl0IGFzIGlmIGl0IGhhcyB0aGUgbGluZSBicmVha2luZyBjbGFzcyBvZlxuICAgICAgICAgICAgLy8gdGhlIGJhc2UgY2hhcmFjdGVyIGluIGFsbCBvZiB0aGUgZm9sbG93aW5nIHJ1bGVzLiBUcmVhdCBaV0ogYXMgaWYgaXQgd2VyZSBDTS5cbiAgICAgICAgICAgIHZhciBwcmV2ID0gdHlwZXNbaW5kZXggLSAxXTtcbiAgICAgICAgICAgIGlmIChMSU5FX0JSRUFLUy5pbmRleE9mKHByZXYpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIGluZGljaWVzLnB1c2goaW5kaWNpZXNbaW5kZXggLSAxXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVzLnB1c2gocHJldik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbmRpY2llcy5wdXNoKGluZGV4KTtcbiAgICAgICAgICAgIHJldHVybiB0eXBlcy5wdXNoKEFMKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGluZGljaWVzLnB1c2goaW5kZXgpO1xuXG4gICAgICAgIGlmIChjbGFzc1R5cGUgPT09IENKKSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZXMucHVzaChsaW5lQnJlYWsgPT09ICdzdHJpY3QnID8gTlMgOiBJRCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2xhc3NUeXBlID09PSBTQSkge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVzLnB1c2goQUwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNsYXNzVHlwZSA9PT0gQUkpIHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlcy5wdXNoKEFMKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZvciBzdXBwbGVtZW50YXJ5IGNoYXJhY3RlcnMsIGEgdXNlZnVsIGRlZmF1bHQgaXMgdG8gdHJlYXQgY2hhcmFjdGVycyBpbiB0aGUgcmFuZ2UgMTAwMDAuLjFGRkZEIGFzIEFMXG4gICAgICAgIC8vIGFuZCBjaGFyYWN0ZXJzIGluIHRoZSByYW5nZXMgMjAwMDAuLjJGRkZEIGFuZCAzMDAwMC4uM0ZGRkQgYXMgSUQsIHVudGlsIHRoZSBpbXBsZW1lbnRhdGlvbiBjYW4gYmUgcmV2aXNlZFxuICAgICAgICAvLyB0byB0YWtlIGludG8gYWNjb3VudCB0aGUgYWN0dWFsIGxpbmUgYnJlYWtpbmcgcHJvcGVydGllcyBmb3IgdGhlc2UgY2hhcmFjdGVycy5cbiAgICAgICAgaWYgKGNsYXNzVHlwZSA9PT0gWFgpIHtcbiAgICAgICAgICAgIGlmIChjb2RlUG9pbnQgPj0gMHgyMDAwMCAmJiBjb2RlUG9pbnQgPD0gMHgyZmZmZCB8fCBjb2RlUG9pbnQgPj0gMHgzMDAwMCAmJiBjb2RlUG9pbnQgPD0gMHgzZmZmZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlcy5wdXNoKElEKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVzLnB1c2goQUwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdHlwZXMucHVzaChjbGFzc1R5cGUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIFtpbmRpY2llcywgdHlwZXMsIGNhdGVnb3JpZXNdO1xufTtcblxudmFyIGlzQWRqYWNlbnRXaXRoU3BhY2VJZ25vcmVkID0gZnVuY3Rpb24gaXNBZGphY2VudFdpdGhTcGFjZUlnbm9yZWQoYSwgYiwgY3VycmVudEluZGV4LCBjbGFzc1R5cGVzKSB7XG4gICAgdmFyIGN1cnJlbnQgPSBjbGFzc1R5cGVzW2N1cnJlbnRJbmRleF07XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYSkgPyBhLmluZGV4T2YoY3VycmVudCkgIT09IC0xIDogYSA9PT0gY3VycmVudCkge1xuICAgICAgICB2YXIgaSA9IGN1cnJlbnRJbmRleDtcbiAgICAgICAgd2hpbGUgKGkgPD0gY2xhc3NUeXBlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIHZhciBuZXh0ID0gY2xhc3NUeXBlc1tpXTtcblxuICAgICAgICAgICAgaWYgKG5leHQgPT09IGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5leHQgIT09IFNQKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY3VycmVudCA9PT0gU1ApIHtcbiAgICAgICAgdmFyIF9pID0gY3VycmVudEluZGV4O1xuXG4gICAgICAgIHdoaWxlIChfaSA+IDApIHtcbiAgICAgICAgICAgIF9pLS07XG4gICAgICAgICAgICB2YXIgcHJldiA9IGNsYXNzVHlwZXNbX2ldO1xuXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhKSA/IGEuaW5kZXhPZihwcmV2KSAhPT0gLTEgOiBhID09PSBwcmV2KSB7XG4gICAgICAgICAgICAgICAgdmFyIG4gPSBjdXJyZW50SW5kZXg7XG4gICAgICAgICAgICAgICAgd2hpbGUgKG4gPD0gY2xhc3NUeXBlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgbisrO1xuICAgICAgICAgICAgICAgICAgICB2YXIgX25leHQgPSBjbGFzc1R5cGVzW25dO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChfbmV4dCA9PT0gYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoX25leHQgIT09IFNQKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHByZXYgIT09IFNQKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxudmFyIHByZXZpb3VzTm9uU3BhY2VDbGFzc1R5cGUgPSBmdW5jdGlvbiBwcmV2aW91c05vblNwYWNlQ2xhc3NUeXBlKGN1cnJlbnRJbmRleCwgY2xhc3NUeXBlcykge1xuICAgIHZhciBpID0gY3VycmVudEluZGV4O1xuICAgIHdoaWxlIChpID49IDApIHtcbiAgICAgICAgdmFyIHR5cGUgPSBjbGFzc1R5cGVzW2ldO1xuICAgICAgICBpZiAodHlwZSA9PT0gU1ApIHtcbiAgICAgICAgICAgIGktLTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAwO1xufTtcblxudmFyIF9saW5lQnJlYWtBdEluZGV4ID0gZnVuY3Rpb24gX2xpbmVCcmVha0F0SW5kZXgoY29kZVBvaW50cywgY2xhc3NUeXBlcywgaW5kaWNpZXMsIGluZGV4LCBmb3JiaWRkZW5CcmVha3MpIHtcbiAgICBpZiAoaW5kaWNpZXNbaW5kZXhdID09PSAwKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICB2YXIgY3VycmVudEluZGV4ID0gaW5kZXggLSAxO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGZvcmJpZGRlbkJyZWFrcykgJiYgZm9yYmlkZGVuQnJlYWtzW2N1cnJlbnRJbmRleF0gPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIHZhciBiZWZvcmVJbmRleCA9IGN1cnJlbnRJbmRleCAtIDE7XG4gICAgdmFyIGFmdGVySW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xuICAgIHZhciBjdXJyZW50ID0gY2xhc3NUeXBlc1tjdXJyZW50SW5kZXhdO1xuXG4gICAgLy8gTEI0IEFsd2F5cyBicmVhayBhZnRlciBoYXJkIGxpbmUgYnJlYWtzLlxuICAgIC8vIExCNSBUcmVhdCBDUiBmb2xsb3dlZCBieSBMRiwgYXMgd2VsbCBhcyBDUiwgTEYsIGFuZCBOTCBhcyBoYXJkIGxpbmUgYnJlYWtzLlxuICAgIHZhciBiZWZvcmUgPSBiZWZvcmVJbmRleCA+PSAwID8gY2xhc3NUeXBlc1tiZWZvcmVJbmRleF0gOiAwO1xuICAgIHZhciBuZXh0ID0gY2xhc3NUeXBlc1thZnRlckluZGV4XTtcblxuICAgIGlmIChjdXJyZW50ID09PSBDUiAmJiBuZXh0ID09PSBMRikge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgaWYgKEhBUkRfTElORV9CUkVBS1MuaW5kZXhPZihjdXJyZW50KSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX01BTkRBVE9SWTtcbiAgICB9XG5cbiAgICAvLyBMQjYgRG8gbm90IGJyZWFrIGJlZm9yZSBoYXJkIGxpbmUgYnJlYWtzLlxuICAgIGlmIChIQVJEX0xJTkVfQlJFQUtTLmluZGV4T2YobmV4dCkgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjcgRG8gbm90IGJyZWFrIGJlZm9yZSBzcGFjZXMgb3IgemVybyB3aWR0aCBzcGFjZS5cbiAgICBpZiAoU1BBQ0UuaW5kZXhPZihuZXh0KSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCOCBCcmVhayBiZWZvcmUgYW55IGNoYXJhY3RlciBmb2xsb3dpbmcgYSB6ZXJvLXdpZHRoIHNwYWNlLCBldmVuIGlmIG9uZSBvciBtb3JlIHNwYWNlcyBpbnRlcnZlbmUuXG4gICAgaWYgKHByZXZpb3VzTm9uU3BhY2VDbGFzc1R5cGUoY3VycmVudEluZGV4LCBjbGFzc1R5cGVzKSA9PT0gWlcpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEI4YSBEbyBub3QgYnJlYWsgYmV0d2VlbiBhIHplcm8gd2lkdGggam9pbmVyIGFuZCBhbiBpZGVvZ3JhcGgsIGVtb2ppIGJhc2Ugb3IgZW1vamkgbW9kaWZpZXIuXG4gICAgaWYgKFVuaWNvZGVUcmllLmdldChjb2RlUG9pbnRzW2N1cnJlbnRJbmRleF0pID09PSBaV0ogJiYgKG5leHQgPT09IElEIHx8IG5leHQgPT09IEVCIHx8IG5leHQgPT09IEVNKSkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIxMSBEbyBub3QgYnJlYWsgYmVmb3JlIG9yIGFmdGVyIFdvcmQgam9pbmVyIGFuZCByZWxhdGVkIGNoYXJhY3RlcnMuXG4gICAgaWYgKGN1cnJlbnQgPT09IFdKIHx8IG5leHQgPT09IFdKKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjEyIERvIG5vdCBicmVhayBhZnRlciBOQlNQIGFuZCByZWxhdGVkIGNoYXJhY3RlcnMuXG4gICAgaWYgKGN1cnJlbnQgPT09IEdMKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjEyYSBEbyBub3QgYnJlYWsgYmVmb3JlIE5CU1AgYW5kIHJlbGF0ZWQgY2hhcmFjdGVycywgZXhjZXB0IGFmdGVyIHNwYWNlcyBhbmQgaHlwaGVucy5cbiAgICBpZiAoW1NQLCBCQSwgSFldLmluZGV4T2YoY3VycmVudCkgPT09IC0xICYmIG5leHQgPT09IEdMKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjEzIERvIG5vdCBicmVhayBiZWZvcmUg4oCYXeKAmSBvciDigJgh4oCZIG9yIOKAmDvigJkgb3Ig4oCYL+KAmSwgZXZlbiBhZnRlciBzcGFjZXMuXG4gICAgaWYgKFtDTCwgQ1AsIEVYLCBJUywgU1ldLmluZGV4T2YobmV4dCkgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjE0IERvIG5vdCBicmVhayBhZnRlciDigJhb4oCZLCBldmVuIGFmdGVyIHNwYWNlcy5cbiAgICBpZiAocHJldmlvdXNOb25TcGFjZUNsYXNzVHlwZShjdXJyZW50SW5kZXgsIGNsYXNzVHlwZXMpID09PSBPUCkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIxNSBEbyBub3QgYnJlYWsgd2l0aGluIOKAmOKAnVvigJksIGV2ZW4gd2l0aCBpbnRlcnZlbmluZyBzcGFjZXMuXG4gICAgaWYgKGlzQWRqYWNlbnRXaXRoU3BhY2VJZ25vcmVkKFFVLCBPUCwgY3VycmVudEluZGV4LCBjbGFzc1R5cGVzKSkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIxNiBEbyBub3QgYnJlYWsgYmV0d2VlbiBjbG9zaW5nIHB1bmN0dWF0aW9uIGFuZCBhIG5vbnN0YXJ0ZXIgKGxiPU5TKSwgZXZlbiB3aXRoIGludGVydmVuaW5nIHNwYWNlcy5cbiAgICBpZiAoaXNBZGphY2VudFdpdGhTcGFjZUlnbm9yZWQoW0NMLCBDUF0sIE5TLCBjdXJyZW50SW5kZXgsIGNsYXNzVHlwZXMpKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjE3IERvIG5vdCBicmVhayB3aXRoaW4g4oCY4oCU4oCU4oCZLCBldmVuIHdpdGggaW50ZXJ2ZW5pbmcgc3BhY2VzLlxuICAgIGlmIChpc0FkamFjZW50V2l0aFNwYWNlSWdub3JlZChCMiwgQjIsIGN1cnJlbnRJbmRleCwgY2xhc3NUeXBlcykpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCMTggQnJlYWsgYWZ0ZXIgc3BhY2VzLlxuICAgIGlmIChjdXJyZW50ID09PSBTUCkge1xuICAgICAgICByZXR1cm4gQlJFQUtfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjE5IERvIG5vdCBicmVhayBiZWZvcmUgb3IgYWZ0ZXIgcXVvdGF0aW9uIG1hcmtzLCBzdWNoIGFzIOKAmCDigJ0g4oCZLlxuICAgIGlmIChjdXJyZW50ID09PSBRVSB8fCBuZXh0ID09PSBRVSkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIyMCBCcmVhayBiZWZvcmUgYW5kIGFmdGVyIHVucmVzb2x2ZWQgQ0IuXG4gICAgaWYgKG5leHQgPT09IENCIHx8IGN1cnJlbnQgPT09IENCKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCMjEgRG8gbm90IGJyZWFrIGJlZm9yZSBoeXBoZW4tbWludXMsIG90aGVyIGh5cGhlbnMsIGZpeGVkLXdpZHRoIHNwYWNlcywgc21hbGwga2FuYSwgYW5kIG90aGVyIG5vbi1zdGFydGVycywgb3IgYWZ0ZXIgYWN1dGUgYWNjZW50cy5cbiAgICBpZiAoW0JBLCBIWSwgTlNdLmluZGV4T2YobmV4dCkgIT09IC0xIHx8IGN1cnJlbnQgPT09IEJCKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjIxYSBEb24ndCBicmVhayBhZnRlciBIZWJyZXcgKyBIeXBoZW4uXG4gICAgaWYgKGJlZm9yZSA9PT0gSEwgJiYgSFlQSEVOLmluZGV4T2YoY3VycmVudCkgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjIxYiBEb27igJl0IGJyZWFrIGJldHdlZW4gU29saWR1cyBhbmQgSGVicmV3IGxldHRlcnMuXG4gICAgaWYgKGN1cnJlbnQgPT09IFNZICYmIG5leHQgPT09IEhMKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjIyIERvIG5vdCBicmVhayBiZXR3ZWVuIHR3byBlbGxpcHNlcywgb3IgYmV0d2VlbiBsZXR0ZXJzLCBudW1iZXJzIG9yIGV4Y2xhbWF0aW9ucyBhbmQgZWxsaXBzaXMuXG4gICAgaWYgKG5leHQgPT09IElOICYmIEFMUEhBQkVUSUNTLmNvbmNhdChJTiwgRVgsIE5VLCBJRCwgRUIsIEVNKS5pbmRleE9mKGN1cnJlbnQpICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIyMyBEbyBub3QgYnJlYWsgYmV0d2VlbiBkaWdpdHMgYW5kIGxldHRlcnMuXG4gICAgaWYgKEFMUEhBQkVUSUNTLmluZGV4T2YobmV4dCkgIT09IC0xICYmIGN1cnJlbnQgPT09IE5VIHx8IEFMUEhBQkVUSUNTLmluZGV4T2YoY3VycmVudCkgIT09IC0xICYmIG5leHQgPT09IE5VKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjIzYSBEbyBub3QgYnJlYWsgYmV0d2VlbiBudW1lcmljIHByZWZpeGVzIGFuZCBpZGVvZ3JhcGhzLCBvciBiZXR3ZWVuIGlkZW9ncmFwaHMgYW5kIG51bWVyaWMgcG9zdGZpeGVzLlxuICAgIGlmIChjdXJyZW50ID09PSBQUiAmJiBbSUQsIEVCLCBFTV0uaW5kZXhPZihuZXh0KSAhPT0gLTEgfHwgW0lELCBFQiwgRU1dLmluZGV4T2YoY3VycmVudCkgIT09IC0xICYmIG5leHQgPT09IFBPKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjI0IERvIG5vdCBicmVhayBiZXR3ZWVuIG51bWVyaWMgcHJlZml4L3Bvc3RmaXggYW5kIGxldHRlcnMsIG9yIGJldHdlZW4gbGV0dGVycyBhbmQgcHJlZml4L3Bvc3RmaXguXG4gICAgaWYgKEFMUEhBQkVUSUNTLmluZGV4T2YoY3VycmVudCkgIT09IC0xICYmIFBSRUZJWF9QT1NURklYLmluZGV4T2YobmV4dCkgIT09IC0xIHx8IFBSRUZJWF9QT1NURklYLmluZGV4T2YoY3VycmVudCkgIT09IC0xICYmIEFMUEhBQkVUSUNTLmluZGV4T2YobmV4dCkgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjI1IERvIG5vdCBicmVhayBiZXR3ZWVuIHRoZSBmb2xsb3dpbmcgcGFpcnMgb2YgY2xhc3NlcyByZWxldmFudCB0byBudW1iZXJzOlxuICAgIGlmIChcbiAgICAvLyAoUFIgfCBQTykgw5cgKCBPUCB8IEhZICk/IE5VXG4gICAgW1BSLCBQT10uaW5kZXhPZihjdXJyZW50KSAhPT0gLTEgJiYgKG5leHQgPT09IE5VIHx8IFtPUCwgSFldLmluZGV4T2YobmV4dCkgIT09IC0xICYmIGNsYXNzVHlwZXNbYWZ0ZXJJbmRleCArIDFdID09PSBOVSkgfHxcbiAgICAvLyAoIE9QIHwgSFkgKSDDlyBOVVxuICAgIFtPUCwgSFldLmluZGV4T2YoY3VycmVudCkgIT09IC0xICYmIG5leHQgPT09IE5VIHx8XG4gICAgLy8gTlUgw5dcdChOVSB8IFNZIHwgSVMpXG4gICAgY3VycmVudCA9PT0gTlUgJiYgW05VLCBTWSwgSVNdLmluZGV4T2YobmV4dCkgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBOVSAoTlUgfCBTWSB8IElTKSogw5cgKE5VIHwgU1kgfCBJUyB8IENMIHwgQ1ApXG4gICAgaWYgKFtOVSwgU1ksIElTLCBDTCwgQ1BdLmluZGV4T2YobmV4dCkgIT09IC0xKSB7XG4gICAgICAgIHZhciBwcmV2SW5kZXggPSBjdXJyZW50SW5kZXg7XG4gICAgICAgIHdoaWxlIChwcmV2SW5kZXggPj0gMCkge1xuICAgICAgICAgICAgdmFyIHR5cGUgPSBjbGFzc1R5cGVzW3ByZXZJbmRleF07XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gTlUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFtTWSwgSVNdLmluZGV4T2YodHlwZSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcHJldkluZGV4LS07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gTlUgKE5VIHwgU1kgfCBJUykqIChDTCB8IENQKT8gw5cgKFBPIHwgUFIpKVxuICAgIGlmIChbUFIsIFBPXS5pbmRleE9mKG5leHQpICE9PSAtMSkge1xuICAgICAgICB2YXIgX3ByZXZJbmRleCA9IFtDTCwgQ1BdLmluZGV4T2YoY3VycmVudCkgIT09IC0xID8gYmVmb3JlSW5kZXggOiBjdXJyZW50SW5kZXg7XG4gICAgICAgIHdoaWxlIChfcHJldkluZGV4ID49IDApIHtcbiAgICAgICAgICAgIHZhciBfdHlwZSA9IGNsYXNzVHlwZXNbX3ByZXZJbmRleF07XG4gICAgICAgICAgICBpZiAoX3R5cGUgPT09IE5VKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChbU1ksIElTXS5pbmRleE9mKF90eXBlKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBfcHJldkluZGV4LS07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gTEIyNiBEbyBub3QgYnJlYWsgYSBLb3JlYW4gc3lsbGFibGUuXG4gICAgaWYgKEpMID09PSBjdXJyZW50ICYmIFtKTCwgSlYsIEgyLCBIM10uaW5kZXhPZihuZXh0KSAhPT0gLTEgfHwgW0pWLCBIMl0uaW5kZXhPZihjdXJyZW50KSAhPT0gLTEgJiYgW0pWLCBKVF0uaW5kZXhPZihuZXh0KSAhPT0gLTEgfHwgW0pULCBIM10uaW5kZXhPZihjdXJyZW50KSAhPT0gLTEgJiYgbmV4dCA9PT0gSlQpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCMjcgVHJlYXQgYSBLb3JlYW4gU3lsbGFibGUgQmxvY2sgdGhlIHNhbWUgYXMgSUQuXG4gICAgaWYgKEtPUkVBTl9TWUxMQUJMRV9CTE9DSy5pbmRleE9mKGN1cnJlbnQpICE9PSAtMSAmJiBbSU4sIFBPXS5pbmRleE9mKG5leHQpICE9PSAtMSB8fCBLT1JFQU5fU1lMTEFCTEVfQkxPQ0suaW5kZXhPZihuZXh0KSAhPT0gLTEgJiYgY3VycmVudCA9PT0gUFIpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCMjggRG8gbm90IGJyZWFrIGJldHdlZW4gYWxwaGFiZXRpY3MgKOKAnGF04oCdKS5cbiAgICBpZiAoQUxQSEFCRVRJQ1MuaW5kZXhPZihjdXJyZW50KSAhPT0gLTEgJiYgQUxQSEFCRVRJQ1MuaW5kZXhPZihuZXh0KSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCMjkgRG8gbm90IGJyZWFrIGJldHdlZW4gbnVtZXJpYyBwdW5jdHVhdGlvbiBhbmQgYWxwaGFiZXRpY3MgKOKAnGUuZy7igJ0pLlxuICAgIGlmIChjdXJyZW50ID09PSBJUyAmJiBBTFBIQUJFVElDUy5pbmRleE9mKG5leHQpICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIzMCBEbyBub3QgYnJlYWsgYmV0d2VlbiBsZXR0ZXJzLCBudW1iZXJzLCBvciBvcmRpbmFyeSBzeW1ib2xzIGFuZCBvcGVuaW5nIG9yIGNsb3NpbmcgcGFyZW50aGVzZXMuXG4gICAgaWYgKEFMUEhBQkVUSUNTLmNvbmNhdChOVSkuaW5kZXhPZihjdXJyZW50KSAhPT0gLTEgJiYgbmV4dCA9PT0gT1AgfHwgQUxQSEFCRVRJQ1MuY29uY2F0KE5VKS5pbmRleE9mKG5leHQpICE9PSAtMSAmJiBjdXJyZW50ID09PSBDUCkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIzMGEgQnJlYWsgYmV0d2VlbiB0d28gcmVnaW9uYWwgaW5kaWNhdG9yIHN5bWJvbHMgaWYgYW5kIG9ubHkgaWYgdGhlcmUgYXJlIGFuIGV2ZW4gbnVtYmVyIG9mIHJlZ2lvbmFsXG4gICAgLy8gaW5kaWNhdG9ycyBwcmVjZWRpbmcgdGhlIHBvc2l0aW9uIG9mIHRoZSBicmVhay5cbiAgICBpZiAoY3VycmVudCA9PT0gUkkgJiYgbmV4dCA9PT0gUkkpIHtcbiAgICAgICAgdmFyIGkgPSBpbmRpY2llc1tjdXJyZW50SW5kZXhdO1xuICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICB3aGlsZSAoaSA+IDApIHtcbiAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgIGlmIChjbGFzc1R5cGVzW2ldID09PSBSSSkge1xuICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjb3VudCAlIDIgIT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIExCMzBiIERvIG5vdCBicmVhayBiZXR3ZWVuIGFuIGVtb2ppIGJhc2UgYW5kIGFuIGVtb2ppIG1vZGlmaWVyLlxuICAgIGlmIChjdXJyZW50ID09PSBFQiAmJiBuZXh0ID09PSBFTSkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIEJSRUFLX0FMTE9XRUQ7XG59O1xuXG52YXIgbGluZUJyZWFrQXRJbmRleCA9IGV4cG9ydHMubGluZUJyZWFrQXRJbmRleCA9IGZ1bmN0aW9uIGxpbmVCcmVha0F0SW5kZXgoY29kZVBvaW50cywgaW5kZXgpIHtcbiAgICAvLyBMQjIgTmV2ZXIgYnJlYWsgYXQgdGhlIHN0YXJ0IG9mIHRleHQuXG4gICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjMgQWx3YXlzIGJyZWFrIGF0IHRoZSBlbmQgb2YgdGV4dC5cbiAgICBpZiAoaW5kZXggPj0gY29kZVBvaW50cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX01BTkRBVE9SWTtcbiAgICB9XG5cbiAgICB2YXIgX2NvZGVQb2ludHNUb0NoYXJhY3RlID0gY29kZVBvaW50c1RvQ2hhcmFjdGVyQ2xhc3Nlcyhjb2RlUG9pbnRzKSxcbiAgICAgICAgX2NvZGVQb2ludHNUb0NoYXJhY3RlMiA9IF9zbGljZWRUb0FycmF5KF9jb2RlUG9pbnRzVG9DaGFyYWN0ZSwgMiksXG4gICAgICAgIGluZGljaWVzID0gX2NvZGVQb2ludHNUb0NoYXJhY3RlMlswXSxcbiAgICAgICAgY2xhc3NUeXBlcyA9IF9jb2RlUG9pbnRzVG9DaGFyYWN0ZTJbMV07XG5cbiAgICByZXR1cm4gX2xpbmVCcmVha0F0SW5kZXgoY29kZVBvaW50cywgY2xhc3NUeXBlcywgaW5kaWNpZXMsIGluZGV4KTtcbn07XG5cbnZhciBjc3NGb3JtYXR0ZWRDbGFzc2VzID0gZnVuY3Rpb24gY3NzRm9ybWF0dGVkQ2xhc3Nlcyhjb2RlUG9pbnRzLCBvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSB7IGxpbmVCcmVhazogJ25vcm1hbCcsIHdvcmRCcmVhazogJ25vcm1hbCcgfTtcbiAgICB9XG5cbiAgICB2YXIgX2NvZGVQb2ludHNUb0NoYXJhY3RlMyA9IGNvZGVQb2ludHNUb0NoYXJhY3RlckNsYXNzZXMoY29kZVBvaW50cywgb3B0aW9ucy5saW5lQnJlYWspLFxuICAgICAgICBfY29kZVBvaW50c1RvQ2hhcmFjdGU0ID0gX3NsaWNlZFRvQXJyYXkoX2NvZGVQb2ludHNUb0NoYXJhY3RlMywgMyksXG4gICAgICAgIGluZGljaWVzID0gX2NvZGVQb2ludHNUb0NoYXJhY3RlNFswXSxcbiAgICAgICAgY2xhc3NUeXBlcyA9IF9jb2RlUG9pbnRzVG9DaGFyYWN0ZTRbMV0sXG4gICAgICAgIGlzTGV0dGVyTnVtYmVyID0gX2NvZGVQb2ludHNUb0NoYXJhY3RlNFsyXTtcblxuICAgIGlmIChvcHRpb25zLndvcmRCcmVhayA9PT0gJ2JyZWFrLWFsbCcgfHwgb3B0aW9ucy53b3JkQnJlYWsgPT09ICdicmVhay13b3JkJykge1xuICAgICAgICBjbGFzc1R5cGVzID0gY2xhc3NUeXBlcy5tYXAoZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybiBbTlUsIEFMLCBTQV0uaW5kZXhPZih0eXBlKSAhPT0gLTEgPyBJRCA6IHR5cGU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBmb3JiaWRkZW5CcmVha3BvaW50cyA9IG9wdGlvbnMud29yZEJyZWFrID09PSAna2VlcC1hbGwnID8gaXNMZXR0ZXJOdW1iZXIubWFwKGZ1bmN0aW9uIChpc0xldHRlck51bWJlciwgaSkge1xuICAgICAgICByZXR1cm4gaXNMZXR0ZXJOdW1iZXIgJiYgY29kZVBvaW50c1tpXSA+PSAweDRlMDAgJiYgY29kZVBvaW50c1tpXSA8PSAweDlmZmY7XG4gICAgfSkgOiBudWxsO1xuXG4gICAgcmV0dXJuIFtpbmRpY2llcywgY2xhc3NUeXBlcywgZm9yYmlkZGVuQnJlYWtwb2ludHNdO1xufTtcblxudmFyIGlubGluZUJyZWFrT3Bwb3J0dW5pdGllcyA9IGV4cG9ydHMuaW5saW5lQnJlYWtPcHBvcnR1bml0aWVzID0gZnVuY3Rpb24gaW5saW5lQnJlYWtPcHBvcnR1bml0aWVzKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBjb2RlUG9pbnRzID0gKDAsIF9VdGlsLnRvQ29kZVBvaW50cykoc3RyKTtcbiAgICB2YXIgb3V0cHV0ID0gQlJFQUtfTk9UX0FMTE9XRUQ7XG5cbiAgICB2YXIgX2Nzc0Zvcm1hdHRlZENsYXNzZXMgPSBjc3NGb3JtYXR0ZWRDbGFzc2VzKGNvZGVQb2ludHMsIG9wdGlvbnMpLFxuICAgICAgICBfY3NzRm9ybWF0dGVkQ2xhc3NlczIgPSBfc2xpY2VkVG9BcnJheShfY3NzRm9ybWF0dGVkQ2xhc3NlcywgMyksXG4gICAgICAgIGluZGljaWVzID0gX2Nzc0Zvcm1hdHRlZENsYXNzZXMyWzBdLFxuICAgICAgICBjbGFzc1R5cGVzID0gX2Nzc0Zvcm1hdHRlZENsYXNzZXMyWzFdLFxuICAgICAgICBmb3JiaWRkZW5CcmVha3BvaW50cyA9IF9jc3NGb3JtYXR0ZWRDbGFzc2VzMlsyXTtcblxuICAgIGNvZGVQb2ludHMuZm9yRWFjaChmdW5jdGlvbiAoY29kZVBvaW50LCBpKSB7XG4gICAgICAgIG91dHB1dCArPSAoMCwgX1V0aWwuZnJvbUNvZGVQb2ludCkoY29kZVBvaW50KSArIChpID49IGNvZGVQb2ludHMubGVuZ3RoIC0gMSA/IEJSRUFLX01BTkRBVE9SWSA6IF9saW5lQnJlYWtBdEluZGV4KGNvZGVQb2ludHMsIGNsYXNzVHlwZXMsIGluZGljaWVzLCBpICsgMSwgZm9yYmlkZGVuQnJlYWtwb2ludHMpKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBvdXRwdXQ7XG59O1xuXG52YXIgQnJlYWsgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQnJlYWsoY29kZVBvaW50cywgbGluZUJyZWFrLCBzdGFydCwgZW5kKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCcmVhayk7XG5cbiAgICAgICAgdGhpcy5fY29kZVBvaW50cyA9IGNvZGVQb2ludHM7XG4gICAgICAgIHRoaXMucmVxdWlyZWQgPSBsaW5lQnJlYWsgPT09IEJSRUFLX01BTkRBVE9SWTtcbiAgICAgICAgdGhpcy5zdGFydCA9IHN0YXJ0O1xuICAgICAgICB0aGlzLmVuZCA9IGVuZDtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQnJlYWssIFt7XG4gICAgICAgIGtleTogJ3NsaWNlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNsaWNlKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9VdGlsLmZyb21Db2RlUG9pbnQuYXBwbHkodW5kZWZpbmVkLCBfdG9Db25zdW1hYmxlQXJyYXkodGhpcy5fY29kZVBvaW50cy5zbGljZSh0aGlzLnN0YXJ0LCB0aGlzLmVuZCkpKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBCcmVhaztcbn0oKTtcblxudmFyIExpbmVCcmVha2VyID0gZXhwb3J0cy5MaW5lQnJlYWtlciA9IGZ1bmN0aW9uIExpbmVCcmVha2VyKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBjb2RlUG9pbnRzID0gKDAsIF9VdGlsLnRvQ29kZVBvaW50cykoc3RyKTtcblxuICAgIHZhciBfY3NzRm9ybWF0dGVkQ2xhc3NlczMgPSBjc3NGb3JtYXR0ZWRDbGFzc2VzKGNvZGVQb2ludHMsIG9wdGlvbnMpLFxuICAgICAgICBfY3NzRm9ybWF0dGVkQ2xhc3NlczQgPSBfc2xpY2VkVG9BcnJheShfY3NzRm9ybWF0dGVkQ2xhc3NlczMsIDMpLFxuICAgICAgICBpbmRpY2llcyA9IF9jc3NGb3JtYXR0ZWRDbGFzc2VzNFswXSxcbiAgICAgICAgY2xhc3NUeXBlcyA9IF9jc3NGb3JtYXR0ZWRDbGFzc2VzNFsxXSxcbiAgICAgICAgZm9yYmlkZGVuQnJlYWtwb2ludHMgPSBfY3NzRm9ybWF0dGVkQ2xhc3NlczRbMl07XG5cbiAgICB2YXIgbGVuZ3RoID0gY29kZVBvaW50cy5sZW5ndGg7XG4gICAgdmFyIGxhc3RFbmQgPSAwO1xuICAgIHZhciBuZXh0SW5kZXggPSAwO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICAgIGlmIChuZXh0SW5kZXggPj0gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGxpbmVCcmVhayA9IEJSRUFLX05PVF9BTExPV0VEO1xuICAgICAgICAgICAgd2hpbGUgKG5leHRJbmRleCA8IGxlbmd0aCAmJiAobGluZUJyZWFrID0gX2xpbmVCcmVha0F0SW5kZXgoY29kZVBvaW50cywgY2xhc3NUeXBlcywgaW5kaWNpZXMsICsrbmV4dEluZGV4LCBmb3JiaWRkZW5CcmVha3BvaW50cykpID09PSBCUkVBS19OT1RfQUxMT1dFRCkge31cblxuICAgICAgICAgICAgaWYgKGxpbmVCcmVhayAhPT0gQlJFQUtfTk9UX0FMTE9XRUQgfHwgbmV4dEluZGV4ID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBuZXcgQnJlYWsoY29kZVBvaW50cywgbGluZUJyZWFrLCBsYXN0RW5kLCBuZXh0SW5kZXgpO1xuICAgICAgICAgICAgICAgIGxhc3RFbmQgPSBuZXh0SW5kZXg7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlIH07XG4gICAgICAgIH1cbiAgICB9O1xufTtcblxuLyoqKi8gfSksXG4vKiA0OCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlRyaWUgPSBleHBvcnRzLmNyZWF0ZVRyaWVGcm9tQmFzZTY0ID0gZXhwb3J0cy5VVFJJRTJfSU5ERVhfMl9NQVNLID0gZXhwb3J0cy5VVFJJRTJfSU5ERVhfMl9CTE9DS19MRU5HVEggPSBleHBvcnRzLlVUUklFMl9PTUlUVEVEX0JNUF9JTkRFWF8xX0xFTkdUSCA9IGV4cG9ydHMuVVRSSUUyX0lOREVYXzFfT0ZGU0VUID0gZXhwb3J0cy5VVFJJRTJfVVRGOF8yQl9JTkRFWF8yX0xFTkdUSCA9IGV4cG9ydHMuVVRSSUUyX1VURjhfMkJfSU5ERVhfMl9PRkZTRVQgPSBleHBvcnRzLlVUUklFMl9JTkRFWF8yX0JNUF9MRU5HVEggPSBleHBvcnRzLlVUUklFMl9MU0NQX0lOREVYXzJfTEVOR1RIID0gZXhwb3J0cy5VVFJJRTJfREFUQV9NQVNLID0gZXhwb3J0cy5VVFJJRTJfREFUQV9CTE9DS19MRU5HVEggPSBleHBvcnRzLlVUUklFMl9MU0NQX0lOREVYXzJfT0ZGU0VUID0gZXhwb3J0cy5VVFJJRTJfU0hJRlRfMV8yID0gZXhwb3J0cy5VVFJJRTJfSU5ERVhfU0hJRlQgPSBleHBvcnRzLlVUUklFMl9TSElGVF8xID0gZXhwb3J0cy5VVFJJRTJfU0hJRlRfMiA9IHVuZGVmaW5lZDtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9VdGlsID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMyk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qKiBTaGlmdCBzaXplIGZvciBnZXR0aW5nIHRoZSBpbmRleC0yIHRhYmxlIG9mZnNldC4gKi9cbnZhciBVVFJJRTJfU0hJRlRfMiA9IGV4cG9ydHMuVVRSSUUyX1NISUZUXzIgPSA1O1xuXG4vKiogU2hpZnQgc2l6ZSBmb3IgZ2V0dGluZyB0aGUgaW5kZXgtMSB0YWJsZSBvZmZzZXQuICovXG52YXIgVVRSSUUyX1NISUZUXzEgPSBleHBvcnRzLlVUUklFMl9TSElGVF8xID0gNiArIDU7XG5cbi8qKlxuICogU2hpZnQgc2l6ZSBmb3Igc2hpZnRpbmcgbGVmdCB0aGUgaW5kZXggYXJyYXkgdmFsdWVzLlxuICogSW5jcmVhc2VzIHBvc3NpYmxlIGRhdGEgc2l6ZSB3aXRoIDE2LWJpdCBpbmRleCB2YWx1ZXMgYXQgdGhlIGNvc3RcbiAqIG9mIGNvbXBhY3RhYmlsaXR5LlxuICogVGhpcyByZXF1aXJlcyBkYXRhIGJsb2NrcyB0byBiZSBhbGlnbmVkIGJ5IFVUUklFMl9EQVRBX0dSQU5VTEFSSVRZLlxuICovXG52YXIgVVRSSUUyX0lOREVYX1NISUZUID0gZXhwb3J0cy5VVFJJRTJfSU5ERVhfU0hJRlQgPSAyO1xuXG4vKipcbiAqIERpZmZlcmVuY2UgYmV0d2VlbiB0aGUgdHdvIHNoaWZ0IHNpemVzLFxuICogZm9yIGdldHRpbmcgYW4gaW5kZXgtMSBvZmZzZXQgZnJvbSBhbiBpbmRleC0yIG9mZnNldC4gNj0xMS01XG4gKi9cbnZhciBVVFJJRTJfU0hJRlRfMV8yID0gZXhwb3J0cy5VVFJJRTJfU0hJRlRfMV8yID0gVVRSSUUyX1NISUZUXzEgLSBVVFJJRTJfU0hJRlRfMjtcblxuLyoqXG4gKiBUaGUgcGFydCBvZiB0aGUgaW5kZXgtMiB0YWJsZSBmb3IgVStEODAwLi5VK0RCRkYgc3RvcmVzIHZhbHVlcyBmb3JcbiAqIGxlYWQgc3Vycm9nYXRlIGNvZGUgX3VuaXRzXyBub3QgY29kZSBfcG9pbnRzXy5cbiAqIFZhbHVlcyBmb3IgbGVhZCBzdXJyb2dhdGUgY29kZSBfcG9pbnRzXyBhcmUgaW5kZXhlZCB3aXRoIHRoaXMgcG9ydGlvbiBvZiB0aGUgdGFibGUuXG4gKiBMZW5ndGg9MzI9MHgyMD0weDQwMD4+VVRSSUUyX1NISUZUXzIuIChUaGVyZSBhcmUgMTAyND0weDQwMCBsZWFkIHN1cnJvZ2F0ZXMuKVxuICovXG52YXIgVVRSSUUyX0xTQ1BfSU5ERVhfMl9PRkZTRVQgPSBleHBvcnRzLlVUUklFMl9MU0NQX0lOREVYXzJfT0ZGU0VUID0gMHgxMDAwMCA+PiBVVFJJRTJfU0hJRlRfMjtcblxuLyoqIE51bWJlciBvZiBlbnRyaWVzIGluIGEgZGF0YSBibG9jay4gMzI9MHgyMCAqL1xudmFyIFVUUklFMl9EQVRBX0JMT0NLX0xFTkdUSCA9IGV4cG9ydHMuVVRSSUUyX0RBVEFfQkxPQ0tfTEVOR1RIID0gMSA8PCBVVFJJRTJfU0hJRlRfMjtcbi8qKiBNYXNrIGZvciBnZXR0aW5nIHRoZSBsb3dlciBiaXRzIGZvciB0aGUgaW4tZGF0YS1ibG9jayBvZmZzZXQuICovXG52YXIgVVRSSUUyX0RBVEFfTUFTSyA9IGV4cG9ydHMuVVRSSUUyX0RBVEFfTUFTSyA9IFVUUklFMl9EQVRBX0JMT0NLX0xFTkdUSCAtIDE7XG5cbnZhciBVVFJJRTJfTFNDUF9JTkRFWF8yX0xFTkdUSCA9IGV4cG9ydHMuVVRSSUUyX0xTQ1BfSU5ERVhfMl9MRU5HVEggPSAweDQwMCA+PiBVVFJJRTJfU0hJRlRfMjtcbi8qKiBDb3VudCB0aGUgbGVuZ3RocyBvZiBib3RoIEJNUCBwaWVjZXMuIDIwODA9MHg4MjAgKi9cbnZhciBVVFJJRTJfSU5ERVhfMl9CTVBfTEVOR1RIID0gZXhwb3J0cy5VVFJJRTJfSU5ERVhfMl9CTVBfTEVOR1RIID0gVVRSSUUyX0xTQ1BfSU5ERVhfMl9PRkZTRVQgKyBVVFJJRTJfTFNDUF9JTkRFWF8yX0xFTkdUSDtcbi8qKlxuICogVGhlIDItYnl0ZSBVVEYtOCB2ZXJzaW9uIG9mIHRoZSBpbmRleC0yIHRhYmxlIGZvbGxvd3MgYXQgb2Zmc2V0IDIwODA9MHg4MjAuXG4gKiBMZW5ndGggMzI9MHgyMCBmb3IgbGVhZCBieXRlcyBDMC4uREYsIHJlZ2FyZGxlc3Mgb2YgVVRSSUUyX1NISUZUXzIuXG4gKi9cbnZhciBVVFJJRTJfVVRGOF8yQl9JTkRFWF8yX09GRlNFVCA9IGV4cG9ydHMuVVRSSUUyX1VURjhfMkJfSU5ERVhfMl9PRkZTRVQgPSBVVFJJRTJfSU5ERVhfMl9CTVBfTEVOR1RIO1xudmFyIFVUUklFMl9VVEY4XzJCX0lOREVYXzJfTEVOR1RIID0gZXhwb3J0cy5VVFJJRTJfVVRGOF8yQl9JTkRFWF8yX0xFTkdUSCA9IDB4ODAwID4+IDY7IC8qIFUrMDgwMCBpcyB0aGUgZmlyc3QgY29kZSBwb2ludCBhZnRlciAyLWJ5dGUgVVRGLTggKi9cbi8qKlxuICogVGhlIGluZGV4LTEgdGFibGUsIG9ubHkgdXNlZCBmb3Igc3VwcGxlbWVudGFyeSBjb2RlIHBvaW50cywgYXQgb2Zmc2V0IDIxMTI9MHg4NDAuXG4gKiBWYXJpYWJsZSBsZW5ndGgsIGZvciBjb2RlIHBvaW50cyB1cCB0byBoaWdoU3RhcnQsIHdoZXJlIHRoZSBsYXN0IHNpbmdsZS12YWx1ZSByYW5nZSBzdGFydHMuXG4gKiBNYXhpbXVtIGxlbmd0aCA1MTI9MHgyMDA9MHgxMDAwMDA+PlVUUklFMl9TSElGVF8xLlxuICogKEZvciAweDEwMDAwMCBzdXBwbGVtZW50YXJ5IGNvZGUgcG9pbnRzIFUrMTAwMDAuLlUrMTBmZmZmLilcbiAqXG4gKiBUaGUgcGFydCBvZiB0aGUgaW5kZXgtMiB0YWJsZSBmb3Igc3VwcGxlbWVudGFyeSBjb2RlIHBvaW50cyBzdGFydHNcbiAqIGFmdGVyIHRoaXMgaW5kZXgtMSB0YWJsZS5cbiAqXG4gKiBCb3RoIHRoZSBpbmRleC0xIHRhYmxlIGFuZCB0aGUgZm9sbG93aW5nIHBhcnQgb2YgdGhlIGluZGV4LTIgdGFibGVcbiAqIGFyZSBvbWl0dGVkIGNvbXBsZXRlbHkgaWYgdGhlcmUgaXMgb25seSBCTVAgZGF0YS5cbiAqL1xudmFyIFVUUklFMl9JTkRFWF8xX09GRlNFVCA9IGV4cG9ydHMuVVRSSUUyX0lOREVYXzFfT0ZGU0VUID0gVVRSSUUyX1VURjhfMkJfSU5ERVhfMl9PRkZTRVQgKyBVVFJJRTJfVVRGOF8yQl9JTkRFWF8yX0xFTkdUSDtcblxuLyoqXG4gKiBOdW1iZXIgb2YgaW5kZXgtMSBlbnRyaWVzIGZvciB0aGUgQk1QLiAzMj0weDIwXG4gKiBUaGlzIHBhcnQgb2YgdGhlIGluZGV4LTEgdGFibGUgaXMgb21pdHRlZCBmcm9tIHRoZSBzZXJpYWxpemVkIGZvcm0uXG4gKi9cbnZhciBVVFJJRTJfT01JVFRFRF9CTVBfSU5ERVhfMV9MRU5HVEggPSBleHBvcnRzLlVUUklFMl9PTUlUVEVEX0JNUF9JTkRFWF8xX0xFTkdUSCA9IDB4MTAwMDAgPj4gVVRSSUUyX1NISUZUXzE7XG5cbi8qKiBOdW1iZXIgb2YgZW50cmllcyBpbiBhbiBpbmRleC0yIGJsb2NrLiA2ND0weDQwICovXG52YXIgVVRSSUUyX0lOREVYXzJfQkxPQ0tfTEVOR1RIID0gZXhwb3J0cy5VVFJJRTJfSU5ERVhfMl9CTE9DS19MRU5HVEggPSAxIDw8IFVUUklFMl9TSElGVF8xXzI7XG4vKiogTWFzayBmb3IgZ2V0dGluZyB0aGUgbG93ZXIgYml0cyBmb3IgdGhlIGluLWluZGV4LTItYmxvY2sgb2Zmc2V0LiAqL1xudmFyIFVUUklFMl9JTkRFWF8yX01BU0sgPSBleHBvcnRzLlVUUklFMl9JTkRFWF8yX01BU0sgPSBVVFJJRTJfSU5ERVhfMl9CTE9DS19MRU5HVEggLSAxO1xuXG52YXIgY3JlYXRlVHJpZUZyb21CYXNlNjQgPSBleHBvcnRzLmNyZWF0ZVRyaWVGcm9tQmFzZTY0ID0gZnVuY3Rpb24gY3JlYXRlVHJpZUZyb21CYXNlNjQoYmFzZTY0KSB7XG4gICAgdmFyIGJ1ZmZlciA9ICgwLCBfVXRpbC5kZWNvZGUpKGJhc2U2NCk7XG4gICAgdmFyIHZpZXczMiA9IEFycmF5LmlzQXJyYXkoYnVmZmVyKSA/ICgwLCBfVXRpbC5wb2x5VWludDMyQXJyYXkpKGJ1ZmZlcikgOiBuZXcgVWludDMyQXJyYXkoYnVmZmVyKTtcbiAgICB2YXIgdmlldzE2ID0gQXJyYXkuaXNBcnJheShidWZmZXIpID8gKDAsIF9VdGlsLnBvbHlVaW50MTZBcnJheSkoYnVmZmVyKSA6IG5ldyBVaW50MTZBcnJheShidWZmZXIpO1xuICAgIHZhciBoZWFkZXJMZW5ndGggPSAyNDtcblxuICAgIHZhciBpbmRleCA9IHZpZXcxNi5zbGljZShoZWFkZXJMZW5ndGggLyAyLCB2aWV3MzJbNF0gLyAyKTtcbiAgICB2YXIgZGF0YSA9IHZpZXczMls1XSA9PT0gMiA/IHZpZXcxNi5zbGljZSgoaGVhZGVyTGVuZ3RoICsgdmlldzMyWzRdKSAvIDIpIDogdmlldzMyLnNsaWNlKE1hdGguY2VpbCgoaGVhZGVyTGVuZ3RoICsgdmlldzMyWzRdKSAvIDQpKTtcblxuICAgIHJldHVybiBuZXcgVHJpZSh2aWV3MzJbMF0sIHZpZXczMlsxXSwgdmlldzMyWzJdLCB2aWV3MzJbM10sIGluZGV4LCBkYXRhKTtcbn07XG5cbnZhciBUcmllID0gZXhwb3J0cy5UcmllID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRyaWUoaW5pdGlhbFZhbHVlLCBlcnJvclZhbHVlLCBoaWdoU3RhcnQsIGhpZ2hWYWx1ZUluZGV4LCBpbmRleCwgZGF0YSkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHJpZSk7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsVmFsdWUgPSBpbml0aWFsVmFsdWU7XG4gICAgICAgIHRoaXMuZXJyb3JWYWx1ZSA9IGVycm9yVmFsdWU7XG4gICAgICAgIHRoaXMuaGlnaFN0YXJ0ID0gaGlnaFN0YXJ0O1xuICAgICAgICB0aGlzLmhpZ2hWYWx1ZUluZGV4ID0gaGlnaFZhbHVlSW5kZXg7XG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHZhbHVlIGZvciBhIGNvZGUgcG9pbnQgYXMgc3RvcmVkIGluIHRoZSBUcmllLlxuICAgICAqXG4gICAgICogQHBhcmFtIGNvZGVQb2ludCB0aGUgY29kZSBwb2ludFxuICAgICAqIEByZXR1cm4gdGhlIHZhbHVlXG4gICAgICovXG5cblxuICAgIF9jcmVhdGVDbGFzcyhUcmllLCBbe1xuICAgICAgICBrZXk6ICdnZXQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0KGNvZGVQb2ludCkge1xuICAgICAgICAgICAgdmFyIGl4ID0gdm9pZCAwO1xuICAgICAgICAgICAgaWYgKGNvZGVQb2ludCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvZGVQb2ludCA8IDB4MGQ4MDAgfHwgY29kZVBvaW50ID4gMHgwZGJmZiAmJiBjb2RlUG9pbnQgPD0gMHgwZmZmZikge1xuICAgICAgICAgICAgICAgICAgICAvLyBPcmRpbmFyeSBCTVAgY29kZSBwb2ludCwgZXhjbHVkaW5nIGxlYWRpbmcgc3Vycm9nYXRlcy5cbiAgICAgICAgICAgICAgICAgICAgLy8gQk1QIHVzZXMgYSBzaW5nbGUgbGV2ZWwgbG9va3VwLiAgQk1QIGluZGV4IHN0YXJ0cyBhdCBvZmZzZXQgMCBpbiB0aGUgVHJpZTIgaW5kZXguXG4gICAgICAgICAgICAgICAgICAgIC8vIDE2IGJpdCBkYXRhIGlzIHN0b3JlZCBpbiB0aGUgaW5kZXggYXJyYXkgaXRzZWxmLlxuICAgICAgICAgICAgICAgICAgICBpeCA9IHRoaXMuaW5kZXhbY29kZVBvaW50ID4+IFVUUklFMl9TSElGVF8yXTtcbiAgICAgICAgICAgICAgICAgICAgaXggPSAoaXggPDwgVVRSSUUyX0lOREVYX1NISUZUKSArIChjb2RlUG9pbnQgJiBVVFJJRTJfREFUQV9NQVNLKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVtpeF07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGNvZGVQb2ludCA8PSAweGZmZmYpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTGVhZCBTdXJyb2dhdGUgQ29kZSBQb2ludC4gIEEgU2VwYXJhdGUgaW5kZXggc2VjdGlvbiBpcyBzdG9yZWQgZm9yXG4gICAgICAgICAgICAgICAgICAgIC8vIGxlYWQgc3Vycm9nYXRlIGNvZGUgdW5pdHMgYW5kIGNvZGUgcG9pbnRzLlxuICAgICAgICAgICAgICAgICAgICAvLyAgIFRoZSBtYWluIGluZGV4IGhhcyB0aGUgY29kZSB1bml0IGRhdGEuXG4gICAgICAgICAgICAgICAgICAgIC8vICAgRm9yIHRoaXMgZnVuY3Rpb24sIHdlIG5lZWQgdGhlIGNvZGUgcG9pbnQgZGF0YS5cbiAgICAgICAgICAgICAgICAgICAgLy8gTm90ZTogdGhpcyBleHByZXNzaW9uIGNvdWxkIGJlIHJlZmFjdG9yZWQgZm9yIHNsaWdodGx5IGltcHJvdmVkIGVmZmljaWVuY3ksIGJ1dFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICBzdXJyb2dhdGUgY29kZSBwb2ludHMgd2lsbCBiZSBzbyByYXJlIGluIHByYWN0aWNlIHRoYXQgaXQncyBub3Qgd29ydGggaXQuXG4gICAgICAgICAgICAgICAgICAgIGl4ID0gdGhpcy5pbmRleFtVVFJJRTJfTFNDUF9JTkRFWF8yX09GRlNFVCArIChjb2RlUG9pbnQgLSAweGQ4MDAgPj4gVVRSSUUyX1NISUZUXzIpXTtcbiAgICAgICAgICAgICAgICAgICAgaXggPSAoaXggPDwgVVRSSUUyX0lOREVYX1NISUZUKSArIChjb2RlUG9pbnQgJiBVVFJJRTJfREFUQV9NQVNLKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVtpeF07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGNvZGVQb2ludCA8IHRoaXMuaGlnaFN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFN1cHBsZW1lbnRhbCBjb2RlIHBvaW50LCB1c2UgdHdvLWxldmVsIGxvb2t1cC5cbiAgICAgICAgICAgICAgICAgICAgaXggPSBVVFJJRTJfSU5ERVhfMV9PRkZTRVQgLSBVVFJJRTJfT01JVFRFRF9CTVBfSU5ERVhfMV9MRU5HVEggKyAoY29kZVBvaW50ID4+IFVUUklFMl9TSElGVF8xKTtcbiAgICAgICAgICAgICAgICAgICAgaXggPSB0aGlzLmluZGV4W2l4XTtcbiAgICAgICAgICAgICAgICAgICAgaXggKz0gY29kZVBvaW50ID4+IFVUUklFMl9TSElGVF8yICYgVVRSSUUyX0lOREVYXzJfTUFTSztcbiAgICAgICAgICAgICAgICAgICAgaXggPSB0aGlzLmluZGV4W2l4XTtcbiAgICAgICAgICAgICAgICAgICAgaXggPSAoaXggPDwgVVRSSUUyX0lOREVYX1NISUZUKSArIChjb2RlUG9pbnQgJiBVVFJJRTJfREFUQV9NQVNLKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVtpeF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjb2RlUG9pbnQgPD0gMHgxMGZmZmYpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVt0aGlzLmhpZ2hWYWx1ZUluZGV4XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEZhbGwgdGhyb3VnaC4gIFRoZSBjb2RlIHBvaW50IGlzIG91dHNpZGUgb2YgdGhlIGxlZ2FsIHJhbmdlIG9mIDAuLjB4MTBmZmZmLlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JWYWx1ZTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBUcmllO1xufSgpO1xuXG4vKioqLyB9KSxcbi8qIDQ5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gJ0t3QUFBQUFBQUFBQUNBNEFJRG9BQVBBZkFBQUNBQUFBQUFBSUFCQUFHQUJBQUVnQVVBQllBRjRBWmdCZUFHWUFZQUJvQUhBQWVBQmVBR1lBZkFDRUFJQUFpQUNRQUpnQW9BQ29BSzBBdFFDOUFNVUFYZ0JtQUY0QVpnQmVBR1lBelFEVkFGNEFaZ0RSQU5rQTNnRG1BT3dBOUFEOEFBUUJEQUVVQVJvQklnR0FBSWdBSndFdkFUY0JQd0ZGQVUwQlRBRlVBVndCWkFGc0FYTUJld0dEQVRBQWl3R1RBWnNCb2dHa0Fhd0J0QUc4QWNJQnlnSFNBZG9CNEFIb0FmQUIrQUgrQVFZQ0RnSVdBdjRCSGdJbUFpNENOZ0krQWtVQ1RRSlRBbHNDWXdKckFuRUNlUUtCQWswQ2lRS1JBcGtDb1FLb0FyQUN1QUxBQXNRQ3pBSXdBTlFDM0FMa0FqQUE3QUwwQXZ3Q0FRTUpBeEFER0FNd0FDQURKZ011QXpZRFBnT0FBRVlEU2dOU0ExSURVZ05hQTFvRFlBTmlBMklEZ0FDQUFHb0RnQUJ5QTNZRGZnT0FBSVFEZ0FDS0E1SURtZ09BQUlBQW9nT3FBNEFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSzhEdHdPQUFJQUF2d1BIQTg4RDF3UGZBeUFENXdQc0EvUUQvQU9BQUlBQUJBUU1CQklFZ0FBV0JCNEVKZ1F1QkRNRUlBTTdCRUVFWGdCSkJDQURVUVJaQkdFRWFRUXdBREFBY1FRK0FYa0VnUVNKQkpFRWdBQ1lCSUFBb0FTb0JLOEV0d1F3QUw4RXhRU0FBSUFBZ0FDQUFJQUFnQUNnQU0wRVhnQmVBRjRBWGdCZUFGNEFYZ0JlQU5VRVhnRFpCT0VFWGdEcEJQRUUrUVFCQlFrRkVRVVpCU0VGS1FVeEJUVUZQUVZGQlV3RlZBVmNCVjRBWXdWZUFHc0Zjd1Y3QllNRml3V1NCVjRBbWdXZ0JhY0ZYZ0JlQUY0QVhnQmVBS3NGWGdDeUJiRUZ1Z1c3QmNJRndnWElCY0lGd2dYUUJkUUYzQVhrQmVzRjh3WDdCUU1HQ3dZVEJoc0dJd1lyQmpNR093WmVBRDhHUndaTkJsNEFWQVpiQmw0QVhnQmVBRjRBWGdCZUFGNEFYZ0JlQUY0QVhnQmVBR01HWGdCcUJuRUdYZ0JlQUY0QVhnQmVBRjRBWGdCZUFGNEFYZ0I1Qm9BRzR3U0dCbzRHa3dhQUFJQURIZ1I1QUY0QVhnQmVBSnNHZ0FCR0E0QUFvd2FyQnJNR3N3YWdBTHNHd3diTEJqQUEwd2JhQnRvRzNRYmFCdG9HMmdiYUJ0b0cyZ2JsQnVzRzh3YjdCZ01IQ3djVEJ4c0hDd2NqQnlzSE1BYzFCelVIT2dkQ0I5b0dTZ2RTQjFvSFlBZmFCbG9IYUFmYUJsSUgyZ2JhQnRvRzJnYmFCdG9HMmdiYUJqVUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVIYlFkZUFGNEFOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFkMUIzMEhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUI0TUgyZ2FLQjY4RWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUk4SGx3ZGVBSjhIcHdlQUFJQUFyd2UzQjE0QVhnQy9COFVIeWdjd0FOQUgyQWZnQjRBQTZBZndCejRCK0FjQUNGd0JDQWdQQ0JjSW9nRVlBUjhJSndpQUFDOElOd2cvQ0NBRFJ3aFBDRmNJWHdobkNFb0RHZ1NBQUlBQWdBQnZDSGNJZUFoNUNIb0lld2g4Q0gwSWR3aDRDSGtJZWdoN0NId0lmUWgzQ0hnSWVRaDZDSHNJZkFoOUNIY0llQWg1Q0hvSWV3aDhDSDBJZHdoNENIa0llZ2g3Q0h3SWZRaDNDSGdJZVFoNkNIc0lmQWg5Q0hjSWVBaDVDSG9JZXdoOENIMElkd2g0Q0hrSWVnaDdDSHdJZlFoM0NIZ0llUWg2Q0hzSWZBaDlDSGNJZUFoNUNIb0lld2g4Q0gwSWR3aDRDSGtJZWdoN0NId0lmUWgzQ0hnSWVRaDZDSHNJZkFoOUNIY0llQWg1Q0hvSWV3aDhDSDBJZHdoNENIa0llZ2g3Q0h3SWZRaDNDSGdJZVFoNkNIc0lmQWg5Q0hjSWVBaDVDSG9JZXdoOENIMElkd2g0Q0hrSWVnaDdDSHdJZlFoM0NIZ0llUWg2Q0hzSWZBaDlDSGNJZUFoNUNIb0lld2g4Q0gwSWR3aDRDSGtJZWdoN0NId0lmUWgzQ0hnSWVRaDZDSHNJZkFoOUNIY0llQWg1Q0hvSWV3aDhDSDBJZHdoNENIa0llZ2g3Q0h3SWZRaDNDSGdJZVFoNkNIc0lmQWg5Q0hjSWVBaDVDSG9JZXdoOENIMElkd2g0Q0hrSWVnaDdDSHdJZlFoM0NIZ0llUWg2Q0hzSWZBaDlDSGNJZUFoNUNIb0lld2g4Q0gwSWR3aDRDSGtJZWdoN0NId0lmUWgzQ0hnSWVRaDZDSHNJZkFoOUNIY0llQWg1Q0hvSWV3aDhDSDBJZHdoNENIa0llZ2g3Q0h3SWZRaDNDSGdJZVFoNkNIc0lmQWg5Q0hjSWVBaDVDSG9JZXdoOENIMElkd2g0Q0hrSWVnaDdDSHdJZlFoM0NIZ0llUWg2Q0hzSWZBaDlDSGNJZUFoNUNIb0lld2g4Q0gwSWR3aDRDSGtJZWdoN0NId0lmUWgzQ0hnSWVRaDZDSHNJZkFoOUNIY0llQWg1Q0hvSWV3aDhDSDBJZHdoNENIa0llZ2g3Q0h3SWZRaDNDSGdJZVFoNkNIc0lmQWg5Q0hjSWVBaDVDSG9JZXdoOENIMElkd2g0Q0hrSWVnaDdDSHdJZlFoM0NIZ0llUWg2Q0hzSWZBaDlDSGNJZUFoNUNIb0lld2g4Q0gwSWR3aDRDSGtJZWdoN0NId0lmUWgzQ0hnSWVRaDZDSHNJZkFoOUNIY0llQWg1Q0hvSWV3aDhDSDBJZHdoNENIa0llZ2g3Q0h3SWhBaUxDSTRJTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QUpZSWxnaVdDSllJbGdpV0NKWUlsZ2lXQ0pZSWxnaVdDSllJbGdpV0NKWUlsZ2lXQ0pZSWxnaVdDSllJbGdpV0NKWUlsZ2lXQ0pZSWxnaVdDSllJbGdnd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQjU0SU5RYzFCNklJMmdhcUNMSUl1Z2lBQUlBQXZnakdDSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBeXdpSEFZQUEwd2lBQU5rSTNRamxDTzBJOUFqOENJQUFnQUNBQUFJSkNna1NDUm9KSWdrbkNUWUhMd2szQ1pZSWxnaVdDSllJbGdpV0NKWUlsZ2lXQ0pZSWxnaVdDSllJbGdpV0NKWUlsZ2lXQ0pZSWxnaVdDSllJbGdpV0NKWUlsZ2lXQ0pZSWxnaVdDSllJbGdpQUFJQUFBQUZBQVhnQmVBR0FBY0FCZUFId0FRQUNRQUtBQXJRQzlBSjRBWGdCZUFFMEEzZ0JSQU40QTdBRDhBTXdCR2dFQUFLY0JOd0VGQVV3QlhBRjRRa2hDbUVLbkFyY0NnQUhIQXNBQno0TEFBY0FCd0FIQUFkK0M2QUJvQUcrQy80TEFBY0FCd0FIQUFjK0RGNE1BQWNBQjU0TTNnd2VEVjRObmczZURhQUJvQUdnQWFBQm9BR2dBYUFCb0FHZ0FhQUJvQUdnQWFBQm9BR2dBYUFCb0FHZ0FhQUJvQUVlRHFBQlZnNldEcUFCb1E2Z0FhQUJvQUhYRHZjT053LzNEdmNPOXc3M0R2Y085dzczRHZjTzl3NzNEdmNPOXc3M0R2Y085dzczRHZjTzl3NzNEdmNPOXc3M0R2Y085dzczRHZjTzl3NzNEdmNPOXc3M0RuY1BBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCN2NQUHdsR0NVNEpNQUNBQUlBQWdBQldDVjRKWVFtQUFHa0pjQWw0Q1h3SmdBa3dBREFBTUFBd0FJZ0pnQUNMQ1pNSmdBQ1pDWjhKb3dtckNZQUFzd2t3QUY0QVhnQjhBSUFBdXdrQUJNTUp5UW1BQU00SmdBRFZDVEFBTUFBd0FEQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFxd1lXQk5rSU1BQXdBREFBTUFEZENlQUo2QW51Q1I0RTlna3dBUDRKQlFvTkNqQUFNQUNBQUJVSzB3aUFBQjBLSkFvc0NqUUtnQUF3QUR3S1F3cUFBRXNLdlFtZENWTUtXd293QURBQWdBQ0FBTGNFTUFDQUFHTUtnQUJyQ2pBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQWVCREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FJa0VQUUZ6Q25vS2lRU0NDb29La0FxSkJKZ0tvQXFrQ29rRUdBR3NDclFLdkFyQkNqQUFNQURKQ3RFS0ZRSFpDdUVLL2dIcEN2RUtNQUF3QURBQU1BQ0FBSXdFK1Fvd0FJQUFQd0VCQ3pBQU1BQXdBREFBTUFDQUFBa0xFUXN3QUlBQVB3RVpDeUVMZ0FBT0NDa0xNQUF4Q3prTE1BQXdBREFBTUFBd0FEQUFYZ0JlQUVFTE1BQXdBREFBTUFBd0FEQUFNQUF3QUVrTFRRdFZDNEFBWEF0a0M0QUFpUWt3QURBQU1BQXdBREFBTUFBd0FEQUFiQXR4QzNrTGdBdUZDNHNMTUFBd0FKTUxsd3VmQ3pBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBcHdzd0FEQUFNQUNBQUlBQWdBQ3ZDNEFBZ0FDQUFJQUFnQUNBQUxjTE1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBdnd1QUFNY0xnQUNBQUlBQWdBQ0FBSUFBeWd1QUFJQUFnQUNBQUlBQTBRc3dBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBTmtMZ0FDQUFJQUE0QXN3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0pDUjRFNkFzd0FEQUFod0h3QzRBQStBc0FEQWdNRUF3d0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFDQUFJQUFHQXdkRENVTU1BQXdBQzBNTlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlF3MUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSFBRd3dBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEVUhOUWMxQnpVSE5RYzFCelVITlFjMkJ6QUFNQUE1RERVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RZEZEREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFnQUNBQUlBQVRReFNERm9NTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBRjRBWGdCZUFGNEFYZ0JlQUY0QVlneGVBR29NWGdCeERIa01md3hlQUlVTVhnQmVBSTBNTUFBd0FEQUFNQUF3QUY0QVhnQ1ZESjBNTUFBd0FEQUFNQUJlQUY0QXBReGVBS3NNc3d5N0RGNEF3Z3k5RE1vTVhnQmVBRjRBWGdCZUFGNEFYZ0JlQUY0QVhnRFJETmtNZVFCcUNlQU0zQXg4QU9ZTTdBejBEUGdNWGdCZUFGNEFYZ0JlQUY0QVhnQmVBRjRBWGdCZUFGNEFYZ0JlQUY0QVhnQ2dBQUFOb0FBSERRNE5GZzB3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBZURTWU5NQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FJQUFnQUNBQUlBQWdBQ0FBQzROTUFCZUFGNEFOZzB3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QUQ0TlJnMU9EVllOWGcxbURUQUFiUTB3QURBQU1BQXdBREFBTUFBd0FEQUEyZ2JhQnRvRzJnYmFCdG9HMmdiYUJuVU5lZzNDQllBTndnV0ZEZG9HakEzYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2FVRFp3TnBBMm9EZG9HMmdhd0RiY052dzNIRGRvRzJnYlBEZFlOM0EzZkRlWU4yZ2JzRGZNTjJnYmFCdm9OL2czYUJnWU9EZzdhQmw0QVhnQmVBQllPWGdCZUFDVUcyZ1llRGw0QUpBNWVBQ3dPMnczYUJ0b0dNUTQ1RHRvRzJnYmFCdG9HUVE3YUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ1pKRGpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQjFFTzJnWTFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFkWkRqVUhOUWMxQnpVSE5RYzFCMkVPTlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVIYUE0MUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQjNBTzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnWTFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQjJFTzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnWkpEdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCa2tPZUE2Z0FLQUFvQUF3QURBQU1BQXdBS0FBb0FDZ0FLQUFvQUNnQUtBQWdBNHdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFELy93UUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBMEFBd0FCQUFFQUFnQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUtBQk1BRndBZUFCc0FHZ0FlQUJjQUZnQVNBQjRBR3dBWUFBOEFHQUFjQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQUdBQVlBQjRBSGdBZUFCTUFIZ0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFGZ0FiQUJJQUhnQWVBQjRBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQllBRFFBUkFCNEFCQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUJBQUVBQVFBQkFBRUFBVUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBa0FGZ0FhQUJzQUd3QWJBQjRBSFFBZEFCNEFUd0FYQUI0QURRQWVBQjRBR2dBYkFFOEFUd0FPQUZBQUhRQWRBQjBBVHdCUEFCY0FUd0JQQUU4QUZnQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFIUUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjBBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0JRQUI0QUhnQWVBQjRBVUFCUUFGQUFVQUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFlQUI0QUhnQWVBRkFBVHdCQUFFOEFUd0JQQUVBQVR3QlFBRkFBVHdCUUFCNEFIZ0FlQUI0QUhnQWVBQjBBSFFBZEFCMEFIZ0FkQUI0QURnQlFBRkFBVUFCUUFGQUFIZ0FlQUI0QUhnQWVBQjRBSGdCUUFCNEFVQUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUpBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBa0FDUUFKQUFrQUNRQUpBQWtBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFlQUI0QUhnQWVBRkFBSGdBZUFCNEFLd0FyQUZBQVVBQlFBRkFBR0FCUUFDc0FLd0FyQUNzQUhnQWVBRkFBSGdCUUFGQUFVQUFyQUZBQUt3QWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBS3dBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUJBQUVBQVFBQkFBRUFBUUFCQUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQVVBQWVBQjRBSGdBZUFCNEFIZ0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBWUFBMEFLd0FyQUI0QUhnQWJBQ3NBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBRFFBRUFCNEFCQUFFQUI0QUJBQUVBQk1BQkFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBVmdCV0FGWUFWZ0JXQUZZQVZnQldBRllBVmdCV0FGWUFWZ0JXQUZZQVZnQldBRllBVmdCV0FGWUFWZ0JXQUZZQVZnQldBRllBS3dBckFDc0FLd0FyQUZZQVZnQldBQjRBSGdBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFHZ0FhQUJvQUdBQVlBQjRBSGdBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFFd0FFQUNzQUV3QVRBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFCb0FHUUFaQUI0QVVBQlFBQVFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUJNQVVBQUVBQVFBQkFBRUFBUUFCQUFFQUI0QUhnQUVBQVFBQkFBRUFBUUFCQUJRQUZBQUJBQUVBQjRBQkFBRUFBUUFCQUJRQUZBQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QlFBRkFBVUFBZUFCNEFVQUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBS3dBZUFGQUFCQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFGQUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQVVBQlFBQjRBSGdBWUFCTUFVQUFyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFFQUFRQUJBQUVBRkFBQkFBRUFBUUFCQUFFQUZBQUJBQUVBQVFBVUFBRUFBUUFCQUFFQUFRQUt3QXJBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFFQUFRQUJBQXJBQ3NBSGdBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBZUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQUVBQVFBQkFCUUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFGQUFCQUFFQUFRQUJBQUVBQVFBQkFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFBUUFCQUFOQUEwQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QWVBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUJBQUVBQVFBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFGQUFVQUFyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FVQUJRQUZBQVVBQlFBRkFBVUFBckFGQUFLd0FyQUNzQVVBQlFBRkFBVUFBckFDc0FCQUJRQUFRQUJBQUVBQVFBQkFBRUFBUUFLd0FyQUFRQUJBQXJBQ3NBQkFBRUFBUUFVQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FCQUFyQUNzQUt3QXJBRkFBVUFBckFGQUFVQUJRQUFRQUJBQXJBQ3NBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCUUFGQUFHZ0FhQUZBQVVBQlFBRkFBVUFCTUFCNEFHd0JRQUI0QUt3QXJBQ3NBQkFBRUFBUUFLd0JRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FyQUZBQVVBQXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUZBQVVBQXJBRkFBVUFBckFGQUFVQUFyQUNzQUJBQXJBQVFBQkFBRUFBUUFCQUFyQUNzQUt3QXJBQVFBQkFBckFDc0FCQUFFQUFRQUt3QXJBQ3NBQkFBckFDc0FLd0FyQUNzQUt3QXJBRkFBVUFCUUFGQUFLd0JRQUNzQUt3QXJBQ3NBS3dBckFDc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0FFQUFRQVVBQlFBRkFBQkFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FCQUFFQUFRQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBRkFBVUFCUUFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQXJBRkFBVUFBckFGQUFVQUJRQUZBQVVBQXJBQ3NBQkFCUUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBckFBUUFCQUFFQUNzQUJBQUVBQVFBS3dBckFGQUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBVUFCUUFBUUFCQUFyQUNzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QWVBQnNBS3dBckFDc0FLd0FyQUNzQUt3QlFBQVFBQkFBRUFBUUFCQUFFQUNzQUJBQUVBQVFBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFGQUFVQUFyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBRUFBUUFCQUFFQUFRQUt3QXJBQVFBQkFBckFDc0FCQUFFQUFRQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUFRQUJBQXJBQ3NBS3dBckFGQUFVQUFyQUZBQVVBQlFBQVFBQkFBckFDc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0FlQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FFQUZBQUt3QlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QlFBRkFBVUFBckFGQUFVQUJRQUZBQUt3QXJBQ3NBVUFCUUFDc0FVQUFyQUZBQVVBQXJBQ3NBS3dCUUFGQUFLd0FyQUNzQVVBQlFBRkFBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBQ3NBS3dBRUFBUUFCQUFFQUFRQUt3QXJBQ3NBQkFBRUFBUUFLd0FFQUFRQUJBQUVBQ3NBS3dCUUFDc0FLd0FyQUNzQUt3QXJBQVFBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFGQUFVQUJRQUI0QUhnQWVBQjRBSGdBZUFCc0FIZ0FyQUNzQUt3QXJBQ3NBQkFBRUFBUUFCQUFyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUZBQVVBQlFBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQUt3QXJBRkFBQkFBRUFBUUFCQUFFQUFRQUJBQXJBQVFBQkFBRUFDc0FCQUFFQUFRQUJBQXJBQ3NBS3dBckFDc0FLd0FyQUFRQUJBQXJBRkFBVUFCUUFDc0FLd0FyQUNzQUt3QlFBRkFBQkFBRUFDc0FLd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFCNEFVQUFFQUFRQUJBQXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBRkFBVUFCUUFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FVQUJRQUZBQVVBQlFBQ3NBS3dBRUFGQUFCQUFFQUFRQUJBQUVBQVFBQkFBckFBUUFCQUFFQUNzQUJBQUVBQVFBQkFBckFDc0FLd0FyQUNzQUt3QXJBQVFBQkFBckFDc0FLd0FyQUNzQUt3QXJBRkFBS3dCUUFGQUFCQUFFQUNzQUt3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBQ3NBVUFCUUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUJBQUVBRkFBQkFBRUFBUUFCQUFFQUFRQUJBQXJBQVFBQkFBRUFDc0FCQUFFQUFRQUJBQlFBQjRBS3dBckFDc0FLd0JRQUZBQVVBQUVBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBQkFBRUFDc0FLd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUJvQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUFRQUJBQXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQVVBQXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBRUFDc0FLd0FyQUNzQUJBQUVBQVFBQkFBRUFBUUFLd0FFQUNzQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUNzQUt3QXJBQ3NBS3dBckFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FLd0FyQUFRQUJBQWVBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQXFBRndBWEFBcUFDb0FLZ0FxQUNvQUtnQXFBQ3NBS3dBckFDc0FHd0JjQUZ3QVhBQmNBRndBWEFCY0FDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBZUFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FEUUFOQUNzQUt3QXJBQ3NBS3dCY0FGd0FLd0JjQUNzQUt3QmNBRndBS3dCY0FDc0FLd0JjQUNzQUt3QXJBQ3NBS3dBckFGd0FYQUJjQUZ3QUt3QmNBRndBWEFCY0FGd0FYQUJjQUNzQVhBQmNBRndBS3dCY0FDc0FYQUFyQUNzQVhBQmNBQ3NBWEFCY0FGd0FYQUFxQUZ3QVhBQXFBQ29BS2dBcUFDb0FLZ0FyQUNvQUtnQmNBQ3NBS3dCY0FGd0FYQUJjQUZ3QUt3QmNBQ3NBS2dBcUFDb0FLZ0FxQUNvQUt3QXJBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBS3dBckFGd0FYQUJjQUZ3QVVBQU9BQTRBRGdBT0FCNEFEZ0FPQUFrQURnQU9BQTBBQ1FBVEFCTUFFd0FUQUJNQUNRQWVBQk1BSGdBZUFCNEFCQUFFQUI0QUhnQWVBQjRBSGdBZUFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFOQUFRQUhnQUVBQjRBQkFBV0FCRUFGZ0FSQUFRQUJBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QXJBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFOQUFRQUJBQUVBQVFBQkFBTkFBUUFCQUJRQUZBQVVBQlFBRkFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFDc0FCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQ3NBRFFBTkFCNEFIZ0FlQUI0QUhnQWVBQVFBSGdBZUFCNEFIZ0FlQUI0QUt3QWVBQjRBRGdBT0FBMEFEZ0FlQUI0QUhnQWVBQjRBQ1FBSkFDc0FLd0FyQUNzQUt3QmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQXFBRndBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dBTkFBMEFIZ0FlQUI0QUhnQmNBRndBWEFCY0FGd0FYQUFxQUNvQUtnQXFBRndBWEFCY0FGd0FLZ0FxQUNvQVhBQXFBQ29BS2dCY0FGd0FLZ0FxQUNvQUtnQXFBQ29BS2dCY0FGd0FYQUFxQUNvQUtnQXFBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FLZ0FxQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUNvQVhBQXFBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBS2dBcUFDb0FLZ0FxQUNvQVVBQlFBRkFBVUFCUUFGQUFLd0JRQUNzQUt3QXJBQ3NBS3dCUUFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFlQUZBQVVBQlFBRkFBV0FCWUFGZ0FXQUJZQUZnQVdBQllBRmdBV0FCWUFGZ0FXQUJZQUZnQVdBQllBRmdBV0FCWUFGZ0FXQUJZQUZnQVdBQllBRmdBV0FCWUFGZ0FXQUJZQUZrQVdRQlpBRmtBV1FCWkFGa0FXUUJaQUZrQVdRQlpBRmtBV1FCWkFGa0FXUUJaQUZrQVdRQlpBRmtBV1FCWkFGa0FXUUJaQUZrQVdRQlpBRmtBV1FCYUFGb0FXZ0JhQUZvQVdnQmFBRm9BV2dCYUFGb0FXZ0JhQUZvQVdnQmFBRm9BV2dCYUFGb0FXZ0JhQUZvQVdnQmFBRm9BV2dCYUFGb0FXZ0JhQUZvQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QlFBRkFBVUFCUUFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFDc0FVQUFyQUZBQVVBQlFBRkFBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FVQUJRQUZBQVVBQXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBVUFCUUFGQUFVQUFyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUZBQUt3QlFBRkFBVUFCUUFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFGQUFVQUJRQUZBQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBS3dBRUFBUUFCQUFlQUEwQUhnQWVBQjRBSGdBZUFCNEFIZ0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQ3NBS3dBckFDc0FLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFGQUFVQUJRQUZBQVVBQlFBQ3NBS3dBTkFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQWVBQjRBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQTBBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQllBRVFBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQURRQU5BQTBBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0FyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUZBQVVBQlFBRkFBQkFBRUFBUUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUFRQUJBQUVBQTBBRFFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBRUFBUUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFGQUFVQUJRQUNzQUJBQUVBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUFxQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUNvQURRQU5BQlVBWEFBTkFCNEFEUUFiQUZ3QUtnQXJBQ3NBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBS3dBckFDc0FLd0FyQUI0QUhnQVRBQk1BRFFBTkFBNEFIZ0FUQUJNQUhnQUVBQVFBQkFBSkFDc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFBUUFCQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFCQUJRQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUNzQUt3QXJBQ3NBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFLd0FyQUNzQUt3QWVBQ3NBS3dBckFCTUFFd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUNzQUt3QmNBRndBWEFCY0FGd0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBQ3NBS3dBckFDc0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FLd0FyQUNzQUt3QXJBQ3NBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCY0FDc0FLd0FyQUNvQUtnQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFCQUFFQUFRQUJBQUVBQ3NBS3dBZUFCNEFYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQXJBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBckFDc0FCQUJMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUNzQUt3QXJBQ3NBS3dBckFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FLd0FyQUNzQUt3QXJBQ3NBS2dBcUFDb0FLZ0FxQUNvQUtnQmNBQ29BS2dBcUFDb0FLZ0FxQUNzQUt3QUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFyQUFRQUJBQUVBQVFBQkFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBRUFBUUFCQUFFQUFRQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QXJBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBRFFBTkFCNEFEUUFOQUEwQURRQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQ3NBS3dBckFBUUFCQUFFQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFVQUJRQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBSGdBZUFCNEFIZ0JRQUZBQVVBQlFBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBckFDc0FLd0FOQUEwQURRQU5BQTBBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dBckFDc0FLd0JRQUZBQVVBQkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFOQUEwQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBckFDc0FLd0FyQUNzQUt3QXJBQ3NBQkFBRUFBUUFIZ0FFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBRkFBVUFCUUFGQUFCQUJRQUZBQVVBQlFBQVFBQkFBRUFGQUFVQUFFQUFRQUJBQXJBQ3NBS3dBckFDc0FLd0FFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFLd0FFQUFRQUJBQUVBQVFBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUZBQUt3QlFBQ3NBVUFBckFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUt3QXJBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFDc0FIZ0FlQUI0QUhnQWVBQjRBSGdBZUFGQUFIZ0FlQUI0QVVBQlFBRkFBS3dBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFGQUFVQUJRQUZBQUt3QXJBQjRBSGdBZUFCNEFIZ0FlQUNzQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQXJBQ3NBVUFCUUFGQUFLd0FlQUI0QUhnQWVBQjRBSGdBZUFBNEFIZ0FyQUEwQURRQU5BQTBBRFFBTkFBMEFDUUFOQUEwQURRQUlBQVFBQ3dBRUFBUUFEUUFKQUEwQURRQU1BQjBBSFFBZUFCY0FGd0FXQUJjQUZ3QVhBQllBRndBZEFCMEFIZ0FlQUJRQUZBQVVBQTBBQVFBQkFBUUFCQUFFQUFRQUJBQUpBQm9BR2dBYUFCb0FHZ0FhQUJvQUdnQWVBQmNBRndBZEFCVUFGUUFlQUI0QUhnQWVBQjRBSGdBWUFCWUFFUUFWQUJVQUZRQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBTkFCNEFEUUFOQUEwQURRQWVBQTBBRFFBTkFBY0FIZ0FlQUI0QUhnQXJBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBVUFCUUFDc0FLd0JQQUZBQVVBQlFBRkFBVUFBZUFCNEFIZ0FXQUJFQVR3QlFBRThBVHdCUEFFOEFVQUJRQUZBQVVBQlFBQjRBSGdBZUFCWUFFUUFyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFDc0FHd0FiQUJzQUd3QWJBQnNBR3dBYUFCc0FHd0FiQUJzQUd3QWJBQnNBR3dBYkFCc0FHd0FiQUJzQUd3QWFBQnNBR3dBYkFCc0FHZ0FiQUJzQUdnQWJBQnNBR3dBYkFCc0FHd0FiQUJzQUd3QWJBQnNBR3dBYkFCc0FHd0FiQUJzQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFCNEFIZ0JRQUJvQUhnQWRBQjRBVUFBZUFCb0FIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFUd0FlQUZBQUd3QWVBQjRBVUFCUUFGQUFVQUJRQUI0QUhnQWVBQjBBSFFBZUFGQUFIZ0JRQUI0QVVBQWVBRkFBVHdCUUFGQUFIZ0FlQUI0QUhnQWVBQjRBSGdCUUFGQUFVQUJRQUZBQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0JRQUI0QVVBQlFBRkFBVUFCUEFFOEFVQUJRQUZBQVVBQlFBRThBVUFCUUFFOEFVQUJQQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlFBRkFBVUFCUUFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUEFFOEFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFIZ0FlQUZBQVVBQlFBRkFBVHdBZUFCNEFLd0FyQUNzQUt3QWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZEFCNEFIUUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhRQWVBQjBBSFFBZUFCNEFIZ0FkQUIwQUhnQWVBQjBBSGdBZUFCNEFIUUFlQUIwQUd3QWJBQjRBSFFBZUFCNEFIZ0FlQUIwQUhnQWVBQjBBSFFBZEFCMEFIZ0FlQUIwQUhnQWRBQjRBSFFBZEFCMEFIUUFkQUIwQUhnQWRBQjRBSGdBZUFCNEFIZ0FkQUIwQUhRQWRBQjRBSGdBZUFCNEFIUUFkQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhRQWVBQjRBSGdBZEFCNEFIZ0FlQUI0QUhnQWRBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIUUFkQUI0QUhnQWRBQjBBSFFBZEFCNEFIZ0FkQUIwQUhnQWVBQjBBSFFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZEFCMEFIZ0FlQUIwQUhRQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCMEFIZ0FlQUI0QUhRQWVBQjRBSGdBZUFCNEFIZ0FlQUIwQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FkQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCUUFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBV0FCRUFGZ0FSQUI0QUhnQWVBQjRBSGdBZUFCMEFIZ0FlQUI0QUhnQWVBQjRBSGdBbEFDVUFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFGZ0FSQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQ1VBSlFBbEFDVUFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUEFFOEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFCUEFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JRQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjRBSGdBZUFCNEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhnQWVBQjBBSFFBZEFCMEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FkQUIwQUhnQWRBQjBBSFFBZEFCMEFIUUFkQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FkQUIwQUhnQWVBQjBBSFFBZUFCNEFIZ0FlQUIwQUhRQWVBQjRBSGdBZUFCMEFIUUFkQUI0QUhnQWRBQjRBSGdBZEFCMEFIUUFkQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIUUFkQUIwQUhRQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWRBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUpRQWxBQ1VBSlFBZUFCMEFIUUFlQUI0QUhRQWVBQjRBSGdBZUFCMEFIUUFlQUI0QUhnQWVBQ1VBSlFBZEFCMEFKUUFlQUNVQUpRQWxBQ0FBSlFBbEFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSlFBbEFDVUFIZ0FlQUI0QUhnQWRBQjRBSFFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIUUFkQUI0QUhRQWRBQjBBSGdBZEFDVUFIUUFkQUI0QUhRQWRBQjRBSFFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWxBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCMEFIUUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSFFBZEFCMEFIUUFsQUI0QUpRQWxBQ1VBSFFBbEFDVUFIUUFkQUIwQUpRQWxBQjBBSFFBbEFCMEFIUUFsQUNVQUpRQWVBQjBBSGdBZUFCNEFIZ0FkQUIwQUpRQWRBQjBBSFFBZEFCMEFIUUFsQUNVQUpRQWxBQ1VBSFFBbEFDVUFJQUFsQUIwQUhRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUhnQWVBQjRBSlFBbEFDQUFJQUFnQUNBQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FkQUI0QUhnQWVBQmNBRndBWEFCY0FGd0FYQUI0QUV3QVRBQ1VBSGdBZUFCNEFGZ0FSQUJZQUVRQVdBQkVBRmdBUkFCWUFFUUFXQUJFQUZnQVJBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUEFFOEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQVdBQkVBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBRmdBUkFCWUFFUUFXQUJFQUZnQVJBQllBRVFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCWUFFUUFXQUJFQUZnQVJBQllBRVFBV0FCRUFGZ0FSQUJZQUVRQVdBQkVBRmdBUkFCWUFFUUFXQUJFQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUZnQVJBQllBRVFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCWUFFUUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSFFBZEFCMEFIUUFkQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBS3dBckFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFLd0FyQUNzQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBS3dBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUI0QUhnQWVBQjRBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FFQUFRQUJBQWVBQjRBS3dBckFDc0FLd0FyQUJNQURRQU5BQTBBVUFBVEFBMEFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0FyQUNzQUt3QXJBQ3NBVUFBTkFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QUVBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFDc0FVQUJRQUZBQVVBQlFBRkFBVUFBckFGQUFVQUJRQUZBQVVBQlFBRkFBS3dCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUEwQURRQU5BQTBBRFFBTkFBMEFEUUFlQUEwQUZnQU5BQjRBSGdBWEFCY0FIZ0FlQUJjQUZ3QVdBQkVBRmdBUkFCWUFFUUFXQUJFQURRQU5BQTBBRFFBVEFGQUFEUUFOQUI0QURRQU5BQjRBSGdBZUFCNEFIZ0FNQUF3QURRQU5BQTBBSGdBTkFBMEFGZ0FOQUEwQURRQU5BQTBBRFFBTkFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNzQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFyQUNzQUt3QXJBQTBBRVFBUkFDVUFKUUJIQUZjQVZ3QVdBQkVBRmdBUkFCWUFFUUFXQUJFQUZnQVJBQ1VBSlFBV0FCRUFGZ0FSQUJZQUVRQVdBQkVBRlFBV0FCRUFFUUFsQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUFRQUJBQUVBQVFBQkFBRUFDVUFWd0JYQUZjQVZ3QTJBQ1VBSlFCWEFGY0FWd0JIQUVjQUpRQWxBQ1VBS3dCUkFGY0FVUUJYQUZFQVZ3QlJBRmNBVVFCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRkVBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JSQUZjQVVRQlhBRkVBVndCWEFGY0FWd0JYQUZjQVVRQlhBRmNBVndCWEFGY0FWd0JSQUZFQUt3QXJBQVFBQkFBVkFCVUFSd0JIQUZjQUZRQlJBRmNBVVFCWEFGRUFWd0JSQUZjQVVRQlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZFQVZ3QlJBRmNBVVFCWEFGY0FWd0JYQUZjQVZ3QlJBRmNBVndCWEFGY0FWd0JYQUZFQVVRQlhBRmNBVndCWEFCVUFVUUJIQUVjQVZ3QXJBQ3NBS3dBckFDc0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQUt3QXJBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndBckFDVUFKUUJYQUZjQVZ3QlhBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBS3dBckFDc0FLd0FyQUNVQUpRQWxBQ1VBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FVUUJSQUZFQVVRQlJBRkVBVVFCUkFGRUFVUUJSQUZFQVVRQlJBRkVBVVFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNzQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFFOEFUd0JQQUU4QVR3QlBBRThBVHdBbEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUVjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FLd0FyQUNzQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQURRQVRBQTBBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRkFBVUFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBRkFBQkFBRUFBUUFCQUFlQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUhnQlFBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBVUFCUUFBUUFCQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFBUUFCQUFlQUEwQURRQU5BQTBBRFFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFVQUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdCUUFCNEFIZ0FlQUI0QUhnQWVBRkFBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBckFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQVFBVUFCUUFGQUFCQUJRQUZBQVVBQlFBQVFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUFRQUJBQUVBQVFBQkFBZUFCNEFIZ0FlQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQUhnQWVBQm9BSGdBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBRGdBT0FCTUFFd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FCQUFFQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQVFBQkFBRUFBUUFCQUFFQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FOQUEwQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QXJBQ3NBS3dBckFDc0FLd0FFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUJRQUZBQVVBQlFBRkFBVUFBZUFCNEFIZ0JRQUE0QVVBQXJBQ3NBVUFCUUFGQUFVQUJRQUZBQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUEwQURRQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUI0QVdBQllBRmdBV0FCWUFGZ0FXQUJZQUZnQVdBQllBRmdBV0FCWUFGZ0FXQUJZQUZnQVdBQllBRmdBV0FCWUFGZ0FXQUJZQUZnQVdBQllBQ3NBS3dBckFBUUFIZ0FlQUI0QUhnQWVBQjRBRFFBTkFBMEFIZ0FlQUI0QUhnQXJBRkFBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dBckFDc0FLd0FyQUI0QUhnQmNBRndBWEFCY0FGd0FLZ0JjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVhBQmNBRndBWEFCY0FDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBRkFBVUFCUUFBUUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFBUUFCQUFyQUNzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QXJBQ3NBSGdBTkFBMEFEUUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBS2dBcUFDb0FYQUFxQUNvQUtnQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQXFBRndBS2dBcUFDb0FYQUJjQUNvQUtnQmNBRndBWEFCY0FGd0FLZ0FxQUZ3QUtnQmNBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUZ3QVhBQmNBQ29BS2dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFCQUFFQUFRQUJBQUVBQTBBRFFCUUFGQUFVQUFFQUFRQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUFyQUNzQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBS3dCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBRFFBRUFBUUFLd0FyQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQUt3QXJBQ3NBS3dBckFDc0FWQUJWQUZVQVZRQlZBRlVBVlFCVkFGVUFWUUJWQUZVQVZRQlZBRlVBVlFCVkFGVUFWUUJWQUZVQVZRQlZBRlVBVlFCVkFGVUFWUUJVQUZVQVZRQlZBRlVBVlFCVkFGVUFWUUJWQUZVQVZRQlZBRlVBVlFCVkFGVUFWUUJWQUZVQVZRQlZBRlVBVlFCVkFGVUFWUUJWQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBRmtBV1FCWkFGa0FXUUJaQUZrQVdRQlpBRmtBV1FCWkFGa0FXUUJaQUZrQVdRQlpBRmtBS3dBckFDc0FLd0JhQUZvQVdnQmFBRm9BV2dCYUFGb0FXZ0JhQUZvQVdnQmFBRm9BV2dCYUFGb0FXZ0JhQUZvQVdnQmFBRm9BV2dCYUFGb0FXZ0JhQUZvQUt3QXJBQ3NBS3dBR0FBWUFCZ0FHQUFZQUJnQUdBQVlBQmdBR0FBWUFCZ0FHQUFZQUJnQUdBQVlBQmdBR0FBWUFCZ0FHQUFZQUJnQUdBQVlBQmdBR0FBWUFCZ0FHQUFZQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFDVUFKUUJYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FKUUFsQUNVQUpRQWxBQ1VBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQUt3QXJBQ3NBS3dBckFGWUFCQUJXQUZZQVZnQldBRllBVmdCV0FGWUFWZ0JXQUI0QVZnQldBRllBVmdCV0FGWUFWZ0JXQUZZQVZnQldBRllBVmdBckFGWUFWZ0JXQUZZQVZnQXJBRllBS3dCV0FGWUFLd0JXQUZZQUt3QldBRllBVmdCV0FGWUFWZ0JXQUZZQVZnQldBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBRVFBV0FGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQWFBQjRBS3dBckFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBR0FBUkFCRUFHQUFZQUJNQUV3QVdBQkVBRkFBckFDc0FLd0FyQUNzQUt3QUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUNVQUpRQWxBQ1VBSlFBV0FCRUFGZ0FSQUJZQUVRQVdBQkVBRmdBUkFCWUFFUUFsQUNVQUZnQVJBQ1VBSlFBbEFDVUFKUUFsQUNVQUVRQWxBQkVBS3dBVkFCVUFFd0FUQUNVQUZnQVJBQllBRVFBV0FCRUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDc0FKUUFiQUJvQUpRQXJBQ3NBS3dBckFGQUFVQUJRQUZBQVVBQXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUFjQUt3QVRBQ1VBSlFBYkFCb0FKUUFsQUJZQUVRQWxBQ1VBRVFBbEFCRUFKUUJYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUJVQUZRQWxBQ1VBSlFBVEFDVUFWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFCWUFKUUFSQUNVQUpRQWxBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QVdBQ1VBRVFBbEFCWUFFUUFSQUJZQUVRQVJBQlVBVndCUkFGRUFVUUJSQUZFQVVRQlJBRkVBVVFCUkFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRWNBUndBckFDc0FWd0JYQUZjQVZ3QlhBRmNBS3dBckFGY0FWd0JYQUZjQVZ3QlhBQ3NBS3dCWEFGY0FWd0JYQUZjQVZ3QXJBQ3NBVndCWEFGY0FLd0FyQUNzQUdnQWJBQ1VBSlFBbEFCc0FHd0FyQUI0QUhnQWVBQjRBSGdBZUFCNEFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FFQUFRQUJBQVFBQjBBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0JRQUZBQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QXJBQ3NBRFFBTkFBMEFLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQUt3QXJBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdCUUFGQUFIZ0FlQUI0QUt3QWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBckFDc0FLd0FyQUI0QUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFCQUFyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUFRQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBRUFBUUFCQUFFQUFRQUt3QXJBQ3NBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQURRQlFBRkFBVUFCUUFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUEwQVVBQlFBRkFBVUFCUUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUI0QUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFBckFDc0FVQUFyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FVQUJRQUNzQUt3QXJBRkFBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQTBBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUI0QUhnQlFBRkFBVUFCUUFGQUFVQUJRQUNzQUt3QXJBQ3NBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FVQUJRQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUNzQURRQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBQ3NBS3dBckFCNEFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBQkFBRUFBUUFLd0FFQUFRQUt3QXJBQ3NBS3dBckFBUUFCQUFFQUFRQVVBQlFBRkFBVUFBckFGQUFVQUJRQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0FyQUNzQUJBQUVBQVFBS3dBckFDc0FLd0FFQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FEUUFOQUEwQURRQU5BQTBBRFFBTkFCNEFLd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUI0QVVBQlFBRkFBVUFCUUFGQUFVQUJRQUI0QVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFCQUFFQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUEwQURRQU5BQTBBRFFBTkFCUUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBTkFBMEFEUUFOQUEwQURRQU5BRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBS3dBckFDc0FLd0FyQUNzQUhnQWVBQjRBSGdBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFBRUFBUUFCQUFFQUFRQUJBQUVBQTBBRFFBZUFCNEFIZ0FlQUI0QUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUJBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQWVBQjRBSGdBTkFBMEFEUUFOQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFDc0FLd0FyQUNzQUt3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBQ3NBS3dBckFDc0FLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQ3NBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dBTkFBMEFEUUFOQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBQkFBZUFBNEFVQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FFQUZBQVVBQlFBRkFBRFFBTkFCNEFEUUFlQUFRQUJBQUVBQjRBS3dBckFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FVQUFPQUZBQURRQU5BQTBBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFOQUEwQUhnQU5BQTBBSGdBRUFDc0FVQUJRQUZBQVVBQlFBRkFBVUFBckFGQUFLd0JRQUZBQVVBQlFBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQTBBS3dBckFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUt3QXJBQ3NBS3dBckFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FLd0FyQUNzQUt3QXJBQ3NBQkFBRUFBUUFCQUFyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQVVBQlFBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUFRQUJBQUVBQVFBQkFBckFDc0FCQUFFQUNzQUt3QUVBQVFBQkFBckFDc0FVQUFyQUNzQUt3QXJBQ3NBS3dBRUFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFCQUFFQUNzQUt3QUVBQVFBQkFBRUFBUUFCQUFFQUNzQUt3QXJBQVFBQkFBRUFBUUFCQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUJBQUVBQVFBQkFBRUFBUUFCQUJRQUZBQVVBQlFBQTBBRFFBTkFBMEFIZ0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUNzQURRQXJBQjRBS3dBckFBUUFCQUFFQUFRQVVBQlFBQjRBVUFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFFQUFRQUJBQUVBQVFBQkFBRUFDc0FLd0FFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFPQUEwQURRQVRBQk1BSGdBZUFCNEFEUUFOQUEwQURRQU5BQTBBRFFBTkFBMEFEUUFOQUEwQURRQU5BQTBBVUFCUUFGQUFVQUFFQUFRQUt3QXJBQVFBRFFBTkFCNEFVQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QXJBQ3NBS3dBckFDc0FLd0FPQUE0QURnQU9BQTRBRGdBT0FBNEFEZ0FPQUE0QURnQU9BQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUFyQUNzQUt3QXFBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FyQUNzQUt3QXJBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBWEFCY0FBMEFEUUFOQUNvQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBRUFBUUFCQUFFQUFRQUJBQUVBRkFBQkFBRUFBUUFCQUFPQUI0QURRQU5BQTBBRFFBT0FCNEFCQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FVQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQVVBQlFBRkFBVUFBckFDc0FVQUJRQUZBQVVBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUEwQURRQU5BQ3NBRGdBT0FBNEFEUUFOQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUNzQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUZBQURRQU5BQTBBRFFBTkFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FPQUJNQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFyQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBVUFCUUFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQUVBQVFBQkFBRUFBUUFCQUFyQUNzQUt3QUVBQ3NBQkFBRUFDc0FCQUFFQUFRQUJBQUVBQVFBQkFCUUFBUUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FLd0FyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBS3dBckFDc0FLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FEUUFOQUEwQURRQU5BQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFTQUJJQUVnQVF3QkRBRU1BVUFCUUFGQUFVQUJEQUZBQVVBQlFBRWdBUXdCSUFFTUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFTQUJEQUVNQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQklBRU1BVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBS3dBckFDc0FLd0FOQUEwQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFBUUFCQUFFQUFRQUJBQU5BQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQUVBQVFBQkFBRUFBUUFCQUFFQUEwQURRQU5BQjRBSGdBZUFCNEFIZ0FlQUZBQVVBQlFBRkFBRFFBZUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBVUFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUJBQUVBQVFBQkFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUVjQVJ3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFDc0FLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBS3dBZUFBUUFCQUFOQUFRQUJBQUVBQVFBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUhnQWVBQjRBSGdBZUFCNEFIZ0FyQUNzQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFCQUFFQUFRQUJBQUVBQjRBSGdBZUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUhnQWVBQVFBQkFBRUFBUUFCQUFFQUFRQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBRUFBUUFCQUFFQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFCNEFIZ0FFQUFRQUJBQWVBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFDc0FIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQXJBRkFBVUFBckFDc0FVQUFyQUNzQVVBQlFBQ3NBS3dCUUFGQUFVQUJRQUNzQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBS3dCUUFDc0FVQUJRQUZBQVVBQlFBRkFBVUFBckFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FyQUZBQVVBQlFBRkFBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBZUFCNEFVQUJRQUZBQVVBQlFBQ3NBVUFBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFDc0FIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBZUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFLd0FyQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQjRBSGdBZUFCNEFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQUVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBQkFBZUFCNEFEUUFOQUEwQURRQWVBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUFRQUJBQUVBQVFBQkFBckFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUJBQUVBQVFBQkFBRUFBUUFCQUFyQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFyQUNzQUJBQUVBQVFBQkFBRUFBUUFCQUFyQUFRQUJBQXJBQVFBQkFBRUFBUUFCQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUFRQUJBQUVBQVFBQkFBRUFBUUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FIZ0FlQUI0QUhnQUVBQVFBQkFBRUFBUUFCQUFFQUNzQUt3QXJBQ3NBS3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFDc0FLd0FyQUNzQUZnQVdBRkFBVUFCUUFGQUFLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUZBQVVBQXJBRkFBS3dBckFGQUFLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQVVBQlFBRkFBVUFBckFGQUFLd0JRQUNzQUt3QXJBQ3NBS3dBckFGQUFLd0FyQUNzQUt3QlFBQ3NBVUFBckFGQUFLd0JRQUZBQVVBQXJBRkFBVUFBckFGQUFLd0FyQUZBQUt3QlFBQ3NBVUFBckFGQUFLd0JRQUNzQVVBQlFBQ3NBVUFBckFDc0FVQUJRQUZBQVVBQXJBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QlFBRkFBVUFCUUFDc0FVQUJRQUZBQVVBQXJBRkFBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0FyQUNzQUt3QlFBRkFBVUFBckFGQUFVQUJRQUZBQVVBQXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUI0QUhnQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FUd0JQQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QWxBQ1VBSlFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZUFDVUFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIZ0FlQUNVQUpRQWxBQ1VBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDa0FLUUFwQUNrQUtRQXBBQ2tBS1FBcEFDa0FLUUFwQUNrQUtRQXBBQ2tBS1FBcEFDa0FLUUFwQUNrQUtRQXBBQ2tBS1FBbEFDVUFKUUFsQUNVQUlBQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFCNEFIZ0FsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSGdBZUFDVUFKUUFsQUNVQUpRQWVBQ1VBSlFBbEFDVUFKUUFnQUNBQUlBQWxBQ1VBSUFBbEFDVUFJQUFnQUNBQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSVFBaEFDRUFJUUFoQUNVQUpRQWdBQ0FBSlFBbEFDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFJQUFnQUNBQUlBQWxBQ1VBSlFBbEFDQUFKUUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFsQUNVQUpRQWdBQ1VBSlFBbEFDVUFJQUFnQUNBQUpRQWdBQ0FBSUFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWVBQ1VBSGdBbEFCNEFKUUFsQUNVQUpRQWxBQ0FBSlFBbEFDVUFKUUFlQUNVQUhnQWVBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFIZ0FlQUI0QUhnQWVBQjRBSGdBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUlBQWdBQ1VBSlFBbEFDVUFJQUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFJQUFsQUNVQUpRQWxBQ0FBSUFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUI0QUhnQWVBQjRBSGdBZUFDVUFKUUFsQUNVQUpRQWxBQ1VBSUFBZ0FDQUFKUUFsQUNVQUlBQWdBQ0FBSUFBZ0FCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUZ3QVhBQmNBRlFBVkFCVUFIZ0FlQUI0QUhnQWxBQ1VBSlFBZ0FDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSUFBZ0FDQUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFJQUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUlBQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWxBQ1VBSlFBbEFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSlFBbEFDVUFKUUFsQUNVQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNBQUlBQWdBQ0FBSUFBbEFDQUFJQUFsQUNVQUpRQWxBQ1VBSlFBZ0FDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFKUUFsQUNVQUlBQWdBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ3NBS3dCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFyQUFRQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBJztcblxuLyoqKi8gfSksXG4vKiA1MCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfUGF0aCA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBDaXJjbGUgPSBmdW5jdGlvbiBDaXJjbGUoeCwgeSwgcmFkaXVzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENpcmNsZSk7XG5cbiAgICB0aGlzLnR5cGUgPSBfUGF0aC5QQVRILkNJUkNMRTtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgaWYgKHRydWUpIHtcbiAgICAgICAgaWYgKGlzTmFOKHgpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIHggdmFsdWUgZ2l2ZW4gZm9yIENpcmNsZScpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc05hTih5KSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCB5IHZhbHVlIGdpdmVuIGZvciBDaXJjbGUnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNOYU4ocmFkaXVzKSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCByYWRpdXMgdmFsdWUgZ2l2ZW4gZm9yIENpcmNsZScpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQ2lyY2xlO1xuXG4vKioqLyB9KSxcbi8qIDUxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9zbGljZWRUb0FycmF5ID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBzbGljZUl0ZXJhdG9yKGFyciwgaSkgeyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9IHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgcmV0dXJuIGFycjsgfSBlbHNlIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpIHsgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTsgfSBlbHNlIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7IH0gfTsgfSgpO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX0JvdW5kcyA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cbnZhciBfRm9udCA9IF9fd2VicGFja19yZXF1aXJlX18oMjUpO1xuXG52YXIgX0dyYWRpZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1Mik7XG5cbnZhciBfVGV4dENvbnRhaW5lciA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG5cbnZhciBfVGV4dENvbnRhaW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UZXh0Q29udGFpbmVyKTtcblxudmFyIF9iYWNrZ3JvdW5kID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxudmFyIF9ib3JkZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFJlbmRlcmVyID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlbmRlcmVyKHRhcmdldCwgb3B0aW9ucykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVuZGVyZXIpO1xuXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0YXJnZXQucmVuZGVyKG9wdGlvbnMpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhSZW5kZXJlciwgW3tcbiAgICAgICAga2V5OiAncmVuZGVyTm9kZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJOb2RlKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgaWYgKGNvbnRhaW5lci5pc1Zpc2libGUoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyTm9kZUJhY2tncm91bmRBbmRCb3JkZXJzKGNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJOb2RlQ29udGVudChjb250YWluZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXJOb2RlQ29udGVudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJOb2RlQ29udGVudChjb250YWluZXIpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IGZ1bmN0aW9uIGNhbGxiYWNrKCkge1xuICAgICAgICAgICAgICAgIGlmIChjb250YWluZXIuY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIF9UZXh0Q29udGFpbmVyMi5kZWZhdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0eWxlID0gY2hpbGQucGFyZW50LnN0eWxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnRhcmdldC5yZW5kZXJUZXh0Tm9kZShjaGlsZC5ib3VuZHMsIHN0eWxlLmNvbG9yLCBzdHlsZS5mb250LCBzdHlsZS50ZXh0RGVjb3JhdGlvbiwgc3R5bGUudGV4dFNoYWRvdyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnRhcmdldC5kcmF3U2hhcGUoY2hpbGQsIGNvbnRhaW5lci5zdHlsZS5jb2xvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChjb250YWluZXIuaW1hZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9pbWFnZSA9IF90aGlzLm9wdGlvbnMuaW1hZ2VTdG9yZS5nZXQoY29udGFpbmVyLmltYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9pbWFnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRlbnRCb3ggPSAoMCwgX0JvdW5kcy5jYWxjdWxhdGVDb250ZW50Qm94KShjb250YWluZXIuYm91bmRzLCBjb250YWluZXIuc3R5bGUucGFkZGluZywgY29udGFpbmVyLnN0eWxlLmJvcmRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX3dpZHRoID0gdHlwZW9mIF9pbWFnZS53aWR0aCA9PT0gJ251bWJlcicgJiYgX2ltYWdlLndpZHRoID4gMCA/IF9pbWFnZS53aWR0aCA6IGNvbnRlbnRCb3gud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2hlaWdodCA9IHR5cGVvZiBfaW1hZ2UuaGVpZ2h0ID09PSAnbnVtYmVyJyAmJiBfaW1hZ2UuaGVpZ2h0ID4gMCA/IF9pbWFnZS5oZWlnaHQgOiBjb250ZW50Qm94LmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfd2lkdGggPiAwICYmIF9oZWlnaHQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMudGFyZ2V0LmNsaXAoWygwLCBfQm91bmRzLmNhbGN1bGF0ZVBhZGRpbmdCb3hQYXRoKShjb250YWluZXIuY3VydmVkQm91bmRzKV0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMudGFyZ2V0LmRyYXdJbWFnZShfaW1hZ2UsIG5ldyBfQm91bmRzLkJvdW5kcygwLCAwLCBfd2lkdGgsIF9oZWlnaHQpLCBjb250ZW50Qm94KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgcGF0aHMgPSBjb250YWluZXIuZ2V0Q2xpcFBhdGhzKCk7XG4gICAgICAgICAgICBpZiAocGF0aHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQuY2xpcChwYXRocywgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXJOb2RlQmFja2dyb3VuZEFuZEJvcmRlcnMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyTm9kZUJhY2tncm91bmRBbmRCb3JkZXJzKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBIQVNfQkFDS0dST1VORCA9ICFjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZC5iYWNrZ3JvdW5kQ29sb3IuaXNUcmFuc3BhcmVudCgpIHx8IGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kLmJhY2tncm91bmRJbWFnZS5sZW5ndGg7XG5cbiAgICAgICAgICAgIHZhciBoYXNSZW5kZXJhYmxlQm9yZGVycyA9IGNvbnRhaW5lci5zdHlsZS5ib3JkZXIuc29tZShmdW5jdGlvbiAoYm9yZGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJvcmRlci5ib3JkZXJTdHlsZSAhPT0gX2JvcmRlci5CT1JERVJfU1RZTEUuTk9ORSAmJiAhYm9yZGVyLmJvcmRlckNvbG9yLmlzVHJhbnNwYXJlbnQoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiBjYWxsYmFjaygpIHtcbiAgICAgICAgICAgICAgICB2YXIgYmFja2dyb3VuZFBhaW50aW5nQXJlYSA9ICgwLCBfYmFja2dyb3VuZC5jYWxjdWxhdGVCYWNrZ3JvdW5nUGFpbnRpbmdBcmVhKShjb250YWluZXIuY3VydmVkQm91bmRzLCBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZC5iYWNrZ3JvdW5kQ2xpcCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoSEFTX0JBQ0tHUk9VTkQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMyLnRhcmdldC5jbGlwKFtiYWNrZ3JvdW5kUGFpbnRpbmdBcmVhXSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZC5iYWNrZ3JvdW5kQ29sb3IuaXNUcmFuc3BhcmVudCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMyLnRhcmdldC5maWxsKGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kLmJhY2tncm91bmRDb2xvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMi5yZW5kZXJCYWNrZ3JvdW5kSW1hZ2UoY29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLmJvcmRlci5mb3JFYWNoKGZ1bmN0aW9uIChib3JkZXIsIHNpZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvcmRlci5ib3JkZXJTdHlsZSAhPT0gX2JvcmRlci5CT1JERVJfU1RZTEUuTk9ORSAmJiAhYm9yZGVyLmJvcmRlckNvbG9yLmlzVHJhbnNwYXJlbnQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMyLnJlbmRlckJvcmRlcihib3JkZXIsIHNpZGUsIGNvbnRhaW5lci5jdXJ2ZWRCb3VuZHMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAoSEFTX0JBQ0tHUk9VTkQgfHwgaGFzUmVuZGVyYWJsZUJvcmRlcnMpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGF0aHMgPSBjb250YWluZXIucGFyZW50ID8gY29udGFpbmVyLnBhcmVudC5nZXRDbGlwUGF0aHMoKSA6IFtdO1xuICAgICAgICAgICAgICAgIGlmIChwYXRocy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YXJnZXQuY2xpcChwYXRocywgY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXJCYWNrZ3JvdW5kSW1hZ2UnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyQmFja2dyb3VuZEltYWdlKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kLmJhY2tncm91bmRJbWFnZS5zbGljZSgwKS5yZXZlcnNlKCkuZm9yRWFjaChmdW5jdGlvbiAoYmFja2dyb3VuZEltYWdlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJhY2tncm91bmRJbWFnZS5zb3VyY2UubWV0aG9kID09PSAndXJsJyAmJiBiYWNrZ3JvdW5kSW1hZ2Uuc291cmNlLmFyZ3MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzMy5yZW5kZXJCYWNrZ3JvdW5kUmVwZWF0KGNvbnRhaW5lciwgYmFja2dyb3VuZEltYWdlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKC9ncmFkaWVudC9pLnRlc3QoYmFja2dyb3VuZEltYWdlLnNvdXJjZS5tZXRob2QpKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzMy5yZW5kZXJCYWNrZ3JvdW5kR3JhZGllbnQoY29udGFpbmVyLCBiYWNrZ3JvdW5kSW1hZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXJCYWNrZ3JvdW5kUmVwZWF0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckJhY2tncm91bmRSZXBlYXQoY29udGFpbmVyLCBiYWNrZ3JvdW5kKSB7XG4gICAgICAgICAgICB2YXIgaW1hZ2UgPSB0aGlzLm9wdGlvbnMuaW1hZ2VTdG9yZS5nZXQoYmFja2dyb3VuZC5zb3VyY2UuYXJnc1swXSk7XG4gICAgICAgICAgICBpZiAoaW1hZ2UpIHtcbiAgICAgICAgICAgICAgICB2YXIgYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYSA9ICgwLCBfYmFja2dyb3VuZC5jYWxjdWxhdGVCYWNrZ3JvdW5nUG9zaXRpb25pbmdBcmVhKShjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZC5iYWNrZ3JvdW5kT3JpZ2luLCBjb250YWluZXIuYm91bmRzLCBjb250YWluZXIuc3R5bGUucGFkZGluZywgY29udGFpbmVyLnN0eWxlLmJvcmRlcik7XG4gICAgICAgICAgICAgICAgdmFyIGJhY2tncm91bmRJbWFnZVNpemUgPSAoMCwgX2JhY2tncm91bmQuY2FsY3VsYXRlQmFja2dyb3VuZFNpemUpKGJhY2tncm91bmQsIGltYWdlLCBiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhKTtcbiAgICAgICAgICAgICAgICB2YXIgcG9zaXRpb24gPSAoMCwgX2JhY2tncm91bmQuY2FsY3VsYXRlQmFja2dyb3VuZFBvc2l0aW9uKShiYWNrZ3JvdW5kLnBvc2l0aW9uLCBiYWNrZ3JvdW5kSW1hZ2VTaXplLCBiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhKTtcbiAgICAgICAgICAgICAgICB2YXIgX3BhdGggPSAoMCwgX2JhY2tncm91bmQuY2FsY3VsYXRlQmFja2dyb3VuZFJlcGVhdFBhdGgpKGJhY2tncm91bmQsIHBvc2l0aW9uLCBiYWNrZ3JvdW5kSW1hZ2VTaXplLCBiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhLCBjb250YWluZXIuYm91bmRzKTtcblxuICAgICAgICAgICAgICAgIHZhciBfb2Zmc2V0WCA9IE1hdGgucm91bmQoYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYS5sZWZ0ICsgcG9zaXRpb24ueCk7XG4gICAgICAgICAgICAgICAgdmFyIF9vZmZzZXRZID0gTWF0aC5yb3VuZChiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhLnRvcCArIHBvc2l0aW9uLnkpO1xuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LnJlbmRlclJlcGVhdChfcGF0aCwgaW1hZ2UsIGJhY2tncm91bmRJbWFnZVNpemUsIF9vZmZzZXRYLCBfb2Zmc2V0WSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlckJhY2tncm91bmRHcmFkaWVudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJCYWNrZ3JvdW5kR3JhZGllbnQoY29udGFpbmVyLCBiYWNrZ3JvdW5kKSB7XG4gICAgICAgICAgICB2YXIgYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYSA9ICgwLCBfYmFja2dyb3VuZC5jYWxjdWxhdGVCYWNrZ3JvdW5nUG9zaXRpb25pbmdBcmVhKShjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZC5iYWNrZ3JvdW5kT3JpZ2luLCBjb250YWluZXIuYm91bmRzLCBjb250YWluZXIuc3R5bGUucGFkZGluZywgY29udGFpbmVyLnN0eWxlLmJvcmRlcik7XG4gICAgICAgICAgICB2YXIgYmFja2dyb3VuZEltYWdlU2l6ZSA9ICgwLCBfYmFja2dyb3VuZC5jYWxjdWxhdGVHcmFkaWVudEJhY2tncm91bmRTaXplKShiYWNrZ3JvdW5kLCBiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhKTtcbiAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9ICgwLCBfYmFja2dyb3VuZC5jYWxjdWxhdGVCYWNrZ3JvdW5kUG9zaXRpb24pKGJhY2tncm91bmQucG9zaXRpb24sIGJhY2tncm91bmRJbWFnZVNpemUsIGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEpO1xuICAgICAgICAgICAgdmFyIGdyYWRpZW50Qm91bmRzID0gbmV3IF9Cb3VuZHMuQm91bmRzKE1hdGgucm91bmQoYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYS5sZWZ0ICsgcG9zaXRpb24ueCksIE1hdGgucm91bmQoYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYS50b3AgKyBwb3NpdGlvbi55KSwgYmFja2dyb3VuZEltYWdlU2l6ZS53aWR0aCwgYmFja2dyb3VuZEltYWdlU2l6ZS5oZWlnaHQpO1xuXG4gICAgICAgICAgICB2YXIgZ3JhZGllbnQgPSAoMCwgX0dyYWRpZW50LnBhcnNlR3JhZGllbnQpKGNvbnRhaW5lciwgYmFja2dyb3VuZC5zb3VyY2UsIGdyYWRpZW50Qm91bmRzKTtcbiAgICAgICAgICAgIGlmIChncmFkaWVudCkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoZ3JhZGllbnQudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIF9HcmFkaWVudC5HUkFESUVOVF9UWVBFLkxJTkVBUl9HUkFESUVOVDpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LnJlbmRlckxpbmVhckdyYWRpZW50KGdyYWRpZW50Qm91bmRzLCBncmFkaWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBfR3JhZGllbnQuR1JBRElFTlRfVFlQRS5SQURJQUxfR1JBRElFTlQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5yZW5kZXJSYWRpYWxHcmFkaWVudChncmFkaWVudEJvdW5kcywgZ3JhZGllbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXJCb3JkZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyQm9yZGVyKGJvcmRlciwgc2lkZSwgY3VydmVQb2ludHMpIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LmRyYXdTaGFwZSgoMCwgX0JvdW5kcy5wYXJzZVBhdGhGb3JCb3JkZXIpKGN1cnZlUG9pbnRzLCBzaWRlKSwgYm9yZGVyLmJvcmRlckNvbG9yKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyU3RhY2snLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyU3RhY2soc3RhY2spIHtcbiAgICAgICAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICAgICAgICBpZiAoc3RhY2suY29udGFpbmVyLmlzVmlzaWJsZSgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9vcGFjaXR5ID0gc3RhY2suZ2V0T3BhY2l0eSgpO1xuICAgICAgICAgICAgICAgIGlmIChfb3BhY2l0eSAhPT0gdGhpcy5fb3BhY2l0eSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5zZXRPcGFjaXR5KHN0YWNrLmdldE9wYWNpdHkoKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX29wYWNpdHkgPSBfb3BhY2l0eTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgX3RyYW5zZm9ybSA9IHN0YWNrLmNvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm07XG4gICAgICAgICAgICAgICAgaWYgKF90cmFuc2Zvcm0gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YXJnZXQudHJhbnNmb3JtKHN0YWNrLmNvbnRhaW5lci5ib3VuZHMubGVmdCArIF90cmFuc2Zvcm0udHJhbnNmb3JtT3JpZ2luWzBdLnZhbHVlLCBzdGFjay5jb250YWluZXIuYm91bmRzLnRvcCArIF90cmFuc2Zvcm0udHJhbnNmb3JtT3JpZ2luWzFdLnZhbHVlLCBfdHJhbnNmb3JtLnRyYW5zZm9ybSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzNC5yZW5kZXJTdGFja0NvbnRlbnQoc3RhY2spO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclN0YWNrQ29udGVudChzdGFjayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXJTdGFja0NvbnRlbnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyU3RhY2tDb250ZW50KHN0YWNrKSB7XG4gICAgICAgICAgICB2YXIgX3NwbGl0U3RhY2tpbmdDb250ZXh0ID0gc3BsaXRTdGFja2luZ0NvbnRleHRzKHN0YWNrKSxcbiAgICAgICAgICAgICAgICBfc3BsaXRTdGFja2luZ0NvbnRleHQyID0gX3NsaWNlZFRvQXJyYXkoX3NwbGl0U3RhY2tpbmdDb250ZXh0LCA1KSxcbiAgICAgICAgICAgICAgICBuZWdhdGl2ZVpJbmRleCA9IF9zcGxpdFN0YWNraW5nQ29udGV4dDJbMF0sXG4gICAgICAgICAgICAgICAgemVyb09yQXV0b1pJbmRleE9yVHJhbnNmb3JtZWRPck9wYWNpdHkgPSBfc3BsaXRTdGFja2luZ0NvbnRleHQyWzFdLFxuICAgICAgICAgICAgICAgIHBvc2l0aXZlWkluZGV4ID0gX3NwbGl0U3RhY2tpbmdDb250ZXh0MlsyXSxcbiAgICAgICAgICAgICAgICBub25Qb3NpdGlvbmVkRmxvYXRzID0gX3NwbGl0U3RhY2tpbmdDb250ZXh0MlszXSxcbiAgICAgICAgICAgICAgICBub25Qb3NpdGlvbmVkSW5saW5lTGV2ZWwgPSBfc3BsaXRTdGFja2luZ0NvbnRleHQyWzRdO1xuXG4gICAgICAgICAgICB2YXIgX3NwbGl0RGVzY2VuZGFudHMgPSBzcGxpdERlc2NlbmRhbnRzKHN0YWNrKSxcbiAgICAgICAgICAgICAgICBfc3BsaXREZXNjZW5kYW50czIgPSBfc2xpY2VkVG9BcnJheShfc3BsaXREZXNjZW5kYW50cywgMiksXG4gICAgICAgICAgICAgICAgaW5saW5lTGV2ZWwgPSBfc3BsaXREZXNjZW5kYW50czJbMF0sXG4gICAgICAgICAgICAgICAgbm9uSW5saW5lTGV2ZWwgPSBfc3BsaXREZXNjZW5kYW50czJbMV07XG5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jc3MtcG9zaXRpb24tMy8jcGFpbnRpbmctb3JkZXJcbiAgICAgICAgICAgIC8vIDEuIHRoZSBiYWNrZ3JvdW5kIGFuZCBib3JkZXJzIG9mIHRoZSBlbGVtZW50IGZvcm1pbmcgdGhlIHN0YWNraW5nIGNvbnRleHQuXG5cblxuICAgICAgICAgICAgdGhpcy5yZW5kZXJOb2RlQmFja2dyb3VuZEFuZEJvcmRlcnMoc3RhY2suY29udGFpbmVyKTtcbiAgICAgICAgICAgIC8vIDIuIHRoZSBjaGlsZCBzdGFja2luZyBjb250ZXh0cyB3aXRoIG5lZ2F0aXZlIHN0YWNrIGxldmVscyAobW9zdCBuZWdhdGl2ZSBmaXJzdCkuXG4gICAgICAgICAgICBuZWdhdGl2ZVpJbmRleC5zb3J0KHNvcnRCeVpJbmRleCkuZm9yRWFjaCh0aGlzLnJlbmRlclN0YWNrLCB0aGlzKTtcbiAgICAgICAgICAgIC8vIDMuIEZvciBhbGwgaXRzIGluLWZsb3csIG5vbi1wb3NpdGlvbmVkLCBibG9jay1sZXZlbCBkZXNjZW5kYW50cyBpbiB0cmVlIG9yZGVyOlxuICAgICAgICAgICAgdGhpcy5yZW5kZXJOb2RlQ29udGVudChzdGFjay5jb250YWluZXIpO1xuICAgICAgICAgICAgbm9uSW5saW5lTGV2ZWwuZm9yRWFjaCh0aGlzLnJlbmRlck5vZGUsIHRoaXMpO1xuICAgICAgICAgICAgLy8gNC4gQWxsIG5vbi1wb3NpdGlvbmVkIGZsb2F0aW5nIGRlc2NlbmRhbnRzLCBpbiB0cmVlIG9yZGVyLiBGb3IgZWFjaCBvbmUgb2YgdGhlc2UsXG4gICAgICAgICAgICAvLyB0cmVhdCB0aGUgZWxlbWVudCBhcyBpZiBpdCBjcmVhdGVkIGEgbmV3IHN0YWNraW5nIGNvbnRleHQsIGJ1dCBhbnkgcG9zaXRpb25lZCBkZXNjZW5kYW50cyBhbmQgZGVzY2VuZGFudHNcbiAgICAgICAgICAgIC8vIHdoaWNoIGFjdHVhbGx5IGNyZWF0ZSBhIG5ldyBzdGFja2luZyBjb250ZXh0IHNob3VsZCBiZSBjb25zaWRlcmVkIHBhcnQgb2YgdGhlIHBhcmVudCBzdGFja2luZyBjb250ZXh0LFxuICAgICAgICAgICAgLy8gbm90IHRoaXMgbmV3IG9uZS5cbiAgICAgICAgICAgIG5vblBvc2l0aW9uZWRGbG9hdHMuZm9yRWFjaCh0aGlzLnJlbmRlclN0YWNrLCB0aGlzKTtcbiAgICAgICAgICAgIC8vIDUuIHRoZSBpbi1mbG93LCBpbmxpbmUtbGV2ZWwsIG5vbi1wb3NpdGlvbmVkIGRlc2NlbmRhbnRzLCBpbmNsdWRpbmcgaW5saW5lIHRhYmxlcyBhbmQgaW5saW5lIGJsb2Nrcy5cbiAgICAgICAgICAgIG5vblBvc2l0aW9uZWRJbmxpbmVMZXZlbC5mb3JFYWNoKHRoaXMucmVuZGVyU3RhY2ssIHRoaXMpO1xuICAgICAgICAgICAgaW5saW5lTGV2ZWwuZm9yRWFjaCh0aGlzLnJlbmRlck5vZGUsIHRoaXMpO1xuICAgICAgICAgICAgLy8gNi4gQWxsIHBvc2l0aW9uZWQsIG9wYWNpdHkgb3IgdHJhbnNmb3JtIGRlc2NlbmRhbnRzLCBpbiB0cmVlIG9yZGVyIHRoYXQgZmFsbCBpbnRvIHRoZSBmb2xsb3dpbmcgY2F0ZWdvcmllczpcbiAgICAgICAgICAgIC8vICBBbGwgcG9zaXRpb25lZCBkZXNjZW5kYW50cyB3aXRoICd6LWluZGV4OiBhdXRvJyBvciAnei1pbmRleDogMCcsIGluIHRyZWUgb3JkZXIuXG4gICAgICAgICAgICAvLyAgRm9yIHRob3NlIHdpdGggJ3otaW5kZXg6IGF1dG8nLCB0cmVhdCB0aGUgZWxlbWVudCBhcyBpZiBpdCBjcmVhdGVkIGEgbmV3IHN0YWNraW5nIGNvbnRleHQsXG4gICAgICAgICAgICAvLyAgYnV0IGFueSBwb3NpdGlvbmVkIGRlc2NlbmRhbnRzIGFuZCBkZXNjZW5kYW50cyB3aGljaCBhY3R1YWxseSBjcmVhdGUgYSBuZXcgc3RhY2tpbmcgY29udGV4dCBzaG91bGQgYmVcbiAgICAgICAgICAgIC8vICBjb25zaWRlcmVkIHBhcnQgb2YgdGhlIHBhcmVudCBzdGFja2luZyBjb250ZXh0LCBub3QgdGhpcyBuZXcgb25lLiBGb3IgdGhvc2Ugd2l0aCAnei1pbmRleDogMCcsXG4gICAgICAgICAgICAvLyAgdHJlYXQgdGhlIHN0YWNraW5nIGNvbnRleHQgZ2VuZXJhdGVkIGF0b21pY2FsbHkuXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gIEFsbCBvcGFjaXR5IGRlc2NlbmRhbnRzIHdpdGggb3BhY2l0eSBsZXNzIHRoYW4gMVxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vICBBbGwgdHJhbnNmb3JtIGRlc2NlbmRhbnRzIHdpdGggdHJhbnNmb3JtIG90aGVyIHRoYW4gbm9uZVxuICAgICAgICAgICAgemVyb09yQXV0b1pJbmRleE9yVHJhbnNmb3JtZWRPck9wYWNpdHkuZm9yRWFjaCh0aGlzLnJlbmRlclN0YWNrLCB0aGlzKTtcbiAgICAgICAgICAgIC8vIDcuIFN0YWNraW5nIGNvbnRleHRzIGZvcm1lZCBieSBwb3NpdGlvbmVkIGRlc2NlbmRhbnRzIHdpdGggei1pbmRpY2VzIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byAxIGluIHotaW5kZXhcbiAgICAgICAgICAgIC8vIG9yZGVyIChzbWFsbGVzdCBmaXJzdCkgdGhlbiB0cmVlIG9yZGVyLlxuICAgICAgICAgICAgcG9zaXRpdmVaSW5kZXguc29ydChzb3J0QnlaSW5kZXgpLmZvckVhY2godGhpcy5yZW5kZXJTdGFjaywgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoc3RhY2spIHtcbiAgICAgICAgICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmJhY2tncm91bmRDb2xvcikge1xuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LnJlY3RhbmdsZSh0aGlzLm9wdGlvbnMueCwgdGhpcy5vcHRpb25zLnksIHRoaXMub3B0aW9ucy53aWR0aCwgdGhpcy5vcHRpb25zLmhlaWdodCwgdGhpcy5vcHRpb25zLmJhY2tncm91bmRDb2xvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlbmRlclN0YWNrKHN0YWNrKTtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSB0aGlzLnRhcmdldC5nZXRUYXJnZXQoKTtcbiAgICAgICAgICAgIGlmICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldC50aGVuKGZ1bmN0aW9uIChvdXRwdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXM1Lm9wdGlvbnMubG9nZ2VyLmxvZygnUmVuZGVyIGNvbXBsZXRlZCcpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBSZW5kZXJlcjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUmVuZGVyZXI7XG5cblxudmFyIHNwbGl0RGVzY2VuZGFudHMgPSBmdW5jdGlvbiBzcGxpdERlc2NlbmRhbnRzKHN0YWNrKSB7XG4gICAgdmFyIGlubGluZUxldmVsID0gW107XG4gICAgdmFyIG5vbklubGluZUxldmVsID0gW107XG5cbiAgICB2YXIgbGVuZ3RoID0gc3RhY2suY2hpbGRyZW4ubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoaWxkID0gc3RhY2suY2hpbGRyZW5baV07XG4gICAgICAgIGlmIChjaGlsZC5pc0lubGluZUxldmVsKCkpIHtcbiAgICAgICAgICAgIGlubGluZUxldmVsLnB1c2goY2hpbGQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm9uSW5saW5lTGV2ZWwucHVzaChjaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFtpbmxpbmVMZXZlbCwgbm9uSW5saW5lTGV2ZWxdO1xufTtcblxudmFyIHNwbGl0U3RhY2tpbmdDb250ZXh0cyA9IGZ1bmN0aW9uIHNwbGl0U3RhY2tpbmdDb250ZXh0cyhzdGFjaykge1xuICAgIHZhciBuZWdhdGl2ZVpJbmRleCA9IFtdO1xuICAgIHZhciB6ZXJvT3JBdXRvWkluZGV4T3JUcmFuc2Zvcm1lZE9yT3BhY2l0eSA9IFtdO1xuICAgIHZhciBwb3NpdGl2ZVpJbmRleCA9IFtdO1xuICAgIHZhciBub25Qb3NpdGlvbmVkRmxvYXRzID0gW107XG4gICAgdmFyIG5vblBvc2l0aW9uZWRJbmxpbmVMZXZlbCA9IFtdO1xuICAgIHZhciBsZW5ndGggPSBzdGFjay5jb250ZXh0cy5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hpbGQgPSBzdGFjay5jb250ZXh0c1tpXTtcbiAgICAgICAgaWYgKGNoaWxkLmNvbnRhaW5lci5pc1Bvc2l0aW9uZWQoKSB8fCBjaGlsZC5jb250YWluZXIuc3R5bGUub3BhY2l0eSA8IDEgfHwgY2hpbGQuY29udGFpbmVyLmlzVHJhbnNmb3JtZWQoKSkge1xuICAgICAgICAgICAgaWYgKGNoaWxkLmNvbnRhaW5lci5zdHlsZS56SW5kZXgub3JkZXIgPCAwKSB7XG4gICAgICAgICAgICAgICAgbmVnYXRpdmVaSW5kZXgucHVzaChjaGlsZCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNoaWxkLmNvbnRhaW5lci5zdHlsZS56SW5kZXgub3JkZXIgPiAwKSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpdmVaSW5kZXgucHVzaChjaGlsZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHplcm9PckF1dG9aSW5kZXhPclRyYW5zZm9ybWVkT3JPcGFjaXR5LnB1c2goY2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGNoaWxkLmNvbnRhaW5lci5pc0Zsb2F0aW5nKCkpIHtcbiAgICAgICAgICAgICAgICBub25Qb3NpdGlvbmVkRmxvYXRzLnB1c2goY2hpbGQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBub25Qb3NpdGlvbmVkSW5saW5lTGV2ZWwucHVzaChjaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFtuZWdhdGl2ZVpJbmRleCwgemVyb09yQXV0b1pJbmRleE9yVHJhbnNmb3JtZWRPck9wYWNpdHksIHBvc2l0aXZlWkluZGV4LCBub25Qb3NpdGlvbmVkRmxvYXRzLCBub25Qb3NpdGlvbmVkSW5saW5lTGV2ZWxdO1xufTtcblxudmFyIHNvcnRCeVpJbmRleCA9IGZ1bmN0aW9uIHNvcnRCeVpJbmRleChhLCBiKSB7XG4gICAgaWYgKGEuY29udGFpbmVyLnN0eWxlLnpJbmRleC5vcmRlciA+IGIuY29udGFpbmVyLnN0eWxlLnpJbmRleC5vcmRlcikge1xuICAgICAgICByZXR1cm4gMTtcbiAgICB9IGVsc2UgaWYgKGEuY29udGFpbmVyLnN0eWxlLnpJbmRleC5vcmRlciA8IGIuY29udGFpbmVyLnN0eWxlLnpJbmRleC5vcmRlcikge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGEuY29udGFpbmVyLmluZGV4ID4gYi5jb250YWluZXIuaW5kZXggPyAxIDogLTE7XG59O1xuXG4vKioqLyB9KSxcbi8qIDUyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMudHJhbnNmb3JtV2Via2l0UmFkaWFsR3JhZGllbnRBcmdzID0gZXhwb3J0cy5wYXJzZUdyYWRpZW50ID0gZXhwb3J0cy5SYWRpYWxHcmFkaWVudCA9IGV4cG9ydHMuTGluZWFyR3JhZGllbnQgPSBleHBvcnRzLlJBRElBTF9HUkFESUVOVF9TSEFQRSA9IGV4cG9ydHMuR1JBRElFTlRfVFlQRSA9IHVuZGVmaW5lZDtcblxudmFyIF9zbGljZWRUb0FycmF5ID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBzbGljZUl0ZXJhdG9yKGFyciwgaSkgeyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9IHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgcmV0dXJuIGFycjsgfSBlbHNlIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpIHsgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTsgfSBlbHNlIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7IH0gfTsgfSgpO1xuXG52YXIgX05vZGVDb250YWluZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXG52YXIgX05vZGVDb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTm9kZUNvbnRhaW5lcik7XG5cbnZhciBfQW5nbGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUzKTtcblxudmFyIF9Db2xvciA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBfQ29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29sb3IpO1xuXG52YXIgX0xlbmd0aCA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cbnZhciBfTGVuZ3RoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xlbmd0aCk7XG5cbnZhciBfVXRpbCA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBTSURFX09SX0NPUk5FUiA9IC9eKHRvICk/KGxlZnR8dG9wfHJpZ2h0fGJvdHRvbSkoIChsZWZ0fHRvcHxyaWdodHxib3R0b20pKT8kL2k7XG52YXIgUEVSQ0VOVEFHRV9BTkdMRVMgPSAvXihbKy1dP1xcZCpcXC4/XFxkKyklIChbKy1dP1xcZCpcXC4/XFxkKyklJC9pO1xudmFyIEVORFNfV0lUSF9MRU5HVEggPSAvKHB4KXwlfCggMCkkL2k7XG52YXIgRlJPTV9UT19DT0xPUlNUT1AgPSAvXihmcm9tfHRvfGNvbG9yLXN0b3ApXFwoKD86KFtcXGQuXSspKCUpPyxcXHMqKT8oLis/KVxcKSQvaTtcbnZhciBSQURJQUxfU0hBUEVfREVGSU5JVElPTiA9IC9eXFxzKihjaXJjbGV8ZWxsaXBzZSk/XFxzKigoPzooW1xcZC5dKykocHh8cj9lbXwlKVxccyooPzooW1xcZC5dKykocHh8cj9lbXwlKSk/KXxjbG9zZXN0LXNpZGV8Y2xvc2VzdC1jb3JuZXJ8ZmFydGhlc3Qtc2lkZXxmYXJ0aGVzdC1jb3JuZXIpP1xccyooPzphdFxccyooPzoobGVmdHxjZW50ZXJ8cmlnaHQpfChbXFxkLl0rKShweHxyP2VtfCUpKVxccysoPzoodG9wfGNlbnRlcnxib3R0b20pfChbXFxkLl0rKShweHxyP2VtfCUpKSk/KD86XFxzfCQpL2k7XG5cbnZhciBHUkFESUVOVF9UWVBFID0gZXhwb3J0cy5HUkFESUVOVF9UWVBFID0ge1xuICAgIExJTkVBUl9HUkFESUVOVDogMCxcbiAgICBSQURJQUxfR1JBRElFTlQ6IDFcbn07XG5cbnZhciBSQURJQUxfR1JBRElFTlRfU0hBUEUgPSBleHBvcnRzLlJBRElBTF9HUkFESUVOVF9TSEFQRSA9IHtcbiAgICBDSVJDTEU6IDAsXG4gICAgRUxMSVBTRTogMVxufTtcblxudmFyIExFTkdUSF9GT1JfUE9TSVRJT04gPSB7XG4gICAgbGVmdDogbmV3IF9MZW5ndGgyLmRlZmF1bHQoJzAlJyksXG4gICAgdG9wOiBuZXcgX0xlbmd0aDIuZGVmYXVsdCgnMCUnKSxcbiAgICBjZW50ZXI6IG5ldyBfTGVuZ3RoMi5kZWZhdWx0KCc1MCUnKSxcbiAgICByaWdodDogbmV3IF9MZW5ndGgyLmRlZmF1bHQoJzEwMCUnKSxcbiAgICBib3R0b206IG5ldyBfTGVuZ3RoMi5kZWZhdWx0KCcxMDAlJylcbn07XG5cbnZhciBMaW5lYXJHcmFkaWVudCA9IGV4cG9ydHMuTGluZWFyR3JhZGllbnQgPSBmdW5jdGlvbiBMaW5lYXJHcmFkaWVudChjb2xvclN0b3BzLCBkaXJlY3Rpb24pIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTGluZWFyR3JhZGllbnQpO1xuXG4gICAgdGhpcy50eXBlID0gR1JBRElFTlRfVFlQRS5MSU5FQVJfR1JBRElFTlQ7XG4gICAgdGhpcy5jb2xvclN0b3BzID0gY29sb3JTdG9wcztcbiAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbn07XG5cbnZhciBSYWRpYWxHcmFkaWVudCA9IGV4cG9ydHMuUmFkaWFsR3JhZGllbnQgPSBmdW5jdGlvbiBSYWRpYWxHcmFkaWVudChjb2xvclN0b3BzLCBzaGFwZSwgY2VudGVyLCByYWRpdXMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmFkaWFsR3JhZGllbnQpO1xuXG4gICAgdGhpcy50eXBlID0gR1JBRElFTlRfVFlQRS5SQURJQUxfR1JBRElFTlQ7XG4gICAgdGhpcy5jb2xvclN0b3BzID0gY29sb3JTdG9wcztcbiAgICB0aGlzLnNoYXBlID0gc2hhcGU7XG4gICAgdGhpcy5jZW50ZXIgPSBjZW50ZXI7XG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG59O1xuXG52YXIgcGFyc2VHcmFkaWVudCA9IGV4cG9ydHMucGFyc2VHcmFkaWVudCA9IGZ1bmN0aW9uIHBhcnNlR3JhZGllbnQoY29udGFpbmVyLCBfcmVmLCBib3VuZHMpIHtcbiAgICB2YXIgYXJncyA9IF9yZWYuYXJncyxcbiAgICAgICAgbWV0aG9kID0gX3JlZi5tZXRob2QsXG4gICAgICAgIHByZWZpeCA9IF9yZWYucHJlZml4O1xuXG4gICAgaWYgKG1ldGhvZCA9PT0gJ2xpbmVhci1ncmFkaWVudCcpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlTGluZWFyR3JhZGllbnQoYXJncywgYm91bmRzLCAhIXByZWZpeCk7XG4gICAgfSBlbHNlIGlmIChtZXRob2QgPT09ICdncmFkaWVudCcgJiYgYXJnc1swXSA9PT0gJ2xpbmVhcicpIHtcbiAgICAgICAgLy8gVE9ETyBoYW5kbGUgY29ycmVjdCBhbmdsZVxuICAgICAgICByZXR1cm4gcGFyc2VMaW5lYXJHcmFkaWVudChbJ3RvIGJvdHRvbSddLmNvbmNhdCh0cmFuc2Zvcm1PYnNvbGV0ZUNvbG9yU3RvcHMoYXJncy5zbGljZSgzKSkpLCBib3VuZHMsICEhcHJlZml4KTtcbiAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gJ3JhZGlhbC1ncmFkaWVudCcpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlUmFkaWFsR3JhZGllbnQoY29udGFpbmVyLCBwcmVmaXggPT09ICctd2Via2l0LScgPyB0cmFuc2Zvcm1XZWJraXRSYWRpYWxHcmFkaWVudEFyZ3MoYXJncykgOiBhcmdzLCBib3VuZHMpO1xuICAgIH0gZWxzZSBpZiAobWV0aG9kID09PSAnZ3JhZGllbnQnICYmIGFyZ3NbMF0gPT09ICdyYWRpYWwnKSB7XG4gICAgICAgIHJldHVybiBwYXJzZVJhZGlhbEdyYWRpZW50KGNvbnRhaW5lciwgdHJhbnNmb3JtT2Jzb2xldGVDb2xvclN0b3BzKHRyYW5zZm9ybVdlYmtpdFJhZGlhbEdyYWRpZW50QXJncyhhcmdzLnNsaWNlKDEpKSksIGJvdW5kcyk7XG4gICAgfVxufTtcblxudmFyIHBhcnNlQ29sb3JTdG9wcyA9IGZ1bmN0aW9uIHBhcnNlQ29sb3JTdG9wcyhhcmdzLCBmaXJzdENvbG9yU3RvcEluZGV4LCBsaW5lTGVuZ3RoKSB7XG4gICAgdmFyIGNvbG9yU3RvcHMgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSBmaXJzdENvbG9yU3RvcEluZGV4OyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgdmFsdWUgPSBhcmdzW2ldO1xuICAgICAgICB2YXIgSEFTX0xFTkdUSCA9IEVORFNfV0lUSF9MRU5HVEgudGVzdCh2YWx1ZSk7XG4gICAgICAgIHZhciBsYXN0U3BhY2VJbmRleCA9IHZhbHVlLmxhc3RJbmRleE9mKCcgJyk7XG4gICAgICAgIHZhciBfY29sb3IgPSBuZXcgX0NvbG9yMi5kZWZhdWx0KEhBU19MRU5HVEggPyB2YWx1ZS5zdWJzdHJpbmcoMCwgbGFzdFNwYWNlSW5kZXgpIDogdmFsdWUpO1xuICAgICAgICB2YXIgX3N0b3AgPSBIQVNfTEVOR1RIID8gbmV3IF9MZW5ndGgyLmRlZmF1bHQodmFsdWUuc3Vic3RyaW5nKGxhc3RTcGFjZUluZGV4ICsgMSkpIDogaSA9PT0gZmlyc3RDb2xvclN0b3BJbmRleCA/IG5ldyBfTGVuZ3RoMi5kZWZhdWx0KCcwJScpIDogaSA9PT0gYXJncy5sZW5ndGggLSAxID8gbmV3IF9MZW5ndGgyLmRlZmF1bHQoJzEwMCUnKSA6IG51bGw7XG4gICAgICAgIGNvbG9yU3RvcHMucHVzaCh7IGNvbG9yOiBfY29sb3IsIHN0b3A6IF9zdG9wIH0pO1xuICAgIH1cblxuICAgIHZhciBhYnNvbHV0ZVZhbHVlZENvbG9yU3RvcHMgPSBjb2xvclN0b3BzLm1hcChmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgICAgdmFyIGNvbG9yID0gX3JlZjIuY29sb3IsXG4gICAgICAgICAgICBzdG9wID0gX3JlZjIuc3RvcDtcblxuICAgICAgICB2YXIgYWJzb2x1dGVTdG9wID0gbGluZUxlbmd0aCA9PT0gMCA/IDAgOiBzdG9wID8gc3RvcC5nZXRBYnNvbHV0ZVZhbHVlKGxpbmVMZW5ndGgpIC8gbGluZUxlbmd0aCA6IG51bGw7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvcixcbiAgICAgICAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgICAgICAgIHN0b3A6IGFic29sdXRlU3RvcFxuICAgICAgICB9O1xuICAgIH0pO1xuXG4gICAgdmFyIHByZXZpb3VzQ29sb3JTdG9wID0gYWJzb2x1dGVWYWx1ZWRDb2xvclN0b3BzWzBdLnN0b3A7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFic29sdXRlVmFsdWVkQ29sb3JTdG9wcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgaWYgKHByZXZpb3VzQ29sb3JTdG9wICE9PSBudWxsKSB7XG4gICAgICAgICAgICB2YXIgX3N0b3AyID0gYWJzb2x1dGVWYWx1ZWRDb2xvclN0b3BzW19pXS5zdG9wO1xuICAgICAgICAgICAgaWYgKF9zdG9wMiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHZhciBuID0gX2k7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGFic29sdXRlVmFsdWVkQ29sb3JTdG9wc1tuXS5zdG9wID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIG4rKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHN0ZXBzID0gbiAtIF9pICsgMTtcbiAgICAgICAgICAgICAgICB2YXIgbmV4dENvbG9yU3RlcCA9IGFic29sdXRlVmFsdWVkQ29sb3JTdG9wc1tuXS5zdG9wO1xuICAgICAgICAgICAgICAgIHZhciBzdGVwU2l6ZSA9IChuZXh0Q29sb3JTdGVwIC0gcHJldmlvdXNDb2xvclN0b3ApIC8gc3RlcHM7XG4gICAgICAgICAgICAgICAgZm9yICg7IF9pIDwgbjsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c0NvbG9yU3RvcCA9IGFic29sdXRlVmFsdWVkQ29sb3JTdG9wc1tfaV0uc3RvcCA9IHByZXZpb3VzQ29sb3JTdG9wICsgc3RlcFNpemU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcmV2aW91c0NvbG9yU3RvcCA9IF9zdG9wMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhYnNvbHV0ZVZhbHVlZENvbG9yU3RvcHM7XG59O1xuXG52YXIgcGFyc2VMaW5lYXJHcmFkaWVudCA9IGZ1bmN0aW9uIHBhcnNlTGluZWFyR3JhZGllbnQoYXJncywgYm91bmRzLCBoYXNQcmVmaXgpIHtcbiAgICB2YXIgYW5nbGUgPSAoMCwgX0FuZ2xlLnBhcnNlQW5nbGUpKGFyZ3NbMF0pO1xuICAgIHZhciBIQVNfU0lERV9PUl9DT1JORVIgPSBTSURFX09SX0NPUk5FUi50ZXN0KGFyZ3NbMF0pO1xuICAgIHZhciBIQVNfRElSRUNUSU9OID0gSEFTX1NJREVfT1JfQ09STkVSIHx8IGFuZ2xlICE9PSBudWxsIHx8IFBFUkNFTlRBR0VfQU5HTEVTLnRlc3QoYXJnc1swXSk7XG4gICAgdmFyIGRpcmVjdGlvbiA9IEhBU19ESVJFQ1RJT04gPyBhbmdsZSAhPT0gbnVsbCA/IGNhbGN1bGF0ZUdyYWRpZW50RGlyZWN0aW9uKFxuICAgIC8vIGlmIHRoZXJlIGlzIGEgcHJlZml4LCB0aGUgMMKwIGFuZ2xlIHBvaW50cyBkdWUgRWFzdCAoaW5zdGVhZCBvZiBOb3J0aCBwZXIgVzNDKVxuICAgIGhhc1ByZWZpeCA/IGFuZ2xlIC0gTWF0aC5QSSAqIDAuNSA6IGFuZ2xlLCBib3VuZHMpIDogSEFTX1NJREVfT1JfQ09STkVSID8gcGFyc2VTaWRlT3JDb3JuZXIoYXJnc1swXSwgYm91bmRzKSA6IHBhcnNlUGVyY2VudGFnZUFuZ2xlKGFyZ3NbMF0sIGJvdW5kcykgOiBjYWxjdWxhdGVHcmFkaWVudERpcmVjdGlvbihNYXRoLlBJLCBib3VuZHMpO1xuICAgIHZhciBmaXJzdENvbG9yU3RvcEluZGV4ID0gSEFTX0RJUkVDVElPTiA/IDEgOiAwO1xuXG4gICAgLy8gVE9ETzogRml4IHNvbWUgaW5hY2N1cmFjeSB3aXRoIGNvbG9yIHN0b3BzIHdpdGggcHggdmFsdWVzXG4gICAgdmFyIGxpbmVMZW5ndGggPSBNYXRoLm1pbigoMCwgX1V0aWwuZGlzdGFuY2UpKE1hdGguYWJzKGRpcmVjdGlvbi54MCkgKyBNYXRoLmFicyhkaXJlY3Rpb24ueDEpLCBNYXRoLmFicyhkaXJlY3Rpb24ueTApICsgTWF0aC5hYnMoZGlyZWN0aW9uLnkxKSksIGJvdW5kcy53aWR0aCAqIDIsIGJvdW5kcy5oZWlnaHQgKiAyKTtcblxuICAgIHJldHVybiBuZXcgTGluZWFyR3JhZGllbnQocGFyc2VDb2xvclN0b3BzKGFyZ3MsIGZpcnN0Q29sb3JTdG9wSW5kZXgsIGxpbmVMZW5ndGgpLCBkaXJlY3Rpb24pO1xufTtcblxudmFyIHBhcnNlUmFkaWFsR3JhZGllbnQgPSBmdW5jdGlvbiBwYXJzZVJhZGlhbEdyYWRpZW50KGNvbnRhaW5lciwgYXJncywgYm91bmRzKSB7XG4gICAgdmFyIG0gPSBhcmdzWzBdLm1hdGNoKFJBRElBTF9TSEFQRV9ERUZJTklUSU9OKTtcbiAgICB2YXIgc2hhcGUgPSBtICYmIChtWzFdID09PSAnY2lyY2xlJyB8fCAvLyBleHBsaWNpdCBzaGFwZSBzcGVjaWZpY2F0aW9uXG4gICAgbVszXSAhPT0gdW5kZWZpbmVkICYmIG1bNV0gPT09IHVuZGVmaW5lZCkgLy8gb25seSBvbmUgcmFkaXVzIGNvb3JkaW5hdGVcbiAgICA/IFJBRElBTF9HUkFESUVOVF9TSEFQRS5DSVJDTEUgOiBSQURJQUxfR1JBRElFTlRfU0hBUEUuRUxMSVBTRTtcbiAgICB2YXIgcmFkaXVzID0ge307XG4gICAgdmFyIGNlbnRlciA9IHt9O1xuXG4gICAgaWYgKG0pIHtcbiAgICAgICAgLy8gUmFkaXVzXG4gICAgICAgIGlmIChtWzNdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJhZGl1cy54ID0gKDAsIF9MZW5ndGguY2FsY3VsYXRlTGVuZ3RoRnJvbVZhbHVlV2l0aFVuaXQpKGNvbnRhaW5lciwgbVszXSwgbVs0XSkuZ2V0QWJzb2x1dGVWYWx1ZShib3VuZHMud2lkdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1bNV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmFkaXVzLnkgPSAoMCwgX0xlbmd0aC5jYWxjdWxhdGVMZW5ndGhGcm9tVmFsdWVXaXRoVW5pdCkoY29udGFpbmVyLCBtWzVdLCBtWzZdKS5nZXRBYnNvbHV0ZVZhbHVlKGJvdW5kcy5oZWlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUG9zaXRpb25cbiAgICAgICAgaWYgKG1bN10pIHtcbiAgICAgICAgICAgIGNlbnRlci54ID0gTEVOR1RIX0ZPUl9QT1NJVElPTlttWzddLnRvTG93ZXJDYXNlKCldO1xuICAgICAgICB9IGVsc2UgaWYgKG1bOF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY2VudGVyLnggPSAoMCwgX0xlbmd0aC5jYWxjdWxhdGVMZW5ndGhGcm9tVmFsdWVXaXRoVW5pdCkoY29udGFpbmVyLCBtWzhdLCBtWzldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtWzEwXSkge1xuICAgICAgICAgICAgY2VudGVyLnkgPSBMRU5HVEhfRk9SX1BPU0lUSU9OW21bMTBdLnRvTG93ZXJDYXNlKCldO1xuICAgICAgICB9IGVsc2UgaWYgKG1bMTFdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNlbnRlci55ID0gKDAsIF9MZW5ndGguY2FsY3VsYXRlTGVuZ3RoRnJvbVZhbHVlV2l0aFVuaXQpKGNvbnRhaW5lciwgbVsxMV0sIG1bMTJdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBncmFkaWVudENlbnRlciA9IHtcbiAgICAgICAgeDogY2VudGVyLnggPT09IHVuZGVmaW5lZCA/IGJvdW5kcy53aWR0aCAvIDIgOiBjZW50ZXIueC5nZXRBYnNvbHV0ZVZhbHVlKGJvdW5kcy53aWR0aCksXG4gICAgICAgIHk6IGNlbnRlci55ID09PSB1bmRlZmluZWQgPyBib3VuZHMuaGVpZ2h0IC8gMiA6IGNlbnRlci55LmdldEFic29sdXRlVmFsdWUoYm91bmRzLmhlaWdodClcbiAgICB9O1xuICAgIHZhciBncmFkaWVudFJhZGl1cyA9IGNhbGN1bGF0ZVJhZGl1cyhtICYmIG1bMl0gfHwgJ2ZhcnRoZXN0LWNvcm5lcicsIHNoYXBlLCBncmFkaWVudENlbnRlciwgcmFkaXVzLCBib3VuZHMpO1xuXG4gICAgcmV0dXJuIG5ldyBSYWRpYWxHcmFkaWVudChwYXJzZUNvbG9yU3RvcHMoYXJncywgbSA/IDEgOiAwLCBNYXRoLm1pbihncmFkaWVudFJhZGl1cy54LCBncmFkaWVudFJhZGl1cy55KSksIHNoYXBlLCBncmFkaWVudENlbnRlciwgZ3JhZGllbnRSYWRpdXMpO1xufTtcblxudmFyIGNhbGN1bGF0ZUdyYWRpZW50RGlyZWN0aW9uID0gZnVuY3Rpb24gY2FsY3VsYXRlR3JhZGllbnREaXJlY3Rpb24ocmFkaWFuLCBib3VuZHMpIHtcbiAgICB2YXIgd2lkdGggPSBib3VuZHMud2lkdGg7XG4gICAgdmFyIGhlaWdodCA9IGJvdW5kcy5oZWlnaHQ7XG4gICAgdmFyIEhBTEZfV0lEVEggPSB3aWR0aCAqIDAuNTtcbiAgICB2YXIgSEFMRl9IRUlHSFQgPSBoZWlnaHQgKiAwLjU7XG4gICAgdmFyIGxpbmVMZW5ndGggPSBNYXRoLmFicyh3aWR0aCAqIE1hdGguc2luKHJhZGlhbikpICsgTWF0aC5hYnMoaGVpZ2h0ICogTWF0aC5jb3MocmFkaWFuKSk7XG4gICAgdmFyIEhBTEZfTElORV9MRU5HVEggPSBsaW5lTGVuZ3RoIC8gMjtcblxuICAgIHZhciB4MCA9IEhBTEZfV0lEVEggKyBNYXRoLnNpbihyYWRpYW4pICogSEFMRl9MSU5FX0xFTkdUSDtcbiAgICB2YXIgeTAgPSBIQUxGX0hFSUdIVCAtIE1hdGguY29zKHJhZGlhbikgKiBIQUxGX0xJTkVfTEVOR1RIO1xuICAgIHZhciB4MSA9IHdpZHRoIC0geDA7XG4gICAgdmFyIHkxID0gaGVpZ2h0IC0geTA7XG5cbiAgICByZXR1cm4geyB4MDogeDAsIHgxOiB4MSwgeTA6IHkwLCB5MTogeTEgfTtcbn07XG5cbnZhciBwYXJzZVRvcFJpZ2h0ID0gZnVuY3Rpb24gcGFyc2VUb3BSaWdodChib3VuZHMpIHtcbiAgICByZXR1cm4gTWF0aC5hY29zKGJvdW5kcy53aWR0aCAvIDIgLyAoKDAsIF9VdGlsLmRpc3RhbmNlKShib3VuZHMud2lkdGgsIGJvdW5kcy5oZWlnaHQpIC8gMikpO1xufTtcblxudmFyIHBhcnNlU2lkZU9yQ29ybmVyID0gZnVuY3Rpb24gcGFyc2VTaWRlT3JDb3JuZXIoc2lkZSwgYm91bmRzKSB7XG4gICAgc3dpdGNoIChzaWRlKSB7XG4gICAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgIGNhc2UgJ3RvIHRvcCc6XG4gICAgICAgICAgICByZXR1cm4gY2FsY3VsYXRlR3JhZGllbnREaXJlY3Rpb24oMCwgYm91bmRzKTtcbiAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgIGNhc2UgJ3RvIHJpZ2h0JzpcbiAgICAgICAgICAgIHJldHVybiBjYWxjdWxhdGVHcmFkaWVudERpcmVjdGlvbihNYXRoLlBJIC8gMiwgYm91bmRzKTtcbiAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICBjYXNlICd0byBsZWZ0JzpcbiAgICAgICAgICAgIHJldHVybiBjYWxjdWxhdGVHcmFkaWVudERpcmVjdGlvbigzICogTWF0aC5QSSAvIDIsIGJvdW5kcyk7XG4gICAgICAgIGNhc2UgJ3RvcCByaWdodCc6XG4gICAgICAgIGNhc2UgJ3JpZ2h0IHRvcCc6XG4gICAgICAgIGNhc2UgJ3RvIGJvdHRvbSBsZWZ0JzpcbiAgICAgICAgY2FzZSAndG8gbGVmdCBib3R0b20nOlxuICAgICAgICAgICAgcmV0dXJuIGNhbGN1bGF0ZUdyYWRpZW50RGlyZWN0aW9uKE1hdGguUEkgKyBwYXJzZVRvcFJpZ2h0KGJvdW5kcyksIGJvdW5kcyk7XG4gICAgICAgIGNhc2UgJ3RvcCBsZWZ0JzpcbiAgICAgICAgY2FzZSAnbGVmdCB0b3AnOlxuICAgICAgICBjYXNlICd0byBib3R0b20gcmlnaHQnOlxuICAgICAgICBjYXNlICd0byByaWdodCBib3R0b20nOlxuICAgICAgICAgICAgcmV0dXJuIGNhbGN1bGF0ZUdyYWRpZW50RGlyZWN0aW9uKE1hdGguUEkgLSBwYXJzZVRvcFJpZ2h0KGJvdW5kcyksIGJvdW5kcyk7XG4gICAgICAgIGNhc2UgJ2JvdHRvbSBsZWZ0JzpcbiAgICAgICAgY2FzZSAnbGVmdCBib3R0b20nOlxuICAgICAgICBjYXNlICd0byB0b3AgcmlnaHQnOlxuICAgICAgICBjYXNlICd0byByaWdodCB0b3AnOlxuICAgICAgICAgICAgcmV0dXJuIGNhbGN1bGF0ZUdyYWRpZW50RGlyZWN0aW9uKHBhcnNlVG9wUmlnaHQoYm91bmRzKSwgYm91bmRzKTtcbiAgICAgICAgY2FzZSAnYm90dG9tIHJpZ2h0JzpcbiAgICAgICAgY2FzZSAncmlnaHQgYm90dG9tJzpcbiAgICAgICAgY2FzZSAndG8gdG9wIGxlZnQnOlxuICAgICAgICBjYXNlICd0byBsZWZ0IHRvcCc6XG4gICAgICAgICAgICByZXR1cm4gY2FsY3VsYXRlR3JhZGllbnREaXJlY3Rpb24oMiAqIE1hdGguUEkgLSBwYXJzZVRvcFJpZ2h0KGJvdW5kcyksIGJvdW5kcyk7XG4gICAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgIGNhc2UgJ3RvIGJvdHRvbSc6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gY2FsY3VsYXRlR3JhZGllbnREaXJlY3Rpb24oTWF0aC5QSSwgYm91bmRzKTtcbiAgICB9XG59O1xuXG52YXIgcGFyc2VQZXJjZW50YWdlQW5nbGUgPSBmdW5jdGlvbiBwYXJzZVBlcmNlbnRhZ2VBbmdsZShhbmdsZSwgYm91bmRzKSB7XG4gICAgdmFyIF9hbmdsZSRzcGxpdCRtYXAgPSBhbmdsZS5zcGxpdCgnICcpLm1hcChwYXJzZUZsb2F0KSxcbiAgICAgICAgX2FuZ2xlJHNwbGl0JG1hcDIgPSBfc2xpY2VkVG9BcnJheShfYW5nbGUkc3BsaXQkbWFwLCAyKSxcbiAgICAgICAgbGVmdCA9IF9hbmdsZSRzcGxpdCRtYXAyWzBdLFxuICAgICAgICB0b3AgPSBfYW5nbGUkc3BsaXQkbWFwMlsxXTtcblxuICAgIHZhciByYXRpbyA9IGxlZnQgLyAxMDAgKiBib3VuZHMud2lkdGggLyAodG9wIC8gMTAwICogYm91bmRzLmhlaWdodCk7XG5cbiAgICByZXR1cm4gY2FsY3VsYXRlR3JhZGllbnREaXJlY3Rpb24oTWF0aC5hdGFuKGlzTmFOKHJhdGlvKSA/IDEgOiByYXRpbykgKyBNYXRoLlBJIC8gMiwgYm91bmRzKTtcbn07XG5cbnZhciBmaW5kQ29ybmVyID0gZnVuY3Rpb24gZmluZENvcm5lcihib3VuZHMsIHgsIHksIGNsb3Nlc3QpIHtcbiAgICB2YXIgY29ybmVycyA9IFt7IHg6IDAsIHk6IDAgfSwgeyB4OiAwLCB5OiBib3VuZHMuaGVpZ2h0IH0sIHsgeDogYm91bmRzLndpZHRoLCB5OiAwIH0sIHsgeDogYm91bmRzLndpZHRoLCB5OiBib3VuZHMuaGVpZ2h0IH1dO1xuXG4gICAgLy8gJEZsb3dGaXhNZVxuICAgIHJldHVybiBjb3JuZXJzLnJlZHVjZShmdW5jdGlvbiAoc3RhdCwgY29ybmVyKSB7XG4gICAgICAgIHZhciBkID0gKDAsIF9VdGlsLmRpc3RhbmNlKSh4IC0gY29ybmVyLngsIHkgLSBjb3JuZXIueSk7XG4gICAgICAgIGlmIChjbG9zZXN0ID8gZCA8IHN0YXQub3B0aW11bURpc3RhbmNlIDogZCA+IHN0YXQub3B0aW11bURpc3RhbmNlKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG9wdGltdW1Db3JuZXI6IGNvcm5lcixcbiAgICAgICAgICAgICAgICBvcHRpbXVtRGlzdGFuY2U6IGRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RhdDtcbiAgICB9LCB7XG4gICAgICAgIG9wdGltdW1EaXN0YW5jZTogY2xvc2VzdCA/IEluZmluaXR5IDogLUluZmluaXR5LFxuICAgICAgICBvcHRpbXVtQ29ybmVyOiBudWxsXG4gICAgfSkub3B0aW11bUNvcm5lcjtcbn07XG5cbnZhciBjYWxjdWxhdGVSYWRpdXMgPSBmdW5jdGlvbiBjYWxjdWxhdGVSYWRpdXMoZXh0ZW50LCBzaGFwZSwgY2VudGVyLCByYWRpdXMsIGJvdW5kcykge1xuICAgIHZhciB4ID0gY2VudGVyLng7XG4gICAgdmFyIHkgPSBjZW50ZXIueTtcbiAgICB2YXIgcnggPSAwO1xuICAgIHZhciByeSA9IDA7XG5cbiAgICBzd2l0Y2ggKGV4dGVudCkge1xuICAgICAgICBjYXNlICdjbG9zZXN0LXNpZGUnOlxuICAgICAgICAgICAgLy8gVGhlIGVuZGluZyBzaGFwZSBpcyBzaXplZCBzbyB0aGF0IHRoYXQgaXQgZXhhY3RseSBtZWV0cyB0aGUgc2lkZSBvZiB0aGUgZ3JhZGllbnQgYm94IGNsb3Nlc3QgdG8gdGhlIGdyYWRpZW504oCZcyBjZW50ZXIuXG4gICAgICAgICAgICAvLyBJZiB0aGUgc2hhcGUgaXMgYW4gZWxsaXBzZSwgaXQgZXhhY3RseSBtZWV0cyB0aGUgY2xvc2VzdCBzaWRlIGluIGVhY2ggZGltZW5zaW9uLlxuICAgICAgICAgICAgaWYgKHNoYXBlID09PSBSQURJQUxfR1JBRElFTlRfU0hBUEUuQ0lSQ0xFKSB7XG4gICAgICAgICAgICAgICAgcnggPSByeSA9IE1hdGgubWluKE1hdGguYWJzKHgpLCBNYXRoLmFicyh4IC0gYm91bmRzLndpZHRoKSwgTWF0aC5hYnMoeSksIE1hdGguYWJzKHkgLSBib3VuZHMuaGVpZ2h0KSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNoYXBlID09PSBSQURJQUxfR1JBRElFTlRfU0hBUEUuRUxMSVBTRSkge1xuICAgICAgICAgICAgICAgIHJ4ID0gTWF0aC5taW4oTWF0aC5hYnMoeCksIE1hdGguYWJzKHggLSBib3VuZHMud2lkdGgpKTtcbiAgICAgICAgICAgICAgICByeSA9IE1hdGgubWluKE1hdGguYWJzKHkpLCBNYXRoLmFicyh5IC0gYm91bmRzLmhlaWdodCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnY2xvc2VzdC1jb3JuZXInOlxuICAgICAgICAgICAgLy8gVGhlIGVuZGluZyBzaGFwZSBpcyBzaXplZCBzbyB0aGF0IHRoYXQgaXQgcGFzc2VzIHRocm91Z2ggdGhlIGNvcm5lciBvZiB0aGUgZ3JhZGllbnQgYm94IGNsb3Nlc3QgdG8gdGhlIGdyYWRpZW504oCZcyBjZW50ZXIuXG4gICAgICAgICAgICAvLyBJZiB0aGUgc2hhcGUgaXMgYW4gZWxsaXBzZSwgdGhlIGVuZGluZyBzaGFwZSBpcyBnaXZlbiB0aGUgc2FtZSBhc3BlY3QtcmF0aW8gaXQgd291bGQgaGF2ZSBpZiBjbG9zZXN0LXNpZGUgd2VyZSBzcGVjaWZpZWQuXG4gICAgICAgICAgICBpZiAoc2hhcGUgPT09IFJBRElBTF9HUkFESUVOVF9TSEFQRS5DSVJDTEUpIHtcbiAgICAgICAgICAgICAgICByeCA9IHJ5ID0gTWF0aC5taW4oKDAsIF9VdGlsLmRpc3RhbmNlKSh4LCB5KSwgKDAsIF9VdGlsLmRpc3RhbmNlKSh4LCB5IC0gYm91bmRzLmhlaWdodCksICgwLCBfVXRpbC5kaXN0YW5jZSkoeCAtIGJvdW5kcy53aWR0aCwgeSksICgwLCBfVXRpbC5kaXN0YW5jZSkoeCAtIGJvdW5kcy53aWR0aCwgeSAtIGJvdW5kcy5oZWlnaHQpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hhcGUgPT09IFJBRElBTF9HUkFESUVOVF9TSEFQRS5FTExJUFNFKSB7XG4gICAgICAgICAgICAgICAgLy8gQ29tcHV0ZSB0aGUgcmF0aW8gcnkvcnggKHdoaWNoIGlzIHRvIGJlIHRoZSBzYW1lIGFzIGZvciBcImNsb3Nlc3Qtc2lkZVwiKVxuICAgICAgICAgICAgICAgIHZhciBjID0gTWF0aC5taW4oTWF0aC5hYnMoeSksIE1hdGguYWJzKHkgLSBib3VuZHMuaGVpZ2h0KSkgLyBNYXRoLm1pbihNYXRoLmFicyh4KSwgTWF0aC5hYnMoeCAtIGJvdW5kcy53aWR0aCkpO1xuICAgICAgICAgICAgICAgIHZhciBjb3JuZXIgPSBmaW5kQ29ybmVyKGJvdW5kcywgeCwgeSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgcnggPSAoMCwgX1V0aWwuZGlzdGFuY2UpKGNvcm5lci54IC0geCwgKGNvcm5lci55IC0geSkgLyBjKTtcbiAgICAgICAgICAgICAgICByeSA9IGMgKiByeDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2ZhcnRoZXN0LXNpZGUnOlxuICAgICAgICAgICAgLy8gU2FtZSBhcyBjbG9zZXN0LXNpZGUsIGV4Y2VwdCB0aGUgZW5kaW5nIHNoYXBlIGlzIHNpemVkIGJhc2VkIG9uIHRoZSBmYXJ0aGVzdCBzaWRlKHMpXG4gICAgICAgICAgICBpZiAoc2hhcGUgPT09IFJBRElBTF9HUkFESUVOVF9TSEFQRS5DSVJDTEUpIHtcbiAgICAgICAgICAgICAgICByeCA9IHJ5ID0gTWF0aC5tYXgoTWF0aC5hYnMoeCksIE1hdGguYWJzKHggLSBib3VuZHMud2lkdGgpLCBNYXRoLmFicyh5KSwgTWF0aC5hYnMoeSAtIGJvdW5kcy5oZWlnaHQpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hhcGUgPT09IFJBRElBTF9HUkFESUVOVF9TSEFQRS5FTExJUFNFKSB7XG4gICAgICAgICAgICAgICAgcnggPSBNYXRoLm1heChNYXRoLmFicyh4KSwgTWF0aC5hYnMoeCAtIGJvdW5kcy53aWR0aCkpO1xuICAgICAgICAgICAgICAgIHJ5ID0gTWF0aC5tYXgoTWF0aC5hYnMoeSksIE1hdGguYWJzKHkgLSBib3VuZHMuaGVpZ2h0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdmYXJ0aGVzdC1jb3JuZXInOlxuICAgICAgICAgICAgLy8gU2FtZSBhcyBjbG9zZXN0LWNvcm5lciwgZXhjZXB0IHRoZSBlbmRpbmcgc2hhcGUgaXMgc2l6ZWQgYmFzZWQgb24gdGhlIGZhcnRoZXN0IGNvcm5lci5cbiAgICAgICAgICAgIC8vIElmIHRoZSBzaGFwZSBpcyBhbiBlbGxpcHNlLCB0aGUgZW5kaW5nIHNoYXBlIGlzIGdpdmVuIHRoZSBzYW1lIGFzcGVjdCByYXRpbyBpdCB3b3VsZCBoYXZlIGlmIGZhcnRoZXN0LXNpZGUgd2VyZSBzcGVjaWZpZWQuXG4gICAgICAgICAgICBpZiAoc2hhcGUgPT09IFJBRElBTF9HUkFESUVOVF9TSEFQRS5DSVJDTEUpIHtcbiAgICAgICAgICAgICAgICByeCA9IHJ5ID0gTWF0aC5tYXgoKDAsIF9VdGlsLmRpc3RhbmNlKSh4LCB5KSwgKDAsIF9VdGlsLmRpc3RhbmNlKSh4LCB5IC0gYm91bmRzLmhlaWdodCksICgwLCBfVXRpbC5kaXN0YW5jZSkoeCAtIGJvdW5kcy53aWR0aCwgeSksICgwLCBfVXRpbC5kaXN0YW5jZSkoeCAtIGJvdW5kcy53aWR0aCwgeSAtIGJvdW5kcy5oZWlnaHQpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hhcGUgPT09IFJBRElBTF9HUkFESUVOVF9TSEFQRS5FTExJUFNFKSB7XG4gICAgICAgICAgICAgICAgLy8gQ29tcHV0ZSB0aGUgcmF0aW8gcnkvcnggKHdoaWNoIGlzIHRvIGJlIHRoZSBzYW1lIGFzIGZvciBcImZhcnRoZXN0LXNpZGVcIilcbiAgICAgICAgICAgICAgICB2YXIgX2MgPSBNYXRoLm1heChNYXRoLmFicyh5KSwgTWF0aC5hYnMoeSAtIGJvdW5kcy5oZWlnaHQpKSAvIE1hdGgubWF4KE1hdGguYWJzKHgpLCBNYXRoLmFicyh4IC0gYm91bmRzLndpZHRoKSk7XG4gICAgICAgICAgICAgICAgdmFyIF9jb3JuZXIgPSBmaW5kQ29ybmVyKGJvdW5kcywgeCwgeSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJ4ID0gKDAsIF9VdGlsLmRpc3RhbmNlKShfY29ybmVyLnggLSB4LCAoX2Nvcm5lci55IC0geSkgLyBfYyk7XG4gICAgICAgICAgICAgICAgcnkgPSBfYyAqIHJ4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIC8vIHBpeGVsIG9yIHBlcmNlbnRhZ2UgdmFsdWVzXG4gICAgICAgICAgICByeCA9IHJhZGl1cy54IHx8IDA7XG4gICAgICAgICAgICByeSA9IHJhZGl1cy55ICE9PSB1bmRlZmluZWQgPyByYWRpdXMueSA6IHJ4O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogcngsXG4gICAgICAgIHk6IHJ5XG4gICAgfTtcbn07XG5cbnZhciB0cmFuc2Zvcm1XZWJraXRSYWRpYWxHcmFkaWVudEFyZ3MgPSBleHBvcnRzLnRyYW5zZm9ybVdlYmtpdFJhZGlhbEdyYWRpZW50QXJncyA9IGZ1bmN0aW9uIHRyYW5zZm9ybVdlYmtpdFJhZGlhbEdyYWRpZW50QXJncyhhcmdzKSB7XG4gICAgdmFyIHNoYXBlID0gJyc7XG4gICAgdmFyIHJhZGl1cyA9ICcnO1xuICAgIHZhciBleHRlbnQgPSAnJztcbiAgICB2YXIgcG9zaXRpb24gPSAnJztcbiAgICB2YXIgaWR4ID0gMDtcblxuICAgIHZhciBQT1NJVElPTiA9IC9eKGxlZnR8Y2VudGVyfHJpZ2h0fFxcZCsoPzpweHxyP2VtfCUpPykoPzpcXHMrKHRvcHxjZW50ZXJ8Ym90dG9tfFxcZCsoPzpweHxyP2VtfCUpPykpPyQvaTtcbiAgICB2YXIgU0hBUEVfQU5EX0VYVEVOVCA9IC9eKGNpcmNsZXxlbGxpcHNlKT9cXHMqKGNsb3Nlc3Qtc2lkZXxjbG9zZXN0LWNvcm5lcnxmYXJ0aGVzdC1zaWRlfGZhcnRoZXN0LWNvcm5lcnxjb250YWlufGNvdmVyKT8kL2k7XG4gICAgdmFyIFJBRElVUyA9IC9eXFxkKyhweHxyP2VtfCUpPyg/OlxccytcXGQrKHB4fHI/ZW18JSk/KT8kL2k7XG5cbiAgICB2YXIgbWF0Y2hTdGFydFBvc2l0aW9uID0gYXJnc1tpZHhdLm1hdGNoKFBPU0lUSU9OKTtcbiAgICBpZiAobWF0Y2hTdGFydFBvc2l0aW9uKSB7XG4gICAgICAgIGlkeCsrO1xuICAgIH1cblxuICAgIHZhciBtYXRjaFNoYXBlRXh0ZW50ID0gYXJnc1tpZHhdLm1hdGNoKFNIQVBFX0FORF9FWFRFTlQpO1xuICAgIGlmIChtYXRjaFNoYXBlRXh0ZW50KSB7XG4gICAgICAgIHNoYXBlID0gbWF0Y2hTaGFwZUV4dGVudFsxXSB8fCAnJztcbiAgICAgICAgZXh0ZW50ID0gbWF0Y2hTaGFwZUV4dGVudFsyXSB8fCAnJztcbiAgICAgICAgaWYgKGV4dGVudCA9PT0gJ2NvbnRhaW4nKSB7XG4gICAgICAgICAgICBleHRlbnQgPSAnY2xvc2VzdC1zaWRlJztcbiAgICAgICAgfSBlbHNlIGlmIChleHRlbnQgPT09ICdjb3ZlcicpIHtcbiAgICAgICAgICAgIGV4dGVudCA9ICdmYXJ0aGVzdC1jb3JuZXInO1xuICAgICAgICB9XG4gICAgICAgIGlkeCsrO1xuICAgIH1cblxuICAgIHZhciBtYXRjaFN0YXJ0UmFkaXVzID0gYXJnc1tpZHhdLm1hdGNoKFJBRElVUyk7XG4gICAgaWYgKG1hdGNoU3RhcnRSYWRpdXMpIHtcbiAgICAgICAgaWR4Kys7XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoRW5kUG9zaXRpb24gPSBhcmdzW2lkeF0ubWF0Y2goUE9TSVRJT04pO1xuICAgIGlmIChtYXRjaEVuZFBvc2l0aW9uKSB7XG4gICAgICAgIGlkeCsrO1xuICAgIH1cblxuICAgIHZhciBtYXRjaEVuZFJhZGl1cyA9IGFyZ3NbaWR4XS5tYXRjaChSQURJVVMpO1xuICAgIGlmIChtYXRjaEVuZFJhZGl1cykge1xuICAgICAgICBpZHgrKztcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hQb3NpdGlvbiA9IG1hdGNoRW5kUG9zaXRpb24gfHwgbWF0Y2hTdGFydFBvc2l0aW9uO1xuICAgIGlmIChtYXRjaFBvc2l0aW9uICYmIG1hdGNoUG9zaXRpb25bMV0pIHtcbiAgICAgICAgcG9zaXRpb24gPSBtYXRjaFBvc2l0aW9uWzFdICsgKC9eXFxkKyQvLnRlc3QobWF0Y2hQb3NpdGlvblsxXSkgPyAncHgnIDogJycpO1xuICAgICAgICBpZiAobWF0Y2hQb3NpdGlvblsyXSkge1xuICAgICAgICAgICAgcG9zaXRpb24gKz0gJyAnICsgbWF0Y2hQb3NpdGlvblsyXSArICgvXlxcZCskLy50ZXN0KG1hdGNoUG9zaXRpb25bMl0pID8gJ3B4JyA6ICcnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBtYXRjaFJhZGl1cyA9IG1hdGNoRW5kUmFkaXVzIHx8IG1hdGNoU3RhcnRSYWRpdXM7XG4gICAgaWYgKG1hdGNoUmFkaXVzKSB7XG4gICAgICAgIHJhZGl1cyA9IG1hdGNoUmFkaXVzWzBdO1xuICAgICAgICBpZiAoIW1hdGNoUmFkaXVzWzFdKSB7XG4gICAgICAgICAgICByYWRpdXMgKz0gJ3B4JztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwb3NpdGlvbiAmJiAhc2hhcGUgJiYgIXJhZGl1cyAmJiAhZXh0ZW50KSB7XG4gICAgICAgIHJhZGl1cyA9IHBvc2l0aW9uO1xuICAgICAgICBwb3NpdGlvbiA9ICcnO1xuICAgIH1cblxuICAgIGlmIChwb3NpdGlvbikge1xuICAgICAgICBwb3NpdGlvbiA9ICdhdCAnICsgcG9zaXRpb247XG4gICAgfVxuXG4gICAgcmV0dXJuIFtbc2hhcGUsIGV4dGVudCwgcmFkaXVzLCBwb3NpdGlvbl0uZmlsdGVyKGZ1bmN0aW9uIChzKSB7XG4gICAgICAgIHJldHVybiAhIXM7XG4gICAgfSkuam9pbignICcpXS5jb25jYXQoYXJncy5zbGljZShpZHgpKTtcbn07XG5cbnZhciB0cmFuc2Zvcm1PYnNvbGV0ZUNvbG9yU3RvcHMgPSBmdW5jdGlvbiB0cmFuc2Zvcm1PYnNvbGV0ZUNvbG9yU3RvcHMoYXJncykge1xuICAgIHJldHVybiBhcmdzLm1hcChmdW5jdGlvbiAoY29sb3IpIHtcbiAgICAgICAgcmV0dXJuIGNvbG9yLm1hdGNoKEZST01fVE9fQ09MT1JTVE9QKTtcbiAgICB9KVxuICAgIC8vICRGbG93Rml4TWVcbiAgICAubWFwKGZ1bmN0aW9uICh2LCBpbmRleCkge1xuICAgICAgICBpZiAoIXYpIHtcbiAgICAgICAgICAgIHJldHVybiBhcmdzW2luZGV4XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAodlsxXSkge1xuICAgICAgICAgICAgY2FzZSAnZnJvbSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZbNF0gKyAnIDAlJztcbiAgICAgICAgICAgIGNhc2UgJ3RvJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdls0XSArICcgMTAwJSc7XG4gICAgICAgICAgICBjYXNlICdjb2xvci1zdG9wJzpcbiAgICAgICAgICAgICAgICBpZiAodlszXSA9PT0gJyUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2WzRdICsgJyAnICsgdlsyXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZbNF0gKyAnICcgKyBwYXJzZUZsb2F0KHZbMl0pICogMTAwICsgJyUnO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG4vKioqLyB9KSxcbi8qIDUzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbnZhciBBTkdMRSA9IC8oWystXT9cXGQqXFwuP1xcZCspKGRlZ3xncmFkfHJhZHx0dXJuKS9pO1xuXG52YXIgcGFyc2VBbmdsZSA9IGV4cG9ydHMucGFyc2VBbmdsZSA9IGZ1bmN0aW9uIHBhcnNlQW5nbGUoYW5nbGUpIHtcbiAgICB2YXIgbWF0Y2ggPSBhbmdsZS5tYXRjaChBTkdMRSk7XG5cbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gcGFyc2VGbG9hdChtYXRjaFsxXSk7XG4gICAgICAgIHN3aXRjaCAobWF0Y2hbMl0udG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgY2FzZSAnZGVnJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5QSSAqIHZhbHVlIC8gMTgwO1xuICAgICAgICAgICAgY2FzZSAnZ3JhZCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGguUEkgLyAyMDAgKiB2YWx1ZTtcbiAgICAgICAgICAgIGNhc2UgJ3JhZCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgY2FzZSAndHVybic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGguUEkgKiAyICogdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbn07XG5cbi8qKiovIH0pLFxuLyogNTQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jbG9uZVdpbmRvdyA9IGV4cG9ydHMuRG9jdW1lbnRDbG9uZXIgPSB1bmRlZmluZWQ7XG5cbnZhciBfc2xpY2VkVG9BcnJheSA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0pIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfSByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IHJldHVybiBhcnI7IH0gZWxzZSBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSB7IHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7IH0gZWxzZSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9IH07IH0oKTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9Cb3VuZHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG52YXIgX1Byb3h5ID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNik7XG5cbnZhciBfUmVzb3VyY2VMb2FkZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDU1KTtcblxudmFyIF9SZXNvdXJjZUxvYWRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9SZXNvdXJjZUxvYWRlcik7XG5cbnZhciBfVXRpbCA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG5cbnZhciBfYmFja2dyb3VuZCA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cbnZhciBfQ2FudmFzUmVuZGVyZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1KTtcblxudmFyIF9DYW52YXNSZW5kZXJlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9DYW52YXNSZW5kZXJlcik7XG5cbnZhciBfUHNldWRvTm9kZUNvbnRlbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDU2KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIElHTk9SRV9BVFRSSUJVVEUgPSAnZGF0YS1odG1sMmNhbnZhcy1pZ25vcmUnO1xuXG52YXIgRG9jdW1lbnRDbG9uZXIgPSBleHBvcnRzLkRvY3VtZW50Q2xvbmVyID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERvY3VtZW50Q2xvbmVyKGVsZW1lbnQsIG9wdGlvbnMsIGxvZ2dlciwgY29weUlubGluZSwgcmVuZGVyZXIpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERvY3VtZW50Q2xvbmVyKTtcblxuICAgICAgICB0aGlzLnJlZmVyZW5jZUVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLnNjcm9sbGVkRWxlbWVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5jb3B5U3R5bGVzID0gY29weUlubGluZTtcbiAgICAgICAgdGhpcy5pbmxpbmVJbWFnZXMgPSBjb3B5SW5saW5lO1xuICAgICAgICB0aGlzLmxvZ2dlciA9IGxvZ2dlcjtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgICAgICB0aGlzLnJlc291cmNlTG9hZGVyID0gbmV3IF9SZXNvdXJjZUxvYWRlcjIuZGVmYXVsdChvcHRpb25zLCBsb2dnZXIsIHdpbmRvdyk7XG4gICAgICAgIHRoaXMucHNldWRvQ29udGVudERhdGEgPSB7XG4gICAgICAgICAgICBjb3VudGVyczoge30sXG4gICAgICAgICAgICBxdW90ZURlcHRoOiAwXG4gICAgICAgIH07XG4gICAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgICAgdGhpcy5kb2N1bWVudEVsZW1lbnQgPSB0aGlzLmNsb25lTm9kZShlbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoRG9jdW1lbnRDbG9uZXIsIFt7XG4gICAgICAgIGtleTogJ2lubGluZUFsbEltYWdlcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbmxpbmVBbGxJbWFnZXMobm9kZSkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgaWYgKHRoaXMuaW5saW5lSW1hZ2VzICYmIG5vZGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3R5bGUgPSBub2RlLnN0eWxlO1xuICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKCgwLCBfYmFja2dyb3VuZC5wYXJzZUJhY2tncm91bmRJbWFnZSkoc3R5bGUuYmFja2dyb3VuZEltYWdlKS5tYXAoZnVuY3Rpb24gKGJhY2tncm91bmRJbWFnZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYmFja2dyb3VuZEltYWdlLm1ldGhvZCA9PT0gJ3VybCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5yZXNvdXJjZUxvYWRlci5pbmxpbmVJbWFnZShiYWNrZ3JvdW5kSW1hZ2UuYXJnc1swXSkudGhlbihmdW5jdGlvbiAoaW1nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGltZyAmJiB0eXBlb2YgaW1nLnNyYyA9PT0gJ3N0cmluZycgPyAndXJsKFwiJyArIGltZy5zcmMgKyAnXCIpJyA6ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMubG9nZ2VyLmxvZygnVW5hYmxlIHRvIGxvYWQgaW1hZ2UnLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCcnICsgYmFja2dyb3VuZEltYWdlLnByZWZpeCArIGJhY2tncm91bmRJbWFnZS5tZXRob2QgKyAnKCcgKyBiYWNrZ3JvdW5kSW1hZ2UuYXJncy5qb2luKCcsJykgKyAnKScpO1xuICAgICAgICAgICAgICAgIH0pKS50aGVuKGZ1bmN0aW9uIChiYWNrZ3JvdW5kSW1hZ2VzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChiYWNrZ3JvdW5kSW1hZ2VzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE8gTXVsdGlwbGUgYmFja2dyb3VuZHMgc29tZWhvdyBicm9rZW4gaW4gQ2hyb21lXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBiYWNrZ3JvdW5kSW1hZ2VzLmpvaW4oJywnKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc291cmNlTG9hZGVyLmlubGluZUltYWdlKG5vZGUuc3JjKS50aGVuKGZ1bmN0aW9uIChpbWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWcgJiYgbm9kZSBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQgJiYgbm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmVudE5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNsb25lZENoaWxkID0gKDAsIF9VdGlsLmNvcHlDU1NTdHlsZXMpKG5vZGUuc3R5bGUsIGltZy5jbG9uZU5vZGUoZmFsc2UpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnROb2RlLnJlcGxhY2VDaGlsZChjbG9uZWRDaGlsZCwgbm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmxvZ2dlci5sb2coJ1VuYWJsZSB0byBsb2FkIGltYWdlJywgZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaW5saW5lRm9udHMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaW5saW5lRm9udHMoZG9jdW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoQXJyYXkuZnJvbShkb2N1bWVudC5zdHlsZVNoZWV0cykubWFwKGZ1bmN0aW9uIChzaGVldCkge1xuICAgICAgICAgICAgICAgIGlmIChzaGVldC5ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmZXRjaChzaGVldC5ocmVmKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMudGV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlU3R5bGVTaGVldEZvbnRzRnJvbVRleHQodGV4dCwgc2hlZXQuaHJlZik7XG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMi5sb2dnZXIubG9nKCdVbmFibGUgdG8gbG9hZCBzdHlsZXNoZWV0JywgZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0U2hlZXRGb250cyhzaGVldCwgZG9jdW1lbnQpO1xuICAgICAgICAgICAgfSkpLnRoZW4oZnVuY3Rpb24gKGZvbnRzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBmb250KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhY2MuY29uY2F0KGZvbnQpO1xuICAgICAgICAgICAgICAgIH0sIFtdKTtcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGZvbnRzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKGZvbnRzLm1hcChmdW5jdGlvbiAoZm9udCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmV0Y2goZm9udC5mb3JtYXRzWzBdLnNyYykudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5ibG9iKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGJsb2IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSByZWplY3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gcmVhZGVyLnJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YVVyaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC5mb250RmFjZS5zZXRQcm9wZXJ0eSgnc3JjJywgJ3VybChcIicgKyBkYXRhVXJpICsgJ1wiKScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdAZm9udC1mYWNlIHsnICsgZm9udC5mb250RmFjZS5jc3NUZXh0ICsgJyAnO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChmb250Q3NzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICAgICAgICBzdHlsZS50ZXh0Q29udGVudCA9IGZvbnRDc3Muam9pbignXFxuJyk7XG4gICAgICAgICAgICAgICAgX3RoaXMyLmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY3JlYXRlRWxlbWVudENsb25lJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRDbG9uZShub2RlKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgICAgaWYgKHRoaXMuY29weVN0eWxlcyAmJiBub2RlIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW1nID0gbm9kZS5vd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zcmMgPSBub2RlLnRvRGF0YVVSTCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW1nO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZygnVW5hYmxlIHRvIGNsb25lIGNhbnZhcyBjb250ZW50cywgY2FudmFzIGlzIHRhaW50ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHZhciB0ZW1wSWZyYW1lID0gbm9kZS5jbG9uZU5vZGUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHZhciBpZnJhbWVLZXkgPSBnZW5lcmF0ZUlmcmFtZUtleSgpO1xuICAgICAgICAgICAgICAgIHRlbXBJZnJhbWUuc2V0QXR0cmlidXRlKCdkYXRhLWh0bWwyY2FudmFzLWludGVybmFsLWlmcmFtZS1rZXknLCBpZnJhbWVLZXkpO1xuXG4gICAgICAgICAgICAgICAgdmFyIF9wYXJzZUJvdW5kcyA9ICgwLCBfQm91bmRzLnBhcnNlQm91bmRzKShub2RlLCAwLCAwKSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGggPSBfcGFyc2VCb3VuZHMud2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IF9wYXJzZUJvdW5kcy5oZWlnaHQ7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJlc291cmNlTG9hZGVyLmNhY2hlW2lmcmFtZUtleV0gPSBnZXRJZnJhbWVEb2N1bWVudEVsZW1lbnQobm9kZSwgdGhpcy5vcHRpb25zKS50aGVuKGZ1bmN0aW9uIChkb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5yZW5kZXJlcihkb2N1bWVudEVsZW1lbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jOiBfdGhpczMub3B0aW9ucy5hc3luYyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93VGFpbnQ6IF90aGlzMy5vcHRpb25zLmFsbG93VGFpbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbnZhczogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlVGltZW91dDogX3RoaXMzLm9wdGlvbnMuaW1hZ2VUaW1lb3V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2luZzogX3RoaXMzLm9wdGlvbnMubG9nZ2luZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5OiBfdGhpczMub3B0aW9ucy5wcm94eSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUNvbnRhaW5lcjogX3RoaXMzLm9wdGlvbnMucmVtb3ZlQ29udGFpbmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IF90aGlzMy5vcHRpb25zLnNjYWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yZWlnbk9iamVjdFJlbmRlcmluZzogX3RoaXMzLm9wdGlvbnMuZm9yZWlnbk9iamVjdFJlbmRlcmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZUNPUlM6IF90aGlzMy5vcHRpb25zLnVzZUNPUlMsXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IG5ldyBfQ2FudmFzUmVuZGVyZXIyLmRlZmF1bHQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dXaWR0aDogZG9jdW1lbnRFbGVtZW50Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuaW5uZXJXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd0hlaWdodDogZG9jdW1lbnRFbGVtZW50Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuaW5uZXJIZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxYOiBkb2N1bWVudEVsZW1lbnQub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFk6IGRvY3VtZW50RWxlbWVudC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgIH0sIF90aGlzMy5sb2dnZXIuY2hpbGQoaWZyYW1lS2V5KSk7XG4gICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoY2FudmFzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWZyYW1lQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZnJhbWVDYW52YXMub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGNhbnZhcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWZyYW1lQ2FudmFzLm9uZXJyb3IgPSByZWplY3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZnJhbWVDYW52YXMuc3JjID0gY2FudmFzLnRvRGF0YVVSTCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRlbXBJZnJhbWUucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBJZnJhbWUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoKDAsIF9VdGlsLmNvcHlDU1NTdHlsZXMpKG5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpLCBpZnJhbWVDYW52YXMpLCB0ZW1wSWZyYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRlbXBJZnJhbWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTFN0eWxlRWxlbWVudCAmJiBub2RlLnNoZWV0ICYmIG5vZGUuc2hlZXQuY3NzUnVsZXMpIHtcbiAgICAgICAgICAgICAgICB2YXIgY3NzID0gW10uc2xpY2UuY2FsbChub2RlLnNoZWV0LmNzc1J1bGVzLCAwKS5yZWR1Y2UoZnVuY3Rpb24gKGNzcywgcnVsZSkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJ1bGUgJiYgcnVsZS5jc3NUZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNzcyArIHJ1bGUuY3NzVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjc3M7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMzLmxvZ2dlci5sb2coJ1VuYWJsZSB0byBhY2Nlc3MgY3NzVGV4dCBwcm9wZXJ0eScsIHJ1bGUubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3NzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgJycpO1xuICAgICAgICAgICAgICAgIHZhciBzdHlsZSA9IG5vZGUuY2xvbmVOb2RlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBzdHlsZS50ZXh0Q29udGVudCA9IGNzcztcbiAgICAgICAgICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBub2RlLmNsb25lTm9kZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2Nsb25lTm9kZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9uZU5vZGUobm9kZSkge1xuICAgICAgICAgICAgdmFyIGNsb25lID0gbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUgPyBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShub2RlLm5vZGVWYWx1ZSkgOiB0aGlzLmNyZWF0ZUVsZW1lbnRDbG9uZShub2RlKTtcblxuICAgICAgICAgICAgdmFyIHdpbmRvdyA9IG5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcbiAgICAgICAgICAgIHZhciBzdHlsZSA9IG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQgPyB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKSA6IG51bGw7XG4gICAgICAgICAgICB2YXIgc3R5bGVCZWZvcmUgPSBub2RlIGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50ID8gd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSwgJzpiZWZvcmUnKSA6IG51bGw7XG4gICAgICAgICAgICB2YXIgc3R5bGVBZnRlciA9IG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQgPyB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCAnOmFmdGVyJykgOiBudWxsO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5yZWZlcmVuY2VFbGVtZW50ID09PSBub2RlICYmIGNsb25lIGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9uZWRSZWZlcmVuY2VFbGVtZW50ID0gY2xvbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjbG9uZSBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MQm9keUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBjcmVhdGVQc2V1ZG9IaWRlU3R5bGVzKGNsb25lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGNvdW50ZXJzID0gKDAsIF9Qc2V1ZG9Ob2RlQ29udGVudC5wYXJzZUNvdW50ZXJSZXNldCkoc3R5bGUsIHRoaXMucHNldWRvQ29udGVudERhdGEpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnRCZWZvcmUgPSAoMCwgX1BzZXVkb05vZGVDb250ZW50LnJlc29sdmVQc2V1ZG9Db250ZW50KShub2RlLCBzdHlsZUJlZm9yZSwgdGhpcy5wc2V1ZG9Db250ZW50RGF0YSk7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGNoaWxkID0gbm9kZS5maXJzdENoaWxkOyBjaGlsZDsgY2hpbGQgPSBjaGlsZC5uZXh0U2libGluZykge1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZC5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUgfHwgY2hpbGQubm9kZU5hbWUgIT09ICdTQ1JJUFQnICYmXG4gICAgICAgICAgICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgICAgICAgICAgICFjaGlsZC5oYXNBdHRyaWJ1dGUoSUdOT1JFX0FUVFJJQlVURSkgJiYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuaWdub3JlRWxlbWVudHMgIT09ICdmdW5jdGlvbicgfHxcbiAgICAgICAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICAgICAgICAgICAgIXRoaXMub3B0aW9ucy5pZ25vcmVFbGVtZW50cyhjaGlsZCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5jb3B5U3R5bGVzIHx8IGNoaWxkLm5vZGVOYW1lICE9PSAnU1RZTEUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9uZS5hcHBlbmRDaGlsZCh0aGlzLmNsb25lTm9kZShjaGlsZCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgY29udGVudEFmdGVyID0gKDAsIF9Qc2V1ZG9Ob2RlQ29udGVudC5yZXNvbHZlUHNldWRvQ29udGVudCkobm9kZSwgc3R5bGVBZnRlciwgdGhpcy5wc2V1ZG9Db250ZW50RGF0YSk7XG4gICAgICAgICAgICAoMCwgX1BzZXVkb05vZGVDb250ZW50LnBvcENvdW50ZXJzKShjb3VudGVycywgdGhpcy5wc2V1ZG9Db250ZW50RGF0YSk7XG5cbiAgICAgICAgICAgIGlmIChub2RlIGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50ICYmIGNsb25lIGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0eWxlQmVmb3JlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5saW5lQWxsSW1hZ2VzKGlubGluZVBzZXVkb0VsZW1lbnQobm9kZSwgY2xvbmUsIHN0eWxlQmVmb3JlLCBjb250ZW50QmVmb3JlLCBQU0VVRE9fQkVGT1JFKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHlsZUFmdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5saW5lQWxsSW1hZ2VzKGlubGluZVBzZXVkb0VsZW1lbnQobm9kZSwgY2xvbmUsIHN0eWxlQWZ0ZXIsIGNvbnRlbnRBZnRlciwgUFNFVURPX0FGVEVSKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHlsZSAmJiB0aGlzLmNvcHlTdHlsZXMgJiYgIShub2RlIGluc3RhbmNlb2YgSFRNTElGcmFtZUVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICgwLCBfVXRpbC5jb3B5Q1NTU3R5bGVzKShzdHlsZSwgY2xvbmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmlubGluZUFsbEltYWdlcyhjbG9uZSk7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuc2Nyb2xsVG9wICE9PSAwIHx8IG5vZGUuc2Nyb2xsTGVmdCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbGVkRWxlbWVudHMucHVzaChbY2xvbmUsIG5vZGUuc2Nyb2xsTGVmdCwgbm9kZS5zY3JvbGxUb3BdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3dpdGNoIChub2RlLm5vZGVOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0NBTlZBUyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY29weVN0eWxlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb25lQ2FudmFzQ29udGVudHMobm9kZSwgY2xvbmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1RFWFRBUkVBJzpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnU0VMRUNUJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb25lLnZhbHVlID0gbm9kZS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjbG9uZTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBEb2N1bWVudENsb25lcjtcbn0oKTtcblxudmFyIGdldFNoZWV0Rm9udHMgPSBmdW5jdGlvbiBnZXRTaGVldEZvbnRzKHNoZWV0LCBkb2N1bWVudCkge1xuICAgIC8vICRGbG93Rml4TWVcbiAgICByZXR1cm4gKHNoZWV0LmNzc1J1bGVzID8gQXJyYXkuZnJvbShzaGVldC5jc3NSdWxlcykgOiBbXSkuZmlsdGVyKGZ1bmN0aW9uIChydWxlKSB7XG4gICAgICAgIHJldHVybiBydWxlLnR5cGUgPT09IENTU1J1bGUuRk9OVF9GQUNFX1JVTEU7XG4gICAgfSkubWFwKGZ1bmN0aW9uIChydWxlKSB7XG4gICAgICAgIHZhciBzcmMgPSAoMCwgX2JhY2tncm91bmQucGFyc2VCYWNrZ3JvdW5kSW1hZ2UpKHJ1bGUuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnc3JjJykpO1xuICAgICAgICB2YXIgZm9ybWF0cyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNyYy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHNyY1tpXS5tZXRob2QgPT09ICd1cmwnICYmIHNyY1tpICsgMV0gJiYgc3JjW2kgKyAxXS5tZXRob2QgPT09ICdmb3JtYXQnKSB7XG4gICAgICAgICAgICAgICAgdmFyIGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgICAgICAgYS5ocmVmID0gc3JjW2ldLmFyZ3NbMF07XG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgZm9udCA9IHtcbiAgICAgICAgICAgICAgICAgICAgc3JjOiBhLmhyZWYsXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdDogc3JjW2kgKyAxXS5hcmdzWzBdXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBmb3JtYXRzLnB1c2goZm9udCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLy8gVE9ETyBzZWxlY3QgY29ycmVjdCBmb3JtYXQgZm9yIGJyb3dzZXIpLFxuXG4gICAgICAgICAgICBmb3JtYXRzOiBmb3JtYXRzLmZpbHRlcihmdW5jdGlvbiAoZm9udCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoL153b2ZmL2kudGVzdChmb250LmZvcm1hdClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBmb250RmFjZTogcnVsZS5zdHlsZVxuICAgICAgICB9O1xuICAgIH0pLmZpbHRlcihmdW5jdGlvbiAoZm9udCkge1xuICAgICAgICByZXR1cm4gZm9udC5mb3JtYXRzLmxlbmd0aDtcbiAgICB9KTtcbn07XG5cbnZhciBjcmVhdGVTdHlsZVNoZWV0Rm9udHNGcm9tVGV4dCA9IGZ1bmN0aW9uIGNyZWF0ZVN0eWxlU2hlZXRGb250c0Zyb21UZXh0KHRleHQsIGJhc2VIcmVmKSB7XG4gICAgdmFyIGRvYyA9IGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudCgnJyk7XG4gICAgdmFyIGJhc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdiYXNlJyk7XG4gICAgLy8gJEZsb3dGaXhNZVxuICAgIGJhc2UuaHJlZiA9IGJhc2VIcmVmO1xuICAgIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cbiAgICBzdHlsZS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgaWYgKGRvYy5oZWFkKSB7XG4gICAgICAgIGRvYy5oZWFkLmFwcGVuZENoaWxkKGJhc2UpO1xuICAgIH1cbiAgICBpZiAoZG9jLmJvZHkpIHtcbiAgICAgICAgZG9jLmJvZHkuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIH1cblxuICAgIHJldHVybiBzdHlsZS5zaGVldCA/IGdldFNoZWV0Rm9udHMoc3R5bGUuc2hlZXQsIGRvYykgOiBbXTtcbn07XG5cbnZhciByZXN0b3JlT3duZXJTY3JvbGwgPSBmdW5jdGlvbiByZXN0b3JlT3duZXJTY3JvbGwob3duZXJEb2N1bWVudCwgeCwgeSkge1xuICAgIGlmIChvd25lckRvY3VtZW50LmRlZmF1bHRWaWV3ICYmICh4ICE9PSBvd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LnBhZ2VYT2Zmc2V0IHx8IHkgIT09IG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcucGFnZVlPZmZzZXQpKSB7XG4gICAgICAgIG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuc2Nyb2xsVG8oeCwgeSk7XG4gICAgfVxufTtcblxudmFyIGNsb25lQ2FudmFzQ29udGVudHMgPSBmdW5jdGlvbiBjbG9uZUNhbnZhc0NvbnRlbnRzKGNhbnZhcywgY2xvbmVkQ2FudmFzKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKGNsb25lZENhbnZhcykge1xuICAgICAgICAgICAgY2xvbmVkQ2FudmFzLndpZHRoID0gY2FudmFzLndpZHRoO1xuICAgICAgICAgICAgY2xvbmVkQ2FudmFzLmhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG4gICAgICAgICAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICB2YXIgY2xvbmVkQ3R4ID0gY2xvbmVkQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICBpZiAoY3R4KSB7XG4gICAgICAgICAgICAgICAgY2xvbmVkQ3R4LnB1dEltYWdlRGF0YShjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCksIDAsIDApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjbG9uZWRDdHguZHJhd0ltYWdlKGNhbnZhcywgMCwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7fVxufTtcblxudmFyIGlubGluZVBzZXVkb0VsZW1lbnQgPSBmdW5jdGlvbiBpbmxpbmVQc2V1ZG9FbGVtZW50KG5vZGUsIGNsb25lLCBzdHlsZSwgY29udGVudEl0ZW1zLCBwc2V1ZG9FbHQpIHtcbiAgICBpZiAoIXN0eWxlIHx8ICFzdHlsZS5jb250ZW50IHx8IHN0eWxlLmNvbnRlbnQgPT09ICdub25lJyB8fCBzdHlsZS5jb250ZW50ID09PSAnLW1vei1hbHQtY29udGVudCcgfHwgc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgYW5vbnltb3VzUmVwbGFjZWRFbGVtZW50ID0gY2xvbmUub3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KCdodG1sMmNhbnZhc3BzZXVkb2VsZW1lbnQnKTtcbiAgICAoMCwgX1V0aWwuY29weUNTU1N0eWxlcykoc3R5bGUsIGFub255bW91c1JlcGxhY2VkRWxlbWVudCk7XG5cbiAgICBpZiAoY29udGVudEl0ZW1zKSB7XG4gICAgICAgIHZhciBsZW4gPSBjb250ZW50SXRlbXMubGVuZ3RoO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IGNvbnRlbnRJdGVtc1tpXTtcbiAgICAgICAgICAgIHN3aXRjaCAoaXRlbS50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBfUHNldWRvTm9kZUNvbnRlbnQuUFNFVURPX0NPTlRFTlRfSVRFTV9UWVBFLklNQUdFOlxuICAgICAgICAgICAgICAgICAgICB2YXIgaW1nID0gY2xvbmUub3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgICAgICAgICAgaW1nLnNyYyA9ICgwLCBfYmFja2dyb3VuZC5wYXJzZUJhY2tncm91bmRJbWFnZSkoJ3VybCgnICsgaXRlbS52YWx1ZSArICcpJylbMF0uYXJnc1swXTtcbiAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgICAgICAgICAgICAgIGFub255bW91c1JlcGxhY2VkRWxlbWVudC5hcHBlbmRDaGlsZChpbWcpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIF9Qc2V1ZG9Ob2RlQ29udGVudC5QU0VVRE9fQ09OVEVOVF9JVEVNX1RZUEUuVEVYVDpcbiAgICAgICAgICAgICAgICAgICAgYW5vbnltb3VzUmVwbGFjZWRFbGVtZW50LmFwcGVuZENoaWxkKGNsb25lLm93bmVyRG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoaXRlbS52YWx1ZSkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFub255bW91c1JlcGxhY2VkRWxlbWVudC5jbGFzc05hbWUgPSBQU0VVRE9fSElERV9FTEVNRU5UX0NMQVNTX0JFRk9SRSArICcgJyArIFBTRVVET19ISURFX0VMRU1FTlRfQ0xBU1NfQUZURVI7XG4gICAgY2xvbmUuY2xhc3NOYW1lICs9IHBzZXVkb0VsdCA9PT0gUFNFVURPX0JFRk9SRSA/ICcgJyArIFBTRVVET19ISURFX0VMRU1FTlRfQ0xBU1NfQkVGT1JFIDogJyAnICsgUFNFVURPX0hJREVfRUxFTUVOVF9DTEFTU19BRlRFUjtcbiAgICBpZiAocHNldWRvRWx0ID09PSBQU0VVRE9fQkVGT1JFKSB7XG4gICAgICAgIGNsb25lLmluc2VydEJlZm9yZShhbm9ueW1vdXNSZXBsYWNlZEVsZW1lbnQsIGNsb25lLmZpcnN0Q2hpbGQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNsb25lLmFwcGVuZENoaWxkKGFub255bW91c1JlcGxhY2VkRWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFub255bW91c1JlcGxhY2VkRWxlbWVudDtcbn07XG5cbnZhciBVUkxfUkVHRVhQID0gL151cmxcXCgoLispXFwpJC9pO1xudmFyIFBTRVVET19CRUZPUkUgPSAnOmJlZm9yZSc7XG52YXIgUFNFVURPX0FGVEVSID0gJzphZnRlcic7XG52YXIgUFNFVURPX0hJREVfRUxFTUVOVF9DTEFTU19CRUZPUkUgPSAnX19faHRtbDJjYW52YXNfX19wc2V1ZG9lbGVtZW50X2JlZm9yZSc7XG52YXIgUFNFVURPX0hJREVfRUxFTUVOVF9DTEFTU19BRlRFUiA9ICdfX19odG1sMmNhbnZhc19fX3BzZXVkb2VsZW1lbnRfYWZ0ZXInO1xuXG52YXIgUFNFVURPX0hJREVfRUxFTUVOVF9TVFlMRSA9ICd7XFxuICAgIGNvbnRlbnQ6IFwiXCIgIWltcG9ydGFudDtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn0nO1xuXG52YXIgY3JlYXRlUHNldWRvSGlkZVN0eWxlcyA9IGZ1bmN0aW9uIGNyZWF0ZVBzZXVkb0hpZGVTdHlsZXMoYm9keSkge1xuICAgIGNyZWF0ZVN0eWxlcyhib2R5LCAnLicgKyBQU0VVRE9fSElERV9FTEVNRU5UX0NMQVNTX0JFRk9SRSArIFBTRVVET19CRUZPUkUgKyBQU0VVRE9fSElERV9FTEVNRU5UX1NUWUxFICsgJ1xcbiAgICAgICAgIC4nICsgUFNFVURPX0hJREVfRUxFTUVOVF9DTEFTU19BRlRFUiArIFBTRVVET19BRlRFUiArIFBTRVVET19ISURFX0VMRU1FTlRfU1RZTEUpO1xufTtcblxudmFyIGNyZWF0ZVN0eWxlcyA9IGZ1bmN0aW9uIGNyZWF0ZVN0eWxlcyhib2R5LCBzdHlsZXMpIHtcbiAgICB2YXIgc3R5bGUgPSBib2R5Lm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBzdHlsZS5pbm5lckhUTUwgPSBzdHlsZXM7XG4gICAgYm9keS5hcHBlbmRDaGlsZChzdHlsZSk7XG59O1xuXG52YXIgaW5pdE5vZGUgPSBmdW5jdGlvbiBpbml0Tm9kZShfcmVmKSB7XG4gICAgdmFyIF9yZWYyID0gX3NsaWNlZFRvQXJyYXkoX3JlZiwgMyksXG4gICAgICAgIGVsZW1lbnQgPSBfcmVmMlswXSxcbiAgICAgICAgeCA9IF9yZWYyWzFdLFxuICAgICAgICB5ID0gX3JlZjJbMl07XG5cbiAgICBlbGVtZW50LnNjcm9sbExlZnQgPSB4O1xuICAgIGVsZW1lbnQuc2Nyb2xsVG9wID0geTtcbn07XG5cbnZhciBnZW5lcmF0ZUlmcmFtZUtleSA9IGZ1bmN0aW9uIGdlbmVyYXRlSWZyYW1lS2V5KCkge1xuICAgIHJldHVybiBNYXRoLmNlaWwoRGF0ZS5ub3coKSArIE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMCkudG9TdHJpbmcoMTYpO1xufTtcblxudmFyIERBVEFfVVJJX1JFR0VYUCA9IC9eZGF0YTp0ZXh0XFwvKC4rKTsoYmFzZTY0KT8sKC4qKSQvaTtcblxudmFyIGdldElmcmFtZURvY3VtZW50RWxlbWVudCA9IGZ1bmN0aW9uIGdldElmcmFtZURvY3VtZW50RWxlbWVudChub2RlLCBvcHRpb25zKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShub2RlLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBvcHRpb25zLnByb3h5ID8gKDAsIF9Qcm94eS5Qcm94eSkobm9kZS5zcmMsIG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKGh0bWwpIHtcbiAgICAgICAgICAgIHZhciBtYXRjaCA9IGh0bWwubWF0Y2goREFUQV9VUklfUkVHRVhQKTtcbiAgICAgICAgICAgIGlmICghbWF0Y2gpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG1hdGNoWzJdID09PSAnYmFzZTY0JyA/IHdpbmRvdy5hdG9iKGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkpIDogZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzNdKTtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoaHRtbCkge1xuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUlmcmFtZUNvbnRhaW5lcihub2RlLm93bmVyRG9jdW1lbnQsICgwLCBfQm91bmRzLnBhcnNlQm91bmRzKShub2RlLCAwLCAwKSkudGhlbihmdW5jdGlvbiAoY2xvbmVJZnJhbWVDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2xvbmVXaW5kb3cgPSBjbG9uZUlmcmFtZUNvbnRhaW5lci5jb250ZW50V2luZG93O1xuICAgICAgICAgICAgICAgIHZhciBkb2N1bWVudENsb25lID0gY2xvbmVXaW5kb3cuZG9jdW1lbnQ7XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudENsb25lLm9wZW4oKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudENsb25lLndyaXRlKGh0bWwpO1xuICAgICAgICAgICAgICAgIHZhciBpZnJhbWVMb2FkID0gaWZyYW1lTG9hZGVyKGNsb25lSWZyYW1lQ29udGFpbmVyKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50Q2xvbmUuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnRDbG9uZS5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBpZnJhbWVMb2FkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pIDogUHJvbWlzZS5yZWplY3QoKTtcbiAgICB9XG59O1xuXG52YXIgY3JlYXRlSWZyYW1lQ29udGFpbmVyID0gZnVuY3Rpb24gY3JlYXRlSWZyYW1lQ29udGFpbmVyKG93bmVyRG9jdW1lbnQsIGJvdW5kcykge1xuICAgIHZhciBjbG9uZUlmcmFtZUNvbnRhaW5lciA9IG93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG5cbiAgICBjbG9uZUlmcmFtZUNvbnRhaW5lci5jbGFzc05hbWUgPSAnaHRtbDJjYW52YXMtY29udGFpbmVyJztcbiAgICBjbG9uZUlmcmFtZUNvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgY2xvbmVJZnJhbWVDb250YWluZXIuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgIGNsb25lSWZyYW1lQ29udGFpbmVyLnN0eWxlLmxlZnQgPSAnLTEwMDAwcHgnO1xuICAgIGNsb25lSWZyYW1lQ29udGFpbmVyLnN0eWxlLnRvcCA9ICcwcHgnO1xuICAgIGNsb25lSWZyYW1lQ29udGFpbmVyLnN0eWxlLmJvcmRlciA9ICcwJztcbiAgICBjbG9uZUlmcmFtZUNvbnRhaW5lci53aWR0aCA9IGJvdW5kcy53aWR0aC50b1N0cmluZygpO1xuICAgIGNsb25lSWZyYW1lQ29udGFpbmVyLmhlaWdodCA9IGJvdW5kcy5oZWlnaHQudG9TdHJpbmcoKTtcbiAgICBjbG9uZUlmcmFtZUNvbnRhaW5lci5zY3JvbGxpbmcgPSAnbm8nOyAvLyBpb3Mgd29uJ3Qgc2Nyb2xsIHdpdGhvdXQgaXRcbiAgICBjbG9uZUlmcmFtZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoSUdOT1JFX0FUVFJJQlVURSwgJ3RydWUnKTtcbiAgICBpZiAoIW93bmVyRG9jdW1lbnQuYm9keSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoIHRydWUgPyAnQm9keSBlbGVtZW50IG5vdCBmb3VuZCBpbiBEb2N1bWVudCB0aGF0IGlzIGdldHRpbmcgcmVuZGVyZWQnIDogJycpO1xuICAgIH1cblxuICAgIG93bmVyRG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjbG9uZUlmcmFtZUNvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNsb25lSWZyYW1lQ29udGFpbmVyKTtcbn07XG5cbnZhciBpZnJhbWVMb2FkZXIgPSBmdW5jdGlvbiBpZnJhbWVMb2FkZXIoY2xvbmVJZnJhbWVDb250YWluZXIpIHtcbiAgICB2YXIgY2xvbmVXaW5kb3cgPSBjbG9uZUlmcmFtZUNvbnRhaW5lci5jb250ZW50V2luZG93O1xuICAgIHZhciBkb2N1bWVudENsb25lID0gY2xvbmVXaW5kb3cuZG9jdW1lbnQ7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBjbG9uZVdpbmRvdy5vbmxvYWQgPSBjbG9uZUlmcmFtZUNvbnRhaW5lci5vbmxvYWQgPSBkb2N1bWVudENsb25lLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnRDbG9uZS5ib2R5LmNoaWxkTm9kZXMubGVuZ3RoID4gMCAmJiBkb2N1bWVudENsb25lLnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoY2xvbmVJZnJhbWVDb250YWluZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbn07XG5cbnZhciBjbG9uZVdpbmRvdyA9IGV4cG9ydHMuY2xvbmVXaW5kb3cgPSBmdW5jdGlvbiBjbG9uZVdpbmRvdyhvd25lckRvY3VtZW50LCBib3VuZHMsIHJlZmVyZW5jZUVsZW1lbnQsIG9wdGlvbnMsIGxvZ2dlciwgcmVuZGVyZXIpIHtcbiAgICB2YXIgY2xvbmVyID0gbmV3IERvY3VtZW50Q2xvbmVyKHJlZmVyZW5jZUVsZW1lbnQsIG9wdGlvbnMsIGxvZ2dlciwgZmFsc2UsIHJlbmRlcmVyKTtcbiAgICB2YXIgc2Nyb2xsWCA9IG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcucGFnZVhPZmZzZXQ7XG4gICAgdmFyIHNjcm9sbFkgPSBvd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LnBhZ2VZT2Zmc2V0O1xuXG4gICAgcmV0dXJuIGNyZWF0ZUlmcmFtZUNvbnRhaW5lcihvd25lckRvY3VtZW50LCBib3VuZHMpLnRoZW4oZnVuY3Rpb24gKGNsb25lSWZyYW1lQ29udGFpbmVyKSB7XG4gICAgICAgIHZhciBjbG9uZVdpbmRvdyA9IGNsb25lSWZyYW1lQ29udGFpbmVyLmNvbnRlbnRXaW5kb3c7XG4gICAgICAgIHZhciBkb2N1bWVudENsb25lID0gY2xvbmVXaW5kb3cuZG9jdW1lbnQ7XG5cbiAgICAgICAgLyogQ2hyb21lIGRvZXNuJ3QgZGV0ZWN0IHJlbGF0aXZlIGJhY2tncm91bmQtaW1hZ2VzIGFzc2lnbmVkIGluIGlubGluZSA8c3R5bGU+IHNoZWV0cyB3aGVuIGZldGNoZWQgdGhyb3VnaCBnZXRDb21wdXRlZFN0eWxlXG4gICAgICAgICAgICAgaWYgd2luZG93IHVybCBpcyBhYm91dDpibGFuaywgd2UgY2FuIGFzc2lnbiB0aGUgdXJsIHRvIGN1cnJlbnQgYnkgd3JpdGluZyBvbnRvIHRoZSBkb2N1bWVudFxuICAgICAgICAgICAgICovXG5cbiAgICAgICAgdmFyIGlmcmFtZUxvYWQgPSBpZnJhbWVMb2FkZXIoY2xvbmVJZnJhbWVDb250YWluZXIpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2xvbmVyLnNjcm9sbGVkRWxlbWVudHMuZm9yRWFjaChpbml0Tm9kZSk7XG4gICAgICAgICAgICBjbG9uZVdpbmRvdy5zY3JvbGxUbyhib3VuZHMubGVmdCwgYm91bmRzLnRvcCk7XG4gICAgICAgICAgICBpZiAoLyhpUGFkfGlQaG9uZXxpUG9kKS9nLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgKGNsb25lV2luZG93LnNjcm9sbFkgIT09IGJvdW5kcy50b3AgfHwgY2xvbmVXaW5kb3cuc2Nyb2xsWCAhPT0gYm91bmRzLmxlZnQpKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnRDbG9uZS5kb2N1bWVudEVsZW1lbnQuc3R5bGUudG9wID0gLWJvdW5kcy50b3AgKyAncHgnO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50Q2xvbmUuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmxlZnQgPSAtYm91bmRzLmxlZnQgKyAncHgnO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50Q2xvbmUuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IFByb21pc2UucmVzb2x2ZShbY2xvbmVJZnJhbWVDb250YWluZXIsIGNsb25lci5jbG9uZWRSZWZlcmVuY2VFbGVtZW50LCBjbG9uZXIucmVzb3VyY2VMb2FkZXJdKTtcblxuICAgICAgICAgICAgdmFyIG9uY2xvbmUgPSBvcHRpb25zLm9uY2xvbmU7XG5cbiAgICAgICAgICAgIHJldHVybiBjbG9uZXIuY2xvbmVkUmVmZXJlbmNlRWxlbWVudCBpbnN0YW5jZW9mIGNsb25lV2luZG93LkhUTUxFbGVtZW50IHx8IGNsb25lci5jbG9uZWRSZWZlcmVuY2VFbGVtZW50IGluc3RhbmNlb2Ygb3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5IVE1MRWxlbWVudCB8fCBjbG9uZXIuY2xvbmVkUmVmZXJlbmNlRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ID8gdHlwZW9mIG9uY2xvbmUgPT09ICdmdW5jdGlvbicgPyBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb25jbG9uZShkb2N1bWVudENsb25lKTtcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9KSA6IHJlc3VsdCA6IFByb21pc2UucmVqZWN0KCB0cnVlID8gJ0Vycm9yIGZpbmRpbmcgdGhlICcgKyByZWZlcmVuY2VFbGVtZW50Lm5vZGVOYW1lICsgJyBpbiB0aGUgY2xvbmVkIGRvY3VtZW50JyA6ICcnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnRDbG9uZS5vcGVuKCk7XG4gICAgICAgIGRvY3VtZW50Q2xvbmUud3JpdGUoc2VyaWFsaXplRG9jdHlwZShkb2N1bWVudC5kb2N0eXBlKSArICc8aHRtbD48L2h0bWw+Jyk7XG4gICAgICAgIC8vIENocm9tZSBzY3JvbGxzIHRoZSBwYXJlbnQgZG9jdW1lbnQgZm9yIHNvbWUgcmVhc29uIGFmdGVyIHRoZSB3cml0ZSB0byB0aGUgY2xvbmVkIHdpbmRvdz8/P1xuICAgICAgICByZXN0b3JlT3duZXJTY3JvbGwocmVmZXJlbmNlRWxlbWVudC5vd25lckRvY3VtZW50LCBzY3JvbGxYLCBzY3JvbGxZKTtcbiAgICAgICAgZG9jdW1lbnRDbG9uZS5yZXBsYWNlQ2hpbGQoZG9jdW1lbnRDbG9uZS5hZG9wdE5vZGUoY2xvbmVyLmRvY3VtZW50RWxlbWVudCksIGRvY3VtZW50Q2xvbmUuZG9jdW1lbnRFbGVtZW50KTtcbiAgICAgICAgZG9jdW1lbnRDbG9uZS5jbG9zZSgpO1xuXG4gICAgICAgIHJldHVybiBpZnJhbWVMb2FkO1xuICAgIH0pO1xufTtcblxudmFyIHNlcmlhbGl6ZURvY3R5cGUgPSBmdW5jdGlvbiBzZXJpYWxpemVEb2N0eXBlKGRvY3R5cGUpIHtcbiAgICB2YXIgc3RyID0gJyc7XG4gICAgaWYgKGRvY3R5cGUpIHtcbiAgICAgICAgc3RyICs9ICc8IURPQ1RZUEUgJztcbiAgICAgICAgaWYgKGRvY3R5cGUubmFtZSkge1xuICAgICAgICAgICAgc3RyICs9IGRvY3R5cGUubmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkb2N0eXBlLmludGVybmFsU3Vic2V0KSB7XG4gICAgICAgICAgICBzdHIgKz0gZG9jdHlwZS5pbnRlcm5hbFN1YnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkb2N0eXBlLnB1YmxpY0lkKSB7XG4gICAgICAgICAgICBzdHIgKz0gJ1wiJyArIGRvY3R5cGUucHVibGljSWQgKyAnXCInO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRvY3R5cGUuc3lzdGVtSWQpIHtcbiAgICAgICAgICAgIHN0ciArPSAnXCInICsgZG9jdHlwZS5zeXN0ZW1JZCArICdcIic7XG4gICAgICAgIH1cblxuICAgICAgICBzdHIgKz0gJz4nO1xuICAgIH1cblxuICAgIHJldHVybiBzdHI7XG59O1xuXG4vKioqLyB9KSxcbi8qIDU1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuUmVzb3VyY2VTdG9yZSA9IHVuZGVmaW5lZDtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9GZWF0dXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMCk7XG5cbnZhciBfRmVhdHVyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9GZWF0dXJlKTtcblxudmFyIF9Qcm94eSA9IF9fd2VicGFja19yZXF1aXJlX18oMjYpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgUmVzb3VyY2VMb2FkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVzb3VyY2VMb2FkZXIob3B0aW9ucywgbG9nZ2VyLCB3aW5kb3cpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlc291cmNlTG9hZGVyKTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLl93aW5kb3cgPSB3aW5kb3c7XG4gICAgICAgIHRoaXMub3JpZ2luID0gdGhpcy5nZXRPcmlnaW4od2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICB0aGlzLmNhY2hlID0ge307XG4gICAgICAgIHRoaXMubG9nZ2VyID0gbG9nZ2VyO1xuICAgICAgICB0aGlzLl9pbmRleCA9IDA7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFJlc291cmNlTG9hZGVyLCBbe1xuICAgICAgICBrZXk6ICdsb2FkSW1hZ2UnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbG9hZEltYWdlKHNyYykge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgaWYgKHRoaXMuaGFzUmVzb3VyY2VJbkNhY2hlKHNyYykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3JjO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzQmxvYkltYWdlKHNyYykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlW3NyY10gPSBfbG9hZEltYWdlKHNyYywgdGhpcy5vcHRpb25zLmltYWdlVGltZW91dCB8fCAwKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3JjO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWlzU1ZHKHNyYykgfHwgX0ZlYXR1cmUyLmRlZmF1bHQuU1VQUE9SVF9TVkdfRFJBV0lORykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYWxsb3dUYWludCA9PT0gdHJ1ZSB8fCBpc0lubGluZUltYWdlKHNyYykgfHwgdGhpcy5pc1NhbWVPcmlnaW4oc3JjKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hZGRJbWFnZShzcmMsIHNyYywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuaXNTYW1lT3JpZ2luKHNyYykpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMucHJveHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlW3NyY10gPSAoMCwgX1Byb3h5LlByb3h5KShzcmMsIHRoaXMub3B0aW9ucykudGhlbihmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9sb2FkSW1hZ2Uoc3JjLCBfdGhpcy5vcHRpb25zLmltYWdlVGltZW91dCB8fCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNyYztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMudXNlQ09SUyA9PT0gdHJ1ZSAmJiBfRmVhdHVyZTIuZGVmYXVsdC5TVVBQT1JUX0NPUlNfSU1BR0VTKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hZGRJbWFnZShzcmMsIHNyYywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2lubGluZUltYWdlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlubGluZUltYWdlKHNyYykge1xuICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmIChpc0lubGluZUltYWdlKHNyYykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2xvYWRJbWFnZShzcmMsIHRoaXMub3B0aW9ucy5pbWFnZVRpbWVvdXQgfHwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5oYXNSZXNvdXJjZUluQ2FjaGUoc3JjKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNhY2hlW3NyY107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNTYW1lT3JpZ2luKHNyYykgJiYgdHlwZW9mIHRoaXMub3B0aW9ucy5wcm94eSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jYWNoZVtzcmNdID0gKDAsIF9Qcm94eS5Qcm94eSkoc3JjLCB0aGlzLm9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKHNyYykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2xvYWRJbWFnZShzcmMsIF90aGlzMi5vcHRpb25zLmltYWdlVGltZW91dCB8fCAwKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMueGhySW1hZ2Uoc3JjKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAneGhySW1hZ2UnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24geGhySW1hZ2Uoc3JjKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgICAgdGhpcy5jYWNoZVtzcmNdID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoJ0ZhaWxlZCB0byBmZXRjaCBpbWFnZSAnICsgc3JjLnN1YnN0cmluZygwLCAyNTYpICsgJyB3aXRoIHN0YXR1cyBjb2RlICcgKyB4aHIuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHJlYWRlci5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoeGhyLnJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdibG9iJztcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMzLm9wdGlvbnMuaW1hZ2VUaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0aW1lb3V0ID0gX3RoaXMzLm9wdGlvbnMuaW1hZ2VUaW1lb3V0O1xuICAgICAgICAgICAgICAgICAgICB4aHIudGltZW91dCA9IHRpbWVvdXQ7XG4gICAgICAgICAgICAgICAgICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KCB0cnVlID8gJ1RpbWVkIG91dCAoJyArIHRpbWVvdXQgKyAnbXMpIGZldGNoaW5nICcgKyBzcmMuc3Vic3RyaW5nKDAsIDI1NikgOiAnJyk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHhoci5vcGVuKCdHRVQnLCBzcmMsIHRydWUpO1xuICAgICAgICAgICAgICAgIHhoci5zZW5kKCk7XG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2xvYWRJbWFnZShzcmMsIF90aGlzMy5vcHRpb25zLmltYWdlVGltZW91dCB8fCAwKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYWNoZVtzcmNdO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdsb2FkQ2FudmFzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWRDYW52YXMobm9kZSkge1xuICAgICAgICAgICAgdmFyIGtleSA9IFN0cmluZyh0aGlzLl9pbmRleCsrKTtcbiAgICAgICAgICAgIHRoaXMuY2FjaGVba2V5XSA9IFByb21pc2UucmVzb2x2ZShub2RlKTtcbiAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhc1Jlc291cmNlSW5DYWNoZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYXNSZXNvdXJjZUluQ2FjaGUoa2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIHRoaXMuY2FjaGVba2V5XSAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2FkZEltYWdlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEltYWdlKGtleSwgc3JjLCB1c2VDT1JTKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgICAgICAgaWYgKHRydWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coJ0FkZGVkIGltYWdlICcgKyBrZXkuc3Vic3RyaW5nKDAsIDI1NikpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgaW1hZ2VMb2FkSGFuZGxlciA9IGZ1bmN0aW9uIGltYWdlTG9hZEhhbmRsZXIoc3VwcG9ydHNEYXRhSW1hZ2VzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgICAgICAgICBpbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoaW1nKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgLy9pb3Mgc2FmYXJpIDEwLjMgdGFpbnRzIGNhbnZhcyB3aXRoIGRhdGEgdXJscyB1bmxlc3MgY3Jvc3NPcmlnaW4gaXMgc2V0IHRvIGFub255bW91c1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXN1cHBvcnRzRGF0YUltYWdlcyB8fCB1c2VDT1JTKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcuY3Jvc3NPcmlnaW4gPSAnYW5vbnltb3VzJztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGltZy5vbmVycm9yID0gcmVqZWN0O1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3JjID0gc3JjO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW1nLmNvbXBsZXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJbmxpbmUgWE1MIGltYWdlcyBtYXkgZmFpbCB0byBwYXJzZSwgdGhyb3dpbmcgYW4gRXJyb3IgbGF0ZXIgb25cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoaW1nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzNC5vcHRpb25zLmltYWdlVGltZW91dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRpbWVvdXQgPSBfdGhpczQub3B0aW9ucy5pbWFnZVRpbWVvdXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KCB0cnVlID8gJ1RpbWVkIG91dCAoJyArIHRpbWVvdXQgKyAnbXMpIGZldGNoaW5nICcgKyBzcmMuc3Vic3RyaW5nKDAsIDI1NikgOiAnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5jYWNoZVtrZXldID0gaXNJbmxpbmVCYXNlNjRJbWFnZShzcmMpICYmICFpc1NWRyhzcmMpID8gLy8gJEZsb3dGaXhNZVxuICAgICAgICAgICAgX0ZlYXR1cmUyLmRlZmF1bHQuU1VQUE9SVF9CQVNFNjRfRFJBV0lORyhzcmMpLnRoZW4oaW1hZ2VMb2FkSGFuZGxlcikgOiBpbWFnZUxvYWRIYW5kbGVyKHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaXNTYW1lT3JpZ2luJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzU2FtZU9yaWdpbih1cmwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldE9yaWdpbih1cmwpID09PSB0aGlzLm9yaWdpbjtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0T3JpZ2luJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldE9yaWdpbih1cmwpIHtcbiAgICAgICAgICAgIHZhciBsaW5rID0gdGhpcy5fbGluayB8fCAodGhpcy5fbGluayA9IHRoaXMuX3dpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJykpO1xuICAgICAgICAgICAgbGluay5ocmVmID0gdXJsO1xuICAgICAgICAgICAgbGluay5ocmVmID0gbGluay5ocmVmOyAvLyBJRTksIExPTCEgLSBodHRwOi8vanNmaWRkbGUubmV0L25pa2xhc3ZoLzJlNDhiL1xuICAgICAgICAgICAgcmV0dXJuIGxpbmsucHJvdG9jb2wgKyBsaW5rLmhvc3RuYW1lICsgbGluay5wb3J0O1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZWFkeScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZWFkeSgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuY2FjaGUpO1xuICAgICAgICAgICAgdmFyIHZhbHVlcyA9IGtleXMubWFwKGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXM1LmNhY2hlW3N0cl0uY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzNS5sb2dnZXIubG9nKCdVbmFibGUgdG8gbG9hZCBpbWFnZScsIGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwodmFsdWVzKS50aGVuKGZ1bmN0aW9uIChpbWFnZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAodHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpczUubG9nZ2VyLmxvZygnRmluaXNoZWQgbG9hZGluZyAnICsgaW1hZ2VzLmxlbmd0aCArICcgaW1hZ2VzJywgaW1hZ2VzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBSZXNvdXJjZVN0b3JlKGtleXMsIGltYWdlcyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBSZXNvdXJjZUxvYWRlcjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUmVzb3VyY2VMb2FkZXI7XG5cbnZhciBSZXNvdXJjZVN0b3JlID0gZXhwb3J0cy5SZXNvdXJjZVN0b3JlID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlc291cmNlU3RvcmUoa2V5cywgcmVzb3VyY2VzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSZXNvdXJjZVN0b3JlKTtcblxuICAgICAgICB0aGlzLl9rZXlzID0ga2V5cztcbiAgICAgICAgdGhpcy5fcmVzb3VyY2VzID0gcmVzb3VyY2VzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhSZXNvdXJjZVN0b3JlLCBbe1xuICAgICAgICBrZXk6ICdnZXQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5fa2V5cy5pbmRleE9mKGtleSk7XG4gICAgICAgICAgICByZXR1cm4gaW5kZXggPT09IC0xID8gbnVsbCA6IHRoaXMuX3Jlc291cmNlc1tpbmRleF07XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gUmVzb3VyY2VTdG9yZTtcbn0oKTtcblxudmFyIElOTElORV9TVkcgPSAvXmRhdGE6aW1hZ2VcXC9zdmdcXCt4bWwvaTtcbnZhciBJTkxJTkVfQkFTRTY0ID0gL15kYXRhOmltYWdlXFwvLio7YmFzZTY0LC9pO1xudmFyIElOTElORV9JTUcgPSAvXmRhdGE6aW1hZ2VcXC8uKi9pO1xuXG52YXIgaXNJbmxpbmVJbWFnZSA9IGZ1bmN0aW9uIGlzSW5saW5lSW1hZ2Uoc3JjKSB7XG4gICAgcmV0dXJuIElOTElORV9JTUcudGVzdChzcmMpO1xufTtcbnZhciBpc0lubGluZUJhc2U2NEltYWdlID0gZnVuY3Rpb24gaXNJbmxpbmVCYXNlNjRJbWFnZShzcmMpIHtcbiAgICByZXR1cm4gSU5MSU5FX0JBU0U2NC50ZXN0KHNyYyk7XG59O1xudmFyIGlzQmxvYkltYWdlID0gZnVuY3Rpb24gaXNCbG9iSW1hZ2Uoc3JjKSB7XG4gICAgcmV0dXJuIHNyYy5zdWJzdHIoMCwgNCkgPT09ICdibG9iJztcbn07XG5cbnZhciBpc1NWRyA9IGZ1bmN0aW9uIGlzU1ZHKHNyYykge1xuICAgIHJldHVybiBzcmMuc3Vic3RyKC0zKS50b0xvd2VyQ2FzZSgpID09PSAnc3ZnJyB8fCBJTkxJTkVfU1ZHLnRlc3Qoc3JjKTtcbn07XG5cbnZhciBfbG9hZEltYWdlID0gZnVuY3Rpb24gX2xvYWRJbWFnZShzcmMsIHRpbWVvdXQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShpbWcpO1xuICAgICAgICB9O1xuICAgICAgICBpbWcub25lcnJvciA9IHJlamVjdDtcbiAgICAgICAgaW1nLnNyYyA9IHNyYztcbiAgICAgICAgaWYgKGltZy5jb21wbGV0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgLy8gSW5saW5lIFhNTCBpbWFnZXMgbWF5IGZhaWwgdG8gcGFyc2UsIHRocm93aW5nIGFuIEVycm9yIGxhdGVyIG9uXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKGltZyk7XG4gICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KCB0cnVlID8gJ1RpbWVkIG91dCAoJyArIHRpbWVvdXQgKyAnbXMpIGxvYWRpbmcgaW1hZ2UnIDogJycpO1xuICAgICAgICAgICAgfSwgdGltZW91dCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbi8qKiovIH0pLFxuLyogNTYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5wYXJzZUNvbnRlbnQgPSBleHBvcnRzLnJlc29sdmVQc2V1ZG9Db250ZW50ID0gZXhwb3J0cy5wb3BDb3VudGVycyA9IGV4cG9ydHMucGFyc2VDb3VudGVyUmVzZXQgPSBleHBvcnRzLlRPS0VOX1RZUEUgPSBleHBvcnRzLlBTRVVET19DT05URU5UX0lURU1fVFlQRSA9IHVuZGVmaW5lZDtcblxudmFyIF9zbGljZWRUb0FycmF5ID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBzbGljZUl0ZXJhdG9yKGFyciwgaSkgeyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9IHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgcmV0dXJuIGFycjsgfSBlbHNlIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpIHsgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTsgfSBlbHNlIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7IH0gfTsgfSgpO1xuXG52YXIgX0xpc3RJdGVtID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNCk7XG5cbnZhciBfbGlzdFN0eWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4KTtcblxudmFyIFBTRVVET19DT05URU5UX0lURU1fVFlQRSA9IGV4cG9ydHMuUFNFVURPX0NPTlRFTlRfSVRFTV9UWVBFID0ge1xuICAgIFRFWFQ6IDAsXG4gICAgSU1BR0U6IDFcbn07XG5cbnZhciBUT0tFTl9UWVBFID0gZXhwb3J0cy5UT0tFTl9UWVBFID0ge1xuICAgIFNUUklORzogMCxcbiAgICBBVFRSSUJVVEU6IDEsXG4gICAgVVJMOiAyLFxuICAgIENPVU5URVI6IDMsXG4gICAgQ09VTlRFUlM6IDQsXG4gICAgT1BFTlFVT1RFOiA1LFxuICAgIENMT1NFUVVPVEU6IDZcbn07XG5cbnZhciBwYXJzZUNvdW50ZXJSZXNldCA9IGV4cG9ydHMucGFyc2VDb3VudGVyUmVzZXQgPSBmdW5jdGlvbiBwYXJzZUNvdW50ZXJSZXNldChzdHlsZSwgZGF0YSkge1xuICAgIGlmICghc3R5bGUgfHwgIXN0eWxlLmNvdW50ZXJSZXNldCB8fCBzdHlsZS5jb3VudGVyUmVzZXQgPT09ICdub25lJykge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgdmFyIGNvdW50ZXJOYW1lcyA9IFtdO1xuICAgIHZhciBjb3VudGVyUmVzZXRzID0gc3R5bGUuY291bnRlclJlc2V0LnNwbGl0KC9cXHMqLFxccyovKTtcbiAgICB2YXIgbGVuQ291bnRlclJlc2V0cyA9IGNvdW50ZXJSZXNldHMubGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5Db3VudGVyUmVzZXRzOyBpKyspIHtcbiAgICAgICAgdmFyIF9jb3VudGVyUmVzZXRzJGkkc3BsaSA9IGNvdW50ZXJSZXNldHNbaV0uc3BsaXQoL1xccysvKSxcbiAgICAgICAgICAgIF9jb3VudGVyUmVzZXRzJGkkc3BsaTIgPSBfc2xpY2VkVG9BcnJheShfY291bnRlclJlc2V0cyRpJHNwbGksIDIpLFxuICAgICAgICAgICAgY291bnRlck5hbWUgPSBfY291bnRlclJlc2V0cyRpJHNwbGkyWzBdLFxuICAgICAgICAgICAgaW5pdGlhbFZhbHVlID0gX2NvdW50ZXJSZXNldHMkaSRzcGxpMlsxXTtcblxuICAgICAgICBjb3VudGVyTmFtZXMucHVzaChjb3VudGVyTmFtZSk7XG4gICAgICAgIHZhciBjb3VudGVyID0gZGF0YS5jb3VudGVyc1tjb3VudGVyTmFtZV07XG4gICAgICAgIGlmICghY291bnRlcikge1xuICAgICAgICAgICAgY291bnRlciA9IGRhdGEuY291bnRlcnNbY291bnRlck5hbWVdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgY291bnRlci5wdXNoKHBhcnNlSW50KGluaXRpYWxWYWx1ZSB8fCAwLCAxMCkpO1xuICAgIH1cblxuICAgIHJldHVybiBjb3VudGVyTmFtZXM7XG59O1xuXG52YXIgcG9wQ291bnRlcnMgPSBleHBvcnRzLnBvcENvdW50ZXJzID0gZnVuY3Rpb24gcG9wQ291bnRlcnMoY291bnRlck5hbWVzLCBkYXRhKSB7XG4gICAgdmFyIGxlbkNvdW50ZXJzID0gY291bnRlck5hbWVzLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbkNvdW50ZXJzOyBpKyspIHtcbiAgICAgICAgZGF0YS5jb3VudGVyc1tjb3VudGVyTmFtZXNbaV1dLnBvcCgpO1xuICAgIH1cbn07XG5cbnZhciByZXNvbHZlUHNldWRvQ29udGVudCA9IGV4cG9ydHMucmVzb2x2ZVBzZXVkb0NvbnRlbnQgPSBmdW5jdGlvbiByZXNvbHZlUHNldWRvQ29udGVudChub2RlLCBzdHlsZSwgZGF0YSkge1xuICAgIGlmICghc3R5bGUgfHwgIXN0eWxlLmNvbnRlbnQgfHwgc3R5bGUuY29udGVudCA9PT0gJ25vbmUnIHx8IHN0eWxlLmNvbnRlbnQgPT09ICctbW96LWFsdC1jb250ZW50JyB8fCBzdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIHRva2VucyA9IHBhcnNlQ29udGVudChzdHlsZS5jb250ZW50KTtcblxuICAgIHZhciBsZW4gPSB0b2tlbnMubGVuZ3RoO1xuICAgIHZhciBjb250ZW50SXRlbXMgPSBbXTtcbiAgICB2YXIgcyA9ICcnO1xuXG4gICAgLy8gaW5jcmVtZW50IHRoZSBjb3VudGVyIChpZiB0aGVyZSBpcyBhIFwiY291bnRlci1pbmNyZW1lbnRcIiBkZWNsYXJhdGlvbilcbiAgICB2YXIgY291bnRlckluY3JlbWVudCA9IHN0eWxlLmNvdW50ZXJJbmNyZW1lbnQ7XG4gICAgaWYgKGNvdW50ZXJJbmNyZW1lbnQgJiYgY291bnRlckluY3JlbWVudCAhPT0gJ25vbmUnKSB7XG4gICAgICAgIHZhciBfY291bnRlckluY3JlbWVudCRzcGwgPSBjb3VudGVySW5jcmVtZW50LnNwbGl0KC9cXHMrLyksXG4gICAgICAgICAgICBfY291bnRlckluY3JlbWVudCRzcGwyID0gX3NsaWNlZFRvQXJyYXkoX2NvdW50ZXJJbmNyZW1lbnQkc3BsLCAyKSxcbiAgICAgICAgICAgIGNvdW50ZXJOYW1lID0gX2NvdW50ZXJJbmNyZW1lbnQkc3BsMlswXSxcbiAgICAgICAgICAgIGluY3JlbWVudFZhbHVlID0gX2NvdW50ZXJJbmNyZW1lbnQkc3BsMlsxXTtcblxuICAgICAgICB2YXIgY291bnRlciA9IGRhdGEuY291bnRlcnNbY291bnRlck5hbWVdO1xuICAgICAgICBpZiAoY291bnRlcikge1xuICAgICAgICAgICAgY291bnRlcltjb3VudGVyLmxlbmd0aCAtIDFdICs9IGluY3JlbWVudFZhbHVlID09PSB1bmRlZmluZWQgPyAxIDogcGFyc2VJbnQoaW5jcmVtZW50VmFsdWUsIDEwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGJ1aWxkIHRoZSBjb250ZW50IHN0cmluZ1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICBzd2l0Y2ggKHRva2VuLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgVE9LRU5fVFlQRS5TVFJJTkc6XG4gICAgICAgICAgICAgICAgcyArPSB0b2tlbi52YWx1ZSB8fCAnJztcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBUT0tFTl9UWVBFLkFUVFJJQlVURTpcbiAgICAgICAgICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIHRva2VuLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHMgKz0gbm9kZS5nZXRBdHRyaWJ1dGUodG9rZW4udmFsdWUpIHx8ICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBUT0tFTl9UWVBFLkNPVU5URVI6XG4gICAgICAgICAgICAgICAgdmFyIF9jb3VudGVyID0gZGF0YS5jb3VudGVyc1t0b2tlbi5uYW1lIHx8ICcnXTtcbiAgICAgICAgICAgICAgICBpZiAoX2NvdW50ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcyArPSBmb3JtYXRDb3VudGVyVmFsdWUoW19jb3VudGVyW19jb3VudGVyLmxlbmd0aCAtIDFdXSwgJycsIHRva2VuLmZvcm1hdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFRPS0VOX1RZUEUuQ09VTlRFUlM6XG4gICAgICAgICAgICAgICAgdmFyIF9jb3VudGVycyA9IGRhdGEuY291bnRlcnNbdG9rZW4ubmFtZSB8fCAnJ107XG4gICAgICAgICAgICAgICAgaWYgKF9jb3VudGVycykge1xuICAgICAgICAgICAgICAgICAgICBzICs9IGZvcm1hdENvdW50ZXJWYWx1ZShfY291bnRlcnMsIHRva2VuLmdsdWUsIHRva2VuLmZvcm1hdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFRPS0VOX1RZUEUuT1BFTlFVT1RFOlxuICAgICAgICAgICAgICAgIHMgKz0gZ2V0UXVvdGUoc3R5bGUsIHRydWUsIGRhdGEucXVvdGVEZXB0aCk7XG4gICAgICAgICAgICAgICAgZGF0YS5xdW90ZURlcHRoKys7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgVE9LRU5fVFlQRS5DTE9TRVFVT1RFOlxuICAgICAgICAgICAgICAgIGRhdGEucXVvdGVEZXB0aC0tO1xuICAgICAgICAgICAgICAgIHMgKz0gZ2V0UXVvdGUoc3R5bGUsIGZhbHNlLCBkYXRhLnF1b3RlRGVwdGgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFRPS0VOX1RZUEUuVVJMOlxuICAgICAgICAgICAgICAgIGlmIChzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRJdGVtcy5wdXNoKHsgdHlwZTogUFNFVURPX0NPTlRFTlRfSVRFTV9UWVBFLlRFWFQsIHZhbHVlOiBzIH0pO1xuICAgICAgICAgICAgICAgICAgICBzID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRlbnRJdGVtcy5wdXNoKHsgdHlwZTogUFNFVURPX0NPTlRFTlRfSVRFTV9UWVBFLklNQUdFLCB2YWx1ZTogdG9rZW4udmFsdWUgfHwgJycgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocykge1xuICAgICAgICBjb250ZW50SXRlbXMucHVzaCh7IHR5cGU6IFBTRVVET19DT05URU5UX0lURU1fVFlQRS5URVhULCB2YWx1ZTogcyB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGVudEl0ZW1zO1xufTtcblxudmFyIHBhcnNlQ29udGVudCA9IGV4cG9ydHMucGFyc2VDb250ZW50ID0gZnVuY3Rpb24gcGFyc2VDb250ZW50KGNvbnRlbnQsIGNhY2hlKSB7XG4gICAgaWYgKGNhY2hlICYmIGNhY2hlW2NvbnRlbnRdKSB7XG4gICAgICAgIHJldHVybiBjYWNoZVtjb250ZW50XTtcbiAgICB9XG5cbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgdmFyIGxlbiA9IGNvbnRlbnQubGVuZ3RoO1xuXG4gICAgdmFyIGlzU3RyaW5nID0gZmFsc2U7XG4gICAgdmFyIGlzRXNjYXBlZCA9IGZhbHNlO1xuICAgIHZhciBpc0Z1bmN0aW9uID0gZmFsc2U7XG4gICAgdmFyIHN0ciA9ICcnO1xuICAgIHZhciBmdW5jdGlvbk5hbWUgPSAnJztcbiAgICB2YXIgYXJncyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIgYyA9IGNvbnRlbnQuY2hhckF0KGkpO1xuXG4gICAgICAgIHN3aXRjaCAoYykge1xuICAgICAgICAgICAgY2FzZSBcIidcIjpcbiAgICAgICAgICAgIGNhc2UgJ1wiJzpcbiAgICAgICAgICAgICAgICBpZiAoaXNFc2NhcGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ciArPSBjO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlzU3RyaW5nID0gIWlzU3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzRnVuY3Rpb24gJiYgIWlzU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFRPS0VOX1RZUEUuU1RSSU5HLCB2YWx1ZTogc3RyIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RyID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ1xcXFwnOlxuICAgICAgICAgICAgICAgIGlmIChpc0VzY2FwZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyICs9IGM7XG4gICAgICAgICAgICAgICAgICAgIGlzRXNjYXBlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlzRXNjYXBlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICcoJzpcbiAgICAgICAgICAgICAgICBpZiAoaXNTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyICs9IGM7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaXNGdW5jdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uTmFtZSA9IHN0cjtcbiAgICAgICAgICAgICAgICAgICAgc3RyID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3MgPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJyknOlxuICAgICAgICAgICAgICAgIGlmIChpc1N0cmluZykge1xuICAgICAgICAgICAgICAgICAgICBzdHIgKz0gYztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJncy5wdXNoKHN0cik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGZ1bmN0aW9uTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnYXR0cic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFRPS0VOX1RZUEUuQVRUUklCVVRFLCB2YWx1ZTogYXJnc1swXSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NvdW50ZXInOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvdW50ZXIgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBUT0tFTl9UWVBFLkNPVU5URVIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBhcmdzWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXIuZm9ybWF0ID0gYXJnc1sxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbnMucHVzaChjb3VudGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NvdW50ZXJzJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfY291bnRlcnMyID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogVE9LRU5fVFlQRS5DT1VOVEVSUyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGFyZ3NbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvdW50ZXJzMi5nbHVlID0gYXJnc1sxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY291bnRlcnMyLmZvcm1hdCA9IGFyZ3NbMl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW5zLnB1c2goX2NvdW50ZXJzMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd1cmwnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBUT0tFTl9UWVBFLlVSTCwgdmFsdWU6IGFyZ3NbMF0gfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaXNGdW5jdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBzdHIgPSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJywnOlxuICAgICAgICAgICAgICAgIGlmIChpc1N0cmluZykge1xuICAgICAgICAgICAgICAgICAgICBzdHIgKz0gYztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgYXJncy5wdXNoKHN0cik7XG4gICAgICAgICAgICAgICAgICAgIHN0ciA9ICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnICc6XG4gICAgICAgICAgICBjYXNlICdcXHQnOlxuICAgICAgICAgICAgICAgIGlmIChpc1N0cmluZykge1xuICAgICAgICAgICAgICAgICAgICBzdHIgKz0gYztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0cikge1xuICAgICAgICAgICAgICAgICAgICBhZGRPdGhlclRva2VuKHRva2Vucywgc3RyKTtcbiAgICAgICAgICAgICAgICAgICAgc3RyID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHN0ciArPSBjO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGMgIT09ICdcXFxcJykge1xuICAgICAgICAgICAgaXNFc2NhcGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RyKSB7XG4gICAgICAgIGFkZE90aGVyVG9rZW4odG9rZW5zLCBzdHIpO1xuICAgIH1cblxuICAgIGlmIChjYWNoZSkge1xuICAgICAgICBjYWNoZVtjb250ZW50XSA9IHRva2VucztcbiAgICB9XG5cbiAgICByZXR1cm4gdG9rZW5zO1xufTtcblxudmFyIGFkZE90aGVyVG9rZW4gPSBmdW5jdGlvbiBhZGRPdGhlclRva2VuKHRva2VucywgaWRlbnRpZmllcikge1xuICAgIHN3aXRjaCAoaWRlbnRpZmllcikge1xuICAgICAgICBjYXNlICdvcGVuLXF1b3RlJzpcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogVE9LRU5fVFlQRS5PUEVOUVVPVEUgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY2xvc2UtcXVvdGUnOlxuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBUT0tFTl9UWVBFLkNMT1NFUVVPVEUgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59O1xuXG52YXIgZ2V0UXVvdGUgPSBmdW5jdGlvbiBnZXRRdW90ZShzdHlsZSwgaXNPcGVuaW5nLCBxdW90ZURlcHRoKSB7XG4gICAgdmFyIHF1b3RlcyA9IHN0eWxlLnF1b3RlcyA/IHN0eWxlLnF1b3Rlcy5zcGxpdCgvXFxzKy8pIDogW1wiJ1xcXCInXCIsIFwiJ1xcXCInXCJdO1xuICAgIHZhciBpZHggPSBxdW90ZURlcHRoICogMjtcbiAgICBpZiAoaWR4ID49IHF1b3Rlcy5sZW5ndGgpIHtcbiAgICAgICAgaWR4ID0gcXVvdGVzLmxlbmd0aCAtIDI7XG4gICAgfVxuICAgIGlmICghaXNPcGVuaW5nKSB7XG4gICAgICAgICsraWR4O1xuICAgIH1cbiAgICByZXR1cm4gcXVvdGVzW2lkeF0ucmVwbGFjZSgvXltcIiddfFtcIiddJC9nLCAnJyk7XG59O1xuXG52YXIgZm9ybWF0Q291bnRlclZhbHVlID0gZnVuY3Rpb24gZm9ybWF0Q291bnRlclZhbHVlKGNvdW50ZXIsIGdsdWUsIGZvcm1hdCkge1xuICAgIHZhciBsZW4gPSBjb3VudGVyLmxlbmd0aDtcbiAgICB2YXIgcmVzdWx0ID0gJyc7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IGdsdWUgfHwgJyc7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ICs9ICgwLCBfTGlzdEl0ZW0uY3JlYXRlQ291bnRlclRleHQpKGNvdW50ZXJbaV0sICgwLCBfbGlzdFN0eWxlLnBhcnNlTGlzdFN0eWxlVHlwZSkoZm9ybWF0IHx8ICdkZWNpbWFsJyksIGZhbHNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqKi8gfSlcbi8qKioqKiovIF0pO1xufSk7IiwiaW1wb3J0IGh0bWwyY2FudmFzIGZyb20gJy4uLy4uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L2h0bWwyY2FudmFzLmpzJztcblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCl7XG4gaHRtbDJjYW52YXMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRcIikpLnRoZW4oZnVuY3Rpb24oY2FudmFzKSB7XG4gICBjb25zdCBpbWdEYXRhID0gY2FudmFzLnRvRGF0YVVSTCgpO1xuICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN1bHRcIikuc3JjID0gaW1nRGF0YTtcbiB9KTtcblxuIC8v44Oc44K/44Oz44KS5oq85LiL44GX44Gf6Zqb44Gr44OA44Km44Oz44Ot44O844OJ44GZ44KL55S75YOP44KS5L2c44KLXG4gICBodG1sMmNhbnZhcyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFwiKSkudGhlbihmdW5jdGlvbihjYW52YXMpIHtcbiAgICAgIC8vYeOCv+OCsOOBrmhyZWbjgavjgq3jg6Pjg5fjg4Hjg6PnlLvlg4/jga5VUkzjgpLoqK3lrppcbiAgICAgIGNvbnN0IGltZ0RhdGEgPSBjYW52YXMudG9EYXRhVVJMKCk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9ncF9pbWFnZVwiKS5ocmVmID0gaW1nRGF0YTtcbiAgfSk7XG59OyJdLCJzb3VyY2VSb290IjoiIn0=