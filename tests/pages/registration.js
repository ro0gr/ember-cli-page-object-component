import {
  create,
  visitable,
  fillable,
  value,
  text
} from 'ember-cli-page-object';

import component from 'ember-cli-page-object-component/component';

export default create({
  visit: visitable('/'),

  scope: 'form',

  fieldset: component({
    scope: 'fieldset',

    legend: {
      scope: 'legend'
    },

    input: component({
      scope: '.control-&',
      label: text(),
      fill: fillable('input'),
      value: value('input')
    })
  })
});
