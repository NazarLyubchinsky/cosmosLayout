'use client'

import Link from "next/link"
import { Button } from "../Button"
import { Logo } from "../Logo"
import { SocialNetworks } from "../SocialNetworks"
import cl from "classnames"
import { Burger } from "./Burger"
import styles from './styles.module.scss'
import { useEffect, useState } from "react"
export const Header = () => {

	const [active, setActive] = useState('');
	const [lastScroll, setLastScroll] = useState(0);
	const handleScroll = () => {
		if (window.scrollY <= lastScroll) {
			setActive('');
		} else {
			setActive('active');
		}

		setLastScroll(window.scrollY);
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	return (

		<header
			className={cl(styles.header,
				active && styles.active
			)}
			style={{
				color: 'black',
			}}
		>
			<Logo />

			<div className={styles.headerSocial}>
				<SocialNetworks />
			</div>
			<Link className={styles.headerButton} href={'/planets'}>
				<Button
					kind='Button'
					onClick={() => { }}
				>
					all planets
				</Button>
			</Link>

			<div className={styles.headerBurger}>
				<Burger />
			</div>
		</header>

	)
}