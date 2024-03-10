"use client"
import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';
import Image from 'next/image';

import { RoadMapArtMenuItem } from './RoadMapArtMenuItem';
interface RoadMapArtMenuProps { }


const links = [
	{
		id: 1,
		href: '/',
		title: 'GENESIS LANDS DROP An original',
		subtitle: 'collection of 5,555 land plots will be made ready for the very first Dusktopian adventurers.',
		image: '/imagesRoadMap/roadMap_1.png',
		active: false,
		color: 'rgba(255, 114, 224, 1)',
	},
	{
		id: 2,
		href: '/',
		title: 'STAKING GOES LIVE',
		subtitle: ' The EON Corporation Superbank begins rewarding Dusktopians staking their land plots with $DAWN.',
		image: '/imagesRoadMap/roadMap_2.png',
		active: false,
		color: 'rgba(143, 242, 248, 1)',

	},
	{
		id: 3,
		href: '/',
		title: 'NEW WORLDS EMERGE',
		subtitle: 'Claim a slice of our secret land collection with $DAWN. Outfit your existing land with new properties and accessories.',
		image: '/imagesRoadMap/roadMap_3.png',
		active: false,
		color: '#B24A98',

	},
	{
		id: 4,
		href: '/',
		title: 'AVATAR COLLECTION DROP',
		subtitle: 'Get the PFP avatars you will use for in-universe interaction, synergized with your asset holdings.',
		image: '/imagesRoadMap/roadMap_4.png',
		active: false,
		color: 'rgba(96, 179, 255, 1)',

	},
	{
		id: 5,
		href: '/',
		title: 'LET THE GAMES BEGIN',
		subtitle: '',
		image: '/imagesRoadMap/roadMap_1.png',
		active: false,
		color: 'rgba(92, 40, 145, 1)',

	}
];


export const RoadMapArtMenu = ({ }: RoadMapArtMenuProps) => {
	const [openedId, setOpenedId] = useState(1);
	const [activeColor, setActiveColor] = useState(links[0].color);
	const [activeImage, setActiveImage] = useState(links[0].image);



	useEffect(() => {
		setActiveColor(links.find((link) => link.id === openedId)?.color ?? activeColor);
	}, [openedId, activeColor]);


	return (
		<>
			<div className={styles.artMenu}
			>
				{links.map((link) => (
					<RoadMapArtMenuItem
						key={link.id}
						onClick={(event) => {
							event.preventDefault();
							setOpenedId(link.id !== openedId ? link.id : 0)
							setActiveColor(link.color);
							setActiveImage(link.image);
						}}
						isOpened={link.id === openedId}
						{...link}
						color={link.id === openedId ? link.color : activeColor}

						openedId={openedId}
					/>
				))}
			</div>
			<Image
				src={activeImage}
				alt={'roadMap'}
				width="1000"
				height="1000"
				style={{ maxWidth: '100%', objectFit: 'cover', height: 'auto' }}
				className={styles.artMenuBg}
			/>
		</>
	);
};

