import Link from "next/link"

import styles from './style.module.scss';
import cl from 'classnames';
import React from "react";
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

const getTypeById = (id: number): { type: TypeArtButton; } => {
	switch (id) {
		case 1:
			return { type: 'Pink', };
		case 2:
			return { type: 'LightBlue', };
		case 3:
			return { type: 'LightBluePurple', };
		case 4:
			return { type: 'Blue', };
		default:
			return { type: 'Purple', };
	}
};


export const RoadMapArtMenuItem: React.FC<RoadMapArtMenuItemProps> = ({
	id,
	href,
	title,
	isOpened,
	onClick,
	subtitle,
	color,
}) => {
	const typeAndColor = getTypeById(id);

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
					<button
						className={cl(styles.cardMoreButton, isOpened && styles.cardMoreButtonActive)}
					>
						{isOpened && <CreateBlurredEllipsesIcon color={color} className="ellipsesIcon" />}
						{!isOpened && (
							<CreateBlurredEllipsesIcon2
								className="ellipsesIcon2"
								type={typeAndColor.type}
								color={color}
								id={id}
							/>
						)}
						<div className={cl(styles.artMenuItemContent, isOpened && styles.artMenuItemContentActive)}>
							<h3 className={styles.artMenuItemContentTop}>{'0' + id}</h3>
							<h4 className={styles.artMenuItemContentCenter}>{title}</h4>
							<h5 className={styles.artMenuItemContentBottom}>{subtitle}</h5>
						</div>
						<ButtonAngleLeft isOpened={isOpened} />
						<ButtonAngleRight isOpened={isOpened} />
					</button>
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

export const CreateBlurredEllipsesIcon: React.FC<{ className?: string; color: string; }> = ({ className, color }) => {
	const clsName = className;
	return (
		<svg className={`${clsName ? styles[clsName] : ''}`} xmlns="http://www.w3.org/2000/svg" width="274" height="176" viewBox="0 0 274 176" fill="none">
			<g filter="url(#filter0_f_0_475)">
				<ellipse cx="163" cy="16.0002" rx="78" ry="57" fill={color} />
			</g>
			<g filter="url(#filter1_f_0_475)">
				<ellipse cx="92.0395" cy="58.0804" rx="92.0395" ry="58.0804" transform="matrix(-0.921631 -0.388068 0.435532 -0.900173 278.093 111)" fill={color} />
			</g>
			<defs>
				<filter id="filter0_f_0_475" x="-15.4831" y="-141.483" width="356.966" height="314.966" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur stdDeviation="50.2416" result="effect1_foregroundBlur_0_475" />
				</filter>
				<filter id="filter1_f_0_475" x="26.5257" y="-143.82" width="384.073" height="333.64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur stdDeviation="51.7478" result="effect1_foregroundBlur_0_475" />
				</filter>
			</defs>
		</svg>

	)
}

export const CreateBlurredEllipsesIcon2: React.FC<{ className?: string; type: TypeArtButton; id: number, color: string; }> = ({ className, type, id, color }) => {
	const clsName = className;

	return (
		<svg className={`${clsName ? styles[clsName] : ''}`}
			xmlns="http://www.w3.org/2000/svg" width="375" height="162" viewBox="0 0 375 162" fill="none">
			<g filter="url(#filter0_f_0_486)">
				<ellipse
					className={cl(
						`artButton${getTypeById(id)}`
					)}
					cx={type === "LightBlue" || type === "Blue" ? '-50' : '80.621'}
					cy="63.1756"
					rx="79.8985"
					ry="63.1756"
					transform="matrix(1 0 0 -1 57 231.813)"
					fill={color}
				/>
			</g>
			<g filter="url(#filter1_f_0_486)">
				<ellipse
					className={cl(
						`artButton${getTypeById(id)}`
					)}
					cx={type === "LightBlue" ? '200' : '95.621'}
					cy="63.1756" rx="95.621"
					ry="63.1756"
					transform="matrix(-0.911457 0.411395 0.411395 0.911457 254.949 64)"
					fill={color}
				/>
			</g>
			<defs>
				<filter id="filter0_f_0_486" x="-73.7222" y="-25.2598" width="421.241" height="387.795" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur stdDeviation="65.3611" result="effect1_foregroundBlur_0_486" />
				</filter>
				<filter id="filter1_f_0_486" x="-31.8272" y="-43.4644" width="451.224" height="408.768" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur stdDeviation="67.3206" result="effect1_foregroundBlur_0_486" />
				</filter>
			</defs>
		</svg>
	)
}


