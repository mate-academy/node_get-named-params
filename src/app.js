'use strict';
import minimist from "minimist"

const { lastname, name, age } = minimist(process.argv.slice(2));
console.log(`${name} ${lastname} is ${age}`);
