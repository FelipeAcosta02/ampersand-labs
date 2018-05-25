webpackHotUpdate(5,{

/***/ "./components/AppLayout/AppLayout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppLayout; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_row__ = __webpack_require__("./node_modules/antd/lib/row/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_row___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_row__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_menu__ = __webpack_require__("./node_modules/antd/lib/menu/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_col__ = __webpack_require__("./node_modules/antd/lib/col/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_col___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_col__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_layout__ = __webpack_require__("./node_modules/antd/lib/layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_layout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__FooterElement_FooterElement__ = __webpack_require__("./components/AppLayout/FooterElement/FooterElement.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_next_link__);






var _jsxFileName = "/Users/felipeacosta/Desktop/ampersand-labs/components/AppLayout/AppLayout.js";

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




var Header = __WEBPACK_IMPORTED_MODULE_3_antd_lib_layout___default.a.Header,
    Content = __WEBPACK_IMPORTED_MODULE_3_antd_lib_layout___default.a.Content,
    Footer = __WEBPACK_IMPORTED_MODULE_3_antd_lib_layout___default.a.Footer;

var AppLayout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AppLayout, _React$Component);

  function AppLayout() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, AppLayout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = AppLayout.__proto__ || Object.getPrototypeOf(AppLayout)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        current: 'home',
        pages: [{
          page: 'About',
          subs: ['Start + Future']
        }, {
          page: 'Labs',
          subs: ['Ed Labs', 'Dev Labs']
        }, {
          page: 'Projects',
          subs: ['Purplished']
        }, {
          page: 'Join',
          subs: ['']
        }, {
          page: 'Contact',
          subs: ['']
        }, {
          page: 'Team',
          subs: ['']
        }]
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        _this.setState({
          current: event.key
        });
      }
    }), _temp));
  }

  _createClass(AppLayout, [{
    key: "render",
    value: function render() {
      var footerLinks = this.state.pages.map(function (page, i) {
        return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_col___default.a, {
          xs: 20,
          sm: 10,
          md: 6,
          lg: 4,
          xl: 4,
          style: {
            height: '150px'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__FooterElement_FooterElement__["a" /* default */], {
          key: i,
          page: page['page'],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        }, page['subs']));
      });
      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_layout___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_menu___default.a, {
        theme: "light",
        onClick: this.handleClick,
        selectedKeys: this.state.current,
        mode: "horizontal",
        style: {
          lineHeight: '64px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_menu___default.a.Item, {
        key: "home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_next_link___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, "Home")), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_menu___default.a.Item, {
        key: "about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_next_link___default.a, {
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, "About")), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_menu___default.a.Item, {
        key: "labs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_next_link___default.a, {
        href: "/labs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, " Labs")), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_menu___default.a.Item, {
        key: "projects",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_next_link___default.a, {
        href: "/projects",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, "Projects")), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_menu___default.a.Item, {
        key: "blog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_next_link___default.a, {
        href: "/blog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, "Blog")), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_menu___default.a.Item, {
        key: "team",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_next_link___default.a, {
        href: "/team",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, "Team")))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Content, {
        style: {
          padding: '4em 2em 4em',
          backgroundColor: 'white'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, this.props.children), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Footer, {
        style: {
          backgroundColor: ' #b2bec3'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_row___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, footerLinks)));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return AppLayout;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);


;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Header, "Header", "/Users/felipeacosta/Desktop/ampersand-labs/components/AppLayout/AppLayout.js");
  reactHotLoader.register(Content, "Content", "/Users/felipeacosta/Desktop/ampersand-labs/components/AppLayout/AppLayout.js");
  reactHotLoader.register(Footer, "Footer", "/Users/felipeacosta/Desktop/ampersand-labs/components/AppLayout/AppLayout.js");
  reactHotLoader.register(AppLayout, "AppLayout", "/Users/felipeacosta/Desktop/ampersand-labs/components/AppLayout/AppLayout.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.a3718232a2e346ebba82.hot-update.js.map