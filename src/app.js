/* eslint-disable no-console */
'use strict';

const minimist = require('minimist');
const args = process.argv.splice(2);
const { name, lastName, age } = minimist(args);

console.log(`${name} ${lastName} is ${age}`);
