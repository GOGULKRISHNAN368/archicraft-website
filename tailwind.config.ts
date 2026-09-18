import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    // Default Tailwind breakpoints are used deliberately for device-friendly
    // responsiveness: sm 640 (large phones), md 768 (tablets/portrait),
    // lg 1024 (tablet landscape / small desktop), xl 1280, 2xl 1536.
    extend: {
      colors: {
        teal: {
          DEFAULT: "#0B3D36",
          900: "#0B3D36",
          700: "#145C4F",
          100: "#DCEAE6",
        },
        gold: {
          DEFAULT: "#C6A15B",
          600: "#C6A15B",
          800: "#9C7A3E",
        },

        warmwhite: "#FAF7F2",
        softgrey: "#E4E1DA",
        beige: "#EFE7DA",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        accent: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        button: ["var(--font-poppins)", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      spacing: {
        18: "4.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
