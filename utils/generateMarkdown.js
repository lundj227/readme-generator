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
  };

  function licenseDescription(license){
    var description;
    if (license === ''){
      return ''
    }else if(license === 'Apache License 2.0'){
      description = `This project is covered under the Apache License 2.0.\nSubject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare Derivative Works of, publicly display, publicly perform, sublicense, and distribute the Work and such Derivative Works in Source or Object form.\nThose wishing to learn more about this license and how to use it may visit [this link.](https://opensource.org/license/apache-2-0/)`;
    }else if(license === 'GNU General Public License v3.0'){
      description = 'This project is covered under the GNU General Public License v3.0.\nThe licenses for most software and other practical works are designed to take away your freedom to share and change the works. By contrast, the GNU General Public License is intended to guarantee your freedom to share and change all versions of a program--to make sure it remains free software for all its users. We, the Free Software Foundation, use the GNU General Public License for most of our software; it applies also to any other work released this way by its authors. You can apply it to your programs, too.\nThose wishing to learn more about this license and how to use it may visit [this link](https://www.gnu.org/licenses/gpl-3.0)'
    }else if(license === 'MIT License'){
      description = 'This project is covered under the MIT License. Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\nThose wishing to learn more about this license and how to use it may visit [this link](https://opensource.org/license/mit/)'
    }else if(license === 'BSD 2-Clause "Simplified" License'){
      description = 'This project is covered under the BSD 2-Clause "Simplified" License.\nTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS “AS IS” AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\nThose wishing to learn more about this license and how to use it may visit [this link](https://opensource.org/license/bsd-2-clause/)'
    }
    return description;
  };

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
  ${licenseDescription(data.license)}
  
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
  ${renderLicenseBadgeAndLink(data.license)}\n
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
  };
  
  module.exports = generateMarkdown;