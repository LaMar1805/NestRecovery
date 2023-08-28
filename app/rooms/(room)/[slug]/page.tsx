import Section from "@/components/layout/Section";
import Link from "next/link";
import React from "react";
import testData from "@/assets/testData.json"
import ImageLoader from "@/components/ImageLoader";
import "./styles.scss";
import NotFound from "@/app/not-found";
import RoomFeatures from "@/components/RoomFeatures/RoomFeatures";
import AccordionList from "@/components/Accordion/Accordion";
import { DefList } from "@/components/ui/Elements";
import Image from "next/image";

import dynamic from "next/dynamic";

const SliderWithThumbs = dynamic(() => import('@/components/Slider/SliderWithThumbs'))

export default function RoomPage({ params: {slug} }: { params: { slug: string } }) {

	const room = testData.data.rooms.filter(r => (r.href.includes(slug)))[0];

	if(!room) {
		return NotFound()
	}
	const features = new Map(Object.entries(testData.data.rooms_features));

	const currentFeatures: any[] = [];
	room.full_data && room.full_data.features.forEach((value) => {
		currentFeatures.push(features.get(value))
	});

	const imgt = room.images.gallery && room.images.gallery.map((item, index) => <ImageLoader key={index}

		   style={{
			// maxWidth: "100%"
		// objectFit: "cover",
		// width: '100%',
	}} src={item} alt={''}  /> );

	// @ts-ignore

	return (
		<main className={'page-room'}>
			<Section variant={'section-screen'}
				container={false}
				links={<div className={'grid section__footer'}>
					<div className={'section__footer_title'}>
						<h1>{room.title}</h1>
						<ul>{room.properties.map((p:string, index:number) => <li key={index}>{p}</li>)}</ul>
					</div>
				<Link href={'https://hotels.cloudbeds.com/reservation/y3Nqxi'} className={'button button-big'}>Book</Link>
				</div>}
				gallery={
					<div className={'section__image'}>{room.images.screen && <ImageLoader
						// @ts-ignore
						layout={"fill"}
						style={{
							maxWidth: '100%',
							objectFit: "cover",
							// objectPosition: "40% center",
							width: '100%',
							// height: '100%',
						}}
					src={{src: room.images.screen?.src,
						width: room.images.screen?.width,
						height:room.images.screen?.height
					}}   alt={''}/>}</div>}
			/>
			<Section
				variant={'section-content grid'}
				container={false}
				header={currentFeatures.length > 0 && <header className={'section__header'}>
					<RoomFeatures currentFeatures={currentFeatures} />
				</header> }
				gallery={""}
				text={room.full_data &&
					<div className={'section__text'}>
						<AccordionList
							state={0}
							itemStyle={'room-specs room-specs__includes grid_inner'}
							// @ts-ignore
							items={[{ title: "Room rate includes", rows: room.full_data && (room.full_data.room_includes.map((item, index) => <DefList key={index} term={item.title}
									text={<ul>{item.rows.map((item, index) => <li key={index}>{item}</li>) }</ul>} />))}]}
							/>
						<AccordionList
							state={0}
							itemStyle={'room-specs room-specs__charge grid_inner'}

							items={[{ title: "Available at extra charge", rows: room.full_data && (room.full_data.extra_charge.map((item, index) => <DefList key={index} term={item.title}
									text={<>
										<Image src={item.image.src} width={item.image.width} height={item.image.height} alt={''}/>
										<ul>{item.rows.map((row, index) => <li
											// @ts-ignore
											key={index}>{row.title || row}<strong>{row.text}</strong></li>) }</ul></>} />))}]}
							/>

					</div>
				}
			/>
			<Section
				container={false}
				variant={'section-gallery section-room_gallery grid'}
				gallery={imgt &&
						<SliderWithThumbs thumbs={true} items={imgt} navigation={false}
							pagination={true}
							breakpoints={{
							// when window width is >= 320px
							320: {
								loop: false,
								slidesPerView: 1,
								spaceBetween: 0,
								navigation: false,
								// freeMode: true,
							},



							1200: {
								loop: true,
								slidesPerView: 1,
								spaceBetween: 60,
								freeMode: true,
								pagination: false,
								centeredSlides: false
							}
						}} />
					}
			/>
		</main>
	)
}
export function generateStaticParams({ params: {slug} }: { params: { slug: string } }) {

	const rooms = testData.data.rooms.filter(room => (room.href.includes(slug)));

	return rooms.map((room) => ({
		slug: room.href,
	}))
}
