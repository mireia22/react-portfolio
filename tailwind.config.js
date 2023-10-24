/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      background: "#640991",
      font: "#f4e8fa",
      white: "#ffffff",
      black: "#000000",
      greenblue: "#03858c",
      purple: {
        light: "#e9d5ff",
        medium: "#a855f7",
        dark: "#3b0764",
      },
    },
    extend: {
      fontFamily: {
        narrow: ["Archivo Narrow", "sans-serif"],
        mohave: ["Mohave", "sans-serif"],
        fjalla: ["Fjalla One", "sans-serif"],
        antonio: ["Antonio", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern":
          "url('https://www.transparenttextures.com/patterns/shley-tree-1.png')",
        "stars-pattern":
          "url('https://www.transparenttextures.com/patterns/stardust.png')",
      },
    },
  },
  plugins: [],
};
