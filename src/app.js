'use strict';

const minimist = require('minimist');

const inputValues = process.argv.slice(2);
const { name, lastname, age } = minimist(inputValues);

function printMessage() {
  return `${name} ${lastname} is ${age}`;
}

if (inputValues.length) {
  return printMessage();
}
