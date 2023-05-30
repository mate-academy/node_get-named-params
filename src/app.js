'use strict';

const args = process.argv.slice(2);

let name = 'John';
let lastname = 'Doe';
let age = 30;

args.forEach(arg => {
  const [paramName, paramValue] = arg.split('=');

  switch (paramName) {
    case '--name':
      name = paramValue;
      break;
    case '--lastname':
      lastname = paramValue;
      break;
    case '--age':
      age = paramValue;
      break;
    default:
      break;
  }
});

// eslint-disable-next-line no-console
console.log(`${name} ${lastname} is ${age}`);
