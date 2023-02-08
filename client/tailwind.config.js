/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./node_modules/flowbite/**/*.js"],

 
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },

    },
    backgroundImage: {
      'upload': "url('../public/uploada.png')",
    },
  },
  plugins: [require("daisyui"),
  require('flowbite/plugin')],
  daisyui: {
    themes: ["emerald"],
  },

};
