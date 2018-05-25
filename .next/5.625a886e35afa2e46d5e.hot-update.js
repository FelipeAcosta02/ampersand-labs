webpackHotUpdate(5,{

/***/ "./components/AppLayout/FooterElement/FooterElement.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterElement; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_col__ = __webpack_require__("./node_modules/antd/lib/col/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_col___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_col__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);



var _jsxFileName = "/Users/felipeacosta/Desktop/ampersand-labs/components/AppLayout/FooterElement/FooterElement.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var FooterElement =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FooterElement, _React$Component);

  function FooterElement() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, FooterElement);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = FooterElement.__proto__ || Object.getPrototypeOf(FooterElement)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "convert", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(string) {
        return string.split(" ").join("-").toLowerCase();
      }
    }), _temp));
  }

  _createClass(FooterElement, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var lists = this.props.children.map(function (item, i) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
          key: i,
          href: _this2.convert(_this2.props.page) + '/' + _this2.convert(item),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
          style: {
            color: 'white'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        }, item)));
      });
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_col___default.a, {
        span: 24,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        href: '/' + this.convert(this.props.page),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        style: {
          color: 'white',
          lineHeight: '1em'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, this.props.page))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, this.props.page), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
        style: {
          listStyleType: 'none',
          color: 'white'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, lists));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return FooterElement;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);


;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(FooterElement, "FooterElement", "/Users/felipeacosta/Desktop/ampersand-labs/components/AppLayout/FooterElement/FooterElement.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.625a886e35afa2e46d5e.hot-update.js.map