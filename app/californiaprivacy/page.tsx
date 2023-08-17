import Section from "@/components/layout/Section";
import testData from "@/assets/testData.json"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: testData.data.meta.californy.title,
    description: testData.data.meta.californy.description,
    twitter: {
        title: testData.data.meta.californy.title,
        images: [testData.data.meta.californy.image.src]
    },
    openGraph: {
        title: testData.data.meta.californy.title,
        description: testData.data.meta.californy.description,
        url: new URL('https://www.nestrecovery.me'),
        siteName: 'Nest Recovery',
        images: [
            {
                alt: 'asdasd',
                url: `${process.env.baseUrl}${testData.data.meta.californy.image.src}`,
                height: testData.data.meta.californy.image.height,
                width: testData.data.meta.californy.image.width,
            }
        ],
        locale: 'en_US',
        type: 'website',
    },
}
export default function CaliforniaPrivacyPage() {

  return (
        <main className={'page-privacy'}>
            <Section
                variant={'section-content'}
                container={true}
                text={<div className={'section__text'} dangerouslySetInnerHTML={{__html: testData.data.privacy.california.textHtml}}/>}
            />

        </main>
  )
}
