var h = require('virtual-dom/h');
var state = require('@nichoth/state');
var Input = require('vdom-input');
var noop = function(){};

module.exports = KVInput;

function KVInput(opts) {

  opts = opts || {};
  opts.onComplete = opts.onComplete || noop;

  var s = state({
    field: Input({
      value: opts.field || '',
      attrs: {
        placeholder: 'field'
      },
      onDelete: onDelete()
    }),
    value: Input({
      value: opts.value || '',
      attrs: {
        placeholder: 'value'
      },
      onComplete: onComplete()
    })
  });

  function onComplete() {
    return function() {
      if ( Input.hasValue(s.field) && Input.hasValue(s.value) ) {
        opts.onComplete();
      }
    };
  }

  function onDelete() {
    return function() {
      if ( !(Input.hasValue(s.field)) && !(Input.hasValue(s.value)) ) {
        opts.onDelete();
      }
    };
  }

  return s;
}


KVInput.render = function(state) {
  return h('div.vdom-kv-input', [
    Input.render(state.field),
    Input.render(state.value)
  ]);
};
