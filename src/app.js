/* eslint-disable no-console */
'use strict';

const minimist = require('minimist');

const person = minimist(process.argv.slice(2));

console.log(`${person.name} ${person.lastname} is ${person.age}`);
