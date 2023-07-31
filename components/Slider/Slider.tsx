'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, } from 'swiper/modules';
// import Swiper and modules styles
import { Swiper as SwiperCore } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import React, { EventHandler, ReactNode, Suspense, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Arrow } from "@/components/ui/Elements";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import ImageLoader from "@/components/ImageLoader";
import img from "@/assets/images/Ofich2Dg 1@2x.png";
import imgMobile from "@/public/images/index/Ofich2Dg1-mobile@2x.png";

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
	const [ready, setReady] = useState(false);
	const [indexImg, setIndexImg] = useState(0);
	const [images, setImages] = useState({
		source: []
	})


	const setNewImg = () => {
		// console.log('inputimg', imgMob)
		const newA:any[] = [ ...images.source ]


		newA.push(<Suspense>
			<SwiperSlide key={indexImg}

			// @ts-ignore
			className={'section-screen__slide'}>

				{element ? <ImageLoader src={items[indexImg]} srcMobile={itemsMob && itemsMob[indexImg]}  alt={''}
					// sizes={"420px"}
					// @ts-ignore
					style={{...style}}/> : items[indexImg]}


			{/*<ImageLoader key={indexImg}*/}
			{/*	// quality={75}*/}
			{/*	// placeholder={"blur"}*/}
			{/*	action={loadImgNext}*/}
			{/*	srcMobile={false}*/}
			{/*	// blurDataURL={`/_next/image?url=${items[indexImg]?.src}&w=${640}&q=30`}*/}
			{/*	// sizes={'100vw'}*/}
			{/*// 	style={{*/}
			{/*// 		// maxWidth: '100%',*/}
			{/*// 		objectFit: "cover",*/}
			{/*// 		// objectPosition: "40% center",*/}
			{/*// 		width: '100%',*/}
			{/*// 		// height: '100%',*/}
			{/*// }}*/}
			{/*src={items[indexImg]}*/}
			{/*alt={''}*/}
			{/*/>*/}

		</SwiperSlide>		</Suspense>)
		// @ts-ignore
		setImages(prevState => ({
			...prevState,
			source: newA
		}))

	}
	const loadImgNext = () => {
			// console.log('loaddddddeed', e, images.source.length <= items.length)
		if(images.source.length < items.length) {
			setNewImg()

			setIndexImg((prevState) => prevState + 1)
		}

	};
	useEffect(() => {
		loadImgNext()
		// setImages(prevAr)
		// console.log('index', images)
		// console.log('items[indexImg]',items[0])
		// console.log('itemsMob[indexImg]',imgMob)

	}, [indexImg])

	useEffect(() => {
		setReady(true);
		console.log(images.source)
	},[indexImg])
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
					// console.log('ready', swiper)
					// setReady(true)
				}}
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

				{images.source}

			</Swiper>
			{navigation && (<>
				<Arrow  action={() => swiperRef.current?.slideNext()} style={'forward'} />
				<Arrow action={() => swiperRef.current?.slidePrev()} style={'backward'} />

			</>)}

		</>)

}
export default Slider
