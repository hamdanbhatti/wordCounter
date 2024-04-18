#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Word Counter
const userInput = await inquirer.prompt([
    {
        name: "paragraph",
        type: "input",
        message: "Enter a paragraph to count words",
    },
]);
const paraInput = userInput.paragraph;
// For Counting Words in letter
const letterWithoutSpace = paraInput.replace(/\s/g, "");
const letterCount = letterWithoutSpace.length;
console.log(chalk.blueBright("Total Number of Words in the paragraph is: ") + chalk.red(letterCount));
// For Counting Words in word
const wordCount = paraInput.split(" ").length;
console.log(chalk.blueBright("Total Number of Words in the paragraph is: ") + chalk.red(wordCount));
