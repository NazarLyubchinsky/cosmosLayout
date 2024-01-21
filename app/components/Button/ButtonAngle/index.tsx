
import styles from './style.module.scss'
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

