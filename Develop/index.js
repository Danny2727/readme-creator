// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    inquirer
        .prompt([{
            type: 'input',
            name: 'project',
            message: 'What is the name of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: "Write a short description about your project.",
        },
        {
            type: 'input',
            name: 'installation',
            message: "What are the installation instructions for your project?",
        },
        {
            type: 'input',
            name: 'usage',
            message: "What is the uasge information for your project?",
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
            type: 'checkbox',
            name: 'badge',
            message: 'What license are you using for your project?',
            choices: ['Html'],
        },
        {
            type: 'input',
            name: 'username',
            message: "What is your Github username?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your email?",
        },
        ])
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
