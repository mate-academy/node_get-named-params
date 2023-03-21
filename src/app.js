'use strict';

const minimist = require('minimist');

const info = minimist(process.argv);

// eslint-disable-next-line no-console
console.log(`${info.name} ${info.lastname} is ${info.age}`);
