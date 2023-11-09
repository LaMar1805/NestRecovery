import Section from "@/components/layout/Section";
import Link from "next/link";
import testData from "@/assets/testData.json"
import AccordionList from "@/components/Accordion/Accordion";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: testData.data.meta.faq.title,
    description: testData.data.meta.faq.description,
    twitter: {
        title: testData.data.meta.faq.title,
        images: [testData.data.meta.faq.image.src]
    },
    openGraph: {
        title: testData.data.meta.faq.title,
        description: testData.data.meta.faq.description,
        url: new URL('https://www.nestrecovery.me'),
        siteName: 'Nest Recovery',
        images: [
            {
                alt: testData.data.meta.faq.title,
                url: `${process.env.baseUrl}${testData.data.meta.faq.image.src}`,
                height: testData.data.meta.faq.image.height,
                width: testData.data.meta.faq.image.width,
            }
        ],
        locale: 'en_US',
        type: 'website',
    },
}
export default function FaqPage() {

  return (
        <main className={'page-faq'}>
            <Section
                variant={'section-default'}
                container
                title={<h1 className={'section__title'}>FAQ</h1>}
                text={<div className={'section__text'}>
                    <p>Below are some of our most frequently asked questions and answers to them. If you have any additional questions, please do not hesitate to contact us.</p>
                    <Link href={'//#contactpage'} className={'button button-big'}>Contact</Link>
                </div>}
            />
            <Section
                variant={'section-content'}
                container={true}
                text={<div className={'section__text'}>
                    <AccordionList items={testData.data.accordion} /></div>}
                links={<div className={'section__links'}><Link href={'//#contactpage'} className={'button button-big button-contrast'}>Contact</Link></div> }
            />

        </main>
  )
}
