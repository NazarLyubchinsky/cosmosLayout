"use client"
import { useRouter } from 'next/navigation';
import { Button } from '../Button'
import styles from './style.module.scss'
import clx from 'classnames'
import { useEffect, useMemo, useState } from 'react';
import { ModalText } from './ModalText';
import { GlassCard } from '../GlassCard';
import { Factionslinks } from '@/src/utils/constants';
import { getFactionModalForValidatedId } from '@/src/utils/processId';
import { stringToId } from '@/src/utils/stringToId';




interface ModalEarthProps {
	id: string
	visibleHeader: boolean
}

export default function ModalEarth({
	id,
	visibleHeader

}: ModalEarthProps) {
	const router = useRouter();
	const filteredFactions = getFactionModalForValidatedId(id)
	const validatedFactionId = stringToId(id);

	const [modalInfo, setModalInfo] = useState<ModalInfo | null>(null);
	const nextModalInfo = useMemo<ModalInfo | null>(() => {
		if (!modalInfo) return null;
		let nextModalInfo = null;
		for (let i = 0; i < Factionslinks.length; i++) {
			if (
				Factionslinks[i].modalInfo.title === modalInfo.title
				&& Factionslinks[i + 1]
			) {
				nextModalInfo = Factionslinks[i + 1].modalInfo;
				break;
			}
		}
		return nextModalInfo;
	}, [modalInfo]);

	useEffect(() => {

		setModalInfo(filteredFactions);
	}, [filteredFactions]);

	return (
		filteredFactions &&
		<>
			{visibleHeader && <header className={clx(styles.modalHeader,
			)}>
				<Button
					kind='Button'
					onClick={() => router.back()}
					type="Transparent"
					className={styles.modalButton}
				>
					Back
				</Button>

				<button className={styles.modalButtonMobile}
					onClick={() => router.back()}
				>
					<svg className={styles.modalButtonMobileArrow} xmlns="http://www.w3.org/2000/svg" width="34" height="21" viewBox="0 0 34 21" fill="none">
						<path d="M32.1123 10.5564L0.999607 10.5564M32.1123 10.5564L23.5 1.94409M32.1123 10.5564L23.5 19.1687" stroke="white" />
					</svg>
				</button>

				{!!nextModalInfo && (
					<>
						<Button
							kind='Button'
							onClick={() => {
								setModalInfo(nextModalInfo)
								if (validatedFactionId !== null) {
									router.push('/factions/' + (validatedFactionId + 1));
								}
							}}
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
									className={styles.modalArrowPath}
									d="M1 6H24.5M24.5 6L19.5 1M24.5 6L19.5 11"
									stroke="white"
									strokeWidth="1.5"
									strokeLinecap="round"
								/>
							</svg>
						</Button>
						<button className={styles.modalButtonMobile}
							onClick={() => {
								setModalInfo(nextModalInfo)
								if (validatedFactionId !== null) {
									router.push('/factions/' + (validatedFactionId + 1));
								}
							}}>
							<svg xmlns="http://www.w3.org/2000/svg" width="34" height="21" viewBox="0 0 34 21" fill="none">
								<path d="M32.1123 10.5564L0.999607 10.5564M32.1123 10.5564L23.5 1.94409M32.1123 10.5564L23.5 19.1687" stroke="white" />
							</svg>
						</button>

					</>
				)}
			</header>}
			<h2
				style={{
					backgroundImage: `url(${filteredFactions?.titleUrl})`,
				}}
				className={styles.modalTitle}
			>
				{filteredFactions?.title}
			</h2>
			<ModalText
				className={styles.modalText}
			>{filteredFactions?.content}</ModalText>
			<div className={styles.modalContent}
			>
				<div className={styles.cardList}>
					{filteredFactions?.listImages.map((item, id) => {
						return (
							<GlassCard
								key={id}
								type={item.type}
								imageUrl={item.src}
							/>
						)
					})}
				</div>
			</div>
		</>
	)
}