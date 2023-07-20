import Section from "@/components/layout/Section";
import testData from "@/assets/testData.json"
import Loading from "@/app/loading";
export default function TermsPage() {

  return (
        <main className={'page-privacy'}>
            <Section
                variant={'section-content'}
                container={true}
                text={<Loading />}
            />

        </main>
  )
}
