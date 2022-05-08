'use strict';

const minimist = require('minimist');

const { lastname, age, name } = minimist(process.argv.slice(2));

// eslint-disable-next-line no-console
console.log(`${name} ${lastname} is ${age}`);
