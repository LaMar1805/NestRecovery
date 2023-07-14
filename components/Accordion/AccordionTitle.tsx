
import { EventHandler } from "react";
import { ArrowASvg} from "@/components/Icons";

export const AccordionTitle = ({title, action} : {title: string, action: EventHandler<any> }) => {
	return <div className={"accordion__title"}>
		<h3 onClick={action}>{title}<ArrowASvg/> </h3>
	</div>;
}
export const AccordionText = ({text} : { text: string | TrustedHTML }) => {
	return <div className={'accordion__text'} dangerouslySetInnerHTML={{__html: text}} />;
}
