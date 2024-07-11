/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#5D50C6",
      secondary: "#F85E9F",
      tertiary: "#191825",
      orange: "#FF5722",
      neutral: "#19182580",
      white: "#EEEEEE",
      fullwhite: "#FFFFFF",
    },
    fontFamily: {
      roboto: ['"Roboto"', "sans-serif"],
    },
    extend: {
      screens: {
        xsm: "480px",
      },
    },
  },
  plugins: [],
};
