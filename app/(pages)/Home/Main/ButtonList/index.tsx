import Link from 'next/link'
import styles from './style.module.scss'
import { Button } from '@/src/components/Button'

export const ButtonList = () => {

	return (
		<ul className={styles.buttonList}>
			<li>
				<Link href={'#collaborations'}>
					<Button
						kind='Button'
					>
						Collaborations
					</Button>
				</Link>

			</li>
			<li>
				<Link href={'/planets'}>
					<Button
						kind='Button'
					>
						Go to all planets
					</Button>
				</Link>
			</li>
		</ul>
	)
}