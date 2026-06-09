/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body:    ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        brand: {
          red:  '#C8181E',
          blue: '#00A3D5',
        },
        dark: {
          base:    '#000000',
          surface: '#0C0C0C',
          card:    '#111111',
          border:  'rgba(255,255,255,0.07)',
        },
      },
      letterSpacing: {
        display: '0.04em',
      },
    },
  },
  plugins: [],
}
