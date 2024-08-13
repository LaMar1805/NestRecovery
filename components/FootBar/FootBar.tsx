'use client'
import React from 'react';
import styles from './FootBar.module.scss';
import phone from '../../public/images/phone.png';
import mail from '../../public/images/mail.png';
import map from '../../public/images/map.png';
import Image from "next/image";

const items = [
	{
		text: 'Phone',
		img: <Image src={phone} alt={''}/>,
		link: "tel:4242825171"
	},
	// {
	// 	text: 'Chat',
	// 	img: <Image src={chat} alt={''}/>,
	// 	link: '#'
	// },
	{
		text: 'E-mail',
		img: <Image src={mail} alt={''}/>,
		link: 'mailto:info@nestrecovery.me?subject=Letter%20from%20NESTRECOVERY.ME'
	},
	{
		text: 'Address',
		img: <Image src={map} alt={''}/>,
		link: 'https://www.google.com/maps/place/9653+Highridge+Dr,+Beverly+Hills,+CA+90210,+%D0%A1%D0%A8%D0%90/@34.1138895,-118.4258184,187a,35y,305.44h/data=!3m1!1e3!4m6!3m5!1s0x80c2bdb0700b22bf:0xc4a88845247e2be3!8m2!3d34.1139154!4d-118.4257217!16s%2Fg%2F11c29_2cf2?entry=ttu'
	}
]

type FootBarProps = {}

const FootBar = () => {
	return (
		<div className={styles.FootBar}>
			{items.map((i:any, index: number) => {
				if(i.text === "E-mail") {
					return <a key={`tab-${index}`}
						href={""} onClick={(event) => {
							event.preventDefault();
							window.location.replace(i.link);
							return false
					}}>{i.img}<span>{i.text}</span></a>
				}
				return <a key={`tab-${index}`}
					href={i.link}>{i.img}<span>{i.text}</span></a>
			})}
		</div>
	);
};

export default FootBar;
