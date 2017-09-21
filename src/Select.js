/** ****************************************************************************
 * Select
 *
 * @author       Isaac Suttell <isaac_suttell@playstation.sony.com>
 * @file         Render a <select>
 * @flow
 ******************************************************************************/
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import SelectOption from './SelectOption';
import OutsideClick from 'ship-components-outsideclick';
import HighlightClick from 'ship-components-highlight-click';

import dispatch from './lib/dispatch';
import scrollIntoView from './lib/scrollIntoView';

import cssClassNames from './select.css';

export default class Select extends React.Component {
  /**
   * Setup
   */
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      fixedDropdownStyle: {
        top: 'inherit',
        width: 'inherit',
        position: 'fixed'
      }
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleToggleActive = this.handleToggleActive.bind(this);
  }

  componentDidMount() {
    if (typeof this.props.scrollParentClass === 'string') {
      this.registerScrollParent(this.props.scrollParentClass);
      window.addEventListener('resize', this.handleClose);
    }
  }

  /**
   * Performance Check
   */
  shouldComponentUpdate(nextProps, nextState) {
    const props = ['value', 'label', 'disabled'];
    return props.some(key => this.props[key] !== nextProps[key]) ||
      this.state.active !== nextState.active ||
      this.fixedDropdownStyleChanged(nextState.fixedDropdownStyle) ||
      this.props.options.length !== nextProps.options.length ||
      this.props.options.some((opt, i) => {
        if (typeof opt === 'object') {
          return !!opt.render || opt.value !== nextProps.options[i].value;
        } else {
          return opt !== nextProps.options[i];
        }
      });
  }

  /**
   * Try to keep the selected comp in view
   */
  componentDidUpdate(prevProps, prevState) {
    if (this.props.options.length > 5 && this.refs.selected && prevState.active === false && this.state.active === true) {
      scrollIntoView(ReactDOM.findDOMNode(this.refs.selected));
    }

    // when showing drop down, update the positioning styles
    if (this.props.scrollParentClass && !prevState.active && this.state.active) {
      // Disables the eslint warning (no-did-update-set-state)
      // Since we have an IF clause to prevents react from infinite loop
      // More info: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
      this.setState(this.getDropdownStyle()); // eslint-disable-line
    }
  }

  componentWillUnmount() {
    if (this.scrollParent) {
      this.scrollParent.removeEventListener('scroll', this.handleClose);
      window.removeEventListener('resize', this.handleClose);
    }
  }

  registerScrollParent(parentClass) {
    let ancestor = ReactDOM.findDOMNode(this.refs.list).parentNode;
    while (ancestor && ancestor !== document) {
      if (ancestor.classList.contains(parentClass)) {
        ancestor.addEventListener('scroll', this.handleClose);
        this.scrollParent = ancestor;
        return;
      }
      ancestor = ancestor.parentNode;
    }
  }

  getDropdownStyle() {
    if (!this.scrollParent) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn('<Select /> must have scrollParent to use getDropdownStyle()');
      }
      return;
    }
    // <select> component
    let parent = ReactDOM.findDOMNode(this.refs.parent);
    // Dropdown <ul>
    let dropdownList = this.refs.list;
    // Browser window height
    let windowHeight = window.innerHeight;

    let source = parent;
    let offsetTop = 0;
    let scrollParentTop = this.scrollParent.scrollTop;

    while (source) {
      offsetTop += source.offsetTop;
      source = source.offsetParent;
    }
    // re-adjust the offset value if dropdown options are not visible inside the window
    if (dropdownList.clientHeight + offsetTop > windowHeight) {
      let offsetFromBottom = (dropdownList.clientHeight + offsetTop) - windowHeight;
      offsetTop -= offsetFromBottom;
    }

    return {
      fixedDropdownStyle: {
        width: `${parent.offsetWidth}px`,
        position: 'fixed',
        top: `${(offsetTop - scrollParentTop)}px`
      }
    };
  }

  fixedDropdownStyleChanged(nextStyle) {
    for (let key in this.state.fixedDropdownStyle) {
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
  handleChange(event) {
    this.updateState(event.target.value);
  }

  /**
   * Handle clicking a item in the list
   *
   * @param     {String}    value
   */
  handleClickItem(value) {
    this.updateState(value);
  }

  /**
   * Update the state and call our parent onChange event
   *
   * @param     {String}    value
   */
  updateState(value) {
    this.setState({
      active: false
    }, () => {
      if (this.props.disabled === true) {
        return;
      }
      this.refs.input.value = value;
      dispatch(this.refs.input, this.props.onChange);
    });
  }

  /**
   * Toggle open
   */
  handleToggleActive() {
    if (!this.props.disabled) {
      this.setState({active: !this.state.active});
    }
  }

  handleClose() {
    this.setState({
      active: false
    });
  }

  getOptions() {
    let opts = this.props.options;

    // Ensure we always deal with an array of objects
    if (typeof this.props.options[0] === 'string') {
      opts = this.props.options.map(opt => ({
        label: opt,
        value: opt
      }));
    }

    return opts;
  }

  getCurrentValue(opts) {
    return opts.find((option) => {
      if (typeof this.props.value === 'object') {
        return option.value === this.props.value.value;
      } else {
        return option.value === this.props.value;
      }
    });
  }

  /**
   * Render
   *
   * @return    {React}
   */
  render() {
    // Ensure it's an array of objects
    const opts = this.getOptions();

    // Grab the current value from the list of options
    const currentValue = this.getCurrentValue(opts) || {};

    // css class names
    const containerClasses = classNames(
      'select',
      this.props.className,
      cssClassNames.container,
      {
        [cssClassNames.disabled]: this.props.disabled,
        [cssClassNames.active]: this.state.active
      }
    );

    const listStyle = this.props.scrollParentClass && this.state.active ? this.state.fixedDropdownStyle : {};

    return (
      <OutsideClick
        ref='parent'
        className={containerClasses}
        onClick={this.handleClose}
      >
        {this.props.label.length > 0 ?
          <label className={cssClassNames.label}>
            {this.props.label}
          </label>
          : null}
        <HighlightClick
          className={'select--control ' + cssClassNames.control}
          onClick={this.handleToggleActive}
          disabled={this.props.disabled}
        >
          <div className={'select--value ' + cssClassNames.value}>{currentValue.render || currentValue.label}</div>
          {this.props.icon !== null ?
            React.cloneElement(this.props.icon, {
              className: this.props.icon.props.className + ' select--value-icon ' + cssClassNames.icon
            })
            :
            <div className={'select--value-icon ' + this.props.iconClass + ' ' + cssClassNames.icon} />
          }
        </HighlightClick>
        <ul
          ref='list'
          className={classNames('select--list', cssClassNames.list)}
          style={listStyle}
        >
          {(this.state.active ? opts : []).map(option => (
            <SelectOption
              {...option}
              tag='li'
              ref={option.value === currentValue.value ? 'selected' : void 0}
              selected={option.value === currentValue.value}
              onClick={this.handleClickItem.bind(this, option.value)} //eslint-disable-line
              key={option.key || option.value}
            />
          ))}
        </ul>
        <select
          ref='input'
          readOnly
          value={this.props.value}
          style={{display : 'none'}}
        >
          {opts.map(option => (
            <SelectOption
              {...option}
              selected={option.value === currentValue.value}
              key={option.key || option.value}
            />
          ))}
        </select>
      </OutsideClick>
    );
  }
}

/**
 * Defaults
 * @type {Object}
 */
Select.defaultProps = {
  iconClass: 'icon-keyboard_arrow_down',
  className: '',
  icon: null,
  label: '',
  disabled: false,
  value: '',
  options: [],
  scrollParentClass: '',
  onChange: void 0
};

/**
 * Type checking
 * @type {Object}
 */
Select.propTypes = {
  className: PropTypes.string,
  iconClass: PropTypes.string,
  icon: PropTypes.element,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  scrollParentClass: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func
};
