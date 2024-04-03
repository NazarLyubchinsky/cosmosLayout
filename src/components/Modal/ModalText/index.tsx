import cl from 'classnames';
import styles from './style.module.scss';

interface ModalTextProps {
	children: React.ReactNode;
	className?: string;
}

export const ModalText: React.FC<ModalTextProps> = ({
	children,
	className
}) => (
	<div className={cl(className, styles.text)}>
		{children}
	</div>
);