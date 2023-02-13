'use strict';

const minimist = require('minimist');
const info = minimist(process.argv.slice(2));
const { name, lastname, age } = info;

// eslint-disable-next-line no-console
console.log(`${name} ${lastname} is ${age}`);
