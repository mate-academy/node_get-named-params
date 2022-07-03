/* eslint-disable no-console */
'use strict';

const minimist = require('minimist');
const { name, age, lastname } = minimist(process.argv);

console.log(`${name} ${lastname} is ${age}`);
