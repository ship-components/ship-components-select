/** ****************************************************************************
 * Selector Item
 *
 * @author       Isaac Suttell <isaac_suttell@playstation.sony.com>
 * @file         Render a Option for a dropwn down list
 * @flow
 ******************************************************************************/
'use strict';

import React from 'react';
import classNames from 'classnames';

import cssClassNames from './select.css';

export default class SelectOption extends React.Component {

  /**
   * If we have a render option use that if we're not an <option>. Options only
   * support strings and numbers
   * @return {React}
   */
  getContents() {
    if (this.props.tag !== 'option' && this.props.render) {
      return this.props.render;
    } else {
      return this.props.label || this.props.value;
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
        onClick={this.props.onClick}>
          {this.getContents()}
      </this.props.tag>
    );
  }
}

SelectOption.defaultProps = {
  tag: 'option',
  selected: false,
  onClick: function() {}
};

SelectOption.propTypes = {
  className: React.PropTypes.string,
  label: React.PropTypes.string,
  value: React.PropTypes.string.isRequired,
  tag: React.PropTypes.string,
  onClick: React.PropTypes.func,
  selected: React.PropTypes.bool
};
