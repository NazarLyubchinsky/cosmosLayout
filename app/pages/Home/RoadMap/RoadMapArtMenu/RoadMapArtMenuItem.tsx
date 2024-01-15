import Link from "next/link"

import styles from './style.module.scss';
import cl from 'classnames';
import React from "react";
import { Button } from "@/app/components/Button";
import { CreateBlurredEllipsesIcon, CreateBlurredEllipsesIcon2 } from "@/app/components/BlurredEllipsesIcon";
export type TypeArtButton = 'Pink' | 'LightBlue' | 'LightBluePurple' | 'Blue' | 'Purple';

interface RoadMapArtMenuItemProps {
	id: number;
	href: string;
	title: string;
	isOpened: boolean;
	onClick: (event: React.MouseEvent) => void;
	subtitle: string;
	color: string;
	openedId: number;
}


export const RoadMapArtMenuItem: React.FC<RoadMapArtMenuItemProps> = ({
	id,
	href,
	title,
	isOpened,
	onClick,
	subtitle,
	color,
}) => {

	return (
		<>
			<Link
				href={href}
				onClick={onClick}
				className={cl(
					styles.artMenuItem,
					isOpened && styles.artMenuItemActive
				)}
			>
				<span className={styles.artMenuDecorator} />

				<div className={cl(styles.cardMore, styles.artMenuCard)}>
					<Button
						kind="ButtonRotate"
						isOpened={isOpened}
					>
						{isOpened && <CreateBlurredEllipsesIcon color={color} className="ellipsesIcon" />}
						{!isOpened && (
							<CreateBlurredEllipsesIcon2
								className="ellipsesIcon2"
								color={color}
								id={id}
							/>
						)}
						<ButtonAngleLeft isOpened={isOpened} />
						<ButtonAngleRight isOpened={isOpened} />
						<div className={cl(styles.artMenuItemContent, isOpened && styles.artMenuItemContentActive)}>
							<h3 className={styles.artMenuItemContentTop}>{'0' + id}</h3>
							<h4 className={styles.artMenuItemContentCenter}>{title}</h4>
							<h5 className={styles.artMenuItemContentBottom}>{subtitle}</h5>
						</div>

					</Button>
				</div>
			</Link>
		</>
	);
};

export const ButtonAngleLeft: React.FC<{ isOpened: boolean }> = ({ isOpened }) => {
	return (
		<svg className={styles.buttonAngleLeft} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
			<path d="M0.958452 0.914853L17.4258 17.3822L17.4258 0.914851L0.958452 0.914853Z" fill={isOpened ? "black" : 'white'} />
		</svg>
	)
}
export const ButtonAngleRight: React.FC<{ isOpened: boolean }> = ({ isOpened }) => {
	return (
		<svg className={styles.buttonAngleRight} xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
			<path d="M17.0415 16.4675L0.574217 0.000146866L0.574219 16.4675L17.0415 16.4675Z" fill={isOpened ? "black" : 'white'} />
		</svg>
	)
}


