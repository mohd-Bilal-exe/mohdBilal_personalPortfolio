/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      letterSpacing: {
        widestestcum: ".18em",
        widestest: ".28em",
        zaydawide: ".35em",
      },
      screens: {
        smartphone: { max: "640px" }, // Applies to all screens with a width of 640px or less
      },
      colors: {
        Red: "#FF4757",
        Yellow: "#FFC312",
        Blue: "#1E90FF",
        Green: "#2ED573",
        Blue2: "#5758BB",
        darkGray: "#101010",
        w1: "#e9ecef",
        w2: "#edf2f4",
        insta: "#DD2A7B",
        fb: "#3B5998",
        watspp: "#25D366",
        lnkin: "#0077B5",
        html: "#F48051",
        css: "#32A9DC",
        bootstrap: "#563D7C",
        react: "#16D8FF",
        tailwind: "#44a9b3",
        js: "#FFCA29",
      },
      dropShadow: {
        "text-sm": "1px 1px 1px rgba(0,0,0.60)",
        "text-md": "1px 2px 0px rgba(0,0,0.60)",
        "text-lg": "1px 4px 0px rgba(10,10,10,0.60)",
      },
      fontFamily: {
        fontSize: {
          xxs: ["clamp(0.75rem, calc(0.65rem + 0.22vw), 0.88rem)", "1.4"],
          xs: ["clamp(0.88rem, calc(0.75rem + 0.27vw), 1.00rem)", "1.4"],
          sm: ["clamp(1.00rem, calc(0.92rem + 0.39vw), 1.20rem)", "1.4"],
          md: ["clamp(1.13rem, calc(0.98rem + 0.73vw), 1.50rem)", "1.5"],
          lg: ["clamp(1.27rem, calc(1.03rem + 1.19vw), 1.88rem)", "1.4"],
          xl: ["clamp(1.42rem, calc(1.06rem + 1.80vw), 2.34rem)", "1.4"],
          "2xl": ["clamp(1.60rem, calc(1.08rem + 2.59vw), 2.93rem)", "1.2"],
          "3xl": ["clamp(1.80rem, calc(1.08rem + 3.63vw), 3.66rem)", "1.1"],
          "4xl": ["clamp(2.03rem, calc(1.03rem + 4.98vw), 4.58rem)", "1"],
          "5xl": ["clamp(2.28rem, calc(0.94rem + 6.71vw), 5.72rem)", "1"],
          "6xl": ["clamp(2.57rem, calc(0.78rem + 8.95vw), 7.15rem)", "1"],
          "7xl": ["clamp(3.10rem, calc(0.78rem + 10.50vw), 8.57rem)", "1"],
          "8xl": ["clamp(3.75rem, calc(0.78rem + 12.70vw), 10.25rem)", "1"],
        },
      },
    },
  },
  plugins: [],
};
