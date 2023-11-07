/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        'primary': '#D9D9D9',
        'muted': '#383A48',
        'pjBlue': '#6898D0',
        'pjGreen': '#7DC242',
        'pjPurple': '#DDA5FF',
        'pjPink': '#FFB5A8',
        'pjOrange': '#FB9570',

      }
    },
  },
  plugins: [],
}

