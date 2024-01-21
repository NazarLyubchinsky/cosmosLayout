import { TitleWithImage } from "@/app/components/TitleWithImage"
import styles from "../home.module.scss"
import { FaqContent } from "./FaqContent"

interface FaqProps {
	isActiveid: string

}

export const Faq: React.FC<FaqProps> = ({
	isActiveid
}) => {
	return (
		<section className={styles.sectionFaq} id={isActiveid}>
			<TitleWithImage
				svg={<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
					<g clipPath="url(#clip0_0_620)">
						<path fillRule="evenodd" clipRule="evenodd" d="M30 1.12C30 0.501441 29.4986 0 28.88 0H27.12C26.5014 0 26 0.501441 26 1.12V11.949C26 13.18 24.3027 13.5099 23.8416 12.3685L19.7849 2.32808C19.5532 1.75456 18.9004 1.47747 18.327 1.70919L16.6951 2.3685C16.1216 2.60021 15.8445 3.25298 16.0762 3.82651L20.4009 14.5306C20.858 15.6618 19.4333 16.6048 18.5705 15.7421L10.4072 7.57876C9.96979 7.14137 9.26064 7.14137 8.82325 7.57876L7.57876 8.82325C7.14137 9.26064 7.14137 9.96979 7.57876 10.4072L14.9094 17.7378C15.7845 18.6129 14.8031 20.0516 13.669 19.5561L4.16906 15.4055C3.60223 15.1578 2.94199 15.4166 2.69433 15.9834L1.98969 17.5962C1.74204 18.163 2.00078 18.8233 2.5676 19.0709L13.5145 23.8537C14.6265 24.3396 14.2796 26 13.066 26H1.12C0.501441 26 0 26.5014 0 27.12V28.88C0 29.4986 0.501441 30 1.12 30H13.066C14.2796 30 14.6265 31.6604 13.5144 32.1462L2.56762 36.9292C2.0008 37.1767 1.74206 37.837 1.98971 38.4037L2.69435 40.0165C2.94199 40.5835 3.60226 40.8422 4.16906 40.5944L13.669 36.444C14.8031 35.9484 15.7845 37.387 14.9094 38.2623L7.57876 45.5927C7.14137 46.0303 7.14137 46.7393 7.57876 47.1766L8.82328 48.4212C9.26064 48.8586 9.96979 48.8586 10.4072 48.4212L18.5705 40.2578C19.4333 39.3952 20.858 40.3382 20.4009 41.4694L16.0762 52.1735C15.8445 52.747 16.1216 53.3996 16.6951 53.6315L18.3269 54.2909C18.9004 54.5224 19.5532 54.2455 19.7849 53.6718L23.8416 43.6316C24.3027 42.49 26 42.8201 26 44.051V54.88C26 55.4985 26.5014 56 27.12 56H28.88C29.4986 56 30 55.4985 30 54.88V44.051C30 42.8201 31.6974 42.49 32.1586 43.6316L36.2149 53.6718C36.4468 54.2455 37.0994 54.5224 37.6732 54.2909L39.305 53.6315C39.8784 53.3996 40.1556 52.747 39.9238 52.1735L35.5992 41.4694C35.142 40.3382 36.5666 39.3952 37.4296 40.2578L45.5927 48.4212C46.0303 48.8586 46.7393 48.8586 47.1766 48.4212L48.4212 47.1766C48.8586 46.7393 48.8586 46.0303 48.4212 45.5927L41.0906 38.2623C40.2156 37.387 41.197 35.9484 42.331 36.444L51.8308 40.5944C52.3978 40.8422 53.058 40.5835 53.3056 40.0165L54.0103 38.4037C54.2578 37.837 53.9991 37.1767 53.4324 36.9292L42.4855 32.1462C41.3736 31.6604 41.7203 30 42.9341 30H54.88C55.4985 30 56 29.4986 56 28.88V27.12C56 26.5014 55.4985 26 54.88 26H42.9341C41.7203 26 41.3734 24.3396 42.4855 23.8537L53.4324 19.0709C53.9991 18.8233 54.2578 18.163 54.0103 17.5962L53.3056 15.9834C53.058 15.4166 52.3978 15.1578 51.8308 15.4055L42.331 19.5561C41.197 20.0516 40.2156 18.6129 41.0906 17.7378L48.4212 10.4072C48.8586 9.96976 48.8586 9.26064 48.4212 8.82325L47.1766 7.57873C46.7393 7.14134 46.0303 7.14134 45.5927 7.57873L37.4296 15.7421C36.5666 16.6048 35.142 15.6618 35.5992 14.5305L39.9238 3.82651C40.1556 3.25298 39.8784 2.60021 39.305 2.3685L37.6732 1.70919C37.0994 1.47747 36.4468 1.75456 36.2149 2.32808L32.1586 12.3685C31.6974 13.5099 30 13.18 30 11.949V1.12Z" fill="white" />
					</g>
					<defs>
						<clipPath id="clip0_0_620">
							<rect width="56" height="56" fill="white" />
						</clipPath>
					</defs>
				</svg>}
				title='HAVE ANY QUESTIONS?' subtitle="FAQ" />

			<FaqContent />
		</section>
	)
}
