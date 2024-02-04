
import cl from 'classnames';
import styles from './styles.module.scss'
import { Button } from '@/src/components/Button';

interface CollaborationsButtonProps {
	children: React.ReactNode
}
export const CollaborationsButton = ({ children }: CollaborationsButtonProps) => {
	return (
		<Button
			className={cl(styles.cardMoreButton)}
			kind='ButtonRotate'
		>
			{children}
		</Button>
	)
}