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
import slideCardImg from "@/public/images/index/1.png"
import slideCardImg2 from "@/public/images/index/2.png"
import slideCardImg3 from "@/public/images/index/3.png"
import contactImg from "@/assets/images/Still-3 1@2x.png"
import { DefList } from "@/components/ui/Elements";
import CardImage from "@/components/Cards/CardImage";
import React, { Suspense } from "react";
import { Metadata } from "next";
import ImageLoader from "@/components/ImageLoader";
import { FallBackImgSvg } from "@/components/Icons";
import { cookies } from "next/headers";
import Image from "next/image";
import imgVideo from "@/public/website_promo_6.png"
import dynamic from "next/dynamic";

const ComponentC = dynamic(() => import('../components/VideoPlayer/VideoPlayer'), {ssr: false})
export const metadata: Metadata = {
    title: testData.data.meta.home.title,
    description: testData.data.meta.home.description,
    twitter: {
        title: testData.data.meta.home.title,
        images: [testData.data.meta.home.image.src]
    },
    openGraph: {
        title: testData.data.meta.home.title,
        description: testData.data.meta.home.description,
        url: new URL('https://www.nestrecovery.me'),
        siteName: 'Nest Recovery',
        images: [
            {
                alt: testData.data.meta.home.title,
                url: `${process.env.baseUrl}${testData.data.meta.home.image.src}`,
                height: testData.data.meta.home.image.height,
                width: testData.data.meta.home.image.width,
            }
        ],
        locale: 'en_US',
        type: 'website',
    },
}
export default function Home() {

    const cookieStore = cookies()
    const device = cookieStore.get('device');

    const imagesImages = [slideImg,slideImg2,slideImg3];
    const imagesMobImages = [slideMobImg,slideMobImg2,slideMobImg3];
    const cardsImages = [slideCardImg,slideCardImg2,slideCardImg3];

    const ar = cardsImages.map((item, index) => <CardImage href={testData.data.cardBenefits[index].link} style={'card-benefit'} title={testData.data.cardBenefits[index].title} description={testData.data.cardBenefits[index].description} key={index+100}
        image={item} />);
    ar.push(<CardImage  image={""} style={'card-benefit'} svg={<FallBackImgSvg />} key={123}/>);
    // console.log(ar)
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
                    <Suspense>
                    <Slider element={true} autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}  items={device?.value !== 'mobile' ? imagesImages: imagesMobImages}  perView={1} spaceBetween={0}/>
                    </Suspense></div>}
            />

            <Section
                container={false}
                variant={'section-gallery grid'}
                gallery={<div className={'section__gallery'}>
                    <Suspense>
                    <Slider element={false} items={ar} breakpoints={{320: {
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
                    }}} />    </Suspense>
            </div>}
            />

            <Section
                variant={'section-place grid'}
                container={false}
                title={<h2 className={'section__title'}>9653 Highridge Dr<strong>Beverly Hills, CA 90210</strong></h2>}
                text={<div className={'section__text'}><strong>10 minutes</strong> away from multiple top plastic surgery clinics in the LA area</div>}
                gallery={
                    <Suspense>
                        <ComponentC
                            poster={<Image  style={{
                                zIndex: 4,
                                width: "100%",
                                height: "100%",
                                objectFit: "cover"
                            }} src={imgVideo}
                                width={1280}
                                height={720}
                                alt={''} quality={10}/>}

                                title={'Breathtaking canyon views'}  btn={true} muted={true} auto={true} src={'/website_promo_6.mp4'} />
                    </Suspense>
                    // <VideoPlayer muted={true}  poster={<Image  style={{
                    //     zIndex: 4,
                    //     width: "100%",
                    //     height: "100%",
                    //     objectFit: "cover"
                    // }} src={imgVideo}
                    //     width={1280}
                    //     height={720}
                    //     alt={''} quality={10}/>}   title={'Breathtaking canyon views'} src={'/website_promo_6.mp4'} />
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
