// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadgeAndLink(license) { //Ask about combination
  var badge;
  if (license === '') {
    return ''
  } else if (license === 'Apache License 2.0') {
    badge = `[![License: Apache License 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    return badge;
  } else if (license === 'GNU General Public License v3.0') {
    badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    return badge;
  } else if (license === 'MIT License') {
    badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    return badge;
  } else if (license === 'BSD 2-Clause "Simplified" License') {
    badge = `[![License: BSD 2-Clause "Simplified" License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
    return badge;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//Took care of that in the first function

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function licenceDescription(licence){
  var description;
  if (licence === ''){
    return ''
  }else if(licence === 'Apache License 2.0'){
    description = 'This project is covered under the Apache License 2.0, those wishing to learn more about this licence and how to use it may visit [this link](https://opensource.org/license/apache-2-0/)'
  }else if(licence === 'GNU General Public License v3.0'){
    description = 'This project is covered under the GNU General Public License v3.0, those wishing to learn more about this licence and how to use it may visit [this link](https://www.gnu.org/licenses/gpl-3.0)'
  }else if(licence === 'MIT License'){
    description = 'This project is covered under the MIT License, those wishing to learn more about this licence and how to use it may visit [this link](https://opensource.org/license/mit/)'
  }else if(licence === 'BSD 2-Clause "Simplified" License'){
    description = 'This project is covered under the BSD 2-Clause "Simplified" License, those wishing to learn more about this licence and how to use it may visit [this link](https://opensource.org/license/bsd-2-clause/)'
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  if (data.tableOfContents == true) {
    return `
# ${data.title} \n

${renderLicenseBadgeAndLink(data.license)} \n

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#testing)
- [Questions](#questions)

### Description
${data.projectDescription}

### Installation
${data.installation}

### Usage
${data.usage}

### License
${licenceDescription(data.license)}

### Contributing
${data.contribution}

### Testing
${data.testing}

### Questions
If you have any questions regarding any of the information above please contact me through either:\n
Github:(${data.github})\n
Email: (${data.email})
`;
  }
  else {
    return `
# ${data.title} \n
### Description
${data.projectDescription}

### Installation
${data.installation}

### Usage
${data.usage}

### License
${renderLicenseBadgeAndLink(data.license)}

### Contributing
${data.contribution}

### Testing
${data.testing}

### Questions
If you have any questions regarding any of the information above please contact me through either:\n
Github: (${data.github})\n
Email: (${data.email})
`
  }
}

module.exports = generateMarkdown;

