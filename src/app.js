'use strict';

const minimist = require('../node_modules/minimist/index');

const dotenv = require('../node_modules/dotenv/lib/main');

dotenv.config();

const { lastname, name, age } = minimist(process.argv.slice(2));

// eslint-disable-next-line no-console
console.log(`${name} ${lastname} is ${age}`);
