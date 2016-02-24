import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('search', { path: '/p'});
  
  this.route('search-city', { path: '/p/:city_slug/'}); // maybe use this to generate city categories etc.?
  this.route('search-type', { path: '/p/t/:property_type/'});
  
  this.route('details', { path: '/p/:property_id/:slug'});
});

export default Router;
