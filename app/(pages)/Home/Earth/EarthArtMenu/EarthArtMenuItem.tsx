import Link from "next/link"

import styles from './style.module.scss';
import cl from 'classnames';
import Image from "next/image";
import { Button, TypeArtButton } from "@/src/components/Button";

interface EarthArtMenuItemProps {
	id: number
	href: string
	image: string
	title: string
	isOpened: boolean
	onClick: (event: React.MouseEvent) => void
	onClickButton: (event: React.MouseEvent) => void
}
const getTypeById = (id: number): TypeArtButton => {
	if (id === 1) {
		return 'YellowPink';
	}

	if (id === 2) {
		return 'Blue';
	}

	if (id === 3) {
		return 'BluePurple';
	}

	return 'GreenYellow';
}



export const EarthArtMenuItem: React.FC<EarthArtMenuItemProps> = ({
	id,
	href,
	image,
	title,
	isOpened,
	onClick,
	onClickButton
}) => {
	return (
		<Link
		href={href}
		onClick={onClick}
		className={cl(
			styles.artMenuItem,
			isOpened && styles.artMenuItemActive
		)}
	>
		<h3 className={styles.artMenuTitle}>{title}</h3>
		<div className={cl(
			styles.cardMore,
			styles.artMenuCard
		)}>
			<Button
				kind='Button'
				type={getTypeById(id)}
				onClick={onClickButton}
				className={styles.cardMoreButton}
			>
				More
			</Button>
			<Image
				src={image}
				alt={title}
				width="271"
				height="184"
				className={styles.cardMoreImage}
			/>
		</div>
		<span className={styles.artMenuDecorator} />
	</Link>
	)
}