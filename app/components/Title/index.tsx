import Link from 'next/link';
import React, { ReactNode } from 'react';
import cl from 'classnames';

import styles from './style.module.scss';
import useAOS from '@/app/hooks/useAos';

interface TitleProps {
	size?: 'Medium' | 'Large' | 'Small',
	children: ReactNode,
}

export const Title = ({
	size = 'Medium',
	children,
}: TitleProps) => {
	// const { aosRef } = useAOS();

	return (
		<h2
		//  ref={aosRef}
		 data-aos="fade-right"
			className={cl(styles.title, styles[`title${size}`])}>
			{children}
		</h2>
	);
}