import Image from 'next/image';

import { Button } from '../Button';

import styles from './style.module.scss';

interface CardMoreProps {
	src: string;
	description: string;
	onClick: () => void;
}


export const CardMore: React.FC<CardMoreProps> = ({
	src,
	description,
	onClick,
}) => {
	return (
		<div className={styles.cardMore}>
			<Button
				 onClick={onClick}
				className={styles.cardMoreButton}
			>
				More
			</Button>
			<Image
				src={src}
				alt={description}
				className={styles.cardMoreImage}
				width="271"
				height="184"
			/>
		</div>
	);
}