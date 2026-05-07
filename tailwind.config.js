/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
        display: ["Poppins", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#fff1f2",
          100: "#ffe1e3",
          200: "#ffc8cc",
          300: "#ffa1a8",
          400: "#ff6b75",
          500: "#ff2d3d",
          600: "#ec0a1d",
          700: "#c70615",
          800: "#a30916",
          900: "#860c17",
          950: "#4a0007",
        },
        ink: {
          50: "#f7f7f8",
          100: "#eeeef0",
          200: "#d9d9de",
          300: "#b6b6c0",
          400: "#8d8d9c",
          500: "#6f6f80",
          600: "#575767",
          700: "#464654",
          800: "#3a3a45",
          900: "#1f1f29",
        },
      },
      boxShadow: {
        soft: "0 6px 24px -8px rgba(15, 15, 25, 0.08)",
        glow: "0 18px 48px -16px rgba(236, 10, 29, 0.35)",
        card: "0 12px 40px -16px rgba(15, 15, 25, 0.12)",
        ring: "0 0 0 1px rgba(15, 15, 25, 0.04), 0 8px 24px -10px rgba(15, 15, 25, 0.08)",
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(1200px 600px at 50% -10%, rgba(255, 45, 61, 0.10), transparent 60%)",
        "brand-gradient":
          "linear-gradient(135deg, #ff2d3d 0%, #ec0a1d 50%, #c70615 100%)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      keyframes: {
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseSoft: {
          "0%,100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        pulseSoft: "pulseSoft 3.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
