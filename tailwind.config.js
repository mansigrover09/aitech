/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {},
    fontFamily: {

      'josefin': ["Josefin Sans", 'sans-serif'],
      'poppin': ['"Poppins"', 'sans-serif'],
    }
  },
  plugins: [require("daisyui"), require('flowbite/plugin')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F69035",
          secondary: "#449D9E",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#fff",

        },
      }

    ],
  },
}