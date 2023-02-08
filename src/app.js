'use strict';

const minimist = require('minimist');

const lastName = minimist(process.argv.slice(2)).lastname;
const age = minimist(process.argv.slice(2)).age;
const name = minimist(process.argv.slice(2)).name;

// eslint-disable-next-line no-console
console.log(`${name} ${lastName} is ${age}`);
