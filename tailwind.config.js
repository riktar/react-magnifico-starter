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
        100: '#e7e9fd',
        200: '#c8ccfb',
        300: '#a8aff9',
        400: '#8892f7',
        500: '#6875f5',
        600: '#4858f3',
        700: '#283bf1',
        800: '#0f23e8',
        900: '#0d1ec8',
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
        //heading: ["Khula, Noto Color Emoji", "sans-serif"],
        //body: ["Overpass, Noto Color Emoji", "sans-serif"]
      }
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    textColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: []
}
