jest.unmock('../Select');

// Don't need to test these and they currently throw errors
jest.setMock('ship-components-outsideclick', 'div');
jest.setMock('ship-components-highlight-click', 'div');


import React from 'react';
import TestUtils from 'react-addons-test-utils';

describe('Select', () => {
  let itemsProps = ['One', 'Two', 'Three'];
  let Select;
  beforeEach(() => {
    Select = require('../Select').default;
  });

  // Render without error
  it('should render without error', () => {
    let element = React.createElement(
       Select, // component class
       {
        options: itemsProps
       } // props go here
    );

    expect(() => TestUtils.renderIntoDocument(element))
       .not.toThrow();
  });

  it('should support custom css classes', () => {
    let className = 'testClass';
    let reactTree = TestUtils.renderIntoDocument(
      <Select
        className={className}
        options={itemsProps}
      />
    );
    let comp = TestUtils.findRenderedDOMComponentWithClass(reactTree, className);

    expect(comp).toBeDefined();
  });
});
