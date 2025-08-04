import primeui from 'tailwindcss-primeui'

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,ts}'],
	theme: {
		extend: {
			colors: {
				'light-green': '#98D2C0',
				'dark-green': '#042A2B',
				moonstone: '#5EB1BF',
				'light-cyan': '#CDEDF6',
				crayola: '#EF7B45',
				'chili-red': '#D84727'
			}
		}
	},
	plugins: [primeui]
}

