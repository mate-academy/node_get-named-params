/* eslint-disable no-console */
'use strict';

const minimist = require('minimist');

const { age, lastname, name } = minimist(process.argv.slice(2));

console.log(`${name} ${lastname} is ${age}`);
