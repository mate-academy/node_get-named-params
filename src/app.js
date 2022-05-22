'use strict';

const minimist = require('minimist');

const { name, lastname, age } = minimist(process.argv.slice(2));

process.stdout.write(`${name} ${lastname} is ${age}`);
