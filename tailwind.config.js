/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        christin: {
          DEFAULT: '#000518',
          primary: '#00D2EE',
          secondary: '#DE4313',
          hover: '#0595A8',
          gray: '#56585E',
          grayLight: '#F4F4F4',
          white: '#ffffff',
        },
      },
      container: {
        center: true,
        width: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
    },
  },
  /* eslint-disable global-require */
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
};
