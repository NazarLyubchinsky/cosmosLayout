import cl from 'classnames';
import styles from './style.module.scss';
import Image from 'next/image';

interface GlassCardProps {
	imageUrl: string;
	type: 'color' | 'dark';
}

export const GlassCard: React.FC<GlassCardProps> = ({
	imageUrl,
	type,
}) => {
	return (
		<div className={cl(styles.classCard, styles[type])}>
			<Image loading="lazy" width={210} height={137} src={imageUrl} alt="Card" className={styles.classCardImage} />
		</div>
	);
}