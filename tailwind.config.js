/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#55ffa5",
        dark: "#00222f",
        offset: "#e6f1f5",
        offsetdarker: "#9cdef3",
        textdark: "#213e52",
      },
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
        rob: ["Roboto", "sans-serif"],
        danc: ["Dancing Script", "cursive"],
        popp: ["Poppins", "sans-serif"],
        open: ["Open Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        salsa: ["Salsa", "cursive"],
      },
    },
  },
  plugins: [],
};
