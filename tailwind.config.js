module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        primary: "#2A2F32",
        secondary: "#333333",
        tertiary: "#F5F5F5",
        danger: "#D73D42",
      }),
    },
    colors: {
      50: "#2A2F32",
    },
  },
  plugins: [],
};
