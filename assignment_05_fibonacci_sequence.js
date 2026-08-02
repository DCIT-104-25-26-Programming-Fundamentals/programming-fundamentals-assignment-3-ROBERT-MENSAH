// Fibonacci sequence
const readlineSync = require('readline-sync');

function printFirstNTerms(n) {
  if (!Number.isInteger(n) || n <= 0) {
    console.log('Error: N must be a positive integer.');
    return;
  }

  const sequence = [];
  let a = 0;
  let b = 1;

  for (let i = 0; i < n; i++) {
    sequence.push(a);
    const next = a + b;
    a = b;
    b = next;
  }

  console.log('Fibonacci sequence: ' + sequence.join(' '));
}

// =============================================================================
// PART B — Check if a Number Belongs to the Sequence
// =============================================================================

function isFibonacciNumber(num) {
  // Negative numbers are never in the sequence.
  if (num < 0) {
    return false;
  }

  // Generate Fibonacci numbers with a loop until we reach or pass num.
  let a = 0;
  let b = 1;

  if (num === a) {
    return true;
  }

  while (b <= num) {
    if (b === num) {
      return true;
    }
    const next = a + b;
    a = b;
    b = next;
  }

  return false;
}

// =============================================================================
// MAIN PROGRAM
// =============================================================================

function main() {
  console.log('=============================================');
  console.log(' FIBONACCI SEQUENCE GENERATOR');
  console.log('=============================================');

  // ----- PART A -----
  console.log('\n--- PART A: Print the First N Terms ---');
  const n = Number(readlineSync.question('How many terms? '));
  printFirstNTerms(n);

  // ----- PART B -----
  console.log('\n--- PART B: Check if a Number Belongs to the Sequence ---');
  const num = Number(readlineSync.question('Enter a number to check: '));

  if (isNaN(num)) {
    console.log('Error: Please enter a valid number.');
  } else if (isFibonacciNumber(num)) {
    console.log(`${num} is a Fibonacci number.`);
  } else {
    console.log(`${num} is NOT a Fibonacci number.`);
  }

  console.log('\nDone!');
}

main();