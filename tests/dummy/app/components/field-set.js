import Ember from 'ember';
const {
  computed,
  guidFor,
  assign
} = Ember;

export default Ember.Component.extend({
  tagName: 'fieldset',

  classNames: ['field-set'],

  _fields: computed('fields', function() {
    return this.fields.map(f =>
      assign({}, f, {id: guidFor(f.name)})
    );
  })
});
