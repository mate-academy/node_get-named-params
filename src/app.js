'use strict';

const argv = require('minimist')(process.argv.slice(2));


process.stdout.write(`${argv.name} ${argv.lastname} is ${argv.age}`);
