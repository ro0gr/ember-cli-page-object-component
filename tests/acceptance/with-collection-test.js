import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

import usersCollection from '../pages/users-collection';

moduleForAcceptance('Acceptance | collection test');

test('collection component', async function(assert) {
  await usersCollection.visit();

  const user1 = usersCollection.cards(0);
  assert.ok(user1.isVisible);
  assert.equal('John', user1.title);
  assert.equal('male', user1.gender);

  const user2 = usersCollection.cards(1);
  assert.ok(user2.isVisible);
  assert.equal('female', user2.gender);
  assert.equal('Maria', user2.title);
});

