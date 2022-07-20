'use strict';

const minimist = require('minimist');

const params = minimist(process.argv.slice(2));

const lastname = params.lastname;
const name = params.name;
const age = params.age;

// eslint-disable-next-line no-console
console.log(`${name} ${lastname} is ${age}`);
