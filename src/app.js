'use strict';
/* eslint-disable no-console */

const minimist = require('minimist');

const params = minimist(process.argv.slice(2));

console.log(`${params.name} ${params.lastname} is ${params.age}`);
