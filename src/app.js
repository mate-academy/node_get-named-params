'use strict';

const minimist = require('minimist');

const func = () => {
  const obj = minimist(process.argv.slice(2));

  return `${obj.name} ${obj.lastname} is ${obj.age}`;
};

func();
