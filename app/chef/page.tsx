import Image from 'next/image'
import Section from "@/components/layout/Section";
import Link from "next/link";
import Slider from "@/components/Slider/Slider";
import slideImg from "@/public/images/chef/slider@2x.png"
import slideImg2 from "@/public/images/chef/slider_2@2x.png"
import slideImg3 from "@/public/images/chef/slider_3@2x.png"
import slideMobImg from "@/public/images/chef/slider-mobile@2x.png"
import slideMobImg2 from "@/public/images/chef/slider_2-mobile@2x.png"
import slideMobImg3 from "@/public/images/chef/slider_3-mobile@2x.png"


import sectImg from "@/assets/images/chef/chef_2_1@2x.png"
import sectImg2 from "@/assets/images/chef/chef_2_2@2x.png"
import sectImg3 from "@/assets/images/chef/chef_2_3@2x.png"
import fallbackImg from "@/assets/images/chef/chefj@2x.png";
import svgImg from "@/assets/svg/jordan_grandviergne.svg";
import CardImage from "@/components/Cards/CardImage";
import React from "react";
import ImageLoader from "@/components/ImageLoader";

export default function ChefPage() {

    const images = [slideImg,slideImg2,slideImg3];
    const imagesMob = [slideMobImg,slideMobImg2,slideMobImg3];

    const cardsImages = [sectImg,sectImg2,sectImg3];

    const img = cardsImages.map((item, index) => <CardImage style={'card-nurses'} 	key={index+100}
        image={item}/>)
  return (
        <main className={'page-chef'}>
            <Section
                variant={'section-screen'}
                container={false}
                title={<>
                    <h1 className={'section__title'}>La Haute Cuisine</h1>
                    <p  className={'section__subtitle'}>The ultimate French experience created by Chef Jordan Grandviergne</p>
            </>}
                gallery={<Slider autoplay={{
                    delay: 20000,
                    disableOnInteraction: false,
                }} style={{
                    // maxWidth: '100%',
                    // objectFit: "",
                    // width: '100%',
                }} items={images}  itemsMob={imagesMob} spaceBetween={10}/>}
            />
            <Section
                container={false}
                links={<div className={'section__footer'}>
                    <Link href={'/experiences/#cheftag'}  className={'button button-big'}>Explore classes</Link>
                </div>}
                text={<div className={'section__text'}>
                    <p>Originally from Lyon, France, Jordan learned from French Michelin Star Chefs Paul Bocuse and Joseph Viola. After graduating best-in-class from Ecole de Cuisine Gourmets by Institut Paul Bocuse, Jordan further refined his unique style in the best restaurants of Macau, Shanghai and Jakarta and The Beverly Hills Hotel in the USA.</p>
                    <p>Working in close collaboration with leading experts in nutritional science, Chef Grandviergne was able to design for our guests a breakfast menu that is not just super-healthy and beneficial for post-op recovery but also elevated to the highest peaks of French haute cuisine. </p>
                    <p>For guests staying with us for longer periods of time, Jordan offers exclusive cooking classes, providing an opportunity to learn his culinary techniques and secrets firsthand.</p>
            </div>}
                variant={'section-chef grid'}
                gallery={<div className={'section__gallery'}>
                    <div className={'card'}>
                        <div className={'card__image'}>
                            <ImageLoader src={fallbackImg}  srcMobile={fallbackImg} style={{
                                maxWidth: '100%',
                                objectFit: "cover",
                                width: '100%',
                                height: '100%',
                            }}  alt={''}/>
                        </div>
                        <div className={'card__footer'}>
                            <Image src={svgImg} alt={''}/>
                        </div>
                    </div>
                </div>}
            />
            <Section
                container={false}
                text={<div className={'section__text'}>
                        <p>Situated amidst the vibrant culinary scene, Nest Recovery offers access to some of the world&apos;s finest restaurants. Indulge in a gastronomic journey, savoring the creations of renowned chefs and experiencing the epitome of culinary artistry.</p>
                        <p>Immerse yourself in the culinary wonders of Beverly Hills as you embark on your path to rejuvenation and renewal.</p>
                </div>}
                gallery={<div className={'section__gallery'}>
                    <Slider breakpoints={{
                        // when window width is >= 320px
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 0
                        },
                        720: {
                            loop: false,
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        // when window width is >= 480px
                        1400: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        }
                    }} element={false} items={img}/>
                </div>}
                variant={'section-gallery chef-two grid'}
            />
        </main>
  )
}
