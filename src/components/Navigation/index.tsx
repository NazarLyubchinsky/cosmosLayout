import Link from 'next/link';
import cl from 'classnames';
import { Fragment, useCallback, useEffect, useRef, useState } from 'react';

import styles from './style.module.scss';

import { useTodoContext } from '@/src/context/useTodoContext';


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
}

const removeHash = (href: string): string => href.replace(/.*\#/, '');

export const Navigation: React.FC<NavigationProps> = () => {
	const elementOffsets = useRef<Record<string, HTMLElement>>({});

	const { activeLinkId, setActiveLinkId } = useTodoContext();
	const [centerIndex, setCenterIndex] = useState(1);


	const handleScroll = useCallback(() => {
		const scrollPosition = window.scrollY;

		const visibleSection = links.find((link) => {
			const targetId = removeHash(link.href);
			const targetElem = elementOffsets.current[targetId] || document.getElementById(targetId);
			elementOffsets.current[targetId] = targetElem;
			if (targetElem) {
				const offsetTop = targetElem.offsetTop - 1;
				const offsetBottom = offsetTop + targetElem.offsetHeight;

				return scrollPosition >= offsetTop && scrollPosition < offsetBottom;
			}
			return false;
		});

		const activeSection = visibleSection || links[0];

		if (activeSection && activeLinkId !== removeHash(activeSection.href)) {
			setActiveLinkId(removeHash(activeSection.href));
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

	const visibleLinks = links.slice(centerIndex - 1, centerIndex + 2);

	// const { aosRef } = useAOS();

	return (
		<>
			<nav className={styles.navigation}
				data-aos="fade-up">
				{visibleLinks.map((link, id) => (
					<Fragment key={link.id}>
						<Link
							href={link.href}
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
		</>
	);
};
