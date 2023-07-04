/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      spacing: {
        skills: '36rem',
        'title-box': '46rem'
      },
      fontFamily: {
        title: ['DotGothic16'],
        text: ['JetBrains Mono']
      },
      colors: {
        body: '#61a6ab',
        'body-fade': '#2E7378',
        primary: '#ffce6d',
        secondary: '#f6f6e9',
        item: '#291b25',
        highlight: '#ed5b2d'
      },
      keyframes: {
        backgroundPan: {
          '0%': { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '-200% center' }
        },
        scale: {
          '0%, 100%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1)' }
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(180deg)' }
        }
      },
      animation: {
        gradient: 'backgroundPan 3s linear infinite',
        'spin-half': 'rotate 1s linear infinite',
        'scale-full': 'scale 700ms ease forwards'
      }
    },
    plugins: []
  }
}
