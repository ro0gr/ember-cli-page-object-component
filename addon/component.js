import {create} from 'ember-cli-page-object';
import Ember from 'ember';

const {assign, merge} = Ember;

const placeholder = /&/g;

// backward compatibility with ember@1.13
const _assign = function(target, p1, p2) {
  return assign ?
    assign(target, p1, p2) :
    merge(merge(target, p1), p2);
}

function buildSelector(selector, replacement) {
  replacement = typeof replacement === 'undefined' ? '&': replacement;

  let scope = selector.replace(placeholder, replacement);
  if (placeholder.test(scope)) {
    throw new Error('Scope template "' + scope + '" failed to compile');
  }

  return scope;
}

export default function component(object) {
  return create({
    isDescriptor: true,

    value(replacement) {
      let definition = {};
      let scope = buildSelector(object.scope, replacement);

      _assign(definition, object, { scope });

      return create(definition, {
        parent: this
      });
    }
  });
}
