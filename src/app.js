'use strict';

const minimist = require('minimist');

function printUserInfo(values) {
  /* eslint no-console: 0 */
  console.log(`${values.name} ${values.lastname} is ${values.age}`);
};

printUserInfo(minimist(process.argv.slice(2)));
