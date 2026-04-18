import fs from 'fs';
import path from 'path';

const packages = [
  'packages/api-client',
  'packages/store',
  'packages/ui'
];

packages.forEach(pkg => {
  if (!fs.existsSync(pkg)) return;
  
  fs.writeFileSync(path.join(pkg, 'tsconfig.json'), JSON.stringify({
    extends: "@wenza/eslint-config/tsconfig.base.json",
    compilerOptions: {
      baseUrl: ".",
      outDir: "dist"
    },
    include: ["**/*.ts", "**/*.tsx"],
    exclude: ["node_modules", "dist"]
  }, null, 2));
});
