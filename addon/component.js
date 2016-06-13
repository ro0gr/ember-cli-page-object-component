import {create} from 'ember-cli-page-object';
import Ember from 'ember';

const {assign} = Ember;

export default function component(object) {
  return {
    isDescriptor: true,

    value(replacement) {
      let definition = {};
      let scope = object.scopeTemplate.replace(/&/g, replacement);

      assign(definition, object, { scope });

      return create(definition, { parent: this });
    }
  };
}
