import Image from 'next/image'
import Section from "@/components/layout/Section";
import Link from "next/link";
import fallbackImg from "@/assets/images/founder.jpg";
import svgImg from "@/assets/svg/lena_kaminski.svg";
import ImageLoader from "@/components/ImageLoader";
import VideoPlayerC from "@/components/VideoPlayer/VideoPlayer";
import { Suspense } from "react";

export default function AboutPage() {
  return (
        <main className={'page-about'}>
            <Section
                variant={'section-screen'}
                container={false}
                title={<h1 className={'section__title'}>About Nest Recovery</h1>}
                gallery={<Suspense>
                <VideoPlayerC poster={<Image priority={true} style={{
                    zIndex: 4,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"}}   alt={''} quality={10} width={1920} height={1080} src={'https://res.cloudinary.com/dpiuthi6q/image/upload/v1691528179/nest/viid/3460624ebb3ebd9ee29616fd1da4fbda.jpg'}/>} auto={false} src={'https://vz-e4c6a631-24a.b-cdn.net/d63ce74f-f167-499e-94ca-d6ef72d71de6/playlist.m3u8?v=1691622133'} />
                </Suspense>}
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
                links={<div className={'section__footer'}>
                    <Link href={'/what-to-expect'} className={'button button-big'}>Learn more</Link>
                </div>}
                text={<div className={'section__text'}>
                    <p>Lena Kaminski, RN, is a highly skilled director of nursing with a focus on plastic surgery. With 10+ years of experience in the field, Lena has established herself as a leader in her profession, known for her expertise, dedication, and compassionate patient care. Her calm and reassuring demeanor helps to put patients at ease, while her attention to detail and commitment to safety ensure that each patient experiences the highest level of care.</p>
                    <p>Lena graduated from West Coast University with a Bachelor of Science in Nursing, completed extensive training in plastic surgery nursing, and earned certification as a Plastic Surgery Nurse.</p> </div>}
                variant={'section-meet-the-founder grid'}
                gallery={<div className={'section__gallery'}>
                    <div className={'card'}>
                        <div className={'card__image'}>
                            <ImageLoader
                            //     style={{
                            //     maxWidth: '100%',
                            //     objectFit: "cover",
                            //     width: '100%',
                            //     height: '100%',
                            // }}
                                src={fallbackImg} srcMobile={fallbackImg} alt={''}/>
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
