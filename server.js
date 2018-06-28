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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isomorphicFetch = __webpack_require__(3);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    getAllNews: function getAllNews() {
        return (0, _isomorphicFetch2.default)('http://localhost:3004/news').then(function (data) {
            return data.json();
        });
    },
    getFirstNews: function getFirstNews() {
        return this.getAllNews().then(function (data) {
            return data[0];
        });
    },
    getNewsIds: function getNewsIds() {
        return this.getAllNews().then(function (news) {
            var ids = [];
            ids = news.map(function (item) {
                return item.id;
            });
            return ids;
        });
    },
    getNewsItem: function getNewsItem(id) {
        return (0, _isomorphicFetch2.default)('http://localhost:3004/news/' + id).then(function (data) {
            return data.json();
        });
    }
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Home = __webpack_require__(11);

var _Home2 = _interopRequireDefault(_Home);

var _News = __webpack_require__(12);

var _News2 = _interopRequireDefault(_News);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [{
    path: '/',
    component: _Home2.default,
    exact: true
}, {
    path: '/news',
    component: _News2.default
}];

exports.default = routes;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jsxFileName = "/Users/dimukhin/playground/react/react-ssr/server/index.js";

var _express = __webpack_require__(7);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(8);

var _reactRouterDom = __webpack_require__(2);

var _serializeJavascript = __webpack_require__(9);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _isomorphicFetch = __webpack_require__(3);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _App = __webpack_require__(10);

var _App2 = _interopRequireDefault(_App);

var _routes = __webpack_require__(4);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var app = (0, _express2.default)();

app.use(_express2.default.static("build"));

app.get("*", function (req, res) {
    var currentRoute = _routes2.default.find(function (route) {
        return (0, _reactRouterDom.matchPath)(req.url, route);
    });
    var requestInitialData = currentRoute.component.requestInitialData && currentRoute.component.requestInitialData();

    Promise.resolve(requestInitialData).then(function (initialData) {
        var context = { initialData: initialData };
        var markup = (0, _server.renderToString)(_react2.default.createElement(
            _reactRouterDom.StaticRouter,
            _defineProperty({ location: req.url, context: context, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                },
                __self: undefined
            }, "__self", undefined),
            _react2.default.createElement(_App2.default, _defineProperty({
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                },
                __self: undefined
            }, "__self", undefined))
        ));

        res.send("\n            <!DOCTYPE html>\n            <html lang=\"en\">\n                <head>\n                    <meta charset=\"utf-8\">\n                    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n                    <meta name=\"theme-color\" content=\"#000000\">\n                    \n                    <link rel=\"manifest\" href=\"%PUBLIC_URL%/manifest.json\">\n                    <link rel=\"shortcut icon\" href=\"/favicon.ico\">\n                    <title>React App</title>\n\n                    <script>window.__initialData__ = " + (0, _serializeJavascript2.default)(initialData) + " </script>\n                </head>\n                <body>\n                    <noscript>\n                        You need to enable JavaScript to run this app.\n                    </noscript>\n                    <div id=\"root\">" + markup + "</div>\n                    <script type=\"text/javascript\" src=\"/static/js/main.js\"></script>\n                </body>\n            </html>\n        ");
    });
});

app.listen(process.env.PORT || 3000, function () {
    console.log("Server is listening on port 3000");
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/dimukhin/playground/react/react-ssr/src/App.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

var _routes = __webpack_require__(4);

var _routes2 = _interopRequireDefault(_routes);

var _api = __webpack_require__(1);

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        _defineProperty({
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        }, '__self', this),
        _react2.default.createElement(
          'ul',
          _defineProperty({
            __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            },
            __self: this
          }, '__self', this),
          _react2.default.createElement(
            'li',
            _defineProperty({
              __source: {
                fileName: _jsxFileName,
                lineNumber: 17
              },
              __self: this
            }, '__self', this),
            _react2.default.createElement(
              _reactRouterDom.Link,
              _defineProperty({ to: '/', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 17
                },
                __self: this
              }, '__self', this),
              'Home'
            )
          ),
          _react2.default.createElement(
            'li',
            _defineProperty({
              __source: {
                fileName: _jsxFileName,
                lineNumber: 18
              },
              __self: this
            }, '__self', this),
            _react2.default.createElement(
              _reactRouterDom.Link,
              _defineProperty({ to: '/news', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 18
                },
                __self: this
              }, '__self', this),
              'News'
            )
          )
        ),
        _react2.default.createElement(
          _reactRouterDom.Switch,
          _defineProperty({
            __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            },
            __self: this
          }, '__self', this),
          _routes2.default.map(function (route, i) {
            return _react2.default.createElement(_reactRouterDom.Route, Object.assign({ key: i }, route, _defineProperty({
              __source: {
                fileName: _jsxFileName,
                lineNumber: 21
              },
              __self: _this2
            }, '__self', _this2)));
          })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/Users/dimukhin/playground/react/react-ssr/src/containers/Home.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
    _inherits(Home, _Component);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'h1',
                _defineProperty({
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 6
                    },
                    __self: this
                }, '__self', this),
                'Hello Home Container'
            );
        }
    }]);

    return Home;
}(_react.Component);

exports.default = Home;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(5);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _jsxFileName = '/Users/dimukhin/playground/react/react-ssr/src/containers/News.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _api = __webpack_require__(1);

