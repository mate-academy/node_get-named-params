'use strict';

const minimist = require('minimist');

const params = minimist(process.argv.slice(2));

const { lastname, name, age } = params;

process.stdout.write(`${name} ${lastname} is ${age}`);
