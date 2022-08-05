/* eslint-disable no-console */
'use strict';

const argv = require('minimist')(process.argv.slice(2));

console.log(`${argv.name} ${argv.lastname} is ${argv.age}`);
