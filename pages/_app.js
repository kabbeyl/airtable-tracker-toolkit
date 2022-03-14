import Layout from '../components/layout'
import '../styles/globals.css'
import "../styles/embla.css";

import Script from 'next/script'
import { MDXProvider } from '@mdx-js/react'
import MarkdownComponents from '../components/MarkdownComponents'

function MyApp({ Component, pageProps }) {

  return (
    <MDXProvider components={MarkdownComponents}>
    <Layout>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-4DDN1CY2GZ`}
      />

      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-4DDN1CY2GZ');
        `}
      </Script>
      <Component {...pageProps}/>
    </Layout>
    </MDXProvider>
  ) 
}

export default MyApp
