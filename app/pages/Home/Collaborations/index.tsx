
import { Title } from '@/app/components/Title'
import styles from '@/app/styles/home.module.scss'
import cl from 'classnames'
import { CollaborationsButton } from './CollaborationsButton'
import { TitleWithImage } from '@/app/components/TitleWithImage'

export const Collaborations = () => {
	return (
		<section className={styles.sectionCollaborations}>
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

			{/* <div className={styles.dropShadow}></div> */}
		</section>
	)
}