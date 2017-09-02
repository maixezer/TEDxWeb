
          window.__NEXT_REGISTER_PAGE('/about', function() {
            var comp = module.exports =
webpackJsonp([8],{

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(188);


/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault2(_react2);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(102);

var _keys2 = _interopRequireDefault(_keys);

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

var _layout = __webpack_require__(33);

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var About = function (_Component) {
  (0, _inherits3.default)(About, _Component);

  function About(props) {
    (0, _classCallCheck3.default)(this, About);

    var _this = (0, _possibleConstructorReturn3.default)(this, (About.__proto__ || (0, _getPrototypeOf2.default)(About)).call(this, props));

    _this.state = {
      isMobile: false
    };
    return _this;
  }

  (0, _createClass3.default)(About, [{
    key: 'contactList',
    value: function contactList() {
      var socials = {
        facebook: {
          link: 'https://www.facebook.com/TEDxCharoenkrung/',
          display: 'Facebook'
        },
        twitter: {
          link: '#',
          display: 'Twitter'
        },
        instagram: {
          link: '#',
          display: 'Instagram'
        },
        email: {
          link: '#',
          display: 'E-mail'
        }
      };

      return _react3.default.createElement('ul', { style: { 'listStyleType': 'none', 'padding': 0 } }, (0, _keys2.default)(socials).map(function (s, index) {
        return _react3.default.createElement('li', { key: s }, _react3.default.createElement('a', { href: socials[s]['link'], style: { 'fontFamily': 'latoRegular' } }, socials[s]['display']));
      }));
    }
  }, {
    key: 'calculateStyles',
    value: function calculateStyles() {
      return this.state.isMobile ? {
        height: 'auto',
        width: 'auto',
        bgColor: '#b7b7b7',
        headerColor: '#b7b7b7'
      } : {
        height: 'inherit',
        width: 'inherit',
        bgColor: '#b7b7b7',
        headerColor: '#b7b7b7'
      };
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('load', false);
      window.removeEventListener('resize', false);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _self = this;
      window.addEventListener('load', function () {
        document.getElementById('tedx_header').style.backgroundColor = '#b7b7b7';

        checkWindowSize();
      }, false);

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
      return _react3.default.createElement(_layout2.default, { styles: this.calculateStyles(), active: { about: "#fc2e1f" } }, _react3.default.createElement('div', { id: 'tedx_about_container' }, _react3.default.createElement('div', { id: 'tedx_history' }, _react3.default.createElement('div', { className: 'head' }, 'History'), _react3.default.createElement('div', { className: 'content' }, 'TEDxCharoenkrung is an independently organized TED event. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris imperdiet sed libero gravida ultrices. Mauris lobortis ex vel orci venenatis venenatis. Sed vitae vulputate risus, ac hendrerit neque. Sed sit amet lectus tortor. Ut ullamcorper congue ante non venenatis. Nullam volutpat et orci nec placerat. Ut feugiat neque sit amet pharetra scelerisque. Vestibulum sodales leo lectus, a sodales metus consectetur sit amet. Nam ultrices tempor ante, in rhoncus augue tincidunt sit amet.'), _react3.default.createElement('div', { className: 'bottom' }, 'See all our teamates')), _react3.default.createElement('div', { id: 'tedx_contact' }, _react3.default.createElement('div', { className: 'head' }, 'Contact'), _react3.default.createElement('div', { className: 'content' }, this.contactList()))));
    }
  }]);
  return About;
}(_react.Component);

exports.default = About;

/***/ })

},[187]);
            return { page: comp.default }
          })
        