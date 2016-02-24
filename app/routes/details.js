import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
        console.log(params);
        return this.store.find('property', params.property_id);
    },
    serialize: function(property) {
        return { 
            slug: property.get('slug'),
            property_id: property.get('id'),
        };
    }
});
