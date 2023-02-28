
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license){
    case "GNU":
      return `[GNU license](https://opensource.org/license/gpl-3-0/)`
    case "Apache":
      return `[Apache license](https://opensource.org/license/apache-2-0/)`
    case "MIT":
      return `[MIT license](https://opensource.org/license/mit/)`
    case "Mozilla":
      return `[Mozilla license](https://opensource.org/license/mpl-2-0/)`

  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.projectTitle}

## Descriptions

${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${answers.installation}

## Usage

${answers.usage}

## License

${renderLicenseLink(answers.license)}

![](https://img.shields.io/badge/license-${answers.license}-blue)

${answers.license}

## Screen Shot

${answers.screenShot}

## Tests

${answers.tests}

## Questions 

${answers.questions}

## Credits

${answers.username}

## Email

${answers.email}
`;
}

module.exports = generateMarkdown;
