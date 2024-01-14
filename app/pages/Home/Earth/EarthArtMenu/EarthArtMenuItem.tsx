import Link from "next/link"

import styles from './style.module.scss';
import cl from 'classnames';
import { Button, TypeArtButton } from "../../../../components/Button";
import Image from "next/image";

interface EarthArtMenuItemProps {
	id: number
	href: string
	image: string
	title: string
	isOpened: boolean
	onClick: (event: React.MouseEvent) => void
}

const getTypeById = (id: number): TypeArtButton => {
	switch (id) {
		case 1:
			return 'YellowPink'
		case 2:
			return 'Blue'
		case 3:
			return 'BluePurple'
		default:
			return 'GreenYellow'
	}
}

export const EarthArtMenuItem: React.FC<EarthArtMenuItemProps> = ({
	id,
	href,
	image,
	title,
	isOpened,
	onClick
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
			<h3 className={styles.artMenuItemTitle}>{title}</h3>
			<div className={cl(
				styles.cardMore,
				styles.artMenuCard
			)}>
				<Button
					type={getTypeById(id)}
					onClick={() => { }}
					className={styles.cardMoreButton}
				>
					More
				</Button>
				<Image
					src={image}
					alt={title}
					width="271"
					height="184"
					style={{ maxWidth: '100%' }}
					className={styles.cardMoreImage}
				/>
			</div>
			<span className={styles.artMenuDecorator} />
		</Link>
	)
}