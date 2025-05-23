import "dotenv/config";

import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
	title: "Mongoloquent",
	tagline: "A lightweight MongoDB ORM library for Javascript/Typescript",
	favicon: "img/favicon.png",

	// Set the production url of your site here
	url: "https://mongoloquent.com",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "ajatdarojat45", // Usually your GitHub org/user name.
	projectName: "mongoloquent", // Usually your repo name.

	onBrokenLinks: "warn",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	presets: [
		[
			"classic",
			{
				docs: {
					sidebarPath: "./sidebars.ts",
					exclude: ["sponsor.mdx"],
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: "https://github.com/ajatdarojat45/mongoloquent.com/tree/main/",
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: "https://github.com/ajatdarojat45/mongoloquent.com/tree/main/",
				},
				theme: {
					customCss: "./src/css/custom.css",
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		// Replace with your project's social card
		image: "img/mongoloquent.png",
		navbar: {
			title: "Mongoloquent",
			logo: {
				alt: "Mongoloquent Logo",
				src: "img/favicon.png",
			},
			items: [
				{
					to: "/docs/getting-started/installation",
					label: "Getting Started",
					position: "left",
				},
				{
					label: "API References",
					position: "left",
					href: "https://api.mongoloquent.com",
				},
				{
					type: "docsVersionDropdown",
					position: "right",
				},
				{
					type: "localeDropdown",
					position: "right",
				},
				{
					href: "https://github.com/ajatdarojat45/mongoloquent",
					label: "GitHub",
					position: "right",
				},
			],
		},
		footer: {
			style: "dark",
			links: [
				{
					title: "Docs",
					items: [
						{
							label: "Getting Started",
							to: "/docs/getting-started/installation",
						},
						{
							label: "API References",
							href: "https://api.mongoloquent.com",
						},
					],
				},
				{
					title: "Community",
					items: [
						{
							label: "-",
							href: "#",
						},
					],
				},
				{
					title: "More",
					items: [
						{
							label: "GitHub",
							href: "https://github.com/ajatdarojat45/mongoloquent",
						},
						{
							html: `
                <a href="https://www.netlify.com">
                  <img
                    src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg"
                    alt="Deployed by Netlify"
                  />
                </a>
              `,
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} <a href="https://linkedin.com/in/ajatdarojat45" target="_blank">Ajat Darojat</a>`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},

		// Algolia DocSearch configuration
		algolia: {
			// The application ID provided by Algolia
			appId: process.env.ALGOLIA_APP_ID,

			// Public API key: it is safe to commit it
			apiKey: process.env.ALGOLIA_API_KEY,

			indexName: process.env.ALGOLIA_INDEX_NAME,

			// Optional: see doc section below
			contextualSearch: true,

			// Optional: path for search page that enabled by default (`false` to disable it)
			searchPagePath: "search",
		},
	} satisfies Preset.ThemeConfig,

	scripts: [
		{
			src: "https://cloud.umami.is/script.js",
			async: true,
			defer: true,
			"data-website-id": process.env.UMAMI_WEBSITE_ID,
		},
	],
};

export default config;
