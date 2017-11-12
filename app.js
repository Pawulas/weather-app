const geocode = require('./geocode/geocode');
const yargs = require('yargs');

const argv = yargs
.options({
  a: {
    demand: true,
    alias: 'address',
    describe: 'Address to fetxh weather for',
    string: true
  }
})
.help()
.alias('help', 'h')
.argv;

console.log(argv['a']);
const encodedAddress = encodeURIComponent(argv['a']);

geocode.geocodeAddress(encodedAddress).then((data) => {
  console.log(JSON.stringify(data, null, 2));
});

