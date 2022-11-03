/* eslint-disable no-console */
'use strict';

console.log(process.argv.slice(2));

nativeMethod();

function nativeMethod() {
  let age;
  let userName;
  let lastname;

  for (const item of process.argv.slice(2)) {
    if (item.includes('age')) {
      age = item.slice(item.indexOf('age=') + 4);
    }

    if (item.includes('-name')) {
      userName = item.slice(item.indexOf('name=') + 5);
    }

    if (item.includes('lastname')) {
      lastname = item.slice(item.indexOf('lastname=') + 9);
    }
  }

  console.log(`${userName} ${lastname} is ${age}`);
}

// - `src/app.js --age=25 --name=Jonh --lastname=Galt` prints `John Galt is 25`
