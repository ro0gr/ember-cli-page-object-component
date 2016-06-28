import Ember from 'ember';
import pageComponent from 'ember-cli-page-object-component/component';
import { module, test } from 'qunit';

module('Unit | Page Object | component');

test('should build complete selector if replacement is specified', function(assert) {
  let subject = pageComponent({
    scope: '.&-cls'
  });

  const c = subject('a');
  assert.equal('.a-cls', c.scope, 'scope is compiled');
});


test('should not touch the scope if no placeholder specified', function(assert) {
  let subject = pageComponent({
    scope: '.some-scope-cls'
  });

  const c = subject('a');
  assert.equal('.some-scope-cls', c.scope, 'scope is untouched');
});

// Replace this with your real tests.
test('should throw an exception if no replacement specified', function(assert) {
  let subject = pageComponent({
    scope: '&'
  });

  try {
    subject();
  } catch (e) {
    assert.ok(e, 'exception thrown');
  }
});
