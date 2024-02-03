import cl from 'classnames';

import styles from "../home.module.scss"

import { Logo } from '@/app/components/Logo';
import { SocialNetworks } from '@/app/components/SocialNetworks';
import { Button } from '@/app/components/Button';
import { Navigation } from '@/app/components/Navigation';
import { Title } from '@/app/components/Title';
import { ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Header } from '@/app/components/Header';
interface ArtMenuProps {
	children?: ReactNode
	isActiveid: string
}
export const Main = ({ children, isActiveid }: ArtMenuProps) => {
	return (
		<section className={cl(styles.section, styles.sectionMain)} id={isActiveid} >

			<Header />

			<Navigation />

			<div>
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