import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

import page from '../pages/registration';

moduleForAcceptance('Acceptance | registration');

test('visiting /registration', async function(assert) {
  const username = page.fieldset().input('username'),
    firstname = page.fieldset().input('firstname'),
    lastname = page.fieldset().input('lastname');

  page.visit();
  username.fill('test-user');
  firstname.fill('vasily');
  await lastname.fill('pupkin');

  assert.equal(page.fieldset().legend.text, 'Registration Form', 'legend is set');
  assert.ok(username.isVisible, 'isVisible predicate works');
  assert.equal(username.value, 'test-user', 'value is filled');
});


