import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    // 
    // TODO: every param here should update the state of components in the page!
    //       either that, or upfate the controller somehow
    //      
    // for (var key in params) {
    //   this.set(key, params[key]);
    // }
    
    return this.store.query('property', {
      filter: params
    });
  }
});

