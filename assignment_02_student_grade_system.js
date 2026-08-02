// Student grade system

function getGrade(score) {
    if (score < 0 || score > 100) {
        return null;
    }
    if (score >= 80) {
        return "A";
    }
    if (score >= 70) {
        return "B";
    }
    if (score >= 60) {
        return "C";
    }
    if (score >= 50) {
        return "D";
    }
    return "F";
}
const readlineSync = require("readline-sync");
function main() {
    const score = readlineSync.questionInt("Enter student score (0-100): ");
    const grade = getGrade(score);
    if (grade === null) {
        console.log("Error: Score must be between 0 and 100.");
    } else {
        console.log(`Grade: ${grade}`);
    }
}
main();
