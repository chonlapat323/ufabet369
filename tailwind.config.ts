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
        "primary-yellow": "rgb(var(--color-primary-yellow) / <alpha-value>)",
        "dark-background": "rgb(var(--color-dark-background) / <alpha-value>)",
        "golden-border": "rgb(var(--color-golden-border) / <alpha-value>)",
        "text-light": "rgb(var(--color-text-light) / <alpha-value>)",
        "text-dark": "rgb(var(--color-text-dark) / <alpha-value>)",
        "text-input": "rgb(var(--color-text-input) / <alpha-value>)",
        "text-placeholder":
          "rgb(var(--color-text-placeholder) / <alpha-value>)",
        "input-bg": "rgb(var(--color-input-bg) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
export default config;
