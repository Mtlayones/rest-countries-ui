/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/*.{js,jsx,ts,tsx}'],
	theme: {
		colors: {
			accent: '#ccffcc',
			background: '#e3ffe3',
			divider: '#afc4af',
			hover: '#a9ffa9',
			primary: '#8fff8f',
			'text-main': '#869686',
			'text-alternative': '#ffffff',
		},
		screens: {
			xs: '200px',
			sm: '320px',
			md: '640px',
			lg: '768px',
			xl: '1024px',
			'2xl': '1280px',
		},
		extend: {},
	},
	plugins: [],
};
