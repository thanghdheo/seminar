const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {},
    colors: {
      ...colors,
      gray: {
        900: "#111827",
        800: "#1F2937",
        700: "#374151",
        600: "#4B5563",
        500: "#6B7280",
        400: "#9CA3AF",
        300: "#D1D5DB",
        200: "#E5E7EB",
        100: "#F3F4F6",
        50: "#F9FAFB",
      },
      "radical-red": {
        900: "#B8001F",
        800: "#D60024",
        700: "##F50029",
        600: "#FF143C",
        500: "#FF3355",
        400: "#FF5C77",
        300: "#FF8599",
        200: "#FFC2CC",
        100: "#FFD6DD",
        50: "#FFEBEE",
      },
      "prussian-blue": {
        900: "#00143D",
        800: "#001847",
        700: "#001B52",
        600: "#001F5C",
        500: "#002266",
        400: "#003DB8",
        300: "#3377FF",
        200: "#85ADFF",
        100: "#ADC9FF",
        50: "#D6E4FF",
      },
      red: {
        900: "#7F1D1D",
        800: "#991B1B",
        700: "#B91C1C",
        600: "#DC2626",
        500: "#EF4444",
        400: "#F87171",
        300: "#FCA5A5",
        200: "#FECACA",
        100: "#FEE2E2",
        50: "#FEF2F2",
      },
      green: {
        900: "#064E3B",
        800: "#065F46",
        700: "#047857",
        600: "#059669",
        500: "#10B981",
        400: "#34D399",
        300: "#6EE7B7",
        200: "#A7F3D0",
        100: "#D1FAE5",
        50: "#ECFDF5",
      },
      teal: {
        900: "#134E4A",
        800: "#115E59",
        700: "#0F766E",
        600: "#0D9488",
        500: "#14B8A6",
        400: "#2DD4BF",
        300: "#5EEAD4",
        200: "#99F6E4",
        100: "#CCFBF1",
        50: "#F0FDFA",
      },
    },
    fontFamily: {
      sans: ['"Lexend"', "sans-serif"],
    },
    fontSize: {
      xs: ["0.75rem", "1rem"],
      sm: ["0.875rem", "1.25rem"],
      base: ["1rem", "1.5rem"],
      lg: ["1.125rem", "1.75rem"],
      xl: ["1.25rem", "1.75rem"],
      "2xl": ["1.5rem", "2rem"],
      "3xl": ["1.875rem", "2.25rem"],
      "4xl": ["2.25rem", "2.5rem"],
      "5xl": ["3rem", "3rem"],
      "6xl": ["3.75rem", "3.75rem"],
      "7xl": ["4.5rem", "4.5rem"],
      "8xl": ["6rem", "6rem"],
      "9xl": ["8rem", "8rem"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
