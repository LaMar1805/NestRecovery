import Image from 'next/image'
import slideImg from "@/assets/images/index/Ofich2Dg1@2x.png"
import slideImg2 from "@/assets/images/index/Ofich2Dg1@2x.png"
import slideImg3 from "@/assets/images/index/Ofich2Dg1@2x.png"
import slideImg4 from "@/assets/images/index/index_sl_1@2x.png"
import slideImg5 from "@/assets/images/index/index_sl_2@2x.png"
import testData from "@/assets/testData.json"
import Section from "@/components/layout/Section";
import ImageLoader from "@/components/ImageLoader";
export default function AboutPage() {


  return (
        <main className={'page-about'}>
            <Section       container={false} title={<h2>first</h2>} gallery={
                <>
                <ImageLoader src={slideImg} alt={''}/>
                <Image src={slideImg} alt={''} quality={100}
                    placeholder="blur"
                    sizes="100vw"
                    fill={true}
                    style={{
                        // maxWidth: '100%',
                        objectFit: "cover",
                        // width: "auto",
                        // height: 'auto',
                    }}
                /></>}
            />
            <Section       container={false} title={<h2>second</h2>} gallery={
                <Image src={slideImg4} alt={''}   quality={90} placeholder="blur"
                    sizes="50vw"
                    style={{
                        maxWidth: '100%',
                        objectFit: "cover",
                        // width: "auto",
                        // height: '100%',
                    }}/>}
            />
            <Section title={<h2>third</h2>}
                container={false}
                gallery={
                <Image src={slideImg5} alt={''}  quality={90}  placeholder="blur"
                    sizes="33vw"
                    // style={{
                    //     maxWidth: '100%',
                    //     objectFit: "cover",
                    //     width: "auto",
                    //     height: '100%',
                    // }}
                    />}
            />

        </main>
  )
}
