/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'brand-white': '#EEF0F4',
      },
      borderRadius: {
        custom: '15%', // Note: Tailwind typically doesn't use percentages for border-radius
      },
      boxShadow: {
        custom:
          'inset 9.91px 9.91px 15px #D9DADE, inset -9.91px -9.91px 15px #FFFFFF',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
