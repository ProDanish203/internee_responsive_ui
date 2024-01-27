/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#010015",
        bgSecondary: "#211360",
        bgTertiary: "#100a30",
        contrast: "#b532b1",
        contrastHigh: "#6936f5",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/bg.jpg')",

      },
    },
  },
  plugins: [],
}