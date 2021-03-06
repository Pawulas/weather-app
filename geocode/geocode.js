const request = require('request');

var geocode = (address) => {
  return new Promise((resolve, reject) => {
    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
      json: true
    }, (err, resp, body) => {

      if (err) {
        reject(err);
      }
      resolve({
        formated_address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
    });
  });
}

module.exports = {
  geocodeAddress: geocode
};
