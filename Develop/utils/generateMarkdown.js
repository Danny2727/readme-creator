// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //license is also data.badge
  let userLicense = ' '

  if(license === 'Apache') {
    userLicense= `![License Apache](https://img.shields.io/badge/license-Apache.blue.svg)`

  } else if (license === 'MIT') {  
    userLicense = `![License MIT ](https://img.shields.io/badge/license-MIT.black.svg)`

  } else if (license === 'GitHub') {
    userLicense = `![License GitHub](https://img.shields.io/badge/license-MIT.green.svg)`
  } 
  return userLicense;
 };

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  let link = ' ';
  if(license === "Apache" || license === "Mit " || license === "Github") {
    link = "-[license](#license)"
}

return link;
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
//   let section = " "
//   if(license === "Apache" || license === "Mit " || license === "Github") {
//     section = `# License
// - This project is protected under the ${license} license `
// }

// return section;

//1st REFACTOR
let section = " "
if(license !== "None") {
  section = `# License
- This project is protected under the ${license} license `
}

// // return section;

// // 2nd Refactor

// if(license !== "None") {
//   return `# License
// - This project is protected under the ${license} license `
// }
// return "";

// return license !== "None"? `# License
// - This project is protected under the ${license} license ` : ""

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `#${data.title}    ${renderLicenseBadge(data.badge)} 
 


  # Description
 - ${data.description}

# Table of Contents 
-[Installation](#installation)
-[Usage](#usage)
-[Contirbuting](#contributions)
-[Test](#test)
-[Questions](#questions)
${renderLicenseLink(data.badge)}

# Installation
 - ${data.install}

# Usage
 - ${data.use}

# Contributing 
- ${data.contributions}
 

# Test 
- ${data.test}

${renderLicenseSection(data.badge)}

# Questions
- ${data.github}
- ${data.email}`

};

module.exports = generateMarkdown;
