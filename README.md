# Playwright-Cucumber-JavaScript Framework Documentation

## Table of Contents
1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
3. [Project Structure](#project-structure)
4. [Writing Tests](#writing-tests)
    - [Creating Feature Files](#creating-feature-files)
    - [Step Definitions](#step-definitions)
5. [Running Tests](#running-tests)
6. [Jenkins Integration](#jenkins-integration)
    - [Jenkins Pipeline Configuration](#jenkins-pipeline-configuration)
7. [Contributing](#contributing)
8. [License](#license)

## Introduction
This repository contains a test automation framework using Playwright, Cucumber, and JavaScript. The framework enables behavior-driven development (BDD) for end-to-end testing, ensuring robust and maintainable test suites. It integrates seamlessly with Jenkins for continuous integration and delivery (CI/CD).

## Getting Started

### Prerequisites
Before setting up the framework, ensure you have the following installed:
- Node.js (>= 14.x)
- npm (>= 6.x)
- Playwright
- Cucumber.js
- Jenkins (for CI/CD)

### Installation
Clone the repository and install the dependencies:
```bash
git clone <repository-url>
cd <repository-directory>
npm install

## Project Structure
Outline the project structure to give users an idea of where to find and place their files:
.
├── features
│   ├── step_definitions
│   │   └── *.js
│   ├── support
│   │   └── hooks.js
│   └── *.feature
├── reports
├── src
│   └── *.js
├── .gitignore
├── cucumber.json
├── Jenkinsfile
├── package.json
└── README.md

## Writing Tests

### Creating Feature Files
Feature files describe the test scenarios in a human-readable format:

Feature: Example feature

  Scenario: Example scenario
    Given I navigate to the homepage
    When I click on the login button
    Then I should see the login form
### Step Definitions
Step definitions connect feature file steps to Playwright actions:

const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('I navigate to the homepage', async function () {
    await page.goto('https://example.com');
});

When('I click on the login button', async function () {
    await page.click('#login-button');
});

Then('I should see the login form', async function () {
    expect(await page.isVisible('#login-form')).toBe(true);
});

## Jenkins Integration

### Jenkins Pipeline Configuration
Create a Jenkinsfile for setting up the CI/CD pipeline:

## Contributing

## License