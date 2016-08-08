/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-page-object-component',

  treeFor: function(/*name*/) {
    if (!this._shouldIncludeFiles()) {
      return;
    }

    return this._super.treeFor.apply(this, arguments);
  },

  _shouldIncludeFiles: function() {
    return this.app.env !== 'production';
}
};
