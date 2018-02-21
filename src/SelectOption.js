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
 * If we have a render option use that if we're not an <option>. Options only
 * support strings and numbers
 * @return {React}
 */
function getContents(props) {
  if (props.tag !== 'option' && props.render) {
    return props.render;
  } else {
    return props.label || props.value;
  }
}

export default class SelectOption extends React.Component {

  shouldComponentUpdate(nextProps) {
    if (nextProps.tag !== 'option' && nextProps.render) { // eslint-disable-line react/prop-types
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
      <this.props.tag
        className={classes}
        value={this.props.value}
        onClick={this.props.onClick}
      >
        {getContents(this.props)}
      </this.props.tag>
    );
  }
}

SelectOption.defaultProps = {
  className: '',
  label: '',
  tag: 'option',
  selected: false,
  onClick: void 0
};

SelectOption.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  tag: PropTypes.string,
  onClick: PropTypes.func,
  selected: PropTypes.bool
};
