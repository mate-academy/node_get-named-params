'use strict';

const minimist = require('minimist');

const { name, lastname, age } = minimist(process.argv);

// eslint-disable-next-line no-console
console.log(`${name} ${lastname} is ${age}`);
