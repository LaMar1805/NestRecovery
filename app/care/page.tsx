import Image from 'next/image'
import Section from "@/components/layout/Section";
import Link from "next/link";
import Slider from "@/components/Slider/Slider";
import testData from "@/assets/testData.json"
import slideImg from "@/public/images/care__nurses/care@2x.png";
import slideImg2 from "@/public/images/care__nurses/care_sl_3@2x.png";
import slideImg3 from "@/public/images/care__nurses/care_sl_4@2x.png";
import slideMobImg from "@/public/images/care__nurses/care-mobile@2x.png";
import slideMobImg2 from "@/public/images/care__nurses/care_sl_3-mobile@2x.png";
import slideMobImg3 from "@/public/images/care__nurses/care_sl_4-mobile@2x.png";
import slideImgSection from "@/assets/images/care__nurses/care__nurses@2x.png";
import slideImgSection2 from "@/assets/images/care__nurses/care__nurses_2@2x.png";
import slideImgSection3 from "@/assets/images/care__nurses/care__nurses_3@2x.png";

import { CareTherapySvg } from "@/components/Icons";
import CardImage from "@/components/Cards/CardImage";
import React from "react";
import ImageLoader from "@/components/ImageLoader";

export default function CarePage() {

    const images = [slideImg,slideImg2,slideImg3];
    const imagesMob = [slideMobImg,slideMobImg2,slideMobImg3];
    const imagesSect = [slideImgSection3, slideImgSection,slideImgSection2];

    const img = imagesSect.map((item, index) => <CardImage style={'card-nurses'} key={index+100}
        image={item} />);
    // const img = testData.data.careNurses;

  return (
        <main className={'page-care'}>
            <Section
                variant={'section-screen'}
                container={false}
                links={<div className={'section__footer grid'}>
                            <h2 className={'section__footer_title'}>24/7 licensed nursing care and cutting-edge technology</h2>
                            <Link href={'https://hotels.cloudbeds.com/reservation/y3Nqxi'} className={'button button-big'}>Book</Link>
                        </div>}
                title={<h1 className={'section__title'}>Professional support for your recovery</h1>}
                gallery={<Slider autoplay={{
                    delay: 20000,
                    disableOnInteraction: false,
                }} items={images} itemsMob={imagesMob} loop={true} perView={1} spaceBetween={0}/>}
            />

            <Section
                container={false}
                title={<h2 className={'section__title'}>Trust us with your treatment plan</h2>}
                text={<div className={'section__text'}>
                    <p>Your stay at Nest Recovery includes 24/7 licensed nursing care. Our team will have your treatment plan in place by the time you arrive, and we&#39;ll make sure to strictly follow it. Whenever you need help, we are one button push away.</p>
                    <p>If recommended by your doctor, your care will be complemented with Sequential Compression Device and Oxygen Concentrator at no extra charge or IV at $50 per fluid bag.</p> </div>}
                variant={'section-gallery grid'}
                gallery={<div className={'section__gallery'}>
                    <Slider element={false}  breakpoints={{
                        // when window width is >= 320px
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,

                        },
                        720: {
                            loop: false,
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        // when window width is >= 480px
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        }
                    }} items={img}/>
            </div>}
            />
            <Section
                container={false}
                title={<h2 className={'section__title'}>Hyperbaric oxygen therapy</h2>}
                text={<div className={'section__text'}>
                    <p>Upon your physician&#39;s orders, your treatment can be supplemented with hyperbaric chamber treatments.</p>
                    <p>Hyperbaric oxygen therapy involves breathing pure oxygen in a pressurized environment, increasing the amount of oxygen the lungs gather. Hyperbaric treatments reduce post-surgical bruising, swelling, and inflammation and accelerate healing.</p> </div>}
                variant={'section-therapy grid'}
                gallery={<div className={'section__gallery'}>
                    <div className={'card'}>
                        <div className={'card__image'}>
                            <ImageLoader src={{
                                src: testData.data.therapy[0].image.src,
                                height: testData.data.therapy[0].image.height,
                                width: testData.data.therapy[0].image.width

                            }}
                               alt={''} />
                        </div>
                    </div>
                    <div className={'card'}>
                        <div className={'card__text'} dangerouslySetInnerHTML={{__html: testData.data.therapy[0].text}}></div>
                        <div className={'card__image'}>
                            <CareTherapySvg/>
                        </div>
                    </div>
            </div>}
            />
            <Section
                container={false}
                title={<h2 className={'section__title'}>{testData.data.massage.title}</h2>}
                text={<div className={'section__text'}>
                    <div dangerouslySetInnerHTML={{__html: testData.data.massage.text}}/>
                        <ImageLoader src={{
                            src: testData.data.massage.image[0].image.src,
                            height: testData.data.massage.image[0].image.height,
                            width: testData.data.massage.image[0].image.width

                        }}  alt={''} />

                </div>}
                variant={'section-gallery section-massage grid'}
            />

        </main>
  )
}
