/* eslint-disable no-console */
'use strict';

const minimist = require('minimist');

const targetInfo = minimist(process.argv.slice(2));

console.log(`${targetInfo.name} ${targetInfo.lastname} is ${targetInfo.age}`);
