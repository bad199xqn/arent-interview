/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#FFF",
        primary: {
          300: "#FFCC21",
          400: "#FF963C",
          500: "#EA6C00",
        },
        secondary: {
          300: "#8FE9D0"
        },
        dark: {
          500: "#414141",
          600: "#2E2E2E"
        },
        grayArent: {
          300:"#8B8B8B",
          400: "#777",
          500: "#656565"
        }
      }
    },
  },
  plugins: [],
}
