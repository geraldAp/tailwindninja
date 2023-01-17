/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#ff6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        }
      },
      fontSize: {
        mammoth: '8rem',
      },

      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
      },
      borderRadius: {

      }

    },

  },
  plugins: [],
}
