/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "src/input.css", "js/scripts.js"],
  theme: {
    extend: {
      colors: {
        blue: "#1C5FC5",
        red: "#E7101D",
        green: "#0D9D57",
        pink: "#F39ED6",
        yellow: "#F2C107",
        orange: "#E96404",
      },
    },
  },
  plugins: [],
};
