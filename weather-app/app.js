const request = require('request');
const yargs = require('yargs');

const args = yargs
  .command('weather', 'Get weather for the specified location', {
    address: {
      describe: 'The address to look up for the weather',
      demand: true,
      alias: 'a'
    }
  })
  .help()
  .argv;

const buildGeocodeURL = (address) => {
  return `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=AIzaSyA40ocB_Ddr7l94XvnaXaugpKp02nhvDF0`
};

request({
  url: buildGeocodeURL(args.address),
  json: true
}, (error, respponse, body) => {
  console.log(JSON.stringify(body, undefined, 2));
});
