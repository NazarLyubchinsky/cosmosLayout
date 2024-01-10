"use client"
import cl from 'classnames';
import styles from './styles/home.module.scss';

import { Title } from './components/Title';
import { ArtMenu } from './components/ArtMenu';
import { Main } from './pages/Main';
import { RoadMap } from './pages/RoadMap';


export default function Home() {
	return (
		<div>
			<Main />

			<section className={cl(styles.section, styles.sectionEarth)}>
				<Title size="Large">
					Factions
				</Title>
				<ArtMenu />
			</section>

			<RoadMap />
		</div>
	)
}