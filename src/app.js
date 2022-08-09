/* eslint-disable no-console */
'use strict';

const minimist = require('minimist');

const { name, lastname, age } = minimist(process.argv);

console.log(`${name} ${lastname} is ${age}`);
