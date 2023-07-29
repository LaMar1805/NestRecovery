import React from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface SectionProp {
	variant?: string
	container?: boolean
	title?: React.ReactElement | string
	gallery?: React.ReactElement | React.ReactNode | StaticImport
	links?: React.ReactElement
	hashTag?: string
	text?: React.ReactElement | string| React.ReactNode | StaticImport
	header?: React.ReactElement | string | React.ReactNode | StaticImport
	footer?: React.ReactElement | string | React.ReactNode | StaticImport
}
export const Container = ({children}:any) => <div className={'container'}>{children}</div>
const Section = ({header, footer, variant, gallery, text, links, title, container = true, hashTag}: SectionProp) => {
	return (
		<section className={`section ${variant} ${links ? 'with-footer' : ''}`} id={hashTag}>
			{container ?
				<Container>
					{header}
					{title}
					{text}
					{gallery}
					{links}
				</Container> :
				<>
					{title}
					{header}
					{text}
					{gallery}
					{links}</>
			}
		</section>
	)
}
export default Section
