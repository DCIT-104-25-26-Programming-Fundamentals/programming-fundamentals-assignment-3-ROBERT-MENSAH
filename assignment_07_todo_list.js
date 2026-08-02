// To-do list program
const readlineSync = require('readline-sync');

let tasks = [];

// =============================================================================
// FEATURE 1 — Add a Task
// =============================================================================

function addTask() {
  const description = readlineSync.question('Enter task: ').trim();

  if (description === '') {
    console.log('Error: Task description cannot be empty.');
    return;
  }

  tasks.push(description);
  console.log(`Task added: "${description}"`);
}

// =============================================================================
// FEATURE 2 — View All Tasks
// =============================================================================

function viewTasks() {
  if (tasks.length === 0) {
    console.log('Your to-do list is empty. Add a task to get started!');
    return;
  }

  console.log('Your Tasks:');
  for (let i = 0; i < tasks.length; i++) {
    console.log(`${i + 1}. ${tasks[i]}`);
  }
}

// =============================================================================
// FEATURE 3 — Delete a Task
// =============================================================================

function deleteTask() {
  if (tasks.length === 0) {
    console.log('There are no tasks to delete.');
    return;
  }

  viewTasks();
  const choice = Number(readlineSync.question('Enter task number to delete: '));
  const index = choice - 1;

  if (!Number.isInteger(choice) || index < 0 || index >= tasks.length) {
    console.log('Error: Invalid task number.');
    return;
  }

  const removed = tasks[index];
  tasks.splice(index, 1);
  console.log(`Task "${removed}" has been removed.`);
}

// =============================================================================
// MENU
// =============================================================================

function printMenu() {
  console.log('\n============================');
  console.log('     TO-DO LIST MENU');
  console.log('============================');
  console.log('1. Add task');
  console.log('2. View tasks');
  console.log('3. Delete task');
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
        addTask();
        break;
      case '2':
        viewTasks();
        break;
      case '3':
        deleteTask();
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