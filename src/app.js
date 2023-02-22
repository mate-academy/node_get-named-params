/* eslint-disable no-console */
'use strict';

const minimist = require('minimist');

const namedParams = minimist(process.argv.slice(2));

const { name, lastname, age } = namedParams;

const message = `${name} ${lastname} is ${age}`;

console.log(message);
