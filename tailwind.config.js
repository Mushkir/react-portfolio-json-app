/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#041C32",
        primarySecondVariant: "#064663",
        secondary: "#ECB365",
        hoverSecondary: "#efc283",
        fontColor: "#04293A",
        fontSecondVariant: "#1d3e4d",
      },
      fontFamily: {
        Sen: ["Sen"],
      },
    },
  },
  plugins: [],
};
