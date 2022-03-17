'use strict';

const minimist = require('minimist');

const inputParams = minimist(process.argv.slice(2));

// eslint-disable-next-line no-console
console.log(
  `${inputParams.name} ${inputParams.lastname} is ${inputParams.age}`
);
