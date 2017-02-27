jest.unmock('../dispatch');

// Don't need to test these and they currently throw errors
jest.setMock('ship-components-outsideclick', 'div');
jest.setMock('ship-components-highlight-click', 'div');

import React from 'react';
import dispatch from '../dispatch';
import TestUtils from 'react-addons-test-utils';

describe('dispatch', () => {
  let itemsProps = ['One', 'Two', 'Three'];
  let Select;

  beforeEach(() => {
    Select = require('../Select').default;
  });

  // Render without error
  it('should create an Event Listener', () => {
    let className = 'testClass';
    let reactTree = TestUtils.renderIntoDocument(
      <Select
        className={className}
        options={itemsProps}
      />
    );
    let el = reactTree.refs.input;
    expect(el).toBeDefined();

    let fn = dispatch(el, () => {});
    // Undefined since the event has not been triggered yet
    expect(fn).not.toBeDefined();

    // TO DO: Make sure the event is triggered and tested
  });
});
