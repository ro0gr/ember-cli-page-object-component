import {create} from 'ember-cli-page-object';
import Ember from 'ember';

const placeholder = /&/g;

// backward compatibility with ember@1.13
const assign = Ember.assign || Object.assign;

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

      assign(definition, object, { scope });

      return create(definition, {
        parent: this
      });
    }
  });
}
