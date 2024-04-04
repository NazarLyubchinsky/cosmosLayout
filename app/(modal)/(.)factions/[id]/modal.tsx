'use client';

import { type ElementRef, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';
import styles from './style.module.scss'
import Preloader from '@/src/components/Preloader';
import ModalEarth from '@/src/components/Modal/Modal';


interface EarthArtMenuItemModalProps {
	id: string;
	backgroundUrl: string;

}

export function Modal({
	id,
	backgroundUrl,

}: EarthArtMenuItemModalProps) {
	const router = useRouter();
	const dialogRef = useRef<ElementRef<'dialog'>>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (!dialogRef.current?.open) {
			dialogRef.current?.showModal();
		}
		const image = new Image();
		image.onload = () => setIsLoading(false);
		image.src = backgroundUrl;
		return () => {
			image.onload = null;
		};
	}, [backgroundUrl]);

	return createPortal(<div className="modal-backdrop">
		<dialog ref={dialogRef} className={styles.modal} onClose={() => router.back()} style={{
			backgroundImage: `url(${backgroundUrl})`,
			backgroundColor: 'black',
		}}>
			{isLoading && <Preloader className={styles.preloader}></Preloader>}
			{!isLoading &&
				<div className={styles.modalContainer}>
					<ModalEarth id={id} visibleHeader={true} />
				</div>
			}
		</dialog>
	</div>,
		document.getElementById('modal-root')!
	);
}

