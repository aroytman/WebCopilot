/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html',
  ],
  theme: {
    extend: {
      boxShadow: {
        'xs': '0 0 15px 0 rgba(0, 0, 0, 0.1)',
        // 'xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}

