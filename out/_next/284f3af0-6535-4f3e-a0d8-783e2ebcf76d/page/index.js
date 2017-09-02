
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([2],{

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getHash = exports.getHash = function getHash() {
  return window.location.hash.slice(1);
};

var updateHash = exports.updateHash = function updateHash(hash, affectHistory) {
  if (affectHistory) {
    window.location.hash = hash;
  } else {
    window.location.replace("#" + hash);
  }
};

// remove hash in url without affecting history or forcing reload
var removeHash = exports.removeHash = function removeHash() {
  history.replaceState("", document.title, window.location.pathname + window.location.search);
};

/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jump = __webpack_require__(209);

var _jump2 = _interopRequireDefault(_jump);

var _func = __webpack_require__(210);

var _scroll = __webpack_require__(211);

var _hash = __webpack_require__(106);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaultConfig = {
  offset: 0,
  scrollDuration: 400,
  keepLastAnchorHash: false
};

var Manager = function Manager() {
  var _this = this;

  _classCallCheck(this, Manager);

  this.addListeners = function () {
    window.addEventListener('scroll', _this.scrollHandler, false);
    window.addEventListener('hashchange', _this.handleHashChange);
  };

  this.removeListeners = function () {
    window.removeEventListener('scroll', _this.scrollHandler, false);
    window.removeEventListener('hashchange', _this.handleHashChange);
  };

  this.configure = function (config) {
    _this.config = _extends({}, defaultConfig, config);
  };

  this.goToTop = function () {
    if ((0, _scroll.getScrollTop)() === 0) return;
    _this.forcedHash = true;
    window.scroll(0, 0);
  };

  this.addAnchor = function (id, component) {
    // if this is the first anchor, set up listeners
    if (Object.keys(_this.anchors).length === 0) {
      _this.addListeners();
    }
    _this.forceHashUpdate();
    _this.anchors[id] = component;
  };

  this.removeAnchor = function (id) {
    delete _this.anchors[id];
    // if this is the last anchor, remove listeners
    if (Object.keys(_this.anchors).length === 0) {
      _this.removeListeners();
    }
  };

  this.handleScroll = function () {
    var _config = _this.config,
        offset = _config.offset,
        keepLastAnchorHash = _config.keepLastAnchorHash;

    var bestAnchorId = (0, _scroll.getBestAnchorGivenScrollLocation)(_this.anchors, offset);

    if (bestAnchorId && (0, _hash.getHash)() !== bestAnchorId) {
      _this.forcedHash = true;
      (0, _hash.updateHash)(bestAnchorId, false);
    } else if (!bestAnchorId && !keepLastAnchorHash) {
      (0, _hash.removeHash)();
    }
  };

  this.handleHashChange = function (e) {
    if (_this.forcedHash) {
      _this.forcedHash = false;
    } else {
      _this.goToSection((0, _hash.getHash)());
    }
  };

  this.goToSection = function (id) {
    var element = _this.anchors[id];
    if (element) {
      (0, _jump2.default)(element, {
        duration: _this.config.scrollDuration,
        offset: _this.config.offset
      });
    } else {
      // make sure that standard hash anchors don't break.
      // simply jump to them.
      element = document.getElementById(id);
      if (element) {
        (0, _jump2.default)(element, {
          duration: 0,
          offset: _this.config.offset
        });
      }
    }
  };

  this.anchors = {};
  this.forcedHash = false;
  this.config = defaultConfig;

  this.scrollHandler = (0, _func.debounce)(this.handleScroll, 100);
  this.forceHashUpdate = (0, _func.debounce)(this.handleHashChange, 1);
};

exports.default = new Manager();

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(206);


/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault2(_react2);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(8);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(10);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _reactScrollableAnchor = __webpack_require__(207);

var _reactScrollableAnchor2 = _interopRequireDefault(_reactScrollableAnchor);

var _jquery = __webpack_require__(44);

var _jquery2 = _interopRequireDefault(_jquery);

var _layout = __webpack_require__(33);

var _layout2 = _interopRequireDefault(_layout);

var _carousel = __webpack_require__(212);

var _carousel2 = _interopRequireDefault(_carousel);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Home = function (_Component) {
  (0, _inherits3.default)(Home, _Component);

  function Home() {
    (0, _classCallCheck3.default)(this, Home);
    return (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).apply(this, arguments));
  }

  (0, _createClass3.default)(Home, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      (0, _reactScrollableAnchor.configureAnchors)({ scrollDuration: 1000 });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener("hashchange", function () {
        updateStyle(window.location.hash, [(0, _jquery2.default)('.icon-bar'), (0, _jquery2.default)('.tedx_logo'), (0, _jquery2.default)('.tedx_link')]);

        function updateStyle(hash, els) {
          els.map(function (el) {
            if (hash === '#landing_page') {
              el.removeClass('black');
              el.addClass('white');
              document.getElementById('tedx_header').style.backgroundColor = 'transparent';
            } else {
              el.removeClass('white');
              el.addClass('black');
              document.getElementById('tedx_header').style.backgroundColor = '#fff';
            }
          });
        }
      }, false);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react3.default.createElement(_layout2.default, null, _react3.default.createElement(_reactScrollableAnchor2.default, { id: 'landing_page' }, _react3.default.createElement('section', { id: 'landing-section' }, _react3.default.createElement('div', { className: 'section_content_container' }, _react3.default.createElement('h1', { className: 'section_content text-center white' }, 'Charoenkrung is a Prosperous City')), _react3.default.createElement('a', { className: 'section_bottom', href: '#home_page' }, _react3.default.createElement('span', { className: 'scroll_down' })))), _react3.default.createElement(_reactScrollableAnchor2.default, { id: 'home_page' }, _react3.default.createElement('section', { id: 'home-section' }, _react3.default.createElement(_carousel2.default, null))));
    }
  }]);
  return Home;
}(_react.Component);

