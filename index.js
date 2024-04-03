#! /usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will generate a random number
// 2) User input for guessing number
// 3) Compare user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please Guess the Number:",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations! you guessed the right number.");
}
else {
    console.log("You Guessed the wrong number");
}
