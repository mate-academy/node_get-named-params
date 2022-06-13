'use strict';

const arg = require('minimist')(process.argv.slice(2));

const { name, lastname, age } = arg;

// eslint-disable-next-line no-console
console.log(`${name} ${lastname} is ${age}`);
