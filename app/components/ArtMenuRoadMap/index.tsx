"use client"
import React, { useState } from 'react';

import { ArtMenuRoadMapItem } from './ArtMenuRoadMapItem';

import styles from './style.module.scss';

interface ArtMenuRoadMapProps { }

const links = [
	{
		id: 1,
		href: '/',
		title: 'GENESIS LANDS DROP An original',
		subtitle: 'collection of 5,555 land plots will be made ready for the very first Dusktopian adventurers.',
		active: false,
	},
	{
		id: 2,
		href: '/',
		title: 'STAKING GOES LIVE',
		subtitle: ' The EON Corporation Superbank begins rewarding Dusktopians staking their land plots with $DAWN.',
		// image: '/imagesArtMenu/glacial_frontier.jpg',
		active: false,
	},
	{
		id: 3,
		href: '/',
		title: 'NEW WORLDS EMERGE',
		subtitle: 'Claim a slice of our secret land collection with $DAWN. Outfit your existing land with new properties and accessories.',
		active: false,
	},
	{
		id: 4,
		href: '/',
		title: 'AVATAR COLLECTION DROP',
		subtitle: 'Get the PFP avatars you will use for in-universe interaction, synergized with your asset holdings.',
		active: false,
	},
	{
		id: 5,
		href: '/',
		title: 'LET THE GAMES BEGIN',
		subtitle: '',
		active: false,
	}
];

export const ArtMenuRoadMap: React.FC<ArtMenuRoadMapProps> = () => {
	const [openedId, setOpenedId] = useState(1);
	return (
		// <div className={styles.artMenuRoadMap}>
		<div className={styles.artMenu}>
			{/* <svg xmlns="http://www.w3.org/2000/svg" width="53" height="991" viewBox="0 0 53 991" fill="none">
				<path d="M27.6668 2.83685L5.00001 21.501L5.00001 46.8308L27.6668 70.8275L27.6668 244.724L48.5555 263.001L48.5555 297.501L27.6668 313.603L27.6668 469.271L5.00004 487L4.50001 521L27.6668 539L27.6668 690.5L48.5555 708L48.5555 743.639L27.6668 762.139L27.6668 913L5.00001 931.682L5.00001 965.182L30.5 986.181L43 975.181" stroke="#fff" stroke-width="7" />
			</svg> */}
			{links.map((link) => (
				<ArtMenuRoadMapItem
					key={link.id}
					onClick={(event) => {
						event.preventDefault();
						setOpenedId(link.id !== openedId ? link.id : 0)
					}}
					isOpened={link.id === openedId || link.active}
					{...link}
				/>
			))}
		</div>
	);
}
