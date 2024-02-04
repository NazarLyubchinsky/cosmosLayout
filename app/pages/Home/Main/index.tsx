import cl from 'classnames';

import styles from "../home.module.scss"

import { ReactNode } from 'react';
import Link from 'next/link';
import { Button } from '@/src/components/Button';
import { Navigation } from '@/src/components/Navigation';
import { Title } from '@/src/components/Title';
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
						<Link href={'/pages/shop'}>
							<Button
								kind='Button'
							>
								Go to shop
							</Button>
						</Link>
					</li>
				</ul>
			</div>
			{children}
		</section >
	);
}