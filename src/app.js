'use strict';

const minimist = require('minimist');

const { name, lastname, age } = minimist(process.argv.slice(2));

console.log(`${name} ${lastname} is ${age}`);// eslint-disable-line
