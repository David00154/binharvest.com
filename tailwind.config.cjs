/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter"],
			},
			colors: {
				"custom-dark-primary": "#1c1c27",
				"custom-dark-secondary": "#16161f",
				"menu-link": "#a2a2b1",
				"text-color": "#555c63",
				"custom-orange": "#e63a27",
			},
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		styled: false,
		themes: false,
		base: false,
		utils: false,
		// logs: true,
		// rtl: false,
		prefix: "daisy-",
	},
};
