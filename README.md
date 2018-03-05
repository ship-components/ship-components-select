# ship-components-select
[React](http://facebook.github.io/react/) select box. Exports a commonjs module that can be used with [webpack](http://webpack.github.io/). Source is in ES6 and is compiled down to ES5 using [Babel](https://babeljs.io/).

[![npm](https://img.shields.io/npm/v/ship-components-select.svg)](https://www.npmjs.com/package/ship-components-select)
[![Build Status](http://img.shields.io/travis/ship-components/ship-components-select/master.svg?style=flat)](https://travis-ci.org/ship-components/ship-components-select)
[![Coverage](http://img.shields.io/coveralls/ship-components/ship-components-select.svg?style=flat)](https://coveralls.io/github/ship-components/ship-components-select)
[![dependencies](https://img.shields.io/david/ship-components/ship-components-select.svg?style=flat)](https://david-dm.org/ship-components/ship-components-select)
[![devDependencies](https://img.shields.io/david/dev/ship-components/ship-components-select.svg?style=flat)](https://david-dm.org/ship-components/ship-components-select?type=dev)

## Usage

### ES6/JSX (Recommended)
The component is written using ES6/JSX therefore Babel is recommended to use it. The below example is based on using [webpack](http://webpack.github.io/) and [babel-loader](https://github.com/babel/babel-loader).
```js
import React from 'react';
import Select from 'ship-components-select';

export default class ExampleClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'One'
    };
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return (
      <div className='form-group'>
        <Select onChange={this.handleChange.bind(this)}
          defaultValue={this.state.value}
          options={['One', 'Two', 'Three']}
          />
      </div>
    );
  }
}
```

## Examples and Development
Examples can be found in the `examples/` folder. A development server can be run with:

```shell
$ npm install
$ npm start
```

which will live reload any changes you make and serve them at http://localhost:8080.

### Webpack Configuration
This module is designed to be used with webpack but requires a few loaders if you are pulling the source into another project.

```shell
$ npm install webpack babel-loader css-loader style-loader postcss-loader extract-text-webpack-plugin postcss-nested postcss-color-hex-alpha postcss-color-function postcss-calc autoprefixer --save-dev
```

Below are is a sample of how to setup the loaders:

```js
/**
 * Relevant Webpack Configuration
 */
{
  [...]
  module: {
    loaders: [
      // Setup support for ES6
      {
        test: /\.(jsx?|es6)$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      // Setup support for CSS Modules
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
      }
    ]
  },
  plugins: [
    // Extract the css and put it in one file. Path is relative to output path
    new ExtractTextPlugin('../css/[name].css', { allChunks: true })
  ],
  // CSS Modules
  postcss: [
    require('postcss-nested'),
    require('postcss-simple-vars'),
    require('postcss-color-hex-alpha'),
    require('postcss-color-function'),
    require('postcss-calc'),
    require('autoprefixer')
  ],
  [...]
}
```

## Tests

*There's currently a bug in Jest, so the units tests and they will not run.*

1. `npm install`
2. `npm test`

## History
* 1.1.1 - Improved the shouldComponentUpdate functionality to check for props.label changes.
* 1.1.0 - Added the forceUpdate prop to manually force update the render function from shouldComponentUpdate
* 1.0.2 - Updates the Enzyme module as well as test suites to be compatible with Enzyme 3x. Also fixes the bug where handleClose function is running a setState on an unmounted component.
* 0.6.4 - Added more testing.
* 0.6.3 - Fixes the bug where opening a dropwdown causes the page to scroll. scrollIntoViewIfNeeded vs scrollIntoView based on the browser type.
* 0.6.2 - Refactor select component to calculate dropdowns visible heights correctly.
* 0.6.1 - Fixes the proptype scrollParentClass in Select component.
* 0.6.0 - Fixes the UI bug where dropdowns with long list of options are cutoff + Updates eslint module and dependencies.
* 0.5.0 - Updates to the latest babel configurations (babel-preset-env).
* 0.4.0 - Updates dev dependencies, adds tests, setup Travis CI and coverage
* 0.3.1 - scrollParent bug fix for 0.3
* 0.3.0 - support for "hangovers" using fixed position dropdown lists
* 0.2.1 - always update if option has a render field
* 0.2.0 - Prevent list from showing when disabled, removed transition group, fixed dependency issue, updated to react 15, limited height of list on long lists, added shouldComponentUpdate
* 0.1.3 - IE10+ fix
* 0.1.2 - Switch prop name from defaultValue to value, fixed prop type check
* 0.1.1 - Added className prop, fixed custom icon issue, added prop type checks
* 0.1.0 - Initial

## License
The MIT License (MIT)

Copyright (c) 2015 Isaac Suttell

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
