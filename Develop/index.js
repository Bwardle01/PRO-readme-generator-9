// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// questions 


// TODO: Create an array of questions for user input
const questions = [
    inquirer
    .prompt([
    {
      type: 'input',
      message: 'What do you want your Readme title to be?',
      name: 'Title',
      default:'This is the title of my Readme.'
    },
    {
      type: 'input',
      message: 'Please enter your description of your Readme.',
      name: 'Description',
    },
    {
      type: 'input',
      message: 'Please add your installation instructions.',
      name: 'Installation',
    },
    {
      type: 'input',
      message: 'Please include your Usage Instructions.',
      name: 'Usage',
    },
    {
      type: 'input',
      message: 'Please add the Contribution Guidelines.',
      name: 'Contributing',
    },
    {
      type: 'input',
      message: 'Please add your Test Instructions.',
      name: 'Tests',
    },
    // come back to add the choice of licenses
    {
      type: 'list',
      message: 'Please choose what license you would like to use.',
      name: 'License',
      choices: ["1", "2","3"],
      default:["0"],
    },
    {
      type: 'input',
      message: 'What is your GitHub username?.',
      name: 'Questions',
    },
    // please reach out to my email with any additional questions 
    {
      type: 'input',
      message: 'What is your email?',
      name: 'Questions2',
    },

  ])
  // TODO: Create a function to write README file
  .then((data) => {
      const filename = 'Readme.md';
    fs.writeFile(filename, JSON.stringify(data, null,), (err) => err ? console.log("there was an error",err) : console.log("success"))})
];

// TODO: Create a function to initialize app
function init() {
  
}

// Function call to initialize app
init();
