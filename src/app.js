'use strict';

const minimist = require('minimist');

const introduce = ({ age, name, lastname }) => (
  `${name} ${lastname} is ${age}`
);

console.log(
  introduce(minimist(process.argv))
);
