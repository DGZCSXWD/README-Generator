function renderLicenseBadge(license) {
  if (license === "None") return "";
  return `![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)`;
}

function renderLicenseLink(license) {
  if (license === "None") return "";
  const licensePath = `https://opensource.org/licenses/${license}`;
  return `[${license}](${licensePath})`;
}

function renderLicenseSection(license) {
  if (license === "None") return "";
  return `## License

This project is covered under the ${renderLicenseLink(license)} license.`;
}

function generateMarkdown(data) {
  const {
    title,
    description,
    installation,
    usage,
    contributing,
    tests,
    license,
    github,
    email,
  } = data;

  const toc = `## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)`;

  const questionsSection = `## Questions

If you have any questions about this project, please feel free to contact me via email at ${email}. You can also visit my [GitHub profile](https://github.com/${github}) to view my other projects.`;

  return `# ${title} ${renderLicenseBadge(license)}

${description}

${toc}

## Installation

${installation}

## Usage

${usage}

## Contributing

${contributing}

## Tests

${tests}

${renderLicenseSection(license)}

${questionsSection}
`;
}

module.exports = generateMarkdown;
