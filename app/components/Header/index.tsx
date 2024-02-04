'use client'

import useAOS from "@/app/hooks/useAos"
import { Button } from "../Button"
import { Logo } from "../Logo"
import { SocialNetworks } from "../SocialNetworks"

import styles from './styles.module.scss'

export const Header = () => {
	const { aosRef } = useAOS();

	return (
		<header 
		ref={aosRef}
		data-aos="fade-down"
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