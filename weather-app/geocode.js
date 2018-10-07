const request = require('request');

const buildGeocodeURL = (address) => {
    return `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=AIzaSyA40ocB_Ddr7l94XvnaXaugpKp02nhvDF0`
};

const getCoords = (address, callback) => {
    request({
        url: buildGeocodeURL(address),
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to Google Servers');
        } else if (body.status !== 'OK') {
            callback(`There was an error with the Google API which is: ${body.status}`)
        } else {
          callback(undefined, {
            address: body.results[0].formatted_address,
            latitude: body.results[0].geometry.location.lat,
            longitude: body.results[0].geometry.location.lng,
          })
        }
    });
};

module.exports = {
  getCoords,
};
