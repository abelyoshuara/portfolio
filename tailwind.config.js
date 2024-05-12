/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Figtree", "sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "80rem",
      },
    },
    extend: {},
  },
  plugins: [],
};
