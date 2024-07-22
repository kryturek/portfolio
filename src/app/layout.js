import { Inter } from "next/font/google";
import { Akshar } from "next/font/google";
import { Kristi } from "next/font/google";
import "./globals.css";
import Layout from "./components/Layout";

const inter = Inter({ subsets: ["latin"] });
const akshar = Akshar({ subsets: ["latin"] });
const kristi = Kristi({ subsets: ["latin"], weight: ["400"] });

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={akshar.className}>
				<Layout>{children}</Layout>
			</body>
		</html>
	);
}
