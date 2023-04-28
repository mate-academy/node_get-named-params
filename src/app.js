'use strict';

const minimist = require('minimist');

const args = minimist(process.argv.slice(2));

const { name, lastname, age } = args;

//
// eslint-disable-next-line no-console
console.log(`${name} ${lastname} is ${age}`);
