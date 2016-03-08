import Ember from 'ember';

// Responsibilities
//  -- providing your template with an API for manipulating the query
//  -- know how to generate params query
//  -- send closure action with query
//  -- receive data 
//  -- handle is-loading
//  -- yield data

export default Ember.Component.extend({
  transaction_type: null,
  property_type: null,
  city_slug: null,
  zone_slug: null,
  rooms: null,
  selectable: null,

  title: null,

  // A function that builds the URL from all the filters of the search component
  getSerialization() {
    var transaction_type = this.get('transaction_type') || '',
        property_type = this.get('property_type') || '',
        city_slug = this.get('city_slug') || '',
        zone_slug = this.get('zone_slug') || '',
        rooms = this.get('rooms');

    if (rooms) {
      rooms = `${rooms}-camere`;
    } else {
      rooms = '';
    }

    return `${transaction_type}/${property_type}/${city_slug}/${zone_slug}/${rooms}`;
  },
  getTitle() {
    var transaction_type = this.get('transaction_type') || '',
        property_type = this.get('property_type') || '',
        city = this.get('city_slug') || '',
        zone = this.get('zone_slug') || '',
        rooms = this.get('rooms') || '';

    if (property_type) {
      property_type = property_type.capitalize();
    } else {
      property_type = 'Proprietăți';
    }
    if (transaction_type) {
      if (property_type) {
        transaction_type = ` de ${transaction_type.capitalize()}`;
      } else {
        transaction_type = `De ${transaction_type.capitalize()}`;
      }
    }
    if (city) {
      city = ` în ${city.capitalize()}`;
    }
    if (zone && city) {
      zone = `, în zona ${zone.capitalize()}`;
    } else {
      zone = '';
    }
    if (rooms && property_type) {
      rooms = ` cu ${rooms} camere`;
    }

    return `${property_type}${rooms}${transaction_type}${city}${zone}`;
  },
  didReceiveAttrs() {
    this._super(...arguments);
    let params = this.get('params');
    let _params = this.get('_params');
    
    if (params !== _params) {
      this.set('isLoading', true);
      let query = this.buildQuery(params);
      this['fetch'](query)
        .then((data)=>{
           this.set('data', data);
           this.set('isLoading', false);
           this.set('_params', params);
        });
    }
    
  },
  didInsertElement() {
    // Set the component's title property
    this.set('title', this.getTitle());
  },
  actions: {
    update(e) {
      // Serialize all the filters & send an update up
      this.sendAction('search', this.getSerialization());

      console.warn('E is', e);
      console.warn('selectable is ', this.get('selectable'));

      // Set the component's title property
      this.set('title', this.getTitle());
    }
  }
});

    
    // // Process params for API request
    // if (parsedParams['city_slug']) {
    //   // TODO: get city ID
    //   parsedParams['city'] = 23;
    //   delete parsedParams['city_slug'];
    // }

    // if (parsedParams['zone_slug']) {
    //   var zones = parsedParams['zone_slug'].split(','),
    //       zoneIDs = [];

    //   for (var i = zones.length - 1; i >= 0; i--) {
    //     // TODO: get zone id from slug, zones[i]
    //     zoneIDs.push(i + 23234);
    //   }

    //   parsedParams['zone'] = $.param({ 'zone': zoneIDs });
    //   delete parsedParams['zone_slug'];
    // }