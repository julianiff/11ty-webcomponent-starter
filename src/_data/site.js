module.exports = {
	title: "Eleventy Web Starter",
	description:
		"Minimal boilerplate for new projects built with Eleventy, Tailwind, PurgeCSS and PostCSS",
	url: process.env.SITE_URL,
	author: "Chris Collins",
	meta_data: {
		twitter: "@scottishstoater",
		opengraph_default: "/static/opengraph-default.jpg",
	},
	env: process.env.ELEVENTY_ENV === "production",
};
