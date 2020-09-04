const { boxShadow, colors } = require("tailwindcss/defaultTheme");

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
    customForms: theme => ({
      default: {
        input: {
          backgroundColor: theme("colors.gray.900"),
          "&::placeholder": {
            color: theme("colors.gray.500"),
            opacity: "1"
          },
          "&:focus": {
            outline: "none",
            boxShadow: theme("boxShadow.none"),
            borderColor: theme("colors.orange.500")
          }
        }
      }
    }),
    extend: {
      boxShadow: {
        ...boxShadow,
        outline: "0 0 0 3px rgba(239, 121, 48, 0.5)"
      }
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")]
};
