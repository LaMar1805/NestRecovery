'use client'
import Image, { ImageProps } from "next/image";
import React, { useEffect, useState } from "react";
import useWindowDimensions, { isServer } from "@/components/utils";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const ImageLoader = ({src, srcMobile, handleAction, alt, style = {}}: {style?: {}, src: StaticImport | ImageProps | any, srcMobile?: StaticImport | ImageProps  | any,alt: string, handleAction?: any }) => {

	const windowDimensions = useWindowDimensions()
	const [imgReady, setimgReady] = useState(false);
	const [imag, setImag] = useState(undefined);

	// @ts-ignore
	const handleLoad = (e) => {

		console.log('12334213', e)
		setimgReady(true);

		handleAction(e);

	}
	const handleImg = () => {
		setimgReady(false);
		if(!isServer && windowDimensions.type) {
			if(windowDimensions.state) {
				setImag(srcMobile);
			} else setImag(src)
		}
		setimgReady(true);
	}
	useEffect(() => {
		handleImg();

	}, [windowDimensions.state, imgReady])
	// if(!imgReady) return <p>loading</p>
	// @ts-ignore

	return imgReady && <Image

		style={style}
		// @ts-ignore
		src={imag}
		// @ts-ignore
		// width={img.image?.width}
		// // @ts-ignore
		// height={img.image?.height}
		placeholder={"empty"}
		// sizes={img.sizes}
		// loading={"lazy"}
		priority={false}
		onLoad={handleAction}
		// onClick={handleAction}
		sizes={"100vw"}
		// onLoadingComplete={handleLoad}
		// @ts-ignore
		// blurDataURL={`/_next/image?url=${src.src}&w=${640}&q=10`}
		// @ts-ignore
		// quality={90}
		alt={alt} />;

}
export default ImageLoader
