'use strict';

// =Solution:
// import parseArgs from 'minimist';
const parseArgs = require('minimist');

function getNames({name, lastname, age}) {
  return `${name} ${lastname} is ${age}`;
}

const args = parseArgs(process.argv.slice(2));

console.log(getNames(args));
