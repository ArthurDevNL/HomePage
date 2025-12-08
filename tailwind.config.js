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
        'accent-sapin': '#1D4A3A', // Vert sapin (forest green)
        'accent-sapin-light': '#2D6A50', // Lighter sapin for hover states
      }
    },
  },
  plugins: [],
}
