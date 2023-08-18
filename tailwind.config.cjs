/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				lg: '940px',
				xl: '940px',
				'2xl': '940px',
			},
			fontSize: {
				base: ['16px', '20px'],
				'2xl': ['24px', '30px'],
				'3xl': ['32px', '36px'],
				'4xl': ['38px', '44px'],
			},
			textColor: {
				'gray-700': '#333',
				'gray-600': '#555',
				'gray-500': '#666'
			},
			gridAutoColumns: {
				'fr': '1fr 1fr',
				'fr-sm': '0 1fr',
			},
		},
	},
	plugins: [],
}
