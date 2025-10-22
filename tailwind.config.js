/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      // Official Theta Tau brand colors (from THETA_TAU_BRANDING.md)
      colors: {
        thetaTauGold: '#e4ad38',  // RGB: 228, 173, 56
        thetaTauRed: '#81171a',   // RGB: 129, 23, 26
      },

      // Official Theta Tau typography (Avenir Next family)
      fontFamily: {
        primary: ["'Avenir Next'", '-apple-system', 'BlinkMacSystemFont', "'Segoe UI'", 'sans-serif'],
        sans: ["'Avenir Next'", '-apple-system', 'BlinkMacSystemFont', "'Segoe UI'", 'sans-serif'],
      },

      // Custom animations
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInFromLeft: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInFromRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },

      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
        slideIn: 'slideIn 0.3s ease-out',
        slideInFromLeft: 'slideInFromLeft 0.3s ease-out',
        slideInFromRight: 'slideInFromRight 0.3s ease-out',
        scaleIn: 'scaleIn 0.3s ease-out',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },

      // Custom spacing
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },

      // Custom border radius
      borderRadius: {
        '4xl': '2rem',
      },

      // Custom shadows
      boxShadow: {
        'glow-gold': '0 0 20px rgba(228, 173, 58, 0.5)',
        'glow-red': '0 0 20px rgba(128, 21, 23, 0.5)',
      },

      // Z-index utilities
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    // Add accessibility utilities for reduced motion
    function({ addUtilities }) {
      const newUtilities = {
        '@media (prefers-reduced-motion: reduce)': {
          '.animate-fadeIn, .animate-slideIn, .animate-slideInFromLeft, .animate-slideInFromRight, .animate-scaleIn, .animate-pulse': {
            animation: 'none',
          },
        },
      };
      addUtilities(newUtilities);
    },
  ],
}

