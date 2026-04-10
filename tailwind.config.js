/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:    "#7C3AED",
        secondary:  "#06B6D4",
        accent:     "#22C55E",
        background: "#020617",
        surface:    "#0F172A",
        glow:       "#A78BFA",
        "text-primary":   "#E2E8F0",
        "text-secondary": "#94A3B8",
      },
      fontFamily: {
        display: ["'Orbitron'", "sans-serif"],
        body:    ["'Syne'", "sans-serif"],
        mono:    ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        "float":        "float 6s ease-in-out infinite",
        "pulse-slow":   "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
        "spin-slow":    "spin 20s linear infinite",
        "glow-pulse":   "glowPulse 2s ease-in-out infinite",
        "text-shimmer": "textShimmer 3s ease-in-out infinite",
        "grid-move":    "gridMove 20s linear infinite",
        "border-glow":  "borderGlow 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-20px)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px #7C3AED44" },
          "50%":      { boxShadow: "0 0 60px #7C3AED99, 0 0 100px #7C3AED33" },
        },
        textShimmer: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%":      { backgroundPosition: "100% 50%" },
        },
        gridMove: {
          "0%":   { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "40px 40px" },
        },
        borderGlow: {
          "0%, 100%": { borderColor: "#7C3AED66" },
          "50%":      { borderColor: "#06B6D4AA" },
        },
      },
    },
  },
  plugins: [],
};
