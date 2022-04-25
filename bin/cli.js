#!/usr/bin/env node
const { execSync } = require('child_process');

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: 'inherit' });
  } catch (e) {
    console.error(`Failed to execute ${command}`, e);
    return false;
  }
  return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/codewave-new/create-cwr-project ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;
const gitInitializeCommand = `cd ${repoName} && git init`;

console.log(
  '%cCloning the repository with name ' + `%c${repoName}`,
  'color: #03579f',
  'color:#fc4f4f'
);
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(-1);

console.log(
  `%cInstalling dependencies for ` + `%c${repoName}`,
  'color: #03579f',
  'color:#fc4f4f'
);
const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) process.exit(-1);

console.log('%cSuccessfully Installed all dependecies.', 'color:#03b0f5');

const gitInitialize = runCommand(gitInitializeCommand);
if (!gitInitialize) process.exit(-1);

console.log(
  '%cCongratulations! You are ready. Follow the following commands to start',
  'color:#03b0f5'
);
console.log(`cd ${repoName} && npm start`);
