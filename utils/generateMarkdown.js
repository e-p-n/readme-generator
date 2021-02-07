const licenses = [
  {
    license: 'Apache License 2.0', 
    badgeRef: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]',
    licenseUrl: 'https://opensource.org/licenses/Apache-2.0'
  },
  {
    license: 'Boost Software License 1.0', 
    badgeRef: '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)]',
    licenseUrl: 'https://www.boost.org/LICENSE_1_0.txt'
  },
  {
    license: 'BSD 2-clause "Simplified" License', 
    badgeRef: '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)]',
    licenseUrl: 'https://opensource.org/licenses/BSD-2-Clause'
  },
  {
    license: 'BSD 3-clause "New" or "Revised" License', 
    badgeRef: '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]',
    licenseUrl: 'https://opensource.org/licenses/BSD-3-Clause'
  },
  {
    license: 'Creative Commons Zero v1.0 Universal', 
    badgeRef: '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)]',
    licenseUrl: 'http://creativecommons.org/publicdomain/zero/1.0/'
  },
  {
    license: 'Eclipse Public License 2.0', 
    badgeRef: '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)]',
    licenseUrl: 'https://opensource.org/licenses/EPL-1.0'
  },
  {
    license: 'GNU General Public License v2.0', 
    badgeRef: '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)]',
    licenseUrl: 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'
  },
  {
    license: 'GNU General Public License v3.0', 
    badgeRef: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]',
    licenseUrl: 'https://www.gnu.org/licenses/gpl-3.0'
  },
  {
    license: 'GNU Affero General Public License v3.0', 
    badgeRef: '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)]',
    licenseUrl: 'https://www.gnu.org/licenses/agpl-3.0'
  },
  {
    license: 'GNU Lesser General Public License v2.1', 
    badgeRef: '[![License: LGPL v2.1](https://img.shields.io/badge/License-LGPL%20v2.1-blue.svg)]',
    licenseUrl: 'https://www.gnu.org/licenses/old-licenses/lgpl-2.1.html'
  },
  {
    license: 'MIT License', 
    badgeRef: '[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)]',
    licenseUrl: 'https://lbesson.mit-license.org/'
  },
  {
    license: 'Mozilla Public License 2.0', 
    badgeRef: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]',
    licenseUrl: 'https://opensource.org/licenses/MPL-2.0'
  },
  {
    license: 'The Unlicense', 
    badgeRef: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]',
    licenseUrl: 'http://unlicense.org/'
  },
  {
    license: 'None', 
    badgeRef: '',
    licenseUrl: ''
  }
];

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  const licenseBadge = licenses.filter(lic => lic.license == license.license);  
  if (licenseBadge[0].badgeRef === ''){
    return '';
  }
  return licenseBadge[0].badgeRef+"("+licenseBadge[0].licenseUrl+")";

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLink = licenses.filter(lic => lic.license == license.license);
  return licenseLink[0].licenseUrl;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    const licenseLink = renderLicenseLink(license);
    if (licenseLink === '') {
      return '';
    } else {
      return `
## License
[${license.license}](${licenseLink})
      `

    }
}

// Create TOC if required
function generateTOC(toc){
  if (!toc.toc) {
    return
  }
  let licenseInfo = '';
  if (toc.license != 'None'){
    licenseInfo = "* [License](#license)"
  }
  return `
## Table of Contents
* [Description](#description)
* [Instructions](#instructions)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
${licenseInfo}
* [Questions](*questions)
  `
}

// Create Questions section
function renderQuestions(questions) {
  return `
## Questions
Contact me through my [GitHub](http://github.com/${questions.github}) or by [email](mailto:${questions.email}).

  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
${renderLicenseBadge(data)}
${generateTOC(data)}
## Description
${data.projectDesc}
## Installation
${data.instructions}
## Usage
${data.usageInfo}
## Contributing
${data.contribution}
## Tests 
${data.test}
${renderLicenseSection(data)}
${renderQuestions(data)}
`
};


module.exports = generateMarkdown;
