/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-slate': '#1a1a1a',
        'light-gray': '#f5f5f5',
        'accent-gray': '#333333',
      },
    },
  },
  plugins: [],
}

