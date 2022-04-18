//Returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
  switch (license) {
		case 'MIT':
			badge = `![License](https://img.shields.io/badge/License-MIT-yellow.svg)`;
			break;
    case 'Apache 2.0':
			badge = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
			break;
    case 'GPLv2':
      badge = `![License](https://img.shields.io/badge/License-GPL_v2-blue.svg)`;
      break;
		case 'GPLv3':
			badge = `![License](https://img.shields.io/badge/License-AGPL_v3-blue.svg)`;
			break;
    case 'BSD 2-Clause':
			badge = `![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)`;
			break;
    case 'BSD 3-Clause':
      badge = `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`;
      break;
    //
		default:
			badge = '';
			break;
	};
	return badge;
}

//Returns the license link
// If there is no license, returns an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      url = `[${license}](https://opensource.org/licenses/MIT)`;
      break;
    case 'Apache 2.0':
      url = `[${license}](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case 'GPLv2':
      url = `[${license}](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
      break;
    case 'GPLv3':
      url = `[${license}](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    case 'BSD 2-Clause':
      url = `[${license}](https://opensource.org/licenses/BSD-2-Clause)`;
      break;
    case 'BSD 3-Clause':
      url = `[${license}](https://opensource.org/licenses/BSD-3-Clause)`;
      break;
    default:
      url = ''
      break;
  }
  return url;
};

// Returns the license section of README
// If there is no license, returns an empty string
function renderLicenseSection(license) {
  if(!license) {
    return '';
  } 
  else {
    return(
`## License ${renderLicenseBadge(license)} ${renderLicenseLink(license)}`
    )};
};

// Generates markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributors](#contributors)
  - [Tests](#tests)
  - [Questions](#questions)
  - [Contact](#contact)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}

  ## Contributors
  ${data.contributors}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.questions}

  ## Contact
  [GitHub](https://github.com/${data.github})
  [Email](${data.email})
  `
};

module.exports = generateMarkdown;
