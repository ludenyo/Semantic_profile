/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B2A3C",
        muted: "#61727D",
        paper: "#FBF9F5",
        line: "#ECE5D8",
        cream: "#F7F3EA",
        teal: "#12807A",
        mint: "#5CC2B8",
        brand: {
          DEFAULT: "#0B2A3C",
          dark: "#071E2B",
          teal: "#12807A",
          mint: "#5CC2B8",
        },
        accent: "#F2A93B",
        danger: "#a73c47",
        success: "#12807A",
      },
      maxWidth: {
        layout: "1376px",
        form: "720px",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        panel: "1.5rem",
      },
      boxShadow: {
        panel: "0 16px 40px rgb(11 42 60 / 8%)",
      },
    },
  },
  plugins: [],
};
