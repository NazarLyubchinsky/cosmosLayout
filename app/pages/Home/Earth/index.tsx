import cl from 'classnames'
import styles from "../home.module.scss"

import { EarthArtMenu } from './EarthArtMenu'
import { Title } from '@/src/components/Title'


interface EarthProps {
	isActiveid: string
}

export const Earth = ({ isActiveid }: EarthProps) => {
	return (
		<section className={cl(styles.section, styles.sectionEarth)} id={isActiveid}>
			<Title size="Large">
				Factions
			</Title>
			<EarthArtMenu />
		</section>
	)
}