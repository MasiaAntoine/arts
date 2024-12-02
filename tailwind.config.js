/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paleWhite: {
          100: "#f8f8f8",
        },
        black: "rgb(18, 18, 18)",
      },
      textColor: {
        black: "rgb(18, 18, 18)",
      },
      backgroundColor: {
        black: "rgb(18, 18, 18)",
      },
    },
  },
  plugins: [],
};
