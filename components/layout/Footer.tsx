import { BeverlyHillsSmall } from "@/components/Icons";
import { Container } from "@/components/layout/Section";
import { Navbar } from "@/components/ui/Elements";
import testData from "@/assets/testData.json";
import Link from "next/link";
import React, { useId } from "react";

const Footer = () => {
	const id = useId();

			return (
		<footer className={'footer'}>
			<Container>
				<Navbar items={testData.data.footerMenuLinks.map((item) => item.link ? <Link className={"navbar__link"} key={id} href={item.link}>{item.text}</Link> : item.text).slice(0,4)} />
				<Navbar items={[...testData.data.footerMenuLinks.map((item) => item.link ? <Link className={"navbar__link"} key={id} href={item.link}>{item.text}</Link> : item.text).slice(4,6),  <BeverlyHillsSmall key={'1543254'}/>]} />

			</Container>
		</footer>
	)
}
export default Footer
