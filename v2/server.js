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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FETCH_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NEW_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SET_MESSAGE; });
var FETCH_POSTS = 'FETCH_POSTS';
var NEW_POST = 'NEW_POST';

var SET_MESSAGE = 'SET_MESSAGE';

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-loadable");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setMessage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types__ = __webpack_require__(1);


var setMessage = function setMessage(message) {
    return function (dispatch) {
        dispatch({
            type: __WEBPACK_IMPORTED_MODULE_0__types__["c" /* SET_MESSAGE */],
            payload: message
        });
    };
};

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_postActions__ = __webpack_require__(9);
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

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fetchPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createPost; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch__);



var fetchPosts = function fetchPosts() {
  return function (dispatch) {
    __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default()('https://jsonplaceholder.typicode.com/posts').then(function (res) {
      return res.json();
    }).then(function (posts) {
      return dispatch({
        type: __WEBPACK_IMPORTED_MODULE_0__types__["a" /* FETCH_POSTS */],
        payload: posts
      });
    });
  };
};

var createPost = function createPost(postData) {
  return function (dispatch) {
    __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default()('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(postData)
    }).then(function (res) {
      return res.json();
    }).then(function (post) {
      return dispatch({
        type: __WEBPACK_IMPORTED_MODULE_0__types__["b" /* NEW_POST */],
        payload: post
      });
    });
  };
};

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_loadable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_loadable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_loadable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_store__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__middleware_renderer__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_actions_messageActions__ = __webpack_require__(6);





// we'll talk about this in a minute:



var PORT = process.env.PORT || 3000;

// initialize the application and create the routes
var app = __WEBPACK_IMPORTED_MODULE_0_express___default()();

var store = Object(__WEBPACK_IMPORTED_MODULE_2__src_store__["a" /* default */])();
store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_4__src_actions_messageActions__["a" /* setMessage */])('Hi I am from server!'));

// root (/) should always serve our server rendered page
app.use('^/$', Object(__WEBPACK_IMPORTED_MODULE_3__middleware_renderer__["a" /* default */])(store));

// other static resources should just be served as they are
app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.static('build', { maxAge: '30d' }));

// all other routes should be rendered based on the route
app.use('*', Object(__WEBPACK_IMPORTED_MODULE_3__middleware_renderer__["a" /* default */])(store));

// start the app
__WEBPACK_IMPORTED_MODULE_1_react_loadable___default.a.preloadAll().then(function () {
    app.listen(PORT, function (error) {
        if (error) {
            return console.log('something bad happened', error);
        }

        console.log("listening on " + PORT + "...");
    });
});

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = configureStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__(14);




var middleware = [__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a];

function configureStore() {
    var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_2__reducers__["a" /* default */], initialState, __WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"].apply(undefined, middleware));
}

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__postReducer__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messageReducer__ = __webpack_require__(16);




/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  posts: __WEBPACK_IMPORTED_MODULE_1__postReducer__["a" /* default */],
  message: __WEBPACK_IMPORTED_MODULE_2__messageReducer__["a" /* default */]
}));

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_types__ = __webpack_require__(1);


var initialState = {
  items: [],
  item: {}
};

/* harmony default export */ __webpack_exports__["a"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions_types__["a" /* FETCH_POSTS */]:
      return Object.assign({}, state, {
        items: action.payload
      });
    case __WEBPACK_IMPORTED_MODULE_0__actions_types__["b" /* NEW_POST */]:
      return Object.assign({}, state, {
        item: action.payload
      });
    default:
      return state;
  }
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_types__ = __webpack_require__(1);


var initialState = {
  message: ''
};

/* harmony default export */ __webpack_exports__["a"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions_types__["c" /* SET_MESSAGE */]:
      return Object.assign({}, state, {
        message: action.payload
      });
    default:
      return state;
  }
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom_server__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_loadable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_loadable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_loadable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_App__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__build_asset_manifest_json__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__build_asset_manifest_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__build_asset_manifest_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux__);
var _jsxFileName = '/Users/dimukhin/playground/react/react-ssr-redux/server/middleware/renderer.js',
    _this = this;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






// import our main App component



var path = __webpack_require__(28);
var fs = __webpack_require__(29);


