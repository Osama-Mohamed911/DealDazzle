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
        designColor: "#2B72FC",
        // B59BFF
        // #fcb900
      },
      backgroundImage: {
        hero: "url('/src/assets/banner.webp')",
      },
    },
  },
  plugins: [],
};
export default config;
