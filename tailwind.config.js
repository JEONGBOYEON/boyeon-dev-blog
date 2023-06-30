/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#6daed8",
        main_blod: "#3f87b6",
        pink_back: "#fce7f3",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
