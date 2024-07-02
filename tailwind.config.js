/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#2663A2',
        'red': '#FF4A4A',
        'orange': '#FFA14A',
        'yellow': '#FFD74A',

        'dark-gray': '#929090',
        'light-gray': '#F2F2F2',
      },
    },
  },
  plugins: [],
}