exports.ids = [1];
exports.modules = {

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_postActions__ = __webpack_require__(3);
var _jsxFileName = '/Users/dimukhin/playground/react/react-ssr-redux/src/components/Postform.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var PostForm = function (_Component) {
  _inherits(PostForm, _Component);

  function PostForm(props) {
    _classCallCheck(this, PostForm);

    var _this = _possibleConstructorReturn(this, (PostForm.__proto__ || Object.getPrototypeOf(PostForm)).call(this, props));

    _this.state = {
      title: '',
      body: ''
    };

    _this.onChange = _this.onChange.bind(_this);
    _this.onSubmit = _this.onSubmit.bind(_this);
    return _this;
  }

  _createClass(PostForm, [{
    key: 'onChange',
    value: function onChange(e) {
      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }
  }, {
    key: 'onSubmit',
    value: function onSubmit(e) {
      e.preventDefault();

      var post = {
        title: this.state.title,
        body: this.state.body
      };

      this.props.createPost(post);
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        _defineProperty({
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, '__self', this),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          _defineProperty({
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            },
            __self: this
          }, '__self', this),
          'Add Post'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'form',
          _defineProperty({ onSubmit: this.onSubmit, __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            },
            __self: this
          }, '__self', this),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            _defineProperty({
              __source: {
                fileName: _jsxFileName,
                lineNumber: 38
              },
              __self: this
            }, '__self', this),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'label',
              _defineProperty({
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 39
                },
                __self: this
              }, '__self', this),
              'Title: '
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', _defineProperty({
              __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              },
              __self: this
            }, '__self', this)),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', _defineProperty({
              type: 'text',
              name: 'title',
              onChange: this.onChange,
              value: this.state.title,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 41
              },
              __self: this
            }, '__self', this))
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', _defineProperty({
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            },
            __self: this
          }, '__self', this)),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            _defineProperty({
              __source: {
                fileName: _jsxFileName,
                lineNumber: 49
              },
              __self: this
            }, '__self', this),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'label',
              _defineProperty({
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 50
                },
                __self: this
              }, '__self', this),
              'Body: '
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', _defineProperty({
              __source: {
                fileName: _jsxFileName,
                lineNumber: 51
              },
              __self: this
            }, '__self', this)),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', _defineProperty({
              name: 'body',
              onChange: this.onChange,
              value: this.state.body,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 52
              },
              __self: this
            }, '__self', this))
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', _defineProperty({
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          }, '__self', this)),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            _defineProperty({ type: 'submit', __source: {
                fileName: _jsxFileName,
                lineNumber: 59
              },
              __self: this
            }, '__self', this),
            'Submit'
          )
        )
      );
    }
  }]);

  return PostForm;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

PostForm.propTypes = {
  createPost: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
};

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(null, { createPost: __WEBPACK_IMPORTED_MODULE_3__actions_postActions__["a" /* createPost */] })(PostForm));

/***/ })

};;
//# sourceMappingURL=1.server.js.map