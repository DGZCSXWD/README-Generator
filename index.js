const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "How to best descript your project?",
  },
  {
    type: "input",
    name: "installation",
    message: "How to install the application?",
  },
  {
    type: "input",
    name: "usage",
    message: "Please Provide usage information:",
  },
  {
    type: "input",
    name: "contributing",
    message: "How to make contribution?",
  },
  {
    type: "input",
    name: "tests",
    message: "Please provide test instructions:",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your application:",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "what is your email address?",
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log("README.md has been generated successfully!");
  });
}

function init() {
  inquirer.prompt(questions).then((data) => {
    const markdown = generateMarkdown(data);
    writeToFile("README.md", markdown);
  });
}

// Function call to initialize app
init();
