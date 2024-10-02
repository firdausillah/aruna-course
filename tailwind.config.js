/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], // Tambahkan font di sini
      },
      aspectRatio: {
        '3/2': '3 / 2',
      },
    },
  },
  plugins: [],
}