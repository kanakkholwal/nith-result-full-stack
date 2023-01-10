import '@/src/global.css'
import Head from 'next/head'
export default function App({ Component, pageProps }) {
  return <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="Title" content="NITH Results" />
      <meta name="Author" content="Kanak" />
      <meta name="description" content="Result Website for NIT Hamirpur" />
      <meta name="Keywords" content="nith,results,nith results,NIT Hamirpur Result" />

      <meta name="theme-color" content="#1b1f29" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/logo192.png" />
      <link rel="manifest" href="/manifest.json" />
    </Head>
    <Component {...pageProps} />
  </>
}
