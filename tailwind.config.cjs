/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  daisyui: {
    theme: ["dark"]
  },
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui")
  ],
}

