# tinytag

[![NPM](https://nodei.co/npm/tinytag.png?compact=true)](https://nodei.co/npm/tinytag/)


> A set of useful template literal tag functions.


## Installation

```bash
npm i --save tinytag
```

## Usage

```JavaScript

// Node.js
const tinyTag = require('tinytag');

// Browser
import tinyTag from 'tinytag';
// or 
import { methodName } from 'tinytag'

```

Methods
-------

### - highLightTag

Wraps each template variable in string literal with `<span class=highlight> <span>`
to highlight variables in string.

Example:

```javascript
highLightTag`Current account balance ${100000} no ${'overdraft'}` // => 'Current account balance <span class=highlight> 1000000 <span> no <span class=highlight> overdraft <span>'
```

## Changelog

[Changelog](./CHANGELOG.md)

## License

[MIT](./LICENSE.txt)

