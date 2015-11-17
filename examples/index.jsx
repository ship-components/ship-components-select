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
      }
      ]
    }

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
            onChange={this.handleChange.bind(this, 'example1')}
          />
          <code>
            {`<Select
              onChange={this.handleChange}
              defaultValue="One"
              options={["One", "Two", "Three"]} />`}
          </code>
        </div>
        <div className='example-group'>
          <h2>{'Array<Object>'}</h2>
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
              defaultValue="One"
              options={["One", "Two", "Three"]} />`}
          </code>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Examples />, document.getElementById('examples'));
