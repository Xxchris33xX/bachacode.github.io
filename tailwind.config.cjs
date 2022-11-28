/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			spacing: {
				'skills': '36rem',
				'title-box':'46rem',
			  },
			  fontFamily:{
				title: ['DotGothic16'],
				text: ['JetBrains Mono'],
			  },
			  colors:{
				'body': '#61a6ab',
				'primary': '#ffce6d',
				'secondary':'#f6f6e9',
				'item':'#291b25',
				'highlight':'#ed5b2d',
			  }
		},
	},
	plugins: [],
}
