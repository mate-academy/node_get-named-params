'use strict';

const minimist = require('minimist');

function printMessage(enteredData) {
  const { name, lastname, age } = minimist(enteredData);

  // eslint-disable-next-line no-console
  console.log(`${name} ${lastname} is ${age}`);
};

printMessage(process.argv);
