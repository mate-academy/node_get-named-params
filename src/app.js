'use strict';

const minimist = require('minimist');

const params = minimist(process.argv.slice(2));
// eslint-disable-next-line
console.log(`${params.name} ${params.lastname} is ${params.age}`);
