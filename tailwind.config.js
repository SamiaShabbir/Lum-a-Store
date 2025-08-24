/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6A0066",   // Deep Plum / Orchid
        secondary: "#F5BABB", // Soft Beige / Blush
        base: {
          DEFAULT: "#FFFFFF", // White
          light: "#F9F9F9",   // Light Gray
          border: "#E5E5E5",  // Divider Gray
        },
        text: {
          DEFAULT: "#1A1A1A", // Main text
          muted: "#6B6B6B",   // Muted text
        },
        pastel: {
          rose: "#F4C6C6",
          lavender: "#E9D8FD",
        },
      },
    },
  },
  plugins: [],
};
