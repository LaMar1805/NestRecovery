import React, { ReactNode } from "react";
import Link from "next/link";
import ImageLoader from "@/components/ImageLoader";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface CardProp {
	title?: string
	description?: ReactNode | string
	image: StaticImport | string
	style?: string
	href?: string
	svg?: ReactNode
}
//
// const CustomLink = ({children, ...props}:  PropsWithChildren<CardProp>) => {
// 	const {style, href = '/'} = props;
// 	return (
// 		<Link className={`card ${style}`} href={href}>
// 			{children}
// 		</Link>
// 	)
// }
const CardImage = ({title, description, image, svg, style = '', href}:CardProp) => {

	return (
		<div className={`card ${style}`}>
			<div className={'card__image'}>{!svg ? <ImageLoader quality={75}
				src={image} alt={''} priority={false}/> : svg}</div>
			{title && (href ? <Link href={href} className={'card__title_link'}><h3 className={'card__title'} style={{zIndex: 30}}>{title}</h3></Link> : <h3 className={'card__title'} style={{zIndex: 30}}>{title}</h3>)}
			{description && <div className={'card__description'}>{description}</div>}
		</div>
	)
}
export default CardImage
