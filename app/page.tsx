import Image from 'next/image'
import Section from "@/components/layout/Section";
import Link from "next/link";
import Slider from "@/components/Slider/Slider";
import testData from "@/assets/testData.json"
import slideImg from "@/public/images/index/Ofich2Dg1@2x.png"
import slideImg2 from "@/public/images/index/index_sl_1@2x.png"
import slideImg3 from "@/public/images/index/index_sl_2@2x.png"
import slideMobImg from "@/public/images/index/Ofich2Dg1-mobile@2x.png"
import slideMobImg2 from "@/public/images/index/index_sl_1-mobile@2x.png"
import slideMobImg3 from "@/public/images/index/index_sl_2-mobile@2x.png"
import slideCardImg from "@/public/images/index/1@2x.png"
import slideCardImg2 from "@/public/images/index/2@2x.png"
import slideCardImg3 from "@/public/images/index/3@2x.png"
import contactImg from "@/assets/images/Still-3 1@2x.png"
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import { DefList } from "@/components/ui/Elements";
import CardImage from "@/components/Cards/CardImage";
import React from "react";
import { Metadata } from "next";
import ImageLoader from "@/components/ImageLoader";
import imgVideo from "@/public/website_promo_6.png";
import { FallBackImgSvg } from "@/components/Icons";

export const metadata: Metadata = {
    title: 'EXPERT MEDICAL CARE IN THE COMFORT OF A LUXURY RETREAT',
    description: '',
    twitter: {
        title: "EXPERT MEDICAL CARE IN THE COMFORT OF A LUXURY RETREAT",
        images: [slideCardImg3.src, slideCardImg2.src, slideCardImg.src]
    },

    openGraph: {
        title: 'EXPERT MEDICAL CARE IN THE COMFORT OF A LUXURY RETREAT',
        description: '',
        url: new URL('https://www.nestrecovery.me'),
        siteName: 'Nest Recovery',
        // videos: [
        //     {
        //         url:`${process.env.baseUrl}/website_promo_6.mp4`,
        //         height: 720,
        //         width: 1280,
        //         type: 'video/mp4'
        //     }
        // ],
        // images: [
        //     {
        //         alt: 'asdasd',
        //         url: `${process.env.baseUrl}/_next/static/media/Ofich2Dg1.d322e2ca@2x.png`,
        //         height: 412,
        //         width: 1400,
        //     },
        //     {
        //         url: `${process.env.baseUrl}/_next/static/media/index_sl_1.55a7db97@2x.png`,
        //         height: 412,
        //         width: 1400,
        //     },
        //     {
        //         url: `${process.env.baseUrl}/_next/static/media/index_sl_2.ae2c9303@2x.png`,
        //         height: 412,
        //         width: 1400,
        //
        //     }
        // ],
        locale: 'en_US',
        type: 'website',
    },
}
export default function Home() {
    const imagesImages = [slideImg,slideImg2,slideImg3];
    const imagesMobImages = [slideMobImg,slideMobImg2,slideMobImg3];
    const cardsImages = [slideCardImg,slideCardImg2,slideCardImg3];

    const ar = cardsImages.map((item, index) => <CardImage href={testData.data.cardBenefits[index].link} style={'card-benefit'} title={testData.data.cardBenefits[index].title} description={testData.data.cardBenefits[index].description} key={index+100}
        image={item} />);
    ar.push(<CardImage  image={""} style={'card-benefit'} svg={<FallBackImgSvg />} key={123}/>);
    console.log(ar)
  return (
      <main className={'page-index'}>
            <Section
                variant={'section-screen'}
                container={false}
                links={<div className={'grid section__footer grid'}>
                            <h2 className={'section__footer_title'}>Post-surgery recovery in the heart of Beverly Hills</h2>
                            <Link href={'https://hotels.cloudbeds.com/reservation/y3Nqxi'} className={'button button-big'}>Book</Link>
                        </div>}
                title={<h1 className={'section__title'}>Expert medical care in the comfort of a luxury retreat</h1>}
                gallery={<div className={'section__gallery'}>
                    <Slider element={true} autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}  items={imagesImages} itemsMob={imagesMobImages} perView={1} spaceBetween={0}/>
                    </div>}
            />

            <Section
                container={false}
                variant={'section-gallery grid'}
                gallery={<div className={'section__gallery'}>
                    <Slider element={false} items={ar} itemsMob={ar} breakpoints={{320: {
                        loop: true,
                        slidesPerView: 1,
                        spaceBetween: 20,
                        navigation: false
                    },
                    720: {
                        loop: false,
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },

                    1200: {
                        loop: false,
                        slidesPerView: 4,
                        spaceBetween: 40,
                        freeMode: false,
                        pagination: false,

                        centeredSlides: false
                    }}} />
            </div>}
            />

            <Section
                variant={'section-place grid'}
                container={false}
                title={<h2 className={'section__title'}>9653 Highridge Dr<strong>Beverly Hills, CA 90210</strong></h2>}
                text={<div className={'section__text'}><strong>10 minutes</strong> away from multiple top plastic surgery clinics in the LA area</div>}
                gallery={
                    <VideoPlayer muted={true}  poster={<Image  style={{
                        zIndex: 4,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                    }} src={imgVideo}
                        width={1280}
                        height={720}
                        alt={''} quality={10}/>}   title={'Breathtaking canyon views'} src={'/website_promo_6.mp4'} />
               }
            />

            <Section
                variant={'section-contact'}
                hashTag={'contactpage'}
                title={<h2 className={'section__title'}>Contact Nest Recovery</h2>}
                text={<div className={'section__text'}>
                    <DefList key={'email'}  term={'Email'} text={<Link href={'mailto:info@nestrecovery.me'}>info@nestrecovery.me</Link>} />
                    <DefList   key={'Phone'}  term={'Phone'} text={<Link href={'tel:4242825171'} >(424)282-5171</Link>} />
                    <DefList  key={'Hours'}  term={'Hours'} text={<>9 am - 6 pm, Mon<span>-</span>Sun</>} />
                </div>}
                gallery={
                <div className={'section__image'}>
                    <ImageLoader
                        alt={'Breathtaking canyon views'}
                        src={contactImg} srcMobile={contactImg}/>
                </div>}
            />
        </main>
  )
}
