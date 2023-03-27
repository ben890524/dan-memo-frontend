/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '475px',
      },
      colors: {
        'default-primary-color': 'var(--global-default-primary-color)',
        'default-secondary-color': 'var(--global-default-secondary-color)',
        'dark-primary-color': 'var(--global-dark-primary-color)',
        'dark-secondary-color': 'var(--global-dark-secondary-color)',
      },
    },
  },
  plugins: [],
};
