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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        appearing: {
          "0%": { opacity: "0%" },
          "80%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
      },
      animation: {
        appearing: "appearing 2s",
      },
      fontFamily: {
        caveat: ["Caveat"],
        paragraph: ["Itim"],
        subHeads: ["Rubik"],
        headings: ["Roboto Condensed"],
      },
    },
  },
  plugins: [],
};
export default config;
