import Head from "next/head";
import Image from "next/legacy/image";
import styles from "./styles/home.module.css";
import { Kristi } from "next/font/google";

export const metadata = {
	title: "Home - Krys Turek Portfolio",
	description:
		"Welcome to the portfolio of Krys Turek, an aspiring software developer.",
};

const kristi = Kristi({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Krystian Turek - Portfolio</title>
				<meta
					name="description"
					content="Krystian Turek's personal portfolio"
				/>
			</Head>
			<h1 className={kristi.className}>Welcome to My Portfolio</h1>
			<Image
				className={styles.myPhoto}
				src="/images/75915136.jpeg"
				width={"250"}
				height={"250"}
				priority={true}
				alt="My photo"
			/>
			<p>Hi, I'm Krys Turek, an aspiring software developer.</p>
			<p>
				Be sure to check out the other sections of this website, such as my
				projects.
			</p>
			<p></p>
		</div>
	);
}
