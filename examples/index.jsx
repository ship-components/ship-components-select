/**
 * ES6 Buttons Example
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Select from '../src/Select';

class Examples extends React.Component {
  constructor() {
    super();
    this.state = {
      manyOpts: this.getManyOptions()
    };
  }

  handleChange(key, event) {
    let state = {};
    state[key] = event.target.value;
    this.setState(state);
  }

  getManyOptions(len = 50) {
    let opts = [];
    let index = -1
    while(index++ < len) {
      var value = '';
      for (var i = 0; i < 5; i++) {
        value += String.fromCharCode(Math.floor(Math.random() * 26) + 65).toLowerCase();
      }

      const opt = {
        value: value,
        label: value.charAt(0).toUpperCase() + value.substring(1)
      };
      opts.push(opt);
    }
    return opts;
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
            value={this.state.example1 || opts.str[0]}
            options={opts.str}
            icon={<span className='ion-chevron-down'/>}
            onChange={this.handleChange.bind(this, 'example1')} />
          <code>
            {`<Select
              onChange={this.handleChange}
              value="One"
              options={["One", "Two", "Three"]} />`}
          </code>
          <Select
            value={this.state.example2 || opts.obj[0].value}
            options={opts.obj}
            icon={<span className='ion-chevron-down'/>}
            onChange={this.handleChange.bind(this, 'example2')}
          />
          <code>
            {`<Select
              onChange={this.handleChange}
              value="1"
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
            value={this.state.example3}
            options={opts.str}
            icon={<span className='ion-chevron-down'/>}
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
            value={this.state.example4 || opts.str[0]}
            options={opts.str}
            icon={<span className='ion-chevron-down'/>}
            onChange={this.handleChange.bind(this, 'example4')} />
          <code>
            {`<Select
              disabled
              onChange={this.handleChange}
              options={["One", "Two", "Three"]} />`}
          </code>
        </div>
        <div className='example-group'>
          <h2>Long List</h2>
          <Select
            label='Select...'
            value={this.state.example5}
            options={this.state.manyOpts}
            icon={<span className='ion-chevron-down'/>}
            onChange={this.handleChange.bind(this, 'example5')}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Examples />, document.getElementById('examples'));
