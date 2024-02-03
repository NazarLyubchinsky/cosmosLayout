import Link from 'next/link';
import React, { ReactNode } from 'react';
import cl from 'classnames';

import styles from './style.module.scss';

interface TitleProps {
	size?: 'Medium' | 'Large' | 'Small',
	children: ReactNode,
}

export const Title = ({
	size = 'Medium',
	children,
}: TitleProps) => {
	return (
		<h2 className={cl(styles.title, styles[`title${size}`])}>
			{children}
		</h2>
	);
}