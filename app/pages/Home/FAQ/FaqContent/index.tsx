

import { Button } from '@/src/components/Button'
import styles from './styles.module.scss'

interface FaqContentProps {

}

export const FaqContent = ({

}: FaqContentProps) => {
	return (
		<Button kind="ButtonRotate" className={styles.faqContent}>
			<div className={styles.faqContentLeft}>
				<div className={styles.faqContentLeftTop}>
					<p className={styles.title}>How many?</p>
					<span className={styles.subtitle}>Our genesis land NFT collection will comprise <br /> <b className={styles.subtitleBold}>5555 NFTs.</b> </span>
				</div>
				<div className={styles.faqContentLeftImages}>
					<svg xmlns="http://www.w3.org/2000/svg" width="5vw" height="25" viewBox="0 0 56 25" fill="none">
						<path d="M1.3335 21.3785L19.1562 3.55579V21.3785L36.979 3.55579V21.3785L54.8017 3.55579V21.3785" stroke="white" strokeWidth="2.28497" />
					</svg>

					<div className={styles.faqContentLeftImagesEllipse}>
						<svg xmlns="http://www.w3.org/2000/svg" width="2.3vw" height="28" viewBox="0 0 27 28" fill="none">
							<g clipPath="url(#clip0_0_700)">
								<path d="M13.5928 3.03465C13.5928 -4.12638 18.0674 6.02461 16.2807 9.12525C18.0706 6.02461 29.1007 4.82452 22.8978 8.40583C29.1007 4.82452 22.5469 13.7818 18.967 13.7818C22.5469 13.7818 29.1007 22.7342 22.8978 19.1577C29.1007 22.739 18.0706 21.5389 16.2807 18.4383C18.0706 21.5389 13.5928 31.6899 13.5928 24.5289C13.5928 31.6899 9.11652 21.5389 10.9048 18.4383C9.11493 21.5389 -1.91518 22.739 4.28767 19.1577C-1.91518 22.739 4.63869 13.7818 8.21999 13.7818C4.63869 13.7818 -1.91518 4.82926 4.28767 8.40583C-1.91518 4.82452 9.11493 6.02461 10.9048 9.12525C9.11652 6.02145 13.5928 -4.12638 13.5928 3.03465Z" fill="white" />
							</g>
							<defs>
								<clipPath id="clip0_0_700">
									<rect width="26.5056" height="26.5056" fill="white" transform="translate(0.399414 0.528717)" />
								</clipPath>
							</defs>
						</svg><svg xmlns="http://www.w3.org/2000/svg" width="2.3vw" height="28" viewBox="0 0 27 28" fill="none">
							<g clipPath="url(#clip0_0_700)">
								<path d="M13.5928 3.03465C13.5928 -4.12638 18.0674 6.02461 16.2807 9.12525C18.0706 6.02461 29.1007 4.82452 22.8978 8.40583C29.1007 4.82452 22.5469 13.7818 18.967 13.7818C22.5469 13.7818 29.1007 22.7342 22.8978 19.1577C29.1007 22.739 18.0706 21.5389 16.2807 18.4383C18.0706 21.5389 13.5928 31.6899 13.5928 24.5289C13.5928 31.6899 9.11652 21.5389 10.9048 18.4383C9.11493 21.5389 -1.91518 22.739 4.28767 19.1577C-1.91518 22.739 4.63869 13.7818 8.21999 13.7818C4.63869 13.7818 -1.91518 4.82926 4.28767 8.40583C-1.91518 4.82452 9.11493 6.02461 10.9048 9.12525C9.11652 6.02145 13.5928 -4.12638 13.5928 3.03465Z" fill="white" />
							</g>
							<defs>
								<clipPath id="clip0_0_700">
									<rect width="26.5056" height="26.5056" fill="white" transform="translate(0.399414 0.528717)" />
								</clipPath>
							</defs>
						</svg><svg xmlns="http://www.w3.org/2000/svg" width="2.3vw" height="28" viewBox="0 0 27 28" fill="none">
							<g clipPath="url(#clip0_0_700)">
								<path d="M13.5928 3.03465C13.5928 -4.12638 18.0674 6.02461 16.2807 9.12525C18.0706 6.02461 29.1007 4.82452 22.8978 8.40583C29.1007 4.82452 22.5469 13.7818 18.967 13.7818C22.5469 13.7818 29.1007 22.7342 22.8978 19.1577C29.1007 22.739 18.0706 21.5389 16.2807 18.4383C18.0706 21.5389 13.5928 31.6899 13.5928 24.5289C13.5928 31.6899 9.11652 21.5389 10.9048 18.4383C9.11493 21.5389 -1.91518 22.739 4.28767 19.1577C-1.91518 22.739 4.63869 13.7818 8.21999 13.7818C4.63869 13.7818 -1.91518 4.82926 4.28767 8.40583C-1.91518 4.82452 9.11493 6.02461 10.9048 9.12525C9.11652 6.02145 13.5928 -4.12638 13.5928 3.03465Z" fill="white" />
							</g>
							<defs>
								<clipPath id="clip0_0_700">
									<rect width="26.5056" height="26.5056" fill="white" transform="translate(0.399414 0.528717)" />
								</clipPath>
							</defs>
						</svg>
					</div>
					<div><svg xmlns="http://www.w3.org/2000/svg" width="7vw" height="20" viewBox="0 0 84 20" fill="none">
						<path d="M15.9427 0.315826C10.9525 0.315826 7.8291 3.93572 7.8291 9.69237C7.8291 15.449 10.9525 19.0563 15.9427 19.0563C20.9328 19.0563 24.0562 15.449 24.0562 9.69237C24.0562 3.93572 20.9328 0.315826 15.9427 0.315826ZM15.9427 2.4023C19.5419 2.4023 21.7991 5.21777 21.7991 9.69237C21.7991 14.1544 19.5419 16.9699 15.9427 16.9699C12.3434 16.9699 10.0863 14.1544 10.0863 9.69237C10.0863 5.21777 12.3434 2.4023 15.9427 2.4023Z" fill="white" />
						<path fillRule="evenodd" clipRule="evenodd" d="M3.10393 8.76439C4.29192 10.0656 6.08683 11.8829 8.15969 13.4825C10.735 15.4698 13.5421 16.9651 16.0497 16.9651C18.5312 16.9651 21.0586 15.494 23.3455 13.5213C25.209 11.9138 26.7785 10.0946 27.9045 8.76559C26.6692 7.53585 24.9316 6.0787 23.0017 4.85997C20.6578 3.37979 18.1808 2.34753 16.0497 2.34753C13.8973 2.34753 11.1383 3.39563 8.5049 4.88756C6.34583 6.11079 4.39941 7.55861 3.10393 8.76439ZM7.39636 2.93091C10.129 1.38271 13.3045 0.0986633 16.0497 0.0986633C18.816 0.0986633 21.7322 1.39855 24.2025 2.9585C26.6982 4.53453 28.8928 6.47445 30.2488 7.96171L30.9177 8.69532L30.2726 9.44993C30.1424 9.60226 29.9994 9.7715 29.8443 9.95502C28.7144 11.292 26.9441 13.3871 24.8144 15.2241C22.4183 17.291 19.3652 19.214 16.0497 19.214C12.7602 19.214 9.44538 17.3152 6.7858 15.2629C4.08487 13.1786 1.85563 10.7742 0.70908 9.45781L0.0456543 8.69609L0.732153 7.95511C2.14147 6.43395 4.64003 4.49251 7.39636 2.93091Z" fill="white" />
						<path d="M39.9707 15.8574L41.2548 14.6037L36.4009 9.88807H50.3147V8.11684H36.4009L41.2548 3.40122L39.9707 2.14755L32.949 9.00245L39.9707 15.8574Z" fill="white" />
						<path d="M68.262 0.315826C63.2719 0.315826 60.1484 3.93572 60.1484 9.69237C60.1484 15.449 63.2719 19.0563 68.262 19.0563C73.2522 19.0563 76.3756 15.449 76.3756 9.69237C76.3756 3.93572 73.2522 0.315826 68.262 0.315826ZM68.262 2.4023C71.8613 2.4023 74.1184 5.21777 74.1184 9.69237C74.1184 14.1544 71.8613 16.9699 68.262 16.9699C64.6628 16.9699 62.4056 14.1544 62.4056 9.69237C62.4056 5.21777 64.6628 2.4023 68.262 2.4023Z" fill="white" />
						<path fillRule="evenodd" clipRule="evenodd" d="M55.4233 8.76439C56.6113 10.0656 58.4062 11.8829 60.479 13.4825C63.0543 15.4698 65.8614 16.9651 68.369 16.9651C70.8505 16.9651 73.3779 15.494 75.6649 13.5213C77.5283 11.9138 79.0978 10.0946 80.2238 8.76559C78.9885 7.53585 77.251 6.0787 75.321 4.85997C72.9771 3.37979 70.5001 2.34753 68.369 2.34753C66.2166 2.34753 63.4576 3.39563 60.8242 4.88756C58.6652 6.11079 56.7187 7.55861 55.4233 8.76439ZM59.7157 2.93091C62.4484 1.38271 65.6238 0.0986633 68.369 0.0986633C71.1354 0.0986633 74.0515 1.39855 76.5218 2.9585C79.0175 4.53453 81.2121 6.47445 82.5681 7.96171L83.237 8.69532L82.5919 9.44993C82.4617 9.60226 82.3187 9.7715 82.1636 9.95502C81.0338 11.292 79.2634 13.3871 77.1337 15.2241C74.7376 17.291 71.6845 19.214 68.369 19.214C65.0795 19.214 61.7647 17.3152 59.1051 15.2629C56.4042 13.1786 54.175 10.7742 53.0284 9.45781L52.365 8.69609L53.0515 7.95511C54.4608 6.43395 56.9594 4.49251 59.7157 2.93091Z" fill="white" />
					</svg></div>
				</div>
				<div className={styles.faqContentLeftCenter}>
					<h5 className={styles.title}>How DO I Get Dusklist?</h5>
					<p className={styles.subtitle}>Get engaged and active with the community. The earlier you are and more sGet engaged and active with the community. The earlier you are and more support you bring, the higher your chances.upport you bring, the higher your chances.</p>
				</div>
				<div className={styles.faqContentLeftBottom}>
					<h5 className={styles.title}>HOW MUCH?</h5>
					<p className={styles.subTitle}>Each genesis land NFT will be priced at <b className={styles.subTitleBold}>0.12eth + gas fees.</b></p>
				</div>
			</div>
			<div className={styles.faqContentCenter}>
				<div className={styles.faqContentCenterTop}>
					<p className={styles.title}>How many?</p>
					<span className={styles.subtitle}>Our genesis land NFT collection will comprise </span>
				</div>
				<div className={styles.faqContentCenterImages}>
					<svg className={styles.faqContentCenterImagesEllipse} xmlns="http://www.w3.org/2000/svg" width="4vw" height="4vw" viewBox="0 0 61 60" fill="none">
						<g clipPath="url(#clip0_0_694)">
							<path fillRule="evenodd" clipRule="evenodd" d="M31.5776 0C32.2338 0 32.7658 0.531967 32.7658 1.18818V12.6764C32.7658 13.9824 34.5665 14.3324 35.0557 13.1215L39.359 2.4698C39.605 1.86137 40.2974 1.56742 40.906 1.81324L42.6372 2.51269C43.2456 2.75851 43.5397 3.45102 43.2937 4.05945L38.7058 15.4151C38.2208 16.6152 39.7321 17.6157 40.6476 16.7004L49.3077 8.0401C49.772 7.57609 50.5241 7.57609 50.9881 8.0401L52.3084 9.36038C52.7724 9.8244 52.7724 10.5767 52.3084 11.0407L44.5315 18.8177C43.6032 19.746 44.6444 21.2723 45.8474 20.7466L55.9256 16.3433C56.5271 16.0806 57.2275 16.3551 57.4901 16.9564L58.2378 18.6674C58.5004 19.2687 58.2259 19.9692 57.6247 20.2319L46.0114 25.3058C44.8315 25.8213 45.1996 27.5828 46.4869 27.5828H59.1604C59.8166 27.5828 60.3486 28.1148 60.3486 28.771V30.6382C60.3486 31.2943 59.8166 31.8264 59.1604 31.8264H46.4872C45.1995 31.8264 44.8318 33.5878 46.0114 34.1032L57.6247 39.1773C58.2259 39.4399 58.5004 40.1404 58.2378 40.7416L57.4901 42.4526C57.2275 43.0541 56.5271 43.3286 55.9256 43.0657L45.8474 38.6626C44.6444 38.1368 43.6032 39.663 44.5315 40.5916L52.3084 48.3682C52.7724 48.8325 52.7724 49.5846 52.3084 50.0486L50.9881 51.369C50.5241 51.833 49.772 51.833 49.3077 51.369L40.6476 42.7086C39.7321 41.7934 38.2208 42.7939 38.7058 43.9939L43.2937 55.3497C43.5397 55.958 43.2456 56.6505 42.6372 56.8964L40.906 57.596C40.2974 57.8416 39.605 57.5478 39.359 56.9392L35.0557 46.2877C34.5665 45.0767 32.7658 45.4269 32.7658 46.7327V58.2209C32.7658 58.8771 32.2338 59.4091 31.5776 59.4091H29.7104C29.0542 59.4091 28.5222 58.8771 28.5222 58.2209V46.7327C28.5222 45.4269 26.7216 45.0767 26.2324 46.2877L21.9288 56.9392C21.683 57.5478 20.9905 57.8416 20.3821 57.596L18.6509 56.8964C18.0424 56.6505 17.7485 55.958 17.9943 55.3497L22.5823 43.9939C23.0672 42.7939 21.5558 41.7934 20.6405 42.7086L11.9802 51.369C11.5162 51.833 10.7639 51.833 10.2999 51.369L8.97959 50.0486C8.51557 49.5846 8.51557 48.8325 8.97959 48.3682L16.7565 40.5913C17.6849 39.663 16.6438 38.1368 15.4406 38.6626L5.36231 43.0657C4.761 43.3286 4.06054 43.0541 3.79782 42.4526L3.05028 40.7416C2.78756 40.1404 3.06205 39.4399 3.66337 39.1773L15.2766 34.1032C16.4563 33.5878 16.0883 31.8264 14.8008 31.8264H2.12764C1.47142 31.8264 0.939453 31.2943 0.939453 30.6382V28.771C0.939453 28.1148 1.47142 27.5828 2.12764 27.5828H14.8009C16.0884 27.5828 16.4564 25.8213 15.2766 25.3058L3.66336 20.2319C3.06204 19.9692 2.78755 19.2687 3.05027 18.6674L3.79781 16.9564C4.06054 16.3551 4.76097 16.0806 5.36231 16.3433L15.4406 20.7466C16.6438 21.2723 17.6849 19.746 16.7565 18.8177L8.97959 11.0407C8.51557 10.5767 8.51557 9.8244 8.97959 9.36038L10.2998 8.04013C10.7639 7.57612 11.5162 7.57612 11.9802 8.04013L20.6405 16.7004C21.5558 17.6157 23.0672 16.6153 22.5823 15.4152L17.9943 4.05945C17.7485 3.45102 18.0425 2.75851 18.6509 2.51269L20.3821 1.81324C20.9905 1.56742 21.683 1.86137 21.9288 2.4698L26.2324 13.1215C26.7216 14.3324 28.5222 13.9824 28.5222 12.6764V1.18818C28.5222 0.531967 29.0542 0 29.7104 0H31.5776ZM30.644 42.435C37.6748 42.435 43.3745 36.7353 43.3745 29.7046C43.3745 22.6737 37.6748 16.974 30.644 16.974C23.6132 16.974 17.9135 22.6737 17.9135 29.7046C17.9135 36.7353 23.6132 42.435 30.644 42.435Z" fill="white" />
						</g>
						<defs>
							<clipPath id="clip0_0_694">
								<rect width="59.4091" height="59.4091" fill="white" transform="translate(0.939453)" />
							</clipPath>
						</defs>
					</svg>

					<div className={styles.faqContentCenterImagesEllipse}>
						<svg xmlns="http://www.w3.org/2000/svg" width="3vw" height="37" viewBox="0 0 37 37" fill="none">
							<g clipPath="url(#clip0_0_695)">
								<path fillRule="evenodd" clipRule="evenodd" d="M0.435091 18.585L18.2578 36.5273L36.0806 18.585L18.4954 18.585L36.0806 0.881866L0.435092 0.881863L18.0203 18.585L0.435091 18.585Z" fill="white" />
							</g>
							<defs>
								<clipPath id="clip0_0_695">
									<rect width="35.6455" height="35.6455" fill="white" transform="translate(36.0806 36.5273) rotate(-180)" />
								</clipPath>
							</defs>
						</svg>
						<svg xmlns="http://www.w3.org/2000/svg" width="3vw" height="37" viewBox="0 0 37 37" fill="none">
							<g clipPath="url(#clip0_0_698)">
								<path fillRule="evenodd" clipRule="evenodd" d="M22.2638 0.881836H15.1347V10.099L8.61715 3.58148L3.57611 8.6225L10.0936 15.14H0.876465V22.2691H10.0936L3.57611 28.7865L8.61715 33.8277L15.1347 27.3101V36.5273H22.2638V27.3101L28.7813 33.8277L33.8223 28.7867L27.3047 22.2691H36.5219V15.14H27.3047L33.8223 8.6225L28.7813 3.58146L22.2638 10.099V0.881836Z" fill="white" />
							</g>
							<defs>
								<clipPath id="clip0_0_698">
									<rect width="35.6455" height="35.6455" fill="white" transform="translate(0.876465 0.881836)" />
								</clipPath>
							</defs>
						</svg>
						<svg xmlns="http://www.w3.org/2000/svg" width="3vw" height="36" viewBox="0 0 35 36" fill="none">
							<g clipPath="url(#clip0_0_696)">
								<path fillRule="evenodd" clipRule="evenodd" d="M17.4809 35.5274L34.9631 18.1616L17.4809 0.795898L17.4809 17.9301L0.231644 0.795897L0.231642 35.5274L17.4809 18.3931L17.4809 35.5274Z" fill="white" />
							</g>
							<defs>
								<clipPath id="clip0_0_696">
									<rect width="34.7315" height="34.7315" fill="white" transform="translate(34.9631 0.795898) rotate(90)" />
								</clipPath>
							</defs>
						</svg>
						<svg xmlns="http://www.w3.org/2000/svg" width="3vw" height="36" viewBox="0 0 36 36" fill="none">
							<g clipPath="url(#clip0_0_697)">
								<path fillRule="evenodd" clipRule="evenodd" d="M35.4046 18.2782L18.0388 0.795901L0.673093 18.2782L17.8073 18.2782L0.67309 35.5274L35.4046 35.5274L18.2703 18.2782L35.4046 18.2782Z" fill="white" />
							</g>
							<defs>
								<clipPath id="clip0_0_697">
									<rect width="34.7315" height="34.7315" fill="white" transform="translate(0.673096 0.795898)" />
								</clipPath>
							</defs>
						</svg>

					</div>

				</div>
				<div className={styles.faqContentCenterCenter}>
					<h5 className={styles.title}>WHEN mint?</h5>
					<p className={styles.subtitle}>We are targeting a release in mid May.</p>
				</div>
				<div className={styles.faqContentCenterBottom}>
					<h5 className={styles.title}>Maximum mintable?</h5>
					<p className={styles.subTitle}>For Dusklist:<b className={styles.subTitleBold}>1 per wallet.</b>
						For public sale: <b className={styles.subTitleBold}>2 per transaction.</b></p>
				</div>

			</div>
			<div className={styles.faqContentRight}>

				<div className={styles.faqContentRightTop}>
					<p className={styles.title}>Which blockchain?</p>
					<span className={styles.subtitle}>Dusktopia will be built on the <br /> <b className={styles.subtitleBold}>Ethereum blockchain.</b> </span>
				</div>
				<div className={styles.faqContentRightCenter}>
					<h5 className={styles.title}>What is
						the utility?</h5>
					<p className={styles.subtitle}>Owning a genesis land NFT sets you up for the rest of our ecosystem. The land collection is the foundation of Dusktopia - holders will be rewarded in the short term through the staking mechanism. In the long term, they will be able to build on that
						genesis land with various properties and avatars we will be releasing.</p>
				</div>
				<div className={styles.faqContentRightBottom}>
					<h5 className={styles.title}>Future mints?</h5>
					<p className={styles.subTitle}>Immediately after mint, we are planning for a limited secondary land release for holders, claimable with $DAWN. Subsequently, we will release a
						Properties collection, as well as PFP avatars which will serve as your in-game role.</p>
				</div>

			</div>
		</Button >




	)
}
