/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        '50px': '50px',
      },
      backgroundColor: {
        'custom-blue': '#D1D8EC',
      },
      boxShadow: {
        custom: '12px 12px 24px #b2b8c9, -12px -12px 24px #f0f8ff',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
