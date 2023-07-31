import Section from "@/components/layout/Section";
import React, { Suspense } from "react";
import slideImg from "@/public/images/index/Ofich2Dg1@2x.png"
import slideImg2 from "@/public/images/index/index_sl_1@2x.png"
import slideImg3 from "@/public/images/index/index_sl_2@2x.png"
import slideMobImg from "@/public/images/index/Ofich2Dg1-mobile@2x.png"
import slideMobImg2 from "@/public/images/index/index_sl_1-mobile@2x.png"
import slideMobImg3 from "@/public/images/index/index_sl_2-mobile@2x.png"
import Slider from "@/components/Slider/Slider";

export default function TermsPage() {
    const cardsImages = [slideImg,slideImg2,slideImg3];
    const cardsMobImages = [slideMobImg,slideMobImg2,slideMobImg3];

    return (
        <main className={'page-privacy'}>
            <Section
                variant={'section-content'}
                // container={true}
                gallery={<div className={'section__gallery'}>
                    <Slider autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}  items={cardsImages} itemsMob={cardsMobImages} perView={1} spaceBetween={0}/></div>}

            />

        </main>
  )
}
