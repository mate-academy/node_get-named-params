/* eslint-disable no-console */
'use strict';

const minimist = require('minimist');

const objOfParams = minimist(process.argv);
const { name, lastname, age } = objOfParams;

console.log(`${name} ${lastname} is ${age}`);
