/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      spacing: {
        'skills': '36rem',
      },
      fontFamily:{
        titles: ['DotGothic16'],
        text: ['JetBrains Mono'],
      },
      colors:{
        'body': '#2c3848',
        'primary': '#e49f17',
        'secondary':'#f8f7da',
        'third':'#953f10',
      }
    },
  },
  plugins: []
}

