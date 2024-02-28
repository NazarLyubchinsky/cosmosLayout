'use client'

import Link from "next/link"
import { Button } from "../Button"
import { Logo } from "../Logo"
import { SocialNetworks } from "../SocialNetworks"
import cl from "classnames"
import styles from './styles.module.scss'
import { Burger } from "./Burger"
import { useEffect, useRef, useState } from "react"
export const Header = () => {
	// const prevScrollPosRef = useRef(0);
	// const [isHeaderVisible, setIsHeaderVisible] = useState(true);

	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		const currentScrollPos = window.scrollY;
	// 		requestAnimationFrame(() => {
	// 			setIsHeaderVisible(prevScrollPosRef.current > currentScrollPos || currentScrollPos < 10);
	// 			prevScrollPosRef.current = currentScrollPos;
	// 		});
	// 	};
	// 	window.addEventListener('scroll', handleScroll);

	// 	return () => {
	// 		window.removeEventListener('scroll', handleScroll);
	// 	};
	// }, [isHeaderVisible]);
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
			// data-aos="fade-down"
			className={cl(styles.header,
				 active ? `${styles.active}` : null
				 )}
			style={{
				color: 'black',
				// top: isHeaderVisible ? '' : '-100px'
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