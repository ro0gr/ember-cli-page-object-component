import {
  create,
  visitable,
  fillable,
  value,
  text
} from 'ember-cli-page-object';

import component from 'ember-cli-page-object-component/component';

const input = component({
  scope: '.control-&',
  label: text(),
  fill: fillable('input'),
  value: value('input')
});

export default create({
  visit: visitable('/registration'),

  scope: 'form',

  fieldset: component({
    scope: 'fieldset',

    legend: {
      scope: 'legend'
    },

    input
  })
});
