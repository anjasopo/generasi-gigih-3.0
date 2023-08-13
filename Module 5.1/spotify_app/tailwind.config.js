/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        spotify_main: '#1ED760',
        dark_main: '#0E0E0E',
        spotify_card: '#2B2B2B',
        spotify_card_hover: '#383838',
        },
    },
  },
  plugins: [],
}