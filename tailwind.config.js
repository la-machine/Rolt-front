/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      screens: {
        "lnd-md": "870px",
        xs:"320px",
        sm:"375px",
        sml:"500px",
        md:"687px",
        mdl:"768px",
        lg:"960px",
        lgl:"1024px",
        xl:"1280px"
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

