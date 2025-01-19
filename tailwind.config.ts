module.exports = {
  content: [
    "./pages/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}",
    "./src/**/*.{html,js,jsx,ts,tsx}", // Add this line if your source files are in the src directory
  ],
  theme: {
    extend: {
      colors: {
        "dark": {
          100: "#e6beae",
          200: "#e7d8c9",
          300: "#e7d8c9",
          400: "#e6beae",

        },
        "green": {
          100: "#723d46",
          200:"#540b0e",
          300: "#540b0e",
          400: "#540b0e",
          500: "#540b0e",
          600: "#e6beae",
        },
        "red": {
          100: "#rgb(255, 0, 0, .4)",
          200: "#ff0000",
        },
        "white": {
          100: "#540b0e",
          200: "#540b0e",
          300: "#540b0e"
        },
        "blue": {
          200: "#4898f0",
          400: "#503cef",
          600: "#513cef",
          800: "#140e32"
        }
      }
    },
  },
  plugins: [],
}