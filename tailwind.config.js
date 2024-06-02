/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'FistF': ["Jost", "sans-serif"],
        'SecondF': ["Ubuntu", "sans-serif"],
        'ThirdF': ["Signika Negative", "sans-serif"],
        'ForthF': ["Quicksand", "sans-serif"],
        'FifthF': ["Noto Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
};
