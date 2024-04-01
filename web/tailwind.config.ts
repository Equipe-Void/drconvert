import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-interphases)"],
			},
			colors: {
				white: "#FFFFFF",
				gray1: "#808081",
				gray2: "#3F4349",
				black0: "#141416",
				black1: "#212224",
				pink: "#FF3465",
				red: "#8E2841",
			},
			boxShadow: {
				button: "0px 0px 30px rgba(255, 52, 101, .45)",
			},
		},
	},
	plugins: [],
};
export default config;
