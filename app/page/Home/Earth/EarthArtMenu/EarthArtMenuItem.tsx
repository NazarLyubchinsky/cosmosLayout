import Link from "next/link"

import styles from './style.module.scss';
import cl from 'classnames';
import Image from "next/image";
import { EarthArtMenuItemButton } from "./EarthArtMenuItemButton";

interface EarthArtMenuItemProps {
	id: number
	href: string
	image: string
	title: string
	isOpened: boolean
	onClick: (event: React.MouseEvent) => void
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
			href={`${href}`}
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
				<EarthArtMenuItemButton id={id} />
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