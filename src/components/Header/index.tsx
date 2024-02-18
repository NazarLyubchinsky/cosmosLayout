'use client'

import Link from "next/link"
import { Button } from "../Button"
import { Logo } from "../Logo"
import { SocialNetworks } from "../SocialNetworks"

import styles from './styles.module.scss'

export const Header = () => {

	return (
		<header
			data-aos="fade-down"
			className={styles.header}
			style={{ color: 'black' }}
		>
			<Logo />
			<SocialNetworks />
			<Link href={'/planets'}>
				<Button
					kind='Button'
					onClick={() => { }}
				>
					all planets
				</Button>
			</Link>
		</header>
	)
}