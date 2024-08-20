import Head from "next/head";
import styles from "../styles/contact.module.css";
import "../styles/globals.css";

export const metadata = {
	title: "Contact - Krys Turek Portfolio",
	description:
		"Get in touch with Krys Turek. Contact information including phone, email, LinkedIn, and GitHub.",
};

export default function Contact() {
	return (
		<>
			<Head>
				<title>Contact</title>
			</Head>
			<div className={styles.container}>
				<h1>Contact</h1>
				{/* <p>
					Phone:
					<a href="tel:+4407534023436"> +4407534023436</a>
				</p> */}
				<p>
					Email:
					<a href="mailto:kry.turek@gmail.com"> kry.turek@gmail.com</a>
				</p>
				<p>
					LinkedIn:{" "}
					<a href="https://www.linkedin.com/in/kry-turek">
						https://www.linkedin.com/in/kry-turek
					</a>
				</p>
				<p>
					GitHub:{" "}
					<a href="https://github.com/kryturek">
						https://github.com/kryturek
					</a>
				</p>
			</div>
		</>
	);
}
