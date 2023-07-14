import React from "react";
import { BeverlyHills,  LogoSvg, NestRecovery } from "@/components/Icons";
import HeaderNavbar from "@/components/layout/Navbar";
import Link from "next/link";

const Header = () => {

	return (
		<header className={'layout-header grid'}>
			<div className={'container'}>
				<HeaderNavbar >
					<div className={"layout-header__logo"}>
						<Link href={'/'}><LogoSvg/></Link>
					</div>
					<div className={'textStyled left'}>
						<Link href={'/'}><NestRecovery/></Link>
					</div>
					<div className={'textStyled right'}>
						<Link href={'/'}><BeverlyHills/></Link>
					</div>
				</HeaderNavbar>
			</div>
		</header>
	)
}
export default Header
