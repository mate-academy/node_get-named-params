'use strict';

const minimist = require('minimist');

const { lastname, age, name } = minimist(process.argv);

// eslint-disable-next-line no-console
console.log(`${name} ${lastname} is ${age}`);
