import cl from 'classnames';
import styles from './style.module.scss';
import Image from 'next/image';

interface GlassCardProps {
	imageUrl: string;
	type: 'color' | 'dark';
}

export const GlassCard: React.FC<GlassCardProps> = ({
	imageUrl,
	type
}) => (
	<div className={cl(styles.classCard, styles[type])}>
		<Image width={200} height={200} src={imageUrl} alt="Card" className={styles.classCardImage} />
	</div>
);