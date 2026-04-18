import fs from 'fs';
import path from 'path';

const packages = [
  'apps/web',
  'apps/app',
  'apps/certificates',
  'apps/scholarship',
  'packages/api-client',
  'packages/store',
  'packages/ui'
];

const configDir = 'packages/config';

// 1. Config Package
fs.writeFileSync(path.join(configDir, 'package.json'), JSON.stringify({
  name: '@wenza/eslint-config',
  version: '0.0.1',
  private: true,
  main: 'eslint-preset.js'
}, null, 2));

fs.writeFileSync(path.join(configDir, 'eslint-preset.js'), `module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  env: { browser: true, node: true }
};`);

fs.writeFileSync(path.join(configDir, 'prettier-preset.js'), `module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 100,
};`);

fs.writeFileSync(path.join(configDir, 'tsconfig.base.json'), JSON.stringify({
  compilerOptions: {
    strict: true,
    esModuleInterop: true,
    skipLibCheck: true,
    forceConsistentCasingInFileNames: true
  }
}, null, 2));

// 2. Consuming Packages
packages.forEach(pkg => {
  if (!fs.existsSync(pkg)) return;
  
  // .eslintrc.js
  fs.writeFileSync(path.join(pkg, '.eslintrc.js'), `module.exports = {
  extends: ['@wenza/eslint-config']
};`);

  // prettier.config.js
  fs.writeFileSync(path.join(pkg, 'prettier.config.js'), `module.exports = require('@wenza/eslint-config/prettier-preset');`);

  // package.json dependencies
  const pkgJsonPath = path.join(pkg, 'package.json');
  if (fs.existsSync(pkgJsonPath)) {
    const pkgJson = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf8'));
    pkgJson.devDependencies = pkgJson.devDependencies || {};
    pkgJson.devDependencies['@wenza/eslint-config'] = 'workspace:*';
    fs.writeFileSync(pkgJsonPath, JSON.stringify(pkgJson, null, 2));
  }
});
