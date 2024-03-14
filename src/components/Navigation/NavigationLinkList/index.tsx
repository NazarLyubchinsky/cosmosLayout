import { Link } from "react-scroll/modules";
import { Fragment } from 'react';

import styles from './style.module.scss';
import cl from 'classnames';


interface NavigationLinkList {
	id: number,
	link: {
		id: number, title: string, href: string, active: boolean
	},
	activeLinkId: string,
	removeHash: (href: string) => string,
	visibleLinks: any,
	onClick?: () => void
}

export const NavigationLinkList = ({ link, activeLinkId, removeHash, visibleLinks, onClick, id }: NavigationLinkList) => {
	return (
		<Fragment key={link.id}>
			<Link
				onClick={onClick}
				activeClass="active" to={link.href} spy={true} smooth={true} offset={0} duration={220}
				className={
					cl(
						styles.navigationLink,
						activeLinkId === removeHash(link.href) && styles.navigationLinkActive
					)
				}
			>
				{link.title}
			</Link>
			{
				id < visibleLinks.length - 1 && <span className={styles.navigationStar} />}
		</Fragment>
	);
};
