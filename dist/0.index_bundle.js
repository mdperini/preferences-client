(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./app/components/PrefWorkspace.js":
/*!*****************************************!*\
  !*** ./app/components/PrefWorkspace.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PrefWorkspace; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_trading_sales_preferences_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/trading-sales-preferences.service */ \"./app/services/trading-sales-preferences.service.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\nvar PrefWorkspace = /*#__PURE__*/function (_React$Component) {\n  _inherits(PrefWorkspace, _React$Component);\n\n  var _super = _createSuper(PrefWorkspace);\n\n  function PrefWorkspace(props) {\n    var _this;\n\n    _classCallCheck(this, PrefWorkspace);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      layoutConfig: []\n    };\n    return _this;\n  }\n\n  _createClass(PrefWorkspace, [{\n    key: \"getPreferences\",\n    value: function getPreferences() {\n      var _this2 = this;\n\n      Object(_services_trading_sales_preferences_service__WEBPACK_IMPORTED_MODULE_1__[\"restoreTradingSalesPreferences\"])(function (data) {\n        _this2.setState({\n          layoutConfig: data\n        });\n      });\n    }\n  }, {\n    key: \"savePreferences\",\n    value: function savePreferences(layoutConfig) {\n      var _this3 = this;\n\n      Object(_services_trading_sales_preferences_service__WEBPACK_IMPORTED_MODULE_1__[\"saveTradingSalesPreferences\"])(layoutConfig, function (result) {\n        _this3.getPreferences();\n      });\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.getPreferences();\n    }\n  }, {\n    key: \"onAdd\",\n    value: function onAdd() {}\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Preferences Workspace\"));\n    }\n  }]);\n\n  return PrefWorkspace;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n\n\n//# sourceURL=webpack:///./app/components/PrefWorkspace.js?");

/***/ }),

/***/ "./app/services/http.config.js":
/*!*************************************!*\
  !*** ./app/services/http.config.js ***!
  \*************************************/
/*! exports provided: userid, httpGetConfig, renderHTTPPostConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"userid\", function() { return userid; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"httpGetConfig\", function() { return httpGetConfig; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderHTTPPostConfig\", function() { return renderHTTPPostConfig; });\nvar userid = 'michael-d';\nvar httpGetConfig = {\n  method: 'GET',\n  mode: 'cors',\n  cache: 'no-cache',\n  credentials: 'same-origin',\n  headers: {\n    'Content-Type': 'application/json',\n    'userid': userid\n  },\n  redirect: 'follow',\n  referrer: 'no-referrer'\n};\nvar renderHTTPPostConfig = function renderHTTPPostConfig(data) {\n  return {\n    method: 'POST',\n    mode: 'cors',\n    cache: 'no-cache',\n    credentials: 'same-origin',\n    headers: {\n      'Content-Type': 'application/json',\n      'userid': userid // 'Content-Type': 'application/x-www-form-urlencoded',\n\n    },\n    redirect: 'follow',\n    referrer: 'no-referrer',\n    body: JSON.stringify(data)\n  };\n};\n\n//# sourceURL=webpack:///./app/services/http.config.js?");

/***/ }),

/***/ "./app/services/trading-sales-preferences.service.js":
/*!***********************************************************!*\
  !*** ./app/services/trading-sales-preferences.service.js ***!
  \***********************************************************/
/*! exports provided: restoreTradingSalesPreferences, saveTradingSalesPreferences */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"restoreTradingSalesPreferences\", function() { return restoreTradingSalesPreferences; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveTradingSalesPreferences\", function() { return saveTradingSalesPreferences; });\n/* harmony import */ var _http_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http.config */ \"./app/services/http.config.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\nvar url = 'http://localhost:3383/tradingSalesPreferences';\n\nfunction fetchPreferences() {\n  return _fetchPreferences.apply(this, arguments);\n}\n\nfunction _fetchPreferences() {\n  _fetchPreferences = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    var url,\n        callbackFunc,\n        _args = arguments;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            url = _args.length > 0 && _args[0] !== undefined ? _args[0] : '';\n            callbackFunc = _args.length > 1 ? _args[1] : undefined;\n            _context.next = 4;\n            return fetch(url, _http_config__WEBPACK_IMPORTED_MODULE_0__[\"httpGetConfig\"]).then(function (response) {\n              return response.json();\n            }).then(function (data) {\n              callbackFunc(data);\n            });\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _fetchPreferences.apply(this, arguments);\n}\n\nfunction postData() {\n  return _postData.apply(this, arguments);\n}\n\nfunction _postData() {\n  _postData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n    var url,\n        data,\n        callbackFunc,\n        _args2 = arguments;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            url = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : '';\n            data = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};\n            callbackFunc = _args2.length > 2 ? _args2[2] : undefined;\n            _context2.next = 5;\n            return fetch(url, Object(_http_config__WEBPACK_IMPORTED_MODULE_0__[\"renderHTTPPostConfig\"])(data)).then(function (response) {\n              return response.json();\n            }).then(function (success) {\n              callbackFunc(success);\n            });\n\n          case 5:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _postData.apply(this, arguments);\n}\n\nvar restoreTradingSalesPreferences = function restoreTradingSalesPreferences(callbackFunc) {\n  fetchPreferences(url, callbackFunc);\n};\nvar saveTradingSalesPreferences = function saveTradingSalesPreferences(layoutConfig, callbackFunc) {\n  postData(url, layoutConfig, callbackFunc);\n};\n\n//# sourceURL=webpack:///./app/services/trading-sales-preferences.service.js?");

/***/ })

}]);