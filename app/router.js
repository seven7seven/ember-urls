import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('search', { path: '/p/*params'});
  this.route('details', { path: '/p/:slug/:property_id'});
});

export default Router;
