/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        serif:'Neuton, serif',
        sans:'Mulish, sans-serif',
      },
      colors: {
        grey: {
          300: '#2E2E2E',
        },
      },
    },
  },
  plugins: [],
}
