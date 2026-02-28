import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#a88b7d",
        eggshell: "#F9F7F2",
        "eggshell-dark": "#EBE8E1",
        "background-dark": "#1a1816",
        "text-main": "#2d2a26",
        "text-muted": "#6b655f",
        "surface-light": "#ffffff",
        // Dark theme palette
        "dark-bg": "#0f0e0d",
        "dark-surface": "#161412",
        "dark-elevated": "#1c1a18",
        "dark-border": "rgba(255,255,255,0.08)",
        "dark-text": "#e8e6e1",
        "dark-muted": "#9a948c",
      },
      spacing: {
        "128": "32rem",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        sans: ["'Montserrat'", "sans-serif"],
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.25, 1, 0.5, 1)",
      },
      animation: {
        "fade-in-up": "fadeInUp 1.5s cubic-bezier(0.25, 1, 0.5, 1) forwards",
        reveal: "revealText 1.5s cubic-bezier(0.25, 1, 0.5, 1) forwards",
        "fade-in": "fadeIn 1.5s ease-out forwards",
        "slow-zoom": "slowZoom 20s linear infinite alternate",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(60px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        revealText: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slowZoom: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
