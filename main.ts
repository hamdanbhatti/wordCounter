#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let runAgain = true;

while (runAgain) {
   const choice = await inquirer.prompt({
      name: "option",
      type: "list",
      choices: ["Count Words", "Count Letters"],
      message: "What do you want to do?",
   });

   if (choice.option === "Count Words") {
      const userInput = await inquirer.prompt({
         name: "paragraph",
         type: "input",
         message: "Enter a paragraph to count words",
      });

      const wordCount = userInput.paragraph.split(" ").length;

      console.log(chalk.greenBright("============ Total Number of Words:"));
      console.log(chalk.magentaBright(`======= >> ${wordCount} << ========`));
   } else {
      const userInput = await inquirer.prompt({
         name: "paragraph",
         type: "input",
         message: "Enter a paragraph to count letters",
      });

      const letterCount = userInput.paragraph.replace(/\s/g, "").length;

      console.log(chalk.green("============= Total Number of Letters:"));
      console.log(chalk.magentaBright(`======== >> ${letterCount} << ========`));
   }

   const repeat = await inquirer.prompt({
      name: "again",
      type: "confirm",
      message: "Would you like to count again?",
   });

   if (repeat.again === false) {
      runAgain = false;
      console.log(
         chalk.yellow(
            `${chalk.redBright(
               "=".repeat(45)
            )}\n"Thank you for using this application!"`
         )
      );
      console.log(
         chalk.green("This Program Created By: Muhammad Hamdan Bhatti")
      );
   }
}
