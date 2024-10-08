/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '0 0 10px rgba(0, 0, 0, 0.1)',
      },
      colors: {
        coral: '#FF7F50',
        lightcoral: '#FF7F50',
        slategrey: '#2F4F4F',
      },
    },
  },
  plugins: [],
}

