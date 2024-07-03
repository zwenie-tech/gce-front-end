/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary-green': 'hsl(98, 56%, 28%)',
        'light-green': 'hsl(79, 39%, 83%)',
      },
    },
  },
  plugins: [],
}

