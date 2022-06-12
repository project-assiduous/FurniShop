// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'maxwidth': '1350px'
      },
      colors: {
        'dark-green': '#244D4D',
        'brown': '#D6C4B8'
      },
      fontFamily: {
        'notoserif': "Noto Serif JP",
        'opensans': "Open Sans", //This will be the default font
      },
    },
  },
  plugins: [],
}
