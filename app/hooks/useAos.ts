import { useEffect, useRef } from 'react';
// aos
import AOS from 'aos';
import 'aos/dist/aos.css'

const useAOS = () => {
	const aosRef = useRef(null);

	useEffect(() => {
		const initAOS = () => {
			AOS.init({
				duration: 1000,
			});
		};

		if (aosRef.current) {
			initAOS();
		}

		return () => {
			AOS.refreshHard();
		};
	}, []);

	return { aosRef };
};

export default useAOS;

