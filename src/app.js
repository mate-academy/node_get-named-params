/* eslint-disable max-len */
/* eslint-disable no-console */
'use strict';

// src/app.js
const argv = require('minimist')(process.argv.slice(2));

const { name, lastname, age } = argv;

if (name && lastname && age) {
  console.log(`${name} ${lastname} is ${age}`);
} else {
  console.log('Invalid or incomplete arguments. Usage: node src/app.js --name=<name> --lastname=<lastname> --age=<age>');
}
