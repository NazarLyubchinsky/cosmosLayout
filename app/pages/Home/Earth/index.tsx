import cl from 'classnames'
import styles from "../home.module.scss"

import { Title } from "@/app/components/Title"
import { EarthArtMenu } from './EarthArtMenu'


interface EarthProps {
	isActiveid: string
}

export const Earth: React.FC<EarthProps> = ({
	isActiveid,

}) => {

	return (
		<section className={cl(styles.section, styles.sectionEarth)}
			id={isActiveid}
		>
			<Title size="Large">
				Factions
			</Title>
			<EarthArtMenu />
		</section>
	)
}