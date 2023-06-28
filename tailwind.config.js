const FormKitVariants = require('@formkit/themes/tailwindcss')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{vue, js, jsx, ts, tsx}", 
    "./index.html",
    './node_modules/@formkit/themes/dist/tailwindcss/genesis/index.cjs'],
  theme: {
    extend: {},
  },
  plugins: [FormKitVariants],
  darkMode: "class"
}

