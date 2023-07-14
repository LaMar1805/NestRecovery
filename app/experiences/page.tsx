import Image from 'next/image'
import Section from "@/components/layout/Section";
import Slider from "@/components/Slider/Slider";
import slideImg from "@/assets/images/exp/screen.png"
import slideImg2 from "@/assets/images/exp/exp_sl_6.png"
import slideImg3 from "@/assets/images/exp/exp_sl_7.png";
import imgIn from "@/assets/images/exp/exp_sl_8.png";
import imgIn2 from "@/assets/images/exp/innercircle.png";
import imgIn3 from "@/assets/images/exp/exp_sl_9.png";
import imgRec from "@/assets/images/exp/recovery.png";
import imgRec2 from "@/assets/images/exp/recovery_2.png";

import chef from "@/assets/images/exp/chef_1.png"
import SliderViewport from "@/components/Slider/SliderViewport";

export default function ExperiencesPage() {

    const images = [slideImg,slideImg2,slideImg3];
    const imgs = [imgIn, imgIn2, imgIn3];
    const imgrs = [imgRec, imgRec2];
    const screenSlider = images.map((item, index) => <Image key={index}    placeholder="blur" priority={true}  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"      style={{
        maxWidth: '100%',
        objectFit: "cover",
        width: '100%',
        height: '100%',
    }} src={item} alt={''}/> );
    const imgt = imgs.map((item, index) => <Image key={index} sizes="(max-width: 768px) 50vw, (max-width: 1399px) 75vw, 100vw"      style={{
        maxWidth: '100%',
        objectFit: "cover",
        width: '100%',
        height: '100%',
    }}  src={item} alt={''}/> );
    const imgr = imgrs.map((item, index) => <Image key={index} sizes="(max-width: 768px) 50vw, (max-width: 1399px) 75vw, 100vw"      style={{
        maxWidth: '100%',
        objectFit: "cover",
        width: '100%',
        height: '100%',
    }} src={item} alt={''}/> );

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
                }} items={screenSlider} perView={1} spaceBetween={0}/>}
            />

            <Section
                container={false}
                title={<h2 className={'section__title'}>Recovery indulgence: serene bliss</h2>}
                text={<div className={'section__text'}>
                    <p>Experience the ultimate serenity of a retreat at our facility during the crucial days after your surgery. Relax in the tranquillity of your room, enjoying a wide variety of cable TV and streaming services, along with delectable food that caters to your post-op needs. Our rooms offer spacious patios or terraces, with some featuring expansive decks and stunning canyon views, perfect for embracing the beauty of nature. Discover solace, comfort, and inspiration in our retreat-like setting as you embark on your healing journey.</p>
                </div>}
                variant={'section-gallery grid'}
                gallery={<div className={'section__gallery'}>
                    <SliderViewport cardStyle={'card-exp-recovery'} breakpoints={{
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
                    }} push={false} items={imgr}/>
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
                    <Slider items={[...imgt, ...imgt,...imgt]} navigation={true} breakpoints={{
                        // when window width is >= 320px
                        320: {
                            loop: true,
                            slidesPerView: 1,
                            spaceBetween: 0,
                            navigation: false
                        },


                        1200: {
                            loop: true,
                            slidesPerView: 3,
                            spaceBetween: 60,
                            freeMode: false,
                            pagination: false,
                            centeredSlides: false
                        }
                    }} />
                    </div>
            </div>}
            />

            <Section
                container={false}
                title={<h2 className={'section__title'}>Culinary mastery: <span>Chef Jordan Grandviergne</span></h2>}
                text={<div className={'section__text'}>
                    <p>If you are feeling up to social interactions, Nest Recovery is uniquely equipped to accommodate you. Our boutique facility, with only 5 rooms, creates an intimate setting for individuals on their post-op healing journey. Our spacious lounge and dining area with their stunning views provide a serene backdrop for socializing. Guests can relax on the deck with a swimming pool overlooking the canyon, enjoy refreshing drinks from our juice bar, or engage in a friendly pool table game.</p>
                    <span className={'rateString'}>Rate: $250/class + $50/person + groceries</span>
                    <div className={''}>Contact us to book ahead.</div>
                </div>}
                variant={'section-gallery section-chef grid'}
                gallery={                    <div className={'section__gallery'}>
                    <Image src={chef} sizes="(max-width: 768px) 50vw, (max-width: 1399px) 75vw, 100vw"      style={{
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
