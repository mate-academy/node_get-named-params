
import dotenv from 'dotenv';
import minimist from 'minimist';

getNamedParams();

function getNamedParams() {
  dotenv.config();

  const data = minimist(process.argv.slice(2));

  console.log(`${data.name} ${data.lastname} is ${data.age}`);
}
