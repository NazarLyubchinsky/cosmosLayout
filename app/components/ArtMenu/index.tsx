"use client"
import React, { useState } from 'react';


import styles from './style.module.scss';
import { ArtMenuItem } from './ArtMenuItem';

interface ArtMenuProps { }

const links = [
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

export const ArtMenu: React.FC<ArtMenuProps> = () => {
	const [openedId, setOpenedId] = useState(1);
	return (
		<div className={styles.artMenu}>
			{links.map((link) => (
				<ArtMenuItem
					key={link.id}
					onClick={(event) => {
						event.preventDefault();
						setOpenedId(link.id !== openedId ? link.id : 0)
					}}
					isOpened={link.id === openedId}
					{...link}
				/>
			))}
		</div>
	);
}