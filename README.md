# Cypress Automation for Luma

This project contains automated tests using [Cypress](https://www.cypress.io/), a powerful and user-friendly tool for testing web applications.

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Test Reports](#test-reports)
- [What's Next?](#whats-next)
- [Owner](#owner)

## Introduction

This repository was created to automate tests for Luma using Cypress. The code in this repo provides:

- A simple structure that enables other QAs to get started quickly.
- TypeScript and Cucumber integration to support collaboration.
- Automated test runs in GitHub Actions on every push and pull request.
- Automatic report generation locally and in CI, with downloadable artifacts for later review.

## Prerequisites

Before you begin, make sure you have the following installed:

- Node.js (recommended version: 14 or higher)
- NPM or Yarn

## Installation

To install the project and its dependencies, run the following commands:

```bash
# Clone the repository
git clone https://github.com/JonathanDaflon/luma-project.git

# Navigate to the project directory
cd luma-project

# Install dependencies
npm install
# or, if using Yarn
yarn install
```

## Running Tests

Cypress can be run both in UI or Headless mode with the following commands:

```bash
#Headless mode
npx cypress run

#UI mode
npx cypress open
```
Keep in mind that reports are only generated in headless mode.

## Tests Reports

Reports are generated using Mochawesome-Reporter. A .html file is available after a local or CI run, allowing you to browse scenarios organized by .feature files, with a clear structure for features and scenarios.

## What's Next?

- Page Object Model (POM): A POM structure can be introduced if the project scales in complexity and scenario count.
- Docker Integration: Docker can be added to support test environment isolation.

## Owner
| ![Jonathan](https://avatars3.githubusercontent.com/u/57598746?s=160&v=4) | 
|:-----------------------------------------------------------------------:|
| [Jonathan Daflon](https://github.com/JonathanDaflon) | 
