/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#525252',
        tgreen: '#1DA599',
        orange: '#FFC265',
        bgtext: '#C1FFFA',
        bgicon: 'C1FFFA',
        bgblue: 'F3FFFE',
        abu: '#4A4A4A',
      },
      fontFamily: {
        kufam: 'Kufam, sans',
        nunito: 'Nunito sans',
      },
    },
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
}