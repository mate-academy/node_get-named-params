'use strict';

const { name, lastname, age } = require('minimist')(process.argv);

console.log(`${name} ${lastname} is ${age}`);
