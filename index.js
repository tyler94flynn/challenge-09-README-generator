//Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');


//Array of questions for user input
//Includes description, installation instructions, usage information, contribution guidelines, and test instructions
const questions = [
    {
		type: 'input',
		name: 'title',
		message: 'What is the title of your project?\n',
	},
	{
		type: 'input',
		name: 'description',
		message: 'Briefly describe the project.\n',
	},
	{
		type: 'input',
		name: 'installation',
		message: 'What are the installation instructions for this project?\n',
	},
	{
		type: 'input',
		name: 'usage',
		message: 'How do you use this project?\n',
	},
	{
		type: 'list',
		name: 'license',
		message: 'Which license do you want to use?\n',
		choices: ['MIT', 'Apache 2.0', 'GPLv2', 'GPLv3', 'BSD 2-clause', 'BSD 3-clause'],
	},
	{
		type: 'input',
		name: 'contributors',
		message: 'Who are the contributors on this project?\n',
	},
	{
		type: 'input',
		name: 'tests',
		message: 'What are the test instructions for the project?\n',
	},
	{
		type: 'input',
		name: 'questions',
		message: 'What questions do you want answered about the project?\n',
	},
	{
		type: 'input',
		name: 'github',
		message: 'Enter the github username you\'d like to use for this project.\n',
	},
	{
		type: 'input',
		name: 'email',
		message: 'Enter your email address.\n',
	}
];

//Write to the README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        error 
        ? console.log(error) 
        : console.log('Check out your README!')
    })
};

//Function to initialize app
function init() {
    inquirer
	.prompt(questions)
	.then(res => {
		writeToFile('./utils/README.md', generateMarkdown(res));
	});
}

//Call function to initialize app
init();
