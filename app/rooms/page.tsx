import Section from "@/components/layout/Section";
import Link from "next/link";
import testData from "@/assets/testData.json"
import  "./styles.scss";
import roomImg from "@/assets/images/rooms/CintaRoom@2x.png";
import roomImg2 from "@/assets/images/rooms/SeraiRoom@2x.png";
import roomImg3 from "@/assets/images/rooms/CahayaRoom@2x.png";
import roomImg4 from "@/assets/images/rooms/KiranaRoom@2x.png";
import roomImg5 from "@/assets/images/rooms/PelangiRoom@2x.png";
import CardRoom from "@/components/Cards/CardRoom";
import React, { useId } from "react";
export default function RoomsPage() {
    const id = useId()

    const roomsImages = [roomImg, roomImg2, roomImg3, roomImg4, roomImg5];
  return (
        <main className={'page-rooms'}>
            <Section
                variant={'section-default'}
                container
                title={<h1 className={'section__title'}>Nest of your choice</h1>}
                text={<div className={'section__text'}>
                    <p>Nest Recovery is designed to make your stay as comfortable as possible and allow you to focus on your healing.</p>
                    <Link href={'https://hotels.cloudbeds.com/reservation/y3Nqxi'} className={'button button-big'}>Book</Link>
                </div>}
            />
            <Section
                variant={'section-content'}
                container={true}
                text={<div className={'section__text grid_inner'}>
                    {testData.data.rooms.map((room: any, index:number) =>
                        <CardRoom
                            key={id}
                            image={roomsImages[index]}
                            title={room.title}
                            description={<ul>{room.properties.map((p:string, index:number) => <li key={index}>{p}</li>)}</ul>}
                            href={room.href}
                    />)}
            </div>}
            />

        </main>
  )
}
