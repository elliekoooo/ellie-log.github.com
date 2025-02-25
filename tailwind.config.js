/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neonBlue: "#00FFFF",
        neonPurple: "#8A2BE2",
        neonGreen: "#00FF00",
        darkBg: "#0a0f1e",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        vt323: ["VT323", "monospace"],
      },
      boxShadow: {
        "neon-blue": "0 0 10px #00FFFF",
        "neon-purple": "0 0 10px #8A2BE2",
      },
      animation: {
        "pulse-slow": "pulse 3s infinite",
        "glitch": "glitch 0.5s infinite",
      },
      keyframes: {
        glitch: {
          "0%": { transform: "translate(0, 0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(2px, -2px)" },
          "60%": { transform: "translate(-1px, 1px)" },
          "80%": { transform: "translate(1px, -1px)" },
          "100%": { transform: "translate(0, 0)" },
        },
      },
    },
  },
  plugins: [],
}

