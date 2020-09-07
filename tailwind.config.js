const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.ts',
    'src/**/*.tsx',
    'public/**/*.html',
  ],
  theme: {
    colors: {
      ...defaultTheme.colors,
      primary: {
        100: '#ac50ff',
        200: '#9c2eff',
        300: '#8c0cff',
        400: '#7b00e9',
        500: '#6900c7',
        600: '#5700a5',
        700: '#450083',
        800: '#330061',
        900: '#21003f',
      },
      secondary: {
        100: '#43ffd9',
        200: '#21ffd2',
        300: '#00feca',
        400: '#00dcaf',
        500: '#00ba94',
        600: '#009879',
        700: '#00765e',
        800: '#005443',
        900: '#003228'
      }
    },
    extend: {
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Overpass, Noto Color Emoji", "sans-serif"]
      }
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    textColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: []
}
