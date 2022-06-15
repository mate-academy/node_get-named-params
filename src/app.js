'use strict';

const minimist = require('minimist');

const getSentence = () => {
  const { name, lastname, age } = minimist(process.argv);

  // eslint-disable-next-line no-console
  console.log(`${name} ${lastname} is ${age}`);

  return "can't push this without tests";
};

module.exports = getSentence;
