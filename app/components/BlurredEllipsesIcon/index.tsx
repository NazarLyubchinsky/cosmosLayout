
import styles from './styles.module.scss';

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
				<filter id="filter0_f_0_475" x="-15.4831" y="-141.483" width="356.966" height="314.966" filterUnits="userSpaceOnUse" >
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur stdDeviation="50.2416" result="effect1_foregroundBlur_0_475" />
				</filter>
				<filter id="filter1_f_0_475" x="26.5257" y="-143.82" width="384.073" height="333.64" filterUnits="userSpaceOnUse" >
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur stdDeviation="51.7478" result="effect1_foregroundBlur_0_475" />
				</filter>
			</defs>
		</svg>

	)
}



export const CreateBlurredEllipsesIcon2: React.FC<{ className?: string; id: number, color: string; }> = ({ className, id, color }) => {
	const clsName = className;

	return (
		<svg className={`${clsName ? styles[clsName] : ''}`}
			xmlns="http://www.w3.org/2000/svg" width="375" height="162" viewBox="0 0 375 162" fill="none">
			<g filter="url(#filter0_f_0_486)">
				<ellipse
					cx={id % 2 === 0 ? '-50' : '80.621'}
					cy="63.1756"
					rx="79.8985"
					ry="63.1756"
					transform="matrix(1 0 0 -1 57 231.813)"
					fill={color}
				/>
			</g>
			<g filter="url(#filter1_f_0_486)">
				<ellipse
					cx={id % 2 === 0 ? '200' : '25'}
					cy="63.1756" rx="95.621"
					ry="63.1756"
					transform="matrix(-0.911457 0.411395 0.411395 0.911457 254.949 64)"
					fill={color}
				/>
			</g>
			<defs>
				<filter id="filter0_f_0_486" x="-73.7222" y="-25.2598" width="421.241" height="387.795" filterUnits="userSpaceOnUse" >
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur stdDeviation="65.3611" result="effect1_foregroundBlur_0_486" />
				</filter>
				<filter id="filter1_f_0_486" x="-31.8272" y="-43.4644" width="451.224" height="408.768" filterUnits="userSpaceOnUse" >
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur stdDeviation="67.3206" result="effect1_foregroundBlur_0_486" />
				</filter>
			</defs>
		</svg>
	)
}


