import { ReactNode } from "react";
interface CardProp {
	title?: string
	description?: ReactNode | string
	image?: ReactNode
	style?: string
}
const CardImage = ({title, description, image, style = ''}:CardProp) => {
	return (
		<div className={`card ${style}`}>
			<div className={'card__image'}>{image}</div>
			{title && <h3 className={'card__title'} style={{zIndex: 30}}>{title}</h3>}
			{description && <div className={'card__description'}>{description}</div>}
		</div>
	)
}
export default CardImage
