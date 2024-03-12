/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {

    screens: {
      'xss': '320px',    
      'xs': '365px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {

      colors : {
        'rm-blue-900' : '#000715',
        'rm-blue-700' : '#000E2A',
        'rm-blue-200' : '#00B1E9',
        'rm-yellow-200' : '#FAFF00',

      },

      backgroundImage : {
        'banner-home' : 'url("assets/background.jpg")',
        'banner-filmes' : 'url("assets/bg-filmes.jpg")',
        'banner-series' : 'url("assets/bg-series.jpg")'
      }

      
    },
  },
  plugins: [],
}

