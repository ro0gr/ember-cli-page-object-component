import {create} from 'ember-cli-page-object';
import Ember from 'ember';

const {assign, merge} = Ember;

// backward compatibility with ember@1.13
const _assign = function(target, p1, p2) {
  return assign ?
    assign(target, p1, p2) :
    merge(merge(target, p1), p2);
}

export default function component(object) {
  return {
    isDescriptor: true,

    value(replacement) {
      replacement = typeof replacement === 'undefined' ? '': replacement;

      let definition = {};
      let scope = object.scope.replace(/&/g, replacement);

      _assign(definition, object, { scope });

      return create(definition, {
        parent: this
      });
    }
  };
}
