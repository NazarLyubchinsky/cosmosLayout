import { ArtMenu } from "@/app/components/ArtMenu"
import { Title } from "@/app/components/Title"
import cl from 'classnames'

import styles from "@/css/home.module.css"

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
			<ArtMenu />
		</section>
	)
}