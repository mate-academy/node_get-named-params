'use strict';

const minimist = require('minimist');
const user = minimist(process.argv.slice(2));
const { name, lastname, age } = user;

// eslint-disable-next-line no-console
console.log(`${name} ${lastname} is ${age}`);
