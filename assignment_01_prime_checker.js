// Prime number checker
const readlineSync = require('readline-sync');

function isPrime(num) {
  if (num < 2) {
    return false;
  }

  if (num === 2) {
    return true;
  }

  if (num % 2 === 0) {
    return false;
  }

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function main() {
  const num = readlineSync.questionInt("Enter a number: ");

  if (isPrime(num)) {
    console.log(`${num} is a prime number.`);
  } else {
    console.log(`${num} is NOT a prime number.`);
  }
}

main();

