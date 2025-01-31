import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mds}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        custombg: "#e7ceb3",
        unswlink: "#c7b39d",
      },
      fontFamily: {
        jbmono: ["var(--font-jetbrains-mono)"],
      },
      width: {
        "pfp-width-desktop": "calc(33% - 10px)",
        "450px": "450px",
      },
      height: {
        "450px": "450px",
      },
    },
  },
  plugins: [],
};
export default config;
