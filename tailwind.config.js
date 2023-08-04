/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [],
  theme: {
    colors,
    extend: {
      colors: {
        primary: '#464646',
        dark: '#151515',
        faded: '#F6F6F6',
        positive: '#7CCF55',
        negative: '#A33A3A',
        info: '#43B9D2',
        warning: '#EB9E2A',
      },
      typography: ({theme}) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.primary')
          }
        }
      })
    },
  },
  plugins: [
      require('@tailwindcss/typography')
  ],
  tailwindcss: {},
  googleFonts: {
    families: {
      'Fira+Mono': true
    }
  }
}

