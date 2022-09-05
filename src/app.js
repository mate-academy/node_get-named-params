'use strict';

const minimist = require('minimist');

const handleInput = (input) => {
  const { lastname, age, name } = minimist(input);

  // eslint-disable-next-line no-console
  console.log(`${name} ${lastname} is ${age}`);
};

handleInput(process.argv.slice(2));
