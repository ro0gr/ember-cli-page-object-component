import {
  collection,
  create,
  visitable,
  // fillable,
  value,
  text
} from 'ember-cli-page-object';

import component from 'ember-cli-page-object-component/component';

export default create({
  visit: visitable('/list'),

  cards: collection({
    scope: '.card-list',
    itemScope: 'li',

    item: {
      title: text('h3'),
      gender: value('input[name=gender][checked]')
    }
  })
});
