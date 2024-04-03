"use client"
import { ReactNode, useState } from 'react'

import cl from 'classnames'
import styles from "../home.module.scss"
import { Title } from '@components/Title'
import { EarthArtMenuItem } from './EarthArtMenu/EarthArtMenuItem'
import { Factionslinks } from '@/src/utils/constants'

interface EarthProps {
	isActiveid: string
}

export const Earth = ({ isActiveid }: EarthProps) => {

	const [openedId, setOpenedId] = useState(1);

	return (
		<section className={cl(styles.section, styles.sectionEarth)} id={isActiveid}>
			<Title size="Large">
				Factions
			</Title>
			<div className={styles.artMenu} data-aos="fade-right">
				{Factionslinks.map((link) => (
					<EarthArtMenuItem
						key={link.id}
						onClick={() => {
							setOpenedId(link.id !== openedId ? link.id : 0);
						}}
						isOpened={link.id === openedId}
						{...link}
					/>
				))}
			</div>
		</section>
	)
}

