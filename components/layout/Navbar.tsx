'use client'
import React, { ReactElement, ReactNode, useEffect, useId, useState } from "react";
import { BurgerClosedSvg, BurgerSvg } from "@/components/Icons";
import { Navbar } from "@/components/ui/Elements";
import testData from "@/assets/testData.json";
import useWindowDimensions from "@/components/utils";
import Link from "next/link";
export default function HeaderNavbar({children}:{children: ReactNode | ReactElement | undefined}) {

	const {width} = useWindowDimensions();
	const [open, setOpen] = useState(false);
	const id = useId();
	const [animate, setAnimate] = useState(0);

	const handleBurger = () => {
		setOpen(prevState => !prevState);
		const domNode = document.querySelector('body');

		if (animate !== 1) {
			setAnimate(1);
		} else {
			setAnimate(2);
		}
		if(!open) {
			// @ts-ignore
			domNode.addEventListener('click', () => {
				setAnimate(2);
				setOpen(prevState => !prevState);
			},{once:true});
		}
	};
	useEffect(() => {
		setAnimate(0);
	}, [])
	const linkAr = testData.data.menuLinks.map((item) => <><Link className={"navbar__link"} key={id} onClick={() => (width && width > 1200) && handleBurger()} href={item.link}>{item.text}</Link>
		{item.submenu ? <Navbar style={'navbar__submenu'} items={item.submenu.map((item) => <Link className={"navbar__link navbar__link-submenu"} key={id} onClick={() => (width && width > 1200) && handleBurger()} href={item.link}>{item.text}</Link>)}/> : null}</>)
	const Burger = () => <a className={'burger'}  onClick={handleBurger}>{!open ? <BurgerSvg /> : <BurgerClosedSvg />}</a>;
	if(width && width > 1200) {
		return(
			<>
				<Navbar   style={''} items={linkAr.slice(0,3)}/>
				{children}
				<Navbar style={''} items={linkAr.slice(3, 6)}/>
				</>)
	} else return (
			<>
			<div className={`logoMobile header__menu ${animate === 0  ? '' : animate === 2 ? 'animate__scale_out' : 'animate__scale_in'}`}>
				{open && <Navbar style={''} items={linkAr}/>}</div>
			<div className={`logoMobile ${animate === 0  ? '' : animate === 1 ? 'animate__scale_out' : 'animate__scale_in'}`}>{children}</div>

		<Burger />
	</>);
}
