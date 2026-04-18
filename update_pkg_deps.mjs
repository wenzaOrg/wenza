import fs from 'fs';
import path from 'path';

const dirs = [
  'apps/web',
  'apps/app',
  'apps/certificates',
  'apps/scholarship',
  'packages/api-client',
  'packages/store',
  'packages/ui'
];

dirs.forEach(dir => {
  const pkgPath = path.join(dir, 'package.json');
  if (fs.existsSync(pkgPath)) {
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
    pkg.devDependencies = pkg.devDependencies || {};
    pkg.devDependencies['@wenza/eslint-config'] = 'workspace:*';
    fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
    console.log(`Updated ${pkgPath}`);
  }
});
