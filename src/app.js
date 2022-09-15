/* eslint-disable no-console */
'use strict';

const minimist = require('minimist');

const args = minimist(process.argv.slice(2));

console.log(`${args.name} ${args.lastname} is ${args.age}`);
