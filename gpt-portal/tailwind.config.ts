import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: { DEFAULT: "#0A0A0A", 1: "#141414", 2: "#181818", 3: "#1F1F1F" },
        border: { DEFAULT: "#1F1F1F", strong: "#2A2A2A" },
        fg: "#FFFFFF",
        muted: "#8A8A8A",
        subtle: "#5A5A5A",
        lime: { DEFAULT: "#D1FE17", hover: "#BFE810" },
        magenta: { DEFAULT: "#EC1E79", hover: "#D41968" },
        warn: "#F5A623",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        xl: "14px",
        "2xl": "20px",
      },
      animation: {
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
        "slide-down": "slide-down 0.4s cubic-bezier(0.2,0.8,0.2,1)",
        "fade-in": "fade-in 0.3s ease-out",
        blink: "blink 1s infinite",
      },
      keyframes: {
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.85)" },
        },
        shimmer: {
          "0%, 100%": { left: "-100%" },
          "50%": { left: "120%" },
        },
        "slide-down": {
          from: { opacity: "0", transform: "translateY(-8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
