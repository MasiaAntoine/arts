/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paleWhite: {
          100: "#f8f8f8",
        },
      },
    },
  },
  plugins: [],
};
