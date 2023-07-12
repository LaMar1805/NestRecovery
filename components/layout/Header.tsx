import React from "react";
import { BeverlyHills,  LogoSvg, NestRecovery } from "@/components/Icons";
import HeaderNavbar from "@/components/layout/Navbar";

const Header = () => {

	return (
		<header className={'layout-header grid'}>
			<div className={'container'}>
				<HeaderNavbar >
					<div className={"layout-header__logo"}>
						<LogoSvg/>
					</div>
					<div className={'textStyled left'}>
						<NestRecovery/>
					</div>
					<div className={'textStyled right'}>
						<BeverlyHills/>
					</div>
				</HeaderNavbar>
			</div>
		</header>
	)
}
export default Header
