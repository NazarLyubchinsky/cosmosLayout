"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


import './style.scss';
import { PlanetListItem } from '../PlanetListItem';


interface PlanetListMobileProps {
	slicedPlanets: { uid: string; name: string; url: string; }[];
}

export const PlanetListMobile = ({ slicedPlanets }: PlanetListMobileProps) => {

	return (
		<Swiper spaceBetween={20} pagination={true} modules={[Pagination]} className="mySwiper">
			{slicedPlanets.map((planets) => (
				<SwiperSlide key={planets.uid}>
					<PlanetListItem planets={planets} />
				</SwiperSlide>
			))}
		</Swiper>
	)
}