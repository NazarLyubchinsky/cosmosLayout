"use client"

import { Fragment, useCallback, useEffect } from 'react';

import styles from './style.module.scss';

import { useTodoContext } from '@/src/context/useTodoContext';
import { linksNavigations } from '@/src/utils/constants';
import { NavigationLinkList } from './NavigationLinkList';


interface NavigationProps {
}

export const Navigation: React.FC<NavigationProps> = () => {

	const { activeLinkId, setActiveLinkId, centerIndex, setCenterIndex } = useTodoContext();

	const handleScroll = useCallback(() => {
		const scrollPosition = window.scrollY;
		const visibleSection = linksNavigations.find((link) => {
			const targetId = link.href;
			const targetElem = document.getElementById(targetId);
			if (targetElem) {
				const offsetTop = targetElem.offsetTop - 1;
				const offsetBottom = offsetTop + targetElem.offsetHeight;

				return scrollPosition >= offsetTop && scrollPosition < offsetBottom;
			}
			return false;
		});
		if (visibleSection && activeLinkId !== visibleSection.href) {
			setActiveLinkId(visibleSection.href);

			if (linksNavigations.indexOf(visibleSection) >= 0 && linksNavigations.indexOf(visibleSection) < linksNavigations.length - 1) {
				setCenterIndex(linksNavigations.indexOf(visibleSection));
			}
		}

	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeLinkId, centerIndex]);


	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [handleScroll]);


	const startVisibleIndex = centerIndex === linksNavigations.length - 1 ? -3 : Math.max(centerIndex - 1, 0)
	const currentLinkIndex = centerIndex === 0 ? + 3 : centerIndex + 2
	const visibleNavigationLinks = linksNavigations.slice(startVisibleIndex, currentLinkIndex);


	return (
		<nav className={styles.navigation}
			data-aos="fade-up">
			{visibleNavigationLinks.map((link, id) => {
				return (
					<Fragment key={link.id} >
						<NavigationLinkList link={link} id={id} />
					</Fragment>
				)
			})}
		</nav >

	);
};




