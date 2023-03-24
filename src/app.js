'use strict';

const minimist = require('minimist');

const params = minimist(process.argv.slice(2));
const user = `${params['name']} ${params['lastname']} is ${params['age']}`;

// eslint-disable-next-line no-console
console.log(user);
