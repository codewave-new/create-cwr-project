#!/usr/bin/env node
const { execSync } = require('child_process');

// Color Codes for terminal
const cyan = '\u001b[1m\u001b[36;1m';
const reset = '\u001b[0m';
const red = '\u001b[1m\u001b[31;1m';
const yellow = '\u001b[1m\u001b[33;1m';
const blue = '\u001b[1m\u001b[34;1m';

// Function which will run commands
const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: 'inherit' });
  } catch (e) {
    console.error(`${red}Failed to execute ${command}${reset}`, e);
    return false;
  }
  return true;
};

// Commands for different steps
const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/codewave-new/create-cwr-project ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;
const gitInitializeCommand = `cd ${repoName} && rm -r -f .git && git init`;
const huskyCommand = `cd ${repoName} && npm run prepare`;

// Clone the main repo
console.log(`Cloning the repository with name ${blue}${repoName}${reset}\n\n`);
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(-1);

// Install all the dependencies
console.log(`Installing dependencies for ${yellow}${repoName}${reset}\n\n`);
const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) process.exit(-1);

console.log(`${yellow}Successfully Installed all dependecies.${reset}\n\n`);

// GIT Initialization
console.log('Setting up GIT for first time usage...\n\n');

const gitInitialize = runCommand(gitInitializeCommand);
if (!gitInitialize) process.exit(-1);

console.log('GIT setup complete\n\n');

// Husky Initialization
const huskyInitialize = runCommand(huskyCommand);
if (!huskyInitialize) process.exit(-1);

console.log('Husky initialized successfully\n\n');

// All done success message
console.log(
  `${cyan}----------------------------------------------------------------------${reset}\n\n`
);
console.log(
  `${cyan}Congratulations! You are ready. Follow the following commands to start${reset}\n\n`
);
console.log(
  `${cyan}----------------------------------------------------------------------${reset}\n\n`
);

console.log(`${cyan}cd${reset} ${repoName}\n\n`);
console.log(`${cyan}npm${reset} start\n\n`);
