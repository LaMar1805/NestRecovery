'use client'
import { EventHandler,  useState } from "react";
import { AccordionText, AccordionTitle } from "@/components/Accordion/AccordionTitle";

export const AccordionList = ({items} : {items: {
	title: string
	text: string | TrustedHTML,
	}[]}) => {
	const [collapsed, setCollapse] = useState(-1);
	const handleState = (index:number) => {
		let cur = collapsed === index ? -1 : index;
		setCollapse(cur);
	};
	return (
		<div className={`accordion`}>
			{items.map((item, index) => <Accordion action={() => handleState(index)} text={item.text} title={item.title} key={index} collapsed={collapsed === index} /> )}
	</div>
	)
};

const Accordion = ({title, text, action, collapsed } :{title:string, text: string | TrustedHTML,  collapsed: boolean, action: EventHandler<any>}) => {
	return (
		<div className={`accordion__item ${ collapsed ? 'expanded' : ''}`}>
			<AccordionTitle title={title} action={action}/>
			<AccordionText text={text} />
		</div>
	)
}
export default AccordionList
