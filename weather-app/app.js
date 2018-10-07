const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode');
const weather = require('./weather');

const args = yargs
  .options({
    address: {
      describe: 'The address to look up for the weather',
      demand: true,
      alias: 'a'
    }
  })
  .argv;

geocode.getCoords(args.address).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});

weather.getWeather(37.8267,-122.4233).then((teperature) => {
  console.log(`Temperature is: ${temperature}`)
}).catch((error) => {
  console.log(error);
});
