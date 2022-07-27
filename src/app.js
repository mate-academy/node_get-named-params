'use strict';

const arrayInput = process.argv.slice(2);

const [lastname, age, name] = arrayInput;

// eslint-disable-next-line no-console
console.log(`${name} ${lastname} is ${age}`);
