"use client"
import { Fragment, useState } from 'react';
import { linksNavigations } from '@/src/utils/constants';

import styles from './style.module.scss'
import { Logo } from '../../Logo';
import { NavigationLinkList } from '../../Navigation/NavigationLinkList';

export const Burger = () => {

	const [isModalOpenBurger, setIsModalOpenBurger] = useState(false)

	const handleClick = () => {
		setIsModalOpenBurger(!isModalOpenBurger);
		isModalOpenBurger ? document.body.style.overflow = 'auto' : document.body.style.overflow = 'hidden'
	};

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
								{linksNavigations.map((link, id) => (
									<Fragment key={link.id}>
										<NavigationLinkList onClick={handleClick} link={link} id={id} />
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