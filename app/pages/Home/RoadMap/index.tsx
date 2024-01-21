import cl from 'classnames';
import styles from "../home.module.scss"


import { Title } from '@/app/components/Title';
import { RoadMapArtMenu } from './RoadMapArtMenu';
import { ImagesSubtitle } from '@/app/components/TitleWithImage';
interface ArtMenuProps {
	isActiveid: string
}
export const RoadMap
	: React.FC<ArtMenuProps>
	= ({ isActiveid }) => {
		return (
			<section className={cl(styles.section, styles.sectionRoadMap)} id={isActiveid}>
				<div className={styles.sectionRoadMapText}>
					<ImagesSubtitle subtitle='OUR WAY'>
						<svg xmlns="http://www.w3.org/2000/svg" width="160" height="12" viewBox="0 0 160 12" fill="none">
							<path d="M159.5 1L149.5 6.5H75.5L66.5 11H57L50 6.5H25M0 6.5H17" stroke="url(#paint0_linear_0_469)" strokeWidth="1.5" />
							<defs>
								<linearGradient id="paint0_linear_0_469" x1="159.5" y1="6" x2="0" y2="6" gradientUnits="userSpaceOnUse">
									<stop stopColor="#FFB800" />
									<stop offset="0.70625" stopColor="#FFBAC3" />
								</linearGradient>
							</defs>
						</svg>
					</ImagesSubtitle>

					<Title size="Small" >
						<span>ROAD</span>
						<svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
							<g clipPath="url(#clip0_0_729)">
								<path fillRule="evenodd" clipRule="evenodd" d="M19.3692 39L39 19.5L19.3692 -8.58091e-07L19.3692 19.24L0 -1.70474e-06L-1.70474e-06 39L19.3692 19.7599L19.3692 39Z" fill="white" />
							</g>
							<defs>
								<clipPath id="clip0_0_729">
									<rect width="39" height="39" fill="white" transform="translate(39) rotate(90)" />
								</clipPath>
							</defs>
						</svg>
						<span style={{ marginLeft: "13px" }}>MAP</span>
					</Title>
				</div>
				<RoadMapArtMenu />
			</section>
		);
	}