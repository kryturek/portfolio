import Link from "next/link";
import "../styles/globals.css";
import Head from "next/head";

export default function Layout({ children }) {
	return (
		<>
			<Head>
				<title>Portfolio</title>
			</Head>
			<div>
				<nav>
					<ul>
						<li>
							<Link href="/">Home</Link>
						</li>
						<li>
							<Link href="/about">About</Link>
						</li>
						<li>
							<Link href="/projects">Projects</Link>
						</li>
						<li>
							<Link href="/contact">Contact</Link>
						</li>
					</ul>
				</nav>
				<main>{children}</main>
			</div>
		</>
	);
}
