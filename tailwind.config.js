// tailwind.config.js   module.exports = {
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'   theme: {   extend: {},   },   variants: {   extend: {},   },   plugins: [],   }
  theme: {
    borderWidth: {
    },
    extend: {
      with: {
        18: "70px",
        17: "0.8rem",
      },
      height: {
        18: "70px",
        85: "24rem",
        100: "490px"
      },
      backgroundImage: (theme) => ({
        confetti: "url('/img/confetti.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
