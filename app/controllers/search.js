import Ember from 'ember';

export default Ember.Controller.extend({
  transaction_type: null,
  property_type: null,
  city_slug: null,
  zone_slug: null,
  rooms: null,
  actions: {
    updateResults(serialization) {
      // Update the URL, this also triggers a model hook
      this.transitionToRoute('search', serialization);
    }
  }
});
