module.exports =
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+6Bu":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),

/***/ "+E39":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("S82l")(function () {
  return Object.defineProperty({}, 'a', { get: function get() {
      return 7;
    } }).a != 7;
});

/***/ }),

/***/ "+ZMJ":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("lOnJ");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };
    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };
    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }
  return function () /* ...args */{
    return fn.apply(that, arguments);
  };
};

/***/ }),

/***/ "+tPU":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("xGkn");
var global = __webpack_require__("7KvD");
var hide = __webpack_require__("hJx8");
var Iterators = __webpack_require__("/bQp");
var TO_STRING_TAG = __webpack_require__("dSzd")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' + 'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' + 'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' + 'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' + 'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),

/***/ "/bQp":
/***/ (function(module, exports) {

module.exports = {};

/***/ }),

/***/ "/n6Q":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("zQR9");
__webpack_require__("+tPU");
module.exports = __webpack_require__("Kh4W").f('iterator');

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("JkW7");


/***/ }),

/***/ "06OY":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("3Eo+")('meta');
var isObject = __webpack_require__("EqjI");
var has = __webpack_require__("D2L2");
var setDesc = __webpack_require__("evD5").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("S82l")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function setMeta(it) {
  setDesc(it, META, { value: {
      i: 'O' + ++id, // object ID
      w: {} // weak collections IDs
    } });
};
var fastKey = function fastKey(it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
    // return object ID
  }return it[META].i;
};
var getWeak = function getWeak(it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
    // return hash weak collections IDs
  }return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function onFreeze(it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};

/***/ }),

/***/ "0Bz/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CellMeasurer__ = __webpack_require__("dU/I");
/* unused harmony reexport default */
/* unused harmony reexport CellMeasurer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CellMeasurerCache__ = __webpack_require__("6hwl");
/* unused harmony reexport CellMeasurerCache */







/***/ }),

/***/ "0LuN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createWrapper;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__binarySearchBounds__ = __webpack_require__("q41T");
/**
 * Binary Search Bounds
 * https://github.com/mikolalysenko/interval-tree-1d
 * Mikola Lysenko
 *
 * Inlined because of Content Security Policy issue caused by the use of `new Function(...)` syntax in an upstream dependency.
 * Issue reported here: https://github.com/mikolalysenko/binary-search-bounds/issues/5
 **/



var NOT_FOUND = 0;
var SUCCESS = 1;
var EMPTY = 2;

function IntervalTreeNode(mid, left, right, leftPoints, rightPoints) {
  this.mid = mid;
  this.left = left;
  this.right = right;
  this.leftPoints = leftPoints;
  this.rightPoints = rightPoints;
  this.count = (left ? left.count : 0) + (right ? right.count : 0) + leftPoints.length;
}

var proto = IntervalTreeNode.prototype;

function copy(a, b) {
  a.mid = b.mid;
  a.left = b.left;
  a.right = b.right;
  a.leftPoints = b.leftPoints;
  a.rightPoints = b.rightPoints;
  a.count = b.count;
}

function rebuild(node, intervals) {
  var ntree = createIntervalTree(intervals);
  node.mid = ntree.mid;
  node.left = ntree.left;
  node.right = ntree.right;
  node.leftPoints = ntree.leftPoints;
  node.rightPoints = ntree.rightPoints;
  node.count = ntree.count;
}

function rebuildWithInterval(node, interval) {
  var intervals = node.intervals([]);
  intervals.push(interval);
  rebuild(node, intervals);
}

function rebuildWithoutInterval(node, interval) {
  var intervals = node.intervals([]);
  var idx = intervals.indexOf(interval);
  if (idx < 0) {
    return NOT_FOUND;
  }
  intervals.splice(idx, 1);
  rebuild(node, intervals);
  return SUCCESS;
}

proto.intervals = function (result) {
  result.push.apply(result, this.leftPoints);
  if (this.left) {
    this.left.intervals(result);
  }
  if (this.right) {
    this.right.intervals(result);
  }
  return result;
};

proto.insert = function (interval) {
  var weight = this.count - this.leftPoints.length;
  this.count += 1;
  if (interval[1] < this.mid) {
    if (this.left) {
      if (4 * (this.left.count + 1) > 3 * (weight + 1)) {
        rebuildWithInterval(this, interval);
      } else {
        this.left.insert(interval);
      }
    } else {
      this.left = createIntervalTree([interval]);
    }
  } else if (interval[0] > this.mid) {
    if (this.right) {
      if (4 * (this.right.count + 1) > 3 * (weight + 1)) {
        rebuildWithInterval(this, interval);
      } else {
        this.right.insert(interval);
      }
    } else {
      this.right = createIntervalTree([interval]);
    }
  } else {
    var l = __WEBPACK_IMPORTED_MODULE_0__binarySearchBounds__["a" /* default */].ge(this.leftPoints, interval, compareBegin);
    var r = __WEBPACK_IMPORTED_MODULE_0__binarySearchBounds__["a" /* default */].ge(this.rightPoints, interval, compareEnd);
    this.leftPoints.splice(l, 0, interval);
    this.rightPoints.splice(r, 0, interval);
  }
};

proto.remove = function (interval) {
  var weight = this.count - this.leftPoints;
  if (interval[1] < this.mid) {
    if (!this.left) {
      return NOT_FOUND;
    }
    var rw = this.right ? this.right.count : 0;
    if (4 * rw > 3 * (weight - 1)) {
      return rebuildWithoutInterval(this, interval);
    }
    var r = this.left.remove(interval);
    if (r === EMPTY) {
      this.left = null;
      this.count -= 1;
      return SUCCESS;
    } else if (r === SUCCESS) {
      this.count -= 1;
    }
    return r;
  } else if (interval[0] > this.mid) {
    if (!this.right) {
      return NOT_FOUND;
    }
    var lw = this.left ? this.left.count : 0;
    if (4 * lw > 3 * (weight - 1)) {
      return rebuildWithoutInterval(this, interval);
    }
    var r = this.right.remove(interval);
    if (r === EMPTY) {
      this.right = null;
      this.count -= 1;
      return SUCCESS;
    } else if (r === SUCCESS) {
      this.count -= 1;
    }
    return r;
  } else {
    if (this.count === 1) {
      if (this.leftPoints[0] === interval) {
        return EMPTY;
      } else {
        return NOT_FOUND;
      }
    }
    if (this.leftPoints.length === 1 && this.leftPoints[0] === interval) {
      if (this.left && this.right) {
        var p = this;
        var n = this.left;
        while (n.right) {
          p = n;
          n = n.right;
        }
        if (p === this) {
          n.right = this.right;
        } else {
          var l = this.left;
          var r = this.right;
          p.count -= n.count;
          p.right = n.left;
          n.left = l;
          n.right = r;
        }
        copy(this, n);
        this.count = (this.left ? this.left.count : 0) + (this.right ? this.right.count : 0) + this.leftPoints.length;
      } else if (this.left) {
        copy(this, this.left);
      } else {
        copy(this, this.right);
      }
      return SUCCESS;
    }
    for (var l = __WEBPACK_IMPORTED_MODULE_0__binarySearchBounds__["a" /* default */].ge(this.leftPoints, interval, compareBegin); l < this.leftPoints.length; ++l) {
      if (this.leftPoints[l][0] !== interval[0]) {
        break;
      }
      if (this.leftPoints[l] === interval) {
        this.count -= 1;
        this.leftPoints.splice(l, 1);
        for (var r = __WEBPACK_IMPORTED_MODULE_0__binarySearchBounds__["a" /* default */].ge(this.rightPoints, interval, compareEnd); r < this.rightPoints.length; ++r) {
          if (this.rightPoints[r][1] !== interval[1]) {
            break;
          } else if (this.rightPoints[r] === interval) {
            this.rightPoints.splice(r, 1);
            return SUCCESS;
          }
        }
      }
    }
    return NOT_FOUND;
  }
};

function reportLeftRange(arr, hi, cb) {
  for (var i = 0; i < arr.length && arr[i][0] <= hi; ++i) {
    var r = cb(arr[i]);
    if (r) {
      return r;
    }
  }
}

function reportRightRange(arr, lo, cb) {
  for (var i = arr.length - 1; i >= 0 && arr[i][1] >= lo; --i) {
    var r = cb(arr[i]);
    if (r) {
      return r;
    }
  }
}

function reportRange(arr, cb) {
  for (var i = 0; i < arr.length; ++i) {
    var r = cb(arr[i]);
    if (r) {
      return r;
    }
  }
}

proto.queryPoint = function (x, cb) {
  if (x < this.mid) {
    if (this.left) {
      var r = this.left.queryPoint(x, cb);
      if (r) {
        return r;
      }
    }
    return reportLeftRange(this.leftPoints, x, cb);
  } else if (x > this.mid) {
    if (this.right) {
      var r = this.right.queryPoint(x, cb);
      if (r) {
        return r;
      }
    }
    return reportRightRange(this.rightPoints, x, cb);
  } else {
    return reportRange(this.leftPoints, cb);
  }
};

proto.queryInterval = function (lo, hi, cb) {
  if (lo < this.mid && this.left) {
    var r = this.left.queryInterval(lo, hi, cb);
    if (r) {
      return r;
    }
  }
  if (hi > this.mid && this.right) {
    var r = this.right.queryInterval(lo, hi, cb);
    if (r) {
      return r;
    }
  }
  if (hi < this.mid) {
    return reportLeftRange(this.leftPoints, hi, cb);
  } else if (lo > this.mid) {
    return reportRightRange(this.rightPoints, lo, cb);
  } else {
    return reportRange(this.leftPoints, cb);
  }
};

function compareNumbers(a, b) {
  return a - b;
}

function compareBegin(a, b) {
  var d = a[0] - b[0];
  if (d) {
    return d;
  }
  return a[1] - b[1];
}

function compareEnd(a, b) {
  var d = a[1] - b[1];
  if (d) {
    return d;
  }
  return a[0] - b[0];
}

function createIntervalTree(intervals) {
  if (intervals.length === 0) {
    return null;
  }
  var pts = [];
  for (var i = 0; i < intervals.length; ++i) {
    pts.push(intervals[i][0], intervals[i][1]);
  }
  pts.sort(compareNumbers);

  var mid = pts[pts.length >> 1];

  var leftIntervals = [];
  var rightIntervals = [];
  var centerIntervals = [];
  for (var i = 0; i < intervals.length; ++i) {
    var s = intervals[i];
    if (s[1] < mid) {
      leftIntervals.push(s);
    } else if (mid < s[0]) {
      rightIntervals.push(s);
    } else {
      centerIntervals.push(s);
    }
  }

  //Split center intervals
  var leftPoints = centerIntervals;
  var rightPoints = centerIntervals.slice();
  leftPoints.sort(compareBegin);
  rightPoints.sort(compareEnd);

  return new IntervalTreeNode(mid, createIntervalTree(leftIntervals), createIntervalTree(rightIntervals), leftPoints, rightPoints);
}

//User friendly wrapper that makes it possible to support empty trees
function IntervalTree(root) {
  this.root = root;
}

var tproto = IntervalTree.prototype;

tproto.insert = function (interval) {
  if (this.root) {
    this.root.insert(interval);
  } else {
    this.root = new IntervalTreeNode(interval[0], null, null, [interval], [interval]);
  }
};

tproto.remove = function (interval) {
  if (this.root) {
    var r = this.root.remove(interval);
    if (r === EMPTY) {
      this.root = null;
    }
    return r !== NOT_FOUND;
  }
  return false;
};

tproto.queryPoint = function (p, cb) {
  if (this.root) {
    return this.root.queryPoint(p, cb);
  }
};

tproto.queryInterval = function (lo, hi, cb) {
  if (lo <= hi && this.root) {
    return this.root.queryInterval(lo, hi, cb);
  }
};

Object.defineProperty(tproto, "count", {
  get: function get() {
    if (this.root) {
      return this.root.count;
    }
    return 0;
  }
});

Object.defineProperty(tproto, "intervals", {
  get: function get() {
    if (this.root) {
      return this.root.intervals([]);
    }
    return [];
  }
});

function createWrapper(intervals) {
  if (!intervals || intervals.length === 0) {
    return new IntervalTree(null);
  }
  return new IntervalTree(createIntervalTree(intervals));
}

/***/ }),

/***/ "1kS7":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),

/***/ "2pUw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ScrollSync__ = __webpack_require__("5cea");
/* unused harmony reexport default */
/* unused harmony reexport ScrollSync */





/***/ }),

/***/ "2tPu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createDetectElementResize;
/**
 * Detect Element Resize.
 * https://github.com/sdecima/javascript-detect-element-resize
 * Sebastian Decima
 *
 * Forked from version 0.5.3; includes the following modifications:
 * 1) Guard against unsafe 'window' and 'document' references (to support SSR).
 * 2) Defer initialization code via a top-level function wrapper (to support SSR).
 * 3) Avoid unnecessary reflows by not measuring size for scroll events bubbling from children.
 * 4) Add nonce for style element.
 **/

function createDetectElementResize(nonce) {
  // Check `document` and `window` in case of server-side rendering
  var _window;
  if (typeof window !== 'undefined') {
    _window = window;
  } else if (typeof self !== 'undefined') {
    _window = self;
  } else {
    _window = this;
  }

  var attachEvent = typeof document !== 'undefined' && document.attachEvent;

  if (!attachEvent) {
    var requestFrame = function () {
      var raf = _window.requestAnimationFrame || _window.mozRequestAnimationFrame || _window.webkitRequestAnimationFrame || function (fn) {
        return _window.setTimeout(fn, 20);
      };
      return function (fn) {
        return raf(fn);
      };
    }();

    var cancelFrame = function () {
      var cancel = _window.cancelAnimationFrame || _window.mozCancelAnimationFrame || _window.webkitCancelAnimationFrame || _window.clearTimeout;
      return function (id) {
        return cancel(id);
      };
    }();

    var resetTriggers = function resetTriggers(element) {
      var triggers = element.__resizeTriggers__,
          expand = triggers.firstElementChild,
          contract = triggers.lastElementChild,
          expandChild = expand.firstElementChild;
      contract.scrollLeft = contract.scrollWidth;
      contract.scrollTop = contract.scrollHeight;
      expandChild.style.width = expand.offsetWidth + 1 + 'px';
      expandChild.style.height = expand.offsetHeight + 1 + 'px';
      expand.scrollLeft = expand.scrollWidth;
      expand.scrollTop = expand.scrollHeight;
    };

    var checkTriggers = function checkTriggers(element) {
      return element.offsetWidth != element.__resizeLast__.width || element.offsetHeight != element.__resizeLast__.height;
    };

    var scrollListener = function scrollListener(e) {
      // Don't measure (which forces) reflow for scrolls that happen inside of children!
      if (e.target.className.indexOf('contract-trigger') < 0 && e.target.className.indexOf('expand-trigger') < 0) {
        return;
      }

      var element = this;
      resetTriggers(this);
      if (this.__resizeRAF__) cancelFrame(this.__resizeRAF__);
      this.__resizeRAF__ = requestFrame(function () {
        if (checkTriggers(element)) {
          element.__resizeLast__.width = element.offsetWidth;
          element.__resizeLast__.height = element.offsetHeight;
          element.__resizeListeners__.forEach(function (fn) {
            fn.call(element, e);
          });
        }
      });
    };

    /* Detect CSS Animations support to detect element display/re-attach */
    var animation = false,
        animationstring = 'animation',
        keyframeprefix = '',
        animationstartevent = 'animationstart',
        domPrefixes = 'Webkit Moz O ms'.split(' '),
        startEvents = 'webkitAnimationStart animationstart oAnimationStart MSAnimationStart'.split(' '),
        pfx = '';
    {
      var elm = document.createElement('fakeelement');
      if (elm.style.animationName !== undefined) {
        animation = true;
      }

      if (animation === false) {
        for (var i = 0; i < domPrefixes.length; i++) {
          if (elm.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
            pfx = domPrefixes[i];
            animationstring = pfx + 'Animation';
            keyframeprefix = '-' + pfx.toLowerCase() + '-';
            animationstartevent = startEvents[i];
            animation = true;
            break;
          }
        }
      }
    }

    var animationName = 'resizeanim';
    var animationKeyframes = '@' + keyframeprefix + 'keyframes ' + animationName + ' { from { opacity: 0; } to { opacity: 0; } } ';
    var animationStyle = keyframeprefix + 'animation: 1ms ' + animationName + '; ';
  }

  var createStyles = function createStyles() {
    if (!document.getElementById('detectElementResize')) {
      //opacity:0 works around a chrome bug https://code.google.com/p/chromium/issues/detail?id=286360
      var css = (animationKeyframes ? animationKeyframes : '') + '.resize-triggers { ' + (animationStyle ? animationStyle : '') + 'visibility: hidden; opacity: 0; } ' + '.resize-triggers, .resize-triggers > div, .contract-trigger:before { content: \" \"; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',
          head = document.head || document.getElementsByTagName('head')[0],
          style = document.createElement('style');

      style.id = 'detectElementResize';
      style.type = 'text/css';

      if (nonce != null) {
        style.setAttribute('nonce', nonce);
      }

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }

      head.appendChild(style);
    }
  };

  var addResizeListener = function addResizeListener(element, fn) {
    if (attachEvent) element.attachEvent('onresize', fn);else {
      if (!element.__resizeTriggers__) {
        var elementStyle = _window.getComputedStyle(element);
        if (elementStyle && elementStyle.position == 'static') {
          element.style.position = 'relative';
        }
        createStyles();
        element.__resizeLast__ = {};
        element.__resizeListeners__ = [];
        (element.__resizeTriggers__ = document.createElement('div')).className = 'resize-triggers';
        element.__resizeTriggers__.innerHTML = '<div class="expand-trigger"><div></div></div>' + '<div class="contract-trigger"></div>';
        element.appendChild(element.__resizeTriggers__);
        resetTriggers(element);
        element.addEventListener('scroll', scrollListener, true);

        /* Listen for a css animation to detect element display/re-attach */
        if (animationstartevent) {
          element.__resizeTriggers__.__animationListener__ = function animationListener(e) {
            if (e.animationName == animationName) resetTriggers(element);
          };
          element.__resizeTriggers__.addEventListener(animationstartevent, element.__resizeTriggers__.__animationListener__);
        }
      }
      element.__resizeListeners__.push(fn);
    }
  };

  var removeResizeListener = function removeResizeListener(element, fn) {
    if (attachEvent) element.detachEvent('onresize', fn);else {
      element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
      if (!element.__resizeListeners__.length) {
        element.removeEventListener('scroll', scrollListener, true);
        if (element.__resizeTriggers__.__animationListener__) {
          element.__resizeTriggers__.removeEventListener(animationstartevent, element.__resizeTriggers__.__animationListener__);
          element.__resizeTriggers__.__animationListener__ = null;
        }
        try {
          element.__resizeTriggers__ = !element.removeChild(element.__resizeTriggers__);
        } catch (e) {
          // Preact compat; see developit/preact-compat/issues/228
        }
      }
    }
  };

  return {
    addResizeListener: addResizeListener,
    removeResizeListener: removeResizeListener
  };
}

/***/ }),

/***/ "3Eo+":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),

/***/ "3fs2":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("RY/4");
var ITERATOR = __webpack_require__("dSzd")('iterator');
var Iterators = __webpack_require__("/bQp");
module.exports = __webpack_require__("FeBl").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
};

/***/ }),

/***/ "4dHp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ArrowKeyStepper__ = __webpack_require__("w+D2");
/* unused harmony reexport default */
/* unused harmony reexport ArrowKeyStepper */





/***/ }),

/***/ "4mcu":
/***/ (function(module, exports) {

module.exports = function () {/* empty */};

/***/ }),

/***/ "52gC":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),

/***/ "57Go":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = updateScrollIndexHelper;
/**
 * Helper function that determines when to update scroll offsets to ensure that a scroll-to-index remains visible.
 * This function also ensures that the scroll ofset isn't past the last column/row of cells.
 *
 * @param cellsSize Width or height of cells for the current axis
 * @param cellSizeAndPositionManager Manages size and position metadata of cells
 * @param previousCellsCount Previous number of rows or columns
 * @param previousCellsSize Previous width or height of cells
 * @param previousScrollToIndex Previous scroll-to-index
 * @param previousSize Previous width or height of the virtualized container
 * @param scrollOffset Current scrollLeft or scrollTop
 * @param scrollToIndex Scroll-to-index
 * @param size Width or height of the virtualized container
 * @param updateScrollIndexCallback Callback to invoke with an scroll-to-index value
 */
function updateScrollIndexHelper(_ref) {
  var cellSize = _ref.cellSize,
      cellSizeAndPositionManager = _ref.cellSizeAndPositionManager,
      previousCellsCount = _ref.previousCellsCount,
      previousCellSize = _ref.previousCellSize,
      previousScrollToAlignment = _ref.previousScrollToAlignment,
      previousScrollToIndex = _ref.previousScrollToIndex,
      previousSize = _ref.previousSize,
      scrollOffset = _ref.scrollOffset,
      scrollToAlignment = _ref.scrollToAlignment,
      scrollToIndex = _ref.scrollToIndex,
      size = _ref.size,
      sizeJustIncreasedFromZero = _ref.sizeJustIncreasedFromZero,
      updateScrollIndexCallback = _ref.updateScrollIndexCallback;

  var cellCount = cellSizeAndPositionManager.getCellCount();
  var hasScrollToIndex = scrollToIndex >= 0 && scrollToIndex < cellCount;
  var sizeHasChanged = size !== previousSize || sizeJustIncreasedFromZero || !previousCellSize || typeof cellSize === 'number' && cellSize !== previousCellSize;

  // If we have a new scroll target OR if height/row-height has changed,
  // We should ensure that the scroll target is visible.
  if (hasScrollToIndex && (sizeHasChanged || scrollToAlignment !== previousScrollToAlignment || scrollToIndex !== previousScrollToIndex)) {
    updateScrollIndexCallback(scrollToIndex);

    // If we don't have a selected item but list size or number of children have decreased,
    // Make sure we aren't scrolled too far past the current content.
  } else if (!hasScrollToIndex && cellCount > 0 && (size < previousSize || cellCount < previousCellsCount)) {
    // We need to ensure that the current scroll offset is still within the collection's range.
    // To do this, we don't need to measure everything; CellMeasurer would perform poorly.
    // Just check to make sure we're still okay.
    // Only adjust the scroll position if we've scrolled below the last set of rows.
    if (scrollOffset > cellSizeAndPositionManager.getTotalSize() - size) {
      updateScrollIndexCallback(cellCount - 1);
    }
  }
}

/***/ }),

/***/ "5PlU":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("RY/4");
var ITERATOR = __webpack_require__("dSzd")('iterator');
var Iterators = __webpack_require__("/bQp");
module.exports = __webpack_require__("FeBl").isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined || '@@iterator' in O
  // eslint-disable-next-line no-prototype-builtins
  || Iterators.hasOwnProperty(classof(O));
};

/***/ }),

/***/ "5QVw":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("BwfY"), __esModule: true };

/***/ }),

/***/ "5Xac":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = defaultHeaderRowRenderer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("AX2D");


function defaultHeaderRowRenderer(_ref) {
  var className = _ref.className,
      columns = _ref.columns,
      style = _ref.style;

  return __WEBPACK_IMPORTED_MODULE_0_react__["a" /* default */].createElement('div', {
    className: className,
    role: 'row',
    style: style
  }, columns);
}

/***/ }),

/***/ "5cea":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("Zx67");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("Zrlr");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("wxAW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("zwoO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("Pf15");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("KSGD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__("AX2D");








/**
 * HOC that simplifies the process of synchronizing scrolling between two or more virtualized components.
 */

var ScrollSync = function (_PureComponent) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(ScrollSync, _PureComponent);

  function ScrollSync(props, context) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, ScrollSync);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ScrollSync.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(ScrollSync)).call(this, props, context));

    _this.state = {
      clientHeight: 0,
      clientWidth: 0,
      scrollHeight: 0,
      scrollLeft: 0,
      scrollTop: 0,
      scrollWidth: 0
    };

    _this._onScroll = _this._onScroll.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(ScrollSync, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;
      var _state = this.state,
          clientHeight = _state.clientHeight,
          clientWidth = _state.clientWidth,
          scrollHeight = _state.scrollHeight,
          scrollLeft = _state.scrollLeft,
          scrollTop = _state.scrollTop,
          scrollWidth = _state.scrollWidth;

      return children({
        clientHeight: clientHeight,
        clientWidth: clientWidth,
        onScroll: this._onScroll,
        scrollHeight: scrollHeight,
        scrollLeft: scrollLeft,
        scrollTop: scrollTop,
        scrollWidth: scrollWidth
      });
    }
  }, {
    key: '_onScroll',
    value: function _onScroll(_ref) {
      var clientHeight = _ref.clientHeight,
          clientWidth = _ref.clientWidth,
          scrollHeight = _ref.scrollHeight,
          scrollLeft = _ref.scrollLeft,
          scrollTop = _ref.scrollTop,
          scrollWidth = _ref.scrollWidth;

      this.setState({ clientHeight: clientHeight, clientWidth: clientWidth, scrollHeight: scrollHeight, scrollLeft: scrollLeft, scrollTop: scrollTop, scrollWidth: scrollWidth });
    }
  }]);

  return ScrollSync;
}(__WEBPACK_IMPORTED_MODULE_6_react__["b" /* PureComponent */]);

/* unused harmony default export */ var _unused_webpack_default_export = (ScrollSync);
 false ? ScrollSync.propTypes = {
  /**
   * Function responsible for rendering 2 or more virtualized components.
   * This function should implement the following signature:
   * ({ onScroll, scrollLeft, scrollTop }) => PropTypes.element
   */
  children: PropTypes.func.isRequired
} : void 0;

/***/ }),

/***/ "5yP5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Masonry__ = __webpack_require__("vAQj");
/* unused harmony reexport default */
/* unused harmony reexport Masonry */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__createCellPositioner__ = __webpack_require__("Yjtl");
/* unused harmony reexport createCellPositioner */







/***/ }),

/***/ "6YNH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Grid__ = __webpack_require__("D285");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Grid__["a"]; });
/* unused harmony reexport Grid */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accessibilityOverscanIndicesGetter__ = __webpack_require__("PIMb");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__accessibilityOverscanIndicesGetter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__defaultCellRangeRenderer__ = __webpack_require__("YU85");
/* unused harmony reexport defaultCellRangeRenderer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__defaultOverscanIndicesGetter__ = __webpack_require__("d6SR");
/* unused harmony reexport defaultOverscanIndicesGetter */











/***/ }),

/***/ "6hwl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DEFAULT_HEIGHT */
/* unused harmony export DEFAULT_WIDTH */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__("Zrlr");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__("wxAW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);


var DEFAULT_HEIGHT = 30;
var DEFAULT_WIDTH = 100;

// Enables more intelligent mapping of a given column and row index to an item ID.
// This prevents a cell cache from being invalidated when its parent collection is modified.

/**
 * Caches measurements for a given cell.
 */
var CellMeasurerCache = function () {
  function CellMeasurerCache() {
    var _this = this;

    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, CellMeasurerCache);

    this.columnWidth = function (_ref) {
      var index = _ref.index;

      var key = _this._keyMapper(0, index);

      return _this._columnWidthCache.hasOwnProperty(key) ? _this._columnWidthCache[key] : _this._defaultWidth;
    };

    this.rowHeight = function (_ref2) {
      var index = _ref2.index;

      var key = _this._keyMapper(index, 0);

      return _this._rowHeightCache.hasOwnProperty(key) ? _this._rowHeightCache[key] : _this._defaultHeight;
    };

    var defaultHeight = params.defaultHeight,
        defaultWidth = params.defaultWidth,
        fixedHeight = params.fixedHeight,
        fixedWidth = params.fixedWidth,
        keyMapper = params.keyMapper,
        minHeight = params.minHeight,
        minWidth = params.minWidth;

    this._hasFixedHeight = fixedHeight === true;
    this._hasFixedWidth = fixedWidth === true;
    this._minHeight = minHeight || 0;
    this._minWidth = minWidth || 0;
    this._keyMapper = keyMapper || defaultKeyMapper;

    this._defaultHeight = Math.max(this._minHeight, typeof defaultHeight === 'number' ? defaultHeight : DEFAULT_HEIGHT);
    this._defaultWidth = Math.max(this._minWidth, typeof defaultWidth === 'number' ? defaultWidth : DEFAULT_WIDTH);

    if (false) {
      if (this._hasFixedHeight === false && this._hasFixedWidth === false) {
        console.warn('CellMeasurerCache should only measure a cell\'s width or height. ' + 'You have configured CellMeasurerCache to measure both. ' + 'This will result in poor performance.');
      }

      if (this._hasFixedHeight === false && this._defaultHeight === 0) {
        console.warn('Fixed height CellMeasurerCache should specify a :defaultHeight greater than 0. ' + 'Failing to do so will lead to unnecessary layout and poor performance.');
      }

      if (this._hasFixedWidth === false && this._defaultWidth === 0) {
        console.warn('Fixed width CellMeasurerCache should specify a :defaultWidth greater than 0. ' + 'Failing to do so will lead to unnecessary layout and poor performance.');
      }
    }

    this._columnCount = 0;
    this._rowCount = 0;

    this._cellHeightCache = {};
    this._cellWidthCache = {};
    this._columnWidthCache = {};
    this._rowHeightCache = {};
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(CellMeasurerCache, [{
    key: 'clear',
    value: function clear(rowIndex, columnIndex) {
      var key = this._keyMapper(rowIndex, columnIndex);

      delete this._cellHeightCache[key];
      delete this._cellWidthCache[key];

      this._updateCachedColumnAndRowSizes(rowIndex, columnIndex);
    }
  }, {
    key: 'clearAll',
    value: function clearAll() {
      this._cellHeightCache = {};
      this._cellWidthCache = {};
      this._columnWidthCache = {};
      this._rowHeightCache = {};
    }
  }, {
    key: 'hasFixedHeight',
    value: function hasFixedHeight() {
      return this._hasFixedHeight;
    }
  }, {
    key: 'hasFixedWidth',
    value: function hasFixedWidth() {
      return this._hasFixedWidth;
    }
  }, {
    key: 'getHeight',
    value: function getHeight(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (this._hasFixedHeight) {
        return this._defaultHeight;
      } else {
        var _key = this._keyMapper(rowIndex, columnIndex);

        return this._cellHeightCache.hasOwnProperty(_key) ? Math.max(this._minHeight, this._cellHeightCache[_key]) : this._defaultHeight;
      }
    }
  }, {
    key: 'getWidth',
    value: function getWidth(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (this._hasFixedWidth) {
        return this._defaultWidth;
      } else {
        var _key2 = this._keyMapper(rowIndex, columnIndex);

        return this._cellWidthCache.hasOwnProperty(_key2) ? Math.max(this._minWidth, this._cellWidthCache[_key2]) : this._defaultWidth;
      }
    }
  }, {
    key: 'has',
    value: function has(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var key = this._keyMapper(rowIndex, columnIndex);

      return this._cellHeightCache.hasOwnProperty(key);
    }
  }, {
    key: 'set',
    value: function set(rowIndex, columnIndex, width, height) {
      var key = this._keyMapper(rowIndex, columnIndex);

      if (columnIndex >= this._columnCount) {
        this._columnCount = columnIndex + 1;
      }
      if (rowIndex >= this._rowCount) {
        this._rowCount = rowIndex + 1;
      }

      // Size is cached per cell so we don't have to re-measure if cells are re-ordered.
      this._cellHeightCache[key] = height;
      this._cellWidthCache[key] = width;

      this._updateCachedColumnAndRowSizes(rowIndex, columnIndex);
    }
  }, {
    key: '_updateCachedColumnAndRowSizes',
    value: function _updateCachedColumnAndRowSizes(rowIndex, columnIndex) {
      // :columnWidth and :rowHeight are derived based on all cells in a column/row.
      // Pre-cache these derived values for faster lookup later.
      // Reads are expected to occur more frequently than writes in this case.
      // Only update non-fixed dimensions though to avoid doing unnecessary work.
      if (!this._hasFixedWidth) {
        var columnWidth = 0;
        for (var i = 0; i < this._rowCount; i++) {
          columnWidth = Math.max(columnWidth, this.getWidth(i, columnIndex));
        }
        var columnKey = this._keyMapper(0, columnIndex);
        this._columnWidthCache[columnKey] = columnWidth;
      }
      if (!this._hasFixedHeight) {
        var rowHeight = 0;
        for (var _i = 0; _i < this._columnCount; _i++) {
          rowHeight = Math.max(rowHeight, this.getHeight(rowIndex, _i));
        }
        var rowKey = this._keyMapper(rowIndex, 0);
        this._rowHeightCache[rowKey] = rowHeight;
      }
    }
  }, {
    key: 'defaultHeight',
    get: function get() {
      return this._defaultHeight;
    }
  }, {
    key: 'defaultWidth',
    get: function get() {
      return this._defaultWidth;
    }
  }]);

  return CellMeasurerCache;
}();

/* unused harmony default export */ var _unused_webpack_default_export = (CellMeasurerCache);

function defaultKeyMapper(rowIndex, columnIndex) {
  return rowIndex + '-' + columnIndex;
}

/***/ }),

/***/ "6vZM":
/***/ (function(module, exports, __webpack_require__) {

var getKeys = __webpack_require__("lktj");
var toIObject = __webpack_require__("TcQ7");
module.exports = function (object, el) {
  var O = toIObject(object);
  var keys = getKeys(O);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) {
    if (O[key = keys[index++]] === el) return key;
  }
};

/***/ }),

/***/ "77Pl":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("EqjI");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),

/***/ "7KvD":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self
// eslint-disable-next-line no-new-func
: Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ }),

/***/ "7UMu":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("R9M2");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

/***/ }),

/***/ "880/":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("hJx8");

/***/ }),

/***/ "94VQ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var create = __webpack_require__("Yobk");
var descriptor = __webpack_require__("X8DO");
var setToStringTag = __webpack_require__("e6n0");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("hJx8")(IteratorPrototype, __webpack_require__("dSzd")('iterator'), function () {
  return this;
});

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),

/***/ "9bBU":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("mClu");
var $Object = __webpack_require__("FeBl").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};

/***/ }),

/***/ "9jFi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export IS_SCROLLING_TIMEOUT */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("Zx67");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("Zrlr");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("wxAW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("zwoO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("Pf15");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("KSGD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__("AX2D");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom__ = __webpack_require__("AX2D");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_onScroll__ = __webpack_require__("hVXz");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_dimensions__ = __webpack_require__("EqNh");











/**
 * Specifies the number of miliseconds during which to disable pointer events while a scroll is in progress.
 * This improves performance and makes scrolling smoother.
 */
var IS_SCROLLING_TIMEOUT = 150;

var WindowScroller = function (_PureComponent) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(WindowScroller, _PureComponent);

  function WindowScroller(props) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, WindowScroller);

    // Handle server-side rendering case
    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (WindowScroller.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(WindowScroller)).call(this, props));

    var _ref = typeof window !== 'undefined' ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__utils_dimensions__["a" /* getDimensions */])(props.scrollElement || window) : { width: 0, height: 0 },
        width = _ref.width,
        height = _ref.height;

    _this.state = {
      height: height,
      width: width,
      isScrolling: false,
      scrollLeft: 0,
      scrollTop: 0
    };

    _this._onResize = _this._onResize.bind(_this);
    _this._onChildScroll = _this._onChildScroll.bind(_this);
    _this.__handleWindowScrollEvent = _this.__handleWindowScrollEvent.bind(_this);
    _this.__resetIsScrolling = _this.__resetIsScrolling.bind(_this);
    return _this;
  }

  // Can’t use defaultProps for scrollElement without breaking server-side rendering


  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(WindowScroller, [{
    key: 'updatePosition',
    value: function updatePosition(scrollElement) {
      var onResize = this.props.onResize;
      var _state = this.state,
          height = _state.height,
          width = _state.width;

      scrollElement = scrollElement || this.props.scrollElement || window;
      var offset = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__utils_dimensions__["b" /* getPositionOffset */])(__WEBPACK_IMPORTED_MODULE_7_react_dom__["a" /* default */].findDOMNode(this), scrollElement);
      this._positionFromTop = offset.top;
      this._positionFromLeft = offset.left;

      var dimensions = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__utils_dimensions__["a" /* getDimensions */])(scrollElement);
      if (height !== dimensions.height || width !== dimensions.width) {
        this.setState({
          height: dimensions.height,
          width: dimensions.width
        });
        onResize({
          height: dimensions.height,
          width: dimensions.width
        });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var scrollElement = this.props.scrollElement || window;

      this.updatePosition(scrollElement);

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_onScroll__["a" /* registerScrollListener */])(this, scrollElement);

      window.addEventListener('resize', this._onResize, false);

      this._isMounted = true;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var scrollElement = this.props.scrollElement || window;
      var nextScrollElement = nextProps.scrollElement || window;

      if (scrollElement !== nextScrollElement) {
        this.updatePosition(nextScrollElement);

        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_onScroll__["b" /* unregisterScrollListener */])(this, scrollElement);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_onScroll__["a" /* registerScrollListener */])(this, nextScrollElement);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_onScroll__["b" /* unregisterScrollListener */])(this, this.props.scrollElement || window);
      window.removeEventListener('resize', this._onResize, false);

      this._isMounted = false;
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;
      var _state2 = this.state,
          isScrolling = _state2.isScrolling,
          scrollTop = _state2.scrollTop,
          scrollLeft = _state2.scrollLeft,
          height = _state2.height,
          width = _state2.width;

      return children({
        onChildScroll: this._onChildScroll,
        height: height,
        isScrolling: isScrolling,
        scrollLeft: scrollLeft,
        scrollTop: scrollTop,
        width: width
      });
    }
  }, {
    key: '_onChildScroll',
    value: function _onChildScroll(_ref2) {
      var scrollTop = _ref2.scrollTop;

      if (this.state.scrollTop === scrollTop) return;

      var scrollElement = this.scrollElement;

      if (typeof scrollElement.scrollTo === 'function') {
        scrollElement.scrollTo(0, scrollTop + this._positionFromTop);
      } else {
        scrollElement.scrollTop = scrollTop + this._positionFromTop;
      }
    }
  }, {
    key: '_onResize',
    value: function _onResize(event) {
      this.updatePosition();
    }

    // Referenced by utils/onScroll

  }, {
    key: '__handleWindowScrollEvent',
    value: function __handleWindowScrollEvent(event) {
      if (!this._isMounted) return;

      var onScroll = this.props.onScroll;

      var scrollElement = this.props.scrollElement || window;
      var scrollOffset = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__utils_dimensions__["c" /* getScrollOffset */])(scrollElement);
      var scrollLeft = Math.max(0, scrollOffset.left - this._positionFromLeft);
      var scrollTop = Math.max(0, scrollOffset.top - this._positionFromTop);

      this.setState({
        isScrolling: true,
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
      });

      onScroll({
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
      });
    }

    // Referenced by utils/onScroll

  }, {
    key: '__resetIsScrolling',
    value: function __resetIsScrolling() {
      this.setState({
        isScrolling: false
      });
    }
  }, {
    key: 'scrollElement',
    get: function get() {
      return this.props.scrollElement || window;
    }
  }]);

  return WindowScroller;
}(__WEBPACK_IMPORTED_MODULE_6_react__["b" /* PureComponent */]);

WindowScroller.defaultProps = {
  onResize: function onResize() {},
  onScroll: function onScroll() {},
  scrollingResetTimeInterval: IS_SCROLLING_TIMEOUT
};
/* harmony default export */ __webpack_exports__["a"] = (WindowScroller);
 false ? WindowScroller.propTypes = {
  /**
   * Function responsible for rendering children.
   * This function should implement the following signature:
   * ({ height, isScrolling, scrollLeft, scrollTop, width }) => PropTypes.element
   */
  children: PropTypes.func.isRequired,

  /** Callback to be invoked on-resize: ({ height, width }) */
  onResize: PropTypes.func.isRequired,

  /** Callback to be invoked on-scroll: ({ scrollLeft, scrollTop }) */
  onScroll: PropTypes.func.isRequired,

  /** Element to attach scroll event listeners. Defaults to window. */
  scrollElement: PropTypes.any,

  /**
   * Wait this amount of time after the last scroll event before resetting child `pointer-events`.
   */
  scrollingResetTimeInterval: PropTypes.number.isRequired
} : void 0;

/***/ }),

/***/ "9qMq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ColumnSizer__ = __webpack_require__("VEor");
/* unused harmony reexport default */
/* unused harmony reexport ColumnSizer */





/***/ }),

/***/ "AX2D":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export version */
/* unused harmony export DOM */
/* unused harmony export Children */
/* unused harmony export render */
/* unused harmony export createClass */
/* unused harmony export createFactory */
/* unused harmony export createElement */
/* unused harmony export cloneElement */
/* unused harmony export isValidElement */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return findDOMNode; });
/* unused harmony export unmountComponentAtNode */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Component$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PureComponent; });
/* unused harmony export unstable_renderSubtreeIntoContainer */
/* unused harmony export __spread */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__("KSGD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact__ = __webpack_require__("EBst");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_preact__);
/* unused harmony reexport PropTypes */



var version = '15.1.0'; // trick libraries to think we are react

var ELEMENTS = 'a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan'.split(' ');

var REACT_ELEMENT_TYPE = typeof Symbol !== 'undefined' && Symbol.for && Symbol.for('react.element') || 0xeac7;

var COMPONENT_WRAPPER_KEY = typeof Symbol !== 'undefined' ? Symbol.for('__preactCompatWrapper') : '__preactCompatWrapper';

// don't autobind these methods since they already have guaranteed context.
var AUTOBIND_BLACKLIST = {
	constructor: 1,
	render: 1,
	shouldComponentUpdate: 1,
	componentWillReceiveProps: 1,
	componentWillUpdate: 1,
	componentDidUpdate: 1,
	componentWillMount: 1,
	componentDidMount: 1,
	componentWillUnmount: 1,
	componentDidUnmount: 1
};

var CAMEL_PROPS = /^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vector|vert|word|writing|x)[A-Z]/;

var BYPASS_HOOK = {};

/*global process*/
var DEV = typeof process === 'undefined' || !process.env || "production" !== 'production';

// a component that renders nothing. Used to replace components for unmountComponentAtNode.
function EmptyComponent() {
	return null;
}

// make react think we're react.
var VNode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])('a', null).constructor;
VNode.prototype.$$typeof = REACT_ELEMENT_TYPE;
VNode.prototype.preactCompatUpgraded = false;
VNode.prototype.preactCompatNormalized = false;

Object.defineProperty(VNode.prototype, 'type', {
	get: function get() {
		return this.nodeName;
	},
	set: function set(v) {
		this.nodeName = v;
	},
	configurable: true
});

Object.defineProperty(VNode.prototype, 'props', {
	get: function get() {
		return this.attributes;
	},
	set: function set(v) {
		this.attributes = v;
	},
	configurable: true
});

var oldEventHook = __WEBPACK_IMPORTED_MODULE_1_preact__["options"].event;
__WEBPACK_IMPORTED_MODULE_1_preact__["options"].event = function (e) {
	if (oldEventHook) {
		e = oldEventHook(e);
	}
	e.persist = Object;
	e.nativeEvent = e;
	return e;
};

var oldVnodeHook = __WEBPACK_IMPORTED_MODULE_1_preact__["options"].vnode;
__WEBPACK_IMPORTED_MODULE_1_preact__["options"].vnode = function (vnode) {
	if (!vnode.preactCompatUpgraded) {
		vnode.preactCompatUpgraded = true;

		var tag = vnode.nodeName,
		    attrs = vnode.attributes = extend({}, vnode.attributes);

		if (typeof tag === 'function') {
			if (tag[COMPONENT_WRAPPER_KEY] === true || tag.prototype && 'isReactComponent' in tag.prototype) {
				if (vnode.children && String(vnode.children) === '') {
					vnode.children = undefined;
				}
				if (vnode.children) {
					attrs.children = vnode.children;
				}

				if (!vnode.preactCompatNormalized) {
					normalizeVNode(vnode);
				}
				handleComponentVNode(vnode);
			}
		} else {
			if (vnode.children && String(vnode.children) === '') {
				vnode.children = undefined;
			}
			if (vnode.children) {
				attrs.children = vnode.children;
			}

			if (attrs.defaultValue) {
				if (!attrs.value && attrs.value !== 0) {
					attrs.value = attrs.defaultValue;
				}
				delete attrs.defaultValue;
			}

			handleElementVNode(vnode, attrs);
		}
	}

	if (oldVnodeHook) {
		oldVnodeHook(vnode);
	}
};

function handleComponentVNode(vnode) {
	var tag = vnode.nodeName,
	    a = vnode.attributes;

	vnode.attributes = {};
	if (tag.defaultProps) {
		extend(vnode.attributes, tag.defaultProps);
	}
	if (a) {
		extend(vnode.attributes, a);
	}
}

function handleElementVNode(vnode, a) {
	var shouldSanitize, attrs, i;
	if (a) {
		for (i in a) {
			if (shouldSanitize = CAMEL_PROPS.test(i)) {
				break;
			}
		}
		if (shouldSanitize) {
			attrs = vnode.attributes = {};
			for (i in a) {
				if (a.hasOwnProperty(i)) {
					attrs[CAMEL_PROPS.test(i) ? i.replace(/([A-Z0-9])/, '-$1').toLowerCase() : i] = a[i];
				}
			}
		}
	}
}

// proxy render() since React returns a Component reference.
function render$1(vnode, parent, callback) {
	var prev = parent && parent._preactCompatRendered && parent._preactCompatRendered.base;

	// ignore impossible previous renders
	if (prev && prev.parentNode !== parent) {
		prev = null;
	}

	// default to first Element child
	if (!prev && parent) {
		prev = parent.firstElementChild;
	}

	// remove unaffected siblings
	for (var i = parent.childNodes.length; i--;) {
		if (parent.childNodes[i] !== prev) {
			parent.removeChild(parent.childNodes[i]);
		}
	}

	var out = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["render"])(vnode, parent, prev);
	if (parent) {
		parent._preactCompatRendered = out && (out._component || { base: out });
	}
	if (typeof callback === 'function') {
		callback();
	}
	return out && out._component || out;
}

var ContextProvider = function ContextProvider() {};

ContextProvider.prototype.getChildContext = function () {
	return this.props.context;
};
ContextProvider.prototype.render = function (props) {
	return props.children[0];
};

function renderSubtreeIntoContainer(parentComponent, vnode, container, callback) {
	var wrap = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(ContextProvider, { context: parentComponent.context }, vnode);
	var renderContainer = render$1(wrap, container);
	var component = renderContainer._component || renderContainer.base;
	if (callback) {
		callback.call(component, renderContainer);
	}
	return component;
}

function unmountComponentAtNode(container) {
	var existing = container._preactCompatRendered && container._preactCompatRendered.base;
	if (existing && existing.parentNode === container) {
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["render"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(EmptyComponent), container, existing);
		return true;
	}
	return false;
}

var ARR = [];

// This API is completely unnecessary for Preact, so it's basically passthrough.
var Children = {
	map: function map(children, fn, ctx) {
		if (children == null) {
			return null;
		}
		children = Children.toArray(children);
		if (ctx && ctx !== children) {
			fn = fn.bind(ctx);
		}
		return children.map(fn);
	},
	forEach: function forEach(children, fn, ctx) {
		if (children == null) {
			return null;
		}
		children = Children.toArray(children);
		if (ctx && ctx !== children) {
			fn = fn.bind(ctx);
		}
		children.forEach(fn);
	},
	count: function count(children) {
		return children && children.length || 0;
	},
	only: function only(children) {
		children = Children.toArray(children);
		if (children.length !== 1) {
			throw new Error('Children.only() expects only one child.');
		}
		return children[0];
	},
	toArray: function toArray(children) {
		if (children == null) {
			return [];
		}
		return ARR.concat(children);
	}
};

/** Track current render() component for ref assignment */
var currentComponent;

function createFactory(type) {
	return createElement.bind(null, type);
}

var DOM = {};
for (var i = ELEMENTS.length; i--;) {
	DOM[ELEMENTS[i]] = createFactory(ELEMENTS[i]);
}

function upgradeToVNodes(arr, offset) {
	for (var i = offset || 0; i < arr.length; i++) {
		var obj = arr[i];
		if (Array.isArray(obj)) {
			upgradeToVNodes(obj);
		} else if (obj && typeof obj === 'object' && !isValidElement(obj) && (obj.props && obj.type || obj.attributes && obj.nodeName || obj.children)) {
			arr[i] = createElement(obj.type || obj.nodeName, obj.props || obj.attributes, obj.children);
		}
	}
}

function isStatelessComponent(c) {
	return typeof c === 'function' && !(c.prototype && c.prototype.render);
}

// wraps stateless functional components in a PropTypes validator
function wrapStatelessComponent(WrappedComponent) {
	return createClass({
		displayName: WrappedComponent.displayName || WrappedComponent.name,
		render: function render() {
			return WrappedComponent(this.props, this.context);
		}
	});
}

function statelessComponentHook(Ctor) {
	var Wrapped = Ctor[COMPONENT_WRAPPER_KEY];
	if (Wrapped) {
		return Wrapped === true ? Ctor : Wrapped;
	}

	Wrapped = wrapStatelessComponent(Ctor);

	Object.defineProperty(Wrapped, COMPONENT_WRAPPER_KEY, { configurable: true, value: true });
	Wrapped.displayName = Ctor.displayName;
	Wrapped.propTypes = Ctor.propTypes;
	Wrapped.defaultProps = Ctor.defaultProps;

	Object.defineProperty(Ctor, COMPONENT_WRAPPER_KEY, { configurable: true, value: Wrapped });

	return Wrapped;
}

function createElement() {
	var args = [],
	    len = arguments.length;
	while (len--) {
		args[len] = arguments[len];
	}upgradeToVNodes(args, 2);
	return normalizeVNode(__WEBPACK_IMPORTED_MODULE_1_preact__["h"].apply(void 0, args));
}

function normalizeVNode(vnode) {
	vnode.preactCompatNormalized = true;

	applyClassName(vnode);

	if (isStatelessComponent(vnode.nodeName)) {
		vnode.nodeName = statelessComponentHook(vnode.nodeName);
	}

	var ref = vnode.attributes.ref,
	    type = ref && typeof ref;
	if (currentComponent && (type === 'string' || type === 'number')) {
		vnode.attributes.ref = createStringRefProxy(ref, currentComponent);
	}

	applyEventNormalization(vnode);

	return vnode;
}

function cloneElement$1(element, props) {
	var children = [],
	    len = arguments.length - 2;
	while (len-- > 0) {
		children[len] = arguments[len + 2];
	}if (!isValidElement(element)) {
		return element;
	}
	var elementProps = element.attributes || element.props;
	var node = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(element.nodeName || element.type, elementProps, element.children || elementProps && elementProps.children);
	// Only provide the 3rd argument if needed.
	// Arguments 3+ overwrite element.children in preactCloneElement
	var cloneArgs = [node, props];
	if (children && children.length) {
		cloneArgs.push(children);
	} else if (props && props.children) {
		cloneArgs.push(props.children);
	}
	return normalizeVNode(__WEBPACK_IMPORTED_MODULE_1_preact__["cloneElement"].apply(void 0, cloneArgs));
}

function isValidElement(element) {
	return element && (element instanceof VNode || element.$$typeof === REACT_ELEMENT_TYPE);
}

function createStringRefProxy(name, component) {
	return component._refProxies[name] || (component._refProxies[name] = function (resolved) {
		if (component && component.refs) {
			component.refs[name] = resolved;
			if (resolved === null) {
				delete component._refProxies[name];
				component = null;
			}
		}
	});
}

function applyEventNormalization(ref) {
	var nodeName = ref.nodeName;
	var attributes = ref.attributes;

	if (!attributes || typeof nodeName !== 'string') {
		return;
	}
	var props = {};
	for (var i in attributes) {
		props[i.toLowerCase()] = i;
	}
	if (props.ondoubleclick) {
		attributes.ondblclick = attributes[props.ondoubleclick];
		delete attributes[props.ondoubleclick];
	}
	// for *textual inputs* (incl textarea), normalize `onChange` -> `onInput`:
	if (props.onchange && (nodeName === 'textarea' || nodeName.toLowerCase() === 'input' && !/^fil|che|rad/i.test(attributes.type))) {
		var normalized = props.oninput || 'oninput';
		if (!attributes[normalized]) {
			attributes[normalized] = multihook([attributes[normalized], attributes[props.onchange]]);
			delete attributes[props.onchange];
		}
	}
}

function applyClassName(vnode) {
	var a = vnode.attributes || (vnode.attributes = {});
	classNameDescriptor.enumerable = 'className' in a;
	if (a.className) {
		a.class = a.className;
	}
	Object.defineProperty(a, 'className', classNameDescriptor);
}

var classNameDescriptor = {
	configurable: true,
	get: function get() {
		return this.class;
	},
	set: function set(v) {
		this.class = v;
	}
};

function extend(base, props) {
	var arguments$1 = arguments;

	for (var i = 1, obj = void 0; i < arguments.length; i++) {
		if (obj = arguments$1[i]) {
			for (var key in obj) {
				if (obj.hasOwnProperty(key)) {
					base[key] = obj[key];
				}
			}
		}
	}
	return base;
}

function shallowDiffers(a, b) {
	for (var i in a) {
		if (!(i in b)) {
			return true;
		}
	}
	for (var i$1 in b) {
		if (a[i$1] !== b[i$1]) {
			return true;
		}
	}
	return false;
}

function findDOMNode(component) {
	return component && component.base || component;
}

function F() {}

function createClass(obj) {
	function cl(props, context) {
		bindAll(this);
		Component$1.call(this, props, context, BYPASS_HOOK);
		newComponentHook.call(this, props, context);
	}

	obj = extend({ constructor: cl }, obj);

	// We need to apply mixins here so that getDefaultProps is correctly mixed
	if (obj.mixins) {
		applyMixins(obj, collateMixins(obj.mixins));
	}
	if (obj.statics) {
		extend(cl, obj.statics);
	}
	if (obj.propTypes) {
		cl.propTypes = obj.propTypes;
	}
	if (obj.defaultProps) {
		cl.defaultProps = obj.defaultProps;
	}
	if (obj.getDefaultProps) {
		cl.defaultProps = obj.getDefaultProps();
	}

	F.prototype = Component$1.prototype;
	cl.prototype = extend(new F(), obj);

	cl.displayName = obj.displayName || 'Component';

	return cl;
}

// Flatten an Array of mixins to a map of method name to mixin implementations
function collateMixins(mixins) {
	var keyed = {};
	for (var i = 0; i < mixins.length; i++) {
		var mixin = mixins[i];
		for (var key in mixin) {
			if (mixin.hasOwnProperty(key) && typeof mixin[key] === 'function') {
				(keyed[key] || (keyed[key] = [])).push(mixin[key]);
			}
		}
	}
	return keyed;
}

// apply a mapping of Arrays of mixin methods to a component prototype
function applyMixins(proto, mixins) {
	for (var key in mixins) {
		if (mixins.hasOwnProperty(key)) {
			proto[key] = multihook(mixins[key].concat(proto[key] || ARR), key === 'getDefaultProps' || key === 'getInitialState' || key === 'getChildContext');
		}
	}
}

function bindAll(ctx) {
	for (var i in ctx) {
		var v = ctx[i];
		if (typeof v === 'function' && !v.__bound && !AUTOBIND_BLACKLIST.hasOwnProperty(i)) {
			(ctx[i] = v.bind(ctx)).__bound = true;
		}
	}
}

function callMethod(ctx, m, args) {
	if (typeof m === 'string') {
		m = ctx.constructor.prototype[m];
	}
	if (typeof m === 'function') {
		return m.apply(ctx, args);
	}
}

function multihook(hooks, skipDuplicates) {
	return function () {
		var arguments$1 = arguments;
		var this$1 = this;

		var ret;
		for (var i = 0; i < hooks.length; i++) {
			var r = callMethod(this$1, hooks[i], arguments$1);

			if (skipDuplicates && r != null) {
				if (!ret) {
					ret = {};
				}
				for (var key in r) {
					if (r.hasOwnProperty(key)) {
						ret[key] = r[key];
					}
				}
			} else if (typeof r !== 'undefined') {
				ret = r;
			}
		}
		return ret;
	};
}

function newComponentHook(props, context) {
	propsHook.call(this, props, context);
	this.componentWillReceiveProps = multihook([propsHook, this.componentWillReceiveProps || 'componentWillReceiveProps']);
	this.render = multihook([propsHook, beforeRender, this.render || 'render', afterRender]);
}

function propsHook(props, context) {
	if (!props) {
		return;
	}

	// React annoyingly special-cases single children, and some react components are ridiculously strict about this.
	var c = props.children;
	if (c && Array.isArray(c) && c.length === 1 && (typeof c[0] === 'string' || typeof c[0] === 'function' || c[0] instanceof VNode)) {
		props.children = c[0];

		// but its totally still going to be an Array.
		if (props.children && typeof props.children === 'object') {
			props.children.length = 1;
			props.children[0] = props.children;
		}
	}

	// add proptype checking
	if (DEV) {
		var ctor = typeof this === 'function' ? this : this.constructor,
		    propTypes = this.propTypes || ctor.propTypes;
		var displayName = this.displayName || ctor.name;

		if (propTypes) {
			__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.checkPropTypes(propTypes, props, 'prop', displayName);
		}
	}
}

function beforeRender(props) {
	currentComponent = this;
}

function afterRender() {
	if (currentComponent === this) {
		currentComponent = null;
	}
}

function Component$1(props, context, opts) {
	__WEBPACK_IMPORTED_MODULE_1_preact__["Component"].call(this, props, context);
	this.state = this.getInitialState ? this.getInitialState() : {};
	this.refs = {};
	this._refProxies = {};
	if (opts !== BYPASS_HOOK) {
		newComponentHook.call(this, props, context);
	}
}
extend(Component$1.prototype = new __WEBPACK_IMPORTED_MODULE_1_preact__["Component"](), {
	constructor: Component$1,

	isReactComponent: {},

	replaceState: function replaceState(state, callback) {
		var this$1 = this;

		this.setState(state, callback);
		for (var i in this$1.state) {
			if (!(i in state)) {
				delete this$1.state[i];
			}
		}
	},

	getDOMNode: function getDOMNode() {
		return this.base;
	},

	isMounted: function isMounted() {
		return !!this.base;
	}
});

function PureComponent(props, context) {
	Component$1.call(this, props, context);
}
F.prototype = Component$1.prototype;
PureComponent.prototype = new F();
PureComponent.prototype.isPureReactComponent = true;
PureComponent.prototype.shouldComponentUpdate = function (props, state) {
	return shallowDiffers(this.props, props) || shallowDiffers(this.state, state);
};

var index = {
	version: version,
	DOM: DOM,
	PropTypes: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a,
	Children: Children,
	render: render$1,
	createClass: createClass,
	createFactory: createFactory,
	createElement: createElement,
	cloneElement: cloneElement$1,
	isValidElement: isValidElement,
	findDOMNode: findDOMNode,
	unmountComponentAtNode: unmountComponentAtNode,
	Component: Component$1,
	PureComponent: PureComponent,
	unstable_renderSubtreeIntoContainer: renderSubtreeIntoContainer,
	__spread: extend
};

/* harmony default export */ __webpack_exports__["a"] = (index);
//# sourceMappingURL=preact-compat.es.js.map

/***/ }),

/***/ "AlMl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = defaultCellDataGetter;


/**
 * Default accessor for returning a cell value for a given attribute.
 * This function expects to operate on either a vanilla Object or an Immutable Map.
 * You should override the column's cellDataGetter if your data is some other type of object.
 */
function defaultCellDataGetter(_ref) {
  var columnData = _ref.columnData,
      dataKey = _ref.dataKey,
      rowData = _ref.rowData;

  if (typeof rowData.get === 'function') {
    return rowData.get(dataKey);
  } else {
    return rowData[dataKey];
  }
}

/***/ }),

/***/ "BO1k":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("fxRn"), __esModule: true };

/***/ }),

/***/ "BSUc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor__ = __webpack_require__("K6ED");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("+6Bu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__ = __webpack_require__("Dd8w");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("Zx67");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck__ = __webpack_require__("Zrlr");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass__ = __webpack_require__("wxAW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("zwoO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits__ = __webpack_require__("Pf15");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Grid__ = __webpack_require__("6YNH");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_prop_types__ = __webpack_require__("KSGD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react__ = __webpack_require__("AX2D");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_classnames__ = __webpack_require__("HW6M");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_classnames__);













/**
 * It is inefficient to create and manage a large list of DOM elements within a scrolling container
 * if only a few of those elements are visible. The primary purpose of this component is to improve
 * performance by only rendering the DOM nodes that a user is able to see based on their current
 * scroll position.
 *
 * This component renders a virtualized list of elements with either fixed or dynamic heights.
 */

var List = function (_PureComponent) {
  __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default()(List, _PureComponent);

  function List(props, context) {
    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default()(this, List);

    var _this = __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn___default()(this, (List.__proto__ || __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of___default()(List)).call(this, props, context));

    _this._cellRenderer = _this._cellRenderer.bind(_this);
    _this._onScroll = _this._onScroll.bind(_this);
    _this._onSectionRendered = _this._onSectionRendered.bind(_this);
    _this._setRef = _this._setRef.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default()(List, [{
    key: 'forceUpdateGrid',
    value: function forceUpdateGrid() {
      this.Grid.forceUpdate();
    }

    /** See Grid#getOffsetForCell */

  }, {
    key: 'getOffsetForRow',
    value: function getOffsetForRow(_ref) {
      var alignment = _ref.alignment,
          index = _ref.index;

      var _Grid$getOffsetForCel = this.Grid.getOffsetForCell({
        alignment: alignment,
        rowIndex: index
      }),
          scrollTop = _Grid$getOffsetForCel.scrollTop;

      return scrollTop;
    }

    /** See Grid#measureAllCells */

  }, {
    key: 'measureAllRows',
    value: function measureAllRows() {
      this.Grid.measureAllCells();
    }

    /** See Grid#recomputeGridSize */

  }, {
    key: 'recomputeRowHeights',
    value: function recomputeRowHeights() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      this.Grid.recomputeGridSize({
        rowIndex: index
      });
    }

    /** See Grid#scrollToPosition */

  }, {
    key: 'scrollToPosition',
    value: function scrollToPosition() {
      var scrollTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      this.Grid.scrollToPosition({ scrollTop: scrollTop });
    }

    /** See Grid#scrollToCell */

  }, {
    key: 'scrollToRow',
    value: function scrollToRow() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      this.Grid.scrollToCell({
        columnIndex: 0,
        rowIndex: index
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          noRowsRenderer = _props.noRowsRenderer,
          scrollToIndex = _props.scrollToIndex,
          width = _props.width;

      var classNames = __WEBPACK_IMPORTED_MODULE_11_classnames___default()('ReactVirtualized__List', className);

      return __WEBPACK_IMPORTED_MODULE_10_react__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_8__Grid__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, this.props, {
        autoContainerWidth: true,
        cellRenderer: this._cellRenderer,
        className: classNames,
        columnWidth: width,
        columnCount: 1,
        noContentRenderer: noRowsRenderer,
        onScroll: this._onScroll,
        onSectionRendered: this._onSectionRendered,
        ref: this._setRef,
        scrollToRow: scrollToIndex
      }));
    }
  }, {
    key: '_cellRenderer',
    value: function _cellRenderer(_ref2) {
      var rowIndex = _ref2.rowIndex,
          style = _ref2.style,
          rest = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_ref2, ['rowIndex', 'style']);

      var rowRenderer = this.props.rowRenderer;

      // TRICKY The style object is sometimes cached by Grid.
      // This prevents new style objects from bypassing shallowCompare().
      // However as of React 16, style props are auto-frozen (at least in dev mode)
      // Check to make sure we can still modify the style before proceeding.
      // https://github.com/facebook/react/commit/977357765b44af8ff0cfea327866861073095c12#commitcomment-20648713

      var _Object$getOwnPropert = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(style, 'width'),
          writable = _Object$getOwnPropert.writable;

      if (writable) {
        // By default, List cells should be 100% width.
        // This prevents them from flowing under a scrollbar (if present).
        style.width = '100%';
      }

      return rowRenderer(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({
        index: rowIndex,
        style: style
      }, rest));
    }
  }, {
    key: '_setRef',
    value: function _setRef(ref) {
      this.Grid = ref;
    }
  }, {
    key: '_onScroll',
    value: function _onScroll(_ref3) {
      var clientHeight = _ref3.clientHeight,
          scrollHeight = _ref3.scrollHeight,
          scrollTop = _ref3.scrollTop;
      var onScroll = this.props.onScroll;

      onScroll({ clientHeight: clientHeight, scrollHeight: scrollHeight, scrollTop: scrollTop });
    }
  }, {
    key: '_onSectionRendered',
    value: function _onSectionRendered(_ref4) {
      var rowOverscanStartIndex = _ref4.rowOverscanStartIndex,
          rowOverscanStopIndex = _ref4.rowOverscanStopIndex,
          rowStartIndex = _ref4.rowStartIndex,
          rowStopIndex = _ref4.rowStopIndex;
      var onRowsRendered = this.props.onRowsRendered;

      onRowsRendered({
        overscanStartIndex: rowOverscanStartIndex,
        overscanStopIndex: rowOverscanStopIndex,
        startIndex: rowStartIndex,
        stopIndex: rowStopIndex
      });
    }
  }]);

  return List;
}(__WEBPACK_IMPORTED_MODULE_10_react__["b" /* PureComponent */]);

List.defaultProps = {
  estimatedRowSize: 30,
  noRowsRenderer: function noRowsRenderer() {
    return null;
  },
  onRowsRendered: function onRowsRendered() {
    return null;
  },
  onScroll: function onScroll() {
    return null;
  },
  overscanIndicesGetter: __WEBPACK_IMPORTED_MODULE_8__Grid__["b" /* accessibilityOverscanIndicesGetter */],
  overscanRowCount: 10,
  scrollToAlignment: 'auto',
  scrollToIndex: -1,
  style: {}
};
/* harmony default export */ __webpack_exports__["a"] = (List);
 false ? void 0 : void 0;

/***/ }),

/***/ "BwfY":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("fWfb");
__webpack_require__("M6a0");
__webpack_require__("OYls");
__webpack_require__("QWe/");
module.exports = __webpack_require__("FeBl").Symbol;

/***/ }),

/***/ "C3rG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Collection__ = __webpack_require__("KTm4");
/* unused harmony reexport default */
/* unused harmony reexport Collection */





/***/ }),

/***/ "C4MV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("9bBU"), __esModule: true };

/***/ }),

/***/ "Cdx3":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("sB3e");
var $keys = __webpack_require__("lktj");

__webpack_require__("uqUo")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});

/***/ }),

/***/ "D285":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DEFAULT_SCROLLING_RESET_TIME_INTERVAL */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("Dd8w");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("Zx67");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__("Zrlr");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__("wxAW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("zwoO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__("Pf15");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__("AX2D");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types__ = __webpack_require__("KSGD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames__ = __webpack_require__("HW6M");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_calculateSizeAndPositionDataAndUpdateScrollOffset__ = __webpack_require__("S4I/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_ScalingCellSizeAndPositionManager__ = __webpack_require__("Oh5E");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_createCallbackMemoizer__ = __webpack_require__("MVOw");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__defaultOverscanIndicesGetter__ = __webpack_require__("d6SR");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__utils_updateScrollIndexHelper__ = __webpack_require__("57Go");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__defaultCellRangeRenderer__ = __webpack_require__("YU85");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_dom_helpers_util_scrollbarSize__ = __webpack_require__("y6rd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_dom_helpers_util_scrollbarSize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_dom_helpers_util_scrollbarSize__);

















/**
 * Specifies the number of milliseconds during which to disable pointer events while a scroll is in progress.
 * This improves performance and makes scrolling smoother.
 */
var DEFAULT_SCROLLING_RESET_TIME_INTERVAL = 150;

/**
 * Controls whether the Grid updates the DOM element's scrollLeft/scrollTop based on the current state or just observes it.
 * This prevents Grid from interrupting mouse-wheel animations (see issue #2).
 */
var SCROLL_POSITION_CHANGE_REASONS = {
  OBSERVED: 'observed',
  REQUESTED: 'requested'
};

/**
 * Renders tabular data with virtualization along the vertical and horizontal axes.
 * Row heights and column widths must be known ahead of time and specified as properties.
 */

var Grid = function (_PureComponent) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Grid, _PureComponent);

  function Grid(props, context) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Grid);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Grid.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(Grid)).call(this, props, context));

    _this.state = {
      isScrolling: false,
      scrollDirectionHorizontal: __WEBPACK_IMPORTED_MODULE_12__defaultOverscanIndicesGetter__["a" /* SCROLL_DIRECTION_FORWARD */],
      scrollDirectionVertical: __WEBPACK_IMPORTED_MODULE_12__defaultOverscanIndicesGetter__["a" /* SCROLL_DIRECTION_FORWARD */],
      scrollLeft: 0,
      scrollTop: 0
    };

    // Invokes onSectionRendered callback only when start/stop row or column indices change
    _this._onGridRenderedMemoizer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__utils_createCallbackMemoizer__["a" /* default */])();
    _this._onScrollMemoizer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__utils_createCallbackMemoizer__["a" /* default */])(false);

    // Bind functions to instance so they don't lose context when passed around
    _this._debounceScrollEndedCallback = _this._debounceScrollEndedCallback.bind(_this);
    _this._invokeOnGridRenderedHelper = _this._invokeOnGridRenderedHelper.bind(_this);
    _this._onScroll = _this._onScroll.bind(_this);
    _this._setScrollingContainerRef = _this._setScrollingContainerRef.bind(_this);

    _this._columnWidthGetter = _this._wrapSizeGetter(props.columnWidth);
    _this._rowHeightGetter = _this._wrapSizeGetter(props.rowHeight);

    _this._deferredInvalidateColumnIndex = null;
    _this._deferredInvalidateRowIndex = null;
    _this._recomputeScrollLeftFlag = false;
    _this._recomputeScrollTopFlag = false;

    _this._horizontalScrollBarSize = 0;
    _this._verticalScrollBarSize = 0;
    _this._scrollbarPresenceChanged = false;

    var deferredMeasurementCache = props.deferredMeasurementCache;
    var deferredMode = typeof deferredMeasurementCache !== 'undefined';

    _this._columnSizeAndPositionManager = new __WEBPACK_IMPORTED_MODULE_10__utils_ScalingCellSizeAndPositionManager__["a" /* default */]({
      batchAllCells: deferredMode && !deferredMeasurementCache.hasFixedHeight(),
      cellCount: props.columnCount,
      cellSizeGetter: function cellSizeGetter(params) {
        return _this._columnWidthGetter(params);
      },
      estimatedCellSize: _this._getEstimatedColumnSize(props)
    });
    _this._rowSizeAndPositionManager = new __WEBPACK_IMPORTED_MODULE_10__utils_ScalingCellSizeAndPositionManager__["a" /* default */]({
      batchAllCells: deferredMode && !deferredMeasurementCache.hasFixedWidth(),
      cellCount: props.rowCount,
      cellSizeGetter: function cellSizeGetter(params) {
        return _this._rowHeightGetter(params);
      },
      estimatedCellSize: _this._getEstimatedRowSize(props)
    });

    // See defaultCellRangeRenderer() for more information on the usage of these caches
    _this._cellCache = {};
    _this._styleCache = {};
    return _this;
  }

  /**
   * Gets offsets for a given cell and alignment.
   */

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Grid, [{
    key: 'getOffsetForCell',
    value: function getOffsetForCell() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$alignment = _ref.alignment,
          alignment = _ref$alignment === undefined ? this.props.scrollToAlignment : _ref$alignment,
          _ref$columnIndex = _ref.columnIndex,
          columnIndex = _ref$columnIndex === undefined ? this.props.scrollToColumn : _ref$columnIndex,
          _ref$rowIndex = _ref.rowIndex,
          rowIndex = _ref$rowIndex === undefined ? this.props.scrollToRow : _ref$rowIndex;

      var offsetProps = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.props, {
        scrollToAlignment: alignment,
        scrollToColumn: columnIndex,
        scrollToRow: rowIndex
      });

      return {
        scrollLeft: this._getCalculatedScrollLeft(offsetProps),
        scrollTop: this._getCalculatedScrollTop(offsetProps)
      };
    }

    /**
     * This method handles a scroll event originating from an external scroll control.
     * It's an advanced method and should probably not be used unless you're implementing a custom scroll-bar solution.
     */

  }, {
    key: 'handleScrollEvent',
    value: function handleScrollEvent(_ref2) {
      var _ref2$scrollLeft = _ref2.scrollLeft,
          scrollLeftParam = _ref2$scrollLeft === undefined ? 0 : _ref2$scrollLeft,
          _ref2$scrollTop = _ref2.scrollTop,
          scrollTopParam = _ref2$scrollTop === undefined ? 0 : _ref2$scrollTop;

      // On iOS, we can arrive at negative offsets by swiping past the start.
      // To prevent flicker here, we make playing in the negative offset zone cause nothing to happen.
      if (scrollTopParam < 0) {
        return;
      }

      // Prevent pointer events from interrupting a smooth scroll
      this._debounceScrollEnded();

      var _props = this.props,
          autoHeight = _props.autoHeight,
          autoWidth = _props.autoWidth,
          height = _props.height,
          width = _props.width;

      // When this component is shrunk drastically, React dispatches a series of back-to-back scroll events,
      // Gradually converging on a scrollTop that is within the bounds of the new, smaller height.
      // This causes a series of rapid renders that is slow for long lists.
      // We can avoid that by doing some simple bounds checking to ensure that scroll offsets never exceed their bounds.

      var scrollbarSize = this._scrollbarSize;
      var totalRowsHeight = this._rowSizeAndPositionManager.getTotalSize();
      var totalColumnsWidth = this._columnSizeAndPositionManager.getTotalSize();
      var scrollLeft = Math.min(Math.max(0, totalColumnsWidth - width + scrollbarSize), scrollLeftParam);
      var scrollTop = Math.min(Math.max(0, totalRowsHeight - height + scrollbarSize), scrollTopParam);

      // Certain devices (like Apple touchpad) rapid-fire duplicate events.
      // Don't force a re-render if this is the case.
      // The mouse may move faster then the animation frame does.
      // Use requestAnimationFrame to avoid over-updating.
      if (this.state.scrollLeft !== scrollLeft || this.state.scrollTop !== scrollTop) {
        // Track scrolling direction so we can more efficiently overscan rows to reduce empty space around the edges while scrolling.
        // Don't change direction for an axis unless scroll offset has changed.
        var scrollDirectionHorizontal = scrollLeft !== this.state.scrollLeft ? scrollLeft > this.state.scrollLeft ? __WEBPACK_IMPORTED_MODULE_12__defaultOverscanIndicesGetter__["a" /* SCROLL_DIRECTION_FORWARD */] : __WEBPACK_IMPORTED_MODULE_12__defaultOverscanIndicesGetter__["b" /* SCROLL_DIRECTION_BACKWARD */] : this.state.scrollDirectionHorizontal;
        var scrollDirectionVertical = scrollTop !== this.state.scrollTop ? scrollTop > this.state.scrollTop ? __WEBPACK_IMPORTED_MODULE_12__defaultOverscanIndicesGetter__["a" /* SCROLL_DIRECTION_FORWARD */] : __WEBPACK_IMPORTED_MODULE_12__defaultOverscanIndicesGetter__["b" /* SCROLL_DIRECTION_BACKWARD */] : this.state.scrollDirectionVertical;

        var newState = {
          isScrolling: true,
          scrollDirectionHorizontal: scrollDirectionHorizontal,
          scrollDirectionVertical: scrollDirectionVertical,
          scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.OBSERVED
        };

        if (!autoHeight) {
          newState.scrollTop = scrollTop;
        }

        if (!autoWidth) {
          newState.scrollLeft = scrollLeft;
        }

        this.setState(newState);
      }

      this._invokeOnScrollMemoizer({ scrollLeft: scrollLeft, scrollTop: scrollTop, totalColumnsWidth: totalColumnsWidth, totalRowsHeight: totalRowsHeight });
    }

    /**
     * Invalidate Grid size and recompute visible cells.
     * This is a deferred wrapper for recomputeGridSize().
     * It sets a flag to be evaluated on cDM/cDU to avoid unnecessary renders.
     * This method is intended for advanced use-cases like CellMeasurer.
     */
    // @TODO (bvaughn) Add automated test coverage for this.

  }, {
    key: 'invalidateCellSizeAfterRender',
    value: function invalidateCellSizeAfterRender(_ref3) {
      var columnIndex = _ref3.columnIndex,
          rowIndex = _ref3.rowIndex;

      this._deferredInvalidateColumnIndex = typeof this._deferredInvalidateColumnIndex === 'number' ? Math.min(this._deferredInvalidateColumnIndex, columnIndex) : columnIndex;
      this._deferredInvalidateRowIndex = typeof this._deferredInvalidateRowIndex === 'number' ? Math.min(this._deferredInvalidateRowIndex, rowIndex) : rowIndex;
    }

    /**
     * Pre-measure all columns and rows in a Grid.
     * Typically cells are only measured as needed and estimated sizes are used for cells that have not yet been measured.
     * This method ensures that the next call to getTotalSize() returns an exact size (as opposed to just an estimated one).
     */

  }, {
    key: 'measureAllCells',
    value: function measureAllCells() {
      var _props2 = this.props,
          columnCount = _props2.columnCount,
          rowCount = _props2.rowCount;

      this._columnSizeAndPositionManager.getSizeAndPositionOfCell(columnCount - 1);
      this._rowSizeAndPositionManager.getSizeAndPositionOfCell(rowCount - 1);
    }

    /**
     * Forced recompute of row heights and column widths.
     * This function should be called if dynamic column or row sizes have changed but nothing else has.
     * Since Grid only receives :columnCount and :rowCount it has no way of detecting when the underlying data changes.
     */

  }, {
    key: 'recomputeGridSize',
    value: function recomputeGridSize() {
      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref4$columnIndex = _ref4.columnIndex,
          columnIndex = _ref4$columnIndex === undefined ? 0 : _ref4$columnIndex,
          _ref4$rowIndex = _ref4.rowIndex,
          rowIndex = _ref4$rowIndex === undefined ? 0 : _ref4$rowIndex;

      var _props3 = this.props,
          scrollToColumn = _props3.scrollToColumn,
          scrollToRow = _props3.scrollToRow;

      this._columnSizeAndPositionManager.resetCell(columnIndex);
      this._rowSizeAndPositionManager.resetCell(rowIndex);

      // Cell sizes may be determined by a function property.
      // In this case the cDU handler can't know if they changed.
      // Store this flag to let the next cDU pass know it needs to recompute the scroll offset.
      this._recomputeScrollLeftFlag = scrollToColumn >= 0 && columnIndex <= scrollToColumn;
      this._recomputeScrollTopFlag = scrollToRow >= 0 && rowIndex <= scrollToRow;

      // Clear cell cache in case we are scrolling;
      // Invalid row heights likely mean invalid cached content as well.
      this._cellCache = {};
      this._styleCache = {};

      this.forceUpdate();
    }

    /**
     * Ensure column and row are visible.
     */

  }, {
    key: 'scrollToCell',
    value: function scrollToCell(_ref5) {
      var columnIndex = _ref5.columnIndex,
          rowIndex = _ref5.rowIndex;
      var columnCount = this.props.columnCount;

      var props = this.props;

      // Don't adjust scroll offset for single-column grids (eg List, Table).
      // This can cause a funky scroll offset because of the vertical scrollbar width.
      if (columnCount > 1) {
        this._updateScrollLeftForScrollToColumn(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, {
          scrollToColumn: columnIndex
        }));
      }

      this._updateScrollTopForScrollToRow(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, {
        scrollToRow: rowIndex
      }));
    }

    /**
     * Scroll to the specified offset(s).
     * Useful for animating position changes.
     */

  }, {
    key: 'scrollToPosition',
    value: function scrollToPosition() {
      var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          scrollLeft = _ref6.scrollLeft,
          scrollTop = _ref6.scrollTop;

      this._setScrollPosition({ scrollLeft: scrollLeft, scrollTop: scrollTop });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props4 = this.props,
          getScrollbarSize = _props4.getScrollbarSize,
          height = _props4.height,
          scrollLeft = _props4.scrollLeft,
          scrollToColumn = _props4.scrollToColumn,
          scrollTop = _props4.scrollTop,
          scrollToRow = _props4.scrollToRow,
          width = _props4.width;

      // If cell sizes have been invalidated (eg we are using CellMeasurer) then reset cached positions.
      // We must do this at the start of the method as we may calculate and update scroll position below.

      this._handleInvalidatedGridSize();

      // If this component was first rendered server-side, scrollbar size will be undefined.
      // In that event we need to remeasure.
      if (!this._scrollbarSizeMeasured) {
        this._scrollbarSize = getScrollbarSize();
        this._scrollbarSizeMeasured = true;
        this.setState({});
      }

      if (scrollLeft >= 0 || scrollTop >= 0) {
        this._setScrollPosition({ scrollLeft: scrollLeft, scrollTop: scrollTop });
      }

      // Don't update scroll offset if the size is 0; we don't render any cells in this case.
      // Setting a state may cause us to later thing we've updated the offce when we haven't.
      var sizeIsBiggerThanZero = height > 0 && width > 0;
      if (scrollToColumn >= 0 && sizeIsBiggerThanZero) {
        this._updateScrollLeftForScrollToColumn();
      }
      if (scrollToRow >= 0 && sizeIsBiggerThanZero) {
        this._updateScrollTopForScrollToRow();
      }

      // Update onRowsRendered callback
      this._invokeOnGridRenderedHelper();

      // Initialize onScroll callback
      this._invokeOnScrollMemoizer({
        scrollLeft: scrollLeft || 0,
        scrollTop: scrollTop || 0,
        totalColumnsWidth: this._columnSizeAndPositionManager.getTotalSize(),
        totalRowsHeight: this._rowSizeAndPositionManager.getTotalSize()
      });

      this._maybeCallOnScrollbarPresenceChange();
    }

    /**
     * @private
     * This method updates scrollLeft/scrollTop in state for the following conditions:
     * 1) New scroll-to-cell props have been set
     */

  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      var _props5 = this.props,
          autoHeight = _props5.autoHeight,
          autoWidth = _props5.autoWidth,
          columnCount = _props5.columnCount,
          height = _props5.height,
          rowCount = _props5.rowCount,
          scrollToAlignment = _props5.scrollToAlignment,
          scrollToColumn = _props5.scrollToColumn,
          scrollToRow = _props5.scrollToRow,
          width = _props5.width;
      var _state = this.state,
          scrollLeft = _state.scrollLeft,
          scrollPositionChangeReason = _state.scrollPositionChangeReason,
          scrollTop = _state.scrollTop;

      // If cell sizes have been invalidated (eg we are using CellMeasurer) then reset cached positions.
      // We must do this at the start of the method as we may calculate and update scroll position below.

      this._handleInvalidatedGridSize();

      // Handle edge case where column or row count has only just increased over 0.
      // In this case we may have to restore a previously-specified scroll offset.
      // For more info see bvaughn/react-virtualized/issues/218
      var columnOrRowCountJustIncreasedFromZero = columnCount > 0 && prevProps.columnCount === 0 || rowCount > 0 && prevProps.rowCount === 0;

      // Make sure requested changes to :scrollLeft or :scrollTop get applied.
      // Assigning to scrollLeft/scrollTop tells the browser to interrupt any running scroll animations,
      // And to discard any pending async changes to the scroll position that may have happened in the meantime (e.g. on a separate scrolling thread).
      // So we only set these when we require an adjustment of the scroll position.
      // See issue #2 for more information.
      if (scrollPositionChangeReason === SCROLL_POSITION_CHANGE_REASONS.REQUESTED) {
        // @TRICKY :autoHeight and :autoWidth properties instructs Grid to leave :scrollTop and :scrollLeft management to an external HOC (eg WindowScroller).
        // In this case we should avoid checking scrollingContainer.scrollTop and scrollingContainer.scrollLeft since it forces layout/flow.
        if (!autoWidth && scrollLeft >= 0 && (scrollLeft !== prevState.scrollLeft && scrollLeft !== this._scrollingContainer.scrollLeft || columnOrRowCountJustIncreasedFromZero)) {
          this._scrollingContainer.scrollLeft = scrollLeft;
        }
        if (!autoHeight && scrollTop >= 0 && (scrollTop !== prevState.scrollTop && scrollTop !== this._scrollingContainer.scrollTop || columnOrRowCountJustIncreasedFromZero)) {
          this._scrollingContainer.scrollTop = scrollTop;
        }
      }

      // Special case where the previous size was 0:
      // In this case we don't show any windowed cells at all.
      // So we should always recalculate offset afterwards.
      var sizeJustIncreasedFromZero = (prevProps.width === 0 || prevProps.height === 0) && height > 0 && width > 0;

      // Update scroll offsets if the current :scrollToColumn or :scrollToRow values requires it
      // @TODO Do we also need this check or can the one in componentWillUpdate() suffice?
      if (this._recomputeScrollLeftFlag) {
        this._recomputeScrollLeftFlag = false;
        this._updateScrollLeftForScrollToColumn(this.props);
      } else {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__utils_updateScrollIndexHelper__["a" /* default */])({
          cellSizeAndPositionManager: this._columnSizeAndPositionManager,
          previousCellsCount: prevProps.columnCount,
          previousCellSize: prevProps.columnWidth,
          previousScrollToAlignment: prevProps.scrollToAlignment,
          previousScrollToIndex: prevProps.scrollToColumn,
          previousSize: prevProps.width,
          scrollOffset: scrollLeft,
          scrollToAlignment: scrollToAlignment,
          scrollToIndex: scrollToColumn,
          size: width,
          sizeJustIncreasedFromZero: sizeJustIncreasedFromZero,
          updateScrollIndexCallback: function updateScrollIndexCallback(scrollToColumn) {
            return _this2._updateScrollLeftForScrollToColumn(_this2.props);
          }
        });
      }

      if (this._recomputeScrollTopFlag) {
        this._recomputeScrollTopFlag = false;
        this._updateScrollTopForScrollToRow(this.props);
      } else {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__utils_updateScrollIndexHelper__["a" /* default */])({
          cellSizeAndPositionManager: this._rowSizeAndPositionManager,
          previousCellsCount: prevProps.rowCount,
          previousCellSize: prevProps.rowHeight,
          previousScrollToAlignment: prevProps.scrollToAlignment,
          previousScrollToIndex: prevProps.scrollToRow,
          previousSize: prevProps.height,
          scrollOffset: scrollTop,
          scrollToAlignment: scrollToAlignment,
          scrollToIndex: scrollToRow,
          size: height,
          sizeJustIncreasedFromZero: sizeJustIncreasedFromZero,
          updateScrollIndexCallback: function updateScrollIndexCallback(scrollToRow) {
            return _this2._updateScrollTopForScrollToRow(_this2.props);
          }
        });
      }

      // Update onRowsRendered callback if start/stop indices have changed
      this._invokeOnGridRenderedHelper();

      // Changes to :scrollLeft or :scrollTop should also notify :onScroll listeners
      if (scrollLeft !== prevState.scrollLeft || scrollTop !== prevState.scrollTop) {
        var totalRowsHeight = this._rowSizeAndPositionManager.getTotalSize();
        var totalColumnsWidth = this._columnSizeAndPositionManager.getTotalSize();

        this._invokeOnScrollMemoizer({ scrollLeft: scrollLeft, scrollTop: scrollTop, totalColumnsWidth: totalColumnsWidth, totalRowsHeight: totalRowsHeight });
      }

      this._maybeCallOnScrollbarPresenceChange();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var getScrollbarSize = this.props.getScrollbarSize;

      // If this component is being rendered server-side, getScrollbarSize() will return undefined.
      // We handle this case in componentDidMount()

      this._scrollbarSize = getScrollbarSize();
      if (this._scrollbarSize === undefined) {
        this._scrollbarSizeMeasured = false;
        this._scrollbarSize = 0;
      } else {
        this._scrollbarSizeMeasured = true;
      }

      this._calculateChildrenToRender();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this._disablePointerEventsTimeoutId) {
        clearTimeout(this._disablePointerEventsTimeoutId);
      }
    }

    /**
     * @private
     * This method updates scrollLeft/scrollTop in state for the following conditions:
     * 1) Empty content (0 rows or columns)
     * 2) New scroll props overriding the current state
     * 3) Cells-count or cells-size has changed, making previous scroll offsets invalid
     */

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      var _state2 = this.state,
          scrollLeft = _state2.scrollLeft,
          scrollTop = _state2.scrollTop;

      if (nextProps.columnCount === 0 && scrollLeft !== 0 || nextProps.rowCount === 0 && scrollTop !== 0) {
        this._setScrollPosition({
          scrollLeft: 0,
          scrollTop: 0
        });
      } else if (nextProps.scrollLeft !== this.props.scrollLeft || nextProps.scrollTop !== this.props.scrollTop) {
        var newState = {};

        if (nextProps.scrollLeft != null) {
          newState.scrollLeft = nextProps.scrollLeft;
        }
        if (nextProps.scrollTop != null) {
          newState.scrollTop = nextProps.scrollTop;
        }

        this._setScrollPosition(newState);
      }

      if (nextProps.columnWidth !== this.props.columnWidth || nextProps.rowHeight !== this.props.rowHeight) {
        this._styleCache = {};
      }

      this._columnWidthGetter = this._wrapSizeGetter(nextProps.columnWidth);
      this._rowHeightGetter = this._wrapSizeGetter(nextProps.rowHeight);

      this._columnSizeAndPositionManager.configure({
        cellCount: nextProps.columnCount,
        estimatedCellSize: this._getEstimatedColumnSize(nextProps)
      });
      this._rowSizeAndPositionManager.configure({
        cellCount: nextProps.rowCount,
        estimatedCellSize: this._getEstimatedRowSize(nextProps)
      });

      var _props6 = this.props,
          columnCount = _props6.columnCount,
          rowCount = _props6.rowCount;

      // Special case when either cols or rows were 0
      // This would prevent any cells from rendering
      // So we need to reset row scroll if cols changed from 0 (and vice versa)

      if (columnCount === 0 || rowCount === 0) {
        columnCount = 0;
        rowCount = 0;
      }

      // If scrolling is controlled outside this component, clear cache when scrolling stops
      if (nextProps.autoHeight && nextProps.isScrolling === false && this.props.isScrolling === true) {
        this._resetStyleCache();
      }

      // Update scroll offsets if the size or number of cells have changed, invalidating the previous value
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__utils_calculateSizeAndPositionDataAndUpdateScrollOffset__["a" /* default */])({
        cellCount: columnCount,
        cellSize: this.props.columnWidth,
        computeMetadataCallback: function computeMetadataCallback() {
          return _this3._columnSizeAndPositionManager.resetCell(0);
        },
        computeMetadataCallbackProps: nextProps,
        nextCellsCount: nextProps.columnCount,
        nextCellSize: nextProps.columnWidth,
        nextScrollToIndex: nextProps.scrollToColumn,
        scrollToIndex: this.props.scrollToColumn,
        updateScrollOffsetForScrollToIndex: function updateScrollOffsetForScrollToIndex() {
          return _this3._updateScrollLeftForScrollToColumn(nextProps, _this3.state);
        }
      });
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__utils_calculateSizeAndPositionDataAndUpdateScrollOffset__["a" /* default */])({
        cellCount: rowCount,
        cellSize: this.props.rowHeight,
        computeMetadataCallback: function computeMetadataCallback() {
          return _this3._rowSizeAndPositionManager.resetCell(0);
        },
        computeMetadataCallbackProps: nextProps,
        nextCellsCount: nextProps.rowCount,
        nextCellSize: nextProps.rowHeight,
        nextScrollToIndex: nextProps.scrollToRow,
        scrollToIndex: this.props.scrollToRow,
        updateScrollOffsetForScrollToIndex: function updateScrollOffsetForScrollToIndex() {
          return _this3._updateScrollTopForScrollToRow(nextProps, _this3.state);
        }
      });
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      this._calculateChildrenToRender(nextProps, nextState);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props7 = this.props,
          autoContainerWidth = _props7.autoContainerWidth,
          autoHeight = _props7.autoHeight,
          autoWidth = _props7.autoWidth,
          className = _props7.className,
          containerStyle = _props7.containerStyle,
          height = _props7.height,
          id = _props7.id,
          noContentRenderer = _props7.noContentRenderer,
          role = _props7.role,
          style = _props7.style,
          tabIndex = _props7.tabIndex,
          width = _props7.width;

      var isScrolling = this._isScrolling();

      var gridStyle = {
        boxSizing: 'border-box',
        direction: 'ltr',
        height: autoHeight ? 'auto' : height,
        position: 'relative',
        width: autoWidth ? 'auto' : width,
        WebkitOverflowScrolling: 'touch',
        willChange: 'transform'
      };

      var totalColumnsWidth = this._columnSizeAndPositionManager.getTotalSize();
      var totalRowsHeight = this._rowSizeAndPositionManager.getTotalSize();

      // Force browser to hide scrollbars when we know they aren't necessary.
      // Otherwise once scrollbars appear they may not disappear again.
      // For more info see issue #116
      var verticalScrollBarSize = totalRowsHeight > height ? this._scrollbarSize : 0;
      var horizontalScrollBarSize = totalColumnsWidth > width ? this._scrollbarSize : 0;

      if (horizontalScrollBarSize !== this._horizontalScrollBarSize || verticalScrollBarSize !== this._verticalScrollBarSize) {
        this._horizontalScrollBarSize = horizontalScrollBarSize;
        this._verticalScrollBarSize = verticalScrollBarSize;
        this._scrollbarPresenceChanged = true;
      }

      // Also explicitly init styles to 'auto' if scrollbars are required.
      // This works around an obscure edge case where external CSS styles have not yet been loaded,
      // But an initial scroll index of offset is set as an external prop.
      // Without this style, Grid would render the correct range of cells but would NOT update its internal offset.
      // This was originally reported via clauderic/react-infinite-calendar/issues/23
      gridStyle.overflowX = totalColumnsWidth + verticalScrollBarSize <= width ? 'hidden' : 'auto';
      gridStyle.overflowY = totalRowsHeight + horizontalScrollBarSize <= height ? 'hidden' : 'auto';

      var childrenToDisplay = this._childrenToDisplay;

      var showNoContentRenderer = childrenToDisplay.length === 0 && height > 0 && width > 0;

      return __WEBPACK_IMPORTED_MODULE_6_react__["a" /* default */].createElement('div', {
        ref: this._setScrollingContainerRef,
        'aria-label': this.props['aria-label'],
        className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()('ReactVirtualized__Grid', className),
        id: id,
        onScroll: this._onScroll,
        role: role,
        style: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, gridStyle, style),
        tabIndex: tabIndex
      }, childrenToDisplay.length > 0 && __WEBPACK_IMPORTED_MODULE_6_react__["a" /* default */].createElement('div', {
        className: 'ReactVirtualized__Grid__innerScrollContainer',
        style: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
          width: autoContainerWidth ? 'auto' : totalColumnsWidth,
          height: totalRowsHeight,
          maxWidth: totalColumnsWidth,
          maxHeight: totalRowsHeight,
          overflow: 'hidden',
          pointerEvents: isScrolling ? 'none' : '',
          position: 'relative'
        }, containerStyle)
      }, childrenToDisplay), showNoContentRenderer && noContentRenderer());
    }

    /* ---------------------------- Helper methods ---------------------------- */

  }, {
    key: '_calculateChildrenToRender',
    value: function _calculateChildrenToRender() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
      var cellRenderer = props.cellRenderer,
          cellRangeRenderer = props.cellRangeRenderer,
          columnCount = props.columnCount,
          deferredMeasurementCache = props.deferredMeasurementCache,
          height = props.height,
          overscanColumnCount = props.overscanColumnCount,
          overscanIndicesGetter = props.overscanIndicesGetter,
          overscanRowCount = props.overscanRowCount,
          rowCount = props.rowCount,
          width = props.width;
      var scrollDirectionHorizontal = state.scrollDirectionHorizontal,
          scrollDirectionVertical = state.scrollDirectionVertical,
          scrollLeft = state.scrollLeft,
          scrollTop = state.scrollTop;

      var isScrolling = this._isScrolling(props, state);

      this._childrenToDisplay = [];

      // Render only enough columns and rows to cover the visible area of the grid.
      if (height > 0 && width > 0) {
        var visibleColumnIndices = this._columnSizeAndPositionManager.getVisibleCellRange({
          containerSize: width,
          offset: scrollLeft
        });
        var visibleRowIndices = this._rowSizeAndPositionManager.getVisibleCellRange({
          containerSize: height,
          offset: scrollTop
        });

        var horizontalOffsetAdjustment = this._columnSizeAndPositionManager.getOffsetAdjustment({
          containerSize: width,
          offset: scrollLeft
        });
        var verticalOffsetAdjustment = this._rowSizeAndPositionManager.getOffsetAdjustment({
          containerSize: height,
          offset: scrollTop
        });

        // Store for _invokeOnGridRenderedHelper()
        this._renderedColumnStartIndex = visibleColumnIndices.start;
        this._renderedColumnStopIndex = visibleColumnIndices.stop;
        this._renderedRowStartIndex = visibleRowIndices.start;
        this._renderedRowStopIndex = visibleRowIndices.stop;

        var overscanColumnIndices = overscanIndicesGetter({
          direction: 'horizontal',
          cellCount: columnCount,
          overscanCellsCount: overscanColumnCount,
          scrollDirection: scrollDirectionHorizontal,
          startIndex: this._renderedColumnStartIndex,
          stopIndex: this._renderedColumnStopIndex
        });

        var overscanRowIndices = overscanIndicesGetter({
          direction: 'vertical',
          cellCount: rowCount,
          overscanCellsCount: overscanRowCount,
          scrollDirection: scrollDirectionVertical,
          startIndex: this._renderedRowStartIndex,
          stopIndex: this._renderedRowStopIndex
        });

        // Store for _invokeOnGridRenderedHelper()
        this._columnStartIndex = overscanColumnIndices.overscanStartIndex;
        this._columnStopIndex = overscanColumnIndices.overscanStopIndex;
        this._rowStartIndex = overscanRowIndices.overscanStartIndex;
        this._rowStopIndex = overscanRowIndices.overscanStopIndex;

        this._childrenToDisplay = cellRangeRenderer({
          cellCache: this._cellCache,
          cellRenderer: cellRenderer,
          columnSizeAndPositionManager: this._columnSizeAndPositionManager,
          columnStartIndex: this._columnStartIndex,
          columnStopIndex: this._columnStopIndex,
          deferredMeasurementCache: deferredMeasurementCache,
          horizontalOffsetAdjustment: horizontalOffsetAdjustment,
          isScrolling: isScrolling,
          parent: this,
          rowSizeAndPositionManager: this._rowSizeAndPositionManager,
          rowStartIndex: this._rowStartIndex,
          rowStopIndex: this._rowStopIndex,
          scrollLeft: scrollLeft,
          scrollTop: scrollTop,
          styleCache: this._styleCache,
          verticalOffsetAdjustment: verticalOffsetAdjustment,
          visibleColumnIndices: visibleColumnIndices,
          visibleRowIndices: visibleRowIndices
        });
      }
    }

    /**
     * Sets an :isScrolling flag for a small window of time.
     * This flag is used to disable pointer events on the scrollable portion of the Grid.
     * This prevents jerky/stuttery mouse-wheel scrolling.
     */

  }, {
    key: '_debounceScrollEnded',
    value: function _debounceScrollEnded() {
      var scrollingResetTimeInterval = this.props.scrollingResetTimeInterval;

      if (this._disablePointerEventsTimeoutId) {
        clearTimeout(this._disablePointerEventsTimeoutId);
      }

      this._disablePointerEventsTimeoutId = setTimeout(this._debounceScrollEndedCallback, scrollingResetTimeInterval);
    }
  }, {
    key: '_debounceScrollEndedCallback',
    value: function _debounceScrollEndedCallback() {
      this._disablePointerEventsTimeoutId = null;
      this._resetStyleCache();
    }
  }, {
    key: '_getEstimatedColumnSize',
    value: function _getEstimatedColumnSize(props) {
      return typeof props.columnWidth === 'number' ? props.columnWidth : props.estimatedColumnSize;
    }
  }, {
    key: '_getEstimatedRowSize',
    value: function _getEstimatedRowSize(props) {
      return typeof props.rowHeight === 'number' ? props.rowHeight : props.estimatedRowSize;
    }

    /**
     * Check for batched CellMeasurer size invalidations.
     * This will occur the first time one or more previously unmeasured cells are rendered.
     */

  }, {
    key: '_handleInvalidatedGridSize',
    value: function _handleInvalidatedGridSize() {
      if (typeof this._deferredInvalidateColumnIndex === 'number') {
        var columnIndex = this._deferredInvalidateColumnIndex;
        var rowIndex = this._deferredInvalidateRowIndex;

        this._deferredInvalidateColumnIndex = null;
        this._deferredInvalidateRowIndex = null;

        this.recomputeGridSize({ columnIndex: columnIndex, rowIndex: rowIndex });
      }
    }
  }, {
    key: '_invokeOnGridRenderedHelper',
    value: function _invokeOnGridRenderedHelper() {
      var onSectionRendered = this.props.onSectionRendered;

      this._onGridRenderedMemoizer({
        callback: onSectionRendered,
        indices: {
          columnOverscanStartIndex: this._columnStartIndex,
          columnOverscanStopIndex: this._columnStopIndex,
          columnStartIndex: this._renderedColumnStartIndex,
          columnStopIndex: this._renderedColumnStopIndex,
          rowOverscanStartIndex: this._rowStartIndex,
          rowOverscanStopIndex: this._rowStopIndex,
          rowStartIndex: this._renderedRowStartIndex,
          rowStopIndex: this._renderedRowStopIndex
        }
      });
    }
  }, {
    key: '_invokeOnScrollMemoizer',
    value: function _invokeOnScrollMemoizer(_ref7) {
      var _this4 = this;

      var scrollLeft = _ref7.scrollLeft,
          scrollTop = _ref7.scrollTop,
          totalColumnsWidth = _ref7.totalColumnsWidth,
          totalRowsHeight = _ref7.totalRowsHeight;

      this._onScrollMemoizer({
        callback: function callback(_ref8) {
          var scrollLeft = _ref8.scrollLeft,
              scrollTop = _ref8.scrollTop;
          var _props8 = _this4.props,
              height = _props8.height,
              onScroll = _props8.onScroll,
              width = _props8.width;

          onScroll({
            clientHeight: height,
            clientWidth: width,
            scrollHeight: totalRowsHeight,
            scrollLeft: scrollLeft,
            scrollTop: scrollTop,
            scrollWidth: totalColumnsWidth
          });
        },
        indices: {
          scrollLeft: scrollLeft,
          scrollTop: scrollTop
        }
      });
    }
  }, {
    key: '_isScrolling',
    value: function _isScrolling() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;

      // If isScrolling is defined in props, use it to override the value in state
      // This is a performance optimization for WindowScroller + Grid
      return Object.hasOwnProperty.call(props, 'isScrolling') ? props.isScrolling : state.isScrolling;
    }
  }, {
    key: '_maybeCallOnScrollbarPresenceChange',
    value: function _maybeCallOnScrollbarPresenceChange() {
      if (this._scrollbarPresenceChanged) {
        var onScrollbarPresenceChange = this.props.onScrollbarPresenceChange;

        this._scrollbarPresenceChanged = false;

        onScrollbarPresenceChange({
          horizontal: this._horizontalScrollBarSize > 0,
          size: this._scrollbarSize,
          vertical: this._verticalScrollBarSize > 0
        });
      }
    }
  }, {
    key: '_setScrollingContainerRef',
    value: function _setScrollingContainerRef(ref) {
      this._scrollingContainer = ref;
    }
  }, {
    key: '_setScrollPosition',
    value: function _setScrollPosition(_ref9) {
      var scrollLeft = _ref9.scrollLeft,
          scrollTop = _ref9.scrollTop;

      var newState = {
        scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.REQUESTED
      };

      if (scrollLeft >= 0) {
        newState.scrollDirectionHorizontal = scrollLeft > this.state.scrollLeft ? __WEBPACK_IMPORTED_MODULE_12__defaultOverscanIndicesGetter__["a" /* SCROLL_DIRECTION_FORWARD */] : __WEBPACK_IMPORTED_MODULE_12__defaultOverscanIndicesGetter__["b" /* SCROLL_DIRECTION_BACKWARD */];
        newState.scrollLeft = scrollLeft;
      }

      if (scrollTop >= 0) {
        newState.scrollDirectionVertical = scrollTop > this.state.scrollTop ? __WEBPACK_IMPORTED_MODULE_12__defaultOverscanIndicesGetter__["a" /* SCROLL_DIRECTION_FORWARD */] : __WEBPACK_IMPORTED_MODULE_12__defaultOverscanIndicesGetter__["b" /* SCROLL_DIRECTION_BACKWARD */];
        newState.scrollTop = scrollTop;
      }

      if (scrollLeft >= 0 && scrollLeft !== this.state.scrollLeft || scrollTop >= 0 && scrollTop !== this.state.scrollTop) {
        this.setState(newState);
      }
    }
  }, {
    key: '_wrapPropertyGetter',
    value: function _wrapPropertyGetter(value) {
      return typeof value === 'function' ? value : function () {
        return value;
      };
    }
  }, {
    key: '_wrapSizeGetter',
    value: function _wrapSizeGetter(size) {
      return this._wrapPropertyGetter(size);
    }
  }, {
    key: '_getCalculatedScrollLeft',
    value: function _getCalculatedScrollLeft() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
      var columnCount = props.columnCount,
          height = props.height,
          scrollToAlignment = props.scrollToAlignment,
          scrollToColumn = props.scrollToColumn,
          width = props.width;
      var scrollLeft = state.scrollLeft;

      if (scrollToColumn >= 0 && columnCount > 0) {
        var targetIndex = Math.max(0, Math.min(columnCount - 1, scrollToColumn));
        var totalRowsHeight = this._rowSizeAndPositionManager.getTotalSize();
        var scrollBarSize = totalRowsHeight > height ? this._scrollbarSize : 0;

        return this._columnSizeAndPositionManager.getUpdatedOffsetForIndex({
          align: scrollToAlignment,
          containerSize: width - scrollBarSize,
          currentOffset: scrollLeft,
          targetIndex: targetIndex
        });
      }
    }
  }, {
    key: '_updateScrollLeftForScrollToColumn',
    value: function _updateScrollLeftForScrollToColumn() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
      var scrollLeft = state.scrollLeft;

      var calculatedScrollLeft = this._getCalculatedScrollLeft(props, state);

      if (calculatedScrollLeft >= 0 && scrollLeft !== calculatedScrollLeft) {
        this._setScrollPosition({
          scrollLeft: calculatedScrollLeft
        });
      }
    }
  }, {
    key: '_getCalculatedScrollTop',
    value: function _getCalculatedScrollTop() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
      var height = props.height,
          rowCount = props.rowCount,
          scrollToAlignment = props.scrollToAlignment,
          scrollToRow = props.scrollToRow,
          width = props.width;
      var scrollTop = state.scrollTop;

      if (scrollToRow >= 0 && rowCount > 0) {
        var targetIndex = Math.max(0, Math.min(rowCount - 1, scrollToRow));
        var totalColumnsWidth = this._columnSizeAndPositionManager.getTotalSize();
        var scrollBarSize = totalColumnsWidth > width ? this._scrollbarSize : 0;

        return this._rowSizeAndPositionManager.getUpdatedOffsetForIndex({
          align: scrollToAlignment,
          containerSize: height - scrollBarSize,
          currentOffset: scrollTop,
          targetIndex: targetIndex
        });
      }
    }
  }, {
    key: '_resetStyleCache',
    value: function _resetStyleCache() {
      var styleCache = this._styleCache;

      // Reset cell and style caches once scrolling stops.
      // This makes Grid simpler to use (since cells commonly change).
      // And it keeps the caches from growing too large.
      // Performance is most sensitive when a user is scrolling.
      this._cellCache = {};
      this._styleCache = {};

      // Copy over the visible cell styles so avoid unnecessary re-render.
      for (var rowIndex = this._rowStartIndex; rowIndex <= this._rowStopIndex; rowIndex++) {
        for (var columnIndex = this._columnStartIndex; columnIndex <= this._columnStopIndex; columnIndex++) {
          var key = rowIndex + '-' + columnIndex;
          this._styleCache[key] = styleCache[key];
        }
      }

      this.setState({
        isScrolling: false
      });
    }
  }, {
    key: '_updateScrollTopForScrollToRow',
    value: function _updateScrollTopForScrollToRow() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
      var scrollTop = state.scrollTop;

      var calculatedScrollTop = this._getCalculatedScrollTop(props, state);

      if (calculatedScrollTop >= 0 && scrollTop !== calculatedScrollTop) {
        this._setScrollPosition({
          scrollTop: calculatedScrollTop
        });
      }
    }
  }, {
    key: '_onScroll',
    value: function _onScroll(event) {
      // In certain edge-cases React dispatches an onScroll event with an invalid target.scrollLeft / target.scrollTop.
      // This invalid event can be detected by comparing event.target to this component's scrollable DOM element.
      // See issue #404 for more information.
      if (event.target !== this._scrollingContainer) {
        return;
      }

      this.handleScrollEvent(event.target);
    }
  }]);

  return Grid;
}(__WEBPACK_IMPORTED_MODULE_6_react__["b" /* PureComponent */]);

Grid.defaultProps = {
  'aria-label': 'grid',
  cellRangeRenderer: __WEBPACK_IMPORTED_MODULE_14__defaultCellRangeRenderer__["a" /* default */],
  estimatedColumnSize: 100,
  estimatedRowSize: 30,
  getScrollbarSize: __WEBPACK_IMPORTED_MODULE_15_dom_helpers_util_scrollbarSize___default.a,
  noContentRenderer: function noContentRenderer() {
    return null;
  },
  onScroll: function onScroll() {
    return null;
  },
  onScrollbarPresenceChange: function onScrollbarPresenceChange() {
    return null;
  },
  onSectionRendered: function onSectionRendered() {
    return null;
  },
  overscanColumnCount: 0,
  overscanIndicesGetter: __WEBPACK_IMPORTED_MODULE_12__defaultOverscanIndicesGetter__["c" /* default */],
  overscanRowCount: 10,
  role: 'grid',
  scrollingResetTimeInterval: DEFAULT_SCROLLING_RESET_TIME_INTERVAL,
  scrollToAlignment: 'auto',
  scrollToColumn: -1,
  scrollToRow: -1,
  style: {},
  tabIndex: 0
};
/* harmony default export */ __webpack_exports__["a"] = (Grid);
 false ? void 0 : void 0;

/***/ }),

/***/ "D2L2":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

/***/ }),

/***/ "Dd8w":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__("woOf");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),

/***/ "E19O":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AutoSizer__ = __webpack_require__("IjK9");
/* unused harmony reexport default */
/* unused harmony reexport AutoSizer */





/***/ }),

/***/ "EBst":
/***/ (function(module, exports, __webpack_require__) {

!function () {
  "use strict";
  function e() {}function t(t, n) {
    var o,
        r,
        i,
        l,
        a = E;for (l = arguments.length; l-- > 2;) {
      W.push(arguments[l]);
    }n && null != n.children && (W.length || W.push(n.children), delete n.children);while (W.length) {
      if ((r = W.pop()) && void 0 !== r.pop) for (l = r.length; l--;) {
        W.push(r[l]);
      } else "boolean" == typeof r && (r = null), (i = "function" != typeof t) && (null == r ? r = "" : "number" == typeof r ? r += "" : "string" != typeof r && (i = !1)), i && o ? a[a.length - 1] += r : a === E ? a = [r] : a.push(r), o = i;
    }var u = new e();return u.nodeName = t, u.children = a, u.attributes = null == n ? void 0 : n, u.key = null == n ? void 0 : n.key, void 0 !== S.vnode && S.vnode(u), u;
  }function n(e, t) {
    for (var n in t) {
      e[n] = t[n];
    }return e;
  }function o(e, o) {
    return t(e.nodeName, n(n({}, e.attributes), o), arguments.length > 2 ? [].slice.call(arguments, 2) : e.children);
  }function r(e) {
    !e.__d && (e.__d = !0) && 1 == A.push(e) && (S.debounceRendering || P)(i);
  }function i() {
    var e,
        t = A;A = [];while (e = t.pop()) {
      e.__d && k(e);
    }
  }function l(e, t, n) {
    return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && a(e, t.nodeName) : n || e._componentConstructor === t.nodeName;
  }function a(e, t) {
    return e.__n === t || e.nodeName.toLowerCase() === t.toLowerCase();
  }function u(e) {
    var t = n({}, e.attributes);t.children = e.children;var o = e.nodeName.defaultProps;if (void 0 !== o) for (var r in o) {
      void 0 === t[r] && (t[r] = o[r]);
    }return t;
  }function _(e, t) {
    var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);return n.__n = e, n;
  }function p(e) {
    var t = e.parentNode;t && t.removeChild(e);
  }function c(e, t, n, o, r) {
    if ("className" === t && (t = "class"), "key" === t) ;else if ("ref" === t) n && n(null), o && o(e);else if ("class" !== t || r) {
      if ("style" === t) {
        if (o && "string" != typeof o && "string" != typeof n || (e.style.cssText = o || ""), o && "object" == typeof o) {
          if ("string" != typeof n) for (var i in n) {
            i in o || (e.style[i] = "");
          }for (var i in o) {
            e.style[i] = "number" == typeof o[i] && !1 === V.test(i) ? o[i] + "px" : o[i];
          }
        }
      } else if ("dangerouslySetInnerHTML" === t) o && (e.innerHTML = o.__html || "");else if ("o" == t[0] && "n" == t[1]) {
        var l = t !== (t = t.replace(/Capture$/, ""));t = t.toLowerCase().substring(2), o ? n || e.addEventListener(t, f, l) : e.removeEventListener(t, f, l), (e.__l || (e.__l = {}))[t] = o;
      } else if ("list" !== t && "type" !== t && !r && t in e) s(e, t, null == o ? "" : o), null != o && !1 !== o || e.removeAttribute(t);else {
        var a = r && t !== (t = t.replace(/^xlink\:?/, ""));null == o || !1 === o ? a ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof o && (a ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), o) : e.setAttribute(t, o));
      }
    } else e.className = o || "";
  }function s(e, t, n) {
    try {
      e[t] = n;
    } catch (e) {}
  }function f(e) {
    return this.__l[e.type](S.event && S.event(e) || e);
  }function d() {
    var e;while (e = D.pop()) {
      S.afterMount && S.afterMount(e), e.componentDidMount && e.componentDidMount();
    }
  }function h(e, t, n, o, r, i) {
    H++ || (R = null != r && void 0 !== r.ownerSVGElement, j = null != e && !("__preactattr_" in e));var l = m(e, t, n, o, i);return r && l.parentNode !== r && r.appendChild(l), --H || (j = !1, i || d()), l;
  }function m(e, t, n, o, r) {
    var i = e,
        l = R;if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || r) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), b(e, !0))), i.__preactattr_ = !0, i;var u = t.nodeName;if ("function" == typeof u) return U(e, t, n, o);if (R = "svg" === u || "foreignObject" !== u && R, u += "", (!e || !a(e, u)) && (i = _(u, R), e)) {
      while (e.firstChild) {
        i.appendChild(e.firstChild);
      }e.parentNode && e.parentNode.replaceChild(i, e), b(e, !0);
    }var p = i.firstChild,
        c = i.__preactattr_,
        s = t.children;if (null == c) {
      c = i.__preactattr_ = {};for (var f = i.attributes, d = f.length; d--;) {
        c[f[d].name] = f[d].value;
      }
    }return !j && s && 1 === s.length && "string" == typeof s[0] && null != p && void 0 !== p.splitText && null == p.nextSibling ? p.nodeValue != s[0] && (p.nodeValue = s[0]) : (s && s.length || null != p) && v(i, s, n, o, j || null != c.dangerouslySetInnerHTML), g(i, t.attributes, c), R = l, i;
  }function v(e, t, n, o, r) {
    var i,
        a,
        u,
        _,
        c,
        s = e.childNodes,
        f = [],
        d = {},
        h = 0,
        v = 0,
        y = s.length,
        g = 0,
        w = t ? t.length : 0;if (0 !== y) for (var C = 0; C < y; C++) {
      var x = s[C],
          N = x.__preactattr_,
          k = w && N ? x._component ? x._component.__k : N.key : null;null != k ? (h++, d[k] = x) : (N || (void 0 !== x.splitText ? !r || x.nodeValue.trim() : r)) && (f[g++] = x);
    }if (0 !== w) for (var C = 0; C < w; C++) {
      _ = t[C], c = null;var k = _.key;if (null != k) h && void 0 !== d[k] && (c = d[k], d[k] = void 0, h--);else if (!c && v < g) for (i = v; i < g; i++) {
        if (void 0 !== f[i] && l(a = f[i], _, r)) {
          c = a, f[i] = void 0, i === g - 1 && g--, i === v && v++;break;
        }
      }c = m(c, _, n, o), u = s[C], c && c !== e && c !== u && (null == u ? e.appendChild(c) : c === u.nextSibling ? p(u) : e.insertBefore(c, u));
    }if (h) for (var C in d) {
      void 0 !== d[C] && b(d[C], !1);
    }while (v <= g) {
      void 0 !== (c = f[g--]) && b(c, !1);
    }
  }function b(e, t) {
    var n = e._component;n ? L(n) : (null != e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), !1 !== t && null != e.__preactattr_ || p(e), y(e));
  }function y(e) {
    e = e.lastChild;while (e) {
      var t = e.previousSibling;b(e, !0), e = t;
    }
  }function g(e, t, n) {
    var o;for (o in n) {
      t && null != t[o] || null == n[o] || c(e, o, n[o], n[o] = void 0, R);
    }for (o in t) {
      "children" === o || "innerHTML" === o || o in n && t[o] === ("value" === o || "checked" === o ? e[o] : n[o]) || c(e, o, n[o], n[o] = t[o], R);
    }
  }function w(e) {
    var t = e.constructor.name;(I[t] || (I[t] = [])).push(e);
  }function C(e, t, n) {
    var o,
        r = I[e.name];if (e.prototype && e.prototype.render ? (o = new e(t, n), T.call(o, t, n)) : (o = new T(t, n), o.constructor = e, o.render = x), r) for (var i = r.length; i--;) {
      if (r[i].constructor === e) {
        o.__b = r[i].__b, r.splice(i, 1);break;
      }
    }return o;
  }function x(e, t, n) {
    return this.constructor(e, n);
  }function N(e, t, n, o, i) {
    e.__x || (e.__x = !0, (e.__r = t.ref) && delete t.ref, (e.__k = t.key) && delete t.key, !e.base || i ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, o), o && o !== e.context && (e.__c || (e.__c = e.context), e.context = o), e.__p || (e.__p = e.props), e.props = t, e.__x = !1, 0 !== n && (1 !== n && !1 === S.syncComponentUpdates && e.base ? r(e) : k(e, 1, i)), e.__r && e.__r(e));
  }function k(e, t, o, r) {
    if (!e.__x) {
      var i,
          l,
          a,
          _ = e.props,
          p = e.state,
          c = e.context,
          s = e.__p || _,
          f = e.__s || p,
          m = e.__c || c,
          v = e.base,
          y = e.__b,
          g = v || y,
          w = e._component,
          x = !1;if (v && (e.props = s, e.state = f, e.context = m, 2 !== t && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(_, p, c) ? x = !0 : e.componentWillUpdate && e.componentWillUpdate(_, p, c), e.props = _, e.state = p, e.context = c), e.__p = e.__s = e.__c = e.__b = null, e.__d = !1, !x) {
        i = e.render(_, p, c), e.getChildContext && (c = n(n({}, c), e.getChildContext()));var U,
            T,
            M = i && i.nodeName;if ("function" == typeof M) {
          var W = u(i);l = w, l && l.constructor === M && W.key == l.__k ? N(l, W, 1, c, !1) : (U = l, e._component = l = C(M, W, c), l.__b = l.__b || y, l.__u = e, N(l, W, 0, c, !1), k(l, 1, o, !0)), T = l.base;
        } else a = g, U = w, U && (a = e._component = null), (g || 1 === t) && (a && (a._component = null), T = h(a, i, c, o || !v, g && g.parentNode, !0));if (g && T !== g && l !== w) {
          var E = g.parentNode;E && T !== E && (E.replaceChild(T, g), U || (g._component = null, b(g, !1)));
        }if (U && L(U), e.base = T, T && !r) {
          var P = e,
              V = e;while (V = V.__u) {
            (P = V).base = T;
          }T._component = P, T._componentConstructor = P.constructor;
        }
      }if (!v || o ? D.unshift(e) : x || (e.componentDidUpdate && e.componentDidUpdate(s, f, m), S.afterUpdate && S.afterUpdate(e)), null != e.__h) while (e.__h.length) {
        e.__h.pop().call(e);
      }H || r || d();
    }
  }function U(e, t, n, o) {
    var r = e && e._component,
        i = r,
        l = e,
        a = r && e._componentConstructor === t.nodeName,
        _ = a,
        p = u(t);while (r && !_ && (r = r.__u)) {
      _ = r.constructor === t.nodeName;
    }return r && _ && (!o || r._component) ? (N(r, p, 3, n, o), e = r.base) : (i && !a && (L(i), e = l = null), r = C(t.nodeName, p, n), e && !r.__b && (r.__b = e, l = null), N(r, p, 1, n, o), e = r.base, l && e !== l && (l._component = null, b(l, !1))), e;
  }function L(e) {
    S.beforeUnmount && S.beforeUnmount(e);var t = e.base;e.__x = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;var n = e._component;n ? L(n) : t && (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), e.__b = t, p(t), w(e), y(t)), e.__r && e.__r(null);
  }function T(e, t) {
    this.__d = !0, this.context = t, this.props = e, this.state = this.state || {};
  }function M(e, t, n) {
    return h(n, e, {}, !1, t, !1);
  }var S = {},
      W = [],
      E = [],
      P = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout,
      V = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
      A = [],
      D = [],
      H = 0,
      R = !1,
      j = !1,
      I = {};n(T.prototype, { setState: function setState(e, t) {
      var o = this.state;this.__s || (this.__s = n({}, o)), n(o, "function" == typeof e ? e(o, this.props) : e), t && (this.__h = this.__h || []).push(t), r(this);
    }, forceUpdate: function forceUpdate(e) {
      e && (this.__h = this.__h || []).push(e), k(this, 2);
    }, render: function render() {} });var $ = { h: t, createElement: t, cloneElement: o, Component: T, render: M, rerender: i, options: S }; true ? module.exports = $ : self.preact = $;
}();
//# sourceMappingURL=preact.min.js.map

/***/ }),

/***/ "EGZi":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};

/***/ }),

/***/ "EqNh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getDimensions;
/* harmony export (immutable) */ __webpack_exports__["b"] = getPositionOffset;
/* harmony export (immutable) */ __webpack_exports__["c"] = getScrollOffset;
/**
 * Gets the dimensions of the element, accounting for API differences between
 * `window` and other DOM elements.
 */

function getDimensions(element) {
  if (element === window) {
    return {
      height: typeof window.innerHeight === 'number' ? window.innerHeight : 0,
      width: typeof window.innerWidth === 'number' ? window.innerWidth : 0
    };
  }

  var _element$getBoundingC = element.getBoundingClientRect(),
      width = _element$getBoundingC.width,
      height = _element$getBoundingC.height;

  return { width: width, height: height };
}

/**
 * Gets the vertical and horizontal position of an element within its scroll container.
 * Elements that have been “scrolled past” return negative values.
 * Handles edge-case where a user is navigating back (history) from an already-scrolled page.
 * In this case the body’s top or left position will be a negative number and this element’s top or left will be increased (by that amount).
 */
function getPositionOffset(element, container) {
  var scrollOffset = container === window ? { top: 0, left: 0 } : getScrollOffset(container);
  var containerElement = container === window ? document.documentElement : container;
  var elementRect = element.getBoundingClientRect();
  var containerRect = containerElement.getBoundingClientRect();
  return {
    top: elementRect.top + scrollOffset.top - containerRect.top,
    left: elementRect.left + scrollOffset.left - containerRect.left
  };
}

/**
 * Gets the vertical and horizontal scroll amount of the element, accounting for IE compatibility
 * and API differences between `window` and other DOM elements.
 */
function getScrollOffset(element) {
  if (element === window) {
    return {
      top: 'scrollY' in window ? window.scrollY : document.documentElement.scrollTop,
      left: 'scrollX' in window ? window.scrollX : document.documentElement.scrollLeft
    };
  } else {
    return {
      top: element.scrollTop,
      left: element.scrollLeft
    };
  }
}

/***/ }),

/***/ "EqjI":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),

/***/ "FeBl":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.0' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ }),

/***/ "Fm4H":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__InfiniteLoader__ = __webpack_require__("eoCw");
/* unused harmony reexport default */
/* unused harmony reexport InfiniteLoader */





/***/ }),

/***/ "HW6M":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
})();

/***/ }),

/***/ "I82j":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = defaultHeaderRenderer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("AX2D");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SortIndicator__ = __webpack_require__("Iraw");



/**
 * Default table header renderer.
 */
function defaultHeaderRenderer(_ref) {
  var columnData = _ref.columnData,
      dataKey = _ref.dataKey,
      disableSort = _ref.disableSort,
      label = _ref.label,
      sortBy = _ref.sortBy,
      sortDirection = _ref.sortDirection;

  var showSortIndicator = sortBy === dataKey;
  var children = [__WEBPACK_IMPORTED_MODULE_0_react__["a" /* default */].createElement('span', {
    className: 'ReactVirtualized__Table__headerTruncatedText',
    key: 'label',
    title: label
  }, label)];

  if (showSortIndicator) {
    children.push(__WEBPACK_IMPORTED_MODULE_0_react__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_1__SortIndicator__["a" /* default */], {
      key: 'SortIndicator',
      sortDirection: sortDirection
    }));
  }

  return children;
}

/***/ }),

/***/ "Ibhu":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("D2L2");
var toIObject = __webpack_require__("TcQ7");
var arrayIndexOf = __webpack_require__("vFc/")(false);
var IE_PROTO = __webpack_require__("ax3d")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) {
    if (key != IE_PROTO) has(O, key) && result.push(key);
  } // Don't enum bug & hidden keys
  while (names.length > i) {
    if (has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
  }return result;
};

/***/ }),

/***/ "IjK9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("Zx67");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("Zrlr");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("wxAW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("zwoO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("Pf15");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("KSGD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__("AX2D");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__vendor_detectElementResize__ = __webpack_require__("2tPu");









/**
 * Decorator component that automatically adjusts the width and height of a single child.
 * Child component should not be declared as a child but should rather be specified by a `ChildComponent` property.
 * All other properties will be passed through to the child component.
 */

var AutoSizer = function (_PureComponent) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(AutoSizer, _PureComponent);

  function AutoSizer(props) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, AutoSizer);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (AutoSizer.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(AutoSizer)).call(this, props));

    _this.state = {
      height: 0,
      width: 0
    };

    _this._onResize = _this._onResize.bind(_this);
    _this._setRef = _this._setRef.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(AutoSizer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var nonce = this.props.nonce;

      // Delay access of parentNode until mount.
      // This handles edge-cases where the component has already been unmounted before its ref has been set,
      // As well as libraries like react-lite which have a slightly different lifecycle.

      this._parentNode = this._autoSizer.parentNode;

      // Defer requiring resize handler in order to support server-side rendering.
      // See issue #41
      this._detectElementResize = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__vendor_detectElementResize__["a" /* default */])(nonce);
      this._detectElementResize.addResizeListener(this._parentNode, this._onResize);

      this._onResize();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this._detectElementResize) {
        this._detectElementResize.removeResizeListener(this._parentNode, this._onResize);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          disableHeight = _props.disableHeight,
          disableWidth = _props.disableWidth;
      var _state = this.state,
          height = _state.height,
          width = _state.width;

      // Outer div should not force width/height since that may prevent containers from shrinking.
      // Inner component should overflow and use calculated width/height.
      // See issue #68 for more information.

      var outerStyle = { overflow: 'visible' };

      if (!disableHeight) {
        outerStyle.height = 0;
      }

      if (!disableWidth) {
        outerStyle.width = 0;
      }

      /**
       * TODO: Avoid rendering children before the initial measurements have been collected.
       * At best this would just be wasting cycles.
       * Add this check into version 10 though as it could break too many ref callbacks in version 9.
      if (
        height !== 0 &&
        width !== 0
      ) {
        child = children({ height, width })
      }
      */

      return __WEBPACK_IMPORTED_MODULE_6_react__["a" /* default */].createElement('div', {
        ref: this._setRef,
        style: outerStyle
      }, children({ height: height, width: width }));
    }
  }, {
    key: '_onResize',
    value: function _onResize() {
      var _props2 = this.props,
          disableHeight = _props2.disableHeight,
          disableWidth = _props2.disableWidth,
          onResize = _props2.onResize;

      // Guard against AutoSizer component being removed from the DOM immediately after being added.
      // This can result in invalid style values which can result in NaN values if we don't handle them.
      // See issue #150 for more context.

      var height = this._parentNode.offsetHeight || 0;
      var width = this._parentNode.offsetWidth || 0;

      var style = window.getComputedStyle(this._parentNode) || {};
      var paddingLeft = parseInt(style.paddingLeft, 10) || 0;
      var paddingRight = parseInt(style.paddingRight, 10) || 0;
      var paddingTop = parseInt(style.paddingTop, 10) || 0;
      var paddingBottom = parseInt(style.paddingBottom, 10) || 0;

      var newHeight = height - paddingTop - paddingBottom;
      var newWidth = width - paddingLeft - paddingRight;

      if (!disableHeight && this.state.height !== newHeight || !disableWidth && this.state.width !== newWidth) {
        this.setState({
          height: height - paddingTop - paddingBottom,
          width: width - paddingLeft - paddingRight
        });

        onResize({ height: height, width: width });
      }
    }
  }, {
    key: '_setRef',
    value: function _setRef(autoSizer) {
      this._autoSizer = autoSizer;
    }
  }]);

  return AutoSizer;
}(__WEBPACK_IMPORTED_MODULE_6_react__["b" /* PureComponent */]);

AutoSizer.defaultProps = {
  onResize: function onResize() {}
};
/* unused harmony default export */ var _unused_webpack_default_export = (AutoSizer);
 false ? void 0 : void 0;

/***/ }),

/***/ "Iraw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = SortIndicator;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__("HW6M");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("KSGD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("AX2D");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SortDirection__ = __webpack_require__("P5SW");





/**
 * Displayed beside a header to indicate that a Table is currently sorted by this column.
 */
function SortIndicator(_ref) {
  var sortDirection = _ref.sortDirection;

  var classNames = __WEBPACK_IMPORTED_MODULE_0_classnames___default()('ReactVirtualized__Table__sortableHeaderIcon', {
    'ReactVirtualized__Table__sortableHeaderIcon--ASC': sortDirection === __WEBPACK_IMPORTED_MODULE_3__SortDirection__["a" /* default */].ASC,
    'ReactVirtualized__Table__sortableHeaderIcon--DESC': sortDirection === __WEBPACK_IMPORTED_MODULE_3__SortDirection__["a" /* default */].DESC
  });

  return __WEBPACK_IMPORTED_MODULE_2_react__["a" /* default */].createElement('svg', {
    className: classNames,
    width: 18,
    height: 18,
    viewBox: '0 0 24 24'
  }, sortDirection === __WEBPACK_IMPORTED_MODULE_3__SortDirection__["a" /* default */].ASC ? __WEBPACK_IMPORTED_MODULE_2_react__["a" /* default */].createElement('path', { d: 'M7 14l5-5 5 5z' }) : __WEBPACK_IMPORTED_MODULE_2_react__["a" /* default */].createElement('path', { d: 'M7 10l5 5 5-5z' }), __WEBPACK_IMPORTED_MODULE_2_react__["a" /* default */].createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }));
}

 false ? void 0 : void 0;

/***/ }),

/***/ "Isos":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("Dd8w");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("Zx67");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__("Zrlr");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__("wxAW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("zwoO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__("Pf15");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames__ = __webpack_require__("HW6M");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Column__ = __webpack_require__("s9f0");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types__ = __webpack_require__("KSGD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react__ = __webpack_require__("AX2D");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_dom__ = __webpack_require__("AX2D");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Grid__ = __webpack_require__("6YNH");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__defaultRowRenderer__ = __webpack_require__("YGKy");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__defaultHeaderRowRenderer__ = __webpack_require__("5Xac");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__SortDirection__ = __webpack_require__("P5SW");
















/**
 * Table component with fixed headers and virtualized rows for improved performance with large data sets.
 * This component expects explicit width, height, and padding parameters.
 */

var Table = function (_PureComponent) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Table, _PureComponent);

  function Table(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Table);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Table.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(Table)).call(this, props));

    _this.state = {
      scrollbarWidth: 0
    };

    _this._createColumn = _this._createColumn.bind(_this);
    _this._createRow = _this._createRow.bind(_this);
    _this._onScroll = _this._onScroll.bind(_this);
    _this._onSectionRendered = _this._onSectionRendered.bind(_this);
    _this._setRef = _this._setRef.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Table, [{
    key: 'forceUpdateGrid',
    value: function forceUpdateGrid() {
      this.Grid.forceUpdate();
    }

    /** See Grid#getOffsetForCell */

  }, {
    key: 'getOffsetForRow',
    value: function getOffsetForRow(_ref) {
      var alignment = _ref.alignment,
          index = _ref.index;

      var _Grid$getOffsetForCel = this.Grid.getOffsetForCell({
        alignment: alignment,
        rowIndex: index
      }),
          scrollTop = _Grid$getOffsetForCel.scrollTop;

      return scrollTop;
    }

    /** See Grid#measureAllCells */

  }, {
    key: 'measureAllRows',
    value: function measureAllRows() {
      this.Grid.measureAllCells();
    }

    /** See Grid#recomputeGridSize */

  }, {
    key: 'recomputeRowHeights',
    value: function recomputeRowHeights() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      this.Grid.recomputeGridSize({
        rowIndex: index
      });
    }

    /** See Grid#scrollToPosition */

  }, {
    key: 'scrollToPosition',
    value: function scrollToPosition() {
      var scrollTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      this.Grid.scrollToPosition({ scrollTop: scrollTop });
    }

    /** See Grid#scrollToCell */

  }, {
    key: 'scrollToRow',
    value: function scrollToRow() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      this.Grid.scrollToCell({
        columnIndex: 0,
        rowIndex: index
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._setScrollbarWidth();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this._setScrollbarWidth();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          className = _props.className,
          disableHeader = _props.disableHeader,
          gridClassName = _props.gridClassName,
          gridStyle = _props.gridStyle,
          headerHeight = _props.headerHeight,
          headerRowRenderer = _props.headerRowRenderer,
          height = _props.height,
          id = _props.id,
          noRowsRenderer = _props.noRowsRenderer,
          rowClassName = _props.rowClassName,
          rowStyle = _props.rowStyle,
          scrollToIndex = _props.scrollToIndex,
          style = _props.style,
          width = _props.width;
      var scrollbarWidth = this.state.scrollbarWidth;

      var availableRowsHeight = disableHeader ? height : height - headerHeight;

      var rowClass = typeof rowClassName === 'function' ? rowClassName({ index: -1 }) : rowClassName;
      var rowStyleObject = typeof rowStyle === 'function' ? rowStyle({ index: -1 }) : rowStyle;

      // Precompute and cache column styles before rendering rows and columns to speed things up
      this._cachedColumnStyles = [];
      __WEBPACK_IMPORTED_MODULE_9_react__["a" /* default */].Children.toArray(children).forEach(function (column, index) {
        var flexStyles = _this2._getFlexStyleForColumn(column, column.props.style);

        _this2._cachedColumnStyles[index] = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, flexStyles, {
          overflow: 'hidden'
        });
      });

      // Note that we specify :rowCount, :scrollbarWidth, :sortBy, and :sortDirection as properties on Grid even though these have nothing to do with Grid.
      // This is done because Grid is a pure component and won't update unless its properties or state has changed.
      // Any property that should trigger a re-render of Grid then is specified here to avoid a stale display.
      return __WEBPACK_IMPORTED_MODULE_9_react__["a" /* default */].createElement('div', {
        className: __WEBPACK_IMPORTED_MODULE_6_classnames___default()('ReactVirtualized__Table', className),
        id: id,
        role: 'grid',
        style: style
      }, !disableHeader && headerRowRenderer({
        className: __WEBPACK_IMPORTED_MODULE_6_classnames___default()('ReactVirtualized__Table__headerRow', rowClass),
        columns: this._getHeaderColumns(),
        style: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, rowStyleObject, {
          height: headerHeight,
          overflow: 'hidden',
          paddingRight: scrollbarWidth,
          width: width
        })
      }), __WEBPACK_IMPORTED_MODULE_9_react__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_11__Grid__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.props, {
        autoContainerWidth: true,
        className: __WEBPACK_IMPORTED_MODULE_6_classnames___default()('ReactVirtualized__Table__Grid', gridClassName),
        cellRenderer: this._createRow,
        columnWidth: width,
        columnCount: 1,
        height: availableRowsHeight,
        id: undefined,
        noContentRenderer: noRowsRenderer,
        onScroll: this._onScroll,
        onSectionRendered: this._onSectionRendered,
        ref: this._setRef,
        role: 'rowgroup',
        scrollbarWidth: scrollbarWidth,
        scrollToRow: scrollToIndex,
        style: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, gridStyle, {
          overflowX: 'hidden'
        })
      })));
    }
  }, {
    key: '_createColumn',
    value: function _createColumn(_ref2) {
      var column = _ref2.column,
          columnIndex = _ref2.columnIndex,
          isScrolling = _ref2.isScrolling,
          parent = _ref2.parent,
          rowData = _ref2.rowData,
          rowIndex = _ref2.rowIndex;
      var _column$props = column.props,
          cellDataGetter = _column$props.cellDataGetter,
          cellRenderer = _column$props.cellRenderer,
          className = _column$props.className,
          columnData = _column$props.columnData,
          dataKey = _column$props.dataKey,
          id = _column$props.id;

      var cellData = cellDataGetter({ columnData: columnData, dataKey: dataKey, rowData: rowData });
      var renderedCell = cellRenderer({ cellData: cellData, columnData: columnData, columnIndex: columnIndex, dataKey: dataKey, isScrolling: isScrolling, parent: parent, rowData: rowData, rowIndex: rowIndex });

      var style = this._cachedColumnStyles[columnIndex];

      var title = typeof renderedCell === 'string' ? renderedCell : null;

      var a11yProps = {
        role: 'gridcell'
      };

      if (id) {
        a11yProps['aria-describedby'] = id;
      }

      return __WEBPACK_IMPORTED_MODULE_9_react__["a" /* default */].createElement('div', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, a11yProps, {
        key: 'Row' + rowIndex + '-Col' + columnIndex,
        className: __WEBPACK_IMPORTED_MODULE_6_classnames___default()('ReactVirtualized__Table__rowColumn', className),
        style: style,
        title: title
      }), renderedCell);
    }
  }, {
    key: '_createHeader',
    value: function _createHeader(_ref3) {
      var column = _ref3.column,
          index = _ref3.index;
      var _props2 = this.props,
          headerClassName = _props2.headerClassName,
          headerStyle = _props2.headerStyle,
          onHeaderClick = _props2.onHeaderClick,
          sort = _props2.sort,
          sortBy = _props2.sortBy,
          sortDirection = _props2.sortDirection;
      var _column$props2 = column.props,
          dataKey = _column$props2.dataKey,
          disableSort = _column$props2.disableSort,
          headerRenderer = _column$props2.headerRenderer,
          id = _column$props2.id,
          label = _column$props2.label,
          columnData = _column$props2.columnData;

      var sortEnabled = !disableSort && sort;

      var classNames = __WEBPACK_IMPORTED_MODULE_6_classnames___default()('ReactVirtualized__Table__headerColumn', headerClassName, column.props.headerClassName, {
        'ReactVirtualized__Table__sortableHeaderColumn': sortEnabled
      });
      var style = this._getFlexStyleForColumn(column, headerStyle);

      var renderedHeader = headerRenderer({
        columnData: columnData,
        dataKey: dataKey,
        disableSort: disableSort,
        label: label,
        sortBy: sortBy,
        sortDirection: sortDirection
      });

      var a11yProps = {
        role: 'columnheader'
      };

      if (sortEnabled || onHeaderClick) {
        (function () {
          // If this is a sortable header, clicking it should update the table data's sorting.
          var newSortDirection = sortBy !== dataKey || sortDirection === __WEBPACK_IMPORTED_MODULE_14__SortDirection__["a" /* default */].DESC ? __WEBPACK_IMPORTED_MODULE_14__SortDirection__["a" /* default */].ASC : __WEBPACK_IMPORTED_MODULE_14__SortDirection__["a" /* default */].DESC;

          var onClick = function onClick(event) {
            sortEnabled && sort({
              sortBy: dataKey,
              sortDirection: newSortDirection
            });
            onHeaderClick && onHeaderClick({ columnData: columnData, dataKey: dataKey, event: event });
          };

          var onKeyDown = function onKeyDown(event) {
            if (event.key === 'Enter' || event.key === ' ') {
              onClick(event);
            }
          };

          a11yProps['aria-label'] = column.props['aria-label'] || label || dataKey;
          a11yProps.tabIndex = 0;
          a11yProps.onClick = onClick;
          a11yProps.onKeyDown = onKeyDown;
        })();
      }

      if (sortBy === dataKey) {
        a11yProps['aria-sort'] = sortDirection === __WEBPACK_IMPORTED_MODULE_14__SortDirection__["a" /* default */].ASC ? 'ascending' : 'descending';
      }

      if (id) {
        a11yProps.id = id;
      }

      return __WEBPACK_IMPORTED_MODULE_9_react__["a" /* default */].createElement('div', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, a11yProps, {
        key: 'Header-Col' + index,
        className: classNames,
        style: style
      }), renderedHeader);
    }
  }, {
    key: '_createRow',
    value: function _createRow(_ref4) {
      var _this3 = this;

      var index = _ref4.rowIndex,
          isScrolling = _ref4.isScrolling,
          key = _ref4.key,
          parent = _ref4.parent,
          style = _ref4.style;
      var _props3 = this.props,
          children = _props3.children,
          onRowClick = _props3.onRowClick,
          onRowDoubleClick = _props3.onRowDoubleClick,
          onRowMouseOver = _props3.onRowMouseOver,
          onRowMouseOut = _props3.onRowMouseOut,
          rowClassName = _props3.rowClassName,
          rowGetter = _props3.rowGetter,
          rowRenderer = _props3.rowRenderer,
          rowStyle = _props3.rowStyle;
      var scrollbarWidth = this.state.scrollbarWidth;

      var rowClass = typeof rowClassName === 'function' ? rowClassName({ index: index }) : rowClassName;
      var rowStyleObject = typeof rowStyle === 'function' ? rowStyle({ index: index }) : rowStyle;
      var rowData = rowGetter({ index: index });

      var columns = __WEBPACK_IMPORTED_MODULE_9_react__["a" /* default */].Children.toArray(children).map(function (column, columnIndex) {
        return _this3._createColumn({
          column: column,
          columnIndex: columnIndex,
          isScrolling: isScrolling,
          parent: parent,
          rowData: rowData,
          rowIndex: index,
          scrollbarWidth: scrollbarWidth
        });
      });

      var className = __WEBPACK_IMPORTED_MODULE_6_classnames___default()('ReactVirtualized__Table__row', rowClass);
      var flattenedStyle = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, style, rowStyleObject, {
        height: this._getRowHeight(index),
        overflow: 'hidden',
        paddingRight: scrollbarWidth
      });

      return rowRenderer({
        className: className,
        columns: columns,
        index: index,
        isScrolling: isScrolling,
        key: key,
        onRowClick: onRowClick,
        onRowDoubleClick: onRowDoubleClick,
        onRowMouseOver: onRowMouseOver,
        onRowMouseOut: onRowMouseOut,
        rowData: rowData,
        style: flattenedStyle
      });
    }

    /**
     * Determines the flex-shrink, flex-grow, and width values for a cell (header or column).
     */

  }, {
    key: '_getFlexStyleForColumn',
    value: function _getFlexStyleForColumn(column) {
      var customStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var flexValue = column.props.flexGrow + ' ' + column.props.flexShrink + ' ' + column.props.width + 'px';

      var style = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, customStyle, {
        flex: flexValue,
        msFlex: flexValue,
        WebkitFlex: flexValue
      });

      if (column.props.maxWidth) {
        style.maxWidth = column.props.maxWidth;
      }

      if (column.props.minWidth) {
        style.minWidth = column.props.minWidth;
      }

      return style;
    }
  }, {
    key: '_getHeaderColumns',
    value: function _getHeaderColumns() {
      var _this4 = this;

      var _props4 = this.props,
          children = _props4.children,
          disableHeader = _props4.disableHeader;

      var items = disableHeader ? [] : __WEBPACK_IMPORTED_MODULE_9_react__["a" /* default */].Children.toArray(children);

      return items.map(function (column, index) {
        return _this4._createHeader({ column: column, index: index });
      });
    }
  }, {
    key: '_getRowHeight',
    value: function _getRowHeight(rowIndex) {
      var rowHeight = this.props.rowHeight;

      return typeof rowHeight === 'function' ? rowHeight({ index: rowIndex }) : rowHeight;
    }
  }, {
    key: '_onScroll',
    value: function _onScroll(_ref5) {
      var clientHeight = _ref5.clientHeight,
          scrollHeight = _ref5.scrollHeight,
          scrollTop = _ref5.scrollTop;
      var onScroll = this.props.onScroll;

      onScroll({ clientHeight: clientHeight, scrollHeight: scrollHeight, scrollTop: scrollTop });
    }
  }, {
    key: '_onSectionRendered',
    value: function _onSectionRendered(_ref6) {
      var rowOverscanStartIndex = _ref6.rowOverscanStartIndex,
          rowOverscanStopIndex = _ref6.rowOverscanStopIndex,
          rowStartIndex = _ref6.rowStartIndex,
          rowStopIndex = _ref6.rowStopIndex;
      var onRowsRendered = this.props.onRowsRendered;

      onRowsRendered({
        overscanStartIndex: rowOverscanStartIndex,
        overscanStopIndex: rowOverscanStopIndex,
        startIndex: rowStartIndex,
        stopIndex: rowStopIndex
      });
    }
  }, {
    key: '_setRef',
    value: function _setRef(ref) {
      this.Grid = ref;
    }
  }, {
    key: '_setScrollbarWidth',
    value: function _setScrollbarWidth() {
      var Grid = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_react_dom__["d" /* findDOMNode */])(this.Grid);
      var clientWidth = Grid.clientWidth || 0;
      var offsetWidth = Grid.offsetWidth || 0;
      var scrollbarWidth = offsetWidth - clientWidth;

      this.setState({ scrollbarWidth: scrollbarWidth });
    }
  }]);

  return Table;
}(__WEBPACK_IMPORTED_MODULE_9_react__["b" /* PureComponent */]);

Table.defaultProps = {
  disableHeader: false,
  estimatedRowSize: 30,
  headerHeight: 0,
  headerStyle: {},
  noRowsRenderer: function noRowsRenderer() {
    return null;
  },
  onRowsRendered: function onRowsRendered() {
    return null;
  },
  onScroll: function onScroll() {
    return null;
  },
  overscanIndicesGetter: __WEBPACK_IMPORTED_MODULE_11__Grid__["b" /* accessibilityOverscanIndicesGetter */],
  overscanRowCount: 10,
  rowRenderer: __WEBPACK_IMPORTED_MODULE_12__defaultRowRenderer__["a" /* default */],
  headerRowRenderer: __WEBPACK_IMPORTED_MODULE_13__defaultHeaderRowRenderer__["a" /* default */],
  rowStyle: {},
  scrollToAlignment: 'auto',
  scrollToIndex: -1,
  style: {}
};
/* unused harmony default export */ var _unused_webpack_default_export = (Table);
 false ? void 0 : void 0;

/***/ }),

/***/ "JkW7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Fantasy; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("EBst");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_index_scss__ = __webpack_require__("yY49");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Player__ = __webpack_require__("UhGV");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_BtmNav__ = __webpack_require__("UtyL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_TopNav__ = __webpack_require__("pf5n");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Splash__ = __webpack_require__("e1vK");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_localStorage__ = __webpack_require__("fOxH");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var _ref9 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'div',
  { className: 'loading' },
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
    'span',
    null,
    'Loading...'
  )
);

var Fantasy = function (_Component) {
  _inherits(Fantasy, _Component);

  function Fantasy() {
    var _temp, _this, _ret;

    _classCallCheck(this, Fantasy);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      draftName: null,
      loading: true,
      showSplash: true,
      activePage: 'Remaining',
      playersArr: null,
      playersObj: null,
      filterPos: '',
      filterTeam: '',
      remaining: [],
      taken: [],
      team: [],
      pick: 1,
      round: 1,
      leaguePlayers: 12
    }, _this.createDraft = function (name) {
      _this.updateState({
        activePage: 'Remaining',
        draftName: name,
        showSplash: false,
        remaining: _this.state.playersArr.slice(),
        taken: [],
        team: [],
        pick: 1,
        round: 1
      });
    }, _this.loadDraft = function (name, data) {
      _this.setState(_extends({
        draftName: name,
        showSplash: false,
        loading: false,
        activePage: 'Remaining'
      }, data));
    }, _this.changePage = function (_ref) {
      var target = _ref.target;

      _this.setState({
        activePage: target.dataset.page
      });
    }, _this.changePos = function (_ref2) {
      var target = _ref2.target;

      _this.updateState({
        filterPos: target.dataset.pos
      });
      window.scroll(0, 0);
    }, _this.increasePick = function () {
      var _this$state = _this.state,
          pick = _this$state.pick,
          leaguePlayers = _this$state.leaguePlayers;

      var newPick = pick + 1;
      _this.updateState({
        pick: newPick,
        round: 1 + Math.floor(pick / leaguePlayers)
      });
    }, _this.decreasePick = function () {
      var _this$state2 = _this.state,
          pick = _this$state2.pick,
          leaguePlayers = _this$state2.leaguePlayers;

      var newPick = pick === 1 ? 1 : pick - 1;
      _this.updateState({
        pick: newPick,
        round: 1 + Math.floor(newPick / ++leaguePlayers)
      });
    }, _this.addPlayerToTeam = function (_ref3) {
      var target = _ref3.target;
      var name = target.dataset.name;

      _this.updateState({
        team: _this.addPlayer(name, _this.state.team),
        remaining: _this.removePlayer(name, _this.state.remaining)
      });
      _this.increasePick();
    }, _this.addPlayerToTaken = function (_ref4) {
      var target = _ref4.target;
      var name = target.dataset.name;

      _this.updateState({
        taken: _this.addPlayer(name, _this.state.taken),
        remaining: _this.removePlayer(name, _this.state.remaining)
      });
      _this.increasePick();
    }, _this.removePlayerFromTaken = function (_ref5) {
      var target = _ref5.target;
      var name = target.dataset.name;

      _this.updateState({
        taken: _this.removePlayer(name, _this.state.taken),
        remaining: _this.addPlayer(name, _this.state.remaining)
      });
      _this.decreasePick();
    }, _this.removePlayerFromTeam = function (_ref6) {
      var target = _ref6.target;
      var name = target.dataset.name;

      _this.updateState({
        team: _this.removePlayer(name, _this.state.team),
        remaining: _this.addPlayer(name, _this.state.remaining)
      });
      _this.decreasePick();
    }, _this.showSplash = function () {
      _this.setState({
        showSplash: true
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Fantasy.prototype.updateState = function updateState(newState) {
    var _this2 = this;

    this.setState(newState, function () {
      var _state = _this2.state,
          remaining = _state.remaining,
          taken = _state.taken,
          team = _state.team,
          pick = _state.pick,
          round = _state.round;

      __WEBPACK_IMPORTED_MODULE_6__lib_localStorage__["a" /* default */].updateStorage(_this2.state.draftName, {
        remaining: remaining,
        taken: taken,
        team: team,
        pick: pick,
        round: round
      });
    });
  };

  Fantasy.prototype.loadActiveDraft = function loadActiveDraft() {
    var _localStorage$getStor = __WEBPACK_IMPORTED_MODULE_6__lib_localStorage__["a" /* default */].getStorage(),
        activeDraft = _localStorage$getStor.activeDraft,
        drafts = _localStorage$getStor.drafts;

    if (activeDraft && drafts[activeDraft]) {
      this.loadDraft(activeDraft, drafts[activeDraft]);
      return;
    }
    this.setState({
      loading: false
    });
  };

  Fantasy.prototype.filterPos = function filterPos(_ref7) {
    var pos = _ref7.pos;

    return pos === this.state.filterPos;
  };

  Fantasy.prototype.filterTeam = function filterTeam(_ref8) {
    var team = _ref8.team;

    return team === this.state.filterTeam;
  };

  Fantasy.prototype.removePlayer = function removePlayer(name, list) {
    var newList = list.slice();
    newList.splice(list.indexOf(name), 1);
    return newList;
  };

  Fantasy.prototype.addPlayer = function addPlayer(name, list) {
    return [].concat(list, [name]);
  };

  Fantasy.prototype.getFilteredPlayers = function getFilteredPlayers(players) {
    var _this3 = this;

    var _state2 = this.state,
        filterPos = _state2.filterPos,
        filterTeam = _state2.filterTeam,
        playersObj = _state2.playersObj;

    var filters = [];

    if (filterPos) {
      filters[filters.length] = this.filterPos;
    }

    if (filterTeam) {
      filters[filters.length] = this.filterTeam;
    }

    return players.filter(function (name) {
      var player = playersObj[name];
      if (filters.length) {
        return filters.every(function (filter) {
          return filter.call(_this3, player);
        });
      }
      return true;
    }).map(function (name) {
      return playersObj[name];
    }).sort(function (a, b) {
      return a.rank < b.rank ? -1 : a.rank > b.rank ? 1 : 0;
    });
  };

  Fantasy.prototype.componentDidMount = function componentDidMount() {
    var _this4 = this;

    fetch('data/rankings.json').then(function (response) {
      return response.json();
    }).then(function (response) {
      _this4.setState({
        playersArr: response.array.slice(),
        playersObj: response.object
      });
      _this4.loadActiveDraft();
    });
  };

  Fantasy.prototype.getPlayerList = function getPlayerList() {
    switch (this.state.activePage) {
      case 'Team':
        return this.state.team;
      case 'Taken':
        return this.state.taken;
      default:
        return this.state.remaining;
    }
  };

  Fantasy.prototype.render = function render() {
    if (this.state.loading) return _ref9;

    var _state3 = this.state,
        activePage = _state3.activePage,
        showSplash = _state3.showSplash;

    var players = this.getPlayerList();
    var filteredPlayers = this.getFilteredPlayers(players);

    var topNavProps = {
      active: activePage,
      changePage: this.changePage,
      pick: this.state.pick,
      round: this.state.round,
      increasePick: this.increasePick,
      decreasePick: this.decreasePick
    };

    var btmNavProps = {
      changePos: this.changePos,
      pos: this.state.filterPos,
      showSplash: this.showSplash
    };

    var playerListProps = _extends({
      players: filteredPlayers,
      page: this.state.activePage
    }, activePage === 'Remaining' ? {
      add: this.addPlayerToTeam,
      taken: this.addPlayerToTaken,
      pick: this.state.pick
    } : activePage === 'Taken' ? {
      remove: this.removePlayerFromTaken
    } : activePage === 'Team' ? {
      remove: this.removePlayerFromTeam
    } : {});

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
      'div',
      { 'class': 'app' },
      showSplash ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_5__components_Splash__["a" /* default */], { onSubmit: this.createDraft, loadDraft: this.loadDraft }) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
        'div',
        null,
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_4__components_TopNav__["a" /* default */], topNavProps),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_2__components_Player__["a" /* default */], playerListProps),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_3__components_BtmNav__["a" /* default */], btmNavProps)
      )
    );
  };

  return Fantasy;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "K6ED":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("cnlX"), __esModule: true };

/***/ }),

/***/ "KSGD":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (false) {
  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7;

  var isValidElement = function isValidElement(object) {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__("Q4WQ")();
}

/***/ }),

/***/ "KTm4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("Dd8w");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("+6Bu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("Zx67");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__("Zrlr");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__("wxAW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("zwoO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__("Pf15");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types__ = __webpack_require__("KSGD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react__ = __webpack_require__("AX2D");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__CollectionView__ = __webpack_require__("vlsS");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_calculateSizeAndPositionData__ = __webpack_require__("gsj2");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_getUpdatedOffsetForIndex__ = __webpack_require__("LQTL");













/**
 * Renders scattered or non-linear data.
 * Unlike Grid, which renders checkerboard data, Collection can render arbitrarily positioned- even overlapping- data.
 */
var Collection = function (_PureComponent) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Collection, _PureComponent);

  function Collection(props, context) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Collection);

    var _this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Collection.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(Collection)).call(this, props, context));

    _this._cellMetadata = [];
    _this._lastRenderedCellIndices = [];

    // Cell cache during scroll (for perforamnce)
    _this._cellCache = [];

    _this._isScrollingChange = _this._isScrollingChange.bind(_this);
    _this._setCollectionViewRef = _this._setCollectionViewRef.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Collection, [{
    key: 'forceUpdate',
    value: function forceUpdate() {
      if (this._collectionView !== undefined) {
        this._collectionView.forceUpdate();
      }
    }

    /** See Collection#recomputeCellSizesAndPositions */

  }, {
    key: 'recomputeCellSizesAndPositions',
    value: function recomputeCellSizesAndPositions() {
      this._cellCache = [];
      this._collectionView.recomputeCellSizesAndPositions();
    }

    /** React lifecycle methods */

  }, {
    key: 'render',
    value: function render() {
      var props = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(this.props, []);

      return __WEBPACK_IMPORTED_MODULE_8_react__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_9__CollectionView__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
        cellLayoutManager: this,
        isScrollingChange: this._isScrollingChange,
        ref: this._setCollectionViewRef
      }, props));
    }

    /** CellLayoutManager interface */

  }, {
    key: 'calculateSizeAndPositionData',
    value: function calculateSizeAndPositionData() {
      var _props = this.props,
          cellCount = _props.cellCount,
          cellSizeAndPositionGetter = _props.cellSizeAndPositionGetter,
          sectionSize = _props.sectionSize;

      var data = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__utils_calculateSizeAndPositionData__["a" /* default */])({
        cellCount: cellCount,
        cellSizeAndPositionGetter: cellSizeAndPositionGetter,
        sectionSize: sectionSize
      });

      this._cellMetadata = data.cellMetadata;
      this._sectionManager = data.sectionManager;
      this._height = data.height;
      this._width = data.width;
    }

    /**
     * Returns the most recently rendered set of cell indices.
     */

  }, {
    key: 'getLastRenderedIndices',
    value: function getLastRenderedIndices() {
      return this._lastRenderedCellIndices;
    }

    /**
     * Calculates the minimum amount of change from the current scroll position to ensure the specified cell is (fully) visible.
     */

  }, {
    key: 'getScrollPositionForCell',
    value: function getScrollPositionForCell(_ref) {
      var align = _ref.align,
          cellIndex = _ref.cellIndex,
          height = _ref.height,
          scrollLeft = _ref.scrollLeft,
          scrollTop = _ref.scrollTop,
          width = _ref.width;
      var cellCount = this.props.cellCount;

      if (cellIndex >= 0 && cellIndex < cellCount) {
        var cellMetadata = this._cellMetadata[cellIndex];

        scrollLeft = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__utils_getUpdatedOffsetForIndex__["a" /* default */])({
          align: align,
          cellOffset: cellMetadata.x,
          cellSize: cellMetadata.width,
          containerSize: width,
          currentOffset: scrollLeft,
          targetIndex: cellIndex
        });

        scrollTop = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__utils_getUpdatedOffsetForIndex__["a" /* default */])({
          align: align,
          cellOffset: cellMetadata.y,
          cellSize: cellMetadata.height,
          containerSize: height,
          currentOffset: scrollTop,
          targetIndex: cellIndex
        });
      }

      return {
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
      };
    }
  }, {
    key: 'getTotalSize',
    value: function getTotalSize() {
      return {
        height: this._height,
        width: this._width
      };
    }
  }, {
    key: 'cellRenderers',
    value: function cellRenderers(_ref2) {
      var _this2 = this;

      var height = _ref2.height,
          isScrolling = _ref2.isScrolling,
          width = _ref2.width,
          x = _ref2.x,
          y = _ref2.y;
      var _props2 = this.props,
          cellGroupRenderer = _props2.cellGroupRenderer,
          cellRenderer = _props2.cellRenderer;

      // Store for later calls to getLastRenderedIndices()

      this._lastRenderedCellIndices = this._sectionManager.getCellIndices({
        height: height,
        width: width,
        x: x,
        y: y
      });

      return cellGroupRenderer({
        cellCache: this._cellCache,
        cellRenderer: cellRenderer,
        cellSizeAndPositionGetter: function cellSizeAndPositionGetter(_ref3) {
          var index = _ref3.index;
          return _this2._sectionManager.getCellMetadata({ index: index });
        },
        indices: this._lastRenderedCellIndices,
        isScrolling: isScrolling
      });
    }
  }, {
    key: '_isScrollingChange',
    value: function _isScrollingChange(isScrolling) {
      if (!isScrolling) {
        this._cellCache = [];
      }
    }
  }, {
    key: '_setCollectionViewRef',
    value: function _setCollectionViewRef(ref) {
      this._collectionView = ref;
    }
  }]);

  return Collection;
}(__WEBPACK_IMPORTED_MODULE_8_react__["b" /* PureComponent */]);

Collection.defaultProps = {
  'aria-label': 'grid',
  cellGroupRenderer: defaultCellGroupRenderer
};
/* unused harmony default export */ var _unused_webpack_default_export = (Collection);
 false ? void 0 : void 0;

function defaultCellGroupRenderer(_ref4) {
  var cellCache = _ref4.cellCache,
      cellRenderer = _ref4.cellRenderer,
      cellSizeAndPositionGetter = _ref4.cellSizeAndPositionGetter,
      indices = _ref4.indices,
      isScrolling = _ref4.isScrolling;

  return indices.map(function (index) {
    var cellMetadata = cellSizeAndPositionGetter({ index: index });

    var cellRendererProps = {
      index: index,
      isScrolling: isScrolling,
      key: index,
      style: {
        height: cellMetadata.height,
        left: cellMetadata.x,
        position: 'absolute',
        top: cellMetadata.y,
        width: cellMetadata.width
      }
    };

    // Avoid re-creating cells while scrolling.
    // This can lead to the same cell being created many times and can cause performance issues for "heavy" cells.
    // If a scroll is in progress- cache and reuse cells.
    // This cache will be thrown away once scrolling complets.
    if (isScrolling) {
      if (!(index in cellCache)) {
        cellCache[index] = cellRenderer(cellRendererProps);
      }

      return cellCache[index];
    } else {
      return cellRenderer(cellRendererProps);
    }
  }).filter(function (renderedCell) {
    return !!renderedCell;
  });
}

/***/ }),

/***/ "Kh4W":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("dSzd");

/***/ }),

/***/ "Kh5d":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__("sB3e");
var $getPrototypeOf = __webpack_require__("PzxK");

__webpack_require__("uqUo")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});

/***/ }),

/***/ "LKZe":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("NpIQ");
var createDesc = __webpack_require__("X8DO");
var toIObject = __webpack_require__("TcQ7");
var toPrimitive = __webpack_require__("MmMw");
var has = __webpack_require__("D2L2");
var IE8_DOM_DEFINE = __webpack_require__("SfB7");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("+E39") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) {/* empty */}
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),

/***/ "LOuX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__("Zrlr");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__("wxAW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);



/**
 * Just-in-time calculates and caches size and position information for a collection of cells.
 */
var CellSizeAndPositionManager = function () {
  function CellSizeAndPositionManager(_ref) {
    var _ref$batchAllCells = _ref.batchAllCells,
        batchAllCells = _ref$batchAllCells === undefined ? false : _ref$batchAllCells,
        cellCount = _ref.cellCount,
        cellSizeGetter = _ref.cellSizeGetter,
        estimatedCellSize = _ref.estimatedCellSize;

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, CellSizeAndPositionManager);

    this._batchAllCells = batchAllCells;
    this._cellSizeGetter = cellSizeGetter;
    this._cellCount = cellCount;
    this._estimatedCellSize = estimatedCellSize;

    // Cache of size and position data for cells, mapped by cell index.
    // Note that invalid values may exist in this map so only rely on cells up to this._lastMeasuredIndex
    this._cellSizeAndPositionData = {};

    // Measurements for cells up to this index can be trusted; cells afterward should be estimated.
    this._lastMeasuredIndex = -1;

    // Used in deferred mode to track which cells have been queued for measurement.
    this._lastBatchedIndex = -1;
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(CellSizeAndPositionManager, [{
    key: 'areOffsetsAdjusted',
    value: function areOffsetsAdjusted() {
      return false;
    }
  }, {
    key: 'configure',
    value: function configure(_ref2) {
      var cellCount = _ref2.cellCount,
          estimatedCellSize = _ref2.estimatedCellSize;

      this._cellCount = cellCount;
      this._estimatedCellSize = estimatedCellSize;
    }
  }, {
    key: 'getCellCount',
    value: function getCellCount() {
      return this._cellCount;
    }
  }, {
    key: 'getEstimatedCellSize',
    value: function getEstimatedCellSize() {
      return this._estimatedCellSize;
    }
  }, {
    key: 'getLastMeasuredIndex',
    value: function getLastMeasuredIndex() {
      return this._lastMeasuredIndex;
    }
  }, {
    key: 'getOffsetAdjustment',
    value: function getOffsetAdjustment(_ref3) {
      var containerSize = _ref3.containerSize,
          offset = _ref3.offset;

      return 0;
    }

    /**
     * This method returns the size and position for the cell at the specified index.
     * It just-in-time calculates (or used cached values) for cells leading up to the index.
     */

  }, {
    key: 'getSizeAndPositionOfCell',
    value: function getSizeAndPositionOfCell(index) {
      if (index < 0 || index >= this._cellCount) {
        throw Error('Requested index ' + index + ' is outside of range 0..' + this._cellCount);
      }

      if (index > this._lastMeasuredIndex) {
        var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell();
        var _offset = lastMeasuredCellSizeAndPosition.offset + lastMeasuredCellSizeAndPosition.size;

        for (var i = this._lastMeasuredIndex + 1; i <= index; i++) {
          var _size = this._cellSizeGetter({ index: i });

          // undefined or NaN probably means a logic error in the size getter.
          // null means we're using CellMeasurer and haven't yet measured a given index.
          if (_size === undefined || isNaN(_size)) {
            throw Error('Invalid size returned for cell ' + i + ' of value ' + _size);
          } else if (_size === null) {
            this._cellSizeAndPositionData[i] = {
              offset: _offset,
              size: 0
            };

            this._lastBatchedIndex = index;
          } else {
            this._cellSizeAndPositionData[i] = {
              offset: _offset,
              size: _size
            };

            _offset += _size;

            this._lastMeasuredIndex = index;
          }
        }
      }

      return this._cellSizeAndPositionData[index];
    }
  }, {
    key: 'getSizeAndPositionOfLastMeasuredCell',
    value: function getSizeAndPositionOfLastMeasuredCell() {
      return this._lastMeasuredIndex >= 0 ? this._cellSizeAndPositionData[this._lastMeasuredIndex] : {
        offset: 0,
        size: 0
      };
    }

    /**
     * Total size of all cells being measured.
     * This value will be completely estimated initially.
     * As cells as measured the estimate will be updated.
     */

  }, {
    key: 'getTotalSize',
    value: function getTotalSize() {
      var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell();

      return lastMeasuredCellSizeAndPosition.offset + lastMeasuredCellSizeAndPosition.size + (this._cellCount - this._lastMeasuredIndex - 1) * this._estimatedCellSize;
    }

    /**
     * Determines a new offset that ensures a certain cell is visible, given the current offset.
     * If the cell is already visible then the current offset will be returned.
     * If the current offset is too great or small, it will be adjusted just enough to ensure the specified index is visible.
     *
     * @param align Desired alignment within container; one of "auto" (default), "start", or "end"
     * @param containerSize Size (width or height) of the container viewport
     * @param currentOffset Container's current (x or y) offset
     * @param totalSize Total size (width or height) of all cells
     * @return Offset to use to ensure the specified cell is visible
     */

  }, {
    key: 'getUpdatedOffsetForIndex',
    value: function getUpdatedOffsetForIndex(_ref4) {
      var _ref4$align = _ref4.align,
          align = _ref4$align === undefined ? 'auto' : _ref4$align,
          containerSize = _ref4.containerSize,
          currentOffset = _ref4.currentOffset,
          targetIndex = _ref4.targetIndex;

      if (containerSize <= 0) {
        return 0;
      }

      var datum = this.getSizeAndPositionOfCell(targetIndex);
      var maxOffset = datum.offset;
      var minOffset = maxOffset - containerSize + datum.size;

      var idealOffset = void 0;

      switch (align) {
        case 'start':
          idealOffset = maxOffset;
          break;
        case 'end':
          idealOffset = minOffset;
          break;
        case 'center':
          idealOffset = maxOffset - (containerSize - datum.size) / 2;
          break;
        default:
          idealOffset = Math.max(minOffset, Math.min(maxOffset, currentOffset));
          break;
      }

      var totalSize = this.getTotalSize();

      return Math.max(0, Math.min(totalSize - containerSize, idealOffset));
    }
  }, {
    key: 'getVisibleCellRange',
    value: function getVisibleCellRange(params) {
      // Advanced use-cases (eg CellMeasurer) require batched measurements to determine accurate sizes.
      // eg we can't know a row's height without measuring the height of all columns within that row.
      if (this._batchAllCells) {
        return {
          start: 0,
          stop: this._cellCount - 1
        };
      }

      var containerSize = params.containerSize,
          offset = params.offset;

      var totalSize = this.getTotalSize();

      if (totalSize === 0) {
        return {};
      }

      var maxOffset = offset + containerSize;
      var start = this._findNearestCell(offset);

      var datum = this.getSizeAndPositionOfCell(start);
      offset = datum.offset + datum.size;

      var stop = start;

      while (offset < maxOffset && stop < this._cellCount - 1) {
        stop++;

        offset += this.getSizeAndPositionOfCell(stop).size;
      }

      return {
        start: start,
        stop: stop
      };
    }

    /**
     * Clear all cached values for cells after the specified index.
     * This method should be called for any cell that has changed its size.
     * It will not immediately perform any calculations; they'll be performed the next time getSizeAndPositionOfCell() is called.
     */

  }, {
    key: 'resetCell',
    value: function resetCell(index) {
      this._lastMeasuredIndex = Math.min(this._lastMeasuredIndex, index - 1);
    }
  }, {
    key: '_binarySearch',
    value: function _binarySearch(_ref5) {
      var high = _ref5.high,
          low = _ref5.low,
          offset = _ref5.offset;

      var middle = void 0;
      var currentOffset = void 0;

      while (low <= high) {
        middle = low + Math.floor((high - low) / 2);
        currentOffset = this.getSizeAndPositionOfCell(middle).offset;

        if (currentOffset === offset) {
          return middle;
        } else if (currentOffset < offset) {
          low = middle + 1;
        } else if (currentOffset > offset) {
          high = middle - 1;
        }
      }

      if (low > 0) {
        return low - 1;
      }
    }
  }, {
    key: '_exponentialSearch',
    value: function _exponentialSearch(_ref6) {
      var index = _ref6.index,
          offset = _ref6.offset;

      var interval = 1;

      while (index < this._cellCount && this.getSizeAndPositionOfCell(index).offset < offset) {
        index += interval;
        interval *= 2;
      }

      return this._binarySearch({
        high: Math.min(index, this._cellCount - 1),
        low: Math.floor(index / 2),
        offset: offset
      });
    }

    /**
     * Searches for the cell (index) nearest the specified offset.
     *
     * If no exact match is found the next lowest cell index will be returned.
     * This allows partially visible cells (with offsets just before/above the fold) to be visible.
     */

  }, {
    key: '_findNearestCell',
    value: function _findNearestCell(offset) {
      if (isNaN(offset)) {
        throw Error('Invalid offset ' + offset + ' specified');
      }

      // Our search algorithms find the nearest match at or below the specified offset.
      // So make sure the offset is at least 0 or no match will be found.
      offset = Math.max(0, offset);

      var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell();
      var lastMeasuredIndex = Math.max(0, this._lastMeasuredIndex);

      if (lastMeasuredCellSizeAndPosition.offset >= offset) {
        // If we've already measured cells within this range just use a binary search as it's faster.
        return this._binarySearch({
          high: lastMeasuredIndex,
          low: 0,
          offset: offset
        });
      } else {
        // If we haven't yet measured this high, fallback to an exponential search with an inner binary search.
        // The exponential search avoids pre-computing sizes for the full set of cells as a binary search would.
        // The overall complexity for this approach is O(log n).
        return this._exponentialSearch({
          index: lastMeasuredIndex,
          offset: offset
        });
      }
    }
  }]);

  return CellSizeAndPositionManager;
}();

/* harmony default export */ __webpack_exports__["a"] = (CellSizeAndPositionManager);

/***/ }),

/***/ "LQTL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getUpdatedOffsetForIndex;
/**
 * Determines a new offset that ensures a certain cell is visible, given the current offset.
 * If the cell is already visible then the current offset will be returned.
 * If the current offset is too great or small, it will be adjusted just enough to ensure the specified index is visible.
 *
 * @param align Desired alignment within container; one of "auto" (default), "start", or "end"
 * @param cellOffset Offset (x or y) position for cell
 * @param cellSize Size (width or height) of cell
 * @param containerSize Total size (width or height) of the container
 * @param currentOffset Container's current (x or y) offset
 * @return Offset to use to ensure the specified cell is visible
 */
function getUpdatedOffsetForIndex(_ref) {
  var _ref$align = _ref.align,
      align = _ref$align === undefined ? 'auto' : _ref$align,
      cellOffset = _ref.cellOffset,
      cellSize = _ref.cellSize,
      containerSize = _ref.containerSize,
      currentOffset = _ref.currentOffset;

  var maxOffset = cellOffset;
  var minOffset = maxOffset - containerSize + cellSize;

  switch (align) {
    case 'start':
      return maxOffset;
    case 'end':
      return minOffset;
    case 'center':
      return maxOffset - (containerSize - cellSize) / 2;
    default:
      return Math.max(minOffset, Math.min(maxOffset, currentOffset));
  }
}

/***/ }),

/***/ "M6a0":
/***/ (function(module, exports) {



/***/ }),

/***/ "MU5D":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("R9M2");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),

/***/ "MVOw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createCallbackMemoizer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__("fZjL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);

/**
 * Helper utility that updates the specified callback whenever any of the specified indices have changed.
 */
function createCallbackMemoizer() {
  var requireAllKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  var cachedIndices = {};

  return function (_ref) {
    var callback = _ref.callback,
        indices = _ref.indices;

    var keys = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(indices);
    var allInitialized = !requireAllKeys || keys.every(function (key) {
      var value = indices[key];
      return Array.isArray(value) ? value.length > 0 : value >= 0;
    });
    var indexChanged = keys.length !== __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(cachedIndices).length || keys.some(function (key) {
      var cachedValue = cachedIndices[key];
      var value = indices[key];

      return Array.isArray(value) ? cachedValue.join(',') !== value.join(',') : cachedValue !== value;
    });

    cachedIndices = indices;

    if (allInitialized && indexChanged) {
      callback(indices);
    }
  };
}

/***/ }),

/***/ "MmMw":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("EqjI");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),

/***/ "NpIQ":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),

/***/ "O4g8":
/***/ (function(module, exports) {

module.exports = true;

/***/ }),

/***/ "ON07":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("EqjI");
var document = __webpack_require__("7KvD").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

/***/ }),

/***/ "OYls":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("crlp")('asyncIterator');

/***/ }),

/***/ "Oh5E":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DEFAULT_MAX_SCROLL_SIZE */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("+6Bu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("Zrlr");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("wxAW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CellSizeAndPositionManager__ = __webpack_require__("LOuX");





/**
 * Browsers have scroll offset limitations (eg Chrome stops scrolling at ~33.5M pixels where as Edge tops out at ~1.5M pixels).
 * After a certain position, the browser won't allow the user to scroll further (even via JavaScript scroll offset adjustments).
 * This util picks a lower ceiling for max size and artificially adjusts positions within to make it transparent for users.
 */
var DEFAULT_MAX_SCROLL_SIZE = 1500000;

/**
 * Extends CellSizeAndPositionManager and adds scaling behavior for lists that are too large to fit within a browser's native limits.
 */

var ScalingCellSizeAndPositionManager = function () {
  function ScalingCellSizeAndPositionManager(_ref) {
    var _ref$maxScrollSize = _ref.maxScrollSize,
        maxScrollSize = _ref$maxScrollSize === undefined ? DEFAULT_MAX_SCROLL_SIZE : _ref$maxScrollSize,
        params = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ['maxScrollSize']);

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, ScalingCellSizeAndPositionManager);

    // Favor composition over inheritance to simplify IE10 support
    this._cellSizeAndPositionManager = new __WEBPACK_IMPORTED_MODULE_3__CellSizeAndPositionManager__["a" /* default */](params);
    this._maxScrollSize = maxScrollSize;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(ScalingCellSizeAndPositionManager, [{
    key: 'areOffsetsAdjusted',
    value: function areOffsetsAdjusted() {
      return this._cellSizeAndPositionManager.getTotalSize() > this._maxScrollSize;
    }
  }, {
    key: 'configure',
    value: function configure(params) {
      this._cellSizeAndPositionManager.configure(params);
    }
  }, {
    key: 'getCellCount',
    value: function getCellCount() {
      return this._cellSizeAndPositionManager.getCellCount();
    }
  }, {
    key: 'getEstimatedCellSize',
    value: function getEstimatedCellSize() {
      return this._cellSizeAndPositionManager.getEstimatedCellSize();
    }
  }, {
    key: 'getLastMeasuredIndex',
    value: function getLastMeasuredIndex() {
      return this._cellSizeAndPositionManager.getLastMeasuredIndex();
    }

    /**
     * Number of pixels a cell at the given position (offset) should be shifted in order to fit within the scaled container.
     * The offset passed to this function is scaled (safe) as well.
     */

  }, {
    key: 'getOffsetAdjustment',
    value: function getOffsetAdjustment(_ref2) {
      var containerSize = _ref2.containerSize,
          offset = _ref2.offset;

      var totalSize = this._cellSizeAndPositionManager.getTotalSize();
      var safeTotalSize = this.getTotalSize();
      var offsetPercentage = this._getOffsetPercentage({
        containerSize: containerSize,
        offset: offset,
        totalSize: safeTotalSize
      });

      return Math.round(offsetPercentage * (safeTotalSize - totalSize));
    }
  }, {
    key: 'getSizeAndPositionOfCell',
    value: function getSizeAndPositionOfCell(index) {
      return this._cellSizeAndPositionManager.getSizeAndPositionOfCell(index);
    }
  }, {
    key: 'getSizeAndPositionOfLastMeasuredCell',
    value: function getSizeAndPositionOfLastMeasuredCell() {
      return this._cellSizeAndPositionManager.getSizeAndPositionOfLastMeasuredCell();
    }

    /** See CellSizeAndPositionManager#getTotalSize */

  }, {
    key: 'getTotalSize',
    value: function getTotalSize() {
      return Math.min(this._maxScrollSize, this._cellSizeAndPositionManager.getTotalSize());
    }

    /** See CellSizeAndPositionManager#getUpdatedOffsetForIndex */

  }, {
    key: 'getUpdatedOffsetForIndex',
    value: function getUpdatedOffsetForIndex(_ref3) {
      var _ref3$align = _ref3.align,
          align = _ref3$align === undefined ? 'auto' : _ref3$align,
          containerSize = _ref3.containerSize,
          currentOffset = _ref3.currentOffset,
          targetIndex = _ref3.targetIndex,
          totalSize = _ref3.totalSize;

      currentOffset = this._safeOffsetToOffset({
        containerSize: containerSize,
        offset: currentOffset
      });

      var offset = this._cellSizeAndPositionManager.getUpdatedOffsetForIndex({
        align: align,
        containerSize: containerSize,
        currentOffset: currentOffset,
        targetIndex: targetIndex,
        totalSize: totalSize
      });

      return this._offsetToSafeOffset({
        containerSize: containerSize,
        offset: offset
      });
    }

    /** See CellSizeAndPositionManager#getVisibleCellRange */

  }, {
    key: 'getVisibleCellRange',
    value: function getVisibleCellRange(_ref4) {
      var containerSize = _ref4.containerSize,
          offset = _ref4.offset;

      offset = this._safeOffsetToOffset({
        containerSize: containerSize,
        offset: offset
      });

      return this._cellSizeAndPositionManager.getVisibleCellRange({
        containerSize: containerSize,
        offset: offset
      });
    }
  }, {
    key: 'resetCell',
    value: function resetCell(index) {
      this._cellSizeAndPositionManager.resetCell(index);
    }
  }, {
    key: '_getOffsetPercentage',
    value: function _getOffsetPercentage(_ref5) {
      var containerSize = _ref5.containerSize,
          offset = _ref5.offset,
          totalSize = _ref5.totalSize;

      return totalSize <= containerSize ? 0 : offset / (totalSize - containerSize);
    }
  }, {
    key: '_offsetToSafeOffset',
    value: function _offsetToSafeOffset(_ref6) {
      var containerSize = _ref6.containerSize,
          offset = _ref6.offset;

      var totalSize = this._cellSizeAndPositionManager.getTotalSize();
      var safeTotalSize = this.getTotalSize();

      if (totalSize === safeTotalSize) {
        return offset;
      } else {
        var offsetPercentage = this._getOffsetPercentage({
          containerSize: containerSize,
          offset: offset,
          totalSize: totalSize
        });

        return Math.round(offsetPercentage * (safeTotalSize - containerSize));
      }
    }
  }, {
    key: '_safeOffsetToOffset',
    value: function _safeOffsetToOffset(_ref7) {
      var containerSize = _ref7.containerSize,
          offset = _ref7.offset;

      var totalSize = this._cellSizeAndPositionManager.getTotalSize();
      var safeTotalSize = this.getTotalSize();

      if (totalSize === safeTotalSize) {
        return offset;
      } else {
        var offsetPercentage = this._getOffsetPercentage({
          containerSize: containerSize,
          offset: offset,
          totalSize: safeTotalSize
        });

        return Math.round(offsetPercentage * (totalSize - containerSize));
      }
    }
  }]);

  return ScalingCellSizeAndPositionManager;
}();

/* harmony default export */ __webpack_exports__["a"] = (ScalingCellSizeAndPositionManager);

/***/ }),

/***/ "OvRC":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("oM7Q"), __esModule: true };

/***/ }),

/***/ "OzLw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = defaultCellRenderer;


/**
 * Default cell renderer that displays an attribute as a simple string
 * You should override the column's cellRenderer if your data is some other type of object.
 */
function defaultCellRenderer(_ref) {
  var cellData = _ref.cellData,
      columnData = _ref.columnData,
      columnIndex = _ref.columnIndex,
      dataKey = _ref.dataKey,
      isScrolling = _ref.isScrolling,
      rowData = _ref.rowData,
      rowIndex = _ref.rowIndex;

  if (cellData == null) {
    return '';
  } else {
    return String(cellData);
  }
}

/***/ }),

/***/ "P5SW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var SortDirection = {
  /**
   * Sort items in ascending order.
   * This means arranging from the lowest value to the highest (e.g. a-z, 0-9).
   */
  ASC: 'ASC',

  /**
   * Sort items in descending order.
   * This means arranging from the highest value to the lowest (e.g. z-a, 9-0).
   */
  DESC: 'DESC'
};

/* harmony default export */ __webpack_exports__["a"] = (SortDirection);

/***/ }),

/***/ "PIMb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SCROLL_DIRECTION_BACKWARD */
/* unused harmony export SCROLL_DIRECTION_FORWARD */
/* unused harmony export SCROLL_DIRECTION_HORIZONTAL */
/* unused harmony export SCROLL_DIRECTION_VERTICAL */
/* harmony export (immutable) */ __webpack_exports__["a"] = defaultOverscanIndicesGetter;
var SCROLL_DIRECTION_BACKWARD = -1;
var SCROLL_DIRECTION_FORWARD = 1;

var SCROLL_DIRECTION_HORIZONTAL = 'horizontal';
var SCROLL_DIRECTION_VERTICAL = 'vertical';
/**
 * Calculates the number of cells to overscan before and after a specified range.
 * This function ensures that overscanning doesn't exceed the available cells.
 *
 * @param direction One of SCROLL_DIRECTION_HORIZONTAL or SCROLL_DIRECTION_VERTICAL
 * @param cellCount Number of rows or columns in the current axis
 * @param scrollDirection One of SCROLL_DIRECTION_BACKWARD or SCROLL_DIRECTION_FORWARD
 * @param overscanCellsCount Maximum number of cells to over-render in either direction
 * @param startIndex Begin of range of visible cells
 * @param stopIndex End of range of visible cells
 */
function defaultOverscanIndicesGetter(_ref) {
  var direction = _ref.direction,
      cellCount = _ref.cellCount,
      overscanCellsCount = _ref.overscanCellsCount,
      scrollDirection = _ref.scrollDirection,
      startIndex = _ref.startIndex,
      stopIndex = _ref.stopIndex;

  var overscanStartIndex = void 0;
  var overscanStopIndex = void 0;

  // Make sure we render at least 1 cell extra before and after (except near boundaries)
  // This is necessary in order to support keyboard navigation (TAB/SHIFT+TAB) in some cases
  // For more info see issues #625
  overscanCellsCount = Math.max(1, overscanCellsCount);

  switch (scrollDirection) {
    case SCROLL_DIRECTION_FORWARD:
      overscanStartIndex = startIndex - 1;
      overscanStopIndex = stopIndex + overscanCellsCount;
      break;
    case SCROLL_DIRECTION_BACKWARD:
      overscanStartIndex = startIndex - overscanCellsCount;
      overscanStopIndex = stopIndex + 1;
      break;
  }

  return {
    overscanStartIndex: Math.max(0, overscanStartIndex),
    overscanStopIndex: Math.min(cellCount - 1, overscanStopIndex)
  };
}

/***/ }),

/***/ "Pf15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__("kiBT");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__("OvRC");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__("pFYg");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),

/***/ "PzxK":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("D2L2");
var toObject = __webpack_require__("sB3e");
var IE_PROTO = __webpack_require__("ax3d")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  }return O instanceof Object ? ObjectProto : null;
};

/***/ }),

/***/ "Q4WQ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__("e6+Q");
var invariant = __webpack_require__("cxPT");
var ReactPropTypesSecret = __webpack_require__("gt/O");

module.exports = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/***/ }),

/***/ "QRG4":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("UuGF");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),

/***/ "QWe/":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("crlp")('observable');

/***/ }),

/***/ "R4wc":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("kM2E");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("To3L") });

/***/ }),

/***/ "R9M2":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

/***/ }),

/***/ "RPLV":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("7KvD").document;
module.exports = document && document.documentElement;

/***/ }),

/***/ "RY/4":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("R9M2");
var TAG = __webpack_require__("dSzd")('toStringTag');
// ES3 wrong here
var ARG = cof(function () {
  return arguments;
}()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function tryGet(it, key) {
  try {
    return it[key];
  } catch (e) {/* empty */}
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
  // @@toStringTag case
  : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
  // builtinTag case
  : ARG ? cof(O)
  // ES3 arguments fallback
  : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),

/***/ "RpJk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("Dd8w");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("+6Bu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("Zx67");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__("Zrlr");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__("wxAW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("zwoO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__("Pf15");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types__ = __webpack_require__("KSGD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react__ = __webpack_require__("AX2D");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__CellMeasurerCacheDecorator__ = __webpack_require__("pgj2");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Grid__ = __webpack_require__("6YNH");












var SCROLLBAR_SIZE_BUFFER = 20;

/**
 * Renders 1, 2, or 4 Grids depending on configuration.
 * A main (body) Grid will always be rendered.
 * Optionally, 1-2 Grids for sticky header rows will also be rendered.
 * If no sticky columns, only 1 sticky header Grid will be rendered.
 * If sticky columns, 2 sticky header Grids will be rendered.
 */

var MultiGrid = function (_PureComponent) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(MultiGrid, _PureComponent);

  function MultiGrid(props, context) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, MultiGrid);

    var _this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (MultiGrid.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(MultiGrid)).call(this, props, context));

    _this.state = {
      scrollLeft: 0,
      scrollTop: 0,
      scrollbarSize: 0,
      showHorizontalScrollbar: false,
      showVerticalScrollbar: false
    };

    _this._deferredInvalidateColumnIndex = null;
    _this._deferredInvalidateRowIndex = null;

    _this._bottomLeftGridRef = _this._bottomLeftGridRef.bind(_this);
    _this._bottomRightGridRef = _this._bottomRightGridRef.bind(_this);
    _this._cellRendererBottomLeftGrid = _this._cellRendererBottomLeftGrid.bind(_this);
    _this._cellRendererBottomRightGrid = _this._cellRendererBottomRightGrid.bind(_this);
    _this._cellRendererTopRightGrid = _this._cellRendererTopRightGrid.bind(_this);
    _this._columnWidthRightGrid = _this._columnWidthRightGrid.bind(_this);
    _this._onScroll = _this._onScroll.bind(_this);
    _this._onScrollbarPresenceChange = _this._onScrollbarPresenceChange.bind(_this);
    _this._onScrollLeft = _this._onScrollLeft.bind(_this);
    _this._onScrollTop = _this._onScrollTop.bind(_this);
    _this._rowHeightBottomGrid = _this._rowHeightBottomGrid.bind(_this);
    _this._topLeftGridRef = _this._topLeftGridRef.bind(_this);
    _this._topRightGridRef = _this._topRightGridRef.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(MultiGrid, [{
    key: 'forceUpdateGrids',
    value: function forceUpdateGrids() {
      this._bottomLeftGrid && this._bottomLeftGrid.forceUpdate();
      this._bottomRightGrid && this._bottomRightGrid.forceUpdate();
      this._topLeftGrid && this._topLeftGrid.forceUpdate();
      this._topRightGrid && this._topRightGrid.forceUpdate();
    }

    /** See Grid#invalidateCellSizeAfterRender */

  }, {
    key: 'invalidateCellSizeAfterRender',
    value: function invalidateCellSizeAfterRender() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$columnIndex = _ref.columnIndex,
          columnIndex = _ref$columnIndex === undefined ? 0 : _ref$columnIndex,
          _ref$rowIndex = _ref.rowIndex,
          rowIndex = _ref$rowIndex === undefined ? 0 : _ref$rowIndex;

      this._deferredInvalidateColumnIndex = typeof this._deferredInvalidateColumnIndex === 'number' ? Math.min(this._deferredInvalidateColumnIndex, columnIndex) : columnIndex;
      this._deferredInvalidateRowIndex = typeof this._deferredInvalidateRowIndex === 'number' ? Math.min(this._deferredInvalidateRowIndex, rowIndex) : rowIndex;
    }

    /** See Grid#measureAllCells */

  }, {
    key: 'measureAllCells',
    value: function measureAllCells() {
      this._bottomLeftGrid && this._bottomLeftGrid.measureAllCells();
      this._bottomRightGrid && this._bottomRightGrid.measureAllCells();
      this._topLeftGrid && this._topLeftGrid.measureAllCells();
      this._topRightGrid && this._topRightGrid.measureAllCells();
    }

    /** See Grid#recomputeGridSize */

  }, {
    key: 'recomputeGridSize',
    value: function recomputeGridSize() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$columnIndex = _ref2.columnIndex,
          columnIndex = _ref2$columnIndex === undefined ? 0 : _ref2$columnIndex,
          _ref2$rowIndex = _ref2.rowIndex,
          rowIndex = _ref2$rowIndex === undefined ? 0 : _ref2$rowIndex;

      var _props = this.props,
          fixedColumnCount = _props.fixedColumnCount,
          fixedRowCount = _props.fixedRowCount;

      var adjustedColumnIndex = Math.max(0, columnIndex - fixedColumnCount);
      var adjustedRowIndex = Math.max(0, rowIndex - fixedRowCount);

      this._bottomLeftGrid && this._bottomLeftGrid.recomputeGridSize({
        columnIndex: columnIndex,
        rowIndex: adjustedRowIndex
      });
      this._bottomRightGrid && this._bottomRightGrid.recomputeGridSize({
        columnIndex: adjustedColumnIndex,
        rowIndex: adjustedRowIndex
      });
      this._topLeftGrid && this._topLeftGrid.recomputeGridSize({
        columnIndex: columnIndex,
        rowIndex: rowIndex
      });
      this._topRightGrid && this._topRightGrid.recomputeGridSize({
        columnIndex: adjustedColumnIndex,
        rowIndex: rowIndex
      });

      this._leftGridWidth = null;
      this._topGridHeight = null;
      this._maybeCalculateCachedStyles(null, this.props, null, this.state);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props2 = this.props,
          scrollLeft = _props2.scrollLeft,
          scrollTop = _props2.scrollTop;

      if (scrollLeft > 0 || scrollTop > 0) {
        var newState = {};

        if (scrollLeft > 0) {
          newState.scrollLeft = scrollLeft;
        }

        if (scrollTop > 0) {
          newState.scrollTop = scrollTop;
        }

        this.setState(newState);
      }
      this._handleInvalidatedGridSize();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      this._handleInvalidatedGridSize();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props3 = this.props,
          deferredMeasurementCache = _props3.deferredMeasurementCache,
          fixedColumnCount = _props3.fixedColumnCount,
          fixedRowCount = _props3.fixedRowCount;

      this._maybeCalculateCachedStyles(null, this.props, null, this.state);

      if (deferredMeasurementCache) {
        this._deferredMeasurementCacheBottomLeftGrid = fixedRowCount > 0 ? new __WEBPACK_IMPORTED_MODULE_9__CellMeasurerCacheDecorator__["a" /* default */]({
          cellMeasurerCache: deferredMeasurementCache,
          columnIndexOffset: 0,
          rowIndexOffset: fixedRowCount
        }) : deferredMeasurementCache;

        this._deferredMeasurementCacheBottomRightGrid = fixedColumnCount > 0 || fixedRowCount > 0 ? new __WEBPACK_IMPORTED_MODULE_9__CellMeasurerCacheDecorator__["a" /* default */]({
          cellMeasurerCache: deferredMeasurementCache,
          columnIndexOffset: fixedColumnCount,
          rowIndexOffset: fixedRowCount
        }) : deferredMeasurementCache;

        this._deferredMeasurementCacheTopRightGrid = fixedColumnCount > 0 ? new __WEBPACK_IMPORTED_MODULE_9__CellMeasurerCacheDecorator__["a" /* default */]({
          cellMeasurerCache: deferredMeasurementCache,
          columnIndexOffset: fixedColumnCount,
          rowIndexOffset: 0
        }) : deferredMeasurementCache;
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps, nextState) {
      var _props4 = this.props,
          columnWidth = _props4.columnWidth,
          fixedColumnCount = _props4.fixedColumnCount,
          fixedRowCount = _props4.fixedRowCount,
          rowHeight = _props4.rowHeight;

      if (columnWidth !== nextProps.columnWidth || fixedColumnCount !== nextProps.fixedColumnCount) {
        this._leftGridWidth = null;
      }

      if (fixedRowCount !== nextProps.fixedRowCount || rowHeight !== nextProps.rowHeight) {
        this._topGridHeight = null;
      }

      if (nextProps.scrollLeft !== this.props.scrollLeft || nextProps.scrollTop !== this.props.scrollTop) {
        var newState = {};

        if (nextProps.scrollLeft != null && nextProps.scrollLeft >= 0) {
          newState.scrollLeft = nextProps.scrollLeft;
        }

        if (nextProps.scrollTop != null && nextProps.scrollTop >= 0) {
          newState.scrollTop = nextProps.scrollTop;
        }

        this.setState(newState);
      }

      this._maybeCalculateCachedStyles(this.props, nextProps, this.state, nextState);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props5 = this.props,
          onScroll = _props5.onScroll,
          onSectionRendered = _props5.onSectionRendered,
          scrollLeftProp = _props5.scrollLeft,
          scrollToColumn = _props5.scrollToColumn,
          scrollTopProp = _props5.scrollTop,
          scrollToRow = _props5.scrollToRow,
          rest = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_props5, ['onScroll', 'onSectionRendered', 'scrollLeft', 'scrollToColumn', 'scrollTop', 'scrollToRow']);

      // Don't render any of our Grids if there are no cells.
      // This mirrors what Grid does,
      // And prevents us from recording inaccurage measurements when used with CellMeasurer.


      if (this.props.width === 0 || this.props.height === 0) {
        return null;
      }

      // scrollTop and scrollLeft props are explicitly filtered out and ignored

      var _state = this.state,
          scrollLeft = _state.scrollLeft,
          scrollTop = _state.scrollTop;

      return __WEBPACK_IMPORTED_MODULE_8_react__["a" /* default */].createElement('div', { style: this._containerOuterStyle }, __WEBPACK_IMPORTED_MODULE_8_react__["a" /* default */].createElement('div', { style: this._containerTopStyle }, this._renderTopLeftGrid(rest), this._renderTopRightGrid(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, rest, {
        onScroll: onScroll,
        scrollLeft: scrollLeft
      }))), __WEBPACK_IMPORTED_MODULE_8_react__["a" /* default */].createElement('div', { style: this._containerBottomStyle }, this._renderBottomLeftGrid(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, rest, {
        onScroll: onScroll,
        scrollTop: scrollTop
      })), this._renderBottomRightGrid(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, rest, {
        onScroll: onScroll,
        onSectionRendered: onSectionRendered,
        scrollLeft: scrollLeft,
        scrollToColumn: scrollToColumn,
        scrollToRow: scrollToRow,
        scrollTop: scrollTop
      }))));
    }
  }, {
    key: '_bottomLeftGridRef',
    value: function _bottomLeftGridRef(ref) {
      this._bottomLeftGrid = ref;
    }
  }, {
    key: '_bottomRightGridRef',
    value: function _bottomRightGridRef(ref) {
      this._bottomRightGrid = ref;
    }
  }, {
    key: '_cellRendererBottomLeftGrid',
    value: function _cellRendererBottomLeftGrid(_ref3) {
      var rowIndex = _ref3.rowIndex,
          rest = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_ref3, ['rowIndex']);

      var _props6 = this.props,
          cellRenderer = _props6.cellRenderer,
          fixedRowCount = _props6.fixedRowCount,
          rowCount = _props6.rowCount;

      if (rowIndex === rowCount - fixedRowCount) {
        return __WEBPACK_IMPORTED_MODULE_8_react__["a" /* default */].createElement('div', {
          key: rest.key,
          style: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, rest.style, {
            height: SCROLLBAR_SIZE_BUFFER
          })
        });
      } else {
        return cellRenderer(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, rest, {
          parent: this,
          rowIndex: rowIndex + fixedRowCount
        }));
      }
    }
  }, {
    key: '_cellRendererBottomRightGrid',
    value: function _cellRendererBottomRightGrid(_ref4) {
      var columnIndex = _ref4.columnIndex,
          rowIndex = _ref4.rowIndex,
          rest = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_ref4, ['columnIndex', 'rowIndex']);

      var _props7 = this.props,
          cellRenderer = _props7.cellRenderer,
          fixedColumnCount = _props7.fixedColumnCount,
          fixedRowCount = _props7.fixedRowCount;

      return cellRenderer(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, rest, {
        columnIndex: columnIndex + fixedColumnCount,
        parent: this,
        rowIndex: rowIndex + fixedRowCount
      }));
    }
  }, {
    key: '_cellRendererTopRightGrid',
    value: function _cellRendererTopRightGrid(_ref5) {
      var columnIndex = _ref5.columnIndex,
          rest = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_ref5, ['columnIndex']);

      var _props8 = this.props,
          cellRenderer = _props8.cellRenderer,
          columnCount = _props8.columnCount,
          fixedColumnCount = _props8.fixedColumnCount;

      if (columnIndex === columnCount - fixedColumnCount) {
        return __WEBPACK_IMPORTED_MODULE_8_react__["a" /* default */].createElement('div', {
          key: rest.key,
          style: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, rest.style, {
            width: SCROLLBAR_SIZE_BUFFER
          })
        });
      } else {
        return cellRenderer(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, rest, {
          columnIndex: columnIndex + fixedColumnCount,
          parent: this
        }));
      }
    }
  }, {
    key: '_columnWidthRightGrid',
    value: function _columnWidthRightGrid(_ref6) {
      var index = _ref6.index;
      var _props9 = this.props,
          columnCount = _props9.columnCount,
          fixedColumnCount = _props9.fixedColumnCount,
          columnWidth = _props9.columnWidth;
      var _state2 = this.state,
          scrollbarSize = _state2.scrollbarSize,
          showHorizontalScrollbar = _state2.showHorizontalScrollbar;

      // An extra cell is added to the count
      // This gives the smaller Grid extra room for offset,
      // In case the main (bottom right) Grid has a scrollbar
      // If no scrollbar, the extra space is overflow:hidden anyway

      if (showHorizontalScrollbar && index === columnCount - fixedColumnCount) {
        return scrollbarSize;
      }

      return typeof columnWidth === 'function' ? columnWidth({ index: index + fixedColumnCount }) : columnWidth;
    }
  }, {
    key: '_getBottomGridHeight',
    value: function _getBottomGridHeight(props) {
      var height = props.height;

      var topGridHeight = this._getTopGridHeight(props);

      return height - topGridHeight;
    }
  }, {
    key: '_getLeftGridWidth',
    value: function _getLeftGridWidth(props) {
      var fixedColumnCount = props.fixedColumnCount,
          columnWidth = props.columnWidth;

      if (this._leftGridWidth == null) {
        if (typeof columnWidth === 'function') {
          var leftGridWidth = 0;

          for (var index = 0; index < fixedColumnCount; index++) {
            leftGridWidth += columnWidth({ index: index });
          }

          this._leftGridWidth = leftGridWidth;
        } else {
          this._leftGridWidth = columnWidth * fixedColumnCount;
        }
      }

      return this._leftGridWidth;
    }
  }, {
    key: '_getRightGridWidth',
    value: function _getRightGridWidth(props) {
      var width = props.width;

      var leftGridWidth = this._getLeftGridWidth(props);

      return width - leftGridWidth;
    }
  }, {
    key: '_getTopGridHeight',
    value: function _getTopGridHeight(props) {
      var fixedRowCount = props.fixedRowCount,
          rowHeight = props.rowHeight;

      if (this._topGridHeight == null) {
        if (typeof rowHeight === 'function') {
          var topGridHeight = 0;

          for (var index = 0; index < fixedRowCount; index++) {
            topGridHeight += rowHeight({ index: index });
          }

          this._topGridHeight = topGridHeight;
        } else {
          this._topGridHeight = rowHeight * fixedRowCount;
        }
      }

      return this._topGridHeight;
    }
  }, {
    key: '_handleInvalidatedGridSize',
    value: function _handleInvalidatedGridSize() {
      if (typeof this._deferredInvalidateColumnIndex === 'number') {
        var columnIndex = this._deferredInvalidateColumnIndex;
        var rowIndex = this._deferredInvalidateRowIndex;

        this._deferredInvalidateColumnIndex = null;
        this._deferredInvalidateRowIndex = null;

        this.recomputeGridSize({
          columnIndex: columnIndex,
          rowIndex: rowIndex
        });
        this.forceUpdate();
      }
    }

    /**
     * Avoid recreating inline styles each render; this bypasses Grid's shallowCompare.
     * This method recalculates styles only when specific props change.
     */

  }, {
    key: '_maybeCalculateCachedStyles',
    value: function _maybeCalculateCachedStyles(prevProps, props, prevState, state) {
      var columnWidth = props.columnWidth,
          enableFixedColumnScroll = props.enableFixedColumnScroll,
          enableFixedRowScroll = props.enableFixedRowScroll,
          height = props.height,
          fixedColumnCount = props.fixedColumnCount,
          fixedRowCount = props.fixedRowCount,
          rowHeight = props.rowHeight,
          style = props.style,
          styleBottomLeftGrid = props.styleBottomLeftGrid,
          styleBottomRightGrid = props.styleBottomRightGrid,
          styleTopLeftGrid = props.styleTopLeftGrid,
          styleTopRightGrid = props.styleTopRightGrid,
          width = props.width;

      var firstRender = !prevProps;
      var sizeChange = firstRender || height !== prevProps.height || width !== prevProps.width;
      var leftSizeChange = firstRender || columnWidth !== prevProps.columnWidth || fixedColumnCount !== prevProps.fixedColumnCount;
      var topSizeChange = firstRender || fixedRowCount !== prevProps.fixedRowCount || rowHeight !== prevProps.rowHeight;

      if (firstRender || sizeChange || style !== prevProps.style) {
        this._containerOuterStyle = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
          height: height,
          overflow: 'visible', // Let :focus outline show through
          width: width
        }, style);
      }

      if (firstRender || sizeChange || topSizeChange) {
        this._containerTopStyle = {
          height: this._getTopGridHeight(props),
          position: 'relative',
          width: width
        };

        this._containerBottomStyle = {
          height: height - this._getTopGridHeight(props),
          overflow: 'visible', // Let :focus outline show through
          position: 'relative',
          width: width
        };
      }

      if (firstRender || styleBottomLeftGrid !== prevProps.styleBottomLeftGrid) {
        this._bottomLeftGridStyle = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
          left: 0,
          overflowX: 'hidden',
          overflowY: enableFixedColumnScroll ? 'auto' : 'hidden',
          position: 'absolute'
        }, styleBottomLeftGrid);
      }

      if (firstRender || leftSizeChange || styleBottomRightGrid !== prevProps.styleBottomRightGrid) {
        this._bottomRightGridStyle = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
          left: this._getLeftGridWidth(props),
          position: 'absolute'
        }, styleBottomRightGrid);
      }

      if (firstRender || styleTopLeftGrid !== prevProps.styleTopLeftGrid) {
        this._topLeftGridStyle = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
          left: 0,
          overflowX: 'hidden',
          overflowY: 'hidden',
          position: 'absolute',
          top: 0
        }, styleTopLeftGrid);
      }

      if (firstRender || leftSizeChange || styleTopRightGrid !== prevProps.styleTopRightGrid) {
        this._topRightGridStyle = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
          left: this._getLeftGridWidth(props),
          overflowX: enableFixedRowScroll ? 'auto' : 'hidden',
          overflowY: 'hidden',
          position: 'absolute',
          top: 0
        }, styleTopRightGrid);
      }
    }
  }, {
    key: '_onScroll',
    value: function _onScroll(scrollInfo) {
      var scrollLeft = scrollInfo.scrollLeft,
          scrollTop = scrollInfo.scrollTop;

      this.setState({
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
      });
      var onScroll = this.props.onScroll;
      if (onScroll) {
        onScroll(scrollInfo);
      }
    }
  }, {
    key: '_onScrollbarPresenceChange',
    value: function _onScrollbarPresenceChange(_ref7) {
      var horizontal = _ref7.horizontal,
          size = _ref7.size,
          vertical = _ref7.vertical;
      var _state3 = this.state,
          showHorizontalScrollbar = _state3.showHorizontalScrollbar,
          showVerticalScrollbar = _state3.showVerticalScrollbar;

      if (horizontal !== showHorizontalScrollbar || vertical !== showVerticalScrollbar) {
        this.setState({
          scrollbarSize: size,
          showHorizontalScrollbar: horizontal,
          showVerticalScrollbar: vertical
        });
      }
    }
  }, {
    key: '_onScrollLeft',
    value: function _onScrollLeft(scrollInfo) {
      var scrollLeft = scrollInfo.scrollLeft;

      this._onScroll({
        scrollLeft: scrollLeft,
        scrollTop: this.state.scrollTop
      });
    }
  }, {
    key: '_onScrollTop',
    value: function _onScrollTop(scrollInfo) {
      var scrollTop = scrollInfo.scrollTop;

      this._onScroll({
        scrollTop: scrollTop,
        scrollLeft: this.state.scrollLeft
      });
    }
  }, {
    key: '_renderBottomLeftGrid',
    value: function _renderBottomLeftGrid(props) {
      var enableFixedColumnScroll = props.enableFixedColumnScroll,
          fixedColumnCount = props.fixedColumnCount,
          fixedRowCount = props.fixedRowCount,
          rowCount = props.rowCount,
          scrollTop = props.scrollTop;
      var showVerticalScrollbar = this.state.showVerticalScrollbar;

      if (!fixedColumnCount) {
        return null;
      }

      var additionalRowCount = showVerticalScrollbar ? 1 : 0;

      return __WEBPACK_IMPORTED_MODULE_8_react__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_10__Grid__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, {
        cellRenderer: this._cellRendererBottomLeftGrid,
        columnCount: fixedColumnCount,
        deferredMeasurementCache: this._deferredMeasurementCacheBottomLeftGrid,
        height: this._getBottomGridHeight(props),
        onScroll: enableFixedColumnScroll ? this._onScrollTop : undefined,
        ref: this._bottomLeftGridRef,
        rowCount: Math.max(0, rowCount - fixedRowCount) + additionalRowCount,
        rowHeight: this._rowHeightBottomGrid,
        scrollTop: scrollTop,
        style: this._bottomLeftGridStyle,
        tabIndex: null,
        width: this._getLeftGridWidth(props)
      }));
    }
  }, {
    key: '_renderBottomRightGrid',
    value: function _renderBottomRightGrid(props) {
      var columnCount = props.columnCount,
          fixedColumnCount = props.fixedColumnCount,
          fixedRowCount = props.fixedRowCount,
          rowCount = props.rowCount,
          scrollToColumn = props.scrollToColumn,
          scrollToRow = props.scrollToRow;

      return __WEBPACK_IMPORTED_MODULE_8_react__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_10__Grid__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, {
        cellRenderer: this._cellRendererBottomRightGrid,
        columnCount: Math.max(0, columnCount - fixedColumnCount),
        columnWidth: this._columnWidthRightGrid,
        deferredMeasurementCache: this._deferredMeasurementCacheBottomRightGrid,
        height: this._getBottomGridHeight(props),
        onScroll: this._onScroll,
        onScrollbarPresenceChange: this._onScrollbarPresenceChange,
        ref: this._bottomRightGridRef,
        rowCount: Math.max(0, rowCount - fixedRowCount),
        rowHeight: this._rowHeightBottomGrid,
        scrollToColumn: scrollToColumn - fixedColumnCount,
        scrollToRow: scrollToRow - fixedRowCount,
        style: this._bottomRightGridStyle,
        width: this._getRightGridWidth(props)
      }));
    }
  }, {
    key: '_renderTopLeftGrid',
    value: function _renderTopLeftGrid(props) {
      var fixedColumnCount = props.fixedColumnCount,
          fixedRowCount = props.fixedRowCount;

      if (!fixedColumnCount || !fixedRowCount) {
        return null;
      }

      return __WEBPACK_IMPORTED_MODULE_8_react__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_10__Grid__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, {
        columnCount: fixedColumnCount,
        height: this._getTopGridHeight(props),
        ref: this._topLeftGridRef,
        rowCount: fixedRowCount,
        style: this._topLeftGridStyle,
        tabIndex: null,
        width: this._getLeftGridWidth(props)
      }));
    }
  }, {
    key: '_renderTopRightGrid',
    value: function _renderTopRightGrid(props) {
      var columnCount = props.columnCount,
          enableFixedRowScroll = props.enableFixedRowScroll,
          fixedColumnCount = props.fixedColumnCount,
          fixedRowCount = props.fixedRowCount,
          scrollLeft = props.scrollLeft;
      var showHorizontalScrollbar = this.state.showHorizontalScrollbar;

      if (!fixedRowCount) {
        return null;
      }

      var additionalColumnCount = showHorizontalScrollbar ? 1 : 0;

      return __WEBPACK_IMPORTED_MODULE_8_react__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_10__Grid__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, {
        cellRenderer: this._cellRendererTopRightGrid,
        columnCount: Math.max(0, columnCount - fixedColumnCount) + additionalColumnCount,
        columnWidth: this._columnWidthRightGrid,
        deferredMeasurementCache: this._deferredMeasurementCacheTopRightGrid,
        height: this._getTopGridHeight(props),
        onScroll: enableFixedRowScroll ? this._onScrollLeft : undefined,
        ref: this._topRightGridRef,
        rowCount: fixedRowCount,
        scrollLeft: scrollLeft,
        style: this._topRightGridStyle,
        tabIndex: null,
        width: this._getRightGridWidth(props)
      }));
    }
  }, {
    key: '_rowHeightBottomGrid',
    value: function _rowHeightBottomGrid(_ref8) {
      var index = _ref8.index;
      var _props10 = this.props,
          fixedRowCount = _props10.fixedRowCount,
          rowCount = _props10.rowCount,
          rowHeight = _props10.rowHeight;
      var _state4 = this.state,
          scrollbarSize = _state4.scrollbarSize,
          showVerticalScrollbar = _state4.showVerticalScrollbar;

      // An extra cell is added to the count
      // This gives the smaller Grid extra room for offset,
      // In case the main (bottom right) Grid has a scrollbar
      // If no scrollbar, the extra space is overflow:hidden anyway

      if (showVerticalScrollbar && index === rowCount - fixedRowCount) {
        return scrollbarSize;
      }

      return typeof rowHeight === 'function' ? rowHeight({ index: index + fixedRowCount }) : rowHeight;
    }
  }, {
    key: '_topLeftGridRef',
    value: function _topLeftGridRef(ref) {
      this._topLeftGrid = ref;
    }
  }, {
    key: '_topRightGridRef',
    value: function _topRightGridRef(ref) {
      this._topRightGrid = ref;
    }
  }]);

  return MultiGrid;
}(__WEBPACK_IMPORTED_MODULE_8_react__["b" /* PureComponent */]);

MultiGrid.defaultProps = {
  enableFixedColumnScroll: false,
  enableFixedRowScroll: false,
  fixedColumnCount: 0,
  fixedRowCount: 0,
  style: {},
  styleBottomLeftGrid: {},
  styleBottomRightGrid: {},
  styleTopLeftGrid: {},
  styleTopRightGrid: {}
};
/* unused harmony default export */ var _unused_webpack_default_export = (MultiGrid);
 false ? void 0 : void 0;

/***/ }),

/***/ "Rrel":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("TcQ7");
var gOPN = __webpack_require__("n0T6").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function getWindowNames(it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

/***/ }),

/***/ "S4I/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = calculateSizeAndPositionDataAndUpdateScrollOffset;
/**
 * Helper method that determines when to recalculate row or column metadata.
 *
 * @param cellCount Number of rows or columns in the current axis
 * @param cellsSize Width or height of cells for the current axis
 * @param computeMetadataCallback Method to invoke if cell metadata should be recalculated
 * @param computeMetadataCallbackProps Parameters to pass to :computeMetadataCallback
 * @param nextCellsCount Newly updated number of rows or columns in the current axis
 * @param nextCellsSize Newly updated width or height of cells for the current axis
 * @param nextScrollToIndex Newly updated scroll-to-index
 * @param scrollToIndex Scroll-to-index
 * @param updateScrollOffsetForScrollToIndex Callback to invoke if the scroll position should be recalculated
 */
function calculateSizeAndPositionDataAndUpdateScrollOffset(_ref) {
  var cellCount = _ref.cellCount,
      cellSize = _ref.cellSize,
      computeMetadataCallback = _ref.computeMetadataCallback,
      computeMetadataCallbackProps = _ref.computeMetadataCallbackProps,
      nextCellsCount = _ref.nextCellsCount,
      nextCellSize = _ref.nextCellSize,
      nextScrollToIndex = _ref.nextScrollToIndex,
      scrollToIndex = _ref.scrollToIndex,
      updateScrollOffsetForScrollToIndex = _ref.updateScrollOffsetForScrollToIndex;

  // Don't compare cell sizes if they are functions because inline functions would cause infinite loops.
  // In that event users should use the manual recompute methods to inform of changes.
  if (cellCount !== nextCellsCount || (typeof cellSize === 'number' || typeof nextCellSize === 'number') && cellSize !== nextCellSize) {
    computeMetadataCallback(computeMetadataCallbackProps);

    // Updated cell metadata may have hidden the previous scrolled-to item.
    // In this case we should also update the scrollTop to ensure it stays visible.
    if (scrollToIndex >= 0 && scrollToIndex === nextScrollToIndex) {
      updateScrollOffsetForScrollToIndex();
    }
  }
}

/***/ }),

/***/ "S82l":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

/***/ }),

/***/ "SfB7":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("+E39") && !__webpack_require__("S82l")(function () {
  return Object.defineProperty(__webpack_require__("ON07")('div'), 'a', { get: function get() {
      return 7;
    } }).a != 7;
});

/***/ }),

/***/ "TcQ7":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("MU5D");
var defined = __webpack_require__("52gC");
module.exports = function (it) {
  return IObject(defined(it));
};

/***/ }),

/***/ "To3L":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)

var getKeys = __webpack_require__("lktj");
var gOPS = __webpack_require__("1kS7");
var pIE = __webpack_require__("NpIQ");
var toObject = __webpack_require__("sB3e");
var IObject = __webpack_require__("MU5D");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("S82l")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) {
    B[k] = k;
  });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) {
  // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
    }
  }return T;
} : $assign;

/***/ }),

/***/ "UhGV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("EBst");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_virtualized__ = __webpack_require__("nNuQ");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var _ref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'span',
  null,
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
    'strong',
    null,
    'ADP'
  )
);

var _ref2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'span',
  null,
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
    'strong',
    null,
    'BYE'
  )
);

var Player = function (_Component) {
  _inherits(Player, _Component);

  function Player() {
    var _temp, _this, _ret;

    _classCallCheck(this, Player);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      menuOpen: false
    }, _this.toggleMenu = function () {
      _this.setState({
        menuOpen: !_this.state.menuOpen
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Player.prototype.getPlayerClasses = function getPlayerClasses() {
    var pick = this.props.pick;
    var _props$player = this.props.player,
        adp = _props$player.adp,
        injury = _props$player.injury;

    var classes = ['player'];

    if (pick) {
      var adpClass = '';
      var diff = pick - adp;
      if (diff >= 10) {
        adpClass = 'player--adp-3';
      } else if (diff >= 5) {
        adpClass = 'player--adp-2';
      } else if (diff >= 3) {
        adpClass = 'player--adp-1';
      }
      classes.push(adpClass);
    }

    if (injury) {
      if (injury === 'Que') {
        classes.push('player--injured-que');
      } else if (injury === 'Sus' || injury === ' Out') {
        classes.push('player--injured-out');
      }
    }

    return classes.join(' ').trim();
  };

  Player.prototype.render = function render(props) {
    var _props$player2 = props.player,
        rank = _props$player2.rank,
        name = _props$player2.name,
        team = _props$player2.team,
        pos = _props$player2.pos,
        adp = _props$player2.adp,
        bye = _props$player2.bye,
        injury = _props$player2.injury,
        id = _props$player2.id;
    var add = props.add;

    var className = this.getPlayerClasses();
    var menuClassName = ['player__menu', injury ? 'player__menu--injured' : ''].join(' ').trim();
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
      'div',
      { className: className },
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('button', { className: 'player__menu-toggle', onClick: this.toggleMenu }),
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
        'div',
        { className: 'player__stacked player__name' },
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
          'span',
          { className: 'player__name-field' },
          rank,
          '. ',
          name
        ),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
          'span',
          { className: 'player__component' },
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'strong',
            null,
            pos
          ),
          ' - ',
          team
        )
      ),
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
        'div',
        { className: 'player__stacked' },
        _ref,
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
          'span',
          null,
          adp
        )
      ),
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
        'div',
        { className: 'player__stacked player__stacked--push-right' },
        _ref2,
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
          'span',
          null,
          bye
        )
      ),
      this.state.menuOpen && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
        'div',
        { className: menuClassName },
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
          'div',
          { className: 'player__menu__name' },
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'div',
            { className: 'player__stacked' },
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
              'span',
              { className: 'player__name-field' },
              rank,
              '. ',
              name
            ),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
              'span',
              { className: 'player__component' },
              __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                'strong',
                null,
                pos
              ),
              ' - ',
              team
            )
          )
        ),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
          'div',
          { className: 'player__menu__buttons' },
          props.taken && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'button',
            { className: 'player__button player__button--remove', onClick: props.taken, 'data-name': id },
            'Taken'
          ),
          props.add && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'button',
            { className: 'player__button player__button--draft', onClick: props.add, 'data-name': id },
            'Draft'
          ),
          props.remove && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'button',
            { className: 'player__button player__button--remove', onClick: props.remove, 'data-name': id },
            'Remove'
          )
        ),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
          'button',
          { className: 'player__button player__button--close', onClick: this.toggleMenu },
          'X'
        )
      )
    );
  };

  return Player;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

var PlayerList = function (_Component2) {
  _inherits(PlayerList, _Component2);

  function PlayerList() {
    var _temp2, _this2, _ret2;

    _classCallCheck(this, PlayerList);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.rowRenderer = function (_ref3) {
      var key = _ref3.key,
          index = _ref3.index,
          isScrolling = _ref3.isScrolling,
          isVisible = _ref3.isVisible,
          style = _ref3.style;

      var _this2$props = _this2.props,
          players = _this2$props.players,
          props = _objectWithoutProperties(_this2$props, ['players']);

      var player = players[index];
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
        'div',
        { key: player.id, style: style },
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Player, _extends({
          player: player
        }, props))
      );
    }, _temp2), _possibleConstructorReturn(_this2, _ret2);
  }

  PlayerList.prototype.render = function render(props) {
    var _this3 = this;

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
      __WEBPACK_IMPORTED_MODULE_1_react_virtualized__["a" /* WindowScroller */],
      null,
      function (_ref4) {
        var height = _ref4.height,
            isScrolling = _ref4.isScrolling,
            onChildScroll = _ref4.onChildScroll,
            scrollTop = _ref4.scrollTop;
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_react_virtualized__["b" /* List */], {
          autoHeight: true,
          height: height,
          isScrolling: isScrolling,
          onScroll: onChildScroll,
          rowCount: props.players.length,
          rowHeight: 64,
          rowRenderer: _this3.rowRenderer,
          scrollTop: scrollTop,
          width: document.body.clientWidth,
          pick: props.pick,
          page: props.page
        });
      }
    );
  };

  return PlayerList;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (PlayerList);

/***/ }),

/***/ "UtyL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("EBst");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);



var positions = [{ label: 'All', value: '' }, { label: 'QB', value: 'QB' }, { label: 'RB', value: 'RB' }, { label: 'WR', value: 'WR' }, { label: 'TE', value: 'TE' }, { label: 'K', value: 'K' }, { label: 'DEF', value: 'DEF' }];

var BtmNav = function BtmNav(props) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
    'nav',
    { className: 'btm-nav' },
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
      'div',
      { className: 'btm-nav__positions' },
      positions.map(function (pos) {
        var className = ['btm-nav__btn-pos', pos.value === props.pos ? 'btm-nav__btn-pos--active' : ''].join(' ').trim();
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
          'button',
          {
            className: className,
            'data-pos': pos.value,
            onClick: props.changePos
          },
          pos.label
        );
      })
    ),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('button', { className: 'btm-nav__menu', onClick: props.showSplash })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (BtmNav);

/***/ }),

/***/ "UuGF":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),

/***/ "V3tA":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("R4wc");
module.exports = __webpack_require__("FeBl").Object.assign;

/***/ }),

/***/ "VEor":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("Zx67");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("Zrlr");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("wxAW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("zwoO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("Pf15");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("KSGD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__("AX2D");








/**
 * High-order component that auto-calculates column-widths for `Grid` cells.
 */

var ColumnSizer = function (_PureComponent) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(ColumnSizer, _PureComponent);

  function ColumnSizer(props, context) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, ColumnSizer);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ColumnSizer.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(ColumnSizer)).call(this, props, context));

    _this._registerChild = _this._registerChild.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(ColumnSizer, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _props = this.props,
          columnMaxWidth = _props.columnMaxWidth,
          columnMinWidth = _props.columnMinWidth,
          columnCount = _props.columnCount,
          width = _props.width;

      if (columnMaxWidth !== prevProps.columnMaxWidth || columnMinWidth !== prevProps.columnMinWidth || columnCount !== prevProps.columnCount || width !== prevProps.width) {
        if (this._registeredChild) {
          this._registeredChild.recomputeGridSize();
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          columnMaxWidth = _props2.columnMaxWidth,
          columnMinWidth = _props2.columnMinWidth,
          columnCount = _props2.columnCount,
          width = _props2.width;

      var safeColumnMinWidth = columnMinWidth || 1;

      var safeColumnMaxWidth = columnMaxWidth ? Math.min(columnMaxWidth, width) : width;

      var columnWidth = width / columnCount;
      columnWidth = Math.max(safeColumnMinWidth, columnWidth);
      columnWidth = Math.min(safeColumnMaxWidth, columnWidth);
      columnWidth = Math.floor(columnWidth);

      var adjustedWidth = Math.min(width, columnWidth * columnCount);

      return children({
        adjustedWidth: adjustedWidth,
        columnWidth: columnWidth,
        getColumnWidth: function getColumnWidth() {
          return columnWidth;
        },
        registerChild: this._registerChild
      });
    }
  }, {
    key: '_registerChild',
    value: function _registerChild(child) {
      if (child && typeof child.recomputeGridSize !== 'function') {
        throw Error('Unexpected child type registered; only Grid/MultiGrid children are supported.');
      }

      this._registeredChild = child;

      if (this._registeredChild) {
        this._registeredChild.recomputeGridSize();
      }
    }
  }]);

  return ColumnSizer;
}(__WEBPACK_IMPORTED_MODULE_6_react__["b" /* PureComponent */]);

/* unused harmony default export */ var _unused_webpack_default_export = (ColumnSizer);
 false ? ColumnSizer.propTypes = {
  /**
   * Function responsible for rendering a virtualized Grid.
   * This function should implement the following signature:
   * ({ adjustedWidth, getColumnWidth, registerChild }) => PropTypes.element
   *
   * The specified :getColumnWidth function should be passed to the Grid's :columnWidth property.
   * The :registerChild should be passed to the Grid's :ref property.
   * The :adjustedWidth property is optional; it reflects the lesser of the overall width or the width of all columns.
   */
  children: PropTypes.func.isRequired,

  /** Optional maximum allowed column width */
  columnMaxWidth: PropTypes.number,

  /** Optional minimum allowed column width */
  columnMinWidth: PropTypes.number,

  /** Number of columns in Grid or Table child */
  columnCount: PropTypes.number.isRequired,

  /** Width of Grid or Table child */
  width: PropTypes.number.isRequired
} : void 0;

/***/ }),

/***/ "X8DO":
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

/***/ "Xc4G":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("lktj");
var gOPS = __webpack_require__("1kS7");
var pIE = __webpack_require__("NpIQ");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) {
      if (isEnum.call(it, key = symbols[i++])) result.push(key);
    }
  }return result;
};

/***/ }),

/***/ "Xd32":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("+tPU");
__webpack_require__("zQR9");
module.exports = __webpack_require__("5PlU");

/***/ }),

/***/ "XpXr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__("fZjL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("Zrlr");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("wxAW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Section__ = __webpack_require__("dMr3");



/**
 * Window Sections are used to group nearby cells.
 * This enables us to more quickly determine which cells to display in a given region of the Window.
 * 
 */


var SECTION_SIZE = 100;

/**
 * Contains 0 to many Sections.
 * Grows (and adds Sections) dynamically as cells are registered.
 * Automatically adds cells to the appropriate Section(s).
 */
var SectionManager = function () {
  function SectionManager() {
    var sectionSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : SECTION_SIZE;

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, SectionManager);

    this._sectionSize = sectionSize;

    this._cellMetadata = [];
    this._sections = {};
  }

  /**
   * Gets all cell indices contained in the specified region.
   * A region may encompass 1 or more Sections.
   */

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(SectionManager, [{
    key: 'getCellIndices',
    value: function getCellIndices(_ref) {
      var height = _ref.height,
          width = _ref.width,
          x = _ref.x,
          y = _ref.y;

      var indices = {};

      this.getSections({ height: height, width: width, x: x, y: y }).forEach(function (section) {
        return section.getCellIndices().forEach(function (index) {
          indices[index] = index;
        });
      });

      // Object keys are strings; this function returns numbers
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(indices).map(function (index) {
        return indices[index];
      });
    }

    /** Get size and position information for the cell specified. */

  }, {
    key: 'getCellMetadata',
    value: function getCellMetadata(_ref2) {
      var index = _ref2.index;

      return this._cellMetadata[index];
    }

    /** Get all Sections overlapping the specified region. */

  }, {
    key: 'getSections',
    value: function getSections(_ref3) {
      var height = _ref3.height,
          width = _ref3.width,
          x = _ref3.x,
          y = _ref3.y;

      var sectionXStart = Math.floor(x / this._sectionSize);
      var sectionXStop = Math.floor((x + width - 1) / this._sectionSize);
      var sectionYStart = Math.floor(y / this._sectionSize);
      var sectionYStop = Math.floor((y + height - 1) / this._sectionSize);

      var sections = [];

      for (var sectionX = sectionXStart; sectionX <= sectionXStop; sectionX++) {
        for (var sectionY = sectionYStart; sectionY <= sectionYStop; sectionY++) {
          var key = sectionX + '.' + sectionY;

          if (!this._sections[key]) {
            this._sections[key] = new __WEBPACK_IMPORTED_MODULE_3__Section__["a" /* default */]({
              height: this._sectionSize,
              width: this._sectionSize,
              x: sectionX * this._sectionSize,
              y: sectionY * this._sectionSize
            });
          }

          sections.push(this._sections[key]);
        }
      }

      return sections;
    }

    /** Total number of Sections based on the currently registered cells. */

  }, {
    key: 'getTotalSectionCount',
    value: function getTotalSectionCount() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(this._sections).length;
    }

    /** Intended for debugger/test purposes only */

  }, {
    key: 'toString',
    value: function toString() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(this._sections).map(function (index) {
        return _this._sections[index].toString();
      });
    }

    /** Adds a cell to the appropriate Sections and registers it metadata for later retrievable. */

  }, {
    key: 'registerCell',
    value: function registerCell(_ref4) {
      var cellMetadatum = _ref4.cellMetadatum,
          index = _ref4.index;

      this._cellMetadata[index] = cellMetadatum;

      this.getSections(cellMetadatum).forEach(function (section) {
        return section.addCellIndex({ index: index });
      });
    }
  }]);

  return SectionManager;
}();

/* harmony default export */ __webpack_exports__["a"] = (SectionManager);

/***/ }),

/***/ "YGKy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = defaultRowRenderer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("Dd8w");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("AX2D");



/**
 * Default row renderer for Table.
 */
function defaultRowRenderer(_ref) {
  var className = _ref.className,
      columns = _ref.columns,
      index = _ref.index,
      isScrolling = _ref.isScrolling,
      key = _ref.key,
      onRowClick = _ref.onRowClick,
      onRowDoubleClick = _ref.onRowDoubleClick,
      onRowMouseOver = _ref.onRowMouseOver,
      onRowMouseOut = _ref.onRowMouseOut,
      rowData = _ref.rowData,
      style = _ref.style;

  var a11yProps = {};

  if (onRowClick || onRowDoubleClick || onRowMouseOver || onRowMouseOut) {
    a11yProps['aria-label'] = 'row';
    a11yProps.tabIndex = 0;

    if (onRowClick) {
      a11yProps.onClick = function (event) {
        return onRowClick({ event: event, index: index, rowData: rowData });
      };
    }
    if (onRowDoubleClick) {
      a11yProps.onDoubleClick = function (event) {
        return onRowDoubleClick({ event: event, index: index, rowData: rowData });
      };
    }
    if (onRowMouseOut) {
      a11yProps.onMouseOut = function (event) {
        return onRowMouseOut({ event: event, index: index, rowData: rowData });
      };
    }
    if (onRowMouseOver) {
      a11yProps.onMouseOver = function (event) {
        return onRowMouseOver({ event: event, index: index, rowData: rowData });
      };
    }
  }

  return __WEBPACK_IMPORTED_MODULE_1_react__["a" /* default */].createElement('div', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, a11yProps, {
    className: className,
    key: key,
    role: 'row',
    style: style
  }), columns);
}

/***/ }),

/***/ "YQgO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MultiGrid__ = __webpack_require__("RpJk");
/* unused harmony reexport default */
/* unused harmony reexport MultiGrid */





/***/ }),

/***/ "YU85":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = defaultCellRangeRenderer;

/**
 * Default implementation of cellRangeRenderer used by Grid.
 * This renderer supports cell-caching while the user is scrolling.
 */
function defaultCellRangeRenderer(_ref) {
  var cellCache = _ref.cellCache,
      cellRenderer = _ref.cellRenderer,
      columnSizeAndPositionManager = _ref.columnSizeAndPositionManager,
      columnStartIndex = _ref.columnStartIndex,
      columnStopIndex = _ref.columnStopIndex,
      deferredMeasurementCache = _ref.deferredMeasurementCache,
      horizontalOffsetAdjustment = _ref.horizontalOffsetAdjustment,
      isScrolling = _ref.isScrolling,
      parent = _ref.parent,
      rowSizeAndPositionManager = _ref.rowSizeAndPositionManager,
      rowStartIndex = _ref.rowStartIndex,
      rowStopIndex = _ref.rowStopIndex,
      scrollLeft = _ref.scrollLeft,
      scrollTop = _ref.scrollTop,
      styleCache = _ref.styleCache,
      verticalOffsetAdjustment = _ref.verticalOffsetAdjustment,
      visibleColumnIndices = _ref.visibleColumnIndices,
      visibleRowIndices = _ref.visibleRowIndices;

  var deferredMode = typeof deferredMeasurementCache !== 'undefined';

  var renderedCells = [];

  // Browsers have native size limits for elements (eg Chrome 33M pixels, IE 1.5M pixes).
  // User cannot scroll beyond these size limitations.
  // In order to work around this, ScalingCellSizeAndPositionManager compresses offsets.
  // We should never cache styles for compressed offsets though as this can lead to bugs.
  // See issue #576 for more.
  var areOffsetsAdjusted = columnSizeAndPositionManager.areOffsetsAdjusted() || rowSizeAndPositionManager.areOffsetsAdjusted();

  var canCacheStyle = !isScrolling && !areOffsetsAdjusted;

  for (var rowIndex = rowStartIndex; rowIndex <= rowStopIndex; rowIndex++) {
    var rowDatum = rowSizeAndPositionManager.getSizeAndPositionOfCell(rowIndex);

    for (var columnIndex = columnStartIndex; columnIndex <= columnStopIndex; columnIndex++) {
      var columnDatum = columnSizeAndPositionManager.getSizeAndPositionOfCell(columnIndex);
      var isVisible = columnIndex >= visibleColumnIndices.start && columnIndex <= visibleColumnIndices.stop && rowIndex >= visibleRowIndices.start && rowIndex <= visibleRowIndices.stop;
      var key = rowIndex + '-' + columnIndex;
      var style = void 0;

      // Cache style objects so shallow-compare doesn't re-render unnecessarily.
      if (canCacheStyle && styleCache[key]) {
        style = styleCache[key];
      } else {
        // In deferred mode, cells will be initially rendered before we know their size.
        // Don't interfere with CellMeasurer's measurements by setting an invalid size.
        if (deferredMode && !deferredMeasurementCache.has(rowIndex, columnIndex)) {
          // Position not-yet-measured cells at top/left 0,0,
          // And give them width/height of 'auto' so they can grow larger than the parent Grid if necessary.
          // Positioning them further to the right/bottom influences their measured size.
          style = {
            height: 'auto',
            left: 0,
            position: 'absolute',
            top: 0,
            width: 'auto'
          };
        } else {
          style = {
            height: rowDatum.size,
            left: columnDatum.offset + horizontalOffsetAdjustment,
            position: 'absolute',
            top: rowDatum.offset + verticalOffsetAdjustment,
            width: columnDatum.size
          };

          styleCache[key] = style;
        }
      }

      var cellRendererParams = {
        columnIndex: columnIndex,
        isScrolling: isScrolling,
        isVisible: isVisible,
        key: key,
        parent: parent,
        rowIndex: rowIndex,
        style: style
      };

      var renderedCell = void 0;

      // Avoid re-creating cells while scrolling.
      // This can lead to the same cell being created many times and can cause performance issues for "heavy" cells.
      // If a scroll is in progress- cache and reuse cells.
      // This cache will be thrown away once scrolling completes.
      // However if we are scaling scroll positions and sizes, we should also avoid caching.
      // This is because the offset changes slightly as scroll position changes and caching leads to stale values.
      // For more info refer to issue #395
      if (isScrolling && !horizontalOffsetAdjustment && !verticalOffsetAdjustment) {
        if (!cellCache[key]) {
          cellCache[key] = cellRenderer(cellRendererParams);
        }

        renderedCell = cellCache[key];

        // If the user is no longer scrolling, don't cache cells.
        // This makes dynamic cell content difficult for users and would also lead to a heavier memory footprint.
      } else {
        renderedCell = cellRenderer(cellRendererParams);
      }

      if (renderedCell == null || renderedCell === false) {
        continue;
      }

      if (false) {
        warnAboutMissingStyle(parent, renderedCell);
      }

      renderedCells.push(renderedCell);
    }
  }

  return renderedCells;
}

function warnAboutMissingStyle(parent, renderedCell) {
  if (false) {
    if (renderedCell) {
      // If the direct child is a CellMeasurer, then we should check its child
      // See issue #611
      if (renderedCell.type && renderedCell.type.__internalCellMeasurerFlag) {
        renderedCell = renderedCell.props.children;
      }

      if (renderedCell && renderedCell.props && renderedCell.props.style === undefined && parent.__warnedAboutMissingStyle !== true) {
        parent.__warnedAboutMissingStyle = true;

        console.warn('Rendered cell should include style property for positioning.');
      }
    }
  }
}

/***/ }),

/***/ "Yjtl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */


function createCellPositioner(_ref) {
  var cellMeasurerCache = _ref.cellMeasurerCache,
      columnCount = _ref.columnCount,
      columnWidth = _ref.columnWidth,
      _ref$spacer = _ref.spacer,
      spacer = _ref$spacer === undefined ? 0 : _ref$spacer;

  var columnHeights = void 0;

  initOrResetDerivedValues();

  function cellPositioner(index) {
    // Find the shortest column and use it.
    var columnIndex = 0;
    for (var i = 1; i < columnHeights.length; i++) {
      if (columnHeights[i] < columnHeights[columnIndex]) {
        columnIndex = i;
      }
    }

    var left = columnIndex * (columnWidth + spacer);
    var top = columnHeights[columnIndex] || 0;

    columnHeights[columnIndex] = top + cellMeasurerCache.getHeight(index) + spacer;

    return {
      left: left,
      top: top
    };
  }

  function initOrResetDerivedValues() {
    // Track the height of each column.
    // Layout algorithm below always inserts into the shortest column.
    columnHeights = [];
    for (var i = 0; i < columnCount; i++) {
      columnHeights[i] = 0;
    }
  }

  function reset(params) {
    columnCount = params.columnCount;
    columnWidth = params.columnWidth;
    spacer = params.spacer;

    initOrResetDerivedValues();
  }

  cellPositioner.reset = reset;

  return cellPositioner;
}

/***/ }),

/***/ "Yobk":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("77Pl");
var dPs = __webpack_require__("qio6");
var enumBugKeys = __webpack_require__("xnc9");
var IE_PROTO = __webpack_require__("ax3d")('IE_PROTO');
var Empty = function Empty() {/* empty */};
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var _createDict = function createDict() {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("ON07")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("RPLV").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  _createDict = iframeDocument.F;
  while (i--) {
    delete _createDict[PROTOTYPE][enumBugKeys[i]];
  }return _createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = _createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

/***/ }),

/***/ "ZaQb":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("EqjI");
var anObject = __webpack_require__("77Pl");
var check = function check(O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
  function (test, buggy, set) {
    try {
      set = __webpack_require__("+ZMJ")(Function.call, __webpack_require__("LKZe").f(Object.prototype, '__proto__').set, 2);
      set(test, []);
      buggy = !(test instanceof Array);
    } catch (e) {
      buggy = true;
    }
    return function setPrototypeOf(O, proto) {
      check(O, proto);
      if (buggy) O.__proto__ = proto;else set(O, proto);
      return O;
    };
  }({}, false) : undefined),
  check: check
};

/***/ }),

/***/ "Zrlr":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ "Zx67":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("fS6E"), __esModule: true };

/***/ }),

/***/ "Zzip":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("/n6Q"), __esModule: true };

/***/ }),

/***/ "ax3d":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("e8AB")('keys');
var uid = __webpack_require__("3Eo+");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),

/***/ "cFFW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
module.exports = exports['default'];

/***/ }),

/***/ "cnlX":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("iInB");
var $Object = __webpack_require__("FeBl").Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};

/***/ }),

/***/ "crlp":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7KvD");
var core = __webpack_require__("FeBl");
var LIBRARY = __webpack_require__("O4g8");
var wksExt = __webpack_require__("Kh4W");
var defineProperty = __webpack_require__("evD5").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};

/***/ }),

/***/ "cxPT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),

/***/ "d6SR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SCROLL_DIRECTION_BACKWARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SCROLL_DIRECTION_FORWARD; });
/* unused harmony export SCROLL_DIRECTION_HORIZONTAL */
/* unused harmony export SCROLL_DIRECTION_VERTICAL */
/* harmony export (immutable) */ __webpack_exports__["c"] = defaultOverscanIndicesGetter;
var SCROLL_DIRECTION_BACKWARD = -1;
var SCROLL_DIRECTION_FORWARD = 1;

var SCROLL_DIRECTION_HORIZONTAL = 'horizontal';
var SCROLL_DIRECTION_VERTICAL = 'vertical';
/**
 * Calculates the number of cells to overscan before and after a specified range.
 * This function ensures that overscanning doesn't exceed the available cells.
 *
 * @param direction One of SCROLL_DIRECTION_HORIZONTAL or SCROLL_DIRECTION_VERTICAL
 * @param cellCount Number of rows or columns in the current axis
 * @param scrollDirection One of SCROLL_DIRECTION_BACKWARD or SCROLL_DIRECTION_FORWARD
 * @param overscanCellsCount Maximum number of cells to over-render in either direction
 * @param startIndex Begin of range of visible cells
 * @param stopIndex End of range of visible cells
 */
function defaultOverscanIndicesGetter(_ref) {
  var direction = _ref.direction,
      cellCount = _ref.cellCount,
      overscanCellsCount = _ref.overscanCellsCount,
      scrollDirection = _ref.scrollDirection,
      startIndex = _ref.startIndex,
      stopIndex = _ref.stopIndex;

  var overscanStartIndex = void 0;
  var overscanStopIndex = void 0;

  switch (scrollDirection) {
    case SCROLL_DIRECTION_FORWARD:
      overscanStartIndex = startIndex;
      overscanStopIndex = stopIndex + overscanCellsCount;
      break;
    case SCROLL_DIRECTION_BACKWARD:
      overscanStartIndex = startIndex - overscanCellsCount;
      overscanStopIndex = stopIndex;
      break;
  }

  return {
    overscanStartIndex: Math.max(0, overscanStartIndex),
    overscanStopIndex: Math.min(cellCount - 1, overscanStopIndex)
  };
}

/***/ }),

/***/ "d7EF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__("us/S");

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__("BO1k");

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),

/***/ "dMr3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__("Zrlr");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__("wxAW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);



/**
 * A section of the Window.
 * Window Sections are used to group nearby cells.
 * This enables us to more quickly determine which cells to display in a given region of the Window.
 * Sections have a fixed size and contain 0 to many cells (tracked by their indices).
 */
var Section = function () {
  function Section(_ref) {
    var height = _ref.height,
        width = _ref.width,
        x = _ref.x,
        y = _ref.y;

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Section);

    this.height = height;
    this.width = width;
    this.x = x;
    this.y = y;

    this._indexMap = {};
    this._indices = [];
  }

  /** Add a cell to this section. */

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Section, [{
    key: 'addCellIndex',
    value: function addCellIndex(_ref2) {
      var index = _ref2.index;

      if (!this._indexMap[index]) {
        this._indexMap[index] = true;
        this._indices.push(index);
      }
    }

    /** Get all cell indices that have been added to this section. */

  }, {
    key: 'getCellIndices',
    value: function getCellIndices() {
      return this._indices;
    }

    /** Intended for debugger/test purposes only */

  }, {
    key: 'toString',
    value: function toString() {
      return this.x + ',' + this.y + ' ' + this.width + 'x' + this.height;
    }
  }]);

  return Section;
}(); /** @rlow */

/* harmony default export */ __webpack_exports__["a"] = (Section);

/***/ }),

/***/ "dSzd":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("e8AB")('wks');
var uid = __webpack_require__("3Eo+");
var Symbol = __webpack_require__("7KvD").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] = USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),

/***/ "dU/I":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("Zx67");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("Zrlr");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("wxAW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("zwoO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("Pf15");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("AX2D");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom__ = __webpack_require__("AX2D");








/**
 * Wraps a cell and measures its rendered content.
 * Measurements are stored in a per-cell cache.
 * Cached-content is not be re-measured.
 */
var CellMeasurer = function (_PureComponent) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(CellMeasurer, _PureComponent);

  function CellMeasurer(props, context) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, CellMeasurer);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (CellMeasurer.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(CellMeasurer)).call(this, props, context));

    _this._measure = _this._measure.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(CellMeasurer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._maybeMeasureCell();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      this._maybeMeasureCell();
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return typeof children === 'function' ? children({ measure: this._measure }) : children;
    }
  }, {
    key: '_getCellMeasurements',
    value: function _getCellMeasurements() {
      var cache = this.props.cache;

      var node = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_dom__["d" /* findDOMNode */])(this);

      // TODO Check for a bad combination of fixedWidth and missing numeric width or vice versa with height

      var styleWidth = node.style.width;
      var styleHeight = node.style.height;

      // If we are re-measuring a cell that has already been measured,
      // It will have a hard-coded width/height from the previous measurement.
      // The fact that we are measuring indicates this measurement is probably stale,
      // So explicitly clear it out (eg set to "auto") so we can recalculate.
      // See issue #593 for more info.
      // Even if we are measuring initially- if we're inside of a MultiGrid component,
      // Explicitly clear width/height before measuring to avoid being tainted by another Grid.
      // eg top/left Grid renders before bottom/right Grid
      // Since the CellMeasurerCache is shared between them this taints derived cell size values.
      if (!cache.hasFixedWidth()) {
        node.style.width = 'auto';
      }
      if (!cache.hasFixedHeight()) {
        node.style.height = 'auto';
      }

      var height = Math.ceil(node.offsetHeight);
      var width = Math.ceil(node.offsetWidth);

      // Reset after measuring to avoid breaking styles; see #660
      if (styleWidth) {
        node.style.width = styleWidth;
      }
      if (styleHeight) {
        node.style.height = styleHeight;
      }

      return { height: height, styleHeight: styleHeight, styleWidth: styleWidth, width: width };
    }
  }, {
    key: '_maybeMeasureCell',
    value: function _maybeMeasureCell() {
      var _props = this.props,
          cache = _props.cache,
          _props$columnIndex = _props.columnIndex,
          columnIndex = _props$columnIndex === undefined ? 0 : _props$columnIndex,
          parent = _props.parent,
          _props$rowIndex = _props.rowIndex,
          rowIndex = _props$rowIndex === undefined ? this.props.index : _props$rowIndex;

      if (!cache.has(rowIndex, columnIndex)) {
        var _getCellMeasurements2 = this._getCellMeasurements(),
            height = _getCellMeasurements2.height,
            width = _getCellMeasurements2.width;

        cache.set(rowIndex, columnIndex, width, height);

        // If size has changed, let Grid know to re-render.
        if (parent && typeof parent.invalidateCellSizeAfterRender === 'function') {
          parent.invalidateCellSizeAfterRender({
            columnIndex: columnIndex,
            rowIndex: rowIndex
          });
        }
      }
    }
  }, {
    key: '_measure',
    value: function _measure() {
      var _props2 = this.props,
          cache = _props2.cache,
          _props2$columnIndex = _props2.columnIndex,
          columnIndex = _props2$columnIndex === undefined ? 0 : _props2$columnIndex,
          parent = _props2.parent,
          _props2$rowIndex = _props2.rowIndex,
          rowIndex = _props2$rowIndex === undefined ? this.props.index : _props2$rowIndex;

      var _getCellMeasurements3 = this._getCellMeasurements(),
          height = _getCellMeasurements3.height,
          width = _getCellMeasurements3.width;

      if (height !== cache.getHeight(rowIndex, columnIndex) || width !== cache.getWidth(rowIndex, columnIndex)) {
        cache.set(rowIndex, columnIndex, width, height);

        if (parent && typeof parent.recomputeGridSize === 'function') {
          parent.recomputeGridSize({
            columnIndex: columnIndex,
            rowIndex: rowIndex
          });
        }
      }
    }
  }]);

  return CellMeasurer;
}(__WEBPACK_IMPORTED_MODULE_5_react__["b" /* PureComponent */]);

// Used for DEV mode warning check


/* unused harmony default export */ var _unused_webpack_default_export = (CellMeasurer);
if (false) {
  CellMeasurer.__internalCellMeasurerFlag = true;
}

/***/ }),

/***/ "e1vK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("EBst");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_localStorage__ = __webpack_require__("fOxH");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var _ref4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'h1',
  null,
  'The Milky Way'
);

var _ref5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'button',
  { type: 'submit' },
  'Go'
);

var Splash = function (_Component) {
  _inherits(Splash, _Component);

  function Splash() {
    var _temp, _this, _ret;

    _classCallCheck(this, Splash);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      name: '',
      cache: __WEBPACK_IMPORTED_MODULE_1__lib_localStorage__["a" /* default */].getStorage()
    }, _this.onSubmit = function (e) {
      e.preventDefault();

      var _this$state = _this.state,
          name = _this$state.name,
          cache = _this$state.cache;


      if (!name || cache && cache.drafts[name]) return;

      _this.props.onSubmit(name);
    }, _this.onUpdateName = function (_ref) {
      var target = _ref.target;

      _this.setState({
        name: target.value
      });
    }, _this.deleteDraft = function (_ref2) {
      var target = _ref2.target;

      var name = target.dataset.name;
      _this.setState({
        cache: __WEBPACK_IMPORTED_MODULE_1__lib_localStorage__["a" /* default */].deleteDraft(name)
      });
    }, _this.loadDraft = function (_ref3) {
      var target = _ref3.target;

      var name = target.dataset.name;
      var draft = _this.state.cache.drafts[name];
      __WEBPACK_IMPORTED_MODULE_1__lib_localStorage__["a" /* default */].setActiveDraft(name);
      _this.props.loadDraft(name, draft);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Splash.prototype.renderCachedDrafts = function renderCachedDrafts() {
    var _this2 = this;

    return Object.keys(this.state.cache.drafts).map(function (name) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
        'li',
        { className: 'splash__list-item' },
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
          'button',
          { className: 'splash__delete', 'data-name': name, onClick: _this2.deleteDraft },
          'X'
        ),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
          'a',
          { className: 'splash__link', 'data-name': name, onClick: _this2.loadDraft },
          name
        )
      );
    });
  };

  Splash.prototype.render = function render(props) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
      'div',
      { className: 'splash' },
      _ref4,
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
        'form',
        { className: 'splash__form', onSubmit: this.onSubmit },
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('input', { type: 'text', placeholder: 'Enter a draft name', value: this.state.name, onInput: this.onUpdateName }),
        _ref5
      ),
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
        'ul',
        { className: 'splash__list' },
        this.renderCachedDrafts()
      )
    );
  };

  return Splash;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Splash);

/***/ }),

/***/ "e6+Q":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),

/***/ "e6n0":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("evD5").f;
var has = __webpack_require__("D2L2");
var TAG = __webpack_require__("dSzd")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

/***/ }),

/***/ "e8AB":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7KvD");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};

/***/ }),

/***/ "eQ63":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__List__ = __webpack_require__("BSUc");
/* unused harmony reexport default */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__List__["a"]; });





/***/ }),

/***/ "eoCw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isRangeVisible */
/* unused harmony export scanForUnloadedRanges */
/* unused harmony export forceUpdateReactVirtualizedComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("Zx67");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("Zrlr");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("wxAW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("zwoO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("Pf15");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("AX2D");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("KSGD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_createCallbackMemoizer__ = __webpack_require__("MVOw");









/**
 * Higher-order component that manages lazy-loading for "infinite" data.
 * This component decorates a virtual component and just-in-time prefetches rows as a user scrolls.
 * It is intended as a convenience component; fork it if you'd like finer-grained control over data-loading.
 */

var InfiniteLoader = function (_PureComponent) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(InfiniteLoader, _PureComponent);

  function InfiniteLoader(props, context) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, InfiniteLoader);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (InfiniteLoader.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(InfiniteLoader)).call(this, props, context));

    _this._loadMoreRowsMemoizer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils_createCallbackMemoizer__["a" /* default */])();

    _this._onRowsRendered = _this._onRowsRendered.bind(_this);
    _this._registerChild = _this._registerChild.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(InfiniteLoader, [{
    key: 'resetLoadMoreRowsCache',
    value: function resetLoadMoreRowsCache(autoReload) {
      this._loadMoreRowsMemoizer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils_createCallbackMemoizer__["a" /* default */])();

      if (autoReload) {
        this._doStuff(this._lastRenderedStartIndex, this._lastRenderedStopIndex);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return children({
        onRowsRendered: this._onRowsRendered,
        registerChild: this._registerChild
      });
    }
  }, {
    key: '_loadUnloadedRanges',
    value: function _loadUnloadedRanges(unloadedRanges) {
      var _this2 = this;

      var loadMoreRows = this.props.loadMoreRows;

      unloadedRanges.forEach(function (unloadedRange) {
        var promise = loadMoreRows(unloadedRange);
        if (promise) {
          promise.then(function () {
            // Refresh the visible rows if any of them have just been loaded.
            // Otherwise they will remain in their unloaded visual state.
            if (isRangeVisible({
              lastRenderedStartIndex: _this2._lastRenderedStartIndex,
              lastRenderedStopIndex: _this2._lastRenderedStopIndex,
              startIndex: unloadedRange.startIndex,
              stopIndex: unloadedRange.stopIndex
            })) {
              if (_this2._registeredChild) {
                forceUpdateReactVirtualizedComponent(_this2._registeredChild, _this2._lastRenderedStartIndex);
              }
            }
          });
        }
      });
    }
  }, {
    key: '_onRowsRendered',
    value: function _onRowsRendered(_ref) {
      var startIndex = _ref.startIndex,
          stopIndex = _ref.stopIndex;

      this._lastRenderedStartIndex = startIndex;
      this._lastRenderedStopIndex = stopIndex;

      this._doStuff(startIndex, stopIndex);
    }
  }, {
    key: '_doStuff',
    value: function _doStuff(startIndex, stopIndex) {
      var _this3 = this;

      var _props = this.props,
          isRowLoaded = _props.isRowLoaded,
          minimumBatchSize = _props.minimumBatchSize,
          rowCount = _props.rowCount,
          threshold = _props.threshold;

      var unloadedRanges = scanForUnloadedRanges({
        isRowLoaded: isRowLoaded,
        minimumBatchSize: minimumBatchSize,
        rowCount: rowCount,
        startIndex: Math.max(0, startIndex - threshold),
        stopIndex: Math.min(rowCount - 1, stopIndex + threshold)
      });

      // For memoize comparison
      var squashedUnloadedRanges = unloadedRanges.reduce(function (reduced, unloadedRange) {
        return reduced.concat([unloadedRange.startIndex, unloadedRange.stopIndex]);
      }, []);

      this._loadMoreRowsMemoizer({
        callback: function callback() {
          _this3._loadUnloadedRanges(unloadedRanges);
        },
        indices: { squashedUnloadedRanges: squashedUnloadedRanges }
      });
    }
  }, {
    key: '_registerChild',
    value: function _registerChild(registeredChild) {
      this._registeredChild = registeredChild;
    }
  }]);

  return InfiniteLoader;
}(__WEBPACK_IMPORTED_MODULE_5_react__["b" /* PureComponent */]);

/**
 * Determines if the specified start/stop range is visible based on the most recently rendered range.
 */

InfiniteLoader.defaultProps = {
  minimumBatchSize: 10,
  rowCount: 0,
  threshold: 15
};
/* unused harmony default export */ var _unused_webpack_default_export = (InfiniteLoader);
 false ? InfiniteLoader.propTypes = {
  /**
   * Function responsible for rendering a virtualized component.
   * This function should implement the following signature:
   * ({ onRowsRendered, registerChild }) => PropTypes.element
   *
   * The specified :onRowsRendered function should be passed through to the child's :onRowsRendered property.
   * The :registerChild callback should be set as the virtualized component's :ref.
   */
  children: PropTypes.func.isRequired,

  /**
   * Function responsible for tracking the loaded state of each row.
   * It should implement the following signature: ({ index: number }): boolean
   */
  isRowLoaded: PropTypes.func.isRequired,

  /**
   * Callback to be invoked when more rows must be loaded.
   * It should implement the following signature: ({ startIndex, stopIndex }): Promise
   * The returned Promise should be resolved once row data has finished loading.
   * It will be used to determine when to refresh the list with the newly-loaded data.
   * This callback may be called multiple times in reaction to a single scroll event.
   */
  loadMoreRows: PropTypes.func.isRequired,

  /**
   * Minimum number of rows to be loaded at a time.
   * This property can be used to batch requests to reduce HTTP requests.
   */
  minimumBatchSize: PropTypes.number.isRequired,

  /**
   * Number of rows in list; can be arbitrary high number if actual number is unknown.
   */
  rowCount: PropTypes.number.isRequired,

  /**
   * Threshold at which to pre-fetch data.
   * A threshold X means that data will start loading when a user scrolls within X rows.
   * This value defaults to 15.
   */
  threshold: PropTypes.number.isRequired
} : void 0;
function isRangeVisible(_ref2) {
  var lastRenderedStartIndex = _ref2.lastRenderedStartIndex,
      lastRenderedStopIndex = _ref2.lastRenderedStopIndex,
      startIndex = _ref2.startIndex,
      stopIndex = _ref2.stopIndex;

  return !(startIndex > lastRenderedStopIndex || stopIndex < lastRenderedStartIndex);
}

/**
 * Returns all of the ranges within a larger range that contain unloaded rows.
 */
function scanForUnloadedRanges(_ref3) {
  var isRowLoaded = _ref3.isRowLoaded,
      minimumBatchSize = _ref3.minimumBatchSize,
      rowCount = _ref3.rowCount,
      startIndex = _ref3.startIndex,
      stopIndex = _ref3.stopIndex;

  var unloadedRanges = [];

  var rangeStartIndex = null;
  var rangeStopIndex = null;

  for (var index = startIndex; index <= stopIndex; index++) {
    var loaded = isRowLoaded({ index: index });

    if (!loaded) {
      rangeStopIndex = index;
      if (rangeStartIndex === null) {
        rangeStartIndex = index;
      }
    } else if (rangeStopIndex !== null) {
      unloadedRanges.push({
        startIndex: rangeStartIndex,
        stopIndex: rangeStopIndex
      });

      rangeStartIndex = rangeStopIndex = null;
    }
  }

  // If :rangeStopIndex is not null it means we haven't ran out of unloaded rows.
  // Scan forward to try filling our :minimumBatchSize.
  if (rangeStopIndex !== null) {
    var potentialStopIndex = Math.min(Math.max(rangeStopIndex, rangeStartIndex + minimumBatchSize - 1), rowCount - 1);

    for (var _index = rangeStopIndex + 1; _index <= potentialStopIndex; _index++) {
      if (!isRowLoaded({ index: _index })) {
        rangeStopIndex = _index;
      } else {
        break;
      }
    }

    unloadedRanges.push({
      startIndex: rangeStartIndex,
      stopIndex: rangeStopIndex
    });
  }

  // Check to see if our first range ended prematurely.
  // In this case we should scan backwards to try filling our :minimumBatchSize.
  if (unloadedRanges.length) {
    var firstUnloadedRange = unloadedRanges[0];

    while (firstUnloadedRange.stopIndex - firstUnloadedRange.startIndex + 1 < minimumBatchSize && firstUnloadedRange.startIndex > 0) {
      var _index2 = firstUnloadedRange.startIndex - 1;

      if (!isRowLoaded({ index: _index2 })) {
        firstUnloadedRange.startIndex = _index2;
      } else {
        break;
      }
    }
  }

  return unloadedRanges;
}

/**
 * Since RV components use shallowCompare we need to force a render (even though props haven't changed).
 * However InfiniteLoader may wrap a Grid or it may wrap a Table or List.
 * In the first case the built-in React forceUpdate() method is sufficient to force a re-render,
 * But in the latter cases we need to use the RV-specific forceUpdateGrid() method.
 * Else the inner Grid will not be re-rendered and visuals may be stale.
 *
 * Additionally, while a Grid is scrolling the cells can be cached,
 * So it's important to invalidate that cache by recalculating sizes
 * before forcing a rerender.
 */
function forceUpdateReactVirtualizedComponent(component) {
  var currentIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var recomputeSize = typeof component.recomputeGridSize === 'function' ? component.recomputeGridSize : component.recomputeRowHeights;

  if (recomputeSize) {
    recomputeSize.call(component, currentIndex);
  } else {
    component.forceUpdate();
  }
}

/***/ }),

/***/ "evD5":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("77Pl");
var IE8_DOM_DEFINE = __webpack_require__("SfB7");
var toPrimitive = __webpack_require__("MmMw");
var dP = Object.defineProperty;

exports.f = __webpack_require__("+E39") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) {/* empty */}
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),

/***/ "exh5":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__("kM2E");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__("ZaQb").set });

/***/ }),

/***/ "fOxH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var storageKey = 'MILKYWAY_FANTASY_APP';
var defaultCache = {
  activeDraft: '',
  drafts: {}
};

function getStorage() {
  var cache = JSON.parse(localStorage.getItem(storageKey));

  if (cache === null) {
    localStorage.setItem(storageKey, JSON.stringify(defaultCache));
    return defaultCache;
  }

  return cache;
}

function updateStorage(draftName, data) {
  var cache = getStorage();
  cache.drafts[draftName] = _extends({}, data);
  cache.activeDraft = draftName;
  localStorage.setItem(storageKey, JSON.stringify(cache));
}

function setActiveDraft(draftName) {
  var cache = getStorage();
  cache.activeDraft = draftName;
  localStorage.setItem(storageKey, JSON.stringify(cache));
}

function deleteDraft(draftName) {
  var cache = getStorage();
  delete cache.drafts[draftName];
  if (cache.activeDraft === draftName) {
    cache.activeDraft = '';
  }
  localStorage.setItem(storageKey, JSON.stringify(cache));
  return cache;
}

/* harmony default export */ __webpack_exports__["a"] = ({
  getStorage: getStorage,
  updateStorage: updateStorage,
  deleteDraft: deleteDraft,
  setActiveDraft: setActiveDraft
});

/***/ }),

/***/ "fS6E":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("Kh5d");
module.exports = __webpack_require__("FeBl").Object.getPrototypeOf;

/***/ }),

/***/ "fWfb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim

var global = __webpack_require__("7KvD");
var has = __webpack_require__("D2L2");
var DESCRIPTORS = __webpack_require__("+E39");
var $export = __webpack_require__("kM2E");
var redefine = __webpack_require__("880/");
var META = __webpack_require__("06OY").KEY;
var $fails = __webpack_require__("S82l");
var shared = __webpack_require__("e8AB");
var setToStringTag = __webpack_require__("e6n0");
var uid = __webpack_require__("3Eo+");
var wks = __webpack_require__("dSzd");
var wksExt = __webpack_require__("Kh4W");
var wksDefine = __webpack_require__("crlp");
var keyOf = __webpack_require__("6vZM");
var enumKeys = __webpack_require__("Xc4G");
var isArray = __webpack_require__("7UMu");
var anObject = __webpack_require__("77Pl");
var toIObject = __webpack_require__("TcQ7");
var toPrimitive = __webpack_require__("MmMw");
var createDesc = __webpack_require__("X8DO");
var _create = __webpack_require__("Yobk");
var gOPNExt = __webpack_require__("Rrel");
var $GOPD = __webpack_require__("LKZe");
var $DP = __webpack_require__("evD5");
var $keys = __webpack_require__("lktj");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function get() {
      return dP(this, 'a', { value: 7 }).a;
    }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function wrap(tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    }return setSymbolDesc(it, key, D);
  }return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) {
    $defineProperty(it, key = keys[i++], P[key]);
  }return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  }return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  }return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function $set(value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__("n0T6").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("NpIQ").f = $propertyIsEnumerable;
  __webpack_require__("1kS7").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("O4g8")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols =
// 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j = 0; es6Symbols.length > j;) {
  wks(es6Symbols[j++]);
}for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) {
  wksDefine(wellKnownSymbols[k++]);
}$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function _for(key) {
    return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key) {
    if (isSymbol(key)) return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function useSetter() {
    setter = true;
  },
  useSimple: function useSimple() {
    setter = false;
  }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) {
      args.push(arguments[i++]);
    }replacer = args[1];
    if (typeof replacer == 'function') $replacer = replacer;
    if ($replacer || !isArray(replacer)) replacer = function replacer(key, value) {
      if ($replacer) value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("hJx8")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),

/***/ "fZjL":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("jFbC"), __esModule: true };

/***/ }),

/***/ "fkB2":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("UuGF");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),

/***/ "fxRn":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("+tPU");
__webpack_require__("zQR9");
module.exports = __webpack_require__("g8Ux");

/***/ }),

/***/ "g8Ux":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("77Pl");
var get = __webpack_require__("3fs2");
module.exports = __webpack_require__("FeBl").getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};

/***/ }),

/***/ "gsj2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = calculateSizeAndPositionData;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SectionManager__ = __webpack_require__("XpXr");


function calculateSizeAndPositionData(_ref) {
  var cellCount = _ref.cellCount,
      cellSizeAndPositionGetter = _ref.cellSizeAndPositionGetter,
      sectionSize = _ref.sectionSize;

  var cellMetadata = [];
  var sectionManager = new __WEBPACK_IMPORTED_MODULE_0__SectionManager__["a" /* default */](sectionSize);
  var height = 0;
  var width = 0;

  for (var index = 0; index < cellCount; index++) {
    var cellMetadatum = cellSizeAndPositionGetter({ index: index });

    if (cellMetadatum.height == null || isNaN(cellMetadatum.height) || cellMetadatum.width == null || isNaN(cellMetadatum.width) || cellMetadatum.x == null || isNaN(cellMetadatum.x) || cellMetadatum.y == null || isNaN(cellMetadatum.y)) {
      throw Error('Invalid metadata returned for cell ' + index + ':\n        x:' + cellMetadatum.x + ', y:' + cellMetadatum.y + ', width:' + cellMetadatum.width + ', height:' + cellMetadatum.height);
    }

    height = Math.max(height, cellMetadatum.y + cellMetadatum.height);
    width = Math.max(width, cellMetadatum.x + cellMetadatum.width);

    cellMetadata[index] = cellMetadatum;
    sectionManager.registerCell({
      cellMetadatum: cellMetadatum,
      index: index
    });
  }

  return {
    cellMetadata: cellMetadata,
    height: height,
    sectionManager: sectionManager,
    width: width
  };
}

/***/ }),

/***/ "gt/O":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

/***/ }),

/***/ "h65t":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("UuGF");
var defined = __webpack_require__("52gC");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),

/***/ "hJx8":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("evD5");
var createDesc = __webpack_require__("X8DO");
module.exports = __webpack_require__("+E39") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),

/***/ "hVXz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = registerScrollListener;
/* harmony export (immutable) */ __webpack_exports__["b"] = unregisterScrollListener;
var mountedInstances = [];
var originalBodyPointerEvents = null;
var disablePointerEventsTimeoutId = null;

function enablePointerEventsIfDisabled() {
  if (disablePointerEventsTimeoutId) {
    disablePointerEventsTimeoutId = null;

    document.body.style.pointerEvents = originalBodyPointerEvents;

    originalBodyPointerEvents = null;
  }
}

function enablePointerEventsAfterDelayCallback() {
  enablePointerEventsIfDisabled();
  mountedInstances.forEach(function (instance) {
    return instance.__resetIsScrolling();
  });
}

function enablePointerEventsAfterDelay() {
  if (disablePointerEventsTimeoutId) {
    clearTimeout(disablePointerEventsTimeoutId);
  }

  var maximumTimeout = 0;
  mountedInstances.forEach(function (instance) {
    maximumTimeout = Math.max(maximumTimeout, instance.props.scrollingResetTimeInterval);
  });

  disablePointerEventsTimeoutId = setTimeout(enablePointerEventsAfterDelayCallback, maximumTimeout);
}

function onScrollWindow(event) {
  if (event.currentTarget === window && originalBodyPointerEvents == null) {
    originalBodyPointerEvents = document.body.style.pointerEvents;

    document.body.style.pointerEvents = 'none';
  }
  enablePointerEventsAfterDelay();
  mountedInstances.forEach(function (instance) {
    if (instance.scrollElement === event.currentTarget) {
      instance.__handleWindowScrollEvent(event);
    }
  });
}

function registerScrollListener(component, element) {
  if (!mountedInstances.some(function (instance) {
    return instance.scrollElement === element;
  })) {
    element.addEventListener('scroll', onScrollWindow);
  }
  mountedInstances.push(component);
}

function unregisterScrollListener(component, element) {
  mountedInstances = mountedInstances.filter(function (instance) {
    return instance !== component;
  });
  if (!mountedInstances.length) {
    element.removeEventListener('scroll', onScrollWindow);
    if (disablePointerEventsTimeoutId) {
      clearTimeout(disablePointerEventsTimeoutId);
      enablePointerEventsIfDisabled();
    }
  }
}

/***/ }),

/***/ "i/C/":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("exh5");
module.exports = __webpack_require__("FeBl").Object.setPrototypeOf;

/***/ }),

/***/ "iInB":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__("TcQ7");
var $getOwnPropertyDescriptor = __webpack_require__("LKZe").f;

__webpack_require__("uqUo")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});

/***/ }),

/***/ "jFbC":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("Cdx3");
module.exports = __webpack_require__("FeBl").Object.keys;

/***/ }),

/***/ "kM2E":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7KvD");
var core = __webpack_require__("FeBl");
var ctx = __webpack_require__("+ZMJ");
var hide = __webpack_require__("hJx8");
var PROTOTYPE = 'prototype';

var $export = function $export(type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? function (C) {
      var F = function F(a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0:
              return new C();
            case 1:
              return new C(a);
            case 2:
              return new C(a, b);
          }return new C(a, b, c);
        }return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
      // make static versions for prototype methods
    }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1; // forced
$export.G = 2; // global
$export.S = 4; // static
$export.P = 8; // proto
$export.B = 16; // bind
$export.W = 32; // wrap
$export.U = 64; // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;

/***/ }),

/***/ "kiBT":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("i/C/"), __esModule: true };

/***/ }),

/***/ "lOnJ":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),

/***/ "lktj":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("Ibhu");
var enumBugKeys = __webpack_require__("xnc9");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

/***/ }),

/***/ "mClu":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("kM2E");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("+E39"), 'Object', { defineProperty: __webpack_require__("evD5").f });

/***/ }),

/***/ "n0T6":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("Ibhu");
var hiddenKeys = __webpack_require__("xnc9").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};

/***/ }),

/***/ "nNuQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ArrowKeyStepper__ = __webpack_require__("4dHp");
/* unused harmony reexport ArrowKeyStepper */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AutoSizer__ = __webpack_require__("E19O");
/* unused harmony reexport AutoSizer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CellMeasurer__ = __webpack_require__("0Bz/");
/* unused harmony reexport CellMeasurer */
/* unused harmony reexport CellMeasurerCache */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Collection__ = __webpack_require__("C3rG");
/* unused harmony reexport Collection */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ColumnSizer__ = __webpack_require__("9qMq");
/* unused harmony reexport ColumnSizer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Grid__ = __webpack_require__("6YNH");
/* unused harmony reexport accessibilityOverscanIndicesGetter */
/* unused harmony reexport defaultCellRangeRenderer */
/* unused harmony reexport defaultOverscanIndicesGetter */
/* unused harmony reexport Grid */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__InfiniteLoader__ = __webpack_require__("Fm4H");
/* unused harmony reexport InfiniteLoader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__List__ = __webpack_require__("eQ63");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_7__List__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Masonry__ = __webpack_require__("5yP5");
/* unused harmony reexport createMasonryCellPositioner */
/* unused harmony reexport Masonry */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__MultiGrid__ = __webpack_require__("YQgO");
/* unused harmony reexport MultiGrid */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ScrollSync__ = __webpack_require__("2pUw");
/* unused harmony reexport ScrollSync */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Table__ = __webpack_require__("oEJu");
/* unused harmony reexport defaultTableCellDataGetter */
/* unused harmony reexport defaultTableCellRenderer */
/* unused harmony reexport defaultTableHeaderRenderer */
/* unused harmony reexport defaultTableHeaderRowRenderer */
/* unused harmony reexport defaultTableRowRenderer */
/* unused harmony reexport Table */
/* unused harmony reexport Column */
/* unused harmony reexport SortDirection */
/* unused harmony reexport SortIndicator */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__WindowScroller__ = __webpack_require__("u4hh");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_12__WindowScroller__["a"]; });














/***/ }),

/***/ "nsjc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__ = __webpack_require__("d7EF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("Zrlr");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("wxAW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vendor_intervalTree__ = __webpack_require__("0LuN");





// Position cache requirements:
//   O(log(n)) lookup of cells to render for a given viewport size
//   O(1) lookup of shortest measured column (so we know when to enter phase 1)
var PositionCache = function () {
  function PositionCache() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, PositionCache);

    this._columnSizeMap = {};
    this._intervalTree = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__vendor_intervalTree__["a" /* default */])();
    this._leftMap = {};
  }
  // Tracks the height of each column


  // Store tops and bottoms of each cell for fast intersection lookup.


  // Maps cell index to x coordinates for quick lookup.


  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(PositionCache, [{
    key: 'estimateTotalHeight',
    value: function estimateTotalHeight(cellCount, columnCount, defaultCellHeight) {
      var unmeasuredCellCount = cellCount - this.count;
      return this.tallestColumnSize + Math.ceil(unmeasuredCellCount / columnCount) * defaultCellHeight;
    }

    // Render all cells visible within the viewport range defined.

  }, {
    key: 'range',
    value: function range(scrollTop, clientHeight, renderCallback) {
      var _this = this;

      this._intervalTree.queryInterval(scrollTop, scrollTop + clientHeight, function (_ref) {
        var _ref2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_ref, 3),
            top = _ref2[0],
            _ = _ref2[1],
            index = _ref2[2];

        return renderCallback(index, _this._leftMap[index], top);
      });
    }
  }, {
    key: 'setPosition',
    value: function setPosition(index, left, top, height) {
      this._intervalTree.insert([top, top + height, index]);
      this._leftMap[index] = left;

      var columnSizeMap = this._columnSizeMap;
      var columnHeight = columnSizeMap[left];
      if (columnHeight === undefined) {
        columnSizeMap[left] = top + height;
      } else {
        columnSizeMap[left] = Math.max(columnHeight, top + height);
      }
    }
  }, {
    key: 'count',
    get: function get() {
      return this._intervalTree.count;
    }
  }, {
    key: 'shortestColumnSize',
    get: function get() {
      var columnSizeMap = this._columnSizeMap;

      var size = 0;

      for (var i in columnSizeMap) {
        var height = columnSizeMap[i];
        size = size === 0 ? height : Math.min(size, height);
      }

      return size;
    }
  }, {
    key: 'tallestColumnSize',
    get: function get() {
      var columnSizeMap = this._columnSizeMap;

      var size = 0;

      for (var i in columnSizeMap) {
        var height = columnSizeMap[i];
        size = Math.max(size, height);
      }

      return size;
    }
  }]);

  return PositionCache;
}();

/* harmony default export */ __webpack_exports__["a"] = (PositionCache);

/***/ }),

/***/ "oEJu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Table__ = __webpack_require__("Isos");
/* unused harmony reexport default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defaultCellDataGetter__ = __webpack_require__("AlMl");
/* unused harmony reexport defaultCellDataGetter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__defaultCellRenderer__ = __webpack_require__("OzLw");
/* unused harmony reexport defaultCellRenderer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__defaultHeaderRowRenderer_js__ = __webpack_require__("5Xac");
/* unused harmony reexport defaultHeaderRowRenderer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__defaultHeaderRenderer__ = __webpack_require__("I82j");
/* unused harmony reexport defaultHeaderRenderer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__defaultRowRenderer__ = __webpack_require__("YGKy");
/* unused harmony reexport defaultRowRenderer */
/* unused harmony reexport Table */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Column__ = __webpack_require__("s9f0");
/* unused harmony reexport Column */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__SortDirection__ = __webpack_require__("P5SW");
/* unused harmony reexport SortDirection */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__SortIndicator__ = __webpack_require__("Iraw");
/* unused harmony reexport SortIndicator */





















/***/ }),

/***/ "oM7Q":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("sF+V");
var $Object = __webpack_require__("FeBl").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};

/***/ }),

/***/ "pFYg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__("Zzip");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__("5QVw");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj;
};

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ "pf5n":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("EBst");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);



var items = ['Remaining', 'Taken', 'Team'];

var TopNav = function TopNav(props) {
  var className = ['top-nav__link'];
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
    'nav',
    { className: 'top-nav' },
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
      'div',
      { className: 'top-nav__left' },
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
        'button',
        { className: 'top-nav__btn-pick', onClick: props.decreasePick },
        '-'
      ),
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
        'span',
        { className: 'top-nav__pick-info' },
        'R',
        props.round,
        ' P',
        props.pick
      ),
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
        'button',
        { className: 'top-nav__btn-pick', onClick: props.increasePick },
        '+'
      )
    ),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
      'div',
      { className: 'top-nav__right' },
      items.map(function (item) {
        var className = ['top-nav__link', item === props.active ? 'top-nav__link--active' : ''].join(' ').trim();
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
          'a',
          { className: className, 'data-page': item, onClick: props.changePage },
          item
        );
      })
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (TopNav);

/***/ }),

/***/ "pgj2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__("Zrlr");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__("wxAW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CellMeasurer__ = __webpack_require__("0Bz/");




/**
 * Caches measurements for a given cell.
 */
var CellMeasurerCacheDecorator = function () {
  function CellMeasurerCacheDecorator() {
    var _this = this;

    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, CellMeasurerCacheDecorator);

    this.columnWidth = function (_ref) {
      var index = _ref.index;

      _this._cellMeasurerCache.columnWidth({
        index: index + _this._columnIndexOffset
      });
    };

    this.rowHeight = function (_ref2) {
      var index = _ref2.index;

      _this._cellMeasurerCache.rowHeight({
        index: index + _this._rowIndexOffset
      });
    };

    var cellMeasurerCache = params.cellMeasurerCache,
        _params$columnIndexOf = params.columnIndexOffset,
        columnIndexOffset = _params$columnIndexOf === undefined ? 0 : _params$columnIndexOf,
        _params$rowIndexOffse = params.rowIndexOffset,
        rowIndexOffset = _params$rowIndexOffse === undefined ? 0 : _params$rowIndexOffse;

    this._cellMeasurerCache = cellMeasurerCache;
    this._columnIndexOffset = columnIndexOffset;
    this._rowIndexOffset = rowIndexOffset;
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(CellMeasurerCacheDecorator, [{
    key: 'clear',
    value: function clear(rowIndex, columnIndex) {
      this._cellMeasurerCache.clear(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset);
    }
  }, {
    key: 'clearAll',
    value: function clearAll() {
      this._cellMeasurerCache.clearAll();
    }
  }, {
    key: 'hasFixedHeight',
    value: function hasFixedHeight() {
      return this._cellMeasurerCache.hasFixedHeight();
    }
  }, {
    key: 'hasFixedWidth',
    value: function hasFixedWidth() {
      return this._cellMeasurerCache.hasFixedWidth();
    }
  }, {
    key: 'getHeight',
    value: function getHeight(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      return this._cellMeasurerCache.getHeight(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset);
    }
  }, {
    key: 'getWidth',
    value: function getWidth(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      return this._cellMeasurerCache.getWidth(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset);
    }
  }, {
    key: 'has',
    value: function has(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      return this._cellMeasurerCache.has(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset);
    }
  }, {
    key: 'set',
    value: function set(rowIndex, columnIndex, width, height) {
      this._cellMeasurerCache.set(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset, width, height);
    }
  }, {
    key: 'defaultHeight',
    get: function get() {
      return this._cellMeasurerCache.defaultHeight;
    }
  }, {
    key: 'defaultWidth',
    get: function get() {
      return this._cellMeasurerCache.defaultWidth;
    }
  }]);

  return CellMeasurerCacheDecorator;
}();

/* harmony default export */ __webpack_exports__["a"] = (CellMeasurerCacheDecorator);

/***/ }),

/***/ "q41T":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Binary Search Bounds
 * https://github.com/mikolalysenko/binary-search-bounds
 * Mikola Lysenko
 *
 * Inlined because of Content Security Policy issue caused by the use of `new Function(...)` syntax.
 * Issue reported here: https://github.com/mikolalysenko/binary-search-bounds/issues/5
 **/

function _GEA(a, l, h, y) {
  var i = h + 1;
  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];
    if (x >= y) {
      i = m;
      h = m - 1;
    } else {
      l = m + 1;
    }
  }
  return i;
}
function _GEP(a, l, h, y, c) {
  var i = h + 1;
  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];
    if (c(x, y) >= 0) {
      i = m;
      h = m - 1;
    } else {
      l = m + 1;
    }
  }
  return i;
}
function dispatchBsearchGE(a, y, c, l, h) {
  if (typeof c === "function") {
    return _GEP(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y, c);
  } else {
    return _GEA(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y);
  }
}

function _GTA(a, l, h, y) {
  var i = h + 1;
  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];
    if (x > y) {
      i = m;
      h = m - 1;
    } else {
      l = m + 1;
    }
  }
  return i;
}
function _GTP(a, l, h, y, c) {
  var i = h + 1;
  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];
    if (c(x, y) > 0) {
      i = m;
      h = m - 1;
    } else {
      l = m + 1;
    }
  }
  return i;
}
function dispatchBsearchGT(a, y, c, l, h) {
  if (typeof c === "function") {
    return _GTP(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y, c);
  } else {
    return _GTA(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y);
  }
}

function _LTA(a, l, h, y) {
  var i = l - 1;
  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];
    if (x < y) {
      i = m;
      l = m + 1;
    } else {
      h = m - 1;
    }
  }
  return i;
}
function _LTP(a, l, h, y, c) {
  var i = l - 1;
  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];
    if (c(x, y) < 0) {
      i = m;
      l = m + 1;
    } else {
      h = m - 1;
    }
  }
  return i;
}
function dispatchBsearchLT(a, y, c, l, h) {
  if (typeof c === "function") {
    return _LTP(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y, c);
  } else {
    return _LTA(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y);
  }
}

function _LEA(a, l, h, y) {
  var i = l - 1;
  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];
    if (x <= y) {
      i = m;
      l = m + 1;
    } else {
      h = m - 1;
    }
  }
  return i;
}
function _LEP(a, l, h, y, c) {
  var i = l - 1;
  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];
    if (c(x, y) <= 0) {
      i = m;
      l = m + 1;
    } else {
      h = m - 1;
    }
  }
  return i;
}
function dispatchBsearchLE(a, y, c, l, h) {
  if (typeof c === "function") {
    return _LEP(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y, c);
  } else {
    return _LEA(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y);
  }
}

function _EQA(a, l, h, y) {
  l - 1;
  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];
    if (x === y) {
      return m;
    } else if (x <= y) {
      l = m + 1;
    } else {
      h = m - 1;
    }
  }
  return -1;
}
function _EQP(a, l, h, y, c) {
  l - 1;
  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];
    var p = c(x, y);
    if (p === 0) {
      return m;
    } else if (p <= 0) {
      l = m + 1;
    } else {
      h = m - 1;
    }
  }
  return -1;
}
function dispatchBsearchEQ(a, y, c, l, h) {
  if (typeof c === "function") {
    return _EQP(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y, c);
  } else {
    return _EQA(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y);
  }
}

/* harmony default export */ __webpack_exports__["a"] = ({
  ge: dispatchBsearchGE,
  gt: dispatchBsearchGT,
  lt: dispatchBsearchLT,
  le: dispatchBsearchLE,
  eq: dispatchBsearchEQ
});

/***/ }),

/***/ "qio6":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("evD5");
var anObject = __webpack_require__("77Pl");
var getKeys = __webpack_require__("lktj");

module.exports = __webpack_require__("+E39") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) {
    dP.f(O, P = keys[i++], Properties[P]);
  }return O;
};

/***/ }),

/***/ "s9f0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("Zx67");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("Zrlr");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("zwoO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__("Pf15");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__("KSGD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("AX2D");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__defaultHeaderRenderer__ = __webpack_require__("I82j");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__defaultCellRenderer__ = __webpack_require__("OzLw");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__defaultCellDataGetter__ = __webpack_require__("AlMl");










/**
 * Describes the header and cell contents of a table column.
 */

var Column = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(Column, _Component);

  function Column() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Column);

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Column.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Column)).apply(this, arguments));
  }

  return Column;
}(__WEBPACK_IMPORTED_MODULE_5_react__["c" /* Component */]);

Column.defaultProps = {
  cellDataGetter: __WEBPACK_IMPORTED_MODULE_8__defaultCellDataGetter__["a" /* default */],
  cellRenderer: __WEBPACK_IMPORTED_MODULE_7__defaultCellRenderer__["a" /* default */],
  flexGrow: 0,
  flexShrink: 1,
  headerRenderer: __WEBPACK_IMPORTED_MODULE_6__defaultHeaderRenderer__["a" /* default */],
  style: {}
};
/* unused harmony default export */ var _unused_webpack_default_export = (Column);
 false ? Column.propTypes = {
  /** Optional aria-label value to set on the column header */
  'aria-label': PropTypes.string,

  /**
   * Callback responsible for returning a cell's data, given its :dataKey
   * ({ columnData: any, dataKey: string, rowData: any }): any
   */
  cellDataGetter: PropTypes.func,

  /**
   * Callback responsible for rendering a cell's contents.
   * ({ cellData: any, columnData: any, dataKey: string, rowData: any, rowIndex: number }): node
   */
  cellRenderer: PropTypes.func,

  /** Optional CSS class to apply to cell */
  className: PropTypes.string,

  /** Optional additional data passed to this column's :cellDataGetter */
  columnData: PropTypes.object,

  /** Uniquely identifies the row-data attribute correspnding to this cell */
  dataKey: PropTypes.any.isRequired,

  /** If sort is enabled for the table at large, disable it for this column */
  disableSort: PropTypes.bool,

  /** Flex grow style; defaults to 0 */
  flexGrow: PropTypes.number,

  /** Flex shrink style; defaults to 1 */
  flexShrink: PropTypes.number,

  /** Optional CSS class to apply to this column's header */
  headerClassName: PropTypes.string,

  /**
   * Optional callback responsible for rendering a column header contents.
   * ({ columnData: object, dataKey: string, disableSort: boolean, label: node, sortBy: string, sortDirection: string }): PropTypes.node
   */
  headerRenderer: PropTypes.func.isRequired,

  /** Optional id to set on the column header */
  id: PropTypes.string,

  /** Header label for this column */
  label: PropTypes.node,

  /** Maximum width of column; this property will only be used if :flexGrow is > 0. */
  maxWidth: PropTypes.number,

  /** Minimum width of column. */
  minWidth: PropTypes.number,

  /** Optional inline style to apply to cell */
  style: PropTypes.object,

  /** Flex basis (width) for this column; This value can grow or shrink based on :flexGrow and :flexShrink properties. */
  width: PropTypes.number.isRequired
} : void 0;

/***/ }),

/***/ "sB3e":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("52gC");
module.exports = function (it) {
  return Object(defined(it));
};

/***/ }),

/***/ "sF+V":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("kM2E");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__("Yobk") });

/***/ }),

/***/ "u4hh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__WindowScroller__ = __webpack_require__("9jFi");
/* unused harmony reexport default */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__WindowScroller__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_onScroll__ = __webpack_require__("hVXz");
/* unused harmony reexport IS_SCROLLING_TIMEOUT */







/***/ }),

/***/ "uqUo":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("kM2E");
var core = __webpack_require__("FeBl");
var fails = __webpack_require__("S82l");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () {
    fn(1);
  }), 'Object', exp);
};

/***/ }),

/***/ "us/S":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("Xd32"), __esModule: true };

/***/ }),

/***/ "vAQj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DEFAULT_SCROLLING_RESET_TIME_INTERVAL */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("Dd8w");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("Zx67");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__("Zrlr");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__("wxAW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("zwoO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__("Pf15");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__("AX2D");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames__ = __webpack_require__("HW6M");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__PositionCache__ = __webpack_require__("nsjc");










var emptyObject = {};

/**
 * Specifies the number of miliseconds during which to disable pointer events while a scroll is in progress.
 * This improves performance and makes scrolling smoother.
 */
var DEFAULT_SCROLLING_RESET_TIME_INTERVAL = 150;

/**
 * This component efficiently displays arbitrarily positioned cells using windowing techniques.
 * Cell position is determined by an injected `cellPositioner` property.
 * Windowing is vertical; this component does not support horizontal scrolling.
 *
 * Rendering occurs in two phases:
 * 1) First pass uses estimated cell sizes (provided by the cache) to determine how many cells to measure in a batch.
 *    Batch size is chosen using a fast, naive layout algorithm that stacks images in order until the viewport has been filled.
 *    After measurement is complete (componentDidMount or componentDidUpdate) this component evaluates positioned cells
 *    in order to determine if another measurement pass is required (eg if actual cell sizes were less than estimated sizes).
 *    All measurements are permanently cached (keyed by `keyMapper`) for performance purposes.
 * 2) Second pass uses the external `cellPositioner` to layout cells.
 *    At this time the positioner has access to cached size measurements for all cells.
 *    The positions it returns are cached by Masonry for fast access later.
 *    Phase one is repeated if the user scrolls beyond the current layout's bounds.
 *    If the layout is invalidated due to eg a resize, cached positions can be cleared using `recomputeCellPositions()`.
 *
 * Animation constraints:
 *   Simple animations are supported (eg translate/slide into place on initial reveal).
 *   More complex animations are not (eg flying from one position to another on resize).
 *
 * Layout constraints:
 *   This component supports multi-column layout.
 *   The height of each item may vary.
 *   The width of each item must not exceed the width of the column it is "in".
 *   The left position of all items within a column must align.
 *   (Items may not span multiple columns.)
 */

var Masonry = function (_PureComponent) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Masonry, _PureComponent);

  function Masonry(props, context) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Masonry);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Masonry.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(Masonry)).call(this, props, context));

    _this._invalidateOnUpdateStartIndex = null;
    _this._invalidateOnUpdateStopIndex = null;
    _this._positionCache = new __WEBPACK_IMPORTED_MODULE_8__PositionCache__["a" /* default */]();
    _this._startIndex = null;
    _this._startIndexMemoized = null;
    _this._stopIndex = null;
    _this._stopIndexMemoized = null;

    _this.state = {
      isScrolling: false,
      scrollTop: 0
    };

    _this._debounceResetIsScrollingCallback = _this._debounceResetIsScrollingCallback.bind(_this);
    _this._setScrollingContainerRef = _this._setScrollingContainerRef.bind(_this);
    _this._onScroll = _this._onScroll.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Masonry, [{
    key: 'clearCellPositions',
    value: function clearCellPositions() {
      this._positionCache = new __WEBPACK_IMPORTED_MODULE_8__PositionCache__["a" /* default */]();
      this.forceUpdate();
    }

    // HACK This method signature was intended for Grid

  }, {
    key: 'invalidateCellSizeAfterRender',
    value: function invalidateCellSizeAfterRender(_ref) {
      var index = _ref.rowIndex;

      if (this._invalidateOnUpdateStartIndex === null) {
        this._invalidateOnUpdateStartIndex = index;
        this._invalidateOnUpdateStopIndex = index;
      } else {
        this._invalidateOnUpdateStartIndex = Math.min(this._invalidateOnUpdateStartIndex, index);
        this._invalidateOnUpdateStopIndex = Math.max(this._invalidateOnUpdateStopIndex, index);
      }
    }
  }, {
    key: 'recomputeCellPositions',
    value: function recomputeCellPositions() {
      var stopIndex = this._positionCache.count - 1;

      this._positionCache = new __WEBPACK_IMPORTED_MODULE_8__PositionCache__["a" /* default */]();
      this._populatePositionCache(0, stopIndex);

      this.forceUpdate();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._checkInvalidateOnUpdate();
      this._invokeOnScrollCallback();
      this._invokeOnCellsRenderedCallback();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      this._checkInvalidateOnUpdate();
      this._invokeOnScrollCallback();
      this._invokeOnCellsRenderedCallback();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this._debounceResetIsScrollingId) {
        clearTimeout(this._debounceResetIsScrollingId);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var scrollTop = this.props.scrollTop;

      if (scrollTop !== nextProps.scrollTop) {
        this._debounceResetIsScrolling();

        this.setState({
          isScrolling: true,
          scrollTop: nextProps.scrollTop
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          autoHeight = _props.autoHeight,
          cellCount = _props.cellCount,
          cellMeasurerCache = _props.cellMeasurerCache,
          cellRenderer = _props.cellRenderer,
          className = _props.className,
          height = _props.height,
          id = _props.id,
          keyMapper = _props.keyMapper,
          overscanByPixels = _props.overscanByPixels,
          role = _props.role,
          style = _props.style,
          tabIndex = _props.tabIndex,
          width = _props.width;
      var _state = this.state,
          isScrolling = _state.isScrolling,
          scrollTop = _state.scrollTop;

      var children = [];

      var estimateTotalHeight = this._getEstimatedTotalHeight();

      var shortestColumnSize = this._positionCache.shortestColumnSize;
      var measuredCellCount = this._positionCache.count;

      // We need to measure more cells before layout
      if (shortestColumnSize < scrollTop + height + overscanByPixels && measuredCellCount < cellCount) {
        var batchSize = Math.min(cellCount - measuredCellCount, Math.ceil((scrollTop + height + overscanByPixels - shortestColumnSize) / cellMeasurerCache.defaultHeight * width / cellMeasurerCache.defaultWidth));

        for (var _index = measuredCellCount; _index < measuredCellCount + batchSize; _index++) {
          children.push(cellRenderer({
            index: _index,
            isScrolling: isScrolling,
            key: keyMapper(_index),
            parent: this,
            style: {
              width: cellMeasurerCache.getWidth(_index)
            }
          }));
        }
      } else {
        (function () {
          var stopIndex = void 0;
          var startIndex = void 0;

          _this2._positionCache.range(scrollTop - overscanByPixels, height + overscanByPixels, function (index, left, top) {
            if (typeof startIndex === 'undefined') {
              startIndex = index;
              stopIndex = index;
            } else {
              startIndex = Math.min(startIndex, index);
              stopIndex = Math.max(stopIndex, index);
            }

            children.push(cellRenderer({
              index: index,
              isScrolling: isScrolling,
              key: keyMapper(index),
              parent: _this2,
              style: {
                height: cellMeasurerCache.getHeight(index),
                left: left,
                position: 'absolute',
                top: top,
                width: cellMeasurerCache.getWidth(index)
              }
            }));

            _this2._startIndex = startIndex;
            _this2._stopIndex = stopIndex;
          });
        })();
      }

      return __WEBPACK_IMPORTED_MODULE_6_react__["a" /* default */].createElement('div', {
        ref: this._setScrollingContainerRef,
        'aria-label': this.props['aria-label'],
        className: __WEBPACK_IMPORTED_MODULE_7_classnames___default()('ReactVirtualized__Masonry', className),
        id: id,
        onScroll: this._onScroll,
        role: role,
        style: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
          boxSizing: 'border-box',
          direction: 'ltr',
          height: autoHeight ? 'auto' : height,
          overflowX: 'hidden',
          overflowY: estimateTotalHeight < height ? 'hidden' : 'auto',
          position: 'relative',
          width: width,
          WebkitOverflowScrolling: 'touch',
          willChange: 'transform'
        }, style),
        tabIndex: tabIndex
      }, __WEBPACK_IMPORTED_MODULE_6_react__["a" /* default */].createElement('div', {
        className: 'ReactVirtualized__Masonry__innerScrollContainer',
        style: {
          width: '100%',
          height: estimateTotalHeight,
          maxWidth: '100%',
          maxHeight: estimateTotalHeight,
          overflow: 'hidden',
          pointerEvents: isScrolling ? 'none' : '',
          position: 'relative'
        }
      }, children));
    }
  }, {
    key: '_checkInvalidateOnUpdate',
    value: function _checkInvalidateOnUpdate() {
      if (typeof this._invalidateOnUpdateStartIndex === 'number') {
        var _startIndex = this._invalidateOnUpdateStartIndex;
        var _stopIndex = this._invalidateOnUpdateStopIndex;

        this._invalidateOnUpdateStartIndex = null;
        this._invalidateOnUpdateStopIndex = null;

        // Query external layout logic for position of newly-measured cells
        this._populatePositionCache(_startIndex, _stopIndex);

        this.forceUpdate();
      }
    }
  }, {
    key: '_debounceResetIsScrolling',
    value: function _debounceResetIsScrolling() {
      var scrollingResetTimeInterval = this.props.scrollingResetTimeInterval;

      if (this._debounceResetIsScrollingId) {
        clearTimeout(this._debounceResetIsScrollingId);
      }

      this._debounceResetIsScrollingId = setTimeout(this._debounceResetIsScrollingCallback, scrollingResetTimeInterval);
    }
  }, {
    key: '_debounceResetIsScrollingCallback',
    value: function _debounceResetIsScrollingCallback() {
      this.setState({
        isScrolling: false
      });
    }
  }, {
    key: '_getEstimatedTotalHeight',
    value: function _getEstimatedTotalHeight() {
      var _props2 = this.props,
          cellCount = _props2.cellCount,
          cellMeasurerCache = _props2.cellMeasurerCache,
          width = _props2.width;

      var estimatedColumnCount = Math.floor(width / cellMeasurerCache.defaultWidth);

      return this._positionCache.estimateTotalHeight(cellCount, estimatedColumnCount, cellMeasurerCache.defaultHeight);
    }
  }, {
    key: '_invokeOnScrollCallback',
    value: function _invokeOnScrollCallback() {
      var _props3 = this.props,
          height = _props3.height,
          onScroll = _props3.onScroll;
      var scrollTop = this.state.scrollTop;

      if (this._onScrollMemoized !== scrollTop) {
        onScroll({
          clientHeight: height,
          scrollHeight: this._getEstimatedTotalHeight(),
          scrollTop: scrollTop
        });

        this._onScrollMemoized = scrollTop;
      }
    }
  }, {
    key: '_invokeOnCellsRenderedCallback',
    value: function _invokeOnCellsRenderedCallback() {
      if (this._startIndexMemoized !== this._startIndex || this._stopIndexMemoized !== this._stopIndex) {
        var _onCellsRendered = this.props.onCellsRendered;

        _onCellsRendered({
          startIndex: this._startIndex,
          stopIndex: this._stopIndex
        });

        this._startIndexMemoized = this._startIndex;
        this._stopIndexMemoized = this._stopIndex;
      }
    }
  }, {
    key: '_populatePositionCache',
    value: function _populatePositionCache(startIndex, stopIndex) {
      var _props4 = this.props,
          cellMeasurerCache = _props4.cellMeasurerCache,
          cellPositioner = _props4.cellPositioner;

      for (var _index2 = startIndex; _index2 <= stopIndex; _index2++) {
        var _cellPositioner = cellPositioner(_index2),
            _left = _cellPositioner.left,
            _top = _cellPositioner.top;

        this._positionCache.setPosition(_index2, _left, _top, cellMeasurerCache.getHeight(_index2));
      }
    }
  }, {
    key: '_setScrollingContainerRef',
    value: function _setScrollingContainerRef(ref) {
      this._scrollingContainer = ref;
    }
  }, {
    key: '_onScroll',
    value: function _onScroll(event) {
      var height = this.props.height;

      var eventScrollTop = event.target.scrollTop;

      // When this component is shrunk drastically, React dispatches a series of back-to-back scroll events,
      // Gradually converging on a scrollTop that is within the bounds of the new, smaller height.
      // This causes a series of rapid renders that is slow for long lists.
      // We can avoid that by doing some simple bounds checking to ensure that scroll offsets never exceed their bounds.
      var scrollTop = Math.min(Math.max(0, this._getEstimatedTotalHeight() - height), eventScrollTop);

      // On iOS, we can arrive at negative offsets by swiping past the start or end.
      // Avoid re-rendering in this case as it can cause problems; see #532 for more.
      if (eventScrollTop !== scrollTop) {
        return;
      }

      // Prevent pointer events from interrupting a smooth scroll
      this._debounceResetIsScrolling();

      // Certain devices (like Apple touchpad) rapid-fire duplicate events.
      // Don't force a re-render if this is the case.
      // The mouse may move faster then the animation frame does.
      // Use requestAnimationFrame to avoid over-updating.
      if (this.state.scrollTop !== scrollTop) {
        this.setState({
          isScrolling: true,
          scrollTop: scrollTop
        });
      }
    }
  }]);

  return Masonry;
}(__WEBPACK_IMPORTED_MODULE_6_react__["b" /* PureComponent */]);

Masonry.defaultProps = {
  autoHeight: false,
  keyMapper: identity,
  onCellsRendered: noop,
  onScroll: noop,
  overscanByPixels: 20,
  role: 'grid',
  scrollingResetTimeInterval: DEFAULT_SCROLLING_RESET_TIME_INTERVAL,
  style: emptyObject,
  tabIndex: 0
};
/* unused harmony default export */ var _unused_webpack_default_export = (Masonry);

function identity(value) {
  return value;
}

function noop() {}

/***/ }),

/***/ "vFc/":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("TcQ7");
var toLength = __webpack_require__("QRG4");
var toAbsoluteIndex = __webpack_require__("fkB2");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
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
    } else for (; length > index; index++) {
      if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      }
    }return !IS_INCLUDES && -1;
  };
};

/***/ }),

/***/ "vIB/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LIBRARY = __webpack_require__("O4g8");
var $export = __webpack_require__("kM2E");
var redefine = __webpack_require__("880/");
var hide = __webpack_require__("hJx8");
var has = __webpack_require__("D2L2");
var Iterators = __webpack_require__("/bQp");
var $iterCreate = __webpack_require__("94VQ");
var setToStringTag = __webpack_require__("e6n0");
var getPrototypeOf = __webpack_require__("PzxK");
var ITERATOR = __webpack_require__("dSzd")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function returnThis() {
  return this;
};

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function getMethod(kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS:
        return function keys() {
          return new Constructor(this, kind);
        };
      case VALUES:
        return function values() {
          return new Constructor(this, kind);
        };
    }return function entries() {
      return new Constructor(this, kind);
    };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() {
      return $native.call(this);
    };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),

/***/ "vlsS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("Dd8w");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("Zx67");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__("Zrlr");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__("wxAW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("zwoO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__("Pf15");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("KSGD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("AX2D");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames__ = __webpack_require__("HW6M");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_createCallbackMemoizer__ = __webpack_require__("MVOw");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_dom_helpers_util_scrollbarSize__ = __webpack_require__("y6rd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_dom_helpers_util_scrollbarSize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_dom_helpers_util_scrollbarSize__);












// @TODO Merge Collection and CollectionView

/**
 * Specifies the number of milliseconds during which to disable pointer events while a scroll is in progress.
 * This improves performance and makes scrolling smoother.
 */
var IS_SCROLLING_TIMEOUT = 150;

/**
 * Controls whether the Grid updates the DOM element's scrollLeft/scrollTop based on the current state or just observes it.
 * This prevents Grid from interrupting mouse-wheel animations (see issue #2).
 */
var SCROLL_POSITION_CHANGE_REASONS = {
  OBSERVED: 'observed',
  REQUESTED: 'requested'
};

/**
 * Monitors changes in properties (eg. cellCount) and state (eg. scroll offsets) to determine when rendering needs to occur.
 * This component does not render any visible content itself; it defers to the specified :cellLayoutManager.
 */

var CollectionView = function (_PureComponent) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(CollectionView, _PureComponent);

  function CollectionView(props, context) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, CollectionView);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (CollectionView.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(CollectionView)).call(this, props, context));

    _this.state = {
      isScrolling: false,
      scrollLeft: 0,
      scrollTop: 0
    };

    _this._calculateSizeAndPositionDataOnNextUpdate = false;

    // Invokes callbacks only when their values have changed.
    _this._onSectionRenderedMemoizer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__utils_createCallbackMemoizer__["a" /* default */])();
    _this._onScrollMemoizer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__utils_createCallbackMemoizer__["a" /* default */])(false);

    // Bind functions to instance so they don't lose context when passed around.
    _this._invokeOnSectionRenderedHelper = _this._invokeOnSectionRenderedHelper.bind(_this);
    _this._onScroll = _this._onScroll.bind(_this);
    _this._setScrollingContainerRef = _this._setScrollingContainerRef.bind(_this);
    _this._updateScrollPositionForScrollToCell = _this._updateScrollPositionForScrollToCell.bind(_this);
    return _this;
  }

  /**
   * Forced recompute of cell sizes and positions.
   * This function should be called if cell sizes have changed but nothing else has.
   * Since cell positions are calculated by callbacks, the collection view has no way of detecting when the underlying data has changed.
   */

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(CollectionView, [{
    key: 'recomputeCellSizesAndPositions',
    value: function recomputeCellSizesAndPositions() {
      this._calculateSizeAndPositionDataOnNextUpdate = true;
      this.forceUpdate();
    }

    /* ---------------------------- Component lifecycle methods ---------------------------- */

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          cellLayoutManager = _props.cellLayoutManager,
          scrollLeft = _props.scrollLeft,
          scrollToCell = _props.scrollToCell,
          scrollTop = _props.scrollTop;

      // If this component was first rendered server-side, scrollbar size will be undefined.
      // In that event we need to remeasure.

      if (!this._scrollbarSizeMeasured) {
        this._scrollbarSize = __WEBPACK_IMPORTED_MODULE_10_dom_helpers_util_scrollbarSize___default()();
        this._scrollbarSizeMeasured = true;
        this.setState({});
      }

      if (scrollToCell >= 0) {
        this._updateScrollPositionForScrollToCell();
      } else if (scrollLeft >= 0 || scrollTop >= 0) {
        this._setScrollPosition({ scrollLeft: scrollLeft, scrollTop: scrollTop });
      }

      // Update onSectionRendered callback.
      this._invokeOnSectionRenderedHelper();

      var _cellLayoutManager$ge = cellLayoutManager.getTotalSize(),
          totalHeight = _cellLayoutManager$ge.height,
          totalWidth = _cellLayoutManager$ge.width;

      // Initialize onScroll callback.


      this._invokeOnScrollMemoizer({
        scrollLeft: scrollLeft || 0,
        scrollTop: scrollTop || 0,
        totalHeight: totalHeight,
        totalWidth: totalWidth
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _props2 = this.props,
          height = _props2.height,
          scrollToAlignment = _props2.scrollToAlignment,
          scrollToCell = _props2.scrollToCell,
          width = _props2.width;
      var _state = this.state,
          scrollLeft = _state.scrollLeft,
          scrollPositionChangeReason = _state.scrollPositionChangeReason,
          scrollTop = _state.scrollTop;

      // Make sure requested changes to :scrollLeft or :scrollTop get applied.
      // Assigning to scrollLeft/scrollTop tells the browser to interrupt any running scroll animations,
      // And to discard any pending async changes to the scroll position that may have happened in the meantime (e.g. on a separate scrolling thread).
      // So we only set these when we require an adjustment of the scroll position.
      // See issue #2 for more information.

      if (scrollPositionChangeReason === SCROLL_POSITION_CHANGE_REASONS.REQUESTED) {
        if (scrollLeft >= 0 && scrollLeft !== prevState.scrollLeft && scrollLeft !== this._scrollingContainer.scrollLeft) {
          this._scrollingContainer.scrollLeft = scrollLeft;
        }
        if (scrollTop >= 0 && scrollTop !== prevState.scrollTop && scrollTop !== this._scrollingContainer.scrollTop) {
          this._scrollingContainer.scrollTop = scrollTop;
        }
      }

      // Update scroll offsets if the current :scrollToCell values requires it
      if (height !== prevProps.height || scrollToAlignment !== prevProps.scrollToAlignment || scrollToCell !== prevProps.scrollToCell || width !== prevProps.width) {
        this._updateScrollPositionForScrollToCell();
      }

      // Update onRowsRendered callback if start/stop indices have changed
      this._invokeOnSectionRenderedHelper();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var cellLayoutManager = this.props.cellLayoutManager;

      cellLayoutManager.calculateSizeAndPositionData();

      // If this component is being rendered server-side, getScrollbarSize() will return undefined.
      // We handle this case in componentDidMount()
      this._scrollbarSize = __WEBPACK_IMPORTED_MODULE_10_dom_helpers_util_scrollbarSize___default()();
      if (this._scrollbarSize === undefined) {
        this._scrollbarSizeMeasured = false;
        this._scrollbarSize = 0;
      } else {
        this._scrollbarSizeMeasured = true;
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this._disablePointerEventsTimeoutId) {
        clearTimeout(this._disablePointerEventsTimeoutId);
      }
    }

    /**
     * @private
     * This method updates scrollLeft/scrollTop in state for the following conditions:
     * 1) Empty content (0 rows or columns)
     * 2) New scroll props overriding the current state
     * 3) Cells-count or cells-size has changed, making previous scroll offsets invalid
     */

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _state2 = this.state,
          scrollLeft = _state2.scrollLeft,
          scrollTop = _state2.scrollTop;

      if (nextProps.cellCount === 0 && (scrollLeft !== 0 || scrollTop !== 0)) {
        this._setScrollPosition({
          scrollLeft: 0,
          scrollTop: 0
        });
      } else if (nextProps.scrollLeft !== this.props.scrollLeft || nextProps.scrollTop !== this.props.scrollTop) {
        this._setScrollPosition({
          scrollLeft: nextProps.scrollLeft,
          scrollTop: nextProps.scrollTop
        });
      }

      if (nextProps.cellCount !== this.props.cellCount || nextProps.cellLayoutManager !== this.props.cellLayoutManager || this._calculateSizeAndPositionDataOnNextUpdate) {
        nextProps.cellLayoutManager.calculateSizeAndPositionData();
      }

      if (this._calculateSizeAndPositionDataOnNextUpdate) {
        this._calculateSizeAndPositionDataOnNextUpdate = false;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          autoHeight = _props3.autoHeight,
          cellCount = _props3.cellCount,
          cellLayoutManager = _props3.cellLayoutManager,
          className = _props3.className,
          height = _props3.height,
          horizontalOverscanSize = _props3.horizontalOverscanSize,
          id = _props3.id,
          noContentRenderer = _props3.noContentRenderer,
          style = _props3.style,
          verticalOverscanSize = _props3.verticalOverscanSize,
          width = _props3.width;
      var _state3 = this.state,
          isScrolling = _state3.isScrolling,
          scrollLeft = _state3.scrollLeft,
          scrollTop = _state3.scrollTop;

      var _cellLayoutManager$ge2 = cellLayoutManager.getTotalSize(),
          totalHeight = _cellLayoutManager$ge2.height,
          totalWidth = _cellLayoutManager$ge2.width;

      // Safely expand the rendered area by the specified overscan amount


      var left = Math.max(0, scrollLeft - horizontalOverscanSize);
      var top = Math.max(0, scrollTop - verticalOverscanSize);
      var right = Math.min(totalWidth, scrollLeft + width + horizontalOverscanSize);
      var bottom = Math.min(totalHeight, scrollTop + height + verticalOverscanSize);

      var childrenToDisplay = height > 0 && width > 0 ? cellLayoutManager.cellRenderers({
        height: bottom - top,
        isScrolling: isScrolling,
        width: right - left,
        x: left,
        y: top
      }) : [];

      var collectionStyle = {
        boxSizing: 'border-box',
        direction: 'ltr',
        height: autoHeight ? 'auto' : height,
        position: 'relative',
        WebkitOverflowScrolling: 'touch',
        width: width,
        willChange: 'transform'
      };

      // Force browser to hide scrollbars when we know they aren't necessary.
      // Otherwise once scrollbars appear they may not disappear again.
      // For more info see issue #116
      var verticalScrollBarSize = totalHeight > height ? this._scrollbarSize : 0;
      var horizontalScrollBarSize = totalWidth > width ? this._scrollbarSize : 0;

      // Also explicitly init styles to 'auto' if scrollbars are required.
      // This works around an obscure edge case where external CSS styles have not yet been loaded,
      // But an initial scroll index of offset is set as an external prop.
      // Without this style, Grid would render the correct range of cells but would NOT update its internal offset.
      // This was originally reported via clauderic/react-infinite-calendar/issues/23
      collectionStyle.overflowX = totalWidth + verticalScrollBarSize <= width ? 'hidden' : 'auto';
      collectionStyle.overflowY = totalHeight + horizontalScrollBarSize <= height ? 'hidden' : 'auto';

      return __WEBPACK_IMPORTED_MODULE_7_react__["a" /* default */].createElement('div', {
        ref: this._setScrollingContainerRef,
        'aria-label': this.props['aria-label'],
        className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()('ReactVirtualized__Collection', className),
        id: id,
        onScroll: this._onScroll,
        role: 'grid',
        style: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, collectionStyle, style),
        tabIndex: 0
      }, cellCount > 0 && __WEBPACK_IMPORTED_MODULE_7_react__["a" /* default */].createElement('div', {
        className: 'ReactVirtualized__Collection__innerScrollContainer',
        style: {
          height: totalHeight,
          maxHeight: totalHeight,
          maxWidth: totalWidth,
          overflow: 'hidden',
          pointerEvents: isScrolling ? 'none' : '',
          width: totalWidth
        }
      }, childrenToDisplay), cellCount === 0 && noContentRenderer());
    }

    /* ---------------------------- Helper methods ---------------------------- */

    /**
     * Sets an :isScrolling flag for a small window of time.
     * This flag is used to disable pointer events on the scrollable portion of the Collection.
     * This prevents jerky/stuttery mouse-wheel scrolling.
     */

  }, {
    key: '_enablePointerEventsAfterDelay',
    value: function _enablePointerEventsAfterDelay() {
      var _this2 = this;

      if (this._disablePointerEventsTimeoutId) {
        clearTimeout(this._disablePointerEventsTimeoutId);
      }

      this._disablePointerEventsTimeoutId = setTimeout(function () {
        var isScrollingChange = _this2.props.isScrollingChange;

        isScrollingChange(false);

        _this2._disablePointerEventsTimeoutId = null;
        _this2.setState({
          isScrolling: false
        });
      }, IS_SCROLLING_TIMEOUT);
    }
  }, {
    key: '_invokeOnSectionRenderedHelper',
    value: function _invokeOnSectionRenderedHelper() {
      var _props4 = this.props,
          cellLayoutManager = _props4.cellLayoutManager,
          onSectionRendered = _props4.onSectionRendered;

      this._onSectionRenderedMemoizer({
        callback: onSectionRendered,
        indices: {
          indices: cellLayoutManager.getLastRenderedIndices()
        }
      });
    }
  }, {
    key: '_invokeOnScrollMemoizer',
    value: function _invokeOnScrollMemoizer(_ref) {
      var _this3 = this;

      var scrollLeft = _ref.scrollLeft,
          scrollTop = _ref.scrollTop,
          totalHeight = _ref.totalHeight,
          totalWidth = _ref.totalWidth;

      this._onScrollMemoizer({
        callback: function callback(_ref2) {
          var scrollLeft = _ref2.scrollLeft,
              scrollTop = _ref2.scrollTop;
          var _props5 = _this3.props,
              height = _props5.height,
              onScroll = _props5.onScroll,
              width = _props5.width;

          onScroll({
            clientHeight: height,
            clientWidth: width,
            scrollHeight: totalHeight,
            scrollLeft: scrollLeft,
            scrollTop: scrollTop,
            scrollWidth: totalWidth
          });
        },
        indices: {
          scrollLeft: scrollLeft,
          scrollTop: scrollTop
        }
      });
    }
  }, {
    key: '_setScrollingContainerRef',
    value: function _setScrollingContainerRef(ref) {
      this._scrollingContainer = ref;
    }
  }, {
    key: '_setScrollPosition',
    value: function _setScrollPosition(_ref3) {
      var scrollLeft = _ref3.scrollLeft,
          scrollTop = _ref3.scrollTop;

      var newState = {
        scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.REQUESTED
      };

      if (scrollLeft >= 0) {
        newState.scrollLeft = scrollLeft;
      }

      if (scrollTop >= 0) {
        newState.scrollTop = scrollTop;
      }

      if (scrollLeft >= 0 && scrollLeft !== this.state.scrollLeft || scrollTop >= 0 && scrollTop !== this.state.scrollTop) {
        this.setState(newState);
      }
    }
  }, {
    key: '_updateScrollPositionForScrollToCell',
    value: function _updateScrollPositionForScrollToCell() {
      var _props6 = this.props,
          cellLayoutManager = _props6.cellLayoutManager,
          height = _props6.height,
          scrollToAlignment = _props6.scrollToAlignment,
          scrollToCell = _props6.scrollToCell,
          width = _props6.width;
      var _state4 = this.state,
          scrollLeft = _state4.scrollLeft,
          scrollTop = _state4.scrollTop;

      if (scrollToCell >= 0) {
        var scrollPosition = cellLayoutManager.getScrollPositionForCell({
          align: scrollToAlignment,
          cellIndex: scrollToCell,
          height: height,
          scrollLeft: scrollLeft,
          scrollTop: scrollTop,
          width: width
        });

        if (scrollPosition.scrollLeft !== scrollLeft || scrollPosition.scrollTop !== scrollTop) {
          this._setScrollPosition(scrollPosition);
        }
      }
    }
  }, {
    key: '_onScroll',
    value: function _onScroll(event) {
      // In certain edge-cases React dispatches an onScroll event with an invalid target.scrollLeft / target.scrollTop.
      // This invalid event can be detected by comparing event.target to this component's scrollable DOM element.
      // See issue #404 for more information.
      if (event.target !== this._scrollingContainer) {
        return;
      }

      // Prevent pointer events from interrupting a smooth scroll
      this._enablePointerEventsAfterDelay();

      // When this component is shrunk drastically, React dispatches a series of back-to-back scroll events,
      // Gradually converging on a scrollTop that is within the bounds of the new, smaller height.
      // This causes a series of rapid renders that is slow for long lists.
      // We can avoid that by doing some simple bounds checking to ensure that scrollTop never exceeds the total height.
      var _props7 = this.props,
          cellLayoutManager = _props7.cellLayoutManager,
          height = _props7.height,
          isScrollingChange = _props7.isScrollingChange,
          width = _props7.width;

      var scrollbarSize = this._scrollbarSize;

      var _cellLayoutManager$ge3 = cellLayoutManager.getTotalSize(),
          totalHeight = _cellLayoutManager$ge3.height,
          totalWidth = _cellLayoutManager$ge3.width;

      var scrollLeft = Math.max(0, Math.min(totalWidth - width + scrollbarSize, event.target.scrollLeft));
      var scrollTop = Math.max(0, Math.min(totalHeight - height + scrollbarSize, event.target.scrollTop));

      // Certain devices (like Apple touchpad) rapid-fire duplicate events.
      // Don't force a re-render if this is the case.
      // The mouse may move faster then the animation frame does.
      // Use requestAnimationFrame to avoid over-updating.
      if (this.state.scrollLeft !== scrollLeft || this.state.scrollTop !== scrollTop) {
        // Browsers with cancelable scroll events (eg. Firefox) interrupt scrolling animations if scrollTop/scrollLeft is set.
        // Other browsers (eg. Safari) don't scroll as well without the help under certain conditions (DOM or style changes during scrolling).
        // All things considered, this seems to be the best current work around that I'm aware of.
        // For more information see https://github.com/bvaughn/react-virtualized/pull/124
        var scrollPositionChangeReason = event.cancelable ? SCROLL_POSITION_CHANGE_REASONS.OBSERVED : SCROLL_POSITION_CHANGE_REASONS.REQUESTED;

        // Synchronously set :isScrolling the first time (since _setNextState will reschedule its animation frame each time it's called)
        if (!this.state.isScrolling) {
          isScrollingChange(true);
        }

        this.setState({
          isScrolling: true,
          scrollLeft: scrollLeft,
          scrollPositionChangeReason: scrollPositionChangeReason,
          scrollTop: scrollTop
        });
      }

      this._invokeOnScrollMemoizer({
        scrollLeft: scrollLeft,
        scrollTop: scrollTop,
        totalWidth: totalWidth,
        totalHeight: totalHeight
      });
    }
  }]);

  return CollectionView;
}(__WEBPACK_IMPORTED_MODULE_7_react__["b" /* PureComponent */]);

CollectionView.defaultProps = {
  'aria-label': 'grid',
  horizontalOverscanSize: 0,
  noContentRenderer: function noContentRenderer() {
    return null;
  },
  onScroll: function onScroll() {
    return null;
  },
  onSectionRendered: function onSectionRendered() {
    return null;
  },
  scrollToAlignment: 'auto',
  scrollToCell: -1,
  style: {},
  verticalOverscanSize: 0
};
/* harmony default export */ __webpack_exports__["a"] = (CollectionView);
 false ? void 0 : void 0;

/***/ }),

/***/ "w+D2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("Zx67");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("Zrlr");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("wxAW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("zwoO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("Pf15");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("KSGD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__("AX2D");








/**
 * This HOC decorates a virtualized component and responds to arrow-key events by scrolling one row or column at a time.
 */

var ArrowKeyStepper = function (_PureComponent) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(ArrowKeyStepper, _PureComponent);

  function ArrowKeyStepper(props, context) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, ArrowKeyStepper);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ArrowKeyStepper.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(ArrowKeyStepper)).call(this, props, context));

    _this.state = {
      scrollToColumn: props.scrollToColumn,
      scrollToRow: props.scrollToRow
    };

    _this._columnStartIndex = 0;
    _this._columnStopIndex = 0;
    _this._rowStartIndex = 0;
    _this._rowStopIndex = 0;

    _this._onKeyDown = _this._onKeyDown.bind(_this);
    _this._onSectionRendered = _this._onSectionRendered.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(ArrowKeyStepper, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.isControlled) {
        return;
      }

      var scrollToColumn = nextProps.scrollToColumn,
          scrollToRow = nextProps.scrollToRow;
      var _props = this.props,
          prevScrollToColumn = _props.scrollToColumn,
          prevScrollToRow = _props.scrollToRow;

      if (prevScrollToColumn !== scrollToColumn && prevScrollToRow !== scrollToRow) {
        this.setState({
          scrollToColumn: scrollToColumn,
          scrollToRow: scrollToRow
        });
      } else if (prevScrollToColumn !== scrollToColumn) {
        this.setState({ scrollToColumn: scrollToColumn });
      } else if (prevScrollToRow !== scrollToRow) {
        this.setState({ scrollToRow: scrollToRow });
      }
    }
  }, {
    key: 'setScrollIndexes',
    value: function setScrollIndexes(_ref) {
      var scrollToColumn = _ref.scrollToColumn,
          scrollToRow = _ref.scrollToRow;

      this.setState({
        scrollToRow: scrollToRow,
        scrollToColumn: scrollToColumn
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          className = _props2.className,
          children = _props2.children;

      var _getScrollState2 = this._getScrollState(),
          scrollToColumn = _getScrollState2.scrollToColumn,
          scrollToRow = _getScrollState2.scrollToRow;

      return __WEBPACK_IMPORTED_MODULE_6_react__["a" /* default */].createElement('div', {
        className: className,
        onKeyDown: this._onKeyDown
      }, children({
        onSectionRendered: this._onSectionRendered,
        scrollToColumn: scrollToColumn,
        scrollToRow: scrollToRow
      }));
    }
  }, {
    key: '_onKeyDown',
    value: function _onKeyDown(event) {
      var _props3 = this.props,
          columnCount = _props3.columnCount,
          disabled = _props3.disabled,
          mode = _props3.mode,
          rowCount = _props3.rowCount;

      if (disabled) {
        return;
      }

      var _getScrollState3 = this._getScrollState(),
          scrollToColumnPrevious = _getScrollState3.scrollToColumn,
          scrollToRowPrevious = _getScrollState3.scrollToRow;

      var _getScrollState4 = this._getScrollState(),
          scrollToColumn = _getScrollState4.scrollToColumn,
          scrollToRow = _getScrollState4.scrollToRow;

      // The above cases all prevent default event event behavior.
      // This is to keep the grid from scrolling after the snap-to update.


      switch (event.key) {
        case 'ArrowDown':
          scrollToRow = mode === 'cells' ? Math.min(scrollToRow + 1, rowCount - 1) : Math.min(this._rowStopIndex + 1, rowCount - 1);
          break;
        case 'ArrowLeft':
          scrollToColumn = mode === 'cells' ? Math.max(scrollToColumn - 1, 0) : Math.max(this._columnStartIndex - 1, 0);
          break;
        case 'ArrowRight':
          scrollToColumn = mode === 'cells' ? Math.min(scrollToColumn + 1, columnCount - 1) : Math.min(this._columnStopIndex + 1, columnCount - 1);
          break;
        case 'ArrowUp':
          scrollToRow = mode === 'cells' ? Math.max(scrollToRow - 1, 0) : Math.max(this._rowStartIndex - 1, 0);
          break;
      }

      if (scrollToColumn !== scrollToColumnPrevious || scrollToRow !== scrollToRowPrevious) {
        event.preventDefault();

        this._updateScrollState({ scrollToColumn: scrollToColumn, scrollToRow: scrollToRow });
      }
    }
  }, {
    key: '_onSectionRendered',
    value: function _onSectionRendered(_ref2) {
      var columnStartIndex = _ref2.columnStartIndex,
          columnStopIndex = _ref2.columnStopIndex,
          rowStartIndex = _ref2.rowStartIndex,
          rowStopIndex = _ref2.rowStopIndex;

      this._columnStartIndex = columnStartIndex;
      this._columnStopIndex = columnStopIndex;
      this._rowStartIndex = rowStartIndex;
      this._rowStopIndex = rowStopIndex;
    }
  }, {
    key: '_getScrollState',
    value: function _getScrollState() {
      return this.props.isControlled ? this.props : this.state;
    }
  }, {
    key: '_updateScrollState',
    value: function _updateScrollState(_ref3) {
      var scrollToColumn = _ref3.scrollToColumn,
          scrollToRow = _ref3.scrollToRow;
      var _props4 = this.props,
          isControlled = _props4.isControlled,
          onScrollToChange = _props4.onScrollToChange;

      if (typeof onScrollToChange === 'function') {
        onScrollToChange({ scrollToColumn: scrollToColumn, scrollToRow: scrollToRow });
      }

      if (!isControlled) {
        this.setState({ scrollToColumn: scrollToColumn, scrollToRow: scrollToRow });
      }
    }
  }]);

  return ArrowKeyStepper;
}(__WEBPACK_IMPORTED_MODULE_6_react__["b" /* PureComponent */]);

ArrowKeyStepper.defaultProps = {
  disabled: false,
  isControlled: false,
  mode: 'edges',
  scrollToColumn: 0,
  scrollToRow: 0
};
/* unused harmony default export */ var _unused_webpack_default_export = (ArrowKeyStepper);
 false ? void 0 : void 0;

/***/ }),

/***/ "woOf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("V3tA"), __esModule: true };

/***/ }),

/***/ "wxAW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__("C4MV");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ "xGkn":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var addToUnscopables = __webpack_require__("4mcu");
var step = __webpack_require__("EGZi");
var Iterators = __webpack_require__("/bQp");
var toIObject = __webpack_require__("TcQ7");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("vIB/")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0; // next index
  this._k = kind; // kind
  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),

/***/ "xnc9":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ }),

/***/ "y6rd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (recalc) {
  if (!size || recalc) {
    if (_inDOM2.default) {
      var scrollDiv = document.createElement('div');

      scrollDiv.style.position = 'absolute';
      scrollDiv.style.top = '-9999px';
      scrollDiv.style.width = '50px';
      scrollDiv.style.height = '50px';
      scrollDiv.style.overflow = 'scroll';

      document.body.appendChild(scrollDiv);
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    }
  }

  return size;
};

var _inDOM = __webpack_require__("cFFW");

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var size = void 0;

module.exports = exports['default'];

/***/ }),

/***/ "yY49":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "zQR9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $at = __webpack_require__("h65t")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("vIB/")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0; // next index
  // 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

/***/ }),

/***/ "zwoO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__("pFYg");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map