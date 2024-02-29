import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<header
			className={clsx("hero hero--primary", styles.heroBanner)}
			style={{
				backgroundColor: "#118e3c",
			}}
		>
			<div className="container">
				{/* <img
					src="https://cdn.discordapp.com/attachments/973422761944952883/1208054844154454088/Mongolo.jpg?ex=65e1e3bf&is=65cf6ebf&hm=3158b932d6f76d023323ce920b88ec4a96e0011152a55f6a99570d004682c06c&"
					alt="Mongoloquent logo"
					width={300}
				/> */}
				<h1 style={{ fontSize: "3rem", color: "#EAEDF0" }}>{siteConfig.title}</h1>
				<p style={{ fontSize: "1.5rem", color: "#EAEDF0" }}>{siteConfig.tagline}</p>
				<div className={styles.buttons}>
					<Link
						className="button button--secondary button--lg"
						to="/docs/introductions/getting-started"
					>
						Get Started
					</Link>
				</div>
			</div>
		</header>
	);
}

export default function Home(): JSX.Element {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout
			title={`${siteConfig.title} - A lightweight MongoDB ORM library for Javascript/Typescript`}
			description="A lightweight MongoDB ORM library for Javascript/Typescript"
		>
			<HomepageHeader />
			<main>
				<HomepageFeatures />
				<div
					className="container text--center"
					style={{ maxWidth: "700px", marginBottom: "50px", marginTop: "30px" }}
				>
					<Heading as="h1">Support us</Heading>
					<p>
						Mongoloquent is an MIT-licensed open-source project. Hence, it grows
						thanks to the sponsors and support by the amazing backers. Please,
						consider supporting us!
					</p>
					<div style={{ marginTop: "50px" }}>
						<Heading as="h3">Sponsors</Heading>
						<p>-</p>
					</div>
				</div>
			</main>
		</Layout>
	);
}
