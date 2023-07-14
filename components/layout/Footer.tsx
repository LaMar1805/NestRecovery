import {  BeverlyHillsSmall } from "@/components/Icons";
import { Container } from "@/components/layout/Section";
import { Navbar } from "@/components/ui/Elements";
import testData from "@/assets/testData.json";
const Footer = () => {

	return (
		<footer className={'footer'}>
			<Container>
				<Navbar items={testData.data.footerMenuLinks.slice(0, 2)} />
				<Navbar items={[...testData.data.footerMenuLinks.slice(2,3), { text: <BeverlyHillsSmall key={'fdsfz'}/>}]} />
			</Container>
		</footer>
	)
}
export default Footer
