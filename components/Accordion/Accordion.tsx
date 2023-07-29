'use client'
import { EventHandler, ReactElement, ReactNode, useState } from "react";
import { AccordionText, AccordionTitle } from "@/components/Accordion/AccordionTitle";

export const AccordionList = ({items, itemStyle = "", state = -1} : {itemStyle?: string, state?: number, obj?:boolean, items: {
	title?: string
	rows?: string | string[] | TrustedHTML | {
		title?: string
		text?: string
	}[]
	text?: string | TrustedHTML | {
		title?: string
		text?: string
	}[]
	}[]}) => {
	const [collapsed, setCollapse] = useState(state);
	const handleState = (index:number) => {
		let cur = collapsed === index ? -1 : index;
		setCollapse(cur);
	};
	return (
		<div className={`accordion`}>
			{items.map((item, index) => <Accordion style={itemStyle} action={() => handleState(index)} text={item.text} title={item.title} rows={item.rows} key={index} collapsed={collapsed === index} /> )}
		</div>
	)
};

const Accordion = ({title, style = "", rows, text, action, collapsed } :{title?:string, style?:string, text?: string | TrustedHTML, rows?: string | TrustedHTML | ReactElement | ReactNode,  collapsed: boolean, action: EventHandler<any>}) => {
	return (
		<div className={`accordion__item ${ collapsed ? 'expanded' : ''} ${ style }`}>
			<AccordionTitle title={title} action={action}/>
			<AccordionText text={text} obj={rows} />
		</div>
	)
}
export default AccordionList
