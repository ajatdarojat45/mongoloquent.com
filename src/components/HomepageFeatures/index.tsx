import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import {
  HiOutlineCode,
  HiOutlineShieldCheck,
  HiOutlineShare,
  HiOutlineSwitchHorizontal,
  HiOutlineDatabase,
  HiOutlineBeaker,
} from 'react-icons/hi';

import { IconType } from "react-icons";

type FeatureItem = {
  title: string;
  Icon: IconType;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Easy, intuitive and expressive syntax",
    Icon: HiOutlineCode,
    description: (
      <>
        Offers an intuitive and clear syntax for seamless interaction with MongoDB
        databases.
      </>
    ),
  },
  {
    title: "Type-safe",
    Icon: HiOutlineShieldCheck,
    description: (
      <>
        Provides type safety for MongoDB queries, ensuring that the data structure
        matches the expected types.
      </>
    ),
  },
  {
    title: "Support several relationship types",
    Icon: HiOutlineShare,
    description: (
      <>
        Enables support for various types of relationships between data for enhanced
        database modeling flexibility.
      </>
    ),
  },
  {
    title: "Interact with ORM or Query Builder",
    Icon: HiOutlineSwitchHorizontal,
    description: (
      <>
        This allows for interaction with ORM or Query Builder, providing flexibility
        in how data is accessed and manipulated.
      </>
    ),
  },
  {
    title: "Support multiple database connections",
    Icon: HiOutlineDatabase,
    description: (
      <>
        This allows for multiple database connections, enabling developers to
        manage and interact with different databases seamlessly.
      </>
    ),
  },
  {
    title: "Support the test environment",
    Icon: HiOutlineBeaker,
    description: (
      <>
        This facilitates testing environment support, allowing developers to
        thoroughly test functionality with ease.
      </>
    ),
  },
];


function Feature({ title, Icon, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Icon
          className={styles.featureSvg}
          role="img"
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
