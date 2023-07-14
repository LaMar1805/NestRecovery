import Link from 'next/link'
import Section from "@/components/layout/Section";

export default function NotFound() {
	return (
		<main className={'not-found'}>
			<Section title={<h1>404</h1>}
		text={<>
			<h2>Not Found</h2>
			<p>Could not find requested resource</p></>
	}
			links={		<p>
				View <Link href="/">Return to main page</Link>
			</p>}/>
		</main>
	)

}
