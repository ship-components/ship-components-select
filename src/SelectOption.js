/** ****************************************************************************
 * Selector Item
 *
 * @author       Isaac Suttell <isaac_suttell@playstation.sony.com>
 * @file         Render a Option for a dropwn down list
 * @flow
 ******************************************************************************/
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import cssClassNames from './select.css';

export default class SelectOption extends React.Component {

  /**
   * Performance Check
   */
  shouldComponentUpdate(nextProps) {
    if (nextProps.tag !== 'option' && nextProps.render) {
      // Rendering a another component so we just skip
      return true;
    }
    const keys = ['selected', 'label', 'value'];
    return keys.some(key => this.props[key] !== nextProps[key]);
  }

  /**
   * If we have a render option use that if we're not an <option>. Options only
   * support strings and numbers
   * @return {React}
   */
  getContents(props = this.props) {
    if (props.tag !== 'option' && props.render) {
      return props.render;
    } else {
      return props.label || props.value;
    }
  }

  /**
   * Attempt to make this option visible. Called from parent
   */
  scrollIntoView() {
    if (typeof this.refs.option.scrollIntoView === 'function') {
      this.refs.option.scrollIntoView();
    }
  }

  /**
   * Render
   *
   * @return    {React}
   */
  render() {
    var classes = classNames(
      cssClassNames.item,
      {
        [cssClassNames.selected]: this.props.selected
      }
    );
    return (
      <this.props.tag
        ref='option'
        className={classes}
        value={this.props.value}
        onClick={this.props.onClick}
      >
        {this.getContents()}
      </this.props.tag>
    );
  }
}

SelectOption.defaultProps = {
  className: '',
  label: '',
  tag: 'option',
  selected: false,
  onClick: function onClick() {}
};

SelectOption.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  tag: PropTypes.string,
  onClick: PropTypes.func,
  selected: PropTypes.bool
};
