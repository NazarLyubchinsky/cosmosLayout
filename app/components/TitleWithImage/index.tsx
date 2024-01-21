import { Title } from "../Title"
import styles from './styles.module.scss'
import { ReactNode } from 'react';


interface TitleWithImageProps {
	title: string,
	subtitle: string,
	svg?: ReactNode

}

interface ImagesSubtitleProps {
	children?: ReactNode
	subtitle: string
}

// ImagesSubtitle
export const ImagesSubtitle: React.FC<ImagesSubtitleProps> = ({
	subtitle,
	children
}) => {
	return (
		<div className={styles.subTitle} >
			<span className={styles.subTitleText}>{subtitle}</span>
			{children}
		</div >)
}

// TitleWithImage
export const TitleWithImage: React.FC<TitleWithImageProps> = ({
	subtitle,
	title,
	svg
}) => {
	const parts = title.split(" ");
	return (
		<>
			<ImagesSubtitle subtitle={subtitle}>
				<svg xmlns="http://www.w3.org/2000/svg" width="123" height="12" viewBox="0 0 123 12" fill="none">
					<path d="M122.5 11L112.5 5.5H75.5L66.5 1H57L50 5.5H25M0 5.5H17" stroke="url(#paint0_linear_0_543)" strokeWidth="1.5" />
					<defs>
						<linearGradient id="paint0_linear_0_543" x1="122.5" y1="6" x2="0" y2="6" gradientUnits="userSpaceOnUse">
							<stop stopColor="#FFB800" />
							<stop offset="0.70625" stopColor="#FFBAC3" />
						</linearGradient>
					</defs>
				</svg>
			</ImagesSubtitle>
			<Title size="Small">
				{
					svg ? (
						<div>
							<div className={styles.BlockSvg}>
								<span> {parts[0]} </span>
								{svg}
								<span>{parts[1]}</span>
							</div>
							<div>{" " + parts[2]}</div>
						</div>
					) : <span>{title}</span>
				}
			</Title>
		</>
	)
}
