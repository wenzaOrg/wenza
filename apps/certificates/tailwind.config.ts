import type { Config } from 'tailwindcss';
import preset from '@wenza/ui/tailwind/preset';
const config: Config = {
  presets: [preset as any],
  content: ['./app/**/*.{ts,tsx}', '../../packages/ui/**/*.{ts,tsx}'],
};
export default config;
