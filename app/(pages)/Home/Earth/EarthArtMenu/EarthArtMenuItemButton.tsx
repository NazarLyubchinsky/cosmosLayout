"use client"
import styles from './style.module.scss';
import { Button, TypeArtButton } from "@components/Button";
import { useTodoContext } from '@/src/context/useTodoContext';
interface EarthArtMenuItemButtonProps {
	id: number,
}


const getTypeById = (id: number): TypeArtButton => {
	switch (id) {
		case 1:
			return 'YellowPink'
		case 2:
			return 'Blue'
		case 3:
			return 'BluePurple'
		default:
			return 'GreenYellow'
	}
}

export const EarthArtMenuItemButton: React.FC<EarthArtMenuItemButtonProps> = ({
	id,

}) => {
	const { setIsModalOpen } = useTodoContext();
	return (
		<>
			{/* <Button
				kind='Button'
				type={getTypeById(id)}
				onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
					e.stopPropagation()
					e.preventDefault();
					setIsModalOpen(true)
					// if (window.history.pushState) {
					// 	window.history.pushState({}, '', `pages/shop/${id}`);
					// }
				}
				}
				className={styles.cardMoreButton}
			>
				More
			</Button> */}
		</>
	)
}