'use strict';

const minimist = require('minimist');

const introduce = ({ age, name, lastname }) => (
  `${name} ${lastname} is ${age}`
);

// eslint-disable-next-line no-console
console.log(
  introduce(minimist(process.argv))
);
