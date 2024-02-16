import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
	title: "Mongoloquent",
	tagline: "A lightweight MongoDB ORM library for Javascript",
	favicon: "img/favicon.ico",

	// Set the production url of your site here
	url: "https://mongoloquent.com",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "ajatdarojat45", // Usually your GitHub org/user name.
	projectName: "mongoloquent", // Usually your repo name.

	onBrokenLinks: "throw",
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
		image: "img/docusaurus-social-card.jpg",
		navbar: {
			title: "Mongoloquent",
			// logo: {
			// 	alt: "My Site Logo",
			// 	src: "img/logo.svg",
			// },
			items: [
				{
					to: "/docs/introductions/getting-started",
					label: "Getting Started",
					position: "left",
				},
				{
					to: "/docs/category/tutorials",
					label: "Tutorial",
					position: "left",
				},
				{
					to: "/docs/introductions/usage-guide",
					label: "Usage Guide",
					position: "left",
				},
				{ to: "/docs/category/api-references", label: "API", position: "left" },
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
							to: "/docs/introductions/getting-started",
						},
						{
							label: "Tutorial",
							to: "/docs/category/tutorials",
						},
						{
							label: "Usage Guide",
							to: "/docs/introductions/usage-guide",
						},
						{
							label: "API References",
							to: "/docs/category/api-references",
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
			copyright: `Copyright © ${new Date().getFullYear()} Mongoloquent. Built with Docusaurus.`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
