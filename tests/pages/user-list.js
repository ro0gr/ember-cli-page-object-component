import {
  visitable,
  text,
  value
} from 'ember-cli-page-object';

import component from 'ember-cli-page-object-component/component';

export default component({
  visit: visitable('/list'),

  scope: '.card-list',

  cards: component({
    scope: 'li:nth-of-type(&)',
    title: text('h3'),
    gender: value('input[name=gender][checked]')
  })
});

