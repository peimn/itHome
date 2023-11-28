/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    borderRadius: {
      lg: '30px',
      md: '20px',
      sm: '10px',
      xs: '5px'
    },
    extend: {
      colors: {
        'regal-blue': '#262836',
        'regal-grey': '#323643',
        'regal-blue-text': '#6A7099',
        'regal-gold': '#E6BB72',
        'dark-gold': '#D2AA66',
        'darker-gold': '#594F31',
        'red': '#FF0000',
        'white-grey': '#D9D9D9',
        'white': '#FFF',
        'black': '#000',
        'mid-grey': '#4B4F62'
      },
      dropShadow: {
        '3xl': [
          '0 0 25px #D2AA66',
          '0 0 20px rgba(0, 0, 0, 0.2)',
          '0 0 20px rgba(0, 0, 0, 0.2)'
        ]
      }
    },
  },
  plugins: [],
}

