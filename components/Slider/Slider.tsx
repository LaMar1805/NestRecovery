'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, } from 'swiper/modules';
// import Swiper and modules styles
import { Swiper as SwiperCore } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import React, { Suspense, useMemo, useRef, useState } from "react";
import { Arrow } from "@/components/ui/Elements";
import ImageLoader from "@/components/ImageLoader";

// @ts-ignore
const Slider = ({items, itemsMob, element = true, spaceBetween = 0, loop = false,  perView = 1, pagination = true, navigation=false, breakpoints = undefined, autoplay , style}:{
	items: any[]
	style?: {}
	itemsMob?: any[]
	spaceBetween?: number
	perView?: number
	pagination?: boolean
	element?: boolean
	navigation?: boolean
	breakpoints?: any
	loop?: boolean
	autoplay?: any
}) => {
	const swiperRef = useRef<SwiperCore>();
	const [indexImg, setIndexImg] = useState(0);

	const handleImgLoaded = () => {
		if(indexImg <= items.length) {
			setIndexImg((prevState) => {
				return prevState + 1
			});

		}
	}
	const memoizedSlides = useMemo(() => {
		const newItems = items.map((item, index) => {

				console.log()
			if(element) 	setIndexImg(() => items.length)
			if(index <= indexImg && element ) return <SwiperSlide key={index}
				className={'section-screen__slide'}>
				<ImageLoader
					handleAction={handleImgLoaded}
					src={item}

					alt={''}
					init={index === 0}

					style={{ ...style }}/>
			</SwiperSlide>

		}
		);
		return newItems
		}

	, [indexImg]);

	// useEffect(() => {
	// 	if(element && indexImg <= items.length) {
	// 		setReady(false);
	// 		let data:any[] = []
	//
	// 		data = items.slice(0, indexImg).map((item, index) => <SwiperSlide key={index}
	// 			className={'section-screen__slide'}>
	// 			{element ? <ImageLoader
	// 				handleAction={handleImgLoaded}
	// 				src={item}
	// 				srcMobile={itemsMob && itemsMob[index]}
	// 				alt={''}
	// 				init={index === 0}
	//
	// 				style={{ ...style }}/> : items[index]}
	//
	// 		</SwiperSlide>)
	// 		setReady(true);
	// 		// @ts-ignore
	// 		setImgs(data);
	// 	}
	// 	if(element && indexImg == 0) {
	// 		setReady(false);
	// 		let data = items.slice(0, 1).map((item, index) => <SwiperSlide key={index}
	// 			className={'section-screen__slide'}>
	// 			{element ? <ImageLoader
	// 				handleAction={handleImgLoaded}
	// 				src={item}
	// 				srcMobile={itemsMob && itemsMob[index]}
	// 				alt={''}
	//
	// 				style={{ ...style }}/> : items[index]}
	//
	// 		</SwiperSlide>)
	// 		// @ts-ignore
	// 		setImgs(data);
	// 		setReady(true);
	// 	}
	//
	//
	// },[indexImg])

	return (
		<>
		<Suspense>
			<Swiper
				autoplay={autoplay}
				modules={[Navigation, Pagination, Autoplay]}
				spaceBetween={spaceBetween}
				loop={loop}
				onBeforeInit={(swiper) => {
					swiperRef.current = swiper;
				}}
				// onSwiper={	}
			// 	navigation={{
			// 		enabled: true
			// }
			// 	}

				// watchSlidesProgress={true}
				// autoHeight={true}
				// style={{maxWidth: '100%', width: '100%'}}
				pagination={{ enabled: pagination, clickable: true, bulletClass: 'custom__bullet', bulletActiveClass: 'custom_bullet_active' }}
				slidesPerView={perView}
				// centeredSlides={true}
				breakpoints={breakpoints}
				// watchOverflow={true}
			>

					{element && memoizedSlides.map((item) => item)}
					{!element && items.map((item, index) => <SwiperSlide key={index}
						className={'section-screen__slide'}>{item}</SwiperSlide>)}


			</Swiper>
			{navigation && (<>
				<Arrow  action={() => swiperRef.current?.slideNext()} style={'forward'} />
				<Arrow action={() => swiperRef.current?.slidePrev()} style={'backward'} />

			</>)}
		</Suspense>
		</>)

}
export default Slider
