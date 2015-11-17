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
import lodash from 'lodash';

import SelectOption from './SelectOption';
import OutsideClick from 'react-outsideclick';
import HighlightClick from 'react-highlight-click';

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

  getDefaultValue(props = this.props) {
    if(lodash.isObject(props.defaultValue)) {
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
    if (lodash.isString(this.props.options[0])) {
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

    // Ensure it's an object
    const defaultValue = this.getDefaultValue();

    // Check to see if the defaultValue is in the option list
    let value = lodash.find(opts, (opt) => opt.value === defaultValue.value);

    if (!value) {
      value = {
        label: '',
        value: ''
      }
    }

    // css class names
    const containerClasses = classNames(
      'select',
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
            <div className={'select--value ' + cssClassNames.value}>{value.render || value.label}</div>
            <div className={'select--value-icon ' + this.props.iconPrefix + this.props.icon + ' ' + cssClassNames.icon} />
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
                 selected={option.value === defaultValue.value}
                 onClick={this.handleClickItem.bind(this, option.value)}
                 key={option.key || option.value} />
              )
            })}
        </ReactCSSTransitionGroup>
        <select
          ref='input'
          readOnly
          value={this.props.defaultValue}
          style={{'display' : 'none'}}>
         {opts.map((option) => {
           return (
             <SelectOption
               {...option}
               selected={option.value === defaultValue.value}
               key={option.key || option.value} />
           )
         })}
       </select>
      </OutsideClick>
    );
  }
}

Select.defaultProps = {
  icon: 'keyboard_arrow_down',
  iconPrefix: 'icon-',
  label: '',
  disabled: false,
  defaultValue: '',
  transitionEnterTimeout: 1,
  transitionLeaveTimeout: 1,
  options: [],
  onChange: function() {}
};
