import '@/assets/styles/styles.scss'
import type { Metadata } from 'next'
import { font } from "@/assets/fonts/fonts";
import Layout from "@/components/layout/layout";
import { Suspense } from "react";
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
    <Script strategy={"afterInteractive"} id={'clarity'} type="text/javascript" dangerouslySetInnerHTML={{ __html:`
      (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "jnlf1ol7be");`}}/>
      <body className={font.className}>



        <Layout>
          <Suspense>
            {children}
          </Suspense>
        </Layout>
      </body>
    </html>
  )
}
