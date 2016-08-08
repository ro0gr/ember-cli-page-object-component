import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      countries: ['ua', 'us'],
      fields: {
        ua: [{
          name: 'firstname'
        }, {
          name: 'middlename'
        }, {
          name: 'lastname'
        }],

        us: [{
          name: 'firstname'
        }, {
          name: 'lastname'
        }]
      }
    }
  }
});
