"use client"
import styles from './style.module.scss';
import { EarthArtMenuItem } from './EarthArtMenuItem';
import { useTodoContext } from '@/src/context/useTodoContext';


interface EarthArtMenuProps {
	links: Link[];

}


export const EarthArtMenu = ({ links }: EarthArtMenuProps) => {
	const { openedId, setOpenedId } = useTodoContext();

	

	return (
		<>
			{/* <div className={styles.artMenu} data-aos="fade-right">
				{links.map((link) => (
					<EarthArtMenuItem
						key={link.id}
						onClick={(event) => {
							event.preventDefault();
							setOpenedId(link.id !== openedId ? link.id : 0)
						}}
						isOpened={link.id === openedId}
						{...link}
					/>
				))}
			</div> */}
			
		</>
	);
}