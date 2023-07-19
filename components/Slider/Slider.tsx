'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, } from 'swiper/modules';
// import Swiper and modules styles
import { Swiper as SwiperCore } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ReactNode, useRef } from "react";
import { Arrow } from "@/components/ui/Elements";

// @ts-ignore
const Slider = ({items, spaceBetween = 0, loop = false,  perView = 1, pagination = true, navigation=false, breakpoints = undefined, autoplay }:{
	items: ReactNode[]
	spaceBetween?: number
	perView?: number
	pagination?: boolean
	navigation?: boolean
	breakpoints?: any
	loop?: boolean
	autoplay?: any
}) => {
	const swiperRef = useRef<SwiperCore>();
	// const [ready, setReady] = useState(false);
	return (
		<>

			<Swiper
				autoplay={autoplay}
				modules={[Navigation, Pagination, Autoplay]}
				spaceBetween={spaceBetween}
				loop={loop}
				onBeforeInit={(swiper) => {
					swiperRef.current = swiper;
				}}
				onSwiper={(swiper) => {
					console.log('ready', swiper)
					// setReady(true)
				}}
			// 	navigation={{
			// 		enabled: true
			// }
			// 	}

				// watchSlidesProgress={true}
				// autoHeight={true}
				style={{maxWidth: '100%', width: '100%'}}
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

		</>)

}
export default Slider
