// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let typeOfLicense = license.license
  let userLicense = ' '
  if(typeOfLicense === 'Apache') {
    userLicense = `![License Apache](https://img.shields.io/badge/license-Apache.blue.svg)`
  } else if (userLicense === 'MIT') {  
    userLicense = `![License Apache](https://img.shields.io/badge/license-MIT.black.svg)`
  } else if (userLicense === 'GitHub') {
    userLicense = `![License Apache](https://img.shields.io/badge/license-MIT.green.svg)`
  } else {
    license.license = " ";
  }

  return userLicense;
 };

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 


}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `#${data.title}

  # License
  - ${data.badge}

  # Description
 - ${data.description}

# Table of Contents 
-Instalation
-Usage
-Contirbuting
-Test
-Questions

# Installation
 - ${data.install}

# Usage
 - ${data.use}

# Contributing 
- ${data.contributions}
 

# Test 
- ${data.test}


# Questions
- ${questions.github}
- ${questions.email}`

};

module.exports = generateMarkdown;
