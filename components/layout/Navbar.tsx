'use client'
import { ReactElement, ReactNode, useEffect, useState } from "react";
import { BurgerClosedSvg, BurgerSvg } from "@/components/Icons";
import { Navbar } from "@/components/ui/Elements";
import testData from "@/assets/testData.json";
import useWindowDimensions from "@/components/utils";
import { undefined } from "zod";
export default function HeaderNavbar({children}:{children: ReactNode | ReactElement | undefined}) {

	const {width} = useWindowDimensions();
	const [open, setOpen] = useState(false);
	const [desktop, setDesktop] = useState(false);
	const [animate, setAnimate] = useState(false);
	const handleBurger = () => {
		!desktop && setOpen(pervState => !pervState);
		if (!animate) {
			setAnimate(() => true);
		} else {
			setAnimate(false);
		}
	}
	useEffect(() => {
		if(width && width > 1080) {
			setDesktop(true);
		} else {
			setDesktop(false);
		}
	},[width]);

	const Burger = () => <a className={'burger'} onClick={handleBurger}>{!open ? <BurgerSvg /> : <BurgerClosedSvg />}</a>;
	return desktop ?
		<>
			<Navbar style={''} items={testData.data.menuLinks.slice(0, 3)}/>
			{children}
			<Navbar style={''} items={testData.data.menuLinks.slice(3, 6)}/>
		</> : <>
			<div className={`logoMobile header__menu ${!animate ? 'animate__scale_out' : 'animate__scale_in'}`}>{open && <Navbar style={''} items={testData.data.menuLinks}/>}</div>

			<div className={`logoMobile ${animate ? 'animate__scale_out' : 'animate__scale_in'}`}>{children}</div>

		<Burger />
	</>;
}
