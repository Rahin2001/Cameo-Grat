# Automated Testing with Jest

This document provides instructions on setting up and running automated tests using Jest.

## Prerequisites
- Node.js v16+ (for Jest) / Python 3.8+ (for PyTest)
- Package Manager: npm/yarn/pnpm or pip

## Setup
```bash
# For Jest
npm install --save-dev jest

# For PyTest
pip install pytest
```

## Running Tests
```bash
# All tests
npm test  # or pytest

# Specific test
npx jest webhook.test.js  # or pytest webhook.test.js
```

## Generated Test Info
- Source File: `webhook.txt`
- Generated: 12/25/2025, 1:09:27 PM
