
import cl from 'classnames';
import styles from './styles.module.scss'
import { Button } from '@/app/components/Button';

interface CollaborationsButtonProps {
	children: React.ReactNode
}
export const CollaborationsButton: React.FC<CollaborationsButtonProps> = ({ children }) => {
	return (
		<Button
			kind='ButtonRotate'
			className={cl(styles.cardMoreButton)}
		>
			{children}
		</Button>
	)
}