import Link from "next/link"
import styles from './style.module.scss'
import { getAllPlanets } from "@/src/actions/getAllPlanets"
import { getGradientForPlanet } from "@/src/utils/constants"

interface PlanetsCardProps {
	title?: string
	sliceCount?: number
}

export default async function PlanetsCard({ title, sliceCount }: PlanetsCardProps) {
	const allPlanets = await getAllPlanets()

	// const slicedPlanets = allPlanets.results.slice(0, sliceCount);

	const shuffledPlanets = allPlanets.results.slice().sort(() => Math.random() - 0.5);
	const slicedPlanets = shuffledPlanets.slice(0, sliceCount);
	return (
		<div className={styles.planets}>
			{title && <h2 className={styles.planetsOther} data-aos="fade-right">{title}</h2>}
			<ul className={styles.planetsRow} >
				{slicedPlanets.map(planets => (
					<li key={planets.uid} className={styles.planetsRowContent} data-aos="zoom-in-up">
						<div className={styles.planetsRowContentImage} style={{ backgroundImage: `${getGradientForPlanet(planets.name)}` }}></div>
						<p className={styles.planetsRowContentText}>Lorem ipsum  quae numquam amet. Voluptates, deserunt temporibus.</p>
						<Link className={styles.planetsRowContentLink} href={`/planets/${planets.uid}`}>{planets.name}</Link>
					</li>
				))}
			</ul>
		</div>
	)
}