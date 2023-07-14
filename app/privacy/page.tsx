import Section from "@/components/layout/Section";
import testData from "@/assets/testData.json"
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
