'use strict';

const readline = require('readline');
const minimist = require('minimist');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const { name, lastname, age } = minimist(process.argv.slice(2));

terminal.write(`${name} ${lastname} is ${age} \n`);
terminal.close();
