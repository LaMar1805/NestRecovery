import Section from "@/components/layout/Section";
import Slider from "@/components/Slider/Slider";
import slideImg from "@/public/images/exp/screen@2x.png"
import slideImg2 from "@/public/images/exp/exp_sl_6@2x.png"
import slideImg3 from "@/public/images/exp/exp_sl_7@2x.png"
import slideMobImg from "@/public/images/exp/screen-mobile@2x.png"
import slideMobImg2 from "@/public/images/exp/exp_sl_6-mobile@2x.png"
import slideMobImg3 from "@/public/images/exp/exp_sl_7-mobile@2x.png"

import testData from "@/assets/testData.json"
import imgIn from "@/assets/images/exp/exp_sl_8@2x.png";
import imgIn2 from "@/assets/images/exp/innercircle@2x.png";
import imgIn3 from "@/assets/images/exp/exp_sl_9@2x.png";
import imgRec from "@/assets/images/exp/recovery@2x.png";
import imgRec2 from "@/assets/images/exp/recovery_2@2x.png";
import chef from "@/assets/images/exp/chef_1@2x.png"
import ImageLoader from "@/components/ImageLoader";
import { cookies } from "next/headers";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: testData.data.meta.experiences.title,
    description: testData.data.meta.experiences.description,
    twitter: {
        title: testData.data.meta.experiences.title,
        images: [testData.data.meta.experiences.image.src]
    },
    openGraph: {
        title: testData.data.meta.experiences.title,
        description: testData.data.meta.experiences.description,
        url: new URL('https://www.nestrecovery.me'),
        siteName: 'Nest Recovery',
        images: [
            {
                alt: testData.data.meta.experiences.title,
                url: `${process.env.baseUrl}${testData.data.meta.experiences.image.src}`,
                height: testData.data.meta.experiences.image.height,
                width: testData.data.meta.experiences.image.width,
            }
        ],
        locale: 'en_US',
        type: 'website',
    },
}
export default function ExperiencesPage() {

    const images = [slideImg,slideImg2,slideImg3];
    const imagesMob = [slideMobImg,slideMobImg2,slideMobImg3];
    const imgs = [imgIn, imgIn2, imgIn3];
    const imgrs = [imgRec, imgRec2];
    const cookieStore = cookies()
    const device = cookieStore.get('device');

  return (
        <main className={'page-experiences'}>
            <Section
                variant={'section-screen'}
                container={false}
                title={<>
                    <h1 className={'section__title'}>Nest recovery experiences</h1>
                    <p  className={'section__subtitle'}>Whether you prefer to heal discreetly in the tranquillity of your accommodations or are feeling more social, we&#39;ve got you covered.</p>
            </>}
                gallery={<Slider autoplay={{
                    delay: 20000,
                    disableOnInteraction: false,
                }} items={device?.value !== 'mobile' ? images: imagesMob}  perView={1} spaceBetween={0}/>}
            />

            <Section
                container={false}
                title={<h2 className={'section__title'}>Recovery indulgence: serene bliss</h2>}
                text={<div className={'section__text'}>
                    <p>Experience the ultimate serenity of a retreat at our facility during the crucial days after your surgery. Relax in the tranquillity of your room, enjoying the delectable food that caters to your post-op needs. Our rooms offer spacious patios or terraces, with some featuring expansive decks and stunning canyon views, perfect for embracing the beauty of nature. Discover solace, comfort, and inspiration in our retreat-like setting as you embark on your healing journey.</p>
                </div>}
                variant={'section-gallery grid'}
                gallery={<div className={'section__gallery'}>
                    <Slider breakpoints={{
                        // when window width is >= 320px
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                            navigation: true
                        },
                        1200: {
                            loop: true,
                            slidesPerView: 2,
                            spaceBetween: 40,
                            pagination: false,
                            centeredSlides: false
                        }
                    }} items={imgrs} itemsMob={imgrs} />
            </div>}
            />
            <Section
                container={false}
                title={<h2 className={'section__title'}>Inner circle: heal together</h2>}
                text={<div className={'section__text'}>
                    <p>If you are feeling up to social interactions, Nest Recovery is uniquely equipped to accommodate you. Our boutique facility, with only 5 rooms, creates an intimate setting for individuals on their post-op healing journey. Our spacious lounge and dining area with their stunning views provide a serene backdrop for socializing. Guests can relax on the deck with a swimming pool overlooking the canyon, enjoy refreshing drinks from our juice bar, or engage in a friendly pool table game.</p>
                </div>}
                variant={'section-gallery section-innercircle grid'}
                gallery={<div className={'section__gallery_wrapper'}>
                    <div className={'section__gallery'}>
                    <Slider items={[...imgs, ...imgs,...imgs]} itemsMob={[...imgs, ...imgs,...imgs]} navigation={true} style={{

                    }} breakpoints={{
                        // when window width is >= 320px

                        320: {
                            loop: true,
                            slidesPerView: 1,
                            spaceBetween: 20,
                            navigation: false
                        },
                        720: {
                            loop: false,
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        1200: {
                            loop: false,
                            slidesPerView: "auto",
                            spaceBetween: 40,
                            freeMode: false,
                            pagination: false,
                            width: 460,
                            height: 350,
                            centeredSlides: false
                        }
                    }} />
                    </div>
            </div>}
            />

            <Section
                container={false}
                hashTag={'cheftag'}
                title={<h2 className={'section__title'}>Culinary mastery: <span>Chef Jordan Grandviergne</span></h2>}
                text={<div className={'section__text'}>
                    <p>Enhance your healing journey and have fun along the way with our exclusive cooking classes led by renowned Chef Jordan Grandviergne. Jordan trained under Michelin Star Chefs Paul Bocuse and Joseph Viola and refined his unique style while working in acclaimed restaurants worldwide, including The Beverly Hills Hotel. Immerse yourself in the art of gastronomy as Chef Jordan Grandviergne shares his expertise and passion. </p>
                    <span className={'rateString'}>Rate: $150/person + groceries</span>
                    <div className={''}>Check our weekly event schedule at your bedside.</div>
                </div>}
                variant={'section-gallery section-chef grid'}
                gallery={                    <div className={'section__gallery'}>
                    <ImageLoader src={chef}  srcMobile={chef}  style={{
                        maxWidth: '100%',
                        objectFit: "cover",
                        width: '100%',
                        height: '100%',
                    }} alt={''}/>
                </div>}
            />
        </main>
  )
}
