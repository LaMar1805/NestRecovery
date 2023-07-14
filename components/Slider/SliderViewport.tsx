'use client'
import useWindowDimensions from "@/components/utils";
import React, {  useEffect,  useState } from "react";
import CardImage from "@/components/Cards/CardImage";
import Slider from "@/components/Slider/Slider";
import Image from "next/image";
import { FallBackImgSvg } from "@/components/Icons";
const SliderViewport = ({items, push = true, cardStyle, breakpoints = false, fillImg = false}: any) => {

	const {width} = useWindowDimensions();
	const [res, setRes] = useState({});

	useEffect(() => {
		let result:any[] = [];
		if(items.width !== undefined) {
			items.map((item: any, index: number) => result.push(<CardImage style={cardStyle} title={item.title} description={item.description} 	key={index+100}
				image={<Image
					fill={fillImg} objectFit={"cover"}
					width={!fillImg && item.image.width}
					height={!fillImg &&  item.image.height}
					src={item.image.src} alt={''} key={index}/>}
			/>));
		} else  {
			result = [...items]
		}
		if (width && push && width > 1199) {
			result.push(<CardImage style={cardStyle} image={<FallBackImgSvg />} key={123}/>);
		}

		if(width && width > 1199) {
			setRes({el: result});
		} else if(width) {
			setRes({el: <Slider breakpoints={breakpoints}  items={result} spaceBetween={width && width > 1199 ? 40 : 16} pagination={true} perView={width < 640 ? 1 :  width < 828 ? 2 : width < 1200 ? 3 : 4} />})
		}

	}, [width, items]);

	// @ts-ignore
	return res.el;
}
export default SliderViewport
