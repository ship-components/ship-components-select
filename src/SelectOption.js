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
   * Find out if dropdown is offscreen
   * @param {object} el
   * @returns {bool}
   */
  isElementOffScreen(el) {
    // Get the ul element
    const elParent = el.offsetParent;
    const rect = elParent.getBoundingClientRect();

    return (
      rect.x + rect.width < 0
      || rect.y + rect.height < 0
      || (rect.x + elParent.clientWidth > window.innerWidth || rect.y + elParent.clientHeight > window.innerHeight)
    );
  }

  /**
   * Attempt to make this option visible. Called from parent
   */
  scrollIntoView() {
    const scrollIntoViewOptions = { behavior: 'smooth', block: 'end', inline: 'nearest' };
    const isOffScreen = this.isElementOffScreen(this.refs.option);

    // Both scrollIntoViewIfNeeded and scrollIntoView
    // are not 100% supported.
    // scrollIntoViewIfNeeded works with Chrome and Safari
    // More info: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoViewIfNeeded
    if (typeof this.refs.option.scrollIntoViewIfNeeded === 'function') {
      this.refs.option.scrollIntoViewIfNeeded();
      return;
    }

    // scrollIntoView works with all other browsers
    // if element isOffScreen then scrollIntoView will fire
    // SHIPWATCH-1504
    // More info: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
    if (isOffScreen && typeof this.refs.option.scrollIntoView === 'function') {
      this.refs.option.scrollIntoView(false, scrollIntoViewOptions);
      return;
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
