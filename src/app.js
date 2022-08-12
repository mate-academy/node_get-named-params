'use strict';

const minimist = require('minimist');

const userData = minimist(process.argv.slice(2));

function printUserInfo(userInfo) {
  return `${userInfo.name} ${userInfo.lastname} is ${userInfo.age}`;
}

// eslint-disable-next-line no-console
console.log(printUserInfo(userData));
