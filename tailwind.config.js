import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        green: '0 0 10rem #141414',
      },
    },
    colors: {
      primary: {
        400: '#141414',
        500: '#141414',
        700: "#e2e2e4",
        600: '#141414',
      },
      grayscale: {
        50: '#ffffff',
        100: '#efefef',
        200: '#FDFDFF',
        300: '#141414',
        950: '#16161b',
      },
    },
  },
  plugins: [tailwindcss, autoprefixer],
};
