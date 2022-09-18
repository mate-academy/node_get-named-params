/* eslint-disable no-console */
'use strict';

const minimist = require('minimist');

const { name, lastname, age } = minimist(process.argv.slice(2));

const validValue = (value, nameOfValue) =>
  value || `<Please enter your ${nameOfValue}>`;

console.log(
  `${
    validValue(name, 'name')
  } ${
    validValue(lastname, 'last name')
  } is ${
    validValue(age, 'age')
  }`
);
