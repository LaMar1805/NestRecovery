import React from "react";
import Link from "next/link";
import { ArrowSvg } from "@/components/Icons";
export const DefList = ({term, text}:{term: string, text: string | React.ReactElement}) => {
	return (
	<dl className={'def_list'}>
		<dt>{term}</dt>
		<dd>{text}</dd>
	</dl>
	)
}
export const Arrow = ({style = '', action} : {style?: string, action?: any}) => <a className={`arrow ${style}`} onClick={action}><ArrowSvg /></a>

export function Navbar({items, style = ''}:{
	style?: string
	items: {
		text: string | React.ReactElement | React.ReactNode
		link?: string
	}[]
}) {
	return (
		<ul className={"navbar " + style}>
			{items.map((item, index) =>
				item.link ? ( <li key={index}><Link className={"navbar__link"} href={item.link}>{item.text}</Link></li>) : <li className={"navbar__text"} key={index}>{item.text} </li>
			)}
		</ul>);
}

