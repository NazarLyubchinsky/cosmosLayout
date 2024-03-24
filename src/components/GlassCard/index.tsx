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
		<Image width={100} height={100} src={imageUrl} alt="Card" className={styles.classCardImage} />
	</div>
);