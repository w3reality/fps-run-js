(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["FpsRun"] = factory();
	else
		root["FpsRun"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Anim = function () {
    function Anim() {
        var _this = this;

        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Anim);

        this.stopped = false;
        this.frameCount = 0;
        this.fpsInterval = null;
        this.startTime = null;
        this.then = null;
        this.animFunc = null;
        this.log = opts.log;
        this.logFunc = opts.logFunc;
        // animate(now) is recursively called by rAF(), so
        // to preserve "this" pointing to the class instance,
        // define animate() in constructor with the => syntax
        this.animate = function (now) {
            // console.log('animate(): called')
            if (_this.stopped) return;

            // request another frame
            requestAnimationFrame(_this.animate);

            // calc elapsed time since last loop
            var elapsed = now - _this.then;
            // if enough time has elapsed, draw the next frame
            if (elapsed > _this.fpsInterval) {
                // Get ready for next frame by setting then=now, but...
                // Also, adjust for fpsInterval not being multiple of 16.67
                _this.then = now - elapsed % _this.fpsInterval;

                // draw stuff here
                _this.animFunc();

                if (_this.log) {
                    // #seconds since start and achieved fps.
                    var sinceStart = now - _this.startTime;
                    var currentFps = Math.round(1000 / (sinceStart / ++_this.frameCount) * 100) / 100;
                    var msg = "Elapsed time= " + Math.round(sinceStart / 1000 * 100) / 100 + " secs @ " + currentFps + " fps.";
                    var log = _this.logFunc ? _this.logFunc : console.log;
                    log(msg);
                }
            }
        };
    }

    _createClass(Anim, [{
        key: "start",
        value: function start(f, fps) {
            this.animFunc = f;
            this.fpsInterval = 1000 / fps;
            this.then = window.performance.now();
            if (this.log) {
                this.startTime = this.then;
            }
            this.animate();
        }
    }, {
        key: "stop",
        value: function stop() {
            this.stopped = true;
        }
    }]);

    return Anim;
}();

exports.default = Anim;
module.exports = exports["default"];

/***/ })
/******/ ]);
});
//# sourceMappingURL=fps-run.js.map