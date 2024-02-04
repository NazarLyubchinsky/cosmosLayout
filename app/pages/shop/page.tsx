"use client"
import { Header } from '@/app/components/Header'
import styles from './shop.module.scss'
import useAOS from '@/app/hooks/useAos';




export default function Page() {
	// const { aosRef } = useAOS();

	return (
		<section className={styles.section}>
			<Header />
			<div
				// ref={aosRef}
				// data-aos="flip-left"
				// data-aos-easing="ease-out-cubic"
				// data-aos-duration="2000"
				>
				wdwd
			</div>
		</section>
	)
}