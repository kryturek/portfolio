import Head from "next/head";
import styles from "../styles/about.module.css";

export const metadata = {
	title: "About Me - Krys Turek Portfolio",
	description:
		"Learn more about Krys Turek, a tech-minded professional with a strong background in management and production engineering, now pursuing a career in software development.",
};

export default function About() {
	return (
		<>
			<Head>
				<title>About Me</title>
			</Head>
			<div className={styles.container}>
				<h1>About Me</h1>
				<p>
					Tech-minded professional with a strong background in management
					and production engineering, now pursuing a career in software
					development. Experienced in leadership roles, problem-solving,
					and communication. Proficient in the MERN stack and passionate
					about creating efficient, user-friendly applications.
				</p>
				<h2>Education</h2>
				<ul>
					<li>HND Software Development, West College Scotland, 2023</li>
					<li>
						Bachelor’s Degree in Management and Production Engineering,
						University of Warmia and Mazury, 2018
					</li>
				</ul>
				<h2>Skills</h2>
				<ul>
					<li>
						HTML, CSS, JavaScript, React, Node.js, MongoDB, Express.js
					</li>
					<li>Leadership, Communication, Problem-solving</li>
				</ul>
			</div>
		</>
	);
}
