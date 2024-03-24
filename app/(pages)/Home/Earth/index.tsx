"use client"
import { ReactNode, useMemo, useState } from 'react'

import cl from 'classnames'
import styles from "../home.module.scss"
import { EarthArtMenu } from './EarthArtMenu'
import { Title } from '@components/Title'
import { EarthArtMenuItemModal } from './EarthArtMenu/EarthArtMenuItemModal'
import { useTodoContext } from '@/src/context/useTodoContext'
import { GlassCard } from '@/src/components/GlassCard'
import { EarthArtMenuItem } from './EarthArtMenu/EarthArtMenuItem'


interface EarthProps {
	isActiveid: string
}

interface ModalInfo {
	title: string;
	titleUrl: string;
	content: ReactNode;
	coverImage: string;
	listImages: {
		src: string;
		type: 'color' | 'dark';
	}[]
}

interface ArtMenuLinks {
	id: number;
	href: string;
	title: string;
	image: string;
	active: boolean;
	modalInfo: ModalInfo;
}




const links: ArtMenuLinks[] = [
	{
		id: 1,
		href: '/',
		title: 'Blighted Badlands',
		image: '/imagesArtMenu/badlands/preview.jpg',
		active: false,
		modalInfo: {
			title: 'Badlands',
			content: (
				<>
					<p>Modern-day Dusktopia begins here</p>
					<p>The first thing that counts here is survival Only then can you think of profit; then finally domination</p>
					<p>Forge your alliances with the EON Corporation, the rival mafia gangs, or even an utterly corrupt police force - and crush all standing in your way</p>
				</>
			),
			titleUrl: '/imagesArtMenu/badlands/title.png',
			coverImage: '/imagesArtMenu/badlands/modal_cover.jpg',
			listImages: [
				{
					src: '/imagesArtMenu/badlands/list/badlands_01.png',
					type: 'color',
				},
				{
					src: '/imagesArtMenu/badlands/list/badlands_02.png',
					type: 'color',
				}, {
					src: '/imagesArtMenu/badlands/list/badlands_03.png',
					type: 'color',
				}, {
					src: '/imagesArtMenu/badlands/list/badlands_04.png',
					type: 'color',
				},
				{
					src: '/imagesArtMenu/badlands/list/badlands_01.png',
					type: 'dark',
				},
				{
					src: '/imagesArtMenu/badlands/list/badlands_02.png',
					type: 'dark',
				}, {
					src: '/imagesArtMenu/badlands/list/badlands_03.png',
					type: 'dark',
				}, {
					src: '/imagesArtMenu/badlands/list/badlands_04.png',
					type: 'dark',
				}
			]
		}
	},
	{
		id: 2,
		href: '/',
		title: 'Glacial Frontier',
		image: '/imagesArtMenu/glacial_frontier/preview.jpg',

		active: false,
		modalInfo: {
			title: 'Glacial Frontier',
			titleUrl: '/imagesArtMenu/glacial_frontier/title.png',
			content: (
				<>
					<p>The home of everything warfare in Dusktopia</p>
					<p>Mercenaries and soldiers take payouts from the Cabal to do its bidding - but some want more for themselves, and are willing to go against power itself to get it</p>
					<p>Which side are you joining?</p>
				</>
			),
			coverImage: '/imagesArtMenu/glacial_frontier/modal_cover.jpg',
			listImages: [
				{
					src: '/imagesArtMenu/glacial_frontier/list/glacial_frontier_01.png',
					type: 'color',
				},
				{
					src: '/imagesArtMenu/glacial_frontier/list/glacial_frontier_02.png',
					type: 'color',
				},
				{
					src: '/imagesArtMenu/glacial_frontier/list/glacial_frontier_03.png',
					type: 'color',
				},
				{
					src: '/imagesArtMenu/glacial_frontier/list/glacial_frontier_04.png',
					type: 'color',
				},
				{
					src: '/imagesArtMenu/glacial_frontier/list/glacial_frontier_01.png',
					type: 'dark',
				},
				{
					src: '/imagesArtMenu/glacial_frontier/list/glacial_frontier_02.png',
					type: 'dark',
				},
				{
					src: '/imagesArtMenu/glacial_frontier/list/glacial_frontier_03.png',
					type: 'dark',
				},
				{
					src: '/imagesArtMenu/glacial_frontier/list/glacial_frontier_04.png',
					type: 'dark',
				},
			]
		}
	},
	{
		id: 3,
		href: '/',
		title: 'Sundered Grove',
		image: '/imagesArtMenu/sundered_grove/preview.jpg',
		active: false,
		modalInfo: {
			title: 'Sundered Grove',
			titleUrl: '/imagesArtMenu/sundered_grove/title.png',
			content: (
				<>
					<p>Dusktopia’s last remaining sanctuary of peace</p>
					<p>Researchers and scientists congregate here to live in religious pacifism, spending their time developing a renewable energy source for the world</p>
					<p>A small faction wants more - selling Aurium on the black market for their own personal gain</p>
					<p>Will you root out the traitors or join them?</p>
				</>
			),
			coverImage: '/imagesArtMenu/sundered_grove/modal_cover.jpg',
			listImages: [
				{
					src: '/imagesArtMenu/sundered_grove/list/sundered_grove_01.png',
					type: 'color',
				},
				{
					src: '/imagesArtMenu/sundered_grove/list/sundered_grove_02.png',
					type: 'color',
				},
				{
					src: '/imagesArtMenu/sundered_grove/list/sundered_grove_01.png',
					type: 'color',
				},
				{
					src: '/imagesArtMenu/sundered_grove/list/sundered_grove_02.png',
					type: 'color',
				},
				{
					src: '/imagesArtMenu/sundered_grove/list/sundered_grove_01.png',
					type: 'dark',
				},
				{
					src: '/imagesArtMenu/sundered_grove/list/sundered_grove_02.png',
					type: 'dark',
				},
				{
					src: '/imagesArtMenu/sundered_grove/list/sundered_grove_01.png',
					type: 'dark',
				},
				{
					src: '/imagesArtMenu/sundered_grove/list/sundered_grove_02.png',
					type: 'dark',
				},
			]
		}
	},
	{
		id: 4,
		href: '/',
		title: 'Sky Citadel',
		image: '/imagesArtMenu/sky_citadel/preview.jpg',
		active: false,
		modalInfo: {
			title: 'Sky Citadel',
			titleUrl: '/imagesArtMenu/sky_citadel/title.png',
			content: (
				<>
					<p>These are where the apex predators in Dusktopia reside</p>
					<p>The political and economic masters of all society: living high above the suffering of ordinary denizens, and calmly plot elevated pursuits like space colonization in absolute peace</p>
					<p>If you’re lucky enough to be part of it, hold on tight - everybody wants what you have</p>
				</>
			),
			coverImage: '/imagesArtMenu/sky_citadel/modal_cover.jpg',
			listImages: [
				{
					src: '/imagesArtMenu/sky_citadel/list/sky_citadel.png',
					type: 'color',
				},
				{
					src: '/imagesArtMenu/sky_citadel/list/sky_citadel.png',
					type: 'color',
				},
				{
					src: '/imagesArtMenu/sky_citadel/list/sky_citadel.png',
					type: 'color',
				},
				{
					src: '/imagesArtMenu/sky_citadel/list/sky_citadel.png',
					type: 'color',
				},
				{
					src: '/imagesArtMenu/sky_citadel/list/sky_citadel.png',
					type: 'dark',
				},
				{
					src: '/imagesArtMenu/sky_citadel/list/sky_citadel.png',
					type: 'dark',
				},
				{
					src: '/imagesArtMenu/sky_citadel/list/sky_citadel.png',
					type: 'dark',
				},
				{
					src: '/imagesArtMenu/sky_citadel/list/sky_citadel.png',
					type: 'dark',
				},
			]
		}
	}
];


