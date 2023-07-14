import React from "react";
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
	items:  React.ReactElement | React.ReactNode[] | string | any
}) {
	return (
		<ul className={"navbar " + style}>
			{items.map((item, index) =>
			<li className={"navbar__text"} key={index}>{item} </li>
			)}
		</ul>);
}

