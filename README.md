# gobble-es6-transpiler

Compile ES6 files with gobble and [es6-transpiler](https://github.com/termi/es6-transpiler).

## Installation

First, you need to have gobble installed - see the [gobble readme](https://github.com/gobblejs/gobble) for details. Then,

```bash
npm i -D gobble-es6-transpiler
```

## Usage

**gobblefile.js**

```js
var gobble = require( 'gobble' );
module.exports = gobble( 'js' ).map( 'es6-transpiler', options );
```

The `options` argument is optional, and is passed to es6-transpiler (the `src` property is added). See [the full list of options](https://github.com/termi/es6-transpiler#options).

Additionally, you can pass an `onError` function. If present, this function will be called with any errors that occur; otherwise, an exception will be raised.


## License

MIT. Copyright 2014 Rich Harris
