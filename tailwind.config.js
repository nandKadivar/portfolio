/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'color1': '#6E61E7', // Purple #ff6967
      'dark-bg': '#f4f6f8',
      // 'dark-bg': '#171C1D',
      'light-bg': '#F5F5F5',
      'white': '#FFFFFF',
      'black': '#000000',
      'terminal-bg-1': '#3E3E3E',
      'terminal-bg-2': '#333333',
      'terminal-red': '#E64D4D',
      'terminal-yellow': '#FBE185',
      'terminal-green': '#7AE769',
    },
    fontFamily: {
      'type1': ['Ultra', 'sans-serif'],
      'type2': ['Bungee Spice', 'sans-serif'],
      'type3': ['Libre Barcode 39 Text', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
