/* eslint-disable no-console */
'use strict';

const minimist = require('minimist');

const result = minimist(process.argv.slice(2));

console.log(`${result.name} ${result.lastname} is ${result.age}`);
