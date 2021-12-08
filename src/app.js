/* eslint-disable no-console */
'use strict';

const minimist = require('minimist');

const args = process.argv.slice(2);

const { name, lastname, age } = minimist(args);

console.log(`${name} ${lastname} is ${age}`);
