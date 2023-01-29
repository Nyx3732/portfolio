/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    
    fontFamily: {
      "oswald": ['Oswald', "sans-serif"],
      "mavenpro": ['Maven Pro',"sans-serif"],
      "opensans": ['Open Sans', "sans-serif"],
      "archivo": ['Archivo', "sans-serif"],
      "inter": ['Inter', "sans-serif"],
      "sans": ['Inter', "sans-serif"],

    },
    extend: {
      colors: {
        green:{
          1:"#75FCDD",
          2:"#265448"
        },
        gray:{
          1:"#252628"
        }
      }
    },
  },



  plugins: [],
}


