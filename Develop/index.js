// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
        validate: (value) => { if (value) { return true } else { return `Please enter a project name.` } },
        // validate: (value) => value ? true :  `Please enter a project name.`  ,
    },
    {
        type: 'input',
        name: 'description',
        message: "Write a short description about your project.",
        validate: (value) => { if (value) { return true} else { return `Please enter a description of your project.`}},
    },
    {
        type: 'input',
        name: 'install',
        message: "What are the installation instructions for your project?",
        validate: (value) => { if (value) { return true} else { return `Please give instructions on how to install your project.`}},
    },
    {
        type: 'input',
        name: 'use',
        message: "What is the usage information for your project?",
        validate: (value) => { if (value) { return true} else { return `Please the usage information of the project.`}},
    },
    {
        type: 'input',
        name: 'contributions',
        message: "What are the contributing guidelines?",
    },
    {
        type: 'input',
        name: 'test',
        message: "What are the testing insturctions for your project?",
    },
    {
        type: 'list',
        name: 'badge',
        message: 'What license are you using for your project?',
        choices: ["Apache" , "MIT", "GitHub", "None"],
        // validate: (value) => { if (value) {return true} else {return `Please choose a license for your project.`}}
    },
    {
        type: 'input',
        name: 'github',
        message: "What is your Github username?",
        validate: (value) => { if (value) { return true} else { return `Please enter a github username.`}},
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email?",
        validate: (value) => { if (value) { return true} else { return `Please enter a valid email.`}},
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    data = generateMarkdown(data)
    fs.writeFile(fileName, data, (err) => 
    err ? console.log(err): console.log('You sucessfully created a Read.me file'),
    );
}

// TODO: Create a function to initialize app
function init() { 
    fileName = "README.md",
    inquirer
    .prompt(questions)
    .then((data) => {
        console.log(data, "data")
        writeToFile(fileName, data)
    })
}

// Function call to initialize app
init();
