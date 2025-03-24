import Head from "next/head";
import styles from "../styles/projects.module.css";
import Card from "../components/Card";

export const metadata = {
	title: "Projects - Krys Turek Portfolio",
	description:
		"Explore the projects developed by Krys Turek, showcasing skills in React, JavaScript, and more.",
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
						imageSrc="/images/sudoku-app.png"
						title="Sudoku App"
						description="An interactive Sudoku game with multiple difficulty levels, built using React and TypeScript. Features include pencil marks, error checking, a solver, and a few other things. DISCLAIMER: CAN START SLOW BECAUSE OF BACKEND ON RENDER.COM GOING TO SLEEP."
						technologies="React (Vite), Node.js, Express, PostgreSQL, TypeScript, Python, Render"
						liveLink="https://kryturek.github.io/sudgen-frontend/"
						codeLink="https://github.com/kryturek/sudgen-frontend"
					/>
					<Card
						imageSrc="/images/movie-db.jpeg"
						title="Movie DB"
						description="A movie database application that allows users to search for movies, view details, and manage their favorite collections. Includes user authentication and integration with The Movie Database (TMDB) API. Deployed on Vercel"
						technologies="React (Vite), Node.js, Express, MongoDB, TMDB API, JWT Authentication"
						liveLink="https://movie-db-eight-nu.vercel.app"
						codeLink="https://github.com/kryturek/movie-db"
					/>
					<Card
						imageSrc="/images/weather-app.png"
						title="Weather App"
						description="A weather application built using React, Google Maps API, and the OpenWeatherMap API. Deployed on Vercel."
						technologies="React, JavaScript, CSS, API Integration"
						liveLink="https://weather-app-khaki-mu-99.vercel.app"
						codeLink="https://github.com/kryturek/weather-app"
					/>
					<Card
						imageSrc="/images/brainy-bites-snip.png"
						title="Brainy Bites"
						description="A simple quiz app made with friends as a fun project. Over 400 questions and lots of categories to choose from."
						technologies="HTML, CSS, plain JavaScript"
						liveLink="https://kryturek.github.io/brainy-bites"
						codeLink="https://github.com/kryturek/brainy-bites"
					/>
					<Card
						imageSrc="/images/pebble.jpg"
						title="Pebble"
						description="A responsive demo site based on friend's wireframes and descriptions (don't judge ME). There is no functionality."
						technologies="Create-React-App and styled-components!"
						liveLink="https://kryturek.github.io/pebble/"
						codeLink="https://github.com/kryturek/pebble"
					/>
					<Card
						imageSrc="/images/asteroids-no-boulder.png"
						title="Asteroids v1.0"
						description="DESKTOP ONLY! An interactive simulation involving asteroids, attractors, repellers, and boulders, built using p5.js and JavaScript. Users can manipulate entities, creating a dynamic experience."
						technologies="p5.js, JavaScript, HTML, CSS"
						liveLink="https://kryturek.github.io/asteroids/app/"
						codeLink="https://github.com/kryturek/asteroids"
					/>
					<Card
						imageSrc="/images/todo-app.png"
						title="Todo List App"
						description="A simple React-based Todo List application with features including adding, deleting, and checking/unchecking tasks. Tasks persist in localStorage, and unchecked tasks have dynamic background colors."
						technologies="React, JavaScript, CSS, Local Storage"
						liveLink="https://todo-app-pi-three-35.vercel.app"
						codeLink="https://github.com/kryturek/todo-app/"
					/>
					<Card
						imageSrc="/images/url-shortener.png"
						title="URL Shortener"
						description="A simple and fast URL shortener built with FastAPI and Vue.js. Features include instant URL shortening, unique short codes, and an intuitive UI."
						technologies="FastAPI, Vue.js, PostgreSQL, Render"
						liveLink="https://url-shortener-gmf0.onrender.com" 
						codeLink="https://github.com/kryturek/url-shortener"
					/>
				</div>
			</div>
		</>
	);
}
