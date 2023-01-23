'use strict';

const minimist = require('minimist');

const args = minimist(process.argv.slice(2));

// eslint-disable-next-line no-console
console.log(`${args.name} ${args.lastname} is ${args.age}`);
