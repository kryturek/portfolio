// src/app/projects/page.js
import Head from "next/head";
import styles from "../styles/projects.module.css";
import Card from "../components/Card";

export const metadata = {
	title: "Projects - Krystian Turek Portfolio",
	description:
		"Explore the projects developed by Krystian Turek, showcasing skills in React, JavaScript, and more.",
};

export default function Projects() {
	return (
		<>
			<Head>
				<title>Projects</title>
			</Head>
			<div className={styles.container}>
				<h1>Projects</h1>
				<div className={styles.grid}>
					<Card
						imageSrc="/images/weather-app.jpg"
						title="Weather App"
						description="A weather application built using React, Google Maps API, and the OpenWeatherMap API. Deployed on Vercel."
						technologies="React, JavaScript, CSS, API Integration"
						liveLink="https://weather-app-khaki-mu-99.vercel.app"
						codeLink="https://github.com/kryturek/weather-app"
					/>
					<Card
						imageSrc="/images/brainy-bites.png"
						title="Brainy Bites"
						description="A simple quiz app made with friends as a fun project. Over 400 questions and lots of categories to choose from."
						technologies="HTML, CSS, plain JavaScript"
						liveLink="https://kryturek.github.io/brainy-bites"
						codeLink="https://github.com/kryturek/brainy-bites"
					/>
					<Card
						imageSrc="/images/pebble.jpg"
						title="Pebble"
						description="A demo site based on friend's wireframes and descriptions (don't judge ME)"
						technologies="styled-components!"
						liveLink="https://kryturek.github.io/pebble/"
						codeLink="https://github.com/kryturek/pebble"
					/>
				</div>
			</div>
		</>
	);
}
