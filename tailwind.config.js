/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "src/input.css", "js/scripts.js", "view/*.html"],
  theme: {
    extend: {
      colors: {
        blue: "#1C5FC5",
        red: "#E7101D",
        green: "#0D9D57",
        pink: "#F39ED6",
        yellow: "#F2C107",
        orange: "#E96404",
        grey: "#EBE5DE",
      },
      fontWeight: {
        extrabold: 800,
        black: 900,
        introbold: 1000,
      },
      fontSize: {
        title: "2rem",
        content: "1rem",
        intro: "4.5rem",
      },
      fontFamily: {
        secondary: ["Roboto", "sans-serif"],
        primary: ["Raleway", "serif"],
      },
      gridTemplateColumns: {
        14: "repeat(14, minmax(0, 1fr))",
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme, variants }) {
      const keyframes = {
        "@keyframes scroll": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(-100%)" },
        },
      };

      addUtilities(keyframes, ["responsive", "hover"]);
    },
  ],
};
