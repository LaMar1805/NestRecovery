import Image from 'next/image'
import Section from "@/components/layout/Section";
import Link from "next/link";
import fallbackImg from "@/assets/images/lena.png";
import svgImg from "@/assets/svg/lena_kaminski.svg";
import ImageLoader from "@/components/ImageLoader";
import { Suspense } from "react";
import { Metadata } from "next";
import testData from "@/assets/testData.json";
import dynamic from "next/dynamic";

const ComponentC = dynamic(() => import('@/components/VideoPlayer/VideoPlayer'))
export const metadata: Metadata = {
    title: testData.data.meta.about.title,
    description: testData.data.meta.about.description,
    twitter: {
        title: testData.data.meta.about.title,
        images: [testData.data.meta.about.image.src]
    },
    openGraph: {
        title: testData.data.meta.about.title,
        description: testData.data.meta.about.description,
        url: new URL('https://www.nestrecovery.me'),
        siteName: 'Nest Recovery',
        images: [
            {
                alt: testData.data.meta.about.title,
                url: `${process.env.baseUrl}${testData.data.meta.about.image.src}`,
                height: testData.data.meta.about.image.height,
                width: testData.data.meta.about.image.width,
            }
        ],
        locale: 'en_US',
        type: 'website',
    },
}
export default function AboutPage() {
  return (
        <main className={'page-about'}>
            <Section
                variant={'section-screen'}
                container={false}
                title={<h1 className={'section__title'}>About Nest Recovery</h1>}
                gallery={<Suspense>
                <ComponentC  muted={false} auto={false} src={'https://vz-59c0616c-d60.b-cdn.net/288586aa-5453-4518-98b6-fad98f70d902/playlist.m3u8?v=1692319165'} />
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
