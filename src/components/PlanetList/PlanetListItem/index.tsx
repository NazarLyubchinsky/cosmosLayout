import React from 'react';
import Link from 'next/link';
import { getGradientForPlanet } from '@/src/utils/constants';
import styles from './style.module.scss'
interface PlanetListItemProps {
	planets: { uid: string; name: string; url: string };
}

export const PlanetListItem = ({ planets }: PlanetListItemProps) => {
	return (
		<li key={planets.uid} className={styles.planetsRowContent} data-aos="zoom-in-up">
			<div className={styles.planetsRowContentImage} style={{ backgroundImage: `${getGradientForPlanet(planets.name)}` }}></div>
			<p className={styles.planetsRowContentText}>Lorem ipsum  quae numquam amet. Voluptates, deserunt temporibus.</p>
			<Link className={styles.planetsRowContentLink} href={`/planets/${planets.uid}`}>{planets.name}</Link>
		</li>
	);
};
