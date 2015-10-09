# vdom kv input

virtual-dom inputs for key value pairs

## demo

https://1a6699a10cff16f74b49751bc6299bcd76e314c6.htmlb.in


## install

    $ npm install vdom-kv-input


## example

```js
var createElement = require('virtual-dom/create-element');
var h = require('virtual-dom/h');
var KVInput = require('../KVInput.js');

var state = KVInput({
  field: 'ham',
  value: 'party'
});

var virtualEl = KVInput.render( state() );
var el = createElement(virtualEl);

document.getElementById('content').appendChild(el);
```
