'use strict';

const minimist = require('minimist');

const { name, lastname, age } = minimist(process.argv.slice(2));

// eslint-disable-next-line
console.log(`${name} ${lastname} is ${age}`);
