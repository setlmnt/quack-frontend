/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        modak: ['modak'],
        montserrat: ['Montserrat'],
      },
      colors: {
        'verde': '#00937B',
        'branco': '#D9D9D9',
        'laranja': '#F23B01',
        'azul': '#025DB7',
        'roxo': '#AE4EB9',
        'cinza': '#B5BFC5',

      }
    },
  },
  plugins: [],
}