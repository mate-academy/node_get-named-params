/* eslint-disable no-console */
'use strict';

const minimist = require('minimist');

const userData = minimist(process.argv.splice(2));
const { name, lastname, age } = userData;

console.log(`${name} ${lastname} is ${age}`);
