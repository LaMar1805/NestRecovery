import Image, { ImageProps } from "next/image";
import React from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const ImageLoader = ({src, srcMobile, handleAction, init = false, alt, style = {},...props}: {style?: {}, init?:boolean, src: StaticImport | ImageProps | any, srcMobile?: StaticImport | ImageProps  | any,alt: string, handleAction?: any }) => {

	return <Image

		style={{ objectFit: "cover", ...style }}
		// @ts-ignore
		src={src}
		// @ts-ignore
		// width={img.image?.width}
		// // @ts-ignore
		// height={img.image?.height}
		// placeholder={"empty"}
		// sizes={img.sizes}
		// loading={init ? "eager" : "lazy"}
		// priority={init}
		onLoad={handleAction}
		// onClick={handleAction}
		sizes={"100vw"}
		// onLoadingComplete={handleLoad}
		// @ts-ignore
		// blurDataURL={`/_next/image?url=${src.src}&w=${640}&q=10`}
		// @ts-ignore
		// quality={90}
		{...props}
		alt={alt} />;

}
export default ImageLoader