var _api2 = _interopRequireDefault(_api);

var _NewsItem = __webpack_require__(13);

var _NewsItem2 = _interopRequireDefault(_NewsItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var News = function (_Component) {
    _inherits(News, _Component);

    function News(props) {
        var _this2 = this;

        _classCallCheck(this, News);

        var _this = _possibleConstructorReturn(this, (News.__proto__ || Object.getPrototypeOf(News)).call(this, props));

        _this.state = {
            newsIds: []
        };
        _this.getNewsIds = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var newsIds;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return _api2.default.getNewsIds();

                        case 2:
                            newsIds = _context.sent;

                            _this.setState({ newsIds: newsIds });

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        }));


        var initialData = [];

        if (props.staticContext) {
            initialData = props.staticContext.initialData.News;
        } else {
            initialData = window.__initialData__.News;
            delete window.__initialData__.News;
        }

        if (initialData) _this.state = { newsIds: initialData };
        return _this;
    }

    _createClass(News, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getNewsIds();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var newsItems = this.state.newsIds.map(function (id) {
                var staticContext = _this3.props.staticContext ? _this3.props.staticContext.initialData['NewsItem' + id] : window.__initialData__['NewsItem' + id];
                if (!_this3.props.staticContext) delete window.__initialData__['NewsItem' + id];
                return _react2.default.createElement(_NewsItem2.default, _defineProperty({ key: id, id: id, staticContext: staticContext, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 60
                    },
                    __self: _this3
                }, '__self', _this3));
            });

            return _react2.default.createElement(
                'div',
                _defineProperty({
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 64
                    },
                    __self: this
                }, '__self', this),
                _react2.default.createElement(
                    'h1',
                    _defineProperty({
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 65
                        },
                        __self: this
                    }, '__self', this),
                    'I am /News, here are all my NewsItem children'
                ),
                newsItems
            );
        }
    }], [{
        key: 'requestInitialData',
        value: function requestInitialData() {
            var _this4 = this;

            return _api2.default.getNewsIds().then(function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(ids) {
                    var allData, newsItemPromises, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, id;

                    return _regenerator2.default.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    allData = { News: ids };
                                    newsItemPromises = [];
                                    _iteratorNormalCompletion = true;
                                    _didIteratorError = false;
                                    _iteratorError = undefined;
                                    _context2.prev = 5;


                                    for (_iterator = ids[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                        id = _step.value;

                                        newsItemPromises.push(_NewsItem2.default.requestInitialData(id));
                                    }

                                    _context2.next = 13;
                                    break;

                                case 9:
                                    _context2.prev = 9;
                                    _context2.t0 = _context2['catch'](5);
                                    _didIteratorError = true;
                                    _iteratorError = _context2.t0;

                                case 13:
                                    _context2.prev = 13;
                                    _context2.prev = 14;

                                    if (!_iteratorNormalCompletion && _iterator.return) {
                                        _iterator.return();
                                    }

                                case 16:
                                    _context2.prev = 16;

                                    if (!_didIteratorError) {
                                        _context2.next = 19;
                                        break;
                                    }

                                    throw _iteratorError;

                                case 19:
                                    return _context2.finish(16);

                                case 20:
                                    return _context2.finish(13);

                                case 21:
                                    _context2.next = 23;
                                    return Promise.all(newsItemPromises).then(function (values) {
                                        for (var i = 0; i < ids.length; i++) {
                                            allData['NewsItem' + ids[i]] = values[i];
                                        }
                                    });

                                case 23:
                                    return _context2.abrupt('return', allData);

                                case 24:
                                case 'end':
                                    return _context2.stop();
                            }
                        }
                    }, _callee2, _this4, [[5, 9, 13, 21], [14,, 16, 20]]);
                }));

                return function (_x) {
                    return _ref2.apply(this, arguments);
                };
            }());
        }
    }]);

    return News;
}(_react.Component);

exports.default = News;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(5);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _jsxFileName = '/Users/dimukhin/playground/react/react-ssr/src/components/NewsItem.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _api = __webpack_require__(1);

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewsItem = function (_Component) {
    _inherits(NewsItem, _Component);

    function NewsItem(props) {
        _classCallCheck(this, NewsItem);

        var _this = _possibleConstructorReturn(this, (NewsItem.__proto__ || Object.getPrototypeOf(NewsItem)).call(this, props));

        _this.state = {
            newsTitle: ''
        };


        if (_this.props.staticContext) {
            _this.state.newsTitle = _this.props.staticContext.title;
        }
        return _this;
    }

    _createClass(NewsItem, [{
        key: 'componentDidMount',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var newsItem;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return NewsItem.requestInitialData(this.props.id);

                            case 2:
                                newsItem = _context.sent;

                                this.setState({ newsTitle: newsItem.title });

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function componentDidMount() {
                return _ref.apply(this, arguments);
            }

            return componentDidMount;
        }()
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'h1',
                _defineProperty({
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 30
                    },
                    __self: this
                }, '__self', this),
                'News Item title: ',
                this.state.newsTitle
            );
        }
    }], [{
        key: 'requestInitialData',
        value: function requestInitialData() {
            var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            return _api2.default.getNewsItem(id);
        }
    }]);

    return NewsItem;
}(_react.Component);

exports.default = NewsItem;

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map