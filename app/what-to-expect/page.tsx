import Image from 'next/image'
import Section from "@/components/layout/Section";
import Link from "next/link";
import testData from "@/assets/testData.json";
import slideImg from "@/assets/images/whattoexpect/screen@2x.png";
import wteImg from "@/assets/images/whattoexpect/wte_@2x.png";
import wteCardImg from "@/assets/images/whattoexpect/wte_1@2x.png";
import wteCardImg2 from "@/assets/images/whattoexpect/wte_2@2x.png";
import wteCardImg3 from "@/assets/images/whattoexpect/wte_3@2x.png";
import wteCardImg4 from "@/public/images/whattoexpect/wte_4@2x.png";
import wteCardImg5 from "@/public/images/whattoexpect/wte_5@2x.png";
import wteCardImg6 from "@/public/images/whattoexpect/wte_6@2x.png";
import Slider from "@/components/Slider/Slider";
import CardImage from "@/components/Cards/CardImage";
import React from "react";
import ImageLoader from "@/components/ImageLoader";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: testData.data.meta.what.title,
    description: testData.data.meta.what.description,
    twitter: {
        title: testData.data.meta.what.title,
        images: [testData.data.meta.what.image.src]
    },
    openGraph: {
        title: testData.data.meta.what.title,
        description: testData.data.meta.what.description,
        url: new URL('https://www.nestrecovery.me'),
        siteName: 'Nest Recovery',
        images: [
            {
                alt: testData.data.meta.what.title,
                url: `${process.env.baseUrl}${testData.data.meta.what.image.src}`,
                height: testData.data.meta.what.image.height,
                width: testData.data.meta.what.image.width,
            }
        ],
        locale: 'en_US',
        type: 'website',
    },
}
export default function WhatToExpectPage() {
    const cardImg = [wteCardImg, wteCardImg2, wteCardImg3];
    const cardImg2 = [wteCardImg4, wteCardImg5, wteCardImg6];
    const img = cardImg.map((item, index) => <CardImage style={'card-nurses'} 	key={index+100}
        image={item} />)

    const sectSlider = testData.data.wteThree.map((item, index) => <ImageLoader key={index}
        src={{
            src: item.image.src,
            width: item.image.width,
            height: item.image.height
        }} alt={''}/> );

  return (
        <main className={'page-what-to-expect'}>
            <Section
                variant={'section-screen'}
                container={false}
                gallery={
                <div className={'section__gallery'} style={{height: "80px"}}>
                    <Image    placeholder="blur" priority={true}  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"      style={{
                    maxWidth: '100%',
                    objectFit: "cover",
                    width: '100%',
                    height: '100%',
                }} src={slideImg} alt={''} />
            </div>}
            />
            <Section
                title={<h1 className={'section__title'}>What to expect</h1>}
                variant={'section-default'}
                text={<div className={'section__text'}><p>The moment you book your visit, we start preparing for your arrival. We coordinate with your doctor to iron out all the details and pick you up after your surgery.</p></div>}                />
            <Section
                container={false}
                text={<div className={'section__text'}>
                    <p>Our driver will discreetly transport you to Nest Recovery Retreat and your room. Nurses will have your treatment plan already in place. They will help you settle in and check up on you regularly. They are one button push away whenever you need them, around the clock.</p>
                    <p>A registered nurse will administer any additional treatments your doctor may prescribe. Transportation to and from follow-up appointments with your doctor is included in your stay.</p>
                </div>}
                variant={'section-gallery wte-two grid'}
                gallery={<div className={'section__gallery_wrapper'}>
                    <div className={'section__gallery'}>
                        <ImageLoader src={wteImg} srcMobile={wteImg} alt={''} />
                    </div>
                </div>}
            />
            <Section
                container={false}
                text={<div className={'section__text'}>
                        <div>
                            <hr/>
                            <p>Every room is spacious and has outdoor space, such as a patio or a deck. All rooms come equipped with king-size beds, walk-in closets and mini-fridges.</p>
                        </div>
                    <div>
                        <p>Your post-op meals, as well as breakfasts and snacks for when you are ready for solid foods, will be chef-prepared according to your doctor&apos;s recommendations. Our juice bar works 24/7, and delivery from a variety of Beverly Hills restaurants is available for your lunches and dinners.</p>
                    </div>
                </div>}
                gallery={<div className={'section__gallery'}>
                    <Slider  breakpoints={{
                        // when window width is >= 320px
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,

                        },
                        // when window width is >= 480px
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        }
                    }}  items={cardImg} itemsMob={cardImg} />
                </div>}
                variant={'section-gallery wte-three grid'}
            />
            <Section
                container={false}
                text={<div className={'section__text'}>
                    <hr className={'gold'}/>
                    <p>If you ever feel social during your healing journey, you can visit our common areas, including the dining room, lounge zone, and pool. Otherwise, all your time with us will be completely private and confidential.</p>
                </div>}
                links={<div className={'section__footer'}>
                    <Link href={'https://hotels.cloudbeds.com/reservation/y3Nqxi'} className={'button button-big'}>Book</Link>
                    <Link href={'/faq'} className={'button button-big'}>Read FAQ</Link>
                </div>}
                variant={'section-gallery wte-four grid'}
                gallery={<div className={'section__gallery_wrapper'}>
                    <div className={'section__gallery'}>
                        <Slider items={cardImg2} itemsMob={cardImg2} loop={true} navigation={true} breakpoints={{
                            // when window width is >= 320px
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 0,
                                navigation: false
                            },
                            1200: {
                                loop: true,
                                slidesPerView: 1,
                                spaceBetween: 0,
                                pagination: false,
                                centeredSlides: false
                            }
                        }} perView={4} />
                    </div>
                </div>}
            />
        </main>
  )
}
