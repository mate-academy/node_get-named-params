'use strict';

const minimist = require('minimist');

const person = minimist(process.argv.slice(2));

// eslint-disable-next-line no-console
console.log(`${person.name} ${person.lastname} is ${person.age}`);
