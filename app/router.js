import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('search', { path: '/ps/'}, function() {
    this.route('advanced', { path: '/:transaction_type/:property_type'}, function() {
      this.route('city', { path: '/:city_id/:city_slug/'}, function() {
        this.route('zone', { path: '/:zone_id/:zone_slug/'}, function() {
          this.route('rooms', { path: '/*rooms/'}, function() {

          });
        });
      });
    });
  });
  this.route('details', { path: '/p/:property_id/:slug'});
});

export default Router;
