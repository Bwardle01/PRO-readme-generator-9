// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// questions 
// const generateReadme = require('./utils/generateMarkdown')
// const writeFileAsync = util.promisify(fs.writeFile);
// const api = require(api) This is for the badge and license api

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
      name: 'username',
    },
    {
      type: 'input',
      message: 'What is your email?',
      name: 'email',
    },
  ]);


function generateReadme(response) {
  const licenseInfo = response.license.split("");
  return`
  ![license linsenceInfo](${licenseInfo[1]})
  #${response.title}

  ## Table of Contents
  [Installation](#installation)
  [Usage](#Usage)
  [License](#license)
  [Contributing](#Contribruting)
  [Test](#Tests)
  [Questions](#Questions)

  ## Description
  ${response.Description}
  
  ## Installation
  ${response.Installation}
  
  ## Usage
  ${response.Usage}
  
  ## License
  ${response.License}
  
  ## Contributors
  ${response.Contributors}

  ##tests
  ${response.Tests}

  ##Questions
  *Please contact me there these options if you have any further questions.
  ${response.email}
  ${response.username}

`}

function askQuestions() {
  return inquirer.prompt(questions);
}

function init() {
  askQuestions().then((response) =>{
    fs.writeFile('./example/README.md', generateReadme(response), (err) => err ? console.error(err) : console.log("Readme generated!")
    )
  })
}

init(); 



 // TODO: Create a function to write README file
// TODO: Create a function to initialize app

// function that starts everthing.
// first function to call all other functions
// run prompt
// require for other js file
// Function call to initialize app

// async function init() {
//   try {
//       // Ask user questions and generate responses
//       const answers = await questions();
//       const generateContent = generateReadme(answers);
//       // Write new README.md to example directory
//       await writeFileAsync('./example/README.md', generateContent);
//       console.log('✔️  Successfully wrote to README.md');
//   }   catch(err) {
//       console.log(err);
//   }
// }
