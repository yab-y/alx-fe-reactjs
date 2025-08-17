/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // All React components
    './public/index.html'          // Include public HTML
  ],
  darkMode: false, // or 'media' / 'class'
  theme: {
    extend: {},
  },
  plugins: [],
};