var extractAssets = function extractAssets(assets, chunks) {
    return Object.keys(assets).filter(function (asset) {
        return chunks.indexOf(asset.replace('.js', '')) > -1;
    }).map(function (k) {
        return assets[k];
    });
};

/* harmony default export */ __webpack_exports__["a"] = (function (store) {
    return function (req, res, next) {

        // point to the html file created by CRA's build tool
        var filePath = path.resolve('build', 'index.html');

        fs.readFile(filePath, 'utf8', function (err, htmlData) {
            if (err) {
                console.error('err', err);
                return res.status(404).end();
            }

            var modules = [];

            // render the app as a string
            var html = __WEBPACK_IMPORTED_MODULE_1_react_dom_server___default.a.renderToString(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_react_loadable___default.a.Capture,
                _defineProperty({ report: function report(m) {
                        return modules.push(m);
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 33
                    },
                    __self: _this
                }, '__self', _this),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_6_react_redux__["Provider"],
                    _defineProperty({ store: store, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 34
                        },
                        __self: _this
                    }, '__self', _this),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["StaticRouter"],
                        _defineProperty({ location: req.baseUrl, context: {}, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 35
                            },
                            __self: _this
                        }, '__self', _this),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__src_App__["a" /* default */], _defineProperty({
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 36
                            },
                            __self: _this
                        }, '__self', _this))
                    )
                )
            ));

            var extraChunks = extractAssets(__WEBPACK_IMPORTED_MODULE_5__build_asset_manifest_json___default.a, modules).map(function (c) {
                return '<script type="text/javascript" src="/' + c + '"></script>';
            });

            var reduxState = JSON.stringify(store.getState());

            // inject the rendered app into our html and send it
            return res.send(htmlData.replace('<div id="root"></div>', '<div id="root">' + html + '</div>').replace('</body>', extraChunks.join('') + '</body>').replace('"__SERVER_REDUX_STATE__"', reduxState));
        });
    };
});

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App_css__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__App_css__);
var _jsxFileName = '/Users/dimukhin/playground/react/react-ssr-redux/src/App.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





// import logo from './logo.svg';


var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        _defineProperty({ className: 'App', __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: this
        }, '__self', this),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'header',
          _defineProperty({ className: 'App-header', __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            },
            __self: this
          }, '__self', this),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h1',
            _defineProperty({ className: 'App-title', __source: {
                fileName: _jsxFileName,
                lineNumber: 14
              },
              __self: this
            }, '__self', this),
            'Welcome to React'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'ul',
            _defineProperty({
              __source: {
                fileName: _jsxFileName,
                lineNumber: 15
              },
              __self: this
            }, '__self', this),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              _defineProperty({
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 16
                },
                __self: this
              }, '__self', this),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"],
                _defineProperty({ to: '/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                  },
                  __self: this
                }, '__self', this),
                'Home'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              _defineProperty({
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 17
                },
                __self: this
              }, '__self', this),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"],
                _defineProperty({ to: '/posts', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                  },
                  __self: this
                }, '__self', this),
                'Posts'
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Switch"],
          _defineProperty({
            __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            },
            __self: this
          }, '__self', this),
          __WEBPACK_IMPORTED_MODULE_2__routes__["a" /* default */].map(function (route, i) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], Object.assign({ key: i }, route, _defineProperty({
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
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__containers_HomePage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__containers_PostsPage__ = __webpack_require__(24);



var routes = [{
    path: "/",
    component: __WEBPACK_IMPORTED_MODULE_0__containers_HomePage__["a" /* default */],
    exact: true
}, {
    path: "/posts",
    component: __WEBPACK_IMPORTED_MODULE_1__containers_PostsPage__["a" /* default */]
}];

/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_loadable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_loadable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_loadable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_messageActions__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Loading__ = __webpack_require__(22);
var _jsxFileName = '/Users/dimukhin/playground/react/react-ssr-redux/src/containers/HomePage.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var PostForm = __WEBPACK_IMPORTED_MODULE_1_react_loadable___default()(_defineProperty({
    loader: function loader() {
        return Promise.resolve().then(function () {
            return __webpack_require__( /* webpackChunkName: "postFormChunk" */7);
        });
    },
    modules: ['../components/Postform'],
    webpack: function webpack() {
        return [/*require.resolve*/(7)];
    },
    loading: __WEBPACK_IMPORTED_MODULE_4__components_Loading__["a" /* default */]
}, 'modules', ['postFormChunk']));

