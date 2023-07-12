import Image from 'next/image'
import Section from "@/components/layout/Section";
import Link from "next/link";
import testData from "@/assets/testData.json";
import slideImg from "@/assets/images/care@2x.png";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import fallbackImg from "@/assets/images/fallback.png"
import svgImg from "@/assets/svg/lena_kaminski.svg"
export default function AboutPage() {

    const images = [slideImg,slideImg,slideImg];
    const img = testData.data.careNurses;

  return (
        <main className={'page-about'}>
            <Section
                variant={'section-screen'}
                container={false}
                title={<h1 className={'section__title'}>About Nest Recovery</h1>}
                gallery={<VideoPlayer src={'/about.mp4'} />}
            />

            <Section
                container={false}
                links={<div className={'section__filled'}>
                    <p>At Nest Recovery, we specialize in providing care for clients during those crucial first days after elective surgery, with a particular focus on plastic surgery recovery.</p></div> }
                text={<div className={'section__text'}>
                    <p>The post-surgery journey is a critical time requiring both expert care and a tranquil environment. We offer the perfect balance of world-class medical support and luxurious accommodations.</p>
                    <p>Our team of licensed medical professionals led by our founder and Director of Nursing Lena Kaminski is dedicated to streamlining the recovery process and alleviating the associated stress.</p> </div>}
                variant={'section-gallery about-nest grid'}
            />
            <Section
                container={false}
                title={<h2 className={'section__title'}>Meet <span>the Founder</span></h2>}
                links={<div className={'grid section__footer grid'}>
                    <Link href={'/what-to-expect'} className={'button button-big'}>Learn more</Link>
                </div>}
                text={<div className={'section__text'}>
                    <p>Lena Kaminski, RN, is a highly skilled director of nursing with a focus on plastic surgery. With 10+ years of experience in the field, Lena has established herself as a leader in her profession, known for her expertise, dedication, and compassionate patient care. Her calm and reassuring demeanor helps to put patients at ease, while her attention to detail and commitment to safety ensure that each patient experiences the highest level of care.</p>
                    <p>Lena graduated from West Coast University with a Bachelor of Science in Nursing, completed extensive training in plastic surgery nursing, and earned certification as a Plastic Surgery Nurse.</p> </div>}
                variant={'section-meet-the-founder grid'}
                gallery={<div className={'section__gallery'}>
                    <div className={'card'}>
                        <div className={'card__image'}>
                            <Image src={fallbackImg} alt={''}/>
                        </div>
                        <div className={'card__footer'}>
                                <Image src={svgImg} alt={''}/>
                                <p>Founder & Director of Nursing</p>
                        </div>
                    </div>
            </div>}
            />

        </main>
  )
}
