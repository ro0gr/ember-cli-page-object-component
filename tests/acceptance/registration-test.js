import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

import registrationPage from '../pages/registration';

moduleForAcceptance('Acceptance | registration');

test('visiting /registration', async function(assert) {
  await registrationPage.visit();

  assert.ok(registrationPage.input('username').isVisible, 'isVisible predicate works');
});
