import cl from 'classnames';
import styles from './style.module.scss';

interface TextModalProps {
	children: React.ReactNode;
	className?: string;
}

export const TextModal: React.FC<TextModalProps> = ({
	children,
	className
}) => (
	<div className={cl(className, styles.text)}>
		{children}
	</div>
);