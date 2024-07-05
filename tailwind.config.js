/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': 'hsl(98, 56%, 28%)',
        'light-green': 'hsl(79, 39%, 83%)',
        'light-gray': 'hsl(0, 12%, 95%)'
      },
      boxShadow: {
        'top-bottom': '0px 12px 12px 1px rgba(0, 0, 0, 0.1), 0px -12px 12px 1px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}

