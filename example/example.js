var createElement = require('virtual-dom/create-element');
var h = require('virtual-dom/h');
var KVInput = require('../KVInput.js');

var state = KVInput({
  field: 'ham',
  value: 'party',
  focus: 'value'
});

var virtualEl = KVInput.render( state() );
var el = createElement(virtualEl);

document.getElementById('content').appendChild(el);
