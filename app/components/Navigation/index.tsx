import Link from 'next/link';
import cl from 'classnames';

import { Fragment, ReactNode, useContext } from 'react';
import styles from './style.module.scss';
import { ActiveLinkContext } from '@/app/page';
const links = [
	{
		id: 1,
		title: 'Home',
		href: '#home',
		active: true,
	},
	{
		id: 2,
		title: 'Factions',
		href: '#factions',
		active: false,
	},
	{
		id: 3,
		title: 'Roadmap',
		href: '#roadmap',
		active: false,
	}
];

interface NavigationProps {
	children?: ReactNode,
}


export const Navigation: React.FC<NavigationProps> = ({ children }) => {

	const { activeLinkId, setActiveLinkId } = useContext(ActiveLinkContext);

	const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		const targetId = e.currentTarget.href.replace(/.*\#/, '');
		if (targetId !== activeLinkId) {
			setActiveLinkId(targetId);
		}

		localStorage.setItem('activeLinkId', targetId);
		const elem = document.getElementById(targetId);
		elem?.scrollIntoView({ behavior: 'smooth' });
	};
	return (
		<>
			<nav className={styles.navigation}>
				{links.map((link, id) => (
					<Fragment key={link.id}>
						<Link
							onClick={handleScroll}
							href={link.href}
							className={cl(
								styles.navigationLink,
								activeLinkId === link.href.replace(/.*\#/, '') && styles.navigationLinkActive
							)}
						>

							{link.title}
							{children}
						</Link>
						{id < links.length - 1 && (
							<span className={styles.navigationStar} />
						)}
					</Fragment>
				))}
			</nav>
		</>
	);
}