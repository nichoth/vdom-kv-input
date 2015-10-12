var h = require('virtual-dom/h');
var state = require('@nichoth/state');
var Input = require('vdom-input');
var FocusHook = require('virtual-dom/virtual-hyperscript/hooks/focus-hook.js');
var noop = function(){};

module.exports = KVInput;

function KVInput(opts) {

  opts = opts || {};
  opts.onComplete = opts.onComplete || noop;
  opts.onDelete = opts.onDelete || noop;

  var focusField = opts.focus === 'field' ? new FocusHook() : false;
  var focusValue = opts.focus === 'value' ? new FocusHook() : false;

  var s = state({
    field: Input({
      value: opts.field || '',
      attrs: {
        focusThis: focusField,
        onfocus: function(ev) {
          this.select();
        },
        placeholder: 'field'
      },
      onDelete: onDelete()
    }),
    value: Input({
      value: opts.value || '',
      attrs: {
        focusThis: focusValue,
        onfocus: function(ev) {
          this.select();
        },
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


KVInput.isComplete = function(state) {
  return Input.hasValue(state.field) && Input.hasValue(state.value);
};


KVInput.render = function(state) {
  return h('div.vdom-kv-input', [
    Input.render(state.field),
    Input.render(state.value)
  ]);
};
