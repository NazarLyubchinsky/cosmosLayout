
import { ReactNode } from 'react';
import styles from './style.module.scss';
import cl from 'classnames';
import { ButtonAngleLeft, ButtonAngleRight } from './ButtonAngle';

export type TypeArtButton = 'BluePurple' | 'GreenYellow' | 'Blue' | 'YellowPink';
export type ButtonKind = 'Button' | 'ButtonRotate';

interface ButtonProps {
	onClick?: () => void;
	children: ReactNode;
	className?: string;
	type?: TypeArtButton;
	kind: ButtonKind;
	isOpened?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
	onClick,
	children,
	className,
	type,
	kind,
	isOpened = false,
}) => {
	const buttonClasses = cl(
		className,
		kind === 'Button' && styles.artButton,
		kind === 'Button' && type && styles.artButtonType,
		kind === 'Button' && type && styles[`artButton${type}`],
		kind === 'ButtonRotate' && styles.blurredButton,
		kind === 'ButtonRotate' && isOpened && styles.blurredButtonActive
	);

	return (
		<button
			className={buttonClasses}
			role="button"
			onClick={onClick}
			aria-expanded={isOpened}
		>
			{kind === 'Button' && (
				<>
					<span className={styles.artButtonText}>{children}</span>
					<span className={styles.artButtonAngleLeft} />
					<span className={styles.artButtonAngleRight} />
				</>
			)}
			{kind === 'ButtonRotate' && (
				<>
					{children}
					<ButtonAngleLeft isOpened={isOpened} />
					<ButtonAngleRight isOpened={isOpened} />
				</>
			)
			}
		</button>
	);
};