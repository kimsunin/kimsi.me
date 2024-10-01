import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        w: "width",
        h: "height",
        bg: "background-color",
      },
      screens: {
        mobile: {max: "767px"},
        tablet: {min: "768px", max: "1023px"},
        pc: {min: "1024px"},
        "tablet-pc ": {min: "768px"}
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
