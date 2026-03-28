import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: { DEFAULT: "#00C6FF" },
        blue: { brand: "#0072FF" },
        violet: { brand: "#7B2FF7" },
        magenta: { brand: "#C026B0" },
        aurora: { DEFAULT: "#00FFD1" },
        bg: {
          primary: "#0A0D14",
          card: "#0F1825",
          border: "#1A2840",
        },
        text: {
          primary: "#F0F4F8",
          secondary: "#8090A8",
          muted: "#4A6080",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "grad-signature": "linear-gradient(135deg, #00C6FF 0%, #0072FF 50%, #7B2FF7 100%)",
        "grad-aurora": "linear-gradient(135deg, #00FFD1 0%, #00C6FF 40%, #0072FF 100%)",
        "grad-deep": "linear-gradient(135deg, #0072FF 0%, #7B2FF7 55%, #C026B0 100%)",
        "grad-flow": "linear-gradient(135deg, #0072FF 0%, #00C6FF 100%)",
        "grad-subtle": "linear-gradient(135deg, #0F1825 0%, #1A2840 100%)",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "marquee-reverse": "marquee-reverse 30s linear infinite",
        shimmer: "shimmer 2s linear infinite",
        "fade-in-up": "fade-in-up 0.6s ease forwards",
        "draw-line": "draw-line 1.5s ease forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "draw-line": {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      borderRadius: {
        card: "12px",
        btn: "8px",
        badge: "6px",
        pill: "24px",
      },
    },
  },
  plugins: [],
};

export default config;
