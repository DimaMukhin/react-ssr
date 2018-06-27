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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jsxFileName = '/Users/dimukhin/playground/react/react-ssr/server/index.js';

var _express = __webpack_require__(2);

var _express2 = _interopRequireDefault(_express);

var _cors = __webpack_require__(3);

var _cors2 = _interopRequireDefault(_cors);

var _server = __webpack_require__(4);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _serializeJavascript = __webpack_require__(5);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _App = __webpack_require__(6);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use((0, _cors2.default)());

app.use(_express2.default.static('build'));

app.get('*', function (req, res, next) {
    var markup = (0, _server.renderToString)(_react2.default.createElement(_App2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        },
        __self: undefined
    }));

    res.send('\n        <!DOCTYPE html>\n        <html lang="en">\n        <head>\n            <meta charset="utf-8">\n            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n            <meta name="theme-color" content="#000000">\n            \n            <link rel="manifest" href="%PUBLIC_URL%/manifest.json">\n            <link rel="shortcut icon" href="/favicon.ico">\n            <title>React App</title>\n        </head>\n        <body>\n            <noscript>\n                You need to enable JavaScript to run this app.\n            </noscript>\n            <div id="root">' + markup + '</div>\n            <script type="text/javascript" src="/static/js/main.dff2ec20.js"></script>\n        </body>\n        </html>\n    ');
});

app.listen(3000, function () {
    console.log('server is listening on port 3000');
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(7);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _jsxFileName = '/Users/dimukhin/playground/react/react-ssr/src/App.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _MyComponent = __webpack_require__(8);

var _MyComponent2 = _interopRequireDefault(_MyComponent);

var _api = __webpack_require__(9);

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import logo from './logo.svg';
// import './App.css';

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    var _this2 = this;

    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      data: []
    };
    _this.fetchData = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var data;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _api2.default.fetchPopularRepos();

            case 2:
              data = _context.sent;

              console.log(data);
              _this.setState({ data: data });

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    }));


    _this.fetchData();
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      var allData = this.state.data.map(function (repo) {
        return _react2.default.createElement(
          'li',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            },
            __self: _this3
          },
          repo.name
        );
      });

      return _react2.default.createElement(
        'div',
        { className: 'App', __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        },
        _react2.default.createElement(
          'header',
          { className: 'App-header', __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            },
            __self: this
          },
          _react2.default.createElement(
            'h1',
            { className: 'App-title', __source: {
                fileName: _jsxFileName,
                lineNumber: 37
              },
              __self: this
            },
            'Welcome to React'
          )
        ),
        _react2.default.createElement(_MyComponent2.default, { name: 'Dimba', __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }),
        _react2.default.createElement('hr', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }),
        _react2.default.createElement(
          'ul',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            },
            __self: this
          },
          allData
        ),
        _react2.default.createElement('hr', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }),
        _react2.default.createElement(
          'p',
          { className: 'App-intro', __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            },
            __self: this
          },
          'To get started, edit ',
          _react2.default.createElement(
            'code',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 51
              },
              __self: this
            },
            'src/App.js'
          ),
          ' and save to reload.'
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/Users/dimukhin/playground/react/react-ssr/src/components/MyComponent.js';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MyComponent = function MyComponent(props) {
    return _react2.default.createElement(
        'h1',
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 5
            },
            __self: undefined
        },
        ' Hello My Component: ',
        props.name,
        ' '
    );
};

exports.default = MyComponent;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isomorphicFetch = __webpack_require__(10);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fetchPopularRepos() {
    var language = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';

    var encodedURI = encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:' + language + '&sort=stars&order=desc&type=Repositories');

    return (0, _isomorphicFetch2.default)(encodedURI).then(function (data) {
        return data.json();
    }).then(function (repos) {
        return repos.items;
    }).catch(function (error) {
        console.warn(error);
        return null;
    });
}

exports.default = { fetchPopularRepos: fetchPopularRepos };

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ })
/******/ ]);