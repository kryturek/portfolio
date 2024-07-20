import Head from "next/head";
import Image from "next/image";
import styles from "./styles/home.module.css";

export const metadata = {
	title: "Home - Krystian Turek Portfolio",
	description:
		"Welcome to the portfolio of Krystian Turek, an aspiring software developer.",
};

export default function Home() {
	return (
		<>
			<Head>
				<title>Krystian Turek - Portfolio</title>
				<meta
					name="description"
					content="Krystian Turek's personal portfolio"
				/>
			</Head>
			<h1>Welcome to My Portfolio</h1>
			<Image
				className={styles.myPhoto}
				src="/images/75915136.jpeg"
				width={500}
				height={500}
			></Image>
			<p>Hi, I'm Krystian Turek, an aspiring software developer.</p>
			<p>
				Be sure to check out the other sections of this website, such as my
				projects.
			</p>
			<p></p>
		</>
	);
}
