import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'at-indigo': {
          50: '#f3f5fb',
          100: '#e3e8f6',
          200: '#ced8ef',
          300: '#acbee4',
          400: '#849ed6',
          500: '#5c76c7',
          600: '#5366bd',
          700: '#4855ad',
          800: '#40478d',
          900: '#373e71',
          950: '#252846',
        },
        'at-emerald': {
          50: '#f2fbf4',
          100: '#f2fbf4',
          200: '#c4eed0',
          300: '#95e0ab',
          400: '#5cc77c',
          500: '#3aad5c',
          600: '#2b8e48',
          700: '#25703c',
          800: '#225933',
          900: '#1d4a2c',
          950: '#0b2815',
        },
        'at-red': {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#421414',
        },
        'at-yellow': {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#442507',
        },
        'at-primary': {
          '50': '#f1fafa',
          '100': '#daf0f3',
          '200': '#bae1e7',
          '300': '#8acad6',
          '400': '#45a2b5',
          '500': '#378fa3',
          '600': '#317589',
          '700': '#2d5f71',
          '800': '#2c505e',
          '900': '#284451',
          '950': '#162c36',
        },
        'at-secondary': {
          '50': '#f8f8ee',
          '100': '#eeefd2',
          '200': '#dfe0a8',
          '300': '#cecd76',
          '400': '#beb851',
          '500': '#b5aa45',
          '600': '#968638',
          '700': '#79662f',
          '800': '#66532d',
          '900': '#58472b',
          '950': '#322616',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
