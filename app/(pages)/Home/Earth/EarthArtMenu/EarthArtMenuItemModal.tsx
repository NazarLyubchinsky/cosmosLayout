"use client"
import { ReactNode } from 'react';
import Modal from '@/src/components/Modal/Modal';
import { useTodoContext } from '@/src/context/useTodoContext'
import styles from './style.module.scss';
import { Button } from '@/src/components/Button';


interface EarthArtMenuItemModalProps {
	links: Link[];
	backgroundUrl: string;
	titleUrl: string;
	onClickClose: () => void;
	onClickNext: () => void;
	title: string;
	text: ReactNode;
	scrollContent: ReactNode;
	isNext: boolean;
}
export const EarthArtMenuItemModal = ({ links, backgroundUrl,
	titleUrl,
	onClickClose,
	onClickNext,
	title,
	text,
	scrollContent,
	isNext, }: EarthArtMenuItemModalProps) => {
	const { isModalOpen, openedId } = useTodoContext();

	const openedLink = links.find((link) => link.id === openedId);

	return (
		<>
			{/* {isModalOpen && (
				<Modal>
					{
						openedLink && <h2>{openedLink.title}</h2>
					}
				</Modal>
			)} */}
			<div
				className={styles.modal}
				style={{
					backgroundImage: `url(${backgroundUrl})`,
				}}
			>
				<div className={styles.modalContainer}>
					<header className={styles.modalHeader}>
						<Button
							kind='Button'
							onClick={onClickClose}
							type="Transparent"
							className={styles.modalButton}
						>
							Close
						</Button>
						{isNext && (
							<Button
								kind='Button'
								onClick={onClickNext}
								type="White"
								className={styles.modalButton}
							>
								<span>Next</span>
								<svg
									width="26"
									height="12"
									viewBox="0 0 26 12"
									fill="none"
									className={styles.modalArrow}
								>
									<path
										d="M1 6H24.5M24.5 6L19.5 1M24.5 6L19.5 11"
										stroke="black"
										strokeWidth="1.5"
										strokeLinecap="round"
									/>
								</svg>
							</Button>
						)}
					</header>
					<h2
						style={{
							backgroundImage: `url(${titleUrl})`,
						}}
						className={styles.modalTitle}
					>{title}</h2>
					{/* <Text
						className={styles.modalText}
					>{text}</Text> */}
					<div className={styles.modalContent}>
						{scrollContent}
					</div>
				</div>
			</div>
		</>
	)
}