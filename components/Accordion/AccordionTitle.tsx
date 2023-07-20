
import { EventHandler } from "react";
import { ArrowASvg, ArrowSvg } from "@/components/Icons";
const ArrowCss = () =>   <span className={'arrow--l-r right'}><span/><span/><span/><span/><span/></span>

export const AccordionTitle = ({title, action} : {title: string, action: EventHandler<any> }) => {
	return <div className={"accordion__title"}>
		<h3 onClick={action}>{title}<ArrowCss/></h3>
	</div>;
}
export const AccordionText = ({text} : { text: string | TrustedHTML }) => {
	return <div className={'accordion__text'} dangerouslySetInnerHTML={{__html: text}} />;
}
