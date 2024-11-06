/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    backgroundSize: {
      "gradient-dashed": "20px 2px, 100% 2px",
    },
    extend: {
      boxShadow: {
        shadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.3)",
      },
      fontFamily: {
        inter: ['"Inter"', "sans-serif"],
        space: ['"Space Grotesk"', "sans-serif"],
      },
      colors: {
        primary: "#003049",
        secondary: "#B2A4FF",
        accent: "#FFB4B4",
        dark: "#000E14",
        white: "#ffffff",
      },
      aspectRatio: {
        "9/10": "9 / 16",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
