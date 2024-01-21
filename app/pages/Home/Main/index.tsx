import cl from 'classnames';

import styles from "../home.module.scss"

import { Logo } from '@/app/components/Logo';
import { SocialNetworks } from '@/app/components/SocialNetworks';
import { Button } from '@/app/components/Button';
import { Navigation } from '@/app/components/Navigation';
import { Title } from '@/app/components/Title';
import { ReactNode } from 'react';
interface ArtMenuProps {
	children?: ReactNode
	isActiveid: string
}
export const Main
	: React.FC<ArtMenuProps>
	= ({ children, isActiveid }) => {
		return (
			<section className={cl(styles.section, styles.sectionMain)} id={isActiveid} >
				<header
					className={styles.header}
					style={{ color: 'black' }}
				>
					<Logo />
					<SocialNetworks />
					<Button
						kind='Button'
						onClick={() => { }}
					>
						Whitepaper
					</Button>
				</header>
				<Navigation />

				<div>
					<Title>
						From dust to&nbsp;dawn
					</Title>
					<ul className={styles.buttonList}>
						<li>
							<Button
								kind='Button'

								onClick={() => { }}
							>
								Mint
							</Button>
						</li>
						<li>
							<Button
								kind='Button'

								onClick={() => { }}
							>
								Connect Wallet
							</Button>
						</li>
					</ul>
				</div>
				{children}
			</section >
		);
	}