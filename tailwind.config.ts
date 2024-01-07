import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "2rem",
      },
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Lato", "Noto Sans TC", "sans-serif"],
        rubik: ["Rubik", "Noto Sans TC", "sans-serif"],
      },
      colors: {
        white: { light: "#FFFFFF", DEFAULT: "#FFFFFF", dark: "#FFFFFF" },
        gold: { light: "#E5C366", DEFAULT: "#E5C366", dark: "#CBAB58" },
        purple: { light: "#A441E0", DEFAULT: "#A441E0", dark: "#B53DFF" },
        pink: { light: "#FF3495", DEFAULT: "#FF3495", dark: "#EB127A" },
        green: { light: "#00D98B", DEFAULT: "#00D98B", dark: "#19D18F" },
        blue: { light: "#46A5FD", DEFAULT: "#46A5FD", dark: "#3E9EF6" },
        "6-6": { light: "#373737", DEFAULT: "#373737", dark: "#595959" },
        "5-6": { light: "#595959", DEFAULT: "#595959", dark: "#808080" },
        "4-6": { light: "#808080", DEFAULT: "#808080", dark: "#A5A5A5" },
        "3-6": { light: "#A5A5A5", DEFAULT: "#A5A5A5", dark: "#BFBFBF" },
        "2-6": { light: "#BFBFBF", DEFAULT: "#BFBFBF", dark: "#D9D9D9" },
        "1-6": { light: "#D9D9D9", DEFAULT: "#D9D9D9", dark: "#FFFFFF" },
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
