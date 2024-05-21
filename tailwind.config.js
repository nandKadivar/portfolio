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
      'section2-bg': '#6e07f4',
      'white': '#FFFFFF',
      'black': '#000000',
      'terminal-bg-1': '#3E3E3E',
      'terminal-bg-2': '#333333',
      'terminal-red': '#E64D4D',
      'terminal-yellow': '#FBE185',
      'terminal-green': '#7AE769',
      'fb-icon': '#008DFC',
      'ig-icon': '#EA6C6C',
      'ln-icon': '#008DFC',
      'tw-icon': '#008DFC',
      'gray-bg': '#566272',
      'light-gray': '#F5F5F5',
      'dark-gray': '#566272',
      // Skill bucket
      'indigo': '#45489a',
      'bucketColor1': '#45489a',
      'bucketColor2': '#f95c3b',
      'bucketColor3': '#008DFC',
      'bucketColor4': '#EA6C6C',
      'gray': '#94aab9',
      'card-bg': '#4f20d2',
      'slice-bg': '#f4f6f8',
    },
    fontFamily: {
      'type1': ['Ultra', 'sans-serif'],
      'type2': ['Bungee Spice', 'sans-serif'],
      'type3': ['Libre Barcode 39 Text', 'sans-serif'],
      'project': ['Jersey 25 Charted', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