export const Earth = ({ isActiveid }: EarthProps) => {
	// const { isModalOpen } = useTodoContext();

	const [openedId, setOpenedId] = useState(1);
	const [modalInfo, setModalInfo] = useState<ModalInfo | null>(null);
	const nextModalInfo = useMemo<ModalInfo | null>(() => {
		if (!modalInfo) return null;
		let nextModalInfo = null;
		for (let i = 0; i < links.length; i++) {
			if (
				links[i].modalInfo.title === modalInfo.title
				&& links[i + 1]
			) {
				nextModalInfo = links[i + 1].modalInfo;
				break;
			}
		}

		return nextModalInfo;
	}, [modalInfo]);

	return (
		<section className={cl(styles.section, styles.sectionEarth)} id={isActiveid}>
			<Title size="Large">
				Factions
			</Title>
			{/* <EarthArtMenu links={links} /> */}
			<div className={styles.artMenu} data-aos="fade-right">
				{links.map((link) => (
					<EarthArtMenuItem
						key={link.id}
						onClick={(event) => {
							event.preventDefault();
							setOpenedId(link.id !== openedId ? link.id : 0);
						}}
						onClickButton={() => {
							setModalInfo(link.modalInfo);
						}}
						isOpened={link.id === openedId}
						{...link}
					/>
				))}
			</div>
			{/* {isModalOpen && (
				<EarthArtMenuItemModal links={links} />
			)} */}
			{modalInfo && (
				<EarthArtMenuItemModal
					links={links}
					isNext={!!nextModalInfo}
					backgroundUrl={modalInfo.coverImage}
					onClickClose={() => setModalInfo(null)}
					onClickNext={() => setModalInfo(nextModalInfo)}
					titleUrl={modalInfo.titleUrl}
					title={modalInfo.title}
					text={modalInfo.content}
					scrollContent={
						<div className={styles.cardList}>
							{modalInfo.listImages.map((item, id) =>{
								 return(
									<GlassCard
										key={id}
										type={item.type}
										imageUrl={item.src}
									/>
								)
							})}
						</div>
					}
				/>
			)}

		</section>
	)
}