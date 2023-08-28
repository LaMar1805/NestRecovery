import React, { ReactNode } from "react";
import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import styles from "./styles.module.scss";
import icon from "@/assets/svg/roomlink.svg";

export interface CardProp {
	title?: string
	description?: ReactNode | string
	image: StaticImport
	href?: string
}
const CardRoom = ({title, description, image, href}:CardProp) => {
	return (

		<div className={styles.card_room}>
			<div className={styles.image}>
				{title && (href && <Link href={href}>
					<Image  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 50vw"  src={image} alt={''}/>
				</Link>)}
			</div>
			{title && (href ? <Link href={href} className={styles.link}>
				<h3 className={styles.title} style={{zIndex: 30}}>{title}</h3></Link>
				: <h3 className={styles.title} style={{zIndex: 30}}>{title}</h3>)}
			<footer>
			{description && <div className={styles.properties}>{description}</div>}
			{href && <Link href={href} className={styles.linkIcon}>
				<Image src={icon} alt={''}/>
				</Link>}
			</footer>
		</div>
	)
}
export default CardRoom
