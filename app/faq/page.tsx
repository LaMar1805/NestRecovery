import Image from 'next/image'
import Section from "@/components/layout/Section";
import Link from "next/link";
import Slider from "@/components/Slider/Slider";
import testData from "@/assets/testData.json"
import slideImg from "@/assets/images/chef/slider@2x.png"
import slideImg2 from "@/assets/images/chef/slider_2@2x.png"
import slideImg3 from "@/assets/images/chef/slider_3@2x.png"
import chef from "@/assets/images/exp/chef_1@2x.png"
import SliderViewport from "@/components/Slider/SliderViewport";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import { DefList } from "@/components/ui/Elements";
import { CareTherapySvg } from "@/components/Icons";
import CardImage from "@/components/Cards/CardImage";
import fallbackImg from "@/assets/images/chef/chefj@2x.png";
import svgImg from "@/assets/svg/jordan_grandviergne.svg";
import Accordion from "@/components/Accordion/Accordion";
import AccordionList from "@/components/Accordion/Accordion";

export default function FaqPage() {
    const images = [slideImg,slideImg2,slideImg3];
    const screenSlider = images.map((item, index) => <Image key={index}  objectFit={"cover"} fill={true}   sizes="100vw" src={item} alt={''}/> );
    const sectSlider = testData.data.innercircle.map((item, index) => <Image key={index}
        width={item.image.width}
        height={item.image.height}
        src={item.image.src} alt={''}/> );
    const img = testData.data.chef;

  return (
        <main className={'page-faq'}>
            <Section
                variant={'section-default'}
                container
                title={<h1 className={'section__title'}>FAQ</h1>}
                text={<div className={'section__text'}>
                    <p>Below are some of our most frequently asked questions and answers to them. If you have any additional questions, please do not hesitate to contact us.</p>
                    <Link href={'#'} className={'button button-big'}>Contact</Link>
                </div>}
            />
            <Section
                variant={'section-content'}
                container={true}
                text={<div className={'section__text'}><AccordionList items={testData.data.accordion} /></div>}
                links={<div className={'section__links'}><Link href={'#'} className={'button button-big button-contrast'}>Contact</Link></div> }
            />

        </main>
  )
}
