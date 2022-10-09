'use strict';

const minimist = require('minimist');

const user = minimist(process.argv.slice(2));

const result = `${user['name']} ${user['lastname']} ${user['age']}`;

console.log(result);


