/* eslint-disable no-console */
'use strict';

const minimist = require('minimist');

const argvs = minimist(process.argv.slice(2));

const message = `${argvs.name} ${argvs.lastname} is ${argvs.age}`;

console.log(message);
