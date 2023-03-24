'use strict';

import minimist from 'minimist';

const params = minimist(process.argv.slice(2));
const user = `${params['name']} ${params['lastname']} is ${params['age']}`
console.log(user);
