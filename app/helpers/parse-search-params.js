import Ember from 'ember';

export function parseSearchParams([params]/*, hash*/) {
  let [
    transaction_type,
    property_type,
    city_slug,
    zone_slug,
    rooms
  ] = params.split('/');
    
  return {
    transaction_type,
    property_type,
    city_slug,
    zone_slug,
    rooms
  };
}

export default Ember.Helper.helper(parseSearchParams);
