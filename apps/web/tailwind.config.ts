import type { Config } from 'tailwindcss';
import path from 'path';
import { createRequire } from 'module';
import preset from '@wenza/ui/tailwind/preset';

const require = createRequire(import.meta.url);
const uiPackagePath = path.dirname(require.resolve('@wenza/ui/package.json'));

const config: Config = {
  presets: [preset as Partial<Config>],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    // Scope @wenza/ui to clear src directories only to avoid node_modules scanning
    path.join(uiPackagePath, 'components/**/*.{js,ts,jsx,tsx}'),
    path.join(uiPackagePath, 'lib/**/*.{js,ts,jsx,tsx}'),
    path.join(uiPackagePath, 'index.ts'),
    path.join(uiPackagePath, 'fonts.ts'),
  ],
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;
