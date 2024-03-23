import { TitleWithImage } from "@/src/components/TitleWithImage"
import PlanetsCard from "@/src/components/PlanetList"

import { getPlanet } from "@/src/actions/getPlanet"
import { getGradientForPlanet } from "@/src/utils/constants"

import styles from './planet.module.scss'
import 'react-loading-skeleton/dist/skeleton.css'

interface Params {
	params: {
		planetsId: string
	}
}


export default async function Planet({ params }: Params) {
	const { result } = await getPlanet(params.planetsId)
	const { name, diameter, rotation_period, orbital_period, gravity, population, climate, terrain, surface_water, created, edited } = result.properties
	return (
		<section className={styles.section}>
			<TitleWithImage title={name} subtitle="planets" />
			<div className={styles.planet}>
				<div
					style={{
						backgroundImage: `${getGradientForPlanet(name)}`,
					}}
					className={styles.planetImage} data-aos="zoom-in-right"></div>
				<div className={styles.planetContent} data-aos="zoom-in-left">
					<h3 className={styles.planetContentTitle}>Information</h3>
					<b>Name:</b>
					<span>{name}</span>
					<b>Diameter:</b>
					<span>{diameter}</span>
					<b>Rotation period:</b>
					<span>{rotation_period}</span>
					<b>Orbital period:</b>
					<span>{orbital_period}</span>
					<b>Gravity:</b>
					<span>{gravity}</span>
					<b>Population:</b>
					<span>{population}</span>
					<b>Climate:</b>
					<span>{climate}</span>
					<b>Terrain:</b>
					<span>{terrain}</span>
					<b>Surface water:</b>
					<span>{surface_water}</span>
					<b>Created:</b>
					<span>{created}</span>
					<b>Edited:</b>
					<span>{edited}</span>
				</div>
			</div>

			<PlanetsCard title="Other planets" sliceCount={4} />
		</section>
	)
}

