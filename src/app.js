'use strict';

const dotenv = require('dotenv');
const minimist = require('minimist');

dotenv.config();

const user = minimist(process.argv);

const { name, lastname, age } = user;

/* eslint-disable no-console */
console.log(`${name} ${lastname} is ${age}`);
