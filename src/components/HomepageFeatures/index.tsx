import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
	title: string;
	Svg: React.ComponentType<React.ComponentProps<"svg">>;
	description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
	{
		title: "Easy to Use",
		Svg: require("@site/static/img/mouse.svg").default,
		description: <>Provides a straightforward and hassle-free user experience.</>,
	},
	{
		title: "Intuitive and expressive syntax",
		Svg: require("@site/static/img/braces.svg").default,
		description: (
			<>
				Offers an intuitive and clear syntax for seamless interaction with MongoDB
				databases.
			</>
		),
	},
	{
		title: "Support several relationship types",
		Svg: require("@site/static/img/branch.svg").default,
		description: (
			<>
				Enables support for various types of relationships between data for enhanced
				database modeling flexibility.
			</>
		),
	},
	{
		title: "Support the test environment",
		Svg: require("@site/static/img/code.svg").default,
		description: (
			<>
				This facilitates testing environment support, allowing developers to
				thoroughly test functionality with ease.
			</>
		),
	},
];

function Feature({ title, Svg, description }: FeatureItem) {
	return (
		<div className={clsx("col col--3")}>
			<div className="text--center">
				<Svg
					className={styles.featureSvg}
					role="img"
					fill="var(--svg-fill-color)"
				/>
			</div>
			<div className="text--center padding-horiz--md">
				<Heading as="h3">{title}</Heading>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures(): JSX.Element {
	return (
		<section className={styles.features}>
			<div className="container" style={{ marginTop: "30px" }}>
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
