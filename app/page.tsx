import Image from 'next/image'
import Section from "@/components/layout/Section";
import Link from "next/link";
import Slider from "@/components/Slider/Slider";
import testData from "@/assets/testData.json"
import slideImg from "@/assets/images/index/Ofich2Dg1@2x.png"
import slideImg2 from "@/assets/images/index/index_sl_1@2x.png"
import slideImg3 from "@/assets/images/index/index_sl_2@2x.png"
import contactImg from "@/assets/images/Still-3 1@2x.png"
import SliderViewport from "@/components/Slider/SliderViewport";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import { DefList } from "@/components/ui/Elements";

export default function Home() {

    const images = [slideImg,slideImg2,slideImg3];
    const screenSlider = images.map((item, index) => <Image key={index}  objectFit={"cover"} fill={true}   src={item} alt={''}/> )
    const img = testData.data.cardBenefits;

  return (
      <main className={'page-index'}>
            <Section
                variant={'section-screen'}
                container={false}
                links={<div className={'grid section__footer grid'}>
                            <h2 className={'section__footer_title'}>Post-surgery recovery in the heart of Beverly Hills</h2>
                            <Link href={'#'} className={'button button-big'}>Book</Link>
                        </div>}
                title={<h1 className={'section__title'}>Expert medical care in the comfort of a luxury retreat</h1>}
                gallery={<Slider autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}  items={screenSlider} perView={1} spaceBetween={0}/>}
            />

            <Section
                container
                variant={'section-gallery grid'}
                gallery={<SliderViewport  cardStyle={'card-benefit'} items={img}/>}
            />

            <Section
                variant={'section-place grid'}
                container={false}
                title={<h2 className={'section__title'}>9653 Highridge Dr<strong>Beverly Hills, CA 90210</strong></h2>}
                text={<div className={'section__text'}><strong>10 minutes</strong> away from multiple top plastic surgery clinics in the LA area</div>}
                gallery={<VideoPlayer title={'Breathtaking canyon views'} src={'/website_promo_6.mp4'}/>}
            />

            <Section
                variant={'section-contact'}
                title={<h2 className={'section__title'}>Contact Nest Recovery</h2>}
                text={<div className={'section__text'}>
                    <DefList key={'email'}  term={'Email'} text={<Link href={'mailto:info@nestrecovery.me'}>info@nestrecovery.me</Link>} />
                    <DefList   key={'Phone'}  term={'Phone'} text={<Link href={'tel:4242825171'} >(424)282-5171</Link>} />
                    <DefList  key={'Hours'}  term={'Hours'} text={'9 am - 6 pm, Mon-Sun'} />
                </div>}
                gallery={<div className={'section__image'}><Image alt={'Breathtaking canyon views'} src={contactImg}/></div>}
            />
        </main>
  )
}
