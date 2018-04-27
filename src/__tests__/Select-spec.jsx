jest.unmock('../Select');
jest.unmock('../SelectOption.js');

// Don't need to test these and they currently throw errors
jest.setMock('ship-components-outsideclick', 'div');
jest.setMock('ship-components-highlight-click', 'div');

import React from 'react';
import TestUtils from 'react-dom/test-utils';
import { mount } from 'enzyme';
import configure from 'enzyme-adapter-react-helper';

// Setup Enzyme
configure({});

const Select = require('../Select').default;
const SelectOption = require('../SelectOption').default;
const OutsideClick = require('ship-components-outsideclick');

describe('Select', () => {
  let options = ['One', 'Two', 'Three'];
  let spy = null;

  afterEach(() => {
    // Reset spies
    if (spy) {
      spy.mockClear();
      spy = null;
    }
  });

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
    wrapper.instance().handleToggleActive(event);
    expect(wrapper.state().active).toEqual(true);
  });

  it('renders options only when state.active', () => {
    const optionsLength = options.length;
    const wrapper = mount(
      <Select options={options} />
    );
    // option list should be empty (not rendered)
    expect(wrapper.find('ul').children().length).toEqual(0);
    // set state.active<=true
    wrapper.setState({active: true});
    // option list should now have children
    expect(wrapper.find('ul').children().length).toEqual(optionsLength);
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
    expect(wrapper.ref('selected')).not.toBeDefined();

    // set value
    wrapper.setProps({value: options[0]});
    // expect the reference to exist
    expect(wrapper.ref('selected') instanceof SelectOption).toBe(true);
    expect(wrapper.ref('selected').props.value).toBe(options[0]);
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
    wrapper.instance().updateState(options[0]);
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
    expect(wrapper.ref('input').value).not.toBe(updatedValue);
    // trigger value update
    wrapper.instance().updateState(updatedValue);
    // verify the value
    expect(wrapper.ref('input').value).toBe(updatedValue);
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

    const scrollParent = wrapper.childAt(0).instance().scrollParent;
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

  it('should class setState on mounted component in handleClose function', () => {
    spy = jest.spyOn(Select.prototype, 'handleClose');
    let className = 'testClass';
    const wrapper = mount(
      <Select
        className={className}
        options={options}
      />
    );
    // handleClose updates the state when the refs input is present
    // which means the component is mounted
    expect(wrapper.ref('input')).toBeDefined();
    wrapper.setState({ active: true});
    expect(wrapper.state('active')).toBe(true);
    wrapper.find(OutsideClick).first().simulate('click');
    expect(spy).toHaveBeenCalled();
    expect(wrapper.state('active')).toBe(false);

    // handleClose SHOULD NOT update the state when the refs input is not present
    // which means the component is unmounted
    delete wrapper.instance().refs.input;
    wrapper.find(OutsideClick).first().simulate('click');
    expect(wrapper.state('active')).toBe(false);
  });
});
