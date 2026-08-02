// Matrix operations
const readlineSync = require('readline-sync');

// Read a matrix from the user
function readMatrix(label, rows, cols) {
  const matrix = [];
  console.log(`\nEnter matrix ${label} (${rows} x ${cols}):`);
  for (let i = 0; i < rows; i++) {
    let row;
    // Keep asking until the row has exactly `cols` numbers.
    while (true) {
      row = readlineSync
        .question(`  Enter row ${i + 1}: `)
        .trim()
        .split(' ')
        .filter(x => x !== '')
        .map(Number);
 
      if (row.length !== cols || row.some(isNaN)) {
        console.log(`  Please enter exactly ${cols} numbers separated by spaces.`);
      } else {
        break;
      }
    }
    matrix.push(row);
  }
  return matrix;
}
 
// Prints a matrix in a neat, aligned grid.
function printMatrix(label, matrix) {
  console.log(`\n${label}:`);
 
  // Find the widest number so every column lines up.
  let maxWidth = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      maxWidth = Math.max(maxWidth, String(matrix[i][j]).length);
    }
  }
 
  for (let i = 0; i < matrix.length; i++) {
    let line = '';
    for (let j = 0; j < matrix[i].length; j++) {
      line += String(matrix[i][j]).padStart(maxWidth + 2);
    }
    console.log(line);
  }
}
 
// =============================================================================
// PART A — Transpose a Matrix
// =============================================================================
 
function transposeMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
 
  // Create an empty cols x rows matrix.
  const result = [];
  for (let i = 0; i < cols; i++) {
    result.push(new Array(rows).fill(0));
  }
 
  // result[j][i] = matrix[i][j]
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      result[j][i] = matrix[i][j];
    }
  }
 
  return result;
}
 
// =============================================================================
// PART B — Add Two Matrices
// =============================================================================
 
function addMatrices(a, b) {
  const rows = a.length;
  const cols = a[0].length;
 
  const result = [];
  for (let i = 0; i < rows; i++) {
    result.push(new Array(cols).fill(0));
  }
 
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      result[i][j] = a[i][j] + b[i][j];
    }
  }
 
  return result;
}
 
// =============================================================================
// PART C — Multiply Two Matrices
// =============================================================================
 
function multiplyMatrices(a, b) {
  const rowsA = a.length;
  const colsA = a[0].length;
  const colsB = b[0].length;
 
  // Result is rowsA x colsB, start filled with zeros.
  const result = [];
  for (let i = 0; i < rowsA; i++) {
    result.push(new Array(colsB).fill(0));
  }
 
  for (let i = 0; i < rowsA; i++) {
    for (let j = 0; j < colsB; j++) {
      let sum = 0;
      for (let k = 0; k < colsA; k++) {
        sum += a[i][k] * b[k][j];
      }
      result[i][j] = sum;
    }
  }
 
  return result;
}
 
// Reads a positive integer, re-prompting until valid.
function readPositiveInt(prompt) {
  while (true) {
    const value = Number(readlineSync.question(prompt));
    if (Number.isInteger(value) && value > 0) {
      return value;
    }
    console.log('  Please enter a positive whole number.');
  }
}
 
// =============================================================================
// MAIN PROGRAM
// =============================================================================
 
function main() {
  console.log('=============================================');
  console.log(' MATRIX OPERATIONS');
  console.log('=============================================');
 
  // ----- PART A: Transpose -----
  console.log('\n--- PART A: Transpose a Matrix ---');
  const rowsA = readPositiveInt('Enter number of rows: ');
  const colsA = readPositiveInt('Enter number of columns: ');
  const matrixA = readMatrix('A', rowsA, colsA);
 
  printMatrix('Original Matrix', matrixA);
  printMatrix('Transposed Matrix', transposeMatrix(matrixA));
 
  // ----- PART B: Addition -----
  console.log('\n--- PART B: Add Two Matrices ---');
  console.log(`Both matrices must be ${rowsA} x ${colsA}.`);
  const matrixB1 = readMatrix('B1', rowsA, colsA);
  const matrixB2 = readMatrix('B2', rowsA, colsA);
 
  printMatrix('Matrix B1', matrixB1);
  printMatrix('Matrix B2', matrixB2);
  printMatrix('Sum (B1 + B2)', addMatrices(matrixB1, matrixB2));
 
  // ----- PART C: Multiplication -----
  console.log('\n--- PART C: Multiply Two Matrices ---');
  console.log('Matrix C1 is M x N, Matrix C2 must be N x P.');
  const rowsC1 = readPositiveInt('Enter number of rows for C1 (M): ');
  const colsC1 = readPositiveInt('Enter number of columns for C1 (N): ');
  const matrixC1 = readMatrix('C1', rowsC1, colsC1);
 
  const rowsC2 = colsC1; // must match C1's column count
  const colsC2 = readPositiveInt('Enter number of columns for C2 (P): ');
  console.log(`(Matrix C2 will be read as ${rowsC2} x ${colsC2} to match C1's columns.)`);
  const matrixC2 = readMatrix('C2', rowsC2, colsC2);
 
  printMatrix('Matrix C1', matrixC1);
  printMatrix('Matrix C2', matrixC2);
  printMatrix('Product (C1 x C2)', multiplyMatrices(matrixC1, matrixC2));
 
  console.log('\nDone!');
}
 
main();
 


