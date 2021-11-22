'use strict';

const LASTNAME = 'lastname';
const NAME = 'name';
const AGE = 'age';

const params = Object.values(process.argv.slice(2)).flat();

let lastname;
let name;
let age;

for (const param of params) {
  const indexOfEquals = param.indexOf('=');
  const key = param.slice(2, indexOfEquals);
  const value = param.slice(indexOfEquals + 1);

  switch(key) {
    case LASTNAME:
      lastname = value;
      break;

    case NAME:
      name = value;
      break;

    case AGE:
      age = value;
      break;

    default:
      throw new Error('Please check the input data');
  }
}

return `${name} ${lastname} is ${age}`;
