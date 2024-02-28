import Link from "next/link"

import styles from './style.module.scss';
import cl from 'classnames';
import React from "react";
import { CreateBlurredEllipsesIcon, CreateBlurredEllipsesIcon2 } from "@components/BlurredEllipsesIcon";
import { Button } from "@components/Button";
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


export const RoadMapArtMenuItem: React.FC<RoadMapArtMenuItemProps> =
	({
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

					<div className={cl(styles.artMenuCardMore, styles.artMenuCard)}>
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


