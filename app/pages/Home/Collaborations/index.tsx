
import styles from '../home.module.scss'
import { CollaborationsButton } from './CollaborationsButton'
import { TitleWithImage } from '@/app/components/TitleWithImage'

interface CollaborationsProps {
	isActiveid: string
}

export const Collaborations: React.FC<CollaborationsProps> = ({ isActiveid }) => {
	return (
		<section className={styles.sectionCollaborations} id={isActiveid}>
			<TitleWithImage title='COLLABORATIONS' subtitle='PARTNERS' />

			<div className={styles.sectionCollaborationsContainer}>
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