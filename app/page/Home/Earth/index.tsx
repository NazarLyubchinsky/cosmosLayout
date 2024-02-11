// import cl from 'classnames'
// import styles from "../home.module.scss"

// import { EarthArtMenu } from './EarthArtMenu'
// import { Title } from '@components/Title'
// import { EarthArtMenuItemModal } from './EarthArtMenu/EarthArtMenuItemModal'


// interface EarthProps {
// 	isActiveid: string

// }



// const links: Link[] = [
// 	{
// 		id: 1,
// 		href: '/',
// 		title: 'Blighted Badlands',
// 		image: '/imagesArtMenu/blighted_badlands.jpg',
// 		active: false,
// 	},
// 	{
// 		id: 2,
// 		href: '/',
// 		title: 'Glacial Frontier',
// 		image: '/imagesArtMenu/glacial_frontier.jpg',
// 		active: false,
// 	},
// 	{
// 		id: 3,
// 		href: '/',
// 		title: 'Sundered Grove',
// 		image: '/imagesArtMenu/sundered_grove.jpg',
// 		active: false,
// 	},
// 	{
// 		id: 4,
// 		href: '/',
// 		title: 'Sky Citadel',
// 		image: '/imagesArtMenu/sky_citadel.jpg',
// 		active: false,
// 	}
// ];


// export const Earth = ({ isActiveid }: EarthProps) => {
// 	return (
// 		<section className={cl(styles.section, styles.sectionEarth)} id={isActiveid}>
// 			<Title size="Large">
// 				Factions
// 			</Title>
// 			<EarthArtMenu links={links}/>
// 			<EarthArtMenuItemModal links={links}/>
// 		</section>
// 	)
// }

"use client"
import cl from 'classnames'
import styles from "../home.module.scss"

import { EarthArtMenu } from './EarthArtMenu'
import { Title } from '@components/Title'
import { EarthArtMenuItemModal } from './EarthArtMenu/EarthArtMenuItemModal'
import { useTodoContext } from '@/src/context/useTodoContext'


interface EarthProps {
	isActiveid: string

}



const links: Link[] = [
	{
		id: 1,
		href: '/',
		title: 'Blighted Badlands',
		image: '/imagesArtMenu/blighted_badlands.jpg',
		active: false,
	},
	{
		id: 2,
		href: '/',
		title: 'Glacial Frontier',
		image: '/imagesArtMenu/glacial_frontier.jpg',
		active: false,
	},
	{
		id: 3,
		href: '/',
		title: 'Sundered Grove',
		image: '/imagesArtMenu/sundered_grove.jpg',
		active: false,
	},
	{
		id: 4,
		href: '/',
		title: 'Sky Citadel',
		image: '/imagesArtMenu/sky_citadel.jpg',
		active: false,
	}
];


export const Earth = ({ isActiveid }: EarthProps) => {
	const { isModalOpen } = useTodoContext();

	return (
		<section className={cl(styles.section, styles.sectionEarth)} id={isActiveid}>
			<Title size="Large">
				Factions
			</Title>
			<EarthArtMenu links={links} />

			{isModalOpen && (
				<EarthArtMenuItemModal links={links} />
			)}

		</section>
	)
}