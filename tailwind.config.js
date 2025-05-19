/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#4F9530",
        secondary: "#43AADA",
        yellow: "#E4CA2A",
        current: "currentColor",
        transparent: "transparent",
        white: "#ffffff",
        black: "#121723",
        dark: "#1d2430",
        "bg-color-dark": "#171c28",
        "body-color": "#788293",
        "body-color-dark": "#959cb1",
        "gray-dark": "#1e232e",
        "gray-light": "#f0f2f9",
      },
    },
  },
  plugins: [],
};
