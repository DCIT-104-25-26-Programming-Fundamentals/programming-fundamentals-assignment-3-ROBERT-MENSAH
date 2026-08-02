// Simple calculator
function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    if (b === 0) {
        console.log("Error: Cannot divide by zero.");
        return null;
    }
}

function modulus(a, b) {
    if (b === 0) {
        console.log("Error: Cannot calculate modulus with zero.");
        return null;
    }
    return a % b;
}

function exponentiation(a, b) {
    return Math.pow(a, b);
}

const readline = require("readline-sync");

while (true) {
    console.log("\n============================================");
    console.log("       SIMPLE CALCULATOR");
    console.log("============================================");
    console.log(" 1. Addition");
    console.log(" 2. Subtraction");
    console.log(" 3. Multiplication");
    console.log(" 4. Division");
    console.log(" 5. Modulus");
    console.log(" 6. Exponentiation");
    console.log(" 7. Quit");

    const choice = Number(readline.question("Select an operation (1-7): "));

    if (!Number.isInteger(choice) || choice < 1 || choice > 7) {
        console.log("Invalid choice. Please select a number between 1 and 7.");
        continue;
    }

    if (choice === 7) {
        console.log("Goodbye!");
        break;
    }

    const num1 = parseFloat(readline.question("Enter first number: "));
    const num2 = parseFloat(readline.question("Enter second number: "));

    if (choice === 1) {
        const result = addition(num1, num2);
        console.log(`Result: ${num1} + ${num2} = ${result.toFixed(2)}`);
    } else if (choice === 2) {
        const result = subtraction(num1, num2);
        console.log(`Result: ${num1} - ${num2} = ${result.toFixed(2)}`);
    } else if (choice === 3) {
        const result = multiplication(num1, num2);
        console.log(`Result: ${num1} * ${num2} = ${result.toFixed(2)}`);
    } else if (choice === 4) {
        const result = division(num1, num2);
        if (result !== null) {
            console.log(`Result: ${num1} / ${num2} = ${result.toFixed(2)}`);
        }
    } else if (choice === 5) {
        const result = modulus(num1, num2);
        if (result !== null) {
            console.log(`Result: ${num1} % ${num2} = ${result.toFixed(2)}`);
        }
    } else if (choice === 6) {
        const result = exponentiation(num1, num2);
        console.log(`Result: ${num1} ** ${num2} = ${result.toFixed(2)}`);
    }
}



