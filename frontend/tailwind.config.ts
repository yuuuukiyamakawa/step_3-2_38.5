import type { Config } from "tailwindcss";
const { withIcons } = require('@iconify/tailwind');

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'zenkaku': ['Zen Kaku Gothic New', 'sans-serif'], // フォントを追加
      },
    },
  },
  plugins: [],
};

export default config;
