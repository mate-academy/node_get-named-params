/* eslint-disable no-console */
'use strict';

const minimist = require('minimist');

const terminal = minimist(process.argv.slice(2));

console.log(`${terminal.name} ${terminal.lastname} is ${terminal.age}`);

nativeMethod();

function nativeMethod() {
  // work only in case if variable '--name=10'
  let age;
  let userName;
  let lastname;

  for (const item of process.argv.slice(2)) {
    if (item.includes('age')) {
      age = item.slice(item.indexOf('age') + 4);
    }

    if (item.includes('-name')) {
      userName = item.slice(item.indexOf('name') + 5);
    }

    if (item.includes('lastname')) {
      lastname = item.slice(item.indexOf('lastname') + 9);
    }
  }

  console.log(`${userName} ${lastname} is ${age}`);
}
