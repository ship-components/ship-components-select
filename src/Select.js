/** ****************************************************************************
 * Select
 *
 * @author       Isaac Suttell <isaac_suttell@playstation.sony.com>
 * @file         Render a <select>
 * @flow
 ******************************************************************************/
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import SelectOption from './SelectOption';
import OutsideClick from 'ship-components-outsideclick';
import HighlightClick from 'ship-components-highlight-click';

import dispatch from './dispatch';

// Lets animate it
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import cssClassNames from './select.css';

export default class Select extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    };
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
      let el = ReactDOM.findDOMNode(this.refs.input);
      el.value = value;
      dispatch(el, this.props.onChange);
    });
  }

  /**
   * Toggle open
   */
  toggleActive() {
    this.setState({
      active: !this.state.active
    });
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
          onClick={this.toggleActive.bind(this)}>
            <div className={'select--value ' + cssClassNames.value}>{currentValue.render || currentValue.label}</div>
            {this.props.icon !== null ?
              React.cloneElement(this.props.icon, {
                className: this.props.icon.props.className + ' select--value-icon ' + cssClassNames.icon
              })
            :
              <div className={'select--value-icon ' + this.props.iconClass + ' ' + cssClassNames.icon} />
            }
        </HighlightClick>
        <ReactCSSTransitionGroup
          className={classNames('select--list', cssClassNames.list)}
          transitionName={cssClassNames}
          transitionEnterTimeout={this.props.transitionEnterTimeout}
          transitionLeaveTimeout={this.props.transitionLeaveTimeout}
          component='ul'>
            {(this.state.active ? opts : []).map((option) => {
              return (
                <SelectOption
                 {...option}
                 tag='li'
                 selected={option.value === currentValue.value}
                 onClick={this.handleClickItem.bind(this, option.value)}
                 key={option.key || option.value} />
              )
            })}
        </ReactCSSTransitionGroup>
        <select
          ref='input'
          readOnly
          value={this.props.defaultValue}
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
  defaultValue: '',
  transitionEnterTimeout: 1,
  transitionLeaveTimeout: 1,
  options: [],
  onChange: function() {}
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
  defaultValue: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object
  ]),
  transitionEnterTimeout: React.PropTypes.number,
  transitionLeaveTimeout: React.PropTypes.number,
  options: React.PropTypes.array.isRequired,
  onChange: React.PropTypes.func
}
