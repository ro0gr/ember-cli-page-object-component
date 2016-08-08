import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import component from 'ember-cli-page-object-component';

import {
  fillable,
  value,
  create,
  count
} from 'ember-cli-page-object';

const input = component({
  scope: '.control-&',
  value: value('input'),
  fill: fillable('input')
});

const page = create({
  input,
  controlsCount: count('.control')
})

moduleForComponent('field-set', 'Integration | Component | field set', {
  integration: true,

  beforeEach() {
    page.setContext(this)
  }
});

test('Should handle dynamic fieldsets', function(assert) {
  this.set('fields', [
    { name: 'firstname' },
    { name: 'lastname' }
  ]);

  page.render(hbs`
    {{field-set fields=fields}}
  `);

  assert.ok(page.input('firstname').isVisible, 'first name is visible');
  assert.ok(page.input('lastname').isVisible, 'last name is visible');
  assert.equal(page.controlsCount, 2, 'Only basic name fields are shown');

  this.set('fields', [
    { name: 'firstname' },
    { name: 'middlename' },
    { name: 'lastname' }
  ]);

  assert.ok(page.input('firstname').isVisible, 'first name is visible');
  assert.ok(page.input('middlename').isVisible, 'middle name is visible');
  assert.ok(page.input('lastname').isVisible, 'last name is visible');
  assert.equal(page.controlsCount, 3, 'Only ukrainian name fields are shown');
});
