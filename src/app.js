'use strict';

const minimist = require('minimist');

const object = minimist(process.argv.slice(2));

// eslint-disable-next-line no-console
console.log(`${object.name} ${object.lastname} is ${object.age}`);
