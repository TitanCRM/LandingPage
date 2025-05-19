/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",   // ← your static pages
    "./src/**/*.{js,ts}",   // ← future JS/TS files (optional)
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Segoe UI", "Tahoma", "Geneva", "Verdana", "sans-serif"],
      },
    },
  },
  plugins: [],
};

