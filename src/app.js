'use strict';

const { name, lastName, age } = require('minimist')(process.argv.slice(2));

global.console.log(`${name} ${lastName} is ${age}`);
