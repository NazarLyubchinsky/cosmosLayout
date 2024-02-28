"use client"
import { Fragment, useState } from 'react';
import { linksNavigations } from '@/src/utils/constants';
import { useTodoContext } from '@/src/context/useTodoContext';
import cl from 'classnames';

import Link from 'next/link';
import styles from './style.module.scss'
import { Logo } from '../../Logo';

export const Burger = () => {
	const { activeLinkId } = useTodoContext();

	const [isModalOpenBurger, setIsModalOpenBurger] = useState(false)

	const handleClick = () => {
		setIsModalOpenBurger(!isModalOpenBurger);
		isModalOpenBurger ? document.body.style.overflow = 'auto' : document.body.style.overflow = 'hidden'
	};

	const removeHash = (href: string): string => href.replace(/.*\#/, '');
	const visibleLinks = linksNavigations

	return (
		<div className={styles.modal_button_container}>
			<button onClick={handleClick} className={styles.burger}>
			</button>

			{isModalOpenBurger && (
				<>
					<div className={styles.modal_overlay} onClick={handleClick}>
					</div>
					<div className={styles.modal_content} >
						<section className={styles.sidebar} >

							<div className={styles.sidebarHeader}>
								<Logo />
								<span className={styles.close_modal_button} onClick={handleClick}>
									&times;
								</span>
							</div>

							<nav className={styles.navigation}
								data-aos="fade-up">
								{visibleLinks.map((link, id) => (
									<Fragment key={link.id}>
										<Link
											href={link.href}
											onClick={handleClick}
											className={cl(
												styles.navigationLink,
												activeLinkId === removeHash(link.href) && styles.navigationLinkActive
											)}
										>
											{link.title}
										</Link>
										{id < visibleLinks.length - 1 && <span className={styles.navigationStar} />}
									</Fragment>
								))}
							</nav >
						</section>
					</div>
				</>
			)}
		</div>
	)
}