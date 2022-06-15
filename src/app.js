/* eslint-disable no-console */
'use strict';

const minimist = require('minimist');

const makeString = values => {
  const filteredValues = values.filter(Boolean);

  return filteredValues.join(' ');
};

const params = minimist(process.argv.slice(2));
const { name, lastname, age } = params;

console.log(makeString([name, lastname, age ? `is ${age}` : '']));
