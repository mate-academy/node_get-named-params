/* eslint-disable no-console */
'use strict';
import minimist from 'minimist';

const inputParams = minimist(process.argv.slice(2));

console.log(
  `${inputParams.name} ${inputParams.lastname} is ${inputParams.age}`
);
