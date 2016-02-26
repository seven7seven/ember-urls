import Ember from 'ember';

export default Ember.Route.extend({

  // This function parses URL to build the data
  parseParams(params) {
    var res = params.split('--'),
        result = {},
        rooms;
    
    result['transaction_type'] = res[0];
    result['property_type'] = res[1];
    result['city_slug'] = res[2];
    result['zone_slug'] = res[3];
    rooms = res[4];

    if (rooms) {
      result['rooms'] = rooms.substring(0, rooms.indexOf('-'));
    }

    return result;
  },
  model(params) {
    var parsedParams = this.parseParams(params.params);
    return this.store.query('property', parsedParams);
  },
  setupController: function(controller, model) {
    this._super(controller, model);

    // Update the state of the controller from the URL
    var parsedParams = this.parseParams(this.paramsFor('search').params);
    for (var param in parsedParams) {
      this.controllerFor('search').set(param, parsedParams[param]);
    }

  },
});
 