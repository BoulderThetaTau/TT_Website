/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        'mobile': '975px',
        'tablet-portrait': '750px',
        'slim': '450px',
      },
      colors: {
        thetaTauGold: '#CFB87C', // Example hex value for gold
        thetaTauRed: '#8B0000', // Example hex value for dark red
      },
    },
  },
  plugins: [],
}

