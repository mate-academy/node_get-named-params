/* eslint-disable no-console */
'use strict';

const minimist = require('minimist');
const params = minimist(process.argv.slice(2));

console.log(`${params.name} ${params.lastname} is ${params.age}`);
