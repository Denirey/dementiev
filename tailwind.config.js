/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#533afd",
        "primary-deep": "#4434d4",
        "primary-press": "#2e2b8c",
        "primary-soft": "#665efd",
        "primary-subdued": "#b9b9f9",
        "brand-dark-900": "#1c1e54",
        ink: "#0d253d",
        "ink-secondary": "#273951",
        "ink-mute": "#64748d",
        "ink-mute-2": "#61718a",
        "canvas-soft": "#f6f9fc",
        "canvas-cream": "#f5e9d4",
        ruby: "#ea2261",
        magenta: "#f96bee",
        lemon: "#9b6829",
        "shadow-blue": "#003770",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
}
