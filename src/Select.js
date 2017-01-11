/** ****************************************************************************
 * Select
 *
 * @author       Isaac Suttell <isaac_suttell@playstation.sony.com>
 * @file         Render a <select>
 * @flow
 ******************************************************************************/
'use strict';

import React from 'react';
import classNames from 'classnames';

import SelectOption from './SelectOption';
import OutsideClick from 'ship-components-outsideclick';
import HighlightClick from 'ship-components-highlight-click';

import dispatch from './dispatch';

import cssClassNames from './select.css';

export default class Select extends React.Component {
  /**
   * Setup
   */
  constructor(props) {
    super(props);

    this.state = {
      active: false
    };
  }

  /**
   * Performance Check
   */
  shouldComponentUpdate(nextProps, nextState) {
    const props = ['value', 'label', 'disabled'];
    return props.some(key => this.props[key] !== nextProps[key]) ||
      this.state.active !== nextState.active ||
      this.props.options.length !== nextProps.options.length ||
      this.props.options.some((opt, i) => {
        if (typeof opt === 'object') {
          return opt.value !== nextProps.options[i].value;
        } else {
          return opt !== nextProps.options[i];
        }
      })
  }

  /**
   * Try to keep the selected comp in view
   */
  componentDidUpdate(prevProps, prevState) {
    if (this.props.options.length > 5 && this.refs.selected && prevState.active === false && this.state.active === true) {
      this.refs.selected.scrollIntoView();
    }
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
  toggleActive() {
    if (!this.props.disabled) {
      this.setState({
        active: !this.state.active
      });
    }
  }

  handleOutsideClick() {
    this.setState({
      active: false
    });
  }

  getOptions() {
    let opts = this.props.options;

    // Ensure we always deal with an array of objects
    if (typeof this.props.options[0] === 'string') {
      opts = this.props.options.map((opt)=>{
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
  render() {
    // Ensure it's an array of objects
    const opts = this.getOptions();

    // Grab the current value from the list of options
    let currentValue = opts.find(option => {
      if (typeof this.props.value === 'object') {
        return option.value === this.props.value.value;
      } else {
        return option.value === this.props.value
      }
    });

    if (!currentValue) {
      currentValue = {
        label: '',
        value: ''
      }
    }

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

    return (
      <OutsideClick
        className={containerClasses}
        onClick={this.handleOutsideClick.bind(this)} >
        {this.props.label.length > 0 ?
          <label className={cssClassNames.label}>
            {this.props.label}
          </label>
        : null}
        <HighlightClick
          className={'select--control ' + cssClassNames.control}
          onClick={this.toggleActive.bind(this)}
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
        <ul className={classNames('select--list', cssClassNames.list)} >
          {(this.state.active ? opts : []).map((option) => {
            return (
              <SelectOption
                {...option}
                tag='li'
                ref={option.value === currentValue.value ? 'selected' : void 0}
                selected={option.value === currentValue.value}
                onClick={this.handleClickItem.bind(this, option.value)}
                key={option.key || option.value}
              />
            )
          })}
        </ul>
        <select
          ref='input'
          readOnly
          value={this.props.value}
          style={{display : 'none'}}>
         {opts.map((option) => {
           return (
             <SelectOption
               {...option}
               selected={option.value === currentValue.value}
               key={option.key || option.value} />
           )
         })}
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
  icon: null,
  label: '',
  disabled: false,
  value: '',
  options: []
};

/**
 * Type checking
 * @type {Object}
 */
Select.propTypes = {
  className: React.PropTypes.string,
  iconClass: React.PropTypes.string,
  icon: React.PropTypes.element,
  label: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  value: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object
  ]),
  options: React.PropTypes.array.isRequired,
  onChange: React.PropTypes.func
}
