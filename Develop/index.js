// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');



// TODO: Create an array of questions for user input
const questions =
    ([
    {
      type: 'input',
      message: 'What do you want your Readme title to be?',
      name: 'Title',
      default:'This is the title of my Readme.',
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
    {
      type: 'list',
      message: 'Please choose what license you would like to use.',
      name: 'License',
      choices:  ['MIT', 'GPLv3', 'GPL'],
      default:["0"],
    },
    {
      type: 'input',
      message: 'What is your GitHub username?.',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What is your email?',
      name: 'email',
    },
  ]);


function generateReadme(response) {
  return`
  ${renderLicenseBadge(response)}
  

  # ${response.Title}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#Usage)
  - [License](#license)
  - [Contributing](#Contributing)
  - [Test](#Tests)
  - [Questions](#Questions)

  ## Description
  - ${response.Description}
  
  ## Installation
  - ${response.Installation}
  
  ## Usage
  - ${response.Usage}
  
  ## License
  - ${response.License}
  
  
  ## Contributing
  - ${response.Contributing}

  ## Tests
  - ${response.Tests}

  ## Questions
  - Please contact me there these options if you have any further questions.
  - ${response.email}
  - GitHub username: ${response.username}

`}

// function to call the prompt
function askQuestions() {
  return inquirer.prompt(questions);
}


// function to call the response questions to the readme.
function init() {
  askQuestions().then((response) =>{
    fs.writeFile('./example/README.md', generateReadme(response), (err) => err ? console.error(err) : console.log("Readme generated!")
    )
  })
}

// function to bring the license response and add a badge depending on what was chosen.
function renderLicenseBadge(response) {
  let licenseType = response.License; 
  let yourLicense = ''
  if(licenseType === 'MIT') {
    yourLicense = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
  } else if (licenseType === 'GPLv3') {
    yourLicense = '![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)'
  } else if (licenseType === 'GPL') {
    yourLicense = '![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)'
  } else {
    yourLicense = "N/A"
  }
  return yourLicense;
};

init(); 


// TODO: Create a function to write README file
// TODO: Create a function to initialize app
// function that starts everthing.
// first function to call all other functions
// run prompt
// require for other js file
// Function call to initialize app

