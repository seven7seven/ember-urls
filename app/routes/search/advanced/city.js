import Ember from 'ember';

export default Ember.Route.extend({
	model(q) {
		return this.store.query('property', {
			filter: q
		});
	}
});

