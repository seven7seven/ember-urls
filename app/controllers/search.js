import Ember from 'ember';

export default Ember.Controller.extend({
  transaction_type: null,
  property_type: null,
  city_slug: null,
  zone_slug: null,
  rooms: null,
  selectable: null,
  selectableValues: [
    { 'name': 'Select v1', id: 1 },
    { 'name': 'Select v2', id: 2 },
    { 'name': 'Select v3', id: 3 },
  ],
  actions: {
    updateResults(serialization) {
      // Update the URL, this also triggers a model hook
      this.transitionToRoute('search', serialization);
    }
  }
});
