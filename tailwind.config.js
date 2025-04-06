/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        primaryColor : "#0067FF",
        yellowColor:"#FE860D",
        purpleColor: "#9771FF",
        irisBlueColor: "#2BD0FD",
        headingColor: "#FFFFFF",
        blackheadingColor: "#101214",
        headingColor1: "#101214",
        textColor: "#D1E1FF",
        blacktextColor: "#2A2D33",
        textColor1: "#2A2D33",
        // currentColor:"#E6D75C"
      },

      boxShadow: {
        panelShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
      },
    },
  },
  plugins: [],
}