import styles from './planets.module.scss'
import { TitleWithImage } from "@/src/components/TitleWithImage";
import PlanetsCard from "@/src/components/PlanetsCard";

export default async function PlanetPage() {
	return (
		<section className={styles.section}>
			<TitleWithImage title="Planets" subtitle="planets" />

			<PlanetsCard />
		</section>
	)
}

