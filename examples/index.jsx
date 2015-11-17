/**
 * ES6 Buttons Example
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Select from '../src/Select';

class Examples extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleChange(key, event) {
    let state = {};
    state[key] = event.target.value;
    this.setState(state);
  }

  render() {
    const opts = {
      str: ['One', 'Two', 'Three'],
      obj: [{
        value: '1',
        label: 'One'
      },
      {
        value: '2',
        label: 'Two'
      },
      {
        value: '3',
        label: 'Three'
      }]
    };

    return (
      <div>
        <h1>{'<Select> Examples'}</h1>
        <div className='example-group'>
          <h2>Default</h2>
          <Select
            defaultValue={this.state.example1 || opts.str[0]}
            options={opts.str}
            iconPrefix='ion-'
            icon='chevron-down'
            onChange={this.handleChange.bind(this, 'example1')} />
          <code>
            {`<Select
              onChange={this.handleChange}
              defaultValue="One"
              options={["One", "Two", "Three"]} />`}
          </code>
          <Select
            defaultValue={this.state.example2 || opts.obj[0].value}
            options={opts.obj}
            iconPrefix='ion-'
            icon='chevron-down'
            onChange={this.handleChange.bind(this, 'example2')}
          />
          <code>
            {`<Select
              onChange={this.handleChange}
              defaultValue="1"
              options={[
                  {
                    value: '1',
                    label: 'One'
                  }, {
                    value: '2',
                    label: 'Two'
                  }, {
                    value: '3',
                    label: 'Three'
                  }
              ]} />`}
          </code>
        </div>
        <div className='example-group'>
          <h2>With Label</h2>
          <Select
            label='Select...'
            defaultValue={this.state.example3}
            options={opts.str}
            iconPrefix='ion-'
            icon='chevron-down'
            onChange={this.handleChange.bind(this, 'example3')} />
          <code>
            {`<Select
              label="Select..."
              onChange={this.handleChange}
              options={["One", "Two", "Three"]} />`}
          </code>
        </div>
        <div className='example-group'>
          <h2>Disabled</h2>
          <Select
            disabled
            defaultValue={this.state.example4 || opts.str[0]}
            options={opts.str}
            iconPrefix='ion-'
            icon='chevron-down'
            onChange={this.handleChange.bind(this, 'example4')} />
          <code>
            {`<Select
              disabled
              onChange={this.handleChange}
              options={["One", "Two", "Three"]} />`}
          </code>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Examples />, document.getElementById('examples'));
