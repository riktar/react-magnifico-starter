const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.ts',
    'src/**/*.tsx',
    'public/**/*.html',
  ],
  theme: {
    colors:{
      ...colors,
      primary: {
        500: '#6900c7'
      },
      secondary: {
        500: '#00ba94'
      }
    },
    extend: {}
  },
  variants: {},
  plugins: []
};
