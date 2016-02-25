var propertiesList = 
    [{
      type: 'properties',
      id: 1,
      attributes: {
        title: 'Grand Old Mansion',
        owner: 'Veruca Salt',
        city: 'Cluj-Napoca',
        type: 'Estate',
        bedrooms: 15,
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
      }
    }, {
      type: 'properties',
      id: 2,
      attributes: {
        title: 'Urban Living',
        owner: 'Mike Teavee',
        city: 'Seattle',
        type: 'Condo',
        bedrooms: 1,
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
      }
    }, {
      type: 'properties',
      id: 3,
      attributes: {
        title: 'Downtown Charm',
        owner: 'Violet Beauregarde',
        city: 'Portland',
        type: 'Apartment',
        bedrooms: 3,
        image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
      }
    }];

export default function() {
  this.get('/api/properties', function() {
    return {
      data: propertiesList,
    };
  });
  this.get('/api/properties/:id', function(db, request) {
    return {
      // Hack for displaying a single detail page through the API
      data: propertiesList[request.params.id-1],
    };
  });
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
