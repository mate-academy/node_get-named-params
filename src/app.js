'use strict';

function parseArguments() {
  const result = {};

  for (const arg of process.argv.slice(2)) {
    if (arg.substring(0, 2) === '--') {
      const [key, value] = arg.substring(2).split('=');

      result[key] = value;
    }
  }

  return result;
}

const args = parseArguments();

const message = `${args['name']} ${args['lastname']} is ${args['age']}`;

message.toString();
