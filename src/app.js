/* eslint-disable no-console */
import minimist from 'minimist';

const params = minimist(process.argv.slice(2));
const { age, name, lastname } = params;

console.log(`${name} ${lastname} is ${age}`);
