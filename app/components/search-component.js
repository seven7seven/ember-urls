import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(value, name) {
      // TODO(update url);
      console.log('updated!', value, name);
    }
  }
});
