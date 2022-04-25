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
const gitInitializeCommand = `cd ${repoName} && git init && git remote rm origin`;

console.log(`Cloning the repository with name ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(-1);

console.log(`Installing dependencies for ${repoName}`);
const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) process.exit(-1);

console.log('--------------------------------------------');
console.log('Successfully Installed all dependecies.');
console.log('--------------------------------------------');

console.log('Setting up GIT for first time usage...');

const gitInitialize = runCommand(gitInitializeCommand);
if (!gitInitialize) process.exit(-1);

console.log('*************************************************');
console.log('GIT setup complete');
console.log('*************************************************');

console.log('--------------------------------------------');
console.log(
  'Congratulations! You are ready. Follow the following commands to start'
);
console.log('--------------------------------------------');

console.log(`cd ${repoName} && npm start`);
