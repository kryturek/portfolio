// src/app/contact/page.js
import Head from "next/head";

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
			<h1>Contact</h1>
			<p>You can reach me at:</p>
			<p>Phone: +4407534023436</p>
			<p>Email: kry.turek@gmail.com</p>
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
		</>
	);
}
