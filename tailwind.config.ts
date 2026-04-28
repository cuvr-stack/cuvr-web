import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#2563eb",
          indigo: "#4f46e5",
          purple: "#7c3aed",
          violet: "#8b5cf6",
          navy: "#0b1530",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(90deg, #2563eb 0%, #7c3aed 50%, #a855f7 100%)",
        "brand-gradient-vert":
          "linear-gradient(180deg, #2563eb 0%, #7c3aed 100%)",
      },
      boxShadow: {
        card: "0 10px 30px -10px rgba(17, 24, 39, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
