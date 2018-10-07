const request = require('request');
const yargs = require('yargs');

const args = yargs
  .options({
    address: {
      describe: 'The address to look up for the weather',
      demand: true,
      alias: 'a'
    }
  })
  .argv;

const buildGeocodeURL = (address) => {
  return `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=AIzaSyA40ocB_Ddr7l94XvnaXaugpKp02nhvDF0`
};

request({
  url: buildGeocodeURL(args.address),
  json: true
}, (error, respponse, body) => {
  console.log(`Address: ${body.results[0].formatted_address}`);
  console.log(`Latitude: body.results[0].geometry.location.lat`);
  console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});
