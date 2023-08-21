'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Controller, FreeMode, Navigation, Pagination, Thumbs, } from 'swiper/modules';
// import Swiper and modules styles
import { Swiper as SwiperCore } from 'swiper/types';
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ReactNode, useRef, useState } from "react";
import { Arrow } from "@/components/ui/Elements";

// @ts-ignore
const SliderWithThumbs = ({items, thumbs = false, spaceBetween = 0, loop = false,  perView = 1, pagination = true,  breakpoints = undefined, autoplay }:{
	items: ReactNode[]
	spaceBetween?: number
	perView?: number
	pagination?: boolean
	navigation?: boolean
	thumbs?: boolean
	breakpoints?: any
	loop?: boolean
	autoplay?: any
}) => {
	const swiperRef = useRef<SwiperCore>();
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const [firstSwiper, setFirstSwiper] = useState(null);


	// @ts-ignore
	return (
		<>
		<div className={'section__gallery_wrapper grid'}>
			<div className={'section__gallery'}>
				<Swiper
					autoplay={autoplay}
					modules={[Navigation,FreeMode, Pagination, Autoplay, Thumbs, Controller]}
					thumbs={{ swiper: thumbsSwiper }}
					spaceBetween={spaceBetween}
					// @ts-ignore
					onSwiper={(swiper) => setFirstSwiper(swiper)}


					// navigation={firstSwiper.navigation}
					// controller={{ control: secondSwiper }}


					onBeforeInit={(swiper) => {
						swiperRef.current = swiper;
					}}
					style={{width: '100%'}}
					pagination={{
						enabled: pagination,
						dynamicBullets: true,
						clickable: true}
					}
					slidesPerView={perView}
					className={"swiper__full_slide mySwiper2"}
					breakpoints={breakpoints}

				>

					{items.map((item:ReactNode, index: number) => <SwiperSlide className={'section-screen__slide'} key={index}>{item}</SwiperSlide>)}

				</Swiper>

				{
					// @ts-ignore
					firstSwiper?.params.navigation && (<>
					<Arrow	// @ts-ignore
						action={() => firstSwiper?.slideNext()} style={'forward'} />

					<Arrow	// @ts-ignore
						action={() => firstSwiper?.slidePrev()} style={'backward'} />

				</>)}
			</div>
		</div>



			{thumbs &&	<div className={'section__thumbs'}> <Swiper
				modules={[FreeMode, Pagination, Thumbs]}
				// @ts-ignore
				onSwiper={setThumbsSwiper}

				spaceBetween={30}


				slidesPerView={2}
				freeMode={true}
				watchOverflow={true}
				className={'mySwiper'}

				breakpoints={{
					// when window width is >= 320px
					320: {
						loop: false,
						slidesPerView: 3,
						spaceBetween: 10,
						freeMode: true,
						watchSlidesProgress:true,
						centeredSlides: false,
						navigation: true,
						pagination: {
							dynamicBullets: true
						}
					},

					640: {
						slidesPerView: 4,
						spaceBetween: 10,
						centeredSlides: false,


					},
					1200: {
						// freeMode: false,
						watchSlidesProgress:true,
						loop: false,
						slidesPerView: "auto",
						spaceBetween: 20,
						centeredSlides: false,
					},
					1400: {
						setWrapperSize: true,
						freeMode: false,
						watchSlidesProgress:true,
						loop: false,
						slidesPerView: "auto",
						spaceBetween: 30,
						centeredSlides: false,
					},

				}
				}

			>

				{items.map((item:ReactNode, index: number) => <SwiperSlide  className={'section-screen__slide'} key={index}>{item}</SwiperSlide>)}
			</Swiper>	</div>}

		</>)

}
export default SliderWithThumbs
