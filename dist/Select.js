(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("classnames"), require("react-addons-css-transition-group"), require("react-dom"), require("ship-components-highlight-click"), require("ship-components-outsideclick"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "classnames", "react-addons-css-transition-group", "react-dom", "ship-components-highlight-click", "ship-components-outsideclick"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("React"), require("classnames"), require("react-addons-css-transition-group"), require("react-dom"), require("ship-components-highlight-click"), require("ship-components-outsideclick")) : factory(root["React"], root["classnames"], root["react-addons-css-transition-group"], root["react-dom"], root["ship-components-highlight-click"], root["ship-components-outsideclick"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/** ****************************************************************************
	 * Select
	 *
	 * @author       Isaac Suttell <isaac_suttell@playstation.sony.com>
	 * @file         Render a <select>
	 * 
	 ******************************************************************************/
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(7);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _SelectOption = __webpack_require__(4);
	
	var _SelectOption2 = _interopRequireDefault(_SelectOption);
	
	var _shipComponentsOutsideclick = __webpack_require__(9);
	
	var _shipComponentsOutsideclick2 = _interopRequireDefault(_shipComponentsOutsideclick);
	
	var _shipComponentsHighlightClick = __webpack_require__(8);
	
	var _shipComponentsHighlightClick2 = _interopRequireDefault(_shipComponentsHighlightClick);
	
	var _dispatch = __webpack_require__(5);
	
	var _dispatch2 = _interopRequireDefault(_dispatch);
	
	var _reactAddonsCssTransitionGroup = __webpack_require__(6);
	
	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);
	
	var _select = __webpack_require__(1);
	
	var _select2 = _interopRequireDefault(_select);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Lets animate it
	
	
	var Select = function (_React$Component) {
	  _inherits(Select, _React$Component);
	
	  function Select(props) {
	    _classCallCheck(this, Select);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Select).call(this, props));
	
	    _this.state = {
	      active: false
	    };
	    return _this;
	  }
	
	  _createClass(Select, [{
	    key: 'getDefaultValue',
	    value: function getDefaultValue() {
	      var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];
	
	      if (_typeof(props.defaultValue) === 'object') {
	        return props.defaultValue;
	      } else {
	        return {
	          value: props.defaultValue,
	          label: props.defaultValue
	        };
	      }
	    }
	
	    /**
	     * Update the state and parent data
	     *
	     * @param     {Event}    event
	     */
	
	  }, {
	    key: 'handleChange',
	    value: function handleChange(event) {
	      this.updateState(event.target.value);
	    }
	
	    /**
	     * Handle clicking a item in the list
	     *
	     * @param     {String}    value
	     */
	
	  }, {
	    key: 'handleClickItem',
	    value: function handleClickItem(value) {
	      this.updateState(value);
	    }
	
	    /**
	     * Update the state and call our parent onChange event
	     *
	     * @param     {String}    value
	     */
	
	  }, {
	    key: 'updateState',
	    value: function updateState(value) {
	      var _this2 = this;
	
	      this.setState({
	        active: false
	      }, function () {
	        if (_this2.props.disabled === true) {
	          return;
	        }
	        var el = _reactDom2.default.findDOMNode(_this2.refs.input);
	        el.value = value;
	        (0, _dispatch2.default)(el, _this2.props.onChange);
	      });
	    }
	
	    /**
	     * Toggle open
	     */
	
	  }, {
	    key: 'toggleActive',
	    value: function toggleActive() {
	      this.setState({
	        active: !this.state.active
	      });
	    }
	  }, {
	    key: 'handleOutsideClick',
	    value: function handleOutsideClick() {
	      this.setState({
	        active: false
	      });
	    }
	  }, {
	    key: 'getOptions',
	    value: function getOptions() {
	      var opts = this.props.options;
	
	      // Ensure we always deal with an array of objects
	      if (typeof this.props.options[0] === 'string') {
	        opts = this.props.options.map(function (opt) {
	          return {
	            label: opt,
	            value: opt
	          };
	        });
	      }
	
	      return opts;
	    }
	
	    /**
	     * Render
	     *
	     * @return    {React}
	     */
	
	  }, {
	    key: 'render',
	    value: function render() {
	      var _classNames,
	          _this3 = this;
	
	      // Ensure it's an array of objects
	      var opts = this.getOptions();
	
	      // Ensure it's an object
	      var defaultValue = this.getDefaultValue();
	
	      // Check to see if the defaultValue is in the option list
	      var value = opts.find(function (opt) {
	        return opt.value === defaultValue.value;
	      });
	
	      if (!value) {
	        value = {
	          label: '',
	          value: ''
	        };
	      }
	
	      // css class names
	      var containerClasses = (0, _classnames2.default)('select', _select2.default.container, (_classNames = {}, _defineProperty(_classNames, _select2.default.disabled, this.props.disabled), _defineProperty(_classNames, _select2.default.active, this.state.active), _classNames));
	
	      return _react2.default.createElement(
	        _shipComponentsOutsideclick2.default,
	        {
	          className: containerClasses,
	          onClick: this.handleOutsideClick.bind(this) },
	        this.props.label.length > 0 ? _react2.default.createElement(
	          'label',
	          { className: _select2.default.label },
	          this.props.label
	        ) : null,
	        _react2.default.createElement(
	          _shipComponentsHighlightClick2.default,
	          {
	            className: 'select--control ' + _select2.default.control,
	            onClick: this.toggleActive.bind(this) },
	          _react2.default.createElement(
	            'div',
	            { className: 'select--value ' + _select2.default.value },
	            value.render || value.label
	          ),
	          this.props.icon !== null ? this.props.icon : _react2.default.createElement('div', { className: 'select--value-icon ' + this.props.iconClass + ' ' + _select2.default.icon })
	        ),
	        _react2.default.createElement(
	          _reactAddonsCssTransitionGroup2.default,
	          {
	            className: (0, _classnames2.default)('select--list', _select2.default.list),
	            transitionName: _select2.default,
	            transitionEnterTimeout: this.props.transitionEnterTimeout,
	            transitionLeaveTimeout: this.props.transitionLeaveTimeout,
	            component: 'ul' },
	          (this.state.active ? opts : []).map(function (option) {
	            return _react2.default.createElement(_SelectOption2.default, _extends({}, option, {
	              tag: 'li',
	              selected: option.value === defaultValue.value,
	              onClick: _this3.handleClickItem.bind(_this3, option.value),
	              key: option.key || option.value }));
	          })
	        ),
	        _react2.default.createElement(
	          'select',
	          {
	            ref: 'input',
	            readOnly: true,
	            value: this.props.defaultValue,
	            style: { display: 'none' } },
	          opts.map(function (option) {
	            return _react2.default.createElement(_SelectOption2.default, _extends({}, option, {
	              selected: option.value === defaultValue.value,
	              key: option.key || option.value }));
	          })
	        )
	      );
	    }
	  }]);
	
	  return Select;
	}(_react2.default.Component);
	
	exports.default = Select;
	
	
	Select.defaultProps = {
	  iconClass: 'icon-keyboard_arrow_down',
	  icon: null,
	  label: '',
	  disabled: false,
	  defaultValue: '',
	  transitionEnterTimeout: 1,
	  transitionLeaveTimeout: 1,
	  options: [],
	  onChange: function onChange() {}
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"container":"select--container","icon":"select--icon","active":"select--active","label":"select--label","control":"select--control","value":"select--value","list":"select--list","item":"select--item","selected":"select--selected","disabled":"select--disabled","enter":"select--enter","enterActive":"select--enterActive","leave":"select--leave","leaveActive":"select--leaveActive","appear":"select--appear","appearActive":"select--appearActive"};

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/** ****************************************************************************
	 * Selector Item
	 *
	 * @author       Isaac Suttell <isaac_suttell@playstation.sony.com>
	 * @file         Render a Option for a dropwn down list
	 * 
	 ******************************************************************************/
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _select = __webpack_require__(1);
	
	var _select2 = _interopRequireDefault(_select);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SelectOption = function (_React$Component) {
	  _inherits(SelectOption, _React$Component);
	
	  function SelectOption() {
	    _classCallCheck(this, SelectOption);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(SelectOption).apply(this, arguments));
	  }
	
	  _createClass(SelectOption, [{
	    key: 'getContents',
	
	
	    /**
	     * If we have a render option use that if we're not an <option>. Options only
	     * support strings and numbers
	     * @return {React}
	     */
	    value: function getContents() {
	      if (this.props.tag !== 'option' && this.props.render) {
	        return this.props.render;
	      } else {
	        return this.props.label || this.props.value;
	      }
	    }
	
	    /**
	     * Render
	     *
	     * @return    {React}
	     */
	
	  }, {
	    key: 'render',
	    value: function render() {
	      var classes = (0, _classnames2.default)(_select2.default.item, _defineProperty({}, _select2.default.selected, this.props.selected));
	      return _react2.default.createElement(
	        this.props.tag,
	        {
	          className: classes,
	          value: this.props.value,
	          onClick: this.props.onClick },
	        this.getContents()
	      );
	    }
	  }]);
	
	  return SelectOption;
	}(_react2.default.Component);
	
	exports.default = SelectOption;
	
	
	SelectOption.defaultProps = {
	  tag: 'option',
	  selected: false,
	  onClick: function onClick() {}
	};
	
	SelectOption.propTypes = {
	  className: _react2.default.PropTypes.string,
	  label: _react2.default.PropTypes.string,
	  value: _react2.default.PropTypes.string.isRequired,
	  tag: _react2.default.PropTypes.string,
	  onClick: _react2.default.PropTypes.func,
	  selected: _react2.default.PropTypes.bool
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * Create and send a change event to the parent
	 */
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = dispatch;
	function dispatch(el, fn) {
	  // Generate a change event to let the parent know
	  var customEvent = new window.MouseEvent('change');
	
	  // Calls parent change function with the custom event and the right target
	  var handler = function handler(ev) {
	    // Clean up
	    el.removeEventListener('change', handler);
	
	    if (typeof fn === 'function') {
	      // Call
	      fn.call(ev, ev);
	    }
	  };
	
	  // Attach
	  el.addEventListener('change', handler);
	
	  // Trigger
	  el.dispatchEvent(customEvent);
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=Select.js.map