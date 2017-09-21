jest.unmock('../SelectOption');

import React from 'react';
import TestUtils from 'react-dom/test-utils';

describe('SelectOption', () => {
  let SelectOption;
  beforeEach(() => {
    SelectOption = require('../SelectOption').default;
  });

  // Render without error
  it('should render without error', () => {
    let element = React.createElement(
       SelectOption, // component class
       {
        value: 'One'
       } // props go here
    );

    expect(() => TestUtils.renderIntoDocument(element))
       .not.toThrow();
  });

  it('should support custom css classes', () => {
    let className = 'testClass';
    let reactTree = TestUtils.renderIntoDocument(
      <SelectOption
        className={className}
        value='One'
      />
    );
    let comp = TestUtils.scryRenderedDOMComponentsWithClass(reactTree, className);
    expect(comp).toBeDefined();
  });
});
