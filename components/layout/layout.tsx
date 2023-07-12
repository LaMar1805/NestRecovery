import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Layout = ({
	children,
}: {
	children: React.ReactNode
}) => {
	return (
		<>
		<Header/>
		{/*// <div className={'grid'}>*/}
			{children}
		<Footer/>
		</>
	)
}
export default Layout
