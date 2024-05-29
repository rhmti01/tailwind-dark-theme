/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./public/**/*.html", " ./src/js/theme.js "],
  theme: {
    extend: {
      fontFamily: {
        nunito: [" Nunito Sans "]
      },
      screens: {
        'ss': '450px',
        'xx': '530px',
        'xxl' : '1500px'
      },
    },
  },
  plugins: [],
}

