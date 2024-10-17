/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    extend: {
      container: {
        screens: {
          sm: '640px', // default min-width for small screens
          md: '768px', // default min-width for medium screens
          lg: '1024px', // default min-width for large screens
          xl: '1128px', // default min-width for extra-large screens
          '2xl': '1280px', // default min-width for 2xl screens
        },
        padding: {
          default: '1.25rem', // default padding for all screens
          sm: '2rem', // padding for small screens
        },
      },
      fontFamily: {
        sans: ['"Manrope"', 'sans-serif'],
      },
      colors: {
        transparent: 'transparent',
        white: '#FFFFFF',
        black: '#000000',
        boldoDark: "#0A2640",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fastFadeIn: {
          '60%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'bounce-in': {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '50%': { transform: 'scale(1.1)', opacity: '0.8' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        'slow-fade-in-25s': 'fadeIn 25s ease-in-out',
        'slow-fade-in-20s': 'fadeIn 20s ease-in-out',
        'slow-fade-in-15s': 'fadeIn 15s ease-in-out',
        'slow-fade-in-13s': 'fadeIn 13s ease-in-out',
        'slow-fade-in-11s': 'fadeIn 11s ease-in-out',
        'slow-fade-in-9s': 'fadeIn 9s ease-in-out',
        'slow-fade-in-7s': 'fadeIn 7s ease-in-out',
        'slow-fade-in-5s': 'fadeIn 5s ease-in-out',
        'slow-fade-in': 'fadeIn 3s ease-in-out',
        'fast-fade-in': 'fastFadeIn 0.3s ease-in-out',
        'spin': 'spin 2s linear infinite',
        'bounce-in': 'bounce-in 1s ease-in-out',
      },
    },
  },
  plugins: [],
}
