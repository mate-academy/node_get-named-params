/* eslint-disable no-console */
import minimist from 'minimist';

const { name, lastname, age } = minimist(process.argv);

console.log(`${name} ${lastname} is ${age}`);
