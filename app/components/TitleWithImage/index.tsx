import { Title } from "../Title"
import styles from './styles.module.scss'

interface TitleWithImageProps {
	title: string,
	subtitle: string,
}

export const TitleWithImage: React.FC<TitleWithImageProps> = ({
	subtitle,
	title
}) => {
	return (
		<>
			<div className={styles.subTitle} >
				<span className={styles.subTitleText}>{subtitle}</span>
				<svg xmlns="http://www.w3.org/2000/svg" width="123" height="12" viewBox="0 0 123 12" fill="none">
					<path d="M122.5 11L112.5 5.5H75.5L66.5 1H57L50 5.5H25M0 5.5H17" stroke="url(#paint0_linear_0_543)" stroke-width="1.5" />
					<defs>
						<linearGradient id="paint0_linear_0_543" x1="122.5" y1="6" x2="0" y2="6" gradientUnits="userSpaceOnUse">
							<stop stop-color="#FFB800" />
							<stop offset="0.70625" stop-color="#FFBAC3" />
						</linearGradient>
					</defs>
				</svg>
			</div >
			<Title size="Small">
				{title}
			</Title>
		</>
	)
}