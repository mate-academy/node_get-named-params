'use strict';

const minimist = require('minimist');

const { lastname, age, name } = minimist(process.argv.slice(2));

console.log(`${name} ${lastname} is ${age}`);
