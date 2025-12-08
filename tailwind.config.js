/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'accent-orange': '#D97706', // Burnt orange
        'accent-indigo': '#4338ca', // Deep indigo
      }
    },
  },
  plugins: [],
}
