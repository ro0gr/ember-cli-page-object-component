import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

import page from '../pages/registration';

moduleForAcceptance('Acceptance | registration');

test('visiting /registration', async function(assert) {
  const [
    username,
    firstname,
    lastname
  ] = ['username', 'firstname', 'lastname'].map(name => page.fieldset().input(name));

  page.visit();
  username.fill('test-user');
  firstname.fill('vasily');
  await lastname.fill('pupkin');

  assert.equal(page.fieldset().legend.text, 'Registration Form', 'Legend is set');
  assert.ok(username.isVisible, 'isVisible predicate works');
  assert.equal(username.value, 'test-user', 'value is filled');
});
