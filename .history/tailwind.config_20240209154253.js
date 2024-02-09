/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/preline/preline.js'],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        custom:
          'inset -4px -4px 6px -1px rgba(255, 255, 255, 1), inset 2px 2px 8px -1px rgba(72, 79, 96, 0.5)',
      },
    },
  },
  variants: {
    extend: {},
  },
};

module.exports = {
  content: ['./node_modules/preline/preline.js'],
  plugins: [require('preline/plugin')],
};
