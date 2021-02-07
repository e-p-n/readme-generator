// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

const licenses = [
    'Apache License 2.0',
    'Boost Software License 1.0',
    'BSD 2-clause "Simplified" License',
    'BSD 3-clause "New" or "Revised" License',
    'Creative Commons Zero v1.0 Universal',
    'Eclipse Public License 2.0',
    'GNU General Public License v2.0',
    'GNU General Public License v3.0',
    'GNU Affero General Public License v3.0',
    'GNU Lesser General Public License v2.1',
    'MIT License',
    'Mozilla Public License 2.0',
    'The Unlicense',
    'None'
];


// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: projectInput => {
            if (projectInput) {
                return true;
            } else {
                console.log('Please supply your Github username.');
                return false;
            }
        }
    },    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: projectInput => {
            if (projectInput) {
                return true;
            } else {
                console.log('Please enter your email address.');
                return false;
            }
        }
    },    
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the project title.',
        validate: projectInput => {
            if (projectInput) {
                return true;
            } else {
                console.log('Please enter the project title.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'projectDesc',
        message: 'Please enter a project description.',
        validate: descInput => {
            if (descInput) {
                return true;
            } else {
                console.log('Please enter a project description.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'Please provide installation instructions.',
        validate: instInput => {
            if (instInput) {
                return true;
            } else {
                console.log('Please provide installation instructions.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usageInfo',
        message: 'Please provide usage information.',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please provide usage information.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines.',
        validate: contInput => {
            if (contInput) {
                return true;
            } else {
                console.log('Please provide contribution guidelines.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide test instructions.',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please provide test instructions.');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license',
        choices: licenses
    },
    {
        type: 'confirm',
        name: 'toc',
        message: 'Does your README require a Table of Contents?',
        default: true
    }
    
];


// TODO: Create a function to write README file
const writeToFile = (filename, data) => {
    return new Promise((resolve, reject) =>{
        fs.writeFile('./dist/'+filename, data, err=> {
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return
            }
            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);

}

// Function call to initialize app
init()
    .then(data => {
        return generateMarkdown(data);
    })
    .then(readmePage =>{
        return writeToFile('README.md', readmePage);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    });
