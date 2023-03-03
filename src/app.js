/* eslint-disable no-console */
'use strict';

const inputs = process.argv.slice(2);

let first;
let last;
let age;

inputs.forEach(element => {
  switch (true) {
    case element.includes('lastname'):
      last = element.split('=')[1];
      break;
    case element.includes('name'):
      first = element.split('=')[1];
      break;
    case element.includes('age'):
      age = element.split('=')[1];
  }
});

console.log(`${first} ${last} is ${age}`);
