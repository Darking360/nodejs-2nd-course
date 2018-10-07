const request = require('request');

const buildGeocodeURL = (address) => {
    return `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=AIzaSyA40ocB_Ddr7l94XvnaXaugpKp02nhvDF0`
};

const getCoords = (address) => {
    return new Promise((resolve, reject) => {
        request({
            url: buildGeocodeURL(address),
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('Unable to connect to Google Servers');
            } else if (body.status !== 'OK') {
                reject(`There was an error with the Google API which is: ${body.status}`)
            } else {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng,
                })
            }
        });

    });
};

module.exports = {
    getCoords,
};
