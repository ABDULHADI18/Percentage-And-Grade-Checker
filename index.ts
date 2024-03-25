import chalk from "chalk"
import inquirer from "inquirer"

console.log(chalk.gray("WELCOME TO PERCENTAGE & GRADE CHECKER"));

const answer = await inquirer.prompt([
    {
        type: "number",
        name: "total_number",
        message: "Enter your total marks = ",
    },
    {
        type: "number",
        name: "obtained_marks",
        message: "Enter your obtained marks = ",
    },
]);


let percentage = Math.round(answer.obtained_marks/answer.total_number*100);

console.log(chalk.yellow(`You got ${percentage}%`));

if (percentage >= 90 && percentage <= 100) {
    console.log(chalk.green("You received an A+ grade"));
} else if (percentage >= 85 && percentage < 89) {
    console.log(chalk.green("You received an A grade"));
} else if (percentage >= 80 && percentage < 84) {
    console.log(chalk.green("You received an A- grade"));
} else if (percentage >= 75 && percentage < 79) {
    console.log(chalk.green("You received a B+ grade"));
} else if (percentage >= 70 && percentage < 74) {
    console.log(chalk.green("You received a B grade"));
} else if (percentage >= 65 && percentage < 69) {
    console.log(chalk.green("You received a C+ grade"));
} else if (percentage >= 60 && percentage < 64) {
    console.log(chalk.green("You received a C grade"));
} else if (percentage >= 55 && percentage < 59) {
    console.log(chalk.green("You received a D+ grade"));
} else if (percentage >= 50 && percentage < 54) {
    console.log(chalk.green("You received a D grade"));
} else if (percentage >= 40 && percentage < 49) {
    console.log(chalk.green("You received an E grade"));
} else if (percentage >= 0 && percentage < 39) {
    console.log(chalk.red("You received a F grade"));
} else {
    console.log(chalk.red("Please enter valid marks"));
}