#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\tNumber Guessing Game\n");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessesNumber",
        type: "number",
        message: "Enter your guess number (Number Limit from 1 to 5)",
    },
]);
if (answer.userGuessesNumber === randomNumber) {
    console.log("Congratulation ! You guess a correct number.");
}
else {
    console.log("Sorry you guess a wrong number");
}
