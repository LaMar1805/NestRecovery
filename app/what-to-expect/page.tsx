import Image from 'next/image'
import Section from "@/components/layout/Section";
import Link from "next/link";
import testData from "@/assets/testData.json";
import slideImg from "@/assets/images/whattoexpect/screen@2x.png";
import wteImg from "@/assets/images/whattoexpect/wte_@2x.png";
import wteCardImg from "@/assets/images/whattoexpect/wte_1@2x.png";
import wteCardImg2 from "@/assets/images/whattoexpect/wte_2@2x.png";
import wteCardImg3 from "@/assets/images/whattoexpect/wte_3@2x.png";
import SliderViewport from "@/components/Slider/SliderViewport";
import Slider from "@/components/Slider/Slider";
import CardImage from "@/components/Cards/CardImage";
import React from "react";
export default function WhatToExpectPage() {
    const cardImg = [wteCardImg, wteCardImg2, wteCardImg3];
    const img = cardImg.map((item, index) => <CardImage style={'card-nurses'} 	key={index+100}
        image={<Image quality={80}
            placeholder={"blur"} blurDataURL={`/_next/image?url=${encodeURI(item.src)}&w=${640}&q=30`}
            sizes={'100vw'} key={index} style={{width: "100%", background: 'none'}} src={item} alt={''}/>} />)
    const sectSlider = testData.data.wteThree.map((item, index) => <Image sizes="(max-width: 768px) 50vw, (max-width: 1399px) 75vw, 100vw"      style={{
        maxWidth: '100%',
        objectFit: "cover",
        width: '100%',
        height: '100%',
    }} key={index}
        width={item.image.width}
        height={item.image.height}
        src={item.image.src} alt={''}/> );

  return (
        <main className={'page-what-to-expect'}>
            <Section
                variant={'section-screen'}
                container={false}
                gallery={<div className={'section__gallery'} style={{height: "80px"}}><Image    placeholder="blur" priority={true}  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"      style={{
                    maxWidth: '100%',
                    objectFit: "cover",
                    width: '100%',
                    height: '100%',
                }} src={slideImg} alt={''}/></div>}
            />
            <Section
                title={<h2 className={'section__title'}>What to expect</h2>}
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
                        <Image src={wteImg} alt={''} />
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
                    <SliderViewport  breakpoints={{
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
                    }} cardStyle={'card-nurses'} push={false} items={img}/>
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
                        <Slider items={sectSlider} loop={true} navigation={true} breakpoints={{
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
