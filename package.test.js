const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function runTests() {
  const packageJsonPath = path.join(__dirname, 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

  const dependencies = packageJson.dependencies || {};
  const devDependencies = packageJson.devDependencies || {};

  const hasJest = dependencies.jest || devDependencies.jest || dependencies['@jest/globals'] || devDependencies['@jest/globals'];
  const hasPytest = dependencies.pytest || devDependencies.pytest;

  if (hasJest) {
    console.log('Jest detected. Running tests...');
    try {
      execSync('npm test -- --watchAll=false', { stdio: 'inherit' });
    } catch (error) {
      console.error('Test execution failed:', error.message);
      process.exit(1);
    }
  } else if (hasPytest) {
    console.log('Pytest detected. Running tests...');
    try {
      execSync('python -m pytest', { stdio: 'inherit' });
    } catch (error) {
      console.error('Test execution failed:', error.message);
      process.exit(1);
    }
  } else {
    console.log('No test framework detected. Skipping tests.');
  }
}

runTests();