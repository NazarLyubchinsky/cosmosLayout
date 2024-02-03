'use client'

import { Button } from "../Button"
import { Logo } from "../Logo"
import { SocialNetworks } from "../SocialNetworks"

import styles from './styles.module.scss'

export const Header = () => {
	return (
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
	)
}