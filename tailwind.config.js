/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: { sans: ["Poppins", "system-ui", "sans-serif"] },
      colors: { green: "#44ba23", lightgrey: "#5f6f81", black: "#333333" },
    },
  },
  plugins: [],
};
