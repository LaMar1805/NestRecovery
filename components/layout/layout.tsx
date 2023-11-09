import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import React from "react";
import Script from "next/script";
import { Analytics } from '@vercel/analytics/react';

const Layout = ({
	children,
}: {
	children: React.ReactNode}) => {

	const envDev = process.env.NODE_ENV !== "development"
	return (
		<>
			{envDev && (<>
			<Script src="https://www.googletagmanager.com/gtag/js?id=G-X7K6VG59EG" />
			<Script strategy={"afterInteractive"} id={'clarity'}
					dangerouslySetInnerHTML={{ __html:`
					  (function(c,l,a,r,i,t,y){
					c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
					t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
					y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
				})(window, document, "clarity", "script", "jnlf1ol7be");`}}
			/>
			<Script id="gtag-google" dangerouslySetInnerHTML={{__html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-X7K6VG59EG');`}}/></>)}
		<Header/>
			{children}
		<Footer/>
			{envDev && (	<Analytics />)}
		</>
	)
}
export default Layout
