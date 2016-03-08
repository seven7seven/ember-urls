import Ember from 'ember';

export default Ember.Route.extend({
  
  model({params}) {
    return params;
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
 