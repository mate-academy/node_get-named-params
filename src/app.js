'use strict';

const minimist = require('../node_modules/minimist');

function readParams(data) {
  const { lastname, name, age } = data;

  return `${name} ${lastname} is ${age}`;
}

const dataFromCommandLine = minimist(process.argv);

// eslint-disable-next-line no-console
console.log(
  readParams(dataFromCommandLine)
);
