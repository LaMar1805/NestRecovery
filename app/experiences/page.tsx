import Image from 'next/image'
import Section from "@/components/layout/Section";
import Slider from "@/components/Slider/Slider";
import testData from "@/assets/testData.json"
import slideImg from "@/assets/images/exp/screen@2x.png"
import slideImg2 from "@/assets/images/exp/exp_sl_6@2x.png"
import slideImg3 from "@/assets/images/exp/exp_sl_7@2x.png";
import chef from "@/assets/images/exp/chef_1@2x.png"
import SliderViewport from "@/components/Slider/SliderViewport";

export default function ExperiencesPage() {

    const images = [slideImg,slideImg2,slideImg3];
    // const imgs = [recImg, recImg2];
    const screenSlider = images.map((item, index) => <Image key={index}  style={{ objectFit: "cover"}}  fill={true}   sizes="100vw" src={item} alt={''}/> );
    // const img = imgs.map((item, index) => <Image key={index}  src={item} alt={''}/> );

    const sectSlider = testData.data.innercircle.map((item, index) => <Image key={index}
        width={item.image.width}
        height={item.image.height}
        src={item.image.src} alt={''}/> );

    const img = testData.data.recovery;


  return (
        <main className={'page-experiences'}>
            <Section
                variant={'section-screen'}
                container={false}
                title={<>
                    <h1 className={'section__title'}>Nest recovery experiences</h1>
                    <p  className={'section__subtitle'}>Whether you prefer to heal discreetly in the tranquillity of your accommodations or are feeling more social, we&#39;ve got you covered.</p>
            </>}
                gallery={<Slider items={screenSlider} perView={1} spaceBetween={0}/>}
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
                    }} push={false} items={img}/>
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
                    <Slider items={sectSlider} navigation={true} breakpoints={{
                        // when window width is >= 320px
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                            navigation: false
                        },
                        1200: {
                            loop: true,
                            slidesPerView: 2,
                            spaceBetween: 60,
                            pagination: false,
                            centeredSlides: false
                        }
                    }} perView={4} />
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
                    <Image src={chef} alt={''}/>
                </div>}
            />
        </main>
  )
}
