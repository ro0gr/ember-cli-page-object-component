import {
  collection,
  create,
  visitable,
  // fillable,
  // value,
  text
} from 'ember-cli-page-object';

import component from 'ember-cli-page-object-component/component';

export default create({
  visit: visitable('/list'),

  cards: collection({
    scope: '.card-list',
    itemScope: 'li',

    item: component({
      title: text('h3')
    })
  })
});
