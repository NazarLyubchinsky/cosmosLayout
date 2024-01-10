import cl from 'classnames';

import styles from '../../styles/home.module.scss'
import { Logo } from '@/app/components/Logo';
import { SocialNetworks } from '@/app/components/SocialNetworks';
import { Button } from '@/app/components/Button';
import { Navigation } from '@/app/components/Navigation';
import { Title } from '@/app/components/Title';
export const Main
// : React.FC<ArtMenuProps>
 = () => {
	return (
		<section className={cl(styles.section, styles.sectionMain)}>
			<header
				className={styles.header}
				style={{ color: 'black' }}
			>
				<Logo />
				<SocialNetworks />
				<Button
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
							onClick={() => { }}
						>
							Mint
						</Button>
					</li>
					<li>
						<Button
							onClick={() => { }}
						>
							Connect Wallet
						</Button>
					</li>
				</ul>
			</div>
		</section >
	);
}