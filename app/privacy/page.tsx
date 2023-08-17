import Section from "@/components/layout/Section";
import testData from "@/assets/testData.json";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: testData.data.meta.privacy.title,
    description: testData.data.meta.privacy.description,
    twitter: {
        title: testData.data.meta.privacy.title,
        images: [testData.data.meta.privacy.image.src]
    },
    openGraph: {
        title: testData.data.meta.privacy.title,
        description: testData.data.meta.privacy.description,
        url: new URL('https://www.nestrecovery.me'),
        siteName: 'Nest Recovery',
        images: [
            {
                alt: 'asdasd',
                url: `${process.env.baseUrl}${testData.data.meta.privacy.image.src}`,
                height: testData.data.meta.privacy.image.height,
                width: testData.data.meta.privacy.image.width,
            }
        ],
        locale: 'en_US',
        type: 'website',
    },
}
export default function PrivacyPage() {

  return (
        <main className={'page-privacy'}>
            <Section
                variant={'section-content'}
                container={true}
                text={<div className={'section__text'} dangerouslySetInnerHTML={{__html: testData.data.privacy.policy.textHtml}}/>}
            />

        </main>
  )
}
