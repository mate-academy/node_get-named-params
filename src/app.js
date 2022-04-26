'use strict';
const minimist = require('minimist');

function sayHi(data) {
  const name = data.name ? (data.name) : ('');
  const lastname = data.lastname ? (data.lastname) : ('');
  const age = data.age ? (data.age) : ('old');

  return `${name} ${lastname} is ${age}`;
};

const params = minimist(process.argv.slice(2));

sayHi(params);
