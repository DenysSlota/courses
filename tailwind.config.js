/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {    
    extend: {},
    screens: {
      'ss': '550px',
    },
  },
  plugins: [],
}