import cl from 'classnames';

import styles from "../home.module.scss"

import { ReactNode } from 'react';
import { Navigation } from '@components/Navigation';
import { Title } from '@components/Title';
import { ButtonList } from './ButtonList';
interface ArtMenuProps {
	children?: ReactNode
	isActiveid: string
}
export const Main = ({ children, isActiveid }: ArtMenuProps) => {
	return (
		<section className={cl(styles.section, styles.sectionMain)} id={isActiveid} >
			<Navigation />
			<div>
				<Title>
					From dust to&nbsp;dawn
				</Title>
				<ButtonList />
			</div>
			{children}
		</section >
	);
}