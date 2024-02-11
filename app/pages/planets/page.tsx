import Link from "next/link"
import styles from './planets.module.scss'
import { getAllPlanets } from '@/src/actions/getAllPlanets';
import Image from "next/image";
import { TitleWithImage } from "@/src/components/TitleWithImage";

export default async function PlanetPage() {

	const allPlanets = await getAllPlanets()

	return (
		<section className={styles.section}>
			<TitleWithImage title="Planets" subtitle="planets" />
			<ul className={styles.items}>
				{allPlanets.results.map(planets => (
					<li key={planets.uid} className={styles.itemsContent}>
						<Link href={`shop/${planets.uid}`}>
							<div className={styles.block}>
								<h3 className={styles.blockTitle}>{planets.name}</h3>
								<div className={styles.blockImages}>
									<Image
										src={'https://via.placeholder.com/300/333333/ffffff.png"'}
										alt={planets.name}
										width="270"
										height="260"
										className={styles.image}
									/>
								</div>

							</div>
						</Link>
					</li>
				))}
			</ul>
		</section>
	)
}