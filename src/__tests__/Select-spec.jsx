jest.unmock('../Select');
jest.unmock('../SelectOption.js');

// Don't need to test these and they currently throw errors
jest.setMock('ship-components-outsideclick', 'div');
jest.setMock('ship-components-highlight-click', 'div');

import React from 'react';
import TestUtils from 'react-dom/test-utils';
import { mount } from 'enzyme';

const Select = require('../Select').default;
const SelectOption = require('../SelectOption').default;

describe('Select', () => {
  let options = ['One', 'Two', 'Three'];

  it('renders without error', () => {
    let element = React.createElement(
       Select,
       {
        options: options
       }
    );

    expect(() => TestUtils.renderIntoDocument(element))
       .not.toThrow();
  });

  it('toggles "active" state', () => {
    const wrapper = mount(
      <Select options={options} />
    );
    const event = new Event('look');

    expect(wrapper.state().active).toBeFalsy();
    wrapper.node.handleToggleActive(event);
    expect(wrapper.state().active).toEqual(true);
  });

  it('renders options only when state.active', () => {
    const optionsLength = options.length;
    const wrapper = mount(
      <Select options={options} />
    );

    // option list should be empty (not rendered)
    const listNode = wrapper.ref('list');
    expect(listNode).toBeDefined();
    expect(listNode.children().length).toEqual(0);

    // set state.active<=true
    wrapper.setState({active: true});

    // option list should now have children
    expect(listNode.children().length).toEqual(optionsLength);
  });

  it('defines a ref to the selected option node', () => {
    // mount a Select with no value
    const wrapper = mount(
      <Select 
        options={options} 
      />
    );

    // make active so it renders options
    wrapper.setState({active: true});

    // expect no reference to a selection since there is no supplied value
    expect(wrapper.ref('selected').node).not.toBeDefined();

    // set value
    wrapper.setProps({value: options[0]});

    // expect the reference to exist
    expect(wrapper.ref('selected').node instanceof SelectOption).toBe(true);
    expect(wrapper.ref('selected').node.props.value).toBe(options[0]);
  });

  it('fires a change event once per update', () => {
    const changeHandler = jest.fn();
    const wrapper = mount(
      <Select
        options={options}
        onChange={changeHandler}
      />
    );

    expect(changeHandler.mock.calls.length).toBe(0);
    // trigger an update
    wrapper.node.updateState(options[0]);
    // verify the change handler is called once
    expect(changeHandler.mock.calls.length).toBe(1);
  });

  it('updates the underlying select input', () => {
    const originalValue = options[0];
    const updatedValue = options[2];
    const wrapper = mount(
      <Select
        value={originalValue}
        options={options}
      />
    );

    // verify value is empty
    expect(wrapper.ref('input').node.value).not.toBe(updatedValue);
    // trigger value update
    wrapper.node.updateState(updatedValue);
    // verify the value
    expect(wrapper.ref('input').node.value).toBe(updatedValue);
  });

  it('registers a scrolling parent', () => {
    const parentId = 'scrollingParent';
    const scrollingParentClass = 'scrolling-parent-test-class';

    const wrapper = mount(
      <div
        id={parentId}
        className={scrollingParentClass}
      >
        <Select
          scrollParentClass={scrollingParentClass}
          options={options}
        />
      </div>
    );

    const scrollParent = wrapper.childAt(0).getNode().scrollParent;
    expect(scrollParent).toBeDefined();
    expect(scrollParent.id).toEqual(parentId);
  });

  it('supports custom css classes', () => {
    let className = 'testClass';
    let reactTree = TestUtils.renderIntoDocument(
      <Select
        className={className}
        options={options}
      />
    );
    let comp = TestUtils.findRenderedDOMComponentWithClass(reactTree, className);

    expect(comp).toBeDefined();
  });
});
