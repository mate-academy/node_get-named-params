'use strict';

const argv = require('minimist')(process.argv.slice(2));

// eslint-disable-next-line no-console
console.log(`${argv.name} ${argv.lastname} is ${argv.age}`);
