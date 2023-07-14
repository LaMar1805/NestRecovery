import '@/assets/styles/styles.scss'
import type { Metadata } from 'next'
import {font} from "@/assets/fonts/fonts";
import Layout from "@/components/layout/layout";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    template: '%s | Nest Recovery',
    default: 'Nest Recovery', // a default is required when creating a template
  },
  metadataBase: new URL('https://www.nestrecovery.me/'),
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-X7K6VG59EG" />


        <Script id="gtag-google" dangerouslySetInnerHTML={{__html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-X7K6VG59EG');`}}/>

        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
