import {
  create,
  visitable
} from 'ember-cli-page-object';

import component from 'ember-cli-page-object-component/component';

export default create({
  visit: visitable('/'),
  input: component({
    scopeTemplate: 'input[name="&"]'
  })
});
