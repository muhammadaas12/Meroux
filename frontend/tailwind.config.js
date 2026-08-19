// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        // Fade in from below
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(40px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        // Simple fade in
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        // Fade from left
        fadeLeft: {
          "0%": { opacity: 0, transform: "translateX(-40px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        // Fade from right
        fadeRight: {
          "0%": { opacity: 0, transform: "translateX(40px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        // Scale up effect
        scaleUp: {
          "0%": { transform: "scale(0.8)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
      },
      animation: {
        fadeUp: "fadeUp 1s ease-out forwards",
        fadeIn: "fadeIn 2s ease-in-out forwards",
        fadeLeft: "fadeLeft 1s ease-out forwards",
        fadeRight: "fadeRight 1s ease-out forwards",
        scaleUp: "scaleUp 0.8s ease-out forwards",
      },
      fontFamily: {
        libre: ["Libre Franklin", "sans-serif"],
      },
      colors: {
        primary: "#14B8A6", // teal shade
        secondary: "#06B6D4", // cyan shade
        accent: "#FACC15", // yellow accent
      },
      spacing: {
        128: "32rem", // extra large spacing
      },
      borderRadius: {
        xl2: "1.5rem", // bigger rounded corners
      },
    },
  },
  plugins: [],
};