exports.default = Home;

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.removeHash = exports.goToAnchor = exports.configureAnchors = exports.goToTop = undefined;

var _hash = __webpack_require__(106);

Object.defineProperty(exports, 'goToAnchor', {
  enumerable: true,
  get: function get() {
    return _hash.updateHash;
  }
});
Object.defineProperty(exports, 'removeHash', {
  enumerable: true,
  get: function get() {
    return _hash.removeHash;
  }
});

var _ScrollableAnchor = __webpack_require__(208);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ScrollableAnchor).default;
  }
});

var _Manager = __webpack_require__(107);

var _Manager2 = _interopRequireDefault(_Manager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var goToTop = exports.goToTop = _Manager2.default.goToTop;
var configureAnchors = exports.configureAnchors = _Manager2.default.configure;

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(0);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(20);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Manager = __webpack_require__(107);

var _Manager2 = _interopRequireDefault(_Manager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScrollableAnchor = function (_Component) {
  _inherits(ScrollableAnchor, _Component);

  function ScrollableAnchor(props) {
    _classCallCheck(this, ScrollableAnchor);

    var _this = _possibleConstructorReturn(this, (ScrollableAnchor.__proto__ || Object.getPrototypeOf(ScrollableAnchor)).call(this, props));

    _this.id = props.id || props.children.ref;
    return _this;
  }

  _createClass(ScrollableAnchor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var element = _reactDom2.default.findDOMNode(this.refs[Object.keys(this.refs)[0]]);
      _Manager2.default.addAnchor(this.id, element);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _Manager2.default.removeAnchor(this.id);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          id = _props.id;


      return _react2.default.cloneElement(children, {
        ref: children.ref || id
      });
    }
  }]);

  return ScrollableAnchor;
}(_react.Component);

ScrollableAnchor.propTypes = {
  children: _propTypes2.default.node,
  id: _propTypes2.default.string
};
exports.default = ScrollableAnchor;

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Jump.js 1.0.1 - A small, modern, dependency-free smooth scrolling library.
 * Copyright (c) 2016 Michael Cavalea - https://github.com/callmecavs/jump.js
 * License: MIT
 */

