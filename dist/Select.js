(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("classnames"), require("react-dom"), require("ship-components-highlight-click"), require("ship-components-outsideclick"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "classnames", "react-dom", "ship-components-highlight-click", "ship-components-outsideclick"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("React"), require("classnames"), require("react-dom"), require("ship-components-highlight-click"), require("ship-components-outsideclick")) : factory(root["React"], root["classnames"], root["react-dom"], root["ship-components-highlight-click"], root["ship-components-outsideclick"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__) {
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

	/* WEBPACK VAR INJECTION */(function(process) {/** ****************************************************************************
	 * Select
	 *
	 * @author       Isaac Suttell <isaac_suttell@playstation.sony.com>
	 * @file         Render a <select>
	 * 
	 ******************************************************************************/
	'use strict';
	
	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
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
	
	var _select = __webpack_require__(1);
	
	var _select2 = _interopRequireDefault(_select);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var Select = function (_React$Component) {
	  _inherits(Select, _React$Component);
	
	  /**
	   * Setup
	   */
	  function Select(props) {
	    _classCallCheck(this, Select);
	
	    var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));
	
	    _this.state = {
	      active: false,
	      fixedDropdownStyle: {
	        top: 'inherit',
	        width: 'inherit',
	        position: 'fixed'
	      }
	    };
	
	    _this.handleClose = _this.handleClose.bind(_this);
	    return _this;
	  }
	
	  _createClass(Select, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.scrollParentClass) {
	        this.registerScrollParent(this.props.scrollParentClass);
	        window.addEventListener('resize', this.handleClose);
	      }
	    }
	
	    /**
	     * Performance Check
	     */
	
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      var _this2 = this;
	
	      var props = ['value', 'label', 'disabled'];
	      return props.some(function (key) {
	        return _this2.props[key] !== nextProps[key];
	      }) || this.state.active !== nextState.active || this.fixedDropdownStyleChanged(nextState.fixedDropdownStyle) || this.props.options.length !== nextProps.options.length || this.props.options.some(function (opt, i) {
	        if ((typeof opt === 'undefined' ? 'undefined' : _typeof(opt)) === 'object') {
	          return !!opt.render || opt.value !== nextProps.options[i].value;
	        } else {
	          return opt !== nextProps.options[i];
	        }
	      });
	    }
	
	    /**
	     * Try to keep the selected comp in view
	     */
	
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps, prevState) {
	      if (this.props.options.length > 5 && this.refs.selected && prevState.active === false && this.state.active === true) {
	        this.refs.selected.scrollIntoView();
	      }
	
	      // when showing drop down, update the positioning styles
	      if (this.props.scrollParentClass && !prevState.active && this.state.active) {
	        // Disables the eslint warning (no-did-update-set-state)
	        // Since we have an IF clause to prevents react from infinite loop
	        // More info: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
	        this.setState(this.getDropdownStyle()); // eslint-disable-line
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this.scrollParent) {
	        this.scrollParent.removeEventListener('scroll', this.handleClose);
	        window.removeEventListener('resize', this.handleClose);
	      }
	    }
	  }, {
	    key: 'registerScrollParent',
	    value: function registerScrollParent(parentClass) {
	      var ancestor = _reactDom2.default.findDOMNode(this.refs.list).parentNode;
	      while (ancestor && ancestor !== document) {
	        if (ancestor.classList.contains(parentClass)) {
	          ancestor.addEventListener('scroll', this.handleClose);
	          this.scrollParent = ancestor;
	          return;
	        }
	        ancestor = ancestor.parentNode;
	      }
	    }
	  }, {
	    key: 'getDropdownStyle',
	    value: function getDropdownStyle() {
	      if (!this.scrollParent) {
	        if (process.env.NODE_ENV !== 'production') {
	          console.warn('<Select /> must have scrollParent to use getDropdownStyle()');
	        }
	        return;
	      }
	      var parent = _reactDom2.default.findDOMNode(this.refs.parent);
	      var source = parent;
	      var offsetTop = 0;
	      var scrollParentTop = this.scrollParent.scrollTop;
	      while (source) {
	        offsetTop += source.offsetTop;
	        source = source.offsetParent;
	      }
	      return {
	        fixedDropdownStyle: {
	          width: parent.offsetWidth + 'px',
	          position: 'fixed',
	          top: offsetTop - scrollParentTop + parent.offsetHeight + 'px'
	        }
	      };
	    }
	  }, {
	    key: 'fixedDropdownStyleChanged',
	    value: function fixedDropdownStyleChanged(nextStyle) {
	      for (var key in this.state.fixedDropdownStyle) {
	        if (this.state.fixedDropdownStyle.hasOwnProperty(key)) {
	          if (this.state.fixedDropdownStyle[key] !== nextStyle[key]) {
	            return true;
	          }
	        }
	      }
	      return false;
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
	      var _this3 = this;
	
	      this.setState({
	        active: false
	      }, function () {
	        if (_this3.props.disabled === true) {
	          return;
	        }
	        _this3.refs.input.value = value;
	        (0, _dispatch2.default)(_this3.refs.input, _this3.props.onChange);
	      });
	    }
	
	    /**
	     * Toggle open
	     */
	
	  }, {
	    key: 'toggleActive',
	    value: function toggleActive() {
	      if (!this.props.disabled) {
	        this.setState({ active: !this.state.active });
	      }
	    }
	  }, {
	    key: 'handleClose',
	    value: function handleClose() {
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
	      var _this4 = this,
	          _classNames;
	
	      // Ensure it's an array of objects
	      var opts = this.getOptions();
	
	      // Grab the current value from the list of options
	      var currentValue = opts.find(function (option) {
	        if (_typeof(_this4.props.value) === 'object') {
	          return option.value === _this4.props.value.value;
	        } else {
	          return option.value === _this4.props.value;
	        }
	      });
	
	      if (!currentValue) {
	        currentValue = {
	          label: '',
	          value: ''
	        };
	      }
	
	      // css class names
	      var containerClasses = (0, _classnames2.default)('select', this.props.className, _select2.default.container, (_classNames = {}, _defineProperty(_classNames, _select2.default.disabled, this.props.disabled), _defineProperty(_classNames, _select2.default.active, this.state.active), _classNames));
	
	      var listStyle = this.props.scrollParentClass && this.state.active ? this.state.fixedDropdownStyle : {};
	
	      return _react2.default.createElement(_shipComponentsOutsideclick2.default, {
	        ref: 'parent',
	        className: containerClasses,
	        onClick: this.handleClose.bind(this) }, this.props.label.length > 0 ? _react2.default.createElement('label', { className: _select2.default.label }, this.props.label) : null, _react2.default.createElement(_shipComponentsHighlightClick2.default, {
	        className: 'select--control ' + _select2.default.control,
	        onClick: this.toggleActive.bind(this),
	        disabled: this.props.disabled
	      }, _react2.default.createElement('div', { className: 'select--value ' + _select2.default.value }, currentValue.render || currentValue.label), this.props.icon !== null ? _react2.default.cloneElement(this.props.icon, {
	        className: this.props.icon.props.className + ' select--value-icon ' + _select2.default.icon
	      }) : _react2.default.createElement('div', { className: 'select--value-icon ' + this.props.iconClass + ' ' + _select2.default.icon })), _react2.default.createElement('ul', {
	        ref: 'list',
	        className: (0, _classnames2.default)('select--list', _select2.default.list),
	        style: listStyle }, (this.state.active ? opts : []).map(function (option) {
	        return _react2.default.createElement(_SelectOption2.default, _extends({}, option, {
	          tag: 'li',
	          ref: option.value === currentValue.value ? 'selected' : void 0,
	          selected: option.value === currentValue.value,
	          onClick: _this4.handleClickItem.bind(_this4, option.value),
	          key: option.key || option.value
	        }));
	      })), _react2.default.createElement('select', {
	        ref: 'input',
	        readOnly: true,
	        value: this.props.value,
	        style: { display: 'none' } }, opts.map(function (option) {
	        return _react2.default.createElement(_SelectOption2.default, _extends({}, option, {
	          selected: option.value === currentValue.value,
	          key: option.key || option.value }));
	      })));
	    }
	  }]);
	
	  return Select;
	}(_react2.default.Component);
	
	/**
	 * Defaults
	 * @type {Object}
	 */
	
	exports.default = Select;
	Select.defaultProps = {
	  iconClass: 'icon-keyboard_arrow_down',
	  icon: null,
	  label: '',
	  disabled: false,
	  value: '',
	  options: [],
	  scrollParentClass: false
	};
	
	/**
	 * Type checking
	 * @type {Object}
	 */
	Select.propTypes = {
	  className: _react2.default.PropTypes.string,
	  iconClass: _react2.default.PropTypes.string,
	  icon: _react2.default.PropTypes.element,
	  label: _react2.default.PropTypes.string,
	  disabled: _react2.default.PropTypes.bool,
	  value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.object]),
	  options: _react2.default.PropTypes.array.isRequired,
	  onChange: _react2.default.PropTypes.func
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"container":"select--container","icon":"select--icon","active":"select--active","label":"select--label","control":"select--control","value":"select--value","list":"select--list","item":"select--item","selected":"select--selected","disabled":"select--disabled"};

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
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _select = __webpack_require__(1);
	
	var _select2 = _interopRequireDefault(_select);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var SelectOption = function (_React$Component) {
	  _inherits(SelectOption, _React$Component);
	
	  function SelectOption() {
	    _classCallCheck(this, SelectOption);
	
	    return _possibleConstructorReturn(this, (SelectOption.__proto__ || Object.getPrototypeOf(SelectOption)).apply(this, arguments));
	  }
	
	  _createClass(SelectOption, [{
	    key: 'shouldComponentUpdate',
	
	    /**
	     * Performance Check
	     */
	    value: function shouldComponentUpdate(nextProps) {
	      var _this2 = this;
	
	      if (nextProps.tag !== 'option' && nextProps.render) {
	        // Rendering a another component so we just skip
	        return true;
	      }
	      var keys = ['selected', 'label', 'value'];
	      return keys.some(function (key) {
	        return _this2.props[key] !== nextProps[key];
	      });
	    }
	
	    /**
	     * If we have a render option use that if we're not an <option>. Options only
	     * support strings and numbers
	     * @return {React}
	     */
	
	  }, {
	    key: 'getContents',
	    value: function getContents() {
	      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
	
	      if (props.tag !== 'option' && props.render) {
	        return props.render;
	      } else {
	        return props.label || props.value;
	      }
	    }
	
	    /**
	     * Attempt to make this option visible. Called from parent
	     */
	
	  }, {
	    key: 'scrollIntoView',
	    value: function scrollIntoView() {
	      if (typeof this.refs.option.scrollIntoView === 'function') {
	        this.refs.option.scrollIntoView();
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
	      return _react2.default.createElement(this.props.tag, {
	        ref: 'option',
	        className: classes,
	        value: this.props.value,
	        onClick: this.props.onClick }, this.getContents());
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
	  var customEvent = null;
	
	  // Internet Explorer 6-11
	  if ( /*@cc_on!@*/false || !!document.documentMode) {
	    customEvent = document.createEvent('MouseEvent');
	    customEvent.initMouseEvent('change', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
	  } else {
	    // Other browsers
	    customEvent = new window.MouseEvent('change');
	  }
	
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

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


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