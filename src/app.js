'use strict';

const minimist = require('minimist');

const user = minimist(process.argv.slice(2));

return `${user.name} ${user.lastname} is ${user.age}`;
