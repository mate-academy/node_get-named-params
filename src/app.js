'use strict';

const minimist = require('minimist');
// eslint-disable-next-line no-console
const log = console.log;

const { name = '', lastname = '', age = '' } = minimist(process.argv.slice(2));

if (!name || !lastname || !age) {
  log('Define all necessary params!');

  process.exit();
}

log(`${name} ${lastname} is ${age}`);
