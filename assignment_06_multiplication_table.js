// Multiplication table generator
const readlineSync = require('readline-sync');

// =============================================================================
// PART A — Single Table
// =============================================================================

function printTable(num) {
  console.log(`Multiplication Table for ${num}:`);

  // Widest product determines how much padding the results need
  // (12 is the largest multiplier, so num * 12 is always the widest result).
  const resultWidth = String(num * 12).length;

  for (let i = 1; i <= 12; i++) {
    const product = num * i;
    const multiplierStr = String(i).padStart(2);
    const productStr = String(product).padStart(resultWidth);
    console.log(`${num}  x  ${multiplierStr}  =  ${productStr}`);
  }
}

// =============================================================================
// PART B — Bonus: Tables from 1 to N
// =============================================================================

function printTablesUpToN(n) {
  if (!Number.isInteger(n) || n <= 0) {
    console.log('Error: N must be a positive integer.');
    return;
  }

  for (let num = 1; num <= n; num++) {
    printTable(num);
    if (num < n) {
      console.log('---------------------------');
    }
  }
}

// =============================================================================
// MAIN PROGRAM
// =============================================================================

function main() {
  console.log('=============================================');
  console.log(' MULTIPLICATION TABLE GENERATOR');
  console.log('=============================================');

  // ----- PART A -----
  console.log('\n--- PART A: Single Table ---');
  const num = Number(readlineSync.question('Enter a number: '));

  if (!Number.isInteger(num)) {
    console.log('Error: Please enter a valid integer.');
  } else {
    printTable(num);
  }

  // ----- PART B -----
  console.log('\n--- PART B: Tables from 1 to N ---');
  const n = Number(readlineSync.question('Enter N: '));
  printTablesUpToN(n);

  console.log('\nDone!');
}

main();