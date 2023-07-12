'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import { Swiper as SwiperCore } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ReactNode, useRef } from "react";
import { Arrow } from "@/components/ui/Elements";
const breakpointsTest = {
	// when window width is >= 320px
	320: {
		slidesPerView: 2,
		spaceBetween: 20
	},
	// when window width is >= 480px
	480: {
		slidesPerView: 3,
		spaceBetween: 30
	},
	// when window width is >= 640px
	640: {
		slidesPerView: 4,
		spaceBetween: 40
	}
}
// @ts-ignore
const Slider = ({items, spaceBetween = 0, loop = false, perView = 1, pagination = true, navigation=false, breakpoints = undefined}:{
	items: ReactNode[]
	spaceBetween?: number
	perView?: number
	pagination?: boolean
	navigation?: boolean
	breakpoints?: any
	loop?: boolean
}) => {
	const swiperRef = useRef<SwiperCore>();
	return  (
		<>
			<Swiper
				modules={[Navigation, Pagination]}
				spaceBetween={spaceBetween}
				onBeforeInit={(swiper) => {
					swiperRef.current = swiper;
				}}
			// 	navigation={{
			// 		enabled: true
			// }
			// 	}

				// watchSlidesProgress={true}
				autoHeight={true}
				// style={{maxWidth: '100%', width: '100%'}}
				pagination={{ enabled: pagination, clickable: true, bulletClass: 'custom__bullet', bulletActiveClass: 'custom_bullet_active' }}
				slidesPerView={perView}
				// centeredSlides={true}
				breakpoints={breakpoints}
				// watchOverflow={true}
			>
				{items.map((item:ReactNode, index: number) => <SwiperSlide className={'section-screen__slide'} key={index}>{item}</SwiperSlide>)}

			</Swiper>
			{navigation && (<>
				<Arrow  action={() => swiperRef.current?.slideNext()} style={'forward'} />
				<Arrow action={() => swiperRef.current?.slidePrev()} style={'backward'} />

			</>)}
		</>
	)
}
export default Slider
