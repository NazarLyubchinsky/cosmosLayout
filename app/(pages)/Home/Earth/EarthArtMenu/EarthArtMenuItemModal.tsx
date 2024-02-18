"use client"
import Modal from '@/src/components/Modal/Modal';
import { useTodoContext } from '@/src/context/useTodoContext'


interface EarthArtMenuItemModalProps {
	links: Link[];
}
export const EarthArtMenuItemModal = ({ links }: EarthArtMenuItemModalProps) => {
	const { isModalOpen, openedId } = useTodoContext();

	const openedLink = links.find((link) => link.id === openedId);

	return (
		<>
			{/* {isModalOpen && ( */}
				<Modal>
					{
						openedLink && <h2>{openedLink.title}</h2>
					}
				</Modal>
			{/* )} */}
		</>
	)
}