module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "dark-primary": "#112948",
        "dark-DARK": "#003566",
        "dark-light": "#787A91",

        "dark-text": "#EEEEEE",
      },
    },
  },
  variants: {
    transform: ["hover", "responsive"],
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
