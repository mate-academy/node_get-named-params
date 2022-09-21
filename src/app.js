/* eslint-disable no-console */
'use strict';

const minimist = require('minimist');

const option = minimist(process.argv.slice(2));

console.log(`${option.name} ${option.lastname} is ${option.age}`);
