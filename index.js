// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
    'What should the title of your README be?',
    'Provide a short description explaining the what, why, and how of your project.',
    'Is your README long enough for a table of contents?',
    'How is your project installed?',
    'How should it be used?',
    'What license did you use?',
    'What guidelines should those interested in contributing follow?',
    'How should it be tested?',
    'What is your github username?',
    'What is an email people can use to ask you questions about your project?'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    inquirer
        .prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'title'
        },
        {
            type: 'input',
            message: questions[1],
            name: 'projectDescription',
        },
        {
            type: 'confirm',
            message: questions[2],
            name: 'tableOfContents'
        },
        {
            type: 'input',
            message: questions[3],
            name: 'installation'
        },
        {
            type: 'input',
            message: questions[4],
            name: 'usage'
        },
        {
            type: 'list',
            message: questions[5],
            choices: [
                'Apache License 2.0', new inquirer.Separator(),
                'GNU General Public License v3.0', new inquirer.Separator(),
                'MIT License', new inquirer.Separator(),
                'BSD 2-Clause "Simplified" License'
             ],
            name: 'license'
        },
        {
            type: 'input',
            message: questions[6],
            name: 'contribution'
        },
        {
            type: 'How should it be tested?',
            message: questions[7],
            name: 'testing'
        },
        {
            type: 'input',
            message: questions[8],
            name: 'github'
        },
        {
            type: 'input',
            message: questions[9],
            name: 'email'
        }
        ])
        .then((response) => 
        fs.appendFile('professionalREADME2.md', generateMarkdown(response), (err) => {
            if (err) throw err;
            console.log('Your professional README file has been created!')
        }));
};
writeToFile();
// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();