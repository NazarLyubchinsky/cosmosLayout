import { ReactNode } from 'react';

import styles from './style.module.scss';

import cl from 'classnames';

export type TypeArtButton = 'BluePurple' | 'GreenYellow' | 'Blue' | 'YellowPink';
// export type TypeArtButton2 = 'Pink' | 'LightBlue' | 'LightBluePurple' | 'Blue';


interface ButtonProps {
	onClick: () => void;
	children: ReactNode;
	className?: string;
	type?: TypeArtButton 
	// | TypeArtButton2
	;
}

export const Button: React.FC<ButtonProps> = ({
	onClick,
	children,
	className,
	type,
}) => {
	return (
		<button
			className={cl(
				styles.artButton,
				className,
				type && styles.artButtonType,
				type && styles[`artButton${type}`]
			)}
		onClick={onClick}
		>
			<span className={styles.artButtonText}>{children}</span>
			<span className={styles.artButtonAngleLeft} />
			<span className={styles.artButtonAngleRight} />
		</button>
	);
}