'use strict';

import minimist from 'minimist';
import dotenv from 'dotenv';

dotenv.config();

const { lastname, name, age } = minimist(process.argv.slice(2));

console.log(`${name} ${lastname} is ${age}`);
