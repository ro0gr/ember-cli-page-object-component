import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

import page from '../pages/user-list';
import {create} from 'ember-cli-page-object';

moduleForAcceptance('Acceptance | list test');

test('collection component', async function(assert) {
  const userList = create(page)();

  await userList.visit();

  const user1 = userList.cards(1);
  assert.ok(userList.cards(1).isVisible);
  assert.equal('John', user1.title);
  assert.equal('male', user1.gender);

  const user2 = userList.cards(2);
  assert.ok(user2.isVisible);
  assert.equal('female', user2.gender);
  assert.equal('Maria', user2.title);
});


