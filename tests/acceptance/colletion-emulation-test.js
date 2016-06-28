import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

import userList from '../pages/user-list';

moduleForAcceptance('Acceptance | list test');

test('collection component', function(assert) {
  userList().visit();

  andThen(function() {
    const user1 = userList().cards(1),
      user2 = userList().cards(2);

    assert.ok(user1.isVisible);
    assert.equal('John', user1.title);
    assert.equal('male', user1.gender);

    assert.ok(user2.isVisible);
    assert.equal('female', user2.gender);
    assert.equal('Maria', user2.title);
  });
});


