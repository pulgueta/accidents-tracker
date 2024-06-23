import type { Config } from 'tailwindcss';

import sharedConfig from 'ui/config';

const config: Config = {
  content: ['./**/*.tsx', '../../packages/**/*.tsx'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1366px',
      },
    },
  },
  presets: [sharedConfig],
};

export default config;
