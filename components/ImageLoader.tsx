'use client'
import Image from 'next/image'
import { ImageProps } from "next/image";
import React, { useState } from "react";

const ImageLoader = (props:ImageProps) => {

	const [img, setImg] = useState(false);
	const handleLoad =() => {
		setImg(true);
	}
	return <Image width={props.width} height={props.height} priority={true}  src={props.src} style={props.style} placeholder={"empty"} sizes={!img ? "20vw" : "100vw"} onLoadingComplete={handleLoad} quality={!img ? 20 : props.quality}  alt={''} />;
}
export default ImageLoader
