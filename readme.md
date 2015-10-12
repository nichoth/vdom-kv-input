# vdom kv input

virtual-dom inputs for key value pairs

## demo

https://6519bb83cb5aeb94a2a1a0e83e3058725a5b7f66.htmlb.in


## install

    $ npm install vdom-kv-input


## example

```js
var createElement = require('virtual-dom/create-element');
var h = require('virtual-dom/h');
var KVInput = require('vdom-kv-input');

var state = KVInput({
  field: 'ham',
  value: 'party',
  focus: 'value'  // focus the field or value when this el is created
});

var virtualEl = KVInput.render( state() );
var el = createElement(virtualEl);

document.getElementById('content').appendChild(el);
```
