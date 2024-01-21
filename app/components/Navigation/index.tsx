import Link from 'next/link';
import cl from 'classnames';
import { Fragment, ReactNode, useCallback, useContext, useEffect, useState } from 'react';
import styles from './style.module.scss';
import { CustomContext } from '@/app/context';

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
	},
	{
		id: 4,
		title: 'Collaborations',
		href: '#collaborations',
		active: false,
	},
	{
		id: 5,
		title: 'FAQ',
		href: '#faq',
		active: false,
	},
];

interface NavigationProps {
	children?: ReactNode,
}

export const Navigation: React.FC<NavigationProps> = ({ children }) => {
	const { activeLinkId, setActiveLinkId } = useContext(CustomContext);
	const [centerIndex, setCenterIndex] = useState(1);

	const visibleLinks = links.slice(centerIndex - 1, centerIndex + 2);

	const handleScroll = useCallback(() => {
		const scrollPosition = window.scrollY;

		const visibleSection = links.find((link) => {
			const targetElem = document.getElementById(link.href.replace(/.*\#/, ''));
			if (targetElem) {
				const offsetTop = targetElem.offsetTop - 1;
				const offsetBottom = offsetTop + targetElem.offsetHeight;

				return scrollPosition >= offsetTop && scrollPosition < offsetBottom;
			}
			return false;
		});

		const activeSection = visibleSection || links[0];

		if (activeSection && activeLinkId !== activeSection.href.replace(/.*\#/, '')) {
			setActiveLinkId(activeSection.href.replace(/.*\#/, ''));
			if (links.indexOf(activeSection) > 0 && links.indexOf(activeSection) < links.length - 1) {
				setCenterIndex(links.indexOf(activeSection));
			}
		}
	}, [activeLinkId, setActiveLinkId]);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [handleScroll]);
	return (
		<>
			<nav className={styles.navigation}>
				{visibleLinks.map((link, id) => (
					<Fragment key={link.id}>
						<Link
							href={link.href}
							className={cl(
								styles.navigationLink,
								activeLinkId === link.href.replace(/.*\#/, '') && styles.navigationLinkActive
							)}
						>
							{link.title}
							{children}
						</Link>
						{id < visibleLinks.length - 1 && <span className={styles.navigationStar} />}
					</Fragment>
				))}
			</nav >
		</>
	);
};		
