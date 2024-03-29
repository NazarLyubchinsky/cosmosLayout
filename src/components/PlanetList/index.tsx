import styles from './style.module.scss'
import { getAllPlanets } from "@/src/actions/getAllPlanets"
import { PlanetListMobile } from "./PlanetListMobile"
import { PlanetListItem } from "./PlanetListItem"
import { Fragment } from "react"

interface PlanetListProps {
	title?: string
	sliceCount?: number
}




export default async function PlanetList({ title, sliceCount }: PlanetListProps) {
	const allPlanets = await getAllPlanets()

	const shuffledPlanets = allPlanets.results.slice().sort(() => Math.random() - 0.5);
	const slicedPlanets = shuffledPlanets.slice(0, sliceCount);

	return (
		<div className={styles.planets}>
			{title && <h2 className={styles.planetsOther} data-aos="fade-right">{title}</h2>}
			<ul className={styles.planetsRow} >
				{slicedPlanets.map(planets => {
					return (
						<Fragment key={planets.uid}>
							<PlanetListItem planets={planets} />
						</Fragment>
					)
				}
				)}
			</ul>
			<PlanetListMobile slicedPlanets={slicedPlanets} />

		</div>
	)
}