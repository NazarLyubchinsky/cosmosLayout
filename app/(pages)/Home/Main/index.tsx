import cl from 'classnames';

import styles from "../home.module.scss"

import { ReactNode } from 'react';
import Link from 'next/link';
import { Button } from '@components/Button';
import { Navigation } from '@components/Navigation';
import { Title } from '@components/Title';
interface ArtMenuProps {
	children?: ReactNode
	isActiveid: string
}
export const Main = ({ children, isActiveid }: ArtMenuProps) => {
	return (
		<section className={cl(styles.section, styles.sectionMain)} id={isActiveid} >

			<Navigation />

			<div >
				<Title>
					From dust to&nbsp;dawn
				</Title>
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
			</div>
			{children}
		</section >
	);
}