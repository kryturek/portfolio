import Image from "next/legacy/image";
import styles from "../styles/Card.module.css";

const Card = ({
	imageSrc,
	title,
	description,
	technologies,
	liveLink,
	codeLink,
}) => {
	return (
		<div className={styles.card}>
			<div className={styles.imageWrapper}>
				<Image
					src={imageSrc}
					alt={title}
					layout="fill"
					objectFit="cover"
					className={styles.cardImage}
				/>
			</div>
			<div className={styles.cardContent}>
				<h2>{title}</h2>
				<p>{description}</p>
				<ul>
					<li>
						<strong>Technologies Used:</strong> {technologies}
					</li>
					<li>
						<strong>Live Site:</strong>{" "}
						<a target="_blank" href={liveLink}>
							View Live
						</a>
					</li>
					<li>
						<strong>GitHub Repository:</strong>{" "}
						<a target="_blank" href={codeLink}>
							View Code
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Card;
