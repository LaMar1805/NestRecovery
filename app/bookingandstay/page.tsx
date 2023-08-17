import Section from "@/components/layout/Section";
import testData from "@/assets/testData.json"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: testData.data.meta.booking.title,
    description: testData.data.meta.booking.description,
    twitter: {
        title: testData.data.meta.booking.title,
        images: [testData.data.meta.booking.image.src]
    },
    openGraph: {
        title: testData.data.meta.booking.title,
        description: testData.data.meta.booking.description,
        url: new URL('https://www.nestrecovery.me'),
        siteName: 'Nest Recovery',
        images: [
            {
                alt: testData.data.meta.booking.title,
                url: `${process.env.baseUrl}${testData.data.meta.booking.image.src}`,
                height: testData.data.meta.booking.image.height,
                width: testData.data.meta.booking.image.width,
            }
        ],
        locale: 'en_US',
        type: 'website',
    },
}
export default function BookingAndStayPage() {

  return (
        <main className={'page-privacy'}>
            <Section
                variant={'section-content'}
                container={true}
                text={<div className={'section__text'} dangerouslySetInnerHTML={{__html: testData.data.privacy.booking.textHtml}}/>}
            />

        </main>
  )
}
