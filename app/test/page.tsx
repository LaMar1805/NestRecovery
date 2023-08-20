import Section from "@/components/layout/Section";
import React, { Suspense } from "react";
import slideImg from "@/public/images/index/Ofich2Dg1@2x.png"
import slideImg2 from "@/public/images/index/index_sl_1@2x.png"
import slideImg3 from "@/public/images/index/index_sl_2@2x.png"
import slideMobImg from "@/public/images/index/Ofich2Dg1-mobile@2x.png"
import slideMobImg2 from "@/public/images/index/index_sl_1-mobile@2x.png"
import slideMobImg3 from "@/public/images/index/index_sl_2-mobile@2x.png"
import Image from "next/image";
import imgVideo from "@/public/website_promo_6.png";

import dynamic from "next/dynamic";

const ComponentC = dynamic(() => import('@/components/VideoPlayer/VideoPlayer'), {ssr: false})
export default function TermsPage() {
    const cardsImages = [slideImg,slideImg2,slideImg3];
    const cardsMobImages = [slideMobImg,slideMobImg2,slideMobImg3];

    return (
        <main className={'page-index '}>
            <div style={{position:"relative", paddingTop: "56.25%"}}>
                <iframe src="https://iframe.mediadelivery.net/embed/147492/288586aa-5453-4518-98b6-fad98f70d902?autoplay=false&loop=false&muted=false&preload=true"
                    loading="lazy"
                    style={{border:"none", position:"absolute", top:0, height:"100%", width: "100%"}}
                    allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
                    allowFullScreen={true}></iframe>
            </div>
            <Section
                variant={'section-place grid'}
                container={false}
                title={<h2 className={'section__title'}>9653 Highridge Dr<strong>Beverly Hills, CA 90210</strong></h2>}
                text={<div className={'section__text'}><strong>10 minutes</strong> away from multiple top plastic surgery clinics in the LA area</div>}
                gallery={
                    <Suspense>
                        <ComponentC poster={<Image  style={{
                            zIndex: 4,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover"
                        }} src={imgVideo}
                            width={1280}
                            height={720}
                            alt={''} quality={10}/>}

                            title={'Breathtaking canyon views'}  btn={true} muted={true} auto={true} src={'https://vz-59c0616c-d60.b-cdn.net/7a653335-5206-4697-9f2e-29c2b4d6c6a8/playlist.m3u8?v=1692318995'} />
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


        </main>
  )
}
