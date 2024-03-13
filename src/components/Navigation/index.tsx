// "use client"

// import Link from 'next/link';
// import cl from 'classnames';
// import { Fragment, useCallback, useEffect, useRef, useState } from 'react';

// import styles from './style.module.scss';

// import { useTodoContext } from '@/src/context/useTodoContext';
// import { linksNavigations } from '@/src/utils/constants';



// interface NavigationProps {
// }

// const removeHash = (href: string): string => href.replace(/.*\#/, '');

// export const Navigation: React.FC<NavigationProps> = () => {
// 	const elementOffsets = useRef<Record<string, HTMLElement>>({});

// 	const { activeLinkId, setActiveLinkId } = useTodoContext();
// 	const [centerIndex, setCenterIndex] = useState(1);


// 	const handleScroll = useCallback((e: any) => {
// 		e.preventDefault();
// 		const scrollPosition = window.scrollY;

// 		const visibleSection = linksNavigations.find((link) => {
// 			const targetId = removeHash(link.href);
// 			const targetElem = elementOffsets.current[targetId] || document.getElementById(targetId);
// 			elementOffsets.current[targetId] = targetElem;
// 			if (targetElem) {
// 				const offsetTop = targetElem.offsetTop - 1;
// 				const offsetBottom = offsetTop + targetElem.offsetHeight;

// 				return scrollPosition >= offsetTop && scrollPosition < offsetBottom;
// 			}
// 			return false;
// 		});

// 		const activeSection = visibleSection || linksNavigations[0];

// 		if (activeSection && activeLinkId !== removeHash(activeSection.href)) {
// 			setActiveLinkId(removeHash(activeSection.href));
// 			if (linksNavigations.indexOf(activeSection) > 0 && linksNavigations.indexOf(activeSection) < linksNavigations.length - 1) {
// 				setCenterIndex(linksNavigations.indexOf(activeSection));
// 			}
// 		}
// 	}, [activeLinkId, setActiveLinkId]);

// 	useEffect(() => {
// 		window.addEventListener('scroll', handleScroll);
// 		return () => {
// 			window.removeEventListener('scroll', handleScroll);
// 		};
// 	}, [handleScroll]);

// 	const visibleLinks = linksNavigations.slice(centerIndex - 1, centerIndex + 2);


// 	return (
// 		<>
// 			<nav className={styles.navigation}
// 				data-aos="fade-up">
// 				{visibleLinks.map((link, id) => (
// 					<Fragment key={link.id}>
// 						<Link
// 							href={link.href}
// 							className={cl(
// 								styles.navigationLink,
// 								activeLinkId === removeHash(link.href) && styles.navigationLinkActive
// 							)}
// 						>
// 							{link.title}
// 						</Link>
// 						{id < visibleLinks.length - 1 && <span className={styles.navigationStar} />}
// 					</Fragment>
// 				))}
// 			</nav >
// 		</>
// 	);
// };



// "use client"

// import Link from 'next/link';
// import cl from 'classnames';
// import { Fragment, useCallback, useEffect, useRef, useState } from 'react';

// import styles from './style.module.scss';

// import { useTodoContext } from '@/src/context/useTodoContext';
// import { linksNavigations } from '@/src/utils/constants';



// interface NavigationProps {
// }

// const removeHash = (href: string): string => href.replace(/.*\#/, '');

// export const Navigation: React.FC<NavigationProps> = () => {
// 	const elementOffsets = useRef<Record<string, HTMLElement>>({});

// 	const { activeLinkId, setActiveLinkId } = useTodoContext();
// 	const [centerIndex, setCenterIndex] = useState(1);


// 	const handleScroll = useCallback(() => {
// 		const scrollPosition = window.scrollY;

// 		const visibleSection = linksNavigations.find((link) => {
// 			const targetId = removeHash(link.href);
// 			const targetElem = elementOffsets.current[targetId] || document.getElementById(targetId);
// 			elementOffsets.current[targetId] = targetElem;
// 			if (targetElem) {
// 				const offsetTop = targetElem.offsetTop - 1;
// 				const offsetBottom = offsetTop + targetElem.offsetHeight;

