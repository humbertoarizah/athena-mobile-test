import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#622fb4",
        secondary: "#80C4E4",
        dark_secondary: "#80C4E4",
        gray: "#C0C3C9",
        light_gray: "#B6B6B6",
        dark_gray: "#52565E",
        dark_white: "#F1F3F3",
        light_white: "#ECEEEF",
        black: "#030509",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
