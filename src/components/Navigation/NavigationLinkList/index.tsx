'use client'
import { Link } from "react-scroll/modules";
import { Fragment } from 'react';

import styles from './style.module.scss';
import cl from 'classnames';
import { linksNavigations } from "@/src/utils/constants";
import { useTodoContext } from "@/src/context/useTodoContext";

interface NavigationLinkList {
	id: number,
	link: {
		id: number, title: string, href: string, active: boolean
	},
	onClick?: () => void
}


export const NavigationLinkList = ({ link, onClick, id, }: NavigationLinkList) => {
	const { setActiveLinkId, setCenterIndex } = useTodoContext();
	const handleLinkSetActive = (to: string) => {
		setActiveLinkId(to);
		setCenterIndex(link.id - 1)
		localStorage.setItem('activeLinkId', to);
		localStorage.setItem('activeId', (link.id - 1).toString());
	};

	return (
		<Fragment key={link.id}>
			<Link
				onSetActive={handleLinkSetActive}
				activeClass={styles.navigationLinkActive}
				onClick={
					onClick
				}
				to={link.href} spy={true} smooth={true} offset={0} duration={220}
				className={
					cl(
						styles.navigationLink,
					)
				}
			>
				{link.title}
			</Link>
			{id < linksNavigations.length - 1 && <span className={styles.navigationStar} />}
		</Fragment>
	);
};
