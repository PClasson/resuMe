module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#1f2147",
      secondary: "#574373",
    }),
    gradientColorStops: (theme) => ({
      ...theme("colors"),
      primary: "#1f2147",
      secondary: "#702429",
    }),
    extend: {
      fontFamily: {
        sans: ["SF-Compact", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
