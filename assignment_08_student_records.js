// Student record system
const readlineSync = require('readline-sync');

let students = [];

// =============================================================================
// HELPER — Calculate the average of a scores array
// =============================================================================

function calculateAverage(scores) {
  const sum = scores.reduce((total, score) => total + score, 0);
  return sum / scores.length;
}

// =============================================================================
// FEATURE 1 — Add a Student
// =============================================================================

function addStudent() {
  const name = readlineSync.question('Student name: ').trim();

  if (name === '') {
    console.log('Error: Name cannot be empty.');
    return;
  }

  const id = Number(readlineSync.question('Student ID: '));
  if (!Number.isInteger(id)) {
    console.log('Error: ID must be a whole number.');
    return;
  }

  // Prevent duplicate IDs.
  if (students.some(student => student.id === id)) {
    console.log(`Error: A student with ID ${id} already exists.`);
    return;
  }

  const numScores = Number(readlineSync.question('How many scores? '));
  if (!Number.isInteger(numScores) || numScores <= 0) {
    console.log('Error: Number of scores must be a positive integer.');
    return;
  }

  const scores = [];
  for (let i = 0; i < numScores; i++) {
    let score;
    while (true) {
      score = Number(readlineSync.question(`Enter score ${i + 1}: `));
      if (isNaN(score)) {
        console.log('  Please enter a valid number.');
      } else {
        break;
      }
    }
    scores.push(score);
  }

  students.push({ name, id, scores });
  console.log(`Student "${name}" added successfully.`);
}

// =============================================================================
// FEATURE 2 — Display All Students
// =============================================================================

function displayAllStudents() {
  if (students.length === 0) {
    console.log('No students have been added yet.');
    return;
  }

  console.log('\nName                 ID          Scores               Average');
  console.log('-------------------------------------------------------------------');

  for (const student of students) {
    const average = calculateAverage(student.scores).toFixed(2);
    const namePart = student.name.padEnd(20);
    const idPart = String(student.id).padEnd(12);
    const scoresPart = student.scores.join(', ').padEnd(20);
    console.log(`${namePart} ${idPart} ${scoresPart} ${average}`);
  }
}

// =============================================================================
// FEATURE 3 — Calculate Average Score for a Specific Student
// =============================================================================

function calculateStudentAverage() {
  if (students.length === 0) {
    console.log('No students have been added yet.');
    return;
  }

  const id = Number(readlineSync.question('Enter student ID: '));
  const student = students.find(s => s.id === id);

  if (!student) {
    console.log(`Error: No student found with ID ${id}.`);
    return;
  }

  const average = calculateAverage(student.scores).toFixed(2);
  console.log(`${student.name}'s average score: ${average}`);
}

// =============================================================================
// MENU
// =============================================================================

function printMenu() {
  console.log('\n================================');
  console.log('   STUDENT RECORD SYSTEM MENU');
  console.log('================================');
  console.log('1. Add student');
  console.log('2. Display all students');
  console.log('3. Calculate average score');
  console.log('4. Quit');
}

// =============================================================================
// MAIN PROGRAM
// =============================================================================

function main() {
  let running = true;

  while (running) {
    printMenu();
    const choice = readlineSync.question('Enter your choice (1-4): ').trim();

    switch (choice) {
      case '1':
        addStudent();
        break;
      case '2':
        displayAllStudents();
        break;
      case '3':
        calculateStudentAverage();
        break;
      case '4':
        console.log('Goodbye!');
        running = false;
        break;
      default:
        console.log('Error: Please enter a number between 1 and 4.');
    }
  }
}

main();