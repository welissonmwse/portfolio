/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#4C02F1',
        'blue-light': '#35A3E6',
        'blue-dark': '#06044A',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        wave: {
          '0%':{transform:'rotate(0deg)'},
          '10%': {transform: 'rotate(14deg)'}, 
          '20%': {transform: 'rotate(-8deg)'},
          '30%': {transform: 'rotate(14deg)'},
          '40%': {transform: 'rotate(-4deg)'},
          '50%': {transform: 'rotate(10deg)'},
          '60%': {transform: 'rotate(0deg)'},
          '100%': {transform: 'rotate(0deg)'},
        }
      }
    },
    animation: {
      wave: 'wave 2.1s ease-in-out infinite',
    }
  },
  plugins: [],
}
