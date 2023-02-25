/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          'red': "hsl(1, 90%, 64%)",
          'blue': "hsl(219, 85%, 26%)",
        },
        'grayish-blue': {
          100: "hsl(210, 60%, 98%)",
          200: "hsl(211, 68%, 94%)",
          300: "hsl(205, 33%, 90%)",
          400: "hsl(219, 14%, 63%)",
          500: "hsl(219, 12%, 42%)",
          600: "hsl(224, 21%, 14%)"
        }
      },
    },
  },
  plugins: [],
}
