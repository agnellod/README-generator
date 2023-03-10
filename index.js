// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown')
// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
        type: "input",
        name: "projectTitle",
        message: "What is the project title?",
    },
    {
        type: "input",
        name: "description",
        message: "Write a brief description of your project: "
    },
    {
        type: "input",
        name: "installation",
        message: "Describe the installation process if any: ",
    },
    {
        type: "input",
        name: "usage",
        message: "What is this project usage for?"
    },
    {
        type: "list",
        name: "license",
        message: "Chose the appropriate license for this project: ",
        choices: [
            "Apache",
            "GNU",
            "MIT",
            "Mozilla",
        ]
    },
    {
        type: "input",
        name: "screenShot",
        message: "please enter realtive path for your screen shot."
    },
    {
        type: "input",
        name: "tests",
        message: "Is there a test included?"
    },
    {
        type: "input",
        name: "questions",
        message: "What do I do if I have an issue? "
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your GitHub username: "
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email: "
    }
])
.then((answers) => {
    let projectTitle = answers.projectTitle
    // let description = answers.description
    fs.writeFile('README.md', generateMarkdown(answers), (err) =>
      err ? console.log(err) : console.log('Successfully created README!')
    );
    console.log(projectTitle)
  });
