'use client'
import { ImageProps } from "next/image";
import  Image  from "next/image";
import React, { EventHandler, useCallback, useEffect, useState } from "react";
import useWindowDimensions from "@/components/utils";
import { useCookies } from 'react-cookie';
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const ImageLoader = ({src, srcMobile, action, alt, style = {}}: {style?: {}, src: StaticImport | ImageProps | any, srcMobile?: StaticImport | ImageProps  | any,alt: string, action?: EventHandler<any> }) => {
	const [cookies, setCookie, removeCookie] = useCookies(['device']);
	console.log('sl', style)
	const windowDimensions = useWindowDimensions()
	const [imgReady, setimgReady] = useState(false);
	const [img, setImg] = useState({
		image: undefined,
		state: true,
		view: undefined
	})

	const handleLoadStarted = () => {
		// console.log(getCookie())
	}
	const handleLoad =( img :HTMLImageElement) => {

		// console.log(windowDimensions)
		setimgReady(true);
	}
	const deviceOrientation = windowDimensions.type?.includes('portrait')
	useEffect(() => {

		const newImg = () => {
			let val = deviceOrientation && windowDimensions.width && windowDimensions.width < 768;
			console.log('src', src)
			// console.log('need', windowDimensions)
			console.log('srcMobile', srcMobile)
			// console.log('deviceOrientation', deviceOrientation && windowDimensions.width && windowDimensions.width < 768)
			// console.log('windowDimensions.width', windowDimensions.width)

			if(val) return srcMobile ? srcMobile : src
			if(val !== undefined) return src

		}

		// @ts-ignore
		setImg((prevState) => ({
			// view: windowDimensions.type,
			...prevState,
			state: false,
			view: deviceOrientation,
			image: newImg(),
		}));
	}, [deviceOrientation])

	if(img.state) return <p>loading</p>
	// @ts-ignore
	if(img.image && img.image?.src) return <Image
		layout={"responsive"}
		style={style}
		// @ts-ignore
		src={img.image?.src}
		// @ts-ignore
		width={img.image?.width}
		// @ts-ignore
		height={img.image?.height}
		placeholder={"empty"}
		// sizes={img.sizes}
		loading={"lazy"}
		priority={false}
		onLoad={() => action}
		sizes={"100vw"}
		onLoadingComplete={handleLoad}
		// @ts-ignore
		blurDataURL={`/_next/image?url=${img.src}&w=${640}&q=10`}
		// @ts-ignore
		quality={img.quality}
		alt={alt} />;

}
export default ImageLoader
