const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode');

const args = yargs
  .options({
    address: {
      describe: 'The address to look up for the weather',
      demand: true,
      alias: 'a'
    }
  })
  .argv;

geocode.getCoords(args.address, (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
})
