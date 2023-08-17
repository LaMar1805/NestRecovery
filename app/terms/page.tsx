import Section from "@/components/layout/Section";
import testData from "@/assets/testData.json";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: testData.data.meta.terms.title,
    description: testData.data.meta.terms.description,
    twitter: {
        title: testData.data.meta.terms.title,
        images: [testData.data.meta.terms.image.src]
    },
    openGraph: {
        title: testData.data.meta.terms.title,
        description: testData.data.meta.terms.description,
        url: new URL('https://www.nestrecovery.me'),
        siteName: 'Nest Recovery',
        images: [
            {
                alt: testData.data.meta.terms.title,
                url: `${process.env.baseUrl}${testData.data.meta.terms.image.src}`,
                height: testData.data.meta.terms.image.height,
                width: testData.data.meta.terms.image.width,
            }
        ],
        locale: 'en_US',
        type: 'website',
    },
}
export default function TermsPage() {

  return (
        <main className={'page-privacy'}>
            <Section
                variant={'section-content'}
                container={true}
                text={<div className={'section__text'} dangerouslySetInnerHTML={{__html: testData.data.privacy.terms.textHtml}}/>}
            />

        </main>
  )
}
