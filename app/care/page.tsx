import Image from 'next/image'
import Section from "@/components/layout/Section";
import Link from "next/link";
import Slider from "@/components/Slider/Slider";
import testData from "@/assets/testData.json"
import slideImg from "@/assets/images/care__nurses/care.png";
import slideImg2 from "@/assets/images/care__nurses/care_sl_3.png";
import slideImg3 from "@/assets/images/care__nurses/care_sl_4.png";
import slideImgSection from "@/assets/images/care__nurses/care__nurses.png";
import slideImgSection2 from "@/assets/images/care__nurses/care__nurses_2.png";
import slideImgSection3 from "@/assets/images/care__nurses/care__nurses_3.png";
import SliderViewport from "@/components/Slider/SliderViewport";
import { CareTherapySvg } from "@/components/Icons";
import CardImage from "@/components/Cards/CardImage";
import React from "react";

export default function CarePage() {

    const images = [slideImg,slideImg2,slideImg3];
    const imagesSect = [slideImgSection,slideImgSection2,slideImgSection3];
    const screenSlider = images.map((item, index) => <Image key={index}    placeholder="blur" priority={true}  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"      style={{
        maxWidth: '100%',
        objectFit: "cover",
        width: '100%',
        height: '100%',
    }} src={item} alt={''}/> );
    const img = imagesSect.map((item, index) => <CardImage style={'card-nurses'} 	key={index+100}
        image={<Image key={index} sizes="(max-width: 768px) 50vw, (max-width: 1399px) 75vw, 100vw"      style={{
            maxWidth: '100%',
            objectFit: "cover",
            width: '100%',
            background: 'none',
            height: '100%',
        }}  src={item} alt={''}/>} />)
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
                }} items={screenSlider} loop={true} perView={1} spaceBetween={0}/>}
            />

            <Section
                container={false}
                title={<h2 className={'section__title'}>Trust us with your treatment plan</h2>}
                text={<div className={'section__text'}>
                    <p>Your stay at Nest Recovery includes 24/7 licensed nursing care. Our team will have your treatment plan in place by the time you arrive, and we&#39;ll make sure to strictly follow it. Whenever you need help, we are one button push away.</p>
                    <p>If recommended by your doctor, your care will be complemented with Sequential Compression Device and Oxygen Concentrator at no extra charge or IV at $50 per fluid bag.</p> </div>}
                variant={'section-gallery grid'}
                gallery={<div className={'section__gallery'}>
                    <SliderViewport   breakpoints={{
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
                    }} cardStyle={'card-nurses'}  push={false} items={img}/>
            </div>}
            />
            <Section
                container={false}
                title={<h2 className={'section__title'}>Hyperbaric oxygen therapy</h2>}
                text={<div className={'section__text'}>
                    <p>Upon the physician&#39;s recommendations, your treatment can be supplemented with hyperbaric chamber treatments.</p>
                    <p>Hyperbaric oxygen therapy involves breathing pure oxygen in a pressurized environment, increasing the amount of oxygen the lungs gather. Hyperbaric treatments reduce post-surgical bruising, swelling, and inflammation and accelerate healing.</p> </div>}
                variant={'section-therapy grid'}
                gallery={<div className={'section__gallery'}>
                    <div className={'card'}>
                        <div className={'card__image'}>
                            <Image src={testData.data.therapy[0].image.src} sizes="(max-width: 768px) 50vw, (max-width: 1399px) 75vw, 100vw"      style={{
                                maxWidth: '100%',
                                objectFit: "cover",
                                width: '100%',
                                height: '100%',
                            }} alt={''} width={testData.data.therapy[0].image.width} height={testData.data.therapy[0].image.height}/>
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
                        <Image src={testData.data.massage.image[0].image.src}  sizes="(max-width: 768px) 50vw, (max-width: 1399px) 75vw, 100vw"      style={{
                            maxWidth: '100%',
                            objectFit: "cover",
                            width: '100%',
                            height: '100%',
                        }} alt={''} width={testData.data.massage.image[0].image.width} height={testData.data.massage.image[0].image.height}/>

                </div>}
                variant={'section-gallery section-massage grid'}
            />

        </main>
  )
}
