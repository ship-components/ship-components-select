/** ****************************************************************************
 * SelectOption
 *
 * @author       Isaac Suttell <isaac_suttell@playstation.sony.com>
 * @file         Render an option for a dropdown list
 * @flow
 ******************************************************************************/
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import cssClassNames from './select.css';

/**
 * Render option content
 * @return {React}
 */
function getContents(props) {
  return props.render || props.label || props.value;
}

export default class SelectOption extends React.Component {

  shouldComponentUpdate(nextProps) {
    if (nextProps.render) {
      // Rendering a another component so we just skip
      return true;
    }
    const keys = ['selected', 'label', 'value'];
    return keys.some(key => this.props[key] !== nextProps[key]);
  }

  render() {
    var classes = classNames(
      cssClassNames.item,
      {
        [cssClassNames.selected]: this.props.selected
      }
    );
    return (
      <li
        className={classes}
        value={this.props.value}
        onClick={this.props.onClick}
      >
        {getContents(this.props)}
      </li>
    );
  }
}

SelectOption.defaultProps = {
  className: '',
  label: '',
  selected: false,
  onClick: void 0
};

SelectOption.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  render: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ]),
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  selected: PropTypes.bool
};
