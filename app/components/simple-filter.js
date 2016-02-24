import Ember from 'ember';

export default Ember.Component.extend({
	filter: null,
	name: null,
	actions: {
		simpleFilter() {
			this.sendAction('changed', this.get('filter'), this.get('name'));
		}
	}
});
