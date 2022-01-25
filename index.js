const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

console.log(yargs(hideBin(process.argv)).argv);