!function(o,n){ true?module.exports=n():"function"==typeof define&&define.amd?define(n):o.Jump=n()}(this,function(){"use strict";var o=function(o,n,e,t){return o/=t/2,o<1?e/2*o*o+n:(o--,-e/2*(o*(o-2)-1)+n)},n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol?"symbol":typeof o},e=function(){function e(){return window.scrollY||window.pageYOffset}function t(o){return o.getBoundingClientRect().top+d}function i(o){v||(v=o),b=o-v,p=s(b,d,y,m),window.scrollTo(0,p),b<m?requestAnimationFrame(i):r()}function r(){window.scrollTo(0,d+y),c&&l&&(c.setAttribute("tabindex","-1"),c.focus()),"function"==typeof w&&w(),v=!1}function u(r){var u=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];switch(m=u.duration||1e3,a=u.offset||0,w=u.callback,s=u.easing||o,l=u.a11y||!1,d=e(),"undefined"==typeof r?"undefined":n(r)){case"number":c=void 0,l=!1,f=d+r;break;case"object":c=r,f=t(c);break;case"string":c=document.querySelector(r),f=t(c)}switch(y=f-d+a,n(u.duration)){case"number":m=u.duration;break;case"function":m=u.duration(y)}requestAnimationFrame(i)}var c=void 0,d=void 0,f=void 0,a=void 0,s=void 0,l=void 0,y=void 0,m=void 0,v=void 0,b=void 0,p=void 0,w=void 0;return u},t=e();return t});

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _arguments = arguments;
var debounce = exports.debounce = function debounce(func, wait, immediate) {
  var timeout = void 0;
  return function () {
    var context = undefined;
    var args = _arguments;
    var later = function later() {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  };
};

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getScrollTop = exports.getScrollTop = function getScrollTop() {
  return document.body.scrollTop || document.documentElement.scrollTop;
};

// get vertical offsets of element, taking scrollTop into consideration
var getElementOffset = exports.getElementOffset = function getElementOffset(element) {
  var scrollTop = getScrollTop();

  var _element$getBoundingC = element.getBoundingClientRect(),
      top = _element$getBoundingC.top,
      bottom = _element$getBoundingC.bottom;

  return {
    top: top + scrollTop,
    bottom: bottom + scrollTop
  };
};

// does scrollTop live within element bounds?
var doesElementContainScrollTop = exports.doesElementContainScrollTop = function doesElementContainScrollTop(element) {
  var extraOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var scrollTop = getScrollTop();
  var offsetTop = getElementOffset(element).top + extraOffset;
  return scrollTop >= offsetTop && scrollTop < offsetTop + element.offsetHeight;
};

// is el2's location more relevant than el2,
// parent-child relationship aside?
var checkLocationRelevance = exports.checkLocationRelevance = function checkLocationRelevance(el1, el2) {
  var _getElementOffset = getElementOffset(el1),
      top1 = _getElementOffset.top,
      bottom1 = _getElementOffset.bottom;

  var _getElementOffset2 = getElementOffset(el2),
      top2 = _getElementOffset2.top,
      bottom2 = _getElementOffset2.bottom;

  if (top1 === top2) {
    if (bottom1 === bottom2) {
      // top and bottom of compared elements are the same,
      // so return one randomly in a deterministic way
      return el1 < el2;
    }
    // top of compared elements is the same, so return whichever
    // element has its bottom higher on the page
    return bottom2 < bottom1;
  }
  // top of compared elements differ, so return true
  // if tested element has its top lower on the page
  return top2 > top1;
};

// check if el2 is more relevant than el1, considering child-parent
// relationships as well as node location.
var checkElementRelevance = exports.checkElementRelevance = function checkElementRelevance(el1, el2) {
  if (el1.contains(el2)) {
    // el2 is child, so it gains relevance priority
    return true;
  } else if (!el2.contains(el1) && checkLocationRelevance(el1, el2)) {
    // el1 and el2 are unrelated, but el2 has a better location,
    // so it gains relevance priority
    return true;
  }
  return false;
};

// given a set of anchors, find which one is, given the following logic:
// 1. children nodes are more relevant than parent nodes
// 2. if neither node contains the other, and their top locations differ,
//    the node with the top lower on the page is more relevant
// 3. if neither node contains the other, and their top locations are the same,
//    the node with the bottom higher on the page is more relevant
// 4. if neither node contains the other, and their top and bottom locations
//    are the same, a node is chosen at random, in a deterministic way,
//    to be more relevant.
var getBestAnchorGivenScrollLocation = exports.getBestAnchorGivenScrollLocation = function getBestAnchorGivenScrollLocation(anchors, offset) {
  var bestId = void 0,
      bestElement = void 0;

  Object.keys(anchors).forEach(function (id) {
    var element = anchors[id];
    if (doesElementContainScrollTop(element, offset)) {
      if (!bestElement || checkElementRelevance(bestElement, element)) {
        bestElement = element;
        bestId = id;
      }
    }
  });
  return bestId;
};

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault2(_react2);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(8);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(10);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _jquery = __webpack_require__(44);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Carousel = function (_Component) {
  (0, _inherits3.default)(Carousel, _Component);

  function Carousel(props) {
    (0, _classCallCheck3.default)(this, Carousel);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Carousel.__proto__ || (0, _getPrototypeOf2.default)(Carousel)).call(this, props));

    _this.state = {
      isMobile: false
    };
    return _this;
  }

  (0, _createClass3.default)(Carousel, [{
    key: 'carouselItems',
    value: function carouselItems() {
      var path = this.state.isMobile ? 'mobile' : 'desktop';
      var items = [{
        imageUrl: 'static/images/' + path + '/home_bg.jpg',
        topic: 'Charoenkrung Road',
        desc: 'กรุงเจริญ = เจริญกรุง'
      }, {
        imageUrl: 'static/images/contents/bg_01.jpg',
        topic: 'Lalalala',
        desc: 'ลาลาลาลา'
      }, {
        imageUrl: 'static/images/contents/bg_02.jpg',
        topic: 'Why Charoenkrung?',
        desc: 'ทำไมต้องเจริญกรุง'
      }, {
        imageUrl: 'static/images/contents/bg_03.jpg',
        topic: 'Everything has its first time...',
        desc: 'ครั้งแรกของ TED'
      }];

      return items.map(function (item, index) {
        return _react3.default.createElement('div', { key: index, className: 'carousel-item ' + (index === 1 ? 'active' : '') + ' bg_plus_pos_y',
          style: { 'backgroundImage': 'url(' + item.imageUrl + ')' } }, _react3.default.createElement('div', { className: 'slide_content_container' }, _react3.default.createElement('h1', { className: 'text-center slide_content_topic' }, item.topic), _react3.default.createElement('h1', { className: 'text-center slide_content_desc' }, item.desc)));
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', function () {
        checkWindowSize();
      }, false);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _self = this;
      (0, _jquery2.default)(function () {
        checkWindowSize();
      });

      window.addEventListener('resize', function () {
        checkWindowSize();
      }, false);

      function checkWindowSize() {
        if (window.innerWidth < 768) {
          _self.setState({ isMobile: true });
        } else {
          _self.setState({ isMobile: false });
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react3.default.createElement('div', { className: 'home_section_slide' }, _react3.default.createElement('div', { id: 'carouselExampleIndicators', className: 'carousel slide', 'data-ride': 'carousel' }, _react3.default.createElement('ol', { className: 'carousel-indicators' }, _react3.default.createElement('li', { 'data-target': '#carouselExampleIndicators', 'data-slide-to': '0', className: 'active' }), _react3.default.createElement('li', { 'data-target': '#carouselExampleIndicators', 'data-slide-to': '1' }), _react3.default.createElement('li', { 'data-target': '#carouselExampleIndicators', 'data-slide-to': '2' }), _react3.default.createElement('li', { 'data-target': '#carouselExampleIndicators', 'data-slide-to': '3' })), _react3.default.createElement('div', { className: 'carousel-inner', role: 'listbox' }, this.carouselItems())));
    }
  }]);
  return Carousel;
}(_react.Component);

exports.default = Carousel;

/***/ })

},[205]);
            return { page: comp.default }
          })
        