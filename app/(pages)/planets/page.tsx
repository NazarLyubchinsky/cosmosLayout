import styles from './planets.module.scss'
import { TitleWithImage } from "@/src/components/TitleWithImage";
import PlanetsList from "@/src/components/PlanetList";



export default async function PlanetPage() {


	return (
		<section className={styles.section}>
			<TitleWithImage title="Planets" subtitle="planets" />

			<PlanetsList />

		</section>
	)
}

