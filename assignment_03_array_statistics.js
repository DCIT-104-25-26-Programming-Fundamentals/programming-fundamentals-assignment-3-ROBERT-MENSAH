// Array statistics
const readlineSync = require('readline-sync');

function calculateSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// -----------------------------------------------------------------------------
// FUNCTION: calculateAverage
// -----------------------------------------------------------------------------
function calculateAverage(numbers) {
  const sum = calculateSum(numbers);
  return sum / numbers.length;
}

// -----------------------------------------------------------------------------
// FUNCTION: findMaximum
// -----------------------------------------------------------------------------
function findMaximum(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

// -----------------------------------------------------------------------------
// FUNCTION: findMinimum
// -----------------------------------------------------------------------------
function findMinimum(numbers) {
  let min = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  return min;
}

// -----------------------------------------------------------------------------
// FUNCTION: main
// -----------------------------------------------------------------------------
function main() {
  const n = readlineSync.questionInt("How many numbers? ");

  if (n <= 0) {
    console.log("Error: please enter a positive integer.");
    return;
  }

  const numbers = [];
  for (let i = 0; i < n; i++) {
    const value = readlineSync.questionInt(`Enter number ${i + 1}: `);
    numbers.push(value);
  }

  const sum = calculateSum(numbers);
  const average = calculateAverage(numbers);
  const maximum = findMaximum(numbers);
  const minimum = findMinimum(numbers);

  console.log("\nResults:");
  console.log(`Sum:     ${sum}`);
  console.log(`Average: ${average}`);
  console.log(`Maximum: ${maximum}`);
  console.log(`Minimum: ${minimum}`);
}

main();