/* eslint-disable no-console */
'use strict';

const { minimist } = require('minimist');

const argObj = minimist(process.argv.slice(2));

console.log(`${argObj.name} ${argObj.lastname} is ${argObj.age} `);
