'use strict';

const minimist = require('minimist');

const personInfo = minimist(process.argv.slice(2));

// eslint-disable-next-line no-console
console.log(`${personInfo.name} ${personInfo.lastname} is ${personInfo.age}`);
