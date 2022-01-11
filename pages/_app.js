import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
  }, [])
  return (
    <>
      <Head>
        <title>{Component.title}</title>
      </Head>
        <Component {...pageProps} />
    </>
  )
}

export default MyApp
