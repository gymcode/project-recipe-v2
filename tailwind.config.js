/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        "1/10": "93%",
      },
    },
    screens: {
      xs: "320px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}
