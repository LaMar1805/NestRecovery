import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import React from "react";
import Script from "next/script";
import { Analytics } from '@vercel/analytics/react';

const Layout = ({
	children,
}: {
	children: React.ReactNode
}) => {
	const envDev = process.env.NODE_ENV !== "development"
	return (
		<>
			{envDev && (<><Script src="https://www.googletagmanager.com/gtag/js?id=G-X7K6VG59EG" />

			<Script id="gtag-google" dangerouslySetInnerHTML={{__html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-X7K6VG59EG');`}}/></>)}
		<Header/>
			{children}
		<Footer/>
			<Analytics />
		</>
	)
}
export default Layout
