module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary": "#2b2b2b",
        "p-blue": "#d4ebf2",
        "primary-hover": "#414141"
      },

      fontSize: {
        "x-sm": "16px",
        "sm": "18px",
        "sm-l": "24px",
        "md": "30px",
        "md-sm": "35px",
        "lg": "50px"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
