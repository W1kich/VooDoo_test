/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
			colors:{
				mainColor: '#FCF7E6'
			},
			flex: {
        '0': '0 0 39px'
      },
			screens:{
				sm: '480px',
				md: '768px',
				lg: '1024px',
				xl: '1440px'
			}
		},
  },
  plugins: [],
}