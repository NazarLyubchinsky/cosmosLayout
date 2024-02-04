
import useAOS from '@/src/hooks/useAos'
import styles from '../home.module.scss'
import { CollaborationsButton } from './CollaborationsButton'
import { TitleWithImage } from '@/src/components/TitleWithImage'

interface CollaborationsProps {
	isActiveid: string
}

export const Collaborations = ({ isActiveid }: CollaborationsProps) => {
	const { aosRef } = useAOS();
	return (
		<section className={styles.sectionCollaborations} id={isActiveid}>
			<TitleWithImage title='COLLABORATIONS' subtitle='PARTNERS' />

			<div className={styles.sectionCollaborationsContainer} ref={aosRef}
				data-aos="fade-up">
				<CollaborationsButton >
					Logo
				</CollaborationsButton>
				<CollaborationsButton >
					Logo
				</CollaborationsButton>
				<CollaborationsButton >
					Logo
				</CollaborationsButton>
				<CollaborationsButton >
					Logo
				</CollaborationsButton>
			</div>
		</section>
	)
}