import React from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface SectionProp {
	variant?: string
	container?: boolean
	title?: React.ReactElement | string
	gallery?: React.ReactElement | React.ReactNode | StaticImport
	links?: React.ReactElement
	text?: React.ReactElement | string
}
export const Container = ({children}:any) => <div className={'container'}>{children}</div>
const Section = ({variant, gallery, text, links, title, container = true}: SectionProp) => {
	return (
		<section className={`section ${variant}`}>
			{container ?
				<Container>
					{title}
					{text}
					{gallery}
					{links}
				</Container> :
				<>
					{title}
					{text}
					{gallery}
					{links}</>
			}
		</section>
	)
}
export default Section
