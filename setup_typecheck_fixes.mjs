import fs from 'fs';
import path from 'path';

const file = 'packages/api-client/use-request.ts';
if (fs.existsSync(file)) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/\(p\)/g, '(p: any)');
  content = content.replace(/\(prev\)/g, '(prev: any)');
  fs.writeFileSync(file, content);
}

const packages = ['packages/api-client', 'packages/store', 'packages/ui'];
packages.forEach(pkg => {
  const tsConfigPath = path.join(pkg, 'tsconfig.json');
  if (fs.existsSync(tsConfigPath)) {
    const config = JSON.parse(fs.readFileSync(tsConfigPath, 'utf8'));
    config.compilerOptions = config.compilerOptions || {};
    config.compilerOptions.jsx = "preserve";
    fs.writeFileSync(tsConfigPath, JSON.stringify(config, null, 2));
  }
});
