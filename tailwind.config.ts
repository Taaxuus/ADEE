import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				header:
					"url('/assets/images/068f2cdc-9a8b-4282-afe0-80f181d27a9b.jpg')",
				p1: "url('/assets/images/p1.webp')",
				p2: "url('/assets/images/p2.jpg')",
				p3: "url('/assets/images/p3.webp')",
			},
		},
	},
	plugins: [],
};
export default config;
