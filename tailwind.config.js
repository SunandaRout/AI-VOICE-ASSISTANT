/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F7F7F4",
        ink: "#12203B",
        inkmuted: "#4B5567",
        line: "#E3E4DE",
        teal: {
          DEFAULT: "#0F766E",
          soft: "#E4F3F1",
        },
        sky: "#38BDF8",
        surface: "#FFFFFF",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      maxWidth: {
        content: "1120px",
      },
    },
  },
  plugins: [],
}