var HomePage = function (_Component) {
    _inherits(HomePage, _Component);

    function HomePage() {
        _classCallCheck(this, HomePage);

        return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).apply(this, arguments));
    }

    _createClass(HomePage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (!this.props.message) {
                this.props.setMessage("Hi, I am from client!!!");
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                _defineProperty({
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 23
                    },
                    __self: this
                }, '__self', this),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h1',
                    _defineProperty({
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 24
                        },
                        __self: this
                    }, '__self', this),
                    'Welcome to the home page'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    _defineProperty({
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 25
                        },
                        __self: this
                    }, '__self', this),
                    'Redux: ',
                    this.props.message
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(PostForm, _defineProperty({
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 26
                    },
                    __self: this
                }, '__self', this))
            );
        }
    }]);

    return HomePage;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
    return {
        message: state.message.message
    };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps, { setMessage: __WEBPACK_IMPORTED_MODULE_3__actions_messageActions__["a" /* setMessage */] })(HomePage));

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/Users/dimukhin/playground/react/react-ssr-redux/src/components/Loading.js',
    _this = this;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["a"] = (function () {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        _defineProperty({
            __source: {
                fileName: _jsxFileName,
                lineNumber: 5
            },
            __self: _this
        }, '__self', _this),
        'Loading...'
    );
});

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Posts__ = __webpack_require__(25);
var _jsxFileName = '/Users/dimukhin/playground/react/react-ssr-redux/src/containers/PostsPage.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var PostsPage = function (_Component) {
    _inherits(PostsPage, _Component);

    function PostsPage() {
        _classCallCheck(this, PostsPage);

        return _possibleConstructorReturn(this, (PostsPage.__proto__ || Object.getPrototypeOf(PostsPage)).apply(this, arguments));
    }

    _createClass(PostsPage, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                _defineProperty({
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 8
                    },
                    __self: this
                }, '__self', this),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h1',
                    _defineProperty({
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 9
                        },
                        __self: this
                    }, '__self', this),
                    'Welcome to the posts page'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Posts__["a" /* default */], _defineProperty({
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 10
                    },
                    __self: this
                }, '__self', this))
            );
        }
    }]);

    return PostsPage;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (PostsPage);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_postActions__ = __webpack_require__(9);
var _jsxFileName = '/Users/dimukhin/playground/react/react-ssr-redux/src/components/Posts.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Posts = function (_Component) {
  _inherits(Posts, _Component);

  function Posts() {
    _classCallCheck(this, Posts);

    return _possibleConstructorReturn(this, (Posts.__proto__ || Object.getPrototypeOf(Posts)).apply(this, arguments));
  }

  _createClass(Posts, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.props.posts && this.props.posts.length === 0) this.props.fetchPosts();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.newPost) {
        this.props.posts.unshift(nextProps.newPost);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var postItems = this.props.posts.map(function (post) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          _defineProperty({ key: post.id, __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            },
            __self: _this2
          }, '__self', _this2),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h3',
            _defineProperty({
              __source: {
                fileName: _jsxFileName,
                lineNumber: 21
              },
              __self: _this2
            }, '__self', _this2),
            post.title
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            _defineProperty({
              __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              },
              __self: _this2
            }, '__self', _this2),
            post.body
          )
        );
      });
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        _defineProperty({
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, '__self', this),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          _defineProperty({
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            },
            __self: this
          }, '__self', this),
          'Posts'
        ),
        postItems
      );
    }
  }]);

  return Posts;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Posts.propTypes = {
  fetchPosts: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  posts: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array.isRequired,
  newPost: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    posts: state.posts.items,
    newPost: state.posts.item
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps, { fetchPosts: __WEBPACK_IMPORTED_MODULE_3__actions_postActions__["b" /* fetchPosts */] })(Posts));

/***/ }),
/* 26 */
/***/ (function(module, exports) {



/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = {"main.css":"static/css/main.c17080f1.css","main.css.map":"static/css/main.c17080f1.css.map","main.js":"static/js/main.b7fa319f.js","main.js.map":"static/js/main.b7fa319f.js.map","postFormChunk.js":"static/js/postFormChunk.074b81eb.chunk.js","postFormChunk.js.map":"static/js/postFormChunk.074b81eb.chunk.js.map"}

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map