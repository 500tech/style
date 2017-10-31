#!/usr/bin/env node

const run = require('child_process').execSync;
const writeFile = require('fs').writeFileSync;

const log = message => console.log('>', message);

try {
  run('git stash');
  run('git checkout -b fht-styling');
} catch (err) {}

log('Installing prettier for automatic code formatting...');
log('Installing husky for git hooks...');

try {
  run('npm install --save-dev --save-exact prettier@1.7.4 husky@0.14.3');
  log('Packages are installed!');
} catch (err) {
  log('Could not install packages!');
  return 0;
}

log('Adding automated styling config to package.json...');

const packageConfig = require(process.cwd() + '/package.json');
const newConfig = Object.assign(packageConfig, {
  prettier: {
    printWidth: 80,
    tabWidth: 2,
    useTabs: false,
    semi: true,
    singleQuote: true,
    trailingComma: "none",
    bracketSpacing: true,
    jsxBracketSameLine: true,
    requirePragma: false
  },
  scripts: Object.assign(packageConfig.scripts, {
    precommit: "npm run prettier",
    prettier: "staged=$(git diff --name-only HEAD | grep '.*\\.js$'); echo $staged | xargs ./node_modules/.bin/prettier --write; echo $staged | xargs git add"
  })
});

writeFile(process.cwd() + '/package.json', JSON.stringify(newConfig, 2, 2));

log('package.json was changed!');

try {
  run('git add ./package.json');
  run('git add ./package-lock.json');
  run('git commit --no-verify -m "Added `prettier` and `husky` packages, added automatic styling config to package.json"');
} catch (err) {}

try {
  run('git stash pop');
} catch (err) {}