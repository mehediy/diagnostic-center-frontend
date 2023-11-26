/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#14A077",
          dark: "#123841",
        },
        dark: "#F5F5F2",
        darker: "#E9EBEB",
        error: "#ED455D",
      },
      textColor: {
        light: "#64666C",
        primary: "#121212",
        invert: "#FFFFFF",
      },
      backgroundColor: {
        base: "#FFFFFF",
        primary: "#FFFFFF",
        dark: "#F5F5F2",
        darker: "#E9EBEB",
      },
      outlineColor: {
        brand: "#14A077",
        primary: "#E9EBEB",
        error: "#ED455D",
      },
    },
  },
  plugins: [],
};
