import Ember from 'ember';

export default Ember.Route.extend({

  // This function parses URL to build the data
  parseParams(params) {
    var res = params.split('/'),
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
    
    // Process params for API request
    if (parsedParams['city_slug']) {
      // TODO: get city ID
      parsedParams['city'] = 23;
      delete parsedParams['city_slug'];
    }

    if (parsedParams['zone_slug']) {
      var zones = parsedParams['zone_slug'].split(','),
          zoneIDs = [];

      for (var i = zones.length - 1; i >= 0; i--) {
        // TODO: get zone id from slug, zones[i]
        zoneIDs.push(i + 23234);
      }

      parsedParams['zone'] = $.param({ 'zone': zoneIDs });
      delete parsedParams['zone_slug'];
    }

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
 