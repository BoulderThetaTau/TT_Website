/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        'mobile': '975px',
        'tablet-portrait': '750px',
        'slim': '500px',
      },
      colors: {
        thetaTauGold: '#FFB500', // Space theme vibrant golden yellow
        thetaTauRed: '#8B0000', // Example hex value for dark red
        spaceNavy: '#1A2B42', // Deep space navy blue
        spaceBlue: '#4FC3F7', // Light blue/cyan for accents
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
        slideIn: 'slideIn 0.3s ease-out',
      },
    },
  },
  plugins: [],
}

