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
//First function did that

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  if (data.tableOfContents == true) {
    return `
# ${data.title} \n
## Table of Contents
[Description](link)
[Installation](link)
[Usage](link)
[License](Link)
[Contributing](link)
[Tests](link)
[Questions](link)

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
Github:(${data.github})\n
Email: (${data.email})
`
  }
}

module.exports = generateMarkdown;

