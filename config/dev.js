const minimist = require('minimist');

const ENV = minimist(process.argv.slice(2));

module.exports = ENV;