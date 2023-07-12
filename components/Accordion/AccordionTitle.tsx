import { Arrow } from "@/components/ui/Elements";
import { EventHandler } from "react";
import { ArrowASvg, ArrowSvg } from "@/components/Icons";
const AccordionArrow = (state:boolean) => <a className={`accordion__arrow ${state ? 'exp' : ''}`}> <ArrowSvg/></a>;
export const AccordionTitle = ({title, action} : {title: string, action: EventHandler<any> }) => {
	return <div className={"accordion__title"}>
		<h3 onClick={action}>{title} </h3><ArrowASvg/>
	</div>;
}
export const AccordionText = ({text} : { text: string | TrustedHTML }) => {
	return <div className={'accordion__text'} dangerouslySetInnerHTML={{__html: text}} />;
}
