jest.unmock('../lib/dispatch');

// Don't need to test these and they currently throw errors
jest.setMock('ship-components-outsideclick', 'div');
jest.setMock('ship-components-highlight-click', 'div');

import React from 'react';
import dispatch from '../lib/dispatch';
import TestUtils from 'react-dom/test-utils';

describe('dispatch', () => {
  let itemsProps = ['One', 'Two', 'Three'];
  let Select;

  beforeEach(() => {
    Select = require('../Select').default;
  });

  // Render without error
  it('should create an Event Listener', () => {
    let onChange = jest.fn();
    let reactTree = TestUtils.renderIntoDocument(
      <Select
        options={itemsProps}
      />
    );
    let el = reactTree.refs.input;
    expect(el).toBeDefined();

    dispatch(el, onChange);

    expect(onChange).toHaveBeenCalled();

    // TO DO: Make sure the event is triggered and tested
  });
});
