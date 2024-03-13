/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        body: "url('/src/assets/images/background.webp')",
        btn: "linear-gradient(39deg, rgba(158,128,46,1) 10%, rgba(4,17,27,1) 100%);",
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out forwards",
        fadeOut: "fadeOut 1s ease-in-out forwards",
        startExperience: "startExperience 1s ease-in-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        startExperience: {
          "0%": { opacity: "1", visibility: "visible" },
          "100%": { opacity: "0", visibility: "hidden" },
        },
      },
    },
    colors: {
      slate: {
        100: "#f5f5f5",
        200: "#e5e5e5",
        300: "#d4d4d4",
        400: "#a3a3a3",
        500: "#737373",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "#171717",
      },
      gold: "#FFA722",
      blackSuit: "#1C1A1F",
      blueSuit: "#002866",
      marroonSuit: "#491313",
    },
    plugins: [],
  },
};
