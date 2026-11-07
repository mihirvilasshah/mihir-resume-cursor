import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        sans: ["var(--font-jakarta)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      colors: {
        ink: {
          50: "#f4f1ea",
          100: "#e8e2d4",
          900: "#12141a",
          950: "#07080b",
        },
        neon: {
          teal: "#2ee6c7",
          violet: "#a78bfa",
          blue: "#3b82f6",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(46,230,199,0.18), 0 20px 60px -20px rgba(46,230,199,0.35)",
        card: "0 1px 0 rgba(255,255,255,0.04), 0 24px 80px -32px rgba(15,23,42,0.55)",
      },
      keyframes: {
        "float-y": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.9" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "matrix-drift": {
          "0%": { transform: "translate3d(0,0,0)" },
          "100%": { transform: "translate3d(0,-60px,0)" },
        },
        checkpop: {
          "0%": { transform: "scale(0.4)", opacity: "0" },
          "70%": { transform: "scale(1.08)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        "float-y": "float-y 7s ease-in-out infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
        marquee: "marquee 32s linear infinite",
        blink: "blink 1s step-end infinite",
        rise: "rise 0.8s ease-out both",
        "matrix-drift": "matrix-drift 18s linear infinite",
        checkpop: "checkpop 0.55s cubic-bezier(0.16,1,0.3,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
