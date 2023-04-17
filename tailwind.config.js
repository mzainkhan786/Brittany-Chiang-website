/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        frozi: '#64ffda;',
        lightgrey: '#ccd6f6;',
        darkgrey: '#7c8192;',
      },
      fontFamily: {
        popins: "'Poppins', sans-serif",
      },
    },
  },
  plugins: [],
};