// 				return scrollPosition >= offsetTop && scrollPosition < offsetBottom;
// 			}
// 			return false;
// 		});

// 		const activeSection = visibleSection || linksNavigations[0];

// 		if (activeSection && activeLinkId !== removeHash(activeSection.href)) {
// 			setActiveLinkId(removeHash(activeSection.href));
// 			if (linksNavigations.indexOf(activeSection) > 0 && linksNavigations.indexOf(activeSection) < linksNavigations.length - 1) {
// 				setCenterIndex(linksNavigations.indexOf(activeSection));
// 			}
// 		}
// 	}, [activeLinkId, setActiveLinkId]);

// 	useEffect(() => {
// 		window.addEventListener('scroll', handleScroll);
// 		return () => {
// 			window.removeEventListener('scroll', handleScroll);
// 		};
// 	}, [handleScroll]);

// 	const visibleLinks = linksNavigations.slice(centerIndex - 1, centerIndex + 2);

// 	const handleScrollToSection = (href: string) => {
// 		const targetId = removeHash(href);
// 		const targetElem = elementOffsets.current[targetId] || document.getElementById(targetId);
// 		elementOffsets.current[targetId] = targetElem;

// 		if (targetElem) {
// 			targetElem.scrollIntoView({ behavior: 'smooth' });
// 			setActiveLinkId(removeHash(href));
// 			// Additional logic to update centerIndex if needed
// 		}
// 	};

// 	return (
// 		<>
// 			<nav className={styles.navigation}
// 				data-aos="fade-up">
// 				{visibleLinks.map((link, id) => (
// 					<Fragment key={link.id}>
// 						<button
// 							onClick={() => handleScrollToSection(link.href)}
// 							className={cl(
// 								styles.navigationLink,
// 								activeLinkId === removeHash(link.href) && styles.navigationLinkActive
// 							)}
// 						>
// 							{link.title}
// 						</button>
// 						{id < visibleLinks.length - 1 && <span className={styles.navigationStar} />}
// 					</Fragment>
// 				))}
// 			</nav >
// 		</>
// 	);
// };



//// 3


"use client"

import { Fragment, useCallback, useEffect, useRef, useState } from 'react';

import styles from './style.module.scss';

import { useTodoContext } from '@/src/context/useTodoContext';
import { linksNavigations } from '@/src/utils/constants';
import { NavigationLinkList } from './NavigationLinkList';


interface NavigationProps {
}

const removeHash = (href: string): string => href.replace(/.*\#/, '');

export const Navigation: React.FC<NavigationProps> = () => {
	const elementOffsets = useRef<Record<string, HTMLElement>>({});

	const { activeLinkId, setActiveLinkId } = useTodoContext();
	const [centerIndex, setCenterIndex] = useState(1);


	const handleScroll = useCallback(() => {
		const scrollPosition = window.scrollY;

		const visibleSection = linksNavigations.find((link) => {
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

		const activeSection = visibleSection || linksNavigations[0];

		if (activeSection && activeLinkId !== removeHash(activeSection.href)) {
			setActiveLinkId(removeHash(activeSection.href));
			if (linksNavigations.indexOf(activeSection) > 0 && linksNavigations.indexOf(activeSection) < linksNavigations.length - 1) {
				setCenterIndex(linksNavigations.indexOf(activeSection));
			}
		}
	}, [activeLinkId, setActiveLinkId]);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [handleScroll]);


	const visibleLinks = linksNavigations.slice(centerIndex - 1, centerIndex + 2);

	return (
		<nav className={styles.navigation}
			data-aos="fade-up">
			{visibleLinks.map((link, id) => {
				console.log(link)
				return (
					<Fragment key={link.id}>
						<NavigationLinkList link={link} activeLinkId={activeLinkId} removeHash={removeHash} visibleLinks={visibleLinks} id={id} />
					</Fragment>
				)
			})}

		</nav >
	);
};
