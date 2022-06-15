'use strict';

const minimist = require('minimist');
const { lastname, name, age } = minimist(process.argv.slice(2));

process.stdout.write(`${name} ${lastname} is ${age}`);
